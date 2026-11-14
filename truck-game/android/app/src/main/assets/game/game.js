(()=>{var Id=Object.defineProperty,Dd=Object.defineProperties;var Ud=Object.getOwnPropertyDescriptors;var Yc=Object.getOwnPropertySymbols;var Nd=Object.prototype.hasOwnProperty,Fd=Object.prototype.propertyIsEnumerable;var Zc=(i,t,e)=>t in i?Id(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,An=(i,t)=>{for(var e in t||(t={}))Nd.call(t,e)&&Zc(i,e,t[e]);if(Yc)for(var e of Yc(t))Fd.call(t,e)&&Zc(i,e,t[e]);return i},ts=(i,t)=>Dd(i,Ud(t));var oc="162";var Od=0,Jc=1,Bd=2;var Ja=1,lc=2,si=3,wi=0,He=1,cn=2,bi=0,ws=1,gn=2,Kc=3,jc=4,zd=5,Vi=100,kd=101,Hd=102,Qc=103,th=104,Gd=200,Vd=201,Wd=202,Xd=203,dl=204,fl=205,qd=206,$d=207,Yd=208,Zd=209,Jd=210,Kd=211,jd=212,Qd=213,tf=214,ef=0,nf=1,sf=2,xa=3,rf=4,af=5,of=6,lf=7,Ka=0,cf=1,hf=2,Si=0,uf=1,df=2,ff=3,cc=4,pf=5,mf=6,gf=7;var Iu=300,Rs=301,Cs=302,pl=303,ml=304,ja=306,dr=1e3,Un=1001,gl=1002,ze=1003,eh=1004;var Ks=1005;var Ke=1006,Ao=1007;var ai=1008;var Ei=1009,xf=1010,_f=1011,hc=1012,Du=1013,Mi=1014,Vn=1015,fr=1016,Uu=1017,Nu=1018,qi=1020,vf=1021,Nn=1023,yf=1024,Mf=1025,$i=1026,Ps=1027,Fu=1028,Ou=1029,bf=1030,Bu=1031,zu=1033,Ro=33776,Co=33777,Po=33778,Lo=33779,nh=35840,ih=35841,sh=35842,rh=35843,ku=36196,ah=37492,oh=37496,lh=37808,ch=37809,hh=37810,uh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,xh=37817,_h=37818,vh=37819,yh=37820,Mh=37821,Io=36492,bh=36494,Sh=36495,Sf=36283,Eh=36284,wh=36285,Th=36286;var _a=2300,va=2301,Do=2302,Ah=2400,Rh=2401,Ch=2402;var Ef=3200,wf=3201,uc=0,Tf=1,yi="",je="srgb",Pi="srgb-linear",dc="display-p3",Qa="display-p3-linear",ya="linear",me="srgb",Ma="rec709",ba="p3";var es=7680;var Ph=519,Af=512,Rf=513,Cf=514,Hu=515,Pf=516,Lf=517,If=518,Df=519,xl=35044;var Lh="300 es",_l=1035,oi=2e3,Sa=2001,Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uo=Math.PI/180,Ea=180/Math.PI;function li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function Uf(i,t){return(i%t+t)%t}function No(i,t,e){return(1-e)*i+e*t}function Ih(i){return(i&i-1)===0&&i!==0}function vl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],x=s[4],M=s[7],A=s[2],T=s[5],w=s[8];return r[0]=a*v+o*_+c*A,r[3]=a*m+o*x+c*T,r[6]=a*p+o*M+c*w,r[1]=l*v+h*_+u*A,r[4]=l*m+h*x+u*T,r[7]=l*p+h*M+u*w,r[2]=d*v+f*_+g*A,r[5]=d*m+f*x+g*T,r[8]=d*p+f*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fo=new Dt;function Gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=wa("canvas");return i.style.display="block",i}var Dh={};function Vu(i){i in Dh||(Dh[i]=!0,console.warn(i))}var Uh=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nh=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[Pi]:{transfer:ya,primaries:Ma,toReference:i=>i,fromReference:i=>i},[je]:{transfer:me,primaries:Ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qa]:{transfer:ya,primaries:ba,toReference:i=>i.applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(Uh)},[dc]:{transfer:me,primaries:ba,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(Uh).convertLinearToSRGB()}},Ff=new Set([Pi,Qa]),oe={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=kr[t].toReference,s=kr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return kr[i].primaries},getTransfer:function(i){return i===yi?ya:kr[i].transfer}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Ta=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=wa("canvas")),ns.width=t.width,ns.height=t.height;let n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ts(e[n]/255)*255):e[n]=Ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Of=0,Aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bf=0,un=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Un,s=Un,r=Ke,a=ai,o=Nn,c=Ei,l=i.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=li(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Iu;un.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(f+1)/2,A=(p+1)/2,T=(h+d)/4,w=(u+v)/4,S=(g+m)/4;return x>M&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=S/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ra=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ml=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,p*_);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let M=o*_;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+v*M,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new L,Fh=new Xn,hi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Gr.subVectors(this.max,js),is.subVectors(t.a,js),ss.subVectors(t.b,js),rs.subVectors(t.c,js),pi.subVectors(ss,is),mi.subVectors(rs,ss),Fi.subVectors(is,rs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Fi.z,Fi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Fi.z,0,-Fi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Fi.y,Fi.x,0];return!ko(e,is,ss,rs,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,is,ss,rs,Gr))?!1:(Vr.crossVectors(pi,mi),e=[Vr.x,Vr.y,Vr.z],ko(e,is,ss,rs,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,Hr=new hi,is=new L,ss=new L,rs=new L,pi=new L,mi=new L,Fi=new L,js=new L,Gr=new L,Vr=new L,Oi=new L;function ko(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zf=new hi,Qs=new L,Ho=new L,Ai=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Ho)),this.expandByPoint(Qs.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new L,Go=new L,Wr=new L,gi=new L,Vo=new L,Xr=new L,Wo=new L,Ca=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Go.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Go);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=gi.dot(this.direction),c=-gi.dot(Wr),l=gi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Go).addScaledVector(Wr,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){Vo.subVectors(e,t),Xr.subVectors(n,t),Wo.crossVectors(Vo,Xr);let a=this.direction.dot(Wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,t);let c=o*this.direction.dot(Xr.crossVectors(gi,Xr));if(c<0)return null;let l=o*this.direction.dot(Vo.cross(gi));if(l<0||c+l>a)return null;let h=-o*gi.dot(Wo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Hf)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),xi.crossVectors(n,pn),xi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),xi.crossVectors(n,pn)),xi.normalize(),qr.crossVectors(pn,xi),s[0]=xi.x,s[4]=qr.x,s[8]=pn.x,s[1]=xi.y,s[5]=qr.y,s[9]=pn.y,s[2]=xi.z,s[6]=qr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],M=n[11],A=n[15],T=s[0],w=s[4],S=s[8],I=s[12],y=s[1],R=s[5],V=s[9],$=s[13],P=s[2],q=s[6],N=s[10],O=s[14],B=s[3],Z=s[7],j=s[11],nt=s[15];return r[0]=a*T+o*y+c*P+l*B,r[4]=a*w+o*R+c*q+l*Z,r[8]=a*S+o*V+c*N+l*j,r[12]=a*I+o*$+c*O+l*nt,r[1]=h*T+u*y+d*P+f*B,r[5]=h*w+u*R+d*q+f*Z,r[9]=h*S+u*V+d*N+f*j,r[13]=h*I+u*$+d*O+f*nt,r[2]=g*T+v*y+m*P+p*B,r[6]=g*w+v*R+m*q+p*Z,r[10]=g*S+v*V+m*N+p*j,r[14]=g*I+v*$+m*O+p*nt,r[3]=_*T+x*y+M*P+A*B,r[7]=_*w+x*R+M*q+A*Z,r[11]=_*S+x*V+M*N+A*j,r[15]=_*I+x*$+M*O+A*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+v*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,M=h*v*l-g*u*l+g*o*f-a*v*f-h*o*p+a*u*p,A=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,T=e*_+n*x+s*M+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=_*w,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*w,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*w,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*w,t[4]=x*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*w,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*w,t[8]=M*w,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*w,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*w,t[12]=A*w,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,_=c*l,x=c*h,M=c*u,A=n.x,T=n.y,w=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+M)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+x)*w,s[9]=(m-_)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),a=as.set(s[4],s[5],s[6]).length(),o=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let l=1/r,h=1/a,u=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=oi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===oi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=oi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,g,v;if(o===oi)g=(a+r)*u,v=-2*u;else if(o===Sa)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new L,In=new ne,kf=new L(0,0,0),Hf=new L(1,1,1),xi=new L,qr=new L,pn=new L,Oh=new ne,Bh=new Xn,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gf=0,zh=new L,os=new Xn,ei=new ne,$r=new L,tr=new L,Vf=new L,Wf=new Xn,kh=new L(1,0,0),Hh=new L(0,1,0),Gh=new L(0,0,1),Xf={type:"added"},qf={type:"removed"},Xo={type:"childadded",child:null},qo={type:"childremoved",child:null},Te=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new xn,n=new Xn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Dt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(tr,$r,this.up):ei.lookAt($r,tr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xf),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new L,ni=new L,$o=new L,ii=new L,ls=new L,cs=new L,Vh=new L,Yo=new L,Zo=new L,Jo=new L,Xi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),ni.subVectors(n,e),$o.subVectors(t,e);let a=Dn.dot(Dn),o=Dn.dot(ni),c=Dn.dot($o),l=ni.dot(ni),h=ni.dot($o),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),ni.subVectors(t,e),Dn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,n),cs.subVectors(r,n),Yo.subVectors(t,n);let c=ls.dot(Yo),l=cs.dot(Yo);if(c<=0&&l<=0)return e.copy(n);Zo.subVectors(t,s);let h=ls.dot(Zo),u=cs.dot(Zo);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ls,a);Jo.subVectors(t,r);let f=ls.dot(Jo),g=cs.dot(Jo);if(g>=0&&f<=g)return e.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(cs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Vh,o);let p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Ko(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Uf(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ko(a,r,t+1/3),this.g=Ko(a,r,t),this.b=Ko(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=Wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return oe.fromWorkingColorSpace(Je.copy(this),t),Math.round(Qe(Je.r*255,0,255))*65536+Math.round(Qe(Je.g*255,0,255))*256+Math.round(Qe(Je.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=je){oe.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Yr);let n=No(_i.h,Yr.h,e),s=No(_i.s,Yr.s,e),r=No(_i.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new mt;mt.NAMES=Wu;var $f=0,qn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ws,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},he=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new L,Zr=new lt,hn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Vu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}};var Ls=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Is=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yf=0,Rn=new ne,jo=new Te,hs=new L,mn=new hi,er=new hi,Ne=new L,Pe=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gu(t)?Is:Ls)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(mn.min,er.min),mn.expandByPoint(Ne),Ne.addVectors(mn.max,er.max),mn.expandByPoint(Ne)):(mn.expandByPoint(er.min),mn.expandByPoint(er.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(hs.fromBufferAttribute(t,l),Ne.add(hs)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new L,c[S]=new L;let l=new L,h=new L,u=new L,d=new lt,f=new lt,g=new lt,v=new L,m=new L;function p(S,I,y){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[S].add(v),o[I].add(v),o[y].add(v),c[S].add(m),c[I].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let S=0,I=_.length;S<I;++S){let y=_[S],R=y.start,V=y.count;for(let $=R,P=R+V;$<P;$+=3)p(t.getX($+0),t.getX($+1),t.getX($+2))}let x=new L,M=new L,A=new L,T=new L;function w(S){A.fromBufferAttribute(s,S),T.copy(A);let I=o[S];x.copy(I),x.sub(A.multiplyScalar(A.dot(I))).normalize(),M.crossVectors(T,I);let R=M.dot(c[S])<0?-1:1;a.setXYZW(S,x.x,x.y,x.z,R)}for(let S=0,I=_.length;S<I;++S){let y=_[S],R=y.start,V=y.count;for(let $=R,P=R+V;$<P;$+=3)w(t.getX($+0)),w(t.getX($+1)),w(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new hn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wh=new ne,Bi=new Ca,Jr=new Ai,Xh=new L,us=new L,ds=new L,fs=new L,Qo=new L,Kr=new L,jr=new lt,Qr=new lt,ta=new lt,qh=new L,$h=new L,Yh=new L,ea=new L,na=new L,Ft=class extends Te{constructor(t=new Pe,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Qo.fromBufferAttribute(u,t),a?Kr.addScaledVector(Qo,h):Kr.addScaledVector(Qo.sub(e),h))}e.add(Kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Jr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Jr,Xh)===null||Bi.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,A=x;M<A;M+=3){let T=o.getX(M),w=o.getX(M+1),S=o.getX(M+2);s=ia(this,p,t,n,l,h,u,T,w,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=ia(this,a,t,n,l,h,u,_,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,A=x;M<A;M+=3){let T=M,w=M+1,S=M+2;s=ia(this,p,t,n,l,h,u,T,w,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,x=m+1,M=m+2;s=ia(this,a,t,n,l,h,u,_,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zf(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===wi,o),c===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(na);return l<e.near||l>e.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,us),i.getVertexPosition(c,ds),i.getVertexPosition(l,fs);let h=Zf(i,t,e,n,us,ds,fs,ea);if(h){s&&(jr.fromBufferAttribute(s,o),Qr.fromBufferAttribute(s,c),ta.fromBufferAttribute(s,l),h.uv=Xi.getInterpolation(ea,us,ds,fs,jr,Qr,ta,new lt)),r&&(jr.fromBufferAttribute(r,o),Qr.fromBufferAttribute(r,c),ta.fromBufferAttribute(r,l),h.uv1=Xi.getInterpolation(ea,us,ds,fs,jr,Qr,ta,new lt)),a&&(qh.fromBufferAttribute(a,o),$h.fromBufferAttribute(a,c),Yh.fromBufferAttribute(a,l),h.normal=Xi.getInterpolation(ea,us,ds,fs,qh,$h,Yh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};Xi.getNormal(us,ds,fs,u.normal),h.face=u}return h}var _n=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(v,m,p,_,x,M,A,T,w,S,I){let y=M/w,R=A/S,V=M/2,$=A/2,P=T/2,q=w+1,N=S+1,O=0,B=0,Z=new L;for(let j=0;j<N;j++){let nt=j*R-$;for(let ft=0;ft<q;ft++){let Ct=ft*y-V;Z[v]=Ct*_,Z[m]=nt*x,Z[p]=P,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ft/w),u.push(1-j/S),O+=1}}for(let j=0;j<S;j++)for(let nt=0;nt<w;nt++){let ft=d+nt+q*j,Ct=d+nt+q*(j+1),H=d+(nt+1)+q*(j+1),K=d+(nt+1)+q*j;c.push(ft,Ct,K),c.push(Ct,H,K),B+=6}o.addGroup(f,B,I),f+=B,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xu(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}var Kf={clone:Ds,merge:rn},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},La=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new L,Zh=new lt,Jh=new lt,Fe=class extends La{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Jh),e.subVectors(Jh,Zh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,bl=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new Fe(ps,ms,t,e);r.layers=this.layers,this.add(r);let a=new Fe(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new Fe(ps,ms,t,e);o.layers=this.layers,this.add(o);let c=new Fe(ps,ms,t,e);c.layers=this.layers,this.add(c);let l=new Fe(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ia=class extends un{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ia(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:bi});r.uniforms.tEquirect.value=e;let a=new Ft(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=Ke),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},tl=new L,tp=new L,ep=new Dt,ri=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=tl.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ep.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Ai,sa=new L,pr=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+a,d+h,m+g,M+_).normalize(),n[3].setComponents(c-a,d-h,m-g,M-_).normalize(),n[4].setComponents(c-o,d-u,m-v,M-x).normalize(),e===oi)n[5].setComponents(c+o,d+u,m+v,M+x).normalize();else if(e===Sa)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function np(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ge=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let x=_+l*p,M=_+l*(p+1),A=_+1+l*(p+1),T=_+1+l*p;f.push(x,M,T),f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
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
}`,Xp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,im=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
	#endif
}`,u0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
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
}`,M0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,E0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,A0=`#define STANDARD
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
}`,R0=`#define STANDARD
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
}`,C0=`#define TOON
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
}`,P0=`#define TOON
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
}`,L0=`uniform float size;
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,U0=`uniform vec3 color;
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
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,F0=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:ap,alphatest_fragment:op,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:xp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Mp,color_fragment:bp,color_pars_fragment:Sp,color_pars_vertex:Ep,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Pp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Ip,colorspace_fragment:Dp,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Jp,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Hp,fog_fragment:Gp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Wp,lightmap_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Kp,lights_toon_pars_fragment:jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:vm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:bm,normal_pars_fragment:Sm,normal_pars_vertex:Em,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:$m,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:Jm,transmission_fragment:Km,transmission_pars_fragment:jm,uv_pars_fragment:Qm,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:l0,depth_vert:c0,depth_frag:h0,distanceRGBA_vert:u0,distanceRGBA_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:x0,meshbasic_frag:_0,meshlambert_vert:v0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:b0,meshnormal_vert:S0,meshnormal_frag:E0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:P0,points_vert:L0,points_frag:I0,shadow_vert:D0,shadow_frag:U0,sprite_vert:N0,sprite_frag:F0},at={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Gn={basic:{uniforms:rn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:rn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:rn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:rn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:rn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:rn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:rn([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:rn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:rn([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:rn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:rn([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:rn([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:rn([at.lights,at.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Gn.physical={uniforms:rn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var ra={r:0,b:0,g:0},ki=new xn,O0=new ne;function B0(i,t,e,n,s,r,a){let o=new mt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(o,c):x&&x.isColor&&(v(x,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ja)?(h===void 0&&(h=new Ft(new _n(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ds(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(p.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(ki)),h.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ft(new Ge(2,2),new $n({name:"BackgroundMaterial",uniforms:Ds(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(ra,Xu(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function z0(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(P,q,N,O,B){let Z=!1;if(a){let j=v(O,N,q);l!==j&&(l=j,f(l.object)),Z=p(P,O,N,B),Z&&_(P,O,N,B)}else{let j=q.wireframe===!0;(l.geometry!==O.id||l.program!==N.id||l.wireframe!==j)&&(l.geometry=O.id,l.program=N.id,l.wireframe=j,Z=!0)}B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,S(P,q,N,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,q,N){let O=N.wireframe===!0,B=o[P.id];B===void 0&&(B={},o[P.id]=B);let Z=B[q.id];Z===void 0&&(Z={},B[q.id]=Z);let j=Z[O];return j===void 0&&(j=m(d()),Z[O]=j),j}function m(P){let q=[],N=[],O=[];for(let B=0;B<s;B++)q[B]=0,N[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:N,attributeDivisors:O,object:P,attributes:{},index:null}}function p(P,q,N,O){let B=l.attributes,Z=q.attributes,j=0,nt=N.getAttributes();for(let ft in nt)if(nt[ft].location>=0){let H=B[ft],K=Z[ft];if(K===void 0&&(ft==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ft==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;j++}return l.attributesNum!==j||l.index!==O}function _(P,q,N,O){let B={},Z=q.attributes,j=0,nt=N.getAttributes();for(let ft in nt)if(nt[ft].location>=0){let H=Z[ft];H===void 0&&(ft==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),ft==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let K={};K.attribute=H,H&&H.data&&(K.data=H.data),B[ft]=K,j++}l.attributes=B,l.attributesNum=j,l.index=O}function x(){let P=l.newAttributes;for(let q=0,N=P.length;q<N;q++)P[q]=0}function M(P){A(P,0)}function A(P,q){let N=l.newAttributes,O=l.enabledAttributes,B=l.attributeDivisors;N[P]=1,O[P]===0&&(i.enableVertexAttribArray(P),O[P]=1),B[P]!==q&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,q),B[P]=q)}function T(){let P=l.newAttributes,q=l.enabledAttributes;for(let N=0,O=q.length;N<O;N++)q[N]!==P[N]&&(i.disableVertexAttribArray(N),q[N]=0)}function w(P,q,N,O,B,Z,j){j===!0?i.vertexAttribIPointer(P,q,N,B,Z):i.vertexAttribPointer(P,q,N,O,B,Z)}function S(P,q,N,O){if(n.isWebGL2===!1&&(P.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let B=O.attributes,Z=N.getAttributes(),j=q.defaultAttributeValues;for(let nt in Z){let ft=Z[nt];if(ft.location>=0){let Ct=B[nt];if(Ct===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(Ct=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(Ct=P.instanceColor)),Ct!==void 0){let H=Ct.normalized,K=Ct.itemSize,dt=e.get(Ct);if(dt===void 0)continue;let St=dt.buffer,_t=dt.type,gt=dt.bytesPerElement,ie=n.isWebGL2===!0&&(_t===i.INT||_t===i.UNSIGNED_INT||Ct.gpuType===Du);if(Ct.isInterleavedBufferAttribute){let Lt=Ct.data,F=Lt.stride,Oe=Ct.offset;if(Lt.isInstancedInterleavedBuffer){for(let bt=0;bt<ft.locationSize;bt++)A(ft.location+bt,Lt.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let bt=0;bt<ft.locationSize;bt++)M(ft.location+bt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let bt=0;bt<ft.locationSize;bt++)w(ft.location+bt,K/ft.locationSize,_t,H,F*gt,(Oe+K/ft.locationSize*bt)*gt,ie)}else{if(Ct.isInstancedBufferAttribute){for(let Lt=0;Lt<ft.locationSize;Lt++)A(ft.location+Lt,Ct.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Lt=0;Lt<ft.locationSize;Lt++)M(ft.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Lt=0;Lt<ft.locationSize;Lt++)w(ft.location+Lt,K/ft.locationSize,_t,H,K*gt,K/ft.locationSize*Lt*gt,ie)}}else if(j!==void 0){let H=j[nt];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(ft.location,H);break;case 3:i.vertexAttrib3fv(ft.location,H);break;case 4:i.vertexAttrib4fv(ft.location,H);break;default:i.vertexAttrib1fv(ft.location,H)}}}}T()}function I(){V();for(let P in o){let q=o[P];for(let N in q){let O=q[N];for(let B in O)g(O[B].object),delete O[B];delete q[N]}delete o[P]}}function y(P){if(o[P.id]===void 0)return;let q=o[P.id];for(let N in q){let O=q[N];for(let B in O)g(O[B].object),delete O[B];delete q[N]}delete o[P.id]}function R(P){for(let q in o){let N=o[q];if(N[P.id]===void 0)continue;let O=N[P.id];for(let B in O)g(O[B].object),delete O[B];delete N[P.id]}}function V(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:$,dispose:I,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function k0(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function H0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),A=x&&M,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:T}}function G0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ri,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,x=_*4,M=p.clippingState||null;c.value=M,M=h(g,d,x,f);for(let A=0;A!==x;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==v;++x,M+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function V0(i){let t=new WeakMap;function e(a,o){return o===pl?a.mapping=Rs:o===ml&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pl||o===ml)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Sl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Da=class extends La{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,Kh=[.125,.215,.35,.446,.526,.582],Wi=20,el=new Da,jh=new mt,nl=null,il=0,sl=0,Gi=(1+Math.sqrt(5))/2,gs=1/Gi,Qh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Gi,gs),new L(0,Gi,-gs),new L(gs,0,Gi),new L(-gs,0,Gi),new L(Gi,gs,0),new L(-Gi,gs,0)],Ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nl,il,sl),t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:fr,format:Nn,colorSpace:Pi,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=X0(r,t,e)}return s}_compileMaterial(t){let e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,el)}_sceneToCubeUV(t,e,n,s){let o=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jh),h.toneMapping=Si,h.autoClear=!1;let f=new he({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Ft(new _n,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(jh),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;aa(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rs||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;aa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,el)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qh[(s-1)%Qh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);let p=[],_=0;for(let w=0;w<Wi;++w){let S=w/v,I=Math.exp(-S*S/2);p.push(I),w===0?_+=I:w<m&&(_+=2*I)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],A=3*M*(s>x-bs?s-x+bs:0),T=4*(this._cubeSize-M);aa(e,A,T,3*M,2*M),c.setRenderTarget(e),c.render(u,el)}};function W0(i){let t=[],e=[],n=[],s=i,r=i-bs+1+Kh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-bs?c=Kh[a-i+bs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,S=T>2?0:-1,I=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];_.set(I,v*g*T),x.set(d,m*g*T);let y=[T,T,T,T,T,T];M.set(y,p*g*T)}let A=new Pe;A.setAttribute("position",new hn(_,v)),A.setAttribute("uv",new hn(x,m)),A.setAttribute("faceIndex",new hn(M,p)),t.push(A),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tu(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function X0(i,t,e){let n=new Float32Array(Wi),s=new L(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function eu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function nu(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function q0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===pl||c===ml,h=c===Rs||c===Cs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ua(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ua(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let x=0,M=_.length;x<M;x+=3){let A=_[x+0],T=_[x+1],w=_[x+2];d.push(A,T,T,w,w,A)}}else if(g!==void 0){let _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){let A=x+0,T=x+1,w=x+2;d.push(A,T,T,w,w,A)}}else return;let m=new(Gu(d)?Is:Ls)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Z0(i,t,e,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*c),e.update(g,r,1)}function u(f,g,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,v),e.update(g,r,v)}function d(f,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,v);let p=0;for(let _=0;_<v;_++)p+=g[_];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function J0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function K0(i,t){return i[0]-t[0]}function j0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Q0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ve,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,v=r.get(h);if(v===void 0||v.count!==g){let V=function(){y.dispose(),r.delete(h),h.removeEventListener("dispose",V)};v!==void 0&&v.texture.dispose();let m=h.morphAttributes.position!==void 0,p=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],T=0;m===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let w=h.attributes.position.count*T,S=1;w>t.maxTextureSize&&(S=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let I=new Float32Array(w*S*4*g),y=new Ra(I,w,S,g);y.type=Vn,y.needsUpdate=!0;let R=T*4;for(let $=0;$<g;$++){let P=x[$],q=M[$],N=A[$],O=w*S*4*$;for(let B=0;B<P.count;B++){let Z=B*R;m===!0&&(a.fromBufferAttribute(P,B),I[O+Z+0]=a.x,I[O+Z+1]=a.y,I[O+Z+2]=a.z,I[O+Z+3]=0),p===!0&&(a.fromBufferAttribute(q,B),I[O+Z+4]=a.x,I[O+Z+5]=a.y,I[O+Z+6]=a.z,I[O+Z+7]=0),_===!0&&(a.fromBufferAttribute(N,B),I[O+Z+8]=a.x,I[O+Z+9]=a.y,I[O+Z+10]=a.z,I[O+Z+11]=N.itemSize===4?a.w:1)}}v={count:g,texture:y,size:new lt(w,S)},r.set(h,v),h.addEventListener("dispose",V)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(j0);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(K0);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],A=M[0],T=M[1];A!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+x)!==v[A]&&h.setAttribute("morphTarget"+x,v[A]),m&&h.getAttribute("morphNormal"+x)!==m[A]&&h.setAttribute("morphNormal"+x,m[A]),s[x]=T,p+=T):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function tg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Na=class extends un{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:$i,h!==$i&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=Mi),n===void 0&&h===Ps&&(n=qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$u=new un,Yu=new Na(1,1);Yu.compareFunction=Hu;var Zu=new Ra,Ju=new Ml,Ku=new Ia,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),Ie(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Ie(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Ie(e,n)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yu:$u;e.setTexture2D(t||r,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ju,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ku,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zu,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(i,t){i.uniform1fv(this.addr,t)}function bg(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Eg(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function wg(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ag(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rg(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Pg(i,t){i.uniform3iv(this.addr,t)}function Lg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Dg(i,t){i.uniform2uiv(this.addr,t)}function Ug(i,t){i.uniform3uiv(this.addr,t)}function Ng(i,t){i.uniform4uiv(this.addr,t)}function Fg(i,t,e){let n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$u,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ju,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ku,r[a])}function zg(i,t,e){let n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zu,r[a])}function kg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},rl=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){let n=i.name,s=n.length;for(rl.lastIndex=0;;){let r=rl.exec(n),a=rl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lu(e,l===void 0?new El(o,i,t):new wl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Tl(o),lu(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Gg=37297,Vg=0;function Wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Xg(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===ba&&e===Ma?n="LinearDisplayP3ToLinearSRGB":t===Ma&&e===ba&&(n="LinearSRGBToLinearDisplayP3"),i){case Pi:case Qa:return[n,"LinearTransferOETF"];case je:case dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wg(i.getShaderSource(t),a)}else return s}function qg(i,t){let e=Xg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $g(i,t){let e;switch(t){case uf:e="Linear";break;case df:e="Reinhard";break;case ff:e="OptimizedCineon";break;case cc:e="ACESFilmic";break;case mf:e="AgX";break;case gf:e="Neutral";break;case pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Jg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ss(i){return i!==""}function uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(jg,tx)}var Qg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tx(i,t){let e=Gt[t];if(e===void 0){let n=Qg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(ex,nx)}function nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ix(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ja?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function sx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ka:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case hf:t="ENVMAP_BLENDING_ADD";break}return t}function ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ix(e),l=sx(e),h=rx(e),u=ax(e),d=ox(e),f=e.isWebGL2?"":Yg(e),g=Zg(e),v=Jg(r),m=s.createProgram(),p,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ss).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ss).join(`
`),_.length>0&&(_+=`
`)):(p=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),_=[f,pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Si?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Al(a),a=uu(a,e),a=du(a,e),o=Al(o),o=uu(o,e),o=du(o,e),a=fu(a),o=fu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=x+p+a,A=x+_+o,T=cu(s,s.VERTEX_SHADER,M),w=cu(s,s.FRAGMENT_SHADER,A);s.attachShader(m,T),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(V){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(T).trim(),q=s.getShaderInfoLog(w).trim(),N=!0,O=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,w);else{let B=hu(s,T,"vertex"),Z=hu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+B+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||q==="")&&(O=!1);O&&(V.diagnostics={runnable:N,programLog:$,vertexShader:{log:P,prefix:p},fragmentShader:{log:q,prefix:_}})}s.deleteShader(T),s.deleteShader(w),I=new As(s,m),y=Kg(s,m)}let I;this.getUniforms=function(){return I===void 0&&S(this),I};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,Gg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var cx=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function hx(i,t,e,n,s,r,a){let o=new Pa,c=new Rl,l=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,R,V,$,P){let q=$.fog,N=P.geometry,O=y.isMeshStandardMaterial?$.environment:null,B=(y.isMeshStandardMaterial?e:t).get(y.envMap||O),Z=B&&B.mapping===ja?B.image.height:null,j=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let nt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ft=nt!==void 0?nt.length:0,Ct=0;N.morphAttributes.position!==void 0&&(Ct=1),N.morphAttributes.normal!==void 0&&(Ct=2),N.morphAttributes.color!==void 0&&(Ct=3);let H,K,dt,St;if(j){let ue=Gn[j];H=ue.vertexShader,K=ue.fragmentShader}else H=y.vertexShader,K=y.fragmentShader,c.update(y),dt=c.getVertexShaderID(y),St=c.getFragmentShaderID(y);let _t=i.getRenderTarget(),gt=P.isInstancedMesh===!0,ie=P.isBatchedMesh===!0,Lt=!!y.map,F=!!y.matcap,Oe=!!B,bt=!!y.aoMap,Xt=!!y.lightMap,wt=!!y.bumpMap,jt=!!y.normalMap,Vt=!!y.displacementMap,qt=!!y.emissiveMap,Ee=!!y.metalnessMap,C=!!y.roughnessMap,b=y.anisotropy>0,Y=y.clearcoat>0,J=y.iridescence>0,et=y.sheen>0,tt=y.transmission>0,zt=b&&!!y.anisotropyMap,Rt=Y&&!!y.clearcoatMap,ot=Y&&!!y.clearcoatNormalMap,ht=Y&&!!y.clearcoatRoughnessMap,kt=J&&!!y.iridescenceMap,it=J&&!!y.iridescenceThicknessMap,Ae=et&&!!y.sheenColorMap,$t=et&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,xt=!!y.specularColorMap,vt=!!y.specularIntensityMap,Qt=tt&&!!y.transmissionMap,Ut=tt&&!!y.thicknessMap,ge=!!y.gradientMap,D=!!y.alphaMap,ct=y.alphaTest>0,G=!!y.alphaHash,rt=!!y.extensions,ut=Si;y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ut=i.toneMapping);let Yt={isWebGL2:u,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:K,defines:y.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:ie,instancing:gt,instancingColor:gt&&P.instanceColor!==null,instancingMorph:gt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Pi,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:F,envMap:Oe,envMapMode:Oe&&B.mapping,envMapCubeUVHeight:Z,aoMap:bt,lightMap:Xt,bumpMap:wt,normalMap:jt,displacementMap:f&&Vt,emissiveMap:qt,normalMapObjectSpace:jt&&y.normalMapType===Tf,normalMapTangentSpace:jt&&y.normalMapType===uc,metalnessMap:Ee,roughnessMap:C,anisotropy:b,anisotropyMap:zt,clearcoat:Y,clearcoatMap:Rt,clearcoatNormalMap:ot,clearcoatRoughnessMap:ht,iridescence:J,iridescenceMap:kt,iridescenceThicknessMap:it,sheen:et,sheenColorMap:Ae,sheenRoughnessMap:$t,specularMap:Mt,specularColorMap:xt,specularIntensityMap:vt,transmission:tt,transmissionMap:Qt,thicknessMap:Ut,gradientMap:ge,opaque:y.transparent===!1&&y.blending===ws&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:ct,alphaHash:G,combine:y.combine,mapUv:Lt&&m(y.map.channel),aoMapUv:bt&&m(y.aoMap.channel),lightMapUv:Xt&&m(y.lightMap.channel),bumpMapUv:wt&&m(y.bumpMap.channel),normalMapUv:jt&&m(y.normalMap.channel),displacementMapUv:Vt&&m(y.displacementMap.channel),emissiveMapUv:qt&&m(y.emissiveMap.channel),metalnessMapUv:Ee&&m(y.metalnessMap.channel),roughnessMapUv:C&&m(y.roughnessMap.channel),anisotropyMapUv:zt&&m(y.anisotropyMap.channel),clearcoatMapUv:Rt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:$t&&m(y.sheenRoughnessMap.channel),specularMapUv:Mt&&m(y.specularMap.channel),specularColorMapUv:xt&&m(y.specularColorMap.channel),specularIntensityMapUv:vt&&m(y.specularIntensityMap.channel),transmissionMapUv:Qt&&m(y.transmissionMap.channel),thicknessMapUv:Ut&&m(y.thicknessMap.channel),alphaMapUv:D&&m(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(jt||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(Lt||D),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ct,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:rt&&y.extensions.derivatives===!0,extensionFragDepth:rt&&y.extensions.fragDepth===!0,extensionDrawBuffers:rt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function _(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let V in y.defines)R.push(V),R.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(x(R,y),M(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function x(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function M(y,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),y.push(o.mask)}function A(y){let R=v[y.type],V;if(R){let $=Gn[R];V=Kf.clone($.uniforms)}else V=y.uniforms;return V}function T(y,R){let V;for(let $=0,P=h.length;$<P;$++){let q=h[$];if(q.cacheKey===R){V=q,++V.usedTimes;break}}return V===void 0&&(V=new lx(i,R,y,r),h.push(V)),V}function w(y){if(--y.usedTimes===0){let R=h.indexOf(y);h[R]=h[h.length-1],h.pop(),y.destroy()}}function S(y){c.remove(y)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:I}}function ux(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function dx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||dx),n.length>1&&n.sort(d||mu),s.length>1&&s.sort(d||mu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function fx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gu,i.set(n,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new mt};break;case"SpotLight":e={position:new L,direction:new L,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gx=0;function xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i,t){let e=new px,n=mx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new ne,o=new ne;function c(h,u){let d=0,f=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let v=0,m=0,p=0,_=0,x=0,M=0,A=0,T=0,w=0,S=0,I=0;h.sort(xx);let y=u===!0?Math.PI:1;for(let V=0,$=h.length;V<$;V++){let P=h[V],q=P.color,N=P.intensity,O=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=q.r*N*y,f+=q.g*N*y,g+=q.b*N*y;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(P.sh.coefficients[Z],N);I++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){let j=P.shadow,nt=n.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,s.directionalShadow[v]=nt,s.directionalShadowMap[v]=B,s.directionalShadowMatrix[v]=P.shadow.matrix,M++}s.directional[v]=Z,v++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(q).multiplyScalar(N*y),Z.distance=O,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,s.spot[p]=Z;let j=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,j.updateMatrices(P),P.castShadow&&S++),s.spotLightMatrix[p]=j.matrix,P.castShadow){let nt=n.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,s.spotShadow[p]=nt,s.spotShadowMap[p]=B,T++}p++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(q).multiplyScalar(N),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),s.rectArea[_]=Z,_++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*y),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let j=P.shadow,nt=n.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,s.pointShadow[m]=nt,s.pointShadowMap[m]=B,s.pointShadowMatrix[m]=P.shadow.matrix,A++}s.point[m]=Z,m++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(N*y),Z.groundColor.copy(P.groundColor).multiplyScalar(N*y),s.hemi[x]=Z,x++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let R=s.hash;(R.directionalLength!==v||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==_||R.hemiLength!==x||R.numDirectionalShadows!==M||R.numPointShadows!==A||R.numSpotShadows!==T||R.numSpotMaps!==w||R.numLightProbes!==I)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+w-S,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=S,s.numLightProbes=I,R.directionalLength=v,R.pointLength=m,R.spotLength=p,R.rectAreaLength=_,R.hemiLength=x,R.numDirectionalShadows=M,R.numPointShadows=A,R.numSpotShadows=T,R.numSpotMaps=w,R.numLightProbes=I,s.version=gx++)}function l(h,u){let d=0,f=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let M=h[_];if(M.isDirectionalLight){let A=s.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(M.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let A=s.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let A=s.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function xu(i,t){let e=new _x(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function vx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new xu(i,t),e.set(r,[c])):a>=o.length?(c=new xu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Pl=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function bx(i,t,e){let n=new pr,s=new lt,r=new lt,a=new ve,o=new Pl({depthPacking:wf}),c=new Ll,l={},h=e.maxTextureSize,u={[wi]:He,[He]:wi,[cn]:cn},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:yx,fragmentShader:Mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let p=this.type;this.render=function(T,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let I=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(bi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let $=p!==si&&this.type===si,P=p===si&&this.type!==si;for(let q=0,N=T.length;q<N;q++){let O=T[q],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();if(s.multiply(Z),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y)),B.map===null||$===!0||P===!0){let nt=this.type!==si?{minFilter:ze,magFilter:ze}:{};B.map!==null&&B.map.dispose(),B.map=new ci(s.x,s.y,nt),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let j=B.getViewportCount();for(let nt=0;nt<j;nt++){let ft=B.getViewport(nt);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),V.viewport(a),B.updateMatrices(O,nt),n=B.getFrustum(),M(w,S,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===si&&_(B,S),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,y,R)};function _(T,w){let S=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,S,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,S,f,v,null)}function x(T,w,S,I){let y=null,R=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=S.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=y.uuid,$=w.uuid,P=l[V];P===void 0&&(P={},l[V]=P);let q=P[$];q===void 0&&(q=y.clone(),P[$]=q,w.addEventListener("dispose",A)),y=q}if(y.visible=w.visible,y.wireframe=w.wireframe,I===si?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,S.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=S}return y}function M(T,w,S,I,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let $=t.update(T),P=T.material;if(Array.isArray(P)){let q=$.groups;for(let N=0,O=q.length;N<O;N++){let B=q[N],Z=P[B.materialIndex];if(Z&&Z.visible){let j=x(T,Z,I,y);T.onBeforeShadow(i,T,w,S,$,j,B),i.renderBufferDirect(S,null,$,j,T,B),T.onAfterShadow(i,T,w,S,$,j,B)}}}else if(P.visible){let q=x(T,P,I,y);T.onBeforeShadow(i,T,w,S,$,q,null),i.renderBufferDirect(S,null,$,q,T,null),T.onAfterShadow(i,T,w,S,$,q,null)}}let V=T.children;for(let $=0,P=V.length;$<P;$++)M(V[$],w,S,I,y)}function A(T){T.target.removeEventListener("dispose",A);for(let S in l){let I=l[S],y=T.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}function Sx(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ct=new ve,G=null,rt=new ve(0,0,0,0);return{setMask:function(ut){G!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){D=ut},setClear:function(ut,Yt,ue,Be,wn){wn===!0&&(ut*=Be,Yt*=Be,ue*=Be),ct.set(ut,Yt,ue,Be),rt.equals(ct)===!1&&(i.clearColor(ut,Yt,ue,Be),rt.copy(ct))},reset:function(){D=!1,G=null,rt.set(-1,0,0,0)}}}function r(){let D=!1,ct=null,G=null,rt=null;return{setTest:function(ut){ut?gt(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ut){ct!==ut&&!D&&(i.depthMask(ut),ct=ut)},setFunc:function(ut){if(G!==ut){switch(ut){case ef:i.depthFunc(i.NEVER);break;case nf:i.depthFunc(i.ALWAYS);break;case sf:i.depthFunc(i.LESS);break;case xa:i.depthFunc(i.LEQUAL);break;case rf:i.depthFunc(i.EQUAL);break;case af:i.depthFunc(i.GEQUAL);break;case of:i.depthFunc(i.GREATER);break;case lf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=ut}},setLocked:function(ut){D=ut},setClear:function(ut){rt!==ut&&(i.clearDepth(ut),rt=ut)},reset:function(){D=!1,ct=null,G=null,rt=null}}}function a(){let D=!1,ct=null,G=null,rt=null,ut=null,Yt=null,ue=null,Be=null,wn=null;return{setTest:function(de){D||(de?gt(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(de){ct!==de&&!D&&(i.stencilMask(de),ct=de)},setFunc:function(de,nn,Hn){(G!==de||rt!==nn||ut!==Hn)&&(i.stencilFunc(de,nn,Hn),G=de,rt=nn,ut=Hn)},setOp:function(de,nn,Hn){(Yt!==de||ue!==nn||Be!==Hn)&&(i.stencilOp(de,nn,Hn),Yt=de,ue=nn,Be=Hn)},setLocked:function(de){D=de},setClear:function(de){wn!==de&&(i.clearStencil(de),wn=de)},reset:function(){D=!1,ct=null,G=null,rt=null,ut=null,Yt=null,ue=null,Be=null,wn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,M=null,A=null,T=null,w=null,S=null,I=new mt(0,0,0),y=0,R=!1,V=null,$=null,P=null,q=null,N=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=Z>=2);let nt=null,ft={},Ct=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),K=new ve().fromArray(Ct),dt=new ve().fromArray(H);function St(D,ct,G,rt){let ut=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(D,Yt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<G;ue++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ct,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ct+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return Yt}let _t={};_t[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),gt(i.DEPTH_TEST),c.setFunc(xa),Vt(!1),qt(Jc),gt(i.CULL_FACE),wt(bi);function gt(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function ie(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Lt(D,ct){return f[D]!==ct?(i.bindFramebuffer(D,ct),f[D]=ct,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct)),!0):!1}function F(D,ct){let G=v,rt=!1;if(D){G=g.get(ct),G===void 0&&(G=[],g.set(ct,G));let ut=D.textures;if(G.length!==ut.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,ue=ut.length;Yt<ue;Yt++)G[Yt]=i.COLOR_ATTACHMENT0+Yt;G.length=ut.length,rt=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,rt=!0);if(rt)if(e.isWebGL2)i.drawBuffers(G);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Oe(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let bt={[Vi]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};if(n)bt[Qc]=i.MIN,bt[th]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(bt[Qc]=D.MIN_EXT,bt[th]=D.MAX_EXT)}let Xt={[Gd]:i.ZERO,[Vd]:i.ONE,[Wd]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Kd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[Qd]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(D,ct,G,rt,ut,Yt,ue,Be,wn,de){if(D===bi){p===!0&&(ie(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),D!==zd){if(D!==_||de!==R){if((x!==Vi||T!==Vi)&&(i.blendEquation(i.FUNC_ADD),x=Vi,T=Vi),de)switch(D){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,A=null,w=null,S=null,I.set(0,0,0),y=0,_=D,R=de}return}ut=ut||ct,Yt=Yt||G,ue=ue||rt,(ct!==x||ut!==T)&&(i.blendEquationSeparate(bt[ct],bt[ut]),x=ct,T=ut),(G!==M||rt!==A||Yt!==w||ue!==S)&&(i.blendFuncSeparate(Xt[G],Xt[rt],Xt[Yt],Xt[ue]),M=G,A=rt,w=Yt,S=ue),(Be.equals(I)===!1||wn!==y)&&(i.blendColor(Be.r,Be.g,Be.b,wn),I.copy(Be),y=wn),_=D,R=!1}function jt(D,ct){D.side===cn?ie(i.CULL_FACE):gt(i.CULL_FACE);let G=D.side===He;ct&&(G=!G),Vt(G),D.blending===ws&&D.transparent===!1?wt(bi):wt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let rt=D.stencilWrite;l.setTest(rt),rt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),C(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){V!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),V=D)}function qt(D){D!==Od?(gt(i.CULL_FACE),D!==$&&(D===Jc?i.cullFace(i.BACK):D===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),$=D}function Ee(D){D!==P&&(B&&i.lineWidth(D),P=D)}function C(D,ct,G){D?(gt(i.POLYGON_OFFSET_FILL),(q!==ct||N!==G)&&(i.polygonOffset(ct,G),q=ct,N=G)):ie(i.POLYGON_OFFSET_FILL)}function b(D){D?gt(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Y(D){D===void 0&&(D=i.TEXTURE0+O-1),nt!==D&&(i.activeTexture(D),nt=D)}function J(D,ct,G){G===void 0&&(nt===null?G=i.TEXTURE0+O-1:G=nt);let rt=ft[G];rt===void 0&&(rt={type:void 0,texture:void 0},ft[G]=rt),(rt.type!==D||rt.texture!==ct)&&(nt!==G&&(i.activeTexture(G),nt=G),i.bindTexture(D,ct||_t[D]),rt.type=D,rt.texture=ct)}function et(){let D=ft[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(D){K.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function vt(D){dt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),dt.copy(D))}function Qt(D,ct){let G=u.get(ct);G===void 0&&(G=new WeakMap,u.set(ct,G));let rt=G.get(D);rt===void 0&&(rt=i.getUniformBlockIndex(ct,D.name),G.set(D,rt))}function Ut(D,ct){let rt=u.get(ct).get(D);h.get(ct)!==rt&&(i.uniformBlockBinding(ct,rt,D.__bindingPointIndex),h.set(ct,rt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},nt=null,ft={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,M=null,A=null,T=null,w=null,S=null,I=new mt(0,0,0),y=0,R=!1,V=null,$=null,P=null,q=null,N=null,K.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:gt,disable:ie,bindFramebuffer:Lt,drawBuffers:F,useProgram:Oe,setBlending:wt,setMaterial:jt,setFlipSided:Vt,setCullFace:qt,setLineWidth:Ee,setPolygonOffset:C,setScissorTest:b,activeTexture:Y,bindTexture:J,unbindTexture:et,compressedTexImage2D:tt,compressedTexImage3D:zt,texImage2D:$t,texImage3D:Mt,updateUBOMapping:Qt,uniformBlockBinding:Ut,texStorage2D:it,texStorage3D:Ae,texSubImage2D:Rt,texSubImage3D:ot,compressedTexSubImage2D:ht,compressedTexSubImage3D:kt,scissor:xt,viewport:vt,reset:ge}}function Ex(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,u=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function v(C,b){return g?new OffscreenCanvas(C,b):wa("canvas")}function m(C,b,Y,J){let et=1,tt=Ee(C);if((tt.width>J||tt.height>J)&&(et=J/Math.max(tt.width,tt.height)),et<1||b===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let zt=b?vl:Math.floor,Rt=zt(et*tt.width),ot=zt(et*tt.height);d===void 0&&(d=v(Rt,ot));let ht=Y?v(Rt,ot):d;return ht.width=Rt,ht.height=ot,ht.getContext("2d").drawImage(C,0,0,Rt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Rt+"x"+ot+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){let b=Ee(C);return Ih(b.width)&&Ih(b.height)}function _(C){return o?!1:C.wrapS!==Un||C.wrapT!==Un||C.minFilter!==ze&&C.minFilter!==Ke}function x(C,b){return C.generateMipmaps&&b&&C.minFilter!==ze&&C.minFilter!==Ke}function M(C){i.generateMipmap(C)}function A(C,b,Y,J,et=!1){if(o===!1)return b;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=b;if(b===i.RED&&(Y===i.FLOAT&&(tt=i.R32F),Y===i.HALF_FLOAT&&(tt=i.R16F),Y===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.R8UI),Y===i.UNSIGNED_SHORT&&(tt=i.R16UI),Y===i.UNSIGNED_INT&&(tt=i.R32UI),Y===i.BYTE&&(tt=i.R8I),Y===i.SHORT&&(tt=i.R16I),Y===i.INT&&(tt=i.R32I)),b===i.RG&&(Y===i.FLOAT&&(tt=i.RG32F),Y===i.HALF_FLOAT&&(tt=i.RG16F),Y===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(tt=i.RG16UI),Y===i.UNSIGNED_INT&&(tt=i.RG32UI),Y===i.BYTE&&(tt=i.RG8I),Y===i.SHORT&&(tt=i.RG16I),Y===i.INT&&(tt=i.RG32I)),b===i.RGBA){let zt=et?ya:oe.getTransfer(J);Y===i.FLOAT&&(tt=i.RGBA32F),Y===i.HALF_FLOAT&&(tt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(tt=zt===me?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(C,b,Y){return x(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==Ke?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){return C===ze||C===eh||C===Ks?i.NEAREST:i.LINEAR}function S(C){let b=C.target;b.removeEventListener("dispose",S),y(b),b.isVideoTexture&&u.delete(b)}function I(C){let b=C.target;b.removeEventListener("dispose",I),V(b)}function y(C){let b=n.get(C);if(b.__webglInit===void 0)return;let Y=C.source,J=f.get(Y);if(J){let et=J[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(C),Object.keys(J).length===0&&f.delete(Y)}n.remove(C)}function R(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let Y=C.source,J=f.get(Y);delete J[b.__cacheKey],a.memory.textures--}function V(C){let b=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let et=0;et<b.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[J][et]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=C.textures;for(let J=0,et=Y.length;J<et;J++){let tt=n.get(Y[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(Y[J])}n.remove(C)}let $=0;function P(){$=0}function q(){let C=$;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),$+=1,C}function N(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function O(C,b){let Y=n.get(C);if(C.isVideoTexture&&Vt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(Y,C,b);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+b)}function B(C,b){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){dt(Y,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+b)}function Z(C,b){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){dt(Y,C,b);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+b)}function j(C,b){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){St(Y,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+b)}let nt={[dr]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},ft={[ze]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Ct={[Af]:i.NEVER,[Df]:i.ALWAYS,[Rf]:i.LESS,[Hu]:i.LEQUAL,[Cf]:i.EQUAL,[If]:i.GEQUAL,[Pf]:i.GREATER,[Lf]:i.NOTEQUAL};function H(C,b,Y){if(b.type===Vn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ke||b.magFilter===Ao||b.magFilter===Ks||b.magFilter===ai||b.minFilter===Ke||b.minFilter===Ao||b.minFilter===Ks||b.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(C,i.TEXTURE_WRAP_S,nt[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,nt[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,nt[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ft[b.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Un||b.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,w(b.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==ze&&b.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ze||b.minFilter!==Ks&&b.minFilter!==ai||b.type===Vn&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===fr&&t.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function K(C,b){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",S));let J=b.source,et=f.get(J);et===void 0&&(et={},f.set(J,et));let tt=N(b);if(tt!==C.__cacheKey){et[tt]===void 0&&(et[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),et[tt].usedTimes++;let zt=et[C.__cacheKey];zt!==void 0&&(et[C.__cacheKey].usedTimes--,zt.usedTimes===0&&R(b)),C.__cacheKey=tt,C.__webglTexture=et[tt].texture}return Y}function dt(C,b,Y){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);let et=K(C,b),tt=b.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+Y);let zt=n.get(tt);if(tt.version!==zt.__version||et===!0){e.activeTexture(i.TEXTURE0+Y);let Rt=oe.getPrimaries(oe.workingColorSpace),ot=b.colorSpace===yi?null:oe.getPrimaries(b.colorSpace),ht=b.colorSpace===yi||Rt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let kt=_(b)&&p(b.image)===!1,it=m(b.image,kt,!1,s.maxTextureSize);it=qt(b,it);let Ae=p(it)||o,$t=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),xt=A(b.internalFormat,$t,Mt,b.colorSpace,b.isVideoTexture);H(J,b,Ae);let vt,Qt=b.mipmaps,Ut=o&&b.isVideoTexture!==!0&&xt!==ku,ge=zt.__version===void 0||et===!0,D=tt.dataReady,ct=T(b,it,Ae);if(b.isDepthTexture)xt=i.DEPTH_COMPONENT,o?b.type===Vn?xt=i.DEPTH_COMPONENT32F:b.type===Mi?xt=i.DEPTH_COMPONENT24:b.type===qi?xt=i.DEPTH24_STENCIL8:xt=i.DEPTH_COMPONENT16:b.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===$i&&xt===i.DEPTH_COMPONENT&&b.type!==hc&&b.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Mi,Mt=r.convert(b.type)),b.format===Ps&&xt===i.DEPTH_COMPONENT&&(xt=i.DEPTH_STENCIL,b.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=qi,Mt=r.convert(b.type))),ge&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,xt,it.width,it.height,0,$t,Mt,null));else if(b.isDataTexture)if(Qt.length>0&&Ae){Ut&&ge&&e.texStorage2D(i.TEXTURE_2D,ct,xt,Qt[0].width,Qt[0].height);for(let G=0,rt=Qt.length;G<rt;G++)vt=Qt[G],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,vt.width,vt.height,$t,Mt,vt.data):e.texImage2D(i.TEXTURE_2D,G,xt,vt.width,vt.height,0,$t,Mt,vt.data);b.generateMipmaps=!1}else Ut?(ge&&e.texStorage2D(i.TEXTURE_2D,ct,xt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,$t,Mt,it.data)):e.texImage2D(i.TEXTURE_2D,0,xt,it.width,it.height,0,$t,Mt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,xt,Qt[0].width,Qt[0].height,it.depth);for(let G=0,rt=Qt.length;G<rt;G++)vt=Qt[G],b.format!==Nn?$t!==null?Ut?D&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,vt.width,vt.height,it.depth,$t,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,xt,vt.width,vt.height,it.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,vt.width,vt.height,it.depth,$t,Mt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,xt,vt.width,vt.height,it.depth,0,$t,Mt,vt.data)}else{Ut&&ge&&e.texStorage2D(i.TEXTURE_2D,ct,xt,Qt[0].width,Qt[0].height);for(let G=0,rt=Qt.length;G<rt;G++)vt=Qt[G],b.format!==Nn?$t!==null?Ut?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,vt.width,vt.height,$t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,xt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,vt.width,vt.height,$t,Mt,vt.data):e.texImage2D(i.TEXTURE_2D,G,xt,vt.width,vt.height,0,$t,Mt,vt.data)}else if(b.isDataArrayTexture)Ut?(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,xt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,$t,Mt,it.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,$t,Mt,it.data);else if(b.isData3DTexture)Ut?(ge&&e.texStorage3D(i.TEXTURE_3D,ct,xt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,$t,Mt,it.data)):e.texImage3D(i.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,$t,Mt,it.data);else if(b.isFramebufferTexture){if(ge)if(Ut)e.texStorage2D(i.TEXTURE_2D,ct,xt,it.width,it.height);else{let G=it.width,rt=it.height;for(let ut=0;ut<ct;ut++)e.texImage2D(i.TEXTURE_2D,ut,xt,G,rt,0,$t,Mt,null),G>>=1,rt>>=1}}else if(Qt.length>0&&Ae){if(Ut&&ge){let G=Ee(Qt[0]);e.texStorage2D(i.TEXTURE_2D,ct,xt,G.width,G.height)}for(let G=0,rt=Qt.length;G<rt;G++)vt=Qt[G],Ut?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,$t,Mt,vt):e.texImage2D(i.TEXTURE_2D,G,xt,$t,Mt,vt);b.generateMipmaps=!1}else if(Ut){if(ge){let G=Ee(it);e.texStorage2D(i.TEXTURE_2D,ct,xt,G.width,G.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$t,Mt,it)}else e.texImage2D(i.TEXTURE_2D,0,xt,$t,Mt,it);x(b,Ae)&&M(J),zt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function St(C,b,Y){if(b.image.length!==6)return;let J=K(C,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let tt=n.get(et);if(et.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+Y);let zt=oe.getPrimaries(oe.workingColorSpace),Rt=b.colorSpace===yi?null:oe.getPrimaries(b.colorSpace),ot=b.colorSpace===yi||zt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let ht=b.isCompressedTexture||b.image[0].isCompressedTexture,kt=b.image[0]&&b.image[0].isDataTexture,it=[];for(let G=0;G<6;G++)!ht&&!kt?it[G]=m(b.image[G],!1,!0,s.maxCubemapSize):it[G]=kt?b.image[G].image:b.image[G],it[G]=qt(b,it[G]);let Ae=it[0],$t=p(Ae)||o,Mt=r.convert(b.format,b.colorSpace),xt=r.convert(b.type),vt=A(b.internalFormat,Mt,xt,b.colorSpace),Qt=o&&b.isVideoTexture!==!0,Ut=tt.__version===void 0||J===!0,ge=et.dataReady,D=T(b,Ae,$t);H(i.TEXTURE_CUBE_MAP,b,$t);let ct;if(ht){Qt&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,vt,Ae.width,Ae.height);for(let G=0;G<6;G++){ct=it[G].mipmaps;for(let rt=0;rt<ct.length;rt++){let ut=ct[rt];b.format!==Nn?Mt!==null?Qt?ge&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,ut.width,ut.height,Mt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?ge&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,ut.width,ut.height,Mt,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,vt,ut.width,ut.height,0,Mt,xt,ut.data)}}}else{if(ct=b.mipmaps,Qt&&Ut){ct.length>0&&D++;let G=Ee(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,vt,G.width,G.height)}for(let G=0;G<6;G++)if(kt){Qt?ge&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,it[G].width,it[G].height,Mt,xt,it[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,vt,it[G].width,it[G].height,0,Mt,xt,it[G].data);for(let rt=0;rt<ct.length;rt++){let Yt=ct[rt].image[G].image;Qt?ge&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,Yt.width,Yt.height,Mt,xt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,vt,Yt.width,Yt.height,0,Mt,xt,Yt.data)}}else{Qt?ge&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Mt,xt,it[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,vt,Mt,xt,it[G]);for(let rt=0;rt<ct.length;rt++){let ut=ct[rt];Qt?ge&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,Mt,xt,ut.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,vt,Mt,xt,ut.image[G])}}}x(b,$t)&&M(i.TEXTURE_CUBE_MAP),tt.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _t(C,b,Y,J,et,tt){let zt=r.convert(Y.format,Y.colorSpace),Rt=r.convert(Y.type),ot=A(Y.internalFormat,zt,Rt,Y.colorSpace);if(!n.get(b).__hasExternalTextures){let kt=Math.max(1,b.width>>tt),it=Math.max(1,b.height>>tt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,tt,ot,kt,it,b.depth,0,zt,Rt,null):e.texImage2D(et,tt,ot,kt,it,0,zt,Rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),jt(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,n.get(Y).__webglTexture,0,wt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,n.get(Y).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(C,b,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let J=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||jt(b)){let et=b.depthTexture;et&&et.isDepthTexture&&(et.type===Vn?J=i.DEPTH_COMPONENT32F:et.type===Mi&&(J=i.DEPTH_COMPONENT24));let tt=wt(b);jt(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,J,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,J,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let J=wt(b);Y&&jt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,b.width,b.height):jt(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let J=b.textures;for(let et=0;et<J.length;et++){let tt=J[et],zt=r.convert(tt.format,tt.colorSpace),Rt=r.convert(tt.type),ot=A(tt.internalFormat,zt,Rt,tt.colorSpace),ht=wt(b);Y&&jt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,ot,b.width,b.height):jt(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,ot,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ot,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let J=n.get(b.depthTexture).__webglTexture,et=wt(b);if(b.depthTexture.format===$i)jt(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(b.depthTexture.format===Ps)jt(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(C){let b=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ie(b.__webglFramebuffer,C)}else if(Y){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]=i.createRenderbuffer(),gt(b.__webglDepthbuffer[J],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),gt(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(C,b,Y){let J=n.get(C);b!==void 0&&_t(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Lt(C)}function Oe(C){let b=C.texture,Y=n.get(C),J=n.get(b);C.addEventListener("dispose",I);let et=C.textures,tt=C.isWebGLCubeRenderTarget===!0,zt=et.length>1,Rt=p(C)||o;if(zt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,a.memory.textures++),tt){Y.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(o&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[ot]=[];for(let ht=0;ht<b.mipmaps.length;ht++)Y.__webglFramebuffer[ot][ht]=i.createFramebuffer()}else Y.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)Y.__webglFramebuffer[ot]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(zt)if(s.drawBuffers)for(let ot=0,ht=et.length;ot<ht;ot++){let kt=n.get(et[ot]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&jt(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ot=0;ot<et.length;ot++){let ht=et[ot];Y.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);let kt=r.convert(ht.format,ht.colorSpace),it=r.convert(ht.type),Ae=A(ht.internalFormat,kt,it,ht.colorSpace,C.isXRRenderTarget===!0),$t=wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Ae,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),H(i.TEXTURE_CUBE_MAP,b,Rt);for(let ot=0;ot<6;ot++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)_t(Y.__webglFramebuffer[ot][ht],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else _t(Y.__webglFramebuffer[ot],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(b,Rt)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let ot=0,ht=et.length;ot<ht;ot++){let kt=et[ot],it=n.get(kt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),H(i.TEXTURE_2D,kt,Rt),_t(Y.__webglFramebuffer,C,kt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),x(kt,Rt)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ot=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,J.__webglTexture),H(ot,b,Rt),o&&b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)_t(Y.__webglFramebuffer[ht],C,b,i.COLOR_ATTACHMENT0,ot,ht);else _t(Y.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ot,0);x(b,Rt)&&M(ot),e.unbindTexture()}C.depthBuffer&&Lt(C)}function bt(C){let b=p(C)||o,Y=C.textures;for(let J=0,et=Y.length;J<et;J++){let tt=Y[J];if(x(tt,b)){let zt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(tt).__webglTexture;e.bindTexture(zt,Rt),M(zt),e.unbindTexture()}}}function Xt(C){if(o&&C.samples>0&&jt(C)===!1){let b=C.textures,Y=C.width,J=C.height,et=i.COLOR_BUFFER_BIT,tt=[],zt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),ot=b.length>1;if(ot)for(let ht=0;ht<b.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let ht=0;ht<b.length;ht++){tt.push(i.COLOR_ATTACHMENT0+ht),C.depthBuffer&&tt.push(zt);let kt=Rt.__ignoreDepthValues!==void 0?Rt.__ignoreDepthValues:!1;if(kt===!1&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ot&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[ht]),kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[zt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[zt])),ot){let it=n.get(b[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,Y,J,0,0,Y,J,et,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ht=0;ht<b.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[ht]);let kt=n.get(b[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}}function wt(C){return Math.min(s.maxSamples,C.samples)}function jt(C){let b=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Vt(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function qt(C,b){let Y=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===_l||Y!==Pi&&Y!==yi&&(oe.getTransfer(Y)===me?o===!1?t.has("EXT_sRGB")===!0&&J===Nn?(C.format=_l,C.minFilter=Ke,C.generateMipmaps=!1):b=Ta.sRGBToLinear(b):(J!==Nn||et!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Ee(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=F,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=jt}function wx(i,t,e){let n=e.isWebGL2;function s(r,a=yi){let o,c=oe.getTransfer(a);if(r===Ei)return i.UNSIGNED_BYTE;if(r===Uu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xf)return i.BYTE;if(r===_f)return i.SHORT;if(r===hc)return i.UNSIGNED_SHORT;if(r===Du)return i.INT;if(r===Mi)return i.UNSIGNED_INT;if(r===Vn)return i.FLOAT;if(r===fr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===vf)return i.ALPHA;if(r===Nn)return i.RGBA;if(r===yf)return i.LUMINANCE;if(r===Mf)return i.LUMINANCE_ALPHA;if(r===$i)return i.DEPTH_COMPONENT;if(r===Ps)return i.DEPTH_STENCIL;if(r===_l)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Fu)return i.RED;if(r===Ou)return i.RED_INTEGER;if(r===bf)return i.RG;if(r===Bu)return i.RG_INTEGER;if(r===zu)return i.RGBA_INTEGER;if(r===Ro||r===Co||r===Po||r===Lo)if(c===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nh||r===ih||r===sh||r===rh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===nh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ku)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ah||r===oh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ah)return c===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===oh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lh||r===ch||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===xh||r===_h||r===vh||r===yh||r===Mh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ch)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ph)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_h)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Io||r===bh||r===Sh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Io)return c===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sf||r===Eh||r===wh||r===Th)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Io)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Il=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ke=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tx={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new $n({extensions:{fragDepth:!0},vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new Ge(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},Ul=class extends Ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=new Dl,m=e.getContextAttributes(),p=null,_=null,x=[],M=[],A=new lt,T=null,w=new Fe;w.layers.enable(1),w.viewport=new ve;let S=new Fe;S.layers.enable(2),S.viewport=new ve;let I=[w,S],y=new Il;y.layers.enable(1),y.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=x[H];return K===void 0&&(K=new lr,x[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=x[H];return K===void 0&&(K=new lr,x[H]=K),K.getGripSpace()},this.getHand=function(H){let K=x[H];return K===void 0&&(K=new lr,x[H]=K),K.getHandSpace()};function $(H){let K=M.indexOf(H.inputSource);if(K===-1)return;let dt=x[K];dt!==void 0&&(dt.update(H.inputSource,H.frame,l||a),dt.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",q);for(let H=0;H<x.length;H++){let K=M[H];K!==null&&(M[H]=null,x[H].disconnect(K))}R=null,V=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",P),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ci(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,dt=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Ps:$i,dt=m.stencil?qi:Mi);let _t={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new ci(d.textureWidth,d.textureHeight,{format:Nn,type:Ei,depthTexture:new Na(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});let gt=t.properties.get(_);gt.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(H){for(let K=0;K<H.removed.length;K++){let dt=H.removed[K],St=M.indexOf(dt);St>=0&&(M[St]=null,x[St].disconnect(dt))}for(let K=0;K<H.added.length;K++){let dt=H.added[K],St=M.indexOf(dt);if(St===-1){for(let gt=0;gt<x.length;gt++)if(gt>=M.length){M.push(dt),St=gt;break}else if(M[gt]===null){M[gt]=dt,St=gt;break}if(St===-1)break}let _t=x[St];_t&&_t.connect(dt)}}let N=new L,O=new L;function B(H,K,dt){N.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(dt.matrixWorld);let St=N.distanceTo(O),_t=K.projectionMatrix.elements,gt=dt.projectionMatrix.elements,ie=_t[14]/(_t[10]-1),Lt=_t[14]/(_t[10]+1),F=(_t[9]+1)/_t[5],Oe=(_t[9]-1)/_t[5],bt=(_t[8]-1)/_t[0],Xt=(gt[8]+1)/gt[0],wt=ie*bt,jt=ie*Xt,Vt=St/(-bt+Xt),qt=Vt*-bt;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(qt),H.translateZ(Vt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let Ee=ie+Vt,C=Lt+Vt,b=wt-qt,Y=jt+(St-qt),J=F*Lt/C*Ee,et=Oe*Lt/C*Ee;H.projectionMatrix.makePerspective(b,Y,J,et,Ee,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Z(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;v.texture!==null&&(H.near=v.depthNear,H.far=v.depthFar),y.near=S.near=w.near=H.near,y.far=S.far=w.far=H.far,(R!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,V=y.far,w.near=R,w.far=V,S.near=R,S.far=V,w.updateProjectionMatrix(),S.updateProjectionMatrix(),H.updateProjectionMatrix());let K=H.parent,dt=y.cameras;Z(y,K);for(let St=0;St<dt.length;St++)Z(dt[St],K);dt.length===2?B(y,w,S):y.projectionMatrix.copy(w.projectionMatrix),j(H,y,K)};function j(H,K,dt){dt===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(dt.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ea*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null};let nt=null;function ft(H,K){if(h=K.getViewerPose(l||a),g=K,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let St=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let gt=0;gt<dt.length;gt++){let ie=dt[gt],Lt=null;if(f!==null)Lt=f.getViewport(ie);else{let Oe=u.getViewSubImage(d,ie);Lt=Oe.viewport,gt===0&&(t.setRenderTargetTextures(_,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(_))}let F=I[gt];F===void 0&&(F=new Fe,F.layers.enable(gt),F.viewport=new ve,I[gt]=F),F.matrix.fromArray(ie.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(ie.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),gt===0&&(y.matrix.copy(F.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(F)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){let gt=u.getDepthInformation(dt[0]);gt&&gt.isValid&&gt.texture&&v.init(t,gt,s.renderState)}}for(let dt=0;dt<x.length;dt++){let St=M[dt],_t=x[dt];St!==null&&_t!==void 0&&_t.update(St,K,l||a)}v.render(t,y),nt&&nt(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Ct=new qu;Ct.setAnimationLoop(ft),this.setAnimationLoop=function(H){nt=H},this.dispose=function(){}}},Hi=new xn,Cx=new ne;function Px(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),x=_.envMap,M=_.envMapRotation;if(x&&(m.envMap.value=x,Hi.copy(M),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let A=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){let M=x.program;n.uniformBlockBinding(_,M)}function l(_,x){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(_,A);let T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let x=u();_.__bindingPointIndex=x;let M=i.createBuffer(),A=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],M=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){let S=Array.isArray(M[T])?M[T]:[M[T]];for(let I=0,y=S.length;I<y;I++){let R=S[I];if(f(R,T,I,A)===!0){let V=R.__offset,$=Array.isArray(R.value)?R.value:[R.value],P=0;for(let q=0;q<$.length;q++){let N=$[q],O=v(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,V+P,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,P),P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,x,M,A){let T=_.value,w=x+"_"+M;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{let S=A[w];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return A[w]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function g(_){let x=_.uniforms,M=0,A=16;for(let w=0,S=x.length;w<S;w++){let I=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,R=I.length;y<R;y++){let V=I[y],$=Array.isArray(V.value)?V.value:[V.value];for(let P=0,q=$.length;P<q;P++){let N=$[P],O=v(N),B=M%A;B!==0&&A-B<O.boundary&&(M+=A-B),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=O.storage}}}let T=M%A;return T>0&&(M+=A-T),_.__size=M,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var mr=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;let x=this,M=!1,A=0,T=0,w=null,S=-1,I=null,y=new ve,R=new ve,V=null,$=new mt(0),P=0,q=e.width,N=e.height,O=1,B=null,Z=null,j=new ve(0,0,q,N),nt=new ve(0,0,q,N),ft=!1,Ct=new pr,H=!1,K=!1,dt=null,St=new ne,_t=new lt,gt=new L,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return w===null?O:1}let F=n;function Oe(E,U){for(let W=0;W<E.length;W++){let X=E[W],k=e.getContext(X,U);if(k!==null)return k}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=Oe(U,E),F===null)throw Oe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let bt,Xt,wt,jt,Vt,qt,Ee,C,b,Y,J,et,tt,zt,Rt,ot,ht,kt,it,Ae,$t,Mt,xt,vt;function Qt(){bt=new $0(F),Xt=new H0(F,bt,t),bt.init(Xt),Mt=new wx(F,bt,Xt),wt=new Sx(F,bt,Xt),jt=new J0(F),Vt=new ux,qt=new Ex(F,bt,wt,Vt,Xt,Mt,jt),Ee=new V0(x),C=new q0(x),b=new np(F,Xt),xt=new z0(F,bt,b,Xt),Y=new Y0(F,b,jt,xt),J=new tg(F,Y,b,jt),it=new Q0(F,Xt,qt),ot=new G0(Vt),et=new hx(x,Ee,C,bt,Xt,xt,ot),tt=new Px(x,Vt),zt=new fx,Rt=new vx(bt,Xt),kt=new B0(x,Ee,C,wt,J,d,c),ht=new bx(x,J,Xt),vt=new Lx(F,jt,Xt,wt),Ae=new k0(F,bt,jt,Xt),$t=new Z0(F,bt,jt,Xt),jt.programs=et.programs,x.capabilities=Xt,x.extensions=bt,x.properties=Vt,x.renderLists=zt,x.shadowMap=ht,x.state=wt,x.info=jt}Qt();let Ut=new Ul(x,F);this.xr=Ut,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(q,N,!1))},this.getSize=function(E){return E.set(q,N)},this.setSize=function(E,U,W=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,N=U,e.width=Math.floor(E*O),e.height=Math.floor(U*O),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*O,N*O).floor()},this.setDrawingBufferSize=function(E,U,W){q=E,N=U,O=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,U,W,X){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,W,X),wt.viewport(y.copy(j).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,U,W,X){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,U,W,X),wt.scissor(R.copy(nt).multiplyScalar(O).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(E){wt.setScissorTest(ft=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,U=!0,W=!0){let X=0;if(E){let k=!1;if(w!==null){let pt=w.texture.format;k=pt===zu||pt===Bu||pt===Ou}if(k){let pt=w.texture.type,yt=pt===Ei||pt===Mi||pt===hc||pt===qi||pt===Uu||pt===Nu,Et=kt.getClearColor(),Pt=kt.getClearAlpha(),Wt=Et.r,It=Et.g,Nt=Et.b;yt?(f[0]=Wt,f[1]=It,f[2]=Nt,f[3]=Pt,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Wt,g[1]=It,g[2]=Nt,g[3]=Pt,F.clearBufferiv(F.COLOR,0,g))}else X|=F.COLOR_BUFFER_BIT}U&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),zt.dispose(),Rt.dispose(),Vt.dispose(),Ee.dispose(),C.dispose(),J.dispose(),xt.dispose(),vt.dispose(),et.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",wn),Ut.removeEventListener("sessionend",de),dt&&(dt.dispose(),dt=null),nn.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=jt.autoReset,U=ht.enabled,W=ht.autoUpdate,X=ht.needsUpdate,k=ht.type;Qt(),jt.autoReset=E,ht.enabled=U,ht.autoUpdate=W,ht.needsUpdate=X,ht.type=k}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function G(E){let U=E.target;U.removeEventListener("dispose",G),rt(U)}function rt(E){ut(E),Vt.remove(E)}function ut(E){let U=Vt.get(E).programs;U!==void 0&&(U.forEach(function(W){et.releaseProgram(W)}),E.isShaderMaterial&&et.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,X,k,pt){U===null&&(U=ie);let yt=k.isMesh&&k.matrixWorld.determinant()<0,Et=Rd(E,U,W,X,k);wt.setMaterial(X,yt);let Pt=W.index,Wt=1;if(X.wireframe===!0){if(Pt=Y.getWireframeAttribute(W),Pt===void 0)return;Wt=2}let It=W.drawRange,Nt=W.attributes.position,we=It.start*Wt,fn=(It.start+It.count)*Wt;pt!==null&&(we=Math.max(we,pt.start*Wt),fn=Math.min(fn,(pt.start+pt.count)*Wt)),Pt!==null?(we=Math.max(we,0),fn=Math.min(fn,Pt.count)):Nt!=null&&(we=Math.max(we,0),fn=Math.min(fn,Nt.count));let Ue=fn-we;if(Ue<0||Ue===1/0)return;xt.setup(k,X,Et,W,Pt);let jn,ye=Ae;if(Pt!==null&&(jn=b.get(Pt),ye=$t,ye.setIndex(jn)),k.isMesh)X.wireframe===!0?(wt.setLineWidth(X.wireframeLinewidth*Lt()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(k.isLine){let Ht=X.linewidth;Ht===void 0&&(Ht=1),wt.setLineWidth(Ht*Lt()),k.isLineSegments?ye.setMode(F.LINES):k.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else k.isPoints?ye.setMode(F.POINTS):k.isSprite&&ye.setMode(F.TRIANGLES);if(k.isBatchedMesh)ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ye.renderInstances(we,Ue,k.count);else if(W.isInstancedBufferGeometry){let Ht=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,So=Math.min(W.instanceCount,Ht);ye.renderInstances(we,Ue,So)}else ye.render(we,Ue)};function Yt(E,U,W){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,zr(E,U,W),E.side=wi,E.needsUpdate=!0,zr(E,U,W),E.side=cn):zr(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),m=Rt.get(W),m.init(),_.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);let X=new Set;return E.traverse(function(k){let pt=k.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){let Et=pt[yt];Yt(Et,W,k),X.add(Et)}else Yt(pt,W,k),X.add(pt)}),_.pop(),m=null,X},this.compileAsync=function(E,U,W=null){let X=this.compile(E,U,W);return new Promise(k=>{function pt(){if(X.forEach(function(yt){Vt.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){k(E);return}setTimeout(pt,10)}bt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ue=null;function Be(E){ue&&ue(E)}function wn(){nn.stop()}function de(){nn.start()}let nn=new qu;nn.setAnimationLoop(Be),typeof self!="undefined"&&nn.setContext(self),this.setAnimationLoop=function(E){ue=E,Ut.setAnimationLoop(E),E===null?nn.stop():nn.start()},Ut.addEventListener("sessionstart",wn),Ut.addEventListener("sessionend",de),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(U),U=Ut.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,w),m=Rt.get(E,_.length),m.init(),_.push(m),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ct.setFromProjectionMatrix(St),K=this.localClippingEnabled,H=ot.init(this.clippingPlanes,K),v=zt.get(E,p.length),v.init(),p.push(v),Hn(E,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(B,Z),this.info.render.frame++,H===!0&&ot.beginShadows();let W=m.state.shadowsArray;if(ht.render(W,E,U),H===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1)&&kt.render(v,E),m.setupLights(x._useLegacyLights),U.isArrayCamera){let X=U.cameras;for(let k=0,pt=X.length;k<pt;k++){let yt=X[k];Gc(v,E,yt,yt.viewport)}}else Gc(v,E,U);w!==null&&(qt.updateMultisampleRenderTarget(w),qt.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,U),xt.resetDefaultState(),S=-1,I=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Hn(E,U,W,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ct.intersectsSprite(E)){X&&gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);let yt=J.update(E),Et=E.material;Et.visible&&v.push(E,yt,Et,W,gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ct.intersectsObject(E))){let yt=J.update(E),Et=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),gt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),gt.copy(yt.boundingSphere.center)),gt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(Et)){let Pt=yt.groups;for(let Wt=0,It=Pt.length;Wt<It;Wt++){let Nt=Pt[Wt],we=Et[Nt.materialIndex];we&&we.visible&&v.push(E,yt,we,W,gt.z,Nt)}}else Et.visible&&v.push(E,yt,Et,W,gt.z,null)}}let pt=E.children;for(let yt=0,Et=pt.length;yt<Et;yt++)Hn(pt[yt],U,W,X)}function Gc(E,U,W,X){let k=E.opaque,pt=E.transmissive,yt=E.transparent;m.setupLightsView(W),H===!0&&ot.setGlobalState(x.clippingPlanes,W),pt.length>0&&Ad(k,pt,U,W),X&&wt.viewport(y.copy(X)),k.length>0&&Br(k,U,W),pt.length>0&&Br(pt,U,W),yt.length>0&&Br(yt,U,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ad(E,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let pt=Xt.isWebGL2;dt===null&&(dt=new ci(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?fr:Ei,minFilter:ai,samples:pt?4:0})),x.getDrawingBufferSize(_t),pt?dt.setSize(_t.x,_t.y):dt.setSize(vl(_t.x),vl(_t.y));let yt=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor($),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Et=x.toneMapping;x.toneMapping=Si,Br(E,W,X),qt.updateMultisampleRenderTarget(dt),qt.updateRenderTargetMipmap(dt);let Pt=!1;for(let Wt=0,It=U.length;Wt<It;Wt++){let Nt=U[Wt],we=Nt.object,fn=Nt.geometry,Ue=Nt.material,jn=Nt.group;if(Ue.side===cn&&we.layers.test(X.layers)){let ye=Ue.side;Ue.side=He,Ue.needsUpdate=!0,Vc(we,W,X,fn,Ue,jn),Ue.side=ye,Ue.needsUpdate=!0,Pt=!0}}Pt===!0&&(qt.updateMultisampleRenderTarget(dt),qt.updateRenderTargetMipmap(dt)),x.setRenderTarget(yt),x.setClearColor($,P),x.toneMapping=Et}function Br(E,U,W){let X=U.isScene===!0?U.overrideMaterial:null;for(let k=0,pt=E.length;k<pt;k++){let yt=E[k],Et=yt.object,Pt=yt.geometry,Wt=X===null?yt.material:X,It=yt.group;Et.layers.test(W.layers)&&Vc(Et,U,W,Pt,Wt,It)}}function Vc(E,U,W,X,k,pt){E.onBeforeRender(x,U,W,X,k,pt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,U,W,X,E,pt),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,x.renderBufferDirect(W,U,X,k,E,pt),k.side=wi,k.needsUpdate=!0,x.renderBufferDirect(W,U,X,k,E,pt),k.side=cn):x.renderBufferDirect(W,U,X,k,E,pt),E.onAfterRender(x,U,W,X,k,pt)}function zr(E,U,W){U.isScene!==!0&&(U=ie);let X=Vt.get(E),k=m.state.lights,pt=m.state.shadowsArray,yt=k.state.version,Et=et.getParameters(E,k.state,pt,U,W),Pt=et.getProgramCacheKey(Et),Wt=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?C:Ee).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",G),Wt=new Map,X.programs=Wt);let It=Wt.get(Pt);if(It!==void 0){if(X.currentProgram===It&&X.lightsStateVersion===yt)return Xc(E,Et),It}else Et.uniforms=et.getUniforms(E),E.onBuild(W,Et,x),E.onBeforeCompile(Et,x),It=et.acquireProgram(Et,Pt),Wt.set(Pt,It),X.uniforms=Et.uniforms;let Nt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=ot.uniform),Xc(E,Et),X.needsLights=Pd(E),X.lightsStateVersion=yt,X.needsLights&&(Nt.ambientLightColor.value=k.state.ambient,Nt.lightProbe.value=k.state.probe,Nt.directionalLights.value=k.state.directional,Nt.directionalLightShadows.value=k.state.directionalShadow,Nt.spotLights.value=k.state.spot,Nt.spotLightShadows.value=k.state.spotShadow,Nt.rectAreaLights.value=k.state.rectArea,Nt.ltc_1.value=k.state.rectAreaLTC1,Nt.ltc_2.value=k.state.rectAreaLTC2,Nt.pointLights.value=k.state.point,Nt.pointLightShadows.value=k.state.pointShadow,Nt.hemisphereLights.value=k.state.hemi,Nt.directionalShadowMap.value=k.state.directionalShadowMap,Nt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Nt.spotShadowMap.value=k.state.spotShadowMap,Nt.spotLightMatrix.value=k.state.spotLightMatrix,Nt.spotLightMap.value=k.state.spotLightMap,Nt.pointShadowMap.value=k.state.pointShadowMap,Nt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=It,X.uniformsList=null,It}function Wc(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=As.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Xc(E,U){let W=Vt.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Rd(E,U,W,X,k){U.isScene!==!0&&(U=ie),qt.resetTextureUnits();let pt=U.fog,yt=X.isMeshStandardMaterial?U.environment:null,Et=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Pi,Pt=(X.isMeshStandardMaterial?C:Ee).get(X.envMap||yt),Wt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,It=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!W.morphAttributes.position,we=!!W.morphAttributes.normal,fn=!!W.morphAttributes.color,Ue=Si;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ue=x.toneMapping);let jn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=jn!==void 0?jn.length:0,Ht=Vt.get(X),So=m.state.lights;if(H===!0&&(K===!0||E!==I)){let Tn=E===I&&X.id===S;ot.setState(X,E,Tn)}let xe=!1;X.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==So.state.version||Ht.outputColorSpace!==Et||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ht.instancingMorph===!1&&k.morphTexture!==null||Ht.envMap!==Pt||X.fog===!0&&Ht.fog!==pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ot.numPlanes||Ht.numIntersection!==ot.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==It||Ht.morphTargets!==Nt||Ht.morphNormals!==we||Ht.morphColors!==fn||Ht.toneMapping!==Ue||Xt.isWebGL2===!0&&Ht.morphTargetsCount!==ye)&&(xe=!0):(xe=!0,Ht.__version=X.version);let Ui=Ht.currentProgram;xe===!0&&(Ui=zr(X,U,k));let qc=!1,Js=!1,Eo=!1,Ye=Ui.getUniforms(),Ni=Ht.uniforms;if(wt.useProgram(Ui.program)&&(qc=!0,Js=!0,Eo=!0),X.id!==S&&(S=X.id,Js=!0),qc||I!==E){Ye.setValue(F,"projectionMatrix",E.projectionMatrix),Ye.setValue(F,"viewMatrix",E.matrixWorldInverse);let Tn=Ye.map.cameraPosition;Tn!==void 0&&Tn.setValue(F,gt.setFromMatrixPosition(E.matrixWorld)),Xt.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Js=!0,Eo=!0)}if(k.isSkinnedMesh){Ye.setOptional(F,k,"bindMatrix"),Ye.setOptional(F,k,"bindMatrixInverse");let Tn=k.skeleton;Tn&&(Xt.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ye.setValue(F,"boneTexture",Tn.boneTexture,qt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ye.setOptional(F,k,"batchingTexture"),Ye.setValue(F,"batchingTexture",k._matricesTexture,qt));let wo=W.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&Xt.isWebGL2===!0)&&it.update(k,W,Ui),(Js||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,Ye.setValue(F,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ni.envMap.value=Pt,Ni.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Js&&(Ye.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Cd(Ni,Eo),pt&&X.fog===!0&&tt.refreshFogUniforms(Ni,pt),tt.refreshMaterialUniforms(Ni,X,O,N,dt),As.upload(F,Wc(Ht),Ni,qt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(As.upload(F,Wc(Ht),Ni,qt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ye.setValue(F,"center",k.center),Ye.setValue(F,"modelViewMatrix",k.modelViewMatrix),Ye.setValue(F,"normalMatrix",k.normalMatrix),Ye.setValue(F,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Tn=X.uniformsGroups;for(let To=0,Ld=Tn.length;To<Ld;To++)if(Xt.isWebGL2){let $c=Tn[To];vt.update($c,Ui),vt.bind($c,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Cd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Pd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,W){Vt.get(E.texture).__webglTexture=U,Vt.get(E.depthTexture).__webglTexture=W;let X=Vt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let W=Vt.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){w=E,A=U,T=W;let X=!0,k=null,pt=!1,yt=!1;if(E){let Pt=Vt.get(E);Pt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1):Pt.__webglFramebuffer===void 0?qt.setupRenderTarget(E):Pt.__hasExternalTextures&&qt.rebindTextures(E,Vt.get(E.texture).__webglTexture,Vt.get(E.depthTexture).__webglTexture);let Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);let It=Vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?k=It[U][W]:k=It[U],pt=!0):Xt.isWebGL2&&E.samples>0&&qt.useMultisampledRTT(E)===!1?k=Vt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[W]:k=It,y.copy(E.viewport),R.copy(E.scissor),V=E.scissorTest}else y.copy(j).multiplyScalar(O).floor(),R.copy(nt).multiplyScalar(O).floor(),V=ft;if(wt.bindFramebuffer(F.FRAMEBUFFER,k)&&Xt.drawBuffers&&X&&wt.drawBuffers(E,k),wt.viewport(y),wt.scissor(R),wt.setScissorTest(V),pt){let Pt=Vt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,W)}else if(yt){let Pt=Vt.get(E.texture),Wt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,W||0,Wt)}S=-1},this.readRenderTargetPixels=function(E,U,W,X,k,pt,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){wt.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Pt=E.texture,Wt=Pt.format,It=Pt.type;if(Wt!==Nn&&Mt.convert(Wt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Nt=It===fr&&(bt.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(It!==Ei&&Mt.convert(It)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===Vn&&(Xt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&W>=0&&W<=E.height-k&&F.readPixels(U,W,X,k,Mt.convert(Wt),Mt.convert(It),pt)}finally{let Pt=w!==null?Vt.get(w).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,U,W=0){let X=Math.pow(2,-W),k=Math.floor(U.image.width*X),pt=Math.floor(U.image.height*X);qt.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,E.x,E.y,k,pt),wt.unbindTexture()},this.copyTextureToTexture=function(E,U,W,X=0){let k=U.image.width,pt=U.image.height,yt=Mt.convert(W.format),Et=Mt.convert(W.type);qt.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,E.x,E.y,k,pt,yt,Et,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,yt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,X,E.x,E.y,yt,Et,U.image),X===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,W,X,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=Math.round(E.max.x-E.min.x),yt=Math.round(E.max.y-E.min.y),Et=E.max.z-E.min.z+1,Pt=Mt.convert(X.format),Wt=Mt.convert(X.type),It;if(X.isData3DTexture)qt.setTexture3D(X,0),It=F.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)qt.setTexture2DArray(X,0),It=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let Nt=F.getParameter(F.UNPACK_ROW_LENGTH),we=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ue=F.getParameter(F.UNPACK_SKIP_ROWS),jn=F.getParameter(F.UNPACK_SKIP_IMAGES),ye=W.isCompressedTexture?W.mipmaps[k]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(It,k,U.x,U.y,U.z,pt,yt,Et,Pt,Wt,ye.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(It,k,U.x,U.y,U.z,pt,yt,Et,Pt,ye.data):F.texSubImage3D(It,k,U.x,U.y,U.z,pt,yt,Et,Pt,Wt,ye),F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jn),k===0&&X.generateMipmaps&&F.generateMipmap(It),wt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?qt.setTextureCube(E,0):E.isData3DTexture?qt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?qt.setTexture2DArray(E,0):qt.setTexture2D(E,0),wt.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,wt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===dc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Qa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Nl=class extends mr{};Nl.prototype.isWebGL1Renderer=!0;var gr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xr=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Vu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new L,Fa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Us=class extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,nr=new L,_s=new L,vs=new L,ys=new lt,ir=new lt,ju=new ne,oa=new L,sr=new L,la=new L,_u=new lt,al=new lt,vu=new lt,Ns=class extends Te{constructor(t=new Us){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fl(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Fa(n,3,0,!1)),xs.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ca(oa.set(-.5,-.5,0),vs,a,_s,s,r),ca(sr.set(.5,-.5,0),vs,a,_s,s,r),ca(la.set(.5,.5,0),vs,a,_s,s,r),_u.set(0,0),al.set(1,0),vu.set(1,1);let o=t.ray.intersectTriangle(oa,sr,la,!1,nr);if(o===null&&(ca(sr.set(-.5,.5,0),vs,a,_s,s,r),al.set(0,1),o=t.ray.intersectTriangle(oa,la,sr,!1,nr),o===null))return;let c=t.ray.origin.distanceTo(nr);c<t.near||c>t.far||e.push({distance:c,point:nr.clone(),uv:Xi.getInterpolation(nr,oa,sr,la,_u,al,vu,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ca(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*ys.x-s*ys.y,ir.y=s*ys.x+r*ys.y):ir.copy(ys),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(ju)}var Ol=class extends un{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ze,h=ze,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oa=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new ne,yu=new ne,ha=[],Mu=new hi,Ix=new ne,rr=new Ft,ar=new Ai,Yn=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ix)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Mu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ar.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),yu.multiplyMatrices(n,Ms),rr.matrixWorld=yu,rr.raycast(t,ha);for(let a=0,o=ha.length;a<o;a++){let c=ha[a];c.instanceId=r,c.object=this,e.push(c)}ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ol(new Float32Array(s*this.count),s,this.count,Fu,Vn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bu=new ne,Bl=new Ca,ua=new Ai,da=new L,Ba=class extends Te{constructor(t=new Pe,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;bu.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=l.getX(g);da.fromBufferAttribute(u,m),Su(da,m,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)da.fromBufferAttribute(u,g),Su(da,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Su(i,t,e,n,s,r,a){let o=Bl.distanceSqToPoint(i);if(o<e){let c=new L;Bl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Fs=class extends un{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new lt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,c=new ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zl=class extends vr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var fa=new L,ol=new pc,ll=new pc,cl=new pc,kl=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(fa.subVectors(s[0],s[1]).add(s[0]),l=fa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ol.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),ll.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),cl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ll.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),cl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ol.calc(c),ll.calc(c),cl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Dx(i,t){let e=1-i;return e*e*t}function Ux(i,t){return 2*(1-i)*i*t}function Nx(i,t){return i*i*t}function cr(i,t,e,n){return Dx(i,t)+Ux(i,e)+Nx(i,n)}function Fx(i,t){let e=1-i;return e*e*e*t}function Ox(i,t){let e=1-i;return 3*e*e*i*t}function Bx(i,t){return 3*(1-i)*i*i*t}function zx(i,t){return i*i*i*t}function hr(i,t,e,n,s){return Fx(i,t)+Ox(i,e)+Bx(i,n)+zx(i,s)}var za=class extends Cn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hl=class extends Cn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends Cn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends Cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Cn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends Cn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Eu(o,c.x,l.x,h.x,u.x),Eu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},wu=Object.freeze({__proto__:null,ArcCurve:zl,CatmullRomCurve3:kl,CubicBezierCurve:za,CubicBezierCurve3:Hl,EllipseCurve:vr,LineCurve:ka,LineCurve3:Gl,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:Vl,SplineCurve:Ga}),Wl=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wu[s.type]().fromJSON(s))}return this}},Va=class extends Wl{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ka(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ha(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new za(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new vr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Wa=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new L,h=new lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},vn=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function _(){let M=new L,A=new L,T=0,w=(e-t)/n;for(let S=0;S<=r;S++){let I=[],y=S/r,R=y*(e-t)+t;for(let V=0;V<=s;V++){let $=V/s,P=$*c+o,q=Math.sin(P),N=Math.cos(P);A.x=R*q,A.y=-y*n+m,A.z=R*N,u.push(A.x,A.y,A.z),M.set(q,w,N).normalize(),d.push(M.x,M.y,M.z),f.push($,1-y),I.push(g++)}v.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let y=v[I][S],R=v[I+1][S],V=v[I+1][S+1],$=v[I][S+1];h.push(y,R,$),h.push(R,V,$),T+=6}l.addGroup(p,T,0),p+=T}function x(M){let A=g,T=new lt,w=new L,S=0,I=M===!0?t:e,y=M===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let R=g;for(let V=0;V<=s;V++){let P=V/s*c+o,q=Math.cos(P),N=Math.sin(P);w.x=I*N,w.y=m*y,w.z=I*q,u.push(w.x,w.y,w.z),d.push(0,y,0),T.x=q*.5+.5,T.y=N*.5*y+.5,f.push(T.x,T.y),g++}for(let V=0;V<s;V++){let $=A+V,P=R+V;M===!0?h.push(P,P+1,$):h.push(P+1,P,$),S+=3}l.addGroup(p,S,M===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ri=class i extends vn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xl=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let x=new L,M=new L,A=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],M),f(e[T+2],A),c(x,M,A,_)}function c(_,x,M,A){let T=A+1,w=[];for(let S=0;S<=T;S++){w[S]=[];let I=_.clone().lerp(M,S/T),y=x.clone().lerp(M,S/T),R=T-S;for(let V=0;V<=R;V++)V===0&&S===T?w[S][V]=I:w[S][V]=I.clone().lerp(y,V/R)}for(let S=0;S<T;S++)for(let I=0;I<2*(T-S)-1;I++){let y=Math.floor(I/2);I%2===0?(d(w[S][y+1]),d(w[S+1][y]),d(w[S][y])):(d(w[S][y+1]),d(w[S+1][y+1]),d(w[S+1][y]))}}function l(_){let x=new L;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(_),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let _=new L;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let M=m(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;a.push(M,1-A)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let x=a[_+0],M=a[_+2],A=a[_+4],T=Math.max(x,M,A),w=Math.min(x,M,A);T>.9&&w<.1&&(x<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){let M=_*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let _=new L,x=new L,M=new L,A=new L,T=new lt,w=new lt,S=new lt;for(let I=0,y=0;I<r.length;I+=9,y+=6){_.set(r[I+0],r[I+1],r[I+2]),x.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),T.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),S.set(a[y+4],a[y+5]),A.copy(_).add(x).add(M).divideScalar(3);let R=m(A);v(T,y+0,_,R),v(w,y+2,x,R),v(S,y+4,M,R)}}function v(_,x,M,A){A<0&&_.x===1&&(a[x]=_.x-1),M.x===0&&M.z===0&&(a[x]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var yr=class extends Va{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Va().fromJSON(s))}return this}},kx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Qu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Xx(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Mr(r,a,e,o,c,f,0),a}};function Qu(i,t,e,n,s){let r,a;if(s===n_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Tu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Tu(r,i[r],i[r+1],a);return a&&eo(a,a.next)&&(Sr(a),a=a.next),a}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(eo(e,e.next)||Me(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Jx(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Gx(i,n,s,r):Hx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Sr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Vx(Yi(i),t,e),Mr(i,t,e,n,s,r,2)):a===2&&Wx(i,t,e,n,s,r):Mr(Yi(i),t,e,n,s,r,1);break}}}function Hx(i){let t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Es(s,o,r,c,a,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=ql(f,g,t,e,n),_=ql(v,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Es(o,h,c,u,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Es(o,h,c,u,l,d,M.x,M.y)&&Me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Es(o,h,c,u,l,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Es(o,h,c,u,l,d,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!eo(s,r)&&td(s,n,n.next,r)&&br(s,r)&&br(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Sr(n),Sr(n.next),n=i=r),n=n.next}while(n!==i);return Yi(n)}function Wx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qx(a,o)){let c=ed(a,o);a=Yi(a,a.next),c=Yi(c,c.next),Mr(a,t,e,n,s,r,0),Mr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xx(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Qu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(jx(l));for(s.sort(qx),r=0;r<s.length;r++)e=$x(s[r],e);return e}function qx(i,t){return i.x-t.x}function $x(i,t){let e=Yx(i,t);if(!e)return t;let n=ed(e,i);return Yi(n,n.next),Yi(e,e.next)}function Yx(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Es(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),br(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Zx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Zx(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function Jx(i,t,e,n){let s=i;do s.z===0&&(s.z=ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kx(s)}function Kx(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Es(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!t_(i,t)&&(br(i,t)&&br(t,i)&&e_(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||eo(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function eo(i,t){return i.x===t.x&&i.y===t.y}function td(i,t,e,n){let s=ma(Me(i,t,e)),r=ma(Me(i,t,n)),a=ma(Me(e,n,i)),o=ma(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&pa(i,e,t)||r===0&&pa(i,n,t)||a===0&&pa(e,i,n)||o===0&&pa(e,t,n))}function pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ma(i){return i>0?1:i<0?-1:0}function t_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function br(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function e_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ed(i,t){let e=new $l(i.i,i.x,i.y),n=new $l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Tu(i,t,e,n){let s=new $l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ur=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Au(t),Ru(n,t);let a=t.length;e.forEach(Au);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ru(n,e[c]);let o=kx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Au(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ru(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xa=class i extends Xl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var qa=class i extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new L,g=new lt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let _=p+m,x=_,M=_+n+1,A=_+n+2,T=_+1;o.push(x,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},$a=class i extends Pe{constructor(t=new yr([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;ur.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];ur.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=ur.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],x=_[0]+u,M=_[1]+u,A=_[2]+u;n.push(x,M,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return i_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function i_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ci=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],x=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+M,1-x),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let x=h[p][_+1],M=h[p][_],A=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&f.push(x,M,T),(p!==n-1||c<Math.PI)&&f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var tn=class extends qn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var an=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ga(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function s_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends Os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,o=2*e-n;break;case Ch:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,c=2*n-e;break;case Ch:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+_*a[l+A]+x*a[c+A]+M*a[u+A];return r}},Zl=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Jl=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _a:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&s_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=va;var Zi=class extends Fn{};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=_a;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends Fn{};Kl.prototype.ValueTypeName="color";var jl=class extends Fn{};jl.prototype.ValueTypeName="number";var Ql=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Xn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Er=class extends Fn{InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.DefaultInterpolation=va;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Fn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=_a;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends Fn{};tc.prototype.ValueTypeName="vector";var ec=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},r_=new ec,nc=class{constructor(t){this.manager=t!==void 0?t:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},wr=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hl=new ne,Cu=new L,Pu=new L,Tr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ic=class extends Tr{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ea*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ya=class extends Bs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ic}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lu=new ne,or=new L,ul=new L,sc=class extends Tr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),ul.copy(n.position),ul.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ul),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu)}},Za=class extends Bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rc=class extends Tr{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var mc="\\[\\]\\.:\\/",a_=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",o_="[^"+mc.replace("\\.","")+"]",l_=/((?:WC+[\/:])*)/.source.replace("WC",gc),c_=/(WCOD+)?/.source.replace("WCOD",o_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),u_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),d_=new RegExp("^"+l_+c_+h_+u_+"$"),f_=["material","materials","bones","map"],ac=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a_,"")}static parseTrackName(t){let e=d_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);f_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=ac;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);var fe=i=>-840+i*140;function no(i,t){return t===11&&i>=6?"port":i<=2?"farm":i>=9?"industrial":i>=4&&i<=7&&t>=3&&t<=7?"downtown":i===3&&t===2||i===8&&t===6||i===5&&t===9?"park":"residential"}var Ki=[{id:"garagem",name:"Garagem Drizzie",bx:4,bz:9,side:"n",kind:"garage",color:3108830},{id:"cd",name:"Centro de Distribui\xE7\xE3o",bx:5,bz:1,side:"s",kind:"warehouse",color:14721056},{id:"porto",name:"Porto de Drizzie",bx:8,bz:11,side:"n",kind:"port",color:2068400},{id:"fazenda",name:"Fazenda Boa Vista",bx:1,bz:3,side:"e",kind:"farm",color:11549230},{id:"silo",name:"Silo Agr\xEDcola",bx:1,bz:8,side:"e",kind:"silo",color:13152874},{id:"serraria",name:"Serraria Pinheiro",bx:0,bz:1,side:"e",kind:"sawmill",color:8016432},{id:"refinaria",name:"Refinaria Petrosul",bx:11,bz:2,side:"w",kind:"refinery",color:14211288},{id:"siderurgica",name:"Sider\xFArgica A\xE7o Forte",bx:10,bz:6,side:"w",kind:"steel",color:9059114},{id:"mercado",name:"Mercado Central",bx:6,bz:4,side:"w",kind:"market",color:3055186},{id:"hospital",name:"Hospital Municipal",bx:7,bz:6,side:"e",kind:"hospital",color:15790320},{id:"obra",name:"Canteiro de Obras",bx:6,bz:8,side:"w",kind:"construction",color:15774720},{id:"eolica",name:"Parque E\xF3lico",bx:2,bz:11,side:"n",kind:"wind",color:15658734},{id:"fabrica",name:"F\xE1brica de M\xF3veis",bx:9,bz:9,side:"w",kind:"factory",color:10119999},{id:"posto",name:"Posto Rodovi\xE1rio",bx:3,bz:6,side:"e",kind:"fuel",color:13639712},{id:"pedreira",name:"Pedreira Rocha Viva",bx:11,bz:10,side:"w",kind:"quarry",color:10261124}],Li=Object.fromEntries(Ki.map(i=>[i.id,i])),Pn=[{id:"urbano",name:"Urbano 4.5",hp:160,cap:5,mass:4.5,level:1,price:0,rigid:!0,axles:2,color:15921906,vmax:100,desc:"VUC leve, \xE1gil na cidade."},{id:"toco",name:"Toco 11-240",hp:240,cap:12,mass:7.5,level:3,price:15e3,rigid:!0,axles:2,color:3108830,vmax:100,desc:"Caminh\xE3o m\xE9dio de carroceria ba\xFA."},{id:"cavalo",cfg:"4x2",name:"Cavalo 360",hp:360,cap:30,mass:8,level:6,price:6e4,rigid:!1,axles:2,color:13777450,vmax:110,desc:"Cavalo mec\xE2nico 4x2 para carretas."},{id:"rodo",cfg:"6x2",name:"Rodomax 480",hp:480,cap:45,mass:9,level:10,price:14e4,rigid:!1,axles:3,color:2072174,vmax:110,desc:"Cavalo 6x2 para cargas pesadas."},{id:"titan",cfg:"6x4",name:"Titan 620",hp:620,cap:65,mass:10,level:15,price:28e4,rigid:!1,axles:3,color:2238513,vmax:105,desc:"Cavalo 6x4 de alta tra\xE7\xE3o."},{id:"colosso",cfg:"8x4",name:"Colosso 750 8x4",hp:750,cap:90,mass:12,level:20,price:5e5,rigid:!1,axles:4,color:15769600,vmax:95,desc:"Gigante para cargas especiais e indivis\xEDveis."}],io=Object.fromEntries(Pn.map(i=>[i.id,i])),Gs=[{id:"encomendas",name:"Encomendas",icon:"\u{1F4E6}",t:1,lvl:1,trailer:"box",rate:1,from:["cd"],to:["mercado","hospital","posto","fabrica","obra"]},{id:"medicamentos",name:"Medicamentos",icon:"\u{1F48A}",t:1.5,lvl:1,trailer:"box",rate:1.35,fragile:!0,from:["cd","porto"],to:["hospital"]},{id:"eletronicos",name:"Eletr\xF4nicos",icon:"\u{1F4FA}",t:2.5,lvl:2,trailer:"box",rate:1.4,fragile:!0,from:["porto"],to:["cd","mercado"]},{id:"hortifruti",name:"Hortifr\xFAti",icon:"\u{1F96C}",t:4,lvl:1,trailer:"box",rate:1.1,from:["fazenda"],to:["mercado","cd"]},{id:"moveis",name:"M\xF3veis",icon:"\u{1F6CB}\uFE0F",t:6,lvl:3,trailer:"box",rate:1.15,fragile:!0,from:["fabrica"],to:["mercado","cd","obra"]},{id:"bebidas",name:"Bebidas",icon:"\u{1F964}",t:9,lvl:3,trailer:"box",rate:1.05,from:["cd"],to:["mercado","posto"]},{id:"racao",name:"Ra\xE7\xE3o Animal",icon:"\u{1F33E}",t:12,lvl:4,trailer:"box",rate:1,from:["silo"],to:["fazenda"]},{id:"trator",name:"Trator Agr\xEDcola",icon:"\u{1F69C}",t:14,lvl:6,trailer:"lowboy",model:"tractor",rate:1.5,from:["porto"],to:["fazenda","silo"]},{id:"madeira",name:"Toras de Madeira",icon:"\u{1FAB5}",t:18,lvl:6,trailer:"flatbed",model:"logs",rate:1.05,from:["serraria"],to:["fabrica","obra","porto"]},{id:"conteiner",name:"Cont\xEAiner 40 p\xE9s",icon:"\u{1F6A2}",t:26,lvl:7,trailer:"flatbed",model:"container",rate:1.15,from:["porto"],to:["cd","siderurgica","fabrica"]},{id:"graos",name:"Soja a Granel",icon:"\u{1FAD8}",t:28,lvl:8,trailer:"bulk",rate:1,from:["fazenda","silo"],to:["porto"]},{id:"combustivel",name:"Combust\xEDvel",icon:"\u26FD",t:30,lvl:9,trailer:"tank",rate:1.45,hazard:!0,from:["refinaria"],to:["posto","porto","fazenda"]},{id:"cimento",name:"Cimento",icon:"\u{1F3D7}\uFE0F",t:32,lvl:10,trailer:"tank",model:"silo",rate:1.05,from:["pedreira"],to:["obra"]},{id:"bobinas",name:"Bobinas de A\xE7o",icon:"\u{1F9F2}",t:36,lvl:11,trailer:"flatbed",model:"coils",rate:1.2,from:["siderurgica"],to:["porto","fabrica"]},{id:"vigas",name:"Vigas de A\xE7o",icon:"\u{1F3E2}",t:42,lvl:13,trailer:"flatbed",model:"beams",rate:1.25,from:["siderurgica"],to:["obra"]},{id:"escavadeira",name:"Escavadeira",icon:"\u{1F6A7}",t:48,lvl:15,trailer:"lowboy",model:"excavator",rate:1.55,from:["porto"],to:["pedreira","obra"]},{id:"transformador",name:"Transformador",icon:"\u26A1",t:56,lvl:18,trailer:"lowboy",model:"transformer",rate:1.7,fragile:!0,from:["siderurgica","porto"],to:["refinaria","eolica"]},{id:"pa_eolica",name:"P\xE1 E\xF3lica",icon:"\u{1F300}",t:62,lvl:20,trailer:"lowboy",model:"blade",rate:1.9,fragile:!0,from:["porto"],to:["eolica"]},{id:"prensa",name:"Prensa Industrial",icon:"\u{1F3ED}",t:85,lvl:24,trailer:"lowboy",model:"press",rate:2.1,from:["porto"],to:["siderurgica","fabrica"]}],yn=Object.fromEntries(Gs.map(i=>[i.id,i])),Ar=i=>200+180*(i-1);function nd(i){return i?i.trailer==="lowboy"?9:i.trailer==="tank"?7:6.5:0}var Ve=1024,id=4,xc={};function sd(i,t){Ve=i,id=t}function Zn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function se(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function on(i,t,e,n,s,r=!0){let a=i.getImageData(0,0,t,e),o=a.data,c=Zn(s);for(let l=0;l<o.length;l+=4){let h=(c()-.5)*n;r?(o[l]+=h,o[l+1]+=h,o[l+2]+=h):(o[l]+=h,o[l+1]+=(c()-.5)*n,o[l+2]+=(c()-.5)*n)}i.putImageData(a,0,0)}function Vs(i,t,e,n,s,r,a){let o=Zn(a);for(let c=0;c<n;c++){i.fillStyle=s[o()*s.length|0],i.globalAlpha=.25+o()*.5;let l=.5+o()*r;i.beginPath(),i.arc(o()*t,o()*e,l,0,Math.PI*2),i.fill()}i.globalAlpha=1}function re(i,t=!0){let e=new Fs(i);return e.colorSpace=je,e.anisotropy=id,e.generateMipmaps=!0,e.minFilter=ai,e.magFilter=Ke,t&&(e.wrapS=e.wrapT=dr),e}function le(i,t){return xc[i]||(xc[i]=t()),xc[i]}function _c(i,t,e,n="#3b3d40"){i.fillStyle=n,i.fillRect(0,0,t,t),Vs(i,t,t,t*6,["#5a5c60","#2a2b2d","#6b6b6b","#232323"],t/512,e),on(i,t,t,22,e+1)}var Tt={asphalt:()=>le("asphalt",()=>{let i=Ve/2,[t,e]=se(i,i);return _c(e,i,11),re(t)}),road:()=>le("road",()=>{let i=Ve,[t,e]=se(i,i);_c(e,i,21);let n=i/20;e.fillStyle="rgba(20,20,20,0.18)";for(let a of[1.6,3.4,6.6,8.4])e.fillRect((10+a)*n-n*.6,0,n*1.2,i),e.fillRect((10-a)*n-n*.6,0,n*1.2,i);let s=(a,o,c,l)=>{e.fillStyle=a,l?e.fillRect(o*n-c*n/2,i*.1,c*n,i*l):e.fillRect(o*n-c*n/2,0,c*n,i)};s("#e8b923",9.8,.15),s("#e8b923",10.2,.15),s("#f2f2f2",5,.15,.45),s("#f2f2f2",15,.15,.45),s("#f2f2f2",.5,.18),s("#f2f2f2",19.5,.18);let r=Zn(5);e.globalCompositeOperation="source-atop";for(let a=0;a<i*3;a++)e.fillStyle="rgba(60,60,62,0.35)",e.fillRect(r()*i,r()*i,1+r()*3,1+r()*3);return e.globalCompositeOperation="source-over",re(t)}),intersection:()=>le("intersection",()=>{let i=Ve,[t,e]=se(i,i);_c(e,i,31);let n=i/20;e.fillStyle="rgba(240,240,240,0.92)";for(let s=0;s<8;s++){let r=(1.5+s*2.2)*n;e.fillRect(r,.3*n,1.1*n,2.6*n),e.fillRect(r,i-2.9*n,1.1*n,2.6*n),e.fillRect(.3*n,r,2.6*n,1.1*n),e.fillRect(i-2.9*n,r,2.6*n,1.1*n)}return on(e,i,i,10,32),re(t,!1)}),concrete:()=>le("concrete",()=>{let i=Ve/2,[t,e]=se(i,i);e.fillStyle="#a9a69f",e.fillRect(0,0,i,i),on(e,i,i,26,41),Vs(e,i,i,i*2,["#8f8c86","#bdbab3"],i/400,42),e.strokeStyle="rgba(70,68,64,0.55)",e.lineWidth=Math.max(1,i/256);for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*i/4,0),e.lineTo(n*i/4,i),e.stroke(),e.beginPath(),e.moveTo(0,n*i/4),e.lineTo(i,n*i/4),e.stroke();return re(t)}),lot:()=>le("lot",()=>{let i=Ve/2,[t,e]=se(i,i);e.fillStyle="#8e8b85",e.fillRect(0,0,i,i),on(e,i,i,30,51),Vs(e,i,i,i,["#6f6c66","#a5a29c","#5d5a55"],i/200,52),e.strokeStyle="rgba(50,48,45,0.5)",e.lineWidth=2,e.strokeRect(1,1,i-2,i-2);let n=Zn(53);for(let s=0;s<6;s++){let r=n()*i,a=n()*i,o=e.createRadialGradient(r,a,0,r,a,i/10);o.addColorStop(0,"rgba(30,30,30,0.25)"),o.addColorStop(1,"rgba(30,30,30,0)"),e.fillStyle=o,e.fillRect(0,0,i,i)}return re(t)}),grass:()=>le("grass",()=>{let i=Ve/2,[t,e]=se(i,i);e.fillStyle="#4f7a32",e.fillRect(0,0,i,i);let n=Zn(61);for(let s=0;s<40;s++){let r=n()*i,a=n()*i,o=i*(.05+n()*.15),c=e.createRadialGradient(r,a,0,r,a,o),l=n()>.5?"96,140,58":"62,96,38";c.addColorStop(0,`rgba(${l},0.45)`),c.addColorStop(1,`rgba(${l},0)`),e.fillStyle=c,e.fillRect(0,0,i,i)}e.lineWidth=1;for(let s=0;s<i*14;s++){let r=n()*i,a=n()*i;e.strokeStyle=n()>.5?"rgba(120,170,70,0.5)":"rgba(40,70,25,0.5)",e.beginPath(),e.moveTo(r,a),e.lineTo(r+(n()-.5)*3,a-2-n()*4),e.stroke()}return on(e,i,i,14,62,!1),re(t)}),field:()=>le("field",()=>{let i=Ve/2,[t,e]=se(i,i);e.fillStyle="#7a5a36",e.fillRect(0,0,i,i),on(e,i,i,30,71);let n=16;for(let s=0;s<n;s++){let r=(s+.5)*(i/n);e.fillStyle="#5d8a2a",e.fillRect(0,r-i/n/4,i,i/n/2)}return Vs(e,i,i,i*4,["#7fae3a","#4a7020","#8fbf4a"],2,72),re(t)}),sand:()=>le("sand",()=>{let i=Ve/4,[t,e]=se(i,i);return e.fillStyle="#d6c49a",e.fillRect(0,0,i,i),on(e,i,i,26,81),re(t)}),water:()=>le("water",()=>{let i=Ve/2,[t,e]=se(i,i);e.fillStyle="#1d5f7d",e.fillRect(0,0,i,i);let n=Zn(91);for(let s=0;s<900;s++){e.strokeStyle=n()>.5?"rgba(170,220,240,0.22)":"rgba(10,40,60,0.25)",e.lineWidth=1+n()*2;let r=n()*i,a=n()*i,o=6+n()*20;e.beginPath(),e.moveTo(r,a),e.quadraticCurveTo(r+o/2,a-3,r+o,a),e.stroke()}return re(t)}),roof:()=>le("roof",()=>{let i=Ve/4,[t,e]=se(i,i);return e.fillStyle="#5c5a57",e.fillRect(0,0,i,i),on(e,i,i,34,101),Vs(e,i,i,i*3,["#77746f","#44423f"],1.5,102),re(t)}),tiles:()=>le("tiles",()=>{let i=Ve/4,[t,e]=se(i,i);e.fillStyle="#9b3d2a",e.fillRect(0,0,i,i);let n=8;for(let s=0;s<n;s++)for(let r=0;r<n;r++){let a=e.createLinearGradient(0,s*i/n,0,(s+1)*i/n);a.addColorStop(0,"#b4513a"),a.addColorStop(1,"#7a2c1d"),e.fillStyle=a,e.fillRect((r+s%2*.5)*i/n,s*i/n,i/n-1,i/n-1)}return on(e,i,i,16,103),re(t)}),metal:()=>le("metal",()=>{let i=Ve/2,[t,e]=se(i,i),n=32;for(let s=0;s<n;s++){let r=e.createLinearGradient(s*i/n,0,(s+1)*i/n,0);r.addColorStop(0,"#9aa1a6"),r.addColorStop(.5,"#d9dee1"),r.addColorStop(1,"#868c90"),e.fillStyle=r,e.fillRect(s*i/n,0,i/n,i)}return on(e,i,i,14,111),re(t)}),tire:()=>le("tire",()=>{let[t,e]=se(256,256);e.fillStyle="#1b1b1c",e.fillRect(0,0,256,256),e.fillStyle="#2c2c2e";for(let n=0;n<24;n++)e.save(),e.translate(n*256/24,0),e.fillRect(0,0,256/48,256),e.restore();return on(e,256,256,10,121),re(t)}),rim:()=>le("rim",()=>{let[t,e]=se(256,256);e.fillStyle="#151515",e.fillRect(0,0,256,256);let n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256*.36);n.addColorStop(0,"#f0f0f0"),n.addColorStop(.6,"#b8bcc0"),n.addColorStop(1,"#7c8084"),e.fillStyle=n,e.beginPath(),e.arc(256/2,256/2,256*.36,0,Math.PI*2),e.fill(),e.fillStyle="#444";for(let s=0;s<10;s++){let r=s/10*Math.PI*2;e.beginPath(),e.arc(256/2+Math.cos(r)*256*.2,256/2+Math.sin(r)*256*.2,256*.025,0,7),e.fill()}return e.fillStyle="#555",e.beginPath(),e.arc(256/2,256/2,256*.09,0,7),e.fill(),re(t,!1)}),facade:i=>le("facade"+i,()=>{let t=Ve,[e,n]=se(t,t),[s,r]=se(t/2,t/2);r.fillStyle="#000",r.fillRect(0,0,t/2,t/2);let a=Zn(200+i),o=[{wall:"#c9d0d6",win:["#3a5a78","#4a7090","#2d4a66"],frame:"#7f8a93",mw:.78,mh:.62},{wall:"#9c4f39",win:["#24323e","#3b4d5c","#2f3d48"],frame:"#ddd4c2",mw:.42,mh:.5},{wall:"#d9d2c3",win:["#2b3a47","#3f5566","#33414d"],frame:"#948c7b",mw:.5,mh:.48},{wall:"#66757f",win:["#1d2d3c","#2c4a64","#3a5f7d"],frame:"#3a4954",mw:.9,mh:.8}][i];if(n.fillStyle=o.wall,n.fillRect(0,0,t,t),on(n,t,t,18,210+i),i===1){n.strokeStyle="rgba(70,30,20,0.4)",n.lineWidth=1;let d=t/96;for(let f=0;f<96;f++){n.beginPath(),n.moveTo(0,f*d),n.lineTo(t,f*d),n.stroke();for(let g=0;g<32;g++){let v=(g+f%2*.5)*t/32;n.beginPath(),n.moveTo(v,f*d),n.lineTo(v,(f+1)*d),n.stroke()}}}let c=4,l=t/c,h=["#ffd38a","#ffe7b0","#fff4d6","#cfe3ff","#ffc070"];for(let d=0;d<c;d++){for(let f=0;f<c;f++){let g=f*l,v=d*l,m=l*o.mw,p=l*o.mh,_=g+(l-m)/2,x=v+(l-p)/2-l*.04;n.fillStyle=o.frame,n.fillRect(_-3,x-3,m+6,p+6);let M=n.createLinearGradient(_,x,_+m,x+p),A=o.win[a()*o.win.length|0];if(M.addColorStop(0,A),M.addColorStop(.5,"#8fa8bc"),M.addColorStop(.56,A),M.addColorStop(1,"#141d26"),n.fillStyle=M,n.fillRect(_,x,m,p),n.fillStyle=o.frame,n.fillRect(_+m/2-1.5,x,3,p),i!==3&&n.fillRect(_,x+p*.35,m,2),(i===1||i===2)&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(_-4,x+p+3,m+8,4)),a()<.42){let w=r.createLinearGradient(0,x*.5,0,(x+p)*.5),S=h[a()*h.length|0];w.addColorStop(0,S),w.addColorStop(1,"#6b4a20"),r.fillStyle=w,r.fillRect(_*.5,x*.5,m*.5,p*.5)}}(i===0||i===3)&&(n.fillStyle=o.frame,n.fillRect(0,d*l+l-4,t,4))}for(let d=0;d<40;d++){let f=a()*t,g=t*(.05+a()*.2),v=a()*t,m=n.createLinearGradient(0,v,0,v+g);m.addColorStop(0,"rgba(40,35,30,0.12)"),m.addColorStop(1,"rgba(40,35,30,0)"),n.fillStyle=m,n.fillRect(f,v,2+a()*6,g)}let u=re(e);return u.userData.emissive=re(s),u}),warehouse:()=>le("warehouse",()=>{let i=Ve/2,[t,e]=se(i,i),n=40;for(let s=0;s<n;s++){let r=e.createLinearGradient(s*i/n,0,(s+1)*i/n,0);r.addColorStop(0,"#b7bcc0"),r.addColorStop(.5,"#e4e7e9"),r.addColorStop(1,"#a6abaf"),e.fillStyle=r,e.fillRect(s*i/n,0,i/n,i)}return e.fillStyle="rgba(60,70,80,0.35)",e.fillRect(0,i*.9,i,i*.1),on(e,i,i,12,301),re(t)}),container:i=>le("container"+i,()=>{let[e,n]=se(256,256),s=new mt(i),r=24;for(let a=0;a<r;a++){let o=n.createLinearGradient(a*256/r,0,(a+1)*256/r,0);o.addColorStop(0,"#"+s.clone().multiplyScalar(.7).getHexString()),o.addColorStop(.5,"#"+s.clone().multiplyScalar(1.1).getHexString()),o.addColorStop(1,"#"+s.clone().multiplyScalar(.6).getHexString()),n.fillStyle=o,n.fillRect(a*256/r,0,256/r,256)}return n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=6,n.strokeRect(3,3,250,250),on(n,256,256,14,311),re(e)}),cargoBox:(i,t)=>le("cbox"+i+t,()=>{let e=Ve,n=Ve/4,[s,r]=se(e,n),a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#fbfbfb"),a.addColorStop(1,"#d7dadd"),r.fillStyle=a,r.fillRect(0,0,e,n),r.fillStyle=i,r.fillRect(0,n*.78,e,n*.08),r.beginPath(),r.moveTo(e*.05,n*.7),r.lineTo(e*.15,n*.2),r.lineTo(e*.22,n*.2),r.lineTo(e*.12,n*.7),r.fill(),r.font=`900 ${n*.34}px sans-serif`,r.textBaseline="middle",r.fillText(t,e*.25,n*.42),r.font=`600 ${n*.1}px sans-serif`,r.fillStyle="#555",r.fillText("TRANSPORTES & LOG\xCDSTICA",e*.255,n*.66),r.strokeStyle="rgba(0,0,0,0.15)",r.lineWidth=2;for(let o=1;o<12;o++)r.beginPath(),r.moveTo(o*e/12,0),r.lineTo(o*e/12,n),r.stroke();return re(s,!1)}),sign:(i,t,e)=>le("sign"+i+t,()=>{let[r,a]=se(1024,192);a.fillStyle=t,a.fillRect(0,0,1024,192),a.strokeStyle="rgba(255,255,255,0.8)",a.lineWidth=8,a.strokeRect(10,10,1004,172),a.fillStyle=e;let o=96;for(a.font=`800 ${o}px sans-serif`;a.measureText(i).width>944&&o>30;)o-=4,a.font=`800 ${o}px sans-serif`;return a.textAlign="center",a.textBaseline="middle",a.fillText(i,1024/2,192/2+4),re(r,!1)}),paint:()=>le("paint",()=>{let[t,e]=se(512,512),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#eeeeee"),n.addColorStop(1,"#c4c4c4"),e.fillStyle=n,e.fillRect(0,0,512,512);let s=Zn(777),r=e.createLinearGradient(0,512,0,512*.35);r.addColorStop(0,"rgba(110,92,70,0.55)"),r.addColorStop(1,"rgba(110,92,70,0)"),e.fillStyle=r,e.fillRect(0,0,512,512);for(let a=0;a<2600;a++){let o=512-Math.pow(s(),1.8)*512;e.fillStyle=`rgba(${90+s()*40},${75+s()*30},${55+s()*25},${.06+s()*.16})`,e.beginPath(),e.arc(s()*512,o,.5+s()*3.5,0,7),e.fill()}for(let a=0;a<70;a++){let o=s()*512,c=s()*512*.4,l=512*(.15+s()*.5),h=e.createLinearGradient(0,c,0,c+l);h.addColorStop(0,"rgba(80,70,55,0)"),h.addColorStop(.5,"rgba(80,70,55,0.14)"),h.addColorStop(1,"rgba(80,70,55,0)"),e.fillStyle=h,e.fillRect(o,c,1+s()*3,l)}return on(e,512,512,8,778),re(t)}),backdrop:()=>le("backdrop",()=>{let[e,n]=se(1024,512),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#08121f"),s.addColorStop(1,"#0e2a40"),n.fillStyle=s,n.fillRect(0,0,1024,512);let r=Zn(901),a=64;for(let o=0;o<512/a+1;o++)for(let c=0;c<1024/a+1;c++){let l=c*a+o%2*a/2,h=o*a*.87;n.fillStyle=`rgba(${40+r()*30},${90+r()*60},${130+r()*70},${.05+r()*.12})`,n.beginPath(),n.moveTo(l,h),n.lineTo(l+a/2,h+a*.87),n.lineTo(l-a/2,h+a*.87),n.closePath(),n.fill(),n.strokeStyle="rgba(120,200,255,0.06)",n.stroke()}return re(e,!1)}),glow:()=>le("glow",()=>{let[t,e]=se(128,128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.55)"),n.addColorStop(1,"rgba(255,220,150,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),re(t,!1)}),beam:()=>le("beam",()=>{let[e,n]=se(128,256),s=n.createRadialGradient(128/2,256,0,128/2,256,256);return s.addColorStop(0,"rgba(255,245,220,0.85)"),s.addColorStop(.5,"rgba(255,240,210,0.35)"),s.addColorStop(1,"rgba(255,240,210,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(128*.42,256),n.lineTo(0,0),n.lineTo(128,0),n.lineTo(128*.58,256),n.fill(),re(e,!1)}),grill:()=>le("grill",()=>{let[t,e]=se(256,256);e.fillStyle="#0c0c0c",e.fillRect(0,0,256,256);for(let n=0;n<9;n++){let s=12+n*27,r=e.createLinearGradient(0,s,0,s+14);r.addColorStop(0,"#f2f2f2"),r.addColorStop(1,"#7a7a7a"),e.fillStyle=r,e.fillRect(8,s,240,14)}return re(t,!1)}),blob:()=>le("blob",()=>{let[t,e]=se(128,128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(0,0,0,0.65)"),n.addColorStop(.6,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),re(t,!1)}),zone:()=>le("zone",()=>{let[t,e]=se(256,256);return e.clearRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,1)",e.lineWidth=14,e.strokeRect(7,7,242,242),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(14,14,228,228),re(t,!1)}),bark:()=>le("bark",()=>{let[t,e]=se(256,256);e.fillStyle="#6b4a2b",e.fillRect(0,0,256,256);let n=Zn(401);for(let s=0;s<120;s++){e.strokeStyle=n()>.5?"rgba(40,25,12,0.6)":"rgba(140,100,60,0.4)",e.lineWidth=1+n()*3;let r=n()*256;e.beginPath(),e.moveTo(r,0),e.lineTo(r+(n()-.5)*12,256),e.stroke()}return re(t)}),foliage:()=>le("foliage",()=>{let[t,e]=se(256,256);return e.fillStyle="#3d6b2a",e.fillRect(0,0,256,256),Vs(e,256,256,2200,["#5b8f3a","#2c5220","#7aaa4a","#24451a"],5,411),re(t)})};var so=new L,ro=new L,rd=new Dt,ao=new mt,Ot=class{constructor(t=!1){this.pos=[],this.nor=[],this.uv=[],this.col=t?[]:null,this.idx=[]}get count(){return this.pos.length/3}_color(t){this.col&&(ao.set(t!=null?t:16777215),this.col.push(ao.r,ao.g,ao.b))}quad(t,e,n,s,r,a,o){let c=this.count;for(let l of[t,e,n,s])this.pos.push(l[0],l[1],l[2]),this.nor.push(r[0],r[1],r[2]),this._color(o);this.uv.push(...a),this.idx.push(c,c+1,c+2,c,c+2,c+3)}ground(t,e,n,s,r,a,o){let c=t/a,l=n/a,h=-s/a,u=-e/a;this.quad([t,r,s],[n,r,s],[n,r,e],[t,r,e],[0,1,0],[c,h,l,h,l,u,c,u],o)}walls(t,e,n,s,r,a,o,c,l=0,h){let d=(r-e)/c,f=(s-t)/o,g=(a-n)/o;this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],[0,0,1],[l,0,l+f,0,l+f,d,l,d],h),this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],[0,0,-1],[l,0,l+f,0,l+f,d,l,d],h),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],[1,0,0],[l,0,l+g,0,l+g,d,l,d],h),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],[-1,0,0],[l,0,l+g,0,l+g,d,l,d],h)}top(t,e,n,s,r,a,o){this.ground(t,e,n,s,r,a,o)}box(t,e,n,s,r,a,o,c){this.walls(t,e,n,s,r,a,o,o,0,c),this.top(t,n,s,a,r,o,c)}add(t,e,n,s=1){let r=t.attributes.position,a=t.attributes.normal,o=t.attributes.uv,c=this.count;rd.getNormalMatrix(e);for(let l=0;l<r.count;l++)so.fromBufferAttribute(r,l).applyMatrix4(e),this.pos.push(so.x,so.y,so.z),ro.fromBufferAttribute(a,l).applyMatrix3(rd).normalize(),this.nor.push(ro.x,ro.y,ro.z),o?this.uv.push(o.getX(l)*s,o.getY(l)*s):this.uv.push(0,0),this._color(n);if(t.index){let l=t.index.array;for(let h=0;h<l.length;h++)this.idx.push(l[h]+c)}else for(let l=0;l<r.count;l++)this.idx.push(c+l)}geometry(){let t=new Pe;t.setAttribute("position",new Kt(this.pos,3)),t.setAttribute("normal",new Kt(this.nor,3)),t.setAttribute("uv",new Kt(this.uv,2)),this.col&&t.setAttribute("color",new Kt(this.col,3));let e=this.count>65535;return t.setIndex(e?new Is(this.idx,1):new Ls(this.idx,1)),t.computeBoundingSphere(),t}mesh(t,e={}){if(!this.count)return null;let n=new Ft(this.geometry(),t);return n.castShadow=!!e.cast,n.receiveShadow=e.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}},p_=new ne,ad=new Xn,m_=new xn,g_=new L,x_=new L;function Bt(i,t,e,n=0,s=0,r=0,a=1,o=1,c=1){return ad.setFromEuler(m_.set(n,s,r)),p_.compose(x_.set(i,t,e),ad,g_.set(a,o,c)).clone()}var Ii={},Zt={box:()=>Ii.box||(Ii.box=new _n(1,1,1)),cyl:(i=16)=>Ii["cyl"+i]||(Ii["cyl"+i]=new vn(.5,.5,1,i)),cone:(i=12)=>Ii["cone"+i]||(Ii["cone"+i]=new Ri(.5,1,i)),sphere:()=>Ii.sph||(Ii.sph=new Ci(.5,16,10))};var ce=20/2;function __(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var oo=class{constructor(t,e){this.scene=t,this.q=e,this.colliders=[],this.cell=70,this.grid=new Map,this.depots={},this.animated=[],this.build()}addCollider(t,e,n,s){let r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s)};this.colliders.push(r);let a=this.cell;for(let o=Math.floor(r.x0/a);o<=Math.floor(r.x1/a);o++)for(let c=Math.floor(r.z0/a);c<=Math.floor(r.z1/a);c++){let l=o*1e3+c;this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}resolveCircle(t,e,n){let s=0;n.x=0,n.z=0;let r=840+ce-e;t.x<-r&&(n.x+=-r-t.x,s=Math.max(s,-r-t.x)),t.x>r&&(n.x+=r-t.x,s=Math.max(s,t.x-r)),t.z<-r&&(n.z+=-r-t.z,s=Math.max(s,-r-t.z)),t.z>r&&(n.z+=r-t.z,s=Math.max(s,t.z-r));let a=this.cell,o=Math.floor(t.x/a),c=Math.floor(t.z/a);for(let l=o-1;l<=o+1;l++)for(let h=c-1;h<=c+1;h++){let u=this.grid.get(l*1e3+h);if(u)for(let d of u){let f=t.x+n.x,g=t.z+n.z,v=Math.max(d.x0,Math.min(f,d.x1)),m=Math.max(d.z0,Math.min(g,d.z1)),p=f-v,_=g-m,x=p*p+_*_;if(x<e*e)if(x>1e-6){let M=Math.sqrt(x),A=e-M;n.x+=p/M*A,n.z+=_/M*A,s=Math.max(s,A)}else{let M=f-d.x0,A=d.x1-f,T=g-d.z0,w=d.z1-g,S=Math.min(M,A,T,w);S===M?n.x-=M+e:S===A?n.x+=A+e:S===T?n.z-=T+e:n.z+=w+e,s=Math.max(s,S+e)}}}return s}build(){let t=this.q,e=(u,d={})=>new an(An({map:u},d)),n={grass:e(Tt.grass()),road:e(Tt.road()),inter:e(Tt.intersection()),concrete:e(Tt.concrete()),lot:e(Tt.lot()),field:e(Tt.field()),sand:e(Tt.sand()),roof:e(Tt.roof()),tiles:e(Tt.tiles()),wh:e(Tt.warehouse(),{vertexColors:!0}),f:[0,1,2,3].map(u=>new tn({map:Tt.facade(u),emissiveMap:Tt.facade(u).userData.emissive,emissive:16777215,emissiveIntensity:0,shininess:u===0||u===3?60:8,specular:u===0||u===3?5592405:1118481})),flat:new an({vertexColors:!0}),metal:new tn({map:Tt.metal(),vertexColors:!0,shininess:50,specular:6710886}),cont:e(Tt.container(14540253),{vertexColors:!0}),bark:e(Tt.bark()),leaf:e(Tt.foliage())};this.M=n;let s={grass:new Ot,road:new Ot,inter:new Ot,concrete:new Ot,lot:new Ot,field:new Ot,sand:new Ot,roof:new Ot,tiles:new Ot,wh:new Ot(!0),f:[new Ot,new Ot,new Ot,new Ot],flat:new Ot(!0),metal:new Ot(!0),cont:new Ot(!0)};this.B=s,this.trees=[],this.lamps=[];let r=__(1234);this.r=r;let a=2600;s.grass.ground(-a,-a,a,880,-.02,14),s.sand.ground(-a,880,a,915,-.02,10);for(let u=0;u<=12;u++){let d=fe(u);for(let f=0;f<12;f++){let g=fe(f)+ce,v=fe(f+1)-ce;s.road.quad([d-ce,.02,v],[d+ce,.02,v],[d+ce,.02,g],[d-ce,.02,g],[0,1,0],[0,0,1,0,1,(v-g)/20,0,(v-g)/20]),s.road.quad([g,.02,d+ce],[v,.02,d+ce],[v,.02,d-ce],[g,.02,d-ce],[0,1,0],[0,0,0,(v-g)/20,1,(v-g)/20,1,0])}for(let f=0;f<=12;f++){let g=fe(f);s.inter.quad([d-ce,.025,g+ce],[d+ce,.025,g+ce],[d+ce,.025,g-ce],[d-ce,.025,g-ce],[0,1,0],[0,0,1,0,1,1,0,1])}}let o=840+ce;s.concrete.walls(-o-3,-.1,-o-3,o+3,.25,o+3,4,4);let c={};for(let u of Ki)c[u.bx+","+u.bz]=u;for(let u=0;u<12;u++)for(let d=0;d<12;d++){let f=fe(u)+ce,g=fe(u+1)-ce,v=fe(d)+ce,m=fe(d+1)-ce,p=c[u+","+d];p?this.buildDepot(p,f,v,g,m):this.buildBlock(no(u,d),u,d,f,v,g,m)}this.buildOutskirts();let l=new Ft(new Ge(2*a,2e3),new tn({map:Tt.water(),shininess:90,specular:8956620,transparent:!0,opacity:.93}));l.material.map=l.material.map.clone(),l.material.map.needsUpdate=!0,l.material.map.repeat.set(2*a/30,2e3/30),l.rotation.x=-Math.PI/2,l.position.set(0,.05,1912),this.water=l,this.scene.add(l);let h=(u,d,f=!1)=>{let g=u.mesh(d,{cast:f});g&&this.scene.add(g)};h(s.grass,n.grass),h(s.road,n.road),h(s.inter,n.inter),h(s.concrete,n.concrete),h(s.lot,n.lot),h(s.field,n.field),h(s.sand,n.sand),h(s.roof,n.roof),h(s.tiles,n.tiles,!0),h(s.wh,n.wh,!0),h(s.flat,n.flat,!0),h(s.metal,n.metal,!0),h(s.cont,n.cont,!0),s.f.forEach((u,d)=>h(u,n.f[d],!0)),this.buildTrees(),this.buildLamps(),this.B=null}sidewalk(t,e,n,s,r){let a=this.B;a.concrete.walls(t,0,e,n,.22,s,4,4),a.concrete.top(t,e,n,e+4,.22,4),a.concrete.top(t,s-4,n,s,.22,4),a.concrete.top(t,e+4,t+4,s-4,.22,4),a.concrete.top(n-4,e+4,n,s-4,.22,4),(r||a.grass).ground(t+4,e+4,n-4,s-4,.21,r===a.field?30:14)}tree(t,e,n=1,s=0){this.trees.push({x:t,z:e,s:n*(.8+this.r()*.5),k:s,rot:this.r()*6.28})}building(t,e,n,s,r,a){let o=this.B,c=(this.r()*4|0)*.25;if(o.f[a].walls(t,.2,e,n,r,s,16,14,c),o.roof.top(t,e,n,s,r,6),o.flat.walls(t,r,e,n,r+.8,s,1,1,0,9276813),r>14&&this.r()>.3){let l=(n-t)*.3,h=(s-e)*.3,u=(t+n)/2+(this.r()-.5)*4,d=(e+s)/2;o.flat.box(u-l/2,r,d-h/2,u+l/2,r+3,d+h/2,1,10526880)}}house(t,e,n,s,r,a){let o=this.B;o.flat.walls(t,.2,e,n,r,s,1,1,0,a);let c=(t+n)/2;o.flat.quad([c-.6,.2,s+.02],[c+.6,.2,s+.02],[c+.6,2.4,s+.02],[c-.6,2.4,s+.02],[0,0,1],[0,0,1,0,1,1,0,1],5913122);for(let A of[t+1.6,n-2.8])o.flat.quad([A,1.2,s+.02],[A+1.2,1.2,s+.02],[A+1.2,2.4,s+.02],[A,2.4,s+.02],[0,0,1],[0,0,1,0,1,1,0,1],2899536),o.flat.quad([A+1.2,1.2,e-.02],[A,1.2,e-.02],[A,2.4,e-.02],[A+1.2,2.4,e-.02],[0,0,-1],[0,0,1,0,1,1,0,1],2899536);let l=2.2,h=.4,u=(e+s)/2,d=t-h,f=n+h,g=e-h,v=s+h,m=Math.hypot(l,u-g),p=(u-g)/m,_=l/m,x=(f-d)/3,M=m/3;o.tiles.quad([d,r,v],[f,r,v],[f,r+l,u],[d,r+l,u],[0,p,_],[0,0,x,0,x,M,0,M]),o.tiles.quad([f,r,g],[d,r,g],[d,r+l,u],[f,r+l,u],[0,p,-_],[0,0,x,0,x,M,0,M]),o.flat.quad([t,r,e],[t,r,s],[t,r+l,u],[t,r+l,u],[-1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.quad([n,r,s],[n,r,e],[n,r+l,u],[n,r+l,u],[1,0,0],[0,0,1,0,1,1,0,1],a)}tank(t,e,n,s,r=15263976){this.B.metal.add(Zt.cyl(20),Bt(t,s/2,e,0,0,0,n*2,s,n*2),r,1),this.B.metal.add(Zt.cone(20),Bt(t,s+n*.2,e,0,0,0,n*2.02,n*.4,n*2.02),r)}chimney(t,e,n,s,r=10129286){this.B.flat.add(Zt.cyl(14),Bt(t,s/2,e,0,0,0,n*2,s,n*2),r),this.B.flat.add(Zt.cyl(14),Bt(t,s-3,e,0,0,0,n*2.1,1.2,n*2.1),12597547),this.B.flat.add(Zt.cyl(14),Bt(t,s-6,e,0,0,0,n*2.1,1.2,n*2.1),15790320)}containerStack(t,e,n,s,r,a){let o=[12597547,2388387,1999945,14059792,8207512,8622482,10502144,1145445];for(let c=0;c<s;c++)for(let l=0;l<r;l++){let h=1+(this.r()*a|0);for(let u=0;u<h;u++){let d=(c-(s-1)/2)*2.6,f=(l-(r-1)/2)*12.6,g=Math.cos(n),v=Math.sin(n);this.B.cont.add(Zt.box(),Bt(t+d*g+f*v,1.3+u*2.6,e-d*v+f*g,0,n,0,2.44,2.59,12.2),o[this.r()*o.length|0])}}}crane(t,e,n,s){let r=this.B,a=15844367;r.flat.add(Zt.box(),Bt(t,n/2,e,0,0,0,1.6,n,1.6),a);let o=Math.cos(s),c=Math.sin(s);r.flat.add(Zt.box(),Bt(t+c*12,n+.8,e+o*12,0,s,0,1.2,1.2,44),a),r.flat.add(Zt.box(),Bt(t-c*8,n-.6,e-o*8,0,s,0,2.2,2,4),8359053),r.flat.add(Zt.box(),Bt(t,n+3,e,0,0,0,1,6,1),a),r.flat.add(Zt.box(),Bt(t+c*1.5,n-1.2,e+o*1.5,0,s,0,2.4,2.4,2.4),3426654)}turbine(t,e,n=48,s=1){let r=this.B;if(r.flat.add(Zt.cyl(14),Bt(t,n*s/2,e,0,0,0,2.2*s,n*s,2.2*s),16054007),r.flat.add(Zt.box(),Bt(t,n*s+1,e-1,0,0,0,2.2*s,2.4*s,6*s),15396333),!this.rotorGeo){let o=new Ot,c=new _n(1.4,22,.4);c.translate(0,11,0);for(let l=0;l<3;l++)o.add(c,Bt(0,0,0,0,0,l*Math.PI*2/3));o.add(Zt.sphere(),Bt(0,0,0,0,0,0,2,2,2)),this.rotorGeo=o.geometry(),this.rotorMat=new an({color:16316921})}let a=new Ft(this.rotorGeo,this.rotorMat);a.scale.setScalar(s),a.position.set(t,n*s+1,e+2.2*s),a.rotation.z=this.r()*6,this.scene.add(a),this.animated.push({obj:a,speed:.6+this.r()*.4})}buildBlock(t,e,n,s,r,a,o){let c=this.B,l=this.r;this.addCollider(s,r,a,o);let h=s+5,u=r+5,d=a-5,f=o-5,g=d-h;if(t!=="farm")for(let[v,m]of[[s+1.5,r+1.5],[a-1.5,r+1.5],[s+1.5,o-1.5],[a-1.5,o-1.5]])this.lamps.push({x:v,z:m});if(t==="downtown"){this.sidewalk(s,r,a,o,c.concrete);let v=2,m=g/v;for(let p=0;p<v;p++)for(let _=0;_<v;_++){let x=m*(.62+l()*.28),M=m*(.62+l()*.28),A=h+m*(p+.5),T=u+m*(_+.5),w=35+l()*95;this.building(A-x/2,T-M/2,A+x/2,T+M/2,w,l()>.5?0:3)}for(let p=0;p<8;p++)this.tree(s+2+p*(a-s-4)/7,r+2,.8)}else if(t==="residential"){this.sidewalk(s,r,a,o);let v=3,m=g/v;for(let p=0;p<v;p++)for(let _=0;_<v;_++){let x=h+m*(p+.5),M=u+m*(_+.5);if(p===1&&_===1){for(let A=0;A<4;A++)this.tree(x+(l()-.5)*20,M+(l()-.5)*20,1);continue}if(l()<.45){let A=10+l()*6,T=9+l()*4,w=[16115400,14674416,15978928,15262376,13231041,15780297];this.house(x-A/2,M-T/2,x+A/2,M+T/2,3.6+(l()>.6?3.2:0),w[l()*w.length|0]),this.tree(x+A/2+3,M+T/2+3,.9)}else{let A=m*(.6+l()*.3),T=m*(.6+l()*.3);this.building(x-A/2,M-T/2,x+A/2,M+T/2,8+l()*26,l()>.5?1:2)}}for(let p=0;p<7;p++){let _=s+6+p*(a-s-12)/6;this.tree(_,r+2,.75),this.tree(_,o-2,.75)}}else if(t==="park"){this.sidewalk(s,r,a,o);for(let v=0;v<46;v++)this.tree(h+l()*g,u+l()*g,1.1,l()>.7?1:0);c.sand.ground(h+g*.35,u+g*.35,h+g*.65,u+g*.65,.23,8)}else if(t==="farm"){this.sidewalk(s,r,a,o,c.field);for(let v=0;v<10;v++){let m=s+4+v*(a-s-8)/9;this.tree(m,r+2,1.1,1),this.tree(m,o-2,1.1,1)}if(l()>.55){let v=h+20,m=u+20;this.house(v-6,m-5,v+6,m+5,3.8,15921126)}l()>.6&&this.turbine(h+g*(.3+l()*.4),u+g*(.3+l()*.4),44,.9)}else if(t==="industrial"){this.sidewalk(s,r,a,o,c.concrete);let v=10+l()*6,m=g/2,p=[16777215,14083312,15786704,14543064][l()*4|0];if(c.wh.walls(h+2,.2,u+2,d-2,v,u+m-4,6,6,0,p),c.roof.top(h+2,u+2,d-2,u+m-4,v,6),l()>.4)for(let _=0;_<3;_++)this.tank(h+18+_*26,f-22,9,14+l()*8);else c.wh.walls(h+4,.2,u+m+4,d-30,v*.8,f-4,6,6,0,p),c.roof.top(h+4,u+m+4,d-30,f-4,v*.8,6),this.chimney(d-14,f-16,2.5,38+l()*20)}else t==="port"&&(this.sidewalk(s,r,a,o,c.concrete),this.containerStack(h+28,(u+f)/2,0,8,3,4),this.containerStack(d-28,(u+f)/2,0,8,3,3))}buildDepot(t,e,n,s,r){let a=this.B,o=this.r;a.lot.ground(e,n,s,r,.03,12);let c=(e+s)/2,l=(n+r)/2,h,u,d,f,g=34,v=14;t.side==="n"?(h={x:c,z:n+22,w:g,d:v,rot:Math.PI/2},u=[e+10,r-50,s-10,r-6],d={x:c,z:n-ce},f="n"):t.side==="s"?(h={x:c,z:r-22,w:g,d:v,rot:Math.PI/2},u=[e+10,n+6,s-10,n+50],d={x:c,z:r+ce},f="s"):t.side==="w"?(h={x:e+22,z:l,w:v,d:g,rot:0},u=[s-50,n+10,s-6,r-10],d={x:e-ce,z:l},f="w"):(h={x:s-22,z:l,w:v,d:g,rot:0},u=[e+6,n+10,e+50,r-10],d={x:s+ce,z:l},f="e"),this.depots[t.id]=ts(An({},t),{zone:h,entry:d,lot:[e,n,s,r]});let[m,p,_,x]=u,M=(m+_)/2,A=(p+x)/2,T=t.kind,w=(S,I=16777215,y=-1)=>{y>=0?a.f[y].walls(m,.03,p,_,S,x,16,14,0):a.wh.walls(m,.03,p,_,S,x,6,6,0,I),a.roof.top(m,p,_,x,S,6),a.flat.walls(m,S,p,_,S+.6,x,1,1,0,t.color),this.addCollider(m,p,_,x);let R=4;for(let V=0;V<R;V++){let $=(V+.5)/R,P=4,q=Math.min(5,S-1);if(f==="n"){let N=m+(_-m)*$;a.flat.quad([N+P/2,.03,p-.05],[N-P/2,.03,p-.05],[N-P/2,q,p-.05],[N+P/2,q,p-.05],[0,0,-1],[0,0,1,0,1,1,0,1],2962486)}if(f==="s"){let N=m+(_-m)*$;a.flat.quad([N-P/2,.03,x+.05],[N+P/2,.03,x+.05],[N+P/2,q,x+.05],[N-P/2,q,x+.05],[0,0,1],[0,0,1,0,1,1,0,1],2962486)}if(f==="w"){let N=p+(x-p)*$;a.flat.quad([m-.05,.03,N-P/2],[m-.05,.03,N+P/2],[m-.05,q,N+P/2],[m-.05,q,N-P/2],[-1,0,0],[0,0,1,0,1,1,0,1],2962486)}if(f==="e"){let N=p+(x-p)*$;a.flat.quad([_+.05,.03,N+P/2],[_+.05,.03,N-P/2],[_+.05,q,N-P/2],[_+.05,q,N+P/2],[1,0,0],[0,0,1,0,1,1,0,1],2962486)}}this.signFor(t,f,u,S)};if(T==="port")this.containerStack(M-25,A,Math.PI/2,4,3,4),this.containerStack(M+25,A,Math.PI/2,4,3,3),this.addCollider(m,p,_,x),this.crane(M,A,34,0),this.signFor(t,f,u,4,!0);else if(T==="refinery"){for(let S=0;S<2;S++)for(let I=0;I<3;I++)this.tank(m+12+S*22,p+15+I*32,9,12+o()*6);this.chimney(_-8,p+12,1.6,42,12436423),this.addCollider(m,p,_,x),this.signFor(t,f,u,4,!0)}else if(T==="farm")a.flat.walls(m+5,.03,p+10,_-20,9,x-10,1,1,0,11088422),a.tiles.top(m+4,p+9,_-19,x-9,9,4),this.tank(_-10,p+20,5,18,14014684),this.tank(_-10,x-20,5,18,14014684),this.addCollider(m,p,_,x),this.signFor(t,f,u,4,!0);else if(T==="silo"){for(let S=0;S<2;S++)for(let I=0;I<3;I++)this.tank(m+12+S*20,p+18+I*32,7,26,13620182);this.addCollider(m,p,_,x),this.signFor(t,f,u,4,!0)}else if(T==="wind"){for(let S=0;S<3;S++)this.turbine(m+10+S*12+(f==="n"||f==="s"?S*20:0),A+(S-1)*(f==="n"||f==="s"?0:30),55,1);this.addCollider(m,p,_,x),this.signFor(t,f,u,4,!0)}else if(T==="construction"){for(let S=0;S<4;S++)for(let I=0;I<3;I++)for(let y=0;y<5;y++)a.flat.add(Zt.box(),Bt(m+6+S*10,y*4+2,p+10+I*14,0,0,0,.8,4,.8),10923183);for(let S=1;S<=5;S++)a.flat.add(Zt.box(),Bt(m+21,S*4,p+24,0,0,0,32,.4,30),11777719);this.crane(_-8,x-10,40,Math.PI/2),this.addCollider(m,p,_,x),this.signFor(t,f,u,4,!0)}else if(T==="fuel"){w(5,16777215);let S=h;a.flat.add(Zt.box(),Bt(S.x,7,S.z,0,0,0,S.w+6,.8,S.d+6),13639712);for(let[I,y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let R=S.x+I*(S.w/2+4),V=S.z+y*(S.d/2+4);a.flat.add(Zt.box(),Bt(R,3.5,V,0,0,0,.6,7,.6),15528177),this.addCollider(R-.4,V-.4,R+.4,V+.4)}}else if(T==="steel")w(18,13220008),this.chimney(m+8,p+8,2.6,55),this.chimney(_-8,x-8,2.6,50);else if(T==="sawmill"){let I=(m+_)/2+6;a.wh.walls(m,.03,p,I,8,x,6,6,0,13148794),a.roof.top(m,p,I,x,8,6),this.addCollider(m,p,_,x);for(let y=0;y<3;y++)for(let R=0;R<7;R++){let V=p+14+y*30,$=I+4+R%4*2.2+(R>=4?1.1:0),P=R>=4?2.8:.9;a.flat.add(Zt.cyl(10),Bt($,P,V,Math.PI/2,0,0,1.8,14,1.8),9329458)}this.signFor(t,f,u,8)}else if(T==="quarry"){w(9,13682878);for(let S=0;S<2;S++)a.flat.add(Zt.cone(16),Bt(m+15+S*22,5,x+0,0,0,0,18,10,18),10261124)}else T==="hospital"?w(22,16777215,2):T==="market"?w(10,16777215,1):w(T==="garage"?9:12,T==="garage"?14083319:16777215);this.lamps.push({x:e+2,z:n+2},{x:s-2,z:r-2})}signFor(t,e,n,s,r=!1){let[a,o,c,l]=n,h=26,u=26*(192/1024),d=new Ft(new Ge(h,u),new he({map:Tt.sign(t.name.toUpperCase(),"#"+new mt(t.color).multiplyScalar(.75).getHexString(),"#ffffff"),side:cn})),f=r?8:s+u/2+.8;if(e==="n"&&(d.position.set((a+c)/2,f,o-(r?4:.3)),d.rotation.y=Math.PI),e==="s"&&d.position.set((a+c)/2,f,l+(r?4:.3)),e==="w"&&(d.position.set(a-(r?4:.3),f,(o+l)/2),d.rotation.y=-Math.PI/2),e==="e"&&(d.position.set(c+(r?4:.3),f,(o+l)/2),d.rotation.y=Math.PI/2),d.matrixAutoUpdate=!1,d.updateMatrix(),this.scene.add(d),r){let g=d.position;this.B.flat.add(Zt.box(),Bt(g.x,3,g.z,0,d.rotation.y,0,.5,6,.5),5592405)}}buildOutskirts(){let t=this.r;for(let n=0;n<700;n++){let s=t()*Math.PI*2,r=880+t()*700,a=Math.cos(s)*r,o=Math.sin(s)*r;o>870||Math.abs(a)<865&&Math.abs(o)<865||this.tree(a,o,1.3,t()>.6?1:0)}let e=this.M.grass;for(let n=0;n<18;n++){let s=n/18*Math.PI*2+t()*.2,r=1700+t()*500,a=Math.cos(s)*r,o=Math.sin(s)*r;if(o>940)continue;let c=80+t()*160,l=300+t()*250,h=new Ci(1,20,10,0,Math.PI*2,0,Math.PI/2),u=h.attributes.uv;for(let f=0;f<u.count;f++)u.setXY(f,u.getX(f)*60,u.getY(f)*12);let d=new Ft(h,e);d.scale.set(l,c,l),d.position.set(a,-5,o),d.matrixAutoUpdate=!1,d.updateMatrix(),this.scene.add(d)}for(let n=0;n<6;n++)this.turbine(-960-t()*300,-400+n*180,55,1)}buildTrees(){let t=this.trees.length,e=new vn(.22,.32,3,7);e.translate(0,1.5,0);let n=new Xa(2.4,1);n.translate(0,4.6,0);let s=new Ri(2,6.5,9);s.translate(0,5.6,0);let r=new Yn(e,this.M.bark,t),a=[0,0];for(let f of this.trees)a[f.k]++;let o=new Yn(n,this.M.leaf,Math.max(1,a[0])),c=new Yn(s,new an({map:Tt.foliage(),color:10470042}),Math.max(1,a[1])),l=new ne,h=new mt,u=0,d=0;this.trees.forEach((f,g)=>{l.copy(Bt(f.x,.2,f.z,0,f.rot,0,f.s,f.s*(.9+g%5*.06),f.s)),r.setMatrixAt(g,l),h.setHSL(.24+g*37%10/100,.45,.42+g*13%10/60),f.k===0?(o.setMatrixAt(u,l),o.setColorAt(u++,h)):c.setMatrixAt(d++,l)}),o.count=u,c.count=d;for(let f of[r,o,c])f.castShadow=!0,f.receiveShadow=!1,f.frustumCulled=!1,this.scene.add(f)}buildLamps(){let t=this.lamps.length,e=new vn(.12,.16,8,6);e.translate(0,4,0);let n=new _n(.15,.15,2.2);n.translate(0,8,1);let s=new _n(.5,.2,.9);s.translate(0,7.9,2);let r=new Yn(e,new an({color:6122878}),t),a=new Yn(n,new an({color:6122878}),t),o=new Yn(s,new he({color:16642768}),t);this.lamps.forEach((h,u)=>{let d=Math.round((h.x+840)/140)*140-840,f=Math.round((h.z+840)/140)*140-840,g=Math.abs(h.x-d)<Math.abs(h.z-f)?d>h.x?Math.PI/2:-Math.PI/2:f>h.z?0:Math.PI,v=Bt(h.x,0,h.z,0,g,0);r.setMatrixAt(u,v),a.setMatrixAt(u,v),o.setMatrixAt(u,v)});let c=new Ge(16,16);c.rotateX(-Math.PI/2),c.translate(0,.12,3.5);let l=new Yn(c,new he({map:Tt.glow(),color:16757596,transparent:!0,opacity:0,depthWrite:!1,blending:gn}),t);this.lamps.forEach((h,u)=>{let d=Math.round((h.x+840)/140)*140-840,f=Math.round((h.z+840)/140)*140-840,g=Math.abs(h.x-d)<Math.abs(h.z-f)?d>h.x?Math.PI/2:-Math.PI/2:f>h.z?0:Math.PI;l.setMatrixAt(u,Bt(h.x,0,h.z,0,g,0))}),this.lampHeads=o,this.lampPools=l,l.visible=!1;for(let h of[r,a,o,l])h.frustumCulled=!1,this.scene.add(h)}setNight(t){for(let e of this.M.f)e.emissiveIntensity=Math.max(0,t*1.1-.1);this.lampPools.visible=t>.05,this.lampPools.material.opacity=t*.9,this.lampHeads.material.color.setRGB(.75+t*.25,.72+t*.2,.65+t*.1)}update(t,e){for(let n of this.animated)n.obj.rotation.z+=n.speed*t;this.water&&this.water.material.map.offset.set(e*.004,e*.006)}};var lo=null;function uo(){if(lo)return lo;let i=v_();return lo={chrome:new tn({color:15133164,map:Tt.metal(),shininess:140,specular:16777215}),dark:new an({color:2303787}),glass:new tn({color:1450542,shininess:160,specular:12571622}),light:new he({color:16775393}),red:new he({color:14037041}),amber:new he({color:16753178}),wheel:new an({map:i}),flat:new tn({vertexColors:!0,shininess:40,specular:3355443}),grill:new tn({map:Tt.grill(),shininess:90,specular:10066329}),glow:new Us({map:Tt.glow(),color:16774102,transparent:!0,depthWrite:!1,blending:gn}),glowRed:new Us({map:Tt.glow(),color:16722458,transparent:!0,depthWrite:!1,blending:gn}),beam:new he({map:Tt.beam(),transparent:!0,depthWrite:!1,blending:gn,polygonOffset:!0,polygonOffsetFactor:-3}),blob:new he({map:Tt.blob(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})},lo}function v_(){let i=document.createElement("canvas");i.width=512,i.height=256;let t=i.getContext("2d");t.drawImage(Tt.tire().image,0,0,256,256),t.drawImage(Tt.rim().image,256,0,256,256);let e=new Fs(i);return e.colorSpace=je,e.anisotropy=4,e}var vc=null;function Mc(){if(vc)return vc;let i=new vn(1,1,1,22,1),t=i.attributes.uv,e=i.attributes.position,n=23*2;for(let s=0;s<t.count;s++)s<n?t.setXY(s,t.getX(s)*.5,t.getY(s)):t.setXY(s,.5+(e.getX(s)*.5+.5)*.5,e.getZ(s)*.5+.5);return i.rotateZ(Math.PI/2),vc=i,i}function y_(i){return new tn({color:i,map:Tt.paint(),shininess:90,specular:8947848})}function od(i,t,e,n){let s=new Ot;s.add(Mc(),Bt(t,0,0,0,0,0,n,e,e)),s.add(Mc(),Bt(-t,0,0,0,0,0,n,e,e));let r=new Ft(s.geometry(),uo().wheel);return r.position.set(0,e,i),r.castShadow=!0,r}function co(i,t,e,n){let s=new Ft(Mc(),uo().wheel);s.scale.set(n,e,e);let r=new ke;return r.position.set(t,e,i),r.add(s),s.castShadow=!0,r}function ld(i,t,e=!0){for(let[n,s]of i){let r=n.mesh(s,{cast:e});r&&t.add(r)}}function bc(i){let t=uo(),e=new ke,n=new ke;e.add(n);let s=new Ot,r=new Ot,a=new Ot,o=new Ot,c=new Ot,l=new Ot,h=new Ot,u=(O,B,Z,j,nt,ft,Ct,H=0,K=0,dt=0)=>O.add(Zt.box(),Bt(nt,ft,Ct,H,K,dt,B,Z,j)),d=(O,B,Z,j,nt,ft,Ct=0,H=0,K=0,dt=14)=>O.add(Zt.cyl(dt),Bt(j,nt,ft,Ct,H,K,B*2,Z,B*2)),f=i.rigid,g=i.id==="urbano",v=g?3.3:f?4.3:i.axles>=4?4.6:3.9,m=g?.42:.53,p=g?2.15:2.5,_=v+(g?1.3:1.45),x=g?1.9:2.3,M=g?.95:1.15,A=g?1.75:2.05,T=f?-(g?1.4:2):-1.4;u(a,.95,.32,_-T-.3,0,M-.25,(_+T)/2-.1),u(s,p,A,x,0,M+A/2,_-x/2),g||(u(s,p-.04,.75,x-.35,0,M+A+.36,_-x/2-.15),u(s,p,.18,.5,0,M+A+.75,_-.2,-.25)),f||(u(s,p-.05,A+.6,1.2,0,M+(A+.6)/2,_-x-.55),u(s,p-.2,.7,1.6,0,M+A+.95,_-x-.3,.18)),u(o,p-.25,A*.42,.06,0,M+A*.72,_+.02,-.08);for(let O of[-1,1])u(o,.05,A*.38,x*.42,O*(p/2+.01),M+A*.72,_-x*.3),u(a,.55,.06,.06,O*(p/2+.25),M+A*.75,_-.15),u(a,.12,.55,.28,O*(p/2+.52),M+A*.7,_-.15),u(c,.5,.22,.05,O*(p/2-.42),M+.18,_+.03),u(h,.18,.22,.05,O*(p/2-.1),M+.18,_+.03),u(a,.36,.12,1.3,O*(p/2-.25),m*2+.08,v),u(s,.06,.4,x*.5,O*(p/2+.01),M+.2,_-x*.25),u(l,.35,.18,.05,O*.9,M-.15,T-.02),g||d(r,.33,1.3,O*1.05,.9,v-1.5,Math.PI/2,0,0),f||d(r,.1,2.6,O*(p/2-.15),M+A+.2,_-x-1.25),u(a,.7,.08,i.axles>=3?2.6:1.4,O*.98,m*2+.12,(i.axles>=3,0));let w=new Ot;u(w,p*.62,A*.42,.05,0,M+A*.32,_+.03),u(r,p*.66,.06,.06,0,M+A*.54,_+.05),u(r,p*.66,.06,.06,0,M+A*.1,_+.05);for(let O of[-1,1])u(a,.55,.6,.04,O*.95,m+.2,i.axles>=3?-1.45:-.75);u(r,p+.08,.32,.28,0,M-.12,_+.12);for(let O=-2;O<=2;O++)u(h,.12,.08,.08,O*.35,M+A+(g?.04:.78),_-.05);f||u(a,1.3,.14,1.3,0,M-.02,.3);let S=.3;if(f){let O=_-x-.15,B=T,Z=g?2.3:2.7,j=g?2.25:2.5;u(s,j,.08,O-B,0,M+.02,(B+O)/2);let nt=new an({map:Tt.cargoBox("#"+new mt(i.color===15921906?3108830:i.color).getHexString(),"DRIZZIE")}),ft=new Ot,Ct=O-B,H=M+.06,K=M+.06+Z;ft.quad([j/2,H,O],[j/2,H,B],[j/2,K,B],[j/2,K,O],[1,0,0],[1,0,0,0,0,1,1,1]),ft.quad([-j/2,H,B],[-j/2,H,O],[-j/2,K,O],[-j/2,K,B],[-1,0,0],[0,0,1,0,1,1,0,1]);let dt=ft.mesh(nt,{cast:!0});n.add(dt);let St=new Ot(!0);St.box(-j/2,H,B,j/2,K,O,1,16053492),St.quad([j/2-.1,H+.1,B-.01],[.02,H+.1,B-.01],[.02,K-.1,B-.01],[j/2-.1,K-.1,B-.01],[0,0,-1],[0,0,1,0,1,1,0,1],14474460),St.quad([-.02,H+.1,B-.01],[-j/2+.1,H+.1,B-.01],[-j/2+.1,K-.1,B-.01],[-.02,K-.1,B-.01],[0,0,-1],[0,0,1,0,1,1,0,1],14474460);let _t=St.mesh(t.flat,{cast:!0});_t.scale.set(.995,1,1),n.add(_t),S=T}let I=y_(i.color);ld([[s,I],[r,t.chrome],[a,t.dark],[o,t.glass],[c,t.light],[l,t.red],[h,t.amber],[w,t.grill]],n);let y=new ke;for(let O of[-1,1]){let B=new Ns(t.glow);B.scale.set(1.6,1.6,1),B.position.set(O*(p/2-.42),M+.18,_+.15),y.add(B);let Z=new Ns(t.glowRed);Z.scale.set(.9,.9,1),Z.position.set(O*.9,M-.15,T-.12),y.add(Z)}let R=new Ft(new Ge(9,26),t.beam);R.rotation.x=-Math.PI/2,R.position.set(0,.07,_+13),y.add(R),y.visible=!1,e.add(y);let V=[],$=[],P=p/2-.3;V.push(co(v,P,m,.32),co(v,-P,m,.32)),i.axles>=4&&V.push(co(v-1.5,P,m,.32),co(v-1.5,-P,m,.32));for(let O of V)e.add(O);let q=i.axles>=3?[.68,-.68]:[0];for(let O of q){let B=od(O,g?.78:.92,m,g?.38:.62);$.push(B),e.add(B)}let N=new Ft(new Ge(p+1,_-T+1.5),t.blob);return N.rotation.x=-Math.PI/2,N.position.set(0,.05,(_+T)/2),e.add(N),n.traverse(O=>{O.isMesh&&(O.castShadow=!0)}),{root:e,body:n,front:V,rear:$,wb:v,wr:m,hitchZ:S,zf:_,rearEnd:T,paint:I,blob:N,cabW:p,night:y,y0:M}}function M_(i){let t=uo(),e=new ke,n=new Ot(!0),s=new Ot,r=new Ot,a=new Ot,o=(w,S,I,y,R,V,$,P,q=0,N=0,O=0)=>w.add(Zt.box(),Bt(R,V,$,q,N,O,S,I,y),P),c=(w,S,I,y,R,V,$,P,q,N,O=18)=>w.add(Zt.cyl(O),Bt(y,R,V,$,P,q,S*2,I,S*2),N),l=i.trailer,h=i.model,d=h==="blade"?20:l==="tank"?12.5:l==="bulk"?12:l==="lowboy"?14.5:13.6,f=1,g=-(d-f),v=l==="lowboy"?i.t>60?5:4:3,m=1.35,p=g+1.6+(v-1)*m/2,_=1.35,x=[];o(s,1,.3,d-.5,0,_-.3,(f+g)/2);for(let w of[-1,1])o(s,.12,1,.12,w*.9,.6,-1.6),o(s,.08,.4,5.5,w*1.18,_-.45,g+7.5),o(a,.35,.16,.05,w*1,_-.35,g-.03);if(o(s,2.4,.18,.1,0,_-.65,g-.05),l==="box"){let S=_+1.375;o(n,2.55,2.75,d,0,S,(f+g)/2,16185078);let I=new an({map:Tt.cargoBox("#d63031","DRIZZIE")}),y=new Ot,R=_+.05,V=_+2.75-.05,$=1.281;y.quad([$,R,f-.1],[$,R,g+.1],[$,V,g+.1],[$,V,f-.1],[1,0,0],[1,0,0,0,0,1,1,1]),y.quad([-$,R,g+.1],[-$,R,f-.1],[-$,V,f-.1],[-$,V,g+.1],[-1,0,0],[0,0,1,0,1,1,0,1]),x.push(y.mesh(I,{cast:!1})),o(s,.03,2.75-.2,.03,0,S,g-.01)}else if(l==="tank"){let S=h==="silo"?12106944:14673128;c(r,1.25,d-1.2,0,_+1.3,(f+g)/2,Math.PI/2,0,0,S,24),r.add(Zt.sphere(),Bt(0,_+1.3,f-.6,0,0,0,2.5,2.5,.8),S),r.add(Zt.sphere(),Bt(0,_+1.3,g+.6,0,0,0,2.5,2.5,.8),S);for(let I=0;I<3;I++)o(s,.6,.15,.6,0,_+2.6,f-3-I*3.3);o(n,.9,.6,.03,1,_+1.3,g+.12,i.hazard?16747520:3049182,0,0,0),o(n,.12,.25,d-2,0,_+2.6,(f+g)/2,8359053)}else if(l==="bulk"){o(n,2.5,.12,d,0,_+.06,(f+g)/2,2911902);for(let S of[-1,1])o(n,.08,2.1,d,S*1.21,_+2.1/2,(f+g)/2,2911902);o(n,2.5,2.1,.08,0,_+2.1/2,f-.04,2911902),o(n,2.5,2.1,.08,0,_+2.1/2,g+.04,2911902);for(let S=0;S<8;S++)o(s,.06,2.1,.06,1.26,_+2.1/2,f-1-S*1.5);n.add(Zt.sphere(),Bt(0,_+2.1-.15,(f+g)/2,0,0,0,2.3,.9,d-.5),13214812)}else if(l==="flatbed"){o(n,2.5,.22,d,0,_,(f+g)/2,7162927);let w=_+.11;if(h==="logs"){for(let S=0;S<3;S++)for(let I=0;I<4-S;I++){let y=(I-(3-S)/2)*.6;c(n,.3,d-1.2,y,w+.3+S*.52,(f+g)/2,Math.PI/2,0,0,S%2?9329458:8014374,10)}for(let S=0;S<5;S++)o(s,.08,2.2,.08,1.2,w+1.1,f-1-S*2.8),o(s,.08,2.2,.08,-1.2,w+1.1,f-1-S*2.8)}else if(h==="container"){let S=new Ft(Zt.box(),new an({map:Tt.container(2388387)}));S.scale.set(2.44,2.59,12.19),S.position.set(0,w+1.3,(f+g)/2),x.push(S)}else if(h==="coils")for(let S=0;S<4;S++)c(r,.85,1.6,0,w+.86,f-2-S*3,0,0,Math.PI/2,12568010,22),o(s,1.6,.25,1.4,0,w+.12,f-2-S*3);else if(h==="beams")for(let S=0;S<3;S++)for(let I=0;I<4;I++){let y=(I-1.5)*.58,R=w+.22+S*.42,V=(f+g)/2;o(n,.5,.05,d-.6,y,R+.17,V,6122878),o(n,.5,.05,d-.6,y,R-.17,V,6122878),o(n,.06,.34,d-.6,y,R,V,4872810)}}else if(l==="lowboy"){o(n,2.6,.3,3.4,0,_,f-1.6,3426654),o(n,2.9,.3,d-5.5,0,.95,(f-3.4+g+2.1)/2,3426654),o(n,2.6,.3,2.1,0,_-.1,g+1.05,3426654);let S=.95+.15,I=(f-3.4+g+2.1)/2;if(h==="tractor"){o(n,1.3,1.2,3.2,0,S+1.3,I+.3,3050298),o(n,1.4,1.5,1.4,0,S+2.3,I-.9,3050298),o(s,1.3,1,1.3,0,S+3.1,I-.9);for(let y of[-1,1])c(s,.95,.6,y*1.1,S+.95,I-1,0,0,Math.PI/2,2236962),c(s,.55,.4,y*.95,S+.55,I+1.5,0,0,Math.PI/2,2236962)}else if(h==="excavator")o(s,.7,.9,4.8,1.05,S+.45,I,546),o(s,.7,.9,4.8,-1.05,S+.45,I,546),o(n,2.6,1.2,3.6,0,S+1.5,I-.6,15844367),o(n,1,1.4,1.2,-.7,S+2.8,I+.4,15844367),o(n,.5,.5,4,.5,S+2.6,I+2.4,15844367,-.35),o(n,.45,.45,2.8,.5,S+2,I+4.6,15844367,.9),o(s,1,.8,.8,.5,S+1,I+5.2);else if(h==="transformer"){o(n,2.6,3,4.2,0,S+1.5,I,8359053);for(let y=0;y<9;y++)o(n,.08,2.4,1,1.36,S+1.5,I-1.8+y*.45,9807270),o(n,.08,2.4,1,-1.36,S+1.5,I-1.8+y*.45,9807270);for(let y=0;y<3;y++)c(n,.18,1.3,(y-1)*.8,S+3.6,I+1,0,0,0,9127187,10)}else h==="blade"?(n.add(Zt.sphere(),Bt(0,S+1.6,I-2,0,0,0,2.2,2,30),16054007),c(n,1.1,1.6,0,S+1.6,I+30/2-3.5,Math.PI/2,0,0,15067368,20),o(s,.4,1.4,.6,0,S+.7,I+2),o(s,.4,1.4,.6,0,S+.7,I-6)):h==="press"&&(o(n,2.8,3.6,4.6,0,S+1.8,I,3038604),o(n,1.8,1.2,1.6,0,S+4.2,I,2049126),o(r,.25,3,.25,1.2,S+2,I+2.2,12436423),o(r,.25,3,.25,-1.2,S+2,I+2.2,12436423));o(n,2.3,.35,.03,0,_+.9,g-.06,16761095)}ld([[n,t.flat],[s,t.dark],[r,t.chrome],[a,t.red]],e);for(let w of x)w&&(w.castShadow=!0,e.add(w));let M=[];for(let w=0;w<v;w++){let S=od(g+1.6+w*m,.92,.5,.62);M.push(S),e.add(S)}let A=new ke;for(let w of[-1,1]){let S=new Ns(t.glowRed);S.scale.set(.9,.9,1),S.position.set(w*1,_-.35,g-.15),A.add(S)}A.visible=!1,e.add(A);let T=new Ft(new Ge(3.4,d+1.5),t.blob);return T.rotation.x=-Math.PI/2,T.position.set(0,.05,(f+g)/2),e.add(T),e.traverse(w=>{w.isMesh&&w!==T&&(w.castShadow=!0)}),T.castShadow=!1,{root:e,axles:M,Lk:-p,Lt:d,front:f,back:g,blob:T,night:A}}var yc={x:0,z:0};var ho=class{constructor(t,e,n){this.scene=t,this.shadows=n,this.x=0,this.z=0,this.h=0,this.v=0,this.steer=0,this.acc=0,this.trailer=null,this.th=0,this.cargo=null,this.wheelRot=0,this.rpm=.2,this.collCooldown=0,this.reverse=!1,this.lastImpact=0,this.lightsOn=!1,this.engineOn=!1,this.setTruck(e)}setTruck(t){this.model&&this.scene.remove(this.model.root),this.def=t,this.model=bc(t),this.model.blob.visible=!this.shadows,this.scene.add(this.model.root),this.model.night.visible=this.lightsOn,this.onModel&&this.onModel(this.model),this.trailer&&t.rigid&&this.detach(),this.sync()}attach(t){if(this.cargo=t,this.def.rigid)return;let e=M_(t);e.blob.visible=!this.shadows,e.night.visible=this.lightsOn,this.trailer=e,this.th=this.h,this.scene.add(e.root),this.sync()}setLights(t){this.lightsOn=t,this.model.night.visible=t,this.trailer&&(this.trailer.night.visible=t)}detach(){this.trailer&&this.scene.remove(this.trailer.root),this.trailer=null,this.cargo=null}get mass(){let t=this.def.mass;return this.cargo&&(t+=this.cargo.t+(this.def.rigid?0:nd(this.cargo))),t*1e3}get speedKmh(){return Math.abs(this.v)*3.6}place(t,e,n){this.x=t,this.z=e,this.h=n,this.th=n,this.v=0,this.steer=0,this.sync()}center(t){let e=Math.sin(this.h),n=Math.cos(this.h);if(this.trailer){let s=this.x+e*this.model.hitchZ,r=this.z+n*this.model.hitchZ,a=this.trailer.Lt*.45;t.x=(this.x+e*this.model.wb*.5+s-Math.sin(this.th)*a)/2,t.z=(this.z+n*this.model.wb*.5+r-Math.cos(this.th)*a)/2}else t.x=this.x+e*this.model.wb*.4,t.z=this.z+n*this.model.wb*.4;return t}update(t,e,n,s){let r=this.def,a=this.mass,o=r.hp*735.5*2.3,c=r.vmax/3.6,l=this.v,h=0,u=e.brake,d=e.throttle;e.gear==="auto"?(this.stopT=u>.1&&Math.abs(l)<.4&&d<.1?(this.stopT||0)+t:0,this.stopT>.3&&(this.reverse=!0),d>.1&&l>-.4&&(this.reverse=!1)):this.reverse=e.gear==="R";let f=this.engineOn&&e.gear!=="N",g=e.gear==="auto"&&this.reverse;this.reverse?g?(f&&u>0&&l>-4.5&&(h-=u*Math.min(o/Math.max(-l,3),a*1.6)),d>0&&l<0&&(h+=d*a*6)):(f&&d>0&&l>-5&&(h-=d*Math.min(o/Math.max(-l,3),a*1.6)),u>0&&l<0&&(h+=u*a*6.5),u>0&&l>0&&(h-=u*a*6.5)):(f&&d>0&&l>=-.3&&(h+=d*Math.min(o/Math.max(l,3),a*3,r.hp*250)),u>0&&l>0&&(h-=u*a*(6.8-Math.min(2.2,a/4e4))),u>0&&l<0&&(h+=u*a*6)),e.handbrake&&(h-=Math.sign(l)*a*5);let v=this.trailer?this.cargo.trailer==="box"?9:7:r.rigid?6.5:5,m=.5*1.2*v*l*Math.abs(l),p=(.011*a*9.81+(d<.05&&u<.05?a*.35:0))*Math.sign(l),_=(h-m)/a,x=p/a;l+=_*t,Math.abs(x*t)>Math.abs(l)&&h===0?l=0:l-=x*t;let M=f?this.reverse?g?u>0?-1:0:d>0?-1:0:d>0?1:0:0;l!==0&&Math.sign(l)!==M&&Math.sign(l)!==Math.sign(this.v)&&(l=0),e.handbrake&&Math.abs(l)<.3&&(l=0),l=Math.min(l,c),l=Math.max(l,-5),this.acc=(l-this.v)/Math.max(t,.001),this.v=l;let A=.6/(1+l*l/160),T=e.steer*A,w=e.steer===0?2.6:1.7,S=T-this.steer;this.steer+=Math.sign(S)*Math.min(Math.abs(S),w*t);let I=this.model.wb,y=l*Math.tan(this.steer)/I;if(this.h+=y*t,this.yaw=y,this.x+=Math.sin(this.h)*l*t,this.z+=Math.cos(this.h)*l*t,this.trailer){let q=this.model.hitchZ,N=this.h-this.th,O=(l*Math.sin(N)-q*y*Math.cos(N))/this.trailer.Lk;this.th+=O*t;let B=this.h-this.th;B=Math.atan2(Math.sin(B),Math.cos(B));let Z=1.3;Math.abs(B)>Z&&(this.th=this.h-Math.sign(B)*Z)}this.collide(n,s,t),this.wheelRot+=l*t/this.model.wr;let R=Math.abs(l)/c,V=Math.min(5,Math.floor(R*6)),$=R*6-V;this.gear=this.reverse?"R":e.gear==="N"?"N":Math.abs(l)<.3?e.gear==="auto"?"N":"D":String(V+1);let P=this.engineOn?Math.abs(l)<.3||e.gear==="N"?.18+d*.5:.3+$*.6*(.5+d*.5):0;this.rpm+=(P-this.rpm)*Math.min(1,t*6),this.sync()}circles(t){let e=this.model,n=Math.sin(this.h),s=Math.cos(this.h),r=0;t.length=0;let a=[e.zf-.9,(e.zf+e.rearEnd)/2,e.rearEnd+.9];for(let o of a)t.push({x:this.x+n*o,z:this.z+s*o,r:e.cabW/2+.1,t:!1});if(this.trailer){let o=this.x+n*e.hitchZ,c=this.z+s*e.hitchZ,l=Math.sin(this.th),h=Math.cos(this.th),u=this.trailer;for(let d=u.front-1.2;d>u.back+.5;d-=2.4)t.push({x:o+l*d,z:c+h*d,r:1.35,t:!0});t.push({x:o+l*(u.back+1.3),z:c+h*(u.back+1.3),r:1.35,t:!0})}return r}collide(t,e,n){this.collCooldown-=n;let s=this._cs||(this._cs=[]);this.circles(s);let r=0,a=0,o=0,c=!1;for(let l of s){let h=t.resolveCircle(l,l.r,yc);h>.01&&(r+=yc.x*(l.t?.6:1),a+=yc.z*(l.t?.6:1),h>o&&(o=h),l.t&&(c=!0));for(let u of e){let d=l.x-u.x,f=l.z-u.z,g=l.r+u.r,v=d*d+f*f;if(v<g*g&&v>1e-6){let m=Math.sqrt(v),p=g-m;r+=d/m*p*.5,a+=f/m*p*.5,p>o&&(o=p),u.hit=!0}}}if(this.lastImpact=0,o>0){this.x+=r,this.z+=a;let l=Math.abs(this.v)*3.6;l>4&&this.collCooldown<=0&&(this.lastImpact=l,this.collCooldown=.6),c&&Math.abs(this.v)>1&&(this.th+=(Math.random()-.5)*.002),this.v*=l>15?-.12:.6}}sync(){let t=this.model;t.root.position.set(this.x,0,this.z),t.root.rotation.y=this.h;for(let n=0;n<t.front.length;n++){let s=t.front[n];s.rotation.y=this.steer*(n<2?1:.6),s.children[0].rotation.x=this.wheelRot}for(let n of t.rear)n.rotation.x=this.wheelRot;let e=(this.yaw||0)*this.v;if(t.body.rotation.z+=(Math.max(-.05,Math.min(.05,-e*.012))-t.body.rotation.z)*.2,t.body.rotation.x+=(Math.max(-.03,Math.min(.03,-this.acc*.006))-t.body.rotation.x)*.2,this.trailer){let n=Math.sin(this.h),s=Math.cos(this.h),r=this.trailer;r.root.position.set(this.x+n*t.hitchZ,0,this.z+s*t.hitchZ),r.root.rotation.y=this.th;let a=this.wheelRot*(t.wr/.5);for(let o of r.axles)o.rotation.x=a}}};var Ws=20/2,cd=[12597547,2719929,15528177,2899536,8359053,15844367,2600544,9323693,13849600,1118481];function b_(i,t){let e=new Ot(!0),n=new Ot(!0),s=(f,g,v,m,p,_,x,M=0)=>e.add(Zt.box(),Bt(m,p,_,M,0,0,f,g,v),x),r=1845299,a=4.4,o=1.8;i===0?(s(o,.7,a,0,.65,0,t),s(o-.15,.6,2.2,0,1.3,-.2,r),s(o-.1,.08,2,0,1.63,-.2,t)):i===1?(a=4.8,o=1.95,s(o,.9,a,0,.8,0,t),s(o-.1,.75,3.4,0,1.6,-.5,r),s(o-.05,.08,3.3,0,2,-.5,t)):(a=11.5,o=2.5,s(o,2.6,a,0,1.75,0,t),s(o+.02,.9,a-1.5,0,2.3,-.4,r),s(o-.2,1.2,.05,0,2.2,a/2+.01,r));let c=(f,g,v,m,p,_,x)=>n.add(Zt.box(),Bt(m,p,_,0,0,0,f,g,v),x);c(.42,.16,.06,o/2-.3,.75,a/2+.01,16775393),c(.42,.16,.06,-o/2+.3,.75,a/2+.01,16775393),c(.42,.16,.06,o/2-.3,.8,-a/2-.01,16722458),c(.42,.16,.06,-o/2+.3,.8,-a/2-.01,16722458);let l=i===2?.55:.34;for(let f of[-1,1])for(let g of[a/2-(i===2?2.2:.85),-a/2+(i===2?2.5:.85)])e.add(Zt.cyl(10),Bt(f*(o/2-.1),l,g,0,0,Math.PI/2,l*2,.26,l*2),1381653);let h=e.idx.length,u=e.count;for(let f=0;f<n.count*3;f++)e.pos.push(n.pos[f]),e.nor.push(n.nor[f]),e.col.push(n.col[f]);for(let f=0;f<n.count*2;f++)e.uv.push(n.uv[f]);for(let f of n.idx)e.idx.push(f+u);let d=e.geometry();return d.addGroup(0,h,0),d.addGroup(h,n.idx.length,1),{geo:d,L:a,W:o}}function hd(i,t,e,n,s){let r=1-n;return s.x=r*r*i.x+2*r*n*t.x+n*n*e.x,s.z=r*r*i.z+2*r*n*t.z+n*n*e.z,s}var fo=class{constructor(t,e){this.scene=t,this.cars=[];let n=[new tn({vertexColors:!0,shininess:70,specular:5592405}),new he({vertexColors:!0})];this.beamMat=new he({map:Tt.beam(),transparent:!0,opacity:.7,depthWrite:!1,blending:gn});let s=new Ge(6,16);s.rotateX(-Math.PI/2);let r={};for(let a=0;a<e;a++){let o=a%9===4?2:a%3===1?1:0,c=o===2?a%2?1752220:15965202:cd[a*7%cd.length],l=o+"_"+c;r[l]||(r[l]=b_(o,c));let h=new Ft(r[l].geo,n);h.castShadow=!0;let u=new Ft(s,this.beamMat);u.position.set(0,.09,r[l].L/2+8),u.visible=!1,h.add(u),t.add(h);let d={mesh:h,beam:u,L:r[l].L,type:o,off:o===2?7.5:a%2?2.5:7.5,v:0,vmax:o===2?11:12+a%4,x:0,z:0,h:0,stopT:0};this.cars.push(d)}this.p={x:0,z:0},this.q={x:0,z:0}}node(t,e){return{i:t,j:e,x:fe(t),z:fe(e)}}spawnNear(t,e,n,s,r){for(let a=0;a<30;a++){let o=Math.random()*13|0,c=Math.random()*13|0,l=this.node(o,c),h=this.neighbors(l).filter(()=>!0),u=h[Math.random()*h.length|0],d=(l.x+u.x)/2,f=(l.z+u.z)/2,g=Math.hypot(d-e,f-n);if(!(g<s||g>r)){t.A=l,t.B=u,this.makeStraight(t),t.s=Math.random()*t.seg.len*.8,t.v=t.vmax*.6,t.stopT=0;return}}}neighbors(t){let e=[];for(let[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=t.i+n,a=t.j+s;r>=0&&a>=0&&r<=12&&a<=12&&e.push(this.node(r,a))}return e}makeStraight(t){let{A:e,B:n}=t,s=Math.sign(n.x-e.x),r=Math.sign(n.z-e.z),a=-r,o=s,c={x:e.x+s*Ws+a*t.off,z:e.z+r*Ws+o*t.off},l={x:n.x-s*Ws+a*t.off,z:n.z-r*Ws+o*t.off};t.seg={p0:c,p1:{x:(c.x+l.x)/2,z:(c.z+l.z)/2},p2:l,len:Math.hypot(l.x-c.x,l.z-c.z),turn:!1},t.dir={x:s,z:r}}makeTurn(t){let{A:e,B:n}=t,s=this.neighbors(n).filter(m=>!(m.i===e.i&&m.j===e.j)),r=s[Math.random()*s.length|0],a=t.dir,o=Math.sign(r.x-n.x),c=Math.sign(r.z-n.z),l={x:-a.z,z:a.x},h={x:-c,z:o},u=t.seg.p2,d={x:n.x+o*Ws+h.x*t.off,z:n.z+c*Ws+h.z*t.off},f=o===a.x&&c===a.z,g=f?{x:(u.x+d.x)/2,z:(u.z+d.z)/2}:{x:n.x+(l.x+h.x)*t.off,z:n.z+(l.z+h.z)*t.off},v=f?20:Math.hypot(d.x-u.x,d.z-u.z)*1.15;t.seg={p0:u,p1:g,p2:d,len:v,turn:!f},t.next={A:n,B:r}}update(t,e,n){let s=this.p,r=this.q;for(let a of this.cars){if(!a.seg){this.spawnNear(a,e.x,e.z,120,420);continue}if(Math.hypot(a.x-e.x,a.z-e.z)>520){this.spawnNear(a,e.x,e.z,180,420);continue}let c=Math.sin(a.h),l=Math.cos(a.h),h=!1,u=9+a.v*1.2+a.L/2,d=(m,p,_)=>{let x=m-a.x,M=p-a.z,A=x*c+M*l;if(A<=0||A>u+_)return;Math.abs(x*l-M*c)<1.6+_&&(h=!0)};for(let m of n)d(m.x,m.z,m.r);if(!h)for(let m of this.cars)m!==a&&m.seg&&d(m.x,m.z,m.L*.35);a.hit&&(a.stopT=2.5,a.hit=!1),a.stopT-=t;let f=h||a.stopT>0?0:a.seg.turn?6:a.vmax,g=f>a.v?2.5:7;for(a.v+=Math.sign(f-a.v)*Math.min(Math.abs(f-a.v),g*t),a.s+=a.v*t;a.s>=a.seg.len;)a.s-=a.seg.len,a.seg.turn!==void 0&&a.next&&a.inTurn?(a.A=a.next.A,a.B=a.next.B,a.next=null,a.inTurn=!1,this.makeStraight(a)):(this.makeTurn(a),a.inTurn=!0);let v=a.s/a.seg.len;hd(a.seg.p0,a.seg.p1,a.seg.p2,v,s),hd(a.seg.p0,a.seg.p1,a.seg.p2,Math.min(1,v+.02),r),Math.hypot(r.x-s.x,r.z-s.z)>1e-4&&(a.h=Math.atan2(r.x-s.x,r.z-s.z)),a.x=s.x,a.z=s.z,a.mesh.position.set(a.x,0,a.z),a.mesh.rotation.y=a.h}}setNight(t){for(let e of this.cars)e.beam.visible=t>.35}obstacles(t){t.length=0;for(let e of this.cars){if(!e.seg)continue;let n=Math.sin(e.h),s=Math.cos(e.h),r=e.type===2?3:2;for(let a=0;a<r;a++){let o=(a/(r-1)-.5)*(e.L-2);t.push({x:e.x+n*o,z:e.z+s*o,r:e.type===2?1.3:1,car:e,set hit(c){this.car.hit=c}})}}return t}};var Mn=13,Sc=(i,t)=>i*Mn+t;function ud(i,t){let e=h=>Math.max(0,Math.min(12,Math.round((h+840)/140))),n=h=>Math.max(0,Math.min(11,Math.floor((h+840)/140))),s=e(i),r=e(t),a=Math.abs(i-fe(s)),o=Math.abs(t-fe(r));if(a<=o){let h=n(t),u=Math.max(-840,Math.min(840,t));return{p:{x:fe(s),z:u},a:[s,h],b:[s,h+1]}}let c=n(i);return{p:{x:Math.max(-840,Math.min(840,i)),z:fe(r)},a:[c,r],b:[c+1,r]}}var Ec=(i,t)=>({x:fe(i),z:fe(t)}),wc=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z);function Tc(i,t,e){let n=ud(i,t),s=ud(e.entry.x,e.entry.z),r=new Float32Array(Mn*Mn).fill(1/0),a=new Int32Array(Mn*Mn).fill(-1),o=new Uint8Array(Mn*Mn);for(let g of[n.a,n.b])r[Sc(g[0],g[1])]=wc(n.p,Ec(g[0],g[1]));for(;;){let g=-1,v=1/0;for(let _=0;_<Mn*Mn;_++)!o[_]&&r[_]<v&&(v=r[_],g=_);if(g<0)break;o[g]=1;let m=g/Mn|0,p=g%Mn;for(let[_,x]of[[1,0],[-1,0],[0,1],[0,-1]]){let M=m+_,A=p+x;if(M<0||A<0||M>12||A>12)continue;let T=Sc(M,A),w=v+140;w<r[T]&&(r[T]=w,a[T]=g)}}let c=-1,l=1/0;for(let g of[s.a,s.b]){let v=Sc(g[0],g[1]),m=r[v]+wc(Ec(g[0],g[1]),s.p);m<l&&(l=m,c=v)}let h=[];for(let g=c;g>=0;g=a[g])h.unshift(Ec(g/Mn|0,g%Mn));let d=n.a[0]===s.a[0]&&n.a[1]===s.a[1]&&n.b[0]===s.b[0]&&n.b[1]===s.b[1]?[n.p,s.p]:[n.p,...h,s.p];d.unshift({x:i,z:t}),d.push({x:e.zone.x,z:e.zone.z});let f=0;for(let g=1;g<d.length;g++)f+=wc(d[g-1],d[g]);return{path:d,len:f}}var po=class{constructor(){this.ctx=null,this.volume=.7}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination),this.engGain=e.createGain(),this.engGain.gain.value=0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=400,this.filter.Q.value=4,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="square";let n=e.createGain();n.gain.value=.35,this.o1.connect(this.filter),this.o2.connect(n).connect(this.filter);let s=e.createBuffer(1,e.sampleRate,e.sampleRate),r=s.getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;this.noise=e.createBufferSource(),this.noise.buffer=s,this.noise.loop=!0;let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=180,this.nGain=e.createGain(),this.nGain.gain.value=.25,this.noise.connect(a).connect(this.nGain).connect(this.filter),this.filter.connect(this.engGain).connect(this.master),this.o1.start(),this.o2.start(),this.noise.start()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}engine(t,e,n=!0){if(!this.ctx)return;let s=this.ctx.currentTime,r=28+t*70;this.o1.frequency.setTargetAtTime(r,s,.05),this.o2.frequency.setTargetAtTime(r*.5,s,.05),this.filter.frequency.setTargetAtTime(220+t*900+e*400,s,.08),this.engGain.gain.setTargetAtTime(n?.13+e*.08:0,s,.1)}horn(t){if(this.ctx){if(t&&!this.hornNodes){let e=this.ctx.createGain();e.gain.value=.18;let n=this.ctx.createOscillator(),s=this.ctx.createOscillator();n.type=s.type="sawtooth",n.frequency.value=233,s.frequency.value=311;let r=this.ctx.createBiquadFilter();r.frequency.value=1800,n.connect(r),s.connect(r),r.connect(e).connect(this.master),n.start(),s.start(),this.hornNodes=[n,s,e]}else if(!t&&this.hornNodes){let[e,n,s]=this.hornNodes;s.gain.setTargetAtTime(0,this.ctx.currentTime,.03),e.stop(this.ctx.currentTime+.2),n.stop(this.ctx.currentTime+.2),this.hornNodes=null}}}beep(t=880,e=.12,n="sine",s=.25){if(!this.ctx)return;let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n,r.frequency.value=t,a.gain.value=s,a.gain.setTargetAtTime(0,this.ctx.currentTime+e*.6,e*.3),r.connect(a).connect(this.master),r.start(),r.stop(this.ctx.currentTime+e*2)}crash(t){if(!this.ctx)return;let e=this.ctx,s=e.createBuffer(1,e.sampleRate*.35,e.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);let a=e.createBufferSource();a.buffer=s;let o=e.createBiquadFilter();o.frequency.value=900;let c=e.createGain();c.gain.value=Math.min(.9,.2+t/60),a.connect(o).connect(c).connect(this.master),a.start()}airBrake(){if(!this.ctx)return;let t=this.ctx,n=t.createBuffer(1,t.sampleRate*.6,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*(1-c/s.length);let r=t.createBufferSource();r.buffer=n;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let o=t.createGain();o.gain.value=.22,r.connect(a).connect(o).connect(this.master),r.start()}starter(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=t.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(14,e),n.frequency.linearRampToValueAtTime(22,e+.7),n.frequency.linearRampToValueAtTime(48,e+1.1),r.frequency.value=600,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.35,e+.1),s.gain.setValueAtTime(.35,e+1),s.gain.linearRampToValueAtTime(0,e+1.4),n.connect(r).connect(s).connect(this.master),n.start(e),n.stop(e+1.5)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}};var st=i=>document.getElementById(i),Oc="drizzieTruck.v1",en=i=>"R$ "+Math.round(i).toLocaleString("pt-BR"),En=(i,t,e)=>Math.max(t,Math.min(e,i)),mo={money:3e3,xp:0,level:1,owned:["urbano"],truck:"urbano",job:null,pos:null,name:"Motorista",clock:18.6,stats:{deliveries:0,km:0,earned:0,tons:0,crashes:0},settings:{quality:"auto",volume:.7,fps:!1,steer:"wheel",camera:0,time:"cycle",gearbox:"manual"}};function S_(){try{let i=JSON.parse(localStorage.getItem(Oc));if(i&&i.level)return ts(An(An({},mo),i),{stats:An(An({},mo.stats),i.stats),settings:An(An({},mo.settings),i.settings)})}catch(i){}return JSON.parse(JSON.stringify(mo))}var z=S_();function qe(){try{z.pos=Q?{x:Q.x,z:Q.z,h:Q.h}:z.pos,localStorage.setItem(Oc,JSON.stringify(z))}catch(i){}}var E_={low:{pr:1,minPr:.75,shadows:!1,shadowSize:0,tex:512,aniso:2,traffic:10,fogNear:160,fogFar:560,far:900},medium:{pr:1.5,minPr:.85,shadows:!0,shadowSize:1024,tex:1024,aniso:4,traffic:16,fogNear:240,fogFar:820,far:1500},high:{pr:2,minPr:1,shadows:!0,shadowSize:2048,tex:1024,aniso:8,traffic:24,fogNear:320,fogFar:1300,far:2600}};function w_(){let i="";try{let n=document.createElement("canvas"),s=n.getContext("webgl")||n.getContext("experimental-webgl"),r=s&&s.getExtension("WEBGL_debug_renderer_info");i=(r&&s.getParameter(r.UNMASKED_RENDERER_WEBGL)||s&&s.getParameter(s.RENDERER)||"").toLowerCase();let a=s&&s.getExtension("WEBGL_lose_context");a&&a.loseContext()}catch(n){}let t=navigator.deviceMemory||4,e=navigator.hardwareConcurrency||4;return/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(i)||t<=2||e<=4?"low":t>=6&&e>=8&&/adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(i)?"high":"medium"}var fi=z.settings.quality==="auto"?w_():z.settings.quality,Ce=E_[fi],De,Xe,Sn,dn,Q,Fr,ln,Ys,Lr,Ir,Di,pe=null,On=0,ee=new po;ee.volume=z.settings.volume;var Se="loading",Qi=[],Bn=null,Dr=0;var $e,zn,Rr=0,dd=[],Jt={gas:!1,brake:!1,left:!1,right:!1,tilt:0,wheel:0,wheelHeld:!1,gear:"D",hand:!1},bn={throttle:0,brake:0,steer:0,gear:"D",handbrake:!1},qs=null,te={yaw:0,orbit:0,orbitT:0,mode:z.settings.camera||0,pos:new L,look:new L},di=Ce.pr,Xs=(i,t)=>new Promise(e=>{st("loadbar").style.width=i+"%",st("loadmsg").textContent=t,setTimeout(e,16)});async function T_(){await Xs(5,"Iniciando gr\xE1ficos\u2026");let i=st("gl");try{De=new mr({canvas:i,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(n){st("loadmsg").textContent='Seu aparelho n\xE3o suporta WebGL. Atualize o "Android System WebView" na Play Store.';return}di=Math.min(window.devicePixelRatio||1,Ce.pr),De.setPixelRatio(di),De.setSize(window.innerWidth,window.innerHeight,!1),De.outputColorSpace=je,De.toneMapping=cc,De.toneMappingExposure=1,De.shadowMap.enabled=Ce.shadows,De.shadowMap.type=fi==="high"?lc:Ja;let t=De.capabilities.getMaxAnisotropy();sd(Ce.tex,Math.min(t,Ce.aniso)),Xe=new xr;let e=new mt(12375786);if(Xe.background=e,Xe.fog=new gr(e,Ce.fogNear,Ce.fogFar),Sn=new Fe(58,window.innerWidth/window.innerHeight,.5,Ce.far),U_(),Lr=new wr(14413567,6122309,1.25),Xe.add(Lr),ln=new zs(16773336,2.6),ln.position.set(180,260,120),Ce.shadows){ln.castShadow=!0,ln.shadow.mapSize.set(Ce.shadowSize,Ce.shadowSize);let n=fi==="high"?70:55;Object.assign(ln.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:10,far:600}),ln.shadow.bias=-6e-4,ln.shadow.normalBias=.04}Xe.add(ln,ln.target),await Xs(20,"Gerando texturas HD\u2026"),Tt.road(),Tt.intersection(),Tt.grass(),Tt.facade(0),Tt.facade(1),Tt.facade(2),Tt.facade(3),await Xs(45,"Construindo a cidade\u2026"),dn=new oo(Xe,Ce),await Xs(70,"Ligando o motor\u2026"),Q=new ho(Xe,io[z.truck]||Pn[0],Ce.shadows),fi!=="low"&&(Di=new Ya(16773590,0,70,.55,.6,1.2),Di.target=new Te,Q.onModel=n=>{n.root.add(Di,Di.target),Di.position.set(0,n.y0+.3,n.zf+.4),Di.target.position.set(0,0,n.zf+22)},Q.onModel(Q.model)),N_(),Fr=new fo(Xe,Ce.traffic),F_(),await Xs(85,"Desenhando o mapa\u2026"),V_(),z.job&&z.job.phase==="deliver"&&Q.attach(yn[z.job.cargo]),Qi=zc(),G_(),q_(),L_(),Bc(z.clock),await Xs(100,"Pronto!"),De.compile(Xe,Sn),st("loading").classList.add("hidden"),Or(),Mo=performance.now(),requestAnimationFrame(wd)}var A_=new mt(12375786),R_=new mt(14916203),C_=new mt(659744),Cr=new mt;function Bc(i){let t=z.settings.time;t==="day"?i=12:t==="night"?i=23:t==="dusk"&&(i=18.3);let e=Math.sin((i-6)/12*Math.PI),n=En(e*2.4+.25,0,1),s=En(1-Math.abs(e)*4,0,1)*(e>-.25?1:0);On=1-n,ln.intensity=2.7*n+.55*On,On>.6?ln.color.setHex(9414872):ln.color.setHSL(.09,.6+s*.3,.85-s*.2),Lr.intensity=.62+.65*n,Lr.color.setHex(14413567).lerp(Cr.setHex(5928104),On),Lr.groundColor.setHex(6122309).lerp(Cr.setHex(1843760),On),Cr.copy(C_).lerp(A_,n).lerp(R_,s*.55),Xe.background.copy(Cr),Xe.fog.color.copy(Cr),Ys.material.color.setRGB(.07,.09,.16).lerp(new mt(1,1,1),n).lerp(new mt(1.15,.72,.55),s*.6),Ir.material.opacity=En(On*1.3-.3,0,1),Ir.visible=Ir.material.opacity>.01,De.toneMappingExposure=1+On*.25,dn.setNight(On),Fr.setNight(On);let r=qs!==null?qs:On>.35;Q.lightsOn!==r&&Q.setLights(r),Di&&(Di.intensity=Q.lightsOn?60*(.35+On):0)}function P_(){let t=[],e=Ce.far*.9;for(let s=0;s<900;s++){let r=Math.random()*Math.PI*2,a=Math.random()*.9+.08,o=Math.sqrt(1-a*a);t.push(Math.cos(r)*o*e,a*e,Math.sin(r)*o*e)}let n=new Pe;n.setAttribute("position",new Kt(t,3)),Ir=new Ba(n,new _r({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),Ys.add(Ir)}function L_(){let i=new xr;i.background=new mt(397340),i.fog=new gr(397340,30,70);let t=new Fe(38,window.innerWidth/window.innerHeight,.3,200),e=new Ft(new Wa(40,48),new tn({color:860211,shininess:120,specular:4891608,transparent:!0,opacity:.86}));e.rotation.x=-Math.PI/2,i.add(e);let n=new Ft(new vn(24,24,22,40,1,!0,Math.PI*.55,Math.PI*.9),new he({map:Tt.backdrop(),side:He}));n.position.y=10,i.add(n);let s=new he({color:14677759}),r=new he({map:Tt.glow(),color:6277375,transparent:!0,depthWrite:!1,blending:gn});for(let u of[2.1,6.4]){let d=new Ft(new _n(60,.18,.1),s);d.position.set(0,u,-14),i.add(d);let f=new Ft(new Ge(64,3.2),r);f.position.set(0,u,-13.9),i.add(f)}let a=new Ft(new qa(6.4,6.6,64),new he({color:4175359,transparent:!0,opacity:.5}));a.rotation.x=-Math.PI/2,a.position.y=.02,i.add(a),i.add(new wr(10474495,726566,1.1));let o=new zs(16777215,2.4);o.position.set(8,10,10),i.add(o);let c=new zs(6277375,2.2);c.position.set(-6,5,-10),i.add(c);let l=new Za(16724048,30,25);l.position.set(-7,2,4),i.add(l);let h=new ke;i.add(h),pe={scene:i,cam:t,turn:h,idx:Math.max(0,Pn.findIndex(u=>u.id===z.truck)),yaw:-.6,drag:null},vo(pe.idx)}function vo(i){pe.idx=(i+Pn.length)%Pn.length;let t=Pn[pe.idx];pe.turn.clear();let e=bc(t);e.blob.visible=!1;let n=e.zf-e.rearEnd;e.root.position.z=-(e.zf+e.rearEnd)/2;let s=new ke;s.add(e.root);let r=e.root.clone();r.scale.y=-1,s.add(r),pe.turn.add(s),pe.len=n,I_()}function I_(){let i=Pn[pe.idx],t=z.owned.includes(i.id),e=z.truck===i.id;st("tiname").textContent=i.name,st("tispecs").innerHTML=`<b>${i.hp}</b> cv \u2022 <b>${i.cap}</b> t \u2022 <b>${i.vmax}</b> km/h \u2022 ${i.rigid?"R\xEDgido ba\xFA":"Cavalo "+i.cfg}`;let n;e?n='<span class="tibtn"><span>EM USO \u2713</span></span>':t?n=`<button class="tibtn" data-act="use" data-arg="${i.id}"><span>USAR ESTE</span></button>`:i.level>z.level?n=`<span class="tibtn lock"><span>\u{1F512} N\xCDVEL ${i.level}</span></span>`:n=`<button class="tibtn buy" data-act="buy" data-arg="${i.id}" ${z.money<i.price?'disabled style="opacity:.5"':""}><span>COMPRAR ${en(i.price)}</span></button>`,st("tiaction").innerHTML=n}function D_(i){pe.drag||(pe.yaw+=i*.25),pe.turn.rotation.y=pe.yaw;let t=window.innerWidth,e=window.innerHeight;pe.cam.aspect=t/e;let n=11+pe.len*1;pe.cam.position.set(-n*.2,3,n),pe.cam.lookAt(-n*.2-n*.1,1.6,0),pe.cam.updateProjectionMatrix()}function U_(){let i=new Ci(Ce.far*.95,24,12),t=new mt(4030404),e=new mt(10274536),n=new mt(14543344),s=[],r=i.attributes.position,a=new mt;for(let o=0;o<r.count;o++){let c=r.getY(o)/(Ce.far*.95);c>.25?a.copy(e).lerp(t,Math.min(1,(c-.25)/.75)):a.copy(n).lerp(e,Math.max(0,c/.25)),s.push(a.r,a.g,a.b)}i.setAttribute("color",new Kt(s,3)),Ys=new Ft(i,new he({vertexColors:!0,side:He,fog:!1,depthWrite:!1})),Ys.renderOrder=-1,Xe.add(Ys),P_()}function N_(){if(z.pos&&isFinite(z.pos.x)&&dn.resolveCircle({x:z.pos.x,z:z.pos.z},1.5,Md)<=0){Q.place(z.pos.x,z.pos.z,z.pos.h);return}let i=dn.depots.garagem.zone;Q.place(i.x-8,i.z,Math.PI/2)}function F_(){$e=new ke;let i=new Ft(new Ge(1,1),new he({map:Tt.zone(),color:16761856,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));i.rotation.x=-Math.PI/2,i.position.y=.08,$e.add(i),$e.zone=i;let t=new Ft(new vn(3,3,120,20,1,!0),new he({color:16758531,transparent:!0,opacity:.18,depthWrite:!1,side:cn,fog:!1,blending:gn}));t.position.y=60,$e.add(t);let e=new Ft(new Ri(1.6,3.2,4),new he({color:16761856}));e.rotation.x=Math.PI,$e.add(e),$e.cone=e,$e.visible=!1,Xe.add($e);let n=new yr;n.moveTo(0,1.6),n.lineTo(1.3,-.6),n.lineTo(0,0),n.lineTo(-1.3,-.6),n.closePath();let s=new $a(n);s.rotateX(-Math.PI/2),zn=new Ft(s,new he({color:4120698,transparent:!0,opacity:.9,side:cn,depthTest:!1})),zn.renderOrder=10,zn.visible=!1,Xe.add(zn)}function O_(i,t){let e=dn.depots[i],n=dn.depots[t];return Tc(e.zone.x,e.zone.z,n).len}function B_(i,t,e){let n=O_(t,e),s=n/1e3,r=Math.round((350+s*(900+i.t*115)*i.rate)/10)*10,a=Math.round(50+i.t*4+s*70),o=Math.round(n/8.5+90+i.t*1.5);return{cargo:i.id,from:t,to:e,dist:n,pay:r,xp:a,time:o}}function zc(){let i=[],t=Gs.filter(s=>s.lvl<=z.level+4),e=new Set,n=0;for(;i.length<10&&n++<200;){let s=t.filter(h=>h.lvl<=z.level),r=Math.random()<.78&&s.length?s:t,a=r[Math.random()*r.length|0],o=a.from[Math.random()*a.from.length|0],c=a.to[Math.random()*a.to.length|0],l=a.id+o+c;o===c||e.has(l)||(e.add(l),i.push(B_(a,o,c)))}return i.sort((s,r)=>(Ic(s)?0:1)-(Ic(r)?0:1)||yn[s.cargo].t-yn[r.cargo].t),i}function kc(i,t=Q.def){let e=yn[i.cargo];return e.lvl>z.level?`Requer n\xEDvel ${e.lvl}`:e.t>t.cap?`Caminh\xE3o fraco (m\xE1x. ${t.cap} t)`:t.rigid&&e.trailer!=="box"?"Requer cavalo mec\xE2nico":null}var Ic=i=>!kc(i);function xd(i){let t=Qi[i];!t||!Ic(t)||z.job||(z.job=ts(An({},t),{phase:"pickup",damage:0,tLeft:t.time}),Qi.splice(i,1),ee.beep(660,.1),ee.beep(990,.12),Ur(),kn(`Frete aceito! V\xE1 at\xE9 <b>${Li[t.from].name}</b>`),Dr=0,qe())}function _d(){if(!z.job)return;let i=z.job.phase==="deliver"?Math.round(z.job.pay*.25):0;z.money=Math.max(0,z.money-i),Q.detach(),z.job=null,$e.visible=!1,zn.visible=!1,kn(i?`Frete cancelado. Multa de ${en(i)}`:"Frete cancelado"),qe()}function bo(){return z.job?dn.depots[z.job.phase==="pickup"?z.job.from:z.job.to]:null}function vd(i){let t=Q.center({x:0,z:0}),e=i.zone;return Math.abs(t.x-e.x)<e.w/2+3&&Math.abs(t.z-e.z)<e.d/2+3}function xo(i){let t=z.job;if(!t){st("progress").classList.add("hidden");return}t.phase==="deliver"&&(t.tLeft-=i);let e=bo(),n=vd(e),s=Q.speedKmh<1.5;if(n&&s){Rr+=i;let r=2.2;st("progress").classList.remove("hidden"),st("progtext").textContent=t.phase==="pickup"?"Carregando\u2026":"Descarregando\u2026",st("progarc").style.strokeDashoffset=264*(1-Math.min(1,Rr/r)),Rr>=r&&(Rr=0,st("progress").classList.add("hidden"),t.phase==="pickup"?(Q.attach(yn[t.cargo]),t.phase="deliver",t.tLeft=t.time,ee.airBrake(),kn(`Carga engatada: <b>${yn[t.cargo].name}</b> (${yn[t.cargo].t} t)`),kn(`Entregue em <b>${Li[t.to].name}</b>`),Dr=0,qe()):z_())}else Rr=0,st("progress").classList.add("hidden"),n&&!s&&Q.speedKmh<25&&!xo.warned&&(kn("Pare na \xE1rea marcada"),xo.warned=!0),n||(xo.warned=!1)}function z_(){let i=z.job,t=yn[i.cargo],e=i.pay,n=Math.round(e*i.damage/100),s=i.tLeft>=0,r=s?Math.round(e*.15):-Math.round(e*.2),a=Math.max(0,e-n+r),o=Math.round(i.xp*(i.damage<5?1.2:1)*(s?1:.7));z.money+=a,z.stats.deliveries++,z.stats.earned+=a,z.stats.tons+=t.t,Q.detach(),z.job=null,$e.visible=!1,zn.visible=!1,ee.airBrake(),ee.beep(880,.12),setTimeout(()=>ee.beep(1320,.18),120);let c=[["Pagamento base",en(e)],[s?"B\xF4nus no prazo (+15%)":"Atraso (\u221220%)",(r>=0?"+":"")+en(r)],[`Avaria da carga (${i.damage.toFixed(0)}%)`,"\u2212"+en(n)],["Experi\xEAncia",`+${o} XP`]],l=k_(o);Zs(`<h2>Entrega conclu\xEDda! \u2705</h2><div>${t.icon} ${t.name} \u2022 ${t.t} t \u2192 ${Li[i.to].name}</div>
    <div class="big">${en(a)}</div>
    <div class="lines">${c.map(h=>`<div><span>${h[0]}</span><b>${h[1]}</b></div>`).join("")}</div>
    <button class="btn" data-act="popjobs">Pr\xF3ximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,l),Qi=zc(),qe()}function k_(i){z.xp+=i;let t=[];for(;z.level<30&&z.xp>=Ar(z.level);)z.xp-=Ar(z.level),z.level++,t.push(z.level);return t}function H_(i){let t=Gs.filter(n=>n.lvl===i),e=Pn.filter(n=>n.level===i);ee.beep(523,.12),setTimeout(()=>ee.beep(659,.12),120),setTimeout(()=>ee.beep(784,.25),240),Zs(`<h2>\u2B50 N\xEDvel ${i}!</h2><div>Voc\xEA subiu de n\xEDvel.</div>
    <div class="lines">${t.map(n=>`<div><span>${n.icon} Nova carga: ${n.name}</span><b>${n.t} t</b></div>`).join("")}
    ${e.map(n=>`<div><span>\u{1F69A} Novo caminh\xE3o: ${n.name}</span><b>${en(n.price)}</b></div>`).join("")}
    ${!t.length&&!e.length?"<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>":""}</div>
    <button class="btn" data-act="popclose">Show!</button>`)}function G_(){let i=(l,h)=>{let u=f=>{if(f.preventDefault(),Jt[h]=!0,l.classList.add("on"),ee.init(),l.setPointerCapture&&f.pointerId!==void 0)try{l.setPointerCapture(f.pointerId)}catch(g){}},d=f=>{f.preventDefault(),Jt[h]=!1,l.classList.remove("on")};l.addEventListener("pointerdown",u),l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d),l.addEventListener("lostpointercapture",d),l.addEventListener("contextmenu",f=>f.preventDefault())};i(st("gas"),"gas"),i(st("brake"),"brake"),i(st("left"),"left"),i(st("right"),"right");let t=st("wheel"),e=null,n=l=>{let h=t.getBoundingClientRect();return Math.atan2(l.clientX-(h.left+h.width/2),-(l.clientY-(h.top+h.height/2)))};t.addEventListener("pointerdown",l=>{l.preventDefault(),ee.init();let h=t.getBoundingClientRect();Math.hypot(l.clientX-(h.left+h.width/2),l.clientY-(h.top+h.height/2))<h.width*.17?(ee.horn(!0),e={horn:!0,id:l.pointerId}):(e={id:l.pointerId,a0:n(l),w0:Jt.wheel},Jt.wheelHeld=!0);try{t.setPointerCapture(l.pointerId)}catch(d){}}),t.addEventListener("pointermove",l=>{if(!e||e.horn||l.pointerId!==e.id)return;let h=n(l)-e.a0;h=Math.atan2(Math.sin(h),Math.cos(h)),Jt.wheel=En(e.w0+h*180/Math.PI,-150,150),e.a0=n(l),e.w0=Jt.wheel});let s=()=>{e&&e.horn&&ee.horn(!1),e=null,Jt.wheelHeld=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s),document.querySelectorAll("#gearsel button").forEach(l=>l.addEventListener("pointerdown",h=>{h.preventDefault(),_o(l.dataset.g)})),st("ic-hand").addEventListener("pointerdown",l=>{l.preventDefault(),Jt.hand=!Jt.hand,ee.airBrake()}),st("lightsbtn").addEventListener("pointerdown",l=>{l.preventDefault(),qs=!Q.lightsOn,Q.setLights(qs),ee.beep(1400,.04,"square",.08)}),st("enginebtn").addEventListener("click",pd);let r={ArrowUp:"gas",KeyW:"gas",ArrowDown:"brake",KeyS:"brake",Space:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",l=>{ee.init(),r[l.code]&&(Jt[r[l.code]]=!0,l.preventDefault()),l.code==="KeyH"&&ee.horn(!0),l.code==="KeyR"&&!l.repeat&&_o(Jt.gear==="R"?"D":"R"),l.code==="KeyN"&&!l.repeat&&_o("N"),l.code==="KeyE"&&!l.repeat&&pd(),l.code==="KeyL"&&!l.repeat&&(qs=!Q.lightsOn,Q.setLights(qs)),l.code==="KeyP"&&!l.repeat&&(Jt.hand=!Jt.hand),l.code==="KeyC"&&!l.repeat&&yd(),l.code==="KeyM"&&!l.repeat&&Sd(),l.code==="Escape"&&fd()}),window.addEventListener("keyup",l=>{r[l.code]&&(Jt[r[l.code]]=!1),l.code==="KeyH"&&ee.horn(!1)});let a=st("gl"),o=null;a.addEventListener("pointerdown",l=>{o={x:l.clientX,id:l.pointerId},Se==="title"&&(pe.drag=!0)}),window.addEventListener("pointermove",l=>{if(!(!o||l.pointerId!==o.id)){if(Se==="title"){pe.yaw+=(l.clientX-o.x)*.01,o.x=l.clientX;return}te.orbit+=(l.clientX-o.x)*.008,o.x=l.clientX,te.orbitT=1.8}});let c=l=>{o&&l.pointerId===o.id&&(o=null,pe&&(pe.drag=null))};window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("devicemotion",l=>{var f,g;let h=l.accelerationIncludingGravity;if(!h||h.y==null)return;let u=(g=(f=screen.orientation&&screen.orientation.angle)!=null?f:window.orientation)!=null?g:90,d=u===90?1:u===270||u===-90?-1:0;Jt.tilt=En(d?-h.y*d/4.5:-h.x/4.5,-1,1)}),window.addEventListener("resize",Td),document.addEventListener("visibilitychange",()=>{document.hidden?(ee.suspend(),qe()):(ee.resume(),Mo=performance.now())}),window.addEventListener("pagehide",qe),window.onAndroidBack=()=>fd()}function fd(){return st("bigmap").classList.contains("hidden")?st("popup").classList.contains("hidden")?st("modal").classList.contains("hidden")?Se==="drive"?(Pr("settings"),!0):(qe(),!1):(Ur(),!0):(Uc(),!0):(st("bigmap").classList.add("hidden"),!0)}function _o(i){Jt.gear=i,document.querySelectorAll("#gearsel button").forEach(t=>t.classList.toggle("on",t.dataset.g===i)),ee.beep(i==="R"?500:700,.05,"square",.06)}var $s=0;function pd(){Q.engineOn||$s>0||(ee.init(),$s=1.1,st("enginebtn").classList.add("starting"),ee.starter())}function Dc(i){let t=(s,r,a,o)=>s+En(r-s,-o*i,a*i),e=Se==="drive";$s>0&&($s-=i,$s<=0&&(Q.engineOn=!0,st("enginebtn").classList.add("hidden"),st("enginebtn").classList.remove("starting"))),bn.throttle=t(bn.throttle,e&&Jt.gas?1:0,2.5,6),bn.brake=t(bn.brake,e&&Jt.brake?1:0,6,8),bn.gear=z.settings.gearbox==="auto"?"auto":Jt.gear,bn.handbrake=Jt.hand,e&&Jt.gas&&!Q.engineOn&&$s<=0&&!Dc.warned&&(kn("Ligue o motor primeiro"),Dc.warned=!0),Jt.wheelHeld||(Jt.wheel*=Math.max(0,1-i*7));let n=0;z.settings.steer==="tilt"?(n=Math.abs(Jt.tilt)<.06?0:Jt.tilt,Jt.wheel=-n*150):z.settings.steer==="wheel"&&(n=-Jt.wheel/150),n+=(Jt.left?1:0)-(Jt.right?1:0),n=e?En(n,-1,1):0,bn.steer=z.settings.steer==="wheel"&&Jt.wheelHeld?n:t(bn.steer,n,2.4,4),Math.abs(bn.steer)<.01&&n===0&&(bn.steer=0),st("wheel").style.transform=`rotate(${(-bn.steer*150).toFixed(1)}deg)`}function yd(){te.mode=(te.mode+1)%3,z.settings.camera=te.mode,kn(["C\xE2mera: Persegui\xE7\xE3o","C\xE2mera: A\xE9rea","C\xE2mera: Cabine"][te.mode],1200)}var Ac={x:0,z:0},Md={x:0,z:0};function Hc(i,t=!1){let e=Q.model;te.orbitT>0?te.orbitT-=i:te.orbit*=Math.max(0,1-i*2.5);let n=Q.h;Q.v<-.5&&te.mode!==2&&(n=Q.h);let s=t?1:1-Math.exp(-i*(te.mode===2?12:2.6)),r=n+te.orbit-te.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),te.yaw+=r*s;let a=Math.sin(Q.h),o=Math.cos(Q.h);if(te.mode===2){let c=Q.x+a*(e.zf-.7)-Math.cos(Q.h)*.45,l=Q.z+o*(e.zf-.7)+Math.sin(Q.h)*.45;Sn.position.set(c,Q.def.id==="urbano"?2.3:2.75,l);let h=Math.sin(te.yaw),u=Math.cos(te.yaw);Sn.lookAt(c+h*20,2,l+u*20),Sn.fov=70}else{let c=Q.trailer?Q.trailer.Lt:0,l=(te.mode===0?11:20)+c*(te.mode===0?.75:1.1),h=(te.mode===0?4.6:14)+c*(te.mode===0?.18:.4),u=Q.x+a*e.wb*.5-(Q.trailer?Math.sin(Q.th)*c*.25:0),d=Q.z+o*e.wb*.5-(Q.trailer?Math.cos(Q.th)*c*.25:0),f=Math.sin(te.yaw),g=Math.cos(te.yaw);for(let _=0;_<6&&(Ac.x=u-f*l,Ac.z=d-g*l,!(dn.resolveCircle(Ac,.6,Md)<=0||h>30));_++)l*=.8;let v=u-f*l,m=d-g*l,p=t?1:1-Math.exp(-i*8);te.pos.x+=(v-te.pos.x)*p,te.pos.z+=(m-te.pos.z)*p,te.pos.y+=(h-te.pos.y)*p,Sn.position.copy(te.pos),Sn.lookAt(u,te.mode===1?1.5:1.3,d),Sn.fov=58+Math.min(8,Q.speedKmh*.08)}Sn.updateProjectionMatrix(),Ce.shadows&&(ln.target.position.set(Q.x,0,Q.z),ln.position.set(Q.x+150,170,Q.z+95)),Ys.position.copy(Sn.position)}var ji,ui,yo=70;function V_(){ji=document.createElement("canvas"),ji.width=ji.height=1024;let t=ji.getContext("2d");ui=1024/(2*(840+yo));let n=r=>(r+840+yo)*ui;t.fillStyle="#3f5d36",t.fillRect(0,0,1024,1024),t.fillStyle="#2d6f93",t.fillRect(0,n(900),1024,1024);let s={downtown:"#8b95a3",residential:"#a8a294",park:"#4f8a3a",farm:"#86803f",industrial:"#8d8473",port:"#7b8790"};for(let r=0;r<12;r++)for(let a=0;a<12;a++)t.fillStyle=s[no(r,a)],t.fillRect(n(fe(r)+10),n(fe(a)+10),120*ui,120*ui);for(let r of Ki){let a=dn.depots[r.id],[o,c,l,h]=a.lot;t.fillStyle="#cfc9bd",t.fillRect(n(o),n(c),(l-o)*ui,(h-c)*ui)}t.strokeStyle="#2b2d31",t.lineWidth=20*ui,t.lineCap="square";for(let r=0;r<=12;r++){let a=n(fe(r));t.beginPath(),t.moveTo(a,n(-840)),t.lineTo(a,n(840)),t.stroke(),t.beginPath(),t.moveTo(n(-840),a),t.lineTo(n(840),a),t.stroke()}t.strokeStyle="rgba(232,185,35,0.55)",t.lineWidth=1;for(let r=0;r<=12;r++){let a=n(fe(r));t.beginPath(),t.moveTo(a,n(-840)),t.lineTo(a,n(840)),t.stroke(),t.beginPath(),t.moveTo(n(-840),a),t.lineTo(n(840),a),t.stroke()}}function bd(i,t,e,n,s,r){i.fillStyle=n,i.strokeStyle="#fff",i.lineWidth=2,i.beginPath(),i.arc(t,e,s,0,7),i.fill(),i.stroke(),r&&(i.font=`700 ${s*1.1}px sans-serif`,i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(r,t,e+1))}function W_(){let i=st("minimap"),t=i.getContext("2d"),e=i.width,n=i.height,s=1.25;t.setTransform(1,0,0,1,0,0),t.fillStyle="#3f5d36",t.fillRect(0,0,e,n),t.translate(e/2,n*.62),t.rotate(Math.PI+Q.h),t.scale(s,s);let r=a=>(a+840+yo)*ui;t.translate(-r(Q.x),-r(Q.z)),t.imageSmoothingEnabled=!0,t.drawImage(ji,0,0),Bn&&z.job&&(t.strokeStyle="#ffb703",t.lineWidth=7/s,t.lineJoin="round",t.beginPath(),Bn.path.forEach((a,o)=>o?t.lineTo(r(a.x),r(a.z)):t.moveTo(r(a.x),r(a.z))),t.stroke());for(let a of Ki){let o=dn.depots[a.id],c=bo();bd(t,r(o.zone.x),r(o.zone.z),c===o?"#ffb703":a.id==="garagem"?"#2f6fde":"rgba(30,30,30,0.85)",(c===o?9:6)/s)}for(let a of Fr.cars)t.fillStyle="rgba(255,255,255,0.65)",t.fillRect(r(a.x)-1.5,r(a.z)-1.5,3,3);t.setTransform(1,0,0,1,0,0),t.translate(e/2,n*.62),t.fillStyle="#3ee07a",t.strokeStyle="#0b1a10",t.lineWidth=3,t.beginPath(),t.moveTo(0,-14),t.lineTo(10,11),t.lineTo(0,5),t.lineTo(-10,11),t.closePath(),t.fill(),t.stroke(),t.setTransform(1,0,0,1,0,0)}function Sd(){let i=st("bigmap"),t=st("bigmapc");i.classList.remove("hidden");let e=Math.min(window.innerWidth*.96,window.innerHeight*.94),n=Math.min(2,window.devicePixelRatio||1);t.width=t.height=e*n,t.style.width=t.style.height=e+"px";let s=t.getContext("2d"),r=t.width/ji.width;s.drawImage(ji,0,0,t.width,t.height);let a=c=>(c+840+yo)*ui*r;Bn&&z.job&&(s.strokeStyle="#ffb703",s.lineWidth=5*n,s.beginPath(),Bn.path.forEach((c,l)=>l?s.lineTo(a(c.x),a(c.z)):s.moveTo(a(c.x),a(c.z))),s.stroke());let o=bo();for(let c of Ki){let l=dn.depots[c.id],h=a(l.zone.x),u=a(l.zone.z);bd(s,h,u,o===l?"#ffb703":c.id==="garagem"?"#2f6fde":"#222",8*n),s.font=`700 ${11*n}px sans-serif`,s.textAlign="center",s.lineWidth=3*n,s.strokeStyle="rgba(0,0,0,0.8)",s.strokeText(c.name,h,u-14*n),s.fillStyle="#fff",s.fillText(c.name,h,u-14*n)}s.save(),s.translate(a(Q.x),a(Q.z)),s.rotate(Math.PI+Q.h),s.scale(n,n),s.fillStyle="#3ee07a",s.strokeStyle="#000",s.lineWidth=2,s.beginPath(),s.moveTo(0,-12),s.lineTo(9,10),s.lineTo(0,5),s.lineTo(-9,10),s.closePath(),s.fill(),s.stroke(),s.restore()}var X_="jobs";function q_(){document.body.addEventListener("click",i=>{let t=i.target.closest("[data-act],[data-tab]");if(!t)return;if(ee.init(),t.dataset.tab){Kn(t.dataset.tab);return}let e=t.dataset.act,n=t.dataset.arg;if(e==="jobs"||e==="garage"||e==="settings")Pr(e);else if(e==="menu"||e==="pause")Pr("settings");else if(e==="rename"){let s=prompt("Nome do motorista:",z.name);s&&s.trim()&&(z.name=s.trim().slice(0,18),qe(),Or())}else e==="prevtruck"?vo(pe.idx-1):e==="nexttruck"?vo(pe.idx+1):e==="gearbox"?(z.settings.gearbox=n,st("gearsel").classList.toggle("hidden",n==="auto"),qe(),Kn("settings")):e==="timemode"?(z.settings.time=n,qe(),Bc(z.clock),Kn("settings")):e==="tomenu"?(Ur(),qe(),Or()):e==="camera"?yd():e==="close"?Ur():e==="accept"?xd(+n):e==="refresh"?(Qi=zc(),Kn("jobs")):e==="cancel"?(_d(),Kn("jobs")):e==="buy"?J_(n):e==="use"?Ed(n):e==="popclose"?Uc():e==="popjobs"?(Uc(),Pr("jobs")):e==="closemap"?st("bigmap").classList.add("hidden"):e==="quality"?(z.settings.quality=n,qe(),Kn("settings"),kn("Reiniciando para aplicar\u2026"),setTimeout(()=>location.reload(),500)):e==="steermode"?(z.settings.steer=n,md(),qe(),Kn("settings")):e==="fps"?(z.settings.fps=!z.settings.fps,st("fps").classList.toggle("hidden",!z.settings.fps),qe(),Kn("settings")):e==="reset"?confirm("Apagar todo o progresso?")&&(localStorage.removeItem(Oc),location.reload()):e==="rescue"&&(Q_(),Ur())}),st("mapwrap").addEventListener("click",Sd),st("fps").classList.toggle("hidden",!z.settings.fps),st("tabbody").addEventListener("input",i=>{i.target.id==="vol"&&(z.settings.volume=+i.target.value,ee.setVolume(z.settings.volume),qe())}),md(),_o("D"),st("gearsel").classList.toggle("hidden",z.settings.gearbox==="auto"),st("play").addEventListener("click",()=>{ee.init(),st("title").classList.add("hidden"),st("hud").classList.remove("hidden"),Se="drive",Q.engineOn||st("enginebtn").classList.remove("hidden"),Hc(0,!0),Td(),Nc=3;try{document.documentElement.requestFullscreen&&!window.AndroidBridge&&document.documentElement.requestFullscreen().catch(()=>{})}catch(i){}!z.job&&z.stats.deliveries===0&&setTimeout(()=>Pr("jobs"),400)})}function md(){let i=st("wheelwrap");i.classList.toggle("buttons",z.settings.steer==="buttons"),i.classList.toggle("tilt",z.settings.steer==="tilt")}function Or(){Se="title",st("hud").classList.add("hidden"),st("title").classList.remove("hidden"),st("pname").textContent=z.name,st("plvl").textContent=`Nv ${z.level} / XP ${z.xp}`;let i=Gs.find(e=>e.lvl>z.level),t=[["\u{1F4E6}","Entregas feitas",z.stats.deliveries],["\u{1F6E3}\uFE0F","Dist\xE2ncia rodada",z.stats.km.toFixed(1)+" km"],["\u2696\uFE0F","Toneladas levadas",z.stats.tons.toFixed(0)+" t"],["\u{1F4B0}","Total faturado",en(z.stats.earned)],["\u{1F513}",i?`Pr\xF3xima: ${i.name}`:"Todas as cargas",i?`Nv ${i.lvl}`:"\u2713"]];st("perf").innerHTML=t.map(e=>`<div class="prow"><span class="n">${e[0]}</span><span class="l">${e[1]}</span><span class="v">${e[2]}</span></div>`).join(""),st("strip").innerHTML=`<div><span>Saldo</span><b>${en(z.money)}</b></div><div><span>N\xEDvel</span><b>${z.level}</b></div><div><span>Caminh\xF5es</span><b>${z.owned.length}</b></div><div><span>Gr\xE1ficos</span><b>${fi==="low"?"Leve":fi==="medium"?"M\xE9dio":"Ultra"}</b></div>`,pe&&vo(Math.max(0,Pn.findIndex(e=>e.id===z.truck)))}function Pr(i){Se=Se==="title"?"title":"menu",st("modal").classList.remove("hidden"),Jt.gas=Jt.brake=Jt.left=Jt.right=!1,document.querySelectorAll(".pad").forEach(t=>t.classList.remove("on")),Kn(i)}function Ur(){st("modal").classList.add("hidden"),Se==="title"&&Or(),Se==="menu"&&(Se="drive")}function Zs(i,t=[]){st("popcard").innerHTML=i,st("popup").classList.remove("hidden"),Se=Se==="drive"?"menu":Se,Zs.queue=t}function Uc(){st("popup").classList.add("hidden"),st("modal").classList.contains("hidden")&&(Se="drive");let i=Zs.queue||[];if(i.length){let t=i.shift();Zs.queue=i,H_(t),Zs.queue=i}}function Kn(i){X_=i,document.querySelectorAll(".tabs [data-tab]").forEach(e=>e.classList.toggle("on",e.dataset.tab===i));let t=st("tabbody");i==="jobs"?t.innerHTML=Y_():i==="garage"?t.innerHTML=Z_():i==="profile"?t.innerHTML=K_():t.innerHTML=j_(),t.scrollTop=0}function $_(i,t){let e=yn[i.cargo],n=kc(i),s=[e.fragile?'<span class="chip tag">Fr\xE1gil</span>':"",e.hazard?'<span class="chip tag">Perigosa</span>':"",e.trailer==="lowboy"?'<span class="chip tag">Indivis\xEDvel</span>':""].join("");return`<div class="card ${n?"locked":""}">
    <div class="ic">${e.icon}</div><h3>${e.name}</h3><div class="t">${e.t} toneladas</div>
    <div class="route">\u{1F4CD} ${Li[i.from].name} \u2192 \u{1F3C1} ${Li[i.to].name}</div>
    <div class="row"><span class="chip pay">${en(i.pay)}</span><span class="chip xp">+${i.xp} XP</span><span class="chip">${(i.dist/1e3).toFixed(1)} km</span><span class="chip">\u23F1 ${Math.ceil(i.time/60)} min</span>${s}</div>
    ${n?`<div class="row"><span class="chip warn">\u{1F512} ${n}</span></div>`:`<button class="btn" data-act="accept" data-arg="${t}" ${z.job?"disabled":""}>Aceitar frete</button>`}
  </div>`}function Y_(){let i="";if(z.job){let t=z.job,e=yn[t.cargo];i=`<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${e.icon}</div><h3>Frete ativo: ${e.name} (${e.t} t)</h3>
      <div class="route">${t.phase==="pickup"?"Coletar em":"Entregar em"} <b>${Li[t.phase==="pickup"?t.from:t.to].name}</b> \u2022 Avaria ${t.damage.toFixed(0)}% \u2022 Pagamento ${en(t.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${t.phase==="deliver"?" (multa 25%)":""}</button></div>`}return`${i}<div class="tbar"><div class="grow">Caminh\xE3o atual: <b>${Q.def.name}</b> \u2014 at\xE9 <b>${Q.def.cap} t</b> \u2022 N\xEDvel ${z.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">\u{1F504} Atualizar</button></div>
    <div class="grid">${Qi.map($_).join("")}</div>`}function Z_(){return`<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${en(z.money)}</b> \u2022 A for\xE7a do caminh\xE3o define as cargas que ele consegue puxar.</div></div><div class="grid">`+Pn.map(e=>{let n=z.owned.includes(e.id),s=z.truck===e.id,r=e.level>z.level,a;s?a='<button class="btn alt" disabled>Em uso</button>':n?a=`<button class="btn" data-act="use" data-arg="${e.id}">Usar</button>`:r?a=`<span class="chip warn">\u{1F512} N\xEDvel ${e.level}</span>`:a=`<button class="btn" data-act="buy" data-arg="${e.id}" ${z.money<e.price?"disabled":""}>Comprar ${en(e.price)}</button>`;let o="#"+new mt(e.color).getHexString();return`<div class="card ${r&&!n?"locked":""}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${o}, #1b2230)">${e.rigid?"\u{1F69A}":"\u{1F69B}"}</div>
        <h3>${e.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${e.desc}</div>
        <div class="stat"><span>Pot\xEAncia</span><b>${e.hp} cv</b></div><div class="meter"><i style="width:${e.hp/750*100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${e.cap} t</b></div><div class="meter"><i style="width:${e.cap/90*100}%"></i></div>
        <div class="stat"><span>Velocidade m\xE1x.</span><b>${e.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${e.rigid?"R\xEDgido (ba\xFA)":`Cavalo mec\xE2nico ${e.cfg}`}</b></div>
        ${a}</div>`}).join("")+"</div>"}function J_(i){let t=io[i];!t||z.owned.includes(i)||z.money<t.price||t.level>z.level||(z.money-=t.price,z.owned.push(i),ee.beep(784,.1),ee.beep(1046,.15),kn(`Voc\xEA comprou o <b>${t.name}</b>!`),Ed(i))}function Ed(i){let t=io[i];if(z.owned.includes(i)){if(z.job&&z.job.phase==="deliver"){kn("Conclua ou cancele o frete antes de trocar");return}z.truck=i,Q.setTruck(t),z.job&&kc(z.job,t)&&_d(),qe(),Kn("garage"),Se==="title"&&Or()}}function K_(){let i=z.stats,t=Ar(z.level),e=Gs.filter(n=>n.lvl>z.level).slice(0,4);return`<div class="grid">
    <div class="card"><h3>\u2B50 N\xEDvel ${z.level}${z.level>=30?" (m\xE1ximo)":""}</h3><div class="meter" style="margin-top:8px"><i style="width:${z.xp/t*100}%"></i></div>
      <div class="stat"><span>Experi\xEAncia</span><b>${z.xp} / ${t} XP</b></div><div class="stat"><span>Saldo</span><b>${en(z.money)}</b></div>
      <div class="stat"><span>Caminh\xF5es</span><b>${z.owned.length} / ${Pn.length}</b></div></div>
    <div class="card"><h3>\u{1F4CA} Estat\xEDsticas</h3>
      <div class="stat"><span>Entregas</span><b>${i.deliveries}</b></div><div class="stat"><span>Dist\xE2ncia</span><b>${i.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${i.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${en(i.earned)}</b></div>
      <div class="stat"><span>Colis\xF5es</span><b>${i.crashes}</b></div></div>
    <div class="card"><h3>\u{1F513} Pr\xF3ximas cargas</h3>${e.map(n=>`<div class="stat"><span>${n.icon} ${n.name} (${n.t} t)</span><b>N\xEDvel ${n.lvl}</b></div>`).join("")||'<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`}function j_(){let i=(t,e,n)=>`<div class="seg">${n.map(([s,r])=>`<button data-act="${t}" data-arg="${s}" class="${e===s?"on":""}">${r}</button>`).join("")}</div>`;return`<div class="set"><div><b>Qualidade gr\xE1fica</b><br><small style="opacity:.7">Atual: ${fi==="low"?"Leve":fi==="medium"?"M\xE9dio":"Ultra"} \u2022 resolu\xE7\xE3o din\xE2mica ativa</small></div>
      ${i("quality",z.settings.quality,[["auto","Auto"],["low","Leve"],["medium","M\xE9dio"],["high","Ultra"]])}</div>
    <div class="set"><div><b>Dire\xE7\xE3o</b><br><small style="opacity:.7">Volante, setas ou inclina\xE7\xE3o do celular</small></div>
      ${i("steermode",z.settings.steer,[["wheel","Volante"],["buttons","Setas"],["tilt","Inclina\xE7\xE3o"]])}</div>
    <div class="set"><div><b>C\xE2mbio</b><br><small style="opacity:.7">Manual D/N/R ou autom\xE1tico (segurar freio parado = r\xE9)</small></div>
      ${i("gearbox",z.settings.gearbox,[["manual","D / N / R"],["auto","Autom\xE1tico"]])}</div>
    <div class="set"><div><b>Hor\xE1rio</b><br><small style="opacity:.7">Ciclo de dia e noite com far\xF3is e ilumina\xE7\xE3o urbana</small></div>
      ${i("timemode",z.settings.time,[["cycle","Ciclo"],["day","Dia"],["dusk","Entardecer"],["night","Noite"]])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${z.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${i("fps",z.settings.fps?1:0,[[1,"Sim"],[0,"N\xE3o"]])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminh\xE3o de volta para a rua mais pr\xF3xima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">WASD/setas \u2022 Espa\xE7o freio \u2022 E motor \u2022 R r\xE9 \u2022 N neutro \u2022 P freio de m\xE3o \u2022 L far\xF3is \u2022 H buzina \u2022 C c\xE2mera \u2022 M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao showroom</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`}function Q_(){let i=En(Math.round((Q.x+840)/140),0,12),t=En(Math.round((Q.z+840)/140),0,12),e=fe(i),n=fe(t),s=Math.abs(Q.x-e),r=Math.abs(Q.z-n);s<r?Q.place(e+5,En(Q.z,-840,840),0):Q.place(En(Q.x,-840,840),n-5,Math.PI/2),Hc(0,!0)}function kn(i,t=2600){let e=document.createElement("div");for(e.innerHTML=i,st("toast").appendChild(e);st("toast").children.length>3;)st("toast").firstChild.remove();setTimeout(()=>e.remove(),t)}function gd(i,t,e,n,s,r,a,o){let c=st(i),l=c.getContext("2d"),h=c.width,u=h/2,d=h*.46;l.clearRect(0,0,h,h);let f=Math.PI*.75,g=Math.PI*2.25,v=_=>f+(g-f)*En(_/e,0,1);l.beginPath(),l.arc(u,u,d,0,7);let m=l.createRadialGradient(u,u,d*.2,u,u,d);m.addColorStop(0,"rgba(30,34,40,0.95)"),m.addColorStop(1,"rgba(8,10,14,0.92)"),l.fillStyle=m,l.fill(),l.lineWidth=h*.035,l.strokeStyle="#c8102e",l.stroke(),o&&(l.beginPath(),l.arc(u,u,d*.86,v(o),g),l.lineWidth=h*.03,l.strokeStyle="rgba(227,36,59,.8)",l.stroke()),l.fillStyle="#fff",l.strokeStyle="#fff",l.textAlign="center",l.textBaseline="middle",l.font=`italic 800 ${h*.07}px sans-serif`;for(let _=0;_<=e;_+=n/2){let x=v(_),M=_%n===0;l.lineWidth=M?3:1.5,l.beginPath(),l.moveTo(u+Math.cos(x)*d*.9,u+Math.sin(x)*d*.9),l.lineTo(u+Math.cos(x)*d*(M?.76:.82),u+Math.sin(x)*d*(M?.76:.82)),l.stroke(),M&&l.fillText(String(s(_)),u+Math.cos(x)*d*.6,u+Math.sin(x)*d*.6)}let p=v(t);l.strokeStyle="#ff2a3d",l.lineWidth=h*.025,l.lineCap="round",l.beginPath(),l.moveTo(u-Math.cos(p)*d*.1,u-Math.sin(p)*d*.1),l.lineTo(u+Math.cos(p)*d*.86,u+Math.sin(p)*d*.86),l.stroke(),l.beginPath(),l.arc(u,u,d*.3,0,7),l.fillStyle="#0b0d11",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(255,255,255,.25)",l.stroke(),l.fillStyle="#fff",l.font=`italic 900 ${h*.15}px sans-serif`,l.fillText(r,u,u-h*.01),l.font=`italic 700 ${h*.055}px sans-serif`,l.fillStyle="#9aa7b4",l.fillText(a,u,u+h*.1)}var Rc=0;function tv(i){Rc-=i;let t=Q.speedKmh;gd("spdg",t,120,20,r=>r,String(Math.round(t)),"km/h",100);let e=Q.rpm*2500;if(gd("rpmg",e/100,25,5,r=>r,Q.engineOn?Q.gear||"N":"OFF","x100 rpm",21),Rc>0)return;Rc=.2,st("lvl").textContent="Nv "+z.level,st("money").textContent=en(z.money);let n=Ar(z.level);st("xpbar").style.width=(z.level>=30?100:z.xp/n*100)+"%",st("ic-load").textContent=`${(Q.mass/1e3).toFixed(1)} t`,st("ic-light").classList.toggle("on",Q.lightsOn),st("lightsbtn").classList.toggle("on",Q.lightsOn),st("ic-hand").classList.toggle("on",Jt.hand);let s=z.job;if(s){let r=yn[s.cargo],a=Bn?Bn.len:0;st("jobtitle").textContent=`${r.icon} ${r.name} \u2022 ${r.t} t`;let o=Li[s.phase==="pickup"?s.from:s.to].name,c="";if(s.phase==="deliver"){let l=Math.abs(s.tLeft),h=Math.floor(l/60),u=Math.floor(l%60);c=` \u2022 <span class="${s.tLeft<0?"late":""}">\u23F1 ${s.tLeft<0?"-":""}${h}:${String(u).padStart(2,"0")}</span>`}st("jobsub").innerHTML=`${s.phase==="pickup"?"Coletar":"Entregar"}: <b>${o}</b> \u2022 ${(a/1e3).toFixed(1)} km${c}`,st("dist").textContent=a>1e3?(a/1e3).toFixed(1)+" km":Math.round(a)+" m",st("ic-dmg").classList.toggle("hidden",s.phase!=="deliver"),st("dmg").textContent=s.damage.toFixed(0)+"%"}else st("jobtitle").textContent="Sem frete ativo",st("jobsub").innerHTML="Toque em \u{1F4CB} para escolher uma carga",st("dist").textContent="",st("ic-dmg").classList.add("hidden")}var Nc=0,Mo=0,Nr=0,Cc=0,go=0,Pc=0,Lc=0;function wd(i){if(requestAnimationFrame(wd),document.hidden)return;let t=(i-Mo)/1e3;if(Mo=i,!(t>0))return;if(t=Math.min(t,.05),Nr+=t,Cc++,go+=t,go>=1.5){let n=Cc/go;iv(n),z.settings.fps&&(st("fps").textContent=`${n.toFixed(0)} FPS \u2022 ${fi} \u2022 ${di.toFixed(2)}x \u2022 ${De.info.render.calls} dc`),Cc=0,go=0}if(Dc(t),Se==="title"){D_(t),ee.engine(0,0,!1),De.render(pe.scene,pe.cam);return}if(z.settings.time==="cycle"&&Se==="drive"&&(z.clock=(z.clock+t/50)%24),Lc-=t,Lc<=0&&(Lc=.5,Bc(z.clock)),Se==="drive"){Fr.obstacles(dd);let n=2;for(let r=0;r<n;r++)Q.update(t/n,bn,dn,dd);Q.lastImpact>0&&ev(Q.lastImpact),z.stats.km+=Math.abs(Q.v)*t/1e3;let s=Q._cs||[];Fr.update(t,Q,s),Se==="drive"&&xo(t)}dn.update(t,Nr),nv(t),Hc(t),ee.engine(Q.rpm,bn.throttle,Q.engineOn&&Se==="drive"),tv(t),W_(),Pc+=t,Pc>8&&(Pc=0,qe()),De.render(Xe,Sn),Nc>0&&--Nc===0&&Xe.traverse(n=>{n.material&&[].concat(n.material).forEach(s=>{s.needsUpdate=!0})})}function ev(i){if(z.stats.crashes++,ee.crash(i),navigator.vibrate)try{navigator.vibrate(Math.min(120,i*4))}catch(t){}if(z.job&&z.job.phase==="deliver"){let t=yn[z.job.cargo],e=Math.min(30,i*(t.fragile?.55:.3));z.job.damage=Math.min(100,z.job.damage+e),kn(`\u{1F4A5} Batida! Carga avariada +${e.toFixed(0)}%`,1800)}}function nv(i){let t=bo();if(!t){$e.visible=!1,zn.visible=!1;return}Dr-=i,Dr<=0&&(Bn=Tc(Q.x,Q.z,t),Dr=.5),$e.visible=!0,$e.position.set(t.zone.x,0,t.zone.z),$e.zone.scale.set(t.zone.w,t.zone.d,1);let e=vd(t);$e.zone.material.color.setHex(e?4120698:16761856),$e.cone.position.y=7+Math.sin(Nr*3)*.8,$e.cone.rotation.y=Nr*1.5;let n=null;if(Bn)for(let s=1;s<Bn.path.length;s++){let r=Bn.path[s];if(Math.hypot(r.x-Q.x,r.z-Q.z)>22||s===Bn.path.length-1){n=r;break}}if(n&&te.mode!==2){zn.visible=!0;let s=Math.sin(Q.h),r=Math.cos(Q.h);zn.position.set(Q.x+s*Q.model.zf*.5,(Q.def.id==="urbano"?4.2:5.4)+Math.sin(Nr*4)*.12,Q.z+r*Q.model.zf*.5),zn.rotation.y=Math.atan2(n.x-Q.x,n.z-Q.z)}else zn.visible=!1}function iv(i){let t=window.devicePixelRatio||1,e=Math.min(t,Ce.pr),n=di;i<27?n=Math.max(Ce.minPr*Math.min(1,t),di*.88):i>52&&(n=Math.min(e,di*1.06)),Math.abs(n-di)>.01&&(di=n,De.setPixelRatio(di),De.setSize(window.innerWidth,window.innerHeight,!1))}function Td(){De&&(De.setSize(window.innerWidth,window.innerHeight,!1),Sn.aspect=window.innerWidth/window.innerHeight,Sn.updateProjectionMatrix())}window.addEventListener("error",i=>{let t=st("loadmsg");t&&Se==="loading"&&(t.textContent="Erro: "+i.message)});window.__game={get scene(){return Xe},get sun(){return ln},get renderer(){return De},S:z,get rig(){return Q},get state(){return Se},ctl:Jt,acceptJob:i=>xd(i),get jobs(){return Qi},world:()=>dn,cam:te};T_().catch(i=>{st("loadmsg").textContent="Erro ao iniciar: "+i.message,console.error(i)});})();
