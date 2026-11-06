(()=>{var Bl="169";var wf=0,uc=1,Sf=2;var ms=1,bf=2,On=3,ei=0,sn=1,ye=2,Cn=0,Ji=1,kr=2,dc=3,pc=4,Tf=5,yi=100,Rf=101,Af=102,Cf=103,Pf=104,If=200,Lf=201,Df=202,Uf=203,fa=204,ua=205,Nf=206,Hf=207,zf=208,Bf=209,Ff=210,Of=211,kf=212,Gf=213,Vf=214,da=0,pa=1,ma=2,ts=3,ga=4,ya=5,xa=6,_a=7,Eh=0,Wf=1,Xf=2,ti=0,qf=1,Yf=2,Zf=3,Ks=4,$f=5,Jf=6,Kf=7;var wh=300,es=301,ns=302,va=303,Ma=304,fo=306,wn=1e3,vi=1001,Ea=1002,nn=1003,jf=1004;var ar=1005;var Mn=1006,Co=1007;var Mi=1008;var Gn=1009,Sh=1010,bh=1011,Hs=1012,Fl=1013,Ei=1014,An=1015,js=1016,Ol=1017,kl=1018,is=1020,Th=35902,Rh=1021,Ah=1022,En=1023,Ch=1024,Ph=1025,Ki=1026,ss=1027,Gl=1028,Vl=1029,Ih=1030,Wl=1031;var Xl=1033,Nr=33776,Hr=33777,zr=33778,Br=33779,wa=35840,Sa=35841,ba=35842,Ta=35843,Ra=36196,Aa=37492,Ca=37496,Pa=37808,Ia=37809,La=37810,Da=37811,Ua=37812,Na=37813,Ha=37814,za=37815,Ba=37816,Fa=37817,Oa=37818,ka=37819,Ga=37820,Va=37821,Fr=36492,Wa=36494,Xa=36495,Lh=36283,qa=36284,Ya=36285,Za=36286;var Gr=2300,$a=2301,Po=2302,mc=2400,gc=2401,yc=2402;var Qf=3200,tu=3201;var Dh=0,eu=1,Qn="",ve="srgb",ci="srgb-linear",ql="display-p3",uo="display-p3-linear",Vr="linear",Ee="srgb",Wr="rec709",Xr="p3";var Di=7680;var xc=519,nu=512,iu=513,su=514,Uh=515,ru=516,ou=517,au=518,lu=519,_c=35044;var vc="300 es",kn=2e3,qr=2001,ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Io=Math.PI/180,Ja=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function cu(i,t){return(i%t+t)%t}function Lo(i,t,e){return(1-e)*i+e*t}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],m=n[5],p=n[8],_=s[0],g=s[3],d=s[6],M=s[1],x=s[4],v=s[7],R=s[2],S=s[5],b=s[8];return r[0]=o*_+a*M+l*R,r[3]=o*g+a*x+l*S,r[6]=o*d+a*v+l*b,r[1]=c*_+f*M+h*R,r[4]=c*g+f*x+h*S,r[7]=c*d+f*v+h*b,r[2]=u*_+m*M+p*R,r[5]=u*g+m*x+p*S,r[8]=u*d+m*v+p*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,m=c*r-o*l,p=e*h+n*u+s*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=h*_,t[1]=(s*c-f*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Do=new oe;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hu(){let i=zs("canvas");return i.style.display="block",i}var Mc={};function Or(i){i in Mc||(Mc[i]=!0,console.warn(i))}function fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function uu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function du(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ec=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[ci]:{transfer:Vr,primaries:Wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ve]:{transfer:Ee,primaries:Wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[uo]:{transfer:Vr,primaries:Xr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(wc),fromReference:i=>i.applyMatrix3(Ec)},[ql]:{transfer:Ee,primaries:Xr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(wc),fromReference:i=>i.applyMatrix3(Ec).convertLinearToSRGB()}},pu=new Set([ci,uo]),me={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ws[t].toReference,s=ws[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ws[i].primaries},getTransfer:function(i){return i===Qn?Vr:ws[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ws[t].luminanceCoefficients)}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Uo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=zs("canvas")),Ui.width=t.width,Ui.height=t.height;let n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mu=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(No(s[o].image)):r.push(No(s[o]))}else r=No(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function No(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gu=0,je=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=Mn,o=Mi,a=En,l=Gn,c=i.DEFAULT_ANISOTROPY,f=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=gs(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=wh;je.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],p=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(m+1)/2,R=(d+1)/2,S=(f+u)/4,b=(h+_)/4,I=(p+g)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=b/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(h-_)/M,this.z=(u-f)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[o+0],m=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=p,t[e+3]=_;return}if(h!==_||l!==u||c!==m||f!==p){let g=1-a,d=l*u+c*m+f*p+h*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),S=Math.atan2(R,d*M);g=Math.sin(g*S)/R,a=Math.sin(a*S)/R}let v=a*M;if(l=l*g+u*v,c=c*g+m*v,f=f*g+p*v,h=h*g+_*v,g===1-a){let R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],u=r[o+1],m=r[o+2],p=r[o+3];return t[e]=a*p+f*h+l*m-c*u,t[e+1]=l*p+f*u+c*h-a*m,t[e+2]=c*p+f*m+a*u-l*h,t[e+3]=f*p-a*h-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),u=l(n/2),m=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*m*p,this._y=c*m*h-u*f*p,this._z=c*f*p+u*m*h,this._w=c*f*h-u*m*p;break;case"YXZ":this._x=u*f*h+c*m*p,this._y=c*m*h-u*f*p,this._z=c*f*p-u*m*h,this._w=c*f*h+u*m*p;break;case"ZXY":this._x=u*f*h-c*m*p,this._y=c*m*h+u*f*p,this._z=c*f*p+u*m*h,this._w=c*f*h-u*m*p;break;case"ZYX":this._x=u*f*h-c*m*p,this._y=c*m*h+u*f*p,this._z=c*f*p-u*m*h,this._w=c*f*h+u*m*p;break;case"YZX":this._x=u*f*h+c*m*p,this._y=c*m*h+u*f*p,this._z=c*f*p-u*m*h,this._w=c*f*h-u*m*p;break;case"XZY":this._x=u*f*h-c*m*p,this._y=c*m*h-u*f*p,this._z=c*f*p+u*m*h,this._w=c*f*h+u*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+a+h;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+f)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ho=new L,Sc=new Pn,Wn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),cr.subVectors(this.max,Ss),Ni.subVectors(t.a,Ss),Hi.subVectors(t.b,Ss),zi.subVectors(t.c,Ss),Yn.subVectors(Hi,Ni),Zn.subVectors(zi,Hi),hi.subVectors(Ni,zi);let e=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!zo(e,Ni,Hi,zi,cr)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Ni,Hi,zi,cr))?!1:(hr.crossVectors(Yn,Zn),e=[hr.x,hr.y,hr.z],zo(e,Ni,Hi,zi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,lr=new Wn,Ni=new L,Hi=new L,zi=new L,Yn=new L,Zn=new L,hi=new L,Ss=new L,cr=new L,hr=new L,fi=new L;function zo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),f=n.dot(fi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var yu=new Wn,bs=new L,Bo=new L,ii=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Bo)),this.expandByPoint(bs.copy(t.center).sub(Bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new L,Fo=new L,fr=new L,$n=new L,Oo=new L,ur=new L,ko=new L,Bs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Fo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=$n.dot(this.direction),l=-$n.dot(fr),c=$n.lengthSq(),f=Math.abs(1-o*o),h,u,m,p;if(f>0)if(h=o*l-a,u=o*a-l,p=r*f,h>=0)if(u>=-p)if(u<=p){let _=1/f;h*=_,u*=_,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fo).addScaledVector(fr,u),m}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){Oo.subVectors(e,t),ur.subVectors(n,t),ko.crossVectors(Oo,ur);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);let l=a*this.direction.dot(ur.crossVectors($n,ur));if(l<0)return null;let c=a*this.direction.dot(Oo.cross($n));if(c<0||l+c>o)return null;let f=-a*$n.dot(ko);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,l,c,f,h,u,m,p,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,u,m,p,_,g)}set(t,e,n,s,r,o,a,l,c,f,h,u,m,p,_,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=p,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,m=o*h,p=a*f,_=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=m+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+m*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,m=l*h,p=c*f,_=c*h;e[0]=u+_*a,e[4]=p*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=m*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,m=l*h,p=c*f,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=p+m*a,e[1]=m+p*a,e[5]=o*f,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,m=o*h,p=a*f,_=a*h;e[0]=l*f,e[4]=p*c-m,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=m*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,p=a*l,_=a*c;e[0]=l*f,e[4]=_-u*h,e[8]=p*h+m,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=m*h+p,e[10]=u-_*h}else if(t.order==="XZY"){let u=o*l,m=o*c,p=a*l,_=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+_,e[5]=o*f,e[9]=m*h-p,e[2]=p*h-m,e[6]=a*f,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,_u)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Jn.crossVectors(n,cn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Jn.crossVectors(n,cn)),Jn.normalize(),dr.crossVectors(cn,Jn),s[0]=Jn.x,s[4]=dr.x,s[8]=cn.x,s[1]=Jn.y,s[5]=dr.y,s[9]=cn.y,s[2]=Jn.z,s[6]=dr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],m=n[13],p=n[2],_=n[6],g=n[10],d=n[14],M=n[3],x=n[7],v=n[11],R=n[15],S=s[0],b=s[4],I=s[8],U=s[12],y=s[1],E=s[5],H=s[9],F=s[13],P=s[2],W=s[6],z=s[10],nt=s[14],$=s[3],J=s[7],ot=s[11],ct=s[15];return r[0]=o*S+a*y+l*P+c*$,r[4]=o*b+a*E+l*W+c*J,r[8]=o*I+a*H+l*z+c*ot,r[12]=o*U+a*F+l*nt+c*ct,r[1]=f*S+h*y+u*P+m*$,r[5]=f*b+h*E+u*W+m*J,r[9]=f*I+h*H+u*z+m*ot,r[13]=f*U+h*F+u*nt+m*ct,r[2]=p*S+_*y+g*P+d*$,r[6]=p*b+_*E+g*W+d*J,r[10]=p*I+_*H+g*z+d*ot,r[14]=p*U+_*F+g*nt+d*ct,r[3]=M*S+x*y+v*P+R*$,r[7]=M*b+x*E+v*W+R*J,r[11]=M*I+x*H+v*z+R*ot,r[15]=M*U+x*F+v*nt+R*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],m=t[14],p=t[3],_=t[7],g=t[11],d=t[15];return p*(+r*l*h-s*c*h-r*a*u+n*c*u+s*a*m-n*l*m)+_*(+e*l*m-e*c*u+r*o*u-s*o*m+s*c*f-r*l*f)+g*(+e*c*h-e*a*m-r*o*h+n*o*m+r*a*f-n*c*f)+d*(-s*a*f-e*l*h+e*a*u+s*o*h-n*o*u+n*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],m=t[11],p=t[12],_=t[13],g=t[14],d=t[15],M=h*g*c-_*u*c+_*l*m-a*g*m-h*l*d+a*u*d,x=p*u*c-f*g*c-p*l*m+o*g*m+f*l*d-o*u*d,v=f*_*c-p*h*c+p*a*m-o*_*m-f*a*d+o*h*d,R=p*h*l-f*_*l-p*a*u+o*_*u+f*a*g-o*h*g,S=e*M+n*x+s*v+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/S;return t[0]=M*b,t[1]=(_*u*r-h*g*r-_*s*m+n*g*m+h*s*d-n*u*d)*b,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*d+n*l*d)*b,t[3]=(h*l*r-a*u*r-h*s*c+n*u*c+a*s*m-n*l*m)*b,t[4]=x*b,t[5]=(f*g*r-p*u*r+p*s*m-e*g*m-f*s*d+e*u*d)*b,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*d-e*l*d)*b,t[7]=(o*u*r-f*l*r+f*s*c-e*u*c-o*s*m+e*l*m)*b,t[8]=v*b,t[9]=(p*h*r-f*_*r-p*n*m+e*_*m+f*n*d-e*h*d)*b,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*d+e*a*d)*b,t[11]=(f*a*r-o*h*r-f*n*c+e*h*c+o*n*m-e*a*m)*b,t[12]=R*b,t[13]=(f*_*s-p*h*s+p*n*u-e*_*u-f*n*g+e*h*g)*b,t[14]=(p*a*s-o*_*s-p*n*l+e*_*l+o*n*g-e*a*g)*b,t[15]=(o*h*s-f*a*s+f*n*l-e*h*l-o*n*u+e*a*u)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,m=r*f,p=r*h,_=o*f,g=o*h,d=a*h,M=l*c,x=l*f,v=l*h,R=n.x,S=n.y,b=n.z;return s[0]=(1-(_+d))*R,s[1]=(m+v)*R,s[2]=(p-x)*R,s[3]=0,s[4]=(m-v)*S,s[5]=(1-(u+d))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(p+x)*b,s[9]=(g-M)*b,s[10]=(1-(u+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,f=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let l=this.elements,c=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),m,p;if(a===kn)m=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===qr)m=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let l=this.elements,c=1/(e-t),f=1/(n-s),h=1/(o-r),u=(e+t)*c,m=(n+s)*f,p,_;if(a===kn)p=(o+r)*h,_=-2*h;else if(a===qr)p=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new L,xn=new ae,xu=new L(0,0,0),_u=new L(1,1,1),Jn=new L,dr=new L,cn=new L,bc=new ae,Tc=new Pn,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vu=0,Rc=new L,Fi=new Pn,zn=new ae,pr=new L,Ts=new L,Mu=new L,Eu=new Pn,Ac=new L(1,0,0),Cc=new L(0,1,0),Pc=new L(0,0,1),Ic={type:"added"},wu={type:"removed"},Oi={type:"childadded",child:null},Go={type:"childremoved",child:null},De=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new In,n=new Pn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new oe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ts,pr,this.up):zn.lookAt(pr,Ts,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(zn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wu),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),m=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new L,Bn=new L,Vo=new L,Fn=new L,ki=new L,Gi=new L,Lc=new L,Wo=new L,Xo=new L,qo=new L,Yo=new xe,Zo=new xe,$o=new xe,xi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Bn.subVectors(n,e),Vo.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Bn),l=_n.dot(Vo),c=Bn.dot(Bn),f=Bn.dot(Vo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,m=(c*l-a*f)*u,p=(o*f-a*l)*u;return r.set(1-m-p,p,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yo.setScalar(0),Zo.setScalar(0),$o.setScalar(0),Yo.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yo,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector($o,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Bn.subVectors(t,e),_n.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),_n.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ki.subVectors(s,n),Gi.subVectors(r,n),Wo.subVectors(t,n);let l=ki.dot(Wo),c=Gi.dot(Wo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,s);let f=ki.dot(Xo),h=Gi.dot(Xo);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(ki,o);qo.subVectors(t,r);let m=ki.dot(qo),p=Gi.dot(qo);if(p>=0&&m<=p)return e.copy(r);let _=m*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Gi,a);let g=f*p-m*h;if(g<=0&&h-f>=0&&m-p>=0)return Lc.subVectors(r,s),a=(h-f)/(h-f+(m-p)),e.copy(s).addScaledVector(Lc,a);let d=1/(g+_+u);return o=_*d,a=u*d,e.copy(n).addScaledVector(ki,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Jo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=cu(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Jo(o,r,t+1/3),this.g=Jo(o,r,t),this.b=Jo(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Uo(t.r),this.g=Uo(t.g),this.b=Uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return me.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Xe(Ze.r*255,0,255))*65536+Math.round(Xe(Ze.g*255,0,255))*256+Math.round(Xe(Ze.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=ve){me.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(mr);let n=Lo(Kn.h,mr.h,e),s=Lo(Kn.s,mr.s,e),r=Lo(Kn.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new $t;$t.NAMES=Hh;var Su=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Ji,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=ua,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ee=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new L,gr=new Mt,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}};var $r=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jr=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},bu=0,dn=new ae,Ko=new De,Vi=new L,hn=new Wn,Rs=new Wn,Ge=new L,Re=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Jr:$r)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(hn.min,Rs.min),hn.expandByPoint(Ge),Ge.addVectors(hn.max,Rs.max),hn.expandByPoint(Ge)):(hn.expandByPoint(Rs.min),hn.expandByPoint(Rs.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ge.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(t,c),Ge.add(Vi)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let c=new L,f=new L,h=new L,u=new Mt,m=new Mt,p=new Mt,_=new L,g=new L;function d(I,U,y){c.fromBufferAttribute(n,I),f.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(r,I),m.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),f.sub(c),h.sub(c),m.sub(u),p.sub(u);let E=1/(m.x*p.y-p.x*m.y);isFinite(E)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(h,-m.y).multiplyScalar(E),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(E),a[I].add(_),a[U].add(_),a[y].add(_),l[I].add(g),l[U].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,U=M.length;I<U;++I){let y=M[I],E=y.start,H=y.count;for(let F=E,P=E+H;F<P;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let x=new L,v=new L,R=new L,S=new L;function b(I){R.fromBufferAttribute(s,I),S.copy(R);let U=a[I];x.copy(U),x.sub(R.multiplyScalar(R.dot(U))).normalize(),v.crossVectors(S,U);let E=v.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,E)}for(let I=0,U=M.length;I<U;++I){let y=M[I],E=y.start,H=y.count;for(let F=E,P=E+H;F<P;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,f=new L,h=new L;if(t)for(let u=0,m=t.count;u<m;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(f),l.add(f),c.add(f),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),m=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*f;for(let d=0;d<f;d++)u[p++]=c[m++]}return new ze(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let m=c[h];f.push(m.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dc=new ae,ui=new Bs,yr=new ii,Uc=new L,xr=new L,_r=new L,vr=new L,jo=new L,Mr=new L,Nc=new L,Er=new L,q=class extends De{constructor(t=new Re,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(jo.fromBufferAttribute(h,t),o?Mr.addScaledVector(jo,f):Mr.addScaledVector(jo.sub(e),f))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(yr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(yr,Uc)===null||ui.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],d=o[g.materialIndex],M=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let v=M,R=x;v<R;v+=3){let S=a.getX(v),b=a.getX(v+1),I=a.getX(v+2);s=wr(this,d,t,n,c,f,h,S,b,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=p,d=_;g<d;g+=3){let M=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=wr(this,o,t,n,c,f,h,M,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],d=o[g.materialIndex],M=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=M,R=x;v<R;v+=3){let S=v,b=v+1,I=v+2;s=wr(this,d,t,n,c,f,h,S,b,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=p,d=_;g<d;g+=3){let M=g,x=g+1,v=g+2;s=wr(this,o,t,n,c,f,h,M,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Tu(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;Er.copy(a),Er.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function wr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,xr),i.getVertexPosition(l,_r),i.getVertexPosition(c,vr);let f=Tu(i,t,e,n,xr,_r,vr,Nc);if(f){let h=new L;xi.getBarycoord(Nc,xr,_r,vr,h),s&&(f.uv=xi.getInterpolatedAttribute(s,a,l,c,h,new Mt)),r&&(f.uv1=xi.getInterpolatedAttribute(r,a,l,c,h,new Mt)),o&&(f.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};xi.getNormal(xr,_r,vr,u.normal),f.face=u,f.barycoord=h}return f}var St=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,m=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(h,2));function p(_,g,d,M,x,v,R,S,b,I,U){let y=v/b,E=R/I,H=v/2,F=R/2,P=S/2,W=b+1,z=I+1,nt=0,$=0,J=new L;for(let ot=0;ot<z;ot++){let ct=ot*E-F;for(let bt=0;bt<W;bt++){let It=bt*y-H;J[_]=It*M,J[g]=ct*x,J[d]=P,c.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[d]=S>0?1:-1,f.push(J.x,J.y,J.z),h.push(bt/b),h.push(1-ot/I),nt+=1}}for(let ot=0;ot<I;ot++)for(let ct=0;ct<b;ct++){let bt=u+ct+W*ot,It=u+ct+W*(ot+1),et=u+(ct+1)+W*(ot+1),ht=u+(ct+1)+W*ot;l.push(bt,It,ht),l.push(It,et,ht),$+=6}a.addGroup(m,$,U),m+=$,u+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ru(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Au={clone:rs,merge:Ke},Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Kr=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new L,Hc=new Mt,zc=new Mt,$e=class extends Kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,zc),e.subVectors(zc,Hc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wi=-90,Xi=1,tl=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Wi,Xi,t,e);s.layers=this.layers,this.add(s);let r=new $e(Wi,Xi,t,e);r.layers=this.layers,this.add(r);let o=new $e(Wi,Xi,t,e);o.layers=this.layers,this.add(o);let a=new $e(Wi,Xi,t,e);a.layers=this.layers,this.add(a);let l=new $e(Wi,Xi,t,e);l.layers=this.layers,this.add(l);let c=new $e(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,u,m),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jr=class extends je{constructor(t,e,n,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},el=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new St(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Cn});r.uniforms.tEquirect.value=e;let o=new q(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Mn),new tl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qo=new L,Iu=new L,Lu=new oe,vn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qo.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lu.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},di=new ii,Sr=new L,Os=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],m=s[8],p=s[9],_=s[10],g=s[11],d=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,g-m,v-d).normalize(),n[1].setComponents(l+r,u+c,g+m,v+d).normalize(),n[2].setComponents(l+o,u+f,g+p,v+M).normalize(),n[3].setComponents(l-o,u-f,g-p,v-M).normalize(),n[4].setComponents(l-a,u-h,g-_,v-x).normalize(),e===kn)n[5].setComponents(l+a,u+h,g+_,v+x).normalize();else if(e===qr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Du(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((m,p)=>m.start-p.start);let u=0;for(let m=1;m<h.length;m++){let p=h[u],_=h[m];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,h[u]=_)}h.length=u+1;for(let m=0,p=h.length;m<p;m++){let _=h[m];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ie=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,m=[],p=[],_=[],g=[];for(let d=0;d<f;d++){let M=d*u-o;for(let x=0;x<c;x++){let v=x*h-r;p.push(v,-M,0),_.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let x=M+c*d,v=M+c*(d+1),R=M+1+c*(d+1),S=M+1+c*d;m.push(x,v,S),m.push(v,R,S)}this.setIndex(m),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,Zu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,id=`#define PI 3.141592653589793
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
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rd=`vec3 transformedNormal = objectNormal;
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
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`
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
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
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
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Ld=`struct PhysicalMaterial {
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
}`,Dd=`
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,t0=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,n0=`#define PHONG
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
}`,i0=`#define STANDARD
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
}`,s0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,o0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 color;
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
}`,f0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Uu,alphahash_pars_fragment:Nu,alphamap_fragment:Hu,alphamap_pars_fragment:zu,alphatest_fragment:Bu,alphatest_pars_fragment:Fu,aomap_fragment:Ou,aomap_pars_fragment:ku,batching_pars_vertex:Gu,batching_vertex:Vu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:Yu,bumpmap_pars_fragment:Zu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:ju,color_fragment:Qu,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:rd,displacementmap_pars_vertex:od,displacementmap_vertex:ad,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:fd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Td,envmap_vertex:gd,fog_vertex:yd,fog_pars_vertex:xd,fog_fragment:_d,fog_pars_fragment:vd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:Ed,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Sd,lights_pars_begin:bd,lights_toon_fragment:Rd,lights_toon_pars_fragment:Ad,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Id,lights_physical_pars_fragment:Ld,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:Fd,map_fragment:Od,map_pars_fragment:kd,map_particle_fragment:Gd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:Zd,morphtarget_pars_vertex:$d,morphtarget_vertex:Jd,normal_fragment_begin:Kd,normal_fragment_maps:jd,normal_pars_fragment:Qd,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:fp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:yp,shadowmask_pars_fragment:xp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:Mp,skinnormal_vertex:Ep,specularmap_fragment:wp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Tp,transmission_fragment:Rp,transmission_pars_fragment:Ap,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Ip,worldpos_vertex:Lp,background_vert:Dp,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Hp,cube_vert:zp,cube_frag:Bp,depth_vert:Fp,depth_frag:Op,distanceRGBA_vert:kp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:Zp,meshlambert_vert:$p,meshlambert_frag:Jp,meshmatcap_vert:Kp,meshmatcap_frag:jp,meshnormal_vert:Qp,meshnormal_frag:t0,meshphong_vert:e0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:s0,meshtoon_vert:r0,meshtoon_frag:o0,points_vert:a0,points_frag:l0,shadow_vert:c0,shadow_frag:h0,sprite_vert:f0,sprite_frag:u0},At={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Rn={basic:{uniforms:Ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Ke([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Ke([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Ke([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Ke([At.points,At.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Ke([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Ke([At.common,At.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Ke([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Ke([At.sprite,At.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Ke([At.common,At.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Ke([At.lights,At.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Rn.physical={uniforms:Ke([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var br={r:0,b:0,g:0},pi=new In,d0=new ae;function p0(i,t,e,n,s,r,o){let a=new $t(0),l=r===!0?0:1,c,f,h=null,u=0,m=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,v=p(M);v===null?d(a,l):v&&v.isColor&&(d(v,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){let v=p(x);v&&(v.isCubeTexture||v.mapping===fo)?(f===void 0&&(f=new q(new St(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:rs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),pi.copy(x.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(pi)),f.material.toneMapped=me.getTransfer(v.colorSpace)!==Ee,(h!==v||u!==v.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,h=v,u=v.version,m=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new q(new ie(2,2),new Ln({name:"BackgroundMaterial",uniforms:rs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,x){M.getRGB(br,zh(i)),n.buffers.color.setClear(br.r,br.g,br.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:g}}function m0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(y,E,H,F,P){let W=!1,z=h(F,H,E);r!==z&&(r=z,c(r.object)),W=m(y,F,H,P),W&&p(y,F,H,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(y,E,H,F),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function h(y,E,H){let F=H.wireframe===!0,P=n[y.id];P===void 0&&(P={},n[y.id]=P);let W=P[E.id];W===void 0&&(W={},P[E.id]=W);let z=W[F];return z===void 0&&(z=u(l()),W[F]=z),z}function u(y){let E=[],H=[],F=[];for(let P=0;P<e;P++)E[P]=0,H[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,E,H,F){let P=r.attributes,W=E.attributes,z=0,nt=H.getAttributes();for(let $ in nt)if(nt[$].location>=0){let ot=P[$],ct=W[$];if(ct===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ot===void 0||ot.attribute!==ct||ct&&ot.data!==ct.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function p(y,E,H,F){let P={},W=E.attributes,z=0,nt=H.getAttributes();for(let $ in nt)if(nt[$].location>=0){let ot=W[$];ot===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));let ct={};ct.attribute=ot,ot&&ot.data&&(ct.data=ot.data),P[$]=ct,z++}r.attributes=P,r.attributesNum=z,r.index=F}function _(){let y=r.newAttributes;for(let E=0,H=y.length;E<H;E++)y[E]=0}function g(y){d(y,0)}function d(y,E){let H=r.newAttributes,F=r.enabledAttributes,P=r.attributeDivisors;H[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),P[y]!==E&&(i.vertexAttribDivisor(y,E),P[y]=E)}function M(){let y=r.newAttributes,E=r.enabledAttributes;for(let H=0,F=E.length;H<F;H++)E[H]!==y[H]&&(i.disableVertexAttribArray(H),E[H]=0)}function x(y,E,H,F,P,W,z){z===!0?i.vertexAttribIPointer(y,E,H,P,W):i.vertexAttribPointer(y,E,H,F,P,W)}function v(y,E,H,F){_();let P=F.attributes,W=H.getAttributes(),z=E.defaultAttributeValues;for(let nt in W){let $=W[nt];if($.location>=0){let J=P[nt];if(J===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){let ot=J.normalized,ct=J.itemSize,bt=t.get(J);if(bt===void 0)continue;let It=bt.buffer,et=bt.type,ht=bt.bytesPerElement,xt=et===i.INT||et===i.UNSIGNED_INT||J.gpuType===Fl;if(J.isInterleavedBufferAttribute){let yt=J.data,Ut=yt.stride,Gt=J.offset;if(yt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<$.locationSize;Xt++)d($.location+Xt,yt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Xt=0;Xt<$.locationSize;Xt++)g($.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Xt=0;Xt<$.locationSize;Xt++)x($.location+Xt,ct/$.locationSize,et,ot,Ut*ht,(Gt+ct/$.locationSize*Xt)*ht,xt)}else{if(J.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)d($.location+yt,J.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let yt=0;yt<$.locationSize;yt++)g($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let yt=0;yt<$.locationSize;yt++)x($.location+yt,ct/$.locationSize,et,ot,ct*ht,ct/$.locationSize*yt*ht,xt)}}else if(z!==void 0){let ot=z[nt];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv($.location,ot);break;case 3:i.vertexAttrib3fv($.location,ot);break;case 4:i.vertexAttrib4fv($.location,ot);break;default:i.vertexAttrib1fv($.location,ot)}}}}M()}function R(){I();for(let y in n){let E=n[y];for(let H in E){let F=E[H];for(let P in F)f(F[P].object),delete F[P];delete E[H]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let H in E){let F=E[H];for(let P in F)f(F[P].object),delete F[P];delete E[H]}delete n[y.id]}function b(y){for(let E in n){let H=n[E];if(H[y.id]===void 0)continue;let F=H[y.id];for(let P in F)f(F[P].object),delete F[P];delete H[y.id]}}function I(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function g0(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let m=0;for(let p=0;p<h;p++)m+=f[p];e.update(m,n,1)}function l(c,f,h,u){if(h===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)o(c[p],f[p],u[p]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,f,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];for(let _=0;_<u.length;_++)e.update(p,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==En&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let I=b===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Gn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!I)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:S}}function x0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new vn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let m=h.length!==0||u||n!==0||s;return s=u,n=h.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,m){let p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?f(null):c();else{let M=r?0:n,x=M*4,v=d.clippingState||null;l.value=v,v=f(p,u,x,m);for(let R=0;R!==x;++R)v[R]=e[R];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,m,p){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let d=m+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,v=m;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function _0(i){let t=new WeakMap;function e(o,a){return a===va?o.mapping=es:a===Ma&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===va||a===Ma)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new el(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ri=class extends Kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zi=4,Bc=[.125,.215,.35,.446,.526,.582],_i=20,ta=new ri,Fc=new $t,ea=null,na=0,ia=0,sa=!1,gi=(1+Math.sqrt(5))/2,qi=1/gi,Oc=[new L(-gi,qi,0),new L(gi,qi,0),new L(-qi,0,gi),new L(qi,0,gi),new L(0,gi,-qi),new L(0,gi,qi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Qr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:js,format:En,colorSpace:ci,depthBuffer:!1},s=kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(r)),this._blurMaterial=M0(r,t,e)}return s}_compileMaterial(t){let e=new q(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,s){let a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Fc),f.toneMapping=ti,f.autoClear=!1;let m=new ee({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),p=new q(new St,m),_=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,_=!0):(m.color.copy(Fc),_=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;Tr(s,M*x,d>2?x:0,x,x),f.setRenderTarget(s),_&&f.render(p,a),f.render(t,a)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oc[(s-r-1)%Oc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new q(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_i-1),_=r/p,g=isFinite(r)?1+Math.floor(f*_):_i;g>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_i}`);let d=[],M=0;for(let b=0;b<_i;++b){let I=b/_,U=Math.exp(-I*I/2);d.push(U),b===0?M+=U:b<g&&(M+=2*U)}for(let b=0;b<d.length;b++)d[b]=d[b]/M;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;let v=this._sizeLods[s],R=3*v*(s>x-Zi?s-x+Zi:0),S=4*(this._cubeSize-v);Tr(e,R,S,3*v,2*v),l.setRenderTarget(e),l.render(h,ta)}};function v0(i){let t=[],e=[],n=[],s=i,r=i-Zi+1+Bc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Zi?l=Bc[o-i+Zi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,p=6,_=3,g=2,d=1,M=new Float32Array(_*p*m),x=new Float32Array(g*p*m),v=new Float32Array(d*p*m);for(let S=0;S<m;S++){let b=S%3*2/3-1,I=S>2?0:-1,U=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];M.set(U,_*p*S),x.set(u,g*p*S);let y=[S,S,S,S,S,S];v.set(y,d*p*S)}let R=new Re;R.setAttribute("position",new ze(M,_)),R.setAttribute("uv",new ze(x,g)),R.setAttribute("faceIndex",new ze(v,d)),t.push(R),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kc(i,t,e){let n=new Vn(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M0(i,t,e){let n=new Float32Array(_i),s=new L(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Gc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Vc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function E0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===va||l===Ma,f=l===es||l===ns;if(c||f){let h=t.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Qr(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||f&&m&&s(m)?(e===null&&(e=new Qr(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);for(let p in u.morphAttributes){let _=u.morphAttributes[p];for(let g=0,d=_.length;g<d;g++)t.remove(_[g])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let p in m){let _=m[p];for(let g=0,d=_.length;g<d;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(h){let u=[],m=h.index,p=h.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let x=0,v=M.length;x<v;x+=3){let R=M[x+0],S=M[x+1],b=M[x+2];u.push(R,S,S,b,b,R)}}else if(p!==void 0){let M=p.array;_=p.version;for(let x=0,v=M.length/3-1;x<v;x+=3){let R=x+0,S=x+1,b=x+2;u.push(R,S,S,b,b,R)}}else return;let g=new(Nh(u)?Jr:$r)(u,1);g.version=_;let d=r.get(h);d&&t.remove(d),r.set(h,g)}function f(h){let u=r.get(h);if(u){let m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function b0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*o),e.update(m,n,1)}function c(u,m,p){p!==0&&(i.drawElementsInstanced(n,m,r,u*o,p),e.update(m,n,p))}function f(u,m,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,p);let g=0;for(let d=0;d<p;d++)g+=m[d];e.update(g,n,1)}function h(u,m,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)c(u[d]/o,m[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,_,0,p);let d=0;for(let M=0;M<p;M++)d+=m[M];for(let M=0;M<_.length;M++)e.update(d,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function T0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function R0(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let U=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;m===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*R*4*h),b=new Zr(S,v,R,h);b.type=An,b.needsUpdate=!0;let I=x*4;for(let y=0;y<h;y++){let E=g[y],H=d[y],F=M[y],P=v*R*4*y;for(let W=0;W<E.count;W++){let z=W*I;m===!0&&(s.fromBufferAttribute(E,W),S[P+z+0]=s.x,S[P+z+1]=s.y,S[P+z+2]=s.z,S[P+z+3]=0),p===!0&&(s.fromBufferAttribute(H,W),S[P+z+4]=s.x,S[P+z+5]=s.y,S[P+z+6]=s.z,S[P+z+7]=0),_===!0&&(s.fromBufferAttribute(F,W),S[P+z+8]=s.x,S[P+z+9]=s.y,S[P+z+10]=s.z,S[P+z+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:b,size:new Mt(v,R)},n.set(a,u),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let p=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function A0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var to=class extends je{constructor(t,e,n,s,r,o,a,l,c,f=Ki){if(f!==Ki&&f!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ki&&(n=Ei),n===void 0&&f===ss&&(n=is),super(null,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fh=new je,Wc=new to(1,1),Oh=new Zr,kh=new Qa,Gh=new jr,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),$c=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function po(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function C0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function D0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Fe(e,n)}}function U0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Fe(e,n)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Fe(e,n)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function O0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function W0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wc.compareFunction=Uh,r=Wc):r=Fh,e.setTexture2D(t||r,s)}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gh,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function Z0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return H0;case 35667:case 35671:return z0;case 35668:case 35672:return B0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return k0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function $0(i,t){i.uniform1fv(this.addr,t)}function J0(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function j0(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Q0(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function am(i,t){i.uniform2uiv(this.addr,t)}function lm(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){let n=this.cache,s=t.length,r=po(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function fm(i,t,e){let n=this.cache,s=t.length,r=po(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kh,r[o])}function um(i,t,e){let n=this.cache,s=t.length,r=po(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gh,r[o])}function dm(i,t,e){let n=this.cache,s=t.length,r=po(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function pm(i){switch(i){case 5126:return $0;case 35664:return J0;case 35665:return K0;case 35666:return j0;case 35674:return Q0;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}var nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z0(e.type)}},il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}},sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ra=/(\w+)(\])?(\[|\.)?/g;function Jc(i,t){i.seq.push(t),i.map[t.id]=t}function mm(i,t,e){let n=i.name,s=n.length;for(ra.lastIndex=0;;){let r=ra.exec(n),o=ra.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jc(e,c===void 0?new nl(a,i,t):new il(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new sl(a),Jc(e,h)),e=h}}}var Qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gm=37297,ym=0;function xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function _m(i){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i),n;switch(t===e?n="":t===Xr&&e===Wr?n="LinearDisplayP3ToLinearSRGB":t===Wr&&e===Xr&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case uo:return[n,"LinearTransferOETF"];case ve:case ql:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xm(i.getShaderSource(t),o)}else return s}function vm(i,t){let e=_m(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mm(i,t){let e;switch(t){case qf:e="Linear";break;case Yf:e="Reinhard";break;case Zf:e="Cineon";break;case Ks:e="ACESFilmic";break;case Jf:e="AgX";break;case Kf:e="Neutral";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rr=new L;function Em(){me.getLuminanceCoefficients(Rr);let i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Sm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Is(i){return i!==""}function Qc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Tm,Am)}var Rm=new Map;function Am(i,t){let e=re[t];if(e===void 0){let n=Rm.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}var Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(Cm,Pm)}function Pm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ms?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Um(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function Nm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Im(e),c=Lm(e),f=Dm(e),h=Um(e),u=Nm(e),m=wm(e),p=Sm(r),_=s.createProgram(),g,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Is).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Is).join(`
`),d.length>0&&(d+=`
`)):(g=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),d=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?re.tonemapping_pars_fragment:"",e.toneMapping!==ti?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,vm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=rl(o),o=Qc(o,e),o=th(o,e),a=rl(a),a=Qc(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=M+g+o,v=M+d+a,R=Kc(s,s.VERTEX_SHADER,x),S=Kc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(E){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(R).trim(),P=s.getShaderInfoLog(S).trim(),W=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,S);else{let nt=jc(s,R,"vertex"),$=jc(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+nt+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||P==="")&&(z=!1);z&&(E.diagnostics={runnable:W,programLog:H,vertexShader:{log:F,prefix:g},fragmentShader:{log:P,prefix:d}})}s.deleteShader(R),s.deleteShader(S),I=new Qi(s,_),U=bm(s,_)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,gm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ym++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}var zm=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new al(t),e.set(t,n)),n}},al=class{constructor(t){this.id=zm++,this.code=t,this.usedTimes=0}};function Bm(i,t,e,n,s,r,o){let a=new Fs,l=new ol,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,E,H,F,P){let W=F.fog,z=P.geometry,nt=y.isMeshStandardMaterial?F.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||nt),J=$&&$.mapping===fo?$.image.height:null,ot=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,bt=ct!==void 0?ct.length:0,It=0;z.morphAttributes.position!==void 0&&(It=1),z.morphAttributes.normal!==void 0&&(It=2),z.morphAttributes.color!==void 0&&(It=3);let et,ht,xt,yt;if(ot){let he=Rn[ot];et=he.vertexShader,ht=he.fragmentShader}else et=y.vertexShader,ht=y.fragmentShader,l.update(y),xt=l.getVertexShaderID(y),yt=l.getFragmentShaderID(y);let Ut=i.getRenderTarget(),Gt=P.isInstancedMesh===!0,Xt=P.isBatchedMesh===!0,te=!!y.map,ut=!!y.matcap,C=!!$,Et=!!y.aoMap,X=!!y.lightMap,Y=!!y.bumpMap,ft=!!y.normalMap,mt=!!y.displacementMap,pt=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,O=y.anisotropy>0,rt=y.clearcoat>0,at=y.dispersion>0,it=y.iridescence>0,Lt=y.sheen>0,vt=y.transmission>0,Rt=O&&!!y.anisotropyMap,Jt=rt&&!!y.clearcoatMap,N=rt&&!!y.clearcoatNormalMap,K=rt&&!!y.clearcoatRoughnessMap,gt=it&&!!y.iridescenceMap,Ct=it&&!!y.iridescenceThicknessMap,_t=Lt&&!!y.sheenColorMap,Yt=Lt&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,ne=!!y.specularColorMap,B=!!y.specularIntensityMap,Tt=vt&&!!y.transmissionMap,st=vt&&!!y.thicknessMap,V=!!y.gradientMap,Z=!!y.alphaMap,lt=y.alphaTest>0,Ht=!!y.alphaHash,Zt=!!y.extensions,ue=ti;y.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ue=i.toneMapping);let jt={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:ht,defines:y.defines,customVertexShaderID:xt,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Xt,batchingColor:Xt&&P._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&P.instanceColor!==null,instancingMorph:Gt&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ci,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:ut,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:J,aoMap:Et,lightMap:X,bumpMap:Y,normalMap:ft,displacementMap:m&&mt,emissiveMap:pt,normalMapObjectSpace:ft&&y.normalMapType===eu,normalMapTangentSpace:ft&&y.normalMapType===Dh,metalnessMap:A,roughnessMap:w,anisotropy:O,anisotropyMap:Rt,clearcoat:rt,clearcoatMap:Jt,clearcoatNormalMap:N,clearcoatRoughnessMap:K,dispersion:at,iridescence:it,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:Lt,sheenColorMap:_t,sheenRoughnessMap:Yt,specularMap:Nt,specularColorMap:ne,specularIntensityMap:B,transmission:vt,transmissionMap:Tt,thicknessMap:st,gradientMap:V,opaque:y.transparent===!1&&y.blending===Ji&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:Ht,combine:y.combine,mapUv:te&&g(y.map.channel),aoMapUv:Et&&g(y.aoMap.channel),lightMapUv:X&&g(y.lightMap.channel),bumpMapUv:Y&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:mt&&g(y.displacementMap.channel),emissiveMapUv:pt&&g(y.emissiveMap.channel),metalnessMapUv:A&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:Rt&&g(y.anisotropyMap.channel),clearcoatMapUv:Jt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:N&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&g(y.sheenRoughnessMap.channel),specularMapUv:Nt&&g(y.specularMap.channel),specularColorMapUv:ne&&g(y.specularColorMap.channel),specularIntensityMapUv:B&&g(y.specularIntensityMap.channel),transmissionMapUv:Tt&&g(y.transmissionMap.channel),thicknessMapUv:st&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(te||Z),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:It,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ye,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Zt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&y.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function M(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let H in y.defines)E.push(H),E.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(x(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){let E=_[y.type],H;if(E){let F=Rn[E];H=Au.clone(F.uniforms)}else H=y.uniforms;return H}function S(y,E){let H;for(let F=0,P=f.length;F<P;F++){let W=f[F];if(W.cacheKey===E){H=W,++H.usedTimes;break}}return H===void 0&&(H=new Hm(i,E,y,r),f.push(H)),H}function b(y){if(--y.usedTimes===0){let E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function I(y){l.remove(y)}function U(){l.dispose()}return{getParameters:d,getProgramCacheKey:M,getUniforms:R,acquireProgram:S,releaseProgram:b,releaseShaderCache:I,programs:f,dispose:U}}function Fm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ih(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,u,m,p,_,g){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:u,material:m,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},i[t]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=m,d.groupOrder=p,d.renderOrder=h.renderOrder,d.z=_,d.group=g),t++,d}function a(h,u,m,p,_,g){let d=o(h,u,m,p,_,g);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,u,m,p,_,g){let d=o(h,u,m,p,_,g);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,u){e.length>1&&e.sort(h||Om),n.length>1&&n.sort(u||ih),s.length>1&&s.sort(u||ih)}function f(){for(let h=t,u=i.length;h<u;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function km(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new sh,i.set(n,[o])):s>=r.length?(o=new sh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new $t};break;case"SpotLight":e={position:new L,direction:new L,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wm=0;function Xm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qm(i){let t=new Gm,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ae,o=new ae;function a(c){let f=0,h=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,p=0,_=0,g=0,d=0,M=0,x=0,v=0,R=0,S=0,b=0;c.sort(Xm);for(let U=0,y=c.length;U<y;U++){let E=c[U],H=E.color,F=E.intensity,P=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=H.r*F,h+=H.g*F,u+=H.b*F;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],F);b++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=E.shadow.matrix,M++}n.directional[m]=z,m++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(H).multiplyScalar(F),z.distance=P,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;let nt=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,nt.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[_]=nt.matrix,E.castShadow){let $=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=W,v++}_++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(H).multiplyScalar(F),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=z,g++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let nt=E.shadow,$=e.get(E);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=E.shadow.matrix,x++}n.point[p]=z,p++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(F),z.groundColor.copy(E.groundColor).multiplyScalar(F),n.hemi[d]=z,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=b,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=b,n.version=Wm++)}function l(c,f){let h=0,u=0,m=0,p=0,_=0,g=f.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let x=c[d];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(x.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function rh(i){let t=new qm(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ym(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new rh(i),t.set(s,[a])):r>=o.length?(a=new rh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ll=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
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
}`;function Jm(i,t,e){let n=new Os,s=new Mt,r=new Mt,o=new xe,a=new ll({depthPacking:tu}),l=new cl,c={},f=e.maxTextureSize,h={[ei]:sn,[sn]:ei,[ye]:ye},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Zm,fragmentShader:$m}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let p=new Re;p.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new q(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let d=this.type;this.render=function(S,b,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let U=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Cn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let F=d!==On&&this.type===On,P=d===On&&this.type!==On;for(let W=0,z=S.length;W<z;W++){let nt=S[W],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let J=$.getFrameExtents();if(s.multiply(J),r.copy($.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/J.x),s.x=r.x*J.x,$.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/J.y),s.y=r.y*J.y,$.mapSize.y=r.y)),$.map===null||F===!0||P===!0){let ct=this.type!==On?{minFilter:nn,magFilter:nn}:{};$.map!==null&&$.map.dispose(),$.map=new Vn(s.x,s.y,ct),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ot=$.getViewportCount();for(let ct=0;ct<ot;ct++){let bt=$.getViewport(ct);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),H.viewport(o),$.updateMatrices(nt,ct),n=$.getFrustum(),v(b,I,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===On&&M($,I),$.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(U,y,E)};function M(S,b){let I=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,I,u,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,I,m,_,null)}function x(S,b,I,U){let y=null,E=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let H=y.uuid,F=b.uuid,P=c[H];P===void 0&&(P={},c[H]=P);let W=P[F];W===void 0&&(W=y.clone(),P[F]=W,b.addEventListener("dispose",R)),y=W}if(y.visible=b.visible,y.wireframe=b.wireframe,U===On?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=i.properties.get(y);H.light=I}return y}function v(S,b,I,U,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===On)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let F=t.update(S),P=S.material;if(Array.isArray(P)){let W=F.groups;for(let z=0,nt=W.length;z<nt;z++){let $=W[z],J=P[$.materialIndex];if(J&&J.visible){let ot=x(S,J,U,y);S.onBeforeShadow(i,S,b,I,F,ot,$),i.renderBufferDirect(I,null,F,ot,S,$),S.onAfterShadow(i,S,b,I,F,ot,$)}}}else if(P.visible){let W=x(S,P,U,y);S.onBeforeShadow(i,S,b,I,F,W,null),i.renderBufferDirect(I,null,F,W,S,null),S.onAfterShadow(i,S,b,I,F,W,null)}}let H=S.children;for(let F=0,P=H.length;F<P;F++)v(H[F],b,I,U,y)}function R(S){S.target.removeEventListener("dispose",R);for(let I in c){let U=c[I],y=S.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}var Km={[da]:pa,[ma]:xa,[ga]:_a,[ts]:ya,[pa]:da,[xa]:ma,[_a]:ga,[ya]:ts};function jm(i){function t(){let B=!1,Tt=new xe,st=null,V=new xe(0,0,0,0);return{setMask:function(Z){st!==Z&&!B&&(i.colorMask(Z,Z,Z,Z),st=Z)},setLocked:function(Z){B=Z},setClear:function(Z,lt,Ht,Zt,ue){ue===!0&&(Z*=Zt,lt*=Zt,Ht*=Zt),Tt.set(Z,lt,Ht,Zt),V.equals(Tt)===!1&&(i.clearColor(Z,lt,Ht,Zt),V.copy(Tt))},reset:function(){B=!1,st=null,V.set(-1,0,0,0)}}}function e(){let B=!1,Tt=!1,st=null,V=null,Z=null;return{setReversed:function(lt){Tt=lt},setTest:function(lt){lt?xt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(lt){st!==lt&&!B&&(i.depthMask(lt),st=lt)},setFunc:function(lt){if(Tt&&(lt=Km[lt]),V!==lt){switch(lt){case da:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=lt}},setLocked:function(lt){B=lt},setClear:function(lt){Z!==lt&&(i.clearDepth(lt),Z=lt)},reset:function(){B=!1,st=null,V=null,Z=null}}}function n(){let B=!1,Tt=null,st=null,V=null,Z=null,lt=null,Ht=null,Zt=null,ue=null;return{setTest:function(jt){B||(jt?xt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(jt){Tt!==jt&&!B&&(i.stencilMask(jt),Tt=jt)},setFunc:function(jt,he,Ne){(st!==jt||V!==he||Z!==Ne)&&(i.stencilFunc(jt,he,Ne),st=jt,V=he,Z=Ne)},setOp:function(jt,he,Ne){(lt!==jt||Ht!==he||Zt!==Ne)&&(i.stencilOp(jt,he,Ne),lt=jt,Ht=he,Zt=Ne)},setLocked:function(jt){B=jt},setClear:function(jt){ue!==jt&&(i.clearStencil(jt),ue=jt)},reset:function(){B=!1,Tt=null,st=null,V=null,Z=null,lt=null,Ht=null,Zt=null,ue=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},f={},h=new WeakMap,u=[],m=null,p=!1,_=null,g=null,d=null,M=null,x=null,v=null,R=null,S=new $t(0,0,0),b=0,I=!1,U=null,y=null,E=null,H=null,F=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,z=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),W=z>=1):nt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),W=z>=2);let $=null,J={},ot=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),bt=new xe().fromArray(ot),It=new xe().fromArray(ct);function et(B,Tt,st,V){let Z=new Uint8Array(4),lt=i.createTexture();i.bindTexture(B,lt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<st;Ht++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,V,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(Tt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return lt}let ht={};ht[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),r.setFunc(ts),X(!1),Y(uc),xt(i.CULL_FACE),C(Cn);function xt(B){c[B]!==!0&&(i.enable(B),c[B]=!0)}function yt(B){c[B]!==!1&&(i.disable(B),c[B]=!1)}function Ut(B,Tt){return f[B]!==Tt?(i.bindFramebuffer(B,Tt),f[B]=Tt,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Tt),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Gt(B,Tt){let st=u,V=!1;if(B){st=h.get(Tt),st===void 0&&(st=[],h.set(Tt,st));let Z=B.textures;if(st.length!==Z.length||st[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ht=Z.length;lt<Ht;lt++)st[lt]=i.COLOR_ATTACHMENT0+lt;st.length=Z.length,V=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,V=!0);V&&i.drawBuffers(st)}function Xt(B){return m!==B?(i.useProgram(B),m=B,!0):!1}let te={[yi]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};te[Cf]=i.MIN,te[Pf]=i.MAX;let ut={[If]:i.ZERO,[Lf]:i.ONE,[Df]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Ff]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Nf]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Of]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Vf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(B,Tt,st,V,Z,lt,Ht,Zt,ue,jt){if(B===Cn){p===!0&&(yt(i.BLEND),p=!1);return}if(p===!1&&(xt(i.BLEND),p=!0),B!==Tf){if(B!==_||jt!==I){if((g!==yi||x!==yi)&&(i.blendEquation(i.FUNC_ADD),g=yi,x=yi),jt)switch(B){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kr:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}d=null,M=null,v=null,R=null,S.set(0,0,0),b=0,_=B,I=jt}return}Z=Z||Tt,lt=lt||st,Ht=Ht||V,(Tt!==g||Z!==x)&&(i.blendEquationSeparate(te[Tt],te[Z]),g=Tt,x=Z),(st!==d||V!==M||lt!==v||Ht!==R)&&(i.blendFuncSeparate(ut[st],ut[V],ut[lt],ut[Ht]),d=st,M=V,v=lt,R=Ht),(Zt.equals(S)===!1||ue!==b)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ue),S.copy(Zt),b=ue),_=B,I=!1}function Et(B,Tt){B.side===ye?yt(i.CULL_FACE):xt(i.CULL_FACE);let st=B.side===sn;Tt&&(st=!st),X(st),B.blending===Ji&&B.transparent===!1?C(Cn):C(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);let V=B.stencilWrite;o.setTest(V),V&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(B){U!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),U=B)}function Y(B){B!==wf?(xt(i.CULL_FACE),B!==y&&(B===uc?i.cullFace(i.BACK):B===Sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),y=B}function ft(B){B!==E&&(W&&i.lineWidth(B),E=B)}function mt(B,Tt,st){B?(xt(i.POLYGON_OFFSET_FILL),(H!==Tt||F!==st)&&(i.polygonOffset(Tt,st),H=Tt,F=st)):yt(i.POLYGON_OFFSET_FILL)}function pt(B){B?xt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function A(B){B===void 0&&(B=i.TEXTURE0+P-1),$!==B&&(i.activeTexture(B),$=B)}function w(B,Tt,st){st===void 0&&($===null?st=i.TEXTURE0+P-1:st=$);let V=J[st];V===void 0&&(V={type:void 0,texture:void 0},J[st]=V),(V.type!==B||V.texture!==Tt)&&($!==st&&(i.activeTexture(st),$=st),i.bindTexture(B,Tt||ht[B]),V.type=B,V.texture=Tt)}function O(){let B=J[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(B){bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),bt.copy(B))}function _t(B){It.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),It.copy(B))}function Yt(B,Tt){let st=l.get(Tt);st===void 0&&(st=new WeakMap,l.set(Tt,st));let V=st.get(B);V===void 0&&(V=i.getUniformBlockIndex(Tt,B.name),st.set(B,V))}function Nt(B,Tt){let V=l.get(Tt).get(B);a.get(Tt)!==V&&(i.uniformBlockBinding(Tt,V,B.__bindingPointIndex),a.set(Tt,V))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,J={},f={},h=new WeakMap,u=[],m=null,p=!1,_=null,g=null,d=null,M=null,x=null,v=null,R=null,S=new $t(0,0,0),b=0,I=!1,U=null,y=null,E=null,H=null,F=null,bt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:xt,disable:yt,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:Xt,setBlending:C,setMaterial:Et,setFlipSided:X,setCullFace:Y,setLineWidth:ft,setPolygonOffset:mt,setScissorTest:pt,activeTexture:A,bindTexture:w,unbindTexture:O,compressedTexImage2D:rt,compressedTexImage3D:at,texImage2D:K,texImage3D:gt,updateUBOMapping:Yt,uniformBlockBinding:Nt,texStorage2D:Jt,texStorage3D:N,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Rt,scissor:Ct,viewport:_t,reset:ne}}function oh(i,t,e,n){let s=Qm(n);switch(e){case Rh:return i*t;case Ch:return i*t;case Ph:return i*t*2;case Gl:return i*t/s.components*s.byteLength;case Vl:return i*t/s.components*s.byteLength;case Ih:return i*t*2/s.components*s.byteLength;case Wl:return i*t*2/s.components*s.byteLength;case Ah:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Xl:return i*t*4/s.components*s.byteLength;case Nr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case wa:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lh:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(i){switch(i){case Gn:case Sh:return{byteLength:1,components:1};case Hs:case bh:case js:return{byteLength:2,components:1};case Ol:case kl:return{byteLength:2,components:4};case Ei:case Fl:case An:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,f=new WeakMap,h,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,w){return m?new OffscreenCanvas(A,w):zs("canvas")}function _(A,w,O){let rt=1,at=pt(A);if((at.width>O||at.height>O)&&(rt=O/Math.max(at.width,at.height)),rt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(rt*at.width),Lt=Math.floor(rt*at.height);h===void 0&&(h=p(it,Lt));let vt=w?p(it,Lt):h;return vt.width=it,vt.height=Lt,vt.getContext("2d").drawImage(A,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+it+"x"+Lt+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function g(A){return A.generateMipmaps&&A.minFilter!==nn&&A.minFilter!==Mn}function d(A){i.generateMipmap(A)}function M(A,w,O,rt,at=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=w;if(w===i.RED&&(O===i.FLOAT&&(it=i.R32F),O===i.HALF_FLOAT&&(it=i.R16F),O===i.UNSIGNED_BYTE&&(it=i.R8)),w===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.R8UI),O===i.UNSIGNED_SHORT&&(it=i.R16UI),O===i.UNSIGNED_INT&&(it=i.R32UI),O===i.BYTE&&(it=i.R8I),O===i.SHORT&&(it=i.R16I),O===i.INT&&(it=i.R32I)),w===i.RG&&(O===i.FLOAT&&(it=i.RG32F),O===i.HALF_FLOAT&&(it=i.RG16F),O===i.UNSIGNED_BYTE&&(it=i.RG8)),w===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RG8UI),O===i.UNSIGNED_SHORT&&(it=i.RG16UI),O===i.UNSIGNED_INT&&(it=i.RG32UI),O===i.BYTE&&(it=i.RG8I),O===i.SHORT&&(it=i.RG16I),O===i.INT&&(it=i.RG32I)),w===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RGB8UI),O===i.UNSIGNED_SHORT&&(it=i.RGB16UI),O===i.UNSIGNED_INT&&(it=i.RGB32UI),O===i.BYTE&&(it=i.RGB8I),O===i.SHORT&&(it=i.RGB16I),O===i.INT&&(it=i.RGB32I)),w===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),O===i.UNSIGNED_INT&&(it=i.RGBA32UI),O===i.BYTE&&(it=i.RGBA8I),O===i.SHORT&&(it=i.RGBA16I),O===i.INT&&(it=i.RGBA32I)),w===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),w===i.RGBA){let Lt=at?Vr:me.getTransfer(rt);O===i.FLOAT&&(it=i.RGBA32F),O===i.HALF_FLOAT&&(it=i.RGBA16F),O===i.UNSIGNED_BYTE&&(it=Lt===Ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(A,w){let O;return A?w===null||w===Ei||w===is?O=i.DEPTH24_STENCIL8:w===An?O=i.DEPTH32F_STENCIL8:w===Hs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ei||w===is?O=i.DEPTH_COMPONENT24:w===An?O=i.DEPTH_COMPONENT32F:w===Hs&&(O=i.DEPTH_COMPONENT16),O}function v(A,w){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function R(A){let w=A.target;w.removeEventListener("dispose",R),b(w),w.isVideoTexture&&f.delete(w)}function S(A){let w=A.target;w.removeEventListener("dispose",S),U(w)}function b(A){let w=n.get(A);if(w.__webglInit===void 0)return;let O=A.source,rt=u.get(O);if(rt){let at=rt[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(A),Object.keys(rt).length===0&&u.delete(O)}n.remove(A)}function I(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let O=A.source,rt=u.get(O);delete rt[w.__cacheKey],o.memory.textures--}function U(A){let w=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let at=0;at<w.__webglFramebuffer[rt].length;at++)i.deleteFramebuffer(w.__webglFramebuffer[rt][at]);else i.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[rt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let O=A.textures;for(let rt=0,at=O.length;rt<at;rt++){let it=n.get(O[rt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(O[rt])}n.remove(A)}let y=0;function E(){y=0}function H(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function F(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function P(A,w){let O=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let rt=A.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(O,A,w);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+w)}function W(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){It(O,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+w)}function z(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){It(O,A,w);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+w)}function nt(A,w){let O=n.get(A);if(A.version>0&&O.__version!==A.version){et(O,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+w)}let $={[wn]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},J={[nn]:i.NEAREST,[jf]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},ot={[nu]:i.NEVER,[lu]:i.ALWAYS,[iu]:i.LESS,[Uh]:i.LEQUAL,[su]:i.EQUAL,[au]:i.GEQUAL,[ru]:i.GREATER,[ou]:i.NOTEQUAL};function ct(A,w){if(w.type===An&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===Co||w.magFilter===ar||w.magFilter===Mi||w.minFilter===Mn||w.minFilter===Co||w.minFilter===ar||w.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ot[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==ar&&w.minFilter!==Mi||w.type===An&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function bt(A,w){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",R));let rt=w.source,at=u.get(rt);at===void 0&&(at={},u.set(rt,at));let it=F(w);if(it!==A.__cacheKey){at[it]===void 0&&(at[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),at[it].usedTimes++;let Lt=at[A.__cacheKey];Lt!==void 0&&(at[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&I(w)),A.__cacheKey=it,A.__webglTexture=at[it].texture}return O}function It(A,w,O){let rt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=i.TEXTURE_3D);let at=bt(A,w),it=w.source;e.bindTexture(rt,A.__webglTexture,i.TEXTURE0+O);let Lt=n.get(it);if(it.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+O);let vt=me.getPrimaries(me.workingColorSpace),Rt=w.colorSpace===Qn?null:me.getPrimaries(w.colorSpace),Jt=w.colorSpace===Qn||vt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let N=_(w.image,!1,s.maxTextureSize);N=mt(w,N);let K=r.convert(w.format,w.colorSpace),gt=r.convert(w.type),Ct=M(w.internalFormat,K,gt,w.colorSpace,w.isVideoTexture);ct(rt,w);let _t,Yt=w.mipmaps,Nt=w.isVideoTexture!==!0,ne=Lt.__version===void 0||at===!0,B=it.dataReady,Tt=v(w,N);if(w.isDepthTexture)Ct=x(w.format===ss,w.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Ct,N.width,N.height):e.texImage2D(i.TEXTURE_2D,0,Ct,N.width,N.height,0,K,gt,null));else if(w.isDataTexture)if(Yt.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,Tt,Ct,Yt[0].width,Yt[0].height);for(let st=0,V=Yt.length;st<V;st++)_t=Yt[st],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,K,gt,_t.data):e.texImage2D(i.TEXTURE_2D,st,Ct,_t.width,_t.height,0,K,gt,_t.data);w.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,Tt,Ct,N.width,N.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,N.width,N.height,K,gt,N.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,N.width,N.height,0,K,gt,N.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ct,Yt[0].width,Yt[0].height,N.depth);for(let st=0,V=Yt.length;st<V;st++)if(_t=Yt[st],w.format!==En)if(K!==null)if(Nt){if(B)if(w.layerUpdates.size>0){let Z=oh(_t.width,_t.height,w.format,w.type);for(let lt of w.layerUpdates){let Ht=_t.data.subarray(lt*Z/_t.data.BYTES_PER_ELEMENT,(lt+1)*Z/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,lt,_t.width,_t.height,1,K,Ht,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,N.depth,K,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Ct,_t.width,_t.height,N.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,N.depth,K,gt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Ct,_t.width,_t.height,N.depth,0,K,gt,_t.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,Tt,Ct,Yt[0].width,Yt[0].height);for(let st=0,V=Yt.length;st<V;st++)_t=Yt[st],w.format!==En?K!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,K,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Ct,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,_t.width,_t.height,K,gt,_t.data):e.texImage2D(i.TEXTURE_2D,st,Ct,_t.width,_t.height,0,K,gt,_t.data)}else if(w.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ct,N.width,N.height,N.depth),B)if(w.layerUpdates.size>0){let st=oh(N.width,N.height,w.format,w.type);for(let V of w.layerUpdates){let Z=N.data.subarray(V*st/N.data.BYTES_PER_ELEMENT,(V+1)*st/N.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,V,N.width,N.height,1,K,gt,Z)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,K,gt,N.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,N.width,N.height,N.depth,0,K,gt,N.data);else if(w.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,Tt,Ct,N.width,N.height,N.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,K,gt,N.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,N.width,N.height,N.depth,0,K,gt,N.data);else if(w.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,Tt,Ct,N.width,N.height);else{let st=N.width,V=N.height;for(let Z=0;Z<Tt;Z++)e.texImage2D(i.TEXTURE_2D,Z,Ct,st,V,0,K,gt,null),st>>=1,V>>=1}}else if(Yt.length>0){if(Nt&&ne){let st=pt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Ct,st.width,st.height)}for(let st=0,V=Yt.length;st<V;st++)_t=Yt[st],Nt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,K,gt,_t):e.texImage2D(i.TEXTURE_2D,st,Ct,K,gt,_t);w.generateMipmaps=!1}else if(Nt){if(ne){let st=pt(N);e.texStorage2D(i.TEXTURE_2D,Tt,Ct,st.width,st.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K,gt,N)}else e.texImage2D(i.TEXTURE_2D,0,Ct,K,gt,N);g(w)&&d(rt),Lt.__version=it.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function et(A,w,O){if(w.image.length!==6)return;let rt=bt(A,w),at=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let it=n.get(at);if(at.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+O);let Lt=me.getPrimaries(me.workingColorSpace),vt=w.colorSpace===Qn?null:me.getPrimaries(w.colorSpace),Rt=w.colorSpace===Qn||Lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,K=[];for(let V=0;V<6;V++)!Jt&&!N?K[V]=_(w.image[V],!0,s.maxCubemapSize):K[V]=N?w.image[V].image:w.image[V],K[V]=mt(w,K[V]);let gt=K[0],Ct=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),Yt=M(w.internalFormat,Ct,_t,w.colorSpace),Nt=w.isVideoTexture!==!0,ne=it.__version===void 0||rt===!0,B=at.dataReady,Tt=v(w,gt);ct(i.TEXTURE_CUBE_MAP,w);let st;if(Jt){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Yt,gt.width,gt.height);for(let V=0;V<6;V++){st=K[V].mipmaps;for(let Z=0;Z<st.length;Z++){let lt=st[Z];w.format!==En?Ct!==null?Nt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z,0,0,lt.width,lt.height,Ct,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z,0,0,lt.width,lt.height,Ct,_t,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z,Yt,lt.width,lt.height,0,Ct,_t,lt.data)}}}else{if(st=w.mipmaps,Nt&&ne){st.length>0&&Tt++;let V=pt(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Yt,V.width,V.height)}for(let V=0;V<6;V++)if(N){Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,K[V].width,K[V].height,Ct,_t,K[V].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Yt,K[V].width,K[V].height,0,Ct,_t,K[V].data);for(let Z=0;Z<st.length;Z++){let Ht=st[Z].image[V].image;Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z+1,0,0,Ht.width,Ht.height,Ct,_t,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z+1,Yt,Ht.width,Ht.height,0,Ct,_t,Ht.data)}}else{Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Ct,_t,K[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Yt,Ct,_t,K[V]);for(let Z=0;Z<st.length;Z++){let lt=st[Z];Nt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z+1,0,0,Ct,_t,lt.image[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z+1,Yt,Ct,_t,lt.image[V])}}}g(w)&&d(i.TEXTURE_CUBE_MAP),it.__version=at.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ht(A,w,O,rt,at,it){let Lt=r.convert(O.format,O.colorSpace),vt=r.convert(O.type),Rt=M(O.internalFormat,Lt,vt,O.colorSpace);if(!n.get(w).__hasExternalTextures){let N=Math.max(1,w.width>>it),K=Math.max(1,w.height>>it);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,it,Rt,N,K,w.depth,0,Lt,vt,null):e.texImage2D(at,it,Rt,N,K,0,Lt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Y(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,at,n.get(O).__webglTexture,0,X(w)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,at,n.get(O).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,w,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){let rt=w.depthTexture,at=rt&&rt.isDepthTexture?rt.type:null,it=x(w.stencilBuffer,at),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=X(w);Y(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,it,w.width,w.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,it,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,it,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,A)}else{let rt=w.textures;for(let at=0;at<rt.length;at++){let it=rt[at],Lt=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),Rt=M(it.internalFormat,Lt,vt,it.colorSpace),Jt=X(w);O&&Y(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Rt,w.width,w.height):Y(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,Rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);let rt=n.get(w.depthTexture).__webglTexture,at=X(w);if(w.depthTexture.format===Ki)Y(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(w.depthTexture.format===ss)Y(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ut(A){let w=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let rt=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){let at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",at)};rt.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=rt}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");yt(w.__webglFramebuffer,A)}else if(O){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=i.createRenderbuffer(),xt(w.__webglDepthbuffer[rt],A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),xt(w.__webglDepthbuffer,A,!1);else{let rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,w,O){let rt=n.get(A);w!==void 0&&ht(rt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(A)}function Xt(A){let w=A.texture,O=n.get(A),rt=n.get(w);A.addEventListener("dispose",S);let at=A.textures,it=A.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=w.version,o.memory.textures++),it){O.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[vt]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)O.__webglFramebuffer[vt][Rt]=i.createFramebuffer()}else O.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let vt=0;vt<w.mipmaps.length;vt++)O.__webglFramebuffer[vt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let vt=0,Rt=at.length;vt<Rt;vt++){let Jt=n.get(at[vt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Y(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let vt=0;vt<at.length;vt++){let Rt=at[vt];O.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[vt]);let Jt=r.convert(Rt.format,Rt.colorSpace),N=r.convert(Rt.type),K=M(Rt.internalFormat,Jt,N,Rt.colorSpace,A.isXRRenderTarget===!0),gt=X(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,O.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ct(i.TEXTURE_CUBE_MAP,w);for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ht(O.__webglFramebuffer[vt][Rt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt);else ht(O.__webglFramebuffer[vt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(w)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let vt=0,Rt=at.length;vt<Rt;vt++){let Jt=at[vt],N=n.get(Jt);e.bindTexture(i.TEXTURE_2D,N.__webglTexture),ct(i.TEXTURE_2D,Jt),ht(O.__webglFramebuffer,A,Jt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),g(Jt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),ct(vt,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)ht(O.__webglFramebuffer[Rt],A,w,i.COLOR_ATTACHMENT0,vt,Rt);else ht(O.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,vt,0);g(w)&&d(vt),e.unbindTexture()}A.depthBuffer&&Ut(A)}function te(A){let w=A.textures;for(let O=0,rt=w.length;O<rt;O++){let at=w[O];if(g(at)){let it=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(at).__webglTexture;e.bindTexture(it,Lt),d(it),e.unbindTexture()}}}let ut=[],C=[];function Et(A){if(A.samples>0){if(Y(A)===!1){let w=A.textures,O=A.width,rt=A.height,at=i.COLOR_BUFFER_BIT,it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(A),vt=w.length>1;if(vt)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Rt]);let Jt=n.get(w[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,O,rt,0,0,O,rt,at,i.NEAREST),l===!0&&(ut.length=0,C.length=0,ut.push(i.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(it),C.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Rt]);let Jt=n.get(w[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function X(A){return Math.min(s.maxSamples,A.samples)}function Y(A){let w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(A){let w=o.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function mt(A,w){let O=A.colorSpace,rt=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ci&&O!==Qn&&(me.getTransfer(O)===Ee?(rt!==En||at!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=P,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=nt,this.rebindTextures=Gt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Y}function eg(i,t){function e(n,s=Qn){let r,o=me.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ah)return i.RGB;if(n===En)return i.RGBA;if(n===Ch)return i.LUMINANCE;if(n===Ph)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===Wl)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===Nr||n===Hr||n===zr||n===Br)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Sa||n===ba||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Aa)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Ha||n===za||n===Ba||n===Fa||n===Oa||n===ka||n===Ga||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===qa||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hl=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Bt=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},ng={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,p=.005;c.inputState.pinching&&u>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
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

}`,fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ln({vertexShader:ig,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,p=null,_=new fl,g=e.getContextAttributes(),d=null,M=null,x=[],v=[],R=new Mt,S=null,b=new $e;b.layers.enable(1),b.viewport=new xe;let I=new $e;I.layers.enable(2),I.viewport=new xe;let U=[b,I],y=new hl;y.layers.enable(1),y.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=x[et];return ht===void 0&&(ht=new Ls,x[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=x[et];return ht===void 0&&(ht=new Ls,x[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=x[et];return ht===void 0&&(ht=new Ls,x[et]=ht),ht.getHandSpace()};function F(et){let ht=v.indexOf(et.inputSource);if(ht===-1)return;let xt=x[ht];xt!==void 0&&(xt.update(et.inputSource,et.frame,c||o),xt.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",W);for(let et=0;et<x.length;et++){let ht=v[et];ht!==null&&(v[et]=null,x[et].disconnect(ht))}E=null,H=null,_.reset(),t.setRenderTarget(d),m=null,u=null,h=null,s=null,M=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",P),s.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let ht={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Vn(m.framebufferWidth,m.framebufferHeight,{format:En,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ht=null,xt=null,yt=null;g.depth&&(yt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=g.stencil?ss:Ki,xt=g.stencil?is:Ei);let Ut={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Vn(u.textureWidth,u.textureHeight,{format:En,type:Gn,depthTexture:new to(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(et){for(let ht=0;ht<et.removed.length;ht++){let xt=et.removed[ht],yt=v.indexOf(xt);yt>=0&&(v[yt]=null,x[yt].disconnect(xt))}for(let ht=0;ht<et.added.length;ht++){let xt=et.added[ht],yt=v.indexOf(xt);if(yt===-1){for(let Gt=0;Gt<x.length;Gt++)if(Gt>=v.length){v.push(xt),yt=Gt;break}else if(v[Gt]===null){v[Gt]=xt,yt=Gt;break}if(yt===-1)break}let Ut=x[yt];Ut&&Ut.connect(xt)}}let z=new L,nt=new L;function $(et,ht,xt){z.setFromMatrixPosition(ht.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let yt=z.distanceTo(nt),Ut=ht.projectionMatrix.elements,Gt=xt.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),te=Ut[14]/(Ut[10]+1),ut=(Ut[9]+1)/Ut[5],C=(Ut[9]-1)/Ut[5],Et=(Ut[8]-1)/Ut[0],X=(Gt[8]+1)/Gt[0],Y=Xt*Et,ft=Xt*X,mt=yt/(-Et+X),pt=mt*-Et;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(pt),et.translateZ(mt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ut[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let A=Xt+mt,w=te+mt,O=Y-pt,rt=ft+(yt-pt),at=ut*te/w*A,it=C*te/w*A;et.projectionMatrix.makePerspective(O,rt,at,it,A,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function J(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ht=et.near,xt=et.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),y.near=I.near=b.near=ht,y.far=I.far=b.far=xt,(E!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,H=y.far);let yt=et.parent,Ut=y.cameras;J(y,yt);for(let Gt=0;Gt<Ut.length;Gt++)J(Ut[Gt],yt);Ut.length===2?$(y,b,I):y.projectionMatrix.copy(b.projectionMatrix),ot(et,y,yt)};function ot(et,ht,xt){xt===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(xt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ja*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ct=null;function bt(et,ht){if(f=ht.getViewerPose(c||o),p=ht,f!==null){let xt=f.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let yt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,yt=!0);for(let Gt=0;Gt<xt.length;Gt++){let Xt=xt[Gt],te=null;if(m!==null)te=m.getViewport(Xt);else{let C=h.getViewSubImage(u,Xt);te=C.viewport,Gt===0&&(t.setRenderTargetTextures(M,C.colorTexture,u.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let ut=U[Gt];ut===void 0&&(ut=new $e,ut.layers.enable(Gt),ut.viewport=new xe,U[Gt]=ut),ut.matrix.fromArray(Xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(te.x,te.y,te.width,te.height),Gt===0&&(y.matrix.copy(ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),yt===!0&&y.cameras.push(ut)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Gt=h.getDepthInformation(xt[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let xt=0;xt<x.length;xt++){let yt=v[xt],Ut=x[xt];yt!==null&&Ut!==void 0&&Ut.update(yt,ht,c||o)}ct&&ct(et,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let It=new Bh;It.setAnimationLoop(bt),this.setAnimationLoop=function(et){ct=et},this.dispose=function(){}}},mi=new In,rg=new ae;function og(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,zh(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,M,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),f(g,d)):d.isMeshStandardMaterial?(r(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),p(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,M,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let M=t.get(d),x=M.envMap,v=M.envMapRotation;x&&(g.envMap.value=x,mi.copy(v),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(mi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,M,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*M,g.scale.value=x*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,M){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){let M=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ag(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(p(M),v=f(M),s[M.id]=v,M.addEventListener("dispose",g));let R=x.program;n.updateUBOMapping(M,R);let S=t.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function f(M){let x=h();M.__bindingPointIndex=x;let v=i.createBuffer(),R=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let x=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,b=v.length;S<b;S++){let I=Array.isArray(v[S])?v[S]:[v[S]];for(let U=0,y=I.length;U<y;U++){let E=I[U];if(m(E,S,U,R)===!0){let H=E.__offset,F=Array.isArray(E.value)?E.value:[E.value],P=0;for(let W=0;W<F.length;W++){let z=F[W],nt=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+P,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,P),P+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,v,R){let S=M.value,b=x+"_"+v;if(R[b]===void 0)return typeof S=="number"||typeof S=="boolean"?R[b]=S:R[b]=S.clone(),!0;{let I=R[b];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return R[b]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function p(M){let x=M.uniforms,v=0,R=16;for(let b=0,I=x.length;b<I;b++){let U=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,E=U.length;y<E;y++){let H=U[y],F=Array.isArray(H.value)?H.value:[H.value];for(let P=0,W=F.length;P<W;P++){let z=F[P],nt=_(z),$=v%R,J=$%nt.boundary,ot=$+J;v+=J,ot!==0&&R-ot<nt.storage&&(v+=R-ot),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=nt.storage}}}let S=v%R;return S>0&&(v+=R-S),M.__size=v,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){let x=M.target;x.removeEventListener("dispose",g);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var os=class{constructor(t={}){let{canvas:e=hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),p=new Int32Array(4),_=null,g=null,d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,v=!1,R=0,S=0,b=null,I=-1,U=null,y=new xe,E=new xe,H=null,F=new $t(0),P=0,W=e.width,z=e.height,nt=1,$=null,J=null,ot=new xe(0,0,W,z),ct=new xe(0,0,W,z),bt=!1,It=new Os,et=!1,ht=!1,xt=new ae,yt=new ae,Ut=new L,Gt=new xe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ut(){return b===null?nt:1}let C=n;function Et(T,k){return e.getContext(T,k)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",V,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",lt,!1),C===null){let k="webgl2";if(C=Et(k,T),C===null)throw Et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,Y,ft,mt,pt,A,w,O,rt,at,it,Lt,vt,Rt,Jt,N,K,gt,Ct,_t,Yt,Nt,ne,B;function Tt(){X=new w0(C),X.init(),Nt=new eg(C,X),Y=new y0(C,X,t,Nt),ft=new jm(C),Y.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),mt=new T0(C),pt=new Fm,A=new tg(C,X,ft,pt,Y,Nt,mt),w=new _0(x),O=new E0(x),rt=new Du(C),ne=new m0(C,rt),at=new S0(C,rt,mt,ne),it=new A0(C,at,rt,mt),Ct=new R0(C,Y,A),N=new x0(pt),Lt=new Bm(x,w,O,X,Y,ne,N),vt=new og(x,pt),Rt=new km,Jt=new Ym(X),gt=new p0(x,w,O,ft,it,u,l),K=new Jm(x,it,Y),B=new ag(C,mt,Y,ft),_t=new g0(C,X,mt),Yt=new b0(C,X,mt),mt.programs=Lt.programs,x.capabilities=Y,x.extensions=X,x.properties=pt,x.renderLists=Rt,x.shadowMap=K,x.state=ft,x.info=mt}Tt();let st=new ul(x,C);this.xr=st,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(W,z,!1))},this.getSize=function(T){return T.set(W,z)},this.setSize=function(T,k,j=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,z=k,e.width=Math.floor(T*nt),e.height=Math.floor(k*nt),j===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(W*nt,z*nt).floor()},this.setDrawingBufferSize=function(T,k,j){W=T,z=k,nt=j,e.width=Math.floor(T*j),e.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,k,j,tt){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,k,j,tt),ft.viewport(y.copy(ot).multiplyScalar(nt).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,k,j,tt){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,k,j,tt),ft.scissor(E.copy(ct).multiplyScalar(nt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(T){ft.setScissorTest(bt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(T=!0,k=!0,j=!0){let tt=0;if(T){let G=!1;if(b!==null){let wt=b.texture.format;G=wt===Xl||wt===Wl||wt===Vl}if(G){let wt=b.texture.type,Dt=wt===Gn||wt===Ei||wt===Hs||wt===is||wt===Ol||wt===kl,zt=gt.getClearColor(),Ft=gt.getClearAlpha(),Kt=zt.r,Qt=zt.g,kt=zt.b;Dt?(m[0]=Kt,m[1]=Qt,m[2]=kt,m[3]=Ft,C.clearBufferuiv(C.COLOR,0,m)):(p[0]=Kt,p[1]=Qt,p[2]=kt,p[3]=Ft,C.clearBufferiv(C.COLOR,0,p))}else tt|=C.COLOR_BUFFER_BIT}k&&(tt|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(tt|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",V,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Rt.dispose(),Jt.dispose(),pt.dispose(),w.dispose(),O.dispose(),it.dispose(),ne.dispose(),B.dispose(),Lt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Oe),st.removeEventListener("sessionend",ke),Ae.stop()};function V(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let T=mt.autoReset,k=K.enabled,j=K.autoUpdate,tt=K.needsUpdate,G=K.type;Tt(),mt.autoReset=T,K.enabled=k,K.autoUpdate=j,K.needsUpdate=tt,K.type=G}function lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ht(T){let k=T.target;k.removeEventListener("dispose",Ht),Zt(k)}function Zt(T){ue(T),pt.remove(T)}function ue(T){let k=pt.get(T).programs;k!==void 0&&(k.forEach(function(j){Lt.releaseProgram(j)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,tt,G,wt){k===null&&(k=Xt);let Dt=G.isMesh&&G.matrixWorld.determinant()<0,zt=_f(T,k,j,tt,G);ft.setMaterial(tt,Dt);let Ft=j.index,Kt=1;if(tt.wireframe===!0){if(Ft=at.getWireframeAttribute(j),Ft===void 0)return;Kt=2}let Qt=j.drawRange,kt=j.attributes.position,ge=Qt.start*Kt,Me=(Qt.start+Qt.count)*Kt;wt!==null&&(ge=Math.max(ge,wt.start*Kt),Me=Math.min(Me,(wt.start+wt.count)*Kt)),Ft!==null?(ge=Math.max(ge,0),Me=Math.min(Me,Ft.count)):kt!=null&&(ge=Math.max(ge,0),Me=Math.min(Me,kt.count));let Te=Me-ge;if(Te<0||Te===1/0)return;ne.setup(G,tt,zt,j,Ft);let an,de=_t;if(Ft!==null&&(an=rt.get(Ft),de=Yt,de.setIndex(an)),G.isMesh)tt.wireframe===!0?(ft.setLineWidth(tt.wireframeLinewidth*ut()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(G.isLine){let Vt=tt.linewidth;Vt===void 0&&(Vt=1),ft.setLineWidth(Vt*ut()),G.isLineSegments?de.setMode(C.LINES):G.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else G.isPoints?de.setMode(C.POINTS):G.isSprite&&de.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Vt=G._multiDrawStarts,We=G._multiDrawCounts,pe=G._multiDrawCount,gn=Ft?rt.get(Ft).bytesPerElement:1,Li=pt.get(tt).currentProgram.getUniforms();for(let ln=0;ln<pe;ln++)Li.setValue(C,"_gl_DrawID",ln),de.render(Vt[ln]/gn,We[ln])}else if(G.isInstancedMesh)de.renderInstances(ge,Te,G.count);else if(j.isInstancedBufferGeometry){let Vt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,We=Math.min(j.instanceCount,Vt);de.renderInstances(ge,Te,We)}else de.render(ge,Te)};function jt(T,k,j){T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Pi(T,k,j),T.side=ei,T.needsUpdate=!0,Pi(T,k,j),T.side=ye):Pi(T,k,j)}this.compile=function(T,k,j=null){j===null&&(j=T),g=Jt.get(j),g.init(k),M.push(g),j.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();let tt=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let wt=G.material;if(wt)if(Array.isArray(wt))for(let Dt=0;Dt<wt.length;Dt++){let zt=wt[Dt];jt(zt,j,G),tt.add(zt)}else jt(wt,j,G),tt.add(wt)}),M.pop(),g=null,tt},this.compileAsync=function(T,k,j=null){let tt=this.compile(T,k,j);return new Promise(G=>{function wt(){if(tt.forEach(function(Dt){pt.get(Dt).currentProgram.isReady()&&tt.delete(Dt)}),tt.size===0){G(T);return}setTimeout(wt,10)}X.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let he=null;function Ne(T){he&&he(T)}function Oe(){Ae.stop()}function ke(){Ae.start()}let Ae=new Bh;Ae.setAnimationLoop(Ne),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(T){he=T,st.setAnimationLoop(T),T===null?Ae.stop():Ae.start()},st.addEventListener("sessionstart",Oe),st.addEventListener("sessionend",ke),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,b),g=Jt.get(T,M.length),g.init(k),M.push(g),yt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),It.setFromProjectionMatrix(yt),ht=this.localClippingEnabled,et=N.init(this.clippingPlanes,ht),_=Rt.get(T,d.length),_.init(),d.push(_),st.enabled===!0&&st.isPresenting===!0){let wt=x.xr.getDepthSensingMesh();wt!==null&&He(wt,k,-1/0,x.sortObjects)}He(T,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort($,J),te=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,te&&gt.addToRenderList(_,T),this.info.render.frame++,et===!0&&N.beginShadows();let j=g.state.shadowsArray;K.render(j,T,k),et===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=_.opaque,G=_.transmissive;if(g.setupLights(),k.isArrayCamera){let wt=k.cameras;if(G.length>0)for(let Dt=0,zt=wt.length;Dt<zt;Dt++){let Ft=wt[Dt];Tn(tt,G,T,Ft)}te&&gt.render(T);for(let Dt=0,zt=wt.length;Dt<zt;Dt++){let Ft=wt[Dt];Ai(_,T,Ft,Ft.viewport)}}else G.length>0&&Tn(tt,G,T,k),te&&gt.render(T),Ai(_,T,k);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,k),ne.resetDefaultState(),I=-1,U=null,M.pop(),M.length>0?(g=M[M.length-1],et===!0&&N.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function He(T,k,j,tt){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||It.intersectsSprite(T)){tt&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);let Dt=it.update(T),zt=T.material;zt.visible&&_.push(T,Dt,zt,j,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||It.intersectsObject(T))){let Dt=it.update(T),zt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Gt.copy(Dt.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(zt)){let Ft=Dt.groups;for(let Kt=0,Qt=Ft.length;Kt<Qt;Kt++){let kt=Ft[Kt],ge=zt[kt.materialIndex];ge&&ge.visible&&_.push(T,Dt,ge,j,Gt.z,kt)}}else zt.visible&&_.push(T,Dt,zt,j,Gt.z,null)}}let wt=T.children;for(let Dt=0,zt=wt.length;Dt<zt;Dt++)He(wt[Dt],k,j,tt)}function Ai(T,k,j,tt){let G=T.opaque,wt=T.transmissive,Dt=T.transparent;g.setupLightsView(j),et===!0&&N.setGlobalState(x.clippingPlanes,j),tt&&ft.viewport(y.copy(tt)),G.length>0&&on(G,k,j),wt.length>0&&on(wt,k,j),Dt.length>0&&on(Dt,k,j),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Tn(T,k,j,tt){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[tt.id]===void 0&&(g.state.transmissionRenderTarget[tt.id]=new Vn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?js:Gn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let wt=g.state.transmissionRenderTarget[tt.id],Dt=tt.viewport||y;wt.setSize(Dt.z,Dt.w);let zt=x.getRenderTarget();x.setRenderTarget(wt),x.getClearColor(F),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),te&&gt.render(j);let Ft=x.toneMapping;x.toneMapping=ti;let Kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),g.setupLightsView(tt),et===!0&&N.setGlobalState(x.clippingPlanes,tt),on(T,j,tt),A.updateMultisampleRenderTarget(wt),A.updateRenderTargetMipmap(wt),X.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let kt=0,ge=k.length;kt<ge;kt++){let Me=k[kt],Te=Me.object,an=Me.geometry,de=Me.material,Vt=Me.group;if(de.side===ye&&Te.layers.test(tt.layers)){let We=de.side;de.side=sn,de.needsUpdate=!0,Ci(Te,j,tt,an,de,Vt),de.side=We,de.needsUpdate=!0,Qt=!0}}Qt===!0&&(A.updateMultisampleRenderTarget(wt),A.updateRenderTargetMipmap(wt))}x.setRenderTarget(zt),x.setClearColor(F,P),Kt!==void 0&&(tt.viewport=Kt),x.toneMapping=Ft}function on(T,k,j){let tt=k.isScene===!0?k.overrideMaterial:null;for(let G=0,wt=T.length;G<wt;G++){let Dt=T[G],zt=Dt.object,Ft=Dt.geometry,Kt=tt===null?Dt.material:tt,Qt=Dt.group;zt.layers.test(j.layers)&&Ci(zt,k,j,Ft,Kt,Qt)}}function Ci(T,k,j,tt,G,wt){T.onBeforeRender(x,k,j,tt,G,wt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,k,j,tt,T,wt),G.transparent===!0&&G.side===ye&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,x.renderBufferDirect(j,k,tt,G,T,wt),G.side=ei,G.needsUpdate=!0,x.renderBufferDirect(j,k,tt,G,T,wt),G.side=ye):x.renderBufferDirect(j,k,tt,G,T,wt),T.onAfterRender(x,k,j,tt,G,wt)}function Pi(T,k,j){k.isScene!==!0&&(k=Xt);let tt=pt.get(T),G=g.state.lights,wt=g.state.shadowsArray,Dt=G.state.version,zt=Lt.getParameters(T,G.state,wt,k,j),Ft=Lt.getProgramCacheKey(zt),Kt=tt.programs;tt.environment=T.isMeshStandardMaterial?k.environment:null,tt.fog=k.fog,tt.envMap=(T.isMeshStandardMaterial?O:w).get(T.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Kt===void 0&&(T.addEventListener("dispose",Ht),Kt=new Map,tt.programs=Kt);let Qt=Kt.get(Ft);if(Qt!==void 0){if(tt.currentProgram===Qt&&tt.lightsStateVersion===Dt)return hc(T,zt),Qt}else zt.uniforms=Lt.getUniforms(T),T.onBeforeCompile(zt,x),Qt=Lt.acquireProgram(zt,Ft),Kt.set(Ft,Qt),tt.uniforms=zt.uniforms;let kt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=N.uniform),hc(T,zt),tt.needsLights=Mf(T),tt.lightsStateVersion=Dt,tt.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),tt.currentProgram=Qt,tt.uniformsList=null,Qt}function Ii(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=Qi.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function hc(T,k){let j=pt.get(T);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function _f(T,k,j,tt,G){k.isScene!==!0&&(k=Xt),A.resetTextureUnits();let wt=k.fog,Dt=tt.isMeshStandardMaterial?k.environment:null,zt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ci,Ft=(tt.isMeshStandardMaterial?O:w).get(tt.envMap||Dt),Kt=tt.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qt=!!j.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!j.morphAttributes.position,ge=!!j.morphAttributes.normal,Me=!!j.morphAttributes.color,Te=ti;tt.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Te=x.toneMapping);let an=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=an!==void 0?an.length:0,Vt=pt.get(tt),We=g.state.lights;if(et===!0&&(ht===!0||T!==U)){let un=T===U&&tt.id===I;N.setState(tt,T,un)}let pe=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==We.state.version||Vt.outputColorSpace!==zt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isBatchedMesh&&Vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Vt.instancingMorph===!1&&G.morphTexture!==null||Vt.envMap!==Ft||tt.fog===!0&&Vt.fog!==wt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==N.numPlanes||Vt.numIntersection!==N.numIntersection)||Vt.vertexAlphas!==Kt||Vt.vertexTangents!==Qt||Vt.morphTargets!==kt||Vt.morphNormals!==ge||Vt.morphColors!==Me||Vt.toneMapping!==Te||Vt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Vt.__version=tt.version);let gn=Vt.currentProgram;pe===!0&&(gn=Pi(tt,k,G));let Li=!1,ln=!1,To=!1,Ce=gn.getUniforms(),qn=Vt.uniforms;if(ft.useProgram(gn.program)&&(Li=!0,ln=!0,To=!0),tt.id!==I&&(I=tt.id,ln=!0),Li||U!==T){Y.reverseDepthBuffer?(xt.copy(T.projectionMatrix),uu(xt),du(xt),Ce.setValue(C,"projectionMatrix",xt)):Ce.setValue(C,"projectionMatrix",T.projectionMatrix),Ce.setValue(C,"viewMatrix",T.matrixWorldInverse);let un=Ce.map.cameraPosition;un!==void 0&&un.setValue(C,Ut.setFromMatrixPosition(T.matrixWorld)),Y.logarithmicDepthBuffer&&Ce.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ce.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,ln=!0,To=!0)}if(G.isSkinnedMesh){Ce.setOptional(C,G,"bindMatrix"),Ce.setOptional(C,G,"bindMatrixInverse");let un=G.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ce.setValue(C,"boneTexture",un.boneTexture,A))}G.isBatchedMesh&&(Ce.setOptional(C,G,"batchingTexture"),Ce.setValue(C,"batchingTexture",G._matricesTexture,A),Ce.setOptional(C,G,"batchingIdTexture"),Ce.setValue(C,"batchingIdTexture",G._indirectTexture,A),Ce.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&Ce.setValue(C,"batchingColorTexture",G._colorsTexture,A));let Ro=j.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0)&&Ct.update(G,j,gn),(ln||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,Ce.setValue(C,"receiveShadow",G.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(qn.envMap.value=Ft,qn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&k.environment!==null&&(qn.envMapIntensity.value=k.environmentIntensity),ln&&(Ce.setValue(C,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&vf(qn,To),wt&&tt.fog===!0&&vt.refreshFogUniforms(qn,wt),vt.refreshMaterialUniforms(qn,tt,nt,z,g.state.transmissionRenderTarget[T.id]),Qi.upload(C,Ii(Vt),qn,A)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Qi.upload(C,Ii(Vt),qn,A),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ce.setValue(C,"center",G.center),Ce.setValue(C,"modelViewMatrix",G.modelViewMatrix),Ce.setValue(C,"normalMatrix",G.normalMatrix),Ce.setValue(C,"modelMatrix",G.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let un=tt.uniformsGroups;for(let Ao=0,Ef=un.length;Ao<Ef;Ao++){let fc=un[Ao];B.update(fc,gn),B.bind(fc,gn)}}return gn}function vf(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Mf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,k,j){pt.get(T.texture).__webglTexture=k,pt.get(T.depthTexture).__webglTexture=j;let tt=pt.get(T);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=j===void 0,tt.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){let j=pt.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){b=T,R=k,S=j;let tt=!0,G=null,wt=!1,Dt=!1;if(T){let Ft=pt.get(T);if(Ft.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(C.FRAMEBUFFER,null),tt=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ft.__hasExternalTextures)A.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let kt=T.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&pt.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Dt=!0);let Qt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?G=Qt[k][j]:G=Qt[k],wt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?G=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Qt)?G=Qt[j]:G=Qt,y.copy(T.viewport),E.copy(T.scissor),H=T.scissorTest}else y.copy(ot).multiplyScalar(nt).floor(),E.copy(ct).multiplyScalar(nt).floor(),H=bt;if(ft.bindFramebuffer(C.FRAMEBUFFER,G)&&tt&&ft.drawBuffers(T,G),ft.viewport(y),ft.scissor(E),ft.setScissorTest(H),wt){let Ft=pt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ft.__webglTexture,j)}else if(Dt){let Ft=pt.get(T.texture),Kt=k||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,j||0,Kt)}I=-1},this.readRenderTargetPixels=function(T,k,j,tt,G,wt,Dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){ft.bindFramebuffer(C.FRAMEBUFFER,zt);try{let Ft=T.texture,Kt=Ft.format,Qt=Ft.type;if(!Y.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-tt&&j>=0&&j<=T.height-G&&C.readPixels(k,j,tt,G,Nt.convert(Kt),Nt.convert(Qt),wt)}finally{let Ft=b!==null?pt.get(b).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,k,j,tt,G,wt,Dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){let Ft=T.texture,Kt=Ft.format,Qt=Ft.type;if(!Y.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-tt&&j>=0&&j<=T.height-G){ft.bindFramebuffer(C.FRAMEBUFFER,zt);let kt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,kt),C.bufferData(C.PIXEL_PACK_BUFFER,wt.byteLength,C.STREAM_READ),C.readPixels(k,j,tt,G,Nt.convert(Kt),Nt.convert(Qt),0);let ge=b!==null?pt.get(b).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,ge);let Me=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await fu(C,Me,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,kt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,wt),C.deleteBuffer(kt),C.deleteSync(Me),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,j=0){T.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);let tt=Math.pow(2,-j),G=Math.floor(T.image.width*tt),wt=Math.floor(T.image.height*tt),Dt=k!==null?k.x:0,zt=k!==null?k.y:0;A.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,j,0,0,Dt,zt,G,wt),ft.unbindTexture()},this.copyTextureToTexture=function(T,k,j=null,tt=null,G=0){T.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,T=arguments[1],k=arguments[2],G=arguments[3]||0,j=null);let wt,Dt,zt,Ft,Kt,Qt;j!==null?(wt=j.max.x-j.min.x,Dt=j.max.y-j.min.y,zt=j.min.x,Ft=j.min.y):(wt=T.image.width,Dt=T.image.height,zt=0,Ft=0),tt!==null?(Kt=tt.x,Qt=tt.y):(Kt=0,Qt=0);let kt=Nt.convert(k.format),ge=Nt.convert(k.type);A.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let Me=C.getParameter(C.UNPACK_ROW_LENGTH),Te=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),de=C.getParameter(C.UNPACK_SKIP_ROWS),Vt=C.getParameter(C.UNPACK_SKIP_IMAGES),We=T.isCompressedTexture?T.mipmaps[G]:T.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,We.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,G,Kt,Qt,wt,Dt,kt,ge,We.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,G,Kt,Qt,We.width,We.height,kt,We.data):C.texSubImage2D(C.TEXTURE_2D,G,Kt,Qt,wt,Dt,kt,ge,We),C.pixelStorei(C.UNPACK_ROW_LENGTH,Me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,de),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Vt),G===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j=null,tt=null,G=0){T.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,tt=arguments[1]||null,T=arguments[2],k=arguments[3],G=arguments[4]||0);let wt,Dt,zt,Ft,Kt,Qt,kt,ge,Me,Te=T.isCompressedTexture?T.mipmaps[G]:T.image;j!==null?(wt=j.max.x-j.min.x,Dt=j.max.y-j.min.y,zt=j.max.z-j.min.z,Ft=j.min.x,Kt=j.min.y,Qt=j.min.z):(wt=Te.width,Dt=Te.height,zt=Te.depth,Ft=0,Kt=0,Qt=0),tt!==null?(kt=tt.x,ge=tt.y,Me=tt.z):(kt=0,ge=0,Me=0);let an=Nt.convert(k.format),de=Nt.convert(k.type),Vt;if(k.isData3DTexture)A.setTexture3D(k,0),Vt=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),Vt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let We=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(C.UNPACK_SKIP_PIXELS),Li=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Te.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qt),T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Vt,G,kt,ge,Me,wt,Dt,zt,an,de,Te.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(Vt,G,kt,ge,Me,wt,Dt,zt,an,Te.data):C.texSubImage3D(Vt,G,kt,ge,Me,wt,Dt,zt,an,de,Te),C.pixelStorei(C.UNPACK_ROW_LENGTH,We),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Li),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),G===0&&k.generateMipmaps&&C.generateMipmap(Vt),ft.unbindTexture()},this.initRenderTarget=function(T){pt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ft.unbindTexture()},this.resetState=function(){R=0,S=0,b=null,ft.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ql?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===uo?"display-p3":"srgb"}};var oi=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var dl=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=nn,f=nn,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yi=new ae,ah=new ae,Ar=[],lh=new Wn,lg=new ae,As=new q,Cs=new ii,as=class extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),lh.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(lh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Cs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),ah.multiplyMatrices(n,Yi),As.matrixWorld=ah,As.raycast(t,Ar);for(let o=0,a=Ar.length;o<a;o++){let l=Ar[o];l.instanceId=r,l.object=this,e.push(l)}Ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dl(new Float32Array(s*this.count),s,this.count,Gl,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gs=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ch=new ae,pl=new Bs,Cr=new ii,Pr=new L,eo=class extends De{constructor(t=new Re,e=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;ch.copy(s).invert(),pl.copy(t.ray).applyMatrix4(ch);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let p=u,_=m;p<_;p++){let g=c.getX(p);Pr.fromBufferAttribute(h,g),hh(Pr,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let p=u,_=m;p<_;p++)Pr.fromBufferAttribute(h,p),hh(Pr,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hh(i,t,e,n,s,r,o){let a=pl.distanceSqToPoint(i);if(a<e){let l=new L;pl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rn=class extends je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let f=n[s],u=n[s+1]-f,m=(o-f)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,l=new ae;for(let m=0;m<=t;m++){let p=m/t;s[m]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,p))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Xe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],m*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vs=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*f-m*h+this.aX,c=u*h+m*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends Vs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,h){let u=(o-r)/c-(a-r)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+h)+(l-a)/h;u*=f,m*=f,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ir=new L,oa=new Zl,aa=new Zl,la=new Zl,gl=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),c=Ir);let h=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(f),m);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),oa.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,p,_,g),aa.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,p,_,g),la.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,p,_,g)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),aa.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),la.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(oa.calc(l),aa.calc(l),la.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function cg(i,t){let e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function fg(i,t){return i*i*t}function Ds(i,t,e,n){return cg(i,t)+hg(i,e)+fg(i,n)}function ug(i,t){let e=1-i;return e*e*e*t}function dg(i,t){let e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function Us(i,t,e,n,s){return ug(i,t)+dg(i,e)+pg(i,n)+mg(i,s)}var no=class extends pn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Us(t,s.x,r.x,o.x,a.x),Us(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yl=class extends pn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Us(t,s.x,r.x,o.x,a.x),Us(t,s.y,r.y,o.y,a.y),Us(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},io=class extends pn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends pn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends pn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,s.x,r.x,o.x),Ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends pn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,s.x,r.x,o.x),Ds(t,s.y,r.y,o.y),Ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(fh(a,l.x,c.x,f.x,h.x),fh(a,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:gl,CubicBezierCurve:no,CubicBezierCurve3:yl,EllipseCurve:Vs,LineCurve:io,LineCurve3:xl,QuadraticBezierCurve:so,QuadraticBezierCurve3:_l,SplineCurve:ro}),Ml=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vl[s.type]().fromJSON(s))}return this}},Ws=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new io(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new so(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new no(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Vs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},El=class i extends Re{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/e,h=new L,u=new Mt,m=new L,p=new L,_=new L,g=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,m.x=d*1,m.y=-g,m.z=d*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,m.x=d*1,m.y=-g,m.z=d*0,p.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(p)}for(let M=0;M<=e;M++){let x=n+M*f*s,v=Math.sin(x),R=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*R,o.push(h.x,h.y,h.z),u.x=M/e,u.y=S/(t.length-1),a.push(u.x,u.y);let b=l[3*S+0]*v,I=l[3*S+1],U=l[3*S+0]*R;c.push(b,I,U)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let v=x+M*t.length,R=v,S=v+t.length,b=v+t.length+1,I=v+1;r.push(R,S,I),r.push(b,I,S)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Qe=class i extends El{constructor(t=1,e=1,n=4,s=8){let r=new Ws;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ai=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,f=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let m=n+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[u]/t+1)/2,f.y=(o[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Q=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],u=[],m=[],p=0,_=[],g=n/2,d=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(m,2));function M(){let v=new L,R=new L,S=0,b=(e-t)/n;for(let I=0;I<=r;I++){let U=[],y=I/r,E=y*(e-t)+t;for(let H=0;H<=s;H++){let F=H/s,P=F*l+a,W=Math.sin(P),z=Math.cos(P);R.x=E*W,R.y=-y*n+g,R.z=E*z,h.push(R.x,R.y,R.z),v.set(W,b,z).normalize(),u.push(v.x,v.y,v.z),m.push(F,1-y),U.push(p++)}_.push(U)}for(let I=0;I<s;I++)for(let U=0;U<r;U++){let y=_[U][I],E=_[U+1][I],H=_[U+1][I+1],F=_[U][I+1];t>0&&(f.push(y,E,F),S+=3),e>0&&(f.push(E,H,F),S+=3)}c.addGroup(d,S,0),d+=S}function x(v){let R=p,S=new Mt,b=new L,I=0,U=v===!0?t:e,y=v===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,g*y,0),u.push(0,y,0),m.push(.5,.5),p++;let E=p;for(let H=0;H<=s;H++){let P=H/s*l+a,W=Math.cos(P),z=Math.sin(P);b.x=U*z,b.y=g*y,b.z=U*W,h.push(b.x,b.y,b.z),u.push(0,y,0),S.x=W*.5+.5,S.y=z*.5*y+.5,m.push(S.x,S.y),p++}for(let H=0;H<s;H++){let F=R+H,P=E+H;v===!0?f.push(P,P+1,F):f.push(P+1,P,F),I+=3}c.addGroup(d,I,v===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class i extends Q{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),f(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new L,v=new L,R=new L;for(let S=0;S<e.length;S+=3)m(e[S+0],x),m(e[S+1],v),m(e[S+2],R),l(x,v,R,M)}function l(M,x,v,R){let S=R+1,b=[];for(let I=0;I<=S;I++){b[I]=[];let U=M.clone().lerp(v,I/S),y=x.clone().lerp(v,I/S),E=S-I;for(let H=0;H<=E;H++)H===0&&I===S?b[I][H]=U:b[I][H]=U.clone().lerp(y,H/E)}for(let I=0;I<S;I++)for(let U=0;U<2*(S-I)-1;U++){let y=Math.floor(U/2);U%2===0?(u(b[I][y+1]),u(b[I+1][y]),u(b[I][y])):(u(b[I][y+1]),u(b[I+1][y+1]),u(b[I+1][y]))}}function c(M){let x=new L;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function f(){let M=new L;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let v=g(M)/2/Math.PI+.5,R=d(M)/Math.PI+.5;o.push(v,1-R)}p(),h()}function h(){for(let M=0;M<o.length;M+=6){let x=o[M+0],v=o[M+2],R=o[M+4],S=Math.max(x,v,R),b=Math.min(x,v,R);S>.9&&b<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,x){let v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function p(){let M=new L,x=new L,v=new L,R=new L,S=new Mt,b=new Mt,I=new Mt;for(let U=0,y=0;U<r.length;U+=9,y+=6){M.set(r[U+0],r[U+1],r[U+2]),x.set(r[U+3],r[U+4],r[U+5]),v.set(r[U+6],r[U+7],r[U+8]),S.set(o[y+0],o[y+1]),b.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),R.copy(M).add(x).add(v).divideScalar(3);let E=g(R);_(S,y+0,M,E),_(b,y+2,x,E),_(I,y+4,v,E)}}function _(M,x,v,R){R<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=R/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Xs=class i extends oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var qs=class extends Ws{constructor(t){super(t),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ws().fromJSON(s))}return this}},gg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Vh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,u,m;if(n&&(r=Mg(i,t,r,e)),i.length>80*e){a=c=i[0],l=f=i[1];for(let p=e;p<s;p+=e)h=i[p],u=i[p+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);m=Math.max(c-a,f-l),m=m!==0?32767/m:0}return Ys(r,o,e,a,l,m,0),o}};function Vh(i,t,e,n,s){let r,o;if(s===Lg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=uh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=uh(r,i[r],i[r+1],o);return o&&mo(o,o.next)&&($s(o),o=o.next),o}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mo(e,e.next)||be(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Tg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?xg(i,n,s,r):yg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),$s(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=_g(wi(i),t,e),Ys(i,t,e,n,s,r,2)):o===2&&vg(i,t,e,n,s,r):Ys(wi(i),t,e,n,s,r,1);break}}}function yg(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=f&&p.x<=u&&p.y>=h&&p.y<=m&&$i(s,a,r,l,o,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function xg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,m=a<l?a<c?a:c:l<c?l:c,p=f<h?f<u?f:u:h<u?h:u,_=a>l?a>c?a:c:l>c?l:c,g=f>h?f>u?f:u:h>u?h:u,d=wl(m,p,t,e,n),M=wl(_,g,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=d&&v&&v.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&$i(a,f,l,h,c,u,x.x,x.y)&&be(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&$i(a,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&$i(a,f,l,h,c,u,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&$i(a,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _g(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!mo(s,r)&&Wh(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$s(n),$s(n.next),n=i=r),n=n.next}while(n!==i);return wi(n)}function vg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cg(o,a)){let l=Xh(o,a);o=wi(o,o.next),l=wi(l,l.next),Ys(o,t,e,n,s,r,0),Ys(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Mg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Vh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ag(c));for(s.sort(Eg),r=0;r<s.length;r++)e=wg(s[r],e);return e}function Eg(i,t){return i.x-t.x}function wg(i,t){let e=Sg(i,t);if(!e)return t;let n=Xh(e,i);return wi(n,n.next),wi(e,e.next)}function Sg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$i(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Zs(e,i)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&bg(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function bg(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Tg(i,t,e,n){let s=i;do s.z===0&&(s.z=wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rg(s)}function Rg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ag(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $i(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Cg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pg(i,t)&&(Zs(i,t)&&Zs(t,i)&&Ig(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||mo(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mo(i,t){return i.x===t.x&&i.y===t.y}function Wh(i,t,e,n){let s=Dr(be(i,t,e)),r=Dr(be(i,t,n)),o=Dr(be(e,n,i)),a=Dr(be(e,n,t));return!!(s!==r&&o!==a||s===0&&Lr(i,e,t)||r===0&&Lr(i,n,t)||o===0&&Lr(e,i,n)||a===0&&Lr(e,t,n))}function Lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Dr(i){return i>0?1:i<0?-1:0}function Pg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Ig(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xh(i,t){let e=new Sl(i.i,i.x,i.y),n=new Sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uh(i,t,e,n){let s=new Sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ns=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dh(t),ph(n,t);let o=t.length;e.forEach(dh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ph(n,e[l]);let a=gg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ao=class i extends Re{constructor(t=new qs([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Dg,x,v=!1,R,S,b,I;d&&(x=d.getSpacedPoints(f),v=!0,u=!1,R=d.computeFrenetFrames(f,!1),S=new L,b=new L,I=new L),u||(g=0,m=0,p=0,_=0);let U=a.extractPoints(c),y=U.shape,E=U.holes;if(!Ns.isClockWise(y)){y=y.reverse();for(let ut=0,C=E.length;ut<C;ut++){let Et=E[ut];Ns.isClockWise(Et)&&(E[ut]=Et.reverse())}}let F=Ns.triangulateShape(y,E),P=y;for(let ut=0,C=E.length;ut<C;ut++){let Et=E[ut];y=y.concat(Et)}function W(ut,C,Et){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(C,Et)}let z=y.length,nt=F.length;function $(ut,C,Et){let X,Y,ft,mt=ut.x-C.x,pt=ut.y-C.y,A=Et.x-ut.x,w=Et.y-ut.y,O=mt*mt+pt*pt,rt=mt*w-pt*A;if(Math.abs(rt)>Number.EPSILON){let at=Math.sqrt(O),it=Math.sqrt(A*A+w*w),Lt=C.x-pt/at,vt=C.y+mt/at,Rt=Et.x-w/it,Jt=Et.y+A/it,N=((Rt-Lt)*w-(Jt-vt)*A)/(mt*w-pt*A);X=Lt+mt*N-ut.x,Y=vt+pt*N-ut.y;let K=X*X+Y*Y;if(K<=2)return new Mt(X,Y);ft=Math.sqrt(K/2)}else{let at=!1;mt>Number.EPSILON?A>Number.EPSILON&&(at=!0):mt<-Number.EPSILON?A<-Number.EPSILON&&(at=!0):Math.sign(pt)===Math.sign(w)&&(at=!0),at?(X=-pt,Y=mt,ft=Math.sqrt(O)):(X=mt,Y=pt,ft=Math.sqrt(O/2))}return new Mt(X/ft,Y/ft)}let J=[];for(let ut=0,C=P.length,Et=C-1,X=ut+1;ut<C;ut++,Et++,X++)Et===C&&(Et=0),X===C&&(X=0),J[ut]=$(P[ut],P[Et],P[X]);let ot=[],ct,bt=J.concat();for(let ut=0,C=E.length;ut<C;ut++){let Et=E[ut];ct=[];for(let X=0,Y=Et.length,ft=Y-1,mt=X+1;X<Y;X++,ft++,mt++)ft===Y&&(ft=0),mt===Y&&(mt=0),ct[X]=$(Et[X],Et[ft],Et[mt]);ot.push(ct),bt=bt.concat(ct)}for(let ut=0;ut<g;ut++){let C=ut/g,Et=m*Math.cos(C*Math.PI/2),X=p*Math.sin(C*Math.PI/2)+_;for(let Y=0,ft=P.length;Y<ft;Y++){let mt=W(P[Y],J[Y],X);yt(mt.x,mt.y,-Et)}for(let Y=0,ft=E.length;Y<ft;Y++){let mt=E[Y];ct=ot[Y];for(let pt=0,A=mt.length;pt<A;pt++){let w=W(mt[pt],ct[pt],X);yt(w.x,w.y,-Et)}}}let It=p+_;for(let ut=0;ut<z;ut++){let C=u?W(y[ut],bt[ut],It):y[ut];v?(b.copy(R.normals[0]).multiplyScalar(C.x),S.copy(R.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(b).add(S),yt(I.x,I.y,I.z)):yt(C.x,C.y,0)}for(let ut=1;ut<=f;ut++)for(let C=0;C<z;C++){let Et=u?W(y[C],bt[C],It):y[C];v?(b.copy(R.normals[ut]).multiplyScalar(Et.x),S.copy(R.binormals[ut]).multiplyScalar(Et.y),I.copy(x[ut]).add(b).add(S),yt(I.x,I.y,I.z)):yt(Et.x,Et.y,h/f*ut)}for(let ut=g-1;ut>=0;ut--){let C=ut/g,Et=m*Math.cos(C*Math.PI/2),X=p*Math.sin(C*Math.PI/2)+_;for(let Y=0,ft=P.length;Y<ft;Y++){let mt=W(P[Y],J[Y],X);yt(mt.x,mt.y,h+Et)}for(let Y=0,ft=E.length;Y<ft;Y++){let mt=E[Y];ct=ot[Y];for(let pt=0,A=mt.length;pt<A;pt++){let w=W(mt[pt],ct[pt],X);v?yt(w.x,w.y+x[f-1].y,x[f-1].x+Et):yt(w.x,w.y,h+Et)}}}et(),ht();function et(){let ut=s.length/3;if(u){let C=0,Et=z*C;for(let X=0;X<nt;X++){let Y=F[X];Ut(Y[2]+Et,Y[1]+Et,Y[0]+Et)}C=f+g*2,Et=z*C;for(let X=0;X<nt;X++){let Y=F[X];Ut(Y[0]+Et,Y[1]+Et,Y[2]+Et)}}else{for(let C=0;C<nt;C++){let Et=F[C];Ut(Et[2],Et[1],Et[0])}for(let C=0;C<nt;C++){let Et=F[C];Ut(Et[0]+z*f,Et[1]+z*f,Et[2]+z*f)}}n.addGroup(ut,s.length/3-ut,0)}function ht(){let ut=s.length/3,C=0;xt(P,C),C+=P.length;for(let Et=0,X=E.length;Et<X;Et++){let Y=E[Et];xt(Y,C),C+=Y.length}n.addGroup(ut,s.length/3-ut,1)}function xt(ut,C){let Et=ut.length;for(;--Et>=0;){let X=Et,Y=Et-1;Y<0&&(Y=ut.length-1);for(let ft=0,mt=f+g*2;ft<mt;ft++){let pt=z*ft,A=z*(ft+1),w=C+X+pt,O=C+Y+pt,rt=C+Y+A,at=C+X+A;Gt(w,O,rt,at)}}}function yt(ut,C,Et){l.push(ut),l.push(C),l.push(Et)}function Ut(ut,C,Et){Xt(ut),Xt(C),Xt(Et);let X=s.length/3,Y=M.generateTopUV(n,s,X-3,X-2,X-1);te(Y[0]),te(Y[1]),te(Y[2])}function Gt(ut,C,Et,X){Xt(ut),Xt(C),Xt(X),Xt(C),Xt(Et),Xt(X);let Y=s.length/3,ft=M.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);te(ft[0]),te(ft[1]),te(ft[3]),te(ft[1]),te(ft[2]),te(ft[3])}function Xt(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function te(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ug(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vl[s.type]().fromJSON(s)),new i(n,t.options)}},Dg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],u=t[s*3],m=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],d=t[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-h),new Mt(u,1-p),new Mt(_,1-d)]:[new Mt(a,1-l),new Mt(f,1-h),new Mt(m,1-p),new Mt(g,1-d)]}};function Ug(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Je=class i extends oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Dn=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=t,u=(e-t)/s,m=new L,p=new Mt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let d=r+g/n*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),p.x=(m.x/e+1)/2,p.y=(m.y/e+1)/2,f.push(p.x,p.y)}h+=u}for(let _=0;_<s;_++){let g=_*(n+1);for(let d=0;d<n;d++){let M=d+g,x=M,v=M+n+1,R=M+n+2,S=M+1;a.push(x,v,S),a.push(v,R,S)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Pt=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new L,u=new L,m=[],p=[],_=[],g=[];for(let d=0;d<=n;d++){let M=[],x=d/n,v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let S=R/e;h.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),g.push(S+v,1-x),M.push(c++)}f.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){let x=f[d][M+1],v=f[d][M],R=f[d+1][M],S=f[d+1][M+1];(d!==0||o>0)&&m.push(x,v,S),(d!==n-1||l<Math.PI)&&m.push(v,R,S)}this.setIndex(m),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pe=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],f=new L,h=new L,u=new L;for(let m=0;m<=n;m++)for(let p=0;p<=s;p++){let _=p/s*r,g=m/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let p=1;p<=s;p++){let _=(s+1)*m+p-1,g=(s+1)*(m-1)+p-1,d=(s+1)*(m-1)+p,M=(s+1)*m+p;o.push(_,g,M),o.push(g,d,M)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var se=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ur(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ng(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gc:r=t,a=2*e-n;break;case yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:o=t,l=2*n-e;break;case yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,d=-u*g+2*u*_-u*p,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,x=(-1-m)*g+(1.5+m)*_+.5*p,v=m*g-m*_;for(let R=0;R!==a;++R)r[R]=d*o[f+R]+M*o[c+R]+x*o[l+R]+v*o[h+R];return r}},Tl=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},Rl=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case $a:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ng(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Po,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,u=h-n,m=h+n;for(let p=0;p!==n;++p){let _=e[h+p];if(_!==e[u+p]||_!==e[m+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[h+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=$a;var Si=class extends Sn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Gr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Sn{};Al.prototype.ValueTypeName="color";var Cl=class extends Sn{};Cl.prototype.ValueTypeName="number";var Pl=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},lo=class extends Sn{InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Sn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Gr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Sn{};Il.prototype.ValueTypeName="vector";var mh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ll=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let m=c[h],p=c[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return p}return null}}},Hg=new Ll,Js=class{constructor(t){this.manager=t!==void 0?t:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Js.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dl=class extends Js{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=mh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=zs("img");function l(){f(),mh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){f(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var cs=class extends Js{constructor(t){super(t)}load(t,e,n,s){let r=new je,o=new Dl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},hs=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},fs=class extends hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ca=new ae,gh=new L,yh=new L,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(gh),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xh=new ae,Ps=new L,ha=new L,Ul=class extends co{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),ha.copy(n.position),ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ha),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}},ho=class extends hs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ul}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Nl=class extends co{constructor(){super(new ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},li=class extends hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},us=class extends hs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ds=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=_h();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function _h(){return performance.now()}var $l="\\[\\]\\.:\\/",zg=new RegExp("["+$l+"]","g"),Jl="[^"+$l+"]",Bg="[^"+$l.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Og=/(WCOD+)?/.source.replace("WCOD",Bg),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Vg=new RegExp("^"+Fg+Og+kg+Gg+"$"),Wg=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(t){let e=Vg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Hl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var vh=new ae,ps=class{constructor(t,e,n=0,s=1/0){this.ray=new Bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(Mh),n}};function Mh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var xs=class{constructor(t,e,n,s,r=.2){this.minX=t,this.minZ=e,this.cell=r,this.cols=Math.ceil((n-t)/r),this.rows=Math.ceil((s-e)/r),this.blocked=new Uint8Array(this.cols*this.rows)}idx(t,e){return e*this.cols+t}toCell(t,e){return{c:Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cell))),r:Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cell)))}}center(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}blockRect(t,e,n,s,r=.22){let o=this.toCell(Math.min(t,n)-r,Math.min(e,s)-r),a=this.toCell(Math.max(t,n)+r,Math.max(e,s)+r);for(let l=o.r;l<=a.r;l++)for(let c=o.c;c<=a.c;c++)this.blocked[this.idx(c,l)]=1}isFree(t,e){let{c:n,r:s}=this.toCell(t,e);return!this.blocked[this.idx(n,s)]}nearestFree(t,e){if(!this.blocked[this.idx(t,e)])return{c:t,r:e};for(let n=1;n<12;n++)for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){let o=t+r,a=e+s;if(!(o<0||a<0||o>=this.cols||a>=this.rows)&&!this.blocked[this.idx(o,a)])return{c:o,r:a}}return{c:t,r:e}}lineFree(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.max(1,Math.ceil(n/(this.cell*.5)));for(let r=1;r<s;r++){let o=r/s;if(!this.isFree(t.x+(e.x-t.x)*o,t.z+(e.z-t.z)*o))return!1}return!0}find(t,e){let n=this.toCell(t.x,t.z),s=this.nearestFree(...Object.values(this.toCell(e.x,e.z))),r=this.idx(n.c,n.r),o=this.idx(s.c,s.r);if(r===o)return[{x:e.x,z:e.z}];let a=this.cols*this.rows,l=new Float32Array(a).fill(1/0),c=new Int32Array(a).fill(-1),f=new Uint8Array(a),h=[],u=(S,b)=>{h.push([b,S]);let I=h.length-1;for(;I>0;){let U=I-1>>1;if(h[U][0]<=h[I][0])break;[h[U],h[I]]=[h[I],h[U]],I=U}},m=()=>{let S=h[0],b=h.pop();if(h.length){h[0]=b;let I=0;for(;;){let U=2*I+1,y=U+1,E=I;if(U<h.length&&h[U][0]<h[E][0]&&(E=U),y<h.length&&h[y][0]<h[E][0]&&(E=y),E===I)break;[h[E],h[I]]=[h[I],h[E]],I=E}}return S[1]},p=S=>{let b=Math.abs(S%this.cols-s.c),I=Math.abs(Math.floor(S/this.cols)-s.r);return b+I+(Math.SQRT2-2)*Math.min(b,I)};l[r]=0,u(r,p(r));let _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],g=!1;for(;h.length;){let S=m();if(f[S])continue;if(S===o){g=!0;break}f[S]=1;let b=S%this.cols,I=Math.floor(S/this.cols);for(let[U,y,E]of _){let H=b+U,F=I+y;if(H<0||F<0||H>=this.cols||F>=this.rows)continue;let P=this.idx(H,F);if(this.blocked[P]&&P!==o||U&&y&&(this.blocked[this.idx(b+U,I)]||this.blocked[this.idx(b,I+y)]))continue;let W=l[S]+E;W<l[P]&&(l[P]=W,c[P]=S,u(P,W+p(P)))}}if(!g)return[{x:e.x,z:e.z}];let d=[];for(let S=o;S!==-1&&S!==r;S=c[S])d.push(S);d.reverse();let M=d.map(S=>this.center(S%this.cols,Math.floor(S/this.cols)));M[M.length-1]={x:e.x,z:e.z};let x=[],v={x:t.x,z:t.z},R=0;for(;R<M.length;){let S=R;for(let b=M.length-1;b>R;b--)if(this.lineFree(v,M[b])){S=b;break}x.push(M[S]),v=M[S],R=S+1}return x}};var Xn=(i,t=.85)=>new se({color:i,roughness:t}),Kl=[{x:.4,z:.4},{x:-1.6,z:.6},{x:1.9,z:0},{x:-5,z:2.6},{x:5.4,z:-3.3},{x:-2.4,z:3.9},{x:2.6,z:3.8},{x:-5.6,z:-2.8},{x:.2,z:-2.2},{x:4.4,z:-3.7},{x:6,z:12.6},{x:16.4,z:12},{x:22,z:6.2}],_s=class{constructor(t,e){this.nav=e,this.root=new Bt,this.body=new Bt,this.root.add(this.body);let n=Xn("#e39a4e"),s=Xn("#b86e2c"),r=Xn("#fbf3e6"),o=Xn("#f2a3a3"),a=(h,u,m,p,_,g)=>{let d=new q(u,m);return d.position.set(p,_,g),d.castShadow=!0,h.add(d),d},l=a(this.body,new Qe(.11,.26,6,12),n,0,.2,0);l.rotation.x=Math.PI/2,a(this.body,new Pt(.075,10,8),r,0,.17,.12).scale.set(1,1,.7);for(let h of[-.06,.04])a(this.body,new St(.2,.03,.05),s,0,.3,h).rotation.x=.1;this.head=new Bt,this.head.position.set(0,.32,.2),this.body.add(this.head),a(this.head,new Pt(.1,14,12),n,0,0,0).scale.set(1.05,.95,.95),a(this.head,new Pt(.05,10,8),r,0,-.03,.07).scale.set(1.2,.8,.7);for(let h of[-1,1]){let u=a(this.head,new qe(.035,.07,4),n,h*.055,.09,-.01);u.rotation.z=-h*.25,a(this.head,new Pt(.012,6,6),Xn("#1d1a17",.3),h*.038,.02,.088)}a(this.head,new Pt(.01,6,6),o,0,-.01,.1),this.legs=[];for(let[h,u]of[[-.06,.12],[.06,.12],[-.06,-.12],[.06,-.12]]){let m=new Bt;m.position.set(h,.15,u),this.body.add(m),a(m,new Q(.025,.022,.15,6),n,0,-.075,0),a(m,new Pt(.026,6,6),r,0,-.15,.01),this.legs.push(m)}this.tail=[];let c=this.body,f=[0,.24,-.24];for(let h=0;h<5;h++){let u=new Bt;u.position.set(...f),c.add(u),a(u,new Q(.022-h*.002,.025-h*.002,.08,6),h===4?s:n,0,.04,0),this.tail.push(u),c=u,f=[0,.08,0]}this.tail[0].rotation.x=-.9,this.pos={x:1,z:.8},this.facing=0,this.path=[],this.mode="sit",this.until=performance.now()/1e3+4,this.phase=0,this.root.position.set(this.pos.x,0,this.pos.z),t.add(this.root)}pet(){this.path=[],this.mode="happy",this.until=performance.now()/1e3+2.6}headWorld(t){return this.head.updateWorldMatrix(!0,!1),t.set(0,.2,0).applyMatrix4(this.head.matrixWorld)}props(){if(this.bowl)return;let t=this.root.parent;this.bowl=new Bt;let e=new q(new Q(.13,.1,.06,16,1,!0),Xn("#e1262d",.5));e.material.side=ye,e.position.y=.03;let n=new q(new Q(.115,.115,.02,16),Xn("#b8742f",.9));n.position.y=.045,this.bowl.add(e,n),this.food=n,this.bowl.visible=!1,t.add(this.bowl),this.yarn=new Bt;let s=new q(new Pt(.07,12,10),Xn("#ff7aa8",.9));s.position.y=.07;let r=new q(new Pe(.07,.008,6,20),Xn("#e84f87",.9));r.position.y=.07,r.rotation.y=.6,this.yarn.add(s,r),this.yarn.visible=!1,t.add(this.yarn)}command(t,e=0){if(!t||this.cmd&&t.seq<=this.cmd.seq&&t.at<=this.cmd.at)return;this.remote=!0;let n=this.cmd&&this.cmd.seq!==t.seq&&t.act;this.cmd=t,this.skew=e,this.props(),this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.goTo(t.target),this.mode="walk",this.followId=t.mode==="follow"?t.by:null,n&&t.act==="call"&&this.onFx&&this.onFx("\u{1F43E}"),t.act==="feed"&&(this.bowl.position.set(this.dest.x+.3,0,this.dest.z),this.food.scale.set(1,1,1),this.bowl.visible=!0)}goTo(t){let e=this.nav.toCell(t.x,t.z),n=this.nav.nearestFree(e.c,e.r);this.dest=this.nav.center(n.c,n.r),this.path=this.nav.find(this.pos,this.dest)}pickTarget(){for(let t=0;t<8;t++){let e=Kl[Math.floor(Math.random()*Kl.length)];if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)>1.5)return e}return Kl[0]}arrive(t){let e=this.cmd,s=!e||!e.until||Date.now()+(this.skew||0)>e.until+6e4?0:Math.min(12,(e.until-e.at)/1e3),r=e?e.then:"sit";r==="pet"&&s>0?(this.mode="happy",this.until=t+s,this.onFx&&this.onFx("\u{1F495}")):r==="feed"&&s>0?(this.mode="eat",this.until=t+s,this.facing=Math.atan2(this.bowl.position.x-this.pos.x,this.bowl.position.z-this.pos.z),this.onFx&&this.onFx("\u{1F60B}")):r==="play"&&s>0?(this.mode="play",this.until=t+s,this.playC={x:this.pos.x,z:this.pos.z},this.yarn.visible=!0,this.onFx&&this.onFx("\u{1F9F6}")):(this.mode=r==="loaf"?"loaf":"sit",this.until=t+1e6,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1))}update(t,e,n){this.remote?this.remoteTick(t,e,n):(this.mode==="happy"&&e>this.until&&(this.mode="sit",this.until=e+3+Math.random()*5),this.mode!=="walk"&&this.mode!=="happy"&&e>this.until&&(this.path=this.nav.find(this.pos,this.pickTarget()),this.mode="walk"));let s=!1;if(this.mode==="walk"){let c=this.path[0];if(c){let f=this.followId||this.cmd&&this.cmd.act?1.5:.75,h=c.x-this.pos.x,u=c.z-this.pos.z,m=Math.hypot(h,u),p=f*t;m<=p?(this.pos.x=c.x,this.pos.z=c.z,this.path.shift()):(this.pos.x+=h/m*p,this.pos.z+=u/m*p),this.turn(Math.atan2(h,u),t),s=!0}else if(this.remote)this.arrive(e);else{let f=Math.random();this.mode=f<.35?"loaf":"sit",this.until=e+5+Math.random()*12}}if(this.mode==="play"){let c=e*2.2,f=this.playC;this.yarn.position.set(f.x+Math.cos(c)*.45,0,f.z+Math.sin(c)*.45),this.yarn.rotation.z=-c*3;let h=this.yarn.position.x-this.pos.x,u=this.yarn.position.z-this.pos.z,m=Math.hypot(h,u);m>.22&&(this.pos.x+=h/m*Math.min(m-.2,1.4*t),this.pos.z+=u/m*Math.min(m-.2,1.4*t),s=!0),this.turn(Math.atan2(h,u),t)}this.mode==="eat"&&this.food&&(this.food.scale.y=Math.max(.15,this.food.scale.y-t*.12)),this.phase+=t*(s?11:0);let r=1-Math.exp(-t*8);this.legs.forEach((c,f)=>{let h=Math.sin(this.phase+(f%2?Math.PI:0)+(f>1?Math.PI/2:0));c.rotation.x+=((s?h*.6:this.mode==="loaf"?-1.3:0)-c.rotation.x)*r});let o=this.mode==="sit"?-.45:this.mode==="eat"?.18:0,a=this.mode==="loaf"?-.1:this.mode==="sit"?-.03:this.mode==="eat"?-.02:Math.abs(Math.sin(this.phase))*.01;this.body.rotation.x+=(o-this.body.rotation.x)*r,this.body.position.y+=(a-this.body.position.y)*r,this.mode==="sit"?this.body.position.z+=(-.08-this.body.position.z)*r:this.body.position.z+=(0-this.body.position.z)*r,this.mode==="happy"&&(this.body.position.y=Math.abs(Math.sin(e*9))*.12),this.mode==="play"&&(this.body.position.y=Math.max(0,Math.sin(e*7))*.1),this.head.rotation.x=this.mode==="sit"?.45:this.mode==="happy"?-.3:this.mode==="eat"?.75+Math.sin(e*10)*.08:0,this.head.rotation.y=s||this.mode==="eat"?0:Math.sin(e*.7)*.6;let l=this.mode==="happy"||this.mode==="play";this.tail.forEach((c,f)=>{f&&(c.rotation.z=Math.sin(e*(l?14:s?6:2.2)+f*.7)*(.18+f*.03)),c.rotation.x=f?l?.05:.25:this.mode==="loaf"?-1.45:l?-.15:-.9}),this.root.position.set(this.pos.x,0,this.pos.z),this.root.rotation.y=this.facing}turn(t,e){let n=((t-this.facing+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;this.facing+=n*Math.min(1,e*8)}remoteTick(t,e,n){let s=this.cmd;if(!s)return;let r=this.followId&&s.until&&Date.now()+(this.skew||0)>s.until;if(this.followId&&!r&&n&&n.posOf){let o=n.posOf(this.followId);o&&(!this.nextFollow||e>this.nextFollow)&&(this.nextFollow=e+.7,Math.hypot(o.x-this.pos.x,o.z-this.pos.z)>1.1&&(this.goTo({x:o.x+.45,z:o.z+.35}),this.mode="walk"))}(r||["happy","eat","play"].includes(this.mode)&&e>this.until)&&(this.followId=null,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.mode="sit",this.until=e+1e6)}};var qh=["#f1c9a5","#e2ae84","#f6d7bd","#c98e62","#ebbf98","#d9a074"];var Yh=["short","long","spiky","bun","bob","short"],Xg=(i,t,e)=>i+(t-i)*e,Zh={},qt=(i,t)=>Zh[i]||(Zh[i]=t());function we(i,t=.75){return new se({color:i,roughness:t,metalness:0})}var Qs={robe:"#ec8a1c",under:"#d06a17",sash:"#a8401a",shoes:"#5b3a24"},go=null;function qg(){if(go)return go;let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#a8401a",t.fillRect(0,0,256,128),t.strokeStyle="#f2c14e",t.lineWidth=8,t.strokeRect(8,8,240,112),t.fillStyle="#ffd56a",t.font='900 72px "Segoe UI", "Noto Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SIMI",128,68);let e=new rn(i);return e.colorSpace=ve,go=new se({map:e,roughness:.8}),go}var Ri=class{constructor(t,e){this.index=e,this.root=new Bt,this.body=new Bt,this.root.add(this.body),this.joint={},this.pose={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.08,armRz:-.08,headY:0,headX:0,lean:0,lift:0},this.phase=Math.random()*10,this.blinkAt=performance.now()/1e3+1+Math.random()*3,this.talkUntil=0,this.action=null,this.dance=null,this.actionUntil=0,this.build(t)}build(t){this.agent=t,t={...t},t.outfit==="kasaya"&&Object.assign(t,{shirt:Qs.robe,pants:Qs.under,shoes:Qs.shoes});let e=t.skin||qh[this.index%qh.length],n=t.hairStyle||Yh[this.index%Yh.length];for(;this.body.children.length;)this.body.remove(this.body.children[0]);let s={shirt:we(t.shirt||"#3b6fb6",.8),skin:we(e,.6),hair:we(t.hair||"#2b1d14",.9),pants:we(t.pants||"#2f3342",.85),shoe:we(t.shoes||"#1d1d24",.6),dark:we("#1f1a17",.4),white:we("#ffffff",.3),mouth:we("#7a3434",.6),cheek:new se({color:"#ff8f8f",transparent:!0,opacity:.35,roughness:1})};this.mats=s;let r=(d,M,x,v=0,R=0,S=0)=>{let b=new q(M,x);return b.position.set(v,R,S),b.castShadow=!0,d.add(b),b},o=.42;this.shoes=[];let a=qt("leg",()=>new Qe(.078,.25,4,10)),l=qt("shoe",()=>new St(.14,.08,.22));for(let d of[-1,1]){let M=new Bt;M.position.set(d*.095,o,0),r(M,a,s.pants,0,-.2,0),this.shoes.push(r(M,l,s.shoe,0,-.375,.045)),this.body.add(M),this.joint[d<0?"legL":"legR"]=M}let c=r(this.body,qt("torso",()=>new Qe(.19,.2,6,14)),s.shirt,0,.68,0);c.scale.set(1,1,.78),this.torso=c,r(this.body,qt("belt",()=>new Q(.185,.185,.05,16)),s.pants,0,.47,0).scale.set(1,1,.8);let f=qt("arm",()=>new Qe(.062,.22,4,10)),h=qt("hand",()=>new Pt(.068,12,10));for(let d of[-1,1]){let M=new Bt;M.position.set(d*.255,.86,0),r(M,f,s.shirt,0,-.15,0),r(M,h,s.skin,0,-.35,0),this.body.add(M),this.joint[d<0?"armL":"armR"]=M}this.cup=r(this.joint.armR,qt("cup",()=>new Q(.05,.04,.11,12)),we("#e9f3fb",.3),0,-.4,.05),this.cup.visible=!1,this.stick=r(this.joint.armR,qt("stick",()=>{let d=new Q(.012,.022,1.35,8);return d.translate(0,.5,0),d}),we("#c99a5b",.45),0,-.36,.02),this.stick.rotation.x=1.35,this.stick.visible=!1,this.paper=r(this.joint.armL,qt("paper",()=>new St(.2,.02,.26)),we("#fffdf5",.9),0,-.4,.08),this.paper.visible=!1;let u=new Bt;u.position.set(0,1,0),this.body.add(u),this.joint.head=u,r(u,qt("neck",()=>new Q(.07,.08,.1,10)),s.skin,0,-.03,0),r(u,qt("head",()=>new Pt(.25,24,18)),s.skin,0,.19,0);let m=qt("eye",()=>new Pt(.034,12,10)),p=qt("hl",()=>new Pt(.011,6,6));this.eyes=[];for(let d of[-1,1]){let M=r(u,m,s.dark,d*.088,.21,.222);M.scale.set(1,1.15,.6),r(M,p,s.white,.012,.014,.03).castShadow=!1,this.eyes.push(M);let x=r(u,qt("cheek",()=>new Pt(.045,10,8)),s.cheek,d*.15,.13,.19);x.scale.set(1,.6,.3),x.castShadow=!1}if(this.mouth=r(u,qt("mouth",()=>new St(.075,.02,.02)),s.mouth,0,.1,.238),n==="bald"){let d=r(u,qt("shine",()=>new Pt(.06,10,8)),new ee({color:"#ffffff",transparent:!0,opacity:.35,depthWrite:!1}),-.07,.42,.1);d.scale.set(1.3,.35,.8),d.castShadow=!1}else{let d=r(u,qt("cap",()=>new Pt(.268,24,14,0,Math.PI*2,0,Math.PI*.52)),s.hair,0,.2,-.005);if(d.rotation.x=-.32,n==="buzz"?d.scale.set(.97,.9,.97):r(u,qt("bang",()=>new Pt(.2,16,10)),s.hair,0,.36,.12).scale.set(1.15,.38,.62),n==="curly"){let M=qt("curl",()=>new Pt(.085,10,8));for(let x=0;x<14;x++){let v=x/14*Math.PI*2,R=x%2?.36:.28;r(u,M,s.hair,Math.sin(v)*.24,R+Math.cos(v*2)*.03,Math.cos(v)*.22-.03)}r(u,M,s.hair,0,.47,0),r(u,M,s.hair,.1,.45,-.08),r(u,M,s.hair,-.1,.45,-.08)}else if(n==="ponytail"){r(u,qt("tie2",()=>new Pt(.06,10,8)),we(t.accent||"#e1262d",.5),0,.33,-.25);let M=r(u,qt("tail",()=>new Qe(.075,.26,4,10)),s.hair,0,.16,-.32);M.rotation.x=.35}else if(n==="long"){r(u,qt("long",()=>new Qe(.2,.28,6,12)),s.hair,0,.05,-.12).scale.set(1.15,1,.55);for(let x of[-1,1])r(u,qt("lock",()=>new Qe(.06,.24,4,8)),s.hair,x*.22,.07,.02)}else if(n==="bun")r(u,qt("bun",()=>new Pt(.11,14,10)),s.hair,0,.45,-.13);else if(n==="spiky"){let M=qt("spike",()=>new qe(.07,.17,6));[[-.12,.44,.02,.4],[0,.48,0,0],[.12,.44,.02,-.4],[-.06,.45,-.12,.2],[.07,.45,-.12,-.2]].forEach(([x,v,R,S])=>{let b=r(u,M,s.hair,x,v,R);b.rotation.z=S,b.rotation.x=-.25})}else if(n==="bob"){let M=r(u,qt("bob",()=>new Pt(.29,20,12,0,Math.PI*2,0,Math.PI*.62)),s.hair,0,.16,-.03);M.rotation.x=-.15}}let _=t.accessory||"none",g=we(t.accent||"#e1262d",.5);if(_==="cap"){let d=r(u,qt("capTop",()=>new Pt(.275,20,12,0,Math.PI*2,0,Math.PI*.5)),g,0,.24,-.01);d.rotation.x=-.18;let M=r(u,qt("brim",()=>new Q(.17,.17,.025,20,1,!1,-Math.PI/2,Math.PI)),g,0,.3,.2);M.rotation.x=.12}else if(_==="headphones"){let d=r(u,qt("band",()=>new Pe(.28,.022,8,24,Math.PI)),we("#2b2b33",.4),0,.2,0);d.rotation.z=0;for(let M of[-1,1])r(u,qt("cup2",()=>new Q(.075,.075,.06,16)),g,M*.27,.18,0).rotation.z=Math.PI/2}else if(_==="bow"){for(let d of[-1,1]){let M=r(u,qt("bowW",()=>new qe(.07,.13,4)),g,d*.07,.43,.06);M.rotation.z=d*Math.PI/2}r(u,qt("bowK",()=>new Pt(.035,8,6)),g,0,.43,.06)}else if(_==="crown")r(u,qt("crown",()=>new Q(.14,.15,.1,5,1,!0)),we("#f5c518",.3),0,.5,-.02).material.side=ye;else if(_==="headset"){let d=we("#23262f",.4);r(u,qt("hsBand",()=>new Pe(.275,.014,6,24,Math.PI)),d,0,.2,0),r(u,qt("hsCup",()=>new Q(.06,.06,.05,14)),g,-.27,.18,0).rotation.z=Math.PI/2,r(u,qt("hsCup2",()=>new Q(.035,.035,.03,10)),d,.265,.18,0).rotation.z=Math.PI/2,r(u,qt("hsBoom",()=>new Q(.009,.009,.22,6)),d,-.2,.12,.13).rotation.set(Math.PI/2,0,-.95),r(u,qt("hsMic",()=>new Pt(.022,8,6)),d,-.1,.09,.225)}if(t.outfit==="blazer"){r(this.body,qt("vShirt",()=>new St(.13,.2,.02)),s.white,0,.77,.148),r(this.body,qt("vTie",()=>new St(.04,.17,.012)),we(t.accent||"#f5c518",.5),0,.76,.16);for(let d of[-1,1]){let M=r(this.body,qt("vLapel",()=>new St(.045,.24,.016)),we(t.lapel||"#0b3f86",.6),d*.075,.76,.155);M.rotation.z=d*.32}r(this.body,qt("vBadge",()=>new St(.075,.032,.01)),we("#f5c518",.3),.12,.8,.14).rotation.y=.45}if(t.outfit==="kasaya"){let d=we(Qs.sash,.85);for(let S of[.152,-.152]){let b=r(this.body,qt("ksSash",()=>new St(.11,.48,.02)),d,.02,.7,S);b.rotation.z=-.62}r(this.body,qt("ksShoulder",()=>new Pt(.085,12,8)),d,-.2,.9,0).scale.set(1,.6,1.2);let M=new se({color:Qs.robe,roughness:.85,side:ye});r(this.body,qt("ksSkirt",()=>new Q(.195,.25,.3,18,1,!0)),M,0,.32,0).scale.set(1,1,.85);let x=r(this.body,qt("ksHem",()=>new Pe(.25,.012,6,24)),d,0,.17,0);x.rotation.x=Math.PI/2,x.scale.set(1,.85,1);let v=r(this.body,qt("ksBeads",()=>new Pe(.2,.022,6,18)),we("#5b3418",.5),0,.9,.01);v.rotation.x=Math.PI/2-.35,v.scale.set(1,.8,1),r(this.body,qt("ksBead",()=>new Pt(.035,10,8)),we("#f2c14e",.3),0,.84,.17);let R=r(this.body,qt("ksBack",()=>new ie(.22,.11)),qg(),0,.66,-.156);R.rotation.y=Math.PI,R.castShadow=!1}if(_==="glasses"&&!t.isReviewer&&(t={...t,isReviewer:!0}),_==="tie"&&!t.isManager&&(t={...t,isManager:!0}),t.isManager&&(r(this.body,qt("tie",()=>new St(.06,.24,.02)),we("#b3362f",.5),0,.73,.155),r(this.body,qt("knot",()=>new St(.075,.05,.03)),we("#8f2a24",.5),0,.86,.15)),t.isReviewer){let d=we("#2b2b33",.4),M=qt("glass",()=>new Pe(.062,.012,8,20));for(let x of[-1,1])r(u,M,d,x*.088,.21,.245);r(u,qt("bridge",()=>new St(.06,.012,.012)),d,0,.215,.25)}}say(t){this.talkUntil=performance.now()/1e3+t/1e3}doAction(t,e){this.action=t,this.actionUntil=performance.now()/1e3+e/1e3}animate(t,e,{moving:n,speed:s,seated:r,typing:o,beat:a,meditate:l,kneel:c}){let f=this.pose,h={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.1,armRz:-.1,headY:0,headX:0,lean:0,lift:0};if(this.action&&e>this.actionUntil&&(this.action=null),n){this.phase+=t*(4+s*3.2);let d=Math.sin(this.phase);h.legL=d*.62,h.legR=-d*.62,h.armLx=-d*.55,h.armRx=d*.55,h.lift=Math.abs(Math.cos(this.phase))*.04,h.lean=.06}else if(r&&c){let d=this.bowPeriod||3.2;this.bowPh=((this.bowPh||0)+t/d)%1;let M=this.bowPh<.55?Math.sin(this.bowPh/.55*Math.PI):0;h.hip=1,h.foot=1.5,h.lean=1.12*M,h.legL=h.legR=1.5-h.lean,h.legLz=-.1,h.legRz=.1,h.armLx=-1.45-.85*M,h.armRx=h.armLx,h.armLz=-.5+.62*M,h.armRz=-h.armLz,h.headX=.1+.25*M,this.bowDown=M}else r&&l?(h.legL=-1.47,h.legR=-1.33,h.legLz=.62,h.legRz=-.62,h.armLx=-.48,h.armRx=-.48,h.armLz=.36,h.armRz=-.36,h.headX=.14,h.lean=.04+Math.sin(e*.9+this.index)*.015,h.lift=Math.sin(e*.9+this.index)*.006):r?(h.legL=h.legR=-1.48,h.lift=.06,o?(h.armLx=-1.18+Math.sin(e*17)*.13,h.armRx=-1.18+Math.sin(e*17+1.7)*.13,h.armLz=.22,h.armRz=-.22,h.lean=.12,h.headX=.12,h.headY=Math.sin(e*.7+this.index)*.15):(h.armLx=-.7,h.armRx=-.7,h.armLz=.18,h.armRz=-.18,h.headY=Math.sin(e*.4+this.index*2)*.25)):h.lift=Math.sin(e*2.2+this.index)*.006;if(this.action==="stretch"){let d=Math.sin(e*3)*.12;h.armLx=-2.85+d,h.armRx=-2.85-d,h.armLz=.25,h.armRz=-.25,h.headX=-.2,h.lean=-.1}else if(this.action==="drink")h.armRx=-2.1,h.armRz=.35,h.headX=-.28;else if(this.action==="look")h.headY=Math.sin(e*1.6)*.7;else if(this.action==="wave")h.armRx=-2.7,h.armRz=-.35+Math.sin(e*13)*.4,h.headX=-.1,h.headY=.15;else if(this.action==="dance"){let d=Math.sin(e*8);h.armLx=-1.6+d*1.1,h.armRx=-1.6-d*1.1,h.armLz=.5,h.armRz=-.5,r||(h.lift=Math.abs(Math.sin(e*8))*.1,h.legL=d*.35,h.legR=-d*.35),h.headY=Math.sin(e*4)*.3}else if(this.action==="cheer"){let d=Math.sin(e*9);h.armLx=-2.9+d*.2,h.armRx=-2.9-d*.2,h.armLz=.45,h.armRz=-.45,h.headX=-.25,r||(h.lift=Math.abs(Math.sin(e*7))*.16)}else if(this.action==="place")h.armLx=-1.2,h.armRx=-1.2,h.lean=.25,h.headX=.25;else if(this.action==="highfive"){let d=this.actionUntil-e;h.armRx=-2.55,h.armRz=-.15,h.headX=-.12,d<1&&d>.7&&(h.armRx=-2.2,r||(h.lift=.08))}else if(this.action==="hug")h.armLx=-1.35,h.armRx=-1.35,h.armLz=-.55,h.armRz=.55,h.lean=.16,h.headY=.25,r||(h.lift=Math.sin(e*3)*.015);else if(this.action==="cheers"){let d=this.actionUntil-e;h.armRx=d<1.3&&d>.9?-1.95:-1.55,h.armRz=.05,h.headX=-.05}else if(this.action==="cue"||this.holdCue&&!n&&!this.action){let d=this.action==="cue"?Math.max(0,Math.sin((this.actionUntil-e)*9)):0;h.lean=.42,h.headX=.34,h.armLx=-1.2,h.armLz=.32,h.armRx=-.95-d*.35,h.armRz=-.06,r||(h.legL=.18,h.legR=-.12)}else this.action==="give"&&(h.armRx=-1.35,h.armRz=.12,h.lean=.08,h.headX=.1);this.dance&&!n&&!this.action&&this.dancePose(h,a===void 0?e*2:a,r);let u=e<this.talkUntil;u&&!r&&!n&&!this.action?(h.armRx=-.55+Math.sin(e*5.5)*.35,h.armRz=-.25,h.headX=Math.sin(e*4)*.08):u&&(h.headX+=Math.sin(e*4)*.06),this.cup.visible=this.action==="drink"||this.action==="cheers"||this.action==="give",this.stick.visible=this.action==="cue"||!!this.holdCue,this.paper.visible=this.action==="place"||this.carrying===!0,(this.carrying&&!n&&!this.action||this.carrying&&n)&&(h.armLx=-.9);let m=1-Math.exp(-t*11);for(let d of Object.keys(h))f[d]=Xg(f[d],h[d],m);let p=this.joint;p.legL.rotation.set(f.legL,0,f.legLz),p.legR.rotation.set(f.legR,0,f.legRz);for(let d of this.shoes)d.rotation.x=f.foot;p.armL.rotation.set(f.armLx,0,f.armLz),p.armR.rotation.set(f.armRx,0,f.armRz),p.head.rotation.set(f.headX,f.headY,0),this.body.rotation.x=f.lean;let _=f.hip*.42;this.body.position.set(0,f.lift+_*(1-Math.cos(f.lean)),-_*Math.sin(f.lean)),this.torso.scale.y=1+Math.sin(e*2.2+this.index)*.012;let g=1.15;e>this.blinkAt&&(g=.15,e>this.blinkAt+.12&&(this.blinkAt=e+2+Math.random()*4)),l&&r&&!n&&!u&&!this.action&&(g=.15),c&&r&&!n&&(this.bowDown||0)>.3&&(g=.15);for(let d of this.eyes)d.scale.y=g;this.mouth.scale.set(u?.8:1,u?1+Math.abs(Math.sin(e*17))*2.6:1,1)}dancePose(t,e,n){let s=e*Math.PI,r=Math.abs(Math.sin(s));switch(this.dance){case"disco":{let o=Math.sin(s/2)>0;t.armRx=o?-2.75:-.5,t.armRz=o?-.55:-.2,t.armLx=-.25,t.armLz=.95,t.headY=o?.3:-.1,t.headX=o?-.2:.05,n||(t.lift=r*.05,t.legL=Math.sin(s)*.22,t.legR=-Math.sin(s)*.08);break}case"robot":{let o=Math.sin(s)>0?1:-1,a=Math.sin(s/2)>0?1:-1;t.armLx=-1.45-o*.45,t.armRx=-1.45+o*.45,t.armLz=.15,t.armRz=-.15,t.headY=a*.4,t.headX=0,t.lean=0,n||(t.lift=o>0?.02:0,t.legL=o>0?.15:0,t.legR=o<0?.15:0);break}case"shuffle":{let o=Math.sin(s*2);t.armLx=o*.7,t.armRx=-o*.7,t.armLz=.25,t.armRz=-.25,t.lean=.08,t.headY=Math.sin(s)*.15,n||(t.legL=o*.55,t.legR=-o*.55,t.lift=Math.abs(o)*.07);break}case"spin":t.armLx=-.15,t.armRx=-.15,t.armLz=1.35,t.armRz=-1.35,t.headX=-.1,n||(t.lift=r*.06);break;case"hands":t.armLx=-2.9+Math.sin(s)*.25,t.armRx=-2.9-Math.sin(s)*.25,t.armLz=.45+Math.sin(s)*.2,t.armRz=-.45+Math.sin(s)*.2,t.headX=-.22,n||(t.lift=r*.13);break;default:{let o=Math.sin(s);t.armLx=-1.6+o*1,t.armRx=-1.6-o*1,t.armLz=.5,t.armRz=-.5,t.headY=Math.sin(s/2)*.3,n||(t.lift=r*.09,t.legL=o*.3,t.legR=-o*.3)}}}headWorld(t){return this.joint.head.updateWorldMatrix(!0,!1),t.set(0,.5,0).applyMatrix4(this.joint.head.matrixWorld)}};var Wt={minX:-7,maxX:7,minZ:-5,maxZ:5,wallH:3.1},tr=[{x:0,z:-1.5},{x:-4.1,z:-1.5},{x:4.1,z:-1.5},{x:-4.1,z:2},{x:4.1,z:2},{x:0,z:2}],_e={w:1.8,d:.85,h:.76},er=-.82,xo={x:-5.6,z:-4.95},_o={cooler:{x:5.55,z:-3.75,face:{x:6.3,z:-4.45}},board:{x:.2,z:-3.85,face:{x:.2,z:-5}},windowL:{x:-3.2,z:-3.9,face:{x:-3.2,z:-5}},windowR:{x:3.4,z:-3.9,face:{x:3.4,z:-5}},shelf:{x:-5.7,z:-.4,face:{x:-7,z:-.4}},tray:{x:5.55,z:3.2,face:{x:5.55,z:4.2}},plant:{x:-5.2,z:1,face:{x:-6.5,z:1}}},jh=[[5.95,-4.95,6.7,-4.05],[-7,-1.4,-6.35,.6],[-7,2.5,-5.95,4.6],[-5.7,3.05,-4.9,3.95],[5,3.75,6.2,4.6],[-6.9,-4.9,-6.2,-4.2],[6.3,4.3,6.95,4.95],[-6.9,.8,-6.3,1.4]],Ot=(i,t=.8,e={})=>new se({color:i,roughness:t,metalness:0,...e});function nr(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new rn(s);return n&&(o.colorSpace=ve),o.anisotropy=4,{tex:o,canvas:s,g:r}}function yo(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Yg(){let i=yo(7),t=nr(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*300);for(;a<n;){let l=220+Math.floor(i()*260),c=[196+i()*22,142+i()*18,96+i()*14].map(Math.round);e.fillStyle=`rgb(${c})`,e.fillRect(a,o,l,64);for(let f=0;f<9;f++){e.strokeStyle=`rgba(110,70,40,${.05+i()*.07})`,e.lineWidth=1+i()*1.5;let h=o+6+i()*52;e.beginPath(),e.moveTo(a,h),e.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.7,h+(i()-.5)*8,a+l,h+(i()-.5)*4),e.stroke()}e.fillStyle="rgba(80,50,30,0.55)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(80,50,30,0.6)",e.fillRect(0,o+64-2,n,2),e.fillStyle="rgba(255,235,200,0.12)",e.fillRect(0,o,n,2)}});return t.tex.wrapS=t.tex.wrapT=wn,t.tex.repeat.set((Wt.maxX-Wt.minX)/4,(Wt.maxZ-Wt.minZ)/4),t.tex}var Qh={tim:["#3f2d84","#5a42a6","#f5c518","#33246c"],mint:["#4f9c88","#7cc8b2","#fff4d6","#3f8573"],vang:["#d9a441","#f2c96b","#fff7e0","#b98a2f"],xanh:["#1a6fd6","#2f8cf0","#ffffff","#0f5bb5"],navy:["#142c5a","#1f3d73","#e1262d","#0f2247"]};function $h(i=Qh.tim){return nr(512,320,(t,e,n)=>{t.fillStyle=i[0],t.fillRect(0,0,e,n),t.fillStyle=i[1],t.fillRect(18,18,e-36,n-36),t.strokeStyle=i[2],t.lineWidth=6,t.strokeRect(34,34,e-68,n-68),t.fillStyle=i[3];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.save(),t.translate(s,r),t.rotate(Math.PI/4),t.fillRect(-9,-9,18,18),t.restore();t.fillStyle=i[2];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.beginPath(),t.arc(s,r,3,0,7),t.fill()}).tex}function Zg(){let i=nr(512,256,(t,e,n)=>{let s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#6fb6e8"),s.addColorStop(.7,"#bfe3f7"),s.addColorStop(1,"#f4f0dc"),t.fillStyle=s,t.fillRect(0,0,e,n);let r=yo(3);for(let o=0;o<7;o++){let a=r()*e,l=40+r()*110,c=18+r()*22;t.fillStyle="rgba(255,255,255,0.92)";for(let f=0;f<5;f++)t.beginPath(),t.arc(a+f*c*.7,l+Math.sin(f)*5,c*(.7+r()*.5),0,7),t.fill()}t.fillStyle="#7fae7a",t.beginPath(),t.moveTo(0,n);for(let o=0;o<=e;o+=16)t.lineTo(o,n-30-Math.sin(o/40)*10-r()*6);t.lineTo(e,n),t.fill()});return i.tex.wrapS=wn,i.tex}var $g=new cs;function Jh(i,t){$g.load(i,e=>{e.colorSpace=ve,e.anisotropy=4,t(e)},void 0,()=>{})}function Jg(){return nr(256,320,(i,t,e)=>{i.fillStyle="#fbf3e4",i.fillRect(0,0,t,e),i.fillStyle="#f2b450",i.beginPath(),i.arc(160,120,70,0,7),i.fill(),i.fillStyle="#3f8f8a",i.fillRect(30,170,200,90),i.fillStyle="#d0644a",i.beginPath(),i.moveTo(30,260),i.lineTo(110,150),i.lineTo(190,260),i.fill(),i.fillStyle="#2b2b33",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.fillText("C\u1ED0 L\xCAN!",t/2,300)}).tex}function tf(i,t){let e={animated:[]},n=new q(new ie(Wt.maxX-Wt.minX,Wt.maxZ-Wt.minZ),Ot("#ffffff",.75,{map:Yg()}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n),e.floor=n;let s=Ot("#ffffff",.95,{map:$h()}),r=new q(new ie(5.2,2.2),s);r.rotation.x=-Math.PI/2,r.position.set(0,.006,.25),r.receiveShadow=!0,i.add(r);let o=Ot("#efe3cc",.95),a=Ot("#c9a77d",.85),l=Ot("#8a6040",.7);e.setDecor=(V={})=>{let Z={kem:["#efe3cc","#c9a77d"],bacha:["#d6efe4","#8fc7b0"],xam:["#dfe5ee","#a9b6c9"],troi:["#d9e9f7","#8fb3dc"],vanh:["#fbf3d6","#e2c98a"]}[V.wall||"troi"];Z&&(o.color.set(Z[0]),a.color.set(Z[1]));let lt={sang:"#ffffff",dam:"#a8876a",xam:"#d4cfcb"}[V.floor||"sang"];lt&&n.material.color.set(lt);let Ht=Qh[V.rug||"xanh"];if(Ht){let Zt=s.map;s.map=$h(Ht),s.needsUpdate=!0,Zt&&Zt.dispose()}};let c=Wt.maxX-Wt.minX,f=Wt.maxZ-Wt.minZ,h=Wt.wallH,u=new q(new St(c+.2,h,.2),o);u.position.set(0,h/2,Wt.minZ-.1),u.receiveShadow=!0,i.add(u);let m=new q(new St(.2,h,f),o);m.position.set(Wt.minX-.1,h/2,0),m.receiveShadow=!0,i.add(m);let p=new q(new St(c+.2,.95,.04),a);p.position.set(0,.475,Wt.minZ+.02),p.receiveShadow=!0,i.add(p);let _=new q(new St(.04,.95,f),a);_.position.set(Wt.minX+.02,.475,0),_.receiveShadow=!0,i.add(_);let g=new q(new St(c+.2,.06,.07),l);g.position.set(0,.96,Wt.minZ+.035),i.add(g);let d=new q(new St(.07,.06,f),l);d.position.set(Wt.minX+.035,.96,0),i.add(d);let M=Ot("#5b3f2a",.8),x=new q(new St(c+.4,.25,.2),M);x.position.set(0,-.125,Wt.maxZ+.1),i.add(x);let v=new q(new St(.2,.25,f+.2),M);v.position.set(Wt.maxX+.1,-.125,0),i.add(v);let R=Zg();e.sky=R;let S=Ot("#fbf7ee",.6);for(let V of[-3.2,3.4]){let Z=new Bt;Z.position.set(V,1.85,Wt.minZ+.02);let lt=new ee({map:R,toneMapped:!1});(e.skyMats=e.skyMats||[]).push(lt);let Ht=new q(new ie(1.9,1.25),lt);Ht.position.z=.005,Z.add(Ht);let Zt=(Ne,Oe,ke,Ae)=>{let He=new q(new St(Ne,Oe,.08),S);He.position.set(ke,Ae,.03),He.castShadow=!0,Z.add(He)};Zt(2.05,.08,0,.66),Zt(2.05,.08,0,-.66),Zt(.08,1.4,-.99,0),Zt(.08,1.4,.99,0),Zt(.05,1.3,0,0),Zt(1.95,.05,0,.05);let ue=new q(new St(2.2,.06,.22),S);ue.position.set(0,-.72,.1),ue.castShadow=!0,Z.add(ue);let jt=new q(new Q(.08,.06,.12,10),Ot("#c56a43"));jt.position.set(.6,-.63,.12),Z.add(jt);let he=new q(new Je(.11,0),Ot("#5aa05a"));he.position.set(.6,-.5,.12),Z.add(he),i.add(Z)}let b=new Bt;b.position.set(xo.x,0,Wt.minZ+.03);let I=Ot("#6b4a2e",.7),U=Ot("#a8743f",.65),y=new q(new St(1.15,2.2,.06),U);y.position.set(0,1.1,.02),y.castShadow=!0,b.add(y);for(let[V,Z,lt,Ht]of[[1.3,.09,0,2.24],[.09,2.25,-.62,1.12],[.09,2.25,.62,1.12]]){let Zt=new q(new St(V,Z,.1),I);Zt.position.set(lt,Ht,.03),b.add(Zt)}for(let V of[.6,1.55]){let Z=new q(new St(.8,.6,.02),Ot("#946535",.7));Z.position.set(0,V,.06),b.add(Z)}let E=new q(new Pt(.045,10,8),Ot("#e3c15a",.3,{metalness:.6}));E.position.set(.42,1.05,.09),b.add(E),i.add(b);let H=nr(768,360,()=>{}),F=new Bt;F.position.set(.2,1.9,Wt.minZ+.03);let P=new q(new St(2.9,1.42,.06),Ot("#9aa0a8",.5));P.castShadow=!0,F.add(P);let W=new q(new ie(2.78,1.3),new se({map:H.tex,roughness:.5}));W.position.z=.032,F.add(W);let z=new q(new St(1.6,.05,.1),Ot("#8c929a",.5));z.position.set(0,-.74,.06),F.add(z),i.add(F),e.drawBoard=V=>{let{g:Z,canvas:lt}=H,Ht=lt.width,Zt=lt.height;Z.fillStyle="#fbfbf7",Z.fillRect(0,0,Ht,Zt),[["CH\u1EDC",V.wait,"#f6d36b"],["\u0110ANG L\xC0M",V.run,"#8fd0f2"],["XONG",V.done,"#9fe0a0"]].forEach(([jt,he,Ne],Oe)=>{let ke=18+Oe*250;Z.fillStyle=Ne,Z.fillRect(ke,16,232,46),Z.fillStyle="#2b2b33",Z.font="bold 26px Segoe UI, Arial, sans-serif",Z.textAlign="left",Z.fillText(jt,ke+12,49),Z.textAlign="right",Z.fillText(String(he),ke+220,49),Oe<2&&(Z.fillStyle="#d5d9df",Z.fillRect(ke+241,16,3,Zt-32));let Ae=Math.min(he,9);for(let He=0;He<Ae;He++){let Ai=ke+14+He%3*74,Tn=80+Math.floor(He/3)*86;Z.save(),Z.translate(Ai+30,Tn+34),Z.rotate((He*37%9-4)*.02),Z.fillStyle="rgba(0,0,0,0.12)",Z.fillRect(-28,-30,62,66),Z.fillStyle=Ne,Z.fillRect(-31,-34,62,66),Z.fillStyle="rgba(0,0,0,0.25)";for(let on=0;on<3;on++)Z.fillRect(-22,-18+on*14,40-on*8,4);Z.restore()}}),H.tex.needsUpdate=!0},e.drawBoard({wait:0,run:0,done:0});let nt=new Bt;nt.position.set(-1.75,2.35,Wt.minZ+.04);let $=new q(new Q(.28,.28,.05,32),Ot("#fbfaf5",.5));$.rotation.x=Math.PI/2,nt.add($);let J=new q(new Pe(.28,.03,8,32),Ot("#5b4a3a",.5));nt.add(J);for(let V=0;V<12;V++){let Z=new q(new St(.02,.05,.01),Ot("#5b4a3a")),lt=V/12*Math.PI*2;Z.position.set(Math.sin(lt)*.22,Math.cos(lt)*.22,.03),Z.rotation.z=-lt,nt.add(Z)}let ot=(V,Z)=>{let lt=new Bt,Ht=new q(new St(Z,V,.01),Ot("#222"));return Ht.position.y=V/2,lt.add(Ht),lt.position.z=.04,nt.add(lt),lt},ct=ot(.13,.03),bt=ot(.2,.02);i.add(nt),e.animated.push(()=>{let V=new Date;bt.rotation.z=-(V.getMinutes()+V.getSeconds()/60)/60*Math.PI*2,ct.rotation.z=-(V.getHours()%12+V.getMinutes()/60)/12*Math.PI*2});let It=Ot("#ffffff",.6,{map:Jg()}),et=new q(new ie(.9,1.2),It);et.position.set(Wt.minX+.05,1.8,2.4),et.rotation.y=Math.PI/2,i.add(et);let ht=new q(new St(.04,1.3,1),Ot("#0a78f0",.5));ht.position.set(Wt.minX+.015,1.8,2.4),i.add(ht),Jh("brand/simi-banner.jpg",V=>{It.map=V,It.needsUpdate=!0});let xt=(V,Z,lt,Ht,Zt,ue,jt)=>{let he=new Bt;he.position.copy(Zt),he.rotation.y=ue,i.add(he);let Ne=new q(new Pt(.03,10,8),Ot("#c9ced8",.3,{metalness:.6}));Ne.position.z=.02,he.add(Ne);let Oe=new Bt;he.add(Oe);let ke=.32,Ae=new q(new St(Z+.12,lt+.12,.04),Ot(Ht,.55));Ae.position.set(0,-ke-lt/2-.06,.05),Ae.castShadow=!0,Oe.add(Ae);let He=new q(new ie(Z,lt),new ee({transparent:!0,opacity:0}));He.position.set(0,Ae.position.y,.075),Oe.add(He),Jh(V,Tn=>{He.material.map=Tn,He.material.opacity=1,He.material.needsUpdate=!0});let Ai=Ot("#5a6478",.8);for(let Tn of[-1,1]){let on=Tn*(Z/2-.02),Ci=-ke-.02,Pi=Math.hypot(on,Ci),Ii=new q(new Q(.007,.007,Pi,5),Ai);Ii.position.set(on/2,Ci/2,.05),Ii.rotation.z=Math.atan2(on,-Ci),Oe.add(Ii)}return e.animated.push(Tn=>{Oe.rotation.z=Math.sin((Tn||performance.now()/1e3)*.9+jt)*.025}),he};xt("brand/uniq.png",1.15,.41,"#142c5a",new L(Wt.minX+.03,2.95,-3.05),Math.PI/2,0),xt("brand/crenot.png",1.35,.33,"#ffffff",new L(Wt.minX+.03,3,-.4),Math.PI/2,1.7),xt("brand/simi.png",.85,.255,"#0a78f0",new L(-4.4,2.95,Wt.minZ+.03),0,3.1);let yt=new Bt;yt.position.set(-6.68,0,-.4),yt.rotation.y=Math.PI/2;let Ut=Ot("#8a5a35",.75),Gt=new St(.05,2,.4);for(let V of[-.95,.95]){let Z=new q(Gt,Ut);Z.position.set(V,1,0),Z.castShadow=!0,yt.add(Z)}let Xt=yo(11),te=["#c4553f","#3f8fb0","#e0b04c","#4f7a4a","#7b4fa0","#d07a2c","#2f5d9e"];for(let V=0;V<5;V++){let Z=new q(new St(1.9,.04,.4),Ut);if(Z.position.set(0,.04+V*.48,0),Z.castShadow=!0,Z.receiveShadow=!0,yt.add(Z),V===4)continue;let lt=-.88;for(;lt<.8;){let Ht=.05+Xt()*.06,Zt=.26+Xt()*.14,ue=new q(new St(Ht,Zt,.28),Ot(te[Math.floor(Xt()*te.length)],.7));ue.position.set(lt+Ht/2,.06+V*.48+Zt/2,.02),ue.rotation.z=Xt()<.1?.2:0,ue.castShadow=!0,yt.add(ue),lt+=Ht+.012+(Xt()<.12?.15:0)}}i.add(yt);let ut=new Bt;ut.position.set(6.3,0,-4.45);let C=new q(new St(.42,1.05,.42),Ot("#eceef1",.4));C.position.y=.525,C.castShadow=!0,ut.add(C);let Et=new q(new Q(.17,.17,.48,18),new se({color:"#7cc0ec",transparent:!0,opacity:.7,roughness:.15}));Et.position.y=1.32,ut.add(Et);let X=new q(new St(.08,.06,.06),Ot("#3f78c2"));X.position.set(-.1,.8,.23),ut.add(X);let Y=X.clone();Y.material=Ot("#d0453f"),Y.position.x=.1,ut.add(Y),i.add(ut);let ft=[],mt=(V,Z,lt=1)=>{let Ht=new Bt;Ht.position.set(V,0,Z),Ht.scale.setScalar(lt);let Zt=new q(new Q(.24,.18,.42,14),Ot("#c56a43",.8));Zt.position.y=.21,Zt.castShadow=!0,Ht.add(Zt);let ue=new q(new Q(.21,.21,.02,14),Ot("#4a3326"));ue.position.y=.41,Ht.add(ue);let jt=new Bt;jt.position.y=.42,Ht.add(jt);let he=Ot("#4f9a52",.7),Ne=Ot("#3a7a40",.7);for(let Oe=0;Oe<9;Oe++){let ke=new q(new qe(.09,.75,5),Oe%2?he:Ne),Ae=Oe/9*Math.PI*2;ke.position.set(Math.cos(Ae)*.09,.35,Math.sin(Ae)*.09),ke.rotation.set(Math.sin(Ae)*.45,0,-Math.cos(Ae)*.45),ke.castShadow=!0,jt.add(ke)}return i.add(Ht),ft.push(jt),Ht};mt(-6.55,-4.55,1.1),mt(6.6,4.6,1.15),mt(-6.6,1.1,.9),e.animated.push(V=>ft.forEach((Z,lt)=>{Z.rotation.z=Math.sin(V*1.3+lt)*.04,Z.rotation.x=Math.cos(V*1.1+lt)*.03}));let pt=new Bt;pt.position.set(-6.45,0,3.55),pt.rotation.y=Math.PI/2;let A=Ot("#4f7a8a",.95),w=Ot("#5f8c9c",.95),O=new q(new St(2,.42,.85),A);O.position.y=.25,O.castShadow=!0,pt.add(O);let rt=new q(new St(2,.6,.22),A);rt.position.set(0,.62,-.32),rt.castShadow=!0,pt.add(rt);for(let V of[-1,1]){let Z=new q(new St(.2,.62,.85),A);Z.position.set(V,.33,0),Z.castShadow=!0,pt.add(Z)}for(let V of[-.45,.45]){let Z=new q(new St(.85,.14,.62),w);Z.position.set(V,.5,.05),Z.castShadow=!0,pt.add(Z)}let at=new q(new St(.36,.34,.12),Ot("#f2b450"));at.position.set(.6,.72,-.15),at.rotation.z=.2,pt.add(at),i.add(pt);let it=new Bt;it.position.set(-5.3,0,3.5);let Lt=new q(new Q(.42,.42,.05,24),Ot("#8a5a35",.6));Lt.position.y=.42,Lt.castShadow=!0,it.add(Lt);let vt=new q(new Q(.05,.08,.4,10),Ot("#3b2b20"));vt.position.y=.2,it.add(vt);let Rt=new q(new Q(.05,.045,.1,12),Ot("#f4f1ea"));Rt.position.set(.1,.5,.05),it.add(Rt),i.add(it);let Jt=new Bt;Jt.position.set(5.6,0,4.15);let N=new q(new St(1.1,.06,.65),Ot("#b9844f",.6));N.position.y=.78,N.castShadow=!0,N.receiveShadow=!0,Jt.add(N);for(let[V,Z]of[[-.48,-.26],[.48,-.26],[-.48,.26],[.48,.26]]){let lt=new q(new St(.06,.78,.06),Ot("#5e3c22"));lt.position.set(V,.39,Z),lt.castShadow=!0,Jt.add(lt)}let K=new q(new St(.5,.06,.38),Ot("#6b7a8f",.5));K.position.set(0,.84,0),Jt.add(K);let gt=new Bt;gt.position.set(0,.86,0),Jt.add(gt),i.add(Jt);let Ct=[Ot("#fffdf6",.9),Ot("#f1ece0",.9)];e.setTray=V=>{for(;gt.children.length;)gt.remove(gt.children[0]);for(let Z=0;Z<Math.min(V,14);Z++){let lt=new q(new St(.4,.012,.3),Ct[Z%2]);lt.position.y=Z*.014,lt.rotation.y=(Z*37%7-3)*.03,lt.castShadow=!0,gt.add(lt)}},e.trayAnchor=new L(5.6,.95,4.5),e.lamps=[];let _t=Ot("#2b2b33",.6),Yt=Ot("#f2b450",.45);for(let[V,Z]of[[-4.1,.25],[0,.25],[4.1,.25]]){let lt=new Bt;lt.position.set(V,0,Z);let Ht=new q(new Q(.008,.008,.6,6),_t);Ht.position.y=Wt.wallH-.3,lt.add(Ht);let Zt=new q(new qe(.32,.26,20,1,!0),Yt);Zt.material.side=ye,Zt.position.y=Wt.wallH-.68,Zt.castShadow=!1,lt.add(Zt);let ue=new se({color:"#fff3d6",emissive:"#ffd58a",emissiveIntensity:0,roughness:.3}),jt=new q(new Pt(.075,12,10),ue);jt.position.y=Wt.wallH-.78,lt.add(jt);let he=new ho("#ffd9a0",0,7.5,1.6);he.position.y=Wt.wallH-.85,lt.add(he),i.add(lt),e.lamps.push({bulbMat:ue,light:he})}let Nt=140,ne=new Float32Array(Nt*3),B=yo(5);for(let V=0;V<Nt;V++)ne[V*3]=-6+B()*12,ne[V*3+1]=.3+B()*2.6,ne[V*3+2]=-4.8+B()*4.5;let Tt=new Re;Tt.setAttribute("position",new ze(ne,3));let st=new eo(Tt,new Gs({color:"#fff3d6",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));return i.add(st),e.dust=st,e.animated.push((V,Z)=>{for(let lt=0;lt<Nt;lt++)ne[lt*3+1]+=Math.sin(V*.5+lt)*Z*.03,ne[lt*3]+=Math.cos(V*.3+lt*1.7)*Z*.02;Tt.attributes.position.needsUpdate=!0,R.offset.x=V*.004%1}),e}var Kh={sim:["#9a91ad","GI\u1EA2 L\u1EACP"],claude:["#e08a5c","CLAUDE"],anthropic:["#e08a5c","CLAUDE API"],codex:["#4fd1a8","CHATGPT"],antigravity:["#7aa7ff","GEMINI"],openai:["#4fd1a8","GPT API"],gemini:["#7aa7ff","GEMINI"],ollama:["#e6e6e6","OLLAMA"],simi:["#45a2ff","SIMI"]};function ef(i,t,e){let n=new Bt;n.position.set(t.x,0,t.z);let s=Ot("#c99863",.55),r=Ot("#a5764a",.7),o=Ot("#3b3d46",.45,{metalness:.3}),a=new q(new St(_e.w,.06,_e.d),s);a.position.y=_e.h,a.castShadow=!0,a.receiveShadow=!0,n.add(a);for(let F of[-_e.w/2+.05,_e.w/2-.05]){let P=new q(new St(.06,_e.h,_e.d-.04),r);P.position.set(F,_e.h/2,0),P.castShadow=!0,n.add(P)}let l=new q(new St(_e.w-.1,.45,.03),r);l.position.set(0,_e.h-.28,_e.d/2-.06),l.castShadow=!0,n.add(l);let c=new Bt;c.position.set(-.55,_e.h+.03,-.08),c.rotation.y=1.45;let f={canvas:document.createElement("canvas")};f.canvas.width=192,f.canvas.height=120,f.g=f.canvas.getContext("2d"),f.tex=new rn(f.canvas),f.tex.colorSpace=ve;let h=new q(new St(.62,.4,.035),o);h.position.y=.33,h.castShadow=!0,c.add(h);let u=new q(new ie(.57,.35),new ee({map:f.tex,toneMapped:!1}));u.position.set(0,.33,.019),c.add(u);let m=new q(new St(.05,.16,.04),o);m.position.set(0,.08,-.02),c.add(m);let p=new q(new St(.22,.015,.16),o);p.position.y=.008,c.add(p),n.add(c);let _=new q(new St(.42,.02,.13),Ot("#e4e4ea",.5));_.position.set(0,_e.h+.04,-.2),_.castShadow=!0,n.add(_);let g=new q(new St(.06,.02,.09),Ot("#e4e4ea",.5));g.position.set(.32,_e.h+.04,-.2),n.add(g);let d=new q(new Q(.045,.04,.1,12),Ot(e.shirt||"#c0504d",.5));d.position.set(.68,_e.h+.08,.05),d.castShadow=!0,n.add(d);let M=new q(new St(.24,.02,.32),Ot("#f6f2e8",.9));if(M.position.set(.45,_e.h+.04,.12),M.rotation.y=.2,n.add(M),e.isManager){let F=new Bt;F.position.set(.72,_e.h+.03,-.25),F.add(Object.assign(new q(new Q(.07,.08,.02,12),o),{}));let P=new q(new Q(.012,.012,.36,6),o);P.position.set(0,.18,0),P.rotation.z=.25,F.add(P);let W=new q(new qe(.09,.12,12,1,!0),Ot("#e3c15a",.4));W.position.set(-.07,.36,0),W.rotation.z=.9,F.add(W),n.add(F);let z=new q(new Q(.05,.03,.14,10),Ot("#e3c15a",.3,{metalness:.7}));z.position.set(.2,_e.h+.1,.25),n.add(z)}let x=new Bt;x.position.set(0,0,er);let v=Ot("#3d3c4c",.8),R=Ot("#4f4e63",.8),S=new q(new St(.52,.08,.5),R);S.position.y=.46,S.castShadow=!0,x.add(S);let b=new q(new St(.5,.58,.07),v);b.position.set(0,.82,-.26),b.rotation.x=-.08,b.castShadow=!0,x.add(b);let I=new q(new Q(.03,.03,.36,8),o);I.position.y=.24,x.add(I);for(let F=0;F<5;F++){let P=new q(new St(.04,.03,.3),o),W=F/5*Math.PI*2;P.position.set(Math.sin(W)*.14,.04,Math.cos(W)*.14),P.rotation.y=W,x.add(P)}n.add(x);let U=new q(new Dn(1.25,1.42,56),new ee({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.set(0,.012,-.3),n.add(U);let y=new q(new St(_e.w+.3,1.7,_e.d+1.2),new ee({visible:!1}));y.position.set(0,.85,-.3),n.add(y),i.add(n);let E=(e.source||"sim").split("-")[0],H={group:n,ring:U,hit:y,screen:f,state:"idle",brand:Kh[E]||Kh.sim,model:e.model||""};return vo(H,0,!0),H}function vo(i,t,e){let{g:n,canvas:s,tex:r}=i.screen,o=s.width,a=s.height,l=i.state;if(!(l!=="working"&&!e&&i._drawn===l)){if(i._drawn=l,l==="working"){n.fillStyle="#14263a",n.fillRect(0,0,o,a);let c=Math.floor(t*22);for(let f=0;f<9;f++){let h=c+f,u=h*7%4*10,m=30+h*53%110;n.fillStyle=["#8cc8ff","#7fe0a8","#f6d36b","#c7a5ff"][h%4],n.fillRect(12+u,10+f*12,Math.min(m,o-30-u),5)}Math.floor(t*3)%2&&(n.fillStyle="#fff",n.fillRect(14,10+8*12,7,6))}else if(l==="error")n.fillStyle="#5a1f22",n.fillRect(0,0,o,a),n.fillStyle="#ff8a8a",n.font="bold 54px Segoe UI, Arial",n.textAlign="center",n.fillText("!",o/2,76),n.font="bold 15px Segoe UI, Arial",n.fillText("L\u1ED6I \u2013 xem nh\u1EADt k\xFD",o/2,104);else{let[c,f]=i.brand,h=n.createLinearGradient(0,0,o,a);h.addColorStop(0,"#1d2230"),h.addColorStop(1,"#2a2f40"),n.fillStyle=h,n.fillRect(0,0,o,a),n.fillStyle=c,n.font="bold 24px Segoe UI, Arial",n.textAlign="center",n.fillText(f,o/2,62),i.model&&(n.fillStyle="#aab0c0",n.font="14px Segoe UI, Arial",n.fillText(i.model.slice(0,22),o/2,86)),n.fillStyle=c,n.globalAlpha=.5,n.fillRect(o/2-30,96,60,3),n.globalAlpha=1}r.needsUpdate=!0}}var ir=new L;function mn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ir.copy(t),ir[n]=0,ir.normalize();let c=.5*o/(o+a),f=1-ir.angleTo(i)/l;return Math.sign(ir[e])===1?f*c:a/(o+a)+c+c*(1-f)}var sr=class extends St{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,u=this.attributes.uv.array,m=f.length/6,p=new L,_=.5/s;for(let g=0,d=0;g<f.length;g+=3,d+=2)switch(a.fromArray(f,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),f[g+0]=c.x*Math.sign(a.x)+l.x*r,f[g+1]=c.y*Math.sign(a.y)+l.y*r,f[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/m)){case 0:p.set(1,0,0),u[d+0]=mn(p,l,"z","y",r,n),u[d+1]=1-mn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),u[d+0]=1-mn(p,l,"z","y",r,n),u[d+1]=1-mn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),u[d+0]=1-mn(p,l,"x","z",r,t),u[d+1]=mn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),u[d+0]=1-mn(p,l,"x","z",r,t),u[d+1]=1-mn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),u[d+0]=1-mn(p,l,"x","y",r,t),u[d+1]=1-mn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),u[d+0]=mn(p,l,"x","y",r,t),u[d+1]=1-mn(p,l,"y","x",r,e);break}}};function Mo(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Re,c=0;for(let f=0;f<i.length;++f){let h=i[f],u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(t){let m;if(e)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,f),c+=m}}if(e){let f=0,h=[];for(let u=0;u<i.length;++u){let m=i[u].index;for(let p=0;p<m.count;++p)h.push(m.getX(p)+f);f+=i[u].attributes.position.count}l.setIndex(h)}for(let f in r){let h=nf(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(let f in o){let h=o[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<h;++u){let m=[];for(let _=0;_<o[f].length;++_)m.push(o[f][_][u]);let p=nf(m);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(p)}}return l}function nf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new ze(o,e,n),l=0;for(let c=0;c<i.length;++c){let f=i[c];if(f.isInterleavedBufferAttribute){let h=l/e;for(let u=0,m=f.count;u<m;u++)for(let p=0;p<e;p++){let _=f.getComponent(u,p);a.setComponent(u+h,p,_)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var dt={minX:-14,maxX:26,minZ:-10,maxZ:18,wallH:3.6,inZ:10},Kg=[{x:18.6,z:-4.4},{x:23,z:-4.4}],vs={w:1.25,l:2.5},jl=new Map,D=(i,t=.75,e={})=>{let n=JSON.stringify([i,t,e.metalness||0,e.emissive||"",e.emissiveIntensity||0,e.side||0,!!e.flatShading]);return jl.has(n)||jl.set(n,new se({color:i,roughness:t,metalness:0,...e})),jl.get(n)},Ie=(i,t=1.6)=>D(i,.4,{emissive:i,emissiveIntensity:t});function Ue(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new rn(n);return s.colorSpace=ve,s.anisotropy=8,s}function tn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function jg(){let i=tn(21),t=Ue(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*360);for(;a<n;){let l=260+Math.floor(i()*260),c=i();e.fillStyle=`rgb(${Math.round(232+c*12)},${Math.round(208+c*12)},${Math.round(170+c*14)})`,e.fillRect(a,o,l,64),e.strokeStyle="rgba(165,120,75,.10)",e.lineWidth=1.2;for(let f=0;f<4;f++){let h=o+8+i()*48;e.beginPath(),e.moveTo(a,h);for(let u=a;u<a+l;u+=40)e.lineTo(u,h+Math.sin(u*.02+f)*2.5);e.stroke()}e.fillStyle="rgba(140,100,60,.22)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(140,100,60,.25)",e.fillRect(0,o,n,2)}});return t.wrapS=t.wrapT=wn,t.repeat.set(4,2.9),t}function Ql(i,t,e){return Ue(512,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),n.strokeStyle=t,n.lineWidth=22,n.strokeRect(26,26,s-52,r-52),n.lineWidth=4,n.strokeRect(54,54,s-108,r-108),n.fillStyle=e;for(let o=100;o<r-90;o+=44)for(let a=100+o/44%2*22;a<s-90;a+=44)n.beginPath(),n.arc(a,o,5,0,7),n.fill()})}function Qg(){return Ue(1024,576,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#141a33"),n.addColorStop(1,"#2a1f45"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.06)";for(let s=0;s<9;s++)i.beginPath(),i.arc(120+s*110,470-s%3*30,60+s%4*14,0,Math.PI*2),i.fill();i.textAlign="center",i.fillStyle="#ffffff",i.font="900 86px Nunito, sans-serif",i.fillText("\u{1F3AC} SIMI CINEMA",t/2,e/2-20),i.font="700 34px Nunito, sans-serif",i.fillStyle="rgba(255,255,255,.75)",i.fillText('B\u1EA5m "\u{1F3AC} M\xE0n chi\u1EBFu" v\xE0 d\xE1n link YouTube',t/2,e/2+50),i.fillText("\u0111\u1EC3 c\u1EA3 qu\xE1n c\xF9ng xem",t/2,e/2+95)})}function ty(){return Ue(512,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7fbcf2"),n.addColorStop(.65,"#cfe6fb"),n.addColorStop(1,"#f5efe2"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.85)";for(let[r,o,a]of[[120,120,40],[170,110,52],[220,128,36],[360,220,30],[400,210,42]])i.beginPath(),i.arc(r,o,a,0,7),i.fill();let s=tn(9);for(let r=0;r<t;r+=46+s()*30){let o=120+s()*220,a=40+s()*40;i.fillStyle=`rgba(${90+s()*40},${120+s()*40},${160+s()*40},.55)`,i.fillRect(r,e-o,a,o),i.fillStyle="rgba(255,255,255,.45)";for(let l=e-o+12;l<e-10;l+=18)for(let c=r+6;c<r+a-6;c+=12)i.fillRect(c,l,5,8)}})}function ey(){return Ue(1024,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.font='900 118px "Nunito", "Segoe UI", sans-serif',i.textAlign="center",i.textBaseline="middle";for(let[n,s]of[[38,"#2f8cf0"],[18,"#7cc4ff"],[0,"#ffffff"]])i.shadowColor="#2f8cf0",i.shadowBlur=n,i.fillStyle=s,i.fillText("SIMI BAR",t/2-110,e/2+4);i.font='italic 900 92px "Nunito", "Segoe UI", sans-serif';for(let[n,s]of[[34,"#ff4fa3"],[14,"#ff9ccf"],[0,"#fff3fa"]])i.shadowColor="#ff4fa3",i.shadowBlur=n,i.fillStyle=s,i.fillText("chill",t/2+300,e/2+10)})}function ny(){return Ue(512,640,(i,t,e)=>{i.fillStyle="#26332e",i.fillRect(0,0,t,e),i.fillStyle="#f7f3e8",i.textAlign="center",i.font='900 64px "Nunito", "Segoe UI", sans-serif',i.fillText("MENU",t/2,92),i.font='700 34px "Nunito", "Segoe UI", sans-serif',i.textAlign="left",[["C\xE0 ph\xEA s\u1EEFa \u0111\xE1","25k"],["Tr\xE0 \u0111\xE0o cam s\u1EA3","35k"],["Matcha latte","39k"],["Soda chanh d\xE2y","32k"],["B\xE1nh m\xEC AI \u2728","20k"]].forEach(([n,s],r)=>{i.fillStyle="#f7f3e8",i.fillText(n,46,190+r*82),i.fillStyle="#ffd26a",i.textAlign="right",i.fillText(s,t-46,190+r*82),i.textAlign="left"}),i.strokeStyle="rgba(247,243,232,.5)",i.lineWidth=3,i.strokeRect(18,18,t-36,e-36)})}var Eo=null;function iy(){return Eo||(Eo=Ue(256,256,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(.45,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Eo)}function fn(i,t,e,n,s,r=.35){let o=new q(new ie(n*2,n*2),new ee({map:iy(),color:s,transparent:!0,opacity:r,depthWrite:!1,blending:kr,toneMapped:!1}));return o.rotation.x=-Math.PI/2,o.position.set(t,.015,e),o.renderOrder=2,i.add(o),o}function sf(i,t){new cs().load((globalThis.VP_ASSET_BASE||"")+i,e=>{e.colorSpace=ve,e.anisotropy=8,t(e)},void 0,()=>{})}function of(i){let t={animated:[],seats:[],obstacles:[],seatMeshes:[],clickables:[]},e=[],n=(N,K,gt,Ct,_t,Yt=i,{cast:Nt=!0,receive:ne=!0}={})=>{let B=new q(N,K);return B.position.set(gt,Ct,_t),B.castShadow=Nt,B.receiveShadow=ne,Yt.add(B),e.push(B),B},s=(N,K,gt,Ct=0)=>Ct>0?new sr(N,K,gt,2,Math.min(Ct,N/2-.001,K/2-.001,gt/2-.001)):new St(N,K,gt),r=(N,K,gt,Ct)=>t.obstacles.push([Math.min(N,gt),Math.min(K,Ct),Math.max(N,gt),Math.max(K,Ct)]),o=dt.maxX-dt.minX,a=dt.maxZ-dt.minZ,l=(dt.minX+dt.maxX)/2,c=(dt.minZ+dt.maxZ)/2,f=dt.inZ-dt.minZ,h=(dt.minZ+dt.inZ)/2,u={cast:!1};n(s(o+.7,.5,a+.7,.12),D("#e8dfd1",.85),l,-.26,c,i,{cast:!1,receive:!0}),n(s(o+.75,.08,a+.75,.03),D("#d3c4ae",.8),l,-.47,c,i,u);let m=jg();m.repeat.set(4*o/28,2.9*f/20);let p=new q(new ie(o,f),new se({color:"#ffffff",roughness:.62,map:m}));p.rotation.x=-Math.PI/2,p.position.set(l,.001,h),p.receiveShadow=!0,i.add(p),t.floor=p;let _=D("#f6f0e6",.95),g=D("#e3d5bf",.8),d=D("#b98d5e",.5),M=D("#9b7048",.6);n(s(o+.2,dt.wallH,.22),_,l,dt.wallH/2,dt.minZ-.11,i,u),n(s(.22,dt.wallH,f),_,dt.minX-.11,dt.wallH/2,h,i,u),n(s(o,1,.05),g,l,.5,dt.minZ+.025,i,u),n(s(.05,1,f),g,dt.minX+.025,.5,h,i,u),n(s(o,.06,.09),d,l,1.02,dt.minZ+.045,i,u),n(s(.09,.06,f),d,dt.minX+.045,1.02,h,i,u),n(s(o-.02,.12,.07),M,l,.06,dt.minZ+.035,i,u),n(s(.07,.12,f-.02),M,dt.minX+.035,.06,h,i,u),n(s(o+.22,.12,.3,.03),D("#ffffff",.6),l,dt.wallH+.06,dt.minZ-.08,i,u),n(s(.3,.12,f,.03),D("#ffffff",.6),dt.minX-.08,dt.wallH+.06,h,i,u),n(s(.34,dt.wallH+.12,.34,.04),D("#ffffff",.6),dt.minX-.15,(dt.wallH+.12)/2,dt.inZ,i,u);for(let N=dt.minX+.6;N<dt.maxX;N+=.6)n(s(.02,.83,.02),d,N,.545,dt.minZ+.06,i,u);for(let N=dt.minZ+.6;N<dt.inZ-.2;N+=.6)n(s(.02,.83,.02),d,dt.minX+.06,.545,N,i,u);let x=.6,v=5.4,R=-8.1,S=(x+v)/2;n(s(v-x+1.6,dt.wallH-.02,.07),D("#1d2b4f",.9),S,dt.wallH/2,dt.minZ+.02,i,u),n(s(v-x,1.05,.72,.06),D("#8a5a3b",.55),S,.525,R);for(let N=x+.25;N<v-.1;N+=.28)n(s(.12,.86,.04,.015),D("#a8724c",.5),N,.53,R+.37,i,u);n(s(v-x+.24,.07,.92,.03),D("#f6f3ee",.22,{metalness:.05}),S,1.09,R+.05),n(s(v-x,.04,.04),Ie("#4aa8ff",2.4),S,.1,R+.39,i,u),n(s(v-x,.03,.4),D("#b9c2cf",.3,{metalness:.6}),S,.06,R+.6,i,u),r(x-.1,R-.5,v+.1,R+.45),r(x-.1,dt.minZ,v+.1,R);let b=tn(5),I=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#ff9a52","#c3a6ff","#ff5a5f","#9fd6ff"],U=new Q(.05,.06,1,12),y=new Q(.018,.022,.08,8);for(let N=0;N<3;N++){let K=1.45+N*.55;n(s(v-x-.4,.05,.34,.015),D("#c79a6a",.5),S,K,dt.minZ+.22,i,u),n(s(v-x-.4,.035,.03),Ie("#ffd8a0",1),S,K-.04,dt.minZ+.37,i,u);for(let gt=x+.2;gt<v-.3;gt+=.32+b()*.2){let Ct=I[Math.floor(b()*I.length)],_t=.22+b()*.14,Yt=n(U,D(Ct,.18,{emissive:Ct,emissiveIntensity:.25}),gt,K+_t/2+.03,dt.minZ+.22,i,u);Yt.scale.y=_t,n(y,D("#2b2b33"),gt,K+_t+.07,dt.minZ+.22,i,u)}}let E=new q(new ie(4.6,1.15),new ee({map:ey(),transparent:!0,toneMapped:!1,depthWrite:!1}));E.position.set(S,3.12,dt.minZ+.06),i.add(E),E.material.opacity=.95;let H=new se({color:"#e6f6ff",roughness:.05,transparent:!0,opacity:.55});for(let N=0;N<3;N++)n(new Q(.05,.04,.13,12),H,x+1.2+N*1.2,1.19,R-.1,i,u);n(s(.55,.48,.38,.05),D("#cfd6df",.25,{metalness:.65}),v-.8,1.37,R-.1),n(s(.3,.06,.2,.02),D("#2b2b33",.4),v-.8,1.64,R-.1,i,u),n(new Q(.1,.08,.14,14),D("#ffffff",.5),x+.5,1.2,R-.15,i,u),n(new Je(.13,1),D("#5fb36f",.8,{flatShading:!0}),x+.5,1.36,R-.15,i,u);let F=new q(new ie(1.1,1.38),new se({map:ny(),roughness:.9}));F.position.set(x-1.6,2,dt.minZ+.05),i.add(F),n(s(1.24,1.52,.05,.02),D("#8a5a3b",.5),x-1.6,2,dt.minZ+.02,i,u);let P=D("#c2cad6",.25,{metalness:.7}),W=[D("#2f8cf0",.55),D("#ff7a6b",.55)],z=new Q(.21,.21,.1,22),nt=0;for(let N=x+.6;N<=v-.5;N+=1.05){let K=R+.85,gt=new Bt;gt.position.set(N,0,K),i.add(gt),n(z,W[nt%2],0,.75,0,gt),n(new Q(.035,.035,.7,10),P,0,.36,0,gt),n(new Q(.19,.22,.03,20),P,0,.015,0,gt),n(new Pe(.16,.014,8,20),P,0,.3,0,gt,u).rotation.x=Math.PI/2,Jt(`b${++nt}`,N,K,Math.PI,.78,{x:N,z:K+.55})}let $=D("#fbf7f0",.35),J=D("#b8875a",.5);ly({scene:i,add:n,box:s,block:r,seat:Jt,out:t});let ot=[D("#8fc9b0",.85),D("#a99be0",.85),D("#8cc3f5",.85)],ct=[D("#ffd34d",.8),D("#ff9a6b",.8),D("#ffffff",.8)],bt=[Ql("#f3ead9","#8fc9b0","rgba(143,201,176,.5)"),Ql("#efe9f8","#a99be0","rgba(169,155,224,.5)"),Ql("#eaf3fc","#8cc3f5","rgba(140,195,245,.5)")];[[-10.2,-6],[-10.2,-1],[-10.2,4]].forEach(([N,K],gt)=>{let Ct=ot[gt],_t=new Bt;_t.position.set(N-2.6,0,K),i.add(_t),n(s(.92,.3,2.6,.08),Ct,0,.27,0,_t),n(s(.8,.14,2.3,.07),Ct,.05,.47,0,_t),n(s(.26,.72,2.6,.1),Ct,-.34,.6,0,_t);for(let Nt of[-1,1])n(s(.92,.55,.22,.09),Ct,0,.42,Nt*1.25,_t);for(let[Nt,ne]of[[-.75,.2],[.75,-.2]])n(s(.14,.34,.34,.07),ct[gt],-.13,.66,Nt,_t).rotation.set(ne,0,.22);for(let[Nt,ne]of[[-.35,-1.2],[.35,-1.2],[-.35,1.2],[.35,1.2]])n(new Q(.03,.02,.12,8),J,Nt,.06,ne,_t,u);r(N-3.1,K-1.4,N-2.1,K+1.4),n(new Q(.55,.55,.06,32),D("#c79a6a",.45),N-.4,.38,K),n(new Q(.08,.12,.34,12),D("#9b7048",.5),N-.4,.18,K),n(new Q(.06,.06,.08,12),Ie("#ffb35c",.9),N-.4,.45,K+.2,i,u),n(new Q(.05,.04,.12,12),H,N-.55,.47,K-.2,i,u),r(N-.95,K-.6,N+.15,K+.6);for(let Nt=-1;Nt<=1;Nt++)Jt(`s${gt+1}${Nt+2}`,N-2.5,K+Nt*.8,Math.PI/2,.44,{x:N-1.75,z:K+Nt*.8});let Yt=new q(new ie(3.4,3.2),new se({map:bt[gt],roughness:.95}));Yt.rotation.x=-Math.PI/2,Yt.position.set(N-1,.006,K),Yt.receiveShadow=!0,i.add(Yt),fn(i,N-1.2,K,2,"#ffd9a8",.18)});for(let[N,K]of[[-13.2,-8.4],[-13.2,6.4]])n(new Q(.16,.2,.04,18),D("#3a3a44",.4),N,.02,K),n(new Q(.02,.02,1.6,8),D("#3a3a44",.4),N,.82,K),n(new Q(.2,.28,.34,20,1,!0),D("#fff1d6",.6,{side:ye,emissive:"#ffd9a0",emissiveIntensity:.7}),N,1.72,K,i,u),fn(i,N+.4,K,1.4,"#ffd9a8",.25);let It=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#c3a6ff"].map(N=>new $t(N)),et=new $t("#2a3150"),ht=new as(s(.94,.05,.94,.02),new ee({toneMapped:!1}),30),xt=new ae,yt=new $t;for(let N=0;N<6;N++)for(let K=0;K<5;K++)xt.makeTranslation(-4.5+N,.025,2.5+K),ht.setMatrixAt(N*5+K,xt),ht.setColorAt(N*5+K,et);ht.receiveShadow=!0,i.add(ht),n(s(6.2,.04,5.2,.02),D("#c2cad6",.3,{metalness:.6}),-2,.012,4.5,i,u),t.animated.push(N=>{for(let K=0;K<30;K++){let gt=.5+.5*Math.sin(N*.6+K*1.7);yt.copy(et).lerp(It[(Math.floor(K/5)+K)%5],.4+.3*gt),ht.setColorAt(K,yt)}ht.instanceColor.needsUpdate=!0});let Ut=new q(new Je(.35,1),new se({color:"#eef3fa",roughness:.1,metalness:.9,flatShading:!0}));Ut.position.set(-2,3,5),Ut.castShadow=!0,i.add(Ut),n(new Q(.01,.01,.6,4),D("#888"),-2,3.45,5,i,u),t.animated.push(N=>{Ut.rotation.y=N*.8});let Gt=fn(i,-2,4,1.4,"#ff6fb5",.4),Xt=fn(i,-2,6,1.4,"#4aa8ff",.4);t.animated.push(N=>{Gt.position.set(-2+Math.sin(N*.5)*2.2,.06,4.5+Math.cos(N*.5)*1.6),Xt.position.set(-2+Math.sin(N*.5+Math.PI)*2.2,.06,4.5+Math.cos(N*.5+Math.PI)*1.6)}),n(s(2.2,.95,.8,.06),D("#24304f",.4),-11.5,.475,8.3),n(s(2.2,.05,.05),Ie("#ff6fb5",2),-11.5,.9,7.88,i,u),n(s(2.1,.05,.72,.02),D("#3a3a44",.4),-11.5,.97,8.3);for(let N of[-.5,.5])n(new Q(.22,.22,.04,24),D("#16161c",.2),-11.5+N,1.02,8.3,i,u);n(s(.4,.04,.3,.01),Ie("#4aa8ff",1.2),-11.5,1.01,8.3,i,u);for(let N of[-13,-10])n(s(.7,1.6,.6,.06),D("#24304f",.5),N,.8,9.2),n(new Q(.22,.22,.02,24),D("#3a3a44",.3),N,1.05,8.89,i,u).rotation.x=Math.PI/2,n(new Q(.12,.12,.02,20),D("#3a3a44",.3),N,.5,8.89,i,u).rotation.x=Math.PI/2;r(-13.4,7.85,-9.6,9.6),[[.6,-3.4],[3,-2.6]].forEach(([N,K],gt)=>{n(new Q(.42,.42,.05,28),$,N,1.08,K),n(new Q(.04,.05,1.06,10),D("#3a3a44",.4),N,.53,K),n(new Q(.26,.3,.03,20),D("#3a3a44",.4),N,.015,K),n(new Q(.05,.04,.13,12),H,N+.12,1.17,K-.05,i,u),n(new Pt(.06,10,8),D(["#ff7aa8","#ffd34d"][gt],.7),N-.12,1.15,K+.06,i,u),r(N-.45,K-.45,N+.45,K+.45)});let te=ty();for(let N of[-7.6,8.4]){let K=new q(new ie(1.7,1.6),new ee({map:te,toneMapped:!1}));K.position.set(dt.minX+.03,2.15,N),K.rotation.y=Math.PI/2,i.add(K),n(s(.08,1.8,1.9,.02),D("#ffffff",.5),dt.minX+.02,2.15,N,i,u),n(s(.1,.05,1.7),D("#ffffff",.5),dt.minX+.06,2.15,N,i,u),n(s(.1,1.6,.05),D("#ffffff",.5),dt.minX+.06,2.15,N,i,u),n(s(.22,.06,1.95,.02),D("#ffffff",.5),dt.minX+.1,1.32,N,i,u)}cy({scene:i,add:n,box:s,block:r,seat:Jt,out:t}),uy({scene:i,add:n,box:s,block:r,out:t}),py({scene:i,add:n,box:s,out:t});let ut=[D("#f6f1e8",.6),D("#d98b5f",.75)],C=[D("#5fb36f",.85,{flatShading:!0}),D("#3f9a5a",.85,{flatShading:!0})],Et=new Je(1,1);[[-13.3,-9.3],[-13.3,9.3],[-6,-9.3],[-13.3,-3.6],[14.3,9.2],[25.5,6.8]].forEach(([N,K],gt)=>{n(new Q(.26,.19,.5,18),ut[gt%2],N,.25,K),n(new Q(.24,.24,.03,18),D("#6b4a32",.9),N,.49,K,i,u);let Ct=tn(30+gt);for(let _t=0;_t<5;_t++)n(Et,C[_t%2],N+(Ct()-.5)*.3,.8+Ct()*.55,K+(Ct()-.5)*.3).scale.setScalar(.2+Ct()*.12);r(N-.35,K-.35,N+.35,K+.35)});for(let N=x+1;N<v;N+=2.4)n(new Q(.015,.015,1.1,8),D("#7c818d"),N,dt.wallH-.55,R+.1,i,u),n(new qe(.2,.22,20,1,!0),D("#c99a5b",.4,{side:ye}),N,dt.wallH-1.15,R+.1,i,u),n(new Pt(.07,12,8),Ie("#ffd28a",3),N,dt.wallH-1.23,R+.1,i,u),fn(i,N,R+.9,1.25,"#ffd9a0",.32);let X=["#ffd28a","#ff9ccf","#9fd0ff","#b6f5d8"].map(N=>new $t(N)),Y=96,ft=new as(new Pt(.035,8,6),new ee({toneMapped:!1}),Y),mt=new ae;for(let N=0;N<Y;N++){let K=N/(Y-1),gt=K<.6,Ct=gt?dt.maxX-.4-K/.6*(o-.8):dt.minX+.1,_t=gt?dt.minZ+.1:dt.minZ+.4+(K-.6)/.4*(f-.8),Yt=dt.wallH-.25-Math.abs(Math.sin(N*.55))*.22;mt.makeTranslation(Ct,Yt,_t),ft.setMatrixAt(N,mt),ft.setColorAt(N,X[N%4])}i.add(ft);let pt=new ee({color:"#ffffff",toneMapped:!1}),A=new q(new ie(2.4,3.2),pt);A.position.set(dt.minX+.075,2,-3.6),A.rotation.y=Math.PI/2,i.add(A),n(s(.06,3.36,2.56,.03),D("#1d2b4f",.4),dt.minX+.03,2,-3.6,i,u),sf("brand/simi-banner.jpg",N=>{pt.map=N,pt.needsUpdate=!0});let w=(N,K,gt,Ct,_t,Yt,Nt,ne)=>{let B=new Bt;B.position.set(_t,Yt,Nt),B.rotation.y=ne,i.add(B),n(s(K+.18,gt+.18,.05,.03),D(Ct,.5),0,0,0,B,u);let Tt=new q(new ie(K,gt),new ee({transparent:!0,opacity:0,toneMapped:!1}));Tt.position.z=.03,B.add(Tt),sf(N,st=>{Tt.material.map=st,Tt.material.opacity=1,Tt.material.needsUpdate=!0})};w("brand/uniq.png",1.6,.57,"#142c5a",dt.minX+.05,2.4,1.6,Math.PI/2),w("brand/crenot.png",1.8,.44,"#ffffff",dt.minX+.05,2.4,6,Math.PI/2),w("brand/simi.png",1.3,.39,"#0a78f0",dt.minX+.05,2.4,-.8,Math.PI/2);let O=4.8,rt=2.7,at=-9.6,it=1.95,Lt=dt.minZ+.17;n(s(O+.3,rt+.3,.08,.04),D("#16161c",.35),at,it,dt.minZ+.12,i,u),n(s(O+.6,.08,.3,.03),D("#2b2b33",.4),at,it-rt/2-.22,dt.minZ+.2,i,u);for(let N of[-1,1])n(s(.42,1,.36,.05),D("#22222a",.5),at+N*(O/2+.55),.5,dt.minZ+.3);for(let N of[-1,1])for(let K of[.72,.3])n(new Q(K>.5?.08:.13,K>.5?.08:.13,.02,20),D("#3a3a44",.3),at+N*(O/2+.55),K,dt.minZ+.49,i,u).rotation.x=Math.PI/2;r(at-O/2-.8,dt.minZ,at-O/2-.3,dt.minZ+.5),r(at+O/2+.3,dt.minZ,at+O/2+.8,dt.minZ+.5);let vt=new q(new ie(O,rt),new ee({map:Qg(),toneMapped:!1}));vt.position.set(at,it,Lt),i.add(vt);let Rt=new q(new ie(O,rt),new ee({color:0,opacity:0,blending:Cn,toneMapped:!1}));Rt.position.set(at,it,Lt+.002),Rt.visible=!1,i.add(Rt),Rt.userData.cinema=!0,vt.userData.cinema=!0,t.cinema={x:at,y:it,z:Lt+.004,w:O,h:rt,idle:vt,hole:Rt},_y({scene:i,add:n,box:s,block:r,seat:Jt,out:t,statics:e,flat:u,glassM:H}),Ey({scene:i,add:n,box:s,block:r,seat:Jt,out:t,flat:u,glassM:H,tableTop:$});function Jt(N,K,gt,Ct,_t,Yt,Nt,ne){t.seats.push({id:N,x:K,z:gt,face:Ct,h:_t,approach:Yt,kind:Nt,...ne?{theme:ne}:{}});let B=new q(new Q(.32,.32,_t+.1,10),new ee({visible:!1}));B.position.set(K,(_t+.1)/2,gt),B.userData.seatId=N,i.add(B),t.seatMeshes.push(B)}return sy(i,e),t.spawn={minX:8,maxX:16,minZ:13,maxZ:16.5},t}function sy(i,t){i.updateMatrixWorld(!0);let e=new Map;for(let n of t){let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(let o of Object.keys(s.attributes))["position","normal","uv"].includes(o)||s.deleteAttribute(o);s.attributes.uv||s.setAttribute("uv",new le(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld);let r=`${n.material.uuid}|${n.castShadow}|${n.receiveShadow}`;e.has(r)||e.set(r,{mat:n.material,cast:n.castShadow,receive:n.receiveShadow,geos:[]}),e.get(r).geos.push(s),n.parent.remove(n)}for(let{mat:n,cast:s,receive:r,geos:o}of e.values()){let a=Mo(o,!1);if(!a)continue;let l=new q(a,n);l.castShadow=s,l.receiveShadow=r,l.matrixAutoUpdate=!1,i.add(l)}for(let n of[...i.children])n.isGroup&&n.children.length===0&&i.remove(n)}var ce={cx:8,cz:.6,r:1.75,x1:4.9,x2:13.1,z1:-2.3,z2:3.5,gx1:5.4,gx2:10.6,gz1:5.2,gz2:8.4};function ry(){return Ue(256,512,(i,t,e)=>{let n=tn(7);i.fillStyle="#d5d3a2",i.fillRect(0,0,t,e);for(let s=0;s<e;s+=4){let r=n();i.fillStyle=`rgba(${150+r*40},${150+r*30},${80+r*20},.18)`,i.fillRect(0,s,t,2)}i.fillStyle="#2f3b2c",i.fillRect(0,0,14,e),i.fillRect(t-14,0,14,e),i.fillStyle="rgba(255,255,255,.12)",i.fillRect(14,0,2,e),i.fillRect(t-16,0,2,e),i.fillStyle="rgba(90,80,40,.35)",i.fillRect(0,0,t,2),i.fillRect(0,e-2,t,2)})}function oy(i){let n=1040/(ce.gx2-ce.gx1),s=640/(ce.gz2-ce.gz1);return Ue(1040,640,r=>{r.fillStyle="#ece5d3",r.fillRect(0,0,1040,640);let o=a=>{r.lineWidth=3,r.strokeStyle="rgba(150,135,105,.38)",a(0),r.lineWidth=2,r.strokeStyle="rgba(255,255,255,.75)",a(3)};o(a=>{for(let l=14;l<640;l+=18)r.beginPath(),r.moveTo(0,l+a),r.lineTo(1040,l+a),r.stroke()});for(let[a,l,c]of i){let f=(a-ce.gx1)*n,h=(l-ce.gz1)*s,u=c*n;r.fillStyle="#ece5d3",r.beginPath(),r.arc(f,h,u+6*18,0,Math.PI*2),r.fill(),o(m=>{for(let p=1;p<=6;p++)r.beginPath(),r.arc(f,h,u+p*18+m,0,Math.PI*2),r.stroke()})}})}function ay(){return Ue(768,240,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#5b3a22"),n.addColorStop(1,"#3e2615"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=2;for(let s=12;s<e;s+=17)i.beginPath(),i.moveTo(0,s),i.bezierCurveTo(t*.3,s+6,t*.6,s-6,t,s+3),i.stroke();i.strokeStyle="#d9b46a",i.lineWidth=5,i.strokeRect(12,12,t-24,e-24),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f3d58c",i.font='bold 74px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("THI\u1EC0N \xB7 D\u01AF\u1EE0NG SINH".normalize("NFC"),t/2,e*.42),i.fillStyle="#ead9b0",i.font='600 34px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("T\u0129nh t\xE2m \xB7 H\xEDt th\u1EDF \xB7 An nhi\xEAn".normalize("NFC"),t/2,e*.76)})}function ly({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},{cx:a,cz:l}=ce,c=D("#6b4528",.6),f=D("#a77b4f",.6),h=D("#a9a59b",.95,{flatShading:!0}),u=ce.x2-ce.x1,m=ce.z2-ce.z1,p=(ce.x1+ce.x2)/2,_=(ce.z1+ce.z2)/2;t(e(u+.2,.03,m+.2,.01),c,p,.015,_,i,o);let g=ry();g.wrapS=g.wrapT=wn,g.repeat.set(u/.9,m/1.8);let d=new q(new ie(u,m),new se({map:g,roughness:.9}));d.rotation.x=-Math.PI/2,d.position.set(p,.032,_),d.receiveShadow=!0,i.add(d);let M=[D("#34446e",.95),D("#6d3b30",.95)],x=[D("#d98a2b",.9),D("#46598a",.9)],v=e(.74,.04,.74,.015),R=new Q(.22,.24,.14,22);for(let X=0;X<8;X++){let Y=X/8*Math.PI*2,ft=a+Math.sin(Y)*ce.r,mt=l+Math.cos(Y)*ce.r,pt=new Bt;pt.position.set(ft,0,mt),pt.rotation.y=Y,i.add(pt),t(v,M[X%2],0,.052,.1,pt,o),t(R,x[X%2],0,.142,.05,pt),t(new Pe(.23,.012,6,22),D("#f1e3c2",.8),0,.142,.05,pt,o).rotation.x=Math.PI/2,s(`z${X+1}`,ft+Math.sin(Y)*.05,mt+Math.cos(Y)*.05,Y+Math.PI,.21,{x:a+Math.sin(Y)*(ce.r+.8),z:l+Math.cos(Y)*(ce.r+.8)},"zen")}t(new Q(.5,.5,.05,32),D("#5a2219",.32),a,.3,l),t(new Q(.51,.51,.015,32),D("#c9a14a",.4,{metalness:.5}),a,.27,l,i,o);for(let X=0;X<4;X++){let Y=X*Math.PI/2+Math.PI/4;t(e(.06,.26,.06,.01),D("#3c1610",.4),a+Math.sin(Y)*.36,.14,l+Math.cos(Y)*.36)}let S=D("#9a7432",.35,{metalness:.7});t(new Q(.11,.09,.1,18),S,a,.38,l),t(new Pe(.11,.015,6,18),S,a,.43,l,i,o).rotation.x=Math.PI/2;for(let X of[-.03,0,.03])t(new Q(.004,.004,.2,4),D("#7a3b22",.8),a+X,.53,l,i,o);for(let X of[-.03,0,.03])t(new Pt(.01,6,4),Ie("#ff6a2a",3),a+X,.635,l,i,o);t(new Q(.06,.08,.16,14),D("#e9eef2",.25),a-.27,.41,l+.12,i,o);for(let X=0;X<6;X++){let Y=X*Math.PI/3;t(new Pt(.05,8,6),D("#f39bb8",.7),a-.27+Math.sin(Y)*.05,.52,l+.12+Math.cos(Y)*.05,i,o).scale.set(.7,1.3,.7)}t(new Pt(.035,8,6),D("#ffd84d",.6),a-.27,.53,l+.12,i,o),t(new Q(.035,.035,.09,12),D("#fff6e4",.6),a+.25,.37,l-.15,i,o),t(new Pt(.018,8,6),Ie("#ffcf6a",3),a+.25,.435,l-.15,i,o).scale.set(1,1.6,1),t(new Q(.11,.11,.05,16),D("#6d3b30",.9),a+.2,.355,l+.22,i,o),t(new Pt(.1,18,8,0,Math.PI*2,Math.PI/2,Math.PI/2),D("#c79b3c",.3,{metalness:.8,side:ye}),a+.2,.47,l+.22,i,o),n(a-.6,l-.6,a+.6,l+.6);let b=[];for(let X=0;X<6;X++){let Y=new q(new Pt(.035,8,6),new ee({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));Y.renderOrder=3,i.add(Y),b.push(Y)}r.animated.push(X=>{b.forEach((Y,ft)=>{let mt=(X*.22+ft/b.length)%1;Y.position.set(a+Math.sin(X*.9+ft*1.7)*.07*mt,.66+mt*1.3,l+Math.cos(X*.7+ft)*.05*mt),Y.scale.setScalar(1+mt*3.2),Y.material.opacity=.32*Math.sin(Math.PI*Math.min(1,mt*1.25))})}),fn(i,a,l,3,"#d9f3cf",.26);let I=new se({color:"#fff1d6",roughness:.6,emissive:"#ffcf8a",emissiveIntensity:1.1}),U=D("#2c2420",.5),y=D("#5d5048",.8);for(let X=0;X<4;X++){let Y=X*Math.PI/2+Math.PI/4,ft=a+Math.sin(Y)*1.15,mt=l+Math.cos(Y)*1.15,pt=2.55+X%2*.15;t(new Q(.006,.006,dt.wallH-pt-.22,4),y,ft,(dt.wallH+pt+.22)/2,mt,i,o),t(new Q(.1,.12,.04,16),U,ft,pt+.23,mt,i,o),t(new Q(.1,.12,.04,16),U,ft,pt-.23,mt,i,o);let A=new q(new Pt(.2,18,12),I);A.scale.set(1,1.25,1),A.position.set(ft,pt,mt),i.add(A);for(let w=-1;w<=1;w++)t(new Pe(.2*Math.sqrt(1-(w*.12/.25)**2),.004,4,20),U,ft,pt+w*.12,mt,i,o).rotation.x=Math.PI/2}r.animated.push(X=>{I.emissiveIntensity=1+Math.sin(X*.8)*.18});let E=12.1,H=.6;t(e(.8,.05,.55,.02),D("#4a2f1c",.45),E,.28,H);for(let[X,Y]of[[-.34,-.22],[.34,-.22],[-.34,.22],[.34,.22]])t(e(.05,.25,.05,.01),D("#3a2414",.5),E+X,.14,H+Y);t(e(.42,.02,.26,.01),f,E,.315,H,i,o),t(new Pt(.075,16,12),D("#7a3a24",.4),E-.08,.39,H,i,o).scale.set(1,.85,1),t(new Q(.012,.02,.09,8),D("#7a3a24",.4),E-.16,.4,H,i,o).rotation.z=.9,t(new Pe(.04,.01,6,12),D("#7a3a24",.4),E+0,.4,H,i,o),t(new Pt(.015,8,6),D("#7a3a24",.4),E-.08,.455,H,i,o);for(let X of[.07,.14])t(new Q(.027,.02,.04,12),D("#f3efe4",.3),E+X,.345,H+(X>.1?.06:-.05),i,o);for(let[X,Y]of[[-1,0],[1,Math.PI]]){let ft=H+X*.62,mt=new Bt;mt.position.set(E,0,ft),mt.rotation.y=Y,i.add(mt),t(v,M[1],0,.052,0,mt,o),t(R,x[X<0?0:1],0,.142,-.04,mt),s(`zt${X<0?1:2}`,E,ft-X*.04,Y,.21,{x:E,z:H+X*1.35},"zen")}n(E-.45,H-.32,E+.45,H+.32),fn(i,E,H,1.4,"#ffe2b0",.2);let P=[[6.5,6.2,.38],[8.9,7.4,.3],[9.7,6,.22]],W=ce.gx2-ce.gx1,z=ce.gz2-ce.gz1,nt=(ce.gx1+ce.gx2)/2,$=(ce.gz1+ce.gz2)/2,J=new q(new ie(W,z),new se({map:oy(P),roughness:1}));J.rotation.x=-Math.PI/2,J.position.set(nt,.07,$),J.receiveShadow=!0,i.add(J),t(e(W,.06,z),D("#d9d1bd",1),nt,.03,$,i,o);for(let[X,Y,ft,mt]of[[W+.24,.12,nt,ce.gz1-.06],[W+.24,.12,nt,ce.gz2+.06],[.12,z,ce.gx1-.06,$],[.12,z,ce.gx2+.06,$]])t(e(X,.13,Y,.02),c,ft,.065,mt);let ot=[D("#8f8a80",.95,{flatShading:!0}),D("#76726b",.95,{flatShading:!0})],ct=D("#6f9a4a",.95,{flatShading:!0});P.forEach(([X,Y,ft],mt)=>{let pt=t(new Xs(ft,0),ot[mt%2],X,.07+ft*.45,Y);pt.scale.set(1.15,.8+(mt===0?.35:0),.9),pt.rotation.set(.3*mt,.9*mt,.15);let A=tn(40+mt);for(let w=0;w<4;w++){let O=A()*Math.PI*2;t(new Je(.1+A()*.07,0),ct,X+Math.sin(O)*ft*1.05,.08,Y+Math.cos(O)*ft*1.05,i,o).scale.set(1.3,.45,1.3)}}),n(ce.gx1-.15,ce.gz1-.15,ce.gx2+.15,ce.gz2+.15);let bt=11.15,It=7.6;t(new Q(.3,.34,.32,9),h,bt,.16,It);let et=new q(new ai(.2,20),new se({color:"#6fb6d8",roughness:.1,emissive:"#2a7fb0",emissiveIntensity:.25}));et.rotation.x=-Math.PI/2,et.position.set(bt,.322,It),i.add(et);for(let[X,Y,ft]of[[.42,.1,.12],[-.3,.38,.09],[.15,.42,.1]])t(new Xs(ft,0),h,bt+X,ft*.6,It+Y,i,o);let ht=D("#9cba5a",.55);t(new Q(.03,.03,.62,10),ht,bt+.45,.31,It-.25);let xt=t(new Q(.022,.022,.42,10),ht,bt+.25,.55,It-.14,i,o);xt.rotation.set(0,0,Math.PI/2+.25),xt.rotation.y=-.5;let yt=new q(new Pt(.014,6,4),new ee({color:"#d6efff"}));i.add(yt);let Ut=new q(new Dn(.03,.045,20),new ee({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));Ut.rotation.x=-Math.PI/2,Ut.position.set(bt+.07,.326,It-.04),i.add(Ut),r.animated.push(X=>{let Y=X*.8%1;yt.position.set(bt+.07,.5-Y*Y*.17,It-.04),yt.visible=Y<.95;let ft=X*.8%1;Ut.scale.setScalar(1+ft*3),Ut.material.opacity=.6*(1-ft)}),n(bt-.5,It-.5,bt+.6,It+.6);let Gt=Ie("#ffd28a",1.5);for(let[X,Y]of[[4.5,4.4],[11.4,4.4]]){t(new Q(.2,.24,.1,6),h,X,.05,Y),t(new Q(.075,.09,.55,8),h,X,.37,Y),t(e(.42,.07,.42,.02),h,X,.68,Y),t(e(.3,.26,.3,.02),h,X,.85,Y),t(e(.31,.15,.17),Gt,X,.86,Y,i,o),t(e(.17,.15,.31),Gt,X,.86,Y,i,o);let ft=t(new qe(.36,.22,4),h,X,1.09,Y);ft.rotation.y=Math.PI/4,t(new Pt(.05,8,6),h,X,1.23,Y,i,o),fn(i,X,Y,1.1,"#ffd9a0",.22),n(X-.3,Y-.3,X+.3,Y+.3)}let Xt=D("#6fa64a",.55),te=D("#4e7d33",.6),ut=[D("#5f9e45",.85,{flatShading:!0}),D("#79b856",.85,{flatShading:!0})];[[5,-3,1],[13.5,3.3,3],[4.6,8.7,4]].forEach(([X,Y,ft])=>{let mt=tn(ft*13);t(new Q(.42,.46,.12,14),D("#cfc6b4",.95),X,.06,Y);for(let pt=0;pt<6;pt++){let A=mt()*Math.PI*2,w=.08+mt()*.24,O=X+Math.sin(A)*w,rt=Y+Math.cos(A)*w,at=2.2+mt()*.9;t(new Q(.03,.036,at,8),Xt,O,at/2,rt);for(let it=.4;it<at-.1;it+=.38)t(new Q(.04,.04,.025,8),te,O,it,rt,i,o);for(let it=0;it<3;it++){let Lt=mt()*Math.PI*2,vt=t(new Je(.2+mt()*.1,0),ut[it%2],O+Math.sin(Lt)*.18,at-.2-it*.32,rt+Math.cos(Lt)*.18,i,o);vt.scale.set(1.4,.35,.8),vt.rotation.y=Lt}}n(X-.5,Y-.5,X+.5,Y+.5)});let C=new Bt;C.position.set(4.55,0,3.45),C.rotation.y=.6,i.add(C);for(let X of[-.62,.62])t(e(.07,1.45,.07,.015),c,X,.725,0,C);t(e(1.42,.08,.1,.02),c,0,1.47,0,C,o);let Et=new q(new ie(1.2,.375),new se({map:ay(),roughness:.6}));Et.position.set(0,1.13,.04),C.add(Et),t(e(1.26,.42,.05,.015),c,0,1.13,0,C,o),n(4.55-.7,3.45-.45,4.55+.7,3.45+.45)}var tc={x:11.8,rows:[-8.1,-7,-5.9,-4.8,-3.7],cols:[-1.4,-.7,0,.7,1.4]},rr={x:8.75,z:dt.minZ+.55},nc={x:7,y:2.15,w:1.44,h:1.92};function cy({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=tc.x,l=dt.minZ,c=D("#8c1d18",.35),f=D("#5c120f",.4),h=D("#d9a63e",.3,{metalness:.6}),u=D("#4a2a17",.55),m=new q(new ie(2.3,2.6),new se({map:hy(),roughness:.7,emissive:"#3a0a06",emissiveIntensity:.25}));m.position.set(a,2.2,l+.1),i.add(m),t(e(2.42,2.72,.05,.02),u,a,2.2,l+.07,i,o);let p=l+.45;t(e(1.95,.08,.62,.02),c,a,1,p),t(e(1.95,.16,.03,.01),f,a,.88,p+.3,i,o),t(e(1.75,.025,.012),h,a,.88,p+.32,i,o);for(let[U,y]of[[-.9,-.26],[.9,-.26],[-.9,.26],[.9,.26]])t(e(.08,.96,.08,.015),f,a+U,.48,p+y);t(e(2.15,.42,.42,.03),c,a,.21,p+.55),t(e(2,.025,.012),h,a,.33,p+.767,i,o),n(a-1.15,l,a+1.15,p+.85);let _=p-.2;ec("thantai",a-.3,1.04,_,1.4,i,t,r),ec("ongdia",a+.3,1.04,_,1.4,i,t,r),ec("meo",a,.42,p+.56,1.5,i,t,r);let g=D("#9a7432",.35,{metalness:.7}),d=p+.18;t(new Q(.11,.09,.11,16),g,a,1.095,d);for(let U of[-.035,0,.035])t(new Q(.004,.004,.24,4),D("#7a3b22",.8),a+U,1.27,d,i,o);for(let U of[-.035,0,.035])t(new Pt(.011,6,4),Ie("#ff6a2a",3),a+U,1.39,d,i,o);let M=[];for(let U=0;U<6;U++){let y=new q(new Pt(.035,8,6),new ee({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));y.renderOrder=3,i.add(y),M.push(y)}r.animated.push(U=>{M.forEach((y,E)=>{let H=(U*.2+E/M.length)%1;y.position.set(a+Math.sin(U*.8+E*1.9)*.08*H,1.42+H*1.1,d+Math.cos(U*.6+E)*.05*H),y.scale.setScalar(1+H*3),y.material.opacity=.3*Math.sin(Math.PI*Math.min(1,H*1.25))})});for(let U of[-1,1]){t(new Q(.05,.07,.05,12),h,a+U*.82,1.065,p+.05,i,o),t(new Q(.035,.035,.26,12),D("#c8231b",.5),a+U*.82,1.22,p+.05,i,o),t(new Pt(.03,8,6),Ie("#ffcf6a",3),a+U*.82,1.38,p+.05,i,o).scale.set(1,1.5,1),t(new Q(.06,.08,.22,14),D("#f3efe6",.25),a+U*.72,1.15,p-.17,i,o);for(let y=0;y<5;y++){let E=y*1.256;t(new Pt(.07,10,8),D("#ffcc2e",.75),a+U*.72+Math.sin(E)*.07,1.36+y%2*.04,p-.17+Math.cos(E)*.07,i,o)}}let x=a-.5,v=p+.18;t(new Q(.16,.13,.03,20),h,x,1.055,v,i,o),t(new Pt(.1,14,10),D("#b9d65a",.7),x,1.15,v-.04,i,o);for(let[U,y,E]of[[-.1,.07,"#ff8a1e"],[.1,.07,"#d8261c"],[0,.11,"#ff8a1e"],[-.12,-.05,"#d8261c"]])t(new Pt(.05,10,8),D(E,.55),x+U,1.11,v+y,i,o);for(let U=0;U<4;U++)t(new Qe(.022,.15,4,8),D("#f5d23c",.6),x+.05+U*.03,1.22,v-.02,i,o).rotation.set(.2,0,.9-U*.15);for(let U=0;U<3;U++)t(e(.11,.04,.055,.012),h,a+.42+U*.1,1.06+(U===1?.04:0),p+.2,i,o);for(let U=0;U<4;U++)t(new Q(.05,.05,.016,16),h,a+.62,1.05+U*.018,p+.05,i,o);for(let U of[-1,1])for(let y=0;y<2;y++)t(e(.12,.045,.06,.012),h,a+U*(.42+y*.14),.445,p+.58,i,o);let R=new se({color:"#e2261b",roughness:.5,emissive:"#ff3a1a",emissiveIntensity:.6});for(let U of[-1,1]){let y=a+U*1.45,E=2.85;t(new Q(.006,.006,dt.wallH-E-.25,4),D("#5d5048",.8),y,(dt.wallH+E+.25)/2,l+.55,i,o);let H=new q(new Pt(.22,18,12),R);H.scale.set(1,.85,1),H.position.set(y,E,l+.55),i.add(H),t(new Q(.09,.09,.05,14),h,y,E+.2,l+.55,i,o),t(new Q(.09,.09,.05,14),h,y,E-.2,l+.55,i,o),t(new Q(.012,.012,.22,6),D("#f5c518",.6),y,E-.34,l+.55,i,o);let F=a+U*1.55,P=l+.6;t(new Q(.24,.18,.4,16),D("#2f6fb5",.4),F,.2,P),t(new Q(.245,.245,.04,16),D("#f3efe6",.4),F,.39,P,i,o);let W=tn(77+U);for(let z=0;z<6;z++)t(new Je(.2,1),D(z%2?"#3f8a3f":"#4f9d4a",.85,{flatShading:!0}),F+(W()-.5)*.3,.62+z*.1,P+(W()-.5)*.3,i,o).scale.setScalar(1-z*.1);for(let z=0;z<14;z++){let nt=W()*Math.PI*2,$=.55+W()*.55,J=.2+(1-($-.55)/.55)*.08;t(new Pt(.03,8,6),D("#ff9a1a",.5),F+Math.sin(nt)*J,$,P+Math.cos(nt)*J,i,o)}n(F-.3,P-.3,F+.3,P+.3)}r.animated.push(U=>{R.emissiveIntensity=.55+Math.sin(U*1.3)*.12}),fn(i,a,l+1.6,2.4,"#ffcf8a",.28);let S=[D("#d9a63e",.85),D("#b3241b",.9)],b=new Q(.2,.22,.09,20),I=0;tc.rows.forEach((U,y)=>tc.cols.forEach(E=>{t(b,S[y%2],a+E,.045,U+.12,i,o),s(`k${++I}`,a+E,U,Math.PI,.09,{x:a+E,z:U+.6},"kneel","thantai")}))}function hy(){return Ue(900,1e3,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#b3140f"),n.addColorStop(1,"#7a0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,215,110,.12)",i.lineWidth=5;for(let o=120;o<e;o+=120)for(let a=o/120%2*90;a<t;a+=180)i.beginPath(),i.arc(a,o,26,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(a,o,9,0,Math.PI*2),i.stroke();i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(12,12,t-24,e-24),i.lineWidth=3,i.strokeRect(32,32,t-64,e-64),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`;i.fillStyle="#3d1d0f",i.fillRect(90,60,t-180,170),i.strokeStyle="#f2c14e",i.lineWidth=7,i.strokeRect(102,72,t-204,146),i.fillStyle="#ffd56a",i.font=s(900,92),i.fillText("TH\u1EA6N T\xC0I".normalize("NFC"),t/2,148),i.fillStyle="#ffe9b0",i.font=s(800,40),i.fillText("C\u1EA7u nhi\u1EC1u \u0111\u01A1n \xB7 B\xE1n \u0111\u1EAFt nh\u01B0 t\xF4m t\u01B0\u01A1i".normalize("NFC"),t/2,290),i.save(),i.translate(t/2,520),i.rotate(Math.PI/4),i.fillStyle="#e8262b",i.fillRect(-120,-120,240,240),i.strokeStyle="#ffd56a",i.lineWidth=8,i.strokeRect(-108,-108,216,216),i.restore(),i.fillStyle="#ffd56a",i.font=s(900,74),i.fillText("L\u1ED8C".normalize("NFC"),t/2,525),i.strokeStyle="#7dff9a",i.lineWidth=12,i.lineJoin="round",i.beginPath(),[[250,900],[340,860],[410,880],[500,800],[580,820],[660,720]].forEach(([o,a],l)=>l?i.lineTo(o,a):i.moveTo(o,a)),i.stroke(),i.fillStyle="#7dff9a",i.beginPath(),i.moveTo(700,690),i.lineTo(640,700),i.lineTo(675,745),i.closePath(),i.fill();let r=(o,a)=>{i.fillStyle="#e8262b",i.fillRect(o-58,330,116,620),i.strokeStyle="#ffd56a",i.lineWidth=5,i.strokeRect(o-51,337,102,606),i.fillStyle="#ffd56a",i.font=s(800,38),a.forEach((l,c)=>i.fillText(l.normalize("NFC"),o,390+c*(540/a.length)))};r(100,["Kh\xE1ch","v\xE0o","nh\u01B0","n\u01B0\u1EDBc"]),r(t-100,["Ch\u1ED1t","\u0111\u01A1n","\u1EA7m","\u1EA7m"])})}function ec(i,t,e,n,s,r,o,a){let l={cast:!1},c=new Bt;c.position.set(t,e,n),c.scale.setScalar(s),r.add(c);let f=D("#f3c79a",.6),h=D("#e0ae3c",.28,{metalness:.65}),u=D("#d92a1c",.5);if(i==="thantai"){o(new Q(.13,.17,.32,16),D("#e9b425",.35,{metalness:.3}),0,.16,0,c),o(new Pt(.1,14,10),f,0,.42,0,c),o(new Q(.08,.1,.09,14),D("#1d1d22",.5),0,.53,0,c,l);for(let m of[-1,1])o(new St(.08,.025,.03),D("#1d1d22",.5),m*.11,.53,0,c,l);o(new Qe(.025,.08,4,8),D("#1d1d22",.6),0,.34,.09,c,l).rotation.x=.3,o(new sr(.13,.05,.06,2,.015),h,0,.2,.15,c,l)}else if(i==="ongdia")o(new Pt(.17,16,12),D("#f08a2a",.5),0,.17,0,c).scale.set(1,.95,.9),o(new Pt(.1,12,8),f,0,.15,.1,c,l).scale.set(1,1,.6),o(new Pt(.11,14,10),f,0,.42,0,c),o(new Pe(.045,.012,6,12,Math.PI),D("#8a2a1a",.6),0,.4,.1,c,l).rotation.z=Math.PI,o(new ai(.11,14,0,Math.PI),D("#f6e7c4",.6,{side:ye}),.17,.28,.05,c,l).rotation.set(0,-.4,.5);else{let m=D("#fbf8f2",.45);o(new Pt(.085,14,10),m,0,.085,0,c).scale.set(1,1.1,.9),o(new Pt(.075,14,10),m,0,.22,0,c);for(let g of[-1,1])o(new qe(.025,.05,6),m,g*.045,.29,0,c,l);o(new Pe(.06,.01,6,16),u,0,.165,0,c,l).rotation.x=Math.PI/2,o(new Q(.03,.03,.01,12),h,0,.13,.075,c,l).rotation.x=Math.PI/2;for(let g of[-1,1])o(new Pt(.009,6,4),D("#1d1d22",.4),g*.028,.23,.068,c,l);let p=new Bt;p.position.set(.07,.2,0),c.add(p);let _=new q(new Qe(.022,.07,4,8),m);_.position.y=.05,p.add(_),a.animated.push(g=>{p.rotation.z=-.25+Math.sin(g*5)*.45})}return c}function fy(){return Ue(960,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7a1712"),n.addColorStop(1,"#4e0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="#f2c14e",i.lineWidth=16,i.strokeRect(12,12,t-24,e-24),i.lineWidth=4,i.strokeRect(36,36,t-72,e-72),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`,r=(o,a,l,c,f)=>{for(o=o.normalize("NFC"),i.font=s(a,l);l>24&&i.measureText(o).width>t-120;)l-=2,i.font=s(a,l);i.fillStyle=f,i.fillText(o,t/2,c)};i.shadowColor="rgba(255,190,60,.7)",i.shadowBlur=18,r("\u{1F38B} XIN QU\u1EBA",900,150,170,"#ffd56a"),i.shadowBlur=0,r("\u0110\u1EA6U NG\xC0Y",900,96,300,"#ffe9b0"),r("M\u1ED7i ng\xE0y 1 qu\u1EBB may m\u1EAFn \u2728",800,54,420,"#fff3cf"),r("\u{1F449} B\u1EA5m v\xE0o \u1ED1ng qu\u1EBB",900,58,530,"#f5c518")})}function uy({scene:i,add:t,box:e,block:n,out:s}){let r={cast:!1},o=rr.x,a=rr.z,l=dt.minZ,c=D("#a8191b",.4),f=D("#e0ae3c",.28,{metalness:.65}),h=D("#5b341c",.6);t(e(1.3,.06,.6,.02),c,o,.8,a),t(e(1.36,.03,.66,.01),f,o,.765,a,i,r);for(let[x,v]of[[-.58,-.24],[.58,-.24],[-.58,.24],[.58,.24]])t(e(.06,.77,.06,.015),h,o+x,.385,a+v);t(e(1.22,.32,.02,.01),D("#c8231b",.7),o,.6,a+.3,i,r),t(e(1.1,.03,.012),f,o,.46,a+.312,i,r);let u=new Bt;u.position.set(o-.15,.83,a-.02),i.add(u);let m=D("#c99a4a",.55);t(new Q(.13,.12,.42,20,1,!0),D("#c99a4a",.55,{side:ye}),0,.21,0,u),t(new Q(.12,.12,.02,20),m,0,.01,0,u,r);for(let x of[.08,.36])t(new Pe(.128,.012,6,24),D("#8a6a2e",.5),0,x,0,u,r).rotation.x=Math.PI/2;t(new Q(.131,.131,.06,20,1,!0),D("#b3241b",.6,{side:ye}),0,.22,0,u,r);let p=tn(91);for(let x=0;x<22;x++){let v=p()*Math.PI*2,R=p()*.08,S=.5+p()*.12,b=new Bt;b.position.set(Math.cos(v)*R,.02,Math.sin(v)*R),b.rotation.set((p()-.5)*.25,v,(p()-.5)*.25),u.add(b),t(new St(.014,S,.006),D("#e6c27a",.6),0,S/2,0,b,r),t(new St(.016,.05,.008),D("#d22a1f",.5),0,S-.02,0,b,r)}t(new Q(.16,.13,.025,20),f,o+.3,.845,a+.06,i,r),t(new St(.014,.5,.006),D("#e6c27a",.6),o+.3,.87,a+.06,i,r).rotation.set(Math.PI/2,0,.6),t(new Q(.05,.04,.06,14),D("#9a7432",.35,{metalness:.7}),o+.5,.86,a-.18,i,r);for(let x of[-.012,.012])t(new Pt(.007,6,4),Ie("#ff6a2a",3),o+.5+x,.98,a-.18,i,r);let g=new q(new ie(1.8,1.2),new se({map:fy(),roughness:.75,emissive:"#2a0604",emissiveIntensity:.25}));g.position.set(o,2.12,l+.1),i.add(g),t(e(1.9,1.3,.05,.02),h,o,2.12,l+.07,i,r);let d=new q(new qe(.05,.22,10),Ie("#e2261b",.6));d.position.set(o-.92,1.38,l+.12),i.add(d),s.animated.push(x=>{d.rotation.z=Math.sin(x*2.2)*.18}),fn(i,o,a+.7,1.1,"#ffd9a0",.26),n(o-.7,l,o+.7,a+.35);let M=new q(new St(1.4,1.5,.9),new ee({visible:!1}));M.position.set(o,.75,a),M.userData.action="fortune",i.add(M),s.clickables.push(M)}function dy(i,t,e,n){let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"#8e1410"),s.addColorStop(1,"#4a0a08"),i.fillStyle=s,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,215,110,.10)",i.lineWidth=4;for(let h=90;h<e;h+=110)for(let u=h/110%2*80;u<t;u+=160)i.beginPath(),i.arc(u,h,22,0,Math.PI*2),i.stroke();i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(10,10,t-20,e-20),i.lineWidth=3,i.strokeRect(30,30,t-60,e-60),i.textAlign="center",i.textBaseline="middle";let r=(h,u)=>`${h} ${u}px "Segoe UI", "Noto Sans", Arial, sans-serif`,o=(h,u,m,p)=>{for(h=String(h||"").normalize("NFC"),i.font=r(u,m);m>18&&i.measureText(h).width>p;)m-=2,i.font=r(u,m);return h},a=(h,u,m,p,_,g,d=t-110,M="center")=>{i.textAlign=M;let x=o(h,u,m,d);i.fillStyle=g,i.fillText(x,p,_),i.textAlign="center"};i.fillStyle="#3d1d0f",i.fillRect(70,52,t-140,128),i.strokeStyle="#f2c14e",i.lineWidth=6,i.strokeRect(80,62,t-160,108),i.shadowColor="rgba(255,190,60,.8)",i.shadowBlur=16,a("\u{1F3C6} B\u1EA2NG V\xC0NG",900,78,t/2,118,"#ffd56a"),i.shadowBlur=0,a(n&&n.label?n.label:"Vinh danh tu\u1EA7n n\xE0y",800,34,t/2,214,"#ffe9b0");let l=[["thantai","\u{1F4B0} TH\u1EA6N T\xC0I S\u1ED0NG",h=>`${h.score} \u0111i\u1EC3m`],["lucky","\u{1F340} MAY M\u1EAEN NH\u1EA4T",h=>`${h.score} \u0111i\u1EC3m${h.dai?` \xB7 ${h.dai} \u0110\u1EA1i c\xE1t`:""}`],["ai","\u{1F916} CHI\u1EBEN TH\u1EA6N AI",h=>`${h.score} l\u01B0\u1EE3t AI`]],c=252,f=(e-c-110)/3;l.forEach(([h,u,m],p)=>{let _=c+p*f;i.fillStyle="rgba(255,240,200,.07)",i.fillRect(56,_+6,t-112,f-16),i.strokeStyle="rgba(242,193,78,.55)",i.lineWidth=2,i.strokeRect(56,_+6,t-112,f-16),a(u,900,44,t/2,_+48,"#ffd56a");let g=n&&n.boards&&n.boards[h]||[];if(!g.length){a(n?"Ch\u01B0a c\xF3 ai \u2013 m\u1EDF h\xE0ng \u0111i n\xE0o!":"\u0110ang t\u1EA3i\u2026",800,36,t/2,_+f/2+14,"#ffe9b0");return}let d=g[0];a(`\u{1F451} ${d.name}`,900,64,t/2,_+118,"#ffffff"),a(m(d),800,36,t/2,_+176,"#ffcf6a")}),a("\u{1F449} B\u1EA5m xem top 10",900,40,t/2,e-66,"#f5c518")}function py({scene:i,add:t,box:e,out:n}){let s={cast:!1},{x:r,y:o,w:a,h:l}=nc,c=dt.minZ,f=document.createElement("canvas");f.width=768,f.height=1024;let h=new rn(f);h.colorSpace=ve,h.anisotropy=8;let u=_=>{try{dy(f.getContext("2d"),f.width,f.height,_),h.needsUpdate=!0}catch{}};u(null);let m=new q(new ie(a,l),new se({map:h,roughness:.6,emissive:"#2a0604",emissiveIntensity:.3}));m.position.set(r,o,c+.1),i.add(m),t(e(a+.1,l+.1,.05,.02),D("#d9a63e",.3,{metalness:.6}),r,o,c+.07,i,s),t(e(a+.3,.12,.12,.03),D("#5b341c",.55),r,o+l/2+.1,c+.1,i,s),n.honorBoard={draw:u,mesh:m};let p=new q(new St(a+.1,l+.1,.3),new ee({visible:!1}));p.position.set(r,o,c+.15),p.userData.action="honor",i.add(p),n.clickables.push(p)}function my(){return Ue(512,512,(i,t,e)=>{i.fillStyle="#2c3a6e",i.fillRect(0,0,t,e);let n=tn(77);i.strokeStyle="rgba(150,175,245,.22)",i.lineWidth=3;for(let r=-64;r<e+64;r+=64)for(let o=-64;o<t+64;o+=64)i.beginPath(),i.moveTo(o,r+32),i.lineTo(o+32,r),i.lineTo(o+64,r+32),i.lineTo(o+32,r+64),i.closePath(),i.stroke();let s=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4"];for(let r=0;r<70;r++)i.fillStyle=s[r%4],i.globalAlpha=.35,i.beginPath(),i.arc(n()*t,n()*e,2+n()*2.5,0,7),i.fill();i.globalAlpha=1})}function rf(i){return Ue(256,200,(t,e,n)=>{let s=tn(i),r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,["#140a3a","#05263a","#2a0a26"][i%3]),r.addColorStop(1,"#000"),t.fillStyle=r,t.fillRect(0,0,e,n);for(let a=0;a<40;a++)t.fillStyle="rgba(255,255,255,.6)",t.fillRect(s()*e,s()*n*.7,2,2);let o=["#ff4fa3","#45d2b4","#ffd34d","#4aa8ff"];for(let a=0;a<9;a++){t.fillStyle=o[(a+i)%4];let l=30+a%3*70+s()*10,c=30+Math.floor(a/3)*34;t.fillRect(l,c,22,14),t.fillRect(l-6,c+6,34,6)}t.fillStyle="#ffffff",t.fillRect(e/2-14,n-40,28,12),t.fillRect(e/2-4,n-50,8,10),t.fillStyle="#ffd34d",t.font="bold 18px monospace",t.fillText("SCORE 0"+(12e3+i*3170),12,n-10)})}function gy(i,t,e){return Ue(1024,256,(n,s,r)=>{n.clearRect(0,0,s,r),n.textAlign="center",n.textBaseline="middle",n.font='900 120px "Nunito", "Segoe UI", sans-serif';for(let[o,a]of[[40,t],[16,t],[0,"#ffffff"]])n.shadowColor=t,n.shadowBlur=o,n.fillStyle=a,n.fillText(i,s/2,e?r/2-22:r/2);e&&(n.font='800 46px "Nunito", "Segoe UI", sans-serif',n.shadowBlur=12,n.fillStyle="#ffffff",n.fillText(e,s/2,r/2+72))})}function yy(){return Ue(256,256,(i,t)=>{let e=t/2;i.fillStyle="#1a1a1a",i.beginPath(),i.arc(e,e,e,0,7),i.fill();for(let n=0;n<20;n++){let s=n/20*Math.PI*2-Math.PI/20,r=s+Math.PI/10;for(let[o,a,l,c]of[[30,100,"#f3e6c8","#151515"],[100,112,"#1d8a4a","#d8262e"],[12,30,"#f3e6c8","#151515"],[70,80,"#1d8a4a","#d8262e"]])i.fillStyle=n%2?l:c,i.beginPath(),i.arc(e,e,a,s,r),i.arc(e,e,o,r,s,!0),i.closePath(),i.fill()}i.fillStyle="#1d8a4a",i.beginPath(),i.arc(e,e,12,0,7),i.fill(),i.fillStyle="#d8262e",i.beginPath(),i.arc(e,e,6,0,7),i.fill()})}var xy=["#fbfaf5","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b","#141414","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b"];function _y({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=14.6,l=dt.maxX,c=dt.minZ,f=9.6,h=my();h.wrapS=h.wrapT=wn,h.repeat.set((l-a)/3,(f-c)/3);let u=new q(new ie(l-a,f-c),new se({map:h,roughness:.95}));u.rotation.x=-Math.PI/2,u.position.set((a+l)/2,.006,(c+f)/2),u.receiveShadow=!0,i.add(u),t(e(.06,.02,f-c),Ie("#7c5cff",1.4),a+.03,.012,(c+f)/2,i,o),t(e(l-a,.02,.06),Ie("#7c5cff",1.4),(a+l)/2,.012,f-.03,i,o),t(e(l-a-.3,dt.wallH-.02,.07),D("#231a4a",.9),(a+l)/2,dt.wallH/2,dt.minZ+.02,i,o);let m=new q(new ie(4.4,1.1),new ee({map:gy("GAME ZONE","#b26bff"),transparent:!0,toneMapped:!1,depthWrite:!1}));m.position.set(20.8,2.95,dt.minZ+.07),i.add(m),[15.5,16.65,17.8].forEach((P,W)=>{let z=new Bt;z.position.set(P,0,dt.minZ+.5),i.add(z);let nt=D(["#ff4fa3","#2f8cf0","#45d2b4"][W],.5);t(e(.82,1.2,.72,.04),D("#20203a",.5),0,.6,0,z),t(e(.86,.06,.74,.02),nt,0,1.22,0,z,o),t(e(.82,.62,.42,.04),D("#20203a",.5),0,1.55,-.14,z),t(e(.86,.2,.5,.03),nt,0,1.96,-.1,z,o),t(e(.7,.12,.02),Ie(["#ff9ccf","#9fd0ff","#b6f5d8"][W],1.6),0,1.96,.16,z,o),t(e(.76,.06,.3,.02),D("#2b2b40",.5),0,1.04,.3,z,o),t(new Pt(.035,10,8),D("#ff5a5f",.3),-.18,1.1,.32,z,o),t(new Q(.03,.03,.04,10),D("#ffd34d",.3),.1,1.08,.3,z,o),t(new Q(.03,.03,.04,10),D("#4aa8ff",.3),.2,1.08,.3,z,o);let $=new q(new ie(.66,.5),new ee({map:rf(W+3),toneMapped:!1}));$.position.set(0,1.56,.075),$.rotation.x=-.18,z.add($),fn(i,P,dt.minZ+1.3,.8,["#ff6fb5","#4aa8ff","#45d2b4"][W],.28)}),n(15,dt.minZ,18.3,dt.minZ+1),t(e(1.3,1.3,.06,.02),D("#8a5a3b",.5),20.8,1.55,dt.minZ+.08,i,o);for(let P=0;P<6;P++)t(new Q(.012,.018,1.2,8),D(P%2?"#c99a5b":"#9b6b3e",.45),20.3+P*.2,1.55,dt.minZ+.14,i,o);let p=new q(new ai(.34,40),new se({map:yy(),roughness:.8}));p.position.set(24.6,1.75,dt.minZ+.1),i.add(p),t(new Q(.42,.42,.05,40),D("#2b1a0e",.6),24.6,1.75,dt.minZ+.07,i,o).rotation.x=Math.PI/2,t(e(1,.012,.05),Ie("#ffd34d",1.2),24.6,.012,dt.minZ+2.4,i,o);let _=D("#169a63",.95),g=D("#6b3f22",.45),d=D("#0f6b45",.85),M=D("#0b0b0b",.9),x=D("#c9b06b",.35,{metalness:.5}),v=new Pt(.032,14,10);r.poolTables=Kg.map((P,W)=>{let{w:z,l:nt}=vs;t(e(z+.36,.16,nt+.36,.06),g,P.x,.74,P.z),t(e(z+.08,.05,nt+.08,.02),d,P.x,.83,P.z,i,o),t(e(z,.02,nt),_,P.x,.85,P.z,i,o),t(e(z+.1,.42,nt-.2,.05),g,P.x,.45,P.z);for(let[ct,bt]of[[-1,-1],[1,-1],[-1,1],[1,1]])t(e(.16,.66,.16,.04),g,P.x+ct*(z/2+.06),.33,P.z+bt*(nt/2+.06));for(let[ct,bt]of[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]])t(new Q(.06,.06,.03,16),M,P.x+ct*(z/2+.01),.855,P.z+bt*(nt/2+.01),i,o),t(new Q(.075,.075,.02,16),x,P.x+ct*(z/2+.03),.825,P.z+bt*(nt/2+.03),i,o);t(e(.42,.12,1.9,.04),D("#1d2b4f",.5),P.x,2.45,P.z,i,o),t(e(.34,.02,1.8),Ie("#fff1d6",1.5),P.x,2.38,P.z,i,o);for(let ct of[-.6,.6])t(new Q(.008,.008,.9,6),D("#7c818d"),P.x,2.95,P.z+ct,i,o);fn(i,P.x,P.z,1.7,"#fff1d6",.32),n(P.x-z/2-.2,P.z-nt/2-.2,P.x+z/2+.2,P.z+nt/2+.2);let $=new as(v,new se({roughness:.2}),16);$.castShadow=!1,$.receiveShadow=!1,xy.forEach((ct,bt)=>$.setColorAt(bt,new $t(ct))),i.add($);let J=new q(new St(z+.4,1,nt+.4),new ee({visible:!1}));J.position.set(P.x,.5,P.z),J.userData.poolTable=W,i.add(J);let ot=new q(new ie(.34,.1),new ee({map:Ue(256,76,(ct,bt,It)=>{ct.fillStyle="#f3e3c3",ct.fillRect(0,0,bt,It),ct.fillStyle="#3a2412",ct.font="900 46px Nunito, sans-serif",ct.textAlign="center",ct.textBaseline="middle",ct.fillText(`B\xC0N ${W+1}`,bt/2,It/2+2)})}));return ot.position.set(P.x,.74,P.z+nt/2+.185),i.add(ot),{...P,index:W,balls:$,hit:J,spots:[{x:P.x,z:P.z-nt/2-.55,face:0},{x:P.x,z:P.z+nt/2+.55,face:Math.PI}]}});let R=17.2,S=3.4;t(e(1.3,.22,.8,.05),D("#2f8cf0",.5),R,.82,S),t(e(1.12,.02,.64),D("#169a63",.9),R,.93,S,i,o),t(e(1,.7,.6,.05),D("#1d2b4f",.5),R,.36,S);for(let P=0;P<6;P++){let W=R-.48+P*.19;t(new Q(.012,.012,1.15,6),D("#c2cad6",.25,{metalness:.7}),W,.98,S,i,o).rotation.x=Math.PI/2;for(let z of[-1,1])t(new Q(.035,.035,.07,10),D(P%2?"#ff5a5f":"#ffd34d",.4),W,.98,S+z*.66,i,o).rotation.x=Math.PI/2;for(let z=0;z<2;z++)t(e(.03,.08,.03),D(P%2?"#ff5a5f":"#ffd34d",.4),W,.95,S-.15+z*.3,i,o)}n(R-.7,S-.75,R+.7,S+.75),t(e(2.2,.45,.5,.05),D("#2b2b40",.5),22.4,.225,1),t(e(2.4,1.36,.08,.03),D("#16161c",.35),22.4,1.25,1.05);let b=new q(new ie(2.26,1.22),new ee({map:rf(9),toneMapped:!1}));b.position.set(22.4,1.25,1.095),i.add(b),n(21.2,.6,23.6,1.4);let I=D("#7c5cff",.85),U=D("#ffd34d",.8),y=new Bt;y.position.set(22.4,0,4),y.rotation.y=Math.PI,i.add(y),t(e(2.5,.32,.9,.08),I,0,.27,0,y),t(e(2.3,.14,.78,.07),I,0,.47,.04,y),t(e(2.5,.7,.24,.1),I,0,.62,-.34,y);for(let P of[-1,1])t(e(.22,.52,.9,.09),I,P*1.24,.42,0,y);for(let P of[-.7,.7])t(e(.34,.32,.12,.06),U,P,.68,-.2,y).rotation.x=-.2;for(let P=-1;P<=1;P++)s(`gs${P+2}`,22.4-P*.75,4.05,Math.PI,.47,{x:22.4-P*.75,z:3.2});n(21.1,3.5,23.7,4.5),t(new Q(.42,.42,.04,28),D("#fbf7f0",.4),22.4,.42,2.55),t(new Q(.06,.09,.4,10),D("#3a3a44",.4),22.4,.2,2.55),t(e(.18,.04,.1,.02),D("#1a1a1a",.4),22.3,.46,2.5,i,o),t(e(.18,.04,.1,.02),D("#f5f5f5",.4),22.55,.46,2.62,i,o),n(21.95,2.1,22.85,3);let E=[D("#ff9a6b",.95),D("#45d2b4",.95)];[[20.3,2.6,Math.PI*.82],[24.5,2.6,-Math.PI*.82]].forEach(([P,W,z],nt)=>{t(new Pt(.44,18,12),E[nt],P,.26,W).scale.set(1,.6,1);let J=t(new Pt(.3,14,10),E[nt],P-Math.sin(z)*.26,.48,W-Math.cos(z)*.26);J.scale.set(1.1,.9,.7),J.rotation.y=z,s(`gb${nt+1}`,P,W,z,.36,{x:P+Math.sin(z)*.8,z:W+Math.cos(z)*.8})});let H=17.6,F=7.2;t(e(2.3,.05,1.28,.02),D("#1f5fd1",.6),H,.76,F),t(e(2.3,.006,.02),D("#ffffff",.6),H,.788,F,i,o),t(e(.02,.006,1.26),D("#ffffff",.6),H-1.14,.788,F,i,o),t(e(.02,.006,1.26),D("#ffffff",.6),H+1.14,.788,F,i,o),t(e(.02,.16,1.4),D("#f6f3ee",.8),H,.86,F,i,o);for(let[P,W]of[[-.95,-.5],[.95,-.5],[-.95,.5],[.95,.5]])t(e(.06,.74,.06),D("#3a3a44",.4),H+P,.37,F+W,i,o);t(e(.16,.02,.15,.01),D("#d8262e",.6),H-.6,.8,F+.3,i,o),t(new Pt(.02,8,6),D("#ffffff",.4),H+.4,.82,F-.2,i,o),n(H-1.2,F-.7,H+1.2,F+.7),[[23.3,"#ff7aa8"],[24.5,"#4aa8ff"]].forEach(([P,W])=>{t(e(1,.85,.9,.05),D(W,.5),P,.425,8.5),t(e(.96,.95,.86),new se({color:"#dff1ff",roughness:.05,transparent:!0,opacity:.35}),P,1.33,8.5,i,o),t(e(1.02,.22,.92,.05),D(W,.5),P,1.91,8.5,i,o),t(e(.8,.1,.02),Ie("#fff1d6",1.4),P,1.91,8.97,i,o);let z=tn(Math.round(P*10));for(let nt=0;nt<9;nt++)t(new Pt(.1,10,8),D(["#ffd34d","#ff9ccf","#9fd0ff","#b6f5d8","#c3a6ff"][nt%5],.8),P-.3+nt%3*.3+z()*.05,.95+Math.floor(nt/3)*.05,8.3+z()*.3,i,o);t(e(.04,.3,.04),D("#c2cad6",.3,{metalness:.6}),P+.1,1.6,8.5,i,o),n(P-.55,8,P+.55,9)}),t(e(.95,1.95,.75,.05),D("#e1262d",.45),21.8,.975,8.6),t(e(.6,1.3,.02),Ie("#d9f1ff",.9),21.68,1.15,8.98,i,o);for(let P=0;P<4;P++)for(let W=0;W<4;W++)t(new Q(.035,.035,.13,10),D(["#ffd34d","#45d2b4","#ff9ccf","#4aa8ff"][W],.4),21.48+W*.13,.65+P*.3,8.95,i,o);t(e(.18,.5,.02),D("#2b2b33",.4),22.13,1.2,8.98,i,o),n(21.3,8.2,22.3,9);for(let P=.8;P<=6.2;P+=1.8){t(e(.5,.45,1.5,.06),D("#e3d5bf",.8),14.3,.225,P);for(let W=0;W<3;W++)t(new Je(.22,1),D(W%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),14.3+(W-1)*.04,.6,P-.45+W*.45);n(14,P-.8,14.6,P+.8)}}function vy(){let i=tn(55),t=Ue(1024,512,(e,n,s)=>{for(let o=0;o<s;o+=48){let a=-Math.floor(i()*300);for(;a<n;){let l=300+Math.floor(i()*300),c=i();e.fillStyle=`rgb(${Math.round(196+c*16)},${Math.round(150+c*14)},${Math.round(104+c*12)})`,e.fillRect(a,o,l,48),e.strokeStyle="rgba(120,80,45,.12)",e.lineWidth=1.2;for(let f=0;f<3;f++){let h=o+8+i()*32;e.beginPath(),e.moveTo(a,h);for(let u=a;u<a+l;u+=40)e.lineTo(u,h+Math.sin(u*.02+f)*2);e.stroke()}e.fillStyle="rgba(90,60,30,.35)",e.fillRect(a,o,3,48),a+=l}e.fillStyle="rgba(90,60,30,.4)",e.fillRect(0,o,n,3)}});return t.wrapS=t.wrapT=wn,t}function My(){return Ue(1024,192,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#0a5cc2"),n.addColorStop(1,"#0a78f0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.font='900 86px "Nunito", "Segoe UI", sans-serif',i.fillText("V\u0102N PH\xD2NG AI",t/2,e/2-12),i.font='800 36px "Nunito", "Segoe UI", sans-serif',i.fillStyle="#ffd34d",i.fillText("SIMI \xB7 BAR \xB7 GAME \xB7 CINEMA",t/2,e/2+56)})}function Ey({scene:i,add:t,box:e,block:n,seat:s,out:r,glassM:o,tableTop:a}){let l={cast:!1},c=dt.inZ,f=dt.maxZ,h=dt.minX,u=dt.maxX,m=vy();m.repeat.set((u-h)/10,(f-c)/5);let p=new q(new ie(u-h,f-c),new se({map:m,roughness:.85}));p.rotation.x=-Math.PI/2,p.position.set((h+u)/2,.001,(c+f)/2),p.receiveShadow=!0,i.add(p),r.deck=p,t(e(u-h,.03,.24,.01),D("#d8d2c6",.8),(h+u)/2,.015,c,i,l);let _=D("#4f9d5d",.9),g=D("#5fb36f",.9,{flatShading:!0}),d=(J,ot,ct,bt)=>{let It=Math.abs(ct-J)||.5,et=Math.abs(bt-ot)||.5;t(e(It,.7,et,.18),_,(J+ct)/2,.35,(ot+bt)/2);let ht=Math.max(2,Math.round(Math.max(It,et)/.7));for(let xt=0;xt<ht;xt++){let yt=(xt+.5)/ht;t(new Je(.3,1),g,J+(ct-J)*yt,.72,ot+(bt-ot)*yt,i).scale.set(1,.6,1)}n(Math.min(J,ct)-.25,Math.min(ot,bt)-.25,Math.max(J,ct)+.25,Math.max(ot,bt)+.25)};d(h+.3,c+.6,h+.3,f-.35),d(u-.3,c+.6,u-.3,f-.35),d(h+.6,f-.35,10,f-.35),d(15,f-.35,u-.6,f-.35);let M=[D("#ff7aa8",.7),D("#ffd34d",.7),D("#ffffff",.7),D("#c3a6ff",.7)],x=tn(91);for(let[J,ot]of[[h+1.2,9.4],[15.6,u-1.2]])for(let ct=J;ct<ot;ct+=.55)t(new Pt(.07,8,6),M[Math.floor(x()*4)],ct+x()*.2,.12,f-.95+x()*.15,i,l);let v=12.5,R=f-.35;for(let J of[-2.2,2.2])t(e(.32,3,.32,.05),D("#ffffff",.5),v+J,1.5,R),t(e(.5,.18,.5,.04),D("#d8d2c6",.7),v+J,.09,R),n(v+J-.25,R-.25,v+J+.25,R+.25);t(e(4.9,.7,.24,.06),D("#0a5cc2",.5),v,3.1,R);let S=new q(new ie(4.6,.62),new ee({map:My(),toneMapped:!1}));S.position.set(v,3.1,R+.125),i.add(S);let b=new q(new ie(2.6,1.3),new se({map:Ue(512,256,(J,ot,ct)=>{J.fillStyle="#0a5cc2",J.fillRect(0,0,ot,ct),J.strokeStyle="#ffd34d",J.lineWidth=10,J.strokeRect(14,14,ot-28,ct-28),J.fillStyle="#fff",J.font="900 64px Nunito, sans-serif",J.textAlign="center",J.textBaseline="middle",J.fillText("XIN CH\xC0O",ot/2,ct/2+4)}),roughness:.95}));b.rotation.x=-Math.PI/2,b.position.set(v,.006,R-1.1),i.add(b);let I=[D("#0a78f0",.7,{side:ye}),D("#ff7a6b",.7,{side:ye}),D("#2fc1a5",.7,{side:ye}),D("#ffd34d",.7,{side:ye})],U=D("#e9eef5",.4,{metalness:.3}),y=D("#f6f3ee",.5);[[-10.4,13.4],[-6,15.4],[-1.6,13.2],[3,15.3]].forEach(([J,ot],ct)=>{t(new Q(.52,.52,.04,28),a,J,.74,ot),t(new Q(.04,.05,.72,10),U,J,.36,ot),t(new Q(.26,.3,.03,20),U,J,.015,ot),t(new Q(.025,.025,2.4,8),y,J,1.2,ot,i,l),t(new qe(1.15,.45,8,1,!0),I[ct],J,2.45,ot),t(new Pt(.05,8,6),y,J,2.7,ot,i,l),t(new Q(.05,.04,.12,12),o,J+.15,.82,ot,i,l),t(new Q(.05,.04,.12,12),o,J-.12,.82,ot+.12,i,l),n(J-.58,ot-.58,J+.58,ot+.58);for(let bt=0;bt<3;bt++){let It=bt/3*Math.PI*2+.5,et=J+Math.sin(It)*.95,ht=ot+Math.cos(It)*.95,xt=new Bt;xt.position.set(et,0,ht),xt.rotation.y=It+Math.PI,i.add(xt),t(new Q(.22,.22,.05,18),U,0,.46,0,xt),t(e(.4,.34,.04,.02),U,0,.7,-.2,xt);for(let[yt,Ut]of[[-.15,-.15],[.15,-.15],[-.15,.15],[.15,.15]])t(new Q(.014,.014,.46,6),U,yt,.23,Ut,xt,l);s(`o${ct+1}${"abc"[bt]}`,et,ht,It+Math.PI,.48,{x:J+Math.sin(It)*1.55,z:ot+Math.cos(It)*1.55})}});let E=20.2,H=13.8;t(new Q(1.5,1.6,.45,40),D("#e7e1d6",.7),E,.225,H),t(new Q(1.32,1.32,.04,40),D("#cfc7b8",.7),E,.44,H,i,l);let F=new q(new Q(1.3,1.3,.02,40),new se({color:"#7cc4ff",roughness:.1,emissive:"#2f8cf0",emissiveIntensity:.35,transparent:!0,opacity:.85}));F.position.set(E,.43,H),i.add(F),t(new Q(.16,.22,.9,16),D("#e7e1d6",.7),E,.9,H),t(new Q(.55,.2,.18,24),D("#e7e1d6",.7),E,1.4,H);let P=new q(new Q(.03,.08,.6,10),new ee({color:"#d6efff",transparent:!0,opacity:.7}));P.position.set(E,1.75,H),i.add(P);let W=[0,1].map(()=>{let J=new q(new Dn(.3,.36,40),new ee({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));return J.rotation.x=-Math.PI/2,J.position.set(E,.47,H),i.add(J),J});r.animated.push(J=>{W.forEach((ot,ct)=>{let bt=(J*.35+ct*.5)%1;ot.scale.setScalar(1+bt*2.6),ot.material.opacity=.45*(1-bt)}),P.scale.y=1+Math.sin(J*6)*.06}),n(E-1.65,H-1.65,E+1.65,H+1.65);let z=D("#d8d2c6",.8);[[E-3,H,Math.PI/2],[E+3,H,-Math.PI/2],[E,H-3,0]].forEach(([J,ot,ct],bt)=>{let It=new Bt;It.position.set(J,0,ot),It.rotation.y=ct,i.add(It),t(e(1.7,.1,.5,.04),D("#b8875a",.6),0,.46,0,It),t(e(1.7,.4,.07,.03),D("#b8875a",.6),0,.72,-.24,It);for(let xt of[-.65,.65])t(e(.14,.42,.44,.03),z,xt,.21,0,It);let et=Math.cos(ct),ht=Math.sin(ct);for(let xt of[-.42,.42])s(`fb${bt+1}${xt<0?"a":"b"}`,J+xt*et,ot-xt*ht,ct,.5,{x:J+xt*et+ht*.7,z:ot-xt*ht+et*.7});n(J-.9*Math.abs(et)-.3*Math.abs(ht),ot-.9*Math.abs(ht)-.3*Math.abs(et),J+.9*Math.abs(et)+.3*Math.abs(ht),ot+.9*Math.abs(ht)+.3*Math.abs(et))});let nt=D("#8a5a3b",.8),$=[D("#4f9d5d",.85,{flatShading:!0}),D("#5fb36f",.85,{flatShading:!0}),D("#3f8a4f",.85,{flatShading:!0})];[[-12.4,16.4],[25,16.4],[24.9,11.2],[7.3,16.6]].forEach(([J,ot],ct)=>{t(new Q(.12,.18,1.8,10),nt,J,.9,ot);let bt=tn(140+ct);for(let It=0;It<6;It++)t(new Je(1,1),$[It%3],J+(bt()-.5)*.9,2.1+bt()*.8,ot+(bt()-.5)*.9).scale.setScalar(.45+bt()*.25);n(J-.3,ot-.3,J+.3,ot+.3)});for(let[J,ot]of[[-8,17],[-.5,11.4],[5.6,11.4],[17,17],[23.2,11.4],[-12.6,11.2]])t(new Q(.14,.18,.12,14),D("#2b2b33",.4),J,.06,ot),t(new Q(.035,.035,2.1,8),D("#2b2b33",.4),J,1.1,ot),t(new Pt(.17,14,10),Ie("#fff1d0",1.6),J,2.25,ot,i,l),fn(i,J,ot,1.4,"#ffe3b0",.22),n(J-.18,ot-.18,J+.18,ot+.18)}var wy=[.37,1.9,4.3,9.7,23.1];function Sy(i,t){let e=new Set,n=new Set,s=(r,o)=>{if(!(!r||typeof r!="object"||n.has(r)||o>4)){if(n.add(r),r.isObject3D){r.traverse(a=>e.add(a));return}if(!(r.isMaterial||r.isTexture||r.isBufferGeometry))for(let a of Object.keys(r))a!=="animated"&&s(r[a],o+1)}};for(let r of t||Object.keys(i))r!=="animated"&&s(i[r],1);return e}var by=i=>[i.visible,i.opacity,i.color&&i.color.getHex(),i.emissive&&i.emissive.getHex(),i.emissiveIntensity,i.map&&i.map.offset.x,i.map&&i.map.offset.y,i.map&&i.map.rotation].join("|");function Ty(i,t){let e=[];i.traverse(l=>{l.isMesh&&e.push(l)});let n=new Set;e.forEach(l=>[].concat(l.material).forEach(c=>n.add(c)));let s=()=>(i.updateMatrixWorld(!0),{m:new Map(e.map(l=>[l,l.matrixWorld.elements.join(",")+"|"+af(l)])),mat:new Map([...n].map(l=>[l,by(l)]))}),r=s(),o=new Set,a=new Set;for(let l of wy){for(let f of t)try{f(l,.016)}catch{}let c=s();for(let f of e)c.m.get(f)!==r.m.get(f)&&o.add(f);for(let f of n)c.mat.get(f)!==r.mat.get(f)&&a.add(f)}return{movers:o,live:a}}function af(i){for(let t=i;t;t=t.parent)if(!t.visible)return 0;return 1}var lf=i=>i.isMeshStandardMaterial&&!i.map&&!i.emissiveMap&&!i.normalMap&&!i.roughnessMap&&!i.alphaMap&&!i.aoMap&&!i.lightMap&&!i.bumpMap&&!i.envMap&&(!i.emissive||i.emissive.getHex()===0||!i.emissiveIntensity)&&!i.vertexColors&&!(i.userData&&Object.keys(i.userData).length);function Ry(i){let t={plain:lf(i)};for(let e of["type","side","flatShading","vertexColors","toneMapped","roughness","metalness","emissiveIntensity","opacity","transparent","alphaTest","depthWrite","wireframe","fog","blending"])t[e]=i[e];for(let e of["emissive","specular"])i[e]&&i[e].getHex&&(t[e]=i[e].getHex());!t.plain&&i.color&&(t.color=i.color.getHex());for(let e of["map","emissiveMap","normalMap","roughnessMap","alphaMap","envMap","lightMap","aoMap","bumpMap"])t[e]=i[e]?i[e].uuid:null;return i.userData&&Object.keys(i.userData).length&&(t.ud=i.uuid),JSON.stringify(t)}function cf(i,t,{keep:e}={}){i.updateMatrixWorld(!0);let n=Sy(t,e),{movers:s,live:r}=Ty(i,t.animated||[]);i.updateMatrixWorld(!0);let o=new Map,a=0,l={},c=p=>{l[p]=(l[p]||0)+1};i.traverse(p=>{if(!p.isMesh)return;if(a++,p.isInstancedMesh||p.isSkinnedMesh)return c("instanced");if(n.has(p))return c("ref");if(s.has(p))return c("moves");if(!af(p))return c("hidden");if(Object.keys(p.userData||{}).length||p.parent&&Object.keys(p.parent.userData||{}).length)return c("userData");if(Array.isArray(p.material))return c("multimat");let _=p.material;if(!_||r.has(_))return c("livemat");if(_.transparent||!_.visible||_.isShaderMaterial)return c("transparent");if(p.onBeforeRender!==De.prototype.onBeforeRender)return c("hook");let g=p.geometry;if(!g||!g.attributes.position||g.morphAttributes&&Object.keys(g.morphAttributes).length)return c("geo");let d=[Ry(_),p.castShadow?1:0,p.receiveShadow?1:0,p.renderOrder].join("|");o.has(d)||o.set(d,{mat:_,plain:lf(_),cast:p.castShadow,recv:p.receiveShadow,order:p.renderOrder,items:[]}),o.get(d).items.push(p)});let f=0,h=0;for(let p of o.values()){if(p.items.length<2)continue;let _=!!p.mat.map,g=p.items.some(R=>!R.geometry.index),d=[];for(let R of p.items){let S=R.geometry;g&&S.index&&(S=S.toNonIndexed());let b=new Re,I=U=>(U.isInterleavedBufferAttribute,U.clone());if(b.setAttribute("position",I(S.attributes.position)),S.attributes.normal&&b.setAttribute("normal",I(S.attributes.normal)),_&&S.attributes.uv&&b.setAttribute("uv",I(S.attributes.uv)),!g&&S.index&&b.setIndex(S.index.clone()),b.attributes.normal||b.computeVertexNormals(),p.plain){let U=R.material.color,y=b.attributes.position.count,E=new Float32Array(y*3);for(let H=0;H<y;H++)E[H*3]=U.r,E[H*3+1]=U.g,E[H*3+2]=U.b;b.setAttribute("color",new ze(E,3))}b.applyMatrix4(R.matrixWorld),d.push(b),S!==R.geometry&&S.dispose()}let M=Mo(d,!1);if(d.forEach(R=>R.dispose()),!M)continue;let x=p.mat;p.plain&&(x=p.mat.clone(),x.color=new $t(1,1,1),x.vertexColors=!0,x.needsUpdate=!0);let v=new q(M,x);v.castShadow=p.cast,v.receiveShadow=p.recv,v.renderOrder=p.order,v.matrixAutoUpdate=!1,v.name="merged",i.add(v);for(let R of p.items)R.parent.remove(R),h++;f++}let u=[];i.traverse(p=>{p!==i&&p.type==="Group"&&!p.children.length&&!n.has(p)&&u.push(p)});for(let p of u)p.parent&&p.parent.remove(p);i.updateMatrixWorld(!0);let m=[...o.values()].map(p=>p.items.length).sort((p,_)=>_-p);return{before:a,removed:h,merged:f,why:l,groups:o.size,sizes:m.slice(0,12)}}var hf=new L,Ay=new Pn,ff=new L,wo=class extends De{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var Un=new ae,Cy=new ae,So=class{constructor(t={}){let e=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:n,height:s}},this.render=function(g,d){let M=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let x,v;d.isOrthographicCamera&&(x=-(d.right+d.left)/2,v=(d.top+d.bottom)/2);let R=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,S=d.isOrthographicCamera?`scale( ${R} )scale(`+M+")translate("+h(x)+"px,"+h(v)+"px)"+u(d.matrixWorldInverse):`scale( ${R} )translateZ(`+M+"px)"+u(d.matrixWorldInverse),I=(d.isPerspectiveCamera?"perspective("+M+"px) ":"")+S+"translate("+r+"px,"+o+"px)";a.camera.style!==I&&(f.style.transform=I,a.camera.style=I),_(g,g,d,S)},this.setSize=function(g,d){n=g,s=d,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=d+"px",c.style.width=g+"px",c.style.height=d+"px",f.style.width=g+"px",f.style.height=d+"px"};function h(g){return Math.abs(g)<1e-10?0:g}function u(g){let d=g.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function m(g){let d=g.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function p(g){g.isCSS3DObject&&(g.element.style.display="none");for(let d=0,M=g.children.length;d<M;d++)p(g.children[d])}function _(g,d,M,x){if(g.visible===!1){p(g);return}if(g.isCSS3DObject){let v=g.layers.test(M.layers)===!0,R=g.element;if(R.style.display=v===!0?"":"none",v===!0){g.onBeforeRender(e,d,M);let S;g.isCSS3DSprite?(Un.copy(M.matrixWorldInverse),Un.transpose(),g.rotation2D!==0&&Un.multiply(Cy.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(hf,Ay,ff),Un.setPosition(hf),Un.scale(ff),Un.elements[3]=0,Un.elements[7]=0,Un.elements[11]=0,Un.elements[15]=1,S=m(Un)):S=m(g.matrixWorld);let b=a.objects.get(g);if(b===void 0||b.style!==S){R.style.transform=S;let I={style:S};a.objects.set(g,I)}R.parentNode!==f&&f.appendChild(R),g.onAfterRender(e,d,M)}}for(let v=0,R=g.children.length;v<R;v++)_(g.children[v],d,M,x)}}};var fe=dt;function ic(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var uf={idle:"\u2615",chat:"\u{1F4AC}",work:"\u{1F3E2}",image:"\u{1F3A8}",video:"\u{1F3AC}",web:"\u{1F50E}",doc:"\u{1F4C4}",away:"\u{1F319}"},Py={"\u{1F44B}":"wave","\u{1F57A}":"dance","\u{1F389}":"cheer","\u{1F64C}":"cheer","\u2615":"drink"},bo={x1:-5.1,x2:1.1,z1:1.9,z2:7.1},Iy=120,Ly={hug:.5,dance:.95,highfive:.62,cheers:.62,coffee:.68},df={highfive:"\u{1F64C}",hug:"\u{1F917}",cheers:"\u{1F942}",coffee:"\u2615",dance:"\u{1F483}"},Ve={x:12.5,z:12.5,face:.32},pf=()=>({x:Ve.x+Math.sin(Ve.face)*2,z:Ve.z+Math.cos(Ve.face)*2}),Dy={id:"npc",name:"Tr\u1EE3 l\xFD SIMI",shirt:"#0a5cc2",pants:"#142c5a",shoes:"#1d1d24",hair:"#2b1d14",hairStyle:"bob",accessory:"headset",accent:"#f5c518",skin:"#f1c9a5",outfit:"blazer",lapel:"#083d80"},sc={x:6,z:4,zoom:.31},rc={npc:{x:Ve.x,z:Ve.z,y:1.1,zoom:1.45},altar:{x:11.8,z:-8.4,y:1.2,zoom:1},fortune:{x:8.75,z:-9.2,y:1,zoom:1.15},bar:{x:3,z:-7.6,y:1,zoom:.95},dance:{x:-2,z:4.5,y:.2,zoom:1.05},cinema:{x:-9.6,z:-9,y:1.9,zoom:.95},game:{x:20.8,z:-4.4,y:.9,zoom:.95},zen:{x:8.4,z:2.2,y:.4,zoom:.92},garden:{x:8,z:14.2,y:.4,zoom:.62}};function ac(i){let t=i.avatar||{},e=0;for(let s of String(i.id||i.name||""))e=e*31+s.charCodeAt(0)>>>0;let n=s=>s[e%s.length];return{id:i.id,name:i.name,hair:t.hair||n(["#2b1d14","#5a3a1e","#1a1a1a","#7a2e2e","#b07a3c","#3b3b46"]),skin:t.skin||n(["#f1c9a5","#e2ae84","#f6d7bd","#ebbf98","#d9a074"]),shirt:t.shirt||n(["#0a78f0","#2fc1a5","#f5b51b","#4a3592","#e1262d","#142c5a","#ff8a3d"]),pants:t.pants,shoes:t.shoes,accent:t.accent,hairStyle:t.hairStyle||n(["short","long","spiky","bun","bob","curly","ponytail"]),accessory:t.accessory||"none",outfit:t.outfit||"none"}}var Uy=2,Ms=()=>Math.min(window.devicePixelRatio||1,Uy);function mf(i){let t=new os({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!t.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");return t.setPixelRatio(Ms()),t.shadowMap.enabled=!0,t.shadowMap.type=ms,t.toneMapping=Ks,t.outputColorSpace=ve,t.setClearColor(0,0),t}var Ny=new ai(.34,24),Hy=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(60,40,20,.42)"),e.addColorStop(.6,"rgba(60,40,20,.18)"),e.addColorStop(1,"rgba(60,40,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ee({map:new rn(i),transparent:!0,depthWrite:!1})})();function gf(i,t=2048,e={x:0,z:0},n={x:17,z:14}){i.add(new fs("#ffffff","#d8c6aa",1.05),new us("#ffffff",.18));let s=new li("#fff0dc",2.1);s.position.set(e.x-6,15,e.z+10),s.target.position.set(e.x,0,e.z),s.castShadow=!0,s.shadow.mapSize.set(t,t),Object.assign(s.shadow.camera,{left:-n.x,right:n.x,top:n.z,bottom:-n.z,near:1,far:50}),s.shadow.bias=-5e-4,s.shadow.normalBias=.03,s.shadow.radius=2.5;let r=new li("#dbe8ff",.5);r.position.set(9,7,-3),i.add(s,s.target,r)}var or=class{constructor(t,e={}){this.root=t,this.opts=e,this.people=new Map,this.bubbles=new Set,this.emotes=new Set,this.keys=new Set,this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas",n.tabIndex=0,this.renderer=mf(n),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.cssBox=document.createElement("div"),this.cssBox.className="office3d-css",n.style.position="relative",n.style.zIndex="1",this.layer.style.zIndex="2",this.wrap.append(this.cssBox,n,this.layer),t.appendChild(this.wrap),this.canvas=n,this.scene=new oi,gf(this.scene,2048,{x:(fe.minX+fe.maxX)/2,z:(fe.minZ+fe.maxZ)/2},{x:(fe.maxX-fe.minX)/2+3,z:(fe.maxZ-fe.minZ)/2+4}),this.world=of(this.scene),this.pool=(this.world.poolTables||[]).map(o=>({...o,state:null,anim:null})),this.games=new Map,this.seats=new Map(this.world.seats.map(o=>[o.id,o])),this.follow=!0,this.cam=new ri(-10,10,6,-6,.1,100),this.view={az:.72,el:.7,zoom:.85,target:new L(0,.6,.6)},this.goal={az:.72,el:.7,zoom:.85},this.perf={acc:0,n:0,dpr:Ms(),slow:0,fast:0,ceil:Ms(),min:1},this.nav=new xs(fe.minX,fe.minZ,fe.maxX,fe.maxZ,.2),this.nav.blockRect(fe.minX,fe.minZ,fe.maxX,fe.minZ+.25,.15),this.nav.blockRect(fe.minX,fe.minZ,fe.minX+.25,fe.maxZ,.15),this.nav.blockRect(fe.maxX-.2,fe.minZ,fe.maxX,fe.maxZ,.15),this.nav.blockRect(fe.minX,fe.maxZ-.2,fe.maxX,fe.maxZ,.15);for(let o of this.world.obstacles)this.nav.blockRect(...o);if(!e.noMerge&&!window.VP_NO_MERGE)try{this.mergeStats=cf(this.scene,this.world,{keep:["cinema","clickables","poolTables","seatMeshes","seats"]})}catch(o){this.mergeStats={error:String(o&&o.message||o)}}this.buildNpcDesk();for(let o of this.pool)this.setTableBalls(o,null);this.cat=new _s(this.scene,this.nav),this.cat.onFx=o=>this.fx(null,o),this.setNpc(null),this.skew=0,this.light=!1,this.capFps=!1,this.lastInput=performance.now(),this.raycaster=new ps,this.ndc=new Mt,this.tmpV=new L,this.floorPlane=new vn(new L(0,1,0),0),this.marker=new q(new Dn(.16,.24,28),new ee({color:"#0a78f0",transparent:!0,opacity:0})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.02,this.scene.add(this.marker);let s=pf();this.npcRing=new Bt,this.npcRing.position.set(s.x,.025,s.z);for(let[o,a,l]of[[.55,.7,.85],[.95,1.02,.45]]){let c=new q(new Dn(o,a,48),new ee({color:"#f5c518",transparent:!0,opacity:l,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.userData.o=l,this.npcRing.add(c)}this.scene.add(this.npcRing),this.stick={x:0,y:0},this.bindInput(),e.mobile&&(this.renderer.shadowMap.enabled=!1,this.perf.noShadow=!0,this.perf.min=1.25,this.goal.zoom=this.view.zoom=.7),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new ds;let r=o=>{this.dead||(this.raf=requestAnimationFrame(r),!this.paused&&(this.slowMode()&&o-(this.lastTs||0)<31||(this.lastTs=o,this.frame())))};r()}slowMode(){return this.capFps||this.light||this.opts.mobile&&performance.now()-(this.lastInput||0)>4e4}poke(){this.lastInput=performance.now()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;Object.assign(this.cam,{left:-c*l/2,right:c*l/2,top:c/2,bottom:-c/2}),this.cam.updateProjectionMatrix()}lookAt(t){let e=rc[t];return e?(this.follow=!1,this.panTo=new L(e.x,.6,e.z),Object.assign(this.goal,{zoom:e.zoom,az:.72,el:.7}),!0):!1}placeScreen(t){let e=rc[t];if(!e)return null;let n=this.project(this.tmpV.set(e.x,e.y,e.z)),s=this.canvas.getBoundingClientRect();return{x:s.left+n.x,y:s.top+n.y,r:Math.max(70,Math.min(170,110*this.view.zoom))}}resetView(){Object.assign(this.goal,{az:.72,el:.7,zoom:.85}),this.follow=!0}overview(){this.follow=!1,this.goal.zoom=sc.zoom,this.goal.el=.82,this.panTo=new L(sc.x,.6,sc.z)}focusSelf(){this.follow=!0,this.goal.zoom=.85,this.panTo=null}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.cssW=e,this.cssH=n,this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.cssRenderer&&this.cssRenderer.setSize(e,n),this.updateCamera()}setCinemaFrame(t){let e=this.world.cinema;if(e){if(this.cinemaObj&&(this.cssScene.remove(this.cinemaObj),this.cinemaObj.element.remove(),this.cinemaObj=null),t){this.cssRenderer||(this.cssRenderer=new So({element:this.cssBox}),this.cssScene=new oi,this.cssRenderer.setSize(this.cssW||800,this.cssH||500));let n=1280;t.style.width=n+"px",t.style.height=Math.round(n*e.h/e.w)+"px";let s=new wo(t);s.position.set(e.x,e.y,e.z),s.scale.setScalar(e.w/n),this.cssScene.add(s),this.cinemaObj=s}e.idle.visible=!t,e.hole.visible=!!t}}viewScreen(t=0){let e=this.world.cinema;if(!e)return;let n=1.25,s=this.cssW||800,r=this.cssH||500,o=Math.max(8.4,15.6/(s/r))/n/r;this.follow=!1,this.panTo=new L(e.x-t*o,.6,e.z+3.2),Object.assign(this.goal,{az:.05,el:.32,zoom:n})}ray(t,e){let n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam),this.raycaster}pickPerson(t,e){let n=this.ray(t,e),s=null;for(let r of this.people.values()){let o=n.intersectObject(r.person.root,!0)[0];o&&(!s||o.distance<s.d)&&(s={p:r,d:o.distance})}return s&&s.p}pickNpc(t,e){return!!this.npc&&this.ray(t,e).intersectObjects([this.npc.person.root,this.npcDesk],!0).length>0}pickCat(t,e){return this.ray(t,e).intersectObject(this.cat.root,!0).length>0}pickTable(t,e){if(!this.pool.length)return-1;let n=this.ray(t,e).intersectObjects(this.pool.map(s=>s.hit),!1)[0];return n?n.object.userData.poolTable:-1}pickAction(t,e){let n=this.world.clickables||[];if(!n.length)return null;let s=this.ray(t,e).intersectObjects(n,!1)[0];return s?s.object.userData.action:null}pickSeat(t,e){let n=this.ray(t,e).intersectObjects(this.world.seatMeshes,!1)[0];return n?this.seats.get(n.object.userData.seatId):null}seatTaken(t,e){return[...this.people.values()].some(n=>n.m.id!==e&&(n.seat===t||n.pendingSeat===t))}pickFloor(t,e){let n=new L;return this.ray(t,e).ray.intersectPlane(this.floorPlane,n)?n:null}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",c=>c.preventDefault());let n=new Map,s=null,r=()=>{let[c,f]=[...n.values()];return Math.hypot(c.x-f.x,c.y-f.y)||1};t.addEventListener("pointerdown",c=>{if(this.poke(),t.focus(),t.setPointerCapture(c.pointerId),n.set(c.pointerId,{x:c.clientX,y:c.clientY}),n.size===2){s={d:r(),zoom:this.goal.zoom},e&&(e.moved=!0);return}e={x:c.clientX,y:c.clientY,az:this.goal.az,el:this.goal.el,moved:!1}});let o=c=>{n.delete(c.pointerId),n.size<2&&(s=null)};t.addEventListener("pointercancel",c=>{o(c),e=null});let a=0,l=0;t.addEventListener("pointermove",c=>{if(n.has(c.pointerId)&&n.set(c.pointerId,{x:c.clientX,y:c.clientY}),s&&n.size>=2){this.goal.zoom=Math.max(.28,Math.min(2.6,s.zoom*r()/s.d));return}if(e){let m=c.clientX-e.x,p=c.clientY-e.y;Math.hypot(m,p)>5&&(e.moved=!0),e.moved&&(this.goal.az=Math.max(.05,Math.min(1.52,e.az-m*.005)),this.goal.el=Math.max(.34,Math.min(1.28,e.el+p*.0035)),t.style.cursor="grabbing");return}let f=c.clientX,h=c.clientY,u=()=>{a=performance.now(),t.style.cursor=this.pickPerson(f,h)||this.pickNpc(f,h)||this.pickCat(f,h)||this.pickTable(f,h)>=0||this.pickAction(f,h)||this.pickSeat(f,h)?"pointer":"crosshair"};clearTimeout(l),performance.now()-a>80?u():l=setTimeout(u,90)}),t.addEventListener("pointerup",c=>{if(o(c),e&&!e.moved){let f=this.pickPerson(c.clientX,c.clientY),h=!f&&this.pickNpc(c.clientX,c.clientY),u=!f&&!h&&this.pickCat(c.clientX,c.clientY),m=!f&&!h&&!u?this.pickTable(c.clientX,c.clientY):-1,p=!f&&!h&&!u&&m<0?this.pickAction(c.clientX,c.clientY):null,_=!f&&!u&&!h&&m<0&&!p&&this.pickSeat(c.clientX,c.clientY);if(p==="fortune")this.walkSelf(rr.x,rr.z+.9,!0),this.opts.onFortune&&this.opts.onFortune();else if(p==="honor")this.walkSelf(nc.x,dt.minZ+1.4,!0),this.opts.onHonor&&this.opts.onHonor();else if(h)this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(c.clientX,c.clientY);else if(m>=0)this.opts.onTableClick&&this.opts.onTableClick(m,c.clientX,c.clientY);else if(u)this.opts.onCatClick&&this.opts.onCatClick(c.clientX,c.clientY);else if(f&&!f.me)this.opts.onPersonClick&&this.opts.onPersonClick(f.m.id,c.clientX,c.clientY);else if(f&&f.me)this.opts.onSelfClick&&this.opts.onSelfClick(c.clientX,c.clientY);else if(_)this.sitSelf(_.id);else{let g=this.pickFloor(c.clientX,c.clientY);g&&this.walkSelf(g.x,g.z,!0)}}e=null,t.style.cursor="crosshair"}),t.addEventListener("wheel",c=>{c.preventDefault(),this.goal.zoom=Math.max(.28,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,c.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dblclick",c=>{this.pickPerson(c.clientX,c.clientY)||this.resetView()}),t.addEventListener("keydown",c=>{let f=c.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(f)&&(this.keys.add(f),c.preventDefault())}),t.addEventListener("keyup",c=>this.keys.delete(c.key.toLowerCase())),t.addEventListener("blur",()=>this.keys.clear())}setMembers(t){let e=new Set;t.forEach((n,s)=>{e.add(n.id);let r=this.people.get(n.id),o=ac(n),a=JSON.stringify(o);if(r&&r.sig!==a&&(this.scene.remove(r.person.root),r.person=this.makePerson(o,s,r.pos,r.facing),r.person.dance=r.dance||null,r.sig=a),!r){let l=this.freeSpot(n.pos?n.pos.x:s%5*1.4-3,n.pos?n.pos.z:1+Math.floor(s/5));r={m:n,me:!!n.me,pos:l,path:[],facing:Math.random()*6,sig:a,speed:1.9,seat:null,pendingSeat:null},r.person=this.makePerson(o,s,r.pos,r.facing),this.makePlate(r),this.people.set(n.id,r);let c=n.pos&&n.pos.seat&&this.seats.get(n.pos.seat);c&&!this.seatTaken(c.id,n.id)&&this.sitNow(r,c)}r.m=n,r.me=!!n.me,!r.me&&(n.dance||null)!==(r.dance||null)&&!r.meet&&this.setDance(n.id,n.dance||null),this.updatePlate(r)});for(let[n,s]of[...this.people])e.has(n)||this.removePerson(n,s)}makePerson(t,e,n,s){let r=new Ri(t,e);return r.root.userData.character=!0,r.root.position.set(n.x,0,n.z),r.root.rotation.y=s||0,r.root.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),r.blob=new q(Ny,Hy),r.blob.rotation.x=-Math.PI/2,r.blob.renderOrder=1,r.root.add(r.blob),this.scene.add(r.root),r}removePerson(t,e){this.scene.remove(e.person.root),e.plate.remove(),this.people.delete(t);for(let n of[...this.bubbles])n._p===e&&(n.remove(),this.bubbles.delete(n))}freeSpot(t,e){let n=this.nav.toCell(Math.max(fe.minX+.6,Math.min(fe.maxX-.6,t)),Math.max(fe.minZ+.6,Math.min(fe.maxZ-.6,e))),s=this.nav.nearestFree(n.c,n.r);return this.nav.center(s.c,s.r)}makePlate(t){let e=document.createElement("div");e.className="plate3d lobby"+(t.me?" me":""),e.innerHTML='<span class="pl-bubble" hidden></span><span class="pl-row"><span class="pl-badge"></span><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title"></span></span>',e.addEventListener("click",n=>{let s=e.getBoundingClientRect();t.me?this.opts.onSelfClick&&this.opts.onSelfClick(s.left+s.width/2,s.bottom):this.opts.onPersonClick&&this.opts.onPersonClick(t.m.id,s.left+s.width/2,s.bottom),n.stopPropagation()}),this.layer.append(e),t.plate=e}updatePlate(t){let e=t.m,n=e.status||{};t.plate.querySelector(".pl-name").textContent=(t.me?"\u2B50 ":"")+e.name,t.plate.querySelector(".pl-title").textContent=t.game?"\u{1F3B1} \u0110ang ch\u01A1i bida":t.dance?"\u{1F483} \u0110ang nh\u1EA3y":n.text?new RegExp("^\\p{Extended_Pictographic}","u").test(n.text)?n.text:`${uf[n.activity]||"\u2615"} ${n.text}`:`${uf[n.activity]||"\u2615"} ${e.teamName||""}`.trim(),t.plate.classList.toggle("dancing",!!t.dance),t.plate.classList.toggle("busy",!!n.activity&&!["idle","away"].includes(n.activity)),t.busy=!!n.activity&&!["idle","away"].includes(n.activity);let s=t.plate.querySelector(".pl-bubble");if(s){let a=t.busy&&!t.game&&!t.dance&&n.task?String(n.task):"";s.dataset.t!==a&&(s.dataset.t=a,s.textContent=a,s.hidden=!a)}let r=this.honorBadges&&this.honorBadges.get(e.id),o=t.plate.querySelector(".pl-badge");o&&(o.textContent=r?r.icons:"",o.hidden=!r),t.plate.title=`${e.name} \xB7 ${e.teamName||""}${e.role?" \xB7 "+e.role:""}${r?" \xB7 "+r.titles:""}`}standUp(t){t.seat=null,t.pendingSeat=null,t.sitting=!1,t.seatKind=null,t.person&&(t.person.bowPh=0)}stopMoves(t){t.meet=null,t.dance&&(t.dance=null,t.person.dance=null,this.updatePlate(t),t.me&&this.opts.onDance&&this.opts.onDance(null,!0))}sitNow(t,e){t.path=[],t.pos={x:e.x,z:e.z},t.facing=e.face,t.seat=e.id,t.pendingSeat=null,t.sitting=!0,t.seatH=e.h,t.seatKind=e.kind||null,e.kind==="zen"&&(t.zenFx=performance.now()/1e3+2+Math.random()*3,t.me&&this.opts.onToast&&this.opts.onToast("\u{1F9D8} H\xEDt v\xE0o th\u1EADt ch\u1EADm\u2026 th\u1EDF ra nh\u1EB9 nh\xE0ng. B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.")),e.kind==="kneel"&&(t.zenFx=performance.now()/1e3+1.5+Math.random()*2,t.seatTheme=e.theme||null,t.me&&this.opts.onToast&&this.opts.onToast(e.theme==="thantai"?"\u{1F4B0} Th\u1EA7n T\xE0i ph\xF9 h\u1ED9: kh\xE1ch v\xE0o nh\u01B0 n\u01B0\u1EDBc, ch\u1ED1t \u0111\u01A1n \u1EA7m \u1EA7m, doanh s\u1ED1 x10! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.":"\u{1F64F} Th\xE0nh t\xE2m kh\u1EA5n: c\u1EA7u kh\xF4ng bug, token \u0111\u1EA7y kho, deadline l\xF9i! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy."),t.me&&this.opts.onPray&&this.opts.onPray(e.theme||null))}walk(t,e,n){this.standUp(t),this.stopMoves(t);let s=this.freeSpot(e,n);return t.path=this.nav.find({x:t.pos.x,z:t.pos.z},s),this.pace(t),s}pace(t){let e=0,n=t.pos;for(let s of t.path)e+=Math.hypot(s.x-n.x,s.z-n.z),n=s;return t.speed=e>9?3.4:1.9,e}walkToSeat(t,e){this.standUp(t),this.stopMoves(t),t.pendingSeat=e.id,t.path=[...this.nav.find({x:t.pos.x,z:t.pos.z},this.freeSpot(e.approach.x,e.approach.z)),{x:e.x,z:e.z}],this.pace(t)}moveMember(t,e,n,s){let r=this.people.get(t);if(!r||r.me)return;let o=s&&this.seats.get(s);o?this.walkToSeat(r,o):this.walk(r,e,n)}walkSelf(t,e,n){let s=this.self();if(!s)return;let r=this.walk(s,t,e);n&&(this.marker.position.set(r.x,.02,r.z),this.marker.material.opacity=.9),this.follow=!0,this.opts.onMove&&this.opts.onMove({x:r.x,z:r.z,seat:null})}sitSelf(t){let e=this.self(),n=this.seats.get(t);if(!(!e||!n)&&e.seat!==t){if(this.seatTaken(t,e.m.id)){this.opts.onToast&&this.opts.onToast("Gh\u1EBF n\xE0y c\xF3 ng\u01B0\u1EDDi ng\u1ED3i r\u1ED3i \u{1F605}");return}this.walkToSeat(e,n),this.marker.position.set(n.x,.02,n.z),this.marker.material.opacity=.9,this.follow=!0,this.opts.onMove&&this.opts.onMove({x:n.x,z:n.z,seat:t})}}self(){return[...this.people.values()].find(t=>t.me)}selfPos(){let t=this.self();return t?{...t.pos,seat:t.seat}:null}say(t,e,n=5200){let s=t==="npc"?this.npc:this.people.get(t);if(!s)return;for(let o of[...this.bubbles])o._p===s&&(o.remove(),this.bubbles.delete(o));let r=document.createElement("div");r.className="bubble3d k-chat",r.style.zIndex="5000",r.textContent=e.length>110?e.slice(0,109)+"\u2026":e,r._p=s,this.layer.appendChild(r),this.bubbles.add(r),s.person.say(Math.min(n,2400)),requestAnimationFrame(()=>r.classList.add("show")),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(r),r.remove()},220)},n)}emote(t,e){let n=this.people.get(t);if(!n)return;let s=Py[e]||(/❤|💖|😍|🥰/.test(e)?"wave":"cheer");n.person.doAction(s,s==="dance"?2600:1800),s==="dance"&&(n.danceUntil=performance.now()/1e3+2.6);let r=document.createElement("div");r.className="emote",r.textContent=e,r._p=n,this.layer.appendChild(r),this.emotes.add(r),setTimeout(()=>{this.emotes.delete(r),r.remove()},1700)}fx(t,e,n=1700){let s=document.createElement("div");s.className="emote",s.textContent=e,s._p=t,s._cat=!t,this.layer.appendChild(s),this.emotes.add(s),setTimeout(()=>{this.emotes.delete(s),s.remove()},n)}buildNpcDesk(){let t=new Bt;t.position.set(Ve.x,0,Ve.z),t.rotation.y=Ve.face;let e=(v,R=.6,S={})=>new se({color:v,roughness:R,...S}),n=[],s=(v,R,S,b,I,U=!0)=>{let y=new q(v,R);return y.position.set(S,b,I),y.castShadow=U,y.receiveShadow=!0,t.add(y),n.push(y),y},r=(v,R,S)=>{let b=new qs,I=24;for(let U=0;U<=I;U++){let y=-S+2*S*U/I,E=[Math.sin(y)*R,-Math.cos(y)*R];U===0?b.moveTo(...E):b.lineTo(...E)}for(let U=I;U>=0;U--){let y=-S+2*S*U/I;b.lineTo(Math.sin(y)*v,-Math.cos(y)*v)}return b},o=(v,R)=>{let S=new ao(v,{depth:R,bevelEnabled:!1,curveSegments:24});return S.rotateX(-Math.PI/2),S};s(o(r(.62,.92,.85),.92),e("#ffffff",.45),0,0,0),s(o(r(.6,.98,.88),.05),e("#c79a6a",.35),0,.92,0),s(o(r(.925,.94,.85),.04),e("#0a78f0",.4,{emissive:"#2f8cf0",emissiveIntensity:1.2}),0,.16,0,!1);let a=document.createElement("canvas");a.width=512,a.height=128;let l=a.getContext("2d");l.fillStyle="#0a5cc2",l.fillRect(0,0,512,128),l.fillStyle="#ffd34d",l.font="900 54px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("L\u1EC4 T\xC2N",256,50),l.fillStyle="#ffffff",l.font="800 28px Nunito, sans-serif",l.fillText("H\u1ECFi Tr\u1EE3 l\xFD SIMI",256,100);let c=new rn(a);c.colorSpace=ve,c.anisotropy=4;let f=new q(new ie(.62,.155),new ee({map:c}));f.position.set(0,.6,.935),t.add(f);let h=s(new St(.42,.28,.03),e("#1d2b4f",.4),-.42,1.18,.62);h.rotation.y=Math.PI+.5,s(new St(.06,.18,.06),e("#c2cad6",.3),-.42,1.03,.64),s(new Q(.06,.07,.02,16),e("#c2cad6",.3,{metalness:.6}),.36,.98,.78,!1),s(new Pt(.05,14,8,0,Math.PI*2,0,Math.PI/2),e("#f5c518",.25,{metalness:.6}),.36,.99,.78,!1),s(new Q(.04,.035,.1,12),e("#0a78f0",.4),.55,1.02,.6,!1),s(new St(2.5,1.85,.1),e("#0a5cc2",.55),0,.925,-.82),s(new St(2.6,.08,.16),e("#ffffff",.5),0,1.89,-.82);let u=document.createElement("canvas");u.width=1024,u.height=720;let m=u.getContext("2d"),p=m.createLinearGradient(0,0,1024,720);p.addColorStop(0,"#0a78f0"),p.addColorStop(1,"#0a4aa8"),m.fillStyle=p,m.fillRect(0,0,1024,720),m.fillStyle="rgba(255,255,255,.08)";for(let v=0;v<7;v++)m.beginPath(),m.arc(120+v*150,640-v%2*60,90,0,7),m.fill();m.fillStyle="#ffd34d",m.beginPath(),m.arc(512,250,150,0,7),m.fill(),m.fillStyle="#0a4aa8",m.font="900 230px Nunito, sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("?",512,262),m.fillStyle="#ffffff",m.font="900 96px Nunito, sans-serif",m.fillText("Tr\u1EE3 l\xFD SIMI",512,500),m.font="800 46px Nunito, sans-serif",m.fillStyle="rgba(255,255,255,.85)",m.fillText("H\u01B0\u1EDBng d\u1EABn \xB7 M\u1EB9o AI \xB7 H\u1ECFi \u0111\xE1p",512,590);let _=new rn(u);_.colorSpace=ve,_.anisotropy=4;let g=new q(new ie(2.36,1.66),new ee({map:_,toneMapped:!1}));g.position.set(0,.94,-.765),t.add(g);for(let v of[-1,1]){s(new Q(.2,.15,.42,16),e("#f6f1e8",.6),v*1.5,.21,-.7);for(let R=0;R<4;R++)s(new Je(.2,1),e(R%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),v*1.5+(R%2?.08:-.08),.6+R*.17,-.7+(R>1?.06:-.06)).scale.setScalar(1-R*.12)}this.scene.add(t),this.npcDesk=t;let d=Math.cos(Ve.face),M=Math.sin(Ve.face),x=[[-1.75,-.95],[1.75,-.95],[-1,1],[1,1],[-1.75,.2],[1.75,.2]].map(([v,R])=>[Ve.x+v*d+R*M,Ve.z-v*M+R*d]);this.nav.blockRect(Math.min(...x.map(v=>v[0])),Math.min(...x.map(v=>v[1])),Math.max(...x.map(v=>v[0])),Math.max(...x.map(v=>v[1])),.05)}setNpc(t){let e={...Dy},n=JSON.stringify(e);if(!this.npc){let s=document.createElement("div");s.className="plate3d lobby npc",s.innerHTML='<span class="npc-q">?</span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title">B\u1EA5m \u0111\u1EC3 h\u1ECFi m\xECnh</span></span>',s.addEventListener("click",r=>{let o=s.getBoundingClientRect();this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(o.left+o.width/2,o.bottom),r.stopPropagation()}),this.layer.append(s),this.npc={plate:s,facing:Ve.face,pos:{x:Ve.x-Math.sin(Ve.face)*.08,z:Ve.z-Math.cos(Ve.face)*.08},m:{id:"npc"}}}this.npc.sig!==n&&(this.npc.person&&this.scene.remove(this.npc.person.root),this.npc.person=this.makePerson(e,7,this.npc.pos,this.npc.facing),this.npc.person.root.scale.setScalar(1.06),this.npc.sig=n),this.npc.plate.querySelector(".pl-name").textContent=t&&t.name?t.name:"Tr\u1EE3 l\xFD SIMI"}npcWave(){this.npc&&this.npc.person.doAction("wave",1500)}goNpc(){let t=pf(),e=this.self();return e&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<.6&&!e.path.length?(this.focusSelf(),!0):(this.walkSelf(t.x,t.z,!0),this.focusSelf(),!1)}nearNpc(){let t=this.self();return!!(t&&this.npc&&Math.hypot(t.pos.x-this.npc.pos.x,t.pos.z-this.npc.pos.z)<2.6&&!t.path.length)}npcScreen(){if(!this.npc)return null;let t=this.project(this.tmpV.set(this.npc.pos.x,1.6,this.npc.pos.z));return{x:t.x,y:t.y,w:this.cssW,h:this.cssH}}npcSay(t,e=5200){this.npc&&(this.npc.lastSay=t,this.say("npc",t,e))}setTableBalls(t,e){let n=window.VPPool,s=e||(n?n.rack().balls:null);if(!s){t.balls.visible=!1;return}let r=this._m||(this._m=new ae),o=!Array.isArray(s);for(let a=0;a<16;a++){let l=o?s[a*3]:s[a][0],c=o?s[a*3+1]:s[a][1],f=o?s[a*3+2]:s[a][2],h=t.x-vs.w/2+c/500*vs.w,u=t.z-vs.l/2+l/1e3*vs.l;r.makeTranslation(h,f?-1:.892,u),t.balls.setMatrixAt(a,r)}t.balls.instanceMatrix.needsUpdate=!0,t.balls.visible=!0}setGames(t){let e=new Map;for(let n of t||[])n.players.forEach((s,r)=>e.set(s,{table:n.table,idx:r}));for(let n of this.pool){let s=(t||[]).find(r=>r.table===n.index);s&&!n.anim&&(n.state=s.state?s.state.balls:null,this.setTableBalls(n,n.state))}this.games=e;for(let n of this.people.values()){let s=e.get(n.m.id)||null;!!s!=!!n.game?(n.game=s,s||(n.person.holdCue=!1),this.updatePlate(n)):n.game=s}}goToTable(t,e){let n=this.pool[t];if(!n)return;let s=n.spots[e%2];this.walkSelf(s.x,s.z,!0)}poolCue(t){let e=this.people.get(t);e&&e.person.doAction("cue",900)}poolShot(t,e,n,s,r){let o=this.pool[t];if(!o)return;this.poolCue(e);let a=window.VPPool;if(a&&n)try{o.anim={frames:a.simulate(n,s).frames,t0:performance.now(),end:r.balls};return}catch{}o.state=r.balls,this.setTableBalls(o,o.state)}poolEnd(t){let e=this.pool[t];e&&(clearTimeout(e.resetT),e.resetT=setTimeout(()=>{e.anim||(e.state=null,this.setTableBalls(e,null))},6e3))}setHonor(t){let e=this.world&&this.world.honorBoard;e&&e.draw(t||null);let n=new Map;for(let[s,r,o]of[["thantai","\u{1F4B0}","Th\u1EA7n T\xE0i s\u1ED1ng"],["lucky","\u{1F340}","May m\u1EAFn nh\u1EA5t"],["ai","\u{1F916}","Chi\u1EBFn th\u1EA7n AI"]]){let a=t&&t.boards&&t.boards[s]&&t.boards[s][0];if(!a)continue;let l=n.get(a.id)||{icons:"",titles:[]};l.icons+=r,l.titles.push(`${r} ${o} tu\u1EA7n n\xE0y`),n.set(a.id,l)}for(let s of n.values())s.titles=s.titles.join(", ");this.honorBadges=n;for(let s of this.people.values())s.plate&&s.m&&this.updatePlate(s)}setSkew(t){this.skew=Number(t)||0}setCat(t){this.cat.command(t,this.skew)}beat(){return(Date.now()+this.skew)/1e3*Iy/60}setDance(t,e){let n=this.people.get(t);n&&(n.dance=e||null,n.person.dance=n.dance,e&&n.pendingSeat&&(n.pendingSeat=null,n.path=[]),this.updatePlate(n))}danceSelf(t){let e=this.self();e&&(this.setDance(e.m.id,t),this.opts.onDance&&this.opts.onDance(t||null,!1))}onFloor(t){return!!t&&t.pos.x>bo.x1&&t.pos.x<bo.x2&&t.pos.z>bo.z1&&t.pos.z<bo.z2}interact(t){let e=this.people.get(t.a),n=this.people.get(t.b);if(!e||!n||e===n)return;(t.kind==="hug"||t.kind==="dance")&&n.sitting&&this.standUp(n);let s=Math.atan2(e.pos.x-n.pos.x,e.pos.z-n.pos.z)||.6,r=Ly[t.kind]||.65,o=this.freeSpot(n.pos.x+Math.sin(s)*r,n.pos.z+Math.cos(s)*r);this.standUp(e),e.path=this.nav.find({x:e.pos.x,z:e.pos.z},o);let a=this.pace(e);e.meet={other:n,kind:t.kind,style:t.style,deadline:performance.now()/1e3+Math.max(7,a/e.speed+3)},e.me&&(this.follow=!0)}startMeet(t,e){let n=e.other;t.path=[],t.facing=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),n.sitting||(n.facing=Math.atan2(t.pos.x-n.pos.x,t.pos.z-n.pos.z));let s=e.kind;if(s==="coffee")t.person.doAction("give",1500),setTimeout(()=>{this.people.has(n.m.id)&&n.person.doAction("drink",2400)},1100);else if(s==="dance")for(let r of[t,n])r.dance=e.style||"groove",r.person.dance=r.dance,this.updatePlate(r);else for(let r of[t,n])r.person.doAction(s,s==="hug"?2800:s==="cheers"?2300:1700);this.fx(t,df[s]||"\u2728"),(s==="hug"||s==="highfive")&&this.fx(n,df[s])}setLight(t){this.light=!!t;let e=t?1:Ms();this.perf.dpr=e,this.perf.ceil=e,this.renderer.setPixelRatio(e);let n=!t&&!this.perf.noShadow;this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(s=>{s.material&&[].concat(s.material).forEach(r=>{r.needsUpdate=!0})})),this.resize()}frame(){let t=this.clock.getDelta(),e=Math.min(.05,t),n=this.t=(this.t||0)+e,s=performance.now()/1e3;for(let p of this.world.animated)p(n,e);for(let p of this.pool){if(!p.anim)continue;let _=Math.floor((performance.now()-p.anim.t0)/(1e3/60));_>=p.anim.frames.length-1?(p.state=p.anim.end,p.anim=null,this.setTableBalls(p,p.state)):this.setTableBalls(p,p.anim.frames[_])}let r=this.beat();this.cat.update(e,s,{posOf:p=>{let _=this.people.get(p);return _&&_.pos}}),this.keyboardMove(e),this.marker.material.opacity=Math.max(0,this.marker.material.opacity-e*.8);for(let p of this.people.values()){let _=!1;if(p.path.length){let v=p.path[0],R=v.x-p.pos.x,S=v.z-p.pos.z,b=Math.hypot(R,S),I=p.speed*e;if(b<=I){if(p.pos.x=v.x,p.pos.z=v.z,p.path.shift(),!p.path.length&&p.pendingSeat){let U=this.seats.get(p.pendingSeat);U&&this.sitNow(p,U)}}else p.pos.x+=R/b*I,p.pos.z+=S/b*I;p.meet&&s>p.meet.deadline&&(p.path=[]),b>.001&&(p.facing=ic(p.facing,Math.atan2(R,S),1-Math.exp(-e*12))),_=p.path.length>0}else p.keyMove&&(_=!0);if(p.meet&&!p.path.length){let v=p.meet;p.meet=null,this.startMeet(p,v)}if(p.game){let v=this.pool[p.game.table]&&this.pool[p.game.table].spots[p.game.idx%2],R=v&&!_&&Math.hypot(p.pos.x-v.x,p.pos.z-v.z)<.45;p.person.holdCue=!!R,R&&(p.facing=ic(p.facing,v.face,1-Math.exp(-e*8)))}p.danceUntil&&s<p.danceUntil&&!_&&(p.facing+=e*5),p.dance==="spin"&&!_&&!p.sitting&&(p.facing+=e*3.2);let g=!!p.sitting&&!_,d=g&&p.seatKind==="zen",M=g&&p.seatKind==="kneel",x=d?(p.seatH||.2)-.4:M?(p.seatH||.09)-.32:g?Math.max(0,(p.seatH||.45)-.45):0;if(d&&s>(p.zenFx||0)&&(p.zenFx=s+6+Math.random()*5,this.fx(p,["\u{1F9D8}","\u{1F343}","\u2728","\u{1F33F}","\u262F\uFE0F","\u{1F549}\uFE0F"][Math.floor(Math.random()*6)],2200)),M&&s>(p.zenFx||0)){p.zenFx=s+5+Math.random()*4;let v=p.seatTheme==="thantai"?["\u{1F4B0}","\u{1F9E7}","\u{1F4C8}","\u{1F431}","\u{1F4B8}","\u{1F6D2}"]:["\u{1F64F}","\u{1F647}","\u2728","\u{1F4B0}","\u{1F340}"];this.fx(p,v[Math.floor(Math.random()*v.length)],2e3)}p.person.root.position.set(p.pos.x,x,p.pos.z),p.person.blob&&(p.person.blob.position.y=.012-x,p.person.blob.visible=!g||x<.05),p.person.root.rotation.y=p.facing,p.busy&&!_&&!g&&!p.person.action&&Math.random()<e*.15&&p.person.doAction("look",1600),p.person.animate(e,s,{moving:_,speed:p.speed,seated:g,typing:g&&!d&&!M&&p.busy&&!p.dance,beat:r,meditate:d,kneel:M}),p.keyMove=!1}if(this.npcRing){let p=s*.9%1,[_,g]=this.npcRing.children;_.material.opacity=_.userData.o*(.75+.25*Math.sin(s*3)),g.scale.setScalar(.6+p*.9),g.material.opacity=g.userData.o*(1-p)}if(this.npc){let p=this.npc;p.person.root.position.set(p.pos.x,0,p.pos.z),p.person.root.rotation.y=p.facing,p.person.animate(e,s,{moving:!1,speed:0,seated:!1,typing:!1,beat:r});let _=this.self();_&&Math.hypot(_.pos.x-p.pos.x,_.pos.z-p.pos.z)<2.3&&(!p.greetAt||s-p.greetAt>90)&&(p.greetAt=s,this.npcWave(),this.npcSay(this.opts.npcGreeting?this.opts.npcGreeting():"C\u1EA7n gi\xFAp g\xEC kh\xF4ng? B\u1EA5m v\xE0o m\xECnh nh\xE9 \u{1F44B}"))}let o=this.self(),a=this.onFloor(o)&&!(o&&o.path.length);a!==this.wasFloor&&(this.wasFloor=a,this.opts.onFloor&&this.opts.onFloor(a));let l=this.view,c=this.goal,f=1-Math.exp(-e*10);l.az+=(c.az-l.az)*f,l.el+=(c.el-l.el)*f,l.zoom*=Math.exp((Math.log(c.zoom)-Math.log(l.zoom))*f);let h=this.self(),u=this.follow&&h?{x:h.pos.x,z:h.pos.z}:this.panTo;if(u){let p=1-Math.exp(-e*4.5);l.target.x+=(u.x-l.target.x)*p,l.target.z+=(u.z-l.target.z)*p}this.updateCamera();let m=l.zoom<.7;m!==this.far&&(this.far=m,this.layer.classList.toggle("far",m)),this.renderer.render(this.scene,this.cam),this.cinemaObj&&this.cssRenderer.render(this.cssScene,this.cam),this.placeDom(),this.adapt(t)}adapt(t){let e=this.perf,n=this.slowMode();if(t>1||n!==e.mode){e.acc=0,e.n=0,e.mode=n;return}if(e.acc+=t,e.n++,e.acc<2)return;let s=e.acc/e.n;e.acc=0,e.n=0;let r=this.slowMode()?1/30:1/60;s>r*1.4?(e.slow++,e.fast=0,e.dpr>e.min+.01?(e.ceil=e.dpr-.25,e.dpr=Math.max(e.min,e.dpr-.25),this.renderer.setPixelRatio(e.dpr),this.resize()):e.slow>=2&&this.renderer.shadowMap.enabled?(this.renderer.shadowMap.enabled=!1,e.noShadow=!0,this.scene.traverse(o=>{o.material&&[].concat(o.material).forEach(a=>{a.needsUpdate=!0})})):e.slow>=4&&!this.capFps&&(this.capFps=!0,e.slow=0,this.opts.onSlow&&this.opts.onSlow())):(e.slow=0,s<r*1.12&&!this.light&&e.dpr<Math.min(e.ceil,Ms())-.01&&++e.fast>=3&&(e.fast=0,e.dpr=Math.min(e.ceil,Ms(),e.dpr+.25),this.renderer.setPixelRatio(e.dpr),this.resize()))}keyboardMove(t){let e=Math.hypot(this.stick.x,this.stick.y);if(!this.keys.size&&e<.15)return;let n=[...this.people.values()].find(p=>p.me);if(!n)return;let s=0,r=0,o=1;if(e>=.15&&(s=this.stick.x,r=this.stick.y,o=Math.min(1,e)),(this.keys.has("w")||this.keys.has("arrowup"))&&(r-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(s-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(s+=1),!s&&!r)return;let a=this.view.az,l=Math.hypot(s,r),c=(s*Math.cos(a)+r*Math.sin(a))/l,f=(-s*Math.sin(a)+r*Math.cos(a))/l,h=n.pos.x+c*2.4*o*t,u=n.pos.z+f*2.4*o*t;n.path=[],(n.sitting||n.pendingSeat)&&this.standUp(n),(n.dance||n.meet)&&this.stopMoves(n),this.follow=!0,this.nav.isFree(h,u)?(n.pos.x=h,n.pos.z=u):this.nav.isFree(h,n.pos.z)?n.pos.x=h:this.nav.isFree(n.pos.x,u)&&(n.pos.z=u),n.facing=ic(n.facing,Math.atan2(c,f),1-Math.exp(-t*14)),n.keyMove=!0;let m=performance.now();(!this.lastKeySend||m-this.lastKeySend>350)&&(this.lastKeySend=m,this.opts.onMove&&this.opts.onMove({x:n.pos.x,z:n.pos.z,seat:null}))}setStick(t,e){this.poke();let n=Math.hypot(this.stick.x,this.stick.y)>=.15;if(this.stick.x=Number(t)||0,this.stick.y=Number(e)||0,n&&Math.hypot(this.stick.x,this.stick.y)<.15){let s=this.self();s&&this.opts.onMove&&this.opts.onMove({x:s.pos.x,z:s.pos.z,seat:null})}}project(t){let e=t.project(this.cam);return{x:(e.x+1)/2*this.cssW,y:(1-e.y)/2*this.cssH}}placeDom(){let t=this.npc&&this.npc.person?[...this.people.values(),this.npc]:this.people.values();for(let n of t){let s=this.project(n.person.headWorld(this.tmpV).setY(this.tmpV.y+.12));n.anchor=s,n.plateH||(n.plateH=n.plate.offsetHeight||34);let r=Math.round(s.x*2)/2,o=Math.round(s.y*2)/2;if(r!==n.tx||o!==n.ty){n.tx=r,n.ty=o,n.plate.style.transform=`translate3d(${r}px, ${o}px, 0) translate(-50%, -100%)`;let a=Math.round(o)+(n.me?2e3:0);a!==n.z&&(n.z=a,n.plate.style.zIndex=String(a))}}for(let n of this.bubbles){let s=n._p.anchor;if(!s)continue;let r=this.cssW,o=Math.max(120,Math.min(r-120,s.x));n.style.transform=`translate(${o}px, ${s.y-(n._p.plateH||34)-8}px) translate(-50%, -100%)`,n.style.setProperty("--tail",s.x-o+"px")}let e=null;for(let n of this.emotes){if(n._cat){e=e||this.project(this.cat.headWorld(this.tmpV)),n.style.transform=`translate(${e.x}px, ${e.y-8}px) translate(-50%, -100%)`;continue}let s=n._p.anchor;s&&(n.style.transform=`translate(${s.x+24}px, ${s.y-(n._p.plateH||34)-4}px) translate(-50%, -100%)`)}}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.wrap.remove()}},oc=class{constructor(t){this.root=t;let e=document.createElement("canvas");e.className="avatar-preview",t.appendChild(e),this.canvas=e,this.renderer=mf(e),this.renderer.shadowMap.enabled=!1,this.scene=new oi,gf(this.scene,512);let n=new q(new Q(.75,.8,.06,40),new se({color:"#dbe9fb",roughness:.6}));n.position.y=-.03,this.scene.add(n),this.cam=new $e(30,1,.1,50),this.cam.position.set(0,1.25,4.1),this.cam.lookAt(0,.75,0),this.angle=.4,this.dead=!1,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let s=performance.now(),r=o=>{if(this.dead)return;this.raf=requestAnimationFrame(r);let a=Math.min(.05,(o-s)/1e3);s=o,this.person&&(this.angle+=a*.6,this.person.root.rotation.y=Math.sin(this.angle)*.9,this.person.animate(a,o/1e3,{moving:!1,speed:0,seated:!1,typing:!1})),this.renderer.render(this.scene,this.cam)};this.raf=requestAnimationFrame(r)}resize(){let t=this.root.clientWidth||220,e=this.root.clientHeight||260;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}update(t){this.person&&this.scene.remove(this.person.root),this.person=new Ri(ac(t),0),this.scene.add(this.person.root)}wave(){this.person&&this.person.doAction("wave",1600)}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.canvas.remove()}};or.ROOM=fe;or.PLACES=rc;window.Lobby3D=or;window.avatarToLook=ac;window.AvatarPreview=oc;var lc=(i,t)=>i+Math.random()*(t-i),bn=i=>i[Math.floor(Math.random()*i.length)],zy=i=>new Promise(t=>setTimeout(t,i));function yf(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var By=[["C\xE0 ph\xEA kh\xF4ng? \u2615","Ok, ch\xFAt n\u1EEFa nh\xE9!"],["H\xF4m nay nhi\u1EC1u vi\u1EC7c gh\xEA \u{1F605}","C\u1ED1 l\xEAn n\xE0o!"],["Tr\u1EDDi \u0111\u1EB9p gh\xEA ha \u{1F324}","\u0110\xFAng r\u1ED3i!"],["Tr\u01B0a nay \u0103n g\xEC? \u{1F35C}","Ph\u1EDF \u0111i!"],["Xong vi\u1EC7c ch\u01B0a?","S\u1EAFp r\u1ED3i \u{1F4AA}"],["Ngh\u1EC9 tay 5 ph\xFAt nha","\u{1F44D}"]],xf={cooler:["U\u1ED1ng mi\u1EBFng n\u01B0\u1EDBc \u{1F4A7}","M\xE1t gh\xEA!"],board:["Xem c\xF2n bao nhi\xEAu vi\u1EC7c\u2026","\u1ED4n \xE1p!"],windowL:["Ng\u1EAFm tr\u1EDDi x\xEDu \u{1F324}"],windowR:["N\u1EAFng \u0111\u1EB9p qu\xE1 \u2600\uFE0F"],shelf:["T\xECm cu\u1ED1n s\xE1ch\u2026","\u0110\xE2y r\u1ED3i \u{1F4D8}"],plant:["T\u01B0\u1EDBi c\xE2y ch\xFAt \u{1F331}"]},cc=class{constructor(t,e){this.root=t,this.opts=e||{},this.people=new Map,this.queue=[],this.busy=!1,this.flyers=[],this.board={wait:0,run:0,done:0},this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas";let s;try{s=new os({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(c){throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng: "+c.message)}if(!s.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");this.renderer=s,s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=ms,s.toneMapping=Ks,s.toneMappingExposure=1.05,s.outputColorSpace=ve,s.setClearColor(0,0),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.wrap.append(n,this.layer),t.appendChild(this.wrap),this.canvas=n;let r=new oi;this.scene=r,r.fog=null,this.hemi=new fs("#fff4e0","#7a5a44",.85),r.add(this.hemi),r.add(new us("#ffffff",.18));let o=new li("#ffe7c2",2.1);this.sun=o,o.position.set(-5,11,7),o.target.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-10,right:10,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,r.add(o,o.target);let a=new li("#cfe0ff",.45);a.position.set(8,6,-2),r.add(a),this.world=tf(r,s),this.cam=new ri(-10,10,6,-6,.1,100),this.view={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)},this.goal={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)},this.updateCamera(),this.nav=new xs(Wt.minX,Wt.minZ,Wt.maxX,Wt.maxZ,.2),this.nav.blockRect(Wt.minX,Wt.minZ,Wt.maxX,Wt.minZ+.25,.15),this.nav.blockRect(Wt.minX,Wt.minZ,Wt.minX+.25,Wt.maxZ,.15),this.nav.blockRect(Wt.maxX-.2,Wt.minZ,Wt.maxX,Wt.maxZ,.15),this.nav.blockRect(Wt.minX,Wt.maxZ-.2,Wt.maxX,Wt.maxZ,.15);for(let c of jh)this.nav.blockRect(...c);for(let c of tr)this.nav.blockRect(c.x-_e.w/2,c.z-_e.d/2,c.x+_e.w/2,c.z+_e.d/2),this.nav.blockRect(c.x-.28,c.z+er-.28,c.x+.28,c.z+er+.28,.18);this.cat=new _s(r,this.nav),this.confetti=[],this.emotes=new Set,this.applyDaylight(),this.dayT=setInterval(()=>this.applyDaylight(),3e4),this.raycaster=new ps,this.ndc=new Mt,this.tmpV=new L,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new ds;let l=()=>{this.dead||(this.raf=requestAnimationFrame(l),this.paused||this.frame())};l()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;this.cam.left=-c*l/2,this.cam.right=c*l/2,this.cam.top=c/2,this.cam.bottom=-c/2,this.cam.updateProjectionMatrix()}resetView(){this.goal={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)}}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.updateCamera()}pickDesk(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=this.raycaster.intersectObjects([...this.people.values()].map(r=>r.desk.hit),!1);return s.length&&[...this.people.values()].find(r=>r.desk.hit===s[0].object)||null}pickAny(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=[this.cat.root,...[...this.people.values()].map(a=>a.person.root)],r=this.raycaster.intersectObjects(s,!0);for(let a of r){let l=a.object;for(;l&&l.parent&&l.parent!==this.scene;)l=l.parent;if(l===this.cat.root)return{cat:!0};let c=[...this.people.values()].find(f=>f.person.root===l);if(c)return{p:c}}let o=this.pickDesk(t,e);return o?{p:o}:null}setHover(t,e){for(let n of this.people.values()){let s=n.desk.ring.material;n===t?(s.color.set(e==="drop"?"#2f8cf0":"#ffffff"),s.opacity=e==="drop"?.8:.4):n.state==="error"?(s.color.set("#ef6b6b"),s.opacity=.55):n.state==="working"?(s.color.set("#7cc4f5"),s.opacity=.35):s.opacity=0}}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,az:this.goal.az,el:this.goal.el,t:this.goal.target.clone(),pan:n.button===2||n.shiftKey,moved:!1},t.setPointerCapture(n.pointerId)}),t.addEventListener("pointermove",n=>{if(e){let a=n.clientX-e.x,l=n.clientY-e.y;if(Math.hypot(a,l)>4&&(e.moved=!0),!e.moved)return;if(e.pan){let c=(this.cam.right-this.cam.left)/this.canvas.clientWidth,f=new L(Math.cos(this.view.az),0,-Math.sin(this.view.az)),h=new L(Math.sin(this.view.az),0,Math.cos(this.view.az)),u=e.t.clone().addScaledVector(f,-a*c).addScaledVector(h,-l*c*1.4);u.x=Math.max(-6,Math.min(6,u.x)),u.z=Math.max(-4,Math.min(4.5,u.z)),this.goal.target.copy(u)}else this.goal.az=Math.max(.08,Math.min(1.5,e.az-a*.005)),this.goal.el=Math.max(.32,Math.min(1.25,e.el+l*.0035));t.style.cursor="grabbing";return}let s=n.clientX,r=n.clientY,o=()=>{this.hoverAt=performance.now();let a=this.pickAny(s,r);this.setHover(a&&a.p,"hover"),t.style.cursor=a?"pointer":"grab"};clearTimeout(this.hoverTimer),performance.now()-(this.hoverAt||0)>80?o():this.hoverTimer=setTimeout(o,90)}),t.addEventListener("pointerup",n=>{if(e&&!e.moved){let s=this.pickAny(n.clientX,n.clientY);s&&s.cat?this.petCat():s&&s.p&&(this.opts.onPersonClick?this.opts.onPersonClick(s.p.agent.id,n.clientX,n.clientY):this.opts.onDeskClick&&this.opts.onDeskClick(s.p.agent.id))}e=null,t.style.cursor="grab"}),t.addEventListener("pointerleave",()=>{e||this.setHover(null)}),t.addEventListener("dblclick",n=>{this.pickAny(n.clientX,n.clientY)||this.resetView()}),t.addEventListener("wheel",n=>{n.preventDefault(),this.goal.zoom=Math.max(.75,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,n.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dragover",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY);this.setHover(s,"drop"),this.dragTarget=s}),t.addEventListener("dragleave",()=>{this.setHover(null),this.dragTarget=null}),t.addEventListener("drop",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY)||this.dragTarget;this.setHover(null);let r=n.dataTransfer.getData("text/vp-card");s&&r&&this.opts.onDrop&&this.opts.onDrop(r,s.agent.id)})}setAgents(t,e){this.sources=e||this.sources;let n=new Set;t.forEach((s,r)=>{let o=s.slot!=null&&tr[s.slot]?s.slot:r%tr.length,a=tr[o],l=this.people.get(s.id),c=JSON.stringify([s.shirt,s.hair,s.skin,s.hairStyle,s.isManager,s.isReviewer,s.source,s.model,o]);if(l&&l.sig!==c&&(this.scene.remove(l.person.root),this.scene.remove(l.desk.group),l.dom.forEach(f=>f.remove()),this.people.delete(s.id),l=null),!l){let f=ef(this.scene,a,s),h=new Ri(s,r),u={x:a.x,z:a.z+er};h.root.position.set(u.x,0,u.z),this.scene.add(h.root),l={agent:s,person:h,desk:f,slot:a,seat:u,pos:{...u},path:[],speed:1.6,seated:!0,facing:0,faceTo:null,state:"idle",note:"",nextIdle:performance.now()/1e3+lc(6,22),activity:null,locks:0,sig:c,dom:[]},l.person.root.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),this.people.set(s.id,l),this.makeDom(l)}l.agent=s,l.person.agent=s,this.updatePlate(l),n.add(s.id)});for(let[s,r]of[...this.people])n.has(s)||(this.scene.remove(r.person.root),this.scene.remove(r.desk.group),r.dom.forEach(o=>o.remove()),this.people.delete(s))}makeDom(t){let e=document.createElement("div");e.className="plate3d",e.innerHTML='<span class="pl-row"><span class="pl-crown">\u{1F451}</span><span class="pl-name"></span><span class="pl-mood"></span><i class="pl-dots"><b></b><b></b><b></b></i><i class="pl-err">!</i></span><span class="pl-sub"><span class="pl-title"></span><span class="pl-src"></span></span><span class="pl-energy"><i style="width:100%"></i></span>',e.title="B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn",e.addEventListener("click",n=>{if(n.detail!==1)return;let s=e.getBoundingClientRect();e._clickT=setTimeout(()=>{e._editing||(this.opts.onPersonClick?this.opts.onPersonClick(t.agent.id,s.left+s.width/2,s.bottom):this.opts.onDeskClick&&this.opts.onDeskClick(t.agent.id))},260)}),e.addEventListener("dblclick",n=>{n.stopPropagation(),clearTimeout(e._clickT),this.inlineRename(t,e)}),e.addEventListener("dragover",n=>{n.preventDefault(),this.setHover(t,"drop")}),e.addEventListener("drop",n=>{n.preventDefault(),this.setHover(null);let s=n.dataTransfer.getData("text/vp-card");s&&this.opts.onDrop&&this.opts.onDrop(s,t.agent.id)}),this.layer.append(e),t.plate=e,t.dom=[e]}inlineRename(t,e){if(e._editing)return;e._editing=!0;let n=e.querySelector(".pl-name"),s=document.createElement("input");s.className="rename3d",s.value=t.agent.name,s.maxLength=30,n.replaceWith(s),s.focus(),s.select();let r=o=>{if(!e._editing)return;e._editing=!1,s.replaceWith(n);let a=s.value.trim();o&&a&&a!==t.agent.name&&this.opts.onRename&&this.opts.onRename(t.agent.id,a)};s.addEventListener("keydown",o=>{o.key==="Enter"&&r(!0),o.key==="Escape"&&r(!1),o.stopPropagation()}),s.addEventListener("blur",()=>r(!0)),s.addEventListener("click",o=>o.stopPropagation())}updatePlate(t){let e=t.agent;t.plate.querySelector(".pl-name").textContent=e.name,t.plate.querySelector(".pl-title").textContent=(e.isManager?"\u2605 ":"")+e.title;let n=t.plate.querySelector(".pl-src");n.className="pl-src src-"+(e.source||"sim").split("-")[0],n.textContent=window.shortSource?window.shortSource(e.source,e.model):e.source}setBoard(t){this.board={...this.board,...t},this.world.drawBoard(this.board)}setStats(t,e){let n=this.people.get(t);if(!n)return;n.energy=e.energy,n.plate.classList.toggle("crowned",!!e.crown),n.plate.querySelector(".pl-mood").textContent=e.emoji||"";let s=n.plate.querySelector(".pl-energy");s.classList.toggle("low",e.energy<30),s.firstChild.style.width=Math.max(4,e.energy)+"%",n.plateH=0}setDecor(t){this.world.setDecor&&this.world.setDecor(t)}async interact(t,e){let n=this.people.get(t);if(!n)return!1;let s=n.state==="working"||n.locks>0,r=(o,a=3e3)=>this.say(n,o,"cute",a);return e==="wave"?(n.person.doAction("wave",2200),this.emote(n,"\u{1F44B}"),await r(bn(s?["Em \u0111ang l\xE0m n\xE8 s\u1EBFp \u{1F4AA}","D\u1EA1, ch\xFAt em xong ngay \u1EA1!"]:["D\u1EA1 s\u1EBFp g\u1ECDi em? \u{1F60A}","Ch\xE0o s\u1EBFp \u1EA1! \u{1F44B}","H\xF4m nay s\u1EBFp kh\u1ECFe kh\xF4ng \u1EA1?","Em s\u1EB5n s\xE0ng nh\u1EADn vi\u1EC7c n\xE8!"])),!0):e==="praise"?(n.person.doAction("cheer",2200),this.emote(n,"\u{1F496}"),setTimeout(()=>this.emote(n,"\u2728"),350),await r(bn(["Hihi c\u1EA3m \u01A1n s\u1EBFp! \u{1F970}","Em s\u1EBD c\u1ED1 g\u1EAFng h\u01A1n n\u1EEFa \u1EA1!","S\u1EBFp khen l\xE0m em vui c\u1EA3 ng\xE0y \u{1F606}"])),!0):e==="dance"?s?(this.emote(n,"\u{1F605}"),await r("\u0110ang l\xE0m vi\u1EC7c, x\xEDu em nh\u1EA3y sau nha!"),!1):(n.person.doAction("dance",3200),n.danceUntil=performance.now()/1e3+3.2,this.emote(n,"\u{1F3B5}"),setTimeout(()=>this.emote(n,"\u{1F3B6}"),900),await r(bn(["La la la~ \u{1F483}","Nh\u1EA1c l\xEAn n\xE0o! \u{1F57A}","T\u0103ng ca kh\xF4ng b\u1EB1ng t\u0103ng vui \u{1F60E}"]),2600),!0):e==="coffee"?s?(this.emote(n,"\u2615"),await r("Xong vi\u1EC7c em u\u1ED1ng li\u1EC1n nha s\u1EBFp \u2615"),!1):(n.activity&&await this.recall(n),this.emote(n,"\u2615"),r("D\u1EA1 em c\u1EA3m \u01A1n s\u1EBFp! \u2615",1600),await this.runActivity(n,"coffee"),!0):!1}petCat(){this.cat.pet();let t=()=>this.project(this.cat.headWorld(this.tmpV2||(this.tmpV2=new L)));this.emoteAt(t,bn(["\u{1F495}","\u{1F497}","\u{1F63B}"])),setTimeout(()=>this.emoteAt(t,bn(["Meo~","Meoww \u{1F495}","R\u1EEB r\u1EEB\u2026"])),300),this.opts.onCat&&this.opts.onCat()}emoteAt(t,e){let n=document.createElement("div");n.className="emote"+(e.length>2?" txt":""),n.textContent=e,n._get=t,e.length>2&&Object.assign(n.style,{fontSize:"13px",fontWeight:"900",color:"#0656b8",background:"#e8f3ff",border:"2px solid #45a2ff",borderRadius:"12px",padding:"2px 8px"}),this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}setTray(t){this.trayCount=t,this.world.setTray(t)}setState(t,e,n){let s=this.people.get(t);s&&(s.state=e,s.note=n||"",s.desk.state=e==="working"?"working":e==="error"?"error":"idle",vo(s.desk,this.t||0,!0),s.plate.classList.toggle("working",e==="working"),s.plate.classList.toggle("error",e==="error"),s.plate.title=e==="error"&&n?"L\u1ED7i: "+n:"B\u1EA5m: c\u1EA5u h\xECnh b\xE0n \xB7 B\u1EA5m \u0111\xFAp: \u0111\u1ED5i t\xEAn",e==="working"&&!s.seated&&!s.locks&&this.recall(s),this.setHover(null))}move(t,e,n){if(t.moveRes){let s=t.moveRes;t.moveRes=null,s(!1)}return t.path=e.slice(),t.speed=n,t.seated=!1,t.faceTo=null,t.path.length?new Promise(s=>{t.moveRes=s}):Promise.resolve(!0)}exitPoint(t,e){let n=e>=t.seat.x?1:-1;return{x:t.seat.x+n*1.2,z:t.seat.z}}walkTo(t,e,n){let s=[],r={x:t.pos.x,z:t.pos.z};if(t.seated||Math.hypot(t.pos.x-t.seat.x,t.pos.z-t.seat.z)<.15){let a=this.exitPoint(t,e.x);s.push(a),r=a}s.push(...this.nav.find(r,e));let o=this.move(t,s,n?3.4:1.7);return t.faceAfter=e.face||null,o}async walkHome(t,e){let n=this.exitPoint(t,t.pos.x),s=[...this.nav.find(t.pos,n),{x:t.seat.x,z:t.seat.z}];t.faceAfter=null;let r=await this.move(t,s,e?3.4:1.7);return r&&(t.seated=!0),r}async recall(t){t.activity&&(t.activity.abort=!0),t.seated||await this.walkHome(t,!0)}enqueue(t){this.queue.push(t),this.busy||this.runQueue()}async runQueue(){for(this.busy=!0;this.queue.length;){let t=this.queue.shift(),e=this.queue.length>=3;try{await this.scene_(t,e)}catch(n){console.error(n)}}this.busy=!1}async scene_(t,e){let n=this.people.get(t.from),s=this.people.get(t.to),r=e?1300:Math.min(4200,1700+t.text.length*15);if(t.from==="boss"&&s){s.locks++;try{s.activity&&await this.recall(s),await this.fly(new L(xo.x,1.6,xo.z+.3),s.person.headWorld(new L).add(new L(0,.3,0)),e?450:1e3),this.emote(s,"\u{1F4CC}"),await this.say(s,"\u{1F4E9} "+t.text,"assign",r)}finally{s.locks--}return}if(n){n.locks++;try{if(n.activity&&await this.recall(n),n.homeP&&await n.homeP,t.to==="boss"){t.kind==="done"?(n.person.carrying=!0,await this.walkTo(n,_o.tray,e),n.person.doAction("place",900),await zy(e?400:800),this.emote(n,"\u2705"),n.person.carrying=!1,this.world.setTray((this.trayCount||0)+1),this.trayCount=(this.trayCount||0)+1,await this.say(n,t.text,"done",e?1e3:2400),n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})):(t.kind==="plan"&&this.emote(n,"\u{1F4A1}"),await this.say(n,t.text,t.kind,r));return}if(s&&s!==n){s.locks++;try{s.activity&&await this.recall(s),s.homeP&&await s.homeP;let o=n.slot.x<=s.slot.x?-1:1,a={x:s.slot.x+o*.62,z:s.slot.z+_e.d/2+.55,face:{x:s.seat.x,z:s.seat.z}};await this.walkTo(n,a,e);let l={ask:"\u2753",answer:"\u{1F4AC}",review:/cần sửa/i.test(t.text)?"\u270F\uFE0F":"\u{1F44D}",assign:"\u{1F4CB}",done:"\u{1F4E6}"}[t.kind];l&&this.emote(n,l),await this.say(n,t.text,t.kind,r)}finally{s.locks--}n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})}else await this.say(n,t.text,t.kind,r)}finally{n.locks--}}}fly(t,e,n){return new Promise(s=>{let r=new Bt,o=new q(new St(.34,.03,.24),new se({color:"#fffaf0",roughness:.8})),a=new q(new Q(.04,.04,.01,12),new se({color:"#d9534f"}));a.position.y=.02,r.add(o,a),r.traverse(l=>{l.castShadow=!0}),this.scene.add(r),this.flyers.push({obj:r,a:t,b:e,t0:performance.now(),ms:n,res:s})})}say(t,e,n,s){return new Promise(r=>{let o=document.createElement("div");o.className="bubble3d k-"+(n||"say"),o.style.zIndex="5000",o.textContent=e.length>120?e.slice(0,119)+"\u2026":e,o._p=t,this.layer.appendChild(o),this.bubbles=this.bubbles||new Set,this.bubbles.add(o),t.person.say(Math.min(s,2600)),this.positionBubble(o),requestAnimationFrame(()=>o.classList.add("show")),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(o),o.remove()},220),r()},s)})}idleTick(t){let e=[...this.people.values()].some(n=>n.state==="working");for(let n of this.people.values()){if(n.activity||n.locks||!n.seated||n.state==="working"||n.homeP||t<n.nextIdle||(n.nextIdle=t+(e?lc(25,55):lc(12,32)),this.queue.length||e&&Math.random()<.5))continue;if(n.energy!=null&&n.energy<25&&!e){this.emote(n,"\u{1F62A}"),this.runActivity(n,"coffee");continue}let s=Math.random();if([...this.people.values()].filter(o=>o.activity).length>=2&&s>=.38){n.person.doAction(Math.random()<.5?"stretch":"look",2600);continue}s<.22?n.person.doAction("stretch",2600):s<.38?n.person.doAction("look",3e3):s<.62?this.runActivity(n,"poi"):this.runActivity(n,"chat")}}async runActivity(t,e){let n={abort:!1};t.activity=n;try{if(e==="coffee"){if(!await this.walkTo(t,_o.cooler,!1)||n.abort)return;t.person.doAction("drink",2600),await this.say(t,bn(["C\xE0 ph\xEA ngon qu\xE1 \u2615","N\u1EA1p n\u0103ng l\u01B0\u1EE3ng th\xF4i! \u26A1","T\u1EC9nh c\u1EA3 ng\u01B0\u1EDDi \u{1F606}"]),"chat",2400),this.emote(t,"\u26A1"),this.opts.onStat&&this.opts.onStat(t.agent.id,"coffee");return}if(e==="chat"){let s=[...this.people.values()].filter(f=>f!==t&&f.seated&&!f.activity&&f.state!=="working"&&!f.locks);if(!s.length)return;let r=bn(s),o=t.slot.x<=r.slot.x?-1:1;if(!await this.walkTo(t,{x:r.slot.x+o*.62,z:r.slot.z+_e.d/2+.55,face:{x:r.seat.x,z:r.seat.z}},!1)||n.abort)return;let[l,c]=bn(By);if(await this.say(t,l,"chat",2200),n.abort)return;r.state!=="working"&&!r.locks&&await this.say(r,c,"chat",1800)}else{let s=bn(Object.keys(xf)),r=_o[s];if(!await this.walkTo(t,r,!1)||n.abort)return;let a=xf[s];if(s==="cooler"?(t.person.doAction("drink",2600),await this.say(t,a[0],"chat",2e3)):s==="plant"?(t.person.doAction("place",1800),await this.say(t,a[0],"chat",1900)):(t.person.doAction("look",2400),await this.say(t,a[0],"chat",2200)),n.abort)return;a[1]&&Math.random()<.6&&await this.say(t,a[1],"chat",1400)}}finally{t.activity===n&&(t.activity=null,!n.abort&&!t.seated&&await this.walkHome(t,!1))}}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t;for(let a of this.world.animated)a(e,t);let n=performance.now()/1e3;this.idleTick(n),this.cat.update(t,n),this.updateConfetti(t);for(let a of this.people.values()){let l=!1;if(a.path.length){let c=a.path[0],f=c.x-a.pos.x,h=c.z-a.pos.z,u=Math.hypot(f,h),m=a.speed*t;if(u<=m){if(a.pos.x=c.x,a.pos.z=c.z,a.path.shift(),!a.path.length&&(a.faceAfter&&(a.faceTo=a.faceAfter),a.moveRes)){let p=a.moveRes;a.moveRes=null,p(!0)}}else a.pos.x+=f/u*m,a.pos.z+=h/u*m;u>.001&&(a.facing=yf(a.facing,Math.atan2(f,h),1-Math.exp(-t*12))),l=a.path.length>0||u>m}else{let c=null;a.seated?c=0:a.faceTo&&(c=Math.atan2(a.faceTo.x-a.pos.x,a.faceTo.z-a.pos.z)),c!==null&&(a.facing=yf(a.facing,c,1-Math.exp(-t*8)))}a.danceUntil&&n<a.danceUntil&&!l&&(a.facing+=t*5),a.person.root.position.set(a.pos.x,0,a.pos.z),a.person.root.rotation.y=a.facing,a.person.animate(t,n,{moving:l,speed:a.speed,seated:a.seated&&!a.path.length,typing:a.seated&&a.state==="working"}),a.desk.state==="working"&&Math.floor(e*10)!==Math.floor((e-t)*10)&&vo(a.desk,e)}for(let a of[...this.flyers]){let l=Math.min(1,(performance.now()-a.t0)/a.ms),c=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;a.obj.position.lerpVectors(a.a,a.b,c),a.obj.position.y+=Math.sin(l*Math.PI)*1.4,a.obj.rotation.set(Math.sin(l*9)*.3,l*6,0),l>=1&&(this.scene.remove(a.obj),this.flyers.splice(this.flyers.indexOf(a),1),a.res())}let s=this.view,r=this.goal,o=1-Math.exp(-t*10);Math.abs(r.az-s.az)+Math.abs(r.el-s.el)+Math.abs(r.zoom-s.zoom)+s.target.distanceTo(r.target)>1e-4&&(s.az+=(r.az-s.az)*o,s.el+=(r.el-s.el)*o,s.zoom*=Math.exp((Math.log(r.zoom)-Math.log(s.zoom))*o),s.target.lerp(r.target,o),this.updateCamera()),this.renderer.render(this.scene,this.cam),this.placeDom()}project(t){let e=t.clone().project(this.cam);return{x:(e.x+1)/2*this.canvas.clientWidth,y:(1-e.y)/2*this.canvas.clientHeight}}positionBubble(t){let e=t._p,n=e.anchor||this.project(e.person.headWorld(this.tmpV)),s=n.y-(e.plateH||34)-10,r=this.canvas.clientWidth,o=Math.max(130,Math.min(r-130,n.x));t.style.transform=`translate(${o}px, ${s}px) translate(-50%, -100%)`,t.style.setProperty("--tail",n.x-o+"px")}placeDom(){for(let t of this.people.values()){let e=t.person.headWorld(this.tmpV);e.y+=.12;let n=this.project(e);t.anchor=n,t.plateH||(t.plateH=t.plate.offsetHeight||34);let s=Math.round(n.x*2)/2,r=Math.round(n.y*2)/2;(s!==t.tx||r!==t.ty)&&(t.tx=s,t.ty=r,t.plate.style.transform=`translate3d(${s}px, ${r}px, 0) translate(-50%, -100%)`,t.plate.style.zIndex=String(Math.round(r)))}if(this.bubbles)for(let t of this.bubbles)this.positionBubble(t);for(let t of this.emotes){if(t._get){let n=t._get();t.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%, -100%)`;continue}let e=t._p.anchor;e&&(t.style.transform=`translate(${e.x+26}px, ${e.y-(t._p.plateH||34)-4}px) translate(-50%, -100%)`)}}emote(t,e){let n=document.createElement("div");n.className="emote",n.textContent=e,n._p=t,this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}celebrate(t){let e=["#f5b54a","#5fd69a","#7cc4f5","#f07070","#b896f0","#ffffff"],n=new ie(.07,.04),s=new L(5.6,1,4.15),r=t&&this.people.get(t),o=[s];r&&o.push(new L(r.pos.x,1.6,r.pos.z));for(let a of o)for(let l=0;l<70;l++){let c=new q(n,new ee({color:e[l%e.length],side:ye}));c.position.copy(a);let f=Math.random()*Math.PI*2,h=1.2+Math.random()*2.2;c.userData={v:new L(Math.cos(f)*h*.6,3+Math.random()*2.5,Math.sin(f)*h*.6),r:new L(Math.random()*8,Math.random()*8,Math.random()*8),life:2.6+Math.random()},this.scene.add(c),this.confetti.push(c)}for(let a of this.people.values())a.state!=="working"&&setTimeout(()=>{a.person.doAction("cheer",2200),this.emote(a,bn(["\u{1F389}","\u{1F44F}","\u{1F973}","\u{1F64C}"]))},Math.random()*500)}updateConfetti(t){for(let e=this.confetti.length-1;e>=0;e--){let n=this.confetti[e],s=n.userData;s.v.y-=6.5*t,s.v.multiplyScalar(1-t*.9),n.position.addScaledVector(s.v,t),n.rotation.x+=s.r.x*t,n.rotation.y+=s.r.y*t,n.rotation.z+=s.r.z*t,n.position.y<.02&&(n.position.y=.02,s.v.set(0,0,0),s.r.set(0,0,0),n.rotation.set(-Math.PI/2,0,n.rotation.z)),s.life-=t,s.life<.6&&(n.material.opacity=Math.max(0,s.life/.6),n.material.transparent=!0),s.life<=0&&(this.scene.remove(n),n.material.dispose(),this.confetti.splice(e,1))}}applyDaylight(t){let e=new Date,n=t??e.getHours()+e.getMinutes()/60,s=n<5||n>19.5?0:n<7?(n-5)/2:n>17.5?(19.5-n)/2:1,r=Math.max(0,1-Math.abs(n-17.8)/1.6)+Math.max(0,1-Math.abs(n-6.2)/1.2),o=new $t("#ffe7c2").lerp(new $t("#ffae6b"),Math.min(1,r));this.sun.color.copy(o),this.sun.intensity=.25+1.85*s,this.hemi.intensity=.4+.45*s,this.hemi.color.set(s>.3?"#fff4e0":"#b9c4ff");let a=new $t("#1c2448").lerp(new $t("#ffffff"),s).lerp(new $t("#ffc59a"),Math.min(.6,r*(s>0?.6:0)));for(let c of this.world.skyMats||[])c.color.copy(a);let l=1-s;for(let c of this.world.lamps||[])c.light.intensity=l*6,c.bulbMat.emissiveIntensity=.2+l*2.2;this.world.dust&&(this.world.dust.material.opacity=.15+.45*s),this.renderer.toneMappingExposure=.95+.12*s}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),clearInterval(this.dayT),this.renderer.dispose(),this.wrap.remove()}};window.Office3D=cc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
