(()=>{var dl="169";var Fh=0,Nl=1,Bh=2;var rs=1,zh=2,Rn=3,Wn=0,Ye=1,Ae=2,_n=0,Hi=1,yr=2,Ol=3,Fl=4,Hh=5,ai=100,kh=101,Gh=102,Vh=103,Wh=104,Xh=200,qh=201,Yh=202,Zh=203,Ho=204,ko=205,$h=206,Jh=207,Kh=208,Qh=209,jh=210,tu=211,eu=212,nu=213,iu=214,Go=0,Vo=1,Wo=2,Wi=3,Xo=4,qo=5,Yo=6,Zo=7,Vc=0,su=1,ru=2,Vn=0,ou=1,au=2,lu=3,Ds=4,cu=5,hu=6,uu=7;var Wc=300,Xi=301,qi=302,$o=303,Jo=304,Gr=306,Xn=1e3,hi=1001,Ko=1002,qe=1003,du=1004;var ks=1005;var hn=1006,io=1007;var ui=1008;var Pn=1009,Xc=1010,qc=1011,Ss=1012,fl=1013,di=1014,xn=1015,Us=1016,pl=1017,ml=1018,Yi=1020,Yc=35902,Zc=1021,$c=1022,un=1023,Jc=1024,Kc=1025,ki=1026,Zi=1027,gl=1028,xl=1029,Qc=1030,_l=1031;var yl=1033,fr=33776,pr=33777,mr=33778,gr=33779,Qo=35840,jo=35841,ta=35842,ea=35843,na=36196,ia=37492,sa=37496,ra=37808,oa=37809,aa=37810,la=37811,ca=37812,ha=37813,ua=37814,da=37815,fa=37816,pa=37817,ma=37818,ga=37819,xa=37820,_a=37821,xr=36492,ya=36494,va=36495,jc=36283,Ma=36284,Ea=36285,Sa=36286;var vr=2300,wa=2301,so=2302,Bl=2400,zl=2401,Hl=2402;var fu=3200,pu=3201;var th=0,mu=1,Gn="",Se="srgb",jn="srgb-linear",vl="display-p3",Vr="display-p3-linear",Mr="linear",me="srgb",Er="rec709",Sr="p3";var wi=7680;var kl=519,gu=512,xu=513,_u=514,eh=515,yu=516,vu=517,Mu=518,Eu=519,Gl=35044;var Vl="300 es",Cn=2e3,wr=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ro=Math.PI/180,ba=180/Math.PI;function Ns(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function Su(s,t){return(s%t+t)%t}function oo(s,t,e){return(1-e)*s+e*t}function hs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _t=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],v=i[4],w=i[7],P=i[2],b=i[5],T=i[8];return r[0]=o*_+a*y+l*P,r[3]=o*m+a*v+l*b,r[6]=o*f+a*w+l*T,r[1]=c*_+h*y+u*P,r[4]=c*m+h*v+u*b,r[7]=c*f+h*w+u*T,r[2]=d*_+p*y+g*P,r[5]=d*m+p*v+g*b,r[8]=d*f+p*w+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ao=new Jt;function nh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wu(){let s=ws("canvas");return s.style.display="block",s}var Wl={};function _r(s){s in Wl||(Wl[s]=!0,console.warn(s))}function bu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tu(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Au(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xl=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[jn]:{transfer:Mr,primaries:Er,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Se]:{transfer:me,primaries:Er,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Vr]:{transfer:Mr,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ql),fromReference:s=>s.applyMatrix3(Xl)},[vl]:{transfer:me,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ql),fromReference:s=>s.applyMatrix3(Xl).convertLinearToSRGB()}},Ru=new Set([jn,Vr]),ce={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ru.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=us[t].toReference,i=us[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return us[s].primaries},getTransfer:function(s){return s===Gn?Mr:us[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(us[t].luminanceCoefficients)}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var bi,Ta=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=ws("canvas")),bi.width=t.width,bi.height=t.height;let n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cu=0,br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(co(i[o].image)):r.push(co(i[o]))}else r=co(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ta.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pu=0,We=class s extends qn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=hi,i=hi,r=hn,o=ui,a=un,l=Pn,c=s.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ns(),this.name="",this.source=new br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Wc;We.DEFAULT_ANISOTROPY=1;var ue=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(p+1)/2,P=(f+1)/2,b=(h+d)/4,T=(u+_)/4,C=(g+m)/4;return v>w&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=T/n):w>P?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=b/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Aa=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let P=Math.sqrt(v),b=Math.atan2(P,f*y);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}let w=a*y;if(l=l*m+d*w,c=c*m+p*w,h=h*m+g*w,u=u*m+_*w,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho=new R,Yl=new yn,Ln=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Vs.subVectors(this.max,ds),Ti.subVectors(t.a,ds),Ai.subVectors(t.b,ds),Ri.subVectors(t.c,ds),On.subVectors(Ai,Ti),Fn.subVectors(Ri,Ai),ti.subVectors(Ti,Ri);let e=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-ti.z,ti.y,On.z,0,-On.x,Fn.z,0,-Fn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-ti.y,ti.x,0];return!uo(e,Ti,Ai,Ri,Vs)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,Ti,Ai,Ri,Vs))?!1:(Ws.crossVectors(On,Fn),e=[Ws.x,Ws.y,Ws.z],uo(e,Ti,Ai,Ri,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Sn=[new R,new R,new R,new R,new R,new R,new R,new R],on=new R,Gs=new Ln,Ti=new R,Ai=new R,Ri=new R,On=new R,Fn=new R,ti=new R,ds=new R,Vs=new R,Ws=new R,ei=new R;function uo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);let a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Iu=new Ln,fs=new R,fo=new R,Yn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Iu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(fo)),this.expandByPoint(fs.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new R,po=new R,Xs=new R,Bn=new R,mo=new R,qs=new R,go=new R,bs=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){po.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(po);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xs),a=Bn.dot(this.direction),l=-Bn.dot(Xs),c=Bn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(po).addScaledVector(Xs,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,i,r){mo.subVectors(e,t),qs.subVectors(n,t),go.crossVectors(mo,qs);let o=this.direction.dot(go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);let l=a*this.direction.dot(qs.crossVectors(Bn,qs));if(l<0)return null;let c=a*this.direction.dot(mo.cross(Bn));if(c<0||l+c>o)return null;let h=-a*Bn.dot(go);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,n){let i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),zn.crossVectors(n,Ke),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),zn.crossVectors(n,Ke)),zn.normalize(),Ys.crossVectors(Ke,zn),i[0]=zn.x,i[4]=Ys.x,i[8]=Ke.x,i[1]=zn.y,i[5]=Ys.y,i[9]=Ke.y,i[2]=zn.z,i[6]=Ys.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],w=n[11],P=n[15],b=i[0],T=i[4],C=i[8],q=i[12],x=i[1],E=i[5],k=i[9],B=i[13],H=i[2],tt=i[6],X=i[10],it=i[14],Z=i[3],yt=i[7],gt=i[11],bt=i[15];return r[0]=o*b+a*x+l*H+c*Z,r[4]=o*T+a*E+l*tt+c*yt,r[8]=o*C+a*k+l*X+c*gt,r[12]=o*q+a*B+l*it+c*bt,r[1]=h*b+u*x+d*H+p*Z,r[5]=h*T+u*E+d*tt+p*yt,r[9]=h*C+u*k+d*X+p*gt,r[13]=h*q+u*B+d*it+p*bt,r[2]=g*b+_*x+m*H+f*Z,r[6]=g*T+_*E+m*tt+f*yt,r[10]=g*C+_*k+m*X+f*gt,r[14]=g*q+_*B+m*it+f*bt,r[3]=y*b+v*x+w*H+P*Z,r[7]=y*T+v*E+w*tt+P*yt,r[11]=y*C+v*k+w*X+P*gt,r[15]=y*q+v*B+w*it+P*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,w=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,b=e*y+n*v+i*w+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=y*T,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*T,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*T,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*T,t[4]=v*T,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*T,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*T,t[8]=w*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=P*T,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=l*c,v=l*h,w=l*u,P=n.x,b=n.y,T=n.z;return i[0]=(1-(_+f))*P,i[1]=(p+w)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(p-w)*b,i[5]=(1-(d+f))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+v)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ci.set(i[0],i[1],i[2]).length(),o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);let c=1/r,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Cn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(a===Cn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Cn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h,g,_;if(a===Cn)g=(o+r)*u,_=-2*u;else if(a===wr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new R,an=new te,Lu=new R(0,0,0),Du=new R(1,1,1),zn=new R,Ys=new R,Ke=new R,Zl=new te,$l=new yn,vn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uu=0,Jl=new R,Pi=new yn,bn=new te,Zs=new R,ps=new R,Nu=new R,Ou=new yn,Kl=new R(1,0,0),Ql=new R(0,1,0),jl=new R(0,0,1),tc={type:"added"},Fu={type:"removed"},Ii={type:"childadded",child:null},xo={type:"childremoved",child:null},Ne=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new vn,n=new yn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Ql,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Ql,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ps,Zs,this.up):bn.lookAt(Zs,ps,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(bn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fu),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new R,Tn=new R,_o=new R,An=new R,Li=new R,Di=new R,ec=new R,yo=new R,vo=new R,Mo=new R,Eo=new ue,So=new ue,wo=new ue,li=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Tn.subVectors(n,e),_o.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(Tn),l=ln.dot(_o),c=Tn.dot(Tn),h=Tn.dot(_o),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Eo.setScalar(0),So.setScalar(0),wo.setScalar(0),Eo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),wo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Eo,r.x),o.addScaledVector(So,r.y),o.addScaledVector(wo,r.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Tn.subVectors(t,e),ln.cross(Tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Li.subVectors(i,n),Di.subVectors(r,n),yo.subVectors(t,n);let l=Li.dot(yo),c=Di.dot(yo);if(l<=0&&c<=0)return e.copy(n);vo.subVectors(t,i);let h=Li.dot(vo),u=Di.dot(vo);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Li,o);Mo.subVectors(t,r);let p=Li.dot(Mo),g=Di.dot(Mo);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ec.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(ec,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function bo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Su(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ce.fromWorkingColorSpace(ke.copy(this),t),Math.round(Fe(ke.r*255,0,255))*65536+Math.round(Fe(ke.g*255,0,255))*256+Math.round(Fe(ke.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,i=ke.g,r=ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Se){ce.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,i=ke.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL($s);let n=oo(Hn.h,$s.h,e),i=oo(Hn.s,$s.s,e),r=oo(Hn.l,$s.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Vt;Vt.NAMES=ih;var Bu=0,Zn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Hi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=ko,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fe=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new R,Js=new _t,Be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var Ar=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},zu=0,en=new te,To=new Ne,Ui=new R,Qe=new Ln,ms=new Ln,Ue=new R,Re=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?Rr:Ar)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(Qe.min,ms.min),Qe.expandByPoint(Ue),Ue.addVectors(Qe.max,ms.max),Qe.expandByPoint(Ue)):(Qe.expandByPoint(ms.min),Qe.expandByPoint(ms.max))}Qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),Ue.add(Ui)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;let c=new R,h=new R,u=new R,d=new _t,p=new _t,g=new _t,_=new R,m=new R;function f(C,q,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,q),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),a[C].add(_),a[q].add(_),a[x].add(_),l[C].add(m),l[q].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,q=y.length;C<q;++C){let x=y[C],E=x.start,k=x.count;for(let B=E,H=E+k;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new R,w=new R,P=new R,b=new R;function T(C){P.fromBufferAttribute(i,C),b.copy(P);let q=a[C];v.copy(q),v.sub(P.multiplyScalar(P.dot(q))).normalize(),w.crossVectors(b,q);let E=w.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,E)}for(let C=0,q=y.length;C<q;++C){let x=y[C],E=x.start,k=x.count;for(let B=E,H=E+k;B<H;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nc=new te,ni=new bs,Ks=new Yn,ic=new R,Qs=new R,js=new R,tr=new R,Ao=new R,er=new R,sc=new R,nr=new R,j=class extends Ne{constructor(t=new Re,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ao.fromBufferAttribute(u,t),o?er.addScaledVector(Ao,h):er.addScaledVector(Ao.sub(e),h))}e.add(er)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Ks.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ks,ic)===null||ni.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),ni.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,P=v;w<P;w+=3){let b=a.getX(w),T=a.getX(w+1),C=a.getX(w+2);i=ir(this,f,t,n,c,h,u,b,T,C),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=a.getX(m),v=a.getX(m+1),w=a.getX(m+2);i=ir(this,o,t,n,c,h,u,y,v,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,P=v;w<P;w+=3){let b=w,T=w+1,C=w+2;i=ir(this,f,t,n,c,h,u,b,T,C),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=m,v=m+1,w=m+2;i=ir(this,o,t,n,c,h,u,y,v,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Hu(s,t,e,n,i,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Wn,a),l===null)return null;nr.copy(a),nr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(nr);return c<e.near||c>e.far?null:{distance:c,point:nr.clone(),object:s}}function ir(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Qs),s.getVertexPosition(l,js),s.getVertexPosition(c,tr);let h=Hu(s,t,e,n,Qs,js,tr,sc);if(h){let u=new R;li.getBarycoord(sc,Qs,js,tr,u),i&&(h.uv=li.getInterpolatedAttribute(i,a,l,c,u,new _t)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new _t)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};li.getNormal(Qs,js,tr,d.normal),h.face=d,h.barycoord=u}return h}var Mt=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,f,y,v,w,P,b,T,C,q){let x=w/T,E=P/C,k=w/2,B=P/2,H=b/2,tt=T+1,X=C+1,it=0,Z=0,yt=new R;for(let gt=0;gt<X;gt++){let bt=gt*E-B;for(let Qt=0;Qt<tt;Qt++){let Kt=Qt*x-k;yt[_]=Kt*y,yt[m]=bt*v,yt[f]=H,c.push(yt.x,yt.y,yt.z),yt[_]=0,yt[m]=0,yt[f]=b>0?1:-1,h.push(yt.x,yt.y,yt.z),u.push(Qt/T),u.push(1-gt/C),it+=1}}for(let gt=0;gt<C;gt++)for(let bt=0;bt<T;bt++){let Qt=d+bt+tt*gt,Kt=d+bt+tt*(gt+1),J=d+(bt+1)+tt*(gt+1),st=d+(bt+1)+tt*gt;l.push(Qt,Kt,st),l.push(Kt,J,st),Z+=6}a.addGroup(p,Z,q),p+=Z,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){let t={};for(let e=0;e<s.length;e++){let n=$i(s[e]);for(let i in n)t[i]=n[i]}return t}function ku(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function sh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Gu={clone:$i,merge:Ve},Vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new R,rc=new _t,oc=new _t,Ge=class extends Cr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ro*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ni=-90,Oi=1,Ca=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ge(Ni,Oi,t,e);i.layers=this.layers,this.add(i);let r=new Ge(Ni,Oi,t,e);r.layers=this.layers,this.add(r);let o=new Ge(Ni,Oi,t,e);o.layers=this.layers,this.add(o);let a=new Ge(Ni,Oi,t,e);a.layers=this.layers,this.add(a);let l=new Ge(Ni,Oi,t,e);l.layers=this.layers,this.add(l);let c=new Ge(Ni,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pr=class extends We{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pa=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:_n});r.uniforms.tEquirect.value=e;let o=new j(i,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=hn),new Ca(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ro=new R,Xu=new R,qu=new Jt,cn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ro.subVectors(n,e).cross(Xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qu.getNormalMatrix(t),i=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Yn,sr=new R,As=class{constructor(t=new cn,e=new cn,n=new cn,i=new cn,r=new cn,o=new cn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],v=i[14],w=i[15];if(n[0].setComponents(l-r,d-c,m-p,w-f).normalize(),n[1].setComponents(l+r,d+c,m+p,w+f).normalize(),n[2].setComponents(l+o,d+h,m+g,w+y).normalize(),n[3].setComponents(l-o,d-h,m-g,w-y).normalize(),n[4].setComponents(l-a,d-u,m-_,w-v).normalize(),e===Cn)n[5].setComponents(l+a,d+u,m+_,w+v).normalize();else if(e===wr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(sr.x=i.normal.x>0?t.max.x:t.min.x,sr.y=i.normal.y>0?t.max.y:t.min.y,sr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yu(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ge=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let y=f*d-o;for(let v=0;v<c;v++){let w=v*u-r;g.push(w,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let v=y+c*f,w=y+c*(f+1),P=y+1+c*(f+1),b=y+1+c*f;p.push(v,w,b),p.push(w,P,b)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xd=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yd=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`
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
}`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
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
#endif`,qd=`struct PhysicalMaterial {
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
}`,Yd=`
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
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
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Df=`float getShadowMask() {
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
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
}`,ep=`#if DEPTH_PACKING == 3200
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
}`,np=`#define DISTANCE
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
}`,ip=`#define DISTANCE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
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
}`,ap=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,up=`#define LAMBERT
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
}`,dp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,mp=`#define NORMAL
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
}`,gp=`#define PHONG
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
}`,xp=`#define PHONG
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
}`,_p=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,vp=`#define TOON
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
}`,Mp=`#define TOON
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
}`,Ep=`uniform float size;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,Tp=`uniform float rotation;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Zu,alphahash_pars_fragment:$u,alphamap_fragment:Ju,alphamap_pars_fragment:Ku,alphatest_fragment:Qu,alphatest_pars_fragment:ju,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:od,iridescence_fragment:ad,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:xd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:yd,displacementmap_pars_vertex:vd,displacementmap_vertex:Md,emissivemap_fragment:Ed,emissivemap_pars_fragment:Sd,colorspace_fragment:wd,colorspace_pars_fragment:bd,envmap_fragment:Td,envmap_common_pars_fragment:Ad,envmap_pars_fragment:Rd,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:Hd,envmap_vertex:Pd,fog_vertex:Id,fog_pars_vertex:Ld,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Od,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Bd,lights_pars_begin:zd,lights_toon_fragment:kd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Vd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:qd,lights_fragment_begin:Yd,lights_fragment_maps:Zd,lights_fragment_end:$d,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:jd,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:of,morphinstance_vertex:af,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:Mf,opaque_fragment:Ef,packing:Sf,premultiplied_alpha_fragment:wf,project_vertex:bf,dithering_fragment:Tf,dithering_pars_fragment:Af,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:If,shadowmap_vertex:Lf,shadowmask_pars_fragment:Df,skinbase_vertex:Uf,skinning_pars_vertex:Nf,skinning_vertex:Of,skinnormal_vertex:Ff,specularmap_fragment:Bf,specularmap_pars_fragment:zf,tonemapping_fragment:Hf,tonemapping_pars_fragment:kf,transmission_fragment:Gf,transmission_pars_fragment:Vf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:Zf,background_frag:$f,backgroundCube_vert:Jf,backgroundCube_frag:Kf,cube_vert:Qf,cube_frag:jf,depth_vert:tp,depth_frag:ep,distanceRGBA_vert:np,distanceRGBA_frag:ip,equirect_vert:sp,equirect_frag:rp,linedashed_vert:op,linedashed_frag:ap,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:xp,meshphysical_vert:_p,meshphysical_frag:yp,meshtoon_vert:vp,meshtoon_frag:Mp,points_vert:Ep,points_frag:Sp,shadow_vert:wp,shadow_frag:bp,sprite_vert:Tp,sprite_frag:Ap},ft={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},gn={basic:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ve([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ve([ft.lights,ft.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};gn.physical={uniforms:Ve([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var rr={r:0,b:0,g:0},si=new vn,Rp=new te;function Cp(s,t,e,n,i,r,o){let a=new Vt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1,w=g(y);w===null?f(a,l):w&&w.isColor&&(f(w,1),v=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let w=g(v);w&&(w.isCubeTexture||w.mapping===Gr)?(h===void 0&&(h=new j(new Mt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:$i(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),si.copy(v.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(si)),h.material.toneMapped=ce.getTransfer(w.colorSpace)!==me,(u!==w||d!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new j(new ge(2,2),new Mn({name:"BackgroundMaterial",uniforms:$i(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ce.getTransfer(w.colorSpace)!==me,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(rr,sh(s)),n.buffers.color.setClear(rr.r,rr.g,rr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m}}function Pp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,E,k,B,H){let tt=!1,X=u(B,k,E);r!==X&&(r=X,c(r.object)),tt=p(x,B,k,H),tt&&g(x,B,k,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,w(x,E,k,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,E,k){let B=k.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let tt=H[E.id];tt===void 0&&(tt={},H[E.id]=tt);let X=tt[B];return X===void 0&&(X=d(l()),tt[B]=X),X}function d(x){let E=[],k=[],B=[];for(let H=0;H<e;H++)E[H]=0,k[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,E,k,B){let H=r.attributes,tt=E.attributes,X=0,it=k.getAttributes();for(let Z in it)if(it[Z].location>=0){let gt=H[Z],bt=tt[Z];if(bt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(bt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(bt=x.instanceColor)),gt===void 0||gt.attribute!==bt||bt&&gt.data!==bt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(x,E,k,B){let H={},tt=E.attributes,X=0,it=k.getAttributes();for(let Z in it)if(it[Z].location>=0){let gt=tt[Z];gt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));let bt={};bt.attribute=gt,gt&&gt.data&&(bt.data=gt.data),H[Z]=bt,X++}r.attributes=H,r.attributesNum=X,r.index=B}function _(){let x=r.newAttributes;for(let E=0,k=x.length;E<k;E++)x[E]=0}function m(x){f(x,0)}function f(x,E){let k=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;k[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),H[x]!==E&&(s.vertexAttribDivisor(x,E),H[x]=E)}function y(){let x=r.newAttributes,E=r.enabledAttributes;for(let k=0,B=E.length;k<B;k++)E[k]!==x[k]&&(s.disableVertexAttribArray(k),E[k]=0)}function v(x,E,k,B,H,tt,X){X===!0?s.vertexAttribIPointer(x,E,k,H,tt):s.vertexAttribPointer(x,E,k,B,H,tt)}function w(x,E,k,B){_();let H=B.attributes,tt=k.getAttributes(),X=E.defaultAttributeValues;for(let it in tt){let Z=tt[it];if(Z.location>=0){let yt=H[it];if(yt===void 0&&(it==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),it==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),yt!==void 0){let gt=yt.normalized,bt=yt.itemSize,Qt=t.get(yt);if(Qt===void 0)continue;let Kt=Qt.buffer,J=Qt.type,st=Qt.bytesPerElement,vt=J===s.INT||J===s.UNSIGNED_INT||yt.gpuType===fl;if(yt.isInterleavedBufferAttribute){let ut=yt.data,zt=ut.stride,Ot=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let Yt=0;Yt<Z.locationSize;Yt++)f(Z.location+Yt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Yt=0;Yt<Z.locationSize;Yt++)m(Z.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Yt=0;Yt<Z.locationSize;Yt++)v(Z.location+Yt,bt/Z.locationSize,J,gt,zt*st,(Ot+bt/Z.locationSize*Yt)*st,vt)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<Z.locationSize;ut++)f(Z.location+ut,yt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<Z.locationSize;ut++)m(Z.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let ut=0;ut<Z.locationSize;ut++)v(Z.location+ut,bt/Z.locationSize,J,gt,bt*st,bt/Z.locationSize*ut*st,vt)}}else if(X!==void 0){let gt=X[it];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(Z.location,gt);break;case 3:s.vertexAttrib3fv(Z.location,gt);break;case 4:s.vertexAttrib4fv(Z.location,gt);break;default:s.vertexAttrib1fv(Z.location,gt)}}}}y()}function P(){C();for(let x in n){let E=n[x];for(let k in E){let B=E[k];for(let H in B)h(B[H].object),delete B[H];delete E[k]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;let E=n[x.id];for(let k in E){let B=E[k];for(let H in B)h(B[H].object),delete B[H];delete E[k]}delete n[x.id]}function T(x){for(let E in n){let k=n[E];if(k[x.id]===void 0)continue;let B=k[x.id];for(let H in B)h(B[H].object),delete B[H];delete k[x.id]}}function C(){q(),o=!0,r!==i&&(r=i,c(r.object))}function q(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:q,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ip(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==un&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Pn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xn&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:P,maxSamples:b}}function Dp(s){let t=this,e=null,n=0,i=!1,r=!1,o=new cn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,w=f.clippingState||null;l.value=w,w=h(g,d,v,p);for(let P=0;P!==v;++P)w[P]=e[P];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,w=p;v!==_;++v,w+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Up(s){let t=new WeakMap;function e(o,a){return a===$o?o.mapping=Xi:a===Jo&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$o||a===Jo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Pa(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $n=class extends Cr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zi=4,ac=[.125,.215,.35,.446,.526,.582],ci=20,Co=new $n,lc=new Vt,Po=null,Io=0,Lo=0,Do=!1,oi=(1+Math.sqrt(5))/2,Fi=1/oi,cc=[new R(-oi,Fi,0),new R(oi,Fi,0),new R(-Fi,0,oi),new R(Fi,0,oi),new R(0,oi,-Fi),new R(0,oi,Fi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Po,Io,Lo),this._renderer.xr.enabled=Do,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Us,format:un,colorSpace:jn,depthBuffer:!1},i=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Op(r,t,e)}return i}_compileMaterial(t){let e=new j(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,i){let a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lc),h.toneMapping=Vn,h.autoClear=!1;let p=new fe({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new j(new Mt,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(lc),_=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;or(i,y*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Xi||t.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cc[(i-r-1)%cc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new j(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);let f=[],y=0;for(let T=0;T<ci;++T){let C=T/_,q=Math.exp(-C*C/2);f.push(q),T===0?y+=q:T<m&&(y+=2*q)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let w=this._sizeLods[i],P=3*w*(i>v-zi?i-v+zi:0),b=4*(this._cubeSize-w);or(e,P,b,3*w,2*w),l.setRenderTarget(e),l.render(u,Co)}};function Np(s){let t=[],e=[],n=[],i=s,r=s-zi+1+ac.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-zi?l=ac[o-s+zi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let b=0;b<p;b++){let T=b%3*2/3-1,C=b>2?0:-1,q=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(q,_*g*b),v.set(d,m*g*b);let x=[b,b,b,b,b,b];w.set(x,f*g*b)}let P=new Re;P.setAttribute("position",new Be(y,_)),P.setAttribute("uv",new Be(v,m)),P.setAttribute("faceIndex",new Be(w,f)),t.push(P),i>zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(s,t,e){let n=new In(s,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Op(s,t,e){let n=new Float32Array(ci),i=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function uc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function dc(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function Fp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===$o||l===Jo,h=l===Xi||l===qi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ir(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ir(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bp(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zp(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let v=0,w=y.length;v<w;v+=3){let P=y[v+0],b=y[v+1],T=y[v+2];d.push(P,b,b,T,T,P)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){let P=v+0,b=v+1,T=v+2;d.push(P,b,b,T,T,P)}}else return;let m=new(nh(d)?Rr:Ar)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hp(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y];for(let y=0;y<_.length;y++)e.update(f,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gp(s,t,e){let n=new WeakMap,i=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let q=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let w=a.attributes.position.count*v,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let b=new Float32Array(w*P*4*u),T=new Tr(b,w,P,u);T.type=xn,T.needsUpdate=!0;let C=v*4;for(let x=0;x<u;x++){let E=m[x],k=f[x],B=y[x],H=w*P*4*x;for(let tt=0;tt<E.count;tt++){let X=tt*C;p===!0&&(i.fromBufferAttribute(E,tt),b[H+X+0]=i.x,b[H+X+1]=i.y,b[H+X+2]=i.z,b[H+X+3]=0),g===!0&&(i.fromBufferAttribute(k,tt),b[H+X+4]=i.x,b[H+X+5]=i.y,b[H+X+6]=i.z,b[H+X+7]=0),_===!0&&(i.fromBufferAttribute(B,tt),b[H+X+8]=i.x,b[H+X+9]=i.y,b[H+X+10]=i.z,b[H+X+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new _t(w,P)},n.set(a,d),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Vp(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Lr=class extends We{constructor(t,e,n,i,r,o,a,l,c,h=ki){if(h!==ki&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=di),n===void 0&&h===Zi&&(n=Yi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},oh=new We,fc=new Lr(1,1),ah=new Tr,lh=new Ra,ch=new Pr,pc=[],mc=[],gc=new Float32Array(16),xc=new Float32Array(9),_c=new Float32Array(4);function os(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=pc[i];if(r===void 0&&(r=new Float32Array(i),pc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wr(s,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Zp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;_c.set(n),s.uniformMatrix2fv(this.addr,!1,_c),Pe(e,n)}}function $p(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;xc.set(n),s.uniformMatrix3fv(this.addr,!1,xc),Pe(e,n)}}function Jp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;gc.set(n),s.uniformMatrix4fv(this.addr,!1,gc),Pe(e,n)}}function Kp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function jp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function tm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function em(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function im(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function sm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function rm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fc.compareFunction=eh,r=fc):r=oh,e.setTexture2D(t||r,i)}function om(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lh,i)}function am(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ch,i)}function lm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ah,i)}function cm(s){switch(s){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return $p;case 35676:return Jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Qp;case 35668:case 35672:return jp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return lm}}function hm(s,t){s.uniform1fv(this.addr,t)}function um(s,t){let e=os(t,this.size,2);s.uniform2fv(this.addr,e)}function dm(s,t){let e=os(t,this.size,3);s.uniform3fv(this.addr,e)}function fm(s,t){let e=os(t,this.size,4);s.uniform4fv(this.addr,e)}function pm(s,t){let e=os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mm(s,t){let e=os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gm(s,t){let e=os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function xm(s,t){s.uniform1iv(this.addr,t)}function _m(s,t){s.uniform2iv(this.addr,t)}function ym(s,t){s.uniform3iv(this.addr,t)}function vm(s,t){s.uniform4iv(this.addr,t)}function Mm(s,t){s.uniform1uiv(this.addr,t)}function Em(s,t){s.uniform2uiv(this.addr,t)}function Sm(s,t){s.uniform3uiv(this.addr,t)}function wm(s,t){s.uniform4uiv(this.addr,t)}function bm(s,t,e){let n=this.cache,i=t.length,r=Wr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||oh,r[o])}function Tm(s,t,e){let n=this.cache,i=t.length,r=Wr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||lh,r[o])}function Am(s,t,e){let n=this.cache,i=t.length,r=Wr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ch,r[o])}function Rm(s,t,e){let n=this.cache,i=t.length,r=Wr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ah,r[o])}function Cm(s){switch(s){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return xm;case 35667:case 35671:return _m;case 35668:case 35672:return ym;case 35669:case 35673:return vm;case 5125:return Mm;case 36294:return Em;case 36295:return Sm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}var Ia=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cm(e.type)}},La=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cm(e.type)}},Da=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Uo=/(\w+)(\])?(\[|\.)?/g;function yc(s,t){s.seq.push(t),s.map[t.id]=t}function Pm(s,t,e){let n=s.name,i=n.length;for(Uo.lastIndex=0;;){let r=Uo.exec(n),o=Uo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){yc(e,c===void 0?new Ia(a,s,t):new La(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Da(a),yc(e,u)),e=u}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Pm(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function vc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Im=37297,Lm=0;function Dm(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Um(s){let t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(s),n;switch(t===e?n="":t===Sr&&e===Er?n="LinearDisplayP3ToLinearSRGB":t===Er&&e===Sr&&(n="LinearSRGBToLinearDisplayP3"),s){case jn:case Vr:return[n,"LinearTransferOETF"];case Se:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Mc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Dm(s.getShaderSource(t),o)}else return i}function Nm(s,t){let e=Um(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Om(s,t){let e;switch(t){case ou:e="Linear";break;case au:e="Reinhard";break;case lu:e="Cineon";break;case Ds:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ar=new R;function Fm(){ce.getLuminanceCoefficients(ar);let s=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function zm(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hm(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ys(s){return s!==""}function Ec(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(s){return s.replace(km,Vm)}var Gm=new Map;function Vm(s,t){let e=$t[t];if(e===void 0){let n=Gm.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(s){return s.replace(Wm,Xm)}function Xm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rs?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function $m(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vc:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function Jm(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Km(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qm(e),c=Ym(e),h=Zm(e),u=$m(e),d=Jm(e),p=Bm(e),g=zm(r),_=i.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(m=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Nm("linearToOutputTexel",e.outputColorSpace),Fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=Ua(o),o=Ec(o,e),o=Sc(o,e),a=Ua(a),a=Ec(a,e),a=Sc(a,e),o=wc(o),a=wc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+o,w=y+f+a,P=vc(i,i.VERTEX_SHADER,v),b=vc(i,i.FRAGMENT_SHADER,w);i.attachShader(_,P),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(E){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(b).trim(),tt=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,b);else{let it=Mc(i,P,"vertex"),Z=Mc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+it+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||H==="")&&(X=!1);X&&(E.diagnostics={runnable:tt,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(P),i.deleteShader(b),C=new Vi(i,_),q=Hm(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let q;this.getAttributes=function(){return q===void 0&&T(this),q};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Im)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}var Qm=0,Na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oa(t),e.set(t,n)),n}},Oa=class{constructor(t){this.id=Qm++,this.code=t,this.usedTimes=0}};function jm(s,t,e,n,i,r,o){let a=new Ts,l=new Na,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,p=i.vertexTextures,g=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,E,k,B,H){let tt=B.fog,X=H.geometry,it=x.isMeshStandardMaterial?B.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||it),yt=Z&&Z.mapping===Gr?Z.image.height:null,gt=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=bt!==void 0?bt.length:0,Kt=0;X.morphAttributes.position!==void 0&&(Kt=1),X.morphAttributes.normal!==void 0&&(Kt=2),X.morphAttributes.color!==void 0&&(Kt=3);let J,st,vt,ut;if(gt){let se=gn[gt];J=se.vertexShader,st=se.fragmentShader}else J=x.vertexShader,st=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),ut=l.getFragmentShaderID(x);let zt=s.getRenderTarget(),Ot=H.isInstancedMesh===!0,Yt=H.isBatchedMesh===!0,ne=!!x.map,Xt=!!x.matcap,I=!!Z,Ie=!!x.aoMap,qt=!!x.lightMap,Zt=!!x.bumpMap,Nt=!!x.normalMap,ie=!!x.displacementMap,Pt=!!x.emissiveMap,A=!!x.metalnessMap,M=!!x.roughnessMap,z=x.anisotropy>0,$=x.clearcoat>0,nt=x.dispersion>0,Q=x.iridescence>0,St=x.sheen>0,lt=x.transmission>0,pt=z&&!!x.anisotropyMap,U=$&&!!x.clearcoatMap,D=$&&!!x.clearcoatNormalMap,et=$&&!!x.clearcoatRoughnessMap,rt=Q&&!!x.iridescenceMap,ct=Q&&!!x.iridescenceThicknessMap,ot=St&&!!x.sheenColorMap,Rt=St&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,Bt=!!x.specularColorMap,L=!!x.specularIntensityMap,dt=lt&&!!x.transmissionMap,Y=lt&&!!x.thicknessMap,F=!!x.gradientMap,G=!!x.alphaMap,K=x.alphaTest>0,wt=!!x.alphaHash,Ft=!!x.extensions,oe=Vn;x.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(oe=s.toneMapping);let kt={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:st,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Yt,batchingColor:Yt&&H._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&H.instanceColor!==null,instancingMorph:Ot&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:zt===null?s.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:jn,alphaToCoverage:!!x.alphaToCoverage,map:ne,matcap:Xt,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:yt,aoMap:Ie,lightMap:qt,bumpMap:Zt,normalMap:Nt,displacementMap:p&&ie,emissiveMap:Pt,normalMapObjectSpace:Nt&&x.normalMapType===mu,normalMapTangentSpace:Nt&&x.normalMapType===th,metalnessMap:A,roughnessMap:M,anisotropy:z,anisotropyMap:pt,clearcoat:$,clearcoatMap:U,clearcoatNormalMap:D,clearcoatRoughnessMap:et,dispersion:nt,iridescence:Q,iridescenceMap:rt,iridescenceThicknessMap:ct,sheen:St,sheenColorMap:ot,sheenRoughnessMap:Rt,specularMap:Tt,specularColorMap:Bt,specularIntensityMap:L,transmission:lt,transmissionMap:dt,thicknessMap:Y,gradientMap:F,opaque:x.transparent===!1&&x.blending===Hi&&x.alphaToCoverage===!1,alphaMap:G,alphaTest:K,alphaHash:wt,combine:x.combine,mapUv:ne&&m(x.map.channel),aoMapUv:Ie&&m(x.aoMap.channel),lightMapUv:qt&&m(x.lightMap.channel),bumpMapUv:Zt&&m(x.bumpMap.channel),normalMapUv:Nt&&m(x.normalMap.channel),displacementMapUv:ie&&m(x.displacementMap.channel),emissiveMapUv:Pt&&m(x.emissiveMap.channel),metalnessMapUv:A&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:pt&&m(x.anisotropyMap.channel),clearcoatMapUv:U&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:D&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&m(x.sheenRoughnessMap.channel),specularMapUv:Tt&&m(x.specularMap.channel),specularColorMapUv:Bt&&m(x.specularColorMap.channel),specularIntensityMapUv:L&&m(x.specularIntensityMap.channel),transmissionMapUv:dt&&m(x.transmissionMap.channel),thicknessMapUv:Y&&m(x.thicknessMap.channel),alphaMapUv:G&&m(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Nt||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(ne||G),fog:!!tt,useFog:x.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:Kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:ne&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ae,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ft&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&x.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function y(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(v(E,x),w(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){let E=_[x.type],k;if(E){let B=gn[E];k=Gu.clone(B.uniforms)}else k=x.uniforms;return k}function b(x,E){let k;for(let B=0,H=h.length;B<H;B++){let tt=h[B];if(tt.cacheKey===E){k=tt,++k.usedTimes;break}}return k===void 0&&(k=new Km(s,E,x,r),h.push(k)),k}function T(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function q(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:P,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:q}}function t0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function e0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Tc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ac(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||e0),n.length>1&&n.sort(d||Tc),i.length>1&&i.sort(d||Tc)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function n0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ac,s.set(n,[o])):i>=r.length?(o=new Ac,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function i0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Vt};break;case"SpotLight":e={position:new R,direction:new R,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function s0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var r0=0;function o0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a0(s){let t=new i0,e=s0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new te,o=new te;function a(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,v=0,w=0,P=0,b=0,T=0;c.sort(o0);for(let q=0,x=c.length;q<x;q++){let E=c[q],k=E.color,B=E.intensity,H=E.distance,tt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(E.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(E.sh.coefficients[X],B);T++}else if(E.isDirectionalLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let it=E.shadow,Z=e.get(E);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=E.shadow.matrix,y++}n.directional[p]=X,p++}else if(E.isSpotLight){let X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(k).multiplyScalar(B),X.distance=H,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,n.spot[_]=X;let it=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,it.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[_]=it.matrix,E.castShadow){let Z=e.get(E);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=tt,w++}_++}else if(E.isRectAreaLight){let X=t.get(E);X.color.copy(k).multiplyScalar(B),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=X,m++}else if(E.isPointLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){let it=E.shadow,Z=e.get(E);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=E.shadow.matrix,v++}n.point[g]=X,g++}else if(E.isHemisphereLight){let X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(B),X.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==w||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=w+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=w,C.numSpotMaps=P,C.numLightProbes=T,n.version=r0++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let v=c[f];if(v.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),u++}else if(v.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let w=n.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Rc(s){let t=new a0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function l0(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Rc(s),t.set(i,[a])):r>=o.length?(a=new Rc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fa=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ba=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function u0(s,t,e){let n=new As,i=new _t,r=new _t,o=new ue,a=new Fa({depthPacking:pu}),l=new Ba,c={},h=e.maxTextureSize,u={[Wn]:Ye,[Ye]:Wn,[Ae]:Ae},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:c0,fragmentShader:h0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let f=this.type;this.render=function(b,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let q=s.getRenderTarget(),x=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),k=s.state;k.setBlending(_n),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=f!==Rn&&this.type===Rn,H=f===Rn&&this.type!==Rn;for(let tt=0,X=b.length;tt<X;tt++){let it=b[tt],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let yt=Z.getFrameExtents();if(i.multiply(yt),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/yt.x),i.x=r.x*yt.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/yt.y),i.y=r.y*yt.y,Z.mapSize.y=r.y)),Z.map===null||B===!0||H===!0){let bt=this.type!==Rn?{minFilter:qe,magFilter:qe}:{};Z.map!==null&&Z.map.dispose(),Z.map=new In(i.x,i.y,bt),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let gt=Z.getViewportCount();for(let bt=0;bt<gt;bt++){let Qt=Z.getViewport(bt);o.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),k.viewport(o),Z.updateMatrices(it,bt),n=Z.getFrustum(),w(T,C,Z.camera,it,this.type)}Z.isPointLightShadow!==!0&&this.type===Rn&&y(Z,C),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(q,x,E)};function y(b,T){let C=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,C,p,_,null)}function v(b,T,C,q){let x=null,E=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=x.uuid,B=T.uuid,H=c[k];H===void 0&&(H={},c[k]=H);let tt=H[B];tt===void 0&&(tt=x.clone(),H[B]=tt,T.addEventListener("dispose",P)),x=tt}if(x.visible=T.visible,x.wireframe=T.wireframe,q===Rn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let k=s.properties.get(x);k.light=C}return x}function w(b,T,C,q,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Rn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let B=t.update(b),H=b.material;if(Array.isArray(H)){let tt=B.groups;for(let X=0,it=tt.length;X<it;X++){let Z=tt[X],yt=H[Z.materialIndex];if(yt&&yt.visible){let gt=v(b,yt,q,x);b.onBeforeShadow(s,b,T,C,B,gt,Z),s.renderBufferDirect(C,null,B,gt,b,Z),b.onAfterShadow(s,b,T,C,B,gt,Z)}}}else if(H.visible){let tt=v(b,H,q,x);b.onBeforeShadow(s,b,T,C,B,tt,null),s.renderBufferDirect(C,null,B,tt,b,null),b.onAfterShadow(s,b,T,C,B,tt,null)}}let k=b.children;for(let B=0,H=k.length;B<H;B++)w(k[B],T,C,q,x)}function P(b){b.target.removeEventListener("dispose",P);for(let C in c){let q=c[C],x=b.target.uuid;x in q&&(q[x].dispose(),delete q[x])}}}var d0={[Go]:Vo,[Wo]:Yo,[Xo]:Zo,[Wi]:qo,[Vo]:Go,[Yo]:Wo,[Zo]:Xo,[qo]:Wi};function f0(s){function t(){let L=!1,dt=new ue,Y=null,F=new ue(0,0,0,0);return{setMask:function(G){Y!==G&&!L&&(s.colorMask(G,G,G,G),Y=G)},setLocked:function(G){L=G},setClear:function(G,K,wt,Ft,oe){oe===!0&&(G*=Ft,K*=Ft,wt*=Ft),dt.set(G,K,wt,Ft),F.equals(dt)===!1&&(s.clearColor(G,K,wt,Ft),F.copy(dt))},reset:function(){L=!1,Y=null,F.set(-1,0,0,0)}}}function e(){let L=!1,dt=!1,Y=null,F=null,G=null;return{setReversed:function(K){dt=K},setTest:function(K){K?vt(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(K){Y!==K&&!L&&(s.depthMask(K),Y=K)},setFunc:function(K){if(dt&&(K=d0[K]),F!==K){switch(K){case Go:s.depthFunc(s.NEVER);break;case Vo:s.depthFunc(s.ALWAYS);break;case Wo:s.depthFunc(s.LESS);break;case Wi:s.depthFunc(s.LEQUAL);break;case Xo:s.depthFunc(s.EQUAL);break;case qo:s.depthFunc(s.GEQUAL);break;case Yo:s.depthFunc(s.GREATER);break;case Zo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}F=K}},setLocked:function(K){L=K},setClear:function(K){G!==K&&(s.clearDepth(K),G=K)},reset:function(){L=!1,Y=null,F=null,G=null}}}function n(){let L=!1,dt=null,Y=null,F=null,G=null,K=null,wt=null,Ft=null,oe=null;return{setTest:function(kt){L||(kt?vt(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(kt){dt!==kt&&!L&&(s.stencilMask(kt),dt=kt)},setFunc:function(kt,se,be){(Y!==kt||F!==se||G!==be)&&(s.stencilFunc(kt,se,be),Y=kt,F=se,G=be)},setOp:function(kt,se,be){(K!==kt||wt!==se||Ft!==be)&&(s.stencilOp(kt,se,be),K=kt,wt=se,Ft=be)},setLocked:function(kt){L=kt},setClear:function(kt){oe!==kt&&(s.clearStencil(kt),oe=kt)},reset:function(){L=!1,dt=null,Y=null,F=null,G=null,K=null,wt=null,Ft=null,oe=null}}}let i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,y=null,v=null,w=null,P=null,b=new Vt(0,0,0),T=0,C=!1,q=null,x=null,E=null,k=null,B=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,X=0,it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(it)[1]),tt=X>=1):it.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),tt=X>=2);let Z=null,yt={},gt=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Qt=new ue().fromArray(gt),Kt=new ue().fromArray(bt);function J(L,dt,Y,F){let G=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let wt=0;wt<Y;wt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,F,0,s.RGBA,s.UNSIGNED_BYTE,G):s.texImage2D(dt+wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,G);return K}let st={};st[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(s.DEPTH_TEST),r.setFunc(Wi),qt(!1),Zt(Nl),vt(s.CULL_FACE),I(_n);function vt(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function ut(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function zt(L,dt){return h[L]!==dt?(s.bindFramebuffer(L,dt),h[L]=dt,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=dt),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ot(L,dt){let Y=d,F=!1;if(L){Y=u.get(dt),Y===void 0&&(Y=[],u.set(dt,Y));let G=L.textures;if(Y.length!==G.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let K=0,wt=G.length;K<wt;K++)Y[K]=s.COLOR_ATTACHMENT0+K;Y.length=G.length,F=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,F=!0);F&&s.drawBuffers(Y)}function Yt(L){return p!==L?(s.useProgram(L),p=L,!0):!1}let ne={[ai]:s.FUNC_ADD,[kh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};ne[Vh]=s.MIN,ne[Wh]=s.MAX;let Xt={[Xh]:s.ZERO,[qh]:s.ONE,[Yh]:s.SRC_COLOR,[Ho]:s.SRC_ALPHA,[jh]:s.SRC_ALPHA_SATURATE,[Kh]:s.DST_COLOR,[$h]:s.DST_ALPHA,[Zh]:s.ONE_MINUS_SRC_COLOR,[ko]:s.ONE_MINUS_SRC_ALPHA,[Qh]:s.ONE_MINUS_DST_COLOR,[Jh]:s.ONE_MINUS_DST_ALPHA,[tu]:s.CONSTANT_COLOR,[eu]:s.ONE_MINUS_CONSTANT_COLOR,[nu]:s.CONSTANT_ALPHA,[iu]:s.ONE_MINUS_CONSTANT_ALPHA};function I(L,dt,Y,F,G,K,wt,Ft,oe,kt){if(L===_n){g===!0&&(ut(s.BLEND),g=!1);return}if(g===!1&&(vt(s.BLEND),g=!0),L!==Hh){if(L!==_||kt!==C){if((m!==ai||v!==ai)&&(s.blendEquation(s.FUNC_ADD),m=ai,v=ai),kt)switch(L){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.ONE,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,y=null,w=null,P=null,b.set(0,0,0),T=0,_=L,C=kt}return}G=G||dt,K=K||Y,wt=wt||F,(dt!==m||G!==v)&&(s.blendEquationSeparate(ne[dt],ne[G]),m=dt,v=G),(Y!==f||F!==y||K!==w||wt!==P)&&(s.blendFuncSeparate(Xt[Y],Xt[F],Xt[K],Xt[wt]),f=Y,y=F,w=K,P=wt),(Ft.equals(b)===!1||oe!==T)&&(s.blendColor(Ft.r,Ft.g,Ft.b,oe),b.copy(Ft),T=oe),_=L,C=!1}function Ie(L,dt){L.side===Ae?ut(s.CULL_FACE):vt(s.CULL_FACE);let Y=L.side===Ye;dt&&(Y=!Y),qt(Y),L.blending===Hi&&L.transparent===!1?I(_n):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),i.setMask(L.colorWrite);let F=L.stencilWrite;o.setTest(F),F&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(L){q!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),q=L)}function Zt(L){L!==Fh?(vt(s.CULL_FACE),L!==x&&(L===Nl?s.cullFace(s.BACK):L===Bh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),x=L}function Nt(L){L!==E&&(tt&&s.lineWidth(L),E=L)}function ie(L,dt,Y){L?(vt(s.POLYGON_OFFSET_FILL),(k!==dt||B!==Y)&&(s.polygonOffset(dt,Y),k=dt,B=Y)):ut(s.POLYGON_OFFSET_FILL)}function Pt(L){L?vt(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function A(L){L===void 0&&(L=s.TEXTURE0+H-1),Z!==L&&(s.activeTexture(L),Z=L)}function M(L,dt,Y){Y===void 0&&(Z===null?Y=s.TEXTURE0+H-1:Y=Z);let F=yt[Y];F===void 0&&(F={type:void 0,texture:void 0},yt[Y]=F),(F.type!==L||F.texture!==dt)&&(Z!==Y&&(s.activeTexture(Y),Z=Y),s.bindTexture(L,dt||st[L]),F.type=L,F.texture=dt)}function z(){let L=yt[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function D(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(L){Qt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Qt.copy(L))}function ot(L){Kt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Kt.copy(L))}function Rt(L,dt){let Y=l.get(dt);Y===void 0&&(Y=new WeakMap,l.set(dt,Y));let F=Y.get(L);F===void 0&&(F=s.getUniformBlockIndex(dt,L.name),Y.set(L,F))}function Tt(L,dt){let F=l.get(dt).get(L);a.get(dt)!==F&&(s.uniformBlockBinding(dt,F,L.__bindingPointIndex),a.set(dt,F))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Z=null,yt={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,y=null,v=null,w=null,P=null,b=new Vt(0,0,0),T=0,C=!1,q=null,x=null,E=null,k=null,B=null,Qt.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:vt,disable:ut,bindFramebuffer:zt,drawBuffers:Ot,useProgram:Yt,setBlending:I,setMaterial:Ie,setFlipSided:qt,setCullFace:Zt,setLineWidth:Nt,setPolygonOffset:ie,setScissorTest:Pt,activeTexture:A,bindTexture:M,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:nt,texImage2D:et,texImage3D:rt,updateUBOMapping:Rt,uniformBlockBinding:Tt,texStorage2D:U,texStorage3D:D,texSubImage2D:Q,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:ct,viewport:ot,reset:Bt}}function Cc(s,t,e,n){let i=p0(n);switch(e){case Zc:return s*t;case Jc:return s*t;case Kc:return s*t*2;case gl:return s*t/i.components*i.byteLength;case xl:return s*t/i.components*i.byteLength;case Qc:return s*t*2/i.components*i.byteLength;case _l:return s*t*2/i.components*i.byteLength;case $c:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case yl:return s*t*4/i.components*i.byteLength;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:case ea:return Math.max(s,16)*Math.max(t,8)/4;case Qo:case ta:return Math.max(s,8)*Math.max(t,8)/2;case na:case ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case da:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case xr:case ya:case va:return Math.ceil(s/4)*Math.ceil(t/4)*16;case jc:case Ma:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ea:case Sa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(s){switch(s){case Pn:case Xc:return{byteLength:1,components:1};case Ss:case qc:case Us:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case di:case fl:case xn:return{byteLength:4,components:1};case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function m0(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):ws("canvas")}function _(A,M,z){let $=1,nt=Pt(A);if((nt.width>z||nt.height>z)&&($=z/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor($*nt.width),St=Math.floor($*nt.height);u===void 0&&(u=g(Q,St));let lt=M?g(Q,St):u;return lt.width=Q,lt.height=St,lt.getContext("2d").drawImage(A,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+St+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==qe&&A.minFilter!==hn}function f(A){s.generateMipmap(A)}function y(A,M,z,$,nt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=M;if(M===s.RED&&(z===s.FLOAT&&(Q=s.R32F),z===s.HALF_FLOAT&&(Q=s.R16F),z===s.UNSIGNED_BYTE&&(Q=s.R8)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.R8UI),z===s.UNSIGNED_SHORT&&(Q=s.R16UI),z===s.UNSIGNED_INT&&(Q=s.R32UI),z===s.BYTE&&(Q=s.R8I),z===s.SHORT&&(Q=s.R16I),z===s.INT&&(Q=s.R32I)),M===s.RG&&(z===s.FLOAT&&(Q=s.RG32F),z===s.HALF_FLOAT&&(Q=s.RG16F),z===s.UNSIGNED_BYTE&&(Q=s.RG8)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RG8UI),z===s.UNSIGNED_SHORT&&(Q=s.RG16UI),z===s.UNSIGNED_INT&&(Q=s.RG32UI),z===s.BYTE&&(Q=s.RG8I),z===s.SHORT&&(Q=s.RG16I),z===s.INT&&(Q=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),z===s.UNSIGNED_INT&&(Q=s.RGB32UI),z===s.BYTE&&(Q=s.RGB8I),z===s.SHORT&&(Q=s.RGB16I),z===s.INT&&(Q=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),z===s.UNSIGNED_INT&&(Q=s.RGBA32UI),z===s.BYTE&&(Q=s.RGBA8I),z===s.SHORT&&(Q=s.RGBA16I),z===s.INT&&(Q=s.RGBA32I)),M===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),M===s.RGBA){let St=nt?Mr:ce.getTransfer($);z===s.FLOAT&&(Q=s.RGBA32F),z===s.HALF_FLOAT&&(Q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Q=St===me?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(A,M){let z;return A?M===null||M===di||M===Yi?z=s.DEPTH24_STENCIL8:M===xn?z=s.DEPTH32F_STENCIL8:M===Ss&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===di||M===Yi?z=s.DEPTH_COMPONENT24:M===xn?z=s.DEPTH_COMPONENT32F:M===Ss&&(z=s.DEPTH_COMPONENT16),z}function w(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qe&&A.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){let M=A.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&h.delete(M)}function b(A){let M=A.target;M.removeEventListener("dispose",b),q(M)}function T(A){let M=n.get(A);if(M.__webglInit===void 0)return;let z=A.source,$=d.get(z);if($){let nt=$[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(A),Object.keys($).length===0&&d.delete(z)}n.remove(A)}function C(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let z=A.source,$=d.get(z);delete $[M.__cacheKey],o.memory.textures--}function q(A){let M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let nt=0;nt<M.__webglFramebuffer[$].length;nt++)s.deleteFramebuffer(M.__webglFramebuffer[$][nt]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=A.textures;for(let $=0,nt=z.length;$<nt;$++){let Q=n.get(z[$]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(A)}let x=0;function E(){x=0}function k(){let A=x;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),x+=1,A}function B(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function H(A,M){let z=n.get(A);if(A.isVideoTexture&&Nt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(z,A,M);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function tt(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Kt(z,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function X(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Kt(z,A,M);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function it(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){J(z,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}let Z={[Xn]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[Ko]:s.MIRRORED_REPEAT},yt={[qe]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[ks]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[io]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},gt={[gu]:s.NEVER,[Eu]:s.ALWAYS,[xu]:s.LESS,[eh]:s.LEQUAL,[_u]:s.EQUAL,[Mu]:s.GEQUAL,[yu]:s.GREATER,[vu]:s.NOTEQUAL};function bt(A,M){if(M.type===xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===io||M.magFilter===ks||M.magFilter===ui||M.minFilter===hn||M.minFilter===io||M.minFilter===ks||M.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Z[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Z[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Z[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,yt[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qe||M.minFilter!==ks&&M.minFilter!==ui||M.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));let $=M.source,nt=d.get($);nt===void 0&&(nt={},d.set($,nt));let Q=B(M);if(Q!==A.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),nt[Q].usedTimes++;let St=nt[A.__cacheKey];St!==void 0&&(nt[A.__cacheKey].usedTimes--,St.usedTimes===0&&C(M)),A.__cacheKey=Q,A.__webglTexture=nt[Q].texture}return z}function Kt(A,M,z){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let nt=Qt(A,M),Q=M.source;e.bindTexture($,A.__webglTexture,s.TEXTURE0+z);let St=n.get(Q);if(Q.version!==St.__version||nt===!0){e.activeTexture(s.TEXTURE0+z);let lt=ce.getPrimaries(ce.workingColorSpace),pt=M.colorSpace===Gn?null:ce.getPrimaries(M.colorSpace),U=M.colorSpace===Gn||lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);let D=_(M.image,!1,i.maxTextureSize);D=ie(M,D);let et=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),ct=y(M.internalFormat,et,rt,M.colorSpace,M.isVideoTexture);bt($,M);let ot,Rt=M.mipmaps,Tt=M.isVideoTexture!==!0,Bt=St.__version===void 0||nt===!0,L=Q.dataReady,dt=w(M,D);if(M.isDepthTexture)ct=v(M.format===Zi,M.type),Bt&&(Tt?e.texStorage2D(s.TEXTURE_2D,1,ct,D.width,D.height):e.texImage2D(s.TEXTURE_2D,0,ct,D.width,D.height,0,et,rt,null));else if(M.isDataTexture)if(Rt.length>0){Tt&&Bt&&e.texStorage2D(s.TEXTURE_2D,dt,ct,Rt[0].width,Rt[0].height);for(let Y=0,F=Rt.length;Y<F;Y++)ot=Rt[Y],Tt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ot.width,ot.height,et,rt,ot.data):e.texImage2D(s.TEXTURE_2D,Y,ct,ot.width,ot.height,0,et,rt,ot.data);M.generateMipmaps=!1}else Tt?(Bt&&e.texStorage2D(s.TEXTURE_2D,dt,ct,D.width,D.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,D.width,D.height,et,rt,D.data)):e.texImage2D(s.TEXTURE_2D,0,ct,D.width,D.height,0,et,rt,D.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Tt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,ct,Rt[0].width,Rt[0].height,D.depth);for(let Y=0,F=Rt.length;Y<F;Y++)if(ot=Rt[Y],M.format!==un)if(et!==null)if(Tt){if(L)if(M.layerUpdates.size>0){let G=Cc(ot.width,ot.height,M.format,M.type);for(let K of M.layerUpdates){let wt=ot.data.subarray(K*G/ot.data.BYTES_PER_ELEMENT,(K+1)*G/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,K,ot.width,ot.height,1,et,wt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,D.depth,et,ot.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,ct,ot.width,ot.height,D.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,D.depth,et,rt,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,ct,ot.width,ot.height,D.depth,0,et,rt,ot.data)}else{Tt&&Bt&&e.texStorage2D(s.TEXTURE_2D,dt,ct,Rt[0].width,Rt[0].height);for(let Y=0,F=Rt.length;Y<F;Y++)ot=Rt[Y],M.format!==un?et!==null?Tt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ot.width,ot.height,et,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,ct,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ot.width,ot.height,et,rt,ot.data):e.texImage2D(s.TEXTURE_2D,Y,ct,ot.width,ot.height,0,et,rt,ot.data)}else if(M.isDataArrayTexture)if(Tt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,ct,D.width,D.height,D.depth),L)if(M.layerUpdates.size>0){let Y=Cc(D.width,D.height,M.format,M.type);for(let F of M.layerUpdates){let G=D.data.subarray(F*Y/D.data.BYTES_PER_ELEMENT,(F+1)*Y/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,F,D.width,D.height,1,et,rt,G)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,et,rt,D.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,D.width,D.height,D.depth,0,et,rt,D.data);else if(M.isData3DTexture)Tt?(Bt&&e.texStorage3D(s.TEXTURE_3D,dt,ct,D.width,D.height,D.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,et,rt,D.data)):e.texImage3D(s.TEXTURE_3D,0,ct,D.width,D.height,D.depth,0,et,rt,D.data);else if(M.isFramebufferTexture){if(Bt)if(Tt)e.texStorage2D(s.TEXTURE_2D,dt,ct,D.width,D.height);else{let Y=D.width,F=D.height;for(let G=0;G<dt;G++)e.texImage2D(s.TEXTURE_2D,G,ct,Y,F,0,et,rt,null),Y>>=1,F>>=1}}else if(Rt.length>0){if(Tt&&Bt){let Y=Pt(Rt[0]);e.texStorage2D(s.TEXTURE_2D,dt,ct,Y.width,Y.height)}for(let Y=0,F=Rt.length;Y<F;Y++)ot=Rt[Y],Tt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,et,rt,ot):e.texImage2D(s.TEXTURE_2D,Y,ct,et,rt,ot);M.generateMipmaps=!1}else if(Tt){if(Bt){let Y=Pt(D);e.texStorage2D(s.TEXTURE_2D,dt,ct,Y.width,Y.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et,rt,D)}else e.texImage2D(s.TEXTURE_2D,0,ct,et,rt,D);m(M)&&f($),St.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,z){if(M.image.length!==6)return;let $=Qt(A,M),nt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);let Q=n.get(nt);if(nt.version!==Q.__version||$===!0){e.activeTexture(s.TEXTURE0+z);let St=ce.getPrimaries(ce.workingColorSpace),lt=M.colorSpace===Gn?null:ce.getPrimaries(M.colorSpace),pt=M.colorSpace===Gn||St===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let U=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,et=[];for(let F=0;F<6;F++)!U&&!D?et[F]=_(M.image[F],!0,i.maxCubemapSize):et[F]=D?M.image[F].image:M.image[F],et[F]=ie(M,et[F]);let rt=et[0],ct=r.convert(M.format,M.colorSpace),ot=r.convert(M.type),Rt=y(M.internalFormat,ct,ot,M.colorSpace),Tt=M.isVideoTexture!==!0,Bt=Q.__version===void 0||$===!0,L=nt.dataReady,dt=w(M,rt);bt(s.TEXTURE_CUBE_MAP,M);let Y;if(U){Tt&&Bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Rt,rt.width,rt.height);for(let F=0;F<6;F++){Y=et[F].mipmaps;for(let G=0;G<Y.length;G++){let K=Y[G];M.format!==un?ct!==null?Tt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G,0,0,K.width,K.height,ct,K.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G,Rt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G,0,0,K.width,K.height,ct,ot,K.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G,Rt,K.width,K.height,0,ct,ot,K.data)}}}else{if(Y=M.mipmaps,Tt&&Bt){Y.length>0&&dt++;let F=Pt(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Rt,F.width,F.height)}for(let F=0;F<6;F++)if(D){Tt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,et[F].width,et[F].height,ct,ot,et[F].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Rt,et[F].width,et[F].height,0,ct,ot,et[F].data);for(let G=0;G<Y.length;G++){let wt=Y[G].image[F].image;Tt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G+1,0,0,wt.width,wt.height,ct,ot,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G+1,Rt,wt.width,wt.height,0,ct,ot,wt.data)}}else{Tt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ct,ot,et[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Rt,ct,ot,et[F]);for(let G=0;G<Y.length;G++){let K=Y[G];Tt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G+1,0,0,ct,ot,K.image[F]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,G+1,Rt,ct,ot,K.image[F])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),Q.__version=nt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function st(A,M,z,$,nt,Q){let St=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),pt=y(z.internalFormat,St,lt,z.colorSpace);if(!n.get(M).__hasExternalTextures){let D=Math.max(1,M.width>>Q),et=Math.max(1,M.height>>Q);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,pt,D,et,M.depth,0,St,lt,null):e.texImage2D(nt,Q,pt,D,et,0,St,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Zt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,nt,n.get(z).__webglTexture,0,qt(M)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,nt,n.get(z).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(A,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let $=M.depthTexture,nt=$&&$.isDepthTexture?$.type:null,Q=v(M.stencilBuffer,nt),St=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=qt(M);Zt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Q,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,A)}else{let $=M.textures;for(let nt=0;nt<$.length;nt++){let Q=$[nt],St=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),pt=y(Q.internalFormat,St,lt,Q.colorSpace),U=qt(M);z&&Zt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,U,pt,M.width,M.height):Zt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,pt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let $=n.get(M.depthTexture).__webglTexture,nt=qt(M);if(M.depthTexture.format===ki)Zt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(M.depthTexture.format===Zi)Zt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function zt(A){let M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=$}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ut(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),vt(M.__webglDepthbuffer[$],A,!1);else{let nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),vt(M.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(A,M,z){let $=n.get(A);M!==void 0&&st($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&zt(A)}function Yt(A){let M=A.texture,z=n.get(A),$=n.get(M);A.addEventListener("dispose",b);let nt=A.textures,Q=A.isWebGLCubeRenderTarget===!0,St=nt.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let pt=0;pt<M.mipmaps.length;pt++)z.__webglFramebuffer[lt][pt]=s.createFramebuffer()}else z.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)z.__webglFramebuffer[lt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(St)for(let lt=0,pt=nt.length;lt<pt;lt++){let U=n.get(nt[lt]);U.__webglTexture===void 0&&(U.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Zt(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<nt.length;lt++){let pt=nt[lt];z.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);let U=r.convert(pt.format,pt.colorSpace),D=r.convert(pt.type),et=y(pt.internalFormat,U,D,pt.colorSpace,A.isXRRenderTarget===!0),rt=qt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,et,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),bt(s.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)st(z.__webglFramebuffer[lt][pt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else st(z.__webglFramebuffer[lt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,pt=nt.length;lt<pt;lt++){let U=nt[lt],D=n.get(U);e.bindTexture(s.TEXTURE_2D,D.__webglTexture),bt(s.TEXTURE_2D,U),st(z.__webglFramebuffer,A,U,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(U)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),bt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)st(z.__webglFramebuffer[pt],A,M,s.COLOR_ATTACHMENT0,lt,pt);else st(z.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,lt,0);m(M)&&f(lt),e.unbindTexture()}A.depthBuffer&&zt(A)}function ne(A){let M=A.textures;for(let z=0,$=M.length;z<$;z++){let nt=M[z];if(m(nt)){let Q=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=n.get(nt).__webglTexture;e.bindTexture(Q,St),f(Q),e.unbindTexture()}}}let Xt=[],I=[];function Ie(A){if(A.samples>0){if(Zt(A)===!1){let M=A.textures,z=A.width,$=A.height,nt=s.COLOR_BUFFER_BIT,Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(A),lt=M.length>1;if(lt)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);let U=n.get(M[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,z,$,0,0,z,$,nt,s.NEAREST),l===!0&&(Xt.length=0,I.length=0,Xt.push(s.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xt.push(Q),I.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);let U=n.get(M[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qt(A){return Math.min(i.maxSamples,A.samples)}function Zt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function ie(A,M){let z=A.colorSpace,$=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==jn&&z!==Gn&&(ce.getTransfer(z)===me?($!==un||nt!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=tt,this.setTexture3D=X,this.setTextureCube=it,this.rebindTextures=Ot,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Zt}function g0(s,t){function e(n,i=Gn){let r,o=ce.getTransfer(i);if(n===Pn)return s.UNSIGNED_BYTE;if(n===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return s.BYTE;if(n===qc)return s.SHORT;if(n===Ss)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===di)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===Us)return s.HALF_FLOAT;if(n===Zc)return s.ALPHA;if(n===$c)return s.RGB;if(n===un)return s.RGBA;if(n===Jc)return s.LUMINANCE;if(n===Kc)return s.LUMINANCE_ALPHA;if(n===ki)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===xl)return s.RED_INTEGER;if(n===Qc)return s.RG;if(n===_l)return s.RG_INTEGER;if(n===yl)return s.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===jo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===ya||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Ma||n===Ea||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var za=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},x0={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
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

}`,Ha=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new We,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:_0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ka=class extends qn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=new Ha,m=e.getContextAttributes(),f=null,y=null,v=[],w=[],P=new _t,b=null,T=new Ge;T.layers.enable(1),T.viewport=new ue;let C=new Ge;C.layers.enable(2),C.viewport=new ue;let q=[T,C],x=new za;x.layers.enable(1),x.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=v[J];return st===void 0&&(st=new vs,v[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=v[J];return st===void 0&&(st=new vs,v[J]=st),st.getGripSpace()},this.getHand=function(J){let st=v[J];return st===void 0&&(st=new vs,v[J]=st),st.getHandSpace()};function B(J){let st=w.indexOf(J.inputSource);if(st===-1)return;let vt=v[st];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||o),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",tt);for(let J=0;J<v.length;J++){let st=w[J];st!==null&&(w[J]=null,v[J].disconnect(st))}E=null,k=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new In(p.framebufferWidth,p.framebufferHeight,{format:un,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,vt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Zi:ki,vt=m.stencil?Yi:di);let zt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new In(d.textureWidth,d.textureHeight,{format:un,type:Pn,depthTexture:new Lr(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(J){for(let st=0;st<J.removed.length;st++){let vt=J.removed[st],ut=w.indexOf(vt);ut>=0&&(w[ut]=null,v[ut].disconnect(vt))}for(let st=0;st<J.added.length;st++){let vt=J.added[st],ut=w.indexOf(vt);if(ut===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=w.length){w.push(vt),ut=Ot;break}else if(w[Ot]===null){w[Ot]=vt,ut=Ot;break}if(ut===-1)break}let zt=v[ut];zt&&zt.connect(vt)}}let X=new R,it=new R;function Z(J,st,vt){X.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(vt.matrixWorld);let ut=X.distanceTo(it),zt=st.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,Yt=zt[14]/(zt[10]-1),ne=zt[14]/(zt[10]+1),Xt=(zt[9]+1)/zt[5],I=(zt[9]-1)/zt[5],Ie=(zt[8]-1)/zt[0],qt=(Ot[8]+1)/Ot[0],Zt=Yt*Ie,Nt=Yt*qt,ie=ut/(-Ie+qt),Pt=ie*-Ie;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),zt[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let A=Yt+ie,M=ne+ie,z=Zt-Pt,$=Nt+(ut-Pt),nt=Xt*ne/M*A,Q=I*ne/M*A;J.projectionMatrix.makePerspective(z,$,nt,Q,A,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function yt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let st=J.near,vt=J.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),x.near=C.near=T.near=st,x.far=C.far=T.far=vt,(E!==x.near||k!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,k=x.far);let ut=J.parent,zt=x.cameras;yt(x,ut);for(let Ot=0;Ot<zt.length;Ot++)yt(zt[Ot],ut);zt.length===2?Z(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),gt(J,x,ut)};function gt(J,st,vt){vt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ba*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let bt=null;function Qt(J,st){if(h=st.getViewerPose(c||o),g=st,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ut=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let Ot=0;Ot<vt.length;Ot++){let Yt=vt[Ot],ne=null;if(p!==null)ne=p.getViewport(Yt);else{let I=u.getViewSubImage(d,Yt);ne=I.viewport,Ot===0&&(t.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let Xt=q[Ot];Xt===void 0&&(Xt=new Ge,Xt.layers.enable(Ot),Xt.viewport=new ue,q[Ot]=Xt),Xt.matrix.fromArray(Yt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Yt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ne.x,ne.y,ne.width,ne.height),Ot===0&&(x.matrix.copy(Xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(Xt)}let zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Ot=u.getDepthInformation(vt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,i.renderState)}}for(let vt=0;vt<v.length;vt++){let ut=w[vt],zt=v[vt];ut!==null&&zt!==void 0&&zt.update(ut,st,c||o)}bt&&bt(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Kt=new rh;Kt.setAnimationLoop(Qt),this.setAnimationLoop=function(J){bt=J},this.dispose=function(){}}},ri=new vn,v0=new te;function M0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),v=y.envMap,w=y.envMapRotation;v&&(m.envMap.value=v,ri.copy(w),ri.x*=-1,ri.y*=-1,ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(ri)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function E0(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let w=v.program;n.uniformBlockBinding(y,w)}function c(y,v){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(y,P);let b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){let v=u();y.__bindingPointIndex=v;let w=s.createBuffer(),P=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],w=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,T=w.length;b<T;b++){let C=Array.isArray(w[b])?w[b]:[w[b]];for(let q=0,x=C.length;q<x;q++){let E=C[q];if(p(E,b,q,P)===!0){let k=E.__offset,B=Array.isArray(E.value)?E.value:[E.value],H=0;for(let tt=0;tt<B.length;tt++){let X=B[tt],it=_(X);typeof X=="number"||typeof X=="boolean"?(E.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,k+H,E.__data)):X.isMatrix3?(E.__data[0]=X.elements[0],E.__data[1]=X.elements[1],E.__data[2]=X.elements[2],E.__data[3]=0,E.__data[4]=X.elements[3],E.__data[5]=X.elements[4],E.__data[6]=X.elements[5],E.__data[7]=0,E.__data[8]=X.elements[6],E.__data[9]=X.elements[7],E.__data[10]=X.elements[8],E.__data[11]=0):(X.toArray(E.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,v,w,P){let b=y.value,T=v+"_"+w;if(P[T]===void 0)return typeof b=="number"||typeof b=="boolean"?P[T]=b:P[T]=b.clone(),!0;{let C=P[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return P[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(y){let v=y.uniforms,w=0,P=16;for(let T=0,C=v.length;T<C;T++){let q=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,E=q.length;x<E;x++){let k=q[x],B=Array.isArray(k.value)?k.value:[k.value];for(let H=0,tt=B.length;H<tt;H++){let X=B[H],it=_(X),Z=w%P,yt=Z%it.boundary,gt=Z+yt;w+=yt,gt!==0&&P-gt<it.storage&&(w+=P-gt),k.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=it.storage}}}let b=w%P;return b>0&&(w+=P-b),y.__size=w,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}var Ji=class{constructor(t={}){let{canvas:e=wu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Vn,this.toneMappingExposure=1;let v=this,w=!1,P=0,b=0,T=null,C=-1,q=null,x=new ue,E=new ue,k=null,B=new Vt(0),H=0,tt=e.width,X=e.height,it=1,Z=null,yt=null,gt=new ue(0,0,tt,X),bt=new ue(0,0,tt,X),Qt=!1,Kt=new As,J=!1,st=!1,vt=new te,ut=new te,zt=new R,Ot=new ue,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Xt(){return T===null?it:1}let I=n;function Ie(S,N){return e.getContext(S,N)}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",K,!1),I===null){let N="webgl2";if(I=Ie(N,S),I===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let qt,Zt,Nt,ie,Pt,A,M,z,$,nt,Q,St,lt,pt,U,D,et,rt,ct,ot,Rt,Tt,Bt,L;function dt(){qt=new Bp(I),qt.init(),Tt=new g0(I,qt),Zt=new Lp(I,qt,t,Tt),Nt=new f0(I),Zt.reverseDepthBuffer&&Nt.buffers.depth.setReversed(!0),ie=new kp(I),Pt=new t0,A=new m0(I,qt,Nt,Pt,Zt,Tt,ie),M=new Up(v),z=new Fp(v),$=new Yu(I),Bt=new Pp(I,$),nt=new zp(I,$,ie,Bt),Q=new Vp(I,nt,$,ie),ct=new Gp(I,Zt,A),D=new Dp(Pt),St=new jm(v,M,z,qt,Zt,Bt,D),lt=new M0(v,Pt),pt=new n0,U=new l0(qt),rt=new Cp(v,M,z,Nt,Q,d,l),et=new u0(v,Q,Zt),L=new E0(I,ie,Zt,Nt),ot=new Ip(I,qt,ie),Rt=new Hp(I,qt,ie),ie.programs=St.programs,v.capabilities=Zt,v.extensions=qt,v.properties=Pt,v.renderLists=pt,v.shadowMap=et,v.state=Nt,v.info=ie}dt();let Y=new ka(v,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(tt,X,!1))},this.getSize=function(S){return S.set(tt,X)},this.setSize=function(S,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=S,X=N,e.width=Math.floor(S*it),e.height=Math.floor(N*it),V===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(tt*it,X*it).floor()},this.setDrawingBufferSize=function(S,N,V){tt=S,X=N,it=V,e.width=Math.floor(S*V),e.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,N,V,W){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,N,V,W),Nt.viewport(x.copy(gt).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(bt)},this.setScissor=function(S,N,V,W){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,N,V,W),Nt.scissor(E.copy(bt).multiplyScalar(it).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(S){Nt.setScissorTest(Qt=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){yt=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,N=!0,V=!0){let W=0;if(S){let O=!1;if(T!==null){let at=T.texture.format;O=at===yl||at===_l||at===xl}if(O){let at=T.texture.type,xt=at===Pn||at===di||at===Ss||at===Yi||at===pl||at===ml,At=rt.getClearColor(),Ct=rt.getClearAlpha(),Ht=At.r,Gt=At.g,Lt=At.b;xt?(p[0]=Ht,p[1]=Gt,p[2]=Lt,p[3]=Ct,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ht,g[1]=Gt,g[2]=Lt,g[3]=Ct,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",K,!1),pt.dispose(),U.dispose(),Pt.dispose(),M.dispose(),z.dispose(),Q.dispose(),Bt.dispose(),L.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Le),Y.removeEventListener("sessionend",De),Me.stop()};function F(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=ie.autoReset,N=et.enabled,V=et.autoUpdate,W=et.needsUpdate,O=et.type;dt(),ie.autoReset=S,et.enabled=N,et.autoUpdate=V,et.needsUpdate=W,et.type=O}function K(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function wt(S){let N=S.target;N.removeEventListener("dispose",wt),Ft(N)}function Ft(S){oe(S),Pt.remove(S)}function oe(S){let N=Pt.get(S).programs;N!==void 0&&(N.forEach(function(V){St.releaseProgram(V)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,W,O,at){N===null&&(N=Yt);let xt=O.isMesh&&O.matrixWorld.determinant()<0,At=Dh(S,N,V,W,O);Nt.setMaterial(W,xt);let Ct=V.index,Ht=1;if(W.wireframe===!0){if(Ct=nt.getWireframeAttribute(V),Ct===void 0)return;Ht=2}let Gt=V.drawRange,Lt=V.attributes.position,he=Gt.start*Ht,pe=(Gt.start+Gt.count)*Ht;at!==null&&(he=Math.max(he,at.start*Ht),pe=Math.min(pe,(at.start+at.count)*Ht)),Ct!==null?(he=Math.max(he,0),pe=Math.min(pe,Ct.count)):Lt!=null&&(he=Math.max(he,0),pe=Math.min(pe,Lt.count));let ve=pe-he;if(ve<0||ve===1/0)return;Bt.setup(O,W,At,V,Ct);let $e,ae=ot;if(Ct!==null&&($e=$.get(Ct),ae=Rt,ae.setIndex($e)),O.isMesh)W.wireframe===!0?(Nt.setLineWidth(W.wireframeLinewidth*Xt()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(O.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),Nt.setLineWidth(Dt*Xt()),O.isLineSegments?ae.setMode(I.LINES):O.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else O.isPoints?ae.setMode(I.POINTS):O.isSprite&&ae.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ae.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ae.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Dt=O._multiDrawStarts,Oe=O._multiDrawCounts,le=O._multiDrawCount,rn=Ct?$.get(Ct).bytesPerElement:1,Si=Pt.get(W).currentProgram.getUniforms();for(let Je=0;Je<le;Je++)Si.setValue(I,"_gl_DrawID",Je),ae.render(Dt[Je]/rn,Oe[Je])}else if(O.isInstancedMesh)ae.renderInstances(he,ve,O.count);else if(V.isInstancedBufferGeometry){let Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Oe=Math.min(V.instanceCount,Dt);ae.renderInstances(he,ve,Oe)}else ae.render(he,ve)};function kt(S,N,V){S.transparent===!0&&S.side===Ae&&S.forceSinglePass===!1?(S.side=Ye,S.needsUpdate=!0,Mi(S,N,V),S.side=Wn,S.needsUpdate=!0,Mi(S,N,V),S.side=Ae):Mi(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),m=U.get(V),m.init(N),y.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==V&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let W=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let at=O.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){let At=at[xt];kt(At,V,O),W.add(At)}else kt(at,V,O),W.add(at)}),y.pop(),m=null,W},this.compileAsync=function(S,N,V=null){let W=this.compile(S,N,V);return new Promise(O=>{function at(){if(W.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){O(S);return}setTimeout(at,10)}qt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let se=null;function be(S){se&&se(S)}function Le(){Me.stop()}function De(){Me.start()}let Me=new rh;Me.setAnimationLoop(be),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(S){se=S,Y.setAnimationLoop(S),S===null?Me.stop():Me.start()},Y.addEventListener("sessionstart",Le),Y.addEventListener("sessionend",De),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,T),m=U.get(S,y.length),m.init(N),y.push(m),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Kt.setFromProjectionMatrix(ut),st=this.localClippingEnabled,J=D.init(this.clippingPlanes,st),_=pt.get(S,f.length),_.init(),f.push(_),Y.enabled===!0&&Y.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&Te(at,N,-1/0,v.sortObjects)}Te(S,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Z,yt),ne=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ne&&rt.addToRenderList(_,S),this.info.render.frame++,J===!0&&D.beginShadows();let V=m.state.shadowsArray;et.render(V,S,N),J===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=_.opaque,O=_.transmissive;if(m.setupLights(),N.isArrayCamera){let at=N.cameras;if(O.length>0)for(let xt=0,At=at.length;xt<At;xt++){let Ct=at[xt];mn(W,O,S,Ct)}ne&&rt.render(S);for(let xt=0,At=at.length;xt<At;xt++){let Ct=at[xt];yi(_,S,Ct,Ct.viewport)}}else O.length>0&&mn(W,O,S,N),ne&&rt.render(S),yi(_,S,N);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,N),Bt.resetDefaultState(),C=-1,q=null,y.pop(),y.length>0?(m=y[y.length-1],J===!0&&D.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Te(S,N,V,W){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Kt.intersectsSprite(S)){W&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ut);let xt=Q.update(S),At=S.material;At.visible&&_.push(S,xt,At,V,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Kt.intersectsObject(S))){let xt=Q.update(S),At=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ot.copy(xt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(ut)),Array.isArray(At)){let Ct=xt.groups;for(let Ht=0,Gt=Ct.length;Ht<Gt;Ht++){let Lt=Ct[Ht],he=At[Lt.materialIndex];he&&he.visible&&_.push(S,xt,he,V,Ot.z,Lt)}}else At.visible&&_.push(S,xt,At,V,Ot.z,null)}}let at=S.children;for(let xt=0,At=at.length;xt<At;xt++)Te(at[xt],N,V,W)}function yi(S,N,V,W){let O=S.opaque,at=S.transmissive,xt=S.transparent;m.setupLightsView(V),J===!0&&D.setGlobalState(v.clippingPlanes,V),W&&Nt.viewport(x.copy(W)),O.length>0&&Ze(O,N,V),at.length>0&&Ze(at,N,V),xt.length>0&&Ze(xt,N,V),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function mn(S,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new In(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Us:Pn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let at=m.state.transmissionRenderTarget[W.id],xt=W.viewport||x;at.setSize(xt.z,xt.w);let At=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(B),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),ne&&rt.render(V);let Ct=v.toneMapping;v.toneMapping=Vn;let Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),J===!0&&D.setGlobalState(v.clippingPlanes,W),Ze(S,V,W),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Lt=0,he=N.length;Lt<he;Lt++){let pe=N[Lt],ve=pe.object,$e=pe.geometry,ae=pe.material,Dt=pe.group;if(ae.side===Ae&&ve.layers.test(W.layers)){let Oe=ae.side;ae.side=Ye,ae.needsUpdate=!0,vi(ve,V,W,$e,ae,Dt),ae.side=Oe,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(At),v.setClearColor(B,H),Ht!==void 0&&(W.viewport=Ht),v.toneMapping=Ct}function Ze(S,N,V){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,at=S.length;O<at;O++){let xt=S[O],At=xt.object,Ct=xt.geometry,Ht=W===null?xt.material:W,Gt=xt.group;At.layers.test(V.layers)&&vi(At,N,V,Ct,Ht,Gt)}}function vi(S,N,V,W,O,at){S.onBeforeRender(v,N,V,W,O,at),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,N,V,W,S,at),O.transparent===!0&&O.side===Ae&&O.forceSinglePass===!1?(O.side=Ye,O.needsUpdate=!0,v.renderBufferDirect(V,N,W,O,S,at),O.side=Wn,O.needsUpdate=!0,v.renderBufferDirect(V,N,W,O,S,at),O.side=Ae):v.renderBufferDirect(V,N,W,O,S,at),S.onAfterRender(v,N,V,W,O,at)}function Mi(S,N,V){N.isScene!==!0&&(N=Yt);let W=Pt.get(S),O=m.state.lights,at=m.state.shadowsArray,xt=O.state.version,At=St.getParameters(S,O.state,at,N,V),Ct=St.getProgramCacheKey(At),Ht=W.programs;W.environment=S.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(S.isMeshStandardMaterial?z:M).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",wt),Ht=new Map,W.programs=Ht);let Gt=Ht.get(Ct);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===xt)return Dl(S,At),Gt}else At.uniforms=St.getUniforms(S),S.onBeforeCompile(At,v),Gt=St.acquireProgram(At,Ct),Ht.set(Ct,Gt),W.uniforms=At.uniforms;let Lt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=D.uniform),Dl(S,At),W.needsLights=Nh(S),W.lightsStateVersion=xt,W.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Ei(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Vi.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Dl(S,N){let V=Pt.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Dh(S,N,V,W,O){N.isScene!==!0&&(N=Yt),A.resetTextureUnits();let at=N.fog,xt=W.isMeshStandardMaterial?N.environment:null,At=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jn,Ct=(W.isMeshStandardMaterial?z:M).get(W.envMap||xt),Ht=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,pe=!!V.morphAttributes.color,ve=Vn;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=v.toneMapping);let $e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=$e!==void 0?$e.length:0,Dt=Pt.get(W),Oe=m.state.lights;if(J===!0&&(st===!0||S!==q)){let tn=S===q&&W.id===C;D.setState(W,S,tn)}let le=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Oe.state.version||Dt.outputColorSpace!==At||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==Ct||W.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==D.numPlanes||Dt.numIntersection!==D.numIntersection)||Dt.vertexAlphas!==Ht||Dt.vertexTangents!==Gt||Dt.morphTargets!==Lt||Dt.morphNormals!==he||Dt.morphColors!==pe||Dt.toneMapping!==ve||Dt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Dt.__version=W.version);let rn=Dt.currentProgram;le===!0&&(rn=Mi(W,N,O));let Si=!1,Je=!1,to=!1,Ee=rn.getUniforms(),Nn=Dt.uniforms;if(Nt.useProgram(rn.program)&&(Si=!0,Je=!0,to=!0),W.id!==C&&(C=W.id,Je=!0),Si||q!==S){Zt.reverseDepthBuffer?(vt.copy(S.projectionMatrix),Tu(vt),Au(vt),Ee.setValue(I,"projectionMatrix",vt)):Ee.setValue(I,"projectionMatrix",S.projectionMatrix),Ee.setValue(I,"viewMatrix",S.matrixWorldInverse);let tn=Ee.map.cameraPosition;tn!==void 0&&tn.setValue(I,zt.setFromMatrixPosition(S.matrixWorld)),Zt.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,Je=!0,to=!0)}if(O.isSkinnedMesh){Ee.setOptional(I,O,"bindMatrix"),Ee.setOptional(I,O,"bindMatrixInverse");let tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ee.setValue(I,"boneTexture",tn.boneTexture,A))}O.isBatchedMesh&&(Ee.setOptional(I,O,"batchingTexture"),Ee.setValue(I,"batchingTexture",O._matricesTexture,A),Ee.setOptional(I,O,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",O._indirectTexture,A),Ee.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",O._colorsTexture,A));let eo=V.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&ct.update(O,V,rn),(Je||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,Ee.setValue(I,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=Ct,Nn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Nn.envMapIntensity.value=N.environmentIntensity),Je&&(Ee.setValue(I,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Uh(Nn,to),at&&W.fog===!0&&lt.refreshFogUniforms(Nn,at),lt.refreshMaterialUniforms(Nn,W,it,X,m.state.transmissionRenderTarget[S.id]),Vi.upload(I,Ei(Dt),Nn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vi.upload(I,Ei(Dt),Nn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ee.setValue(I,"center",O.center),Ee.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(I,"normalMatrix",O.normalMatrix),Ee.setValue(I,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let tn=W.uniformsGroups;for(let no=0,Oh=tn.length;no<Oh;no++){let Ul=tn[no];L.update(Ul,rn),L.bind(Ul,rn)}}return rn}function Uh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Nh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,N,V){Pt.get(S.texture).__webglTexture=N,Pt.get(S.depthTexture).__webglTexture=V;let W=Pt.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){let V=Pt.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){T=S,P=N,b=V;let W=!0,O=null,at=!1,xt=!1;if(S){let Ct=Pt.get(S);if(Ct.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Ct.__hasExternalTextures)A.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Lt=S.depthTexture;if(Ct.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(S.width!==Lt.image.width||S.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let Gt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?O=Gt[N][V]:O=Gt[N],at=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?O=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[V]:O=Gt,x.copy(S.viewport),E.copy(S.scissor),k=S.scissorTest}else x.copy(gt).multiplyScalar(it).floor(),E.copy(bt).multiplyScalar(it).floor(),k=Qt;if(Nt.bindFramebuffer(I.FRAMEBUFFER,O)&&W&&Nt.drawBuffers(S,O),Nt.viewport(x),Nt.scissor(E),Nt.setScissorTest(k),at){let Ct=Pt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,V)}else if(xt){let Ct=Pt.get(S.texture),Ht=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,V||0,Ht)}C=-1},this.readRenderTargetPixels=function(S,N,V,W,O,at,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){Nt.bindFramebuffer(I.FRAMEBUFFER,At);try{let Ct=S.texture,Ht=Ct.format,Gt=Ct.type;if(!Zt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-W&&V>=0&&V<=S.height-O&&I.readPixels(N,V,W,O,Tt.convert(Ht),Tt.convert(Gt),at)}finally{let Ct=T!==null?Pt.get(T).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,W,O,at,xt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){let Ct=S.texture,Ht=Ct.format,Gt=Ct.type;if(!Zt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-W&&V>=0&&V<=S.height-O){Nt.bindFramebuffer(I.FRAMEBUFFER,At);let Lt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(N,V,W,O,Tt.convert(Ht),Tt.convert(Gt),0);let he=T!==null?Pt.get(T).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,he);let pe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bu(I,pe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Lt),I.deleteSync(pe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,V=0){S.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);let W=Math.pow(2,-V),O=Math.floor(S.image.width*W),at=Math.floor(S.image.height*W),xt=N!==null?N.x:0,At=N!==null?N.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,xt,At,O,at),Nt.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,W=null,O=0){S.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],N=arguments[2],O=arguments[3]||0,V=null);let at,xt,At,Ct,Ht,Gt;V!==null?(at=V.max.x-V.min.x,xt=V.max.y-V.min.y,At=V.min.x,Ct=V.min.y):(at=S.image.width,xt=S.image.height,At=0,Ct=0),W!==null?(Ht=W.x,Gt=W.y):(Ht=0,Gt=0);let Lt=Tt.convert(N.format),he=Tt.convert(N.type);A.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let pe=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$e=I.getParameter(I.UNPACK_SKIP_PIXELS),ae=I.getParameter(I.UNPACK_SKIP_ROWS),Dt=I.getParameter(I.UNPACK_SKIP_IMAGES),Oe=S.isCompressedTexture?S.mipmaps[O]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ht,Gt,at,xt,Lt,he,Oe.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ht,Gt,Oe.width,Oe.height,Lt,Oe.data):I.texSubImage2D(I.TEXTURE_2D,O,Ht,Gt,at,xt,Lt,he,Oe),I.pixelStorei(I.UNPACK_ROW_LENGTH,pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dt),O===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,V=null,W=null,O=0){S.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,S=arguments[2],N=arguments[3],O=arguments[4]||0);let at,xt,At,Ct,Ht,Gt,Lt,he,pe,ve=S.isCompressedTexture?S.mipmaps[O]:S.image;V!==null?(at=V.max.x-V.min.x,xt=V.max.y-V.min.y,At=V.max.z-V.min.z,Ct=V.min.x,Ht=V.min.y,Gt=V.min.z):(at=ve.width,xt=ve.height,At=ve.depth,Ct=0,Ht=0,Gt=0),W!==null?(Lt=W.x,he=W.y,pe=W.z):(Lt=0,he=0,pe=0);let $e=Tt.convert(N.format),ae=Tt.convert(N.type),Dt;if(N.isData3DTexture)A.setTexture3D(N,0),Dt=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Dt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Oe=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=I.getParameter(I.UNPACK_SKIP_PIXELS),Si=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Dt,O,Lt,he,pe,at,xt,At,$e,ae,ve.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,O,Lt,he,pe,at,xt,At,$e,ve.data):I.texSubImage3D(Dt,O,Lt,he,pe,at,xt,At,$e,ae,ve),I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Si),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),O===0&&N.generateMipmaps&&I.generateMipmap(Dt),Nt.unbindTexture()},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Nt.unbindTexture()},this.resetState=function(){P=0,b=0,T=null,Nt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===vl?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Vr?"display-p3":"srgb"}};var Jn=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ga=class extends We{constructor(t=null,e=1,n=1,i,r,o,a,l,c=qe,h=qe,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rs=class extends Be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bi=new te,Pc=new te,lr=[],Ic=new Ln,S0=new te,gs=new j,xs=new Yn,Cs=class extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Ic.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Ic)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),xs.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),Pc.multiplyMatrices(n,Bi),gs.matrixWorld=Pc,gs.raycast(t,lr);for(let o=0,a=lr.length;o<a;o++){let l=lr[o];l.instanceId=r,l.object=this,e.push(l)}lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ga(new Float32Array(i*this.count),i,this.count,gl,xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ps=class extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lc=new te,Va=new bs,cr=new Yn,hr=new R,Dr=class extends Ne{constructor(t=new Re,e=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=r,t.ray.intersectsSphere(cr)===!1)return;Lc.copy(i).invert(),Va.copy(t.ray).applyMatrix4(Lc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=c.getX(g);hr.fromBufferAttribute(u,m),Dc(hr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)hr.fromBufferAttribute(u,g),Dc(hr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dc(s,t,e,n,i,r,o){let a=Va.distanceSqToPoint(s);if(a<e){let l=new R;Va.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Dn=class extends We{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new _t:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,i=[],r=[],o=[],a=new R,l=new te;for(let p=0;p<=t;p++){let g=p/t;i[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Fe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Fe(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Is=class extends nn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends Is{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function El(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var ur=new R,No=new El,Oo=new El,Fo=new El,Xa=class extends nn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ur.subVectors(i[0],i[1]).add(i[0]),c=ur);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ur.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),No.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Fo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(No.calc(l),Oo.calc(l),Fo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uc(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function w0(s,t){let e=1-s;return e*e*t}function b0(s,t){return 2*(1-s)*s*t}function T0(s,t){return s*s*t}function Ms(s,t,e,n){return w0(s,t)+b0(s,e)+T0(s,n)}function A0(s,t){let e=1-s;return e*e*e*t}function R0(s,t){let e=1-s;return 3*e*e*s*t}function C0(s,t){return 3*(1-s)*s*s*t}function P0(s,t){return s*s*s*t}function Es(s,t,e,n,i){return A0(s,t)+R0(s,e)+C0(s,n)+P0(s,i)}var Ur=class extends nn{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,i.x,r.x,o.x,a.x),Es(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends nn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,i.x,r.x,o.x,a.x),Es(t,i.y,r.y,o.y,a.y),Es(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends nn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends nn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends nn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,i.x,r.x,o.x),Ms(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends nn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,i.x,r.x,o.x),Ms(t,i.y,r.y,o.y),Ms(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Uc(a,l.x,c.x,h.x,u.x),Uc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new _t().fromArray(i))}return this}},Nc=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:Xa,CubicBezierCurve:Ur,CubicBezierCurve3:qa,EllipseCurve:Is,LineCurve:Nr,LineCurve3:Ya,QuadraticBezierCurve:Or,QuadraticBezierCurve3:Za,SplineCurve:Fr}),$a=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Nc[i.type]().fromJSON(i))}return this}},Ja=class extends $a{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Or(this.currentPoint.clone(),new _t(t,e),new _t(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ur(this.currentPoint.clone(),new _t(t,e),new _t(n,i),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Is(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ka=class s extends Re{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new _t,p=new R,g=new R,_=new R,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=e;y++){let v=n+y*h*i,w=Math.sin(v),P=Math.cos(v);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*w,u.y=t[b].y,u.z=t[b].x*P,o.push(u.x,u.y,u.z),d.x=y/e,d.y=b/(t.length-1),a.push(d.x,d.y);let T=l[3*b+0]*w,C=l[3*b+1],q=l[3*b+0]*P;c.push(T,C,q)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let w=v+y*t.length,P=w,b=w+t.length,T=w+t.length+1,C=w+1;r.push(P,b,C),r.push(T,C,b)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},dn=class s extends Ka{constructor(t=1,e=1,n=4,i=8){let r=new Ja;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Br=class s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Et=class s extends Re{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function y(){let w=new R,P=new R,b=0,T=(e-t)/n;for(let C=0;C<=r;C++){let q=[],x=C/r,E=x*(e-t)+t;for(let k=0;k<=i;k++){let B=k/i,H=B*l+a,tt=Math.sin(H),X=Math.cos(H);P.x=E*tt,P.y=-x*n+m,P.z=E*X,u.push(P.x,P.y,P.z),w.set(tt,T,X).normalize(),d.push(w.x,w.y,w.z),p.push(B,1-x),q.push(g++)}_.push(q)}for(let C=0;C<i;C++)for(let q=0;q<r;q++){let x=_[q][C],E=_[q+1][C],k=_[q+1][C+1],B=_[q][C+1];t>0&&(h.push(x,E,B),b+=3),e>0&&(h.push(E,k,B),b+=3)}c.addGroup(f,b,0),f+=b}function v(w){let P=g,b=new _t,T=new R,C=0,q=w===!0?t:e,x=w===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;let E=g;for(let k=0;k<=i;k++){let H=k/i*l+a,tt=Math.cos(H),X=Math.sin(H);T.x=q*X,T.y=m*x,T.z=q*tt,u.push(T.x,T.y,T.z),d.push(0,x,0),b.x=tt*.5+.5,b.y=X*.5*x+.5,p.push(b.x,b.y),g++}for(let k=0;k<i;k++){let B=P+k,H=E+k;w===!0?h.push(H,H+1,B):h.push(H+1,H,B),C+=3}c.addGroup(f,C,w===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},je=class s extends Et{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qa=class s extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new R,w=new R,P=new R;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],w),p(e[b+2],P),l(v,w,P,y)}function l(y,v,w,P){let b=P+1,T=[];for(let C=0;C<=b;C++){T[C]=[];let q=y.clone().lerp(w,C/b),x=v.clone().lerp(w,C/b),E=b-C;for(let k=0;k<=E;k++)k===0&&C===b?T[C][k]=q:T[C][k]=q.clone().lerp(x,k/E)}for(let C=0;C<b;C++)for(let q=0;q<2*(b-C)-1;q++){let x=Math.floor(q/2);q%2===0?(d(T[C][x+1]),d(T[C+1][x]),d(T[C][x])):(d(T[C][x+1]),d(T[C+1][x+1]),d(T[C+1][x]))}}function c(y){let v=new R;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(y),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function h(){let y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let w=m(y)/2/Math.PI+.5,P=f(y)/Math.PI+.5;o.push(w,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],w=o[y+2],P=o[y+4],b=Math.max(v,w,P),T=Math.min(v,w,P);b>.9&&T<.1&&(v<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){let w=y*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function g(){let y=new R,v=new R,w=new R,P=new R,b=new _t,T=new _t,C=new _t;for(let q=0,x=0;q<r.length;q+=9,x+=6){y.set(r[q+0],r[q+1],r[q+2]),v.set(r[q+3],r[q+4],r[q+5]),w.set(r[q+6],r[q+7],r[q+8]),b.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),P.copy(y).add(v).add(w).divideScalar(3);let E=m(P);_(b,x+0,y,E),_(T,x+2,v,E),_(C,x+4,w,E)}}function _(y,v,w,P){P<0&&y.x===1&&(o[v]=y.x-1),w.x===0&&w.z===0&&(o[v]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Kn=class s extends Qa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ki=class s extends Re{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new R,g=new _t;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let f=0;f<n;f++){let y=f+m,v=y,w=y+n+1,P=y+n+2,b=y+1;a.push(v,w,b),a.push(w,P,b)}}this.setIndex(a),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ee=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let y=[],v=f/n,w=0;f===0&&o===0?w=.5/e:f===n&&l===Math.PI&&(w=-.5/e);for(let P=0;P<=e;P++){let b=P/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+w,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let v=h[f][y+1],w=h[f][y],P=h[f+1][y],b=h[f+1][y+1];(f!==0||o>0)&&p.push(v,w,b),(f!==n-1||l<Math.PI)&&p.push(w,P,b)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Un=class s extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _e=class extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function I0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Qi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ja=class extends Qi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zl:r=t,a=2*e-n;break;case Hl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:o=t,l=2*n-e;break;case Hl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,w=p*m-p*_;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+y*o[c+P]+v*o[l+P]+w*o[u+P];return r}},tl=class extends Qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},el=class extends Qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&I0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=wa;var fi=class extends fn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=vr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends fn{};nl.prototype.ValueTypeName="color";var il=class extends fn{};il.prototype.ValueTypeName="number";var sl=class extends Qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},zr=class extends fn{InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends fn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=vr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends fn{};rl.prototype.ValueTypeName="vector";var Oc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ol=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},L0=new ol,Ls=class{constructor(t){this.manager=t!==void 0?t:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var al=class extends Ls{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Oc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ws("img");function l(){h(),Oc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ji=class extends Ls{constructor(t){super(t)}load(t,e,n,i){let r=new We,o=new al(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ts=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},es=class extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Bo=new te,Fc=new R,Bc=new R,Hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zc=new te,_s=new R,zo=new R,ll=class extends Hr{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),zo.copy(n.position),zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zo),n.updateMatrixWorld(),i.makeTranslation(-_s.x,-_s.y,-_s.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}},kr=class extends ts{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ll}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cl=class extends Hr{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qn=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ns=class extends ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var is=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Hc(){return performance.now()}var Sl="\\[\\]\\.:\\/",D0=new RegExp("["+Sl+"]","g"),wl="[^"+Sl+"]",U0="[^"+Sl.replace("\\.","")+"]",N0=/((?:WC+[\/:])*)/.source.replace("WC",wl),O0=/(WCOD+)?/.source.replace("WCOD",U0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),z0=new RegExp("^"+N0+O0+F0+B0+"$"),H0=["material","materials","bones","map"],hl=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(t){let e=z0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=hl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var og=new Float32Array(1);var kc=new te,ss=class{constructor(t,e,n=0,i=1/0){this.ray=new bs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kc),this}intersectObject(t,e=!0,n=[]){return ul(t,this,n,e),n.sort(Gc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ul(t[i],this,n,e);return n.sort(Gc),n}};function Gc(s,t){return s.distance-t.distance}function ul(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ul(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);var ls=class{constructor(t,e,n,i,r=.2){this.minX=t,this.minZ=e,this.cell=r,this.cols=Math.ceil((n-t)/r),this.rows=Math.ceil((i-e)/r),this.blocked=new Uint8Array(this.cols*this.rows)}idx(t,e){return e*this.cols+t}toCell(t,e){return{c:Math.max(0,Math.min(this.cols-1,Math.floor((t-this.minX)/this.cell))),r:Math.max(0,Math.min(this.rows-1,Math.floor((e-this.minZ)/this.cell)))}}center(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}blockRect(t,e,n,i,r=.22){let o=this.toCell(Math.min(t,n)-r,Math.min(e,i)-r),a=this.toCell(Math.max(t,n)+r,Math.max(e,i)+r);for(let l=o.r;l<=a.r;l++)for(let c=o.c;c<=a.c;c++)this.blocked[this.idx(c,l)]=1}isFree(t,e){let{c:n,r:i}=this.toCell(t,e);return!this.blocked[this.idx(n,i)]}nearestFree(t,e){if(!this.blocked[this.idx(t,e)])return{c:t,r:e};for(let n=1;n<12;n++)for(let i=-n;i<=n;i++)for(let r=-n;r<=n;r++){let o=t+r,a=e+i;if(!(o<0||a<0||o>=this.cols||a>=this.rows)&&!this.blocked[this.idx(o,a)])return{c:o,r:a}}return{c:t,r:e}}lineFree(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),i=Math.max(1,Math.ceil(n/(this.cell*.5)));for(let r=1;r<i;r++){let o=r/i;if(!this.isFree(t.x+(e.x-t.x)*o,t.z+(e.z-t.z)*o))return!1}return!0}find(t,e){let n=this.toCell(t.x,t.z),i=this.nearestFree(...Object.values(this.toCell(e.x,e.z))),r=this.idx(n.c,n.r),o=this.idx(i.c,i.r);if(r===o)return[{x:e.x,z:e.z}];let a=this.cols*this.rows,l=new Float32Array(a).fill(1/0),c=new Int32Array(a).fill(-1),h=new Uint8Array(a),u=[],d=(b,T)=>{u.push([T,b]);let C=u.length-1;for(;C>0;){let q=C-1>>1;if(u[q][0]<=u[C][0])break;[u[q],u[C]]=[u[C],u[q]],C=q}},p=()=>{let b=u[0],T=u.pop();if(u.length){u[0]=T;let C=0;for(;;){let q=2*C+1,x=q+1,E=C;if(q<u.length&&u[q][0]<u[E][0]&&(E=q),x<u.length&&u[x][0]<u[E][0]&&(E=x),E===C)break;[u[E],u[C]]=[u[C],u[E]],C=E}}return b[1]},g=b=>{let T=Math.abs(b%this.cols-i.c),C=Math.abs(Math.floor(b/this.cols)-i.r);return T+C+(Math.SQRT2-2)*Math.min(T,C)};l[r]=0,d(r,g(r));let _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],m=!1;for(;u.length;){let b=p();if(h[b])continue;if(b===o){m=!0;break}h[b]=1;let T=b%this.cols,C=Math.floor(b/this.cols);for(let[q,x,E]of _){let k=T+q,B=C+x;if(k<0||B<0||k>=this.cols||B>=this.rows)continue;let H=this.idx(k,B);if(this.blocked[H]&&H!==o||q&&x&&(this.blocked[this.idx(T+q,C)]||this.blocked[this.idx(T,C+x)]))continue;let tt=l[b]+E;tt<l[H]&&(l[H]=tt,c[H]=b,d(H,tt+g(H)))}}if(!m)return[{x:e.x,z:e.z}];let f=[];for(let b=o;b!==-1&&b!==r;b=c[b])f.push(b);f.reverse();let y=f.map(b=>this.center(b%this.cols,Math.floor(b/this.cols)));y[y.length-1]={x:e.x,z:e.z};let v=[],w={x:t.x,z:t.z},P=0;for(;P<y.length;){let b=P;for(let T=y.length-1;T>P;T--)if(this.lineFree(w,y[T])){b=T;break}v.push(y[b]),w=y[b],P=b+1}return v}};var Os=(s,t=.85)=>new _e({color:s,roughness:t}),bl=[{x:.4,z:.4},{x:-1.6,z:.6},{x:1.9,z:0},{x:-5,z:2.6},{x:5.4,z:-3.3},{x:-2.4,z:3.9},{x:2.6,z:3.8},{x:-5.6,z:-2.8},{x:.2,z:-3.6},{x:3.2,z:-3.7}],cs=class{constructor(t,e){this.nav=e,this.root=new Wt,this.body=new Wt,this.root.add(this.body);let n=Os("#e39a4e"),i=Os("#b86e2c"),r=Os("#fbf3e6"),o=Os("#f2a3a3"),a=(u,d,p,g,_,m)=>{let f=new j(d,p);return f.position.set(g,_,m),f.castShadow=!0,u.add(f),f},l=a(this.body,new dn(.11,.26,6,12),n,0,.2,0);l.rotation.x=Math.PI/2,a(this.body,new ee(.075,10,8),r,0,.17,.12).scale.set(1,1,.7);for(let u of[-.06,.04])a(this.body,new Mt(.2,.03,.05),i,0,.3,u).rotation.x=.1;this.head=new Wt,this.head.position.set(0,.32,.2),this.body.add(this.head),a(this.head,new ee(.1,14,12),n,0,0,0).scale.set(1.05,.95,.95),a(this.head,new ee(.05,10,8),r,0,-.03,.07).scale.set(1.2,.8,.7);for(let u of[-1,1]){let d=a(this.head,new je(.035,.07,4),n,u*.055,.09,-.01);d.rotation.z=-u*.25,a(this.head,new ee(.012,6,6),Os("#1d1a17",.3),u*.038,.02,.088)}a(this.head,new ee(.01,6,6),o,0,-.01,.1),this.legs=[];for(let[u,d]of[[-.06,.12],[.06,.12],[-.06,-.12],[.06,-.12]]){let p=new Wt;p.position.set(u,.15,d),this.body.add(p),a(p,new Et(.025,.022,.15,6),n,0,-.075,0),a(p,new ee(.026,6,6),r,0,-.15,.01),this.legs.push(p)}this.tail=[];let c=this.body,h=[0,.24,-.24];for(let u=0;u<5;u++){let d=new Wt;d.position.set(...h),c.add(d),a(d,new Et(.022-u*.002,.025-u*.002,.08,6),u===4?i:n,0,.04,0),this.tail.push(d),c=d,h=[0,.08,0]}this.tail[0].rotation.x=-.9,this.pos={x:1,z:.8},this.facing=0,this.path=[],this.mode="sit",this.until=performance.now()/1e3+4,this.phase=0,this.root.position.set(this.pos.x,0,this.pos.z),t.add(this.root)}pet(){this.path=[],this.mode="happy",this.until=performance.now()/1e3+2.6}headWorld(t){return this.head.updateWorldMatrix(!0,!1),t.set(0,.2,0).applyMatrix4(this.head.matrixWorld)}pickTarget(){for(let t=0;t<8;t++){let e=bl[Math.floor(Math.random()*bl.length)];if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)>1.5)return e}return bl[0]}update(t,e){this.mode==="happy"&&e>this.until&&(this.mode="sit",this.until=e+3+Math.random()*5),this.mode!=="walk"&&this.mode!=="happy"&&e>this.until&&(this.path=this.nav.find(this.pos,this.pickTarget()),this.mode="walk");let n=!1;if(this.mode==="walk"){let l=this.path[0];if(l){let c=l.x-this.pos.x,h=l.z-this.pos.z,u=Math.hypot(c,h),d=.75*t;u<=d?(this.pos.x=l.x,this.pos.z=l.z,this.path.shift()):(this.pos.x+=c/u*d,this.pos.z+=h/u*d);let g=((Math.atan2(c,h)-this.facing+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;this.facing+=g*Math.min(1,t*8),n=!0}else{let c=Math.random();this.mode=c<.35?"loaf":"sit",this.until=e+5+Math.random()*12}}this.phase+=t*(n?11:0);let i=1-Math.exp(-t*8);this.legs.forEach((l,c)=>{let h=Math.sin(this.phase+(c%2?Math.PI:0)+(c>1?Math.PI/2:0));l.rotation.x+=((n?h*.6:this.mode==="loaf"?-1.3:0)-l.rotation.x)*i});let r=this.mode==="sit"?-.45:0,o=this.mode==="loaf"?-.1:this.mode==="sit"?-.03:Math.abs(Math.sin(this.phase))*.01;this.body.rotation.x+=(r-this.body.rotation.x)*i,this.body.position.y+=(o-this.body.position.y)*i,this.mode==="sit"?this.body.position.z+=(-.08-this.body.position.z)*i:this.body.position.z+=(0-this.body.position.z)*i,this.mode==="happy"&&(this.body.position.y=Math.abs(Math.sin(e*9))*.12),this.head.rotation.x=this.mode==="sit"?.45:this.mode==="happy"?-.3:0,this.head.rotation.y=n?0:Math.sin(e*.7)*.6;let a=this.mode==="happy";this.tail.forEach((l,c)=>{c&&(l.rotation.z=Math.sin(e*(a?14:n?6:2.2)+c*.7)*(.18+c*.03)),l.rotation.x=c?a?.05:.25:this.mode==="loaf"?-1.45:a?-.15:-.9}),this.root.position.set(this.pos.x,0,this.pos.z),this.root.rotation.y=this.facing}};var hh=["#f1c9a5","#e2ae84","#f6d7bd","#c98e62","#ebbf98","#d9a074"];var uh=["short","long","spiky","bun","bob","short"],k0=(s,t,e)=>s+(t-s)*e,dh={},jt=(s,t)=>dh[s]||(dh[s]=t());function ze(s,t=.75){return new _e({color:s,roughness:t,metalness:0})}var mi=class{constructor(t,e){this.index=e,this.root=new Wt,this.body=new Wt,this.root.add(this.body),this.joint={},this.pose={legL:0,legR:0,armLx:0,armRx:0,armLz:.08,armRz:-.08,headY:0,headX:0,lean:0,lift:0},this.phase=Math.random()*10,this.blinkAt=performance.now()/1e3+1+Math.random()*3,this.talkUntil=0,this.action=null,this.actionUntil=0,this.build(t)}build(t){this.agent=t,t={...t};let e=t.skin||hh[this.index%hh.length],n=t.hairStyle||uh[this.index%uh.length];for(;this.body.children.length;)this.body.remove(this.body.children[0]);let i={shirt:ze(t.shirt||"#3b6fb6",.8),skin:ze(e,.6),hair:ze(t.hair||"#2b1d14",.9),pants:ze(t.pants||"#2f3342",.85),shoe:ze(t.shoes||"#1d1d24",.6),dark:ze("#1f1a17",.4),white:ze("#ffffff",.3),mouth:ze("#7a3434",.6),cheek:new _e({color:"#ff8f8f",transparent:!0,opacity:.35,roughness:1})};this.mats=i;let r=(y,v,w,P=0,b=0,T=0)=>{let C=new j(v,w);return C.position.set(P,b,T),C.castShadow=!0,y.add(C),C},o=.42,a=jt("leg",()=>new dn(.078,.25,4,10)),l=jt("shoe",()=>new Mt(.14,.08,.22));for(let y of[-1,1]){let v=new Wt;v.position.set(y*.095,o,0),r(v,a,i.pants,0,-.2,0),r(v,l,i.shoe,0,-.375,.045),this.body.add(v),this.joint[y<0?"legL":"legR"]=v}let c=r(this.body,jt("torso",()=>new dn(.19,.2,6,14)),i.shirt,0,.68,0);c.scale.set(1,1,.78),this.torso=c,r(this.body,jt("belt",()=>new Et(.185,.185,.05,16)),i.pants,0,.47,0).scale.set(1,1,.8);let h=jt("arm",()=>new dn(.062,.22,4,10)),u=jt("hand",()=>new ee(.068,12,10));for(let y of[-1,1]){let v=new Wt;v.position.set(y*.255,.86,0),r(v,h,i.shirt,0,-.15,0),r(v,u,i.skin,0,-.35,0),this.body.add(v),this.joint[y<0?"armL":"armR"]=v}this.cup=r(this.joint.armR,jt("cup",()=>new Et(.05,.04,.11,12)),ze("#e9f3fb",.3),0,-.4,.05),this.cup.visible=!1,this.paper=r(this.joint.armL,jt("paper",()=>new Mt(.2,.02,.26)),ze("#fffdf5",.9),0,-.4,.08),this.paper.visible=!1;let d=new Wt;d.position.set(0,1,0),this.body.add(d),this.joint.head=d,r(d,jt("neck",()=>new Et(.07,.08,.1,10)),i.skin,0,-.03,0),r(d,jt("head",()=>new ee(.25,24,18)),i.skin,0,.19,0);let p=jt("eye",()=>new ee(.034,12,10)),g=jt("hl",()=>new ee(.011,6,6));this.eyes=[];for(let y of[-1,1]){let v=r(d,p,i.dark,y*.088,.21,.222);v.scale.set(1,1.15,.6),r(v,g,i.white,.012,.014,.03).castShadow=!1,this.eyes.push(v);let w=r(d,jt("cheek",()=>new ee(.045,10,8)),i.cheek,y*.15,.13,.19);w.scale.set(1,.6,.3),w.castShadow=!1}this.mouth=r(d,jt("mouth",()=>new Mt(.075,.02,.02)),i.mouth,0,.1,.238);let _=r(d,jt("cap",()=>new ee(.268,24,14,0,Math.PI*2,0,Math.PI*.52)),i.hair,0,.2,-.005);if(_.rotation.x=-.32,n==="buzz"?_.scale.set(.97,.9,.97):r(d,jt("bang",()=>new ee(.2,16,10)),i.hair,0,.36,.12).scale.set(1.15,.38,.62),n==="curly"){let y=jt("curl",()=>new ee(.085,10,8));for(let v=0;v<14;v++){let w=v/14*Math.PI*2,P=v%2?.36:.28;r(d,y,i.hair,Math.sin(w)*.24,P+Math.cos(w*2)*.03,Math.cos(w)*.22-.03)}r(d,y,i.hair,0,.47,0),r(d,y,i.hair,.1,.45,-.08),r(d,y,i.hair,-.1,.45,-.08)}else if(n==="ponytail"){r(d,jt("tie2",()=>new ee(.06,10,8)),ze(t.accent||"#e1262d",.5),0,.33,-.25);let y=r(d,jt("tail",()=>new dn(.075,.26,4,10)),i.hair,0,.16,-.32);y.rotation.x=.35}else if(n==="long"){r(d,jt("long",()=>new dn(.2,.28,6,12)),i.hair,0,.05,-.12).scale.set(1.15,1,.55);for(let v of[-1,1])r(d,jt("lock",()=>new dn(.06,.24,4,8)),i.hair,v*.22,.07,.02)}else if(n==="bun")r(d,jt("bun",()=>new ee(.11,14,10)),i.hair,0,.45,-.13);else if(n==="spiky"){let y=jt("spike",()=>new je(.07,.17,6));[[-.12,.44,.02,.4],[0,.48,0,0],[.12,.44,.02,-.4],[-.06,.45,-.12,.2],[.07,.45,-.12,-.2]].forEach(([v,w,P,b])=>{let T=r(d,y,i.hair,v,w,P);T.rotation.z=b,T.rotation.x=-.25})}else if(n==="bob"){let y=r(d,jt("bob",()=>new ee(.29,20,12,0,Math.PI*2,0,Math.PI*.62)),i.hair,0,.16,-.03);y.rotation.x=-.15}let m=t.accessory||"none",f=ze(t.accent||"#e1262d",.5);if(m==="cap"){let y=r(d,jt("capTop",()=>new ee(.275,20,12,0,Math.PI*2,0,Math.PI*.5)),f,0,.24,-.01);y.rotation.x=-.18;let v=r(d,jt("brim",()=>new Et(.17,.17,.025,20,1,!1,-Math.PI/2,Math.PI)),f,0,.3,.2);v.rotation.x=.12}else if(m==="headphones"){let y=r(d,jt("band",()=>new Un(.28,.022,8,24,Math.PI)),ze("#2b2b33",.4),0,.2,0);y.rotation.z=0;for(let v of[-1,1])r(d,jt("cup2",()=>new Et(.075,.075,.06,16)),f,v*.27,.18,0).rotation.z=Math.PI/2}else if(m==="bow"){for(let y of[-1,1]){let v=r(d,jt("bowW",()=>new je(.07,.13,4)),f,y*.07,.43,.06);v.rotation.z=y*Math.PI/2}r(d,jt("bowK",()=>new ee(.035,8,6)),f,0,.43,.06)}else m==="crown"&&(r(d,jt("crown",()=>new Et(.14,.15,.1,5,1,!0)),ze("#f5c518",.3),0,.5,-.02).material.side=Ae);if(m==="glasses"&&!t.isReviewer&&(t={...t,isReviewer:!0}),m==="tie"&&!t.isManager&&(t={...t,isManager:!0}),t.isManager&&(r(this.body,jt("tie",()=>new Mt(.06,.24,.02)),ze("#b3362f",.5),0,.73,.155),r(this.body,jt("knot",()=>new Mt(.075,.05,.03)),ze("#8f2a24",.5),0,.86,.15)),t.isReviewer){let y=ze("#2b2b33",.4),v=jt("glass",()=>new Un(.062,.012,8,20));for(let w of[-1,1])r(d,v,y,w*.088,.21,.245);r(d,jt("bridge",()=>new Mt(.06,.012,.012)),y,0,.215,.25)}}say(t){this.talkUntil=performance.now()/1e3+t/1e3}doAction(t,e){this.action=t,this.actionUntil=performance.now()/1e3+e/1e3}animate(t,e,{moving:n,speed:i,seated:r,typing:o}){let a=this.pose,l={legL:0,legR:0,armLx:0,armRx:0,armLz:.1,armRz:-.1,headY:0,headX:0,lean:0,lift:0};if(this.action&&e>this.actionUntil&&(this.action=null),n){this.phase+=t*(4+i*3.2);let p=Math.sin(this.phase);l.legL=p*.62,l.legR=-p*.62,l.armLx=-p*.55,l.armRx=p*.55,l.lift=Math.abs(Math.cos(this.phase))*.04,l.lean=.06}else r?(l.legL=l.legR=-1.48,l.lift=.06,o?(l.armLx=-1.18+Math.sin(e*17)*.13,l.armRx=-1.18+Math.sin(e*17+1.7)*.13,l.armLz=.22,l.armRz=-.22,l.lean=.12,l.headX=.12,l.headY=Math.sin(e*.7+this.index)*.15):(l.armLx=-.7,l.armRx=-.7,l.armLz=.18,l.armRz=-.18,l.headY=Math.sin(e*.4+this.index*2)*.25)):l.lift=Math.sin(e*2.2+this.index)*.006;if(this.action==="stretch"){let p=Math.sin(e*3)*.12;l.armLx=-2.85+p,l.armRx=-2.85-p,l.armLz=.25,l.armRz=-.25,l.headX=-.2,l.lean=-.1}else if(this.action==="drink")l.armRx=-2.1,l.armRz=.35,l.headX=-.28;else if(this.action==="look")l.headY=Math.sin(e*1.6)*.7;else if(this.action==="wave")l.armRx=-2.7,l.armRz=-.35+Math.sin(e*13)*.4,l.headX=-.1,l.headY=.15;else if(this.action==="dance"){let p=Math.sin(e*8);l.armLx=-1.6+p*1.1,l.armRx=-1.6-p*1.1,l.armLz=.5,l.armRz=-.5,r||(l.lift=Math.abs(Math.sin(e*8))*.1,l.legL=p*.35,l.legR=-p*.35),l.headY=Math.sin(e*4)*.3}else if(this.action==="cheer"){let p=Math.sin(e*9);l.armLx=-2.9+p*.2,l.armRx=-2.9-p*.2,l.armLz=.45,l.armRz=-.45,l.headX=-.25,r||(l.lift=Math.abs(Math.sin(e*7))*.16)}else this.action==="place"&&(l.armLx=-1.2,l.armRx=-1.2,l.lean=.25,l.headX=.25);let c=e<this.talkUntil;c&&!r&&!n&&!this.action?(l.armRx=-.55+Math.sin(e*5.5)*.35,l.armRz=-.25,l.headX=Math.sin(e*4)*.08):c&&(l.headX+=Math.sin(e*4)*.06),this.cup.visible=this.action==="drink",this.paper.visible=this.action==="place"||this.carrying===!0,(this.carrying&&!n&&!this.action||this.carrying&&n)&&(l.armLx=-.9);let h=1-Math.exp(-t*11);for(let p of Object.keys(l))a[p]=k0(a[p],l[p],h);let u=this.joint;u.legL.rotation.x=a.legL,u.legR.rotation.x=a.legR,u.armL.rotation.set(a.armLx,0,a.armLz),u.armR.rotation.set(a.armRx,0,a.armRz),u.head.rotation.set(a.headX,a.headY,0),this.body.rotation.x=a.lean,this.body.position.y=a.lift,this.torso.scale.y=1+Math.sin(e*2.2+this.index)*.012;let d=1.15;e>this.blinkAt&&(d=.15,e>this.blinkAt+.12&&(this.blinkAt=e+2+Math.random()*4));for(let p of this.eyes)p.scale.y=d;this.mouth.scale.set(c?.8:1,c?1+Math.abs(Math.sin(e*17))*2.6:1,1)}headWorld(t){return this.joint.head.updateWorldMatrix(!0,!1),t.set(0,.5,0).applyMatrix4(this.joint.head.matrixWorld)}};var Ut={minX:-7,maxX:7,minZ:-5,maxZ:5,wallH:3.1},Fs=[{x:0,z:-1.5},{x:-4.1,z:-1.5},{x:4.1,z:-1.5},{x:-4.1,z:2},{x:4.1,z:2},{x:0,z:2}],de={w:1.8,d:.85,h:.76},Bs=-.82,qr={x:-5.6,z:-4.95},Yr={cooler:{x:5.55,z:-3.75,face:{x:6.3,z:-4.45}},board:{x:.2,z:-3.85,face:{x:.2,z:-5}},windowL:{x:-3.2,z:-3.9,face:{x:-3.2,z:-5}},windowR:{x:3.4,z:-3.9,face:{x:3.4,z:-5}},shelf:{x:-5.7,z:-.4,face:{x:-7,z:-.4}},tray:{x:5.55,z:3.2,face:{x:5.55,z:4.2}},plant:{x:-5.2,z:1,face:{x:-6.5,z:1}}},gh=[[5.95,-4.95,6.7,-4.05],[-7,-1.4,-6.35,.6],[-7,2.5,-5.95,4.6],[-5.7,3.05,-4.9,3.95],[5,3.75,6.2,4.6],[-6.9,-4.9,-6.2,-4.2],[6.3,4.3,6.95,4.95],[-6.9,.8,-6.3,1.4]],It=(s,t=.8,e={})=>new _e({color:s,roughness:t,metalness:0,...e});function zs(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t;let r=i.getContext("2d");e(r,s,t);let o=new Dn(i);return n&&(o.colorSpace=Se),o.anisotropy=4,{tex:o,canvas:i,g:r}}function Xr(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function G0(){let s=Xr(7),t=zs(1024,1024,(e,n,i)=>{for(let o=0;o<i;o+=64){let a=-Math.floor(s()*300);for(;a<n;){let l=220+Math.floor(s()*260),c=[196+s()*22,142+s()*18,96+s()*14].map(Math.round);e.fillStyle=`rgb(${c})`,e.fillRect(a,o,l,64);for(let h=0;h<9;h++){e.strokeStyle=`rgba(110,70,40,${.05+s()*.07})`,e.lineWidth=1+s()*1.5;let u=o+6+s()*52;e.beginPath(),e.moveTo(a,u),e.bezierCurveTo(a+l*.3,u+(s()-.5)*8,a+l*.7,u+(s()-.5)*8,a+l,u+(s()-.5)*4),e.stroke()}e.fillStyle="rgba(80,50,30,0.55)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(80,50,30,0.6)",e.fillRect(0,o+64-2,n,2),e.fillStyle="rgba(255,235,200,0.12)",e.fillRect(0,o,n,2)}});return t.tex.wrapS=t.tex.wrapT=Xn,t.tex.repeat.set((Ut.maxX-Ut.minX)/4,(Ut.maxZ-Ut.minZ)/4),t.tex}var xh={tim:["#3f2d84","#5a42a6","#f5c518","#33246c"],mint:["#4f9c88","#7cc8b2","#fff4d6","#3f8573"],vang:["#d9a441","#f2c96b","#fff7e0","#b98a2f"],xanh:["#1a6fd6","#2f8cf0","#ffffff","#0f5bb5"],navy:["#142c5a","#1f3d73","#e1262d","#0f2247"]};function fh(s=xh.tim){return zs(512,320,(t,e,n)=>{t.fillStyle=s[0],t.fillRect(0,0,e,n),t.fillStyle=s[1],t.fillRect(18,18,e-36,n-36),t.strokeStyle=s[2],t.lineWidth=6,t.strokeRect(34,34,e-68,n-68),t.fillStyle=s[3];for(let i=70;i<e-50;i+=46)for(let r=70;r<n-50;r+=46)t.save(),t.translate(i,r),t.rotate(Math.PI/4),t.fillRect(-9,-9,18,18),t.restore();t.fillStyle=s[2];for(let i=70;i<e-50;i+=46)for(let r=70;r<n-50;r+=46)t.beginPath(),t.arc(i,r,3,0,7),t.fill()}).tex}function V0(){let s=zs(512,256,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#6fb6e8"),i.addColorStop(.7,"#bfe3f7"),i.addColorStop(1,"#f4f0dc"),t.fillStyle=i,t.fillRect(0,0,e,n);let r=Xr(3);for(let o=0;o<7;o++){let a=r()*e,l=40+r()*110,c=18+r()*22;t.fillStyle="rgba(255,255,255,0.92)";for(let h=0;h<5;h++)t.beginPath(),t.arc(a+h*c*.7,l+Math.sin(h)*5,c*(.7+r()*.5),0,7),t.fill()}t.fillStyle="#7fae7a",t.beginPath(),t.moveTo(0,n);for(let o=0;o<=e;o+=16)t.lineTo(o,n-30-Math.sin(o/40)*10-r()*6);t.lineTo(e,n),t.fill()});return s.tex.wrapS=Xn,s.tex}var W0=new ji;function ph(s,t){W0.load(s,e=>{e.colorSpace=Se,e.anisotropy=4,t(e)},void 0,()=>{})}function X0(){return zs(256,320,(s,t,e)=>{s.fillStyle="#fbf3e4",s.fillRect(0,0,t,e),s.fillStyle="#f2b450",s.beginPath(),s.arc(160,120,70,0,7),s.fill(),s.fillStyle="#3f8f8a",s.fillRect(30,170,200,90),s.fillStyle="#d0644a",s.beginPath(),s.moveTo(30,260),s.lineTo(110,150),s.lineTo(190,260),s.fill(),s.fillStyle="#2b2b33",s.font="bold 26px Segoe UI, sans-serif",s.textAlign="center",s.fillText("C\u1ED0 L\xCAN!",t/2,300)}).tex}function _h(s,t){let e={animated:[]},n=new j(new ge(Ut.maxX-Ut.minX,Ut.maxZ-Ut.minZ),It("#ffffff",.75,{map:G0()}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,s.add(n),e.floor=n;let i=It("#ffffff",.95,{map:fh()}),r=new j(new ge(5.2,2.2),i);r.rotation.x=-Math.PI/2,r.position.set(0,.006,.25),r.receiveShadow=!0,s.add(r);let o=It("#efe3cc",.95),a=It("#c9a77d",.85),l=It("#8a6040",.7);e.setDecor=(F={})=>{let G={kem:["#efe3cc","#c9a77d"],bacha:["#d6efe4","#8fc7b0"],xam:["#dfe5ee","#a9b6c9"],troi:["#d9e9f7","#8fb3dc"],vanh:["#fbf3d6","#e2c98a"]}[F.wall||"troi"];G&&(o.color.set(G[0]),a.color.set(G[1]));let K={sang:"#ffffff",dam:"#a8876a",xam:"#d4cfcb"}[F.floor||"sang"];K&&n.material.color.set(K);let wt=xh[F.rug||"xanh"];if(wt){let Ft=i.map;i.map=fh(wt),i.needsUpdate=!0,Ft&&Ft.dispose()}};let c=Ut.maxX-Ut.minX,h=Ut.maxZ-Ut.minZ,u=Ut.wallH,d=new j(new Mt(c+.2,u,.2),o);d.position.set(0,u/2,Ut.minZ-.1),d.receiveShadow=!0,s.add(d);let p=new j(new Mt(.2,u,h),o);p.position.set(Ut.minX-.1,u/2,0),p.receiveShadow=!0,s.add(p);let g=new j(new Mt(c+.2,.95,.04),a);g.position.set(0,.475,Ut.minZ+.02),g.receiveShadow=!0,s.add(g);let _=new j(new Mt(.04,.95,h),a);_.position.set(Ut.minX+.02,.475,0),_.receiveShadow=!0,s.add(_);let m=new j(new Mt(c+.2,.06,.07),l);m.position.set(0,.96,Ut.minZ+.035),s.add(m);let f=new j(new Mt(.07,.06,h),l);f.position.set(Ut.minX+.035,.96,0),s.add(f);let y=It("#5b3f2a",.8),v=new j(new Mt(c+.4,.25,.2),y);v.position.set(0,-.125,Ut.maxZ+.1),s.add(v);let w=new j(new Mt(.2,.25,h+.2),y);w.position.set(Ut.maxX+.1,-.125,0),s.add(w);let P=V0();e.sky=P;let b=It("#fbf7ee",.6);for(let F of[-3.2,3.4]){let G=new Wt;G.position.set(F,1.85,Ut.minZ+.02);let K=new fe({map:P,toneMapped:!1});(e.skyMats=e.skyMats||[]).push(K);let wt=new j(new ge(1.9,1.25),K);wt.position.z=.005,G.add(wt);let Ft=(be,Le,De,Me)=>{let Te=new j(new Mt(be,Le,.08),b);Te.position.set(De,Me,.03),Te.castShadow=!0,G.add(Te)};Ft(2.05,.08,0,.66),Ft(2.05,.08,0,-.66),Ft(.08,1.4,-.99,0),Ft(.08,1.4,.99,0),Ft(.05,1.3,0,0),Ft(1.95,.05,0,.05);let oe=new j(new Mt(2.2,.06,.22),b);oe.position.set(0,-.72,.1),oe.castShadow=!0,G.add(oe);let kt=new j(new Et(.08,.06,.12,10),It("#c56a43"));kt.position.set(.6,-.63,.12),G.add(kt);let se=new j(new Kn(.11,0),It("#5aa05a"));se.position.set(.6,-.5,.12),G.add(se),s.add(G)}let T=new Wt;T.position.set(qr.x,0,Ut.minZ+.03);let C=It("#6b4a2e",.7),q=It("#a8743f",.65),x=new j(new Mt(1.15,2.2,.06),q);x.position.set(0,1.1,.02),x.castShadow=!0,T.add(x);for(let[F,G,K,wt]of[[1.3,.09,0,2.24],[.09,2.25,-.62,1.12],[.09,2.25,.62,1.12]]){let Ft=new j(new Mt(F,G,.1),C);Ft.position.set(K,wt,.03),T.add(Ft)}for(let F of[.6,1.55]){let G=new j(new Mt(.8,.6,.02),It("#946535",.7));G.position.set(0,F,.06),T.add(G)}let E=new j(new ee(.045,10,8),It("#e3c15a",.3,{metalness:.6}));E.position.set(.42,1.05,.09),T.add(E),s.add(T);let k=zs(768,360,()=>{}),B=new Wt;B.position.set(.2,1.9,Ut.minZ+.03);let H=new j(new Mt(2.9,1.42,.06),It("#9aa0a8",.5));H.castShadow=!0,B.add(H);let tt=new j(new ge(2.78,1.3),new _e({map:k.tex,roughness:.5}));tt.position.z=.032,B.add(tt);let X=new j(new Mt(1.6,.05,.1),It("#8c929a",.5));X.position.set(0,-.74,.06),B.add(X),s.add(B),e.drawBoard=F=>{let{g:G,canvas:K}=k,wt=K.width,Ft=K.height;G.fillStyle="#fbfbf7",G.fillRect(0,0,wt,Ft),[["CH\u1EDC",F.wait,"#f6d36b"],["\u0110ANG L\xC0M",F.run,"#8fd0f2"],["XONG",F.done,"#9fe0a0"]].forEach(([kt,se,be],Le)=>{let De=18+Le*250;G.fillStyle=be,G.fillRect(De,16,232,46),G.fillStyle="#2b2b33",G.font="bold 26px Segoe UI, Arial, sans-serif",G.textAlign="left",G.fillText(kt,De+12,49),G.textAlign="right",G.fillText(String(se),De+220,49),Le<2&&(G.fillStyle="#d5d9df",G.fillRect(De+241,16,3,Ft-32));let Me=Math.min(se,9);for(let Te=0;Te<Me;Te++){let yi=De+14+Te%3*74,mn=80+Math.floor(Te/3)*86;G.save(),G.translate(yi+30,mn+34),G.rotate((Te*37%9-4)*.02),G.fillStyle="rgba(0,0,0,0.12)",G.fillRect(-28,-30,62,66),G.fillStyle=be,G.fillRect(-31,-34,62,66),G.fillStyle="rgba(0,0,0,0.25)";for(let Ze=0;Ze<3;Ze++)G.fillRect(-22,-18+Ze*14,40-Ze*8,4);G.restore()}}),k.tex.needsUpdate=!0},e.drawBoard({wait:0,run:0,done:0});let it=new Wt;it.position.set(-1.75,2.35,Ut.minZ+.04);let Z=new j(new Et(.28,.28,.05,32),It("#fbfaf5",.5));Z.rotation.x=Math.PI/2,it.add(Z);let yt=new j(new Un(.28,.03,8,32),It("#5b4a3a",.5));it.add(yt);for(let F=0;F<12;F++){let G=new j(new Mt(.02,.05,.01),It("#5b4a3a")),K=F/12*Math.PI*2;G.position.set(Math.sin(K)*.22,Math.cos(K)*.22,.03),G.rotation.z=-K,it.add(G)}let gt=(F,G)=>{let K=new Wt,wt=new j(new Mt(G,F,.01),It("#222"));return wt.position.y=F/2,K.add(wt),K.position.z=.04,it.add(K),K},bt=gt(.13,.03),Qt=gt(.2,.02);s.add(it),e.animated.push(()=>{let F=new Date;Qt.rotation.z=-(F.getMinutes()+F.getSeconds()/60)/60*Math.PI*2,bt.rotation.z=-(F.getHours()%12+F.getMinutes()/60)/12*Math.PI*2});let Kt=It("#ffffff",.6,{map:X0()}),J=new j(new ge(.9,1.2),Kt);J.position.set(Ut.minX+.05,1.8,2.4),J.rotation.y=Math.PI/2,s.add(J);let st=new j(new Mt(.04,1.3,1),It("#0a78f0",.5));st.position.set(Ut.minX+.015,1.8,2.4),s.add(st),ph("brand/simi-banner.jpg",F=>{Kt.map=F,Kt.needsUpdate=!0});let vt=(F,G,K,wt,Ft,oe,kt)=>{let se=new Wt;se.position.copy(Ft),se.rotation.y=oe,s.add(se);let be=new j(new ee(.03,10,8),It("#c9ced8",.3,{metalness:.6}));be.position.z=.02,se.add(be);let Le=new Wt;se.add(Le);let De=.32,Me=new j(new Mt(G+.12,K+.12,.04),It(wt,.55));Me.position.set(0,-De-K/2-.06,.05),Me.castShadow=!0,Le.add(Me);let Te=new j(new ge(G,K),new fe({transparent:!0,opacity:0}));Te.position.set(0,Me.position.y,.075),Le.add(Te),ph(F,mn=>{Te.material.map=mn,Te.material.opacity=1,Te.material.needsUpdate=!0});let yi=It("#5a6478",.8);for(let mn of[-1,1]){let Ze=mn*(G/2-.02),vi=-De-.02,Mi=Math.hypot(Ze,vi),Ei=new j(new Et(.007,.007,Mi,5),yi);Ei.position.set(Ze/2,vi/2,.05),Ei.rotation.z=Math.atan2(Ze,-vi),Le.add(Ei)}return e.animated.push(mn=>{Le.rotation.z=Math.sin((mn||performance.now()/1e3)*.9+kt)*.025}),se};vt("brand/uniq.png",1.15,.41,"#142c5a",new R(Ut.minX+.03,2.95,-3.05),Math.PI/2,0),vt("brand/crenot.png",1.35,.33,"#ffffff",new R(Ut.minX+.03,3,-.4),Math.PI/2,1.7),vt("brand/simi.png",.85,.255,"#0a78f0",new R(-4.4,2.95,Ut.minZ+.03),0,3.1);let ut=new Wt;ut.position.set(-6.68,0,-.4),ut.rotation.y=Math.PI/2;let zt=It("#8a5a35",.75),Ot=new Mt(.05,2,.4);for(let F of[-.95,.95]){let G=new j(Ot,zt);G.position.set(F,1,0),G.castShadow=!0,ut.add(G)}let Yt=Xr(11),ne=["#c4553f","#3f8fb0","#e0b04c","#4f7a4a","#7b4fa0","#d07a2c","#2f5d9e"];for(let F=0;F<5;F++){let G=new j(new Mt(1.9,.04,.4),zt);if(G.position.set(0,.04+F*.48,0),G.castShadow=!0,G.receiveShadow=!0,ut.add(G),F===4)continue;let K=-.88;for(;K<.8;){let wt=.05+Yt()*.06,Ft=.26+Yt()*.14,oe=new j(new Mt(wt,Ft,.28),It(ne[Math.floor(Yt()*ne.length)],.7));oe.position.set(K+wt/2,.06+F*.48+Ft/2,.02),oe.rotation.z=Yt()<.1?.2:0,oe.castShadow=!0,ut.add(oe),K+=wt+.012+(Yt()<.12?.15:0)}}s.add(ut);let Xt=new Wt;Xt.position.set(6.3,0,-4.45);let I=new j(new Mt(.42,1.05,.42),It("#eceef1",.4));I.position.y=.525,I.castShadow=!0,Xt.add(I);let Ie=new j(new Et(.17,.17,.48,18),new _e({color:"#7cc0ec",transparent:!0,opacity:.7,roughness:.15}));Ie.position.y=1.32,Xt.add(Ie);let qt=new j(new Mt(.08,.06,.06),It("#3f78c2"));qt.position.set(-.1,.8,.23),Xt.add(qt);let Zt=qt.clone();Zt.material=It("#d0453f"),Zt.position.x=.1,Xt.add(Zt),s.add(Xt);let Nt=[],ie=(F,G,K=1)=>{let wt=new Wt;wt.position.set(F,0,G),wt.scale.setScalar(K);let Ft=new j(new Et(.24,.18,.42,14),It("#c56a43",.8));Ft.position.y=.21,Ft.castShadow=!0,wt.add(Ft);let oe=new j(new Et(.21,.21,.02,14),It("#4a3326"));oe.position.y=.41,wt.add(oe);let kt=new Wt;kt.position.y=.42,wt.add(kt);let se=It("#4f9a52",.7),be=It("#3a7a40",.7);for(let Le=0;Le<9;Le++){let De=new j(new je(.09,.75,5),Le%2?se:be),Me=Le/9*Math.PI*2;De.position.set(Math.cos(Me)*.09,.35,Math.sin(Me)*.09),De.rotation.set(Math.sin(Me)*.45,0,-Math.cos(Me)*.45),De.castShadow=!0,kt.add(De)}return s.add(wt),Nt.push(kt),wt};ie(-6.55,-4.55,1.1),ie(6.6,4.6,1.15),ie(-6.6,1.1,.9),e.animated.push(F=>Nt.forEach((G,K)=>{G.rotation.z=Math.sin(F*1.3+K)*.04,G.rotation.x=Math.cos(F*1.1+K)*.03}));let Pt=new Wt;Pt.position.set(-6.45,0,3.55),Pt.rotation.y=Math.PI/2;let A=It("#4f7a8a",.95),M=It("#5f8c9c",.95),z=new j(new Mt(2,.42,.85),A);z.position.y=.25,z.castShadow=!0,Pt.add(z);let $=new j(new Mt(2,.6,.22),A);$.position.set(0,.62,-.32),$.castShadow=!0,Pt.add($);for(let F of[-1,1]){let G=new j(new Mt(.2,.62,.85),A);G.position.set(F,.33,0),G.castShadow=!0,Pt.add(G)}for(let F of[-.45,.45]){let G=new j(new Mt(.85,.14,.62),M);G.position.set(F,.5,.05),G.castShadow=!0,Pt.add(G)}let nt=new j(new Mt(.36,.34,.12),It("#f2b450"));nt.position.set(.6,.72,-.15),nt.rotation.z=.2,Pt.add(nt),s.add(Pt);let Q=new Wt;Q.position.set(-5.3,0,3.5);let St=new j(new Et(.42,.42,.05,24),It("#8a5a35",.6));St.position.y=.42,St.castShadow=!0,Q.add(St);let lt=new j(new Et(.05,.08,.4,10),It("#3b2b20"));lt.position.y=.2,Q.add(lt);let pt=new j(new Et(.05,.045,.1,12),It("#f4f1ea"));pt.position.set(.1,.5,.05),Q.add(pt),s.add(Q);let U=new Wt;U.position.set(5.6,0,4.15);let D=new j(new Mt(1.1,.06,.65),It("#b9844f",.6));D.position.y=.78,D.castShadow=!0,D.receiveShadow=!0,U.add(D);for(let[F,G]of[[-.48,-.26],[.48,-.26],[-.48,.26],[.48,.26]]){let K=new j(new Mt(.06,.78,.06),It("#5e3c22"));K.position.set(F,.39,G),K.castShadow=!0,U.add(K)}let et=new j(new Mt(.5,.06,.38),It("#6b7a8f",.5));et.position.set(0,.84,0),U.add(et);let rt=new Wt;rt.position.set(0,.86,0),U.add(rt),s.add(U);let ct=[It("#fffdf6",.9),It("#f1ece0",.9)];e.setTray=F=>{for(;rt.children.length;)rt.remove(rt.children[0]);for(let G=0;G<Math.min(F,14);G++){let K=new j(new Mt(.4,.012,.3),ct[G%2]);K.position.y=G*.014,K.rotation.y=(G*37%7-3)*.03,K.castShadow=!0,rt.add(K)}},e.trayAnchor=new R(5.6,.95,4.5),e.lamps=[];let ot=It("#2b2b33",.6),Rt=It("#f2b450",.45);for(let[F,G]of[[-4.1,.25],[0,.25],[4.1,.25]]){let K=new Wt;K.position.set(F,0,G);let wt=new j(new Et(.008,.008,.6,6),ot);wt.position.y=Ut.wallH-.3,K.add(wt);let Ft=new j(new je(.32,.26,20,1,!0),Rt);Ft.material.side=Ae,Ft.position.y=Ut.wallH-.68,Ft.castShadow=!1,K.add(Ft);let oe=new _e({color:"#fff3d6",emissive:"#ffd58a",emissiveIntensity:0,roughness:.3}),kt=new j(new ee(.075,12,10),oe);kt.position.y=Ut.wallH-.78,K.add(kt);let se=new kr("#ffd9a0",0,7.5,1.6);se.position.y=Ut.wallH-.85,K.add(se),s.add(K),e.lamps.push({bulbMat:oe,light:se})}let Tt=140,Bt=new Float32Array(Tt*3),L=Xr(5);for(let F=0;F<Tt;F++)Bt[F*3]=-6+L()*12,Bt[F*3+1]=.3+L()*2.6,Bt[F*3+2]=-4.8+L()*4.5;let dt=new Re;dt.setAttribute("position",new Be(Bt,3));let Y=new Dr(dt,new Ps({color:"#fff3d6",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));return s.add(Y),e.dust=Y,e.animated.push((F,G)=>{for(let K=0;K<Tt;K++)Bt[K*3+1]+=Math.sin(F*.5+K)*G*.03,Bt[K*3]+=Math.cos(F*.3+K*1.7)*G*.02;dt.attributes.position.needsUpdate=!0,P.offset.x=F*.004%1}),e}var mh={sim:["#9a91ad","GI\u1EA2 L\u1EACP"],claude:["#e08a5c","CLAUDE"],anthropic:["#e08a5c","CLAUDE API"],codex:["#4fd1a8","CHATGPT"],antigravity:["#7aa7ff","GEMINI"],openai:["#4fd1a8","GPT API"],gemini:["#7aa7ff","GEMINI"],ollama:["#e6e6e6","OLLAMA"],simi:["#45a2ff","SIMI"]};function yh(s,t,e){let n=new Wt;n.position.set(t.x,0,t.z);let i=It("#c99863",.55),r=It("#a5764a",.7),o=It("#3b3d46",.45,{metalness:.3}),a=new j(new Mt(de.w,.06,de.d),i);a.position.y=de.h,a.castShadow=!0,a.receiveShadow=!0,n.add(a);for(let B of[-de.w/2+.05,de.w/2-.05]){let H=new j(new Mt(.06,de.h,de.d-.04),r);H.position.set(B,de.h/2,0),H.castShadow=!0,n.add(H)}let l=new j(new Mt(de.w-.1,.45,.03),r);l.position.set(0,de.h-.28,de.d/2-.06),l.castShadow=!0,n.add(l);let c=new Wt;c.position.set(-.55,de.h+.03,-.08),c.rotation.y=1.45;let h={canvas:document.createElement("canvas")};h.canvas.width=192,h.canvas.height=120,h.g=h.canvas.getContext("2d"),h.tex=new Dn(h.canvas),h.tex.colorSpace=Se;let u=new j(new Mt(.62,.4,.035),o);u.position.y=.33,u.castShadow=!0,c.add(u);let d=new j(new ge(.57,.35),new fe({map:h.tex,toneMapped:!1}));d.position.set(0,.33,.019),c.add(d);let p=new j(new Mt(.05,.16,.04),o);p.position.set(0,.08,-.02),c.add(p);let g=new j(new Mt(.22,.015,.16),o);g.position.y=.008,c.add(g),n.add(c);let _=new j(new Mt(.42,.02,.13),It("#e4e4ea",.5));_.position.set(0,de.h+.04,-.2),_.castShadow=!0,n.add(_);let m=new j(new Mt(.06,.02,.09),It("#e4e4ea",.5));m.position.set(.32,de.h+.04,-.2),n.add(m);let f=new j(new Et(.045,.04,.1,12),It(e.shirt||"#c0504d",.5));f.position.set(.68,de.h+.08,.05),f.castShadow=!0,n.add(f);let y=new j(new Mt(.24,.02,.32),It("#f6f2e8",.9));if(y.position.set(.45,de.h+.04,.12),y.rotation.y=.2,n.add(y),e.isManager){let B=new Wt;B.position.set(.72,de.h+.03,-.25),B.add(Object.assign(new j(new Et(.07,.08,.02,12),o),{}));let H=new j(new Et(.012,.012,.36,6),o);H.position.set(0,.18,0),H.rotation.z=.25,B.add(H);let tt=new j(new je(.09,.12,12,1,!0),It("#e3c15a",.4));tt.position.set(-.07,.36,0),tt.rotation.z=.9,B.add(tt),n.add(B);let X=new j(new Et(.05,.03,.14,10),It("#e3c15a",.3,{metalness:.7}));X.position.set(.2,de.h+.1,.25),n.add(X)}let v=new Wt;v.position.set(0,0,Bs);let w=It("#3d3c4c",.8),P=It("#4f4e63",.8),b=new j(new Mt(.52,.08,.5),P);b.position.y=.46,b.castShadow=!0,v.add(b);let T=new j(new Mt(.5,.58,.07),w);T.position.set(0,.82,-.26),T.rotation.x=-.08,T.castShadow=!0,v.add(T);let C=new j(new Et(.03,.03,.36,8),o);C.position.y=.24,v.add(C);for(let B=0;B<5;B++){let H=new j(new Mt(.04,.03,.3),o),tt=B/5*Math.PI*2;H.position.set(Math.sin(tt)*.14,.04,Math.cos(tt)*.14),H.rotation.y=tt,v.add(H)}n.add(v);let q=new j(new Ki(1.25,1.42,56),new fe({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));q.rotation.x=-Math.PI/2,q.position.set(0,.012,-.3),n.add(q);let x=new j(new Mt(de.w+.3,1.7,de.d+1.2),new fe({visible:!1}));x.position.set(0,.85,-.3),n.add(x),s.add(n);let E=(e.source||"sim").split("-")[0],k={group:n,ring:q,hit:x,screen:h,state:"idle",brand:mh[E]||mh.sim,model:e.model||""};return Zr(k,0,!0),k}function Zr(s,t,e){let{g:n,canvas:i,tex:r}=s.screen,o=i.width,a=i.height,l=s.state;if(!(l!=="working"&&!e&&s._drawn===l)){if(s._drawn=l,l==="working"){n.fillStyle="#14263a",n.fillRect(0,0,o,a);let c=Math.floor(t*22);for(let h=0;h<9;h++){let u=c+h,d=u*7%4*10,p=30+u*53%110;n.fillStyle=["#8cc8ff","#7fe0a8","#f6d36b","#c7a5ff"][u%4],n.fillRect(12+d,10+h*12,Math.min(p,o-30-d),5)}Math.floor(t*3)%2&&(n.fillStyle="#fff",n.fillRect(14,10+8*12,7,6))}else if(l==="error")n.fillStyle="#5a1f22",n.fillRect(0,0,o,a),n.fillStyle="#ff8a8a",n.font="bold 54px Segoe UI, Arial",n.textAlign="center",n.fillText("!",o/2,76),n.font="bold 15px Segoe UI, Arial",n.fillText("L\u1ED6I \u2013 xem nh\u1EADt k\xFD",o/2,104);else{let[c,h]=s.brand,u=n.createLinearGradient(0,0,o,a);u.addColorStop(0,"#1d2230"),u.addColorStop(1,"#2a2f40"),n.fillStyle=u,n.fillRect(0,0,o,a),n.fillStyle=c,n.font="bold 24px Segoe UI, Arial",n.textAlign="center",n.fillText(h,o/2,62),s.model&&(n.fillStyle="#aab0c0",n.font="14px Segoe UI, Arial",n.fillText(s.model.slice(0,22),o/2,86)),n.fillStyle=c,n.globalAlpha=.5,n.fillRect(o/2-30,96,60,3),n.globalAlpha=1}r.needsUpdate=!0}}var Hs=new R;function sn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Hs.copy(t),Hs[n]=0,Hs.normalize();let c=.5*o/(o+a),h=1-Hs.angleTo(s)/l;return Math.sign(Hs[e])===1?h*c:a/(o+a)+c+c*(1-h)}var $r=class extends Mt{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new R,_=.5/i;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=sn(g,l,"z","y",r,n),d[f+1]=1-sn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-sn(g,l,"z","y",r,n),d[f+1]=1-sn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-sn(g,l,"x","z",r,t),d[f+1]=sn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-sn(g,l,"x","z",r,t),d[f+1]=1-sn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-sn(g,l,"x","y",r,t),d[f+1]=1-sn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=sn(g,l,"x","y",r,t),d[f+1]=1-sn(g,l,"y","x",r,e);break}}};function Mh(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Re,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let g=vh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function vh(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Be(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var mt={minX:-14,maxX:14,minZ:-10,maxZ:10,wallH:3.6},Tl=new Map,ht=(s,t=.75,e={})=>{let n=JSON.stringify([s,t,e.metalness||0,e.emissive||"",e.emissiveIntensity||0,e.side||0,!!e.flatShading]);return Tl.has(n)||Tl.set(n,new _e({color:s,roughness:t,metalness:0,...e})),Tl.get(n)},gi=(s,t=1.6)=>ht(s,.4,{emissive:s,emissiveIntensity:t});function _i(s,t,e){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let i=new Dn(n);return i.colorSpace=Se,i.anisotropy=8,i}function Kr(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function q0(){let s=Kr(21),t=_i(1024,1024,(e,n,i)=>{for(let o=0;o<i;o+=64){let a=-Math.floor(s()*360);for(;a<n;){let l=260+Math.floor(s()*260),c=s();e.fillStyle=`rgb(${Math.round(232+c*12)},${Math.round(208+c*12)},${Math.round(170+c*14)})`,e.fillRect(a,o,l,64),e.strokeStyle="rgba(165,120,75,.10)",e.lineWidth=1.2;for(let h=0;h<4;h++){let u=o+8+s()*48;e.beginPath(),e.moveTo(a,u);for(let d=a;d<a+l;d+=40)e.lineTo(d,u+Math.sin(d*.02+h)*2.5);e.stroke()}e.fillStyle="rgba(140,100,60,.22)",e.fillRect(a,o,2,64),a+=l}e.fillStyle="rgba(140,100,60,.25)",e.fillRect(0,o,n,2)}});return t.wrapS=t.wrapT=Xn,t.repeat.set(4,2.9),t}function Al(s,t,e){return _i(512,512,(n,i,r)=>{n.fillStyle=s,n.fillRect(0,0,i,r),n.strokeStyle=t,n.lineWidth=22,n.strokeRect(26,26,i-52,r-52),n.lineWidth=4,n.strokeRect(54,54,i-108,r-108),n.fillStyle=e;for(let o=100;o<r-90;o+=44)for(let a=100+o/44%2*22;a<i-90;a+=44)n.beginPath(),n.arc(a,o,5,0,7),n.fill()})}function Y0(){return _i(1024,576,(s,t,e)=>{let n=s.createLinearGradient(0,0,t,e);n.addColorStop(0,"#141a33"),n.addColorStop(1,"#2a1f45"),s.fillStyle=n,s.fillRect(0,0,t,e),s.fillStyle="rgba(255,255,255,.06)";for(let i=0;i<9;i++)s.beginPath(),s.arc(120+i*110,470-i%3*30,60+i%4*14,0,Math.PI*2),s.fill();s.textAlign="center",s.fillStyle="#ffffff",s.font="900 86px Nunito, sans-serif",s.fillText("\u{1F3AC} SIMI CINEMA",t/2,e/2-20),s.font="700 34px Nunito, sans-serif",s.fillStyle="rgba(255,255,255,.75)",s.fillText('B\u1EA5m "\u{1F3AC} M\xE0n chi\u1EBFu" v\xE0 d\xE1n link YouTube',t/2,e/2+50),s.fillText("\u0111\u1EC3 c\u1EA3 qu\xE1n c\xF9ng xem",t/2,e/2+95)})}function Z0(){return _i(512,640,(s,t,e)=>{let n=s.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7fbcf2"),n.addColorStop(.65,"#cfe6fb"),n.addColorStop(1,"#f5efe2"),s.fillStyle=n,s.fillRect(0,0,t,e),s.fillStyle="rgba(255,255,255,.85)";for(let[r,o,a]of[[120,120,40],[170,110,52],[220,128,36],[360,220,30],[400,210,42]])s.beginPath(),s.arc(r,o,a,0,7),s.fill();let i=Kr(9);for(let r=0;r<t;r+=46+i()*30){let o=120+i()*220,a=40+i()*40;s.fillStyle=`rgba(${90+i()*40},${120+i()*40},${160+i()*40},.55)`,s.fillRect(r,e-o,a,o),s.fillStyle="rgba(255,255,255,.45)";for(let l=e-o+12;l<e-10;l+=18)for(let c=r+6;c<r+a-6;c+=12)s.fillRect(c,l,5,8)}})}function $0(){return _i(1024,256,(s,t,e)=>{s.clearRect(0,0,t,e),s.font='900 118px "Nunito", "Segoe UI", sans-serif',s.textAlign="center",s.textBaseline="middle";for(let[n,i]of[[38,"#2f8cf0"],[18,"#7cc4ff"],[0,"#ffffff"]])s.shadowColor="#2f8cf0",s.shadowBlur=n,s.fillStyle=i,s.fillText("SIMI BAR",t/2-110,e/2+4);s.font='italic 900 92px "Nunito", "Segoe UI", sans-serif';for(let[n,i]of[[34,"#ff4fa3"],[14,"#ff9ccf"],[0,"#fff3fa"]])s.shadowColor="#ff4fa3",s.shadowBlur=n,s.fillStyle=i,s.fillText("chill",t/2+300,e/2+10)})}function J0(){return _i(512,640,(s,t,e)=>{s.fillStyle="#26332e",s.fillRect(0,0,t,e),s.fillStyle="#f7f3e8",s.textAlign="center",s.font='900 64px "Nunito", "Segoe UI", sans-serif',s.fillText("MENU",t/2,92),s.font='700 34px "Nunito", "Segoe UI", sans-serif',s.textAlign="left",[["C\xE0 ph\xEA s\u1EEFa \u0111\xE1","25k"],["Tr\xE0 \u0111\xE0o cam s\u1EA3","35k"],["Matcha latte","39k"],["Soda chanh d\xE2y","32k"],["B\xE1nh m\xEC AI \u2728","20k"]].forEach(([n,i],r)=>{s.fillStyle="#f7f3e8",s.fillText(n,46,190+r*82),s.fillStyle="#ffd26a",s.textAlign="right",s.fillText(i,t-46,190+r*82),s.textAlign="left"}),s.strokeStyle="rgba(247,243,232,.5)",s.lineWidth=3,s.strokeRect(18,18,t-36,e-36)})}var Jr=null;function K0(){return Jr||(Jr=_i(256,256,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(.45,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)}),Jr)}function xi(s,t,e,n,i,r=.35){let o=new j(new ge(n*2,n*2),new fe({map:K0(),color:i,transparent:!0,opacity:r,depthWrite:!1,blending:yr,toneMapped:!1}));return o.rotation.x=-Math.PI/2,o.position.set(t,.015,e),o.renderOrder=2,s.add(o),o}function Eh(s,t){new ji().load(s,e=>{e.colorSpace=Se,e.anisotropy=8,t(e)},void 0,()=>{})}function Sh(s){let t={animated:[],seats:[],obstacles:[],seatMeshes:[]},e=[],n=(U,D,et,rt,ct,ot=s,{cast:Rt=!0,receive:Tt=!0}={})=>{let Bt=new j(U,D);return Bt.position.set(et,rt,ct),Bt.castShadow=Rt,Bt.receiveShadow=Tt,ot.add(Bt),e.push(Bt),Bt},i=(U,D,et,rt=0)=>rt>0?new $r(U,D,et,2,Math.min(rt,U/2-.001,D/2-.001,et/2-.001)):new Mt(U,D,et),r=(U,D,et,rt)=>t.obstacles.push([Math.min(U,et),Math.min(D,rt),Math.max(U,et),Math.max(D,rt)]),o=mt.maxX-mt.minX,a=mt.maxZ-mt.minZ,l={cast:!1};n(i(o+.7,.5,a+.7,.12),ht("#e8dfd1",.85),0,-.26,0,s,{cast:!1,receive:!0}),n(i(o+.75,.08,a+.75,.03),ht("#d3c4ae",.8),0,-.47,0,s,l);let c=new j(new ge(o,a),new _e({color:"#ffffff",roughness:.62,map:q0()}));c.rotation.x=-Math.PI/2,c.position.y=.001,c.receiveShadow=!0,s.add(c),t.floor=c;let h=ht("#f6f0e6",.95),u=ht("#e3d5bf",.8),d=ht("#b98d5e",.5),p=ht("#9b7048",.6);n(i(o+.2,mt.wallH,.22),h,0,mt.wallH/2,mt.minZ-.11,s,l),n(i(.22,mt.wallH,a),h,mt.minX-.11,mt.wallH/2,0,s,l),n(i(o,1,.05),u,0,.5,mt.minZ+.025,s,l),n(i(.05,1,a),u,mt.minX+.025,.5,0,s,l),n(i(o,.06,.09),d,0,1.02,mt.minZ+.045,s,l),n(i(.09,.06,a),d,mt.minX+.045,1.02,0,s,l),n(i(o-.02,.12,.07),p,0,.06,mt.minZ+.035,s,l),n(i(.07,.12,a-.02),p,mt.minX+.035,.06,0,s,l),n(i(o+.22,.12,.3,.03),ht("#ffffff",.6),0,mt.wallH+.06,mt.minZ-.08,s,l),n(i(.3,.12,a,.03),ht("#ffffff",.6),mt.minX-.08,mt.wallH+.06,0,s,l);for(let U=mt.minX+.6;U<mt.maxX;U+=.6)n(i(.02,.83,.02),d,U,.545,mt.minZ+.06,s,l);for(let U=mt.minZ+.6;U<mt.maxZ;U+=.6)n(i(.02,.83,.02),d,mt.minX+.06,.545,U,s,l);let g=-3,_=9,m=-8.1,f=(g+_)/2;n(i(_-g+1.6,mt.wallH-.02,.07),ht("#1d2b4f",.9),f,mt.wallH/2,mt.minZ+.02,s,l),n(i(_-g,1.05,.72,.06),ht("#8a5a3b",.55),f,.525,m);for(let U=g+.25;U<_-.1;U+=.28)n(i(.12,.86,.04,.015),ht("#a8724c",.5),U,.53,m+.37,s,l);n(i(_-g+.24,.07,.92,.03),ht("#f6f3ee",.22,{metalness:.05}),f,1.09,m+.05),n(i(_-g,.04,.04),gi("#4aa8ff",2.4),f,.1,m+.39,s,l),n(i(_-g,.03,.4),ht("#b9c2cf",.3,{metalness:.6}),f,.06,m+.6,s,l),r(g-.1,m-.5,_+.1,m+.45),r(g-.1,mt.minZ,_+.1,m);let y=Kr(5),v=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#ff9a52","#c3a6ff","#ff5a5f","#9fd6ff"],w=new Et(.05,.06,1,12),P=new Et(.018,.022,.08,8);for(let U=0;U<3;U++){let D=1.45+U*.55;n(i(_-g-.4,.05,.34,.015),ht("#c79a6a",.5),f,D,mt.minZ+.22,s,l),n(i(_-g-.4,.035,.03),gi("#ffd8a0",1),f,D-.04,mt.minZ+.37,s,l);for(let et=g+.2;et<_-.3;et+=.32+y()*.2){let rt=v[Math.floor(y()*v.length)],ct=.22+y()*.14,ot=n(w,ht(rt,.18,{emissive:rt,emissiveIntensity:.25}),et,D+ct/2+.03,mt.minZ+.22,s,l);ot.scale.y=ct,n(P,ht("#2b2b33"),et,D+ct+.07,mt.minZ+.22,s,l)}}let b=new j(new ge(4.6,1.15),new fe({map:$0(),transparent:!0,toneMapped:!1,depthWrite:!1}));b.position.set(f,3.12,mt.minZ+.06),s.add(b),b.material.opacity=.95;let T=new _e({color:"#e6f6ff",roughness:.05,transparent:!0,opacity:.55});for(let U=0;U<6;U++)n(new Et(.05,.04,.13,12),T,g+1+U*1.8,1.19,m-.1,s,l);n(i(.55,.48,.38,.05),ht("#cfd6df",.25,{metalness:.65}),_-.8,1.37,m-.1),n(i(.3,.06,.2,.02),ht("#2b2b33",.4),_-.8,1.64,m-.1,s,l),n(new Et(.1,.08,.14,14),ht("#ffffff",.5),g+.5,1.2,m-.15,s,l),n(new Kn(.13,1),ht("#5fb36f",.8,{flatShading:!0}),g+.5,1.36,m-.15,s,l);let C=new j(new ge(1.1,1.38),new _e({map:J0(),roughness:.9}));C.position.set(_+1.6,2,mt.minZ+.05),s.add(C),n(i(1.24,1.52,.05,.02),ht("#8a5a3b",.5),_+1.6,2,mt.minZ+.02,s,l);let q=ht("#c2cad6",.25,{metalness:.7}),x=[ht("#2f8cf0",.55),ht("#ff7a6b",.55)],E=new Et(.21,.21,.1,22),k=0;for(let U=g+.6;U<=_-.5;U+=1.05){let D=m+.85,et=new Wt;et.position.set(U,0,D),s.add(et),n(E,x[k%2],0,.75,0,et),n(new Et(.035,.035,.7,10),q,0,.36,0,et),n(new Et(.19,.22,.03,20),q,0,.015,0,et),n(new Un(.16,.014,8,20),q,0,.3,0,et,l).rotation.x=Math.PI/2,pt(`b${++k}`,U,D,Math.PI,.78,{x:U,z:D+.55})}let B=ht("#fbf7f0",.35),H=ht("#b8875a",.5),tt=["#5aa9f5","#ffcf5a","#4fd1b5","#ff9a6b"].map(U=>ht(U,.6)),X=i(.46,.07,.44,.03),it=i(.46,.46,.06,.03),Z=new Et(.022,.018,.45,8);[[5.5,-1.5],[9.5,-1.5],[5.5,3.2],[9.5,3.2],[5.5,7.6],[9.5,7.6]].forEach(([U,D],et)=>{n(new Et(.64,.64,.05,36),B,U,.76,D),n(new Et(.66,.64,.02,36),H,U,.73,D,s,l),n(new Et(.05,.07,.72,12),H,U,.37,D),n(new Et(.3,.34,.03,24),H,U,.015,D),n(new Et(.06,.05,.16,12),ht("#ffffff",.3),U-.1,.87,D,s,l),n(new ee(.08,10,8),ht(["#ff7aa8","#ffd34d","#ff9a52"][et%3],.7),U-.1,1,D,s,l),n(new Et(.16,.14,.025,20),ht("#ffffff",.3),U+.28,.795,D+.1,s,l),n(new Et(.06,.06,.05,12),ht("#d99a5b",.7),U+.28,.83,D+.1,s,l),r(U-.7,D-.7,U+.7,D+.7);for(let rt=0;rt<4;rt++){let ct=rt/4*Math.PI*2+Math.PI/4,ot=U+Math.sin(ct)*1,Rt=D+Math.cos(ct)*1,Tt=new Wt;Tt.position.set(ot,0,Rt),Tt.rotation.y=ct+Math.PI,s.add(Tt);let Bt=tt[(et+rt)%tt.length];n(X,Bt,0,.45,0,Tt),n(it,Bt,0,.72,-.2,Tt);for(let[L,dt]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])n(Z,H,L,.225,dt,Tt);pt(`t${et+1}${"abcd"[rt]}`,ot,Rt,ct+Math.PI,.47,{x:U+Math.sin(ct)*1.6,z:D+Math.cos(ct)*1.6})}xi(s,U,D,1.9,"#ffe3b0",.22),n(new Et(.015,.015,1.3,8),ht("#7c818d"),U,mt.wallH-.45,D,s,l),n(new ee(.22,18,10,0,Math.PI*2,0,Math.PI/2),ht("#f3efe6",.5,{side:Ae}),U,mt.wallH-1.1,D,s,l),n(new ee(.07,10,8),gi("#ffd28a",3),U,mt.wallH-1.12,D,s,l)});let yt=[ht("#8fc9b0",.85),ht("#a99be0",.85),ht("#8cc3f5",.85)],gt=[ht("#ffd34d",.8),ht("#ff9a6b",.8),ht("#ffffff",.8)],bt=[Al("#f3ead9","#8fc9b0","rgba(143,201,176,.5)"),Al("#efe9f8","#a99be0","rgba(169,155,224,.5)"),Al("#eaf3fc","#8cc3f5","rgba(140,195,245,.5)")];[[-10.2,-6],[-10.2,-1],[-10.2,4]].forEach(([U,D],et)=>{let rt=yt[et],ct=new Wt;ct.position.set(U-2.6,0,D),s.add(ct),n(i(.92,.3,2.6,.08),rt,0,.27,0,ct),n(i(.8,.14,2.3,.07),rt,.05,.47,0,ct),n(i(.26,.72,2.6,.1),rt,-.34,.6,0,ct);for(let Rt of[-1,1])n(i(.92,.55,.22,.09),rt,0,.42,Rt*1.25,ct);for(let[Rt,Tt]of[[-.75,.2],[.75,-.2]])n(i(.14,.34,.34,.07),gt[et],-.13,.66,Rt,ct).rotation.set(Tt,0,.22);for(let[Rt,Tt]of[[-.35,-1.2],[.35,-1.2],[-.35,1.2],[.35,1.2]])n(new Et(.03,.02,.12,8),H,Rt,.06,Tt,ct,l);r(U-3.1,D-1.4,U-2.1,D+1.4),n(new Et(.55,.55,.06,32),ht("#c79a6a",.45),U-.4,.38,D),n(new Et(.08,.12,.34,12),ht("#9b7048",.5),U-.4,.18,D),n(new Et(.06,.06,.08,12),gi("#ffb35c",.9),U-.4,.45,D+.2,s,l),n(new Et(.05,.04,.12,12),T,U-.55,.47,D-.2,s,l),r(U-.95,D-.6,U+.15,D+.6);for(let Rt=-1;Rt<=1;Rt++)pt(`s${et+1}${Rt+2}`,U-2.5,D+Rt*.8,Math.PI/2,.44,{x:U-1.75,z:D+Rt*.8});let ot=new j(new ge(3.4,3.2),new _e({map:bt[et],roughness:.95}));ot.rotation.x=-Math.PI/2,ot.position.set(U-1,.006,D),ot.receiveShadow=!0,s.add(ot),xi(s,U-1.2,D,2,"#ffd9a8",.18)});for(let[U,D]of[[-13.2,-8.4],[-13.2,6.4]])n(new Et(.16,.2,.04,18),ht("#3a3a44",.4),U,.02,D),n(new Et(.02,.02,1.6,8),ht("#3a3a44",.4),U,.82,D),n(new Et(.2,.28,.34,20,1,!0),ht("#fff1d6",.6,{side:Ae,emissive:"#ffd9a0",emissiveIntensity:.7}),U,1.72,D,s,l),xi(s,U+.4,D,1.4,"#ffd9a8",.25);let Qt=["#ff6fb5","#4aa8ff","#ffd34d","#45d2b4","#c3a6ff"].map(U=>new Vt(U)),Kt=new Vt("#2a3150"),J=new Cs(i(.94,.05,.94,.02),new fe({toneMapped:!1}),30),st=new te,vt=new Vt;for(let U=0;U<6;U++)for(let D=0;D<5;D++)st.makeTranslation(-4.5+U,.025,2.5+D),J.setMatrixAt(U*5+D,st),J.setColorAt(U*5+D,Kt);J.receiveShadow=!0,s.add(J),n(i(6.2,.04,5.2,.02),ht("#c2cad6",.3,{metalness:.6}),-2,.012,4.5,s,l),t.animated.push(U=>{for(let D=0;D<30;D++){let et=.5+.5*Math.sin(U*.6+D*1.7);vt.copy(Kt).lerp(Qt[(Math.floor(D/5)+D)%5],.4+.3*et),J.setColorAt(D,vt)}J.instanceColor.needsUpdate=!0});let ut=new j(new Kn(.35,1),new _e({color:"#eef3fa",roughness:.1,metalness:.9,flatShading:!0}));ut.position.set(-2,3,5),ut.castShadow=!0,s.add(ut),n(new Et(.01,.01,.6,4),ht("#888"),-2,3.45,5,s,l),t.animated.push(U=>{ut.rotation.y=U*.8});let zt=xi(s,-2,4,1.4,"#ff6fb5",.4),Ot=xi(s,-2,6,1.4,"#4aa8ff",.4);t.animated.push(U=>{zt.position.set(-2+Math.sin(U*.5)*2.2,.06,4.5+Math.cos(U*.5)*1.6),Ot.position.set(-2+Math.sin(U*.5+Math.PI)*2.2,.06,4.5+Math.cos(U*.5+Math.PI)*1.6)}),n(i(2.2,.95,.8,.06),ht("#24304f",.4),-11.5,.475,8.3),n(i(2.2,.05,.05),gi("#ff6fb5",2),-11.5,.9,7.88,s,l),n(i(2.1,.05,.72,.02),ht("#3a3a44",.4),-11.5,.97,8.3);for(let U of[-.5,.5])n(new Et(.22,.22,.04,24),ht("#16161c",.2),-11.5+U,1.02,8.3,s,l);n(i(.4,.04,.3,.01),gi("#4aa8ff",1.2),-11.5,1.01,8.3,s,l);for(let U of[-13,-10])n(i(.7,1.6,.6,.06),ht("#24304f",.5),U,.8,9.2),n(new Et(.22,.22,.02,24),ht("#3a3a44",.3),U,1.05,8.89,s,l).rotation.x=Math.PI/2,n(new Et(.12,.12,.02,20),ht("#3a3a44",.3),U,.5,8.89,s,l).rotation.x=Math.PI/2;r(-13.4,7.85,-9.6,9.6),n(i(2.5,.2,1.4,.06),ht("#8a5a3b",.45),1.5,.68,-3),n(i(2.2,.04,1.1),ht("#1f8a5a",.95),1.5,.79,-3,s,l);for(let[U,D]of[[-1.05,-.55],[1.05,-.55],[-1.05,.55],[1.05,.55]])n(i(.14,.6,.14,.03),ht("#6e4630",.5),1.5+U,.3,-3+D);[["#ffd34d",.9,-2.8],["#ff5a5f",1.2,-3.2],["#4aa8ff",2.1,-2.9],["#ffffff",1.8,-3.25]].forEach(([U,D,et])=>n(new ee(.045,14,10),ht(U,.2),D,.85,et,s,l)),n(i(.03,.03,1.5),ht("#c79a6a",.4),1.6,.84,-2.2,s,l).rotation.y=.5,r(.2,-3.75,2.8,-2.25),xi(s,1.5,-3,2,"#fff1d6",.2);let Yt=Z0();for(let U of[-7.6,8.4]){let D=new j(new ge(1.7,1.6),new fe({map:Yt,toneMapped:!1}));D.position.set(mt.minX+.03,2.15,U),D.rotation.y=Math.PI/2,s.add(D),n(i(.08,1.8,1.9,.02),ht("#ffffff",.5),mt.minX+.02,2.15,U,s,l),n(i(.1,.05,1.7),ht("#ffffff",.5),mt.minX+.06,2.15,U,s,l),n(i(.1,1.6,.05),ht("#ffffff",.5),mt.minX+.06,2.15,U,s,l),n(i(.22,.06,1.95,.02),ht("#ffffff",.5),mt.minX+.1,1.32,U,s,l)}for(let[U,D]of[[11.95,"#4aa8ff"],[13.2,"#ff9a6b"]])n(i(.9,.7,.04,.01),ht("#ffffff",.5),U,2.2,mt.minZ+.03,s,l),n(i(.74,.54,.03),ht(D,.8),U,2.2,mt.minZ+.05,s,l);let ne=[ht("#f6f1e8",.6),ht("#d98b5f",.75)],Xt=[ht("#5fb36f",.85,{flatShading:!0}),ht("#3f9a5a",.85,{flatShading:!0})],I=new Kn(1,1);[[-13.3,-9.3],[13.3,-9.3],[-13.3,9.3],[12.8,9.3],[-6,-9.3],[12.8,-4.5],[-13.3,-3.6],[11.6,5.3]].forEach(([U,D],et)=>{n(new Et(.26,.19,.5,18),ne[et%2],U,.25,D),n(new Et(.24,.24,.03,18),ht("#6b4a32",.9),U,.49,D,s,l);let rt=Kr(30+et);for(let ct=0;ct<5;ct++)n(I,Xt[ct%2],U+(rt()-.5)*.3,.8+rt()*.55,D+(rt()-.5)*.3).scale.setScalar(.2+rt()*.12);r(U-.35,D-.35,U+.35,D+.35)});for(let U=g+1;U<_;U+=2.4)n(new Et(.015,.015,1.1,8),ht("#7c818d"),U,mt.wallH-.55,m+.1,s,l),n(new je(.2,.22,20,1,!0),ht("#c99a5b",.4,{side:Ae}),U,mt.wallH-1.15,m+.1,s,l),n(new ee(.07,12,8),gi("#ffd28a",3),U,mt.wallH-1.23,m+.1,s,l),xi(s,U,m+.9,1.25,"#ffd9a0",.32);let Ie=["#ffd28a","#ff9ccf","#9fd0ff","#b6f5d8"].map(U=>new Vt(U)),qt=70,Zt=new Cs(new ee(.035,8,6),new fe({toneMapped:!1}),qt),Nt=new te;for(let U=0;U<qt;U++){let D=U/(qt-1),et=D<.6,rt=et?mt.maxX-.4-D/.6*(o-.8):mt.minX+.1,ct=et?mt.minZ+.1:mt.minZ+.4+(D-.6)/.4*(a-.8),ot=mt.wallH-.25-Math.abs(Math.sin(U*.55))*.22;Nt.makeTranslation(rt,ot,ct),Zt.setMatrixAt(U,Nt),Zt.setColorAt(U,Ie[U%4])}s.add(Zt);let ie=new fe({color:"#ffffff",toneMapped:!1}),Pt=new j(new ge(2.4,3.2),ie);Pt.position.set(mt.minX+.075,2,-3.6),Pt.rotation.y=Math.PI/2,s.add(Pt),n(i(.06,3.36,2.56,.03),ht("#1d2b4f",.4),mt.minX+.03,2,-3.6,s,l),Eh("brand/simi-banner.jpg",U=>{ie.map=U,ie.needsUpdate=!0});let A=(U,D,et,rt,ct,ot,Rt,Tt)=>{let Bt=new Wt;Bt.position.set(ct,ot,Rt),Bt.rotation.y=Tt,s.add(Bt),n(i(D+.18,et+.18,.05,.03),ht(rt,.5),0,0,0,Bt,l);let L=new j(new ge(D,et),new fe({transparent:!0,opacity:0,toneMapped:!1}));L.position.z=.03,Bt.add(L),Eh(U,dt=>{L.material.map=dt,L.material.opacity=1,L.material.needsUpdate=!0})};A("brand/uniq.png",1.6,.57,"#142c5a",mt.minX+.05,2.4,1.6,Math.PI/2),A("brand/crenot.png",1.8,.44,"#ffffff",mt.minX+.05,2.4,6,Math.PI/2),A("brand/simi.png",1.3,.39,"#0a78f0",mt.minX+.05,2.4,-.8,Math.PI/2);let M=4.8,z=2.7,$=-9.6,nt=1.95,Q=mt.minZ+.17;n(i(M+.3,z+.3,.08,.04),ht("#16161c",.35),$,nt,mt.minZ+.12,s,l),n(i(M+.6,.08,.3,.03),ht("#2b2b33",.4),$,nt-z/2-.22,mt.minZ+.2,s,l);for(let U of[-1,1])n(i(.42,1,.36,.05),ht("#22222a",.5),$+U*(M/2+.55),.5,mt.minZ+.3);for(let U of[-1,1])for(let D of[.72,.3])n(new Et(D>.5?.08:.13,D>.5?.08:.13,.02,20),ht("#3a3a44",.3),$+U*(M/2+.55),D,mt.minZ+.49,s,l).rotation.x=Math.PI/2;r($-M/2-.8,mt.minZ,$-M/2-.3,mt.minZ+.5),r($+M/2+.3,mt.minZ,$+M/2+.8,mt.minZ+.5);let St=new j(new ge(M,z),new fe({map:Y0(),toneMapped:!1}));St.position.set($,nt,Q),s.add(St);let lt=new j(new ge(M,z),new fe({color:0,opacity:0,blending:_n,toneMapped:!1}));lt.position.set($,nt,Q+.002),lt.visible=!1,s.add(lt),lt.userData.cinema=!0,St.userData.cinema=!0,t.cinema={x:$,y:nt,z:Q+.004,w:M,h:z,idle:St,hole:lt};function pt(U,D,et,rt,ct,ot){t.seats.push({id:U,x:D,z:et,face:rt,h:ct,approach:ot});let Rt=new j(new Et(.32,.32,ct+.1,10),new fe({visible:!1}));Rt.position.set(D,(ct+.1)/2,et),Rt.userData.seatId=U,s.add(Rt),t.seatMeshes.push(Rt)}return Q0(s,e),t.spawn={minX:-7,maxX:3,minZ:-6.5,maxZ:1.5},t}function Q0(s,t){s.updateMatrixWorld(!0);let e=new Map;for(let n of t){let i=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(let o of Object.keys(i.attributes))["position","normal","uv"].includes(o)||i.deleteAttribute(o);i.attributes.uv||i.setAttribute("uv",new re(new Float32Array(i.attributes.position.count*2),2)),i.applyMatrix4(n.matrixWorld);let r=`${n.material.uuid}|${n.castShadow}|${n.receiveShadow}`;e.has(r)||e.set(r,{mat:n.material,cast:n.castShadow,receive:n.receiveShadow,geos:[]}),e.get(r).geos.push(i),n.parent.remove(n)}for(let{mat:n,cast:i,receive:r,geos:o}of e.values()){let a=Mh(o,!1);if(!a)continue;let l=new j(a,n);l.castShadow=i,l.receiveShadow=r,l.matrixAutoUpdate=!1,s.add(l)}for(let n of[...s.children])n.isGroup&&n.children.length===0&&s.remove(n)}var wh=new R,j0=new yn,bh=new R,Qr=class extends Ne{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var En=new te,tg=new te,jr=class{constructor(t={}){let e=this,n,i,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,f){let y=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(n/f.view.width)}px, ${-f.view.offsetY*(i/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let v,w;f.isOrthographicCamera&&(v=-(f.right+f.left)/2,w=(f.top+f.bottom)/2);let P=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,b=f.isOrthographicCamera?`scale( ${P} )scale(`+y+")translate("+u(v)+"px,"+u(w)+"px)"+d(f.matrixWorldInverse):`scale( ${P} )translateZ(`+y+"px)"+d(f.matrixWorldInverse),C=(f.isPerspectiveCamera?"perspective("+y+"px) ":"")+b+"translate("+r+"px,"+o+"px)";a.camera.style!==C&&(h.style.transform=C,a.camera.style=C),_(m,m,f,b)},this.setSize=function(m,f){n=m,i=f,r=n/2,o=i/2,l.style.width=m+"px",l.style.height=f+"px",c.style.width=m+"px",c.style.height=f+"px",h.style.width=m+"px",h.style.height=f+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){let f=m.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function p(m){let f=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let f=0,y=m.children.length;f<y;f++)g(m.children[f])}function _(m,f,y,v){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let w=m.layers.test(y.layers)===!0,P=m.element;if(P.style.display=w===!0?"":"none",w===!0){m.onBeforeRender(e,f,y);let b;m.isCSS3DSprite?(En.copy(y.matrixWorldInverse),En.transpose(),m.rotation2D!==0&&En.multiply(tg.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(wh,j0,bh),En.setPosition(wh),En.scale(bh),En.elements[3]=0,En.elements[7]=0,En.elements[11]=0,En.elements[15]=1,b=p(En)):b=p(m.matrixWorld);let T=a.objects.get(m);if(T===void 0||T.style!==b){P.style.transform=b;let C={style:b};a.objects.set(m,C)}P.parentNode!==h&&h.appendChild(P),m.onAfterRender(e,f,y)}}for(let w=0,P=m.children.length;w<P;w++)_(m.children[w],f,y,v)}}};var ye=mt;function Th(s,t,e){let n=((t-s+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return s+n*e}var Ah={idle:"\u2615",chat:"\u{1F4AC}",work:"\u{1F3E2}",image:"\u{1F3A8}",video:"\u{1F3AC}",web:"\u{1F50E}",doc:"\u{1F4C4}",away:"\u{1F319}"},eg={"\u{1F44B}":"wave","\u{1F57A}":"dance","\u{1F389}":"cheer","\u{1F64C}":"cheer","\u2615":"drink"};function Pl(s){let t=s.avatar||{},e=0;for(let i of String(s.id||s.name||""))e=e*31+i.charCodeAt(0)>>>0;let n=i=>i[e%i.length];return{id:s.id,name:s.name,hair:t.hair||n(["#2b1d14","#5a3a1e","#1a1a1a","#7a2e2e","#b07a3c","#3b3b46"]),skin:t.skin||n(["#f1c9a5","#e2ae84","#f6d7bd","#ebbf98","#d9a074"]),shirt:t.shirt||n(["#0a78f0","#2fc1a5","#f5b51b","#4a3592","#e1262d","#142c5a","#ff8a3d"]),pants:t.pants,shoes:t.shoes,accent:t.accent,hairStyle:t.hairStyle||n(["short","long","spiky","bun","bob","curly","ponytail"]),accessory:t.accessory||"none"}}var Rh=1.5;function Ch(s){let t=new Ji({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!t.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");return t.setPixelRatio(Math.min(window.devicePixelRatio||1,Rh)),t.shadowMap.enabled=!0,t.shadowMap.type=rs,t.toneMapping=Ds,t.outputColorSpace=Se,t.setClearColor(0,0),t}var ng=new Br(.34,24),ig=(()=>{let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(60,40,20,.42)"),e.addColorStop(.6,"rgba(60,40,20,.18)"),e.addColorStop(1,"rgba(60,40,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new fe({map:new Dn(s),transparent:!0,depthWrite:!1})})();function Ph(s,t=2048){s.add(new es("#ffffff","#d8c6aa",1.05),new ns("#ffffff",.18));let e=new Qn("#fff0dc",2.1);e.position.set(-6,15,10),e.castShadow=!0,e.shadow.mapSize.set(t,t),Object.assign(e.shadow.camera,{left:-17,right:17,top:14,bottom:-14,near:1,far:42}),e.shadow.bias=-5e-4,e.shadow.normalBias=.03,e.shadow.radius=2.5;let n=new Qn("#dbe8ff",.5);n.position.set(9,7,-3),s.add(e,e.target,n)}var Rl=class{constructor(t,e={}){this.root=t,this.opts=e,this.people=new Map,this.bubbles=new Set,this.emotes=new Set,this.keys=new Set,this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas",n.tabIndex=0,this.renderer=Ch(n),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.cssBox=document.createElement("div"),this.cssBox.className="office3d-css",n.style.position="relative",n.style.zIndex="1",this.layer.style.zIndex="2",this.wrap.append(this.cssBox,n,this.layer),t.appendChild(this.wrap),this.canvas=n,this.scene=new Jn,Ph(this.scene,2048),this.world=Sh(this.scene),this.seats=new Map(this.world.seats.map(r=>[r.id,r])),this.follow=!0,this.cam=new $n(-10,10,6,-6,.1,100),this.view={az:.72,el:.7,zoom:.85,target:new R(0,.6,.6)},this.goal={az:.72,el:.7,zoom:.85},this.perf={acc:0,n:0,dpr:Math.min(window.devicePixelRatio||1,Rh),slow:0},this.nav=new ls(ye.minX,ye.minZ,ye.maxX,ye.maxZ,.2),this.nav.blockRect(ye.minX,ye.minZ,ye.maxX,ye.minZ+.25,.15),this.nav.blockRect(ye.minX,ye.minZ,ye.minX+.25,ye.maxZ,.15),this.nav.blockRect(ye.maxX-.2,ye.minZ,ye.maxX,ye.maxZ,.15),this.nav.blockRect(ye.minX,ye.maxZ-.2,ye.maxX,ye.maxZ,.15);for(let r of this.world.obstacles)this.nav.blockRect(...r);this.cat=new cs(this.scene,this.nav),this.raycaster=new ss,this.ndc=new _t,this.tmpV=new R,this.floorPlane=new cn(new R(0,1,0),0),this.marker=new j(new Ki(.16,.24,28),new fe({color:"#0a78f0",transparent:!0,opacity:0})),this.marker.rotation.x=-Math.PI/2,this.marker.position.y=.02,this.scene.add(this.marker),this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new is;let i=()=>{this.dead||(this.raf=requestAnimationFrame(i),this.paused||this.frame())};i()}updateCamera(){let{az:t,el:e,zoom:n,target:i}=this.view,r=30;this.cam.position.set(i.x+Math.sin(t)*Math.cos(e)*r,i.y+Math.sin(e)*r,i.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(i);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;Object.assign(this.cam,{left:-c*l/2,right:c*l/2,top:c/2,bottom:-c/2}),this.cam.updateProjectionMatrix()}resetView(){Object.assign(this.goal,{az:.72,el:.7,zoom:.85}),this.follow=!0}overview(){this.follow=!1,this.goal.zoom=.44,this.goal.el=.82,this.panTo=new R(0,.6,.6)}focusSelf(){this.follow=!0,this.goal.zoom=.85,this.panTo=null}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.cssW=e,this.cssH=n,this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.cssRenderer&&this.cssRenderer.setSize(e,n),this.updateCamera()}setCinemaFrame(t){let e=this.world.cinema;if(e){if(this.cinemaObj&&(this.cssScene.remove(this.cinemaObj),this.cinemaObj.element.remove(),this.cinemaObj=null),t){this.cssRenderer||(this.cssRenderer=new jr({element:this.cssBox}),this.cssScene=new Jn,this.cssRenderer.setSize(this.cssW||800,this.cssH||500));let n=1280;t.style.width=n+"px",t.style.height=Math.round(n*e.h/e.w)+"px";let i=new Qr(t);i.position.set(e.x,e.y,e.z),i.scale.setScalar(e.w/n),this.cssScene.add(i),this.cinemaObj=i}e.idle.visible=!t,e.hole.visible=!!t}}viewScreen(t=0){let e=this.world.cinema;if(!e)return;let n=1.25,i=this.cssW||800,r=this.cssH||500,o=Math.max(8.4,15.6/(i/r))/n/r;this.follow=!1,this.panTo=new R(e.x-t*o,.6,e.z+3.2),Object.assign(this.goal,{az:.05,el:.32,zoom:n})}ray(t,e){let n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam),this.raycaster}pickPerson(t,e){let n=this.ray(t,e),i=null;for(let r of this.people.values()){let o=n.intersectObject(r.person.root,!0)[0];o&&(!i||o.distance<i.d)&&(i={p:r,d:o.distance})}return i&&i.p}pickSeat(t,e){let n=this.ray(t,e).intersectObjects(this.world.seatMeshes,!1)[0];return n?this.seats.get(n.object.userData.seatId):null}seatTaken(t,e){return[...this.people.values()].some(n=>n.m.id!==e&&(n.seat===t||n.pendingSeat===t))}pickFloor(t,e){let n=new R;return this.ray(t,e).ray.intersectPlane(this.floorPlane,n)?n:null}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",r=>r.preventDefault()),t.addEventListener("pointerdown",r=>{t.focus(),e={x:r.clientX,y:r.clientY,az:this.goal.az,el:this.goal.el,moved:!1},t.setPointerCapture(r.pointerId)});let n=0,i=0;t.addEventListener("pointermove",r=>{if(e){let c=r.clientX-e.x,h=r.clientY-e.y;Math.hypot(c,h)>5&&(e.moved=!0),e.moved&&(this.goal.az=Math.max(.05,Math.min(1.52,e.az-c*.005)),this.goal.el=Math.max(.34,Math.min(1.28,e.el+h*.0035)),t.style.cursor="grabbing");return}let o=r.clientX,a=r.clientY,l=()=>{n=performance.now(),t.style.cursor=this.pickPerson(o,a)||this.pickSeat(o,a)?"pointer":"crosshair"};clearTimeout(i),performance.now()-n>80?l():i=setTimeout(l,90)}),t.addEventListener("pointerup",r=>{if(e&&!e.moved){let o=this.pickPerson(r.clientX,r.clientY),a=!o&&this.pickSeat(r.clientX,r.clientY);if(o&&!o.me)this.opts.onPersonClick&&this.opts.onPersonClick(o.m.id,r.clientX,r.clientY);else if(o&&o.me)this.opts.onSelfClick&&this.opts.onSelfClick(r.clientX,r.clientY);else if(a)this.sitSelf(a.id);else{let l=this.pickFloor(r.clientX,r.clientY);l&&this.walkSelf(l.x,l.z,!0)}}e=null,t.style.cursor="crosshair"}),t.addEventListener("wheel",r=>{r.preventDefault(),this.goal.zoom=Math.max(.42,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,r.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dblclick",r=>{this.pickPerson(r.clientX,r.clientY)||this.resetView()}),t.addEventListener("keydown",r=>{let o=r.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(o)&&(this.keys.add(o),r.preventDefault())}),t.addEventListener("keyup",r=>this.keys.delete(r.key.toLowerCase())),t.addEventListener("blur",()=>this.keys.clear())}setMembers(t){let e=new Set;t.forEach((n,i)=>{e.add(n.id);let r=this.people.get(n.id),o=Pl(n),a=JSON.stringify(o);if(r&&r.sig!==a&&(this.scene.remove(r.person.root),r.person=this.makePerson(o,i,r.pos,r.facing),r.sig=a),!r){let l=this.freeSpot(n.pos?n.pos.x:i%5*1.4-3,n.pos?n.pos.z:1+Math.floor(i/5));r={m:n,me:!!n.me,pos:l,path:[],facing:Math.random()*6,sig:a,speed:1.9,seat:null,pendingSeat:null},r.person=this.makePerson(o,i,r.pos,r.facing),this.makePlate(r),this.people.set(n.id,r);let c=n.pos&&n.pos.seat&&this.seats.get(n.pos.seat);c&&!this.seatTaken(c.id,n.id)&&this.sitNow(r,c)}r.m=n,r.me=!!n.me,this.updatePlate(r)});for(let[n,i]of[...this.people])e.has(n)||this.removePerson(n,i)}makePerson(t,e,n,i){let r=new mi(t,e);return r.root.position.set(n.x,0,n.z),r.root.rotation.y=i||0,r.root.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),r.blob=new j(ng,ig),r.blob.rotation.x=-Math.PI/2,r.blob.renderOrder=1,r.root.add(r.blob),this.scene.add(r.root),r}removePerson(t,e){this.scene.remove(e.person.root),e.plate.remove(),this.people.delete(t);for(let n of[...this.bubbles])n._p===e&&(n.remove(),this.bubbles.delete(n))}freeSpot(t,e){let n=this.nav.toCell(Math.max(ye.minX+.6,Math.min(ye.maxX-.6,t)),Math.max(ye.minZ+.6,Math.min(ye.maxZ-.6,e))),i=this.nav.nearestFree(n.c,n.r);return this.nav.center(i.c,i.r)}makePlate(t){let e=document.createElement("div");e.className="plate3d lobby"+(t.me?" me":""),e.innerHTML='<span class="pl-row"><span class="pl-name"></span></span><span class="pl-sub"><span class="pl-title"></span></span>',e.addEventListener("click",n=>{let i=e.getBoundingClientRect();t.me?this.opts.onSelfClick&&this.opts.onSelfClick(i.left+i.width/2,i.bottom):this.opts.onPersonClick&&this.opts.onPersonClick(t.m.id,i.left+i.width/2,i.bottom),n.stopPropagation()}),this.layer.append(e),t.plate=e}updatePlate(t){let e=t.m,n=e.status||{};t.plate.querySelector(".pl-name").textContent=(t.me?"\u2B50 ":"")+e.name,t.plate.querySelector(".pl-title").textContent=n.text?new RegExp("^\\p{Extended_Pictographic}","u").test(n.text)?n.text:`${Ah[n.activity]||"\u2615"} ${n.text}`:`${Ah[n.activity]||"\u2615"} ${e.teamName||""}`.trim(),t.plate.classList.toggle("busy",!!n.activity&&!["idle","away"].includes(n.activity)),t.plate.title=`${e.name} \xB7 ${e.teamName||""}${e.role?" \xB7 "+e.role:""}`,t.busy=!!n.activity&&!["idle","away"].includes(n.activity)}standUp(t){t.seat=null,t.pendingSeat=null,t.sitting=!1}sitNow(t,e){t.path=[],t.pos={x:e.x,z:e.z},t.facing=e.face,t.seat=e.id,t.pendingSeat=null,t.sitting=!0,t.seatH=e.h}walk(t,e,n){this.standUp(t);let i=this.freeSpot(e,n);return t.path=this.nav.find({x:t.pos.x,z:t.pos.z},i),i}walkToSeat(t,e){this.standUp(t),t.pendingSeat=e.id,t.path=[...this.nav.find({x:t.pos.x,z:t.pos.z},this.freeSpot(e.approach.x,e.approach.z)),{x:e.x,z:e.z}]}moveMember(t,e,n,i){let r=this.people.get(t);if(!r||r.me)return;let o=i&&this.seats.get(i);o?this.walkToSeat(r,o):this.walk(r,e,n)}walkSelf(t,e,n){let i=this.self();if(!i)return;let r=this.walk(i,t,e);n&&(this.marker.position.set(r.x,.02,r.z),this.marker.material.opacity=.9),this.follow=!0,this.opts.onMove&&this.opts.onMove({x:r.x,z:r.z,seat:null})}sitSelf(t){let e=this.self(),n=this.seats.get(t);if(!(!e||!n)&&e.seat!==t){if(this.seatTaken(t,e.m.id)){this.opts.onToast&&this.opts.onToast("Gh\u1EBF n\xE0y c\xF3 ng\u01B0\u1EDDi ng\u1ED3i r\u1ED3i \u{1F605}");return}this.walkToSeat(e,n),this.marker.position.set(n.x,.02,n.z),this.marker.material.opacity=.9,this.follow=!0,this.opts.onMove&&this.opts.onMove({x:n.x,z:n.z,seat:t})}}self(){return[...this.people.values()].find(t=>t.me)}selfPos(){let t=this.self();return t?{...t.pos,seat:t.seat}:null}say(t,e,n=5200){let i=this.people.get(t);if(!i)return;for(let o of[...this.bubbles])o._p===i&&(o.remove(),this.bubbles.delete(o));let r=document.createElement("div");r.className="bubble3d k-chat",r.style.zIndex="5000",r.textContent=e.length>110?e.slice(0,109)+"\u2026":e,r._p=i,this.layer.appendChild(r),this.bubbles.add(r),i.person.say(Math.min(n,2400)),requestAnimationFrame(()=>r.classList.add("show")),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(r),r.remove()},220)},n)}emote(t,e){let n=this.people.get(t);if(!n)return;let i=eg[e]||(/❤|💖|😍|🥰/.test(e)?"wave":"cheer");n.person.doAction(i,i==="dance"?2600:1800),i==="dance"&&(n.danceUntil=performance.now()/1e3+2.6);let r=document.createElement("div");r.className="emote",r.textContent=e,r._p=n,this.layer.appendChild(r),this.emotes.add(r),setTimeout(()=>{this.emotes.delete(r),r.remove()},1700)}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t,n=performance.now()/1e3;for(let h of this.world.animated)h(e,t);this.cat.update(t,n),this.keyboardMove(t),this.marker.material.opacity=Math.max(0,this.marker.material.opacity-t*.8);for(let h of this.people.values()){let u=!1;if(h.path.length){let g=h.path[0],_=g.x-h.pos.x,m=g.z-h.pos.z,f=Math.hypot(_,m),y=h.speed*t;if(f<=y){if(h.pos.x=g.x,h.pos.z=g.z,h.path.shift(),!h.path.length&&h.pendingSeat){let v=this.seats.get(h.pendingSeat);v&&this.sitNow(h,v)}}else h.pos.x+=_/f*y,h.pos.z+=m/f*y;f>.001&&(h.facing=Th(h.facing,Math.atan2(_,m),1-Math.exp(-t*12))),u=h.path.length>0}else h.keyMove&&(u=!0);h.danceUntil&&n<h.danceUntil&&!u&&(h.facing+=t*5);let d=!!h.sitting&&!u,p=d?Math.max(0,(h.seatH||.45)-.45):0;h.person.root.position.set(h.pos.x,p,h.pos.z),h.person.blob&&(h.person.blob.position.y=.012-p,h.person.blob.visible=!d||p<.05),h.person.root.rotation.y=h.facing,h.busy&&!u&&!d&&!h.person.action&&Math.random()<t*.15&&h.person.doAction("look",1600),h.person.animate(t,n,{moving:u,speed:h.speed,seated:d,typing:d&&h.busy}),h.keyMove=!1}let i=this.view,r=this.goal,o=1-Math.exp(-t*10);i.az+=(r.az-i.az)*o,i.el+=(r.el-i.el)*o,i.zoom*=Math.exp((Math.log(r.zoom)-Math.log(i.zoom))*o);let a=this.self(),l=this.follow&&a?{x:a.pos.x,z:a.pos.z}:this.panTo;if(l){let h=1-Math.exp(-t*4.5);i.target.x+=(l.x-i.target.x)*h,i.target.z+=(l.z-i.target.z)*h}this.updateCamera();let c=i.zoom<.7;c!==this.far&&(this.far=c,this.layer.classList.toggle("far",c)),this.renderer.render(this.scene,this.cam),this.cinemaObj&&this.cssRenderer.render(this.cssScene,this.cam),this.placeDom(),this.adapt(t)}adapt(t){let e=this.perf;if(e.acc+=t,e.n++,e.acc<2)return;let n=e.acc/e.n;e.acc=0,e.n=0,n>1/38?(e.slow++,e.dpr>1.01?(e.dpr=Math.max(1,e.dpr-.25),this.renderer.setPixelRatio(e.dpr),this.resize()):e.slow>=3&&this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.enabled=!1,this.scene.traverse(i=>{i.material&&[].concat(i.material).forEach(r=>{r.needsUpdate=!0})}))):e.slow=0}keyboardMove(t){if(!this.keys.size)return;let e=[...this.people.values()].find(d=>d.me);if(!e)return;let n=0,i=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(i-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(i+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(n-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(n+=1),!n&&!i)return;let r=this.view.az,o=Math.hypot(n,i),a=(n*Math.cos(r)+i*Math.sin(r))/o,l=(-n*Math.sin(r)+i*Math.cos(r))/o,c=e.pos.x+a*2.4*t,h=e.pos.z+l*2.4*t;e.path=[],(e.sitting||e.pendingSeat)&&this.standUp(e),this.follow=!0,this.nav.isFree(c,h)&&(e.pos.x=c,e.pos.z=h),e.facing=Th(e.facing,Math.atan2(a,l),1-Math.exp(-t*14)),e.keyMove=!0;let u=performance.now();(!this.lastKeySend||u-this.lastKeySend>350)&&(this.lastKeySend=u,this.opts.onMove&&this.opts.onMove({x:e.pos.x,z:e.pos.z,seat:null}))}project(t){let e=t.project(this.cam);return{x:(e.x+1)/2*this.cssW,y:(1-e.y)/2*this.cssH}}placeDom(){for(let t of this.people.values()){let e=this.project(t.person.headWorld(this.tmpV).setY(this.tmpV.y+.12));t.anchor=e,t.plateH||(t.plateH=t.plate.offsetHeight||34);let n=Math.round(e.x*2)/2,i=Math.round(e.y*2)/2;if(n!==t.tx||i!==t.ty){t.tx=n,t.ty=i,t.plate.style.transform=`translate3d(${n}px, ${i}px, 0) translate(-50%, -100%)`;let r=Math.round(i)+(t.me?2e3:0);r!==t.z&&(t.z=r,t.plate.style.zIndex=String(r))}}for(let t of this.bubbles){let e=t._p.anchor;if(!e)continue;let n=this.cssW,i=Math.max(120,Math.min(n-120,e.x));t.style.transform=`translate(${i}px, ${e.y-(t._p.plateH||34)-8}px) translate(-50%, -100%)`,t.style.setProperty("--tail",e.x-i+"px")}for(let t of this.emotes){let e=t._p.anchor;e&&(t.style.transform=`translate(${e.x+24}px, ${e.y-(t._p.plateH||34)-4}px) translate(-50%, -100%)`)}}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.wrap.remove()}},Cl=class{constructor(t){this.root=t;let e=document.createElement("canvas");e.className="avatar-preview",t.appendChild(e),this.canvas=e,this.renderer=Ch(e),this.renderer.shadowMap.enabled=!1,this.scene=new Jn,Ph(this.scene,512);let n=new j(new Et(.75,.8,.06,40),new _e({color:"#dbe9fb",roughness:.6}));n.position.y=-.03,this.scene.add(n),this.cam=new Ge(30,1,.1,50),this.cam.position.set(0,1.25,4.1),this.cam.lookAt(0,.75,0),this.angle=.4,this.dead=!1,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let i=performance.now(),r=o=>{if(this.dead)return;this.raf=requestAnimationFrame(r);let a=Math.min(.05,(o-i)/1e3);i=o,this.person&&(this.angle+=a*.6,this.person.root.rotation.y=Math.sin(this.angle)*.9,this.person.animate(a,o/1e3,{moving:!1,speed:0,seated:!1,typing:!1})),this.renderer.render(this.scene,this.cam)};this.raf=requestAnimationFrame(r)}resize(){let t=this.root.clientWidth||220,e=this.root.clientHeight||260;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix()}update(t){this.person&&this.scene.remove(this.person.root),this.person=new mi(Pl(t),0),this.scene.add(this.person.root)}wave(){this.person&&this.person.doAction("wave",1600)}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.canvas.remove()}};window.Lobby3D=Rl;window.avatarToLook=Pl;window.AvatarPreview=Cl;var Il=(s,t)=>s+Math.random()*(t-s),pn=s=>s[Math.floor(Math.random()*s.length)],sg=s=>new Promise(t=>setTimeout(t,s));function Ih(s,t,e){let n=((t-s+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return s+n*e}var rg=[["C\xE0 ph\xEA kh\xF4ng? \u2615","Ok, ch\xFAt n\u1EEFa nh\xE9!"],["H\xF4m nay nhi\u1EC1u vi\u1EC7c gh\xEA \u{1F605}","C\u1ED1 l\xEAn n\xE0o!"],["Tr\u1EDDi \u0111\u1EB9p gh\xEA ha \u{1F324}","\u0110\xFAng r\u1ED3i!"],["Tr\u01B0a nay \u0103n g\xEC? \u{1F35C}","Ph\u1EDF \u0111i!"],["Xong vi\u1EC7c ch\u01B0a?","S\u1EAFp r\u1ED3i \u{1F4AA}"],["Ngh\u1EC9 tay 5 ph\xFAt nha","\u{1F44D}"]],Lh={cooler:["U\u1ED1ng mi\u1EBFng n\u01B0\u1EDBc \u{1F4A7}","M\xE1t gh\xEA!"],board:["Xem c\xF2n bao nhi\xEAu vi\u1EC7c\u2026","\u1ED4n \xE1p!"],windowL:["Ng\u1EAFm tr\u1EDDi x\xEDu \u{1F324}"],windowR:["N\u1EAFng \u0111\u1EB9p qu\xE1 \u2600\uFE0F"],shelf:["T\xECm cu\u1ED1n s\xE1ch\u2026","\u0110\xE2y r\u1ED3i \u{1F4D8}"],plant:["T\u01B0\u1EDBi c\xE2y ch\xFAt \u{1F331}"]},Ll=class{constructor(t,e){this.root=t,this.opts=e||{},this.people=new Map,this.queue=[],this.busy=!1,this.flyers=[],this.board={wait:0,run:0,done:0},this.dead=!1;let n=document.createElement("canvas");n.className="office3d-canvas";let i;try{i=new Ji({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(c){throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng: "+c.message)}if(!i.getContext())throw new Error("WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng");this.renderer=i,i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.shadowMap.enabled=!0,i.shadowMap.type=rs,i.toneMapping=Ds,i.toneMappingExposure=1.05,i.outputColorSpace=Se,i.setClearColor(0,0),this.wrap=document.createElement("div"),this.wrap.className="office3d-wrap",this.layer=document.createElement("div"),this.layer.className="office3d-layer",this.wrap.append(n,this.layer),t.appendChild(this.wrap),this.canvas=n;let r=new Jn;this.scene=r,r.fog=null,this.hemi=new es("#fff4e0","#7a5a44",.85),r.add(this.hemi),r.add(new ns("#ffffff",.18));let o=new Qn("#ffe7c2",2.1);this.sun=o,o.position.set(-5,11,7),o.target.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-10,right:10,top:9,bottom:-9,near:1,far:30}),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,o.shadow.radius=4,r.add(o,o.target);let a=new Qn("#cfe0ff",.45);a.position.set(8,6,-2),r.add(a),this.world=_h(r,i),this.cam=new $n(-10,10,6,-6,.1,100),this.view={az:.72,el:.66,zoom:1,target:new R(0,.6,.2)},this.goal={az:.72,el:.66,zoom:1,target:new R(0,.6,.2)},this.updateCamera(),this.nav=new ls(Ut.minX,Ut.minZ,Ut.maxX,Ut.maxZ,.2),this.nav.blockRect(Ut.minX,Ut.minZ,Ut.maxX,Ut.minZ+.25,.15),this.nav.blockRect(Ut.minX,Ut.minZ,Ut.minX+.25,Ut.maxZ,.15),this.nav.blockRect(Ut.maxX-.2,Ut.minZ,Ut.maxX,Ut.maxZ,.15),this.nav.blockRect(Ut.minX,Ut.maxZ-.2,Ut.maxX,Ut.maxZ,.15);for(let c of gh)this.nav.blockRect(...c);for(let c of Fs)this.nav.blockRect(c.x-de.w/2,c.z-de.d/2,c.x+de.w/2,c.z+de.d/2),this.nav.blockRect(c.x-.28,c.z+Bs-.28,c.x+.28,c.z+Bs+.28,.18);this.cat=new cs(r,this.nav),this.confetti=[],this.emotes=new Set,this.applyDaylight(),this.dayT=setInterval(()=>this.applyDaylight(),3e4),this.raycaster=new ss,this.ndc=new _t,this.tmpV=new R,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.clock=new is;let l=()=>{this.dead||(this.raf=requestAnimationFrame(l),this.paused||this.frame())};l()}updateCamera(){let{az:t,el:e,zoom:n,target:i}=this.view,r=30;this.cam.position.set(i.x+Math.sin(t)*Math.cos(e)*r,i.y+Math.sin(e)*r,i.z+Math.cos(t)*Math.cos(e)*r),this.cam.lookAt(i);let o=this.wrap.clientWidth||800,a=this.wrap.clientHeight||500,l=o/a,c=Math.max(8.4,15.6/l)/n;this.cam.left=-c*l/2,this.cam.right=c*l/2,this.cam.top=c/2,this.cam.bottom=-c/2,this.cam.updateProjectionMatrix()}resetView(){this.goal={az:.72,el:.66,zoom:1,target:new R(0,.6,.2)}}resize(){let t=this.root.getBoundingClientRect(),e=Math.max(200,Math.floor(t.width)),n=Math.max(200,Math.floor(t.height));this.renderer.setSize(e,n,!1),this.canvas.style.width=e+"px",this.canvas.style.height=n+"px",this.wrap.style.width=e+"px",this.wrap.style.height=n+"px",this.updateCamera()}pickDesk(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let i=this.raycaster.intersectObjects([...this.people.values()].map(r=>r.desk.hit),!1);return i.length&&[...this.people.values()].find(r=>r.desk.hit===i[0].object)||null}pickAny(t,e){let n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.cam);let i=[this.cat.root,...[...this.people.values()].map(a=>a.person.root)],r=this.raycaster.intersectObjects(i,!0);for(let a of r){let l=a.object;for(;l&&l.parent&&l.parent!==this.scene;)l=l.parent;if(l===this.cat.root)return{cat:!0};let c=[...this.people.values()].find(h=>h.person.root===l);if(c)return{p:c}}let o=this.pickDesk(t,e);return o?{p:o}:null}setHover(t,e){for(let n of this.people.values()){let i=n.desk.ring.material;n===t?(i.color.set(e==="drop"?"#2f8cf0":"#ffffff"),i.opacity=e==="drop"?.8:.4):n.state==="error"?(i.color.set("#ef6b6b"),i.opacity=.55):n.state==="working"?(i.color.set("#7cc4f5"),i.opacity=.35):i.opacity=0}}bindInput(){let t=this.canvas,e=null;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,az:this.goal.az,el:this.goal.el,t:this.goal.target.clone(),pan:n.button===2||n.shiftKey,moved:!1},t.setPointerCapture(n.pointerId)}),t.addEventListener("pointermove",n=>{if(e){let a=n.clientX-e.x,l=n.clientY-e.y;if(Math.hypot(a,l)>4&&(e.moved=!0),!e.moved)return;if(e.pan){let c=(this.cam.right-this.cam.left)/this.canvas.clientWidth,h=new R(Math.cos(this.view.az),0,-Math.sin(this.view.az)),u=new R(Math.sin(this.view.az),0,Math.cos(this.view.az)),d=e.t.clone().addScaledVector(h,-a*c).addScaledVector(u,-l*c*1.4);d.x=Math.max(-6,Math.min(6,d.x)),d.z=Math.max(-4,Math.min(4.5,d.z)),this.goal.target.copy(d)}else this.goal.az=Math.max(.08,Math.min(1.5,e.az-a*.005)),this.goal.el=Math.max(.32,Math.min(1.25,e.el+l*.0035));t.style.cursor="grabbing";return}let i=n.clientX,r=n.clientY,o=()=>{this.hoverAt=performance.now();let a=this.pickAny(i,r);this.setHover(a&&a.p,"hover"),t.style.cursor=a?"pointer":"grab"};clearTimeout(this.hoverTimer),performance.now()-(this.hoverAt||0)>80?o():this.hoverTimer=setTimeout(o,90)}),t.addEventListener("pointerup",n=>{if(e&&!e.moved){let i=this.pickAny(n.clientX,n.clientY);i&&i.cat?this.petCat():i&&i.p&&(this.opts.onPersonClick?this.opts.onPersonClick(i.p.agent.id,n.clientX,n.clientY):this.opts.onDeskClick&&this.opts.onDeskClick(i.p.agent.id))}e=null,t.style.cursor="grab"}),t.addEventListener("pointerleave",()=>{e||this.setHover(null)}),t.addEventListener("dblclick",n=>{this.pickAny(n.clientX,n.clientY)||this.resetView()}),t.addEventListener("wheel",n=>{n.preventDefault(),this.goal.zoom=Math.max(.75,Math.min(2.6,this.goal.zoom*Math.exp(-Math.max(-240,Math.min(240,n.deltaY))*.0014)))},{passive:!1}),t.addEventListener("dragover",n=>{n.preventDefault();let i=this.pickDesk(n.clientX,n.clientY);this.setHover(i,"drop"),this.dragTarget=i}),t.addEventListener("dragleave",()=>{this.setHover(null),this.dragTarget=null}),t.addEventListener("drop",n=>{n.preventDefault();let i=this.pickDesk(n.clientX,n.clientY)||this.dragTarget;this.setHover(null);let r=n.dataTransfer.getData("text/vp-card");i&&r&&this.opts.onDrop&&this.opts.onDrop(r,i.agent.id)})}setAgents(t,e){this.sources=e||this.sources;let n=new Set;t.forEach((i,r)=>{let o=i.slot!=null&&Fs[i.slot]?i.slot:r%Fs.length,a=Fs[o],l=this.people.get(i.id),c=JSON.stringify([i.shirt,i.hair,i.skin,i.hairStyle,i.isManager,i.isReviewer,i.source,i.model,o]);if(l&&l.sig!==c&&(this.scene.remove(l.person.root),this.scene.remove(l.desk.group),l.dom.forEach(h=>h.remove()),this.people.delete(i.id),l=null),!l){let h=yh(this.scene,a,i),u=new mi(i,r),d={x:a.x,z:a.z+Bs};u.root.position.set(d.x,0,d.z),this.scene.add(u.root),l={agent:i,person:u,desk:h,slot:a,seat:d,pos:{...d},path:[],speed:1.6,seated:!0,facing:0,faceTo:null,state:"idle",note:"",nextIdle:performance.now()/1e3+Il(6,22),activity:null,locks:0,sig:c,dom:[]},l.person.root.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),this.people.set(i.id,l),this.makeDom(l)}l.agent=i,l.person.agent=i,this.updatePlate(l),n.add(i.id)});for(let[i,r]of[...this.people])n.has(i)||(this.scene.remove(r.person.root),this.scene.remove(r.desk.group),r.dom.forEach(o=>o.remove()),this.people.delete(i))}makeDom(t){let e=document.createElement("div");e.className="plate3d",e.innerHTML='<span class="pl-row"><span class="pl-crown">\u{1F451}</span><span class="pl-name"></span><span class="pl-mood"></span><i class="pl-dots"><b></b><b></b><b></b></i><i class="pl-err">!</i></span><span class="pl-sub"><span class="pl-title"></span><span class="pl-src"></span></span><span class="pl-energy"><i style="width:100%"></i></span>',e.title="B\u1EA5m: t\u01B0\u01A1ng t\xE1c \xB7 B\u1EA5m \u0111\xFAp v\xE0o t\xEAn: \u0111\u1ED5i t\xEAn",e.addEventListener("click",n=>{if(n.detail!==1)return;let i=e.getBoundingClientRect();e._clickT=setTimeout(()=>{e._editing||(this.opts.onPersonClick?this.opts.onPersonClick(t.agent.id,i.left+i.width/2,i.bottom):this.opts.onDeskClick&&this.opts.onDeskClick(t.agent.id))},260)}),e.addEventListener("dblclick",n=>{n.stopPropagation(),clearTimeout(e._clickT),this.inlineRename(t,e)}),e.addEventListener("dragover",n=>{n.preventDefault(),this.setHover(t,"drop")}),e.addEventListener("drop",n=>{n.preventDefault(),this.setHover(null);let i=n.dataTransfer.getData("text/vp-card");i&&this.opts.onDrop&&this.opts.onDrop(i,t.agent.id)}),this.layer.append(e),t.plate=e,t.dom=[e]}inlineRename(t,e){if(e._editing)return;e._editing=!0;let n=e.querySelector(".pl-name"),i=document.createElement("input");i.className="rename3d",i.value=t.agent.name,i.maxLength=30,n.replaceWith(i),i.focus(),i.select();let r=o=>{if(!e._editing)return;e._editing=!1,i.replaceWith(n);let a=i.value.trim();o&&a&&a!==t.agent.name&&this.opts.onRename&&this.opts.onRename(t.agent.id,a)};i.addEventListener("keydown",o=>{o.key==="Enter"&&r(!0),o.key==="Escape"&&r(!1),o.stopPropagation()}),i.addEventListener("blur",()=>r(!0)),i.addEventListener("click",o=>o.stopPropagation())}updatePlate(t){let e=t.agent;t.plate.querySelector(".pl-name").textContent=e.name,t.plate.querySelector(".pl-title").textContent=(e.isManager?"\u2605 ":"")+e.title;let n=t.plate.querySelector(".pl-src");n.className="pl-src src-"+(e.source||"sim").split("-")[0],n.textContent=window.shortSource?window.shortSource(e.source,e.model):e.source}setBoard(t){this.board={...this.board,...t},this.world.drawBoard(this.board)}setStats(t,e){let n=this.people.get(t);if(!n)return;n.energy=e.energy,n.plate.classList.toggle("crowned",!!e.crown),n.plate.querySelector(".pl-mood").textContent=e.emoji||"";let i=n.plate.querySelector(".pl-energy");i.classList.toggle("low",e.energy<30),i.firstChild.style.width=Math.max(4,e.energy)+"%",n.plateH=0}setDecor(t){this.world.setDecor&&this.world.setDecor(t)}async interact(t,e){let n=this.people.get(t);if(!n)return!1;let i=n.state==="working"||n.locks>0,r=(o,a=3e3)=>this.say(n,o,"cute",a);return e==="wave"?(n.person.doAction("wave",2200),this.emote(n,"\u{1F44B}"),await r(pn(i?["Em \u0111ang l\xE0m n\xE8 s\u1EBFp \u{1F4AA}","D\u1EA1, ch\xFAt em xong ngay \u1EA1!"]:["D\u1EA1 s\u1EBFp g\u1ECDi em? \u{1F60A}","Ch\xE0o s\u1EBFp \u1EA1! \u{1F44B}","H\xF4m nay s\u1EBFp kh\u1ECFe kh\xF4ng \u1EA1?","Em s\u1EB5n s\xE0ng nh\u1EADn vi\u1EC7c n\xE8!"])),!0):e==="praise"?(n.person.doAction("cheer",2200),this.emote(n,"\u{1F496}"),setTimeout(()=>this.emote(n,"\u2728"),350),await r(pn(["Hihi c\u1EA3m \u01A1n s\u1EBFp! \u{1F970}","Em s\u1EBD c\u1ED1 g\u1EAFng h\u01A1n n\u1EEFa \u1EA1!","S\u1EBFp khen l\xE0m em vui c\u1EA3 ng\xE0y \u{1F606}"])),!0):e==="dance"?i?(this.emote(n,"\u{1F605}"),await r("\u0110ang l\xE0m vi\u1EC7c, x\xEDu em nh\u1EA3y sau nha!"),!1):(n.person.doAction("dance",3200),n.danceUntil=performance.now()/1e3+3.2,this.emote(n,"\u{1F3B5}"),setTimeout(()=>this.emote(n,"\u{1F3B6}"),900),await r(pn(["La la la~ \u{1F483}","Nh\u1EA1c l\xEAn n\xE0o! \u{1F57A}","T\u0103ng ca kh\xF4ng b\u1EB1ng t\u0103ng vui \u{1F60E}"]),2600),!0):e==="coffee"?i?(this.emote(n,"\u2615"),await r("Xong vi\u1EC7c em u\u1ED1ng li\u1EC1n nha s\u1EBFp \u2615"),!1):(n.activity&&await this.recall(n),this.emote(n,"\u2615"),r("D\u1EA1 em c\u1EA3m \u01A1n s\u1EBFp! \u2615",1600),await this.runActivity(n,"coffee"),!0):!1}petCat(){this.cat.pet();let t=()=>this.project(this.cat.headWorld(this.tmpV2||(this.tmpV2=new R)));this.emoteAt(t,pn(["\u{1F495}","\u{1F497}","\u{1F63B}"])),setTimeout(()=>this.emoteAt(t,pn(["Meo~","Meoww \u{1F495}","R\u1EEB r\u1EEB\u2026"])),300),this.opts.onCat&&this.opts.onCat()}emoteAt(t,e){let n=document.createElement("div");n.className="emote"+(e.length>2?" txt":""),n.textContent=e,n._get=t,e.length>2&&Object.assign(n.style,{fontSize:"13px",fontWeight:"900",color:"#0656b8",background:"#e8f3ff",border:"2px solid #45a2ff",borderRadius:"12px",padding:"2px 8px"}),this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}setTray(t){this.trayCount=t,this.world.setTray(t)}setState(t,e,n){let i=this.people.get(t);i&&(i.state=e,i.note=n||"",i.desk.state=e==="working"?"working":e==="error"?"error":"idle",Zr(i.desk,this.t||0,!0),i.plate.classList.toggle("working",e==="working"),i.plate.classList.toggle("error",e==="error"),i.plate.title=e==="error"&&n?"L\u1ED7i: "+n:"B\u1EA5m: c\u1EA5u h\xECnh b\xE0n \xB7 B\u1EA5m \u0111\xFAp: \u0111\u1ED5i t\xEAn",e==="working"&&!i.seated&&!i.locks&&this.recall(i),this.setHover(null))}move(t,e,n){if(t.moveRes){let i=t.moveRes;t.moveRes=null,i(!1)}return t.path=e.slice(),t.speed=n,t.seated=!1,t.faceTo=null,t.path.length?new Promise(i=>{t.moveRes=i}):Promise.resolve(!0)}exitPoint(t,e){let n=e>=t.seat.x?1:-1;return{x:t.seat.x+n*1.2,z:t.seat.z}}walkTo(t,e,n){let i=[],r={x:t.pos.x,z:t.pos.z};if(t.seated||Math.hypot(t.pos.x-t.seat.x,t.pos.z-t.seat.z)<.15){let a=this.exitPoint(t,e.x);i.push(a),r=a}i.push(...this.nav.find(r,e));let o=this.move(t,i,n?3.4:1.7);return t.faceAfter=e.face||null,o}async walkHome(t,e){let n=this.exitPoint(t,t.pos.x),i=[...this.nav.find(t.pos,n),{x:t.seat.x,z:t.seat.z}];t.faceAfter=null;let r=await this.move(t,i,e?3.4:1.7);return r&&(t.seated=!0),r}async recall(t){t.activity&&(t.activity.abort=!0),t.seated||await this.walkHome(t,!0)}enqueue(t){this.queue.push(t),this.busy||this.runQueue()}async runQueue(){for(this.busy=!0;this.queue.length;){let t=this.queue.shift(),e=this.queue.length>=3;try{await this.scene_(t,e)}catch(n){console.error(n)}}this.busy=!1}async scene_(t,e){let n=this.people.get(t.from),i=this.people.get(t.to),r=e?1300:Math.min(4200,1700+t.text.length*15);if(t.from==="boss"&&i){i.locks++;try{i.activity&&await this.recall(i),await this.fly(new R(qr.x,1.6,qr.z+.3),i.person.headWorld(new R).add(new R(0,.3,0)),e?450:1e3),this.emote(i,"\u{1F4CC}"),await this.say(i,"\u{1F4E9} "+t.text,"assign",r)}finally{i.locks--}return}if(n){n.locks++;try{if(n.activity&&await this.recall(n),n.homeP&&await n.homeP,t.to==="boss"){t.kind==="done"?(n.person.carrying=!0,await this.walkTo(n,Yr.tray,e),n.person.doAction("place",900),await sg(e?400:800),this.emote(n,"\u2705"),n.person.carrying=!1,this.world.setTray((this.trayCount||0)+1),this.trayCount=(this.trayCount||0)+1,await this.say(n,t.text,"done",e?1e3:2400),n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})):(t.kind==="plan"&&this.emote(n,"\u{1F4A1}"),await this.say(n,t.text,t.kind,r));return}if(i&&i!==n){i.locks++;try{i.activity&&await this.recall(i),i.homeP&&await i.homeP;let o=n.slot.x<=i.slot.x?-1:1,a={x:i.slot.x+o*.62,z:i.slot.z+de.d/2+.55,face:{x:i.seat.x,z:i.seat.z}};await this.walkTo(n,a,e);let l={ask:"\u2753",answer:"\u{1F4AC}",review:/cần sửa/i.test(t.text)?"\u270F\uFE0F":"\u{1F44D}",assign:"\u{1F4CB}",done:"\u{1F4E6}"}[t.kind];l&&this.emote(n,l),await this.say(n,t.text,t.kind,r)}finally{i.locks--}n.homeP=this.walkHome(n,e).then(()=>{n.homeP=null})}else await this.say(n,t.text,t.kind,r)}finally{n.locks--}}}fly(t,e,n){return new Promise(i=>{let r=new Wt,o=new j(new Mt(.34,.03,.24),new _e({color:"#fffaf0",roughness:.8})),a=new j(new Et(.04,.04,.01,12),new _e({color:"#d9534f"}));a.position.y=.02,r.add(o,a),r.traverse(l=>{l.castShadow=!0}),this.scene.add(r),this.flyers.push({obj:r,a:t,b:e,t0:performance.now(),ms:n,res:i})})}say(t,e,n,i){return new Promise(r=>{let o=document.createElement("div");o.className="bubble3d k-"+(n||"say"),o.style.zIndex="5000",o.textContent=e.length>120?e.slice(0,119)+"\u2026":e,o._p=t,this.layer.appendChild(o),this.bubbles=this.bubbles||new Set,this.bubbles.add(o),t.person.say(Math.min(i,2600)),this.positionBubble(o),requestAnimationFrame(()=>o.classList.add("show")),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>{this.bubbles.delete(o),o.remove()},220),r()},i)})}idleTick(t){let e=[...this.people.values()].some(n=>n.state==="working");for(let n of this.people.values()){if(n.activity||n.locks||!n.seated||n.state==="working"||n.homeP||t<n.nextIdle||(n.nextIdle=t+(e?Il(25,55):Il(12,32)),this.queue.length||e&&Math.random()<.5))continue;if(n.energy!=null&&n.energy<25&&!e){this.emote(n,"\u{1F62A}"),this.runActivity(n,"coffee");continue}let i=Math.random();if([...this.people.values()].filter(o=>o.activity).length>=2&&i>=.38){n.person.doAction(Math.random()<.5?"stretch":"look",2600);continue}i<.22?n.person.doAction("stretch",2600):i<.38?n.person.doAction("look",3e3):i<.62?this.runActivity(n,"poi"):this.runActivity(n,"chat")}}async runActivity(t,e){let n={abort:!1};t.activity=n;try{if(e==="coffee"){if(!await this.walkTo(t,Yr.cooler,!1)||n.abort)return;t.person.doAction("drink",2600),await this.say(t,pn(["C\xE0 ph\xEA ngon qu\xE1 \u2615","N\u1EA1p n\u0103ng l\u01B0\u1EE3ng th\xF4i! \u26A1","T\u1EC9nh c\u1EA3 ng\u01B0\u1EDDi \u{1F606}"]),"chat",2400),this.emote(t,"\u26A1"),this.opts.onStat&&this.opts.onStat(t.agent.id,"coffee");return}if(e==="chat"){let i=[...this.people.values()].filter(h=>h!==t&&h.seated&&!h.activity&&h.state!=="working"&&!h.locks);if(!i.length)return;let r=pn(i),o=t.slot.x<=r.slot.x?-1:1;if(!await this.walkTo(t,{x:r.slot.x+o*.62,z:r.slot.z+de.d/2+.55,face:{x:r.seat.x,z:r.seat.z}},!1)||n.abort)return;let[l,c]=pn(rg);if(await this.say(t,l,"chat",2200),n.abort)return;r.state!=="working"&&!r.locks&&await this.say(r,c,"chat",1800)}else{let i=pn(Object.keys(Lh)),r=Yr[i];if(!await this.walkTo(t,r,!1)||n.abort)return;let a=Lh[i];if(i==="cooler"?(t.person.doAction("drink",2600),await this.say(t,a[0],"chat",2e3)):i==="plant"?(t.person.doAction("place",1800),await this.say(t,a[0],"chat",1900)):(t.person.doAction("look",2400),await this.say(t,a[0],"chat",2200)),n.abort)return;a[1]&&Math.random()<.6&&await this.say(t,a[1],"chat",1400)}}finally{t.activity===n&&(t.activity=null,!n.abort&&!t.seated&&await this.walkHome(t,!1))}}frame(){let t=Math.min(.05,this.clock.getDelta()),e=this.t=(this.t||0)+t;for(let a of this.world.animated)a(e,t);let n=performance.now()/1e3;this.idleTick(n),this.cat.update(t,n),this.updateConfetti(t);for(let a of this.people.values()){let l=!1;if(a.path.length){let c=a.path[0],h=c.x-a.pos.x,u=c.z-a.pos.z,d=Math.hypot(h,u),p=a.speed*t;if(d<=p){if(a.pos.x=c.x,a.pos.z=c.z,a.path.shift(),!a.path.length&&(a.faceAfter&&(a.faceTo=a.faceAfter),a.moveRes)){let g=a.moveRes;a.moveRes=null,g(!0)}}else a.pos.x+=h/d*p,a.pos.z+=u/d*p;d>.001&&(a.facing=Ih(a.facing,Math.atan2(h,u),1-Math.exp(-t*12))),l=a.path.length>0||d>p}else{let c=null;a.seated?c=0:a.faceTo&&(c=Math.atan2(a.faceTo.x-a.pos.x,a.faceTo.z-a.pos.z)),c!==null&&(a.facing=Ih(a.facing,c,1-Math.exp(-t*8)))}a.danceUntil&&n<a.danceUntil&&!l&&(a.facing+=t*5),a.person.root.position.set(a.pos.x,0,a.pos.z),a.person.root.rotation.y=a.facing,a.person.animate(t,n,{moving:l,speed:a.speed,seated:a.seated&&!a.path.length,typing:a.seated&&a.state==="working"}),a.desk.state==="working"&&Math.floor(e*10)!==Math.floor((e-t)*10)&&Zr(a.desk,e)}for(let a of[...this.flyers]){let l=Math.min(1,(performance.now()-a.t0)/a.ms),c=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;a.obj.position.lerpVectors(a.a,a.b,c),a.obj.position.y+=Math.sin(l*Math.PI)*1.4,a.obj.rotation.set(Math.sin(l*9)*.3,l*6,0),l>=1&&(this.scene.remove(a.obj),this.flyers.splice(this.flyers.indexOf(a),1),a.res())}let i=this.view,r=this.goal,o=1-Math.exp(-t*10);Math.abs(r.az-i.az)+Math.abs(r.el-i.el)+Math.abs(r.zoom-i.zoom)+i.target.distanceTo(r.target)>1e-4&&(i.az+=(r.az-i.az)*o,i.el+=(r.el-i.el)*o,i.zoom*=Math.exp((Math.log(r.zoom)-Math.log(i.zoom))*o),i.target.lerp(r.target,o),this.updateCamera()),this.renderer.render(this.scene,this.cam),this.placeDom()}project(t){let e=t.clone().project(this.cam);return{x:(e.x+1)/2*this.canvas.clientWidth,y:(1-e.y)/2*this.canvas.clientHeight}}positionBubble(t){let e=t._p,n=e.anchor||this.project(e.person.headWorld(this.tmpV)),i=n.y-(e.plateH||34)-10,r=this.canvas.clientWidth,o=Math.max(130,Math.min(r-130,n.x));t.style.transform=`translate(${o}px, ${i}px) translate(-50%, -100%)`,t.style.setProperty("--tail",n.x-o+"px")}placeDom(){for(let t of this.people.values()){let e=t.person.headWorld(this.tmpV);e.y+=.12;let n=this.project(e);t.anchor=n,t.plateH||(t.plateH=t.plate.offsetHeight||34);let i=Math.round(n.x*2)/2,r=Math.round(n.y*2)/2;(i!==t.tx||r!==t.ty)&&(t.tx=i,t.ty=r,t.plate.style.transform=`translate3d(${i}px, ${r}px, 0) translate(-50%, -100%)`,t.plate.style.zIndex=String(Math.round(r)))}if(this.bubbles)for(let t of this.bubbles)this.positionBubble(t);for(let t of this.emotes){if(t._get){let n=t._get();t.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%, -100%)`;continue}let e=t._p.anchor;e&&(t.style.transform=`translate(${e.x+26}px, ${e.y-(t._p.plateH||34)-4}px) translate(-50%, -100%)`)}}emote(t,e){let n=document.createElement("div");n.className="emote",n.textContent=e,n._p=t,this.layer.appendChild(n),this.emotes.add(n),setTimeout(()=>{this.emotes.delete(n),n.remove()},1650)}celebrate(t){let e=["#f5b54a","#5fd69a","#7cc4f5","#f07070","#b896f0","#ffffff"],n=new ge(.07,.04),i=new R(5.6,1,4.15),r=t&&this.people.get(t),o=[i];r&&o.push(new R(r.pos.x,1.6,r.pos.z));for(let a of o)for(let l=0;l<70;l++){let c=new j(n,new fe({color:e[l%e.length],side:Ae}));c.position.copy(a);let h=Math.random()*Math.PI*2,u=1.2+Math.random()*2.2;c.userData={v:new R(Math.cos(h)*u*.6,3+Math.random()*2.5,Math.sin(h)*u*.6),r:new R(Math.random()*8,Math.random()*8,Math.random()*8),life:2.6+Math.random()},this.scene.add(c),this.confetti.push(c)}for(let a of this.people.values())a.state!=="working"&&setTimeout(()=>{a.person.doAction("cheer",2200),this.emote(a,pn(["\u{1F389}","\u{1F44F}","\u{1F973}","\u{1F64C}"]))},Math.random()*500)}updateConfetti(t){for(let e=this.confetti.length-1;e>=0;e--){let n=this.confetti[e],i=n.userData;i.v.y-=6.5*t,i.v.multiplyScalar(1-t*.9),n.position.addScaledVector(i.v,t),n.rotation.x+=i.r.x*t,n.rotation.y+=i.r.y*t,n.rotation.z+=i.r.z*t,n.position.y<.02&&(n.position.y=.02,i.v.set(0,0,0),i.r.set(0,0,0),n.rotation.set(-Math.PI/2,0,n.rotation.z)),i.life-=t,i.life<.6&&(n.material.opacity=Math.max(0,i.life/.6),n.material.transparent=!0),i.life<=0&&(this.scene.remove(n),n.material.dispose(),this.confetti.splice(e,1))}}applyDaylight(t){let e=new Date,n=t??e.getHours()+e.getMinutes()/60,i=n<5||n>19.5?0:n<7?(n-5)/2:n>17.5?(19.5-n)/2:1,r=Math.max(0,1-Math.abs(n-17.8)/1.6)+Math.max(0,1-Math.abs(n-6.2)/1.2),o=new Vt("#ffe7c2").lerp(new Vt("#ffae6b"),Math.min(1,r));this.sun.color.copy(o),this.sun.intensity=.25+1.85*i,this.hemi.intensity=.4+.45*i,this.hemi.color.set(i>.3?"#fff4e0":"#b9c4ff");let a=new Vt("#1c2448").lerp(new Vt("#ffffff"),i).lerp(new Vt("#ffc59a"),Math.min(.6,r*(i>0?.6:0)));for(let c of this.world.skyMats||[])c.color.copy(a);let l=1-i;for(let c of this.world.lamps||[])c.light.intensity=l*6,c.bulbMat.emissiveIntensity=.2+l*2.2;this.world.dust&&(this.world.dust.material.opacity=.15+.45*i),this.renderer.toneMappingExposure=.95+.12*i}destroy(){this.dead=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),clearInterval(this.dayT),this.renderer.dispose(),this.wrap.remove()}};window.Office3D=Ll;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
