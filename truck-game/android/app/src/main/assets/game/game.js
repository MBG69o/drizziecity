(()=>{var hf=Object.defineProperty,uf=Object.defineProperties;var df=Object.getOwnPropertyDescriptors;var xh=Object.getOwnPropertySymbols;var ff=Object.prototype.hasOwnProperty,pf=Object.prototype.propertyIsEnumerable;var _h=(i,t,e)=>t in i?hf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,un=(i,t)=>{for(var e in t||(t={}))ff.call(t,e)&&_h(i,e,t[e]);if(xh)for(var e of xh(t))pf.call(t,e)&&_h(i,e,t[e]);return i},xi=(i,t)=>uf(i,df(t));var Pc="162";var mf=0,vh=1,gf=2;var ga=1,Lc=2,ri=3,Pi=0,Ve=1,de=2,Ti=0,Ns=1,bn=2,yh=3,Mh=4,xf=5,Ji=100,_f=101,vf=102,bh=103,Sh=104,yf=200,Mf=201,bf=202,Sf=203,zl=204,Fl=205,wf=206,Ef=207,Tf=208,Af=209,Rf=210,Cf=211,Pf=212,Lf=213,If=214,Df=0,Uf=1,Nf=2,Do=3,zf=4,Ff=5,Of=6,Bf=7,xa=0,kf=1,Hf=2,Ai=0,Gf=1,Vf=2,Wf=3,Ic=4,Xf=5,qf=6,Yf=7;var Qu=300,Os=301,Bs=302,Ol=303,Bl=304,_a=306,Tr=1e3,Mn=1001,kl=1002,Ye=1003,wh=1004;var fr=1005;var tn=1006,ja=1007;var ai=1008;var Ri=1009,$f=1010,Zf=1011,Dc=1012,td=1013,Ei=1014,Xn=1015,Ar=1016,ed=1017,nd=1018,Qi=1020,Jf=1021,Nn=1023,Kf=1024,jf=1025,ts=1026,ks=1027,id=1028,sd=1029,Qf=1030,rd=1031,od=1033,Qa=33776,tl=33777,el=33778,nl=33779,Eh=35840,Th=35841,Ah=35842,Rh=35843,ad=36196,Ch=37492,Ph=37496,Lh=37808,Ih=37809,Dh=37810,Uh=37811,Nh=37812,zh=37813,Fh=37814,Oh=37815,Bh=37816,kh=37817,Hh=37818,Gh=37819,Vh=37820,Wh=37821,il=36492,Xh=36494,qh=36495,tp=36283,Yh=36284,$h=36285,Zh=36286;var Uo=2300,No=2301,sl=2302,Jh=2400,Kh=2401,jh=2402;var ep=3200,np=3201,va=0,ip=1,wi="",dn="srgb",zi="srgb-linear",Uc="display-p3",ya="display-p3-linear",zo="linear",xe="srgb",Fo="rec709",Oo="p3";var us=7680;var Qh=519,sp=512,rp=513,op=514,ld=515,ap=516,lp=517,cp=518,hp=519,Hl=35044;var tu="300 es",Gl=1035,li=2e3,Bo=2001,Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,ko=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function up(i,t){return(i%t+t)%t}function ol(i,t,e){return(1-e)*i+e*t}function eu(i){return(i&i-1)===0&&i!==0}function Vl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],f=s[3],m=s[6],v=s[1],_=s[4],M=s[7],L=s[2],E=s[5],T=s[8];return r[0]=a*x+o*v+c*L,r[3]=a*f+o*_+c*E,r[6]=a*m+o*M+c*T,r[1]=l*x+h*v+u*L,r[4]=l*f+h*_+u*E,r[7]=l*m+h*M+u*T,r[2]=d*x+p*v+g*L,r[5]=d*f+p*_+g*E,r[8]=d*m+p*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new qt;function cd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){let i=Ho("canvas");return i.style.display="block",i}var nu={};function hd(i){i in nu||(nu[i]=!0,console.warn(i))}var iu=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),su=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[zi]:{transfer:zo,primaries:Fo,toReference:i=>i,fromReference:i=>i},[dn]:{transfer:xe,primaries:Fo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ya]:{transfer:zo,primaries:Oo,toReference:i=>i.applyMatrix3(su),fromReference:i=>i.applyMatrix3(iu)},[Uc]:{transfer:xe,primaries:Oo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(su),fromReference:i=>i.applyMatrix3(iu).convertLinearToSRGB()}},fp=new Set([zi,ya]),ue={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=eo[t].toReference,s=eo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return eo[i].primaries},getTransfer:function(i){return i===wi?zo:eo[i].transfer}};function zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ll(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,Go=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Ho("canvas")),ds.width=t.width,ds.height=t.height;let n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zs(e[n]/255)*255):e[n]=zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,Vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mp=0,pn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=tn,a=ai,o=Nn,c=Ri,l=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ci(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Qu;pn.DEFAULT_ANISOTROPY=1;var Ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(p+1)/2,L=(m+1)/2,E=(h+d)/4,T=(u+x)/4,P=(g+f)/4;return _>M&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=T/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wo=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xl=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let f=1-o,m=c*d+l*p+h*g+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let L=Math.sqrt(_),E=Math.atan2(L,m*v);f=Math.sin(f*E)/L,o=Math.sin(o*E)/L}let M=o*v;if(c=c*f+d*M,l=l*f+p*M,h=h*f+g*M,u=u*f+x*M,f===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new N,ru=new Yn,ui=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),io.subVectors(this.max,pr),fs.subVectors(t.a,pr),ps.subVectors(t.b,pr),ms.subVectors(t.c,pr),_i.subVectors(ps,fs),vi.subVectors(ms,ps),Vi.subVectors(fs,ms);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Vi.z,Vi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Vi.z,0,-Vi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Vi.y,Vi.x,0];return!ul(e,fs,ps,ms,io)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,fs,ps,ms,io))?!1:(so.crossVectors(_i,vi),e=[so.x,so.y,so.z],ul(e,fs,ps,ms,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new N,new N,new N,new N,new N,new N,new N,new N],In=new N,no=new ui,fs=new N,ps=new N,ms=new N,_i=new N,vi=new N,Vi=new N,pr=new N,io=new N,so=new N,Wi=new N;function ul(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=t.dot(Wi),l=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gp=new ui,mr=new N,dl=new N,Ii=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);let e=mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(dl)),this.expandByPoint(mr.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new N,fl=new N,ro=new N,yi=new N,pl=new N,oo=new N,ml=new N,Xo=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fl.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(fl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ro),o=yi.dot(this.direction),c=-yi.dot(ro),l=yi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fl).addScaledVector(ro,d),p}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){pl.subVectors(e,t),oo.subVectors(n,t),ml.crossVectors(pl,oo);let a=this.direction.dot(ml),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,t);let c=o*this.direction.dot(oo.crossVectors(yi,oo));if(c<0)return null;let l=o*this.direction.dot(pl.cross(yi));if(l<0||c+l>a)return null;let h=-o*yi.dot(ml);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,x,f)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,x,f){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xp,t,_p)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Mi.crossVectors(n,vn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Mi.crossVectors(n,vn)),Mi.normalize(),ao.crossVectors(vn,Mi),s[0]=Mi.x,s[4]=ao.x,s[8]=vn.x,s[1]=Mi.y,s[5]=ao.y,s[9]=vn.y,s[2]=Mi.z,s[6]=ao.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],v=n[3],_=n[7],M=n[11],L=n[15],E=s[0],T=s[4],P=s[8],B=s[12],b=s[1],S=s[5],D=s[9],U=s[13],w=s[2],H=s[6],R=s[10],$=s[14],Y=s[3],k=s[7],W=s[11],st=s[15];return r[0]=a*E+o*b+c*w+l*Y,r[4]=a*T+o*S+c*H+l*k,r[8]=a*P+o*D+c*R+l*W,r[12]=a*B+o*U+c*$+l*st,r[1]=h*E+u*b+d*w+p*Y,r[5]=h*T+u*S+d*H+p*k,r[9]=h*P+u*D+d*R+p*W,r[13]=h*B+u*U+d*$+p*st,r[2]=g*E+x*b+f*w+m*Y,r[6]=g*T+x*S+f*H+m*k,r[10]=g*P+x*D+f*R+m*W,r[14]=g*B+x*U+f*$+m*st,r[3]=v*E+_*b+M*w+L*Y,r[7]=v*T+_*S+M*H+L*k,r[11]=v*P+_*D+M*R+L*W,r[15]=v*B+_*U+M*$+L*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+f*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+m*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],v=u*f*l-x*d*l+x*c*p-o*f*p-u*c*m+o*d*m,_=g*d*l-h*f*l-g*c*p+a*f*p+h*c*m-a*d*m,M=h*x*l-g*u*l+g*o*p-a*x*p-h*o*m+a*u*m,L=g*u*c-h*x*c-g*o*d+a*x*d+h*o*f-a*u*f,E=e*v+n*_+s*M+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=v*T,t[1]=(x*d*r-u*f*r-x*s*p+n*f*p+u*s*m-n*d*m)*T,t[2]=(o*f*r-x*c*r+x*s*l-n*f*l-o*s*m+n*c*m)*T,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*T,t[4]=_*T,t[5]=(h*f*r-g*d*r+g*s*p-e*f*p-h*s*m+e*d*m)*T,t[6]=(g*c*r-a*f*r-g*s*l+e*f*l+a*s*m-e*c*m)*T,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*T,t[8]=M*T,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*m-e*u*m)*T,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*m+e*o*m)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*T,t[12]=L*T,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*f+e*u*f)*T,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*f-e*o*f)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,x=a*h,f=a*u,m=o*u,v=c*l,_=c*h,M=c*u,L=n.x,E=n.y,T=n.z;return s[0]=(1-(x+m))*L,s[1]=(p+M)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(d+m))*E,s[6]=(f+v)*E,s[7]=0,s[8]=(g+_)*T,s[9]=(f-v)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let l=1/r,h=1/a,u=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=li){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===li)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bo)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=li){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,g,x;if(o===li)g=(a+r)*u,x=-2*u;else if(o===Bo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new N,Dn=new fe,xp=new N(0,0,0),_p=new N(1,1,1),Mi=new N,ao=new N,vn=new N,ou=new fe,au=new Yn,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,lu=new N,xs=new Yn,ni=new fe,lo=new N,gr=new N,yp=new N,Mp=new Yn,cu=new N(1,0,0),hu=new N(0,1,0),uu=new N(0,0,1),bp={type:"added"},Sp={type:"removed"},gl={type:"childadded",child:null},xl={type:"childremoved",child:null},Ce=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new mn,n=new Yn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(gr,lo,this.up):ni.lookAt(lo,gr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ni),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bp),gl.child=t,this.dispatchEvent(gl),gl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new N(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new N,ii=new N,_l=new N,si=new N,_s=new N,vs=new N,du=new N,vl=new N,yl=new N,Ml=new N,ji=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),ii.subVectors(n,e),_l.subVectors(t,e);let a=Un.dot(Un),o=Un.dot(ii),c=Un.dot(_l),l=ii.dot(ii),h=ii.dot(_l),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ii.subVectors(t,e),Un.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Un.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),vs.subVectors(r,n),vl.subVectors(t,n);let c=_s.dot(vl),l=vs.dot(vl);if(c<=0&&l<=0)return e.copy(n);yl.subVectors(t,s);let h=_s.dot(yl),u=vs.dot(yl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(_s,a);Ml.subVectors(t,r);let p=_s.dot(Ml),g=vs.dot(Ml);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(vs,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return du.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(du,o);let m=1/(f+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(_s,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},co={h:0,s:0,l:0};function bl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=up(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bl(a,r,t+1/3),this.g=bl(a,r,t),this.b=bl(a,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let n=ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=ll(t.r),this.g=ll(t.g),this.b=ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return ue.fromWorkingColorSpace(Qe.copy(this),t),Math.round(He(Qe.r*255,0,255))*65536+Math.round(He(Qe.g*255,0,255))*256+Math.round(He(Qe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=dn){ue.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(co);let n=ol(bi.h,co.h,e),s=ol(bi.s,co.s,e),r=ol(bi.l,co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new gt;gt.NAMES=ud;var wp=0,zn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Ns,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Fl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ce=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new N,ho=new at,fn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return hd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}};var Hs=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ep=0,Rn=new fe,Sl=new Ce,ys=new N,yn=new ui,xr=new ui,ke=new N,Pe=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?Gs:Hs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(yn.min,xr.min),yn.expandByPoint(ke),ke.addVectors(yn.max,xr.max),yn.expandByPoint(ke)):(yn.expandByPoint(xr.min),yn.expandByPoint(xr.max))}yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ke.fromBufferAttribute(o,l),c&&(ys.fromBufferAttribute(t,l),ke.add(ys)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;let l=new N,h=new N,u=new N,d=new at,p=new at,g=new at,x=new N,f=new N;function m(P,B,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(S),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),o[P].add(x),o[B].add(x),o[b].add(x),c[P].add(f),c[B].add(f),c[b].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,B=v.length;P<B;++P){let b=v[P],S=b.start,D=b.count;for(let U=S,w=S+D;U<w;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new N,M=new N,L=new N,E=new N;function T(P){L.fromBufferAttribute(s,P),E.copy(L);let B=o[P];_.copy(B),_.sub(L.multiplyScalar(L.dot(B))).normalize(),M.crossVectors(E,B);let S=M.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,S)}for(let P=0,B=v.length;P<B;++P){let b=v[P],S=b.start,D=b.count;for(let U=S,w=S+D;U<w;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[p++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new fe,Xi=new Xo,uo=new Ii,pu=new N,Ms=new N,bs=new N,Ss=new N,wl=new N,fo=new N,po=new at,mo=new at,go=new at,mu=new N,gu=new N,xu=new N,xo=new N,_o=new N,Kt=class extends Ce{constructor(t=new Pe,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(wl.fromBufferAttribute(u,t),a?fo.addScaledVector(wl,h):fo.addScaledVector(wl.sub(e),h))}e.add(fo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(uo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(uo,pu)===null||Xi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let f=d[g],m=a[f.materialIndex],v=Math.max(f.start,p.start),_=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=v,L=_;M<L;M+=3){let E=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);s=vo(this,m,t,n,l,h,u,E,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){let v=o.getX(f),_=o.getX(f+1),M=o.getX(f+2);s=vo(this,a,t,n,l,h,u,v,_,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let f=d[g],m=a[f.materialIndex],v=Math.max(f.start,p.start),_=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let M=v,L=_;M<L;M+=3){let E=M,T=M+1,P=M+2;s=vo(this,m,t,n,l,h,u,E,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){let v=f,_=f+1,M=f+2;s=vo(this,a,t,n,l,h,u,v,_,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Tp(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pi,o),c===null)return null;_o.copy(o),_o.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_o);return l<e.near||l>e.far?null:{distance:l,point:_o.clone(),object:i}}function vo(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ms),i.getVertexPosition(c,bs),i.getVertexPosition(l,Ss);let h=Tp(i,t,e,n,Ms,bs,Ss,xo);if(h){s&&(po.fromBufferAttribute(s,o),mo.fromBufferAttribute(s,c),go.fromBufferAttribute(s,l),h.uv=ji.getInterpolation(xo,Ms,bs,Ss,po,mo,go,new at)),r&&(po.fromBufferAttribute(r,o),mo.fromBufferAttribute(r,c),go.fromBufferAttribute(r,l),h.uv1=ji.getInterpolation(xo,Ms,bs,Ss,po,mo,go,new at)),a&&(mu.fromBufferAttribute(a,o),gu.fromBufferAttribute(a,c),xu.fromBufferAttribute(a,l),h.normal=ji.getInterpolation(xo,Ms,bs,Ss,mu,gu,xu,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new N,materialIndex:0};ji.getNormal(Ms,bs,Ss,u.normal),h.face=u}return h}var gn=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(x,f,m,v,_,M,L,E,T,P,B){let b=M/T,S=L/P,D=M/2,U=L/2,w=E/2,H=T+1,R=P+1,$=0,Y=0,k=new N;for(let W=0;W<R;W++){let st=W*S-U;for(let bt=0;bt<H;bt++){let Bt=bt*b-D;k[x]=Bt*v,k[f]=st*_,k[m]=w,l.push(k.x,k.y,k.z),k[x]=0,k[f]=0,k[m]=E>0?1:-1,h.push(k.x,k.y,k.z),u.push(bt/T),u.push(1-W/P),$+=1}}for(let W=0;W<P;W++)for(let st=0;st<T;st++){let bt=d+st+H*W,Bt=d+st+H*(W+1),j=d+(st+1)+H*(W+1),ot=d+(st+1)+H*W;c.push(bt,Bt,ot),c.push(Bt,j,ot),Y+=6}o.addGroup(p,Y,B),p+=Y,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Vs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ap(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dd(i){return i.getRenderTarget()===null?i.outputColorSpace:ue.workingColorSpace}var Rp={clone:Vs,merge:an},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Yo=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new N,_u=new at,vu=new at,en=class extends Yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,_u,vu),e.subVectors(vu,_u)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ws=-90,Es=1,ql=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(ws,Es,t,e);s.layers=this.layers,this.add(s);let r=new en(ws,Es,t,e);r.layers=this.layers,this.add(r);let a=new en(ws,Es,t,e);a.layers=this.layers,this.add(a);let o=new en(ws,Es,t,e);o.layers=this.layers,this.add(o);let c=new en(ws,Es,t,e);c.layers=this.layers,this.add(c);let l=new en(ws,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends pn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yl=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $o(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gn(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Ti});r.uniforms.tEquirect.value=e;let a=new Kt(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=tn),new ql(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},El=new N,Lp=new N,Ip=new qt,oi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=El.subVectors(n,e).cross(Lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ip.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new Ii,yo=new N,Rr=class{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],f=s[11],m=s[12],v=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,f-p,M-m).normalize(),n[1].setComponents(c+r,d+l,f+p,M+m).normalize(),n[2].setComponents(c+a,d+h,f+g,M+v).normalize(),n[3].setComponents(c-a,d-h,f-g,M-v).normalize(),n[4].setComponents(c-o,d-u,f-x,M-_).normalize(),e===li)n[5].setComponents(c+o,d+u,f+x,M+_).normalize();else if(e===Bo)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,f=g.length;x<f;x++){let m=g[x];e?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var We=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){let v=m*d-a;for(let _=0;_<l;_++){let M=_*u-r;g.push(M,-v,0),x.push(0,0,1),f.push(_/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let _=v+l*m,M=v+l*(m+1),L=v+1+l*(m+1),E=v+1+l*m;p.push(_,M,E),p.push(M,L,E)}this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`
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
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,b0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,D0=`struct PhysicalMaterial {
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
}`,U0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,Km=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,ag=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Up,alphahash_pars_fragment:Np,alphamap_fragment:zp,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:kp,aomap_pars_fragment:Hp,batching_pars_vertex:Gp,batching_vertex:Vp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:jp,color_fragment:Qp,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:A0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_fragment:b0,lightmap_pars_fragment:S0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:E0,lights_pars_begin:T0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:L0,lights_physical_fragment:I0,lights_physical_pars_fragment:D0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:z0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:k0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:$0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:j0,normal_fragment_maps:Q0,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:xm,shadowmap_vertex:_m,shadowmask_pars_fragment:vm,skinbase_vertex:ym,skinning_pars_vertex:Mm,skinning_vertex:bm,skinnormal_vertex:Sm,specularmap_fragment:wm,specularmap_pars_fragment:Em,tonemapping_fragment:Tm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Im,worldpos_vertex:Dm,background_vert:Um,background_frag:Nm,backgroundCube_vert:zm,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:km,depth_frag:Hm,distanceRGBA_vert:Gm,distanceRGBA_frag:Vm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:Ym,meshbasic_vert:$m,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:Km,meshmatcap_vert:jm,meshmatcap_frag:Qm,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},mt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Wn={basic:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new gt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:an([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:an([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:an([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:an([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:an([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:an([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:an([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:an([mt.lights,mt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Wn.physical={uniforms:an([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Mo={r:0,b:0,g:0},Yi=new mn,pg=new fe;function mg(i,t,e,n,s,r,a){let o=new gt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(f,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_a)?(h===void 0&&(h=new Kt(new gn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Vs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yi.copy(m.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Yi)),h.material.toneMapped=ue.getTransfer(_.colorSpace)!==xe,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Kt(new We(2,2),new $n({name:"BackgroundMaterial",uniforms:Vs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ue.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function x(f,m){f.getRGB(Mo,dd(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),c=m,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,x(o,c)},render:g}}function gg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null),l=c,h=!1;function u(w,H,R,$,Y){let k=!1;if(a){let W=x($,R,H);l!==W&&(l=W,p(l.object)),k=m(w,$,R,Y),k&&v(w,$,R,Y)}else{let W=H.wireframe===!0;(l.geometry!==$.id||l.program!==R.id||l.wireframe!==W)&&(l.geometry=$.id,l.program=R.id,l.wireframe=W,k=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,P(w,H,R,$),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(w){return n.isWebGL2?i.bindVertexArray(w):r.bindVertexArrayOES(w)}function g(w){return n.isWebGL2?i.deleteVertexArray(w):r.deleteVertexArrayOES(w)}function x(w,H,R){let $=R.wireframe===!0,Y=o[w.id];Y===void 0&&(Y={},o[w.id]=Y);let k=Y[H.id];k===void 0&&(k={},Y[H.id]=k);let W=k[$];return W===void 0&&(W=f(d()),k[$]=W),W}function f(w){let H=[],R=[],$=[];for(let Y=0;Y<s;Y++)H[Y]=0,R[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:R,attributeDivisors:$,object:w,attributes:{},index:null}}function m(w,H,R,$){let Y=l.attributes,k=H.attributes,W=0,st=R.getAttributes();for(let bt in st)if(st[bt].location>=0){let j=Y[bt],ot=k[bt];if(ot===void 0&&(bt==="instanceMatrix"&&w.instanceMatrix&&(ot=w.instanceMatrix),bt==="instanceColor"&&w.instanceColor&&(ot=w.instanceColor)),j===void 0||j.attribute!==ot||ot&&j.data!==ot.data)return!0;W++}return l.attributesNum!==W||l.index!==$}function v(w,H,R,$){let Y={},k=H.attributes,W=0,st=R.getAttributes();for(let bt in st)if(st[bt].location>=0){let j=k[bt];j===void 0&&(bt==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),bt==="instanceColor"&&w.instanceColor&&(j=w.instanceColor));let ot={};ot.attribute=j,j&&j.data&&(ot.data=j.data),Y[bt]=ot,W++}l.attributes=Y,l.attributesNum=W,l.index=$}function _(){let w=l.newAttributes;for(let H=0,R=w.length;H<R;H++)w[H]=0}function M(w){L(w,0)}function L(w,H){let R=l.newAttributes,$=l.enabledAttributes,Y=l.attributeDivisors;R[w]=1,$[w]===0&&(i.enableVertexAttribArray(w),$[w]=1),Y[w]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,H),Y[w]=H)}function E(){let w=l.newAttributes,H=l.enabledAttributes;for(let R=0,$=H.length;R<$;R++)H[R]!==w[R]&&(i.disableVertexAttribArray(R),H[R]=0)}function T(w,H,R,$,Y,k,W){W===!0?i.vertexAttribIPointer(w,H,R,Y,k):i.vertexAttribPointer(w,H,R,$,Y,k)}function P(w,H,R,$){if(n.isWebGL2===!1&&(w.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Y=$.attributes,k=R.getAttributes(),W=H.defaultAttributeValues;for(let st in k){let bt=k[st];if(bt.location>=0){let Bt=Y[st];if(Bt===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(Bt=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(Bt=w.instanceColor)),Bt!==void 0){let j=Bt.normalized,ot=Bt.itemSize,St=e.get(Bt);if(St===void 0)continue;let It=St.buffer,Tt=St.type,Et=St.bytesPerElement,Wt=n.isWebGL2===!0&&(Tt===i.INT||Tt===i.UNSIGNED_INT||Bt.gpuType===td);if(Bt.isInterleavedBufferAttribute){let Ct=Bt.data,I=Ct.stride,ut=Bt.offset;if(Ct.isInstancedInterleavedBuffer){for(let tt=0;tt<bt.locationSize;tt++)L(bt.location+tt,Ct.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let tt=0;tt<bt.locationSize;tt++)M(bt.location+tt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let tt=0;tt<bt.locationSize;tt++)T(bt.location+tt,ot/bt.locationSize,Tt,j,I*Et,(ut+ot/bt.locationSize*tt)*Et,Wt)}else{if(Bt.isInstancedBufferAttribute){for(let Ct=0;Ct<bt.locationSize;Ct++)L(bt.location+Ct,Bt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let Ct=0;Ct<bt.locationSize;Ct++)M(bt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Ct=0;Ct<bt.locationSize;Ct++)T(bt.location+Ct,ot/bt.locationSize,Tt,j,ot*Et,ot/bt.locationSize*Ct*Et,Wt)}}else if(W!==void 0){let j=W[st];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(bt.location,j);break;case 3:i.vertexAttrib3fv(bt.location,j);break;case 4:i.vertexAttrib4fv(bt.location,j);break;default:i.vertexAttrib1fv(bt.location,j)}}}}E()}function B(){D();for(let w in o){let H=o[w];for(let R in H){let $=H[R];for(let Y in $)g($[Y].object),delete $[Y];delete H[R]}delete o[w]}}function b(w){if(o[w.id]===void 0)return;let H=o[w.id];for(let R in H){let $=H[R];for(let Y in $)g($[Y].object),delete $[Y];delete H[R]}delete o[w.id]}function S(w){for(let H in o){let R=o[H];if(R[w.id]===void 0)continue;let $=R[w.id];for(let Y in $)g($[Y].object),delete $[Y];delete R[w.id]}}function D(){U(),h=!0,l!==c&&(l=c,p(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:U,dispose:B,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:M,disableUnusedAttributes:E}}function xg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function _g(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=a||t.has("OES_texture_float"),L=_&&M,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:E}}function vg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new oi,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let v=r?0:n,_=v*4,M=m.clippingState||null;c.value=M,M=h(g,d,_,p);for(let L=0;L!==_;++L)M[L]=e[L];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=c.value,g!==!0||f===null){let m=p+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,M=p;_!==x;++_,M+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(f,M),f[M+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function yg(i){let t=new WeakMap;function e(a,o){return o===Ol?a.mapping=Os:o===Bl&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ol||o===Bl)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Yl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zo=class extends Yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=4,yu=[.125,.215,.35,.446,.526,.582],Ki=20,Tl=new Zo,Mu=new gt,Al=null,Rl=0,Cl=0,Zi=(1+Math.sqrt(5))/2,Ts=1/Zi,bu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Zi,Ts),new N(0,Zi,-Ts),new N(Ts,0,Zi),new N(-Ts,0,Zi),new N(Zi,Ts,0),new N(-Zi,Ts,0)],Ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Rl,Cl),t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ar,format:Nn,colorSpace:zi,depthBuffer:!1},s=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,n,s){let o=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mu),h.toneMapping=Ai,h.autoClear=!1;let p=new ce({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Kt(new gn,p),x=!1,f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(Mu),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):v===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let _=this._cubeSize;bo(s,v*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Os||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;bo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Tl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bu[(s-1)%bu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):Ki;f>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ki}`);let m=[],v=0;for(let T=0;T<Ki;++T){let P=T/x,B=Math.exp(-P*P/2);m.push(B),T===0?v+=B:T<f&&(v+=2*B)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let M=this._sizeLods[s],L=3*M*(s>_-Is?s-_+Is:0),E=4*(this._cubeSize-M);bo(e,L,E,3*M,2*M),c.setRenderTarget(e),c.render(u,Tl)}};function Mg(i){let t=[],e=[],n=[],s=i,r=i-Is+1+yu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Is?c=yu[a-i+Is-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,f=2,m=1,v=new Float32Array(x*g*p),_=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,P=E>2?0:-1,B=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(B,x*g*E),_.set(d,f*g*E);let b=[E,E,E,E,E,E];M.set(b,m*g*E)}let L=new Pe;L.setAttribute("position",new fn(v,x)),L.setAttribute("uv",new fn(_,f)),L.setAttribute("faceIndex",new fn(M,m)),t.push(L),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Su(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){let n=new Float32Array(Ki),s=new N(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Eu(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function Sg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ol||c===Bl,h=c===Os||c===Bs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ws(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ws(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let f=0,m=x.length;f<m;f++)t.remove(x[f])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let f=0,m=x.length;f<m;f++)t.update(x[f],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,M=v.length;_<M;_+=3){let L=v[_+0],E=v[_+1],T=v[_+2];d.push(L,E,E,T,T,L)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){let L=_+0,E=_+1,T=_+2;d.push(L,E,E,T,T,L)}}else return;let f=new(cd(d)?Gs:Hs)(d,1);f.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,f)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Tg(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*c),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let f,m;if(s)f=i,m="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,g,o,p*c,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<x;m++)this.render(p[m]/c,g[m]);else{f.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let m=0;for(let v=0;v<x;v++)m+=g[v];e.update(m,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ag(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t){return i[0]-t[0]}function Cg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Pg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ge,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let D=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let f=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),v===!0&&(E=3);let T=h.attributes.position.count*E,P=1;T>t.maxTextureSize&&(P=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let B=new Float32Array(T*P*4*g),b=new Wo(B,T,P,g);b.type=Xn,b.needsUpdate=!0;let S=E*4;for(let U=0;U<g;U++){let w=_[U],H=M[U],R=L[U],$=T*P*4*U;for(let Y=0;Y<w.count;Y++){let k=Y*S;f===!0&&(a.fromBufferAttribute(w,Y),B[$+k+0]=a.x,B[$+k+1]=a.y,B[$+k+2]=a.z,B[$+k+3]=0),m===!0&&(a.fromBufferAttribute(H,Y),B[$+k+4]=a.x,B[$+k+5]=a.y,B[$+k+6]=a.z,B[$+k+7]=0),v===!0&&(a.fromBufferAttribute(R,Y),B[$+k+8]=a.x,B[$+k+9]=a.y,B[$+k+10]=a.z,B[$+k+11]=R.itemSize===4?a.w:1)}}x={count:g,texture:b,size:new at(T,P)},r.set(h,x),h.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let f=0;for(let v=0;v<d.length;v++)f+=d[v];let m=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort(Cg);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Rg);let x=h.morphAttributes.position,f=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let M=o[_],L=M[0],E=M[1];L!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),f&&h.getAttribute("morphNormal"+_)!==f[L]&&h.setAttribute("morphNormal"+_,f[L]),s[_]=E,m+=E):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Lg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Jo=class extends pn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:ts,h!==ts&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ei),n===void 0&&h===ks&&(n=Qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pd=new pn,md=new Jo(1,1);md.compareFunction=ld;var gd=new Wo,xd=new Xl,_d=new $o,Tu=[],Au=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Pu.set(n),i.uniformMatrix2fv(this.addr,!1,Pu),Fe(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Fe(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Ru.set(n),i.uniformMatrix4fv(this.addr,!1,Ru),Fe(e,n)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?md:pd;e.setTexture2D(t||r,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xd,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_d,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function Kg(i){switch(i){case 5126:return Ig;case 35664:return Dg;case 35665:return Ug;case 35666:return Ng;case 35674:return zg;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function jg(i,t){i.uniform1fv(this.addr,t)}function Qg(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function tx(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function ex(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function nx(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ix(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sx(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rx(i,t){i.uniform1iv(this.addr,t)}function ox(i,t){i.uniform2iv(this.addr,t)}function ax(i,t){i.uniform3iv(this.addr,t)}function lx(i,t){i.uniform4iv(this.addr,t)}function cx(i,t){i.uniform1uiv(this.addr,t)}function hx(i,t){i.uniform2uiv(this.addr,t)}function ux(i,t){i.uniform3uiv(this.addr,t)}function dx(i,t){i.uniform4uiv(this.addr,t)}function fx(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||pd,r[a])}function px(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xd,r[a])}function mx(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||_d,r[a])}function gx(i,t,e){let n=this.cache,s=t.length,r=Ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function xx(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}var $l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kg(e.type)}},Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xx(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Lu(i,t){i.seq.push(t),i.map[t.id]=t}function _x(i,t,e){let n=i.name,s=n.length;for(Pl.lastIndex=0;;){let r=Pl.exec(n),a=Pl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Lu(e,l===void 0?new $l(o,i,t):new Zl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Jl(o),Lu(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);_x(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vx=37297,yx=0;function Mx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function bx(i){let t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(i),n;switch(t===e?n="":t===Oo&&e===Fo?n="LinearDisplayP3ToLinearSRGB":t===Fo&&e===Oo&&(n="LinearSRGBToLinearDisplayP3"),i){case zi:case ya:return[n,"LinearTransferOETF"];case dn:case Uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mx(i.getShaderSource(t),a)}else return s}function Sx(i,t){let e=bx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wx(i,t){let e;switch(t){case Gf:e="Linear";break;case Vf:e="Reinhard";break;case Wf:e="OptimizedCineon";break;case Ic:e="ACESFilmic";break;case qf:e="AgX";break;case Yf:e="Neutral";break;case Xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ex(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Ax(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ds(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(Cx,Lx)}var Px=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lx(i,t){let e=Jt[t];if(e===void 0){let n=Px.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(i){return i.replace(Ix,Dx)}function Dx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ux(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ga?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Nx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Bs:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function Fx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case kf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function Ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Ux(e),l=Nx(e),h=zx(e),u=Fx(e),d=Ox(e),p=e.isWebGL2?"":Ex(e),g=Tx(e),x=Ax(r),f=s.createProgram(),m,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ds).join(`
`),m.length>0&&(m+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ds).join(`
`),v.length>0&&(v+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),v=[p,Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Sx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Kl(a),a=Uu(a,e),a=Nu(a,e),o=Kl(o),o=Uu(o,e),o=Nu(o,e),a=zu(a),o=zu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=_+m+a,L=_+v+o,E=Iu(s,s.VERTEX_SHADER,M),T=Iu(s,s.FRAGMENT_SHADER,L);s.attachShader(f,E),s.attachShader(f,T),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function P(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(f).trim(),w=s.getShaderInfoLog(E).trim(),H=s.getShaderInfoLog(T).trim(),R=!0,$=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(R=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,E,T);else{let Y=Du(s,E,"vertex"),k=Du(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Y+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(w===""||H==="")&&($=!1);$&&(D.diagnostics={runnable:R,programLog:U,vertexShader:{log:w,prefix:m},fragmentShader:{log:H,prefix:v}})}s.deleteShader(E),s.deleteShader(T),B=new Fs(s,f),b=Rx(s,f)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(f,vx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yx++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=T,this}var kx=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}};function Hx(i,t,e,n,s,r,a){let o=new qo,c=new jl,l=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,U,w){let H=U.fog,R=w.geometry,$=b.isMeshStandardMaterial?U.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),k=Y&&Y.mapping===_a?Y.image.height:null,W=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let st=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,bt=st!==void 0?st.length:0,Bt=0;R.morphAttributes.position!==void 0&&(Bt=1),R.morphAttributes.normal!==void 0&&(Bt=2),R.morphAttributes.color!==void 0&&(Bt=3);let j,ot,St,It;if(W){let me=Wn[W];j=me.vertexShader,ot=me.fragmentShader}else j=b.vertexShader,ot=b.fragmentShader,c.update(b),St=c.getVertexShaderID(b),It=c.getFragmentShaderID(b);let Tt=i.getRenderTarget(),Et=w.isInstancedMesh===!0,Wt=w.isBatchedMesh===!0,Ct=!!b.map,I=!!b.matcap,ut=!!Y,tt=!!b.aoMap,ht=!!b.lightMap,nt=!!b.bumpMap,F=!!b.normalMap,it=!!b.displacementMap,lt=!!b.emissiveMap,_t=!!b.metalnessMap,C=!!b.roughnessMap,y=b.anisotropy>0,V=b.clearcoat>0,z=b.iridescence>0,et=b.sheen>0,rt=b.transmission>0,Ht=y&&!!b.anisotropyMap,zt=V&&!!b.clearcoatMap,pt=V&&!!b.clearcoatNormalMap,xt=V&&!!b.clearcoatRoughnessMap,Gt=z&&!!b.iridescenceMap,dt=z&&!!b.iridescenceThicknessMap,Ie=et&&!!b.sheenColorMap,te=et&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Pt=!!b.specularColorMap,Dt=!!b.specularIntensityMap,oe=rt&&!!b.transmissionMap,Yt=rt&&!!b.thicknessMap,ve=!!b.gradientMap,O=!!b.alphaMap,yt=b.alphaTest>0,Z=!!b.alphaHash,ft=!!b.extensions,Mt=Ai;b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let ie={isWebGL2:u,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:ot,defines:b.defines,customVertexShaderID:St,customFragmentShaderID:It,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Wt,instancing:Et,instancingColor:Et&&w.instanceColor!==null,instancingMorph:Et&&w.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:zi,alphaToCoverage:!!b.alphaToCoverage,map:Ct,matcap:I,envMap:ut,envMapMode:ut&&Y.mapping,envMapCubeUVHeight:k,aoMap:tt,lightMap:ht,bumpMap:nt,normalMap:F,displacementMap:p&&it,emissiveMap:lt,normalMapObjectSpace:F&&b.normalMapType===ip,normalMapTangentSpace:F&&b.normalMapType===va,metalnessMap:_t,roughnessMap:C,anisotropy:y,anisotropyMap:Ht,clearcoat:V,clearcoatMap:zt,clearcoatNormalMap:pt,clearcoatRoughnessMap:xt,iridescence:z,iridescenceMap:Gt,iridescenceThicknessMap:dt,sheen:et,sheenColorMap:Ie,sheenRoughnessMap:te,specularMap:Nt,specularColorMap:Pt,specularIntensityMap:Dt,transmission:rt,transmissionMap:oe,thicknessMap:Yt,gradientMap:ve,opaque:b.transparent===!1&&b.blending===Ns&&b.alphaToCoverage===!1,alphaMap:O,alphaTest:yt,alphaHash:Z,combine:b.combine,mapUv:Ct&&f(b.map.channel),aoMapUv:tt&&f(b.aoMap.channel),lightMapUv:ht&&f(b.lightMap.channel),bumpMapUv:nt&&f(b.bumpMap.channel),normalMapUv:F&&f(b.normalMap.channel),displacementMapUv:it&&f(b.displacementMap.channel),emissiveMapUv:lt&&f(b.emissiveMap.channel),metalnessMapUv:_t&&f(b.metalnessMap.channel),roughnessMapUv:C&&f(b.roughnessMap.channel),anisotropyMapUv:Ht&&f(b.anisotropyMap.channel),clearcoatMapUv:zt&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&f(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:te&&f(b.sheenRoughnessMap.channel),specularMapUv:Nt&&f(b.specularMap.channel),specularColorMapUv:Pt&&f(b.specularColorMap.channel),specularIntensityMapUv:Dt&&f(b.specularIntensityMap.channel),transmissionMapUv:oe&&f(b.transmissionMap.channel),thicknessMapUv:Yt&&f(b.thicknessMap.channel),alphaMapUv:O&&f(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(F||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!R.attributes.uv&&(Ct||O),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===de,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ft&&b.extensions.derivatives===!0,extensionFragDepth:ft&&b.extensions.fragDepth===!0,extensionDrawBuffers:ft&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ft&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function v(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.instancingMorph&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.normalMapObjectSpace&&o.enable(7),S.normalMapTangentSpace&&o.enable(8),S.clearcoat&&o.enable(9),S.iridescence&&o.enable(10),S.alphaTest&&o.enable(11),S.vertexColors&&o.enable(12),S.vertexAlphas&&o.enable(13),S.vertexUv1s&&o.enable(14),S.vertexUv2s&&o.enable(15),S.vertexUv3s&&o.enable(16),S.vertexTangents&&o.enable(17),S.anisotropy&&o.enable(18),S.alphaHash&&o.enable(19),S.batching&&o.enable(20),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),b.push(o.mask)}function L(b){let S=x[b.type],D;if(S){let U=Wn[S];D=Rp.clone(U.uniforms)}else D=b.uniforms;return D}function E(b,S){let D;for(let U=0,w=h.length;U<w;U++){let H=h[U];if(H.cacheKey===S){D=H,++D.usedTimes;break}}return D===void 0&&(D=new Bx(i,S,b,r),h.push(D)),D}function T(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:L,acquireProgram:E,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:B}}function Gx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Vx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=f),t++,m}function o(u,d,p,g,x,f){let m=a(u,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(u,d,p,g,x,f){let m=a(u,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Vx),n.length>1&&n.sort(d||Ou),s.length>1&&s.sort(d||Ou)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Wx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Bu,i.set(n,[a])):s>=r.length?(a=new Bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new gt};break;case"SpotLight":e={position:new N,direction:new N,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Yx=0;function $x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zx(i,t){let e=new Xx,n=qx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,a=new fe,o=new fe;function c(h,u){let d=0,p=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let x=0,f=0,m=0,v=0,_=0,M=0,L=0,E=0,T=0,P=0,B=0;h.sort($x);let b=u===!0?Math.PI:1;for(let D=0,U=h.length;D<U;D++){let w=h[D],H=w.color,R=w.intensity,$=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=H.r*R*b,p+=H.g*R*b,g+=H.b*R*b;else if(w.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(w.sh.coefficients[k],R);B++}else if(w.isDirectionalLight){let k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity*b),w.castShadow){let W=w.shadow,st=n.get(w);st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize=W.mapSize,s.directionalShadow[x]=st,s.directionalShadowMap[x]=Y,s.directionalShadowMatrix[x]=w.shadow.matrix,M++}s.directional[x]=k,x++}else if(w.isSpotLight){let k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(H).multiplyScalar(R*b),k.distance=$,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,s.spot[m]=k;let W=w.shadow;if(w.map&&(s.spotLightMap[T]=w.map,T++,W.updateMatrices(w),w.castShadow&&P++),s.spotLightMatrix[m]=W.matrix,w.castShadow){let st=n.get(w);st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize=W.mapSize,s.spotShadow[m]=st,s.spotShadowMap[m]=Y,E++}m++}else if(w.isRectAreaLight){let k=e.get(w);k.color.copy(H).multiplyScalar(R),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),s.rectArea[v]=k,v++}else if(w.isPointLight){let k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity*b),k.distance=w.distance,k.decay=w.decay,w.castShadow){let W=w.shadow,st=n.get(w);st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize=W.mapSize,st.shadowCameraNear=W.camera.near,st.shadowCameraFar=W.camera.far,s.pointShadow[f]=st,s.pointShadowMap[f]=Y,s.pointShadowMatrix[f]=w.shadow.matrix,L++}s.point[f]=k,f++}else if(w.isHemisphereLight){let k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(R*b),k.groundColor.copy(w.groundColor).multiplyScalar(R*b),s.hemi[_]=k,_++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let S=s.hash;(S.directionalLength!==x||S.pointLength!==f||S.spotLength!==m||S.rectAreaLength!==v||S.hemiLength!==_||S.numDirectionalShadows!==M||S.numPointShadows!==L||S.numSpotShadows!==E||S.numSpotMaps!==T||S.numLightProbes!==B)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=v,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=E+T-P,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=B,S.directionalLength=x,S.pointLength=f,S.spotLength=m,S.rectAreaLength=v,S.hemiLength=_,S.numDirectionalShadows=M,S.numPointShadows=L,S.numSpotShadows=E,S.numSpotMaps=T,S.numLightProbes=B,s.version=Yx++)}function l(h,u){let d=0,p=0,g=0,x=0,f=0,m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let M=h[v];if(M.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),d++}else if(M.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let L=s.hemi[f];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(m),f++}}}return{setup:c,setupView:l,state:s}}function ku(i,t){let e=new Zx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Jx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new ku(i,t),e.set(r,[c])):a>=o.length?(c=new ku(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var tc=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ec=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
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
}`;function Qx(i,t,e){let n=new Rr,s=new at,r=new at,a=new Ge,o=new tc({depthPacking:np}),c=new ec,l={},h=e.maxTextureSize,u={[Pi]:Ve,[Ve]:Pi,[de]:de},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Kx,fragmentShader:jx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let m=this.type;this.render=function(E,T,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let B=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ti),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=m!==ri&&this.type===ri,w=m===ri&&this.type!==ri;for(let H=0,R=E.length;H<R;H++){let $=E[H],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let k=Y.getFrameExtents();if(s.multiply(k),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,Y.mapSize.y=r.y)),Y.map===null||U===!0||w===!0){let st=this.type!==ri?{minFilter:Ye,magFilter:Ye}:{};Y.map!==null&&Y.map.dispose(),Y.map=new hi(s.x,s.y,st),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let W=Y.getViewportCount();for(let st=0;st<W;st++){let bt=Y.getViewport(st);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),D.viewport(a),Y.updateMatrices($,st),n=Y.getFrustum(),M(T,P,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===ri&&v(Y,P),Y.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(B,b,S)};function v(E,T){let P=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,P,p,x,null)}function _(E,T,P,B){let b=null,S=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)b=S;else if(b=P.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let D=b.uuid,U=T.uuid,w=l[D];w===void 0&&(w={},l[D]=w);let H=w[U];H===void 0&&(H=b.clone(),w[U]=H,T.addEventListener("dispose",L)),b=H}if(b.visible=T.visible,b.wireframe=T.wireframe,B===ri?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=i.properties.get(b);D.light=P}return b}function M(E,T,P,B,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let U=t.update(E),w=E.material;if(Array.isArray(w)){let H=U.groups;for(let R=0,$=H.length;R<$;R++){let Y=H[R],k=w[Y.materialIndex];if(k&&k.visible){let W=_(E,k,B,b);E.onBeforeShadow(i,E,T,P,U,W,Y),i.renderBufferDirect(P,null,U,W,E,Y),E.onAfterShadow(i,E,T,P,U,W,Y)}}}else if(w.visible){let H=_(E,w,B,b);E.onBeforeShadow(i,E,T,P,U,H,null),i.renderBufferDirect(P,null,U,H,E,null),E.onAfterShadow(i,E,T,P,U,H,null)}}let D=E.children;for(let U=0,w=D.length;U<w;U++)M(D[U],T,P,B,b)}function L(E){E.target.removeEventListener("dispose",L);for(let P in l){let B=l[P],b=E.target.uuid;b in B&&(B[b].dispose(),delete B[b])}}}function t_(i,t,e){let n=e.isWebGL2;function s(){let O=!1,yt=new Ge,Z=null,ft=new Ge(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!O&&(i.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,ie,me,qe,Tn){Tn===!0&&(Mt*=qe,ie*=qe,me*=qe),yt.set(Mt,ie,me,qe),ft.equals(yt)===!1&&(i.clearColor(Mt,ie,me,qe),ft.copy(yt))},reset:function(){O=!1,Z=null,ft.set(-1,0,0,0)}}}function r(){let O=!1,yt=null,Z=null,ft=null;return{setTest:function(Mt){Mt?Et(i.DEPTH_TEST):Wt(i.DEPTH_TEST)},setMask:function(Mt){yt!==Mt&&!O&&(i.depthMask(Mt),yt=Mt)},setFunc:function(Mt){if(Z!==Mt){switch(Mt){case Df:i.depthFunc(i.NEVER);break;case Uf:i.depthFunc(i.ALWAYS);break;case Nf:i.depthFunc(i.LESS);break;case Do:i.depthFunc(i.LEQUAL);break;case zf:i.depthFunc(i.EQUAL);break;case Ff:i.depthFunc(i.GEQUAL);break;case Of:i.depthFunc(i.GREATER);break;case Bf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){ft!==Mt&&(i.clearDepth(Mt),ft=Mt)},reset:function(){O=!1,yt=null,Z=null,ft=null}}}function a(){let O=!1,yt=null,Z=null,ft=null,Mt=null,ie=null,me=null,qe=null,Tn=null;return{setTest:function(ge){O||(ge?Et(i.STENCIL_TEST):Wt(i.STENCIL_TEST))},setMask:function(ge){yt!==ge&&!O&&(i.stencilMask(ge),yt=ge)},setFunc:function(ge,rn,Vn){(Z!==ge||ft!==rn||Mt!==Vn)&&(i.stencilFunc(ge,rn,Vn),Z=ge,ft=rn,Mt=Vn)},setOp:function(ge,rn,Vn){(ie!==ge||me!==rn||qe!==Vn)&&(i.stencilOp(ge,rn,Vn),ie=ge,me=rn,qe=Vn)},setLocked:function(ge){O=ge},setClear:function(ge){Tn!==ge&&(i.clearStencil(ge),Tn=ge)},reset:function(){O=!1,yt=null,Z=null,ft=null,Mt=null,ie=null,me=null,qe=null,Tn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],f=null,m=!1,v=null,_=null,M=null,L=null,E=null,T=null,P=null,B=new gt(0,0,0),b=0,S=!1,D=null,U=null,w=null,H=null,R=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,k=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=k>=2);let st=null,bt={},Bt=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ot=new Ge().fromArray(Bt),St=new Ge().fromArray(j);function It(O,yt,Z,ft){let Mt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(O,ie),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<Z;me++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(yt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(yt+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return ie}let Tt={};Tt[i.TEXTURE_2D]=It(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=It(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Tt[i.TEXTURE_2D_ARRAY]=It(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=It(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Et(i.DEPTH_TEST),c.setFunc(Do),it(!1),lt(vh),Et(i.CULL_FACE),nt(Ti);function Et(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Wt(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ct(O,yt){return p[O]!==yt?(i.bindFramebuffer(O,yt),p[O]=yt,n&&(O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=yt)),!0):!1}function I(O,yt){let Z=x,ft=!1;if(O){Z=g.get(yt),Z===void 0&&(Z=[],g.set(yt,Z));let Mt=O.textures;if(Z.length!==Mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,me=Mt.length;ie<me;ie++)Z[ie]=i.COLOR_ATTACHMENT0+ie;Z.length=Mt.length,ft=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ft=!0);if(ft)if(e.isWebGL2)i.drawBuffers(Z);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ut(O){return f!==O?(i.useProgram(O),f=O,!0):!1}let tt={[Ji]:i.FUNC_ADD,[_f]:i.FUNC_SUBTRACT,[vf]:i.FUNC_REVERSE_SUBTRACT};if(n)tt[bh]=i.MIN,tt[Sh]=i.MAX;else{let O=t.get("EXT_blend_minmax");O!==null&&(tt[bh]=O.MIN_EXT,tt[Sh]=O.MAX_EXT)}let ht={[yf]:i.ZERO,[Mf]:i.ONE,[bf]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Rf]:i.SRC_ALPHA_SATURATE,[Tf]:i.DST_COLOR,[wf]:i.DST_ALPHA,[Sf]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[Af]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(O,yt,Z,ft,Mt,ie,me,qe,Tn,ge){if(O===Ti){m===!0&&(Wt(i.BLEND),m=!1);return}if(m===!1&&(Et(i.BLEND),m=!0),O!==xf){if(O!==v||ge!==S){if((_!==Ji||E!==Ji)&&(i.blendEquation(i.FUNC_ADD),_=Ji,E=Ji),ge)switch(O){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,L=null,T=null,P=null,B.set(0,0,0),b=0,v=O,S=ge}return}Mt=Mt||yt,ie=ie||Z,me=me||ft,(yt!==_||Mt!==E)&&(i.blendEquationSeparate(tt[yt],tt[Mt]),_=yt,E=Mt),(Z!==M||ft!==L||ie!==T||me!==P)&&(i.blendFuncSeparate(ht[Z],ht[ft],ht[ie],ht[me]),M=Z,L=ft,T=ie,P=me),(qe.equals(B)===!1||Tn!==b)&&(i.blendColor(qe.r,qe.g,qe.b,Tn),B.copy(qe),b=Tn),v=O,S=!1}function F(O,yt){O.side===de?Wt(i.CULL_FACE):Et(i.CULL_FACE);let Z=O.side===Ve;yt&&(Z=!Z),it(Z),O.blending===Ns&&O.transparent===!1?nt(Ti):nt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);let ft=O.stencilWrite;l.setTest(ft),ft&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function lt(O){O!==mf?(Et(i.CULL_FACE),O!==U&&(O===vh?i.cullFace(i.BACK):O===gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Wt(i.CULL_FACE),U=O}function _t(O){O!==w&&(Y&&i.lineWidth(O),w=O)}function C(O,yt,Z){O?(Et(i.POLYGON_OFFSET_FILL),(H!==yt||R!==Z)&&(i.polygonOffset(yt,Z),H=yt,R=Z)):Wt(i.POLYGON_OFFSET_FILL)}function y(O){O?Et(i.SCISSOR_TEST):Wt(i.SCISSOR_TEST)}function V(O){O===void 0&&(O=i.TEXTURE0+$-1),st!==O&&(i.activeTexture(O),st=O)}function z(O,yt,Z){Z===void 0&&(st===null?Z=i.TEXTURE0+$-1:Z=st);let ft=bt[Z];ft===void 0&&(ft={type:void 0,texture:void 0},bt[Z]=ft),(ft.type!==O||ft.texture!==yt)&&(st!==Z&&(i.activeTexture(Z),st=Z),i.bindTexture(O,yt||Tt[O]),ft.type=O,ft.texture=yt)}function et(){let O=bt[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(O){ot.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ot.copy(O))}function Dt(O){St.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),St.copy(O))}function oe(O,yt){let Z=u.get(yt);Z===void 0&&(Z=new WeakMap,u.set(yt,Z));let ft=Z.get(O);ft===void 0&&(ft=i.getUniformBlockIndex(yt,O.name),Z.set(O,ft))}function Yt(O,yt){let ft=u.get(yt).get(O);h.get(yt)!==ft&&(i.uniformBlockBinding(yt,ft,O.__bindingPointIndex),h.set(yt,ft))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},st=null,bt={},p={},g=new WeakMap,x=[],f=null,m=!1,v=null,_=null,M=null,L=null,E=null,T=null,P=null,B=new gt(0,0,0),b=0,S=!1,D=null,U=null,w=null,H=null,R=null,ot.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Et,disable:Wt,bindFramebuffer:Ct,drawBuffers:I,useProgram:ut,setBlending:nt,setMaterial:F,setFlipSided:it,setCullFace:lt,setLineWidth:_t,setPolygonOffset:C,setScissorTest:y,activeTexture:V,bindTexture:z,unbindTexture:et,compressedTexImage2D:rt,compressedTexImage3D:Ht,texImage2D:te,texImage3D:Nt,updateUBOMapping:oe,uniformBlockBinding:Yt,texStorage2D:dt,texStorage3D:Ie,texSubImage2D:zt,texSubImage3D:pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Gt,scissor:Pt,viewport:Dt,reset:ve}}function e_(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,u=new WeakMap,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function x(C,y){return g?new OffscreenCanvas(C,y):Ho("canvas")}function f(C,y,V,z){let et=1,rt=_t(C);if((rt.width>z||rt.height>z)&&(et=z/Math.max(rt.width,rt.height)),et<1||y===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let Ht=y?Vl:Math.floor,zt=Ht(et*rt.width),pt=Ht(et*rt.height);d===void 0&&(d=x(zt,pt));let xt=V?x(zt,pt):d;return xt.width=zt,xt.height=pt,xt.getContext("2d").drawImage(C,0,0,zt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+zt+"x"+pt+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function m(C){let y=_t(C);return eu(y.width)&&eu(y.height)}function v(C){return o?!1:C.wrapS!==Mn||C.wrapT!==Mn||C.minFilter!==Ye&&C.minFilter!==tn}function _(C,y){return C.generateMipmaps&&y&&C.minFilter!==Ye&&C.minFilter!==tn}function M(C){i.generateMipmap(C)}function L(C,y,V,z,et=!1){if(o===!1)return y;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=y;if(y===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RG8UI),V===i.UNSIGNED_SHORT&&(rt=i.RG16UI),V===i.UNSIGNED_INT&&(rt=i.RG32UI),V===i.BYTE&&(rt=i.RG8I),V===i.SHORT&&(rt=i.RG16I),V===i.INT&&(rt=i.RG32I)),y===i.RGBA){let Ht=et?zo:ue.getTransfer(z);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=Ht===xe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(C,y,V){return _(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){return C===Ye||C===wh||C===fr?i.NEAREST:i.LINEAR}function P(C){let y=C.target;y.removeEventListener("dispose",P),b(y),y.isVideoTexture&&u.delete(y)}function B(C){let y=C.target;y.removeEventListener("dispose",B),D(y)}function b(C){let y=n.get(C);if(y.__webglInit===void 0)return;let V=C.source,z=p.get(V);if(z){let et=z[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(C),Object.keys(z).length===0&&p.delete(V)}n.remove(C)}function S(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let V=C.source,z=p.get(V);delete z[y.__cacheKey],a.memory.textures--}function D(C){let y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let et=0;et<y.__webglFramebuffer[z].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[z][et]);else i.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)i.deleteFramebuffer(y.__webglFramebuffer[z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=C.textures;for(let z=0,et=V.length;z<et;z++){let rt=n.get(V[z]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(V[z])}n.remove(C)}let U=0;function w(){U=0}function H(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function R(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function $(C,y){let V=n.get(C);if(C.isVideoTexture&&it(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let z=C.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(V,C,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function Y(C,y){let V=n.get(C);if(C.version>0&&V.__version!==C.version){St(V,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function k(C,y){let V=n.get(C);if(C.version>0&&V.__version!==C.version){St(V,C,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function W(C,y){let V=n.get(C);if(C.version>0&&V.__version!==C.version){It(V,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let st={[Tr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[kl]:i.MIRRORED_REPEAT},bt={[Ye]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Bt={[sp]:i.NEVER,[hp]:i.ALWAYS,[rp]:i.LESS,[ld]:i.LEQUAL,[op]:i.EQUAL,[cp]:i.GEQUAL,[ap]:i.GREATER,[lp]:i.NOTEQUAL};function j(C,y,V){if(y.type===Xn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===ja||y.magFilter===fr||y.magFilter===ai||y.minFilter===tn||y.minFilter===ja||y.minFilter===fr||y.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(i.texParameteri(C,i.TEXTURE_WRAP_S,st[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,st[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,st[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,bt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,bt[y.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Mn||y.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Ye&&y.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ye||y.minFilter!==fr&&y.minFilter!==ai||y.type===Xn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ar&&t.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ot(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));let z=y.source,et=p.get(z);et===void 0&&(et={},p.set(z,et));let rt=R(y);if(rt!==C.__cacheKey){et[rt]===void 0&&(et[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[rt].usedTimes++;let Ht=et[C.__cacheKey];Ht!==void 0&&(et[C.__cacheKey].usedTimes--,Ht.usedTimes===0&&S(y)),C.__cacheKey=rt,C.__webglTexture=et[rt].texture}return V}function St(C,y,V){let z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=i.TEXTURE_3D);let et=ot(C,y),rt=y.source;e.bindTexture(z,C.__webglTexture,i.TEXTURE0+V);let Ht=n.get(rt);if(rt.version!==Ht.__version||et===!0){e.activeTexture(i.TEXTURE0+V);let zt=ue.getPrimaries(ue.workingColorSpace),pt=y.colorSpace===wi?null:ue.getPrimaries(y.colorSpace),xt=y.colorSpace===wi||zt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Gt=v(y)&&m(y.image)===!1,dt=f(y.image,Gt,!1,s.maxTextureSize);dt=lt(y,dt);let Ie=m(dt)||o,te=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type),Pt=L(y.internalFormat,te,Nt,y.colorSpace,y.isVideoTexture);j(z,y,Ie);let Dt,oe=y.mipmaps,Yt=o&&y.isVideoTexture!==!0&&Pt!==ad,ve=Ht.__version===void 0||et===!0,O=rt.dataReady,yt=E(y,dt,Ie);if(y.isDepthTexture)Pt=i.DEPTH_COMPONENT,o?y.type===Xn?Pt=i.DEPTH_COMPONENT32F:y.type===Ei?Pt=i.DEPTH_COMPONENT24:y.type===Qi?Pt=i.DEPTH24_STENCIL8:Pt=i.DEPTH_COMPONENT16:y.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ts&&Pt===i.DEPTH_COMPONENT&&y.type!==Dc&&y.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ei,Nt=r.convert(y.type)),y.format===ks&&Pt===i.DEPTH_COMPONENT&&(Pt=i.DEPTH_STENCIL,y.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Qi,Nt=r.convert(y.type))),ve&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Pt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,dt.width,dt.height,0,te,Nt,null));else if(y.isDataTexture)if(oe.length>0&&Ie){Yt&&ve&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,oe[0].width,oe[0].height);for(let Z=0,ft=oe.length;Z<ft;Z++)Dt=oe[Z],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Dt.width,Dt.height,te,Nt,Dt.data):e.texImage2D(i.TEXTURE_2D,Z,Pt,Dt.width,Dt.height,0,te,Nt,Dt.data);y.generateMipmaps=!1}else Yt?(ve&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,dt.width,dt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,te,Nt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,dt.width,dt.height,0,te,Nt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Yt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,oe[0].width,oe[0].height,dt.depth);for(let Z=0,ft=oe.length;Z<ft;Z++)Dt=oe[Z],y.format!==Nn?te!==null?Yt?O&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Dt.width,Dt.height,dt.depth,te,Dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Pt,Dt.width,Dt.height,dt.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Dt.width,Dt.height,dt.depth,te,Nt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Pt,Dt.width,Dt.height,dt.depth,0,te,Nt,Dt.data)}else{Yt&&ve&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,oe[0].width,oe[0].height);for(let Z=0,ft=oe.length;Z<ft;Z++)Dt=oe[Z],y.format!==Nn?te!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Dt.width,Dt.height,te,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Pt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Dt.width,Dt.height,te,Nt,Dt.data):e.texImage2D(i.TEXTURE_2D,Z,Pt,Dt.width,Dt.height,0,te,Nt,Dt.data)}else if(y.isDataArrayTexture)Yt?(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,dt.width,dt.height,dt.depth),O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,te,Nt,dt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,dt.width,dt.height,dt.depth,0,te,Nt,dt.data);else if(y.isData3DTexture)Yt?(ve&&e.texStorage3D(i.TEXTURE_3D,yt,Pt,dt.width,dt.height,dt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,te,Nt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,dt.width,dt.height,dt.depth,0,te,Nt,dt.data);else if(y.isFramebufferTexture){if(ve)if(Yt)e.texStorage2D(i.TEXTURE_2D,yt,Pt,dt.width,dt.height);else{let Z=dt.width,ft=dt.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Pt,Z,ft,0,te,Nt,null),Z>>=1,ft>>=1}}else if(oe.length>0&&Ie){if(Yt&&ve){let Z=_t(oe[0]);e.texStorage2D(i.TEXTURE_2D,yt,Pt,Z.width,Z.height)}for(let Z=0,ft=oe.length;Z<ft;Z++)Dt=oe[Z],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,te,Nt,Dt):e.texImage2D(i.TEXTURE_2D,Z,Pt,te,Nt,Dt);y.generateMipmaps=!1}else if(Yt){if(ve){let Z=_t(dt);e.texStorage2D(i.TEXTURE_2D,yt,Pt,Z.width,Z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,Nt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,te,Nt,dt);_(y,Ie)&&M(z),Ht.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function It(C,y,V){if(y.image.length!==6)return;let z=ot(C,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let rt=n.get(et);if(et.version!==rt.__version||z===!0){e.activeTexture(i.TEXTURE0+V);let Ht=ue.getPrimaries(ue.workingColorSpace),zt=y.colorSpace===wi?null:ue.getPrimaries(y.colorSpace),pt=y.colorSpace===wi||Ht===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let xt=y.isCompressedTexture||y.image[0].isCompressedTexture,Gt=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!xt&&!Gt?dt[Z]=f(y.image[Z],!1,!0,s.maxCubemapSize):dt[Z]=Gt?y.image[Z].image:y.image[Z],dt[Z]=lt(y,dt[Z]);let Ie=dt[0],te=m(Ie)||o,Nt=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),Dt=L(y.internalFormat,Nt,Pt,y.colorSpace),oe=o&&y.isVideoTexture!==!0,Yt=rt.__version===void 0||z===!0,ve=et.dataReady,O=E(y,Ie,te);j(i.TEXTURE_CUBE_MAP,y,te);let yt;if(xt){oe&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,O,Dt,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){yt=dt[Z].mipmaps;for(let ft=0;ft<yt.length;ft++){let Mt=yt[ft];y.format!==Nn?Nt!==null?oe?ve&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,Mt.width,Mt.height,Nt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?ve&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,Mt.width,Mt.height,Nt,Pt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,Dt,Mt.width,Mt.height,0,Nt,Pt,Mt.data)}}}else{if(yt=y.mipmaps,oe&&Yt){yt.length>0&&O++;let Z=_t(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,O,Dt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Gt){oe?ve&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Nt,Pt,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Dt,dt[Z].width,dt[Z].height,0,Nt,Pt,dt[Z].data);for(let ft=0;ft<yt.length;ft++){let ie=yt[ft].image[Z].image;oe?ve&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,ie.width,ie.height,Nt,Pt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,Dt,ie.width,ie.height,0,Nt,Pt,ie.data)}}else{oe?ve&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,Pt,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Dt,Nt,Pt,dt[Z]);for(let ft=0;ft<yt.length;ft++){let Mt=yt[ft];oe?ve&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,Nt,Pt,Mt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,Dt,Nt,Pt,Mt.image[Z])}}}_(y,te)&&M(i.TEXTURE_CUBE_MAP),rt.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Tt(C,y,V,z,et,rt){let Ht=r.convert(V.format,V.colorSpace),zt=r.convert(V.type),pt=L(V.internalFormat,Ht,zt,V.colorSpace);if(!n.get(y).__hasExternalTextures){let Gt=Math.max(1,y.width>>rt),dt=Math.max(1,y.height>>rt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,rt,pt,Gt,dt,y.depth,0,Ht,zt,null):e.texImage2D(et,rt,pt,Gt,dt,0,Ht,zt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),F(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,et,n.get(V).__webglTexture,0,nt(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,et,n.get(V).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer&&!y.stencilBuffer){let z=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||F(y)){let et=y.depthTexture;et&&et.isDepthTexture&&(et.type===Xn?z=i.DEPTH_COMPONENT32F:et.type===Ei&&(z=i.DEPTH_COMPONENT24));let rt=nt(y);F(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,z,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,z,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(y.depthBuffer&&y.stencilBuffer){let z=nt(y);V&&F(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,y.width,y.height):F(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let z=y.textures;for(let et=0;et<z.length;et++){let rt=z[et],Ht=r.convert(rt.format,rt.colorSpace),zt=r.convert(rt.type),pt=L(rt.internalFormat,Ht,zt,rt.colorSpace),xt=nt(y);V&&F(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,pt,y.width,y.height):F(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);let z=n.get(y.depthTexture).__webglTexture,et=nt(y);if(y.depthTexture.format===ts)F(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(y.depthTexture.format===ks)F(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ct(C){let y=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Wt(y.__webglFramebuffer,C)}else if(V){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]=i.createRenderbuffer(),Et(y.__webglDepthbuffer[z],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Et(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(C,y,V){let z=n.get(C);y!==void 0&&Tt(z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ct(C)}function ut(C){let y=C.texture,V=n.get(C),z=n.get(y);C.addEventListener("dispose",B);let et=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Ht=et.length>1,zt=m(C)||o;if(Ht||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=y.version,a.memory.textures++),rt){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let xt=0;xt<y.mipmaps.length;xt++)V.__webglFramebuffer[pt][xt]=i.createFramebuffer()}else V.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)V.__webglFramebuffer[pt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ht)if(s.drawBuffers)for(let pt=0,xt=et.length;pt<xt;pt++){let Gt=n.get(et[pt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&F(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){let xt=et[pt];V.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);let Gt=r.convert(xt.format,xt.colorSpace),dt=r.convert(xt.type),Ie=L(xt.internalFormat,Gt,dt,xt.colorSpace,C.isXRRenderTarget===!0),te=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Ie,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),j(i.TEXTURE_CUBE_MAP,y,zt);for(let pt=0;pt<6;pt++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)Tt(V.__webglFramebuffer[pt][xt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else Tt(V.__webglFramebuffer[pt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(y,zt)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let pt=0,xt=et.length;pt<xt;pt++){let Gt=et[pt],dt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),j(i.TEXTURE_2D,Gt,zt),Tt(V.__webglFramebuffer,C,Gt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),_(Gt,zt)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,z.__webglTexture),j(pt,y,zt),o&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)Tt(V.__webglFramebuffer[xt],C,y,i.COLOR_ATTACHMENT0,pt,xt);else Tt(V.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,pt,0);_(y,zt)&&M(pt),e.unbindTexture()}C.depthBuffer&&Ct(C)}function tt(C){let y=m(C)||o,V=C.textures;for(let z=0,et=V.length;z<et;z++){let rt=V[z];if(_(rt,y)){let Ht=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,zt=n.get(rt).__webglTexture;e.bindTexture(Ht,zt),M(Ht),e.unbindTexture()}}}function ht(C){if(o&&C.samples>0&&F(C)===!1){let y=C.textures,V=C.width,z=C.height,et=i.COLOR_BUFFER_BIT,rt=[],Ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(C),pt=y.length>1;if(pt)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){rt.push(i.COLOR_ATTACHMENT0+xt),C.depthBuffer&&rt.push(Ht);let Gt=zt.__ignoreDepthValues!==void 0?zt.__ignoreDepthValues:!1;if(Gt===!1&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[xt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ht]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ht])),pt){let dt=n.get(y[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,V,z,0,0,V,z,et,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[xt]);let Gt=n.get(y[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}}function nt(C){return Math.min(s.maxSamples,C.samples)}function F(C){let y=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function it(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function lt(C,y){let V=C.colorSpace,z=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Gl||V!==zi&&V!==wi&&(ue.getTransfer(V)===xe?o===!1?t.has("EXT_sRGB")===!0&&z===Nn?(C.format=Gl,C.minFilter=tn,C.generateMipmaps=!1):y=Go.sRGBToLinear(y):(z!==Nn||et!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function _t(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=I,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=F}function n_(i,t,e){let n=e.isWebGL2;function s(r,a=wi){let o,c=ue.getTransfer(a);if(r===Ri)return i.UNSIGNED_BYTE;if(r===ed)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$f)return i.BYTE;if(r===Zf)return i.SHORT;if(r===Dc)return i.UNSIGNED_SHORT;if(r===td)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===Xn)return i.FLOAT;if(r===Ar)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Jf)return i.ALPHA;if(r===Nn)return i.RGBA;if(r===Kf)return i.LUMINANCE;if(r===jf)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===ks)return i.DEPTH_STENCIL;if(r===Gl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===id)return i.RED;if(r===sd)return i.RED_INTEGER;if(r===Qf)return i.RG;if(r===rd)return i.RG_INTEGER;if(r===od)return i.RGBA_INTEGER;if(r===Qa||r===tl||r===el||r===nl)if(c===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===Th||r===Ah||r===Rh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ad)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ch||r===Ph)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ch)return c===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ph)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lh||r===Ih||r===Dh||r===Uh||r===Nh||r===zh||r===Fh||r===Oh||r===Bh||r===kh||r===Hh||r===Gh||r===Vh||r===Wh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Lh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===il||r===Xh||r===qh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===il)return c===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===Yh||r===$h||r===Zh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===il)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Yh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$h)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var nc=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ln=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},i_={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),m=this._getHandJoint(l,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new $n({extensions:{fragDepth:!0},vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new We(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},sc=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=new ic,f=e.getContextAttributes(),m=null,v=null,_=[],M=[],L=new at,E=null,T=new en;T.layers.enable(1),T.viewport=new Ge;let P=new en;P.layers.enable(2),P.viewport=new Ge;let B=[T,P],b=new nc;b.layers.enable(1),b.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=_[j];return ot===void 0&&(ot=new Sr,_[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=_[j];return ot===void 0&&(ot=new Sr,_[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=_[j];return ot===void 0&&(ot=new Sr,_[j]=ot),ot.getHandSpace()};function U(j){let ot=M.indexOf(j.inputSource);if(ot===-1)return;let St=_[ot];St!==void 0&&(St.update(j.inputSource,j.frame,l||a),St.dispatchEvent({type:j.type,data:j.inputSource}))}function w(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",H);for(let j=0;j<_.length;j++){let ot=M[j];ot!==null&&(M[j]=null,_[j].disconnect(ot))}S=null,D=null,x.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,v=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",w),s.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ot={antialias:s.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new hi(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let ot=null,St=null,It=null;f.depth&&(It=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=f.stencil?ks:ts,St=f.stencil?Qi:Ei);let Tt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new hi(d.textureWidth,d.textureHeight,{format:Nn,type:Ri,depthTexture:new Jo(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});let Et=t.properties.get(v);Et.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(j){for(let ot=0;ot<j.removed.length;ot++){let St=j.removed[ot],It=M.indexOf(St);It>=0&&(M[It]=null,_[It].disconnect(St))}for(let ot=0;ot<j.added.length;ot++){let St=j.added[ot],It=M.indexOf(St);if(It===-1){for(let Et=0;Et<_.length;Et++)if(Et>=M.length){M.push(St),It=Et;break}else if(M[Et]===null){M[Et]=St,It=Et;break}if(It===-1)break}let Tt=_[It];Tt&&Tt.connect(St)}}let R=new N,$=new N;function Y(j,ot,St){R.setFromMatrixPosition(ot.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);let It=R.distanceTo($),Tt=ot.projectionMatrix.elements,Et=St.projectionMatrix.elements,Wt=Tt[14]/(Tt[10]-1),Ct=Tt[14]/(Tt[10]+1),I=(Tt[9]+1)/Tt[5],ut=(Tt[9]-1)/Tt[5],tt=(Tt[8]-1)/Tt[0],ht=(Et[8]+1)/Et[0],nt=Wt*tt,F=Wt*ht,it=It/(-tt+ht),lt=it*-tt;ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(lt),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let _t=Wt+it,C=Ct+it,y=nt-lt,V=F+(It-lt),z=I*Ct/C*_t,et=ut*Ct/C*_t;j.projectionMatrix.makePerspective(y,V,z,et,_t,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function k(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),b.near=P.near=T.near=j.near,b.far=P.far=T.far=j.far,(S!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,D=b.far,T.near=S,T.far=D,P.near=S,P.far=D,T.updateProjectionMatrix(),P.updateProjectionMatrix(),j.updateProjectionMatrix());let ot=j.parent,St=b.cameras;k(b,ot);for(let It=0;It<St.length;It++)k(St[It],ot);St.length===2?Y(b,T,P):b.projectionMatrix.copy(T.projectionMatrix),W(j,b,ot)};function W(j,ot,St){St===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ko*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null};let st=null;function bt(j,ot){if(h=ot.getViewerPose(l||a),g=ot,h!==null){let St=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let It=!1;St.length!==b.cameras.length&&(b.cameras.length=0,It=!0);for(let Et=0;Et<St.length;Et++){let Wt=St[Et],Ct=null;if(p!==null)Ct=p.getViewport(Wt);else{let ut=u.getViewSubImage(d,Wt);Ct=ut.viewport,Et===0&&(t.setRenderTargetTextures(v,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(v))}let I=B[Et];I===void 0&&(I=new en,I.layers.enable(Et),I.viewport=new Ge,B[Et]=I),I.matrix.fromArray(Wt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Wt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Et===0&&(b.matrix.copy(I.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),It===!0&&b.cameras.push(I)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Et=u.getDepthInformation(St[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,s.renderState)}}for(let St=0;St<_.length;St++){let It=M[St],Tt=_[St];It!==null&&Tt!==void 0&&Tt.update(It,ot,l||a)}x.render(t,b),st&&st(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let Bt=new fd;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(j){st=j},this.dispose=function(){}}},$i=new mn,o_=new fe;function a_(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,dd(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,v,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),x(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,v,_):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ve&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ve&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let v=t.get(m),_=v.envMap,M=v.envMapRotation;if(_&&(f.envMap.value=_,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),f.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler($i)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let L=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*L,e(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,v,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*v,f.scale.value=_*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),t.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,v){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){let v=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let M=_.program;n.uniformBlockBinding(v,M)}function l(v,_){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",f));let L=_.program;n.updateUBOMapping(v,L);let E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let _=u();v.__bindingPointIndex=_;let M=i.createBuffer(),L=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],M=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let B=0,b=P.length;B<b;B++){let S=P[B];if(p(S,E,B,L)===!0){let D=S.__offset,U=Array.isArray(S.value)?S.value:[S.value],w=0;for(let H=0;H<U.length;H++){let R=U[H],$=x(R);typeof R=="number"||typeof R=="boolean"?(S.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,D+w,S.__data)):R.isMatrix3?(S.__data[0]=R.elements[0],S.__data[1]=R.elements[1],S.__data[2]=R.elements[2],S.__data[3]=0,S.__data[4]=R.elements[3],S.__data[5]=R.elements[4],S.__data[6]=R.elements[5],S.__data[7]=0,S.__data[8]=R.elements[6],S.__data[9]=R.elements[7],S.__data[10]=R.elements[8],S.__data[11]=0):(R.toArray(S.__data,w),w+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,_,M,L){let E=v.value,T=_+"_"+M;if(L[T]===void 0)return typeof E=="number"||typeof E=="boolean"?L[T]=E:L[T]=E.clone(),!0;{let P=L[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return L[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(v){let _=v.uniforms,M=0,L=16;for(let T=0,P=_.length;T<P;T++){let B=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,S=B.length;b<S;b++){let D=B[b],U=Array.isArray(D.value)?D.value:[D.value];for(let w=0,H=U.length;w<H;w++){let R=U[w],$=x(R),Y=M%L;Y!==0&&L-Y<$.boundary&&(M+=L-Y),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=$.storage}}}let E=M%L;return E>0&&(M+=L-E),v.__size=M,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function f(v){let _=v.target;_.removeEventListener("dispose",f);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Cr=class{constructor(t={}){let{canvas:e=dp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,f=null,m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;let _=this,M=!1,L=0,E=0,T=null,P=-1,B=null,b=new Ge,S=new Ge,D=null,U=new gt(0),w=0,H=e.width,R=e.height,$=1,Y=null,k=null,W=new Ge(0,0,H,R),st=new Ge(0,0,H,R),bt=!1,Bt=new Rr,j=!1,ot=!1,St=null,It=new fe,Tt=new at,Et=new N,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return T===null?$:1}let I=n;function ut(A,G){for(let J=0;J<A.length;J++){let K=A[J],q=e.getContext(K,G);if(q!==null)return q}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",yt,!1),I===null){let G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),I=ut(G,A),I===null)throw ut(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,ht,nt,F,it,lt,_t,C,y,V,z,et,rt,Ht,zt,pt,xt,Gt,dt,Ie,te,Nt,Pt,Dt;function oe(){tt=new wg(I),ht=new _g(I,tt,t),tt.init(ht),Nt=new n_(I,tt,ht),nt=new t_(I,tt,ht),F=new Ag(I),it=new Gx,lt=new e_(I,tt,nt,it,ht,Nt,F),_t=new yg(_),C=new Sg(_),y=new Dp(I,ht),Pt=new gg(I,tt,y,ht),V=new Eg(I,y,F,Pt),z=new Lg(I,V,y,F),dt=new Pg(I,ht,lt),pt=new vg(it),et=new Hx(_,_t,C,tt,ht,Pt,pt),rt=new a_(_,it),Ht=new Wx,zt=new Jx(tt,ht),Gt=new mg(_,_t,C,nt,z,d,c),xt=new Qx(_,z,ht),Dt=new l_(I,F,ht,nt),Ie=new xg(I,tt,F,ht),te=new Tg(I,tt,F,ht),F.programs=et.programs,_.capabilities=ht,_.extensions=tt,_.properties=it,_.renderLists=Ht,_.shadowMap=xt,_.state=nt,_.info=F}oe();let Yt=new sc(_,I);this.xr=Yt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(H,R,!1))},this.getSize=function(A){return A.set(H,R)},this.setSize=function(A,G,J=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,R=G,e.width=Math.floor(A*$),e.height=Math.floor(G*$),J===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(H*$,R*$).floor()},this.setDrawingBufferSize=function(A,G,J){H=A,R=G,$=J,e.width=Math.floor(A*J),e.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,G,J,K){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,G,J,K),nt.viewport(b.copy(W).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,G,J,K){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,G,J,K),nt.scissor(S.copy(st).multiplyScalar($).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(A){nt.setScissorTest(bt=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(A=!0,G=!0,J=!0){let K=0;if(A){let q=!1;if(T!==null){let wt=T.texture.format;q=wt===od||wt===rd||wt===sd}if(q){let wt=T.texture.type,Ut=wt===Ri||wt===Ei||wt===Dc||wt===Qi||wt===ed||wt===nd,Ft=Gt.getClearColor(),kt=Gt.getClearAlpha(),Qt=Ft.r,Xt=Ft.g,$t=Ft.b;Ut?(p[0]=Qt,p[1]=Xt,p[2]=$t,p[3]=kt,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Qt,g[1]=Xt,g[2]=$t,g[3]=kt,I.clearBufferiv(I.COLOR,0,g))}else K|=I.COLOR_BUFFER_BIT}G&&(K|=I.DEPTH_BUFFER_BIT),J&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Ht.dispose(),zt.dispose(),it.dispose(),_t.dispose(),C.dispose(),z.dispose(),Pt.dispose(),Dt.dispose(),et.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Tn),Yt.removeEventListener("sessionend",ge),St&&(St.dispose(),St=null),rn.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=F.autoReset,G=xt.enabled,J=xt.autoUpdate,K=xt.needsUpdate,q=xt.type;oe(),F.autoReset=A,xt.enabled=G,xt.autoUpdate=J,xt.needsUpdate=K,xt.type=q}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){let G=A.target;G.removeEventListener("dispose",Z),ft(G)}function ft(A){Mt(A),it.remove(A)}function Mt(A){let G=it.get(A).programs;G!==void 0&&(G.forEach(function(J){et.releaseProgram(J)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,J,K,q,wt){G===null&&(G=Wt);let Ut=q.isMesh&&q.matrixWorld.determinant()<0,Ft=of(A,G,J,K,q);nt.setMaterial(K,Ut);let kt=J.index,Qt=1;if(K.wireframe===!0){if(kt=V.getWireframeAttribute(J),kt===void 0)return;Qt=2}let Xt=J.drawRange,$t=J.attributes.position,Re=Xt.start*Qt,_n=(Xt.start+Xt.count)*Qt;wt!==null&&(Re=Math.max(Re,wt.start*Qt),_n=Math.min(_n,(wt.start+wt.count)*Qt)),kt!==null?(Re=Math.max(Re,0),_n=Math.min(_n,kt.count)):$t!=null&&(Re=Math.max(Re,0),_n=Math.min(_n,$t.count));let Be=_n-Re;if(Be<0||Be===1/0)return;Pt.setup(q,K,Ft,J,kt);let Qn,be=Ie;if(kt!==null&&(Qn=y.get(kt),be=te,be.setIndex(Qn)),q.isMesh)K.wireframe===!0?(nt.setLineWidth(K.wireframeLinewidth*Ct()),be.setMode(I.LINES)):be.setMode(I.TRIANGLES);else if(q.isLine){let Zt=K.linewidth;Zt===void 0&&(Zt=1),nt.setLineWidth(Zt*Ct()),q.isLineSegments?be.setMode(I.LINES):q.isLineLoop?be.setMode(I.LINE_LOOP):be.setMode(I.LINE_STRIP)}else q.isPoints?be.setMode(I.POINTS):q.isSprite&&be.setMode(I.TRIANGLES);if(q.isBatchedMesh)be.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)be.renderInstances(Re,Be,q.count);else if(J.isInstancedBufferGeometry){let Zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,$a=Math.min(J.instanceCount,Zt);be.renderInstances(Re,Be,$a)}else be.render(Re,Be)};function ie(A,G,J){A.transparent===!0&&A.side===de&&A.forceSinglePass===!1?(A.side=Ve,A.needsUpdate=!0,to(A,G,J),A.side=Pi,A.needsUpdate=!0,to(A,G,J),A.side=de):to(A,G,J)}this.compile=function(A,G,J=null){J===null&&(J=A),f=zt.get(J),f.init(),v.push(f),J.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),A!==J&&A.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights(_._useLegacyLights);let K=new Set;return A.traverse(function(q){let wt=q.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){let Ft=wt[Ut];ie(Ft,J,q),K.add(Ft)}else ie(wt,J,q),K.add(wt)}),v.pop(),f=null,K},this.compileAsync=function(A,G,J=null){let K=this.compile(A,G,J);return new Promise(q=>{function wt(){if(K.forEach(function(Ut){it.get(Ut).currentProgram.isReady()&&K.delete(Ut)}),K.size===0){q(A);return}setTimeout(wt,10)}tt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let me=null;function qe(A){me&&me(A)}function Tn(){rn.stop()}function ge(){rn.start()}let rn=new fd;rn.setAnimationLoop(qe),typeof self!="undefined"&&rn.setContext(self),this.setAnimationLoop=function(A){me=A,Yt.setAnimationLoop(A),A===null?rn.stop():rn.start()},Yt.addEventListener("sessionstart",Tn),Yt.addEventListener("sessionend",ge),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(G),G=Yt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,G,T),f=zt.get(A,v.length),f.init(),v.push(f),It.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Bt.setFromProjectionMatrix(It),ot=this.localClippingEnabled,j=pt.init(this.clippingPlanes,ot),x=Ht.get(A,m.length),x.init(),m.push(x),Vn(A,G,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Y,k),this.info.render.frame++,j===!0&&pt.beginShadows();let J=f.state.shadowsArray;if(xt.render(J,A,G),j===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1)&&Gt.render(x,A),f.setupLights(_._useLegacyLights),G.isArrayCamera){let K=G.cameras;for(let q=0,wt=K.length;q<wt;q++){let Ut=K[q];uh(x,A,Ut,Ut.viewport)}}else uh(x,A,G);T!==null&&(lt.updateMultisampleRenderTarget(T),lt.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(_,A,G),Pt.resetDefaultState(),P=-1,B=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Vn(A,G,J,K){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){K&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(It);let Ut=z.update(A),Ft=A.material;Ft.visible&&x.push(A,Ut,Ft,J,Et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){let Ut=z.update(A),Ft=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Et.copy(Ut.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(It)),Array.isArray(Ft)){let kt=Ut.groups;for(let Qt=0,Xt=kt.length;Qt<Xt;Qt++){let $t=kt[Qt],Re=Ft[$t.materialIndex];Re&&Re.visible&&x.push(A,Ut,Re,J,Et.z,$t)}}else Ft.visible&&x.push(A,Ut,Ft,J,Et.z,null)}}let wt=A.children;for(let Ut=0,Ft=wt.length;Ut<Ft;Ut++)Vn(wt[Ut],G,J,K)}function uh(A,G,J,K){let q=A.opaque,wt=A.transmissive,Ut=A.transparent;f.setupLightsView(J),j===!0&&pt.setGlobalState(_.clippingPlanes,J),wt.length>0&&rf(q,wt,G,J),K&&nt.viewport(b.copy(K)),q.length>0&&Qr(q,G,J),wt.length>0&&Qr(wt,G,J),Ut.length>0&&Qr(Ut,G,J),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function rf(A,G,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let wt=ht.isWebGL2;St===null&&(St=new hi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Ar:Ri,minFilter:ai,samples:wt?4:0})),_.getDrawingBufferSize(Tt),wt?St.setSize(Tt.x,Tt.y):St.setSize(Vl(Tt.x),Vl(Tt.y));let Ut=_.getRenderTarget();_.setRenderTarget(St),_.getClearColor(U),w=_.getClearAlpha(),w<1&&_.setClearColor(16777215,.5),_.clear();let Ft=_.toneMapping;_.toneMapping=Ai,Qr(A,J,K),lt.updateMultisampleRenderTarget(St),lt.updateRenderTargetMipmap(St);let kt=!1;for(let Qt=0,Xt=G.length;Qt<Xt;Qt++){let $t=G[Qt],Re=$t.object,_n=$t.geometry,Be=$t.material,Qn=$t.group;if(Be.side===de&&Re.layers.test(K.layers)){let be=Be.side;Be.side=Ve,Be.needsUpdate=!0,dh(Re,J,K,_n,Be,Qn),Be.side=be,Be.needsUpdate=!0,kt=!0}}kt===!0&&(lt.updateMultisampleRenderTarget(St),lt.updateRenderTargetMipmap(St)),_.setRenderTarget(Ut),_.setClearColor(U,w),_.toneMapping=Ft}function Qr(A,G,J){let K=G.isScene===!0?G.overrideMaterial:null;for(let q=0,wt=A.length;q<wt;q++){let Ut=A[q],Ft=Ut.object,kt=Ut.geometry,Qt=K===null?Ut.material:K,Xt=Ut.group;Ft.layers.test(J.layers)&&dh(Ft,G,J,kt,Qt,Xt)}}function dh(A,G,J,K,q,wt){A.onBeforeRender(_,G,J,K,q,wt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(_,G,J,K,A,wt),q.transparent===!0&&q.side===de&&q.forceSinglePass===!1?(q.side=Ve,q.needsUpdate=!0,_.renderBufferDirect(J,G,K,q,A,wt),q.side=Pi,q.needsUpdate=!0,_.renderBufferDirect(J,G,K,q,A,wt),q.side=de):_.renderBufferDirect(J,G,K,q,A,wt),A.onAfterRender(_,G,J,K,q,wt)}function to(A,G,J){G.isScene!==!0&&(G=Wt);let K=it.get(A),q=f.state.lights,wt=f.state.shadowsArray,Ut=q.state.version,Ft=et.getParameters(A,q.state,wt,G,J),kt=et.getProgramCacheKey(Ft),Qt=K.programs;K.environment=A.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(A.isMeshStandardMaterial?C:_t).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",Z),Qt=new Map,K.programs=Qt);let Xt=Qt.get(kt);if(Xt!==void 0){if(K.currentProgram===Xt&&K.lightsStateVersion===Ut)return ph(A,Ft),Xt}else Ft.uniforms=et.getUniforms(A),A.onBuild(J,Ft,_),A.onBeforeCompile(Ft,_),Xt=et.acquireProgram(Ft,kt),Qt.set(kt,Xt),K.uniforms=Ft.uniforms;let $t=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=pt.uniform),ph(A,Ft),K.needsLights=lf(A),K.lightsStateVersion=Ut,K.needsLights&&($t.ambientLightColor.value=q.state.ambient,$t.lightProbe.value=q.state.probe,$t.directionalLights.value=q.state.directional,$t.directionalLightShadows.value=q.state.directionalShadow,$t.spotLights.value=q.state.spot,$t.spotLightShadows.value=q.state.spotShadow,$t.rectAreaLights.value=q.state.rectArea,$t.ltc_1.value=q.state.rectAreaLTC1,$t.ltc_2.value=q.state.rectAreaLTC2,$t.pointLights.value=q.state.point,$t.pointLightShadows.value=q.state.pointShadow,$t.hemisphereLights.value=q.state.hemi,$t.directionalShadowMap.value=q.state.directionalShadowMap,$t.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$t.spotShadowMap.value=q.state.spotShadowMap,$t.spotLightMatrix.value=q.state.spotLightMatrix,$t.spotLightMap.value=q.state.spotLightMap,$t.pointShadowMap.value=q.state.pointShadowMap,$t.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Xt,K.uniformsList=null,Xt}function fh(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Fs.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ph(A,G){let J=it.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function of(A,G,J,K,q){G.isScene!==!0&&(G=Wt),lt.resetTextureUnits();let wt=G.fog,Ut=K.isMeshStandardMaterial?G.environment:null,Ft=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zi,kt=(K.isMeshStandardMaterial?C:_t).get(K.envMap||Ut),Qt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),$t=!!J.morphAttributes.position,Re=!!J.morphAttributes.normal,_n=!!J.morphAttributes.color,Be=Ai;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Be=_.toneMapping);let Qn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,be=Qn!==void 0?Qn.length:0,Zt=it.get(K),$a=f.state.lights;if(j===!0&&(ot===!0||A!==B)){let An=A===B&&K.id===P;pt.setState(K,A,An)}let ye=!1;K.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==$a.state.version||Zt.outputColorSpace!==Ft||q.isBatchedMesh&&Zt.batching===!1||!q.isBatchedMesh&&Zt.batching===!0||q.isInstancedMesh&&Zt.instancing===!1||!q.isInstancedMesh&&Zt.instancing===!0||q.isSkinnedMesh&&Zt.skinning===!1||!q.isSkinnedMesh&&Zt.skinning===!0||q.isInstancedMesh&&Zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Zt.instancingMorph===!1&&q.morphTexture!==null||Zt.envMap!==kt||K.fog===!0&&Zt.fog!==wt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==pt.numPlanes||Zt.numIntersection!==pt.numIntersection)||Zt.vertexAlphas!==Qt||Zt.vertexTangents!==Xt||Zt.morphTargets!==$t||Zt.morphNormals!==Re||Zt.morphColors!==_n||Zt.toneMapping!==Be||ht.isWebGL2===!0&&Zt.morphTargetsCount!==be)&&(ye=!0):(ye=!0,Zt.__version=K.version);let Hi=Zt.currentProgram;ye===!0&&(Hi=to(K,G,q));let mh=!1,dr=!1,Za=!1,Ke=Hi.getUniforms(),Gi=Zt.uniforms;if(nt.useProgram(Hi.program)&&(mh=!0,dr=!0,Za=!0),K.id!==P&&(P=K.id,dr=!0),mh||B!==A){Ke.setValue(I,"projectionMatrix",A.projectionMatrix),Ke.setValue(I,"viewMatrix",A.matrixWorldInverse);let An=Ke.map.cameraPosition;An!==void 0&&An.setValue(I,Et.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Ke.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ke.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,dr=!0,Za=!0)}if(q.isSkinnedMesh){Ke.setOptional(I,q,"bindMatrix"),Ke.setOptional(I,q,"bindMatrixInverse");let An=q.skeleton;An&&(ht.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ke.setValue(I,"boneTexture",An.boneTexture,lt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Ke.setOptional(I,q,"batchingTexture"),Ke.setValue(I,"batchingTexture",q._matricesTexture,lt));let Ja=J.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0&&ht.isWebGL2===!0)&&dt.update(q,J,Hi),(dr||Zt.receiveShadow!==q.receiveShadow)&&(Zt.receiveShadow=q.receiveShadow,Ke.setValue(I,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gi.envMap.value=kt,Gi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),dr&&(Ke.setValue(I,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&af(Gi,Za),wt&&K.fog===!0&&rt.refreshFogUniforms(Gi,wt),rt.refreshMaterialUniforms(Gi,K,$,R,St),Fs.upload(I,fh(Zt),Gi,lt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Fs.upload(I,fh(Zt),Gi,lt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ke.setValue(I,"center",q.center),Ke.setValue(I,"modelViewMatrix",q.modelViewMatrix),Ke.setValue(I,"normalMatrix",q.normalMatrix),Ke.setValue(I,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let An=K.uniformsGroups;for(let Ka=0,cf=An.length;Ka<cf;Ka++)if(ht.isWebGL2){let gh=An[Ka];Dt.update(gh,Hi),Dt.bind(gh,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function af(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function lf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,G,J){it.get(A.texture).__webglTexture=G,it.get(A.depthTexture).__webglTexture=J;let K=it.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){let J=it.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,J=0){T=A,L=G,E=J;let K=!0,q=null,wt=!1,Ut=!1;if(A){let kt=it.get(A);kt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(I.FRAMEBUFFER,null),K=!1):kt.__webglFramebuffer===void 0?lt.setupRenderTarget(A):kt.__hasExternalTextures&&lt.rebindTextures(A,it.get(A.texture).__webglTexture,it.get(A.depthTexture).__webglTexture);let Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);let Xt=it.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?q=Xt[G][J]:q=Xt[G],wt=!0):ht.isWebGL2&&A.samples>0&&lt.useMultisampledRTT(A)===!1?q=it.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[J]:q=Xt,b.copy(A.viewport),S.copy(A.scissor),D=A.scissorTest}else b.copy(W).multiplyScalar($).floor(),S.copy(st).multiplyScalar($).floor(),D=bt;if(nt.bindFramebuffer(I.FRAMEBUFFER,q)&&ht.drawBuffers&&K&&nt.drawBuffers(A,q),nt.viewport(b),nt.scissor(S),nt.setScissorTest(D),wt){let kt=it.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,kt.__webglTexture,J)}else if(Ut){let kt=it.get(A.texture),Qt=G||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,J||0,Qt)}P=-1},this.readRenderTargetPixels=function(A,G,J,K,q,wt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){nt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{let kt=A.texture,Qt=kt.format,Xt=kt.type;if(Qt!==Nn&&Nt.convert(Qt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $t=Xt===Ar&&(tt.has("EXT_color_buffer_half_float")||ht.isWebGL2&&tt.has("EXT_color_buffer_float"));if(Xt!==Ri&&Nt.convert(Xt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===Xn&&(ht.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-K&&J>=0&&J<=A.height-q&&I.readPixels(G,J,K,q,Nt.convert(Qt),Nt.convert(Xt),wt)}finally{let kt=T!==null?it.get(T).__webglFramebuffer:null;nt.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(A,G,J=0){let K=Math.pow(2,-J),q=Math.floor(G.image.width*K),wt=Math.floor(G.image.height*K);lt.setTexture2D(G,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,A.x,A.y,q,wt),nt.unbindTexture()},this.copyTextureToTexture=function(A,G,J,K=0){let q=G.image.width,wt=G.image.height,Ut=Nt.convert(J.format),Ft=Nt.convert(J.type);lt.setTexture2D(J,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,K,A.x,A.y,q,wt,Ut,Ft,G.image.data):G.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,K,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Ut,G.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,K,A.x,A.y,Ut,Ft,G.image),K===0&&J.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(A,G,J,K,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let wt=Math.round(A.max.x-A.min.x),Ut=Math.round(A.max.y-A.min.y),Ft=A.max.z-A.min.z+1,kt=Nt.convert(K.format),Qt=Nt.convert(K.type),Xt;if(K.isData3DTexture)lt.setTexture3D(K,0),Xt=I.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)lt.setTexture2DArray(K,0),Xt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);let $t=I.getParameter(I.UNPACK_ROW_LENGTH),Re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_n=I.getParameter(I.UNPACK_SKIP_PIXELS),Be=I.getParameter(I.UNPACK_SKIP_ROWS),Qn=I.getParameter(I.UNPACK_SKIP_IMAGES),be=J.isCompressedTexture?J.mipmaps[q]:J.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?I.texSubImage3D(Xt,q,G.x,G.y,G.z,wt,Ut,Ft,kt,Qt,be.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(Xt,q,G.x,G.y,G.z,wt,Ut,Ft,kt,be.data):I.texSubImage3D(Xt,q,G.x,G.y,G.z,wt,Ut,Ft,kt,Qt,be),I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qn),q===0&&K.generateMipmaps&&I.generateMipmap(Xt),nt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),nt.unbindTexture()},this.resetState=function(){L=0,E=0,T=null,nt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Uc?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===ya?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},rc=class extends Cr{};rc.prototype.isWebGL1Renderer=!0;var Ko=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},oc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return hd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new N,jo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},es=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},As,_r=new N,Rs=new N,Cs=new N,Ps=new at,vr=new at,vd=new fe,So=new N,yr=new N,wo=new N,Hu=new at,Ll=new at,Gu=new at,Di=class extends Ce{constructor(t=new es){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oc(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new jo(n,3,0,!1)),As.setAttribute("uv",new jo(n,2,3,!1))}this.geometry=As,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),vd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Eo(So.set(-.5,-.5,0),Cs,a,Rs,s,r),Eo(yr.set(.5,-.5,0),Cs,a,Rs,s,r),Eo(wo.set(.5,.5,0),Cs,a,Rs,s,r),Hu.set(0,0),Ll.set(1,0),Gu.set(1,1);let o=t.ray.intersectTriangle(So,yr,wo,!1,_r);if(o===null&&(Eo(yr.set(-.5,.5,0),Cs,a,Rs,s,r),Ll.set(0,1),o=t.ray.intersectTriangle(So,wo,yr,!1,_r),o===null))return;let c=t.ray.origin.distanceTo(_r);c<t.near||c>t.far||e.push({distance:c,point:_r.clone(),uv:ji.getInterpolation(_r,So,yr,wo,Hu,Ll,Gu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Eo(i,t,e,n,s,r){Ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vr.x=r*Ps.x-s*Ps.y,vr.y=s*Ps.x+r*Ps.y):vr.copy(Ps),i.copy(t),i.x+=vr.x,i.y+=vr.y,i.applyMatrix4(vd)}var ac=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ye,h=Ye,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends fn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ls=new fe,Vu=new fe,To=[],Wu=new ui,c_=new fe,Mr=new Kt,br=new Ii,Zn=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,c_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Wu.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),br.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Vu.multiplyMatrices(n,Ls),Mr.matrixWorld=Vu,Mr.raycast(t,To);for(let a=0,o=To.length;a<o;a++){let c=To[a];c.instanceId=r,c.object=this,e.push(c)}To.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ac(new Float32Array(s*this.count),s,this.count,id,Xn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Lr=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xu=new fe,lc=new Xo,Ao=new Ii,Ro=new N,ta=class extends Ce{constructor(t=new Pe,e=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Xu.copy(s).invert(),lc.copy(t.ray).applyMatrix4(Xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,x=p;g<x;g++){let f=l.getX(g);Ro.fromBufferAttribute(u,f),qu(Ro,f,c,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)Ro.fromBufferAttribute(u,g),qu(Ro,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qu(i,t,e,n,s,r,a){let o=lc.distanceSqToPoint(i);if(o<e){let c=new N;lc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var ea=class extends pn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],a=[],o=new N,c=new fe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(He(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ir=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cc=class extends Ir{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Co=new N,Il=new zc,Dl=new zc,Ul=new zc,Dr=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),l=Co);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),Il.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,f),Dl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,f),Ul.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Dl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ul.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Il.calc(c),Dl.calc(c),Ul.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function h_(i,t){let e=1-i;return e*e*t}function u_(i,t){return 2*(1-i)*i*t}function d_(i,t){return i*i*t}function wr(i,t,e,n){return h_(i,t)+u_(i,e)+d_(i,n)}function f_(i,t){let e=1-i;return e*e*e*t}function p_(i,t){let e=1-i;return 3*e*e*i*t}function m_(i,t){return 3*(1-i)*i*i*t}function g_(i,t){return i*i*i*t}function Er(i,t,e,n,s){return f_(i,t)+p_(i,e)+m_(i,n)+g_(i,s)}var na=class extends Cn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,s.x,r.x,a.x,o.x),Er(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hc=class extends Cn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,s.x,r.x,a.x,o.x),Er(t,s.y,r.y,a.y,o.y),Er(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends Cn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uc=class extends Cn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends Cn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends Cn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y),wr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Yu(o,c.x,l.x,h.x,u.x),Yu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},fc=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:Dr,CubicBezierCurve:na,CubicBezierCurve3:hc,EllipseCurve:Ir,LineCurve:ia,LineCurve3:uc,QuadraticBezierCurve:sa,QuadraticBezierCurve3:dc,SplineCurve:ra}),pc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fc[s.type]().fromJSON(s))}return this}},oa=class extends pc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ia(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new sa(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new na(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Ir(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ur=class i extends Pe{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new N,d=new at,p=new N,g=new N,x=new N,f=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:f=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=m*1,p.y=-f,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:f=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=e;v++){let _=n+v*h*s,M=Math.sin(_),L=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*M,u.y=t[E].y,u.z=t[E].x*L,a.push(u.x,u.y,u.z),d.x=v/e,d.y=E/(t.length-1),o.push(d.x,d.y);let T=c[3*E+0]*M,P=c[3*E+1],B=c[3*E+0]*L;l.push(T,P,B)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let M=_+v*t.length,L=M,E=M+t.length,T=M+t.length+1,P=M+1;r.push(L,E,P),r.push(T,P,E)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("uv",new Vt(o,2)),this.setAttribute("normal",new Vt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var aa=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new N,h=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Sn=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],f=n/2,m=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(p,2));function v(){let M=new N,L=new N,E=0,T=(e-t)/n;for(let P=0;P<=r;P++){let B=[],b=P/r,S=b*(e-t)+t;for(let D=0;D<=s;D++){let U=D/s,w=U*c+o,H=Math.sin(w),R=Math.cos(w);L.x=S*H,L.y=-b*n+f,L.z=S*R,u.push(L.x,L.y,L.z),M.set(H,T,R).normalize(),d.push(M.x,M.y,M.z),p.push(U,1-b),B.push(g++)}x.push(B)}for(let P=0;P<s;P++)for(let B=0;B<r;B++){let b=x[B][P],S=x[B+1][P],D=x[B+1][P+1],U=x[B][P+1];h.push(b,S,U),h.push(S,D,U),E+=6}l.addGroup(m,E,0),m+=E}function _(M){let L=g,E=new at,T=new N,P=0,B=M===!0?t:e,b=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,f*b,0),d.push(0,b,0),p.push(.5,.5),g++;let S=g;for(let D=0;D<=s;D++){let w=D/s*c+o,H=Math.cos(w),R=Math.sin(w);T.x=B*R,T.y=f*b,T.z=B*H,u.push(T.x,T.y,T.z),d.push(0,b,0),E.x=H*.5+.5,E.y=R*.5*b+.5,p.push(E.x,E.y),g++}for(let D=0;D<s;D++){let U=L+D,w=S+D;M===!0?h.push(w,w+1,U):h.push(w+1,w,U),P+=3}l.addGroup(m,P,M===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ui=class i extends Sn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mc=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new N,M=new N,L=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],M),p(e[E+2],L),c(_,M,L,v)}function c(v,_,M,L){let E=L+1,T=[];for(let P=0;P<=E;P++){T[P]=[];let B=v.clone().lerp(M,P/E),b=_.clone().lerp(M,P/E),S=E-P;for(let D=0;D<=S;D++)D===0&&P===E?T[P][D]=B:T[P][D]=B.clone().lerp(b,D/S)}for(let P=0;P<E;P++)for(let B=0;B<2*(E-P)-1;B++){let b=Math.floor(B/2);B%2===0?(d(T[P][b+1]),d(T[P+1][b]),d(T[P][b])):(d(T[P][b+1]),d(T[P+1][b+1]),d(T[P+1][b]))}}function l(v){let _=new N;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let v=new N;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let M=f(v)/2/Math.PI+.5,L=m(v)/Math.PI+.5;a.push(M,1-L)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],M=a[v+2],L=a[v+4],E=Math.max(_,M,L),T=Math.min(_,M,L);E>.9&&T<.1&&(_<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,_){let M=v*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let v=new N,_=new N,M=new N,L=new N,E=new at,T=new at,P=new at;for(let B=0,b=0;B<r.length;B+=9,b+=6){v.set(r[B+0],r[B+1],r[B+2]),_.set(r[B+3],r[B+4],r[B+5]),M.set(r[B+6],r[B+7],r[B+8]),E.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),L.copy(v).add(_).add(M).divideScalar(3);let S=f(L);x(E,b+0,v,S),x(T,b+2,_,S),x(P,b+4,M,S)}}function x(v,_,M,L){L<0&&v.x===1&&(a[_]=v.x-1),M.x===0&&M.z===0&&(a[_]=L/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ni=class extends oa{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oa().fromJSON(s))}return this}},x_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=b_(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Nr(r,a,e,o,c,p,0),a}};function yd(i,t,e,n,s){let r,a;if(s===D_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=$u(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=$u(r,i[r],i[r+1],a);return a&&ba(a,a.next)&&(Fr(a),a=a.next),a}function ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ba(e,e.next)||Se(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&A_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?v_(i,n,s,r):__(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Fr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=y_(ns(i),t,e),Nr(i,t,e,n,s,r,2)):a===2&&M_(i,t,e,n,s,r):Nr(ns(i),t,e,n,s,r,1);break}}}function __(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Us(s,o,r,c,a,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=o>c?o>l?o:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,m=gc(p,g,t,e,n),v=gc(x,f,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=m&&M&&M.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&Us(o,h,c,u,l,d,_.x,_.y)&&Se(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&Us(o,h,c,u,l,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&Us(o,h,c,u,l,d,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&Us(o,h,c,u,l,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function y_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ba(s,r)&&Md(s,n,n.next,r)&&zr(s,r)&&zr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fr(n),Fr(n.next),n=i=r),n=n.next}while(n!==i);return ns(n)}function M_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&P_(a,o)){let c=bd(a,o);a=ns(a,a.next),c=ns(c,c.next),Nr(a,t,e,n,s,r,0),Nr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function b_(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=yd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(C_(l));for(s.sort(S_),r=0;r<s.length;r++)e=w_(s[r],e);return e}function S_(i,t){return i.x-t.x}function w_(i,t){let e=E_(i,t);if(!e)return t;let n=bd(e,i);return ns(n,n.next),ns(e,e.next)}function E_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Us(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),zr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&T_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function T_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function A_(i,t,e,n){let s=i;do s.z===0&&(s.z=gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,R_(s)}function R_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function C_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Us(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function P_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!L_(i,t)&&(zr(i,t)&&zr(t,i)&&I_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||ba(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ba(i,t){return i.x===t.x&&i.y===t.y}function Md(i,t,e,n){let s=Lo(Se(i,t,e)),r=Lo(Se(i,t,n)),a=Lo(Se(e,n,i)),o=Lo(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&Po(i,e,t)||r===0&&Po(i,n,t)||a===0&&Po(e,i,n)||o===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lo(i){return i>0?1:i<0?-1:0}function L_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Md(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function I_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bd(i,t){let e=new xc(i.i,i.x,i.y),n=new xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $u(i,t,e,n){let s=new xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zu(t),Ju(n,t);let a=t.length;e.forEach(Zu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ju(n,e[c]);let o=x_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Zu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ju(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var la=class i extends Pe{constructor(t=new Ni([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:U_,_,M=!1,L,E,T,P;m&&(_=m.getSpacedPoints(h),M=!0,d=!1,L=m.computeFrenetFrames(h,!1),E=new N,T=new N,P=new N),d||(f=0,p=0,g=0,x=0);let B=o.extractPoints(l),b=B.shape,S=B.holes;if(!Ci.isClockWise(b)){b=b.reverse();for(let I=0,ut=S.length;I<ut;I++){let tt=S[I];Ci.isClockWise(tt)&&(S[I]=tt.reverse())}}let U=Ci.triangulateShape(b,S),w=b;for(let I=0,ut=S.length;I<ut;I++){let tt=S[I];b=b.concat(tt)}function H(I,ut,tt){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ut,tt)}let R=b.length,$=U.length;function Y(I,ut,tt){let ht,nt,F,it=I.x-ut.x,lt=I.y-ut.y,_t=tt.x-I.x,C=tt.y-I.y,y=it*it+lt*lt,V=it*C-lt*_t;if(Math.abs(V)>Number.EPSILON){let z=Math.sqrt(y),et=Math.sqrt(_t*_t+C*C),rt=ut.x-lt/z,Ht=ut.y+it/z,zt=tt.x-C/et,pt=tt.y+_t/et,xt=((zt-rt)*C-(pt-Ht)*_t)/(it*C-lt*_t);ht=rt+it*xt-I.x,nt=Ht+lt*xt-I.y;let Gt=ht*ht+nt*nt;if(Gt<=2)return new at(ht,nt);F=Math.sqrt(Gt/2)}else{let z=!1;it>Number.EPSILON?_t>Number.EPSILON&&(z=!0):it<-Number.EPSILON?_t<-Number.EPSILON&&(z=!0):Math.sign(lt)===Math.sign(C)&&(z=!0),z?(ht=-lt,nt=it,F=Math.sqrt(y)):(ht=it,nt=lt,F=Math.sqrt(y/2))}return new at(ht/F,nt/F)}let k=[];for(let I=0,ut=w.length,tt=ut-1,ht=I+1;I<ut;I++,tt++,ht++)tt===ut&&(tt=0),ht===ut&&(ht=0),k[I]=Y(w[I],w[tt],w[ht]);let W=[],st,bt=k.concat();for(let I=0,ut=S.length;I<ut;I++){let tt=S[I];st=[];for(let ht=0,nt=tt.length,F=nt-1,it=ht+1;ht<nt;ht++,F++,it++)F===nt&&(F=0),it===nt&&(it=0),st[ht]=Y(tt[ht],tt[F],tt[it]);W.push(st),bt=bt.concat(st)}for(let I=0;I<f;I++){let ut=I/f,tt=p*Math.cos(ut*Math.PI/2),ht=g*Math.sin(ut*Math.PI/2)+x;for(let nt=0,F=w.length;nt<F;nt++){let it=H(w[nt],k[nt],ht);It(it.x,it.y,-tt)}for(let nt=0,F=S.length;nt<F;nt++){let it=S[nt];st=W[nt];for(let lt=0,_t=it.length;lt<_t;lt++){let C=H(it[lt],st[lt],ht);It(C.x,C.y,-tt)}}}let Bt=g+x;for(let I=0;I<R;I++){let ut=d?H(b[I],bt[I],Bt):b[I];M?(T.copy(L.normals[0]).multiplyScalar(ut.x),E.copy(L.binormals[0]).multiplyScalar(ut.y),P.copy(_[0]).add(T).add(E),It(P.x,P.y,P.z)):It(ut.x,ut.y,0)}for(let I=1;I<=h;I++)for(let ut=0;ut<R;ut++){let tt=d?H(b[ut],bt[ut],Bt):b[ut];M?(T.copy(L.normals[I]).multiplyScalar(tt.x),E.copy(L.binormals[I]).multiplyScalar(tt.y),P.copy(_[I]).add(T).add(E),It(P.x,P.y,P.z)):It(tt.x,tt.y,u/h*I)}for(let I=f-1;I>=0;I--){let ut=I/f,tt=p*Math.cos(ut*Math.PI/2),ht=g*Math.sin(ut*Math.PI/2)+x;for(let nt=0,F=w.length;nt<F;nt++){let it=H(w[nt],k[nt],ht);It(it.x,it.y,u+tt)}for(let nt=0,F=S.length;nt<F;nt++){let it=S[nt];st=W[nt];for(let lt=0,_t=it.length;lt<_t;lt++){let C=H(it[lt],st[lt],ht);M?It(C.x,C.y+_[h-1].y,_[h-1].x+tt):It(C.x,C.y,u+tt)}}}j(),ot();function j(){let I=s.length/3;if(d){let ut=0,tt=R*ut;for(let ht=0;ht<$;ht++){let nt=U[ht];Tt(nt[2]+tt,nt[1]+tt,nt[0]+tt)}ut=h+f*2,tt=R*ut;for(let ht=0;ht<$;ht++){let nt=U[ht];Tt(nt[0]+tt,nt[1]+tt,nt[2]+tt)}}else{for(let ut=0;ut<$;ut++){let tt=U[ut];Tt(tt[2],tt[1],tt[0])}for(let ut=0;ut<$;ut++){let tt=U[ut];Tt(tt[0]+R*h,tt[1]+R*h,tt[2]+R*h)}}n.addGroup(I,s.length/3-I,0)}function ot(){let I=s.length/3,ut=0;St(w,ut),ut+=w.length;for(let tt=0,ht=S.length;tt<ht;tt++){let nt=S[tt];St(nt,ut),ut+=nt.length}n.addGroup(I,s.length/3-I,1)}function St(I,ut){let tt=I.length;for(;--tt>=0;){let ht=tt,nt=tt-1;nt<0&&(nt=I.length-1);for(let F=0,it=h+f*2;F<it;F++){let lt=R*F,_t=R*(F+1),C=ut+ht+lt,y=ut+nt+lt,V=ut+nt+_t,z=ut+ht+_t;Et(C,y,V,z)}}}function It(I,ut,tt){c.push(I),c.push(ut),c.push(tt)}function Tt(I,ut,tt){Wt(I),Wt(ut),Wt(tt);let ht=s.length/3,nt=v.generateTopUV(n,s,ht-3,ht-2,ht-1);Ct(nt[0]),Ct(nt[1]),Ct(nt[2])}function Et(I,ut,tt,ht){Wt(I),Wt(ut),Wt(ht),Wt(ut),Wt(tt),Wt(ht);let nt=s.length/3,F=v.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);Ct(F[0]),Ct(F[1]),Ct(F[3]),Ct(F[1]),Ct(F[2]),Ct(F[3])}function Wt(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function Ct(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fc[s.type]().fromJSON(s)),new i(n,t.options)}},U_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],f=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-u),new at(d,1-g),new at(x,1-m)]:[new at(o,1-c),new at(h,1-u),new at(p,1-g),new at(f,1-m)]}};function N_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ca=class i extends mc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ha=class i extends Pe{constructor(t=new Ni([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let v=g[f];Ci.isClockWise(v)===!0&&(g[f]=v.reverse())}let x=Ci.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let v=g[f];p=p.concat(v)}for(let f=0,m=p.length;f<m;f++){let v=p[f];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let f=0,m=x.length;f<m;f++){let v=x[f],_=v[0]+u,M=v[1]+u,L=v[2]+u;n.push(_,M,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return z_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function z_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Jn=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new N,d=new N,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){let v=[],_=m/n,M=0;m===0&&a===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){let E=L/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(E+M,1-_),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let _=h[m][v+1],M=h[m][v],L=h[m+1][v],E=h[m+1][v+1];(m!==0||a>0)&&p.push(_,M,E),(m!==n-1||c<Math.PI)&&p.push(M,L,E)}this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xs=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(x),u.y=(t+e*Math.cos(f))*Math.sin(x),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(x,f,v),a.push(f,m,v)}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var is=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ua=class extends is{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},wn=class extends zn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cn=class extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function F_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends qs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kh:r=t,o=2*e-n;break;case jh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kh:a=t,c=2*n-e;break;case jh:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,f=x*g,m=-d*f+2*d*x-d*g,v=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*f+(1.5+p)*x+.5*g,M=p*f-p*x;for(let L=0;L!==o;++L)r[L]=m*a[h+L]+v*a[l+L]+_*a[c+L]+M*a[u+L];return r}},vc=class extends qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},yc=class extends qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Io(e,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Io(t.times,Array),values:Io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Uo:e=this.InterpolantFactoryMethodDiscrete;break;case No:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&F_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=No;var ss=class extends Fn{};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Uo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Fn{};Mc.prototype.ValueTypeName="color";var bc=class extends Fn{};bc.prototype.ValueTypeName="number";var Sc=class extends qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Yn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Or=class extends Fn{InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.DefaultInterpolation=No;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Fn{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Uo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Fn{};wc.prototype.ValueTypeName="vector";var Ec=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},O_=new Ec,Tc=class{constructor(t){this.manager=t!==void 0?t:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},da=class extends Br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Nl=new fe,Ku=new N,ju=new N,fa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ac=class extends fa{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ko*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},pa=class extends Br{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Rc=class extends fa{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fc="\\[\\]\\.:\\/",B_=new RegExp("["+Fc+"]","g"),Oc="[^"+Fc+"]",k_="[^"+Fc.replace("\\.","")+"]",H_=/((?:WC+[\/:])*)/.source.replace("WC",Oc),G_=/(WCOD+)?/.source.replace("WCOD",k_),V_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),W_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),X_=new RegExp("^"+H_+G_+V_+W_+"$"),q_=["material","materials","bones","map"],Cc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(B_,"")}static parseTrackName(t){let e=X_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);q_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Cc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);var On=[{id:"drizzie",name:"Drizzie City",nx:8,nz:8,x0:-560,z0:-560,kind:"metro"},{id:"serrana",name:"Vila Serrana",nx:4,nz:4,x0:-3e3,z0:-2300,kind:"town"},{id:"azul",name:"Porto Azul",nx:5,nz:3,x0:1900,z0:1300,kind:"port"}],Sa=Object.fromEntries(On.map(i=>[i.id,i])),as=i=>i.x0+i.nx*140,$s=i=>i.z0+i.nz*140;function wa(i,t,e){return i.kind==="metro"?t===1&&e===5||t===5&&e===6||t===2&&e===1?"park":t>=2&&t<=5&&e>=2&&e<=5?"downtown":t>=6?"industrial":"residential":i.kind==="town"?t===1&&e===1?"park":"town":e===i.nz-1?"port":t>=3?"industrial":"town"}var Sd=[[-2100,-4300],[-1750,-3100],[-1400,-2050],[-1250,-1e3],[-1080,0],[-850,800],[-350,1400],[250,1700],[500,2100]],di=54,wd=[{id:"BR-101",from:["drizzie",0,4],to:["serrana",4,2],pts:[[-570,0],[-720,0],[-900,0],[-1100,-160],[-1350,-480],[-1560,-820],[-1760,-1180],[-1980,-1520],[-2200,-1840],[-2330,-2020],[-2430,-2020]],hills:7},{id:"SP-280",from:["drizzie",8,4],to:["azul",2,0],pts:[[570,0],[760,0],[960,0],[1100,0],[1350,80],[1620,280],[1860,560],[2060,860],[2180,1100],[2180,1290]],hills:9},{id:"RS-030",from:["drizzie",4,0],to:null,pts:[[0,-570],[0,-800],[-120,-1080],[-420,-1380],[-800,-1640],[-1150,-1880],[-1450,-2e3],[-1720,-2150],[-1960,-2420],[-2100,-2650],[-2100,-2900],[-2100,-3100]],hills:10}],Bn=[{id:"garagem",name:"Garagem Drizzie",city:"drizzie",bx:2,bz:6,side:"n",kind:"garage",color:3108830},{id:"cd",name:"Centro de Distribui\xE7\xE3o",city:"drizzie",bx:6,bz:1,side:"w",kind:"warehouse",color:14721056},{id:"mercado",name:"Mercado Central",city:"drizzie",bx:3,bz:3,side:"w",kind:"market",color:3055186},{id:"hospital",name:"Hospital Municipal",city:"drizzie",bx:4,bz:5,side:"e",kind:"hospital",color:15790320},{id:"obra",name:"Canteiro de Obras",city:"drizzie",bx:1,bz:2,side:"e",kind:"construction",color:15774720},{id:"posto",name:"Posto Rodovi\xE1rio",city:"drizzie",bx:5,bz:7,side:"n",kind:"fuel",color:13639712},{id:"siderurgica",name:"Sider\xFArgica A\xE7o Forte",city:"drizzie",bx:7,bz:5,side:"w",kind:"steel",color:9059114},{id:"silo",name:"Silo Agr\xEDcola",city:"serrana",bx:0,bz:1,side:"e",kind:"silo",color:13152874},{id:"fabrica",name:"F\xE1brica de M\xF3veis",city:"serrana",bx:2,bz:2,side:"w",kind:"factory",color:10119999},{id:"porto",name:"Porto Azul",city:"azul",bx:2,bz:2,side:"n",kind:"port",color:2068400},{id:"refinaria",name:"Refinaria Petrosul",city:"azul",bx:4,bz:1,side:"w",kind:"refinery",color:14211288},{id:"fazenda",name:"Fazenda Boa Vista",hw:"BR-101",lot:[-862,11,-742,131],side:"n",kind:"farm",color:11549230},{id:"eolica",name:"Parque E\xF3lico",hw:"SP-280",lot:[900,-131,1020,-11],side:"s",kind:"wind",color:15658734},{id:"serraria",name:"Serraria Pinheiro",hw:"RS-030",lot:[-2089,-3020,-1969,-2900],side:"w",kind:"sawmill",color:8016432},{id:"pedreira",name:"Pedreira Rocha Viva",hw:"RS-030",lot:[-2160,-3220,-2040,-3100],side:"s",kind:"quarry",color:10261124}],fi=Object.fromEntries(Bn.map(i=>[i.id,i])),Zs=[{id:"urbano",name:"Urbano 4.5",hp:160,cap:5,mass:4.5,level:1,price:0,rigid:!0,axles:2,cab:"cabover",roof:"low",color:15921906,vmax:100,desc:"VUC leve, \xE1gil na cidade."},{id:"toco",name:"Toco 11-240",hp:240,cap:12,mass:7.5,level:3,price:15e3,rigid:!0,axles:2,cab:"cabover",roof:"mid",color:3108830,vmax:100,desc:"Caminh\xE3o m\xE9dio de carroceria ba\xFA."},{id:"cavalo",cfg:"4x2",name:"Cavalo 360",hp:360,cap:30,mass:8,level:6,price:6e4,rigid:!1,axles:2,cab:"cabover",roof:"high",color:13777450,vmax:110,desc:"Cavalo mec\xE2nico cara-chata para carretas."},{id:"rodo",cfg:"6x2",name:"Rodomax 480",hp:480,cap:45,mass:9,level:10,price:14e4,rigid:!1,axles:3,cab:"cabover",roof:"high",color:2072174,vmax:110,desc:"Cavalo 6x2 de teto alto para longas viagens."},{id:"titan",cfg:"6x4",name:"Titan 620 Bicudo",hp:620,cap:65,mass:10.5,level:15,price:28e4,rigid:!1,axles:3,cab:"conventional",roof:"high",color:2238513,vmax:105,desc:"Bicudo 6x4 de cap\xF4 longo e muita tra\xE7\xE3o."},{id:"colosso",cfg:"8x4",name:"Colosso 750 8x4",hp:750,cap:90,mass:12.5,level:20,price:5e5,rigid:!1,axles:4,cab:"conventional",roof:"high",color:15769600,vmax:95,desc:"Gigante para cargas especiais e indivis\xEDveis."}],kr=Object.fromEntries(Zs.map(i=>[i.id,i])),Hr=[{id:"encomendas",name:"Encomendas",icon:"\u{1F4E6}",t:1,lvl:1,trailer:"box",rate:1,from:["cd"],to:["mercado","hospital","posto","obra","fabrica"]},{id:"medicamentos",name:"Medicamentos",icon:"\u{1F48A}",t:1.5,lvl:1,trailer:"box",rate:1.35,fragile:!0,from:["cd","porto"],to:["hospital"]},{id:"eletronicos",name:"Eletr\xF4nicos",icon:"\u{1F4FA}",t:2.5,lvl:2,trailer:"box",rate:1.4,fragile:!0,from:["porto"],to:["cd","mercado"]},{id:"hortifruti",name:"Hortifr\xFAti",icon:"\u{1F96C}",t:4,lvl:1,trailer:"box",rate:1.1,from:["fazenda"],to:["mercado","cd"]},{id:"moveis",name:"M\xF3veis",icon:"\u{1F6CB}\uFE0F",t:6,lvl:3,trailer:"box",rate:1.15,fragile:!0,from:["fabrica"],to:["mercado","cd","obra"]},{id:"bebidas",name:"Bebidas",icon:"\u{1F964}",t:9,lvl:3,trailer:"box",rate:1.05,from:["cd"],to:["mercado","posto"]},{id:"racao",name:"Ra\xE7\xE3o Animal",icon:"\u{1F33E}",t:12,lvl:4,trailer:"box",rate:1,from:["silo"],to:["fazenda"]},{id:"trator",name:"Trator Agr\xEDcola",icon:"\u{1F69C}",t:14,lvl:6,trailer:"lowboy",model:"tractor",rate:1.5,from:["porto"],to:["fazenda","silo"]},{id:"madeira",name:"Toras de Madeira",icon:"\u{1FAB5}",t:18,lvl:6,trailer:"flatbed",model:"logs",rate:1.05,from:["serraria"],to:["fabrica","obra","porto"]},{id:"conteiner",name:"Cont\xEAiner 40 p\xE9s",icon:"\u{1F6A2}",t:26,lvl:7,trailer:"flatbed",model:"container",rate:1.15,from:["porto"],to:["cd","siderurgica","fabrica"]},{id:"graos",name:"Soja a Granel",icon:"\u{1FAD8}",t:28,lvl:8,trailer:"bulk",rate:1,from:["fazenda","silo"],to:["porto"]},{id:"combustivel",name:"Combust\xEDvel",icon:"\u26FD",t:30,lvl:9,trailer:"tank",rate:1.45,hazard:!0,from:["refinaria"],to:["posto","fazenda","pedreira"]},{id:"cimento",name:"Cimento",icon:"\u{1F3D7}\uFE0F",t:32,lvl:10,trailer:"tank",model:"silo",rate:1.05,from:["pedreira"],to:["obra"]},{id:"bobinas",name:"Bobinas de A\xE7o",icon:"\u{1F9F2}",t:36,lvl:11,trailer:"flatbed",model:"coils",rate:1.2,from:["siderurgica"],to:["porto","fabrica"]},{id:"vigas",name:"Vigas de A\xE7o",icon:"\u{1F3E2}",t:42,lvl:13,trailer:"flatbed",model:"beams",rate:1.25,from:["siderurgica"],to:["obra"]},{id:"escavadeira",name:"Escavadeira",icon:"\u{1F6A7}",t:48,lvl:15,trailer:"lowboy",model:"excavator",rate:1.55,from:["porto"],to:["pedreira","obra"]},{id:"transformador",name:"Transformador",icon:"\u26A1",t:56,lvl:18,trailer:"lowboy",model:"transformer",rate:1.7,fragile:!0,from:["siderurgica","porto"],to:["refinaria","eolica"]},{id:"pa_eolica",name:"P\xE1 E\xF3lica",icon:"\u{1F300}",t:62,lvl:20,trailer:"lowboy",model:"blade",rate:1.9,fragile:!0,from:["porto"],to:["eolica"]},{id:"prensa",name:"Prensa Industrial",icon:"\u{1F3ED}",t:85,lvl:24,trailer:"lowboy",model:"press",rate:2.1,from:["porto"],to:["siderurgica","fabrica"]}],nn=Object.fromEntries(Hr.map(i=>[i.id,i])),Js=i=>200+180*(i-1);function Ed(i){return i?i.trailer==="lowboy"?9:i.trailer==="tank"?7:6.5:0}var we={x0:-3400,z0:-3500,x1:3e3,z1:2300};var Xe=1024,Td=4,Bc={};function Ad(i,t){Xe=i,Td=t}function Pn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ee(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function sn(i,t,e,n,s,r=!0){let a=i.getImageData(0,0,t,e),o=a.data,c=Pn(s);for(let l=0;l<o.length;l+=4){let h=(c()-.5)*n;r?(o[l]+=h,o[l+1]+=h,o[l+2]+=h):(o[l]+=h,o[l+1]+=(c()-.5)*n,o[l+2]+=(c()-.5)*n)}i.putImageData(a,0,0)}function Ks(i,t,e,n,s,r,a){let o=Pn(a);for(let c=0;c<n;c++){i.fillStyle=s[o()*s.length|0],i.globalAlpha=.25+o()*.5;let l=.5+o()*r;i.beginPath(),i.arc(o()*t,o()*e,l,0,Math.PI*2),i.fill()}i.globalAlpha=1}function ne(i,t=!0){let e=new ea(i);return e.colorSpace=dn,e.anisotropy=Td,e.generateMipmaps=!0,e.minFilter=ai,e.magFilter=tn,t&&(e.wrapS=e.wrapT=Tr),e}function se(i,t){return Bc[i]||(Bc[i]=t()),Bc[i]}function Ea(i,t,e,n="#3b3d40"){i.fillStyle=n,i.fillRect(0,0,t,t),Ks(i,t,t,t*6,["#5a5c60","#2a2b2d","#6b6b6b","#232323"],t/512,e),sn(i,t,t,22,e+1)}var At={asphalt:()=>se("asphalt",()=>{let i=Xe/2,[t,e]=ee(i,i);return Ea(e,i,11),ne(t)}),road:()=>se("road",()=>{let i=Xe,[t,e]=ee(i,i);Ea(e,i,21);let n=i/20;e.fillStyle="rgba(20,20,20,0.18)";for(let a of[1.6,3.4,6.6,8.4])e.fillRect((10+a)*n-n*.6,0,n*1.2,i),e.fillRect((10-a)*n-n*.6,0,n*1.2,i);let s=(a,o,c,l)=>{e.fillStyle=a,l?e.fillRect(o*n-c*n/2,i*.1,c*n,i*l):e.fillRect(o*n-c*n/2,0,c*n,i)};s("#e8b923",9.8,.15),s("#e8b923",10.2,.15),s("#f2f2f2",5,.15,.45),s("#f2f2f2",15,.15,.45),s("#f2f2f2",.5,.18),s("#f2f2f2",19.5,.18);let r=Pn(5);e.globalCompositeOperation="source-atop";for(let a=0;a<i*3;a++)e.fillStyle="rgba(60,60,62,0.35)",e.fillRect(r()*i,r()*i,1+r()*3,1+r()*3);return e.globalCompositeOperation="source-over",ne(t)}),intersection:()=>se("intersection",()=>{let i=Xe,[t,e]=ee(i,i);Ea(e,i,31);let n=i/20;e.fillStyle="rgba(240,240,240,0.92)";for(let s=0;s<8;s++){let r=(1.5+s*2.2)*n;e.fillRect(r,.3*n,1.1*n,2.6*n),e.fillRect(r,i-2.9*n,1.1*n,2.6*n),e.fillRect(.3*n,r,2.6*n,1.1*n),e.fillRect(i-2.9*n,r,2.6*n,1.1*n)}return sn(e,i,i,10,32),ne(t,!1)}),concrete:()=>se("concrete",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#a9a69f",e.fillRect(0,0,i,i),sn(e,i,i,26,41),Ks(e,i,i,i*2,["#8f8c86","#bdbab3"],i/400,42),e.strokeStyle="rgba(70,68,64,0.55)",e.lineWidth=Math.max(1,i/256);for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*i/4,0),e.lineTo(n*i/4,i),e.stroke(),e.beginPath(),e.moveTo(0,n*i/4),e.lineTo(i,n*i/4),e.stroke();return ne(t)}),lot:()=>se("lot",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#8e8b85",e.fillRect(0,0,i,i),sn(e,i,i,30,51),Ks(e,i,i,i,["#6f6c66","#a5a29c","#5d5a55"],i/200,52),e.strokeStyle="rgba(50,48,45,0.5)",e.lineWidth=2,e.strokeRect(1,1,i-2,i-2);let n=Pn(53);for(let s=0;s<6;s++){let r=n()*i,a=n()*i,o=e.createRadialGradient(r,a,0,r,a,i/10);o.addColorStop(0,"rgba(30,30,30,0.25)"),o.addColorStop(1,"rgba(30,30,30,0)"),e.fillStyle=o,e.fillRect(0,0,i,i)}return ne(t)}),grass:()=>se("grass",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#4f7a32",e.fillRect(0,0,i,i);let n=Pn(61);for(let s=0;s<40;s++){let r=n()*i,a=n()*i,o=i*(.05+n()*.15),c=e.createRadialGradient(r,a,0,r,a,o),l=n()>.5?"96,140,58":"62,96,38";c.addColorStop(0,`rgba(${l},0.45)`),c.addColorStop(1,`rgba(${l},0)`),e.fillStyle=c,e.fillRect(0,0,i,i)}e.lineWidth=1;for(let s=0;s<i*14;s++){let r=n()*i,a=n()*i;e.strokeStyle=n()>.5?"rgba(120,170,70,0.5)":"rgba(40,70,25,0.5)",e.beginPath(),e.moveTo(r,a),e.lineTo(r+(n()-.5)*3,a-2-n()*4),e.stroke()}return sn(e,i,i,14,62,!1),ne(t)}),field:()=>se("field",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#7a5a36",e.fillRect(0,0,i,i),sn(e,i,i,30,71);let n=16;for(let s=0;s<n;s++){let r=(s+.5)*(i/n);e.fillStyle="#5d8a2a",e.fillRect(0,r-i/n/4,i,i/n/2)}return Ks(e,i,i,i*4,["#7fae3a","#4a7020","#8fbf4a"],2,72),ne(t)}),sand:()=>se("sand",()=>{let i=Xe/4,[t,e]=ee(i,i);return e.fillStyle="#d6c49a",e.fillRect(0,0,i,i),sn(e,i,i,26,81),ne(t)}),water:()=>se("water",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#1d5f7d",e.fillRect(0,0,i,i);let n=Pn(91);for(let s=0;s<900;s++){e.strokeStyle=n()>.5?"rgba(170,220,240,0.22)":"rgba(10,40,60,0.25)",e.lineWidth=1+n()*2;let r=n()*i,a=n()*i,o=6+n()*20;e.beginPath(),e.moveTo(r,a),e.quadraticCurveTo(r+o/2,a-3,r+o,a),e.stroke()}return ne(t)}),roof:()=>se("roof",()=>{let i=Xe/4,[t,e]=ee(i,i);return e.fillStyle="#5c5a57",e.fillRect(0,0,i,i),sn(e,i,i,34,101),Ks(e,i,i,i*3,["#77746f","#44423f"],1.5,102),ne(t)}),tiles:()=>se("tiles",()=>{let i=Xe/4,[t,e]=ee(i,i);e.fillStyle="#9b3d2a",e.fillRect(0,0,i,i);let n=8;for(let s=0;s<n;s++)for(let r=0;r<n;r++){let a=e.createLinearGradient(0,s*i/n,0,(s+1)*i/n);a.addColorStop(0,"#b4513a"),a.addColorStop(1,"#7a2c1d"),e.fillStyle=a,e.fillRect((r+s%2*.5)*i/n,s*i/n,i/n-1,i/n-1)}return sn(e,i,i,16,103),ne(t)}),metal:()=>se("metal",()=>{let i=Xe/2,[t,e]=ee(i,i),n=32;for(let s=0;s<n;s++){let r=e.createLinearGradient(s*i/n,0,(s+1)*i/n,0);r.addColorStop(0,"#9aa1a6"),r.addColorStop(.5,"#d9dee1"),r.addColorStop(1,"#868c90"),e.fillStyle=r,e.fillRect(s*i/n,0,i/n,i)}return sn(e,i,i,14,111),ne(t)}),tire:()=>se("tire",()=>{let[t,e]=ee(256,256);e.fillStyle="#1b1b1c",e.fillRect(0,0,256,256),e.fillStyle="#2c2c2e";for(let n=0;n<24;n++)e.save(),e.translate(n*256/24,0),e.fillRect(0,0,256/48,256),e.restore();return sn(e,256,256,10,121),ne(t)}),rim:()=>se("rim",()=>{let[t,e]=ee(256,256);e.fillStyle="#151515",e.fillRect(0,0,256,256);let n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256*.36);n.addColorStop(0,"#f0f0f0"),n.addColorStop(.6,"#b8bcc0"),n.addColorStop(1,"#7c8084"),e.fillStyle=n,e.beginPath(),e.arc(256/2,256/2,256*.36,0,Math.PI*2),e.fill(),e.fillStyle="#444";for(let s=0;s<10;s++){let r=s/10*Math.PI*2;e.beginPath(),e.arc(256/2+Math.cos(r)*256*.2,256/2+Math.sin(r)*256*.2,256*.025,0,7),e.fill()}return e.fillStyle="#555",e.beginPath(),e.arc(256/2,256/2,256*.09,0,7),e.fill(),ne(t,!1)}),facade:i=>se("facade"+i,()=>{let t=Xe,[e,n]=ee(t,t),[s,r]=ee(t/2,t/2);r.fillStyle="#000",r.fillRect(0,0,t/2,t/2);let a=Pn(200+i),o=[{wall:"#c9d0d6",win:["#3a5a78","#4a7090","#2d4a66"],frame:"#7f8a93",mw:.78,mh:.62},{wall:"#9c4f39",win:["#24323e","#3b4d5c","#2f3d48"],frame:"#ddd4c2",mw:.42,mh:.5},{wall:"#d9d2c3",win:["#2b3a47","#3f5566","#33414d"],frame:"#948c7b",mw:.5,mh:.48},{wall:"#66757f",win:["#1d2d3c","#2c4a64","#3a5f7d"],frame:"#3a4954",mw:.9,mh:.8}][i];if(n.fillStyle=o.wall,n.fillRect(0,0,t,t),sn(n,t,t,18,210+i),i===1){n.strokeStyle="rgba(70,30,20,0.4)",n.lineWidth=1;let d=t/96;for(let p=0;p<96;p++){n.beginPath(),n.moveTo(0,p*d),n.lineTo(t,p*d),n.stroke();for(let g=0;g<32;g++){let x=(g+p%2*.5)*t/32;n.beginPath(),n.moveTo(x,p*d),n.lineTo(x,(p+1)*d),n.stroke()}}}let c=4,l=t/c,h=["#ffd38a","#ffe7b0","#fff4d6","#cfe3ff","#ffc070"];for(let d=0;d<c;d++){for(let p=0;p<c;p++){let g=p*l,x=d*l,f=l*o.mw,m=l*o.mh,v=g+(l-f)/2,_=x+(l-m)/2-l*.04;n.fillStyle=o.frame,n.fillRect(v-3,_-3,f+6,m+6);let M=n.createLinearGradient(v,_,v+f,_+m),L=o.win[a()*o.win.length|0];if(M.addColorStop(0,L),M.addColorStop(.5,"#8fa8bc"),M.addColorStop(.56,L),M.addColorStop(1,"#141d26"),n.fillStyle=M,n.fillRect(v,_,f,m),n.fillStyle=o.frame,n.fillRect(v+f/2-1.5,_,3,m),i!==3&&n.fillRect(v,_+m*.35,f,2),(i===1||i===2)&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(v-4,_+m+3,f+8,4)),a()<.42){let T=r.createLinearGradient(0,_*.5,0,(_+m)*.5),P=h[a()*h.length|0];T.addColorStop(0,P),T.addColorStop(1,"#6b4a20"),r.fillStyle=T,r.fillRect(v*.5,_*.5,f*.5,m*.5)}}(i===0||i===3)&&(n.fillStyle=o.frame,n.fillRect(0,d*l+l-4,t,4))}for(let d=0;d<40;d++){let p=a()*t,g=t*(.05+a()*.2),x=a()*t,f=n.createLinearGradient(0,x,0,x+g);f.addColorStop(0,"rgba(40,35,30,0.12)"),f.addColorStop(1,"rgba(40,35,30,0)"),n.fillStyle=f,n.fillRect(p,x,2+a()*6,g)}let u=ne(e);return u.userData.emissive=ne(s),u}),highway:()=>se("highway",()=>{let i=Xe,[t,e]=ee(i,i);Ea(e,i,23,"#3a3c3f");let n=i/18;e.fillStyle="rgba(150,150,150,0.18)",e.fillRect(0,0,2*n,i),e.fillRect(16*n,0,2*n,i),e.fillStyle="rgba(20,20,20,0.2)";for(let r of[4.2,6.6,11.4,13.8])e.fillRect(r*n-n*.5,0,n,i);e.fillStyle="#f2f2f2",e.fillRect(1.9*n,0,.15*n,i),e.fillRect(15.95*n,0,.15*n,i),e.fillStyle="#e8b923",e.fillRect(8.82*n,0,.14*n,i*.5),e.fillRect(9.04*n,0,.14*n,i);let s=Pn(24);e.strokeStyle="rgba(15,15,15,0.35)",e.lineWidth=1.2;for(let r=0;r<14;r++){let a=s()*i,o=s()*i;e.beginPath(),e.moveTo(a,o);for(let c=0;c<6;c++)a+=(s()-.5)*30,o+=s()*20,e.lineTo(a,o);e.stroke()}for(let r=0;r<3;r++)e.fillStyle="rgba(25,25,27,0.35)",e.fillRect(2*n+s()*12*n,s()*i,1.5*n+s()*n,1*n+s()*n);return ne(t)}),roadSign:(i,t,e)=>se("rs"+i+t+e,()=>{let[r,a]=ee(1024,410);a.fillStyle=e,a.fillRect(0,0,1024,410),a.strokeStyle="#fff",a.lineWidth=14,a.strokeRect(20,20,984,370),a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle";let o=120;for(a.font=`700 ${o}px sans-serif`;a.measureText(i).width>904;)o-=6,a.font=`700 ${o}px sans-serif`;return a.fillText(i,1024/2,410*.42),a.font="600 64px sans-serif",a.fillText(t,1024/2,410*.76),ne(r,!1)}),speedSign:i=>se("spd"+i,()=>{let[e,n]=ee(256,256);return n.fillStyle="#fff",n.beginPath(),n.arc(256/2,256/2,256/2,0,7),n.fill(),n.strokeStyle="#d0021b",n.lineWidth=28,n.beginPath(),n.arc(256/2,256/2,256/2-16,0,7),n.stroke(),n.fillStyle="#111",n.font="800 110px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),256/2,256/2+6),ne(e,!1)}),clouds:()=>se("clouds",()=>{let[e,n]=ee(1024,512);n.clearRect(0,0,1024,512);let s=Pn(555);for(let a=0;a<70;a++){let o=s()*1024,c=512*.25+s()*512*.55,l=30+s()*90;for(let h=0;h<7;h++){let u=o+(s()-.5)*l*1.8,d=c+(s()-.5)*l*.4,p=l*(.4+s()*.6),g=n.createRadialGradient(u,d,0,u,d,p);g.addColorStop(0,"rgba(255,255,255,0.55)"),g.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=g,n.fillRect(u-p,d-p,p*2,p*2),u<p&&(n.save(),n.translate(1024,0),n.fillRect(u-p,d-p,p*2,p*2),n.restore())}}let r=ne(e);return r.wrapT=Mn,r}),panel:()=>se("panel",()=>{let[t,e]=ee(512,512),n=32;for(let r=0;r<n;r++){let a=e.createLinearGradient(r*512/n,0,(r+1)*512/n,0);a.addColorStop(0,"#d9dcdf"),a.addColorStop(.5,"#ffffff"),a.addColorStop(1,"#c8cbce"),e.fillStyle=a,e.fillRect(r*512/n,0,512/n,512)}e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(0,0,512,6),e.fillRect(0,506,512,6);let s=e.createLinearGradient(0,512,0,512*.6);return s.addColorStop(0,"rgba(110,92,70,0.35)"),s.addColorStop(1,"rgba(110,92,70,0)"),e.fillStyle=s,e.fillRect(0,0,512,512),sn(e,512,512,8,600),ne(t)}),headlamp:()=>se("headlamp",()=>{let[e,n]=ee(256,128),s=n.createLinearGradient(0,0,0,128);s.addColorStop(0,"#3a4048"),s.addColorStop(1,"#14181c"),n.fillStyle=s,n.fillRect(0,0,256,128);for(let[r,a]of[[70,40],[170,34]]){let o=n.createRadialGradient(r,60,2,r,60,a);o.addColorStop(0,"#ffffff"),o.addColorStop(.35,"#dfe6ee"),o.addColorStop(.7,"#8d98a5"),o.addColorStop(1,"#2b3138"),n.fillStyle=o,n.beginPath(),n.arc(r,60,a,0,7),n.fill()}return n.fillStyle="#f7fbff",n.fillRect(20,108,216,8),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=4,n.strokeRect(2,2,252,124),ne(e,!1)}),taillamp:()=>se("taillamp",()=>{let[e,n]=ee(128,64);return n.fillStyle="#5a0a0a",n.fillRect(0,0,128,64),n.fillStyle="#ff2a1a",n.fillRect(4,4,56,56),n.fillStyle="#ffa21a",n.fillRect(64,4,28,56),n.fillStyle="#f2f2f2",n.fillRect(96,4,28,56),ne(e,!1)}),cabDecal:i=>se("decal"+i,()=>{let[n,s]=ee(512,192);s.clearRect(0,0,512,192);let r=new gt(i),a="#"+r.clone().multiplyScalar(.45).getHexString(),o=r.getHSL({}).l>.6?"#2a3440":"#ffffff";return s.fillStyle=a,s.beginPath(),s.moveTo(0,192*.55),s.lineTo(512,192*.25),s.lineTo(512,192*.42),s.lineTo(0,192*.72),s.fill(),s.fillStyle=o,s.beginPath(),s.moveTo(0,192*.76),s.lineTo(512,192*.46),s.lineTo(512,192*.5),s.lineTo(0,192*.8),s.fill(),s.font="italic 900 46px sans-serif",s.fillStyle=o,s.fillText("DRIZZIE",26,192*.42),ne(n,!1)}),warehouse:()=>se("warehouse",()=>{let i=Xe/2,[t,e]=ee(i,i),n=40;for(let s=0;s<n;s++){let r=e.createLinearGradient(s*i/n,0,(s+1)*i/n,0);r.addColorStop(0,"#b7bcc0"),r.addColorStop(.5,"#e4e7e9"),r.addColorStop(1,"#a6abaf"),e.fillStyle=r,e.fillRect(s*i/n,0,i/n,i)}return e.fillStyle="rgba(60,70,80,0.35)",e.fillRect(0,i*.9,i,i*.1),sn(e,i,i,12,301),ne(t)}),container:i=>se("container"+i,()=>{let[e,n]=ee(256,256),s=new gt(i),r=24;for(let a=0;a<r;a++){let o=n.createLinearGradient(a*256/r,0,(a+1)*256/r,0);o.addColorStop(0,"#"+s.clone().multiplyScalar(.7).getHexString()),o.addColorStop(.5,"#"+s.clone().multiplyScalar(1.1).getHexString()),o.addColorStop(1,"#"+s.clone().multiplyScalar(.6).getHexString()),n.fillStyle=o,n.fillRect(a*256/r,0,256/r,256)}return n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=6,n.strokeRect(3,3,250,250),sn(n,256,256,14,311),ne(e)}),cargoBox:(i,t)=>se("cbox"+i+t,()=>{let e=Xe,n=Xe/4,[s,r]=ee(e,n),a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#fbfbfb"),a.addColorStop(1,"#d7dadd"),r.fillStyle=a,r.fillRect(0,0,e,n),r.fillStyle=i,r.fillRect(0,n*.78,e,n*.08),r.beginPath(),r.moveTo(e*.05,n*.7),r.lineTo(e*.15,n*.2),r.lineTo(e*.22,n*.2),r.lineTo(e*.12,n*.7),r.fill(),r.font=`900 ${n*.34}px sans-serif`,r.textBaseline="middle",r.fillText(t,e*.25,n*.42),r.font=`600 ${n*.1}px sans-serif`,r.fillStyle="#555",r.fillText("TRANSPORTES & LOG\xCDSTICA",e*.255,n*.66),r.strokeStyle="rgba(0,0,0,0.15)",r.lineWidth=2;for(let o=1;o<12;o++)r.beginPath(),r.moveTo(o*e/12,0),r.lineTo(o*e/12,n),r.stroke();return ne(s,!1)}),sign:(i,t,e)=>se("sign"+i+t,()=>{let[r,a]=ee(1024,192);a.fillStyle=t,a.fillRect(0,0,1024,192),a.strokeStyle="rgba(255,255,255,0.8)",a.lineWidth=8,a.strokeRect(10,10,1004,172),a.fillStyle=e;let o=96;for(a.font=`800 ${o}px sans-serif`;a.measureText(i).width>944&&o>30;)o-=4,a.font=`800 ${o}px sans-serif`;return a.textAlign="center",a.textBaseline="middle",a.fillText(i,1024/2,192/2+4),ne(r,!1)}),paint:()=>se("paint",()=>{let[t,e]=ee(512,512),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#eeeeee"),n.addColorStop(1,"#c4c4c4"),e.fillStyle=n,e.fillRect(0,0,512,512);let s=Pn(777),r=e.createLinearGradient(0,512,0,512*.35);r.addColorStop(0,"rgba(110,92,70,0.55)"),r.addColorStop(1,"rgba(110,92,70,0)"),e.fillStyle=r,e.fillRect(0,0,512,512);for(let a=0;a<2600;a++){let o=512-Math.pow(s(),1.8)*512;e.fillStyle=`rgba(${90+s()*40},${75+s()*30},${55+s()*25},${.06+s()*.16})`,e.beginPath(),e.arc(s()*512,o,.5+s()*3.5,0,7),e.fill()}for(let a=0;a<70;a++){let o=s()*512,c=s()*512*.4,l=512*(.15+s()*.5),h=e.createLinearGradient(0,c,0,c+l);h.addColorStop(0,"rgba(80,70,55,0)"),h.addColorStop(.5,"rgba(80,70,55,0.14)"),h.addColorStop(1,"rgba(80,70,55,0)"),e.fillStyle=h,e.fillRect(o,c,1+s()*3,l)}return sn(e,512,512,8,778),ne(t)}),backdrop:()=>se("backdrop",()=>{let[e,n]=ee(1024,512),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#08121f"),s.addColorStop(1,"#0e2a40"),n.fillStyle=s,n.fillRect(0,0,1024,512);let r=Pn(901),a=64;for(let o=0;o<512/a+1;o++)for(let c=0;c<1024/a+1;c++){let l=c*a+o%2*a/2,h=o*a*.87;n.fillStyle=`rgba(${40+r()*30},${90+r()*60},${130+r()*70},${.05+r()*.12})`,n.beginPath(),n.moveTo(l,h),n.lineTo(l+a/2,h+a*.87),n.lineTo(l-a/2,h+a*.87),n.closePath(),n.fill(),n.strokeStyle="rgba(120,200,255,0.06)",n.stroke()}return ne(e,!1)}),glow:()=>se("glow",()=>{let[t,e]=ee(128,128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.55)"),n.addColorStop(1,"rgba(255,220,150,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ne(t,!1)}),beam:()=>se("beam",()=>{let[e,n]=ee(128,256),s=n.createRadialGradient(128/2,256,0,128/2,256,256);return s.addColorStop(0,"rgba(255,245,220,0.85)"),s.addColorStop(.5,"rgba(255,240,210,0.35)"),s.addColorStop(1,"rgba(255,240,210,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(128*.42,256),n.lineTo(0,0),n.lineTo(128,0),n.lineTo(128*.58,256),n.fill(),ne(e,!1)}),grill:()=>se("grill",()=>{let[t,e]=ee(256,256);e.fillStyle="#0c0c0c",e.fillRect(0,0,256,256);for(let n=0;n<9;n++){let s=12+n*27,r=e.createLinearGradient(0,s,0,s+14);r.addColorStop(0,"#f2f2f2"),r.addColorStop(1,"#7a7a7a"),e.fillStyle=r,e.fillRect(8,s,240,14)}return ne(t,!1)}),blob:()=>se("blob",()=>{let[t,e]=ee(128,128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(0,0,0,0.65)"),n.addColorStop(.6,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ne(t,!1)}),zone:()=>se("zone",()=>{let[t,e]=ee(256,256);return e.clearRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,1)",e.lineWidth=14,e.strokeRect(7,7,242,242),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(14,14,228,228),ne(t,!1)}),bark:()=>se("bark",()=>{let[t,e]=ee(256,256);e.fillStyle="#6b4a2b",e.fillRect(0,0,256,256);let n=Pn(401);for(let s=0;s<120;s++){e.strokeStyle=n()>.5?"rgba(40,25,12,0.6)":"rgba(140,100,60,0.4)",e.lineWidth=1+n()*3;let r=n()*256;e.beginPath(),e.moveTo(r,0),e.lineTo(r+(n()-.5)*12,256),e.stroke()}return ne(t)}),foliage:()=>se("foliage",()=>{let[t,e]=ee(256,256);return e.fillStyle="#c8c8c8",e.fillRect(0,0,256,256),Ks(e,256,256,2600,["#ffffff","#8a8a8a","#e6e6e6","#6e6e6e"],5,411),ne(t)})};var Ta=new N,Aa=new N,Rd=new qt,Ra=new gt,Lt=class{constructor(t=!1){this.pos=[],this.nor=[],this.uv=[],this.col=t?[]:null,this.idx=[]}get count(){return this.pos.length/3}_color(t){this.col&&(Ra.set(t!=null?t:16777215),this.col.push(Ra.r,Ra.g,Ra.b))}quad(t,e,n,s,r,a,o){let c=this.count;for(let l of[t,e,n,s])this.pos.push(l[0],l[1],l[2]),this.nor.push(r[0],r[1],r[2]),this._color(o);this.uv.push(...a),this.idx.push(c,c+1,c+2,c,c+2,c+3)}ground(t,e,n,s,r,a,o){let c=t/a,l=n/a,h=-s/a,u=-e/a;this.quad([t,r,s],[n,r,s],[n,r,e],[t,r,e],[0,1,0],[c,h,l,h,l,u,c,u],o)}walls(t,e,n,s,r,a,o,c,l=0,h){let d=(r-e)/c,p=(s-t)/o,g=(a-n)/o;this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],[0,0,1],[l,0,l+p,0,l+p,d,l,d],h),this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],[0,0,-1],[l,0,l+p,0,l+p,d,l,d],h),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],[1,0,0],[l,0,l+g,0,l+g,d,l,d],h),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],[-1,0,0],[l,0,l+g,0,l+g,d,l,d],h)}top(t,e,n,s,r,a,o){this.ground(t,e,n,s,r,a,o)}box(t,e,n,s,r,a,o,c){this.walls(t,e,n,s,r,a,o,o,0,c),this.top(t,n,s,a,r,o,c)}add(t,e,n,s=1){let r=t.attributes.position,a=t.attributes.normal,o=t.attributes.uv,c=this.count;Rd.getNormalMatrix(e);for(let l=0;l<r.count;l++)Ta.fromBufferAttribute(r,l).applyMatrix4(e),this.pos.push(Ta.x,Ta.y,Ta.z),Aa.fromBufferAttribute(a,l).applyMatrix3(Rd).normalize(),this.nor.push(Aa.x,Aa.y,Aa.z),o?this.uv.push(o.getX(l)*s,o.getY(l)*s):this.uv.push(0,0),this._color(n);if(t.index){let l=t.index.array;for(let h=0;h<l.length;h++)this.idx.push(l[h]+c)}else for(let l=0;l<r.count;l++)this.idx.push(c+l)}geometry(){let t=new Pe;t.setAttribute("position",new Vt(this.pos,3)),t.setAttribute("normal",new Vt(this.nor,3)),t.setAttribute("uv",new Vt(this.uv,2)),this.col&&t.setAttribute("color",new Vt(this.col,3));let e=this.count>65535;return t.setIndex(e?new Gs(this.idx,1):new Hs(this.idx,1)),t.computeBoundingSphere(),t}mesh(t,e={}){if(!this.count)return null;let n=new Kt(this.geometry(),t);return n.castShadow=!!e.cast,n.receiveShadow=e.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}},Y_=new fe,Cd=new Yn,$_=new mn,Z_=new N,J_=new N;function vt(i,t,e,n=0,s=0,r=0,a=1,o=1,c=1){return Cd.setFromEuler($_.set(n,s,r)),Y_.compose(J_.set(i,t,e),Cd,Z_.set(a,o,c)).clone()}var Fi={},Ot={box:()=>Fi.box||(Fi.box=new gn(1,1,1)),cyl:(i=16)=>Fi["cyl"+i]||(Fi["cyl"+i]=new Sn(.5,.5,1,i)),cone:(i=12)=>Fi["cone"+i]||(Fi["cone"+i]=new Ui(.5,1,i)),sphere:()=>Fi.sph||(Fi.sph=new Jn(.5,16,10))};var kc=i=>i<=0?0:i>=1?1:i*i*(3-2*i),Ca=class{constructor(t=80,e=40){this.cell=t,this.pad=e,this.map=new Map}addSegments(t,e,n){let s=this.cell,r=this.pad;for(let a=0;a<e.length-1;a++){let o=Math.min(e[a],e[a+1])-r,c=Math.max(e[a],e[a+1])+r,l=Math.min(n[a],n[a+1])-r,h=Math.max(n[a],n[a+1])+r;for(let u=Math.floor(o/s);u<=Math.floor(c/s);u++)for(let d=Math.floor(l/s);d<=Math.floor(h/s);d++){let p=u*1e5+d,g=this.map.get(p);g||this.map.set(p,g=[]),g.push(t,a)}}}nearest(t,e,n){let s=this.map.get(Math.floor(t/this.cell)*1e5+Math.floor(e/this.cell));if(n.d=1/0,!s)return null;for(let r=0;r<s.length;r+=2){let a=s[r],o=s[r+1],c=a.x[o],l=a.z[o],h=a.x[o+1],u=a.z[o+1],d=h-c,p=u-l,g=d*d+p*p||1,x=((t-c)*d+(e-l)*p)/g;x=x<0?0:x>1?1:x;let f=c+d*x,m=l+p*x,v=Math.hypot(t-f,e-m);v<n.d&&(n.d=v,n.o=a,n.i=o,n.t=x,n.x=f,n.z=m)}return n.d<1/0?n:null}};function Pd(i,t){let e=new Dr(i.map(o=>new N(o[0],0,o[1])),!1,"centripetal",.5),n=Math.max(2,Math.ceil(e.getLength()/t)),s=e.getSpacedPoints(n),r=new Float32Array(s.length),a=new Float32Array(s.length);return s.forEach((o,c)=>{r[c]=o.x,a[c]=o.z}),{x:r,z:a}}var Hc=class{constructor(){let{x:t,z:e}=Pd(Sd,10);this.x=t,this.z=e,this.n=t.length,this.idx=new Ca(100,di/2+80),this.idx.addSegments(this,t,e),this._q={}}dist(t,e){let n=this.idx.nearest(t,e,this._q);return n?n.d:1/0}},Gc=class{constructor(t,e){this.def=t,this.id=t.id;let{x:n,z:s}=Pd(t.pts,4),r=this.n=n.length;this.x=n,this.z=s,this.s=new Float32Array(r),this.dx=new Float32Array(r),this.dz=new Float32Array(r),this.y=new Float32Array(r);for(let l=1;l<r;l++)this.s[l]=this.s[l-1]+Math.hypot(n[l]-n[l-1],s[l]-s[l-1]);this.length=this.s[r-1];for(let l=0;l<r;l++){let h=Math.max(0,l-1),u=Math.min(r-1,l+1),d=n[u]-n[h],p=s[u]-s[h],g=Math.hypot(d,p)||1;this.dx[l]=d/g,this.dz[l]=p/g}let a=Bn.filter(l=>l.hw===t.id).map(l=>[(l.lot[0]+l.lot[2])/2,(l.lot[1]+l.lot[3])/2]),o=new Float32Array(r);this.bridge=new Uint8Array(r);let c=7.5;for(let l=0;l<r;l++){let h=e.dist(n[l],s[l]);h<di/2+14&&(this.bridge[l]=1);let d=c*kc(1-(h-(di/2+22))/150),p=kc(Math.min(this.s[l],this.length-this.s[l])/220-.3);for(let[f,m]of a)p=Math.min(p,kc((Math.hypot(n[l]-f,s[l]-m)-110)/160));let g=this.s[l],x=(t.hills||0)*p*(.55*Math.pow(Math.sin(g/260),2)+.45*Math.pow(Math.sin(g/610+1.3),2));o[l]=Math.max(d,x)}for(let l=0;l<r;l++){let h=0,u=0;for(let d=-8;d<=8;d++){let p=Math.min(r-1,Math.max(0,l+d));h+=o[p],u++}this.y[l]=this.bridge[l]?Math.max(c,h/u):h/u}this.y[0]=this.y[r-1]=0}at(t,e){let n=this.n;t=Math.max(0,Math.min(this.length,t));let s=0,r=n-1;for(;r-s>1;){let o=s+r>>1;this.s[o]<=t?s=o:r=o}let a=(t-this.s[s])/(this.s[r]-this.s[s]||1);return e.x=this.x[s]+(this.x[r]-this.x[s])*a,e.z=this.z[s]+(this.z[r]-this.z[s])*a,e.y=this.y[s]+(this.y[r]-this.y[s])*a,e.dx=this.dx[s],e.dz=this.dz[s],e.i=s,e}};function Ld(){let i=new Hc,t=wd.map(n=>new Gc(n,i)),e=new Ca(80,40);for(let n of t)e.addSegments(n,n.x,n.z);return{river:i,hws:t,idx:e}}var ae=20/2;function K_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Pa(i,t){let e=(l,h)=>{let u=Math.sin(l*127.1+h*311.7)*43758.5453;return u-Math.floor(u)},n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=r*r*(3-2*r),c=a*a*(3-2*a);return(e(n,s)*(1-o)+e(n+1,s)*o)*(1-c)+(e(n,s+1)*(1-o)+e(n+1,s+1)*o)*c}var La=class{constructor(t,e){this.scene=t,this.q=e,this.colliders=[],this.cell=70,this.grid=new Map,this.depots={},this.animated=[],this.areas=[],this.hills=[],this.fields=[];let n=Ld();this.river=n.river,this.hws=n.hws,this.hwIdx=n.idx,this.hwById=Object.fromEntries(this.hws.map(s=>[s.id,s])),this._q={},this.build()}addCollider(t,e,n,s){let r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s)};this.colliders.push(r);let a=this.cell;for(let o=Math.floor(r.x0/a);o<=Math.floor(r.x1/a);o++)for(let c=Math.floor(r.z0/a);c<=Math.floor(r.z1/a);c++){let l=o*1e5+c;this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}hw(t,e){return this.hwIdx.nearest(t,e,this._q)}inArea(t,e,n){for(let s of this.areas)if(t>=s.x0+n&&t<=s.x1-n&&e>=s.z0+n&&e<=s.z1-n)return s;return null}heightAt(t,e){for(let r of this.areas)if(t>=r.x0&&t<=r.x1&&e>=r.z0&&e<=r.z1)return 0;let n=this.hw(t,e);if(!n||n.d>12)return 0;let s=n.o;return s.y[n.i]+(s.y[n.i+1]-s.y[n.i])*n.t}resolveCircle(t,e,n,s=!1){let r=0;if(n.x=0,n.z=0,!s&&!this.inArea(t.x,t.z,e)){let l=this.hw(t.x,t.z),h=9-e*.8;if(!l||l.d>h){let u=t.x,d=t.z,p=1/0;if(l){let g=h/(l.d||1);u=l.x+(t.x-l.x)*g,d=l.z+(t.z-l.z)*g,p=Math.hypot(t.x-u,t.z-d)}for(let g of this.areas){if(t.x<g.x0-60||t.x>g.x1+60||t.z<g.z0-60||t.z>g.z1+60)continue;let x=Math.max(g.x0+e,Math.min(t.x,g.x1-e)),f=Math.max(g.z0+e,Math.min(t.z,g.z1-e)),m=Math.hypot(t.x-x,t.z-f);m<p&&(p=m,u=x,d=f)}p<1/0&&(n.x=u-t.x,n.z=d-t.z,r=p)}}let a=this.cell,o=Math.floor((t.x+n.x)/a),c=Math.floor((t.z+n.z)/a);for(let l=o-1;l<=o+1;l++)for(let h=c-1;h<=c+1;h++){let u=this.grid.get(l*1e5+h);if(u)for(let d of u){let p=t.x+n.x,g=t.z+n.z,x=Math.max(d.x0,Math.min(p,d.x1)),f=Math.max(d.z0,Math.min(g,d.z1)),m=p-x,v=g-f,_=m*m+v*v;if(_<e*e)if(_>1e-6){let M=Math.sqrt(_),L=e-M;n.x+=m/M*L,n.z+=v/M*L,r=Math.max(r,L)}else{let M=p-d.x0,L=d.x1-p,E=g-d.z0,T=d.z1-g,P=Math.min(M,L,E,T);P===M?n.x-=M+e:P===L?n.x+=L+e:P===E?n.z-=E+e:n.z+=T+e,r=Math.max(r,P+e)}}}return r}terrainH(t,e){let n=0;for(let s of this.hills){let r=((t-s.x)**2+(e-s.z)**2)/(s.r*s.r);r<1&&(n=Math.max(n,s.h*Math.sqrt(1-r)-4))}return n}isFree(t,e,n){if(e>1750)return!1;let s=this.hw(t,e);if(s&&s.d<15+s.o.y[s.i]*1.9+n||this.river.dist(t,e)<di/2+12+n)return!1;for(let r of this.areas)if(t>r.x0-25-n&&t<r.x1+25+n&&e>r.z0-25-n&&e<r.z1+25+n)return!1;for(let r of this.fields)if(t>r.x0-n&&t<r.x1+n&&e>r.z0-n&&e<r.z1+n)return!1;return!0}build(){let t=(r,a={})=>new cn(un({map:r},a)),e={grass:t(At.grass(),{vertexColors:!0,side:de}),road:t(At.road()),hwy:t(At.highway()),inter:t(At.intersection()),concrete:t(At.concrete()),bridge:t(At.concrete(),{side:de}),lot:t(At.lot()),field:t(At.field(),{vertexColors:!0}),sand:t(At.sand()),roof:t(At.roof()),tiles:t(At.tiles()),wh:t(At.warehouse(),{vertexColors:!0}),f:[0,1,2,3].map(r=>new wn({map:At.facade(r),emissiveMap:At.facade(r).userData.emissive,emissive:16777215,emissiveIntensity:0,shininess:r===0||r===3?60:8,specular:r===0||r===3?5592405:1118481})),flat:new cn({vertexColors:!0}),metal:new wn({map:At.metal(),vertexColors:!0,shininess:50,specular:6710886}),cont:t(At.container(14540253),{vertexColors:!0}),leaf:t(At.foliage(),{vertexColors:!0})};this.M=e;let n={grass:new Lt(!0),road:new Lt,hwy:new Lt,inter:new Lt,concrete:new Lt,bridge:new Lt,lot:new Lt,field:new Lt(!0),sand:new Lt,roof:new Lt,tiles:new Lt,wh:new Lt(!0),f:[new Lt,new Lt,new Lt,new Lt],flat:new Lt(!0),metal:new Lt(!0),cont:new Lt(!0)};this.B=n,this.trees=[],this.lamps=[],this.rails=[],this.posts=[],this.r=K_(1234);for(let r of On)this.areas.push({x0:r.x0-ae,z0:r.z0-ae,x1:as(r)+ae,z1:$s(r)+ae,city:r});for(let r of this.hws)for(let a of[r.def.from,r.def.to]){if(!a)continue;let o=Sa[a[0]],c=o.x0+a[1]*140,l=o.z0+a[2]*140;this.areas.push({x0:c-22,z0:l-22,x1:c+22,z1:l+22,pad:!0}),n.hwy.ground(c-22,l-22,c+22,l+22,.015,18)}for(let r of Bn)r.lot&&this.areas.push({x0:r.lot[0],z0:r.lot[1],x1:r.lot[2],z1:r.lot[3],lot:r.id});this.layoutCountry(),this.buildGround();for(let r of On)this.buildCity(r);for(let r of Bn)r.lot&&this.buildDepot(r,...r.lot);for(let r of this.hws)this.buildHighway(r);this.buildRiverAndSea(),this.buildHills(),this.scatterForest();let s=(r,a,o=!1)=>{let c=r.mesh(a,{cast:o});return c&&this.scene.add(c),c};s(n.grass,e.grass),s(n.road,e.road),s(n.hwy,e.hwy),s(n.inter,e.inter),s(n.concrete,e.concrete,!0),s(n.bridge,e.bridge,!0),s(n.lot,e.lot),s(n.field,e.field),s(n.sand,e.sand),s(n.roof,e.roof),s(n.tiles,e.tiles,!0),s(n.wh,e.wh,!0),s(n.flat,e.flat,!0),s(n.metal,e.metal,!0),s(n.cont,e.cont,!0),n.f.forEach((r,a)=>s(r,e.f[a],!0)),this.buildRails(),this.buildTrees(),this.buildLamps(),this.B=null}layoutCountry(){let t=this.r;for(let n=0;n<300&&this.hills.length<34;n++){let s=we.x0+t()*(we.x1-we.x0),r=we.z0+t()*(we.z1-we.z0),a=110+t()*220,o=25+t()*70;this.isFree(s,r,a+30)&&this.hills.push({x:s,z:r,r:a,h:o})}let e=[[-1e3,160,-600,700],[-2900,-1600,-2300,-1100],[600,150,1700,1e3],[1200,-700,1900,-150]];for(let[n,s,r,a]of e)for(let o=n;o<r;o+=140)for(let c=s;c<a;c+=110){let l={x0:o+6,z0:c+6,x1:o+134,z1:c+104};[[l.x0,l.z0],[l.x1,l.z0],[l.x0,l.z1],[l.x1,l.z1],[(l.x0+l.x1)/2,(l.z0+l.z1)/2]].every(([u,d])=>this.isFree(u,d,12))&&t()>.2&&this.fields.push(l)}this.hills=this.hills.filter(n=>!this.fields.some(s=>n.x+n.r>s.x0&&n.x-n.r<s.x1&&n.z+n.r>s.z0&&n.z-n.r<s.z1))}buildGround(){let t=this.B,e=new We(12e3,12e3,120,120);e.rotateX(-Math.PI/2);let n=e.attributes.position,s=t.grass.count;for(let o=0;o<n.count;o++){let c=n.getX(o),l=n.getZ(o);t.grass.pos.push(c,-.03,l),t.grass.nor.push(0,1,0),t.grass.uv.push(c/14,-l/14);let h=Pa(c/420,l/420)*.6+Pa(c/90,l/90)*.4;t.grass.col.push(.74+h*.34,.84+h*.24,.68+h*.2)}let r=e.index.array;for(let o=0;o<r.length;o++)t.grass.idx.push(r[o]+s);let a=[16777215,15265984,14207120,13164712];this.fields.forEach((o,c)=>t.field.ground(o.x0,o.z0,o.x1,o.z1,.03,24,a[c%a.length]))}buildCity(t){let e=this.B,n=a=>t.x0+a*140,s=a=>t.z0+a*140;for(let a=0;a<=t.nx;a++){let o=n(a);for(let c=0;c<t.nz;c++){let l=s(c)+ae,h=s(c+1)-ae;e.road.quad([o-ae,.02,h],[o+ae,.02,h],[o+ae,.02,l],[o-ae,.02,l],[0,1,0],[0,0,1,0,1,(h-l)/20,0,(h-l)/20])}}for(let a=0;a<=t.nz;a++){let o=s(a);for(let c=0;c<t.nx;c++){let l=n(c)+ae,h=n(c+1)-ae;e.road.quad([l,.02,o+ae],[h,.02,o+ae],[h,.02,o-ae],[l,.02,o-ae],[0,1,0],[0,0,0,(h-l)/20,1,(h-l)/20,1,0])}}for(let a=0;a<=t.nx;a++)for(let o=0;o<=t.nz;o++){let c=n(a),l=s(o);e.inter.quad([c-ae,.025,l+ae],[c+ae,.025,l+ae],[c+ae,.025,l-ae],[c-ae,.025,l-ae],[0,1,0],[0,0,1,0,1,1,0,1])}let r={};for(let a of Bn)a.city===t.id&&(r[a.bx+","+a.bz]=a);for(let a=0;a<t.nx;a++)for(let o=0;o<t.nz;o++){let c=n(a)+ae,l=n(a+1)-ae,h=s(o)+ae,u=s(o+1)-ae,d=r[a+","+o];d?this.buildDepot(d,c,h,l,u):this.buildBlock(wa(t,a,o),c,h,l,u)}this.roadSign(t.x0-26,t.z0-26,Math.PI*.75,t.name.toUpperCase(),"Bem-vindo","#1d4f7a")}grassPatch(t,e,n,s){this.B.grass.quad([t,.225,s],[n,.225,s],[n,.225,e],[t,.225,e],[0,1,0],[t/14,-s/14,n/14,-s/14,n/14,-e/14,t/14,-e/14],15267288)}tree(t,e,n=1,s=0,r=.2){this.trees.push({x:t,z:e,y:r,s:n*(.8+this.r()*.5),k:s,rot:this.r()*6.28})}building(t,e,n,s,r,a){let o=this.B,c=(this.r()*4|0)*.25;if(o.f[a].walls(t,.2,e,n,r,s,16,14,c),o.roof.top(t,e,n,s,r,6),o.flat.walls(t,r,e,n,r+.8,s,1,1,0,9276813),o.flat.walls(t-.3,3.4,e-.3,n+.3,3.8,s+.3,1,1,0,6122878),r>14&&this.r()>.3){let l=(n-t)*.3,h=(s-e)*.3,u=(t+n)/2+(this.r()-.5)*4,d=(e+s)/2;o.flat.box(u-l/2,r,d-h/2,u+l/2,r+3,d+h/2,1,10526880),o.metal.add(Ot.cyl(12),vt(u+l,r+2,d,0,0,0,2.4,3,2.4),13620182),o.flat.add(Ot.box(),vt(u-l*.3,r+6,d,0,0,0,.15,6,.15),7829367)}}house(t,e,n,s,r,a){let o=this.B;o.flat.walls(t,.2,e,n,r,s,1,1,0,a);let c=(t+n)/2;o.flat.quad([c-.6,.2,s+.02],[c+.6,.2,s+.02],[c+.6,2.4,s+.02],[c-.6,2.4,s+.02],[0,0,1],[0,0,1,0,1,1,0,1],5913122);for(let L of[t+1.6,n-2.8])o.flat.quad([L,1.2,s+.02],[L+1.2,1.2,s+.02],[L+1.2,2.4,s+.02],[L,2.4,s+.02],[0,0,1],[0,0,1,0,1,1,0,1],2899536),o.flat.quad([L+1.2,1.2,e-.02],[L,1.2,e-.02],[L,2.4,e-.02],[L+1.2,2.4,e-.02],[0,0,-1],[0,0,1,0,1,1,0,1],2899536);let l=2.2,h=.4,u=(e+s)/2,d=t-h,p=n+h,g=e-h,x=s+h,f=Math.hypot(l,u-g),m=(u-g)/f,v=l/f,_=(p-d)/3,M=f/3;o.tiles.quad([d,r,x],[p,r,x],[p,r+l,u],[d,r+l,u],[0,m,v],[0,0,_,0,_,M,0,M]),o.tiles.quad([p,r,g],[d,r,g],[d,r+l,u],[p,r+l,u],[0,m,-v],[0,0,_,0,_,M,0,M]),o.flat.quad([t,r,e],[t,r,s],[t,r+l,u],[t,r+l,u],[-1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.quad([n,r,s],[n,r,e],[n,r+l,u],[n,r+l,u],[1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.walls(t-2,.2,s+2,n+2,1.1,s+2.2,1,1,0,14275783)}tank(t,e,n,s,r=15263976){this.B.metal.add(Ot.cyl(20),vt(t,s/2,e,0,0,0,n*2,s,n*2),r,1),this.B.metal.add(Ot.cone(20),vt(t,s+n*.2,e,0,0,0,n*2.02,n*.4,n*2.02),r),this.B.flat.add(Ot.box(),vt(t+n+.1,s/2,e,0,0,0,.1,s,.7),8359053)}chimney(t,e,n,s,r=10129286){this.B.flat.add(Ot.cyl(14),vt(t,s/2,e,0,0,0,n*2,s,n*2),r),this.B.flat.add(Ot.cyl(14),vt(t,s-3,e,0,0,0,n*2.1,1.2,n*2.1),12597547),this.B.flat.add(Ot.cyl(14),vt(t,s-6,e,0,0,0,n*2.1,1.2,n*2.1),15790320)}containerStack(t,e,n,s,r,a){let o=[12597547,2388387,1999945,14059792,8207512,8622482,10502144,1145445];for(let c=0;c<s;c++)for(let l=0;l<r;l++){let h=1+(this.r()*a|0);for(let u=0;u<h;u++){let d=(c-(s-1)/2)*2.6,p=(l-(r-1)/2)*12.6,g=Math.cos(n),x=Math.sin(n);this.B.cont.add(Ot.box(),vt(t+d*g+p*x,1.3+u*2.6,e-d*x+p*g,0,n,0,2.44,2.59,12.2),o[this.r()*o.length|0])}}}crane(t,e,n,s){let r=this.B,a=15844367;r.flat.add(Ot.box(),vt(t,n/2,e,0,0,0,1.6,n,1.6),a);let o=Math.cos(s),c=Math.sin(s);r.flat.add(Ot.box(),vt(t+c*12,n+.8,e+o*12,0,s,0,1.2,1.2,44),a),r.flat.add(Ot.box(),vt(t-c*8,n-.6,e-o*8,0,s,0,2.2,2,4),8359053),r.flat.add(Ot.box(),vt(t,n+3,e,0,0,0,1,6,1),a),r.flat.add(Ot.box(),vt(t+c*1.5,n-1.2,e+o*1.5,0,s,0,2.4,2.4,2.4),3426654)}turbine(t,e,n=48,s=1,r=0){let a=this.B;if(a.flat.add(Ot.cyl(14),vt(t,r+n*s/2,e,0,0,0,2.2*s,n*s,2.2*s),16054007),a.flat.add(Ot.box(),vt(t,r+n*s+1,e-1,0,0,0,2.2*s,2.4*s,6*s),15396333),!this.rotorGeo){let c=new Lt,l=new gn(1.4,22,.4);l.translate(0,11,0);for(let h=0;h<3;h++)c.add(l,vt(0,0,0,0,0,h*Math.PI*2/3));c.add(Ot.sphere(),vt(0,0,0,0,0,0,2,2,2)),this.rotorGeo=c.geometry(),this.rotorMat=new cn({color:16316921})}let o=new Kt(this.rotorGeo,this.rotorMat);o.scale.setScalar(s),o.position.set(t,r+n*s+1,e+2.2*s),o.rotation.z=this.r()*6,this.scene.add(o),this.animated.push({obj:o,speed:.6+this.r()*.4})}buildBlock(t,e,n,s,r){let a=this.B,o=this.r;this.addCollider(e,n,s,r);let c=e+5,l=n+5,h=s-5,u=r-5,d=h-c;for(let[p,g]of[[e+1.5,n+1.5],[s-1.5,n+1.5],[e+1.5,r-1.5],[s-1.5,r-1.5]])this.lamps.push({x:p,z:g});if(a.concrete.walls(e,0,n,s,.22,r,4,4),a.concrete.top(e,n,s,r,.22,4),t==="downtown"){let g=d/2;for(let x=0;x<2;x++)for(let f=0;f<2;f++){let m=g*(.62+o()*.28),v=g*(.62+o()*.28),_=c+g*(x+.5),M=l+g*(f+.5);this.building(_-m/2,M-v/2,_+m/2,M+v/2,35+o()*95,o()>.5?0:3)}for(let x=0;x<8;x++)this.tree(e+2+x*(s-e-4)/7,n+2,.8)}else if(t==="residential"||t==="town"){this.grassPatch(e+4,n+4,s-4,r-4);let p=3,g=d/p;for(let x=0;x<p;x++)for(let f=0;f<p;f++){let m=c+g*(x+.5),v=l+g*(f+.5);if(x===1&&f===1){for(let _=0;_<4;_++)this.tree(m+(o()-.5)*20,v+(o()-.5)*20,1);continue}if(t==="town"||o()<.45){let _=10+o()*6,M=9+o()*4,L=[16115400,14674416,15978928,15262376,13231041,15780297,16777215];this.house(m-_/2,v-M/2,m+_/2,v+M/2,3.6+(o()>.7?3.2:0),L[o()*L.length|0]),this.tree(m+_/2+3,v+M/2+3,.9)}else{let _=g*(.6+o()*.3),M=g*(.6+o()*.3);this.building(m-_/2,v-M/2,m+_/2,v+M/2,8+o()*26,o()>.5?1:2)}}for(let x=0;x<7;x++){let f=e+6+x*(s-e-12)/6;this.tree(f,n+2,.75),this.tree(f,r-2,.75)}}else if(t==="park"){this.grassPatch(e+4,n+4,s-4,r-4);for(let p=0;p<46;p++)this.tree(c+o()*d,l+o()*d,1.1,o()>.7?1:0);a.sand.ground(c+d*.35,l+d*.35,c+d*.65,l+d*.65,.235,8)}else if(t==="industrial"){let p=10+o()*6,g=d/2,x=[16777215,14083312,15786704,14543064][o()*4|0];if(a.wh.walls(c+2,.2,l+2,h-2,p,l+g-4,6,6,0,x),a.roof.top(c+2,l+2,h-2,l+g-4,p,6),o()>.4)for(let f=0;f<3;f++)this.tank(c+18+f*26,u-22,9,14+o()*8);else a.wh.walls(c+4,.2,l+g+4,h-30,p*.8,u-4,6,6,0,x),a.roof.top(c+4,l+g+4,h-30,u-4,p*.8,6),this.chimney(h-14,u-16,2.5,38+o()*20)}else t==="port"&&(this.containerStack(c+28,(l+u)/2,0,8,3,4),this.containerStack(h-28,(l+u)/2,0,8,3,3),this.crane((c+h)/2,u-4,30,Math.PI/2))}buildDepot(t,e,n,s,r){let a=this.B,o=this.r;a.lot.ground(e,n,s,r,.03,12);let c=(e+s)/2,l=(n+r)/2,h,u,d,p,g=34,x=14;if(t.side==="n"?(h={x:c,z:n+22,w:g,d:x},u=[e+10,r-50,s-10,r-6],d={x:c,z:n-ae},p="n"):t.side==="s"?(h={x:c,z:r-22,w:g,d:x},u=[e+10,n+6,s-10,n+50],d={x:c,z:r+ae},p="s"):t.side==="w"?(h={x:e+22,z:l,w:x,d:g},u=[s-50,n+10,s-6,r-10],d={x:e-ae,z:l},p="w"):(h={x:s-22,z:l,w:x,d:g},u=[e+6,n+10,e+50,r-10],d={x:s+ae,z:l},p="e"),t.lot){let P=this.hwIdx.nearest(d.x,d.z,{});P&&(d={x:P.x,z:P.z,hw:P.o.id,s:P.o.s[P.i]+(P.o.s[P.i+1]-P.o.s[P.i])*P.t});let B=(b,S,D,U)=>{let w=Math.hypot(D-b,U-S);a.flat.add(Ot.box(),vt((b+D)/2,.9,(S+U)/2,0,Math.atan2(D-b,U-S),0,.08,1.8,w),7305856)};p!=="n"&&B(e,n,s,n),p!=="s"&&B(e,r,s,r),p!=="w"&&B(e,n,e,r),p!=="e"&&B(s,n,s,r)}this.depots[t.id]=xi(un({},t),{zone:h,entry:d,lot:[e,n,s,r]});let[f,m,v,_]=u,M=(f+v)/2,L=(m+_)/2,E=t.kind,T=(P,B=16777215,b=-1)=>{b>=0?a.f[b].walls(f,.03,m,v,P,_,16,14,0):a.wh.walls(f,.03,m,v,P,_,6,6,0,B),a.roof.top(f,m,v,_,P,6),a.flat.walls(f,P,m,v,P+.6,_,1,1,0,t.color),this.addCollider(f,m,v,_);let S=2962486;for(let D=0;D<4;D++){let U=(D+.5)/4,w=4,H=Math.min(5,P-1);if(p==="n"){let R=f+(v-f)*U;a.flat.quad([R+w/2,.03,m-.05],[R-w/2,.03,m-.05],[R-w/2,H,m-.05],[R+w/2,H,m-.05],[0,0,-1],[0,0,1,0,1,1,0,1],S)}if(p==="s"){let R=f+(v-f)*U;a.flat.quad([R-w/2,.03,_+.05],[R+w/2,.03,_+.05],[R+w/2,H,_+.05],[R-w/2,H,_+.05],[0,0,1],[0,0,1,0,1,1,0,1],S)}if(p==="w"){let R=m+(_-m)*U;a.flat.quad([f-.05,.03,R-w/2],[f-.05,.03,R+w/2],[f-.05,H,R+w/2],[f-.05,H,R-w/2],[-1,0,0],[0,0,1,0,1,1,0,1],S)}if(p==="e"){let R=m+(_-m)*U;a.flat.quad([v+.05,.03,R+w/2],[v+.05,.03,R-w/2],[v+.05,H,R-w/2],[v+.05,H,R+w/2],[1,0,0],[0,0,1,0,1,1,0,1],S)}}this.signFor(t,p,u,P)};if(E==="port")this.containerStack(M-25,L,Math.PI/2,4,3,4),this.containerStack(M+25,L,Math.PI/2,4,3,3),this.addCollider(f,m,v,_),this.crane(M,L,34,0),this.signFor(t,p,u,4,!0);else if(E==="refinery"){for(let P=0;P<2;P++)for(let B=0;B<3;B++)this.tank(f+12+P*22,m+15+B*32,9,12+o()*6);this.chimney(v-8,m+12,1.6,42,12436423),this.addCollider(f,m,v,_),this.signFor(t,p,u,4,!0)}else if(E==="farm")a.flat.walls(f+5,.03,m+6,v-30,9,_-6,1,1,0,11088422),a.tiles.top(f+4,m+5,v-29,_-5,9,4),this.tank(v-14,L-10,5,18,14014684),this.tank(v-14,L+10,5,18,14014684),this.addCollider(f,m,v,_),this.signFor(t,p,u,4,!0);else if(E==="silo"){for(let P=0;P<2;P++)for(let B=0;B<3;B++)this.tank(f+12+P*20,m+18+B*32,7,26,13620182);this.addCollider(f,m,v,_),this.signFor(t,p,u,4,!0)}else if(E==="wind"){for(let P=0;P<3;P++)this.turbine(f+10+P*40,L,55,1);this.addCollider(f,m,v,_),this.signFor(t,p,u,4,!0)}else if(E==="construction"){for(let P=0;P<4;P++)for(let B=0;B<3;B++)for(let b=0;b<5;b++)a.flat.add(Ot.box(),vt(f+6+P*10,b*4+2,m+10+B*14,0,0,0,.8,4,.8),10923183);for(let P=1;P<=5;P++)a.flat.add(Ot.box(),vt(f+21,P*4,m+24,0,0,0,32,.4,30),11777719);this.crane(v-8,_-10,40,Math.PI/2),this.addCollider(f,m,v,_),this.signFor(t,p,u,4,!0)}else if(E==="fuel"){T(5,16777215);let P=h;a.flat.add(Ot.box(),vt(P.x,7,P.z,0,0,0,P.w+6,.8,P.d+6),13639712);for(let[B,b]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let S=P.x+B*(P.w/2+4),D=P.z+b*(P.d/2+4);a.flat.add(Ot.box(),vt(S,3.5,D,0,0,0,.6,7,.6),15528177),this.addCollider(S-.4,D-.4,S+.4,D+.4)}}else if(E==="steel")T(18,13220008),this.chimney(f+8,m+8,2.6,55),this.chimney(v-8,_-8,2.6,50);else if(E==="sawmill"){let B=(f+v)/2;a.wh.walls(f,.03,m,B,8,_,6,6,0,13148794),a.roof.top(f,m,B,_,8,6),this.addCollider(f,m,v,_);for(let b=0;b<3;b++)for(let S=0;S<7;S++){let D=m+14+b*30,U=B+4+S%4*2.2+(S>=4?1.1:0),w=S>=4?2.8:.9;a.flat.add(Ot.cyl(10),vt(U,w,D,Math.PI/2,0,0,1.8,14,1.8),9329458)}this.signFor(t,p,u,4,!0)}else if(E==="quarry"){T(9,13682878);for(let P=0;P<2;P++)a.flat.add(Ot.cone(16),vt(f+25+P*50,5,L,0,0,0,18,10,18),10261124)}else E==="hospital"?T(22,16777215,2):E==="market"?T(10,16777215,1):T(E==="garage"?9:12,E==="garage"?14083319:16777215);this.lamps.push({x:e+2,z:n+2},{x:s-2,z:r-2})}signFor(t,e,n,s,r=!1){let[a,o,c,l]=n,h=26,u=26*(192/1024),d=new Kt(new We(h,u),new ce({map:At.sign(t.name.toUpperCase(),"#"+new gt(t.color).multiplyScalar(.75).getHexString(),"#ffffff"),side:de})),p=r?8:s+u/2+.8;if(e==="n"&&(d.position.set((a+c)/2,p,o-(r?4:.3)),d.rotation.y=Math.PI),e==="s"&&d.position.set((a+c)/2,p,l+(r?4:.3)),e==="w"&&(d.position.set(a-(r?4:.3),p,(o+l)/2),d.rotation.y=-Math.PI/2),e==="e"&&(d.position.set(c+(r?4:.3),p,(o+l)/2),d.rotation.y=Math.PI/2),d.matrixAutoUpdate=!1,d.updateMatrix(),this.scene.add(d),r){let g=d.position,x=Math.cos(d.rotation.y),f=Math.sin(d.rotation.y);for(let m of[-1,1])this.B.flat.add(Ot.box(),vt(g.x+x*m*10,3,g.z-f*m*10,0,d.rotation.y,0,.5,6,.5),5592405)}}roadSign(t,e,n,s,r,a="#0f6b3a",o=0){let h=new Kt(new We(9,3.6),new ce({map:At.roadSign(s,r,a),side:de}));h.position.set(t,o+5.2,e),h.rotation.y=n,h.matrixAutoUpdate=!1,h.updateMatrix(),this.scene.add(h);let u=Math.cos(n),d=Math.sin(n);for(let p of[-1,1])this.B.metal.add(Ot.cyl(8),vt(t+u*p*3.6,o+3.4,e-d*p*3.6,0,0,0,.25,6.8,.25),11581115)}buildHighway(t){let e=this.B,n=t.n,s=9;for(let u=0;u<n-1;u++){let d=u,p=u+1,g=[-t.dz[d],t.dx[d]],x=[-t.dz[p],t.dx[p]],f=t.y[d]+.04,m=t.y[p]+.04,v=t.s[d]/18,_=t.s[p]/18,M=(E,T,P,B)=>[t.x[E]+T[0]*P,B,t.z[E]+T[1]*P];e.hwy.quad(M(d,g,-s,f),M(d,g,s,f),M(p,x,s,m),M(p,x,-s,m),[0,1,0],[0,v,1,v,1,_,0,_]);let L=t.bridge[d]||t.bridge[p];for(let E of[-1,1]){let T=M(d,g,E*s,f-.04),P=M(p,x,E*s,m-.04);if(L)e.bridge.quad([T[0],f-1.6,T[2]],[P[0],m-1.6,P[2]],[P[0],m+1,P[2]],[T[0],f+1,T[2]],[g[0]*E,0,g[1]*E],[t.s[d]/4,0,t.s[p]/4,0,t.s[p]/4,.6,t.s[d]/4,.6]);else if(f>.25||m>.25){let B=2+f*1.9,b=2+m*1.9,S=M(d,g,E*(s+B),-.02),D=M(p,x,E*(s+b),-.02),U=H=>[H[0]/14,-H[2]/14],w=[g[0]*E*.45,.89,g[1]*E*.45];E>0?e.grass.quad(T,S,D,P,w,[...U(T),...U(S),...U(D),...U(P)],13162664):e.grass.quad(T,P,D,S,w,[...U(T),...U(P),...U(D),...U(S)],13162664)}}if(L&&(e.bridge.quad(M(d,g,s,f-1.6),M(d,g,-s,f-1.6),M(p,x,-s,m-1.6),M(p,x,s,m-1.6),[0,-1,0],[0,0,1,0,1,1,0,1]),u%7===0)){for(let E of[-1,1]){let T=M(d,g,E*5,0),P=t.y[d]-1.6;e.bridge.add(Ot.cyl(12),vt(T[0],(P-2)/2,T[2],0,0,0,1.6,P+2,1.6))}e.bridge.add(Ot.box(),vt(t.x[d],t.y[d]-2,t.z[d],0,Math.atan2(t.dx[d],t.dz[d]),0,13,.8,1.6))}if(!L&&t.y[d]>1.6&&this.rails.push({h:t,i:d}),u%12===0)for(let E of[-1,1])this.posts.push({x:t.x[d]+g[0]*E*(s+.7),y:t.y[d],z:t.z[d]+g[1]*E*(s+.7),rot:Math.atan2(t.dx[d],t.dz[d])})}let r=u=>u?Sa[u[0]].name:"Serraria \u2022 Pedreira",a=(t.length/1e3).toFixed(1).replace(".",","),o=(u,d,p)=>{let g=[-t.dz[u],t.dx[u]],x=t.x[u]+g[0]*d*(s+3),f=t.z[u]+g[1]*d*(s+3);this.roadSign(x,f,Math.atan2(t.dx[u],t.dz[u])+(d>0?Math.PI:0),p,`${t.id} \u2022 ${a} km`,"#0f6b3a",t.y[u])};o(Math.min(t.n-1,16),1,r(t.def.to)),t.def.to&&o(Math.max(0,t.n-17),-1,r(t.def.from));let c=t.n/2|0,l=[-t.dz[c],t.dx[c]],h=new Kt(new aa(.9,24),new ce({map:At.speedSign(80),side:de}));h.position.set(t.x[c]+l[0]*(s+2),t.y[c]+2.6,t.z[c]+l[1]*(s+2)),h.rotation.y=Math.atan2(t.dx[c],t.dz[c])+Math.PI,this.scene.add(h),e.metal.add(Ot.cyl(6),vt(h.position.x,t.y[c]+1,h.position.z,0,0,0,.12,2.6,.12),11581115)}buildRails(){let t=new Lt;for(let{h:s,i:r}of this.rails){let a=Math.min(s.n-1,r+1);for(let o of[-1,1]){let c=9+.3,l=s.x[r]-s.dz[r]*o*c,h=s.z[r]+s.dx[r]*o*c,u=s.x[a]-s.dz[a]*o*c,d=s.z[a]+s.dx[a]*o*c,p=s.y[r],g=s.y[a];t.quad([l,p+.45,h],[u,g+.45,d],[u,g+.8,d],[l,p+.8,h],[-s.dz[r]*o,0,s.dx[r]*o],[0,0,1,0,1,1,0,1])}}this.rails.length&&this.scene.add(t.mesh(new wn({map:At.metal(),side:de,shininess:60})));let e=new gn(.15,1.1,.15);e.translate(0,.55,0);let n=new Zn(e,new cn({color:15921906}),this.posts.length);this.posts.forEach((s,r)=>n.setMatrixAt(r,vt(s.x,s.y,s.z,0,s.rot,0))),n.computeBoundingSphere(),this.scene.add(n)}buildRiverAndSea(){let t=this.river,e=new Lt,n=di/2,s=o=>{let c=Math.max(0,o-1),l=Math.min(t.n-1,o+1),h=t.x[l]-t.x[c],u=t.z[l]-t.z[c],d=Math.hypot(h,u)||1;return[-u/d,h/d]};for(let o=0;o<t.n-1;o++){let c=s(o),l=s(o+1),h=(x,f,m,v)=>[t.x[x]+f[0]*m,v,t.z[x]+f[1]*m],u=h(o,c,-n,.06),d=h(o,c,n,.06),p=h(o+1,l,n,.06),g=h(o+1,l,-n,.06);e.quad(u,d,p,g,[0,1,0],[u[0]/30,u[2]/30,d[0]/30,d[2]/30,p[0]/30,p[2]/30,g[0]/30,g[2]/30]);for(let x of[-1,1]){let f=h(o,c,x*n,.045),m=h(o,c,x*(n+11),0),v=h(o+1,l,x*n,.045),_=h(o+1,l,x*(n+11),0);this.B.sand.quad(f,m,_,v,[0,1,0],[0,0,1,0,1,1,0,1])}if(o%3===0)for(let x of[-1,1]){let f=h(o,c,x*(n+16+this.r()*10),0);this.tree(f[0],f[2],1.2,0,-.1)}}this.M.sand.side=de;let r=new wn({map:At.water().clone(),color:10274518,shininess:110,specular:10075101,transparent:!0,opacity:.94,side:de});r.map.needsUpdate=!0,this.riverMesh=e.mesh(r),this.scene.add(this.riverMesh),this.B.sand.ground(-6e3,1745,6e3,1800,.02,10);let a=new Kt(new We(12e3,4e3),new wn({map:At.water().clone(),shininess:90,specular:8956620,transparent:!0,opacity:.95}));a.material.map.needsUpdate=!0,a.material.map.repeat.set(400,130),a.rotation.x=-Math.PI/2,a.position.set(0,.07,3790),this.water=a,this.scene.add(a)}buildHills(){if(!this.hills.length)return;let t=new Jn(1,22,9,0,Math.PI*2,0,Math.PI/2),e=t.attributes.uv;for(let r=0;r<e.count;r++)e.setXY(r,e.getX(r)*40,e.getY(r)*10);let n=[];for(let r=0;r<e.count;r++)n.push(.72,.8,.64);t.setAttribute("color",new Vt(n,3));let s=new Zn(t,this.M.grass,this.hills.length);this.hills.forEach((r,a)=>s.setMatrixAt(a,vt(r.x,-4,r.z,0,0,0,r.r,r.h,r.r))),s.computeBoundingSphere(),s.receiveShadow=!0,this.scene.add(s);for(let r of this.hills)r.x>300&&r.z<900&&this.r()>.4&&this.turbine(r.x,r.z,50,1,r.h-6)}scatterForest(){let t=this.r,e=this.q.trees,n=0,s=0;for(;s<e&&n++<e*8;){let a=we.x0+t()*(we.x1-we.x0),o=we.z0+t()*(we.z1-we.z0),c=Pa(a/520,o/520)*.8+(a<-300&&o<600?.55:-.15);if(t()>c||!this.isFree(a,o,2))continue;let l=a<-1500||Pa(a/300+9,o/300)>.62;this.tree(a,o,1.3+t()*.8,l?1:0,this.terrainH(a,o)-.2),s++}for(let a of this.fields)for(let o=0;o<5;o++)this.tree(a.x0+t()*(a.x1-a.x0),a.z0-5,1.1,0,0);let r=this.q.trees/7e3;for(let a of this.hws)if(a.id!=="SP-280")for(let o=0;o<a.n;o+=2){let c=Math.round(3*r+t());for(let l=0;l<c;l++){let h=t()<.5?-1:1,u=18+a.y[o]*1.9+Math.pow(t(),1.6)*70,d=a.x[o]-a.dz[o]*h*u+(t()-.5)*6,p=a.z[o]+a.dx[o]*h*u+(t()-.5)*6;if(!this.isFree(d,p,0))continue;let g=a.id==="RS-030"?t()<.7:t()<.3;this.tree(d,p,1.5+t()*1.1,g?1:0,this.terrainH(d,p)-.2)}}}buildTrees(){let t=a=>{let o=new Lt(!0),c=new Sn(.2,.32,3.2,6);if(c.translate(0,1.6,0),o.add(c,vt(0,0,0),7031859),a===0){let l=new ca(1,0);o.add(l,vt(0,4.6,0,0,0,0,2.6,2.3,2.6),6265402),o.add(l,vt(1.1,3.9,.5,.5,.3,0,1.7,1.5,1.7),7646021),o.add(l,vt(-.9,4.1,-.6,.2,1,0,1.8,1.6,1.8),5474867)}else{let l=new Ui(1,1,7);o.add(l,vt(0,4,0,0,0,0,2.4,3.4,2.4),3963450),o.add(l,vt(0,5.9,0,0,.4,0,1.8,3,1.8),4424770),o.add(l,vt(0,7.6,0,0,.8,0,1.1,2.4,1.1),4886088)}return o.geometry()},e=[t(0),t(1)],n=700,s=new Map;for(let a of this.trees){let o=Math.floor(a.x/n)*1e3+Math.floor(a.z/n)+":"+a.k;s.has(o)||s.set(o,[]),s.get(o).push(a)}let r=new gt;for(let[a,o]of s){let c=+a.split(":")[1],l=new Zn(e[c],this.M.leaf,o.length);o.forEach((h,u)=>{l.setMatrixAt(u,vt(h.x,h.y,h.z,0,h.rot,0,h.s,h.s*(.9+u%5*.06),h.s)),r.setHSL(.15+u*37%10/150,.3,.8+u*13%10/45),l.setColorAt(u,r)}),l.computeBoundingSphere(),l.castShadow=!0,this.scene.add(l)}}buildLamps(){let t=this.lamps.length,e=new Sn(.12,.16,8,6);e.translate(0,4,0);let n=new gn(.15,.15,2.2);n.translate(0,8,1);let s=new gn(.5,.2,.9);s.translate(0,7.9,2);let r=new Zn(e,new cn({color:6122878}),t),a=new Zn(n,new cn({color:6122878}),t),o=new Zn(s,new ce({color:16642768}),t),c=new We(16,16);c.rotateX(-Math.PI/2),c.translate(0,.12,3.5);let l=new Zn(c,new ce({map:At.glow(),color:16757596,transparent:!0,opacity:0,depthWrite:!1,blending:bn}),t);this.lamps.forEach((h,u)=>{let d=this.areas.find(x=>x.city&&h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1),p=0;if(d){let x=d.city,f=Math.round((h.x-x.x0)/140)*140+x.x0,m=Math.round((h.z-x.z0)/140)*140+x.z0;p=Math.abs(h.x-f)<Math.abs(h.z-m)?f>h.x?Math.PI/2:-Math.PI/2:m>h.z?0:Math.PI}let g=vt(h.x,0,h.z,0,p,0);r.setMatrixAt(u,g),a.setMatrixAt(u,g),o.setMatrixAt(u,g),l.setMatrixAt(u,g)}),this.lampHeads=o,this.lampPools=l,l.visible=!1;for(let h of[r,a,o,l])h.computeBoundingSphere(),this.scene.add(h)}setNight(t){for(let e of this.M.f)e.emissiveIntensity=Math.max(0,t*1.1-.1);this.lampPools.visible=t>.05,this.lampPools.material.opacity=t*.9,this.lampHeads.material.color.setRGB(.75+t*.25,.72+t*.2,.65+t*.1)}update(t,e){for(let n of this.animated)n.obj.rotation.z+=n.speed*t;this.water&&this.water.material.map.offset.set(e*.004,e*.006),this.riverMesh&&this.riverMesh.material.map.offset.set(e*.02,e*.01)}};var Gr=new N;function Ln(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Gr.copy(t),Gr[n]=0,Gr.normalize();let l=.5*a/(a+o),h=1-Gr.angleTo(i)/c;return Math.sign(Gr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Qs=class extends gn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new N,c=new N,l=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new N,x=.5/s;for(let f=0,m=0;f<h.length;f+=3,m+=2)switch(o.fromArray(h,f),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[f+0]=l.x*Math.sign(o.x)+c.x*r,h[f+1]=l.y*Math.sign(o.y)+c.y*r,h[f+2]=l.z*Math.sign(o.z)+c.z*r,u[f+0]=c.x,u[f+1]=c.y,u[f+2]=c.z,Math.floor(f/p)){case 0:g.set(1,0,0),d[m+0]=Ln(g,c,"z","y",r,n),d[m+1]=1-Ln(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[m+0]=1-Ln(g,c,"z","y",r,n),d[m+1]=1-Ln(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[m+0]=1-Ln(g,c,"x","z",r,t),d[m+1]=Ln(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-Ln(g,c,"x","z",r,t),d[m+1]=1-Ln(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-Ln(g,c,"x","y",r,t),d[m+1]=1-Ln(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[m+0]=Ln(g,c,"x","y",r,t),d[m+1]=1-Ln(g,c,"y","x",r,e);break}}};var Da="medium";function Ud(i){Da=i}var ls=null;function Na(){if(ls)return ls;let i=Da!=="low",t=e=>{var n;return i?new is(e):new wn({color:e.color,map:e.map,vertexColors:e.vertexColors,side:e.side,transparent:e.transparent,opacity:(n=e.opacity)!=null?n:1,shininess:e.roughness<.3?120:20,specular:e.metalness>.5?16777215:3355443})};return ls={chrome:t({color:15922422,metalness:1,roughness:.14,map:At.metal()}),alu:t({color:13225425,metalness:.9,roughness:.3}),dark:t({color:2040616,metalness:.1,roughness:.75,side:de}),steel:t({color:3883336,metalness:.5,roughness:.5}),glass:t({color:989732,metalness:.4,roughness:.03,transparent:!0,opacity:.62,side:de}),interior:t({color:2764081,metalness:0,roughness:.9}),lamp:i?new is({map:At.headlamp(),emissiveMap:At.headlamp(),emissive:16777215,emissiveIntensity:.15,metalness:.6,roughness:.15,side:de}):new ce({map:At.headlamp(),side:de}),tail:new ce({map:At.taillamp(),side:de}),blink:new es({map:At.glow(),color:16753178,transparent:!0,depthWrite:!1,blending:bn}),rubber:t({color:16777215,map:At.tire(),metalness:0,roughness:.92}),rim:t({color:15264492,metalness:.85,roughness:.25}),light:new ce({color:16775393}),red:new ce({color:14037041}),amber:new ce({color:16753178}),grill:t({color:16777215,map:At.grill(),metalness:.7,roughness:.3}),flat:t({vertexColors:!0,metalness:.15,roughness:.55}),flatChrome:t({vertexColors:!0,metalness:.9,roughness:.2}),panel:t({color:16777215,map:At.panel(),metalness:.2,roughness:.5}),blob:new ce({map:At.blob(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),glow:new es({map:At.glow(),color:16774102,transparent:!0,depthWrite:!1,blending:bn}),glowRed:new es({map:At.glow(),color:16722458,transparent:!0,depthWrite:!1,blending:bn}),beam:new ce({map:At.beam(),transparent:!0,depthWrite:!1,blending:bn,polygonOffset:!0,polygonOffsetFactor:-3})},ls}function j_(i){return Da==="high"?new ua({color:i,map:At.paint(),metalness:.35,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):Da==="medium"?new is({color:i,map:At.paint(),metalness:.35,roughness:.33}):new wn({color:i,map:At.paint(),shininess:90,specular:8947848})}var Vc={};function Nd(i,t){let e=i+"_"+t;if(Vc[e])return Vc[e];let n=[[i*.6,-t/2],[i*.9,-t/2],[i*.985,-t*.4],[i,-t*.25],[i,t*.25],[i*.985,t*.4],[i*.9,t/2],[i*.6,t/2]].map(([l,h])=>new at(l,h)),s=new Ur(n,22),r=[[.001,t*.36],[i*.18,t*.38],[i*.24,t*.3],[i*.5,t*.26],[i*.6,t*.34],[i*.6,-t*.3]].map(([l,h])=>new at(l,h)),a=new Ur(r,22),o=new Sn(.03,.03,.06,6),c=new Lt;c.add(a,vt(0,0,0));for(let l=0;l<10;l++){let h=l/10*Math.PI*2;c.add(o,vt(Math.cos(h)*i*.32,t*.36,Math.sin(h)*i*.32))}return Vc[e]={tire:s,rim:c.geometry()}}function zd(i){let t=new Lt,e=[];for(let[s,r]of i){let a=t.idx.length;for(let[o,c]of s)t.add(o,c);e.push([a,t.idx.length-a,r])}let n=t.geometry();for(let[s,r,a]of e)r&&n.addGroup(s,r,a);return n}function Fd(i,t,e,n,s){let{tire:r,rim:a}=Nd(e,n),o=[],c=[];for(let u of[-1,1]){let d=u>0?-Math.PI/2:Math.PI/2;s?(o.push([r,vt(u*(t/2+n*.52),0,0,0,0,d)]),o.push([r,vt(u*(t/2-n*.52),0,0,0,0,d)]),c.push([a,vt(u*(t/2+n*.52),0,0,0,0,d)])):(o.push([r,vt(u*t/2,0,0,0,0,d)]),c.push([a,vt(u*t/2,0,0,0,0,d)]))}let l=Na(),h=new Kt(zd([[o,0],[c,1]]),[l.rubber,l.rim]);return h.position.set(0,e,i),h.castShadow=!0,h}function Ia(i,t,e,n,s){let{tire:r,rim:a}=Nd(e,n),o=s>0?-Math.PI/2:Math.PI/2,c=Na(),l=new Kt(zd([[[[r,vt(0,0,0,0,0,o)]],0],[[[a,vt(0,0,0,0,0,o)]],1]]),[c.rubber,c.rim]);l.castShadow=!0;let h=new ln;return h.position.set(t,e,i),h.add(l),h}function Od(i,t){for(let[e,n]of i){let s=e.mesh(n,{cast:!0});s&&t.add(s)}}var Id={};function Q_(i,t,e,n){let s=[i,t,e,n].join("_");return Id[s]||(Id[s]=new Qs(i,t,e,2,n))}var tv=new Sn(1,1,1,14,1,!0,0,Math.PI);function Oi(i,t,e=.06,n=3){let s=new Ni;i(s);let r=Math.max(.01,t-2*e),a=new la(s,{depth:r,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:n,curveSegments:10});a.rotateY(-Math.PI/2),a.translate(r/2,0,0),a.computeBoundingBox();let o=a.boundingBox,c=a.attributes.position,l=a.attributes.uv;for(let h=0;h<c.count;h++)l.setXY(h,(c.getZ(h)-o.min.z)/(o.max.z-o.min.z||1),(c.getY(h)-o.min.y)/(o.max.y-o.min.y||1));return a}function tr(i,t,e,n=[0,0,1,0,1,1,0,1]){for(let s of[-1,1]){let r=t.map(([a,o])=>[s*e,o,a]);i.quad(r[0],r[1],r[2],r[3],[s,0,0],s>0?n:[n[2],n[3],n[0],n[1],n[6],n[7],n[4],n[5]])}}function Dd(i,t,e,n,s,r,a,o=0){let c=n-t,l=s-e,h=Math.hypot(c,l),u=l/h,d=-c/h,p=[t+u*a,e+d*a],g=[n+u*a,s+d*a];i.quad([o-r/2,p[1],p[0]],[o+r/2,p[1],p[0]],[o+r/2,g[1],g[0]],[o-r/2,g[1],g[0]],[0,d,u],[0,0,1,0,1,1,0,1])}function ev(i){let t=Na(),e=new ln;e.rotation.order="YXZ";let n=new ln;e.add(n);let s=new Lt,r=new Lt,a=new Lt,o=new Lt,c=new Lt,l=new Lt,h=new Lt,u=new Lt,d=new Lt,p=new Lt,g=new Lt,x=new Lt,f=new Lt,m=new Lt,v=(F,it,lt,_t,C,y,V,z=0,et=0,rt=0)=>F.add(Ot.box(),vt(C,y,V,z,et,rt,it,lt,_t)),_=(F,it,lt,_t,C,y,V,z=.1,et=0)=>F.add(Q_(it,lt,_t,z),vt(C,y,V,et,0,0)),M=(F,it,lt,_t,C,y,V=0,z=0,et=0,rt=14)=>F.add(Ot.cyl(rt),vt(_t,C,y,V,z,et,it*2,lt,it*2)),L=(F,it,lt=0)=>F.add(it,vt(lt,0,0)),E=i.rigid,T=i.id==="urbano",P=i.cab==="conventional",B=i.roof==="high",b=i.roof==="mid",S=T?.42:.53,D=T?3.3:E?4.3:P?i.axles>=4?5.9:5.6:i.axles>=4?4.6:3.9,U=T?2.15:2.5,w=T?.95:1.15,H=T?.86:1,R=F=>w+F*H,$=D+(T?1.25:P?1.6:1.4),Y=E?-(T?1.4:2):-1.45,k=U/2,W,st;for(let F of[-1,1])v(d,.12,.3,$-Y-.4,F*.45,w-.28,($+Y)/2-.15);for(let F=Y+.4;F<D;F+=1.1)v(d,.9,.14,.12,0,w-.28,F);if(P){let F=$,it=2.05,lt=F-it,_t=U*.64;W=lt;let C=B?1.9:1.2;st=W-1.8-C,L(s,Oi(z=>{z.moveTo(lt,w-.15),z.lineTo(F-.1,w-.15),z.lineTo(F,w-.05),z.lineTo(F,R(1)),z.quadraticCurveTo(F,R(1.18),F-.28,R(1.21)),z.lineTo(lt,R(1.36)),z.lineTo(lt,w-.15)},_t,.12)),_(r,_t*.9,1.12*H,.12,0,R(.48),F+.15,.04),v(u,_t*.76,1*H,.03,0,R(.48),F+.22),v(r,.08,.12,.28,0,R(1.27),F-.15);let y=S+.14;for(let z of[-1,1]){L(s,Oi(et=>{et.moveTo(D+y*Math.cos(-.35),S+y*Math.sin(-.35)),et.absarc(D,S,y,-.35,Math.PI,!1),et.lineTo(D-y-.55,S+.02),et.lineTo(D-y-.55,S-.06),et.lineTo(D-y+.08,S-.06),et.absarc(D,S,y-.08,Math.PI,-.35,!0)},.62,.03,2),z*(k-.31)),g.quad([z*(k-.31)-.24,S+.32,D+y+.02],[z*(k-.31)+.24,S+.32,D+y+.02],[z*(k-.31)+.24,S+.56,D+y-.03],[z*(k-.31)-.24,S+.56,D+y-.03],[0,.2,1],[0,0,1,0,1,1,0,1]),M(r,.2,1.1,z*(k+.02),R(.95),W+.15),M(r,.06,.55,z*(k+.02),R(1.7),W+.15);for(let et of[0,1])v(d,.42,.05,.6,z*(k-.2),.48+et*.36,W-.55);v(a,.06,.95,.65,z*(k-.01),.72,W-.55)}L(r,Oi(z=>{z.moveTo(F-.05,w-.62),z.lineTo(F+.3,w-.62),z.quadraticCurveTo(F+.38,w-.6,F+.38,w-.42),z.lineTo(F+.34,w-.14),z.lineTo(F-.05,w-.14)},U+.1,.05)),L(s,Oi(z=>{z.moveTo(W-1.8,w),z.lineTo(W-.05,w),z.lineTo(W,R(.3)),z.lineTo(W,R(1.36)),z.lineTo(W-.3,R(2.1)),z.quadraticCurveTo(W-.4,R(2.24),W-.62,R(2.25)),z.lineTo(W-1.65,R(2.25)),z.quadraticCurveTo(W-1.8,R(2.25),W-1.8,R(2.1)),z.lineTo(W-1.8,w)},U,.07));let V=R(B?3.05:2.4);L(s,Oi(z=>{z.moveTo(st,w),z.lineTo(W-1.76,w),z.lineTo(W-1.76,R(2.2)),z.quadraticCurveTo(W-1.95,V,W-2.6,V),z.lineTo(st+.15,V),z.quadraticCurveTo(st,V,st,V-.15),z.lineTo(st,w)},U-.04,.07));for(let z of[-1,1])Dd(o,W,R(1.38),W-.3,R(2.08),U/2-.24,.075,z*(U/4-.04));for(let z of[-.6,.6])v(a,.6,.03,.03,z,R(1.42),W+.06,0,0,.2);_(s,U-.1,.12,.45,0,R(2.2),W+.08,.04,-.25);for(let z=-2;z<=2;z++)v(h,.13,.06,.08,z*.34,R(2.3),W-.1);for(let z of[-1,1]){let et=z*(k+.072);v(a,.02,R(2)-R(.15),.025,et,(R(2)+R(.15))/2,W-1.2),v(a,.02,.025,1.1,et,R(.15),W-.65),v(r,.04,.05,.2,z*(k+.09),R(1.1),W-1.05),v(r,.4,.04,.04,z*(k+.22),R(2),W-.25,0,z*-.3,0),v(r,.04,.55,.04,z*(k+.42),R(1.75),W-.12),_(r,.15,.7,.3,z*(k+.48),R(1.6),W-.1,.05),v(o,.02,.6,.22,z*(k+.4),R(1.6),W-.1),M(r,.11,3,z*(k-.12),R(2.4),st-.22),M(r,.15,1,z*(k-.12),R(1.6),st-.22)}tr(o,[[W-.07,R(1.44)],[W-1.12,R(1.44)],[W-1.12,R(2.06)],[W-.32,R(2.06)]],k+.075),tr(o,[[W-2.3,R(1.4)],[W-2.7,R(1.4)],[W-2.7,R(1.75)],[W-2.3,R(1.75)]],k+.055),tr(f,[[W-.05,R(.3)],[st+.1,R(.3)],[st+.1,R(1.15)],[W-.05,R(1.15)]],k+.08),v(m,U-.3,.3,.5,0,R(1.25),W-.35),m.add(new Xs(.22,.025,6,18),vt(.55,R(1.42),W-.65,.6,0,0));for(let z of[-1,1])v(m,.55,.15,.55,z*.55,R(.7),W-1.1),v(m,.55,.8,.12,z*.55,R(1.1),W-1.4,-.15)}else{let F=$,it=T?1.75:E?1.95:2.3,lt=F-it;W=F,st=lt;let _t=R(B?3:b?2.55:2.14);L(s,Oi(y=>{y.moveTo(lt,w),y.lineTo(F-.18,w),y.quadraticCurveTo(F-.02,w,F-.02,R(.2)),y.lineTo(F-.06,R(1)),y.lineTo(F-.12,R(1.08)),y.lineTo(F-.4,R(2)),y.quadraticCurveTo(F-.47,R(2.14),F-.7,R(2.15)),(B||b)&&(y.quadraticCurveTo(F-.95,R(2.17),F-1.05,R(B?2.55:2.35)),y.quadraticCurveTo(F-1.15,_t,F-1.5,_t)),y.lineTo(lt+.16,_t),y.quadraticCurveTo(lt,_t,lt,_t-.16),y.lineTo(lt,w)},U,.07)),Dd(o,F-.12,R(1.1),F-.4,R(1.98),U-.34,.075);for(let y of[-.45,.35])v(a,.7,.03,.03,y,R(1.15),F-.04,0,0,.25);L(s,Oi(y=>{y.moveTo(F-.42,R(2.06)),y.lineTo(F+.04,R(2)),y.lineTo(F+.04,R(1.95)),y.lineTo(F-.42,R(2))},U-.12,.015,1));for(let y=-2;y<=2;y++)v(h,.13,.06,.08,y*.34,R(2.06),F-.12);v(u,U*.68,.55*H,.03,0,R(.62),F+.03,-.05);for(let y of[.42,.62,.82])v(r,U*.7,.035,.035,0,R(y),F+.05);v(r,.24,.24,.04,0,R(.98),F+.02,0,0,Math.PI/4),L(a,Oi(y=>{y.moveTo(F-.35,w-.55),y.lineTo(F+.05,w-.55),y.quadraticCurveTo(F+.17,w-.55,F+.17,w-.4),y.lineTo(F+.13,w+.12),y.lineTo(F-.35,w+.12)},U+.04,.05));for(let y of[-1,1]){g.quad([y*(k-.12)-(y>0?.62:0),w-.2,F+.235],[y*(k-.12)+(y>0?0:.62),w-.2,F+.235],[y*(k-.12)+(y>0?0:.62),w+.06,F+.2],[y*(k-.12)-(y>0?.62:0),w+.06,F+.2],[0,0,1],[0,0,1,0,1,1,0,1]),M(c,.075,.04,y*(k-.4),w-.42,F+.235,Math.PI/2,0,0,12),a.add(tv,vt(y*(k-.25),S,D,0,0,Math.PI/2,S+.12,.44,S+.12));for(let V of[0,1])v(d,.4,.05,.42,y*(k-.2),.48+V*.36,D-.72);v(a,.06,.95,.5,y*(k-.01),.7,D-.72)}for(let y of[-1,1]){let V=y*(k+.072);v(a,.02,R(1.95)-R(.15),.025,V,(R(1.95)+R(.15))/2,F-1.32),v(a,.02,R(1)-R(.15),.025,V,(R(1)+R(.15))/2,F-.22),v(a,.02,.025,1.1,V,R(.15),F-.77),v(r,.04,.05,.2,y*(k+.09),R(1.02),F-1.18),v(r,.02,.03,1.15,y*(k+.078),R(1.16),F-.78),v(r,.42,.04,.04,y*(k+.24),R(1.96),F-.3,0,y*-.3,0),v(r,.04,.5,.04,y*(k+.44),R(1.72),F-.18),_(a,.15,.64,.32,y*(k+.5),R(1.6),F-.14,.05),v(o,.02,.54,.24,y*(k+.425),R(1.6),F-.14),_(a,.13,.26,.22,y*(k+.48),R(1.12),F-.12,.05)}if(tr(o,[[F-.17,R(1.18)],[F-1.25,R(1.18)],[F-1.25,R(1.92)],[F-.41,R(1.92)]],k+.075),B&&tr(o,[[lt+.35,R(2.25)],[lt+.15,R(2.25)],[lt+.15,R(2.7)],[lt+.35,R(2.7)]],k+.075),tr(f,[[F-.15,R(.2)],[lt+.05,R(.2)],[lt+.05,R(1.05)],[F-.15,R(1.05)]],k+.08),B&&!E)for(let y of[-1,1])v(s,.05,.62,D-.95-1.2,y*(k-.04),.78,(D-.95+1.2)/2);v(m,U-.3,.3,.55,0,R(1),F-.45);let C=new Xs(.21,.025,6,18);m.add(C,vt(.55,R(1.18),F-.72,.55,0,0));for(let y of[-1,1])v(m,.55,.15,.55,y*.55,R(.55),F-1.25),v(m,.55,.75,.12,y*.55,R(.95),F-1.55,-.15)}if(!T){let F=P?W-1.4:D-1.6;M(p,.34,1.4,1.02,.86,F,Math.PI/2,0,0,20);for(let it of[-.45,.45])M(a,.355,.06,1.02,.86,F+it,Math.PI/2,0,0,20);v(a,.5,.5,.7,-1,.85,F+.1),M(d,.17,1.1,-.95,.62,F-.9,Math.PI/2)}if(!E){let F=st-.25;P||(M(r,.11,2.6,k-.14,R(2)+(B?.4:0),F),M(r,.15,.9,k-.14,R(1.2),F)),v(p,1.3,.05,.55,0,w+.05,F-.1);for(let[it,lt]of[[12597547,-.18],[3049182,.18]]){let _t=new Kt(new Xs(.16,.025,6,16),new cn({color:it}));_t.position.set(lt,w+.5,F-.05),n.add(_t)}v(d,1.35,.14,1.3,0,w-.02,.3),v(p,1.2,.03,1.1,0,w+.06,.3);for(let it of[-1,1])v(a,.7,.05,i.axles>=3?2.7:1.4,it*.98,S*2+.14,0)}for(let F of[-1,1])x.quad([F*.62-.22,w-.32,Y-.03],[F*.62+.22,w-.32,Y-.03],[F*.62+.22,w-.1,Y-.03],[F*.62-.22,w-.1,Y-.03],[0,0,-1],F>0?[1,0,0,0,0,1,1,1]:[0,0,1,0,1,1,0,1]),v(a,.62,.62,.03,F*1,.55,i.axles>=3&&!E?-1.45:-.8);v(d,2,.1,.12,0,w-.2,Y);let bt=.3;if(E){let F=st-.15,it=Y,lt=T?2.3:2.7,_t=T?2.25:2.5;v(d,_t,.12,F-it,0,w+.02,(it+F)/2);let C=new cn({map:At.cargoBox("#"+new gt(i.color===15921906?3108830:i.color).getHexString(),"DRIZZIE")}),y=new Lt,V=w+.08,z=w+.08+lt;y.quad([_t/2+.01,V,F],[_t/2+.01,V,it],[_t/2+.01,z,it],[_t/2+.01,z,F],[1,0,0],[1,0,0,0,0,1,1,1]),y.quad([-_t/2-.01,V,it],[-_t/2-.01,V,F],[-_t/2-.01,z,F],[-_t/2-.01,z,it],[-1,0,0],[0,0,1,0,1,1,0,1]),n.add(y.mesh(C,{cast:!0}));let et=new Lt(!0);et.box(-_t/2,V,it,_t/2,z,F,1,16053492);for(let rt of[-1,1])et.add(Ot.box(),vt(rt*_t/4,(V+z)/2,it-.02,0,0,0,_t/2-.08,lt-.12,.02),14474460);et.add(Ot.box(),vt(0,z+.02,(it+F)/2,0,0,0,_t+.04,.06,F-it+.04),13685718),n.add(et.mesh(t.flat,{cast:!0}));for(let rt of[-.3,.3])v(r,.04,lt-.3,.04,rt,(V+z)/2,it-.04);v(a,_t-.2,.12,.1,0,.55,it-.05),bt=Y}let Bt=j_(i.color),j=new cn({map:At.cabDecal(i.color),transparent:!0,alphaTest:.05,depthWrite:!1,side:de,polygonOffset:!0,polygonOffsetFactor:-2});Od([[s,Bt],[r,t.chrome],[a,t.dark],[o,t.glass],[c,t.light],[l,t.red],[h,t.amber],[u,t.grill],[d,t.steel],[p,t.alu],[g,t.lamp],[x,t.tail],[f,j],[m,t.interior]],n);let ot=new ln,St=P?S+.44:w-.07,It=P?D+S+.3:$+.3,Tt=P?k-.31:k-.43;for(let F of[-1,1]){let it=new Di(t.glow);it.scale.set(1.7,1.7,1),it.position.set(F*Tt,St,It),ot.add(it);let lt=new Di(t.glowRed);lt.scale.set(.9,.9,1),lt.position.set(F*.62,w-.2,Y-.12),ot.add(lt)}let Et=new Kt(new We(9,26),t.beam);Et.rotation.set(-Math.PI/2,0,Math.PI),Et.position.set(0,.07,$+13.5),ot.add(Et),ot.visible=!1,e.add(ot);let Wt=[],Ct=[];for(let F of[-1,1])for(let[it,lt,_t]of[[F*(k-.05),P?S+.44:w-.07,P?D+S+.3:$+.25],[F*(k+.05),R(P?.6:.3),P?W-.2:D+.6],[F*.98,w-.2,Y-.1]]){let C=new Di(t.blink);C.scale.set(.8,.8,1),C.position.set(it,lt,_t),C.visible=!1,e.add(C),(F>0?Wt:Ct).push(C)}let I=[],ut=[],tt=k-.3,ht=T?.26:.32;I.push(Ia(D,tt,S,ht,1),Ia(D,-tt,S,ht,-1)),i.axles>=4&&I.push(Ia(D-1.55,tt,S,ht,1),Ia(D-1.55,-tt,S,ht,-1));for(let F of I)e.add(F);for(let F of i.axles>=3?[.68,-.68]:[0]){let it=Fd(F,T?1.45:1.75,S,T?.22:.3,!0);ut.push(it),e.add(it)}let nt=new Kt(new We(U+1,$-Y+1.5),t.blob);return nt.rotation.x=-Math.PI/2,nt.position.set(0,.05,($+Y)/2),e.add(nt),{root:e,body:n,front:I,rear:ut,wb:D,wr:S,hitchZ:bt,zf:$,rearEnd:Y,paint:Bt,blob:nt,cabW:U,night:ot,y0:w,cabFront:W,ch:2.05*H,conv:P,blinkL:Wt,blinkR:Ct}}function nv(i){let t=Na(),e=new ln;e.rotation.order="YXZ";let n=new Lt(!0),s=new Lt,r=new Lt(!0),a=new Lt,o=new Lt,c=new Lt,l=new Lt,h=(S,D,U,w,H,R,$,Y,k=0,W=0,st=0)=>S.add(Ot.box(),vt(H,R,$,k,W,st,D,U,w),Y),u=(S,D,U,w,H,R,$,Y,k,W,st=18)=>S.add(Ot.cyl(st),vt(w,H,R,$,Y,k,D*2,U,D*2),W),d=i.trailer,p=i.model,g=p==="blade"?20:d==="tank"?12.5:d==="bulk"?12:d==="lowboy"?14.5:13.6,x=1,f=-(g-x),m=d==="lowboy"?i.t>60?5:4:3,v=1.35,_=f+1.6+(m-1)*v/2,M=1.35,L=[];for(let S of[-1,1]){h(l,.14,.42,g-.6,S*.48,M-.3,(x+f)/2),h(s,.12,1,.12,S*.9,.6,-1.6),h(s,.32,.06,.32,S*.9,.08,-1.6),h(s,.06,.32,5.5,S*1.2,M-.45,f+7.6),h(a,.38,.16,.05,S*1,M-.4,f-.03);for(let D=x-1.5;D>f+1;D-=3)h(o,.04,.08,.12,S*1.28,M-.1,D)}h(s,2.4,.16,.12,0,M-.75,f-.06);for(let S=x-1;S>f+1;S-=1.2)h(l,.96,.1,.1,0,M-.3,S);if(d==="box"){let D=M+1.375;c.add(Ot.box(),vt(0,D,(x+f)/2,0,0,0,2.56,2.75,g));let U=new cn({map:At.cargoBox("#d63031","DRIZZIE")}),w=new Lt,H=M+.3,R=M+2.75-.25,$=1.29,Y=x-1.5,k=f+1.5;w.quad([$,H,Y],[$,H,k],[$,R,k],[$,R,Y],[1,0,0],[1,0,0,0,0,1,1,1]),w.quad([-$,H,k],[-$,H,Y],[-$,R,Y],[-$,R,k],[-1,0,0],[0,0,1,0,1,1,0,1]),L.push(w.mesh(U,{cast:!1}));for(let W of[-1,1])h(n,1.22,2.75-.15,.04,W*.63,D,f-.02,15132906);for(let W of[-.95,-.35,.35,.95])h(r,.04,2.75-.3,.05,W,D,f-.06,12568010);h(n,2.56,.12,g,0,M+2.75+.06,(x+f)/2,13685718)}else if(d==="tank"){let S=p==="silo"?12106944:15265007;u(r,1.25,g-1.2,0,M+1.3,(x+f)/2,Math.PI/2,0,0,S,28),r.add(Ot.sphere(),vt(0,M+1.3,x-.6,0,0,0,2.5,2.5,.8),S),r.add(Ot.sphere(),vt(0,M+1.3,f+.6,0,0,0,2.5,2.5,.8),S);for(let D=x-1.6;D>f+1;D-=2.2)u(n,1.27,.08,0,M+1.3,D,Math.PI/2,0,0,10133670,28);for(let D=0;D<3;D++)u(n,.3,.2,0,M+2.6,x-3-D*3.3,0,0,0,8359053,12);h(n,.6,.06,g-2.4,0,M+2.62,(x+f)/2,7174788);for(let D of[-1,1])h(n,.03,.2,g-2.4,D*.3,M+2.75,(x+f)/2,16765952);h(n,.9,.6,.03,1,M+1.3,f+.1,i.hazard?16747520:3049182),h(n,.5,2.4,.06,0,M+1.3,f+.05,8359053)}else if(d==="bulk"){h(n,2.5,.12,g,0,M+.06,(x+f)/2,2911902);for(let D of[-1,1])h(n,.08,2.1,g,D*1.21,M+2.1/2,(x+f)/2,2911902);h(n,2.5,2.1,.08,0,M+2.1/2,x-.04,2911902),h(n,2.5,2.1,.08,0,M+2.1/2,f+.04,2911902);for(let D=0;D<8;D++)for(let U of[-1,1])h(s,.06,2.1,.08,U*1.26,M+2.1/2,x-1-D*1.5);n.add(Ot.sphere(),vt(0,M+2.1-.15,(x+f)/2,0,0,0,2.3,.9,g-.5),13214812)}else if(d==="flatbed"){h(n,2.5,.22,g,0,M,(x+f)/2,7162927),h(n,2.5,1.2,.1,0,M+.7,x-.05,3426654);let S=M+.11,D=U=>{for(let w=x-1.8;w>f+1;w-=2.6)h(n,2.56,.02,.05,0,U,w,15844367)};if(p==="logs"){for(let U=0;U<3;U++)for(let w=0;w<4-U;w++){let H=(w-(3-U)/2)*.6;u(n,.3,g-1.2,H,S+.3+U*.52,(x+f)/2,Math.PI/2,0,0,U%2?9329458:8014374,10);for(let R of[x-.6,f+.6])u(n,.29,.02,H,S+.3+U*.52,R,Math.PI/2,0,0,14200954,10)}for(let U=0;U<5;U++)for(let w of[-1,1])h(s,.08,2.2,.08,w*1.2,S+1.1,x-1-U*2.8)}else if(p==="container"){let U=new Kt(Ot.box(),new cn({map:At.container(2388387)}));U.scale.set(2.44,2.59,12.19),U.position.set(0,S+1.3,(x+f)/2),L.push(U),D(S+2.62)}else if(p==="coils")for(let U=0;U<4;U++)u(r,.85,1.6,0,S+.86,x-2-U*3,0,0,Math.PI/2,12568010,24),u(n,.3,1.62,0,S+.86,x-2-U*3,0,0,Math.PI/2,2236962,12),h(s,1.6,.25,1.4,0,S+.12,x-2-U*3),h(n,.05,1.8,1.7,0,S+.9,x-2-U*3,15844367);else if(p==="beams"){for(let U=0;U<3;U++)for(let w=0;w<4;w++){let H=(w-1.5)*.58,R=S+.22+U*.42,$=(x+f)/2;h(n,.5,.05,g-.6,H,R+.17,$,6122878),h(n,.5,.05,g-.6,H,R-.17,$,6122878),h(n,.06,.34,g-.6,H,R,$,4872810)}D(S+1.4)}}else if(d==="lowboy"){h(n,2.6,.3,3.4,0,M,x-1.6,12597547),h(n,2.9,.3,g-5.5,0,.95,(x-3.4+f+2.1)/2,12597547),h(n,2.6,.3,2.1,0,M-.1,f+1.05,12597547);for(let w of[-1,1])h(n,.6,1.6,.12,w*.8,M+.7,f+.2,12597547,.5);for(let w of[-1,1])h(n,1,.6,.03,w*.7,M+.6,f-.1,16777215);let D=.95+.15,U=(x-3.4+f+2.1)/2;if(p==="tractor"){h(n,1.3,1.2,3.2,0,D+1.3,U+.3,3050298),h(n,1.4,1.5,1.4,0,D+2.3,U-.9,3050298),h(n,1.3,1,1.3,0,D+3.1,U-.9,1845299);for(let w of[-1,1])u(n,.95,.6,w*1.1,D+.95,U-1,0,0,Math.PI/2,2236962),u(n,.55,.62,w*1.1,D+.95,U-1,0,0,Math.PI/2,15844367),u(n,.55,.4,w*.95,D+.55,U+1.5,0,0,Math.PI/2,2236962)}else if(p==="excavator"){for(let w of[-1,1]){h(s,.7,.9,4.8,w*1.05,D+.45,U);for(let H=0;H<5;H++)u(n,.22,.72,w*1.05,D+.25,U-1.8+H*.9,0,0,Math.PI/2,5592405,10)}h(n,2.6,1.2,3.6,0,D+1.5,U-.6,15844367),h(n,1,1.4,1.2,-.7,D+2.8,U+.4,15844367),h(n,.9,1,.04,-.7,D+2.9,U+1.01,1845299),h(n,.5,.5,4,.5,D+2.6,U+2.4,15844367,-.35),h(n,.45,.45,2.8,.5,D+2,U+4.6,15844367,.9),h(s,1,.8,.8,.5,D+1,U+5.2)}else if(p==="transformer"){h(n,2.6,3,4.2,0,D+1.5,U,8359053);for(let w=0;w<9;w++)for(let H of[-1,1])h(n,.08,2.4,1,H*1.36,D+1.5,U-1.8+w*.45,9807270);for(let w=0;w<3;w++)u(n,.18,1.3,(w-1)*.8,D+3.6,U+1,0,0,0,9127187,10)}else p==="blade"?(n.add(Ot.sphere(),vt(0,D+1.6,U-2,0,0,0,2.2,2,30),16054007),u(n,1.1,1.6,0,D+1.6,U+30/2-3.5,Math.PI/2,0,0,15067368,20),h(s,.4,1.4,.6,0,D+.7,U+2),h(s,.4,1.4,.6,0,D+.7,U-6)):p==="press"&&(h(n,2.8,3.6,4.6,0,D+1.8,U,3038604),h(n,1.8,1.2,1.6,0,D+4.2,U,2049126),h(r,.25,3,.25,1.2,D+2,U+2.2,12436423),h(r,.25,3,.25,-1.2,D+2,U+2.2,12436423));h(n,2.3,.35,.03,0,M+.9,f-.06,16761095)}Od([[n,t.flat],[s,t.dark],[r,t.flatChrome],[a,t.red],[o,t.amber],[c,t.panel],[l,t.steel]],e);for(let S of L)S&&(S.castShadow=!0,e.add(S));let E=[];for(let S=0;S<m;S++){let D=Fd(f+1.6+S*v,1.75,.5,.28,!0);E.push(D),e.add(D)}let T=new ln;for(let S of[-1,1]){let D=new Di(t.glowRed);D.scale.set(.9,.9,1),D.position.set(S*1,M-.4,f-.15),T.add(D)}T.visible=!1,e.add(T);let P=[],B=[];for(let S of[-1,1]){let D=new Di(t.blink);D.scale.set(.8,.8,1),D.position.set(S*1.2,M-.4,f-.12),D.visible=!1,e.add(D),(S>0?P:B).push(D)}let b=new Kt(new We(3.4,g+1.5),t.blob);return b.rotation.x=-Math.PI/2,b.position.set(0,.05,(x+f)/2),e.add(b),e.traverse(S=>{S.isMesh&&S!==b&&(S.castShadow=!0)}),{root:e,axles:E,Lk:-_,Lt:g,front:x,back:f,blob:b,night:T,blinkL:P,blinkR:B}}var Wc={x:0,z:0},Ua=class{constructor(t,e,n){this.scene=t,this.shadows=n,this.x=0,this.z=0,this.h=0,this.y=0,this.pitch=0,this.tpitch=0,this.v=0,this.steer=0,this.acc=0,this.trailer=null,this.th=0,this.cargo=null,this.wheelRot=0,this.rpm=.2,this.collCooldown=0,this.reverse=!1,this.lastImpact=0,this.lightsOn=!1,this.engineOn=!1,this.setTruck(e)}setTruck(t){this.model&&this.scene.remove(this.model.root),this.def=t,this.model=ev(t),this.model.blob.visible=!this.shadows,this.scene.add(this.model.root),this.model.night.visible=this.lightsOn,this.onModel&&this.onModel(this.model),this.trailer&&t.rigid&&this.detach(),this.sync()}attach(t){if(this.cargo=t,this.def.rigid)return;let e=nv(t);e.blob.visible=!this.shadows,e.night.visible=this.lightsOn,this.trailer=e,this.th=this.h,this.scene.add(e.root),this.sync()}setBlink(t,e){let n=(a,o)=>{for(let c of a)c.visible=o},s=e&&(t===-1||t===2),r=e&&(t===1||t===2);n(this.model.blinkL,s),n(this.model.blinkR,r),this.trailer&&(n(this.trailer.blinkL,s),n(this.trailer.blinkR,r))}setLights(t){ls&&ls.lamp.emissiveIntensity!==void 0&&(ls.lamp.emissiveIntensity=t?1.6:.15),this.lightsOn=t,this.model.night.visible=t,this.trailer&&(this.trailer.night.visible=t)}detach(){this.trailer&&this.scene.remove(this.trailer.root),this.trailer=null,this.cargo=null}get mass(){let t=this.def.mass;return this.cargo&&(t+=this.cargo.t+(this.def.rigid?0:Ed(this.cargo))),t*1e3}get speedKmh(){return Math.abs(this.v)*3.6}place(t,e,n){this.x=t,this.z=e,this.h=n,this.th=n,this.v=0,this.steer=0,this.sync()}center(t){let e=Math.sin(this.h),n=Math.cos(this.h);if(this.trailer){let s=this.x+e*this.model.hitchZ,r=this.z+n*this.model.hitchZ,a=this.trailer.Lt*.45;t.x=(this.x+e*this.model.wb*.5+s-Math.sin(this.th)*a)/2,t.z=(this.z+n*this.model.wb*.5+r-Math.cos(this.th)*a)/2}else t.x=this.x+e*this.model.wb*.4,t.z=this.z+n*this.model.wb*.4;return t}update(t,e,n,s){this.world=n;let r=this.def,a=this.mass,o=r.hp*735.5*2.3,c=r.vmax/3.6,l=this.v,h=0,u=e.brake,d=e.throttle;e.gear==="auto"?(this.stopT=u>.1&&Math.abs(l)<.4&&d<.1?(this.stopT||0)+t:0,this.stopT>.3&&(this.reverse=!0),d>.1&&l>-.4&&(this.reverse=!1)):this.reverse=e.gear==="R";let p=this.engineOn&&e.gear!=="N",g=e.gear==="auto"&&this.reverse;this.reverse?g?(p&&u>0&&l>-4.5&&(h-=u*Math.min(o/Math.max(-l,3),a*1.6)),d>0&&l<0&&(h+=d*a*6)):(p&&d>0&&l>-5&&(h-=d*Math.min(o/Math.max(-l,3),a*1.6)),u>0&&l<0&&(h+=u*a*6.5),u>0&&l>0&&(h-=u*a*6.5)):(p&&d>0&&l>=-.3&&(h+=d*Math.min(o/Math.max(l,3),a*3,r.hp*250)),u>0&&l>0&&(h-=u*a*(6.8-Math.min(2.2,a/4e4))),u>0&&l<0&&(h+=u*a*6)),e.handbrake&&(h-=Math.sign(l)*a*5);let x=Math.sin(this.pitch)*.6+Math.sin(this.trailer?this.tpitch:this.pitch)*.4,f=-a*9.81*x,m=this.trailer?this.cargo.trailer==="box"?9:7:r.rigid?6.5:5,v=.5*1.2*m*l*Math.abs(l),_=(.011*a*9.81+(d<.05&&u<.05?a*.35:0))*Math.sign(l);l+=(h+(Math.abs(l)>.2||d>0?f:0)-v)/a*t;let M=_/a;Math.abs(M*t)>Math.abs(l)&&h===0?l=0:l-=M*t;let L=p?this.reverse?g?u>0?-1:0:d>0?-1:0:d>0?1:0:0;l!==0&&Math.sign(l)!==L&&Math.sign(l)!==Math.sign(this.v)&&(l=0),e.handbrake&&Math.abs(l)<.3&&(l=0),l=Math.min(l,c),l=Math.max(l,-5),this.acc=(l-this.v)/Math.max(t,.001),this.v=l,this.grade=x;let E=.6/(1+l*l/160),T=e.steer*E,P=e.steer===0?2.6:1.7,B=T-this.steer;this.steer+=Math.sign(B)*Math.min(Math.abs(B),P*t);let b=this.model.wb,S=l*Math.tan(this.steer)/b;if(this.h+=S*t,this.yaw=S,this.x+=Math.sin(this.h)*l*t,this.z+=Math.cos(this.h)*l*t,this.trailer){let $=this.model.hitchZ,Y=this.h-this.th,k=(l*Math.sin(Y)-$*S*Math.cos(Y))/this.trailer.Lk;this.th+=k*t;let W=this.h-this.th;W=Math.atan2(Math.sin(W),Math.cos(W));let st=1.3;Math.abs(W)>st&&(this.th=this.h-Math.sign(W)*st)}this.collide(n,s,t),this.wheelRot+=l*t/this.model.wr;let D=Math.abs(l)/c,U=Math.min(5,Math.floor(D*6)),w=D*6-U;this.gear=this.reverse?"R":e.gear==="N"?"N":Math.abs(l)<.3?e.gear==="auto"?"N":"D":String(U+1);let H=Math.max(d,x>.02?.7:0),R=this.engineOn?Math.abs(l)<.3||e.gear==="N"?.18+d*.5:.3+w*.6*(.5+H*.5):0;this.rpm+=(R-this.rpm)*Math.min(1,t*6),this.sync()}circles(t){let e=this.model,n=Math.sin(this.h),s=Math.cos(this.h);t.length=0;for(let r of[e.zf-.9,(e.zf+e.rearEnd)/2,e.rearEnd+.9])t.push({x:this.x+n*r,z:this.z+s*r,r:e.cabW/2+.1,t:!1});if(this.trailer){let r=this.x+n*e.hitchZ,a=this.z+s*e.hitchZ,o=Math.sin(this.th),c=Math.cos(this.th),l=this.trailer;for(let h=l.front-1.2;h>l.back+.5;h-=2.4)t.push({x:r+o*h,z:a+c*h,r:1.35,t:!0});t.push({x:r+o*(l.back+1.3),z:a+c*(l.back+1.3),r:1.35,t:!0})}return t}collide(t,e,n){this.collCooldown-=n;let s=this._cs||(this._cs=[]);this.circles(s);let r=0,a=0,o=0;for(let c of s){let l=t.resolveCircle(c,c.r,Wc);l>.01&&(r+=Wc.x*(c.t?.6:1),a+=Wc.z*(c.t?.6:1),l>o&&(o=l));for(let h of e){let u=c.x-h.x,d=c.z-h.z,p=c.r+h.r,g=u*u+d*d;if(g<p*p&&g>1e-6){let x=Math.sqrt(g),f=p-x;r+=u/x*f*.5,a+=d/x*f*.5,f>o&&(o=f),h.hit=!0}}}if(this.lastImpact=0,o>0){this.x+=r,this.z+=a;let c=Math.abs(this.v)*3.6;c>4&&o>.12&&this.collCooldown<=0&&(this.lastImpact=c,this.collCooldown=.6),this.v*=c>15&&o>.3?-.12:o>.12?.6:.97}}sync(){let t=this.model,e=Math.sin(this.h),n=Math.cos(this.h),s=this.world,r=0,a=0;s&&(r=s.heightAt(this.x,this.z),a=s.heightAt(this.x+e*t.wb,this.z+n*t.wb)),this.y=r,this.pitch=Math.atan2(a-r,t.wb),t.root.position.set(this.x,r,this.z),t.root.rotation.set(-this.pitch,this.h,0);for(let c=0;c<t.front.length;c++){let l=t.front[c];l.rotation.y=this.steer*(c<2?1:.6),l.children[0].rotation.x=this.wheelRot}for(let c of t.rear)c.rotation.x=this.wheelRot;let o=(this.yaw||0)*this.v;if(t.body.rotation.z+=(Math.max(-.05,Math.min(.05,-o*.012))-t.body.rotation.z)*.2,t.body.rotation.x+=(Math.max(-.03,Math.min(.03,-this.acc*.006))-t.body.rotation.x)*.2,this.trailer){let c=this.trailer,l=this.x+e*t.hitchZ,h=this.z+n*t.hitchZ,u=r+(a-r)*(t.hitchZ/t.wb),d=l-Math.sin(this.th)*c.Lk,p=h-Math.cos(this.th)*c.Lk,g=s?s.heightAt(d,p):0;this.tpitch=Math.atan2(u-g,c.Lk),c.root.position.set(l,u,h),c.root.rotation.set(-this.tpitch,this.th,0);let x=this.wheelRot*(t.wr/.5);for(let f of c.axles)f.rotation.x=x}}};var er=20/2,Bd=[12597547,2719929,15528177,2899536,8359053,15844367,2600544,9323693,13849600,1118481,12436423],Xc=null;function iv(i,t){let e=new Lt(!0),n=new Lt(!0);Xc=Xc||new Qs(1,1,1,2,.18);let s=(f,m,v,_,M,L,E,T=0)=>e.add(Ot.box(),vt(_,M,L,T,0,0,f,m,v),E),r=(f,m,v,_,M,L,E)=>e.add(Xc,vt(_,M,L,0,0,0,f,m,v),E),a=1845299,o=4.4,c=1.8,l=.34;i===0?(r(c,.62,o,0,.62,0,t),r(c-.16,.6,2.3,0,1.18,-.25,a),r(c-.12,.1,2,0,1.47,-.25,t)):i===1?(o=4.7,c=1.95,l=.4,r(c,.85,o,0,.8,0,t),r(c-.1,.72,3.2,0,1.55,-.45,a),r(c-.06,.1,3,0,1.92,-.45,t),s(1.2,.05,2,0,2,-.45,2236962)):i===2?(o=11.5,c=2.5,l=.55,r(c,2.7,o,0,1.8,0,t),s(c+.02,.95,o-1.6,0,2.35,-.4,a),s(c-.2,1.3,.05,0,2.2,o/2+.01,a),s(c+.02,.25,o-.4,0,.75,0,16777215)):(o=10.5,c=2.5,l=.52,r(c-.1,2.3,2.1,0,2,o/2-1.1,t),s(c-.4,.9,.05,0,2.55,o/2-.04,a),r(c,2.8,o-2.6,0,2.55,-1.2,16053492),s(.9,.3,o-1,0,.75,-.3,2236962));let h=(f,m,v,_,M,L,E)=>n.add(Ot.box(),vt(_,M,L,0,0,0,f,m,v),E),u=i>=2?.9:.72;h(.42,.16,.06,c/2-.3,u,o/2+.01,16775393),h(.42,.16,.06,-c/2+.3,u,o/2+.01,16775393),h(.42,.16,.06,c/2-.3,u+.05,-o/2-.01,16722458),h(.42,.16,.06,-c/2+.3,u+.05,-o/2-.01,16722458);let d=i>=2?[o/2-2,-o/2+2.4]:[o/2-.85,-o/2+.85];for(let f of[-1,1])for(let m of d)e.add(Ot.cyl(12),vt(f*(c/2-.12),l,m,0,0,Math.PI/2,l*2,.28,l*2),1381653),e.add(Ot.cyl(10),vt(f*(c/2-.02),l,m,0,0,Math.PI/2,l*1.1,.06,l*1.1),12106944);let p=e.idx.length,g=e.count;for(let f=0;f<n.count*3;f++)e.pos.push(n.pos[f]),e.nor.push(n.nor[f]),e.col.push(n.col[f]);for(let f=0;f<n.count*2;f++)e.uv.push(n.uv[f]);for(let f of n.idx)e.idx.push(f+g);let x=e.geometry();return x.addGroup(0,p,0),x.addGroup(p,n.idx.length,1),{geo:x,L:o,W:c}}function kd(i,t,e,n,s){let r=1-n;return s.x=r*r*i.x+2*r*n*t.x+n*n*e.x,s.z=r*r*i.z+2*r*n*t.z+n*n*e.z,s}var za=class{constructor(t,e,n){this.scene=t,this.world=n,this.cars=[];let s=[new wn({vertexColors:!0,shininess:90,specular:7829367}),new ce({vertexColors:!0})];this.beamMat=new ce({map:At.beam(),transparent:!0,opacity:.7,depthWrite:!1,blending:bn});let r=new We(6,16);r.rotateX(-Math.PI/2),r.rotateY(Math.PI);let a={};for(let o=0;o<e;o++){let c=o%7===3?3:o%11===5?2:o%3===1?1:0,l=c===2?o%2?1752220:15965202:Bd[o*7%Bd.length],h=c+"_"+l;a[h]||(a[h]=iv(c,l));let u=new Kt(a[h].geo,s);u.castShadow=!0,u.rotation.order="YXZ";let d=new Kt(r,this.beamMat);d.position.set(0,.09,a[h].L/2+8),d.visible=!1,u.add(d),u.visible=!1,t.add(u),this.cars.push({mesh:u,beam:d,L:a[h].L,type:c,off:c>=2?7.5:o%2?2.5:7.5,v:0,vmax:c>=2?12:12+o%4,x:1e5,z:1e5,y:0,h:0,stopT:0,mode:null})}this.p={x:0,z:0},this.q={x:0,z:0},this.tmp={}}node(t,e,n){return{c:t,i:e,j:n,x:t.x0+e*140,z:t.z0+n*140}}neighbors(t){let e=[];for(let[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=t.i+n,a=t.j+s;r>=0&&a>=0&&r<=t.c.nx&&a<=t.c.nz&&e.push(this.node(t.c,r,a))}return e}makeStraight(t){let{A:e,B:n}=t,s=Math.sign(n.x-e.x),r=Math.sign(n.z-e.z),a=-r,o=s,c={x:e.x+s*er+a*t.off,z:e.z+r*er+o*t.off},l={x:n.x-s*er+a*t.off,z:n.z-r*er+o*t.off};t.seg={p0:c,p1:{x:(c.x+l.x)/2,z:(c.z+l.z)/2},p2:l,len:Math.hypot(l.x-c.x,l.z-c.z),turn:!1},t.dir={x:s,z:r}}makeTurn(t){let{A:e,B:n}=t,s=this.neighbors(n).filter(x=>!(x.i===e.i&&x.j===e.j)),r=s[Math.random()*s.length|0],a=t.dir,o=Math.sign(r.x-n.x),c=Math.sign(r.z-n.z),l={x:-a.z,z:a.x},h={x:-c,z:o},u=t.seg.p2,d={x:n.x+o*er+h.x*t.off,z:n.z+c*er+h.z*t.off},p=o===a.x&&c===a.z,g=p?{x:(u.x+d.x)/2,z:(u.z+d.z)/2}:{x:n.x+(l.x+h.x)*t.off,z:n.z+(l.z+h.z)*t.off};t.seg={p0:u,p1:g,p2:d,len:p?20:Math.hypot(d.x-u.x,d.z-u.z)*1.15,turn:!p},t.next={A:n,B:r}}spawn(t,e,n){t.mesh.visible=!1,t.mode=null;let s=this.world.hw(e,n),r=On.find(a=>e>a.x0-350&&e<as(a)+350&&n>a.z0-350&&n<$s(a)+350);if(s&&(!r||Math.random()<.45)){let a=s.o,c=a.s[s.i]+(Math.random()<.5?-1:1)*(140+Math.random()*320);if(c<30||c>a.length-30)return;t.mode="hw",t.hwy=a,t.s=c,t.dir=Math.random()<.5?1:-1,t.v=t.vmax*1.4*.8,t.mesh.visible=!0;return}if(r)for(let a=0;a<30;a++){let o=this.node(r,Math.random()*(r.nx+1)|0,Math.random()*(r.nz+1)|0),c=this.neighbors(o),l=c[Math.random()*c.length|0],h=Math.hypot((o.x+l.x)/2-e,(o.z+l.z)/2-n);if(!(h<110||h>420)){t.mode="city",t.A=o,t.B=l,t.inTurn=!1,t.next=null,this.makeStraight(t),t.s=Math.random()*t.seg.len*.8,t.v=t.vmax*.6,t.mesh.visible=!0;return}}}update(t,e,n){let s=this.p,r=this.q,a=this.tmp;for(let o of this.cars){if(!o.mode||Math.hypot(o.x-e.x,o.z-e.z)>560){if(o.x=o.z=1e5,Math.random()<.2&&this.spawn(o,e.x,e.z),!o.mode)continue;this.place(o,s,r,a);continue}let c=Math.sin(o.hh||0),l=Math.cos(o.hh||0),h=!1,u=9+o.v*1.3+o.L/2,d=(f,m,v)=>{let _=f-o.x,M=m-o.z,L=_*c+M*l;L<=0||L>u+v||Math.abs(_*l-M*c)<1.6+v&&(h=!0)};for(let f of n)d(f.x,f.z,f.r);if(!h)for(let f of this.cars)f!==o&&f.mode&&d(f.x,f.z,f.L*.35);o.hit&&(o.stopT=2.5,o.hit=!1),o.stopT-=t;let p=o.mode==="hw"?o.vmax*1.4:o.seg.turn?6:o.vmax,g=h||o.stopT>0?0:p,x=g>o.v?2.5:7;if(o.v+=Math.sign(g-o.v)*Math.min(Math.abs(g-o.v),x*t),o.mode==="hw"){if(o.s+=o.v*t*o.dir,o.s<5||o.s>o.hwy.length-5){o.mode=null,o.mesh.visible=!1;continue}}else for(o.s+=o.v*t;o.s>=o.seg.len;)o.s-=o.seg.len,o.next&&o.inTurn?(o.A=o.next.A,o.B=o.next.B,o.next=null,o.inTurn=!1,this.makeStraight(o)):(this.makeTurn(o),o.inTurn=!0);this.place(o,s,r,a)}}place(t,e,n,s){if(t.mode==="hw"){let r=t.hwy;r.at(t.s,s);let a=s.dx*t.dir,o=s.dz*t.dir;t.x=s.x-o*3.6,t.z=s.z+a*3.6,t.y=s.y+.04,t.hh=Math.atan2(a,o);let c=r.at(t.s+t.dir*4,s).y,l=-Math.atan2(c+.04-t.y,4);t.mesh.position.set(t.x,t.y,t.z),t.mesh.rotation.set(l,t.hh,0)}else{let r=t.s/t.seg.len;kd(t.seg.p0,t.seg.p1,t.seg.p2,r,e),kd(t.seg.p0,t.seg.p1,t.seg.p2,Math.min(1,r+.02),n),Math.hypot(n.x-e.x,n.z-e.z)>1e-4&&(t.hh=Math.atan2(n.x-e.x,n.z-e.z)),t.x=e.x,t.z=e.z,t.mesh.position.set(t.x,0,t.z),t.mesh.rotation.set(0,t.hh,0)}}setNight(t){for(let e of this.cars)e.beam.visible=t>.35}obstacles(t){t.length=0;for(let e of this.cars){if(!e.mode)continue;let n=Math.sin(e.hh),s=Math.cos(e.hh),r=e.type>=2?3:2;for(let a=0;a<r;a++){let o=(a/(r-1)-.5)*(e.L-2);t.push({x:e.x+n*o,z:e.z+s*o,r:e.type>=2?1.3:1,car:e,set hit(c){this.car.hit=c}})}}return t}};var le=null;function Fa(i,t){return le.nodes.push({x:i,z:t,adj:[]}),le.nodes.length-1}function Oa(i,t,e){let n=0;for(let r=1;r<e.length;r++)n+=Math.hypot(e[r].x-e[r-1].x,e[r].z-e[r-1].z);let s={a:i,b:t,poly:e,len:n};return le.edges.push(s),le.nodes[i].adj.push(s),le.nodes[t].adj.push(s),s}function Hd(i){le={nodes:[],edges:[],cityNode:{}};for(let t of On){let e=(n,s)=>t.id+":"+n+":"+s;for(let n=0;n<=t.nx;n++)for(let s=0;s<=t.nz;s++)le.cityNode[e(n,s)]=Fa(t.x0+n*140,t.z0+s*140);for(let n=0;n<=t.nx;n++)for(let s=0;s<=t.nz;s++){let r=le.cityNode[e(n,s)];if(n<t.nx){let a=le.cityNode[e(n+1,s)];Oa(r,a,[le.nodes[r],le.nodes[a]])}if(s<t.nz){let a=le.cityNode[e(n,s+1)];Oa(r,a,[le.nodes[r],le.nodes[a]])}}}for(let t of i.hws){let e=[];for(let c of Object.values(i.depots))c.entry.hw===t.id&&e.push({s:c.entry.s,depot:c.id});e.sort((c,l)=>c.s-l.s);let n=t.def.from?le.cityNode[t.def.from[0]+":"+t.def.from[1]+":"+t.def.from[2]]:Fa(t.x[0],t.z[0]),s=t.def.to?le.cityNode[t.def.to[0]+":"+t.def.to[1]+":"+t.def.to[2]]:Fa(t.x[t.n-1],t.z[t.n-1]),r=n,a=0,o=(c,l)=>{let h=[];for(let u=c;u<=l;u++)h.push({x:t.x[u],z:t.z[u]});return h};for(let c of e){let l=0;for(;l<t.n-1&&t.s[l+1]<c.s;)l++;let h=Fa(t.x[l],t.z[l]);le.depotNode=le.depotNode||{},le.depotNode[c.depot]=h,Oa(r,h,[le.nodes[r],...o(a,l)]),r=h,a=l}Oa(r,s,[...o(a,t.n-1),le.nodes[s]])}return le}function Yc(i,t){let e=null,n=1/0;for(let s of le.edges){let r=s.poly;for(let a=0;a<r.length-1;a++){let o=r[a].x,c=r[a].z,l=r[a+1].x-o,h=r[a+1].z-c,u=l*l+h*h||1,d=((i-o)*l+(t-c)*h)/u;d=d<0?0:d>1?1:d;let p=o+l*d,g=c+h*d,x=(i-p)**2+(t-g)**2;x<n&&(n=x,e={e:s,i:a,t:d,x:p,z:g})}}return e}function Gd(i){let t=i.e.poly,e=[{x:i.x,z:i.z}];for(let r=i.i;r>=0;r--)e.push(t[r]);let n=[{x:i.x,z:i.z}];for(let r=i.i+1;r<t.length;r++)n.push(t[r]);let s=r=>r.reduce((a,o,c)=>c?a+Math.hypot(o.x-r[c-1].x,o.z-r[c-1].z):0,0);return[{node:i.e.a,poly:e,len:s(e)},{node:i.e.b,poly:n,len:s(n)}]}var qc=new Map;function sv(i){if(qc.has(i.id))return qc.get(i.id);let t;if(le.depotNode&&le.depotNode[i.id]!==void 0){let e=le.depotNode[i.id];t=[{node:e,poly:[le.nodes[e]],len:0}]}else t=Gd(Yc(i.entry.x,i.entry.z)).map(e=>xi(un({},e),{poly:e.poly.slice().reverse()}));return qc.set(i.id,t),t}function $c(i,t,e){let n=le.nodes.length,s=new Float64Array(n).fill(1/0),r=new Array(n).fill(null),a=new Uint8Array(n),o=Yc(i,t),c=Gd(o),l={};for(let m of c)s[m.node]=m.len,l[m.node]=m.poly;for(;;){let m=-1,v=1/0;for(let _=0;_<n;_++)!a[_]&&s[_]<v&&(v=s[_],m=_);if(m<0)break;a[m]=1;for(let _ of le.nodes[m].adj){let M=_.a===m?_.b:_.a,L=v+_.len;L<s[M]&&(s[M]=L,r[M]={u:m,e:_})}}let h=sv(e),u=null,d=1/0;for(let m of h)s[m.node]+m.len<d&&(d=s[m.node]+m.len,u=m);let p=[];for(let m=u.node;r[m];m=r[m].u)p.unshift(r[m]);let g=[{x:i,z:t}],x=p.length?p[0].u:u.node;if(!p.length&&o.e===Yc(e.entry.x,e.entry.z).e&&!(le.depotNode&&le.depotNode[e.id]!==void 0))g.push({x:o.x,z:o.z},{x:e.entry.x,z:e.entry.z});else{g.push(...l[x]);for(let{u:m,e:v}of p){let M=v.a===m?v.poly:v.poly.slice().reverse();for(let L=1;L<M.length;L++)g.push(M[L])}g.push(...u.poly)}g.push({x:e.zone.x,z:e.zone.z});let f=0;for(let m=1;m<g.length;m++)f+=Math.hypot(g[m].x-g[m-1].x,g[m].z-g[m-1].z);return{path:g,len:f}}var Ba=class{constructor(){this.ctx=null,this.volume=.7}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination),this.engGain=e.createGain(),this.engGain.gain.value=0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=400,this.filter.Q.value=4,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="square";let n=e.createGain();n.gain.value=.35,this.o1.connect(this.filter),this.o2.connect(n).connect(this.filter);let s=e.createBuffer(1,e.sampleRate,e.sampleRate),r=s.getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;this.noise=e.createBufferSource(),this.noise.buffer=s,this.noise.loop=!0;let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=180,this.nGain=e.createGain(),this.nGain.gain.value=.25,this.noise.connect(a).connect(this.nGain).connect(this.filter),this.filter.connect(this.engGain).connect(this.master),this.o1.start(),this.o2.start(),this.noise.start()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}engine(t,e,n=!0){if(!this.ctx)return;let s=this.ctx.currentTime,r=28+t*70;this.o1.frequency.setTargetAtTime(r,s,.05),this.o2.frequency.setTargetAtTime(r*.5,s,.05),this.filter.frequency.setTargetAtTime(220+t*900+e*400,s,.08),this.engGain.gain.setTargetAtTime(n?.13+e*.08:0,s,.1)}horn(t){if(this.ctx){if(t&&!this.hornNodes){let e=this.ctx.createGain();e.gain.value=.18;let n=this.ctx.createOscillator(),s=this.ctx.createOscillator();n.type=s.type="sawtooth",n.frequency.value=233,s.frequency.value=311;let r=this.ctx.createBiquadFilter();r.frequency.value=1800,n.connect(r),s.connect(r),r.connect(e).connect(this.master),n.start(),s.start(),this.hornNodes=[n,s,e]}else if(!t&&this.hornNodes){let[e,n,s]=this.hornNodes;s.gain.setTargetAtTime(0,this.ctx.currentTime,.03),e.stop(this.ctx.currentTime+.2),n.stop(this.ctx.currentTime+.2),this.hornNodes=null}}}beep(t=880,e=.12,n="sine",s=.25){if(!this.ctx)return;let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n,r.frequency.value=t,a.gain.value=s,a.gain.setTargetAtTime(0,this.ctx.currentTime+e*.6,e*.3),r.connect(a).connect(this.master),r.start(),r.stop(this.ctx.currentTime+e*2)}crash(t){if(!this.ctx)return;let e=this.ctx,s=e.createBuffer(1,e.sampleRate*.35,e.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);let a=e.createBufferSource();a.buffer=s;let o=e.createBiquadFilter();o.frequency.value=900;let c=e.createGain();c.gain.value=Math.min(.9,.2+t/60),a.connect(o).connect(c).connect(this.master),a.start()}airBrake(){if(!this.ctx)return;let t=this.ctx,n=t.createBuffer(1,t.sampleRate*.6,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*(1-c/s.length);let r=t.createBufferSource();r.buffer=n;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let o=t.createGain();o.gain.value=.22,r.connect(a).connect(o).connect(this.master),r.start()}starter(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=t.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(14,e),n.frequency.linearRampToValueAtTime(22,e+.7),n.frequency.linearRampToValueAtTime(48,e+1.1),r.frequency.value=600,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.35,e+.1),s.gain.setValueAtTime(.35,e+1),s.gain.linearRampToValueAtTime(0,e+1.4),n.connect(r).connect(s).connect(this.master),n.start(e),n.stop(e+1.5)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}};var ct=i=>document.getElementById(i),ah="drizzieTruck.v1",xn=i=>"R$ "+Math.round(i).toLocaleString("pt-BR"),jn=(i,t,e)=>Math.max(t,Math.min(e,i)),ka={money:3e3,xp:0,level:1,owned:["urbano"],truck:"urbano",job:null,pos:null,name:"Motorista",clock:15.5,stats:{deliveries:0,km:0,earned:0,tons:0,crashes:0},settings:{quality:"auto",volume:.7,fps:!1,steer:"wheel",camera:0,time:"cycle",gearbox:"manual",gauge:"analog",accent:"amber",hud:"normal"}};function rv(){try{let i=JSON.parse(localStorage.getItem(ah));if(i&&i.level)return xi(un(un({},ka),i),{stats:un(un({},ka.stats),i.stats),settings:un(un({},ka.settings),i.settings)})}catch(i){}return JSON.parse(JSON.stringify(ka))}var X=rv();function Ue(){try{X.pos=Q?{x:Q.x,z:Q.z,h:Q.h}:X.pos,localStorage.setItem(ah,JSON.stringify(X))}catch(i){}}var ov={low:{pr:1,minPr:.75,shadows:!1,shadowSize:0,tex:512,aniso:2,traffic:10,fogNear:150,fogFar:650,far:900,trees:5e3},medium:{pr:1.5,minPr:.85,shadows:!0,shadowSize:1024,tex:1024,aniso:4,traffic:16,fogNear:260,fogFar:1050,far:1500,trees:9e3},high:{pr:2,minPr:1,shadows:!0,shadowSize:2048,tex:1024,aniso:8,traffic:22,fogNear:380,fogFar:1600,far:2600,trees:14e3}};function av(){let i="";try{let n=document.createElement("canvas"),s=n.getContext("webgl")||n.getContext("experimental-webgl"),r=s&&s.getExtension("WEBGL_debug_renderer_info");i=(r&&s.getParameter(r.UNMASKED_RENDERER_WEBGL)||s&&s.getParameter(s.RENDERER)||"").toLowerCase();let a=s&&s.getExtension("WEBGL_lose_context");a&&a.loseContext()}catch(n){}let t=navigator.deviceMemory||4,e=navigator.hardwareConcurrency||4;return/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(i)||t<=2||e<=4?"low":t>=6&&e>=8&&/adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(i)?"high":"medium"}var gi=X.settings.quality==="auto"?av():X.settings.quality,Te=ov[gi],Ne,Ae,Oe,pe,Q,cs,Ze,ki,Yr,$r,Bi,th=null,or=null,Vd=-1,Xr=null,$e=0,re=new Ba;re.volume=X.settings.volume;var Le="loading",hs=[],kn=null,Zr=0;var Je,Hn,Vr=0,Zc=[],Rt={gas:!1,brake:!1,left:!1,right:!1,tilt:0,wheel:0,wheelHeld:!1,gear:"D",hand:!1,blink:0,blinkArm:!1},hn={throttle:0,brake:0,steer:0,gear:"D",handbrake:!1},ar=null,jt={yaw:0,orbit:0,orbitT:0,mode:X.settings.camera||0,pos:new N,look:new N},mi=Te.pr,nr=(i,t)=>new Promise(e=>{ct("loadbar").style.width=i+"%",ct("loadmsg").textContent=t,setTimeout(e,16)});async function lv(){await nr(5,"Iniciando gr\xE1ficos\u2026");let i=ct("gl");try{Ne=new Cr({canvas:i,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(n){ct("loadmsg").textContent='Seu aparelho n\xE3o suporta WebGL. Atualize o "Android System WebView" na Play Store.';return}mi=Math.min(window.devicePixelRatio||1,Te.pr),Ne.setPixelRatio(mi),Ne.setSize(window.innerWidth,window.innerHeight,!1),Ne.outputColorSpace=dn,Ne.toneMapping=Ic,Ne.toneMappingExposure=1,Ne.shadowMap.enabled=Te.shadows,Ne.shadowMap.type=gi==="high"?Lc:ga;let t=Ne.capabilities.getMaxAnisotropy();Ad(Te.tex,Math.min(t,Te.aniso)),Ud(gi),Ae=new Pr;let e=new gt(12375786);if(Ae.background=e,Ae.fog=new Ko(e,Te.fogNear,Te.fogFar),Oe=new en(58,window.innerWidth/window.innerHeight,.5,Te.far),_v(),Yr=new da(14413567,6122309,1.25),Ae.add(Yr),Ze=new ma(16773336,2.6),Ze.position.set(180,260,120),Te.shadows){Ze.castShadow=!0,Ze.shadow.mapSize.set(Te.shadowSize,Te.shadowSize);let n=gi==="high"?70:55;Object.assign(Ze.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:10,far:600}),Ze.shadow.bias=-6e-4,Ze.shadow.normalBias=.04}Ae.add(Ze,Ze.target),await nr(20,"Gerando texturas HD\u2026"),At.road(),At.intersection(),At.grass(),At.facade(0),At.facade(1),At.facade(2),At.facade(3),await nr(45,"Construindo a cidade\u2026"),pe=new La(Ae,Te),Hd(pe),await nr(70,"Ligando o motor\u2026"),Q=new Ua(Ae,kr[X.truck]||Zs[0],Te.shadows),gi!=="low"&&(Bi=new pa(16773590,0,70,.55,.6,1.2),Bi.target=new Ce,Q.onModel=n=>{n.root.add(Bi,Bi.target),Bi.position.set(0,n.y0+.3,n.zf+.4),Bi.target.position.set(0,0,n.zf+22)},Q.onModel(Q.model)),vv(),cs=new za(Ae,Te.traffic,pe),yv(),await nr(85,"Desenhando o mapa\u2026"),Av(),X.job&&X.job.phase==="deliver"&&Q.attach(nn[X.job.cargo]),hs=lh(),Tv(),Pv(),gi!=="low"&&(th=new Ws(Ne),fv()),Xa(X.clock),await nr(100,"Pronto!"),Ne.compile(Ae,Oe),ct("loading").classList.add("hidden"),jr(),qa=performance.now(),requestAnimationFrame(nf)}var cv=new gt(12375786),hv=new gt(14916203),uv=new gt(659744),Wr=new gt;function Xa(i){let t=X.settings.time;t==="day"?i=12:t==="night"?i=23:t==="dusk"&&(i=17.7);let e=Math.sin((i-6)/12*Math.PI),n=jn(e*2.4+.25,0,1),s=jn(1-Math.abs(e)*4,0,1)*(e>-.25?1:0);$e=1-n,Ze.intensity=2.7*n+.55*$e,$e>.6?Ze.color.setHex(9414872):Ze.color.setHSL(.09,.6+s*.3,.85-s*.2),Yr.intensity=.62+.65*n,Yr.color.setHex(14413567).lerp(Wr.setHex(5928104),$e),Yr.groundColor.setHex(6122309).lerp(Wr.setHex(1843760),$e),Wr.copy(uv).lerp(cv,n).lerp(hv,s*.55),Ae.background.copy(Wr),Ae.fog.color.copy(Wr),ki.material.color.setRGB(.07,.09,.16).lerp(new gt(1,1,1),n).lerp(new gt(1.15,.72,.55),s*.6),$r.material.opacity=jn($e*1.3-.3,0,1),$r.visible=$r.material.opacity>.01,Ne.toneMappingExposure=1+$e*.25,Xr.material.color.setRGB(1,1,1).lerp(new gt(.12,.14,.2),$e).lerp(new gt(1.1,.75,.6),s*.7),mv(),pe.setNight($e),cs.setNight($e);let r=ar!==null?ar:$e>.35;Q.lightsOn!==r&&Q.setLights(r),Bi&&(Bi.intensity=Q.lightsOn?60*(.35+$e):0)}function dv(){let t=[],e=Te.far*.9;for(let s=0;s<900;s++){let r=Math.random()*Math.PI*2,a=Math.random()*.9+.08,o=Math.sqrt(1-a*a);t.push(Math.cos(r)*o*e,a*e,Math.sin(r)*o*e)}let n=new Pe;n.setAttribute("position",new Vt(t,3)),$r=new ta(n,new Lr({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),ki.add($r)}function fv(){or=new Pr;let i=new Jn(10,24,12),t=[],e=i.attributes.position;for(let n=0;n<e.count;n++)t.push(1,1,1);i.setAttribute("color",new Vt(t,3)),or.userData.sky=new Kt(i,new ce({vertexColors:!0,side:Ve})),or.add(or.userData.sky)}var ir=new gt,pv=new gt;function mv(){if(!th||Math.abs($e-Vd)<.08)return;Vd=$e;let i=or.userData.sky.geometry,t=i.attributes.position,e=i.attributes.color,n=new gt(4884165).lerp(new gt(461590),$e),s=Ae.background.clone(),r=new gt(5200442).lerp(new gt(461068),$e);for(let o=0;o<t.count;o++){let c=t.getY(o)/10;c>=0?ir.copy(s).lerp(n,Math.min(1,c*1.6)):ir.copy(s).lerp(r,Math.min(1,-c*3)),$e<.5&&c>.3&&t.getX(o)>4&&t.getZ(o)>2&&ir.lerp(pv.setRGB(2.2,2,1.7),.5),e.setXYZ(o,ir.r,ir.g,ir.b)}e.needsUpdate=!0;let a=th.fromScene(or,.02);Ae.environment&&Ae.environment.dispose(),Ae.environment=a.texture}function gv(i){jt.tt=(jt.tt||0)+i;let t=jt.tt*.08+jt.orbit,e=Q.model,n=Math.sin(Q.h),s=Math.cos(Q.h),r=Q.x+n*e.wb*.4,a=Q.z+s*e.wb*.4,o=11+(Q.trailer?6:0),c=Q.h+.7+Math.sin(t)*.9;Oe.position.set(r+Math.sin(c)*o,1.6+Math.sin(t*.7)*.6,a+Math.cos(c)*o);let l=Math.cos(c),h=-Math.sin(c);Oe.lookAt(r-l*3.2,1.9,a-h*3.2),Oe.fov=50,Oe.updateProjectionMatrix(),Te.shadows&&(Ze.target.position.set(Q.x,0,Q.z),Ze.position.set(Q.x+150,170,Q.z+95)),ki.position.copy(Oe.position)}function xv(){let i=new Jn(Te.far*.85,32,8,0,Math.PI*2,0,Math.PI*.42);Xr=new Kt(i,new ce({map:At.clouds(),transparent:!0,depthWrite:!1,fog:!1,side:Ve,opacity:.9})),Xr.material.map.repeat.set(3,1),Xr.renderOrder=-.5,ki.add(Xr)}function _v(){let i=new Jn(Te.far*.95,24,12),t=new gt(4030404),e=new gt(10274536),n=new gt(14543344),s=[],r=i.attributes.position,a=new gt;for(let o=0;o<r.count;o++){let c=r.getY(o)/(Te.far*.95);c>.25?a.copy(e).lerp(t,Math.min(1,(c-.25)/.75)):a.copy(n).lerp(e,Math.max(0,c/.25)),s.push(a.r,a.g,a.b)}i.setAttribute("color",new Vt(s,3)),ki=new Kt(i,new ce({vertexColors:!0,side:Ve,fog:!1,depthWrite:!1})),ki.renderOrder=-1,Ae.add(ki),dv(),xv()}function vv(){if(Q.world=pe,X.pos&&isFinite(X.pos.x)&&pe.resolveCircle({x:X.pos.x,z:X.pos.z},1.5,Jr)<=0){Q.place(X.pos.x,X.pos.z,X.pos.h);return}let i=pe.depots.garagem.zone;Q.place(i.x-8,i.z,Math.PI/2),Q.world=pe,Q.sync()}function yv(){Je=new ln;let i=new Kt(new We(1,1),new ce({map:At.zone(),color:16761856,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));i.rotation.x=-Math.PI/2,i.position.y=.08,Je.add(i),Je.zone=i;let t=new Kt(new Sn(3,3,120,20,1,!0),new ce({color:16758531,transparent:!0,opacity:.18,depthWrite:!1,side:de,fog:!1,blending:bn}));t.position.y=60,Je.add(t);let e=new Kt(new Ui(1.6,3.2,4),new ce({color:16761856}));e.rotation.x=Math.PI,Je.add(e),Je.cone=e,Je.visible=!1,Ae.add(Je);let n=new Ni;n.moveTo(0,1.6),n.lineTo(1.3,-.6),n.lineTo(0,0),n.lineTo(-1.3,-.6),n.closePath();let s=new ha(n);s.rotateX(Math.PI/2),Hn=new Kt(s,new ce({color:4120698,transparent:!0,opacity:.9,side:de,depthTest:!1})),Hn.renderOrder=10,Hn.visible=!1,Ae.add(Hn)}function Mv(i,t){let e=pe.depots[i],n=pe.depots[t];return $c(e.zone.x,e.zone.z,n).len}function bv(i,t,e){let n=Mv(t,e),s=n/1e3,r=Math.round((350+s*(900+i.t*115)*i.rate)/10)*10,a=Math.round(50+i.t*4+s*70),o=Math.round(n/8.5+90+i.t*1.5);return{cargo:i.id,from:t,to:e,dist:n,pay:r,xp:a,time:o}}function lh(){let i=[],t=Hr.filter(s=>s.lvl<=X.level+4),e=new Set,n=0;for(;i.length<10&&n++<200;){let s=t.filter(h=>h.lvl<=X.level),r=Math.random()<.78&&s.length?s:t,a=r[Math.random()*r.length|0],o=a.from[Math.random()*a.from.length|0],c=a.to[Math.random()*a.to.length|0],l=a.id+o+c;o===c||e.has(l)||(e.add(l),i.push(bv(a,o,c)))}return i.sort((s,r)=>(eh(s)?0:1)-(eh(r)?0:1)||nn[s.cargo].t-nn[r.cargo].t),i}function ch(i,t=Q.def){let e=nn[i.cargo];return e.lvl>X.level?`Requer n\xEDvel ${e.lvl}`:e.t>t.cap?`Caminh\xE3o fraco (m\xE1x. ${t.cap} t)`:t.rigid&&e.trailer!=="box"?"Requer cavalo mec\xE2nico":null}var eh=i=>!ch(i);function Zd(i){let t=hs[i];!t||!eh(t)||X.job||(X.job=xi(un({},t),{phase:"pickup",damage:0,tLeft:t.time}),hs.splice(i,1),re.beep(660,.1),re.beep(990,.12),Kr(),Gn(`Frete aceito! V\xE1 at\xE9 <b>${fi[t.from].name}</b>`),Zr=0,Ue())}function Jd(){if(!X.job)return;let i=X.job.phase==="deliver"?Math.round(X.job.pay*.25):0;X.money=Math.max(0,X.money-i),Q.detach(),X.job=null,Je.visible=!1,Hn.visible=!1,Gn(i?`Frete cancelado. Multa de ${xn(i)}`:"Frete cancelado"),Ue()}function Ya(){return X.job?pe.depots[X.job.phase==="pickup"?X.job.from:X.job.to]:null}function Kd(i){let t=Q.center({x:0,z:0}),e=i.zone;return Math.abs(t.x-e.x)<e.w/2+3&&Math.abs(t.z-e.z)<e.d/2+3}function Va(i){let t=X.job;if(!t){ct("progress").classList.add("hidden");return}t.phase==="deliver"&&(t.tLeft-=i);let e=Ya(),n=Kd(e),s=Q.speedKmh<1.5;if(n&&s){Vr+=i;let r=2.2;ct("progress").classList.remove("hidden"),ct("progtext").textContent=t.phase==="pickup"?"Carregando\u2026":"Descarregando\u2026",ct("progarc").style.strokeDashoffset=264*(1-Math.min(1,Vr/r)),Vr>=r&&(Vr=0,ct("progress").classList.add("hidden"),t.phase==="pickup"?(Q.attach(nn[t.cargo]),t.phase="deliver",t.tLeft=t.time,re.airBrake(),Gn(`Carga engatada: <b>${nn[t.cargo].name}</b> (${nn[t.cargo].t} t)`),Gn(`Entregue em <b>${fi[t.to].name}</b>`),Zr=0,Ue()):Sv())}else Vr=0,ct("progress").classList.add("hidden"),n&&!s&&Q.speedKmh<25&&!Va.warned&&(Gn("Pare na \xE1rea marcada"),Va.warned=!0),n||(Va.warned=!1)}function Sv(){let i=X.job,t=nn[i.cargo],e=i.pay,n=Math.round(e*i.damage/100),s=i.tLeft>=0,r=s?Math.round(e*.15):-Math.round(e*.2),a=Math.max(0,e-n+r),o=Math.round(i.xp*(i.damage<5?1.2:1)*(s?1:.7));X.money+=a,X.stats.deliveries++,X.stats.earned+=a,X.stats.tons+=t.t,Q.detach(),X.job=null,Je.visible=!1,Hn.visible=!1,re.airBrake(),re.beep(880,.12),setTimeout(()=>re.beep(1320,.18),120);let c=[["Pagamento base",xn(e)],[s?"B\xF4nus no prazo (+15%)":"Atraso (\u221220%)",(r>=0?"+":"")+xn(r)],[`Avaria da carga (${i.damage.toFixed(0)}%)`,"\u2212"+xn(n)],["Experi\xEAncia",`+${o} XP`]],l=wv(o);cr(`<h2>Entrega conclu\xEDda! \u2705</h2><div>${t.icon} ${t.name} \u2022 ${t.t} t \u2192 ${fi[i.to].name}</div>
    <div class="big">${xn(a)}</div>
    <div class="lines">${c.map(h=>`<div><span>${h[0]}</span><b>${h[1]}</b></div>`).join("")}</div>
    <button class="btn" data-act="popjobs">Pr\xF3ximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,l),hs=lh(),Ue()}function wv(i){X.xp+=i;let t=[];for(;X.level<30&&X.xp>=Js(X.level);)X.xp-=Js(X.level),X.level++,t.push(X.level);return t}function Ev(i){let t=Hr.filter(n=>n.lvl===i),e=Zs.filter(n=>n.level===i);re.beep(523,.12),setTimeout(()=>re.beep(659,.12),120),setTimeout(()=>re.beep(784,.25),240),cr(`<h2>\u2B50 N\xEDvel ${i}!</h2><div>Voc\xEA subiu de n\xEDvel.</div>
    <div class="lines">${t.map(n=>`<div><span>${n.icon} Nova carga: ${n.name}</span><b>${n.t} t</b></div>`).join("")}
    ${e.map(n=>`<div><span>\u{1F69A} Novo caminh\xE3o: ${n.name}</span><b>${xn(n.price)}</b></div>`).join("")}
    ${!t.length&&!e.length?"<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>":""}</div>
    <button class="btn" data-act="popclose">Show!</button>`)}function Tv(){let i=(h,u)=>{let d=g=>{if(g.preventDefault(),Rt[u]=!0,h.classList.add("on"),re.init(),h.setPointerCapture&&g.pointerId!==void 0)try{h.setPointerCapture(g.pointerId)}catch(x){}},p=g=>{g.preventDefault(),Rt[u]=!1,h.classList.remove("on")};h.addEventListener("pointerdown",d),h.addEventListener("pointerup",p),h.addEventListener("pointercancel",p),h.addEventListener("lostpointercapture",p),h.addEventListener("contextmenu",g=>g.preventDefault())};i(ct("gas"),"gas"),i(ct("brake"),"brake"),i(ct("left"),"left"),i(ct("right"),"right");let t=ct("wheel"),e=null,n=h=>{let u=t.getBoundingClientRect();return Math.atan2(h.clientX-(u.left+u.width/2),-(h.clientY-(u.top+u.height/2)))};t.addEventListener("pointerdown",h=>{h.preventDefault(),re.init();let u=t.getBoundingClientRect();Math.hypot(h.clientX-(u.left+u.width/2),h.clientY-(u.top+u.height/2))<u.width*.17?(re.horn(!0),e={horn:!0,id:h.pointerId}):(e={id:h.pointerId,a0:n(h),w0:Rt.wheel},Rt.wheelHeld=!0);try{t.setPointerCapture(h.pointerId)}catch(p){}}),t.addEventListener("pointermove",h=>{if(!e||e.horn||h.pointerId!==e.id)return;let u=n(h)-e.a0;u=Math.atan2(Math.sin(u),Math.cos(u)),Rt.wheel=jn(e.w0+u*180/Math.PI,-150,150),e.a0=n(h),e.w0=Rt.wheel});let s=()=>{e&&e.horn&&re.horn(!1),e=null,Rt.wheelHeld=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s),document.querySelectorAll("#gearsel button").forEach(h=>h.addEventListener("pointerdown",u=>{u.preventDefault(),Wa(h.dataset.g)}));let r=h=>{Rt.blink=Rt.blink===h?0:h,Rt.blinkArm=!1,rr=0,re.init(),re.beep(1500,.03,"square",.06)};ct("blinkL").addEventListener("pointerdown",h=>{h.preventDefault(),r(-1)}),ct("blinkR").addEventListener("pointerdown",h=>{h.preventDefault(),r(1)}),ct("ic-haz").addEventListener("pointerdown",h=>{h.preventDefault(),r(2)}),window.__setBlink=r,ct("ic-hand").addEventListener("pointerdown",h=>{h.preventDefault(),Rt.hand=!Rt.hand,re.airBrake()}),ct("lightsbtn").addEventListener("pointerdown",h=>{h.preventDefault(),ar=!Q.lightsOn,Q.setLights(ar),re.beep(1400,.04,"square",.08)}),ct("enginebtn").addEventListener("click",Xd);let a={ArrowUp:"gas",KeyW:"gas",ArrowDown:"brake",KeyS:"brake",Space:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",h=>{re.init(),a[h.code]&&(Rt[a[h.code]]=!0,h.preventDefault()),h.code==="KeyH"&&re.horn(!0),h.code==="KeyR"&&!h.repeat&&Wa(Rt.gear==="R"?"D":"R"),h.code==="KeyN"&&!h.repeat&&Wa("N"),h.code==="KeyE"&&!h.repeat&&Xd(),h.code==="KeyL"&&!h.repeat&&(ar=!Q.lightsOn,Q.setLights(ar)),h.code==="KeyP"&&!h.repeat&&(Rt.hand=!Rt.hand),h.code==="KeyZ"&&!h.repeat&&window.__setBlink(-1),h.code==="KeyX"&&!h.repeat&&window.__setBlink(1),h.code==="KeyC"&&!h.repeat&&jd(),h.code==="KeyM"&&!h.repeat&&ih(),h.code==="Escape"&&Wd()}),window.addEventListener("keyup",h=>{a[h.code]&&(Rt[a[h.code]]=!1),h.code==="KeyH"&&re.horn(!1)});let o=ct("gl"),c=null;o.addEventListener("pointerdown",h=>{c={x:h.clientX,id:h.pointerId}}),window.addEventListener("pointermove",h=>{!c||h.pointerId!==c.id||(jt.orbit+=(h.clientX-c.x)*.008,c.x=h.clientX,jt.orbitT=1.8)});let l=h=>{c&&h.pointerId===c.id&&(c=null)};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),window.addEventListener("devicemotion",h=>{var g,x;let u=h.accelerationIncludingGravity;if(!u||u.y==null)return;let d=(x=(g=screen.orientation&&screen.orientation.angle)!=null?g:window.orientation)!=null?x:90,p=d===90?1:d===270||d===-90?-1:0;Rt.tilt=jn(p?-u.y*p/4.5:-u.x/4.5,-1,1)}),window.addEventListener("resize",sf),document.addEventListener("visibilitychange",()=>{document.hidden?(re.suspend(),Ue()):(re.resume(),qa=performance.now())}),window.addEventListener("pagehide",Ue),window.onAndroidBack=()=>Wd()}function Wd(){return ct("bigmap").classList.contains("hidden")?ct("popup").classList.contains("hidden")?ct("modal").classList.contains("hidden")?Le==="drive"?(qr("settings"),!0):(Ue(),!1):(Kr(),!0):(sh(),!0):(ct("bigmap").classList.add("hidden"),!0)}function Wa(i){Rt.gear=i,document.querySelectorAll("#gearsel button").forEach(t=>t.classList.toggle("on",t.dataset.g===i)),re.beep(i==="R"?500:700,.05,"square",.06)}var lr=0,rr=0;function Xd(){Q.engineOn||lr>0||(re.init(),lr=1.1,ct("enginebtn").classList.add("starting"),re.starter())}function nh(i){let t=(s,r,a,o)=>s+jn(r-s,-o*i,a*i),e=Le==="drive";lr>0&&(lr-=i,lr<=0&&(Q.engineOn=!0,ct("enginebtn").classList.add("hidden"),ct("enginebtn").classList.remove("starting"))),hn.throttle=t(hn.throttle,e&&Rt.gas?1:0,2.5,6),hn.brake=t(hn.brake,e&&Rt.brake?1:0,6,8),hn.gear=X.settings.gearbox==="auto"?"auto":Rt.gear,hn.handbrake=Rt.hand,e&&Rt.gas&&!Q.engineOn&&lr<=0&&!nh.warned&&(Gn("Ligue o motor primeiro"),nh.warned=!0),Rt.wheelHeld||(Rt.wheel*=Math.max(0,1-i*7));let n=0;if(X.settings.steer==="tilt"?(n=Math.abs(Rt.tilt)<.06?0:Rt.tilt,Rt.wheel=-n*150):X.settings.steer==="wheel"&&(n=-Rt.wheel/150),n+=(Rt.left?1:0)-(Rt.right?1:0),n=e?jn(n,-1,1):0,hn.steer=X.settings.steer==="wheel"&&Rt.wheelHeld?n:t(hn.steer,n,2.4,4),Math.abs(hn.steer)<.01&&n===0&&(hn.steer=0),ct("wheel").style.transform=`rotate(${(-hn.steer*150).toFixed(1)}deg)`,(Rt.blink===-1||Rt.blink===1)&&(hn.steer*-Rt.blink>.3?Rt.blinkArm=!0:Rt.blinkArm&&Math.abs(hn.steer)<.06&&(Rt.blink=0,Rt.blinkArm=!1)),Rt.blink){let s=rr%.8<.4;rr+=i;let r=rr%.8<.4;r!==s&&re.beep(r?1300:900,.025,"square",.05),Q.setBlink(Rt.blink,r),ct("blinkL").classList.toggle("on",r&&(Rt.blink===-1||Rt.blink===2)),ct("blinkR").classList.toggle("on",r&&(Rt.blink===1||Rt.blink===2)),ct("ic-bl").classList.toggle("on",r&&(Rt.blink===-1||Rt.blink===2)),ct("ic-br").classList.toggle("on",r&&(Rt.blink===1||Rt.blink===2)),ct("ic-haz").classList.toggle("on",Rt.blink===2)}else if(rr!==0){rr=0,Q.setBlink(0,!1);for(let s of["blinkL","blinkR","ic-bl","ic-br","ic-haz"])ct(s).classList.remove("on")}}function jd(){jt.mode=(jt.mode+1)%3,X.settings.camera=jt.mode,Gn(["C\xE2mera: Persegui\xE7\xE3o","C\xE2mera: A\xE9rea","C\xE2mera: Cabine"][jt.mode],1200)}var Jc={x:0,z:0},Jr={x:0,z:0};function hh(i,t=!1){Math.hypot(jt.pos.x-Q.x,jt.pos.z-Q.z)>150&&(t=!0);let e=Q.model;jt.orbitT>0?jt.orbitT-=i:jt.orbit*=Math.max(0,1-i*2.5);let n=Q.h;Q.v<-.5&&jt.mode!==2&&(n=Q.h);let s=t?1:1-Math.exp(-i*(jt.mode===2?12:2.6)),r=n+jt.orbit-jt.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),jt.yaw+=r*s;let a=Math.sin(Q.h),o=Math.cos(Q.h);if(jt.mode===2){let c=Q.x+a*(e.zf-.7)-Math.cos(Q.h)*.45,l=Q.z+o*(e.zf-.7)+Math.sin(Q.h)*.45;Oe.position.set(c,Q.y+(Q.def.id==="urbano"?2.3:2.75),l);let h=Math.sin(jt.yaw),u=Math.cos(jt.yaw);Oe.lookAt(c+h*20,Q.y+2+Math.sin(Q.pitch)*20,l+u*20),Oe.fov=70}else{let c=Q.trailer?Q.trailer.Lt:0,l=(jt.mode===0?11:20)+c*(jt.mode===0?.75:1.1),h=(jt.mode===0?4.6:14)+c*(jt.mode===0?.18:.4),u=Q.x+a*e.wb*.5-(Q.trailer?Math.sin(Q.th)*c*.25:0),d=Q.z+o*e.wb*.5-(Q.trailer?Math.cos(Q.th)*c*.25:0),p=Math.sin(jt.yaw),g=Math.cos(jt.yaw);for(let _=0;_<6&&(Jc.x=u-p*l,Jc.z=d-g*l,!(pe.resolveCircle(Jc,.6,Jr,!0)<=0||h>30));_++)l*=.8;let x=u-p*l,f=d-g*l,m=t?1:1-Math.exp(-i*8);jt.pos.x+=(x-jt.pos.x)*m,jt.pos.z+=(f-jt.pos.z)*m;let v=Q.y+h;jt.pos.y+=(v-jt.pos.y)*m,Oe.position.copy(jt.pos),Oe.lookAt(u,Q.y+(jt.mode===1?1.5:1.3),d),Oe.fov=58+Math.min(8,Q.speedKmh*.08)}Oe.updateProjectionMatrix(),Te.shadows&&(Ze.target.position.set(Q.x,0,Q.z),Ze.position.set(Q.x+150,170,Q.z+95)),ki.position.copy(Oe.position)}var _e=null;function Av(){let i=()=>new Path2D;_e={blocks:{},lots:i(),roads:i(),hw:i(),river:i(),fields:i(),hills:i()};let t={downtown:"#8b95a3",residential:"#a8a294",town:"#b4ab98",park:"#4f8a3a",industrial:"#8d8473",port:"#7b8790"};for(let n of On){for(let s=0;s<n.nx;s++)for(let r=0;r<n.nz;r++){let a=wa(n,s,r);(_e.blocks[t[a]]=_e.blocks[t[a]]||i()).rect(n.x0+s*140+10,n.z0+r*140+10,120,120)}for(let s=0;s<=n.nx;s++)_e.roads.moveTo(n.x0+s*140,n.z0),_e.roads.lineTo(n.x0+s*140,$s(n));for(let s=0;s<=n.nz;s++)_e.roads.moveTo(n.x0,n.z0+s*140),_e.roads.lineTo(as(n),n.z0+s*140)}for(let n of Bn){let[s,r,a,o]=pe.depots[n.id].lot;_e.lots.rect(s,r,a-s,o-r)}for(let n of pe.hws){_e.hw.moveTo(n.x[0],n.z[0]);for(let s=1;s<n.n;s+=2)_e.hw.lineTo(n.x[s],n.z[s]);_e.hw.lineTo(n.x[n.n-1],n.z[n.n-1])}let e=pe.river;_e.river.moveTo(e.x[0],e.z[0]);for(let n=1;n<e.n;n++)_e.river.lineTo(e.x[n],e.z[n]);for(let n of pe.fields)_e.fields.rect(n.x0,n.z0,n.x1-n.x0,n.z1-n.z0);for(let n of pe.hills)_e.hills.moveTo(n.x+n.r*.85,n.z),_e.hills.arc(n.x,n.z,n.r*.85,0,Math.PI*2)}function Qd(i,t){i.fillStyle="#3d5a34",i.fillRect(we.x0-3e3,we.z0-3e3,12e3,12e3),i.fillStyle="#34502d",i.fill(_e.hills),i.fillStyle="#9a9356",i.fill(_e.fields),i.fillStyle="#2d6f93",i.fillRect(we.x0-3e3,1790,12e3,4e3),i.lineCap="round",i.lineJoin="round",i.strokeStyle="#2d6f93",i.lineWidth=Math.max(di,3/t),i.stroke(_e.river);for(let e in _e.blocks)i.fillStyle=e,i.fill(_e.blocks[e]);i.fillStyle="#cfc9bd",i.fill(_e.lots),i.strokeStyle="#26282c",i.lineWidth=Math.max(20,3/t),i.lineCap="square",i.stroke(_e.roads),i.lineCap="round",i.strokeStyle="#1d1f22",i.lineWidth=Math.max(9*2+4,4.5/t),i.stroke(_e.hw),i.strokeStyle="#4a4d52",i.lineWidth=Math.max(9*2,3/t),i.stroke(_e.hw)}function tf(i,t,e,n,s){i.fillStyle=n,i.strokeStyle="#fff",i.lineWidth=s*.3,i.beginPath(),i.arc(t,e,s,0,7),i.fill(),i.stroke()}function Rv(){let i=ct("minimap"),t=i.getContext("2d"),e=i.width,n=i.height,s=.75;t.setTransform(1,0,0,1,0,0),t.translate(e/2,n*.62),t.rotate(Math.PI+Q.h),t.scale(s,s),t.translate(-Q.x,-Q.z),Qd(t,s),kn&&X.job&&(t.strokeStyle=ur(),t.lineWidth=8/s,t.beginPath(),kn.path.forEach((a,o)=>o?t.lineTo(a.x,a.z):t.moveTo(a.x,a.z)),t.stroke());let r=Ya();for(let a of Bn){let o=pe.depots[a.id];tf(t,o.zone.x,o.zone.z,r===o?ur():a.id==="garagem"?"#2f6fde":"rgba(30,30,30,0.85)",(r===o?9:6)/s)}t.fillStyle="rgba(255,255,255,0.7)";for(let a of cs.cars)a.mode&&t.fillRect(a.x-2/s,a.z-2/s,4/s,4/s);t.setTransform(1,0,0,1,0,0),t.translate(e/2,n*.62),t.fillStyle="#3ee07a",t.strokeStyle="#0b1a10",t.lineWidth=3,t.beginPath(),t.moveTo(0,-14),t.lineTo(10,11),t.lineTo(0,5),t.lineTo(-10,11),t.closePath(),t.fill(),t.stroke(),t.setTransform(1,0,0,1,0,0)}function ih(){let i=ct("bigmap"),t=ct("bigmapc");i.classList.remove("hidden");let e=Math.min(2,window.devicePixelRatio||1),n=window.innerWidth*.96,s=window.innerHeight*.92,r=we.x1-we.x0,a=we.z1-we.z0,o=Math.min(n/r,s/a);t.width=r*o*e,t.height=a*o*e,t.style.width=r*o+"px",t.style.height=a*o+"px";let c=t.getContext("2d"),l=o*e;c.setTransform(l,0,0,l,-we.x0*l,-we.z0*l),Qd(c,l),kn&&X.job&&(c.strokeStyle=ur(),c.lineWidth=5/l,c.beginPath(),kn.path.forEach((d,p)=>p?c.lineTo(d.x,d.z):c.moveTo(d.x,d.z)),c.stroke());let h=Ya();c.textAlign="center";let u=(d,p,g,x,f="#fff")=>{c.font=`700 ${x/l}px sans-serif`,c.lineWidth=3/l,c.strokeStyle="rgba(0,0,0,0.85)",c.strokeText(d,p,g),c.fillStyle=f,c.fillText(d,p,g)};for(let d of On)u(d.name.toUpperCase(),(d.x0+as(d))/2,d.z0-40,15*e,"#ffe08a");for(let d of pe.hws){let p=d.n/2|0;u(d.id,d.x[p],d.z[p]-20,10*e,"#cfe8ff")}for(let d of Bn){let p=pe.depots[d.id];tf(c,p.zone.x,p.zone.z,h===p?ur():d.id==="garagem"?"#2f6fde":"#222",6*e/l),u(d.name,p.zone.x,p.zone.z-14*e/l,10*e)}c.save(),c.translate(Q.x,Q.z),c.rotate(Math.PI+Q.h),c.scale(e/l,e/l),c.fillStyle="#3ee07a",c.strokeStyle="#000",c.lineWidth=2,c.beginPath(),c.moveTo(0,-12),c.lineTo(9,10),c.lineTo(0,5),c.lineTo(-9,10),c.closePath(),c.fill(),c.stroke(),c.restore()}var Cv="jobs";function Pv(){document.body.addEventListener("click",i=>{let t=i.target.closest("[data-act],[data-tab]");if(!t)return;if(re.init(),t.dataset.tab){En(t.dataset.tab);return}let e=t.dataset.act,n=t.dataset.arg;if(e==="jobs"||e==="garage"||e==="settings")qr(e);else if(e==="menu"||e==="pause")qr("settings");else if(e==="rename"){let s=prompt("Nome do motorista:",X.name);s&&s.trim()&&(X.name=s.trim().slice(0,18),Ue(),jr())}else e==="map"?ih():e==="gauge"?(X.settings.gauge=n,Ue(),En("settings")):e==="accent"?(X.settings.accent=n,Kc(),Ue(),En("settings")):e==="hudsize"?(X.settings.hud=n,Kc(),Ue(),En("settings")):e==="gearbox"?(X.settings.gearbox=n,ct("gearsel").classList.toggle("hidden",n==="auto"),Ue(),En("settings")):e==="timemode"?(X.settings.time=n,Ue(),Xa(X.clock),En("settings")):e==="tomenu"?(Kr(),Ue(),jr()):e==="camera"?jd():e==="close"?Kr():e==="accept"?Zd(+n):e==="refresh"?(hs=lh(),En("jobs")):e==="cancel"?(Jd(),En("jobs")):e==="buy"?Uv(n):e==="use"?ef(n):e==="popclose"?sh():e==="popjobs"?(sh(),qr("jobs")):e==="closemap"?ct("bigmap").classList.add("hidden"):e==="quality"?(X.settings.quality=n,Ue(),En("settings"),Gn("Reiniciando para aplicar\u2026"),setTimeout(()=>location.reload(),500)):e==="steermode"?(X.settings.steer=n,qd(),Ue(),En("settings")):e==="fps"?(X.settings.fps=!X.settings.fps,ct("fps").classList.toggle("hidden",!X.settings.fps),Ue(),En("settings")):e==="reset"?confirm("Apagar todo o progresso?")&&(localStorage.removeItem(ah),location.reload()):e==="rescue"&&(Fv(),Kr())}),ct("mapwrap").addEventListener("click",ih),ct("fps").classList.toggle("hidden",!X.settings.fps),ct("tabbody").addEventListener("input",i=>{i.target.id==="vol"&&(X.settings.volume=+i.target.value,re.setVolume(X.settings.volume),Ue())}),qd(),Kc(),Wa("D"),ct("gearsel").classList.toggle("hidden",X.settings.gearbox==="auto"),ct("play").addEventListener("click",()=>{re.init(),ct("title").classList.add("hidden"),ct("hud").classList.remove("hidden"),Le="drive",Q.engineOn||ct("enginebtn").classList.remove("hidden"),hh(0,!0),sf(),rh=3;try{document.documentElement.requestFullscreen&&!window.AndroidBridge&&document.documentElement.requestFullscreen().catch(()=>{})}catch(i){}!X.job&&X.stats.deliveries===0&&setTimeout(()=>qr("jobs"),400)})}function qd(){let i=ct("wheelwrap");i.classList.toggle("buttons",X.settings.steer==="buttons"),i.classList.toggle("tilt",X.settings.steer==="tilt")}function jr(){Le="title",jt.tt=0,ct("hud").classList.add("hidden"),ct("title").classList.remove("hidden"),ct("pname").textContent=X.name,ct("plvl").textContent=`N\xEDvel ${X.level} \u2022 ${X.xp}/${Js(X.level)} XP`,ct("tmoney").textContent=xn(X.money);let i=Q.def;ct("tiname").textContent=i.name,ct("tispecs").innerHTML=`<span>${i.hp} cv</span><span>${i.cap} t</span><span>${i.vmax} km/h</span><span>${i.rigid?"R\xEDgido":"Cavalo "+i.cfg}</span>`;let t=X.job;ct("tjob").innerHTML=t?`${nn[t.cargo].icon} ${nn[t.cargo].name} \u2192 <b>${fi[t.phase==="pickup"?t.from:t.to].name}</b>`:"Nenhum frete ativo",ct("tstats").innerHTML=`<div><b>${X.stats.deliveries}</b><small>entregas</small></div><div><b>${X.stats.km.toFixed(0)}</b><small>km</small></div><div><b>${X.stats.tons.toFixed(0)}</b><small>toneladas</small></div><div><b>${X.owned.length}</b><small>caminh\xF5es</small></div>`}function qr(i){Le=Le==="title"?"title":"menu",ct("modal").classList.remove("hidden"),Rt.gas=Rt.brake=Rt.left=Rt.right=!1,document.querySelectorAll(".pad").forEach(t=>t.classList.remove("on")),En(i)}function Kr(){ct("modal").classList.add("hidden"),Le==="title"&&jr(),Le==="menu"&&(Le="drive")}function cr(i,t=[]){ct("popcard").innerHTML=i,ct("popup").classList.remove("hidden"),Le=Le==="drive"?"menu":Le,cr.queue=t}function sh(){ct("popup").classList.add("hidden"),ct("modal").classList.contains("hidden")&&(Le="drive");let i=cr.queue||[];if(i.length){let t=i.shift();cr.queue=i,Ev(t),cr.queue=i}}function En(i){Cv=i,document.querySelectorAll(".tabs [data-tab]").forEach(e=>e.classList.toggle("on",e.dataset.tab===i));let t=ct("tabbody");i==="jobs"?t.innerHTML=Iv():i==="garage"?t.innerHTML=Dv():i==="profile"?t.innerHTML=Nv():t.innerHTML=zv(),t.scrollTop=0}function Lv(i,t){let e=nn[i.cargo],n=ch(i),s=[e.fragile?'<span class="chip tag">Fr\xE1gil</span>':"",e.hazard?'<span class="chip tag">Perigosa</span>':"",e.trailer==="lowboy"?'<span class="chip tag">Indivis\xEDvel</span>':""].join("");return`<div class="card ${n?"locked":""}">
    <div class="ic">${e.icon}</div><h3>${e.name}</h3><div class="t">${e.t} toneladas</div>
    <div class="route">\u{1F4CD} ${fi[i.from].name} \u2192 \u{1F3C1} ${fi[i.to].name}</div>
    <div class="row"><span class="chip pay">${xn(i.pay)}</span><span class="chip xp">+${i.xp} XP</span><span class="chip">${(i.dist/1e3).toFixed(1)} km</span><span class="chip">\u23F1 ${Math.ceil(i.time/60)} min</span>${s}</div>
    ${n?`<div class="row"><span class="chip warn">\u{1F512} ${n}</span></div>`:`<button class="btn" data-act="accept" data-arg="${t}" ${X.job?"disabled":""}>Aceitar frete</button>`}
  </div>`}function Iv(){let i="";if(X.job){let t=X.job,e=nn[t.cargo];i=`<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${e.icon}</div><h3>Frete ativo: ${e.name} (${e.t} t)</h3>
      <div class="route">${t.phase==="pickup"?"Coletar em":"Entregar em"} <b>${fi[t.phase==="pickup"?t.from:t.to].name}</b> \u2022 Avaria ${t.damage.toFixed(0)}% \u2022 Pagamento ${xn(t.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${t.phase==="deliver"?" (multa 25%)":""}</button></div>`}return`${i}<div class="tbar"><div class="grow">Caminh\xE3o atual: <b>${Q.def.name}</b> \u2014 at\xE9 <b>${Q.def.cap} t</b> \u2022 N\xEDvel ${X.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">\u{1F504} Atualizar</button></div>
    <div class="grid">${hs.map(Lv).join("")}</div>`}function Dv(){return`<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${xn(X.money)}</b> \u2022 A for\xE7a do caminh\xE3o define as cargas que ele consegue puxar.</div></div><div class="grid">`+Zs.map(e=>{let n=X.owned.includes(e.id),s=X.truck===e.id,r=e.level>X.level,a;s?a='<button class="btn alt" disabled>Em uso</button>':n?a=`<button class="btn" data-act="use" data-arg="${e.id}">Usar</button>`:r?a=`<span class="chip warn">\u{1F512} N\xEDvel ${e.level}</span>`:a=`<button class="btn" data-act="buy" data-arg="${e.id}" ${X.money<e.price?"disabled":""}>Comprar ${xn(e.price)}</button>`;let o="#"+new gt(e.color).getHexString();return`<div class="card ${r&&!n?"locked":""}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${o}, #1b2230)">${e.rigid?"\u{1F69A}":"\u{1F69B}"}</div>
        <h3>${e.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${e.desc}</div>
        <div class="stat"><span>Pot\xEAncia</span><b>${e.hp} cv</b></div><div class="meter"><i style="width:${e.hp/750*100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${e.cap} t</b></div><div class="meter"><i style="width:${e.cap/90*100}%"></i></div>
        <div class="stat"><span>Velocidade m\xE1x.</span><b>${e.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${e.rigid?"R\xEDgido (ba\xFA)":`Cavalo mec\xE2nico ${e.cfg}`}</b></div>
        ${a}</div>`}).join("")+"</div>"}function Uv(i){let t=kr[i];!t||X.owned.includes(i)||X.money<t.price||t.level>X.level||(X.money-=t.price,X.owned.push(i),re.beep(784,.1),re.beep(1046,.15),Gn(`Voc\xEA comprou o <b>${t.name}</b>!`),ef(i))}function ef(i){let t=kr[i];if(X.owned.includes(i)){if(X.job&&X.job.phase==="deliver"){Gn("Conclua ou cancele o frete antes de trocar");return}X.truck=i,Q.setTruck(t),X.job&&ch(X.job,t)&&Jd(),Ue(),En("garage"),Le==="title"&&jr()}}function Nv(){let i=X.stats,t=Js(X.level),e=Hr.filter(n=>n.lvl>X.level).slice(0,4);return`<div class="grid">
    <div class="card"><h3>\u2B50 N\xEDvel ${X.level}${X.level>=30?" (m\xE1ximo)":""}</h3><div class="meter" style="margin-top:8px"><i style="width:${X.xp/t*100}%"></i></div>
      <div class="stat"><span>Experi\xEAncia</span><b>${X.xp} / ${t} XP</b></div><div class="stat"><span>Saldo</span><b>${xn(X.money)}</b></div>
      <div class="stat"><span>Caminh\xF5es</span><b>${X.owned.length} / ${Zs.length}</b></div></div>
    <div class="card"><h3>\u{1F4CA} Estat\xEDsticas</h3>
      <div class="stat"><span>Entregas</span><b>${i.deliveries}</b></div><div class="stat"><span>Dist\xE2ncia</span><b>${i.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${i.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${xn(i.earned)}</b></div>
      <div class="stat"><span>Colis\xF5es</span><b>${i.crashes}</b></div></div>
    <div class="card"><h3>\u{1F513} Pr\xF3ximas cargas</h3>${e.map(n=>`<div class="stat"><span>${n.icon} ${n.name} (${n.t} t)</span><b>N\xEDvel ${n.lvl}</b></div>`).join("")||'<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`}function zv(){let i=(t,e,n)=>`<div class="seg">${n.map(([s,r])=>`<button data-act="${t}" data-arg="${s}" class="${e===s?"on":""}">${r}</button>`).join("")}</div>`;return`<div class="set"><div><b>Qualidade gr\xE1fica</b><br><small style="opacity:.7">Atual: ${gi==="low"?"Leve":gi==="medium"?"M\xE9dio":"Ultra"} \u2022 resolu\xE7\xE3o din\xE2mica ativa</small></div>
      ${i("quality",X.settings.quality,[["auto","Auto"],["low","Leve"],["medium","M\xE9dio"],["high","Ultra"]])}</div>
    <div class="set"><div><b>Dire\xE7\xE3o</b><br><small style="opacity:.7">Volante, setas ou inclina\xE7\xE3o do celular</small></div>
      ${i("steermode",X.settings.steer,[["wheel","Volante"],["buttons","Setas"],["tilt","Inclina\xE7\xE3o"]])}</div>
    <div class="set"><div><b>C\xE2mbio</b><br><small style="opacity:.7">Manual D/N/R ou autom\xE1tico (segurar freio parado = r\xE9)</small></div>
      ${i("gearbox",X.settings.gearbox,[["manual","D / N / R"],["auto","Autom\xE1tico"]])}</div>
    <div class="set"><div><b>Hor\xE1rio</b><br><small style="opacity:.7">Ciclo de dia e noite com far\xF3is e ilumina\xE7\xE3o urbana</small></div>
      ${i("timemode",X.settings.time,[["cycle","Ciclo"],["day","Dia"],["dusk","Entardecer"],["night","Noite"]])}</div>
    <div class="set"><div><b>Veloc\xEDmetro</b><br><small style="opacity:.7">Estilo dos mostradores do painel</small></div>
      ${i("gauge",X.settings.gauge,[["analog","Anal\xF3gico"],["digital","Digital"],["sport","Esportivo"],["classic","Cl\xE1ssico"]])}</div>
    <div class="set"><div><b>Cor do painel</b><br><small style="opacity:.7">Cor de destaque da interface</small></div>
      ${i("accent",X.settings.accent,[["amber","\xC2mbar"],["blue","Azul"],["green","Verde"],["red","Vermelho"],["purple","Roxo"]])}</div>
    <div class="set"><div><b>Tamanho dos controles</b></div>
      ${i("hudsize",X.settings.hud,[["small","Pequeno"],["normal","Normal"],["large","Grande"]])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${X.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${i("fps",X.settings.fps?1:0,[[1,"Sim"],[0,"N\xE3o"]])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminh\xE3o de volta para a rua mais pr\xF3xima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">Z/X pisca-pisca \u2022 WASD/setas \u2022 Espa\xE7o freio \u2022 E motor \u2022 R r\xE9 \u2022 N neutro \u2022 P freio de m\xE3o \u2022 L far\xF3is \u2022 H buzina \u2022 C c\xE2mera \u2022 M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao menu</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`}function Fv(){let i=pe.hw(Q.x,Q.z);if(i&&!pe.inArea(Q.x,Q.z,0)){let t=i.o;Q.place(i.x-t.dz[i.i]*3.5,i.z+t.dx[i.i]*3.5,Math.atan2(t.dx[i.i],t.dz[i.i]))}else{let t={x:Q.x,z:Q.z};for(let e=0;e<40&&!(pe.resolveCircle(t,2.5,Jr)<=0);e++)t.x+=Jr.x*1.2+(Math.random()-.5),t.z+=Jr.z*1.2+(Math.random()-.5);Q.place(t.x,t.z,Q.h)}hh(0,!0)}var Yd={amber:"#f5a623",blue:"#2f8cff",green:"#22b573",red:"#e3243b",purple:"#9b5cff"},ur=()=>Yd[X.settings.accent]||Yd.amber;function Kc(){let i=ur();document.documentElement.style.setProperty("--red",i),document.documentElement.style.setProperty("--red2",i),document.documentElement.style.setProperty("--hud",{small:.82,normal:1,large:1.18}[X.settings.hud]||1)}function Gn(i,t=2600){let e=document.createElement("div");for(e.innerHTML=i,ct("toast").appendChild(e);ct("toast").children.length>3;)ct("toast").firstChild.remove();setTimeout(()=>e.remove(),t)}var jc=0;function $d(i,t,e,n,s,r,a,o){let c=ct(i),l=c.getContext("2d"),h=c.width,u=h/2,d=h*.46,p=X.settings.gauge,g=ur();l.clearRect(0,0,h,h);let x=Math.PI*.75,f=Math.PI*2.25,m=E=>x+(f-x)*jn(E/e,0,1);if(l.textAlign="center",l.textBaseline="middle",p==="digital"){l.fillStyle="rgba(6,10,16,0.88)",l.beginPath(),l.arc(u,u,d,0,7),l.fill(),l.lineWidth=3,l.strokeStyle=g,l.stroke();let E=24,T=jn(t/e,0,1);for(let P=0;P<E;P++){let B=x+(f-x)*(P+.5)/E;l.strokeStyle=P/E<T?o&&P/E*e>=o?"#ff3b4e":g:"rgba(255,255,255,0.1)",l.lineWidth=h*.05,l.beginPath(),l.arc(u,u,d*.8,B-.05,B+.05),l.stroke()}l.fillStyle="#e8fff8",l.font=`700 ${h*.24}px monospace`,l.fillText(r,u,u),l.font=`600 ${h*.06}px sans-serif`,l.fillStyle=g,l.fillText(a,u,u+h*.17);return}if(p==="sport"){l.fillStyle="rgba(10,12,16,0.85)",l.beginPath(),l.arc(u,u,d,0,7),l.fill(),l.lineCap="round",l.lineWidth=h*.09,l.strokeStyle="rgba(255,255,255,0.08)",l.beginPath(),l.arc(u,u,d*.78,x,f),l.stroke();let E=l.createLinearGradient(0,h,h,0);E.addColorStop(0,g),E.addColorStop(1,"#ff3b4e"),l.strokeStyle=E,l.beginPath(),l.arc(u,u,d*.78,x,m(t)),l.stroke(),l.lineCap="butt",l.fillStyle="#fff",l.font=`italic 900 ${h*.22}px sans-serif`,l.fillText(r,u,u-h*.02),l.font=`italic 700 ${h*.06}px sans-serif`,l.fillStyle="#9aa7b4",l.fillText(a,u,u+h*.15);return}let v=p==="classic";l.beginPath(),l.arc(u,u,d,0,7);let _=l.createRadialGradient(u,u,d*.2,u,u,d);v?(_.addColorStop(0,"#f4efe2"),_.addColorStop(1,"#d9d0bb")):(_.addColorStop(0,"rgba(30,34,40,0.95)"),_.addColorStop(1,"rgba(8,10,14,0.92)")),l.fillStyle=_,l.fill(),l.lineWidth=h*.035,l.strokeStyle=v?"#b8bcc0":g,l.stroke(),o&&(l.beginPath(),l.arc(u,u,d*.86,m(o),f),l.lineWidth=h*.03,l.strokeStyle="rgba(227,36,59,.85)",l.stroke());let M=v?"#1b1b1b":"#fff";l.fillStyle=M,l.strokeStyle=M,l.font=`${v?"":"italic "}800 ${h*.07}px ${v?"serif":"sans-serif"}`;for(let E=0;E<=e;E+=n/2){let T=m(E),P=E%n===0;l.lineWidth=P?3:1.5,l.beginPath(),l.moveTo(u+Math.cos(T)*d*.9,u+Math.sin(T)*d*.9),l.lineTo(u+Math.cos(T)*d*(P?.76:.82),u+Math.sin(T)*d*(P?.76:.82)),l.stroke(),P&&l.fillText(String(s(E)),u+Math.cos(T)*d*.6,u+Math.sin(T)*d*.6)}let L=m(t);l.strokeStyle=v?"#c0392b":g,l.lineWidth=h*.025,l.lineCap="round",l.beginPath(),l.moveTo(u-Math.cos(L)*d*.1,u-Math.sin(L)*d*.1),l.lineTo(u+Math.cos(L)*d*.86,u+Math.sin(L)*d*.86),l.stroke(),l.lineCap="butt",l.beginPath(),l.arc(u,u,d*.3,0,7),l.fillStyle=v?"#2b2b2b":"#0b0d11",l.fill(),l.fillStyle="#fff",l.font=`italic 900 ${h*.15}px sans-serif`,l.fillText(r,u,u-h*.01),l.font=`italic 700 ${h*.055}px sans-serif`,l.fillStyle=v?"#555":"#9aa7b4",l.fillText(a,u,u+h*.1+(v?h*.12:0))}function Ov(i){jc-=i;let t=Q.speedKmh;$d("spdg",t,120,20,r=>r,String(Math.round(t)),"km/h",100);let e=Q.rpm*2500;if($d("rpmg",e/100,25,5,r=>r,Q.engineOn?Q.gear||"N":"OFF","x100 rpm",21),jc>0)return;jc=.2,ct("lvl").textContent="Nv "+X.level,ct("money").textContent=xn(X.money);let n=Js(X.level);ct("xpbar").style.width=(X.level>=30?100:X.xp/n*100)+"%",ct("ic-load").textContent=`${(Q.mass/1e3).toFixed(1)} t`,ct("ic-light").classList.toggle("on",Q.lightsOn),ct("lightsbtn").classList.toggle("on",Q.lightsOn),ct("ic-hand").classList.toggle("on",Rt.hand);let s=X.job;if(s){let r=nn[s.cargo],a=kn?kn.len:0;ct("jobtitle").textContent=`${r.icon} ${r.name} \u2022 ${r.t} t`;let o=fi[s.phase==="pickup"?s.from:s.to].name,c="";if(s.phase==="deliver"){let l=Math.abs(s.tLeft),h=Math.floor(l/60),u=Math.floor(l%60);c=` \u2022 <span class="${s.tLeft<0?"late":""}">\u23F1 ${s.tLeft<0?"-":""}${h}:${String(u).padStart(2,"0")}</span>`}ct("jobsub").innerHTML=`${s.phase==="pickup"?"Coletar":"Entregar"}: <b>${o}</b> \u2022 ${(a/1e3).toFixed(1)} km${c}`,ct("dist").textContent=a>1e3?(a/1e3).toFixed(1)+" km":Math.round(a)+" m",ct("ic-dmg").classList.toggle("hidden",s.phase!=="deliver"),ct("dmg").textContent=s.damage.toFixed(0)+"%"}else ct("jobtitle").textContent="Sem frete ativo",ct("jobsub").innerHTML="Toque em \u{1F4CB} para escolher uma carga",ct("dist").textContent="",ct("ic-dmg").classList.add("hidden")}var rh=0,qa=0,hr=0,Ha=0,Ga=0,Qc=0,sr=0;function nf(i){if(requestAnimationFrame(nf),document.hidden)return;let t=(i-qa)/1e3;if(qa=i,!(t>0))return;if(t=Math.min(t,.05),hr+=t,Ha++,Ga+=t,Ga>=1.5){let n=Ha/Ga;Hv(n),X.settings.fps&&(ct("fps").textContent=`${n.toFixed(0)} FPS \u2022 ${gi} \u2022 ${mi.toFixed(2)}x \u2022 ${Ne.info.render.calls} dc`),Ha=0,Ga=0}if(nh(t),Le==="title"){sr-=t,sr<=0&&(sr=.5,Xa(X.clock)),cs.obstacles(Zc),cs.update(t,Q,Q._cs||[]),pe.update(t,hr),gv(t),re.engine(0,0,!1),Ne.render(Ae,Oe);return}if(X.settings.time==="cycle"&&Le==="drive"&&(X.clock=(X.clock+t/50)%24),sr-=t,sr<=0&&(sr=.5,Xa(X.clock)),Le==="drive"){cs.obstacles(Zc);let n=2;for(let r=0;r<n;r++)Q.update(t/n,hn,pe,Zc);Q.lastImpact>0&&Bv(Q.lastImpact),X.stats.km+=Math.abs(Q.v)*t/1e3;let s=Q._cs||[];cs.update(t,Q,s),Le==="drive"&&Va(t)}pe.update(t,hr),kv(t),hh(t),re.engine(Q.rpm,hn.throttle,Q.engineOn&&Le==="drive"),Ov(t),Ha&1||Rv(),Qc+=t,Qc>8&&(Qc=0,Ue()),Ne.render(Ae,Oe),rh>0&&--rh===0&&Ae.traverse(n=>{n.material&&[].concat(n.material).forEach(s=>{s.needsUpdate=!0})})}function Bv(i){if(X.stats.crashes++,re.crash(i),navigator.vibrate)try{navigator.vibrate(Math.min(120,i*4))}catch(t){}if(X.job&&X.job.phase==="deliver"){let t=nn[X.job.cargo],e=Math.min(30,i*(t.fragile?.55:.3));X.job.damage=Math.min(100,X.job.damage+e),Gn(`\u{1F4A5} Batida! Carga avariada +${e.toFixed(0)}%`,1800)}}function kv(i){let t=Ya();if(!t){Je.visible=!1,Hn.visible=!1;return}Zr-=i,Zr<=0&&(kn=$c(Q.x,Q.z,t),Zr=.5),Je.visible=!0,Je.position.set(t.zone.x,0,t.zone.z),Je.zone.scale.set(t.zone.w,t.zone.d,1);let e=Kd(t);Je.zone.material.color.setHex(e?4120698:16761856),Je.cone.position.y=7+Math.sin(hr*3)*.8,Je.cone.rotation.y=hr*1.5;let n=null;if(kn)for(let s=1;s<kn.path.length;s++){let r=kn.path[s];if(Math.hypot(r.x-Q.x,r.z-Q.z)>22||s===kn.path.length-1){n=r;break}}if(n&&jt.mode!==2){Hn.visible=!0;let s=Math.sin(Q.h),r=Math.cos(Q.h);Hn.position.set(Q.x+s*Q.model.zf*.5,(Q.def.id==="urbano"?4.2:5.4)+Math.sin(hr*4)*.12,Q.z+r*Q.model.zf*.5),Hn.rotation.y=Math.atan2(n.x-Q.x,n.z-Q.z)}else Hn.visible=!1}function Hv(i){let t=window.devicePixelRatio||1,e=Math.min(t,Te.pr),n=mi;i<27?n=Math.max(Te.minPr*Math.min(1,t),mi*.88):i>52&&(n=Math.min(e,mi*1.06)),Math.abs(n-mi)>.01&&(mi=n,Ne.setPixelRatio(mi),Ne.setSize(window.innerWidth,window.innerHeight,!1))}function sf(){Ne&&(Ne.setSize(window.innerWidth,window.innerHeight,!1),Oe.aspect=window.innerWidth/window.innerHeight,Oe.updateProjectionMatrix())}window.addEventListener("error",i=>{let t=ct("loadmsg");t&&Le==="loading"&&(t.textContent="Erro: "+i.message)});window.__game={TRUCK:kr,CARGO:nn,get scene(){return Ae},get sun(){return Ze},get renderer(){return Ne},S:X,get rig(){return Q},get state(){return Le},ctl:Rt,acceptJob:i=>Zd(i),get jobs(){return hs},world:()=>pe,cam:jt};lv().catch(i=>{ct("loadmsg").textContent="Erro ao iniciar: "+i.message,console.error(i)});})();
