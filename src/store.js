// Lưu cấu hình (JSON) và khóa API (mã hóa bằng safeStorage: DPAPI trên Windows, Keychain trên Mac, Secret Service trên Linux)
const fs = require('fs');
const path = require('path');

const DEFAULT_AGENTS = [
  {
    id: 'truong_phong', name: 'Minh', title: 'Trưởng phòng', isManager: true,
    role: 'Nhận việc từ sếp, chia nhỏ công việc, giao cho từng người, tổng hợp kết quả cuối cùng.',
    source: 'sim', model: '', hair: '#2b1d14', shirt: '#2f5d9e', skin: '#f1c9a5', hairStyle: 'short', slot: 0,
  },
  {
    id: 'nghien_cuu', name: 'Lan', title: 'Nghiên cứu',
    role: 'Tìm hiểu, phân tích thông tin, đưa ra số liệu và dữ kiện cần thiết.',
    source: 'sim', model: '', hair: '#5a3a1e', shirt: '#3f8f5a', skin: '#f6d7bd', hairStyle: 'long', slot: 1,
  },
  {
    id: 'viet_van_ban', name: 'Hùng', title: 'Viết văn bản',
    role: 'Soạn thảo văn bản, báo cáo, email rõ ràng, đúng văn phong tiếng Việt.',
    source: 'sim', model: '', hair: '#1a1a1a', shirt: '#b5653a', skin: '#e2ae84', hairStyle: 'spiky', slot: 2,
  },
  {
    id: 'kiem_tra', name: 'Thảo', title: 'Kiểm tra', isReviewer: true,
    role: 'Soát lỗi, kiểm tra tính chính xác và đầy đủ, yêu cầu sửa nếu chưa đạt.',
    source: 'sim', model: '', hair: '#7a2e2e', shirt: '#7b4fa0', skin: '#ebbf98', hairStyle: 'bun', slot: 3,
  },
];

const DEFAULT_CONFIG = {
  version: 1,
  agents: DEFAULT_AGENTS,
  outputDir: '',             // để trống = Documents\VanPhongAI
  maxRounds: 3,              // số lần tối đa agent được hỏi đồng nghiệp / sửa bài trong 1 task
  timeoutSec: 300,           // thời gian chờ tối đa cho mỗi lần gọi model
  cli: {
    claude: { cmd: 'claude', extraArgs: '' },
    codex: { cmd: 'codex', extraArgs: '' },
    gemini: { cmd: 'gemini', extraArgs: '' },
    antigravity: { cmd: 'agy', extraArgs: '' },
  },
  notify: true,              // thông báo + âm báo khi xong việc
  simiGateway: 'https://ai.simi.vn',  // nơi tải bộ cài SIMI (Codex + skill + key team)
  chatProjects: [],          // thư mục dự án cho tab Chat
  lobbyEnabled: true,        // kết nối Sảnh online trên SIMI Gateway
  autoUpdate: true,          // tự kiểm tra bản mới của app trên SIMI Gateway
  computerControl: true,     // cho AI trong tab Chat điều khiển chuột, bàn phím (luôn hỏi bạn cho phép trước)
  computerMinimize: true,    // thu nhỏ app khi AI đang điều khiển máy
  chatEngine: 'auto',        // 'auto' = dùng Codex của ChatGPT Work nếu có (Computer Use chạy ổn nhất), 'cli' = Codex CLI
  ollamaUrl: 'http://127.0.0.1:11434',
};

class Store {
  constructor(userDataDir, safeStorage) {
    this.dir = userDataDir;
    this.safe = safeStorage;
    this.cfgPath = path.join(userDataDir, 'config.json');
    this.secPath = path.join(userDataDir, 'secrets.bin');
    fs.mkdirSync(userDataDir, { recursive: true });
  }

  getConfig() {
    let cfg = {};
    try { cfg = JSON.parse(fs.readFileSync(this.cfgPath, 'utf8')); } catch { /* lần đầu */ }
    const merged = { ...structuredClone(DEFAULT_CONFIG), ...cfg };
    merged.cli = { ...DEFAULT_CONFIG.cli, ...(cfg.cli || {}) };
    if (!Array.isArray(merged.agents) || merged.agents.length === 0) merged.agents = structuredClone(DEFAULT_AGENTS);
    return merged;
  }

  saveConfig(cfg) {
    const tmp = this.cfgPath + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(cfg, null, 2), 'utf8');
    fs.renameSync(tmp, this.cfgPath);
  }

  _readSecrets() {
    try {
      const buf = fs.readFileSync(this.secPath);
      const txt = this.safe && this.safe.isEncryptionAvailable() ? this.safe.decryptString(buf) : buf.toString('utf8');
      return JSON.parse(txt);
    } catch { return {}; }
  }

  getSecret(name) { return this._readSecrets()[name] || ''; }

  secretStatus() {
    const s = this._readSecrets();
    return { anthropic: !!s.anthropic, openai: !!s.openai, gemini: !!s.gemini };
  }

  setSecret(name, value) {
    const s = this._readSecrets();
    if (value) s[name] = value; else delete s[name];
    const txt = JSON.stringify(s);
    const buf = this.safe && this.safe.isEncryptionAvailable() ? this.safe.encryptString(txt) : Buffer.from(txt, 'utf8');
    fs.writeFileSync(this.secPath, buf);
  }
}

module.exports = { Store, DEFAULT_CONFIG, DEFAULT_AGENTS };
