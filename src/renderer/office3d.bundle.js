(()=>{var Vl="169";var Uf=0,xc=1,Nf=2;var _s=1,Hf=2,Vn=3,si=0,rn=1,ye=2,Ln=0,es=1,Xr=2,_c=3,vc=4,zf=5,Ei=100,Bf=101,Ff=102,Of=103,kf=104,Gf=200,Vf=201,Wf=202,Xf=203,ga=204,ya=205,qf=206,Yf=207,Zf=208,$f=209,Jf=210,Kf=211,jf=212,Qf=213,tu=214,xa=0,_a=1,va=2,rs=3,Ma=4,Ea=5,wa=6,Sa=7,Ah=0,eu=1,nu=2,ii=0,iu=1,su=2,ru=3,tr=4,ou=5,au=6,lu=7;var Ch=300,os=301,as=302,ba=303,Ta=304,go=306,Tn=1e3,bi=1001,Ra=1002,sn=1003,cu=1004;var fr=1005;var Sn=1006,Uo=1007;var Ti=1008;var Xn=1009,Ph=1010,Ih=1011,Os=1012,Wl=1013,Ri=1014,In=1015,er=1016,Xl=1017,ql=1018,ls=1020,Lh=35902,Dh=1021,Uh=1022,bn=1023,Nh=1024,Hh=1025,ns=1026,cs=1027,Yl=1028,Zl=1029,zh=1030,$l=1031;var Jl=1033,Fr=33776,Or=33777,kr=33778,Gr=33779,Aa=35840,Ca=35841,Pa=35842,Ia=35843,La=36196,Da=37492,Ua=37496,Na=37808,Ha=37809,za=37810,Ba=37811,Fa=37812,Oa=37813,ka=37814,Ga=37815,Va=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Vr=36492,$a=36494,Ja=36495,Bh=36283,Ka=36284,ja=36285,Qa=36286;var qr=2300,tl=2301,No=2302,Mc=2400,Ec=2401,wc=2402;var hu=3200,fu=3201;var Fh=0,uu=1,ni="",_e="srgb",ui="srgb-linear",Kl="display-p3",yo="display-p3-linear",Yr="linear",Ee="srgb",Zr="rec709",$r="p3";var Bi=7680;var Sc=519,du=512,pu=513,mu=514,Oh=515,gu=516,yu=517,xu=518,_u=519,bc=35044,kh=35048;var Tc="300 es",Wn=2e3,Jr=2001,ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ho=Math.PI/180,el=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function vu(i,t){return(i%t+t)%t}function zo(i,t,e){return(1-e)*i+e*t}function Ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],u=s[6],_=s[1],x=s[4],M=s[7],R=s[2],S=s[5],b=s[8];return r[0]=o*v+a*_+l*R,r[3]=o*m+a*x+l*S,r[6]=o*u+a*M+l*b,r[1]=c*v+f*_+h*R,r[4]=c*m+f*x+h*S,r[7]=c*u+f*M+h*b,r[2]=d*v+p*_+g*R,r[5]=d*m+p*x+g*S,r[8]=d*u+p*M+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,d=a*l-f*r,p=c*r-o*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=h*v,t[1]=(s*c-f*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(f*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new ae;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){let i=ks("canvas");return i.style.display="block",i}var Rc={};function Wr(i){i in Rc||(Rc[i]=!0,console.warn(i))}function Eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Su(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ac=new ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[ui]:{transfer:Yr,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[_e]:{transfer:Ee,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[yo]:{transfer:Yr,primaries:$r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Cc),fromReference:i=>i.applyMatrix3(Ac)},[Kl]:{transfer:Ee,primaries:$r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cc),fromReference:i=>i.applyMatrix3(Ac).convertLinearToSRGB()}},bu=new Set([ui,yo]),me={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Rs[t].toReference,s=Rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===ni?Yr:Rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Rs[t].luminanceCoefficients)}};function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fi,nl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=ks("canvas")),Fi.width=t.width,Fi.height=t.height;let n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tu=0,Kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oo(s[o].image)):r.push(Oo(s[o]))}else r=Oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ru=0,Qe=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=Sn,o=Ti,a=bn,l=Xn,c=i.DEFAULT_ANISOTROPY,f=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=vs(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tn:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tn:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ch;Qe.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,M=(p+1)/2,R=(u+1)/2,S=(f+d)/4,b=(h+v)/4,I=(g+m)/4;return x>M&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=b/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=I/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Kr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends il{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sl=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==p||f!==g){let m=1-a,u=l*d+c*p+f*g+h*v,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let R=Math.sqrt(x),S=Math.atan2(R,u*_);m=Math.sin(m*S)/R,a=Math.sin(a*S)/R}let M=a*_;if(l=l*m+d*M,c=c*m+p*M,f=f*m+g*M,h=h*m+v*M,m===1-a){let R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+f*h+l*p-c*d,t[e+1]=l*g+f*d+c*h-a*p,t[e+2]=c*g+f*p+a*d-l*h,t[e+3]=f*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"YXZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"ZXY":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"ZYX":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"YZX":this._x=d*f*h+c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h-d*p*g;break;case"XZY":this._x=d*f*h-c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,d=Math.sin(e*f)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ko.copy(this).projectOnVector(t),this.sub(ko)}reflect(t){return this.sub(ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ko=new L,Pc=new mn,Yn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),dr.subVectors(this.max,As),Oi.subVectors(t.a,As),ki.subVectors(t.b,As),Gi.subVectors(t.c,As),Jn.subVectors(ki,Oi),Kn.subVectors(Gi,ki),mi.subVectors(Oi,Gi);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!Go(e,Oi,ki,Gi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,Oi,ki,Gi,dr))?!1:(pr.crossVectors(Jn,Kn),e=[pr.x,pr.y,pr.z],Go(e,Oi,ki,Gi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,ur=new Yn,Oi=new L,ki=new L,Gi=new L,Jn=new L,Kn=new L,mi=new L,As=new L,dr=new L,pr=new L,gi=new L;function Go(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),f=n.dot(gi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Au=new Yn,Cs=new L,Vo=new L,Dn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Vo)),this.expandByPoint(Cs.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new L,Wo=new L,mr=new L,jn=new L,Xo=new L,gr=new L,qo=new L,Gs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Wo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(mr),a=jn.dot(this.direction),l=-jn.dot(mr),c=jn.lengthSq(),f=Math.abs(1-o*o),h,d,p,g;if(f>0)if(h=o*l-a,d=o*a-l,g=r*f,h>=0)if(d>=-g)if(d<=g){let v=1/f;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wo).addScaledVector(mr,d),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),f>=0?(r=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){Xo.subVectors(e,t),gr.subVectors(n,t),qo.crossVectors(Xo,gr);let o=this.direction.dot(qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);let l=a*this.direction.dot(gr.crossVectors(jn,gr));if(l<0)return null;let c=a*this.direction.dot(Xo.cross(jn));if(c<0||l+c>o)return null;let f=-a*jn.dot(qo);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,l,c,f,h,d,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,f,h,d,p,g,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*f,p=o*h,g=a*f,v=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*f,p=l*h,g=c*f,v=c*h;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*f,p=l*h,g=c*f,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*f,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*f,p=o*h,g=a*f,v=a*h;e[0]=l*f,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*f,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=d*h+v,e[5]=o*f,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*f,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cu,t,Pu)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Qn.crossVectors(n,cn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Qn.crossVectors(n,cn)),Qn.normalize(),yr.crossVectors(cn,Qn),s[0]=Qn.x,s[4]=yr.x,s[8]=cn.x,s[1]=Qn.y,s[5]=yr.y,s[9]=cn.y,s[2]=Qn.z,s[6]=yr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],_=n[3],x=n[7],M=n[11],R=n[15],S=s[0],b=s[4],I=s[8],U=s[12],y=s[1],E=s[5],N=s[9],B=s[13],P=s[2],V=s[6],z=s[10],nt=s[14],$=s[3],J=s[7],ot=s[11],ct=s[15];return r[0]=o*S+a*y+l*P+c*$,r[4]=o*b+a*E+l*V+c*J,r[8]=o*I+a*N+l*z+c*ot,r[12]=o*U+a*B+l*nt+c*ct,r[1]=f*S+h*y+d*P+p*$,r[5]=f*b+h*E+d*V+p*J,r[9]=f*I+h*N+d*z+p*ot,r[13]=f*U+h*B+d*nt+p*ct,r[2]=g*S+v*y+m*P+u*$,r[6]=g*b+v*E+m*V+u*J,r[10]=g*I+v*N+m*z+u*ot,r[14]=g*U+v*B+m*nt+u*ct,r[3]=_*S+x*y+M*P+R*$,r[7]=_*b+x*E+M*V+R*J,r[11]=_*I+x*N+M*z+R*ot,r[15]=_*U+x*B+M*nt+R*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*f-r*l*f)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*f-n*c*f)+u*(-s*a*f-e*l*h+e*a*d+s*o*h-n*o*d+n*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],_=h*m*c-v*d*c+v*l*p-a*m*p-h*l*u+a*d*u,x=g*d*c-f*m*c-g*l*p+o*m*p+f*l*u-o*d*u,M=f*v*c-g*h*c+g*a*p-o*v*p-f*a*u+o*h*u,R=g*h*l-f*v*l-g*a*d+o*v*d+f*a*m-o*h*m,S=e*_+n*x+s*M+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/S;return t[0]=_*b,t[1]=(v*d*r-h*m*r-v*s*p+n*m*p+h*s*u-n*d*u)*b,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*u+n*l*u)*b,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*b,t[4]=x*b,t[5]=(f*m*r-g*d*r+g*s*p-e*m*p-f*s*u+e*d*u)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*u-e*l*u)*b,t[7]=(o*d*r-f*l*r+f*s*c-e*d*c-o*s*p+e*l*p)*b,t[8]=M*b,t[9]=(g*h*r-f*v*r-g*n*p+e*v*p+f*n*u-e*h*u)*b,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*u+e*a*u)*b,t[11]=(f*a*r-o*h*r-f*n*c+e*h*c+o*n*p-e*a*p)*b,t[12]=R*b,t[13]=(f*v*s-g*h*s+g*n*d-e*v*d-f*n*m+e*h*m)*b,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*b,t[15]=(o*h*s-f*a*s+f*n*l-e*h*l-o*n*d+e*a*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,d=r*c,p=r*f,g=r*h,v=o*f,m=o*h,u=a*h,_=l*c,x=l*f,M=l*h,R=n.x,S=n.y,b=n.z;return s[0]=(1-(v+u))*R,s[1]=(p+M)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(d+u))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+x)*b,s[9]=(m-_)*b,s[10]=(1-(d+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,f=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=f,Mn.elements[5]*=f,Mn.elements[6]*=f,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){let l=this.elements,c=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===Wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){let l=this.elements,c=1/(e-t),f=1/(n-s),h=1/(o-r),d=(e+t)*c,p=(n+s)*f,g,v;if(a===Wn)g=(o+r)*h,v=-2*h;else if(a===Jr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new L,Mn=new re,Cu=new L(0,0,0),Pu=new L(1,1,1),Qn=new L,yr=new L,cn=new L,Ic=new re,Lc=new mn,gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Iu=0,Dc=new L,Wi=new mn,On=new re,xr=new L,Ps=new L,Lu=new L,Du=new mn,Uc=new L(1,0,0),Nc=new L(0,1,0),Hc=new L(0,0,1),zc={type:"added"},Uu={type:"removed"},Xi={type:"childadded",child:null},Yo={type:"childremoved",child:null},De=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new gn,n=new mn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new ae}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ps,xr,this.up):On.lookAt(xr,Ps,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(On),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uu),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new L,kn=new L,Zo=new L,Gn=new L,qi=new L,Yi=new L,Bc=new L,$o=new L,Jo=new L,Ko=new L,jo=new xe,Qo=new xe,ta=new xe,wi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),kn.subVectors(n,e),Zo.subVectors(t,e);let o=En.dot(En),a=En.dot(kn),l=En.dot(Zo),c=kn.dot(kn),f=kn.dot(Zo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*f)*d,g=(o*f-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return jo.setScalar(0),Qo.setScalar(0),ta.setScalar(0),jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jo,r.x),o.addScaledVector(Qo,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),kn.subVectors(t,e),En.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),En.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),$o.subVectors(t,n);let l=qi.dot($o),c=Yi.dot($o);if(l<=0&&c<=0)return e.copy(n);Jo.subVectors(t,s);let f=qi.dot(Jo),h=Yi.dot(Jo);if(f>=0&&h<=f)return e.copy(s);let d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(qi,o);Ko.subVectors(t,r);let p=qi.dot(Ko),g=Yi.dot(Ko);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);let m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return Bc.subVectors(r,s),a=(h-f)/(h-f+(p-g)),e.copy(s).addScaledVector(Bc,a);let u=1/(m+v+d);return o=v*u,a=d*u,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=vu(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return me.fromWorkingColorSpace($e.copy(this),t),Math.round(qe($e.r*255,0,255))*65536+Math.round(qe($e.g*255,0,255))*256+Math.round(qe($e.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=_e){me.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(_r);let n=zo(ti.h,_r.h,e),s=zo(ti.s,_r.s,e),r=zo(ti.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Zt;Zt.NAMES=Vh;var Nu=0,oi=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=es,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=ya,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ne=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new L,vr=new Mt,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}};var Qr=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var to=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hu=0,pn=new re,na=new De,Zi=new L,hn=new Yn,Is=new Yn,Ve=new L,Re=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?to:Qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(hn.min,Is.min),hn.expandByPoint(Ve),Ve.addVectors(hn.max,Is.max),hn.expandByPoint(Ve)):(hn.expandByPoint(Is.min),hn.expandByPoint(Is.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ve.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(t,c),Ve.add(Zi)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let c=new L,f=new L,h=new L,d=new Mt,p=new Mt,g=new Mt,v=new L,m=new L;function u(I,U,y){c.fromBufferAttribute(n,I),f.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,U),g.fromBufferAttribute(r,y),f.sub(c),h.sub(c),p.sub(d),g.sub(d);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(E),a[I].add(v),a[U].add(v),a[y].add(v),l[I].add(m),l[U].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,U=_.length;I<U;++I){let y=_[I],E=y.start,N=y.count;for(let B=E,P=E+N;B<P;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new L,M=new L,R=new L,S=new L;function b(I){R.fromBufferAttribute(s,I),S.copy(R);let U=a[I];x.copy(U),x.sub(R.multiplyScalar(R.dot(U))).normalize(),M.crossVectors(S,U);let E=M.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,E)}for(let I=0,U=_.length;I<U;++I){let y=_[I],E=y.start,N=y.count;for(let B=E,P=E+N;B<P;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,f=new L,h=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let u=0;u<f;u++)d[g++]=c[p++]}return new ze(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let d=c[f],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fc=new re,yi=new Gs,Mr=new Dn,Oc=new L,Er=new L,wr=new L,Sr=new L,ia=new L,br=new L,kc=new L,Tr=new L,X=class extends De{constructor(t=new Re,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(ia.fromBufferAttribute(h,t),o?br.addScaledVector(ia,f):br.addScaledVector(ia.sub(e),f))}e.add(br)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Mr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Mr,Oc)===null||yi.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=x;M<R;M+=3){let S=a.getX(M),b=a.getX(M+1),I=a.getX(M+2);s=Rr(this,u,t,n,c,f,h,S,b,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){let _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Rr(this,o,t,n,c,f,h,_,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=x;M<R;M+=3){let S=M,b=M+1,I=M+2;s=Rr(this,u,t,n,c,f,h,S,b,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){let _=m,x=m+1,M=m+2;s=Rr(this,o,t,n,c,f,h,_,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zu(i,t,e,n,s,r,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:i}}function Rr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,wr),i.getVertexPosition(c,Sr);let f=zu(i,t,e,n,Er,wr,Sr,kc);if(f){let h=new L;wi.getBarycoord(kc,Er,wr,Sr,h),s&&(f.uv=wi.getInterpolatedAttribute(s,a,l,c,h,new Mt)),r&&(f.uv1=wi.getInterpolatedAttribute(r,a,l,c,h,new Mt)),o&&(f.normal=wi.getInterpolatedAttribute(o,a,l,c,h,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};wi.getNormal(Er,wr,Sr,d.normal),f.face=d,f.barycoord=h}return f}var Et=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(h,2));function g(v,m,u,_,x,M,R,S,b,I,U){let y=M/b,E=R/I,N=M/2,B=R/2,P=S/2,V=b+1,z=I+1,nt=0,$=0,J=new L;for(let ot=0;ot<z;ot++){let ct=ot*E-B;for(let bt=0;bt<V;bt++){let It=bt*y-N;J[v]=It*_,J[m]=ct*x,J[u]=P,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[u]=S>0?1:-1,f.push(J.x,J.y,J.z),h.push(bt/b),h.push(1-ot/I),nt+=1}}for(let ot=0;ot<I;ot++)for(let ct=0;ct<b;ct++){let bt=d+ct+V*ot,It=d+ct+V*(ot+1),et=d+(ct+1)+V*(ot+1),ht=d+(ct+1)+V*ot;l.push(bt,It,ht),l.push(It,et,ht),$+=6}a.addGroup(p,$,U),p+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Bu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Fu={clone:hs,merge:je},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},eo=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new L,Gc=new Mt,Vc=new Mt,Je=class extends eo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Ji=1,rl=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je($i,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Je($i,Ji,t,e);r.layers=this.layers,this.add(r);let o=new Je($i,Ji,t,e);o.layers=this.layers,this.add(o);let a=new Je($i,Ji,t,e);a.layers=this.layers,this.add(a);let l=new Je($i,Ji,t,e);l.layers=this.layers,this.add(l);let c=new Je($i,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},no=class extends Qe{constructor(t,e,n,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ol=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Et(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ln});r.uniforms.tEquirect.value=e;let o=new X(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Sn),new rl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},sa=new L,Gu=new L,Vu=new ae,wn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sa.subVectors(n,e).cross(Gu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vu.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Dn,Ar=new L,Ai=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],u=s[12],_=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-u).normalize(),n[1].setComponents(l+r,d+c,m+p,M+u).normalize(),n[2].setComponents(l+o,d+f,m+g,M+_).normalize(),n[3].setComponents(l-o,d-f,m-g,M-_).normalize(),n[4].setComponents(l-a,d-h,m-v,M-x).normalize(),e===Wn)n[5].setComponents(l+a,d+h,m+v,M+x).normalize();else if(e===Jr)n[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wu(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ie=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let u=0;u<f;u++){let _=u*d-o;for(let x=0;x<c;x++){let M=x*h-r;g.push(M,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){let x=_+c*u,M=_+c*(u+1),R=_+1+c*(u+1),S=_+1+c*u;p.push(x,M,S),p.push(M,R,S)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Xu,alphahash_pars_fragment:qu,alphamap_fragment:Yu,alphamap_pars_fragment:Zu,alphatest_fragment:$u,alphatest_pars_fragment:Ju,aomap_fragment:Ku,aomap_pars_fragment:ju,batching_pars_vertex:Qu,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:od,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:fd,color_pars_vertex:ud,color_vertex:dd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:yd,displacementmap_vertex:xd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:Md,colorspace_pars_fragment:Ed,envmap_fragment:wd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Ad,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Id,gradientmap_pars_fragment:Ld,lightmap_pars_fragment:Dd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Nd,lights_pars_begin:Hd,lights_toon_fragment:Bd,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:kd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:Jd,map_fragment:Kd,map_pars_fragment:jd,map_particle_fragment:Qd,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:fp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:yp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:Mp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Hp,tonemapping_pars_fragment:zp,transmission_fragment:Bp,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:kp,uv_vertex:Gp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:Zp,cube_frag:$p,depth_vert:Jp,depth_frag:Kp,distanceRGBA_vert:jp,distanceRGBA_frag:Qp,equirect_vert:t0,equirect_frag:e0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:s0,meshbasic_frag:r0,meshlambert_vert:o0,meshlambert_frag:a0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:f0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:y0,points_vert:x0,points_frag:_0,shadow_vert:v0,shadow_frag:M0,sprite_vert:E0,sprite_frag:w0},Ct={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Pn={basic:{uniforms:je([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:je([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:je([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:je([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:je([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:je([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:je([Ct.points,Ct.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:je([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:je([Ct.common,Ct.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:je([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:je([Ct.sprite,Ct.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:je([Ct.common,Ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:je([Ct.lights,Ct.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Pn.physical={uniforms:je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Cr={r:0,b:0,g:0},_i=new gn,S0=new re;function b0(i,t,e,n,s,r,o){let a=new Zt(0),l=r===!0?0:1,c,f,h=null,d=0,p=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1,M=g(_);M===null?u(a,l):M&&M.isColor&&(u(M,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===go)?(f===void 0&&(f=new X(new Et(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:hs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(_i)),f.material.toneMapped=me.getTransfer(M.colorSpace)!==Ee,(h!==M||d!==M.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new X(new ie(2,2),new Un({name:"BackgroundMaterial",uniforms:hs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(M.colorSpace)!==Ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,x){_.getRGB(Cr,Wh(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:v,addToRenderList:m}}function T0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,E,N,B,P){let V=!1,z=h(B,N,E);r!==z&&(r=z,c(r.object)),V=p(y,B,N,P),V&&g(y,B,N,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(y,E,N,B),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function h(y,E,N){let B=N.wireframe===!0,P=n[y.id];P===void 0&&(P={},n[y.id]=P);let V=P[E.id];V===void 0&&(V={},P[E.id]=V);let z=V[B];return z===void 0&&(z=d(l()),V[B]=z),z}function d(y){let E=[],N=[],B=[];for(let P=0;P<e;P++)E[P]=0,N[P]=0,B[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,E,N,B){let P=r.attributes,V=E.attributes,z=0,nt=N.getAttributes();for(let $ in nt)if(nt[$].location>=0){let ot=P[$],ct=V[$];if(ct===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ot===void 0||ot.attribute!==ct||ct&&ot.data!==ct.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(y,E,N,B){let P={},V=E.attributes,z=0,nt=N.getAttributes();for(let $ in nt)if(nt[$].location>=0){let ot=V[$];ot===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));let ct={};ct.attribute=ot,ot&&ot.data&&(ct.data=ot.data),P[$]=ct,z++}r.attributes=P,r.attributesNum=z,r.index=B}function v(){let y=r.newAttributes;for(let E=0,N=y.length;E<N;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){let N=r.newAttributes,B=r.enabledAttributes,P=r.attributeDivisors;N[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),P[y]!==E&&(i.vertexAttribDivisor(y,E),P[y]=E)}function _(){let y=r.newAttributes,E=r.enabledAttributes;for(let N=0,B=E.length;N<B;N++)E[N]!==y[N]&&(i.disableVertexAttribArray(N),E[N]=0)}function x(y,E,N,B,P,V,z){z===!0?i.vertexAttribIPointer(y,E,N,P,V):i.vertexAttribPointer(y,E,N,B,P,V)}function M(y,E,N,B){v();let P=B.attributes,V=N.getAttributes(),z=E.defaultAttributeValues;for(let nt in V){let $=V[nt];if($.location>=0){let J=P[nt];if(J===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){let ot=J.normalized,ct=J.itemSize,bt=t.get(J);if(bt===void 0)continue;let It=bt.buffer,et=bt.type,ht=bt.bytesPerElement,xt=et===i.INT||et===i.UNSIGNED_INT||J.gpuType===Wl;if(J.isInterleavedBufferAttribute){let yt=J.data,Ut=yt.stride,Gt=J.offset;if(yt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<$.locationSize;Xt++)u($.location+Xt,yt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Xt=0;Xt<$.locationSize;Xt++)m($.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Xt=0;Xt<$.locationSize;Xt++)x($.location+Xt,ct/$.locationSize,et,ot,Ut*ht,(Gt+ct/$.locationSize*Xt)*ht,xt)}else{if(J.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)u($.location+yt,J.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let yt=0;yt<$.locationSize;yt++)m($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let yt=0;yt<$.locationSize;yt++)x($.location+yt,ct/$.locationSize,et,ot,ct*ht,ct/$.locationSize*yt*ht,xt)}}else if(z!==void 0){let ot=z[nt];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv($.location,ot);break;case 3:i.vertexAttrib3fv($.location,ot);break;case 4:i.vertexAttrib4fv($.location,ot);break;default:i.vertexAttrib1fv($.location,ot)}}}}_()}function R(){I();for(let y in n){let E=n[y];for(let N in E){let B=E[N];for(let P in B)f(B[P].object),delete B[P];delete E[N]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let N in E){let B=E[N];for(let P in B)f(B[P].object),delete B[P];delete E[N]}delete n[y.id]}function b(y){for(let E in n){let N=n[E];if(N[y.id]===void 0)continue;let B=N[y.id];for(let P in B)f(B[P].object),delete B[P];delete N[y.id]}}function I(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function R0(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];e.update(p,n,1)}function l(c,f,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,f,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==bn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let I=b===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==In&&!I)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:S}}function C0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wn,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=f(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{let _=r?0:n,x=_*4,M=u.clippingState||null;l.value=M,M=f(g,d,x,p);for(let R=0;R!==x;++R)M[R]=e[R];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,d,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function P0(i){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=os:a===Ta&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ba||a===Ta)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ol(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ai=class extends eo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Wc=[.125,.215,.35,.446,.526,.582],Si=20,ra=new ai,Xc=new Zt,oa=null,aa=0,la=0,ca=!1,Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,qc=[new L(-Mi,Ki,0),new L(Mi,Ki,0),new L(-Ki,0,Mi),new L(Ki,0,Mi),new L(0,Mi,-Ki),new L(0,Mi,Ki),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],io=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:er,format:bn,colorSpace:ui,depthBuffer:!1},s=Yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(r)),this._blurMaterial=L0(r,t,e)}return s}_compileMaterial(t){let e=new X(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Xc),f.toneMapping=ii,f.autoClear=!1;let p=new ne({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new X(new Et,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Xc),v=!0);for(let u=0;u<6;u++){let _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;Pr(s,_*x,u>2?x:0,x,x),f.setRenderTarget(s),v&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qc[(s-r-1)%qc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new X(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=r/g,m=isFinite(r)?1+Math.floor(f*v):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let u=[],_=0;for(let b=0;b<Si;++b){let I=b/v,U=Math.exp(-I*I/2);u.push(U),b===0?_+=U:b<m&&(_+=2*U)}for(let b=0;b<u.length;b++)u[b]=u[b]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],R=3*M*(s>x-Qi?s-x+Qi:0),S=4*(this._cubeSize-M);Pr(e,R,S,3*M,2*M),l.setRenderTarget(e),l.render(h,ra)}};function I0(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Wc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=Wc[o-i+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,v=3,m=2,u=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let S=0;S<p;S++){let b=S%3*2/3-1,I=S>2?0:-1,U=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];_.set(U,v*g*S),x.set(d,m*g*S);let y=[S,S,S,S,S,S];M.set(y,u*g*S)}let R=new Re;R.setAttribute("position",new ze(_,v)),R.setAttribute("uv",new ze(x,m)),R.setAttribute("faceIndex",new ze(M,u)),t.push(R),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yc(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function L0(i,t,e){let n=new Float32Array(Si),s=new L(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Zc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $c(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ba||l===Ta,f=l===os||l===as;if(c||f){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new io(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new io(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function U0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let _=p.array;v=p.version;for(let x=0,M=_.length;x<M;x+=3){let R=_[x+0],S=_[x+1],b=_[x+2];d.push(R,S,S,b,b,R)}}else if(g!==void 0){let _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){let R=x+0,S=x+1,b=x+2;d.push(R,S,S,b,b,R)}}else return;let m=new(Gh(d)?to:Qr)(d,1);m.version=v;let u=r.get(h);u&&t.remove(u),r.set(h,m)}function f(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function H0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function f(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function h(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_];for(let _=0;_<v.length;_++)e.update(u,n,v[_])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function z0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,d=n.get(a);if(d===void 0||d.count!==h){let U=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let M=a.attributes.position.count*x,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*R*4*h),b=new jr(S,M,R,h);b.type=In,b.needsUpdate=!0;let I=x*4;for(let y=0;y<h;y++){let E=m[y],N=u[y],B=_[y],P=M*R*4*y;for(let V=0;V<E.count;V++){let z=V*I;p===!0&&(s.fromBufferAttribute(E,V),S[P+z+0]=s.x,S[P+z+1]=s.y,S[P+z+2]=s.z,S[P+z+3]=0),g===!0&&(s.fromBufferAttribute(N,V),S[P+z+4]=s.x,S[P+z+5]=s.y,S[P+z+6]=s.z,S[P+z+7]=0),v===!0&&(s.fromBufferAttribute(B,V),S[P+z+8]=s.x,S[P+z+9]=s.y,S[P+z+10]=s.z,S[P+z+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new Mt(M,R)},n.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var so=class extends Qe{constructor(t,e,n,s,r,o,a,l,c,f=ns){if(f!==ns&&f!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ns&&(n=Ri),n===void 0&&f===cs&&(n=ls),super(null,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qh=new Qe,Jc=new so(1,1),Yh=new jr,Zh=new sl,$h=new no,Kc=[],jc=[],Qc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xo(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Fe(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Fe(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Fe(e,n)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function K0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jc.compareFunction=Oh,r=Jc):r=qh,e.setTexture2D(t||r,s)}function nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function rm(i){switch(i){case 5126:return O0;case 35664:return k0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return $0;case 35669:case 35673:return J0;case 5125:return K0;case 36294:return j0;case 36295:return Q0;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}function om(i,t){i.uniform1fv(this.addr,t)}function am(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function lm(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function cm(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function hm(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fm(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function um(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dm(i,t){i.uniform1iv(this.addr,t)}function pm(i,t){i.uniform2iv(this.addr,t)}function mm(i,t){i.uniform3iv(this.addr,t)}function gm(i,t){i.uniform4iv(this.addr,t)}function ym(i,t){i.uniform1uiv(this.addr,t)}function xm(i,t){i.uniform2uiv(this.addr,t)}function _m(i,t){i.uniform3uiv(this.addr,t)}function vm(i,t){i.uniform4uiv(this.addr,t)}function Mm(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qh,r[o])}function Em(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zh,r[o])}function wm(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$h,r[o])}function Sm(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yh,r[o])}function bm(i){switch(i){case 5126:return om;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return fm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return ym;case 36294:return xm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Sm}}var al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rm(e.type)}},ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bm(e.type)}},cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ha=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){let n=i.name,s=n.length;for(ha.lastIndex=0;;){let r=ha.exec(n),o=ha.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nh(e,c===void 0?new al(a,i,t):new ll(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new cl(a),nh(e,h)),e=h}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ih(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rm=37297,Am=0;function Cm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Pm(i){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i),n;switch(t===e?n="":t===$r&&e===Zr?n="LinearDisplayP3ToLinearSRGB":t===Zr&&e===$r&&(n="LinearSRGBToLinearDisplayP3"),i){case ui:case yo:return[n,"LinearTransferOETF"];case _e:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),o)}else return s}function Im(i,t){let e=Pm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lm(i,t){let e;switch(t){case iu:e="Linear";break;case su:e="Reinhard";break;case ru:e="Cineon";break;case tr:e="ACESFilmic";break;case au:e="AgX";break;case lu:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ir=new L;function Dm(){me.getLuminanceCoefficients(Ir);let i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Nm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ns(i){return i!==""}function rh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(zm,Fm)}var Bm=new Map;function Fm(i,t){let e=oe[t];if(e===void 0){let n=Bm.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}var Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(Om,km)}function km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_s?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Gm(e),c=Vm(e),f=Wm(e),h=Xm(e),d=qm(e),p=Um(e),g=Nm(r),v=s.createProgram(),m,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),u.length>0&&(u+=`
`)):(m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),u=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?oe.tonemapping_pars_fragment:"",e.toneMapping!==ii?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Im("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=hl(o),o=rh(o,e),o=oh(o,e),a=hl(a),a=rh(a,e),a=oh(a,e),o=ah(o),a=ah(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=_+m+o,M=_+u+a,R=ih(s,s.VERTEX_SHADER,x),S=ih(s,s.FRAGMENT_SHADER,M);s.attachShader(v,R),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(E){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(R).trim(),P=s.getShaderInfoLog(S).trim(),V=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,S);else{let nt=sh(s,R,"vertex"),$=sh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+nt+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||P==="")&&(z=!1);z&&(E.diagnostics={runnable:V,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:P,prefix:u}})}s.deleteShader(R),s.deleteShader(S),I=new ss(s,v),U=Hm(s,v)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Rm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=S,this}var Zm=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ul(t),e.set(t,n)),n}},ul=class{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}};function $m(i,t,e,n,s,r,o){let a=new Vs,l=new fl,c=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,N,B,P){let V=B.fog,z=P.geometry,nt=y.isMeshStandardMaterial?B.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||nt),J=$&&$.mapping===go?$.image.height:null,ot=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,bt=ct!==void 0?ct.length:0,It=0;z.morphAttributes.position!==void 0&&(It=1),z.morphAttributes.normal!==void 0&&(It=2),z.morphAttributes.color!==void 0&&(It=3);let et,ht,xt,yt;if(ot){let he=Pn[ot];et=he.vertexShader,ht=he.fragmentShader}else et=y.vertexShader,ht=y.fragmentShader,l.update(y),xt=l.getVertexShaderID(y),yt=l.getFragmentShaderID(y);let Ut=i.getRenderTarget(),Gt=P.isInstancedMesh===!0,Xt=P.isBatchedMesh===!0,ee=!!y.map,ut=!!y.matcap,C=!!$,wt=!!y.aoMap,q=!!y.lightMap,Y=!!y.bumpMap,ft=!!y.normalMap,mt=!!y.displacementMap,pt=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,O=y.anisotropy>0,rt=y.clearcoat>0,at=y.dispersion>0,it=y.iridescence>0,Lt=y.sheen>0,vt=y.transmission>0,At=O&&!!y.anisotropyMap,Jt=rt&&!!y.clearcoatMap,H=rt&&!!y.clearcoatNormalMap,K=rt&&!!y.clearcoatRoughnessMap,gt=it&&!!y.iridescenceMap,Pt=it&&!!y.iridescenceThicknessMap,_t=Lt&&!!y.sheenColorMap,Yt=Lt&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,se=!!y.specularColorMap,F=!!y.specularIntensityMap,Rt=vt&&!!y.transmissionMap,st=vt&&!!y.thicknessMap,W=!!y.gradientMap,Z=!!y.alphaMap,lt=y.alphaTest>0,Ht=!!y.alphaHash,$t=!!y.extensions,ue=ii;y.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Qt={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:ht,defines:y.defines,customVertexShaderID:xt,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&P._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&P.instanceColor!==null,instancingMorph:Gt&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ui,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:ut,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:J,aoMap:wt,lightMap:q,bumpMap:Y,normalMap:ft,displacementMap:p&&mt,emissiveMap:pt,normalMapObjectSpace:ft&&y.normalMapType===uu,normalMapTangentSpace:ft&&y.normalMapType===Fh,metalnessMap:A,roughnessMap:w,anisotropy:O,anisotropyMap:At,clearcoat:rt,clearcoatMap:Jt,clearcoatNormalMap:H,clearcoatRoughnessMap:K,dispersion:at,iridescence:it,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:Lt,sheenColorMap:_t,sheenRoughnessMap:Yt,specularMap:Nt,specularColorMap:se,specularIntensityMap:F,transmission:vt,transmissionMap:Rt,thicknessMap:st,gradientMap:W,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:Ht,combine:y.combine,mapUv:ee&&m(y.map.channel),aoMapUv:wt&&m(y.aoMap.channel),lightMapUv:q&&m(y.lightMap.channel),bumpMapUv:Y&&m(y.bumpMap.channel),normalMapUv:ft&&m(y.normalMap.channel),displacementMapUv:mt&&m(y.displacementMap.channel),emissiveMapUv:pt&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:At&&m(y.anisotropyMap.channel),clearcoatMapUv:Jt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:H&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&m(y.sheenRoughnessMap.channel),specularMapUv:Nt&&m(y.specularMap.channel),specularColorMapUv:se&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:Rt&&m(y.transmissionMap.channel),thicknessMapUv:st&&m(y.thicknessMap.channel),alphaMapUv:Z&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(ee||Z),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:It,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ye,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function _(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(E,y),M(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){let E=v[y.type],N;if(E){let B=Pn[E];N=Fu.clone(B.uniforms)}else N=y.uniforms;return N}function S(y,E){let N;for(let B=0,P=f.length;B<P;B++){let V=f[B];if(V.cacheKey===E){N=V,++N.usedTimes;break}}return N===void 0&&(N=new Ym(i,E,y,r),f.push(N)),N}function b(y){if(--y.usedTimes===0){let E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function I(y){l.remove(y)}function U(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:R,acquireProgram:S,releaseProgram:b,releaseShaderCache:I,programs:f,dispose:U}}function Jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,v,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=m),t++,u}function a(h,d,p,g,v,m){let u=o(h,d,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(h,d,p,g,v,m){let u=o(h,d,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,d){e.length>1&&e.sort(h||Km),n.length>1&&n.sort(d||ch),s.length>1&&s.sort(d||ch)}function f(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hh,i.set(n,[o])):s>=r.length?(o=new hh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Zt};break;case"SpotLight":e={position:new L,direction:new L,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){let t=new Qm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new re,o=new re;function a(c){let f=0,h=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,_=0,x=0,M=0,R=0,S=0,b=0;c.sort(ng);for(let U=0,y=c.length;U<y;U++){let E=c[U],N=E.color,B=E.intensity,P=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=N.r*B,h+=N.g*B,d+=N.b*B;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],B);b++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=E.shadow.matrix,_++}n.directional[p]=z,p++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(N).multiplyScalar(B),z.distance=P,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[v]=z;let nt=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,nt.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[v]=nt.matrix,E.castShadow){let $=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=V,M++}v++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(N).multiplyScalar(B),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=z,m++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=z,g++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(B),z.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[u]=z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==_||I.numPointShadows!==x||I.numSpotShadows!==M||I.numSpotMaps!==R||I.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=b,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=_,I.numPointShadows=x,I.numSpotShadows=M,I.numSpotMaps=R,I.numLightProbes=b,n.version=eg++)}function l(c,f){let h=0,d=0,p=0,g=0,v=0,m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){let x=c[u];if(x.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function fh(i){let t=new ig(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new fh(i),t.set(s,[a])):r>=o.length?(a=new fh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dl=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pl=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ag(i,t,e){let n=new Ai,s=new Mt,r=new Mt,o=new xe,a=new dl({depthPacking:fu}),l=new pl,c={},f=e.maxTextureSize,h={[si]:rn,[rn]:si,[ye]:ye},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:rg,fragmentShader:og}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new X(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let u=this.type;this.render=function(S,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let U=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ln),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=u!==Vn&&this.type===Vn,P=u===Vn&&this.type!==Vn;for(let V=0,z=S.length;V<z;V++){let nt=S[V],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let J=$.getFrameExtents();if(s.multiply(J),r.copy($.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/J.x),s.x=r.x*J.x,$.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/J.y),s.y=r.y*J.y,$.mapSize.y=r.y)),$.map===null||B===!0||P===!0){let ct=this.type!==Vn?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new qn(s.x,s.y,ct),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ot=$.getViewportCount();for(let ct=0;ct<ot;ct++){let bt=$.getViewport(ct);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),N.viewport(o),$.updateMatrices(nt,ct),n=$.getFrustum(),M(b,I,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===Vn&&_($,I),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,y,E)};function _(S,b){let I=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,I,d,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,I,p,v,null)}function x(S,b,I,U){let y=null,E=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=y.uuid,B=b.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let V=P[B];V===void 0&&(V=y.clone(),P[B]=V,b.addEventListener("dispose",R)),y=V}if(y.visible=b.visible,y.wireframe=b.wireframe,U===Vn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=I}return y}function M(S,b,I,U,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Vn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let B=t.update(S),P=S.material;if(Array.isArray(P)){let V=B.groups;for(let z=0,nt=V.length;z<nt;z++){let $=V[z],J=P[$.materialIndex];if(J&&J.visible){let ot=x(S,J,U,y);S.onBeforeShadow(i,S,b,I,B,ot,$),i.renderBufferDirect(I,null,B,ot,S,$),S.onAfterShadow(i,S,b,I,B,ot,$)}}}else if(P.visible){let V=x(S,P,U,y);S.onBeforeShadow(i,S,b,I,B,V,null),i.renderBufferDirect(I,null,B,V,S,null),S.onAfterShadow(i,S,b,I,B,V,null)}}let N=S.children;for(let B=0,P=N.length;B<P;B++)M(N[B],b,I,U,y)}function R(S){S.target.removeEventListener("dispose",R);for(let I in c){let U=c[I],y=S.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}var lg={[xa]:_a,[va]:wa,[Ma]:Sa,[rs]:Ea,[_a]:xa,[wa]:va,[Sa]:Ma,[Ea]:rs};function cg(i){function t(){let F=!1,Rt=new xe,st=null,W=new xe(0,0,0,0);return{setMask:function(Z){st!==Z&&!F&&(i.colorMask(Z,Z,Z,Z),st=Z)},setLocked:function(Z){F=Z},setClear:function(Z,lt,Ht,$t,ue){ue===!0&&(Z*=$t,lt*=$t,Ht*=$t),Rt.set(Z,lt,Ht,$t),W.equals(Rt)===!1&&(i.clearColor(Z,lt,Ht,$t),W.copy(Rt))},reset:function(){F=!1,st=null,W.set(-1,0,0,0)}}}function e(){let F=!1,Rt=!1,st=null,W=null,Z=null;return{setReversed:function(lt){Rt=lt},setTest:function(lt){lt?xt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!F&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(Rt&&(lt=lg[lt]),W!==lt){switch(lt){case xa:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=lt}},setLocked:function(lt){F=lt},setClear:function(lt){Z!==lt&&(i.clearDepth(lt),Z=lt)},reset:function(){F=!1,st=null,W=null,Z=null}}}function n(){let F=!1,Rt=null,st=null,W=null,Z=null,lt=null,Ht=null,$t=null,ue=null;return{setTest:function(Qt){F||(Qt?xt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Qt){Rt!==Qt&&!F&&(i.stencilMask(Qt),Rt=Qt)},setFunc:function(Qt,he,Ne){(st!==Qt||W!==he||Z!==Ne)&&(i.stencilFunc(Qt,he,Ne),st=Qt,W=he,Z=Ne)},setOp:function(Qt,he,Ne){(lt!==Qt||Ht!==he||$t!==Ne)&&(i.stencilOp(Qt,he,Ne),lt=Qt,Ht=he,$t=Ne)},setLocked:function(Qt){F=Qt},setClear:function(Qt){ue!==Qt&&(i.clearStencil(Qt),ue=Qt)},reset:function(){F=!1,Rt=null,st=null,W=null,Z=null,lt=null,Ht=null,$t=null,ue=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},f={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,u=null,_=null,x=null,M=null,R=null,S=new Zt(0,0,0),b=0,I=!1,U=null,y=null,E=null,N=null,B=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,z=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),V=z>=1):nt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),V=z>=2);let $=null,J={},ot=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),bt=new xe().fromArray(ot),It=new xe().fromArray(ct);function et(F,Rt,st,W){let Z=new Uint8Array(4),lt=i.createTexture();i.bindTexture(F,lt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<st;Ht++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(Rt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return lt}let ht={};ht[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),r.setFunc(rs),q(!1),Y(xc),xt(i.CULL_FACE),C(Ln);function xt(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function yt(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function Ut(F,Rt){return f[F]!==Rt?(i.bindFramebuffer(F,Rt),f[F]=Rt,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Rt),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Gt(F,Rt){let st=d,W=!1;if(F){st=h.get(Rt),st===void 0&&(st=[],h.set(Rt,st));let Z=F.textures;if(st.length!==Z.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ht=Z.length;lt<Ht;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=Z.length,W=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,W=!0);W&&i.drawBuffers(st)}function Xt(F){return p!==F?(i.useProgram(F),p=F,!0):!1}let ee={[Ei]:i.FUNC_ADD,[Bf]:i.FUNC_SUBTRACT,[Ff]:i.FUNC_REVERSE_SUBTRACT};ee[Of]=i.MIN,ee[kf]=i.MAX;let ut={[Gf]:i.ZERO,[Vf]:i.ONE,[Wf]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[Jf]:i.SRC_ALPHA_SATURATE,[Zf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[Kf]:i.CONSTANT_COLOR,[jf]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(F,Rt,st,W,Z,lt,Ht,$t,ue,Qt){if(F===Ln){g===!0&&(yt(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),F!==zf){if(F!==v||Qt!==I){if((m!==Ei||x!==Ei)&&(i.blendEquation(i.FUNC_ADD),m=Ei,x=Ei),Qt)switch(F){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}u=null,_=null,M=null,R=null,S.set(0,0,0),b=0,v=F,I=Qt}return}Z=Z||Rt,lt=lt||st,Ht=Ht||W,(Rt!==m||Z!==x)&&(i.blendEquationSeparate(ee[Rt],ee[Z]),m=Rt,x=Z),(st!==u||W!==_||lt!==M||Ht!==R)&&(i.blendFuncSeparate(ut[st],ut[W],ut[lt],ut[Ht]),u=st,_=W,M=lt,R=Ht),($t.equals(S)===!1||ue!==b)&&(i.blendColor($t.r,$t.g,$t.b,ue),S.copy($t),b=ue),v=F,I=!1}function wt(F,Rt){F.side===ye?yt(i.CULL_FACE):xt(i.CULL_FACE);let st=F.side===rn;Rt&&(st=!st),q(st),F.blending===es&&F.transparent===!1?C(Ln):C(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);let W=F.stencilWrite;o.setTest(W),W&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(F){U!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),U=F)}function Y(F){F!==Uf?(xt(i.CULL_FACE),F!==y&&(F===xc?i.cullFace(i.BACK):F===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),y=F}function ft(F){F!==E&&(V&&i.lineWidth(F),E=F)}function mt(F,Rt,st){F?(xt(i.POLYGON_OFFSET_FILL),(N!==Rt||B!==st)&&(i.polygonOffset(Rt,st),N=Rt,B=st)):yt(i.POLYGON_OFFSET_FILL)}function pt(F){F?xt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+P-1),$!==F&&(i.activeTexture(F),$=F)}function w(F,Rt,st){st===void 0&&($===null?st=i.TEXTURE0+P-1:st=$);let W=J[st];W===void 0&&(W={type:void 0,texture:void 0},J[st]=W),(W.type!==F||W.texture!==Rt)&&($!==st&&(i.activeTexture(st),$=st),i.bindTexture(F,Rt||ht[F]),W.type=F,W.texture=Rt)}function O(){let F=J[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(F){bt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),bt.copy(F))}function _t(F){It.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),It.copy(F))}function Yt(F,Rt){let st=l.get(Rt);st===void 0&&(st=new WeakMap,l.set(Rt,st));let W=st.get(F);W===void 0&&(W=i.getUniformBlockIndex(Rt,F.name),st.set(F,W))}function Nt(F,Rt){let W=l.get(Rt).get(F);a.get(Rt)!==W&&(i.uniformBlockBinding(Rt,W,F.__bindingPointIndex),a.set(Rt,W))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,J={},f={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,u=null,_=null,x=null,M=null,R=null,S=new Zt(0,0,0),b=0,I=!1,U=null,y=null,E=null,N=null,B=null,bt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:xt,disable:yt,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:Xt,setBlending:C,setMaterial:wt,setFlipSided:q,setCullFace:Y,setLineWidth:ft,setPolygonOffset:mt,setScissorTest:pt,activeTexture:A,bindTexture:w,unbindTexture:O,compressedTexImage2D:rt,compressedTexImage3D:at,texImage2D:K,texImage3D:gt,updateUBOMapping:Yt,uniformBlockBinding:Nt,texStorage2D:Jt,texStorage3D:H,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:Pt,viewport:_t,reset:se}}function uh(i,t,e,n){let s=hg(n);switch(e){case Dh:return i*t;case Nh:return i*t;case Hh:return i*t*2;case Yl:return i*t/s.components*s.byteLength;case Zl:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case $l:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Jl:return i*t*4/s.components*s.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vr:case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bh:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(i){switch(i){case Xn:case Ph:return{byteLength:1,components:1};case Os:case Ih:case er:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Ri:case Wl:case In:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,f=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return p?new OffscreenCanvas(A,w):ks("canvas")}function v(A,w,O){let rt=1,at=pt(A);if((at.width>O||at.height>O)&&(rt=O/Math.max(at.width,at.height)),rt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(rt*at.width),Lt=Math.floor(rt*at.height);h===void 0&&(h=g(it,Lt));let vt=w?g(it,Lt):h;return vt.width=it,vt.height=Lt,vt.getContext("2d").drawImage(A,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+it+"x"+Lt+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==sn&&A.minFilter!==Sn}function u(A){i.generateMipmap(A)}function _(A,w,O,rt,at=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=w;if(w===i.RED&&(O===i.FLOAT&&(it=i.R32F),O===i.HALF_FLOAT&&(it=i.R16F),O===i.UNSIGNED_BYTE&&(it=i.R8)),w===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.R8UI),O===i.UNSIGNED_SHORT&&(it=i.R16UI),O===i.UNSIGNED_INT&&(it=i.R32UI),O===i.BYTE&&(it=i.R8I),O===i.SHORT&&(it=i.R16I),O===i.INT&&(it=i.R32I)),w===i.RG&&(O===i.FLOAT&&(it=i.RG32F),O===i.HALF_FLOAT&&(it=i.RG16F),O===i.UNSIGNED_BYTE&&(it=i.RG8)),w===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RG8UI),O===i.UNSIGNED_SHORT&&(it=i.RG16UI),O===i.UNSIGNED_INT&&(it=i.RG32UI),O===i.BYTE&&(it=i.RG8I),O===i.SHORT&&(it=i.RG16I),O===i.INT&&(it=i.RG32I)),w===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RGB8UI),O===i.UNSIGNED_SHORT&&(it=i.RGB16UI),O===i.UNSIGNED_INT&&(it=i.RGB32UI),O===i.BYTE&&(it=i.RGB8I),O===i.SHORT&&(it=i.RGB16I),O===i.INT&&(it=i.RGB32I)),w===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),O===i.UNSIGNED_INT&&(it=i.RGBA32UI),O===i.BYTE&&(it=i.RGBA8I),O===i.SHORT&&(it=i.RGBA16I),O===i.INT&&(it=i.RGBA32I)),w===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),w===i.RGBA){let Lt=at?Yr:me.getTransfer(rt);O===i.FLOAT&&(it=i.RGBA32F),O===i.HALF_FLOAT&&(it=i.RGBA16F),O===i.UNSIGNED_BYTE&&(it=Lt===Ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(A,w){let O;return A?w===null||w===Ri||w===ls?O=i.DEPTH24_STENCIL8:w===In?O=i.DEPTH32F_STENCIL8:w===Os&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ri||w===ls?O=i.DEPTH_COMPONENT24:w===In?O=i.DEPTH_COMPONENT32F:w===Os&&(O=i.DEPTH_COMPONENT16),O}function M(A,w){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function R(A){let w=A.target;w.removeEventListener("dispose",R),b(w),w.isVideoTexture&&f.delete(w)}function S(A){let w=A.target;w.removeEventListener("dispose",S),U(w)}function b(A){let w=n.get(A);if(w.__webglInit===void 0)return;let O=A.source,rt=d.get(O);if(rt){let at=rt[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(A),Object.keys(rt).length===0&&d.delete(O)}n.remove(A)}function I(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let O=A.source,rt=d.get(O);delete rt[w.__cacheKey],o.memory.textures--}function U(A){let w=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let at=0;at<w.__webglFramebuffer[rt].length;at++)i.deleteFramebuffer(w.__webglFramebuffer[rt][at]);else i.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[rt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let O=A.textures;for(let rt=0,at=O.length;rt<at;rt++){let it=n.get(O[rt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(O[rt])}n.remove(A)}let y=0;function E(){y=0}function N(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function B(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function P(A,w){let O=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let rt=A.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(O,A,w);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+w)}function V(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){It(O,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+w)}function z(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){It(O,A,w);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+w)}function nt(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){et(O,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+w)}let $={[Tn]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},J={[sn]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},ot={[du]:i.NEVER,[_u]:i.ALWAYS,[pu]:i.LESS,[Oh]:i.LEQUAL,[mu]:i.EQUAL,[xu]:i.GEQUAL,[gu]:i.GREATER,[yu]:i.NOTEQUAL};function ct(A,w){if(w.type===In&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===Uo||w.magFilter===fr||w.magFilter===Ti||w.minFilter===Sn||w.minFilter===Uo||w.minFilter===fr||w.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ot[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==fr&&w.minFilter!==Ti||w.type===In&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function bt(A,w){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",R));let rt=w.source,at=d.get(rt);at===void 0&&(at={},d.set(rt,at));let it=B(w);if(it!==A.__cacheKey){at[it]===void 0&&(at[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),at[it].usedTimes++;let Lt=at[A.__cacheKey];Lt!==void 0&&(at[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&I(w)),A.__cacheKey=it,A.__webglTexture=at[it].texture}return O}function It(A,w,O){let rt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=i.TEXTURE_3D);let at=bt(A,w),it=w.source;e.bindTexture(rt,A.__webglTexture,i.TEXTURE0+O);let Lt=n.get(it);if(it.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+O);let vt=me.getPrimaries(me.workingColorSpace),At=w.colorSpace===ni?null:me.getPrimaries(w.colorSpace),Jt=w.colorSpace===ni||vt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let H=v(w.image,!1,s.maxTextureSize);H=mt(w,H);let K=r.convert(w.format,w.colorSpace),gt=r.convert(w.type),Pt=_(w.internalFormat,K,gt,w.colorSpace,w.isVideoTexture);ct(rt,w);let _t,Yt=w.mipmaps,Nt=w.isVideoTexture!==!0,se=Lt.__version===void 0||at===!0,F=it.dataReady,Rt=M(w,H);if(w.isDepthTexture)Pt=x(w.format===cs,w.type),se&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Pt,H.width,H.height):e.texImage2D(i.TEXTURE_2D,0,Pt,H.width,H.height,0,K,gt,null));else if(w.isDataTexture)if(Yt.length>0){Nt&&se&&e.texStorage2D(i.TEXTURE_2D,Rt,Pt,Yt[0].width,Yt[0].height);for(let st=0,W=Yt.length;st<W;st++)_t=Yt[st],Nt?F&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,K,gt,_t.data):e.texImage2D(i.TEXTURE_2D,st,Pt,_t.width,_t.height,0,K,gt,_t.data);w.generateMipmaps=!1}else Nt?(se&&e.texStorage2D(i.TEXTURE_2D,Rt,Pt,H.width,H.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,K,gt,H.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,H.width,H.height,0,K,gt,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Pt,Yt[0].width,Yt[0].height,H.depth);for(let st=0,W=Yt.length;st<W;st++)if(_t=Yt[st],w.format!==bn)if(K!==null)if(Nt){if(F)if(w.layerUpdates.size>0){let Z=uh(_t.width,_t.height,w.format,w.type);for(let lt of w.layerUpdates){let Ht=_t.data.subarray(lt*Z/_t.data.BYTES_PER_ELEMENT,(lt+1)*Z/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,_t.width,_t.height,1,K,Ht,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,H.depth,K,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Pt,_t.width,_t.height,H.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,H.depth,K,gt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Pt,_t.width,_t.height,H.depth,0,K,gt,_t.data)}else{Nt&&se&&e.texStorage2D(i.TEXTURE_2D,Rt,Pt,Yt[0].width,Yt[0].height);for(let st=0,W=Yt.length;st<W;st++)_t=Yt[st],w.format!==bn?K!==null?Nt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,K,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?F&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,K,gt,_t.data):e.texImage2D(i.TEXTURE_2D,st,Pt,_t.width,_t.height,0,K,gt,_t.data)}else if(w.isDataArrayTexture)if(Nt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Pt,H.width,H.height,H.depth),F)if(w.layerUpdates.size>0){let st=uh(H.width,H.height,w.format,w.type);for(let W of w.layerUpdates){let Z=H.data.subarray(W*st/H.data.BYTES_PER_ELEMENT,(W+1)*st/H.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,H.width,H.height,1,K,gt,Z)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,K,gt,H.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,H.width,H.height,H.depth,0,K,gt,H.data);else if(w.isData3DTexture)Nt?(se&&e.texStorage3D(i.TEXTURE_3D,Rt,Pt,H.width,H.height,H.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,K,gt,H.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,H.width,H.height,H.depth,0,K,gt,H.data);else if(w.isFramebufferTexture){if(se)if(Nt)e.texStorage2D(i.TEXTURE_2D,Rt,Pt,H.width,H.height);else{let st=H.width,W=H.height;for(let Z=0;Z<Rt;Z++)e.texImage2D(i.TEXTURE_2D,Z,Pt,st,W,0,K,gt,null),st>>=1,W>>=1}}else if(Yt.length>0){if(Nt&&se){let st=pt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Pt,st.width,st.height)}for(let st=0,W=Yt.length;st<W;st++)_t=Yt[st],Nt?F&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,K,gt,_t):e.texImage2D(i.TEXTURE_2D,st,Pt,K,gt,_t);w.generateMipmaps=!1}else if(Nt){if(se){let st=pt(H);e.texStorage2D(i.TEXTURE_2D,Rt,Pt,st.width,st.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K,gt,H)}else e.texImage2D(i.TEXTURE_2D,0,Pt,K,gt,H);m(w)&&u(rt),Lt.__version=it.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function et(A,w,O){if(w.image.length!==6)return;let rt=bt(A,w),at=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let it=n.get(at);if(at.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+O);let Lt=me.getPrimaries(me.workingColorSpace),vt=w.colorSpace===ni?null:me.getPrimaries(w.colorSpace),At=w.colorSpace===ni||Lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,H=w.image[0]&&w.image[0].isDataTexture,K=[];for(let W=0;W<6;W++)!Jt&&!H?K[W]=v(w.image[W],!0,s.maxCubemapSize):K[W]=H?w.image[W].image:w.image[W],K[W]=mt(w,K[W]);let gt=K[0],Pt=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),Yt=_(w.internalFormat,Pt,_t,w.colorSpace),Nt=w.isVideoTexture!==!0,se=it.__version===void 0||rt===!0,F=at.dataReady,Rt=M(w,gt);ct(i.TEXTURE_CUBE_MAP,w);let st;if(Jt){Nt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Yt,gt.width,gt.height);for(let W=0;W<6;W++){st=K[W].mipmaps;for(let Z=0;Z<st.length;Z++){let lt=st[Z];w.format!==bn?Pt!==null?Nt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,0,0,lt.width,lt.height,Pt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,0,0,lt.width,lt.height,Pt,_t,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,Yt,lt.width,lt.height,0,Pt,_t,lt.data)}}}else{if(st=w.mipmaps,Nt&&se){st.length>0&&Rt++;let W=pt(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Yt,W.width,W.height)}for(let W=0;W<6;W++)if(H){Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,K[W].width,K[W].height,Pt,_t,K[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Yt,K[W].width,K[W].height,0,Pt,_t,K[W].data);for(let Z=0;Z<st.length;Z++){let Ht=st[Z].image[W].image;Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,0,0,Ht.width,Ht.height,Pt,_t,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,Yt,Ht.width,Ht.height,0,Pt,_t,Ht.data)}}else{Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Pt,_t,K[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Yt,Pt,_t,K[W]);for(let Z=0;Z<st.length;Z++){let lt=st[Z];Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,0,0,Pt,_t,lt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,Yt,Pt,_t,lt.image[W])}}}m(w)&&u(i.TEXTURE_CUBE_MAP),it.__version=at.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ht(A,w,O,rt,at,it){let Lt=r.convert(O.format,O.colorSpace),vt=r.convert(O.type),At=_(O.internalFormat,Lt,vt,O.colorSpace);if(!n.get(w).__hasExternalTextures){let H=Math.max(1,w.width>>it),K=Math.max(1,w.height>>it);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,it,At,H,K,w.depth,0,Lt,vt,null):e.texImage2D(at,it,At,H,K,0,Lt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Y(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,at,n.get(O).__webglTexture,0,q(w)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,at,n.get(O).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,w,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){let rt=w.depthTexture,at=rt&&rt.isDepthTexture?rt.type:null,it=x(w.stencilBuffer,at),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=q(w);Y(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,it,w.width,w.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,it,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,it,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,A)}else{let rt=w.textures;for(let at=0;at<rt.length;at++){let it=rt[at],Lt=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),At=_(it.internalFormat,Lt,vt,it.colorSpace),Jt=q(w);O&&Y(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,At,w.width,w.height):Y(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,At,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,At,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);let rt=n.get(w.depthTexture).__webglTexture,at=q(w);if(w.depthTexture.format===ns)Y(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(w.depthTexture.format===cs)Y(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ut(A){let w=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let rt=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){let at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",at)};rt.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=rt}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");yt(w.__webglFramebuffer,A)}else if(O){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=i.createRenderbuffer(),xt(w.__webglDepthbuffer[rt],A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),xt(w.__webglDepthbuffer,A,!1);else{let rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,w,O){let rt=n.get(A);w!==void 0&&ht(rt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(A)}function Xt(A){let w=A.texture,O=n.get(A),rt=n.get(w);A.addEventListener("dispose",S);let at=A.textures,it=A.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=w.version,o.memory.textures++),it){O.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[vt]=[];for(let At=0;At<w.mipmaps.length;At++)O.__webglFramebuffer[vt][At]=i.createFramebuffer()}else O.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let vt=0;vt<w.mipmaps.length;vt++)O.__webglFramebuffer[vt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let vt=0,At=at.length;vt<At;vt++){let Jt=n.get(at[vt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Y(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let vt=0;vt<at.length;vt++){let At=at[vt];O.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[vt]);let Jt=r.convert(At.format,At.colorSpace),H=r.convert(At.type),K=_(At.internalFormat,Jt,H,At.colorSpace,A.isXRRenderTarget===!0),gt=q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,O.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ct(i.TEXTURE_CUBE_MAP,w);for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)ht(O.__webglFramebuffer[vt][At],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else ht(O.__webglFramebuffer[vt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(w)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let vt=0,At=at.length;vt<At;vt++){let Jt=at[vt],H=n.get(Jt);e.bindTexture(i.TEXTURE_2D,H.__webglTexture),ct(i.TEXTURE_2D,Jt),ht(O.__webglFramebuffer,A,Jt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(Jt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),ct(vt,w),w.mipmaps&&w.mipmaps.length>0)for(let At=0;At<w.mipmaps.length;At++)ht(O.__webglFramebuffer[At],A,w,i.COLOR_ATTACHMENT0,vt,At);else ht(O.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,vt,0);m(w)&&u(vt),e.unbindTexture()}A.depthBuffer&&Ut(A)}function ee(A){let w=A.textures;for(let O=0,rt=w.length;O<rt;O++){let at=w[O];if(m(at)){let it=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(at).__webglTexture;e.bindTexture(it,Lt),u(it),e.unbindTexture()}}}let ut=[],C=[];function wt(A){if(A.samples>0){if(Y(A)===!1){let w=A.textures,O=A.width,rt=A.height,at=i.COLOR_BUFFER_BIT,it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(A),vt=w.length>1;if(vt)for(let At=0;At<w.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<w.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);let Jt=n.get(w[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,O,rt,0,0,O,rt,at,i.NEAREST),l===!0&&(ut.length=0,C.length=0,ut.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(it),C.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let At=0;At<w.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);let Jt=n.get(w[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function q(A){return Math.min(s.maxSamples,A.samples)}function Y(A){let w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(A){let w=o.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function mt(A,w){let O=A.colorSpace,rt=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ui&&O!==ni&&(me.getTransfer(O)===Ee?(rt!==bn||at!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=P,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=nt,this.rebindTextures=Gt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Y}function ug(i,t){function e(n,s=ni){let r,o=me.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===bn)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Hh)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Jl)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===kr||n===Gr)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ca||n===Pa||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Ha||n===za||n===Ba||n===Fa||n===Oa||n===ka||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===$a||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vr)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===Ka||n===ja||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ml=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},zt=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},dg={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,g=null,v=new gl,m=e.getContextAttributes(),u=null,_=null,x=[],M=[],R=new Mt,S=null,b=new Je;b.layers.enable(1),b.viewport=new xe;let I=new Je;I.layers.enable(2),I.viewport=new xe;let U=[b,I],y=new ml;y.layers.enable(1),y.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=x[et];return ht===void 0&&(ht=new Hs,x[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=x[et];return ht===void 0&&(ht=new Hs,x[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=x[et];return ht===void 0&&(ht=new Hs,x[et]=ht),ht.getHandSpace()};function B(et){let ht=M.indexOf(et.inputSource);if(ht===-1)return;let xt=x[ht];xt!==void 0&&(xt.update(et.inputSource,et.frame,c||o),xt.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",V);for(let et=0;et<x.length;et++){let ht=M[et];ht!==null&&(M[et]=null,x[et].disconnect(ht))}E=null,N=null,v.reset(),t.setRenderTarget(u),p=null,d=null,h=null,s=null,_=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",P),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new qn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,xt=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?cs:ns,xt=m.stencil?ls:Ri);let Ut={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new qn(d.textureWidth,d.textureHeight,{format:bn,type:Xn,depthTexture:new so(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(et){for(let ht=0;ht<et.removed.length;ht++){let xt=et.removed[ht],yt=M.indexOf(xt);yt>=0&&(M[yt]=null,x[yt].disconnect(xt))}for(let ht=0;ht<et.added.length;ht++){let xt=et.added[ht],yt=M.indexOf(xt);if(yt===-1){for(let Gt=0;Gt<x.length;Gt++)if(Gt>=M.length){M.push(xt),yt=Gt;break}else if(M[Gt]===null){M[Gt]=xt,yt=Gt;break}if(yt===-1)break}let Ut=x[yt];Ut&&Ut.connect(xt)}}let z=new L,nt=new L;function $(et,ht,xt){z.setFromMatrixPosition(ht.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let yt=z.distanceTo(nt),Ut=ht.projectionMatrix.elements,Gt=xt.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),ee=Ut[14]/(Ut[10]+1),ut=(Ut[9]+1)/Ut[5],C=(Ut[9]-1)/Ut[5],wt=(Ut[8]-1)/Ut[0],q=(Gt[8]+1)/Gt[0],Y=Xt*wt,ft=Xt*q,mt=yt/(-wt+q),pt=mt*-wt;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(pt),et.translateZ(mt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ut[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let A=Xt+mt,w=ee+mt,O=Y-pt,rt=ft+(yt-pt),at=ut*ee/w*A,it=C*ee/w*A;et.projectionMatrix.makePerspective(O,rt,at,it,A,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function J(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ht=et.near,xt=et.far;v.texture!==null&&(v.depthNear>0&&(ht=v.depthNear),v.depthFar>0&&(xt=v.depthFar)),y.near=I.near=b.near=ht,y.far=I.far=b.far=xt,(E!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,N=y.far);let yt=et.parent,Ut=y.cameras;J(y,yt);for(let Gt=0;Gt<Ut.length;Gt++)J(Ut[Gt],yt);Ut.length===2?$(y,b,I):y.projectionMatrix.copy(b.projectionMatrix),ot(et,y,yt)};function ot(et,ht,xt){xt===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(xt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=el*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ct=null;function bt(et,ht){if(f=ht.getViewerPose(c||o),g=ht,f!==null){let xt=f.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let yt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,yt=!0);for(let Gt=0;Gt<xt.length;Gt++){let Xt=xt[Gt],ee=null;if(p!==null)ee=p.getViewport(Xt);else{let C=h.getViewSubImage(d,Xt);ee=C.viewport,Gt===0&&(t.setRenderTargetTextures(_,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(_))}let ut=U[Gt];ut===void 0&&(ut=new Je,ut.layers.enable(Gt),ut.viewport=new xe,U[Gt]=ut),ut.matrix.fromArray(Xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ee.x,ee.y,ee.width,ee.height),Gt===0&&(y.matrix.copy(ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),yt===!0&&y.cameras.push(ut)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Gt=h.getDepthInformation(xt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let xt=0;xt<x.length;xt++){let yt=M[xt],Ut=x[xt];yt!==null&&Ut!==void 0&&Ut.update(yt,ht,c||o)}ct&&ct(et,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let It=new Xh;It.setAnimationLoop(bt),this.setAnimationLoop=function(et){ct=et},this.dispose=function(){}}},vi=new gn,gg=new re;function yg(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Wh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),f(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),x=_.envMap,M=_.envMapRotation;x&&(m.envMap.value=x,vi.copy(M),vi.x*=-1,vi.y*=-1,vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(vi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let M=x.program;n.uniformBlockBinding(_,M)}function c(_,x){let M=s[_.id];M===void 0&&(g(_),M=f(_),s[_.id]=M,_.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(_,R);let S=t.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function f(_){let x=h();_.__bindingPointIndex=x;let M=i.createBuffer(),R=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],M=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,b=M.length;S<b;S++){let I=Array.isArray(M[S])?M[S]:[M[S]];for(let U=0,y=I.length;U<y;U++){let E=I[U];if(p(E,S,U,R)===!0){let N=E.__offset,B=Array.isArray(E.value)?E.value:[E.value],P=0;for(let V=0;V<B.length;V++){let z=B[V],nt=v(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+P,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,P),P+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,M,R){let S=_.value,b=x+"_"+M;if(R[b]===void 0)return typeof S=="number"||typeof S=="boolean"?R[b]=S:R[b]=S.clone(),!0;{let I=R[b];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return R[b]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(_){let x=_.uniforms,M=0,R=16;for(let b=0,I=x.length;b<I;b++){let U=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,E=U.length;y<E;y++){let N=U[y],B=Array.isArray(N.value)?N.value:[N.value];for(let P=0,V=B.length;P<V;P++){let z=B[P],nt=v(z),$=M%R,J=$%nt.boundary,ot=$+J;M+=J,ot!==0&&R-ot<nt.storage&&(M+=R-ot),N.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=nt.storage}}}let S=M%R;return S>0&&(M+=R-S),_.__size=M,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var fs=class{constructor(t={}){let{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,u=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=ii,this.toneMappingExposure=1;let x=this,M=!1,R=0,S=0,b=null,I=-1,U=null,y=new xe,E=new xe,N=null,B=new Zt(0),P=0,V=e.width,z=e.height,nt=1,$=null,J=null,ot=new xe(0,0,V,z),ct=new xe(0,0,V,z),bt=!1,It=new Ai,et=!1,ht=!1,xt=new re,yt=new re,Ut=new L,Gt=new xe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ut(){return b===null?nt:1}let C=n;function wt(T,k){return e.getContext(T,k)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",lt,!1),C===null){let k="webgl2";if(C=wt(k,T),C===null)throw wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let q,Y,ft,mt,pt,A,w,O,rt,at,it,Lt,vt,At,Jt,H,K,gt,Pt,_t,Yt,Nt,se,F;function Rt(){q=new U0(C),q.init(),Nt=new ug(C,q),Y=new A0(C,q,t,Nt),ft=new cg(C),Y.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),mt=new z0(C),pt=new Jm,A=new fg(C,q,ft,pt,Y,Nt,mt),w=new P0(x),O=new D0(x),rt=new Wu(C),se=new T0(C,rt),at=new N0(C,rt,mt,se),it=new F0(C,at,rt,mt),Pt=new B0(C,Y,A),H=new C0(pt),Lt=new $m(x,w,O,q,Y,se,H),vt=new yg(x,pt),At=new jm,Jt=new sg(q),gt=new b0(x,w,O,ft,it,d,l),K=new ag(x,it,Y),F=new xg(C,mt,Y,ft),_t=new R0(C,q,mt),Yt=new H0(C,q,mt),mt.programs=Lt.programs,x.capabilities=Y,x.extensions=q,x.properties=pt,x.renderLists=At,x.shadowMap=K,x.state=ft,x.info=mt}Rt();let st=new yl(x,C);this.xr=st,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(V,z,!1))},this.getSize=function(T){return T.set(V,z)},this.setSize=function(T,k,Q=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,z=k,e.width=Math.floor(T*nt),e.height=Math.floor(k*nt),Q===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(V*nt,z*nt).floor()},this.setDrawingBufferSize=function(T,k,Q){V=T,z=k,nt=Q,e.width=Math.floor(T*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,k,Q,tt){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,k,Q,tt),ft.viewport(y.copy(ot).multiplyScalar(nt).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,k,Q,tt){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,k,Q,tt),ft.scissor(E.copy(ct).multiplyScalar(nt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(T){ft.setScissorTest(bt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(T=!0,k=!0,Q=!0){let tt=0;if(T){let G=!1;if(b!==null){let St=b.texture.format;G=St===Jl||St===$l||St===Zl}if(G){let St=b.texture.type,Dt=St===Xn||St===Ri||St===Os||St===ls||St===Xl||St===ql,Bt=gt.getClearColor(),Ft=gt.getClearAlpha(),jt=Bt.r,te=Bt.g,kt=Bt.b;Dt?(p[0]=jt,p[1]=te,p[2]=kt,p[3]=Ft,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=jt,g[1]=te,g[2]=kt,g[3]=Ft,C.clearBufferiv(C.COLOR,0,g))}else tt|=C.COLOR_BUFFER_BIT}k&&(tt|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(tt|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),At.dispose(),Jt.dispose(),pt.dispose(),w.dispose(),O.dispose(),it.dispose(),se.dispose(),F.dispose(),Lt.dispose(),st.dispose(),st.removeEventListener("sessionstart",ke),st.removeEventListener("sessionend",Ge),Ae.stop()};function W(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=mt.autoReset,k=K.enabled,Q=K.autoUpdate,tt=K.needsUpdate,G=K.type;Rt(),mt.autoReset=T,K.enabled=k,K.autoUpdate=Q,K.needsUpdate=tt,K.type=G}function lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ht(T){let k=T.target;k.removeEventListener("dispose",Ht),$t(k)}function $t(T){ue(T),pt.remove(T)}function ue(T){let k=pt.get(T).programs;k!==void 0&&(k.forEach(function(Q){Lt.releaseProgram(Q)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Q,tt,G,St){k===null&&(k=Xt);let Dt=G.isMesh&&G.matrixWorld.determinant()<0,Bt=Pf(T,k,Q,tt,G);ft.setMaterial(tt,Dt);let Ft=Q.index,jt=1;if(tt.wireframe===!0){if(Ft=at.getWireframeAttribute(Q),Ft===void 0)return;jt=2}let te=Q.drawRange,kt=Q.attributes.position,ge=te.start*jt,Me=(te.start+te.count)*jt;St!==null&&(ge=Math.max(ge,St.start*jt),Me=Math.min(Me,(St.start+St.count)*jt)),Ft!==null?(ge=Math.max(ge,0),Me=Math.min(Me,Ft.count)):kt!=null&&(ge=Math.max(ge,0),Me=Math.min(Me,kt.count));let Te=Me-ge;if(Te<0||Te===1/0)return;se.setup(G,tt,Bt,Q,Ft);let an,de=_t;if(Ft!==null&&(an=rt.get(Ft),de=Yt,de.setIndex(an)),G.isMesh)tt.wireframe===!0?(ft.setLineWidth(tt.wireframeLinewidth*ut()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(G.isLine){let Vt=tt.linewidth;Vt===void 0&&(Vt=1),ft.setLineWidth(Vt*ut()),G.isLineSegments?de.setMode(C.LINES):G.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else G.isPoints?de.setMode(C.POINTS):G.isSprite&&de.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Vt=G._multiDrawStarts,Xe=G._multiDrawCounts,pe=G._multiDrawCount,_n=Ft?rt.get(Ft).bytesPerElement:1,zi=pt.get(tt).currentProgram.getUniforms();for(let ln=0;ln<pe;ln++)zi.setValue(C,"_gl_DrawID",ln),de.render(Vt[ln]/_n,Xe[ln])}else if(G.isInstancedMesh)de.renderInstances(ge,Te,G.count);else if(Q.isInstancedBufferGeometry){let Vt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Xe=Math.min(Q.instanceCount,Vt);de.renderInstances(ge,Te,Xe)}else de.render(ge,Te)};function Qt(T,k,Q){T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Ni(T,k,Q),T.side=si,T.needsUpdate=!0,Ni(T,k,Q),T.side=ye):Ni(T,k,Q)}this.compile=function(T,k,Q=null){Q===null&&(Q=T),m=Jt.get(Q),m.init(k),_.push(m),Q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==Q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let tt=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let St=G.material;if(St)if(Array.isArray(St))for(let Dt=0;Dt<St.length;Dt++){let Bt=St[Dt];Qt(Bt,Q,G),tt.add(Bt)}else Qt(St,Q,G),tt.add(St)}),_.pop(),m=null,tt},this.compileAsync=function(T,k,Q=null){let tt=this.compile(T,k,Q);return new Promise(G=>{function St(){if(tt.forEach(function(Dt){pt.get(Dt).currentProgram.isReady()&&tt.delete(Dt)}),tt.size===0){G(T);return}setTimeout(St,10)}q.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let he=null;function Ne(T){he&&he(T)}function ke(){Ae.stop()}function Ge(){Ae.start()}let Ae=new Xh;Ae.setAnimationLoop(Ne),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(T){he=T,st.setAnimationLoop(T),T===null?Ae.stop():Ae.start()},st.addEventListener("sessionstart",ke),st.addEventListener("sessionend",Ge),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,b),m=Jt.get(T,_.length),m.init(k),_.push(m),yt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),It.setFromProjectionMatrix(yt),ht=this.localClippingEnabled,et=H.init(this.clippingPlanes,ht),v=At.get(T,u.length),v.init(),u.push(v),st.enabled===!0&&st.isPresenting===!0){let St=x.xr.getDepthSensingMesh();St!==null&&He(St,k,-1/0,x.sortObjects)}He(T,k,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort($,J),ee=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ee&&gt.addToRenderList(v,T),this.info.render.frame++,et===!0&&H.beginShadows();let Q=m.state.shadowsArray;K.render(Q,T,k),et===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=v.opaque,G=v.transmissive;if(m.setupLights(),k.isArrayCamera){let St=k.cameras;if(G.length>0)for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){let Ft=St[Dt];Cn(tt,G,T,Ft)}ee&&gt.render(T);for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){let Ft=St[Dt];Di(v,T,Ft,Ft.viewport)}}else G.length>0&&Cn(tt,G,T,k),ee&&gt.render(T),Di(v,T,k);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,k),se.resetDefaultState(),I=-1,U=null,_.pop(),_.length>0?(m=_[_.length-1],et===!0&&H.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function He(T,k,Q,tt){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||It.intersectsSprite(T)){tt&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);let Dt=it.update(T),Bt=T.material;Bt.visible&&v.push(T,Dt,Bt,Q,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||It.intersectsObject(T))){let Dt=it.update(T),Bt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Gt.copy(Dt.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(Bt)){let Ft=Dt.groups;for(let jt=0,te=Ft.length;jt<te;jt++){let kt=Ft[jt],ge=Bt[kt.materialIndex];ge&&ge.visible&&v.push(T,Dt,ge,Q,Gt.z,kt)}}else Bt.visible&&v.push(T,Dt,Bt,Q,Gt.z,null)}}let St=T.children;for(let Dt=0,Bt=St.length;Dt<Bt;Dt++)He(St[Dt],k,Q,tt)}function Di(T,k,Q,tt){let G=T.opaque,St=T.transmissive,Dt=T.transparent;m.setupLightsView(Q),et===!0&&H.setGlobalState(x.clippingPlanes,Q),tt&&ft.viewport(y.copy(tt)),G.length>0&&on(G,k,Q),St.length>0&&on(St,k,Q),Dt.length>0&&on(Dt,k,Q),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Cn(T,k,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new qn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?er:Xn,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let St=m.state.transmissionRenderTarget[tt.id],Dt=tt.viewport||y;St.setSize(Dt.z,Dt.w);let Bt=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(B),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),ee&&gt.render(Q);let Ft=x.toneMapping;x.toneMapping=ii;let jt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),et===!0&&H.setGlobalState(x.clippingPlanes,tt),on(T,Q,tt),A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St),q.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let kt=0,ge=k.length;kt<ge;kt++){let Me=k[kt],Te=Me.object,an=Me.geometry,de=Me.material,Vt=Me.group;if(de.side===ye&&Te.layers.test(tt.layers)){let Xe=de.side;de.side=rn,de.needsUpdate=!0,Ui(Te,Q,tt,an,de,Vt),de.side=Xe,de.needsUpdate=!0,te=!0}}te===!0&&(A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St))}x.setRenderTarget(Bt),x.setClearColor(B,P),jt!==void 0&&(tt.viewport=jt),x.toneMapping=Ft}function on(T,k,Q){let tt=k.isScene===!0?k.overrideMaterial:null;for(let G=0,St=T.length;G<St;G++){let Dt=T[G],Bt=Dt.object,Ft=Dt.geometry,jt=tt===null?Dt.material:tt,te=Dt.group;Bt.layers.test(Q.layers)&&Ui(Bt,k,Q,Ft,jt,te)}}function Ui(T,k,Q,tt,G,St){T.onBeforeRender(x,k,Q,tt,G,St),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,k,Q,tt,T,St),G.transparent===!0&&G.side===ye&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,x.renderBufferDirect(Q,k,tt,G,T,St),G.side=si,G.needsUpdate=!0,x.renderBufferDirect(Q,k,tt,G,T,St),G.side=ye):x.renderBufferDirect(Q,k,tt,G,T,St),T.onAfterRender(x,k,Q,tt,G,St)}function Ni(T,k,Q){k.isScene!==!0&&(k=Xt);let tt=pt.get(T),G=m.state.lights,St=m.state.shadowsArray,Dt=G.state.version,Bt=Lt.getParameters(T,G.state,St,k,Q),Ft=Lt.getProgramCacheKey(Bt),jt=tt.programs;tt.environment=T.isMeshStandardMaterial?k.environment:null,tt.fog=k.fog,tt.envMap=(T.isMeshStandardMaterial?O:w).get(T.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,jt===void 0&&(T.addEventListener("dispose",Ht),jt=new Map,tt.programs=jt);let te=jt.get(Ft);if(te!==void 0){if(tt.currentProgram===te&&tt.lightsStateVersion===Dt)return gc(T,Bt),te}else Bt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(Bt,x),te=Lt.acquireProgram(Bt,Ft),jt.set(Ft,te),tt.uniforms=Bt.uniforms;let kt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=H.uniform),gc(T,Bt),tt.needsLights=Lf(T),tt.lightsStateVersion=Dt,tt.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),tt.currentProgram=te,tt.uniformsList=null,te}function Hi(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=ss.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function gc(T,k){let Q=pt.get(T);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Pf(T,k,Q,tt,G){k.isScene!==!0&&(k=Xt),A.resetTextureUnits();let St=k.fog,Dt=tt.isMeshStandardMaterial?k.environment:null,Bt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ui,Ft=(tt.isMeshStandardMaterial?O:w).get(tt.envMap||Dt),jt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,te=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!Q.morphAttributes.position,ge=!!Q.morphAttributes.normal,Me=!!Q.morphAttributes.color,Te=ii;tt.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Te=x.toneMapping);let an=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,de=an!==void 0?an.length:0,Vt=pt.get(tt),Xe=m.state.lights;if(et===!0&&(ht===!0||T!==U)){let dn=T===U&&tt.id===I;H.setState(tt,T,dn)}let pe=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xe.state.version||Vt.outputColorSpace!==Bt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isBatchedMesh&&Vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Vt.instancingMorph===!1&&G.morphTexture!==null||Vt.envMap!==Ft||tt.fog===!0&&Vt.fog!==St||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==H.numPlanes||Vt.numIntersection!==H.numIntersection)||Vt.vertexAlphas!==jt||Vt.vertexTangents!==te||Vt.morphTargets!==kt||Vt.morphNormals!==ge||Vt.morphColors!==Me||Vt.toneMapping!==Te||Vt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Vt.__version=tt.version);let _n=Vt.currentProgram;pe===!0&&(_n=Ni(tt,k,G));let zi=!1,ln=!1,Io=!1,Ce=_n.getUniforms(),$n=Vt.uniforms;if(ft.useProgram(_n.program)&&(zi=!0,ln=!0,Io=!0),tt.id!==I&&(I=tt.id,ln=!0),zi||U!==T){Y.reverseDepthBuffer?(xt.copy(T.projectionMatrix),wu(xt),Su(xt),Ce.setValue(C,"projectionMatrix",xt)):Ce.setValue(C,"projectionMatrix",T.projectionMatrix),Ce.setValue(C,"viewMatrix",T.matrixWorldInverse);let dn=Ce.map.cameraPosition;dn!==void 0&&dn.setValue(C,Ut.setFromMatrixPosition(T.matrixWorld)),Y.logarithmicDepthBuffer&&Ce.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ce.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,ln=!0,Io=!0)}if(G.isSkinnedMesh){Ce.setOptional(C,G,"bindMatrix"),Ce.setOptional(C,G,"bindMatrixInverse");let dn=G.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ce.setValue(C,"boneTexture",dn.boneTexture,A))}G.isBatchedMesh&&(Ce.setOptional(C,G,"batchingTexture"),Ce.setValue(C,"batchingTexture",G._matricesTexture,A),Ce.setOptional(C,G,"batchingIdTexture"),Ce.setValue(C,"batchingIdTexture",G._indirectTexture,A),Ce.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&Ce.setValue(C,"batchingColorTexture",G._colorsTexture,A));let Lo=Q.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0)&&Pt.update(G,Q,_n),(ln||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,Ce.setValue(C,"receiveShadow",G.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&($n.envMap.value=Ft,$n.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&k.environment!==null&&($n.envMapIntensity.value=k.environmentIntensity),ln&&(Ce.setValue(C,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&If($n,Io),St&&tt.fog===!0&&vt.refreshFogUniforms($n,St),vt.refreshMaterialUniforms($n,tt,nt,z,m.state.transmissionRenderTarget[T.id]),ss.upload(C,Hi(Vt),$n,A)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ss.upload(C,Hi(Vt),$n,A),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ce.setValue(C,"center",G.center),Ce.setValue(C,"modelViewMatrix",G.modelViewMatrix),Ce.setValue(C,"normalMatrix",G.normalMatrix),Ce.setValue(C,"modelMatrix",G.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let dn=tt.uniformsGroups;for(let Do=0,Df=dn.length;Do<Df;Do++){let yc=dn[Do];F.update(yc,_n),F.bind(yc,_n)}}return _n}function If(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Lf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,k,Q){pt.get(T.texture).__webglTexture=k,pt.get(T.depthTexture).__webglTexture=Q;let tt=pt.get(T);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){let Q=pt.get(T);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Q=0){b=T,R=k,S=Q;let tt=!0,G=null,St=!1,Dt=!1;if(T){let Ft=pt.get(T);if(Ft.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(C.FRAMEBUFFER,null),tt=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ft.__hasExternalTextures)A.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let kt=T.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&pt.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let jt=T.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Dt=!0);let te=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[k])?G=te[k][Q]:G=te[k],St=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?G=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?G=te[Q]:G=te,y.copy(T.viewport),E.copy(T.scissor),N=T.scissorTest}else y.copy(ot).multiplyScalar(nt).floor(),E.copy(ct).multiplyScalar(nt).floor(),N=bt;if(ft.bindFramebuffer(C.FRAMEBUFFER,G)&&tt&&ft.drawBuffers(T,G),ft.viewport(y),ft.scissor(E),ft.setScissorTest(N),St){let Ft=pt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,Q)}else if(Dt){let Ft=pt.get(T.texture),jt=k||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,Q||0,jt)}I=-1},this.readRenderTargetPixels=function(T,k,Q,tt,G,St,Dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){ft.bindFramebuffer(C.FRAMEBUFFER,Bt);try{let Ft=T.texture,jt=Ft.format,te=Ft.type;if(!Y.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-tt&&Q>=0&&Q<=T.height-G&&C.readPixels(k,Q,tt,G,Nt.convert(jt),Nt.convert(te),St)}finally{let Ft=b!==null?pt.get(b).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,k,Q,tt,G,St,Dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){let Ft=T.texture,jt=Ft.format,te=Ft.type;if(!Y.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-tt&&Q>=0&&Q<=T.height-G){ft.bindFramebuffer(C.FRAMEBUFFER,Bt);let kt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,kt),C.bufferData(C.PIXEL_PACK_BUFFER,St.byteLength,C.STREAM_READ),C.readPixels(k,Q,tt,G,Nt.convert(jt),Nt.convert(te),0);let ge=b!==null?pt.get(b).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,ge);let Me=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Eu(C,Me,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,kt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,St),C.deleteBuffer(kt),C.deleteSync(Me),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,Q=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);let tt=Math.pow(2,-Q),G=Math.floor(T.image.width*tt),St=Math.floor(T.image.height*tt),Dt=k!==null?k.x:0,Bt=k!==null?k.y:0;A.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,Q,0,0,Dt,Bt,G,St),ft.unbindTexture()},this.copyTextureToTexture=function(T,k,Q=null,tt=null,G=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,T=arguments[1],k=arguments[2],G=arguments[3]||0,Q=null);let St,Dt,Bt,Ft,jt,te;Q!==null?(St=Q.max.x-Q.min.x,Dt=Q.max.y-Q.min.y,Bt=Q.min.x,Ft=Q.min.y):(St=T.image.width,Dt=T.image.height,Bt=0,Ft=0),tt!==null?(jt=tt.x,te=tt.y):(jt=0,te=0);let kt=Nt.convert(k.format),ge=Nt.convert(k.type);A.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let Me=C.getParameter(C.UNPACK_ROW_LENGTH),Te=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),de=C.getParameter(C.UNPACK_SKIP_ROWS),Vt=C.getParameter(C.UNPACK_SKIP_IMAGES),Xe=T.isCompressedTexture?T.mipmaps[G]:T.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,G,jt,te,St,Dt,kt,ge,Xe.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,G,jt,te,Xe.width,Xe.height,kt,Xe.data):C.texSubImage2D(C.TEXTURE_2D,G,jt,te,St,Dt,kt,ge,Xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,de),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Vt),G===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(T,k,Q=null,tt=null,G=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,T=arguments[2],k=arguments[3],G=arguments[4]||0);let St,Dt,Bt,Ft,jt,te,kt,ge,Me,Te=T.isCompressedTexture?T.mipmaps[G]:T.image;Q!==null?(St=Q.max.x-Q.min.x,Dt=Q.max.y-Q.min.y,Bt=Q.max.z-Q.min.z,Ft=Q.min.x,jt=Q.min.y,te=Q.min.z):(St=Te.width,Dt=Te.height,Bt=Te.depth,Ft=0,jt=0,te=0),tt!==null?(kt=tt.x,ge=tt.y,Me=tt.z):(kt=0,ge=0,Me=0);let an=Nt.convert(k.format),de=Nt.convert(k.type),Vt;if(k.isData3DTexture)A.setTexture3D(k,0),Vt=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),Vt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let Xe=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),_n=C.getParameter(C.UNPACK_SKIP_PIXELS),zi=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Te.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,te),T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Vt,G,kt,ge,Me,St,Dt,Bt,an,de,Te.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(Vt,G,kt,ge,Me,St,Dt,Bt,an,Te.data):C.texSubImage3D(Vt,G,kt,ge,Me,St,Dt,Bt,an,de,Te),C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_n),C.pixelStorei(C.UNPACK_SKIP_ROWS,zi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),G===0&&k.generateMipmaps&&C.generateMipmap(Vt),ft.unbindTexture()},this.initRenderTarget=function(T){pt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ft.unbindTexture()},this.resetState=function(){R=0,S=0,b=null,ft.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===yo?"display-p3":"srgb"}};var li=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var xl=class extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=sn,f=sn,h,d){super(null,o,a,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ws=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new re,dh=new re,Lr=[],ph=new Yn,_g=new re,Ls=new X,Ds=new Dn,ci=class extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_g)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),ph.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(ph)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Ds.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),dh.multiplyMatrices(n,ji),Ls.matrixWorld=dh,Ls.raycast(t,Lr);for(let o=0,a=Lr.length;o<a;o++){let l=Lr[o];l.instanceId=r,l.object=this,e.push(l)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(s*this.count),s,this.count,Yl,In));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Xs=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mh=new re,_l=new Gs,Dr=new Dn,Ur=new L,ro=class extends De{constructor(t=new Re,e=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;mh.copy(s).invert(),_l.copy(t.ray).applyMatrix4(mh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){let m=c.getX(g);Ur.fromBufferAttribute(h,m),gh(Ur,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Ur.fromBufferAttribute(h,g),gh(Ur,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gh(i,t,e,n,s,r,o){let a=_l.distanceSqToPoint(i);if(a<e){let l=new L;_l.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var tn=class extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let f=n[s],d=n[s+1]-f,p=(o-f)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,l=new re;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(qe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qs=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*f-p*h+this.aX,c=d*h+p*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vl=class extends qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ql(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,h){let d=(o-r)/c-(a-r)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,p*=f,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Nr=new L,fa=new Ql,ua=new Ql,da=new Ql,Ml=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),c=Nr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(f),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fa.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,g,v,m),ua.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,g,v,m),da.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,g,v,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),ua.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),da.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return n.set(fa.calc(l),ua.calc(l),da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vg(i,t){let e=1-i;return e*e*t}function Mg(i,t){return 2*(1-i)*i*t}function Eg(i,t){return i*i*t}function zs(i,t,e,n){return vg(i,t)+Mg(i,e)+Eg(i,n)}function wg(i,t){let e=1-i;return e*e*e*t}function Sg(i,t){let e=1-i;return 3*e*e*i*t}function bg(i,t){return 3*(1-i)*i*i*t}function Tg(i,t){return i*i*i*t}function Bs(i,t,e,n,s){return wg(i,t)+Sg(i,e)+bg(i,n)+Tg(i,s)}var oo=class extends yn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bs(t,s.x,r.x,o.x,a.x),Bs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},El=class extends yn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bs(t,s.x,r.x,o.x,a.x),Bs(t,s.y,r.y,o.y,a.y),Bs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends yn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends yn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends yn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,s.x,r.x,o.x),zs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends yn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,s.x,r.x,o.x),zs(t,s.y,r.y,o.y),zs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(yh(a,l.x,c.x,f.x,h.x),yh(a,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},bl=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:Ml,CubicBezierCurve:oo,CubicBezierCurve3:El,EllipseCurve:qs,LineCurve:ao,LineCurve3:wl,QuadraticBezierCurve:lo,QuadraticBezierCurve3:Sl,SplineCurve:co}),Tl=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bl[s.type]().fromJSON(s))}return this}},Ys=class extends Tl{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ao(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new lo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new oo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new qs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rl=class i extends Re{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/e,h=new L,d=new Mt,p=new L,g=new L,v=new L,m=0,u=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=e;_++){let x=n+_*f*s,M=Math.sin(x),R=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*M,h.y=t[S].y,h.z=t[S].x*R,o.push(h.x,h.y,h.z),d.x=_/e,d.y=S/(t.length-1),a.push(d.x,d.y);let b=l[3*S+0]*M,I=l[3*S+1],U=l[3*S+0]*R;c.push(b,I,U)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let M=x+_*t.length,R=M,S=M+t.length,b=M+t.length+1,I=M+1;r.push(R,S,I),r.push(b,I,S)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Oe=class i extends Rl{constructor(t=1,e=1,n=4,s=8){let r=new Ys;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},hi=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,f=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[d]/t+1)/2,f.y=(o[d+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},j=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],d=[],p=[],g=0,v=[],m=n/2,u=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function _(){let M=new L,R=new L,S=0,b=(e-t)/n;for(let I=0;I<=r;I++){let U=[],y=I/r,E=y*(e-t)+t;for(let N=0;N<=s;N++){let B=N/s,P=B*l+a,V=Math.sin(P),z=Math.cos(P);R.x=E*V,R.y=-y*n+m,R.z=E*z,h.push(R.x,R.y,R.z),M.set(V,b,z).normalize(),d.push(M.x,M.y,M.z),p.push(B,1-y),U.push(g++)}v.push(U)}for(let I=0;I<s;I++)for(let U=0;U<r;U++){let y=v[U][I],E=v[U+1][I],N=v[U+1][I+1],B=v[U][I+1];t>0&&(f.push(y,E,B),S+=3),e>0&&(f.push(E,N,B),S+=3)}c.addGroup(u,S,0),u+=S}function x(M){let R=g,S=new Mt,b=new L,I=0,U=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let E=g;for(let N=0;N<=s;N++){let P=N/s*l+a,V=Math.cos(P),z=Math.sin(P);b.x=U*z,b.y=m*y,b.z=U*V,h.push(b.x,b.y,b.z),d.push(0,y,0),S.x=V*.5+.5,S.y=z*.5*y+.5,p.push(S.x,S.y),g++}for(let N=0;N<s;N++){let B=R+N,P=E+N;M===!0?f.push(P,P+1,B):f.push(P+1,P,B),I+=3}c.addGroup(u,I,M===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ye=class i extends j{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ho=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),f(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new L,M=new L,R=new L;for(let S=0;S<e.length;S+=3)p(e[S+0],x),p(e[S+1],M),p(e[S+2],R),l(x,M,R,_)}function l(_,x,M,R){let S=R+1,b=[];for(let I=0;I<=S;I++){b[I]=[];let U=_.clone().lerp(M,I/S),y=x.clone().lerp(M,I/S),E=S-I;for(let N=0;N<=E;N++)N===0&&I===S?b[I][N]=U:b[I][N]=U.clone().lerp(y,N/E)}for(let I=0;I<S;I++)for(let U=0;U<2*(S-I)-1;U++){let y=Math.floor(U/2);U%2===0?(d(b[I][y+1]),d(b[I+1][y]),d(b[I][y])):(d(b[I][y+1]),d(b[I+1][y+1]),d(b[I+1][y]))}}function c(_){let x=new L;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(_),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function f(){let _=new L;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let M=m(_)/2/Math.PI+.5,R=u(_)/Math.PI+.5;o.push(M,1-R)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let x=o[_+0],M=o[_+2],R=o[_+4],S=Math.max(x,M,R),b=Math.min(x,M,R);S>.9&&b<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,x){let M=_*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let _=new L,x=new L,M=new L,R=new L,S=new Mt,b=new Mt,I=new Mt;for(let U=0,y=0;U<r.length;U+=9,y+=6){_.set(r[U+0],r[U+1],r[U+2]),x.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),S.set(o[y+0],o[y+1]),b.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),R.copy(_).add(x).add(M).divideScalar(3);let E=m(R);v(S,y+0,_,E),v(b,y+2,x,E),v(I,y+4,M,E)}}function v(_,x,M,R){R<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Zs=class i extends ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var $s=class extends Ys{constructor(t){super(t),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ys().fromJSON(s))}return this}},Rg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Jh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,d,p;if(n&&(r=Lg(i,t,r,e)),i.length>80*e){a=c=i[0],l=f=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>f&&(f=d);p=Math.max(c-a,f-l),p=p!==0?32767/p:0}return Js(r,o,e,a,l,p,0),o}};function Jh(i,t,e,n,s){let r,o;if(s===Vg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=xh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=xh(r,i[r],i[r+1],o);return o&&_o(o,o.next)&&(js(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||be(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&zg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Cg(i,n,s,r):Ag(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),js(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Pg(Ci(i),t,e),Js(i,t,e,n,s,r,2)):o===2&&Ig(i,t,e,n,s,r):Js(Ci(i),t,e,n,s,r,1);break}}}function Ag(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=d&&g.y>=h&&g.y<=p&&ts(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=f<h?f<d?f:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,m=f>h?f>d?f:d:h>d?h:d,u=Al(p,g,t,e,n),_=Al(v,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=u&&M&&M.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ts(a,f,l,h,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ts(a,f,l,h,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ts(a,f,l,h,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ts(a,f,l,h,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Pg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_o(s,r)&&Kh(s,n,n.next,r)&&Ks(s,r)&&Ks(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),js(n),js(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Ig(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Og(o,a)){let l=jh(o,a);o=Ci(o,o.next),l=Ci(l,l.next),Js(o,t,e,n,s,r,0),Js(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Lg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Jh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Fg(c));for(s.sort(Dg),r=0;r<s.length;r++)e=Ug(s[r],e);return e}function Dg(i,t){return i.x-t.x}function Ug(i,t){let e=Ng(i,t);if(!e)return t;let n=jh(e,i);return Ci(n,n.next),Ci(e,e.next)}function Ng(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ts(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ks(e,i)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&Hg(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function Hg(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function zg(i,t,e,n){let s=i;do s.z===0&&(s.z=Al(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Al(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Og(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kg(i,t)&&(Ks(i,t)&&Ks(t,i)&&Gg(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||_o(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _o(i,t){return i.x===t.x&&i.y===t.y}function Kh(i,t,e,n){let s=zr(be(i,t,e)),r=zr(be(i,t,n)),o=zr(be(e,n,i)),a=zr(be(e,n,t));return!!(s!==r&&o!==a||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||o===0&&Hr(e,i,n)||a===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function kg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Gg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jh(i,t){let e=new Cl(i.i,i.x,i.y),n=new Cl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xh(i,t,e,n){let s=new Cl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_h(t),vh(n,t);let o=t.length;e.forEach(_h);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vh(n,e[l]);let a=Rg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function _h(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var fo=class i extends Re{constructor(t=new $s([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Wg,x,M=!1,R,S,b,I;u&&(x=u.getSpacedPoints(f),M=!0,d=!1,R=u.computeFrenetFrames(f,!1),S=new L,b=new L,I=new L),d||(m=0,p=0,g=0,v=0);let U=a.extractPoints(c),y=U.shape,E=U.holes;if(!Fs.isClockWise(y)){y=y.reverse();for(let ut=0,C=E.length;ut<C;ut++){let wt=E[ut];Fs.isClockWise(wt)&&(E[ut]=wt.reverse())}}let B=Fs.triangulateShape(y,E),P=y;for(let ut=0,C=E.length;ut<C;ut++){let wt=E[ut];y=y.concat(wt)}function V(ut,C,wt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(C,wt)}let z=y.length,nt=B.length;function $(ut,C,wt){let q,Y,ft,mt=ut.x-C.x,pt=ut.y-C.y,A=wt.x-ut.x,w=wt.y-ut.y,O=mt*mt+pt*pt,rt=mt*w-pt*A;if(Math.abs(rt)>Number.EPSILON){let at=Math.sqrt(O),it=Math.sqrt(A*A+w*w),Lt=C.x-pt/at,vt=C.y+mt/at,At=wt.x-w/it,Jt=wt.y+A/it,H=((At-Lt)*w-(Jt-vt)*A)/(mt*w-pt*A);q=Lt+mt*H-ut.x,Y=vt+pt*H-ut.y;let K=q*q+Y*Y;if(K<=2)return new Mt(q,Y);ft=Math.sqrt(K/2)}else{let at=!1;mt>Number.EPSILON?A>Number.EPSILON&&(at=!0):mt<-Number.EPSILON?A<-Number.EPSILON&&(at=!0):Math.sign(pt)===Math.sign(w)&&(at=!0),at?(q=-pt,Y=mt,ft=Math.sqrt(O)):(q=mt,Y=pt,ft=Math.sqrt(O/2))}return new Mt(q/ft,Y/ft)}let J=[];for(let ut=0,C=P.length,wt=C-1,q=ut+1;ut<C;ut++,wt++,q++)wt===C&&(wt=0),q===C&&(q=0),J[ut]=$(P[ut],P[wt],P[q]);let ot=[],ct,bt=J.concat();for(let ut=0,C=E.length;ut<C;ut++){let wt=E[ut];ct=[];for(let q=0,Y=wt.length,ft=Y-1,mt=q+1;q<Y;q++,ft++,mt++)ft===Y&&(ft=0),mt===Y&&(mt=0),ct[q]=$(wt[q],wt[ft],wt[mt]);ot.push(ct),bt=bt.concat(ct)}for(let ut=0;ut<m;ut++){let C=ut/m,wt=p*Math.cos(C*Math.PI/2),q=g*Math.sin(C*Math.PI/2)+v;for(let Y=0,ft=P.length;Y<ft;Y++){let mt=V(P[Y],J[Y],q);yt(mt.x,mt.y,-wt)}for(let Y=0,ft=E.length;Y<ft;Y++){let mt=E[Y];ct=ot[Y];for(let pt=0,A=mt.length;pt<A;pt++){let w=V(mt[pt],ct[pt],q);yt(w.x,w.y,-wt)}}}let It=g+v;for(let ut=0;ut<z;ut++){let C=d?V(y[ut],bt[ut],It):y[ut];M?(b.copy(R.normals[0]).multiplyScalar(C.x),S.copy(R.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(b).add(S),yt(I.x,I.y,I.z)):yt(C.x,C.y,0)}for(let ut=1;ut<=f;ut++)for(let C=0;C<z;C++){let wt=d?V(y[C],bt[C],It):y[C];M?(b.copy(R.normals[ut]).multiplyScalar(wt.x),S.copy(R.binormals[ut]).multiplyScalar(wt.y),I.copy(x[ut]).add(b).add(S),yt(I.x,I.y,I.z)):yt(wt.x,wt.y,h/f*ut)}for(let ut=m-1;ut>=0;ut--){let C=ut/m,wt=p*Math.cos(C*Math.PI/2),q=g*Math.sin(C*Math.PI/2)+v;for(let Y=0,ft=P.length;Y<ft;Y++){let mt=V(P[Y],J[Y],q);yt(mt.x,mt.y,h+wt)}for(let Y=0,ft=E.length;Y<ft;Y++){let mt=E[Y];ct=ot[Y];for(let pt=0,A=mt.length;pt<A;pt++){let w=V(mt[pt],ct[pt],q);M?yt(w.x,w.y+x[f-1].y,x[f-1].x+wt):yt(w.x,w.y,h+wt)}}}et(),ht();function et(){let ut=s.length/3;if(d){let C=0,wt=z*C;for(let q=0;q<nt;q++){let Y=B[q];Ut(Y[2]+wt,Y[1]+wt,Y[0]+wt)}C=f+m*2,wt=z*C;for(let q=0;q<nt;q++){let Y=B[q];Ut(Y[0]+wt,Y[1]+wt,Y[2]+wt)}}else{for(let C=0;C<nt;C++){let wt=B[C];Ut(wt[2],wt[1],wt[0])}for(let C=0;C<nt;C++){let wt=B[C];Ut(wt[0]+z*f,wt[1]+z*f,wt[2]+z*f)}}n.addGroup(ut,s.length/3-ut,0)}function ht(){let ut=s.length/3,C=0;xt(P,C),C+=P.length;for(let wt=0,q=E.length;wt<q;wt++){let Y=E[wt];xt(Y,C),C+=Y.length}n.addGroup(ut,s.length/3-ut,1)}function xt(ut,C){let wt=ut.length;for(;--wt>=0;){let q=wt,Y=wt-1;Y<0&&(Y=ut.length-1);for(let ft=0,mt=f+m*2;ft<mt;ft++){let pt=z*ft,A=z*(ft+1),w=C+q+pt,O=C+Y+pt,rt=C+Y+A,at=C+q+A;Gt(w,O,rt,at)}}}function yt(ut,C,wt){l.push(ut),l.push(C),l.push(wt)}function Ut(ut,C,wt){Xt(ut),Xt(C),Xt(wt);let q=s.length/3,Y=_.generateTopUV(n,s,q-3,q-2,q-1);ee(Y[0]),ee(Y[1]),ee(Y[2])}function Gt(ut,C,wt,q){Xt(ut),Xt(C),Xt(q),Xt(C),Xt(wt),Xt(q);let Y=s.length/3,ft=_.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);ee(ft[0]),ee(ft[1]),ee(ft[3]),ee(ft[1]),ee(ft[2]),ee(ft[3])}function Xt(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function ee(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bl[s.type]().fromJSON(s)),new i(n,t.options)}},Wg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-h),new Mt(d,1-g),new Mt(v,1-u)]:[new Mt(a,1-l),new Mt(f,1-h),new Mt(p,1-g),new Mt(m,1-u)]}};function Xg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ke=class i extends ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Nn=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=t,d=(e-t)/s,p=new L,g=new Mt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let u=r+m/n*o;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,f.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let u=0;u<n;u++){let _=u+m,x=_,M=_+n+1,R=_+n+2,S=_+1;a.push(x,M,S),a.push(M,R,S)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Tt=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new L,d=new L,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){let _=[],x=u/n,M=0;u===0&&o===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let S=R/e;h.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(S+M,1-x),_.push(c++)}f.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){let x=f[u][_+1],M=f[u][_],R=f[u+1][_],S=f[u+1][_+1];(u!==0||o>0)&&p.push(x,M,S),(u!==n-1||l<Math.PI)&&p.push(M,R,S)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pe=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],f=new L,h=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(v,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Kt=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Br(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pl=class extends us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,u=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let R=0;R!==a;++R)r[R]=u*o[f+R]+_*o[c+R]+x*o[l+R]+M*o[h+R];return r}},Il=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*f;return r}},Ll=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=e[h+g];if(v!==e[d+g]||v!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=tl;var Pi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=qr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Rn{};Dl.prototype.ValueTypeName="color";var Ul=class extends Rn{};Ul.prototype.ValueTypeName="number";var Nl=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},uo=class extends Rn{InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=qr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Rn{};Hl.prototype.ValueTypeName="vector";var Mh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null}}},Yg=new zl,Qs=class{constructor(t){this.manager=t!==void 0?t:Yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bl=class extends Qs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Mh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ks("img");function l(){f(),Mh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){f(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ds=class extends Qs{constructor(t){super(t)}load(t,e,n,s){let r=new Qe,o=new Bl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ps=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ms=class extends ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},pa=new re,Eh=new L,wh=new L,po=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sh=new re,Us=new L,ma=new L,Fl=class extends po{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),ma.copy(n.position),ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ma),n.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh)}},mo=class extends ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ol=class extends po{constructor(){super(new ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},gs=class extends ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ys=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bh(){return performance.now()}var tc="\\[\\]\\.:\\/",Zg=new RegExp("["+tc+"]","g"),ec="[^"+tc+"]",$g="[^"+tc.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",ec),Kg=/(WCOD+)?/.source.replace("WCOD",$g),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),ty=new RegExp("^"+Jg+Kg+jg+Qg+"$"),ey=["material","materials","bones","map"],kl=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(t){let e=ty.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=kl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ky=new Float32Array(1);var Th=new re,xs=class{constructor(t,e,n=0,s=1/0){this.ray=new Gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return Gl(t,this,n,e),n.sort(Rh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Gl(t[s],this,n,e);return n.sort(Rh),n}};function Rh(i,t){return i.distance-t.distance}function Gl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Gl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);var Es=class{constructor(t,e,n,s,r=.2){this.minX=t,this.minZ=e,this.cell=r,this.cols=Math.ceil((n-t)/r),this.rows=Math.ceil((s-e)/r),this.blocked=new Uint8Array(this.cols*this.rows)}idx(t,e){return e*this.cols+t}toCell(t,e){return{c:Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cell))),r:Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cell)))}}center(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}blockRect(t,e,n,s,r=.22){let o=this.toCell(Math.min(t,n)-r,Math.min(e,s)-r),a=this.toCell(Math.max(t,n)+r,Math.max(e,s)+r);for(let l=o.r;l<=a.r;l++)for(let c=o.c;c<=a.c;c++)this.blocked[this.idx(c,l)]=1}isFree(t,e){let{c:n,r:s}=this.toCell(t,e);return!this.blocked[this.idx(n,s)]}nearestFree(t,e){if(!this.blocked[this.idx(t,e)])return{c:t,r:e};for(let n=1;n<12;n++)for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){let o=t+r,a=e+s;if(!(o<0||a<0||o>=this.cols||a>=this.rows)&&!this.blocked[this.idx(o,a)])return{c:o,r:a}}return{c:t,r:e}}lineFree(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.max(1,Math.ceil(n/(this.cell*.5)));for(let r=1;r<s;r++){let o=r/s;if(!this.isFree(t.x+(e.x-t.x)*o,t.z+(e.z-t.z)*o))return!1}return!0}find(t,e){let n=this.toCell(t.x,t.z),s=this.nearestFree(...Object.values(this.toCell(e.x,e.z))),r=this.idx(n.c,n.r),o=this.idx(s.c,s.r);if(r===o)return[{x:e.x,z:e.z}];let a=this.cols*this.rows,l=new Float32Array(a).fill(1/0),c=new Int32Array(a).fill(-1),f=new Uint8Array(a),h=[],d=(S,b)=>{h.push([b,S]);let I=h.length-1;for(;I>0;){let U=I-1>>1;if(h[U][0]<=h[I][0])break;[h[U],h[I]]=[h[I],h[U]],I=U}},p=()=>{let S=h[0],b=h.pop();if(h.length){h[0]=b;let I=0;for(;;){let U=2*I+1,y=U+1,E=I;if(U<h.length&&h[U][0]<h[E][0]&&(E=U),y<h.length&&h[y][0]<h[E][0]&&(E=y),E===I)break;[h[E],h[I]]=[h[I],h[E]],I=E}}return S[1]},g=S=>{let b=Math.abs(S%this.cols-s.c),I=Math.abs(Math.floor(S/this.cols)-s.r);return b+I+(Math.SQRT2-2)*Math.min(b,I)};l[r]=0,d(r,g(r));let v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],m=!1;for(;h.length;){let S=p();if(f[S])continue;if(S===o){m=!0;break}f[S]=1;let b=S%this.cols,I=Math.floor(S/this.cols);for(let[U,y,E]of v){let N=b+U,B=I+y;if(N<0||B<0||N>=this.cols||B>=this.rows)continue;let P=this.idx(N,B);if(this.blocked[P]&&P!==o||U&&y&&(this.blocked[this.idx(b+U,I)]||this.blocked[this.idx(b,I+y)]))continue;let V=l[S]+E;V<l[P]&&(l[P]=V,c[P]=S,d(P,V+g(P)))}}if(!m)return[{x:e.x,z:e.z}];let u=[];for(let S=o;S!==-1&&S!==r;S=c[S])u.push(S);u.reverse();let _=u.map(S=>this.center(S%this.cols,Math.floor(S/this.cols)));_[_.length-1]={x:e.x,z:e.z};let x=[],M={x:t.x,z:t.z},R=0;for(;R<_.length;){let S=R;for(let b=_.length-1;b>R;b--)if(this.lineFree(M,_[b])){S=b;break}x.push(_[S]),M=_[S],R=S+1}return x}};var Zn=(i,t=.85)=>new Kt({color:i,roughness:t}),nc=[{x:.4,z:.4},{x:-1.6,z:.6},{x:1.9,z:0},{x:-5,z:2.6},{x:5.4,z:-3.3},{x:-2.4,z:3.9},{x:2.6,z:3.8},{x:-5.6,z:-2.8},{x:.2,z:-2.2},{x:4.4,z:-3.7},{x:6,z:12.6},{x:16.4,z:12},{x:22,z:6.2}],ws=class{constructor(t,e){this.nav=e,this.root=new zt,this.body=new zt,this.root.add(this.body);let n=Zn("#e39a4e"),s=Zn("#b86e2c"),r=Zn("#fbf3e6"),o=Zn("#f2a3a3"),a=(h,d,p,g,v,m)=>{let u=new X(d,p);return u.position.set(g,v,m),u.castShadow=!0,h.add(u),u},l=a(this.body,new Oe(.11,.26,6,12),n,0,.2,0);l.rotation.x=Math.PI/2,a(this.body,new Tt(.075,10,8),r,0,.17,.12).scale.set(1,1,.7);for(let h of[-.06,.04])a(this.body,new Et(.2,.03,.05),s,0,.3,h).rotation.x=.1;this.head=new zt,this.head.position.set(0,.32,.2),this.body.add(this.head),a(this.head,new Tt(.1,14,12),n,0,0,0).scale.set(1.05,.95,.95),a(this.head,new Tt(.05,10,8),r,0,-.03,.07).scale.set(1.2,.8,.7);for(let h of[-1,1]){let d=a(this.head,new Ye(.035,.07,4),n,h*.055,.09,-.01);d.rotation.z=-h*.25,a(this.head,new Tt(.012,6,6),Zn("#1d1a17",.3),h*.038,.02,.088)}a(this.head,new Tt(.01,6,6),o,0,-.01,.1),this.legs=[];for(let[h,d]of[[-.06,.12],[.06,.12],[-.06,-.12],[.06,-.12]]){let p=new zt;p.position.set(h,.15,d),this.body.add(p),a(p,new j(.025,.022,.15,6),n,0,-.075,0),a(p,new Tt(.026,6,6),r,0,-.15,.01),this.legs.push(p)}this.tail=[];let c=this.body,f=[0,.24,-.24];for(let h=0;h<5;h++){let d=new zt;d.position.set(...f),c.add(d),a(d,new j(.022-h*.002,.025-h*.002,.08,6),h===4?s:n,0,.04,0),this.tail.push(d),c=d,f=[0,.08,0]}this.tail[0].rotation.x=-.9,this.pos={x:1,z:.8},this.facing=0,this.path=[],this.mode="sit",this.until=performance.now()/1e3+4,this.phase=0,this.root.position.set(this.pos.x,0,this.pos.z),t.add(this.root)}pet(){this.path=[],this.mode="happy",this.until=performance.now()/1e3+2.6}headWorld(t){return this.head.updateWorldMatrix(!0,!1),t.set(0,.2,0).applyMatrix4(this.head.matrixWorld)}props(){if(this.bowl)return;let t=this.root.parent;this.bowl=new zt;let e=new X(new j(.13,.1,.06,16,1,!0),Zn("#e1262d",.5));e.material.side=ye,e.position.y=.03;let n=new X(new j(.115,.115,.02,16),Zn("#b8742f",.9));n.position.y=.045,this.bowl.add(e,n),this.food=n,this.bowl.visible=!1,t.add(this.bowl),this.yarn=new zt;let s=new X(new Tt(.07,12,10),Zn("#ff7aa8",.9));s.position.y=.07;let r=new X(new Pe(.07,.008,6,20),Zn("#e84f87",.9));r.position.y=.07,r.rotation.y=.6,this.yarn.add(s,r),this.yarn.visible=!1,t.add(this.yarn)}command(t,e=0){if(!t||this.cmd&&t.seq<=this.cmd.seq&&t.at<=this.cmd.at)return;this.remote=!0;let n=this.cmd&&this.cmd.seq!==t.seq&&t.act;this.cmd=t,this.skew=e,this.props(),this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.goTo(t.target),this.mode="walk",this.followId=t.mode==="follow"?t.by:null,n&&t.act==="call"&&this.onFx&&this.onFx("\u{1F43E}"),t.act==="feed"&&(this.bowl.position.set(this.dest.x+.3,0,this.dest.z),this.food.scale.set(1,1,1),this.bowl.visible=!0)}goTo(t){let e=this.nav.toCell(t.x,t.z),n=this.nav.nearestFree(e.c,e.r);this.dest=this.nav.center(n.c,n.r),this.path=this.nav.find(this.pos,this.dest)}pickTarget(){for(let t=0;t<8;t++){let e=nc[Math.floor(Math.random()*nc.length)];if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)>1.5)return e}return nc[0]}arrive(t){let e=this.cmd,s=!e||!e.until||Date.now()+(this.skew||0)>e.until+6e4?0:Math.min(12,(e.until-e.at)/1e3),r=e?e.then:"sit";r==="pet"&&s>0?(this.mode="happy",this.until=t+s,this.onFx&&this.onFx("\u{1F495}")):r==="feed"&&s>0?(this.mode="eat",this.until=t+s,this.facing=Math.atan2(this.bowl.position.x-this.pos.x,this.bowl.position.z-this.pos.z),this.onFx&&this.onFx("\u{1F60B}")):r==="play"&&s>0?(this.mode="play",this.until=t+s,this.playC={x:this.pos.x,z:this.pos.z},this.yarn.visible=!0,this.onFx&&this.onFx("\u{1F9F6}")):(this.mode=r==="loaf"?"loaf":"sit",this.until=t+1e6,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1))}update(t,e,n){this.remote?this.remoteTick(t,e,n):(this.mode==="happy"&&e>this.until&&(this.mode="sit",this.until=e+3+Math.random()*5),this.mode!=="walk"&&this.mode!=="happy"&&e>this.until&&(this.path=this.nav.find(this.pos,this.pickTarget()),this.mode="walk"));let s=!1;if(this.mode==="walk"){let c=this.path[0];if(c){let f=this.followId||this.cmd&&this.cmd.act?1.5:.75,h=c.x-this.pos.x,d=c.z-this.pos.z,p=Math.hypot(h,d),g=f*t;p<=g?(this.pos.x=c.x,this.pos.z=c.z,this.path.shift()):(this.pos.x+=h/p*g,this.pos.z+=d/p*g),this.turn(Math.atan2(h,d),t),s=!0}else if(this.remote)this.arrive(e);else{let f=Math.random();this.mode=f<.35?"loaf":"sit",this.until=e+5+Math.random()*12}}if(this.mode==="play"){let c=e*2.2,f=this.playC;this.yarn.position.set(f.x+Math.cos(c)*.45,0,f.z+Math.sin(c)*.45),this.yarn.rotation.z=-c*3;let h=this.yarn.position.x-this.pos.x,d=this.yarn.position.z-this.pos.z,p=Math.hypot(h,d);p>.22&&(this.pos.x+=h/p*Math.min(p-.2,1.4*t),this.pos.z+=d/p*Math.min(p-.2,1.4*t),s=!0),this.turn(Math.atan2(h,d),t)}this.mode==="eat"&&this.food&&(this.food.scale.y=Math.max(.15,this.food.scale.y-t*.12)),this.phase+=t*(s?11:0);let r=1-Math.exp(-t*8);this.legs.forEach((c,f)=>{let h=Math.sin(this.phase+(f%2?Math.PI:0)+(f>1?Math.PI/2:0));c.rotation.x+=((s?h*.6:this.mode==="loaf"?-1.3:0)-c.rotation.x)*r});let o=this.mode==="sit"?-.45:this.mode==="eat"?.18:0,a=this.mode==="loaf"?-.1:this.mode==="sit"?-.03:this.mode==="eat"?-.02:Math.abs(Math.sin(this.phase))*.01;this.body.rotation.x+=(o-this.body.rotation.x)*r,this.body.position.y+=(a-this.body.position.y)*r,this.mode==="sit"?this.body.position.z+=(-.08-this.body.position.z)*r:this.body.position.z+=(0-this.body.position.z)*r,this.mode==="happy"&&(this.body.position.y=Math.abs(Math.sin(e*9))*.12),this.mode==="play"&&(this.body.position.y=Math.max(0,Math.sin(e*7))*.1),this.head.rotation.x=this.mode==="sit"?.45:this.mode==="happy"?-.3:this.mode==="eat"?.75+Math.sin(e*10)*.08:0,this.head.rotation.y=s||this.mode==="eat"?0:Math.sin(e*.7)*.6;let l=this.mode==="happy"||this.mode==="play";this.tail.forEach((c,f)=>{f&&(c.rotation.z=Math.sin(e*(l?14:s?6:2.2)+f*.7)*(.18+f*.03)),c.rotation.x=f?l?.05:.25:this.mode==="loaf"?-1.45:l?-.15:-.9}),this.root.position.set(this.pos.x,0,this.pos.z),this.root.rotation.y=this.facing}turn(t,e){let n=((t-this.facing+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;this.facing+=n*Math.min(1,e*8)}remoteTick(t,e,n){let s=this.cmd;if(!s)return;let r=this.followId&&s.until&&Date.now()+(this.skew||0)>s.until;if(this.followId&&!r&&n&&n.posOf){let o=n.posOf(this.followId);o&&(!this.nextFollow||e>this.nextFollow)&&(this.nextFollow=e+.7,Math.hypot(o.x-this.pos.x,o.z-this.pos.z)>1.1&&(this.goTo({x:o.x+.45,z:o.z+.35}),this.mode="walk"))}(r||["happy","eat","play"].includes(this.mode)&&e>this.until)&&(this.followId=null,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.mode="sit",this.until=e+1e6)}};function pi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Re,c=0;for(let f=0;f<i.length;++f){let h=i[f],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,f),c+=p}}if(e){let f=0,h=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+f);f+=i[d].attributes.position.count}l.setIndex(h)}for(let f in r){let h=Qh(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(let f in o){let h=o[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let d=0;d<h;++d){let p=[];for(let v=0;v<o[f].length;++v)p.push(o[f][v][d]);let g=Qh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function Qh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new ze(o,e,n),l=0;for(let c=0;c<i.length;++c){let f=i[c];if(f.isInterleavedBufferAttribute){let h=l/e;for(let d=0,p=f.count;d<p;d++)for(let g=0;g<e;g++){let v=f.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var tf=["#f1c9a5","#e2ae84","#f6d7bd","#c98e62","#ebbf98","#d9a074"];var ef=["short","long","spiky","bun","bob","short"],ny=(i,t,e)=>i+(t-i)*e,nf={},qt=(i,t)=>nf[i]||(nf[i]=t()),Hn=new Map;function Se(i,t=.75){let e=String(i).toLowerCase()+"|"+t,n=Hn.get(e);return n||(n=new Kt({color:i,roughness:t,metalness:0}),Hn.set(e,n)),n}var iy=()=>Hn.get("cheek")||Hn.set("cheek",new Kt({color:"#ff8f8f",transparent:!0,opacity:.35,roughness:1})).get("cheek"),nr={robe:"#ec8a1c",under:"#d06a17",sash:"#a8401a",shoes:"#5b3a24"},vo=null;function sy(){if(vo)return vo;let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#a8401a",t.fillRect(0,0,256,128),t.strokeStyle="#f2c14e",t.lineWidth=8,t.strokeRect(8,8,240,112),t.fillStyle="#ffd56a",t.font='900 72px "Segoe UI", "Noto Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SIMI",128,68);let e=new tn(i);return e.colorSpace=_e,vo=new Kt({map:e,roughness:.8}),vo}var Li=class{constructor(t,e){this.index=e,this.root=new zt,this.body=new zt,this.root.add(this.body),this.joint={},this.pose={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.08,armRz:-.08,headY:0,headX:0,lean:0,lift:0,turn:0,wig:0},this.phase=Math.random()*10,this.blinkAt=performance.now()/1e3+1+Math.random()*3,this.talkUntil=0,this.action=null,this.dance=null,this.actionUntil=0,this.build(t)}build(t){this.agent=t,t={...t},t.outfit==="kasaya"&&Object.assign(t,{shirt:nr.robe,pants:nr.under,shoes:nr.shoes});let e=t.skin||tf[this.index%tf.length],n=t.hairStyle||ef[this.index%ef.length];for(this.body.traverse(u=>{u.isMesh&&u.geometry.userData.own&&u.geometry.dispose()});this.body.children.length;)this.body.remove(this.body.children[0]);let s={shirt:Se(t.shirt||"#3b6fb6",.8),skin:Se(e,.6),hair:Se(t.hair||"#2b1d14",.9),pants:Se(t.pants||"#2f3342",.85),shoe:Se(t.shoes||"#1d1d24",.6),dark:Se("#1f1a17",.4),white:Se("#ffffff",.3),mouth:Se("#7a3434",.6),cheek:iy()};this.mats=s;let r=(u,_,x,M=0,R=0,S=0)=>{let b=new X(_,x);return b.position.set(M,R,S),b.castShadow=!0,u.add(b),b},o=.42;this.shoes=[];let a=qt("leg",()=>new Oe(.078,.25,3,8)),l=qt("shoe",()=>new Et(.14,.08,.22));for(let u of[-1,1]){let _=new zt;_.position.set(u*.095,o,0),r(_,a,s.pants,0,-.2,0),this.shoes.push(r(_,l,s.shoe,0,-.375,.045)),this.body.add(_),this.joint[u<0?"legL":"legR"]=_}let c=r(this.body,qt("torso",()=>new Oe(.19,.2,4,12)),s.shirt,0,.68,0);c.scale.set(1,1,.78),this.torso=c,r(this.body,qt("belt",()=>new j(.185,.185,.05,12)),s.pants,0,.47,0).scale.set(1,1,.8);let f=qt("arm",()=>new Oe(.062,.22,3,8)),h=qt("hand",()=>new Tt(.068,8,6));for(let u of[-1,1]){let _=new zt;_.position.set(u*.255,.86,0),r(_,f,s.shirt,0,-.15,0),r(_,h,s.skin,0,-.35,0),this.body.add(_),this.joint[u<0?"armL":"armR"]=_}this.cup=r(this.joint.armR,qt("cup",()=>new j(.05,.04,.11,12)),Se("#e9f3fb",.3),0,-.4,.05),this.cup.visible=!1,this.stick=r(this.joint.armR,qt("stick",()=>{let u=new j(.012,.022,1.35,8);return u.translate(0,.5,0),u}),Se("#c99a5b",.45),0,-.36,.02),this.stick.rotation.x=1.35,this.stick.visible=!1,this.paper=r(this.joint.armL,qt("paper",()=>new Et(.2,.02,.26)),Se("#fffdf5",.9),0,-.4,.08),this.paper.visible=!1;let d=new zt;d.position.set(0,1,0),this.body.add(d),this.joint.head=d,r(d,qt("neck",()=>new j(.07,.08,.1,10)),s.skin,0,-.03,0),r(d,qt("head",()=>new Tt(.25,20,14)),s.skin,0,.19,0);let p=qt("eye",()=>new Tt(.034,10,8)),g=qt("hl",()=>new Tt(.011,6,6));this.eyes=[];for(let u of[-1,1]){let _=r(d,p,s.dark,u*.088,.21,.222);_.scale.set(1,1.15,.6),r(_,g,s.white,.012,.014,.03).castShadow=!1,this.eyes.push(_);let x=r(d,qt("cheek",()=>new Tt(.045,10,8)),s.cheek,u*.15,.13,.19);x.scale.set(1,.6,.3),x.castShadow=!1}if(this.mouth=r(d,qt("mouth",()=>new Et(.075,.02,.02)),s.mouth,0,.1,.238),n==="bald"){let u=r(d,qt("shine",()=>new Tt(.06,10,8)),Hn.get("shine")||Hn.set("shine",new ne({color:"#ffffff",transparent:!0,opacity:.35,depthWrite:!1})).get("shine"),-.07,.42,.1);u.scale.set(1.3,.35,.8),u.castShadow=!1}else{let u=r(d,qt("cap",()=>new Tt(.268,20,10,0,Math.PI*2,0,Math.PI*.52)),s.hair,0,.2,-.005);if(u.rotation.x=-.32,n==="buzz"?u.scale.set(.97,.9,.97):r(d,qt("bang",()=>new Tt(.2,12,8)),s.hair,0,.36,.12).scale.set(1.15,.38,.62),n==="curly"){let _=qt("curl",()=>new Tt(.085,8,6));for(let x=0;x<14;x++){let M=x/14*Math.PI*2,R=x%2?.36:.28;r(d,_,s.hair,Math.sin(M)*.24,R+Math.cos(M*2)*.03,Math.cos(M)*.22-.03)}r(d,_,s.hair,0,.47,0),r(d,_,s.hair,.1,.45,-.08),r(d,_,s.hair,-.1,.45,-.08)}else if(n==="ponytail"){r(d,qt("tie2",()=>new Tt(.06,10,8)),Se(t.accent||"#e1262d",.5),0,.33,-.25);let _=r(d,qt("tail",()=>new Oe(.075,.26,4,10)),s.hair,0,.16,-.32);_.rotation.x=.35}else if(n==="long"){r(d,qt("long",()=>new Oe(.2,.28,6,12)),s.hair,0,.05,-.12).scale.set(1.15,1,.55);for(let x of[-1,1])r(d,qt("lock",()=>new Oe(.06,.24,4,8)),s.hair,x*.22,.07,.02)}else if(n==="bun")r(d,qt("bun",()=>new Tt(.11,14,10)),s.hair,0,.45,-.13);else if(n==="spiky"){let _=qt("spike",()=>new Ye(.07,.17,6));[[-.12,.44,.02,.4],[0,.48,0,0],[.12,.44,.02,-.4],[-.06,.45,-.12,.2],[.07,.45,-.12,-.2]].forEach(([x,M,R,S])=>{let b=r(d,_,s.hair,x,M,R);b.rotation.z=S,b.rotation.x=-.25})}else if(n==="bob"){let _=r(d,qt("bob",()=>new Tt(.29,20,12,0,Math.PI*2,0,Math.PI*.62)),s.hair,0,.16,-.03);_.rotation.x=-.15}}let v=t.accessory||"none",m=Se(t.accent||"#e1262d",.5);if(v==="cap"){let u=r(d,qt("capTop",()=>new Tt(.275,20,12,0,Math.PI*2,0,Math.PI*.5)),m,0,.24,-.01);u.rotation.x=-.18;let _=r(d,qt("brim",()=>new j(.17,.17,.025,20,1,!1,-Math.PI/2,Math.PI)),m,0,.3,.2);_.rotation.x=.12}else if(v==="headphones"){let u=r(d,qt("band",()=>new Pe(.28,.022,8,24,Math.PI)),Se("#2b2b33",.4),0,.2,0);u.rotation.z=0;for(let _ of[-1,1])r(d,qt("cup2",()=>new j(.075,.075,.06,16)),m,_*.27,.18,0).rotation.z=Math.PI/2}else if(v==="bow"){for(let u of[-1,1]){let _=r(d,qt("bowW",()=>new Ye(.07,.13,4)),m,u*.07,.43,.06);_.rotation.z=u*Math.PI/2}r(d,qt("bowK",()=>new Tt(.035,8,6)),m,0,.43,.06)}else if(v==="crown")r(d,qt("crown",()=>new j(.14,.15,.1,5,1,!0)),Hn.get("crown")||Hn.set("crown",new Kt({color:"#f5c518",roughness:.3,side:ye})).get("crown"),0,.5,-.02);else if(v==="headset"){let u=Se("#23262f",.4);r(d,qt("hsBand",()=>new Pe(.275,.014,6,24,Math.PI)),u,0,.2,0),r(d,qt("hsCup",()=>new j(.06,.06,.05,14)),m,-.27,.18,0).rotation.z=Math.PI/2,r(d,qt("hsCup2",()=>new j(.035,.035,.03,10)),u,.265,.18,0).rotation.z=Math.PI/2,r(d,qt("hsBoom",()=>new j(.009,.009,.22,6)),u,-.2,.12,.13).rotation.set(Math.PI/2,0,-.95),r(d,qt("hsMic",()=>new Tt(.022,8,6)),u,-.1,.09,.225)}if(t.outfit==="blazer"){r(this.body,qt("vShirt",()=>new Et(.13,.2,.02)),s.white,0,.77,.148),r(this.body,qt("vTie",()=>new Et(.04,.17,.012)),Se(t.accent||"#f5c518",.5),0,.76,.16);for(let u of[-1,1]){let _=r(this.body,qt("vLapel",()=>new Et(.045,.24,.016)),Se(t.lapel||"#0b3f86",.6),u*.075,.76,.155);_.rotation.z=u*.32}r(this.body,qt("vBadge",()=>new Et(.075,.032,.01)),Se("#f5c518",.3),.12,.8,.14).rotation.y=.45}if(t.outfit==="kasaya"){let u=Se(nr.sash,.85);for(let S of[.152,-.152]){let b=r(this.body,qt("ksSash",()=>new Et(.11,.48,.02)),u,.02,.7,S);b.rotation.z=-.62}r(this.body,qt("ksShoulder",()=>new Tt(.085,12,8)),u,-.2,.9,0).scale.set(1,.6,1.2);let _=Hn.get("skirt")||Hn.set("skirt",new Kt({color:nr.robe,roughness:.85,side:ye})).get("skirt");r(this.body,qt("ksSkirt",()=>new j(.195,.25,.3,18,1,!0)),_,0,.32,0).scale.set(1,1,.85);let x=r(this.body,qt("ksHem",()=>new Pe(.25,.012,6,24)),u,0,.17,0);x.rotation.x=Math.PI/2,x.scale.set(1,.85,1);let M=r(this.body,qt("ksBeads",()=>new Pe(.2,.022,6,18)),Se("#5b3418",.5),0,.9,.01);M.rotation.x=Math.PI/2-.35,M.scale.set(1,.8,1),r(this.body,qt("ksBead",()=>new Tt(.035,10,8)),Se("#f2c14e",.3),0,.84,.17);let R=r(this.body,qt("ksBack",()=>new ie(.22,.11)),sy(),0,.66,-.156);R.rotation.y=Math.PI,R.castShadow=!1}if(v==="glasses"&&!t.isReviewer&&(t={...t,isReviewer:!0}),v==="tie"&&!t.isManager&&(t={...t,isManager:!0}),t.isManager&&(r(this.body,qt("tie",()=>new Et(.06,.24,.02)),Se("#b3362f",.5),0,.73,.155),r(this.body,qt("knot",()=>new Et(.075,.05,.03)),Se("#8f2a24",.5),0,.86,.15)),t.isReviewer){let u=Se("#2b2b33",.4),_=qt("glass",()=>new Pe(.062,.012,8,20));for(let x of[-1,1])r(d,_,u,x*.088,.21,.245);r(d,qt("bridge",()=>new Et(.06,.012,.012)),u,0,.215,.25)}this.mergeParts()}mergeParts(){let t=new Set([...this.eyes,this.mouth,this.torso,...this.shoes,this.cup,this.stick,this.paper]);for(let e of[this.body,...Object.values(this.joint)]){let n=new Map;for(let s of e.children){if(!s.isMesh||t.has(s)||s.children.length||!s.visible)continue;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)}for(let s of n.values())if(!(s.length<2))try{let r=s.map(l=>{l.updateMatrix();let c=l.geometry.clone();c.applyMatrix4(l.matrix);for(let f of Object.keys(c.attributes))["position","normal","uv"].includes(f)||c.deleteAttribute(f);return c.index?c:null});if(r.some(l=>!l))continue;let o=pi(r,!1);if(r.forEach(l=>l.dispose()),!o)continue;o.userData.own=!0;let a=new X(o,s[0].material);a.castShadow=s[0].castShadow,a.receiveShadow=s[0].receiveShadow;for(let l of s)e.remove(l);e.add(a)}catch{}}}say(t){this.talkUntil=performance.now()/1e3+t/1e3}doAction(t,e){this.action=t,this.actionUntil=performance.now()/1e3+e/1e3}animate(t,e,{moving:n,speed:s,seated:r,typing:o,beat:a,meditate:l,kneel:c}){let f=this.pose,h={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.1,armRz:-.1,headY:0,headX:0,lean:0,lift:0,turn:0,wig:0};if(this.action&&e>this.actionUntil&&(this.action=null),n){this.phase+=t*(4+s*3.2);let u=Math.sin(this.phase);h.legL=u*.62,h.legR=-u*.62,h.armLx=-u*.55,h.armRx=u*.55,h.lift=Math.abs(Math.cos(this.phase))*.04,h.lean=.06}else if(r&&c){let u=this.bowPeriod||3.2;this.bowPh=((this.bowPh||0)+t/u)%1;let _=this.bowPh<.55?Math.sin(this.bowPh/.55*Math.PI):0;h.hip=1,h.foot=1.5,h.lean=1.12*_,h.legL=h.legR=1.5-h.lean,h.legLz=-.1,h.legRz=.1,h.armLx=-1.45-.85*_,h.armRx=h.armLx,h.armLz=-.5+.62*_,h.armRz=-h.armLz,h.headX=.1+.25*_,this.bowDown=_}else r&&l?(h.legL=-1.47,h.legR=-1.33,h.legLz=.62,h.legRz=-.62,h.armLx=-.48,h.armRx=-.48,h.armLz=.36,h.armRz=-.36,h.headX=.14,h.lean=.04+Math.sin(e*.9+this.index)*.015,h.lift=Math.sin(e*.9+this.index)*.006):r?(h.legL=h.legR=-1.48,h.lift=.06,o?(h.armLx=-1.18+Math.sin(e*17)*.13,h.armRx=-1.18+Math.sin(e*17+1.7)*.13,h.armLz=.22,h.armRz=-.22,h.lean=.12,h.headX=.12,h.headY=Math.sin(e*.7+this.index)*.15):(h.armLx=-.7,h.armRx=-.7,h.armLz=.18,h.armRz=-.18,h.headY=Math.sin(e*.4+this.index*2)*.25)):h.lift=Math.sin(e*2.2+this.index)*.006;if(this.action==="stretch"){let u=Math.sin(e*3)*.12;h.armLx=-2.85+u,h.armRx=-2.85-u,h.armLz=.25,h.armRz=-.25,h.headX=-.2,h.lean=-.1}else if(this.action==="drink")h.armRx=-2.1,h.armRz=.35,h.headX=-.28;else if(this.action==="look")h.headY=Math.sin(e*1.6)*.7;else if(this.action==="wave")h.armRx=-2.7,h.armRz=-.35+Math.sin(e*13)*.4,h.headX=-.1,h.headY=.15;else if(this.action==="dance"){let u=Math.sin(e*8);h.armLx=-1.6+u*1.1,h.armRx=-1.6-u*1.1,h.armLz=.5,h.armRz=-.5,r||(h.lift=Math.abs(Math.sin(e*8))*.1,h.legL=u*.35,h.legR=-u*.35),h.headY=Math.sin(e*4)*.3}else if(this.action==="cheer"){let u=Math.sin(e*9);h.armLx=-2.9+u*.2,h.armRx=-2.9-u*.2,h.armLz=.45,h.armRz=-.45,h.headX=-.25,r||(h.lift=Math.abs(Math.sin(e*7))*.16)}else if(this.action==="place")h.armLx=-1.2,h.armRx=-1.2,h.lean=.25,h.headX=.25;else if(this.action==="highfive"){let u=this.actionUntil-e;h.armRx=-2.55,h.armRz=-.15,h.headX=-.12,u<1&&u>.7&&(h.armRx=-2.2,r||(h.lift=.08))}else if(this.action==="hug")h.armLx=-1.35,h.armRx=-1.35,h.armLz=-.55,h.armRz=.55,h.lean=.16,h.headY=.25,r||(h.lift=Math.sin(e*3)*.015);else if(this.action==="cheers"){let u=this.actionUntil-e;h.armRx=u<1.3&&u>.9?-1.95:-1.55,h.armRz=.05,h.headX=-.05}else if(this.action==="cue"||this.holdCue&&!n&&!this.action){let u=this.action==="cue"?Math.max(0,Math.sin((this.actionUntil-e)*9)):0;h.lean=.42,h.headX=.34,h.armLx=-1.2,h.armLz=.32,h.armRx=-.95-u*.35,h.armRz=-.06,r||(h.legL=.18,h.legR=-.12)}else this.action==="give"&&(h.armRx=-1.35,h.armRz=.12,h.lean=.08,h.headX=.1);this.dance&&!n&&!this.action&&this.dancePose(h,a===void 0?e*2:a,r);let d=e<this.talkUntil;d&&!r&&!n&&!this.action?(h.armRx=-.55+Math.sin(e*5.5)*.35,h.armRz=-.25,h.headX=Math.sin(e*4)*.08):d&&(h.headX+=Math.sin(e*4)*.06),this.cup.visible=this.action==="drink"||this.action==="cheers"||this.action==="give",this.stick.visible=this.action==="cue"||!!this.holdCue,this.paper.visible=this.action==="place"||this.carrying===!0,(this.carrying&&!n&&!this.action||this.carrying&&n)&&(h.armLx=-.9);let p=1-Math.exp(-t*11);for(let u of Object.keys(h))f[u]=ny(f[u],h[u],p);let g=this.joint;g.legL.rotation.set(f.legL,0,f.legLz),g.legR.rotation.set(f.legR,0,f.legRz);for(let u of this.shoes)u.rotation.x=f.foot;g.armL.rotation.set(f.armLx,0,f.armLz),g.armR.rotation.set(f.armRx,0,f.armRz),g.head.rotation.set(f.headX,f.headY,0),this.body.rotation.order="YXZ",this.body.rotation.set(f.lean,f.turn,f.wig);let v=f.hip*.42;this.body.position.set(0,f.lift+v*(1-Math.cos(f.lean)),-v*Math.sin(f.lean)),this.torso.scale.y=1+Math.sin(e*2.2+this.index)*.012;let m=1.15;e>this.blinkAt&&(m=.15,e>this.blinkAt+.12&&(this.blinkAt=e+2+Math.random()*4)),l&&r&&!n&&!d&&!this.action&&(m=.15),c&&r&&!n&&(this.bowDown||0)>.3&&(m=.15);for(let u of this.eyes)u.scale.y=m;this.mouth.scale.set(d?.8:1,d?1+Math.abs(Math.sin(e*17))*2.6:1,1)}dancePose(t,e,n){let s=e*Math.PI,r=Math.abs(Math.sin(s));switch(this.dance){case"disco":{let o=Math.sin(s/2)>0;t.armRx=o?-2.75:-.5,t.armRz=o?-.55:-.2,t.armLx=-.25,t.armLz=.95,t.headY=o?.3:-.1,t.headX=o?-.2:.05,n||(t.lift=r*.05,t.legL=Math.sin(s)*.22,t.legR=-Math.sin(s)*.08);break}case"robot":{let o=Math.sin(s)>0?1:-1,a=Math.sin(s/2)>0?1:-1;t.armLx=-1.45-o*.45,t.armRx=-1.45+o*.45,t.armLz=.15,t.armRz=-.15,t.headY=a*.4,t.headX=0,t.lean=0,n||(t.lift=o>0?.02:0,t.legL=o>0?.15:0,t.legR=o<0?.15:0);break}case"shuffle":{let o=Math.sin(s*2);t.armLx=o*.7,t.armRx=-o*.7,t.armLz=.25,t.armRz=-.25,t.lean=.08,t.headY=Math.sin(s)*.15,n||(t.legL=o*.55,t.legR=-o*.55,t.lift=Math.abs(o)*.07);break}case"spin":t.armLx=-.15,t.armRx=-.15,t.armLz=1.35,t.armRz=-1.35,t.headX=-.1,n||(t.lift=r*.06);break;case"twerk":{let o=Math.floor(e)%8===7,a=Math.sin(s*2);if(n){t.armLx=-.4,t.armRx=-.4,t.headY=a*.3,t.wig=a*.08;break}t.turn=o?0:Math.PI,t.lean=o?.05:.42,t.wig=o?0:a*.2,t.armLx=o?-2.6:-.55,t.armRx=o?-.4:-.55,t.armLz=o?.5:.32,t.armRz=o?-.2:-.32,t.legLz=.2,t.legRz=-.2,t.legL=o?0:-.25,t.legR=o?0:-.25,t.headY=o?0:.75*(Math.sin(s/2)>0?1:-1),t.headX=o?-.15:-.35,t.lift=Math.abs(a)*.035;break}case"hands":t.armLx=-2.9+Math.sin(s)*.25,t.armRx=-2.9-Math.sin(s)*.25,t.armLz=.45+Math.sin(s)*.2,t.armRz=-.45+Math.sin(s)*.2,t.headX=-.22,n||(t.lift=r*.13);break;default:{let o=Math.sin(s);t.armLx=-1.6+o*1,t.armRx=-1.6-o*1,t.armLz=.5,t.armRz=-.5,t.headY=Math.sin(s/2)*.3,n||(t.lift=r*.09,t.legL=o*.3,t.legR=-o*.3)}}}headWorld(t){return this.joint.head.updateWorldMatrix(!0,!1),t.set(0,.5,0).applyMatrix4(this.joint.head.matrixWorld)}};function sf(i,t){for(let e of t)if(Math.abs(i.x-e.x)<(i.w+e.w)/2+4&&i.y-i.h<e.y+4&&e.y-e.h<i.y+4)return e;return null}function rf(i){let t=[...i].sort((n,s)=>s.y-n.y),e=[];for(let n of t){let s={...n},r=l=>Math.hypot(l.x-n.x,l.y-n.y),o=null;if(!sf(s,e))o={x:n.x,y:n.y};else{let l=[];n.prev&&(n.prev.x||n.prev.y)&&l.push({x:n.x+n.prev.x,y:n.y+n.prev.y,keep:!0});for(let c of e)l.push({x:n.x,y:c.y-c.h-4}),l.push({x:c.x-(c.w+n.w)/2-4,y:n.y}),l.push({x:c.x+(c.w+n.w)/2+4,y:n.y}),l.push({x:c.x-(c.w+n.w)/2-4,y:c.y-c.h-4}),l.push({x:c.x+(c.w+n.w)/2+4,y:c.y-c.h-4});for(let c of l){if(sf({...s,x:c.x,y:c.y},e))continue;let f=r(c)-(c.keep?12:0);(!o||f<o.d)&&(o={x:c.x,y:c.y,d:f})}if(!o){let c=Math.min(...e.map(f=>f.y-f.h))-4;o={x:n.x,y:Math.min(n.y,c)}}}let a={...n,x:o.x,y:o.y};e.push(a)}return i.map(n=>e[t.indexOf(n)])}var Wt={minX:-7,maxX:7,minZ:-5,maxZ:5,wallH:3.1},ir=[{x:0,z:-1.5},{x:-4.1,z:-1.5},{x:4.1,z:-1.5},{x:-4.1,z:2},{x:4.1,z:2},{x:0,z:2}],ve={w:1.8,d:.85,h:.76},sr=-.82,Eo={x:-5.6,z:-4.95},wo={cooler:{x:5.55,z:-3.75,face:{x:6.3,z:-4.45}},board:{x:.2,z:-3.85,face:{x:.2,z:-5}},windowL:{x:-3.2,z:-3.9,face:{x:-3.2,z:-5}},windowR:{x:3.4,z:-3.9,face:{x:3.4,z:-5}},shelf:{x:-5.7,z:-.4,face:{x:-7,z:-.4}},tray:{x:5.55,z:3.2,face:{x:5.55,z:4.2}},plant:{x:-5.2,z:1,face:{x:-6.5,z:1}}},cf=[[5.95,-4.95,6.7,-4.05],[-7,-1.4,-6.35,.6],[-7,2.5,-5.95,4.6],[-5.7,3.05,-4.9,3.95],[5,3.75,6.2,4.6],[-6.9,-4.9,-6.2,-4.2],[6.3,4.3,6.95,4.95],[-6.9,.8,-6.3,1.4]],Ot=(i,t=.8,e={})=>new Kt({color:i,roughness:t,metalness:0,...e});function rr(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new tn(s);return n&&(o.colorSpace=_e),o.anisotropy=4,{tex:o,canvas:s,g:r}}function Mo(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function ry(){let i=Mo(7),t=rr(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*300);for(;a<n;){let l=220+Math.floor(i()*260),c=[196+i()*22,142+i()*18,96+i()*14].map(Math.round);e.fillStyle=`rgb(${c})`,e.fillRect(a,o,l,64);for(let f=0;f<9;f++){e.strokeStyle=`rgba(110,70,40,${.05+i()*.07})`,e.lineWidth=1+i()*1.5;let h=o+6+i()*52;e.beginPath(),e.moveTo(a,h),e.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.7,h+(i()-.5)*8,a+l,h+(i()-.5)*4),e.stroke()}e.fillStyle="rgba(80,50,30,0.55)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(80,50,30,0.6)",e.fillRect(0,o+64-2,n,2),e.fillStyle="rgba(255,235,200,0.12)",e.fillRect(0,o,n,2)}});return t.tex.wrapS=t.tex.wrapT=Tn,t.tex.repeat.set((Wt.maxX-Wt.minX)/4,(Wt.maxZ-Wt.minZ)/4),t.tex}var hf={tim:["#3f2d84","#5a42a6","#f5c518","#33246c"],mint:["#4f9c88","#7cc8b2","#fff4d6","#3f8573"],vang:["#d9a441","#f2c96b","#fff7e0","#b98a2f"],xanh:["#1a6fd6","#2f8cf0","#ffffff","#0f5bb5"],navy:["#142c5a","#1f3d73","#e1262d","#0f2247"]};function of(i=hf.tim){return rr(512,320,(t,e,n)=>{t.fillStyle=i[0],t.fillRect(0,0,e,n),t.fillStyle=i[1],t.fillRect(18,18,e-36,n-36),t.strokeStyle=i[2],t.lineWidth=6,t.strokeRect(34,34,e-68,n-68),t.fillStyle=i[3];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.save(),t.translate(s,r),t.rotate(Math.PI/4),t.fillRect(-9,-9,18,18),t.restore();t.fillStyle=i[2];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.beginPath(),t.arc(s,r,3,0,7),t.fill()}).tex}function oy(){let i=rr(512,256,(t,e,n)=>{let s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#6fb6e8"),s.addColorStop(.7,"#bfe3f7"),s.addColorStop(1,"#f4f0dc"),t.fillStyle=s,t.fillRect(0,0,e,n);let r=Mo(3);for(let o=0;o<7;o++){let a=r()*e,l=40+r()*110,c=18+r()*22;t.fillStyle="rgba(255,255,255,0.92)";for(let f=0;f<5;f++)t.beginPath(),t.arc(a+f*c*.7,l+Math.sin(f)*5,c*(.7+r()*.5),0,7),t.fill()}t.fillStyle="#7fae7a",t.beginPath(),t.moveTo(0,n);for(let o=0;o<=e;o+=16)t.lineTo(o,n-30-Math.sin(o/40)*10-r()*6);t.lineTo(e,n),t.fill()});return i.tex.wrapS=Tn,i.tex}var ay=new ds;function af(i,t){ay.load(i,e=>{e.colorSpace=_e,e.anisotropy=4,t(e)},void 0,()=>{})}function ly(){return rr(256,320,(i,t,e)=>{i.fillStyle="#fbf3e4",i.fillRect(0,0,t,e),i.fillStyle="#f2b450",i.beginPath(),i.arc(160,120,70,0,7),i.fill(),i.fillStyle="#3f8f8a",i.fillRect(30,170,200,90),i.fillStyle="#d0644a",i.beginPath(),i.moveTo(30,260),i.lineTo(110,150),i.lineTo(190,260),i.fill(),i.fillStyle="#2b2b33",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.fillText("C\u1ED0 L\xCAN!",t/2,300)}).tex}function ff(i,t){let e={animated:[]},n=new X(new ie(Wt.maxX-Wt.minX,Wt.maxZ-Wt.minZ),Ot("#ffffff",.75,{map:ry()}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n),e.floor=n;let s=Ot("#ffffff",.95,{map:of()}),r=new X(new ie(5.2,2.2),s);r.rotation.x=-Math.PI/2,r.position.set(0,.006,.25),r.receiveShadow=!0,i.add(r);let o=Ot("#efe3cc",.95),a=Ot("#c9a77d",.85),l=Ot("#8a6040",.7);e.setDecor=(W={})=>{let Z={kem:["#efe3cc","#c9a77d"],bacha:["#d6efe4","#8fc7b0"],xam:["#dfe5ee","#a9b6c9"],troi:["#d9e9f7","#8fb3dc"],vanh:["#fbf3d6","#e2c98a"]}[W.wall||"troi"];Z&&(o.color.set(Z[0]),a.color.set(Z[1]));let lt={sang:"#ffffff",dam:"#a8876a",xam:"#d4cfcb"}[W.floor||"sang"];lt&&n.material.color.set(lt);let Ht=hf[W.rug||"xanh"];if(Ht){let $t=s.map;s.map=of(Ht),s.needsUpdate=!0,$t&&$t.dispose()}};let c=Wt.maxX-Wt.minX,f=Wt.maxZ-Wt.minZ,h=Wt.wallH,d=new X(new Et(c+.2,h,.2),o);d.position.set(0,h/2,Wt.minZ-.1),d.receiveShadow=!0,i.add(d);let p=new X(new Et(.2,h,f),o);p.position.set(Wt.minX-.1,h/2,0),p.receiveShadow=!0,i.add(p);let g=new X(new Et(c+.2,.95,.04),a);g.position.set(0,.475,Wt.minZ+.02),g.receiveShadow=!0,i.add(g);let v=new X(new Et(.04,.95,f),a);v.position.set(Wt.minX+.02,.475,0),v.receiveShadow=!0,i.add(v);let m=new X(new Et(c+.2,.06,.07),l);m.position.set(0,.96,Wt.minZ+.035),i.add(m);let u=new X(new Et(.07,.06,f),l);u.position.set(Wt.minX+.035,.96,0),i.add(u);let _=Ot("#5b3f2a",.8),x=new X(new Et(c+.4,.25,.2),_);x.position.set(0,-.125,Wt.maxZ+.1),i.add(x);let M=new X(new Et(.2,.25,f+.2),_);M.position.set(Wt.maxX+.1,-.125,0),i.add(M);let R=oy();e.sky=R;let S=Ot("#fbf7ee",.6);for(let W of[-3.2,3.4]){let Z=new zt;Z.position.set(W,1.85,Wt.minZ+.02);let lt=new ne({map:R,toneMapped:!1});(e.skyMats=e.skyMats||[]).push(lt);let Ht=new X(new ie(1.9,1.25),lt);Ht.position.z=.005,Z.add(Ht);let $t=(Ne,ke,Ge,Ae)=>{let He=new X(new Et(Ne,ke,.08),S);He.position.set(Ge,Ae,.03),He.castShadow=!0,Z.add(He)};$t(2.05,.08,0,.66),$t(2.05,.08,0,-.66),$t(.08,1.4,-.99,0),$t(.08,1.4,.99,0),$t(.05,1.3,0,0),$t(1.95,.05,0,.05);let ue=new X(new Et(2.2,.06,.22),S);ue.position.set(0,-.72,.1),ue.castShadow=!0,Z.add(ue);let Qt=new X(new j(.08,.06,.12,10),Ot("#c56a43"));Qt.position.set(.6,-.63,.12),Z.add(Qt);let he=new X(new Ke(.11,0),Ot("#5aa05a"));he.position.set(.6,-.5,.12),Z.add(he),i.add(Z)}let b=new zt;b.position.set(Eo.x,0,Wt.minZ+.03);let I=Ot("#6b4a2e",.7),U=Ot("#a8743f",.65),y=new X(new Et(1.15,2.2,.06),U);y.position.set(0,1.1,.02),y.castShadow=!0,b.add(y);for(let[W,Z,lt,Ht]of[[1.3,.09,0,2.24],[.09,2.25,-.62,1.12],[.09,2.25,.62,1.12]]){let $t=new X(new Et(W,Z,.1),I);$t.position.set(lt,Ht,.03),b.add($t)}for(let W of[.6,1.55]){let Z=new X(new Et(.8,.6,.02),Ot("#946535",.7));Z.position.set(0,W,.06),b.add(Z)}let E=new X(new Tt(.045,10,8),Ot("#e3c15a",.3,{metalness:.6}));E.position.set(.42,1.05,.09),b.add(E),i.add(b);let N=rr(768,360,()=>{}),B=new zt;B.position.set(.2,1.9,Wt.minZ+.03);let P=new X(new Et(2.9,1.42,.06),Ot("#9aa0a8",.5));P.castShadow=!0,B.add(P);let V=new X(new ie(2.78,1.3),new Kt({map:N.tex,roughness:.5}));V.position.z=.032,B.add(V);let z=new X(new Et(1.6,.05,.1),Ot("#8c929a",.5));z.position.set(0,-.74,.06),B.add(z),i.add(B),e.drawBoard=W=>{let{g:Z,canvas:lt}=N,Ht=lt.width,$t=lt.height;Z.fillStyle="#fbfbf7",Z.fillRect(0,0,Ht,$t),[["CH\u1EDC",W.wait,"#f6d36b"],["\u0110ANG L\xC0M",W.run,"#8fd0f2"],["XONG",W.done,"#9fe0a0"]].forEach(([Qt,he,Ne],ke)=>{let Ge=18+ke*250;Z.fillStyle=Ne,Z.fillRect(Ge,16,232,46),Z.fillStyle="#2b2b33",Z.font="bold 26px Segoe UI, Arial, sans-serif",Z.textAlign="left",Z.fillText(Qt,Ge+12,49),Z.textAlign="right",Z.fillText(String(he),Ge+220,49),ke<2&&(Z.fillStyle="#d5d9df",Z.fillRect(Ge+241,16,3,$t-32));let Ae=Math.min(he,9);for(let He=0;He<Ae;He++){let Di=Ge+14+He%3*74,Cn=80+Math.floor(He/3)*86;Z.save(),Z.translate(Di+30,Cn+34),Z.rotate((He*37%9-4)*.02),Z.fillStyle="rgba(0,0,0,0.12)",Z.fillRect(-28,-30,62,66),Z.fillStyle=Ne,Z.fillRect(-31,-34,62,66),Z.fillStyle="rgba(0,0,0,0.25)";for(let on=0;on<3;on++)Z.fillRect(-22,-18+on*14,40-on*8,4);Z.restore()}}),N.tex.needsUpdate=!0},e.drawBoard({wait:0,run:0,done:0});let nt=new zt;nt.position.set(-1.75,2.35,Wt.minZ+.04);let $=new X(new j(.28,.28,.05,32),Ot("#fbfaf5",.5));$.rotation.x=Math.PI/2,nt.add($);let J=new X(new Pe(.28,.03,8,32),Ot("#5b4a3a",.5));nt.add(J);for(let W=0;W<12;W++){let Z=new X(new Et(.02,.05,.01),Ot("#5b4a3a")),lt=W/12*Math.PI*2;Z.position.set(Math.sin(lt)*.22,Math.cos(lt)*.22,.03),Z.rotation.z=-lt,nt.add(Z)}let ot=(W,Z)=>{let lt=new zt,Ht=new X(new Et(Z,W,.01),Ot("#222"));return Ht.position.y=W/2,lt.add(Ht),lt.position.z=.04,nt.add(lt),lt},ct=ot(.13,.03),bt=ot(.2,.02);i.add(nt),e.animated.push(()=>{let W=new Date;bt.rotation.z=-(W.getMinutes()+W.getSeconds()/60)/60*Math.PI*2,ct.rotation.z=-(W.getHours()%12+W.getMinutes()/60)/12*Math.PI*2});let It=Ot("#ffffff",.6,{map:ly()}),et=new X(new ie(.9,1.2),It);et.position.set(Wt.minX+.05,1.8,2.4),et.rotation.y=Math.PI/2,i.add(et);let ht=new X(new Et(.04,1.3,1),Ot("#0a78f0",.5));ht.position.set(Wt.minX+.015,1.8,2.4),i.add(ht),af("brand/simi-banner.jpg",W=>{It.map=W,It.needsUpdate=!0});let xt=(W,Z,lt,Ht,$t,ue,Qt)=>{let he=new zt;he.position.copy($t),he.rotation.y=ue,i.add(he);let Ne=new X(new Tt(.03,10,8),Ot("#c9ced8",.3,{metalness:.6}));Ne.position.z=.02,he.add(Ne);let ke=new zt;he.add(ke);let Ge=.32,Ae=new X(new Et(Z+.12,lt+.12,.04),Ot(Ht,.55));Ae.position.set(0,-Ge-lt/2-.06,.05),Ae.castShadow=!0,ke.add(Ae);let He=new X(new ie(Z,lt),new ne({transparent:!0,opacity:0}));He.position.set(0,Ae.position.y,.075),ke.add(He),af(W,Cn=>{He.material.map=Cn,He.material.opacity=1,He.material.needsUpdate=!0});let Di=Ot("#5a6478",.8);for(let Cn of[-1,1]){let on=Cn*(Z/2-.02),Ui=-Ge-.02,Ni=Math.hypot(on,Ui),Hi=new X(new j(.007,.007,Ni,5),Di);Hi.position.set(on/2,Ui/2,.05),Hi.rotation.z=Math.atan2(on,-Ui),ke.add(Hi)}return e.animated.push(Cn=>{ke.rotation.z=Math.sin((Cn||performance.now()/1e3)*.9+Qt)*.025}),he};xt("brand/uniq.png",1.15,.41,"#142c5a",new L(Wt.minX+.03,2.95,-3.05),Math.PI/2,0),xt("brand/crenot.png",1.35,.33,"#ffffff",new L(Wt.minX+.03,3,-.4),Math.PI/2,1.7),xt("brand/simi.png",.85,.255,"#0a78f0",new L(-4.4,2.95,Wt.minZ+.03),0,3.1);let yt=new zt;yt.position.set(-6.68,0,-.4),yt.rotation.y=Math.PI/2;let Ut=Ot("#8a5a35",.75),Gt=new Et(.05,2,.4);for(let W of[-.95,.95]){let Z=new X(Gt,Ut);Z.position.set(W,1,0),Z.castShadow=!0,yt.add(Z)}let Xt=Mo(11),ee=["#c4553f","#3f8fb0","#e0b04c","#4f7a4a","#7b4fa0","#d07a2c","#2f5d9e"];for(let W=0;W<5;W++){let Z=new X(new Et(1.9,.04,.4),Ut);if(Z.position.set(0,.04+W*.48,0),Z.castShadow=!0,Z.receiveShadow=!0,yt.add(Z),W===4)continue;let lt=-.88;for(;lt<.8;){let Ht=.05+Xt()*.06,$t=.26+Xt()*.14,ue=new X(new Et(Ht,$t,.28),Ot(ee[Math.floor(Xt()*ee.length)],.7));ue.position.set(lt+Ht/2,.06+W*.48+$t/2,.02),ue.rotation.z=Xt()<.1?.2:0,ue.castShadow=!0,yt.add(ue),lt+=Ht+.012+(Xt()<.12?.15:0)}}i.add(yt);let ut=new zt;ut.position.set(6.3,0,-4.45);let C=new X(new Et(.42,1.05,.42),Ot("#eceef1",.4));C.position.y=.525,C.castShadow=!0,ut.add(C);let wt=new X(new j(.17,.17,.48,18),new Kt({color:"#7cc0ec",transparent:!0,opacity:.7,roughness:.15}));wt.position.y=1.32,ut.add(wt);let q=new X(new Et(.08,.06,.06),Ot("#3f78c2"));q.position.set(-.1,.8,.23),ut.add(q);let Y=q.clone();Y.material=Ot("#d0453f"),Y.position.x=.1,ut.add(Y),i.add(ut);let ft=[],mt=(W,Z,lt=1)=>{let Ht=new zt;Ht.position.set(W,0,Z),Ht.scale.setScalar(lt);let $t=new X(new j(.24,.18,.42,14),Ot("#c56a43",.8));$t.position.y=.21,$t.castShadow=!0,Ht.add($t);let ue=new X(new j(.21,.21,.02,14),Ot("#4a3326"));ue.position.y=.41,Ht.add(ue);let Qt=new zt;Qt.position.y=.42,Ht.add(Qt);let he=Ot("#4f9a52",.7),Ne=Ot("#3a7a40",.7);for(let ke=0;ke<9;ke++){let Ge=new X(new Ye(.09,.75,5),ke%2?he:Ne),Ae=ke/9*Math.PI*2;Ge.position.set(Math.cos(Ae)*.09,.35,Math.sin(Ae)*.09),Ge.rotation.set(Math.sin(Ae)*.45,0,-Math.cos(Ae)*.45),Ge.castShadow=!0,Qt.add(Ge)}return i.add(Ht),ft.push(Qt),Ht};mt(-6.55,-4.55,1.1),mt(6.6,4.6,1.15),mt(-6.6,1.1,.9),e.animated.push(W=>ft.forEach((Z,lt)=>{Z.rotation.z=Math.sin(W*1.3+lt)*.04,Z.rotation.x=Math.cos(W*1.1+lt)*.03}));let pt=new zt;pt.position.set(-6.45,0,3.55),pt.rotation.y=Math.PI/2;let A=Ot("#4f7a8a",.95),w=Ot("#5f8c9c",.95),O=new X(new Et(2,.42,.85),A);O.position.y=.25,O.castShadow=!0,pt.add(O);let rt=new X(new Et(2,.6,.22),A);rt.position.set(0,.62,-.32),rt.castShadow=!0,pt.add(rt);for(let W of[-1,1]){let Z=new X(new Et(.2,.62,.85),A);Z.position.set(W,.33,0),Z.castShadow=!0,pt.add(Z)}for(let W of[-.45,.45]){let Z=new X(new Et(.85,.14,.62),w);Z.position.set(W,.5,.05),Z.castShadow=!0,pt.add(Z)}let at=new X(new Et(.36,.34,.12),Ot("#f2b450"));at.position.set(.6,.72,-.15),at.rotation.z=.2,pt.add(at),i.add(pt);let it=new zt;it.position.set(-5.3,0,3.5);let Lt=new X(new j(.42,.42,.05,24),Ot("#8a5a35",.6));Lt.position.y=.42,Lt.castShadow=!0,it.add(Lt);let vt=new X(new j(.05,.08,.4,10),Ot("#3b2b20"));vt.position.y=.2,it.add(vt);let At=new X(new j(.05,.045,.1,12),Ot("#f4f1ea"));At.position.set(.1,.5,.05),it.add(At),i.add(it);let Jt=new zt;Jt.position.set(5.6,0,4.15);let H=new X(new Et(1.1,.06,.65),Ot("#b9844f",.6));H.position.y=.78,H.castShadow=!0,H.receiveShadow=!0,Jt.add(H);for(let[W,Z]of[[-.48,-.26],[.48,-.26],[-.48,.26],[.48,.26]]){let lt=new X(new Et(.06,.78,.06),Ot("#5e3c22"));lt.position.set(W,.39,Z),lt.castShadow=!0,Jt.add(lt)}let K=new X(new Et(.5,.06,.38),Ot("#6b7a8f",.5));K.position.set(0,.84,0),Jt.add(K);let gt=new zt;gt.position.set(0,.86,0),Jt.add(gt),i.add(Jt);let Pt=[Ot("#fffdf6",.9),Ot("#f1ece0",.9)];e.setTray=W=>{for(;gt.children.length;)gt.remove(gt.children[0]);for(let Z=0;Z<Math.min(W,14);Z++){let lt=new X(new Et(.4,.012,.3),Pt[Z%2]);lt.position.y=Z*.014,lt.rotation.y=(Z*37%7-3)*.03,lt.castShadow=!0,gt.add(lt)}},e.trayAnchor=new L(5.6,.95,4.5),e.lamps=[];let _t=Ot("#2b2b33",.6),Yt=Ot("#f2b450",.45);for(let[W,Z]of[[-4.1,.25],[0,.25],[4.1,.25]]){let lt=new zt;lt.position.set(W,0,Z);let Ht=new X(new j(.008,.008,.6,6),_t);Ht.position.y=Wt.wallH-.3,lt.add(Ht);let $t=new X(new Ye(.32,.26,20,1,!0),Yt);$t.material.side=ye,$t.position.y=Wt.wallH-.68,$t.castShadow=!1,lt.add($t);let ue=new Kt({color:"#fff3d6",emissive:"#ffd58a",emissiveIntensity:0,roughness:.3}),Qt=new X(new Tt(.075,12,10),ue);Qt.position.y=Wt.wallH-.78,lt.add(Qt);let he=new mo("#ffd9a0",0,7.5,1.6);he.position.y=Wt.wallH-.85,lt.add(he),i.add(lt),e.lamps.push({bulbMat:ue,light:he})}let Nt=140,se=new Float32Array(Nt*3),F=Mo(5);for(let W=0;W<Nt;W++)se[W*3]=-6+F()*12,se[W*3+1]=.3+F()*2.6,se[W*3+2]=-4.8+F()*4.5;let Rt=new Re;Rt.setAttribute("position",new ze(se,3));let st=new ro(Rt,new Xs({color:"#fff3d6",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));return i.add(st),e.dust=st,e.animated.push((W,Z)=>{for(let lt=0;lt<Nt;lt++)se[lt*3+1]+=Math.sin(W*.5+lt)*Z*.03,se[lt*3]+=Math.cos(W*.3+lt*1.7)*Z*.02;Rt.attributes.position.needsUpdate=!0,R.offset.x=W*.004%1}),e}var lf={sim:["#9a91ad","GI\u1EA2 L\u1EACP"],claude:["#e08a5c","CLAUDE"],anthropic:["#e08a5c","CLAUDE API"],codex:["#4fd1a8","CHATGPT"],antigravity:["#7aa7ff","GEMINI"],openai:["#4fd1a8","GPT API"],gemini:["#7aa7ff","GEMINI"],ollama:["#e6e6e6","OLLAMA"],simi:["#45a2ff","SIMI"]};function uf(i,t,e){let n=new zt;n.position.set(t.x,0,t.z);let s=Ot("#c99863",.55),r=Ot("#a5764a",.7),o=Ot("#3b3d46",.45,{metalness:.3}),a=new X(new Et(ve.w,.06,ve.d),s);a.position.y=ve.h,a.castShadow=!0,a.receiveShadow=!0,n.add(a);for(let B of[-ve.w/2+.05,ve.w/2-.05]){let P=new X(new Et(.06,ve.h,ve.d-.04),r);P.position.set(B,ve.h/2,0),P.castShadow=!0,n.add(P)}let l=new X(new Et(ve.w-.1,.45,.03),r);l.position.set(0,ve.h-.28,ve.d/2-.06),l.castShadow=!0,n.add(l);let c=new zt;c.position.set(-.55,ve.h+.03,-.08),c.rotation.y=1.45;let f={canvas:document.createElement("canvas")};f.canvas.width=192,f.canvas.height=120,f.g=f.canvas.getContext("2d"),f.tex=new tn(f.canvas),f.tex.colorSpace=_e;let h=new X(new Et(.62,.4,.035),o);h.position.y=.33,h.castShadow=!0,c.add(h);let d=new X(new ie(.57,.35),new ne({map:f.tex,toneMapped:!1}));d.position.set(0,.33,.019),c.add(d);let p=new X(new Et(.05,.16,.04),o);p.position.set(0,.08,-.02),c.add(p);let g=new X(new Et(.22,.015,.16),o);g.position.y=.008,c.add(g),n.add(c);let v=new X(new Et(.42,.02,.13),Ot("#e4e4ea",.5));v.position.set(0,ve.h+.04,-.2),v.castShadow=!0,n.add(v);let m=new X(new Et(.06,.02,.09),Ot("#e4e4ea",.5));m.position.set(.32,ve.h+.04,-.2),n.add(m);let u=new X(new j(.045,.04,.1,12),Ot(e.shirt||"#c0504d",.5));u.position.set(.68,ve.h+.08,.05),u.castShadow=!0,n.add(u);let _=new X(new Et(.24,.02,.32),Ot("#f6f2e8",.9));if(_.position.set(.45,ve.h+.04,.12),_.rotation.y=.2,n.add(_),e.isManager){let B=new zt;B.position.set(.72,ve.h+.03,-.25),B.add(Object.assign(new X(new j(.07,.08,.02,12),o),{}));let P=new X(new j(.012,.012,.36,6),o);P.position.set(0,.18,0),P.rotation.z=.25,B.add(P);let V=new X(new Ye(.09,.12,12,1,!0),Ot("#e3c15a",.4));V.position.set(-.07,.36,0),V.rotation.z=.9,B.add(V),n.add(B);let z=new X(new j(.05,.03,.14,10),Ot("#e3c15a",.3,{metalness:.7}));z.position.set(.2,ve.h+.1,.25),n.add(z)}let x=new zt;x.position.set(0,0,sr);let M=Ot("#3d3c4c",.8),R=Ot("#4f4e63",.8),S=new X(new Et(.52,.08,.5),R);S.position.y=.46,S.castShadow=!0,x.add(S);let b=new X(new Et(.5,.58,.07),M);b.position.set(0,.82,-.26),b.rotation.x=-.08,b.castShadow=!0,x.add(b);let I=new X(new j(.03,.03,.36,8),o);I.position.y=.24,x.add(I);for(let B=0;B<5;B++){let P=new X(new Et(.04,.03,.3),o),V=B/5*Math.PI*2;P.position.set(Math.sin(V)*.14,.04,Math.cos(V)*.14),P.rotation.y=V,x.add(P)}n.add(x);let U=new X(new Nn(1.25,1.42,56),new ne({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.set(0,.012,-.3),n.add(U);let y=new X(new Et(ve.w+.3,1.7,ve.d+1.2),new ne({visible:!1}));y.position.set(0,.85,-.3),n.add(y),i.add(n);let E=(e.source||"sim").split("-")[0],N={group:n,ring:U,hit:y,screen:f,state:"idle",brand:lf[E]||lf.sim,model:e.model||""};return So(N,0,!0),N}function So(i,t,e){let{g:n,canvas:s,tex:r}=i.screen,o=s.width,a=s.height,l=i.state;if(!(l!=="working"&&!e&&i._drawn===l)){if(i._drawn=l,l==="working"){n.fillStyle="#14263a",n.fillRect(0,0,o,a);let c=Math.floor(t*22);for(let f=0;f<9;f++){let h=c+f,d=h*7%4*10,p=30+h*53%110;n.fillStyle=["#8cc8ff","#7fe0a8","#f6d36b","#c7a5ff"][h%4],n.fillRect(12+d,10+f*12,Math.min(p,o-30-d),5)}Math.floor(t*3)%2&&(n.fillStyle="#fff",n.fillRect(14,10+8*12,7,6))}else if(l==="error")n.fillStyle="#5a1f22",n.fillRect(0,0,o,a),n.fillStyle="#ff8a8a",n.font="bold 54px Segoe UI, Arial",n.textAlign="center",n.fillText("!",o/2,76),n.font="bold 15px Segoe UI, Arial",n.fillText("L\u1ED6I \u2013 xem nh\u1EADt k\xFD",o/2,104);else{let[c,f]=i.brand,h=n.createLinearGradient(0,0,o,a);h.addColorStop(0,"#1d2230"),h.addColorStop(1,"#2a2f40"),n.fillStyle=h,n.fillRect(0,0,o,a),n.fillStyle=c,n.font="bold 24px Segoe UI, Arial",n.textAlign="center",n.fillText(f,o/2,62),i.model&&(n.fillStyle="#aab0c0",n.font="14px Segoe UI, Arial",n.fillText(i.model.slice(0,22),o/2,86)),n.fillStyle=c,n.globalAlpha=.5,n.fillRect(o/2-30,96,60,3),n.globalAlpha=1}r.needsUpdate=!0}}var fn=(i,t,e,n,s=1,r=1,o=1)=>{let a=i.clone();return a.scale(s,r,o),a.translate(t,e,n),a},cy=i=>{for(let t of Object.keys(i.attributes))t!=="position"&&t!=="normal"&&i.deleteAttribute(t);return i.index?i.toNonIndexed():i},or=i=>pi(i.map(cy),!1);function hy(){let i=new Oe(.19,.2,2,8),t=new Oe(.062,.22,2,6),e=new Oe(.078,.25,2,6),n=new Tt(.25,12,9),s=new Tt(.068,6,4),r=new Tt(.268,12,6,0,Math.PI*2,0,Math.PI*.52),o=new Tt(.036,6,4);return{shirt:or([fn(i,0,.68,0,1,1,.78),fn(t,-.255,.71,0),fn(t,.255,.71,0)]),pants:or([fn(e,-.095,.22,0),fn(e,.095,.22,0),fn(new j(.185,.185,.05,8),0,.47,0,1,1,.8)]),skin:or([fn(n,0,1.19,0),fn(s,-.255,.51,0),fn(s,.255,.51,0),fn(new j(.07,.08,.1,6),0,.97,0)]),hair:or([fn(r,0,1.2,-.01)]),eyes:or([fn(o,-.09,1.21,.225,1,1.3,.6),fn(o,.09,1.21,.225,1,1.3,.6)])}}var bo=class{constructor(t,{cap:e=256,blobGeo:n,blobMat:s}={}){this.cap=e,this.n=0;let r=hy(),o=(l,c,f)=>{let h=new ci(l,c,e);return h.count=0,h.frustumCulled=!1,h.castShadow=!1,h.receiveShadow=!1,f&&h.setColorAt(0,new Zt("#ffffff")),h.instanceMatrix.setUsage(kh),t.add(h),h},a=l=>new Kt({color:"#ffffff",roughness:l,metalness:0});this.parts={shirt:o(r.shirt,a(.8),!0),pants:o(r.pants,a(.85),!0),skin:o(r.skin,a(.6),!0),hair:o(r.hair,a(.9),!0),eyes:o(r.eyes,new Kt({color:"#1f1a17",roughness:.4}),!1)},this.blob=n&&s?o(n,s,!1):null,this.blob&&(this.blob.renderOrder=1),this.m=new re,this.legM=new re,this.t=new re,this.q=new mn,this.e=new gn(0,0,0,"YXZ"),this.v=new L,this.s=new L(1,1,1),this.blobM=new re}begin(){this.n=0}add(t,e,n,s,r,{seated:o=!1,bob:a=0,wig:l=0,lean:c=0,turn:f=0}={}){if(this.n>=this.cap)return!1;let h=this.n++;this.e.set(c,r+f,l),this.q.setFromEuler(this.e),this.v.set(e,n+a,s),this.m.compose(this.v,this.q,this.s);let d=this.parts,p=t.mats;return d.shirt.setMatrixAt(h,this.m),d.skin.setMatrixAt(h,this.m),d.hair.setMatrixAt(h,this.m),d.eyes.setMatrixAt(h,this.m),o?(this.legM.makeTranslation(0,.42,0).multiply(this.t.makeRotationX(-1.45)).multiply(this.t.makeTranslation(0,-.42,0)),d.pants.setMatrixAt(h,this.t.multiplyMatrices(this.m,this.legM))):d.pants.setMatrixAt(h,this.m),d.shirt.setColorAt(h,p.shirt.color),d.pants.setColorAt(h,p.pants.color),d.skin.setColorAt(h,p.skin.color),d.hair.setColorAt(h,p.hair.color),this.blob&&!o&&(this.blobM.makeRotationX(-Math.PI/2).setPosition(e,.012,s),this.blob.setMatrixAt(this.blobN=this.blobN||0,this.blobM),this.blobN++),!0}end(){for(let t of Object.values(this.parts))t.count=this.n,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0);this.blob&&(this.blob.count=this.blobN||0,this.blob.instanceMatrix.needsUpdate=!0,this.blobN=0)}};var ar=new L;function xn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ar.copy(t),ar[n]=0,ar.normalize();let c=.5*o/(o+a),f=1-ar.angleTo(i)/l;return Math.sign(ar[e])===1?f*c:a/(o+a)+c+c*(1-f)}var lr=class extends Et{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,g=new L,v=.5/s;for(let m=0,u=0;m<f.length;m+=3,u+=2)switch(a.fromArray(f,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),f[m+0]=c.x*Math.sign(a.x)+l.x*r,f[m+1]=c.y*Math.sign(a.y)+l.y*r,f[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[u+0]=xn(g,l,"z","y",r,n),d[u+1]=1-xn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-xn(g,l,"z","y",r,n),d[u+1]=1-xn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-xn(g,l,"x","z",r,t),d[u+1]=xn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-xn(g,l,"x","z",r,t),d[u+1]=1-xn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-xn(g,l,"x","y",r,t),d[u+1]=1-xn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=xn(g,l,"x","y",r,t),d[u+1]=1-xn(g,l,"y","x",r,e);break}}};var dt={minX:-14,maxX:26,minZ:-10,maxZ:18,wallH:3.6,inZ:10},Ro=-9.6,ac=3,fy=[{x:18.6,z:-4.4},{x:23,z:-4.4}],Ss={w:1.25,l:2.5},ic=new Map,D=(i,t=.75,e={})=>{let n=JSON.stringify([i,t,e.metalness||0,e.emissive||"",e.emissiveIntensity||0,e.side||0,!!e.flatShading]);return ic.has(n)||ic.set(n,new Kt({color:i,roughness:t,metalness:0,...e})),ic.get(n)},Ie=(i,t=1.6)=>D(i,.4,{emissive:i,emissiveIntensity:t});function Ue(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new tn(n);return s.colorSpace=_e,s.anisotropy=8,s}function en(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function uy(){let i=en(21),t=Ue(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*360);for(;a<n;){let l=260+Math.floor(i()*260),c=i();e.fillStyle=`rgb(${Math.round(232+c*12)},${Math.round(208+c*12)},${Math.round(170+c*14)})`,e.fillRect(a,o,l,64),e.strokeStyle="rgba(165,120,75,.10)",e.lineWidth=1.2;for(let f=0;f<4;f++){let h=o+8+i()*48;e.beginPath(),e.moveTo(a,h);for(let d=a;d<a+l;d+=40)e.lineTo(d,h+Math.sin(d*.02+f)*2.5);e.stroke()}e.fillStyle="rgba(140,100,60,.22)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(140,100,60,.25)",e.fillRect(0,o,n,2)}});return t.wrapS=t.wrapT=Tn,t.repeat.set(4,2.9),t}function sc(i,t,e){return Ue(512,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),n.strokeStyle=t,n.lineWidth=22,n.strokeRect(26,26,s-52,r-52),n.lineWidth=4,n.strokeRect(54,54,s-108,r-108),n.fillStyle=e;for(let o=100;o<r-90;o+=44)for(let a=100+o/44%2*22;a<s-90;a+=44)n.beginPath(),n.arc(a,o,5,0,7),n.fill()})}function dy(){return Ue(1024,576,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#141a33"),n.addColorStop(1,"#2a1f45"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.06)";for(let s=0;s<9;s++)i.beginPath(),i.arc(120+s*110,470-s%3*30,60+s%4*14,0,Math.PI*2),i.fill();i.textAlign="center",i.fillStyle="#ffffff",i.font="900 86px Nunito, sans-serif",i.fillText("\u{1F3AC} SIMI CINEMA",t/2,e/2-20),i.font="700 34px Nunito, sans-serif",i.fillStyle="rgba(255,255,255,.75)",i.fillText('B\u1EA5m "\u{1F3AC} M\xE0n chi\u1EBFu" v\xE0 d\xE1n link YouTube',t/2,e/2+50),i.fillText("\u0111\u1EC3 c\u1EA3 qu\xE1n c\xF9ng xem",t/2,e/2+95)})}function py(){return Ue(512,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7fbcf2"),n.addColorStop(.65,"#cfe6fb"),n.addColorStop(1,"#f5efe2"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.85)";for(let[r,o,a]of[[120,120,40],[170,110,52],[220,128,36],[360,220,30],[400,210,42]])i.beginPath(),i.arc(r,o,a,0,7),i.fill();let s=en(9);for(let r=0;r<t;r+=46+s()*30){let o=120+s()*220,a=40+s()*40;i.fillStyle=`rgba(${90+s()*40},${120+s()*40},${160+s()*40},.55)`,i.fillRect(r,e-o,a,o),i.fillStyle="rgba(255,255,255,.45)";for(let l=e-o+12;l<e-10;l+=18)for(let c=r+6;c<r+a-6;c+=12)i.fillRect(c,l,5,8)}})}function my(){return Ue(1024,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.font='900 118px "Nunito", "Segoe UI", sans-serif',i.textAlign="center",i.textBaseline="middle";for(let[n,s]of[[38,"#2f8cf0"],[18,"#7cc4ff"],[0,"#ffffff"]])i.shadowColor="#2f8cf0",i.shadowBlur=n,i.fillStyle=s,i.fillText("SIMI BAR",t/2-110,e/2+4);i.font='italic 900 92px "Nunito", "Segoe UI", sans-serif';for(let[n,s]of[[34,"#ff4fa3"],[14,"#ff9ccf"],[0,"#fff3fa"]])i.shadowColor="#ff4fa3",i.shadowBlur=n,i.fillStyle=s,i.fillText("chill",t/2+300,e/2+10)})}function gy(){return Ue(512,640,(i,t,e)=>{i.fillStyle="#26332e",i.fillRect(0,0,t,e),i.fillStyle="#f7f3e8",i.textAlign="center",i.font='900 64px "Nunito", "Segoe UI", sans-serif',i.fillText("MENU",t/2,92),i.font='700 34px "Nunito", "Segoe UI", sans-serif',i.textAlign="left",[["C\xE0 ph\xEA s\u1EEFa \u0111\xE1","25k"],["Tr\xE0 \u0111\xE0o cam s\u1EA3","35k"],["Matcha latte","39k"],["Soda chanh d\xE2y","32k"],["B\xE1nh m\xEC AI \u2728","20k"]].forEach(([n,s],r)=>{i.fillStyle="#f7f3e8",i.fillText(n,46,190+r*82),i.fillStyle="#ffd26a",i.textAlign="right",i.fillText(s,t-46,190+r*82),i.textAlign="left"}),i.strokeStyle="rgba(247,243,232,.5)",i.lineWidth=3,i.strokeRect(18,18,t-36,e-36)})}var To=null;function yy(){return To||(To=Ue(256,256,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(.45,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),To)}function un(i,t,e,n,s,r=.35){let o=new X(new ie(n*2,n*2),new ne({map:yy(),color:s,transparent:!0,opacity:r,depthWrite:!1,blending:Xr,toneMapped:!1}));return o.rotation.x=-Math.PI/2,o.position.set(t,.015,e),o.renderOrder=2,i.add(o),o}function df(i,t){new ds().load((globalThis.VP_ASSET_BASE||"")+i,e=>{e.colorSpace=_e,e.anisotropy=8,t(e)},void 0,()=>{})}function mf(i){let t={animated:[],seats:[],obstacles:[],seatMeshes:[],clickables:[]},e=[],n=(H,K,gt,Pt,_t,Yt=i,{cast:Nt=!0,receive:se=!0}={})=>{let F=new X(H,K);return F.position.set(gt,Pt,_t),F.castShadow=Nt,F.receiveShadow=se,Yt.add(F),e.push(F),F},s=(H,K,gt,Pt=0)=>Pt>0?new lr(H,K,gt,2,Math.min(Pt,H/2-.001,K/2-.001,gt/2-.001)):new Et(H,K,gt),r=(H,K,gt,Pt)=>t.obstacles.push([Math.min(H,gt),Math.min(K,Pt),Math.max(H,gt),Math.max(K,Pt)]),o=dt.maxX-dt.minX,a=dt.maxZ-dt.minZ,l=(dt.minX+dt.maxX)/2,c=(dt.minZ+dt.maxZ)/2,f=dt.inZ-dt.minZ,h=(dt.minZ+dt.inZ)/2,d={cast:!1};n(s(o+.7,.5,a+.7,.12),D("#e8dfd1",.85),l,-.26,c,i,{cast:!1,receive:!0}),n(s(o+.75,.08,a+.75,.03),D("#d3c4ae",.8),l,-.47,c,i,d);let p=uy();p.repeat.set(4*o/28,2.9*f/20);let g=new X(new ie(o,f),new Kt({color:"#ffffff",roughness:.62,map:p}));g.rotation.x=-Math.PI/2,g.position.set(l,.001,h),g.receiveShadow=!0,i.add(g),t.floor=g;let v=D("#f6f0e6",.95),m=D("#e3d5bf",.8),u=D("#b98d5e",.5),_=D("#9b7048",.6);n(s(o+.2,dt.wallH,.22),v,l,dt.wallH/2,dt.minZ-.11,i,d),n(s(.22,dt.wallH,f),v,dt.minX-.11,dt.wallH/2,h,i,d),n(s(o,1,.05),m,l,.5,dt.minZ+.025,i,d),n(s(.05,1,f),m,dt.minX+.025,.5,h,i,d),n(s(o,.06,.09),u,l,1.02,dt.minZ+.045,i,d),n(s(.09,.06,f),u,dt.minX+.045,1.02,h,i,d),n(s(o-.02,.12,.07),_,l,.06,dt.minZ+.035,i,d),n(s(.07,.12,f-.02),_,dt.minX+.035,.06,h,i,d),n(s(o+.22,.12,.3,.03),D("#ffffff",.6),l,dt.wallH+.06,dt.minZ-.08,i,d),n(s(.3,.12,f,.03),D("#ffffff",.6),dt.minX-.08,dt.wallH+.06,h,i,d),n(s(.34,dt.wallH+.12,.34,.04),D("#ffffff",.6),dt.minX-.15,(dt.wallH+.12)/2,dt.inZ,i,d);for(let H=dt.minX+.6;H<dt.maxX;H+=.6)n(s(.02,.83,.02),u,H,.545,dt.minZ+.06,i,d);for(let H=dt.minZ+.6;H<dt.inZ-.2;H+=.6)n(s(.02,.83,.02),u,dt.minX+.06,.545,H,i,d);let x=Ro-2.4,M=Ro+2.4,R=-8.1,S=(x+M)/2;n(s(M-x+1.6,dt.wallH-.02,.07),D("#1d2b4f",.9),S,dt.wallH/2,dt.minZ+.02,i,d),n(s(M-x,1.05,.72,.06),D("#8a5a3b",.55),S,.525,R);for(let H=x+.25;H<M-.1;H+=.28)n(s(.12,.86,.04,.015),D("#a8724c",.5),H,.53,R+.37,i,d);n(s(M-x+.24,.07,.92,.03),D("#f6f3ee",.22,{metalness:.05}),S,1.09,R+.05),n(s(M-x,.04,.04),Ie("#4aa8ff",2.4),S,.1,R+.39,i,d),n(s(M-x,.03,.4),D("#b9c2cf",.3,{metalness:.6}),S,.06,R+.6,i,d),r(x-.1,R-.5,M+.1,R+.45),r(x-.1,dt.minZ,M+.1,R);let b=en(5),I=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#ff9a52","#c3a6ff","#ff5a5f","#9fd6ff"],U=new j(.05,.06,1,12),y=new j(.018,.022,.08,8);for(let H=0;H<3;H++){let K=1.45+H*.55;n(s(M-x-.4,.05,.34,.015),D("#c79a6a",.5),S,K,dt.minZ+.22,i,d),n(s(M-x-.4,.035,.03),Ie("#ffd8a0",1),S,K-.04,dt.minZ+.37,i,d);for(let gt=x+.2;gt<M-.3;gt+=.32+b()*.2){let Pt=I[Math.floor(b()*I.length)],_t=.22+b()*.14,Yt=n(U,D(Pt,.18,{emissive:Pt,emissiveIntensity:.25}),gt,K+_t/2+.03,dt.minZ+.22,i,d);Yt.scale.y=_t,n(y,D("#2b2b33"),gt,K+_t+.07,dt.minZ+.22,i,d)}}let E=new X(new ie(4.6,1.15),new ne({map:my(),transparent:!0,toneMapped:!1,depthWrite:!1}));E.position.set(S,3.12,dt.minZ+.06),i.add(E),E.material.opacity=.95;let N=new Kt({color:"#e6f6ff",roughness:.05,transparent:!0,opacity:.55});for(let H=0;H<3;H++)n(new j(.05,.04,.13,12),N,x+1.2+H*1.2,1.19,R-.1,i,d);n(s(.55,.48,.38,.05),D("#cfd6df",.25,{metalness:.65}),M-.8,1.37,R-.1),n(s(.3,.06,.2,.02),D("#2b2b33",.4),M-.8,1.64,R-.1,i,d),n(new j(.1,.08,.14,14),D("#ffffff",.5),x+.5,1.2,R-.15,i,d),n(new Ke(.13,1),D("#5fb36f",.8,{flatShading:!0}),x+.5,1.36,R-.15,i,d);let B=new X(new ie(1.1,1.38),new Kt({map:gy(),roughness:.9}));B.position.set(M+2.2,2,dt.minZ+.05),i.add(B),n(s(1.24,1.52,.05,.02),D("#8a5a3b",.5),M+2.2,2,dt.minZ+.02,i,d);let P=D("#c2cad6",.25,{metalness:.7}),V=[D("#2f8cf0",.55),D("#ff7a6b",.55)],z=new j(.21,.21,.1,22),nt=0;for(let H=x+.6;H<=M-.5;H+=1.05){let K=R+.85,gt=new zt;gt.position.set(H,0,K),i.add(gt),n(z,V[nt%2],0,.75,0,gt),n(new j(.035,.035,.7,10),P,0,.36,0,gt),n(new j(.19,.22,.03,20),P,0,.015,0,gt),n(new Pe(.16,.014,8,20),P,0,.3,0,gt,d).rotation.x=Math.PI/2,Jt(`b${++nt}`,H,K,Math.PI,.78,{x:H,z:K+.55})}let $=D("#fbf7f0",.35),J=D("#b8875a",.5);Ey({scene:i,add:n,box:s,block:r,seat:Jt,out:t});let ot=[D("#8fc9b0",.85),D("#a99be0",.85),D("#8cc3f5",.85)],ct=[D("#ffd34d",.8),D("#ff9a6b",.8),D("#ffffff",.8)],bt=[sc("#f3ead9","#8fc9b0","rgba(143,201,176,.5)"),sc("#efe9f8","#a99be0","rgba(169,155,224,.5)"),sc("#eaf3fc","#8cc3f5","rgba(140,195,245,.5)")];[[-10.2,-.6],[-10.2,4]].forEach(([H,K],gt)=>{let Pt=ot[gt],_t=new zt;_t.position.set(H-2.6,0,K),i.add(_t),n(s(.92,.3,2.6,.08),Pt,0,.27,0,_t),n(s(.8,.14,2.3,.07),Pt,.05,.47,0,_t),n(s(.26,.72,2.6,.1),Pt,-.34,.6,0,_t);for(let Nt of[-1,1])n(s(.92,.55,.22,.09),Pt,0,.42,Nt*1.25,_t);for(let[Nt,se]of[[-.75,.2],[.75,-.2]])n(s(.14,.34,.34,.07),ct[gt],-.13,.66,Nt,_t).rotation.set(se,0,.22);for(let[Nt,se]of[[-.35,-1.2],[.35,-1.2],[-.35,1.2],[.35,1.2]])n(new j(.03,.02,.12,8),J,Nt,.06,se,_t,d);r(H-3.1,K-1.4,H-2.1,K+1.4),n(new j(.55,.55,.06,32),D("#c79a6a",.45),H-.4,.38,K),n(new j(.08,.12,.34,12),D("#9b7048",.5),H-.4,.18,K),n(new j(.06,.06,.08,12),Ie("#ffb35c",.9),H-.4,.45,K+.2,i,d),n(new j(.05,.04,.12,12),N,H-.55,.47,K-.2,i,d),r(H-.95,K-.6,H+.15,K+.6);for(let Nt=-1;Nt<=1;Nt++)Jt(`s${gt+1}${Nt+2}`,H-2.5,K+Nt*.8,Math.PI/2,.44,{x:H-1.75,z:K+Nt*.8});let Yt=new X(new ie(3.4,3.2),new Kt({map:bt[gt],roughness:.95}));Yt.rotation.x=-Math.PI/2,Yt.position.set(H-1,.006,K),Yt.receiveShadow=!0,i.add(Yt),un(i,H-1.2,K,2,"#ffd9a8",.18)});for(let[H,K]of[[-13.2,-8.4],[-13.2,6.4]])n(new j(.16,.2,.04,18),D("#3a3a44",.4),H,.02,K),n(new j(.02,.02,1.6,8),D("#3a3a44",.4),H,.82,K),n(new j(.2,.28,.34,20,1,!0),D("#fff1d6",.6,{side:ye,emissive:"#ffd9a0",emissiveIntensity:.7}),H,1.72,K,i,d),un(i,H+.4,K,1.4,"#ffd9a8",.25);let It=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#c3a6ff"].map(H=>new Zt(H)),et=new Zt("#2a3150"),ht=new ci(s(.94,.05,.94,.02),new ne({toneMapped:!1}),30),xt=new re,yt=new Zt;for(let H=0;H<6;H++)for(let K=0;K<5;K++)xt.makeTranslation(-4.5+H,.025,2.5+K),ht.setMatrixAt(H*5+K,xt),ht.setColorAt(H*5+K,et);ht.receiveShadow=!0,i.add(ht),n(s(6.2,.04,5.2,.02),D("#c2cad6",.3,{metalness:.6}),-2,.012,4.5,i,d),t.animated.push(H=>{for(let K=0;K<30;K++){let gt=.5+.5*Math.sin(H*.6+K*1.7);yt.copy(et).lerp(It[(Math.floor(K/5)+K)%5],.4+.3*gt),ht.setColorAt(K,yt)}ht.instanceColor.needsUpdate=!0});let Ut=new X(new Ke(.35,1),new Kt({color:"#eef3fa",roughness:.1,metalness:.9,flatShading:!0}));Ut.position.set(-2,3,5),Ut.castShadow=!0,i.add(Ut),n(new j(.01,.01,.6,4),D("#888"),-2,3.45,5,i,d),t.animated.push(H=>{Ut.rotation.y=H*.8});let Gt=un(i,-2,4,1.4,"#ff6fb5",.4),Xt=un(i,-2,6,1.4,"#4aa8ff",.4);t.animated.push(H=>{Gt.position.set(-2+Math.sin(H*.5)*2.2,.06,4.5+Math.cos(H*.5)*1.6),Xt.position.set(-2+Math.sin(H*.5+Math.PI)*2.2,.06,4.5+Math.cos(H*.5+Math.PI)*1.6)}),n(s(2.2,.95,.8,.06),D("#24304f",.4),-11.5,.475,8.3),n(s(2.2,.05,.05),Ie("#ff6fb5",2),-11.5,.9,7.88,i,d),n(s(2.1,.05,.72,.02),D("#3a3a44",.4),-11.5,.97,8.3);for(let H of[-.5,.5])n(new j(.22,.22,.04,24),D("#16161c",.2),-11.5+H,1.02,8.3,i,d);n(s(.4,.04,.3,.01),Ie("#4aa8ff",1.2),-11.5,1.01,8.3,i,d);for(let H of[-13,-10])n(s(.7,1.6,.6,.06),D("#24304f",.5),H,.8,9.2),n(new j(.22,.22,.02,24),D("#3a3a44",.3),H,1.05,8.89,i,d).rotation.x=Math.PI/2,n(new j(.12,.12,.02,20),D("#3a3a44",.3),H,.5,8.89,i,d).rotation.x=Math.PI/2;r(-13.4,7.85,-9.6,9.6),[[.6,-3.4],[3,-2.6]].forEach(([H,K],gt)=>{n(new j(.42,.42,.05,28),$,H,1.08,K),n(new j(.04,.05,1.06,10),D("#3a3a44",.4),H,.53,K),n(new j(.26,.3,.03,20),D("#3a3a44",.4),H,.015,K),n(new j(.05,.04,.13,12),N,H+.12,1.17,K-.05,i,d),n(new Tt(.06,10,8),D(["#ff7aa8","#ffd34d"][gt],.7),H-.12,1.15,K+.06,i,d),r(H-.45,K-.45,H+.45,K+.45)});let ee=py();for(let H of[-7.6,8.4]){let K=new X(new ie(1.7,1.6),new ne({map:ee,toneMapped:!1}));K.position.set(dt.minX+.03,2.15,H),K.rotation.y=Math.PI/2,i.add(K),n(s(.08,1.8,1.9,.02),D("#ffffff",.5),dt.minX+.02,2.15,H,i,d),n(s(.1,.05,1.7),D("#ffffff",.5),dt.minX+.06,2.15,H,i,d),n(s(.1,1.6,.05),D("#ffffff",.5),dt.minX+.06,2.15,H,i,d),n(s(.22,.06,1.95,.02),D("#ffffff",.5),dt.minX+.1,1.32,H,i,d)}wy({scene:i,add:n,box:s,block:r,seat:Jt,out:t}),Ty({scene:i,add:n,box:s,block:r,out:t}),Ay({scene:i,add:n,box:s,block:r,out:t});let ut=[D("#f6f1e8",.6),D("#d98b5f",.75)],C=[D("#5fb36f",.85,{flatShading:!0}),D("#3f9a5a",.85,{flatShading:!0})],wt=new Ke(1,1);[[-13.3,-9.3],[-13.3,9.3],[-6,-9.3],[-13.3,-3.6],[14.3,9.2],[25.5,6.8]].forEach(([H,K],gt)=>{n(new j(.26,.19,.5,18),ut[gt%2],H,.25,K),n(new j(.24,.24,.03,18),D("#6b4a32",.9),H,.49,K,i,d);let Pt=en(30+gt);for(let _t=0;_t<5;_t++)n(wt,C[_t%2],H+(Pt()-.5)*.3,.8+Pt()*.55,K+(Pt()-.5)*.3).scale.setScalar(.2+Pt()*.12);r(H-.35,K-.35,H+.35,K+.35)});for(let H=x+1;H<M;H+=2.4)n(new j(.015,.015,1.1,8),D("#7c818d"),H,dt.wallH-.55,R+.1,i,d),n(new Ye(.2,.22,20,1,!0),D("#c99a5b",.4,{side:ye}),H,dt.wallH-1.15,R+.1,i,d),n(new Tt(.07,12,8),Ie("#ffd28a",3),H,dt.wallH-1.23,R+.1,i,d),un(i,H,R+.9,1.25,"#ffd9a0",.32);let q=["#ffd28a","#ff9ccf","#9fd0ff","#b6f5d8"].map(H=>new Zt(H)),Y=96,ft=new ci(new Tt(.035,8,6),new ne({toneMapped:!1}),Y),mt=new re;for(let H=0;H<Y;H++){let K=H/(Y-1),gt=K<.6,Pt=gt?dt.maxX-.4-K/.6*(o-.8):dt.minX+.1,_t=gt?dt.minZ+.1:dt.minZ+.4+(K-.6)/.4*(f-.8),Yt=dt.wallH-.25-Math.abs(Math.sin(H*.55))*.22;mt.makeTranslation(Pt,Yt,_t),ft.setMatrixAt(H,mt),ft.setColorAt(H,q[H%4])}i.add(ft);let pt=new ne({color:"#ffffff",toneMapped:!1}),A=new X(new ie(2.4,3.2),pt);A.position.set(dt.minX+.075,2,-3.6),A.rotation.y=Math.PI/2,i.add(A),n(s(.06,3.36,2.56,.03),D("#1d2b4f",.4),dt.minX+.03,2,-3.6,i,d),df("brand/simi-banner.jpg",H=>{pt.map=H,pt.needsUpdate=!0});let w=(H,K,gt,Pt,_t,Yt,Nt,se)=>{let F=new zt;F.position.set(_t,Yt,Nt),F.rotation.y=se,i.add(F),n(s(K+.18,gt+.18,.05,.03),D(Pt,.5),0,0,0,F,d);let Rt=new X(new ie(K,gt),new ne({transparent:!0,opacity:0,toneMapped:!1}));Rt.position.z=.03,F.add(Rt),df(H,st=>{Rt.material.map=st,Rt.material.opacity=1,Rt.material.needsUpdate=!0})};w("brand/uniq.png",1.6,.57,"#142c5a",dt.minX+.05,2.4,1.6,Math.PI/2),w("brand/crenot.png",1.8,.44,"#ffffff",dt.minX+.05,2.4,6,Math.PI/2),w("brand/simi.png",1.3,.39,"#0a78f0",dt.minX+.05,2.4,-.8,Math.PI/2);let O=4.8,rt=2.7,at=ac,it=1.95,Lt=dt.minZ+.17;n(s(O+.3,rt+.3,.08,.04),D("#16161c",.35),at,it,dt.minZ+.12,i,d),n(s(O+.6,.08,.3,.03),D("#2b2b33",.4),at,it-rt/2-.22,dt.minZ+.2,i,d);for(let H of[-1,1])n(s(.42,1,.36,.05),D("#22222a",.5),at+H*(O/2+.55),.5,dt.minZ+.3);for(let H of[-1,1])for(let K of[.72,.3])n(new j(K>.5?.08:.13,K>.5?.08:.13,.02,20),D("#3a3a44",.3),at+H*(O/2+.55),K,dt.minZ+.49,i,d).rotation.x=Math.PI/2;r(at-O/2-.8,dt.minZ,at-O/2-.3,dt.minZ+.5),r(at+O/2+.3,dt.minZ,at+O/2+.8,dt.minZ+.5);let vt=new X(new ie(O,rt),new ne({map:dy(),toneMapped:!1}));vt.position.set(at,it,Lt),i.add(vt);let At=new X(new ie(O,rt),new ne({color:0,opacity:0,blending:Ln,toneMapped:!1}));At.position.set(at,it,Lt+.002),At.visible=!1,i.add(At),At.userData.cinema=!0,vt.userData.cinema=!0,t.cinema={x:at,y:it,z:Lt+.004,w:O,h:rt,idle:vt,hole:At},Dy({scene:i,add:n,box:s,block:r,seat:Jt,out:t,statics:e,flat:d,glassM:N}),Hy({scene:i,add:n,box:s,block:r,seat:Jt,out:t,flat:d,glassM:N,tableTop:$});function Jt(H,K,gt,Pt,_t,Yt,Nt,se){t.seats.push({id:H,x:K,z:gt,face:Pt,h:_t,approach:Yt,kind:Nt,...se?{theme:se}:{}});let F=new X(new j(.32,.32,_t+.1,10),new ne({visible:!1}));F.position.set(K,(_t+.1)/2,gt),F.userData.seatId=H,i.add(F),t.seatMeshes.push(F)}return xy(i,e),t.spawn={minX:8,maxX:16,minZ:13,maxZ:16.5},t}function xy(i,t){i.updateMatrixWorld(!0);let e=new Map;for(let n of t){let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(let o of Object.keys(s.attributes))["position","normal","uv"].includes(o)||s.deleteAttribute(o);s.attributes.uv||s.setAttribute("uv",new le(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld);let r=`${n.material.uuid}|${n.castShadow}|${n.receiveShadow}`;e.has(r)||e.set(r,{mat:n.material,cast:n.castShadow,receive:n.receiveShadow,geos:[]}),e.get(r).geos.push(s),n.parent.remove(n)}for(let{mat:n,cast:s,receive:r,geos:o}of e.values()){let a=pi(o,!1);if(!a)continue;let l=new X(a,n);l.castShadow=s,l.receiveShadow=r,l.matrixAutoUpdate=!1,i.add(l)}for(let n of[...i.children])n.isGroup&&n.children.length===0&&i.remove(n)}var ce={cx:8,cz:.6,r:1.75,x1:4.9,x2:13.1,z1:-2.3,z2:3.5,gx1:5.4,gx2:10.6,gz1:5.2,gz2:8.4};function _y(){return Ue(256,512,(i,t,e)=>{let n=en(7);i.fillStyle="#d5d3a2",i.fillRect(0,0,t,e);for(let s=0;s<e;s+=4){let r=n();i.fillStyle=`rgba(${150+r*40},${150+r*30},${80+r*20},.18)`,i.fillRect(0,s,t,2)}i.fillStyle="#2f3b2c",i.fillRect(0,0,14,e),i.fillRect(t-14,0,14,e),i.fillStyle="rgba(255,255,255,.12)",i.fillRect(14,0,2,e),i.fillRect(t-16,0,2,e),i.fillStyle="rgba(90,80,40,.35)",i.fillRect(0,0,t,2),i.fillRect(0,e-2,t,2)})}function vy(i){let n=1040/(ce.gx2-ce.gx1),s=640/(ce.gz2-ce.gz1);return Ue(1040,640,r=>{r.fillStyle="#ece5d3",r.fillRect(0,0,1040,640);let o=a=>{r.lineWidth=3,r.strokeStyle="rgba(150,135,105,.38)",a(0),r.lineWidth=2,r.strokeStyle="rgba(255,255,255,.75)",a(3)};o(a=>{for(let l=14;l<640;l+=18)r.beginPath(),r.moveTo(0,l+a),r.lineTo(1040,l+a),r.stroke()});for(let[a,l,c]of i){let f=(a-ce.gx1)*n,h=(l-ce.gz1)*s,d=c*n;r.fillStyle="#ece5d3",r.beginPath(),r.arc(f,h,d+6*18,0,Math.PI*2),r.fill(),o(p=>{for(let g=1;g<=6;g++)r.beginPath(),r.arc(f,h,d+g*18+p,0,Math.PI*2),r.stroke()})}})}function My(){return Ue(768,240,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#5b3a22"),n.addColorStop(1,"#3e2615"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=2;for(let s=12;s<e;s+=17)i.beginPath(),i.moveTo(0,s),i.bezierCurveTo(t*.3,s+6,t*.6,s-6,t,s+3),i.stroke();i.strokeStyle="#d9b46a",i.lineWidth=5,i.strokeRect(12,12,t-24,e-24),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f3d58c",i.font='bold 74px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("THI\u1EC0N \xB7 D\u01AF\u1EE0NG SINH".normalize("NFC"),t/2,e*.42),i.fillStyle="#ead9b0",i.font='600 34px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("T\u0129nh t\xE2m \xB7 H\xEDt th\u1EDF \xB7 An nhi\xEAn".normalize("NFC"),t/2,e*.76)})}function Ey({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},{cx:a,cz:l}=ce,c=D("#6b4528",.6),f=D("#a77b4f",.6),h=D("#a9a59b",.95,{flatShading:!0}),d=ce.x2-ce.x1,p=ce.z2-ce.z1,g=(ce.x1+ce.x2)/2,v=(ce.z1+ce.z2)/2;t(e(d+.2,.03,p+.2,.01),c,g,.015,v,i,o);let m=_y();m.wrapS=m.wrapT=Tn,m.repeat.set(d/.9,p/1.8);let u=new X(new ie(d,p),new Kt({map:m,roughness:.9}));u.rotation.x=-Math.PI/2,u.position.set(g,.032,v),u.receiveShadow=!0,i.add(u);let _=[D("#34446e",.95),D("#6d3b30",.95)],x=[D("#d98a2b",.9),D("#46598a",.9)],M=e(.74,.04,.74,.015),R=new j(.22,.24,.14,22);for(let q=0;q<8;q++){let Y=q/8*Math.PI*2,ft=a+Math.sin(Y)*ce.r,mt=l+Math.cos(Y)*ce.r,pt=new zt;pt.position.set(ft,0,mt),pt.rotation.y=Y,i.add(pt),t(M,_[q%2],0,.052,.1,pt,o),t(R,x[q%2],0,.142,.05,pt),t(new Pe(.23,.012,6,22),D("#f1e3c2",.8),0,.142,.05,pt,o).rotation.x=Math.PI/2,s(`z${q+1}`,ft+Math.sin(Y)*.05,mt+Math.cos(Y)*.05,Y+Math.PI,.21,{x:a+Math.sin(Y)*(ce.r+.8),z:l+Math.cos(Y)*(ce.r+.8)},"zen")}t(new j(.5,.5,.05,32),D("#5a2219",.32),a,.3,l),t(new j(.51,.51,.015,32),D("#c9a14a",.4,{metalness:.5}),a,.27,l,i,o);for(let q=0;q<4;q++){let Y=q*Math.PI/2+Math.PI/4;t(e(.06,.26,.06,.01),D("#3c1610",.4),a+Math.sin(Y)*.36,.14,l+Math.cos(Y)*.36)}let S=D("#9a7432",.35,{metalness:.7});t(new j(.11,.09,.1,18),S,a,.38,l),t(new Pe(.11,.015,6,18),S,a,.43,l,i,o).rotation.x=Math.PI/2;for(let q of[-.03,0,.03])t(new j(.004,.004,.2,4),D("#7a3b22",.8),a+q,.53,l,i,o);for(let q of[-.03,0,.03])t(new Tt(.01,6,4),Ie("#ff6a2a",3),a+q,.635,l,i,o);t(new j(.06,.08,.16,14),D("#e9eef2",.25),a-.27,.41,l+.12,i,o);for(let q=0;q<6;q++){let Y=q*Math.PI/3;t(new Tt(.05,8,6),D("#f39bb8",.7),a-.27+Math.sin(Y)*.05,.52,l+.12+Math.cos(Y)*.05,i,o).scale.set(.7,1.3,.7)}t(new Tt(.035,8,6),D("#ffd84d",.6),a-.27,.53,l+.12,i,o),t(new j(.035,.035,.09,12),D("#fff6e4",.6),a+.25,.37,l-.15,i,o),t(new Tt(.018,8,6),Ie("#ffcf6a",3),a+.25,.435,l-.15,i,o).scale.set(1,1.6,1),t(new j(.11,.11,.05,16),D("#6d3b30",.9),a+.2,.355,l+.22,i,o),t(new Tt(.1,18,8,0,Math.PI*2,Math.PI/2,Math.PI/2),D("#c79b3c",.3,{metalness:.8,side:ye}),a+.2,.47,l+.22,i,o),n(a-.6,l-.6,a+.6,l+.6);let b=[];for(let q=0;q<6;q++){let Y=new X(new Tt(.035,8,6),new ne({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));Y.renderOrder=3,i.add(Y),b.push(Y)}r.animated.push(q=>{b.forEach((Y,ft)=>{let mt=(q*.22+ft/b.length)%1;Y.position.set(a+Math.sin(q*.9+ft*1.7)*.07*mt,.66+mt*1.3,l+Math.cos(q*.7+ft)*.05*mt),Y.scale.setScalar(1+mt*3.2),Y.material.opacity=.32*Math.sin(Math.PI*Math.min(1,mt*1.25))})}),un(i,a,l,3,"#d9f3cf",.26);let I=new Kt({color:"#fff1d6",roughness:.6,emissive:"#ffcf8a",emissiveIntensity:1.1}),U=D("#2c2420",.5),y=D("#5d5048",.8);for(let q=0;q<4;q++){let Y=q*Math.PI/2+Math.PI/4,ft=a+Math.sin(Y)*1.15,mt=l+Math.cos(Y)*1.15,pt=2.55+q%2*.15;t(new j(.006,.006,dt.wallH-pt-.22,4),y,ft,(dt.wallH+pt+.22)/2,mt,i,o),t(new j(.1,.12,.04,16),U,ft,pt+.23,mt,i,o),t(new j(.1,.12,.04,16),U,ft,pt-.23,mt,i,o);let A=new X(new Tt(.2,18,12),I);A.scale.set(1,1.25,1),A.position.set(ft,pt,mt),i.add(A);for(let w=-1;w<=1;w++)t(new Pe(.2*Math.sqrt(1-(w*.12/.25)**2),.004,4,20),U,ft,pt+w*.12,mt,i,o).rotation.x=Math.PI/2}r.animated.push(q=>{I.emissiveIntensity=1+Math.sin(q*.8)*.18});let E=12.1,N=.6;t(e(.8,.05,.55,.02),D("#4a2f1c",.45),E,.28,N);for(let[q,Y]of[[-.34,-.22],[.34,-.22],[-.34,.22],[.34,.22]])t(e(.05,.25,.05,.01),D("#3a2414",.5),E+q,.14,N+Y);t(e(.42,.02,.26,.01),f,E,.315,N,i,o),t(new Tt(.075,16,12),D("#7a3a24",.4),E-.08,.39,N,i,o).scale.set(1,.85,1),t(new j(.012,.02,.09,8),D("#7a3a24",.4),E-.16,.4,N,i,o).rotation.z=.9,t(new Pe(.04,.01,6,12),D("#7a3a24",.4),E+0,.4,N,i,o),t(new Tt(.015,8,6),D("#7a3a24",.4),E-.08,.455,N,i,o);for(let q of[.07,.14])t(new j(.027,.02,.04,12),D("#f3efe4",.3),E+q,.345,N+(q>.1?.06:-.05),i,o);for(let[q,Y]of[[-1,0],[1,Math.PI]]){let ft=N+q*.62,mt=new zt;mt.position.set(E,0,ft),mt.rotation.y=Y,i.add(mt),t(M,_[1],0,.052,0,mt,o),t(R,x[q<0?0:1],0,.142,-.04,mt),s(`zt${q<0?1:2}`,E,ft-q*.04,Y,.21,{x:E,z:N+q*1.35},"zen")}n(E-.45,N-.32,E+.45,N+.32),un(i,E,N,1.4,"#ffe2b0",.2);let P=[[6.5,6.2,.38],[8.9,7.4,.3],[9.7,6,.22]],V=ce.gx2-ce.gx1,z=ce.gz2-ce.gz1,nt=(ce.gx1+ce.gx2)/2,$=(ce.gz1+ce.gz2)/2,J=new X(new ie(V,z),new Kt({map:vy(P),roughness:1}));J.rotation.x=-Math.PI/2,J.position.set(nt,.07,$),J.receiveShadow=!0,i.add(J),t(e(V,.06,z),D("#d9d1bd",1),nt,.03,$,i,o);for(let[q,Y,ft,mt]of[[V+.24,.12,nt,ce.gz1-.06],[V+.24,.12,nt,ce.gz2+.06],[.12,z,ce.gx1-.06,$],[.12,z,ce.gx2+.06,$]])t(e(q,.13,Y,.02),c,ft,.065,mt);let ot=[D("#8f8a80",.95,{flatShading:!0}),D("#76726b",.95,{flatShading:!0})],ct=D("#6f9a4a",.95,{flatShading:!0});P.forEach(([q,Y,ft],mt)=>{let pt=t(new Zs(ft,0),ot[mt%2],q,.07+ft*.45,Y);pt.scale.set(1.15,.8+(mt===0?.35:0),.9),pt.rotation.set(.3*mt,.9*mt,.15);let A=en(40+mt);for(let w=0;w<4;w++){let O=A()*Math.PI*2;t(new Ke(.1+A()*.07,0),ct,q+Math.sin(O)*ft*1.05,.08,Y+Math.cos(O)*ft*1.05,i,o).scale.set(1.3,.45,1.3)}}),n(ce.gx1-.15,ce.gz1-.15,ce.gx2+.15,ce.gz2+.15);let bt=11.15,It=7.6;t(new j(.3,.34,.32,9),h,bt,.16,It);let et=new X(new hi(.2,20),new Kt({color:"#6fb6d8",roughness:.1,emissive:"#2a7fb0",emissiveIntensity:.25}));et.rotation.x=-Math.PI/2,et.position.set(bt,.322,It),i.add(et);for(let[q,Y,ft]of[[.42,.1,.12],[-.3,.38,.09],[.15,.42,.1]])t(new Zs(ft,0),h,bt+q,ft*.6,It+Y,i,o);let ht=D("#9cba5a",.55);t(new j(.03,.03,.62,10),ht,bt+.45,.31,It-.25);let xt=t(new j(.022,.022,.42,10),ht,bt+.25,.55,It-.14,i,o);xt.rotation.set(0,0,Math.PI/2+.25),xt.rotation.y=-.5;let yt=new X(new Tt(.014,6,4),new ne({color:"#d6efff"}));i.add(yt);let Ut=new X(new Nn(.03,.045,20),new ne({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));Ut.rotation.x=-Math.PI/2,Ut.position.set(bt+.07,.326,It-.04),i.add(Ut),r.animated.push(q=>{let Y=q*.8%1;yt.position.set(bt+.07,.5-Y*Y*.17,It-.04),yt.visible=Y<.95;let ft=q*.8%1;Ut.scale.setScalar(1+ft*3),Ut.material.opacity=.6*(1-ft)}),n(bt-.5,It-.5,bt+.6,It+.6);let Gt=Ie("#ffd28a",1.5);for(let[q,Y]of[[4.5,4.4],[11.4,4.4]]){t(new j(.2,.24,.1,6),h,q,.05,Y),t(new j(.075,.09,.55,8),h,q,.37,Y),t(e(.42,.07,.42,.02),h,q,.68,Y),t(e(.3,.26,.3,.02),h,q,.85,Y),t(e(.31,.15,.17),Gt,q,.86,Y,i,o),t(e(.17,.15,.31),Gt,q,.86,Y,i,o);let ft=t(new Ye(.36,.22,4),h,q,1.09,Y);ft.rotation.y=Math.PI/4,t(new Tt(.05,8,6),h,q,1.23,Y,i,o),un(i,q,Y,1.1,"#ffd9a0",.22),n(q-.3,Y-.3,q+.3,Y+.3)}let Xt=D("#6fa64a",.55),ee=D("#4e7d33",.6),ut=[D("#5f9e45",.85,{flatShading:!0}),D("#79b856",.85,{flatShading:!0})];[[5,-3,1],[13.5,3.3,3],[4.6,8.7,4]].forEach(([q,Y,ft])=>{let mt=en(ft*13);t(new j(.42,.46,.12,14),D("#cfc6b4",.95),q,.06,Y);for(let pt=0;pt<6;pt++){let A=mt()*Math.PI*2,w=.08+mt()*.24,O=q+Math.sin(A)*w,rt=Y+Math.cos(A)*w,at=2.2+mt()*.9;t(new j(.03,.036,at,8),Xt,O,at/2,rt);for(let it=.4;it<at-.1;it+=.38)t(new j(.04,.04,.025,8),ee,O,it,rt,i,o);for(let it=0;it<3;it++){let Lt=mt()*Math.PI*2,vt=t(new Ke(.2+mt()*.1,0),ut[it%2],O+Math.sin(Lt)*.18,at-.2-it*.32,rt+Math.cos(Lt)*.18,i,o);vt.scale.set(1.4,.35,.8),vt.rotation.y=Lt}}n(q-.5,Y-.5,q+.5,Y+.5)});let C=new zt;C.position.set(4.55,0,3.45),C.rotation.y=.6,i.add(C);for(let q of[-.62,.62])t(e(.07,1.45,.07,.015),c,q,.725,0,C);t(e(1.42,.08,.1,.02),c,0,1.47,0,C,o);let wt=new X(new ie(1.2,.375),new Kt({map:My(),roughness:.6}));wt.position.set(0,1.13,.04),C.add(wt),t(e(1.26,.42,.05,.015),c,0,1.13,0,C,o),n(4.55-.7,3.45-.45,4.55+.7,3.45+.45)}var rc={x:11.8,rows:[-8.1,-7,-5.9,-4.8,-3.7],cols:[-1.4,-.7,0,.7,1.4]},cr={x:8.75,z:dt.minZ+.55},lc={x:7,y:2.33,w:1.44,h:1.56};function wy({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=rc.x,l=dt.minZ,c=D("#8c1d18",.35),f=D("#5c120f",.4),h=D("#d9a63e",.3,{metalness:.6}),d=D("#4a2a17",.55),p=new X(new ie(2.3,2.6),new Kt({map:Sy(),roughness:.7,emissive:"#3a0a06",emissiveIntensity:.25}));p.position.set(a,2.2,l+.1),i.add(p),t(e(2.42,2.72,.05,.02),d,a,2.2,l+.07,i,o);let g=l+.45;t(e(1.95,.08,.62,.02),c,a,1,g),t(e(1.95,.16,.03,.01),f,a,.88,g+.3,i,o),t(e(1.75,.025,.012),h,a,.88,g+.32,i,o);for(let[U,y]of[[-.9,-.26],[.9,-.26],[-.9,.26],[.9,.26]])t(e(.08,.96,.08,.015),f,a+U,.48,g+y);t(e(2.15,.42,.42,.03),c,a,.21,g+.55),t(e(2,.025,.012),h,a,.33,g+.767,i,o),n(a-1.15,l,a+1.15,g+.85);let v=g-.2;oc("thantai",a-.3,1.04,v,1.4,i,t,r),oc("ongdia",a+.3,1.04,v,1.4,i,t,r),oc("meo",a,.42,g+.56,1.5,i,t,r);let m=D("#9a7432",.35,{metalness:.7}),u=g+.18;t(new j(.11,.09,.11,16),m,a,1.095,u);for(let U of[-.035,0,.035])t(new j(.004,.004,.24,4),D("#7a3b22",.8),a+U,1.27,u,i,o);for(let U of[-.035,0,.035])t(new Tt(.011,6,4),Ie("#ff6a2a",3),a+U,1.39,u,i,o);let _=[];for(let U=0;U<6;U++){let y=new X(new Tt(.035,8,6),new ne({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));y.renderOrder=3,i.add(y),_.push(y)}r.animated.push(U=>{_.forEach((y,E)=>{let N=(U*.2+E/_.length)%1;y.position.set(a+Math.sin(U*.8+E*1.9)*.08*N,1.42+N*1.1,u+Math.cos(U*.6+E)*.05*N),y.scale.setScalar(1+N*3),y.material.opacity=.3*Math.sin(Math.PI*Math.min(1,N*1.25))})});for(let U of[-1,1]){t(new j(.05,.07,.05,12),h,a+U*.82,1.065,g+.05,i,o),t(new j(.035,.035,.26,12),D("#c8231b",.5),a+U*.82,1.22,g+.05,i,o),t(new Tt(.03,8,6),Ie("#ffcf6a",3),a+U*.82,1.38,g+.05,i,o).scale.set(1,1.5,1),t(new j(.06,.08,.22,14),D("#f3efe6",.25),a+U*.72,1.15,g-.17,i,o);for(let y=0;y<5;y++){let E=y*1.256;t(new Tt(.07,10,8),D("#ffcc2e",.75),a+U*.72+Math.sin(E)*.07,1.36+y%2*.04,g-.17+Math.cos(E)*.07,i,o)}}let x=a-.5,M=g+.18;t(new j(.16,.13,.03,20),h,x,1.055,M,i,o),t(new Tt(.1,14,10),D("#b9d65a",.7),x,1.15,M-.04,i,o);for(let[U,y,E]of[[-.1,.07,"#ff8a1e"],[.1,.07,"#d8261c"],[0,.11,"#ff8a1e"],[-.12,-.05,"#d8261c"]])t(new Tt(.05,10,8),D(E,.55),x+U,1.11,M+y,i,o);for(let U=0;U<4;U++)t(new Oe(.022,.15,4,8),D("#f5d23c",.6),x+.05+U*.03,1.22,M-.02,i,o).rotation.set(.2,0,.9-U*.15);for(let U=0;U<3;U++)t(e(.11,.04,.055,.012),h,a+.42+U*.1,1.06+(U===1?.04:0),g+.2,i,o);for(let U=0;U<4;U++)t(new j(.05,.05,.016,16),h,a+.62,1.05+U*.018,g+.05,i,o);for(let U of[-1,1])for(let y=0;y<2;y++)t(e(.12,.045,.06,.012),h,a+U*(.42+y*.14),.445,g+.58,i,o);let R=new Kt({color:"#e2261b",roughness:.5,emissive:"#ff3a1a",emissiveIntensity:.6});for(let U of[-1,1]){let y=a+U*1.45,E=2.85;t(new j(.006,.006,dt.wallH-E-.25,4),D("#5d5048",.8),y,(dt.wallH+E+.25)/2,l+.55,i,o);let N=new X(new Tt(.22,18,12),R);N.scale.set(1,.85,1),N.position.set(y,E,l+.55),i.add(N),t(new j(.09,.09,.05,14),h,y,E+.2,l+.55,i,o),t(new j(.09,.09,.05,14),h,y,E-.2,l+.55,i,o),t(new j(.012,.012,.22,6),D("#f5c518",.6),y,E-.34,l+.55,i,o);let B=a+U*1.55,P=l+.6;t(new j(.24,.18,.4,16),D("#2f6fb5",.4),B,.2,P),t(new j(.245,.245,.04,16),D("#f3efe6",.4),B,.39,P,i,o);let V=en(77+U);for(let z=0;z<6;z++)t(new Ke(.2,1),D(z%2?"#3f8a3f":"#4f9d4a",.85,{flatShading:!0}),B+(V()-.5)*.3,.62+z*.1,P+(V()-.5)*.3,i,o).scale.setScalar(1-z*.1);for(let z=0;z<14;z++){let nt=V()*Math.PI*2,$=.55+V()*.55,J=.2+(1-($-.55)/.55)*.08;t(new Tt(.03,8,6),D("#ff9a1a",.5),B+Math.sin(nt)*J,$,P+Math.cos(nt)*J,i,o)}n(B-.3,P-.3,B+.3,P+.3)}r.animated.push(U=>{R.emissiveIntensity=.55+Math.sin(U*1.3)*.12}),un(i,a,l+1.6,2.4,"#ffcf8a",.28);let S=[D("#d9a63e",.85),D("#b3241b",.9)],b=new j(.2,.22,.09,20),I=0;rc.rows.forEach((U,y)=>rc.cols.forEach(E=>{t(b,S[y%2],a+E,.045,U+.12,i,o),s(`k${++I}`,a+E,U,Math.PI,.09,{x:a+E,z:U+.6},"kneel","thantai")}))}function Sy(){return Ue(900,1e3,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#b3140f"),n.addColorStop(1,"#7a0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,215,110,.12)",i.lineWidth=5;for(let o=120;o<e;o+=120)for(let a=o/120%2*90;a<t;a+=180)i.beginPath(),i.arc(a,o,26,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(a,o,9,0,Math.PI*2),i.stroke();i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(12,12,t-24,e-24),i.lineWidth=3,i.strokeRect(32,32,t-64,e-64),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`;i.fillStyle="#3d1d0f",i.fillRect(90,60,t-180,170),i.strokeStyle="#f2c14e",i.lineWidth=7,i.strokeRect(102,72,t-204,146),i.fillStyle="#ffd56a",i.font=s(900,92),i.fillText("TH\u1EA6N T\xC0I".normalize("NFC"),t/2,148),i.fillStyle="#ffe9b0",i.font=s(800,40),i.fillText("C\u1EA7u nhi\u1EC1u \u0111\u01A1n \xB7 B\xE1n \u0111\u1EAFt nh\u01B0 t\xF4m t\u01B0\u01A1i".normalize("NFC"),t/2,290),i.save(),i.translate(t/2,520),i.rotate(Math.PI/4),i.fillStyle="#e8262b",i.fillRect(-120,-120,240,240),i.strokeStyle="#ffd56a",i.lineWidth=8,i.strokeRect(-108,-108,216,216),i.restore(),i.fillStyle="#ffd56a",i.font=s(900,74),i.fillText("L\u1ED8C".normalize("NFC"),t/2,525),i.strokeStyle="#7dff9a",i.lineWidth=12,i.lineJoin="round",i.beginPath(),[[250,900],[340,860],[410,880],[500,800],[580,820],[660,720]].forEach(([o,a],l)=>l?i.lineTo(o,a):i.moveTo(o,a)),i.stroke(),i.fillStyle="#7dff9a",i.beginPath(),i.moveTo(700,690),i.lineTo(640,700),i.lineTo(675,745),i.closePath(),i.fill();let r=(o,a)=>{i.fillStyle="#e8262b",i.fillRect(o-58,330,116,620),i.strokeStyle="#ffd56a",i.lineWidth=5,i.strokeRect(o-51,337,102,606),i.fillStyle="#ffd56a",i.font=s(800,38),a.forEach((l,c)=>i.fillText(l.normalize("NFC"),o,390+c*(540/a.length)))};r(100,["Kh\xE1ch","v\xE0o","nh\u01B0","n\u01B0\u1EDBc"]),r(t-100,["Ch\u1ED1t","\u0111\u01A1n","\u1EA7m","\u1EA7m"])})}function oc(i,t,e,n,s,r,o,a){let l={cast:!1},c=new zt;c.position.set(t,e,n),c.scale.setScalar(s),r.add(c);let f=D("#f3c79a",.6),h=D("#e0ae3c",.28,{metalness:.65}),d=D("#d92a1c",.5);if(i==="thantai"){o(new j(.13,.17,.32,16),D("#e9b425",.35,{metalness:.3}),0,.16,0,c),o(new Tt(.1,14,10),f,0,.42,0,c),o(new j(.08,.1,.09,14),D("#1d1d22",.5),0,.53,0,c,l);for(let p of[-1,1])o(new Et(.08,.025,.03),D("#1d1d22",.5),p*.11,.53,0,c,l);o(new Oe(.025,.08,4,8),D("#1d1d22",.6),0,.34,.09,c,l).rotation.x=.3,o(new lr(.13,.05,.06,2,.015),h,0,.2,.15,c,l)}else if(i==="ongdia")o(new Tt(.17,16,12),D("#f08a2a",.5),0,.17,0,c).scale.set(1,.95,.9),o(new Tt(.1,12,8),f,0,.15,.1,c,l).scale.set(1,1,.6),o(new Tt(.11,14,10),f,0,.42,0,c),o(new Pe(.045,.012,6,12,Math.PI),D("#8a2a1a",.6),0,.4,.1,c,l).rotation.z=Math.PI,o(new hi(.11,14,0,Math.PI),D("#f6e7c4",.6,{side:ye}),.17,.28,.05,c,l).rotation.set(0,-.4,.5);else{let p=D("#fbf8f2",.45);o(new Tt(.085,14,10),p,0,.085,0,c).scale.set(1,1.1,.9),o(new Tt(.075,14,10),p,0,.22,0,c);for(let m of[-1,1])o(new Ye(.025,.05,6),p,m*.045,.29,0,c,l);o(new Pe(.06,.01,6,16),d,0,.165,0,c,l).rotation.x=Math.PI/2,o(new j(.03,.03,.01,12),h,0,.13,.075,c,l).rotation.x=Math.PI/2;for(let m of[-1,1])o(new Tt(.009,6,4),D("#1d1d22",.4),m*.028,.23,.068,c,l);let g=new zt;g.position.set(.07,.2,0),c.add(g);let v=new X(new Oe(.022,.07,4,8),p);v.position.y=.05,g.add(v),a.animated.push(m=>{g.rotation.z=-.25+Math.sin(m*5)*.45})}return c}function by(){return Ue(960,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7a1712"),n.addColorStop(1,"#4e0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="#f2c14e",i.lineWidth=16,i.strokeRect(12,12,t-24,e-24),i.lineWidth=4,i.strokeRect(36,36,t-72,e-72),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`,r=(o,a,l,c,f)=>{for(o=o.normalize("NFC"),i.font=s(a,l);l>24&&i.measureText(o).width>t-120;)l-=2,i.font=s(a,l);i.fillStyle=f,i.fillText(o,t/2,c)};i.shadowColor="rgba(255,190,60,.7)",i.shadowBlur=18,r("\u{1F38B} XIN QU\u1EBA",900,150,170,"#ffd56a"),i.shadowBlur=0,r("\u0110\u1EA6U NG\xC0Y",900,96,300,"#ffe9b0"),r("M\u1ED7i ng\xE0y 1 qu\u1EBB may m\u1EAFn \u2728",800,54,420,"#fff3cf"),r("\u{1F449} B\u1EA5m v\xE0o \u1ED1ng qu\u1EBB",900,58,530,"#f5c518")})}function Ty({scene:i,add:t,box:e,block:n,out:s}){let r={cast:!1},o=cr.x,a=cr.z,l=dt.minZ,c=D("#a8191b",.4),f=D("#e0ae3c",.28,{metalness:.65}),h=D("#5b341c",.6);t(e(1.3,.06,.6,.02),c,o,.8,a),t(e(1.36,.03,.66,.01),f,o,.765,a,i,r);for(let[x,M]of[[-.58,-.24],[.58,-.24],[-.58,.24],[.58,.24]])t(e(.06,.77,.06,.015),h,o+x,.385,a+M);t(e(1.22,.32,.02,.01),D("#c8231b",.7),o,.6,a+.3,i,r),t(e(1.1,.03,.012),f,o,.46,a+.312,i,r);let d=new zt;d.position.set(o-.15,.83,a-.02),i.add(d);let p=D("#c99a4a",.55);t(new j(.13,.12,.42,20,1,!0),D("#c99a4a",.55,{side:ye}),0,.21,0,d),t(new j(.12,.12,.02,20),p,0,.01,0,d,r);for(let x of[.08,.36])t(new Pe(.128,.012,6,24),D("#8a6a2e",.5),0,x,0,d,r).rotation.x=Math.PI/2;t(new j(.131,.131,.06,20,1,!0),D("#b3241b",.6,{side:ye}),0,.22,0,d,r);let g=en(91);for(let x=0;x<22;x++){let M=g()*Math.PI*2,R=g()*.08,S=.5+g()*.12,b=new zt;b.position.set(Math.cos(M)*R,.02,Math.sin(M)*R),b.rotation.set((g()-.5)*.25,M,(g()-.5)*.25),d.add(b),t(new Et(.014,S,.006),D("#e6c27a",.6),0,S/2,0,b,r),t(new Et(.016,.05,.008),D("#d22a1f",.5),0,S-.02,0,b,r)}t(new j(.16,.13,.025,20),f,o+.3,.845,a+.06,i,r),t(new Et(.014,.5,.006),D("#e6c27a",.6),o+.3,.87,a+.06,i,r).rotation.set(Math.PI/2,0,.6),t(new j(.05,.04,.06,14),D("#9a7432",.35,{metalness:.7}),o+.5,.86,a-.18,i,r);for(let x of[-.012,.012])t(new Tt(.007,6,4),Ie("#ff6a2a",3),o+.5+x,.98,a-.18,i,r);let m=new X(new ie(1.8,1.2),new Kt({map:by(),roughness:.75,emissive:"#2a0604",emissiveIntensity:.25}));m.position.set(o,2.12,l+.1),i.add(m),t(e(1.9,1.3,.05,.02),h,o,2.12,l+.07,i,r);let u=new X(new Ye(.05,.22,10),Ie("#e2261b",.6));u.position.set(o-.92,1.38,l+.12),i.add(u),s.animated.push(x=>{u.rotation.z=Math.sin(x*2.2)*.18}),un(i,o,a+.7,1.1,"#ffd9a0",.26),n(o-.7,l,o+.7,a+.35);let _=new X(new Et(1.4,1.5,.9),new ne({visible:!1}));_.position.set(o,.75,a),_.userData.action="fortune",i.add(_),s.clickables.push(_)}function Ry(i,t,e,n){let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"#1259c8"),s.addColorStop(1,"#0a3483"),i.fillStyle=s,i.fillRect(0,0,t,e),i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(10,10,t-20,e-20),i.strokeStyle="rgba(255,255,255,.35)",i.lineWidth=3,i.strokeRect(30,30,t-60,e-60),i.textAlign="center",i.textBaseline="middle";let r=(h,d)=>`${h} ${d}px "Segoe UI", "Noto Sans", Arial, sans-serif`,o=(h,d,p,g,v,m,u=t-110,_="center")=>{for(h=String(h||"").normalize("NFC"),i.textAlign=_,i.font=r(d,p);p>18&&i.measureText(h).width>u;)p-=2,i.font=r(d,p);i.fillStyle=m,i.fillText(h,g,v),i.textAlign="center"};i.shadowColor="rgba(0,0,0,.35)",i.shadowBlur=10,o("\u{1F4EE} H\xD2M TH\u01AF G\xD3P \xDD",900,76,t/2,104,"#ffd56a"),i.shadowBlur=0,o("C\xF9ng x\xE2y s\u1EA3n ph\u1EA9m SIMI t\u1ED1t h\u01A1n",700,34,t/2,168,"#e3eeff");let a=n&&n.summary||null,l=[["mobile","\u{1F4F1}","App mobile"],["zalo","\u{1F4AC}","Mini app Zalo"],["web","\u{1F310}","Website"],["other","\u2728","Kh\xE1c"]],c=216,f=134;l.forEach(([h,d,p],g)=>{let v=c+g*f;i.fillStyle="rgba(255,255,255,.12)",i.beginPath(),i.roundRect?i.roundRect(56,v,t-112,f-16,18):i.rect(56,v,t-112,f-16),i.fill(),o(d,400,56,112,v+(f-16)/2+2,"#fff",80),o(p,900,46,168,v+40,"#ffffff",t-260,"left");let m=a&&a[h];o(m?`${m.open} \u0111ang x\u1EED l\xFD \xB7 ${m.done} \u0111\xE3 c\u1EADp nh\u1EADt`:"G\u1EEDi \xFD t\u01B0\u1EDFng, b\xE1o l\u1ED7i\u2026",700,30,168,v+86,"#ffd56a",t-260,"left")}),i.fillStyle="#f2c14e",i.beginPath(),i.roundRect?i.roundRect(110,e-112,t-220,70,35):i.rect(110,e-112,t-220,70),i.fill(),o("\u{1F449} B\u1EA5m \u0111\u1EC3 g\u1EEDi g\xF3p \xFD",900,40,t/2,e-76,"#0a3483",t-260)}function Ay({scene:i,add:t,box:e,block:n,out:s}){let r={cast:!1},{x:o,y:a,w:l,h:c}=lc,f=dt.minZ,h=document.createElement("canvas");h.width=768,h.height=832;let d=new tn(h);d.colorSpace=_e,d.anisotropy=8;let p=U=>{try{Ry(h.getContext("2d"),h.width,h.height,U),d.needsUpdate=!0}catch{}};p(null);let g=new X(new ie(l,c),new Kt({map:d,roughness:.55,emissive:"#0a2a6a",emissiveIntensity:.25}));g.position.set(o,a,f+.1),i.add(g),t(e(l+.1,c+.1,.05,.02),D("#d9a63e",.3,{metalness:.6}),o,a,f+.07,i,r),s.ideasBoard={draw:p,mesh:g};let v=f+.5,m=D("#d4231c",.45,{metalness:.15}),u=D("#3a1210",.6);t(e(.09,.78,.09,.02),D("#2d3440",.5,{metalness:.5}),o,.39,v),t(new j(.2,.22,.04,20),D("#2d3440",.5,{metalness:.5}),o,.02,v,i,r),t(e(.56,.42,.4,.04),m,o,.99,v);let _=t(new j(.2,.2,.56,24,1,!1,0,Math.PI),m,o,1.2,v);_.rotation.z=Math.PI/2,t(e(.34,.035,.02,.008),u,o,1.1,v+.205,i,r);let x=t(e(.22,.12,.006),D("#fffdf5",.8),o+.02,1.15,v+.215,i,r);x.rotation.z=-.12,t(e(.08,.05,.008),D("#e8493f",.6),o+.03,1.16,v+.219,i,r);let M=document.createElement("canvas");M.width=256,M.height=96;let R=M.getContext("2d");R.fillStyle="#ffd56a",R.fillRect(0,0,256,96),R.fillStyle="#7a1410",R.font='900 50px "Segoe UI", Arial, sans-serif',R.textAlign="center",R.textBaseline="middle",R.fillText("G\xD3P \xDD",128,52);let S=new tn(M);S.colorSpace=_e;let b=new X(new ie(.3,.11),new Kt({map:S,roughness:.6}));b.position.set(o,.93,v+.202),i.add(b);let I=new zt;I.position.set(o+.29,1.02,v),i.add(I);for(let[U,y,E,N]of[[new Et(.02,.3,.02),D("#9aa3b0",.4,{metalness:.6}),.15,0],[new Et(.012,.1,.14),D("#f5c518",.5),.26,.07]]){let B=new X(U,y);B.position.set(0,E,N),B.castShadow=!0,I.add(B)}I.rotation.z=-Math.PI/2+.15,s.ideasFlag=I,n(o-.32,v-.25,o+.32,v+.25);for(let[U,y,E,N]of[[l+.1,c+.1,a,f+.15],[.7,1.45,.72,v]]){let B=new X(new Et(U,y,.5),new ne({visible:!1}));B.position.set(o,E,N),B.userData.action="ideas",i.add(B),s.clickables.push(B)}}function Cy(){return Ue(512,512,(i,t,e)=>{i.fillStyle="#2c3a6e",i.fillRect(0,0,t,e);let n=en(77);i.strokeStyle="rgba(150,175,245,.22)",i.lineWidth=3;for(let r=-64;r<e+64;r+=64)for(let o=-64;o<t+64;o+=64)i.beginPath(),i.moveTo(o,r+32),i.lineTo(o+32,r),i.lineTo(o+64,r+32),i.lineTo(o+32,r+64),i.closePath(),i.stroke();let s=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4"];for(let r=0;r<70;r++)i.fillStyle=s[r%4],i.globalAlpha=.35,i.beginPath(),i.arc(n()*t,n()*e,2+n()*2.5,0,7),i.fill();i.globalAlpha=1})}function pf(i){return Ue(256,200,(t,e,n)=>{let s=en(i),r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,["#140a3a","#05263a","#2a0a26"][i%3]),r.addColorStop(1,"#000"),t.fillStyle=r,t.fillRect(0,0,e,n);for(let a=0;a<40;a++)t.fillStyle="rgba(255,255,255,.6)",t.fillRect(s()*e,s()*n*.7,2,2);let o=["#ff4fa3","#45d2b4","#ffd34d","#4aa8ff"];for(let a=0;a<9;a++){t.fillStyle=o[(a+i)%4];let l=30+a%3*70+s()*10,c=30+Math.floor(a/3)*34;t.fillRect(l,c,22,14),t.fillRect(l-6,c+6,34,6)}t.fillStyle="#ffffff",t.fillRect(e/2-14,n-40,28,12),t.fillRect(e/2-4,n-50,8,10),t.fillStyle="#ffd34d",t.font="bold 18px monospace",t.fillText("SCORE 0"+(12e3+i*3170),12,n-10)})}function Py(i,t,e){return Ue(1024,256,(n,s,r)=>{n.clearRect(0,0,s,r),n.textAlign="center",n.textBaseline="middle",n.font='900 120px "Nunito", "Segoe UI", sans-serif';for(let[o,a]of[[40,t],[16,t],[0,"#ffffff"]])n.shadowColor=t,n.shadowBlur=o,n.fillStyle=a,n.fillText(i,s/2,e?r/2-22:r/2);e&&(n.font='800 46px "Nunito", "Segoe UI", sans-serif',n.shadowBlur=12,n.fillStyle="#ffffff",n.fillText(e,s/2,r/2+72))})}function Iy(){return Ue(256,256,(i,t)=>{let e=t/2;i.fillStyle="#1a1a1a",i.beginPath(),i.arc(e,e,e,0,7),i.fill();for(let n=0;n<20;n++){let s=n/20*Math.PI*2-Math.PI/20,r=s+Math.PI/10;for(let[o,a,l,c]of[[30,100,"#f3e6c8","#151515"],[100,112,"#1d8a4a","#d8262e"],[12,30,"#f3e6c8","#151515"],[70,80,"#1d8a4a","#d8262e"]])i.fillStyle=n%2?l:c,i.beginPath(),i.arc(e,e,a,s,r),i.arc(e,e,o,r,s,!0),i.closePath(),i.fill()}i.fillStyle="#1d8a4a",i.beginPath(),i.arc(e,e,12,0,7),i.fill(),i.fillStyle="#d8262e",i.beginPath(),i.arc(e,e,6,0,7),i.fill()})}var Ly=["#fbfaf5","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b","#141414","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b"];function Dy({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=14.6,l=dt.maxX,c=dt.minZ,f=9.6,h=Cy();h.wrapS=h.wrapT=Tn,h.repeat.set((l-a)/3,(f-c)/3);let d=new X(new ie(l-a,f-c),new Kt({map:h,roughness:.95}));d.rotation.x=-Math.PI/2,d.position.set((a+l)/2,.006,(c+f)/2),d.receiveShadow=!0,i.add(d),t(e(.06,.02,f-c),Ie("#7c5cff",1.4),a+.03,.012,(c+f)/2,i,o),t(e(l-a,.02,.06),Ie("#7c5cff",1.4),(a+l)/2,.012,f-.03,i,o),t(e(l-a-.3,dt.wallH-.02,.07),D("#231a4a",.9),(a+l)/2,dt.wallH/2,dt.minZ+.02,i,o);let p=new X(new ie(4.4,1.1),new ne({map:Py("GAME ZONE","#b26bff"),transparent:!0,toneMapped:!1,depthWrite:!1}));p.position.set(20.8,2.95,dt.minZ+.07),i.add(p),[15.5,16.65,17.8].forEach((P,V)=>{let z=new zt;z.position.set(P,0,dt.minZ+.5),i.add(z);let nt=D(["#ff4fa3","#2f8cf0","#45d2b4"][V],.5);t(e(.82,1.2,.72,.04),D("#20203a",.5),0,.6,0,z),t(e(.86,.06,.74,.02),nt,0,1.22,0,z,o),t(e(.82,.62,.42,.04),D("#20203a",.5),0,1.55,-.14,z),t(e(.86,.2,.5,.03),nt,0,1.96,-.1,z,o),t(e(.7,.12,.02),Ie(["#ff9ccf","#9fd0ff","#b6f5d8"][V],1.6),0,1.96,.16,z,o),t(e(.76,.06,.3,.02),D("#2b2b40",.5),0,1.04,.3,z,o),t(new Tt(.035,10,8),D("#ff5a5f",.3),-.18,1.1,.32,z,o),t(new j(.03,.03,.04,10),D("#ffd34d",.3),.1,1.08,.3,z,o),t(new j(.03,.03,.04,10),D("#4aa8ff",.3),.2,1.08,.3,z,o);let $=new X(new ie(.66,.5),new ne({map:pf(V+3),toneMapped:!1}));$.position.set(0,1.56,.075),$.rotation.x=-.18,z.add($),un(i,P,dt.minZ+1.3,.8,["#ff6fb5","#4aa8ff","#45d2b4"][V],.28)}),n(15,dt.minZ,18.3,dt.minZ+1),t(e(1.3,1.3,.06,.02),D("#8a5a3b",.5),20.8,1.55,dt.minZ+.08,i,o);for(let P=0;P<6;P++)t(new j(.012,.018,1.2,8),D(P%2?"#c99a5b":"#9b6b3e",.45),20.3+P*.2,1.55,dt.minZ+.14,i,o);let g=new X(new hi(.34,40),new Kt({map:Iy(),roughness:.8}));g.position.set(24.6,1.75,dt.minZ+.1),i.add(g),t(new j(.42,.42,.05,40),D("#2b1a0e",.6),24.6,1.75,dt.minZ+.07,i,o).rotation.x=Math.PI/2,t(e(1,.012,.05),Ie("#ffd34d",1.2),24.6,.012,dt.minZ+2.4,i,o);let v=D("#169a63",.95),m=D("#6b3f22",.45),u=D("#0f6b45",.85),_=D("#0b0b0b",.9),x=D("#c9b06b",.35,{metalness:.5}),M=new Tt(.032,14,10);r.poolTables=fy.map((P,V)=>{let{w:z,l:nt}=Ss;t(e(z+.36,.16,nt+.36,.06),m,P.x,.74,P.z),t(e(z+.08,.05,nt+.08,.02),u,P.x,.83,P.z,i,o),t(e(z,.02,nt),v,P.x,.85,P.z,i,o),t(e(z+.1,.42,nt-.2,.05),m,P.x,.45,P.z);for(let[ct,bt]of[[-1,-1],[1,-1],[-1,1],[1,1]])t(e(.16,.66,.16,.04),m,P.x+ct*(z/2+.06),.33,P.z+bt*(nt/2+.06));for(let[ct,bt]of[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]])t(new j(.06,.06,.03,16),_,P.x+ct*(z/2+.01),.855,P.z+bt*(nt/2+.01),i,o),t(new j(.075,.075,.02,16),x,P.x+ct*(z/2+.03),.825,P.z+bt*(nt/2+.03),i,o);t(e(.42,.12,1.9,.04),D("#1d2b4f",.5),P.x,2.45,P.z,i,o),t(e(.34,.02,1.8),Ie("#fff1d6",1.5),P.x,2.38,P.z,i,o);for(let ct of[-.6,.6])t(new j(.008,.008,.9,6),D("#7c818d"),P.x,2.95,P.z+ct,i,o);un(i,P.x,P.z,1.7,"#fff1d6",.32),n(P.x-z/2-.2,P.z-nt/2-.2,P.x+z/2+.2,P.z+nt/2+.2);let $=new ci(M,new Kt({roughness:.2}),16);$.castShadow=!1,$.receiveShadow=!1,Ly.forEach((ct,bt)=>$.setColorAt(bt,new Zt(ct))),i.add($);let J=new X(new Et(z+.4,1,nt+.4),new ne({visible:!1}));J.position.set(P.x,.5,P.z),J.userData.poolTable=V,i.add(J);let ot=new X(new ie(.34,.1),new ne({map:Ue(256,76,(ct,bt,It)=>{ct.fillStyle="#f3e3c3",ct.fillRect(0,0,bt,It),ct.fillStyle="#3a2412",ct.font="900 46px Nunito, sans-serif",ct.textAlign="center",ct.textBaseline="middle",ct.fillText(`B\xC0N ${V+1}`,bt/2,It/2+2)})}));return ot.position.set(P.x,.74,P.z+nt/2+.185),i.add(ot),{...P,index:V,balls:$,hit:J,spots:[{x:P.x,z:P.z-nt/2-.55,face:0},{x:P.x,z:P.z+nt/2+.55,face:Math.PI}]}});let R=17.2,S=3.4;t(e(1.3,.22,.8,.05),D("#2f8cf0",.5),R,.82,S),t(e(1.12,.02,.64),D("#169a63",.9),R,.93,S,i,o),t(e(1,.7,.6,.05),D("#1d2b4f",.5),R,.36,S);for(let P=0;P<6;P++){let V=R-.48+P*.19;t(new j(.012,.012,1.15,6),D("#c2cad6",.25,{metalness:.7}),V,.98,S,i,o).rotation.x=Math.PI/2;for(let z of[-1,1])t(new j(.035,.035,.07,10),D(P%2?"#ff5a5f":"#ffd34d",.4),V,.98,S+z*.66,i,o).rotation.x=Math.PI/2;for(let z=0;z<2;z++)t(e(.03,.08,.03),D(P%2?"#ff5a5f":"#ffd34d",.4),V,.95,S-.15+z*.3,i,o)}n(R-.7,S-.75,R+.7,S+.75),t(e(2.2,.45,.5,.05),D("#2b2b40",.5),22.4,.225,1),t(e(2.4,1.36,.08,.03),D("#16161c",.35),22.4,1.25,1.05);let b=new X(new ie(2.26,1.22),new ne({map:pf(9),toneMapped:!1}));b.position.set(22.4,1.25,1.095),i.add(b),n(21.2,.6,23.6,1.4);let I=D("#7c5cff",.85),U=D("#ffd34d",.8),y=new zt;y.position.set(22.4,0,4),y.rotation.y=Math.PI,i.add(y),t(e(2.5,.32,.9,.08),I,0,.27,0,y),t(e(2.3,.14,.78,.07),I,0,.47,.04,y),t(e(2.5,.7,.24,.1),I,0,.62,-.34,y);for(let P of[-1,1])t(e(.22,.52,.9,.09),I,P*1.24,.42,0,y);for(let P of[-.7,.7])t(e(.34,.32,.12,.06),U,P,.68,-.2,y).rotation.x=-.2;for(let P=-1;P<=1;P++)s(`gs${P+2}`,22.4-P*.75,4.05,Math.PI,.47,{x:22.4-P*.75,z:3.2});n(21.1,3.5,23.7,4.5),t(new j(.42,.42,.04,28),D("#fbf7f0",.4),22.4,.42,2.55),t(new j(.06,.09,.4,10),D("#3a3a44",.4),22.4,.2,2.55),t(e(.18,.04,.1,.02),D("#1a1a1a",.4),22.3,.46,2.5,i,o),t(e(.18,.04,.1,.02),D("#f5f5f5",.4),22.55,.46,2.62,i,o),n(21.95,2.1,22.85,3);let E=[D("#ff9a6b",.95),D("#45d2b4",.95)];[[20.3,2.6,Math.PI*.82],[24.5,2.6,-Math.PI*.82]].forEach(([P,V,z],nt)=>{t(new Tt(.44,18,12),E[nt],P,.26,V).scale.set(1,.6,1);let J=t(new Tt(.3,14,10),E[nt],P-Math.sin(z)*.26,.48,V-Math.cos(z)*.26);J.scale.set(1.1,.9,.7),J.rotation.y=z,s(`gb${nt+1}`,P,V,z,.36,{x:P+Math.sin(z)*.8,z:V+Math.cos(z)*.8})});let N=17.6,B=7.2;t(e(2.3,.05,1.28,.02),D("#1f5fd1",.6),N,.76,B),t(e(2.3,.006,.02),D("#ffffff",.6),N,.788,B,i,o),t(e(.02,.006,1.26),D("#ffffff",.6),N-1.14,.788,B,i,o),t(e(.02,.006,1.26),D("#ffffff",.6),N+1.14,.788,B,i,o),t(e(.02,.16,1.4),D("#f6f3ee",.8),N,.86,B,i,o);for(let[P,V]of[[-.95,-.5],[.95,-.5],[-.95,.5],[.95,.5]])t(e(.06,.74,.06),D("#3a3a44",.4),N+P,.37,B+V,i,o);t(e(.16,.02,.15,.01),D("#d8262e",.6),N-.6,.8,B+.3,i,o),t(new Tt(.02,8,6),D("#ffffff",.4),N+.4,.82,B-.2,i,o),n(N-1.2,B-.7,N+1.2,B+.7),[[23.3,"#ff7aa8"],[24.5,"#4aa8ff"]].forEach(([P,V])=>{t(e(1,.85,.9,.05),D(V,.5),P,.425,8.5),t(e(.96,.95,.86),new Kt({color:"#dff1ff",roughness:.05,transparent:!0,opacity:.35}),P,1.33,8.5,i,o),t(e(1.02,.22,.92,.05),D(V,.5),P,1.91,8.5,i,o),t(e(.8,.1,.02),Ie("#fff1d6",1.4),P,1.91,8.97,i,o);let z=en(Math.round(P*10));for(let nt=0;nt<9;nt++)t(new Tt(.1,10,8),D(["#ffd34d","#ff9ccf","#9fd0ff","#b6f5d8","#c3a6ff"][nt%5],.8),P-.3+nt%3*.3+z()*.05,.95+Math.floor(nt/3)*.05,8.3+z()*.3,i,o);t(e(.04,.3,.04),D("#c2cad6",.3,{metalness:.6}),P+.1,1.6,8.5,i,o),n(P-.55,8,P+.55,9)}),t(e(.95,1.95,.75,.05),D("#e1262d",.45),21.8,.975,8.6),t(e(.6,1.3,.02),Ie("#d9f1ff",.9),21.68,1.15,8.98,i,o);for(let P=0;P<4;P++)for(let V=0;V<4;V++)t(new j(.035,.035,.13,10),D(["#ffd34d","#45d2b4","#ff9ccf","#4aa8ff"][V],.4),21.48+V*.13,.65+P*.3,8.95,i,o);t(e(.18,.5,.02),D("#2b2b33",.4),22.13,1.2,8.98,i,o),n(21.3,8.2,22.3,9);for(let P=.8;P<=6.2;P+=1.8){t(e(.5,.45,1.5,.06),D("#e3d5bf",.8),14.3,.225,P);for(let V=0;V<3;V++)t(new Ke(.22,1),D(V%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),14.3+(V-1)*.04,.6,P-.45+V*.45);n(14,P-.8,14.6,P+.8)}}function Uy(){let i=en(55),t=Ue(1024,512,(e,n,s)=>{for(let o=0;o<s;o+=48){let a=-Math.floor(i()*300);for(;a<n;){let l=300+Math.floor(i()*300),c=i();e.fillStyle=`rgb(${Math.round(196+c*16)},${Math.round(150+c*14)},${Math.round(104+c*12)})`,e.fillRect(a,o,l,48),e.strokeStyle="rgba(120,80,45,.12)",e.lineWidth=1.2;for(let f=0;f<3;f++){let h=o+8+i()*32;e.beginPath(),e.moveTo(a,h);for(let d=a;d<a+l;d+=40)e.lineTo(d,h+Math.sin(d*.02+f)*2);e.stroke()}e.fillStyle="rgba(90,60,30,.35)",e.fillRect(a,o,3,48),a+=l}e.fillStyle="rgba(90,60,30,.4)",e.fillRect(0,o,n,3)}});return t.wrapS=t.wrapT=Tn,t}function Ny(){return Ue(1024,192,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#0a5cc2"),n.addColorStop(1,"#0a78f0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.font='900 86px "Nunito", "Segoe UI", sans-serif',i.fillText("V\u0102N PH\xD2NG AI",t/2,e/2-12),i.font='800 36px "Nunito", "Segoe UI", sans-serif',i.fillStyle="#ffd34d",i.fillText("SIMI \xB7 BAR \xB7 GAME \xB7 CINEMA",t/2,e/2+56)})}function Hy({scene:i,add:t,box:e,block:n,seat:s,out:r,glassM:o,tableTop:a}){let l={cast:!1},c=dt.inZ,f=dt.maxZ,h=dt.minX,d=dt.maxX,p=Uy();p.repeat.set((d-h)/10,(f-c)/5);let g=new X(new ie(d-h,f-c),new Kt({map:p,roughness:.85}));g.rotation.x=-Math.PI/2,g.position.set((h+d)/2,.001,(c+f)/2),g.receiveShadow=!0,i.add(g),r.deck=g,t(e(d-h,.03,.24,.01),D("#d8d2c6",.8),(h+d)/2,.015,c,i,l);let v=D("#4f9d5d",.9),m=D("#5fb36f",.9,{flatShading:!0}),u=(J,ot,ct,bt)=>{let It=Math.abs(ct-J)||.5,et=Math.abs(bt-ot)||.5;t(e(It,.7,et,.18),v,(J+ct)/2,.35,(ot+bt)/2);let ht=Math.max(2,Math.round(Math.max(It,et)/.7));for(let xt=0;xt<ht;xt++){let yt=(xt+.5)/ht;t(new Ke(.3,1),m,J+(ct-J)*yt,.72,ot+(bt-ot)*yt,i).scale.set(1,.6,1)}n(Math.min(J,ct)-.25,Math.min(ot,bt)-.25,Math.max(J,ct)+.25,Math.max(ot,bt)+.25)};u(h+.3,c+.6,h+.3,f-.35),u(d-.3,c+.6,d-.3,f-.35),u(h+.6,f-.35,10,f-.35),u(15,f-.35,d-.6,f-.35);let _=[D("#ff7aa8",.7),D("#ffd34d",.7),D("#ffffff",.7),D("#c3a6ff",.7)],x=en(91);for(let[J,ot]of[[h+1.2,9.4],[15.6,d-1.2]])for(let ct=J;ct<ot;ct+=.55)t(new Tt(.07,8,6),_[Math.floor(x()*4)],ct+x()*.2,.12,f-.95+x()*.15,i,l);let M=12.5,R=f-.35;for(let J of[-2.2,2.2])t(e(.32,3,.32,.05),D("#ffffff",.5),M+J,1.5,R),t(e(.5,.18,.5,.04),D("#d8d2c6",.7),M+J,.09,R),n(M+J-.25,R-.25,M+J+.25,R+.25);t(e(4.9,.7,.24,.06),D("#0a5cc2",.5),M,3.1,R);let S=new X(new ie(4.6,.62),new ne({map:Ny(),toneMapped:!1}));S.position.set(M,3.1,R+.125),i.add(S);let b=new X(new ie(2.6,1.3),new Kt({map:Ue(512,256,(J,ot,ct)=>{J.fillStyle="#0a5cc2",J.fillRect(0,0,ot,ct),J.strokeStyle="#ffd34d",J.lineWidth=10,J.strokeRect(14,14,ot-28,ct-28),J.fillStyle="#fff",J.font="900 64px Nunito, sans-serif",J.textAlign="center",J.textBaseline="middle",J.fillText("XIN CH\xC0O",ot/2,ct/2+4)}),roughness:.95}));b.rotation.x=-Math.PI/2,b.position.set(M,.006,R-1.1),i.add(b);let I=[D("#0a78f0",.7,{side:ye}),D("#ff7a6b",.7,{side:ye}),D("#2fc1a5",.7,{side:ye}),D("#ffd34d",.7,{side:ye})],U=D("#e9eef5",.4,{metalness:.3}),y=D("#f6f3ee",.5);[[-10.4,13.4],[-6,15.4],[-1.6,13.2],[3,15.3]].forEach(([J,ot],ct)=>{t(new j(.52,.52,.04,28),a,J,.74,ot),t(new j(.04,.05,.72,10),U,J,.36,ot),t(new j(.26,.3,.03,20),U,J,.015,ot),t(new j(.025,.025,2.4,8),y,J,1.2,ot,i,l),t(new Ye(1.15,.45,8,1,!0),I[ct],J,2.45,ot),t(new Tt(.05,8,6),y,J,2.7,ot,i,l),t(new j(.05,.04,.12,12),o,J+.15,.82,ot,i,l),t(new j(.05,.04,.12,12),o,J-.12,.82,ot+.12,i,l),n(J-.58,ot-.58,J+.58,ot+.58);for(let bt=0;bt<3;bt++){let It=bt/3*Math.PI*2+.5,et=J+Math.sin(It)*.95,ht=ot+Math.cos(It)*.95,xt=new zt;xt.position.set(et,0,ht),xt.rotation.y=It+Math.PI,i.add(xt),t(new j(.22,.22,.05,18),U,0,.46,0,xt),t(e(.4,.34,.04,.02),U,0,.7,-.2,xt);for(let[yt,Ut]of[[-.15,-.15],[.15,-.15],[-.15,.15],[.15,.15]])t(new j(.014,.014,.46,6),U,yt,.23,Ut,xt,l);s(`o${ct+1}${"abc"[bt]}`,et,ht,It+Math.PI,.48,{x:J+Math.sin(It)*1.55,z:ot+Math.cos(It)*1.55})}});let E=20.2,N=13.8;t(new j(1.5,1.6,.45,40),D("#e7e1d6",.7),E,.225,N),t(new j(1.32,1.32,.04,40),D("#cfc7b8",.7),E,.44,N,i,l);let B=new X(new j(1.3,1.3,.02,40),new Kt({color:"#7cc4ff",roughness:.1,emissive:"#2f8cf0",emissiveIntensity:.35,transparent:!0,opacity:.85}));B.position.set(E,.43,N),i.add(B),t(new j(.16,.22,.9,16),D("#e7e1d6",.7),E,.9,N),t(new j(.55,.2,.18,24),D("#e7e1d6",.7),E,1.4,N);let P=new X(new j(.03,.08,.6,10),new ne({color:"#d6efff",transparent:!0,opacity:.7}));P.position.set(E,1.75,N),i.add(P);let V=[0,1].map(()=>{let J=new X(new Nn(.3,.36,40),new ne({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));return J.rotation.x=-Math.PI/2,J.position.set(E,.47,N),i.add(J),J});r.animated.push(J=>{V.forEach((ot,ct)=>{let bt=(J*.35+ct*.5)%1;ot.scale.setScalar(1+bt*2.6),ot.material.opacity=.45*(1-bt)}),P.scale.y=1+Math.sin(J*6)*.06}),n(E-1.65,N-1.65,E+1.65,N+1.65);let z=D("#d8d2c6",.8);[[E-3,N,Math.PI/2],[E+3,N,-Math.PI/2],[E,N-3,0]].forEach(([J,ot,ct],bt)=>{let It=new zt;It.position.set(J,0,ot),It.rotation.y=ct,i.add(It),t(e(1.7,.1,.5,.04),D("#b8875a",.6),0,.46,0,It),t(e(1.7,.4,.07,.03),D("#b8875a",.6),0,.72,-.24,It);for(let xt of[-.65,.65])t(e(.14,.42,.44,.03),z,xt,.21,0,It);let et=Math.cos(ct),ht=Math.sin(ct);for(let xt of[-.42,.42])s(`fb${bt+1}${xt<0?"a":"b"}`,J+xt*et,ot-xt*ht,ct,.5,{x:J+xt*et+ht*.7,z:ot-xt*ht+et*.7});n(J-.9*Math.abs(et)-.3*Math.abs(ht),ot-.9*Math.abs(ht)-.3*Math.abs(et),J+.9*Math.abs(et)+.3*Math.abs(ht),ot+.9*Math.abs(ht)+.3*Math.abs(et))});let nt=D("#8a5a3b",.8),$=[D("#4f9d5d",.85,{flatShading:!0}),D("#5fb36f",.85,{flatShading:!0}),D("#3f8a4f",.85,{flatShading:!0})];[[-12.4,16.4],[25,16.4],[24.9,11.2],[7.3,16.6]].forEach(([J,ot],ct)=>{t(new j(.12,.18,1.8,10),nt,J,.9,ot);let bt=en(140+ct);for(let It=0;It<6;It++)t(new Ke(1,1),$[It%3],J+(bt()-.5)*.9,2.1+bt()*.8,ot+(bt()-.5)*.9).scale.setScalar(.45+bt()*.25);n(J-.3,ot-.3,J+.3,ot+.3)});for(let[J,ot]of[[-8,17],[-.5,11.4],[5.6,11.4],[17,17],[23.2,11.4],[-12.6,11.2]])t(new j(.14,.18,.12,14),D("#2b2b33",.4),J,.06,ot),t(new j(.035,.035,2.1,8),D("#2b2b33",.4),J,1.1,ot),t(new Tt(.17,14,10),Ie("#fff1d0",1.6),J,2.25,ot,i,l),un(i,J,ot,1.4,"#ffe3b0",.22),n(J-.18,ot-.18,J+.18,ot+.18)}var zy=[.37,1.9,4.3,9.7,23.1];function By(i,t){let e=new Set,n=new Set,s=(r,o)=>{if(!(!r||typeof r!="object"||n.has(r)||o>4)){if(n.add(r),r.isObject3D){r.traverse(a=>e.add(a));return}if(!(r.isMaterial||r.isTexture||r.isBufferGeometry))for(let a of Object.keys(r))a!=="animated"&&s(r[a],o+1)}};for(let r of t||Object.keys(i))r!=="animated"&&s(i[r],1);return e}var Fy=i=>[i.visible,i.opacity,i.color&&i.color.getHex(),i.emissive&&i.emissive.getHex(),i.emissiveIntensity,i.map&&i.map.offset.x,i.map&&i.map.offset.y,i.map&&i.map.rotation].join("|");function Oy(i,t){let e=[];i.traverse(l=>{l.isMesh&&e.push(l)});let n=new Set;e.forEach(l=>[].concat(l.material).forEach(c=>n.add(c)));let s=()=>(i.updateMatrixWorld(!0),{m:new Map(e.map(l=>[l,l.matrixWorld.elements.join(",")+"|"+gf(l)])),mat:new Map([...n].map(l=>[l,Fy(l)]))}),r=s(),o=new Set,a=new Set;for(let l of zy){for(let f of t)try{f(l,.016)}catch{}let c=s();for(let f of e)c.m.get(f)!==r.m.get(f)&&o.add(f);for(let f of n)c.mat.get(f)!==r.mat.get(f)&&a.add(f)}return{movers:o,live:a}}function gf(i){for(let t=i;t;t=t.parent)if(!t.visible)return 0;return 1}var yf=i=>i.isMeshStandardMaterial&&!i.map&&!i.emissiveMap&&!i.normalMap&&!i.roughnessMap&&!i.alphaMap&&!i.aoMap&&!i.lightMap&&!i.bumpMap&&!i.envMap&&(!i.emissive||i.emissive.getHex()===0||!i.emissiveIntensity)&&!i.vertexColors&&!(i.userData&&Object.keys(i.userData).length);function ky(i){let t={plain:yf(i)};for(let e of["type","side","flatShading","vertexColors","toneMapped","roughness","metalness","emissiveIntensity","opacity","transparent","alphaTest","depthWrite","wireframe","fog","blending"])t[e]=i[e];for(let e of["emissive","specular"])i[e]&&i[e].getHex&&(t[e]=i[e].getHex());!t.plain&&i.color&&(t.color=i.color.getHex());for(let e of["map","emissiveMap","normalMap","roughnessMap","alphaMap","envMap","lightMap","aoMap","bumpMap"])t[e]=i[e]?i[e].uuid:null;return i.userData&&Object.keys(i.userData).length&&(t.ud=i.uuid),JSON.stringify(t)}function xf(i,t,{keep:e}={}){i.updateMatrixWorld(!0);let n=By(t,e),{movers:s,live:r}=Oy(i,t.animated||[]);i.updateMatrixWorld(!0);let o=new Map,a=0,l={},c=g=>{l[g]=(l[g]||0)+1};i.traverse(g=>{if(!g.isMesh)return;if(a++,g.isInstancedMesh||g.isSkinnedMesh)return c("instanced");if(n.has(g))return c("ref");if(s.has(g))return c("moves");if(!gf(g))return c("hidden");if(Object.keys(g.userData||{}).length||g.parent&&Object.keys(g.parent.userData||{}).length)return c("userData");if(Array.isArray(g.material))return c("multimat");let v=g.material;if(!v||r.has(v))return c("livemat");if(v.transparent||!v.visible||v.isShaderMaterial)return c("transparent");if(g.onBeforeRender!==De.prototype.onBeforeRender)return c("hook");let m=g.geometry;if(!m||!m.attributes.position||m.morphAttributes&&Object.keys(m.morphAttributes).length)return c("geo");let u=[ky(v),g.castShadow?1:0,g.receiveShadow?1:0,g.renderOrder].join("|");o.has(u)||o.set(u,{mat:v,plain:yf(v),cast:g.castShadow,recv:g.receiveShadow,order:g.renderOrder,items:[]}),o.get(u).items.push(g)});let f=0,h=0;for(let g of o.values()){if(g.items.length<2)continue;let v=!!g.mat.map,m=g.items.some(R=>!R.geometry.index),u=[];for(let R of g.items){let S=R.geometry;m&&S.index&&(S=S.toNonIndexed());let b=new Re,I=U=>(U.isInterleavedBufferAttribute,U.clone());if(b.setAttribute("position",I(S.attributes.position)),S.attributes.normal&&b.setAttribute("normal",I(S.attributes.normal)),v&&S.attributes.uv&&b.setAttribute("uv",I(S.attributes.uv)),!m&&S.index&&b.setIndex(S.index.clone()),b.attributes.normal||b.computeVertexNormals(),g.plain){let U=R.material.color,y=b.attributes.position.count,E=new Float32Array(y*3);for(let N=0;N<y;N++)E[N*3]=U.r,E[N*3+1]=U.g,E[N*3+2]=U.b;b.setAttribute("color",new ze(E,3))}b.applyMatrix4(R.matrixWorld),u.push(b),S!==R.geometry&&S.dispose()}let _=pi(u,!1);if(u.forEach(R=>R.dispose()),!_)continue;let x=g.mat;g.plain&&(x=g.mat.clone(),x.color=new Zt(1,1,1),x.vertexColors=!0,x.needsUpdate=!0);let M=new X(_,x);M.castShadow=g.cast,M.receiveShadow=g.recv,M.renderOrder=g.order,M.matrixAutoUpdate=!1,M.name="merged",i.add(M);for(let R of g.items)R.parent.remove(R),h++;f++}let d=[];i.traverse(g=>{g!==i&&g.type==="Group"&&!g.children.length&&!n.has(g)&&d.push(g)});for(let g of d)g.parent&&g.parent.remove(g);i.updateMatrixWorld(!0);let p=[...o.values()].map(g=>g.items.length).sort((g,v)=>v-g);return{before:a,removed:h,merged:f,why:l,groups:o.size,sizes:p.slice(0,12)}}var _f=new L,Gy=new mn,vf=new L,Ao=class extends De{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var zn=new re,Vy=new re,Co=class{constructor(t={}){let e=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:n,height:s}},this.render=function(m,u){let _=u.projectionMatrix.elements[5]*o;u.view&&u.view.enabled?(c.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,c.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let x,M;u.isOrthographicCamera&&(x=-(u.right+u.left)/2,M=(u.top+u.bottom)/2);let R=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,S=u.isOrthographicCamera?`scale( ${R} )scale(`+_+")translate("+h(x)+"px,"+h(M)+"px)"+d(u.matrixWorldInverse):`scale( ${R} )translateZ(`+_+"px)"+d(u.matrixWorldInverse),I=(u.isPerspectiveCamera?"perspective("+_+"px) ":"")+S+"translate("+r+"px,"+o+"px)";a.camera.style!==I&&(f.style.transform=I,a.camera.style=I),v(m,m,u,S)},this.setSize=function(m,u){n=m,s=u,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=u+"px",c.style.width=m+"px",c.style.height=u+"px",f.style.width=m+"px",f.style.height=u+"px"};function h(m){return Math.abs(m)<1e-10?0:m}function d(m){let u=m.elements;return"matrix3d("+h(u[0])+","+h(-u[1])+","+h(u[2])+","+h(u[3])+","+h(u[4])+","+h(-u[5])+","+h(u[6])+","+h(u[7])+","+h(u[8])+","+h(-u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(-u[13])+","+h(u[14])+","+h(u[15])+")"}function p(m){let u=m.elements;return"translate(-50%,-50%)"+("matrix3d("+h(u[0])+","+h(u[1])+","+h(u[2])+","+h(u[3])+","+h(-u[4])+","+h(-u[5])+","+h(-u[6])+","+h(-u[7])+","+h(u[8])+","+h(u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(u[13])+","+h(u[14])+","+h(u[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let u=0,_=m.children.length;u<_;u++)g(m.children[u])}function v(m,u,_,x){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let M=m.layers.test(_.layers)===!0,R=m.element;if(R.style.display=M===!0?"":"none",M===!0){m.onBeforeRender(e,u,_);let S;m.isCSS3DSprite?(zn.copy(_.matrixWorldInverse),zn.transpose(),m.rotation2D!==0&&zn.multiply(Vy.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(_f,Gy,vf),zn.setPosition(_f),zn.scale(vf),zn.elements[3]=0,zn.elements[7]=0,zn.elements[11]=0,zn.elements[15]=1,S=p(zn)):S=p(m.matrixWorld);let b=a.objects.get(m);if(b===void 0||b.style!==S){R.style.transform=S;let I={style:S};a.objects.set(m,I)}R.parentNode!==f&&f.appendChild(R),m.onAfterRender(e,u,_)}}for(let M=0,R=m.children.length;M<R;M++)v(m.children[M],u,_,x)}}};var fe=dt;function cc(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var Mf={idle:"\u2615",chat:"\u{1F4AC}",work:"\u{1F3E2}",image:"\u{1F3A8}",video:"\u{1F3AC}",web:"\u{1F50E}",doc:"\u{1F4C4}",away:"\u{1F319}"},Wy={"\u{1F44B}":"wave","\u{1F57A}":"dance","\u{1F389}":"cheer","\u{1F64C}":"cheer","\u2615":"drink"},Po={x1:-5.1,x2:1.1,z1:1.9,z2:7.1},Xy=120,qy={hug:.5,dance:.95,highfive:.62,cheers:.62,coffee:.68},Ef={highfive:"\u{1F64C}",hug:"\u{1F917}",cheers:"\u{1F942}",coffee:"\u2615",dance:"\u{1F483}"},We={x:12.5,z:12.5,face:.32},wf=()=>({x:We.x+Math.sin(We.face)*2,z:We.z+Math.cos(We.face)*2}),Yy={id:"npc",name:"Tr\u1EE3 l\xFD SIMI",shirt:"#0a5cc2",pants:"#142c5a",shoes:"#1d1d24",hair:"#2b1d14",hairStyle:"bob",accessory:"headset",accent:"#f5c518",skin:"#f1c9a5",outfit:"blazer",lapel:"#083d80"},hc={x:6,z:4,zoom:.31},fc={npc:{x:We.x,z:We.z,y:1.1,zoom:1.45},altar:{x:11.8,z:-8.4,y:1.2,zoom:1},fortune:{x:8.75,z:-9.2,y:1,zoom:1.15},bar:{x:Ro,z:-7.6,y:1,zoom:.95},dance:{x:-2,z:4.5,y:.2,zoom:1.05},cinema:{x:ac,z:-9,y:1.9,zoom:.95},game:{x:20.8,z:-4.4,y:.9,zoom:.95},zen:{x:8.4,z:2.2,y:.4,zoom:.92},garden:{x:8,z:14.2,y:.4,zoom:.62}};function dc(i){let t=i.avatar||{},e=0;for(let s of String(i.id||i.name||""))e=e*31+s.charCodeAt(0)>>>0;let n=s=>s[e%s.length];return{id:i.id,name:i.name,hair:t.hair||n(["#2b1d14","#5a3a1e","#1a1a1a","#7a2e2e","#b07a3c","#3b3b46"]),skin:t.skin||n(["#f1c9a5","#e2ae84","#f6d7bd","#ebbf98","#d9a074"]),shirt:t.shirt||n(["#0a78f0","#2fc1a5","#f5b51b","#4a3592","#e1262d","#142c5a","#ff8a3d"]),pants:t.pants,shoes:t.shoes,accent:t.accent,hairStyle:t.hairStyle||n(["short","long","spiky","bun","bob","curly","ponytail"]),accessory:t.accessory||"none",outfit:t.outfit||"none"}}var Zy=2,bs=()=>Math.min(window.devicePixelRatio||1,Zy);function Tf(i){let t=new fs({canvas:i,antialias:(window.devicePixelRatio||1)<1.5,alpha:!0,powerPreference:"high-performance"});if(!t.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");return t.setPixelRatio(bs()),t.shadowMap.enabled=!0,t.shadowMap.type=_s,t.toneMapping=tr,t.outputColorSpace=_e,t.setClearColor(0,0),t}var Sf=new hi(.34,24),bf=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(60,40,20,.42)"),e.addColorStop(.6,"rgba(60,40,20,.18)"),e.addColorStop(1,"rgba(60,40,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ne({map:new tn(i),transparent:!0,depthWrite:!1})})();function Rf(i,t=2048,e={x:0,z:0},n={x:17,z:14}){i.add(new ms("#ffffff","#d8c6aa",1.05),new gs("#ffffff",.18));let s=new fi("#fff0dc",2.1);s.position.set(e.x-6,15,e.z+10),s.target.position.set(e.x,0,e.z),s.castShadow=!0,s.shadow.mapSize.set(t,t),Object.assign(s.shadow.camera,{left:-n.x,right:n.x,top:n.z,bottom:-n.z,near:1,far:50}),s.shadow.bias=-5e-4,s.shadow.normalBias=.03,s.shadow.radius=2.5;let r=new fi("#dbe8ff",.5);r.position.set(9,7,-3),i.add(s,s.target,r)}var hr=class{constructor(t,e={}){this.root=t,this.opts=e,this.people=new Map,this.bubbles=new Set,this.emotes=new Set,this.keys=new Set,this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas",n.tabIndex=0,this.renderer=Tf(n),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.cssBox=document.createElement("div"),this.cssBox.className="office3d-css",n.style.position="relative",n.style.zIndex="1",this.layer.style.zIndex="2",this.wrap.append(this.cssBox,n,this.layer),t.appendChild(this.wrap),this.canvas=n,this.scene=new li,this.crowd=new bo(this.scene,{cap:300,blobGeo:Sf,blobMat:bf}),this.v1=new L,Rf(this.scene,2048,{x:(fe.minX+fe.maxX)/2,z:(fe.minZ+fe.maxZ)/2},{x:(fe.maxX-fe.minX)/2+3,z:(fe.maxZ-fe.minZ)/2+4}),this.world=mf(this.scene),this.pool=(this.world.poolTables||[]).map(o=>({...o,state:null,anim:null})),this.games=new Map,this.seats=new Map(this.world.seats.map(o=>[o.id,o])),this.follow=!0,this.cam=new ai(-10,10,6,-6,.1,100),this.view={az:.72,el:.7,zoom:.85,target:new L(0,.6,.6)},this.goal={az:.72,el:.7,zoom:.85},this.perf={acc:0,n:0,dpr:bs(),slow:0,fast:0,ceil:bs(),min:1},this.nav=new Es(fe.minX,fe.minZ,fe.maxX,fe.maxZ,.2),this.nav.blockRect(fe.minX,fe.minZ,fe.maxX,fe.minZ+.25,.15),this.nav.blockRect(fe.minX,fe.minZ,fe.minX+.25,fe.maxZ,.15),this.nav.blockRect(fe.maxX-.2,fe.minZ,fe.maxX,fe.maxZ,.15),this.nav.blockRect(fe.minX,fe.maxZ-.2,fe.maxX,fe.maxZ,.15);for(let o of this.world.obstacles)this.nav.blockRect(...o);if(!e.noMerge&&!window.VP_NO_MERGE)try{this.mergeStats=xf(this.scene,this.world,{keep:["cinema","clickables","poolTables","seatMeshes","seats","ideasFlag"]})}catch(o){this.mergeStats={error:String(o&&o.message||o)}}this.buildNpcDesk();for(let o of this.pool)this.setTableBalls(o,null);this.cat=new ws(this.scene,this.nav),this.cat.onFx=o=>this.fx(null,o),this.setNpc(null),this.skew=0,this.light=!1,this.capFps=!1,this.lastInput=performance.now(),this.raycaster=new xs,this.ndc=new Mt,this.tmpV=new L,this.frustum=new Ai,this.projM=new re,this.sph=new Dn(new L,1.1),this.floorPlane=new wn(new L(0,1,0),0),this.marker=new X(new Nn(.16,.24,28),new ne({color:"#0a78f0",transparent:!0,opacity:0})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.02,this.scene.add(this.marker);let s=wf();this.npcRing=new zt,this.npcRing.position.set(s.x,.025,s.z);for(let[o,a,l]of[[.55,.7,.85],[.95,1.02,.45]]){let c=new X(new Nn(o,a,48),new ne({color:"#f5c518",transparent:!0,opacity:l,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.userData.o=l,this.npcRing.add(c)}this.scene.add(this.npcRing),this.stick={x:0,y:0},this.bindInput(),e.mobile&&(this.renderer.shadowMap.enabled=!1,this.perf.noShadow=!0,this.perf.min=1.25,this.goal.zoom=this.view.zoom=.7),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();try{let o=this.renderer.getContext(),a=o.getExtension("WEBGL_debug_renderer_info");this.gpu=String(a?o.getParameter(a.UNMASKED_RENDERER_WEBGL):o.getParameter(o.RENDERER)||""),/swiftshader|llvmpipe|softpipe|software|basic render/i.test(this.gpu)&&!e.keepFull&&(this.softGpu=!0,this.setLight(!0),this.capFps=!0)}catch{}this.clock=new ys;let r=o=>{if(this.dead||(this.raf=requestAnimationFrame(r),this.paused))return;let a=window.VP_WIN;if(this.bg=!!(a&&!a.focused)&&performance.now()-(this.lastInput||0)>3e3,a&&a.minimized)return;let l=this.bg?80:this.slowMode()?31:0;l&&o-(this.lastTs||0)<l||(this.lastTs=o,this.frame())};r()}slowMode(){return this.capFps||this.light||this.opts.mobile&&performance.now()-(this.lastInput||0)>4e4}poke(){this.lastInput=performance.now()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.cssW||800,a=this.cssH||500,l=o/a,c=Math.max(8.4,15.6/l)/n;Object.assign(this.cam,{left:-c*l/2,right:c*l/2,top:c/2,bottom:-c/2}),this.cam.updateProjectionMatrix()}lookAt(t){let e=fc[t];return e?(this.follow=!1,this.panTo=new L(e.x,.6,e.z),Object.assign(this.goal,{zoom:e.zoom,az:.72,el:.7}),!0):!1}placeScreen(t){let e=fc[t];if(!e)return null;let n=this.project(this.tmpV.set(e.x,e.y,e.z)),s=this.canvas.getBoundingClientRect();return{x:s.left+n.x,y:s.top+n.y,r:Math.max(70,Math.min(170,110*this.view.zoom))}}resetView(){Object.assign(this.goal,{az:.72,el:.7,zoom:.85}),this.follow=!0}overview(){this.follow=!1,this.goal.zoom=hc.zoom,this.goal.el=.82,this.panTo=new L(hc.x,.6,hc.z)}focusSelf(){this.follow=!0,this.goal.zoom=.85,this.panTo=null}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.cssW=e,this.cssH=n,this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.cssRenderer&&this.cssRenderer.setSize(e,n),this.updateCamera()}setCinemaFrame(t){let e=this.world.cinema;if(e){if(this.cinemaObj&&(this.cssScene.remove(this.cinemaObj),this.cinemaObj.element.remove(),this.cinemaObj=null),t){this.cssRenderer||(this.cssRenderer=new Co({element:this.cssBox}),this.cssScene=new li,this.cssRenderer.setSize(this.cssW||800,this.cssH||500));let n=1280;t.style.width=n+"px",t.style.height=Math.round(n*e.h/e.w)+"px";let s=new Ao(t);s.position.set(e.x,e.y,e.z),s.scale.setScalar(e.w/n),this.cssScene.add(s),this.cinemaObj=s}e.idle.visible=!t,e.hole.visible=!!t}}viewScreen(t=0){let e=this.world.cinema;if(!e)return;let n=1.25,s=this.cssW||800,r=this.cssH||500,o=Math.max(8.4,15.6/(s/r))/n/r;this.follow=!1,this.panTo=new L(e.x-t*o,.6,e.z+3.2),Object.assign(this.goal,{az:.05,el:.32,zoom:n})}ray(t,e){let n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam),this.raycaster}pickPerson(t,e){let n=this.ray(t,e),s=null;for(let r of this.people.values()){let o=n.intersectObject(r.person.root,!0)[0];o&&(!s||o.distance<s.d)&&(s={p:r,d:o.distance})}return s&&s.p}pickNpc(t,e){return!!this.npc&&this.ray(t,e).intersectObjects([this.npc.person.root,this.npcDesk],!0).length>0}pickCat(t,e){return this.ray(t,e).intersectObject(this.cat.root,!0).length>0}pickTable(t,e){if(!this.pool.length)return-1;let n=this.ray(t,e).intersectObjects(this.pool.map(s=>s.hit),!1)[0];return n?n.object.userData.poolTable:-1}pickAction(t,e){let n=this.world.clickables||[];if(!n.length)return null;let s=this.ray(t,e).intersectObjects(n,!1)[0];return s?s.object.userData.action:null}pickSeat(t,e){let n=this.ray(t,e).intersectObjects(this.world.seatMeshes,!1)[0];return n?this.seats.get(n.object.userData.seatId):null}seatTaken(t,e){return[...this.people.values()].some(n=>n.m.id!==e&&(n.seat===t||n.pendingSeat===t))}pickFloor(t,e){let n=new L;return this.ray(t,e).ray.intersectPlane(this.floorPlane,n)?n:null}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",c=>c.preventDefault());let n=new Map,s=null,r=()=>{let[c,f]=[...n.values()];return Math.hypot(c.x-f.x,c.y-f.y)||1};t.addEventListener("pointerdown",c=>{if(this.poke(),t.focus(),t.setPointerCapture(c.pointerId),n.set(c.pointerId,{x:c.clientX,y:c.clientY}),n.size===2){s={d:r(),zoom:this.goal.zoom},e&&(e.moved=!0);return}e={x:c.clientX,y:c.clientY,az:this.goal.az,el:this.goal.el,moved:!1}});let o=c=>{n.delete(c.pointerId),n.size<2&&(s=null)};t.addEventListener("pointercancel",c=>{o(c),e=null});let a=0,l=0;t.addEventListener("pointermove",c=>{if(n.has(c.pointerId)&&n.set(c.pointerId,{x:c.clientX,y:c.clientY}),s&&n.size>=2){this.goal.zoom=Math.max(.28,Math.min(2.6,s.zoom*r()/s.d));return}if(e){let p=c.clientX-e.x,g=c.clientY-e.y;Math.hypot(p,g)>5&&(e.moved=!0),e.moved&&(this.goal.az=Math.max(.05,Math.min(1.52,e.az-p*.005)),this.goal.el=Math.max(.34,Math.min(1.28,e.el+g*.0035)),t.style.cursor="grabbing");return}let f=c.clientX,h=c.clientY,d=()=>{a=performance.now(),t.style.cursor=this.pickPerson(f,h)||this.pickNpc(f,h)||this.pickCat(f,h)||this.pickTable(f,h)>=0||this.pickAction(f,h)||this.pickSeat(f,h)?"pointer":"crosshair"};clearTimeout(l),performance.now()-a>80?d():l=setTimeout(d,90)}),t.addEventListener("pointerup",c=>{if(o(c),e&&!e.moved){let f=this.pickPerson(c.clientX,c.clientY),h=!f&&this.pickNpc(c.clientX,c.clientY),d=!f&&!h&&this.pickCat(c.clientX,c.clientY),p=!f&&!h&&!d?this.pickTable(c.clientX,c.clientY):-1,g=!f&&!h&&!d&&p<0?this.pickAction(c.clientX,c.clientY):null,v=!f&&!d&&!h&&p<0&&!g&&this.pickSeat(c.clientX,c.clientY);if(g==="fortune")this.walkSelf(cr.x,cr.z+.9,!0),this.opts.onFortune&&this.opts.onFortune();else if(g==="ideas")this.walkSelf(lc.x+.6,dt.minZ+1.3,!0),this.opts.onIdeas&&this.opts.onIdeas();else if(h)this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(c.clientX,c.clientY);else if(p>=0)this.opts.onTableClick&&this.opts.onTableClick(p,c.clientX,c.clientY);else if(d)this.opts.onCatClick&&this.opts.onCatClick(c.clientX,c.clientY);else if(f&&!f.me)this.opts.onPersonClick&&this.opts.onPersonClick(f.m.id,c.clientX,c.clientY);else if(f&&f.me)this.opts.onSelfClick&&this.opts.onSelfClick(c.clientX,c.clientY);else if(v)this.sitSelf(v.id);else{let m=this.pickFloor(c.clientX,c.clientY);m&&this.walkSelf(m.x,m.z,!0)}}e=null,t.style.cursor="crosshair"}),t.addEventListener("wheel",c=>{c.preventDefault(),this.goal.zoom=Math.max(.28,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,c.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dblclick",c=>{this.pickPerson(c.clientX,c.clientY)||this.resetView()}),t.addEventListener("keydown",c=>{let f=c.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(f)&&(this.keys.add(f),c.preventDefault())}),t.addEventListener("keyup",c=>this.keys.delete(c.key.toLowerCase())),t.addEventListener("blur",()=>this.keys.clear())}setMembers(t){let e=new Set;t.forEach((n,s)=>{e.add(n.id);let r=this.people.get(n.id),o=dc(n),a=JSON.stringify(o);if(r&&r.sig!==a&&(this.scene.remove(r.person.root),r.person=this.makePerson(o,s,r.pos,r.facing),r.person.dance=r.dance||null,r.sig=a),!r){let l=this.freeSpot(n.pos?n.pos.x:s%5*1.4-3,n.pos?n.pos.z:1+Math.floor(s/5));r={m:n,me:!!n.me,pos:l,path:[],facing:Math.random()*6,sig:a,speed:1.9,seat:null,pendingSeat:null},r.person=this.makePerson(o,s,r.pos,r.facing),this.makePlate(r),this.people.set(n.id,r);let c=n.pos&&n.pos.seat&&this.seats.get(n.pos.seat);c&&!this.seatTaken(c.id,n.id)&&this.sitNow(r,c)}r.m=n,r.me=!!n.me,!r.me&&(n.dance||null)!==(r.dance||null)&&!r.meet&&this.setDance(n.id,n.dance||null),this.updatePlate(r)});for(let[n,s]of[...this.people])e.has(n)||this.removePerson(n,s)}makePerson(t,e,n,s){let r=new Li(t,e);return r.root.userData.character=!0,r.root.position.set(n.x,0,n.z),r.root.rotation.y=s||0,r.root.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),r.blob=new X(Sf,bf),r.blob.rotation.x=-Math.PI/2,r.blob.renderOrder=1,r.root.add(r.blob),this.scene.add(r.root),r}removePerson(t,e){this.scene.remove(e.person.root),e.plate.remove(),this.people.delete(t);for(let n of[...this.bubbles])n._p===e&&(n.remove(),this.bubbles.delete(n))}freeSpot(t,e){let n=this.nav.toCell(Math.max(fe.minX+.6,Math.min(fe.maxX-.6,t)),Math.max(fe.minZ+.6,Math.min(fe.maxZ-.6,e))),s=this.nav.nearestFree(n.c,n.r);return this.nav.center(s.c,s.r)}makePlate(t){let e=document.createElement("div");e.className="plate3d lobby"+(t.me?" me":""),e.innerHTML='<span class="pl-bubble" hidden></span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title"></span></span>',e.addEventListener("click",n=>{let s=e.getBoundingClientRect();t.me?this.opts.onSelfClick&&this.opts.onSelfClick(s.left+s.width/2,s.bottom):this.opts.onPersonClick&&this.opts.onPersonClick(t.m.id,s.left+s.width/2,s.bottom),n.stopPropagation()}),this.layer.append(e),t.plate=e}updatePlate(t){let e=t.m,n=e.status||{};t.plate.querySelector(".pl-name").textContent=(t.me?"\u2B50 ":"")+e.name,t.plate.querySelector(".pl-title").textContent=t.game?"\u{1F3B1} \u0110ang ch\u01A1i bida":t.dance?"\u{1F483} \u0110ang nh\u1EA3y":n.text?new RegExp("^\\p{Extended_Pictographic}","u").test(n.text)?n.text:`${Mf[n.activity]||"\u2615"} ${n.text}`:`${Mf[n.activity]||"\u2615"} ${e.teamName||""}`.trim(),t.plate.classList.toggle("dancing",!!t.dance),t.plate.classList.toggle("busy",!!n.activity&&!["idle","away"].includes(n.activity)),t.busy=!!n.activity&&!["idle","away"].includes(n.activity);let s=t.plate.querySelector(".pl-bubble");if(s){let r=t.busy&&!t.game&&!t.dance&&n.task?String(n.task):"";s.dataset.t!==r&&(s.dataset.t=r,s.textContent=r,s.hidden=!r)}t.plate.title=`${e.name} \xB7 ${e.teamName||""}${e.role?" \xB7 "+e.role:""}`}standUp(t){t.seat=null,t.pendingSeat=null,t.sitting=!1,t.seatKind=null,t.person&&(t.person.bowPh=0)}stopMoves(t){t.meet=null,t.dance&&(t.dance=null,t.person.dance=null,this.updatePlate(t),t.me&&this.opts.onDance&&this.opts.onDance(null,!0))}sitNow(t,e){t.path=[],t.pos={x:e.x,z:e.z},t.facing=e.face,t.seat=e.id,t.pendingSeat=null,t.sitting=!0,t.seatH=e.h,t.seatKind=e.kind||null,e.kind==="zen"&&(t.zenFx=performance.now()/1e3+2+Math.random()*3,t.me&&this.opts.onToast&&this.opts.onToast("\u{1F9D8} H\xEDt v\xE0o th\u1EADt ch\u1EADm\u2026 th\u1EDF ra nh\u1EB9 nh\xE0ng. B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.")),e.kind==="kneel"&&(t.zenFx=performance.now()/1e3+1.5+Math.random()*2,t.seatTheme=e.theme||null,t.me&&this.opts.onToast&&this.opts.onToast(e.theme==="thantai"?"\u{1F4B0} Th\u1EA7n T\xE0i ph\xF9 h\u1ED9: kh\xE1ch v\xE0o nh\u01B0 n\u01B0\u1EDBc, ch\u1ED1t \u0111\u01A1n \u1EA7m \u1EA7m, doanh s\u1ED1 x10! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.":"\u{1F64F} Th\xE0nh t\xE2m kh\u1EA5n: c\u1EA7u kh\xF4ng bug, token \u0111\u1EA7y kho, deadline l\xF9i! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy."))}walk(t,e,n){this.standUp(t),this.stopMoves(t);let s=this.freeSpot(e,n);return t.path=this.nav.find({x:t.pos.x,z:t.pos.z},s),this.pace(t),s}pace(t){let e=0,n=t.pos;for(let s of t.path)e+=Math.hypot(s.x-n.x,s.z-n.z),n=s;return t.speed=e>9?3.4:1.9,e}walkToSeat(t,e){this.standUp(t),this.stopMoves(t),t.pendingSeat=e.id,t.path=[...this.nav.find({x:t.pos.x,z:t.pos.z},this.freeSpot(e.approach.x,e.approach.z)),{x:e.x,z:e.z}],this.pace(t)}moveMember(t,e,n,s){let r=this.people.get(t);if(!r||r.me)return;let o=s&&this.seats.get(s);o?this.walkToSeat(r,o):this.walk(r,e,n)}walkSelf(t,e,n){let s=this.self();if(!s)return;let r=this.walk(s,t,e);n&&(this.marker.position.set(r.x,.02,r.z),this.marker.material.opacity=.9),this.follow=!0,this.opts.onMove&&this.opts.onMove({x:r.x,z:r.z,seat:null})}sitSelf(t){let e=this.self(),n=this.seats.get(t);if(!(!e||!n)&&e.seat!==t){if(this.seatTaken(t,e.m.id)){this.opts.onToast&&this.opts.onToast("Gh\u1EBF n\xE0y c\xF3 ng\u01B0\u1EDDi ng\u1ED3i r\u1ED3i \u{1F605}");return}this.walkToSeat(e,n),this.marker.position.set(n.x,.02,n.z),this.marker.material.opacity=.9,this.follow=!0,this.opts.onMove&&this.opts.onMove({x:n.x,z:n.z,seat:t})}}self(){return[...this.people.values()].find(t=>t.me)}selfPos(){let t=this.self();return t?{...t.pos,seat:t.seat}:null}say(t,e,n=5200){let s=t==="npc"?this.npc:this.people.get(t);if(!s)return;for(let o of[...this.bubbles])o._p===s&&(o.remove(),this.bubbles.delete(o));let r=document.createElement("div");r.className="bubble3d k-chat",r.style.zIndex="5000",r.textContent=e.length>110?e.slice(0,109)+"\u2026":e,r._p=s,this.layer.appendChild(r),this.bubbles.add(r),s.person.say(Math.min(n,2400)),requestAnimationFrame(()=>r.classList.add("show")),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(r),r.remove()},220)},n)}emote(t,e){let n=this.people.get(t);if(!n)return;let s=Wy[e]||(/❤|💖|😍|🥰/.test(e)?"wave":"cheer");n.person.doAction(s,s==="dance"?2600:1800),s==="dance"&&(n.danceUntil=performance.now()/1e3+2.6);let r=document.createElement("div");r.className="emote",r.textContent=e,r._p=n,this.layer.appendChild(r),this.emotes.add(r),setTimeout(()=>{this.emotes.delete(r),r.remove()},1700)}fx(t,e,n=1700){let s=document.createElement("div");s.className="emote",s.textContent=e,s._p=t,s._cat=!t,this.layer.appendChild(s),this.emotes.add(s),setTimeout(()=>{this.emotes.delete(s),s.remove()},n)}buildNpcDesk(){let t=new zt;t.position.set(We.x,0,We.z),t.rotation.y=We.face;let e=(M,R=.6,S={})=>new Kt({color:M,roughness:R,...S}),n=[],s=(M,R,S,b,I,U=!0)=>{let y=new X(M,R);return y.position.set(S,b,I),y.castShadow=U,y.receiveShadow=!0,t.add(y),n.push(y),y},r=(M,R,S)=>{let b=new $s,I=24;for(let U=0;U<=I;U++){let y=-S+2*S*U/I,E=[Math.sin(y)*R,-Math.cos(y)*R];U===0?b.moveTo(...E):b.lineTo(...E)}for(let U=I;U>=0;U--){let y=-S+2*S*U/I;b.lineTo(Math.sin(y)*M,-Math.cos(y)*M)}return b},o=(M,R)=>{let S=new fo(M,{depth:R,bevelEnabled:!1,curveSegments:24});return S.rotateX(-Math.PI/2),S};s(o(r(.62,.92,.85),.92),e("#ffffff",.45),0,0,0),s(o(r(.6,.98,.88),.05),e("#c79a6a",.35),0,.92,0),s(o(r(.925,.94,.85),.04),e("#0a78f0",.4,{emissive:"#2f8cf0",emissiveIntensity:1.2}),0,.16,0,!1);let a=document.createElement("canvas");a.width=512,a.height=128;let l=a.getContext("2d");l.fillStyle="#0a5cc2",l.fillRect(0,0,512,128),l.fillStyle="#ffd34d",l.font="900 54px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("L\u1EC4 T\xC2N",256,50),l.fillStyle="#ffffff",l.font="800 28px Nunito, sans-serif",l.fillText("H\u1ECFi Tr\u1EE3 l\xFD SIMI",256,100);let c=new tn(a);c.colorSpace=_e,c.anisotropy=4;let f=new X(new ie(.62,.155),new ne({map:c}));f.position.set(0,.6,.935),t.add(f);let h=s(new Et(.42,.28,.03),e("#1d2b4f",.4),-.42,1.18,.62);h.rotation.y=Math.PI+.5,s(new Et(.06,.18,.06),e("#c2cad6",.3),-.42,1.03,.64),s(new j(.06,.07,.02,16),e("#c2cad6",.3,{metalness:.6}),.36,.98,.78,!1),s(new Tt(.05,14,8,0,Math.PI*2,0,Math.PI/2),e("#f5c518",.25,{metalness:.6}),.36,.99,.78,!1),s(new j(.04,.035,.1,12),e("#0a78f0",.4),.55,1.02,.6,!1),s(new Et(2.5,1.85,.1),e("#0a5cc2",.55),0,.925,-.82),s(new Et(2.6,.08,.16),e("#ffffff",.5),0,1.89,-.82);let d=document.createElement("canvas");d.width=1024,d.height=720;let p=d.getContext("2d"),g=p.createLinearGradient(0,0,1024,720);g.addColorStop(0,"#0a78f0"),g.addColorStop(1,"#0a4aa8"),p.fillStyle=g,p.fillRect(0,0,1024,720),p.fillStyle="rgba(255,255,255,.08)";for(let M=0;M<7;M++)p.beginPath(),p.arc(120+M*150,640-M%2*60,90,0,7),p.fill();p.fillStyle="#ffd34d",p.beginPath(),p.arc(512,250,150,0,7),p.fill(),p.fillStyle="#0a4aa8",p.font="900 230px Nunito, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("?",512,262),p.fillStyle="#ffffff",p.font="900 96px Nunito, sans-serif",p.fillText("Tr\u1EE3 l\xFD SIMI",512,500),p.font="800 46px Nunito, sans-serif",p.fillStyle="rgba(255,255,255,.85)",p.fillText("H\u01B0\u1EDBng d\u1EABn \xB7 M\u1EB9o AI \xB7 H\u1ECFi \u0111\xE1p",512,590);let v=new tn(d);v.colorSpace=_e,v.anisotropy=4;let m=new X(new ie(2.36,1.66),new ne({map:v,toneMapped:!1}));m.position.set(0,.94,-.765),t.add(m);for(let M of[-1,1]){s(new j(.2,.15,.42,16),e("#f6f1e8",.6),M*1.5,.21,-.7);for(let R=0;R<4;R++)s(new Ke(.2,1),e(R%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),M*1.5+(R%2?.08:-.08),.6+R*.17,-.7+(R>1?.06:-.06)).scale.setScalar(1-R*.12)}this.scene.add(t),this.npcDesk=t;let u=Math.cos(We.face),_=Math.sin(We.face),x=[[-1.75,-.95],[1.75,-.95],[-1,1],[1,1],[-1.75,.2],[1.75,.2]].map(([M,R])=>[We.x+M*u+R*_,We.z-M*_+R*u]);this.nav.blockRect(Math.min(...x.map(M=>M[0])),Math.min(...x.map(M=>M[1])),Math.max(...x.map(M=>M[0])),Math.max(...x.map(M=>M[1])),.05)}setNpc(t){let e={...Yy},n=JSON.stringify(e);if(!this.npc){let s=document.createElement("div");s.className="plate3d lobby npc",s.innerHTML='<span class="npc-q">?</span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title">B\u1EA5m \u0111\u1EC3 h\u1ECFi m\xECnh</span></span>',s.addEventListener("click",r=>{let o=s.getBoundingClientRect();this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(o.left+o.width/2,o.bottom),r.stopPropagation()}),this.layer.append(s),this.npc={plate:s,facing:We.face,pos:{x:We.x-Math.sin(We.face)*.08,z:We.z-Math.cos(We.face)*.08},m:{id:"npc"}}}this.npc.sig!==n&&(this.npc.person&&this.scene.remove(this.npc.person.root),this.npc.person=this.makePerson(e,7,this.npc.pos,this.npc.facing),this.npc.person.root.scale.setScalar(1.06),this.npc.sig=n),this.npc.plate.querySelector(".pl-name").textContent=t&&t.name?t.name:"Tr\u1EE3 l\xFD SIMI"}npcWave(){this.npc&&this.npc.person.doAction("wave",1500)}goNpc(){let t=wf(),e=this.self();return e&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<.6&&!e.path.length?(this.focusSelf(),!0):(this.walkSelf(t.x,t.z,!0),this.focusSelf(),!1)}nearNpc(){let t=this.self();return!!(t&&this.npc&&Math.hypot(t.pos.x-this.npc.pos.x,t.pos.z-this.npc.pos.z)<2.6&&!t.path.length)}npcScreen(){if(!this.npc)return null;let t=this.project(this.tmpV.set(this.npc.pos.x,1.6,this.npc.pos.z));return{x:t.x,y:t.y,w:this.cssW,h:this.cssH}}npcSay(t,e=5200){this.npc&&(this.npc.lastSay=t,this.say("npc",t,e))}setTableBalls(t,e){let n=window.VPPool,s=e||(n?n.rack().balls:null);if(!s){t.balls.visible=!1;return}let r=this._m||(this._m=new re),o=!Array.isArray(s);for(let a=0;a<16;a++){let l=o?s[a*3]:s[a][0],c=o?s[a*3+1]:s[a][1],f=o?s[a*3+2]:s[a][2],h=t.x-Ss.w/2+c/500*Ss.w,d=t.z-Ss.l/2+l/1e3*Ss.l;r.makeTranslation(h,f?-1:.892,d),t.balls.setMatrixAt(a,r)}t.balls.instanceMatrix.needsUpdate=!0,t.balls.visible=!0}setGames(t){let e=new Map;for(let n of t||[])n.players.forEach((s,r)=>e.set(s,{table:n.table,idx:r}));for(let n of this.pool){let s=(t||[]).find(r=>r.table===n.index);s&&!n.anim&&(n.state=s.state?s.state.balls:null,this.setTableBalls(n,n.state))}this.games=e;for(let n of this.people.values()){let s=e.get(n.m.id)||null;!!s!=!!n.game?(n.game=s,s||(n.person.holdCue=!1),this.updatePlate(n)):n.game=s}}goToTable(t,e){let n=this.pool[t];if(!n)return;let s=n.spots[e%2];this.walkSelf(s.x,s.z,!0)}poolCue(t){let e=this.people.get(t);e&&e.person.doAction("cue",900)}poolShot(t,e,n,s,r){let o=this.pool[t];if(!o)return;this.poolCue(e);let a=window.VPPool;if(a&&n)try{o.anim={frames:a.simulate(n,s).frames,t0:performance.now(),end:r.balls};return}catch{}o.state=r.balls,this.setTableBalls(o,o.state)}poolEnd(t){let e=this.pool[t];e&&(clearTimeout(e.resetT),e.resetT=setTimeout(()=>{e.anim||(e.state=null,this.setTableBalls(e,null))},6e3))}setIdeas(t){let e=this.world||{};e.ideasBoard&&e.ideasBoard.draw(t?{summary:t}:null);let n=t?Object.values(t).reduce((s,r)=>s+(r.fresh||0),0):0;e.ideasFlag&&(e.ideasFlag.rotation.z=n?0:-Math.PI/2+.15)}setSkew(t){this.skew=Number(t)||0}setCat(t){this.cat.command(t,this.skew)}beat(){return(Date.now()+this.skew)/1e3*Xy/60}setDance(t,e){let n=this.people.get(t);n&&(n.dance=e||null,n.person.dance=n.dance,e&&n.pendingSeat&&(n.pendingSeat=null,n.path=[]),this.updatePlate(n))}danceSelf(t){let e=this.self();e&&(this.setDance(e.m.id,t),this.opts.onDance&&this.opts.onDance(t||null,!1))}onFloor(t){return!!t&&t.pos.x>Po.x1&&t.pos.x<Po.x2&&t.pos.z>Po.z1&&t.pos.z<Po.z2}interact(t){let e=this.people.get(t.a),n=this.people.get(t.b);if(!e||!n||e===n)return;(t.kind==="hug"||t.kind==="dance")&&n.sitting&&this.standUp(n);let s=Math.atan2(e.pos.x-n.pos.x,e.pos.z-n.pos.z)||.6,r=qy[t.kind]||.65,o=this.freeSpot(n.pos.x+Math.sin(s)*r,n.pos.z+Math.cos(s)*r);this.standUp(e),e.path=this.nav.find({x:e.pos.x,z:e.pos.z},o);let a=this.pace(e);e.meet={other:n,kind:t.kind,style:t.style,deadline:performance.now()/1e3+Math.max(7,a/e.speed+3)},e.me&&(this.follow=!0)}startMeet(t,e){let n=e.other;t.path=[],t.facing=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),n.sitting||(n.facing=Math.atan2(t.pos.x-n.pos.x,t.pos.z-n.pos.z));let s=e.kind;if(s==="coffee")t.person.doAction("give",1500),setTimeout(()=>{this.people.has(n.m.id)&&n.person.doAction("drink",2400)},1100);else if(s==="dance")for(let r of[t,n])r.dance=e.style||"groove",r.person.dance=r.dance,this.updatePlate(r);else for(let r of[t,n])r.person.doAction(s,s==="hug"?2800:s==="cheers"?2300:1700);this.fx(t,Ef[s]||"\u2728"),(s==="hug"||s==="highfive")&&this.fx(n,Ef[s])}setQuality(t){this.quality=t==="light"||t==="high"?t:"auto",this.quality==="high"&&(this.capFps=!1,this.perf.noShadow=!1),this.setLight(this.quality==="light")}setLight(t){this.light=!!t;let e=t?1:bs();this.perf.dpr=e,this.perf.ceil=e,this.renderer.setPixelRatio(e);let n=!t&&!this.perf.noShadow;this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(s=>{s.material&&[].concat(s.material).forEach(r=>{r.needsUpdate=!0})})),this.resize()}frame(){let t=this.clock.getDelta(),e=Math.min(.05,t),n=this.t=(this.t||0)+e,s=performance.now()/1e3;for(let u of this.world.animated)u(n,e);for(let u of this.pool){if(!u.anim)continue;let _=Math.floor((performance.now()-u.anim.t0)/(1e3/60));_>=u.anim.frames.length-1?(u.state=u.anim.end,u.anim=null,this.setTableBalls(u,u.state)):this.setTableBalls(u,u.anim.frames[_])}let r=this.beat();this.cat.update(e,s,{posOf:u=>{let _=this.people.get(u);return _&&_.pos}}),this.keyboardMove(e),this.marker.material.opacity=Math.max(0,this.marker.material.opacity-e*.8),this.projM.multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projM);let o=this.people.size>24;this.lodTick=!this.lodTick;let a=this.quality==="high"?this.people.size>40?38:0:this.light||this.softGpu?this.people.size>8?90:0:this.people.size>14?60:0;this.crowd.begin();for(let u of this.people.values()){let _=!1;if(u.path.length){let y=u.path[0],E=y.x-u.pos.x,N=y.z-u.pos.z,B=Math.hypot(E,N),P=u.speed*e;if(B<=P){if(u.pos.x=y.x,u.pos.z=y.z,u.path.shift(),!u.path.length&&u.pendingSeat){let V=this.seats.get(u.pendingSeat);V&&this.sitNow(u,V)}}else u.pos.x+=E/B*P,u.pos.z+=N/B*P;u.meet&&s>u.meet.deadline&&(u.path=[]),B>.001&&(u.facing=cc(u.facing,Math.atan2(E,N),1-Math.exp(-e*12))),_=u.path.length>0}else u.keyMove&&(_=!0);if(u.meet&&!u.path.length){let y=u.meet;u.meet=null,this.startMeet(u,y)}if(u.game){let y=this.pool[u.game.table]&&this.pool[u.game.table].spots[u.game.idx%2],E=y&&!_&&Math.hypot(u.pos.x-y.x,u.pos.z-y.z)<.45;u.person.holdCue=!!E,E&&(u.facing=cc(u.facing,y.face,1-Math.exp(-e*8)))}u.danceUntil&&s<u.danceUntil&&!_&&(u.facing+=e*5),u.dance==="spin"&&!_&&!u.sitting&&(u.facing+=e*3.2);let x=!!u.sitting&&!_,M=x&&u.seatKind==="zen",R=x&&u.seatKind==="kneel",S=M?(u.seatH||.2)-.4:R?(u.seatH||.09)-.32:x?Math.max(0,(u.seatH||.45)-.45):0;if(M&&s>(u.zenFx||0)&&(u.zenFx=s+6+Math.random()*5,this.fx(u,["\u{1F9D8}","\u{1F343}","\u2728","\u{1F33F}","\u262F\uFE0F","\u{1F549}\uFE0F"][Math.floor(Math.random()*6)],2200)),R&&s>(u.zenFx||0)){u.zenFx=s+5+Math.random()*4;let y=u.seatTheme==="thantai"?["\u{1F4B0}","\u{1F9E7}","\u{1F4C8}","\u{1F431}","\u{1F4B8}","\u{1F6D2}"]:["\u{1F64F}","\u{1F647}","\u2728","\u{1F4B0}","\u{1F340}"];this.fx(u,y[Math.floor(Math.random()*y.length)],2e3)}u.person.root.position.set(u.pos.x,S,u.pos.z),u.person.blob&&(u.person.blob.position.y=.012-S,u.person.blob.visible=!x||S<.05),u.person.root.rotation.y=u.facing,u.busy&&!_&&!x&&!u.person.action&&Math.random()<e*.15&&u.person.doAction("look",1600),u.keyMove=!1,this.sph.center.set(u.pos.x,S+.8,u.pos.z);let b=u.me||this.frustum.intersectsSphere(this.sph);if(u.onScreen=b,u.animAcc=(u.animAcc||0)+e,!b){u.animAcc=Math.min(u.animAcc,.25),u.person.root.visible&&(u.person.root.visible=!1);continue}let I=!1;if(a&&!u.me&&!u.game&&!u.meet&&!u.person.action&&!u.person.holdCue){this.v1.set(u.pos.x,S,u.pos.z).applyMatrix4(this.projM);let y=this.v1.y;this.v1.set(u.pos.x,S+1.45,u.pos.z).applyMatrix4(this.projM),I=Math.abs(this.v1.y-y)*this.cssH/2<a*(u.lodNow?1.15:1)}if(u.lodNow=I,u.person.root.visible!==!I&&(u.person.root.visible=!I),I){u.animAcc=Math.min(u.animAcc,.25);let y=r*Math.PI,E=u.dance&&!_?u.dance:null;this.crowd.add(u.person,u.pos.x,S,u.pos.z,u.facing,{seated:x,bob:_?Math.abs(Math.sin(s*9))*.035:E?Math.abs(Math.sin(y))*.06:0,wig:E?Math.sin(y*2)*(E==="twerk"?.2:.1):0,lean:E==="twerk"?.4:0,turn:E==="twerk"?Math.PI:0});continue}if(o&&!u.me&&!u.dance&&!_&&(u.person.index||0)%2===0===this.lodTick)continue;let U=Math.min(.1,u.animAcc);u.animAcc=0,u.person.animate(U,s,{moving:_,speed:u.speed,seated:x,typing:x&&!M&&!R&&u.busy&&!u.dance,beat:r,meditate:M,kneel:R})}if(this.crowd.end(),this.npcRing){let u=s*.9%1,[_,x]=this.npcRing.children;_.material.opacity=_.userData.o*(.75+.25*Math.sin(s*3)),x.scale.setScalar(.6+u*.9),x.material.opacity=x.userData.o*(1-u)}if(this.npc){let u=this.npc;u.person.root.position.set(u.pos.x,0,u.pos.z),u.person.root.rotation.y=u.facing,u.person.animate(e,s,{moving:!1,speed:0,seated:!1,typing:!1,beat:r});let _=this.self();_&&Math.hypot(_.pos.x-u.pos.x,_.pos.z-u.pos.z)<2.3&&(!u.greetAt||s-u.greetAt>90)&&(u.greetAt=s,this.npcWave(),this.npcSay(this.opts.npcGreeting?this.opts.npcGreeting():"C\u1EA7n gi\xFAp g\xEC kh\xF4ng? B\u1EA5m v\xE0o m\xECnh nh\xE9 \u{1F44B}"))}let l=this.self(),c=this.onFloor(l)&&!(l&&l.path.length);c!==this.wasFloor&&(this.wasFloor=c,this.opts.onFloor&&this.opts.onFloor(c));let f=this.view,h=this.goal,d=1-Math.exp(-e*10);f.az+=(h.az-f.az)*d,f.el+=(h.el-f.el)*d,f.zoom*=Math.exp((Math.log(h.zoom)-Math.log(f.zoom))*d);let p=this.self(),g=this.follow&&p?{x:p.pos.x,z:p.pos.z}:this.panTo;if(g){let u=1-Math.exp(-e*4.5);f.target.x+=(g.x-f.target.x)*u,f.target.z+=(g.z-f.target.z)*u}this.updateCamera();let v=f.zoom<.7;v!==this.far&&(this.far=v,this.layer.classList.toggle("far",v));let m=this.renderer.shadowMap;m.enabled&&(m.autoUpdate=!1,(this.shadowTick=(this.shadowTick||0)+1)%(this.quality==="high"?2:4)===1&&(m.needsUpdate=!0)),this.renderer.render(this.scene,this.cam),this.cinemaObj&&this.cssRenderer.render(this.cssScene,this.cam),this.placeDom(),this.adapt(t)}adapt(t){let e=this.perf,n=this.slowMode();if(t>1||n!==e.mode||this.bg||this.quality==="high"||this.quality==="light"){e.acc=0,e.n=0,e.mode=n;return}if(e.acc+=t,e.n++,e.acc<2)return;let s=e.acc/e.n;e.acc=0,e.n=0;let r=this.slowMode()?1/30:1/60;s>r*1.4?(e.slow++,e.fast=0,e.dpr>e.min+.01?(e.ceil=e.dpr-.25,e.dpr=Math.max(e.min,e.dpr-.25),this.renderer.setPixelRatio(e.dpr),this.resize()):e.slow>=2&&this.renderer.shadowMap.enabled?(this.renderer.shadowMap.enabled=!1,e.noShadow=!0,this.scene.traverse(o=>{o.material&&[].concat(o.material).forEach(a=>{a.needsUpdate=!0})})):e.slow>=4&&!this.capFps&&(this.capFps=!0,e.slow=0,this.opts.onSlow&&this.opts.onSlow())):(e.slow=0,s<r*1.12&&!this.light&&e.dpr<Math.min(e.ceil,bs())-.01&&++e.fast>=3&&(e.fast=0,e.dpr=Math.min(e.ceil,bs(),e.dpr+.25),this.renderer.setPixelRatio(e.dpr),this.resize()))}keyboardMove(t){let e=Math.hypot(this.stick.x,this.stick.y);if(!this.keys.size&&e<.15)return;let n=[...this.people.values()].find(g=>g.me);if(!n)return;let s=0,r=0,o=1;if(e>=.15&&(s=this.stick.x,r=this.stick.y,o=Math.min(1,e)),(this.keys.has("w")||this.keys.has("arrowup"))&&(r-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(s-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(s+=1),!s&&!r)return;let a=this.view.az,l=Math.hypot(s,r),c=(s*Math.cos(a)+r*Math.sin(a))/l,f=(-s*Math.sin(a)+r*Math.cos(a))/l,h=n.pos.x+c*2.4*o*t,d=n.pos.z+f*2.4*o*t;n.path=[],(n.sitting||n.pendingSeat)&&this.standUp(n),(n.dance||n.meet)&&this.stopMoves(n),this.follow=!0,this.nav.isFree(h,d)?(n.pos.x=h,n.pos.z=d):this.nav.isFree(h,n.pos.z)?n.pos.x=h:this.nav.isFree(n.pos.x,d)&&(n.pos.z=d),n.facing=cc(n.facing,Math.atan2(c,f),1-Math.exp(-t*14)),n.keyMove=!0;let p=performance.now();(!this.lastKeySend||p-this.lastKeySend>350)&&(this.lastKeySend=p,this.opts.onMove&&this.opts.onMove({x:n.pos.x,z:n.pos.z,seat:null}))}setStick(t,e){this.poke();let n=Math.hypot(this.stick.x,this.stick.y)>=.15;if(this.stick.x=Number(t)||0,this.stick.y=Number(e)||0,n&&Math.hypot(this.stick.x,this.stick.y)<.15){let s=this.self();s&&this.opts.onMove&&this.opts.onMove({x:s.pos.x,z:s.pos.z,seat:null})}}project(t){let e=t.project(this.cam);return{x:(e.x+1)/2*this.cssW,y:(1-e.y)/2*this.cssH}}placeDom(){let t=this.npc&&this.npc.person?[...this.people.values(),this.npc]:this.people.values(),e=this.people.size>24?new Set([...this.bubbles,...this.emotes].map(s=>s._p).filter(Boolean)):null;for(let s of t){let r=s.onScreen===!1||e&&s.lodNow&&!e.has(s);if(r!==!!s.plateOff&&(s.plateOff=r,s.plate.style.visibility=r?"hidden":""),r)continue;let o=this.project(s.person.headWorld(this.tmpV).setY(this.tmpV.y+.12));s.anchor=o,s.plateH||(s.plateH=s.plate.offsetHeight||34);let a=Math.round(o.x*2)/2,l=Math.round(o.y*2)/2;if(a!==s.tx||l!==s.ty){s.tx=a,s.ty=l,s.plate.style.transform=`translate3d(${a}px, ${l}px, 0) translate(-50%, -100%)`;let c=Math.round(l/6)*6+(s.me?2e3:0);c!==s.z&&(s.z=c,s.plate.style.zIndex=String(c))}}for(let s of this.bubbles){let r=s._p.anchor;if(!r)continue;let o=this.cssW,a=Math.max(120,Math.min(o-120,r.x));s.style.transform=`translate(${a}px, ${r.y-(s._p.plateH||34)-8}px) translate(-50%, -100%)`,s.style.setProperty("--tail",r.x-a+"px")}let n=null;for(let s of this.emotes){if(s._cat){n=n||this.project(this.cat.headWorld(this.tmpV)),s.style.transform=`translate(${n.x}px, ${n.y-8}px) translate(-50%, -100%)`;continue}let r=s._p.anchor;r&&(s.style.transform=`translate(${r.x+24}px, ${r.y-(s._p.plateH||34)-4}px) translate(-50%, -100%)`)}}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.wrap.remove()}},uc=class{constructor(t){this.root=t;let e=document.createElement("canvas");e.className="avatar-preview",t.appendChild(e),this.canvas=e,this.renderer=Tf(e),this.renderer.shadowMap.enabled=!1,this.scene=new li,Rf(this.scene,512);let n=new X(new j(.75,.8,.06,40),new Kt({color:"#dbe9fb",roughness:.6}));n.position.y=-.03,this.scene.add(n),this.cam=new Je(30,1,.1,50),this.cam.position.set(0,1.25,4.1),this.cam.lookAt(0,.75,0),this.angle=.4,this.dead=!1,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let s=performance.now(),r=o=>{if(this.dead)return;this.raf=requestAnimationFrame(r);let a=Math.min(.05,(o-s)/1e3);s=o,this.person&&(this.angle+=a*.6,this.person.root.rotation.y=Math.sin(this.angle)*.9,this.person.animate(a,o/1e3,{moving:!1,speed:0,seated:!1,typing:!1})),this.renderer.render(this.scene,this.cam)};this.raf=requestAnimationFrame(r)}resize(){let t=this.root.clientWidth||220,e=this.root.clientHeight||260;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}update(t){this.person&&this.scene.remove(this.person.root),this.person=new Li(dc(t),0),this.scene.add(this.person.root)}wave(){this.person&&this.person.doAction("wave",1600)}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.canvas.remove()}};hr.ROOM=fe;hr.PLACES=fc;window.Lobby3D=hr;window.avatarToLook=dc;window.AvatarPreview=uc;var pc=(i,t)=>i+Math.random()*(t-i),An=i=>i[Math.floor(Math.random()*i.length)],$y=i=>new Promise(t=>setTimeout(t,i));function Af(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var Jy=[["C\xE0 ph\xEA kh\xF4ng? \u2615","Ok, ch\xFAt n\u1EEFa nh\xE9!"],["H\xF4m nay nhi\u1EC1u vi\u1EC7c gh\xEA \u{1F605}","C\u1ED1 l\xEAn n\xE0o!"],["Tr\u1EDDi \u0111\u1EB9p gh\xEA ha \u{1F324}","\u0110\xFAng r\u1ED3i!"],["Tr\u01B0a nay \u0103n g\xEC? \u{1F35C}","Ph\u1EDF \u0111i!"],["Xong vi\u1EC7c ch\u01B0a?","S\u1EAFp r\u1ED3i \u{1F4AA}"],["Ngh\u1EC9 tay 5 ph\xFAt nha","\u{1F44D}"]],Cf={cooler:["U\u1ED1ng mi\u1EBFng n\u01B0\u1EDBc \u{1F4A7}","M\xE1t gh\xEA!"],board:["Xem c\xF2n bao nhi\xEAu vi\u1EC7c\u2026","\u1ED4n \xE1p!"],windowL:["Ng\u1EAFm tr\u1EDDi x\xEDu \u{1F324}"],windowR:["N\u1EAFng \u0111\u1EB9p qu\xE1 \u2600\uFE0F"],shelf:["T\xECm cu\u1ED1n s\xE1ch\u2026","\u0110\xE2y r\u1ED3i \u{1F4D8}"],plant:["T\u01B0\u1EDBi c\xE2y ch\xFAt \u{1F331}"]},mc=class{constructor(t,e){this.root=t,this.opts=e||{},this.people=new Map,this.queue=[],this.busy=!1,this.flyers=[],this.board={wait:0,run:0,done:0},this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas";let s;try{s=new fs({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(c){throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng: "+c.message)}if(!s.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");this.renderer=s,s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=_s,s.toneMapping=tr,s.toneMappingExposure=1.05,s.outputColorSpace=_e,s.setClearColor(0,0),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.wrap.append(n,this.layer),t.appendChild(this.wrap),this.canvas=n;let r=new li;this.scene=r,r.fog=null,this.hemi=new ms("#fff4e0","#7a5a44",.85),r.add(this.hemi),r.add(new gs("#ffffff",.18));let o=new fi("#ffe7c2",2.1);this.sun=o,o.position.set(-5,11,7),o.target.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-10,right:10,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,r.add(o,o.target);let a=new fi("#cfe0ff",.45);a.position.set(8,6,-2),r.add(a),this.world=ff(r,s),this.cam=new ai(-10,10,6,-6,.1,100),this.view={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)},this.goal={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)},this.updateCamera(),this.nav=new Es(Wt.minX,Wt.minZ,Wt.maxX,Wt.maxZ,.2),this.nav.blockRect(Wt.minX,Wt.minZ,Wt.maxX,Wt.minZ+.25,.15),this.nav.blockRect(Wt.minX,Wt.minZ,Wt.minX+.25,Wt.maxZ,.15),this.nav.blockRect(Wt.maxX-.2,Wt.minZ,Wt.maxX,Wt.maxZ,.15),this.nav.blockRect(Wt.minX,Wt.maxZ-.2,Wt.maxX,Wt.maxZ,.15);for(let c of cf)this.nav.blockRect(...c);for(let c of ir)this.nav.blockRect(c.x-ve.w/2,c.z-ve.d/2,c.x+ve.w/2,c.z+ve.d/2),this.nav.blockRect(c.x-.28,c.z+sr-.28,c.x+.28,c.z+sr+.28,.18);this.cat=new ws(r,this.nav),this.confetti=[],this.emotes=new Set,this.applyDaylight(),this.dayT=setInterval(()=>this.applyDaylight(),3e4),this.raycaster=new xs,this.ndc=new Mt,this.tmpV=new L,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new ys;let l=c=>{if(this.dead)return;this.raf=requestAnimationFrame(l);let f=window.VP_WIN;this.paused||f&&f.minimized||f&&!f.focused&&c-(this.lastTs||0)<80||(this.lastTs=c,this.frame())};l()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;this.cam.left=-c*l/2,this.cam.right=c*l/2,this.cam.top=c/2,this.cam.bottom=-c/2,this.cam.updateProjectionMatrix()}resetView(){this.goal={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)}}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.updateCamera()}pickDesk(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=this.raycaster.intersectObjects([...this.people.values()].map(r=>r.desk.hit),!1);return s.length&&[...this.people.values()].find(r=>r.desk.hit===s[0].object)||null}pickAny(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=[this.cat.root,...[...this.people.values()].map(a=>a.person.root)],r=this.raycaster.intersectObjects(s,!0);for(let a of r){let l=a.object;for(;l&&l.parent&&l.parent!==this.scene;)l=l.parent;if(l===this.cat.root)return{cat:!0};let c=[...this.people.values()].find(f=>f.person.root===l);if(c)return{p:c}}let o=this.pickDesk(t,e);return o?{p:o}:null}setHover(t,e){for(let n of this.people.values()){let s=n.desk.ring.material;n===t?(s.color.set(e==="drop"?"#2f8cf0":"#ffffff"),s.opacity=e==="drop"?.8:.4):n.state==="error"?(s.color.set("#ef6b6b"),s.opacity=.55):n.state==="working"?(s.color.set("#7cc4f5"),s.opacity=.35):s.opacity=0}}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,az:this.goal.az,el:this.goal.el,t:this.goal.target.clone(),pan:n.button===2||n.shiftKey,moved:!1},t.setPointerCapture(n.pointerId)}),t.addEventListener("pointermove",n=>{if(e){let a=n.clientX-e.x,l=n.clientY-e.y;if(Math.hypot(a,l)>4&&(e.moved=!0),!e.moved)return;if(e.pan){let c=(this.cam.right-this.cam.left)/this.canvas.clientWidth,f=new L(Math.cos(this.view.az),0,-Math.sin(this.view.az)),h=new L(Math.sin(this.view.az),0,Math.cos(this.view.az)),d=e.t.clone().addScaledVector(f,-a*c).addScaledVector(h,-l*c*1.4);d.x=Math.max(-6,Math.min(6,d.x)),d.z=Math.max(-4,Math.min(4.5,d.z)),this.goal.target.copy(d)}else this.goal.az=Math.max(.08,Math.min(1.5,e.az-a*.005)),this.goal.el=Math.max(.32,Math.min(1.25,e.el+l*.0035));t.style.cursor="grabbing";return}let s=n.clientX,r=n.clientY,o=()=>{this.hoverAt=performance.now();let a=this.pickAny(s,r);this.setHover(a&&a.p,"hover"),t.style.cursor=a?"pointer":"grab"};clearTimeout(this.hoverTimer),performance.now()-(this.hoverAt||0)>80?o():this.hoverTimer=setTimeout(o,90)}),t.addEventListener("pointerup",n=>{if(e&&!e.moved){let s=this.pickAny(n.clientX,n.clientY);s&&s.cat?this.petCat():s&&s.p&&(this.opts.onPersonClick?this.opts.onPersonClick(s.p.agent.id,n.clientX,n.clientY):this.opts.onDeskClick&&this.opts.onDeskClick(s.p.agent.id))}e=null,t.style.cursor="grab"}),t.addEventListener("pointerleave",()=>{e||this.setHover(null)}),t.addEventListener("dblclick",n=>{this.pickAny(n.clientX,n.clientY)||this.resetView()}),t.addEventListener("wheel",n=>{n.preventDefault(),this.goal.zoom=Math.max(.75,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,n.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dragover",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY);this.setHover(s,"drop"),this.dragTarget=s}),t.addEventListener("dragleave",()=>{this.setHover(null),this.dragTarget=null}),t.addEventListener("drop",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY)||this.dragTarget;this.setHover(null);let r=n.dataTransfer.getData("text/vp-card");s&&r&&this.opts.onDrop&&this.opts.onDrop(r,s.agent.id)})}setAgents(t,e){this.sources=e||this.sources;let n=new Set;t.forEach((s,r)=>{let o=s.slot!=null&&ir[s.slot]?s.slot:r%ir.length,a=ir[o],l=this.people.get(s.id),c=JSON.stringify([s.shirt,s.hair,s.skin,s.hairStyle,s.isManager,s.isReviewer,s.source,s.model,o]);if(l&&l.sig!==c&&(this.scene.remove(l.person.root),this.scene.remove(l.desk.group),l.dom.forEach(f=>f.remove()),this.people.delete(s.id),l=null),!l){let f=uf(this.scene,a,s),h=new Li(s,r),d={x:a.x,z:a.z+sr};h.root.position.set(d.x,0,d.z),this.scene.add(h.root),l={agent:s,person:h,desk:f,slot:a,seat:d,pos:{...d},path:[],speed:1.6,seated:!0,facing:0,faceTo:null,state:"idle",note:"",nextIdle:performance.now()/1e3+pc(6,22),activity:null,locks:0,sig:c,dom:[]},l.person.root.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),this.people.set(s.id,l),this.makeDom(l)}l.agent=s,l.person.agent=s,this.updatePlate(l),n.add(s.id)});for(let[s,r]of[...this.people])n.has(s)||(this.scene.remove(r.person.root),this.scene.remove(r.desk.group),r.dom.forEach(o=>o.remove()),this.people.delete(s))}makeDom(t){let e=document.createElement("div");e.className="plate3d",e.innerHTML='<span class="pl-row"><span class="pl-crown">\u{1F451}</span><span class="pl-name"></span><span class="pl-mood"></span><i class="pl-dots"><b></b><b></b><b></b></i><i class="pl-err">!</i></span><span class="pl-sub"><span class="pl-title"></span><span class="pl-src"></span></span><span class="pl-energy"><i style="width:100%"></i></span>',e.title="B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn",e.addEventListener("click",n=>{if(n.detail!==1)return;let s=e.getBoundingClientRect();e._clickT=setTimeout(()=>{e._editing||(this.opts.onPersonClick?this.opts.onPersonClick(t.agent.id,s.left+s.width/2,s.bottom):this.opts.onDeskClick&&this.opts.onDeskClick(t.agent.id))},260)}),e.addEventListener("dblclick",n=>{n.stopPropagation(),clearTimeout(e._clickT),this.inlineRename(t,e)}),e.addEventListener("dragover",n=>{n.preventDefault(),this.setHover(t,"drop")}),e.addEventListener("drop",n=>{n.preventDefault(),this.setHover(null);let s=n.dataTransfer.getData("text/vp-card");s&&this.opts.onDrop&&this.opts.onDrop(s,t.agent.id)}),this.layer.append(e),t.plate=e,t.dom=[e]}inlineRename(t,e){if(e._editing)return;e._editing=!0;let n=e.querySelector(".pl-name"),s=document.createElement("input");s.className="rename3d",s.value=t.agent.name,s.maxLength=30,n.replaceWith(s),s.focus(),s.select();let r=o=>{if(!e._editing)return;e._editing=!1,s.replaceWith(n);let a=s.value.trim();o&&a&&a!==t.agent.name&&this.opts.onRename&&this.opts.onRename(t.agent.id,a)};s.addEventListener("keydown",o=>{o.key==="Enter"&&r(!0),o.key==="Escape"&&r(!1),o.stopPropagation()}),s.addEventListener("blur",()=>r(!0)),s.addEventListener("click",o=>o.stopPropagation())}updatePlate(t){let e=t.agent;t.plate.querySelector(".pl-name").textContent=e.name,t.plate.querySelector(".pl-title").textContent=(e.isManager?"\u2605 ":"")+e.title;let n=t.plate.querySelector(".pl-src");n.className="pl-src src-"+(e.source||"sim").split("-")[0],n.textContent=window.shortSource?window.shortSource(e.source,e.model):e.source,t.plate.title=`${e.name} \u2013 ${e.title}${e.model?`
`+e.model:""}
B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn`,t.plateH=0}setBoard(t){this.board={...this.board,...t},this.world.drawBoard(this.board)}setStats(t,e){let n=this.people.get(t);if(!n)return;n.energy=e.energy,n.plate.classList.toggle("crowned",!!e.crown),n.plate.querySelector(".pl-mood").textContent=e.emoji||"";let s=n.plate.querySelector(".pl-energy");s.classList.toggle("low",e.energy<30),s.firstChild.style.width=Math.max(4,e.energy)+"%",n.plateH=0}setDecor(t){this.world.setDecor&&this.world.setDecor(t)}async interact(t,e){let n=this.people.get(t);if(!n)return!1;let s=n.state==="working"||n.locks>0,r=(o,a=3e3)=>this.say(n,o,"cute",a);return e==="wave"?(n.person.doAction("wave",2200),this.emote(n,"\u{1F44B}"),await r(An(s?["Em \u0111ang l\xE0m n\xE8 s\u1EBFp \u{1F4AA}","D\u1EA1, ch\xFAt em xong ngay \u1EA1!"]:["D\u1EA1 s\u1EBFp g\u1ECDi em? \u{1F60A}","Ch\xE0o s\u1EBFp \u1EA1! \u{1F44B}","H\xF4m nay s\u1EBFp kh\u1ECFe kh\xF4ng \u1EA1?","Em s\u1EB5n s\xE0ng nh\u1EADn vi\u1EC7c n\xE8!"])),!0):e==="praise"?(n.person.doAction("cheer",2200),this.emote(n,"\u{1F496}"),setTimeout(()=>this.emote(n,"\u2728"),350),await r(An(["Hihi c\u1EA3m \u01A1n s\u1EBFp! \u{1F970}","Em s\u1EBD c\u1ED1 g\u1EAFng h\u01A1n n\u1EEFa \u1EA1!","S\u1EBFp khen l\xE0m em vui c\u1EA3 ng\xE0y \u{1F606}"])),!0):e==="dance"?s?(this.emote(n,"\u{1F605}"),await r("\u0110ang l\xE0m vi\u1EC7c, x\xEDu em nh\u1EA3y sau nha!"),!1):(n.person.doAction("dance",3200),n.danceUntil=performance.now()/1e3+3.2,this.emote(n,"\u{1F3B5}"),setTimeout(()=>this.emote(n,"\u{1F3B6}"),900),await r(An(["La la la~ \u{1F483}","Nh\u1EA1c l\xEAn n\xE0o! \u{1F57A}","T\u0103ng ca kh\xF4ng b\u1EB1ng t\u0103ng vui \u{1F60E}"]),2600),!0):e==="coffee"?s?(this.emote(n,"\u2615"),await r("Xong vi\u1EC7c em u\u1ED1ng li\u1EC1n nha s\u1EBFp \u2615"),!1):(n.activity&&await this.recall(n),this.emote(n,"\u2615"),r("D\u1EA1 em c\u1EA3m \u01A1n s\u1EBFp! \u2615",1600),await this.runActivity(n,"coffee"),!0):!1}petCat(){this.cat.pet();let t=()=>this.project(this.cat.headWorld(this.tmpV2||(this.tmpV2=new L)));this.emoteAt(t,An(["\u{1F495}","\u{1F497}","\u{1F63B}"])),setTimeout(()=>this.emoteAt(t,An(["Meo~","Meoww \u{1F495}","R\u1EEB r\u1EEB\u2026"])),300),this.opts.onCat&&this.opts.onCat()}emoteAt(t,e){let n=document.createElement("div");n.className="emote"+(e.length>2?" txt":""),n.textContent=e,n._get=t,e.length>2&&Object.assign(n.style,{fontSize:"13px",fontWeight:"900",color:"#0656b8",background:"#e8f3ff",border:"2px solid #45a2ff",borderRadius:"12px",padding:"2px 8px"}),this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}setTray(t){this.trayCount=t,this.world.setTray(t)}setState(t,e,n){let s=this.people.get(t);s&&(s.state=e,s.note=n||"",s.desk.state=e==="working"?"working":e==="error"?"error":"idle",So(s.desk,this.t||0,!0),s.plate.classList.toggle("working",e==="working"),s.plate.classList.toggle("error",e==="error"),s.plateH=0,s.plate.title=e==="error"&&n?"L\u1ED7i: "+n:"B\u1EA5m: c\u1EA5u h\xECnh b\xE0n \xB7 B\u1EA5m \u0111\xFAp: \u0111\u1ED5i t\xEAn",e==="working"&&!s.seated&&!s.locks&&this.recall(s),this.setHover(null))}move(t,e,n){if(t.moveRes){let s=t.moveRes;t.moveRes=null,s(!1)}return t.path=e.slice(),t.speed=n,t.seated=!1,t.faceTo=null,t.path.length?new Promise(s=>{t.moveRes=s}):Promise.resolve(!0)}exitPoint(t,e){let n=e>=t.seat.x?1:-1;return{x:t.seat.x+n*1.2,z:t.seat.z}}walkTo(t,e,n){let s=[],r={x:t.pos.x,z:t.pos.z};if(t.seated||Math.hypot(t.pos.x-t.seat.x,t.pos.z-t.seat.z)<.15){let a=this.exitPoint(t,e.x);s.push(a),r=a}s.push(...this.nav.find(r,e));let o=this.move(t,s,n?3.4:1.7);return t.faceAfter=e.face||null,o}async walkHome(t,e){let n=this.exitPoint(t,t.pos.x),s=[...this.nav.find(t.pos,n),{x:t.seat.x,z:t.seat.z}];t.faceAfter=null;let r=await this.move(t,s,e?3.4:1.7);return r&&(t.seated=!0),r}async recall(t){t.activity&&(t.activity.abort=!0),t.seated||await this.walkHome(t,!0)}enqueue(t){this.queue.push(t),this.busy||this.runQueue()}async runQueue(){for(this.busy=!0;this.queue.length;){let t=this.queue.shift(),e=this.queue.length>=3;try{await this.scene_(t,e)}catch(n){console.error(n)}}this.busy=!1}async scene_(t,e){let n=this.people.get(t.from),s=this.people.get(t.to),r=e?1300:Math.min(4200,1700+t.text.length*15);if(t.from==="boss"&&s){s.locks++;try{s.activity&&await this.recall(s),await this.fly(new L(Eo.x,1.6,Eo.z+.3),s.person.headWorld(new L).add(new L(0,.3,0)),e?450:1e3),this.emote(s,"\u{1F4CC}"),await this.say(s,"\u{1F4E9} "+t.text,"assign",r)}finally{s.locks--}return}if(n){n.locks++;try{if(n.activity&&await this.recall(n),n.homeP&&await n.homeP,t.to==="boss"){t.kind==="done"?(n.person.carrying=!0,await this.walkTo(n,wo.tray,e),n.person.doAction("place",900),await $y(e?400:800),this.emote(n,"\u2705"),n.person.carrying=!1,this.world.setTray((this.trayCount||0)+1),this.trayCount=(this.trayCount||0)+1,await this.say(n,t.text,"done",e?1e3:2400),n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})):(t.kind==="plan"&&this.emote(n,"\u{1F4A1}"),await this.say(n,t.text,t.kind,r));return}if(s&&s!==n){s.locks++;try{s.activity&&await this.recall(s),s.homeP&&await s.homeP;let o=n.slot.x<=s.slot.x?-1:1,a={x:s.slot.x+o*.62,z:s.slot.z+ve.d/2+.55,face:{x:s.seat.x,z:s.seat.z}};await this.walkTo(n,a,e);let l={ask:"\u2753",answer:"\u{1F4AC}",review:/cần sửa/i.test(t.text)?"\u270F\uFE0F":"\u{1F44D}",assign:"\u{1F4CB}",done:"\u{1F4E6}"}[t.kind];l&&this.emote(n,l),await this.say(n,t.text,t.kind,r)}finally{s.locks--}n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})}else await this.say(n,t.text,t.kind,r)}finally{n.locks--}}}fly(t,e,n){return new Promise(s=>{let r=new zt,o=new X(new Et(.34,.03,.24),new Kt({color:"#fffaf0",roughness:.8})),a=new X(new j(.04,.04,.01,12),new Kt({color:"#d9534f"}));a.position.y=.02,r.add(o,a),r.traverse(l=>{l.castShadow=!0}),this.scene.add(r),this.flyers.push({obj:r,a:t,b:e,t0:performance.now(),ms:n,res:s})})}say(t,e,n,s){return new Promise(r=>{let o=document.createElement("div");o.className="bubble3d k-"+(n||"say"),o.style.zIndex="5000",o.textContent=e.length>120?e.slice(0,119)+"\u2026":e,o._p=t,this.layer.appendChild(o),this.bubbles=this.bubbles||new Set,this.bubbles.add(o),t.person.say(Math.min(s,2600)),this.positionBubble(o),requestAnimationFrame(()=>o.classList.add("show")),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(o),o.remove()},220),r()},s)})}idleTick(t){let e=[...this.people.values()].some(n=>n.state==="working");for(let n of this.people.values()){if(n.activity||n.locks||!n.seated||n.state==="working"||n.homeP||t<n.nextIdle||(n.nextIdle=t+(e?pc(25,55):pc(12,32)),this.queue.length||e&&Math.random()<.5))continue;if(n.energy!=null&&n.energy<25&&!e){this.emote(n,"\u{1F62A}"),this.runActivity(n,"coffee");continue}let s=Math.random();if([...this.people.values()].filter(o=>o.activity).length>=2&&s>=.38){n.person.doAction(Math.random()<.5?"stretch":"look",2600);continue}s<.22?n.person.doAction("stretch",2600):s<.38?n.person.doAction("look",3e3):s<.62?this.runActivity(n,"poi"):this.runActivity(n,"chat")}}async runActivity(t,e){let n={abort:!1};t.activity=n;try{if(e==="coffee"){if(!await this.walkTo(t,wo.cooler,!1)||n.abort)return;t.person.doAction("drink",2600),await this.say(t,An(["C\xE0 ph\xEA ngon qu\xE1 \u2615","N\u1EA1p n\u0103ng l\u01B0\u1EE3ng th\xF4i! \u26A1","T\u1EC9nh c\u1EA3 ng\u01B0\u1EDDi \u{1F606}"]),"chat",2400),this.emote(t,"\u26A1"),this.opts.onStat&&this.opts.onStat(t.agent.id,"coffee");return}if(e==="chat"){let s=[...this.people.values()].filter(f=>f!==t&&f.seated&&!f.activity&&f.state!=="working"&&!f.locks);if(!s.length)return;let r=An(s),o=t.slot.x<=r.slot.x?-1:1;if(!await this.walkTo(t,{x:r.slot.x+o*.62,z:r.slot.z+ve.d/2+.55,face:{x:r.seat.x,z:r.seat.z}},!1)||n.abort)return;let[l,c]=An(Jy);if(await this.say(t,l,"chat",2200),n.abort)return;r.state!=="working"&&!r.locks&&await this.say(r,c,"chat",1800)}else{let s=An(Object.keys(Cf)),r=wo[s];if(!await this.walkTo(t,r,!1)||n.abort)return;let a=Cf[s];if(s==="cooler"?(t.person.doAction("drink",2600),await this.say(t,a[0],"chat",2e3)):s==="plant"?(t.person.doAction("place",1800),await this.say(t,a[0],"chat",1900)):(t.person.doAction("look",2400),await this.say(t,a[0],"chat",2200)),n.abort)return;a[1]&&Math.random()<.6&&await this.say(t,a[1],"chat",1400)}}finally{t.activity===n&&(t.activity=null,!n.abort&&!t.seated&&await this.walkHome(t,!1))}}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t;for(let a of this.world.animated)a(e,t);let n=performance.now()/1e3;this.idleTick(n),this.cat.update(t,n),this.updateConfetti(t);for(let a of this.people.values()){let l=!1;if(a.path.length){let c=a.path[0],f=c.x-a.pos.x,h=c.z-a.pos.z,d=Math.hypot(f,h),p=a.speed*t;if(d<=p){if(a.pos.x=c.x,a.pos.z=c.z,a.path.shift(),!a.path.length&&(a.faceAfter&&(a.faceTo=a.faceAfter),a.moveRes)){let g=a.moveRes;a.moveRes=null,g(!0)}}else a.pos.x+=f/d*p,a.pos.z+=h/d*p;d>.001&&(a.facing=Af(a.facing,Math.atan2(f,h),1-Math.exp(-t*12))),l=a.path.length>0||d>p}else{let c=null;a.seated?c=0:a.faceTo&&(c=Math.atan2(a.faceTo.x-a.pos.x,a.faceTo.z-a.pos.z)),c!==null&&(a.facing=Af(a.facing,c,1-Math.exp(-t*8)))}a.danceUntil&&n<a.danceUntil&&!l&&(a.facing+=t*5),a.person.root.position.set(a.pos.x,0,a.pos.z),a.person.root.rotation.y=a.facing,a.person.animate(t,n,{moving:l,speed:a.speed,seated:a.seated&&!a.path.length,typing:a.seated&&a.state==="working"}),a.desk.state==="working"&&Math.floor(e*10)!==Math.floor((e-t)*10)&&So(a.desk,e)}for(let a of[...this.flyers]){let l=Math.min(1,(performance.now()-a.t0)/a.ms),c=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;a.obj.position.lerpVectors(a.a,a.b,c),a.obj.position.y+=Math.sin(l*Math.PI)*1.4,a.obj.rotation.set(Math.sin(l*9)*.3,l*6,0),l>=1&&(this.scene.remove(a.obj),this.flyers.splice(this.flyers.indexOf(a),1),a.res())}let s=this.view,r=this.goal,o=1-Math.exp(-t*10);Math.abs(r.az-s.az)+Math.abs(r.el-s.el)+Math.abs(r.zoom-s.zoom)+s.target.distanceTo(r.target)>1e-4&&(s.az+=(r.az-s.az)*o,s.el+=(r.el-s.el)*o,s.zoom*=Math.exp((Math.log(r.zoom)-Math.log(s.zoom))*o),s.target.lerp(r.target,o),this.updateCamera()),this.renderer.render(this.scene,this.cam),this.placeDom()}project(t){let e=t.clone().project(this.cam);return{x:(e.x+1)/2*this.canvas.clientWidth,y:(1-e.y)/2*this.canvas.clientHeight}}positionBubble(t){let e=t._p,n=e.spot||e.anchor||this.project(e.person.headWorld(this.tmpV)),s=n.y-(e.plateH||34)-10,r=this.canvas.clientWidth,o=Math.max(130,Math.min(r-130,n.x));t.style.transform=`translate(${o}px, ${s}px) translate(-50%, -100%)`,t.style.setProperty("--tail",n.x-o+"px")}placeDom(){let t=[];for(let n of this.people.values()){let s=n.person.headWorld(this.tmpV);s.y+=.12,n.anchor=this.project(s),n.plateH||(n.plateH=n.plate.offsetHeight||34,n.plateW=n.plate.offsetWidth||90),t.push(n)}let e=rf(t.map(n=>({p:n,x:n.anchor.x,y:n.anchor.y,w:n.plateW,h:n.plateH,prev:n.dodge})));for(let{p:n,x:s,y:r}of e){n.dodge={x:s-n.anchor.x,y:r-n.anchor.y},n.spot={x:s,y:r};let o=Math.round(s*2)/2,a=Math.round(r*2)/2,l=Math.round(n.anchor.x-o),c=Math.round(n.anchor.y-a);if(o!==n.tx||a!==n.ty||l!==n.ldx||c!==n.ldy){n.tx=o,n.ty=a,n.ldx=l,n.ldy=c,n.plate.style.transform=`translate3d(${o}px, ${a}px, 0) translate(-50%, -100%)`,n.plate.style.zIndex=String(Math.round(n.anchor.y));let f=Math.hypot(l,c);n.plate.classList.toggle("moved",f>6),f>6&&(n.plate.style.setProperty("--ll",f.toFixed(1)+"px"),n.plate.style.setProperty("--la",(Math.atan2(-l,c)*180/Math.PI).toFixed(1)+"deg"))}}if(this.bubbles)for(let n of this.bubbles)this.positionBubble(n);for(let n of this.emotes){if(n._get){let r=n._get();n.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`;continue}let s=n._p.spot||n._p.anchor;s&&(n.style.transform=`translate(${s.x+26}px, ${s.y-(n._p.plateH||34)-4}px) translate(-50%, -100%)`)}}emote(t,e){let n=document.createElement("div");n.className="emote",n.textContent=e,n._p=t,this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}celebrate(t){let e=["#f5b54a","#5fd69a","#7cc4f5","#f07070","#b896f0","#ffffff"],n=new ie(.07,.04),s=new L(5.6,1,4.15),r=t&&this.people.get(t),o=[s];r&&o.push(new L(r.pos.x,1.6,r.pos.z));for(let a of o)for(let l=0;l<70;l++){let c=new X(n,new ne({color:e[l%e.length],side:ye}));c.position.copy(a);let f=Math.random()*Math.PI*2,h=1.2+Math.random()*2.2;c.userData={v:new L(Math.cos(f)*h*.6,3+Math.random()*2.5,Math.sin(f)*h*.6),r:new L(Math.random()*8,Math.random()*8,Math.random()*8),life:2.6+Math.random()},this.scene.add(c),this.confetti.push(c)}for(let a of this.people.values())a.state!=="working"&&setTimeout(()=>{a.person.doAction("cheer",2200),this.emote(a,An(["\u{1F389}","\u{1F44F}","\u{1F973}","\u{1F64C}"]))},Math.random()*500)}updateConfetti(t){for(let e=this.confetti.length-1;e>=0;e--){let n=this.confetti[e],s=n.userData;s.v.y-=6.5*t,s.v.multiplyScalar(1-t*.9),n.position.addScaledVector(s.v,t),n.rotation.x+=s.r.x*t,n.rotation.y+=s.r.y*t,n.rotation.z+=s.r.z*t,n.position.y<.02&&(n.position.y=.02,s.v.set(0,0,0),s.r.set(0,0,0),n.rotation.set(-Math.PI/2,0,n.rotation.z)),s.life-=t,s.life<.6&&(n.material.opacity=Math.max(0,s.life/.6),n.material.transparent=!0),s.life<=0&&(this.scene.remove(n),n.material.dispose(),this.confetti.splice(e,1))}}applyDaylight(t){let e=new Date,n=t??e.getHours()+e.getMinutes()/60,s=n<5||n>19.5?0:n<7?(n-5)/2:n>17.5?(19.5-n)/2:1,r=Math.max(0,1-Math.abs(n-17.8)/1.6)+Math.max(0,1-Math.abs(n-6.2)/1.2),o=new Zt("#ffe7c2").lerp(new Zt("#ffae6b"),Math.min(1,r));this.sun.color.copy(o),this.sun.intensity=.25+1.85*s,this.hemi.intensity=.4+.45*s,this.hemi.color.set(s>.3?"#fff4e0":"#b9c4ff");let a=new Zt("#1c2448").lerp(new Zt("#ffffff"),s).lerp(new Zt("#ffc59a"),Math.min(.6,r*(s>0?.6:0)));for(let c of this.world.skyMats||[])c.color.copy(a);let l=1-s;for(let c of this.world.lamps||[])c.light.intensity=l*6,c.bulbMat.emissiveIntensity=.2+l*2.2;this.world.dust&&(this.world.dust.material.opacity=.15+.45*s),this.renderer.toneMappingExposure=.95+.12*s}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),clearInterval(this.dayT),this.renderer.dispose(),this.wrap.remove()}};window.Office3D=mc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
