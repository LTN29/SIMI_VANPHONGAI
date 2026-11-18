(()=>{var jl="169";var iu=0,Ic=1,su=2;var Es=1,ru=2,Zn=3,fi=0,an=1,ge=2,Nn=0,is=1,jr=2,Lc=3,Dc=4,ou=5,bi=100,au=101,lu=102,cu=103,hu=104,fu=200,uu=201,du=202,pu=203,ba=204,Ta=205,mu=206,gu=207,yu=208,xu=209,_u=210,vu=211,Mu=212,Eu=213,wu=214,Ra=0,Aa=1,Ca=2,as=3,Pa=4,Ia=5,La=6,Da=7,kh=0,Su=1,bu=2,hi=0,Tu=1,Ru=2,Au=3,sr=4,Cu=5,Pu=6,Iu=7;var Gh=300,ls=301,cs=302,Ua=303,Na=304,Eo=306,Pn=1e3,Ai=1001,Ha=1002,on=1003,Lu=1004;var xr=1005;var An=1006,Vo=1007;var Ci=1008;var Jn=1009,Vh=1010,Wh=1011,Xs=1012,Ql=1013,Pi=1014,Un=1015,rr=1016,tc=1017,ec=1018,hs=1020,Xh=35902,qh=1021,Yh=1022,Cn=1023,Zh=1024,$h=1025,ss=1026,fs=1027,nc=1028,ic=1029,Jh=1030,sc=1031;var rc=1033,qr=33776,Yr=33777,Zr=33778,$r=33779,za=35840,Ba=35841,Fa=35842,Oa=35843,ka=36196,Ga=37492,Va=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,$a=37813,Ja=37814,Ka=37815,ja=37816,Qa=37817,tl=37818,el=37819,nl=37820,il=37821,Jr=36492,sl=36494,rl=36495,Kh=36283,ol=36284,al=36285,ll=36286;var Qr=2300,cl=2301,Wo=2302,Uc=2400,Nc=2401,Hc=2402;var Du=3200,Uu=3201;var jh=0,Nu=1,ci="",me="srgb",yi="srgb-linear",oc="display-p3",wo="display-p3-linear",to="linear",Se="srgb",eo="rec709",no="p3";var Oi=7680;var zc=519,Hu=512,zu=513,Bu=514,Qh=515,Fu=516,Ou=517,ku=518,Gu=519,Bc=35044,tf=35048;var Fc="300 es",$n=2e3,io=2001,ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xo=Math.PI/180,hl=180/Math.PI;function ws(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function Vu(i,t){return(i%t+t)%t}function qo(i,t,e){return(1-e)*i+e*t}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],u=s[6],x=s[1],_=s[4],M=s[7],T=s[2],w=s[5],b=s[8];return r[0]=o*v+a*x+l*T,r[3]=o*m+a*_+l*w,r[6]=o*u+a*M+l*b,r[1]=c*v+f*x+h*T,r[4]=c*m+f*_+h*w,r[7]=c*u+f*M+h*b,r[2]=d*v+p*x+g*T,r[5]=d*m+p*_+g*w,r[8]=d*u+p*M+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,d=a*l-f*r,p=c*r-o*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=h*v,t[1]=(s*c-f*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(f*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yo=new le;function ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wu(){let i=qs("canvas");return i.style.display="block",i}var Oc={};function Kr(i){i in Oc||(Oc[i]=!0,console.warn(i))}function Xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var kc=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gc=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[yi]:{transfer:to,primaries:eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[me]:{transfer:Se,primaries:eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wo]:{transfer:to,primaries:no,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Gc),fromReference:i=>i.applyMatrix3(kc)},[oc]:{transfer:Se,primaries:no,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gc),fromReference:i=>i.applyMatrix3(kc).convertLinearToSRGB()}},Zu=new Set([yi,wo]),pe={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ls[t].toReference,s=Ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===ci?to:Ls[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ls[t].luminanceCoefficients)}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=qs("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$u=0,so=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ju=0,tn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=An,o=Ci,a=Cn,l=Jn,c=i.DEFAULT_ANISOTROPY,f=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ws(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Gh;tn.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(p+1)/2,T=(u+1)/2,w=(f+d)/4,b=(h+v)/4,I=(g+m)/4;return _>M&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=b/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=b/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(d-f)/x,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new so(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ro=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==p||f!==g){let m=1-a,u=l*d+c*p+f*g+h*v,x=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let T=Math.sqrt(_),w=Math.atan2(T,u*x);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}let M=a*x;if(l=l*m+d*M,c=c*m+p*M,f=f*m+g*M,h=h*m+v*M,m===1-a){let T=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=T,c*=T,f*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+f*h+l*p-c*d,t[e+1]=l*g+f*d+c*h-a*p,t[e+2]=c*g+f*p+a*d-l*h,t[e+3]=f*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"YXZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"ZXY":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"ZYX":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"YZX":this._x=d*f*h+c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h-d*p*g;break;case"XZY":this._x=d*f*h-c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,d=Math.sin(e*f)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new L,Vc=new en,jn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),vr.subVectors(this.max,Ds),Gi.subVectors(t.a,Ds),Vi.subVectors(t.b,Ds),Wi.subVectors(t.c,Ds),ii.subVectors(Vi,Gi),si.subVectors(Wi,Vi),xi.subVectors(Gi,Wi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-xi.z,xi.y,ii.z,0,-ii.x,si.z,0,-si.x,xi.z,0,-xi.x,-ii.y,ii.x,0,-si.y,si.x,0,-xi.y,xi.x,0];return!Ko(e,Gi,Vi,Wi,vr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Gi,Vi,Wi,vr))?!1:(Mr.crossVectors(ii,si),e=[Mr.x,Mr.y,Mr.z],Ko(e,Gi,Vi,Wi,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,_r=new jn,Gi=new L,Vi=new L,Wi=new L,ii=new L,si=new L,xi=new L,Ds=new L,vr=new L,Mr=new L,_i=new L;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);let a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),f=n.dot(_i);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Ku=new jn,Us=new L,jo=new L,Hn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(jo)),this.expandByPoint(Us.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new L,Qo=new L,Er=new L,ri=new L,ta=new L,wr=new L,ea=new L,Ys=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qo.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Qo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=ri.dot(this.direction),l=-ri.dot(Er),c=ri.lengthSq(),f=Math.abs(1-o*o),h,d,p,g;if(f>0)if(h=o*l-a,d=o*a-l,g=r*f,h>=0)if(d>=-g)if(d<=g){let v=1/f;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qo).addScaledVector(Er,d),p}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),f>=0?(r=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),wr.subVectors(n,t),ea.crossVectors(ta,wr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(wr.crossVectors(ri,wr));if(l<0)return null;let c=a*this.direction.dot(ta.cross(ri));if(c<0||l+c>o)return null;let f=-a*ri.dot(ea);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,o,a,l,c,f,h,d,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,f,h,d,p,g,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*f,p=o*h,g=a*f,v=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*f,p=l*h,g=c*f,v=c*h;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*f,p=l*h,g=c*f,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*f,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*f,p=o*h,g=a*f,v=a*h;e[0]=l*f,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*f,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=d*h+v,e[5]=o*f,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*f,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Qu)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),oi.crossVectors(n,fn),oi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),oi.crossVectors(n,fn)),oi.normalize(),Sr.crossVectors(fn,oi),s[0]=oi.x,s[4]=Sr.x,s[8]=fn.x,s[1]=oi.y,s[5]=Sr.y,s[9]=fn.y,s[2]=oi.z,s[6]=Sr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],x=n[3],_=n[7],M=n[11],T=n[15],w=s[0],b=s[4],I=s[8],U=s[12],y=s[1],E=s[5],N=s[9],H=s[13],P=s[2],G=s[6],z=s[10],it=s[14],X=s[3],Z=s[7],ot=s[11],lt=s[15];return r[0]=o*w+a*y+l*P+c*X,r[4]=o*b+a*E+l*G+c*Z,r[8]=o*I+a*N+l*z+c*ot,r[12]=o*U+a*H+l*it+c*lt,r[1]=f*w+h*y+d*P+p*X,r[5]=f*b+h*E+d*G+p*Z,r[9]=f*I+h*N+d*z+p*ot,r[13]=f*U+h*H+d*it+p*lt,r[2]=g*w+v*y+m*P+u*X,r[6]=g*b+v*E+m*G+u*Z,r[10]=g*I+v*N+m*z+u*ot,r[14]=g*U+v*H+m*it+u*lt,r[3]=x*w+_*y+M*P+T*X,r[7]=x*b+_*E+M*G+T*Z,r[11]=x*I+_*N+M*z+T*ot,r[15]=x*U+_*H+M*it+T*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*f-r*l*f)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*f-n*c*f)+u*(-s*a*f-e*l*h+e*a*d+s*o*h-n*o*d+n*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],x=h*m*c-v*d*c+v*l*p-a*m*p-h*l*u+a*d*u,_=g*d*c-f*m*c-g*l*p+o*m*p+f*l*u-o*d*u,M=f*v*c-g*h*c+g*a*p-o*v*p-f*a*u+o*h*u,T=g*h*l-f*v*l-g*a*d+o*v*d+f*a*m-o*h*m,w=e*x+n*_+s*M+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/w;return t[0]=x*b,t[1]=(v*d*r-h*m*r-v*s*p+n*m*p+h*s*u-n*d*u)*b,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*u+n*l*u)*b,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*b,t[4]=_*b,t[5]=(f*m*r-g*d*r+g*s*p-e*m*p-f*s*u+e*d*u)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*u-e*l*u)*b,t[7]=(o*d*r-f*l*r+f*s*c-e*d*c-o*s*p+e*l*p)*b,t[8]=M*b,t[9]=(g*h*r-f*v*r-g*n*p+e*v*p+f*n*u-e*h*u)*b,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*u+e*a*u)*b,t[11]=(f*a*r-o*h*r-f*n*c+e*h*c+o*n*p-e*a*p)*b,t[12]=T*b,t[13]=(f*v*s-g*h*s+g*n*d-e*v*d-f*n*m+e*h*m)*b,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*b,t[15]=(o*h*s-f*a*s+f*n*l-e*h*l-o*n*d+e*a*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,d=r*c,p=r*f,g=r*h,v=o*f,m=o*h,u=a*h,x=l*c,_=l*f,M=l*h,T=n.x,w=n.y,b=n.z;return s[0]=(1-(v+u))*T,s[1]=(p+M)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(d+u))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+_)*b,s[9]=(m-x)*b,s[10]=(1-(d+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let c=1/r,f=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=f,bn.elements[5]*=f,bn.elements[6]*=f,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=$n){let l=this.elements,c=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===$n)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===io)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n){let l=this.elements,c=1/(e-t),f=1/(n-s),h=1/(o-r),d=(e+t)*c,p=(n+s)*f,g,v;if(a===$n)g=(o+r)*h,v=-2*h;else if(a===io)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new L,bn=new te,ju=new L(0,0,0),Qu=new L(1,1,1),oi=new L,Sr=new L,fn=new L,Wc=new te,Xc=new en,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},td=0,qc=new L,qi=new en,Xn=new te,br=new L,Ns=new L,ed=new L,nd=new en,Yc=new L(1,0,0),Zc=new L(0,1,0),$c=new L(0,0,1),Jc={type:"added"},id={type:"removed"},Yi={type:"childadded",child:null},na={type:"childremoved",child:null},Ne=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new nn,n=new en,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new le}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ns,br,this.up):Xn.lookAt(br,Ns,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Xn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new L,qn=new L,ia=new L,Yn=new L,Zi=new L,$i=new L,Kc=new L,sa=new L,ra=new L,oa=new L,aa=new Me,la=new Me,ca=new Me,Ti=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),qn.subVectors(n,e),ia.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(qn),l=Tn.dot(ia),c=qn.dot(qn),f=qn.dot(ia),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*f)*d,g=(o*f-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),qn.subVectors(t,e),Tn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),$i.subVectors(r,n),sa.subVectors(t,n);let l=Zi.dot(sa),c=$i.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let f=Zi.dot(ra),h=$i.dot(ra);if(f>=0&&h<=f)return e.copy(s);let d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Zi,o);oa.subVectors(t,r);let p=Zi.dot(oa),g=$i.dot(oa);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);let m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return Kc.subVectors(r,s),a=(h-f)/(h-f+(p-g)),e.copy(s).addScaledVector(Kc,a);let u=1/(m+v+d);return o=v*u,a=d*u,e.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Vu(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return pe.fromWorkingColorSpace(Ke.copy(this),t),Math.round($e(Ke.r*255,0,255))*65536+Math.round($e(Ke.g*255,0,255))*256+Math.round($e(Ke.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=me){pe.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Tr);let n=qo(ai.h,Tr.h,e),s=qo(ai.s,Tr.s,e),r=qo(ai.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Yt;Yt.NAMES=nf;var sd=0,di=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=is,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ta,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},se=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new L,Rr=new Tt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}};var oo=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},rd=0,_n=new te,fa=new Ne,Ji=new L,un=new jn,Hs=new jn,We=new L,Re=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?ao:oo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(un.min,Hs.min),un.expandByPoint(We),We.addVectors(un.max,Hs.max),un.expandByPoint(We)):(un.expandByPoint(Hs.min),un.expandByPoint(Hs.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)We.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),We.add(Ji)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let c=new L,f=new L,h=new L,d=new Tt,p=new Tt,g=new Tt,v=new L,m=new L;function u(I,U,y){c.fromBufferAttribute(n,I),f.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,U),g.fromBufferAttribute(r,y),f.sub(c),h.sub(c),p.sub(d),g.sub(d);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(E),a[I].add(v),a[U].add(v),a[y].add(v),l[I].add(m),l[U].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,U=x.length;I<U;++I){let y=x[I],E=y.start,N=y.count;for(let H=E,P=E+N;H<P;H+=3)u(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let _=new L,M=new L,T=new L,w=new L;function b(I){T.fromBufferAttribute(s,I),w.copy(T);let U=a[I];_.copy(U),_.sub(T.multiplyScalar(T.dot(U))).normalize(),M.crossVectors(w,U);let E=M.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,E)}for(let I=0,U=x.length;I<U;++I){let y=x[I],E=y.start,N=y.count;for(let H=E,P=E+N;H<P;H+=3)b(t.getX(H+0)),b(t.getX(H+1)),b(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,f=new L,h=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let u=0;u<f;u++)d[g++]=c[p++]}return new Ie(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let d=c[f],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jc=new te,vi=new Ys,Ar=new Hn,Qc=new L,Cr=new L,Pr=new L,Ir=new L,ua=new L,Lr=new L,th=new L,Dr=new L,O=class extends Ne{constructor(t=new Re,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(ua.fromBufferAttribute(h,t),o?Lr.addScaledVector(ua,f):Lr.addScaledVector(ua.sub(e),f))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Ar.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Ar,Qc)===null||vi.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(jc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,T=_;M<T;M+=3){let w=a.getX(M),b=a.getX(M+1),I=a.getX(M+2);s=Ur(this,u,t,n,c,f,h,w,b,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){let x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Ur(this,o,t,n,c,f,h,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,T=_;M<T;M+=3){let w=M,b=M+1,I=M+2;s=Ur(this,u,t,n,c,f,h,w,b,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){let x=m,_=m+1,M=m+2;s=Ur(this,o,t,n,c,f,h,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function od(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===fi,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Ir);let f=od(i,t,e,n,Cr,Pr,Ir,th);if(f){let h=new L;Ti.getBarycoord(th,Cr,Pr,Ir,h),s&&(f.uv=Ti.getInterpolatedAttribute(s,a,l,c,h,new Tt)),r&&(f.uv1=Ti.getInterpolatedAttribute(r,a,l,c,h,new Tt)),o&&(f.normal=Ti.getInterpolatedAttribute(o,a,l,c,h,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Ti.getNormal(Cr,Pr,Ir,d.normal),f.face=d,f.barycoord=h}return f}var Mt=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(h,2));function g(v,m,u,x,_,M,T,w,b,I,U){let y=M/b,E=T/I,N=M/2,H=T/2,P=w/2,G=b+1,z=I+1,it=0,X=0,Z=new L;for(let ot=0;ot<z;ot++){let lt=ot*E-H;for(let Ct=0;Ct<G;Ct++){let Ut=Ct*y-N;Z[v]=Ut*x,Z[m]=lt*_,Z[u]=P,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[u]=w>0?1:-1,f.push(Z.x,Z.y,Z.z),h.push(Ct/b),h.push(1-ot/I),it+=1}}for(let ot=0;ot<I;ot++)for(let lt=0;lt<b;lt++){let Ct=d+lt+G*ot,Ut=d+lt+G*(ot+1),Q=d+(lt+1)+G*(ot+1),ht=d+(lt+1)+G*ot;l.push(Ct,Ut,ht),l.push(Ut,Q,ht),X+=6}a.addGroup(p,X,U),p+=X,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function ad(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var ld={clone:us,merge:Qe},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lo=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new L,eh=new Tt,nh=new Tt,je=class extends lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,ji=1,pl=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Ki,ji,t,e);s.layers=this.layers,this.add(s);let r=new je(Ki,ji,t,e);r.layers=this.layers,this.add(r);let o=new je(Ki,ji,t,e);o.layers=this.layers,this.add(o);let a=new je(Ki,ji,t,e);a.layers=this.layers,this.add(a);let l=new je(Ki,ji,t,e);l.layers=this.layers,this.add(l);let c=new je(Ki,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},co=class extends tn{constructor(t,e,n,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ml=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Nn});r.uniforms.tEquirect.value=e;let o=new O(s,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=An),new pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},da=new L,fd=new L,ud=new le,Rn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=da.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new Hn,Nr=new L,Ii=class{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],u=s[12],x=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-u).normalize(),n[1].setComponents(l+r,d+c,m+p,M+u).normalize(),n[2].setComponents(l+o,d+f,m+g,M+x).normalize(),n[3].setComponents(l-o,d-f,m-g,M-x).normalize(),n[4].setComponents(l-a,d-h,m-v,M-_).normalize(),e===$n)n[5].setComponents(l+a,d+h,m+v,M+_).normalize();else if(e===io)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ne=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let u=0;u<f;u++){let x=u*d-o;for(let _=0;_<c;_++){let M=_*h-r;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){let _=x+c*u,M=x+c*(u+1),T=x+1+c*(u+1),w=x+1+c*u;p.push(_,M,w),p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`
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
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,O0=`#define TOON
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
}`,k0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:yd,alphatest_fragment:xd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:Md,batching_pars_vertex:Ed,batching_vertex:wd,begin_vertex:Sd,beginnormal_vertex:bd,bsdfs:Td,iridescence_fragment:Rd,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Hd,common:zd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:kd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Zd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:op,envmap_vertex:Jd,fog_vertex:Kd,fog_pars_vertex:jd,fog_fragment:Qd,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:fp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:Ep,map_particle_pars_fragment:wp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Tp,morphcolor_vertex:Rp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:kp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Jp,shadowmap_vertex:Kp,shadowmask_pars_fragment:jp,skinbase_vertex:Qp,skinning_pars_vertex:t0,skinning_vertex:e0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:o0,transmission_fragment:a0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:f0,worldpos_vertex:u0,background_vert:d0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:y0,cube_frag:x0,depth_vert:_0,depth_frag:v0,distanceRGBA_vert:M0,distanceRGBA_frag:E0,equirect_vert:w0,equirect_frag:S0,linedashed_vert:b0,linedashed_frag:T0,meshbasic_vert:R0,meshbasic_frag:A0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:I0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:U0,meshphong_vert:N0,meshphong_frag:H0,meshphysical_vert:z0,meshphysical_frag:B0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:k0,points_frag:G0,shadow_vert:V0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},It={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Dn={basic:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Qe([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Qe([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Qe([It.points,It.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Qe([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Qe([It.common,It.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Qe([It.sprite,It.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Qe([It.common,It.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Qe([It.lights,It.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Dn.physical={uniforms:Qe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Hr={r:0,b:0,g:0},Ei=new nn,Y0=new te;function Z0(i,t,e,n,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,f,h=null,d=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1,M=g(x);M===null?u(a,l):M&&M.isColor&&(u(M,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===Eo)?(f===void 0&&(f=new O(new Mt(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:us(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Ei.copy(_.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(Ei)),f.material.toneMapped=pe.getTransfer(M.colorSpace)!==Se,(h!==M||d!==M.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new O(new ne(2,2),new zn({name:"BackgroundMaterial",uniforms:us(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=pe.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,_){x.getRGB(Hr,sf(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:v,addToRenderList:m}}function $0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,E,N,H,P){let G=!1,z=h(H,N,E);r!==z&&(r=z,c(r.object)),G=p(y,H,N,P),G&&g(y,H,N,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(y,E,N,H),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function h(y,E,N){let H=N.wireframe===!0,P=n[y.id];P===void 0&&(P={},n[y.id]=P);let G=P[E.id];G===void 0&&(G={},P[E.id]=G);let z=G[H];return z===void 0&&(z=d(l()),G[H]=z),z}function d(y){let E=[],N=[],H=[];for(let P=0;P<e;P++)E[P]=0,N[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,E,N,H){let P=r.attributes,G=E.attributes,z=0,it=N.getAttributes();for(let X in it)if(it[X].location>=0){let ot=P[X],lt=G[X];if(lt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),ot===void 0||ot.attribute!==lt||lt&&ot.data!==lt.data)return!0;z++}return r.attributesNum!==z||r.index!==H}function g(y,E,N,H){let P={},G=E.attributes,z=0,it=N.getAttributes();for(let X in it)if(it[X].location>=0){let ot=G[X];ot===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));let lt={};lt.attribute=ot,ot&&ot.data&&(lt.data=ot.data),P[X]=lt,z++}r.attributes=P,r.attributesNum=z,r.index=H}function v(){let y=r.newAttributes;for(let E=0,N=y.length;E<N;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){let N=r.newAttributes,H=r.enabledAttributes,P=r.attributeDivisors;N[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),P[y]!==E&&(i.vertexAttribDivisor(y,E),P[y]=E)}function x(){let y=r.newAttributes,E=r.enabledAttributes;for(let N=0,H=E.length;N<H;N++)E[N]!==y[N]&&(i.disableVertexAttribArray(N),E[N]=0)}function _(y,E,N,H,P,G,z){z===!0?i.vertexAttribIPointer(y,E,N,P,G):i.vertexAttribPointer(y,E,N,H,P,G)}function M(y,E,N,H){v();let P=H.attributes,G=N.getAttributes(),z=E.defaultAttributeValues;for(let it in G){let X=G[it];if(X.location>=0){let Z=P[it];if(Z===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let ot=Z.normalized,lt=Z.itemSize,Ct=t.get(Z);if(Ct===void 0)continue;let Ut=Ct.buffer,Q=Ct.type,ht=Ct.bytesPerElement,gt=Q===i.INT||Q===i.UNSIGNED_INT||Z.gpuType===Ql;if(Z.isInterleavedBufferAttribute){let vt=Z.data,Ht=vt.stride,Ot=Z.offset;if(vt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<X.locationSize;Jt++)u(X.location+Jt,vt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Jt=0;Jt<X.locationSize;Jt++)m(X.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Jt=0;Jt<X.locationSize;Jt++)_(X.location+Jt,lt/X.locationSize,Q,ot,Ht*ht,(Ot+lt/X.locationSize*Jt)*ht,gt)}else{if(Z.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)u(X.location+vt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let vt=0;vt<X.locationSize;vt++)m(X.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let vt=0;vt<X.locationSize;vt++)_(X.location+vt,lt/X.locationSize,Q,ot,lt*ht,lt/X.locationSize*vt*ht,gt)}}else if(z!==void 0){let ot=z[it];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(X.location,ot);break;case 3:i.vertexAttrib3fv(X.location,ot);break;case 4:i.vertexAttrib4fv(X.location,ot);break;default:i.vertexAttrib1fv(X.location,ot)}}}}x()}function T(){I();for(let y in n){let E=n[y];for(let N in E){let H=E[N];for(let P in H)f(H[P].object),delete H[P];delete E[N]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let N in E){let H=E[N];for(let P in H)f(H[P].object),delete H[P];delete E[N]}delete n[y.id]}function b(y){for(let E in n){let N=n[E];if(N[y.id]===void 0)continue;let H=N[y.id];for(let P in H)f(H[P].object),delete H[P];delete N[y.id]}}function I(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function J0(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];e.update(p,n,1)}function l(c,f,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,f,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function K0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Cn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let I=b===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Jn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Un&&!I)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:T,maxSamples:w}}function j0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Rn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=f(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{let x=r?0:n,_=x*4,M=u.clippingState||null;l.value=M,M=f(g,d,_,p);for(let T=0;T!==_;++T)M[T]=e[T];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,d,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,M=p;_!==v;++_,M+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Q0(i){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=ls:a===Na&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ua||a===Na)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ml(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var pi=class extends lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,ih=[.125,.215,.35,.446,.526,.582],Ri=20,pa=new pi,sh=new Yt,ma=null,ga=0,ya=0,xa=!1,Si=(1+Math.sqrt(5))/2,Qi=1/Si,rh=[new L(-Si,Qi,0),new L(Si,Qi,0),new L(-Qi,0,Si),new L(Qi,0,Si),new L(0,Si,-Qi),new L(0,Si,Qi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ho=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,ya),this._renderer.xr.enabled=xa,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:rr,format:Cn,colorSpace:yi,depthBuffer:!1},s=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return s}_compileMaterial(t){let e=new O(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let a=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(sh),f.toneMapping=hi,f.autoClear=!1;let p=new se({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new O(new Mt,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(sh),v=!0);for(let u=0;u<6;u++){let x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let _=this._cubeSize;zr(s,x*_,u>2?_:0,_,_),f.setRenderTarget(s),v&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rh[(s-r-1)%rh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new O(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),v=r/g,m=isFinite(r)?1+Math.floor(f*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let u=[],x=0;for(let b=0;b<Ri;++b){let I=b/v,U=Math.exp(-I*I/2);u.push(U),b===0?x+=U:b<m&&(x+=2*U)}for(let b=0;b<u.length;b++)u[b]=u[b]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let M=this._sizeLods[s],T=3*M*(s>_-es?s-_+es:0),w=4*(this._cubeSize-M);zr(e,T,w,3*M,2*M),l.setRenderTarget(e),l.render(h,pa)}};function tm(i){let t=[],e=[],n=[],s=i,r=i-es+1+ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-es?l=ih[o-i+es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,v=3,m=2,u=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let w=0;w<p;w++){let b=w%3*2/3-1,I=w>2?0:-1,U=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];x.set(U,v*g*w),_.set(d,m*g*w);let y=[w,w,w,w,w,w];M.set(y,u*g*w)}let T=new Re;T.setAttribute("position",new Ie(x,v)),T.setAttribute("uv",new Ie(_,m)),T.setAttribute("faceIndex",new Ie(M,u)),t.push(T),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(i,t,e){let n=new Kn(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){let n=new Float32Array(Ri),s=new L(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ah(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function lh(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ua||l===Na,f=l===ls||l===cs;if(c||f){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ho(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new ho(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function im(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let x=p.array;v=p.version;for(let _=0,M=x.length;_<M;_+=3){let T=x[_+0],w=x[_+1],b=x[_+2];d.push(T,w,w,b,b,T)}}else if(g!==void 0){let x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){let T=_+0,w=_+1,b=_+2;d.push(T,w,w,b,b,T)}}else return;let m=new(ef(d)?ao:oo)(d,1);m.version=v;let u=r.get(h);u&&t.remove(u),r.set(h,m)}function f(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function rm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function f(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function h(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let u=0;for(let x=0;x<g;x++)u+=p[x];for(let x=0;x<v.length;x++)e.update(u,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function om(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function am(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,d=n.get(a);if(d===void 0||d.count!==h){let U=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=a.attributes.position.count*_,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*h),b=new ro(w,M,T,h);b.type=Un,b.needsUpdate=!0;let I=_*4;for(let y=0;y<h;y++){let E=m[y],N=u[y],H=x[y],P=M*T*4*y;for(let G=0;G<E.count;G++){let z=G*I;p===!0&&(s.fromBufferAttribute(E,G),w[P+z+0]=s.x,w[P+z+1]=s.y,w[P+z+2]=s.z,w[P+z+3]=0),g===!0&&(s.fromBufferAttribute(N,G),w[P+z+4]=s.x,w[P+z+5]=s.y,w[P+z+6]=s.z,w[P+z+7]=0),v===!0&&(s.fromBufferAttribute(H,G),w[P+z+8]=s.x,w[P+z+9]=s.y,w[P+z+10]=s.z,w[P+z+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new Tt(M,T)},n.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var fo=class extends tn{constructor(t,e,n,s,r,o,a,l,c,f=ss){if(f!==ss&&f!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ss&&(n=Pi),n===void 0&&f===fs&&(n=hs),super(null,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},of=new tn,ch=new fo(1,1),af=new ro,lf=new dl,cf=new co,hh=[],fh=[],uh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function Ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Fe(e,n)}}function pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;dh.set(n),i.uniformMatrix3fv(this.addr,!1,dh),Fe(e,n)}}function mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),Fe(e,n)}}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=Qh,r=ch):r=of,e.setTexture2D(t||r,s)}function bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lf,s)}function Tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cf,s)}function Rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||af,s)}function Am(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return fm;case 35666:return um;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return ym;case 35668:case 35672:return xm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return Mm;case 36295:return Em;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){let e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){let e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Lm(i,t){let e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Dm(i,t){let e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){let e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){let e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hm(i,t){i.uniform1iv(this.addr,t)}function zm(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function Fm(i,t){i.uniform4iv(this.addr,t)}function Om(i,t){i.uniform1uiv(this.addr,t)}function km(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||of,r[o])}function Xm(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lf,r[o])}function qm(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cf,r[o])}function Ym(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||af,r[o])}function Zm(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Hm;case 35667:case 35671:return zm;case 35668:case 35672:return Bm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return km;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}var gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Am(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}},xl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function mh(i,t){i.seq.push(t),i.map[t.id]=t}function $m(i,t,e){let n=i.name,s=n.length;for(_a.lastIndex=0;;){let r=_a.exec(n),o=_a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mh(e,c===void 0?new gl(a,i,t):new yl(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new xl(a),mh(e,h)),e=h}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$m(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jm=37297,Km=0;function jm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Qm(i){let t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(i),n;switch(t===e?n="":t===no&&e===eo?n="LinearDisplayP3ToLinearSRGB":t===eo&&e===no&&(n="LinearSRGBToLinearDisplayP3"),i){case yi:case wo:return[n,"LinearTransferOETF"];case me:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jm(i.getShaderSource(t),o)}else return s}function tg(i,t){let e=Qm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function eg(i,t){let e;switch(t){case Tu:e="Linear";break;case Ru:e="Reinhard";break;case Au:e="Cineon";break;case sr:e="ACESFilmic";break;case Pu:e="AgX";break;case Iu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Br=new L;function ng(){pe.getLuminanceCoefficients(Br);let i=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function sg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function xh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(og,lg)}var ag=new Map;function lg(i,t){let e=ae[t];if(e===void 0){let n=ag.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}var cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(cg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Es?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kh:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function mg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fg(e),c=ug(e),f=dg(e),h=pg(e),d=mg(e),p=ig(e),g=sg(r),v=s.createProgram(),m,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),u.length>0&&(u+=`
`)):(m=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),u=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?ae.tonemapping_pars_fragment:"",e.toneMapping!==hi?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=_l(o),o=xh(o,e),o=_h(o,e),a=_l(a),a=xh(a,e),a=_h(a,e),o=vh(o),a=vh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=x+m+o,M=x+u+a,T=gh(s,s.VERTEX_SHADER,_),w=gh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(E){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(T).trim(),P=s.getShaderInfoLog(w).trim(),G=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{let it=yh(s,T,"vertex"),X=yh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+it+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||P==="")&&(z=!1);z&&(E.diagnostics={runnable:G,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:P,prefix:u}})}s.deleteShader(T),s.deleteShader(w),I=new os(s,v),U=rg(s,v)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Jm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}var yg=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ml(t),e.set(t,n)),n}},Ml=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function xg(i,t,e,n,s,r,o){let a=new Zs,l=new vl,c=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,N,H,P){let G=H.fog,z=P.geometry,it=y.isMeshStandardMaterial?H.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||it),Z=X&&X.mapping===Eo?X.image.height:null,ot=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ct=lt!==void 0?lt.length:0,Ut=0;z.morphAttributes.position!==void 0&&(Ut=1),z.morphAttributes.normal!==void 0&&(Ut=2),z.morphAttributes.color!==void 0&&(Ut=3);let Q,ht,gt,vt;if(ot){let ye=Dn[ot];Q=ye.vertexShader,ht=ye.fragmentShader}else Q=y.vertexShader,ht=y.fragmentShader,l.update(y),gt=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);let Ht=i.getRenderTarget(),Ot=P.isInstancedMesh===!0,Jt=P.isBatchedMesh===!0,jt=!!y.map,ut=!!y.matcap,C=!!X,St=!!y.aoMap,q=!!y.lightMap,$=!!y.bumpMap,ct=!!y.normalMap,mt=!!y.displacementMap,yt=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,W=y.anisotropy>0,st=y.clearcoat>0,at=y.dispersion>0,tt=y.iridescence>0,Pt=y.sheen>0,bt=y.transmission>0,Lt=W&&!!y.anisotropyMap,oe=st&&!!y.clearcoatMap,pt=st&&!!y.clearcoatNormalMap,F=st&&!!y.clearcoatRoughnessMap,rt=tt&&!!y.iridescenceMap,xt=tt&&!!y.iridescenceThicknessMap,_t=Pt&&!!y.sheenColorMap,zt=Pt&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,Qt=!!y.specularColorMap,B=!!y.specularIntensityMap,Et=bt&&!!y.transmissionMap,et=bt&&!!y.thicknessMap,dt=!!y.gradientMap,nt=!!y.alphaMap,J=y.alphaTest>0,wt=!!y.alphaHash,$t=!!y.extensions,re=hi;y.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(re=i.toneMapping);let Kt={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:ht,defines:y.defines,customVertexShaderID:gt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&P._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&P.instanceColor!==null,instancingMorph:Ot&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ht===null?i.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:yi,alphaToCoverage:!!y.alphaToCoverage,map:jt,matcap:ut,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:Z,aoMap:St,lightMap:q,bumpMap:$,normalMap:ct,displacementMap:p&&mt,emissiveMap:yt,normalMapObjectSpace:ct&&y.normalMapType===Nu,normalMapTangentSpace:ct&&y.normalMapType===jh,metalnessMap:A,roughnessMap:S,anisotropy:W,anisotropyMap:Lt,clearcoat:st,clearcoatMap:oe,clearcoatNormalMap:pt,clearcoatRoughnessMap:F,dispersion:at,iridescence:tt,iridescenceMap:rt,iridescenceThicknessMap:xt,sheen:Pt,sheenColorMap:_t,sheenRoughnessMap:zt,specularMap:Ft,specularColorMap:Qt,specularIntensityMap:B,transmission:bt,transmissionMap:Et,thicknessMap:et,gradientMap:dt,opaque:y.transparent===!1&&y.blending===is&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:J,alphaHash:wt,combine:y.combine,mapUv:jt&&m(y.map.channel),aoMapUv:St&&m(y.aoMap.channel),lightMapUv:q&&m(y.lightMap.channel),bumpMapUv:$&&m(y.bumpMap.channel),normalMapUv:ct&&m(y.normalMap.channel),displacementMapUv:mt&&m(y.displacementMap.channel),emissiveMapUv:yt&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:Lt&&m(y.anisotropyMap.channel),clearcoatMapUv:oe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:zt&&m(y.sheenRoughnessMap.channel),specularMapUv:Ft&&m(y.specularMap.channel),specularColorMapUv:Qt&&m(y.specularColorMap.channel),specularIntensityMapUv:B&&m(y.specularIntensityMap.channel),transmissionMapUv:Et&&m(y.transmissionMap.channel),thicknessMapUv:et&&m(y.thicknessMap.channel),alphaMapUv:nt&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ct||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(jt||nt),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:jt&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ge,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function x(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(E,y),M(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function T(y){let E=v[y.type],N;if(E){let H=Dn[E];N=ld.clone(H.uniforms)}else N=y.uniforms;return N}function w(y,E){let N;for(let H=0,P=f.length;H<P;H++){let G=f[H];if(G.cacheKey===E){N=G,++N.usedTimes;break}}return N===void 0&&(N=new gg(i,E,y,r),f.push(N)),N}function b(y){if(--y.usedTimes===0){let E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function I(y){l.remove(y)}function U(){l.dispose()}return{getParameters:u,getProgramCacheKey:x,getUniforms:T,acquireProgram:w,releaseProgram:b,releaseShaderCache:I,programs:f,dispose:U}}function _g(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,v,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=m),t++,u}function a(h,d,p,g,v,m){let u=o(h,d,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(h,d,p,g,v,m){let u=o(h,d,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,d){e.length>1&&e.sort(h||vg),n.length>1&&n.sort(d||Eh),s.length>1&&s.sort(d||Eh)}function f(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function Mg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new wh,i.set(n,[o])):s>=r.length?(o=new wh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Yt};break;case"SpotLight":e={position:new L,direction:new L,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sg=0;function bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tg(i){let t=new Eg,e=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new te,o=new te;function a(c){let f=0,h=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,x=0,_=0,M=0,T=0,w=0,b=0;c.sort(bg);for(let U=0,y=c.length;U<y;U++){let E=c[U],N=E.color,H=E.intensity,P=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=N.r*H,h+=N.g*H,d+=N.b*H;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],H);b++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let it=E.shadow,X=e.get(E);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=E.shadow.matrix,x++}n.directional[p]=z,p++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(N).multiplyScalar(H),z.distance=P,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[v]=z;let it=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,it.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[v]=it.matrix,E.castShadow){let X=e.get(E);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=G,M++}v++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(N).multiplyScalar(H),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=z,m++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let it=E.shadow,X=e.get(E);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=E.shadow.matrix,_++}n.point[g]=z,g++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(H),z.groundColor.copy(E.groundColor).multiplyScalar(H),n.hemi[u]=z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==T||I.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=T,I.numLightProbes=b,n.version=Sg++)}function l(c,f){let h=0,d=0,p=0,g=0,v=0,m=f.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){let _=c[u];if(_.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(_.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Sh(i){let t=new Tg(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sh(i),t.set(s,[a])):r>=o.length?(a=new Sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var El=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wl=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new Ii,s=new Tt,r=new Tt,o=new Me,a=new El({depthPacking:Uu}),l=new wl,c={},f=e.maxTextureSize,h={[fi]:an,[an]:fi,[ge]:ge},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Ag,fragmentShader:Cg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new O(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let u=this.type;this.render=function(w,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let U=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=u!==Zn&&this.type===Zn,P=u===Zn&&this.type!==Zn;for(let G=0,z=w.length;G<z;G++){let it=w[G],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let Z=X.getFrameExtents();if(s.multiply(Z),r.copy(X.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Z.x),s.x=r.x*Z.x,X.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Z.y),s.y=r.y*Z.y,X.mapSize.y=r.y)),X.map===null||H===!0||P===!0){let lt=this.type!==Zn?{minFilter:on,magFilter:on}:{};X.map!==null&&X.map.dispose(),X.map=new Kn(s.x,s.y,lt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ot=X.getViewportCount();for(let lt=0;lt<ot;lt++){let Ct=X.getViewport(lt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),N.viewport(o),X.updateMatrices(it,lt),n=X.getFrustum(),M(b,I,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===Zn&&x(X,I),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,y,E)};function x(w,b){let I=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,I,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,I,p,v,null)}function _(w,b,I,U){let y=null,E=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)y=E;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=y.uuid,H=b.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let G=P[H];G===void 0&&(G=y.clone(),P[H]=G,b.addEventListener("dispose",T)),y=G}if(y.visible=b.visible,y.wireframe=b.wireframe,U===Zn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=I}return y}function M(w,b,I,U,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let H=t.update(w),P=w.material;if(Array.isArray(P)){let G=H.groups;for(let z=0,it=G.length;z<it;z++){let X=G[z],Z=P[X.materialIndex];if(Z&&Z.visible){let ot=_(w,Z,U,y);w.onBeforeShadow(i,w,b,I,H,ot,X),i.renderBufferDirect(I,null,H,ot,w,X),w.onAfterShadow(i,w,b,I,H,ot,X)}}}else if(P.visible){let G=_(w,P,U,y);w.onBeforeShadow(i,w,b,I,H,G,null),i.renderBufferDirect(I,null,H,G,w,null),w.onAfterShadow(i,w,b,I,H,G,null)}}let N=w.children;for(let H=0,P=N.length;H<P;H++)M(N[H],b,I,U,y)}function T(w){w.target.removeEventListener("dispose",T);for(let I in c){let U=c[I],y=w.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}var Ig={[Ra]:Aa,[Ca]:La,[Pa]:Da,[as]:Ia,[Aa]:Ra,[La]:Ca,[Da]:Pa,[Ia]:as};function Lg(i){function t(){let B=!1,Et=new Me,et=null,dt=new Me(0,0,0,0);return{setMask:function(nt){et!==nt&&!B&&(i.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){B=nt},setClear:function(nt,J,wt,$t,re){re===!0&&(nt*=$t,J*=$t,wt*=$t),Et.set(nt,J,wt,$t),dt.equals(Et)===!1&&(i.clearColor(nt,J,wt,$t),dt.copy(Et))},reset:function(){B=!1,et=null,dt.set(-1,0,0,0)}}}function e(){let B=!1,Et=!1,et=null,dt=null,nt=null;return{setReversed:function(J){Et=J},setTest:function(J){J?gt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(J){et!==J&&!B&&(i.depthMask(J),et=J)},setFunc:function(J){if(Et&&(J=Ig[J]),dt!==J){switch(J){case Ra:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=J}},setLocked:function(J){B=J},setClear:function(J){nt!==J&&(i.clearDepth(J),nt=J)},reset:function(){B=!1,et=null,dt=null,nt=null}}}function n(){let B=!1,Et=null,et=null,dt=null,nt=null,J=null,wt=null,$t=null,re=null;return{setTest:function(Kt){B||(Kt?gt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Kt){Et!==Kt&&!B&&(i.stencilMask(Kt),Et=Kt)},setFunc:function(Kt,ye,ve){(et!==Kt||dt!==ye||nt!==ve)&&(i.stencilFunc(Kt,ye,ve),et=Kt,dt=ye,nt=ve)},setOp:function(Kt,ye,ve){(J!==Kt||wt!==ye||$t!==ve)&&(i.stencilOp(Kt,ye,ve),J=Kt,wt=ye,$t=ve)},setLocked:function(Kt){B=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){B=!1,Et=null,et=null,dt=null,nt=null,J=null,wt=null,$t=null,re=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},f={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,u=null,x=null,_=null,M=null,T=null,w=new Yt(0,0,0),b=0,I=!1,U=null,y=null,E=null,N=null,H=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,z=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(it)[1]),G=z>=1):it.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),G=z>=2);let X=null,Z={},ot=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),Ct=new Me().fromArray(ot),Ut=new Me().fromArray(lt);function Q(B,Et,et,dt){let nt=new Uint8Array(4),J=i.createTexture();i.bindTexture(B,J),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<et;wt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(Et+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return J}let ht={};ht[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),r.setFunc(as),q(!1),$(Ic),gt(i.CULL_FACE),C(Nn);function gt(B){c[B]!==!0&&(i.enable(B),c[B]=!0)}function vt(B){c[B]!==!1&&(i.disable(B),c[B]=!1)}function Ht(B,Et){return f[B]!==Et?(i.bindFramebuffer(B,Et),f[B]=Et,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function Ot(B,Et){let et=d,dt=!1;if(B){et=h.get(Et),et===void 0&&(et=[],h.set(Et,et));let nt=B.textures;if(et.length!==nt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let J=0,wt=nt.length;J<wt;J++)et[J]=i.COLOR_ATTACHMENT0+J;et.length=nt.length,dt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,dt=!0);dt&&i.drawBuffers(et)}function Jt(B){return p!==B?(i.useProgram(B),p=B,!0):!1}let jt={[bi]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};jt[cu]=i.MIN,jt[hu]=i.MAX;let ut={[fu]:i.ZERO,[uu]:i.ONE,[du]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[yu]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[xu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[Eu]:i.CONSTANT_ALPHA,[wu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(B,Et,et,dt,nt,J,wt,$t,re,Kt){if(B===Nn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),B!==ou){if(B!==v||Kt!==I){if((m!==bi||_!==bi)&&(i.blendEquation(i.FUNC_ADD),m=bi,_=bi),Kt)switch(B){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}u=null,x=null,M=null,T=null,w.set(0,0,0),b=0,v=B,I=Kt}return}nt=nt||Et,J=J||et,wt=wt||dt,(Et!==m||nt!==_)&&(i.blendEquationSeparate(jt[Et],jt[nt]),m=Et,_=nt),(et!==u||dt!==x||J!==M||wt!==T)&&(i.blendFuncSeparate(ut[et],ut[dt],ut[J],ut[wt]),u=et,x=dt,M=J,T=wt),($t.equals(w)===!1||re!==b)&&(i.blendColor($t.r,$t.g,$t.b,re),w.copy($t),b=re),v=B,I=!1}function St(B,Et){B.side===ge?vt(i.CULL_FACE):gt(i.CULL_FACE);let et=B.side===an;Et&&(et=!et),q(et),B.blending===is&&B.transparent===!1?C(Nn):C(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);let dt=B.stencilWrite;o.setTest(dt),dt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(B){U!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),U=B)}function $(B){B!==iu?(gt(i.CULL_FACE),B!==y&&(B===Ic?i.cullFace(i.BACK):B===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),y=B}function ct(B){B!==E&&(G&&i.lineWidth(B),E=B)}function mt(B,Et,et){B?(gt(i.POLYGON_OFFSET_FILL),(N!==Et||H!==et)&&(i.polygonOffset(Et,et),N=Et,H=et)):vt(i.POLYGON_OFFSET_FILL)}function yt(B){B?gt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function A(B){B===void 0&&(B=i.TEXTURE0+P-1),X!==B&&(i.activeTexture(B),X=B)}function S(B,Et,et){et===void 0&&(X===null?et=i.TEXTURE0+P-1:et=X);let dt=Z[et];dt===void 0&&(dt={type:void 0,texture:void 0},Z[et]=dt),(dt.type!==B||dt.texture!==Et)&&(X!==et&&(i.activeTexture(et),X=et),i.bindTexture(B,Et||ht[B]),dt.type=B,dt.texture=Et)}function W(){let B=Z[X];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(B){Ct.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ct.copy(B))}function _t(B){Ut.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ut.copy(B))}function zt(B,Et){let et=l.get(Et);et===void 0&&(et=new WeakMap,l.set(Et,et));let dt=et.get(B);dt===void 0&&(dt=i.getUniformBlockIndex(Et,B.name),et.set(B,dt))}function Ft(B,Et){let dt=l.get(Et).get(B);a.get(Et)!==dt&&(i.uniformBlockBinding(Et,dt,B.__bindingPointIndex),a.set(Et,dt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,Z={},f={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,u=null,x=null,_=null,M=null,T=null,w=new Yt(0,0,0),b=0,I=!1,U=null,y=null,E=null,N=null,H=null,Ct.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:gt,disable:vt,bindFramebuffer:Ht,drawBuffers:Ot,useProgram:Jt,setBlending:C,setMaterial:St,setFlipSided:q,setCullFace:$,setLineWidth:ct,setPolygonOffset:mt,setScissorTest:yt,activeTexture:A,bindTexture:S,unbindTexture:W,compressedTexImage2D:st,compressedTexImage3D:at,texImage2D:F,texImage3D:rt,updateUBOMapping:zt,uniformBlockBinding:Ft,texStorage2D:oe,texStorage3D:pt,texSubImage2D:tt,texSubImage3D:Pt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Lt,scissor:xt,viewport:_t,reset:Qt}}function bh(i,t,e,n){let s=Dg(n);switch(e){case qh:return i*t;case Zh:return i*t;case $h:return i*t*2;case nc:return i*t/s.components*s.byteLength;case ic:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case Yh:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case rc:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Oa:return Math.max(i,16)*Math.max(t,8)/4;case za:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kh:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case al:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case Jn:case Vh:return{byteLength:1,components:1};case Xs:case Wh:case rr:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Pi:case Ql:case Un:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ug(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,f=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):qs("canvas")}function v(A,S,W){let st=1,at=yt(A);if((at.width>W||at.height>W)&&(st=W/Math.max(at.width,at.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let tt=Math.floor(st*at.width),Pt=Math.floor(st*at.height);h===void 0&&(h=g(tt,Pt));let bt=S?g(tt,Pt):h;return bt.width=tt,bt.height=Pt,bt.getContext("2d").drawImage(A,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Pt+")."),bt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==on&&A.minFilter!==An}function u(A){i.generateMipmap(A)}function x(A,S,W,st,at=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=S;if(S===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),S===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){let Pt=at?to:pe.getTransfer(st);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=Pt===Se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(A,S){let W;return A?S===null||S===Pi||S===hs?W=i.DEPTH24_STENCIL8:S===Un?W=i.DEPTH32F_STENCIL8:S===Xs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===hs?W=i.DEPTH_COMPONENT24:S===Un?W=i.DEPTH_COMPONENT32F:S===Xs&&(W=i.DEPTH_COMPONENT16),W}function M(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==An?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),b(S),S.isVideoTexture&&f.delete(S)}function w(A){let S=A.target;S.removeEventListener("dispose",w),U(S)}function b(A){let S=n.get(A);if(S.__webglInit===void 0)return;let W=A.source,st=d.get(W);if(st){let at=st[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(A),Object.keys(st).length===0&&d.delete(W)}n.remove(A)}function I(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let W=A.source,st=d.get(W);delete st[S.__cacheKey],o.memory.textures--}function U(A){let S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let at=0;at<S.__webglFramebuffer[st].length;at++)i.deleteFramebuffer(S.__webglFramebuffer[st][at]);else i.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)i.deleteFramebuffer(S.__webglFramebuffer[st]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=A.textures;for(let st=0,at=W.length;st<at;st++){let tt=n.get(W[st]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(W[st])}n.remove(A)}let y=0;function E(){y=0}function N(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function H(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function P(A,S){let W=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(W,A,S);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function G(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Ut(W,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function z(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Ut(W,A,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function it(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Q(W,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let X={[Pn]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},Z={[on]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},ot={[Hu]:i.NEVER,[Gu]:i.ALWAYS,[zu]:i.LESS,[Qh]:i.LEQUAL,[Bu]:i.EQUAL,[ku]:i.GEQUAL,[Fu]:i.GREATER,[Ou]:i.NOTEQUAL};function lt(A,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===An||S.magFilter===Vo||S.magFilter===xr||S.magFilter===Ci||S.minFilter===An||S.minFilter===Vo||S.minFilter===xr||S.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,X[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,X[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,X[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Z[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==xr&&S.minFilter!==Ci||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let st=S.source,at=d.get(st);at===void 0&&(at={},d.set(st,at));let tt=H(S);if(tt!==A.__cacheKey){at[tt]===void 0&&(at[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[tt].usedTimes++;let Pt=at[A.__cacheKey];Pt!==void 0&&(at[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&I(S)),A.__cacheKey=tt,A.__webglTexture=at[tt].texture}return W}function Ut(A,S,W){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);let at=Ct(A,S),tt=S.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+W);let Pt=n.get(tt);if(tt.version!==Pt.__version||at===!0){e.activeTexture(i.TEXTURE0+W);let bt=pe.getPrimaries(pe.workingColorSpace),Lt=S.colorSpace===ci?null:pe.getPrimaries(S.colorSpace),oe=S.colorSpace===ci||bt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let pt=v(S.image,!1,s.maxTextureSize);pt=mt(S,pt);let F=r.convert(S.format,S.colorSpace),rt=r.convert(S.type),xt=x(S.internalFormat,F,rt,S.colorSpace,S.isVideoTexture);lt(st,S);let _t,zt=S.mipmaps,Ft=S.isVideoTexture!==!0,Qt=Pt.__version===void 0||at===!0,B=tt.dataReady,Et=M(S,pt);if(S.isDepthTexture)xt=_(S.format===fs,S.type),Qt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,xt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,xt,pt.width,pt.height,0,F,rt,null));else if(S.isDataTexture)if(zt.length>0){Ft&&Qt&&e.texStorage2D(i.TEXTURE_2D,Et,xt,zt[0].width,zt[0].height);for(let et=0,dt=zt.length;et<dt;et++)_t=zt[et],Ft?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,F,rt,_t.data):e.texImage2D(i.TEXTURE_2D,et,xt,_t.width,_t.height,0,F,rt,_t.data);S.generateMipmaps=!1}else Ft?(Qt&&e.texStorage2D(i.TEXTURE_2D,Et,xt,pt.width,pt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,F,rt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,xt,pt.width,pt.height,0,F,rt,pt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,xt,zt[0].width,zt[0].height,pt.depth);for(let et=0,dt=zt.length;et<dt;et++)if(_t=zt[et],S.format!==Cn)if(F!==null)if(Ft){if(B)if(S.layerUpdates.size>0){let nt=bh(_t.width,_t.height,S.format,S.type);for(let J of S.layerUpdates){let wt=_t.data.subarray(J*nt/_t.data.BYTES_PER_ELEMENT,(J+1)*nt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,J,_t.width,_t.height,1,F,wt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,pt.depth,F,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,xt,_t.width,_t.height,pt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,pt.depth,F,rt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,xt,_t.width,_t.height,pt.depth,0,F,rt,_t.data)}else{Ft&&Qt&&e.texStorage2D(i.TEXTURE_2D,Et,xt,zt[0].width,zt[0].height);for(let et=0,dt=zt.length;et<dt;et++)_t=zt[et],S.format!==Cn?F!==null?Ft?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,F,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,et,xt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,F,rt,_t.data):e.texImage2D(i.TEXTURE_2D,et,xt,_t.width,_t.height,0,F,rt,_t.data)}else if(S.isDataArrayTexture)if(Ft){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,xt,pt.width,pt.height,pt.depth),B)if(S.layerUpdates.size>0){let et=bh(pt.width,pt.height,S.format,S.type);for(let dt of S.layerUpdates){let nt=pt.data.subarray(dt*et/pt.data.BYTES_PER_ELEMENT,(dt+1)*et/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,pt.width,pt.height,1,F,rt,nt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,F,rt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,pt.width,pt.height,pt.depth,0,F,rt,pt.data);else if(S.isData3DTexture)Ft?(Qt&&e.texStorage3D(i.TEXTURE_3D,Et,xt,pt.width,pt.height,pt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,F,rt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,pt.width,pt.height,pt.depth,0,F,rt,pt.data);else if(S.isFramebufferTexture){if(Qt)if(Ft)e.texStorage2D(i.TEXTURE_2D,Et,xt,pt.width,pt.height);else{let et=pt.width,dt=pt.height;for(let nt=0;nt<Et;nt++)e.texImage2D(i.TEXTURE_2D,nt,xt,et,dt,0,F,rt,null),et>>=1,dt>>=1}}else if(zt.length>0){if(Ft&&Qt){let et=yt(zt[0]);e.texStorage2D(i.TEXTURE_2D,Et,xt,et.width,et.height)}for(let et=0,dt=zt.length;et<dt;et++)_t=zt[et],Ft?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,F,rt,_t):e.texImage2D(i.TEXTURE_2D,et,xt,F,rt,_t);S.generateMipmaps=!1}else if(Ft){if(Qt){let et=yt(pt);e.texStorage2D(i.TEXTURE_2D,Et,xt,et.width,et.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F,rt,pt)}else e.texImage2D(i.TEXTURE_2D,0,xt,F,rt,pt);m(S)&&u(st),Pt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,W){if(S.image.length!==6)return;let st=Ct(A,S),at=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let tt=n.get(at);if(at.version!==tt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);let Pt=pe.getPrimaries(pe.workingColorSpace),bt=S.colorSpace===ci?null:pe.getPrimaries(S.colorSpace),Lt=S.colorSpace===ci||Pt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let oe=S.isCompressedTexture||S.image[0].isCompressedTexture,pt=S.image[0]&&S.image[0].isDataTexture,F=[];for(let dt=0;dt<6;dt++)!oe&&!pt?F[dt]=v(S.image[dt],!0,s.maxCubemapSize):F[dt]=pt?S.image[dt].image:S.image[dt],F[dt]=mt(S,F[dt]);let rt=F[0],xt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),zt=x(S.internalFormat,xt,_t,S.colorSpace),Ft=S.isVideoTexture!==!0,Qt=tt.__version===void 0||st===!0,B=at.dataReady,Et=M(S,rt);lt(i.TEXTURE_CUBE_MAP,S);let et;if(oe){Ft&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,zt,rt.width,rt.height);for(let dt=0;dt<6;dt++){et=F[dt].mipmaps;for(let nt=0;nt<et.length;nt++){let J=et[nt];S.format!==Cn?xt!==null?Ft?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt,0,0,J.width,J.height,xt,J.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt,zt,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt,0,0,J.width,J.height,xt,_t,J.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt,zt,J.width,J.height,0,xt,_t,J.data)}}}else{if(et=S.mipmaps,Ft&&Qt){et.length>0&&Et++;let dt=yt(F[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,zt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(pt){Ft?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,F[dt].width,F[dt].height,xt,_t,F[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,zt,F[dt].width,F[dt].height,0,xt,_t,F[dt].data);for(let nt=0;nt<et.length;nt++){let wt=et[nt].image[dt].image;Ft?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt+1,0,0,wt.width,wt.height,xt,_t,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt+1,zt,wt.width,wt.height,0,xt,_t,wt.data)}}else{Ft?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,xt,_t,F[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,zt,xt,_t,F[dt]);for(let nt=0;nt<et.length;nt++){let J=et[nt];Ft?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt+1,0,0,xt,_t,J.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,nt+1,zt,xt,_t,J.image[dt])}}}m(S)&&u(i.TEXTURE_CUBE_MAP),tt.__version=at.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ht(A,S,W,st,at,tt){let Pt=r.convert(W.format,W.colorSpace),bt=r.convert(W.type),Lt=x(W.internalFormat,Pt,bt,W.colorSpace);if(!n.get(S).__hasExternalTextures){let pt=Math.max(1,S.width>>tt),F=Math.max(1,S.height>>tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Lt,pt,F,S.depth,0,Pt,bt,null):e.texImage2D(at,tt,Lt,pt,F,0,Pt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),$(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,at,n.get(W).__webglTexture,0,q(S)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,at,n.get(W).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let st=S.depthTexture,at=st&&st.isDepthTexture?st.type:null,tt=_(S.stencilBuffer,at),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=q(S);$(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,tt,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,A)}else{let st=S.textures;for(let at=0;at<st.length;at++){let tt=st[at],Pt=r.convert(tt.format,tt.colorSpace),bt=r.convert(tt.type),Lt=x(tt.internalFormat,Pt,bt,tt.colorSpace),oe=q(S);W&&$(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Lt,S.width,S.height):$(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);let st=n.get(S.depthTexture).__webglTexture,at=q(S);if(S.depthTexture.format===ss)$(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===fs)$(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ht(A){let S=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){let at=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",at)};st.addEventListener("dispose",at),S.__depthDisposeCallback=at}S.__boundDepthTexture=st}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");vt(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=i.createRenderbuffer(),gt(S.__webglDepthbuffer[st],A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),gt(S.__webglDepthbuffer,A,!1);else{let st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,S,W){let st=n.get(A);S!==void 0&&ht(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ht(A)}function Jt(A){let S=A.texture,W=n.get(A),st=n.get(S);A.addEventListener("dispose",w);let at=A.textures,tt=A.isWebGLCubeRenderTarget===!0,Pt=at.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,o.memory.textures++),tt){W.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[bt]=[];for(let Lt=0;Lt<S.mipmaps.length;Lt++)W.__webglFramebuffer[bt][Lt]=i.createFramebuffer()}else W.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)W.__webglFramebuffer[bt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let bt=0,Lt=at.length;bt<Lt;bt++){let oe=n.get(at[bt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&$(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let bt=0;bt<at.length;bt++){let Lt=at[bt];W.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[bt]);let oe=r.convert(Lt.format,Lt.colorSpace),pt=r.convert(Lt.type),F=x(Lt.internalFormat,oe,pt,Lt.colorSpace,A.isXRRenderTarget===!0),rt=q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,F,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,W.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)ht(W.__webglFramebuffer[bt][Lt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Lt);else ht(W.__webglFramebuffer[bt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(S)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let bt=0,Lt=at.length;bt<Lt;bt++){let oe=at[bt],pt=n.get(oe);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),lt(i.TEXTURE_2D,oe),ht(W.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(oe)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(bt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,st.__webglTexture),lt(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)ht(W.__webglFramebuffer[Lt],A,S,i.COLOR_ATTACHMENT0,bt,Lt);else ht(W.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,bt,0);m(S)&&u(bt),e.unbindTexture()}A.depthBuffer&&Ht(A)}function jt(A){let S=A.textures;for(let W=0,st=S.length;W<st;W++){let at=S[W];if(m(at)){let tt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(at).__webglTexture;e.bindTexture(tt,Pt),u(tt),e.unbindTexture()}}}let ut=[],C=[];function St(A){if(A.samples>0){if($(A)===!1){let S=A.textures,W=A.width,st=A.height,at=i.COLOR_BUFFER_BIT,tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(A),bt=S.length>1;if(bt)for(let Lt=0;Lt<S.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Lt=0;Lt<S.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Lt]);let oe=n.get(S[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,W,st,0,0,W,st,at,i.NEAREST),l===!0&&(ut.length=0,C.length=0,ut.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(tt),C.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Lt=0;Lt<S.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Lt]);let oe=n.get(S[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function q(A){return Math.min(s.maxSamples,A.samples)}function $(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(A){let S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function mt(A,S){let W=A.colorSpace,st=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==yi&&W!==ci&&(pe.getTransfer(W)===Se?(st!==Cn||at!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=P,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=it,this.rebindTextures=Ot,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=$}function Ng(i,t){function e(n,s=ci){let r,o=pe.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===Cn)return i.RGBA;if(n===Zh)return i.LUMINANCE;if(n===$h)return i.LUMINANCE_ALPHA;if(n===ss)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===$r)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ba||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ga||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ga)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===ol||n===al||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sl=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Dt=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hg={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new zn({vertexShader:zg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new O(new ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,g=null,v=new bl,m=e.getContextAttributes(),u=null,x=null,_=[],M=[],T=new Tt,w=null,b=new je;b.layers.enable(1),b.viewport=new Me;let I=new je;I.layers.enable(2),I.viewport=new Me;let U=[b,I],y=new Sl;y.layers.enable(1),y.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ht=_[Q];return ht===void 0&&(ht=new ks,_[Q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Q){let ht=_[Q];return ht===void 0&&(ht=new ks,_[Q]=ht),ht.getGripSpace()},this.getHand=function(Q){let ht=_[Q];return ht===void 0&&(ht=new ks,_[Q]=ht),ht.getHandSpace()};function H(Q){let ht=M.indexOf(Q.inputSource);if(ht===-1)return;let gt=_[ht];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,c||o),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",G);for(let Q=0;Q<_.length;Q++){let ht=M[Q];ht!==null&&(M[Q]=null,_[Q].disconnect(ht))}E=null,N=null,v.reset(),t.setRenderTarget(u),p=null,d=null,h=null,s=null,x=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",P),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,gt=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?fs:ss,gt=m.stencil?hs:Pi);let Ht={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Kn(d.textureWidth,d.textureHeight,{format:Cn,type:Jn,depthTexture:new fo(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(Q){for(let ht=0;ht<Q.removed.length;ht++){let gt=Q.removed[ht],vt=M.indexOf(gt);vt>=0&&(M[vt]=null,_[vt].disconnect(gt))}for(let ht=0;ht<Q.added.length;ht++){let gt=Q.added[ht],vt=M.indexOf(gt);if(vt===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=M.length){M.push(gt),vt=Ot;break}else if(M[Ot]===null){M[Ot]=gt,vt=Ot;break}if(vt===-1)break}let Ht=_[vt];Ht&&Ht.connect(gt)}}let z=new L,it=new L;function X(Q,ht,gt){z.setFromMatrixPosition(ht.matrixWorld),it.setFromMatrixPosition(gt.matrixWorld);let vt=z.distanceTo(it),Ht=ht.projectionMatrix.elements,Ot=gt.projectionMatrix.elements,Jt=Ht[14]/(Ht[10]-1),jt=Ht[14]/(Ht[10]+1),ut=(Ht[9]+1)/Ht[5],C=(Ht[9]-1)/Ht[5],St=(Ht[8]-1)/Ht[0],q=(Ot[8]+1)/Ot[0],$=Jt*St,ct=Jt*q,mt=vt/(-St+q),yt=mt*-St;if(ht.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ(mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ht[10]===-1)Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let A=Jt+mt,S=jt+mt,W=$-yt,st=ct+(vt-yt),at=ut*jt/S*A,tt=C*jt/S*A;Q.projectionMatrix.makePerspective(W,st,at,tt,A,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Z(Q,ht){ht===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ht.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ht=Q.near,gt=Q.far;v.texture!==null&&(v.depthNear>0&&(ht=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),y.near=I.near=b.near=ht,y.far=I.far=b.far=gt,(E!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,N=y.far);let vt=Q.parent,Ht=y.cameras;Z(y,vt);for(let Ot=0;Ot<Ht.length;Ot++)Z(Ht[Ot],vt);Ht.length===2?X(y,b,I):y.projectionMatrix.copy(b.projectionMatrix),ot(Q,y,vt)};function ot(Q,ht,gt){gt===null?Q.matrix.copy(ht.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ht.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let lt=null;function Ct(Q,ht){if(f=ht.getViewerPose(c||o),g=ht,f!==null){let gt=f.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let vt=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let Ot=0;Ot<gt.length;Ot++){let Jt=gt[Ot],jt=null;if(p!==null)jt=p.getViewport(Jt);else{let C=h.getViewSubImage(d,Jt);jt=C.viewport,Ot===0&&(t.setRenderTargetTextures(x,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(x))}let ut=U[Ot];ut===void 0&&(ut=new je,ut.layers.enable(Ot),ut.viewport=new Me,U[Ot]=ut),ut.matrix.fromArray(Jt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Jt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(jt.x,jt.y,jt.width,jt.height),Ot===0&&(y.matrix.copy(ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(ut)}let Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){let Ot=h.getDepthInformation(gt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let gt=0;gt<_.length;gt++){let vt=M[gt],Ht=_[gt];vt!==null&&Ht!==void 0&&Ht.update(vt,ht,c||o)}lt&&lt(Q,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Ut=new rf;Ut.setAnimationLoop(Ct),this.setAnimationLoop=function(Q){lt=Q},this.dispose=function(){}}},wi=new nn,Fg=new te;function Og(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,sf(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,x,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),f(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let x=t.get(u),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,wi.copy(M),wi.x*=-1,wi.y*=-1,wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(wi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=_*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let x=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=s[x.id];M===void 0&&(g(x),M=f(x),s[x.id]=M,x.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(x,T);let w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function f(x){let _=h();x.__bindingPointIndex=_;let M=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,b=M.length;w<b;w++){let I=Array.isArray(M[w])?M[w]:[M[w]];for(let U=0,y=I.length;U<y;U++){let E=I[U];if(p(E,w,U,T)===!0){let N=E.__offset,H=Array.isArray(E.value)?E.value:[E.value],P=0;for(let G=0;G<H.length;G++){let z=H[G],it=v(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+P,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,P),P+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,M,T){let w=x.value,b=_+"_"+M;if(T[b]===void 0)return typeof w=="number"||typeof w=="boolean"?T[b]=w:T[b]=w.clone(),!0;{let I=T[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return T[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){let _=x.uniforms,M=0,T=16;for(let b=0,I=_.length;b<I;b++){let U=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,E=U.length;y<E;y++){let N=U[y],H=Array.isArray(N.value)?N.value:[N.value];for(let P=0,G=H.length;P<G;P++){let z=H[P],it=v(z),X=M%T,Z=X%it.boundary,ot=X+Z;M+=Z,ot!==0&&T-ot<it.storage&&(M+=T-ot),N.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=it.storage}}}let w=M%T;return w>0&&(M+=T-w),x.__size=M,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ds=class{constructor(t={}){let{canvas:e=Wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,u=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=hi,this.toneMappingExposure=1;let _=this,M=!1,T=0,w=0,b=null,I=-1,U=null,y=new Me,E=new Me,N=null,H=new Yt(0),P=0,G=e.width,z=e.height,it=1,X=null,Z=null,ot=new Me(0,0,G,z),lt=new Me(0,0,G,z),Ct=!1,Ut=new Ii,Q=!1,ht=!1,gt=new te,vt=new te,Ht=new L,Ot=new Me,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ut(){return b===null?it:1}let C=n;function St(R,k){return e.getContext(R,k)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",J,!1),C===null){let k="webgl2";if(C=St(k,R),C===null)throw St(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let q,$,ct,mt,yt,A,S,W,st,at,tt,Pt,bt,Lt,oe,pt,F,rt,xt,_t,zt,Ft,Qt,B;function Et(){q=new im(C),q.init(),Ft=new Ng(C,q),$=new K0(C,q,t,Ft),ct=new Lg(C),$.reverseDepthBuffer&&ct.buffers.depth.setReversed(!0),mt=new om(C),yt=new _g,A=new Ug(C,q,ct,yt,$,Ft,mt),S=new Q0(_),W=new nm(_),st=new dd(C),Qt=new $0(C,st),at=new sm(C,st,mt,Qt),tt=new lm(C,at,st,mt),xt=new am(C,$,A),pt=new j0(yt),Pt=new xg(_,S,W,q,$,Qt,pt),bt=new Og(_,yt),Lt=new Mg,oe=new Rg(q),rt=new Z0(_,S,W,ct,tt,d,l),F=new Pg(_,tt,$),B=new kg(C,mt,$,ct),_t=new J0(C,q,mt),zt=new rm(C,q,mt),mt.programs=Pt.programs,_.capabilities=$,_.extensions=q,_.properties=yt,_.renderLists=Lt,_.shadowMap=F,_.state=ct,_.info=mt}Et();let et=new Tl(_,C);this.xr=et,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let R=q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(R){R!==void 0&&(it=R,this.setSize(G,z,!1))},this.getSize=function(R){return R.set(G,z)},this.setSize=function(R,k,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,z=k,e.width=Math.floor(R*it),e.height=Math.floor(k*it),K===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(G*it,z*it).floor()},this.setDrawingBufferSize=function(R,k,K){G=R,z=k,it=K,e.width=Math.floor(R*K),e.height=Math.floor(k*K),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,k,K,j){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,k,K,j),ct.viewport(y.copy(ot).multiplyScalar(it).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,k,K,j){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,k,K,j),ct.scissor(E.copy(lt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){ct.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(R=!0,k=!0,K=!0){let j=0;if(R){let V=!1;if(b!==null){let Rt=b.texture.format;V=Rt===rc||Rt===sc||Rt===ic}if(V){let Rt=b.texture.type,Nt=Rt===Jn||Rt===Pi||Rt===Xs||Rt===hs||Rt===tc||Rt===ec,Bt=rt.getClearColor(),kt=rt.getClearAlpha(),ee=Bt.r,ie=Bt.g,Vt=Bt.b;Nt?(p[0]=ee,p[1]=ie,p[2]=Vt,p[3]=kt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=ee,g[1]=ie,g[2]=Vt,g[3]=kt,C.clearBufferiv(C.COLOR,0,g))}else j|=C.COLOR_BUFFER_BIT}k&&(j|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Lt.dispose(),oe.dispose(),yt.dispose(),S.dispose(),W.dispose(),tt.dispose(),Qt.dispose(),B.dispose(),Pt.dispose(),et.dispose(),et.removeEventListener("sessionstart",gn),et.removeEventListener("sessionend",Ge),Ae.stop()};function dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=mt.autoReset,k=F.enabled,K=F.autoUpdate,j=F.needsUpdate,V=F.type;Et(),mt.autoReset=R,F.enabled=k,F.autoUpdate=K,F.needsUpdate=j,F.type=V}function J(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function wt(R){let k=R.target;k.removeEventListener("dispose",wt),$t(k)}function $t(R){re(R),yt.remove(R)}function re(R){let k=yt.get(R).programs;k!==void 0&&(k.forEach(function(K){Pt.releaseProgram(K)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,K,j,V,Rt){k===null&&(k=Jt);let Nt=V.isMesh&&V.matrixWorld.determinant()<0,Bt=Qf(R,k,K,j,V);ct.setMaterial(j,Nt);let kt=K.index,ee=1;if(j.wireframe===!0){if(kt=at.getWireframeAttribute(K),kt===void 0)return;ee=2}let ie=K.drawRange,Vt=K.attributes.position,xe=ie.start*ee,we=(ie.start+ie.count)*ee;Rt!==null&&(xe=Math.max(xe,Rt.start*ee),we=Math.min(we,(Rt.start+Rt.count)*ee)),kt!==null?(xe=Math.max(xe,0),we=Math.min(we,kt.count)):Vt!=null&&(xe=Math.max(xe,0),we=Math.min(we,Vt.count));let Pe=we-xe;if(Pe<0||Pe===1/0)return;Qt.setup(V,j,Bt,K,kt);let cn,ue=_t;if(kt!==null&&(cn=st.get(kt),ue=zt,ue.setIndex(cn)),V.isMesh)j.wireframe===!0?(ct.setLineWidth(j.wireframeLinewidth*ut()),ue.setMode(C.LINES)):ue.setMode(C.TRIANGLES);else if(V.isLine){let qt=j.linewidth;qt===void 0&&(qt=1),ct.setLineWidth(qt*ut()),V.isLineSegments?ue.setMode(C.LINES):V.isLineLoop?ue.setMode(C.LINE_LOOP):ue.setMode(C.LINE_STRIP)}else V.isPoints?ue.setMode(C.POINTS):V.isSprite&&ue.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ue.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let qt=V._multiDrawStarts,Ze=V._multiDrawCounts,de=V._multiDrawCount,wn=kt?st.get(kt).bytesPerElement:1,Fi=yt.get(j).currentProgram.getUniforms();for(let hn=0;hn<de;hn++)Fi.setValue(C,"_gl_DrawID",hn),ue.render(qt[hn]/wn,Ze[hn])}else if(V.isInstancedMesh)ue.renderInstances(xe,Pe,V.count);else if(K.isInstancedBufferGeometry){let qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ze=Math.min(K.instanceCount,qt);ue.renderInstances(xe,Pe,Ze)}else ue.render(xe,Pe)};function Kt(R,k,K){R.transparent===!0&&R.side===ge&&R.forceSinglePass===!1?(R.side=an,R.needsUpdate=!0,ei(R,k,K),R.side=fi,R.needsUpdate=!0,ei(R,k,K),R.side=ge):ei(R,k,K)}this.compile=function(R,k,K=null){K===null&&(K=R),m=oe.get(K),m.init(k),x.push(m),K.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),R!==K&&R.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let j=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Rt=V.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){let Bt=Rt[Nt];Kt(Bt,K,V),j.add(Bt)}else Kt(Rt,K,V),j.add(Rt)}),x.pop(),m=null,j},this.compileAsync=function(R,k,K=null){let j=this.compile(R,k,K);return new Promise(V=>{function Rt(){if(j.forEach(function(Nt){yt.get(Nt).currentProgram.isReady()&&j.delete(Nt)}),j.size===0){V(R);return}setTimeout(Rt,10)}q.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ye=null;function ve(R){ye&&ye(R)}function gn(){Ae.stop()}function Ge(){Ae.start()}let Ae=new rf;Ae.setAnimationLoop(ve),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(R){ye=R,et.setAnimationLoop(R),R===null?Ae.stop():Ae.start()},et.addEventListener("sessionstart",gn),et.addEventListener("sessionend",Ge),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(k),k=et.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,k,b),m=oe.get(R,x.length),m.init(k),x.push(m),vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ut.setFromProjectionMatrix(vt),ht=this.localClippingEnabled,Q=pt.init(this.clippingPlanes,ht),v=Lt.get(R,u.length),v.init(),u.push(v),et.enabled===!0&&et.isPresenting===!0){let Rt=_.xr.getDepthSensingMesh();Rt!==null&&Ye(Rt,k,-1/0,_.sortObjects)}Ye(R,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,Z),jt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,jt&&rt.addToRenderList(v,R),this.info.render.frame++,Q===!0&&pt.beginShadows();let K=m.state.shadowsArray;F.render(K,R,k),Q===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=v.opaque,V=v.transmissive;if(m.setupLights(),k.isArrayCamera){let Rt=k.cameras;if(V.length>0)for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++){let kt=Rt[Nt];zi(j,V,R,kt)}jt&&rt.render(R);for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++){let kt=Rt[Nt];Ve(v,R,kt,kt.viewport)}}else V.length>0&&zi(j,V,R,k),jt&&rt.render(R),Ve(v,R,k);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,k),Qt.resetDefaultState(),I=-1,U=null,x.pop(),x.length>0?(m=x[x.length-1],Q===!0&&pt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Ye(R,k,K,j){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){j&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);let Nt=tt.update(R),Bt=R.material;Bt.visible&&v.push(R,Nt,Bt,K,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){let Nt=tt.update(R),Bt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ot.copy(Nt.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(Bt)){let kt=Nt.groups;for(let ee=0,ie=kt.length;ee<ie;ee++){let Vt=kt[ee],xe=Bt[Vt.materialIndex];xe&&xe.visible&&v.push(R,Nt,xe,K,Ot.z,Vt)}}else Bt.visible&&v.push(R,Nt,Bt,K,Ot.z,null)}}let Rt=R.children;for(let Nt=0,Bt=Rt.length;Nt<Bt;Nt++)Ye(Rt[Nt],k,K,j)}function Ve(R,k,K,j){let V=R.opaque,Rt=R.transmissive,Nt=R.transparent;m.setupLightsView(K),Q===!0&&pt.setGlobalState(_.clippingPlanes,K),j&&ct.viewport(y.copy(j)),V.length>0&&yn(V,k,K),Rt.length>0&&yn(Rt,k,K),Nt.length>0&&yn(Nt,k,K),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function zi(R,k,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Kn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?rr:Jn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let Rt=m.state.transmissionRenderTarget[j.id],Nt=j.viewport||y;Rt.setSize(Nt.z,Nt.w);let Bt=_.getRenderTarget();_.setRenderTarget(Rt),_.getClearColor(H),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear(),jt&&rt.render(K);let kt=_.toneMapping;_.toneMapping=hi;let ee=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Q===!0&&pt.setGlobalState(_.clippingPlanes,j),yn(R,K,j),A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt),q.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Vt=0,xe=k.length;Vt<xe;Vt++){let we=k[Vt],Pe=we.object,cn=we.geometry,ue=we.material,qt=we.group;if(ue.side===ge&&Pe.layers.test(j.layers)){let Ze=ue.side;ue.side=an,ue.needsUpdate=!0,En(Pe,K,j,cn,ue,qt),ue.side=Ze,ue.needsUpdate=!0,ie=!0}}ie===!0&&(A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt))}_.setRenderTarget(Bt),_.setClearColor(H,P),ee!==void 0&&(j.viewport=ee),_.toneMapping=kt}function yn(R,k,K){let j=k.isScene===!0?k.overrideMaterial:null;for(let V=0,Rt=R.length;V<Rt;V++){let Nt=R[V],Bt=Nt.object,kt=Nt.geometry,ee=j===null?Nt.material:j,ie=Nt.group;Bt.layers.test(K.layers)&&En(Bt,k,K,kt,ee,ie)}}function En(R,k,K,j,V,Rt){R.onBeforeRender(_,k,K,j,V,Rt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(_,k,K,j,R,Rt),V.transparent===!0&&V.side===ge&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,_.renderBufferDirect(K,k,j,V,R,Rt),V.side=fi,V.needsUpdate=!0,_.renderBufferDirect(K,k,j,V,R,Rt),V.side=ge):_.renderBufferDirect(K,k,j,V,R,Rt),R.onAfterRender(_,k,K,j,V,Rt)}function ei(R,k,K){k.isScene!==!0&&(k=Jt);let j=yt.get(R),V=m.state.lights,Rt=m.state.shadowsArray,Nt=V.state.version,Bt=Pt.getParameters(R,V.state,Rt,k,K),kt=Pt.getProgramCacheKey(Bt),ee=j.programs;j.environment=R.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(R.isMeshStandardMaterial?W:S).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",wt),ee=new Map,j.programs=ee);let ie=ee.get(kt);if(ie!==void 0){if(j.currentProgram===ie&&j.lightsStateVersion===Nt)return Bi(R,Bt),ie}else Bt.uniforms=Pt.getUniforms(R),R.onBeforeCompile(Bt,_),ie=Pt.acquireProgram(Bt,kt),ee.set(kt,ie),j.uniforms=Bt.uniforms;let Vt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=pt.uniform),Bi(R,Bt),j.needsLights=eu(R),j.lightsStateVersion=Nt,j.needsLights&&(Vt.ambientLightColor.value=V.state.ambient,Vt.lightProbe.value=V.state.probe,Vt.directionalLights.value=V.state.directional,Vt.directionalLightShadows.value=V.state.directionalShadow,Vt.spotLights.value=V.state.spot,Vt.spotLightShadows.value=V.state.spotShadow,Vt.rectAreaLights.value=V.state.rectArea,Vt.ltc_1.value=V.state.rectAreaLTC1,Vt.ltc_2.value=V.state.rectAreaLTC2,Vt.pointLights.value=V.state.point,Vt.pointLightShadows.value=V.state.pointShadow,Vt.hemisphereLights.value=V.state.hemi,Vt.directionalShadowMap.value=V.state.directionalShadowMap,Vt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Vt.spotShadowMap.value=V.state.spotShadowMap,Vt.spotLightMatrix.value=V.state.spotLightMatrix,Vt.spotLightMap.value=V.state.spotLightMap,Vt.pointShadowMap.value=V.state.pointShadowMap,Vt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=ie,j.uniformsList=null,ie}function yr(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=os.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Bi(R,k){let K=yt.get(R);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Qf(R,k,K,j,V){k.isScene!==!0&&(k=Jt),A.resetTextureUnits();let Rt=k.fog,Nt=j.isMeshStandardMaterial?k.environment:null,Bt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yi,kt=(j.isMeshStandardMaterial?W:S).get(j.envMap||Nt),ee=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ie=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Vt=!!K.morphAttributes.position,xe=!!K.morphAttributes.normal,we=!!K.morphAttributes.color,Pe=hi;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let cn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=cn!==void 0?cn.length:0,qt=yt.get(j),Ze=m.state.lights;if(Q===!0&&(ht===!0||R!==U)){let xn=R===U&&j.id===I;pt.setState(j,R,xn)}let de=!1;j.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ze.state.version||qt.outputColorSpace!==Bt||V.isBatchedMesh&&qt.batching===!1||!V.isBatchedMesh&&qt.batching===!0||V.isBatchedMesh&&qt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qt.instancing===!1||!V.isInstancedMesh&&qt.instancing===!0||V.isSkinnedMesh&&qt.skinning===!1||!V.isSkinnedMesh&&qt.skinning===!0||V.isInstancedMesh&&qt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qt.instancingMorph===!1&&V.morphTexture!==null||qt.envMap!==kt||j.fog===!0&&qt.fog!==Rt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==pt.numPlanes||qt.numIntersection!==pt.numIntersection)||qt.vertexAlphas!==ee||qt.vertexTangents!==ie||qt.morphTargets!==Vt||qt.morphNormals!==xe||qt.morphColors!==we||qt.toneMapping!==Pe||qt.morphTargetsCount!==ue)&&(de=!0):(de=!0,qt.__version=j.version);let wn=qt.currentProgram;de===!0&&(wn=ei(j,k,V));let Fi=!1,hn=!1,Oo=!1,Le=wn.getUniforms(),ni=qt.uniforms;if(ct.useProgram(wn.program)&&(Fi=!0,hn=!0,Oo=!0),j.id!==I&&(I=j.id,hn=!0),Fi||U!==R){$.reverseDepthBuffer?(gt.copy(R.projectionMatrix),qu(gt),Yu(gt),Le.setValue(C,"projectionMatrix",gt)):Le.setValue(C,"projectionMatrix",R.projectionMatrix),Le.setValue(C,"viewMatrix",R.matrixWorldInverse);let xn=Le.map.cameraPosition;xn!==void 0&&xn.setValue(C,Ht.setFromMatrixPosition(R.matrixWorld)),$.logarithmicDepthBuffer&&Le.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Le.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,hn=!0,Oo=!0)}if(V.isSkinnedMesh){Le.setOptional(C,V,"bindMatrix"),Le.setOptional(C,V,"bindMatrixInverse");let xn=V.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Le.setValue(C,"boneTexture",xn.boneTexture,A))}V.isBatchedMesh&&(Le.setOptional(C,V,"batchingTexture"),Le.setValue(C,"batchingTexture",V._matricesTexture,A),Le.setOptional(C,V,"batchingIdTexture"),Le.setValue(C,"batchingIdTexture",V._indirectTexture,A),Le.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&Le.setValue(C,"batchingColorTexture",V._colorsTexture,A));let ko=K.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0)&&xt.update(V,K,wn),(hn||qt.receiveShadow!==V.receiveShadow)&&(qt.receiveShadow=V.receiveShadow,Le.setValue(C,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ni.envMap.value=kt,ni.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(ni.envMapIntensity.value=k.environmentIntensity),hn&&(Le.setValue(C,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&tu(ni,Oo),Rt&&j.fog===!0&&bt.refreshFogUniforms(ni,Rt),bt.refreshMaterialUniforms(ni,j,it,z,m.state.transmissionRenderTarget[R.id]),os.upload(C,yr(qt),ni,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(os.upload(C,yr(qt),ni,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Le.setValue(C,"center",V.center),Le.setValue(C,"modelViewMatrix",V.modelViewMatrix),Le.setValue(C,"normalMatrix",V.normalMatrix),Le.setValue(C,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let xn=j.uniformsGroups;for(let Go=0,nu=xn.length;Go<nu;Go++){let Pc=xn[Go];B.update(Pc,wn),B.bind(Pc,wn)}}return wn}function tu(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function eu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,k,K){yt.get(R.texture).__webglTexture=k,yt.get(R.depthTexture).__webglTexture=K;let j=yt.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let K=yt.get(R);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,K=0){b=R,T=k,w=K;let j=!0,V=null,Rt=!1,Nt=!1;if(R){let kt=yt.get(R);if(kt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),j=!1;else if(kt.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(kt.__hasExternalTextures)A.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Vt=R.depthTexture;if(kt.__boundDepthTexture!==Vt){if(Vt!==null&&yt.has(Vt)&&(R.width!==Vt.image.width||R.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}let ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Nt=!0);let ie=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[k])?V=ie[k][K]:V=ie[k],Rt=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?V=yt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?V=ie[K]:V=ie,y.copy(R.viewport),E.copy(R.scissor),N=R.scissorTest}else y.copy(ot).multiplyScalar(it).floor(),E.copy(lt).multiplyScalar(it).floor(),N=Ct;if(ct.bindFramebuffer(C.FRAMEBUFFER,V)&&j&&ct.drawBuffers(R,V),ct.viewport(y),ct.scissor(E),ct.setScissorTest(N),Rt){let kt=yt.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,kt.__webglTexture,K)}else if(Nt){let kt=yt.get(R.texture),ee=k||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,kt.__webglTexture,K||0,ee)}I=-1},this.readRenderTargetPixels=function(R,k,K,j,V,Rt,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){ct.bindFramebuffer(C.FRAMEBUFFER,Bt);try{let kt=R.texture,ee=kt.format,ie=kt.type;if(!$.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-j&&K>=0&&K<=R.height-V&&C.readPixels(k,K,j,V,Ft.convert(ee),Ft.convert(ie),Rt)}finally{let kt=b!==null?yt.get(b).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,k,K,j,V,Rt,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){let kt=R.texture,ee=kt.format,ie=kt.type;if(!$.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-j&&K>=0&&K<=R.height-V){ct.bindFramebuffer(C.FRAMEBUFFER,Bt);let Vt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.bufferData(C.PIXEL_PACK_BUFFER,Rt.byteLength,C.STREAM_READ),C.readPixels(k,K,j,V,Ft.convert(ee),Ft.convert(ie),0);let xe=b!==null?yt.get(b).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,xe);let we=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Xu(C,we,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Rt),C.deleteBuffer(Vt),C.deleteSync(we),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,K=0){R.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let j=Math.pow(2,-K),V=Math.floor(R.image.width*j),Rt=Math.floor(R.image.height*j),Nt=k!==null?k.x:0,Bt=k!==null?k.y:0;A.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,K,0,0,Nt,Bt,V,Rt),ct.unbindTexture()},this.copyTextureToTexture=function(R,k,K=null,j=null,V=0){R.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],k=arguments[2],V=arguments[3]||0,K=null);let Rt,Nt,Bt,kt,ee,ie;K!==null?(Rt=K.max.x-K.min.x,Nt=K.max.y-K.min.y,Bt=K.min.x,kt=K.min.y):(Rt=R.image.width,Nt=R.image.height,Bt=0,kt=0),j!==null?(ee=j.x,ie=j.y):(ee=0,ie=0);let Vt=Ft.convert(k.format),xe=Ft.convert(k.type);A.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let we=C.getParameter(C.UNPACK_ROW_LENGTH),Pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),cn=C.getParameter(C.UNPACK_SKIP_PIXELS),ue=C.getParameter(C.UNPACK_SKIP_ROWS),qt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ze=R.isCompressedTexture?R.mipmaps[V]:R.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ze.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,V,ee,ie,Rt,Nt,Vt,xe,Ze.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,V,ee,ie,Ze.width,Ze.height,Vt,Ze.data):C.texSubImage2D(C.TEXTURE_2D,V,ee,ie,Rt,Nt,Vt,xe,Ze),C.pixelStorei(C.UNPACK_ROW_LENGTH,we),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,cn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qt),V===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(R,k,K=null,j=null,V=0){R.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,R=arguments[2],k=arguments[3],V=arguments[4]||0);let Rt,Nt,Bt,kt,ee,ie,Vt,xe,we,Pe=R.isCompressedTexture?R.mipmaps[V]:R.image;K!==null?(Rt=K.max.x-K.min.x,Nt=K.max.y-K.min.y,Bt=K.max.z-K.min.z,kt=K.min.x,ee=K.min.y,ie=K.min.z):(Rt=Pe.width,Nt=Pe.height,Bt=Pe.depth,kt=0,ee=0,ie=0),j!==null?(Vt=j.x,xe=j.y,we=j.z):(Vt=0,xe=0,we=0);let cn=Ft.convert(k.format),ue=Ft.convert(k.type),qt;if(k.isData3DTexture)A.setTexture3D(k,0),qt=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),qt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);let Ze=C.getParameter(C.UNPACK_ROW_LENGTH),de=C.getParameter(C.UNPACK_IMAGE_HEIGHT),wn=C.getParameter(C.UNPACK_SKIP_PIXELS),Fi=C.getParameter(C.UNPACK_SKIP_ROWS),hn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ee),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ie),R.isDataTexture||R.isData3DTexture?C.texSubImage3D(qt,V,Vt,xe,we,Rt,Nt,Bt,cn,ue,Pe.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(qt,V,Vt,xe,we,Rt,Nt,Bt,cn,Pe.data):C.texSubImage3D(qt,V,Vt,xe,we,Rt,Nt,Bt,cn,ue,Pe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,de),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,hn),V===0&&k.generateMipmaps&&C.generateMipmap(qt),ct.unbindTexture()},this.initRenderTarget=function(R){yt.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ct.unbindTexture()},this.resetState=function(){T=0,w=0,b=null,ct.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===oc?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===wo?"display-p3":"srgb"}};var mi=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Rl=class extends tn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=on,f=on,h,d){super(null,o,a,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new te,Th=new te,Fr=[],Rh=new jn,Gg=new te,zs=new O,Bs=new Hn,dn=class extends O{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Rh.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Bs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Th.multiplyMatrices(n,ts),zs.matrixWorld=Th,zs.raycast(t,Fr);for(let o=0,a=Fr.length;o<a;o++){let l=Fr[o];l.instanceId=r,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rl(new Float32Array(s*this.count),s,this.count,nc,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Li=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ah=new te,Al=new Ys,Or=new Hn,kr=new L,ps=class extends Ne{constructor(t=new Re,e=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Ah.copy(s).invert(),Al.copy(t.ray).applyMatrix4(Ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){let m=c.getX(g);kr.fromBufferAttribute(h,m),Ch(kr,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p;g<v;g++)kr.fromBufferAttribute(h,g),Ch(kr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ch(i,t,e,n,s,r,o){let a=Al.distanceSqToPoint(i);if(a<e){let l=new L;Al.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Xe=class extends tn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let f=n[s],d=n[s+1]-f,p=(o-f)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,l=new te;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos($e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*f-p*h+this.aX,c=d*h+p*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends Js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,h){let d=(o-r)/c-(a-r)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,p*=f,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Gr=new L,va=new lc,Ma=new lc,Ea=new lc,Pl=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(Gr.subVectors(s[0],s[1]).add(s[0]),c=Gr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(f),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),va.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,g,v,m),Ma.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,g,v,m),Ea.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,g,v,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),Ma.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),Ea.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return n.set(va.calc(l),Ma.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ph(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Vg(i,t){let e=1-i;return e*e*t}function Wg(i,t){return 2*(1-i)*i*t}function Xg(i,t){return i*i*t}function Gs(i,t,e,n){return Vg(i,t)+Wg(i,e)+Xg(i,n)}function qg(i,t){let e=1-i;return e*e*e*t}function Yg(i,t){let e=1-i;return 3*e*e*i*t}function Zg(i,t){return 3*(1-i)*i*i*t}function $g(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return qg(i,t)+Yg(i,e)+Zg(i,n)+$g(i,s)}var uo=class extends vn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends vn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y),Vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends vn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends vn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends vn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends vn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Ph(a,l.x,c.x,f.x,h.x),Ph(a,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:uo,CubicBezierCurve3:Il,EllipseCurve:Js,LineCurve:po,LineCurve3:Ll,QuadraticBezierCurve:mo,QuadraticBezierCurve3:Dl,SplineCurve:go}),Nl=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ul[s.type]().fromJSON(s))}return this}},Ks=class extends Nl{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new po(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new mo(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new uo(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Js(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hl=class i extends Re{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$e(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/e,h=new L,d=new Tt,p=new L,g=new L,v=new L,m=0,u=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,u=t[x+1].y-t[x].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let x=0;x<=e;x++){let _=n+x*f*s,M=Math.sin(_),T=Math.cos(_);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*M,h.y=t[w].y,h.z=t[w].x*T,o.push(h.x,h.y,h.z),d.x=x/e,d.y=w/(t.length-1),a.push(d.x,d.y);let b=l[3*w+0]*M,I=l[3*w+1],U=l[3*w+0]*T;c.push(b,I,U)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let M=_+x*t.length,T=M,w=M+t.length,b=M+t.length+1,I=M+1;r.push(T,w,I),r.push(b,I,w)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Oe=class i extends Hl{constructor(t=1,e=1,n=4,s=8){let r=new Ks;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Bn=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,f=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[d]/t+1)/2,f.y=(o[d+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Y=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],d=[],p=[],g=0,v=[],m=n/2,u=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new ce(h,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(p,2));function x(){let M=new L,T=new L,w=0,b=(e-t)/n;for(let I=0;I<=r;I++){let U=[],y=I/r,E=y*(e-t)+t;for(let N=0;N<=s;N++){let H=N/s,P=H*l+a,G=Math.sin(P),z=Math.cos(P);T.x=E*G,T.y=-y*n+m,T.z=E*z,h.push(T.x,T.y,T.z),M.set(G,b,z).normalize(),d.push(M.x,M.y,M.z),p.push(H,1-y),U.push(g++)}v.push(U)}for(let I=0;I<s;I++)for(let U=0;U<r;U++){let y=v[U][I],E=v[U+1][I],N=v[U+1][I+1],H=v[U][I+1];t>0&&(f.push(y,E,H),w+=3),e>0&&(f.push(E,N,H),w+=3)}c.addGroup(u,w,0),u+=w}function _(M){let T=g,w=new Tt,b=new L,I=0,U=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let E=g;for(let N=0;N<=s;N++){let P=N/s*l+a,G=Math.cos(P),z=Math.sin(P);b.x=U*z,b.y=m*y,b.z=U*G,h.push(b.x,b.y,b.z),d.push(0,y,0),w.x=G*.5+.5,w.y=z*.5*y+.5,p.push(w.x,w.y),g++}for(let N=0;N<s;N++){let H=T+N,P=E+N;M===!0?f.push(P,P+1,H):f.push(P+1,P,H),I+=3}c.addGroup(u,I,M===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},He=class i extends Y{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yo=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),f(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new L,M=new L,T=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],_),p(e[w+1],M),p(e[w+2],T),l(_,M,T,x)}function l(x,_,M,T){let w=T+1,b=[];for(let I=0;I<=w;I++){b[I]=[];let U=x.clone().lerp(M,I/w),y=_.clone().lerp(M,I/w),E=w-I;for(let N=0;N<=E;N++)N===0&&I===w?b[I][N]=U:b[I][N]=U.clone().lerp(y,N/E)}for(let I=0;I<w;I++)for(let U=0;U<2*(w-I)-1;U++){let y=Math.floor(U/2);U%2===0?(d(b[I][y+1]),d(b[I+1][y]),d(b[I][y])):(d(b[I][y+1]),d(b[I+1][y+1]),d(b[I+1][y]))}}function c(x){let _=new L;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(x),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function f(){let x=new L;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let M=m(x)/2/Math.PI+.5,T=u(x)/Math.PI+.5;o.push(M,1-T)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){let _=o[x+0],M=o[x+2],T=o[x+4],w=Math.max(_,M,T),b=Math.min(_,M,T);w>.9&&b<.1&&(_<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,_){let M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let x=new L,_=new L,M=new L,T=new L,w=new Tt,b=new Tt,I=new Tt;for(let U=0,y=0;U<r.length;U+=9,y+=6){x.set(r[U+0],r[U+1],r[U+2]),_.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),w.set(o[y+0],o[y+1]),b.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),T.copy(x).add(_).add(M).divideScalar(3);let E=m(T);v(w,y+0,x,E),v(b,y+2,_,E),v(I,y+4,M,E)}}function v(x,_,M,T){T<0&&x.x===1&&(o[_]=x.x-1),M.x===0&&M.z===0&&(o[_]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},js=class i extends yo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qs=class extends Ks{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ks().fromJSON(s))}return this}},Jg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,d,p;if(n&&(r=ey(i,t,r,e)),i.length>80*e){a=c=i[0],l=f=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>f&&(f=d);p=Math.max(c-a,f-l),p=p!==0?32767/p:0}return tr(r,o,e,a,l,p,0),o}};function hf(i,t,e,n,s){let r,o;if(s===uy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ih(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ih(r,i[r],i[r+1],o);return o&&bo(o,o.next)&&(nr(o),o=o.next),o}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||Ce(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&oy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?jg(i,n,s,r):Kg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qg(Di(i),t,e),tr(i,t,e,n,s,r,2)):o===2&&ty(i,t,e,n,s,r):tr(Di(i),t,e,n,s,r,1);break}}}function Kg(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=d&&g.y>=h&&g.y<=p&&ns(s,a,r,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=f<h?f<d?f:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,m=f>h?f>d?f:d:h>d?h:d,u=zl(p,g,t,e,n),x=zl(v,m,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=u&&M&&M.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ns(a,f,l,h,c,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ns(a,f,l,h,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=u;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ns(a,f,l,h,c,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=x;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ns(a,f,l,h,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Qg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!bo(s,r)&&ff(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Di(n)}function ty(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cy(o,a)){let l=uf(o,a);o=Di(o,o.next),l=Di(l,l.next),tr(o,t,e,n,s,r,0),tr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ey(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=hf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ly(c));for(s.sort(ny),r=0;r<s.length;r++)e=iy(s[r],e);return e}function ny(i,t){return i.x-t.x}function iy(i,t){let e=sy(i,t);if(!e)return t;let n=uf(e,i);return Di(n,n.next),Di(e,e.next)}function sy(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ns(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),er(e,i)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&ry(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function ry(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function oy(i,t,e,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ay(s)}function ay(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ly(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ns(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function cy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hy(i,t)&&(er(i,t)&&er(t,i)&&fy(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||bo(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bo(i,t){return i.x===t.x&&i.y===t.y}function ff(i,t,e,n){let s=Wr(Ce(i,t,e)),r=Wr(Ce(i,t,n)),o=Wr(Ce(e,n,i)),a=Wr(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Vr(i,e,t)||r===0&&Vr(i,n,t)||o===0&&Vr(e,i,n)||a===0&&Vr(e,t,n))}function Vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wr(i){return i>0?1:i<0?-1:0}function hy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ff(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function fy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uf(i,t){let e=new Bl(i.i,i.x,i.y),n=new Bl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ih(i,t,e,n){let s=new Bl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ws=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lh(t),Dh(n,t);let o=t.length;e.forEach(Lh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Dh(n,e[l]);let a=Jg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xo=class i extends Re{constructor(t=new Qs([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:dy,_,M=!1,T,w,b,I;u&&(_=u.getSpacedPoints(f),M=!0,d=!1,T=u.computeFrenetFrames(f,!1),w=new L,b=new L,I=new L),d||(m=0,p=0,g=0,v=0);let U=a.extractPoints(c),y=U.shape,E=U.holes;if(!Ws.isClockWise(y)){y=y.reverse();for(let ut=0,C=E.length;ut<C;ut++){let St=E[ut];Ws.isClockWise(St)&&(E[ut]=St.reverse())}}let H=Ws.triangulateShape(y,E),P=y;for(let ut=0,C=E.length;ut<C;ut++){let St=E[ut];y=y.concat(St)}function G(ut,C,St){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(C,St)}let z=y.length,it=H.length;function X(ut,C,St){let q,$,ct,mt=ut.x-C.x,yt=ut.y-C.y,A=St.x-ut.x,S=St.y-ut.y,W=mt*mt+yt*yt,st=mt*S-yt*A;if(Math.abs(st)>Number.EPSILON){let at=Math.sqrt(W),tt=Math.sqrt(A*A+S*S),Pt=C.x-yt/at,bt=C.y+mt/at,Lt=St.x-S/tt,oe=St.y+A/tt,pt=((Lt-Pt)*S-(oe-bt)*A)/(mt*S-yt*A);q=Pt+mt*pt-ut.x,$=bt+yt*pt-ut.y;let F=q*q+$*$;if(F<=2)return new Tt(q,$);ct=Math.sqrt(F/2)}else{let at=!1;mt>Number.EPSILON?A>Number.EPSILON&&(at=!0):mt<-Number.EPSILON?A<-Number.EPSILON&&(at=!0):Math.sign(yt)===Math.sign(S)&&(at=!0),at?(q=-yt,$=mt,ct=Math.sqrt(W)):(q=mt,$=yt,ct=Math.sqrt(W/2))}return new Tt(q/ct,$/ct)}let Z=[];for(let ut=0,C=P.length,St=C-1,q=ut+1;ut<C;ut++,St++,q++)St===C&&(St=0),q===C&&(q=0),Z[ut]=X(P[ut],P[St],P[q]);let ot=[],lt,Ct=Z.concat();for(let ut=0,C=E.length;ut<C;ut++){let St=E[ut];lt=[];for(let q=0,$=St.length,ct=$-1,mt=q+1;q<$;q++,ct++,mt++)ct===$&&(ct=0),mt===$&&(mt=0),lt[q]=X(St[q],St[ct],St[mt]);ot.push(lt),Ct=Ct.concat(lt)}for(let ut=0;ut<m;ut++){let C=ut/m,St=p*Math.cos(C*Math.PI/2),q=g*Math.sin(C*Math.PI/2)+v;for(let $=0,ct=P.length;$<ct;$++){let mt=G(P[$],Z[$],q);vt(mt.x,mt.y,-St)}for(let $=0,ct=E.length;$<ct;$++){let mt=E[$];lt=ot[$];for(let yt=0,A=mt.length;yt<A;yt++){let S=G(mt[yt],lt[yt],q);vt(S.x,S.y,-St)}}}let Ut=g+v;for(let ut=0;ut<z;ut++){let C=d?G(y[ut],Ct[ut],Ut):y[ut];M?(b.copy(T.normals[0]).multiplyScalar(C.x),w.copy(T.binormals[0]).multiplyScalar(C.y),I.copy(_[0]).add(b).add(w),vt(I.x,I.y,I.z)):vt(C.x,C.y,0)}for(let ut=1;ut<=f;ut++)for(let C=0;C<z;C++){let St=d?G(y[C],Ct[C],Ut):y[C];M?(b.copy(T.normals[ut]).multiplyScalar(St.x),w.copy(T.binormals[ut]).multiplyScalar(St.y),I.copy(_[ut]).add(b).add(w),vt(I.x,I.y,I.z)):vt(St.x,St.y,h/f*ut)}for(let ut=m-1;ut>=0;ut--){let C=ut/m,St=p*Math.cos(C*Math.PI/2),q=g*Math.sin(C*Math.PI/2)+v;for(let $=0,ct=P.length;$<ct;$++){let mt=G(P[$],Z[$],q);vt(mt.x,mt.y,h+St)}for(let $=0,ct=E.length;$<ct;$++){let mt=E[$];lt=ot[$];for(let yt=0,A=mt.length;yt<A;yt++){let S=G(mt[yt],lt[yt],q);M?vt(S.x,S.y+_[f-1].y,_[f-1].x+St):vt(S.x,S.y,h+St)}}}Q(),ht();function Q(){let ut=s.length/3;if(d){let C=0,St=z*C;for(let q=0;q<it;q++){let $=H[q];Ht($[2]+St,$[1]+St,$[0]+St)}C=f+m*2,St=z*C;for(let q=0;q<it;q++){let $=H[q];Ht($[0]+St,$[1]+St,$[2]+St)}}else{for(let C=0;C<it;C++){let St=H[C];Ht(St[2],St[1],St[0])}for(let C=0;C<it;C++){let St=H[C];Ht(St[0]+z*f,St[1]+z*f,St[2]+z*f)}}n.addGroup(ut,s.length/3-ut,0)}function ht(){let ut=s.length/3,C=0;gt(P,C),C+=P.length;for(let St=0,q=E.length;St<q;St++){let $=E[St];gt($,C),C+=$.length}n.addGroup(ut,s.length/3-ut,1)}function gt(ut,C){let St=ut.length;for(;--St>=0;){let q=St,$=St-1;$<0&&($=ut.length-1);for(let ct=0,mt=f+m*2;ct<mt;ct++){let yt=z*ct,A=z*(ct+1),S=C+q+yt,W=C+$+yt,st=C+$+A,at=C+q+A;Ot(S,W,st,at)}}}function vt(ut,C,St){l.push(ut),l.push(C),l.push(St)}function Ht(ut,C,St){Jt(ut),Jt(C),Jt(St);let q=s.length/3,$=x.generateTopUV(n,s,q-3,q-2,q-1);jt($[0]),jt($[1]),jt($[2])}function Ot(ut,C,St,q){Jt(ut),Jt(C),Jt(q),Jt(C),Jt(St),Jt(q);let $=s.length/3,ct=x.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);jt(ct[0]),jt(ct[1]),jt(ct[3]),jt(ct[1]),jt(ct[2]),jt(ct[3])}function Jt(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function jt(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return py(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ul[s.type]().fromJSON(s)),new i(n,t.options)}},dy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new Tt(r,o),new Tt(a,l),new Tt(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new Tt(o,1-l),new Tt(c,1-h),new Tt(d,1-g),new Tt(v,1-u)]:[new Tt(a,1-l),new Tt(f,1-h),new Tt(p,1-g),new Tt(m,1-u)]}};function py(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ke=class i extends yo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fn=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=t,d=(e-t)/s,p=new L,g=new Tt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let u=r+m/n*o;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,f.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let u=0;u<n;u++){let x=u+m,_=x,M=x+n+1,T=x+n+2,w=x+1;a.push(_,M,w),a.push(M,T,w)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var At=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new L,d=new L,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){let x=[],_=u/n,M=0;u===0&&o===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let w=T/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(w+M,1-_),x.push(c++)}f.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){let _=f[u][x+1],M=f[u][x],T=f[u+1][x],w=f[u+1][x+1];(u!==0||o>0)&&p.push(_,M,w),(u!==n-1||l<Math.PI)&&p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ee=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],f=new L,h=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(v,m,x),o.push(m,u,x)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zt=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Xr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function my(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,a=2*e-n;break;case Hc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:o=t,l=2*n-e;break;case Hc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,u=-d*m+2*d*v-d*g,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let T=0;T!==a;++T)r[T]=u*o[f+T]+x*o[c+T]+_*o[l+T]+M*o[h+T];return r}},Ol=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*f;return r}},kl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case cl:e=this.InterpolantFactoryMethodLinear;break;case Wo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&my(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=e[h+g];if(v!==e[d+g]||v!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=cl;var Ui=class extends In{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Qr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends In{};Gl.prototype.ValueTypeName="color";var Vl=class extends In{};Vl.prototype.ValueTypeName="number";var Wl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},_o=class extends In{InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends In{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Qr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends In{};Xl.prototype.ValueTypeName="vector";var Uh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ql=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null}}},gy=new ql,ir=class{constructor(t){this.manager=t!==void 0?t:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ir.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yl=class extends ir{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Uh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=qs("img");function l(){f(),Uh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){f(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var gs=class extends ir{constructor(t){super(t)}load(t,e,n,s){let r=new tn,o=new Yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ys=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xs=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new te,Nh=new L,Hh=new L,vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zh=new te,Fs=new L,Sa=new L,Zl=class extends vo{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),Sa.copy(n.position),Sa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Sa),n.updateMatrixWorld(),s.makeTranslation(-Fs.x,-Fs.y,-Fs.z),zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh)}},Mo=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$l=class extends vo{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gi=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},_s=class extends ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var vs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Bh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Bh(){return performance.now()}var cc="\\[\\]\\.:\\/",yy=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",xy="[^"+cc.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",hc),vy=/(WCOD+)?/.source.replace("WCOD",xy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),Ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),wy=new RegExp("^"+_y+vy+My+Ey+"$"),Sy=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(t){let e=wy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Jl;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bx=new Float32Array(1);var Fh=new te,Ms=class{constructor(t,e,n=0,s=1/0){this.ray=new Ys(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(t,e=!0,n=[]){return Kl(t,this,n,e),n.sort(Oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kl(t[s],this,n,e);return n.sort(Oh),n}};function Oh(i,t){return i.distance-t.distance}function Kl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);var bs=class{constructor(t,e,n,s,r=.2){this.minX=t,this.minZ=e,this.cell=r,this.cols=Math.ceil((n-t)/r),this.rows=Math.ceil((s-e)/r),this.blocked=new Uint8Array(this.cols*this.rows)}idx(t,e){return e*this.cols+t}toCell(t,e){return{c:Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cell))),r:Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cell)))}}center(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}blockRect(t,e,n,s,r=.22){let o=this.toCell(Math.min(t,n)-r,Math.min(e,s)-r),a=this.toCell(Math.max(t,n)+r,Math.max(e,s)+r);for(let l=o.r;l<=a.r;l++)for(let c=o.c;c<=a.c;c++)this.blocked[this.idx(c,l)]=1}isFree(t,e){let{c:n,r:s}=this.toCell(t,e);return!this.blocked[this.idx(n,s)]}nearestFree(t,e){if(!this.blocked[this.idx(t,e)])return{c:t,r:e};for(let n=1;n<12;n++)for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){let o=t+r,a=e+s;if(!(o<0||a<0||o>=this.cols||a>=this.rows)&&!this.blocked[this.idx(o,a)])return{c:o,r:a}}return{c:t,r:e}}lineFree(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.max(1,Math.ceil(n/(this.cell*.5)));for(let r=1;r<s;r++){let o=r/s;if(!this.isFree(t.x+(e.x-t.x)*o,t.z+(e.z-t.z)*o))return!1}return!0}find(t,e){let n=this.toCell(t.x,t.z),s=this.nearestFree(...Object.values(this.toCell(e.x,e.z))),r=this.idx(n.c,n.r),o=this.idx(s.c,s.r);if(r===o)return[{x:e.x,z:e.z}];let a=this.cols*this.rows,l=new Float32Array(a).fill(1/0),c=new Int32Array(a).fill(-1),f=new Uint8Array(a),h=[],d=(w,b)=>{h.push([b,w]);let I=h.length-1;for(;I>0;){let U=I-1>>1;if(h[U][0]<=h[I][0])break;[h[U],h[I]]=[h[I],h[U]],I=U}},p=()=>{let w=h[0],b=h.pop();if(h.length){h[0]=b;let I=0;for(;;){let U=2*I+1,y=U+1,E=I;if(U<h.length&&h[U][0]<h[E][0]&&(E=U),y<h.length&&h[y][0]<h[E][0]&&(E=y),E===I)break;[h[E],h[I]]=[h[I],h[E]],I=E}}return w[1]},g=w=>{let b=Math.abs(w%this.cols-s.c),I=Math.abs(Math.floor(w/this.cols)-s.r);return b+I+(Math.SQRT2-2)*Math.min(b,I)};l[r]=0,d(r,g(r));let v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],m=!1;for(;h.length;){let w=p();if(f[w])continue;if(w===o){m=!0;break}f[w]=1;let b=w%this.cols,I=Math.floor(w/this.cols);for(let[U,y,E]of v){let N=b+U,H=I+y;if(N<0||H<0||N>=this.cols||H>=this.rows)continue;let P=this.idx(N,H);if(this.blocked[P]&&P!==o||U&&y&&(this.blocked[this.idx(b+U,I)]||this.blocked[this.idx(b,I+y)]))continue;let G=l[w]+E;G<l[P]&&(l[P]=G,c[P]=w,d(P,G+g(P)))}}if(!m)return[{x:e.x,z:e.z}];let u=[];for(let w=o;w!==-1&&w!==r;w=c[w])u.push(w);u.reverse();let x=u.map(w=>this.center(w%this.cols,Math.floor(w/this.cols)));x[x.length-1]={x:e.x,z:e.z};let _=[],M={x:t.x,z:t.z},T=0;for(;T<x.length;){let w=T;for(let b=x.length-1;b>T;b--)if(this.lineFree(M,x[b])){w=b;break}_.push(x[w]),M=x[w],T=w+1}return _}};var ti=(i,t=.85)=>new Zt({color:i,roughness:t}),fc=[{x:.4,z:.4},{x:-1.6,z:.6},{x:1.9,z:0},{x:-5,z:2.6},{x:5.4,z:-3.3},{x:-2.4,z:3.9},{x:2.6,z:3.8},{x:-5.6,z:-2.8},{x:.2,z:-2.2},{x:4.4,z:-3.7},{x:6,z:12.6},{x:16.4,z:12},{x:22,z:6.2}],Ts=class{constructor(t,e){this.nav=e,this.root=new Dt,this.body=new Dt,this.root.add(this.body);let n=ti("#e39a4e"),s=ti("#b86e2c"),r=ti("#fbf3e6"),o=ti("#f2a3a3"),a=(h,d,p,g,v,m)=>{let u=new O(d,p);return u.position.set(g,v,m),u.castShadow=!0,h.add(u),u},l=a(this.body,new Oe(.11,.26,6,12),n,0,.2,0);l.rotation.x=Math.PI/2,a(this.body,new At(.075,10,8),r,0,.17,.12).scale.set(1,1,.7);for(let h of[-.06,.04])a(this.body,new Mt(.2,.03,.05),s,0,.3,h).rotation.x=.1;this.head=new Dt,this.head.position.set(0,.32,.2),this.body.add(this.head),a(this.head,new At(.1,14,12),n,0,0,0).scale.set(1.05,.95,.95),a(this.head,new At(.05,10,8),r,0,-.03,.07).scale.set(1.2,.8,.7);for(let h of[-1,1]){let d=a(this.head,new He(.035,.07,4),n,h*.055,.09,-.01);d.rotation.z=-h*.25,a(this.head,new At(.012,6,6),ti("#1d1a17",.3),h*.038,.02,.088)}a(this.head,new At(.01,6,6),o,0,-.01,.1),this.legs=[];for(let[h,d]of[[-.06,.12],[.06,.12],[-.06,-.12],[.06,-.12]]){let p=new Dt;p.position.set(h,.15,d),this.body.add(p),a(p,new Y(.025,.022,.15,6),n,0,-.075,0),a(p,new At(.026,6,6),r,0,-.15,.01),this.legs.push(p)}this.tail=[];let c=this.body,f=[0,.24,-.24];for(let h=0;h<5;h++){let d=new Dt;d.position.set(...f),c.add(d),a(d,new Y(.022-h*.002,.025-h*.002,.08,6),h===4?s:n,0,.04,0),this.tail.push(d),c=d,f=[0,.08,0]}this.tail[0].rotation.x=-.9,this.pos={x:1,z:.8},this.facing=0,this.path=[],this.mode="sit",this.until=performance.now()/1e3+4,this.phase=0,this.root.position.set(this.pos.x,0,this.pos.z),t.add(this.root)}pet(){this.path=[],this.mode="happy",this.until=performance.now()/1e3+2.6}headWorld(t){return this.head.updateWorldMatrix(!0,!1),t.set(0,.2,0).applyMatrix4(this.head.matrixWorld)}props(){if(this.bowl)return;let t=this.root.parent;this.bowl=new Dt;let e=new O(new Y(.13,.1,.06,16,1,!0),ti("#e1262d",.5));e.material.side=ge,e.position.y=.03;let n=new O(new Y(.115,.115,.02,16),ti("#b8742f",.9));n.position.y=.045,this.bowl.add(e,n),this.food=n,this.bowl.visible=!1,t.add(this.bowl),this.yarn=new Dt;let s=new O(new At(.07,12,10),ti("#ff7aa8",.9));s.position.y=.07;let r=new O(new Ee(.07,.008,6,20),ti("#e84f87",.9));r.position.y=.07,r.rotation.y=.6,this.yarn.add(s,r),this.yarn.visible=!1,t.add(this.yarn)}command(t,e=0){if(!t||this.cmd&&t.seq<=this.cmd.seq&&t.at<=this.cmd.at)return;this.remote=!0;let n=this.cmd&&this.cmd.seq!==t.seq&&t.act;this.cmd=t,this.skew=e,this.props(),this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.goTo(t.target),this.mode="walk",this.followId=t.mode==="follow"?t.by:null,n&&t.act==="call"&&this.onFx&&this.onFx("\u{1F43E}"),t.act==="feed"&&(this.bowl.position.set(this.dest.x+.3,0,this.dest.z),this.food.scale.set(1,1,1),this.bowl.visible=!0)}goTo(t){let e=this.nav.toCell(t.x,t.z),n=this.nav.nearestFree(e.c,e.r);this.dest=this.nav.center(n.c,n.r),this.path=this.nav.find(this.pos,this.dest)}pickTarget(){for(let t=0;t<8;t++){let e=fc[Math.floor(Math.random()*fc.length)];if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)>1.5)return e}return fc[0]}arrive(t){let e=this.cmd,s=!e||!e.until||Date.now()+(this.skew||0)>e.until+6e4?0:Math.min(12,(e.until-e.at)/1e3),r=e?e.then:"sit";r==="pet"&&s>0?(this.mode="happy",this.until=t+s,this.onFx&&this.onFx("\u{1F495}")):r==="feed"&&s>0?(this.mode="eat",this.until=t+s,this.facing=Math.atan2(this.bowl.position.x-this.pos.x,this.bowl.position.z-this.pos.z),this.onFx&&this.onFx("\u{1F60B}")):r==="play"&&s>0?(this.mode="play",this.until=t+s,this.playC={x:this.pos.x,z:this.pos.z},this.yarn.visible=!0,this.onFx&&this.onFx("\u{1F9F6}")):(this.mode=r==="loaf"?"loaf":"sit",this.until=t+1e6,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1))}update(t,e,n){this.remote?this.remoteTick(t,e,n):(this.mode==="happy"&&e>this.until&&(this.mode="sit",this.until=e+3+Math.random()*5),this.mode!=="walk"&&this.mode!=="happy"&&e>this.until&&(this.path=this.nav.find(this.pos,this.pickTarget()),this.mode="walk"));let s=!1;if(this.mode==="walk"){let c=this.path[0];if(c){let f=this.followId||this.cmd&&this.cmd.act?1.5:.75,h=c.x-this.pos.x,d=c.z-this.pos.z,p=Math.hypot(h,d),g=f*t;p<=g?(this.pos.x=c.x,this.pos.z=c.z,this.path.shift()):(this.pos.x+=h/p*g,this.pos.z+=d/p*g),this.turn(Math.atan2(h,d),t),s=!0}else if(this.remote)this.arrive(e);else{let f=Math.random();this.mode=f<.35?"loaf":"sit",this.until=e+5+Math.random()*12}}if(this.mode==="play"){let c=e*2.2,f=this.playC;this.yarn.position.set(f.x+Math.cos(c)*.45,0,f.z+Math.sin(c)*.45),this.yarn.rotation.z=-c*3;let h=this.yarn.position.x-this.pos.x,d=this.yarn.position.z-this.pos.z,p=Math.hypot(h,d);p>.22&&(this.pos.x+=h/p*Math.min(p-.2,1.4*t),this.pos.z+=d/p*Math.min(p-.2,1.4*t),s=!0),this.turn(Math.atan2(h,d),t)}this.mode==="eat"&&this.food&&(this.food.scale.y=Math.max(.15,this.food.scale.y-t*.12)),this.phase+=t*(s?11:0);let r=1-Math.exp(-t*8);this.legs.forEach((c,f)=>{let h=Math.sin(this.phase+(f%2?Math.PI:0)+(f>1?Math.PI/2:0));c.rotation.x+=((s?h*.6:this.mode==="loaf"?-1.3:0)-c.rotation.x)*r});let o=this.mode==="sit"?-.45:this.mode==="eat"?.18:0,a=this.mode==="loaf"?-.1:this.mode==="sit"?-.03:this.mode==="eat"?-.02:Math.abs(Math.sin(this.phase))*.01;this.body.rotation.x+=(o-this.body.rotation.x)*r,this.body.position.y+=(a-this.body.position.y)*r,this.mode==="sit"?this.body.position.z+=(-.08-this.body.position.z)*r:this.body.position.z+=(0-this.body.position.z)*r,this.mode==="happy"&&(this.body.position.y=Math.abs(Math.sin(e*9))*.12),this.mode==="play"&&(this.body.position.y=Math.max(0,Math.sin(e*7))*.1),this.head.rotation.x=this.mode==="sit"?.45:this.mode==="happy"?-.3:this.mode==="eat"?.75+Math.sin(e*10)*.08:0,this.head.rotation.y=s||this.mode==="eat"?0:Math.sin(e*.7)*.6;let l=this.mode==="happy"||this.mode==="play";this.tail.forEach((c,f)=>{f&&(c.rotation.z=Math.sin(e*(l?14:s?6:2.2)+f*.7)*(.18+f*.03)),c.rotation.x=f?l?.05:.25:this.mode==="loaf"?-1.45:l?-.15:-.9}),this.root.position.set(this.pos.x,0,this.pos.z),this.root.rotation.y=this.facing}turn(t,e){let n=((t-this.facing+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;this.facing+=n*Math.min(1,e*8)}remoteTick(t,e,n){let s=this.cmd;if(!s)return;let r=this.followId&&s.until&&Date.now()+(this.skew||0)>s.until;if(this.followId&&!r&&n&&n.posOf){let o=n.posOf(this.followId);o&&(!this.nextFollow||e>this.nextFollow)&&(this.nextFollow=e+.7,Math.hypot(o.x-this.pos.x,o.z-this.pos.z)>1.1&&(this.goTo({x:o.x+.45,z:o.z+.35}),this.mode="walk"))}(r||["happy","eat","play"].includes(this.mode)&&e>this.until)&&(this.followId=null,this.bowl&&(this.bowl.visible=!1,this.yarn.visible=!1),this.mode="sit",this.until=e+1e6)}};function On(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Re,c=0;for(let f=0;f<i.length;++f){let h=i[f],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,f),c+=p}}if(e){let f=0,h=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+f);f+=i[d].attributes.position.count}l.setIndex(h)}for(let f in r){let h=df(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(let f in o){let h=o[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let d=0;d<h;++d){let p=[];for(let v=0;v<o[f].length;++v)p.push(o[f][v][d]);let g=df(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function df(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let o=new t(r),a=new Ie(o,e,n),l=0;for(let c=0;c<i.length;++c){let f=i[c];if(f.isInterleavedBufferAttribute){let h=l/e;for(let d=0,p=f.count;d<p;d++)for(let g=0;g<e;g++){let v=f.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}var pf=["#f1c9a5","#e2ae84","#f6d7bd","#c98e62","#ebbf98","#d9a074"];var mf=["short","long","spiky","bun","bob","short"],by=(i,t,e)=>i+(t-i)*e,gf={},Wt=(i,t)=>gf[i]||(gf[i]=t()),kn=new Map;function be(i,t=.75){let e=String(i).toLowerCase()+"|"+t,n=kn.get(e);return n||(n=new Zt({color:i,roughness:t,metalness:0}),kn.set(e,n)),n}var To=null;function Ty(){if(To)return To;let i=document.createElement("canvas");i.width=32,i.height=256;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#f3e2ae"),e.addColorStop(1,"#e2c983"),t.fillStyle=e,t.fillRect(0,0,32,256),t.fillStyle="rgba(150,110,50,.45)";for(let s=1;s<16;s++)t.fillRect(0,Math.round(s*256/16),32,2);let n=new Xe(i);return n.colorSpace=me,To=new Zt({map:n,roughness:.85,side:ge}),To}var Ry=()=>kn.get("cheek")||kn.set("cheek",new Zt({color:"#ff8f8f",transparent:!0,opacity:.35,roughness:1})).get("cheek"),or={robe:"#ec8a1c",under:"#d06a17",sash:"#a8401a",shoes:"#5b3a24"},Ro=null;function Ay(){if(Ro)return Ro;let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#a8401a",t.fillRect(0,0,256,128),t.strokeStyle="#f2c14e",t.lineWidth=8,t.strokeRect(8,8,240,112),t.fillStyle="#ffd56a",t.font='900 72px "Segoe UI", "Noto Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("SIMI",128,68);let e=new Xe(i);return e.colorSpace=me,Ro=new Zt({map:e,roughness:.8}),Ro}var Hi=class{constructor(t,e){this.index=e,this.root=new Dt,this.body=new Dt,this.root.add(this.body),this.joint={},this.pose={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.08,armRz:-.08,headY:0,headX:0,lean:0,lift:0,turn:0,wig:0},this.phase=Math.random()*10,this.blinkAt=performance.now()/1e3+1+Math.random()*3,this.talkUntil=0,this.action=null,this.dance=null,this.actionUntil=0,this.build(t)}build(t){this.agent=t,t={...t},t.outfit==="kasaya"&&Object.assign(t,{shirt:or.robe,pants:or.under,shoes:or.shoes});let e=t.skin||pf[this.index%pf.length],n=t.hairStyle||mf[this.index%mf.length];for(this.body.traverse(u=>{u.isMesh&&u.geometry.userData.own&&u.geometry.dispose()});this.body.children.length;)this.body.remove(this.body.children[0]);let s={shirt:be(t.shirt||"#3b6fb6",.8),skin:be(e,.6),hair:be(t.hair||"#2b1d14",.9),pants:be(t.pants||"#2f3342",.85),shoe:be(t.shoes||"#1d1d24",.6),dark:be("#1f1a17",.4),white:be("#ffffff",.3),mouth:be("#7a3434",.6),cheek:Ry()};this.mats=s;let r=(u,x,_,M=0,T=0,w=0)=>{let b=new O(x,_);return b.position.set(M,T,w),b.castShadow=!0,u.add(b),b},o=.42;this.shoes=[];let a=Wt("leg",()=>new Oe(.078,.25,3,8)),l=Wt("shoe",()=>new Mt(.14,.08,.22));for(let u of[-1,1]){let x=new Dt;x.position.set(u*.095,o,0),r(x,a,s.pants,0,-.2,0),this.shoes.push(r(x,l,s.shoe,0,-.375,.045)),this.body.add(x),this.joint[u<0?"legL":"legR"]=x}let c=r(this.body,Wt("torso",()=>new Oe(.19,.2,4,12)),s.shirt,0,.68,0);c.scale.set(1,1,.78),this.torso=c,r(this.body,Wt("belt",()=>new Y(.185,.185,.05,12)),s.pants,0,.47,0).scale.set(1,1,.8);let f=Wt("arm",()=>new Oe(.062,.22,3,8)),h=Wt("hand",()=>new At(.068,8,6));for(let u of[-1,1]){let x=new Dt;x.position.set(u*.255,.86,0),r(x,f,s.shirt,0,-.15,0),r(x,h,s.skin,0,-.35,0),this.body.add(x),this.joint[u<0?"armL":"armR"]=x}this.cup=r(this.joint.armR,Wt("cup",()=>new Y(.05,.04,.11,12)),be("#e9f3fb",.3),0,-.4,.05),this.cup.visible=!1,this.stick=r(this.joint.armR,Wt("stick",()=>{let u=new Y(.012,.022,1.35,8);return u.translate(0,.5,0),u}),be("#c99a5b",.45),0,-.36,.02),this.stick.rotation.x=1.35,this.stick.visible=!1,this.paper=r(this.joint.armL,Wt("paper",()=>new Mt(.2,.02,.26)),be("#fffdf5",.9),0,-.4,.08),this.paper.visible=!1;let d=new Dt;d.position.set(0,1,0),this.body.add(d),this.joint.head=d,r(d,Wt("neck",()=>new Y(.07,.08,.1,10)),s.skin,0,-.03,0),r(d,Wt("head",()=>new At(.25,20,14)),s.skin,0,.19,0);let p=Wt("eye",()=>new At(.034,10,8)),g=Wt("hl",()=>new At(.011,6,6));this.eyes=[];for(let u of[-1,1]){let x=r(d,p,s.dark,u*.088,.21,.222);x.scale.set(1,1.15,.6),r(x,g,s.white,.012,.014,.03).castShadow=!1,this.eyes.push(x);let _=r(d,Wt("cheek",()=>new At(.045,10,8)),s.cheek,u*.15,.13,.19);_.scale.set(1,.6,.3),_.castShadow=!1}if(this.mouth=r(d,Wt("mouth",()=>new Mt(.075,.02,.02)),s.mouth,0,.1,.238),n==="bald"){let u=r(d,Wt("shine",()=>new At(.06,10,8)),kn.get("shine")||kn.set("shine",new se({color:"#ffffff",transparent:!0,opacity:.35,depthWrite:!1})).get("shine"),-.07,.42,.1);u.scale.set(1.3,.35,.8),u.castShadow=!1}else{let u=r(d,Wt("cap",()=>new At(.268,20,10,0,Math.PI*2,0,Math.PI*.52)),s.hair,0,.2,-.005);if(u.rotation.x=-.32,n==="buzz"?u.scale.set(.97,.9,.97):r(d,Wt("bang",()=>new At(.2,12,8)),s.hair,0,.36,.12).scale.set(1.15,.38,.62),n==="curly"){let x=Wt("curl",()=>new At(.085,8,6));for(let _=0;_<14;_++){let M=_/14*Math.PI*2,T=_%2?.36:.28;r(d,x,s.hair,Math.sin(M)*.24,T+Math.cos(M*2)*.03,Math.cos(M)*.22-.03)}r(d,x,s.hair,0,.47,0),r(d,x,s.hair,.1,.45,-.08),r(d,x,s.hair,-.1,.45,-.08)}else if(n==="ponytail"){r(d,Wt("tie2",()=>new At(.06,10,8)),be(t.accent||"#e1262d",.5),0,.33,-.25);let x=r(d,Wt("tail",()=>new Oe(.075,.26,4,10)),s.hair,0,.16,-.32);x.rotation.x=.35}else if(n==="long"){r(d,Wt("long",()=>new Oe(.2,.28,6,12)),s.hair,0,.05,-.12).scale.set(1.15,1,.55);for(let _ of[-1,1])r(d,Wt("lock",()=>new Oe(.06,.24,4,8)),s.hair,_*.22,.07,.02)}else if(n==="bun"&&t.accessory!=="nonla")r(d,Wt("bun",()=>new At(.11,14,10)),s.hair,0,.45,-.13);else if(n==="spiky"&&t.accessory!=="nonla"){let x=Wt("spike",()=>new He(.07,.17,6));[[-.12,.44,.02,.4],[0,.48,0,0],[.12,.44,.02,-.4],[-.06,.45,-.12,.2],[.07,.45,-.12,-.2]].forEach(([_,M,T,w])=>{let b=r(d,x,s.hair,_,M,T);b.rotation.z=w,b.rotation.x=-.25})}else if(n==="bob"){let x=r(d,Wt("bob",()=>new At(.29,20,12,0,Math.PI*2,0,Math.PI*.62)),s.hair,0,.16,-.03);x.rotation.x=-.15}}let v=t.accessory||"none",m=be(t.accent||"#e1262d",.5);if(v==="cap"){let u=r(d,Wt("capTop",()=>new At(.275,20,12,0,Math.PI*2,0,Math.PI*.5)),m,0,.24,-.01);u.rotation.x=-.18;let x=r(d,Wt("brim",()=>new Y(.17,.17,.025,20,1,!1,-Math.PI/2,Math.PI)),m,0,.3,.2);x.rotation.x=.12}else if(v==="nonla"){let u=r(d,Wt("nonla",()=>new He(.47,.33,32,1,!0)),Ty(),0,.545,-.01);u.rotation.x=-.12;let x=r(d,Wt("nonlaRim",()=>new Ee(.47,.009,5,40)),be("#c9a45c",.7),0,.38,.01);x.rotation.x=Math.PI/2-.12;let _=r(d,Wt("nonlaStrap",()=>new Ee(.235,.011,5,24,Math.PI)),m,0,.27,.05);_.rotation.set(-.55,0,Math.PI),_.castShadow=!1}else if(v==="headphones"){let u=r(d,Wt("band",()=>new Ee(.28,.022,8,24,Math.PI)),be("#2b2b33",.4),0,.2,0);u.rotation.z=0;for(let x of[-1,1])r(d,Wt("cup2",()=>new Y(.075,.075,.06,16)),m,x*.27,.18,0).rotation.z=Math.PI/2}else if(v==="bow"){for(let u of[-1,1]){let x=r(d,Wt("bowW",()=>new He(.07,.13,4)),m,u*.07,.43,.06);x.rotation.z=u*Math.PI/2}r(d,Wt("bowK",()=>new At(.035,8,6)),m,0,.43,.06)}else if(v==="crown")r(d,Wt("crown",()=>new Y(.14,.15,.1,5,1,!0)),kn.get("crown")||kn.set("crown",new Zt({color:"#f5c518",roughness:.3,side:ge})).get("crown"),0,.5,-.02);else if(v==="headset"){let u=be("#23262f",.4);r(d,Wt("hsBand",()=>new Ee(.275,.014,6,24,Math.PI)),u,0,.2,0),r(d,Wt("hsCup",()=>new Y(.06,.06,.05,14)),m,-.27,.18,0).rotation.z=Math.PI/2,r(d,Wt("hsCup2",()=>new Y(.035,.035,.03,10)),u,.265,.18,0).rotation.z=Math.PI/2,r(d,Wt("hsBoom",()=>new Y(.009,.009,.22,6)),u,-.2,.12,.13).rotation.set(Math.PI/2,0,-.95),r(d,Wt("hsMic",()=>new At(.022,8,6)),u,-.1,.09,.225)}if(t.outfit==="blazer"){r(this.body,Wt("vShirt",()=>new Mt(.13,.2,.02)),s.white,0,.77,.148),r(this.body,Wt("vTie",()=>new Mt(.04,.17,.012)),be(t.accent||"#f5c518",.5),0,.76,.16);for(let u of[-1,1]){let x=r(this.body,Wt("vLapel",()=>new Mt(.045,.24,.016)),be(t.lapel||"#0b3f86",.6),u*.075,.76,.155);x.rotation.z=u*.32}r(this.body,Wt("vBadge",()=>new Mt(.075,.032,.01)),be("#f5c518",.3),.12,.8,.14).rotation.y=.45}if(t.outfit==="kasaya"){let u=be(or.sash,.85);for(let w of[.152,-.152]){let b=r(this.body,Wt("ksSash",()=>new Mt(.11,.48,.02)),u,.02,.7,w);b.rotation.z=-.62}r(this.body,Wt("ksShoulder",()=>new At(.085,12,8)),u,-.2,.9,0).scale.set(1,.6,1.2);let x=kn.get("skirt")||kn.set("skirt",new Zt({color:or.robe,roughness:.85,side:ge})).get("skirt");r(this.body,Wt("ksSkirt",()=>new Y(.195,.25,.3,18,1,!0)),x,0,.32,0).scale.set(1,1,.85);let _=r(this.body,Wt("ksHem",()=>new Ee(.25,.012,6,24)),u,0,.17,0);_.rotation.x=Math.PI/2,_.scale.set(1,.85,1);let M=r(this.body,Wt("ksBeads",()=>new Ee(.2,.022,6,18)),be("#5b3418",.5),0,.9,.01);M.rotation.x=Math.PI/2-.35,M.scale.set(1,.8,1),r(this.body,Wt("ksBead",()=>new At(.035,10,8)),be("#f2c14e",.3),0,.84,.17);let T=r(this.body,Wt("ksBack",()=>new ne(.22,.11)),Ay(),0,.66,-.156);T.rotation.y=Math.PI,T.castShadow=!1}if(v==="glasses"&&!t.isReviewer&&(t={...t,isReviewer:!0}),v==="tie"&&!t.isManager&&(t={...t,isManager:!0}),t.isManager&&(r(this.body,Wt("tie",()=>new Mt(.06,.24,.02)),be("#b3362f",.5),0,.73,.155),r(this.body,Wt("knot",()=>new Mt(.075,.05,.03)),be("#8f2a24",.5),0,.86,.15)),t.isReviewer){let u=be("#2b2b33",.4),x=Wt("glass",()=>new Ee(.062,.012,8,20));for(let _ of[-1,1])r(d,x,u,_*.088,.21,.245);r(d,Wt("bridge",()=>new Mt(.06,.012,.012)),u,0,.215,.25)}this.mergeParts()}mergeParts(){let t=new Set([...this.eyes,this.mouth,this.torso,...this.shoes,this.cup,this.stick,this.paper]);for(let e of[this.body,...Object.values(this.joint)]){let n=new Map;for(let s of e.children){if(!s.isMesh||t.has(s)||s.children.length||!s.visible)continue;let r=s.material.uuid;n.has(r)||n.set(r,[]),n.get(r).push(s)}for(let s of n.values())if(!(s.length<2))try{let r=s.map(l=>{l.updateMatrix();let c=l.geometry.clone();c.applyMatrix4(l.matrix);for(let f of Object.keys(c.attributes))["position","normal","uv"].includes(f)||c.deleteAttribute(f);return c.index?c:null});if(r.some(l=>!l))continue;let o=On(r,!1);if(r.forEach(l=>l.dispose()),!o)continue;o.userData.own=!0;let a=new O(o,s[0].material);a.castShadow=s[0].castShadow,a.receiveShadow=s[0].receiveShadow;for(let l of s)e.remove(l);e.add(a)}catch{}}}say(t){this.talkUntil=performance.now()/1e3+t/1e3}doAction(t,e){this.action=t,this.actionUntil=performance.now()/1e3+e/1e3}animate(t,e,{moving:n,speed:s,seated:r,typing:o,beat:a,meditate:l,kneel:c}){let f=this.pose,h={hip:0,foot:0,legL:0,legR:0,legLz:0,legRz:0,armLx:0,armRx:0,armLz:.1,armRz:-.1,headY:0,headX:0,lean:0,lift:0,turn:0,wig:0};if(this.action&&e>this.actionUntil&&(this.action=null),n){this.phase+=t*(4+s*3.2);let u=Math.sin(this.phase);h.legL=u*.62,h.legR=-u*.62,h.armLx=-u*.55,h.armRx=u*.55,h.lift=Math.abs(Math.cos(this.phase))*.04,h.lean=.06}else if(r&&c){let u=this.bowPeriod||3.2;this.bowPh=((this.bowPh||0)+t/u)%1;let x=this.bowPh<.55?Math.sin(this.bowPh/.55*Math.PI):0;h.hip=1,h.foot=1.5,h.lean=1.12*x,h.legL=h.legR=1.5-h.lean,h.legLz=-.1,h.legRz=.1,h.armLx=-1.45-.85*x,h.armRx=h.armLx,h.armLz=-.5+.62*x,h.armRz=-h.armLz,h.headX=.1+.25*x,this.bowDown=x}else r&&l?(h.legL=-1.47,h.legR=-1.33,h.legLz=.62,h.legRz=-.62,h.armLx=-.48,h.armRx=-.48,h.armLz=.36,h.armRz=-.36,h.headX=.14,h.lean=.04+Math.sin(e*.9+this.index)*.015,h.lift=Math.sin(e*.9+this.index)*.006):r?(h.legL=h.legR=-1.48,h.lift=.06,o?(h.armLx=-1.18+Math.sin(e*17)*.13,h.armRx=-1.18+Math.sin(e*17+1.7)*.13,h.armLz=.22,h.armRz=-.22,h.lean=.12,h.headX=.12,h.headY=Math.sin(e*.7+this.index)*.15):(h.armLx=-.7,h.armRx=-.7,h.armLz=.18,h.armRz=-.18,h.headY=Math.sin(e*.4+this.index*2)*.25)):h.lift=Math.sin(e*2.2+this.index)*.006;if(this.action==="stretch"){let u=Math.sin(e*3)*.12;h.armLx=-2.85+u,h.armRx=-2.85-u,h.armLz=.25,h.armRz=-.25,h.headX=-.2,h.lean=-.1}else if(this.action==="drink")h.armRx=-2.1,h.armRz=.35,h.headX=-.28;else if(this.action==="look")h.headY=Math.sin(e*1.6)*.7;else if(this.action==="wave")h.armRx=-2.7,h.armRz=-.35+Math.sin(e*13)*.4,h.headX=-.1,h.headY=.15;else if(this.action==="dance"){let u=Math.sin(e*8);h.armLx=-1.6+u*1.1,h.armRx=-1.6-u*1.1,h.armLz=.5,h.armRz=-.5,r||(h.lift=Math.abs(Math.sin(e*8))*.1,h.legL=u*.35,h.legR=-u*.35),h.headY=Math.sin(e*4)*.3}else if(this.action==="cheer"){let u=Math.sin(e*9);h.armLx=-2.9+u*.2,h.armRx=-2.9-u*.2,h.armLz=.45,h.armRz=-.45,h.headX=-.25,r||(h.lift=Math.abs(Math.sin(e*7))*.16)}else if(this.action==="place")h.armLx=-1.2,h.armRx=-1.2,h.lean=.25,h.headX=.25;else if(this.action==="highfive"){let u=this.actionUntil-e;h.armRx=-2.55,h.armRz=-.15,h.headX=-.12,u<1&&u>.7&&(h.armRx=-2.2,r||(h.lift=.08))}else if(this.action==="hug")h.armLx=-1.35,h.armRx=-1.35,h.armLz=-.55,h.armRz=.55,h.lean=.16,h.headY=.25,r||(h.lift=Math.sin(e*3)*.015);else if(this.action==="cheers"){let u=this.actionUntil-e;h.armRx=u<1.3&&u>.9?-1.95:-1.55,h.armRz=.05,h.headX=-.05}else if(this.action==="cue"||this.holdCue&&!n&&!this.action){let u=this.action==="cue"?Math.max(0,Math.sin((this.actionUntil-e)*9)):0;h.lean=.42,h.headX=.34,h.armLx=-1.2,h.armLz=.32,h.armRx=-.95-u*.35,h.armRz=-.06,r||(h.legL=.18,h.legR=-.12)}else this.action==="give"&&(h.armRx=-1.35,h.armRz=.12,h.lean=.08,h.headX=.1);this.dance&&!n&&!this.action&&this.dancePose(h,a===void 0?e*2:a,r);let d=e<this.talkUntil;d&&!r&&!n&&!this.action?(h.armRx=-.55+Math.sin(e*5.5)*.35,h.armRz=-.25,h.headX=Math.sin(e*4)*.08):d&&(h.headX+=Math.sin(e*4)*.06),this.cup.visible=this.action==="drink"||this.action==="cheers"||this.action==="give",this.stick.visible=this.action==="cue"||!!this.holdCue,this.paper.visible=this.action==="place"||this.carrying===!0,(this.carrying&&!n&&!this.action||this.carrying&&n)&&(h.armLx=-.9);let p=1-Math.exp(-t*11);for(let u of Object.keys(h))f[u]=by(f[u],h[u],p);let g=this.joint;g.legL.rotation.set(f.legL,0,f.legLz),g.legR.rotation.set(f.legR,0,f.legRz);for(let u of this.shoes)u.rotation.x=f.foot;g.armL.rotation.set(f.armLx,0,f.armLz),g.armR.rotation.set(f.armRx,0,f.armRz),g.head.rotation.set(f.headX,f.headY,0),this.body.rotation.order="YXZ",this.body.rotation.set(f.lean,f.turn,f.wig);let v=f.hip*.42;this.body.position.set(0,f.lift+v*(1-Math.cos(f.lean)),-v*Math.sin(f.lean)),this.torso.scale.y=1+Math.sin(e*2.2+this.index)*.012;let m=1.15;e>this.blinkAt&&(m=.15,e>this.blinkAt+.12&&(this.blinkAt=e+2+Math.random()*4)),l&&r&&!n&&!d&&!this.action&&(m=.15),c&&r&&!n&&(this.bowDown||0)>.3&&(m=.15);for(let u of this.eyes)u.scale.y=m;this.mouth.scale.set(d?.8:1,d?1+Math.abs(Math.sin(e*17))*2.6:1,1)}dancePose(t,e,n){let s=e*Math.PI,r=Math.abs(Math.sin(s));switch(this.dance){case"disco":{let o=Math.sin(s/2)>0;t.armRx=o?-2.75:-.5,t.armRz=o?-.55:-.2,t.armLx=-.25,t.armLz=.95,t.headY=o?.3:-.1,t.headX=o?-.2:.05,n||(t.lift=r*.05,t.legL=Math.sin(s)*.22,t.legR=-Math.sin(s)*.08);break}case"robot":{let o=Math.sin(s)>0?1:-1,a=Math.sin(s/2)>0?1:-1;t.armLx=-1.45-o*.45,t.armRx=-1.45+o*.45,t.armLz=.15,t.armRz=-.15,t.headY=a*.4,t.headX=0,t.lean=0,n||(t.lift=o>0?.02:0,t.legL=o>0?.15:0,t.legR=o<0?.15:0);break}case"shuffle":{let o=Math.sin(s*2);t.armLx=o*.7,t.armRx=-o*.7,t.armLz=.25,t.armRz=-.25,t.lean=.08,t.headY=Math.sin(s)*.15,n||(t.legL=o*.55,t.legR=-o*.55,t.lift=Math.abs(o)*.07);break}case"spin":t.armLx=-.15,t.armRx=-.15,t.armLz=1.35,t.armRz=-1.35,t.headX=-.1,n||(t.lift=r*.06);break;case"twerk":{let o=Math.floor(e)%8===7,a=Math.sin(s*2);if(n){t.armLx=-.4,t.armRx=-.4,t.headY=a*.3,t.wig=a*.08;break}t.turn=o?0:Math.PI,t.lean=o?.05:.42,t.wig=o?0:a*.2,t.armLx=o?-2.6:-.55,t.armRx=o?-.4:-.55,t.armLz=o?.5:.32,t.armRz=o?-.2:-.32,t.legLz=.2,t.legRz=-.2,t.legL=o?0:-.25,t.legR=o?0:-.25,t.headY=o?0:.75*(Math.sin(s/2)>0?1:-1),t.headX=o?-.15:-.35,t.lift=Math.abs(a)*.035;break}case"hands":t.armLx=-2.9+Math.sin(s)*.25,t.armRx=-2.9-Math.sin(s)*.25,t.armLz=.45+Math.sin(s)*.2,t.armRz=-.45+Math.sin(s)*.2,t.headX=-.22,n||(t.lift=r*.13);break;default:{let o=Math.sin(s);t.armLx=-1.6+o*1,t.armRx=-1.6-o*1,t.armLz=.5,t.armRz=-.5,t.headY=Math.sin(s/2)*.3,n||(t.lift=r*.09,t.legL=o*.3,t.legR=-o*.3)}}}headWorld(t){return this.joint.head.updateWorldMatrix(!0,!1),t.set(0,.5,0).applyMatrix4(this.joint.head.matrixWorld)}};function yf(i,t){for(let e of t)if(Math.abs(i.x-e.x)<(i.w+e.w)/2+4&&i.y-i.h<e.y+4&&e.y-e.h<i.y+4)return e;return null}function xf(i){let t=[...i].sort((n,s)=>s.y-n.y),e=[];for(let n of t){let s={...n},r=l=>Math.hypot(l.x-n.x,l.y-n.y),o=null;if(!yf(s,e))o={x:n.x,y:n.y};else{let l=[];n.prev&&(n.prev.x||n.prev.y)&&l.push({x:n.x+n.prev.x,y:n.y+n.prev.y,keep:!0});for(let c of e)l.push({x:n.x,y:c.y-c.h-4}),l.push({x:c.x-(c.w+n.w)/2-4,y:n.y}),l.push({x:c.x+(c.w+n.w)/2+4,y:n.y}),l.push({x:c.x-(c.w+n.w)/2-4,y:c.y-c.h-4}),l.push({x:c.x+(c.w+n.w)/2+4,y:c.y-c.h-4});for(let c of l){if(yf({...s,x:c.x,y:c.y},e))continue;let f=r(c)-(c.keep?12:0);(!o||f<o.d)&&(o={x:c.x,y:c.y,d:f})}if(!o){let c=Math.min(...e.map(f=>f.y-f.h))-4;o={x:n.x,y:Math.min(n.y,c)}}}let a={...n,x:o.x,y:o.y};e.push(a)}return i.map(n=>e[t.indexOf(n)])}var _f={2027:[2,6,"\u0110inh M\xF9i"],2028:[1,26,"M\u1EADu Th\xE2n"],2029:[2,13,"K\u1EF7 D\u1EADu"],2030:[2,3,"Canh Tu\u1EA5t"],2031:[1,23,"T\xE2n H\u1EE3i"],2032:[2,11,"Nh\xE2m T\xFD"]},Ef=864e5;function dc(i=new Date){for(let t of Object.keys(_f).map(Number).sort()){let[e,n,s]=_f[t],r=new Date(t,e-1,n);if(i.getTime()<=r.getTime()+15*Ef)return{year:t,at:r,name:s}}return null}function Po(i,t=new Date){if(i==="on")return!0;if(i==="off")return!1;let e=dc(t);return!!e&&t.getTime()>=e.at.getTime()-84*Ef}var uc=new Map,ln=(i,t=.7,e={})=>{let n=i+t+JSON.stringify(e);return uc.has(n)||uc.set(n,new Zt({color:i,roughness:t,metalness:0,...e})),uc.get(n)},pc="#d7261e",ar="#f5c518";function wf(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Xe(n);return s.colorSpace=me,s.anisotropy=4,s}function mc(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Sf(i,t,e){let n=new O(new Y(t,t*.72,e,20),ln("#b3201a",.35));n.position.y=e/2,n.castShadow=!0,n.receiveShadow=!0,i.add(n);for(let o of[e-.02,.05]){let a=new O(new Ee(o>.1?t:t*.74,.022,6,24),ln(ar,.3,{metalness:.4}));a.rotation.x=Math.PI/2,a.position.y=o,i.add(a)}let s=new O(new Y(t*.92,t*.92,.02,20),ln("#4a3426",.95));s.position.y=e-.03,i.add(s);let r=new O(new Bn(t*.38,24),Mf||(Mf=new Zt({map:Cy(),roughness:.4,transparent:!0})));r.position.set(0,e*.52,t*.88),r.rotation.x=-.08,i.add(r)}var vf=null,Mf=null;function Cy(){return vf||(vf=wf(128,128,(i,t)=>{i.fillStyle=ar,i.beginPath(),i.arc(t/2,t/2,t/2-2,0,Math.PI*2),i.fill(),i.fillStyle=pc,i.font='bold 54px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("\u798F",t/2,t/2+4)}))}function Rs({kind:i="mai",h:t=1.7,seed:e=1,envelopes:n=6}={}){let s=new Dt,r=mc(e),o=.42*t/1.7,a=.3*t/1.7;Sf(s,a,o);let l=ln(i==="mai"?"#5b3a24":"#4a2c22",.9),c=[],f=(T,w,b,I,U,y,E)=>{let N=new L(Math.sin(y)*Math.cos(U),Math.cos(y),Math.sin(y)*Math.sin(U)),H=new L(T,w,b).addScaledVector(N,I),P=.045*Math.pow(.62,E)*t/1.7+.006,G=new O(new Y(P*.65,P,I,6),l);if(G.position.set((T+H.x)/2,(w+H.y)/2,(b+H.z)/2),G.quaternion.setFromUnitVectors(new L(0,1,0),N),G.castShadow=!0,s.add(G),c.push({p:H.clone(),d:E,from:new L(T,w,b)}),E<3){let z=E===0?4:2+(r()<.5?1:0);for(let it=0;it<z;it++)f(H.x,H.y,H.z,I*(.62+r()*.15),U+it/z*Math.PI*2+r()*.9,Math.min(1.25,y+.35+r()*.35),E+1)}};f(0,o-.02,0,t*.36,r()*6,.12,0);let h=i==="mai"?["#ffd21f","#ffc400","#ffe066","#ffb000"]:["#ff8fb8","#ffb3cf","#ff6fa3","#ffd0e0"],d=[];for(let T of c)if(T.d>=1)for(let w=0;w<(T.d===3?7:4);w++)d.push(T.from.clone().lerp(T.p,.25+r()*.8).add(new L((r()-.5)*.06,(r()-.5)*.06,(r()-.5)*.06)));let p=new dn(new ke(.034*t/1.7,0),new Zt({roughness:.6,emissive:i==="mai"?"#5a3c00":"#4a1028",emissiveIntensity:.35}),d.length),g=new te,v=new en,m=new L,u=new Yt;if(d.forEach((T,w)=>{let b=.7+r()*.7;m.set(b,b*.6,b),v.setFromEuler(new nn(r()*3,r()*3,r()*3)),g.compose(T,v,m),p.setMatrixAt(w,g),p.setColorAt(w,u.set(h[w%h.length]))}),p.castShadow=!0,s.add(p),i==="mai"){let T=d.filter(()=>r()<.25),w=new dn(new At(.022*t/1.7,6,4),ln("#7cc142",.8),T.length);T.forEach((b,I)=>{g.compose(b.clone().add(new L(.02,.01,0)),v.identity(),m.set(1.4,.5,.8)),w.setMatrixAt(I,g)}),s.add(w)}let x=c.filter(T=>T.d===2).sort(()=>r()-.5).slice(0,n),_=ln(pc,.5),M=ln(ar,.3,{metalness:.4});for(let T of x){let w=new Dt;w.position.copy(T.p).add(new L(0,-.07,0)),w.rotation.y=r()*Math.PI;let b=new O(new Mt(.07,.11,.012),_);b.castShadow=!0,w.add(b);let I=new O(new Mt(.05,.012,.014),M);I.position.y=.02,w.add(I),s.add(w)}return s.userData.top=t,s}function bf({h:i=1.2,seed:t=3}={}){let e=new Dt,n=mc(t);Sf(e,.26,.36);let s=new O(new Y(.03,.04,.4,6),ln("#5b3a24",.9));s.position.y=.55,e.add(s);let r=ln("#2f7d3a",.85,{flatShading:!0});for(let l=0;l<5;l++){let c=new O(new ke(.26,1),r);c.position.set((n()-.5)*.25,.85+n()*.3,(n()-.5)*.25),c.scale.setScalar(.9+n()*.3),c.castShadow=!0,e.add(c)}let o=new dn(new At(.035,8,6),ln("#ff8a00",.4,{emissive:"#6a2a00",emissiveIntensity:.3}),40),a=new te;for(let l=0;l<40;l++){let c=n()*Math.PI*2,f=.7+n()*.55,h=.33-Math.abs(f-.97)*.45;a.makeTranslation(Math.cos(c)*h,f,Math.sin(c)*h),o.setMatrixAt(l,a)}return e.add(o),e}var Ao=null;function Py(){if(Ao)return Ao;let i=new Dt,t=ln("#7a1410",.7),e=ln(ar,.35,{metalness:.4}),n=new O(new Y(.006,.006,.3,4),t);n.position.y=-.15,i.add(n);let s=new O(new At(.17,18,12),ln(pc,.45,{emissive:"#ff3b1f",emissiveIntensity:.55}));s.scale.set(1,.82,1),s.position.y=-.44,s.castShadow=!0,i.add(s);for(let o=0;o<6;o++){let a=new O(new Ee(.171,.006,4,20),t);a.position.y=-.44,a.scale.set(1,.82,1),a.rotation.y=o/6*Math.PI,i.add(a)}for(let o of[-.29,-.59]){let a=new O(new Y(.07,.07,.04,12),e);a.position.y=o,i.add(a)}let r=new O(new He(.035,.2,8),e);return r.position.y=-.72,r.rotation.x=Math.PI,i.add(r),gc(i),Ao=i.children.map(o=>({geo:o.geometry,mat:o.material,cast:o.castShadow})),Ao}function Tf(){let i=[],t={add(e,n,s,r=1){i.push({x:e,y:n,z:s,s:r,ph:i.length*.9})},finish(e){i.length&&(t.meshes=Py().map(({geo:n,mat:s,cast:r})=>{let o=new dn(n,s,i.length);return o.castShadow=r,o.frustumCulled=!1,e.add(o),o}),t.tick(0))},tick(e){if(!t.meshes)return;let n=new te,s=new en,r=new nn,o=new L,a=new L;i.forEach((l,c)=>{s.setFromEuler(r.set(Math.cos(e*1.1+l.ph)*.04,0,Math.sin(e*1.4+l.ph)*.07)),n.compose(o.set(l.x,l.y,l.z),s,a.setScalar(l.s));for(let f of t.meshes)f.setMatrixAt(c,n)});for(let l of t.meshes)l.instanceMatrix.needsUpdate=!0}};return t}function Iy(i,t,e,{vertical:n=!1,sub:s=""}={}){return wf(t,e,r=>{let o=r.createLinearGradient(0,0,0,e);if(o.addColorStop(0,"#e2332a"),o.addColorStop(1,"#b51912"),r.fillStyle=o,r.fillRect(0,0,t,e),r.strokeStyle=ar,r.lineWidth=Math.max(4,t*.012),r.strokeRect(r.lineWidth*2,r.lineWidth*2,t-r.lineWidth*4,e-r.lineWidth*4),r.fillStyle="#ffd94a",r.textAlign="center",r.textBaseline="middle",r.shadowColor="rgba(80,0,0,.45)",r.shadowOffsetY=3,r.shadowBlur=4,n){let a=i.length,l=(e-t*.5)/a;r.font=`bold ${Math.round(Math.min(t*.42,l*.62))}px "Segoe UI", Arial, sans-serif`,i.forEach((c,f)=>r.fillText(c,t/2,t*.25+l*(f+.5)))}else{r.font=`bold ${Math.round(e*(s?.38:.5))}px "Segoe UI", Arial, sans-serif`,r.fillText(i[0],t/2,e*(s?.4:.52)),s&&(r.font=`600 ${Math.round(e*.2)}px "Segoe UI", Arial, sans-serif`,r.fillText(s,t/2,e*.76));for(let a of[e*.45,t-e*.45])for(let l=0;l<5;l++){let c=l/5*Math.PI*2;r.fillStyle="#ffd21f",r.beginPath(),r.arc(a+Math.cos(c)*e*.1,e/2+Math.sin(c)*e*.1,e*.08,0,Math.PI*2),r.fill()}}})}function Co(i,t,e,n){return new O(new ne(t,e),new Zt({map:Iy(i,Math.round(t*256),Math.round(e*256),n),roughness:.6,emissive:"#3a0000",emissiveIntensity:.25}))}function Ly(i,t,e,n,s=90){let r=mc(77),o=new Float32Array(s*3),a=new Float32Array(s*3),l=[],c=new Yt;for(let p=0;p<s;p++)o.set([i+r()*(t-i),r()*4,e+r()*(n-e)],p*3),c.set(p%2?"#ffd21f":"#ff9ac0"),a.set([c.r,c.g,c.b],p*3),l.push({v:.25+r()*.35,w:r()*6,a:.3+r()*.5});let f=new Re;f.setAttribute("position",new Ie(o,3)),f.setAttribute("color",new Ie(a,3));let h=new ps(f,new Li({size:.07,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}));return h.frustumCulled=!1,{pts:h,tick:(p,g=.016)=>{let v=f.attributes.position.array;for(let m=0;m<s;m++){let u=l[m];v[m*3+1]-=u.v*g,v[m*3]+=Math.sin(p*1.3+u.w)*u.a*g,v[m*3+2]+=Math.cos(p*.9+u.w)*u.a*.5*g,v[m*3+1]<.02&&(v[m*3+1]=3.6+r()*.6,v[m*3]=i+r()*(t-i),v[m*3+2]=e+r()*(n-e))}f.attributes.position.needsUpdate=!0}}}function gc(i){i.updateMatrixWorld(!0);let t=new te().copy(i.matrixWorld).invert(),e=new Map,n=[],s=new te;i.traverse(r=>{if(!r.isMesh||r.isInstancedMesh)return;let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.attributes.uv||o.setAttribute("uv",new ce(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(s.multiplyMatrices(t,r.matrixWorld));let a=r.material.uuid+"|"+r.castShadow;e.has(a)||e.set(a,{mat:r.material,cast:r.castShadow,geos:[]}),e.get(a).geos.push(o),n.push(r)}),n.forEach(r=>r.parent.remove(r));for(let{mat:r,cast:o,geos:a}of e.values()){let l=On(a,!1);if(!l)continue;let c=new O(l,r);c.castShadow=o,c.receiveShadow=!0,i.add(c)}return i}var Rf=(i,t,e,n)=>!i.some(([s,r,o,a])=>t+n>s&&t-n<o&&e+n>r&&e-n<a);function Af(i,t,e){let n=new Dt;n.name="tet",i.add(n);let s=new Dt;n.add(s);let r=Tf(),o=(m,u,x,_,M=0)=>Rf(t.obstacles,u,x,_)?(m.position.set(u,0,x),m.rotation.y=M,s.add(m),t.obstacles.push([u-_,x-_,u+_,x+_]),!0):!1,{gate:a}=e;o(Rs({kind:"mai",h:2,seed:11,envelopes:8}),a.x-a.half+.05,a.z-.75,.34),o(Rs({kind:"dao",h:2,seed:23,envelopes:8}),a.x+a.half-.05,a.z-.75,.34);for(let m of[-1.3,1.3])r.add(a.x+m,2.78,a.z,1.1);let l=2.35,c=e.minZ+.06,f=Co(["Xu\xE2n","an","khang","th\u1ECBnh","v\u01B0\u1EE3ng"],.42,1.9,{vertical:!0});f.position.set(e.cinemaX-3,l,c),s.add(f);let h=Co(["T\u1EBFt","sum","v\u1EA7y","ph\xE1t","t\xE0i"],.42,1.9,{vertical:!0});h.position.set(e.cinemaX+3,l,c),s.add(h);let d=dc(),p=Co(["Ch\xFAc M\u1EEBng N\u0103m M\u1EDBi"],3.8,.62,{sub:d?`Xu\xE2n ${d.name} ${d.year} \xB7 An khang th\u1ECBnh v\u01B0\u1EE3ng`:"An khang th\u1ECBnh v\u01B0\u1EE3ng"});p.position.set(e.barX,3.2,e.minZ+.07),s.add(p);for(let m of[e.barX+3.3,e.barX+4.9,e.barX+6.5])r.add(m,3.45,e.minZ+.45,.95);[[e.minX+1,e.inZ-.9,"quat"],[e.minX+1,e.inZ-2.6,"mai"],[e.cinemaX-3.6,e.minZ+1.2,"dao"],[e.cinemaX+3.6,e.minZ+1.2,"quat"]].forEach(([m,u,x],_)=>o(x==="quat"?bf({seed:40+_}):Rs({kind:x,h:1.6,seed:60+_,envelopes:4}),m,u,.3,_));for(let[m,u]of e.umbrellas||[])for(let x of[.6,.6+Math.PI])r.add(m+Math.cos(x)*1.2,2.28,u+Math.sin(x)*1.2,.7);for(let[m,u]of e.lamps||[]){let x=new O(new Mt(.42,.03,.03),ln("#2b2b33",.4));x.position.set(m+.21,1.95,u),s.add(x),r.add(m+.4,1.95,u,.75)}[[-12.9,3.6,"mai"],[5.4,9.1,"dao"],[-3.6,9.1,"mai"],[24.6,9,"mai"],[-12.9,-6.5,"dao"]].forEach(([m,u,x],_)=>o(Rs({kind:x,h:2.3,seed:90+_,envelopes:7}),m,u,.36,_*1.3));let v=Ly(e.minX+1,e.maxX-1,e.inZ+.5,e.maxZ-.6,110);return n.add(v.pts),gc(s),r.finish(n),t.animated.push((m,u)=>{r.tick(m),v.tick(m,Math.min(.05,u||.016))}),t.tet=n,n}function Cf(i,t,e,n=[],s=[]){let r=new Dt;r.name="tet",i.add(r);let o=new Dt;r.add(o);let a=Tf(),l=(h,d,p,g)=>Rf([...n,...s],d,p,g)?(h.position.set(d,0,p),o.add(h),s.push([d-g,p-g,d+g,p+g]),!0):!1;l(Rs({kind:"dao",h:1.75,seed:5,envelopes:6}),e.door.x+1.05,e.minZ+.5,.3),l(Rs({kind:"mai",h:1.75,seed:9,envelopes:6}),e.maxX-.55,e.minZ+1.8,.3),l(bf({seed:13}),e.maxX-.5,e.maxZ-1.6,.28);for(let h of[e.minX+3,-1.4,1.8,e.maxX-1.9])a.add(h,e.wallH-.05,e.minZ+.35,.8);let c=dc(),f=Co(["Ch\xFAc M\u1EEBng N\u0103m M\u1EDBi"],2.7,.5,{sub:c?`Xu\xE2n ${c.name} ${c.year}`:""});return f.position.set(e.minX+.06,e.wallH-.38,.6),f.rotation.y=Math.PI/2,o.add(f),gc(o),a.finish(r),t.animated.push(h=>a.tick(h)),t.tet=r,r}var Xt={minX:-7,maxX:7,minZ:-5,maxZ:5,wallH:3.1},As=[{x:0,z:-1.5},{x:-4.1,z:-1.5},{x:4.1,z:-1.5},{x:-4.1,z:2},{x:4.1,z:2},{x:0,z:2}],_e={w:1.8,d:.85,h:.76},cr=-.82,lr={x:-5.6,z:-4.95},Lo={cooler:{x:5.55,z:-3.75,face:{x:6.3,z:-4.45}},board:{x:.2,z:-3.85,face:{x:.2,z:-5}},windowL:{x:-3.2,z:-3.9,face:{x:-3.2,z:-5}},windowR:{x:3.4,z:-3.9,face:{x:3.4,z:-5}},shelf:{x:-5.7,z:-.4,face:{x:-7,z:-.4}},tray:{x:5.55,z:3.2,face:{x:5.55,z:4.2}},plant:{x:-5.2,z:1,face:{x:-6.5,z:1}}},yc=[[5.95,-4.95,6.7,-4.05],[-7,-1.4,-6.35,.6],[-7,2.5,-5.95,4.6],[-5.7,3.05,-4.9,3.95],[5,3.75,6.2,4.6],[-6.9,-4.9,-6.2,-4.2],[6.3,4.3,6.95,4.95],[-6.9,.8,-6.3,1.4]],Gt=(i,t=.8,e={})=>new Zt({color:i,roughness:t,metalness:0,...e});function hr(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new Xe(s);return n&&(o.colorSpace=me),o.anisotropy=4,{tex:o,canvas:s,g:r}}function Io(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Dy(){let i=Io(7),t=hr(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*300);for(;a<n;){let l=220+Math.floor(i()*260),c=[196+i()*22,142+i()*18,96+i()*14].map(Math.round);e.fillStyle=`rgb(${c})`,e.fillRect(a,o,l,64);for(let f=0;f<9;f++){e.strokeStyle=`rgba(110,70,40,${.05+i()*.07})`,e.lineWidth=1+i()*1.5;let h=o+6+i()*52;e.beginPath(),e.moveTo(a,h),e.bezierCurveTo(a+l*.3,h+(i()-.5)*8,a+l*.7,h+(i()-.5)*8,a+l,h+(i()-.5)*4),e.stroke()}e.fillStyle="rgba(80,50,30,0.55)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(80,50,30,0.6)",e.fillRect(0,o+64-2,n,2),e.fillStyle="rgba(255,235,200,0.12)",e.fillRect(0,o,n,2)}});return t.tex.wrapS=t.tex.wrapT=Pn,t.tex.repeat.set((Xt.maxX-Xt.minX)/4,(Xt.maxZ-Xt.minZ)/4),t.tex}var Df={tim:["#3f2d84","#5a42a6","#f5c518","#33246c"],mint:["#4f9c88","#7cc8b2","#fff4d6","#3f8573"],vang:["#d9a441","#f2c96b","#fff7e0","#b98a2f"],xanh:["#1a6fd6","#2f8cf0","#ffffff","#0f5bb5"],navy:["#142c5a","#1f3d73","#e1262d","#0f2247"]};function Pf(i=Df.tim){return hr(512,320,(t,e,n)=>{t.fillStyle=i[0],t.fillRect(0,0,e,n),t.fillStyle=i[1],t.fillRect(18,18,e-36,n-36),t.strokeStyle=i[2],t.lineWidth=6,t.strokeRect(34,34,e-68,n-68),t.fillStyle=i[3];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.save(),t.translate(s,r),t.rotate(Math.PI/4),t.fillRect(-9,-9,18,18),t.restore();t.fillStyle=i[2];for(let s=70;s<e-50;s+=46)for(let r=70;r<n-50;r+=46)t.beginPath(),t.arc(s,r,3,0,7),t.fill()}).tex}function Uy(){let i=hr(512,256,(t,e,n)=>{let s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#6fb6e8"),s.addColorStop(.7,"#bfe3f7"),s.addColorStop(1,"#f4f0dc"),t.fillStyle=s,t.fillRect(0,0,e,n);let r=Io(3);for(let o=0;o<7;o++){let a=r()*e,l=40+r()*110,c=18+r()*22;t.fillStyle="rgba(255,255,255,0.92)";for(let f=0;f<5;f++)t.beginPath(),t.arc(a+f*c*.7,l+Math.sin(f)*5,c*(.7+r()*.5),0,7),t.fill()}t.fillStyle="#7fae7a",t.beginPath(),t.moveTo(0,n);for(let o=0;o<=e;o+=16)t.lineTo(o,n-30-Math.sin(o/40)*10-r()*6);t.lineTo(e,n),t.fill()});return i.tex.wrapS=Pn,i.tex}var Ny=new gs;function If(i,t){Ny.load(i,e=>{e.colorSpace=me,e.anisotropy=4,t(e)},void 0,()=>{})}function Hy(){return hr(256,320,(i,t,e)=>{i.fillStyle="#fbf3e4",i.fillRect(0,0,t,e),i.fillStyle="#f2b450",i.beginPath(),i.arc(160,120,70,0,7),i.fill(),i.fillStyle="#3f8f8a",i.fillRect(30,170,200,90),i.fillStyle="#d0644a",i.beginPath(),i.moveTo(30,260),i.lineTo(110,150),i.lineTo(190,260),i.fill(),i.fillStyle="#2b2b33",i.font="bold 26px Segoe UI, sans-serif",i.textAlign="center",i.fillText("C\u1ED0 L\xCAN!",t/2,300)}).tex}function Uf(i,t,e={}){let n={animated:[],obstacles:[]},s=new O(new ne(Xt.maxX-Xt.minX,Xt.maxZ-Xt.minZ),Gt("#ffffff",.75,{map:Dy()}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s),n.floor=s;let r=Gt("#ffffff",.95,{map:Pf()}),o=new O(new ne(5.2,2.2),r);o.rotation.x=-Math.PI/2,o.position.set(0,.006,.25),o.receiveShadow=!0,i.add(o);let a=Gt("#efe3cc",.95),l=Gt("#c9a77d",.85),c=Gt("#8a6040",.7);n.setDecor=(nt={})=>{let J={kem:["#efe3cc","#c9a77d"],bacha:["#d6efe4","#8fc7b0"],xam:["#dfe5ee","#a9b6c9"],troi:["#d9e9f7","#8fb3dc"],vanh:["#fbf3d6","#e2c98a"]}[nt.wall||"troi"];J&&(a.color.set(J[0]),l.color.set(J[1]));let wt={sang:"#ffffff",dam:"#a8876a",xam:"#d4cfcb"}[nt.floor||"sang"];wt&&s.material.color.set(wt);let $t=Df[nt.rug||"xanh"];if($t){let re=r.map;r.map=Pf($t),r.needsUpdate=!0,re&&re.dispose()}};let f=Xt.maxX-Xt.minX,h=Xt.maxZ-Xt.minZ,d=Xt.wallH,p=new O(new Mt(f+.2,d,.2),a);p.position.set(0,d/2,Xt.minZ-.1),p.receiveShadow=!0,i.add(p);let g=new O(new Mt(.2,d,h),a);g.position.set(Xt.minX-.1,d/2,0),g.receiveShadow=!0,i.add(g);let v=new O(new Mt(f+.2,.95,.04),l);v.position.set(0,.475,Xt.minZ+.02),v.receiveShadow=!0,i.add(v);let m=new O(new Mt(.04,.95,h),l);m.position.set(Xt.minX+.02,.475,0),m.receiveShadow=!0,i.add(m);let u=new O(new Mt(f+.2,.06,.07),c);u.position.set(0,.96,Xt.minZ+.035),i.add(u);let x=new O(new Mt(.07,.06,h),c);x.position.set(Xt.minX+.035,.96,0),i.add(x);let _=Gt("#5b3f2a",.8),M=new O(new Mt(f+.4,.25,.2),_);M.position.set(0,-.125,Xt.maxZ+.1),i.add(M);let T=new O(new Mt(.2,.25,h+.2),_);T.position.set(Xt.maxX+.1,-.125,0),i.add(T);let w=Uy();n.sky=w;let b=Gt("#fbf7ee",.6);for(let nt of[-3.2,3.4]){let J=new Dt;J.position.set(nt,1.85,Xt.minZ+.02);let wt=new se({map:w,toneMapped:!1});(n.skyMats=n.skyMats||[]).push(wt);let $t=new O(new ne(1.9,1.25),wt);$t.position.z=.005,J.add($t);let re=(gn,Ge,Ae,Ye)=>{let Ve=new O(new Mt(gn,Ge,.08),b);Ve.position.set(Ae,Ye,.03),Ve.castShadow=!0,J.add(Ve)};re(2.05,.08,0,.66),re(2.05,.08,0,-.66),re(.08,1.4,-.99,0),re(.08,1.4,.99,0),re(.05,1.3,0,0),re(1.95,.05,0,.05);let Kt=new O(new Mt(2.2,.06,.22),b);Kt.position.set(0,-.72,.1),Kt.castShadow=!0,J.add(Kt);let ye=new O(new Y(.08,.06,.12,10),Gt("#c56a43"));ye.position.set(.6,-.63,.12),J.add(ye);let ve=new O(new ke(.11,0),Gt("#5aa05a"));ve.position.set(.6,-.5,.12),J.add(ve),i.add(J)}let I=new Dt;I.position.set(lr.x,0,Xt.minZ+.03);let U=Gt("#6b4a2e",.7),y=Gt("#a8743f",.65),E=new O(new Mt(1.15,2.2,.06),y);E.position.set(0,1.1,.02),E.castShadow=!0,I.add(E);for(let[nt,J,wt,$t]of[[1.3,.09,0,2.24],[.09,2.25,-.62,1.12],[.09,2.25,.62,1.12]]){let re=new O(new Mt(nt,J,.1),U);re.position.set(wt,$t,.03),I.add(re)}for(let nt of[.6,1.55]){let J=new O(new Mt(.8,.6,.02),Gt("#946535",.7));J.position.set(0,nt,.06),I.add(J)}let N=new O(new At(.045,10,8),Gt("#e3c15a",.3,{metalness:.6}));N.position.set(.42,1.05,.09),I.add(N),i.add(I);let H=hr(768,360,()=>{}),P=new Dt;P.position.set(.2,1.9,Xt.minZ+.03);let G=new O(new Mt(2.9,1.42,.06),Gt("#9aa0a8",.5));G.castShadow=!0,P.add(G);let z=new O(new ne(2.78,1.3),new Zt({map:H.tex,roughness:.5}));z.position.z=.032,P.add(z);let it=new O(new Mt(1.6,.05,.1),Gt("#8c929a",.5));it.position.set(0,-.74,.06),P.add(it),i.add(P),n.drawBoard=nt=>{let{g:J,canvas:wt}=H,$t=wt.width,re=wt.height;J.fillStyle="#fbfbf7",J.fillRect(0,0,$t,re),[["CH\u1EDC",nt.wait,"#f6d36b"],["\u0110ANG L\xC0M",nt.run,"#8fd0f2"],["XONG",nt.done,"#9fe0a0"]].forEach(([ye,ve,gn],Ge)=>{let Ae=18+Ge*250;J.fillStyle=gn,J.fillRect(Ae,16,232,46),J.fillStyle="#2b2b33",J.font="bold 26px Segoe UI, Arial, sans-serif",J.textAlign="left",J.fillText(ye,Ae+12,49),J.textAlign="right",J.fillText(String(ve),Ae+220,49),Ge<2&&(J.fillStyle="#d5d9df",J.fillRect(Ae+241,16,3,re-32));let Ye=Math.min(ve,9);for(let Ve=0;Ve<Ye;Ve++){let zi=Ae+14+Ve%3*74,yn=80+Math.floor(Ve/3)*86;J.save(),J.translate(zi+30,yn+34),J.rotate((Ve*37%9-4)*.02),J.fillStyle="rgba(0,0,0,0.12)",J.fillRect(-28,-30,62,66),J.fillStyle=gn,J.fillRect(-31,-34,62,66),J.fillStyle="rgba(0,0,0,0.25)";for(let En=0;En<3;En++)J.fillRect(-22,-18+En*14,40-En*8,4);J.restore()}}),H.tex.needsUpdate=!0},n.drawBoard({wait:0,run:0,done:0});let X=new Dt;X.position.set(-1.75,2.35,Xt.minZ+.04);let Z=new O(new Y(.28,.28,.05,32),Gt("#fbfaf5",.5));Z.rotation.x=Math.PI/2,X.add(Z);let ot=new O(new Ee(.28,.03,8,32),Gt("#5b4a3a",.5));X.add(ot);for(let nt=0;nt<12;nt++){let J=new O(new Mt(.02,.05,.01),Gt("#5b4a3a")),wt=nt/12*Math.PI*2;J.position.set(Math.sin(wt)*.22,Math.cos(wt)*.22,.03),J.rotation.z=-wt,X.add(J)}let lt=(nt,J)=>{let wt=new Dt,$t=new O(new Mt(J,nt,.01),Gt("#222"));return $t.position.y=nt/2,wt.add($t),wt.position.z=.04,X.add(wt),wt},Ct=lt(.13,.03),Ut=lt(.2,.02);i.add(X),n.animated.push(()=>{let nt=new Date;Ut.rotation.z=-(nt.getMinutes()+nt.getSeconds()/60)/60*Math.PI*2,Ct.rotation.z=-(nt.getHours()%12+nt.getMinutes()/60)/12*Math.PI*2});let Q=Gt("#ffffff",.6,{map:Hy()}),ht=new O(new ne(.9,1.2),Q);ht.position.set(Xt.minX+.05,1.8,2.4),ht.rotation.y=Math.PI/2,i.add(ht);let gt=new O(new Mt(.04,1.3,1),Gt("#0a78f0",.5));gt.position.set(Xt.minX+.015,1.8,2.4),i.add(gt),If("brand/simi-banner.jpg",nt=>{Q.map=nt,Q.needsUpdate=!0});let vt=(nt,J,wt,$t,re,Kt,ye)=>{let ve=new Dt;ve.position.copy(re),ve.rotation.y=Kt,i.add(ve);let gn=new O(new At(.03,10,8),Gt("#c9ced8",.3,{metalness:.6}));gn.position.z=.02,ve.add(gn);let Ge=new Dt;ve.add(Ge);let Ae=.32,Ye=new O(new Mt(J+.12,wt+.12,.04),Gt($t,.55));Ye.position.set(0,-Ae-wt/2-.06,.05),Ye.castShadow=!0,Ge.add(Ye);let Ve=new O(new ne(J,wt),new se({transparent:!0,opacity:0}));Ve.position.set(0,Ye.position.y,.075),Ge.add(Ve),If(nt,yn=>{Ve.material.map=yn,Ve.material.opacity=1,Ve.material.needsUpdate=!0});let zi=Gt("#5a6478",.8);for(let yn of[-1,1]){let En=yn*(J/2-.02),ei=-Ae-.02,yr=Math.hypot(En,ei),Bi=new O(new Y(.007,.007,yr,5),zi);Bi.position.set(En/2,ei/2,.05),Bi.rotation.z=Math.atan2(En,-ei),Ge.add(Bi)}return n.animated.push(yn=>{Ge.rotation.z=Math.sin((yn||performance.now()/1e3)*.9+ye)*.025}),ve};vt("brand/uniq.png",1.15,.41,"#142c5a",new L(Xt.minX+.03,2.95,-3.05),Math.PI/2,0),vt("brand/crenot.png",1.35,.33,"#ffffff",new L(Xt.minX+.03,3,-.4),Math.PI/2,1.7),vt("brand/simi.png",.85,.255,"#0a78f0",new L(-4.4,2.95,Xt.minZ+.03),0,3.1);let Ht=new Dt;Ht.position.set(-6.68,0,-.4),Ht.rotation.y=Math.PI/2;let Ot=Gt("#8a5a35",.75),Jt=new Mt(.05,2,.4);for(let nt of[-.95,.95]){let J=new O(Jt,Ot);J.position.set(nt,1,0),J.castShadow=!0,Ht.add(J)}let jt=Io(11),ut=["#c4553f","#3f8fb0","#e0b04c","#4f7a4a","#7b4fa0","#d07a2c","#2f5d9e"];for(let nt=0;nt<5;nt++){let J=new O(new Mt(1.9,.04,.4),Ot);if(J.position.set(0,.04+nt*.48,0),J.castShadow=!0,J.receiveShadow=!0,Ht.add(J),nt===4)continue;let wt=-.88;for(;wt<.8;){let $t=.05+jt()*.06,re=.26+jt()*.14,Kt=new O(new Mt($t,re,.28),Gt(ut[Math.floor(jt()*ut.length)],.7));Kt.position.set(wt+$t/2,.06+nt*.48+re/2,.02),Kt.rotation.z=jt()<.1?.2:0,Kt.castShadow=!0,Ht.add(Kt),wt+=$t+.012+(jt()<.12?.15:0)}}i.add(Ht);let C=new Dt;C.position.set(6.3,0,-4.45);let St=new O(new Mt(.42,1.05,.42),Gt("#eceef1",.4));St.position.y=.525,St.castShadow=!0,C.add(St);let q=new O(new Y(.17,.17,.48,18),new Zt({color:"#7cc0ec",transparent:!0,opacity:.7,roughness:.15}));q.position.y=1.32,C.add(q);let $=new O(new Mt(.08,.06,.06),Gt("#3f78c2"));$.position.set(-.1,.8,.23),C.add($);let ct=$.clone();ct.material=Gt("#d0453f"),ct.position.x=.1,C.add(ct),i.add(C);let mt=[],yt=(nt,J,wt=1)=>{let $t=new Dt;$t.position.set(nt,0,J),$t.scale.setScalar(wt);let re=new O(new Y(.24,.18,.42,14),Gt("#c56a43",.8));re.position.y=.21,re.castShadow=!0,$t.add(re);let Kt=new O(new Y(.21,.21,.02,14),Gt("#4a3326"));Kt.position.y=.41,$t.add(Kt);let ye=new Dt;ye.position.y=.42,$t.add(ye);let ve=Gt("#4f9a52",.7),gn=Gt("#3a7a40",.7);for(let Ge=0;Ge<9;Ge++){let Ae=new O(new He(.09,.75,5),Ge%2?ve:gn),Ye=Ge/9*Math.PI*2;Ae.position.set(Math.cos(Ye)*.09,.35,Math.sin(Ye)*.09),Ae.rotation.set(Math.sin(Ye)*.45,0,-Math.cos(Ye)*.45),Ae.castShadow=!0,ye.add(Ae)}return i.add($t),mt.push(ye),$t};yt(-6.55,-4.55,1.1),yt(6.6,4.6,1.15),yt(-6.6,1.1,.9),n.animated.push(nt=>mt.forEach((J,wt)=>{J.rotation.z=Math.sin(nt*1.3+wt)*.04,J.rotation.x=Math.cos(nt*1.1+wt)*.03}));let A=new Dt;A.position.set(-6.45,0,3.55),A.rotation.y=Math.PI/2;let S=Gt("#4f7a8a",.95),W=Gt("#5f8c9c",.95),st=new O(new Mt(2,.42,.85),S);st.position.y=.25,st.castShadow=!0,A.add(st);let at=new O(new Mt(2,.6,.22),S);at.position.set(0,.62,-.32),at.castShadow=!0,A.add(at);for(let nt of[-1,1]){let J=new O(new Mt(.2,.62,.85),S);J.position.set(nt,.33,0),J.castShadow=!0,A.add(J)}for(let nt of[-.45,.45]){let J=new O(new Mt(.85,.14,.62),W);J.position.set(nt,.5,.05),J.castShadow=!0,A.add(J)}let tt=new O(new Mt(.36,.34,.12),Gt("#f2b450"));tt.position.set(.6,.72,-.15),tt.rotation.z=.2,A.add(tt),i.add(A);let Pt=new Dt;Pt.position.set(-5.3,0,3.5);let bt=new O(new Y(.42,.42,.05,24),Gt("#8a5a35",.6));bt.position.y=.42,bt.castShadow=!0,Pt.add(bt);let Lt=new O(new Y(.05,.08,.4,10),Gt("#3b2b20"));Lt.position.y=.2,Pt.add(Lt);let oe=new O(new Y(.05,.045,.1,12),Gt("#f4f1ea"));oe.position.set(.1,.5,.05),Pt.add(oe),i.add(Pt);let pt=new Dt;pt.position.set(5.6,0,4.15);let F=new O(new Mt(1.1,.06,.65),Gt("#b9844f",.6));F.position.y=.78,F.castShadow=!0,F.receiveShadow=!0,pt.add(F);for(let[nt,J]of[[-.48,-.26],[.48,-.26],[-.48,.26],[.48,.26]]){let wt=new O(new Mt(.06,.78,.06),Gt("#5e3c22"));wt.position.set(nt,.39,J),wt.castShadow=!0,pt.add(wt)}let rt=new O(new Mt(.5,.06,.38),Gt("#6b7a8f",.5));rt.position.set(0,.84,0),pt.add(rt);let xt=new Dt;xt.position.set(0,.86,0),pt.add(xt),i.add(pt);let _t=[Gt("#fffdf6",.9),Gt("#f1ece0",.9)];n.setTray=nt=>{for(;xt.children.length;)xt.remove(xt.children[0]);for(let J=0;J<Math.min(nt,14);J++){let wt=new O(new Mt(.4,.012,.3),_t[J%2]);wt.position.y=J*.014,wt.rotation.y=(J*37%7-3)*.03,wt.castShadow=!0,xt.add(wt)}},n.trayAnchor=new L(5.6,.95,4.5),n.lamps=[];let zt=Gt("#2b2b33",.6),Ft=Gt("#f2b450",.45);for(let[nt,J]of[[-4.1,.25],[0,.25],[4.1,.25]]){let wt=new Dt;wt.position.set(nt,0,J);let $t=new O(new Y(.008,.008,.6,6),zt);$t.position.y=Xt.wallH-.3,wt.add($t);let re=new O(new He(.32,.26,20,1,!0),Ft);re.material.side=ge,re.position.y=Xt.wallH-.68,re.castShadow=!1,wt.add(re);let Kt=new Zt({color:"#fff3d6",emissive:"#ffd58a",emissiveIntensity:0,roughness:.3}),ye=new O(new At(.075,12,10),Kt);ye.position.y=Xt.wallH-.78,wt.add(ye);let ve=new Mo("#ffd9a0",0,7.5,1.6);ve.position.y=Xt.wallH-.85,wt.add(ve),i.add(wt),n.lamps.push({bulbMat:Kt,light:ve})}let Qt=140,B=new Float32Array(Qt*3),Et=Io(5);for(let nt=0;nt<Qt;nt++)B[nt*3]=-6+Et()*12,B[nt*3+1]=.3+Et()*2.6,B[nt*3+2]=-4.8+Et()*4.5;let et=new Re;et.setAttribute("position",new Ie(B,3));let dt=new ps(et,new Li({color:"#fff3d6",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));return i.add(dt),n.dust=dt,n.animated.push((nt,J)=>{for(let wt=0;wt<Qt;wt++)B[wt*3+1]+=Math.sin(nt*.5+wt)*J*.03,B[wt*3]+=Math.cos(nt*.3+wt*1.7)*J*.02;et.attributes.position.needsUpdate=!0,w.offset.x=nt*.004%1}),e.tet&&Cf(i,n,{...Xt,door:lr},[...yc,...As.map(nt=>[nt.x-_e.w/2-.2,nt.z-1.3,nt.x+_e.w/2+.2,nt.z+.6])],n.obstacles),n}var Lf={sim:["#9a91ad","GI\u1EA2 L\u1EACP"],claude:["#e08a5c","CLAUDE"],anthropic:["#e08a5c","CLAUDE API"],codex:["#4fd1a8","CHATGPT"],antigravity:["#7aa7ff","GEMINI"],openai:["#4fd1a8","GPT API"],gemini:["#7aa7ff","GEMINI"],ollama:["#e6e6e6","OLLAMA"],simi:["#45a2ff","SIMI"]};function Nf(i,t,e){let n=new Dt;n.position.set(t.x,0,t.z);let s=Gt("#c99863",.55),r=Gt("#a5764a",.7),o=Gt("#3b3d46",.45,{metalness:.3}),a=new O(new Mt(_e.w,.06,_e.d),s);a.position.y=_e.h,a.castShadow=!0,a.receiveShadow=!0,n.add(a);for(let H of[-_e.w/2+.05,_e.w/2-.05]){let P=new O(new Mt(.06,_e.h,_e.d-.04),r);P.position.set(H,_e.h/2,0),P.castShadow=!0,n.add(P)}let l=new O(new Mt(_e.w-.1,.45,.03),r);l.position.set(0,_e.h-.28,_e.d/2-.06),l.castShadow=!0,n.add(l);let c=new Dt;c.position.set(-.55,_e.h+.03,-.08),c.rotation.y=1.45;let f={canvas:document.createElement("canvas")};f.canvas.width=192,f.canvas.height=120,f.g=f.canvas.getContext("2d"),f.tex=new Xe(f.canvas),f.tex.colorSpace=me;let h=new O(new Mt(.62,.4,.035),o);h.position.y=.33,h.castShadow=!0,c.add(h);let d=new O(new ne(.57,.35),new se({map:f.tex,toneMapped:!1}));d.position.set(0,.33,.019),c.add(d);let p=new O(new Mt(.05,.16,.04),o);p.position.set(0,.08,-.02),c.add(p);let g=new O(new Mt(.22,.015,.16),o);g.position.y=.008,c.add(g),n.add(c);let v=new O(new Mt(.42,.02,.13),Gt("#e4e4ea",.5));v.position.set(0,_e.h+.04,-.2),v.castShadow=!0,n.add(v);let m=new O(new Mt(.06,.02,.09),Gt("#e4e4ea",.5));m.position.set(.32,_e.h+.04,-.2),n.add(m);let u=new O(new Y(.045,.04,.1,12),Gt(e.shirt||"#c0504d",.5));u.position.set(.68,_e.h+.08,.05),u.castShadow=!0,n.add(u);let x=new O(new Mt(.24,.02,.32),Gt("#f6f2e8",.9));if(x.position.set(.45,_e.h+.04,.12),x.rotation.y=.2,n.add(x),e.isManager){let H=new Dt;H.position.set(.72,_e.h+.03,-.25),H.add(Object.assign(new O(new Y(.07,.08,.02,12),o),{}));let P=new O(new Y(.012,.012,.36,6),o);P.position.set(0,.18,0),P.rotation.z=.25,H.add(P);let G=new O(new He(.09,.12,12,1,!0),Gt("#e3c15a",.4));G.position.set(-.07,.36,0),G.rotation.z=.9,H.add(G),n.add(H);let z=new O(new Y(.05,.03,.14,10),Gt("#e3c15a",.3,{metalness:.7}));z.position.set(.2,_e.h+.1,.25),n.add(z)}let _=new Dt;_.position.set(0,0,cr);let M=Gt("#3d3c4c",.8),T=Gt("#4f4e63",.8),w=new O(new Mt(.52,.08,.5),T);w.position.y=.46,w.castShadow=!0,_.add(w);let b=new O(new Mt(.5,.58,.07),M);b.position.set(0,.82,-.26),b.rotation.x=-.08,b.castShadow=!0,_.add(b);let I=new O(new Y(.03,.03,.36,8),o);I.position.y=.24,_.add(I);for(let H=0;H<5;H++){let P=new O(new Mt(.04,.03,.3),o),G=H/5*Math.PI*2;P.position.set(Math.sin(G)*.14,.04,Math.cos(G)*.14),P.rotation.y=G,_.add(P)}n.add(_);let U=new O(new Fn(1.25,1.42,56),new se({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.set(0,.012,-.3),n.add(U);let y=new O(new Mt(_e.w+.3,1.7,_e.d+1.2),new se({visible:!1}));y.position.set(0,.85,-.3),n.add(y),i.add(n);let E=(e.source||"sim").split("-")[0],N={group:n,ring:U,hit:y,screen:f,state:"idle",brand:Lf[E]||Lf.sim,model:e.model||""};return Do(N,0,!0),N}function Do(i,t,e){let{g:n,canvas:s,tex:r}=i.screen,o=s.width,a=s.height,l=i.state;if(!(l!=="working"&&!e&&i._drawn===l)){if(i._drawn=l,l==="working"){n.fillStyle="#14263a",n.fillRect(0,0,o,a);let c=Math.floor(t*22);for(let f=0;f<9;f++){let h=c+f,d=h*7%4*10,p=30+h*53%110;n.fillStyle=["#8cc8ff","#7fe0a8","#f6d36b","#c7a5ff"][h%4],n.fillRect(12+d,10+f*12,Math.min(p,o-30-d),5)}Math.floor(t*3)%2&&(n.fillStyle="#fff",n.fillRect(14,10+8*12,7,6))}else if(l==="error")n.fillStyle="#5a1f22",n.fillRect(0,0,o,a),n.fillStyle="#ff8a8a",n.font="bold 54px Segoe UI, Arial",n.textAlign="center",n.fillText("!",o/2,76),n.font="bold 15px Segoe UI, Arial",n.fillText("L\u1ED6I \u2013 xem nh\u1EADt k\xFD",o/2,104);else{let[c,f]=i.brand,h=n.createLinearGradient(0,0,o,a);h.addColorStop(0,"#1d2230"),h.addColorStop(1,"#2a2f40"),n.fillStyle=h,n.fillRect(0,0,o,a),n.fillStyle=c,n.font="bold 24px Segoe UI, Arial",n.textAlign="center",n.fillText(f,o/2,62),i.model&&(n.fillStyle="#aab0c0",n.font="14px Segoe UI, Arial",n.fillText(i.model.slice(0,22),o/2,86)),n.fillStyle=c,n.globalAlpha=.5,n.fillRect(o/2-30,96,60,3),n.globalAlpha=1}r.needsUpdate=!0}}var pn=(i,t,e,n,s=1,r=1,o=1)=>{let a=i.clone();return a.scale(s,r,o),a.translate(t,e,n),a},zy=i=>{for(let t of Object.keys(i.attributes))t!=="position"&&t!=="normal"&&i.deleteAttribute(t);return i.index?i.toNonIndexed():i},fr=i=>On(i.map(zy),!1);function By(){let i=new Oe(.19,.2,2,8),t=new Oe(.062,.22,2,6),e=new Oe(.078,.25,2,6),n=new At(.25,12,9),s=new At(.068,6,4),r=new At(.268,12,6,0,Math.PI*2,0,Math.PI*.52),o=new At(.036,6,4);return{shirt:fr([pn(i,0,.68,0,1,1,.78),pn(t,-.255,.71,0),pn(t,.255,.71,0)]),pants:fr([pn(e,-.095,.22,0),pn(e,.095,.22,0),pn(new Y(.185,.185,.05,8),0,.47,0,1,1,.8)]),skin:fr([pn(n,0,1.19,0),pn(s,-.255,.51,0),pn(s,.255,.51,0),pn(new Y(.07,.08,.1,6),0,.97,0)]),hair:fr([pn(r,0,1.2,-.01)]),eyes:fr([pn(o,-.09,1.21,.225,1,1.3,.6),pn(o,.09,1.21,.225,1,1.3,.6)])}}var Uo=class{constructor(t,{cap:e=256,blobGeo:n,blobMat:s}={}){this.cap=e,this.n=0;let r=By(),o=(l,c,f)=>{let h=new dn(l,c,e);return h.count=0,h.frustumCulled=!1,h.castShadow=!1,h.receiveShadow=!1,f&&h.setColorAt(0,new Yt("#ffffff")),h.instanceMatrix.setUsage(tf),t.add(h),h},a=l=>new Zt({color:"#ffffff",roughness:l,metalness:0});this.parts={shirt:o(r.shirt,a(.8),!0),pants:o(r.pants,a(.85),!0),skin:o(r.skin,a(.6),!0),hair:o(r.hair,a(.9),!0),eyes:o(r.eyes,new Zt({color:"#1f1a17",roughness:.4}),!1)},this.blob=n&&s?o(n,s,!1):null,this.blob&&(this.blob.renderOrder=1),this.m=new te,this.legM=new te,this.t=new te,this.q=new en,this.e=new nn(0,0,0,"YXZ"),this.v=new L,this.s=new L(1,1,1),this.blobM=new te}begin(){this.n=0}add(t,e,n,s,r,{seated:o=!1,bob:a=0,wig:l=0,lean:c=0,turn:f=0}={}){if(this.n>=this.cap)return!1;let h=this.n++;this.e.set(c,r+f,l),this.q.setFromEuler(this.e),this.v.set(e,n+a,s),this.m.compose(this.v,this.q,this.s);let d=this.parts,p=t.mats;return d.shirt.setMatrixAt(h,this.m),d.skin.setMatrixAt(h,this.m),d.hair.setMatrixAt(h,this.m),d.eyes.setMatrixAt(h,this.m),o?(this.legM.makeTranslation(0,.42,0).multiply(this.t.makeRotationX(-1.45)).multiply(this.t.makeTranslation(0,-.42,0)),d.pants.setMatrixAt(h,this.t.multiplyMatrices(this.m,this.legM))):d.pants.setMatrixAt(h,this.m),d.shirt.setColorAt(h,p.shirt.color),d.pants.setColorAt(h,p.pants.color),d.skin.setColorAt(h,p.skin.color),d.hair.setColorAt(h,p.hair.color),this.blob&&!o&&(this.blobM.makeRotationX(-Math.PI/2).setPosition(e,.012,s),this.blob.setMatrixAt(this.blobN=this.blobN||0,this.blobM),this.blobN++),!0}end(){for(let t of Object.values(this.parts))t.count=this.n,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0);this.blob&&(this.blob.count=this.blobN||0,this.blob.instanceMatrix.needsUpdate=!0,this.blobN=0)}};var ur=new L;function Mn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ur.copy(t),ur[n]=0,ur.normalize();let c=.5*o/(o+a),f=1-ur.angleTo(i)/l;return Math.sign(ur[e])===1?f*c:a/(o+a)+c+c*(1-f)}var dr=class extends Mt{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,g=new L,v=.5/s;for(let m=0,u=0;m<f.length;m+=3,u+=2)switch(a.fromArray(f,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),f[m+0]=c.x*Math.sign(a.x)+l.x*r,f[m+1]=c.y*Math.sign(a.y)+l.y*r,f[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[u+0]=Mn(g,l,"z","y",r,n),d[u+1]=1-Mn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-Mn(g,l,"z","y",r,n),d[u+1]=1-Mn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-Mn(g,l,"x","z",r,t),d[u+1]=Mn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-Mn(g,l,"x","z",r,t),d[u+1]=1-Mn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-Mn(g,l,"x","y",r,t),d[u+1]=1-Mn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=Mn(g,l,"x","y",r,t),d[u+1]=1-Mn(g,l,"y","x",r,e);break}}};var ft={minX:-14,maxX:26,minZ:-10,maxZ:18,wallH:3.6,inZ:10},pr=-9.6,Ho=3,Fy=[{x:18.6,z:-4.4},{x:23,z:-4.4}],Cs={w:1.25,l:2.5},xc=new Map,D=(i,t=.75,e={})=>{let n=JSON.stringify([i,t,e.metalness||0,e.emissive||"",e.emissiveIntensity||0,e.side||0,!!e.flatShading]);return xc.has(n)||xc.set(n,new Zt({color:i,roughness:t,metalness:0,...e})),xc.get(n)},De=(i,t=1.6)=>D(i,.4,{emissive:i,emissiveIntensity:t});function ze(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Xe(n);return s.colorSpace=me,s.anisotropy=8,s}function sn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Oy(){let i=sn(21),t=ze(1024,1024,(e,n,s)=>{for(let o=0;o<s;o+=64){let a=-Math.floor(i()*360);for(;a<n;){let l=260+Math.floor(i()*260),c=i();e.fillStyle=`rgb(${Math.round(232+c*12)},${Math.round(208+c*12)},${Math.round(170+c*14)})`,e.fillRect(a,o,l,64),e.strokeStyle="rgba(165,120,75,.10)",e.lineWidth=1.2;for(let f=0;f<4;f++){let h=o+8+i()*48;e.beginPath(),e.moveTo(a,h);for(let d=a;d<a+l;d+=40)e.lineTo(d,h+Math.sin(d*.02+f)*2.5);e.stroke()}e.fillStyle="rgba(140,100,60,.22)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(140,100,60,.25)",e.fillRect(0,o,n,2)}});return t.wrapS=t.wrapT=Pn,t.repeat.set(4,2.9),t}function _c(i,t,e){return ze(512,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),n.strokeStyle=t,n.lineWidth=22,n.strokeRect(26,26,s-52,r-52),n.lineWidth=4,n.strokeRect(54,54,s-108,r-108),n.fillStyle=e;for(let o=100;o<r-90;o+=44)for(let a=100+o/44%2*22;a<s-90;a+=44)n.beginPath(),n.arc(a,o,5,0,7),n.fill()})}function ky(){return ze(1024,576,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#141a33"),n.addColorStop(1,"#2a1f45"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.06)";for(let s=0;s<9;s++)i.beginPath(),i.arc(120+s*110,470-s%3*30,60+s%4*14,0,Math.PI*2),i.fill();i.textAlign="center",i.fillStyle="#ffffff",i.font="900 86px Nunito, sans-serif",i.fillText("\u{1F3AC} SIMI CINEMA",t/2,e/2-20),i.font="700 34px Nunito, sans-serif",i.fillStyle="rgba(255,255,255,.75)",i.fillText('B\u1EA5m "\u{1F3AC} M\xE0n chi\u1EBFu" v\xE0 d\xE1n link YouTube',t/2,e/2+50),i.fillText("\u0111\u1EC3 c\u1EA3 qu\xE1n c\xF9ng xem",t/2,e/2+95)})}function Gy(){return ze(512,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7fbcf2"),n.addColorStop(.65,"#cfe6fb"),n.addColorStop(1,"#f5efe2"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.85)";for(let[r,o,a]of[[120,120,40],[170,110,52],[220,128,36],[360,220,30],[400,210,42]])i.beginPath(),i.arc(r,o,a,0,7),i.fill();let s=sn(9);for(let r=0;r<t;r+=46+s()*30){let o=120+s()*220,a=40+s()*40;i.fillStyle=`rgba(${90+s()*40},${120+s()*40},${160+s()*40},.55)`,i.fillRect(r,e-o,a,o),i.fillStyle="rgba(255,255,255,.45)";for(let l=e-o+12;l<e-10;l+=18)for(let c=r+6;c<r+a-6;c+=12)i.fillRect(c,l,5,8)}})}function Vy(){return ze(1024,256,(i,t,e)=>{i.clearRect(0,0,t,e),i.font='900 118px "Nunito", "Segoe UI", sans-serif',i.textAlign="center",i.textBaseline="middle";for(let[n,s]of[[38,"#2f8cf0"],[18,"#7cc4ff"],[0,"#ffffff"]])i.shadowColor="#2f8cf0",i.shadowBlur=n,i.fillStyle=s,i.fillText("SIMI BAR",t/2-110,e/2+4);i.font='italic 900 92px "Nunito", "Segoe UI", sans-serif';for(let[n,s]of[[34,"#ff4fa3"],[14,"#ff9ccf"],[0,"#fff3fa"]])i.shadowColor="#ff4fa3",i.shadowBlur=n,i.fillStyle=s,i.fillText("chill",t/2+300,e/2+10)})}function Wy(){return ze(512,640,(i,t,e)=>{i.fillStyle="#26332e",i.fillRect(0,0,t,e),i.fillStyle="#f7f3e8",i.textAlign="center",i.font='900 64px "Nunito", "Segoe UI", sans-serif',i.fillText("MENU",t/2,92),i.font='700 34px "Nunito", "Segoe UI", sans-serif',i.textAlign="left",[["C\xE0 ph\xEA s\u1EEFa \u0111\xE1","25k"],["Tr\xE0 \u0111\xE0o cam s\u1EA3","35k"],["Matcha latte","39k"],["Soda chanh d\xE2y","32k"],["B\xE1nh m\xEC AI \u2728","20k"]].forEach(([n,s],r)=>{i.fillStyle="#f7f3e8",i.fillText(n,46,190+r*82),i.fillStyle="#ffd26a",i.textAlign="right",i.fillText(s,t-46,190+r*82),i.textAlign="left"}),i.strokeStyle="rgba(247,243,232,.5)",i.lineWidth=3,i.strokeRect(18,18,t-36,e-36)})}var No=null;function Xy(){return No||(No=ze(256,256,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(.45,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),No)}function mn(i,t,e,n,s,r=.35){let o=new O(new ne(n*2,n*2),new se({map:Xy(),color:s,transparent:!0,opacity:r,depthWrite:!1,blending:jr,toneMapped:!1}));return o.rotation.x=-Math.PI/2,o.position.set(t,.015,e),o.renderOrder=2,i.add(o),o}function Hf(i,t){new gs().load((globalThis.VP_ASSET_BASE||"")+i,e=>{e.colorSpace=me,e.anisotropy=8,t(e)},void 0,()=>{})}function Bf(i,t={}){let e={animated:[],seats:[],obstacles:[],seatMeshes:[],clickables:[]},n=[],s=(F,rt,xt,_t,zt,Ft=i,{cast:Qt=!0,receive:B=!0}={})=>{let Et=new O(F,rt);return Et.position.set(xt,_t,zt),Et.castShadow=Qt,Et.receiveShadow=B,Ft.add(Et),n.push(Et),Et},r=(F,rt,xt,_t=0)=>_t>0?new dr(F,rt,xt,2,Math.min(_t,F/2-.001,rt/2-.001,xt/2-.001)):new Mt(F,rt,xt),o=(F,rt,xt,_t)=>e.obstacles.push([Math.min(F,xt),Math.min(rt,_t),Math.max(F,xt),Math.max(rt,_t)]),a=ft.maxX-ft.minX,l=ft.maxZ-ft.minZ,c=(ft.minX+ft.maxX)/2,f=(ft.minZ+ft.maxZ)/2,h=ft.inZ-ft.minZ,d=(ft.minZ+ft.inZ)/2,p={cast:!1};s(r(a+.7,.5,l+.7,.12),D("#e8dfd1",.85),c,-.26,f,i,{cast:!1,receive:!0}),s(r(a+.75,.08,l+.75,.03),D("#d3c4ae",.8),c,-.47,f,i,p);let g=Oy();g.repeat.set(4*a/28,2.9*h/20);let v=new O(new ne(a,h),new Zt({color:"#ffffff",roughness:.62,map:g}));v.rotation.x=-Math.PI/2,v.position.set(c,.001,d),v.receiveShadow=!0,i.add(v),e.floor=v;let m=D("#f6f0e6",.95),u=D("#e3d5bf",.8),x=D("#b98d5e",.5),_=D("#9b7048",.6);s(r(a+.2,ft.wallH,.22),m,c,ft.wallH/2,ft.minZ-.11,i,p),s(r(.22,ft.wallH,h),m,ft.minX-.11,ft.wallH/2,d,i,p),s(r(a,1,.05),u,c,.5,ft.minZ+.025,i,p),s(r(.05,1,h),u,ft.minX+.025,.5,d,i,p),s(r(a,.06,.09),x,c,1.02,ft.minZ+.045,i,p),s(r(.09,.06,h),x,ft.minX+.045,1.02,d,i,p),s(r(a-.02,.12,.07),_,c,.06,ft.minZ+.035,i,p),s(r(.07,.12,h-.02),_,ft.minX+.035,.06,d,i,p),s(r(a+.22,.12,.3,.03),D("#ffffff",.6),c,ft.wallH+.06,ft.minZ-.08,i,p),s(r(.3,.12,h,.03),D("#ffffff",.6),ft.minX-.08,ft.wallH+.06,d,i,p),s(r(.34,ft.wallH+.12,.34,.04),D("#ffffff",.6),ft.minX-.15,(ft.wallH+.12)/2,ft.inZ,i,p);for(let F=ft.minX+.6;F<ft.maxX;F+=.6)s(r(.02,.83,.02),x,F,.545,ft.minZ+.06,i,p);for(let F=ft.minZ+.6;F<ft.inZ-.2;F+=.6)s(r(.02,.83,.02),x,ft.minX+.06,.545,F,i,p);let M=pr-2.4,T=pr+2.4,w=-8.1,b=(M+T)/2;s(r(T-M+1.6,ft.wallH-.02,.07),D("#1d2b4f",.9),b,ft.wallH/2,ft.minZ+.02,i,p),s(r(T-M,1.05,.72,.06),D("#8a5a3b",.55),b,.525,w);for(let F=M+.25;F<T-.1;F+=.28)s(r(.12,.86,.04,.015),D("#a8724c",.5),F,.53,w+.37,i,p);s(r(T-M+.24,.07,.92,.03),D("#f6f3ee",.22,{metalness:.05}),b,1.09,w+.05),s(r(T-M,.04,.04),De("#4aa8ff",2.4),b,.1,w+.39,i,p),s(r(T-M,.03,.4),D("#b9c2cf",.3,{metalness:.6}),b,.06,w+.6,i,p),o(M-.1,w-.5,T+.1,w+.45),o(M-.1,ft.minZ,T+.1,w);let I=sn(5),U=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#ff9a52","#c3a6ff","#ff5a5f","#9fd6ff"],y=new Y(.05,.06,1,12),E=new Y(.018,.022,.08,8);for(let F=0;F<3;F++){let rt=1.45+F*.55;s(r(T-M-.4,.05,.34,.015),D("#c79a6a",.5),b,rt,ft.minZ+.22,i,p),s(r(T-M-.4,.035,.03),De("#ffd8a0",1),b,rt-.04,ft.minZ+.37,i,p);for(let xt=M+.2;xt<T-.3;xt+=.32+I()*.2){let _t=U[Math.floor(I()*U.length)],zt=.22+I()*.14,Ft=s(y,D(_t,.18,{emissive:_t,emissiveIntensity:.25}),xt,rt+zt/2+.03,ft.minZ+.22,i,p);Ft.scale.y=zt,s(E,D("#2b2b33"),xt,rt+zt+.07,ft.minZ+.22,i,p)}}let N=new O(new ne(4.6,1.15),new se({map:Vy(),transparent:!0,toneMapped:!1,depthWrite:!1}));N.position.set(b,3.12,ft.minZ+.06),i.add(N),N.material.opacity=.95;let H=new Zt({color:"#e6f6ff",roughness:.05,transparent:!0,opacity:.55});for(let F=0;F<3;F++)s(new Y(.05,.04,.13,12),H,M+1.2+F*1.2,1.19,w-.1,i,p);s(r(.55,.48,.38,.05),D("#cfd6df",.25,{metalness:.65}),T-.8,1.37,w-.1),s(r(.3,.06,.2,.02),D("#2b2b33",.4),T-.8,1.64,w-.1,i,p),s(new Y(.1,.08,.14,14),D("#ffffff",.5),M+.5,1.2,w-.15,i,p),s(new ke(.13,1),D("#5fb36f",.8,{flatShading:!0}),M+.5,1.36,w-.15,i,p);let P=new O(new ne(1.1,1.38),new Zt({map:Wy(),roughness:.9}));P.position.set(T+2.2,2,ft.minZ+.05),i.add(P),s(r(1.24,1.52,.05,.02),D("#8a5a3b",.5),T+2.2,2,ft.minZ+.02,i,p);let G=D("#c2cad6",.25,{metalness:.7}),z=[D("#2f8cf0",.55),D("#ff7a6b",.55)],it=new Y(.21,.21,.1,22),X=0;for(let F=M+.6;F<=T-.5;F+=1.05){let rt=w+.85,xt=new Dt;xt.position.set(F,0,rt),i.add(xt),s(it,z[X%2],0,.75,0,xt),s(new Y(.035,.035,.7,10),G,0,.36,0,xt),s(new Y(.19,.22,.03,20),G,0,.015,0,xt),s(new Ee(.16,.014,8,20),G,0,.3,0,xt,p).rotation.x=Math.PI/2,pt(`b${++X}`,F,rt,Math.PI,.78,{x:F,z:rt+.55})}let Z=D("#fbf7f0",.35),ot=D("#b8875a",.5);Jy({scene:i,add:s,box:r,block:o,seat:pt,out:e});let lt=[D("#8fc9b0",.85),D("#a99be0",.85),D("#8cc3f5",.85)],Ct=[D("#ffd34d",.8),D("#ff9a6b",.8),D("#ffffff",.8)],Ut=[_c("#f3ead9","#8fc9b0","rgba(143,201,176,.5)"),_c("#efe9f8","#a99be0","rgba(169,155,224,.5)"),_c("#eaf3fc","#8cc3f5","rgba(140,195,245,.5)")];[[-10.2,-.6],[-10.2,4]].forEach(([F,rt],xt)=>{let _t=lt[xt],zt=new Dt;zt.position.set(F-2.6,0,rt),i.add(zt),s(r(.92,.3,2.6,.08),_t,0,.27,0,zt),s(r(.8,.14,2.3,.07),_t,.05,.47,0,zt),s(r(.26,.72,2.6,.1),_t,-.34,.6,0,zt);for(let Qt of[-1,1])s(r(.92,.55,.22,.09),_t,0,.42,Qt*1.25,zt);for(let[Qt,B]of[[-.75,.2],[.75,-.2]])s(r(.14,.34,.34,.07),Ct[xt],-.13,.66,Qt,zt).rotation.set(B,0,.22);for(let[Qt,B]of[[-.35,-1.2],[.35,-1.2],[-.35,1.2],[.35,1.2]])s(new Y(.03,.02,.12,8),ot,Qt,.06,B,zt,p);o(F-3.1,rt-1.4,F-2.1,rt+1.4),s(new Y(.55,.55,.06,32),D("#c79a6a",.45),F-.4,.38,rt),s(new Y(.08,.12,.34,12),D("#9b7048",.5),F-.4,.18,rt),s(new Y(.06,.06,.08,12),De("#ffb35c",.9),F-.4,.45,rt+.2,i,p),s(new Y(.05,.04,.12,12),H,F-.55,.47,rt-.2,i,p),o(F-.95,rt-.6,F+.15,rt+.6);for(let Qt=-1;Qt<=1;Qt++)pt(`s${xt+1}${Qt+2}`,F-2.5,rt+Qt*.8,Math.PI/2,.44,{x:F-1.75,z:rt+Qt*.8});let Ft=new O(new ne(3.4,3.2),new Zt({map:Ut[xt],roughness:.95}));Ft.rotation.x=-Math.PI/2,Ft.position.set(F-1,.006,rt),Ft.receiveShadow=!0,i.add(Ft),mn(i,F-1.2,rt,2,"#ffd9a8",.18)});for(let[F,rt]of[[-13.2,-8.4],[-13.2,6.4]])s(new Y(.16,.2,.04,18),D("#3a3a44",.4),F,.02,rt),s(new Y(.02,.02,1.6,8),D("#3a3a44",.4),F,.82,rt),s(new Y(.2,.28,.34,20,1,!0),D("#fff1d6",.6,{side:ge,emissive:"#ffd9a0",emissiveIntensity:.7}),F,1.72,rt,i,p),mn(i,F+.4,rt,1.4,"#ffd9a8",.25);let Q=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#c3a6ff"].map(F=>new Yt(F)),ht=new Yt("#2a3150"),gt=new dn(r(.94,.05,.94,.02),new se({toneMapped:!1}),30),vt=new te,Ht=new Yt;for(let F=0;F<6;F++)for(let rt=0;rt<5;rt++)vt.makeTranslation(-4.5+F,.025,2.5+rt),gt.setMatrixAt(F*5+rt,vt),gt.setColorAt(F*5+rt,ht);gt.receiveShadow=!0,i.add(gt),s(r(6.2,.04,5.2,.02),D("#c2cad6",.3,{metalness:.6}),-2,.012,4.5,i,p),e.animated.push(F=>{for(let rt=0;rt<30;rt++){let xt=.5+.5*Math.sin(F*.6+rt*1.7);Ht.copy(ht).lerp(Q[(Math.floor(rt/5)+rt)%5],.4+.3*xt),gt.setColorAt(rt,Ht)}gt.instanceColor.needsUpdate=!0});let Ot=new O(new ke(.35,1),new Zt({color:"#eef3fa",roughness:.1,metalness:.9,flatShading:!0}));Ot.position.set(-2,3,5),Ot.castShadow=!0,i.add(Ot),s(new Y(.01,.01,.6,4),D("#888"),-2,3.45,5,i,p),e.animated.push(F=>{Ot.rotation.y=F*.8});let Jt=mn(i,-2,4,1.4,"#ff6fb5",.4),jt=mn(i,-2,6,1.4,"#4aa8ff",.4);e.animated.push(F=>{Jt.position.set(-2+Math.sin(F*.5)*2.2,.06,4.5+Math.cos(F*.5)*1.6),jt.position.set(-2+Math.sin(F*.5+Math.PI)*2.2,.06,4.5+Math.cos(F*.5+Math.PI)*1.6)}),s(r(2.2,.95,.8,.06),D("#24304f",.4),-11.5,.475,8.3),s(r(2.2,.05,.05),De("#ff6fb5",2),-11.5,.9,7.88,i,p),s(r(2.1,.05,.72,.02),D("#3a3a44",.4),-11.5,.97,8.3);for(let F of[-.5,.5])s(new Y(.22,.22,.04,24),D("#16161c",.2),-11.5+F,1.02,8.3,i,p);s(r(.4,.04,.3,.01),De("#4aa8ff",1.2),-11.5,1.01,8.3,i,p);for(let F of[-13,-10])s(r(.7,1.6,.6,.06),D("#24304f",.5),F,.8,9.2),s(new Y(.22,.22,.02,24),D("#3a3a44",.3),F,1.05,8.89,i,p).rotation.x=Math.PI/2,s(new Y(.12,.12,.02,20),D("#3a3a44",.3),F,.5,8.89,i,p).rotation.x=Math.PI/2;o(-13.4,7.85,-9.6,9.6),[[.6,-3.4],[3,-2.6]].forEach(([F,rt],xt)=>{s(new Y(.42,.42,.05,28),Z,F,1.08,rt),s(new Y(.04,.05,1.06,10),D("#3a3a44",.4),F,.53,rt),s(new Y(.26,.3,.03,20),D("#3a3a44",.4),F,.015,rt),s(new Y(.05,.04,.13,12),H,F+.12,1.17,rt-.05,i,p),s(new At(.06,10,8),D(["#ff7aa8","#ffd34d"][xt],.7),F-.12,1.15,rt+.06,i,p),o(F-.45,rt-.45,F+.45,rt+.45)});let ut=Gy();for(let F of[-7.6,8.4]){let rt=new O(new ne(1.7,1.6),new se({map:ut,toneMapped:!1}));rt.position.set(ft.minX+.03,2.15,F),rt.rotation.y=Math.PI/2,i.add(rt),s(r(.08,1.8,1.9,.02),D("#ffffff",.5),ft.minX+.02,2.15,F,i,p),s(r(.1,.05,1.7),D("#ffffff",.5),ft.minX+.06,2.15,F,i,p),s(r(.1,1.6,.05),D("#ffffff",.5),ft.minX+.06,2.15,F,i,p),s(r(.22,.06,1.95,.02),D("#ffffff",.5),ft.minX+.1,1.32,F,i,p)}Ky({scene:i,add:s,box:r,block:o,seat:pt,out:e}),tx({scene:i,add:s,box:r,block:o,out:e}),nx({scene:i,add:s,box:r,block:o,out:e});let C=[D("#f6f1e8",.6),D("#d98b5f",.75)],St=[D("#5fb36f",.85,{flatShading:!0}),D("#3f9a5a",.85,{flatShading:!0})],q=new ke(1,1);[[-13.3,-9.3],[-13.3,9.3],[-6,-9.3],[-13.3,-3.6],[14.3,9.2],[25.5,6.8]].forEach(([F,rt],xt)=>{s(new Y(.26,.19,.5,18),C[xt%2],F,.25,rt),s(new Y(.24,.24,.03,18),D("#6b4a32",.9),F,.49,rt,i,p);let _t=sn(30+xt);for(let zt=0;zt<5;zt++)s(q,St[zt%2],F+(_t()-.5)*.3,.8+_t()*.55,rt+(_t()-.5)*.3).scale.setScalar(.2+_t()*.12);o(F-.35,rt-.35,F+.35,rt+.35)});for(let F=M+1;F<T;F+=2.4)s(new Y(.015,.015,1.1,8),D("#7c818d"),F,ft.wallH-.55,w+.1,i,p),s(new He(.2,.22,20,1,!0),D("#c99a5b",.4,{side:ge}),F,ft.wallH-1.15,w+.1,i,p),s(new At(.07,12,8),De("#ffd28a",3),F,ft.wallH-1.23,w+.1,i,p),mn(i,F,w+.9,1.25,"#ffd9a0",.32);let $=["#ffd28a","#ff9ccf","#9fd0ff","#b6f5d8"].map(F=>new Yt(F)),ct=96,mt=new dn(new At(.035,8,6),new se({toneMapped:!1}),ct),yt=new te;for(let F=0;F<ct;F++){let rt=F/(ct-1),xt=rt<.6,_t=xt?ft.maxX-.4-rt/.6*(a-.8):ft.minX+.1,zt=xt?ft.minZ+.1:ft.minZ+.4+(rt-.6)/.4*(h-.8),Ft=ft.wallH-.25-Math.abs(Math.sin(F*.55))*.22;yt.makeTranslation(_t,Ft,zt),mt.setMatrixAt(F,yt),mt.setColorAt(F,$[F%4])}i.add(mt);let A=new se({color:"#ffffff",toneMapped:!1}),S=new O(new ne(2.4,3.2),A);S.position.set(ft.minX+.075,2,-3.6),S.rotation.y=Math.PI/2,i.add(S),s(r(.06,3.36,2.56,.03),D("#1d2b4f",.4),ft.minX+.03,2,-3.6,i,p),Hf("brand/simi-banner.jpg",F=>{A.map=F,A.needsUpdate=!0});let W=(F,rt,xt,_t,zt,Ft,Qt,B)=>{let Et=new Dt;Et.position.set(zt,Ft,Qt),Et.rotation.y=B,i.add(Et),s(r(rt+.18,xt+.18,.05,.03),D(_t,.5),0,0,0,Et,p);let et=new O(new ne(rt,xt),new se({transparent:!0,opacity:0,toneMapped:!1}));et.position.z=.03,Et.add(et),Hf(F,dt=>{et.material.map=dt,et.material.opacity=1,et.material.needsUpdate=!0})};W("brand/uniq.png",1.6,.57,"#142c5a",ft.minX+.05,2.4,1.6,Math.PI/2),W("brand/crenot.png",1.8,.44,"#ffffff",ft.minX+.05,2.4,6,Math.PI/2),W("brand/simi.png",1.3,.39,"#0a78f0",ft.minX+.05,2.4,-.8,Math.PI/2);let st=4.8,at=2.7,tt=Ho,Pt=1.95,bt=ft.minZ+.17;s(r(st+.3,at+.3,.08,.04),D("#16161c",.35),tt,Pt,ft.minZ+.12,i,p),s(r(st+.6,.08,.3,.03),D("#2b2b33",.4),tt,Pt-at/2-.22,ft.minZ+.2,i,p);for(let F of[-1,1])s(r(.42,1,.36,.05),D("#22222a",.5),tt+F*(st/2+.55),.5,ft.minZ+.3);for(let F of[-1,1])for(let rt of[.72,.3])s(new Y(rt>.5?.08:.13,rt>.5?.08:.13,.02,20),D("#3a3a44",.3),tt+F*(st/2+.55),rt,ft.minZ+.49,i,p).rotation.x=Math.PI/2;o(tt-st/2-.8,ft.minZ,tt-st/2-.3,ft.minZ+.5),o(tt+st/2+.3,ft.minZ,tt+st/2+.8,ft.minZ+.5);let Lt=new O(new ne(st,at),new se({map:ky(),toneMapped:!1}));Lt.position.set(tt,Pt,bt),i.add(Lt);let oe=new O(new ne(st,at),new se({color:0,opacity:0,blending:Nn,toneMapped:!1}));oe.position.set(tt,Pt,bt+.002),oe.visible=!1,i.add(oe),oe.userData.cinema=!0,Lt.userData.cinema=!0,e.cinema={x:tt,y:Pt,z:bt+.004,w:st,h:at,idle:Lt,hole:oe},ax({scene:i,add:s,box:r,block:o,seat:pt,out:e,statics:n,flat:p,glassM:H}),hx({scene:i,add:s,box:r,block:o,seat:pt,out:e,flat:p,glassM:H,tableTop:Z});function pt(F,rt,xt,_t,zt,Ft,Qt,B){e.seats.push({id:F,x:rt,z:xt,face:_t,h:zt,approach:Ft,kind:Qt,...B?{theme:B}:{}});let Et=new O(new Y(.32,.32,zt+.1,10),new se({visible:!1}));Et.position.set(rt,(zt+.1)/2,xt),Et.userData.seatId=F,i.add(Et),e.seatMeshes.push(Et)}return t.tet&&Af(i,e,{minX:ft.minX,maxX:ft.maxX,minZ:ft.minZ,maxZ:ft.maxZ,inZ:ft.inZ,cinemaX:Ho,barX:pr,gate:{x:12.5,z:ft.maxZ-.35,half:2.2},umbrellas:[[-10.4,13.4],[-6,15.4],[-1.6,13.2],[3,15.3]],lamps:[[-8,17],[-.5,11.4],[5.6,11.4],[17,17],[23.2,11.4],[-12.6,11.2]]}),qy(i,n),e.spawn={minX:8,maxX:16,minZ:13,maxZ:16.5},e}function qy(i,t){i.updateMatrixWorld(!0);let e=new Map;for(let n of t){let s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(let o of Object.keys(s.attributes))["position","normal","uv"].includes(o)||s.deleteAttribute(o);s.attributes.uv||s.setAttribute("uv",new ce(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n.matrixWorld);let r=`${n.material.uuid}|${n.castShadow}|${n.receiveShadow}`;e.has(r)||e.set(r,{mat:n.material,cast:n.castShadow,receive:n.receiveShadow,geos:[]}),e.get(r).geos.push(s),n.parent.remove(n)}for(let{mat:n,cast:s,receive:r,geos:o}of e.values()){let a=On(o,!1);if(!a)continue;let l=new O(a,n);l.castShadow=s,l.receiveShadow=r,l.matrixAutoUpdate=!1,i.add(l)}for(let n of[...i.children])n.isGroup&&n.children.length===0&&i.remove(n)}var he={cx:8,cz:.6,r:1.75,x1:4.9,x2:13.1,z1:-2.3,z2:3.5,gx1:5.4,gx2:10.6,gz1:5.2,gz2:8.4};function Yy(){return ze(256,512,(i,t,e)=>{let n=sn(7);i.fillStyle="#d5d3a2",i.fillRect(0,0,t,e);for(let s=0;s<e;s+=4){let r=n();i.fillStyle=`rgba(${150+r*40},${150+r*30},${80+r*20},.18)`,i.fillRect(0,s,t,2)}i.fillStyle="#2f3b2c",i.fillRect(0,0,14,e),i.fillRect(t-14,0,14,e),i.fillStyle="rgba(255,255,255,.12)",i.fillRect(14,0,2,e),i.fillRect(t-16,0,2,e),i.fillStyle="rgba(90,80,40,.35)",i.fillRect(0,0,t,2),i.fillRect(0,e-2,t,2)})}function Zy(i){let n=1040/(he.gx2-he.gx1),s=640/(he.gz2-he.gz1);return ze(1040,640,r=>{r.fillStyle="#ece5d3",r.fillRect(0,0,1040,640);let o=a=>{r.lineWidth=3,r.strokeStyle="rgba(150,135,105,.38)",a(0),r.lineWidth=2,r.strokeStyle="rgba(255,255,255,.75)",a(3)};o(a=>{for(let l=14;l<640;l+=18)r.beginPath(),r.moveTo(0,l+a),r.lineTo(1040,l+a),r.stroke()});for(let[a,l,c]of i){let f=(a-he.gx1)*n,h=(l-he.gz1)*s,d=c*n;r.fillStyle="#ece5d3",r.beginPath(),r.arc(f,h,d+6*18,0,Math.PI*2),r.fill(),o(p=>{for(let g=1;g<=6;g++)r.beginPath(),r.arc(f,h,d+g*18+p,0,Math.PI*2),r.stroke()})}})}function $y(){return ze(768,240,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#5b3a22"),n.addColorStop(1,"#3e2615"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=2;for(let s=12;s<e;s+=17)i.beginPath(),i.moveTo(0,s),i.bezierCurveTo(t*.3,s+6,t*.6,s-6,t,s+3),i.stroke();i.strokeStyle="#d9b46a",i.lineWidth=5,i.strokeRect(12,12,t-24,e-24),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f3d58c",i.font='bold 74px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("THI\u1EC0N \xB7 D\u01AF\u1EE0NG SINH".normalize("NFC"),t/2,e*.42),i.fillStyle="#ead9b0",i.font='600 34px "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, sans-serif',i.fillText("T\u0129nh t\xE2m \xB7 H\xEDt th\u1EDF \xB7 An nhi\xEAn".normalize("NFC"),t/2,e*.76)})}function Jy({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},{cx:a,cz:l}=he,c=D("#6b4528",.6),f=D("#a77b4f",.6),h=D("#a9a59b",.95,{flatShading:!0}),d=he.x2-he.x1,p=he.z2-he.z1,g=(he.x1+he.x2)/2,v=(he.z1+he.z2)/2;t(e(d+.2,.03,p+.2,.01),c,g,.015,v,i,o);let m=Yy();m.wrapS=m.wrapT=Pn,m.repeat.set(d/.9,p/1.8);let u=new O(new ne(d,p),new Zt({map:m,roughness:.9}));u.rotation.x=-Math.PI/2,u.position.set(g,.032,v),u.receiveShadow=!0,i.add(u);let x=[D("#34446e",.95),D("#6d3b30",.95)],_=[D("#d98a2b",.9),D("#46598a",.9)],M=e(.74,.04,.74,.015),T=new Y(.22,.24,.14,22);for(let q=0;q<8;q++){let $=q/8*Math.PI*2,ct=a+Math.sin($)*he.r,mt=l+Math.cos($)*he.r,yt=new Dt;yt.position.set(ct,0,mt),yt.rotation.y=$,i.add(yt),t(M,x[q%2],0,.052,.1,yt,o),t(T,_[q%2],0,.142,.05,yt),t(new Ee(.23,.012,6,22),D("#f1e3c2",.8),0,.142,.05,yt,o).rotation.x=Math.PI/2,s(`z${q+1}`,ct+Math.sin($)*.05,mt+Math.cos($)*.05,$+Math.PI,.21,{x:a+Math.sin($)*(he.r+.8),z:l+Math.cos($)*(he.r+.8)},"zen")}t(new Y(.5,.5,.05,32),D("#5a2219",.32),a,.3,l),t(new Y(.51,.51,.015,32),D("#c9a14a",.4,{metalness:.5}),a,.27,l,i,o);for(let q=0;q<4;q++){let $=q*Math.PI/2+Math.PI/4;t(e(.06,.26,.06,.01),D("#3c1610",.4),a+Math.sin($)*.36,.14,l+Math.cos($)*.36)}let w=D("#9a7432",.35,{metalness:.7});t(new Y(.11,.09,.1,18),w,a,.38,l),t(new Ee(.11,.015,6,18),w,a,.43,l,i,o).rotation.x=Math.PI/2;for(let q of[-.03,0,.03])t(new Y(.004,.004,.2,4),D("#7a3b22",.8),a+q,.53,l,i,o);for(let q of[-.03,0,.03])t(new At(.01,6,4),De("#ff6a2a",3),a+q,.635,l,i,o);t(new Y(.06,.08,.16,14),D("#e9eef2",.25),a-.27,.41,l+.12,i,o);for(let q=0;q<6;q++){let $=q*Math.PI/3;t(new At(.05,8,6),D("#f39bb8",.7),a-.27+Math.sin($)*.05,.52,l+.12+Math.cos($)*.05,i,o).scale.set(.7,1.3,.7)}t(new At(.035,8,6),D("#ffd84d",.6),a-.27,.53,l+.12,i,o),t(new Y(.035,.035,.09,12),D("#fff6e4",.6),a+.25,.37,l-.15,i,o),t(new At(.018,8,6),De("#ffcf6a",3),a+.25,.435,l-.15,i,o).scale.set(1,1.6,1),t(new Y(.11,.11,.05,16),D("#6d3b30",.9),a+.2,.355,l+.22,i,o),t(new At(.1,18,8,0,Math.PI*2,Math.PI/2,Math.PI/2),D("#c79b3c",.3,{metalness:.8,side:ge}),a+.2,.47,l+.22,i,o),n(a-.6,l-.6,a+.6,l+.6);let b=[];for(let q=0;q<6;q++){let $=new O(new At(.035,8,6),new se({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));$.renderOrder=3,i.add($),b.push($)}r.animated.push(q=>{b.forEach(($,ct)=>{let mt=(q*.22+ct/b.length)%1;$.position.set(a+Math.sin(q*.9+ct*1.7)*.07*mt,.66+mt*1.3,l+Math.cos(q*.7+ct)*.05*mt),$.scale.setScalar(1+mt*3.2),$.material.opacity=.32*Math.sin(Math.PI*Math.min(1,mt*1.25))})}),mn(i,a,l,3,"#d9f3cf",.26);let I=new Zt({color:"#fff1d6",roughness:.6,emissive:"#ffcf8a",emissiveIntensity:1.1}),U=D("#2c2420",.5),y=D("#5d5048",.8);for(let q=0;q<4;q++){let $=q*Math.PI/2+Math.PI/4,ct=a+Math.sin($)*1.15,mt=l+Math.cos($)*1.15,yt=2.55+q%2*.15;t(new Y(.006,.006,ft.wallH-yt-.22,4),y,ct,(ft.wallH+yt+.22)/2,mt,i,o),t(new Y(.1,.12,.04,16),U,ct,yt+.23,mt,i,o),t(new Y(.1,.12,.04,16),U,ct,yt-.23,mt,i,o);let A=new O(new At(.2,18,12),I);A.scale.set(1,1.25,1),A.position.set(ct,yt,mt),i.add(A);for(let S=-1;S<=1;S++)t(new Ee(.2*Math.sqrt(1-(S*.12/.25)**2),.004,4,20),U,ct,yt+S*.12,mt,i,o).rotation.x=Math.PI/2}r.animated.push(q=>{I.emissiveIntensity=1+Math.sin(q*.8)*.18});let E=12.1,N=.6;t(e(.8,.05,.55,.02),D("#4a2f1c",.45),E,.28,N);for(let[q,$]of[[-.34,-.22],[.34,-.22],[-.34,.22],[.34,.22]])t(e(.05,.25,.05,.01),D("#3a2414",.5),E+q,.14,N+$);t(e(.42,.02,.26,.01),f,E,.315,N,i,o),t(new At(.075,16,12),D("#7a3a24",.4),E-.08,.39,N,i,o).scale.set(1,.85,1),t(new Y(.012,.02,.09,8),D("#7a3a24",.4),E-.16,.4,N,i,o).rotation.z=.9,t(new Ee(.04,.01,6,12),D("#7a3a24",.4),E+0,.4,N,i,o),t(new At(.015,8,6),D("#7a3a24",.4),E-.08,.455,N,i,o);for(let q of[.07,.14])t(new Y(.027,.02,.04,12),D("#f3efe4",.3),E+q,.345,N+(q>.1?.06:-.05),i,o);for(let[q,$]of[[-1,0],[1,Math.PI]]){let ct=N+q*.62,mt=new Dt;mt.position.set(E,0,ct),mt.rotation.y=$,i.add(mt),t(M,x[1],0,.052,0,mt,o),t(T,_[q<0?0:1],0,.142,-.04,mt),s(`zt${q<0?1:2}`,E,ct-q*.04,$,.21,{x:E,z:N+q*1.35},"zen")}n(E-.45,N-.32,E+.45,N+.32),mn(i,E,N,1.4,"#ffe2b0",.2);let P=[[6.5,6.2,.38],[8.9,7.4,.3],[9.7,6,.22]],G=he.gx2-he.gx1,z=he.gz2-he.gz1,it=(he.gx1+he.gx2)/2,X=(he.gz1+he.gz2)/2,Z=new O(new ne(G,z),new Zt({map:Zy(P),roughness:1}));Z.rotation.x=-Math.PI/2,Z.position.set(it,.07,X),Z.receiveShadow=!0,i.add(Z),t(e(G,.06,z),D("#d9d1bd",1),it,.03,X,i,o);for(let[q,$,ct,mt]of[[G+.24,.12,it,he.gz1-.06],[G+.24,.12,it,he.gz2+.06],[.12,z,he.gx1-.06,X],[.12,z,he.gx2+.06,X]])t(e(q,.13,$,.02),c,ct,.065,mt);let ot=[D("#8f8a80",.95,{flatShading:!0}),D("#76726b",.95,{flatShading:!0})],lt=D("#6f9a4a",.95,{flatShading:!0});P.forEach(([q,$,ct],mt)=>{let yt=t(new js(ct,0),ot[mt%2],q,.07+ct*.45,$);yt.scale.set(1.15,.8+(mt===0?.35:0),.9),yt.rotation.set(.3*mt,.9*mt,.15);let A=sn(40+mt);for(let S=0;S<4;S++){let W=A()*Math.PI*2;t(new ke(.1+A()*.07,0),lt,q+Math.sin(W)*ct*1.05,.08,$+Math.cos(W)*ct*1.05,i,o).scale.set(1.3,.45,1.3)}}),n(he.gx1-.15,he.gz1-.15,he.gx2+.15,he.gz2+.15);let Ct=11.15,Ut=7.6;t(new Y(.3,.34,.32,9),h,Ct,.16,Ut);let Q=new O(new Bn(.2,20),new Zt({color:"#6fb6d8",roughness:.1,emissive:"#2a7fb0",emissiveIntensity:.25}));Q.rotation.x=-Math.PI/2,Q.position.set(Ct,.322,Ut),i.add(Q);for(let[q,$,ct]of[[.42,.1,.12],[-.3,.38,.09],[.15,.42,.1]])t(new js(ct,0),h,Ct+q,ct*.6,Ut+$,i,o);let ht=D("#9cba5a",.55);t(new Y(.03,.03,.62,10),ht,Ct+.45,.31,Ut-.25);let gt=t(new Y(.022,.022,.42,10),ht,Ct+.25,.55,Ut-.14,i,o);gt.rotation.set(0,0,Math.PI/2+.25),gt.rotation.y=-.5;let vt=new O(new At(.014,6,4),new se({color:"#d6efff"}));i.add(vt);let Ht=new O(new Fn(.03,.045,20),new se({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));Ht.rotation.x=-Math.PI/2,Ht.position.set(Ct+.07,.326,Ut-.04),i.add(Ht),r.animated.push(q=>{let $=q*.8%1;vt.position.set(Ct+.07,.5-$*$*.17,Ut-.04),vt.visible=$<.95;let ct=q*.8%1;Ht.scale.setScalar(1+ct*3),Ht.material.opacity=.6*(1-ct)}),n(Ct-.5,Ut-.5,Ct+.6,Ut+.6);let Ot=De("#ffd28a",1.5);for(let[q,$]of[[4.5,4.4],[11.4,4.4]]){t(new Y(.2,.24,.1,6),h,q,.05,$),t(new Y(.075,.09,.55,8),h,q,.37,$),t(e(.42,.07,.42,.02),h,q,.68,$),t(e(.3,.26,.3,.02),h,q,.85,$),t(e(.31,.15,.17),Ot,q,.86,$,i,o),t(e(.17,.15,.31),Ot,q,.86,$,i,o);let ct=t(new He(.36,.22,4),h,q,1.09,$);ct.rotation.y=Math.PI/4,t(new At(.05,8,6),h,q,1.23,$,i,o),mn(i,q,$,1.1,"#ffd9a0",.22),n(q-.3,$-.3,q+.3,$+.3)}let Jt=D("#6fa64a",.55),jt=D("#4e7d33",.6),ut=[D("#5f9e45",.85,{flatShading:!0}),D("#79b856",.85,{flatShading:!0})];[[5,-3,1],[13.5,3.3,3],[4.6,8.7,4]].forEach(([q,$,ct])=>{let mt=sn(ct*13);t(new Y(.42,.46,.12,14),D("#cfc6b4",.95),q,.06,$);for(let yt=0;yt<6;yt++){let A=mt()*Math.PI*2,S=.08+mt()*.24,W=q+Math.sin(A)*S,st=$+Math.cos(A)*S,at=2.2+mt()*.9;t(new Y(.03,.036,at,8),Jt,W,at/2,st);for(let tt=.4;tt<at-.1;tt+=.38)t(new Y(.04,.04,.025,8),jt,W,tt,st,i,o);for(let tt=0;tt<3;tt++){let Pt=mt()*Math.PI*2,bt=t(new ke(.2+mt()*.1,0),ut[tt%2],W+Math.sin(Pt)*.18,at-.2-tt*.32,st+Math.cos(Pt)*.18,i,o);bt.scale.set(1.4,.35,.8),bt.rotation.y=Pt}}n(q-.5,$-.5,q+.5,$+.5)});let C=new Dt;C.position.set(4.55,0,3.45),C.rotation.y=.6,i.add(C);for(let q of[-.62,.62])t(e(.07,1.45,.07,.015),c,q,.725,0,C);t(e(1.42,.08,.1,.02),c,0,1.47,0,C,o);let St=new O(new ne(1.2,.375),new Zt({map:$y(),roughness:.6}));St.position.set(0,1.13,.04),C.add(St),t(e(1.26,.42,.05,.015),c,0,1.13,0,C,o),n(4.55-.7,3.45-.45,4.55+.7,3.45+.45)}var vc={x:11.8,rows:[-8.1,-7,-5.9,-4.8,-3.7],cols:[-1.4,-.7,0,.7,1.4]},mr={x:8.75,z:ft.minZ+.55},Ec={x:7,y:2.33,w:1.44,h:1.56};function Ky({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=vc.x,l=ft.minZ,c=D("#8c1d18",.35),f=D("#5c120f",.4),h=D("#d9a63e",.3,{metalness:.6}),d=D("#4a2a17",.55),p=new O(new ne(2.3,2.6),new Zt({map:jy(),roughness:.7,emissive:"#3a0a06",emissiveIntensity:.25}));p.position.set(a,2.2,l+.1),i.add(p),t(e(2.42,2.72,.05,.02),d,a,2.2,l+.07,i,o);let g=l+.45;t(e(1.95,.08,.62,.02),c,a,1,g),t(e(1.95,.16,.03,.01),f,a,.88,g+.3,i,o),t(e(1.75,.025,.012),h,a,.88,g+.32,i,o);for(let[U,y]of[[-.9,-.26],[.9,-.26],[-.9,.26],[.9,.26]])t(e(.08,.96,.08,.015),f,a+U,.48,g+y);t(e(2.15,.42,.42,.03),c,a,.21,g+.55),t(e(2,.025,.012),h,a,.33,g+.767,i,o),n(a-1.15,l,a+1.15,g+.85);let v=g-.2;Mc("thantai",a-.3,1.04,v,1.4,i,t,r),Mc("ongdia",a+.3,1.04,v,1.4,i,t,r),Mc("meo",a,.42,g+.56,1.5,i,t,r);let m=D("#9a7432",.35,{metalness:.7}),u=g+.18;t(new Y(.11,.09,.11,16),m,a,1.095,u);for(let U of[-.035,0,.035])t(new Y(.004,.004,.24,4),D("#7a3b22",.8),a+U,1.27,u,i,o);for(let U of[-.035,0,.035])t(new At(.011,6,4),De("#ff6a2a",3),a+U,1.39,u,i,o);let x=[];for(let U=0;U<6;U++){let y=new O(new At(.035,8,6),new se({color:"#f4f1ea",transparent:!0,opacity:0,depthWrite:!1}));y.renderOrder=3,i.add(y),x.push(y)}r.animated.push(U=>{x.forEach((y,E)=>{let N=(U*.2+E/x.length)%1;y.position.set(a+Math.sin(U*.8+E*1.9)*.08*N,1.42+N*1.1,u+Math.cos(U*.6+E)*.05*N),y.scale.setScalar(1+N*3),y.material.opacity=.3*Math.sin(Math.PI*Math.min(1,N*1.25))})});for(let U of[-1,1]){t(new Y(.05,.07,.05,12),h,a+U*.82,1.065,g+.05,i,o),t(new Y(.035,.035,.26,12),D("#c8231b",.5),a+U*.82,1.22,g+.05,i,o),t(new At(.03,8,6),De("#ffcf6a",3),a+U*.82,1.38,g+.05,i,o).scale.set(1,1.5,1),t(new Y(.06,.08,.22,14),D("#f3efe6",.25),a+U*.72,1.15,g-.17,i,o);for(let y=0;y<5;y++){let E=y*1.256;t(new At(.07,10,8),D("#ffcc2e",.75),a+U*.72+Math.sin(E)*.07,1.36+y%2*.04,g-.17+Math.cos(E)*.07,i,o)}}let _=a-.5,M=g+.18;t(new Y(.16,.13,.03,20),h,_,1.055,M,i,o),t(new At(.1,14,10),D("#b9d65a",.7),_,1.15,M-.04,i,o);for(let[U,y,E]of[[-.1,.07,"#ff8a1e"],[.1,.07,"#d8261c"],[0,.11,"#ff8a1e"],[-.12,-.05,"#d8261c"]])t(new At(.05,10,8),D(E,.55),_+U,1.11,M+y,i,o);for(let U=0;U<4;U++)t(new Oe(.022,.15,4,8),D("#f5d23c",.6),_+.05+U*.03,1.22,M-.02,i,o).rotation.set(.2,0,.9-U*.15);for(let U=0;U<3;U++)t(e(.11,.04,.055,.012),h,a+.42+U*.1,1.06+(U===1?.04:0),g+.2,i,o);for(let U=0;U<4;U++)t(new Y(.05,.05,.016,16),h,a+.62,1.05+U*.018,g+.05,i,o);for(let U of[-1,1])for(let y=0;y<2;y++)t(e(.12,.045,.06,.012),h,a+U*(.42+y*.14),.445,g+.58,i,o);let T=new Zt({color:"#e2261b",roughness:.5,emissive:"#ff3a1a",emissiveIntensity:.6});for(let U of[-1,1]){let y=a+U*1.45,E=2.85;t(new Y(.006,.006,ft.wallH-E-.25,4),D("#5d5048",.8),y,(ft.wallH+E+.25)/2,l+.55,i,o);let N=new O(new At(.22,18,12),T);N.scale.set(1,.85,1),N.position.set(y,E,l+.55),i.add(N),t(new Y(.09,.09,.05,14),h,y,E+.2,l+.55,i,o),t(new Y(.09,.09,.05,14),h,y,E-.2,l+.55,i,o),t(new Y(.012,.012,.22,6),D("#f5c518",.6),y,E-.34,l+.55,i,o);let H=a+U*1.55,P=l+.6;t(new Y(.24,.18,.4,16),D("#2f6fb5",.4),H,.2,P),t(new Y(.245,.245,.04,16),D("#f3efe6",.4),H,.39,P,i,o);let G=sn(77+U);for(let z=0;z<6;z++)t(new ke(.2,1),D(z%2?"#3f8a3f":"#4f9d4a",.85,{flatShading:!0}),H+(G()-.5)*.3,.62+z*.1,P+(G()-.5)*.3,i,o).scale.setScalar(1-z*.1);for(let z=0;z<14;z++){let it=G()*Math.PI*2,X=.55+G()*.55,Z=.2+(1-(X-.55)/.55)*.08;t(new At(.03,8,6),D("#ff9a1a",.5),H+Math.sin(it)*Z,X,P+Math.cos(it)*Z,i,o)}n(H-.3,P-.3,H+.3,P+.3)}r.animated.push(U=>{T.emissiveIntensity=.55+Math.sin(U*1.3)*.12}),mn(i,a,l+1.6,2.4,"#ffcf8a",.28);let w=[D("#d9a63e",.85),D("#b3241b",.9)],b=new Y(.2,.22,.09,20),I=0;vc.rows.forEach((U,y)=>vc.cols.forEach(E=>{t(b,w[y%2],a+E,.045,U+.12,i,o),s(`k${++I}`,a+E,U,Math.PI,.09,{x:a+E,z:U+.6},"kneel","thantai")}))}function jy(){return ze(900,1e3,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#b3140f"),n.addColorStop(1,"#7a0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,215,110,.12)",i.lineWidth=5;for(let o=120;o<e;o+=120)for(let a=o/120%2*90;a<t;a+=180)i.beginPath(),i.arc(a,o,26,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(a,o,9,0,Math.PI*2),i.stroke();i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(12,12,t-24,e-24),i.lineWidth=3,i.strokeRect(32,32,t-64,e-64),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`;i.fillStyle="#3d1d0f",i.fillRect(90,60,t-180,170),i.strokeStyle="#f2c14e",i.lineWidth=7,i.strokeRect(102,72,t-204,146),i.fillStyle="#ffd56a",i.font=s(900,92),i.fillText("TH\u1EA6N T\xC0I".normalize("NFC"),t/2,148),i.fillStyle="#ffe9b0",i.font=s(800,40),i.fillText("C\u1EA7u nhi\u1EC1u \u0111\u01A1n \xB7 B\xE1n \u0111\u1EAFt nh\u01B0 t\xF4m t\u01B0\u01A1i".normalize("NFC"),t/2,290),i.save(),i.translate(t/2,520),i.rotate(Math.PI/4),i.fillStyle="#e8262b",i.fillRect(-120,-120,240,240),i.strokeStyle="#ffd56a",i.lineWidth=8,i.strokeRect(-108,-108,216,216),i.restore(),i.fillStyle="#ffd56a",i.font=s(900,74),i.fillText("L\u1ED8C".normalize("NFC"),t/2,525),i.strokeStyle="#7dff9a",i.lineWidth=12,i.lineJoin="round",i.beginPath(),[[250,900],[340,860],[410,880],[500,800],[580,820],[660,720]].forEach(([o,a],l)=>l?i.lineTo(o,a):i.moveTo(o,a)),i.stroke(),i.fillStyle="#7dff9a",i.beginPath(),i.moveTo(700,690),i.lineTo(640,700),i.lineTo(675,745),i.closePath(),i.fill();let r=(o,a)=>{i.fillStyle="#e8262b",i.fillRect(o-58,330,116,620),i.strokeStyle="#ffd56a",i.lineWidth=5,i.strokeRect(o-51,337,102,606),i.fillStyle="#ffd56a",i.font=s(800,38),a.forEach((l,c)=>i.fillText(l.normalize("NFC"),o,390+c*(540/a.length)))};r(100,["Kh\xE1ch","v\xE0o","nh\u01B0","n\u01B0\u1EDBc"]),r(t-100,["Ch\u1ED1t","\u0111\u01A1n","\u1EA7m","\u1EA7m"])})}function Mc(i,t,e,n,s,r,o,a){let l={cast:!1},c=new Dt;c.position.set(t,e,n),c.scale.setScalar(s),r.add(c);let f=D("#f3c79a",.6),h=D("#e0ae3c",.28,{metalness:.65}),d=D("#d92a1c",.5);if(i==="thantai"){o(new Y(.13,.17,.32,16),D("#e9b425",.35,{metalness:.3}),0,.16,0,c),o(new At(.1,14,10),f,0,.42,0,c),o(new Y(.08,.1,.09,14),D("#1d1d22",.5),0,.53,0,c,l);for(let p of[-1,1])o(new Mt(.08,.025,.03),D("#1d1d22",.5),p*.11,.53,0,c,l);o(new Oe(.025,.08,4,8),D("#1d1d22",.6),0,.34,.09,c,l).rotation.x=.3,o(new dr(.13,.05,.06,2,.015),h,0,.2,.15,c,l)}else if(i==="ongdia")o(new At(.17,16,12),D("#f08a2a",.5),0,.17,0,c).scale.set(1,.95,.9),o(new At(.1,12,8),f,0,.15,.1,c,l).scale.set(1,1,.6),o(new At(.11,14,10),f,0,.42,0,c),o(new Ee(.045,.012,6,12,Math.PI),D("#8a2a1a",.6),0,.4,.1,c,l).rotation.z=Math.PI,o(new Bn(.11,14,0,Math.PI),D("#f6e7c4",.6,{side:ge}),.17,.28,.05,c,l).rotation.set(0,-.4,.5);else{let p=D("#fbf8f2",.45);o(new At(.085,14,10),p,0,.085,0,c).scale.set(1,1.1,.9),o(new At(.075,14,10),p,0,.22,0,c);for(let m of[-1,1])o(new He(.025,.05,6),p,m*.045,.29,0,c,l);o(new Ee(.06,.01,6,16),d,0,.165,0,c,l).rotation.x=Math.PI/2,o(new Y(.03,.03,.01,12),h,0,.13,.075,c,l).rotation.x=Math.PI/2;for(let m of[-1,1])o(new At(.009,6,4),D("#1d1d22",.4),m*.028,.23,.068,c,l);let g=new Dt;g.position.set(.07,.2,0),c.add(g);let v=new O(new Oe(.022,.07,4,8),p);v.position.y=.05,g.add(v),a.animated.push(m=>{g.rotation.z=-.25+Math.sin(m*5)*.45})}return c}function Qy(){return ze(960,640,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7a1712"),n.addColorStop(1,"#4e0c09"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="#f2c14e",i.lineWidth=16,i.strokeRect(12,12,t-24,e-24),i.lineWidth=4,i.strokeRect(36,36,t-72,e-72),i.textAlign="center",i.textBaseline="middle";let s=(o,a)=>`${o} ${a}px "Segoe UI", "Noto Sans", Arial, sans-serif`,r=(o,a,l,c,f)=>{for(o=o.normalize("NFC"),i.font=s(a,l);l>24&&i.measureText(o).width>t-120;)l-=2,i.font=s(a,l);i.fillStyle=f,i.fillText(o,t/2,c)};i.shadowColor="rgba(255,190,60,.7)",i.shadowBlur=18,r("\u{1F38B} XIN QU\u1EBA",900,150,170,"#ffd56a"),i.shadowBlur=0,r("\u0110\u1EA6U NG\xC0Y",900,96,300,"#ffe9b0"),r("M\u1ED7i ng\xE0y 1 qu\u1EBB may m\u1EAFn \u2728",800,54,420,"#fff3cf"),r("\u{1F449} B\u1EA5m v\xE0o \u1ED1ng qu\u1EBB",900,58,530,"#f5c518")})}function tx({scene:i,add:t,box:e,block:n,out:s}){let r={cast:!1},o=mr.x,a=mr.z,l=ft.minZ,c=D("#a8191b",.4),f=D("#e0ae3c",.28,{metalness:.65}),h=D("#5b341c",.6);t(e(1.3,.06,.6,.02),c,o,.8,a),t(e(1.36,.03,.66,.01),f,o,.765,a,i,r);for(let[_,M]of[[-.58,-.24],[.58,-.24],[-.58,.24],[.58,.24]])t(e(.06,.77,.06,.015),h,o+_,.385,a+M);t(e(1.22,.32,.02,.01),D("#c8231b",.7),o,.6,a+.3,i,r),t(e(1.1,.03,.012),f,o,.46,a+.312,i,r);let d=new Dt;d.position.set(o-.15,.83,a-.02),i.add(d);let p=D("#c99a4a",.55);t(new Y(.13,.12,.42,20,1,!0),D("#c99a4a",.55,{side:ge}),0,.21,0,d),t(new Y(.12,.12,.02,20),p,0,.01,0,d,r);for(let _ of[.08,.36])t(new Ee(.128,.012,6,24),D("#8a6a2e",.5),0,_,0,d,r).rotation.x=Math.PI/2;t(new Y(.131,.131,.06,20,1,!0),D("#b3241b",.6,{side:ge}),0,.22,0,d,r);let g=sn(91);for(let _=0;_<22;_++){let M=g()*Math.PI*2,T=g()*.08,w=.5+g()*.12,b=new Dt;b.position.set(Math.cos(M)*T,.02,Math.sin(M)*T),b.rotation.set((g()-.5)*.25,M,(g()-.5)*.25),d.add(b),t(new Mt(.014,w,.006),D("#e6c27a",.6),0,w/2,0,b,r),t(new Mt(.016,.05,.008),D("#d22a1f",.5),0,w-.02,0,b,r)}t(new Y(.16,.13,.025,20),f,o+.3,.845,a+.06,i,r),t(new Mt(.014,.5,.006),D("#e6c27a",.6),o+.3,.87,a+.06,i,r).rotation.set(Math.PI/2,0,.6),t(new Y(.05,.04,.06,14),D("#9a7432",.35,{metalness:.7}),o+.5,.86,a-.18,i,r);for(let _ of[-.012,.012])t(new At(.007,6,4),De("#ff6a2a",3),o+.5+_,.98,a-.18,i,r);let m=new O(new ne(1.8,1.2),new Zt({map:Qy(),roughness:.75,emissive:"#2a0604",emissiveIntensity:.25}));m.position.set(o,2.12,l+.1),i.add(m),t(e(1.9,1.3,.05,.02),h,o,2.12,l+.07,i,r);let u=new O(new He(.05,.22,10),De("#e2261b",.6));u.position.set(o-.92,1.38,l+.12),i.add(u),s.animated.push(_=>{u.rotation.z=Math.sin(_*2.2)*.18}),mn(i,o,a+.7,1.1,"#ffd9a0",.26),n(o-.7,l,o+.7,a+.35);let x=new O(new Mt(1.4,1.5,.9),new se({visible:!1}));x.position.set(o,.75,a),x.userData.action="fortune",i.add(x),s.clickables.push(x)}function ex(i,t,e,n){let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"#1259c8"),s.addColorStop(1,"#0a3483"),i.fillStyle=s,i.fillRect(0,0,t,e),i.strokeStyle="#f2c14e",i.lineWidth=14,i.strokeRect(10,10,t-20,e-20),i.strokeStyle="rgba(255,255,255,.35)",i.lineWidth=3,i.strokeRect(30,30,t-60,e-60),i.textAlign="center",i.textBaseline="middle";let r=(h,d)=>`${h} ${d}px "Segoe UI", "Noto Sans", Arial, sans-serif`,o=(h,d,p,g,v,m,u=t-110,x="center")=>{for(h=String(h||"").normalize("NFC"),i.textAlign=x,i.font=r(d,p);p>18&&i.measureText(h).width>u;)p-=2,i.font=r(d,p);i.fillStyle=m,i.fillText(h,g,v),i.textAlign="center"};i.shadowColor="rgba(0,0,0,.35)",i.shadowBlur=10,o("\u{1F4EE} H\xD2M TH\u01AF G\xD3P \xDD",900,76,t/2,104,"#ffd56a"),i.shadowBlur=0,o("C\xF9ng x\xE2y s\u1EA3n ph\u1EA9m SIMI t\u1ED1t h\u01A1n",700,34,t/2,168,"#e3eeff");let a=n&&n.summary||null,l=[["mobile","\u{1F4F1}","App mobile"],["zalo","\u{1F4AC}","Mini app Zalo"],["web","\u{1F310}","Website"],["other","\u2728","Kh\xE1c"]],c=216,f=134;l.forEach(([h,d,p],g)=>{let v=c+g*f;i.fillStyle="rgba(255,255,255,.12)",i.beginPath(),i.roundRect?i.roundRect(56,v,t-112,f-16,18):i.rect(56,v,t-112,f-16),i.fill(),o(d,400,56,112,v+(f-16)/2+2,"#fff",80),o(p,900,46,168,v+40,"#ffffff",t-260,"left");let m=a&&a[h];o(m?`${m.open} \u0111ang x\u1EED l\xFD \xB7 ${m.done} \u0111\xE3 c\u1EADp nh\u1EADt`:"G\u1EEDi \xFD t\u01B0\u1EDFng, b\xE1o l\u1ED7i\u2026",700,30,168,v+86,"#ffd56a",t-260,"left")}),i.fillStyle="#f2c14e",i.beginPath(),i.roundRect?i.roundRect(110,e-112,t-220,70,35):i.rect(110,e-112,t-220,70),i.fill(),o("\u{1F449} B\u1EA5m \u0111\u1EC3 g\u1EEDi g\xF3p \xFD",900,40,t/2,e-76,"#0a3483",t-260)}function nx({scene:i,add:t,box:e,block:n,out:s}){let r={cast:!1},{x:o,y:a,w:l,h:c}=Ec,f=ft.minZ,h=document.createElement("canvas");h.width=768,h.height=832;let d=new Xe(h);d.colorSpace=me,d.anisotropy=8;let p=U=>{try{ex(h.getContext("2d"),h.width,h.height,U),d.needsUpdate=!0}catch{}};p(null);let g=new O(new ne(l,c),new Zt({map:d,roughness:.55,emissive:"#0a2a6a",emissiveIntensity:.25}));g.position.set(o,a,f+.1),i.add(g),t(e(l+.1,c+.1,.05,.02),D("#d9a63e",.3,{metalness:.6}),o,a,f+.07,i,r),s.ideasBoard={draw:p,mesh:g};let v=f+.5,m=D("#d4231c",.45,{metalness:.15}),u=D("#3a1210",.6);t(e(.09,.78,.09,.02),D("#2d3440",.5,{metalness:.5}),o,.39,v),t(new Y(.2,.22,.04,20),D("#2d3440",.5,{metalness:.5}),o,.02,v,i,r),t(e(.56,.42,.4,.04),m,o,.99,v);let x=t(new Y(.2,.2,.56,24,1,!1,0,Math.PI),m,o,1.2,v);x.rotation.z=Math.PI/2,t(e(.34,.035,.02,.008),u,o,1.1,v+.205,i,r);let _=t(e(.22,.12,.006),D("#fffdf5",.8),o+.02,1.15,v+.215,i,r);_.rotation.z=-.12,t(e(.08,.05,.008),D("#e8493f",.6),o+.03,1.16,v+.219,i,r);let M=document.createElement("canvas");M.width=256,M.height=96;let T=M.getContext("2d");T.fillStyle="#ffd56a",T.fillRect(0,0,256,96),T.fillStyle="#7a1410",T.font='900 50px "Segoe UI", Arial, sans-serif',T.textAlign="center",T.textBaseline="middle",T.fillText("G\xD3P \xDD",128,52);let w=new Xe(M);w.colorSpace=me;let b=new O(new ne(.3,.11),new Zt({map:w,roughness:.6}));b.position.set(o,.93,v+.202),i.add(b);let I=new Dt;I.position.set(o+.29,1.02,v),i.add(I);for(let[U,y,E,N]of[[new Mt(.02,.3,.02),D("#9aa3b0",.4,{metalness:.6}),.15,0],[new Mt(.012,.1,.14),D("#f5c518",.5),.26,.07]]){let H=new O(U,y);H.position.set(0,E,N),H.castShadow=!0,I.add(H)}I.rotation.z=-Math.PI/2+.15,s.ideasFlag=I,n(o-.32,v-.25,o+.32,v+.25);for(let[U,y,E,N]of[[l+.1,c+.1,a,f+.15],[.7,1.45,.72,v]]){let H=new O(new Mt(U,y,.5),new se({visible:!1}));H.position.set(o,E,N),H.userData.action="ideas",i.add(H),s.clickables.push(H)}}function ix(){return ze(512,512,(i,t,e)=>{i.fillStyle="#2c3a6e",i.fillRect(0,0,t,e);let n=sn(77);i.strokeStyle="rgba(150,175,245,.22)",i.lineWidth=3;for(let r=-64;r<e+64;r+=64)for(let o=-64;o<t+64;o+=64)i.beginPath(),i.moveTo(o,r+32),i.lineTo(o+32,r),i.lineTo(o+64,r+32),i.lineTo(o+32,r+64),i.closePath(),i.stroke();let s=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4"];for(let r=0;r<70;r++)i.fillStyle=s[r%4],i.globalAlpha=.35,i.beginPath(),i.arc(n()*t,n()*e,2+n()*2.5,0,7),i.fill();i.globalAlpha=1})}function zf(i){return ze(256,200,(t,e,n)=>{let s=sn(i),r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,["#140a3a","#05263a","#2a0a26"][i%3]),r.addColorStop(1,"#000"),t.fillStyle=r,t.fillRect(0,0,e,n);for(let a=0;a<40;a++)t.fillStyle="rgba(255,255,255,.6)",t.fillRect(s()*e,s()*n*.7,2,2);let o=["#ff4fa3","#45d2b4","#ffd34d","#4aa8ff"];for(let a=0;a<9;a++){t.fillStyle=o[(a+i)%4];let l=30+a%3*70+s()*10,c=30+Math.floor(a/3)*34;t.fillRect(l,c,22,14),t.fillRect(l-6,c+6,34,6)}t.fillStyle="#ffffff",t.fillRect(e/2-14,n-40,28,12),t.fillRect(e/2-4,n-50,8,10),t.fillStyle="#ffd34d",t.font="bold 18px monospace",t.fillText("SCORE 0"+(12e3+i*3170),12,n-10)})}function sx(i,t,e){return ze(1024,256,(n,s,r)=>{n.clearRect(0,0,s,r),n.textAlign="center",n.textBaseline="middle",n.font='900 120px "Nunito", "Segoe UI", sans-serif';for(let[o,a]of[[40,t],[16,t],[0,"#ffffff"]])n.shadowColor=t,n.shadowBlur=o,n.fillStyle=a,n.fillText(i,s/2,e?r/2-22:r/2);e&&(n.font='800 46px "Nunito", "Segoe UI", sans-serif',n.shadowBlur=12,n.fillStyle="#ffffff",n.fillText(e,s/2,r/2+72))})}function rx(){return ze(256,256,(i,t)=>{let e=t/2;i.fillStyle="#1a1a1a",i.beginPath(),i.arc(e,e,e,0,7),i.fill();for(let n=0;n<20;n++){let s=n/20*Math.PI*2-Math.PI/20,r=s+Math.PI/10;for(let[o,a,l,c]of[[30,100,"#f3e6c8","#151515"],[100,112,"#1d8a4a","#d8262e"],[12,30,"#f3e6c8","#151515"],[70,80,"#1d8a4a","#d8262e"]])i.fillStyle=n%2?l:c,i.beginPath(),i.arc(e,e,a,s,r),i.arc(e,e,o,r,s,!0),i.closePath(),i.fill()}i.fillStyle="#1d8a4a",i.beginPath(),i.arc(e,e,12,0,7),i.fill(),i.fillStyle="#d8262e",i.beginPath(),i.arc(e,e,6,0,7),i.fill()})}var ox=["#fbfaf5","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b","#141414","#f5c518","#1f5fd1","#d8262e","#5b2c8f","#f07a1a","#1d8a4a","#8a1f2b"];function ax({scene:i,add:t,box:e,block:n,seat:s,out:r}){let o={cast:!1},a=14.6,l=ft.maxX,c=ft.minZ,f=9.6,h=ix();h.wrapS=h.wrapT=Pn,h.repeat.set((l-a)/3,(f-c)/3);let d=new O(new ne(l-a,f-c),new Zt({map:h,roughness:.95}));d.rotation.x=-Math.PI/2,d.position.set((a+l)/2,.006,(c+f)/2),d.receiveShadow=!0,i.add(d),t(e(.06,.02,f-c),De("#7c5cff",1.4),a+.03,.012,(c+f)/2,i,o),t(e(l-a,.02,.06),De("#7c5cff",1.4),(a+l)/2,.012,f-.03,i,o),t(e(l-a-.3,ft.wallH-.02,.07),D("#231a4a",.9),(a+l)/2,ft.wallH/2,ft.minZ+.02,i,o);let p=new O(new ne(4.4,1.1),new se({map:sx("GAME ZONE","#b26bff"),transparent:!0,toneMapped:!1,depthWrite:!1}));p.position.set(20.8,2.95,ft.minZ+.07),i.add(p),[15.5,16.65,17.8].forEach((P,G)=>{let z=new Dt;z.position.set(P,0,ft.minZ+.5),i.add(z);let it=D(["#ff4fa3","#2f8cf0","#45d2b4"][G],.5);t(e(.82,1.2,.72,.04),D("#20203a",.5),0,.6,0,z),t(e(.86,.06,.74,.02),it,0,1.22,0,z,o),t(e(.82,.62,.42,.04),D("#20203a",.5),0,1.55,-.14,z),t(e(.86,.2,.5,.03),it,0,1.96,-.1,z,o),t(e(.7,.12,.02),De(["#ff9ccf","#9fd0ff","#b6f5d8"][G],1.6),0,1.96,.16,z,o),t(e(.76,.06,.3,.02),D("#2b2b40",.5),0,1.04,.3,z,o),t(new At(.035,10,8),D("#ff5a5f",.3),-.18,1.1,.32,z,o),t(new Y(.03,.03,.04,10),D("#ffd34d",.3),.1,1.08,.3,z,o),t(new Y(.03,.03,.04,10),D("#4aa8ff",.3),.2,1.08,.3,z,o);let X=new O(new ne(.66,.5),new se({map:zf(G+3),toneMapped:!1}));X.position.set(0,1.56,.075),X.rotation.x=-.18,z.add(X),mn(i,P,ft.minZ+1.3,.8,["#ff6fb5","#4aa8ff","#45d2b4"][G],.28)}),n(15,ft.minZ,18.3,ft.minZ+1),t(e(1.3,1.3,.06,.02),D("#8a5a3b",.5),20.8,1.55,ft.minZ+.08,i,o);for(let P=0;P<6;P++)t(new Y(.012,.018,1.2,8),D(P%2?"#c99a5b":"#9b6b3e",.45),20.3+P*.2,1.55,ft.minZ+.14,i,o);let g=new O(new Bn(.34,40),new Zt({map:rx(),roughness:.8}));g.position.set(24.6,1.75,ft.minZ+.1),i.add(g),t(new Y(.42,.42,.05,40),D("#2b1a0e",.6),24.6,1.75,ft.minZ+.07,i,o).rotation.x=Math.PI/2,t(e(1,.012,.05),De("#ffd34d",1.2),24.6,.012,ft.minZ+2.4,i,o);let v=D("#169a63",.95),m=D("#6b3f22",.45),u=D("#0f6b45",.85),x=D("#0b0b0b",.9),_=D("#c9b06b",.35,{metalness:.5}),M=new At(.032,14,10);r.poolTables=Fy.map((P,G)=>{let{w:z,l:it}=Cs;t(e(z+.36,.16,it+.36,.06),m,P.x,.74,P.z),t(e(z+.08,.05,it+.08,.02),u,P.x,.83,P.z,i,o),t(e(z,.02,it),v,P.x,.85,P.z,i,o),t(e(z+.1,.42,it-.2,.05),m,P.x,.45,P.z);for(let[lt,Ct]of[[-1,-1],[1,-1],[-1,1],[1,1]])t(e(.16,.66,.16,.04),m,P.x+lt*(z/2+.06),.33,P.z+Ct*(it/2+.06));for(let[lt,Ct]of[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]])t(new Y(.06,.06,.03,16),x,P.x+lt*(z/2+.01),.855,P.z+Ct*(it/2+.01),i,o),t(new Y(.075,.075,.02,16),_,P.x+lt*(z/2+.03),.825,P.z+Ct*(it/2+.03),i,o);t(e(.42,.12,1.9,.04),D("#1d2b4f",.5),P.x,2.45,P.z,i,o),t(e(.34,.02,1.8),De("#fff1d6",1.5),P.x,2.38,P.z,i,o);for(let lt of[-.6,.6])t(new Y(.008,.008,.9,6),D("#7c818d"),P.x,2.95,P.z+lt,i,o);mn(i,P.x,P.z,1.7,"#fff1d6",.32),n(P.x-z/2-.2,P.z-it/2-.2,P.x+z/2+.2,P.z+it/2+.2);let X=new dn(M,new Zt({roughness:.2}),16);X.castShadow=!1,X.receiveShadow=!1,ox.forEach((lt,Ct)=>X.setColorAt(Ct,new Yt(lt))),i.add(X);let Z=new O(new Mt(z+.4,1,it+.4),new se({visible:!1}));Z.position.set(P.x,.5,P.z),Z.userData.poolTable=G,i.add(Z);let ot=new O(new ne(.34,.1),new se({map:ze(256,76,(lt,Ct,Ut)=>{lt.fillStyle="#f3e3c3",lt.fillRect(0,0,Ct,Ut),lt.fillStyle="#3a2412",lt.font="900 46px Nunito, sans-serif",lt.textAlign="center",lt.textBaseline="middle",lt.fillText(`B\xC0N ${G+1}`,Ct/2,Ut/2+2)})}));return ot.position.set(P.x,.74,P.z+it/2+.185),i.add(ot),{...P,index:G,balls:X,hit:Z,spots:[{x:P.x,z:P.z-it/2-.55,face:0},{x:P.x,z:P.z+it/2+.55,face:Math.PI}]}});let T=17.2,w=3.4;t(e(1.3,.22,.8,.05),D("#2f8cf0",.5),T,.82,w),t(e(1.12,.02,.64),D("#169a63",.9),T,.93,w,i,o),t(e(1,.7,.6,.05),D("#1d2b4f",.5),T,.36,w);for(let P=0;P<6;P++){let G=T-.48+P*.19;t(new Y(.012,.012,1.15,6),D("#c2cad6",.25,{metalness:.7}),G,.98,w,i,o).rotation.x=Math.PI/2;for(let z of[-1,1])t(new Y(.035,.035,.07,10),D(P%2?"#ff5a5f":"#ffd34d",.4),G,.98,w+z*.66,i,o).rotation.x=Math.PI/2;for(let z=0;z<2;z++)t(e(.03,.08,.03),D(P%2?"#ff5a5f":"#ffd34d",.4),G,.95,w-.15+z*.3,i,o)}n(T-.7,w-.75,T+.7,w+.75),t(e(2.2,.45,.5,.05),D("#2b2b40",.5),22.4,.225,1),t(e(2.4,1.36,.08,.03),D("#16161c",.35),22.4,1.25,1.05);let b=new O(new ne(2.26,1.22),new se({map:zf(9),toneMapped:!1}));b.position.set(22.4,1.25,1.095),i.add(b),n(21.2,.6,23.6,1.4);let I=D("#7c5cff",.85),U=D("#ffd34d",.8),y=new Dt;y.position.set(22.4,0,4),y.rotation.y=Math.PI,i.add(y),t(e(2.5,.32,.9,.08),I,0,.27,0,y),t(e(2.3,.14,.78,.07),I,0,.47,.04,y),t(e(2.5,.7,.24,.1),I,0,.62,-.34,y);for(let P of[-1,1])t(e(.22,.52,.9,.09),I,P*1.24,.42,0,y);for(let P of[-.7,.7])t(e(.34,.32,.12,.06),U,P,.68,-.2,y).rotation.x=-.2;for(let P=-1;P<=1;P++)s(`gs${P+2}`,22.4-P*.75,4.05,Math.PI,.47,{x:22.4-P*.75,z:3.2});n(21.1,3.5,23.7,4.5),t(new Y(.42,.42,.04,28),D("#fbf7f0",.4),22.4,.42,2.55),t(new Y(.06,.09,.4,10),D("#3a3a44",.4),22.4,.2,2.55),t(e(.18,.04,.1,.02),D("#1a1a1a",.4),22.3,.46,2.5,i,o),t(e(.18,.04,.1,.02),D("#f5f5f5",.4),22.55,.46,2.62,i,o),n(21.95,2.1,22.85,3);let E=[D("#ff9a6b",.95),D("#45d2b4",.95)];[[20.3,2.6,Math.PI*.82],[24.5,2.6,-Math.PI*.82]].forEach(([P,G,z],it)=>{t(new At(.44,18,12),E[it],P,.26,G).scale.set(1,.6,1);let Z=t(new At(.3,14,10),E[it],P-Math.sin(z)*.26,.48,G-Math.cos(z)*.26);Z.scale.set(1.1,.9,.7),Z.rotation.y=z,s(`gb${it+1}`,P,G,z,.36,{x:P+Math.sin(z)*.8,z:G+Math.cos(z)*.8})});let N=17.6,H=7.2;t(e(2.3,.05,1.28,.02),D("#1f5fd1",.6),N,.76,H),t(e(2.3,.006,.02),D("#ffffff",.6),N,.788,H,i,o),t(e(.02,.006,1.26),D("#ffffff",.6),N-1.14,.788,H,i,o),t(e(.02,.006,1.26),D("#ffffff",.6),N+1.14,.788,H,i,o),t(e(.02,.16,1.4),D("#f6f3ee",.8),N,.86,H,i,o);for(let[P,G]of[[-.95,-.5],[.95,-.5],[-.95,.5],[.95,.5]])t(e(.06,.74,.06),D("#3a3a44",.4),N+P,.37,H+G,i,o);t(e(.16,.02,.15,.01),D("#d8262e",.6),N-.6,.8,H+.3,i,o),t(new At(.02,8,6),D("#ffffff",.4),N+.4,.82,H-.2,i,o),n(N-1.2,H-.7,N+1.2,H+.7),[[23.3,"#ff7aa8"],[24.5,"#4aa8ff"]].forEach(([P,G])=>{t(e(1,.85,.9,.05),D(G,.5),P,.425,8.5),t(e(.96,.95,.86),new Zt({color:"#dff1ff",roughness:.05,transparent:!0,opacity:.35}),P,1.33,8.5,i,o),t(e(1.02,.22,.92,.05),D(G,.5),P,1.91,8.5,i,o),t(e(.8,.1,.02),De("#fff1d6",1.4),P,1.91,8.97,i,o);let z=sn(Math.round(P*10));for(let it=0;it<9;it++)t(new At(.1,10,8),D(["#ffd34d","#ff9ccf","#9fd0ff","#b6f5d8","#c3a6ff"][it%5],.8),P-.3+it%3*.3+z()*.05,.95+Math.floor(it/3)*.05,8.3+z()*.3,i,o);t(e(.04,.3,.04),D("#c2cad6",.3,{metalness:.6}),P+.1,1.6,8.5,i,o),n(P-.55,8,P+.55,9)}),t(e(.95,1.95,.75,.05),D("#e1262d",.45),21.8,.975,8.6),t(e(.6,1.3,.02),De("#d9f1ff",.9),21.68,1.15,8.98,i,o);for(let P=0;P<4;P++)for(let G=0;G<4;G++)t(new Y(.035,.035,.13,10),D(["#ffd34d","#45d2b4","#ff9ccf","#4aa8ff"][G],.4),21.48+G*.13,.65+P*.3,8.95,i,o);t(e(.18,.5,.02),D("#2b2b33",.4),22.13,1.2,8.98,i,o),n(21.3,8.2,22.3,9);for(let P=.8;P<=6.2;P+=1.8){t(e(.5,.45,1.5,.06),D("#e3d5bf",.8),14.3,.225,P);for(let G=0;G<3;G++)t(new ke(.22,1),D(G%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),14.3+(G-1)*.04,.6,P-.45+G*.45);n(14,P-.8,14.6,P+.8)}}function lx(){let i=sn(55),t=ze(1024,512,(e,n,s)=>{for(let o=0;o<s;o+=48){let a=-Math.floor(i()*300);for(;a<n;){let l=300+Math.floor(i()*300),c=i();e.fillStyle=`rgb(${Math.round(196+c*16)},${Math.round(150+c*14)},${Math.round(104+c*12)})`,e.fillRect(a,o,l,48),e.strokeStyle="rgba(120,80,45,.12)",e.lineWidth=1.2;for(let f=0;f<3;f++){let h=o+8+i()*32;e.beginPath(),e.moveTo(a,h);for(let d=a;d<a+l;d+=40)e.lineTo(d,h+Math.sin(d*.02+f)*2);e.stroke()}e.fillStyle="rgba(90,60,30,.35)",e.fillRect(a,o,3,48),a+=l}e.fillStyle="rgba(90,60,30,.4)",e.fillRect(0,o,n,3)}});return t.wrapS=t.wrapT=Pn,t}function cx(){return ze(1024,192,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#0a5cc2"),n.addColorStop(1,"#0a78f0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",i.font='900 86px "Nunito", "Segoe UI", sans-serif',i.fillText("V\u0102N PH\xD2NG AI",t/2,e/2-12),i.font='800 36px "Nunito", "Segoe UI", sans-serif',i.fillStyle="#ffd34d",i.fillText("SIMI \xB7 BAR \xB7 GAME \xB7 CINEMA",t/2,e/2+56)})}function hx({scene:i,add:t,box:e,block:n,seat:s,out:r,glassM:o,tableTop:a}){let l={cast:!1},c=ft.inZ,f=ft.maxZ,h=ft.minX,d=ft.maxX,p=lx();p.repeat.set((d-h)/10,(f-c)/5);let g=new O(new ne(d-h,f-c),new Zt({map:p,roughness:.85}));g.rotation.x=-Math.PI/2,g.position.set((h+d)/2,.001,(c+f)/2),g.receiveShadow=!0,i.add(g),r.deck=g,t(e(d-h,.03,.24,.01),D("#d8d2c6",.8),(h+d)/2,.015,c,i,l);let v=D("#4f9d5d",.9),m=D("#5fb36f",.9,{flatShading:!0}),u=(Z,ot,lt,Ct)=>{let Ut=Math.abs(lt-Z)||.5,Q=Math.abs(Ct-ot)||.5;t(e(Ut,.7,Q,.18),v,(Z+lt)/2,.35,(ot+Ct)/2);let ht=Math.max(2,Math.round(Math.max(Ut,Q)/.7));for(let gt=0;gt<ht;gt++){let vt=(gt+.5)/ht;t(new ke(.3,1),m,Z+(lt-Z)*vt,.72,ot+(Ct-ot)*vt,i).scale.set(1,.6,1)}n(Math.min(Z,lt)-.25,Math.min(ot,Ct)-.25,Math.max(Z,lt)+.25,Math.max(ot,Ct)+.25)};u(h+.3,c+.6,h+.3,f-.35),u(d-.3,c+.6,d-.3,f-.35),u(h+.6,f-.35,10,f-.35),u(15,f-.35,d-.6,f-.35);let x=[D("#ff7aa8",.7),D("#ffd34d",.7),D("#ffffff",.7),D("#c3a6ff",.7)],_=sn(91);for(let[Z,ot]of[[h+1.2,9.4],[15.6,d-1.2]])for(let lt=Z;lt<ot;lt+=.55)t(new At(.07,8,6),x[Math.floor(_()*4)],lt+_()*.2,.12,f-.95+_()*.15,i,l);let M=12.5,T=f-.35;for(let Z of[-2.2,2.2])t(e(.32,3,.32,.05),D("#ffffff",.5),M+Z,1.5,T),t(e(.5,.18,.5,.04),D("#d8d2c6",.7),M+Z,.09,T),n(M+Z-.25,T-.25,M+Z+.25,T+.25);t(e(4.9,.7,.24,.06),D("#0a5cc2",.5),M,3.1,T);let w=new O(new ne(4.6,.62),new se({map:cx(),toneMapped:!1}));w.position.set(M,3.1,T+.125),i.add(w);let b=new O(new ne(2.6,1.3),new Zt({map:ze(512,256,(Z,ot,lt)=>{Z.fillStyle="#0a5cc2",Z.fillRect(0,0,ot,lt),Z.strokeStyle="#ffd34d",Z.lineWidth=10,Z.strokeRect(14,14,ot-28,lt-28),Z.fillStyle="#fff",Z.font="900 64px Nunito, sans-serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText("XIN CH\xC0O",ot/2,lt/2+4)}),roughness:.95}));b.rotation.x=-Math.PI/2,b.position.set(M,.006,T-1.1),i.add(b);let I=[D("#0a78f0",.7,{side:ge}),D("#ff7a6b",.7,{side:ge}),D("#2fc1a5",.7,{side:ge}),D("#ffd34d",.7,{side:ge})],U=D("#e9eef5",.4,{metalness:.3}),y=D("#f6f3ee",.5);[[-10.4,13.4],[-6,15.4],[-1.6,13.2],[3,15.3]].forEach(([Z,ot],lt)=>{t(new Y(.52,.52,.04,28),a,Z,.74,ot),t(new Y(.04,.05,.72,10),U,Z,.36,ot),t(new Y(.26,.3,.03,20),U,Z,.015,ot),t(new Y(.025,.025,2.4,8),y,Z,1.2,ot,i,l),t(new He(1.15,.45,8,1,!0),I[lt],Z,2.45,ot),t(new At(.05,8,6),y,Z,2.7,ot,i,l),t(new Y(.05,.04,.12,12),o,Z+.15,.82,ot,i,l),t(new Y(.05,.04,.12,12),o,Z-.12,.82,ot+.12,i,l),n(Z-.58,ot-.58,Z+.58,ot+.58);for(let Ct=0;Ct<3;Ct++){let Ut=Ct/3*Math.PI*2+.5,Q=Z+Math.sin(Ut)*.95,ht=ot+Math.cos(Ut)*.95,gt=new Dt;gt.position.set(Q,0,ht),gt.rotation.y=Ut+Math.PI,i.add(gt),t(new Y(.22,.22,.05,18),U,0,.46,0,gt),t(e(.4,.34,.04,.02),U,0,.7,-.2,gt);for(let[vt,Ht]of[[-.15,-.15],[.15,-.15],[-.15,.15],[.15,.15]])t(new Y(.014,.014,.46,6),U,vt,.23,Ht,gt,l);s(`o${lt+1}${"abc"[Ct]}`,Q,ht,Ut+Math.PI,.48,{x:Z+Math.sin(Ut)*1.55,z:ot+Math.cos(Ut)*1.55})}});let E=20.2,N=13.8;t(new Y(1.5,1.6,.45,40),D("#e7e1d6",.7),E,.225,N),t(new Y(1.32,1.32,.04,40),D("#cfc7b8",.7),E,.44,N,i,l);let H=new O(new Y(1.3,1.3,.02,40),new Zt({color:"#7cc4ff",roughness:.1,emissive:"#2f8cf0",emissiveIntensity:.35,transparent:!0,opacity:.85}));H.position.set(E,.43,N),i.add(H),t(new Y(.16,.22,.9,16),D("#e7e1d6",.7),E,.9,N),t(new Y(.55,.2,.18,24),D("#e7e1d6",.7),E,1.4,N);let P=new O(new Y(.03,.08,.6,10),new se({color:"#d6efff",transparent:!0,opacity:.7}));P.position.set(E,1.75,N),i.add(P);let G=[0,1].map(()=>{let Z=new O(new Fn(.3,.36,40),new se({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));return Z.rotation.x=-Math.PI/2,Z.position.set(E,.47,N),i.add(Z),Z});r.animated.push(Z=>{G.forEach((ot,lt)=>{let Ct=(Z*.35+lt*.5)%1;ot.scale.setScalar(1+Ct*2.6),ot.material.opacity=.45*(1-Ct)}),P.scale.y=1+Math.sin(Z*6)*.06}),n(E-1.65,N-1.65,E+1.65,N+1.65);let z=D("#d8d2c6",.8);[[E-3,N,Math.PI/2],[E+3,N,-Math.PI/2],[E,N-3,0]].forEach(([Z,ot,lt],Ct)=>{let Ut=new Dt;Ut.position.set(Z,0,ot),Ut.rotation.y=lt,i.add(Ut),t(e(1.7,.1,.5,.04),D("#b8875a",.6),0,.46,0,Ut),t(e(1.7,.4,.07,.03),D("#b8875a",.6),0,.72,-.24,Ut);for(let gt of[-.65,.65])t(e(.14,.42,.44,.03),z,gt,.21,0,Ut);let Q=Math.cos(lt),ht=Math.sin(lt);for(let gt of[-.42,.42])s(`fb${Ct+1}${gt<0?"a":"b"}`,Z+gt*Q,ot-gt*ht,lt,.5,{x:Z+gt*Q+ht*.7,z:ot-gt*ht+Q*.7});n(Z-.9*Math.abs(Q)-.3*Math.abs(ht),ot-.9*Math.abs(ht)-.3*Math.abs(Q),Z+.9*Math.abs(Q)+.3*Math.abs(ht),ot+.9*Math.abs(ht)+.3*Math.abs(Q))});let it=D("#8a5a3b",.8),X=[D("#4f9d5d",.85,{flatShading:!0}),D("#5fb36f",.85,{flatShading:!0}),D("#3f8a4f",.85,{flatShading:!0})];[[-12.4,16.4],[25,16.4],[24.9,11.2],[7.3,16.6]].forEach(([Z,ot],lt)=>{t(new Y(.12,.18,1.8,10),it,Z,.9,ot);let Ct=sn(140+lt);for(let Ut=0;Ut<6;Ut++)t(new ke(1,1),X[Ut%3],Z+(Ct()-.5)*.9,2.1+Ct()*.8,ot+(Ct()-.5)*.9).scale.setScalar(.45+Ct()*.25);n(Z-.3,ot-.3,Z+.3,ot+.3)});for(let[Z,ot]of[[-8,17],[-.5,11.4],[5.6,11.4],[17,17],[23.2,11.4],[-12.6,11.2]])t(new Y(.14,.18,.12,14),D("#2b2b33",.4),Z,.06,ot),t(new Y(.035,.035,2.1,8),D("#2b2b33",.4),Z,1.1,ot),t(new At(.17,14,10),De("#fff1d0",1.6),Z,2.25,ot,i,l),mn(i,Z,ot,1.4,"#ffe3b0",.22),n(Z-.18,ot-.18,Z+.18,ot+.18)}var fx=[.37,1.9,4.3,9.7,23.1];function ux(i,t){let e=new Set,n=new Set,s=(r,o)=>{if(!(!r||typeof r!="object"||n.has(r)||o>4)){if(n.add(r),r.isObject3D){r.traverse(a=>e.add(a));return}if(!(r.isMaterial||r.isTexture||r.isBufferGeometry))for(let a of Object.keys(r))a!=="animated"&&s(r[a],o+1)}};for(let r of t||Object.keys(i))r!=="animated"&&s(i[r],1);return e}var dx=i=>[i.visible,i.opacity,i.color&&i.color.getHex(),i.emissive&&i.emissive.getHex(),i.emissiveIntensity,i.map&&i.map.offset.x,i.map&&i.map.offset.y,i.map&&i.map.rotation].join("|");function px(i,t){let e=[];i.traverse(l=>{l.isMesh&&e.push(l)});let n=new Set;e.forEach(l=>[].concat(l.material).forEach(c=>n.add(c)));let s=()=>(i.updateMatrixWorld(!0),{m:new Map(e.map(l=>[l,l.matrixWorld.elements.join(",")+"|"+Ff(l)])),mat:new Map([...n].map(l=>[l,dx(l)]))}),r=s(),o=new Set,a=new Set;for(let l of fx){for(let f of t)try{f(l,.016)}catch{}let c=s();for(let f of e)c.m.get(f)!==r.m.get(f)&&o.add(f);for(let f of n)c.mat.get(f)!==r.mat.get(f)&&a.add(f)}return{movers:o,live:a}}function Ff(i){for(let t=i;t;t=t.parent)if(!t.visible)return 0;return 1}var Of=i=>i.isMeshStandardMaterial&&!i.map&&!i.emissiveMap&&!i.normalMap&&!i.roughnessMap&&!i.alphaMap&&!i.aoMap&&!i.lightMap&&!i.bumpMap&&!i.envMap&&(!i.emissive||i.emissive.getHex()===0||!i.emissiveIntensity)&&!i.vertexColors&&!(i.userData&&Object.keys(i.userData).length);function mx(i){let t={plain:Of(i)};for(let e of["type","side","flatShading","vertexColors","toneMapped","roughness","metalness","emissiveIntensity","opacity","transparent","alphaTest","depthWrite","wireframe","fog","blending"])t[e]=i[e];for(let e of["emissive","specular"])i[e]&&i[e].getHex&&(t[e]=i[e].getHex());!t.plain&&i.color&&(t.color=i.color.getHex());for(let e of["map","emissiveMap","normalMap","roughnessMap","alphaMap","envMap","lightMap","aoMap","bumpMap"])t[e]=i[e]?i[e].uuid:null;return i.userData&&Object.keys(i.userData).length&&(t.ud=i.uuid),JSON.stringify(t)}function kf(i,t,{keep:e}={}){i.updateMatrixWorld(!0);let n=ux(t,e),{movers:s,live:r}=px(i,t.animated||[]);i.updateMatrixWorld(!0);let o=new Map,a=0,l={},c=g=>{l[g]=(l[g]||0)+1};i.traverse(g=>{if(!g.isMesh)return;if(a++,g.isInstancedMesh||g.isSkinnedMesh)return c("instanced");if(n.has(g))return c("ref");if(s.has(g))return c("moves");if(!Ff(g))return c("hidden");if(Object.keys(g.userData||{}).length||g.parent&&Object.keys(g.parent.userData||{}).length)return c("userData");if(Array.isArray(g.material))return c("multimat");let v=g.material;if(!v||r.has(v))return c("livemat");if(v.transparent||!v.visible||v.isShaderMaterial)return c("transparent");if(g.onBeforeRender!==Ne.prototype.onBeforeRender)return c("hook");let m=g.geometry;if(!m||!m.attributes.position||m.morphAttributes&&Object.keys(m.morphAttributes).length)return c("geo");let u=[mx(v),g.castShadow?1:0,g.receiveShadow?1:0,g.renderOrder].join("|");o.has(u)||o.set(u,{mat:v,plain:Of(v),cast:g.castShadow,recv:g.receiveShadow,order:g.renderOrder,items:[]}),o.get(u).items.push(g)});let f=0,h=0;for(let g of o.values()){if(g.items.length<2)continue;let v=!!g.mat.map,m=g.items.some(T=>!T.geometry.index),u=[];for(let T of g.items){let w=T.geometry;m&&w.index&&(w=w.toNonIndexed());let b=new Re,I=U=>(U.isInterleavedBufferAttribute,U.clone());if(b.setAttribute("position",I(w.attributes.position)),w.attributes.normal&&b.setAttribute("normal",I(w.attributes.normal)),v&&w.attributes.uv&&b.setAttribute("uv",I(w.attributes.uv)),!m&&w.index&&b.setIndex(w.index.clone()),b.attributes.normal||b.computeVertexNormals(),g.plain){let U=T.material.color,y=b.attributes.position.count,E=new Float32Array(y*3);for(let N=0;N<y;N++)E[N*3]=U.r,E[N*3+1]=U.g,E[N*3+2]=U.b;b.setAttribute("color",new Ie(E,3))}b.applyMatrix4(T.matrixWorld),u.push(b),w!==T.geometry&&w.dispose()}let x=On(u,!1);if(u.forEach(T=>T.dispose()),!x)continue;let _=g.mat;g.plain&&(_=g.mat.clone(),_.color=new Yt(1,1,1),_.vertexColors=!0,_.needsUpdate=!0);let M=new O(x,_);M.castShadow=g.cast,M.receiveShadow=g.recv,M.renderOrder=g.order,M.matrixAutoUpdate=!1,M.name="merged",i.add(M);for(let T of g.items)T.parent.remove(T),h++;f++}let d=[];i.traverse(g=>{g!==i&&g.type==="Group"&&!g.children.length&&!n.has(g)&&d.push(g)});for(let g of d)g.parent&&g.parent.remove(g);i.updateMatrixWorld(!0);let p=[...o.values()].map(g=>g.items.length).sort((g,v)=>v-g);return{before:a,removed:h,merged:f,why:l,groups:o.size,sizes:p.slice(0,12)}}var Gf=new L,gx=new en,Vf=new L,zo=class extends Ne{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var Gn=new te,yx=new te,Bo=class{constructor(t={}){let e=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:n,height:s}},this.render=function(m,u){let x=u.projectionMatrix.elements[5]*o;u.view&&u.view.enabled?(c.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,c.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let _,M;u.isOrthographicCamera&&(_=-(u.right+u.left)/2,M=(u.top+u.bottom)/2);let T=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,w=u.isOrthographicCamera?`scale( ${T} )scale(`+x+")translate("+h(_)+"px,"+h(M)+"px)"+d(u.matrixWorldInverse):`scale( ${T} )translateZ(`+x+"px)"+d(u.matrixWorldInverse),I=(u.isPerspectiveCamera?"perspective("+x+"px) ":"")+w+"translate("+r+"px,"+o+"px)";a.camera.style!==I&&(f.style.transform=I,a.camera.style=I),v(m,m,u,w)},this.setSize=function(m,u){n=m,s=u,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=u+"px",c.style.width=m+"px",c.style.height=u+"px",f.style.width=m+"px",f.style.height=u+"px"};function h(m){return Math.abs(m)<1e-10?0:m}function d(m){let u=m.elements;return"matrix3d("+h(u[0])+","+h(-u[1])+","+h(u[2])+","+h(u[3])+","+h(u[4])+","+h(-u[5])+","+h(u[6])+","+h(u[7])+","+h(u[8])+","+h(-u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(-u[13])+","+h(u[14])+","+h(u[15])+")"}function p(m){let u=m.elements;return"translate(-50%,-50%)"+("matrix3d("+h(u[0])+","+h(u[1])+","+h(u[2])+","+h(u[3])+","+h(-u[4])+","+h(-u[5])+","+h(-u[6])+","+h(-u[7])+","+h(u[8])+","+h(u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(u[13])+","+h(u[14])+","+h(u[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let u=0,x=m.children.length;u<x;u++)g(m.children[u])}function v(m,u,x,_){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let M=m.layers.test(x.layers)===!0,T=m.element;if(T.style.display=M===!0?"":"none",M===!0){m.onBeforeRender(e,u,x);let w;m.isCSS3DSprite?(Gn.copy(x.matrixWorldInverse),Gn.transpose(),m.rotation2D!==0&&Gn.multiply(yx.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Gf,gx,Vf),Gn.setPosition(Gf),Gn.scale(Vf),Gn.elements[3]=0,Gn.elements[7]=0,Gn.elements[11]=0,Gn.elements[15]=1,w=p(Gn)):w=p(m.matrixWorld);let b=a.objects.get(m);if(b===void 0||b.style!==w){T.style.transform=w;let I={style:w};a.objects.set(m,I)}T.parentNode!==f&&f.appendChild(T),m.onAfterRender(e,u,x)}}for(let M=0,T=m.children.length;M<T;M++)v(m.children[M],u,x,_)}}};var fe=ft;function wc(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var Wf={idle:"\u2615",chat:"\u{1F4AC}",work:"\u{1F3E2}",image:"\u{1F3A8}",video:"\u{1F3AC}",web:"\u{1F50E}",doc:"\u{1F4C4}",away:"\u{1F319}"},xx={"\u{1F44B}":"wave","\u{1F57A}":"dance","\u{1F389}":"cheer","\u{1F64C}":"cheer","\u2615":"drink"},Fo={x1:-5.1,x2:1.1,z1:1.9,z2:7.1},_x=120,vx={hug:.5,dance:.95,highfive:.62,cheers:.62,coffee:.68},Xf={highfive:"\u{1F64C}",hug:"\u{1F917}",cheers:"\u{1F942}",coffee:"\u2615",dance:"\u{1F483}"},qe={x:12.5,z:12.5,face:.32},qf=()=>({x:qe.x+Math.sin(qe.face)*2,z:qe.z+Math.cos(qe.face)*2}),Mx={id:"npc",name:"Tr\u1EE3 l\xFD SIMI",shirt:"#0a5cc2",pants:"#142c5a",shoes:"#1d1d24",hair:"#2b1d14",hairStyle:"bob",accessory:"headset",accent:"#f5c518",skin:"#f1c9a5",outfit:"blazer",lapel:"#083d80"},Sc={x:6,z:4,zoom:.31},bc={npc:{x:qe.x,z:qe.z,y:1.1,zoom:1.45},altar:{x:11.8,z:-8.4,y:1.2,zoom:1},fortune:{x:8.75,z:-9.2,y:1,zoom:1.15},bar:{x:pr,z:-7.6,y:1,zoom:.95},dance:{x:-2,z:4.5,y:.2,zoom:1.05},cinema:{x:Ho,z:-9,y:1.9,zoom:.95},game:{x:20.8,z:-4.4,y:.9,zoom:.95},zen:{x:8.4,z:2.2,y:.4,zoom:.92},garden:{x:8,z:14.2,y:.4,zoom:.62}};function Rc(i){let t=i.avatar||{},e=0;for(let s of String(i.id||i.name||""))e=e*31+s.charCodeAt(0)>>>0;let n=s=>s[e%s.length];return{id:i.id,name:i.name,hair:t.hair||n(["#2b1d14","#5a3a1e","#1a1a1a","#7a2e2e","#b07a3c","#3b3b46"]),skin:t.skin||n(["#f1c9a5","#e2ae84","#f6d7bd","#ebbf98","#d9a074"]),shirt:t.shirt||n(["#0a78f0","#2fc1a5","#f5b51b","#4a3592","#e1262d","#142c5a","#ff8a3d"]),pants:t.pants,shoes:t.shoes,accent:t.accent,hairStyle:t.hairStyle||n(["short","long","spiky","bun","bob","curly","ponytail"]),accessory:t.accessory||"none",outfit:t.outfit||"none"}}var Ex=2,Ps=()=>Math.min(window.devicePixelRatio||1,Ex);function $f(i){let t=new ds({canvas:i,antialias:(window.devicePixelRatio||1)<1.5,alpha:!0,powerPreference:"high-performance"});if(!t.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");return t.setPixelRatio(Ps()),t.shadowMap.enabled=!0,t.shadowMap.type=Es,t.toneMapping=sr,t.outputColorSpace=me,t.setClearColor(0,0),t}var Yf=new Bn(.34,24),Zf=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(60,40,20,.42)"),e.addColorStop(.6,"rgba(60,40,20,.18)"),e.addColorStop(1,"rgba(60,40,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new se({map:new Xe(i),transparent:!0,depthWrite:!1})})();function Jf(i,t=2048,e={x:0,z:0},n={x:17,z:14}){i.add(new xs("#ffffff","#d8c6aa",1.05),new _s("#ffffff",.18));let s=new gi("#fff0dc",2.1);s.position.set(e.x-6,15,e.z+10),s.target.position.set(e.x,0,e.z),s.castShadow=!0,s.shadow.mapSize.set(t,t),Object.assign(s.shadow.camera,{left:-n.x,right:n.x,top:n.z,bottom:-n.z,near:1,far:50}),s.shadow.bias=-5e-4,s.shadow.normalBias=.03,s.shadow.radius=2.5;let r=new gi("#dbe8ff",.5);r.position.set(9,7,-3),i.add(s,s.target,r)}var gr=class{constructor(t,e={}){this.root=t,this.opts=e,this.people=new Map,this.bubbles=new Set,this.emotes=new Set,this.keys=new Set,this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas",n.tabIndex=0,this.renderer=$f(n),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.cssBox=document.createElement("div"),this.cssBox.className="office3d-css",n.style.position="relative",n.style.zIndex="1",this.layer.style.zIndex="2",this.wrap.append(this.cssBox,n,this.layer),t.appendChild(this.wrap),this.canvas=n,this.scene=new mi,this.crowd=new Uo(this.scene,{cap:300,blobGeo:Yf,blobMat:Zf}),this.v1=new L,Jf(this.scene,2048,{x:(fe.minX+fe.maxX)/2,z:(fe.minZ+fe.maxZ)/2},{x:(fe.maxX-fe.minX)/2+3,z:(fe.maxZ-fe.minZ)/2+4}),this.world=Bf(this.scene,{tet:Po(e.tet)}),this.pool=(this.world.poolTables||[]).map(o=>({...o,state:null,anim:null})),this.games=new Map,this.seats=new Map(this.world.seats.map(o=>[o.id,o])),this.follow=!0,this.cam=new pi(-10,10,6,-6,.1,100),this.view={az:.72,el:.7,zoom:.85,target:new L(0,.6,.6)},this.goal={az:.72,el:.7,zoom:.85},this.perf={acc:0,n:0,dpr:Ps(),slow:0,fast:0,ceil:Ps(),min:1},this.nav=new bs(fe.minX,fe.minZ,fe.maxX,fe.maxZ,.2),this.nav.blockRect(fe.minX,fe.minZ,fe.maxX,fe.minZ+.25,.15),this.nav.blockRect(fe.minX,fe.minZ,fe.minX+.25,fe.maxZ,.15),this.nav.blockRect(fe.maxX-.2,fe.minZ,fe.maxX,fe.maxZ,.15),this.nav.blockRect(fe.minX,fe.maxZ-.2,fe.maxX,fe.maxZ,.15);for(let o of this.world.obstacles)this.nav.blockRect(...o);if(!e.noMerge&&!window.VP_NO_MERGE)try{this.mergeStats=kf(this.scene,this.world,{keep:["cinema","clickables","poolTables","seatMeshes","seats","ideasFlag"]})}catch(o){this.mergeStats={error:String(o&&o.message||o)}}this.buildNpcDesk();for(let o of this.pool)this.setTableBalls(o,null);this.cat=new Ts(this.scene,this.nav),this.cat.onFx=o=>this.fx(null,o),this.setNpc(null),this.skew=0,this.light=!1,this.capFps=!1,this.lastInput=performance.now(),this.raycaster=new Ms,this.ndc=new Tt,this.tmpV=new L,this.frustum=new Ii,this.projM=new te,this.sph=new Hn(new L,1.1),this.floorPlane=new Rn(new L(0,1,0),0),this.marker=new O(new Fn(.16,.24,28),new se({color:"#0a78f0",transparent:!0,opacity:0})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.02,this.scene.add(this.marker);let s=qf();this.npcRing=new Dt,this.npcRing.position.set(s.x,.025,s.z);for(let[o,a,l]of[[.55,.7,.85],[.95,1.02,.45]]){let c=new O(new Fn(o,a,48),new se({color:"#f5c518",transparent:!0,opacity:l,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.userData.o=l,this.npcRing.add(c)}this.scene.add(this.npcRing),this.stick={x:0,y:0},this.bindInput(),e.mobile&&(this.renderer.shadowMap.enabled=!1,this.perf.noShadow=!0,this.perf.min=1.25,this.goal.zoom=this.view.zoom=.7),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();try{let o=this.renderer.getContext(),a=o.getExtension("WEBGL_debug_renderer_info");this.gpu=String(a?o.getParameter(a.UNMASKED_RENDERER_WEBGL):o.getParameter(o.RENDERER)||""),/swiftshader|llvmpipe|softpipe|software|basic render/i.test(this.gpu)&&!e.keepFull&&(this.softGpu=!0,this.setLight(!0),this.capFps=!0)}catch{}this.clock=new vs;let r=o=>{if(this.dead||(this.raf=requestAnimationFrame(r),this.paused))return;let a=window.VP_WIN;if(this.bg=!!(a&&!a.focused)&&performance.now()-(this.lastInput||0)>3e3,a&&a.minimized)return;let l=this.bg?80:this.slowMode()?31:0;l&&o-(this.lastTs||0)<l||(this.lastTs=o,this.frame())};r()}slowMode(){return this.capFps||this.light||this.opts.mobile&&performance.now()-(this.lastInput||0)>4e4}poke(){this.lastInput=performance.now()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.cssW||800,a=this.cssH||500,l=o/a,c=Math.max(8.4,15.6/l)/n;Object.assign(this.cam,{left:-c*l/2,right:c*l/2,top:c/2,bottom:-c/2}),this.cam.updateProjectionMatrix()}lookAt(t){let e=bc[t];return e?(this.follow=!1,this.panTo=new L(e.x,.6,e.z),Object.assign(this.goal,{zoom:e.zoom,az:.72,el:.7}),!0):!1}placeScreen(t){let e=bc[t];if(!e)return null;let n=this.project(this.tmpV.set(e.x,e.y,e.z)),s=this.canvas.getBoundingClientRect();return{x:s.left+n.x,y:s.top+n.y,r:Math.max(70,Math.min(170,110*this.view.zoom))}}resetView(){Object.assign(this.goal,{az:.72,el:.7,zoom:.85}),this.follow=!0}overview(){this.follow=!1,this.goal.zoom=Sc.zoom,this.goal.el=.82,this.panTo=new L(Sc.x,.6,Sc.z)}focusSelf(){this.follow=!0,this.goal.zoom=.85,this.panTo=null}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.cssW=e,this.cssH=n,this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.cssRenderer&&this.cssRenderer.setSize(e,n),this.updateCamera()}setCinemaFrame(t){let e=this.world.cinema;if(e){if(this.cinemaObj&&(this.cssScene.remove(this.cinemaObj),this.cinemaObj.element.remove(),this.cinemaObj=null),t){this.cssRenderer||(this.cssRenderer=new Bo({element:this.cssBox}),this.cssScene=new mi,this.cssRenderer.setSize(this.cssW||800,this.cssH||500));let n=1280;t.style.width=n+"px",t.style.height=Math.round(n*e.h/e.w)+"px";let s=new zo(t);s.position.set(e.x,e.y,e.z),s.scale.setScalar(e.w/n),this.cssScene.add(s),this.cinemaObj=s}e.idle.visible=!t,e.hole.visible=!!t}}viewScreen(t=0){let e=this.world.cinema;if(!e)return;let n=1.25,s=this.cssW||800,r=this.cssH||500,o=Math.max(8.4,15.6/(s/r))/n/r;this.follow=!1,this.panTo=new L(e.x-t*o,.6,e.z+3.2),Object.assign(this.goal,{az:.05,el:.32,zoom:n})}ray(t,e){let n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam),this.raycaster}pickPerson(t,e){let n=this.ray(t,e),s=null;for(let r of this.people.values()){let o=n.intersectObject(r.person.root,!0)[0];o&&(!s||o.distance<s.d)&&(s={p:r,d:o.distance})}return s&&s.p}pickNpc(t,e){return!!this.npc&&this.ray(t,e).intersectObjects([this.npc.person.root,this.npcDesk],!0).length>0}pickCat(t,e){return this.ray(t,e).intersectObject(this.cat.root,!0).length>0}pickTable(t,e){if(!this.pool.length)return-1;let n=this.ray(t,e).intersectObjects(this.pool.map(s=>s.hit),!1)[0];return n?n.object.userData.poolTable:-1}pickAction(t,e){let n=this.world.clickables||[];if(!n.length)return null;let s=this.ray(t,e).intersectObjects(n,!1)[0];return s?s.object.userData.action:null}pickSeat(t,e){let n=this.ray(t,e).intersectObjects(this.world.seatMeshes,!1)[0];return n?this.seats.get(n.object.userData.seatId):null}seatTaken(t,e){return[...this.people.values()].some(n=>n.m.id!==e&&(n.seat===t||n.pendingSeat===t))}pickFloor(t,e){let n=new L;return this.ray(t,e).ray.intersectPlane(this.floorPlane,n)?n:null}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",c=>c.preventDefault());let n=new Map,s=null,r=()=>{let[c,f]=[...n.values()];return Math.hypot(c.x-f.x,c.y-f.y)||1};t.addEventListener("pointerdown",c=>{if(this.poke(),t.focus(),t.setPointerCapture(c.pointerId),n.set(c.pointerId,{x:c.clientX,y:c.clientY}),n.size===2){s={d:r(),zoom:this.goal.zoom},e&&(e.moved=!0);return}e={x:c.clientX,y:c.clientY,az:this.goal.az,el:this.goal.el,moved:!1}});let o=c=>{n.delete(c.pointerId),n.size<2&&(s=null)};t.addEventListener("pointercancel",c=>{o(c),e=null});let a=0,l=0;t.addEventListener("pointermove",c=>{if(n.has(c.pointerId)&&n.set(c.pointerId,{x:c.clientX,y:c.clientY}),s&&n.size>=2){this.goal.zoom=Math.max(.28,Math.min(2.6,s.zoom*r()/s.d));return}if(e){let p=c.clientX-e.x,g=c.clientY-e.y;Math.hypot(p,g)>5&&(e.moved=!0),e.moved&&(this.goal.az=Math.max(.05,Math.min(1.52,e.az-p*.005)),this.goal.el=Math.max(.34,Math.min(1.28,e.el+g*.0035)),t.style.cursor="grabbing");return}let f=c.clientX,h=c.clientY,d=()=>{a=performance.now(),t.style.cursor=this.pickPerson(f,h)||this.pickNpc(f,h)||this.pickCat(f,h)||this.pickTable(f,h)>=0||this.pickAction(f,h)||this.pickSeat(f,h)?"pointer":"crosshair"};clearTimeout(l),performance.now()-a>80?d():l=setTimeout(d,90)}),t.addEventListener("pointerup",c=>{if(o(c),e&&!e.moved){let f=this.pickPerson(c.clientX,c.clientY),h=!f&&this.pickNpc(c.clientX,c.clientY),d=!f&&!h&&this.pickCat(c.clientX,c.clientY),p=!f&&!h&&!d?this.pickTable(c.clientX,c.clientY):-1,g=!f&&!h&&!d&&p<0?this.pickAction(c.clientX,c.clientY):null,v=!f&&!d&&!h&&p<0&&!g&&this.pickSeat(c.clientX,c.clientY);if(g==="fortune")this.walkSelf(mr.x,mr.z+.9,!0),this.opts.onFortune&&this.opts.onFortune();else if(g==="ideas")this.walkSelf(Ec.x+.6,ft.minZ+1.3,!0),this.opts.onIdeas&&this.opts.onIdeas();else if(h)this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(c.clientX,c.clientY);else if(p>=0)this.opts.onTableClick&&this.opts.onTableClick(p,c.clientX,c.clientY);else if(d)this.opts.onCatClick&&this.opts.onCatClick(c.clientX,c.clientY);else if(f&&!f.me)this.opts.onPersonClick&&this.opts.onPersonClick(f.m.id,c.clientX,c.clientY);else if(f&&f.me)this.opts.onSelfClick&&this.opts.onSelfClick(c.clientX,c.clientY);else if(v)this.sitSelf(v.id);else{let m=this.pickFloor(c.clientX,c.clientY);m&&this.walkSelf(m.x,m.z,!0)}}e=null,t.style.cursor="crosshair"}),t.addEventListener("wheel",c=>{c.preventDefault(),this.goal.zoom=Math.max(.28,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,c.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dblclick",c=>{this.pickPerson(c.clientX,c.clientY)||this.resetView()}),t.addEventListener("keydown",c=>{let f=c.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(f)&&(this.keys.add(f),c.preventDefault())}),t.addEventListener("keyup",c=>this.keys.delete(c.key.toLowerCase())),t.addEventListener("blur",()=>this.keys.clear())}setMembers(t){let e=new Set;t.forEach((n,s)=>{e.add(n.id);let r=this.people.get(n.id),o=Rc(n),a=JSON.stringify(o);if(r&&r.sig!==a&&(this.scene.remove(r.person.root),r.person=this.makePerson(o,s,r.pos,r.facing),r.person.dance=r.dance||null,r.sig=a),!r){let l=this.freeSpot(n.pos?n.pos.x:s%5*1.4-3,n.pos?n.pos.z:1+Math.floor(s/5));r={m:n,me:!!n.me,pos:l,path:[],facing:Math.random()*6,sig:a,speed:1.9,seat:null,pendingSeat:null},r.person=this.makePerson(o,s,r.pos,r.facing),this.makePlate(r),this.people.set(n.id,r);let c=n.pos&&n.pos.seat&&this.seats.get(n.pos.seat);c&&!this.seatTaken(c.id,n.id)&&this.sitNow(r,c)}r.m=n,r.me=!!n.me,!r.me&&(n.dance||null)!==(r.dance||null)&&!r.meet&&this.setDance(n.id,n.dance||null),this.updatePlate(r)});for(let[n,s]of[...this.people])e.has(n)||this.removePerson(n,s)}makePerson(t,e,n,s){let r=new Hi(t,e);return r.root.userData.character=!0,r.root.position.set(n.x,0,n.z),r.root.rotation.y=s||0,r.root.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),r.blob=new O(Yf,Zf),r.blob.rotation.x=-Math.PI/2,r.blob.renderOrder=1,r.root.add(r.blob),this.scene.add(r.root),r}removePerson(t,e){this.scene.remove(e.person.root),e.plate.remove(),this.people.delete(t);for(let n of[...this.bubbles])n._p===e&&(n.remove(),this.bubbles.delete(n))}freeSpot(t,e){let n=this.nav.toCell(Math.max(fe.minX+.6,Math.min(fe.maxX-.6,t)),Math.max(fe.minZ+.6,Math.min(fe.maxZ-.6,e))),s=this.nav.nearestFree(n.c,n.r);return this.nav.center(s.c,s.r)}makePlate(t){let e=document.createElement("div");e.className="plate3d lobby"+(t.me?" me":""),e.innerHTML='<span class="pl-bubble" hidden></span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title"></span></span>',e.addEventListener("click",n=>{let s=e.getBoundingClientRect();t.me?this.opts.onSelfClick&&this.opts.onSelfClick(s.left+s.width/2,s.bottom):this.opts.onPersonClick&&this.opts.onPersonClick(t.m.id,s.left+s.width/2,s.bottom),n.stopPropagation()}),this.layer.append(e),t.plate=e}updatePlate(t){let e=t.m,n=e.status||{};t.plate.querySelector(".pl-name").textContent=(t.me?"\u2B50 ":"")+e.name,t.plate.querySelector(".pl-title").textContent=t.game?"\u{1F3B1} \u0110ang ch\u01A1i bida":t.dance?"\u{1F483} \u0110ang nh\u1EA3y":n.text?new RegExp("^\\p{Extended_Pictographic}","u").test(n.text)?n.text:`${Wf[n.activity]||"\u2615"} ${n.text}`:`${Wf[n.activity]||"\u2615"} ${e.teamName||""}`.trim(),t.plate.classList.toggle("dancing",!!t.dance),t.plate.classList.toggle("busy",!!n.activity&&!["idle","away"].includes(n.activity)),t.busy=!!n.activity&&!["idle","away"].includes(n.activity);let s=t.plate.querySelector(".pl-bubble");if(s){let r=t.busy&&!t.game&&!t.dance&&n.task?String(n.task):"";s.dataset.t!==r&&(s.dataset.t=r,s.textContent=r,s.hidden=!r)}t.plate.title=`${e.name} \xB7 ${e.teamName||""}${e.role?" \xB7 "+e.role:""}`}standUp(t){t.seat=null,t.pendingSeat=null,t.sitting=!1,t.seatKind=null,t.person&&(t.person.bowPh=0)}stopMoves(t){t.meet=null,t.dance&&(t.dance=null,t.person.dance=null,this.updatePlate(t),t.me&&this.opts.onDance&&this.opts.onDance(null,!0))}sitNow(t,e){t.path=[],t.pos={x:e.x,z:e.z},t.facing=e.face,t.seat=e.id,t.pendingSeat=null,t.sitting=!0,t.seatH=e.h,t.seatKind=e.kind||null,e.kind==="zen"&&(t.zenFx=performance.now()/1e3+2+Math.random()*3,t.me&&this.opts.onToast&&this.opts.onToast("\u{1F9D8} H\xEDt v\xE0o th\u1EADt ch\u1EADm\u2026 th\u1EDF ra nh\u1EB9 nh\xE0ng. B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.")),e.kind==="kneel"&&(t.zenFx=performance.now()/1e3+1.5+Math.random()*2,t.seatTheme=e.theme||null,t.me&&this.opts.onToast&&this.opts.onToast(e.theme==="thantai"?"\u{1F4B0} Th\u1EA7n T\xE0i ph\xF9 h\u1ED9: kh\xE1ch v\xE0o nh\u01B0 n\u01B0\u1EDBc, ch\u1ED1t \u0111\u01A1n \u1EA7m \u1EA7m, doanh s\u1ED1 x10! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy.":"\u{1F64F} Th\xE0nh t\xE2m kh\u1EA5n: c\u1EA7u kh\xF4ng bug, token \u0111\u1EA7y kho, deadline l\xF9i! B\u1EA5m \u0111i ch\u1ED7 kh\xE1c l\xE0 \u0111\u1EE9ng d\u1EADy."))}walk(t,e,n){this.standUp(t),this.stopMoves(t);let s=this.freeSpot(e,n);return t.path=this.nav.find({x:t.pos.x,z:t.pos.z},s),this.pace(t),s}pace(t){let e=0,n=t.pos;for(let s of t.path)e+=Math.hypot(s.x-n.x,s.z-n.z),n=s;return t.speed=e>9?3.4:1.9,e}walkToSeat(t,e){this.standUp(t),this.stopMoves(t),t.pendingSeat=e.id,t.path=[...this.nav.find({x:t.pos.x,z:t.pos.z},this.freeSpot(e.approach.x,e.approach.z)),{x:e.x,z:e.z}],this.pace(t)}moveMember(t,e,n,s){let r=this.people.get(t);if(!r||r.me)return;let o=s&&this.seats.get(s);o?this.walkToSeat(r,o):this.walk(r,e,n)}walkSelf(t,e,n){let s=this.self();if(!s)return;let r=this.walk(s,t,e);n&&(this.marker.position.set(r.x,.02,r.z),this.marker.material.opacity=.9),this.follow=!0,this.opts.onMove&&this.opts.onMove({x:r.x,z:r.z,seat:null})}sitSelf(t){let e=this.self(),n=this.seats.get(t);if(!(!e||!n)&&e.seat!==t){if(this.seatTaken(t,e.m.id)){this.opts.onToast&&this.opts.onToast("Gh\u1EBF n\xE0y c\xF3 ng\u01B0\u1EDDi ng\u1ED3i r\u1ED3i \u{1F605}");return}this.walkToSeat(e,n),this.marker.position.set(n.x,.02,n.z),this.marker.material.opacity=.9,this.follow=!0,this.opts.onMove&&this.opts.onMove({x:n.x,z:n.z,seat:t})}}self(){return[...this.people.values()].find(t=>t.me)}selfPos(){let t=this.self();return t?{...t.pos,seat:t.seat}:null}say(t,e,n=5200){let s=t==="npc"?this.npc:this.people.get(t);if(!s)return;for(let o of[...this.bubbles])o._p===s&&(o.remove(),this.bubbles.delete(o));let r=document.createElement("div");r.className="bubble3d k-chat",r.style.zIndex="5000",r.textContent=e.length>110?e.slice(0,109)+"\u2026":e,r._p=s,this.layer.appendChild(r),this.bubbles.add(r),s.person.say(Math.min(n,2400)),requestAnimationFrame(()=>r.classList.add("show")),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(r),r.remove()},220)},n)}emote(t,e){let n=this.people.get(t);if(!n)return;let s=xx[e]||(/❤|💖|😍|🥰/.test(e)?"wave":"cheer");n.person.doAction(s,s==="dance"?2600:1800),s==="dance"&&(n.danceUntil=performance.now()/1e3+2.6);let r=document.createElement("div");r.className="emote",r.textContent=e,r._p=n,this.layer.appendChild(r),this.emotes.add(r),setTimeout(()=>{this.emotes.delete(r),r.remove()},1700)}fx(t,e,n=1700){let s=document.createElement("div");s.className="emote",s.textContent=e,s._p=t,s._cat=!t,this.layer.appendChild(s),this.emotes.add(s),setTimeout(()=>{this.emotes.delete(s),s.remove()},n)}buildNpcDesk(){let t=new Dt;t.position.set(qe.x,0,qe.z),t.rotation.y=qe.face;let e=(M,T=.6,w={})=>new Zt({color:M,roughness:T,...w}),n=[],s=(M,T,w,b,I,U=!0)=>{let y=new O(M,T);return y.position.set(w,b,I),y.castShadow=U,y.receiveShadow=!0,t.add(y),n.push(y),y},r=(M,T,w)=>{let b=new Qs,I=24;for(let U=0;U<=I;U++){let y=-w+2*w*U/I,E=[Math.sin(y)*T,-Math.cos(y)*T];U===0?b.moveTo(...E):b.lineTo(...E)}for(let U=I;U>=0;U--){let y=-w+2*w*U/I;b.lineTo(Math.sin(y)*M,-Math.cos(y)*M)}return b},o=(M,T)=>{let w=new xo(M,{depth:T,bevelEnabled:!1,curveSegments:24});return w.rotateX(-Math.PI/2),w};s(o(r(.62,.92,.85),.92),e("#ffffff",.45),0,0,0),s(o(r(.6,.98,.88),.05),e("#c79a6a",.35),0,.92,0),s(o(r(.925,.94,.85),.04),e("#0a78f0",.4,{emissive:"#2f8cf0",emissiveIntensity:1.2}),0,.16,0,!1);let a=document.createElement("canvas");a.width=512,a.height=128;let l=a.getContext("2d");l.fillStyle="#0a5cc2",l.fillRect(0,0,512,128),l.fillStyle="#ffd34d",l.font="900 54px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("L\u1EC4 T\xC2N",256,50),l.fillStyle="#ffffff",l.font="800 28px Nunito, sans-serif",l.fillText("H\u1ECFi Tr\u1EE3 l\xFD SIMI",256,100);let c=new Xe(a);c.colorSpace=me,c.anisotropy=4;let f=new O(new ne(.62,.155),new se({map:c}));f.position.set(0,.6,.935),t.add(f);let h=s(new Mt(.42,.28,.03),e("#1d2b4f",.4),-.42,1.18,.62);h.rotation.y=Math.PI+.5,s(new Mt(.06,.18,.06),e("#c2cad6",.3),-.42,1.03,.64),s(new Y(.06,.07,.02,16),e("#c2cad6",.3,{metalness:.6}),.36,.98,.78,!1),s(new At(.05,14,8,0,Math.PI*2,0,Math.PI/2),e("#f5c518",.25,{metalness:.6}),.36,.99,.78,!1),s(new Y(.04,.035,.1,12),e("#0a78f0",.4),.55,1.02,.6,!1),s(new Mt(2.5,1.85,.1),e("#0a5cc2",.55),0,.925,-.82),s(new Mt(2.6,.08,.16),e("#ffffff",.5),0,1.89,-.82);let d=document.createElement("canvas");d.width=1024,d.height=720;let p=d.getContext("2d"),g=p.createLinearGradient(0,0,1024,720);g.addColorStop(0,"#0a78f0"),g.addColorStop(1,"#0a4aa8"),p.fillStyle=g,p.fillRect(0,0,1024,720),p.fillStyle="rgba(255,255,255,.08)";for(let M=0;M<7;M++)p.beginPath(),p.arc(120+M*150,640-M%2*60,90,0,7),p.fill();p.fillStyle="#ffd34d",p.beginPath(),p.arc(512,250,150,0,7),p.fill(),p.fillStyle="#0a4aa8",p.font="900 230px Nunito, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("?",512,262),p.fillStyle="#ffffff",p.font="900 96px Nunito, sans-serif",p.fillText("Tr\u1EE3 l\xFD SIMI",512,500),p.font="800 46px Nunito, sans-serif",p.fillStyle="rgba(255,255,255,.85)",p.fillText("H\u01B0\u1EDBng d\u1EABn \xB7 M\u1EB9o AI \xB7 H\u1ECFi \u0111\xE1p",512,590);let v=new Xe(d);v.colorSpace=me,v.anisotropy=4;let m=new O(new ne(2.36,1.66),new se({map:v,toneMapped:!1}));m.position.set(0,.94,-.765),t.add(m);for(let M of[-1,1]){s(new Y(.2,.15,.42,16),e("#f6f1e8",.6),M*1.5,.21,-.7);for(let T=0;T<4;T++)s(new ke(.2,1),e(T%2?"#5fb36f":"#3f9a5a",.85,{flatShading:!0}),M*1.5+(T%2?.08:-.08),.6+T*.17,-.7+(T>1?.06:-.06)).scale.setScalar(1-T*.12)}this.scene.add(t),this.npcDesk=t;let u=Math.cos(qe.face),x=Math.sin(qe.face),_=[[-1.75,-.95],[1.75,-.95],[-1,1],[1,1],[-1.75,.2],[1.75,.2]].map(([M,T])=>[qe.x+M*u+T*x,qe.z-M*x+T*u]);this.nav.blockRect(Math.min(..._.map(M=>M[0])),Math.min(..._.map(M=>M[1])),Math.max(..._.map(M=>M[0])),Math.max(..._.map(M=>M[1])),.05)}setNpc(t){let e={...Mx},n=JSON.stringify(e);if(!this.npc){let s=document.createElement("div");s.className="plate3d lobby npc",s.innerHTML='<span class="npc-q">?</span><span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title">B\u1EA5m \u0111\u1EC3 h\u1ECFi m\xECnh</span></span>',s.addEventListener("click",r=>{let o=s.getBoundingClientRect();this.npcWave(),this.opts.onNpcClick&&this.opts.onNpcClick(o.left+o.width/2,o.bottom),r.stopPropagation()}),this.layer.append(s),this.npc={plate:s,facing:qe.face,pos:{x:qe.x-Math.sin(qe.face)*.08,z:qe.z-Math.cos(qe.face)*.08},m:{id:"npc"}}}this.npc.sig!==n&&(this.npc.person&&this.scene.remove(this.npc.person.root),this.npc.person=this.makePerson(e,7,this.npc.pos,this.npc.facing),this.npc.person.root.scale.setScalar(1.06),this.npc.sig=n),this.npc.plate.querySelector(".pl-name").textContent=t&&t.name?t.name:"Tr\u1EE3 l\xFD SIMI"}npcWave(){this.npc&&this.npc.person.doAction("wave",1500)}goNpc(){let t=qf(),e=this.self();return e&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<.6&&!e.path.length?(this.focusSelf(),!0):(this.walkSelf(t.x,t.z,!0),this.focusSelf(),!1)}nearNpc(){let t=this.self();return!!(t&&this.npc&&Math.hypot(t.pos.x-this.npc.pos.x,t.pos.z-this.npc.pos.z)<2.6&&!t.path.length)}npcScreen(){if(!this.npc)return null;let t=this.project(this.tmpV.set(this.npc.pos.x,1.6,this.npc.pos.z));return{x:t.x,y:t.y,w:this.cssW,h:this.cssH}}npcSay(t,e=5200){this.npc&&(this.npc.lastSay=t,this.say("npc",t,e))}setTableBalls(t,e){let n=window.VPPool,s=e||(n?n.rack().balls:null);if(!s){t.balls.visible=!1;return}let r=this._m||(this._m=new te),o=!Array.isArray(s);for(let a=0;a<16;a++){let l=o?s[a*3]:s[a][0],c=o?s[a*3+1]:s[a][1],f=o?s[a*3+2]:s[a][2],h=t.x-Cs.w/2+c/500*Cs.w,d=t.z-Cs.l/2+l/1e3*Cs.l;r.makeTranslation(h,f?-1:.892,d),t.balls.setMatrixAt(a,r)}t.balls.instanceMatrix.needsUpdate=!0,t.balls.visible=!0}setGames(t){let e=new Map;for(let n of t||[])n.players.forEach((s,r)=>e.set(s,{table:n.table,idx:r}));for(let n of this.pool){let s=(t||[]).find(r=>r.table===n.index);s&&!n.anim&&(n.state=s.state?s.state.balls:null,this.setTableBalls(n,n.state))}this.games=e;for(let n of this.people.values()){let s=e.get(n.m.id)||null;!!s!=!!n.game?(n.game=s,s||(n.person.holdCue=!1),this.updatePlate(n)):n.game=s}}goToTable(t,e){let n=this.pool[t];if(!n)return;let s=n.spots[e%2];this.walkSelf(s.x,s.z,!0)}poolCue(t){let e=this.people.get(t);e&&e.person.doAction("cue",900)}poolShot(t,e,n,s,r){let o=this.pool[t];if(!o)return;this.poolCue(e);let a=window.VPPool;if(a&&n)try{o.anim={frames:a.simulate(n,s).frames,t0:performance.now(),end:r.balls};return}catch{}o.state=r.balls,this.setTableBalls(o,o.state)}poolEnd(t){let e=this.pool[t];e&&(clearTimeout(e.resetT),e.resetT=setTimeout(()=>{e.anim||(e.state=null,this.setTableBalls(e,null))},6e3))}setIdeas(t){let e=this.world||{};e.ideasBoard&&e.ideasBoard.draw(t?{summary:t}:null);let n=t?Object.values(t).reduce((s,r)=>s+(r.fresh||0),0):0;e.ideasFlag&&(e.ideasFlag.rotation.z=n?0:-Math.PI/2+.15)}setSkew(t){this.skew=Number(t)||0}setCat(t){this.cat.command(t,this.skew)}beat(){return(Date.now()+this.skew)/1e3*_x/60}setDance(t,e){let n=this.people.get(t);n&&(n.dance=e||null,n.person.dance=n.dance,e&&n.pendingSeat&&(n.pendingSeat=null,n.path=[]),this.updatePlate(n))}danceSelf(t){let e=this.self();e&&(this.setDance(e.m.id,t),this.opts.onDance&&this.opts.onDance(t||null,!1))}onFloor(t){return!!t&&t.pos.x>Fo.x1&&t.pos.x<Fo.x2&&t.pos.z>Fo.z1&&t.pos.z<Fo.z2}interact(t){let e=this.people.get(t.a),n=this.people.get(t.b);if(!e||!n||e===n)return;(t.kind==="hug"||t.kind==="dance")&&n.sitting&&this.standUp(n);let s=Math.atan2(e.pos.x-n.pos.x,e.pos.z-n.pos.z)||.6,r=vx[t.kind]||.65,o=this.freeSpot(n.pos.x+Math.sin(s)*r,n.pos.z+Math.cos(s)*r);this.standUp(e),e.path=this.nav.find({x:e.pos.x,z:e.pos.z},o);let a=this.pace(e);e.meet={other:n,kind:t.kind,style:t.style,deadline:performance.now()/1e3+Math.max(7,a/e.speed+3)},e.me&&(this.follow=!0)}startMeet(t,e){let n=e.other;t.path=[],t.facing=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),n.sitting||(n.facing=Math.atan2(t.pos.x-n.pos.x,t.pos.z-n.pos.z));let s=e.kind;if(s==="coffee")t.person.doAction("give",1500),setTimeout(()=>{this.people.has(n.m.id)&&n.person.doAction("drink",2400)},1100);else if(s==="dance")for(let r of[t,n])r.dance=e.style||"groove",r.person.dance=r.dance,this.updatePlate(r);else for(let r of[t,n])r.person.doAction(s,s==="hug"?2800:s==="cheers"?2300:1700);this.fx(t,Xf[s]||"\u2728"),(s==="hug"||s==="highfive")&&this.fx(n,Xf[s])}setQuality(t){this.quality=t==="light"||t==="high"?t:"auto",this.quality==="high"&&(this.capFps=!1,this.perf.noShadow=!1),this.setLight(this.quality==="light")}setLight(t){this.light=!!t;let e=t?1:Ps();this.perf.dpr=e,this.perf.ceil=e,this.renderer.setPixelRatio(e);let n=!t&&!this.perf.noShadow;this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(s=>{s.material&&[].concat(s.material).forEach(r=>{r.needsUpdate=!0})})),this.resize()}frame(){let t=this.clock.getDelta(),e=Math.min(.05,t),n=this.t=(this.t||0)+e,s=performance.now()/1e3;for(let u of this.world.animated)u(n,e);for(let u of this.pool){if(!u.anim)continue;let x=Math.floor((performance.now()-u.anim.t0)/(1e3/60));x>=u.anim.frames.length-1?(u.state=u.anim.end,u.anim=null,this.setTableBalls(u,u.state)):this.setTableBalls(u,u.anim.frames[x])}let r=this.beat();this.cat.update(e,s,{posOf:u=>{let x=this.people.get(u);return x&&x.pos}}),this.keyboardMove(e),this.marker.material.opacity=Math.max(0,this.marker.material.opacity-e*.8),this.projM.multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projM);let o=this.people.size>24;this.lodTick=!this.lodTick;let a=this.quality==="high"?this.people.size>40?38:0:this.light||this.softGpu?this.people.size>8?90:0:this.people.size>14?60:0;this.crowd.begin();for(let u of this.people.values()){let x=!1;if(u.path.length){let y=u.path[0],E=y.x-u.pos.x,N=y.z-u.pos.z,H=Math.hypot(E,N),P=u.speed*e;if(H<=P){if(u.pos.x=y.x,u.pos.z=y.z,u.path.shift(),!u.path.length&&u.pendingSeat){let G=this.seats.get(u.pendingSeat);G&&this.sitNow(u,G)}}else u.pos.x+=E/H*P,u.pos.z+=N/H*P;u.meet&&s>u.meet.deadline&&(u.path=[]),H>.001&&(u.facing=wc(u.facing,Math.atan2(E,N),1-Math.exp(-e*12))),x=u.path.length>0}else u.keyMove&&(x=!0);if(u.meet&&!u.path.length){let y=u.meet;u.meet=null,this.startMeet(u,y)}if(u.game){let y=this.pool[u.game.table]&&this.pool[u.game.table].spots[u.game.idx%2],E=y&&!x&&Math.hypot(u.pos.x-y.x,u.pos.z-y.z)<.45;u.person.holdCue=!!E,E&&(u.facing=wc(u.facing,y.face,1-Math.exp(-e*8)))}u.danceUntil&&s<u.danceUntil&&!x&&(u.facing+=e*5),u.dance==="spin"&&!x&&!u.sitting&&(u.facing+=e*3.2);let _=!!u.sitting&&!x,M=_&&u.seatKind==="zen",T=_&&u.seatKind==="kneel",w=M?(u.seatH||.2)-.4:T?(u.seatH||.09)-.32:_?Math.max(0,(u.seatH||.45)-.45):0;if(M&&s>(u.zenFx||0)&&(u.zenFx=s+6+Math.random()*5,this.fx(u,["\u{1F9D8}","\u{1F343}","\u2728","\u{1F33F}","\u262F\uFE0F","\u{1F549}\uFE0F"][Math.floor(Math.random()*6)],2200)),T&&s>(u.zenFx||0)){u.zenFx=s+5+Math.random()*4;let y=u.seatTheme==="thantai"?["\u{1F4B0}","\u{1F9E7}","\u{1F4C8}","\u{1F431}","\u{1F4B8}","\u{1F6D2}"]:["\u{1F64F}","\u{1F647}","\u2728","\u{1F4B0}","\u{1F340}"];this.fx(u,y[Math.floor(Math.random()*y.length)],2e3)}u.person.root.position.set(u.pos.x,w,u.pos.z),u.person.blob&&(u.person.blob.position.y=.012-w,u.person.blob.visible=!_||w<.05),u.person.root.rotation.y=u.facing,u.busy&&!x&&!_&&!u.person.action&&Math.random()<e*.15&&u.person.doAction("look",1600),u.keyMove=!1,this.sph.center.set(u.pos.x,w+.8,u.pos.z);let b=u.me||this.frustum.intersectsSphere(this.sph);if(u.onScreen=b,u.animAcc=(u.animAcc||0)+e,!b){u.animAcc=Math.min(u.animAcc,.25),u.person.root.visible&&(u.person.root.visible=!1);continue}let I=!1;if(a&&!u.me&&!u.game&&!u.meet&&!u.person.action&&!u.person.holdCue){this.v1.set(u.pos.x,w,u.pos.z).applyMatrix4(this.projM);let y=this.v1.y;this.v1.set(u.pos.x,w+1.45,u.pos.z).applyMatrix4(this.projM),I=Math.abs(this.v1.y-y)*this.cssH/2<a*(u.lodNow?1.15:1)}if(u.lodNow=I,u.person.root.visible!==!I&&(u.person.root.visible=!I),I){u.animAcc=Math.min(u.animAcc,.25);let y=r*Math.PI,E=u.dance&&!x?u.dance:null;this.crowd.add(u.person,u.pos.x,w,u.pos.z,u.facing,{seated:_,bob:x?Math.abs(Math.sin(s*9))*.035:E?Math.abs(Math.sin(y))*.06:0,wig:E?Math.sin(y*2)*(E==="twerk"?.2:.1):0,lean:E==="twerk"?.4:0,turn:E==="twerk"?Math.PI:0});continue}if(o&&!u.me&&!u.dance&&!x&&(u.person.index||0)%2===0===this.lodTick)continue;let U=Math.min(.1,u.animAcc);u.animAcc=0,u.person.animate(U,s,{moving:x,speed:u.speed,seated:_,typing:_&&!M&&!T&&u.busy&&!u.dance,beat:r,meditate:M,kneel:T})}if(this.crowd.end(),this.npcRing){let u=s*.9%1,[x,_]=this.npcRing.children;x.material.opacity=x.userData.o*(.75+.25*Math.sin(s*3)),_.scale.setScalar(.6+u*.9),_.material.opacity=_.userData.o*(1-u)}if(this.npc){let u=this.npc;u.person.root.position.set(u.pos.x,0,u.pos.z),u.person.root.rotation.y=u.facing,u.person.animate(e,s,{moving:!1,speed:0,seated:!1,typing:!1,beat:r});let x=this.self();x&&Math.hypot(x.pos.x-u.pos.x,x.pos.z-u.pos.z)<2.3&&(!u.greetAt||s-u.greetAt>90)&&(u.greetAt=s,this.npcWave(),this.npcSay(this.opts.npcGreeting?this.opts.npcGreeting():"C\u1EA7n gi\xFAp g\xEC kh\xF4ng? B\u1EA5m v\xE0o m\xECnh nh\xE9 \u{1F44B}"))}let l=this.self(),c=this.onFloor(l)&&!(l&&l.path.length);c!==this.wasFloor&&(this.wasFloor=c,this.opts.onFloor&&this.opts.onFloor(c));let f=this.view,h=this.goal,d=1-Math.exp(-e*10);f.az+=(h.az-f.az)*d,f.el+=(h.el-f.el)*d,f.zoom*=Math.exp((Math.log(h.zoom)-Math.log(f.zoom))*d);let p=this.self(),g=this.follow&&p?{x:p.pos.x,z:p.pos.z}:this.panTo;if(g){let u=1-Math.exp(-e*4.5);f.target.x+=(g.x-f.target.x)*u,f.target.z+=(g.z-f.target.z)*u}this.updateCamera();let v=f.zoom<.7;v!==this.far&&(this.far=v,this.layer.classList.toggle("far",v));let m=this.renderer.shadowMap;m.enabled&&(m.autoUpdate=!1,(this.shadowTick=(this.shadowTick||0)+1)%(this.quality==="high"?2:4)===1&&(m.needsUpdate=!0)),this.renderer.render(this.scene,this.cam),this.cinemaObj&&this.cssRenderer.render(this.cssScene,this.cam),this.placeDom(),this.adapt(t)}adapt(t){let e=this.perf,n=this.slowMode();if(t>1||n!==e.mode||this.bg||this.quality==="high"||this.quality==="light"){e.acc=0,e.n=0,e.mode=n;return}if(e.acc+=t,e.n++,e.acc<2)return;let s=e.acc/e.n;e.acc=0,e.n=0;let r=this.slowMode()?1/30:1/60;s>r*1.4?(e.slow++,e.fast=0,e.dpr>e.min+.01?(e.ceil=e.dpr-.25,e.dpr=Math.max(e.min,e.dpr-.25),this.renderer.setPixelRatio(e.dpr),this.resize()):e.slow>=2&&this.renderer.shadowMap.enabled?(this.renderer.shadowMap.enabled=!1,e.noShadow=!0,this.scene.traverse(o=>{o.material&&[].concat(o.material).forEach(a=>{a.needsUpdate=!0})})):e.slow>=4&&!this.capFps&&(this.capFps=!0,e.slow=0,this.opts.onSlow&&this.opts.onSlow())):(e.slow=0,s<r*1.12&&!this.light&&e.dpr<Math.min(e.ceil,Ps())-.01&&++e.fast>=3&&(e.fast=0,e.dpr=Math.min(e.ceil,Ps(),e.dpr+.25),this.renderer.setPixelRatio(e.dpr),this.resize()))}keyboardMove(t){let e=Math.hypot(this.stick.x,this.stick.y);if(!this.keys.size&&e<.15)return;let n=[...this.people.values()].find(g=>g.me);if(!n)return;let s=0,r=0,o=1;if(e>=.15&&(s=this.stick.x,r=this.stick.y,o=Math.min(1,e)),(this.keys.has("w")||this.keys.has("arrowup"))&&(r-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(s-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(s+=1),!s&&!r)return;let a=this.view.az,l=Math.hypot(s,r),c=(s*Math.cos(a)+r*Math.sin(a))/l,f=(-s*Math.sin(a)+r*Math.cos(a))/l,h=n.pos.x+c*2.4*o*t,d=n.pos.z+f*2.4*o*t;n.path=[],(n.sitting||n.pendingSeat)&&this.standUp(n),(n.dance||n.meet)&&this.stopMoves(n),this.follow=!0,this.nav.isFree(h,d)?(n.pos.x=h,n.pos.z=d):this.nav.isFree(h,n.pos.z)?n.pos.x=h:this.nav.isFree(n.pos.x,d)&&(n.pos.z=d),n.facing=wc(n.facing,Math.atan2(c,f),1-Math.exp(-t*14)),n.keyMove=!0;let p=performance.now();(!this.lastKeySend||p-this.lastKeySend>350)&&(this.lastKeySend=p,this.opts.onMove&&this.opts.onMove({x:n.pos.x,z:n.pos.z,seat:null}))}setStick(t,e){this.poke();let n=Math.hypot(this.stick.x,this.stick.y)>=.15;if(this.stick.x=Number(t)||0,this.stick.y=Number(e)||0,n&&Math.hypot(this.stick.x,this.stick.y)<.15){let s=this.self();s&&this.opts.onMove&&this.opts.onMove({x:s.pos.x,z:s.pos.z,seat:null})}}project(t){let e=t.project(this.cam);return{x:(e.x+1)/2*this.cssW,y:(1-e.y)/2*this.cssH}}placeDom(){let t=this.npc&&this.npc.person?[...this.people.values(),this.npc]:this.people.values(),e=this.people.size>24?new Set([...this.bubbles,...this.emotes].map(s=>s._p).filter(Boolean)):null;for(let s of t){let r=s.onScreen===!1||e&&s.lodNow&&!e.has(s);if(r!==!!s.plateOff&&(s.plateOff=r,s.plate.style.visibility=r?"hidden":""),r)continue;let o=this.project(s.person.headWorld(this.tmpV).setY(this.tmpV.y+.12));s.anchor=o,s.plateH||(s.plateH=s.plate.offsetHeight||34);let a=Math.round(o.x*2)/2,l=Math.round(o.y*2)/2;if(a!==s.tx||l!==s.ty){s.tx=a,s.ty=l,s.plate.style.transform=`translate3d(${a}px, ${l}px, 0) translate(-50%, -100%)`;let c=Math.round(l/6)*6+(s.me?2e3:0);c!==s.z&&(s.z=c,s.plate.style.zIndex=String(c))}}for(let s of this.bubbles){let r=s._p.anchor;if(!r)continue;let o=this.cssW,a=Math.max(120,Math.min(o-120,r.x));s.style.transform=`translate(${a}px, ${r.y-(s._p.plateH||34)-8}px) translate(-50%, -100%)`,s.style.setProperty("--tail",r.x-a+"px")}let n=null;for(let s of this.emotes){if(s._cat){n=n||this.project(this.cat.headWorld(this.tmpV)),s.style.transform=`translate(${n.x}px, ${n.y-8}px) translate(-50%, -100%)`;continue}let r=s._p.anchor;r&&(s.style.transform=`translate(${r.x+24}px, ${r.y-(s._p.plateH||34)-4}px) translate(-50%, -100%)`)}}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.wrap.remove()}},Tc=class{constructor(t){this.root=t;let e=document.createElement("canvas");e.className="avatar-preview",t.appendChild(e),this.canvas=e,this.renderer=$f(e),this.renderer.shadowMap.enabled=!1,this.scene=new mi,Jf(this.scene,512);let n=new O(new Y(.75,.8,.06,40),new Zt({color:"#dbe9fb",roughness:.6}));n.position.y=-.03,this.scene.add(n),this.cam=new je(30,1,.1,50),this.cam.position.set(0,1.25,4.1),this.cam.lookAt(0,.75,0),this.angle=.4,this.dead=!1,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let s=performance.now(),r=o=>{if(this.dead)return;this.raf=requestAnimationFrame(r);let a=Math.min(.05,(o-s)/1e3);s=o,this.person&&(this.angle+=a*.6,this.person.root.rotation.y=Math.sin(this.angle)*.9,this.person.animate(a,o/1e3,{moving:!1,speed:0,seated:!1,typing:!1})),this.renderer.render(this.scene,this.cam)};this.raf=requestAnimationFrame(r)}resize(){let t=this.root.clientWidth||220,e=this.root.clientHeight||260;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}update(t){this.person&&this.scene.remove(this.person.root),this.person=new Hi(Rc(t),0),this.scene.add(this.person.root)}wave(){this.person&&this.person.doAction("wave",1600)}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.canvas.remove()}};gr.ROOM=fe;gr.PLACES=bc;window.Lobby3D=gr;window.avatarToLook=Rc;window.AvatarPreview=Tc;var Ac=(i,t)=>i+Math.random()*(t-i),Ln=i=>i[Math.floor(Math.random()*i.length)],wx=i=>new Promise(t=>setTimeout(t,i));function Kf(i,t,e){let n=((t-i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return i+n*e}var Sx=[["C\xE0 ph\xEA kh\xF4ng? \u2615","Ok, ch\xFAt n\u1EEFa nh\xE9!"],["H\xF4m nay nhi\u1EC1u vi\u1EC7c gh\xEA \u{1F605}","C\u1ED1 l\xEAn n\xE0o!"],["Tr\u1EDDi \u0111\u1EB9p gh\xEA ha \u{1F324}","\u0110\xFAng r\u1ED3i!"],["Tr\u01B0a nay \u0103n g\xEC? \u{1F35C}","Ph\u1EDF \u0111i!"],["Xong vi\u1EC7c ch\u01B0a?","S\u1EAFp r\u1ED3i \u{1F4AA}"],["Ngh\u1EC9 tay 5 ph\xFAt nha","\u{1F44D}"]],jf={cooler:["U\u1ED1ng mi\u1EBFng n\u01B0\u1EDBc \u{1F4A7}","M\xE1t gh\xEA!"],board:["Xem c\xF2n bao nhi\xEAu vi\u1EC7c\u2026","\u1ED4n \xE1p!"],windowL:["Ng\u1EAFm tr\u1EDDi x\xEDu \u{1F324}"],windowR:["N\u1EAFng \u0111\u1EB9p qu\xE1 \u2600\uFE0F"],shelf:["T\xECm cu\u1ED1n s\xE1ch\u2026","\u0110\xE2y r\u1ED3i \u{1F4D8}"],plant:["T\u01B0\u1EDBi c\xE2y ch\xFAt \u{1F331}"]},Cc=class{constructor(t,e){this.root=t,this.opts=e||{},this.people=new Map,this.queue=[],this.busy=!1,this.flyers=[],this.board={wait:0,run:0,done:0},this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas";let s;try{s=new ds({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(c){throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng: "+c.message)}if(!s.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");this.renderer=s,s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=Es,s.toneMapping=sr,s.toneMappingExposure=1.05,s.outputColorSpace=me,s.setClearColor(0,0),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.wrap.append(n,this.layer),t.appendChild(this.wrap),this.canvas=n;let r=new mi;this.scene=r,r.fog=null,this.hemi=new xs("#fff4e0","#7a5a44",.85),r.add(this.hemi),r.add(new _s("#ffffff",.18));let o=new gi("#ffe7c2",2.1);this.sun=o,o.position.set(-5,11,7),o.target.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-10,right:10,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,r.add(o,o.target);let a=new gi("#cfe0ff",.45);a.position.set(8,6,-2),r.add(a),this.world=Uf(r,s,{tet:Po(e&&e.tet)}),this.cam=new pi(-10,10,6,-6,.1,100),this.view={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)},this.goal={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)},this.updateCamera(),this.nav=new bs(Xt.minX,Xt.minZ,Xt.maxX,Xt.maxZ,.2),this.nav.blockRect(Xt.minX,Xt.minZ,Xt.maxX,Xt.minZ+.25,.15),this.nav.blockRect(Xt.minX,Xt.minZ,Xt.minX+.25,Xt.maxZ,.15),this.nav.blockRect(Xt.maxX-.2,Xt.minZ,Xt.maxX,Xt.maxZ,.15),this.nav.blockRect(Xt.minX,Xt.maxZ-.2,Xt.maxX,Xt.maxZ,.15);for(let c of[...yc,...this.world.obstacles||[]])this.nav.blockRect(...c);for(let c of As)this.nav.blockRect(c.x-_e.w/2,c.z-_e.d/2,c.x+_e.w/2,c.z+_e.d/2),this.nav.blockRect(c.x-.28,c.z+cr-.28,c.x+.28,c.z+cr+.28,.18);this.cat=new Ts(r,this.nav),this.confetti=[],this.emotes=new Set,this.applyDaylight(),this.dayT=setInterval(()=>this.applyDaylight(),3e4),this.raycaster=new Ms,this.ndc=new Tt,this.tmpV=new L,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new vs;let l=c=>{if(this.dead)return;this.raf=requestAnimationFrame(l);let f=window.VP_WIN;this.paused||f&&f.minimized||f&&!f.focused&&c-(this.lastTs||0)<80||(this.lastTs=c,this.frame())};l()}updateCamera(){let{az:t,el:e,zoom:n,target:s}=this.view,r=30;this.cam.position.set(s.x+Math.sin(t)*Math.cos(e)*r,s.y+Math.sin(e)*r,s.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(s);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;this.cam.left=-c*l/2,this.cam.right=c*l/2,this.cam.top=c/2,this.cam.bottom=-c/2,this.cam.updateProjectionMatrix()}resetView(){this.goal={az:.72,el:.66,zoom:1,target:new L(0,.6,.2)}}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.updateCamera()}pickDesk(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=this.raycaster.intersectObjects([...this.people.values()].map(r=>r.desk.hit),!1);return s.length&&[...this.people.values()].find(r=>r.desk.hit===s[0].object)||null}pickAny(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let s=[this.cat.root,...[...this.people.values()].map(a=>a.person.root)],r=this.raycaster.intersectObjects(s,!0);for(let a of r){let l=a.object;for(;l&&l.parent&&l.parent!==this.scene;)l=l.parent;if(l===this.cat.root)return{cat:!0};let c=[...this.people.values()].find(f=>f.person.root===l);if(c)return{p:c}}let o=this.pickDesk(t,e);return o?{p:o}:null}setHover(t,e){for(let n of this.people.values()){let s=n.desk.ring.material;n===t?(s.color.set(e==="drop"?"#2f8cf0":"#ffffff"),s.opacity=e==="drop"?.8:.4):n.state==="error"?(s.color.set("#ef6b6b"),s.opacity=.55):n.state==="working"?(s.color.set("#7cc4f5"),s.opacity=.35):s.opacity=0}}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,az:this.goal.az,el:this.goal.el,t:this.goal.target.clone(),pan:n.button===2||n.shiftKey,moved:!1},t.setPointerCapture(n.pointerId)}),t.addEventListener("pointermove",n=>{if(e){let a=n.clientX-e.x,l=n.clientY-e.y;if(Math.hypot(a,l)>4&&(e.moved=!0),!e.moved)return;if(e.pan){let c=(this.cam.right-this.cam.left)/this.canvas.clientWidth,f=new L(Math.cos(this.view.az),0,-Math.sin(this.view.az)),h=new L(Math.sin(this.view.az),0,Math.cos(this.view.az)),d=e.t.clone().addScaledVector(f,-a*c).addScaledVector(h,-l*c*1.4);d.x=Math.max(-6,Math.min(6,d.x)),d.z=Math.max(-4,Math.min(4.5,d.z)),this.goal.target.copy(d)}else this.goal.az=Math.max(.08,Math.min(1.5,e.az-a*.005)),this.goal.el=Math.max(.32,Math.min(1.25,e.el+l*.0035));t.style.cursor="grabbing";return}let s=n.clientX,r=n.clientY,o=()=>{this.hoverAt=performance.now();let a=this.pickAny(s,r);this.setHover(a&&a.p,"hover"),t.style.cursor=a?"pointer":"grab"};clearTimeout(this.hoverTimer),performance.now()-(this.hoverAt||0)>80?o():this.hoverTimer=setTimeout(o,90)}),t.addEventListener("pointerup",n=>{if(e&&!e.moved){let s=this.pickAny(n.clientX,n.clientY);s&&s.cat?this.petCat():s&&s.p&&(this.opts.onPersonClick?this.opts.onPersonClick(s.p.agent.id,n.clientX,n.clientY):this.opts.onDeskClick&&this.opts.onDeskClick(s.p.agent.id))}e=null,t.style.cursor="grab"}),t.addEventListener("pointerleave",()=>{e||this.setHover(null)}),t.addEventListener("dblclick",n=>{this.pickAny(n.clientX,n.clientY)||this.resetView()}),t.addEventListener("wheel",n=>{n.preventDefault(),this.goal.zoom=Math.max(.75,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,n.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dragover",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY);this.setHover(s,"drop"),this.dragTarget=s}),t.addEventListener("dragleave",()=>{this.setHover(null),this.dragTarget=null}),t.addEventListener("drop",n=>{n.preventDefault();let s=this.pickDesk(n.clientX,n.clientY)||this.dragTarget;this.setHover(null);let r=n.dataTransfer.getData("text/vp-card");s&&r&&this.opts.onDrop&&this.opts.onDrop(r,s.agent.id)})}setAgents(t,e){this.sources=e||this.sources;let n=new Set;t.forEach((s,r)=>{let o=s.slot!=null&&As[s.slot]?s.slot:r%As.length,a=As[o],l=this.people.get(s.id),c=JSON.stringify([s.shirt,s.hair,s.skin,s.hairStyle,s.isManager,s.isReviewer,s.source,s.model,o]);if(l&&l.sig!==c&&(this.scene.remove(l.person.root),this.scene.remove(l.desk.group),l.dom.forEach(f=>f.remove()),this.people.delete(s.id),l=null),!l){let f=Nf(this.scene,a,s),h=new Hi(s,r),d={x:a.x,z:a.z+cr};h.root.position.set(d.x,0,d.z),this.scene.add(h.root),l={agent:s,person:h,desk:f,slot:a,seat:d,pos:{...d},path:[],speed:1.6,seated:!0,facing:0,faceTo:null,state:"idle",note:"",nextIdle:performance.now()/1e3+Ac(6,22),activity:null,locks:0,sig:c,dom:[]},l.person.root.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),this.people.set(s.id,l),this.makeDom(l)}l.agent=s,l.person.agent=s,this.updatePlate(l),n.add(s.id)});for(let[s,r]of[...this.people])n.has(s)||(this.scene.remove(r.person.root),this.scene.remove(r.desk.group),r.dom.forEach(o=>o.remove()),this.people.delete(s))}makeDom(t){let e=document.createElement("div");e.className="plate3d",e.innerHTML='<span class="pl-row"><span class="pl-crown">\u{1F451}</span><span class="pl-name"></span><span class="pl-mood"></span><i class="pl-dots"><b></b><b></b><b></b></i><i class="pl-err">!</i></span><span class="pl-sub"><span class="pl-title"></span><span class="pl-src"></span></span><span class="pl-energy"><i style="width:100%"></i></span>',e.title="B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn",e.addEventListener("click",n=>{if(n.detail!==1)return;let s=e.getBoundingClientRect();e._clickT=setTimeout(()=>{e._editing||(this.opts.onPersonClick?this.opts.onPersonClick(t.agent.id,s.left+s.width/2,s.bottom):this.opts.onDeskClick&&this.opts.onDeskClick(t.agent.id))},260)}),e.addEventListener("dblclick",n=>{n.stopPropagation(),clearTimeout(e._clickT),this.inlineRename(t,e)}),e.addEventListener("dragover",n=>{n.preventDefault(),this.setHover(t,"drop")}),e.addEventListener("drop",n=>{n.preventDefault(),this.setHover(null);let s=n.dataTransfer.getData("text/vp-card");s&&this.opts.onDrop&&this.opts.onDrop(s,t.agent.id)}),this.layer.append(e),t.plate=e,t.dom=[e]}inlineRename(t,e){if(e._editing)return;e._editing=!0;let n=e.querySelector(".pl-name"),s=document.createElement("input");s.className="rename3d",s.value=t.agent.name,s.maxLength=30,n.replaceWith(s),s.focus(),s.select();let r=o=>{if(!e._editing)return;e._editing=!1,s.replaceWith(n);let a=s.value.trim();o&&a&&a!==t.agent.name&&this.opts.onRename&&this.opts.onRename(t.agent.id,a)};s.addEventListener("keydown",o=>{o.key==="Enter"&&r(!0),o.key==="Escape"&&r(!1),o.stopPropagation()}),s.addEventListener("blur",()=>r(!0)),s.addEventListener("click",o=>o.stopPropagation())}updatePlate(t){let e=t.agent;t.plate.querySelector(".pl-name").textContent=e.name,t.plate.querySelector(".pl-title").textContent=(e.isManager?"\u2605 ":"")+e.title;let n=t.plate.querySelector(".pl-src");n.className="pl-src src-"+(e.source||"sim").split("-")[0],n.textContent=window.shortSource?window.shortSource(e.source,e.model):e.source,t.plate.title=`${e.name} \u2013 ${e.title}${e.model?`
`+e.model:""}
B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn`,t.plateH=0}setBoard(t){this.board={...this.board,...t},this.world.drawBoard(this.board)}setStats(t,e){let n=this.people.get(t);if(!n)return;n.energy=e.energy,n.plate.classList.toggle("crowned",!!e.crown),n.plate.querySelector(".pl-mood").textContent=e.emoji||"";let s=n.plate.querySelector(".pl-energy");s.classList.toggle("low",e.energy<30),s.firstChild.style.width=Math.max(4,e.energy)+"%",n.plateH=0}setDecor(t){this.world.setDecor&&this.world.setDecor(t)}async interact(t,e){let n=this.people.get(t);if(!n)return!1;let s=n.state==="working"||n.locks>0,r=(o,a=3e3)=>this.say(n,o,"cute",a);return e==="wave"?(n.person.doAction("wave",2200),this.emote(n,"\u{1F44B}"),await r(Ln(s?["Em \u0111ang l\xE0m n\xE8 s\u1EBFp \u{1F4AA}","D\u1EA1, ch\xFAt em xong ngay \u1EA1!"]:["D\u1EA1 s\u1EBFp g\u1ECDi em? \u{1F60A}","Ch\xE0o s\u1EBFp \u1EA1! \u{1F44B}","H\xF4m nay s\u1EBFp kh\u1ECFe kh\xF4ng \u1EA1?","Em s\u1EB5n s\xE0ng nh\u1EADn vi\u1EC7c n\xE8!"])),!0):e==="praise"?(n.person.doAction("cheer",2200),this.emote(n,"\u{1F496}"),setTimeout(()=>this.emote(n,"\u2728"),350),await r(Ln(["Hihi c\u1EA3m \u01A1n s\u1EBFp! \u{1F970}","Em s\u1EBD c\u1ED1 g\u1EAFng h\u01A1n n\u1EEFa \u1EA1!","S\u1EBFp khen l\xE0m em vui c\u1EA3 ng\xE0y \u{1F606}"])),!0):e==="dance"?s?(this.emote(n,"\u{1F605}"),await r("\u0110ang l\xE0m vi\u1EC7c, x\xEDu em nh\u1EA3y sau nha!"),!1):(n.person.doAction("dance",3200),n.danceUntil=performance.now()/1e3+3.2,this.emote(n,"\u{1F3B5}"),setTimeout(()=>this.emote(n,"\u{1F3B6}"),900),await r(Ln(["La la la~ \u{1F483}","Nh\u1EA1c l\xEAn n\xE0o! \u{1F57A}","T\u0103ng ca kh\xF4ng b\u1EB1ng t\u0103ng vui \u{1F60E}"]),2600),!0):e==="coffee"?s?(this.emote(n,"\u2615"),await r("Xong vi\u1EC7c em u\u1ED1ng li\u1EC1n nha s\u1EBFp \u2615"),!1):(n.activity&&await this.recall(n),this.emote(n,"\u2615"),r("D\u1EA1 em c\u1EA3m \u01A1n s\u1EBFp! \u2615",1600),await this.runActivity(n,"coffee"),!0):!1}petCat(){this.cat.pet();let t=()=>this.project(this.cat.headWorld(this.tmpV2||(this.tmpV2=new L)));this.emoteAt(t,Ln(["\u{1F495}","\u{1F497}","\u{1F63B}"])),setTimeout(()=>this.emoteAt(t,Ln(["Meo~","Meoww \u{1F495}","R\u1EEB r\u1EEB\u2026"])),300),this.opts.onCat&&this.opts.onCat()}emoteAt(t,e){let n=document.createElement("div");n.className="emote"+(e.length>2?" txt":""),n.textContent=e,n._get=t,e.length>2&&Object.assign(n.style,{fontSize:"13px",fontWeight:"900",color:"#0656b8",background:"#e8f3ff",border:"2px solid #45a2ff",borderRadius:"12px",padding:"2px 8px"}),this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}setTray(t){this.trayCount=t,this.world.setTray(t)}setState(t,e,n){let s=this.people.get(t);s&&(s.state=e,s.note=n||"",s.desk.state=e==="working"?"working":e==="error"?"error":"idle",Do(s.desk,this.t||0,!0),s.plate.classList.toggle("working",e==="working"),s.plate.classList.toggle("error",e==="error"),s.plateH=0,s.plate.title=e==="error"&&n?"L\u1ED7i: "+n:"B\u1EA5m: c\u1EA5u h\xECnh b\xE0n \xB7 B\u1EA5m \u0111\xFAp: \u0111\u1ED5i t\xEAn",e==="working"&&!s.seated&&!s.locks&&this.recall(s),this.setHover(null))}move(t,e,n){if(t.moveRes){let s=t.moveRes;t.moveRes=null,s(!1)}return t.path=e.slice(),t.speed=n,t.seated=!1,t.faceTo=null,t.path.length?new Promise(s=>{t.moveRes=s}):Promise.resolve(!0)}exitPoint(t,e){let n=e>=t.seat.x?1:-1;return{x:t.seat.x+n*1.2,z:t.seat.z}}walkTo(t,e,n){let s=[],r={x:t.pos.x,z:t.pos.z};if(t.seated||Math.hypot(t.pos.x-t.seat.x,t.pos.z-t.seat.z)<.15){let a=this.exitPoint(t,e.x);s.push(a),r=a}s.push(...this.nav.find(r,e));let o=this.move(t,s,n?3.4:1.7);return t.faceAfter=e.face||null,o}async walkHome(t,e){let n=this.exitPoint(t,t.pos.x),s=[...this.nav.find(t.pos,n),{x:t.seat.x,z:t.seat.z}];t.faceAfter=null;let r=await this.move(t,s,e?3.4:1.7);return r&&(t.seated=!0),r}async recall(t){t.activity&&(t.activity.abort=!0),t.seated||await this.walkHome(t,!0)}enqueue(t){this.queue.push(t),this.busy||this.runQueue()}async runQueue(){for(this.busy=!0;this.queue.length;){let t=this.queue.shift(),e=this.queue.length>=3;try{await this.scene_(t,e)}catch(n){console.error(n)}}this.busy=!1}async scene_(t,e){let n=this.people.get(t.from),s=this.people.get(t.to),r=e?1300:Math.min(4200,1700+t.text.length*15);if(t.from==="boss"&&s){s.locks++;try{s.activity&&await this.recall(s),await this.fly(new L(lr.x,1.6,lr.z+.3),s.person.headWorld(new L).add(new L(0,.3,0)),e?450:1e3),this.emote(s,"\u{1F4CC}"),await this.say(s,"\u{1F4E9} "+t.text,"assign",r)}finally{s.locks--}return}if(n){n.locks++;try{if(n.activity&&await this.recall(n),n.homeP&&await n.homeP,t.to==="boss"){t.kind==="done"?(n.person.carrying=!0,await this.walkTo(n,Lo.tray,e),n.person.doAction("place",900),await wx(e?400:800),this.emote(n,"\u2705"),n.person.carrying=!1,this.world.setTray((this.trayCount||0)+1),this.trayCount=(this.trayCount||0)+1,await this.say(n,t.text,"done",e?1e3:2400),n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})):(t.kind==="plan"&&this.emote(n,"\u{1F4A1}"),await this.say(n,t.text,t.kind,r));return}if(s&&s!==n){s.locks++;try{s.activity&&await this.recall(s),s.homeP&&await s.homeP;let o=n.slot.x<=s.slot.x?-1:1,a={x:s.slot.x+o*.62,z:s.slot.z+_e.d/2+.55,face:{x:s.seat.x,z:s.seat.z}};await this.walkTo(n,a,e);let l={ask:"\u2753",answer:"\u{1F4AC}",review:/cần sửa/i.test(t.text)?"\u270F\uFE0F":"\u{1F44D}",assign:"\u{1F4CB}",done:"\u{1F4E6}"}[t.kind];l&&this.emote(n,l),await this.say(n,t.text,t.kind,r)}finally{s.locks--}n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})}else await this.say(n,t.text,t.kind,r)}finally{n.locks--}}}fly(t,e,n){return new Promise(s=>{let r=new Dt,o=new O(new Mt(.34,.03,.24),new Zt({color:"#fffaf0",roughness:.8})),a=new O(new Y(.04,.04,.01,12),new Zt({color:"#d9534f"}));a.position.y=.02,r.add(o,a),r.traverse(l=>{l.castShadow=!0}),this.scene.add(r),this.flyers.push({obj:r,a:t,b:e,t0:performance.now(),ms:n,res:s})})}say(t,e,n,s){return new Promise(r=>{let o=document.createElement("div");o.className="bubble3d k-"+(n||"say"),o.style.zIndex="5000",o.textContent=e.length>120?e.slice(0,119)+"\u2026":e,o._p=t,this.layer.appendChild(o),this.bubbles=this.bubbles||new Set,this.bubbles.add(o),t.person.say(Math.min(s,2600)),this.positionBubble(o),requestAnimationFrame(()=>o.classList.add("show")),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(o),o.remove()},220),r()},s)})}idleTick(t){let e=[...this.people.values()].some(n=>n.state==="working");for(let n of this.people.values()){if(n.activity||n.locks||!n.seated||n.state==="working"||n.homeP||t<n.nextIdle||(n.nextIdle=t+(e?Ac(25,55):Ac(12,32)),this.queue.length||e&&Math.random()<.5))continue;if(n.energy!=null&&n.energy<25&&!e){this.emote(n,"\u{1F62A}"),this.runActivity(n,"coffee");continue}let s=Math.random();if([...this.people.values()].filter(o=>o.activity).length>=2&&s>=.38){n.person.doAction(Math.random()<.5?"stretch":"look",2600);continue}s<.22?n.person.doAction("stretch",2600):s<.38?n.person.doAction("look",3e3):s<.62?this.runActivity(n,"poi"):this.runActivity(n,"chat")}}async runActivity(t,e){let n={abort:!1};t.activity=n;try{if(e==="coffee"){if(!await this.walkTo(t,Lo.cooler,!1)||n.abort)return;t.person.doAction("drink",2600),await this.say(t,Ln(["C\xE0 ph\xEA ngon qu\xE1 \u2615","N\u1EA1p n\u0103ng l\u01B0\u1EE3ng th\xF4i! \u26A1","T\u1EC9nh c\u1EA3 ng\u01B0\u1EDDi \u{1F606}"]),"chat",2400),this.emote(t,"\u26A1"),this.opts.onStat&&this.opts.onStat(t.agent.id,"coffee");return}if(e==="chat"){let s=[...this.people.values()].filter(f=>f!==t&&f.seated&&!f.activity&&f.state!=="working"&&!f.locks);if(!s.length)return;let r=Ln(s),o=t.slot.x<=r.slot.x?-1:1;if(!await this.walkTo(t,{x:r.slot.x+o*.62,z:r.slot.z+_e.d/2+.55,face:{x:r.seat.x,z:r.seat.z}},!1)||n.abort)return;let[l,c]=Ln(Sx);if(await this.say(t,l,"chat",2200),n.abort)return;r.state!=="working"&&!r.locks&&await this.say(r,c,"chat",1800)}else{let s=Ln(Object.keys(jf)),r=Lo[s];if(!await this.walkTo(t,r,!1)||n.abort)return;let a=jf[s];if(s==="cooler"?(t.person.doAction("drink",2600),await this.say(t,a[0],"chat",2e3)):s==="plant"?(t.person.doAction("place",1800),await this.say(t,a[0],"chat",1900)):(t.person.doAction("look",2400),await this.say(t,a[0],"chat",2200)),n.abort)return;a[1]&&Math.random()<.6&&await this.say(t,a[1],"chat",1400)}}finally{t.activity===n&&(t.activity=null,!n.abort&&!t.seated&&await this.walkHome(t,!1))}}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t;for(let a of this.world.animated)a(e,t);let n=performance.now()/1e3;this.idleTick(n),this.cat.update(t,n),this.updateConfetti(t);for(let a of this.people.values()){let l=!1;if(a.path.length){let c=a.path[0],f=c.x-a.pos.x,h=c.z-a.pos.z,d=Math.hypot(f,h),p=a.speed*t;if(d<=p){if(a.pos.x=c.x,a.pos.z=c.z,a.path.shift(),!a.path.length&&(a.faceAfter&&(a.faceTo=a.faceAfter),a.moveRes)){let g=a.moveRes;a.moveRes=null,g(!0)}}else a.pos.x+=f/d*p,a.pos.z+=h/d*p;d>.001&&(a.facing=Kf(a.facing,Math.atan2(f,h),1-Math.exp(-t*12))),l=a.path.length>0||d>p}else{let c=null;a.seated?c=0:a.faceTo&&(c=Math.atan2(a.faceTo.x-a.pos.x,a.faceTo.z-a.pos.z)),c!==null&&(a.facing=Kf(a.facing,c,1-Math.exp(-t*8)))}a.danceUntil&&n<a.danceUntil&&!l&&(a.facing+=t*5),a.person.root.position.set(a.pos.x,0,a.pos.z),a.person.root.rotation.y=a.facing,a.person.animate(t,n,{moving:l,speed:a.speed,seated:a.seated&&!a.path.length,typing:a.seated&&a.state==="working"}),a.desk.state==="working"&&Math.floor(e*10)!==Math.floor((e-t)*10)&&Do(a.desk,e)}for(let a of[...this.flyers]){let l=Math.min(1,(performance.now()-a.t0)/a.ms),c=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;a.obj.position.lerpVectors(a.a,a.b,c),a.obj.position.y+=Math.sin(l*Math.PI)*1.4,a.obj.rotation.set(Math.sin(l*9)*.3,l*6,0),l>=1&&(this.scene.remove(a.obj),this.flyers.splice(this.flyers.indexOf(a),1),a.res())}let s=this.view,r=this.goal,o=1-Math.exp(-t*10);Math.abs(r.az-s.az)+Math.abs(r.el-s.el)+Math.abs(r.zoom-s.zoom)+s.target.distanceTo(r.target)>1e-4&&(s.az+=(r.az-s.az)*o,s.el+=(r.el-s.el)*o,s.zoom*=Math.exp((Math.log(r.zoom)-Math.log(s.zoom))*o),s.target.lerp(r.target,o),this.updateCamera()),this.renderer.render(this.scene,this.cam),this.placeDom()}project(t){let e=t.clone().project(this.cam);return{x:(e.x+1)/2*this.canvas.clientWidth,y:(1-e.y)/2*this.canvas.clientHeight}}positionBubble(t){let e=t._p,n=e.spot||e.anchor||this.project(e.person.headWorld(this.tmpV)),s=n.y-(e.plateH||34)-10,r=this.canvas.clientWidth,o=Math.max(130,Math.min(r-130,n.x));t.style.transform=`translate(${o}px, ${s}px) translate(-50%, -100%)`,t.style.setProperty("--tail",n.x-o+"px")}placeDom(){let t=[];for(let n of this.people.values()){let s=n.person.headWorld(this.tmpV);s.y+=.12,n.anchor=this.project(s),n.plateH||(n.plateH=n.plate.offsetHeight||34,n.plateW=n.plate.offsetWidth||90),t.push(n)}let e=xf(t.map(n=>({p:n,x:n.anchor.x,y:n.anchor.y,w:n.plateW,h:n.plateH,prev:n.dodge})));for(let{p:n,x:s,y:r}of e){n.dodge={x:s-n.anchor.x,y:r-n.anchor.y},n.spot={x:s,y:r};let o=Math.round(s*2)/2,a=Math.round(r*2)/2,l=Math.round(n.anchor.x-o),c=Math.round(n.anchor.y-a);if(o!==n.tx||a!==n.ty||l!==n.ldx||c!==n.ldy){n.tx=o,n.ty=a,n.ldx=l,n.ldy=c,n.plate.style.transform=`translate3d(${o}px, ${a}px, 0) translate(-50%, -100%)`,n.plate.style.zIndex=String(Math.round(n.anchor.y));let f=Math.hypot(l,c);n.plate.classList.toggle("moved",f>6),f>6&&(n.plate.style.setProperty("--ll",f.toFixed(1)+"px"),n.plate.style.setProperty("--la",(Math.atan2(-l,c)*180/Math.PI).toFixed(1)+"deg"))}}if(this.bubbles)for(let n of this.bubbles)this.positionBubble(n);for(let n of this.emotes){if(n._get){let r=n._get();n.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`;continue}let s=n._p.spot||n._p.anchor;s&&(n.style.transform=`translate(${s.x+26}px, ${s.y-(n._p.plateH||34)-4}px) translate(-50%, -100%)`)}}emote(t,e){let n=document.createElement("div");n.className="emote",n.textContent=e,n._p=t,this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}celebrate(t){let e=["#f5b54a","#5fd69a","#7cc4f5","#f07070","#b896f0","#ffffff"],n=new ne(.07,.04),s=new L(5.6,1,4.15),r=t&&this.people.get(t),o=[s];r&&o.push(new L(r.pos.x,1.6,r.pos.z));for(let a of o)for(let l=0;l<70;l++){let c=new O(n,new se({color:e[l%e.length],side:ge}));c.position.copy(a);let f=Math.random()*Math.PI*2,h=1.2+Math.random()*2.2;c.userData={v:new L(Math.cos(f)*h*.6,3+Math.random()*2.5,Math.sin(f)*h*.6),r:new L(Math.random()*8,Math.random()*8,Math.random()*8),life:2.6+Math.random()},this.scene.add(c),this.confetti.push(c)}for(let a of this.people.values())a.state!=="working"&&setTimeout(()=>{a.person.doAction("cheer",2200),this.emote(a,Ln(["\u{1F389}","\u{1F44F}","\u{1F973}","\u{1F64C}"]))},Math.random()*500)}updateConfetti(t){for(let e=this.confetti.length-1;e>=0;e--){let n=this.confetti[e],s=n.userData;s.v.y-=6.5*t,s.v.multiplyScalar(1-t*.9),n.position.addScaledVector(s.v,t),n.rotation.x+=s.r.x*t,n.rotation.y+=s.r.y*t,n.rotation.z+=s.r.z*t,n.position.y<.02&&(n.position.y=.02,s.v.set(0,0,0),s.r.set(0,0,0),n.rotation.set(-Math.PI/2,0,n.rotation.z)),s.life-=t,s.life<.6&&(n.material.opacity=Math.max(0,s.life/.6),n.material.transparent=!0),s.life<=0&&(this.scene.remove(n),n.material.dispose(),this.confetti.splice(e,1))}}applyDaylight(t){let e=new Date,n=t??e.getHours()+e.getMinutes()/60,s=n<5||n>19.5?0:n<7?(n-5)/2:n>17.5?(19.5-n)/2:1,r=Math.max(0,1-Math.abs(n-17.8)/1.6)+Math.max(0,1-Math.abs(n-6.2)/1.2),o=new Yt("#ffe7c2").lerp(new Yt("#ffae6b"),Math.min(1,r));this.sun.color.copy(o),this.sun.intensity=.25+1.85*s,this.hemi.intensity=.4+.45*s,this.hemi.color.set(s>.3?"#fff4e0":"#b9c4ff");let a=new Yt("#1c2448").lerp(new Yt("#ffffff"),s).lerp(new Yt("#ffc59a"),Math.min(.6,r*(s>0?.6:0)));for(let c of this.world.skyMats||[])c.color.copy(a);let l=1-s;for(let c of this.world.lamps||[])c.light.intensity=l*6,c.bulbMat.emissiveIntensity=.2+l*2.2;this.world.dust&&(this.world.dust.material.opacity=.15+.45*s),this.renderer.toneMappingExposure=.95+.12*s}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),clearInterval(this.dayT),this.renderer.dispose(),this.wrap.remove()}};window.Office3D=Cc;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
