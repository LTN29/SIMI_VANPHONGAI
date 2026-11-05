(()=>{var Nl="169";var xf=0,cc=1,_f=2;var ps=1,vf=2,On=3,ei=0,nn=1,xe=2,Cn=0,$i=1,Fr=2,hc=3,fc=4,Mf=5,yi=100,Ef=101,wf=102,Sf=103,bf=104,Tf=200,Rf=201,Af=202,Cf=203,la=204,ca=205,Pf=206,If=207,Lf=208,Df=209,Uf=210,Nf=211,Hf=212,zf=213,Ff=214,ha=0,fa=1,ua=2,ji=3,da=4,pa=5,ma=6,ga=7,_h=0,Bf=1,Of=2,ti=0,kf=1,Gf=2,Vf=3,Js=4,Wf=5,Xf=6,qf=7;var vh=300,ts=301,es=302,ya=303,xa=304,lo=306,wn=1e3,vi=1001,_a=1002,en=1003,Yf=1004;var sr=1005;var Mn=1006,To=1007;var Mi=1008;var Gn=1009,Mh=1010,Eh=1011,Ns=1012,Hl=1013,Ei=1014,An=1015,Ks=1016,zl=1017,Fl=1018,ns=1020,wh=35902,Sh=1021,bh=1022,En=1023,Th=1024,Rh=1025,Ji=1026,is=1027,Bl=1028,Ol=1029,Ah=1030,kl=1031;var Gl=1033,Lr=33776,Dr=33777,Ur=33778,Nr=33779,va=35840,Ma=35841,Ea=35842,wa=35843,Sa=36196,ba=37492,Ta=37496,Ra=37808,Aa=37809,Ca=37810,Pa=37811,Ia=37812,La=37813,Da=37814,Ua=37815,Na=37816,Ha=37817,za=37818,Fa=37819,Ba=37820,Oa=37821,Hr=36492,ka=36494,Ga=36495,Ch=36283,Va=36284,Wa=36285,Xa=36286;var Br=2300,qa=2301,Ro=2302,uc=2400,dc=2401,pc=2402;var Zf=3200,$f=3201;var Ph=0,Jf=1,jn="",Ee="srgb",ci="srgb-linear",Vl="display-p3",co="display-p3-linear",Or="linear",Me="srgb",kr="rec709",Gr="p3";var Li=7680;var mc=519,Kf=512,Qf=513,jf=514,Ih=515,tu=516,eu=517,nu=518,iu=519,gc=35044;var yc="300 es",kn=2e3,Vr=2001,ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ao=Math.PI/180,Ya=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function su(i,t){return(i%t+t)%t}function Co(i,t,e){return(1-e)*i+e*t}function Ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],R=s[2],S=s[5],T=s[8];return r[0]=o*_+a*M+l*R,r[3]=o*m+a*x+l*S,r[6]=o*p+a*v+l*T,r[1]=c*_+f*M+h*R,r[4]=c*m+f*x+h*S,r[7]=c*p+f*v+h*T,r[2]=u*_+d*M+g*R,r[5]=u*m+d*x+g*S,r[8]=u*p+d*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,d=c*r-o*l,g=e*h+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(s*c-f*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Po=new oe;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=Hs("canvas");return i.style.display="block",i}var xc={};function zr(i){i in xc||(xc[i]=!0,console.warn(i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function au(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var _c=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vc=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[ci]:{transfer:Or,primaries:kr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ee]:{transfer:Me,primaries:kr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[co]:{transfer:Or,primaries:Gr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vc),fromReference:i=>i.applyMatrix3(_c)},[Vl]:{transfer:Me,primaries:Gr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vc),fromReference:i=>i.applyMatrix3(_c).convertLinearToSRGB()}},cu=new Set([ci,co]),me={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Es[t].toReference,s=Es[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Es[i].primaries},getTransfer:function(i){return i===jn?Or:Es[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Es[t].luminanceCoefficients)}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,Za=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Hs("canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,Wr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lo(s[o].image)):r.push(Lo(s[o]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fu=0,je=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=Mn,o=Mi,a=En,l=Gn,c=i.DEFAULT_ANISOTROPY,f=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ms(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=vh;je.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(d+1)/2,R=(p+1)/2,S=(f+u)/4,T=(h+_)/4,I=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=T/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(u-f)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$a=class extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==u||c!==d||f!==g){let m=1-a,p=l*u+c*d+f*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),S=Math.atan2(R,p*M);m=Math.sin(m*S)/R,a=Math.sin(a*S)/R}let v=a*M;if(l=l*m+u*v,c=c*m+d*v,f=f*m+g*v,h=h*m+_*v,m===1-a){let R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+f*h+l*d-c*u,t[e+1]=l*g+f*u+c*h-a*d,t[e+2]=c*g+f*d+a*u-l*h,t[e+3]=f*g-a*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"YXZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"ZXY":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"ZYX":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"YZX":this._x=u*f*h+c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h-u*d*g;break;case"XZY":this._x=u*f*h-c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new D,Mc=new Pn,Wn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),or.subVectors(this.max,ws),Ui.subVectors(t.a,ws),Ni.subVectors(t.b,ws),Hi.subVectors(t.c,ws),Yn.subVectors(Ni,Ui),Zn.subVectors(Hi,Ni),hi.subVectors(Ui,Hi);let e=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!Uo(e,Ui,Ni,Hi,or)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Ui,Ni,Hi,or))?!1:(ar.crossVectors(Yn,Zn),e=[ar.x,ar.y,ar.z],Uo(e,Ui,Ni,Hi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,rr=new Wn,Ui=new D,Ni=new D,Hi=new D,Yn=new D,Zn=new D,hi=new D,ws=new D,or=new D,ar=new D,fi=new D;function Uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),f=n.dot(fi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var uu=new Wn,Ss=new D,No=new D,ii=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):uu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);let e=Ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(No)),this.expandByPoint(Ss.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new D,Ho=new D,lr=new D,$n=new D,zo=new D,cr=new D,Fo=new D,zs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ho.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Ho);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=$n.dot(this.direction),l=-$n.dot(lr),c=$n.lengthSq(),f=Math.abs(1-o*o),h,u,d,g;if(f>0)if(h=o*l-a,u=o*a-l,g=r*f,h>=0)if(u>=-g)if(u<=g){let _=1/f;h*=_,u*=_,d=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ho).addScaledVector(lr,u),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){zo.subVectors(e,t),cr.subVectors(n,t),Fo.crossVectors(zo,cr);let o=this.direction.dot(Fo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);let l=a*this.direction.dot(cr.crossVectors($n,cr));if(l<0)return null;let c=a*this.direction.dot(zo.cross($n));if(c<0||l+c>o)return null;let f=-a*$n.dot(Fo);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,l,c,f,h,u,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,u,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,f,h,u,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,d=o*h,g=a*f,_=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,d=l*h,g=c*f,_=c*h;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,d=l*h,g=c*f,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*f,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,d=o*h,g=a*f,_=a*h;e[0]=l*f,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*f,e[4]=_-u*h,e[8]=g*h+d,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*h+g,e[10]=u-_*h}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+_,e[5]=o*f,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*f,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(du,t,pu)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Jn.crossVectors(n,ln),Jn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Jn.crossVectors(n,ln)),Jn.normalize(),hr.crossVectors(ln,Jn),s[0]=Jn.x,s[4]=hr.x,s[8]=ln.x,s[1]=Jn.y,s[5]=hr.y,s[9]=ln.y,s[2]=Jn.z,s[6]=hr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],R=n[15],S=s[0],T=s[4],I=s[8],V=s[12],y=s[1],E=s[5],L=s[9],H=s[13],C=s[2],G=s[6],z=s[10],it=s[14],Y=s[3],B=s[7],j=s[11],st=s[15];return r[0]=o*S+a*y+l*C+c*Y,r[4]=o*T+a*E+l*G+c*B,r[8]=o*I+a*L+l*z+c*j,r[12]=o*V+a*H+l*it+c*st,r[1]=f*S+h*y+u*C+d*Y,r[5]=f*T+h*E+u*G+d*B,r[9]=f*I+h*L+u*z+d*j,r[13]=f*V+h*H+u*it+d*st,r[2]=g*S+_*y+m*C+p*Y,r[6]=g*T+_*E+m*G+p*B,r[10]=g*I+_*L+m*z+p*j,r[14]=g*V+_*H+m*it+p*st,r[3]=M*S+x*y+v*C+R*Y,r[7]=M*T+x*E+v*G+R*B,r[11]=M*I+x*L+v*z+R*j,r[15]=M*V+x*H+v*it+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*u+n*c*u+s*a*d-n*l*d)+_*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*f-r*l*f)+m*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*f-n*c*f)+p*(-s*a*f-e*l*h+e*a*u+s*o*h-n*o*u+n*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*c-_*u*c+_*l*d-a*m*d-h*l*p+a*u*p,x=g*u*c-f*m*c-g*l*d+o*m*d+f*l*p-o*u*p,v=f*_*c-g*h*c+g*a*d-o*_*d-f*a*p+o*h*p,R=g*h*l-f*_*l-g*a*u+o*_*u+f*a*m-o*h*m,S=e*M+n*x+s*v+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=M*T,t[1]=(_*u*r-h*m*r-_*s*d+n*m*d+h*s*p-n*u*p)*T,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*T,t[3]=(h*l*r-a*u*r-h*s*c+n*u*c+a*s*d-n*l*d)*T,t[4]=x*T,t[5]=(f*m*r-g*u*r+g*s*d-e*m*d-f*s*p+e*u*p)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*T,t[7]=(o*u*r-f*l*r+f*s*c-e*u*c-o*s*d+e*l*d)*T,t[8]=v*T,t[9]=(g*h*r-f*_*r-g*n*d+e*_*d+f*n*p-e*h*p)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(f*a*r-o*h*r-f*n*c+e*h*c+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(f*_*s-g*h*s+g*n*u-e*_*u-f*n*m+e*h*m)*T,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*h*s-f*a*s+f*n*l-e*h*l-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,d=r*f,g=r*h,_=o*f,m=o*h,p=a*h,M=l*c,x=l*f,v=l*h,R=n.x,S=n.y,T=n.z;return s[0]=(1-(_+p))*R,s[1]=(d+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(u+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+x)*T,s[9]=(m-M)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,f=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let l=this.elements,c=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),d,g;if(a===kn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let l=this.elements,c=1/(e-t),f=1/(n-s),h=1/(o-r),u=(e+t)*c,d=(n+s)*f,g,_;if(a===kn)g=(o+r)*h,_=-2*h;else if(a===Vr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new D,xn=new ae,du=new D(0,0,0),pu=new D(1,1,1),Jn=new D,hr=new D,ln=new D,Ec=new ae,wc=new Pn,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mu=0,Sc=new D,Fi=new Pn,zn=new ae,fr=new D,bs=new D,gu=new D,yu=new Pn,bc=new D(1,0,0),Tc=new D(0,1,0),Rc=new D(0,0,1),Ac={type:"added"},xu={type:"removed"},Bi={type:"childadded",child:null},Bo={type:"childremoved",child:null},Ge=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new In,n=new Pn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new oe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(bs,fr,this.up):zn.lookAt(fr,bs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(zn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ac),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ac),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new D(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new D,Fn=new D,Oo=new D,Bn=new D,Oi=new D,ki=new D,Cc=new D,ko=new D,Go=new D,Vo=new D,Wo=new ye,Xo=new ye,qo=new ye,xi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Fn.subVectors(n,e),Oo.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Fn),l=_n.dot(Oo),c=Fn.dot(Fn),f=Fn.dot(Oo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-a*f)*u,g=(o*f-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(qo,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Fn.subVectors(t,e),_n.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Oi.subVectors(s,n),ki.subVectors(r,n),ko.subVectors(t,n);let l=Oi.dot(ko),c=ki.dot(ko);if(l<=0&&c<=0)return e.copy(n);Go.subVectors(t,s);let f=Oi.dot(Go),h=ki.dot(Go);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Oi,o);Vo.subVectors(t,r);let d=Oi.dot(Vo),g=ki.dot(Vo);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ki,a);let m=f*g-d*h;if(m<=0&&h-f>=0&&d-g>=0)return Cc.subVectors(r,s),a=(h-f)/(h-f+(d-g)),e.copy(s).addScaledVector(Cc,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Oi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=su(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yo(o,r,t+1/3),this.g=Yo(o,r,t),this.b=Yo(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return me.fromWorkingColorSpace($e.copy(this),t),Math.round(Xe($e.r*255,0,255))*65536+Math.round(Xe($e.g*255,0,255))*256+Math.round(Xe($e.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ee){me.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(ur);let n=Co(Kn.h,ur.h,e),s=Co(Kn.s,ur.s,e),r=Co(Kn.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Kt;Kt.NAMES=Dh;var _u=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=$i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ee=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new D,dr=new Et,qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}};var qr=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},vu=0,dn=new ae,Zo=new Ge,Gi=new D,cn=new Wn,Ts=new Wn,ke=new D,Le=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Yr:qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(cn.min,Ts.min),cn.expandByPoint(ke),ke.addVectors(cn.max,Ts.max),cn.expandByPoint(ke)):(cn.expandByPoint(Ts.min),cn.expandByPoint(Ts.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)ke.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),ke.add(Gi)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new D,l[I]=new D;let c=new D,f=new D,h=new D,u=new Et,d=new Et,g=new Et,_=new D,m=new D;function p(I,V,y){c.fromBufferAttribute(n,I),f.fromBufferAttribute(n,V),h.fromBufferAttribute(n,y),u.fromBufferAttribute(r,I),d.fromBufferAttribute(r,V),g.fromBufferAttribute(r,y),f.sub(c),h.sub(c),d.sub(u),g.sub(u);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(E),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(E),a[I].add(_),a[V].add(_),a[y].add(_),l[I].add(m),l[V].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,V=M.length;I<V;++I){let y=M[I],E=y.start,L=y.count;for(let H=E,C=E+L;H<C;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let x=new D,v=new D,R=new D,S=new D;function T(I){R.fromBufferAttribute(s,I),S.copy(R);let V=a[I];x.copy(V),x.sub(R.multiplyScalar(R.dot(V))).normalize(),v.crossVectors(S,V);let E=v.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,E)}for(let I=0,V=M.length;I<V;++I){let y=M[I],E=y.start,L=y.count;for(let H=E,C=E+L;H<C;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,f=new D,h=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*f;for(let p=0;p<f;p++)u[g++]=c[d++]}return new qe(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=new ae,ui=new zs,pr=new ii,Ic=new D,mr=new D,gr=new D,yr=new D,$o=new D,xr=new D,Lc=new D,_r=new D,J=class extends Ge{constructor(t=new Le,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&($o.fromBufferAttribute(h,t),o?xr.addScaledVector($o,f):xr.addScaledVector($o.sub(e),f))}e.add(xr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(pr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(pr,Ic)===null||ui.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,R=x;v<R;v+=3){let S=a.getX(v),T=a.getX(v+1),I=a.getX(v+2);s=vr(this,p,t,n,c,f,h,S,T,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=vr(this,o,t,n,c,f,h,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,R=x;v<R;v+=3){let S=v,T=v+1,I=v+2;s=vr(this,p,t,n,c,f,h,S,T,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,x=m+1,v=m+2;s=vr(this,o,t,n,c,f,h,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Mu(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function vr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,yr);let f=Mu(i,t,e,n,mr,gr,yr,Lc);if(f){let h=new D;xi.getBarycoord(Lc,mr,gr,yr,h),s&&(f.uv=xi.getInterpolatedAttribute(s,a,l,c,h,new Et)),r&&(f.uv1=xi.getInterpolatedAttribute(r,a,l,c,h,new Et)),o&&(f.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};xi.getNormal(mr,gr,yr,u.normal),f.face=u,f.barycoord=h}return f}var Rt=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(h,2));function g(_,m,p,M,x,v,R,S,T,I,V){let y=v/T,E=R/I,L=v/2,H=R/2,C=S/2,G=T+1,z=I+1,it=0,Y=0,B=new D;for(let j=0;j<z;j++){let st=j*E-H;for(let mt=0;mt<G;mt++){let Tt=mt*y-L;B[_]=Tt*M,B[m]=st*x,B[p]=C,c.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[p]=S>0?1:-1,f.push(B.x,B.y,B.z),h.push(mt/T),h.push(1-j/I),it+=1}}for(let j=0;j<I;j++)for(let st=0;st<T;st++){let mt=u+st+G*j,Tt=u+st+G*(j+1),et=u+(st+1)+G*(j+1),ht=u+(st+1)+G*j;l.push(mt,Tt,ht),l.push(Tt,et,ht),Y+=6}a.addGroup(d,Y,V),d+=Y,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var wu={clone:ss,merge:Qe},Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new D,Dc=new Et,Uc=new Et,Je=class extends Zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Uc),e.subVectors(Uc,Dc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vi=-90,Wi=1,Ka=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Vi,Wi,t,e);s.layers=this.layers,this.add(s);let r=new Je(Vi,Wi,t,e);r.layers=this.layers,this.add(r);let o=new Je(Vi,Wi,t,e);o.layers=this.layers,this.add(o);let a=new Je(Vi,Wi,t,e);a.layers=this.layers,this.add(a);let l=new Je(Vi,Wi,t,e);l.layers=this.layers,this.add(l);let c=new Je(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$r=class extends je{constructor(t,e,n,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qa=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $r(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Cn});r.uniforms.tEquirect.value=e;let o=new J(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Mn),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Jo=new D,Tu=new D,Ru=new oe,vn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Jo.subVectors(n,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ru.getNormalMatrix(t),s=this.coplanarPoint(Jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},di=new ii,Mr=new D,Bs=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,m-d,v-p).normalize(),n[1].setComponents(l+r,u+c,m+d,v+p).normalize(),n[2].setComponents(l+o,u+f,m+g,v+M).normalize(),n[3].setComponents(l-o,u-f,m-g,v-M).normalize(),n[4].setComponents(l-a,u-h,m-_,v-x).normalize(),e===kn)n[5].setComponents(l+a,u+h,m+_,v+x).normalize();else if(e===Vr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){let g=h[u],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ie=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<f;p++){let M=p*u-o;for(let x=0;x<c;x++){let v=x*h-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let x=M+c*p,v=M+c*(p+1),R=M+1+c*(p+1),S=M+1+c*p;d.push(x,v,S),d.push(v,R,S)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qu=`#define PI 3.141592653589793
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
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
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
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,Rd=`struct PhysicalMaterial {
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
}`,Ad=`
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,$p=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,Qp=`#define STANDARD
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
}`,jp=`#define STANDARD
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
}`,t0=`#define TOON
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
}`,e0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Iu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Hu,batching_pars_vertex:zu,batching_vertex:Fu,begin_vertex:Bu,beginnormal_vertex:Ou,bsdfs:ku,iridescence_fragment:Gu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:$u,color_pars_vertex:Ju,color_vertex:Ku,common:Qu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:od,envmap_fragment:ad,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:fd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:yd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:_d,lights_pars_begin:vd,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Sd,lights_phong_pars_fragment:bd,lights_physical_fragment:Td,lights_physical_pars_fragment:Rd,lights_fragment_begin:Ad,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Hd,map_particle_fragment:zd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:Od,morphinstance_vertex:kd,morphcolor_vertex:Gd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:$d,normal_vertex:Jd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:fp,shadowmap_vertex:up,shadowmask_pars_fragment:dp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:yp,specularmap_fragment:xp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:Mp,transmission_fragment:Ep,transmission_pars_fragment:wp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:Tp,worldpos_vertex:Rp,background_vert:Ap,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Ip,cube_vert:Lp,cube_frag:Dp,depth_vert:Up,depth_frag:Np,distanceRGBA_vert:Hp,distanceRGBA_frag:zp,equirect_vert:Fp,equirect_frag:Bp,linedashed_vert:Op,linedashed_frag:kp,meshbasic_vert:Gp,meshbasic_frag:Vp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:Zp,meshnormal_frag:$p,meshphong_vert:Jp,meshphong_frag:Kp,meshphysical_vert:Qp,meshphysical_frag:jp,meshtoon_vert:t0,meshtoon_frag:e0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:o0,sprite_frag:a0},Pt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Rn={basic:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Qe([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Qe([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Qe([Pt.points,Pt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Qe([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Qe([Pt.common,Pt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Qe([Pt.sprite,Pt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Qe([Pt.common,Pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Qe([Pt.lights,Pt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Rn.physical={uniforms:Qe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Er={r:0,b:0,g:0},pi=new In,l0=new ae;function c0(i,t,e,n,s,r,o){let a=new Kt(0),l=r===!0?0:1,c,f,h=null,u=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,v=g(M);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){let v=g(x);v&&(v.isCubeTexture||v.mapping===lo)?(f===void 0&&(f=new J(new Rt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ss(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),pi.copy(x.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(pi)),f.material.toneMapped=me.getTransfer(v.colorSpace)!==Me,(h!==v||u!==v.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new ie(2,2),new Ln({name:"BackgroundMaterial",uniforms:ss(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Er,Uh(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function h0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(y,E,L,H,C){let G=!1,z=h(H,L,E);r!==z&&(r=z,c(r.object)),G=d(y,H,L,C),G&&g(y,H,L,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(y,E,L,H),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function h(y,E,L){let H=L.wireframe===!0,C=n[y.id];C===void 0&&(C={},n[y.id]=C);let G=C[E.id];G===void 0&&(G={},C[E.id]=G);let z=G[H];return z===void 0&&(z=u(l()),G[H]=z),z}function u(y){let E=[],L=[],H=[];for(let C=0;C<e;C++)E[C]=0,L[C]=0,H[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:H,object:y,attributes:{},index:null}}function d(y,E,L,H){let C=r.attributes,G=E.attributes,z=0,it=L.getAttributes();for(let Y in it)if(it[Y].location>=0){let j=C[Y],st=G[Y];if(st===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),j===void 0||j.attribute!==st||st&&j.data!==st.data)return!0;z++}return r.attributesNum!==z||r.index!==H}function g(y,E,L,H){let C={},G=E.attributes,z=0,it=L.getAttributes();for(let Y in it)if(it[Y].location>=0){let j=G[Y];j===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));let st={};st.attribute=j,j&&j.data&&(st.data=j.data),C[Y]=st,z++}r.attributes=C,r.attributesNum=z,r.index=H}function _(){let y=r.newAttributes;for(let E=0,L=y.length;E<L;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){let L=r.newAttributes,H=r.enabledAttributes,C=r.attributeDivisors;L[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),C[y]!==E&&(i.vertexAttribDivisor(y,E),C[y]=E)}function M(){let y=r.newAttributes,E=r.enabledAttributes;for(let L=0,H=E.length;L<H;L++)E[L]!==y[L]&&(i.disableVertexAttribArray(L),E[L]=0)}function x(y,E,L,H,C,G,z){z===!0?i.vertexAttribIPointer(y,E,L,C,G):i.vertexAttribPointer(y,E,L,H,C,G)}function v(y,E,L,H){_();let C=H.attributes,G=L.getAttributes(),z=E.defaultAttributeValues;for(let it in G){let Y=G[it];if(Y.location>=0){let B=C[it];if(B===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(B=y.instanceColor)),B!==void 0){let j=B.normalized,st=B.itemSize,mt=t.get(B);if(mt===void 0)continue;let Tt=mt.buffer,et=mt.type,ht=mt.bytesPerElement,_t=et===i.INT||et===i.UNSIGNED_INT||B.gpuType===Hl;if(B.isInterleavedBufferAttribute){let xt=B.data,Ut=xt.stride,Gt=B.offset;if(xt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)p(Y.location+Xt,xt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)m(Y.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Xt=0;Xt<Y.locationSize;Xt++)x(Y.location+Xt,st/Y.locationSize,et,j,Ut*ht,(Gt+st/Y.locationSize*Xt)*ht,_t)}else{if(B.isInstancedBufferAttribute){for(let xt=0;xt<Y.locationSize;xt++)p(Y.location+xt,B.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let xt=0;xt<Y.locationSize;xt++)m(Y.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let xt=0;xt<Y.locationSize;xt++)x(Y.location+xt,st/Y.locationSize,et,j,st*ht,st/Y.locationSize*xt*ht,_t)}}else if(z!==void 0){let j=z[it];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(Y.location,j);break;case 3:i.vertexAttrib3fv(Y.location,j);break;case 4:i.vertexAttrib4fv(Y.location,j);break;default:i.vertexAttrib1fv(Y.location,j)}}}}M()}function R(){I();for(let y in n){let E=n[y];for(let L in E){let H=E[L];for(let C in H)f(H[C].object),delete H[C];delete E[L]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let L in E){let H=E[L];for(let C in H)f(H[C].object),delete H[C];delete E[L]}delete n[y.id]}function T(y){for(let E in n){let L=n[E];if(L[y.id]===void 0)continue;let H=L[y.id];for(let C in H)f(H[C].object),delete H[C];delete L[y.id]}}function I(){V(),o=!0,r!==s&&(r=s,c(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:V,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function f0(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let d=0;for(let g=0;g<h;g++)d+=f[g];e.update(d,n,1)}function l(c,f,h,u){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],f[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,f,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:S}}function d0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new vn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{let M=r?0:n,x=M*4,v=p.clippingState||null;l.value=v,v=f(g,u,x,d);for(let R=0;R!==x;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function p0(i){let t=new WeakMap;function e(o,a){return a===ya?o.mapping=ts:a===xa&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ya||a===xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ri=class extends Zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yi=4,Nc=[.125,.215,.35,.446,.526,.582],_i=20,Ko=new ri,Hc=new Kt,Qo=null,jo=0,ta=0,ea=!1,gi=(1+Math.sqrt(5))/2,Xi=1/gi,zc=[new D(-gi,Xi,0),new D(gi,Xi,0),new D(-Xi,0,gi),new D(Xi,0,gi),new D(0,gi,-Xi),new D(0,gi,Xi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qo,jo,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ks,format:En,colorSpace:ci,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(r)),this._blurMaterial=g0(r,t,e)}return s}_compileMaterial(t){let e=new J(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Hc),f.toneMapping=ti,f.autoClear=!1;let d=new ee({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new J(new Rt,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Hc),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;wr(s,M*x,p>2?x:0,x,x),f.setRenderTarget(s),_&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ko)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zc[(s-r-1)%zc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new J(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_i-1),_=r/g,m=isFinite(r)?1+Math.floor(f*_):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);let p=[],M=0;for(let T=0;T<_i;++T){let I=T/_,V=Math.exp(-I*I/2);p.push(V),T===0?M+=V:T<m&&(M+=2*V)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let v=this._sizeLods[s],R=3*v*(s>x-Yi?s-x+Yi:0),S=4*(this._cubeSize-v);wr(e,R,S,3*v,2*v),l.setRenderTarget(e),l.render(h,Ko)}};function m0(i){let t=[],e=[],n=[],s=i,r=i-Yi+1+Nc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Yi?l=Nc[o-i+Yi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let S=0;S<d;S++){let T=S%3*2/3-1,I=S>2?0:-1,V=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(V,_*g*S),x.set(u,m*g*S);let y=[S,S,S,S,S,S];v.set(y,p*g*S)}let R=new Le;R.setAttribute("position",new qe(M,_)),R.setAttribute("uv",new qe(x,m)),R.setAttribute("faceIndex",new qe(v,p)),t.push(R),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(i,t,e){let n=new Vn(i,t,e);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g0(i,t,e){let n=new Float32Array(_i),s=new D(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Bc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Oc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function y0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ya||l===xa,f=l===ts||l===es;if(c||f){let h=t.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Jr(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new Jr(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function x0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){let u=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){let R=M[x+0],S=M[x+1],T=M[x+2];u.push(R,S,S,T,T,R)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){let R=x+0,S=x+1,T=x+2;u.push(R,S,S,T,T,R)}}else return;let m=new(Lh(u)?Yr:qr)(u,1);m.version=_;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function v0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*o,g),e.update(d,n,g))}function f(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(u,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function M0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function E0(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let V=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",V)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*R*4*h),T=new Xr(S,v,R,h);T.type=An,T.needsUpdate=!0;let I=x*4;for(let y=0;y<h;y++){let E=m[y],L=p[y],H=M[y],C=v*R*4*y;for(let G=0;G<E.count;G++){let z=G*I;d===!0&&(s.fromBufferAttribute(E,G),S[C+z+0]=s.x,S[C+z+1]=s.y,S[C+z+2]=s.z,S[C+z+3]=0),g===!0&&(s.fromBufferAttribute(L,G),S[C+z+4]=s.x,S[C+z+5]=s.y,S[C+z+6]=s.z,S[C+z+7]=0),_===!0&&(s.fromBufferAttribute(H,G),S[C+z+8]=s.x,S[C+z+9]=s.y,S[C+z+10]=s.z,S[C+z+11]=H.itemSize===4?s.w:1)}}u={count:h,texture:T,size:new Et(v,R)},n.set(a,u),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function w0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Kr=class extends je{constructor(t,e,n,s,r,o,a,l,c,f=Ji){if(f!==Ji&&f!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ji&&(n=Ei),n===void 0&&f===is&&(n=ns),super(null,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hh=new je,kc=new Kr(1,1),zh=new Xr,Fh=new Ja,Bh=new $r,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gc[s];if(r===void 0&&(r=new Float32Array(s),Gc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),ze(e,n)}}function C0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),ze(e,n)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),ze(e,n)}}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function N0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Ih,r=kc):r=Hh,e.setTexture2D(t||r,s)}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fh,s)}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bh,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zh,s)}function V0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return T0;case 35666:return R0;case 35674:return A0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return H0;case 36295:return z0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return G0}}function W0(i,t){i.uniform1fv(this.addr,t)}function X0(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function q0(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Y0(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Z0(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $0(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function J0(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K0(i,t){i.uniform1iv(this.addr,t)}function Q0(i,t){i.uniform2iv(this.addr,t)}function j0(i,t){i.uniform3iv(this.addr,t)}function tm(i,t){i.uniform4iv(this.addr,t)}function em(i,t){i.uniform1uiv(this.addr,t)}function nm(i,t){i.uniform2uiv(this.addr,t)}function im(i,t){i.uniform3uiv(this.addr,t)}function sm(i,t){i.uniform4uiv(this.addr,t)}function rm(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hh,r[o])}function om(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fh,r[o])}function am(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bh,r[o])}function lm(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zh,r[o])}function cm(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return Q0;case 35668:case 35672:return j0;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return lm}}var ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V0(e.type)}},tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cm(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},na=/(\w+)(\])?(\[|\.)?/g;function Yc(i,t){i.seq.push(t),i.map[t.id]=t}function hm(i,t,e){let n=i.name,s=n.length;for(na.lastIndex=0;;){let r=na.exec(n),o=na.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yc(e,c===void 0?new ja(a,i,t):new tl(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new el(a),Yc(e,h)),e=h}}}var Qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Zc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var fm=37297,um=0;function dm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function pm(i){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i),n;switch(t===e?n="":t===Gr&&e===kr?n="LinearDisplayP3ToLinearSRGB":t===kr&&e===Gr&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case co:return[n,"LinearTransferOETF"];case Ee:case Vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $c(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dm(i.getShaderSource(t),o)}else return s}function mm(i,t){let e=pm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gm(i,t){let e;switch(t){case kf:e="Linear";break;case Gf:e="Reinhard";break;case Vf:e="Cineon";break;case Js:e="ACESFilmic";break;case Xf:e="AgX";break;case qf:e="Neutral";break;case Wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sr=new D;function ym(){me.getLuminanceCoefficients(Sr);let i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function _m(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ps(i){return i!==""}function Jc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(Mm,wm)}var Em=new Map;function wm(i,t){let e=re[t];if(e===void 0){let n=Em.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}var Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(Sm,bm)}function bm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ps?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function Cm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case Bf:t="ENVMAP_BLENDING_MIX";break;case Of:t="ENVMAP_BLENDING_ADD";break}return t}function Pm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tm(e),c=Rm(e),f=Am(e),h=Cm(e),u=Pm(e),d=xm(e),g=_m(r),_=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?re.tonemapping_pars_fragment:"",e.toneMapping!==ti?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,mm("linearToOutputTexel",e.outputColorSpace),ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=nl(o),o=Jc(o,e),o=Kc(o,e),a=nl(a),a=Jc(a,e),a=Kc(a,e),o=Qc(o),a=Qc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=M+m+o,v=M+p+a,R=Zc(s,s.VERTEX_SHADER,x),S=Zc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(E){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(R).trim(),C=s.getShaderInfoLog(S).trim(),G=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,S);else{let it=$c(s,R,"vertex"),Y=$c(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+it+`
`+Y)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(H===""||C==="")&&(z=!1);z&&(E.diagnostics={runnable:G,programLog:L,vertexShader:{log:H,prefix:m},fragmentShader:{log:C,prefix:p}})}s.deleteShader(R),s.deleteShader(S),I=new Qi(s,_),V=vm(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let V;this.getAttributes=function(){return V===void 0&&T(this),V};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,fm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=um++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}var Lm=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sl(t),e.set(t,n)),n}},sl=class{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}};function Dm(i,t,e,n,s,r,o){let a=new Fs,l=new il,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,L,H,C){let G=H.fog,z=C.geometry,it=y.isMeshStandardMaterial?H.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||it),B=Y&&Y.mapping===lo?Y.image.height:null,j=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=st!==void 0?st.length:0,Tt=0;z.morphAttributes.position!==void 0&&(Tt=1),z.morphAttributes.normal!==void 0&&(Tt=2),z.morphAttributes.color!==void 0&&(Tt=3);let et,ht,_t,xt;if(j){let he=Rn[j];et=he.vertexShader,ht=he.fragmentShader}else et=y.vertexShader,ht=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);let Ut=i.getRenderTarget(),Gt=C.isInstancedMesh===!0,Xt=C.isBatchedMesh===!0,te=!!y.map,ut=!!y.matcap,P=!!Y,wt=!!y.aoMap,q=!!y.lightMap,Z=!!y.bumpMap,ft=!!y.normalMap,gt=!!y.displacementMap,pt=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,O=y.anisotropy>0,at=y.clearcoat>0,lt=y.dispersion>0,rt=y.iridescence>0,Lt=y.sheen>0,Mt=y.transmission>0,Ct=O&&!!y.anisotropyMap,$t=at&&!!y.clearcoatMap,N=at&&!!y.clearcoatNormalMap,Q=at&&!!y.clearcoatRoughnessMap,yt=rt&&!!y.iridescenceMap,It=rt&&!!y.iridescenceThicknessMap,vt=Lt&&!!y.sheenColorMap,Yt=Lt&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,ne=!!y.specularColorMap,F=!!y.specularIntensityMap,At=Mt&&!!y.transmissionMap,ot=Mt&&!!y.thicknessMap,X=!!y.gradientMap,$=!!y.alphaMap,ct=y.alphaTest>0,Ht=!!y.alphaHash,Zt=!!y.extensions,ue=ti;y.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Qt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:ht,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&C._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&C.instanceColor!==null,instancingMorph:Gt&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ci,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:ut,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:B,aoMap:wt,lightMap:q,bumpMap:Z,normalMap:ft,displacementMap:d&&gt,emissiveMap:pt,normalMapObjectSpace:ft&&y.normalMapType===Jf,normalMapTangentSpace:ft&&y.normalMapType===Ph,metalnessMap:A,roughnessMap:w,anisotropy:O,anisotropyMap:Ct,clearcoat:at,clearcoatMap:$t,clearcoatNormalMap:N,clearcoatRoughnessMap:Q,dispersion:lt,iridescence:rt,iridescenceMap:yt,iridescenceThicknessMap:It,sheen:Lt,sheenColorMap:vt,sheenRoughnessMap:Yt,specularMap:Nt,specularColorMap:ne,specularIntensityMap:F,transmission:Mt,transmissionMap:At,thicknessMap:ot,gradientMap:X,opaque:y.transparent===!1&&y.blending===$i&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:Ht,combine:y.combine,mapUv:te&&m(y.map.channel),aoMapUv:wt&&m(y.aoMap.channel),lightMapUv:q&&m(y.lightMap.channel),bumpMapUv:Z&&m(y.bumpMap.channel),normalMapUv:ft&&m(y.normalMap.channel),displacementMapUv:gt&&m(y.displacementMap.channel),emissiveMapUv:pt&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:Ct&&m(y.anisotropyMap.channel),clearcoatMapUv:$t&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:N&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:It&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&m(y.sheenRoughnessMap.channel),specularMapUv:Nt&&m(y.specularMap.channel),specularColorMapUv:ne&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:At&&m(y.transmissionMap.channel),thicknessMapUv:ot&&m(y.thicknessMap.channel),alphaMapUv:$&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!z.attributes.uv&&(te||$),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xe,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Zt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&y.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function M(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){let E=_[y.type],L;if(E){let H=Rn[E];L=wu.clone(H.uniforms)}else L=y.uniforms;return L}function S(y,E){let L;for(let H=0,C=f.length;H<C;H++){let G=f[H];if(G.cacheKey===E){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Im(i,E,y,r),f.push(L)),L}function T(y){if(--y.usedTimes===0){let E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function I(y){l.remove(y)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:R,acquireProgram:S,releaseProgram:T,releaseShaderCache:I,programs:f,dispose:V}}function Um(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,u,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,u,d,g,_,m){let p=o(h,u,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,u,d,g,_,m){let p=o(h,u,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,u){e.length>1&&e.sort(h||Nm),n.length>1&&n.sort(u||th),s.length>1&&s.sort(u||th)}function f(){for(let h=t,u=i.length;h<u;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function Hm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new eh,i.set(n,[o])):s>=r.length?(o=new eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Fm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bm=0;function Om(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function km(i){let t=new zm,e=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ae,o=new ae;function a(c){let f=0,h=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,R=0,S=0,T=0;c.sort(Om);for(let V=0,y=c.length;V<y;V++){let E=c[V],L=E.color,H=E.intensity,C=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=L.r*H,h+=L.g*H,u+=L.b*H;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],H);T++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let it=E.shadow,Y=e.get(E);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=E.shadow.matrix,M++}n.directional[d]=z,d++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(L).multiplyScalar(H),z.distance=C,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;let it=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,it.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[_]=it.matrix,E.castShadow){let Y=e.get(E);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=G,v++}_++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(L).multiplyScalar(H),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=z,m++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let it=E.shadow,Y=e.get(E);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=z,g++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(H),z.groundColor.copy(E.groundColor).multiplyScalar(H),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=T,n.version=Bm++)}function l(c,f){let h=0,u=0,d=0,g=0,_=0,m=f.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let x=c[p];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function nh(i){let t=new km(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nh(i),t.set(s,[a])):r>=o.length?(a=new nh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var rl=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,t,e){let n=new Bs,s=new Et,r=new Et,o=new ye,a=new rl({depthPacking:$f}),l=new ol,c={},f=e.maxTextureSize,h={[ei]:nn,[nn]:ei,[xe]:xe},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new J(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(S,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let V=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Cn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let H=p!==On&&this.type===On,C=p===On&&this.type!==On;for(let G=0,z=S.length;G<z;G++){let it=S[G],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let B=Y.getFrameExtents();if(s.multiply(B),r.copy(Y.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/B.x),s.x=r.x*B.x,Y.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/B.y),s.y=r.y*B.y,Y.mapSize.y=r.y)),Y.map===null||H===!0||C===!0){let st=this.type!==On?{minFilter:en,magFilter:en}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Vn(s.x,s.y,st),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let j=Y.getViewportCount();for(let st=0;st<j;st++){let mt=Y.getViewport(st);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),L.viewport(o),Y.updateMatrices(it,st),n=Y.getFrustum(),v(T,I,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===On&&M(Y,I),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(V,y,E)};function M(S,T){let I=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,I,u,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,I,d,_,null)}function x(S,T,I,V){let y=null,E=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let L=y.uuid,H=T.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let G=C[H];G===void 0&&(G=y.clone(),C[H]=G,T.addEventListener("dispose",R)),y=G}if(y.visible=T.visible,y.wireframe=T.wireframe,V===On?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=i.properties.get(y);L.light=I}return y}function v(S,T,I,V,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===On)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let H=t.update(S),C=S.material;if(Array.isArray(C)){let G=H.groups;for(let z=0,it=G.length;z<it;z++){let Y=G[z],B=C[Y.materialIndex];if(B&&B.visible){let j=x(S,B,V,y);S.onBeforeShadow(i,S,T,I,H,j,Y),i.renderBufferDirect(I,null,H,j,S,Y),S.onAfterShadow(i,S,T,I,H,j,Y)}}}else if(C.visible){let G=x(S,C,V,y);S.onBeforeShadow(i,S,T,I,H,G,null),i.renderBufferDirect(I,null,H,G,S,null),S.onAfterShadow(i,S,T,I,H,G,null)}}let L=S.children;for(let H=0,C=L.length;H<C;H++)v(L[H],T,I,V,y)}function R(S){S.target.removeEventListener("dispose",R);for(let I in c){let V=c[I],y=S.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}var qm={[ha]:fa,[ua]:ma,[da]:ga,[ji]:pa,[fa]:ha,[ma]:ua,[ga]:da,[pa]:ji};function Ym(i){function t(){let F=!1,At=new ye,ot=null,X=new ye(0,0,0,0);return{setMask:function($){ot!==$&&!F&&(i.colorMask($,$,$,$),ot=$)},setLocked:function($){F=$},setClear:function($,ct,Ht,Zt,ue){ue===!0&&($*=Zt,ct*=Zt,Ht*=Zt),At.set($,ct,Ht,Zt),X.equals(At)===!1&&(i.clearColor($,ct,Ht,Zt),X.copy(At))},reset:function(){F=!1,ot=null,X.set(-1,0,0,0)}}}function e(){let F=!1,At=!1,ot=null,X=null,$=null;return{setReversed:function(ct){At=ct},setTest:function(ct){ct?_t(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ct){ot!==ct&&!F&&(i.depthMask(ct),ot=ct)},setFunc:function(ct){if(At&&(ct=qm[ct]),X!==ct){switch(ct){case ha:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=ct}},setLocked:function(ct){F=ct},setClear:function(ct){$!==ct&&(i.clearDepth(ct),$=ct)},reset:function(){F=!1,ot=null,X=null,$=null}}}function n(){let F=!1,At=null,ot=null,X=null,$=null,ct=null,Ht=null,Zt=null,ue=null;return{setTest:function(Qt){F||(Qt?_t(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Qt){At!==Qt&&!F&&(i.stencilMask(Qt),At=Qt)},setFunc:function(Qt,he,Ue){(ot!==Qt||X!==he||$!==Ue)&&(i.stencilFunc(Qt,he,Ue),ot=Qt,X=he,$=Ue)},setOp:function(Qt,he,Ue){(ct!==Qt||Ht!==he||Zt!==Ue)&&(i.stencilOp(Qt,he,Ue),ct=Qt,Ht=he,Zt=Ue)},setLocked:function(Qt){F=Qt},setClear:function(Qt){ue!==Qt&&(i.clearStencil(Qt),ue=Qt)},reset:function(){F=!1,At=null,ot=null,X=null,$=null,ct=null,Ht=null,Zt=null,ue=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},f={},h=new WeakMap,u=[],d=null,g=!1,_=null,m=null,p=null,M=null,x=null,v=null,R=null,S=new Kt(0,0,0),T=0,I=!1,V=null,y=null,E=null,L=null,H=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,z=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(it)[1]),G=z>=1):it.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),G=z>=2);let Y=null,B={},j=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),mt=new ye().fromArray(j),Tt=new ye().fromArray(st);function et(F,At,ot,X){let $=new Uint8Array(4),ct=i.createTexture();i.bindTexture(F,ct),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<ot;Ht++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(At+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return ct}let ht={};ht[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),r.setFunc(ji),q(!1),Z(cc),_t(i.CULL_FACE),P(Cn);function _t(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function xt(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function Ut(F,At){return f[F]!==At?(i.bindFramebuffer(F,At),f[F]=At,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=At),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Gt(F,At){let ot=u,X=!1;if(F){ot=h.get(At),ot===void 0&&(ot=[],h.set(At,ot));let $=F.textures;if(ot.length!==$.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ht=$.length;ct<Ht;ct++)ot[ct]=i.COLOR_ATTACHMENT0+ct;ot.length=$.length,X=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,X=!0);X&&i.drawBuffers(ot)}function Xt(F){return d!==F?(i.useProgram(F),d=F,!0):!1}let te={[yi]:i.FUNC_ADD,[Ef]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};te[Sf]=i.MIN,te[bf]=i.MAX;let ut={[Tf]:i.ZERO,[Rf]:i.ONE,[Af]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Df]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[zf]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function P(F,At,ot,X,$,ct,Ht,Zt,ue,Qt){if(F===Cn){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),F!==Mf){if(F!==_||Qt!==I){if((m!==yi||x!==yi)&&(i.blendEquation(i.FUNC_ADD),m=yi,x=yi),Qt)switch(F){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,M=null,v=null,R=null,S.set(0,0,0),T=0,_=F,I=Qt}return}$=$||At,ct=ct||ot,Ht=Ht||X,(At!==m||$!==x)&&(i.blendEquationSeparate(te[At],te[$]),m=At,x=$),(ot!==p||X!==M||ct!==v||Ht!==R)&&(i.blendFuncSeparate(ut[ot],ut[X],ut[ct],ut[Ht]),p=ot,M=X,v=ct,R=Ht),(Zt.equals(S)===!1||ue!==T)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ue),S.copy(Zt),T=ue),_=F,I=!1}function wt(F,At){F.side===xe?xt(i.CULL_FACE):_t(i.CULL_FACE);let ot=F.side===nn;At&&(ot=!ot),q(ot),F.blending===$i&&F.transparent===!1?P(Cn):P(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);let X=F.stencilWrite;o.setTest(X),X&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(F){V!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),V=F)}function Z(F){F!==xf?(_t(i.CULL_FACE),F!==y&&(F===cc?i.cullFace(i.BACK):F===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),y=F}function ft(F){F!==E&&(G&&i.lineWidth(F),E=F)}function gt(F,At,ot){F?(_t(i.POLYGON_OFFSET_FILL),(L!==At||H!==ot)&&(i.polygonOffset(At,ot),L=At,H=ot)):xt(i.POLYGON_OFFSET_FILL)}function pt(F){F?_t(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+C-1),Y!==F&&(i.activeTexture(F),Y=F)}function w(F,At,ot){ot===void 0&&(Y===null?ot=i.TEXTURE0+C-1:ot=Y);let X=B[ot];X===void 0&&(X={type:void 0,texture:void 0},B[ot]=X),(X.type!==F||X.texture!==At)&&(Y!==ot&&(i.activeTexture(ot),Y=ot),i.bindTexture(F,At||ht[F]),X.type=F,X.texture=At)}function O(){let F=B[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(F){mt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function vt(F){Tt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Tt.copy(F))}function Yt(F,At){let ot=l.get(At);ot===void 0&&(ot=new WeakMap,l.set(At,ot));let X=ot.get(F);X===void 0&&(X=i.getUniformBlockIndex(At,F.name),ot.set(F,X))}function Nt(F,At){let X=l.get(At).get(F);a.get(At)!==X&&(i.uniformBlockBinding(At,X,F.__bindingPointIndex),a.set(At,X))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,B={},f={},h=new WeakMap,u=[],d=null,g=!1,_=null,m=null,p=null,M=null,x=null,v=null,R=null,S=new Kt(0,0,0),T=0,I=!1,V=null,y=null,E=null,L=null,H=null,mt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:_t,disable:xt,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:Xt,setBlending:P,setMaterial:wt,setFlipSided:q,setCullFace:Z,setLineWidth:ft,setPolygonOffset:gt,setScissorTest:pt,activeTexture:A,bindTexture:w,unbindTexture:O,compressedTexImage2D:at,compressedTexImage3D:lt,texImage2D:Q,texImage3D:yt,updateUBOMapping:Yt,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:N,texSubImage2D:rt,texSubImage3D:Lt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Ct,scissor:It,viewport:vt,reset:ne}}function ih(i,t,e,n){let s=Zm(n);switch(e){case Sh:return i*t;case Th:return i*t;case Rh:return i*t*2;case Bl:return i*t/s.components*s.byteLength;case Ol:return i*t/s.components*s.byteLength;case Ah:return i*t*2/s.components*s.byteLength;case kl:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Gl:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case wa:return Math.max(i,16)*Math.max(t,8)/4;case va:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hr:case ka:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ch:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zm(i){switch(i){case Gn:case Mh:return{byteLength:1,components:1};case Ns:case Eh:case Ks:return{byteLength:2,components:1};case zl:case Fl:return{byteLength:2,components:4};case Ei:case Hl:case An:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $m(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,f=new WeakMap,h,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return d?new OffscreenCanvas(A,w):Hs("canvas")}function _(A,w,O){let at=1,lt=pt(A);if((lt.width>O||lt.height>O)&&(at=O/Math.max(lt.width,lt.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(at*lt.width),Lt=Math.floor(at*lt.height);h===void 0&&(h=g(rt,Lt));let Mt=w?g(rt,Lt):h;return Mt.width=rt,Mt.height=Lt,Mt.getContext("2d").drawImage(A,0,0,rt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+rt+"x"+Lt+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==en&&A.minFilter!==Mn}function p(A){i.generateMipmap(A)}function M(A,w,O,at,lt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=w;if(w===i.RED&&(O===i.FLOAT&&(rt=i.R32F),O===i.HALF_FLOAT&&(rt=i.R16F),O===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.R8UI),O===i.UNSIGNED_SHORT&&(rt=i.R16UI),O===i.UNSIGNED_INT&&(rt=i.R32UI),O===i.BYTE&&(rt=i.R8I),O===i.SHORT&&(rt=i.R16I),O===i.INT&&(rt=i.R32I)),w===i.RG&&(O===i.FLOAT&&(rt=i.RG32F),O===i.HALF_FLOAT&&(rt=i.RG16F),O===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RG8UI),O===i.UNSIGNED_SHORT&&(rt=i.RG16UI),O===i.UNSIGNED_INT&&(rt=i.RG32UI),O===i.BYTE&&(rt=i.RG8I),O===i.SHORT&&(rt=i.RG16I),O===i.INT&&(rt=i.RG32I)),w===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),O===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),O===i.UNSIGNED_INT&&(rt=i.RGB32UI),O===i.BYTE&&(rt=i.RGB8I),O===i.SHORT&&(rt=i.RGB16I),O===i.INT&&(rt=i.RGB32I)),w===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),O===i.UNSIGNED_INT&&(rt=i.RGBA32UI),O===i.BYTE&&(rt=i.RGBA8I),O===i.SHORT&&(rt=i.RGBA16I),O===i.INT&&(rt=i.RGBA32I)),w===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),w===i.RGBA){let Lt=lt?Or:me.getTransfer(at);O===i.FLOAT&&(rt=i.RGBA32F),O===i.HALF_FLOAT&&(rt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(rt=Lt===Me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(A,w){let O;return A?w===null||w===Ei||w===ns?O=i.DEPTH24_STENCIL8:w===An?O=i.DEPTH32F_STENCIL8:w===Ns&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ei||w===ns?O=i.DEPTH_COMPONENT24:w===An?O=i.DEPTH_COMPONENT32F:w===Ns&&(O=i.DEPTH_COMPONENT16),O}function v(A,w){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function R(A){let w=A.target;w.removeEventListener("dispose",R),T(w),w.isVideoTexture&&f.delete(w)}function S(A){let w=A.target;w.removeEventListener("dispose",S),V(w)}function T(A){let w=n.get(A);if(w.__webglInit===void 0)return;let O=A.source,at=u.get(O);if(at){let lt=at[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&I(A),Object.keys(at).length===0&&u.delete(O)}n.remove(A)}function I(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let O=A.source,at=u.get(O);delete at[w.__cacheKey],o.memory.textures--}function V(A){let w=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(w.__webglFramebuffer[at]))for(let lt=0;lt<w.__webglFramebuffer[at].length;lt++)i.deleteFramebuffer(w.__webglFramebuffer[at][lt]);else i.deleteFramebuffer(w.__webglFramebuffer[at]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[at])}else{if(Array.isArray(w.__webglFramebuffer))for(let at=0;at<w.__webglFramebuffer.length;at++)i.deleteFramebuffer(w.__webglFramebuffer[at]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let at=0;at<w.__webglColorRenderbuffer.length;at++)w.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[at]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let O=A.textures;for(let at=0,lt=O.length;at<lt;at++){let rt=n.get(O[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(O[at])}n.remove(A)}let y=0;function E(){y=0}function L(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function H(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function C(A,w){let O=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let at=A.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(O,A,w);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+w)}function G(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Tt(O,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+w)}function z(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Tt(O,A,w);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+w)}function it(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){et(O,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+w)}let Y={[wn]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},B={[en]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},j={[Kf]:i.NEVER,[iu]:i.ALWAYS,[Qf]:i.LESS,[Ih]:i.LEQUAL,[jf]:i.EQUAL,[nu]:i.GEQUAL,[tu]:i.GREATER,[eu]:i.NOTEQUAL};function st(A,w){if(w.type===An&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===To||w.magFilter===sr||w.magFilter===Mi||w.minFilter===Mn||w.minFilter===To||w.minFilter===sr||w.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,B[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,B[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==sr&&w.minFilter!==Mi||w.type===An&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function mt(A,w){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",R));let at=w.source,lt=u.get(at);lt===void 0&&(lt={},u.set(at,lt));let rt=H(w);if(rt!==A.__cacheKey){lt[rt]===void 0&&(lt[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),lt[rt].usedTimes++;let Lt=lt[A.__cacheKey];Lt!==void 0&&(lt[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&I(w)),A.__cacheKey=rt,A.__webglTexture=lt[rt].texture}return O}function Tt(A,w,O){let at=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=i.TEXTURE_3D);let lt=mt(A,w),rt=w.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+O);let Lt=n.get(rt);if(rt.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+O);let Mt=me.getPrimaries(me.workingColorSpace),Ct=w.colorSpace===jn?null:me.getPrimaries(w.colorSpace),$t=w.colorSpace===jn||Mt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let N=_(w.image,!1,s.maxTextureSize);N=gt(w,N);let Q=r.convert(w.format,w.colorSpace),yt=r.convert(w.type),It=M(w.internalFormat,Q,yt,w.colorSpace,w.isVideoTexture);st(at,w);let vt,Yt=w.mipmaps,Nt=w.isVideoTexture!==!0,ne=Lt.__version===void 0||lt===!0,F=rt.dataReady,At=v(w,N);if(w.isDepthTexture)It=x(w.format===is,w.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,It,N.width,N.height):e.texImage2D(i.TEXTURE_2D,0,It,N.width,N.height,0,Q,yt,null));else if(w.isDataTexture)if(Yt.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,At,It,Yt[0].width,Yt[0].height);for(let ot=0,X=Yt.length;ot<X;ot++)vt=Yt[ot],Nt?F&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Q,yt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,It,vt.width,vt.height,0,Q,yt,vt.data);w.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,At,It,N.width,N.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,N.width,N.height,Q,yt,N.data)):e.texImage2D(i.TEXTURE_2D,0,It,N.width,N.height,0,Q,yt,N.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,It,Yt[0].width,Yt[0].height,N.depth);for(let ot=0,X=Yt.length;ot<X;ot++)if(vt=Yt[ot],w.format!==En)if(Q!==null)if(Nt){if(F)if(w.layerUpdates.size>0){let $=ih(vt.width,vt.height,w.format,w.type);for(let ct of w.layerUpdates){let Ht=vt.data.subarray(ct*$/vt.data.BYTES_PER_ELEMENT,(ct+1)*$/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ct,vt.width,vt.height,1,Q,Ht,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,N.depth,Q,vt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,It,vt.width,vt.height,N.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,N.depth,Q,yt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,It,vt.width,vt.height,N.depth,0,Q,yt,vt.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,At,It,Yt[0].width,Yt[0].height);for(let ot=0,X=Yt.length;ot<X;ot++)vt=Yt[ot],w.format!==En?Q!==null?Nt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Q,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,It,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?F&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Q,yt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,It,vt.width,vt.height,0,Q,yt,vt.data)}else if(w.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,It,N.width,N.height,N.depth),F)if(w.layerUpdates.size>0){let ot=ih(N.width,N.height,w.format,w.type);for(let X of w.layerUpdates){let $=N.data.subarray(X*ot/N.data.BYTES_PER_ELEMENT,(X+1)*ot/N.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,N.width,N.height,1,Q,yt,$)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,Q,yt,N.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,N.width,N.height,N.depth,0,Q,yt,N.data);else if(w.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,At,It,N.width,N.height,N.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,Q,yt,N.data)):e.texImage3D(i.TEXTURE_3D,0,It,N.width,N.height,N.depth,0,Q,yt,N.data);else if(w.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,At,It,N.width,N.height);else{let ot=N.width,X=N.height;for(let $=0;$<At;$++)e.texImage2D(i.TEXTURE_2D,$,It,ot,X,0,Q,yt,null),ot>>=1,X>>=1}}else if(Yt.length>0){if(Nt&&ne){let ot=pt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,At,It,ot.width,ot.height)}for(let ot=0,X=Yt.length;ot<X;ot++)vt=Yt[ot],Nt?F&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Q,yt,vt):e.texImage2D(i.TEXTURE_2D,ot,It,Q,yt,vt);w.generateMipmaps=!1}else if(Nt){if(ne){let ot=pt(N);e.texStorage2D(i.TEXTURE_2D,At,It,ot.width,ot.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,yt,N)}else e.texImage2D(i.TEXTURE_2D,0,It,Q,yt,N);m(w)&&p(at),Lt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function et(A,w,O){if(w.image.length!==6)return;let at=mt(A,w),lt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let rt=n.get(lt);if(lt.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+O);let Lt=me.getPrimaries(me.workingColorSpace),Mt=w.colorSpace===jn?null:me.getPrimaries(w.colorSpace),Ct=w.colorSpace===jn||Lt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let $t=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let X=0;X<6;X++)!$t&&!N?Q[X]=_(w.image[X],!0,s.maxCubemapSize):Q[X]=N?w.image[X].image:w.image[X],Q[X]=gt(w,Q[X]);let yt=Q[0],It=r.convert(w.format,w.colorSpace),vt=r.convert(w.type),Yt=M(w.internalFormat,It,vt,w.colorSpace),Nt=w.isVideoTexture!==!0,ne=rt.__version===void 0||at===!0,F=lt.dataReady,At=v(w,yt);st(i.TEXTURE_CUBE_MAP,w);let ot;if($t){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Yt,yt.width,yt.height);for(let X=0;X<6;X++){ot=Q[X].mipmaps;for(let $=0;$<ot.length;$++){let ct=ot[$];w.format!==En?It!==null?Nt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$,Yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$,0,0,ct.width,ct.height,It,vt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$,Yt,ct.width,ct.height,0,It,vt,ct.data)}}}else{if(ot=w.mipmaps,Nt&&ne){ot.length>0&&At++;let X=pt(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Yt,X.width,X.height)}for(let X=0;X<6;X++)if(N){Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Q[X].width,Q[X].height,It,vt,Q[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Yt,Q[X].width,Q[X].height,0,It,vt,Q[X].data);for(let $=0;$<ot.length;$++){let Ht=ot[$].image[X].image;Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$+1,0,0,Ht.width,Ht.height,It,vt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$+1,Yt,Ht.width,Ht.height,0,It,vt,Ht.data)}}else{Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,It,vt,Q[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Yt,It,vt,Q[X]);for(let $=0;$<ot.length;$++){let ct=ot[$];Nt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$+1,0,0,It,vt,ct.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$+1,Yt,It,vt,ct.image[X])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),rt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ht(A,w,O,at,lt,rt){let Lt=r.convert(O.format,O.colorSpace),Mt=r.convert(O.type),Ct=M(O.internalFormat,Lt,Mt,O.colorSpace);if(!n.get(w).__hasExternalTextures){let N=Math.max(1,w.width>>rt),Q=Math.max(1,w.height>>rt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,rt,Ct,N,Q,w.depth,0,Lt,Mt,null):e.texImage2D(lt,rt,Ct,N,Q,0,Lt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Z(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,lt,n.get(O).__webglTexture,0,q(w)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,lt,n.get(O).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,w,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){let at=w.depthTexture,lt=at&&at.isDepthTexture?at.type:null,rt=x(w.stencilBuffer,lt),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=q(w);Z(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,rt,w.width,w.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,A)}else{let at=w.textures;for(let lt=0;lt<at.length;lt++){let rt=at[lt],Lt=r.convert(rt.format,rt.colorSpace),Mt=r.convert(rt.type),Ct=M(rt.internalFormat,Lt,Mt,rt.colorSpace),$t=q(w);O&&Z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Ct,w.width,w.height):Z(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),C(w.depthTexture,0);let at=n.get(w.depthTexture).__webglTexture,lt=q(w);if(w.depthTexture.format===Ji)Z(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(w.depthTexture.format===is)Z(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ut(A){let w=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),at){let lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,at.removeEventListener("dispose",lt)};at.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=at}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");xt(w.__webglFramebuffer,A)}else if(O){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]===void 0)w.__webglDepthbuffer[at]=i.createRenderbuffer(),_t(w.__webglDepthbuffer[at],A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),_t(w.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,w,O){let at=n.get(A);w!==void 0&&ht(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(A)}function Xt(A){let w=A.texture,O=n.get(A),at=n.get(w);A.addEventListener("dispose",S);let lt=A.textures,rt=A.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=w.version,o.memory.textures++),rt){O.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[Mt]=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)O.__webglFramebuffer[Mt][Ct]=i.createFramebuffer()}else O.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)O.__webglFramebuffer[Mt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let Mt=0,Ct=lt.length;Mt<Ct;Mt++){let $t=n.get(lt[Mt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Z(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){let Ct=lt[Mt];O.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Mt]);let $t=r.convert(Ct.format,Ct.colorSpace),N=r.convert(Ct.type),Q=M(Ct.internalFormat,$t,N,Ct.colorSpace,A.isXRRenderTarget===!0),yt=q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,O.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),st(i.TEXTURE_CUBE_MAP,w);for(let Mt=0;Mt<6;Mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)ht(O.__webglFramebuffer[Mt][Ct],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ct);else ht(O.__webglFramebuffer[Mt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Mt=0,Ct=lt.length;Mt<Ct;Mt++){let $t=lt[Mt],N=n.get($t);e.bindTexture(i.TEXTURE_2D,N.__webglTexture),st(i.TEXTURE_2D,$t),ht(O.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,at.__webglTexture),st(Mt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)ht(O.__webglFramebuffer[Ct],A,w,i.COLOR_ATTACHMENT0,Mt,Ct);else ht(O.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,Mt,0);m(w)&&p(Mt),e.unbindTexture()}A.depthBuffer&&Ut(A)}function te(A){let w=A.textures;for(let O=0,at=w.length;O<at;O++){let lt=w[O];if(m(lt)){let rt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(lt).__webglTexture;e.bindTexture(rt,Lt),p(rt),e.unbindTexture()}}}let ut=[],P=[];function wt(A){if(A.samples>0){if(Z(A)===!1){let w=A.textures,O=A.width,at=A.height,lt=i.COLOR_BUFFER_BIT,rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(A),Mt=w.length>1;if(Mt)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);let $t=n.get(w[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,O,at,0,0,O,at,lt,i.NEAREST),l===!0&&(ut.length=0,P.length=0,ut.push(i.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(rt),P.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);let $t=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function q(A){return Math.min(s.maxSamples,A.samples)}function Z(A){let w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(A){let w=o.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function gt(A,w){let O=A.colorSpace,at=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ci&&O!==jn&&(me.getTransfer(O)===Me?(at!==En||lt!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=E,this.setTexture2D=C,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=it,this.rebindTextures=Gt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Z}function Jm(i,t){function e(n,s=jn){let r,o=me.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===bh)return i.RGB;if(n===En)return i.RGBA;if(n===Th)return i.LUMINANCE;if(n===Rh)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===Ah)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ur||n===Nr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===Ma||n===Ea||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ba||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ba)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Aa||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Ha||n===za||n===Fa||n===Ba||n===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===ka||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Va||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var al=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Bt=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jm=`
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

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ln({vertexShader:Qm,fragmentShader:jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cl=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,g=null,_=new ll,m=e.getContextAttributes(),p=null,M=null,x=[],v=[],R=new Et,S=null,T=new Je;T.layers.enable(1),T.viewport=new ye;let I=new Je;I.layers.enable(2),I.viewport=new ye;let V=[T,I],y=new al;y.layers.enable(1),y.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=x[et];return ht===void 0&&(ht=new Is,x[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=x[et];return ht===void 0&&(ht=new Is,x[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=x[et];return ht===void 0&&(ht=new Is,x[et]=ht),ht.getHandSpace()};function H(et){let ht=v.indexOf(et.inputSource);if(ht===-1)return;let _t=x[ht];_t!==void 0&&(_t.update(et.inputSource,et.frame,c||o),_t.dispatchEvent({type:et.type,data:et.inputSource}))}function C(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",G);for(let et=0;et<x.length;et++){let ht=v[et];ht!==null&&(v[et]=null,x[et].disconnect(ht))}E=null,L=null,_.reset(),t.setRenderTarget(p),d=null,u=null,h=null,s=null,M=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",C),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Vn(d.framebufferWidth,d.framebufferHeight,{format:En,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,_t=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?is:Ji,_t=m.stencil?ns:Ei);let Ut={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Vn(u.textureWidth,u.textureHeight,{format:En,type:Gn,depthTexture:new Kr(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(et){for(let ht=0;ht<et.removed.length;ht++){let _t=et.removed[ht],xt=v.indexOf(_t);xt>=0&&(v[xt]=null,x[xt].disconnect(_t))}for(let ht=0;ht<et.added.length;ht++){let _t=et.added[ht],xt=v.indexOf(_t);if(xt===-1){for(let Gt=0;Gt<x.length;Gt++)if(Gt>=v.length){v.push(_t),xt=Gt;break}else if(v[Gt]===null){v[Gt]=_t,xt=Gt;break}if(xt===-1)break}let Ut=x[xt];Ut&&Ut.connect(_t)}}let z=new D,it=new D;function Y(et,ht,_t){z.setFromMatrixPosition(ht.matrixWorld),it.setFromMatrixPosition(_t.matrixWorld);let xt=z.distanceTo(it),Ut=ht.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),te=Ut[14]/(Ut[10]+1),ut=(Ut[9]+1)/Ut[5],P=(Ut[9]-1)/Ut[5],wt=(Ut[8]-1)/Ut[0],q=(Gt[8]+1)/Gt[0],Z=Xt*wt,ft=Xt*q,gt=xt/(-wt+q),pt=gt*-wt;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(pt),et.translateZ(gt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ut[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let A=Xt+gt,w=te+gt,O=Z-pt,at=ft+(xt-pt),lt=ut*te/w*A,rt=P*te/w*A;et.projectionMatrix.makePerspective(O,at,lt,rt,A,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function B(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ht=et.near,_t=et.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),y.near=I.near=T.near=ht,y.far=I.far=T.far=_t,(E!==y.near||L!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,L=y.far);let xt=et.parent,Ut=y.cameras;B(y,xt);for(let Gt=0;Gt<Ut.length;Gt++)B(Ut[Gt],xt);Ut.length===2?Y(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),j(et,y,xt)};function j(et,ht,_t){_t===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(_t.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ya*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let st=null;function mt(et,ht){if(f=ht.getViewerPose(c||o),g=ht,f!==null){let _t=f.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let xt=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let Gt=0;Gt<_t.length;Gt++){let Xt=_t[Gt],te=null;if(d!==null)te=d.getViewport(Xt);else{let P=h.getViewSubImage(u,Xt);te=P.viewport,Gt===0&&(t.setRenderTargetTextures(M,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let ut=V[Gt];ut===void 0&&(ut=new Je,ut.layers.enable(Gt),ut.viewport=new ye,V[Gt]=ut),ut.matrix.fromArray(Xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(te.x,te.y,te.width,te.height),Gt===0&&(y.matrix.copy(ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(ut)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Gt=h.getDepthInformation(_t[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let _t=0;_t<x.length;_t++){let xt=v[_t],Ut=x[_t];xt!==null&&Ut!==void 0&&Ut.update(xt,ht,c||o)}st&&st(et,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Tt=new Nh;Tt.setAnimationLoop(mt),this.setAnimationLoop=function(et){st=et},this.dispose=function(){}}},mi=new In,tg=new ae;function eg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Uh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,mi.copy(v),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(mi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(g(M),v=f(M),s[M.id]=v,M.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(M,R);let S=t.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function f(M){let x=h();M.__bindingPointIndex=x;let v=i.createBuffer(),R=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let x=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,T=v.length;S<T;S++){let I=Array.isArray(v[S])?v[S]:[v[S]];for(let V=0,y=I.length;V<y;V++){let E=I[V];if(d(E,S,V,R)===!0){let L=E.__offset,H=Array.isArray(E.value)?E.value:[E.value],C=0;for(let G=0;G<H.length;G++){let z=H[G],it=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+C,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,C),C+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v,R){let S=M.value,T=x+"_"+v;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:R[T]=S.clone(),!0;{let I=R[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return R[T]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(M){let x=M.uniforms,v=0,R=16;for(let T=0,I=x.length;T<I;T++){let V=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,E=V.length;y<E;y++){let L=V[y],H=Array.isArray(L.value)?L.value:[L.value];for(let C=0,G=H.length;C<G;C++){let z=H[C],it=_(z),Y=v%R,B=Y%it.boundary,j=Y+B;v+=B,j!==0&&R-j<it.storage&&(v+=R-j),L.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=it.storage}}}let S=v%R;return S>0&&(v+=R-S),M.__size=v,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var rs=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,v=!1,R=0,S=0,T=null,I=-1,V=null,y=new ye,E=new ye,L=null,H=new Kt(0),C=0,G=e.width,z=e.height,it=1,Y=null,B=null,j=new ye(0,0,G,z),st=new ye(0,0,G,z),mt=!1,Tt=new Bs,et=!1,ht=!1,_t=new ae,xt=new ae,Ut=new D,Gt=new ye,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ut(){return T===null?it:1}let P=n;function wt(b,k){return e.getContext(b,k)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nl}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){let k="webgl2";if(P=wt(k,b),P===null)throw wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let q,Z,ft,gt,pt,A,w,O,at,lt,rt,Lt,Mt,Ct,$t,N,Q,yt,It,vt,Yt,Nt,ne,F;function At(){q=new x0(P),q.init(),Nt=new Jm(P,q),Z=new u0(P,q,t,Nt),ft=new Ym(P),Z.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),gt=new M0(P),pt=new Um,A=new $m(P,q,ft,pt,Z,Nt,gt),w=new p0(x),O=new y0(x),at=new Au(P),ne=new h0(P,at),lt=new _0(P,at,gt,ne),rt=new w0(P,lt,at,gt),It=new E0(P,Z,A),N=new d0(pt),Lt=new Dm(x,w,O,q,Z,ne,N),Mt=new eg(x,pt),Ct=new Hm,$t=new Gm(q),yt=new c0(x,w,O,ft,rt,u,l),Q=new Xm(x,rt,Z),F=new ng(P,gt,Z,ft),vt=new f0(P,q,gt),Yt=new v0(P,q,gt),gt.programs=Lt.programs,x.capabilities=Z,x.extensions=q,x.properties=pt,x.renderLists=Ct,x.shadowMap=Q,x.state=ft,x.info=gt}At();let ot=new cl(x,P);this.xr=ot,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(G,z,!1))},this.getSize=function(b){return b.set(G,z)},this.setSize=function(b,k,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,z=k,e.width=Math.floor(b*it),e.height=Math.floor(k*it),tt===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(G*it,z*it).floor()},this.setDrawingBufferSize=function(b,k,tt){G=b,z=k,it=tt,e.width=Math.floor(b*tt),e.height=Math.floor(k*tt),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,k,tt,nt){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,k,tt,nt),ft.viewport(y.copy(j).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,k,tt,nt){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,k,tt,nt),ft.scissor(E.copy(st).multiplyScalar(it).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){ft.setScissorTest(mt=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){B=b},this.getClearColor=function(b){return b.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(b=!0,k=!0,tt=!0){let nt=0;if(b){let W=!1;if(T!==null){let St=T.texture.format;W=St===Gl||St===kl||St===Ol}if(W){let St=T.texture.type,Dt=St===Gn||St===Ei||St===Ns||St===ns||St===zl||St===Fl,zt=yt.getClearColor(),Ft=yt.getClearAlpha(),Jt=zt.r,jt=zt.g,kt=zt.b;Dt?(d[0]=Jt,d[1]=jt,d[2]=kt,d[3]=Ft,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=Jt,g[1]=jt,g[2]=kt,g[3]=Ft,P.clearBufferiv(P.COLOR,0,g))}else nt|=P.COLOR_BUFFER_BIT}k&&(nt|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),tt&&(nt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Ct.dispose(),$t.dispose(),pt.dispose(),w.dispose(),O.dispose(),rt.dispose(),ne.dispose(),F.dispose(),Lt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Be),ot.removeEventListener("sessionend",Oe),Ae.stop()};function X(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let b=gt.autoReset,k=Q.enabled,tt=Q.autoUpdate,nt=Q.needsUpdate,W=Q.type;At(),gt.autoReset=b,Q.enabled=k,Q.autoUpdate=tt,Q.needsUpdate=nt,Q.type=W}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ht(b){let k=b.target;k.removeEventListener("dispose",Ht),Zt(k)}function Zt(b){ue(b),pt.remove(b)}function ue(b){let k=pt.get(b).programs;k!==void 0&&(k.forEach(function(tt){Lt.releaseProgram(tt)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,tt,nt,W,St){k===null&&(k=Xt);let Dt=W.isMesh&&W.matrixWorld.determinant()<0,zt=pf(b,k,tt,nt,W);ft.setMaterial(nt,Dt);let Ft=tt.index,Jt=1;if(nt.wireframe===!0){if(Ft=lt.getWireframeAttribute(tt),Ft===void 0)return;Jt=2}let jt=tt.drawRange,kt=tt.attributes.position,ge=jt.start*Jt,ve=(jt.start+jt.count)*Jt;St!==null&&(ge=Math.max(ge,St.start*Jt),ve=Math.min(ve,(St.start+St.count)*Jt)),Ft!==null?(ge=Math.max(ge,0),ve=Math.min(ve,Ft.count)):kt!=null&&(ge=Math.max(ge,0),ve=Math.min(ve,kt.count));let Re=ve-ge;if(Re<0||Re===1/0)return;ne.setup(W,nt,zt,tt,Ft);let on,de=vt;if(Ft!==null&&(on=at.get(Ft),de=Yt,de.setIndex(on)),W.isMesh)nt.wireframe===!0?(ft.setLineWidth(nt.wireframeLinewidth*ut()),de.setMode(P.LINES)):de.setMode(P.TRIANGLES);else if(W.isLine){let Vt=nt.linewidth;Vt===void 0&&(Vt=1),ft.setLineWidth(Vt*ut()),W.isLineSegments?de.setMode(P.LINES):W.isLineLoop?de.setMode(P.LINE_LOOP):de.setMode(P.LINE_STRIP)}else W.isPoints?de.setMode(P.POINTS):W.isSprite&&de.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)de.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))de.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Vt=W._multiDrawStarts,We=W._multiDrawCounts,pe=W._multiDrawCount,gn=Ft?at.get(Ft).bytesPerElement:1,Ii=pt.get(nt).currentProgram.getUniforms();for(let an=0;an<pe;an++)Ii.setValue(P,"_gl_DrawID",an),de.render(Vt[an]/gn,We[an])}else if(W.isInstancedMesh)de.renderInstances(ge,Re,W.count);else if(tt.isInstancedBufferGeometry){let Vt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,We=Math.min(tt.instanceCount,Vt);de.renderInstances(ge,Re,We)}else de.render(ge,Re)};function Qt(b,k,tt){b.transparent===!0&&b.side===xe&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,Ci(b,k,tt),b.side=ei,b.needsUpdate=!0,Ci(b,k,tt),b.side=xe):Ci(b,k,tt)}this.compile=function(b,k,tt=null){tt===null&&(tt=b),m=$t.get(tt),m.init(k),M.push(m),tt.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==tt&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();let nt=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let St=W.material;if(St)if(Array.isArray(St))for(let Dt=0;Dt<St.length;Dt++){let zt=St[Dt];Qt(zt,tt,W),nt.add(zt)}else Qt(St,tt,W),nt.add(St)}),M.pop(),m=null,nt},this.compileAsync=function(b,k,tt=null){let nt=this.compile(b,k,tt);return new Promise(W=>{function St(){if(nt.forEach(function(Dt){pt.get(Dt).currentProgram.isReady()&&nt.delete(Dt)}),nt.size===0){W(b);return}setTimeout(St,10)}q.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let he=null;function Ue(b){he&&he(b)}function Be(){Ae.stop()}function Oe(){Ae.start()}let Ae=new Nh;Ae.setAnimationLoop(Ue),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(b){he=b,ot.setAnimationLoop(b),b===null?Ae.stop():Ae.start()},ot.addEventListener("sessionstart",Be),ot.addEventListener("sessionend",Oe),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,k,T),m=$t.get(b,M.length),m.init(k),M.push(m),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Tt.setFromProjectionMatrix(xt),ht=this.localClippingEnabled,et=N.init(this.clippingPlanes,ht),_=Ct.get(b,p.length),_.init(),p.push(_),ot.enabled===!0&&ot.isPresenting===!0){let St=x.xr.getDepthSensingMesh();St!==null&&Ne(St,k,-1/0,x.sortObjects)}Ne(b,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,B),te=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,te&&yt.addToRenderList(_,b),this.info.render.frame++,et===!0&&N.beginShadows();let tt=m.state.shadowsArray;Q.render(tt,b,k),et===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=_.opaque,W=_.transmissive;if(m.setupLights(),k.isArrayCamera){let St=k.cameras;if(W.length>0)for(let Dt=0,zt=St.length;Dt<zt;Dt++){let Ft=St[Dt];Tn(nt,W,b,Ft)}te&&yt.render(b);for(let Dt=0,zt=St.length;Dt<zt;Dt++){let Ft=St[Dt];Ri(_,b,Ft,Ft.viewport)}}else W.length>0&&Tn(nt,W,b,k),te&&yt.render(b),Ri(_,b,k);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,k),ne.resetDefaultState(),I=-1,V=null,M.pop(),M.length>0?(m=M[M.length-1],et===!0&&N.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ne(b,k,tt,nt){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)tt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Tt.intersectsSprite(b)){nt&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);let Dt=rt.update(b),zt=b.material;zt.visible&&_.push(b,Dt,zt,tt,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Tt.intersectsObject(b))){let Dt=rt.update(b),zt=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Gt.copy(Dt.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(zt)){let Ft=Dt.groups;for(let Jt=0,jt=Ft.length;Jt<jt;Jt++){let kt=Ft[Jt],ge=zt[kt.materialIndex];ge&&ge.visible&&_.push(b,Dt,ge,tt,Gt.z,kt)}}else zt.visible&&_.push(b,Dt,zt,tt,Gt.z,null)}}let St=b.children;for(let Dt=0,zt=St.length;Dt<zt;Dt++)Ne(St[Dt],k,tt,nt)}function Ri(b,k,tt,nt){let W=b.opaque,St=b.transmissive,Dt=b.transparent;m.setupLightsView(tt),et===!0&&N.setGlobalState(x.clippingPlanes,tt),nt&&ft.viewport(y.copy(nt)),W.length>0&&rn(W,k,tt),St.length>0&&rn(St,k,tt),Dt.length>0&&rn(Dt,k,tt),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Tn(b,k,tt,nt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[nt.id]===void 0&&(m.state.transmissionRenderTarget[nt.id]=new Vn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Ks:Gn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let St=m.state.transmissionRenderTarget[nt.id],Dt=nt.viewport||y;St.setSize(Dt.z,Dt.w);let zt=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(H),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear(),te&&yt.render(tt);let Ft=x.toneMapping;x.toneMapping=ti;let Jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),m.setupLightsView(nt),et===!0&&N.setGlobalState(x.clippingPlanes,nt),rn(b,tt,nt),A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St),q.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,ge=k.length;kt<ge;kt++){let ve=k[kt],Re=ve.object,on=ve.geometry,de=ve.material,Vt=ve.group;if(de.side===xe&&Re.layers.test(nt.layers)){let We=de.side;de.side=nn,de.needsUpdate=!0,Ai(Re,tt,nt,on,de,Vt),de.side=We,de.needsUpdate=!0,jt=!0}}jt===!0&&(A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St))}x.setRenderTarget(zt),x.setClearColor(H,C),Jt!==void 0&&(nt.viewport=Jt),x.toneMapping=Ft}function rn(b,k,tt){let nt=k.isScene===!0?k.overrideMaterial:null;for(let W=0,St=b.length;W<St;W++){let Dt=b[W],zt=Dt.object,Ft=Dt.geometry,Jt=nt===null?Dt.material:nt,jt=Dt.group;zt.layers.test(tt.layers)&&Ai(zt,k,tt,Ft,Jt,jt)}}function Ai(b,k,tt,nt,W,St){b.onBeforeRender(x,k,tt,nt,W,St),b.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(x,k,tt,nt,b,St),W.transparent===!0&&W.side===xe&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,x.renderBufferDirect(tt,k,nt,W,b,St),W.side=ei,W.needsUpdate=!0,x.renderBufferDirect(tt,k,nt,W,b,St),W.side=xe):x.renderBufferDirect(tt,k,nt,W,b,St),b.onAfterRender(x,k,tt,nt,W,St)}function Ci(b,k,tt){k.isScene!==!0&&(k=Xt);let nt=pt.get(b),W=m.state.lights,St=m.state.shadowsArray,Dt=W.state.version,zt=Lt.getParameters(b,W.state,St,k,tt),Ft=Lt.getProgramCacheKey(zt),Jt=nt.programs;nt.environment=b.isMeshStandardMaterial?k.environment:null,nt.fog=k.fog,nt.envMap=(b.isMeshStandardMaterial?O:w).get(b.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",Ht),Jt=new Map,nt.programs=Jt);let jt=Jt.get(Ft);if(jt!==void 0){if(nt.currentProgram===jt&&nt.lightsStateVersion===Dt)return ac(b,zt),jt}else zt.uniforms=Lt.getUniforms(b),b.onBeforeCompile(zt,x),jt=Lt.acquireProgram(zt,Ft),Jt.set(Ft,jt),nt.uniforms=zt.uniforms;let kt=nt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=N.uniform),ac(b,zt),nt.needsLights=gf(b),nt.lightsStateVersion=Dt,nt.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),nt.currentProgram=jt,nt.uniformsList=null,jt}function Pi(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=Qi.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ac(b,k){let tt=pt.get(b);tt.outputColorSpace=k.outputColorSpace,tt.batching=k.batching,tt.batchingColor=k.batchingColor,tt.instancing=k.instancing,tt.instancingColor=k.instancingColor,tt.instancingMorph=k.instancingMorph,tt.skinning=k.skinning,tt.morphTargets=k.morphTargets,tt.morphNormals=k.morphNormals,tt.morphColors=k.morphColors,tt.morphTargetsCount=k.morphTargetsCount,tt.numClippingPlanes=k.numClippingPlanes,tt.numIntersection=k.numClipIntersection,tt.vertexAlphas=k.vertexAlphas,tt.vertexTangents=k.vertexTangents,tt.toneMapping=k.toneMapping}function pf(b,k,tt,nt,W){k.isScene!==!0&&(k=Xt),A.resetTextureUnits();let St=k.fog,Dt=nt.isMeshStandardMaterial?k.environment:null,zt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ci,Ft=(nt.isMeshStandardMaterial?O:w).get(nt.envMap||Dt),Jt=nt.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,jt=!!tt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),kt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,ve=!!tt.morphAttributes.color,Re=ti;nt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Re=x.toneMapping);let on=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,de=on!==void 0?on.length:0,Vt=pt.get(nt),We=m.state.lights;if(et===!0&&(ht===!0||b!==V)){let un=b===V&&nt.id===I;N.setState(nt,b,un)}let pe=!1;nt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==We.state.version||Vt.outputColorSpace!==zt||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isBatchedMesh&&Vt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Vt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==Ft||nt.fog===!0&&Vt.fog!==St||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==N.numPlanes||Vt.numIntersection!==N.numIntersection)||Vt.vertexAlphas!==Jt||Vt.vertexTangents!==jt||Vt.morphTargets!==kt||Vt.morphNormals!==ge||Vt.morphColors!==ve||Vt.toneMapping!==Re||Vt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Vt.__version=nt.version);let gn=Vt.currentProgram;pe===!0&&(gn=Ci(nt,k,W));let Ii=!1,an=!1,wo=!1,Ce=gn.getUniforms(),qn=Vt.uniforms;if(ft.useProgram(gn.program)&&(Ii=!0,an=!0,wo=!0),nt.id!==I&&(I=nt.id,an=!0),Ii||V!==b){Z.reverseDepthBuffer?(_t.copy(b.projectionMatrix),au(_t),lu(_t),Ce.setValue(P,"projectionMatrix",_t)):Ce.setValue(P,"projectionMatrix",b.projectionMatrix),Ce.setValue(P,"viewMatrix",b.matrixWorldInverse);let un=Ce.map.cameraPosition;un!==void 0&&un.setValue(P,Ut.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&Ce.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ce.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,an=!0,wo=!0)}if(W.isSkinnedMesh){Ce.setOptional(P,W,"bindMatrix"),Ce.setOptional(P,W,"bindMatrixInverse");let un=W.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ce.setValue(P,"boneTexture",un.boneTexture,A))}W.isBatchedMesh&&(Ce.setOptional(P,W,"batchingTexture"),Ce.setValue(P,"batchingTexture",W._matricesTexture,A),Ce.setOptional(P,W,"batchingIdTexture"),Ce.setValue(P,"batchingIdTexture",W._indirectTexture,A),Ce.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Ce.setValue(P,"batchingColorTexture",W._colorsTexture,A));let So=tt.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&It.update(W,tt,gn),(an||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,Ce.setValue(P,"receiveShadow",W.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(qn.envMap.value=Ft,qn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&k.environment!==null&&(qn.envMapIntensity.value=k.environmentIntensity),an&&(Ce.setValue(P,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&mf(qn,wo),St&&nt.fog===!0&&Mt.refreshFogUniforms(qn,St),Mt.refreshMaterialUniforms(qn,nt,it,z,m.state.transmissionRenderTarget[b.id]),Qi.upload(P,Pi(Vt),qn,A)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Qi.upload(P,Pi(Vt),qn,A),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ce.setValue(P,"center",W.center),Ce.setValue(P,"modelViewMatrix",W.modelViewMatrix),Ce.setValue(P,"normalMatrix",W.normalMatrix),Ce.setValue(P,"modelMatrix",W.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let un=nt.uniformsGroups;for(let bo=0,yf=un.length;bo<yf;bo++){let lc=un[bo];F.update(lc,gn),F.bind(lc,gn)}}return gn}function mf(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function gf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,k,tt){pt.get(b.texture).__webglTexture=k,pt.get(b.depthTexture).__webglTexture=tt;let nt=pt.get(b);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=tt===void 0,nt.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){let tt=pt.get(b);tt.__webglFramebuffer=k,tt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,tt=0){T=b,R=k,S=tt;let nt=!0,W=null,St=!1,Dt=!1;if(b){let Ft=pt.get(b);if(Ft.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),nt=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Ft.__hasExternalTextures)A.rebindTextures(b,pt.get(b.texture).__webglTexture,pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let kt=b.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&pt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Dt=!0);let jt=pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?W=jt[k][tt]:W=jt[k],St=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?W=pt.get(b).__webglMultisampledFramebuffer:Array.isArray(jt)?W=jt[tt]:W=jt,y.copy(b.viewport),E.copy(b.scissor),L=b.scissorTest}else y.copy(j).multiplyScalar(it).floor(),E.copy(st).multiplyScalar(it).floor(),L=mt;if(ft.bindFramebuffer(P.FRAMEBUFFER,W)&&nt&&ft.drawBuffers(b,W),ft.viewport(y),ft.scissor(E),ft.setScissorTest(L),St){let Ft=pt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,tt)}else if(Dt){let Ft=pt.get(b.texture),Jt=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,tt||0,Jt)}I=-1},this.readRenderTargetPixels=function(b,k,tt,nt,W,St,Dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){ft.bindFramebuffer(P.FRAMEBUFFER,zt);try{let Ft=b.texture,Jt=Ft.format,jt=Ft.type;if(!Z.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-nt&&tt>=0&&tt<=b.height-W&&P.readPixels(k,tt,nt,W,Nt.convert(Jt),Nt.convert(jt),St)}finally{let Ft=T!==null?pt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,k,tt,nt,W,St,Dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){let Ft=b.texture,Jt=Ft.format,jt=Ft.type;if(!Z.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-nt&&tt>=0&&tt<=b.height-W){ft.bindFramebuffer(P.FRAMEBUFFER,zt);let kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.bufferData(P.PIXEL_PACK_BUFFER,St.byteLength,P.STREAM_READ),P.readPixels(k,tt,nt,W,Nt.convert(Jt),Nt.convert(jt),0);let ge=T!==null?pt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,ge);let ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ou(P,ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,St),P.deleteBuffer(kt),P.deleteSync(ve),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,tt=0){b.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);let nt=Math.pow(2,-tt),W=Math.floor(b.image.width*nt),St=Math.floor(b.image.height*nt),Dt=k!==null?k.x:0,zt=k!==null?k.y:0;A.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,tt,0,0,Dt,zt,W,St),ft.unbindTexture()},this.copyTextureToTexture=function(b,k,tt=null,nt=null,W=0){b.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,b=arguments[1],k=arguments[2],W=arguments[3]||0,tt=null);let St,Dt,zt,Ft,Jt,jt;tt!==null?(St=tt.max.x-tt.min.x,Dt=tt.max.y-tt.min.y,zt=tt.min.x,Ft=tt.min.y):(St=b.image.width,Dt=b.image.height,zt=0,Ft=0),nt!==null?(Jt=nt.x,jt=nt.y):(Jt=0,jt=0);let kt=Nt.convert(k.format),ge=Nt.convert(k.type);A.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let ve=P.getParameter(P.UNPACK_ROW_LENGTH),Re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),de=P.getParameter(P.UNPACK_SKIP_ROWS),Vt=P.getParameter(P.UNPACK_SKIP_IMAGES),We=b.isCompressedTexture?b.mipmaps[W]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,We.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,We.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,W,Jt,jt,St,Dt,kt,ge,We.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,W,Jt,jt,We.width,We.height,kt,We.data):P.texSubImage2D(P.TEXTURE_2D,W,Jt,jt,St,Dt,kt,ge,We),P.pixelStorei(P.UNPACK_ROW_LENGTH,ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,de),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt),W===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(b,k,tt=null,nt=null,W=0){b.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,nt=arguments[1]||null,b=arguments[2],k=arguments[3],W=arguments[4]||0);let St,Dt,zt,Ft,Jt,jt,kt,ge,ve,Re=b.isCompressedTexture?b.mipmaps[W]:b.image;tt!==null?(St=tt.max.x-tt.min.x,Dt=tt.max.y-tt.min.y,zt=tt.max.z-tt.min.z,Ft=tt.min.x,Jt=tt.min.y,jt=tt.min.z):(St=Re.width,Dt=Re.height,zt=Re.depth,Ft=0,Jt=0,jt=0),nt!==null?(kt=nt.x,ge=nt.y,ve=nt.z):(kt=0,ge=0,ve=0);let on=Nt.convert(k.format),de=Nt.convert(k.type),Vt;if(k.isData3DTexture)A.setTexture3D(k,0),Vt=P.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),Vt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let We=P.getParameter(P.UNPACK_ROW_LENGTH),pe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ii=P.getParameter(P.UNPACK_SKIP_ROWS),an=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,jt),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Vt,W,kt,ge,ve,St,Dt,zt,on,de,Re.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Vt,W,kt,ge,ve,St,Dt,zt,on,Re.data):P.texSubImage3D(Vt,W,kt,ge,ve,St,Dt,zt,on,de,Re),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ii),P.pixelStorei(P.UNPACK_SKIP_IMAGES,an),W===0&&k.generateMipmaps&&P.generateMipmap(Vt),ft.unbindTexture()},this.initRenderTarget=function(b){pt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){R=0,S=0,T=null,ft.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Vl?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===co?"display-p3":"srgb"}};var oi=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var hl=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,f=en,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qi=new ae,sh=new ae,br=[],rh=new Wn,ig=new ae,Rs=new J,As=new ii,os=class extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),rh.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),As.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),sh.multiplyMatrices(n,qi),Rs.matrixWorld=sh,Rs.raycast(t,br);for(let o=0,a=br.length;o<a;o++){let l=br[o];l.instanceId=r,l.object=this,e.push(l)}br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(s*this.count),s,this.count,Bl,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ks=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oh=new ae,fl=new zs,Tr=new ii,Rr=new D,Qr=class extends Ge{constructor(t=new Le,e=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;oh.copy(s).invert(),fl.copy(t.ray).applyMatrix4(oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){let m=c.getX(g);Rr.fromBufferAttribute(h,m),ah(Rr,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=u,_=d;g<_;g++)Rr.fromBufferAttribute(h,g),ah(Rr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ah(i,t,e,n,s,r,o){let a=fl.distanceSqToPoint(i);if(a<e){let l=new D;fl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var hn=class extends je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let f=n[s],u=n[s+1]-f,d=(o-f)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Et:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new ae;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ul=class extends Gs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,h){let u=(o-r)/c-(a-r)/(c+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+h)+(l-a)/h;u*=f,d*=f,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ar=new D,ia=new Xl,sa=new Xl,ra=new Xl,dl=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);let h=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ia.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,g,_,m),sa.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,g,_,m),ra.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,g,_,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),sa.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),ra.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function sg(i,t){let e=1-i;return e*e*t}function rg(i,t){return 2*(1-i)*i*t}function og(i,t){return i*i*t}function Ls(i,t,e,n){return sg(i,t)+rg(i,e)+og(i,n)}function ag(i,t){let e=1-i;return e*e*e*t}function lg(i,t){let e=1-i;return 3*e*e*i*t}function cg(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return ag(i,t)+lg(i,e)+cg(i,n)+hg(i,s)}var jr=class extends pn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pl=class extends pn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends pn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ml=class extends pn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends pn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends pn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(t,s.x,r.x,o.x),Ls(t,s.y,r.y,o.y),Ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(lh(a,l.x,c.x,f.x,h.x),lh(a,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:ul,CatmullRomCurve3:dl,CubicBezierCurve:jr,CubicBezierCurve3:pl,EllipseCurve:Gs,LineCurve:to,LineCurve3:ml,QuadraticBezierCurve:eo,QuadraticBezierCurve3:gl,SplineCurve:no}),xl=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yl[s.type]().fromJSON(s))}return this}},Vs=class extends xl{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new to(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new eo(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new jr(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new no(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Gs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_l=class i extends Le{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/e,h=new D,u=new Et,d=new D,g=new D,_=new D,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){let x=n+M*f*s,v=Math.sin(x),R=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*R,o.push(h.x,h.y,h.z),u.x=M/e,u.y=S/(t.length-1),a.push(u.x,u.y);let T=l[3*S+0]*v,I=l[3*S+1],V=l[3*S+0]*R;c.push(T,I,V)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let v=x+M*t.length,R=v,S=v+t.length,T=v+t.length+1,I=v+1;r.push(R,S,I),r.push(T,I,S)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Fe=class i extends _l{constructor(t=1,e=1,n=4,s=8){let r=new Vs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ai=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,f=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[u]/t+1)/2,f.y=(o[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},K=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],u=[],d=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function M(){let v=new D,R=new D,S=0,T=(e-t)/n;for(let I=0;I<=r;I++){let V=[],y=I/r,E=y*(e-t)+t;for(let L=0;L<=s;L++){let H=L/s,C=H*l+a,G=Math.sin(C),z=Math.cos(C);R.x=E*G,R.y=-y*n+m,R.z=E*z,h.push(R.x,R.y,R.z),v.set(G,T,z).normalize(),u.push(v.x,v.y,v.z),d.push(H,1-y),V.push(g++)}_.push(V)}for(let I=0;I<s;I++)for(let V=0;V<r;V++){let y=_[V][I],E=_[V+1][I],L=_[V+1][I+1],H=_[V][I+1];t>0&&(f.push(y,E,H),S+=3),e>0&&(f.push(E,L,H),S+=3)}c.addGroup(p,S,0),p+=S}function x(v){let R=g,S=new Et,T=new D,I=0,V=v===!0?t:e,y=v===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*y,0),u.push(0,y,0),d.push(.5,.5),g++;let E=g;for(let L=0;L<=s;L++){let C=L/s*l+a,G=Math.cos(C),z=Math.sin(C);T.x=V*z,T.y=m*y,T.z=V*G,h.push(T.x,T.y,T.z),u.push(0,y,0),S.x=G*.5+.5,S.y=z*.5*y+.5,d.push(S.x,S.y),g++}for(let L=0;L<s;L++){let H=R+L,C=E+L;v===!0?f.push(C,C+1,H):f.push(C+1,C,H),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ye=class i extends K{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},io=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),f(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new D,v=new D,R=new D;for(let S=0;S<e.length;S+=3)d(e[S+0],x),d(e[S+1],v),d(e[S+2],R),l(x,v,R,M)}function l(M,x,v,R){let S=R+1,T=[];for(let I=0;I<=S;I++){T[I]=[];let V=M.clone().lerp(v,I/S),y=x.clone().lerp(v,I/S),E=S-I;for(let L=0;L<=E;L++)L===0&&I===S?T[I][L]=V:T[I][L]=V.clone().lerp(y,L/E)}for(let I=0;I<S;I++)for(let V=0;V<2*(S-I)-1;V++){let y=Math.floor(V/2);V%2===0?(u(T[I][y+1]),u(T[I+1][y]),u(T[I][y])):(u(T[I][y+1]),u(T[I+1][y+1]),u(T[I+1][y]))}}function c(M){let x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function f(){let M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let v=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;o.push(v,1-R)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){let x=o[M+0],v=o[M+2],R=o[M+4],S=Math.max(x,v,R),T=Math.min(x,v,R);S>.9&&T<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,x){let v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){let M=new D,x=new D,v=new D,R=new D,S=new Et,T=new Et,I=new Et;for(let V=0,y=0;V<r.length;V+=9,y+=6){M.set(r[V+0],r[V+1],r[V+2]),x.set(r[V+3],r[V+4],r[V+5]),v.set(r[V+6],r[V+7],r[V+8]),S.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),R.copy(M).add(x).add(v).divideScalar(3);let E=m(R);_(S,y+0,M,E),_(T,y+2,x,E),_(I,y+4,v,E)}}function _(M,x,v,R){R<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ws=class i extends io{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Xs=class extends Vs{constructor(t){super(t),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vs().fromJSON(s))}return this}},fg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Oh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,u,d;if(n&&(r=gg(i,t,r,e)),i.length>80*e){a=c=i[0],l=f=i[1];for(let g=e;g<s;g+=e)h=i[g],u=i[g+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);d=Math.max(c-a,f-l),d=d!==0?32767/d:0}return qs(r,o,e,a,l,d,0),o}};function Oh(i,t,e,n,s){let r,o;if(s===Rg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ch(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ch(r,i[r],i[r+1],o);return o&&fo(o,o.next)&&(Zs(o),o=o.next),o}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fo(e,e.next)||be(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?dg(i,n,s,r):ug(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Zs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=pg(wi(i),t,e),qs(i,t,e,n,s,r,2)):o===2&&mg(i,t,e,n,s,r):qs(wi(i),t,e,n,s,r,1);break}}}function ug(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=u&&g.y>=h&&g.y<=d&&Zi(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=f<h?f<u?f:u:h<u?h:u,_=a>l?a>c?a:c:l>c?l:c,m=f>h?f>u?f:u:h>u?h:u,p=vl(d,g,t,e,n),M=vl(_,m,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zi(a,f,l,h,c,u,x.x,x.y)&&be(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Zi(a,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Zi(a,f,l,h,c,u,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Zi(a,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!fo(s,r)&&kh(s,n,n.next,r)&&Ys(s,r)&&Ys(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zs(n),Zs(n.next),n=i=r),n=n.next}while(n!==i);return wi(n)}function mg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sg(o,a)){let l=Gh(o,a);o=wi(o,o.next),l=wi(l,l.next),qs(o,t,e,n,s,r,0),qs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Oh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wg(c));for(s.sort(yg),r=0;r<s.length;r++)e=xg(s[r],e);return e}function yg(i,t){return i.x-t.x}function xg(i,t){let e=_g(i,t);if(!e)return t;let n=Gh(e,i);return wi(n,n.next),wi(e,e.next)}function _g(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ys(e,i)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&vg(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function vg(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Mg(i,t,e,n){let s=i;do s.z===0&&(s.z=vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Eg(s)}function Eg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Sg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bg(i,t)&&(Ys(i,t)&&Ys(t,i)&&Tg(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||fo(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fo(i,t){return i.x===t.x&&i.y===t.y}function kh(i,t,e,n){let s=Pr(be(i,t,e)),r=Pr(be(i,t,n)),o=Pr(be(e,n,i)),a=Pr(be(e,n,t));return!!(s!==r&&o!==a||s===0&&Cr(i,e,t)||r===0&&Cr(i,n,t)||o===0&&Cr(e,i,n)||a===0&&Cr(e,t,n))}function Cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function bg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Tg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gh(i,t){let e=new Ml(i.i,i.x,i.y),n=new Ml(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ch(i,t,e,n){let s=new Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Us=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hh(t),fh(n,t);let o=t.length;e.forEach(hh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,fh(n,e[l]);let a=fg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var so=class i extends Le{constructor(t=new Xs([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ag,x,v=!1,R,S,T,I;p&&(x=p.getSpacedPoints(f),v=!0,u=!1,R=p.computeFrenetFrames(f,!1),S=new D,T=new D,I=new D),u||(m=0,d=0,g=0,_=0);let V=a.extractPoints(c),y=V.shape,E=V.holes;if(!Us.isClockWise(y)){y=y.reverse();for(let ut=0,P=E.length;ut<P;ut++){let wt=E[ut];Us.isClockWise(wt)&&(E[ut]=wt.reverse())}}let H=Us.triangulateShape(y,E),C=y;for(let ut=0,P=E.length;ut<P;ut++){let wt=E[ut];y=y.concat(wt)}function G(ut,P,wt){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(P,wt)}let z=y.length,it=H.length;function Y(ut,P,wt){let q,Z,ft,gt=ut.x-P.x,pt=ut.y-P.y,A=wt.x-ut.x,w=wt.y-ut.y,O=gt*gt+pt*pt,at=gt*w-pt*A;if(Math.abs(at)>Number.EPSILON){let lt=Math.sqrt(O),rt=Math.sqrt(A*A+w*w),Lt=P.x-pt/lt,Mt=P.y+gt/lt,Ct=wt.x-w/rt,$t=wt.y+A/rt,N=((Ct-Lt)*w-($t-Mt)*A)/(gt*w-pt*A);q=Lt+gt*N-ut.x,Z=Mt+pt*N-ut.y;let Q=q*q+Z*Z;if(Q<=2)return new Et(q,Z);ft=Math.sqrt(Q/2)}else{let lt=!1;gt>Number.EPSILON?A>Number.EPSILON&&(lt=!0):gt<-Number.EPSILON?A<-Number.EPSILON&&(lt=!0):Math.sign(pt)===Math.sign(w)&&(lt=!0),lt?(q=-pt,Z=gt,ft=Math.sqrt(O)):(q=gt,Z=pt,ft=Math.sqrt(O/2))}return new Et(q/ft,Z/ft)}let B=[];for(let ut=0,P=C.length,wt=P-1,q=ut+1;ut<P;ut++,wt++,q++)wt===P&&(wt=0),q===P&&(q=0),B[ut]=Y(C[ut],C[wt],C[q]);let j=[],st,mt=B.concat();for(let ut=0,P=E.length;ut<P;ut++){let wt=E[ut];st=[];for(let q=0,Z=wt.length,ft=Z-1,gt=q+1;q<Z;q++,ft++,gt++)ft===Z&&(ft=0),gt===Z&&(gt=0),st[q]=Y(wt[q],wt[ft],wt[gt]);j.push(st),mt=mt.concat(st)}for(let ut=0;ut<m;ut++){let P=ut/m,wt=d*Math.cos(P*Math.PI/2),q=g*Math.sin(P*Math.PI/2)+_;for(let Z=0,ft=C.length;Z<ft;Z++){let gt=G(C[Z],B[Z],q);xt(gt.x,gt.y,-wt)}for(let Z=0,ft=E.length;Z<ft;Z++){let gt=E[Z];st=j[Z];for(let pt=0,A=gt.length;pt<A;pt++){let w=G(gt[pt],st[pt],q);xt(w.x,w.y,-wt)}}}let Tt=g+_;for(let ut=0;ut<z;ut++){let P=u?G(y[ut],mt[ut],Tt):y[ut];v?(T.copy(R.normals[0]).multiplyScalar(P.x),S.copy(R.binormals[0]).multiplyScalar(P.y),I.copy(x[0]).add(T).add(S),xt(I.x,I.y,I.z)):xt(P.x,P.y,0)}for(let ut=1;ut<=f;ut++)for(let P=0;P<z;P++){let wt=u?G(y[P],mt[P],Tt):y[P];v?(T.copy(R.normals[ut]).multiplyScalar(wt.x),S.copy(R.binormals[ut]).multiplyScalar(wt.y),I.copy(x[ut]).add(T).add(S),xt(I.x,I.y,I.z)):xt(wt.x,wt.y,h/f*ut)}for(let ut=m-1;ut>=0;ut--){let P=ut/m,wt=d*Math.cos(P*Math.PI/2),q=g*Math.sin(P*Math.PI/2)+_;for(let Z=0,ft=C.length;Z<ft;Z++){let gt=G(C[Z],B[Z],q);xt(gt.x,gt.y,h+wt)}for(let Z=0,ft=E.length;Z<ft;Z++){let gt=E[Z];st=j[Z];for(let pt=0,A=gt.length;pt<A;pt++){let w=G(gt[pt],st[pt],q);v?xt(w.x,w.y+x[f-1].y,x[f-1].x+wt):xt(w.x,w.y,h+wt)}}}et(),ht();function et(){let ut=s.length/3;if(u){let P=0,wt=z*P;for(let q=0;q<it;q++){let Z=H[q];Ut(Z[2]+wt,Z[1]+wt,Z[0]+wt)}P=f+m*2,wt=z*P;for(let q=0;q<it;q++){let Z=H[q];Ut(Z[0]+wt,Z[1]+wt,Z[2]+wt)}}else{for(let P=0;P<it;P++){let wt=H[P];Ut(wt[2],wt[1],wt[0])}for(let P=0;P<it;P++){let wt=H[P];Ut(wt[0]+z*f,wt[1]+z*f,wt[2]+z*f)}}n.addGroup(ut,s.length/3-ut,0)}function ht(){let ut=s.length/3,P=0;_t(C,P),P+=C.length;for(let wt=0,q=E.length;wt<q;wt++){let Z=E[wt];_t(Z,P),P+=Z.length}n.addGroup(ut,s.length/3-ut,1)}function _t(ut,P){let wt=ut.length;for(;--wt>=0;){let q=wt,Z=wt-1;Z<0&&(Z=ut.length-1);for(let ft=0,gt=f+m*2;ft<gt;ft++){let pt=z*ft,A=z*(ft+1),w=P+q+pt,O=P+Z+pt,at=P+Z+A,lt=P+q+A;Gt(w,O,at,lt)}}}function xt(ut,P,wt){l.push(ut),l.push(P),l.push(wt)}function Ut(ut,P,wt){Xt(ut),Xt(P),Xt(wt);let q=s.length/3,Z=M.generateTopUV(n,s,q-3,q-2,q-1);te(Z[0]),te(Z[1]),te(Z[2])}function Gt(ut,P,wt,q){Xt(ut),Xt(P),Xt(q),Xt(P),Xt(wt),Xt(q);let Z=s.length/3,ft=M.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);te(ft[0]),te(ft[1]),te(ft[3]),te(ft[1]),te(ft[2]),te(ft[3])}function Xt(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function te(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yl[s.type]().fromJSON(s)),new i(n,t.options)}},Ag={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new Et(r,o),new Et(a,l),new Et(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new Et(o,1-l),new Et(c,1-h),new Et(u,1-g),new Et(_,1-p)]:[new Et(a,1-l),new Et(f,1-h),new Et(d,1-g),new Et(m,1-p)]}};function Cg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ke=class i extends io{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Dn=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=t,u=(e-t)/s,d=new D,g=new Et;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}h+=u}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let M=p+m,x=M,v=M+n+1,R=M+n+2,S=M+1;a.push(x,v,S),a.push(v,R,S)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bt=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new D,u=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],x=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let S=R/e;h.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(S+v,1-x),M.push(c++)}f.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let x=f[p][M+1],v=f[p][M],R=f[p+1][M],S=f[p+1][M+1];(p!==0||o>0)&&d.push(x,v,S),(p!==n-1||l<Math.PI)&&d.push(v,R,S)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var De=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],f=new D,h=new D,u=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var se=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ir(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dc:r=t,a=2*e-n;break;case pc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:o=t,l=2*n-e;break;case pc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let R=0;R!==a;++R)r[R]=p*o[f+R]+M*o[c+R]+x*o[l+R]+v*o[h+R];return r}},wl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},Sl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ir(e,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ir(t.times,Array),values:Ir(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Br:e=this.InterpolantFactoryMethodDiscrete;break;case qa:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Pg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,u=h-n,d=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=qa;var Si=class extends Sn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Br;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Sn{};bl.prototype.ValueTypeName="color";var Tl=class extends Sn{};Tl.prototype.ValueTypeName="number";var Rl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ro=class extends Sn{InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Sn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Br;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Sn{};Al.prototype.ValueTypeName="vector";var uh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Cl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null}}},Ig=new Cl,$s=class{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$s.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pl=class extends $s{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=uh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Hs("img");function l(){f(),uh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){f(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ls=class extends $s{constructor(t){super(t)}load(t,e,n,s){let r=new je,o=new Pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},cs=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},hs=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oa=new ae,dh=new D,ph=new D,oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var mh=new ae,Cs=new D,aa=new D,Il=class extends oo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cs),aa.copy(n.position),aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(aa),n.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}},ao=class extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Il}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ll=class extends oo{constructor(){super(new ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},li=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fs=class extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var us=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gh(){return performance.now()}var ql="\\[\\]\\.:\\/",Lg=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Dg="[^"+ql.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Ng=/(WCOD+)?/.source.replace("WCOD",Dg),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Fg=new RegExp("^"+Ug+Ng+Hg+zg+"$"),Bg=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(t){let e=Fg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Dl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ry=new Float32Array(1);var yh=new ae,ds=class{constructor(t,e,n=0,s=1/0){this.ray=new zs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return Ul(t,this,n,e),n.sort(xh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ul(t[s],this,n,e);return n.sort(xh),n}};function xh(i,t){return i.distance-t.distance}function Ul(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ul(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);var xs=class{constructor(t,e,n,s,r=.2){this.minX=t,this.minZ=e,this.cell=r,this.cols=Math.ceil((n-t)/r),this.rows=Math.ceil((s-e)/r),this.blocked=new Uint8Array(this.cols*this.rows)}idx(t,e){return e*this.cols+t}toCell(t,e){return{c:Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cell))),r:Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cell)))}}center(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}blockRect(t,e,n,s,r=.22){let o=this.toCell(Math.min(t,n)-r,Math.min(e,s)-r),a=this.toCell(Math.max(t,n)+r,Math.max(e,s)+r);for(let l=o.r;l<=a.r;l++)for(let c=o.c;c<=a.c;c++)this.blocked[this.idx(c,l)]=1}isFree(t,e){let{c:n,r:s}=this.toCell(t,e);return!this.blocked[this.idx(n,s)]}nearestFree(t,e){if(!this.blocked[this.idx(t,e)])return{c:t,r:e};for(let n=1;n<12;n++)for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){let o=t+r,a=e+s;if(!(o<0||a<0||o>=this.cols||a>=this.rows)&&!this.blocked[this.idx(o,a)])return{c:o,r:a}}return{c:t,r:e}}lineFree(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.max(1,Math.ceil(n/(this.cell*.5)));for(let r=1;r<s;r++){let o=r/s;if(!this.isFree(t.x+(e.x-t.x)*o,t.z+(e.z-t.z)*o))return!1}return!0}find(t,e){let n=this.toCell(t.x,t.z),s=this.nearestFree(...Object.values(this.toCell(e.x,e.z))),r=this.idx(n.c,n.r),o=this.idx(s.c,s.r);if(r===o)return[{x:e.x,z:e.z}];let a=this.cols*this.rows,l=new Float32Array(a).fill(1/0),c=new Int32Array(a).fill(-1),f=new Uint8Array(a),h=[],u=(S,T)=>{h.push([T,S]);let I=h.length-1;for(;I>0;){let V=I-1>>1;if(h[V][0]<=h[I][0])break;[h[V],h[I]]=[h[I],h[V]],I=V}},d=()=>{let S=h[0],T=h.pop();if(h.length){h[0]=T;let I=0;for(;;){let V=2*I+1,y=V+1,E=I;if(V<h.length&&h[V][0]<h[E][0]&&(E=V),y<h.length&&h[y][0]<h[E][0]&&(E=y),E===I)break;[h[E],h[I]]=[h[I],h[E]],I=E}}return S[1]},g=S=>{let T=Math.abs(S%this.cols-s.c),I=Math.abs(Math.floor(S/this.cols)-s.r);return T+I+(Math.SQRT2-2)*Math.min(T,I)};l[r]=0,u(r,g(r));let _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],m=!1;for(;h.length;){let S=d();if(f[S])continue;if(S===o){m=!0;break}f[S]=1;let T=S%this.cols,I=Math.floor(S/this.cols);for(let[V,y,E]of _){let L=T+V,H=I+y;if(L<0||H<0||L>=this.cols||H>=this.rows)continue;let C=this.idx(L,H);if(this.blocked[C]&&C!==o||V&&y&&(this.blocked[this.idx(T+V,I)]||this.blocked[this.idx(T,I+y)]))continue;let G=l[S]+E;G<l[C]&&(l[C]=G,c[C]=S,u(C,G+g(C)))}}if(!m)return[{x:e.x,z:e.z}];let p=[];for(let S=o;S!==-1&&S!==r;S=c[S])p.push(S);p.reverse();let M=p.map(S=>this.center(S%this.cols,Math.floor(S/this.cols)));M[M.length-1]={x:e.x,z:e.z};let x=[],v={x:t.x,z:t.z},R=0;for(;R<M.length;){let S=R;for(let T=M.length-1;T>R;T--)if(this.lineFree(v,M[T])){S=T;break}x.push(M[S]),v=M[S],R=S+1}return x}};var Xn=(i,t=.85)=>new se({color:i,roughness:t}),Zl=[{x:.4,z:.4},{x:-1.6,z:.6},{x:1.9,z:0},{x:-5,z:2.6},{x:5.4,z:-3.3},{x:-2.4,z:3.9},{x:2.6,z:3.8},{x:-5.6,z:-2.8},{x:.2,z:-2.2},{x:4.4,z:-3.7},{x:6,z:12.6},{x:16.4,z:12},{x:22,z:6.2}],_s=class{constructor(t,e){this.nav=e,this.root=new Bt,this.body=new Bt,this.root.add(this.body);let n=Xn("#e39a4e"),s=Xn("#b86e2c"),r=Xn("#fbf3e6"),o=Xn("#f2a3a3"),a=(h,u,d,g,_,m)=>{let p=new J(u,d);return p.position.set(g,_,m),p.castShadow=!0,h.add(p),p},l=a(this.body,new Fe(.11,.26,6,12),n,0,.2,0);l.rotation.x=Math.PI/2,a(this.body,new bt(.075,10,8),r,0,.17,.12).scale.set(1,1,.7);for(let h of[-.06,.04])a(this.body,new Rt(.2,.03,.05),s,0,.3,h).rotation.x=.1;this.head=new Bt,this.head.position.set(0,.32,.2),this.body.add(this.head),a(this.head,new bt(.1,14,12),n,0,0,0).scale.set(1.05,.95,.95),a(this.head,new bt(.05,10,8),r,0,-.03,.07).scale.set(1.2,.8,.7);for(let h of[-1,1]){let u=a(this.head,new Ye(.035,.07,4),n,h*.055,.09,-.01);u.rotation.z=-h*.25,a(this.head,new bt(.012,6,6),Xn("#1d1a17",.3),h*.038,.02,.088)}a(this.head,new bt(.01,6,6),o,0,-.01,.1),this.legs=[];for(let[h,u]of[[-.06,.12],[.06,.12],[-.06,-.12],[.06,-.12]]){let d=new Bt;d.position.set(h,.15,u),this.body.add(d),a(d,new K(.025,.022,.15,6),n,0,-.075,0),a(d,new bt(.026,6,6),r,0,-.15,.01),this.legs.push(d)}this.tail=[];let c=this.body,f=[0,.24,-.24];for(let h=0;h<5;h++){let u=new Bt;u.position.set(...f),c.add(u),a(u,new K(.022-h*.002,.025-h*.002,.08,6),h===4?s:n,0,.04,0),this.tail.push(u),c=u,f=[0,.08,0]}this.tail[0].rotation.x=-.9,this.pos={x:1,z:.8},this.facing=0,this.path=[],this.mode="sit",this.until=performance.now()/1e3+4,this.phase=0,this.root.position.set(this.pos.x,0,this.pos.z),t.add(this.root)}pet(){this.path=[],this.mode="happy",this.until=performance.now()/1e3+2.6}headWorld(t){return this.head.updateWorldMatrix(!0,!1),t.set(0,.2,0).applyMatrix4(this.head.matrixWorld)}props(){if(this.bowl)return;let t=this.root.parent;this.bowl=new Bt;let e=new J(new K(.13,.1,.06,16,1,!0),Xn("#e1262d",.5));e.material.side=xe,e.position.y=.03;let n=new J(new K(.115,.115,.02,16),Xn("#b8742f",.9));n.position.y=.045,this.bowl.add(e,n),this.food=n,this.bowl.visible=!1,t.add(this.bowl),this.yarn=new Bt;let s=new J(new bt(.07,12,10),Xn("#ff7aa8",.9));s.position.y=.07;let r=new J(new De(.07,.008,6,20),Xn("#e84f87",.9));r.position.y=.07,r.rotation.y=.6,this.yarn.add(s,r),this.yarn.visible=!1,t.add(this.yarn)}command(t,e=0){if(!t||this.cmd&&t.seq<=this.cmd.seq&&t.at<=this.cmd.at)return;this.remote=!0;let n=this.cmd&&this.cmd.seq!==t.seq&&t.act;this.cmd=t,this.skew=e,this.props(),this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.goTo(t.target),this.mode="walk",this.followId=t.mode==="follow"?t.by:null,n&&t.act==="call"&&this.onFx&&this.onFx("\u{1F43E}"),t.act==="feed"&&(this.bowl.position.set(this.dest.x+.3,0,this.dest.z),this.food.scale.set(1,1,1),this.bowl.visible=!0)}goTo(t){let e=this.nav.toCell(t.x,t.z),n=this.nav.nearestFree(e.c,e.r);this.dest=this.nav.center(n.c,n.r),this.path=this.nav.find(this.pos,this.dest)}pickTarget(){for(let t=0;t<8;t++){let e=Zl[Math.floor(Math.random()*Zl.length)];if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)>1.5)return e}return Zl[0]}arrive(t){let e=this.cmd,s=!e||!e.until||Date.now()+(this.skew||0)>e.until+6e4?0:Math.min(12,(e.until-e.at)/1e3),r=e?e.then:"sit";r==="pet"&&s>0?(this.mode="happy",this.until=t+s,this.onFx&&this.onFx("\u{1F495}")):r==="feed"&&s>0?(this.mode="eat",this.until=t+s,this.facing=Math.atan2(this.bowl.position.x-this.pos.x,this.bowl.position.z-this.pos.z),this.onFx&&this.onFx("\u{1F60B}")):r==="play"&&s>0?(this.mode="play",this.until=t+s,this.playC={x:this.pos.x,z:this.pos.z},this.yarn.visible=!0,this.onFx&&this.onFx("\u{1F9F6}")):(this.mode=r==="loaf"?"loaf":"sit",this.until=t+1e6,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1))}update(t,e,n){this.remote?this.remoteTick(t,e,n):(this.mode==="happy"&&e>this.until&&(this.mode="sit",this.until=e+3+Math.random()*5),this.mode!=="walk"&&this.mode!=="happy"&&e>this.until&&(this.path=this.nav.find(this.pos,this.pickTarget()),this.mode="walk"));let s=!1;if(this.mode==="walk"){let c=this.path[0];if(c){let f=this.followId||this.cmd&&this.cmd.act?1.5:.75,h=c.x-this.pos.x,u=c.z-this.pos.z,d=Math.hypot(h,u),g=f*t;d<=g?(this.pos.x=c.x,this.pos.z=c.z,this.path.shift()):(this.pos.x+=h/d*g,this.pos.z+=u/d*g),this.turn(Math.atan2(h,u),t),s=!0}else if(this.remote)this.arrive(e);else{let f=Math.random();this.mode=f<.35?"loaf":"sit",this.until=e+5+Math.random()*12}}if(this.mode==="play"){let c=e*2.2,f=this.playC;this.yarn.position.set(f.x+Math.cos(c)*.45,0,f.z+Math.sin(c)*.45),this.yarn.rotation.z=-c*3;let h=this.yarn.position.x-this.pos.x,u=this.yarn.position.z-this.pos.z,d=Math.hypot(h,u);d>.22&&(this.pos.x+=h/d*Math.min(d-.2,1.4*t),this.pos.z+=u/d*Math.min(d-.2,1.4*t),s=!0),this.turn(Math.atan2(h,u),t)}this.mode==="eat"&&this.food&&(this.food.scale.y=Math.max(.15,this.food.scale.y-t*.12)),this.phase+=t*(s?11:0);let r=1-Math.exp(-t*8);this.legs.forEach((c,f)=>{let h=Math.sin(this.phase+(f%2?Math.PI:0)+(f>1?Math.PI/2:0));c.rotation.x+=((s?h*.6:this.mode==="loaf"?-1.3:0)-c.rotation.x)*r});let o=this.mode==="sit"?-.45:this.mode==="eat"?.18:0,a=this.mode==="loaf"?-.1:this.mode==="sit"?-.03:this.mode==="eat"?-.02:Math.abs(Math.sin(this.phase))*.01;this.body.rotation.x+=(o-this.body.rotation.x)*r,this.body.position.y+=(a-this.body.position.y)*r,this.mode==="sit"?this.body.position.z+=(-.08-this.body.position.z)*r:this.body.position.z+=(0-this.body.position.z)*r,this.mode==="happy"&&(this.body.position.y=Math.abs(Math.sin(e*9))*.12),this.mode==="play"&&(this.body.position.y=Math.max(0,Math.sin(e*7))*.1),this.head.rotation.x=this.mode==="sit"?.45:this.mode==="happy"?-.3:this.mode==="eat"?.75+Math.sin(e*10)*.08:0,this.head.rotation.y=s||this.mode==="eat"?0:Math.sin(e*.7)*.6;let l=this.mode==="happy"||this.mode==="play";this.tail.forEach((c,f)=>{f&&(c.rotation.z=Math.sin(e*(l?14:s?6:2.2)+f*.7)*(.18+f*.03)),c.rotation.x=f?l?.05:.25:this.mode==="loaf"?-1.45:l?-.15:-.9}),this.root.position.set(this.pos.x,0,this.pos.z),this.root.rotation.y=this.facing}turn(t,e){let n=((t-this.facing+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;this.facing+=n*Math.min(1,e*8)}remoteTick(t,e,n){let s=this.cmd;if(!s)return;let r=this.followId&&s.until&&Date.now()+(this.skew||0)>s.until;if(this.followId&&!r&&n&&n.posOf){let o=n.posOf(this.followId);o&&(!this.nextFollow||e>this.nextFollow)&&(this.nextFollow=e+.7,Math.hypot(o.x-this.pos.x,o.z-this.pos.z)>1.1&&(this.goTo({x:o.x+.45,z:o.z+.35}),this.mode="walk"))}(r||["happy","eat","play"].includes(this.mode)&&e>this.until)&&(this.followId=null,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.mode="sit",this.until=e+1e6)}};var Vh=["#f1c9a5","#e2ae84","#f6d7bd","#c98e62","#ebbf98","#d9a074"];var Wh=["short","long","spiky","bun","bob","short"],Og=(i,t,e)=>i+(t-i)*e,Xh={},qt=(i,t)=>Xh[i]||(Xh[i]=t());function we(i,t=.75){return new se({color:i,roughness:t,metalness:0})}var Qs={robe:"#ec8a1c",under:"#d06a17",sash:"#a8401a",shoes:"#5b3a24"},uo=null;function kg(){if(uo)return uo;let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#a8401a",t.fillRect(0,0,256,128),t.strokeStyle="#f2c14e",t.lineWidth=8,t.strokeRect(8,8,240,112),t.fillStyle="#ffd56a",t.font='900 72px "Segoe UI", "Noto Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SIMI",128,68);let e=new hn(i);return e.colorSpace=Ee,uo=new se({map:e,roughness:.8}),uo}var Ti=class{constructor(t,e){this.index=e,this.root=new Bt,this.body=new Bt,this.root.add(this.body),this.joint={},this.pose={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.08,armRz:-.08,headY:0,headX:0,lean:0,lift:0},this.phase=Math.random()*10,this.blinkAt=performance.now()/1e3+1+Math.random()*3,this.talkUntil=0,this.action=null,this.dance=null,this.actionUntil=0,this.build(t)}build(t){this.agent=t,t={...t},t.outfit==="kasaya"&&Object.assign(t,{shirt:Qs.robe,pants:Qs.under,shoes:Qs.shoes});let e=t.skin||Vh[this.index%Vh.length],n=t.hairStyle||Wh[this.index%Wh.length];for(;this.body.children.length;)this.body.remove(this.body.children[0]);let s={shirt:we(t.shirt||"#3b6fb6",.8),skin:we(e,.6),hair:we(t.hair||"#2b1d14",.9),pants:we(t.pants||"#2f3342",.85),shoe:we(t.shoes||"#1d1d24",.6),dark:we("#1f1a17",.4),white:we("#ffffff",.3),mouth:we("#7a3434",.6),cheek:new se({color:"#ff8f8f",transparent:!0,opacity:.35,roughness:1})};this.mats=s;let r=(p,M,x,v=0,R=0,S=0)=>{let T=new J(M,x);return T.position.set(v,R,S),T.castShadow=!0,p.add(T),T},o=.42;this.shoes=[];let a=qt("leg",()=>new Fe(.078,.25,4,10)),l=qt("shoe",()=>new Rt(.14,.08,.22));for(let p of[-1,1]){let M=new Bt;M.position.set(p*.095,o,0),r(M,a,s.pants,0,-.2,0),this.shoes.push(r(M,l,s.shoe,0,-.375,.045)),this.body.add(M),this.joint[p<0?"legL":"legR"]=M}let c=r(this.body,qt("torso",()=>new Fe(.19,.2,6,14)),s.shirt,0,.68,0);c.scale.set(1,1,.78),this.torso=c,r(this.body,qt("belt",()=>new K(.185,.185,.05,16)),s.pants,0,.47,0).scale.set(1,1,.8);let f=qt("arm",()=>new Fe(.062,.22,4,10)),h=qt("hand",()=>new bt(.068,12,10));for(let p of[-1,1]){let M=new Bt;M.position.set(p*.255,.86,0),r(M,f,s.shirt,0,-.15,0),r(M,h,s.skin,0,-.35,0),this.body.add(M),this.joint[p<0?"armL":"armR"]=M}this.cup=r(this.joint.armR,qt("cup",()=>new K(.05,.04,.11,12)),we("#e9f3fb",.3),0,-.4,.05),this.cup.visible=!1,this.stick=r(this.joint.armR,qt("stick",()=>{let p=new K(.012,.022,1.35,8);return p.translate(0,.5,0),p}),we("#c99a5b",.45),0,-.36,.02),this.stick.rotation.x=1.35,this.stick.visible=!1,this.paper=r(this.joint.armL,qt("paper",()=>new Rt(.2,.02,.26)),we("#fffdf5",.9),0,-.4,.08),this.paper.visible=!1;let u=new Bt;u.position.set(0,1,0),this.body.add(u),this.joint.head=u,r(u,qt("neck",()=>new K(.07,.08,.1,10)),s.skin,0,-.03,0),r(u,qt("head",()=>new bt(.25,24,18)),s.skin,0,.19,0);let d=qt("eye",()=>new bt(.034,12,10)),g=qt("hl",()=>new bt(.011,6,6));this.eyes=[];for(let p of[-1,1]){let M=r(u,d,s.dark,p*.088,.21,.222);M.scale.set(1,1.15,.6),r(M,g,s.white,.012,.014,.03).castShadow=!1,this.eyes.push(M);let x=r(u,qt("cheek",()=>new bt(.045,10,8)),s.cheek,p*.15,.13,.19);x.scale.set(1,.6,.3),x.castShadow=!1}if(this.mouth=r(u,qt("mouth",()=>new Rt(.075,.02,.02)),s.mouth,0,.1,.238),n==="bald"){let p=r(u,qt("shine",()=>new bt(.06,10,8)),new ee({color:"#ffffff",transparent:!0,opacity:.35,depthWrite:!1}),-.07,.42,.1);p.scale.set(1.3,.35,.8),p.castShadow=!1}else{let p=r(u,qt("cap",()=>new bt(.268,24,14,0,Math.PI*2,0,Math.PI*.52)),s.hair,0,.2,-.005);if(p.rotation.x=-.32,n==="buzz"?p.scale.set(.97,.9,.97):r(u,qt("bang",()=>new bt(.2,16,10)),s.hair,0,.36,.12).scale.set(1.15,.38,.62),n==="curly"){let M=qt("curl",()=>new bt(.085,10,8));for(let x=0;x<14;x++){let v=x/14*Math.PI*2,R=x%2?.36:.28;r(u,M,s.hair,Math.sin(v)*.24,R+Math.cos(v*2)*.03,Math.cos(v)*.22-.03)}r(u,M,s.hair,0,.47,0),r(u,M,s.hair,.1,.45,-.08),r(u,M,s.hair,-.1,.45,-.08)}else if(n==="ponytail"){r(u,qt("tie2",()=>new bt(.06,10,8)),we(t.accent||"#e1262d",.5),0,.33,-.25);let M=r(u,qt("tail",()=>new Fe(.075,.26,4,10)),s.hair,0,.16,-.32);M.rotation.x=.35}else if(n==="long"){r(u,qt("long",()=>new Fe(.2,.28,6,12)),s.hair,0,.05,-.12).scale.set(1.15,1,.55);for(let x of[-1,1])r(u,qt("lock",()=>new Fe(.06,.24,4,8)),s.hair,x*.22,.07,.02)}else if(n==="bun")r(u,qt("bun",()=>new bt(.11,14,10)),s.hair,0,.45,-.13);else if(n==="spiky"){let M=qt("spike",()=>new Ye(.07,.17,6));[[-.12,.44,.02,.4],[0,.48,0,0],[.12,.44,.02,-.4],[-.06,.45,-.12,.2],[.07,.45,-.12,-.2]].forEach(([x,v,R,S])=>{let T=r(u,M,s.hair,x,v,R);T.rotation.z=S,T.rotation.x=-.25})}else if(n==="bob"){let M=r(u,qt("bob",()=>new bt(.29,20,12,0,Math.PI*2,0,Math.PI*.62)),s.hair,0,.16,-.03);M.rotation.x=-.15}}let _=t.accessory||"none",m=we(t.accent||"#e1262d",.5);if(_==="cap"){let p=r(u,qt("capTop",()=>new bt(.275,20,12,0,Math.PI*2,0,Math.PI*.5)),m,0,.24,-.01);p.rotation.x=-.18;let M=r(u,qt("brim",()=>new K(.17,.17,.025,20,1,!1,-Math.PI/2,Math.PI)),m,0,.3,.2);M.rotation.x=.12}else if(_==="headphones"){let p=r(u,qt("band",()=>new De(.28,.022,8,24,Math.PI)),we("#2b2b33",.4),0,.2,0);p.rotation.z=0;for(let M of[-1,1])r(u,qt("cup2",()=>new K(.075,.075,.06,16)),m,M*.27,.18,0).rotation.z=Math.PI/2}else if(_==="bow"){for(let p of[-1,1]){let M=r(u,qt("bowW",()=>new Ye(.07,.13,4)),m,p*.07,.43,.06);M.rotation.z=p*Math.PI/2}r(u,qt("bowK",()=>new bt(.035,8,6)),m,0,.43,.06)}else if(_==="crown")r(u,qt("crown",()=>new K(.14,.15,.1,5,1,!0)),we("#f5c518",.3),0,.5,-.02).material.side=xe;else if(_==="headset"){let p=we("#23262f",.4);r(u,qt("hsBand",()=>new De(.275,.014,6,24,Math.PI)),p,0,.2,0),r(u,qt("hsCup",()=>new K(.06,.06,.05,14)),m,-.27,.18,0).rotation.z=Math.PI/2,r(u,qt("hsCup2",()=>new K(.035,.035,.03,10)),p,.265,.18,0).rotation.z=Math.PI/2,r(u,qt("hsBoom",()=>new K(.009,.009,.22,6)),p,-.2,.12,.13).rotation.set(Math.PI/2,0,-.95),r(u,qt("hsMic",()=>new bt(.022,8,6)),p,-.1,.09,.225)}if(t.outfit==="blazer"){r(this.body,qt("vShirt",()=>new Rt(.13,.2,.02)),s.white,0,.77,.148),r(this.body,qt("vTie",()=>new Rt(.04,.17,.012)),we(t.accent||"#f5c518",.5),0,.76,.16);for(let p of[-1,1]){let M=r(this.body,qt("vLapel",()=>new Rt(.045,.24,.016)),we(t.lapel||"#0b3f86",.6),p*.075,.76,.155);M.rotation.z=p*.32}r(this.body,qt("vBadge",()=>new Rt(.075,.032,.01)),we("#f5c518",.3),.12,.8,.14).rotation.y=.45}if(t.outfit==="kasaya"){let p=we(Qs.sash,.85);for(let S of[.152,-.152]){let T=r(this.body,qt("ksSash",()=>new Rt(.11,.48,.02)),p,.02,.7,S);T.rotation.z=-.62}r(this.body,qt("ksShoulder",()=>new bt(.085,12,8)),p,-.2,.9,0).scale.set(1,.6,1.2);let M=new se({color:Qs.robe,roughness:.85,side:xe});r(this.body,qt("ksSkirt",()=>new K(.195,.25,.3,18,1,!0)),M,0,.32,0).scale.set(1,1,.85);let x=r(this.body,qt("ksHem",()=>new De(.25,.012,6,24)),p,0,.17,0);x.rotation.x=Math.PI/2,x.scale.set(1,.85,1);let v=r(this.body,qt("ksBeads",()=>new De(.2,.022,6,18)),we("#5b3418",.5),0,.9,.01);v.rotation.x=Math.PI/2-.35,v.scale.set(1,.8,1),r(this.body,qt("ksBead",()=>new bt(.035,10,8)),we("#f2c14e",.3),0,.84,.17);let R=r(this.body,qt("ksBack",()=>new ie(.22,.11)),kg(),0,.66,-.156);R.rotation.y=Math.PI,R.castShadow=!1}if(_==="glasses"&&!t.isReviewer&&(t={...t,isReviewer:!0}),_==="tie"&&!t.isManager&&(t={...t,isManager:!0}),t.isManager&&(r(this.body,qt("tie",()=>new Rt(.06,.24,.02)),we("#b3362f",.5),0,.73,.155),r(this.body,qt("knot",()=>new Rt(.075,.05,.03)),we("#8f2a24",.5),0,.86,.15)),t.isReviewer){let p=we("#2b2b33",.4),M=qt("glass",()=>new De(.062,.012,8,20));for(let x of[-1,1])r(u,M,p,x*.088,.21,.245);r(u,qt("bridge",()=>new Rt(.06,.012,.012)),p,0,.215,.25)}}say(t){this.talkUntil=performance.now()/1e3+t/1e3}doAction(t,e){this.action=t,this.actionUntil=performance.now()/1e3+e/1e3}animate(t,e,{moving:n,speed:s,seated:r,typing:o,beat:a,meditate:l,kneel:c}){let f=this.pose,h={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.1,armRz:-.1,headY:0,headX:0,lean:0,lift:0};if(this.action&&e>this.actionUntil&&(this.action=null),n){this.phase+=t*(4+s*3.2);let p=Math.sin(this.phase);h.legL=p*.62,h.legR=-p*.62,h.armLx=-p*.55,h.armRx=p*.55,h.lift=Math.abs(Math.cos(this.phase))*.04,h.lean=.06}else if(r&&c){let p=this.bowPeriod||3.2;this.bowPh=((this.bowPh||0)+t/p)%1;let M=this.bowPh<.55?Math.sin(this.bowPh/.55*Math.PI):0;h.hip=1,h.foot=1.5,h.lean=1.12*M,h.legL=h.legR=1.5-h.lean,h.legLz=-.1,h.legRz=.1,h.armLx=-1.45-.85*M,h.armRx=h.armLx,h.armLz=-.5+.62*M,h.armRz=-h.armLz,h.headX=.1+.25*M,this.bowDown=M}else r&&l?(h.legL=-1.47,h.legR=-1.33,h.legLz=.62,h.legRz=-.62,h.armLx=-.48,h.armRx=-.48,h.armLz=.36,h.armRz=-.36,h.headX=.14,h.lean=.04+Math.sin(e*.9+this.index)*.015,h.lift=Math.sin(e*.9+this.index)*.006):r?(h.legL=h.legR=-1.48,h.lift=.06,o?(h.armLx=-1.18+Math.sin(e*17)*.13,h.armRx=-1.18+Math.sin(e*17+1.7)*.13,h.armLz=.22,h.armRz=-.22,h.lean=.12,h.headX=.12,h.headY=Math.sin(e*.7+this.index)*.15):(h.armLx=-.7,h.armRx=-.7,h.armLz=.18,h.armRz=-.18,h.headY=Math.sin(e*.4+this.index*2)*.25)):h.lift=Math.sin(e*2.2+this.index)*.006;if(this.action==="stretch"){let p=Math.sin(e*3)*.12;h.armLx=-2.85+p,h.armRx=-2.85-p,h.armLz=.25,h.armRz=-.25,h.headX=-.2,h.lean=-.1}else if(this.action==="drink")h.armRx=-2.1,h.armRz=.35,h.headX=-.28;else if(this.action==="look")h.headY=Math.sin(e*1.6)*.7;else if(this.action==="wave")h.armRx=-2.7,h.armRz=-.35+Math.sin(e*13)*.4,h.headX=-.1,h.headY=.15;else if(this.action==="dance"){let p=Math.sin(e*8);h.armLx=-1.6+p*1.1,h.armRx=-1.6-p*1.1,h.armLz=.5,h.armRz=-.5,r||(h.lift=Math.abs(Math.sin(e*8))*.1,h.legL=p*.35,h.legR=-p*.35),h.headY=Math.sin(e*4)*.3}else if(this.action==="cheer"){let p=Math.sin(e*9);h.armLx=-2.9+p*.2,h.armRx=-2.9-p*.2,h.armLz=.45,h.armRz=-.45,h.headX=-.25,r||(h.lift=Math.abs(Math.sin(e*7))*.16)}else if(this.action==="place")h.armLx=-1.2,h.armRx=-1.2,h.lean=.25,h.headX=.25;else if(this.action==="highfive"){let p=this.actionUntil-e;h.armRx=-2.55,h.armRz=-.15,h.headX=-.12,p<1&&p>.7&&(h.armRx=-2.2,r||(h.lift=.08))}else if(this.action==="hug")h.armLx=-1.35,h.armRx=-1.35,h.armLz=-.55,h.armRz=.55,h.lean=.16,h.headY=.25,r||(h.lift=Math.sin(e*3)*.015);else if(this.action==="cheers"){let p=this.actionUntil-e;h.armRx=p<1.3&&p>.9?-1.95:-1.55,h.armRz=.05,h.headX=-.05}else if(this.action==="cue"||this.holdCue&&!n&&!this.action){let p=this.action==="cue"?Math.max(0,Math.sin((this.actionUntil-e)*9)):0;h.lean=.42,h.headX=.34,h.armLx=-1.2,h.armLz=.32,h.armRx=-.95-p*.35,h.armRz=-.06,r||(h.legL=.18,h.legR=-.12)}else this.action==="give"&&(h.armRx=-1.35,h.armRz=.12,h.lean=.08,h.headX=.1);this.dance&&!n&&!this.action&&this.dancePose(h,a===void 0?e*2:a,r);let u=e<this.talkUntil;u&&!r&&!n&&!this.action?(h.armRx=-.55+Math.sin(e*5.5)*.35,h.armRz=-.25,h.headX=Math.sin(e*4)*.08):u&&(h.headX+=Math.sin(e*4)*.06),this.cup.visible=this.action==="drink"||this.action==="cheers"||this.action==="give",this.stick.visible=this.action==="cue"||!!this.holdCue,this.paper.visible=this.action==="place"||this.carrying===!0,(this.carrying&&!n&&!this.action||this.carrying&&n)&&(h.armLx=-.9);let d=1-Math.exp(-t*11);for(let p of Object.keys(h))f[p]=Og(f[p],h[p],d);let g=this.joint;g.legL.rotation.set(f.legL,0,f.legLz),g.legR.rotation.set(f.legR,0,f.legRz);for(let p of this.shoes)p.rotation.x=f.foot;g.armL.rotation.set(f.armLx,0,f.armLz),g.armR.rotation.set(f.armRx,0,f.armRz),g.head.rotation.set(f.headX,f.headY,0),this.body.rotation.x=f.lean;let _=f.hip*.42;this.body.position.set(0,f.lift+_*(1-Math.cos(f.lean)),-_*Math.sin(f.lean)),this.torso.scale.y=1+Math.sin(e*2.2+this.index)*.012;let m=1.15;e>this.blinkAt&&(m=.15,e>this.blinkAt+.12&&(this.blinkAt=e+2+Math.random()*4)),l&&r&&!n&&!u&&!this.action&&(m=.15),c&&r&&!n&&(this.bowDown||0)>.3&&(m=.15);for(let p of this.eyes)p.scale.y=m;this.mouth.scale.set(u?.8:1,u?1+Math.abs(Math.sin(e*17))*2.6:1,1)}dancePose(t,e,n){let s=e*Math.PI,r=Math.abs(Math.sin(s));switch(this.dance){case"disco":{let o=Math.sin(s/2)>0;t.armRx=o?-2.75:-.5,t.armRz=o?-.55:-.2,t.armLx=-.25,t.armLz=.95,t.headY=o?.3:-.1,t.headX=o?-.2:.05,n||(t.lift=r*.05,t.legL=Math.sin(s)*.22,t.legR=-Math.sin(s)*.08);break}case"robot":{let o=Math.sin(s)>0?1:-1,a=Math.sin(s/2)>0?1:-1;t.armLx=-1.45-o*.45,t.armRx=-1.45+o*.45,t.armLz=.15,t.armRz=-.15,t.headY=a*.4,t.headX=0,t.lean=0,n||(t.lift=o>0?.02:0,t.legL=o>0?.15:0,t.legR=o<0?.15:0);break}case"shuffle":{let o=Math.sin(s*2);t.armLx=o*.7,t.armRx=-o*.7,t.armLz=.25,t.armRz=-.25,t.lean=.08,t.headY=Math.sin(s)*.15,n||(t.legL=o*.55,t.legR=-o*.55,t.lift=Math.abs(o)*.07);break}case"spin":t.armLx=-.15,t.armRx=-.15,t.armLz=1.35,t.armRz=-1.35,t.headX=-.1,n||(t.lift=r*.06);break;case"hands":t.armLx=-2.9+Math.sin(s)*.25,t.armRx=-2.9-Math.sin(s)*.25,t.armLz=.45+Math.sin(s)*.2,t.armRz=-.45+Math.sin(s)*.2,t.headX=-.22,n||(t.lift=r*.13);break;default:{let o=Math.sin(s);t.armLx=-1.6+o*1,t.armRx=-1.6-o*1,t.armLz=.5,t.armRz=-.5,t.headY=Math.sin(s/2)*.3,n||(t.lift=r*.09,t.legL=o*.3,t.legR=-o*.3)}}}headWorld(t){return this.joint.head.updateWorldMatrix(!0,!1),t.set(0,.5,0).applyMatrix4(this.joint.head.matrixWorld)}};var Wt={minX:-7,maxX:7,minZ:-5,maxZ:5,wallH:3.1},js=[{x:0,z:-1.5},{x:-4.1,z:-1.5},{x:4.1,z:-1.5},{x:-4.1,z:2},{x:4.1,z:2},{x:0,z:2}],_e={w:1.8,d:.85,h:.76},tr=-.82,mo={x:-5.6,z:-4.95},go={cooler:{x:5.55,z:-3.75,face:{x:6.3,z:-4.45}},board:{x:.2,z:-3.85,face:{x:.2,z:-5}},windowL:{x:-3.2,z:-3.9,face:{x:-3.2,z:-5}},windowR:{x:3.4,z:-3.9,face:{x:3.4,z:-5}},shelf:{x:-5.7,z:-.4,face:{x:-7,z:-.4}},tray:{x:5.55,z:3.2,face:{x:5.55,z:4.2}},plant:{x:-5.2,z:1,face:{x:-6.5,z:1}}},$h=[[5.95,-4.95,6.7,-4.05],[-7,-1.4,-6.35,.6],[-7,2.5,-5.95,4.6],[-5.7,3.05,-4.9,3.95],[5,3.75,6.2,4.6],[-6.9,-4.9,-6.2,-4.2],[6.3,4.3,6.95,4.95],[-6.9,.8,-6.3,1.4]],Ot=(i,t=.8,e={})=>new se({color:i,roughness:t,metalness:0,...e});function er(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new hn(s);return n&&(o.colorSpace=Ee),o.anisotropy=4,{tex:o,canvas:s,g:r}}function po(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Gg(){let i=po(7),t=er(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*300);for(;a<n;){let l=220+Math.floor(i()*260),c=[196+i()*22,142+i()*18,96+i()*14].map(Math.round);e.fillStyle=`rgb(${c})`,e.fillRect(a,o,l,64);for(let f=0;f<9;f++){e.strokeStyle=`rgba(110,70,40,${.05+i()*.07})`,e.lineWidth=1+i()*1.5;let h=o+6+i()*52;e.beginPath(),e.moveTo(a,h),e.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.7,h+(i()-.5)*8,a+l,h+(i()-.5)*4),e.stroke()}e.fillStyle="rgba(80,50,30,0.55)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(80,50,30,0.6)",e.fillRect(0,o+64-2,n,2),e.fillStyle="rgba(255,235,200,0.12)",e.fillRect(0,o,n,2)}});return t.tex.wrapS=t.tex.wrapT=wn,t.tex.repeat.set((Wt.maxX-Wt.minX)/4,(Wt.maxZ-Wt.minZ)/4),t.tex}var Jh={tim:["#3f2d84","#5a42a6","#f5c518","#33246c"],mint:["#4f9c88","#7cc8b2","#fff4d6","#3f8573"],vang:["#d9a441","#f2c96b","#fff7e0","#b98a2f"],xanh:["#1a6fd6","#2f8cf0","#ffffff","#0f5bb5"],navy:["#142c5a","#1f3d73","#e1262d","#0f2247"]};function qh(i=Jh.tim){return er(512,320,(t,e,n)=>{t.fillStyle=i[0],t.fillRect(0,0,e,n),t.fillStyle=i[1],t.fillRect(18,18,e-36,n-36),t.strokeStyle=i[2],t.lineWidth=6,t.strokeRect(34,34,e-68,n-68),t.fillStyle=i[3];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.save(),t.translate(s,r),t.rotate(Math.PI/4),t.fillRect(-9,-9,18,18),t.restore();t.fillStyle=i[2];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.beginPath(),t.arc(s,r,3,0,7),t.fill()}).tex}function Vg(){let i=er(512,256,(t,e,n)=>{let s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#6fb6e8"),s.addColorStop(.7,"#bfe3f7"),s.addColorStop(1,"#f4f0dc"),t.fillStyle=s,t.fillRect(0,0,e,n);let r=po(3);for(let o=0;o<7;o++){let a=r()*e,l=40+r()*110,c=18+r()*22;t.fillStyle="rgba(255,255,255,0.92)";for(let f=0;f<5;f++)t.beginPath(),t.arc(a+f*c*.7,l+Math.sin(f)*5,c*(.7+r()*.5),0,7),t.fill()}t.fillStyle="#7fae7a",t.beginPath(),t.moveTo(0,n);for(let o=0;o<=e;o+=16)t.lineTo(o,n-30-Math.sin(o/40)*10-r()*6);t.lineTo(e,n),t.fill()});return i.tex.wrapS=wn,i.tex}var Wg=new ls;function Yh(i,t){Wg.load(i,e=>{e.colorSpace=Ee,e.anisotropy=4,t(e)},void 0,()=>{})}function Xg(){return er(256,320,(i,t,e)=>{i.fillStyle="#fbf3e4",i.fillRect(0,0,t,e),i.fillStyle="#f2b450",i.beginPath(),i.arc(160,120,70,0,7),i.fill(),i.fillStyle="#3f8f8a",i.fillRect(30,170,200,90),i.fillStyle="#d0644a",i.beginPath(),i.moveTo(30,260),i.lineTo(110,150),i.lineTo(190,260),i.fill(),i.fillStyle="#2b2b33",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.fillText("C\u1ED0 L\xCAN!",t/2,300)}).tex}function Kh(i,t){let e={animated:[]},n=new J(new ie(Wt.maxX-Wt.minX,Wt.maxZ-Wt.minZ),Ot("#ffffff",.75,{map:Gg()}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n),e.floor=n;let s=Ot("#ffffff",.95,{map:qh()}),r=new J(new ie(5.2,2.2),s);r.rotation.x=-Math.PI/2,r.position.set(0,.006,.25),r.receiveShadow=!0,i.add(r);let o=Ot("#efe3cc",.95),a=Ot("#c9a77d",.85),l=Ot("#8a6040",.7);e.setDecor=(X={})=>{let $={kem:["#efe3cc","#c9a77d"],bacha:["#d6efe4","#8fc7b0"],xam:["#dfe5ee","#a9b6c9"],troi:["#d9e9f7","#8fb3dc"],vanh:["#fbf3d6","#e2c98a"]}[X.wall||"troi"];$&&(o.color.set($[0]),a.color.set($[1]));let ct={sang:"#ffffff",dam:"#a8876a",xam:"#d4cfcb"}[X.floor||"sang"];ct&&n.material.color.set(ct);let Ht=Jh[X.rug||"xanh"];if(Ht){let Zt=s.map;s.map=qh(Ht),s.needsUpdate=!0,Zt&&Zt.dispose()}};let c=Wt.maxX-Wt.minX,f=Wt.maxZ-Wt.minZ,h=Wt.wallH,u=new J(new Rt(c+.2,h,.2),o);u.position.set(0,h/2,Wt.minZ-.1),u.receiveShadow=!0,i.add(u);let d=new J(new Rt(.2,h,f),o);d.position.set(Wt.minX-.1,h/2,0),d.receiveShadow=!0,i.add(d);let g=new J(new Rt(c+.2,.95,.04),a);g.position.set(0,.475,Wt.minZ+.02),g.receiveShadow=!0,i.add(g);let _=new J(new Rt(.04,.95,f),a);_.position.set(Wt.minX+.02,.475,0),_.receiveShadow=!0,i.add(_);let m=new J(new Rt(c+.2,.06,.07),l);m.position.set(0,.96,Wt.minZ+.035),i.add(m);let p=new J(new Rt(.07,.06,f),l);p.position.set(Wt.minX+.035,.96,0),i.add(p);let M=Ot("#5b3f2a",.8),x=new J(new Rt(c+.4,.25,.2),M);x.position.set(0,-.125,Wt.maxZ+.1),i.add(x);let v=new J(new Rt(.2,.25,f+.2),M);v.position.set(Wt.maxX+.1,-.125,0),i.add(v);let R=Vg();e.sky=R;let S=Ot("#fbf7ee",.6);for(let X of[-3.2,3.4]){let $=new Bt;$.position.set(X,1.85,Wt.minZ+.02);let ct=new ee({map:R,toneMapped:!1});(e.skyMats=e.skyMats||[]).push(ct);let Ht=new J(new ie(1.9,1.25),ct);Ht.position.z=.005,$.add(Ht);let Zt=(Ue,Be,Oe,Ae)=>{let Ne=new J(new Rt(Ue,Be,.08),S);Ne.position.set(Oe,Ae,.03),Ne.castShadow=!0,$.add(Ne)};Zt(2.05,.08,0,.66),Zt(2.05,.08,0,-.66),Zt(.08,1.4,-.99,0),Zt(.08,1.4,.99,0),Zt(.05,1.3,0,0),Zt(1.95,.05,0,.05);let ue=new J(new Rt(2.2,.06,.22),S);ue.position.set(0,-.72,.1),ue.castShadow=!0,$.add(ue);let Qt=new J(new K(.08,.06,.12,10),Ot("#c56a43"));Qt.position.set(.6,-.63,.12),$.add(Qt);let he=new J(new Ke(.11,0),Ot("#5aa05a"));he.position.set(.6,-.5,.12),$.add(he),i.add($)}let T=new Bt;T.position.set(mo.x,0,Wt.minZ+.03);let I=Ot("#6b4a2e",.7),V=Ot("#a8743f",.65),y=new J(new Rt(1.15,2.2,.06),V);y.position.set(0,1.1,.02),y.castShadow=!0,T.add(y);for(let[X,$,ct,Ht]of[[1.3,.09,0,2.24],[.09,2.25,-.62,1.12],[.09,2.25,.62,1.12]]){let Zt=new J(new Rt(X,$,.1),I);Zt.position.set(ct,Ht,.03),T.add(Zt)}for(let X of[.6,1.55]){let $=new J(new Rt(.8,.6,.02),Ot("#946535",.7));$.position.set(0,X,.06),T.add($)}let E=new J(new bt(.045,10,8),Ot("#e3c15a",.3,{metalness:.6}));E.position.set(.42,1.05,.09),T.add(E),i.add(T);let L=er(768,360,()=>{}),H=new Bt;H.position.set(.2,1.9,Wt.minZ+.03);let C=new J(new Rt(2.9,1.42,.06),Ot("#9aa0a8",.5));C.castShadow=!0,H.add(C);let G=new J(new ie(2.78,1.3),new se({map:L.tex,roughness:.5}));G.position.z=.032,H.add(G);let z=new J(new Rt(1.6,.05,.1),Ot("#8c929a",.5));z.position.set(0,-.74,.06),H.add(z),i.add(H),e.drawBoard=X=>{let{g:$,canvas:ct}=L,Ht=ct.width,Zt=ct.height;$.fillStyle="#fbfbf7",$.fillRect(0,0,Ht,Zt),[["CH\u1EDC",X.wait,"#f6d36b"],["\u0110ANG L\xC0M",X.run,"#8fd0f2"],["XONG",X.done,"#9fe0a0"]].forEach(([Qt,he,Ue],Be)=>{let Oe=18+Be*250;$.fillStyle=Ue,$.fillRect(Oe,16,232,46),$.fillStyle="#2b2b33",$.font="bold 26px Segoe UI, Arial, sans-serif",$.textAlign="left",$.fillText(Qt,Oe+12,49),$.textAlign="right",$.fillText(String(he),Oe+220,49),Be<2&&($.fillStyle="#d5d9df",$.fillRect(Oe+241,16,3,Zt-32));let Ae=Math.min(he,9);for(let Ne=0;Ne<Ae;Ne++){let Ri=Oe+14+Ne%3*74,Tn=80+Math.floor(Ne/3)*86;$.save(),$.translate(Ri+30,Tn+34),$.rotate((Ne*37%9-4)*.02),$.fillStyle="rgba(0,0,0,0.12)",$.fillRect(-28,-30,62,66),$.fillStyle=Ue,$.fillRect(-31,-34,62,66),$.fillStyle="rgba(0,0,0,0.25)";for(let rn=0;rn<3;rn++)$.fillRect(-22,-18+rn*14,40-rn*8,4);$.restore()}}),L.tex.needsUpdate=!0},e.drawBoard({wait:0,run:0,done:0});let it=new Bt;it.position.set(-1.75,2.35,Wt.minZ+.04);let Y=new J(new K(.28,.28,.05,32),Ot("#fbfaf5",.5));Y.rotation.x=Math.PI/2,it.add(Y);let B=new J(new De(.28,.03,8,32),Ot("#5b4a3a",.5));it.add(B);for(let X=0;X<12;X++){let $=new J(new Rt(.02,.05,.01),Ot("#5b4a3a")),ct=X/12*Math.PI*2;$.position.set(Math.sin(ct)*.22,Math.cos(ct)*.22,.03),$.rotation.z=-ct,it.add($)}let j=(X,$)=>{let ct=new Bt,Ht=new J(new Rt($,X,.01),Ot("#222"));return Ht.position.y=X/2,ct.add(Ht),ct.position.z=.04,it.add(ct),ct},st=j(.13,.03),mt=j(.2,.02);i.add(it),e.animated.push(()=>{let X=new Date;mt.rotation.z=-(X.getMinutes()+X.getSeconds()/60)/60*Math.PI*2,st.rotation.z=-(X.getHours()%12+X.getMinutes()/60)/12*Math.PI*2});let Tt=Ot("#ffffff",.6,{map:Xg()}),et=new J(new ie(.9,1.2),Tt);et.position.set(Wt.minX+.05,1.8,2.4),et.rotation.y=Math.PI/2,i.add(et);let ht=new J(new Rt(.04,1.3,1),Ot("#0a78f0",.5));ht.position.set(Wt.minX+.015,1.8,2.4),i.add(ht),Yh("brand/simi-banner.jpg",X=>{Tt.map=X,Tt.needsUpdate=!0});let _t=(X,$,ct,Ht,Zt,ue,Qt)=>{let he=new Bt;he.position.copy(Zt),he.rotation.y=ue,i.add(he);let Ue=new J(new bt(.03,10,8),Ot("#c9ced8",.3,{metalness:.6}));Ue.position.z=.02,he.add(Ue);let Be=new Bt;he.add(Be);let Oe=.32,Ae=new J(new Rt($+.12,ct+.12,.04),Ot(Ht,.55));Ae.position.set(0,-Oe-ct/2-.06,.05),Ae.castShadow=!0,Be.add(Ae);let Ne=new J(new ie($,ct),new ee({transparent:!0,opacity:0}));Ne.position.set(0,Ae.position.y,.075),Be.add(Ne),Yh(X,Tn=>{Ne.material.map=Tn,Ne.material.opacity=1,Ne.material.needsUpdate=!0});let Ri=Ot("#5a6478",.8);for(let Tn of[-1,1]){let rn=Tn*($/2-.02),Ai=-Oe-.02,Ci=Math.hypot(rn,Ai),Pi=new J(new K(.007,.007,Ci,5),Ri);Pi.position.set(rn/2,Ai/2,.05),Pi.rotation.z=Math.atan2(rn,-Ai),Be.add(Pi)}return e.animated.push(Tn=>{Be.rotation.z=Math.sin((Tn||performance.now()/1e3)*.9+Qt)*.025}),he};_t("brand/uniq.png",1.15,.41,"#142c5a",new D(Wt.minX+.03,2.95,-3.05),Math.PI/2,0),_t("brand/crenot.png",1.35,.33,"#ffffff",new D(Wt.minX+.03,3,-.4),Math.PI/2,1.7),_t("brand/simi.png",.85,.255,"#0a78f0",new D(-4.4,2.95,Wt.minZ+.03),0,3.1);let xt=new Bt;xt.position.set(-6.68,0,-.4),xt.rotation.y=Math.PI/2;let Ut=Ot("#8a5a35",.75),Gt=new Rt(.05,2,.4);for(let X of[-.95,.95]){let $=new J(Gt,Ut);$.position.set(X,1,0),$.castShadow=!0,xt.add($)}let Xt=po(11),te=["#c4553f","#3f8fb0","#e0b04c","#4f7a4a","#7b4fa0","#d07a2c","#2f5d9e"];for(let X=0;X<5;X++){let $=new J(new Rt(1.9,.04,.4),Ut);if($.position.set(0,.04+X*.48,0),$.castShadow=!0,$.receiveShadow=!0,xt.add($),X===4)continue;let ct=-.88;for(;ct<.8;){let Ht=.05+Xt()*.06,Zt=.26+Xt()*.14,ue=new J(new Rt(Ht,Zt,.28),Ot(te[Math.floor(Xt()*te.length)],.7));ue.position.set(ct+Ht/2,.06+X*.48+Zt/2,.02),ue.rotation.z=Xt()<.1?.2:0,ue.castShadow=!0,xt.add(ue),ct+=Ht+.012+(Xt()<.12?.15:0)}}i.add(xt);let ut=new Bt;ut.position.set(6.3,0,-4.45);let P=new J(new Rt(.42,1.05,.42),Ot("#eceef1",.4));P.position.y=.525,P.castShadow=!0,ut.add(P);let wt=new J(new K(.17,.17,.48,18),new se({color:"#7cc0ec",transparent:!0,opacity:.7,roughness:.15}));wt.position.y=1.32,ut.add(wt);let q=new J(new Rt(.08,.06,.06),Ot("#3f78c2"));q.position.set(-.1,.8,.23),ut.add(q);let Z=q.clone();Z.material=Ot("#d0453f"),Z.position.x=.1,ut.add(Z),i.add(ut);let ft=[],gt=(X,$,ct=1)=>{let Ht=new Bt;Ht.position.set(X,0,$),Ht.scale.setScalar(ct);let Zt=new J(new K(.24,.18,.42,14),Ot("#c56a43",.8));Zt.position.y=.21,Zt.castShadow=!0,Ht.add(Zt);let ue=new J(new K(.21,.21,.02,14),Ot("#4a3326"));ue.position.y=.41,Ht.add(ue);let Qt=new Bt;Qt.position.y=.42,Ht.add(Qt);let he=Ot("#4f9a52",.7),Ue=Ot("#3a7a40",.7);for(let Be=0;Be<9;Be++){let Oe=new J(new Ye(.09,.75,5),Be%2?he:Ue),Ae=Be/9*Math.PI*2;Oe.position.set(Math.cos(Ae)*.09,.35,Math.sin(Ae)*.09),Oe.rotation.set(Math.sin(Ae)*.45,0,-Math.cos(Ae)*.45),Oe.castShadow=!0,Qt.add(Oe)}return i.add(Ht),ft.push(Qt),Ht};gt(-6.55,-4.55,1.1),gt(6.6,4.6,1.15),gt(-6.6,1.1,.9),e.animated.push(X=>ft.forEach(($,ct)=>{$.rotation.z=Math.sin(X*1.3+ct)*.04,$.rotation.x=Math.cos(X*1.1+ct)*.03}));let pt=new Bt;pt.position.set(-6.45,0,3.55),pt.rotation.y=Math.PI/2;let A=Ot("#4f7a8a",.95),w=Ot("#5f8c9c",.95),O=new J(new Rt(2,.42,.85),A);O.position.y=.25,O.castShadow=!0,pt.add(O);let at=new J(new Rt(2,.6,.22),A);at.position.set(0,.62,-.32),at.castShadow=!0,pt.add(at);for(let X of[-1,1]){let $=new J(new Rt(.2,.62,.85),A);$.position.set(X,.33,0),$.castShadow=!0,pt.add($)}for(let X of[-.45,.45]){let $=new J(new Rt(.85,.14,.62),w);$.position.set(X,.5,.05),$.castShadow=!0,pt.add($)}let lt=new J(new Rt(.36,.34,.12),Ot("#f2b450"));lt.position.set(.6,.72,-.15),lt.rotation.z=.2,pt.add(lt),i.add(pt);let rt=new Bt;rt.position.set(-5.3,0,3.5);let Lt=new J(new K(.42,.42,.05,24),Ot("#8a5a35",.6));Lt.position.y=.42,Lt.castShadow=!0,rt.add(Lt);let Mt=new J(new K(.05,.08,.4,10),Ot("#3b2b20"));Mt.position.y=.2,rt.add(Mt);let Ct=new J(new K(.05,.045,.1,12),Ot("#f4f1ea"));Ct.position.set(.1,.5,.05),rt.add(Ct),i.add(rt);let $t=new Bt;$t.position.set(5.6,0,4.15);let N=new J(new Rt(1.1,.06,.65),Ot("#b9844f",.6));N.position.y=.78,N.castShadow=!0,N.receiveShadow=!0,$t.add(N);for(let[X,$]of[[-.48,-.26],[.48,-.26],[-.48,.26],[.48,.26]]){let ct=new J(new Rt(.06,.78,.06),Ot("#5e3c22"));ct.position.set(X,.39,$),ct.castShadow=!0,$t.add(ct)}let Q=new J(new Rt(.5,.06,.38),Ot("#6b7a8f",.5));Q.position.set(0,.84,0),$t.add(Q);let yt=new Bt;yt.position.set(0,.86,0),$t.add(yt),i.add($t);let It=[Ot("#fffdf6",.9),Ot("#f1ece0",.9)];e.setTray=X=>{for(;yt.children.length;)yt.remove(yt.children[0]);for(let $=0;$<Math.min(X,14);$++){let ct=new J(new Rt(.4,.012,.3),It[$%2]);ct.position.y=$*.014,ct.rotation.y=($*37%7-3)*.03,ct.castShadow=!0,yt.add(ct)}},e.trayAnchor=new D(5.6,.95,4.5),e.lamps=[];let vt=Ot("#2b2b33",.6),Yt=Ot("#f2b450",.45);for(let[X,$]of[[-4.1,.25],[0,.25],[4.1,.25]]){let ct=new Bt;ct.position.set(X,0,$);let Ht=new J(new K(.008,.008,.6,6),vt);Ht.position.y=Wt.wallH-.3,ct.add(Ht);let Zt=new J(new Ye(.32,.26,20,1,!0),Yt);Zt.material.side=xe,Zt.position.y=Wt.wallH-.68,Zt.castShadow=!1,ct.add(Zt);let ue=new se({color:"#fff3d6",emissive:"#ffd58a",emissiveIntensity:0,roughness:.3}),Qt=new J(new bt(.075,12,10),ue);Qt.position.y=Wt.wallH-.78,ct.add(Qt);let he=new ao("#ffd9a0",0,7.5,1.6);he.position.y=Wt.wallH-.85,ct.add(he),i.add(ct),e.lamps.push({bulbMat:ue,light:he})}let Nt=140,ne=new Float32Array(Nt*3),F=po(5);for(let X=0;X<Nt;X++)ne[X*3]=-6+F()*12,ne[X*3+1]=.3+F()*2.6,ne[X*3+2]=-4.8+F()*4.5;let At=new Le;At.setAttribute("position",new qe(ne,3));let ot=new Qr(At,new ks({color:"#fff3d6",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));return i.add(ot),e.dust=ot,e.animated.push((X,$)=>{for(let ct=0;ct<Nt;ct++)ne[ct*3+1]+=Math.sin(X*.5+ct)*$*.03,ne[ct*3]+=Math.cos(X*.3+ct*1.7)*$*.02;At.attributes.position.needsUpdate=!0,R.offset.x=X*.004%1}),e}var Zh={sim:["#9a91ad","GI\u1EA2 L\u1EACP"],claude:["#e08a5c","CLAUDE"],anthropic:["#e08a5c","CLAUDE API"],codex:["#4fd1a8","CHATGPT"],antigravity:["#7aa7ff","GEMINI"],openai:["#4fd1a8","GPT API"],gemini:["#7aa7ff","GEMINI"],ollama:["#e6e6e6","OLLAMA"],simi:["#45a2ff","SIMI"]};function Qh(i,t,e){let n=new Bt;n.position.set(t.x,0,t.z);let s=Ot("#c99863",.55),r=Ot("#a5764a",.7),o=Ot("#3b3d46",.45,{metalness:.3}),a=new J(new Rt(_e.w,.06,_e.d),s);a.position.y=_e.h,a.castShadow=!0,a.receiveShadow=!0,n.add(a);for(let H of[-_e.w/2+.05,_e.w/2-.05]){let C=new J(new Rt(.06,_e.h,_e.d-.04),r);C.position.set(H,_e.h/2,0),C.castShadow=!0,n.add(C)}let l=new J(new Rt(_e.w-.1,.45,.03),r);l.position.set(0,_e.h-.28,_e.d/2-.06),l.castShadow=!0,n.add(l);let c=new Bt;c.position.set(-.55,_e.h+.03,-.08),c.rotation.y=1.45;let f={canvas:document.createElement("canvas")};f.canvas.width=192,f.canvas.height=120,f.g=f.canvas.getContext("2d"),f.tex=new hn(f.canvas),f.tex.colorSpace=Ee;let h=new J(new Rt(.62,.4,.035),o);h.position.y=.33,h.castShadow=!0,c.add(h);let u=new J(new ie(.57,.35),new ee({map:f.tex,toneMapped:!1}));u.position.set(0,.33,.019),c.add(u);let d=new J(new Rt(.05,.16,.04),o);d.position.set(0,.08,-.02),c.add(d);let g=new J(new Rt(.22,.015,.16),o);g.position.y=.008,c.add(g),n.add(c);let _=new J(new Rt(.42,.02,.13),Ot("#e4e4ea",.5));_.position.set(0,_e.h+.04,-.2),_.castShadow=!0,n.add(_);let m=new J(new Rt(.06,.02,.09),Ot("#e4e4ea",.5));m.position.set(.32,_e.h+.04,-.2),n.add(m);let p=new J(new K(.045,.04,.1,12),Ot(e.shirt||"#c0504d",.5));p.position.set(.68,_e.h+.08,.05),p.castShadow=!0,n.add(p);let M=new J(new Rt(.24,.02,.32),Ot("#f6f2e8",.9));if(M.position.set(.45,_e.h+.04,.12),M.rotation.y=.2,n.add(M),e.isManager){let H=new Bt;H.position.set(.72,_e.h+.03,-.25),H.add(Object.assign(new J(new K(.07,.08,.02,12),o),{}));let C=new J(new K(.012,.012,.36,6),o);C.position.set(0,.18,0),C.rotation.z=.25,H.add(C);let G=new J(new Ye(.09,.12,12,1,!0),Ot("#e3c15a",.4));G.position.set(-.07,.36,0),G.rotation.z=.9,H.add(G),n.add(H);let z=new J(new K(.05,.03,.14,10),Ot("#e3c15a",.3,{metalness:.7}));z.position.set(.2,_e.h+.1,.25),n.add(z)}let x=new Bt;x.position.set(0,0,tr);let v=Ot("#3d3c4c",.8),R=Ot("#4f4e63",.8),S=new J(new Rt(.52,.08,.5),R);S.position.y=.46,S.castShadow=!0,x.add(S);let T=new J(new Rt(.5,.58,.07),v);T.position.set(0,.82,-.26),T.rotation.x=-.08,T.castShadow=!0,x.add(T);let I=new J(new K(.03,.03,.36,8),o);I.position.y=.24,x.add(I);for(let H=0;H<5;H++){let C=new J(new Rt(.04,.03,.3),o),G=H/5*Math.PI*2;C.position.set(Math.sin(G)*.14,.04,Math.cos(G)*.14),C.rotation.y=G,x.add(C)}n.add(x);let V=new J(new Dn(1.25,1.42,56),new ee({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.set(0,.012,-.3),n.add(V);let y=new J(new Rt(_e.w+.3,1.7,_e.d+1.2),new ee({visible:!1}));y.position.set(0,.85,-.3),n.add(y),i.add(n);let E=(e.source||"sim").split("-")[0],L={group:n,ring:V,hit:y,screen:f,state:"idle",brand:Zh[E]||Zh.sim,model:e.model||""};return yo(L,0,!0),L}function yo(i,t,e){let{g:n,canvas:s,tex:r}=i.screen,o=s.width,a=s.height,l=i.state;if(!(l!=="working"&&!e&&i._drawn===l)){if(i._drawn=l,l==="working"){n.fillStyle="#14263a",n.fillRect(0,0,o,a);let c=Math.floor(t*22);for(let f=0;f<9;f++){let h=c+f,u=h*7%4*10,d=30+h*53%110;n.fillStyle=["#8cc8ff","#7fe0a8","#f6d36b","#c7a5ff"][h%4],n.fillRect(12+u,10+f*12,Math.min(d,o-30-u),5)}Math.floor(t*3)%2&&(n.fillStyle="#fff",n.fillRect(14,10+8*12,7,6))}else if(l==="error")n.fillStyle="#5a1f22",n.fillRect(0,0,o,a),n.fillStyle="#ff8a8a",n.font="bold 54px Segoe UI, Arial",n.textAlign="center",n.fillText("!",o/2,76),n.font="bold 15px Segoe UI, Arial",n.fillText("L\u1ED6I \u2013 xem nh\u1EADt k\xFD",o/2,104);else{let[c,f]=i.brand,h=n.createLinearGradient(0,0,o,a);h.addColorStop(0,"#1d2230"),h.addColorStop(1,"#2a2f40"),n.fillStyle=h,n.fillRect(0,0,o,a),n.fillStyle=c,n.font="bold 24px Segoe UI, Arial",n.textAlign="center",n.fillText(f,o/2,62),i.model&&(n.fillStyle="#aab0c0",n.font="14px Segoe UI, Arial",n.fillText(i.model.slice(0,22),o/2,86)),n.fillStyle=c,n.globalAlpha=.5,n.fillRect(o/2-30,96,60,3),n.globalAlpha=1}r.needsUpdate=!0}}var nr=new D;function mn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;nr.copy(t),nr[n]=0,nr.normalize();let c=.5*o/(o+a),f=1-nr.angleTo(i)/l;return Math.sign(nr[e])===1?f*c:a/(o+a)+c+c*(1-f)}var xo=class extends Rt{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,u=this.attributes.uv.array,d=f.length/6,g=new D,_=.5/s;for(let m=0,p=0;m<f.length;m+=3,p+=2)switch(a.fromArray(f,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),f[m+0]=c.x*Math.sign(a.x)+l.x*r,f[m+1]=c.y*Math.sign(a.y)+l.y*r,f[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),u[p+0]=mn(g,l,"z","y",r,n),u[p+1]=1-mn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[p+0]=1-mn(g,l,"z","y",r,n),u[p+1]=1-mn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[p+0]=1-mn(g,l,"x","z",r,t),u[p+1]=mn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-mn(g,l,"x","z",r,t),u[p+1]=1-mn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-mn(g,l,"x","y",r,t),u[p+1]=1-mn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[p+0]=mn(g,l,"x","y",r,t),u[p+1]=1-mn(g,l,"y","x",r,e);break}}};function tf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Le,c=0;for(let f=0;f<i.length;++f){let h=i[f],u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0,h=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+f);f+=i[u].attributes.position.count}l.setIndex(h)}for(let f in r){let h=jh(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(let f in o){let h=o[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<h;++u){let d=[];for(let _=0;_<o[f].length;++_)d.push(o[f][_][u]);let g=jh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function jh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new qe(o,e,n),l=0;for(let c=0;c<i.length;++c){let f=i[c];if(f.isInterleavedBufferAttribute){let h=l/e;for(let u=0,d=f.count;u<d;u++)for(let g=0;g<e;g++){let _=f.getComponent(u,g);a.setComponent(u+h,g,_)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var dt={minX:-14,maxX:26,minZ:-10,maxZ:18,wallH:3.6,inZ:10},qg=[{x:18.6,z:-4.4},{x:23,z:-4.4}],vs={w:1.25,l:2.5},$l=new Map,U=(i,t=.75,e={})=>{let n=JSON.stringify([i,t,e.metalness||0,e.emissive||"",e.emissiveIntensity||0,e.side||0,!!e.flatShading]);return $l.has(n)||$l.set(n,new se({color:i,roughness:t,metalness:0,...e})),$l.get(n)},Te=(i,t=1.6)=>U(i,.4,{emissive:i,emissiveIntensity:t});function Pe(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new hn(n);return s.colorSpace=Ee,s.anisotropy=8,s}function sn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Yg(){let i=sn(21),t=Pe(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*360);for(;a<n;){let l=260+Math.floor(i()*260),c=i();e.fillStyle=`rgb(${Math.round(232+c*12)},${Math.round(208+c*12)},${Math.round(170+c*14)})`,e.fillRect(a,o,l,64),e.strokeStyle="rgba(165,120,75,.10)",e.lineWidth=1.2;for(let f=0;f<4;f++){let h=o+8+i()*48;e.beginPath(),e.moveTo(a,h);for(let u=a;u<a+l;u+=40)e.lineTo(u,h+Math.sin(u*.02+f)*2.5);e.stroke()}e.fillStyle="rgba(140,100,60,.22)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(140,100,60,.25)",e.fillRect(0,o,n,2)}});return t.wrapS=t.wrapT=wn,t.repeat.set(4,2.9),t}function Jl(i,t,e){return Pe(512,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),n.strokeStyle=t,n.lineWidth=22,n.strokeRect(26,26,s-52,r-52),n.lineWidth=4,n.strokeRect(54,54,s-108,r-108),n.fillStyle=e;for(let o=100;o<r-90;o+=44)for(let a=100+o/44%2*22;a<s-90;a+=44)n.beginPath(),n.arc(a,o,5,0,7),n.fill()})}function Zg(){return Pe(1024,576,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#141a33"),n.addColorStop(1,"#2a1f45"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.06)";for(let s=0;s<9;s++)i.beginPath(),i.arc(120+s*110,470-s%3*30,60+s%4*14,0,Math.PI*2),i.fill();i.textAlign="center",i.fillStyle="#ffffff",i.font="900 86px Nunito, sans-serif",i.fillText("\u{1F3AC} SIMI CINEMA",t/2,e/2-20),i.font="700 34px Nunito, sans-serif",i.fillStyle="rgba(255,255,255,.75)",i.fillText('B\u1EA5m "\u{1F3AC} M\xE0n chi\u1EBFu" v\xE0 d\xE1n link YouTube',t/2,e/2+50),i.fillText("\u0111\u1EC3 c\u1EA3 qu\xE1n c\xF9ng xem",t/2,e/2+95)})}function $g(){return Pe(512,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7fbcf2"),n.addColorStop(.65,"#cfe6fb"),n.addColorStop(1,"#f5efe2"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.85)";for(let[r,o,a]of[[120,120,40],[170,110,52],[220,128,36],[360,220,30],[400,210,42]])i.beginPath(),i.arc(r,o,a,0,7),i.fill();let s=sn(9);for(let r=0;r<t;r+=46+s()*30){let o=120+s()*220,a=40+s()*40;i.fillStyle=`rgba(${90+s()*40},${120+s()*40},${160+s()*40},.55)`,i.fillRect(r,e-o,a,o),i.fillStyle="rgba(255,255,255,.45)";for(let l=e-o+12;l<e-10;l+=18)for(let c=r+6;c<r+a-6;c+=12)i.fillRect(c,l,5,8)}})}function Jg(){return Pe(1024,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.font='900 118px "Nunito", "Segoe UI", sans-serif',i.textAlign="center",i.textBaseline="middle";for(let[n,s]of[[38,"#2f8cf0"],[18,"#7cc4ff"],[0,"#ffffff"]])i.shadowColor="#2f8cf0",i.shadowBlur=n,i.fillStyle=s,i.fillText("SIMI BAR",t/2-110,e/2+4);i.font='italic 900 92px "Nunito", "Segoe UI", sans-serif';for(let[n,s]of[[34,"#ff4fa3"],[14,"#ff9ccf"],[0,"#fff3fa"]])i.shadowColor="#ff4fa3",i.shadowBlur=n,i.fillStyle=s,i.fillText("chill",t/2+300,e/2+10)})}function Kg(){return Pe(512,640,(i,t,e)=>{i.fillStyle="#26332e",i.fillRect(0,0,t,e),i.fillStyle="#f7f3e8",i.textAlign="center",i.font='900 64px "Nunito", "Segoe UI", sans-serif',i.fillText("MENU",t/2,92),i.font='700 34px "Nunito", "Segoe UI", sans-serif',i.textAlign="left",[["C\xE0 ph\xEA s\u1EEFa \u0111\xE1","25k"],["Tr\xE0 \u0111\xE0o cam s\u1EA3","35k"],["Matcha latte","39k"],["Soda chanh d\xE2y","32k"],["B\xE1nh m\xEC AI \u2728","20k"]].forEach(([n,s],r)=>{i.fillStyle="#f7f3e8",i.fillText(n,46,190+r*82),i.fillStyle="#ffd26a",i.textAlign="right",i.fillText(s,t-46,190+r*82),i.textAlign="left"}),i.strokeStyle="rgba(247,243,232,.5)",i.lineWidth=3,i.strokeRect(18,18,t-36,e-36)})}var _o=null;function Qg(){return _o||(_o=Pe(256,256,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(.45,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),_o)}function fn(i,t,e,n,s,r=.35){let o=new J(new ie(n*2,n*2),new ee({map:Qg(),color:s,transparent:!0,opacity:r,depthWrite:!1,blending:Fr,toneMapped:!1}));return o.rotation.x=-Math.PI/2,o.position.set(t,.015,e),o.renderOrder=2,i.add(o),o}function ef(i,t){new ls().load((globalThis.VP_ASSET_BASE||"")+i,e=>{e.colorSpace=Ee,e.anisotropy=8,t(e)},void 0,()=>{})}function sf(i){let t={animated:[],seats:[],obstacles:[],seatMeshes:[]},e=[],n=(N,Q,yt,It,vt,Yt=i,{cast:Nt=!0,receive:ne=!0}={})=>{let F=new J(N,Q);return F.position.set(yt,It,vt),F.castShadow=Nt,F.receiveShadow=ne,Yt.add(F),e.push(F),F},s=(N,Q,yt,It=0)=>It>0?new xo(N,Q,yt,2,Math.min(It,N/2-.001,Q/2-.001,yt/2-.001)):new Rt(N,Q,yt),r=(N,Q,yt,It)=>t.obstacles.push([Math.min(N,yt),Math.min(Q,It),Math.max(N,yt),Math.max(Q,It)]),o=dt.maxX-dt.minX,a=dt.maxZ-dt.minZ,l=(dt.minX+dt.maxX)/2,c=(dt.minZ+dt.maxZ)/2,f=dt.inZ-dt.minZ,h=(dt.minZ+dt.inZ)/2,u={cast:!1};n(s(o+.7,.5,a+.7,.12),U("#e8dfd1",.85),l,-.26,c,i,{cast:!1,receive:!0}),n(s(o+.75,.08,a+.75,.03),U("#d3c4ae",.8),l,-.47,c,i,u);let d=Yg();d.repeat.set(4*o/28,2.9*f/20);let g=new J(new ie(o,f),new se({color:"#ffffff",roughness:.62,map:d}));g.rotation.x=-Math.PI/2,g.position.set(l,.001,h),g.receiveShadow=!0,i.add(g),t.floor=g;let _=U("#f6f0e6",.95),m=U("#e3d5bf",.8),p=U("#b98d5e",.5),M=U("#9b7048",.6);n(s(o+.2,dt.wallH,.22),_,l,dt.wallH/2,dt.minZ-.11,i,u),n(s(.22,dt.wallH,f),_,dt.minX-.11,dt.wallH/2,h,i,u),n(s(o,1,.05),m,l,.5,dt.minZ+.025,i,u),n(s(.05,1,f),m,dt.minX+.025,.5,h,i,u),n(s(o,.06,.09),p,l,1.02,dt.minZ+.045,i,u),n(s(.09,.06,f),p,dt.minX+.045,1.02,h,i,u),n(s(o-.02,.12,.07),M,l,.06,dt.minZ+.035,i,u),n(s(.07,.12,f-.02),M,dt.minX+.035,.06,h,i,u),n(s(o+.22,.12,.3,.03),U("#ffffff",.6),l,dt.wallH+.06,dt.minZ-.08,i,u),n(s(.3,.12,f,.03),U("#ffffff",.6),dt.minX-.08,dt.wallH+.06,h,i,u),n(s(.34,dt.wallH+.12,.34,.04),U("#ffffff",.6),dt.minX-.15,(dt.wallH+.12)/2,dt.inZ,i,u);for(let N=dt.minX+.6;N<dt.maxX;N+=.6)n(s(.02,.83,.02),p,N,.545,dt.minZ+.06,i,u);for(let N=dt.minZ+.6;N<dt.inZ-.2;N+=.6)n(s(.02,.83,.02),p,dt.minX+.06,.545,N,i,u);let x=.6,v=5.4,R=-8.1,S=(x+v)/2;n(s(v-x+1.6,dt.wallH-.02,.07),U("#1d2b4f",.9),S,dt.wallH/2,dt.minZ+.02,i,u),n(s(v-x,1.05,.72,.06),U("#8a5a3b",.55),S,.525,R);for(let N=x+.25;N<v-.1;N+=.28)n(s(.12,.86,.04,.015),U("#a8724c",.5),N,.53,R+.37,i,u);n(s(v-x+.24,.07,.92,.03),U("#f6f3ee",.22,{metalness:.05}),S,1.09,R+.05),n(s(v-x,.04,.04),Te("#4aa8ff",2.4),S,.1,R+.39,i,u),n(s(v-x,.03,.4),U("#b9c2cf",.3,{metalness:.6}),S,.06,R+.6,i,u),r(x-.1,R-.5,v+.1,R+.45),r(x-.1,dt.minZ,v+.1,R);let T=sn(5),I=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#ff9a52","#c3a6ff","#ff5a5f","#9fd6ff"],V=new K(.05,.06,1,12),y=new K(.018,.022,.08,8);for(let N=0;N<3;N++){let Q=1.45+N*.55;n(s(v-x-.4,.05,.34,.015),U("#c79a6a",.5),S,Q,dt.minZ+.22,i,u),n(s(v-x-.4,.035,.03),Te("#ffd8a0",1),S,Q-.04,dt.minZ+.37,i,u);for(let yt=x+.2;yt<v-.3;yt+=.32+T()*.2){let It=I[Math.floor(T()*I.length)],vt=.22+T()*.14,Yt=n(V,U(It,.18,{emissive:It,emissiveIntensity:.25}),yt,Q+vt/2+.03,dt.minZ+.22,i,u);Yt.scale.y=vt,n(y,U("#2b2b33"),yt,Q+vt+.07,dt.minZ+.22,i,u)}}let E=new J(new ie(4.6,1.15),new ee({map:Jg(),transparent:!0,toneMapped:!1,depthWrite:!1}));E.position.set(S,3.12,dt.minZ+.06),i.add(E),E.material.opacity=.95;let L=new se({color:"#e6f6ff",roughness:.05,transparent:!0,opacity:.55});for(let N=0;N<3;N++)n(new K(.05,.04,.13,12),L,x+1.2+N*1.2,1.19,R-.1,i,u);n(s(.55,.48,.38,.05),U("#cfd6df",.25,{metalness:.65}),v-.8,1.37,R-.1),n(s(.3,.06,.2,.02),U("#2b2b33",.4),v-.8,1.64,R-.1,i,u),n(new K(.1,.08,.14,14),U("#ffffff",.5),x+.5,1.2,R-.15,i,u),n(new Ke(.13,1),U("#5fb36f",.8,{flatShading:!0}),x+.5,1.36,R-.15,i,u);let H=new J(new ie(1.1,1.38),new se({map:Kg(),roughness:.9}));H.position.set(x-1.6,2,dt.minZ+.05),i.add(H),n(s(1.24,1.52,.05,.02),U("#8a5a3b",.5),x-1.6,2,dt.minZ+.02,i,u);let C=U("#c2cad6",.25,{metalness:.7}),G=[U("#2f8cf0",.55),U("#ff7a6b",.55)],z=new K(.21,.21,.1,22),it=0;for(let N=x+.6;N<=v-.5;N+=1.05){let Q=R+.85,yt=new Bt;yt.position.set(N,0,Q),i.add(yt),n(z,G[it%2],0,.75,0,yt),n(new K(.035,.035,.7,10),C,0,.36,0,yt),n(new K(.19,.22,.03,20),C,0,.015,0,yt),n(new De(.16,.014,8,20),C,0,.3,0,yt,u).rotation.x=Math.PI/2,$t(`b${++it}`,N,Q,Math.PI,.78,{x:N,z:Q+.55})}let Y=U("#fbf7f0",.35),B=U("#b8875a",.5);iy({scene:i,add:n,box:s,block:r,seat:$t,out:t});let j=[U("#8fc9b0",.85),U("#a99be0",.85),U("#8cc3f5",.85)],st=[U("#ffd34d",.8),U("#ff9a6b",.8),U("#ffffff",.8)],mt=[Jl("#f3ead9","#8fc9b0","rgba(143,201,176,.5)"),Jl("#efe9f8","#a99be0","rgba(169,155,224,.5)"),Jl("#eaf3fc","#8cc3f5","rgba(140,195,245,.5)")];[[-10.2,-6],[-10.2,-1],[-10.2,4]].forEach(([N,Q],yt)=>{let It=j[yt],vt=new Bt;vt.position.set(N-2.6,0,Q),i.add(vt),n(s(.92,.3,2.6,.08),It,0,.27,0,vt),n(s(.8,.14,2.3,.07),It,.05,.47,0,vt),n(s(.26,.72,2.6,.1),It,-.34,.6,0,vt);for(let Nt of[-1,1])n(s(.92,.55,.22,.09),It,0,.42,Nt*1.25,vt);for(let[Nt,ne]of[[-.75,.2],[.75,-.2]])n(s(.14,.34,.34,.07),st[yt],-.13,.66,Nt,vt).rotation.set(ne,0,.22);for(let[Nt,ne]of[[-.35,-1.2],[.35,-1.2],[-.35,1.2],[.35,1.2]])n(new K(.03,.02,.12,8),B,Nt,.06,ne,vt,u);r(N-3.1,Q-1.4,N-2.1,Q+1.4),n(new K(.55,.55,.06,32),U("#c79a6a",.45),N-.4,.38,Q),n(new K(.08,.12,.34,12),U("#9b7048",.5),N-.4,.18,Q),n(new K(.06,.06,.08,12),Te("#ffb35c",.9),N-.4,.45,Q+.2,i,u),n(new K(.05,.04,.12,12),L,N-.55,.47,Q-.2,i,u),r(N-.95,Q-.6,N+.15,Q+.6);for(let Nt=-1;Nt<=1;Nt++)$t(`s${yt+1}${Nt+2}`,N-2.5,Q+Nt*.8,Math.PI/2,.44,{x:N-1.75,z:Q+Nt*.8});let Yt=new J(new ie(3.4,3.2),new se({map:mt[yt],roughness:.95}));Yt.rotation.x=-Math.PI/2,Yt.position.set(N-1,.006,Q),Yt.receiveShadow=!0,i.add(Yt),fn(i,N-1.2,Q,2,"#ffd9a8",.18)});for(let[N,Q]of[[-13.2,-8.4],[-13.2,6.4]])n(new K(.16,.2,.04,18),U("#3a3a44",.4),N,.02,Q),n(new K(.02,.02,1.6,8),U("#3a3a44",.4),N,.82,Q),n(new K(.2,.28,.34,20,1,!0),U("#fff1d6",.6,{side:xe,emissive:"#ffd9a0",emissiveIntensity:.7}),N,1.72,Q,i,u),fn(i,N+.4,Q,1.4,"#ffd9a8",.25);let Tt=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#c3a6ff"].map(N=>new Kt(N)),et=new Kt("#2a3150"),ht=new os(s(.94,.05,.94,.02),new ee({toneMapped:!1}),30),_t=new ae,xt=new Kt;for(let N=0;N<6;N++)for(let Q=0;Q<5;Q++)_t.makeTranslation(-4.5+N,.025,2.5+Q),ht.setMatrixAt(N*5+Q,_t),ht.setColorAt(N*5+Q,et);ht.receiveShadow=!0,i.add(ht),n(s(6.2,.04,5.2,.02),U("#c2cad6",.3,{metalness:.6}),-2,.012,4.5,i,u),t.animated.push(N=>{for(let Q=0;Q<30;Q++){let yt=.5+.5*Math.sin(N*.6+Q*1.7);xt.copy(et).lerp(Tt[(Math.floor(Q/5)+Q)%5],.4+.3*yt),ht.setColorAt(Q,xt)}ht.instanceColor.needsUpdate=!0});let Ut=new J(new Ke(.35,1),new se({color:"#eef3fa",roughness:.1,metalness:.9,flatShading:!0}));Ut.position.set(-2,3,5),Ut.castShadow=!0,i.add(Ut),n(new K(.01,.01,.6,4),U("#888"),-2,3.45,5,i,u),t.animated.push(N=>{Ut.rotation.y=N*.8});let Gt=fn(i,-2,4,1.4,"#ff6fb5",.4),Xt=fn(i,-2,6,1.4,"#4aa8ff",.4);t.animated.push(N=>{Gt.position.set(-2+Math.sin(N*.5)*2.2,.06,4.5+Math.cos(N*.5)*1.6),Xt.position.set(-2+Math.sin(N*.5+Math.PI)*2.2,.06,4.5+Math.cos(N*.5+Math.PI)*1.6)}),n(s(2.2,.95,.8,.06),U("#24304f",.4),-11.5,.475,8.3),n(s(2.2,.05,.05),Te("#ff6fb5",2),-11.5,.9,7.88,i,u),n(s(2.1,.05,.72,.02),U("#3a3a44",.4),-11.5,.97,8.3);for(let N of[-.5,.5])n(new K(.22,.22,.04,24),U("#16161c",.2),-11.5+N,1.02,8.3,i,u);n(s(.4,.04,.3,.01),Te("#4aa8ff",1.2),-11.5,1.01,8.3,i,u);for(let N of[-13,-10])n(s(.7,1.6,.6,.06),U("#24304f",.5),N,.8,9.2),n(new K(.22,.22,.02,24),U("#3a3a44",.3),N,1.05,8.89,i,u).rotation.x=Math.PI/2,n(new K(.12,.12,.02,20),U("#3a3a44",.3),N,.5,8.89,i,u).rotation.x=Math.PI/2;r(-13.4,7.85,-9.6,9.6),[[.6,-3.4],[3,-2.6]].forEach(([N,Q],yt)=>{n(new K(.42,.42,.05,28),Y,N,1.08,Q),n(new K(.04,.05,1.06,10),U("#3a3a44",.4),N,.53,Q),n(new K(.26,.3,.03,20),U("#3a3a44",.4),N,.015,Q),n(new K(.05,.04,.13,12),L,N+.12,1.17,Q-.05,i,u),n(new bt(.06,10,8),U(["#ff7aa8","#ffd34d"][yt],.7),N-.12,1.15,Q+.06,i,u),r(N-.45,Q-.45,N+.45,Q+.45)});let te=$g();for(let N of[-7.6,8.4]){let Q=new J(new ie(1.7,1.6),new ee({map:te,toneMapped:!1}));Q.position.set(dt.minX+.03,2.15,N),Q.rotation.y=Math.PI/2,i.add(Q),n(s(.08,1.8,1.9,.02),U("#ffffff",.5),dt.minX+.02,2.15,N,i,u),n(s(.1,.05,1.7),U("#ffffff",.5),dt.minX+.06,2.15,N,i,u),n(s(.1,1.6,.05),U("#ffffff",.5),dt.minX+.06,2.15,N,i,u),n(s(.22,.06,1.95,.02),U("#ffffff",.5),dt.minX+.1,1.32,N,i,u)}ry({scene:i,add:n,box:s,block:r,seat:$t,out:t}),ly({scene:i,add:n,box:s,block:r,seat:$t,out:t});let ut=[U("#f6f1e8",.6),U("#d98b5f",.75)],P=[U("#5fb36f",.85,{flatShading:!0}),U("#3f9a5a",.85,{flatShading:!0})],wt=new Ke(1,1);[[-13.3,-9.3],[-13.3,9.3],[-6,-9.3],[-13.3,-3.6],[14.3,9.2],[25.5,6.8]].forEach(([N,Q],yt)=>{n(new K(.26,.19,.5,18),ut[yt%2],N,.25,Q),n(new K(.24,.24,.03,18),U("#6b4a32",.9),N,.49,Q,i,u);let It=sn(30+yt);for(let vt=0;vt<5;vt++)n(wt,P[vt%2],N+(It()-.5)*.3,.8+It()*.55,Q+(It()-.5)*.3).scale.setScalar(.2+It()*.12);r(N-.35,Q-.35,N+.35,Q+.35)});for(let N=x+1;N<v;N+=2.4)n(new K(.015,.015,1.1,8),U("#7c818d"),N,dt.wallH-.55,R+.1,i,u),n(new Ye(.2,.22,20,1,!0),U("#c99a5b",.4,{side:xe}),N,dt.wallH-1.15,R+.1,i,u),n(new bt(.07,12,8),Te("#ffd28a",3),N,dt.wallH-1.23,R+.1,i,u),fn(i,N,R+.9,1.25,"#ffd9a0",.32);let q=["#ffd28a","#ff9ccf","#9fd0ff","#b6f5d8"].map(N=>new Kt(N)),Z=96,ft=new os(new bt(.035,8,6),new ee({toneMapped:!1}),Z),gt=new ae;for(let N=0;N<Z;N++){let Q=N/(Z-1),yt=Q<.6,It=yt?dt.maxX-.4-Q/.6*(o-.8):dt.minX+.1,vt=yt?dt.minZ+.1:dt.minZ+.4+(Q-.6)/.4*(f-.8),Yt=dt.wallH-.25-Math.abs(Math.sin(N*.55))*.22;gt.makeTranslation(It,Yt,vt),ft.setMatrixAt(N,gt),ft.setColorAt(N,q[N%4])}i.add(ft);let pt=new ee({color:"#ffffff",toneMapped:!1}),A=new J(new ie(2.4,3.2),pt);A.position.set(dt.minX+.075,2,-3.6),A.rotation.y=Math.PI/2,i.add(A),n(s(.06,3.36,2.56,.03),U("#1d2b4f",.4),dt.minX+.03,2,-3.6,i,u),ef("brand/simi-banner.jpg",N=>{pt.map=N,pt.needsUpdate=!0});let w=(N,Q,yt,It,vt,Yt,Nt,ne)=>{let F=new Bt;F.position.set(vt,Yt,Nt),F.rotation.y=ne,i.add(F),n(s(Q+.18,yt+.18,.05,.03),U(It,.5),0,0,0,F,u);let At=new J(new ie(Q,yt),new ee({transparent:!0,opacity:0,toneMapped:!1}));At.position.z=.03,F.add(At),ef(N,ot=>{At.material.map=ot,At.material.opacity=1,At.material.needsUpdate=!0})};w("brand/uniq.png",1.6,.57,"#142c5a",dt.minX+.05,2.4,1.6,Math.PI/2),w("brand/crenot.png",1.8,.44,"#ffffff",dt.minX+.05,2.4,6,Math.PI/2),w("brand/simi.png",1.3,.39,"#0a78f0",dt.minX+.05,2.4,-.8,Math.PI/2);let O=4.8,at=2.7,lt=-9.6,rt=1.95,Lt=dt.minZ+.17;n(s(O+.3,at+.3,.08,.04),U("#16161c",.35),lt,rt,dt.minZ+.12,i,u),n(s(O+.6,.08,.3,.03),U("#2b2b33",.4),lt,rt-at/2-.22,dt.minZ+.2,i,u);for(let N of[-1,1])n(s(.42,1,.36,.05),U("#22222a",.5),lt+N*(O/2+.55),.5,dt.minZ+.3);for(let N of[-1,1])for(let Q of[.72,.3])n(new K(Q>.5?.08:.13,Q>.5?.08:.13,.02,20),U("#3a3a44",.3),lt+N*(O/2+.55),Q,dt.minZ+.49,i,u).rotation.x=Math.PI/2;r(lt-O/2-.8,dt.minZ,lt-O/2-.3,dt.minZ+.5),r(lt+O/2+.3,dt.minZ,lt+O/2+.8,dt.minZ+.5);let Mt=new J(new ie(O,at),new ee({map:Zg(),toneMapped:!1}));Mt.position.set(lt,rt,Lt),i.add(Mt);let Ct=new J(new ie(O,at),new ee({color:0,opacity:0,blending:Cn,toneMapped:!1}));Ct.position.set(lt,rt,Lt+.002),Ct.visible=!1,i.add(Ct),Ct.userData.cinema=!0,Mt.userData.cinema=!0,t.cinema={x:lt,y:rt,z:Lt+.004,w:O,h:at,idle:Mt,hole:Ct},dy({scene:i,add:n,box:s,block:r,seat:$t,out:t,statics:e,flat:u,glassM:L}),gy({scene:i,add:n,box:s,block:r,seat:$t,out:t,flat:u,glassM:L,tableTop:Y});function $t(N,Q,yt,It,vt,Yt,Nt,ne){t.seats.push({id:N,x:Q,z:yt,face:It,h:vt,approach:Yt,kind:Nt,...ne?{theme:ne}:{}});let F=new J(new K(.32,.32,vt+.1,10),new ee({visible:!1}));F.position.set(Q,(vt+.1)/2,yt),F.userData.seatId=N,i.add(F),t.seatMeshes.push(F)}return jg(i,e),t.spawn={minX:8,maxX:16,minZ:13,maxZ:16.5},t}function jg(i,t){i.updateMatrixWorld(!0);let e=new Map;for(let n of t){let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(let o of Object.keys(s.attributes))["position","normal","uv"].includes(o)||s.deleteAttribute(o);s.attributes.uv||s.setAttribute("uv",new le(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld);let r=`${n.material.uuid}|${n.castShadow}|${n.receiveShadow}`;e.has(r)||e.set(r,{mat:n.material,cast:n.castShadow,receive:n.receiveShadow,geos:[]}),e.get(r).geos.push(s),n.parent.remove(n)}for(let{mat:n,cast:s,receive:r,geos:o}of e.values()){let a=tf(o,!1);if(!a)continue;let l=new J(a,n);l.castShadow=s,l.receiveShadow=r,l.matrixAutoUpdate=!1,i.add(l)}for(let n of[...i.children])n.isGroup&&n.children.length===0&&i.remove(n)}var ce={cx:8,cz:.6,r:1.75,x1:4.9,x2:13.1,z1:-2.3,z2:3.5,gx1:5.4,gx2:10.6,gz1:5.2,gz2:8.4};function ty(){return Pe(256,512,(i,t,e)=>{let n=sn(7);i.fillStyle="#d5d3a2",i.fillRect(0,0,t,e);for(let s=0;s<e;s+=4){let r=n();i.fillStyle=`rgba(${150+r*40},${150+r*30},${80+r*20},.18)`,i.fillRect(0,s,t,2)}i.fillStyle="#2f3b2c",i.fillRect(0,0,14,e),i.fillRect(t-14,0,14,e),i.fillStyle="rgba(255,255,255,.12)",i.fillRect(14,0,2,e),i.fillRect(t-16,0,2,e),i.fillStyle="rgba(90,80,40,.35)",i.fillRect(0,0,t,2),i.fillRect(0,e-2,t,2)})}function ey(i){let n=1040/(ce.gx2-ce.gx1),s=640/(ce.gz2-ce.gz1);return Pe(1040,640,r=>{r.fillStyle="#ece5d3",r.fillRect(0,0,1040,640);let o=a=>{r.lineWidth=3,r.strokeStyle="rgba(150,135,105,.38)",a(0),r.lineWidth=2,r.strokeStyle="rgba(255,255,255,.75)",a(3)};o(a=>{for(let l=14;l<640;l+=18)r.beginPath(),r.moveTo(0,l+a),r.lineTo(1040,l+a),r.stroke()});for(let[a,l,c]of i){let f=(a-ce.gx1)*n,h=(l-ce.gz1)*s,u=c*n;r.fillStyle="#ece5d3",r.beginPath(),r.arc(f,h,u+6*18,0,Math.PI*2),r.fill(),o(d=>{for(let g=1;g<=6;g++)r.beginPath(),r.arc(f,h,u+g*18+d,0,Math.PI*2),r.stroke()})}})}function ny(){return Pe(768,240,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#5b3a22"),n.addColorStop(1,"#3e2615"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=2;for(let s=12;s<e;s+=17)i.beginPath(),i.moveTo(0,s),i.bezierCurveTo(t*.3,s+6,t*.6,s-6,t,s+3),i.stroke();i.strokeStyle="#d9b46a",i.lineWidth=5,i.strokeRect(12,12,t-24,e-24),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f3d58c",i.font='bold 74px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("THI\u1EC0N \xB7 D\u01AF\u1EE0NG SINH".normalize("NFC"),t/2,e*.42),i.fillStyle="#ead9b0",i.font='600 34px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("T\u0129nh t\xE2m \xB7 H\xEDt th\u1EDF \xB7 An nhi\xEAn".normalize("NFC"),t/2,e*.76)})}function iy({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},{cx:a,cz:l}=ce,c=U("#6b4528",.6),f=U("#a77b4f",.6),h=U("#a9a59b",.95,{flatShading:!0}),u=ce.x2-ce.x1,d=ce.z2-ce.z1,g=(ce.x1+ce.x2)/2,_=(ce.z1+ce.z2)/2;t(e(u+.2,.03,d+.2,.01),c,g,.015,_,i,o);let m=ty();m.wrapS=m.wrapT=wn,m.repeat.set(u/.9,d/1.8);let p=new J(new ie(u,d),new se({map:m,roughness:.9}));p.rotation.x=-Math.PI/2,p.position.set(g,.032,_),p.receiveShadow=!0,i.add(p);let M=[U("#34446e",.95),U("#6d3b30",.95)],x=[U("#d98a2b",.9),U("#46598a",.9)],v=e(.74,.04,.74,.015),R=new K(.22,.24,.14,22);for(let q=0;q<8;q++){let Z=q/8*Math.PI*2,ft=a+Math.sin(Z)*ce.r,gt=l+Math.cos(Z)*ce.r,pt=new Bt;pt.position.set(ft,0,gt),pt.rotation.y=Z,i.add(pt),t(v,M[q%2],0,.052,.1,pt,o),t(R,x[q%2],0,.142,.05,pt),t(new De(.23,.012,6,22),U("#f1e3c2",.8),0,.142,.05,pt,o).rotation.x=Math.PI/2,s(`z${q+1}`,ft+Math.sin(Z)*.05,gt+Math.cos(Z)*.05,Z+Math.PI,.21,{x:a+Math.sin(Z)*(ce.r+.8),z:l+Math.cos(Z)*(ce.r+.8)},"zen")}t(new K(.5,.5,.05,32),U("#5a2219",.32),a,.3,l),t(new K(.51,.51,.015,32),U("#c9a14a",.4,{metalness:.5}),a,.27,l,i,o);for(let q=0;q<4;q++){let Z=q*Math.PI/2+Math.PI/4;t(e(.06,.26,.06,.01),U("#3c1610",.4),a+Math.sin(Z)*.36,.14,l+Math.cos(Z)*.36)}let S=U("#9a7432",.35,{metalness:.7});t(new K(.11,.09,.1,18),S,a,.38,l),t(new De(.11,.015,6,18),S,a,.43,l,i,o).rotation.x=Math.PI/2;for(let q of[-.03,0,.03])t(new K(.004,.004,.2,4),U("#7a3b22",.8),a+q,.53,l,i,o);for(let q of[-.03,0,.03])t(new bt(.01,6,4),Te("#ff6a2a",3),a+q,.635,l,i,o);t(new K(.06,.08,.16,14),U("#e9eef2",.25),a-.27,.41,l+.12,i,o);for(let q=0;q<6;q++){let Z=q*Math.PI/3;t(new bt(.05,8,6),U("#f39bb8",.7),a-.27+Math.sin(Z)*.05,.52,l+.12+Math.cos(Z)*.05,i,o).scale.set(.7,1.3,.7)}t(new bt(.035,8,6),U("#ffd84d",.6),a-.27,.53,l+.12,i,o),t(new K(.035,.035,.09,12),U("#fff6e4",.6),a+.25,.37,l-.15,i,o),t(new bt(.018,8,6),Te("#ffcf6a",3),a+.25,.435,l-.15,i,o).scale.set(1,1.6,1),t(new K(.11,.11,.05,16),U("#6d3b30",.9),a+.2,.355,l+.22,i,o),t(new bt(.1,18,8,0,Math.PI*2,Math.PI/2,Math.PI/2),U("#c79b3c",.3,{metalness:.8,side:xe}),a+.2,.47,l+.22,i,o),n(a-.6,l-.6,a+.6,l+.6);let T=[];for(let q=0;q<6;q++){let Z=new J(new bt(.035,8,6),new ee({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));Z.renderOrder=3,i.add(Z),T.push(Z)}r.animated.push(q=>{T.forEach((Z,ft)=>{let gt=(q*.22+ft/T.length)%1;Z.position.set(a+Math.sin(q*.9+ft*1.7)*.07*gt,.66+gt*1.3,l+Math.cos(q*.7+ft)*.05*gt),Z.scale.setScalar(1+gt*3.2),Z.material.opacity=.32*Math.sin(Math.PI*Math.min(1,gt*1.25))})}),fn(i,a,l,3,"#d9f3cf",.26);let I=new se({color:"#fff1d6",roughness:.6,emissive:"#ffcf8a",emissiveIntensity:1.1}),V=U("#2c2420",.5),y=U("#5d5048",.8);for(let q=0;q<4;q++){let Z=q*Math.PI/2+Math.PI/4,ft=a+Math.sin(Z)*1.15,gt=l+Math.cos(Z)*1.15,pt=2.55+q%2*.15;t(new K(.006,.006,dt.wallH-pt-.22,4),y,ft,(dt.wallH+pt+.22)/2,gt,i,o),t(new K(.1,.12,.04,16),V,ft,pt+.23,gt,i,o),t(new K(.1,.12,.04,16),V,ft,pt-.23,gt,i,o);let A=new J(new bt(.2,18,12),I);A.scale.set(1,1.25,1),A.position.set(ft,pt,gt),i.add(A);for(let w=-1;w<=1;w++)t(new De(.2*Math.sqrt(1-(w*.12/.25)**2),.004,4,20),V,ft,pt+w*.12,gt,i,o).rotation.x=Math.PI/2}r.animated.push(q=>{I.emissiveIntensity=1+Math.sin(q*.8)*.18});let E=12.1,L=.6;t(e(.8,.05,.55,.02),U("#4a2f1c",.45),E,.28,L);for(let[q,Z]of[[-.34,-.22],[.34,-.22],[-.34,.22],[.34,.22]])t(e(.05,.25,.05,.01),U("#3a2414",.5),E+q,.14,L+Z);t(e(.42,.02,.26,.01),f,E,.315,L,i,o),t(new bt(.075,16,12),U("#7a3a24",.4),E-.08,.39,L,i,o).scale.set(1,.85,1),t(new K(.012,.02,.09,8),U("#7a3a24",.4),E-.16,.4,L,i,o).rotation.z=.9,t(new De(.04,.01,6,12),U("#7a3a24",.4),E+0,.4,L,i,o),t(new bt(.015,8,6),U("#7a3a24",.4),E-.08,.455,L,i,o);for(let q of[.07,.14])t(new K(.027,.02,.04,12),U("#f3efe4",.3),E+q,.345,L+(q>.1?.06:-.05),i,o);for(let[q,Z]of[[-1,0],[1,Math.PI]]){let ft=L+q*.62,gt=new Bt;gt.position.set(E,0,ft),gt.rotation.y=Z,i.add(gt),t(v,M[1],0,.052,0,gt,o),t(R,x[q<0?0:1],0,.142,-.04,gt),s(`zt${q<0?1:2}`,E,ft-q*.04,Z,.21,{x:E,z:L+q*1.35},"zen")}n(E-.45,L-.32,E+.45,L+.32),fn(i,E,L,1.4,"#ffe2b0",.2);let C=[[6.5,6.2,.38],[8.9,7.4,.3],[9.7,6,.22]],G=ce.gx2-ce.gx1,z=ce.gz2-ce.gz1,it=(ce.gx1+ce.gx2)/2,Y=(ce.gz1+ce.gz2)/2,B=new J(new ie(G,z),new se({map:ey(C),roughness:1}));B.rotation.x=-Math.PI/2,B.position.set(it,.07,Y),B.receiveShadow=!0,i.add(B),t(e(G,.06,z),U("#d9d1bd",1),it,.03,Y,i,o);for(let[q,Z,ft,gt]of[[G+.24,.12,it,ce.gz1-.06],[G+.24,.12,it,ce.gz2+.06],[.12,z,ce.gx1-.06,Y],[.12,z,ce.gx2+.06,Y]])t(e(q,.13,Z,.02),c,ft,.065,gt);let j=[U("#8f8a80",.95,{flatShading:!0}),U("#76726b",.95,{flatShading:!0})],st=U("#6f9a4a",.95,{flatShading:!0});C.forEach(([q,Z,ft],gt)=>{let pt=t(new Ws(ft,0),j[gt%2],q,.07+ft*.45,Z);pt.scale.set(1.15,.8+(gt===0?.35:0),.9),pt.rotation.set(.3*gt,.9*gt,.15);let A=sn(40+gt);for(let w=0;w<4;w++){let O=A()*Math.PI*2;t(new Ke(.1+A()*.07,0),st,q+Math.sin(O)*ft*1.05,.08,Z+Math.cos(O)*ft*1.05,i,o).scale.set(1.3,.45,1.3)}}),n(ce.gx1-.15,ce.gz1-.15,ce.gx2+.15,ce.gz2+.15);let mt=11.15,Tt=7.6;t(new K(.3,.34,.32,9),h,mt,.16,Tt);let et=new J(new ai(.2,20),new se({color:"#6fb6d8",roughness:.1,emissive:"#2a7fb0",emissiveIntensity:.25}));et.rotation.x=-Math.PI/2,et.position.set(mt,.322,Tt),i.add(et);for(let[q,Z,ft]of[[.42,.1,.12],[-.3,.38,.09],[.15,.42,.1]])t(new Ws(ft,0),h,mt+q,ft*.6,Tt+Z,i,o);let ht=U("#9cba5a",.55);t(new K(.03,.03,.62,10),ht,mt+.45,.31,Tt-.25);let _t=t(new K(.022,.022,.42,10),ht,mt+.25,.55,Tt-.14,i,o);_t.rotation.set(0,0,Math.PI/2+.25),_t.rotation.y=-.5;let xt=new J(new bt(.014,6,4),new ee({color:"#d6efff"}));i.add(xt);let Ut=new J(new Dn(.03,.045,20),new ee({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));Ut.rotation.x=-Math.PI/2,Ut.position.set(mt+.07,.326,Tt-.04),i.add(Ut),r.animated.push(q=>{let Z=q*.8%1;xt.position.set(mt+.07,.5-Z*Z*.17,Tt-.04),xt.visible=Z<.95;let ft=q*.8%1;Ut.scale.setScalar(1+ft*3),Ut.material.opacity=.6*(1-ft)}),n(mt-.5,Tt-.5,mt+.6,Tt+.6);let Gt=Te("#ffd28a",1.5);for(let[q,Z]of[[4.5,4.4],[11.4,4.4]]){t(new K(.2,.24,.1,6),h,q,.05,Z),t(new K(.075,.09,.55,8),h,q,.37,Z),t(e(.42,.07,.42,.02),h,q,.68,Z),t(e(.3,.26,.3,.02),h,q,.85,Z),t(e(.31,.15,.17),Gt,q,.86,Z,i,o),t(e(.17,.15,.31),Gt,q,.86,Z,i,o);let ft=t(new Ye(.36,.22,4),h,q,1.09,Z);ft.rotation.y=Math.PI/4,t(new bt(.05,8,6),h,q,1.23,Z,i,o),fn(i,q,Z,1.1,"#ffd9a0",.22),n(q-.3,Z-.3,q+.3,Z+.3)}let Xt=U("#6fa64a",.55),te=U("#4e7d33",.6),ut=[U("#5f9e45",.85,{flatShading:!0}),U("#79b856",.85,{flatShading:!0})];[[5,-3,1],[13.5,3.3,3],[4.6,8.7,4]].forEach(([q,Z,ft])=>{let gt=sn(ft*13);t(new K(.42,.46,.12,14),U("#cfc6b4",.95),q,.06,Z);for(let pt=0;pt<6;pt++){let A=gt()*Math.PI*2,w=.08+gt()*.24,O=q+Math.sin(A)*w,at=Z+Math.cos(A)*w,lt=2.2+gt()*.9;t(new K(.03,.036,lt,8),Xt,O,lt/2,at);for(let rt=.4;rt<lt-.1;rt+=.38)t(new K(.04,.04,.025,8),te,O,rt,at,i,o);for(let rt=0;rt<3;rt++){let Lt=gt()*Math.PI*2,Mt=t(new Ke(.2+gt()*.1,0),ut[rt%2],O+Math.sin(Lt)*.18,lt-.2-rt*.32,at+Math.cos(Lt)*.18,i,o);Mt.scale.set(1.4,.35,.8),Mt.rotation.y=Lt}}n(q-.5,Z-.5,q+.5,Z+.5)});let P=new Bt;P.position.set(4.55,0,3.45),P.rotation.y=.6,i.add(P);for(let q of[-.62,.62])t(e(.07,1.45,.07,.015),c,q,.725,0,P);t(e(1.42,.08,.1,.02),c,0,1.47,0,P,o);let wt=new J(new ie(1.2,.375),new se({map:ny(),roughness:.6}));wt.position.set(0,1.13,.04),P.add(wt),t(e(1.26,.42,.05,.015),c,0,1.13,0,P,o),n(4.55-.7,3.45-.45,4.55+.7,3.45+.45)}var Kl={x:7.8,rows:[-8.25,-7.35],cols:[-.75,0,.75]},Ql={x:12.6,rows:[-8.1,-7,-5.9],cols:[-1.4,-.7,0,.7,1.4]};function sy(){return Pe(1024,1160,(i,t,e)=>{i.fillStyle="#7e1512",i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,190,90,.10)",i.lineWidth=6;for(let o=300;o<e;o+=150)for(let a=o/150%2*110;a<t;a+=220)i.beginPath(),i.arc(a,o,34,Math.PI,0),i.arc(a+50,o,18,Math.PI,0),i.stroke();i.strokeStyle="#d9a63e",i.lineWidth=14,i.strokeRect(14,14,t-28,e-28),i.lineWidth=3,i.strokeRect(36,36,t-72,e-72),i.fillStyle="#3d1d0f",i.fillRect(110,70,t-220,190),i.strokeStyle="#e8b84a",i.lineWidth=8,i.strokeRect(122,82,t-244,166),i.fillStyle="#ffd56a",i.textAlign="center",i.textBaseline="middle",i.font='900 112px "Segoe UI", "Noto Sans", Arial, sans-serif',i.fillText("T\u1ED4 NGH\u1EC0 AI".normalize("NFC"),t/2,168),i.fillStyle="#ffe3a3",i.font='700 38px "Segoe UI", "Noto Sans", Arial, sans-serif',i.fillText("Ph\xF9 h\u1ED9 \u0111\u1ED9 tr\xEC \xB7 Kh\xF4ng bug \xB7 Kh\xF4ng lag".normalize("NFC"),t/2,318);let n=700,s=i.createRadialGradient(t/2,n,20,t/2,n,300);s.addColorStop(0,"rgba(255,226,140,.95)"),s.addColorStop(.45,"rgba(255,190,70,.45)"),s.addColorStop(1,"rgba(255,170,40,0)"),i.fillStyle=s,i.beginPath(),i.arc(t/2,n,300,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255,215,110,.55)",i.lineWidth=5;for(let o=0;o<24;o++){let a=o/24*Math.PI*2;i.beginPath(),i.moveTo(t/2+Math.cos(a)*170,n+Math.sin(a)*170),i.lineTo(t/2+Math.cos(a)*280,n+Math.sin(a)*280),i.stroke()}let r=(o,a)=>{i.fillStyle="#b3241b",i.fillRect(o-70,380,140,700),i.strokeStyle="#e8b84a",i.lineWidth=6,i.strokeRect(o-62,388,124,684),i.fillStyle="#ffd56a",i.font='800 44px "Segoe UI", "Noto Sans", Arial, sans-serif',a.forEach((l,c)=>i.fillText(l.normalize("NFC"),o,450+c*(600/a.length)))};r(120,["Code","ch\u1EA1y","m\u1ED9t","ph\xE1t","\u0103n","ngay"]),r(t-120,["Deploy","th\u1EE9","S\xE1u","v\u1EABn","\xEAm","ru"])})}function ry({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=Ql.x,l=dt.minZ,c=U("#8c1d18",.35),f=U("#5c120f",.4),h=U("#d9a63e",.3,{metalness:.6}),u=U("#4a2a17",.55),d=new J(new ie(2.3,2.6),new se({map:sy(),roughness:.7,emissive:"#3a0a06",emissiveIntensity:.25}));d.position.set(a,2.2,l+.1),i.add(d),t(e(2.42,2.72,.05,.02),u,a,2.2,l+.07,i,o);let g=l+.45;t(e(1.95,.08,.62,.02),c,a,1,g),t(e(1.95,.16,.03,.01),f,a,.88,g+.3,i,o),t(e(1.75,.025,.012),h,a,.88,g+.32,i,o);for(let[L,H]of[[-.9,-.26],[.9,-.26],[-.9,.26],[.9,.26]])t(e(.08,.96,.08,.015),f,a+L,.48,g+H);t(e(2.15,.42,.42,.03),c,a,.21,g+.55),t(e(2,.025,.012),h,a,.33,g+.767,i,o),n(a-1.15,l,a+1.15,g+.85);let _=g-.12,m=U("#e3b341",.25,{metalness:.75});for(let L=0;L<10;L++){let H=L/10*Math.PI*2,C=t(new bt(.09,10,8),U(L%2?"#f5a3bf":"#ef86a8",.6),a+Math.sin(H)*.2,1.1,_+Math.cos(H)*.2,i,o);C.scale.set(.8,.7,1.3),C.rotation.y=H}t(new K(.22,.25,.06,20),U("#e7799c",.6),a,1.07,_,i,o),t(new Fe(.17,.16,6,14),m,a,1.38,_);let p=t(new Fe(.1,.26,4,10),m,a,1.2,_+.08,i,o);p.rotation.z=Math.PI/2,t(e(.36,.28,.3,.12),m,a,1.7,_),t(e(.26,.13,.02,.02),U("#1b2a3a",.3),a,1.71,_+.155,i,o);for(let L of[-1,1])t(new bt(.028,8,6),Te("#5ff0ff",3),a+L*.06,1.72,_+.167,i,o);t(new K(.008,.008,.16,6),m,a,1.92,_,i,o),t(new bt(.035,10,8),Te("#ff5a4a",2.6),a,2.02,_,i,o);for(let L of[-1,1])t(new Fe(.05,.16,4,8),m,a+L*.2,1.37,_+.06,i,o).rotation.set(-.7,0,L*.35);t(new bt(.055,10,8),m,a,1.3,_+.2,i,o);let M=U("#9a7432",.35,{metalness:.7}),x=g+.18;t(new K(.11,.09,.11,16),M,a,1.095,x);for(let L of[-.035,0,.035])t(new K(.004,.004,.24,4),U("#7a3b22",.8),a+L,1.27,x,i,o);for(let L of[-.035,0,.035])t(new bt(.011,6,4),Te("#ff6a2a",3),a+L,1.39,x,i,o);let v=[];for(let L=0;L<6;L++){let H=new J(new bt(.035,8,6),new ee({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));H.renderOrder=3,i.add(H),v.push(H)}r.animated.push(L=>{v.forEach((H,C)=>{let G=(L*.2+C/v.length)%1;H.position.set(a+Math.sin(L*.8+C*1.9)*.08*G,1.42+G*1.1,x+Math.cos(L*.6+C)*.05*G),H.scale.setScalar(1+G*3),H.material.opacity=.3*Math.sin(Math.PI*Math.min(1,G*1.25))})});for(let L of[-1,1]){t(new K(.05,.07,.05,12),h,a+L*.82,1.065,g+.05,i,o),t(new K(.035,.035,.26,12),U("#c8231b",.5),a+L*.82,1.22,g+.05,i,o),t(new bt(.03,8,6),Te("#ffcf6a",3),a+L*.82,1.38,g+.05,i,o).scale.set(1,1.5,1),t(new K(.06,.08,.22,14),U("#f3efe6",.25),a+L*.58,1.15,g-.15,i,o);for(let H=0;H<5;H++){let C=H*1.256;t(new bt(.07,10,8),U("#ffcc2e",.75),a+L*.58+Math.sin(C)*.07,1.36+H%2*.04,g-.15+Math.cos(C)*.07,i,o)}}let R=a-.42,S=g+.12;t(new K(.2,.16,.03,20),h,R,1.055,S,i,o),t(new bt(.1,14,10),U("#b9d65a",.7),R,1.15,S-.04,i,o);for(let[L,H,C]of[[-.1,.07,"#ff8a1e"],[.1,.07,"#d8261c"],[0,.11,"#ff8a1e"],[-.12,-.05,"#d8261c"]])t(new bt(.05,10,8),U(C,.55),R+L,1.11,S+H,i,o);for(let L=0;L<4;L++)t(new Fe(.022,.15,4,8),U("#f5d23c",.6),R+.05+L*.03,1.22,S-.02,i,o).rotation.set(.2,0,.9-L*.15);let T=a+.42;for(let L=0;L<6;L++)t(new K(.06,.06,.018,16),h,T-.06+(L>3?.12:0),1.05+L%4*.02,g+.12,i,o);t(new K(.045,.038,.14,14),U("#e9f3fb",.15),T+.1,1.11,g-.06,i,o),t(new K(.04,.034,.09,14),U("#8a5a33",.5),T+.1,1.09,g-.06,i,o),t(new K(.005,.005,.2,6),U("#ff5a8a",.5),T+.12,1.2,g-.06,i,o).rotation.z=.2,t(e(.5,.04,.17,.01),U("#2c2f38",.5),a,.44,g+.58,i,o),t(e(.46,.012,.13),U("#e6e8ee",.6),a,.466,g+.58,i,o);let I=new se({color:"#e2261b",roughness:.5,emissive:"#ff3a1a",emissiveIntensity:.6});for(let L of[-1,1]){let H=a+L*1.45,C=2.85;t(new K(.006,.006,dt.wallH-C-.25,4),U("#5d5048",.8),H,(dt.wallH+C+.25)/2,l+.55,i,o);let G=new J(new bt(.22,18,12),I);G.scale.set(1,.85,1),G.position.set(H,C,l+.55),i.add(G),t(new K(.09,.09,.05,14),h,H,C+.2,l+.55,i,o),t(new K(.09,.09,.05,14),h,H,C-.2,l+.55,i,o),t(new K(.012,.012,.22,6),U("#f5c518",.6),H,C-.34,l+.55,i,o);let z=a+L*1.55,it=l+.6;t(new K(.24,.18,.4,16),U("#2f6fb5",.4),z,.2,it),t(new K(.245,.245,.04,16),U("#f3efe6",.4),z,.39,it,i,o);let Y=sn(77+L);for(let B=0;B<6;B++)t(new Ke(.2,1),U(B%2?"#3f8a3f":"#4f9d4a",.85,{flatShading:!0}),z+(Y()-.5)*.3,.62+B*.1,it+(Y()-.5)*.3,i,o).scale.setScalar(1-B*.1);for(let B=0;B<14;B++){let j=Y()*Math.PI*2,st=.55+Y()*.55,mt=.2+(1-(st-.55)/.55)*.08;t(new bt(.03,8,6),U("#ff9a1a",.5),z+Math.sin(j)*mt,st,it+Math.cos(j)*mt,i,o)}n(z-.3,it-.3,z+.3,it+.3)}r.animated.push(L=>{I.emissiveIntensity=.55+Math.sin(L*1.3)*.12}),fn(i,a,l+1.6,2.4,"#ffcf8a",.28);let V=[U("#d9a63e",.85),U("#b3241b",.9)],y=new K(.2,.22,.09,20),E=0;Ql.rows.forEach((L,H)=>Ql.cols.forEach(C=>{t(y,V[H%2],a+C,.045,L+.12,i,o),s(`k${++E}`,a+C,L,Math.PI,.09,{x:a+C,z:L+.6},"kneel")}))}function oy(){return Pe(900,1e3,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#b3140f"),n.addColorStop(1,"#7a0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,215,110,.12)",i.lineWidth=5;for(let o=120;o<e;o+=120)for(let a=o/120%2*90;a<t;a+=180)i.beginPath(),i.arc(a,o,26,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(a,o,9,0,Math.PI*2),i.stroke();i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(12,12,t-24,e-24),i.lineWidth=3,i.strokeRect(32,32,t-64,e-64),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`;i.fillStyle="#3d1d0f",i.fillRect(90,60,t-180,170),i.strokeStyle="#f2c14e",i.lineWidth=7,i.strokeRect(102,72,t-204,146),i.fillStyle="#ffd56a",i.font=s(900,92),i.fillText("TH\u1EA6N T\xC0I".normalize("NFC"),t/2,148),i.fillStyle="#ffe9b0",i.font=s(800,40),i.fillText("C\u1EA7u b\xE1n h\xE0ng ch\u1EA1y \xB7 \u0110\u01A1n v\u1EC1 \u1EA7m \u1EA7m".normalize("NFC"),t/2,290),i.save(),i.translate(t/2,520),i.rotate(Math.PI/4),i.fillStyle="#e8262b",i.fillRect(-120,-120,240,240),i.strokeStyle="#ffd56a",i.lineWidth=8,i.strokeRect(-108,-108,216,216),i.restore(),i.fillStyle="#ffd56a",i.font=s(900,74),i.fillText("L\u1ED8C".normalize("NFC"),t/2,525),i.strokeStyle="#7dff9a",i.lineWidth=12,i.lineJoin="round",i.beginPath(),[[250,900],[340,860],[410,880],[500,800],[580,820],[660,720]].forEach(([o,a],l)=>l?i.lineTo(o,a):i.moveTo(o,a)),i.stroke(),i.fillStyle="#7dff9a",i.beginPath(),i.moveTo(700,690),i.lineTo(640,700),i.lineTo(675,745),i.closePath(),i.fill();let r=(o,a)=>{i.fillStyle="#e8262b",i.fillRect(o-58,330,116,620),i.strokeStyle="#ffd56a",i.lineWidth=5,i.strokeRect(o-51,337,102,606),i.fillStyle="#ffd56a",i.font=s(800,38),a.forEach((l,c)=>i.fillText(l.normalize("NFC"),o,390+c*(540/a.length)))};r(100,["Kh\xE1ch","v\xE0o","nh\u01B0","n\u01B0\u1EDBc"]),r(t-100,["Ch\u1ED1t","\u0111\u01A1n","\u1EA7m","\u1EA7m"])})}function ay(){return Pe(1024,200,(i,t,e)=>{i.textAlign="center",i.textBaseline="middle",i.font='900 96px "Segoe UI", "Noto Sans", Arial, sans-serif';for(let[n,s]of[[40,"#ffb100"],[18,"#ffd84a"],[0,"#fff6c8"]])i.shadowColor="#ff9a00",i.shadowBlur=n,i.fillStyle=s,i.fillText("B\xC1N \u0110\u1EAET NH\u01AF T\xD4M T\u01AF\u01A0I".normalize("NFC"),t/2,e/2)})}function ly({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=Kl.x,l=dt.minZ,c=U("#b5161a",.35),f=U("#7a0d0f",.4),h=U("#e0ae3c",.28,{metalness:.65}),u=U("#4a2a17",.55),d=new J(new ie(1.9,2.1),new se({map:oy(),roughness:.7,emissive:"#3a0805",emissiveIntensity:.3}));d.position.set(a,1.95,l+.1),i.add(d),t(e(2.02,2.22,.05,.02),u,a,1.95,l+.07,i,o);let g=new J(new ie(3,.58),new ee({map:ay(),transparent:!0,toneMapped:!1,depthWrite:!1}));g.position.set(a,3.25,l+.08),i.add(g);let _=l+.42;t(e(1.3,.62,.62,.03),c,a,.31,_),t(e(1.36,.05,.68,.02),h,a,.645,_),t(e(1.2,.04,.012),h,a,.4,_+.315,i,o),t(e(1.2,.04,.012),h,a,.12,_+.315,i,o);for(let B of[-1,1])t(e(.07,.75,.07,.02),f,a+B*.6,1.04,_-.18);t(e(1.36,.06,.5,.02),f,a,1.43,_-.12);for(let B of[-1,1]){let j=t(e(.78,.05,.62,.02),c,a+B*.34,1.55,_-.12);j.rotation.z=-B*.42}t(new bt(.06,12,8),h,a,1.72,_-.12,i,o);for(let B of[-1,1])t(new Ye(.035,.14,8),h,a+B*.72,1.42,_+.05,i,o).rotation.z=B*.9;n(a-.75,l,a+.75,_+.42);let m=U("#f3c79a",.6),p=U("#e9b425",.35,{metalness:.3}),M=U("#d92a1c",.5),x=a-.25,v=_-.12,R=.67;t(new K(.13,.17,.32,16),p,x,R+.16,v),t(new bt(.1,14,10),m,x,R+.42,v),t(new K(.08,.1,.09,14),U("#1d1d22",.5),x,R+.53,v,i,o);for(let B of[-1,1])t(e(.08,.025,.03),U("#1d1d22",.5),x+B*.11,R+.53,v,i,o);t(new Fe(.025,.08,4,8),U("#1d1d22",.6),x,R+.34,v+.09,i,o).rotation.x=.3,t(e(.13,.05,.06,.015),h,x,R+.2,v+.15,i,o);let S=a+.25;t(new bt(.17,16,12),U("#f08a2a",.5),S,R+.17,v).scale.set(1,.95,.9),t(new bt(.1,12,8),m,S,R+.15,v+.1,i,o).scale.set(1,1,.6),t(new bt(.11,14,10),m,S,R+.42,v),t(new De(.045,.012,6,12,Math.PI),U("#8a2a1a",.6),S,R+.4,v+.1,i,o).rotation.z=Math.PI,t(new ai(.11,14,0,Math.PI),U("#f6e7c4",.6,{side:xe}),S+.17,R+.28,v+.05,i,o).rotation.set(0,-.4,.5);let I=a+.5,V=_+.18,y=U("#fbf8f2",.45);t(new bt(.085,14,10),y,I,R+.085,V).scale.set(1,1.1,.9),t(new bt(.075,14,10),y,I,R+.22,V);for(let B of[-1,1])t(new Ye(.025,.05,6),y,I+B*.045,R+.29,V,i,o);t(new De(.06,.01,6,16),M,I,R+.165,V,i,o).rotation.x=Math.PI/2,t(new K(.03,.03,.01,12),h,I,R+.13,V+.075,i,o).rotation.x=Math.PI/2;let E=new Bt;E.position.set(I+.07,R+.2,V),i.add(E);let L=new J(new Fe(.022,.07,4,8),y);L.position.y=.05,E.add(L),r.animated.push(B=>{E.rotation.z=-.25+Math.sin(B*5)*.45});let H=a-.45,C=_+.18;t(new K(.13,.1,.025,18),h,H,R+.0125,C,i,o);for(let[B,j,st,mt]of[[0,-.02,"#7cc24a",.06],[-.06,.04,"#ff8a1e",.04],[.06,.04,"#d8261c",.04],[0,.07,"#ffcf2e",.035]])t(new bt(mt,10,8),U(st,.55),H+B,R+.025+mt,C+j,i,o);for(let B=0;B<3;B++)t(e(.09,.035,.045,.012),h,a-.05+B*.1,R+.018+(B===1?.035:0),_+.2,i,o);for(let B of[-1,1])t(new K(.03,.035,.12,10),M,a+B*.56,R+.06,_-.2,i,o),t(new bt(.024,8,6),Te("#ffcf6a",3),a+B*.56,R+.14,_-.2,i,o).scale.set(1,1.5,1);t(new K(.06,.05,.06,14),U("#9a7432",.35,{metalness:.7}),a,R+.03,_+.07,i,o);for(let B of[-.02,0,.02])t(new bt(.008,6,4),Te("#ff6a2a",3),a+B,R+.2,_+.07,i,o);for(let B of[-.02,0,.02])t(new K(.003,.003,.14,4),U("#7a3b22",.8),a+B,R+.13,_+.07,i,o);let G=[];for(let B=0;B<5;B++){let j=new J(new bt(.03,8,6),new ee({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));j.renderOrder=3,i.add(j),G.push(j)}r.animated.push(B=>{G.forEach((j,st)=>{let mt=(B*.22+st/G.length)%1;j.position.set(a+Math.sin(B*.9+st*1.7)*.07*mt,R+.22+mt*.9,_+.07+Math.cos(B*.6+st)*.04*mt),j.scale.setScalar(1+mt*3),j.material.opacity=.28*Math.sin(Math.PI*Math.min(1,mt*1.25))})});for(let B of[-1,1]){let j=a+B*1.1,st=l+.45;t(new K(.2,.15,.36,16),U("#d9a63e",.35,{metalness:.4}),j,.18,st),t(new K(.205,.205,.04,16),U("#7a0d0f",.5),j,.355,st,i,o);for(let Tt=0;Tt<7;Tt++){let et=Tt*.9;t(new Fe(.035,.3,4,8),U(Tt%2?"#2f7d3a":"#3c9447",.6),j+Math.sin(et)*.07,.62+Tt%3*.06,st+Math.cos(et)*.07,i,o).rotation.set(Math.cos(et)*.45,0,-Math.sin(et)*.45)}n(j-.25,st-.25,j+.25,st+.25);let mt=2.75;t(new K(.006,.006,dt.wallH-mt-.2,4),U("#5d5048",.8),a+B*1.15,(dt.wallH+mt+.2)/2,l+.4,i,o),t(new bt(.17,16,12),U("#e2261b",.5,{emissive:"#ff3a1a",emissiveIntensity:.55}),a+B*1.15,mt,l+.4,i,o).scale.set(1,.85,1)}fn(i,a,l+1.7,2,"#ffd27a",.3);let z=[U("#b3241b",.9),U("#d9a63e",.85)],it=new K(.2,.22,.09,20),Y=0;Kl.rows.forEach((B,j)=>Kl.cols.forEach(st=>{t(it,z[j%2],a+st,.045,B+.12,i,o),s(`tt${++Y}`,a+st,B,Math.PI,.09,{x:a+st,z:B+.6},"kneel","thantai")}))}function cy(){return Pe(512,512,(i,t,e)=>{i.fillStyle="#2c3a6e",i.fillRect(0,0,t,e);let n=sn(77);i.strokeStyle="rgba(150,175,245,.22)",i.lineWidth=3;for(let r=-64;r<e+64;r+=64)for(let o=-64;o<t+64;o+=64)i.beginPath(),i.moveTo(o,r+32),i.lineTo(o+32,r),i.lineTo(o+64,r+32),i.lineTo(o+32,r+64),i.closePath(),i.stroke();let s=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4"];for(let r=0;r<70;r++)i.fillStyle=s[r%4],i.globalAlpha=.35,i.beginPath(),i.arc(n()*t,n()*e,2+n()*2.5,0,7),i.fill();i.globalAlpha=1})}function nf(i){return Pe(256,200,(t,e,n)=>{let s=sn(i),r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,["#140a3a","#05263a","#2a0a26"][i%3]),r.addColorStop(1,"#000"),t.fillStyle=r,t.fillRect(0,0,e,n);for(let a=0;a<40;a++)t.fillStyle="rgba(255,255,255,.6)",t.fillRect(s()*e,s()*n*.7,2,2);let o=["#ff4fa3","#45d2b4","#ffd34d","#4aa8ff"];for(let a=0;a<9;a++){t.fillStyle=o[(a+i)%4];let l=30+a%3*70+s()*10,c=30+Math.floor(a/3)*34;t.fillRect(l,c,22,14),t.fillRect(l-6,c+6,34,6)}t.fillStyle="#ffffff",t.fillRect(e/2-14,n-40,28,12),t.fillRect(e/2-4,n-50,8,10),t.fillStyle="#ffd34d",t.font="bold 18px monospace",t.fillText("SCORE 0"+(12e3+i*3170),12,n-10)})}function hy(i,t,e){return Pe(1024,256,(n,s,r)=>{n.clearRect(0,0,s,r),n.textAlign="center",n.textBaseline="middle",n.font='900 120px "Nunito", "Segoe UI", sans-serif';for(let[o,a]of[[40,t],[16,t],[0,"#ffffff"]])n.shadowColor=t,n.shadowBlur=o,n.fillStyle=a,n.fillText(i,s/2,e?r/2-22:r/2);e&&(n.font='800 46px "Nunito", "Segoe UI", sans-serif',n.shadowBlur=12,n.fillStyle="#ffffff",n.fillText(e,s/2,r/2+72))})}function fy(){return Pe(256,256,(i,t)=>{let e=t/2;i.fillStyle="#1a1a1a",i.beginPath(),i.arc(e,e,e,0,7),i.fill();for(let n=0;n<20;n++){let s=n/20*Math.PI*2-Math.PI/20,r=s+Math.PI/10;for(let[o,a,l,c]of[[30,100,"#f3e6c8","#151515"],[100,112,"#1d8a4a","#d8262e"],[12,30,"#f3e6c8","#151515"],[70,80,"#1d8a4a","#d8262e"]])i.fillStyle=n%2?l:c,i.beginPath(),i.arc(e,e,a,s,r),i.arc(e,e,o,r,s,!0),i.closePath(),i.fill()}i.fillStyle="#1d8a4a",i.beginPath(),i.arc(e,e,12,0,7),i.fill(),i.fillStyle="#d8262e",i.beginPath(),i.arc(e,e,6,0,7),i.fill()})}var uy=["#fbfaf5","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b","#141414","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b"];function dy({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=14.6,l=dt.maxX,c=dt.minZ,f=9.6,h=cy();h.wrapS=h.wrapT=wn,h.repeat.set((l-a)/3,(f-c)/3);let u=new J(new ie(l-a,f-c),new se({map:h,roughness:.95}));u.rotation.x=-Math.PI/2,u.position.set((a+l)/2,.006,(c+f)/2),u.receiveShadow=!0,i.add(u),t(e(.06,.02,f-c),Te("#7c5cff",1.4),a+.03,.012,(c+f)/2,i,o),t(e(l-a,.02,.06),Te("#7c5cff",1.4),(a+l)/2,.012,f-.03,i,o),t(e(l-a-.3,dt.wallH-.02,.07),U("#231a4a",.9),(a+l)/2,dt.wallH/2,dt.minZ+.02,i,o);let d=new J(new ie(4.4,1.1),new ee({map:hy("GAME ZONE","#b26bff"),transparent:!0,toneMapped:!1,depthWrite:!1}));d.position.set(20.8,2.95,dt.minZ+.07),i.add(d),[15.5,16.65,17.8].forEach((C,G)=>{let z=new Bt;z.position.set(C,0,dt.minZ+.5),i.add(z);let it=U(["#ff4fa3","#2f8cf0","#45d2b4"][G],.5);t(e(.82,1.2,.72,.04),U("#20203a",.5),0,.6,0,z),t(e(.86,.06,.74,.02),it,0,1.22,0,z,o),t(e(.82,.62,.42,.04),U("#20203a",.5),0,1.55,-.14,z),t(e(.86,.2,.5,.03),it,0,1.96,-.1,z,o),t(e(.7,.12,.02),Te(["#ff9ccf","#9fd0ff","#b6f5d8"][G],1.6),0,1.96,.16,z,o),t(e(.76,.06,.3,.02),U("#2b2b40",.5),0,1.04,.3,z,o),t(new bt(.035,10,8),U("#ff5a5f",.3),-.18,1.1,.32,z,o),t(new K(.03,.03,.04,10),U("#ffd34d",.3),.1,1.08,.3,z,o),t(new K(.03,.03,.04,10),U("#4aa8ff",.3),.2,1.08,.3,z,o);let Y=new J(new ie(.66,.5),new ee({map:nf(G+3),toneMapped:!1}));Y.position.set(0,1.56,.075),Y.rotation.x=-.18,z.add(Y),fn(i,C,dt.minZ+1.3,.8,["#ff6fb5","#4aa8ff","#45d2b4"][G],.28)}),n(15,dt.minZ,18.3,dt.minZ+1),t(e(1.3,1.3,.06,.02),U("#8a5a3b",.5),20.8,1.55,dt.minZ+.08,i,o);for(let C=0;C<6;C++)t(new K(.012,.018,1.2,8),U(C%2?"#c99a5b":"#9b6b3e",.45),20.3+C*.2,1.55,dt.minZ+.14,i,o);let g=new J(new ai(.34,40),new se({map:fy(),roughness:.8}));g.position.set(24.6,1.75,dt.minZ+.1),i.add(g),t(new K(.42,.42,.05,40),U("#2b1a0e",.6),24.6,1.75,dt.minZ+.07,i,o).rotation.x=Math.PI/2,t(e(1,.012,.05),Te("#ffd34d",1.2),24.6,.012,dt.minZ+2.4,i,o);let _=U("#169a63",.95),m=U("#6b3f22",.45),p=U("#0f6b45",.85),M=U("#0b0b0b",.9),x=U("#c9b06b",.35,{metalness:.5}),v=new bt(.032,14,10);r.poolTables=qg.map((C,G)=>{let{w:z,l:it}=vs;t(e(z+.36,.16,it+.36,.06),m,C.x,.74,C.z),t(e(z+.08,.05,it+.08,.02),p,C.x,.83,C.z,i,o),t(e(z,.02,it),_,C.x,.85,C.z,i,o),t(e(z+.1,.42,it-.2,.05),m,C.x,.45,C.z);for(let[st,mt]of[[-1,-1],[1,-1],[-1,1],[1,1]])t(e(.16,.66,.16,.04),m,C.x+st*(z/2+.06),.33,C.z+mt*(it/2+.06));for(let[st,mt]of[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]])t(new K(.06,.06,.03,16),M,C.x+st*(z/2+.01),.855,C.z+mt*(it/2+.01),i,o),t(new K(.075,.075,.02,16),x,C.x+st*(z/2+.03),.825,C.z+mt*(it/2+.03),i,o);t(e(.42,.12,1.9,.04),U("#1d2b4f",.5),C.x,2.45,C.z,i,o),t(e(.34,.02,1.8),Te("#fff1d6",1.5),C.x,2.38,C.z,i,o);for(let st of[-.6,.6])t(new K(.008,.008,.9,6),U("#7c818d"),C.x,2.95,C.z+st,i,o);fn(i,C.x,C.z,1.7,"#fff1d6",.32),n(C.x-z/2-.2,C.z-it/2-.2,C.x+z/2+.2,C.z+it/2+.2);let Y=new os(v,new se({roughness:.2}),16);Y.castShadow=!1,Y.receiveShadow=!1,uy.forEach((st,mt)=>Y.setColorAt(mt,new Kt(st))),i.add(Y);let B=new J(new Rt(z+.4,1,it+.4),new ee({visible:!1}));B.position.set(C.x,.5,C.z),B.userData.poolTable=G,i.add(B);let j=new J(new ie(.34,.1),new ee({map:Pe(256,76,(st,mt,Tt)=>{st.fillStyle="#f3e3c3",st.fillRect(0,0,mt,Tt),st.fillStyle="#3a2412",st.font="900 46px Nunito, sans-serif",st.textAlign="center",st.textBaseline="middle",st.fillText(`B\xC0N ${G+1}`,mt/2,Tt/2+2)})}));return j.position.set(C.x,.74,C.z+it/2+.185),i.add(j),{...C,index:G,balls:Y,hit:B,spots:[{x:C.x,z:C.z-it/2-.55,face:0},{x:C.x,z:C.z+it/2+.55,face:Math.PI}]}});let R=17.2,S=3.4;t(e(1.3,.22,.8,.05),U("#2f8cf0",.5),R,.82,S),t(e(1.12,.02,.64),U("#169a63",.9),R,.93,S,i,o),t(e(1,.7,.6,.05),U("#1d2b4f",.5),R,.36,S);for(let C=0;C<6;C++){let G=R-.48+C*.19;t(new K(.012,.012,1.15,6),U("#c2cad6",.25,{metalness:.7}),G,.98,S,i,o).rotation.x=Math.PI/2;for(let z of[-1,1])t(new K(.035,.035,.07,10),U(C%2?"#ff5a5f":"#ffd34d",.4),G,.98,S+z*.66,i,o).rotation.x=Math.PI/2;for(let z=0;z<2;z++)t(e(.03,.08,.03),U(C%2?"#ff5a5f":"#ffd34d",.4),G,.95,S-.15+z*.3,i,o)}n(R-.7,S-.75,R+.7,S+.75),t(e(2.2,.45,.5,.05),U("#2b2b40",.5),22.4,.225,1),t(e(2.4,1.36,.08,.03),U("#16161c",.35),22.4,1.25,1.05);let T=new J(new ie(2.26,1.22),new ee({map:nf(9),toneMapped:!1}));T.position.set(22.4,1.25,1.095),i.add(T),n(21.2,.6,23.6,1.4);let I=U("#7c5cff",.85),V=U("#ffd34d",.8),y=new Bt;y.position.set(22.4,0,4),y.rotation.y=Math.PI,i.add(y),t(e(2.5,.32,.9,.08),I,0,.27,0,y),t(e(2.3,.14,.78,.07),I,0,.47,.04,y),t(e(2.5,.7,.24,.1),I,0,.62,-.34,y);for(let C of[-1,1])t(e(.22,.52,.9,.09),I,C*1.24,.42,0,y);for(let C of[-.7,.7])t(e(.34,.32,.12,.06),V,C,.68,-.2,y).rotation.x=-.2;for(let C=-1;C<=1;C++)s(`gs${C+2}`,22.4-C*.75,4.05,Math.PI,.47,{x:22.4-C*.75,z:3.2});n(21.1,3.5,23.7,4.5),t(new K(.42,.42,.04,28),U("#fbf7f0",.4),22.4,.42,2.55),t(new K(.06,.09,.4,10),U("#3a3a44",.4),22.4,.2,2.55),t(e(.18,.04,.1,.02),U("#1a1a1a",.4),22.3,.46,2.5,i,o),t(e(.18,.04,.1,.02),U("#f5f5f5",.4),22.55,.46,2.62,i,o),n(21.95,2.1,22.85,3);let E=[U("#ff9a6b",.95),U("#45d2b4",.95)];[[20.3,2.6,Math.PI*.82],[24.5,2.6,-Math.PI*.82]].forEach(([C,G,z],it)=>{t(new bt(.44,18,12),E[it],C,.26,G).scale.set(1,.6,1);let B=t(new bt(.3,14,10),E[it],C-Math.sin(z)*.26,.48,G-Math.cos(z)*.26);B.scale.set(1.1,.9,.7),B.rotation.y=z,s(`gb${it+1}`,C,G,z,.36,{x:C+Math.sin(z)*.8,z:G+Math.cos(z)*.8})});let L=17.6,H=7.2;t(e(2.3,.05,1.28,.02),U("#1f5fd1",.6),L,.76,H),t(e(2.3,.006,.02),U("#ffffff",.6),L,.788,H,i,o),t(e(.02,.006,1.26),U("#ffffff",.6),L-1.14,.788,H,i,o),t(e(.02,.006,1.26),U("#ffffff",.6),L+1.14,.788,H,i,o),t(e(.02,.16,1.4),U("#f6f3ee",.8),L,.86,H,i,o);for(let[C,G]of[[-.95,-.5],[.95,-.5],[-.95,.5],[.95,.5]])t(e(.06,.74,.06),U("#3a3a44",.4),L+C,.37,H+G,i,o);t(e(.16,.02,.15,.01),U("#d8262e",.6),L-.6,.8,H+.3,i,o),t(new bt(.02,8,6),U("#ffffff",.4),L+.4,.82,H-.2,i,o),n(L-1.2,H-.7,L+1.2,H+.7),[[23.3,"#ff7aa8"],[24.5,"#4aa8ff"]].forEach(([C,G])=>{t(e(1,.85,.9,.05),U(G,.5),C,.425,8.5),t(e(.96,.95,.86),new se({color:"#dff1ff",roughness:.05,transparent:!0,opacity:.35}),C,1.33,8.5,i,o),t(e(1.02,.22,.92,.05),U(G,.5),C,1.91,8.5,i,o),t(e(.8,.1,.02),Te("#fff1d6",1.4),C,1.91,8.97,i,o);let z=sn(Math.round(C*10));for(let it=0;it<9;it++)t(new bt(.1,10,8),U(["#ffd34d","#ff9ccf","#9fd0ff","#b6f5d8","#c3a6ff"][it%5],.8),C-.3+it%3*.3+z()*.05,.95+Math.floor(it/3)*.05,8.3+z()*.3,i,o);t(e(.04,.3,.04),U("#c2cad6",.3,{metalness:.6}),C+.1,1.6,8.5,i,o),n(C-.55,8,C+.55,9)}),t(e(.95,1.95,.75,.05),U("#e1262d",.45),21.8,.975,8.6),t(e(.6,1.3,.02),Te("#d9f1ff",.9),21.68,1.15,8.98,i,o);for(let C=0;C<4;C++)for(let G=0;G<4;G++)t(new K(.035,.035,.13,10),U(["#ffd34d","#45d2b4","#ff9ccf","#4aa8ff"][G],.4),21.48+G*.13,.65+C*.3,8.95,i,o);t(e(.18,.5,.02),U("#2b2b33",.4),22.13,1.2,8.98,i,o),n(21.3,8.2,22.3,9);for(let C=.8;C<=6.2;C+=1.8){t(e(.5,.45,1.5,.06),U("#e3d5bf",.8),14.3,.225,C);for(let G=0;G<3;G++)t(new Ke(.22,1),U(G%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),14.3+(G-1)*.04,.6,C-.45+G*.45);n(14,C-.8,14.6,C+.8)}}function py(){let i=sn(55),t=Pe(1024,512,(e,n,s)=>{for(let o=0;o<s;o+=48){let a=-Math.floor(i()*300);for(;a<n;){let l=300+Math.floor(i()*300),c=i();e.fillStyle=`rgb(${Math.round(196+c*16)},${Math.round(150+c*14)},${Math.round(104+c*12)})`,e.fillRect(a,o,l,48),e.strokeStyle="rgba(120,80,45,.12)",e.lineWidth=1.2;for(let f=0;f<3;f++){let h=o+8+i()*32;e.beginPath(),e.moveTo(a,h);for(let u=a;u<a+l;u+=40)e.lineTo(u,h+Math.sin(u*.02+f)*2);e.stroke()}e.fillStyle="rgba(90,60,30,.35)",e.fillRect(a,o,3,48),a+=l}e.fillStyle="rgba(90,60,30,.4)",e.fillRect(0,o,n,3)}});return t.wrapS=t.wrapT=wn,t}function my(){return Pe(1024,192,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#0a5cc2"),n.addColorStop(1,"#0a78f0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.font='900 86px "Nunito", "Segoe UI", sans-serif',i.fillText("V\u0102N PH\xD2NG AI",t/2,e/2-12),i.font='800 36px "Nunito", "Segoe UI", sans-serif',i.fillStyle="#ffd34d",i.fillText("SIMI \xB7 BAR \xB7 GAME \xB7 CINEMA",t/2,e/2+56)})}function gy({scene:i,add:t,box:e,block:n,seat:s,out:r,glassM:o,tableTop:a}){let l={cast:!1},c=dt.inZ,f=dt.maxZ,h=dt.minX,u=dt.maxX,d=py();d.repeat.set((u-h)/10,(f-c)/5);let g=new J(new ie(u-h,f-c),new se({map:d,roughness:.85}));g.rotation.x=-Math.PI/2,g.position.set((h+u)/2,.001,(c+f)/2),g.receiveShadow=!0,i.add(g),r.deck=g,t(e(u-h,.03,.24,.01),U("#d8d2c6",.8),(h+u)/2,.015,c,i,l);let _=U("#4f9d5d",.9),m=U("#5fb36f",.9,{flatShading:!0}),p=(B,j,st,mt)=>{let Tt=Math.abs(st-B)||.5,et=Math.abs(mt-j)||.5;t(e(Tt,.7,et,.18),_,(B+st)/2,.35,(j+mt)/2);let ht=Math.max(2,Math.round(Math.max(Tt,et)/.7));for(let _t=0;_t<ht;_t++){let xt=(_t+.5)/ht;t(new Ke(.3,1),m,B+(st-B)*xt,.72,j+(mt-j)*xt,i).scale.set(1,.6,1)}n(Math.min(B,st)-.25,Math.min(j,mt)-.25,Math.max(B,st)+.25,Math.max(j,mt)+.25)};p(h+.3,c+.6,h+.3,f-.35),p(u-.3,c+.6,u-.3,f-.35),p(h+.6,f-.35,10,f-.35),p(15,f-.35,u-.6,f-.35);let M=[U("#ff7aa8",.7),U("#ffd34d",.7),U("#ffffff",.7),U("#c3a6ff",.7)],x=sn(91);for(let[B,j]of[[h+1.2,9.4],[15.6,u-1.2]])for(let st=B;st<j;st+=.55)t(new bt(.07,8,6),M[Math.floor(x()*4)],st+x()*.2,.12,f-.95+x()*.15,i,l);let v=12.5,R=f-.35;for(let B of[-2.2,2.2])t(e(.32,3,.32,.05),U("#ffffff",.5),v+B,1.5,R),t(e(.5,.18,.5,.04),U("#d8d2c6",.7),v+B,.09,R),n(v+B-.25,R-.25,v+B+.25,R+.25);t(e(4.9,.7,.24,.06),U("#0a5cc2",.5),v,3.1,R);let S=new J(new ie(4.6,.62),new ee({map:my(),toneMapped:!1}));S.position.set(v,3.1,R+.125),i.add(S);let T=new J(new ie(2.6,1.3),new se({map:Pe(512,256,(B,j,st)=>{B.fillStyle="#0a5cc2",B.fillRect(0,0,j,st),B.strokeStyle="#ffd34d",B.lineWidth=10,B.strokeRect(14,14,j-28,st-28),B.fillStyle="#fff",B.font="900 64px Nunito, sans-serif",B.textAlign="center",B.textBaseline="middle",B.fillText("XIN CH\xC0O",j/2,st/2+4)}),roughness:.95}));T.rotation.x=-Math.PI/2,T.position.set(v,.006,R-1.1),i.add(T);let I=[U("#0a78f0",.7,{side:xe}),U("#ff7a6b",.7,{side:xe}),U("#2fc1a5",.7,{side:xe}),U("#ffd34d",.7,{side:xe})],V=U("#e9eef5",.4,{metalness:.3}),y=U("#f6f3ee",.5);[[-10.4,13.4],[-6,15.4],[-1.6,13.2],[3,15.3]].forEach(([B,j],st)=>{t(new K(.52,.52,.04,28),a,B,.74,j),t(new K(.04,.05,.72,10),V,B,.36,j),t(new K(.26,.3,.03,20),V,B,.015,j),t(new K(.025,.025,2.4,8),y,B,1.2,j,i,l),t(new Ye(1.15,.45,8,1,!0),I[st],B,2.45,j),t(new bt(.05,8,6),y,B,2.7,j,i,l),t(new K(.05,.04,.12,12),o,B+.15,.82,j,i,l),t(new K(.05,.04,.12,12),o,B-.12,.82,j+.12,i,l),n(B-.58,j-.58,B+.58,j+.58);for(let mt=0;mt<3;mt++){let Tt=mt/3*Math.PI*2+.5,et=B+Math.sin(Tt)*.95,ht=j+Math.cos(Tt)*.95,_t=new Bt;_t.position.set(et,0,ht),_t.rotation.y=Tt+Math.PI,i.add(_t),t(new K(.22,.22,.05,18),V,0,.46,0,_t),t(e(.4,.34,.04,.02),V,0,.7,-.2,_t);for(let[xt,Ut]of[[-.15,-.15],[.15,-.15],[-.15,.15],[.15,.15]])t(new K(.014,.014,.46,6),V,xt,.23,Ut,_t,l);s(`o${st+1}${"abc"[mt]}`,et,ht,Tt+Math.PI,.48,{x:B+Math.sin(Tt)*1.55,z:j+Math.cos(Tt)*1.55})}});let E=20.2,L=13.8;t(new K(1.5,1.6,.45,40),U("#e7e1d6",.7),E,.225,L),t(new K(1.32,1.32,.04,40),U("#cfc7b8",.7),E,.44,L,i,l);let H=new J(new K(1.3,1.3,.02,40),new se({color:"#7cc4ff",roughness:.1,emissive:"#2f8cf0",emissiveIntensity:.35,transparent:!0,opacity:.85}));H.position.set(E,.43,L),i.add(H),t(new K(.16,.22,.9,16),U("#e7e1d6",.7),E,.9,L),t(new K(.55,.2,.18,24),U("#e7e1d6",.7),E,1.4,L);let C=new J(new K(.03,.08,.6,10),new ee({color:"#d6efff",transparent:!0,opacity:.7}));C.position.set(E,1.75,L),i.add(C);let G=[0,1].map(()=>{let B=new J(new Dn(.3,.36,40),new ee({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));return B.rotation.x=-Math.PI/2,B.position.set(E,.47,L),i.add(B),B});r.animated.push(B=>{G.forEach((j,st)=>{let mt=(B*.35+st*.5)%1;j.scale.setScalar(1+mt*2.6),j.material.opacity=.45*(1-mt)}),C.scale.y=1+Math.sin(B*6)*.06}),n(E-1.65,L-1.65,E+1.65,L+1.65);let z=U("#d8d2c6",.8);[[E-3,L,Math.PI/2],[E+3,L,-Math.PI/2],[E,L-3,0]].forEach(([B,j,st],mt)=>{let Tt=new Bt;Tt.position.set(B,0,j),Tt.rotation.y=st,i.add(Tt),t(e(1.7,.1,.5,.04),U("#b8875a",.6),0,.46,0,Tt),t(e(1.7,.4,.07,.03),U("#b8875a",.6),0,.72,-.24,Tt);for(let _t of[-.65,.65])t(e(.14,.42,.44,.03),z,_t,.21,0,Tt);let et=Math.cos(st),ht=Math.sin(st);for(let _t of[-.42,.42])s(`fb${mt+1}${_t<0?"a":"b"}`,B+_t*et,j-_t*ht,st,.5,{x:B+_t*et+ht*.7,z:j-_t*ht+et*.7});n(B-.9*Math.abs(et)-.3*Math.abs(ht),j-.9*Math.abs(ht)-.3*Math.abs(et),B+.9*Math.abs(et)+.3*Math.abs(ht),j+.9*Math.abs(ht)+.3*Math.abs(et))});let it=U("#8a5a3b",.8),Y=[U("#4f9d5d",.85,{flatShading:!0}),U("#5fb36f",.85,{flatShading:!0}),U("#3f8a4f",.85,{flatShading:!0})];[[-12.4,16.4],[25,16.4],[24.9,11.2],[7.3,16.6]].forEach(([B,j],st)=>{t(new K(.12,.18,1.8,10),it,B,.9,j);let mt=sn(140+st);for(let Tt=0;Tt<6;Tt++)t(new Ke(1,1),Y[Tt%3],B+(mt()-.5)*.9,2.1+mt()*.8,j+(mt()-.5)*.9).scale.setScalar(.45+mt()*.25);n(B-.3,j-.3,B+.3,j+.3)});for(let[B,j]of[[-8,17],[-.5,11.4],[5.6,11.4],[17,17],[23.2,11.4],[-12.6,11.2]])t(new K(.14,.18,.12,14),U("#2b2b33",.4),B,.06,j),t(new K(.035,.035,2.1,8),U("#2b2b33",.4),B,1.1,j),t(new bt(.17,14,10),Te("#fff1d0",1.6),B,2.25,j,i,l),fn(i,B,j,1.4,"#ffe3b0",.22),n(B-.18,j-.18,B+.18,j+.18)}var rf=new D,yy=new Pn,of=new D,vo=class extends Ge{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var Un=new ae,xy=new ae,Mo=class{constructor(t={}){let e=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:n,height:s}},this.render=function(m,p){let M=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let x,v;p.isOrthographicCamera&&(x=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);let R=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,S=p.isOrthographicCamera?`scale( ${R} )scale(`+M+")translate("+h(x)+"px,"+h(v)+"px)"+u(p.matrixWorldInverse):`scale( ${R} )translateZ(`+M+"px)"+u(p.matrixWorldInverse),I=(p.isPerspectiveCamera?"perspective("+M+"px) ":"")+S+"translate("+r+"px,"+o+"px)";a.camera.style!==I&&(f.style.transform=I,a.camera.style=I),_(m,m,p,S)},this.setSize=function(m,p){n=m,s=p,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",f.style.width=m+"px",f.style.height=p+"px"};function h(m){return Math.abs(m)<1e-10?0:m}function u(m){let p=m.elements;return"matrix3d("+h(p[0])+","+h(-p[1])+","+h(p[2])+","+h(p[3])+","+h(p[4])+","+h(-p[5])+","+h(p[6])+","+h(p[7])+","+h(p[8])+","+h(-p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(-p[13])+","+h(p[14])+","+h(p[15])+")"}function d(m){let p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+h(p[0])+","+h(p[1])+","+h(p[2])+","+h(p[3])+","+h(-p[4])+","+h(-p[5])+","+h(-p[6])+","+h(-p[7])+","+h(p[8])+","+h(p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(p[13])+","+h(p[14])+","+h(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,M=m.children.length;p<M;p++)g(m.children[p])}function _(m,p,M,x){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let v=m.layers.test(M.layers)===!0,R=m.element;if(R.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(e,p,M);let S;m.isCSS3DSprite?(Un.copy(M.matrixWorldInverse),Un.transpose(),m.rotation2D!==0&&Un.multiply(xy.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(rf,yy,of),Un.setPosition(rf),Un.scale(of),Un.elements[3]=0,Un.elements[7]=0,Un.elements[11]=0,Un.elements[15]=1,S=d(Un)):S=d(m.matrixWorld);let T=a.objects.get(m);if(T===void 0||T.style!==S){R.style.transform=S;let I={style:S};a.objects.set(m,I)}R.parentNode!==f&&f.appendChild(R),m.onAfterRender(e,p,M)}}for(let v=0,R=m.children.length;v<R;v++)_(m.children[v],p,M,x)}}};var fe=dt;function jl(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var af={idle:"\u2615",chat:"\u{1F4AC}",work:"\u{1F3E2}",image:"\u{1F3A8}",video:"\u{1F3AC}",web:"\u{1F50E}",doc:"\u{1F4C4}",away:"\u{1F319}"},_y={"\u{1F44B}":"wave","\u{1F57A}":"dance","\u{1F389}":"cheer","\u{1F64C}":"cheer","\u2615":"drink"},Eo={x1:-5.1,x2:1.1,z1:1.9,z2:7.1},vy=120,My={hug:.5,dance:.95,highfive:.62,cheers:.62,coffee:.68},lf={highfive:"\u{1F64C}",hug:"\u{1F917}",cheers:"\u{1F942}",coffee:"\u2615",dance:"\u{1F483}"},Ve={x:12.5,z:12.5,face:.32},cf=()=>({x:Ve.x+Math.sin(Ve.face)*2,z:Ve.z+Math.cos(Ve.face)*2}),Ey={id:"npc",name:"Tr\u1EE3 l\xFD SIMI",shirt:"#0a5cc2",pants:"#142c5a",shoes:"#1d1d24",hair:"#2b1d14",hairStyle:"bob",accessory:"headset",accent:"#f5c518",skin:"#f1c9a5",outfit:"blazer",lapel:"#083d80"},tc={x:6,z:4,zoom:.31},ec={npc:{x:Ve.x,z:Ve.z,y:1.1,zoom:1.45},altar:{x:12.6,z:-8.4,y:1.2,zoom:1},thantai:{x:7.8,z:-8.4,y:1,zoom:1.05},bar:{x:3,z:-7.6,y:1,zoom:.95},dance:{x:-2,z:4.5,y:.2,zoom:1.05},cinema:{x:-9.6,z:-9,y:1.9,zoom:.95},game:{x:20.8,z:-4.4,y:.9,zoom:.95},zen:{x:8.4,z:2.2,y:.4,zoom:.92},garden:{x:8,z:14.2,y:.4,zoom:.62}};function sc(i){let t=i.avatar||{},e=0;for(let s of String(i.id||i.name||""))e=e*31+s.charCodeAt(0)>>>0;let n=s=>s[e%s.length];return{id:i.id,name:i.name,hair:t.hair||n(["#2b1d14","#5a3a1e","#1a1a1a","#7a2e2e","#b07a3c","#3b3b46"]),skin:t.skin||n(["#f1c9a5","#e2ae84","#f6d7bd","#ebbf98","#d9a074"]),shirt:t.shirt||n(["#0a78f0","#2fc1a5","#f5b51b","#4a3592","#e1262d","#142c5a","#ff8a3d"]),pants:t.pants,shoes:t.shoes,accent:t.accent,hairStyle:t.hairStyle||n(["short","long","spiky","bun","bob","curly","ponytail"]),accessory:t.accessory||"none",outfit:t.outfit||"none"}}var nc=1.5;function hf(i){let t=new rs({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!t.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");return t.setPixelRatio(Math.min(window.devicePixelRatio||1,nc)),t.shadowMap.enabled=!0,t.shadowMap.type=ps,t.toneMapping=Js,t.outputColorSpace=Ee,t.setClearColor(0,0),t}var wy=new ai(.34,24),Sy=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(60,40,20,.42)"),e.addColorStop(.6,"rgba(60,40,20,.18)"),e.addColorStop(1,"rgba(60,40,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ee({map:new hn(i),transparent:!0,depthWrite:!1})})();function ff(i,t=2048,e={x:0,z:0},n={x:17,z:14}){i.add(new hs("#ffffff","#d8c6aa",1.05),new fs("#ffffff",.18));let s=new li("#fff0dc",2.1);s.position.set(e.x-6,15,e.z+10),s.target.position.set(e.x,0,e.z),s.castShadow=!0,s.shadow.mapSize.set(t,t),Object.assign(s.shadow.camera,{left:-n.x,right:n.x,top:n.z,bottom:-n.z,near:1,far:50}),s.shadow.bias=-5e-4,s.shadow.normalBias=.03,s.shadow.radius=2.5;let r=new li("#dbe8ff",.5);r.position.set(9,7,-3),i.add(s,s.target,r)}var ir=class{constructor(t,e={}){this.root=t,this.opts=e,this.people=new Map,this.bubbles=new Set,this.emotes=new Set,this.keys=new Set,this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas",n.tabIndex=0,this.renderer=hf(n),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.cssBox=document.createElement("div"),this.cssBox.className="office3d-css",n.style.position="relative",n.style.zIndex="1",this.layer.style.zIndex="2",this.wrap.append(this.cssBox,n,this.layer),t.appendChild(this.wrap),this.canvas=n,this.scene=new oi,ff(this.scene,2048,{x:(fe.minX+fe.maxX)/2,z:(fe.minZ+fe.maxZ)/2},{x:(fe.maxX-fe.minX)/2+3,z:(fe.maxZ-fe.minZ)/2+4}),this.world=sf(this.scene),this.pool=(this.world.poolTables||[]).map(o=>({...o,state:null,anim:null})),this.games=new Map,this.seats=new Map(this.world.seats.map(o=>[o.id,o])),this.follow=!0,this.cam=new ri(-10,10,6,-6,.1,100),this.view={az:.72,el:.7,zoom:.85,target:new D(0,.6,.6)},this.goal={az:.72,el:.7,zoom:.85},this.perf={acc:0,n:0,dpr:Math.min(window.devicePixelRatio||1,nc),slow:0},this.nav=new xs(fe.minX,fe.minZ,fe.maxX,fe.maxZ,.2),this.nav.blockRect(fe.minX,fe.minZ,fe.maxX,fe.minZ+.25,.15),this.nav.blockRect(fe.minX,fe.minZ,fe.minX+.25,fe.maxZ,.15),this.nav.blockRect(fe.maxX-.2,fe.minZ,fe.maxX,fe.maxZ,.15),this.nav.blockRect(fe.minX,fe.maxZ-.2,fe.maxX,fe.maxZ,.15);for(let o of this.world.obstacles)this.nav.blockRect(...o);this.buildNpcDesk();for(let o of this.pool)this.setTableBalls(o,null);this.cat=new _s(this.scene,this.nav),this.cat.onFx=o=>this.fx(null,o),this.setNpc(null),this.skew=0,this.light=!1,this.capFps=!1,this.raycaster=new ds,this.ndc=new Et,this.tmpV=new D,this.floorPlane=new vn(new D(0,1,0),0),this.marker=new J(new Dn(.16,.24,28),new ee({color:"#0a78f0",transparent:!0,opacity:0})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.02,this.scene.add(this.marker);let s=cf();this.npcRing=new Bt,this.npcRing.position.set(s.x,.025,s.z);for(let[o,a,l]of[[.55,.7,.85],[.95,1.02,.45]]){let c=new J(new Dn(o,a,48),new ee({color:"#f5c518",transparent:!0,opacity:l,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.userData.o=l,this.npcRing.add(c)}this.scene.add(this.npcRing),this.stick={x:0,y:0},this.bindInput(),e.mobile&&(this.renderer.shadowMap.enabled=!1,this.perf.noShadow=!0,this.capFps=!0,this.perf.dpr=Math.min(window.devicePixelRatio||1,1.5),this.renderer.setPixelRatio(this.perf.dpr),this.goal.zoom=this.view.zoom=.7),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new us;let r=o=>{this.dead||(this.raf=requestAnimationFrame(r),!this.paused&&((this.capFps||this.light)&&o-(this.lastTs||0)<31||(this.lastTs=o,this.frame())))};r()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;Object.assign(this.cam,{left:-c*l/2,right:c*l/2,top:c/2,bottom:-c/2}),this.cam.updateProjectionMatrix()}lookAt(t){let e=ec[t];return e?(this.follow=!1,this.panTo=new D(e.x,.6,e.z),Object.assign(this.goal,{zoom:e.zoom,az:.72,el:.7}),!0):!1}placeScreen(t){let e=ec[t];if(!e)return null;let n=this.project(this.tmpV.set(e.x,e.y,e.z)),s=this.canvas.getBoundingClientRect();return{x:s.left+n.x,y:s.top+n.y,r:Math.max(70,Math.min(170,110*this.view.zoom))}}resetView(){Object.assign(this.goal,{az:.72,el:.7,zoom:.85}),this.follow=!0}overview(){this.follow=!1,this.goal.zoom=tc.zoom,this.goal.el=.82,this.panTo=new D(tc.x,.6,tc.z)}focusSelf(){this.follow=!0,this.goal.zoom=.85,this.panTo=null}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.cssW=e,this.cssH=n,this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.cssRenderer&&this.cssRenderer.setSize(e,n),this.updateCamera()}setCinemaFrame(t){let e=this.world.cinema;if(e){if(this.cinemaObj&&(this.cssScene.remove(this.cinemaObj),this.cinemaObj.element.remove(),this.cinemaObj=null),t){this.cssRenderer||(this.cssRenderer=new Mo({element:this.cssBox}),this.cssScene=new oi,this.cssRenderer.setSize(this.cssW||800,this.cssH||500));let n=1280;t.style.width=n+"px",t.style.height=Math.round(n*e.h/e.w)+"px";let s=new vo(t);s.position.set(e.x,e.y,e.z),s.scale.setScalar(e.w/n),this.cssScene.add(s),this.cinemaObj=s}e.idle.visible=!t,e.hole.visible=!!t}}viewScreen(t=0){let e=this.world.cinema;if(!e)return;let n=1.25,s=this.cssW||800,r=this.cssH||500,o=Math.max(8.4,15.6/(s/r))/n/r;this.follow=!1,this.panTo=new D(e.x-t*o,.6,e.z+3.2),Object.assign(this.goal,{az:.05,el:.32,zoom:n})}ray(t,e){let n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam),this.raycaster}pickPerson(t,e){let n=this.ray(t,e),s=null;for(let r of this.people.values()){let o=n.intersectObject(r.person.root,!0)[0];o&&(!s||o.distance<s.d)&&(s={p:r,d:o.distance})}return s&&s.p}pickNpc(t,e){return!!this.npc&&this.ray(t,e).intersectObjects([this.npc.person.root,this.npcDesk],!0).length>0}pickCat(t,e){return this.ray(t,e).intersectObject(this.cat.root,!0).length>0}pickTable(t,e){if(!this.pool.length)return-1;let n=this.ray(t,e).intersectObjects(this.pool.map(s=>s.hit),!1)[0];return n?n.object.userData.poolTable:-1}pickSeat(t,e){let n=this.ray(t,e).intersectObjects(this.world.seatMeshes,!1)[0];return n?this.seats.get(n.object.userData.seatId):null}seatTaken(t,e){return[...this.people.values()].some(n=>n.m.id!==e&&(n.seat===t||n.pendingSeat===t))}pickFloor(t,e){let n=new D;return this.ray(t,e).ray.intersectPlane(this.floorPlane,n)?n:null}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",c=>c.preventDefault());let n=new Map,s=null,r=()=>{let[c,f]=[...n.values()];return Math.hypot(c.x-f.x,c.y-f.y)||1};t.addEventListener("pointerdown",c=>{if(t.focus(),t.setPointerCapture(c.pointerId),n.set(c.pointerId,{x:c.clientX,y:c.clientY}),n.size===2){s={d:r(),zoom:this.goal.zoom},e&&(e.moved=!0);return}e={x:c.clientX,y:c.clientY,az:this.goal.az,el:this.goal.el,moved:!1}});let o=c=>{n.delete(c.pointerId),n.size<2&&(s=null)};t.addEventListener("pointercancel",c=>{o(c),e=null});let a=0,l=0;t.addEventListener("pointermove",c=>{if(n.has(c.pointerId)&&n.set(c.pointerId,{x:c.clientX,y:c.clientY}),s&&n.size>=2){this.goal.zoom=Math.max(.28,Math.min(2.6,s.zoom*r()/s.d));return}if(e){let d=c.clientX-e.x,g=c.clientY-e.y;Math.hypot(d,g)>5&&(e.moved=!0),e.moved&&(this.goal.az=Math.max(.05,Math.min(1.52,e.az-d*.005)),this.goal.el=Math.max(.34,Math.min(1.28,e.el+g*.0035)),t.style.cursor="grabbing");return}let f=c.clientX,h=c.clientY,u=()=>{a=performance.now(),t.style.cursor=this.pickPerson(f,h)||this.pickNpc(f,h)||this.pickCat(f,h)||this.pickTable(f,h)>=0||this.pickSeat(f,h)?"pointer":"crosshair"};clearTimeout(l),performance.now()-a>80?u():l=setTimeout(u,90)}),t.addEventListener("pointerup",c=>{if(o(c),e&&!e.moved){let f=this.pickPerson(c.clientX,c.clientY),h=!f&&this.pickNpc(c.clientX,c.clientY),u=!f&&!h&&this.pickCat(c.clientX,c.clientY),d=!f&&!h&&!u?this.pickTable(c.clientX,c.clientY):-1,g=!f&&!u&&!h&&d<0&&this.pickSeat(c.clientX,c.clientY);if(h)this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(c.clientX,c.clientY);else if(d>=0)this.opts.onTableClick&&this.opts.onTableClick(d,c.clientX,c.clientY);else if(u)this.opts.onCatClick&&this.opts.onCatClick(c.clientX,c.clientY);else if(f&&!f.me)this.opts.onPersonClick&&this.opts.onPersonClick(f.m.id,c.clientX,c.clientY);else if(f&&f.me)this.opts.onSelfClick&&this.opts.onSelfClick(c.clientX,c.clientY);else if(g)this.sitSelf(g.id);else{let _=this.pickFloor(c.clientX,c.clientY);_&&this.walkSelf(_.x,_.z,!0)}}e=null,t.style.cursor="crosshair"}),t.addEventListener("wheel",c=>{c.preventDefault(),this.goal.zoom=Math.max(.28,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,c.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dblclick",c=>{this.pickPerson(c.clientX,c.clientY)||this.resetView()}),t.addEventListener("keydown",c=>{let f=c.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(f)&&(this.keys.add(f),c.preventDefault())}),t.addEventListener("keyup",c=>this.keys.delete(c.key.toLowerCase())),t.addEventListener("blur",()=>this.keys.clear())}setMembers(t){let e=new Set;t.forEach((n,s)=>{e.add(n.id);let r=this.people.get(n.id),o=sc(n),a=JSON.stringify(o);if(r&&r.sig!==a&&(this.scene.remove(r.person.root),r.person=this.makePerson(o,s,r.pos,r.facing),r.person.dance=r.dance||null,r.sig=a),!r){let l=this.freeSpot(n.pos?n.pos.x:s%5*1.4-3,n.pos?n.pos.z:1+Math.floor(s/5));r={m:n,me:!!n.me,pos:l,path:[],facing:Math.random()*6,sig:a,speed:1.9,seat:null,pendingSeat:null},r.person=this.makePerson(o,s,r.pos,r.facing),this.makePlate(r),this.people.set(n.id,r);let c=n.pos&&n.pos.seat&&this.seats.get(n.pos.seat);c&&!this.seatTaken(c.id,n.id)&&this.sitNow(r,c)}r.m=n,r.me=!!n.me,!r.me&&(n.dance||null)!==(r.dance||null)&&!r.meet&&this.setDance(n.id,n.dance||null),this.updatePlate(r)});for(let[n,s]of[...this.people])e.has(n)||this.removePerson(n,s)}makePerson(t,e,n,s){let r=new Ti(t,e);return r.root.userData.character=!0,r.root.position.set(n.x,0,n.z),r.root.rotation.y=s||0,r.root.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),r.blob=new J(wy,Sy),r.blob.rotation.x=-Math.PI/2,r.blob.renderOrder=1,r.root.add(r.blob),this.scene.add(r.root),r}removePerson(t,e){this.scene.remove(e.person.root),e.plate.remove(),this.people.delete(t);for(let n of[...this.bubbles])n._p===e&&(n.remove(),this.bubbles.delete(n))}freeSpot(t,e){let n=this.nav.toCell(Math.max(fe.minX+.6,Math.min(fe.maxX-.6,t)),Math.max(fe.minZ+.6,Math.min(fe.maxZ-.6,e))),s=this.nav.nearestFree(n.c,n.r);return this.nav.center(s.c,s.r)}makePlate(t){let e=document.createElement("div");e.className="plate3d lobby"+(t.me?" me":""),e.innerHTML='<span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title"></span></span>',e.addEventListener("click",n=>{let s=e.getBoundingClientRect();t.me?this.opts.onSelfClick&&this.opts.onSelfClick(s.left+s.width/2,s.bottom):this.opts.onPersonClick&&this.opts.onPersonClick(t.m.id,s.left+s.width/2,s.bottom),n.stopPropagation()}),this.layer.append(e),t.plate=e}updatePlate(t){let e=t.m,n=e.status||{};t.plate.querySelector(".pl-name").textContent=(t.me?"\u2B50 ":"")+e.name,t.plate.querySelector(".pl-title").textContent=t.game?"\u{1F3B1} \u0110ang ch\u01A1i bida":t.dance?"\u{1F483} \u0110ang nh\u1EA3y":n.text?new RegExp("^\\p{Extended_Pictographic}","u").test(n.text)?n.text:`${af[n.activity]||"\u2615"} ${n.text}`:`${af[n.activity]||"\u2615"} ${e.teamName||""}`.trim(),t.plate.classList.toggle("dancing",!!t.dance),t.plate.classList.toggle("busy",!!n.activity&&!["idle","away"].includes(n.activity)),t.plate.title=`${e.name} \xB7 ${e.teamName||""}${e.role?" \xB7 "+e.role:""}`,t.busy=!!n.activity&&!["idle","away"].includes(n.activity)}standUp(t){t.seat=null,t.pendingSeat=null,t.sitting=!1,t.seatKind=null,t.person&&(t.person.bowPh=0)}stopMoves(t){t.meet=null,t.dance&&(t.dance=null,t.person.dance=null,this.updatePlate(t),t.me&&this.opts.onDance&&this.opts.onDance(null,!0))}sitNow(t,e){t.path=[],t.pos={x:e.x,z:e.z},t.facing=e.face,t.seat=e.id,t.pendingSeat=null,t.sitting=!0,t.seatH=e.h,t.seatKind=e.kind||null,e.kind==="zen"&&(t.zenFx=performance.now()/1e3+2+Math.random()*3,t.me&&this.opts.onToast&&this.opts.onToast("\u{1F9D8} H\xEDt v\xE0o th\u1EADt ch\u1EADm\u2026 th\u1EDF ra nh\u1EB9 nh\xE0ng. B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.")),e.kind==="kneel"&&(t.zenFx=performance.now()/1e3+1.5+Math.random()*2,t.seatTheme=e.theme||null,t.me&&this.opts.onToast&&this.opts.onToast(e.theme==="thantai"?"\u{1F4B0} Th\u1EA7n T\xE0i ph\xF9 h\u1ED9: kh\xE1ch v\xE0o nh\u01B0 n\u01B0\u1EDBc, ch\u1ED1t \u0111\u01A1n \u1EA7m \u1EA7m, doanh s\u1ED1 x10! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.":"\u{1F64F} Th\xE0nh t\xE2m kh\u1EA5n: c\u1EA7u kh\xF4ng bug, token \u0111\u1EA7y kho, deadline l\xF9i! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy."))}walk(t,e,n){this.standUp(t),this.stopMoves(t);let s=this.freeSpot(e,n);return t.path=this.nav.find({x:t.pos.x,z:t.pos.z},s),this.pace(t),s}pace(t){let e=0,n=t.pos;for(let s of t.path)e+=Math.hypot(s.x-n.x,s.z-n.z),n=s;return t.speed=e>9?3.4:1.9,e}walkToSeat(t,e){this.standUp(t),this.stopMoves(t),t.pendingSeat=e.id,t.path=[...this.nav.find({x:t.pos.x,z:t.pos.z},this.freeSpot(e.approach.x,e.approach.z)),{x:e.x,z:e.z}],this.pace(t)}moveMember(t,e,n,s){let r=this.people.get(t);if(!r||r.me)return;let o=s&&this.seats.get(s);o?this.walkToSeat(r,o):this.walk(r,e,n)}walkSelf(t,e,n){let s=this.self();if(!s)return;let r=this.walk(s,t,e);n&&(this.marker.position.set(r.x,.02,r.z),this.marker.material.opacity=.9),this.follow=!0,this.opts.onMove&&this.opts.onMove({x:r.x,z:r.z,seat:null})}sitSelf(t){let e=this.self(),n=this.seats.get(t);if(!(!e||!n)&&e.seat!==t){if(this.seatTaken(t,e.m.id)){this.opts.onToast&&this.opts.onToast("Gh\u1EBF n\xE0y c\xF3 ng\u01B0\u1EDDi ng\u1ED3i r\u1ED3i \u{1F605}");return}this.walkToSeat(e,n),this.marker.position.set(n.x,.02,n.z),this.marker.material.opacity=.9,this.follow=!0,this.opts.onMove&&this.opts.onMove({x:n.x,z:n.z,seat:t})}}self(){return[...this.people.values()].find(t=>t.me)}selfPos(){let t=this.self();return t?{...t.pos,seat:t.seat}:null}say(t,e,n=5200){let s=t==="npc"?this.npc:this.people.get(t);if(!s)return;for(let o of[...this.bubbles])o._p===s&&(o.remove(),this.bubbles.delete(o));let r=document.createElement("div");r.className="bubble3d k-chat",r.style.zIndex="5000",r.textContent=e.length>110?e.slice(0,109)+"\u2026":e,r._p=s,this.layer.appendChild(r),this.bubbles.add(r),s.person.say(Math.min(n,2400)),requestAnimationFrame(()=>r.classList.add("show")),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(r),r.remove()},220)},n)}emote(t,e){let n=this.people.get(t);if(!n)return;let s=_y[e]||(/❤|💖|😍|🥰/.test(e)?"wave":"cheer");n.person.doAction(s,s==="dance"?2600:1800),s==="dance"&&(n.danceUntil=performance.now()/1e3+2.6);let r=document.createElement("div");r.className="emote",r.textContent=e,r._p=n,this.layer.appendChild(r),this.emotes.add(r),setTimeout(()=>{this.emotes.delete(r),r.remove()},1700)}fx(t,e,n=1700){let s=document.createElement("div");s.className="emote",s.textContent=e,s._p=t,s._cat=!t,this.layer.appendChild(s),this.emotes.add(s),setTimeout(()=>{this.emotes.delete(s),s.remove()},n)}buildNpcDesk(){let t=new Bt;t.position.set(Ve.x,0,Ve.z),t.rotation.y=Ve.face;let e=(v,R=.6,S={})=>new se({color:v,roughness:R,...S}),n=[],s=(v,R,S,T,I,V=!0)=>{let y=new J(v,R);return y.position.set(S,T,I),y.castShadow=V,y.receiveShadow=!0,t.add(y),n.push(y),y},r=(v,R,S)=>{let T=new Xs,I=24;for(let V=0;V<=I;V++){let y=-S+2*S*V/I,E=[Math.sin(y)*R,-Math.cos(y)*R];V===0?T.moveTo(...E):T.lineTo(...E)}for(let V=I;V>=0;V--){let y=-S+2*S*V/I;T.lineTo(Math.sin(y)*v,-Math.cos(y)*v)}return T},o=(v,R)=>{let S=new so(v,{depth:R,bevelEnabled:!1,curveSegments:24});return S.rotateX(-Math.PI/2),S};s(o(r(.62,.92,.85),.92),e("#ffffff",.45),0,0,0),s(o(r(.6,.98,.88),.05),e("#c79a6a",.35),0,.92,0),s(o(r(.925,.94,.85),.04),e("#0a78f0",.4,{emissive:"#2f8cf0",emissiveIntensity:1.2}),0,.16,0,!1);let a=document.createElement("canvas");a.width=512,a.height=128;let l=a.getContext("2d");l.fillStyle="#0a5cc2",l.fillRect(0,0,512,128),l.fillStyle="#ffd34d",l.font="900 54px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("L\u1EC4 T\xC2N",256,50),l.fillStyle="#ffffff",l.font="800 28px Nunito, sans-serif",l.fillText("H\u1ECFi Tr\u1EE3 l\xFD SIMI",256,100);let c=new hn(a);c.colorSpace=Ee,c.anisotropy=4;let f=new J(new ie(.62,.155),new ee({map:c}));f.position.set(0,.6,.935),t.add(f);let h=s(new Rt(.42,.28,.03),e("#1d2b4f",.4),-.42,1.18,.62);h.rotation.y=Math.PI+.5,s(new Rt(.06,.18,.06),e("#c2cad6",.3),-.42,1.03,.64),s(new K(.06,.07,.02,16),e("#c2cad6",.3,{metalness:.6}),.36,.98,.78,!1),s(new bt(.05,14,8,0,Math.PI*2,0,Math.PI/2),e("#f5c518",.25,{metalness:.6}),.36,.99,.78,!1),s(new K(.04,.035,.1,12),e("#0a78f0",.4),.55,1.02,.6,!1),s(new Rt(2.5,1.85,.1),e("#0a5cc2",.55),0,.925,-.82),s(new Rt(2.6,.08,.16),e("#ffffff",.5),0,1.89,-.82);let u=document.createElement("canvas");u.width=1024,u.height=720;let d=u.getContext("2d"),g=d.createLinearGradient(0,0,1024,720);g.addColorStop(0,"#0a78f0"),g.addColorStop(1,"#0a4aa8"),d.fillStyle=g,d.fillRect(0,0,1024,720),d.fillStyle="rgba(255,255,255,.08)";for(let v=0;v<7;v++)d.beginPath(),d.arc(120+v*150,640-v%2*60,90,0,7),d.fill();d.fillStyle="#ffd34d",d.beginPath(),d.arc(512,250,150,0,7),d.fill(),d.fillStyle="#0a4aa8",d.font="900 230px Nunito, sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText("?",512,262),d.fillStyle="#ffffff",d.font="900 96px Nunito, sans-serif",d.fillText("Tr\u1EE3 l\xFD SIMI",512,500),d.font="800 46px Nunito, sans-serif",d.fillStyle="rgba(255,255,255,.85)",d.fillText("H\u01B0\u1EDBng d\u1EABn \xB7 M\u1EB9o AI \xB7 H\u1ECFi \u0111\xE1p",512,590);let _=new hn(u);_.colorSpace=Ee,_.anisotropy=4;let m=new J(new ie(2.36,1.66),new ee({map:_,toneMapped:!1}));m.position.set(0,.94,-.765),t.add(m);for(let v of[-1,1]){s(new K(.2,.15,.42,16),e("#f6f1e8",.6),v*1.5,.21,-.7);for(let R=0;R<4;R++)s(new Ke(.2,1),e(R%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),v*1.5+(R%2?.08:-.08),.6+R*.17,-.7+(R>1?.06:-.06)).scale.setScalar(1-R*.12)}this.scene.add(t),this.npcDesk=t;let p=Math.cos(Ve.face),M=Math.sin(Ve.face),x=[[-1.75,-.95],[1.75,-.95],[-1,1],[1,1],[-1.75,.2],[1.75,.2]].map(([v,R])=>[Ve.x+v*p+R*M,Ve.z-v*M+R*p]);this.nav.blockRect(Math.min(...x.map(v=>v[0])),Math.min(...x.map(v=>v[1])),Math.max(...x.map(v=>v[0])),Math.max(...x.map(v=>v[1])),.05)}setNpc(t){let e={...Ey},n=JSON.stringify(e);if(!this.npc){let s=document.createElement("div");s.className="plate3d lobby npc",s.innerHTML='<span class="npc-q">?</span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title">B\u1EA5m \u0111\u1EC3 h\u1ECFi m\xECnh</span></span>',s.addEventListener("click",r=>{let o=s.getBoundingClientRect();this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(o.left+o.width/2,o.bottom),r.stopPropagation()}),this.layer.append(s),this.npc={plate:s,facing:Ve.face,pos:{x:Ve.x-Math.sin(Ve.face)*.08,z:Ve.z-Math.cos(Ve.face)*.08},m:{id:"npc"}}}this.npc.sig!==n&&(this.npc.person&&this.scene.remove(this.npc.person.root),this.npc.person=this.makePerson(e,7,this.npc.pos,this.npc.facing),this.npc.person.root.scale.setScalar(1.06),this.npc.sig=n),this.npc.plate.querySelector(".pl-name").textContent=t&&t.name?t.name:"Tr\u1EE3 l\xFD SIMI"}npcWave(){this.npc&&this.npc.person.doAction("wave",1500)}goNpc(){let t=cf(),e=this.self();return e&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<.6&&!e.path.length?(this.focusSelf(),!0):(this.walkSelf(t.x,t.z,!0),this.focusSelf(),!1)}nearNpc(){let t=this.self();return!!(t&&this.npc&&Math.hypot(t.pos.x-this.npc.pos.x,t.pos.z-this.npc.pos.z)<2.6&&!t.path.length)}npcScreen(){if(!this.npc)return null;let t=this.project(this.tmpV.set(this.npc.pos.x,1.6,this.npc.pos.z));return{x:t.x,y:t.y,w:this.cssW,h:this.cssH}}npcSay(t,e=5200){this.npc&&(this.npc.lastSay=t,this.say("npc",t,e))}setTableBalls(t,e){let n=window.VPPool,s=e||(n?n.rack().balls:null);if(!s){t.balls.visible=!1;return}let r=this._m||(this._m=new ae),o=!Array.isArray(s);for(let a=0;a<16;a++){let l=o?s[a*3]:s[a][0],c=o?s[a*3+1]:s[a][1],f=o?s[a*3+2]:s[a][2],h=t.x-vs.w/2+c/500*vs.w,u=t.z-vs.l/2+l/1e3*vs.l;r.makeTranslation(h,f?-1:.892,u),t.balls.setMatrixAt(a,r)}t.balls.instanceMatrix.needsUpdate=!0,t.balls.visible=!0}setGames(t){let e=new Map;for(let n of t||[])n.players.forEach((s,r)=>e.set(s,{table:n.table,idx:r}));for(let n of this.pool){let s=(t||[]).find(r=>r.table===n.index);s&&!n.anim&&(n.state=s.state?s.state.balls:null,this.setTableBalls(n,n.state))}this.games=e;for(let n of this.people.values()){let s=e.get(n.m.id)||null;!!s!=!!n.game?(n.game=s,s||(n.person.holdCue=!1),this.updatePlate(n)):n.game=s}}goToTable(t,e){let n=this.pool[t];if(!n)return;let s=n.spots[e%2];this.walkSelf(s.x,s.z,!0)}poolCue(t){let e=this.people.get(t);e&&e.person.doAction("cue",900)}poolShot(t,e,n,s,r){let o=this.pool[t];if(!o)return;this.poolCue(e);let a=window.VPPool;if(a&&n)try{o.anim={frames:a.simulate(n,s).frames,t0:performance.now(),end:r.balls};return}catch{}o.state=r.balls,this.setTableBalls(o,o.state)}poolEnd(t){let e=this.pool[t];e&&(clearTimeout(e.resetT),e.resetT=setTimeout(()=>{e.anim||(e.state=null,this.setTableBalls(e,null))},6e3))}setSkew(t){this.skew=Number(t)||0}setCat(t){this.cat.command(t,this.skew)}beat(){return(Date.now()+this.skew)/1e3*vy/60}setDance(t,e){let n=this.people.get(t);n&&(n.dance=e||null,n.person.dance=n.dance,e&&n.pendingSeat&&(n.pendingSeat=null,n.path=[]),this.updatePlate(n))}danceSelf(t){let e=this.self();e&&(this.setDance(e.m.id,t),this.opts.onDance&&this.opts.onDance(t||null,!1))}onFloor(t){return!!t&&t.pos.x>Eo.x1&&t.pos.x<Eo.x2&&t.pos.z>Eo.z1&&t.pos.z<Eo.z2}interact(t){let e=this.people.get(t.a),n=this.people.get(t.b);if(!e||!n||e===n)return;(t.kind==="hug"||t.kind==="dance")&&n.sitting&&this.standUp(n);let s=Math.atan2(e.pos.x-n.pos.x,e.pos.z-n.pos.z)||.6,r=My[t.kind]||.65,o=this.freeSpot(n.pos.x+Math.sin(s)*r,n.pos.z+Math.cos(s)*r);this.standUp(e),e.path=this.nav.find({x:e.pos.x,z:e.pos.z},o);let a=this.pace(e);e.meet={other:n,kind:t.kind,style:t.style,deadline:performance.now()/1e3+Math.max(7,a/e.speed+3)},e.me&&(this.follow=!0)}startMeet(t,e){let n=e.other;t.path=[],t.facing=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),n.sitting||(n.facing=Math.atan2(t.pos.x-n.pos.x,t.pos.z-n.pos.z));let s=e.kind;if(s==="coffee")t.person.doAction("give",1500),setTimeout(()=>{this.people.has(n.m.id)&&n.person.doAction("drink",2400)},1100);else if(s==="dance")for(let r of[t,n])r.dance=e.style||"groove",r.person.dance=r.dance,this.updatePlate(r);else for(let r of[t,n])r.person.doAction(s,s==="hug"?2800:s==="cheers"?2300:1700);this.fx(t,lf[s]||"\u2728"),(s==="hug"||s==="highfive")&&this.fx(n,lf[s])}setLight(t){this.light=!!t;let e=t?1:Math.min(window.devicePixelRatio||1,nc);this.perf.dpr=e,this.renderer.setPixelRatio(e);let n=!t&&!this.perf.noShadow;this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(s=>{s.material&&[].concat(s.material).forEach(r=>{r.needsUpdate=!0})})),this.resize()}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t,n=performance.now()/1e3;for(let d of this.world.animated)d(e,t);for(let d of this.pool){if(!d.anim)continue;let g=Math.floor((performance.now()-d.anim.t0)/(1e3/60));g>=d.anim.frames.length-1?(d.state=d.anim.end,d.anim=null,this.setTableBalls(d,d.state)):this.setTableBalls(d,d.anim.frames[g])}let s=this.beat();this.cat.update(t,n,{posOf:d=>{let g=this.people.get(d);return g&&g.pos}}),this.keyboardMove(t),this.marker.material.opacity=Math.max(0,this.marker.material.opacity-t*.8);for(let d of this.people.values()){let g=!1;if(d.path.length){let x=d.path[0],v=x.x-d.pos.x,R=x.z-d.pos.z,S=Math.hypot(v,R),T=d.speed*t;if(S<=T){if(d.pos.x=x.x,d.pos.z=x.z,d.path.shift(),!d.path.length&&d.pendingSeat){let I=this.seats.get(d.pendingSeat);I&&this.sitNow(d,I)}}else d.pos.x+=v/S*T,d.pos.z+=R/S*T;d.meet&&n>d.meet.deadline&&(d.path=[]),S>.001&&(d.facing=jl(d.facing,Math.atan2(v,R),1-Math.exp(-t*12))),g=d.path.length>0}else d.keyMove&&(g=!0);if(d.meet&&!d.path.length){let x=d.meet;d.meet=null,this.startMeet(d,x)}if(d.game){let x=this.pool[d.game.table]&&this.pool[d.game.table].spots[d.game.idx%2],v=x&&!g&&Math.hypot(d.pos.x-x.x,d.pos.z-x.z)<.45;d.person.holdCue=!!v,v&&(d.facing=jl(d.facing,x.face,1-Math.exp(-t*8)))}d.danceUntil&&n<d.danceUntil&&!g&&(d.facing+=t*5),d.dance==="spin"&&!g&&!d.sitting&&(d.facing+=t*3.2);let _=!!d.sitting&&!g,m=_&&d.seatKind==="zen",p=_&&d.seatKind==="kneel",M=m?(d.seatH||.2)-.4:p?(d.seatH||.09)-.32:_?Math.max(0,(d.seatH||.45)-.45):0;if(m&&n>(d.zenFx||0)&&(d.zenFx=n+6+Math.random()*5,this.fx(d,["\u{1F9D8}","\u{1F343}","\u2728","\u{1F33F}","\u262F\uFE0F","\u{1F549}\uFE0F"][Math.floor(Math.random()*6)],2200)),p&&n>(d.zenFx||0)){d.zenFx=n+5+Math.random()*4;let x=d.seatTheme==="thantai"?["\u{1F4B0}","\u{1F9E7}","\u{1F4C8}","\u{1F431}","\u{1F4B8}","\u{1F6D2}"]:["\u{1F64F}","\u{1F647}","\u2728","\u{1F4B0}","\u{1F340}"];this.fx(d,x[Math.floor(Math.random()*x.length)],2e3)}d.person.root.position.set(d.pos.x,M,d.pos.z),d.person.blob&&(d.person.blob.position.y=.012-M,d.person.blob.visible=!_||M<.05),d.person.root.rotation.y=d.facing,d.busy&&!g&&!_&&!d.person.action&&Math.random()<t*.15&&d.person.doAction("look",1600),d.person.animate(t,n,{moving:g,speed:d.speed,seated:_,typing:_&&!m&&!p&&d.busy&&!d.dance,beat:s,meditate:m,kneel:p}),d.keyMove=!1}if(this.npcRing){let d=n*.9%1,[g,_]=this.npcRing.children;g.material.opacity=g.userData.o*(.75+.25*Math.sin(n*3)),_.scale.setScalar(.6+d*.9),_.material.opacity=_.userData.o*(1-d)}if(this.npc){let d=this.npc;d.person.root.position.set(d.pos.x,0,d.pos.z),d.person.root.rotation.y=d.facing,d.person.animate(t,n,{moving:!1,speed:0,seated:!1,typing:!1,beat:s});let g=this.self();g&&Math.hypot(g.pos.x-d.pos.x,g.pos.z-d.pos.z)<2.3&&(!d.greetAt||n-d.greetAt>90)&&(d.greetAt=n,this.npcWave(),this.npcSay(this.opts.npcGreeting?this.opts.npcGreeting():"C\u1EA7n gi\xFAp g\xEC kh\xF4ng? B\u1EA5m v\xE0o m\xECnh nh\xE9 \u{1F44B}"))}let r=this.self(),o=this.onFloor(r)&&!(r&&r.path.length);o!==this.wasFloor&&(this.wasFloor=o,this.opts.onFloor&&this.opts.onFloor(o));let a=this.view,l=this.goal,c=1-Math.exp(-t*10);a.az+=(l.az-a.az)*c,a.el+=(l.el-a.el)*c,a.zoom*=Math.exp((Math.log(l.zoom)-Math.log(a.zoom))*c);let f=this.self(),h=this.follow&&f?{x:f.pos.x,z:f.pos.z}:this.panTo;if(h){let d=1-Math.exp(-t*4.5);a.target.x+=(h.x-a.target.x)*d,a.target.z+=(h.z-a.target.z)*d}this.updateCamera();let u=a.zoom<.7;u!==this.far&&(this.far=u,this.layer.classList.toggle("far",u)),this.renderer.render(this.scene,this.cam),this.cinemaObj&&this.cssRenderer.render(this.cssScene,this.cam),this.placeDom(),this.adapt(t)}adapt(t){let e=this.perf;if(e.acc+=t,e.n++,e.acc<2)return;let n=e.acc/e.n;e.acc=0,e.n=0,n>1/38?(e.slow++,e.dpr>1.01?(e.dpr=Math.max(1,e.dpr-.25),this.renderer.setPixelRatio(e.dpr),this.resize()):e.slow>=3&&this.renderer.shadowMap.enabled?(this.renderer.shadowMap.enabled=!1,e.noShadow=!0,this.scene.traverse(s=>{s.material&&[].concat(s.material).forEach(r=>{r.needsUpdate=!0})})):e.slow>=6&&!this.capFps&&(this.capFps=!0,this.opts.onSlow&&this.opts.onSlow())):e.slow=0}keyboardMove(t){let e=Math.hypot(this.stick.x,this.stick.y);if(!this.keys.size&&e<.15)return;let n=[...this.people.values()].find(g=>g.me);if(!n)return;let s=0,r=0,o=1;if(e>=.15&&(s=this.stick.x,r=this.stick.y,o=Math.min(1,e)),(this.keys.has("w")||this.keys.has("arrowup"))&&(r-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(s-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(s+=1),!s&&!r)return;let a=this.view.az,l=Math.hypot(s,r),c=(s*Math.cos(a)+r*Math.sin(a))/l,f=(-s*Math.sin(a)+r*Math.cos(a))/l,h=n.pos.x+c*2.4*o*t,u=n.pos.z+f*2.4*o*t;n.path=[],(n.sitting||n.pendingSeat)&&this.standUp(n),(n.dance||n.meet)&&this.stopMoves(n),this.follow=!0,this.nav.isFree(h,u)?(n.pos.x=h,n.pos.z=u):this.nav.isFree(h,n.pos.z)?n.pos.x=h:this.nav.isFree(n.pos.x,u)&&(n.pos.z=u),n.facing=jl(n.facing,Math.atan2(c,f),1-Math.exp(-t*14)),n.keyMove=!0;let d=performance.now();(!this.lastKeySend||d-this.lastKeySend>350)&&(this.lastKeySend=d,this.opts.onMove&&this.opts.onMove({x:n.pos.x,z:n.pos.z,seat:null}))}setStick(t,e){let n=Math.hypot(this.stick.x,this.stick.y)>=.15;if(this.stick.x=Number(t)||0,this.stick.y=Number(e)||0,n&&Math.hypot(this.stick.x,this.stick.y)<.15){let s=this.self();s&&this.opts.onMove&&this.opts.onMove({x:s.pos.x,z:s.pos.z,seat:null})}}project(t){let e=t.project(this.cam);return{x:(e.x+1)/2*this.cssW,y:(1-e.y)/2*this.cssH}}placeDom(){let t=this.npc&&this.npc.person?[...this.people.values(),this.npc]:this.people.values();for(let n of t){let s=this.project(n.person.headWorld(this.tmpV).setY(this.tmpV.y+.12));n.anchor=s,n.plateH||(n.plateH=n.plate.offsetHeight||34);let r=Math.round(s.x*2)/2,o=Math.round(s.y*2)/2;if(r!==n.tx||o!==n.ty){n.tx=r,n.ty=o,n.plate.style.transform=`translate3d(${r}px, ${o}px, 0) translate(-50%, -100%)`;let a=Math.round(o)+(n.me?2e3:0);a!==n.z&&(n.z=a,n.plate.style.zIndex=String(a))}}for(let n of this.bubbles){let s=n._p.anchor;if(!s)continue;let r=this.cssW,o=Math.max(120,Math.min(r-120,s.x));n.style.transform=`translate(${o}px, ${s.y-(n._p.plateH||34)-8}px) translate(-50%, -100%)`,n.style.setProperty("--tail",s.x-o+"px")}let e=null;for(let n of this.emotes){if(n._cat){e=e||this.project(this.cat.headWorld(this.tmpV)),n.style.transform=`translate(${e.x}px, ${e.y-8}px) translate(-50%, -100%)`;continue}let s=n._p.anchor;s&&(n.style.transform=`translate(${s.x+24}px, ${s.y-(n._p.plateH||34)-4}px) translate(-50%, -100%)`)}}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.wrap.remove()}},ic=class{constructor(t){this.root=t;let e=document.createElement("canvas");e.className="avatar-preview",t.appendChild(e),this.canvas=e,this.renderer=hf(e),this.renderer.shadowMap.enabled=!1,this.scene=new oi,ff(this.scene,512);let n=new J(new K(.75,.8,.06,40),new se({color:"#dbe9fb",roughness:.6}));n.position.y=-.03,this.scene.add(n),this.cam=new Je(30,1,.1,50),this.cam.position.set(0,1.25,4.1),this.cam.lookAt(0,.75,0),this.angle=.4,this.dead=!1,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let s=performance.now(),r=o=>{if(this.dead)return;this.raf=requestAnimationFrame(r);let a=Math.min(.05,(o-s)/1e3);s=o,this.person&&(this.angle+=a*.6,this.person.root.rotation.y=Math.sin(this.angle)*.9,this.person.animate(a,o/1e3,{moving:!1,speed:0,seated:!1,typing:!1})),this.renderer.render(this.scene,this.cam)};this.raf=requestAnimationFrame(r)}resize(){let t=this.root.clientWidth||220,e=this.root.clientHeight||260;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}update(t){this.person&&this.scene.remove(this.person.root),this.person=new Ti(sc(t),0),this.scene.add(this.person.root)}wave(){this.person&&this.person.doAction("wave",1600)}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.canvas.remove()}};ir.ROOM=fe;ir.PLACES=ec;window.Lobby3D=ir;window.avatarToLook=sc;window.AvatarPreview=ic;var rc=(i,t)=>i+Math.random()*(t-i),bn=i=>i[Math.floor(Math.random()*i.length)],by=i=>new Promise(t=>setTimeout(t,i));function uf(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var Ty=[["C\xE0 ph\xEA kh\xF4ng? \u2615","Ok, ch\xFAt n\u1EEFa nh\xE9!"],["H\xF4m nay nhi\u1EC1u vi\u1EC7c gh\xEA \u{1F605}","C\u1ED1 l\xEAn n\xE0o!"],["Tr\u1EDDi \u0111\u1EB9p gh\xEA ha \u{1F324}","\u0110\xFAng r\u1ED3i!"],["Tr\u01B0a nay \u0103n g\xEC? \u{1F35C}","Ph\u1EDF \u0111i!"],["Xong vi\u1EC7c ch\u01B0a?","S\u1EAFp r\u1ED3i \u{1F4AA}"],["Ngh\u1EC9 tay 5 ph\xFAt nha","\u{1F44D}"]],df={cooler:["U\u1ED1ng mi\u1EBFng n\u01B0\u1EDBc \u{1F4A7}","M\xE1t gh\xEA!"],board:["Xem c\xF2n bao nhi\xEAu vi\u1EC7c\u2026","\u1ED4n \xE1p!"],windowL:["Ng\u1EAFm tr\u1EDDi x\xEDu \u{1F324}"],windowR:["N\u1EAFng \u0111\u1EB9p qu\xE1 \u2600\uFE0F"],shelf:["T\xECm cu\u1ED1n s\xE1ch\u2026","\u0110\xE2y r\u1ED3i \u{1F4D8}"],plant:["T\u01B0\u1EDBi c\xE2y ch\xFAt \u{1F331}"]},oc=class{constructor(t,e){this.root=t,this.opts=e||{},this.people=new Map,this.queue=[],this.busy=!1,this.flyers=[],this.board={wait:0,run:0,done:0},this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas";let s;try{s=new rs({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(c){throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng: "+c.message)}if(!s.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");this.renderer=s,s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=ps,s.toneMapping=Js,s.toneMappingExposure=1.05,s.outputColorSpace=Ee,s.setClearColor(0,0),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.wrap.append(n,this.layer),t.appendChild(this.wrap),this.canvas=n;let r=new oi;this.scene=r,r.fog=null,this.hemi=new hs("#fff4e0","#7a5a44",.85),r.add(this.hemi),r.add(new fs("#ffffff",.18));let o=new li("#ffe7c2",2.1);this.sun=o,o.position.set(-5,11,7),o.target.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-10,right:10,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,r.add(o,o.target);let a=new li("#cfe0ff",.45);a.position.set(8,6,-2),r.add(a),this.world=Kh(r,s),this.cam=new ri(-10,10,6,-6,.1,100),this.view={az:.72,el:.66,zoom:1,target:new D(0,.6,.2)},this.goal={az:.72,el:.66,zoom:1,target:new D(0,.6,.2)},this.updateCamera(),this.nav=new xs(Wt.minX,Wt.minZ,Wt.maxX,Wt.maxZ,.2),this.nav.blockRect(Wt.minX,Wt.minZ,Wt.maxX,Wt.minZ+.25,.15),this.nav.blockRect(Wt.minX,Wt.minZ,Wt.minX+.25,Wt.maxZ,.15),this.nav.blockRect(Wt.maxX-.2,Wt.minZ,Wt.maxX,Wt.maxZ,.15),this.nav.blockRect(Wt.minX,Wt.maxZ-.2,Wt.maxX,Wt.maxZ,.15);for(let c of $h)this.nav.blockRect(...c);for(let c of js)this.nav.blockRect(c.x-_e.w/2,c.z-_e.d/2,c.x+_e.w/2,c.z+_e.d/2),this.nav.blockRect(c.x-.28,c.z+tr-.28,c.x+.28,c.z+tr+.28,.18);this.cat=new _s(r,this.nav),this.confetti=[],this.emotes=new Set,this.applyDaylight(),this.dayT=setInterval(()=>this.applyDaylight(),3e4),this.raycaster=new ds,this.ndc=new Et,this.tmpV=new D,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new us;let l=()=>{this.dead||(this.raf=requestAnimationFrame(l),this.paused||this.frame())};l()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;this.cam.left=-c*l/2,this.cam.right=c*l/2,this.cam.top=c/2,this.cam.bottom=-c/2,this.cam.updateProjectionMatrix()}resetView(){this.goal={az:.72,el:.66,zoom:1,target:new D(0,.6,.2)}}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.updateCamera()}pickDesk(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=this.raycaster.intersectObjects([...this.people.values()].map(r=>r.desk.hit),!1);return s.length&&[...this.people.values()].find(r=>r.desk.hit===s[0].object)||null}pickAny(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=[this.cat.root,...[...this.people.values()].map(a=>a.person.root)],r=this.raycaster.intersectObjects(s,!0);for(let a of r){let l=a.object;for(;l&&l.parent&&l.parent!==this.scene;)l=l.parent;if(l===this.cat.root)return{cat:!0};let c=[...this.people.values()].find(f=>f.person.root===l);if(c)return{p:c}}let o=this.pickDesk(t,e);return o?{p:o}:null}setHover(t,e){for(let n of this.people.values()){let s=n.desk.ring.material;n===t?(s.color.set(e==="drop"?"#2f8cf0":"#ffffff"),s.opacity=e==="drop"?.8:.4):n.state==="error"?(s.color.set("#ef6b6b"),s.opacity=.55):n.state==="working"?(s.color.set("#7cc4f5"),s.opacity=.35):s.opacity=0}}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,az:this.goal.az,el:this.goal.el,t:this.goal.target.clone(),pan:n.button===2||n.shiftKey,moved:!1},t.setPointerCapture(n.pointerId)}),t.addEventListener("pointermove",n=>{if(e){let a=n.clientX-e.x,l=n.clientY-e.y;if(Math.hypot(a,l)>4&&(e.moved=!0),!e.moved)return;if(e.pan){let c=(this.cam.right-this.cam.left)/this.canvas.clientWidth,f=new D(Math.cos(this.view.az),0,-Math.sin(this.view.az)),h=new D(Math.sin(this.view.az),0,Math.cos(this.view.az)),u=e.t.clone().addScaledVector(f,-a*c).addScaledVector(h,-l*c*1.4);u.x=Math.max(-6,Math.min(6,u.x)),u.z=Math.max(-4,Math.min(4.5,u.z)),this.goal.target.copy(u)}else this.goal.az=Math.max(.08,Math.min(1.5,e.az-a*.005)),this.goal.el=Math.max(.32,Math.min(1.25,e.el+l*.0035));t.style.cursor="grabbing";return}let s=n.clientX,r=n.clientY,o=()=>{this.hoverAt=performance.now();let a=this.pickAny(s,r);this.setHover(a&&a.p,"hover"),t.style.cursor=a?"pointer":"grab"};clearTimeout(this.hoverTimer),performance.now()-(this.hoverAt||0)>80?o():this.hoverTimer=setTimeout(o,90)}),t.addEventListener("pointerup",n=>{if(e&&!e.moved){let s=this.pickAny(n.clientX,n.clientY);s&&s.cat?this.petCat():s&&s.p&&(this.opts.onPersonClick?this.opts.onPersonClick(s.p.agent.id,n.clientX,n.clientY):this.opts.onDeskClick&&this.opts.onDeskClick(s.p.agent.id))}e=null,t.style.cursor="grab"}),t.addEventListener("pointerleave",()=>{e||this.setHover(null)}),t.addEventListener("dblclick",n=>{this.pickAny(n.clientX,n.clientY)||this.resetView()}),t.addEventListener("wheel",n=>{n.preventDefault(),this.goal.zoom=Math.max(.75,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,n.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dragover",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY);this.setHover(s,"drop"),this.dragTarget=s}),t.addEventListener("dragleave",()=>{this.setHover(null),this.dragTarget=null}),t.addEventListener("drop",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY)||this.dragTarget;this.setHover(null);let r=n.dataTransfer.getData("text/vp-card");s&&r&&this.opts.onDrop&&this.opts.onDrop(r,s.agent.id)})}setAgents(t,e){this.sources=e||this.sources;let n=new Set;t.forEach((s,r)=>{let o=s.slot!=null&&js[s.slot]?s.slot:r%js.length,a=js[o],l=this.people.get(s.id),c=JSON.stringify([s.shirt,s.hair,s.skin,s.hairStyle,s.isManager,s.isReviewer,s.source,s.model,o]);if(l&&l.sig!==c&&(this.scene.remove(l.person.root),this.scene.remove(l.desk.group),l.dom.forEach(f=>f.remove()),this.people.delete(s.id),l=null),!l){let f=Qh(this.scene,a,s),h=new Ti(s,r),u={x:a.x,z:a.z+tr};h.root.position.set(u.x,0,u.z),this.scene.add(h.root),l={agent:s,person:h,desk:f,slot:a,seat:u,pos:{...u},path:[],speed:1.6,seated:!0,facing:0,faceTo:null,state:"idle",note:"",nextIdle:performance.now()/1e3+rc(6,22),activity:null,locks:0,sig:c,dom:[]},l.person.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.people.set(s.id,l),this.makeDom(l)}l.agent=s,l.person.agent=s,this.updatePlate(l),n.add(s.id)});for(let[s,r]of[...this.people])n.has(s)||(this.scene.remove(r.person.root),this.scene.remove(r.desk.group),r.dom.forEach(o=>o.remove()),this.people.delete(s))}makeDom(t){let e=document.createElement("div");e.className="plate3d",e.innerHTML='<span class="pl-row"><span class="pl-crown">\u{1F451}</span><span class="pl-name"></span><span class="pl-mood"></span><i class="pl-dots"><b></b><b></b><b></b></i><i class="pl-err">!</i></span><span class="pl-sub"><span class="pl-title"></span><span class="pl-src"></span></span><span class="pl-energy"><i style="width:100%"></i></span>',e.title="B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn",e.addEventListener("click",n=>{if(n.detail!==1)return;let s=e.getBoundingClientRect();e._clickT=setTimeout(()=>{e._editing||(this.opts.onPersonClick?this.opts.onPersonClick(t.agent.id,s.left+s.width/2,s.bottom):this.opts.onDeskClick&&this.opts.onDeskClick(t.agent.id))},260)}),e.addEventListener("dblclick",n=>{n.stopPropagation(),clearTimeout(e._clickT),this.inlineRename(t,e)}),e.addEventListener("dragover",n=>{n.preventDefault(),this.setHover(t,"drop")}),e.addEventListener("drop",n=>{n.preventDefault(),this.setHover(null);let s=n.dataTransfer.getData("text/vp-card");s&&this.opts.onDrop&&this.opts.onDrop(s,t.agent.id)}),this.layer.append(e),t.plate=e,t.dom=[e]}inlineRename(t,e){if(e._editing)return;e._editing=!0;let n=e.querySelector(".pl-name"),s=document.createElement("input");s.className="rename3d",s.value=t.agent.name,s.maxLength=30,n.replaceWith(s),s.focus(),s.select();let r=o=>{if(!e._editing)return;e._editing=!1,s.replaceWith(n);let a=s.value.trim();o&&a&&a!==t.agent.name&&this.opts.onRename&&this.opts.onRename(t.agent.id,a)};s.addEventListener("keydown",o=>{o.key==="Enter"&&r(!0),o.key==="Escape"&&r(!1),o.stopPropagation()}),s.addEventListener("blur",()=>r(!0)),s.addEventListener("click",o=>o.stopPropagation())}updatePlate(t){let e=t.agent;t.plate.querySelector(".pl-name").textContent=e.name,t.plate.querySelector(".pl-title").textContent=(e.isManager?"\u2605 ":"")+e.title;let n=t.plate.querySelector(".pl-src");n.className="pl-src src-"+(e.source||"sim").split("-")[0],n.textContent=window.shortSource?window.shortSource(e.source,e.model):e.source}setBoard(t){this.board={...this.board,...t},this.world.drawBoard(this.board)}setStats(t,e){let n=this.people.get(t);if(!n)return;n.energy=e.energy,n.plate.classList.toggle("crowned",!!e.crown),n.plate.querySelector(".pl-mood").textContent=e.emoji||"";let s=n.plate.querySelector(".pl-energy");s.classList.toggle("low",e.energy<30),s.firstChild.style.width=Math.max(4,e.energy)+"%",n.plateH=0}setDecor(t){this.world.setDecor&&this.world.setDecor(t)}async interact(t,e){let n=this.people.get(t);if(!n)return!1;let s=n.state==="working"||n.locks>0,r=(o,a=3e3)=>this.say(n,o,"cute",a);return e==="wave"?(n.person.doAction("wave",2200),this.emote(n,"\u{1F44B}"),await r(bn(s?["Em \u0111ang l\xE0m n\xE8 s\u1EBFp \u{1F4AA}","D\u1EA1, ch\xFAt em xong ngay \u1EA1!"]:["D\u1EA1 s\u1EBFp g\u1ECDi em? \u{1F60A}","Ch\xE0o s\u1EBFp \u1EA1! \u{1F44B}","H\xF4m nay s\u1EBFp kh\u1ECFe kh\xF4ng \u1EA1?","Em s\u1EB5n s\xE0ng nh\u1EADn vi\u1EC7c n\xE8!"])),!0):e==="praise"?(n.person.doAction("cheer",2200),this.emote(n,"\u{1F496}"),setTimeout(()=>this.emote(n,"\u2728"),350),await r(bn(["Hihi c\u1EA3m \u01A1n s\u1EBFp! \u{1F970}","Em s\u1EBD c\u1ED1 g\u1EAFng h\u01A1n n\u1EEFa \u1EA1!","S\u1EBFp khen l\xE0m em vui c\u1EA3 ng\xE0y \u{1F606}"])),!0):e==="dance"?s?(this.emote(n,"\u{1F605}"),await r("\u0110ang l\xE0m vi\u1EC7c, x\xEDu em nh\u1EA3y sau nha!"),!1):(n.person.doAction("dance",3200),n.danceUntil=performance.now()/1e3+3.2,this.emote(n,"\u{1F3B5}"),setTimeout(()=>this.emote(n,"\u{1F3B6}"),900),await r(bn(["La la la~ \u{1F483}","Nh\u1EA1c l\xEAn n\xE0o! \u{1F57A}","T\u0103ng ca kh\xF4ng b\u1EB1ng t\u0103ng vui \u{1F60E}"]),2600),!0):e==="coffee"?s?(this.emote(n,"\u2615"),await r("Xong vi\u1EC7c em u\u1ED1ng li\u1EC1n nha s\u1EBFp \u2615"),!1):(n.activity&&await this.recall(n),this.emote(n,"\u2615"),r("D\u1EA1 em c\u1EA3m \u01A1n s\u1EBFp! \u2615",1600),await this.runActivity(n,"coffee"),!0):!1}petCat(){this.cat.pet();let t=()=>this.project(this.cat.headWorld(this.tmpV2||(this.tmpV2=new D)));this.emoteAt(t,bn(["\u{1F495}","\u{1F497}","\u{1F63B}"])),setTimeout(()=>this.emoteAt(t,bn(["Meo~","Meoww \u{1F495}","R\u1EEB r\u1EEB\u2026"])),300),this.opts.onCat&&this.opts.onCat()}emoteAt(t,e){let n=document.createElement("div");n.className="emote"+(e.length>2?" txt":""),n.textContent=e,n._get=t,e.length>2&&Object.assign(n.style,{fontSize:"13px",fontWeight:"900",color:"#0656b8",background:"#e8f3ff",border:"2px solid #45a2ff",borderRadius:"12px",padding:"2px 8px"}),this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}setTray(t){this.trayCount=t,this.world.setTray(t)}setState(t,e,n){let s=this.people.get(t);s&&(s.state=e,s.note=n||"",s.desk.state=e==="working"?"working":e==="error"?"error":"idle",yo(s.desk,this.t||0,!0),s.plate.classList.toggle("working",e==="working"),s.plate.classList.toggle("error",e==="error"),s.plate.title=e==="error"&&n?"L\u1ED7i: "+n:"B\u1EA5m: c\u1EA5u h\xECnh b\xE0n \xB7 B\u1EA5m \u0111\xFAp: \u0111\u1ED5i t\xEAn",e==="working"&&!s.seated&&!s.locks&&this.recall(s),this.setHover(null))}move(t,e,n){if(t.moveRes){let s=t.moveRes;t.moveRes=null,s(!1)}return t.path=e.slice(),t.speed=n,t.seated=!1,t.faceTo=null,t.path.length?new Promise(s=>{t.moveRes=s}):Promise.resolve(!0)}exitPoint(t,e){let n=e>=t.seat.x?1:-1;return{x:t.seat.x+n*1.2,z:t.seat.z}}walkTo(t,e,n){let s=[],r={x:t.pos.x,z:t.pos.z};if(t.seated||Math.hypot(t.pos.x-t.seat.x,t.pos.z-t.seat.z)<.15){let a=this.exitPoint(t,e.x);s.push(a),r=a}s.push(...this.nav.find(r,e));let o=this.move(t,s,n?3.4:1.7);return t.faceAfter=e.face||null,o}async walkHome(t,e){let n=this.exitPoint(t,t.pos.x),s=[...this.nav.find(t.pos,n),{x:t.seat.x,z:t.seat.z}];t.faceAfter=null;let r=await this.move(t,s,e?3.4:1.7);return r&&(t.seated=!0),r}async recall(t){t.activity&&(t.activity.abort=!0),t.seated||await this.walkHome(t,!0)}enqueue(t){this.queue.push(t),this.busy||this.runQueue()}async runQueue(){for(this.busy=!0;this.queue.length;){let t=this.queue.shift(),e=this.queue.length>=3;try{await this.scene_(t,e)}catch(n){console.error(n)}}this.busy=!1}async scene_(t,e){let n=this.people.get(t.from),s=this.people.get(t.to),r=e?1300:Math.min(4200,1700+t.text.length*15);if(t.from==="boss"&&s){s.locks++;try{s.activity&&await this.recall(s),await this.fly(new D(mo.x,1.6,mo.z+.3),s.person.headWorld(new D).add(new D(0,.3,0)),e?450:1e3),this.emote(s,"\u{1F4CC}"),await this.say(s,"\u{1F4E9} "+t.text,"assign",r)}finally{s.locks--}return}if(n){n.locks++;try{if(n.activity&&await this.recall(n),n.homeP&&await n.homeP,t.to==="boss"){t.kind==="done"?(n.person.carrying=!0,await this.walkTo(n,go.tray,e),n.person.doAction("place",900),await by(e?400:800),this.emote(n,"\u2705"),n.person.carrying=!1,this.world.setTray((this.trayCount||0)+1),this.trayCount=(this.trayCount||0)+1,await this.say(n,t.text,"done",e?1e3:2400),n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})):(t.kind==="plan"&&this.emote(n,"\u{1F4A1}"),await this.say(n,t.text,t.kind,r));return}if(s&&s!==n){s.locks++;try{s.activity&&await this.recall(s),s.homeP&&await s.homeP;let o=n.slot.x<=s.slot.x?-1:1,a={x:s.slot.x+o*.62,z:s.slot.z+_e.d/2+.55,face:{x:s.seat.x,z:s.seat.z}};await this.walkTo(n,a,e);let l={ask:"\u2753",answer:"\u{1F4AC}",review:/cần sửa/i.test(t.text)?"\u270F\uFE0F":"\u{1F44D}",assign:"\u{1F4CB}",done:"\u{1F4E6}"}[t.kind];l&&this.emote(n,l),await this.say(n,t.text,t.kind,r)}finally{s.locks--}n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})}else await this.say(n,t.text,t.kind,r)}finally{n.locks--}}}fly(t,e,n){return new Promise(s=>{let r=new Bt,o=new J(new Rt(.34,.03,.24),new se({color:"#fffaf0",roughness:.8})),a=new J(new K(.04,.04,.01,12),new se({color:"#d9534f"}));a.position.y=.02,r.add(o,a),r.traverse(l=>{l.castShadow=!0}),this.scene.add(r),this.flyers.push({obj:r,a:t,b:e,t0:performance.now(),ms:n,res:s})})}say(t,e,n,s){return new Promise(r=>{let o=document.createElement("div");o.className="bubble3d k-"+(n||"say"),o.style.zIndex="5000",o.textContent=e.length>120?e.slice(0,119)+"\u2026":e,o._p=t,this.layer.appendChild(o),this.bubbles=this.bubbles||new Set,this.bubbles.add(o),t.person.say(Math.min(s,2600)),this.positionBubble(o),requestAnimationFrame(()=>o.classList.add("show")),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(o),o.remove()},220),r()},s)})}idleTick(t){let e=[...this.people.values()].some(n=>n.state==="working");for(let n of this.people.values()){if(n.activity||n.locks||!n.seated||n.state==="working"||n.homeP||t<n.nextIdle||(n.nextIdle=t+(e?rc(25,55):rc(12,32)),this.queue.length||e&&Math.random()<.5))continue;if(n.energy!=null&&n.energy<25&&!e){this.emote(n,"\u{1F62A}"),this.runActivity(n,"coffee");continue}let s=Math.random();if([...this.people.values()].filter(o=>o.activity).length>=2&&s>=.38){n.person.doAction(Math.random()<.5?"stretch":"look",2600);continue}s<.22?n.person.doAction("stretch",2600):s<.38?n.person.doAction("look",3e3):s<.62?this.runActivity(n,"poi"):this.runActivity(n,"chat")}}async runActivity(t,e){let n={abort:!1};t.activity=n;try{if(e==="coffee"){if(!await this.walkTo(t,go.cooler,!1)||n.abort)return;t.person.doAction("drink",2600),await this.say(t,bn(["C\xE0 ph\xEA ngon qu\xE1 \u2615","N\u1EA1p n\u0103ng l\u01B0\u1EE3ng th\xF4i! \u26A1","T\u1EC9nh c\u1EA3 ng\u01B0\u1EDDi \u{1F606}"]),"chat",2400),this.emote(t,"\u26A1"),this.opts.onStat&&this.opts.onStat(t.agent.id,"coffee");return}if(e==="chat"){let s=[...this.people.values()].filter(f=>f!==t&&f.seated&&!f.activity&&f.state!=="working"&&!f.locks);if(!s.length)return;let r=bn(s),o=t.slot.x<=r.slot.x?-1:1;if(!await this.walkTo(t,{x:r.slot.x+o*.62,z:r.slot.z+_e.d/2+.55,face:{x:r.seat.x,z:r.seat.z}},!1)||n.abort)return;let[l,c]=bn(Ty);if(await this.say(t,l,"chat",2200),n.abort)return;r.state!=="working"&&!r.locks&&await this.say(r,c,"chat",1800)}else{let s=bn(Object.keys(df)),r=go[s];if(!await this.walkTo(t,r,!1)||n.abort)return;let a=df[s];if(s==="cooler"?(t.person.doAction("drink",2600),await this.say(t,a[0],"chat",2e3)):s==="plant"?(t.person.doAction("place",1800),await this.say(t,a[0],"chat",1900)):(t.person.doAction("look",2400),await this.say(t,a[0],"chat",2200)),n.abort)return;a[1]&&Math.random()<.6&&await this.say(t,a[1],"chat",1400)}}finally{t.activity===n&&(t.activity=null,!n.abort&&!t.seated&&await this.walkHome(t,!1))}}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t;for(let a of this.world.animated)a(e,t);let n=performance.now()/1e3;this.idleTick(n),this.cat.update(t,n),this.updateConfetti(t);for(let a of this.people.values()){let l=!1;if(a.path.length){let c=a.path[0],f=c.x-a.pos.x,h=c.z-a.pos.z,u=Math.hypot(f,h),d=a.speed*t;if(u<=d){if(a.pos.x=c.x,a.pos.z=c.z,a.path.shift(),!a.path.length&&(a.faceAfter&&(a.faceTo=a.faceAfter),a.moveRes)){let g=a.moveRes;a.moveRes=null,g(!0)}}else a.pos.x+=f/u*d,a.pos.z+=h/u*d;u>.001&&(a.facing=uf(a.facing,Math.atan2(f,h),1-Math.exp(-t*12))),l=a.path.length>0||u>d}else{let c=null;a.seated?c=0:a.faceTo&&(c=Math.atan2(a.faceTo.x-a.pos.x,a.faceTo.z-a.pos.z)),c!==null&&(a.facing=uf(a.facing,c,1-Math.exp(-t*8)))}a.danceUntil&&n<a.danceUntil&&!l&&(a.facing+=t*5),a.person.root.position.set(a.pos.x,0,a.pos.z),a.person.root.rotation.y=a.facing,a.person.animate(t,n,{moving:l,speed:a.speed,seated:a.seated&&!a.path.length,typing:a.seated&&a.state==="working"}),a.desk.state==="working"&&Math.floor(e*10)!==Math.floor((e-t)*10)&&yo(a.desk,e)}for(let a of[...this.flyers]){let l=Math.min(1,(performance.now()-a.t0)/a.ms),c=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;a.obj.position.lerpVectors(a.a,a.b,c),a.obj.position.y+=Math.sin(l*Math.PI)*1.4,a.obj.rotation.set(Math.sin(l*9)*.3,l*6,0),l>=1&&(this.scene.remove(a.obj),this.flyers.splice(this.flyers.indexOf(a),1),a.res())}let s=this.view,r=this.goal,o=1-Math.exp(-t*10);Math.abs(r.az-s.az)+Math.abs(r.el-s.el)+Math.abs(r.zoom-s.zoom)+s.target.distanceTo(r.target)>1e-4&&(s.az+=(r.az-s.az)*o,s.el+=(r.el-s.el)*o,s.zoom*=Math.exp((Math.log(r.zoom)-Math.log(s.zoom))*o),s.target.lerp(r.target,o),this.updateCamera()),this.renderer.render(this.scene,this.cam),this.placeDom()}project(t){let e=t.clone().project(this.cam);return{x:(e.x+1)/2*this.canvas.clientWidth,y:(1-e.y)/2*this.canvas.clientHeight}}positionBubble(t){let e=t._p,n=e.anchor||this.project(e.person.headWorld(this.tmpV)),s=n.y-(e.plateH||34)-10,r=this.canvas.clientWidth,o=Math.max(130,Math.min(r-130,n.x));t.style.transform=`translate(${o}px, ${s}px) translate(-50%, -100%)`,t.style.setProperty("--tail",n.x-o+"px")}placeDom(){for(let t of this.people.values()){let e=t.person.headWorld(this.tmpV);e.y+=.12;let n=this.project(e);t.anchor=n,t.plateH||(t.plateH=t.plate.offsetHeight||34);let s=Math.round(n.x*2)/2,r=Math.round(n.y*2)/2;(s!==t.tx||r!==t.ty)&&(t.tx=s,t.ty=r,t.plate.style.transform=`translate3d(${s}px, ${r}px, 0) translate(-50%, -100%)`,t.plate.style.zIndex=String(Math.round(r)))}if(this.bubbles)for(let t of this.bubbles)this.positionBubble(t);for(let t of this.emotes){if(t._get){let n=t._get();t.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%, -100%)`;continue}let e=t._p.anchor;e&&(t.style.transform=`translate(${e.x+26}px, ${e.y-(t._p.plateH||34)-4}px) translate(-50%, -100%)`)}}emote(t,e){let n=document.createElement("div");n.className="emote",n.textContent=e,n._p=t,this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}celebrate(t){let e=["#f5b54a","#5fd69a","#7cc4f5","#f07070","#b896f0","#ffffff"],n=new ie(.07,.04),s=new D(5.6,1,4.15),r=t&&this.people.get(t),o=[s];r&&o.push(new D(r.pos.x,1.6,r.pos.z));for(let a of o)for(let l=0;l<70;l++){let c=new J(n,new ee({color:e[l%e.length],side:xe}));c.position.copy(a);let f=Math.random()*Math.PI*2,h=1.2+Math.random()*2.2;c.userData={v:new D(Math.cos(f)*h*.6,3+Math.random()*2.5,Math.sin(f)*h*.6),r:new D(Math.random()*8,Math.random()*8,Math.random()*8),life:2.6+Math.random()},this.scene.add(c),this.confetti.push(c)}for(let a of this.people.values())a.state!=="working"&&setTimeout(()=>{a.person.doAction("cheer",2200),this.emote(a,bn(["\u{1F389}","\u{1F44F}","\u{1F973}","\u{1F64C}"]))},Math.random()*500)}updateConfetti(t){for(let e=this.confetti.length-1;e>=0;e--){let n=this.confetti[e],s=n.userData;s.v.y-=6.5*t,s.v.multiplyScalar(1-t*.9),n.position.addScaledVector(s.v,t),n.rotation.x+=s.r.x*t,n.rotation.y+=s.r.y*t,n.rotation.z+=s.r.z*t,n.position.y<.02&&(n.position.y=.02,s.v.set(0,0,0),s.r.set(0,0,0),n.rotation.set(-Math.PI/2,0,n.rotation.z)),s.life-=t,s.life<.6&&(n.material.opacity=Math.max(0,s.life/.6),n.material.transparent=!0),s.life<=0&&(this.scene.remove(n),n.material.dispose(),this.confetti.splice(e,1))}}applyDaylight(t){let e=new Date,n=t??e.getHours()+e.getMinutes()/60,s=n<5||n>19.5?0:n<7?(n-5)/2:n>17.5?(19.5-n)/2:1,r=Math.max(0,1-Math.abs(n-17.8)/1.6)+Math.max(0,1-Math.abs(n-6.2)/1.2),o=new Kt("#ffe7c2").lerp(new Kt("#ffae6b"),Math.min(1,r));this.sun.color.copy(o),this.sun.intensity=.25+1.85*s,this.hemi.intensity=.4+.45*s,this.hemi.color.set(s>.3?"#fff4e0":"#b9c4ff");let a=new Kt("#1c2448").lerp(new Kt("#ffffff"),s).lerp(new Kt("#ffc59a"),Math.min(.6,r*(s>0?.6:0)));for(let c of this.world.skyMats||[])c.color.copy(a);let l=1-s;for(let c of this.world.lamps||[])c.light.intensity=l*6,c.bulbMat.emissiveIntensity=.2+l*2.2;this.world.dust&&(this.world.dust.material.opacity=.15+.45*s),this.renderer.toneMappingExposure=.95+.12*s}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),clearInterval(this.dayT),this.renderer.dispose(),this.wrap.remove()}};window.Office3D=oc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
