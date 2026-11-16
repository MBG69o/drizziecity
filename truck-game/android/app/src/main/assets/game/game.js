(()=>{var Zp=Object.defineProperty,Jp=Object.defineProperties;var Qp=Object.getOwnPropertyDescriptors;var Fd=Object.getOwnPropertySymbols;var em=Object.prototype.hasOwnProperty,tm=Object.prototype.propertyIsEnumerable;var zd=(s,e,t)=>e in s?Zp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Gt=(s,e)=>{for(var t in e||(e={}))em.call(e,t)&&zd(s,t,e[t]);if(Fd)for(var t of Fd(e))tm.call(e,t)&&zd(s,t,e[t]);return s},Ni=(s,e)=>Jp(s,Qp(e));var gh="162";var nm=0,kd=1,im=2;var cc=1,bh=2,wi=3,ci=0,zt=1,ht=2,Wi=0,ar=1,Cn=2,Bd=3,Hd=4,sm=5,ps=100,rm=101,am=102,Gd=103,Vd=104,om=200,cm=201,lm=202,hm=203,Rl=204,Cl=205,dm=206,um=207,fm=208,pm=209,mm=210,gm=211,bm=212,xm=213,vm=214,_m=0,ym=1,Mm=2,Ao=3,Sm=4,wm=5,Em=6,Tm=7,lc=0,Am=1,Rm=2,qi=0,Cm=1,Pm=2,Lm=3,xh=4,Im=5,Dm=6,Nm=7,Wd="attached",Um="detached",Df=300,lr=301,hr=302,Pl=303,Ll=304,hc=306,Ai=1e3,xn=1001,la=1002,Wt=1003,Ro=1004;var ms=1005;var Vt=1006,ia=1007;var zn=1008;var Xi=1009,Om=1010,Fm=1011,vh=1012,Nf=1013,Gi=1014,$n=1015,ha=1016,Uf=1017,Of=1018,xs=1020,zm=1021,Fn=1023,km=1024,Bm=1025,vs=1026,dr=1027,Ff=1028,zf=1029,Hm=1030,kf=1031,Bf=1033,Vc=33776,Wc=33777,qc=33778,Xc=33779,qd=35840,Xd=35841,jd=35842,Yd=35843,Hf=36196,Kd=37492,$d=37496,Zd=37808,Jd=37809,Qd=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,au=37817,ou=37818,cu=37819,lu=37820,hu=37821,jc=36492,du=36494,uu=36495,Gm=36283,fu=36284,pu=36285,mu=36286;var ur=2300,_s=2301,Yc=2302,gu=2400,bu=2401,xu=2402,Vm=2500;var Gf=0,dc=1,Ta=2,Wm=3200,_h=3201,uc=0,qm=1,Hi="",Ft="srgb",tn="srgb-linear",yh="display-p3",fc="display-p3-linear",Co="linear",Mt="srgb",Po="rec709",Lo="p3";var Os=7680;var vu=519,Xm=512,jm=513,Ym=514,Vf=515,Km=516,$m=517,Zm=518,Jm=519,Il=35044;var _u="300 es",Dl=1035,Ti=2e3,Io=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,sa=Math.PI/180,fr=180/Math.PI;function kn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function Mh(s,e){return(s%e+e)%e}function Qm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function e0(s,e,t){return s!==e?(t-s)/(e-s):0}function ra(s,e,t){return(1-t)*s+t*e}function t0(s,e,t,n){return ra(s,e,1-Math.exp(-t*n))}function n0(s,e=1){return e-Math.abs(Mh(s,e*2)-e)}function i0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function s0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function r0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function a0(s,e){return s+Math.random()*(e-s)}function o0(s){return s*(.5-Math.random())}function c0(s){s!==void 0&&(yu=s);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l0(s){return s*sa}function h0(s){return s*fr}function Nl(s){return(s&s-1)===0&&s!==0}function d0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Do(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function u0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Wf={DEG2RAD:sa,RAD2DEG:fr,generateUUID:kn,clamp:qt,euclideanModulo:Mh,mapLinear:Qm,inverseLerp:e0,lerp:ra,damp:t0,pingpong:n0,smoothstep:i0,smootherstep:s0,randInt:r0,randFloat:a0,randFloatSpread:o0,seededRandom:c0,degToRad:l0,radToDeg:h0,isPowerOfTwo:Nl,ceilPowerOfTwo:d0,floorPowerOfTwo:Do,setQuaternionFromProperEuler:u0,normalize:pt,denormalize:Zn},ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],x=i[1],v=i[4],y=i[7],A=i[2],w=i[5],T=i[8];return r[0]=a*b+o*x+l*A,r[3]=a*m+o*v+l*w,r[6]=a*p+o*y+l*T,r[1]=c*b+h*x+d*A,r[4]=c*m+h*v+d*w,r[7]=c*p+h*y+d*T,r[2]=u*b+f*x+g*A,r[5]=u*m+f*v+g*w,r[8]=u*p+f*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=d*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=u*b,e[4]=(h*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kc=new Ye;function qf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function da(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function f0(){let s=da("canvas");return s.style.display="block",s}var Mu={};function Xf(s){s in Mu||(Mu[s]=!0,console.warn(s))}var Su=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[tn]:{transfer:Co,primaries:Po,toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:Mt,primaries:Po,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fc]:{transfer:Co,primaries:Lo,toReference:s=>s.applyMatrix3(wu),fromReference:s=>s.applyMatrix3(Su)},[yh]:{transfer:Mt,primaries:Lo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(wu),fromReference:s=>s.applyMatrix3(Su).convertLinearToSRGB()}},p0=new Set([tn,fc]),ut={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!p0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=ja[e].toReference,i=ja[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ja[s].primaries},getTransfer:function(s){return s===Hi?Co:ja[s].transfer}};function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $c(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fs,No=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=da("canvas")),Fs.width=e.width,Fs.height=e.height;let n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=da("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=or(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m0=0,Uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Zc(i[a].image)):r.push(Zc(i[a]))}else r=Zc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?No.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var g0=0,en=class s extends Yi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=xn,i=xn,r=Vt,a=zn,o=Fn,l=Xi,c=s.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=kn(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Df;en.DEFAULT_ANISOTROPY=1;var mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,A=(p+1)/2,w=(h+u)/4,T=(d+b)/4,P=(g+m)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=T/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=P/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-b)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ol=class extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(d!==b||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),w=Math.atan2(A,p*x);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let y=o*x;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+b*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new D,Eu=new Pn,Mn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Ka.subVectors(this.max,jr),zs.subVectors(e.a,jr),ks.subVectors(e.b,jr),Bs.subVectors(e.c,jr),Ui.subVectors(ks,zs),Oi.subVectors(Bs,ks),os.subVectors(zs,Bs);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!Qc(t,zs,ks,Bs,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,zs,ks,Bs,Ka))?!1:($a.crossVectors(Ui,Oi),t=[$a.x,$a.y,$a.z],Qc(t,zs,ks,Bs,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new D,new D,new D,new D,new D,new D,new D,new D],jn=new D,Ya=new Mn,zs=new D,ks=new D,Bs=new D,Ui=new D,Oi=new D,os=new D,jr=new D,Ka=new D,$a=new D,cs=new D;function Qc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){cs.fromArray(s,r);let o=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var b0=new Mn,Yr=new D,el=new D,Ln=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):b0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(el)),this.expandByPoint(Yr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new D,tl=new D,Za=new D,Fi=new D,nl=new D,Ja=new D,il=new D,pr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tl.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=Fi.dot(this.direction),l=-Fi.dot(Za),c=Fi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tl).addScaledVector(Za,u),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),i=vi.dot(vi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,i,r){nl.subVectors(t,e),Ja.subVectors(n,e),il.crossVectors(nl,Ja);let a=this.direction.dot(il),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);let l=o*this.direction.dot(Ja.crossVectors(Fi,Ja));if(l<0)return null;let c=o*this.direction.dot(nl.cross(Fi));if(c<0||l+c>a)return null;let h=-o*Fi.dot(il);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class s{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,b,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,b=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,b=c*d;t[0]=u+b*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,b=c*d;t[0]=u-b*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,b=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+b,t[1]=l*d,t[5]=b*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=b-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x0,e,v0)}lookAt(e,t,n){let i=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),zi.crossVectors(n,An),zi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),zi.crossVectors(n,An)),zi.normalize(),Qa.crossVectors(An,zi),i[0]=zi.x,i[4]=Qa.x,i[8]=An.x,i[1]=zi.y,i[5]=Qa.y,i[9]=An.y,i[2]=zi.z,i[6]=Qa.z,i[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],v=n[7],y=n[11],A=n[15],w=i[0],T=i[4],P=i[8],B=i[12],S=i[1],R=i[5],W=i[9],q=i[13],E=i[2],I=i[6],M=i[10],F=i[14],H=i[3],z=i[7],G=i[11],te=i[15];return r[0]=a*w+o*S+l*E+c*H,r[4]=a*T+o*R+l*I+c*z,r[8]=a*P+o*W+l*M+c*G,r[12]=a*B+o*q+l*F+c*te,r[1]=h*w+d*S+u*E+f*H,r[5]=h*T+d*R+u*I+f*z,r[9]=h*P+d*W+u*M+f*G,r[13]=h*B+d*q+u*F+f*te,r[2]=g*w+b*S+m*E+p*H,r[6]=g*T+b*R+m*I+p*z,r[10]=g*P+b*W+m*M+p*G,r[14]=g*B+b*q+m*F+p*te,r[3]=x*w+v*S+y*E+A*H,r[7]=x*T+v*R+y*I+A*z,r[11]=x*P+v*W+y*M+A*G,r[15]=x*B+v*q+y*F+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+b*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],x=d*m*c-b*u*c+b*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,y=h*b*c-g*d*c+g*o*f-a*b*f-h*o*p+a*d*p,A=g*d*l-h*b*l-g*o*u+a*b*u+h*o*m-a*d*m,w=t*x+n*v+i*y+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=x*T,e[1]=(b*u*r-d*m*r-b*i*f+n*m*f+d*i*p-n*u*p)*T,e[2]=(o*m*r-b*l*r+b*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*T,e[4]=v*T,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*T,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*T,e[8]=y*T,e[9]=(g*d*r-h*b*r-g*n*f+t*b*f+h*n*p-t*d*p)*T,e[10]=(a*b*r-g*o*r+g*n*c-t*b*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*T,e[12]=A*T,e[13]=(h*b*i-g*d*i+g*n*u-t*b*u-h*n*m+t*d*m)*T,e[14]=(g*o*i-a*b*i-g*n*l+t*b*l+a*n*m-t*o*m)*T,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,b=a*h,m=a*d,p=o*d,x=l*c,v=l*h,y=l*d,A=n.x,w=n.y,T=n.z;return i[0]=(1-(b+p))*A,i[1]=(f+y)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+v)*T,i[9]=(m-x)*T,i[10]=(1-(u+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Hs.set(i[0],i[1],i[2]).length(),a=Hs.set(i[4],i[5],i[6]).length(),o=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);let c=1/r,h=1/a,d=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,t.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ti){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,g;if(o===Ti)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Io)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ti){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h,g,b;if(o===Ti)g=(a+r)*d,b=-2*d;else if(o===Io)g=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new D,Yn=new Ge,x0=new D(0,0,0),v0=new D(1,1,1),zi=new D,Qa=new D,An=new D,Tu=new Ge,Au=new Pn,Sn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_0=0,Ru=new D,Gs=new Pn,_i=new Ge,eo=new D,Kr=new D,y0=new D,M0=new Pn,Cu=new D(1,0,0),Pu=new D(0,1,0),Lu=new D(0,0,1),S0={type:"added"},w0={type:"removed"},sl={type:"childadded",child:null},rl={type:"childremoved",child:null},yt=class s extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Sn,n=new Pn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ye}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Kr,eo,this.up):_i.lookAt(eo,Kr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(_i),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(S0),sl.child=e,this.dispatchEvent(sl),sl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new D,yi=new D,al=new D,Mi=new D,Vs=new D,Ws=new D,Iu=new D,ol=new D,cl=new D,ll=new D,bs=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kn.subVectors(i,t),yi.subVectors(n,t),al.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(yi),l=Kn.dot(al),c=yi.dot(yi),h=yi.dot(al),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),yi.subVectors(e,t),Kn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Vs.subVectors(i,n),Ws.subVectors(r,n),ol.subVectors(e,n);let l=Vs.dot(ol),c=Ws.dot(ol);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,i);let h=Vs.dot(cl),d=Ws.dot(cl);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vs,a);ll.subVectors(e,r);let f=Vs.dot(ll),g=Ws.dot(ll);if(g>=0&&f<=g)return t.copy(r);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ws,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Iu.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Iu,o);let p=1/(m+b+u);return a=b*p,o=u*p,t.copy(n).addScaledVector(Vs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},to={h:0,s:0,l:0};function hl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Mh(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hl(a,r,e+1/3),this.g=hl(a,r,e),this.b=hl(a,r,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ut.fromWorkingColorSpace(hn.copy(this),e),Math.round(qt(hn.r*255,0,255))*65536+Math.round(qt(hn.g*255,0,255))*256+Math.round(qt(hn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,i=hn.g,r=hn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ft){ut.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,i=hn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(to);let n=ra(ki.h,to.h,t),i=ra(ki.s,to.s,t),r=ra(ki.l,to.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new le;le.NAMES=jf;var E0=0,dn=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ar,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},st=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new D,no=new ae,jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}};var mr=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gr=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},T0=0,On=new Ge,dl=new yt,qs=new D,Rn=new Mn,$r=new Mn,Qt=new D,gt=class s extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?gr:mr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Rn.min,$r.min),Rn.expandByPoint(Qt),Qt.addVectors(Rn.max,$r.max),Rn.expandByPoint(Qt)):(Rn.expandByPoint($r.min),Rn.expandByPoint($r.max))}Rn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qt.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),Qt.add(qs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;let c=new D,h=new D,d=new D,u=new ae,f=new ae,g=new ae,b=new D,m=new D;function p(P,B,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,B),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(b),o[B].add(b),o[S].add(b),l[P].add(m),l[B].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,B=x.length;P<B;++P){let S=x[P],R=S.start,W=S.count;for(let q=R,E=R+W;q<E;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let v=new D,y=new D,A=new D,w=new D;function T(P){A.fromBufferAttribute(i,P),w.copy(A);let B=o[P];v.copy(B),v.sub(A.multiplyScalar(A.dot(B))).normalize(),y.crossVectors(w,B);let R=y.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,B=x.length;P<B;++P){let S=x[P],R=S.start,W=S.count;for(let q=R,E=R+W;q<E;q+=3)T(e.getX(q+0)),T(e.getX(q+1)),T(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new Ge,ls=new pr,io=new Ln,Nu=new D,Xs=new D,js=new D,Ys=new D,ul=new D,so=new D,ro=new ae,ao=new ae,oo=new ae,Uu=new D,Ou=new D,Fu=new D,co=new D,lo=new D,Fe=class extends yt{constructor(e=new gt,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ul.fromBufferAttribute(d,e),a?so.addScaledVector(ul,h):so.addScaledVector(ul.sub(t),h))}t.add(so)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(io.containsPoint(ls.origin)===!1&&(ls.intersectSphere(io,Nu)===null||ls.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=v;y<A;y+=3){let w=o.getX(y),T=o.getX(y+1),P=o.getX(y+2);i=ho(this,p,e,n,c,h,d,w,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=ho(this,a,e,n,c,h,d,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=v;y<A;y+=3){let w=y,T=y+1,P=y+2;i=ho(this,p,e,n,c,h,d,w,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let x=m,v=m+1,y=m+2;i=ho(this,a,e,n,c,h,d,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function A0(s,e,t,n,i,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ci,o),l===null)return null;lo.copy(o),lo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:s}}function ho(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Xs),s.getVertexPosition(l,js),s.getVertexPosition(c,Ys);let h=A0(s,e,t,n,Xs,js,Ys,co);if(h){i&&(ro.fromBufferAttribute(i,o),ao.fromBufferAttribute(i,l),oo.fromBufferAttribute(i,c),h.uv=bs.getInterpolation(co,Xs,js,Ys,ro,ao,oo,new ae)),r&&(ro.fromBufferAttribute(r,o),ao.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,c),h.uv1=bs.getInterpolation(co,Xs,js,Ys,ro,ao,oo,new ae)),a&&(Uu.fromBufferAttribute(a,o),Ou.fromBufferAttribute(a,l),Fu.fromBufferAttribute(a,c),h.normal=bs.getInterpolation(co,Xs,js,Ys,Uu,Ou,Fu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};bs.getNormal(Xs,js,Ys,d.normal),h.face=d}return h}var un=class s extends gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function g(b,m,p,x,v,y,A,w,T,P,B){let S=y/T,R=A/P,W=y/2,q=A/2,E=w/2,I=T+1,M=P+1,F=0,H=0,z=new D;for(let G=0;G<M;G++){let te=G*R-q;for(let be=0;be<I;be++){let Ue=be*S-W;z[b]=Ue*x,z[m]=te*v,z[p]=E,c.push(z.x,z.y,z.z),z[b]=0,z[m]=0,z[p]=w>0?1:-1,h.push(z.x,z.y,z.z),d.push(be/T),d.push(1-G/P),F+=1}}for(let G=0;G<P;G++)for(let te=0;te<T;te++){let be=u+te+I*G,Ue=u+te+I*(G+1),Z=u+(te+1)+I*(G+1),oe=u+(te+1)+I*G;l.push(be,Ue,oe),l.push(Ue,Z,oe),H+=6}o.addGroup(f,H,B),f+=H,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(s){let e={};for(let t=0;t<s.length;t++){let n=br(s[t]);for(let i in n)e[i]=n[i]}return e}function R0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yf(s){return s.getRenderTarget()===null?s.outputColorSpace:ut.workingColorSpace}var Sh={clone:br,merge:bn},C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zo=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new D,zu=new ae,ku=new ae,Xt=class extends zo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,zu,ku),t.subVectors(ku,zu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ks=-90,$s=1,Fl=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(Ks,$s,e,t);i.layers=this.layers,this.add(i);let r=new Xt(Ks,$s,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Ks,$s,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Ks,$s,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Ks,$s,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Ks,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ko=class extends en{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zl=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ko(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new un(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Wi});r.uniforms.tEquirect.value=t;let a=new Fe(i,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Vt),new Fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},fl=new D,L0=new D,I0=new Ye,Ei=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fl.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||I0.getNormalMatrix(e),i=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Ln,uo=new D,ua=class{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,m-f,y-p).normalize(),n[1].setComponents(l+r,u+c,m+f,y+p).normalize(),n[2].setComponents(l+a,u+h,m+g,y+x).normalize(),n[3].setComponents(l-a,u-h,m-g,y-x).normalize(),n[4].setComponents(l-o,u-d,m-b,y-v).normalize(),t===Ti)n[5].setComponents(l+o,u+d,m+b,y+v).normalize();else if(t===Io)n[5].setComponents(o,d,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(uo.x=i.normal.x>0?e.max.x:e.min.x,uo.y=i.normal.y>0?e.max.y:e.min.y,uo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function D0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,u=c.usage,f=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),c.onUploadCallback();let b;if(d instanceof Float32Array)b=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=s.SHORT;else if(d instanceof Uint32Array)b=s.UNSIGNED_INT;else if(d instanceof Int32Array)b=s.INT;else if(d instanceof Int8Array)b=s.BYTE;else if(d instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var kt=class s extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let x=p*u-a;for(let v=0;v<c;v++){let y=v*d-r;g.push(y,-x,0),b.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let v=x+c*p,y=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;f.push(v,y,w),f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`
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
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
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
#endif`,Dg=`struct PhysicalMaterial {
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
}`,Ng=`
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
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
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
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
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sb=`#ifdef USE_SKINNING
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
#endif`,wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Gb=`#define DISTANCE
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
}`,Vb=`#define DISTANCE
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,Kb=`uniform vec3 diffuse;
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
}`,$b=`#define LAMBERT
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
}`,Zb=`#define LAMBERT
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
}`,Jb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,ox=`#define TOON
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
}`,cx=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:N0,alphahash_pars_fragment:U0,alphamap_fragment:O0,alphamap_pars_fragment:F0,alphatest_fragment:z0,alphatest_pars_fragment:k0,aomap_fragment:B0,aomap_pars_fragment:H0,batching_pars_vertex:G0,batching_vertex:V0,begin_vertex:W0,beginnormal_vertex:q0,bsdfs:X0,iridescence_fragment:j0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:J0,color_fragment:Q0,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:cg,emissivemap_pars_fragment:lg,colorspace_fragment:hg,colorspace_pars_fragment:dg,envmap_fragment:ug,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Ag,envmap_vertex:gg,fog_vertex:bg,fog_pars_vertex:xg,fog_fragment:vg,fog_pars_fragment:_g,gradientmap_pars_fragment:yg,lightmap_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Tg,lights_toon_fragment:Rg,lights_toon_pars_fragment:Cg,lights_phong_fragment:Pg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Dg,lights_fragment_begin:Ng,lights_fragment_maps:Ug,lights_fragment_end:Og,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Bg,map_fragment:Hg,map_pars_fragment:Gg,map_particle_fragment:Vg,map_particle_pars_fragment:Wg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:jg,morphcolor_vertex:Yg,morphnormal_vertex:Kg,morphtarget_pars_vertex:$g,morphtarget_vertex:Zg,normal_fragment_begin:Jg,normal_fragment_maps:Qg,normal_pars_fragment:eb,normal_pars_vertex:tb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:ab,iridescence_pars_fragment:ob,opaque_fragment:cb,packing:lb,premultiplied_alpha_fragment:hb,project_vertex:db,dithering_fragment:ub,dithering_pars_fragment:fb,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:bb,shadowmap_vertex:xb,shadowmask_pars_fragment:vb,skinbase_vertex:_b,skinning_pars_vertex:yb,skinning_vertex:Mb,skinnormal_vertex:Sb,specularmap_fragment:wb,specularmap_pars_fragment:Eb,tonemapping_fragment:Tb,tonemapping_pars_fragment:Ab,transmission_fragment:Rb,transmission_pars_fragment:Cb,uv_pars_fragment:Pb,uv_pars_vertex:Lb,uv_vertex:Ib,worldpos_vertex:Db,background_vert:Nb,background_frag:Ub,backgroundCube_vert:Ob,backgroundCube_frag:Fb,cube_vert:zb,cube_frag:kb,depth_vert:Bb,depth_frag:Hb,distanceRGBA_vert:Gb,distanceRGBA_frag:Vb,equirect_vert:Wb,equirect_frag:qb,linedashed_vert:Xb,linedashed_frag:jb,meshbasic_vert:Yb,meshbasic_frag:Kb,meshlambert_vert:$b,meshlambert_frag:Zb,meshmatcap_vert:Jb,meshmatcap_frag:Qb,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ax,meshtoon_frag:ox,points_vert:cx,points_frag:lx,shadow_vert:hx,shadow_frag:dx,sprite_vert:ux,sprite_frag:fx},ge={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},oi={basic:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new le(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:bn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:bn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new le(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:bn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:bn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:bn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:bn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:bn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:bn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:bn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:bn([ge.lights,ge.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};oi.physical={uniforms:bn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var fo={r:0,b:0,g:0},ds=new Sn,px=new Ge;function mx(s,e,t,n,i,r,a){let o=new le(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?b(o,l):v&&v.isColor&&(b(v,1),x=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===hc)?(h===void 0&&(h=new Fe(new un(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:br(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ds.copy(p.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(ds)),h.material.toneMapped=ut.getTransfer(v.colorSpace)!==Mt,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Fe(new kt(2,2),new Bn({name:"BackgroundMaterial",uniforms:br(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function b(m,p){m.getRGB(fo,Yf(s)),n.buffers.color.setClear(fo.r,fo.g,fo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,b(o,l)},render:g}}function gx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(E,I,M,F,H){let z=!1;if(a){let G=b(F,M,I);c!==G&&(c=G,f(c.object)),z=p(E,F,M,H),z&&x(E,F,M,H)}else{let G=I.wireframe===!0;(c.geometry!==F.id||c.program!==M.id||c.wireframe!==G)&&(c.geometry=F.id,c.program=M.id,c.wireframe=G,z=!0)}H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,P(E,I,M,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(E){return n.isWebGL2?s.bindVertexArray(E):r.bindVertexArrayOES(E)}function g(E){return n.isWebGL2?s.deleteVertexArray(E):r.deleteVertexArrayOES(E)}function b(E,I,M){let F=M.wireframe===!0,H=o[E.id];H===void 0&&(H={},o[E.id]=H);let z=H[I.id];z===void 0&&(z={},H[I.id]=z);let G=z[F];return G===void 0&&(G=m(u()),z[F]=G),G}function m(E){let I=[],M=[],F=[];for(let H=0;H<i;H++)I[H]=0,M[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:M,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,I,M,F){let H=c.attributes,z=I.attributes,G=0,te=M.getAttributes();for(let be in te)if(te[be].location>=0){let Z=H[be],oe=z[be];if(oe===void 0&&(be==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),be==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;G++}return c.attributesNum!==G||c.index!==F}function x(E,I,M,F){let H={},z=I.attributes,G=0,te=M.getAttributes();for(let be in te)if(te[be].location>=0){let Z=z[be];Z===void 0&&(be==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),be==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor));let oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),H[be]=oe,G++}c.attributes=H,c.attributesNum=G,c.index=F}function v(){let E=c.newAttributes;for(let I=0,M=E.length;I<M;I++)E[I]=0}function y(E){A(E,0)}function A(E,I){let M=c.newAttributes,F=c.enabledAttributes,H=c.attributeDivisors;M[E]=1,F[E]===0&&(s.enableVertexAttribArray(E),F[E]=1),H[E]!==I&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](E,I),H[E]=I)}function w(){let E=c.newAttributes,I=c.enabledAttributes;for(let M=0,F=I.length;M<F;M++)I[M]!==E[M]&&(s.disableVertexAttribArray(M),I[M]=0)}function T(E,I,M,F,H,z,G){G===!0?s.vertexAttribIPointer(E,I,M,H,z):s.vertexAttribPointer(E,I,M,F,H,z)}function P(E,I,M,F){if(n.isWebGL2===!1&&(E.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let H=F.attributes,z=M.getAttributes(),G=I.defaultAttributeValues;for(let te in z){let be=z[te];if(be.location>=0){let Ue=H[te];if(Ue===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(Ue=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(Ue=E.instanceColor)),Ue!==void 0){let Z=Ue.normalized,oe=Ue.itemSize,Me=t.get(Ue);if(Me===void 0)continue;let Ie=Me.buffer,Ae=Me.type,Ee=Me.bytesPerElement,Xe=n.isWebGL2===!0&&(Ae===s.INT||Ae===s.UNSIGNED_INT||Ue.gpuType===Nf);if(Ue.isInterleavedBufferAttribute){let Pe=Ue.data,N=Pe.stride,ue=Ue.offset;if(Pe.isInstancedInterleavedBuffer){for(let ee=0;ee<be.locationSize;ee++)A(be.location+ee,Pe.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ee=0;ee<be.locationSize;ee++)y(be.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ee=0;ee<be.locationSize;ee++)T(be.location+ee,oe/be.locationSize,Ae,Z,N*Ee,(ue+oe/be.locationSize*ee)*Ee,Xe)}else{if(Ue.isInstancedBufferAttribute){for(let Pe=0;Pe<be.locationSize;Pe++)A(be.location+Pe,Ue.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Pe=0;Pe<be.locationSize;Pe++)y(be.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Pe=0;Pe<be.locationSize;Pe++)T(be.location+Pe,oe/be.locationSize,Ae,Z,oe*Ee,oe/be.locationSize*Pe*Ee,Xe)}}else if(G!==void 0){let Z=G[te];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(be.location,Z);break;case 3:s.vertexAttrib3fv(be.location,Z);break;case 4:s.vertexAttrib4fv(be.location,Z);break;default:s.vertexAttrib1fv(be.location,Z)}}}}w()}function B(){W();for(let E in o){let I=o[E];for(let M in I){let F=I[M];for(let H in F)g(F[H].object),delete F[H];delete I[M]}delete o[E]}}function S(E){if(o[E.id]===void 0)return;let I=o[E.id];for(let M in I){let F=I[M];for(let H in F)g(F[H].object),delete F[H];delete I[M]}delete o[E.id]}function R(E){for(let I in o){let M=o[I];if(M[E.id]===void 0)continue;let F=M[E.id];for(let H in F)g(F[H].object),delete F[H];delete M[E.id]}}function W(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:q,dispose:B,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function bx(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=d[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=a||e.has("OES_texture_float"),A=v&&y,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:w}}function vx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ei,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,v=x*4,y=p.clippingState||null;l.value=y,y=h(g,u,v,f);for(let A=0;A!==v;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=f+b*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==b;++v,y+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function _x(s){let e=new WeakMap;function t(a,o){return o===Pl?a.mapping=lr:o===Ll&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pl||o===Ll)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new zl(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var xr=class extends zo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ir=4,Bu=[.125,.215,.35,.446,.526,.582],gs=20,pl=new xr,Hu=new le,ml=null,gl=0,bl=0,fs=(1+Math.sqrt(5))/2,Zs=1/fs,Gu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,fs,Zs),new D(0,fs,-Zs),new D(Zs,0,fs),new D(-Zs,0,fs),new D(fs,Zs,0),new D(-fs,Zs,0)],vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,bl),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ha,format:Fn,colorSpace:tn,depthBuffer:!1},i=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(r)),this._blurMaterial=Mx(r,e,t)}return i}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,i){let o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Hu),h.toneMapping=qi,h.autoClear=!1;let f=new st({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Fe(new un,f),b=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Hu),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;po(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===lr||e.mapping===hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Gu[(i-1)%Gu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Fe(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let p=[],x=0;for(let T=0;T<gs;++T){let P=T/b,B=Math.exp(-P*P/2);p.push(B),T===0?x+=B:T<m&&(x+=2*B)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let y=this._sizeLods[i],A=3*y*(i>v-ir?i-v+ir:0),w=4*(this._cubeSize-y);po(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(d,pl)}};function yx(s){let e=[],t=[],n=[],i=s,r=s-ir+1+Bu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ir?l=Bu[a-s+ir-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,b=3,m=2,p=1,x=new Float32Array(b*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,P=w>2?0:-1,B=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(B,b*g*w),v.set(u,m*g*w);let S=[w,w,w,w,w,w];y.set(S,p*g*w)}let A=new gt;A.setAttribute("position",new jt(x,b)),A.setAttribute("uv",new jt(v,m)),A.setAttribute("faceIndex",new jt(y,p)),e.push(A),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(s,e,t){let n=new Ri(s,e,t);return n.texture.mapping=hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Mx(s,e,t){let n=new Float32Array(gs),i=new D(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Wu(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function qu(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function Sx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Pl||l===Ll,h=l===lr||l===hr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new vr(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new vr(s));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ex(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let b=u.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let v=0,y=x.length;v<y;v+=3){let A=x[v+0],w=x[v+1],T=x[v+2];u.push(A,w,w,T,T,A)}}else if(g!==void 0){let x=g.array;b=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let A=v+0,w=v+1,T=v+2;u.push(A,w,w,T,T,A)}}else return;let m=new(qf(u)?gr:mr)(u,1);m.version=b;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Tx(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,b){if(b===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,b),t.update(g,r,b)}function u(f,g,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=g[x];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Ax(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rx(s,e){return s[0]-e[0]}function Cx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Px(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==g){let W=function(){S.dispose(),r.delete(h),h.removeEventListener("dispose",W)};b!==void 0&&b.texture.dispose();let m=h.morphAttributes.position!==void 0,p=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],w=0;m===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let T=h.attributes.position.count*w,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let B=new Float32Array(T*P*4*g),S=new Oo(B,T,P,g);S.type=$n,S.needsUpdate=!0;let R=w*4;for(let q=0;q<g;q++){let E=v[q],I=y[q],M=A[q],F=T*P*4*q;for(let H=0;H<E.count;H++){let z=H*R;m===!0&&(a.fromBufferAttribute(E,H),B[F+z+0]=a.x,B[F+z+1]=a.y,B[F+z+2]=a.z,B[F+z+3]=0),p===!0&&(a.fromBufferAttribute(I,H),B[F+z+4]=a.x,B[F+z+5]=a.y,B[F+z+6]=a.z,B[F+z+7]=0),x===!0&&(a.fromBufferAttribute(M,H),B[F+z+8]=a.x,B[F+z+9]=a.y,B[F+z+10]=a.z,B[F+z+11]=M.itemSize===4?a.w:1)}}b={count:g,texture:S,size:new ae(T,P)},r.set(h,b),h.addEventListener("dispose",W)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",u)}d.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){let y=g[v];y[0]=v,y[1]=u[v]}g.sort(Cx);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Rx);let b=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let y=o[v],A=y[0],w=y[1];A!==Number.MAX_SAFE_INTEGER&&w?(b&&h.getAttribute("morphTarget"+v)!==b[A]&&h.setAttribute("morphTarget"+v,b[A]),m&&h.getAttribute("morphNormal"+v)!==m[A]&&h.setAttribute("morphNormal"+v,m[A]),i[v]=w,p+=w):(b&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let x=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Lx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Bo=class extends en{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:vs,h!==vs&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Gi),n===void 0&&h===dr&&(n=xs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$f=new en,Zf=new Bo(1,1);Zf.compareFunction=Vf;var Jf=new Oo,Qf=new Ol,ep=new ko,Xu=[],ju=[],Yu=new Float32Array(16),Ku=new Float32Array(9),$u=new Float32Array(4);function Rr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Xu[i];if(r===void 0&&(r=new Float32Array(i),Xu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function pc(s,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ix(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function Nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function Ox(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;$u.set(n),s.uniformMatrix2fv(this.addr,!1,$u),Kt(t,n)}}function Fx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Ku.set(n),s.uniformMatrix3fv(this.addr,!1,Ku),Kt(t,n)}}function zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Yu.set(n),s.uniformMatrix4fv(this.addr,!1,Yu),Kt(t,n)}}function kx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function Hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function Vx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Zf:$f;t.setTexture2D(e||r,i)}function Yx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qf,i)}function Kx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ep,i)}function $x(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jf,i)}function Zx(s){switch(s){case 5126:return Ix;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Bx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return qx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return $x}}function Jx(s,e){s.uniform1fv(this.addr,e)}function Qx(s,e){let t=Rr(e,this.size,2);s.uniform2fv(this.addr,t)}function ev(s,e){let t=Rr(e,this.size,3);s.uniform3fv(this.addr,t)}function tv(s,e){let t=Rr(e,this.size,4);s.uniform4fv(this.addr,t)}function nv(s,e){let t=Rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iv(s,e){let t=Rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sv(s,e){let t=Rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rv(s,e){s.uniform1iv(this.addr,e)}function av(s,e){s.uniform2iv(this.addr,e)}function ov(s,e){s.uniform3iv(this.addr,e)}function cv(s,e){s.uniform4iv(this.addr,e)}function lv(s,e){s.uniform1uiv(this.addr,e)}function hv(s,e){s.uniform2uiv(this.addr,e)}function dv(s,e){s.uniform3uiv(this.addr,e)}function uv(s,e){s.uniform4uiv(this.addr,e)}function fv(s,e,t){let n=this.cache,i=e.length,r=pc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||$f,r[a])}function pv(s,e,t){let n=this.cache,i=e.length,r=pc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qf,r[a])}function mv(s,e,t){let n=this.cache,i=e.length,r=pc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ep,r[a])}function gv(s,e,t){let n=this.cache,i=e.length,r=pc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jf,r[a])}function bv(s){switch(s){case 5126:return Jx;case 35664:return Qx;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return hv;case 36295:return dv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zx(t.type)}},Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},xl=/(\w+)(\])?(\[|\.)?/g;function Zu(s,e){s.seq.push(e),s.map[e.id]=e}function xv(s,e,t){let n=s.name,i=n.length;for(xl.lastIndex=0;;){let r=xl.exec(n),a=xl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zu(t,c===void 0?new kl(o,s,e):new Bl(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Hl(o),Zu(t,d)),t=d}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);xv(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ju(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var vv=37297,_v=0;function yv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Mv(s){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(s),n;switch(e===t?n="":e===Lo&&t===Po?n="LinearDisplayP3ToLinearSRGB":e===Po&&t===Lo&&(n="LinearSRGBToLinearDisplayP3"),s){case tn:case fc:return[n,"LinearTransferOETF"];case Ft:case yh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Qu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+yv(s.getShaderSource(e),a)}else return i}function Sv(s,e){let t=Mv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wv(s,e){let t;switch(e){case Cm:t="Linear";break;case Pm:t="Reinhard";break;case Lm:t="OptimizedCineon";break;case xh:t="ACESFilmic";break;case Dm:t="AgX";break;case Nm:t="Neutral";break;case Im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ev(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function Tv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Av(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function sr(s){return s!==""}function ef(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(s){return s.replace(Cv,Lv)}var Pv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lv(s,e){let t=Qe[e];if(t===void 0){let n=Pv.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}var Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(s){return s.replace(Iv,Dv)}function Dv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
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
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Uv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case lr:case hr:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Am:e="ENVMAP_BLENDING_MIX";break;case Rm:e="ENVMAP_BLENDING_ADD";break}return e}function zv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Nv(t),c=Uv(t),h=Ov(t),d=Fv(t),u=zv(t),f=t.isWebGL2?"":Ev(t),g=Tv(t),b=Av(r),m=i.createProgram(),p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(sr).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(sr).join(`
`),x.length>0&&(x+=`
`)):(p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),x=[f,sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==qi?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Gl(a),a=ef(a,t),a=tf(a,t),o=Gl(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=v+p+a,A=v+x+o,w=Ju(i,i.VERTEX_SHADER,y),T=Ju(i,i.FRAGMENT_SHADER,A);i.attachShader(m,w),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function P(W){if(s.debug.checkShaderErrors){let q=i.getProgramInfoLog(m).trim(),E=i.getShaderInfoLog(w).trim(),I=i.getShaderInfoLog(T).trim(),M=!0,F=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(M=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,T);else{let H=Qu(i,w,"vertex"),z=Qu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+q+`
`+H+`
`+z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(E===""||I==="")&&(F=!1);F&&(W.diagnostics={runnable:M,programLog:q,vertexShader:{log:E,prefix:p},fragmentShader:{log:I,prefix:x}})}i.deleteShader(w),i.deleteShader(T),B=new cr(i,m),S=Rv(i,m)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,vv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var Bv=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function Hv(s,e,t,n,i,r,a){let o=new Fo,l=new Vl,c=new Set,h=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,g=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,R,W,q,E){let I=q.fog,M=E.geometry,F=S.isMeshStandardMaterial?q.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),z=H&&H.mapping===hc?H.image.height:null,G=b[S.type];S.precision!==null&&(g=i.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let te=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,be=te!==void 0?te.length:0,Ue=0;M.morphAttributes.position!==void 0&&(Ue=1),M.morphAttributes.normal!==void 0&&(Ue=2),M.morphAttributes.color!==void 0&&(Ue=3);let Z,oe,Me,Ie;if(G){let xt=oi[G];Z=xt.vertexShader,oe=xt.fragmentShader}else Z=S.vertexShader,oe=S.fragmentShader,l.update(S),Me=l.getVertexShaderID(S),Ie=l.getFragmentShaderID(S);let Ae=s.getRenderTarget(),Ee=E.isInstancedMesh===!0,Xe=E.isBatchedMesh===!0,Pe=!!S.map,N=!!S.matcap,ue=!!H,ee=!!S.aoMap,de=!!S.lightMap,ie=!!S.bumpMap,O=!!S.normalMap,se=!!S.displacementMap,ce=!!S.emissiveMap,ve=!!S.metalnessMap,L=!!S.roughnessMap,_=S.anisotropy>0,X=S.clearcoat>0,U=S.iridescence>0,ne=S.sheen>0,re=S.transmission>0,We=_&&!!S.anisotropyMap,ke=X&&!!S.clearcoatMap,me=X&&!!S.clearcoatNormalMap,xe=X&&!!S.clearcoatRoughnessMap,qe=U&&!!S.iridescenceMap,fe=U&&!!S.iridescenceThicknessMap,Ut=ne&&!!S.sheenColorMap,it=ne&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,Le=!!S.specularColorMap,De=!!S.specularIntensityMap,lt=re&&!!S.transmissionMap,Ke=re&&!!S.thicknessMap,wt=!!S.gradientMap,k=!!S.alphaMap,_e=S.alphaTest>0,K=!!S.alphaHash,pe=!!S.extensions,ye=qi;S.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ye=s.toneMapping);let at={isWebGL2:d,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:oe,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:Ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Xe,instancing:Ee,instancingColor:Ee&&E.instanceColor!==null,instancingMorph:Ee&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:tn,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:N,envMap:ue,envMapMode:ue&&H.mapping,envMapCubeUVHeight:z,aoMap:ee,lightMap:de,bumpMap:ie,normalMap:O,displacementMap:f&&se,emissiveMap:ce,normalMapObjectSpace:O&&S.normalMapType===qm,normalMapTangentSpace:O&&S.normalMapType===uc,metalnessMap:ve,roughnessMap:L,anisotropy:_,anisotropyMap:We,clearcoat:X,clearcoatMap:ke,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:U,iridescenceMap:qe,iridescenceThicknessMap:fe,sheen:ne,sheenColorMap:Ut,sheenRoughnessMap:it,specularMap:Oe,specularColorMap:Le,specularIntensityMap:De,transmission:re,transmissionMap:lt,thicknessMap:Ke,gradientMap:wt,opaque:S.transparent===!1&&S.blending===ar&&S.alphaToCoverage===!1,alphaMap:k,alphaTest:_e,alphaHash:K,combine:S.combine,mapUv:Pe&&m(S.map.channel),aoMapUv:ee&&m(S.aoMap.channel),lightMapUv:de&&m(S.lightMap.channel),bumpMapUv:ie&&m(S.bumpMap.channel),normalMapUv:O&&m(S.normalMap.channel),displacementMapUv:se&&m(S.displacementMap.channel),emissiveMapUv:ce&&m(S.emissiveMap.channel),metalnessMapUv:ve&&m(S.metalnessMap.channel),roughnessMapUv:L&&m(S.roughnessMap.channel),anisotropyMapUv:We&&m(S.anisotropyMap.channel),clearcoatMapUv:ke&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:it&&m(S.sheenRoughnessMap.channel),specularMapUv:Oe&&m(S.specularMap.channel),specularColorMapUv:Le&&m(S.specularColorMap.channel),specularIntensityMapUv:De&&m(S.specularIntensityMap.channel),transmissionMapUv:lt&&m(S.transmissionMap.channel),thicknessMapUv:Ke&&m(S.thicknessMap.channel),alphaMapUv:k&&m(S.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(O||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!M.attributes.uv&&(Pe||k),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:E.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ht,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pe&&S.extensions.derivatives===!0,extensionFragDepth:pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function x(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let W in S.defines)R.push(W),R.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(v(R,S),y(R,S),R.push(s.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function v(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function y(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),S.push(o.mask)}function A(S){let R=b[S.type],W;if(R){let q=oi[R];W=Sh.clone(q.uniforms)}else W=S.uniforms;return W}function w(S,R){let W;for(let q=0,E=h.length;q<E;q++){let I=h[q];if(I.cacheKey===R){W=I,++W.usedTimes;break}}return W===void 0&&(W=new kv(s,R,S,r),h.push(W)),W}function T(S){if(--S.usedTimes===0){let R=h.indexOf(S);h[R]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:A,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:B}}function Gv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Vv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function af(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,b,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:b,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=b,p.group=m),e++,p}function o(d,u,f,g,b,m){let p=a(d,u,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,b,m){let p=a(d,u,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Vv),n.length>1&&n.sort(u||rf),i.length>1&&i.sort(u||rf)}function h(){for(let d=e,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Wv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new af,s.set(n,[a])):i>=r.length?(a=new af,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function qv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new le};break;case"SpotLight":t={position:new D,direction:new D,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Xv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var jv=0;function Yv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Kv(s,e){let t=new qv,n=Xv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,a=new Ge,o=new Ge;function l(h,d){let u=0,f=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let b=0,m=0,p=0,x=0,v=0,y=0,A=0,w=0,T=0,P=0,B=0;h.sort(Yv);let S=d===!0?Math.PI:1;for(let W=0,q=h.length;W<q;W++){let E=h[W],I=E.color,M=E.intensity,F=E.distance,H=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*M*S,f+=I.g*M*S,g+=I.b*M*S;else if(E.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(E.sh.coefficients[z],M);B++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity*S),E.castShadow){let G=E.shadow,te=n.get(E);te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,i.directionalShadow[b]=te,i.directionalShadowMap[b]=H,i.directionalShadowMatrix[b]=E.shadow.matrix,y++}i.directional[b]=z,b++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(I).multiplyScalar(M*S),z.distance=F,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,i.spot[p]=z;let G=E.shadow;if(E.map&&(i.spotLightMap[T]=E.map,T++,G.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[p]=G.matrix,E.castShadow){let te=n.get(E);te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=H,w++}p++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(I).multiplyScalar(M),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),i.rectArea[x]=z,x++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity*S),z.distance=E.distance,z.decay=E.decay,E.castShadow){let G=E.shadow,te=n.get(E);te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=E.shadow.matrix,A++}i.point[m]=z,m++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(M*S),z.groundColor.copy(E.groundColor).multiplyScalar(M*S),i.hemi[v]=z,v++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;let R=i.hash;(R.directionalLength!==b||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==x||R.hemiLength!==v||R.numDirectionalShadows!==y||R.numPointShadows!==A||R.numSpotShadows!==w||R.numSpotMaps!==T||R.numLightProbes!==B)&&(i.directional.length=b,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=B,R.directionalLength=b,R.pointLength=m,R.spotLength=p,R.rectAreaLength=x,R.hemiLength=v,R.numDirectionalShadows=y,R.numPointShadows=A,R.numSpotShadows=w,R.numSpotMaps=T,R.numLightProbes=B,i.version=jv++)}function c(h,d){let u=0,f=0,g=0,b=0,m=0,p=d.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){let y=h[x];if(y.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),u++}else if(y.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let A=i.rectArea[b];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function of(s,e){let t=new Kv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $v(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new of(s,e),t.set(r,[l])):a>=o.length?(l=new of(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var fa=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`;function Qv(s,e,t){let n=new ua,i=new ae,r=new ae,a=new mt,o=new fa({depthPacking:_h}),l=new ql,c={},h=t.maxTextureSize,d={[ci]:zt,[zt]:ci,[ht]:ht},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Zv,fragmentShader:Jv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Fe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let p=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let B=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Wi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let q=p!==wi&&this.type===wi,E=p===wi&&this.type!==wi;for(let I=0,M=w.length;I<M;I++){let F=w[I],H=F.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let z=H.getFrameExtents();if(i.multiply(z),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,H.mapSize.y=r.y)),H.map===null||q===!0||E===!0){let te=this.type!==wi?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new Ri(i.x,i.y,te),H.map.texture.name=F.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let G=H.getViewportCount();for(let te=0;te<G;te++){let be=H.getViewport(te);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),W.viewport(a),H.updateMatrices(F,te),n=H.getFrustum(),y(T,P,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===wi&&x(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(B,S,R)};function x(w,T){let P=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ri(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,P,u,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,P,f,b,null)}function v(w,T,P,B){let S=null,R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=S.uuid,q=T.uuid,E=c[W];E===void 0&&(E={},c[W]=E);let I=E[q];I===void 0&&(I=S.clone(),E[q]=I,T.addEventListener("dispose",A)),S=I}if(S.visible=T.visible,S.wireframe=T.wireframe,B===wi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let W=s.properties.get(S);W.light=P}return S}function y(w,T,P,B,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===wi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let q=e.update(w),E=w.material;if(Array.isArray(E)){let I=q.groups;for(let M=0,F=I.length;M<F;M++){let H=I[M],z=E[H.materialIndex];if(z&&z.visible){let G=v(w,z,B,S);w.onBeforeShadow(s,w,T,P,q,G,H),s.renderBufferDirect(P,null,q,G,w,H),w.onAfterShadow(s,w,T,P,q,G,H)}}}else if(E.visible){let I=v(w,E,B,S);w.onBeforeShadow(s,w,T,P,q,I,null),s.renderBufferDirect(P,null,q,I,w,null),w.onAfterShadow(s,w,T,P,q,I,null)}}let W=w.children;for(let q=0,E=W.length;q<E;q++)y(W[q],T,P,B,S)}function A(w){w.target.removeEventListener("dispose",A);for(let P in c){let B=c[P],S=w.target.uuid;S in B&&(B[S].dispose(),delete B[S])}}}function e_(s,e,t){let n=t.isWebGL2;function i(){let k=!1,_e=new mt,K=null,pe=new mt(0,0,0,0);return{setMask:function(ye){K!==ye&&!k&&(s.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){k=ye},setClear:function(ye,at,xt,sn,Nn){Nn===!0&&(ye*=sn,at*=sn,xt*=sn),_e.set(ye,at,xt,sn),pe.equals(_e)===!1&&(s.clearColor(ye,at,xt,sn),pe.copy(_e))},reset:function(){k=!1,K=null,pe.set(-1,0,0,0)}}}function r(){let k=!1,_e=null,K=null,pe=null;return{setTest:function(ye){ye?Ee(s.DEPTH_TEST):Xe(s.DEPTH_TEST)},setMask:function(ye){_e!==ye&&!k&&(s.depthMask(ye),_e=ye)},setFunc:function(ye){if(K!==ye){switch(ye){case _m:s.depthFunc(s.NEVER);break;case ym:s.depthFunc(s.ALWAYS);break;case Mm:s.depthFunc(s.LESS);break;case Ao:s.depthFunc(s.LEQUAL);break;case Sm:s.depthFunc(s.EQUAL);break;case wm:s.depthFunc(s.GEQUAL);break;case Em:s.depthFunc(s.GREATER);break;case Tm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ye}},setLocked:function(ye){k=ye},setClear:function(ye){pe!==ye&&(s.clearDepth(ye),pe=ye)},reset:function(){k=!1,_e=null,K=null,pe=null}}}function a(){let k=!1,_e=null,K=null,pe=null,ye=null,at=null,xt=null,sn=null,Nn=null;return{setTest:function(vt){k||(vt?Ee(s.STENCIL_TEST):Xe(s.STENCIL_TEST))},setMask:function(vt){_e!==vt&&!k&&(s.stencilMask(vt),_e=vt)},setFunc:function(vt,mn,ai){(K!==vt||pe!==mn||ye!==ai)&&(s.stencilFunc(vt,mn,ai),K=vt,pe=mn,ye=ai)},setOp:function(vt,mn,ai){(at!==vt||xt!==mn||sn!==ai)&&(s.stencilOp(vt,mn,ai),at=vt,xt=mn,sn=ai)},setLocked:function(vt){k=vt},setClear:function(vt){Nn!==vt&&(s.clearStencil(vt),Nn=vt)},reset:function(){k=!1,_e=null,K=null,pe=null,ye=null,at=null,xt=null,sn=null,Nn=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,b=[],m=null,p=!1,x=null,v=null,y=null,A=null,w=null,T=null,P=null,B=new le(0,0,0),S=0,R=!1,W=null,q=null,E=null,I=null,M=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=z>=2);let te=null,be={},Ue=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),oe=new mt().fromArray(Ue),Me=new mt().fromArray(Z);function Ie(k,_e,K,pe){let ye=new Uint8Array(4),at=s.createTexture();s.bindTexture(k,at),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<K;xt++)n&&(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)?s.texImage3D(_e,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(_e+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return at}let Ae={};Ae[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(s.DEPTH_TEST),l.setFunc(Ao),se(!1),ce(kd),Ee(s.CULL_FACE),ie(Wi);function Ee(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function Xe(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function Pe(k,_e){return f[k]!==_e?(s.bindFramebuffer(k,_e),f[k]=_e,n&&(k===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_e),k===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_e)),!0):!1}function N(k,_e){let K=b,pe=!1;if(k){K=g.get(_e),K===void 0&&(K=[],g.set(_e,K));let ye=k.textures;if(K.length!==ye.length||K[0]!==s.COLOR_ATTACHMENT0){for(let at=0,xt=ye.length;at<xt;at++)K[at]=s.COLOR_ATTACHMENT0+at;K.length=ye.length,pe=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,pe=!0);if(pe)if(t.isWebGL2)s.drawBuffers(K);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ue(k){return m!==k?(s.useProgram(k),m=k,!0):!1}let ee={[ps]:s.FUNC_ADD,[rm]:s.FUNC_SUBTRACT,[am]:s.FUNC_REVERSE_SUBTRACT};if(n)ee[Gd]=s.MIN,ee[Vd]=s.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(ee[Gd]=k.MIN_EXT,ee[Vd]=k.MAX_EXT)}let de={[om]:s.ZERO,[cm]:s.ONE,[lm]:s.SRC_COLOR,[Rl]:s.SRC_ALPHA,[mm]:s.SRC_ALPHA_SATURATE,[fm]:s.DST_COLOR,[dm]:s.DST_ALPHA,[hm]:s.ONE_MINUS_SRC_COLOR,[Cl]:s.ONE_MINUS_SRC_ALPHA,[pm]:s.ONE_MINUS_DST_COLOR,[um]:s.ONE_MINUS_DST_ALPHA,[gm]:s.CONSTANT_COLOR,[bm]:s.ONE_MINUS_CONSTANT_COLOR,[xm]:s.CONSTANT_ALPHA,[vm]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(k,_e,K,pe,ye,at,xt,sn,Nn,vt){if(k===Wi){p===!0&&(Xe(s.BLEND),p=!1);return}if(p===!1&&(Ee(s.BLEND),p=!0),k!==sm){if(k!==x||vt!==R){if((v!==ps||w!==ps)&&(s.blendEquation(s.FUNC_ADD),v=ps,w=ps),vt)switch(k){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cn:s.blendFunc(s.ONE,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,A=null,T=null,P=null,B.set(0,0,0),S=0,x=k,R=vt}return}ye=ye||_e,at=at||K,xt=xt||pe,(_e!==v||ye!==w)&&(s.blendEquationSeparate(ee[_e],ee[ye]),v=_e,w=ye),(K!==y||pe!==A||at!==T||xt!==P)&&(s.blendFuncSeparate(de[K],de[pe],de[at],de[xt]),y=K,A=pe,T=at,P=xt),(sn.equals(B)===!1||Nn!==S)&&(s.blendColor(sn.r,sn.g,sn.b,Nn),B.copy(sn),S=Nn),x=k,R=!1}function O(k,_e){k.side===ht?Xe(s.CULL_FACE):Ee(s.CULL_FACE);let K=k.side===zt;_e&&(K=!K),se(K),k.blending===ar&&k.transparent===!1?ie(Wi):ie(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);let pe=k.stencilWrite;c.setTest(pe),pe&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),L(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){W!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),W=k)}function ce(k){k!==nm?(Ee(s.CULL_FACE),k!==q&&(k===kd?s.cullFace(s.BACK):k===im?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xe(s.CULL_FACE),q=k}function ve(k){k!==E&&(H&&s.lineWidth(k),E=k)}function L(k,_e,K){k?(Ee(s.POLYGON_OFFSET_FILL),(I!==_e||M!==K)&&(s.polygonOffset(_e,K),I=_e,M=K)):Xe(s.POLYGON_OFFSET_FILL)}function _(k){k?Ee(s.SCISSOR_TEST):Xe(s.SCISSOR_TEST)}function X(k){k===void 0&&(k=s.TEXTURE0+F-1),te!==k&&(s.activeTexture(k),te=k)}function U(k,_e,K){K===void 0&&(te===null?K=s.TEXTURE0+F-1:K=te);let pe=be[K];pe===void 0&&(pe={type:void 0,texture:void 0},be[K]=pe),(pe.type!==k||pe.texture!==_e)&&(te!==K&&(s.activeTexture(K),te=K),s.bindTexture(k,_e||Ae[k]),pe.type=k,pe.texture=_e)}function ne(){let k=be[te];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(k){oe.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),oe.copy(k))}function De(k){Me.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function lt(k,_e){let K=d.get(_e);K===void 0&&(K=new WeakMap,d.set(_e,K));let pe=K.get(k);pe===void 0&&(pe=s.getUniformBlockIndex(_e,k.name),K.set(k,pe))}function Ke(k,_e){let pe=d.get(_e).get(k);h.get(_e)!==pe&&(s.uniformBlockBinding(_e,pe,k.__bindingPointIndex),h.set(_e,pe))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,be={},f={},g=new WeakMap,b=[],m=null,p=!1,x=null,v=null,y=null,A=null,w=null,T=null,P=null,B=new le(0,0,0),S=0,R=!1,W=null,q=null,E=null,I=null,M=null,oe.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ee,disable:Xe,bindFramebuffer:Pe,drawBuffers:N,useProgram:ue,setBlending:ie,setMaterial:O,setFlipSided:se,setCullFace:ce,setLineWidth:ve,setPolygonOffset:L,setScissorTest:_,activeTexture:X,bindTexture:U,unbindTexture:ne,compressedTexImage2D:re,compressedTexImage3D:We,texImage2D:it,texImage3D:Oe,updateUBOMapping:lt,uniformBlockBinding:Ke,texStorage2D:fe,texStorage3D:Ut,texSubImage2D:ke,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:qe,scissor:Le,viewport:De,reset:wt}}function t_(s,e,t,n,i,r,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ae,d=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(L){}function b(L,_){return g?new OffscreenCanvas(L,_):da("canvas")}function m(L,_,X,U){let ne=1,re=ve(L);if((re.width>U||re.height>U)&&(ne=U/Math.max(re.width,re.height)),ne<1||_===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let We=_?Do:Math.floor,ke=We(ne*re.width),me=We(ne*re.height);u===void 0&&(u=b(ke,me));let xe=X?b(ke,me):u;return xe.width=ke,xe.height=me,xe.getContext("2d").drawImage(L,0,0,ke,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ke+"x"+me+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function p(L){let _=ve(L);return Nl(_.width)&&Nl(_.height)}function x(L){return o?!1:L.wrapS!==xn||L.wrapT!==xn||L.minFilter!==Wt&&L.minFilter!==Vt}function v(L,_){return L.generateMipmaps&&_&&L.minFilter!==Wt&&L.minFilter!==Vt}function y(L){s.generateMipmap(L)}function A(L,_,X,U,ne=!1){if(o===!1)return _;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=_;if(_===s.RED&&(X===s.FLOAT&&(re=s.R32F),X===s.HALF_FLOAT&&(re=s.R16F),X===s.UNSIGNED_BYTE&&(re=s.R8)),_===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(re=s.R8UI),X===s.UNSIGNED_SHORT&&(re=s.R16UI),X===s.UNSIGNED_INT&&(re=s.R32UI),X===s.BYTE&&(re=s.R8I),X===s.SHORT&&(re=s.R16I),X===s.INT&&(re=s.R32I)),_===s.RG&&(X===s.FLOAT&&(re=s.RG32F),X===s.HALF_FLOAT&&(re=s.RG16F),X===s.UNSIGNED_BYTE&&(re=s.RG8)),_===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(re=s.RG8UI),X===s.UNSIGNED_SHORT&&(re=s.RG16UI),X===s.UNSIGNED_INT&&(re=s.RG32UI),X===s.BYTE&&(re=s.RG8I),X===s.SHORT&&(re=s.RG16I),X===s.INT&&(re=s.RG32I)),_===s.RGBA){let We=ne?Co:ut.getTransfer(U);X===s.FLOAT&&(re=s.RGBA32F),X===s.HALF_FLOAT&&(re=s.RGBA16F),X===s.UNSIGNED_BYTE&&(re=We===Mt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function w(L,_,X){return v(L,X)===!0||L.isFramebufferTexture&&L.minFilter!==Wt&&L.minFilter!==Vt?Math.log2(Math.max(_.width,_.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?_.mipmaps.length:1}function T(L){return L===Wt||L===Ro||L===ms?s.NEAREST:s.LINEAR}function P(L){let _=L.target;_.removeEventListener("dispose",P),S(_),_.isVideoTexture&&d.delete(_)}function B(L){let _=L.target;_.removeEventListener("dispose",B),W(_)}function S(L){let _=n.get(L);if(_.__webglInit===void 0)return;let X=L.source,U=f.get(X);if(U){let ne=U[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(L),Object.keys(U).length===0&&f.delete(X)}n.remove(L)}function R(L){let _=n.get(L);s.deleteTexture(_.__webglTexture);let X=L.source,U=f.get(X);delete U[_.__cacheKey],a.memory.textures--}function W(L){let _=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let ne=0;ne<_.__webglFramebuffer[U].length;ne++)s.deleteFramebuffer(_.__webglFramebuffer[U][ne]);else s.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)s.deleteFramebuffer(_.__webglFramebuffer[U]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=L.textures;for(let U=0,ne=X.length;U<ne;U++){let re=n.get(X[U]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(X[U])}n.remove(L)}let q=0;function E(){q=0}function I(){let L=q;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),q+=1,L}function M(L){let _=[];return _.push(L.wrapS),_.push(L.wrapT),_.push(L.wrapR||0),_.push(L.magFilter),_.push(L.minFilter),_.push(L.anisotropy),_.push(L.internalFormat),_.push(L.format),_.push(L.type),_.push(L.generateMipmaps),_.push(L.premultiplyAlpha),_.push(L.flipY),_.push(L.unpackAlignment),_.push(L.colorSpace),_.join()}function F(L,_){let X=n.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){let U=L.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(X,L,_);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+_)}function H(L,_){let X=n.get(L);if(L.version>0&&X.__version!==L.version){Me(X,L,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+_)}function z(L,_){let X=n.get(L);if(L.version>0&&X.__version!==L.version){Me(X,L,_);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+_)}function G(L,_){let X=n.get(L);if(L.version>0&&X.__version!==L.version){Ie(X,L,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+_)}let te={[Ai]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[la]:s.MIRRORED_REPEAT},be={[Wt]:s.NEAREST,[Ro]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[ia]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},Ue={[Xm]:s.NEVER,[Jm]:s.ALWAYS,[jm]:s.LESS,[Vf]:s.LEQUAL,[Ym]:s.EQUAL,[Zm]:s.GEQUAL,[Km]:s.GREATER,[$m]:s.NOTEQUAL};function Z(L,_,X){if(_.type===$n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Vt||_.magFilter===ia||_.magFilter===ms||_.magFilter===zn||_.minFilter===Vt||_.minFilter===ia||_.minFilter===ms||_.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(s.texParameteri(L,s.TEXTURE_WRAP_S,te[_.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,te[_.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,te[_.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,be[_.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,be[_.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==xn||_.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,T(_.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==Wt&&_.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==ms&&_.minFilter!==zn||_.type===$n&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===ha&&e.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(L,_){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,_.addEventListener("dispose",P));let U=_.source,ne=f.get(U);ne===void 0&&(ne={},f.set(U,ne));let re=M(_);if(re!==L.__cacheKey){ne[re]===void 0&&(ne[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[re].usedTimes++;let We=ne[L.__cacheKey];We!==void 0&&(ne[L.__cacheKey].usedTimes--,We.usedTimes===0&&R(_)),L.__cacheKey=re,L.__webglTexture=ne[re].texture}return X}function Me(L,_,X){let U=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=s.TEXTURE_3D);let ne=oe(L,_),re=_.source;t.bindTexture(U,L.__webglTexture,s.TEXTURE0+X);let We=n.get(re);if(re.version!==We.__version||ne===!0){t.activeTexture(s.TEXTURE0+X);let ke=ut.getPrimaries(ut.workingColorSpace),me=_.colorSpace===Hi?null:ut.getPrimaries(_.colorSpace),xe=_.colorSpace===Hi||ke===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let qe=x(_)&&p(_.image)===!1,fe=m(_.image,qe,!1,i.maxTextureSize);fe=ce(_,fe);let Ut=p(fe)||o,it=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type),Le=A(_.internalFormat,it,Oe,_.colorSpace,_.isVideoTexture);Z(U,_,Ut);let De,lt=_.mipmaps,Ke=o&&_.isVideoTexture!==!0&&Le!==Hf,wt=We.__version===void 0||ne===!0,k=re.dataReady,_e=w(_,fe,Ut);if(_.isDepthTexture)Le=s.DEPTH_COMPONENT,o?_.type===$n?Le=s.DEPTH_COMPONENT32F:_.type===Gi?Le=s.DEPTH_COMPONENT24:_.type===xs?Le=s.DEPTH24_STENCIL8:Le=s.DEPTH_COMPONENT16:_.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===vs&&Le===s.DEPTH_COMPONENT&&_.type!==vh&&_.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Gi,Oe=r.convert(_.type)),_.format===dr&&Le===s.DEPTH_COMPONENT&&(Le=s.DEPTH_STENCIL,_.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=xs,Oe=r.convert(_.type))),wt&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Le,fe.width,fe.height,0,it,Oe,null));else if(_.isDataTexture)if(lt.length>0&&Ut){Ke&&wt&&t.texStorage2D(s.TEXTURE_2D,_e,Le,lt[0].width,lt[0].height);for(let K=0,pe=lt.length;K<pe;K++)De=lt[K],Ke?k&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,De.width,De.height,it,Oe,De.data):t.texImage2D(s.TEXTURE_2D,K,Le,De.width,De.height,0,it,Oe,De.data);_.generateMipmaps=!1}else Ke?(wt&&t.texStorage2D(s.TEXTURE_2D,_e,Le,fe.width,fe.height),k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,it,Oe,fe.data)):t.texImage2D(s.TEXTURE_2D,0,Le,fe.width,fe.height,0,it,Oe,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ke&&wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Le,lt[0].width,lt[0].height,fe.depth);for(let K=0,pe=lt.length;K<pe;K++)De=lt[K],_.format!==Fn?it!==null?Ke?k&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,De.width,De.height,fe.depth,it,De.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Le,De.width,De.height,fe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,De.width,De.height,fe.depth,it,Oe,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Le,De.width,De.height,fe.depth,0,it,Oe,De.data)}else{Ke&&wt&&t.texStorage2D(s.TEXTURE_2D,_e,Le,lt[0].width,lt[0].height);for(let K=0,pe=lt.length;K<pe;K++)De=lt[K],_.format!==Fn?it!==null?Ke?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,De.width,De.height,it,De.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Le,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,De.width,De.height,it,Oe,De.data):t.texImage2D(s.TEXTURE_2D,K,Le,De.width,De.height,0,it,Oe,De.data)}else if(_.isDataArrayTexture)Ke?(wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Le,fe.width,fe.height,fe.depth),k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,it,Oe,fe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,it,Oe,fe.data);else if(_.isData3DTexture)Ke?(wt&&t.texStorage3D(s.TEXTURE_3D,_e,Le,fe.width,fe.height,fe.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,it,Oe,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,it,Oe,fe.data);else if(_.isFramebufferTexture){if(wt)if(Ke)t.texStorage2D(s.TEXTURE_2D,_e,Le,fe.width,fe.height);else{let K=fe.width,pe=fe.height;for(let ye=0;ye<_e;ye++)t.texImage2D(s.TEXTURE_2D,ye,Le,K,pe,0,it,Oe,null),K>>=1,pe>>=1}}else if(lt.length>0&&Ut){if(Ke&&wt){let K=ve(lt[0]);t.texStorage2D(s.TEXTURE_2D,_e,Le,K.width,K.height)}for(let K=0,pe=lt.length;K<pe;K++)De=lt[K],Ke?k&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,it,Oe,De):t.texImage2D(s.TEXTURE_2D,K,Le,it,Oe,De);_.generateMipmaps=!1}else if(Ke){if(wt){let K=ve(fe);t.texStorage2D(s.TEXTURE_2D,_e,Le,K.width,K.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,it,Oe,fe)}else t.texImage2D(s.TEXTURE_2D,0,Le,it,Oe,fe);v(_,Ut)&&y(U),We.__version=re.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function Ie(L,_,X){if(_.image.length!==6)return;let U=oe(L,_),ne=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);let re=n.get(ne);if(ne.version!==re.__version||U===!0){t.activeTexture(s.TEXTURE0+X);let We=ut.getPrimaries(ut.workingColorSpace),ke=_.colorSpace===Hi?null:ut.getPrimaries(_.colorSpace),me=_.colorSpace===Hi||We===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let xe=_.isCompressedTexture||_.image[0].isCompressedTexture,qe=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!xe&&!qe?fe[K]=m(_.image[K],!1,!0,i.maxCubemapSize):fe[K]=qe?_.image[K].image:_.image[K],fe[K]=ce(_,fe[K]);let Ut=fe[0],it=p(Ut)||o,Oe=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),De=A(_.internalFormat,Oe,Le,_.colorSpace),lt=o&&_.isVideoTexture!==!0,Ke=re.__version===void 0||U===!0,wt=ne.dataReady,k=w(_,Ut,it);Z(s.TEXTURE_CUBE_MAP,_,it);let _e;if(xe){lt&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,k,De,Ut.width,Ut.height);for(let K=0;K<6;K++){_e=fe[K].mipmaps;for(let pe=0;pe<_e.length;pe++){let ye=_e[pe];_.format!==Fn?Oe!==null?lt?wt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,ye.width,ye.height,Oe,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?wt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,ye.width,ye.height,Oe,Le,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,De,ye.width,ye.height,0,Oe,Le,ye.data)}}}else{if(_e=_.mipmaps,lt&&Ke){_e.length>0&&k++;let K=ve(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,k,De,K.width,K.height)}for(let K=0;K<6;K++)if(qe){lt?wt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Oe,Le,fe[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,De,fe[K].width,fe[K].height,0,Oe,Le,fe[K].data);for(let pe=0;pe<_e.length;pe++){let at=_e[pe].image[K].image;lt?wt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,at.width,at.height,Oe,Le,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,De,at.width,at.height,0,Oe,Le,at.data)}}else{lt?wt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Oe,Le,fe[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,De,Oe,Le,fe[K]);for(let pe=0;pe<_e.length;pe++){let ye=_e[pe];lt?wt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Oe,Le,ye.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,De,Oe,Le,ye.image[K])}}}v(_,it)&&y(s.TEXTURE_CUBE_MAP),re.__version=ne.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function Ae(L,_,X,U,ne,re){let We=r.convert(X.format,X.colorSpace),ke=r.convert(X.type),me=A(X.internalFormat,We,ke,X.colorSpace);if(!n.get(_).__hasExternalTextures){let qe=Math.max(1,_.width>>re),fe=Math.max(1,_.height>>re);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,me,qe,fe,_.depth,0,We,ke,null):t.texImage2D(ne,re,me,qe,fe,0,We,ke,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),O(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,U,ne,n.get(X).__webglTexture,0,ie(_)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,U,ne,n.get(X).__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(L,_,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),_.depthBuffer&&!_.stencilBuffer){let U=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||O(_)){let ne=_.depthTexture;ne&&ne.isDepthTexture&&(ne.type===$n?U=s.DEPTH_COMPONENT32F:ne.type===Gi&&(U=s.DEPTH_COMPONENT24));let re=ie(_);O(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,U,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,re,U,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,U,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(_.depthBuffer&&_.stencilBuffer){let U=ie(_);X&&O(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,U,s.DEPTH24_STENCIL8,_.width,_.height):O(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{let U=_.textures;for(let ne=0;ne<U.length;ne++){let re=U[ne],We=r.convert(re.format,re.colorSpace),ke=r.convert(re.type),me=A(re.internalFormat,We,ke,re.colorSpace),xe=ie(_);X&&O(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,me,_.width,_.height):O(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,me,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,me,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(L,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F(_.depthTexture,0);let U=n.get(_.depthTexture).__webglTexture,ne=ie(_);if(_.depthTexture.format===vs)O(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,U,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,U,0);else if(_.depthTexture.format===dr)O(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,U,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function Pe(L){let _=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!_.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Xe(_.__webglFramebuffer,L)}else if(X){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]=s.createRenderbuffer(),Ee(_.__webglDepthbuffer[U],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Ee(_.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function N(L,_,X){let U=n.get(L);_!==void 0&&Ae(U.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Pe(L)}function ue(L){let _=L.texture,X=n.get(L),U=n.get(_);L.addEventListener("dispose",B);let ne=L.textures,re=L.isWebGLCubeRenderTarget===!0,We=ne.length>1,ke=p(L)||o;if(We||(U.__webglTexture===void 0&&(U.__webglTexture=s.createTexture()),U.__version=_.version,a.memory.textures++),re){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let xe=0;xe<_.mipmaps.length;xe++)X.__webglFramebuffer[me][xe]=s.createFramebuffer()}else X.__webglFramebuffer[me]=s.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<_.mipmaps.length;me++)X.__webglFramebuffer[me]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(We)if(i.drawBuffers)for(let me=0,xe=ne.length;me<xe;me++){let qe=n.get(ne[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&O(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){let xe=ne[me];X.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[me]);let qe=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Ut=A(xe.internalFormat,qe,fe,xe.colorSpace,L.isXRRenderTarget===!0),it=ie(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Ut,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,X.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture),Z(s.TEXTURE_CUBE_MAP,_,ke);for(let me=0;me<6;me++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Ae(X.__webglFramebuffer[me][xe],L,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Ae(X.__webglFramebuffer[me],L,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(_,ke)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let me=0,xe=ne.length;me<xe;me++){let qe=ne[me],fe=n.get(qe);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),Z(s.TEXTURE_2D,qe,ke),Ae(X.__webglFramebuffer,L,qe,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),v(qe,ke)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,U.__webglTexture),Z(me,_,ke),o&&_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Ae(X.__webglFramebuffer[xe],L,_,s.COLOR_ATTACHMENT0,me,xe);else Ae(X.__webglFramebuffer,L,_,s.COLOR_ATTACHMENT0,me,0);v(_,ke)&&y(me),t.unbindTexture()}L.depthBuffer&&Pe(L)}function ee(L){let _=p(L)||o,X=L.textures;for(let U=0,ne=X.length;U<ne;U++){let re=X[U];if(v(re,_)){let We=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ke=n.get(re).__webglTexture;t.bindTexture(We,ke),y(We),t.unbindTexture()}}}function de(L){if(o&&L.samples>0&&O(L)===!1){let _=L.textures,X=L.width,U=L.height,ne=s.COLOR_BUFFER_BIT,re=[],We=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=n.get(L),me=_.length>1;if(me)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){re.push(s.COLOR_ATTACHMENT0+xe),L.depthBuffer&&re.push(We);let qe=ke.__ignoreDepthValues!==void 0?ke.__ignoreDepthValues:!1;if(qe===!1&&(L.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[xe]),qe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[We]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[We])),me){let fe=n.get(_[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,X,U,0,0,X,U,ne,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ke.__webglColorRenderbuffer[xe]);let qe=n.get(_[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}}function ie(L){return Math.min(i.maxSamples,L.samples)}function O(L){let _=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function se(L){let _=a.render.frame;d.get(L)!==_&&(d.set(L,_),L.update())}function ce(L,_){let X=L.colorSpace,U=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dl||X!==tn&&X!==Hi&&(ut.getTransfer(X)===Mt?o===!1?e.has("EXT_sRGB")===!0&&U===Fn?(L.format=Dl,L.minFilter=Vt,L.generateMipmaps=!1):_=No.sRGBToLinear(_):(U!==Fn||ne!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),_}function ve(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=N,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=O}function n_(s,e,t){let n=t.isWebGL2;function i(r,a=Hi){let o,l=ut.getTransfer(a);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Uf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Om)return s.BYTE;if(r===Fm)return s.SHORT;if(r===vh)return s.UNSIGNED_SHORT;if(r===Nf)return s.INT;if(r===Gi)return s.UNSIGNED_INT;if(r===$n)return s.FLOAT;if(r===ha)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===zm)return s.ALPHA;if(r===Fn)return s.RGBA;if(r===km)return s.LUMINANCE;if(r===Bm)return s.LUMINANCE_ALPHA;if(r===vs)return s.DEPTH_COMPONENT;if(r===dr)return s.DEPTH_STENCIL;if(r===Dl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ff)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===Hm)return s.RG;if(r===kf)return s.RG_INTEGER;if(r===Bf)return s.RGBA_INTEGER;if(r===Vc||r===Wc||r===qc||r===Xc)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===Xd||r===jd||r===Yd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===qd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kd||r===$d)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Kd)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===$d)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zd||r===Jd||r===Qd||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou||r===cu||r===lu||r===hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Zd)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jd)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qd)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===iu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===su)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ru)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ou)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jc||r===du||r===uu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===jc)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===du)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gm||r===fu||r===pu||r===mu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===jc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Xl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ct=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},i_={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},s_=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new en,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new Bn({extensions:{fragDepth:!0},vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new kt(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Yl=class extends Yi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,b=new jl,m=t.getContextAttributes(),p=null,x=null,v=[],y=[],A=new ae,w=null,T=new Xt;T.layers.enable(1),T.viewport=new mt;let P=new Xt;P.layers.enable(2),P.viewport=new mt;let B=[T,P],S=new Xl;S.layers.enable(1),S.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=v[Z];return oe===void 0&&(oe=new aa,v[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=v[Z];return oe===void 0&&(oe=new aa,v[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=v[Z];return oe===void 0&&(oe=new aa,v[Z]=oe),oe.getHandSpace()};function q(Z){let oe=y.indexOf(Z.inputSource);if(oe===-1)return;let Me=v[oe];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function E(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",E),i.removeEventListener("inputsourceschange",I);for(let Z=0;Z<v.length;Z++){let oe=y[Z];oe!==null&&(y[Z]=null,v[Z].disconnect(oe))}R=null,W=null,b.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",E),i.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ri(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,Me=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?dr:vs,Me=m.stencil?xs:Gi);let Ae={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ae),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ri(u.textureWidth,u.textureHeight,{format:Fn,type:Xi,depthTexture:new Bo(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let Ee=e.properties.get(x);Ee.__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(Z){for(let oe=0;oe<Z.removed.length;oe++){let Me=Z.removed[oe],Ie=y.indexOf(Me);Ie>=0&&(y[Ie]=null,v[Ie].disconnect(Me))}for(let oe=0;oe<Z.added.length;oe++){let Me=Z.added[oe],Ie=y.indexOf(Me);if(Ie===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=y.length){y.push(Me),Ie=Ee;break}else if(y[Ee]===null){y[Ee]=Me,Ie=Ee;break}if(Ie===-1)break}let Ae=v[Ie];Ae&&Ae.connect(Me)}}let M=new D,F=new D;function H(Z,oe,Me){M.setFromMatrixPosition(oe.matrixWorld),F.setFromMatrixPosition(Me.matrixWorld);let Ie=M.distanceTo(F),Ae=oe.projectionMatrix.elements,Ee=Me.projectionMatrix.elements,Xe=Ae[14]/(Ae[10]-1),Pe=Ae[14]/(Ae[10]+1),N=(Ae[9]+1)/Ae[5],ue=(Ae[9]-1)/Ae[5],ee=(Ae[8]-1)/Ae[0],de=(Ee[8]+1)/Ee[0],ie=Xe*ee,O=Xe*de,se=Ie/(-ee+de),ce=se*-ee;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ce),Z.translateZ(se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let ve=Xe+se,L=Pe+se,_=ie-ce,X=O+(Ie-ce),U=N*Pe/L*ve,ne=ue*Pe/L*ve;Z.projectionMatrix.makePerspective(_,X,U,ne,ve,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function z(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;b.texture!==null&&(Z.near=b.depthNear,Z.far=b.depthFar),S.near=P.near=T.near=Z.near,S.far=P.far=T.far=Z.far,(R!==S.near||W!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,W=S.far,T.near=R,T.far=W,P.near=R,P.far=W,T.updateProjectionMatrix(),P.updateProjectionMatrix(),Z.updateProjectionMatrix());let oe=Z.parent,Me=S.cameras;z(S,oe);for(let Ie=0;Ie<Me.length;Ie++)z(Me[Ie],oe);Me.length===2?H(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),G(Z,S,oe)};function G(Z,oe,Me){Me===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null};let te=null;function be(Z,oe){if(h=oe.getViewerPose(c||a),g=oe,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ie=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,Ie=!0);for(let Ee=0;Ee<Me.length;Ee++){let Xe=Me[Ee],Pe=null;if(f!==null)Pe=f.getViewport(Xe);else{let ue=d.getViewSubImage(u,Xe);Pe=ue.viewport,Ee===0&&(e.setRenderTargetTextures(x,ue.colorTexture,u.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(x))}let N=B[Ee];N===void 0&&(N=new Xt,N.layers.enable(Ee),N.viewport=new mt,B[Ee]=N),N.matrix.fromArray(Xe.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Xe.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ee===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ie===!0&&S.cameras.push(N)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){let Ee=d.getDepthInformation(Me[0]);Ee&&Ee.isValid&&Ee.texture&&b.init(e,Ee,i.renderState)}}for(let Me=0;Me<v.length;Me++){let Ie=y[Me],Ae=v[Me];Ie!==null&&Ae!==void 0&&Ae.update(Ie,oe,c||a)}b.render(e,S),te&&te(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ue=new Kf;Ue.setAnimationLoop(be),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},us=new Sn,a_=new Ge;function o_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),v=x.envMap,y=x.envMapRotation;if(v&&(m.envMap.value=v,us.copy(y),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(us)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let A=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function c_(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(x,A);let w=e.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){let v=d();x.__bindingPointIndex=v;let y=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let v=i[x.id],y=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,T=y.length;w<T;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let B=0,S=P.length;B<S;B++){let R=P[B];if(f(R,w,B,A)===!0){let W=R.__offset,q=Array.isArray(R.value)?R.value:[R.value],E=0;for(let I=0;I<q.length;I++){let M=q[I],F=b(M);typeof M=="number"||typeof M=="boolean"?(R.__data[0]=M,s.bufferSubData(s.UNIFORM_BUFFER,W+E,R.__data)):M.isMatrix3?(R.__data[0]=M.elements[0],R.__data[1]=M.elements[1],R.__data[2]=M.elements[2],R.__data[3]=0,R.__data[4]=M.elements[3],R.__data[5]=M.elements[4],R.__data[6]=M.elements[5],R.__data[7]=0,R.__data[8]=M.elements[6],R.__data[9]=M.elements[7],R.__data[10]=M.elements[8],R.__data[11]=0):(M.toArray(R.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,y,A){let w=x.value,T=v+"_"+y;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{let P=A[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(x){let v=x.uniforms,y=0,A=16;for(let T=0,P=v.length;T<P;T++){let B=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,R=B.length;S<R;S++){let W=B[S],q=Array.isArray(W.value)?W.value:[W.value];for(let E=0,I=q.length;E<I;E++){let M=q[E],F=b(M),H=y%A;H!==0&&A-H<F.boundary&&(y+=A-H),W.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=F.storage}}}let w=y%A;return w>0&&(y+=A-w),x.__size=y,x.__cache={},this}function b(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var pa=class{constructor(e={}){let{canvas:t=f0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;let v=this,y=!1,A=0,w=0,T=null,P=-1,B=null,S=new mt,R=new mt,W=null,q=new le(0),E=0,I=t.width,M=t.height,F=1,H=null,z=null,G=new mt(0,0,I,M),te=new mt(0,0,I,M),be=!1,Ue=new ua,Z=!1,oe=!1,Me=null,Ie=new Ge,Ae=new ae,Ee=new D,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?F:1}let N=n;function ue(C,V){for(let $=0;$<C.length;$++){let J=C[$],Y=t.getContext(J,V);if(Y!==null)return Y}return null}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gh}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),N=ue(V,C),N===null)throw ue(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,de,ie,O,se,ce,ve,L,_,X,U,ne,re,We,ke,me,xe,qe,fe,Ut,it,Oe,Le,De;function lt(){ee=new wx(N),de=new xx(N,ee,e),ee.init(de),Oe=new n_(N,ee,de),ie=new e_(N,ee,de),O=new Ax(N),se=new Gv,ce=new t_(N,ee,ie,se,de,Oe,O),ve=new _x(v),L=new Sx(v),_=new D0(N,de),Le=new gx(N,ee,_,de),X=new Ex(N,_,O,Le),U=new Lx(N,X,_,O),fe=new Px(N,de,ce),me=new vx(se),ne=new Hv(v,ve,L,ee,de,Le,me),re=new o_(v,se),We=new Wv,ke=new $v(ee,de),qe=new mx(v,ve,L,ie,U,u,l),xe=new Qv(v,U,de),De=new c_(N,O,de,ie),Ut=new bx(N,ee,O,de),it=new Tx(N,ee,O,de),O.programs=ne.programs,v.capabilities=de,v.extensions=ee,v.properties=se,v.renderLists=We,v.shadowMap=xe,v.state=ie,v.info=O}lt();let Ke=new Yl(v,N);this.xr=Ke,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(I,M,!1))},this.getSize=function(C){return C.set(I,M)},this.setSize=function(C,V,$=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,M=V,t.width=Math.floor(C*F),t.height=Math.floor(V*F),$===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(I*F,M*F).floor()},this.setDrawingBufferSize=function(C,V,$){I=C,M=V,F=$,t.width=Math.floor(C*$),t.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,V,$,J){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,V,$,J),ie.viewport(S.copy(G).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,V,$,J){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,V,$,J),ie.scissor(R.copy(te).multiplyScalar(F).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){ie.setScissorTest(be=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(C=!0,V=!0,$=!0){let J=0;if(C){let Y=!1;if(T!==null){let we=T.texture.format;Y=we===Bf||we===kf||we===zf}if(Y){let we=T.texture.type,Ne=we===Xi||we===Gi||we===vh||we===xs||we===Uf||we===Of,Be=qe.getClearColor(),Ve=qe.getClearAlpha(),et=Be.r,je=Be.g,$e=Be.b;Ne?(f[0]=et,f[1]=je,f[2]=$e,f[3]=Ve,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=et,g[1]=je,g[2]=$e,g[3]=Ve,N.clearBufferiv(N.COLOR,0,g))}else J|=N.COLOR_BUFFER_BIT}V&&(J|=N.DEPTH_BUFFER_BIT),$&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),We.dispose(),ke.dispose(),se.dispose(),ve.dispose(),L.dispose(),U.dispose(),Le.dispose(),De.dispose(),ne.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Nn),Ke.removeEventListener("sessionend",vt),Me&&(Me.dispose(),Me=null),mn.stop()};function wt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let C=O.autoReset,V=xe.enabled,$=xe.autoUpdate,J=xe.needsUpdate,Y=xe.type;lt(),O.autoReset=C,xe.enabled=V,xe.autoUpdate=$,xe.needsUpdate=J,xe.type=Y}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function K(C){let V=C.target;V.removeEventListener("dispose",K),pe(V)}function pe(C){ye(C),se.remove(C)}function ye(C){let V=se.get(C).programs;V!==void 0&&(V.forEach(function($){ne.releaseProgram($)}),C.isShaderMaterial&&ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,J,Y,we){V===null&&(V=Xe);let Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Be=jp(C,V,$,J,Y);ie.setMaterial(J,Ne);let Ve=$.index,et=1;if(J.wireframe===!0){if(Ve=X.getWireframeAttribute($),Ve===void 0)return;et=2}let je=$.drawRange,$e=$.attributes.position,Dt=je.start*et,Tn=(je.start+je.count)*et;we!==null&&(Dt=Math.max(Dt,we.start*et),Tn=Math.min(Tn,(we.start+we.count)*et)),Ve!==null?(Dt=Math.max(Dt,0),Tn=Math.min(Tn,Ve.count)):$e!=null&&(Dt=Math.max(Dt,0),Tn=Math.min(Tn,$e.count));let Jt=Tn-Dt;if(Jt<0||Jt===1/0)return;Le.setup(Y,J,Be,$,Ve);let bi,At=Ut;if(Ve!==null&&(bi=_.get(Ve),At=it,At.setIndex(bi)),Y.isMesh)J.wireframe===!0?(ie.setLineWidth(J.wireframeLinewidth*Pe()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if(Y.isLine){let Je=J.linewidth;Je===void 0&&(Je=1),ie.setLineWidth(Je*Pe()),Y.isLineSegments?At.setMode(N.LINES):Y.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else Y.isPoints?At.setMode(N.POINTS):Y.isSprite&&At.setMode(N.TRIANGLES);if(Y.isBatchedMesh)At.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)At.renderInstances(Dt,Jt,Y.count);else if($.isInstancedBufferGeometry){let Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kc=Math.min($.instanceCount,Je);At.renderInstances(Dt,Jt,kc)}else At.render(Dt,Jt)};function at(C,V,$){C.transparent===!0&&C.side===ht&&C.forceSinglePass===!1?(C.side=zt,C.needsUpdate=!0,Xa(C,V,$),C.side=ci,C.needsUpdate=!0,Xa(C,V,$),C.side=ht):Xa(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),m=ke.get($),m.init(),x.push(m),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==$&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);let J=new Set;return C.traverse(function(Y){let we=Y.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let Be=we[Ne];at(Be,$,Y),J.add(Be)}else at(we,$,Y),J.add(we)}),x.pop(),m=null,J},this.compileAsync=function(C,V,$=null){let J=this.compile(C,V,$);return new Promise(Y=>{function we(){if(J.forEach(function(Ne){se.get(Ne).currentProgram.isReady()&&J.delete(Ne)}),J.size===0){Y(C);return}setTimeout(we,10)}ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let xt=null;function sn(C){xt&&xt(C)}function Nn(){mn.stop()}function vt(){mn.start()}let mn=new Kf;mn.setAnimationLoop(sn),typeof self!="undefined"&&mn.setContext(self),this.setAnimationLoop=function(C){xt=C,Ke.setAnimationLoop(C),C===null?mn.stop():mn.start()},Ke.addEventListener("sessionstart",Nn),Ke.addEventListener("sessionend",vt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(V),V=Ke.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,T),m=ke.get(C,x.length),m.init(),x.push(m),Ie.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ue.setFromProjectionMatrix(Ie),oe=this.localClippingEnabled,Z=me.init(this.clippingPlanes,oe),b=We.get(C,p.length),b.init(),p.push(b),ai(C,V,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(H,z),this.info.render.frame++,Z===!0&&me.beginShadows();let $=m.state.shadowsArray;if(xe.render($,C,V),Z===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1)&&qe.render(b,C),m.setupLights(v._useLegacyLights),V.isArrayCamera){let J=V.cameras;for(let Y=0,we=J.length;Y<we;Y++){let Ne=J[Y];Ld(b,C,Ne,Ne.viewport)}}else Ld(b,C,V);T!==null&&(ce.updateMultisampleRenderTarget(T),ce.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,V),Le.resetDefaultState(),P=-1,B=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function ai(C,V,$,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ue.intersectsSprite(C)){J&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);let Ne=U.update(C),Be=C.material;Be.visible&&b.push(C,Ne,Be,$,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ue.intersectsObject(C))){let Ne=U.update(C),Be=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ee.copy(Ne.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(Be)){let Ve=Ne.groups;for(let et=0,je=Ve.length;et<je;et++){let $e=Ve[et],Dt=Be[$e.materialIndex];Dt&&Dt.visible&&b.push(C,Ne,Dt,$,Ee.z,$e)}}else Be.visible&&b.push(C,Ne,Be,$,Ee.z,null)}}let we=C.children;for(let Ne=0,Be=we.length;Ne<Be;Ne++)ai(we[Ne],V,$,J)}function Ld(C,V,$,J){let Y=C.opaque,we=C.transmissive,Ne=C.transparent;m.setupLightsView($),Z===!0&&me.setGlobalState(v.clippingPlanes,$),we.length>0&&Xp(Y,we,V,$),J&&ie.viewport(S.copy(J)),Y.length>0&&qa(Y,V,$),we.length>0&&qa(we,V,$),Ne.length>0&&qa(Ne,V,$),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Xp(C,V,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let we=de.isWebGL2;Me===null&&(Me=new Ri(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?ha:Xi,minFilter:zn,samples:we?4:0})),v.getDrawingBufferSize(Ae),we?Me.setSize(Ae.x,Ae.y):Me.setSize(Do(Ae.x),Do(Ae.y));let Ne=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(q),E=v.getClearAlpha(),E<1&&v.setClearColor(16777215,.5),v.clear();let Be=v.toneMapping;v.toneMapping=qi,qa(C,$,J),ce.updateMultisampleRenderTarget(Me),ce.updateRenderTargetMipmap(Me);let Ve=!1;for(let et=0,je=V.length;et<je;et++){let $e=V[et],Dt=$e.object,Tn=$e.geometry,Jt=$e.material,bi=$e.group;if(Jt.side===ht&&Dt.layers.test(J.layers)){let At=Jt.side;Jt.side=zt,Jt.needsUpdate=!0,Id(Dt,$,J,Tn,Jt,bi),Jt.side=At,Jt.needsUpdate=!0,Ve=!0}}Ve===!0&&(ce.updateMultisampleRenderTarget(Me),ce.updateRenderTargetMipmap(Me)),v.setRenderTarget(Ne),v.setClearColor(q,E),v.toneMapping=Be}function qa(C,V,$){let J=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){let Ne=C[Y],Be=Ne.object,Ve=Ne.geometry,et=J===null?Ne.material:J,je=Ne.group;Be.layers.test($.layers)&&Id(Be,V,$,Ve,et,je)}}function Id(C,V,$,J,Y,we){C.onBeforeRender(v,V,$,J,Y,we),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,V,$,J,C,we),Y.transparent===!0&&Y.side===ht&&Y.forceSinglePass===!1?(Y.side=zt,Y.needsUpdate=!0,v.renderBufferDirect($,V,J,Y,C,we),Y.side=ci,Y.needsUpdate=!0,v.renderBufferDirect($,V,J,Y,C,we),Y.side=ht):v.renderBufferDirect($,V,J,Y,C,we),C.onAfterRender(v,V,$,J,Y,we)}function Xa(C,V,$){V.isScene!==!0&&(V=Xe);let J=se.get(C),Y=m.state.lights,we=m.state.shadowsArray,Ne=Y.state.version,Be=ne.getParameters(C,Y.state,we,V,$),Ve=ne.getProgramCacheKey(Be),et=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?L:ve).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",K),et=new Map,J.programs=et);let je=et.get(Ve);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Ne)return Nd(C,Be),je}else Be.uniforms=ne.getUniforms(C),C.onBuild($,Be,v),C.onBeforeCompile(Be,v),je=ne.acquireProgram(Be,Ve),et.set(Ve,je),J.uniforms=Be.uniforms;let $e=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=me.uniform),Nd(C,Be),J.needsLights=Kp(C),J.lightsStateVersion=Ne,J.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=je,J.uniformsList=null,je}function Dd(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=cr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Nd(C,V){let $=se.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function jp(C,V,$,J,Y){V.isScene!==!0&&(V=Xe),ce.resetTextureUnits();let we=V.fog,Ne=J.isMeshStandardMaterial?V.environment:null,Be=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:tn,Ve=(J.isMeshStandardMaterial?L:ve).get(J.envMap||Ne),et=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!$.morphAttributes.position,Dt=!!$.morphAttributes.normal,Tn=!!$.morphAttributes.color,Jt=qi;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Jt=v.toneMapping);let bi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=bi!==void 0?bi.length:0,Je=se.get(J),kc=m.state.lights;if(Z===!0&&(oe===!0||C!==B)){let Un=C===B&&J.id===P;me.setState(J,C,Un)}let Et=!1;J.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==kc.state.version||Je.outputColorSpace!==Be||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==Ve||J.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==me.numPlanes||Je.numIntersection!==me.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==je||Je.morphTargets!==$e||Je.morphNormals!==Dt||Je.morphColors!==Tn||Je.toneMapping!==Jt||de.isWebGL2===!0&&Je.morphTargetsCount!==At)&&(Et=!0):(Et=!0,Je.__version=J.version);let rs=Je.currentProgram;Et===!0&&(rs=Xa(J,V,Y));let Ud=!1,Xr=!1,Bc=!1,cn=rs.getUniforms(),as=Je.uniforms;if(ie.useProgram(rs.program)&&(Ud=!0,Xr=!0,Bc=!0),J.id!==P&&(P=J.id,Xr=!0),Ud||B!==C){cn.setValue(N,"projectionMatrix",C.projectionMatrix),cn.setValue(N,"viewMatrix",C.matrixWorldInverse);let Un=cn.map.cameraPosition;Un!==void 0&&Un.setValue(N,Ee.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&cn.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&cn.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,Xr=!0,Bc=!0)}if(Y.isSkinnedMesh){cn.setOptional(N,Y,"bindMatrix"),cn.setOptional(N,Y,"bindMatrixInverse");let Un=Y.skeleton;Un&&(de.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),cn.setValue(N,"boneTexture",Un.boneTexture,ce)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(cn.setOptional(N,Y,"batchingTexture"),cn.setValue(N,"batchingTexture",Y._matricesTexture,ce));let Hc=$.morphAttributes;if((Hc.position!==void 0||Hc.normal!==void 0||Hc.color!==void 0&&de.isWebGL2===!0)&&fe.update(Y,$,rs),(Xr||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,cn.setValue(N,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(as.envMap.value=Ve,as.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Xr&&(cn.setValue(N,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&Yp(as,Bc),we&&J.fog===!0&&re.refreshFogUniforms(as,we),re.refreshMaterialUniforms(as,J,F,M,Me),cr.upload(N,Dd(Je),as,ce)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(cr.upload(N,Dd(Je),as,ce),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&cn.setValue(N,"center",Y.center),cn.setValue(N,"modelViewMatrix",Y.modelViewMatrix),cn.setValue(N,"normalMatrix",Y.normalMatrix),cn.setValue(N,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Un=J.uniformsGroups;for(let Gc=0,$p=Un.length;Gc<$p;Gc++)if(de.isWebGL2){let Od=Un[Gc];De.update(Od,rs),De.bind(Od,rs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rs}function Yp(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Kp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,V,$){se.get(C.texture).__webglTexture=V,se.get(C.depthTexture).__webglTexture=$;let J=se.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let $=se.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,$=0){T=C,A=V,w=$;let J=!0,Y=null,we=!1,Ne=!1;if(C){let Ve=se.get(C);Ve.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(N.FRAMEBUFFER,null),J=!1):Ve.__webglFramebuffer===void 0?ce.setupRenderTarget(C):Ve.__hasExternalTextures&&ce.rebindTextures(C,se.get(C.texture).__webglTexture,se.get(C.depthTexture).__webglTexture);let et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ne=!0);let je=se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[V])?Y=je[V][$]:Y=je[V],we=!0):de.isWebGL2&&C.samples>0&&ce.useMultisampledRTT(C)===!1?Y=se.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[$]:Y=je,S.copy(C.viewport),R.copy(C.scissor),W=C.scissorTest}else S.copy(G).multiplyScalar(F).floor(),R.copy(te).multiplyScalar(F).floor(),W=be;if(ie.bindFramebuffer(N.FRAMEBUFFER,Y)&&de.drawBuffers&&J&&ie.drawBuffers(C,Y),ie.viewport(S),ie.scissor(R),ie.setScissorTest(W),we){let Ve=se.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ve.__webglTexture,$)}else if(Ne){let Ve=se.get(C.texture),et=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,$||0,et)}P=-1},this.readRenderTargetPixels=function(C,V,$,J,Y,we,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){ie.bindFramebuffer(N.FRAMEBUFFER,Be);try{let Ve=C.texture,et=Ve.format,je=Ve.type;if(et!==Fn&&Oe.convert(et)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=je===ha&&(ee.has("EXT_color_buffer_half_float")||de.isWebGL2&&ee.has("EXT_color_buffer_float"));if(je!==Xi&&Oe.convert(je)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===$n&&(de.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&$>=0&&$<=C.height-Y&&N.readPixels(V,$,J,Y,Oe.convert(et),Oe.convert(je),we)}finally{let Ve=T!==null?se.get(T).__webglFramebuffer:null;ie.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,V,$=0){let J=Math.pow(2,-$),Y=Math.floor(V.image.width*J),we=Math.floor(V.image.height*J);ce.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,C.x,C.y,Y,we),ie.unbindTexture()},this.copyTextureToTexture=function(C,V,$,J=0){let Y=V.image.width,we=V.image.height,Ne=Oe.convert($.format),Be=Oe.convert($.type);ce.setTexture2D($,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,J,C.x,C.y,Y,we,Ne,Be,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,J,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ne,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,J,C.x,C.y,Ne,Be,V.image),J===0&&$.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(C,V,$,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=Math.round(C.max.x-C.min.x),Ne=Math.round(C.max.y-C.min.y),Be=C.max.z-C.min.z+1,Ve=Oe.convert(J.format),et=Oe.convert(J.type),je;if(J.isData3DTexture)ce.setTexture3D(J,0),je=N.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ce.setTexture2DArray(J,0),je=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment);let $e=N.getParameter(N.UNPACK_ROW_LENGTH),Dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Jt=N.getParameter(N.UNPACK_SKIP_ROWS),bi=N.getParameter(N.UNPACK_SKIP_IMAGES),At=$.isCompressedTexture?$.mipmaps[Y]:$.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?N.texSubImage3D(je,Y,V.x,V.y,V.z,we,Ne,Be,Ve,et,At.data):J.isCompressedArrayTexture?N.compressedTexSubImage3D(je,Y,V.x,V.y,V.z,we,Ne,Be,Ve,At.data):N.texSubImage3D(je,Y,V.x,V.y,V.z,we,Ne,Be,Ve,et,At),N.pixelStorei(N.UNPACK_ROW_LENGTH,$e),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bi),Y===0&&J.generateMipmaps&&N.generateMipmap(je),ie.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ce.setTextureCube(C,0):C.isData3DTexture?ce.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ce.setTexture2DArray(C,0):ce.setTexture2D(C,0),ie.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,ie.reset(),Le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yh?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===fc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Kl=class extends pa{};Kl.prototype.isWebGL1Renderer=!0;var Ho=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ma=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new D,ys=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ms=class extends dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Js,Zr=new D,Qs=new D,er=new D,tr=new ae,Jr=new ae,tp=new Ge,mo=new D,Qr=new D,go=new D,cf=new ae,vl=new ae,lf=new ae,Jn=class extends yt{constructor(e=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new ys(n,3,0,!1)),Js.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=Js,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;bo(mo.set(-.5,-.5,0),er,a,Qs,i,r),bo(Qr.set(.5,-.5,0),er,a,Qs,i,r),bo(go.set(.5,.5,0),er,a,Qs,i,r),cf.set(0,0),vl.set(1,0),lf.set(1,1);let o=e.ray.intersectTriangle(mo,Qr,go,!1,Zr);if(o===null&&(bo(Qr.set(-.5,.5,0),er,a,Qs,i,r),vl.set(0,1),o=e.ray.intersectTriangle(mo,go,Qr,!1,Zr),o===null))return;let l=e.ray.origin.distanceTo(Zr);l<e.near||l>e.far||t.push({distance:l,point:Zr.clone(),uv:bs.getInterpolation(Zr,mo,Qr,go,cf,vl,lf,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bo(s,e,t,n,i,r){tr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Jr.x=r*tr.x-i*tr.y,Jr.y=i*tr.x+r*tr.y):Jr.copy(tr),s.copy(e),s.x+=Jr.x,s.y+=Jr.y,s.applyMatrix4(tp)}var hf=new D,df=new mt,uf=new mt,l_=new D,ff=new Ge,xo=new D,_l=new Ln,pf=new Ge,yl=new pr,Go=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wd,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(i),e.ray.intersectsSphere(_l)!==!1&&(pf.copy(i).invert(),yl.copy(e.ray).applyMatrix4(pf),!(this.boundingBox!==null&&yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Um?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;df.fromBufferAttribute(i.attributes.skinIndex,e),uf.fromBufferAttribute(i.attributes.skinWeight,e),hf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=uf.getComponent(r);if(a!==0){let o=df.getComponent(r);ff.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(l_.copy(hf).applyMatrix4(ff),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ga=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vo=class extends en{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Wt,h=Wt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mf=new Ge,h_=new Ge,Wo=class s{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:h_;mf.multiplyMatrices(o,t[r]),mf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vo(t,e,e,Fn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ga),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ss=class extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Ge,gf=new Ge,vo=[],bf=new Mn,d_=new Ge,ea=new Fe,ta=new Ln,Hn=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,d_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),bf.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),ta.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,nr),gf.multiplyMatrices(n,nr),ea.matrixWorld=gf,ea.raycast(e,vo);for(let a=0,o=vo.length;a<o;a++){let l=vo[a];l.instanceId=r,l.object=this,t.push(l)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vo(new Float32Array(i*this.count),i,this.count,Ff,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ba=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xf=new D,vf=new D,_f=new Ge,Ml=new pr,_o=new Ln,yr=class extends yt{constructor(e=new gt,t=new ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xf.fromBufferAttribute(t,i-1),vf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xf.distanceTo(vf);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;_f.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(_f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,d=new D,u=new D,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=p,y=x-1;v<y;v+=f){let A=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,w),Ml.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=p,y=x-1;v<y;v+=f){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Ml.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},yf=new D,Mf=new D,qo=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yf.fromBufferAttribute(t,i),Mf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yf.distanceTo(Mf);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xo=class extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ws=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sf=new Ge,$l=new pr,yo=new Ln,Mo=new D,Mr=class extends yt{constructor(e=new gt,t=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Sf.copy(i).invert(),$l.copy(e.ray).applyMatrix4(Sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,b=f;g<b;g++){let m=c.getX(g);Mo.fromBufferAttribute(d,m),wf(Mo,m,l,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,b=f;g<b;g++)Mo.fromBufferAttribute(d,g),wf(Mo,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wf(s,e,t,n,i,r,a){let o=$l.distanceSqToPoint(s);if(o<t){let l=new D;$l.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var jo=class extends en{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ae:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],a=[],o=new D,l=new Ge;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xa=class extends Gn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zl=class extends xa{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var So=new D,Sl=new Eh,wl=new Eh,El=new Eh,va=class extends Gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(So.subVectors(i[0],i[1]).add(i[0]),c=So);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(So.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Sl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,b,m),wl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,b,m),El.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),wl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),El.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Sl.calc(l),wl.calc(l),El.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ef(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function u_(s,e){let t=1-s;return t*t*e}function f_(s,e){return 2*(1-s)*s*e}function p_(s,e){return s*s*e}function oa(s,e,t,n){return u_(s,e)+f_(s,t)+p_(s,n)}function m_(s,e){let t=1-s;return t*t*t*e}function g_(s,e){let t=1-s;return 3*t*t*s*e}function b_(s,e){return 3*(1-s)*s*s*e}function x_(s,e){return s*s*s*e}function ca(s,e,t,n,i){return m_(s,e)+g_(s,t)+b_(s,n)+x_(s,i)}var Yo=class extends Gn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,i.x,r.x,a.x,o.x),ca(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jl=class extends Gn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,i.x,r.x,a.x,o.x),ca(e,i.y,r.y,a.y,o.y),ca(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends Gn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends Gn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends Gn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(oa(e,i.x,r.x,a.x),oa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eh=class extends Gn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(oa(e,i.x,r.x,a.x),oa(e,i.y,r.y,a.y),oa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ef(o,l.x,c.x,h.x,d.x),Ef(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},th=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:va,CubicBezierCurve:Yo,CubicBezierCurve3:Jl,EllipseCurve:xa,LineCurve:Ko,LineCurve3:Ql,QuadraticBezierCurve:$o,QuadraticBezierCurve3:eh,SplineCurve:Zo}),nh=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new th[i.type]().fromJSON(i))}return this}},Jo=class extends nh{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ko(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new $o(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Yo(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new xa(e,t,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_a=class s extends gt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=qt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new D,u=new ae,f=new D,g=new D,b=new D,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(g)}for(let x=0;x<=t;x++){let v=n+x*h*i,y=Math.sin(v),A=Math.cos(v);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*A,a.push(d.x,d.y,d.z),u.x=x/t,u.y=w/(e.length-1),o.push(u.x,u.y);let T=l[3*w+0]*y,P=l[3*w+1],B=l[3*w+0]*A;c.push(T,P,B)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let y=v+x*e.length,A=y,w=y+e.length,T=y+e.length+1,P=y+1;r.push(A,w,P),r.push(T,P,w)}this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Qo=class s extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vn=class s extends gt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,b=[],m=n/2,p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2));function x(){let y=new D,A=new D,w=0,T=(t-e)/n;for(let P=0;P<=r;P++){let B=[],S=P/r,R=S*(t-e)+e;for(let W=0;W<=i;W++){let q=W/i,E=q*l+o,I=Math.sin(E),M=Math.cos(E);A.x=R*I,A.y=-S*n+m,A.z=R*M,d.push(A.x,A.y,A.z),y.set(I,T,M).normalize(),u.push(y.x,y.y,y.z),f.push(q,1-S),B.push(g++)}b.push(B)}for(let P=0;P<i;P++)for(let B=0;B<r;B++){let S=b[B][P],R=b[B+1][P],W=b[B+1][P+1],q=b[B][P+1];h.push(S,R,q),h.push(R,W,q),w+=6}c.addGroup(p,w,0),p+=w}function v(y){let A=g,w=new ae,T=new D,P=0,B=y===!0?e:t,S=y===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),g++;let R=g;for(let W=0;W<=i;W++){let E=W/i*l+o,I=Math.cos(E),M=Math.sin(E);T.x=B*M,T.y=m*S,T.z=B*I,d.push(T.x,T.y,T.z),u.push(0,S,0),w.x=I*.5+.5,w.y=M*.5*S+.5,f.push(w.x,w.y),g++}for(let W=0;W<i;W++){let q=A+W,E=R+W;y===!0?h.push(E,E+1,q):h.push(E+1,E,q),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class s extends Vn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ki=class extends Jo{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Jo().fromJSON(i))}return this}},v_={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=np(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=w_(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ya(r,a,t,o,l,f,0),a}};function np(s,e,t,n,i){let r,a;if(i===U_(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Tf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Tf(r,s[r],s[r+1],a);return a&&mc(a,a.next)&&(Sa(a),a=a.next),a}function Es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(mc(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ya(s,e,t,n,i,r,a){if(!s)return;!a&&r&&C_(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?y_(s,n,i,r):__(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Sa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=M_(Es(s),e,t),ya(s,e,t,n,i,r,2)):a===2&&S_(s,e,t,n,i,r):ya(Es(s),e,t,n,i,r,1);break}}}function __(s){let e=s.prev,t=s,n=s.next;if(Rt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&rr(i,o,r,l,a,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function y_(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Rt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,b=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=ih(f,g,e,t,n),x=ih(b,m,e,t,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&rr(o,h,l,d,c,u,v.x,v.y)&&Rt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=b&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&rr(o,h,l,d,c,u,y.x,y.y)&&Rt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&rr(o,h,l,d,c,u,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=b&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&rr(o,h,l,d,c,u,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function M_(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!mc(i,r)&&ip(i,n,n.next,r)&&Ma(i,r)&&Ma(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Sa(n),Sa(n.next),n=s=r),n=n.next}while(n!==s);return Es(n)}function S_(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&I_(a,o)){let l=sp(a,o);a=Es(a,a.next),l=Es(l,l.next),ya(a,e,t,n,i,r,0),ya(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function w_(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=np(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(L_(c));for(i.sort(E_),r=0;r<i.length;r++)t=T_(i[r],t);return t}function E_(s,e){return s.x-e.x}function T_(s,e){let t=A_(s,e);if(!t)return e;let n=sp(t,s);return Es(n,n.next),Es(t,t.next)}function A_(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&rr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Ma(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&R_(i,t)))&&(i=t,h=d)),t=t.next;while(t!==o);return i}function R_(s,e){return Rt(s.prev,s,e.prev)<0&&Rt(e.next,s,s.next)<0}function C_(s,e,t,n){let i=s;do i.z===0&&(i.z=ih(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,P_(i)}function P_(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function ih(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function L_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function rr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function I_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!D_(s,e)&&(Ma(s,e)&&Ma(e,s)&&N_(s,e)&&(Rt(s.prev,s,e.prev)||Rt(s,e.prev,e))||mc(s,e)&&Rt(s.prev,s,s.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function mc(s,e){return s.x===e.x&&s.y===e.y}function ip(s,e,t,n){let i=Eo(Rt(s,e,t)),r=Eo(Rt(s,e,n)),a=Eo(Rt(t,n,s)),o=Eo(Rt(t,n,e));return!!(i!==r&&a!==o||i===0&&wo(s,t,e)||r===0&&wo(s,n,e)||a===0&&wo(t,s,n)||o===0&&wo(t,e,n))}function wo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Eo(s){return s>0?1:s<0?-1:0}function D_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ip(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ma(s,e){return Rt(s.prev,s,s.next)<0?Rt(s,e,s.next)>=0&&Rt(s,s.prev,e)>=0:Rt(s,e,s.prev)<0||Rt(s,s.next,e)<0}function N_(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function sp(s,e){let t=new sh(s.i,s.x,s.y),n=new sh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Tf(s,e,t,n){let i=new sh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Sa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ji=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Af(e),Rf(n,e);let a=e.length;t.forEach(Af);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Rf(n,t[l]);let o=v_.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Af(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ec=class s extends gt{constructor(e=new Ki([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new He(i,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:O_,v,y=!1,A,w,T,P;p&&(v=p.getSpacedPoints(h),y=!0,u=!1,A=p.computeFrenetFrames(h,!1),w=new D,T=new D,P=new D),u||(m=0,f=0,g=0,b=0);let B=o.extractPoints(c),S=B.shape,R=B.holes;if(!ji.isClockWise(S)){S=S.reverse();for(let N=0,ue=R.length;N<ue;N++){let ee=R[N];ji.isClockWise(ee)&&(R[N]=ee.reverse())}}let q=ji.triangulateShape(S,R),E=S;for(let N=0,ue=R.length;N<ue;N++){let ee=R[N];S=S.concat(ee)}function I(N,ue,ee){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ue,ee)}let M=S.length,F=q.length;function H(N,ue,ee){let de,ie,O,se=N.x-ue.x,ce=N.y-ue.y,ve=ee.x-N.x,L=ee.y-N.y,_=se*se+ce*ce,X=se*L-ce*ve;if(Math.abs(X)>Number.EPSILON){let U=Math.sqrt(_),ne=Math.sqrt(ve*ve+L*L),re=ue.x-ce/U,We=ue.y+se/U,ke=ee.x-L/ne,me=ee.y+ve/ne,xe=((ke-re)*L-(me-We)*ve)/(se*L-ce*ve);de=re+se*xe-N.x,ie=We+ce*xe-N.y;let qe=de*de+ie*ie;if(qe<=2)return new ae(de,ie);O=Math.sqrt(qe/2)}else{let U=!1;se>Number.EPSILON?ve>Number.EPSILON&&(U=!0):se<-Number.EPSILON?ve<-Number.EPSILON&&(U=!0):Math.sign(ce)===Math.sign(L)&&(U=!0),U?(de=-ce,ie=se,O=Math.sqrt(_)):(de=se,ie=ce,O=Math.sqrt(_/2))}return new ae(de/O,ie/O)}let z=[];for(let N=0,ue=E.length,ee=ue-1,de=N+1;N<ue;N++,ee++,de++)ee===ue&&(ee=0),de===ue&&(de=0),z[N]=H(E[N],E[ee],E[de]);let G=[],te,be=z.concat();for(let N=0,ue=R.length;N<ue;N++){let ee=R[N];te=[];for(let de=0,ie=ee.length,O=ie-1,se=de+1;de<ie;de++,O++,se++)O===ie&&(O=0),se===ie&&(se=0),te[de]=H(ee[de],ee[O],ee[se]);G.push(te),be=be.concat(te)}for(let N=0;N<m;N++){let ue=N/m,ee=f*Math.cos(ue*Math.PI/2),de=g*Math.sin(ue*Math.PI/2)+b;for(let ie=0,O=E.length;ie<O;ie++){let se=I(E[ie],z[ie],de);Ie(se.x,se.y,-ee)}for(let ie=0,O=R.length;ie<O;ie++){let se=R[ie];te=G[ie];for(let ce=0,ve=se.length;ce<ve;ce++){let L=I(se[ce],te[ce],de);Ie(L.x,L.y,-ee)}}}let Ue=g+b;for(let N=0;N<M;N++){let ue=u?I(S[N],be[N],Ue):S[N];y?(T.copy(A.normals[0]).multiplyScalar(ue.x),w.copy(A.binormals[0]).multiplyScalar(ue.y),P.copy(v[0]).add(T).add(w),Ie(P.x,P.y,P.z)):Ie(ue.x,ue.y,0)}for(let N=1;N<=h;N++)for(let ue=0;ue<M;ue++){let ee=u?I(S[ue],be[ue],Ue):S[ue];y?(T.copy(A.normals[N]).multiplyScalar(ee.x),w.copy(A.binormals[N]).multiplyScalar(ee.y),P.copy(v[N]).add(T).add(w),Ie(P.x,P.y,P.z)):Ie(ee.x,ee.y,d/h*N)}for(let N=m-1;N>=0;N--){let ue=N/m,ee=f*Math.cos(ue*Math.PI/2),de=g*Math.sin(ue*Math.PI/2)+b;for(let ie=0,O=E.length;ie<O;ie++){let se=I(E[ie],z[ie],de);Ie(se.x,se.y,d+ee)}for(let ie=0,O=R.length;ie<O;ie++){let se=R[ie];te=G[ie];for(let ce=0,ve=se.length;ce<ve;ce++){let L=I(se[ce],te[ce],de);y?Ie(L.x,L.y+v[h-1].y,v[h-1].x+ee):Ie(L.x,L.y,d+ee)}}}Z(),oe();function Z(){let N=i.length/3;if(u){let ue=0,ee=M*ue;for(let de=0;de<F;de++){let ie=q[de];Ae(ie[2]+ee,ie[1]+ee,ie[0]+ee)}ue=h+m*2,ee=M*ue;for(let de=0;de<F;de++){let ie=q[de];Ae(ie[0]+ee,ie[1]+ee,ie[2]+ee)}}else{for(let ue=0;ue<F;ue++){let ee=q[ue];Ae(ee[2],ee[1],ee[0])}for(let ue=0;ue<F;ue++){let ee=q[ue];Ae(ee[0]+M*h,ee[1]+M*h,ee[2]+M*h)}}n.addGroup(N,i.length/3-N,0)}function oe(){let N=i.length/3,ue=0;Me(E,ue),ue+=E.length;for(let ee=0,de=R.length;ee<de;ee++){let ie=R[ee];Me(ie,ue),ue+=ie.length}n.addGroup(N,i.length/3-N,1)}function Me(N,ue){let ee=N.length;for(;--ee>=0;){let de=ee,ie=ee-1;ie<0&&(ie=N.length-1);for(let O=0,se=h+m*2;O<se;O++){let ce=M*O,ve=M*(O+1),L=ue+de+ce,_=ue+ie+ce,X=ue+ie+ve,U=ue+de+ve;Ee(L,_,X,U)}}}function Ie(N,ue,ee){l.push(N),l.push(ue),l.push(ee)}function Ae(N,ue,ee){Xe(N),Xe(ue),Xe(ee);let de=i.length/3,ie=x.generateTopUV(n,i,de-3,de-2,de-1);Pe(ie[0]),Pe(ie[1]),Pe(ie[2])}function Ee(N,ue,ee,de){Xe(N),Xe(ue),Xe(de),Xe(ue),Xe(ee),Xe(de);let ie=i.length/3,O=x.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);Pe(O[0]),Pe(O[1]),Pe(O[3]),Pe(O[1]),Pe(O[2]),Pe(O[3])}function Xe(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function Pe(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return F_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new th[i.type]().fromJSON(i)),new s(n,e.options)}},O_={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-d),new ae(u,1-g),new ae(b,1-p)]:[new ae(o,1-l),new ae(h,1-d),new ae(f,1-g),new ae(m,1-p)]}};function F_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var tc=class s extends gt{constructor(e=new Ki([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(i,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(a,2));function c(h){let d=i.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;ji.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];ji.isClockWise(x)===!0&&(g[m]=x.reverse())}let b=ji.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){let x=f[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=b.length;m<p;m++){let x=b[m],v=x[0]+d,y=x[1]+d,A=x[2]+d;n.push(v,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return z_(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function z_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var li=class s extends gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let x=[],v=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let w=A/t;d.x=-e*Math.cos(i+w*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+w*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(w+y,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let v=h[p][x+1],y=h[p][x],A=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(v,y,w),(p!==n-1||l<Math.PI)&&f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wr=class s extends gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let b=g/i*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(b),d.y=(e+t*Math.cos(m))*Math.sin(b),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let b=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(b,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wn=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},_n=class extends dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var rn=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function To(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function k_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function B_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function rp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var $i=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends $i{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case bu:r=e,o=2*t-n;break;case xu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:a=e,l=2*n-t;break;case xu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,x=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,y=f*m-f*b;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+x*a[c+A]+v*a[l+A]+y*a[d+A];return r}},ah=class extends $i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},oh=class extends $i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case _s:t=this.InterpolantFactoryMethodLinear;break;case Yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return _s;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&k_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let b=t[d+g];if(b!==t[u+g]||b!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=_s;var Zi=class extends Wn{};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ur;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends Wn{};nc.prototype.ValueTypeName="color";var Ci=class extends Wn{};Ci.prototype.ValueTypeName="number";var ch=class extends $i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},hi=class extends Wn{InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.DefaultInterpolation=_s;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Wn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ur;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Wn{};Pi.prototype.ValueTypeName="vector";var ic=class{constructor(e,t=-1,n,i=Vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(G_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=B_(l);l=Cf(l,1,h),c=Cf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ci(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,b){if(f.length!==0){let m=[],p=[];rp(f,m,p,g),m.length!==0&&b.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)f[u[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){let v=u[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Ci(".morphTargetInfluence["+b+"]",m,p))}l=f.length*a}else{let f=".bones["+t[d].name+"]";n(Pi,f+".position",u,"pos",i),n(hi,f+".quaternion",u,"rot",i),n(Pi,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function H_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return nc;case"quaternion":return hi;case"bool":case"boolean":return Zi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function G_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=H_(s.type);if(s.times===void 0){let t=[],n=[];rp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},lh=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},V_=new lh,Li=class{constructor(e){this.manager=e!==void 0?e:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si={},hh=class extends Error{constructor(e,t){super(e),this.response=t}},wa=class extends Li{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Si[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0,b=0,m=new ReadableStream({start(p){x();function x(){d.read().then(({done:v,value:y})=>{if(v)p.close();else{b+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let w=0,T=h.length;w<T;w++){let P=h[w];P.onProgress&&P.onProgress(A)}p.enqueue(y),x()}})}}});return new Response(m)}else throw new hh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Vi.add(e,c);let h=Si[e];delete Si[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Si[e];if(h===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var dh=class extends Li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=da("img");function l(){h(),Vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var sc=class extends Li{constructor(e){super(e)}load(e,t,n,i){let r=new en,a=new dh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Er=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},rc=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new Ge,Pf=new D,Lf=new D,Ea=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=class extends Ea{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Tr=class extends Er{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},If=new Ge,na=new D,Al=new D,fh=class extends Ea{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),n.position.copy(na),Al.copy(n.position),Al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Al),n.updateMatrixWorld(),i.makeTranslation(-na.x,-na.y,-na.z),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If)}},ac=class extends Er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ph=class extends Ea{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qi=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var oc=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(e,l),r.manager.itemStart(e)}};var Th="\\[\\]\\.:\\/",W_=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",q_="[^"+Th.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",Ah),j_=/(WCOD+)?/.source.replace("WCOD",q_),Y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),$_=new RegExp("^"+X_+j_+Y_+K_+"$"),Z_=["material","materials","bones","map"],mh=class{constructor(e,t,n){let i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){let t=$_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=mh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);var Qn=[{id:"drizzie",name:"Drizzie City",nx:8,nz:8,x0:-560,z0:-560,kind:"metro"},{id:"serrana",name:"Vila Serrana",nx:4,nz:4,x0:-3e3,z0:-2300,kind:"town"},{id:"azul",name:"Porto Azul",nx:5,nz:3,x0:1900,z0:1300,kind:"port"},{id:"monte",name:"Monte Alto",nx:4,nz:3,x0:2700,z0:-2300,kind:"mountain"}],gc=Object.fromEntries(Qn.map(s=>[s.id,s])),As=s=>s.x0+s.nx*140,Cr=s=>s.z0+s.nz*140;function bc(s,e,t){return s.kind==="metro"?e===1&&t===5||e===5&&t===6||e===2&&t===1?"park":e>=2&&e<=5&&t>=2&&t<=5?"downtown":e>=6?"industrial":"residential":s.kind==="town"||s.kind==="mountain"?e===1&&t===1?"park":"town":t===s.nz-1?"port":e>=3?"industrial":"town"}var ap=[[-2100,-4300],[-1750,-3100],[-1400,-2050],[-1250,-1e3],[-1080,0],[-850,800],[-350,1400],[250,1700],[500,2100]],ei=54,op=[{id:"BR-101",from:["drizzie",0,4],to:["serrana",4,2],pts:[[-570,0],[-720,0],[-900,0],[-1100,-160],[-1350,-480],[-1560,-820],[-1760,-1180],[-1980,-1520],[-2200,-1840],[-2330,-2020],[-2430,-2020]],hills:7},{id:"SP-280",from:["drizzie",8,4],to:["azul",2,0],pts:[[570,0],[760,0],[960,0],[1100,0],[1350,80],[1620,280],[1860,560],[2060,860],[2180,1100],[2180,1290]],hills:9},{id:"BR-040",from:["azul",5,1],to:["monte",2,3],pts:[[2610,1440],[2760,1440],[2950,1380],[3150,1150],[3300,800],[3350,400],[3250,0],[3150,-400],[3250,-800],[3200,-1200],[3050,-1550],[2980,-1750],[2980,-1870]],hills:16},{id:"RS-030",from:["drizzie",4,0],to:null,pts:[[0,-570],[0,-800],[-120,-1080],[-420,-1380],[-800,-1640],[-1150,-1880],[-1450,-2e3],[-1720,-2150],[-1960,-2420],[-2100,-2650],[-2100,-2900],[-2100,-3100]],hills:10}],ti=[{id:"garagem",name:"Garagem Drizzie",city:"drizzie",bx:2,bz:6,side:"n",kind:"garage",color:3108830},{id:"cd",name:"Centro de Distribui\xE7\xE3o",city:"drizzie",bx:6,bz:1,side:"w",kind:"warehouse",color:14721056},{id:"mercado",name:"Mercado Central",city:"drizzie",bx:3,bz:3,side:"w",kind:"market",color:3055186},{id:"hospital",name:"Hospital Municipal",city:"drizzie",bx:4,bz:5,side:"e",kind:"hospital",color:15790320},{id:"obra",name:"Canteiro de Obras",city:"drizzie",bx:1,bz:2,side:"e",kind:"construction",color:15774720},{id:"posto",name:"Posto Rodovi\xE1rio",city:"drizzie",bx:5,bz:7,side:"n",kind:"fuel",color:13639712},{id:"siderurgica",name:"Sider\xFArgica A\xE7o Forte",city:"drizzie",bx:7,bz:5,side:"w",kind:"steel",color:9059114},{id:"silo",name:"Silo Agr\xEDcola",city:"serrana",bx:0,bz:1,side:"e",kind:"silo",color:13152874},{id:"fabrica",name:"F\xE1brica de M\xF3veis",city:"serrana",bx:2,bz:2,side:"w",kind:"factory",color:10119999},{id:"mineradora",name:"Mineradora Serra Negra",city:"monte",bx:3,bz:0,side:"w",kind:"quarry",color:7232074},{id:"vinicola",name:"Vin\xEDcola Monte Alto",city:"monte",bx:0,bz:2,side:"e",kind:"farm",color:8068922},{id:"porto",name:"Porto Azul",city:"azul",bx:2,bz:2,side:"n",kind:"port",color:2068400},{id:"refinaria",name:"Refinaria Petrosul",city:"azul",bx:4,bz:1,side:"w",kind:"refinery",color:14211288},{id:"fazenda",name:"Fazenda Boa Vista",hw:"BR-101",lot:[-862,11,-742,131],side:"n",kind:"farm",color:11549230},{id:"eolica",name:"Parque E\xF3lico",hw:"SP-280",lot:[900,-131,1020,-11],side:"s",kind:"wind",color:15658734},{id:"serraria",name:"Serraria Pinheiro",hw:"RS-030",lot:[-2089,-3020,-1969,-2900],side:"w",kind:"sawmill",color:8016432},{id:"pedreira",name:"Pedreira Rocha Viva",hw:"RS-030",lot:[-2160,-3220,-2040,-3100],side:"s",kind:"quarry",color:10261124}],Ii=Object.fromEntries(ti.map(s=>[s.id,s])),Pr=[{id:"mini",name:"Mini Carga 1.0",hp:95,cap:1.5,mass:1,level:1,price:0,rigid:!0,axles:2,model:"labo",color:4030417,vmax:95,desc:"Picape de carga compacta para entregas leves."},{id:"urbano",name:"Leve Ba\xFA 4.5",hp:160,cap:5,mass:4.5,level:2,price:8e3,rigid:!0,axles:2,model:"canter",color:15921906,vmax:100,desc:"Caminh\xE3o leve com ba\xFA, \xE1gil na cidade."},{id:"toco",name:"Toco 11-240",hp:240,cap:12,mass:7.5,level:3,price:15e3,rigid:!0,axles:2,cab:"cabover",roof:"mid",color:3108830,vmax:100,desc:"Caminh\xE3o m\xE9dio de carroceria ba\xFA."},{id:"cavalo",cfg:"6x2",name:"Cavalo 360",hp:360,cap:30,mass:8.5,level:6,price:6e4,rigid:!1,axles:3,model:"volvo",cab:"cabover",roof:"high",color:11866651,vmax:110,desc:"Cavalo mec\xE2nico cara-chata para carretas."},{id:"rodo",cfg:"6x4",name:"Rodomax 480",hp:480,cap:45,mass:9,level:10,price:14e4,rigid:!1,axles:3,model:"volvo",cab:"cabover",roof:"high",color:1916782,vmax:110,desc:"Cavalo 6x2 de teto alto para longas viagens."},{id:"titan",cfg:"6x4",name:"Titan 620 Bicudo",hp:620,cap:65,mass:10.5,level:15,price:28e4,rigid:!1,axles:3,cab:"conventional",roof:"high",color:2238513,vmax:105,desc:"Bicudo 6x4 de cap\xF4 longo e muita tra\xE7\xE3o."},{id:"colosso",cfg:"8x4",name:"Colosso 750 8x4",hp:750,cap:90,mass:12.5,level:20,price:5e5,rigid:!1,axles:4,cab:"conventional",roof:"high",color:15769600,vmax:95,desc:"Gigante para cargas especiais e indivis\xEDveis."}],Aa=Object.fromEntries(Pr.map(s=>[s.id,s])),Ra=[{id:"encomendas",name:"Encomendas",icon:"\u{1F4E6}",t:1,lvl:1,trailer:"box",rate:1,from:["cd"],to:["mercado","hospital","posto","obra","fabrica"]},{id:"medicamentos",name:"Medicamentos",icon:"\u{1F48A}",t:1.5,lvl:1,trailer:"box",rate:1.35,fragile:!0,from:["cd","porto"],to:["hospital"]},{id:"eletronicos",name:"Eletr\xF4nicos",icon:"\u{1F4FA}",t:2.5,lvl:2,trailer:"box",rate:1.4,fragile:!0,from:["porto"],to:["cd","mercado"]},{id:"hortifruti",name:"Hortifr\xFAti",icon:"\u{1F96C}",t:4,lvl:1,trailer:"box",rate:1.1,from:["fazenda"],to:["mercado","cd"]},{id:"moveis",name:"M\xF3veis",icon:"\u{1F6CB}\uFE0F",t:6,lvl:3,trailer:"box",rate:1.15,fragile:!0,from:["fabrica"],to:["mercado","cd","obra"]},{id:"bebidas",name:"Bebidas",icon:"\u{1F964}",t:9,lvl:3,trailer:"box",rate:1.05,from:["cd"],to:["mercado","posto"]},{id:"racao",name:"Ra\xE7\xE3o Animal",icon:"\u{1F33E}",t:12,lvl:4,trailer:"box",rate:1,from:["silo"],to:["fazenda"]},{id:"trator",name:"Trator Agr\xEDcola",icon:"\u{1F69C}",t:14,lvl:6,trailer:"lowboy",model:"tractor",rate:1.5,from:["porto"],to:["fazenda","silo"]},{id:"madeira",name:"Toras de Madeira",icon:"\u{1FAB5}",t:18,lvl:6,trailer:"flatbed",model:"logs",rate:1.05,from:["serraria"],to:["fabrica","obra","porto"]},{id:"conteiner",name:"Cont\xEAiner 40 p\xE9s",icon:"\u{1F6A2}",t:26,lvl:7,trailer:"flatbed",model:"container",rate:1.15,from:["porto"],to:["cd","siderurgica","fabrica"]},{id:"graos",name:"Soja a Granel",icon:"\u{1FAD8}",t:28,lvl:8,trailer:"bulk",rate:1,from:["fazenda","silo"],to:["porto"]},{id:"combustivel",name:"Combust\xEDvel",icon:"\u26FD",t:30,lvl:9,trailer:"tank",rate:1.45,hazard:!0,from:["refinaria"],to:["posto","fazenda","pedreira"]},{id:"cimento",name:"Cimento",icon:"\u{1F3D7}\uFE0F",t:32,lvl:10,trailer:"tank",model:"silo",rate:1.05,from:["pedreira"],to:["obra"]},{id:"vinho",name:"Vinho em Caixas",icon:"\u{1F377}",t:7,lvl:3,trailer:"box",rate:1.3,fragile:!0,from:["vinicola"],to:["mercado","cd","porto"]},{id:"minerio",name:"Min\xE9rio de Ferro",icon:"\u26CF\uFE0F",t:34,lvl:11,trailer:"bulk",rate:1.1,from:["mineradora"],to:["siderurgica","porto"]},{id:"granito",name:"Blocos de Granito",icon:"\u{1FAA8}",t:40,lvl:12,trailer:"flatbed",model:"stone",rate:1.2,from:["mineradora"],to:["obra","porto"]},{id:"bobinas",name:"Bobinas de A\xE7o",icon:"\u{1F9F2}",t:36,lvl:11,trailer:"flatbed",model:"coils",rate:1.2,from:["siderurgica"],to:["porto","fabrica"]},{id:"vigas",name:"Vigas de A\xE7o",icon:"\u{1F3E2}",t:42,lvl:13,trailer:"flatbed",model:"beams",rate:1.25,from:["siderurgica"],to:["obra"]},{id:"escavadeira",name:"Escavadeira",icon:"\u{1F6A7}",t:48,lvl:15,trailer:"lowboy",model:"excavator",rate:1.55,from:["porto"],to:["pedreira","obra"]},{id:"transformador",name:"Transformador",icon:"\u26A1",t:56,lvl:18,trailer:"lowboy",model:"transformer",rate:1.7,fragile:!0,from:["siderurgica","porto"],to:["refinaria","eolica"]},{id:"pa_eolica",name:"P\xE1 E\xF3lica",icon:"\u{1F300}",t:62,lvl:20,trailer:"lowboy",model:"blade",rate:1.9,fragile:!0,from:["porto"],to:["eolica"]},{id:"prensa",name:"Prensa Industrial",icon:"\u{1F3ED}",t:85,lvl:24,trailer:"lowboy",model:"press",rate:2.1,from:["porto"],to:["siderurgica","fabrica"]}],fn=Object.fromEntries(Ra.map(s=>[s.id,s])),Lr=s=>200+180*(s-1);function cp(s){return s?s.trailer==="lowboy"?9:s.trailer==="tank"?7:6.5:0}var Pt={x0:-3400,z0:-3500,x1:3700,z1:2300};var nn=1024,lp=4,Rh={};function hp(s,e){nn=s,lp=e}function In(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function tt(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function pn(s,e,t,n,i,r=!0){let a=s.getImageData(0,0,e,t),o=a.data,l=In(i);for(let c=0;c<o.length;c+=4){let h=(l()-.5)*n;r?(o[c]+=h,o[c+1]+=h,o[c+2]+=h):(o[c]+=h,o[c+1]+=(l()-.5)*n,o[c+2]+=(l()-.5)*n)}s.putImageData(a,0,0)}function Ir(s,e,t,n,i,r,a){let o=In(a);for(let l=0;l<n;l++){s.fillStyle=i[o()*i.length|0],s.globalAlpha=.25+o()*.5;let c=.5+o()*r;s.beginPath(),s.arc(o()*e,o()*t,c,0,Math.PI*2),s.fill()}s.globalAlpha=1}function nt(s,e=!0){let t=new jo(s);return t.colorSpace=Ft,t.anisotropy=lp,t.generateMipmaps=!0,t.minFilter=zn,t.magFilter=Vt,e&&(t.wrapS=t.wrapT=Ai),t}function rt(s,e){return Rh[s]||(Rh[s]=e()),Rh[s]}function xc(s,e,t,n="#3b3d40"){s.fillStyle=n,s.fillRect(0,0,e,e),Ir(s,e,e,e*6,["#5a5c60","#2a2b2d","#6b6b6b","#232323"],e/512,t),pn(s,e,e,22,t+1)}var Te={asphalt:()=>rt("asphalt",()=>{let s=nn/2,[e,t]=tt(s,s);return xc(t,s,11),nt(e)}),road:()=>rt("road",()=>{let s=nn,[e,t]=tt(s,s);xc(t,s,21);let n=s/20;t.fillStyle="rgba(20,20,20,0.18)";for(let a of[1.6,3.4,6.6,8.4])t.fillRect((10+a)*n-n*.6,0,n*1.2,s),t.fillRect((10-a)*n-n*.6,0,n*1.2,s);let i=(a,o,l,c)=>{t.fillStyle=a,c?t.fillRect(o*n-l*n/2,s*.1,l*n,s*c):t.fillRect(o*n-l*n/2,0,l*n,s)};i("#e8b923",9.8,.15),i("#e8b923",10.2,.15),i("#f2f2f2",5,.15,.45),i("#f2f2f2",15,.15,.45),i("#f2f2f2",.5,.18),i("#f2f2f2",19.5,.18);let r=In(5);t.globalCompositeOperation="source-atop";for(let a=0;a<s*3;a++)t.fillStyle="rgba(60,60,62,0.35)",t.fillRect(r()*s,r()*s,1+r()*3,1+r()*3);return t.globalCompositeOperation="source-over",nt(e)}),intersection:()=>rt("intersection",()=>{let s=nn,[e,t]=tt(s,s);xc(t,s,31);let n=s/20;t.fillStyle="rgba(240,240,240,0.92)";for(let i=0;i<8;i++){let r=(1.5+i*2.2)*n;t.fillRect(r,.3*n,1.1*n,2.6*n),t.fillRect(r,s-2.9*n,1.1*n,2.6*n),t.fillRect(.3*n,r,2.6*n,1.1*n),t.fillRect(s-2.9*n,r,2.6*n,1.1*n)}return pn(t,s,s,10,32),nt(e,!1)}),concrete:()=>rt("concrete",()=>{let s=nn/2,[e,t]=tt(s,s);t.fillStyle="#a9a69f",t.fillRect(0,0,s,s),pn(t,s,s,26,41),Ir(t,s,s,s*2,["#8f8c86","#bdbab3"],s/400,42),t.strokeStyle="rgba(70,68,64,0.55)",t.lineWidth=Math.max(1,s/256);for(let n=0;n<=4;n++)t.beginPath(),t.moveTo(n*s/4,0),t.lineTo(n*s/4,s),t.stroke(),t.beginPath(),t.moveTo(0,n*s/4),t.lineTo(s,n*s/4),t.stroke();return nt(e)}),lot:()=>rt("lot",()=>{let s=nn/2,[e,t]=tt(s,s);t.fillStyle="#8e8b85",t.fillRect(0,0,s,s),pn(t,s,s,30,51),Ir(t,s,s,s,["#6f6c66","#a5a29c","#5d5a55"],s/200,52),t.strokeStyle="rgba(50,48,45,0.5)",t.lineWidth=2,t.strokeRect(1,1,s-2,s-2);let n=In(53);for(let i=0;i<6;i++){let r=n()*s,a=n()*s,o=t.createRadialGradient(r,a,0,r,a,s/10);o.addColorStop(0,"rgba(30,30,30,0.25)"),o.addColorStop(1,"rgba(30,30,30,0)"),t.fillStyle=o,t.fillRect(0,0,s,s)}return nt(e)}),grass:()=>rt("grass",()=>{let s=nn/2,[e,t]=tt(s,s);t.fillStyle="#4f7a32",t.fillRect(0,0,s,s);let n=In(61);for(let i=0;i<40;i++){let r=n()*s,a=n()*s,o=s*(.05+n()*.15),l=t.createRadialGradient(r,a,0,r,a,o),c=n()>.5?"96,140,58":"62,96,38";l.addColorStop(0,`rgba(${c},0.45)`),l.addColorStop(1,`rgba(${c},0)`),t.fillStyle=l,t.fillRect(0,0,s,s)}t.lineWidth=1;for(let i=0;i<s*14;i++){let r=n()*s,a=n()*s;t.strokeStyle=n()>.5?"rgba(120,170,70,0.5)":"rgba(40,70,25,0.5)",t.beginPath(),t.moveTo(r,a),t.lineTo(r+(n()-.5)*3,a-2-n()*4),t.stroke()}return pn(t,s,s,14,62,!1),nt(e)}),field:()=>rt("field",()=>{let s=nn/2,[e,t]=tt(s,s);t.fillStyle="#7a5a36",t.fillRect(0,0,s,s),pn(t,s,s,30,71);let n=16;for(let i=0;i<n;i++){let r=(i+.5)*(s/n);t.fillStyle="#5d8a2a",t.fillRect(0,r-s/n/4,s,s/n/2)}return Ir(t,s,s,s*4,["#7fae3a","#4a7020","#8fbf4a"],2,72),nt(e)}),sand:()=>rt("sand",()=>{let s=nn/4,[e,t]=tt(s,s);return t.fillStyle="#d6c49a",t.fillRect(0,0,s,s),pn(t,s,s,26,81),nt(e)}),water:()=>rt("water",()=>{let s=nn/2,[e,t]=tt(s,s);t.fillStyle="#1d5f7d",t.fillRect(0,0,s,s);let n=In(91);for(let i=0;i<900;i++){t.strokeStyle=n()>.5?"rgba(170,220,240,0.22)":"rgba(10,40,60,0.25)",t.lineWidth=1+n()*2;let r=n()*s,a=n()*s,o=6+n()*20;t.beginPath(),t.moveTo(r,a),t.quadraticCurveTo(r+o/2,a-3,r+o,a),t.stroke()}return nt(e)}),roof:()=>rt("roof",()=>{let s=nn/4,[e,t]=tt(s,s);return t.fillStyle="#5c5a57",t.fillRect(0,0,s,s),pn(t,s,s,34,101),Ir(t,s,s,s*3,["#77746f","#44423f"],1.5,102),nt(e)}),tiles:()=>rt("tiles",()=>{let s=nn/4,[e,t]=tt(s,s);t.fillStyle="#9b3d2a",t.fillRect(0,0,s,s);let n=8;for(let i=0;i<n;i++)for(let r=0;r<n;r++){let a=t.createLinearGradient(0,i*s/n,0,(i+1)*s/n);a.addColorStop(0,"#b4513a"),a.addColorStop(1,"#7a2c1d"),t.fillStyle=a,t.fillRect((r+i%2*.5)*s/n,i*s/n,s/n-1,s/n-1)}return pn(t,s,s,16,103),nt(e)}),metal:()=>rt("metal",()=>{let s=nn/2,[e,t]=tt(s,s),n=32;for(let i=0;i<n;i++){let r=t.createLinearGradient(i*s/n,0,(i+1)*s/n,0);r.addColorStop(0,"#9aa1a6"),r.addColorStop(.5,"#d9dee1"),r.addColorStop(1,"#868c90"),t.fillStyle=r,t.fillRect(i*s/n,0,s/n,s)}return pn(t,s,s,14,111),nt(e)}),tire:()=>rt("tire",()=>{let[e,t]=tt(256,256);t.fillStyle="#1b1b1c",t.fillRect(0,0,256,256),t.fillStyle="#2c2c2e";for(let n=0;n<24;n++)t.save(),t.translate(n*256/24,0),t.fillRect(0,0,256/48,256),t.restore();return pn(t,256,256,10,121),nt(e)}),rim:()=>rt("rim",()=>{let[e,t]=tt(256,256);t.fillStyle="#151515",t.fillRect(0,0,256,256);let n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256*.36);n.addColorStop(0,"#f0f0f0"),n.addColorStop(.6,"#b8bcc0"),n.addColorStop(1,"#7c8084"),t.fillStyle=n,t.beginPath(),t.arc(256/2,256/2,256*.36,0,Math.PI*2),t.fill(),t.fillStyle="#444";for(let i=0;i<10;i++){let r=i/10*Math.PI*2;t.beginPath(),t.arc(256/2+Math.cos(r)*256*.2,256/2+Math.sin(r)*256*.2,256*.025,0,7),t.fill()}return t.fillStyle="#555",t.beginPath(),t.arc(256/2,256/2,256*.09,0,7),t.fill(),nt(e,!1)}),facade:s=>rt("facade"+s,()=>{let e=nn,[t,n]=tt(e,e),[i,r]=tt(e/2,e/2);r.fillStyle="#000",r.fillRect(0,0,e/2,e/2);let a=In(200+s),o=[{wall:"#c9d0d6",win:["#3a5a78","#4a7090","#2d4a66"],frame:"#7f8a93",mw:.78,mh:.62},{wall:"#9c4f39",win:["#24323e","#3b4d5c","#2f3d48"],frame:"#ddd4c2",mw:.42,mh:.5},{wall:"#d9d2c3",win:["#2b3a47","#3f5566","#33414d"],frame:"#948c7b",mw:.5,mh:.48},{wall:"#66757f",win:["#1d2d3c","#2c4a64","#3a5f7d"],frame:"#3a4954",mw:.9,mh:.8}][s];if(n.fillStyle=o.wall,n.fillRect(0,0,e,e),pn(n,e,e,18,210+s),s===1){n.strokeStyle="rgba(70,30,20,0.4)",n.lineWidth=1;let u=e/96;for(let f=0;f<96;f++){n.beginPath(),n.moveTo(0,f*u),n.lineTo(e,f*u),n.stroke();for(let g=0;g<32;g++){let b=(g+f%2*.5)*e/32;n.beginPath(),n.moveTo(b,f*u),n.lineTo(b,(f+1)*u),n.stroke()}}}let l=4,c=e/l,h=["#ffd38a","#ffe7b0","#fff4d6","#cfe3ff","#ffc070"];for(let u=0;u<l;u++){for(let f=0;f<l;f++){let g=f*c,b=u*c,m=c*o.mw,p=c*o.mh,x=g+(c-m)/2,v=b+(c-p)/2-c*.04;n.fillStyle=o.frame,n.fillRect(x-3,v-3,m+6,p+6);let y=n.createLinearGradient(x,v,x+m,v+p),A=o.win[a()*o.win.length|0];if(y.addColorStop(0,A),y.addColorStop(.5,"#8fa8bc"),y.addColorStop(.56,A),y.addColorStop(1,"#141d26"),n.fillStyle=y,n.fillRect(x,v,m,p),n.fillStyle=o.frame,n.fillRect(x+m/2-1.5,v,3,p),s!==3&&n.fillRect(x,v+p*.35,m,2),(s===1||s===2)&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(x-4,v+p+3,m+8,4)),a()<.42){let T=r.createLinearGradient(0,v*.5,0,(v+p)*.5),P=h[a()*h.length|0];T.addColorStop(0,P),T.addColorStop(1,"#6b4a20"),r.fillStyle=T,r.fillRect(x*.5,v*.5,m*.5,p*.5)}}(s===0||s===3)&&(n.fillStyle=o.frame,n.fillRect(0,u*c+c-4,e,4))}for(let u=0;u<40;u++){let f=a()*e,g=e*(.05+a()*.2),b=a()*e,m=n.createLinearGradient(0,b,0,b+g);m.addColorStop(0,"rgba(40,35,30,0.12)"),m.addColorStop(1,"rgba(40,35,30,0)"),n.fillStyle=m,n.fillRect(f,b,2+a()*6,g)}let d=nt(t);return d.userData.emissive=nt(i),d}),highway:()=>rt("highway",()=>{let s=nn,[e,t]=tt(s,s);xc(t,s,23,"#3a3c3f");let n=s/18;t.fillStyle="rgba(150,150,150,0.18)",t.fillRect(0,0,2*n,s),t.fillRect(16*n,0,2*n,s),t.fillStyle="rgba(20,20,20,0.2)";for(let r of[4.2,6.6,11.4,13.8])t.fillRect(r*n-n*.5,0,n,s);t.fillStyle="#f2f2f2",t.fillRect(1.9*n,0,.15*n,s),t.fillRect(15.95*n,0,.15*n,s),t.fillStyle="#e8b923",t.fillRect(8.82*n,0,.14*n,s*.5),t.fillRect(9.04*n,0,.14*n,s);let i=In(24);t.strokeStyle="rgba(15,15,15,0.35)",t.lineWidth=1.2;for(let r=0;r<14;r++){let a=i()*s,o=i()*s;t.beginPath(),t.moveTo(a,o);for(let l=0;l<6;l++)a+=(i()-.5)*30,o+=i()*20,t.lineTo(a,o);t.stroke()}for(let r=0;r<3;r++)t.fillStyle="rgba(25,25,27,0.35)",t.fillRect(2*n+i()*12*n,i()*s,1.5*n+i()*n,1*n+i()*n);return nt(e)}),roadSign:(s,e,t)=>rt("rs"+s+e+t,()=>{let[r,a]=tt(1024,410);a.fillStyle=t,a.fillRect(0,0,1024,410),a.strokeStyle="#fff",a.lineWidth=14,a.strokeRect(20,20,984,370),a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle";let o=120;for(a.font=`700 ${o}px sans-serif`;a.measureText(s).width>904;)o-=6,a.font=`700 ${o}px sans-serif`;return a.fillText(s,1024/2,410*.42),a.font="600 64px sans-serif",a.fillText(e,1024/2,410*.76),nt(r,!1)}),speedSign:s=>rt("spd"+s,()=>{let[t,n]=tt(256,256);return n.fillStyle="#fff",n.beginPath(),n.arc(256/2,256/2,256/2,0,7),n.fill(),n.strokeStyle="#d0021b",n.lineWidth=28,n.beginPath(),n.arc(256/2,256/2,256/2-16,0,7),n.stroke(),n.fillStyle="#111",n.font="800 110px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),256/2,256/2+6),nt(t,!1)}),clouds:()=>rt("clouds",()=>{let[t,n]=tt(1024,512);n.clearRect(0,0,1024,512);let i=In(555);for(let a=0;a<70;a++){let o=i()*1024,l=512*.25+i()*512*.55,c=30+i()*90;for(let h=0;h<7;h++){let d=o+(i()-.5)*c*1.8,u=l+(i()-.5)*c*.4,f=c*(.4+i()*.6),g=n.createRadialGradient(d,u,0,d,u,f);g.addColorStop(0,"rgba(255,255,255,0.55)"),g.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=g,n.fillRect(d-f,u-f,f*2,f*2),d<f&&(n.save(),n.translate(1024,0),n.fillRect(d-f,u-f,f*2,f*2),n.restore())}}let r=nt(t);return r.wrapT=xn,r}),panel:()=>rt("panel",()=>{let[e,t]=tt(512,512),n=32;for(let r=0;r<n;r++){let a=t.createLinearGradient(r*512/n,0,(r+1)*512/n,0);a.addColorStop(0,"#d9dcdf"),a.addColorStop(.5,"#ffffff"),a.addColorStop(1,"#c8cbce"),t.fillStyle=a,t.fillRect(r*512/n,0,512/n,512)}t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(0,0,512,6),t.fillRect(0,506,512,6);let i=t.createLinearGradient(0,512,0,512*.6);return i.addColorStop(0,"rgba(110,92,70,0.35)"),i.addColorStop(1,"rgba(110,92,70,0)"),t.fillStyle=i,t.fillRect(0,0,512,512),pn(t,512,512,8,600),nt(e)}),headlamp:()=>rt("headlamp",()=>{let[t,n]=tt(256,128),i=n.createLinearGradient(0,0,0,128);i.addColorStop(0,"#3a4048"),i.addColorStop(1,"#14181c"),n.fillStyle=i,n.fillRect(0,0,256,128);for(let[r,a]of[[70,40],[170,34]]){let o=n.createRadialGradient(r,60,2,r,60,a);o.addColorStop(0,"#ffffff"),o.addColorStop(.35,"#dfe6ee"),o.addColorStop(.7,"#8d98a5"),o.addColorStop(1,"#2b3138"),n.fillStyle=o,n.beginPath(),n.arc(r,60,a,0,7),n.fill()}return n.fillStyle="#f7fbff",n.fillRect(20,108,216,8),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=4,n.strokeRect(2,2,252,124),nt(t,!1)}),taillamp:()=>rt("taillamp",()=>{let[t,n]=tt(128,64);return n.fillStyle="#5a0a0a",n.fillRect(0,0,128,64),n.fillStyle="#ff2a1a",n.fillRect(4,4,56,56),n.fillStyle="#ffa21a",n.fillRect(64,4,28,56),n.fillStyle="#f2f2f2",n.fillRect(96,4,28,56),nt(t,!1)}),cabDecal:s=>rt("decal"+s,()=>{let[n,i]=tt(512,192);i.clearRect(0,0,512,192);let r=new le(s),a="#"+r.clone().multiplyScalar(.45).getHexString(),o=r.getHSL({}).l>.6?"#2a3440":"#ffffff";return i.fillStyle=a,i.beginPath(),i.moveTo(0,192*.55),i.lineTo(512,192*.25),i.lineTo(512,192*.42),i.lineTo(0,192*.72),i.fill(),i.fillStyle=o,i.beginPath(),i.moveTo(0,192*.76),i.lineTo(512,192*.46),i.lineTo(512,192*.5),i.lineTo(0,192*.8),i.fill(),i.font="italic 900 46px sans-serif",i.fillStyle=o,i.fillText("DRIZZIE",26,192*.42),nt(n,!1)}),treeCard:s=>rt("treecard"+s,()=>{let[n,i]=tt(256,512);i.clearRect(0,0,256,512);let r=In(900+s),a=i.createLinearGradient(256/2-10,0,256/2+10,0);a.addColorStop(0,"#3b2a1c"),a.addColorStop(.5,"#6d5038"),a.addColorStop(1,"#2e2016"),i.fillStyle=a;let o=s===1?9:s===2?7:12;i.beginPath(),i.moveTo(256/2-o,512),i.lineTo(256/2+o,512),i.lineTo(256/2+o*.4,512*.25),i.lineTo(256/2-o*.4,512*.25),i.fill();let l=(h,d,u,f)=>{let g=i.createRadialGradient(h-u*.3,d-u*.35,u*.1,h,d,u),b=s===1?[38,72,40]:s===2?[86,110,70]:[62,98,44],m=.65+f*.6;g.addColorStop(0,`rgba(${b[0]*m*1.35|0},${b[1]*m*1.3|0},${b[2]*m*1.2|0},1)`),g.addColorStop(.7,`rgba(${b[0]*m|0},${b[1]*m|0},${b[2]*m|0},1)`),g.addColorStop(1,`rgba(${b[0]*m*.7|0},${b[1]*m*.7|0},${b[2]*m*.7|0},0)`),i.fillStyle=g,i.beginPath(),i.arc(h,d,u,0,7),i.fill()};if(s===1)for(let h=0;h<260;h++){let d=r(),u=512*.06+d*512*.78,f=(d*.42+.04)*256,g=256/2+(r()*2-1)*f;l(g,u,6+r()*12+d*8,1-d*.6+(g<256/2?.15:-.1))}else{let h=s===2?25.6:40.96,d=s===2?512*.62:512*.72,u=s===2?256*.3:256*.45;for(let f=0;f<420;f++){let g=r()*Math.PI*2,b=Math.sqrt(r()),m=256/2+Math.cos(g)*b*u,p=(h+d)/2+Math.sin(g)*b*(d-h)/2,x=1-(p-h)/(d-h)*.7+(m<256/2?.15:-.1);l(m,p,5+r()*(s===2?10:15),x)}i.strokeStyle="rgba(60,42,28,0.8)",i.lineWidth=3;for(let f=0;f<6;f++)i.beginPath(),i.moveTo(256/2,d-10),i.lineTo(256/2+(r()-.5)*u*1.2,d-30-r()*60),i.stroke()}for(let h=0;h<900;h++){let d=r()*256,u=r()*512*.85,f=i.getImageData(d|0,u|0,1,1).data;f[3]>200&&(i.fillStyle=`rgba(${f[0]*(.7+r()*.6)|0},${f[1]*(.7+r()*.6)|0},${f[2]*(.7+r()*.5)|0},1)`,i.fillRect(d,u,2,2))}let c=nt(n,!1);return c.premultiplyAlpha=!1,c}),warehouse:()=>rt("warehouse",()=>{let s=nn/2,[e,t]=tt(s,s),n=40;for(let i=0;i<n;i++){let r=t.createLinearGradient(i*s/n,0,(i+1)*s/n,0);r.addColorStop(0,"#b7bcc0"),r.addColorStop(.5,"#e4e7e9"),r.addColorStop(1,"#a6abaf"),t.fillStyle=r,t.fillRect(i*s/n,0,s/n,s)}return t.fillStyle="rgba(60,70,80,0.35)",t.fillRect(0,s*.9,s,s*.1),pn(t,s,s,12,301),nt(e)}),container:s=>rt("container"+s,()=>{let[t,n]=tt(256,256),i=new le(s),r=24;for(let a=0;a<r;a++){let o=n.createLinearGradient(a*256/r,0,(a+1)*256/r,0);o.addColorStop(0,"#"+i.clone().multiplyScalar(.7).getHexString()),o.addColorStop(.5,"#"+i.clone().multiplyScalar(1.1).getHexString()),o.addColorStop(1,"#"+i.clone().multiplyScalar(.6).getHexString()),n.fillStyle=o,n.fillRect(a*256/r,0,256/r,256)}return n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=6,n.strokeRect(3,3,250,250),pn(n,256,256,14,311),nt(t)}),cargoBox:(s,e)=>rt("cbox"+s+e,()=>{let t=nn,n=nn/4,[i,r]=tt(t,n),a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#fbfbfb"),a.addColorStop(1,"#d7dadd"),r.fillStyle=a,r.fillRect(0,0,t,n),r.fillStyle=s,r.fillRect(0,n*.78,t,n*.08),r.beginPath(),r.moveTo(t*.05,n*.7),r.lineTo(t*.15,n*.2),r.lineTo(t*.22,n*.2),r.lineTo(t*.12,n*.7),r.fill(),r.font=`900 ${n*.34}px sans-serif`,r.textBaseline="middle",r.fillText(e,t*.25,n*.42),r.font=`600 ${n*.1}px sans-serif`,r.fillStyle="#555",r.fillText("TRANSPORTES & LOG\xCDSTICA",t*.255,n*.66),r.strokeStyle="rgba(0,0,0,0.15)",r.lineWidth=2;for(let o=1;o<12;o++)r.beginPath(),r.moveTo(o*t/12,0),r.lineTo(o*t/12,n),r.stroke();return nt(i,!1)}),sign:(s,e,t)=>rt("sign"+s+e,()=>{let[r,a]=tt(1024,192);a.fillStyle=e,a.fillRect(0,0,1024,192),a.strokeStyle="rgba(255,255,255,0.8)",a.lineWidth=8,a.strokeRect(10,10,1004,172),a.fillStyle=t;let o=96;for(a.font=`800 ${o}px sans-serif`;a.measureText(s).width>944&&o>30;)o-=4,a.font=`800 ${o}px sans-serif`;return a.textAlign="center",a.textBaseline="middle",a.fillText(s,1024/2,192/2+4),nt(r,!1)}),paint:()=>rt("paint",()=>{let[e,t]=tt(512,512),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#eeeeee"),n.addColorStop(1,"#c4c4c4"),t.fillStyle=n,t.fillRect(0,0,512,512);let i=In(777),r=t.createLinearGradient(0,512,0,512*.35);r.addColorStop(0,"rgba(110,92,70,0.55)"),r.addColorStop(1,"rgba(110,92,70,0)"),t.fillStyle=r,t.fillRect(0,0,512,512);for(let a=0;a<2600;a++){let o=512-Math.pow(i(),1.8)*512;t.fillStyle=`rgba(${90+i()*40},${75+i()*30},${55+i()*25},${.06+i()*.16})`,t.beginPath(),t.arc(i()*512,o,.5+i()*3.5,0,7),t.fill()}for(let a=0;a<70;a++){let o=i()*512,l=i()*512*.4,c=512*(.15+i()*.5),h=t.createLinearGradient(0,l,0,l+c);h.addColorStop(0,"rgba(80,70,55,0)"),h.addColorStop(.5,"rgba(80,70,55,0.14)"),h.addColorStop(1,"rgba(80,70,55,0)"),t.fillStyle=h,t.fillRect(o,l,1+i()*3,c)}return pn(t,512,512,8,778),nt(e)}),backdrop:()=>rt("backdrop",()=>{let[t,n]=tt(1024,512),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#08121f"),i.addColorStop(1,"#0e2a40"),n.fillStyle=i,n.fillRect(0,0,1024,512);let r=In(901),a=64;for(let o=0;o<512/a+1;o++)for(let l=0;l<1024/a+1;l++){let c=l*a+o%2*a/2,h=o*a*.87;n.fillStyle=`rgba(${40+r()*30},${90+r()*60},${130+r()*70},${.05+r()*.12})`,n.beginPath(),n.moveTo(c,h),n.lineTo(c+a/2,h+a*.87),n.lineTo(c-a/2,h+a*.87),n.closePath(),n.fill(),n.strokeStyle="rgba(120,200,255,0.06)",n.stroke()}return nt(t,!1)}),glow:()=>rt("glow",()=>{let[e,t]=tt(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.55)"),n.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),nt(e,!1)}),beam:()=>rt("beam",()=>{let[t,n]=tt(128,256),i=n.createRadialGradient(128/2,256,0,128/2,256,256);return i.addColorStop(0,"rgba(255,245,220,0.85)"),i.addColorStop(.5,"rgba(255,240,210,0.35)"),i.addColorStop(1,"rgba(255,240,210,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.42,256),n.lineTo(0,0),n.lineTo(128,0),n.lineTo(128*.58,256),n.fill(),nt(t,!1)}),grill:()=>rt("grill",()=>{let[e,t]=tt(256,256);t.fillStyle="#0c0c0c",t.fillRect(0,0,256,256);for(let n=0;n<9;n++){let i=12+n*27,r=t.createLinearGradient(0,i,0,i+14);r.addColorStop(0,"#f2f2f2"),r.addColorStop(1,"#7a7a7a"),t.fillStyle=r,t.fillRect(8,i,240,14)}return nt(e,!1)}),blob:()=>rt("blob",()=>{let[e,t]=tt(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(0,0,0,0.65)"),n.addColorStop(.6,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),nt(e,!1)}),zone:()=>rt("zone",()=>{let[e,t]=tt(256,256);return t.clearRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,1)",t.lineWidth=14,t.strokeRect(7,7,242,242),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(14,14,228,228),nt(e,!1)}),bark:()=>rt("bark",()=>{let[e,t]=tt(256,256);t.fillStyle="#6b4a2b",t.fillRect(0,0,256,256);let n=In(401);for(let i=0;i<120;i++){t.strokeStyle=n()>.5?"rgba(40,25,12,0.6)":"rgba(140,100,60,0.4)",t.lineWidth=1+n()*3;let r=n()*256;t.beginPath(),t.moveTo(r,0),t.lineTo(r+(n()-.5)*12,256),t.stroke()}return nt(e)}),foliage:()=>rt("foliage",()=>{let[e,t]=tt(256,256);return t.fillStyle="#c8c8c8",t.fillRect(0,0,256,256),Ir(t,256,256,2600,["#ffffff","#8a8a8a","#e6e6e6","#6e6e6e"],5,411),nt(e)})};var vc=new D,_c=new D,dp=new Ye,yc=new le,Re=class{constructor(e=!1){this.pos=[],this.nor=[],this.uv=[],this.col=e?[]:null,this.idx=[]}get count(){return this.pos.length/3}_color(e){this.col&&(yc.set(e!=null?e:16777215),this.col.push(yc.r,yc.g,yc.b))}quad(e,t,n,i,r,a,o){let l=this.count;for(let c of[e,t,n,i])this.pos.push(c[0],c[1],c[2]),this.nor.push(r[0],r[1],r[2]),this._color(o);this.uv.push(...a),this.idx.push(l,l+1,l+2,l,l+2,l+3)}ground(e,t,n,i,r,a,o){let l=e/a,c=n/a,h=-i/a,d=-t/a;this.quad([e,r,i],[n,r,i],[n,r,t],[e,r,t],[0,1,0],[l,h,c,h,c,d,l,d],o)}walls(e,t,n,i,r,a,o,l,c=0,h){let u=(r-t)/l,f=(i-e)/o,g=(a-n)/o;this.quad([e,t,a],[i,t,a],[i,r,a],[e,r,a],[0,0,1],[c,0,c+f,0,c+f,u,c,u],h),this.quad([i,t,n],[e,t,n],[e,r,n],[i,r,n],[0,0,-1],[c,0,c+f,0,c+f,u,c,u],h),this.quad([i,t,a],[i,t,n],[i,r,n],[i,r,a],[1,0,0],[c,0,c+g,0,c+g,u,c,u],h),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],[-1,0,0],[c,0,c+g,0,c+g,u,c,u],h)}top(e,t,n,i,r,a,o){this.ground(e,t,n,i,r,a,o)}box(e,t,n,i,r,a,o,l){this.walls(e,t,n,i,r,a,o,o,0,l),this.top(e,n,i,a,r,o,l)}add(e,t,n,i=1){let r=e.attributes.position,a=e.attributes.normal,o=e.attributes.uv,l=this.count;dp.getNormalMatrix(t);for(let c=0;c<r.count;c++)vc.fromBufferAttribute(r,c).applyMatrix4(t),this.pos.push(vc.x,vc.y,vc.z),_c.fromBufferAttribute(a,c).applyMatrix3(dp).normalize(),this.nor.push(_c.x,_c.y,_c.z),o?this.uv.push(o.getX(c)*i,o.getY(c)*i):this.uv.push(0,0),this._color(n);if(e.index){let c=e.index.array;for(let h=0;h<c.length;h++)this.idx.push(c[h]+l)}else for(let c=0;c<r.count;c++)this.idx.push(l+c)}geometry(){let e=new gt;e.setAttribute("position",new He(this.pos,3)),e.setAttribute("normal",new He(this.nor,3)),e.setAttribute("uv",new He(this.uv,2)),this.col&&e.setAttribute("color",new He(this.col,3));let t=this.count>65535;return e.setIndex(t?new gr(this.idx,1):new mr(this.idx,1)),e.computeBoundingSphere(),e}mesh(e,t={}){if(!this.count)return null;let n=new Fe(this.geometry(),e);return n.castShadow=!!t.cast,n.receiveShadow=t.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}},J_=new Ge,up=new Pn,Q_=new Sn,ey=new D,ty=new D;function Se(s,e,t,n=0,i=0,r=0,a=1,o=1,l=1){return up.setFromEuler(Q_.set(n,i,r)),J_.compose(ty.set(s,e,t),up,ey.set(a,o,l)).clone()}var es={},ze={box:()=>es.box||(es.box=new un(1,1,1)),cyl:(s=16)=>es["cyl"+s]||(es["cyl"+s]=new Vn(.5,.5,1,s)),cone:(s=12)=>es["cone"+s]||(es["cone"+s]=new Sr(.5,1,s)),sphere:()=>es.sph||(es.sph=new li(.5,16,10))};var Ch=s=>s<=0?0:s>=1?1:s*s*(3-2*s),Mc=class{constructor(e=80,t=40){this.cell=e,this.pad=t,this.map=new Map}addSegments(e,t,n){let i=this.cell,r=this.pad;for(let a=0;a<t.length-1;a++){let o=Math.min(t[a],t[a+1])-r,l=Math.max(t[a],t[a+1])+r,c=Math.min(n[a],n[a+1])-r,h=Math.max(n[a],n[a+1])+r;for(let d=Math.floor(o/i);d<=Math.floor(l/i);d++)for(let u=Math.floor(c/i);u<=Math.floor(h/i);u++){let f=d*1e5+u,g=this.map.get(f);g||this.map.set(f,g=[]),g.push(e,a)}}}nearest(e,t,n){let i=this.map.get(Math.floor(e/this.cell)*1e5+Math.floor(t/this.cell));if(n.d=1/0,!i)return null;for(let r=0;r<i.length;r+=2){let a=i[r],o=i[r+1],l=a.x[o],c=a.z[o],h=a.x[o+1],d=a.z[o+1],u=h-l,f=d-c,g=u*u+f*f||1,b=((e-l)*u+(t-c)*f)/g;b=b<0?0:b>1?1:b;let m=l+u*b,p=c+f*b,x=Math.hypot(e-m,t-p);x<n.d&&(n.d=x,n.o=a,n.i=o,n.t=b,n.x=m,n.z=p)}return n.d<1/0?n:null}};function fp(s,e){let t=new va(s.map(o=>new D(o[0],0,o[1])),!1,"centripetal",.5),n=Math.max(2,Math.ceil(t.getLength()/e)),i=t.getSpacedPoints(n),r=new Float32Array(i.length),a=new Float32Array(i.length);return i.forEach((o,l)=>{r[l]=o.x,a[l]=o.z}),{x:r,z:a}}var Ph=class{constructor(){let{x:e,z:t}=fp(ap,10);this.x=e,this.z=t,this.n=e.length,this.idx=new Mc(100,ei/2+80),this.idx.addSegments(this,e,t),this._q={}}dist(e,t){let n=this.idx.nearest(e,t,this._q);return n?n.d:1/0}},Lh=class{constructor(e,t){this.def=e,this.id=e.id;let{x:n,z:i}=fp(e.pts,4),r=this.n=n.length;this.x=n,this.z=i,this.s=new Float32Array(r),this.dx=new Float32Array(r),this.dz=new Float32Array(r),this.y=new Float32Array(r);for(let c=1;c<r;c++)this.s[c]=this.s[c-1]+Math.hypot(n[c]-n[c-1],i[c]-i[c-1]);this.length=this.s[r-1];for(let c=0;c<r;c++){let h=Math.max(0,c-1),d=Math.min(r-1,c+1),u=n[d]-n[h],f=i[d]-i[h],g=Math.hypot(u,f)||1;this.dx[c]=u/g,this.dz[c]=f/g}let a=ti.filter(c=>c.hw===e.id).map(c=>[(c.lot[0]+c.lot[2])/2,(c.lot[1]+c.lot[3])/2]),o=new Float32Array(r);this.bridge=new Uint8Array(r);let l=7.5;for(let c=0;c<r;c++){let h=t.dist(n[c],i[c]);h<ei/2+14&&(this.bridge[c]=1);let u=l*Ch(1-(h-(ei/2+22))/150),f=Ch(Math.min(this.s[c],this.length-this.s[c])/220-.3);for(let[m,p]of a)f=Math.min(f,Ch((Math.hypot(n[c]-m,i[c]-p)-110)/160));let g=this.s[c],b=(e.hills||0)*f*(.55*Math.pow(Math.sin(g/260),2)+.45*Math.pow(Math.sin(g/610+1.3),2));o[c]=Math.max(u,b)}for(let c=0;c<r;c++){let h=0,d=0;for(let u=-8;u<=8;u++){let f=Math.min(r-1,Math.max(0,c+u));h+=o[f],d++}this.y[c]=this.bridge[c]?Math.max(l,h/d):h/d}this.y[0]=this.y[r-1]=0}at(e,t){let n=this.n;e=Math.max(0,Math.min(this.length,e));let i=0,r=n-1;for(;r-i>1;){let o=i+r>>1;this.s[o]<=e?i=o:r=o}let a=(e-this.s[i])/(this.s[r]-this.s[i]||1);return t.x=this.x[i]+(this.x[r]-this.x[i])*a,t.z=this.z[i]+(this.z[r]-this.z[i])*a,t.y=this.y[i]+(this.y[r]-this.y[i])*a,t.dx=this.dx[i],t.dz=this.dz[i],t.i=i,t}};function pp(){let s=new Ph,e=op.map(n=>new Lh(n,s)),t=new Mc(80,40);for(let n of e)t.addSegments(n,n.x,n.z);return{river:s,hws:e,idx:t}}var dt=20/2;function ny(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Dr(s,e){let t=(c,h)=>{let d=Math.sin(c*127.1+h*311.7)*43758.5453;return d-Math.floor(d)},n=Math.floor(s),i=Math.floor(e),r=s-n,a=e-i,o=r*r*(3-2*r),l=a*a*(3-2*a);return(t(n,i)*(1-o)+t(n+1,i)*o)*(1-l)+(t(n,i+1)*(1-o)+t(n+1,i+1)*o)*l}var Sc=class{constructor(e,t){this.scene=e,this.q=t,this.colliders=[],this.cell=70,this.grid=new Map,this.depots={},this.animated=[],this.areas=[],this.hills=[],this.fields=[];let n=pp();this.river=n.river,this.hws=n.hws,this.hwIdx=n.idx,this.hwById=Object.fromEntries(this.hws.map(i=>[i.id,i])),this._q={},this.build()}addCollider(e,t,n,i){let r={x0:Math.min(e,n),z0:Math.min(t,i),x1:Math.max(e,n),z1:Math.max(t,i)};this.colliders.push(r);let a=this.cell;for(let o=Math.floor(r.x0/a);o<=Math.floor(r.x1/a);o++)for(let l=Math.floor(r.z0/a);l<=Math.floor(r.z1/a);l++){let c=o*1e5+l;this.grid.has(c)||this.grid.set(c,[]),this.grid.get(c).push(r)}}hw(e,t){return this.hwIdx.nearest(e,t,this._q)}inArea(e,t,n){for(let i of this.areas)if(e>=i.x0+n&&e<=i.x1-n&&t>=i.z0+n&&t<=i.z1-n)return i;return null}heightAt(e,t){for(let r of this.areas)if(e>=r.x0&&e<=r.x1&&t>=r.z0&&t<=r.z1)return 0;let n=this.hw(e,t);if(!n||n.d>12)return 0;let i=n.o;return i.y[n.i]+(i.y[n.i+1]-i.y[n.i])*n.t}resolveCircle(e,t,n,i=!1){let r=0;if(n.x=0,n.z=0,!i&&!this.inArea(e.x,e.z,t)){let c=this.hw(e.x,e.z),h=9-t*.8;if(!c||c.d>h){let d=e.x,u=e.z,f=1/0;if(c){let g=h/(c.d||1);d=c.x+(e.x-c.x)*g,u=c.z+(e.z-c.z)*g,f=Math.hypot(e.x-d,e.z-u)}for(let g of this.areas){if(e.x<g.x0-60||e.x>g.x1+60||e.z<g.z0-60||e.z>g.z1+60)continue;let b=Math.max(g.x0+t,Math.min(e.x,g.x1-t)),m=Math.max(g.z0+t,Math.min(e.z,g.z1-t)),p=Math.hypot(e.x-b,e.z-m);p<f&&(f=p,d=b,u=m)}f<1/0&&(n.x=d-e.x,n.z=u-e.z,r=f)}}let a=this.cell,o=Math.floor((e.x+n.x)/a),l=Math.floor((e.z+n.z)/a);for(let c=o-1;c<=o+1;c++)for(let h=l-1;h<=l+1;h++){let d=this.grid.get(c*1e5+h);if(d)for(let u of d){let f=e.x+n.x,g=e.z+n.z,b=Math.max(u.x0,Math.min(f,u.x1)),m=Math.max(u.z0,Math.min(g,u.z1)),p=f-b,x=g-m,v=p*p+x*x;if(v<t*t)if(v>1e-6){let y=Math.sqrt(v),A=t-y;n.x+=p/y*A,n.z+=x/y*A,r=Math.max(r,A)}else{let y=f-u.x0,A=u.x1-f,w=g-u.z0,T=u.z1-g,P=Math.min(y,A,w,T);P===y?n.x-=y+t:P===A?n.x+=A+t:P===w?n.z-=w+t:n.z+=T+t,r=Math.max(r,P+t)}}}return r}terrainH(e,t){let n=0;for(let i of this.hills){let r=((e-i.x)**2+(t-i.z)**2)/(i.r*i.r);r<1&&(n=Math.max(n,i.h*Math.sqrt(1-r)-3))}return n}isFree(e,t,n){if(t>1750)return!1;let i=this.hw(e,t);if(i&&i.d<15+i.o.y[i.i]*1.9+n||this.river.dist(e,t)<ei/2+12+n)return!1;for(let r of this.areas)if(e>r.x0-25-n&&e<r.x1+25+n&&t>r.z0-25-n&&t<r.z1+25+n)return!1;for(let r of this.fields)if(e>r.x0-n&&e<r.x1+n&&t>r.z0-n&&t<r.z1+n)return!1;return!0}build(){let e=(r,a={})=>new rn(Gt({map:r},a)),t={grass:e(Te.grass(),{vertexColors:!0,side:ht,color:13226674}),road:e(Te.road()),hwy:e(Te.highway()),inter:e(Te.intersection()),concrete:e(Te.concrete()),bridge:e(Te.concrete(),{side:ht}),lot:e(Te.lot()),field:e(Te.field(),{vertexColors:!0}),sand:e(Te.sand()),roof:e(Te.roof()),tiles:e(Te.tiles()),wh:e(Te.warehouse(),{vertexColors:!0}),f:[0,1,2,3].map(r=>new _n({map:Te.facade(r),emissiveMap:Te.facade(r).userData.emissive,emissive:16777215,emissiveIntensity:0,shininess:r===0||r===3?60:8,specular:r===0||r===3?5592405:1118481})),flat:new rn({vertexColors:!0}),metal:new _n({map:Te.metal(),vertexColors:!0,shininess:50,specular:6710886}),cont:e(Te.container(14540253),{vertexColors:!0}),leaf:e(Te.foliage(),{vertexColors:!0})};this.M=t;let n={grass:new Re(!0),road:new Re,hwy:new Re,inter:new Re,concrete:new Re,bridge:new Re,lot:new Re,field:new Re(!0),sand:new Re,roof:new Re,tiles:new Re,wh:new Re(!0),f:[new Re,new Re,new Re,new Re],flat:new Re(!0),metal:new Re(!0),cont:new Re(!0)};this.B=n,this.trees=[],this.lamps=[],this.rails=[],this.posts=[],this.r=ny(1234);for(let r of Qn)this.areas.push({x0:r.x0-dt,z0:r.z0-dt,x1:As(r)+dt,z1:Cr(r)+dt,city:r});for(let r of this.hws)for(let a of[r.def.from,r.def.to]){if(!a)continue;let o=gc[a[0]],l=o.x0+a[1]*140,c=o.z0+a[2]*140;this.areas.push({x0:l-22,z0:c-22,x1:l+22,z1:c+22,pad:!0}),n.hwy.ground(l-22,c-22,l+22,c+22,.015,18)}for(let r of ti)r.lot&&this.areas.push({x0:r.lot[0],z0:r.lot[1],x1:r.lot[2],z1:r.lot[3],lot:r.id});this.layoutCountry(),this.buildGround();for(let r of Qn)this.buildCity(r);for(let r of ti)r.lot&&this.buildDepot(r,...r.lot);for(let r of this.hws)this.buildHighway(r);this.buildRiverAndSea(),this.buildHills(),this.scatterForest();let i=(r,a,o=!1)=>{let l=r.mesh(a,{cast:o});return l&&this.scene.add(l),l};i(n.grass,t.grass),i(n.road,t.road),i(n.hwy,t.hwy),i(n.inter,t.inter),i(n.concrete,t.concrete,!0),i(n.bridge,t.bridge,!0),i(n.lot,t.lot),i(n.field,t.field),i(n.sand,t.sand),i(n.roof,t.roof),i(n.tiles,t.tiles,!0),i(n.wh,t.wh,!0),i(n.flat,t.flat,!0),i(n.metal,t.metal,!0),i(n.cont,t.cont,!0),n.f.forEach((r,a)=>i(r,t.f[a],!0)),this.buildRails(),this.buildTrees(),this.buildLamps(),this.B=null}hwDistFar(e,t){let n=1/0;for(let i of this.hws)for(let r=0;r<i.n;r+=3)n=Math.min(n,(i.x[r]-e)**2+(i.z[r]-t)**2);return Math.sqrt(n)}layoutCountry(){let e=this.r;for(let n=0;n<900&&this.hills.length<46;n++){let i=Pt.x0-300+e()*(Pt.x1-Pt.x0+600),r=Pt.z0-300+e()*(Pt.z1-Pt.z0+300),a=120+e()*260,o=30+e()*110;if(r+a>1730||this.hwDistFar(i,r)<a*1.2+9+35||this.river.dist(i,r)<a+ei||this.areas.some(c=>i+a>c.x0-40&&i-a<c.x1+40&&r+a>c.z0-40&&r-a<c.z1+40))continue;let l=!1;for(let c=0;c<this.river.n;c+=4)if((this.river.x[c]-i)**2+(this.river.z[c]-r)**2<(a+ei)**2){l=!0;break}l||this.hills.some(c=>Math.hypot(c.x-i,c.z-r)<(c.r+a)*.55)||this.hills.push({x:i,z:r,r:a,h:o,rot:e()*6.28,v:e()*4|0})}let t=[[-1e3,160,-600,700],[-2900,-1600,-2300,-1100],[600,150,1700,1e3],[1200,-700,1900,-150]];for(let[n,i,r,a]of t)for(let o=n;o<r;o+=140)for(let l=i;l<a;l+=110){let c={x0:o+6,z0:l+6,x1:o+134,z1:l+104};[[c.x0,c.z0],[c.x1,c.z0],[c.x0,c.z1],[c.x1,c.z1],[(c.x0+c.x1)/2,(c.z0+c.z1)/2]].every(([d,u])=>this.isFree(d,u,12))&&e()>.2&&this.fields.push(c)}this.hills=this.hills.filter(n=>!this.fields.some(i=>n.x+n.r>i.x0&&n.x-n.r<i.x1&&n.z+n.r>i.z0&&n.z-n.r<i.z1))}buildGround(){let e=this.B,t=new kt(12e3,12e3,120,120);t.rotateX(-Math.PI/2);let n=t.attributes.position,i=e.grass.count;for(let o=0;o<n.count;o++){let l=n.getX(o),c=n.getZ(o);e.grass.pos.push(l,-.03,c),e.grass.nor.push(0,1,0),e.grass.uv.push(l/14,-c/14);let h=Dr(l/420,c/420)*.6+Dr(l/90,c/90)*.4;e.grass.col.push(.74+h*.34,.84+h*.24,.68+h*.2)}let r=t.index.array;for(let o=0;o<r.length;o++)e.grass.idx.push(r[o]+i);let a=[16777215,15265984,14207120,13164712];this.fields.forEach((o,l)=>e.field.ground(o.x0,o.z0,o.x1,o.z1,.03,24,a[l%a.length]))}buildCity(e){let t=this.B,n=a=>e.x0+a*140,i=a=>e.z0+a*140;for(let a=0;a<=e.nx;a++){let o=n(a);for(let l=0;l<e.nz;l++){let c=i(l)+dt,h=i(l+1)-dt;t.road.quad([o-dt,.02,h],[o+dt,.02,h],[o+dt,.02,c],[o-dt,.02,c],[0,1,0],[0,0,1,0,1,(h-c)/20,0,(h-c)/20])}}for(let a=0;a<=e.nz;a++){let o=i(a);for(let l=0;l<e.nx;l++){let c=n(l)+dt,h=n(l+1)-dt;t.road.quad([c,.02,o+dt],[h,.02,o+dt],[h,.02,o-dt],[c,.02,o-dt],[0,1,0],[0,0,0,(h-c)/20,1,(h-c)/20,1,0])}}for(let a=0;a<=e.nx;a++)for(let o=0;o<=e.nz;o++){let l=n(a),c=i(o);t.inter.quad([l-dt,.025,c+dt],[l+dt,.025,c+dt],[l+dt,.025,c-dt],[l-dt,.025,c-dt],[0,1,0],[0,0,1,0,1,1,0,1])}let r={};for(let a of ti)a.city===e.id&&(r[a.bx+","+a.bz]=a);for(let a=0;a<e.nx;a++)for(let o=0;o<e.nz;o++){let l=n(a)+dt,c=n(a+1)-dt,h=i(o)+dt,d=i(o+1)-dt,u=r[a+","+o];u?this.buildDepot(u,l,h,c,d):this.buildBlock(bc(e,a,o),l,h,c,d)}this.roadSign(e.x0-26,e.z0-26,Math.PI*.75,e.name.toUpperCase(),"Bem-vindo","#1d4f7a")}grassPatch(e,t,n,i){this.B.grass.quad([e,.225,i],[n,.225,i],[n,.225,t],[e,.225,t],[0,1,0],[e/14,-i/14,n/14,-i/14,n/14,-t/14,e/14,-t/14],15267288)}tree(e,t,n=1,i=0,r=.2){this.trees.push({x:e,z:t,y:r,s:n*(.8+this.r()*.5),k:i,rot:this.r()*6.28})}building(e,t,n,i,r,a){let o=this.B,l=(this.r()*4|0)*.25;if(o.f[a].walls(e,.2,t,n,r,i,16,14,l),o.roof.top(e,t,n,i,r,6),o.flat.walls(e,r,t,n,r+.8,i,1,1,0,9276813),o.flat.walls(e-.3,3.4,t-.3,n+.3,3.8,i+.3,1,1,0,6122878),r>14&&this.r()>.3){let c=(n-e)*.3,h=(i-t)*.3,d=(e+n)/2+(this.r()-.5)*4,u=(t+i)/2;o.flat.box(d-c/2,r,u-h/2,d+c/2,r+3,u+h/2,1,10526880),o.metal.add(ze.cyl(12),Se(d+c,r+2,u,0,0,0,2.4,3,2.4),13620182),o.flat.add(ze.box(),Se(d-c*.3,r+6,u,0,0,0,.15,6,.15),7829367)}}house(e,t,n,i,r,a){let o=this.B;o.flat.walls(e,.2,t,n,r,i,1,1,0,a);let l=(e+n)/2;o.flat.quad([l-.6,.2,i+.02],[l+.6,.2,i+.02],[l+.6,2.4,i+.02],[l-.6,2.4,i+.02],[0,0,1],[0,0,1,0,1,1,0,1],5913122);for(let A of[e+1.6,n-2.8])o.flat.quad([A,1.2,i+.02],[A+1.2,1.2,i+.02],[A+1.2,2.4,i+.02],[A,2.4,i+.02],[0,0,1],[0,0,1,0,1,1,0,1],2899536),o.flat.quad([A+1.2,1.2,t-.02],[A,1.2,t-.02],[A,2.4,t-.02],[A+1.2,2.4,t-.02],[0,0,-1],[0,0,1,0,1,1,0,1],2899536);let c=2.2,h=.4,d=(t+i)/2,u=e-h,f=n+h,g=t-h,b=i+h,m=Math.hypot(c,d-g),p=(d-g)/m,x=c/m,v=(f-u)/3,y=m/3;o.tiles.quad([u,r,b],[f,r,b],[f,r+c,d],[u,r+c,d],[0,p,x],[0,0,v,0,v,y,0,y]),o.tiles.quad([f,r,g],[u,r,g],[u,r+c,d],[f,r+c,d],[0,p,-x],[0,0,v,0,v,y,0,y]),o.flat.quad([e,r,t],[e,r,i],[e,r+c,d],[e,r+c,d],[-1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.quad([n,r,i],[n,r,t],[n,r+c,d],[n,r+c,d],[1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.walls(e-2,.2,i+2,n+2,1.1,i+2.2,1,1,0,14275783)}tank(e,t,n,i,r=15263976){this.B.metal.add(ze.cyl(20),Se(e,i/2,t,0,0,0,n*2,i,n*2),r,1),this.B.metal.add(ze.cone(20),Se(e,i+n*.2,t,0,0,0,n*2.02,n*.4,n*2.02),r),this.B.flat.add(ze.box(),Se(e+n+.1,i/2,t,0,0,0,.1,i,.7),8359053)}chimney(e,t,n,i,r=10129286){this.B.flat.add(ze.cyl(14),Se(e,i/2,t,0,0,0,n*2,i,n*2),r),this.B.flat.add(ze.cyl(14),Se(e,i-3,t,0,0,0,n*2.1,1.2,n*2.1),12597547),this.B.flat.add(ze.cyl(14),Se(e,i-6,t,0,0,0,n*2.1,1.2,n*2.1),15790320)}containerStack(e,t,n,i,r,a){let o=[12597547,2388387,1999945,14059792,8207512,8622482,10502144,1145445];for(let l=0;l<i;l++)for(let c=0;c<r;c++){let h=1+(this.r()*a|0);for(let d=0;d<h;d++){let u=(l-(i-1)/2)*2.6,f=(c-(r-1)/2)*12.6,g=Math.cos(n),b=Math.sin(n);this.B.cont.add(ze.box(),Se(e+u*g+f*b,1.3+d*2.6,t-u*b+f*g,0,n,0,2.44,2.59,12.2),o[this.r()*o.length|0])}}}crane(e,t,n,i){let r=this.B,a=15844367;r.flat.add(ze.box(),Se(e,n/2,t,0,0,0,1.6,n,1.6),a);let o=Math.cos(i),l=Math.sin(i);r.flat.add(ze.box(),Se(e+l*12,n+.8,t+o*12,0,i,0,1.2,1.2,44),a),r.flat.add(ze.box(),Se(e-l*8,n-.6,t-o*8,0,i,0,2.2,2,4),8359053),r.flat.add(ze.box(),Se(e,n+3,t,0,0,0,1,6,1),a),r.flat.add(ze.box(),Se(e+l*1.5,n-1.2,t+o*1.5,0,i,0,2.4,2.4,2.4),3426654)}turbine(e,t,n=48,i=1,r=0){let a=this.B;if(a.flat.add(ze.cyl(14),Se(e,r+n*i/2,t,0,0,0,2.2*i,n*i,2.2*i),16054007),a.flat.add(ze.box(),Se(e,r+n*i+1,t-1,0,0,0,2.2*i,2.4*i,6*i),15396333),!this.rotorGeo){let l=new Re,c=new un(1.4,22,.4);c.translate(0,11,0);for(let h=0;h<3;h++)l.add(c,Se(0,0,0,0,0,h*Math.PI*2/3));l.add(ze.sphere(),Se(0,0,0,0,0,0,2,2,2)),this.rotorGeo=l.geometry(),this.rotorMat=new rn({color:16316921})}let o=new Fe(this.rotorGeo,this.rotorMat);o.scale.setScalar(i),o.position.set(e,r+n*i+1,t+2.2*i),o.rotation.z=this.r()*6,this.scene.add(o),this.animated.push({obj:o,speed:.6+this.r()*.4})}buildBlock(e,t,n,i,r){let a=this.B,o=this.r;this.addCollider(t,n,i,r);let l=t+5,c=n+5,h=i-5,d=r-5,u=h-l;for(let[f,g]of[[t+1.5,n+1.5],[i-1.5,n+1.5],[t+1.5,r-1.5],[i-1.5,r-1.5]])this.lamps.push({x:f,z:g});if(a.concrete.walls(t,0,n,i,.22,r,4,4),a.concrete.top(t,n,i,r,.22,4),e==="downtown"){let g=u/2;for(let b=0;b<2;b++)for(let m=0;m<2;m++){let p=g*(.62+o()*.28),x=g*(.62+o()*.28),v=l+g*(b+.5),y=c+g*(m+.5);this.building(v-p/2,y-x/2,v+p/2,y+x/2,35+o()*95,o()>.5?0:3)}for(let b=0;b<8;b++)this.tree(t+2+b*(i-t-4)/7,n+2,.8)}else if(e==="residential"||e==="town"){this.grassPatch(t+4,n+4,i-4,r-4);let f=3,g=u/f;for(let b=0;b<f;b++)for(let m=0;m<f;m++){let p=l+g*(b+.5),x=c+g*(m+.5);if(b===1&&m===1){for(let v=0;v<4;v++)this.tree(p+(o()-.5)*20,x+(o()-.5)*20,1);continue}if(e==="town"||o()<.45){let v=10+o()*6,y=9+o()*4,A=[16115400,14674416,15978928,15262376,13231041,15780297,16777215];this.house(p-v/2,x-y/2,p+v/2,x+y/2,3.6+(o()>.7?3.2:0),A[o()*A.length|0]),this.tree(p+v/2+3,x+y/2+3,.9)}else{let v=g*(.6+o()*.3),y=g*(.6+o()*.3);this.building(p-v/2,x-y/2,p+v/2,x+y/2,8+o()*26,o()>.5?1:2)}}for(let b=0;b<7;b++){let m=t+6+b*(i-t-12)/6;this.tree(m,n+2,.75),this.tree(m,r-2,.75)}}else if(e==="park"){this.grassPatch(t+4,n+4,i-4,r-4);for(let f=0;f<46;f++)this.tree(l+o()*u,c+o()*u,1.1,o()>.7?1:0);a.sand.ground(l+u*.35,c+u*.35,l+u*.65,c+u*.65,.235,8)}else if(e==="industrial"){let f=10+o()*6,g=u/2,b=[16777215,14083312,15786704,14543064][o()*4|0];if(a.wh.walls(l+2,.2,c+2,h-2,f,c+g-4,6,6,0,b),a.roof.top(l+2,c+2,h-2,c+g-4,f,6),o()>.4)for(let m=0;m<3;m++)this.tank(l+18+m*26,d-22,9,14+o()*8);else a.wh.walls(l+4,.2,c+g+4,h-30,f*.8,d-4,6,6,0,b),a.roof.top(l+4,c+g+4,h-30,d-4,f*.8,6),this.chimney(h-14,d-16,2.5,38+o()*20)}else e==="port"&&(this.containerStack(l+28,(c+d)/2,0,8,3,4),this.containerStack(h-28,(c+d)/2,0,8,3,3),this.crane((l+h)/2,d-4,30,Math.PI/2))}buildDepot(e,t,n,i,r){let a=this.B,o=this.r;a.lot.ground(t,n,i,r,.03,12);let l=(t+i)/2,c=(n+r)/2,h,d,u,f,g=34,b=14;if(e.side==="n"?(h={x:l,z:n+22,w:g,d:b},d=[t+10,r-50,i-10,r-6],u={x:l,z:n-dt},f="n"):e.side==="s"?(h={x:l,z:r-22,w:g,d:b},d=[t+10,n+6,i-10,n+50],u={x:l,z:r+dt},f="s"):e.side==="w"?(h={x:t+22,z:c,w:b,d:g},d=[i-50,n+10,i-6,r-10],u={x:t-dt,z:c},f="w"):(h={x:i-22,z:c,w:b,d:g},d=[t+6,n+10,t+50,r-10],u={x:i+dt,z:c},f="e"),e.lot){let P=this.hwIdx.nearest(u.x,u.z,{});P&&(u={x:P.x,z:P.z,hw:P.o.id,s:P.o.s[P.i]+(P.o.s[P.i+1]-P.o.s[P.i])*P.t});let B=(S,R,W,q)=>{let E=Math.hypot(W-S,q-R);a.flat.add(ze.box(),Se((S+W)/2,.9,(R+q)/2,0,Math.atan2(W-S,q-R),0,.08,1.8,E),7305856)};f!=="n"&&B(t,n,i,n),f!=="s"&&B(t,r,i,r),f!=="w"&&B(t,n,t,r),f!=="e"&&B(i,n,i,r)}this.depots[e.id]=Ni(Gt({},e),{zone:h,entry:u,lot:[t,n,i,r]});let[m,p,x,v]=d,y=(m+x)/2,A=(p+v)/2,w=e.kind,T=(P,B=16777215,S=-1)=>{S>=0?a.f[S].walls(m,.03,p,x,P,v,16,14,0):a.wh.walls(m,.03,p,x,P,v,6,6,0,B),a.roof.top(m,p,x,v,P,6),a.flat.walls(m,P,p,x,P+.6,v,1,1,0,e.color),this.addCollider(m,p,x,v);let R=2962486;for(let W=0;W<4;W++){let q=(W+.5)/4,E=4,I=Math.min(5,P-1);if(f==="n"){let M=m+(x-m)*q;a.flat.quad([M+E/2,.03,p-.05],[M-E/2,.03,p-.05],[M-E/2,I,p-.05],[M+E/2,I,p-.05],[0,0,-1],[0,0,1,0,1,1,0,1],R)}if(f==="s"){let M=m+(x-m)*q;a.flat.quad([M-E/2,.03,v+.05],[M+E/2,.03,v+.05],[M+E/2,I,v+.05],[M-E/2,I,v+.05],[0,0,1],[0,0,1,0,1,1,0,1],R)}if(f==="w"){let M=p+(v-p)*q;a.flat.quad([m-.05,.03,M-E/2],[m-.05,.03,M+E/2],[m-.05,I,M+E/2],[m-.05,I,M-E/2],[-1,0,0],[0,0,1,0,1,1,0,1],R)}if(f==="e"){let M=p+(v-p)*q;a.flat.quad([x+.05,.03,M+E/2],[x+.05,.03,M-E/2],[x+.05,I,M-E/2],[x+.05,I,M+E/2],[1,0,0],[0,0,1,0,1,1,0,1],R)}}this.signFor(e,f,d,P)};if(w==="port")this.containerStack(y-25,A,Math.PI/2,4,3,4),this.containerStack(y+25,A,Math.PI/2,4,3,3),this.addCollider(m,p,x,v),this.crane(y,A,34,0),this.signFor(e,f,d,4,!0);else if(w==="refinery"){for(let P=0;P<2;P++)for(let B=0;B<3;B++)this.tank(m+12+P*22,p+15+B*32,9,12+o()*6);this.chimney(x-8,p+12,1.6,42,12436423),this.addCollider(m,p,x,v),this.signFor(e,f,d,4,!0)}else if(w==="farm")a.flat.walls(m+5,.03,p+6,x-30,9,v-6,1,1,0,11088422),a.tiles.top(m+4,p+5,x-29,v-5,9,4),this.tank(x-14,A-10,5,18,14014684),this.tank(x-14,A+10,5,18,14014684),this.addCollider(m,p,x,v),this.signFor(e,f,d,4,!0);else if(w==="silo"){for(let P=0;P<2;P++)for(let B=0;B<3;B++)this.tank(m+12+P*20,p+18+B*32,7,26,13620182);this.addCollider(m,p,x,v),this.signFor(e,f,d,4,!0)}else if(w==="wind"){for(let P=0;P<3;P++)this.turbine(m+10+P*40,A,55,1);this.addCollider(m,p,x,v),this.signFor(e,f,d,4,!0)}else if(w==="construction"){for(let P=0;P<4;P++)for(let B=0;B<3;B++)for(let S=0;S<5;S++)a.flat.add(ze.box(),Se(m+6+P*10,S*4+2,p+10+B*14,0,0,0,.8,4,.8),10923183);for(let P=1;P<=5;P++)a.flat.add(ze.box(),Se(m+21,P*4,p+24,0,0,0,32,.4,30),11777719);this.crane(x-8,v-10,40,Math.PI/2),this.addCollider(m,p,x,v),this.signFor(e,f,d,4,!0)}else if(w==="fuel"){T(5,16777215);let P=h;a.flat.add(ze.box(),Se(P.x,7,P.z,0,0,0,P.w+6,.8,P.d+6),13639712);for(let[B,S]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let R=P.x+B*(P.w/2+4),W=P.z+S*(P.d/2+4);a.flat.add(ze.box(),Se(R,3.5,W,0,0,0,.6,7,.6),15528177),this.addCollider(R-.4,W-.4,R+.4,W+.4)}}else if(w==="steel")T(18,13220008),this.chimney(m+8,p+8,2.6,55),this.chimney(x-8,v-8,2.6,50);else if(w==="sawmill"){let B=(m+x)/2;a.wh.walls(m,.03,p,B,8,v,6,6,0,13148794),a.roof.top(m,p,B,v,8,6),this.addCollider(m,p,x,v);for(let S=0;S<3;S++)for(let R=0;R<7;R++){let W=p+14+S*30,q=B+4+R%4*2.2+(R>=4?1.1:0),E=R>=4?2.8:.9;a.flat.add(ze.cyl(10),Se(q,E,W,Math.PI/2,0,0,1.8,14,1.8),9329458)}this.signFor(e,f,d,4,!0)}else if(w==="quarry"){T(9,13682878);for(let P=0;P<2;P++)a.flat.add(ze.cone(16),Se(m+25+P*50,5,A,0,0,0,18,10,18),10261124)}else w==="hospital"?T(22,16777215,2):w==="market"?T(10,16777215,1):T(w==="garage"?9:12,w==="garage"?14083319:16777215);this.lamps.push({x:t+2,z:n+2},{x:i-2,z:r-2})}signFor(e,t,n,i,r=!1){let[a,o,l,c]=n,h=26,d=26*(192/1024),u=new Fe(new kt(h,d),new st({map:Te.sign(e.name.toUpperCase(),"#"+new le(e.color).multiplyScalar(.75).getHexString(),"#ffffff"),side:ht})),f=r?8:i+d/2+.8;if(t==="n"&&(u.position.set((a+l)/2,f,o-(r?4:.3)),u.rotation.y=Math.PI),t==="s"&&u.position.set((a+l)/2,f,c+(r?4:.3)),t==="w"&&(u.position.set(a-(r?4:.3),f,(o+c)/2),u.rotation.y=-Math.PI/2),t==="e"&&(u.position.set(l+(r?4:.3),f,(o+c)/2),u.rotation.y=Math.PI/2),u.matrixAutoUpdate=!1,u.updateMatrix(),this.scene.add(u),r){let g=u.position,b=Math.cos(u.rotation.y),m=Math.sin(u.rotation.y);for(let p of[-1,1])this.B.flat.add(ze.box(),Se(g.x+b*p*10,3,g.z-m*p*10,0,u.rotation.y,0,.5,6,.5),5592405)}}roadSign(e,t,n,i,r,a="#0f6b3a",o=0){let h=new Fe(new kt(9,3.6),new st({map:Te.roadSign(i,r,a),side:ht}));h.position.set(e,o+5.2,t),h.rotation.y=n,h.matrixAutoUpdate=!1,h.updateMatrix(),this.scene.add(h);let d=Math.cos(n),u=Math.sin(n);for(let f of[-1,1])this.B.metal.add(ze.cyl(8),Se(e+d*f*3.6,o+3.4,t-u*f*3.6,0,0,0,.25,6.8,.25),11581115)}buildHighway(e){let t=this.B,n=e.n,i=9;for(let d=0;d<n-1;d++){let u=d,f=d+1,g=[-e.dz[u],e.dx[u]],b=[-e.dz[f],e.dx[f]],m=e.y[u]+.04,p=e.y[f]+.04,x=e.s[u]/18,v=e.s[f]/18,y=(w,T,P,B)=>[e.x[w]+T[0]*P,B,e.z[w]+T[1]*P];t.hwy.quad(y(u,g,-i,m),y(u,g,i,m),y(f,b,i,p),y(f,b,-i,p),[0,1,0],[0,x,1,x,1,v,0,v]);let A=e.bridge[u]||e.bridge[f];for(let w of[-1,1]){let T=y(u,g,w*i,m-.04),P=y(f,b,w*i,p-.04);if(A)t.bridge.quad([T[0],m-1.6,T[2]],[P[0],p-1.6,P[2]],[P[0],p+1,P[2]],[T[0],m+1,T[2]],[g[0]*w,0,g[1]*w],[e.s[u]/4,0,e.s[f]/4,0,e.s[f]/4,.6,e.s[u]/4,.6]);else if(m>.25||p>.25){let B=2+m*1.9,S=2+p*1.9,R=y(u,g,w*(i+B),-.02),W=y(f,b,w*(i+S),-.02),q=I=>[I[0]/14,-I[2]/14],E=[g[0]*w*.45,.89,g[1]*w*.45];w>0?t.grass.quad(T,R,W,P,E,[...q(T),...q(R),...q(W),...q(P)],13162664):t.grass.quad(T,P,W,R,E,[...q(T),...q(P),...q(W),...q(R)],13162664)}}if(A&&(t.bridge.quad(y(u,g,i,m-1.6),y(u,g,-i,m-1.6),y(f,b,-i,p-1.6),y(f,b,i,p-1.6),[0,-1,0],[0,0,1,0,1,1,0,1]),d%7===0)){for(let w of[-1,1]){let T=y(u,g,w*5,0),P=e.y[u]-1.6;t.bridge.add(ze.cyl(12),Se(T[0],(P-2)/2,T[2],0,0,0,1.6,P+2,1.6))}t.bridge.add(ze.box(),Se(e.x[u],e.y[u]-2,e.z[u],0,Math.atan2(e.dx[u],e.dz[u]),0,13,.8,1.6))}if(!A&&e.y[u]>1.6&&this.rails.push({h:e,i:u}),d%12===0)for(let w of[-1,1])this.posts.push({x:e.x[u]+g[0]*w*(i+.7),y:e.y[u],z:e.z[u]+g[1]*w*(i+.7),rot:Math.atan2(e.dx[u],e.dz[u])})}let r=d=>d?gc[d[0]].name:"Serraria \u2022 Pedreira",a=(e.length/1e3).toFixed(1).replace(".",","),o=(d,u,f)=>{let g=[-e.dz[d],e.dx[d]],b=e.x[d]+g[0]*u*(i+3),m=e.z[d]+g[1]*u*(i+3);this.roadSign(b,m,Math.atan2(e.dx[d],e.dz[d])+(u>0?Math.PI:0),f,`${e.id} \u2022 ${a} km`,"#0f6b3a",e.y[d])};o(Math.min(e.n-1,16),1,r(e.def.to)),e.def.to&&o(Math.max(0,e.n-17),-1,r(e.def.from));let l=e.n/2|0,c=[-e.dz[l],e.dx[l]],h=new Fe(new Qo(.9,24),new st({map:Te.speedSign(80),side:ht}));h.position.set(e.x[l]+c[0]*(i+2),e.y[l]+2.6,e.z[l]+c[1]*(i+2)),h.rotation.y=Math.atan2(e.dx[l],e.dz[l])+Math.PI,this.scene.add(h),t.metal.add(ze.cyl(6),Se(h.position.x,e.y[l]+1,h.position.z,0,0,0,.12,2.6,.12),11581115)}buildRails(){let e=new Re;for(let{h:i,i:r}of this.rails){let a=Math.min(i.n-1,r+1);for(let o of[-1,1]){let l=9+.3,c=i.x[r]-i.dz[r]*o*l,h=i.z[r]+i.dx[r]*o*l,d=i.x[a]-i.dz[a]*o*l,u=i.z[a]+i.dx[a]*o*l,f=i.y[r],g=i.y[a];e.quad([c,f+.45,h],[d,g+.45,u],[d,g+.8,u],[c,f+.8,h],[-i.dz[r]*o,0,i.dx[r]*o],[0,0,1,0,1,1,0,1])}}this.rails.length&&this.scene.add(e.mesh(new _n({map:Te.metal(),side:ht,shininess:60})));let t=new un(.15,1.1,.15);t.translate(0,.55,0);let n=new Hn(t,new rn({color:15921906}),this.posts.length);this.posts.forEach((i,r)=>n.setMatrixAt(r,Se(i.x,i.y,i.z,0,i.rot,0))),n.computeBoundingSphere(),this.scene.add(n)}buildRiverAndSea(){let e=this.river,t=new Re,n=ei/2,i=o=>{let l=Math.max(0,o-1),c=Math.min(e.n-1,o+1),h=e.x[c]-e.x[l],d=e.z[c]-e.z[l],u=Math.hypot(h,d)||1;return[-d/u,h/u]};for(let o=0;o<e.n-1;o++){let l=i(o),c=i(o+1),h=(b,m,p,x)=>[e.x[b]+m[0]*p,x,e.z[b]+m[1]*p],d=h(o,l,-n,.06),u=h(o,l,n,.06),f=h(o+1,c,n,.06),g=h(o+1,c,-n,.06);t.quad(d,u,f,g,[0,1,0],[d[0]/30,d[2]/30,u[0]/30,u[2]/30,f[0]/30,f[2]/30,g[0]/30,g[2]/30]);for(let b of[-1,1]){let m=h(o,l,b*n,.045),p=h(o,l,b*(n+11),0),x=h(o+1,c,b*n,.045),v=h(o+1,c,b*(n+11),0);this.B.sand.quad(m,p,v,x,[0,1,0],[0,0,1,0,1,1,0,1])}if(o%3===0)for(let b of[-1,1]){let m=h(o,l,b*(n+16+this.r()*10),0);this.tree(m[0],m[2],1.2,0,-.1)}}this.M.sand.side=ht;let r=new _n({map:Te.water().clone(),color:10274518,shininess:110,specular:10075101,transparent:!0,opacity:.94,side:ht});r.map.needsUpdate=!0,this.riverMesh=t.mesh(r),this.scene.add(this.riverMesh),this.B.sand.ground(-6e3,1745,6e3,1800,.02,10);let a=new Fe(new kt(12e3,4e3),new _n({map:Te.water().clone(),shininess:90,specular:8956620,transparent:!0,opacity:.95}));a.material.map.needsUpdate=!0,a.material.map.repeat.set(400,130),a.rotation.x=-Math.PI/2,a.position.set(0,.07,3790),this.water=a,this.scene.add(a)}buildHills(){if(!this.hills.length)return;let e=[0,1,2,3].map(i=>{let r=new li(1,40,14,0,Math.PI*2,0,Math.PI/2),a=r.attributes.position,o=r.attributes.uv,l=[],c=new le,h=new le(7311178),d=new le(9407066),u=new le(7828333),f=new le(13159632);for(let g=0;g<a.count;g++){let b=a.getX(g),m=a.getY(g),p=a.getZ(g),x=Math.atan2(p,b),v=Dr(Math.cos(x)*2.2+i*7,Math.sin(x)*2.2+m*2.5)-.5,y=Dr(b*5+i*3,p*5+m*4)-.5,A=1+v*.32*(1-m*.4),w=m*(1+y*.5)*(i>=2?1+.25*Math.pow(m,3):1);a.setXYZ(g,b*A,Math.max(0,w),p*A),o.setXY(g,o.getX(g)*40,o.getY(g)*10);let T=Math.max(0,w);i>=2?(c.copy(h).lerp(u,Math.min(1,Math.max(0,(T-.35)*2.2))),i===3&&T>.85&&c.lerp(f,Math.min(1,(T-.85)*5))):c.copy(h).lerp(d,Math.max(0,y+.3)*.6),c.multiplyScalar(1.25),l.push(c.r,c.g,c.b)}return r.setAttribute("color",new He(l,3)),r.computeVertexNormals(),r}),t=[[],[],[],[]];for(let i of this.hills)t[i.h>95?2+i.v%2:i.v%2].push(i);let n=new le;t.forEach((i,r)=>{if(!i.length)return;let a=new Hn(e[r],this.M.grass,i.length);i.forEach((o,l)=>{a.setMatrixAt(l,Se(o.x,-3,o.z,0,o.rot||0,0,o.r,o.h,o.r*(.8+l*7%5*.08))),a.setColorAt(l,n.setHSL(.25,.1,.9+l*13%7/60))}),a.computeBoundingSphere(),a.receiveShadow=!0,this.scene.add(a)});for(let i of this.hills)i.x>300&&i.z<900&&i.h<95&&this.r()>.45&&this.turbine(i.x,i.z,50,1,i.h*.85-6)}scatterForest(){let e=this.r,t=this.q.trees,n=0,i=0;for(;i<t&&n++<t*8;){let a=Pt.x0+e()*(Pt.x1-Pt.x0),o=Pt.z0+e()*(Pt.z1-Pt.z0),l=Dr(a/520,o/520)*.8+(a<-300&&o<600?.55:-.15);if(e()>l||!this.isFree(a,o,2))continue;let c=a<-1500||a>2600||Dr(a/300+9,o/300)>.62,h=this.terrainH(a,o);h>55||(this.tree(a,o,1.3+e()*.8,c?1:0,h*.85-.6),i++)}for(let a of this.fields)for(let o=0;o<5;o++)this.tree(a.x0+e()*(a.x1-a.x0),a.z0-5,1.1,0,0);let r=this.q.trees/7e3;for(let a of this.hws)if(a.id!=="SP-280")for(let o=0;o<a.n;o+=2){let l=Math.round(3*r+e());for(let c=0;c<l;c++){let h=e()<.5?-1:1,d=18+a.y[o]*1.9+Math.pow(e(),1.6)*70,u=a.x[o]-a.dz[o]*h*d+(e()-.5)*6,f=a.z[o]+a.dx[o]*h*d+(e()-.5)*6;if(!this.isFree(u,f,0))continue;let g=a.id==="RS-030"?e()<.7:e()<.3;this.tree(u,f,1.5+e()*1.1,g?1:0,this.terrainH(u,f)-.2)}}}buildTrees(){let e=l=>{let c=l===1?4.6:l===2?5:6.6,h=l===1?10:l===2?13:8.5,d=[],u=[],f=[],g=[],b=3;for(let p=0;p<b;p++){let x=p/b*Math.PI,v=Math.cos(x)*c/2,y=Math.sin(x)*c/2,A=d.length/3;d.push(-v,0,-y,v,0,y,v,h,y,-v,h,-y);for(let w=0;w<4;w++)u.push(0,.85,.15);f.push(0,0,1,0,1,1,0,1),g.push(A,A+1,A+2,A,A+2,A+3)}let m=new gt;return m.setAttribute("position",new He(d,3)),m.setAttribute("normal",new He(u,3)),m.setAttribute("uv",new He(f,2)),m.setIndex(g),m},t=[e(0),e(1),e(2)],n=[0,1,2].map(l=>new rn({map:Te.treeCard(l),alphaTest:.45,side:ht})),i=[0,1,2].map(l=>new fa({depthPacking:_h,map:Te.treeCard(l),alphaTest:.45})),r=700,a=new Map;for(let l of this.trees){let c=l.k;c===0&&(l.x*13+l.z*7|0)%7===0&&l.x>-800&&(c=2);let h=Math.floor(l.x/r)*1e3+Math.floor(l.z/r)+":"+c;a.has(h)||a.set(h,[]),a.get(h).push(l)}let o=new le;for(let[l,c]of a){let h=+l.split(":")[1],d=new Hn(t[h],n[h],c.length);c.forEach((u,f)=>{d.setMatrixAt(f,Se(u.x,u.y,u.z,0,u.rot,0,u.s*.95,u.s*(.85+f%5*.07),u.s*.95)),o.setHSL(.2+f*37%10/160,.25,.78+f*13%10/40),d.setColorAt(f,o)}),d.computeBoundingSphere(),d.castShadow=!0,d.customDepthMaterial=i[h],this.scene.add(d)}}buildLamps(){let e=this.lamps.length,t=new Vn(.12,.16,8,6);t.translate(0,4,0);let n=new un(.15,.15,2.2);n.translate(0,8,1);let i=new un(.5,.2,.9);i.translate(0,7.9,2);let r=new Hn(t,new rn({color:6122878}),e),a=new Hn(n,new rn({color:6122878}),e),o=new Hn(i,new st({color:16642768}),e),l=new kt(16,16);l.rotateX(-Math.PI/2),l.translate(0,.12,3.5);let c=new Hn(l,new st({map:Te.glow(),color:16757596,transparent:!0,opacity:0,depthWrite:!1,blending:Cn}),e);this.lamps.forEach((h,d)=>{let u=this.areas.find(b=>b.city&&h.x>=b.x0&&h.x<=b.x1&&h.z>=b.z0&&h.z<=b.z1),f=0;if(u){let b=u.city,m=Math.round((h.x-b.x0)/140)*140+b.x0,p=Math.round((h.z-b.z0)/140)*140+b.z0;f=Math.abs(h.x-m)<Math.abs(h.z-p)?m>h.x?Math.PI/2:-Math.PI/2:p>h.z?0:Math.PI}let g=Se(h.x,0,h.z,0,f,0);r.setMatrixAt(d,g),a.setMatrixAt(d,g),o.setMatrixAt(d,g),c.setMatrixAt(d,g)}),this.lampHeads=o,this.lampPools=c,c.visible=!1;for(let h of[r,a,o,c])h.computeBoundingSphere(),this.scene.add(h)}setNight(e){for(let t of this.M.f)t.emissiveIntensity=Math.max(0,e*1.1-.1);this.lampPools.visible=e>.05,this.lampPools.material.opacity=e*.9,this.lampHeads.material.color.setRGB(.75+e*.25,.72+e*.2,.65+e*.1)}update(e,t){for(let n of this.animated)n.obj.rotation.z+=n.speed*e;this.water&&this.water.material.map.offset.set(t*.004,t*.006),this.riverMesh&&this.riverMesh.material.map.offset.set(t*.02,t*.01)}};var Ca=new D;function qn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Ca.copy(e),Ca[n]=0,Ca.normalize();let c=.5*a/(a+o),h=1-Ca.angleTo(s)/l;return Math.sign(Ca[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Nr=class extends un{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new D,b=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*b,l.y-=Math.sign(l.y)*b,l.z-=Math.sign(l.z)*b,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=qn(g,l,"z","y",r,n),u[p+1]=1-qn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[p+0]=1-qn(g,l,"z","y",r,n),u[p+1]=1-qn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[p+0]=1-qn(g,l,"x","z",r,e),u[p+1]=qn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-qn(g,l,"x","z",r,e),u[p+1]=1-qn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-qn(g,l,"x","y",r,e),u[p+1]=1-qn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[p+0]=qn(g,l,"x","y",r,e),u[p+1]=1-qn(g,l,"y","x",r,t);break}}};var Ps="medium",Ls={};function gp(s){Ps=s}var fi=null;function La(){if(fi)return fi;let s=Ps!=="low",e=t=>{var n;return s?new wn(t):new _n({color:t.color,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:(n=t.opacity)!=null?n:1,shininess:t.roughness<.3?120:20,specular:t.metalness>.5?16777215:3355443})};return fi={chrome:e({color:15922422,metalness:1,roughness:.14,map:Te.metal()}),alu:e({color:13225425,metalness:.9,roughness:.3}),dark:e({color:2040616,metalness:.1,roughness:.75,side:ht}),steel:e({color:3883336,metalness:.5,roughness:.5}),glass:e({color:989732,metalness:.4,roughness:.03,transparent:!0,opacity:.62,side:ht}),interior:e({color:2764081,metalness:0,roughness:.9}),lamp:s?new wn({map:Te.headlamp(),emissiveMap:Te.headlamp(),emissive:16777215,emissiveIntensity:.15,metalness:.6,roughness:.15,side:ht}):new st({map:Te.headlamp(),side:ht}),tail:new st({map:Te.taillamp(),side:ht}),lampFlat:s?new wn({color:16054008,emissive:16774102,emissiveIntensity:.15,metalness:.5,roughness:.1}):new st({color:16054008}),blink:new Ms({map:Te.glow(),color:16753178,transparent:!0,depthWrite:!1,blending:Cn}),rubber:e({color:16777215,map:Te.tire(),metalness:0,roughness:.92}),rim:e({color:15264492,metalness:.85,roughness:.25}),light:new st({color:16775393}),red:new st({color:14037041}),amber:new st({color:16753178}),grill:e({color:16777215,map:Te.grill(),metalness:.7,roughness:.3}),flat:e({vertexColors:!0,metalness:.15,roughness:.55}),flatChrome:e({vertexColors:!0,metalness:.9,roughness:.2}),panel:e({color:16777215,map:Te.panel(),metalness:.2,roughness:.5}),blob:new st({map:Te.blob(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),glow:new Ms({map:Te.glow(),color:16774102,transparent:!0,depthWrite:!1,blending:Cn}),glowRed:new Ms({map:Te.glow(),color:16722458,transparent:!0,depthWrite:!1,blending:Cn}),beam:new st({map:Te.beam(),transparent:!0,depthWrite:!1,blending:Cn,polygonOffset:!0,polygonOffsetFactor:-3})},fi}function iy(s){return Ps==="high"?new vn({color:s,map:Te.paint(),metalness:.35,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):Ps==="medium"?new wn({color:s,map:Te.paint(),metalness:.35,roughness:.33}):new _n({color:s,map:Te.paint(),shininess:90,specular:8947848})}var Ih={};function bp(s,e){let t=s+"_"+e;if(Ih[t])return Ih[t];let n=[[s*.6,-e/2],[s*.9,-e/2],[s*.985,-e*.4],[s,-e*.25],[s,e*.25],[s*.985,e*.4],[s*.9,e/2],[s*.6,e/2]].map(([c,h])=>new ae(c,h)),i=new _a(n,22),r=[[.001,e*.36],[s*.18,e*.38],[s*.24,e*.3],[s*.5,e*.26],[s*.6,e*.34],[s*.6,-e*.3]].map(([c,h])=>new ae(c,h)),a=new _a(r,22),o=new Vn(.03,.03,.06,6),l=new Re;l.add(a,Se(0,0,0));for(let c=0;c<10;c++){let h=c/10*Math.PI*2;l.add(o,Se(Math.cos(h)*s*.32,e*.36,Math.sin(h)*s*.32))}return Ih[t]={tire:i,rim:l.geometry()}}function xp(s){let e=new Re,t=[];for(let[i,r]of s){let a=e.idx.length;for(let[o,l]of i)e.add(o,l);t.push([a,e.idx.length-a,r])}let n=e.geometry();for(let[i,r,a]of t)r&&n.addGroup(i,r,a);return n}function Uh(s,e,t,n,i){let{tire:r,rim:a}=bp(t,n),o=[],l=[];for(let d of[-1,1]){let u=d>0?-Math.PI/2:Math.PI/2;i?(o.push([r,Se(d*(e/2+n*.52),0,0,0,0,u)]),o.push([r,Se(d*(e/2-n*.52),0,0,0,0,u)]),l.push([a,Se(d*(e/2+n*.52),0,0,0,0,u)])):(o.push([r,Se(d*e/2,0,0,0,0,u)]),l.push([a,Se(d*e/2,0,0,0,0,u)]))}let c=La(),h=new Fe(xp([[o,0],[l,1]]),[c.rubber,c.rim]);return h.position.set(0,t,s),h.castShadow=!0,h}function Pa(s,e,t,n,i){let{tire:r,rim:a}=bp(t,n),o=i>0?-Math.PI/2:Math.PI/2,l=La(),c=new Fe(xp([[[[r,Se(0,0,0,0,0,o)]],0],[[[a,Se(0,0,0,0,0,o)]],1]]),[l.rubber,l.rim]);c.castShadow=!0;let h=new Ct;return h.position.set(e,t,s),h.add(c),h}function vp(s,e){for(let[t,n]of s){let i=t.mesh(n,{cast:!0});i&&e.add(i)}}var mp={};function sy(s,e,t,n){let i=[s,e,t,n].join("_");return mp[i]||(mp[i]=new Nr(s,e,t,2,n))}var ry=new Vn(1,1,1,14,1,!0,0,Math.PI);function ts(s,e,t=.06,n=3){let i=new Ki;s(i);let r=Math.max(.01,e-2*t),a=new ec(i,{depth:r,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:n,curveSegments:10});a.rotateY(-Math.PI/2),a.translate(r/2,0,0),a.computeBoundingBox();let o=a.boundingBox,l=a.attributes.position,c=a.attributes.uv;for(let h=0;h<l.count;h++)c.setXY(h,(l.getZ(h)-o.min.z)/(o.max.z-o.min.z||1),(l.getY(h)-o.min.y)/(o.max.y-o.min.y||1));return a}function Cs(s,e,t,n=[0,0,1,0,1,1,0,1]){for(let i of[-1,1]){let r=e.map(([a,o])=>[i*t,o,a]);s.quad(r[0],r[1],r[2],r[3],[i,0,0],i>0?n:[n[2],n[3],n[0],n[1],n[6],n[7],n[4],n[5]])}}function Nh(s,e,t,n,i,r,a,o=0){let l=n-e,c=i-t,h=Math.hypot(l,c),d=c/h,u=-l/h,f=[e+d*a,t+u*a],g=[n+d*a,i+u*a];s.quad([o-r/2,f[1],f[0]],[o+r/2,f[1],f[0]],[o+r/2,g[1],g[0]],[o-r/2,g[1],g[0]],[0,u,d],[0,0,1,0,1,1,0,1])}var ay={canter:{glass:{ws:[5.1,1.73,4.76,2.2,1.76],side:[[4.3,1.5],[5.08,1.5],[4.8,2.12],[4.3,2.12]],sideX:.965},lampY:.78,blinkY:.62},labo:{lampY:.78,blinkY:.62,bed:{z0:-.62,z1:1.18,y:.66,w:1.3}},volvo:{lampY:.85,blinkY:.75,tractor:!0}};function _p(s){let e={};return s.traverse(t=>{let n=t.userData||{};if(n.meta)try{e=Gt(Gt({},JSON.parse(n.meta)),e)}catch(i){}else n.wb&&!e.wb&&(e=Gt(Gt({},n),e))}),e}function oy(s,e){var E;let t=La(),n=_p(e),i=ay[s.model]||{},r=new Ct;r.rotation.order="YXZ";let a=new Ct;r.add(a);let o=Ps==="low"?new _n({color:s.color,shininess:90,specular:8947848}):Ps==="high"?new vn({color:s.color,metalness:.3,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):new wn({color:s.color,metalness:.3,roughness:.33});t.boxWhite=t.boxWhite||(Ps==="low"?new _n({color:15659250,shininess:40}):new wn({color:15659250,metalness:.25,roughness:.45})),t.tireFlat=t.tireFlat||new wn({color:1381653,roughness:.92});let l={paint:o,box:t.boxWhite,glass:t.glass,interior:t.interior,steel:t.steel,dark:t.dark,rubber:t.tireFlat,chrome:t.chrome,lamp:t.lampFlat,red:t.red,amber:t.amber},c={},h=I=>!I||I.side===ht?I:c[I.uuid]||(c[I.uuid]=Object.assign(I.clone(),{side:ht}));e.updateMatrixWorld(!0);let d=new Mn;e.traverse(I=>{if(!I.isMesh)return;let M=new Fe(I.geometry,h(l[I.material&&I.material.name]||l[I.name]||t.steel));M.matrixAutoUpdate=!1,M.matrix.copy(I.matrixWorld),M.castShadow=!0,a.add(M),d.expandByObject(I)});let u=d.max.z,f=d.min.z,g=d.max.x-d.min.x,b=g/2;if(i.glass){let I=new Re,[M,F,H,z,G]=i.glass.ws;Nh(I,M,F,H,z,G,0),Cs(I,i.glass.side,i.glass.sideX),a.add(I.mesh(t.glass,{cast:!1}))}let m=null;if(i.bed){let I=i.bed,M=new Re(!0),F=[12884588,12094040,13806460],H=0;for(let z=I.z0+.3;z<I.z1-.25;z+=.55)for(let G=-I.w/2+.3;G<I.w/2-.25;G+=.6){let te=.35+H*7%3*.12;M.add(ze.box(),Se(G,I.y+te/2,z,0,H*13%5*.04,0,.52,te,.48),F[H++%3])}m=M.mesh(new rn({vertexColors:!0}),{cast:!0}),m.visible=!1,a.add(m)}let p=n.wheels||[],x=[],v=[];for(let I of p.filter(M=>M.tag[0]==="F")){let M=Pa(I.z,I.x,I.r,Math.max(.16,I.w),I.x>0?1:-1);M.position.y=I.r,x.push(M),r.add(M)}let y=p.filter(I=>I.tag[0]==="R"),A=[];for(let I of y)A.some(M=>Math.abs(M-I.z)<.3)||A.push(I.z);for(let I of A){let M=y.find(G=>Math.abs(G.z-I)<.3),F=y.filter(G=>Math.abs(G.z-I)<.3).reduce((G,te)=>G+Math.abs(te.x),0)/y.filter(G=>Math.abs(G.z-I)<.3).length*2,H=M.w>.3,z=Uh(I,F,M.r,H?M.w/2.1:Math.max(.16,M.w),H);v.push(z),r.add(z)}let w=n.wr||.4,T=n.wb||3,P=new Ct,B=i.lampY||.8;for(let I of[-1,1]){let M=new Jn(t.glow);M.scale.set(1.4,1.4,1),M.position.set(I*(b-.3),B,u+.1),P.add(M);let F=new Jn(t.glowRed);F.scale.set(.8,.8,1),F.position.set(I*(b-.2),B,f-.08),P.add(F)}let S=new Fe(new kt(8,24),t.beam);S.rotation.set(-Math.PI/2,0,Math.PI),S.position.set(0,.07,u+12.5),P.add(S),P.visible=!1,r.add(P);let R=[],W=[];for(let I of[-1,1])for(let[M,F]of[[i.blinkY||.6,u+.08],[i.blinkY||.6,f-.08]]){let H=new Jn(t.blink);H.scale.set(.7,.7,1),H.position.set(I*(b-.08),M,F),H.visible=!1,r.add(H),(I>0?R:W).push(H)}let q=new Fe(new kt(g+.8,u-f+1.2),t.blob);return q.rotation.x=-Math.PI/2,q.position.set(0,.05,(u+f)/2),r.add(q),{root:r,body:a,front:x,rear:v,wb:T,wr:w,hitchZ:i.tractor?(E=n.hitchZ)!=null?E:.1:f,zf:u,rearEnd:f,paint:o,blob:q,cabW:Math.min(g,2.6),night:P,y0:1,cabFront:u,ch:n.height||2,conv:!1,blinkL:R,blinkR:W,bedCargo:m}}function cy(s){if(s.model&&Ls[s.model])return oy(s,Ls[s.model]);let e=La(),t=new Ct;t.rotation.order="YXZ";let n=new Ct;t.add(n);let i=new Re,r=new Re,a=new Re,o=new Re,l=new Re,c=new Re,h=new Re,d=new Re,u=new Re,f=new Re,g=new Re,b=new Re,m=new Re,p=new Re,x=(O,se,ce,ve,L,_,X,U=0,ne=0,re=0)=>O.add(ze.box(),Se(L,_,X,U,ne,re,se,ce,ve)),v=(O,se,ce,ve,L,_,X,U=.1,ne=0)=>O.add(sy(se,ce,ve,U),Se(L,_,X,ne,0,0)),y=(O,se,ce,ve,L,_,X=0,U=0,ne=0,re=14)=>O.add(ze.cyl(re),Se(ve,L,_,X,U,ne,se*2,ce,se*2)),A=(O,se,ce=0)=>O.add(se,Se(ce,0,0)),w=s.rigid,T=s.id==="urbano",P=s.cab==="conventional",B=s.roof==="high",S=s.roof==="mid",R=T?.42:.53,W=T?3.3:w?4.3:P?s.axles>=4?5.9:5.6:s.axles>=4?4.6:3.9,q=T?2.15:2.5,E=T?.95:1.15,I=T?.86:1,M=O=>E+O*I,F=W+(T?1.25:P?1.6:1.4),H=w?-(T?1.4:2):-1.45,z=q/2,G,te;for(let O of[-1,1])x(u,.12,.3,F-H-.4,O*.45,E-.28,(F+H)/2-.15);for(let O=H+.4;O<W;O+=1.1)x(u,.9,.14,.12,0,E-.28,O);if(P){let O=F,se=2.05,ce=O-se,ve=q*.64;G=ce;let L=B?1.9:1.2;te=G-1.8-L,A(i,ts(U=>{U.moveTo(ce,E-.15),U.lineTo(O-.1,E-.15),U.lineTo(O,E-.05),U.lineTo(O,M(1)),U.quadraticCurveTo(O,M(1.18),O-.28,M(1.21)),U.lineTo(ce,M(1.36)),U.lineTo(ce,E-.15)},ve,.12)),v(r,ve*.9,1.12*I,.12,0,M(.48),O+.15,.04),x(d,ve*.76,1*I,.03,0,M(.48),O+.22),x(r,.08,.12,.28,0,M(1.27),O-.15);let _=R+.14;for(let U of[-1,1]){A(i,ts(ne=>{ne.moveTo(W+_*Math.cos(-.35),R+_*Math.sin(-.35)),ne.absarc(W,R,_,-.35,Math.PI,!1),ne.lineTo(W-_-.55,R+.02),ne.lineTo(W-_-.55,R-.06),ne.lineTo(W-_+.08,R-.06),ne.absarc(W,R,_-.08,Math.PI,-.35,!0)},.62,.03,2),U*(z-.31)),g.quad([U*(z-.31)-.24,R+.32,W+_+.02],[U*(z-.31)+.24,R+.32,W+_+.02],[U*(z-.31)+.24,R+.56,W+_-.03],[U*(z-.31)-.24,R+.56,W+_-.03],[0,.2,1],[0,0,1,0,1,1,0,1]),y(r,.2,1.1,U*(z+.02),M(.95),G+.15),y(r,.06,.55,U*(z+.02),M(1.7),G+.15);for(let ne of[0,1])x(u,.42,.05,.6,U*(z-.2),.48+ne*.36,G-.55);x(a,.06,.95,.65,U*(z-.01),.72,G-.55)}A(r,ts(U=>{U.moveTo(O-.05,E-.62),U.lineTo(O+.3,E-.62),U.quadraticCurveTo(O+.38,E-.6,O+.38,E-.42),U.lineTo(O+.34,E-.14),U.lineTo(O-.05,E-.14)},q+.1,.05)),A(i,ts(U=>{U.moveTo(G-1.8,E),U.lineTo(G-.05,E),U.lineTo(G,M(.3)),U.lineTo(G,M(1.36)),U.lineTo(G-.3,M(2.1)),U.quadraticCurveTo(G-.4,M(2.24),G-.62,M(2.25)),U.lineTo(G-1.65,M(2.25)),U.quadraticCurveTo(G-1.8,M(2.25),G-1.8,M(2.1)),U.lineTo(G-1.8,E)},q,.07));let X=M(B?3.05:2.4);A(i,ts(U=>{U.moveTo(te,E),U.lineTo(G-1.76,E),U.lineTo(G-1.76,M(2.2)),U.quadraticCurveTo(G-1.95,X,G-2.6,X),U.lineTo(te+.15,X),U.quadraticCurveTo(te,X,te,X-.15),U.lineTo(te,E)},q-.04,.07));for(let U of[-1,1])Nh(o,G,M(1.38),G-.3,M(2.08),q/2-.24,.075,U*(q/4-.04));for(let U of[-.6,.6])x(a,.6,.03,.03,U,M(1.42),G+.06,0,0,.2);v(i,q-.1,.12,.45,0,M(2.2),G+.08,.04,-.25);for(let U=-2;U<=2;U++)x(h,.13,.06,.08,U*.34,M(2.3),G-.1);for(let U of[-1,1]){let ne=U*(z+.072);x(a,.02,M(2)-M(.15),.025,ne,(M(2)+M(.15))/2,G-1.2),x(a,.02,.025,1.1,ne,M(.15),G-.65),x(r,.04,.05,.2,U*(z+.09),M(1.1),G-1.05),x(r,.4,.04,.04,U*(z+.22),M(2),G-.25,0,U*-.3,0),x(r,.04,.55,.04,U*(z+.42),M(1.75),G-.12),v(r,.15,.7,.3,U*(z+.48),M(1.6),G-.1,.05),x(o,.02,.6,.22,U*(z+.4),M(1.6),G-.1),y(r,.11,3,U*(z-.12),M(2.4),te-.22),y(r,.15,1,U*(z-.12),M(1.6),te-.22)}Cs(o,[[G-.07,M(1.44)],[G-1.12,M(1.44)],[G-1.12,M(2.06)],[G-.32,M(2.06)]],z+.075),Cs(o,[[G-2.3,M(1.4)],[G-2.7,M(1.4)],[G-2.7,M(1.75)],[G-2.3,M(1.75)]],z+.055),Cs(m,[[G-.05,M(.3)],[te+.1,M(.3)],[te+.1,M(1.15)],[G-.05,M(1.15)]],z+.08),x(p,q-.3,.3,.5,0,M(1.25),G-.35),p.add(new wr(.22,.025,6,18),Se(.55,M(1.42),G-.65,.6,0,0));for(let U of[-1,1])x(p,.55,.15,.55,U*.55,M(.7),G-1.1),x(p,.55,.8,.12,U*.55,M(1.1),G-1.4,-.15)}else{let O=F,se=T?1.75:w?1.95:2.3,ce=O-se;G=O,te=ce;let ve=M(B?3:S?2.55:2.14);A(i,ts(_=>{_.moveTo(ce,E),_.lineTo(O-.18,E),_.quadraticCurveTo(O-.02,E,O-.02,M(.2)),_.lineTo(O-.06,M(1)),_.lineTo(O-.12,M(1.08)),_.lineTo(O-.4,M(2)),_.quadraticCurveTo(O-.47,M(2.14),O-.7,M(2.15)),(B||S)&&(_.quadraticCurveTo(O-.95,M(2.17),O-1.05,M(B?2.55:2.35)),_.quadraticCurveTo(O-1.15,ve,O-1.5,ve)),_.lineTo(ce+.16,ve),_.quadraticCurveTo(ce,ve,ce,ve-.16),_.lineTo(ce,E)},q,.07)),Nh(o,O-.12,M(1.1),O-.4,M(1.98),q-.34,.075);for(let _ of[-.45,.35])x(a,.7,.03,.03,_,M(1.15),O-.04,0,0,.25);A(i,ts(_=>{_.moveTo(O-.42,M(2.06)),_.lineTo(O+.04,M(2)),_.lineTo(O+.04,M(1.95)),_.lineTo(O-.42,M(2))},q-.12,.015,1));for(let _=-2;_<=2;_++)x(h,.13,.06,.08,_*.34,M(2.06),O-.12);x(d,q*.68,.55*I,.03,0,M(.62),O+.03,-.05);for(let _ of[.42,.62,.82])x(r,q*.7,.035,.035,0,M(_),O+.05);x(r,.24,.24,.04,0,M(.98),O+.02,0,0,Math.PI/4),A(a,ts(_=>{_.moveTo(O-.35,E-.55),_.lineTo(O+.05,E-.55),_.quadraticCurveTo(O+.17,E-.55,O+.17,E-.4),_.lineTo(O+.13,E+.12),_.lineTo(O-.35,E+.12)},q+.04,.05));for(let _ of[-1,1]){g.quad([_*(z-.12)-(_>0?.62:0),E-.2,O+.235],[_*(z-.12)+(_>0?0:.62),E-.2,O+.235],[_*(z-.12)+(_>0?0:.62),E+.06,O+.2],[_*(z-.12)-(_>0?.62:0),E+.06,O+.2],[0,0,1],[0,0,1,0,1,1,0,1]),y(l,.075,.04,_*(z-.4),E-.42,O+.235,Math.PI/2,0,0,12),a.add(ry,Se(_*(z-.25),R,W,0,0,Math.PI/2,R+.12,.44,R+.12));for(let X of[0,1])x(u,.4,.05,.42,_*(z-.2),.48+X*.36,W-.72);x(a,.06,.95,.5,_*(z-.01),.7,W-.72)}for(let _ of[-1,1]){let X=_*(z+.072);x(a,.02,M(1.95)-M(.15),.025,X,(M(1.95)+M(.15))/2,O-1.32),x(a,.02,M(1)-M(.15),.025,X,(M(1)+M(.15))/2,O-.22),x(a,.02,.025,1.1,X,M(.15),O-.77),x(r,.04,.05,.2,_*(z+.09),M(1.02),O-1.18),x(r,.02,.03,1.15,_*(z+.078),M(1.16),O-.78),x(r,.42,.04,.04,_*(z+.24),M(1.96),O-.3,0,_*-.3,0),x(r,.04,.5,.04,_*(z+.44),M(1.72),O-.18),v(a,.15,.64,.32,_*(z+.5),M(1.6),O-.14,.05),x(o,.02,.54,.24,_*(z+.425),M(1.6),O-.14),v(a,.13,.26,.22,_*(z+.48),M(1.12),O-.12,.05)}if(Cs(o,[[O-.17,M(1.18)],[O-1.25,M(1.18)],[O-1.25,M(1.92)],[O-.41,M(1.92)]],z+.075),B&&Cs(o,[[ce+.35,M(2.25)],[ce+.15,M(2.25)],[ce+.15,M(2.7)],[ce+.35,M(2.7)]],z+.075),Cs(m,[[O-.15,M(.2)],[ce+.05,M(.2)],[ce+.05,M(1.05)],[O-.15,M(1.05)]],z+.08),B&&!w)for(let _ of[-1,1])x(i,.05,.62,W-.95-1.2,_*(z-.04),.78,(W-.95+1.2)/2);x(p,q-.3,.3,.55,0,M(1),O-.45);let L=new wr(.21,.025,6,18);p.add(L,Se(.55,M(1.18),O-.72,.55,0,0));for(let _ of[-1,1])x(p,.55,.15,.55,_*.55,M(.55),O-1.25),x(p,.55,.75,.12,_*.55,M(.95),O-1.55,-.15)}if(!T){let O=P?G-1.4:W-1.6;y(f,.34,1.4,1.02,.86,O,Math.PI/2,0,0,20);for(let se of[-.45,.45])y(a,.355,.06,1.02,.86,O+se,Math.PI/2,0,0,20);x(a,.5,.5,.7,-1,.85,O+.1),y(u,.17,1.1,-.95,.62,O-.9,Math.PI/2)}if(!w){let O=te-.25;P||(y(r,.11,2.6,z-.14,M(2)+(B?.4:0),O),y(r,.15,.9,z-.14,M(1.2),O)),x(f,1.3,.05,.55,0,E+.05,O-.1);for(let[se,ce]of[[12597547,-.18],[3049182,.18]]){let ve=new Fe(new wr(.16,.025,6,16),new rn({color:se}));ve.position.set(ce,E+.5,O-.05),n.add(ve)}x(u,1.35,.14,1.3,0,E-.02,.3),x(f,1.2,.03,1.1,0,E+.06,.3);for(let se of[-1,1])x(a,.7,.05,s.axles>=3?2.7:1.4,se*.98,R*2+.14,0)}for(let O of[-1,1])b.quad([O*.62-.22,E-.32,H-.03],[O*.62+.22,E-.32,H-.03],[O*.62+.22,E-.1,H-.03],[O*.62-.22,E-.1,H-.03],[0,0,-1],O>0?[1,0,0,0,0,1,1,1]:[0,0,1,0,1,1,0,1]),x(a,.62,.62,.03,O*1,.55,s.axles>=3&&!w?-1.45:-.8);x(u,2,.1,.12,0,E-.2,H);let be=.3;if(w){let O=te-.15,se=H,ce=T?2.3:2.7,ve=T?2.25:2.5;x(u,ve,.12,O-se,0,E+.02,(se+O)/2);let L=new rn({map:Te.cargoBox("#"+new le(s.color===15921906?3108830:s.color).getHexString(),"DRIZZIE")}),_=new Re,X=E+.08,U=E+.08+ce;_.quad([ve/2+.01,X,O],[ve/2+.01,X,se],[ve/2+.01,U,se],[ve/2+.01,U,O],[1,0,0],[1,0,0,0,0,1,1,1]),_.quad([-ve/2-.01,X,se],[-ve/2-.01,X,O],[-ve/2-.01,U,O],[-ve/2-.01,U,se],[-1,0,0],[0,0,1,0,1,1,0,1]),n.add(_.mesh(L,{cast:!0}));let ne=new Re(!0);ne.box(-ve/2,X,se,ve/2,U,O,1,16053492);for(let re of[-1,1])ne.add(ze.box(),Se(re*ve/4,(X+U)/2,se-.02,0,0,0,ve/2-.08,ce-.12,.02),14474460);ne.add(ze.box(),Se(0,U+.02,(se+O)/2,0,0,0,ve+.04,.06,O-se+.04),13685718),n.add(ne.mesh(e.flat,{cast:!0}));for(let re of[-.3,.3])x(r,.04,ce-.3,.04,re,(X+U)/2,se-.04);x(a,ve-.2,.12,.1,0,.55,se-.05),be=H}let Ue=iy(s.color),Z=new rn({map:Te.cabDecal(s.color),transparent:!0,alphaTest:.05,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-2});vp([[i,Ue],[r,e.chrome],[a,e.dark],[o,e.glass],[l,e.light],[c,e.red],[h,e.amber],[d,e.grill],[u,e.steel],[f,e.alu],[g,e.lamp],[b,e.tail],[m,Z],[p,e.interior]],n);let oe=new Ct,Me=P?R+.44:E-.07,Ie=P?W+R+.3:F+.3,Ae=P?z-.31:z-.43;for(let O of[-1,1]){let se=new Jn(e.glow);se.scale.set(1.7,1.7,1),se.position.set(O*Ae,Me,Ie),oe.add(se);let ce=new Jn(e.glowRed);ce.scale.set(.9,.9,1),ce.position.set(O*.62,E-.2,H-.12),oe.add(ce)}let Ee=new Fe(new kt(9,26),e.beam);Ee.rotation.set(-Math.PI/2,0,Math.PI),Ee.position.set(0,.07,F+13.5),oe.add(Ee),oe.visible=!1,t.add(oe);let Xe=[],Pe=[];for(let O of[-1,1])for(let[se,ce,ve]of[[O*(z-.05),P?R+.44:E-.07,P?W+R+.3:F+.25],[O*(z+.05),M(P?.6:.3),P?G-.2:W+.6],[O*.98,E-.2,H-.1]]){let L=new Jn(e.blink);L.scale.set(.8,.8,1),L.position.set(se,ce,ve),L.visible=!1,t.add(L),(O>0?Xe:Pe).push(L)}let N=[],ue=[],ee=z-.3,de=T?.26:.32;N.push(Pa(W,ee,R,de,1),Pa(W,-ee,R,de,-1)),s.axles>=4&&N.push(Pa(W-1.55,ee,R,de,1),Pa(W-1.55,-ee,R,de,-1));for(let O of N)t.add(O);for(let O of s.axles>=3?[.68,-.68]:[0]){let se=Uh(O,T?1.45:1.75,R,T?.22:.3,!0);ue.push(se),t.add(se)}let ie=new Fe(new kt(q+1,F-H+1.5),e.blob);return ie.rotation.x=-Math.PI/2,ie.position.set(0,.05,(F+H)/2),t.add(ie),{root:t,body:n,front:N,rear:ue,wb:W,wr:R,hitchZ:be,zf:F,rearEnd:H,paint:Ue,blob:ie,cabW:q,night:oe,y0:E,cabFront:G,ch:2.05*I,conv:P,blinkL:Xe,blinkR:Pe}}function ly(s){let e=La(),t=new Ct;t.rotation.order="YXZ";let n=new Re(!0),i=new Re,r=new Re(!0),a=new Re,o=new Re,l=new Re,c=new Re,h=(E,I,M,F,H,z,G,te,be=0,Ue=0,Z=0)=>E.add(ze.box(),Se(H,z,G,be,Ue,Z,I,M,F),te),d=(E,I,M,F,H,z,G,te,be,Ue,Z=18)=>E.add(ze.cyl(Z),Se(F,H,z,G,te,be,I*2,M,I*2),Ue),u=s.trailer,f=s.model,g=u==="flatbed"&&Ls.flatbed,b=g?_p(Ls.flatbed):null,m=g?b.front-b.back:f==="blade"?20:u==="tank"?12.5:u==="bulk"?12:u==="lowboy"?14.5:13.6,p=g?b.front:1,x=g?b.back:-(m-p),v=u==="lowboy"?s.t>60?5:4:3,y=1.35,A=g?b.axles.reduce((E,I)=>E+I,0)/b.axles.length:x+1.6+(v-1)*y/2,w=g?b.deckY-.11:1.35,T=[],P=[];if(g){let E=Ls.flatbed;E.updateMatrixWorld(!0),E.traverse(I=>{if(!I.isMesh)return;let M=I;for(;M.parent&&!/^axle_/.test(M.name);)M=M.parent;let F=new Fe(I.geometry,I.material);if(F.castShadow=!0,F.receiveShadow=!0,/^axle_/.test(M.name)){let H=new Ct;H.position.setFromMatrixPosition(M.matrixWorld),F.matrixAutoUpdate=!1,F.matrix.copy(new Ge().copy(M.matrixWorld).invert().multiply(I.matrixWorld)),H.add(F),P.includes(H)||(P.push(H),T.push(H))}else F.matrixAutoUpdate=!1,F.matrix.copy(I.matrixWorld),T.push(F)})}if(!g)for(let E of[-1,1]){h(c,.14,.42,m-.6,E*.48,w-.3,(p+x)/2),h(i,.12,1,.12,E*.9,.6,-1.6),h(i,.32,.06,.32,E*.9,.08,-1.6),h(i,.06,.32,5.5,E*1.2,w-.45,x+7.6),h(a,.38,.16,.05,E*1,w-.4,x-.03);for(let I=p-1.5;I>x+1;I-=3)h(o,.04,.08,.12,E*1.28,w-.1,I)}if(!g){h(i,2.4,.16,.12,0,w-.75,x-.06);for(let E=p-1;E>x+1;E-=1.2)h(c,.96,.1,.1,0,w-.3,E)}if(u==="box"){let I=w+1.375;l.add(ze.box(),Se(0,I,(p+x)/2,0,0,0,2.56,2.75,m));let M=new rn({map:Te.cargoBox("#d63031","DRIZZIE")}),F=new Re,H=w+.3,z=w+2.75-.25,G=1.29,te=p-1.5,be=x+1.5;F.quad([G,H,te],[G,H,be],[G,z,be],[G,z,te],[1,0,0],[1,0,0,0,0,1,1,1]),F.quad([-G,H,be],[-G,H,te],[-G,z,te],[-G,z,be],[-1,0,0],[0,0,1,0,1,1,0,1]),T.push(F.mesh(M,{cast:!1}));for(let Ue of[-1,1])h(n,1.22,2.75-.15,.04,Ue*.63,I,x-.02,15132906);for(let Ue of[-.95,-.35,.35,.95])h(r,.04,2.75-.3,.05,Ue,I,x-.06,12568010);h(n,2.56,.12,m,0,w+2.75+.06,(p+x)/2,13685718)}else if(u==="tank"){let E=f==="silo"?12106944:15265007;d(r,1.25,m-1.2,0,w+1.3,(p+x)/2,Math.PI/2,0,0,E,28),r.add(ze.sphere(),Se(0,w+1.3,p-.6,0,0,0,2.5,2.5,.8),E),r.add(ze.sphere(),Se(0,w+1.3,x+.6,0,0,0,2.5,2.5,.8),E);for(let I=p-1.6;I>x+1;I-=2.2)d(n,1.27,.08,0,w+1.3,I,Math.PI/2,0,0,10133670,28);for(let I=0;I<3;I++)d(n,.3,.2,0,w+2.6,p-3-I*3.3,0,0,0,8359053,12);h(n,.6,.06,m-2.4,0,w+2.62,(p+x)/2,7174788);for(let I of[-1,1])h(n,.03,.2,m-2.4,I*.3,w+2.75,(p+x)/2,16765952);h(n,.9,.6,.03,1,w+1.3,x+.1,s.hazard?16747520:3049182),h(n,.5,2.4,.06,0,w+1.3,x+.05,8359053)}else if(u==="bulk"){h(n,2.5,.12,m,0,w+.06,(p+x)/2,2911902);for(let I of[-1,1])h(n,.08,2.1,m,I*1.21,w+2.1/2,(p+x)/2,2911902);h(n,2.5,2.1,.08,0,w+2.1/2,p-.04,2911902),h(n,2.5,2.1,.08,0,w+2.1/2,x+.04,2911902);for(let I=0;I<8;I++)for(let M of[-1,1])h(i,.06,2.1,.08,M*1.26,w+2.1/2,p-1-I*1.5);n.add(ze.sphere(),Se(0,w+2.1-.15,(p+x)/2,0,0,0,2.3,.9,m-.5),13214812)}else if(u==="flatbed"){g||(h(n,2.5,.22,m,0,w,(p+x)/2,7162927),h(n,2.5,1.2,.1,0,w+.7,p-.05,3426654));let E=w+.11,I=M=>{for(let F=p-1.8;F>x+1;F-=2.6)h(n,2.56,.02,.05,0,M,F,15844367)};if(f==="logs"){for(let M=0;M<3;M++)for(let F=0;F<4-M;F++){let H=(F-(3-M)/2)*.6;d(n,.3,m-1.2,H,E+.3+M*.52,(p+x)/2,Math.PI/2,0,0,M%2?9329458:8014374,10);for(let z of[p-.6,x+.6])d(n,.29,.02,H,E+.3+M*.52,z,Math.PI/2,0,0,14200954,10)}for(let M=0;M<5;M++)for(let F of[-1,1])h(i,.08,2.2,.08,F*1.2,E+1.1,p-1-M*2.8)}else if(f==="container"){let M=new Fe(ze.box(),new rn({map:Te.container(2388387)}));M.scale.set(2.44,2.59,12.19),M.position.set(0,E+1.3,(p+x)/2),T.push(M),I(E+2.62)}else if(f==="coils")for(let M=0;M<4;M++)d(r,.85,1.6,0,E+.86,p-2-M*3,0,0,Math.PI/2,12568010,24),d(n,.3,1.62,0,E+.86,p-2-M*3,0,0,Math.PI/2,2236962,12),h(i,1.6,.25,1.4,0,E+.12,p-2-M*3),h(n,.05,1.8,1.7,0,E+.9,p-2-M*3,15844367);else if(f==="stone"){for(let M=0;M<3;M++)h(n,2.2,1.35+M%2*.25,2.6,0,E+.7+M%2*.12,p-2.6-M*3.8,[9276038,10657432,8157557][M],0,(M-1)*.04,0);I(E+1.6)}else if(f==="beams"){for(let M=0;M<3;M++)for(let F=0;F<4;F++){let H=(F-1.5)*.58,z=E+.22+M*.42,G=(p+x)/2;h(n,.5,.05,m-.6,H,z+.17,G,6122878),h(n,.5,.05,m-.6,H,z-.17,G,6122878),h(n,.06,.34,m-.6,H,z,G,4872810)}I(E+1.4)}}else if(u==="lowboy"){h(n,2.6,.3,3.4,0,w,p-1.6,12597547),h(n,2.9,.3,m-5.5,0,.95,(p-3.4+x+2.1)/2,12597547),h(n,2.6,.3,2.1,0,w-.1,x+1.05,12597547);for(let F of[-1,1])h(n,.6,1.6,.12,F*.8,w+.7,x+.2,12597547,.5);for(let F of[-1,1])h(n,1,.6,.03,F*.7,w+.6,x-.1,16777215);let I=.95+.15,M=(p-3.4+x+2.1)/2;if(f==="tractor"){h(n,1.3,1.2,3.2,0,I+1.3,M+.3,3050298),h(n,1.4,1.5,1.4,0,I+2.3,M-.9,3050298),h(n,1.3,1,1.3,0,I+3.1,M-.9,1845299);for(let F of[-1,1])d(n,.95,.6,F*1.1,I+.95,M-1,0,0,Math.PI/2,2236962),d(n,.55,.62,F*1.1,I+.95,M-1,0,0,Math.PI/2,15844367),d(n,.55,.4,F*.95,I+.55,M+1.5,0,0,Math.PI/2,2236962)}else if(f==="excavator"){for(let F of[-1,1]){h(i,.7,.9,4.8,F*1.05,I+.45,M);for(let H=0;H<5;H++)d(n,.22,.72,F*1.05,I+.25,M-1.8+H*.9,0,0,Math.PI/2,5592405,10)}h(n,2.6,1.2,3.6,0,I+1.5,M-.6,15844367),h(n,1,1.4,1.2,-.7,I+2.8,M+.4,15844367),h(n,.9,1,.04,-.7,I+2.9,M+1.01,1845299),h(n,.5,.5,4,.5,I+2.6,M+2.4,15844367,-.35),h(n,.45,.45,2.8,.5,I+2,M+4.6,15844367,.9),h(i,1,.8,.8,.5,I+1,M+5.2)}else if(f==="transformer"){h(n,2.6,3,4.2,0,I+1.5,M,8359053);for(let F=0;F<9;F++)for(let H of[-1,1])h(n,.08,2.4,1,H*1.36,I+1.5,M-1.8+F*.45,9807270);for(let F=0;F<3;F++)d(n,.18,1.3,(F-1)*.8,I+3.6,M+1,0,0,0,9127187,10)}else f==="blade"?(n.add(ze.sphere(),Se(0,I+1.6,M-2,0,0,0,2.2,2,30),16054007),d(n,1.1,1.6,0,I+1.6,M+30/2-3.5,Math.PI/2,0,0,15067368,20),h(i,.4,1.4,.6,0,I+.7,M+2),h(i,.4,1.4,.6,0,I+.7,M-6)):f==="press"&&(h(n,2.8,3.6,4.6,0,I+1.8,M,3038604),h(n,1.8,1.2,1.6,0,I+4.2,M,2049126),h(r,.25,3,.25,1.2,I+2,M+2.2,12436423),h(r,.25,3,.25,-1.2,I+2,M+2.2,12436423));h(n,2.3,.35,.03,0,w+.9,x-.06,16761095)}vp([[n,e.flat],[i,e.dark],[r,e.flatChrome],[a,e.red],[o,e.amber],[l,e.panel],[c,e.steel]],t);for(let E of T)E&&(E.castShadow=!0,t.add(E));let B=[...P];if(!g)for(let E=0;E<v;E++){let I=Uh(x+1.6+E*y,1.75,.5,.28,!0);B.push(I),t.add(I)}let S=new Ct;for(let E of[-1,1]){let I=new Jn(e.glowRed);I.scale.set(.9,.9,1),I.position.set(E*1,w-.4,x-.15),S.add(I)}S.visible=!1,t.add(S);let R=[],W=[];for(let E of[-1,1]){let I=new Jn(e.blink);I.scale.set(.8,.8,1),I.position.set(E*1.2,w-.4,x-.12),I.visible=!1,t.add(I),(E>0?R:W).push(I)}let q=new Fe(new kt(3.4,m+1.5),e.blob);return q.rotation.x=-Math.PI/2,q.position.set(0,.05,(p+x)/2),t.add(q),t.traverse(E=>{E.isMesh&&E!==q&&(E.castShadow=!0)}),{root:t,axles:B,Lk:-A,Lt:m,front:p,back:x,blob:q,night:S,blinkL:R,blinkR:W}}var Dh={x:0,z:0},wc=class{constructor(e,t,n){this.scene=e,this.shadows=n,this.x=0,this.z=0,this.h=0,this.y=0,this.pitch=0,this.tpitch=0,this.v=0,this.steer=0,this.acc=0,this.trailer=null,this.th=0,this.cargo=null,this.wheelRot=0,this.rpm=.2,this.collCooldown=0,this.reverse=!1,this.lastImpact=0,this.lightsOn=!1,this.engineOn=!1,this.setTruck(t)}setTruck(e){this.model&&this.scene.remove(this.model.root),this.def=e,this.model=cy(e),this.model.blob.visible=!this.shadows,this.scene.add(this.model.root),this.model.night.visible=this.lightsOn,this.onModel&&this.onModel(this.model),this.trailer&&e.rigid&&this.detach(),this.model.bedCargo&&(this.model.bedCargo.visible=!!this.cargo),this.sync()}attach(e){if(this.cargo=e,this.model.bedCargo&&(this.model.bedCargo.visible=!0),this.def.rigid)return;let t=ly(e);t.blob.visible=!this.shadows,t.night.visible=this.lightsOn,this.trailer=t,this.th=this.h,this.scene.add(t.root),this.sync()}setBlink(e,t){let n=(a,o)=>{for(let l of a)l.visible=o},i=t&&(e===-1||e===2),r=t&&(e===1||e===2);n(this.model.blinkL,i),n(this.model.blinkR,r),this.trailer&&(n(this.trailer.blinkL,i),n(this.trailer.blinkR,r))}setLights(e){fi&&fi.lamp.emissiveIntensity!==void 0&&(fi.lamp.emissiveIntensity=e?1.6:.15),fi&&fi.lampFlat.emissiveIntensity!==void 0&&(fi.lampFlat.emissiveIntensity=e?2.2:.15),this.lightsOn=e,this.model.night.visible=e,this.trailer&&(this.trailer.night.visible=e)}detach(){this.model.bedCargo&&(this.model.bedCargo.visible=!1),this.trailer&&this.scene.remove(this.trailer.root),this.trailer=null,this.cargo=null}get mass(){let e=this.def.mass;return this.cargo&&(e+=this.cargo.t+(this.def.rigid?0:cp(this.cargo))),e*1e3}get speedKmh(){return Math.abs(this.v)*3.6}place(e,t,n){this.x=e,this.z=t,this.h=n,this.th=n,this.v=0,this.steer=0,this.sync()}center(e){let t=Math.sin(this.h),n=Math.cos(this.h);if(this.trailer){let i=this.x+t*this.model.hitchZ,r=this.z+n*this.model.hitchZ,a=this.trailer.Lt*.45;e.x=(this.x+t*this.model.wb*.5+i-Math.sin(this.th)*a)/2,e.z=(this.z+n*this.model.wb*.5+r-Math.cos(this.th)*a)/2}else e.x=this.x+t*this.model.wb*.4,e.z=this.z+n*this.model.wb*.4;return e}update(e,t,n,i){this.world=n;let r=this.def,a=this.mass,o=r.hp*735.5*2.3,l=r.vmax/3.6,c=this.v,h=0,d=t.brake,u=t.throttle;t.gear==="auto"?(this.stopT=d>.1&&Math.abs(c)<.4&&u<.1?(this.stopT||0)+e:0,this.stopT>.3&&(this.reverse=!0),u>.1&&c>-.4&&(this.reverse=!1)):this.reverse=t.gear==="R";let f=this.engineOn&&t.gear!=="N",g=t.gear==="auto"&&this.reverse;this.reverse?g?(f&&d>0&&c>-4.5&&(h-=d*Math.min(o/Math.max(-c,3),a*1.6)),u>0&&c<0&&(h+=u*a*6)):(f&&u>0&&c>-5&&(h-=u*Math.min(o/Math.max(-c,3),a*1.6)),d>0&&c<0&&(h+=d*a*6.5),d>0&&c>0&&(h-=d*a*6.5)):(f&&u>0&&c>=-.3&&(h+=u*Math.min(o/Math.max(c,3),a*3,r.hp*250)),d>0&&c>0&&(h-=d*a*(6.8-Math.min(2.2,a/4e4))),d>0&&c<0&&(h+=d*a*6)),t.handbrake&&(h-=Math.sign(c)*a*5);let b=Math.sin(this.pitch)*.6+Math.sin(this.trailer?this.tpitch:this.pitch)*.4,m=-a*9.81*b,p=this.trailer?this.cargo.trailer==="box"?9:7:r.rigid?6.5:5,x=.5*1.2*p*c*Math.abs(c),v=(.011*a*9.81+(u<.05&&d<.05?a*.35:0))*Math.sign(c);c+=(h+(Math.abs(c)>.2||u>0?m:0)-x)/a*e;let y=v/a;Math.abs(y*e)>Math.abs(c)&&h===0?c=0:c-=y*e;let A=f?this.reverse?g?d>0?-1:0:u>0?-1:0:u>0?1:0:0;c!==0&&Math.sign(c)!==A&&Math.sign(c)!==Math.sign(this.v)&&(c=0),t.handbrake&&Math.abs(c)<.3&&(c=0),c=Math.min(c,l),c=Math.max(c,-5),this.acc=(c-this.v)/Math.max(e,.001),this.v=c,this.grade=b;let w=.6/(1+c*c/160),T=t.steer*w,P=t.steer===0?2.6:1.7,B=T-this.steer;this.steer+=Math.sign(B)*Math.min(Math.abs(B),P*e);let S=this.model.wb,R=c*Math.tan(this.steer)/S;if(this.h+=R*e,this.yaw=R,this.x+=Math.sin(this.h)*c*e,this.z+=Math.cos(this.h)*c*e,this.trailer){let F=this.model.hitchZ,H=this.h-this.th,z=(c*Math.sin(H)-F*R*Math.cos(H))/this.trailer.Lk;this.th+=z*e;let G=this.h-this.th;G=Math.atan2(Math.sin(G),Math.cos(G));let te=1.3;Math.abs(G)>te&&(this.th=this.h-Math.sign(G)*te)}this.collide(n,i,e),this.wheelRot+=c*e/this.model.wr;let W=Math.abs(c)/l,q=Math.min(5,Math.floor(W*6)),E=W*6-q;this.gear=this.reverse?"R":t.gear==="N"?"N":Math.abs(c)<.3?t.gear==="auto"?"N":"D":String(q+1);let I=Math.max(u,b>.02?.7:0),M=this.engineOn?Math.abs(c)<.3||t.gear==="N"?.18+u*.5:.3+E*.6*(.5+I*.5):0;this.rpm+=(M-this.rpm)*Math.min(1,e*6),this.sync()}circles(e){let t=this.model,n=Math.sin(this.h),i=Math.cos(this.h);e.length=0;for(let r of[t.zf-.9,(t.zf+t.rearEnd)/2,t.rearEnd+.9])e.push({x:this.x+n*r,z:this.z+i*r,r:t.cabW/2+.1,t:!1});if(this.trailer){let r=this.x+n*t.hitchZ,a=this.z+i*t.hitchZ,o=Math.sin(this.th),l=Math.cos(this.th),c=this.trailer;for(let h=c.front-1.2;h>c.back+.5;h-=2.4)e.push({x:r+o*h,z:a+l*h,r:1.35,t:!0});e.push({x:r+o*(c.back+1.3),z:a+l*(c.back+1.3),r:1.35,t:!0})}return e}collide(e,t,n){this.collCooldown-=n;let i=this._cs||(this._cs=[]);this.circles(i);let r=0,a=0,o=0;for(let l of i){let c=e.resolveCircle(l,l.r,Dh);c>.01&&(r+=Dh.x*(l.t?.6:1),a+=Dh.z*(l.t?.6:1),c>o&&(o=c));for(let h of t){let d=l.x-h.x,u=l.z-h.z,f=l.r+h.r,g=d*d+u*u;if(g<f*f&&g>1e-6){let b=Math.sqrt(g),m=f-b;r+=d/b*m*.5,a+=u/b*m*.5,m>o&&(o=m),h.hit=!0}}}if(this.lastImpact=0,o>0){this.x+=r,this.z+=a;let l=Math.abs(this.v)*3.6;l>4&&o>.12&&this.collCooldown<=0&&(this.lastImpact=l,this.collCooldown=.6),this.v*=l>15&&o>.3?-.12:o>.12?.6:.97}}sync(){let e=this.model,t=Math.sin(this.h),n=Math.cos(this.h),i=this.world,r=0,a=0;i&&(r=i.heightAt(this.x,this.z),a=i.heightAt(this.x+t*e.wb,this.z+n*e.wb)),this.y=r,this.pitch=Math.atan2(a-r,e.wb),e.root.position.set(this.x,r,this.z),e.root.rotation.set(-this.pitch,this.h,0);for(let l=0;l<e.front.length;l++){let c=e.front[l];c.rotation.y=this.steer*(l<2?1:.6),c.children[0].rotation.x=this.wheelRot}for(let l of e.rear)l.rotation.x=this.wheelRot;let o=(this.yaw||0)*this.v;if(e.body.rotation.z+=(Math.max(-.05,Math.min(.05,-o*.012))-e.body.rotation.z)*.2,e.body.rotation.x+=(Math.max(-.03,Math.min(.03,-this.acc*.006))-e.body.rotation.x)*.2,this.trailer){let l=this.trailer,c=this.x+t*e.hitchZ,h=this.z+n*e.hitchZ,d=r+(a-r)*(e.hitchZ/e.wb),u=c-Math.sin(this.th)*l.Lk,f=h-Math.cos(this.th)*l.Lk,g=i?i.heightAt(u,f):0;this.tpitch=Math.atan2(d-g,l.Lk),l.root.position.set(c,d,h),l.root.rotation.set(-this.tpitch,this.th,0);let b=this.wheelRot*(e.wr/.5);for(let m of l.axles)m.rotation.x=b}}};function Oh(s,e){if(e===Gf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ta||e===dc){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ta)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ec=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Qi.extractUrlBase(e);a=Qi.resolveURL(c,this.path)}else a=Qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ep){try{a[ot.KHR_BINARY_GLTF]=new id(e)}catch(d){i&&i(d);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case ot.KHR_MATERIALS_UNLIT:a[d]=new Hh;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[d]=new sd(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[d]=new rd;break;case ot.KHR_MESH_QUANTIZATION:a[d]=new ad;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function hy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bh=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ar(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ac(h),c.distance=d;break;case"spot":c=new Tr(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,is(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Hh=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){let i=[];e.color=new le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new le(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new le().setRGB(o[0],o[1],o[2],tn),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new le().setRGB(o[0],o[1],o[2],tn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Qh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ed=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},td=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},nd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let g of d){let b=new Ge,m=new D,p=new Pn,x=new D(1,1,1),v=new Hn(g.geometry,g.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,b.compose(m,p,x));for(let y in l)if(y==="_COLOR_0"){let A=l[y];v.instanceColor=new Ss(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);yt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ep="glTF",Ia=12,yp={JSON:1313821514,BIN:5130562},id=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ia),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ia,r=new DataView(e,Ia),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===yp.JSON){let c=new Uint8Array(e,Ia+a,o);this.content=n.decode(c)}else if(l===yp.BIN){let c=Ia+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=cd[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=cd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Ur[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}d(f)},o,c,tn,u)})})}},rd=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ad=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Tc=class extends $i{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,b=g-c,m=-2*f+3*u,p=f-u,x=1-m,v=p-u+d;for(let y=0;y!==o;y++){let A=a[b+y+o],w=a[b+y+l]*h,T=a[g+y+o],P=a[g+y]*h;r[y]=x*A+v*w+m*T+p*P}return r}},dy=new Pn,od=class extends Tc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return dy.fromArray(r).normalize().toArray(r),r}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mp={9728:Wt,9729:Vt,9984:Ro,9985:ia,9986:ms,9987:zn},Sp={33071:xn,33648:la,10497:Ai},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uy={CUBICSPLINE:void 0,LINEAR:_s,STEP:ur},zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),s.DefaultMaterial}function Is(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function is(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function py(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function my(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gy(s){let e,t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kh(t.attributes):e=s.indices+":"+kh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+kh(s.targets[n]);return e}function kh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ld(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function by(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var xy=new Ge,hd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new sc(this.options.manager):this.textureLoader=new oc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Is(r,o,i),is(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Qi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Fh[i.type],o=Ur[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new jt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Fh[i.type],c=Ur[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==d){let p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(x);v||(b=new c(o,p*f,i.count*f/h),v=new _r(b,f/h),t.cache.add(x,v)),m=new ys(v,l,u%f/h,g)}else o===null?b=new c(i.count*l):b=new c(o,u,i.count*l),m=new jt(b,l,g);if(i.sparse!==void 0){let p=Fh.SCALAR,x=Ur[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,A=new x(a[1],v,i.sparse.count*p),w=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,P=A.length;T<P;T++){let B=A[T];if(m.setX(B,w[T*l]),l>=2&&m.setY(B,w[T*l+1]),l>=3&&m.setZ(B,w[T*l+2]),l>=4&&m.setW(B,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Mp[u.magFilter]||Vt,h.minFilter=Mp[u.minFilter]||zn,h.wrapS=Sp[u.wrapS]||Ai,h.wrapT=Sp[u.wrapT]||Ai,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){let m=new en(b);m.needsUpdate=!0,u(m)}),t.load(Qi.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||by(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ws,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ba,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return wn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let d=i[ot.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new le(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],tn),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Ft)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ht);let h=r.alphaMode||zh.OPAQUE;if(h===zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==st){let d=r.emissiveFactor;o.emissive=new le().setRGB(d[0],d[1],d[2],tn)}return r.emissiveTexture!==void 0&&a!==st&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),is(d,r),t.associations.set(d,{materials:e}),r.extensions&&Is(i,d,r),d})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return wp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=gy(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=wp(new gt,c,t),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?fy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,x=c[f];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Go(b,x):new Fe(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?p.geometry=Oh(p.geometry,dc):m.mode===Xn.TRIANGLE_FAN&&(p.geometry=Oh(p.geometry,Ta));else if(m.mode===Xn.LINES)p=new qo(b,x);else if(m.mode===Xn.LINE_STRIP)p=new yr(b,x);else if(m.mode===Xn.LINE_LOOP)p=new Xo(b,x);else if(m.mode===Xn.POINTS)p=new Mr(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&my(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),is(p,r),m.extensions&&Is(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Is(i,d[0],r),d[0];let u=new Ct;r.extensions&&Is(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Wf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),is(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new Ge;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wo(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],b=d[3],m=d[4],p=[];for(let x=0,v=u.length;x<v;x++){let y=u[x],A=f[x],w=g[x],T=b[x],P=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let B=n._createAnimationTracks(y,A,w,T,P);if(B)for(let S=0;S<B.length;S++)p.push(B[S])}return new ic(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,xy)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ga:c.length>1?h=new Ct:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),is(h,r),r.extensions&&Is(n,h,r),r.matrix!==void 0){let d=new Ge;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ct;n.name&&(r.name=i.createUniqueName(n.name)),is(r,n),n.extensions&&Is(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);let c=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof dn||u instanceof en)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];ns[r.path]===ns.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(ns[r.path]){case ns.weights:c=Ci;break;case ns.rotation:c=hi;break;case ns.position:case ns.scale:c=Pi;break;default:switch(n.itemSize){case 1:c=Ci;break;case 2:case 3:default:c=Pi;break}break}let h=i.interpolation!==void 0?uy[i.interpolation]:_s,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){let g=new c(l[u]+"."+ns[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ld(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof hi?od:Tc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vy(s,e,t){let n=e.attributes,i=new Mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=ld(Ur[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let b=ld(Ur[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function wp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=cd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ut.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),is(s,e),vy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?py(s,e.targets,t):s})}var Da=class s extends Fe{constructor(){let e=s.SkyShader,t=new Bn({name:e.name,uniforms:Sh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:zt,depthWrite:!1});super(new un(1,1,1),t),this.isSky=!0}};Da.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Tp=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var y=p.charCodeAt(v);x[v]=y>96?y-97:y>64?y-39:y+4}for(var A=0,v=0;v<p.length;++v)x[A++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,A)}function l(p,x,v,y,A,w){var T=r.exports.sbrk,P=v+3&-4,B=T(P*y),S=T(A.length),R=new Uint8Array(r.exports.memory.buffer);R.set(A,S);var W=p(B,v,y,S,A.length);if(W==0&&w&&w(B,P,y),x.set(R.subarray(B,B+v*y)),T(B-T(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var y=v.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(v),A=0;A<p;++A)d[A]=f(y);URL.revokeObjectURL(y)}function b(p,x,v,y,A){for(var w=d[0],T=1;T<d.length;++T)d[T].pending<w.pending&&(w=d[T]);return new Promise(function(P,B){var S=new Uint8Array(v),R=u++;w.pending+=p,w.requests[R]={resolve:P,reject:B},w.object.postMessage({id:R,count:p,size:x,source:S,mode:y,filter:A},[S.buffer])})}function m(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);l(r.exports[x.mode],v,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,v,y,A){l(r.exports.meshopt_decodeVertexBuffer,p,x,v,y,r.exports[c[A]])},decodeIndexBuffer:function(p,x,v,y){l(r.exports.meshopt_decodeIndexBuffer,p,x,v,y)},decodeIndexSequence:function(p,x,v,y){l(r.exports.meshopt_decodeIndexSequence,p,x,v,y)},decodeGltfBuffer:function(p,x,v,y,A,w){l(r.exports[h[A]],p,x,v,y,r.exports[c[w]])},decodeGltfBufferAsync:function(p,x,v,y,A){return d.length>0?b(p,x,v,h[y],c[A]):a.then(function(){var w=new Uint8Array(p*x);return l(r.exports[h[y]],w,p,x,v,r.exports[c[A]]),w})}}}();var Or=20/2,Ap=[12597547,2719929,15528177,2899536,8359053,15844367,2600544,9323693,13849600,1118481,12436423],dd=null;function _y(s,e){let t=new Re(!0),n=new Re(!0);dd=dd||new Nr(1,1,1,2,.18);let i=(m,p,x,v,y,A,w,T=0)=>t.add(ze.box(),Se(v,y,A,T,0,0,m,p,x),w),r=(m,p,x,v,y,A,w)=>t.add(dd,Se(v,y,A,0,0,0,m,p,x),w),a=1845299,o=4.4,l=1.8,c=.34;s===0?(r(l,.62,o,0,.62,0,e),r(l-.16,.6,2.3,0,1.18,-.25,a),r(l-.12,.1,2,0,1.47,-.25,e)):s===1?(o=4.7,l=1.95,c=.4,r(l,.85,o,0,.8,0,e),r(l-.1,.72,3.2,0,1.55,-.45,a),r(l-.06,.1,3,0,1.92,-.45,e),i(1.2,.05,2,0,2,-.45,2236962)):s===2?(o=11.5,l=2.5,c=.55,r(l,2.7,o,0,1.8,0,e),i(l+.02,.95,o-1.6,0,2.35,-.4,a),i(l-.2,1.3,.05,0,2.2,o/2+.01,a),i(l+.02,.25,o-.4,0,.75,0,16777215)):(o=10.5,l=2.5,c=.52,r(l-.1,2.3,2.1,0,2,o/2-1.1,e),i(l-.4,.9,.05,0,2.55,o/2-.04,a),r(l,2.8,o-2.6,0,2.55,-1.2,16053492),i(.9,.3,o-1,0,.75,-.3,2236962));let h=(m,p,x,v,y,A,w)=>n.add(ze.box(),Se(v,y,A,0,0,0,m,p,x),w),d=s>=2?.9:.72;h(.42,.16,.06,l/2-.3,d,o/2+.01,16775393),h(.42,.16,.06,-l/2+.3,d,o/2+.01,16775393),h(.42,.16,.06,l/2-.3,d+.05,-o/2-.01,16722458),h(.42,.16,.06,-l/2+.3,d+.05,-o/2-.01,16722458);let u=s>=2?[o/2-2,-o/2+2.4]:[o/2-.85,-o/2+.85];for(let m of[-1,1])for(let p of u)t.add(ze.cyl(12),Se(m*(l/2-.12),c,p,0,0,Math.PI/2,c*2,.28,c*2),1381653),t.add(ze.cyl(10),Se(m*(l/2-.02),c,p,0,0,Math.PI/2,c*1.1,.06,c*1.1),12106944);let f=t.idx.length,g=t.count;for(let m=0;m<n.count*3;m++)t.pos.push(n.pos[m]),t.nor.push(n.nor[m]),t.col.push(n.col[m]);for(let m=0;m<n.count*2;m++)t.uv.push(n.uv[m]);for(let m of n.idx)t.idx.push(m+g);let b=t.geometry();return b.addGroup(0,f,0),b.addGroup(f,n.idx.length,1),{geo:b,L:o,W:l}}function Rp(s,e,t,n,i){let r=1-n;return i.x=r*r*s.x+2*r*n*e.x+n*n*t.x,i.z=r*r*s.z+2*r*n*e.z+n*n*t.z,i}var Ac=class{constructor(e,t,n){this.scene=e,this.world=n,this.cars=[];let i=[new _n({vertexColors:!0,shininess:90,specular:7829367}),new st({vertexColors:!0})];this.beamMat=new st({map:Te.beam(),transparent:!0,opacity:.7,depthWrite:!1,blending:Cn});let r=new kt(6,16);r.rotateX(-Math.PI/2),r.rotateY(Math.PI);let a={};for(let o=0;o<t;o++){let l=o%7===3?3:o%11===5?2:o%3===1?1:0,c=l===2?o%2?1752220:15965202:Ap[o*7%Ap.length],h=l+"_"+c;a[h]||(a[h]=_y(l,c));let d=new Fe(a[h].geo,i);d.castShadow=!0,d.rotation.order="YXZ";let u=new Fe(r,this.beamMat);u.position.set(0,.09,a[h].L/2+8),u.visible=!1,d.add(u),d.visible=!1,e.add(d),this.cars.push({mesh:d,beam:u,L:a[h].L,type:l,off:l>=2?7.5:o%2?2.5:7.5,v:0,vmax:l>=2?12:12+o%4,x:1e5,z:1e5,y:0,h:0,stopT:0,mode:null})}this.p={x:0,z:0},this.q={x:0,z:0},this.tmp={}}node(e,t,n){return{c:e,i:t,j:n,x:e.x0+t*140,z:e.z0+n*140}}neighbors(e){let t=[];for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=e.i+n,a=e.j+i;r>=0&&a>=0&&r<=e.c.nx&&a<=e.c.nz&&t.push(this.node(e.c,r,a))}return t}makeStraight(e){let{A:t,B:n}=e,i=Math.sign(n.x-t.x),r=Math.sign(n.z-t.z),a=-r,o=i,l={x:t.x+i*Or+a*e.off,z:t.z+r*Or+o*e.off},c={x:n.x-i*Or+a*e.off,z:n.z-r*Or+o*e.off};e.seg={p0:l,p1:{x:(l.x+c.x)/2,z:(l.z+c.z)/2},p2:c,len:Math.hypot(c.x-l.x,c.z-l.z),turn:!1},e.dir={x:i,z:r}}makeTurn(e){let{A:t,B:n}=e,i=this.neighbors(n).filter(b=>!(b.i===t.i&&b.j===t.j)),r=i[Math.random()*i.length|0],a=e.dir,o=Math.sign(r.x-n.x),l=Math.sign(r.z-n.z),c={x:-a.z,z:a.x},h={x:-l,z:o},d=e.seg.p2,u={x:n.x+o*Or+h.x*e.off,z:n.z+l*Or+h.z*e.off},f=o===a.x&&l===a.z,g=f?{x:(d.x+u.x)/2,z:(d.z+u.z)/2}:{x:n.x+(c.x+h.x)*e.off,z:n.z+(c.z+h.z)*e.off};e.seg={p0:d,p1:g,p2:u,len:f?20:Math.hypot(u.x-d.x,u.z-d.z)*1.15,turn:!f},e.next={A:n,B:r}}spawn(e,t,n){e.mesh.visible=!1,e.mode=null;let i=this.world.hw(t,n),r=Qn.find(a=>t>a.x0-350&&t<As(a)+350&&n>a.z0-350&&n<Cr(a)+350);if(i&&(!r||Math.random()<.45)){let a=i.o,l=a.s[i.i]+(Math.random()<.5?-1:1)*(140+Math.random()*320);if(l<30||l>a.length-30)return;e.mode="hw",e.hwy=a,e.s=l,e.dir=Math.random()<.5?1:-1,e.v=e.vmax*1.4*.8,e.mesh.visible=!0;return}if(r)for(let a=0;a<30;a++){let o=this.node(r,Math.random()*(r.nx+1)|0,Math.random()*(r.nz+1)|0),l=this.neighbors(o),c=l[Math.random()*l.length|0],h=Math.hypot((o.x+c.x)/2-t,(o.z+c.z)/2-n);if(!(h<110||h>420)){e.mode="city",e.A=o,e.B=c,e.inTurn=!1,e.next=null,this.makeStraight(e),e.s=Math.random()*e.seg.len*.8,e.v=e.vmax*.6,e.mesh.visible=!0;return}}}update(e,t,n){let i=this.p,r=this.q,a=this.tmp;for(let o of this.cars){if(!o.mode||Math.hypot(o.x-t.x,o.z-t.z)>560){if(o.x=o.z=1e5,Math.random()<.2&&this.spawn(o,t.x,t.z),!o.mode)continue;this.place(o,i,r,a);continue}let l=Math.sin(o.hh||0),c=Math.cos(o.hh||0),h=!1,d=9+o.v*1.3+o.L/2,u=(m,p,x)=>{let v=m-o.x,y=p-o.z,A=v*l+y*c;A<=0||A>d+x||Math.abs(v*c-y*l)<1.6+x&&(h=!0)};for(let m of n)u(m.x,m.z,m.r);if(!h)for(let m of this.cars)m!==o&&m.mode&&u(m.x,m.z,m.L*.35);o.hit&&(o.stopT=2.5,o.hit=!1),o.stopT-=e;let f=o.mode==="hw"?o.vmax*1.4:o.seg.turn?6:o.vmax,g=h||o.stopT>0?0:f,b=g>o.v?2.5:7;if(o.v+=Math.sign(g-o.v)*Math.min(Math.abs(g-o.v),b*e),o.mode==="hw"){if(o.s+=o.v*e*o.dir,o.s<5||o.s>o.hwy.length-5){o.mode=null,o.mesh.visible=!1;continue}}else for(o.s+=o.v*e;o.s>=o.seg.len;)o.s-=o.seg.len,o.next&&o.inTurn?(o.A=o.next.A,o.B=o.next.B,o.next=null,o.inTurn=!1,this.makeStraight(o)):(this.makeTurn(o),o.inTurn=!0);this.place(o,i,r,a)}}place(e,t,n,i){if(e.mode==="hw"){let r=e.hwy;r.at(e.s,i);let a=i.dx*e.dir,o=i.dz*e.dir;e.x=i.x-o*3.6,e.z=i.z+a*3.6,e.y=i.y+.04,e.hh=Math.atan2(a,o);let l=r.at(e.s+e.dir*4,i).y,c=-Math.atan2(l+.04-e.y,4);e.mesh.position.set(e.x,e.y,e.z),e.mesh.rotation.set(c,e.hh,0)}else{let r=e.s/e.seg.len;Rp(e.seg.p0,e.seg.p1,e.seg.p2,r,t),Rp(e.seg.p0,e.seg.p1,e.seg.p2,Math.min(1,r+.02),n),Math.hypot(n.x-t.x,n.z-t.z)>1e-4&&(e.hh=Math.atan2(n.x-t.x,n.z-t.z)),e.x=t.x,e.z=t.z,e.mesh.position.set(e.x,0,e.z),e.mesh.rotation.set(0,e.hh,0)}}setNight(e){for(let t of this.cars)t.beam.visible=e>.35}obstacles(e){e.length=0;for(let t of this.cars){if(!t.mode)continue;let n=Math.sin(t.hh),i=Math.cos(t.hh),r=t.type>=2?3:2;for(let a=0;a<r;a++){let o=(a/(r-1)-.5)*(t.L-2);e.push({x:t.x+n*o,z:t.z+i*o,r:t.type>=2?1.3:1,car:t,set hit(l){this.car.hit=l}})}}return e}};var ft=null;function Rc(s,e){return ft.nodes.push({x:s,z:e,adj:[]}),ft.nodes.length-1}function Cc(s,e,t){let n=0;for(let r=1;r<t.length;r++)n+=Math.hypot(t[r].x-t[r-1].x,t[r].z-t[r-1].z);let i={a:s,b:e,poly:t,len:n};return ft.edges.push(i),ft.nodes[s].adj.push(i),ft.nodes[e].adj.push(i),i}function Cp(s){ft={nodes:[],edges:[],cityNode:{}};for(let e of Qn){let t=(n,i)=>e.id+":"+n+":"+i;for(let n=0;n<=e.nx;n++)for(let i=0;i<=e.nz;i++)ft.cityNode[t(n,i)]=Rc(e.x0+n*140,e.z0+i*140);for(let n=0;n<=e.nx;n++)for(let i=0;i<=e.nz;i++){let r=ft.cityNode[t(n,i)];if(n<e.nx){let a=ft.cityNode[t(n+1,i)];Cc(r,a,[ft.nodes[r],ft.nodes[a]])}if(i<e.nz){let a=ft.cityNode[t(n,i+1)];Cc(r,a,[ft.nodes[r],ft.nodes[a]])}}}for(let e of s.hws){let t=[];for(let l of Object.values(s.depots))l.entry.hw===e.id&&t.push({s:l.entry.s,depot:l.id});t.sort((l,c)=>l.s-c.s);let n=e.def.from?ft.cityNode[e.def.from[0]+":"+e.def.from[1]+":"+e.def.from[2]]:Rc(e.x[0],e.z[0]),i=e.def.to?ft.cityNode[e.def.to[0]+":"+e.def.to[1]+":"+e.def.to[2]]:Rc(e.x[e.n-1],e.z[e.n-1]),r=n,a=0,o=(l,c)=>{let h=[];for(let d=l;d<=c;d++)h.push({x:e.x[d],z:e.z[d]});return h};for(let l of t){let c=0;for(;c<e.n-1&&e.s[c+1]<l.s;)c++;let h=Rc(e.x[c],e.z[c]);ft.depotNode=ft.depotNode||{},ft.depotNode[l.depot]=h,Cc(r,h,[ft.nodes[r],...o(a,c)]),r=h,a=c}Cc(r,i,[...o(a,e.n-1),ft.nodes[i]])}return ft}function fd(s,e){let t=null,n=1/0;for(let i of ft.edges){let r=i.poly;for(let a=0;a<r.length-1;a++){let o=r[a].x,l=r[a].z,c=r[a+1].x-o,h=r[a+1].z-l,d=c*c+h*h||1,u=((s-o)*c+(e-l)*h)/d;u=u<0?0:u>1?1:u;let f=o+c*u,g=l+h*u,b=(s-f)**2+(e-g)**2;b<n&&(n=b,t={e:i,i:a,t:u,x:f,z:g})}}return t}function Pp(s){let e=s.e.poly,t=[{x:s.x,z:s.z}];for(let r=s.i;r>=0;r--)t.push(e[r]);let n=[{x:s.x,z:s.z}];for(let r=s.i+1;r<e.length;r++)n.push(e[r]);let i=r=>r.reduce((a,o,l)=>l?a+Math.hypot(o.x-r[l-1].x,o.z-r[l-1].z):0,0);return[{node:s.e.a,poly:t,len:i(t)},{node:s.e.b,poly:n,len:i(n)}]}var ud=new Map;function yy(s){if(ud.has(s.id))return ud.get(s.id);let e;if(ft.depotNode&&ft.depotNode[s.id]!==void 0){let t=ft.depotNode[s.id];e=[{node:t,poly:[ft.nodes[t]],len:0}]}else e=Pp(fd(s.entry.x,s.entry.z)).map(t=>Ni(Gt({},t),{poly:t.poly.slice().reverse()}));return ud.set(s.id,e),e}function pd(s,e,t){let n=ft.nodes.length,i=new Float64Array(n).fill(1/0),r=new Array(n).fill(null),a=new Uint8Array(n),o=fd(s,e),l=Pp(o),c={};for(let p of l)i[p.node]=p.len,c[p.node]=p.poly;for(;;){let p=-1,x=1/0;for(let v=0;v<n;v++)!a[v]&&i[v]<x&&(x=i[v],p=v);if(p<0)break;a[p]=1;for(let v of ft.nodes[p].adj){let y=v.a===p?v.b:v.a,A=x+v.len;A<i[y]&&(i[y]=A,r[y]={u:p,e:v})}}let h=yy(t),d=null,u=1/0;for(let p of h)i[p.node]+p.len<u&&(u=i[p.node]+p.len,d=p);let f=[];for(let p=d.node;r[p];p=r[p].u)f.unshift(r[p]);let g=[{x:s,z:e}],b=f.length?f[0].u:d.node;if(!f.length&&o.e===fd(t.entry.x,t.entry.z).e&&!(ft.depotNode&&ft.depotNode[t.id]!==void 0))g.push({x:o.x,z:o.z},{x:t.entry.x,z:t.entry.z});else{g.push(...c[b]);for(let{u:p,e:x}of f){let y=x.a===p?x.poly:x.poly.slice().reverse();for(let A=1;A<y.length;A++)g.push(y[A])}g.push(...d.poly)}g.push({x:t.zone.x,z:t.zone.z});let m=0;for(let p=1;p<g.length;p++)m+=Math.hypot(g[p].x-g[p-1].x,g[p].z-g[p-1].z);return{path:g,len:m}}var Pc=class{constructor(){this.ctx=null,this.volume=.7}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(t.destination),this.engGain=t.createGain(),this.engGain.gain.value=0,this.filter=t.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=400,this.filter.Q.value=4,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(this.filter),this.o2.connect(n).connect(this.filter);let i=t.createBuffer(1,t.sampleRate,t.sampleRate),r=i.getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=i,this.noise.loop=!0;let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=180,this.nGain=t.createGain(),this.nGain.gain.value=.25,this.noise.connect(a).connect(this.nGain).connect(this.filter),this.filter.connect(this.engGain).connect(this.master),this.o1.start(),this.o2.start(),this.noise.start()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}engine(e,t,n=!0){if(!this.ctx)return;let i=this.ctx.currentTime,r=28+e*70;this.o1.frequency.setTargetAtTime(r,i,.05),this.o2.frequency.setTargetAtTime(r*.5,i,.05),this.filter.frequency.setTargetAtTime(220+e*900+t*400,i,.08),this.engGain.gain.setTargetAtTime(n?.13+t*.08:0,i,.1)}horn(e){if(this.ctx){if(e&&!this.hornNodes){let t=this.ctx.createGain();t.gain.value=.18;let n=this.ctx.createOscillator(),i=this.ctx.createOscillator();n.type=i.type="sawtooth",n.frequency.value=233,i.frequency.value=311;let r=this.ctx.createBiquadFilter();r.frequency.value=1800,n.connect(r),i.connect(r),r.connect(t).connect(this.master),n.start(),i.start(),this.hornNodes=[n,i,t]}else if(!e&&this.hornNodes){let[t,n,i]=this.hornNodes;i.gain.setTargetAtTime(0,this.ctx.currentTime,.03),t.stop(this.ctx.currentTime+.2),n.stop(this.ctx.currentTime+.2),this.hornNodes=null}}}beep(e=880,t=.12,n="sine",i=.25){if(!this.ctx)return;let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n,r.frequency.value=e,a.gain.value=i,a.gain.setTargetAtTime(0,this.ctx.currentTime+t*.6,t*.3),r.connect(a).connect(this.master),r.start(),r.stop(this.ctx.currentTime+t*2)}crash(e){if(!this.ctx)return;let t=this.ctx,i=t.createBuffer(1,t.sampleRate*.35,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,2);let a=t.createBufferSource();a.buffer=i;let o=t.createBiquadFilter();o.frequency.value=900;let l=t.createGain();l.gain.value=Math.min(.9,.2+e/60),a.connect(o).connect(l).connect(this.master),a.start()}airBrake(){if(!this.ctx)return;let e=this.ctx,n=e.createBuffer(1,e.sampleRate*.6,e.sampleRate),i=n.getChannelData(0);for(let l=0;l<i.length;l++)i[l]=(Math.random()*2-1)*(1-l/i.length);let r=e.createBufferSource();r.buffer=n;let a=e.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let o=e.createGain();o.gain.value=.22,r.connect(a).connect(o).connect(this.master),r.start()}starter(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),i=e.createGain(),r=e.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(14,t),n.frequency.linearRampToValueAtTime(22,t+.7),n.frequency.linearRampToValueAtTime(48,t+1.1),r.frequency.value=600,i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.35,t+.1),i.gain.setValueAtTime(.35,t+1),i.gain.linearRampToValueAtTime(0,t+1.4),n.connect(r).connect(i).connect(this.master),n.start(t),n.stop(t+1.5)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}};var he=s=>document.getElementById(s),Ad="drizzieTruck.v1",En=s=>"R$ "+Math.round(s).toLocaleString("pt-BR"),gi=(s,e,t)=>Math.max(e,Math.min(t,s)),Lc={money:3e3,xp:0,level:1,owned:["mini"],truck:"mini",job:null,pos:null,name:"Motorista",clock:15.5,stats:{deliveries:0,km:0,earned:0,tons:0,crashes:0},settings:{quality:"auto",volume:.7,fps:!1,steer:"wheel",camera:0,time:"cycle",gearbox:"manual",gauge:"analog",accent:"amber",hud:"normal"}};function My(){try{let s=JSON.parse(localStorage.getItem(Ad));if(s&&s.level){let e=Ni(Gt(Gt({},Lc),s),{stats:Gt(Gt({},Lc.stats),s.stats),settings:Gt(Gt({},Lc.settings),s.settings)});return e.owned.includes("mini")||e.owned.unshift("mini"),e}}catch(s){}return JSON.parse(JSON.stringify(Lc))}var j=My();function Bt(){try{j.pos=Q?{x:Q.x,z:Q.z,h:Q.h}:j.pos,localStorage.setItem(Ad,JSON.stringify(j))}catch(s){}}var Sy={low:{pr:1,minPr:.75,shadows:!1,shadowSize:0,tex:512,aniso:2,traffic:10,fogNear:150,fogFar:650,far:900,trees:5e3},medium:{pr:1.5,minPr:.85,shadows:!0,shadowSize:1024,tex:1024,aniso:4,traffic:16,fogNear:260,fogFar:1050,far:1500,trees:9e3},high:{pr:2,minPr:1,shadows:!0,shadowSize:2048,tex:1024,aniso:8,traffic:22,fogNear:380,fogFar:1600,far:2600,trees:14e3}};function wy(){let s="";try{let n=document.createElement("canvas"),i=n.getContext("webgl")||n.getContext("experimental-webgl"),r=i&&i.getExtension("WEBGL_debug_renderer_info");s=(r&&i.getParameter(r.UNMASKED_RENDERER_WEBGL)||i&&i.getParameter(i.RENDERER)||"").toLowerCase();let a=i&&i.getExtension("WEBGL_lose_context");a&&a.loseContext()}catch(n){}let e=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4;return/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(s)||e<=2||t<=4?"low":e>=6&&t>=8&&/adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(s)?"high":"medium"}var mi=j.settings.quality==="auto"?wy():j.settings.quality,Tt=Sy[mi],Ht,It,Zt,bt,Q,Ns,an,ni,za,ka,ss,_d=null,Br=null,Lp=-1,Oa=null,pi=null,Ba=null,$t=0,ct=new Pc;ct.volume=j.settings.volume;var Nt="loading",Us=[],ii=null,Ha=0;var on,si,Na=0,md=[],Ce={gas:!1,brake:!1,left:!1,right:!1,tilt:0,wheel:0,wheelHeld:!1,gear:"D",hand:!1,blink:0,blinkArm:!1},yn={throttle:0,brake:0,steer:0,gear:"D",handbrake:!1},Hr=null,Ze={yaw:0,orbit:0,orbitT:0,mode:j.settings.camera||0,pos:new D,look:new D},Di=Tt.pr,Ds=(s,e)=>new Promise(t=>{he("loadbar").style.width=s+"%",he("loadmsg").textContent=e,setTimeout(t,16)});async function Ey(){await Ds(5,"Iniciando gr\xE1ficos\u2026");let s=he("gl");try{Ht=new pa({canvas:s,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(i){he("loadmsg").textContent='Seu aparelho n\xE3o suporta WebGL. Atualize o "Android System WebView" na Play Store.';return}Di=Math.min(window.devicePixelRatio||1,Tt.pr),Ht.setPixelRatio(Di),Ht.setSize(window.innerWidth,window.innerHeight,!1),Ht.outputColorSpace=Ft,Ht.toneMapping=xh,Ht.toneMappingExposure=1,Ht.shadowMap.enabled=Tt.shadows,Ht.shadowMap.type=mi==="high"?bh:cc;let e=Ht.capabilities.getMaxAnisotropy();hp(Tt.tex,Math.min(e,Tt.aniso)),gp(mi),It=new ma;let t=new le(12375786);if(It.background=t,It.fog=new Ho(t,Tt.fogNear,Tt.fogFar),Zt=new Xt(58,window.innerWidth/window.innerHeight,.5,Tt.far),Oy(),za=new rc(14413567,6122309,1.25),It.add(za),an=new Ar(16773336,2.6),an.position.set(180,260,120),Tt.shadows){an.castShadow=!0,an.shadow.mapSize.set(Tt.shadowSize,Tt.shadowSize);let i=mi==="high"?70:55;Object.assign(an.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:10,far:600}),an.shadow.bias=-6e-4,an.shadow.normalBias=.04}It.add(an,an.target),await Ds(20,"Gerando texturas HD\u2026"),Te.road(),Te.intersection(),Te.grass(),Te.facade(0),Te.facade(1),Te.facade(2),Te.facade(3),await Ds(45,"Construindo a cidade\u2026"),bt=new Sc(It,Tt),Cp(bt),await Ds(62,"Carregando caminh\xF5es 3D\u2026");let n=new Ec;n.setMeshoptDecoder(Tp);for(let i of["labo","canter","volvo","flatbed"])try{Ls[i]=(await n.loadAsync(`models/${i}.glb`)).scene}catch(r){console.warn("modelo",i,r)}await Ds(70,"Ligando o motor\u2026"),Q=new wc(It,Aa[j.truck]||Pr[0],Tt.shadows),mi!=="low"&&(ss=new Tr(16773590,0,70,.55,.6,1.2),ss.target=new yt,Q.onModel=i=>{i.root.add(ss,ss.target),ss.position.set(0,i.y0+.3,i.zf+.4),ss.target.position.set(0,0,i.zf+22)},Q.onModel(Q.model)),Fy(),Ns=new Ac(It,Tt.traffic,bt),zy(),await Ds(85,"Desenhando o mapa\u2026"),qy(),j.job&&j.job.phase==="deliver"&&Q.attach(fn[j.job.cargo]),Us=Rd(),Wy(),Yy(),mi!=="low"&&(_d=new vr(Ht),Py()),Oc(j.clock),await Ds(100,"Pronto!"),Ht.compile(It,Zt),he("loading").classList.add("hidden"),Wa(),Fc=performance.now(),requestAnimationFrame(Wp)}var Ty=new le(12375786),Ay=new le(14916203),Ry=new le(659744),Ua=new le;function Oc(s){let e=j.settings.time;e==="day"?s=12:e==="night"?s=23:e==="dusk"&&(s=17.7);let t=Math.sin((s-6)/12*Math.PI),n=gi(t*2.4+.25,0,1),i=gi(1-Math.abs(t)*4,0,1)*(t>-.25?1:0);if($t=1-n,an.intensity=2.7*n+.55*$t,$t>.6?an.color.setHex(9414872):an.color.setHSL(.09,.6+i*.3,.85-i*.2),za.intensity=.62+.65*n,za.color.setHex(14413567).lerp(Ua.setHex(5928104),$t),za.groundColor.setHex(6122309).lerp(Ua.setHex(1843760),$t),Ua.copy(Ry).lerp(Ty,n).lerp(Ay,i*.55),It.background.copy(Ua),It.fog.color.copy(Ua),ni.material.color.setRGB(.07,.09,.16).lerp(new le(1,1,1),n).lerp(new le(1.15,.72,.55),i*.6),ka.material.opacity=gi($t*1.3-.3,0,1),ka.visible=ka.material.opacity>.01,Ht.toneMappingExposure=1+$t*.25,Oa.material.color.setRGB(1,1,1).lerp(new le(.12,.14,.2),$t).lerp(new le(1.1,.75,.6),i*.7),pi){let a=(s-6)/12*Math.PI,o=Math.max(-.3,t)*1.25;pi.material.uniforms.sunPosition.value.set(Math.cos(a)*Math.cos(o),Math.sin(o),Math.sin(a)*.6*Math.cos(o)),pi.material.uniforms.rayleigh.value=1.2+i*1.8,pi.visible=$t<.85}Ba.material.color.setRGB(1,1,1).lerp(It.fog.color,.55),Ba.material.color.multiplyScalar(1-$t*.75),Iy(),bt.setNight($t),Ns.setNight($t);let r=Hr!==null?Hr:$t>.35;Q.lightsOn!==r&&Q.setLights(r),ss&&(ss.intensity=Q.lightsOn?60*(.35+$t):0)}function Cy(){let e=[],t=Tt.far*.9;for(let i=0;i<900;i++){let r=Math.random()*Math.PI*2,a=Math.random()*.9+.08,o=Math.sqrt(1-a*a);e.push(Math.cos(r)*o*t,a*t,Math.sin(r)*o*t)}let n=new gt;n.setAttribute("position",new He(e,3)),ka=new Mr(n,new ws({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),ni.add(ka)}function Py(){Br=new ma;let s=new li(10,24,12),e=[],t=s.attributes.position;for(let n=0;n<t.count;n++)e.push(1,1,1);s.setAttribute("color",new He(e,3)),Br.userData.sky=new Fe(s,new st({vertexColors:!0,side:zt})),Br.add(Br.userData.sky)}var Fr=new le,Ly=new le;function Iy(){if(!_d||Math.abs($t-Lp)<.08)return;Lp=$t;let s=Br.userData.sky.geometry,e=s.attributes.position,t=s.attributes.color,n=new le(4884165).lerp(new le(461590),$t),i=It.background.clone(),r=new le(5200442).lerp(new le(461068),$t);for(let o=0;o<e.count;o++){let l=e.getY(o)/10;l>=0?Fr.copy(i).lerp(n,Math.min(1,l*1.6)):Fr.copy(i).lerp(r,Math.min(1,-l*3)),$t<.5&&l>.3&&e.getX(o)>4&&e.getZ(o)>2&&Fr.lerp(Ly.setRGB(2.2,2,1.7),.5),t.setXYZ(o,Fr.r,Fr.g,Fr.b)}t.needsUpdate=!0;let a=_d.fromScene(Br,.02);It.environment&&It.environment.dispose(),It.environment=a.texture}function Dy(s){Ze.tt=(Ze.tt||0)+s;let e=Ze.tt*.08+Ze.orbit,t=Q.model,n=Math.sin(Q.h),i=Math.cos(Q.h),r=Q.x+n*t.wb*.4,a=Q.z+i*t.wb*.4,o=((t.zf-t.rearEnd)*1.15+4.5+(Q.trailer?6:0))*(Ze.zoom||1),l=Q.h+.7+Math.sin(e)*.9;Zt.position.set(r+Math.sin(l)*o,1.6+Math.sin(e*.7)*.6,a+Math.cos(l)*o);let c=Math.cos(l),h=-Math.sin(l);Zt.lookAt(r-c*3.2,1.9,a-h*3.2),Zt.fov=50,Zt.updateProjectionMatrix(),Tt.shadows&&(an.target.position.set(Q.x,0,Q.z),an.position.set(Q.x+150,170,Q.z+95)),ni.position.copy(Zt.position)}function Ny(){let s=Tt.far*.82,e=[],t=[],n=new le(5989488),i=new le(15265524),r=new le(3953206),a=7,o=()=>(a=a*16807%2147483647)/2147483647,l=220,c=[];for(let d=0;d<=l;d++)c.push(0);for(let d=0;d<4;d++){let u=[3,7,17,41][d],f=[.09,.05,.025,.012][d],g=o()*10;for(let b=0;b<=l;b++)c[b]+=f*(.5+.5*Math.sin(b/l*Math.PI*2*u+g+Math.sin(b*.37*(d+1))*.6))}for(let d=0;d<l;d++){let u=d/l*Math.PI*2,f=(d+1)/l*Math.PI*2,g=c[d]*s,b=c[d+1]*s,m=(P,B)=>[Math.cos(P)*s,B-s*.01,Math.sin(P)*s],p=m(u,0),x=m(f,0),v=m(u,g),y=m(f,b);e.push(...p,...x,...y,...p,...y,...v);let A=r,w=g>s*.12?i:n,T=b>s*.12?i:n;t.push(A.r,A.g,A.b,A.r,A.g,A.b,T.r,T.g,T.b,A.r,A.g,A.b,T.r,T.g,T.b,w.r,w.g,w.b)}let h=new gt;h.setAttribute("position",new He(e,3)),h.setAttribute("color",new He(t,3)),Ba=new Fe(h,new st({vertexColors:!0,fog:!1,depthWrite:!1,side:ht,transparent:!0,opacity:1})),Ba.renderOrder=-.8,ni.add(Ba)}function Uy(){let s=new li(Tt.far*.85,32,8,0,Math.PI*2,0,Math.PI*.42);Oa=new Fe(s,new st({map:Te.clouds(),transparent:!0,depthWrite:!1,fog:!1,side:zt,opacity:.9})),Oa.material.map.repeat.set(3,1),Oa.renderOrder=-.5,ni.add(Oa)}function Oy(){let s=new li(Tt.far*.95,24,12),e=new le(4030404),t=new le(10274536),n=new le(14543344),i=[],r=s.attributes.position,a=new le;for(let o=0;o<r.count;o++){let l=r.getY(o)/(Tt.far*.95);l>.25?a.copy(t).lerp(e,Math.min(1,(l-.25)/.75)):a.copy(n).lerp(t,Math.max(0,l/.25)),i.push(a.r,a.g,a.b)}if(s.setAttribute("color",new He(i,3)),ni=new Fe(s,new st({vertexColors:!0,side:zt,fog:!1,depthWrite:!1})),ni.renderOrder=-1,It.add(ni),Cy(),Uy(),Ny(),mi!=="low"){pi=new Da,pi.scale.setScalar(Tt.far*.9),pi.renderOrder=-2,pi.material.depthWrite=!1;let o=pi.material.uniforms;o.turbidity.value=5,o.rayleigh.value=1.6,o.mieCoefficient.value=.004,o.mieDirectionalG.value=.85,ni.material.visible=!1,ni.add(pi)}}function Fy(){if(Q.world=bt,j.pos&&isFinite(j.pos.x)&&bt.resolveCircle({x:j.pos.x,z:j.pos.z},1.5,Ga)<=0){Q.place(j.pos.x,j.pos.z,j.pos.h);return}let s=bt.depots.garagem.zone;Q.place(s.x-8,s.z,Math.PI/2),Q.world=bt,Q.sync()}function zy(){on=new Ct;let s=new Fe(new kt(1,1),new st({map:Te.zone(),color:16761856,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.y=.08,on.add(s),on.zone=s;let e=new Fe(new Vn(3,3,60,20,1,!0),new st({color:16758531,transparent:!0,opacity:.22,depthWrite:!1,side:ht,fog:!1,blending:Cn}));e.position.y=30,on.add(e);let t=new Fe(new Sr(1.6,3.2,4),new st({color:16761856}));t.rotation.x=Math.PI,on.add(t),on.cone=t,on.visible=!1,It.add(on);let n=new Ki;n.moveTo(0,1.6),n.lineTo(1.3,-.6),n.lineTo(0,0),n.lineTo(-1.3,-.6),n.closePath();let i=new tc(n);i.rotateX(Math.PI/2),si=new Fe(i,new st({color:4120698,transparent:!0,opacity:.9,side:ht,depthTest:!1})),si.renderOrder=10,si.visible=!1,It.add(si)}function ky(s,e){let t=bt.depots[s],n=bt.depots[e];return pd(t.zone.x,t.zone.z,n).len}function By(s,e,t){let n=ky(e,t),i=n/1e3,r=Math.round((350+i*(900+s.t*115)*s.rate)/10)*10,a=Math.round(50+s.t*4+i*70),o=Math.round(n/8.5+90+s.t*1.5);return{cargo:s.id,from:e,to:t,dist:n,pay:r,xp:a,time:o}}function Rd(){let s=[],e=Ra.filter(i=>i.lvl<=j.level+4),t=new Set,n=0;for(;s.length<10&&n++<200;){let i=e.filter(h=>h.lvl<=j.level),r=Math.random()<.78&&i.length?i:e,a=r[Math.random()*r.length|0],o=a.from[Math.random()*a.from.length|0],l=a.to[Math.random()*a.to.length|0],c=a.id+o+l;o===l||t.has(c)||(t.add(c),s.push(By(a,o,l)))}return s.sort((i,r)=>(yd(i)?0:1)-(yd(r)?0:1)||fn[i.cargo].t-fn[r.cargo].t),s}function Cd(s,e=Q.def){let t=fn[s.cargo];return t.lvl>j.level?`Requer n\xEDvel ${t.lvl}`:t.t>e.cap?`Caminh\xE3o fraco (m\xE1x. ${e.cap} t)`:e.rigid&&t.trailer!=="box"?"Requer cavalo mec\xE2nico":null}var yd=s=>!Cd(s);function Fp(s){let e=Us[s];!e||!yd(e)||j.job||(j.job=Ni(Gt({},e),{phase:"pickup",damage:0,tLeft:e.time}),Us.splice(s,1),ct.beep(660,.1),ct.beep(990,.12),Va(),ri(`Frete aceito! V\xE1 at\xE9 <b>${Ii[e.from].name}</b>`),Ha=0,Bt())}function zp(){if(!j.job)return;let s=j.job.phase==="deliver"?Math.round(j.job.pay*.25):0;j.money=Math.max(0,j.money-s),Q.detach(),j.job=null,on.visible=!1,si.visible=!1,ri(s?`Frete cancelado. Multa de ${En(s)}`:"Frete cancelado"),Bt()}function zc(){return j.job?bt.depots[j.job.phase==="pickup"?j.job.from:j.job.to]:null}function kp(s){let e=Q.center({x:0,z:0}),t=s.zone;return Math.abs(e.x-t.x)<t.w/2+3&&Math.abs(e.z-t.z)<t.d/2+3}function Nc(s){let e=j.job;if(!e){he("progress").classList.add("hidden");return}e.phase==="deliver"&&(e.tLeft-=s);let t=zc(),n=kp(t),i=Q.speedKmh<1.5;if(n&&i){Na+=s;let r=2.2;he("progress").classList.remove("hidden"),he("progtext").textContent=e.phase==="pickup"?"Carregando\u2026":"Descarregando\u2026",he("progarc").style.strokeDashoffset=264*(1-Math.min(1,Na/r)),Na>=r&&(Na=0,he("progress").classList.add("hidden"),e.phase==="pickup"?(Q.attach(fn[e.cargo]),e.phase="deliver",e.tLeft=e.time,ct.airBrake(),ri(`Carga engatada: <b>${fn[e.cargo].name}</b> (${fn[e.cargo].t} t)`),ri(`Entregue em <b>${Ii[e.to].name}</b>`),Ha=0,Bt()):Hy())}else Na=0,he("progress").classList.add("hidden"),n&&!i&&Q.speedKmh<25&&!Nc.warned&&(ri("Pare na \xE1rea marcada"),Nc.warned=!0),n||(Nc.warned=!1)}function Hy(){let s=j.job,e=fn[s.cargo],t=s.pay,n=Math.round(t*s.damage/100),i=s.tLeft>=0,r=i?Math.round(t*.15):-Math.round(t*.2),a=Math.max(0,t-n+r),o=Math.round(s.xp*(s.damage<5?1.2:1)*(i?1:.7));j.money+=a,j.stats.deliveries++,j.stats.earned+=a,j.stats.tons+=e.t,Q.detach(),j.job=null,on.visible=!1,si.visible=!1,ct.airBrake(),ct.beep(880,.12),setTimeout(()=>ct.beep(1320,.18),120);let l=[["Pagamento base",En(t)],[i?"B\xF4nus no prazo (+15%)":"Atraso (\u221220%)",(r>=0?"+":"")+En(r)],[`Avaria da carga (${s.damage.toFixed(0)}%)`,"\u2212"+En(n)],["Experi\xEAncia",`+${o} XP`]],c=Gy(o);Vr(`<h2>Entrega conclu\xEDda! \u2705</h2><div>${e.icon} ${e.name} \u2022 ${e.t} t \u2192 ${Ii[s.to].name}</div>
    <div class="big">${En(a)}</div>
    <div class="lines">${l.map(h=>`<div><span>${h[0]}</span><b>${h[1]}</b></div>`).join("")}</div>
    <button class="btn" data-act="popjobs">Pr\xF3ximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,c),Us=Rd(),Bt()}function Gy(s){j.xp+=s;let e=[];for(;j.level<30&&j.xp>=Lr(j.level);)j.xp-=Lr(j.level),j.level++,e.push(j.level);return e}function Vy(s){let e=Ra.filter(n=>n.lvl===s),t=Pr.filter(n=>n.level===s);ct.beep(523,.12),setTimeout(()=>ct.beep(659,.12),120),setTimeout(()=>ct.beep(784,.25),240),Vr(`<h2>\u2B50 N\xEDvel ${s}!</h2><div>Voc\xEA subiu de n\xEDvel.</div>
    <div class="lines">${e.map(n=>`<div><span>${n.icon} Nova carga: ${n.name}</span><b>${n.t} t</b></div>`).join("")}
    ${t.map(n=>`<div><span>\u{1F69A} Novo caminh\xE3o: ${n.name}</span><b>${En(n.price)}</b></div>`).join("")}
    ${!e.length&&!t.length?"<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>":""}</div>
    <button class="btn" data-act="popclose">Show!</button>`)}function Wy(){let s=(h,d)=>{let u=g=>{if(g.preventDefault(),Ce[d]=!0,h.classList.add("on"),ct.init(),h.setPointerCapture&&g.pointerId!==void 0)try{h.setPointerCapture(g.pointerId)}catch(b){}},f=g=>{g.preventDefault(),Ce[d]=!1,h.classList.remove("on")};h.addEventListener("pointerdown",u),h.addEventListener("pointerup",f),h.addEventListener("pointercancel",f),h.addEventListener("lostpointercapture",f),h.addEventListener("contextmenu",g=>g.preventDefault())};s(he("gas"),"gas"),s(he("brake"),"brake"),s(he("left"),"left"),s(he("right"),"right");let e=he("wheel"),t=null,n=h=>{let d=e.getBoundingClientRect();return Math.atan2(h.clientX-(d.left+d.width/2),-(h.clientY-(d.top+d.height/2)))};e.addEventListener("pointerdown",h=>{h.preventDefault(),ct.init();let d=e.getBoundingClientRect();Math.hypot(h.clientX-(d.left+d.width/2),h.clientY-(d.top+d.height/2))<d.width*.17?(ct.horn(!0),t={horn:!0,id:h.pointerId}):(t={id:h.pointerId,a0:n(h),w0:Ce.wheel},Ce.wheelHeld=!0);try{e.setPointerCapture(h.pointerId)}catch(f){}}),e.addEventListener("pointermove",h=>{if(!t||t.horn||h.pointerId!==t.id)return;let d=n(h)-t.a0;d=Math.atan2(Math.sin(d),Math.cos(d)),Ce.wheel=gi(t.w0+d*180/Math.PI,-150,150),t.a0=n(h),t.w0=Ce.wheel});let i=()=>{t&&t.horn&&ct.horn(!1),t=null,Ce.wheelHeld=!1};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("lostpointercapture",i),document.querySelectorAll("#gearsel button").forEach(h=>h.addEventListener("pointerdown",d=>{d.preventDefault(),Uc(h.dataset.g)}));let r=h=>{Ce.blink=Ce.blink===h?0:h,Ce.blinkArm=!1,kr=0,ct.init(),ct.beep(1500,.03,"square",.06)};he("blinkL").addEventListener("pointerdown",h=>{h.preventDefault(),r(-1)}),he("blinkR").addEventListener("pointerdown",h=>{h.preventDefault(),r(1)}),he("ic-haz").addEventListener("pointerdown",h=>{h.preventDefault(),r(2)}),window.__setBlink=r,he("ic-hand").addEventListener("pointerdown",h=>{h.preventDefault(),Ce.hand=!Ce.hand,ct.airBrake()}),he("lightsbtn").addEventListener("pointerdown",h=>{h.preventDefault(),Hr=!Q.lightsOn,Q.setLights(Hr),ct.beep(1400,.04,"square",.08)}),he("enginebtn").addEventListener("click",Dp);let a={ArrowUp:"gas",KeyW:"gas",ArrowDown:"brake",KeyS:"brake",Space:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",h=>{ct.init(),a[h.code]&&(Ce[a[h.code]]=!0,h.preventDefault()),h.code==="KeyH"&&ct.horn(!0),h.code==="KeyR"&&!h.repeat&&Uc(Ce.gear==="R"?"D":"R"),h.code==="KeyN"&&!h.repeat&&Uc("N"),h.code==="KeyE"&&!h.repeat&&Dp(),h.code==="KeyL"&&!h.repeat&&(Hr=!Q.lightsOn,Q.setLights(Hr)),h.code==="KeyP"&&!h.repeat&&(Ce.hand=!Ce.hand),h.code==="KeyZ"&&!h.repeat&&window.__setBlink(-1),h.code==="KeyX"&&!h.repeat&&window.__setBlink(1),h.code==="KeyC"&&!h.repeat&&Bp(),h.code==="KeyM"&&!h.repeat&&Sd(),h.code==="Escape"&&Ip()}),window.addEventListener("keyup",h=>{a[h.code]&&(Ce[a[h.code]]=!1),h.code==="KeyH"&&ct.horn(!1)});let o=he("gl"),l=null;o.addEventListener("pointerdown",h=>{l={x:h.clientX,id:h.pointerId}}),window.addEventListener("pointermove",h=>{!l||h.pointerId!==l.id||(Ze.orbit+=(h.clientX-l.x)*.008,l.x=h.clientX,Ze.orbitT=1.8)});let c=h=>{l&&h.pointerId===l.id&&(l=null)};window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("devicemotion",h=>{var g,b;let d=h.accelerationIncludingGravity;if(!d||d.y==null)return;let u=(b=(g=screen.orientation&&screen.orientation.angle)!=null?g:window.orientation)!=null?b:90,f=u===90?1:u===270||u===-90?-1:0;Ce.tilt=gi(f?-d.y*f/4.5:-d.x/4.5,-1,1)}),window.addEventListener("resize",qp),document.addEventListener("visibilitychange",()=>{document.hidden?(ct.suspend(),Bt()):(ct.resume(),Fc=performance.now())}),window.addEventListener("pagehide",Bt),window.onAndroidBack=()=>Ip()}function Ip(){return he("bigmap").classList.contains("hidden")?he("popup").classList.contains("hidden")?he("modal").classList.contains("hidden")?Nt==="drive"?(Fa("settings"),!0):(Bt(),!1):(Va(),!0):(wd(),!0):(he("bigmap").classList.add("hidden"),!0)}function Uc(s){Ce.gear=s,document.querySelectorAll("#gearsel button").forEach(e=>e.classList.toggle("on",e.dataset.g===s)),ct.beep(s==="R"?500:700,.05,"square",.06)}var Gr=0,kr=0;function Dp(){Q.engineOn||Gr>0||(ct.init(),Gr=1.1,he("enginebtn").classList.add("starting"),ct.starter())}function Md(s){let e=(i,r,a,o)=>i+gi(r-i,-o*s,a*s),t=Nt==="drive";Gr>0&&(Gr-=s,Gr<=0&&(Q.engineOn=!0,he("enginebtn").classList.add("hidden"),he("enginebtn").classList.remove("starting"))),yn.throttle=e(yn.throttle,t&&Ce.gas?1:0,2.5,6),yn.brake=e(yn.brake,t&&Ce.brake?1:0,6,8),yn.gear=j.settings.gearbox==="auto"?"auto":Ce.gear,yn.handbrake=Ce.hand,t&&Ce.gas&&!Q.engineOn&&Gr<=0&&!Md.warned&&(ri("Ligue o motor primeiro"),Md.warned=!0),Ce.wheelHeld||(Ce.wheel*=Math.max(0,1-s*7));let n=0;if(j.settings.steer==="tilt"?(n=Math.abs(Ce.tilt)<.06?0:Ce.tilt,Ce.wheel=-n*150):j.settings.steer==="wheel"&&(n=-Ce.wheel/150),n+=(Ce.left?1:0)-(Ce.right?1:0),n=t?gi(n,-1,1):0,yn.steer=j.settings.steer==="wheel"&&Ce.wheelHeld?n:e(yn.steer,n,2.4,4),Math.abs(yn.steer)<.01&&n===0&&(yn.steer=0),he("wheel").style.transform=`rotate(${(-yn.steer*150).toFixed(1)}deg)`,(Ce.blink===-1||Ce.blink===1)&&(yn.steer*-Ce.blink>.3?Ce.blinkArm=!0:Ce.blinkArm&&Math.abs(yn.steer)<.06&&(Ce.blink=0,Ce.blinkArm=!1)),Ce.blink){let i=kr%.8<.4;kr+=s;let r=kr%.8<.4;r!==i&&ct.beep(r?1300:900,.025,"square",.05),Q.setBlink(Ce.blink,r),he("blinkL").classList.toggle("on",r&&(Ce.blink===-1||Ce.blink===2)),he("blinkR").classList.toggle("on",r&&(Ce.blink===1||Ce.blink===2)),he("ic-bl").classList.toggle("on",r&&(Ce.blink===-1||Ce.blink===2)),he("ic-br").classList.toggle("on",r&&(Ce.blink===1||Ce.blink===2)),he("ic-haz").classList.toggle("on",Ce.blink===2)}else if(kr!==0){kr=0,Q.setBlink(0,!1);for(let i of["blinkL","blinkR","ic-bl","ic-br","ic-haz"])he(i).classList.remove("on")}}function Bp(){Ze.mode=(Ze.mode+1)%3,j.settings.camera=Ze.mode,ri(["C\xE2mera: Persegui\xE7\xE3o","C\xE2mera: A\xE9rea","C\xE2mera: Cabine"][Ze.mode],1200)}var gd={x:0,z:0},Ga={x:0,z:0};function Pd(s,e=!1){Math.hypot(Ze.pos.x-Q.x,Ze.pos.z-Q.z)>150&&(e=!0);let t=Q.model;Ze.orbitT>0?Ze.orbitT-=s:Ze.orbit*=Math.max(0,1-s*2.5);let n=Q.h;Q.v<-.5&&Ze.mode!==2&&(n=Q.h);let i=e?1:1-Math.exp(-s*(Ze.mode===2?12:2.6)),r=n+Ze.orbit-Ze.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),Ze.yaw+=r*i;let a=Math.sin(Q.h),o=Math.cos(Q.h);if(Ze.mode===2){let l=Q.x+a*(t.zf-.7)-Math.cos(Q.h)*.45,c=Q.z+o*(t.zf-.7)+Math.sin(Q.h)*.45;Zt.position.set(l,Q.y+(Q.def.id==="urbano"?2.3:2.75),c);let h=Math.sin(Ze.yaw),d=Math.cos(Ze.yaw);Zt.lookAt(l+h*20,Q.y+2+Math.sin(Q.pitch)*20,c+d*20),Zt.fov=70}else{let l=Q.trailer?Q.trailer.Lt:0,c=t.zf-t.rearEnd,h=(Ze.mode===0?3.5+c:12+c*1.2)+l*(Ze.mode===0?.75:1.1),d=(Ze.mode===0?2.2+c*.3:9+c*.7)+l*(Ze.mode===0?.18:.4),u=Q.x+a*t.wb*.5-(Q.trailer?Math.sin(Q.th)*l*.25:0),f=Q.z+o*t.wb*.5-(Q.trailer?Math.cos(Q.th)*l*.25:0),g=Math.sin(Ze.yaw),b=Math.cos(Ze.yaw);for(let y=0;y<6&&(gd.x=u-g*h,gd.z=f-b*h,!(bt.resolveCircle(gd,.6,Ga,!0)<=0||d>30));y++)h*=.8;let m=u-g*h,p=f-b*h,x=e?1:1-Math.exp(-s*8);Ze.pos.x+=(m-Ze.pos.x)*x,Ze.pos.z+=(p-Ze.pos.z)*x;let v=Q.y+d;Ze.pos.y+=(v-Ze.pos.y)*x,Zt.position.copy(Ze.pos),Zt.lookAt(u,Q.y+(Ze.mode===1?1.5:1.3),f),Zt.fov=58+Math.min(8,Q.speedKmh*.08)}Zt.updateProjectionMatrix(),Tt.shadows&&(an.target.position.set(Q.x,0,Q.z),an.position.set(Q.x+150,170,Q.z+95)),ni.position.copy(Zt.position)}var St=null;function qy(){let s=()=>new Path2D;St={blocks:{},lots:s(),roads:s(),hw:s(),river:s(),fields:s(),hills:s()};let e={downtown:"#8b95a3",residential:"#a8a294",town:"#b4ab98",park:"#4f8a3a",industrial:"#8d8473",port:"#7b8790"};for(let n of Qn){for(let i=0;i<n.nx;i++)for(let r=0;r<n.nz;r++){let a=bc(n,i,r);(St.blocks[e[a]]=St.blocks[e[a]]||s()).rect(n.x0+i*140+10,n.z0+r*140+10,120,120)}for(let i=0;i<=n.nx;i++)St.roads.moveTo(n.x0+i*140,n.z0),St.roads.lineTo(n.x0+i*140,Cr(n));for(let i=0;i<=n.nz;i++)St.roads.moveTo(n.x0,n.z0+i*140),St.roads.lineTo(As(n),n.z0+i*140)}for(let n of ti){let[i,r,a,o]=bt.depots[n.id].lot;St.lots.rect(i,r,a-i,o-r)}for(let n of bt.hws){St.hw.moveTo(n.x[0],n.z[0]);for(let i=1;i<n.n;i+=2)St.hw.lineTo(n.x[i],n.z[i]);St.hw.lineTo(n.x[n.n-1],n.z[n.n-1])}let t=bt.river;St.river.moveTo(t.x[0],t.z[0]);for(let n=1;n<t.n;n++)St.river.lineTo(t.x[n],t.z[n]);for(let n of bt.fields)St.fields.rect(n.x0,n.z0,n.x1-n.x0,n.z1-n.z0);for(let n of bt.hills)St.hills.moveTo(n.x+n.r*.85,n.z),St.hills.arc(n.x,n.z,n.r*.85,0,Math.PI*2)}function Hp(s,e){s.fillStyle="#3d5a34",s.fillRect(Pt.x0-3e3,Pt.z0-3e3,12e3,12e3),s.fillStyle="#34502d",s.fill(St.hills),s.fillStyle="#9a9356",s.fill(St.fields),s.fillStyle="#2d6f93",s.fillRect(Pt.x0-3e3,1790,12e3,4e3),s.lineCap="round",s.lineJoin="round",s.strokeStyle="#2d6f93",s.lineWidth=Math.max(ei,3/e),s.stroke(St.river);for(let t in St.blocks)s.fillStyle=t,s.fill(St.blocks[t]);s.fillStyle="#cfc9bd",s.fill(St.lots),s.strokeStyle="#26282c",s.lineWidth=Math.max(20,3/e),s.lineCap="square",s.stroke(St.roads),s.lineCap="round",s.strokeStyle="#1d1f22",s.lineWidth=Math.max(9*2+4,4.5/e),s.stroke(St.hw),s.strokeStyle="#4a4d52",s.lineWidth=Math.max(9*2,3/e),s.stroke(St.hw)}function Gp(s,e,t,n,i){s.fillStyle=n,s.strokeStyle="#fff",s.lineWidth=i*.3,s.beginPath(),s.arc(e,t,i,0,7),s.fill(),s.stroke()}function Xy(){let s=he("minimap"),e=s.getContext("2d"),t=s.width,n=s.height,i=.75;e.setTransform(1,0,0,1,0,0),e.translate(t/2,n*.62),e.rotate(Math.PI+Q.h),e.scale(i,i),e.translate(-Q.x,-Q.z),Hp(e,i),ii&&j.job&&(e.strokeStyle=qr(),e.lineWidth=8/i,e.beginPath(),ii.path.forEach((a,o)=>o?e.lineTo(a.x,a.z):e.moveTo(a.x,a.z)),e.stroke());let r=zc();for(let a of ti){let o=bt.depots[a.id];Gp(e,o.zone.x,o.zone.z,r===o?qr():a.id==="garagem"?"#2f6fde":"rgba(30,30,30,0.85)",(r===o?9:6)/i)}e.fillStyle="rgba(255,255,255,0.7)";for(let a of Ns.cars)a.mode&&e.fillRect(a.x-2/i,a.z-2/i,4/i,4/i);e.setTransform(1,0,0,1,0,0),e.translate(t/2,n*.62),e.fillStyle="#3ee07a",e.strokeStyle="#0b1a10",e.lineWidth=3,e.beginPath(),e.moveTo(0,-14),e.lineTo(10,11),e.lineTo(0,5),e.lineTo(-10,11),e.closePath(),e.fill(),e.stroke(),e.setTransform(1,0,0,1,0,0)}function Sd(){let s=he("bigmap"),e=he("bigmapc");s.classList.remove("hidden");let t=Math.min(2,window.devicePixelRatio||1),n=window.innerWidth*.96,i=window.innerHeight*.92,r=Pt.x1-Pt.x0,a=Pt.z1-Pt.z0,o=Math.min(n/r,i/a);e.width=r*o*t,e.height=a*o*t,e.style.width=r*o+"px",e.style.height=a*o+"px";let l=e.getContext("2d"),c=o*t;l.setTransform(c,0,0,c,-Pt.x0*c,-Pt.z0*c),Hp(l,c),ii&&j.job&&(l.strokeStyle=qr(),l.lineWidth=5/c,l.beginPath(),ii.path.forEach((u,f)=>f?l.lineTo(u.x,u.z):l.moveTo(u.x,u.z)),l.stroke());let h=zc();l.textAlign="center";let d=(u,f,g,b,m="#fff")=>{l.font=`700 ${b/c}px sans-serif`,l.lineWidth=3/c,l.strokeStyle="rgba(0,0,0,0.85)",l.strokeText(u,f,g),l.fillStyle=m,l.fillText(u,f,g)};for(let u of Qn)d(u.name.toUpperCase(),(u.x0+As(u))/2,u.z0-40,15*t,"#ffe08a");for(let u of bt.hws){let f=u.n/2|0;d(u.id,u.x[f],u.z[f]-20,10*t,"#cfe8ff")}for(let u of ti){let f=bt.depots[u.id];Gp(l,f.zone.x,f.zone.z,h===f?qr():u.id==="garagem"?"#2f6fde":"#222",6*t/c),d(u.name,f.zone.x,f.zone.z-14*t/c,10*t)}l.save(),l.translate(Q.x,Q.z),l.rotate(Math.PI+Q.h),l.scale(t/c,t/c),l.fillStyle="#3ee07a",l.strokeStyle="#000",l.lineWidth=2,l.beginPath(),l.moveTo(0,-12),l.lineTo(9,10),l.lineTo(0,5),l.lineTo(-9,10),l.closePath(),l.fill(),l.stroke(),l.restore()}var jy="jobs";function Yy(){document.body.addEventListener("click",s=>{let e=s.target.closest("[data-act],[data-tab]");if(!e)return;if(ct.init(),e.dataset.tab){Dn(e.dataset.tab);return}let t=e.dataset.act,n=e.dataset.arg;if(t==="jobs"||t==="garage"||t==="settings")Fa(t);else if(t==="menu"||t==="pause")Fa("settings");else if(t==="rename"){let i=prompt("Nome do motorista:",j.name);i&&i.trim()&&(j.name=i.trim().slice(0,18),Bt(),Wa())}else t==="map"?Sd():t==="gauge"?(j.settings.gauge=n,Bt(),Dn("settings")):t==="accent"?(j.settings.accent=n,bd(),Bt(),Dn("settings")):t==="hudsize"?(j.settings.hud=n,bd(),Bt(),Dn("settings")):t==="gearbox"?(j.settings.gearbox=n,he("gearsel").classList.toggle("hidden",n==="auto"),Bt(),Dn("settings")):t==="timemode"?(j.settings.time=n,Bt(),Oc(j.clock),Dn("settings")):t==="tomenu"?(Va(),Bt(),Wa()):t==="camera"?Bp():t==="close"?Va():t==="accept"?Fp(+n):t==="refresh"?(Us=Rd(),Dn("jobs")):t==="cancel"?(zp(),Dn("jobs")):t==="buy"?Jy(n):t==="use"?Vp(n):t==="popclose"?wd():t==="popjobs"?(wd(),Fa("jobs")):t==="closemap"?he("bigmap").classList.add("hidden"):t==="quality"?(j.settings.quality=n,Bt(),Dn("settings"),ri("Reiniciando para aplicar\u2026"),setTimeout(()=>location.reload(),500)):t==="steermode"?(j.settings.steer=n,Np(),Bt(),Dn("settings")):t==="fps"?(j.settings.fps=!j.settings.fps,he("fps").classList.toggle("hidden",!j.settings.fps),Bt(),Dn("settings")):t==="reset"?confirm("Apagar todo o progresso?")&&(localStorage.removeItem(Ad),location.reload()):t==="rescue"&&(t1(),Va())}),he("mapwrap").addEventListener("click",Sd),he("fps").classList.toggle("hidden",!j.settings.fps),he("tabbody").addEventListener("input",s=>{s.target.id==="vol"&&(j.settings.volume=+s.target.value,ct.setVolume(j.settings.volume),Bt())}),Np(),bd(),Uc("D"),he("gearsel").classList.toggle("hidden",j.settings.gearbox==="auto"),he("play").addEventListener("click",()=>{ct.init(),he("title").classList.add("hidden"),he("hud").classList.remove("hidden"),Nt="drive",Q.engineOn||he("enginebtn").classList.remove("hidden"),Pd(0,!0),qp(),Ed=3;try{document.documentElement.requestFullscreen&&!window.AndroidBridge&&document.documentElement.requestFullscreen().catch(()=>{})}catch(s){}!j.job&&j.stats.deliveries===0&&setTimeout(()=>Fa("jobs"),400)})}function Np(){let s=he("wheelwrap");s.classList.toggle("buttons",j.settings.steer==="buttons"),s.classList.toggle("tilt",j.settings.steer==="tilt")}function Wa(){Nt="title",Ze.tt=0,he("hud").classList.add("hidden"),he("title").classList.remove("hidden"),he("pname").textContent=j.name,he("plvl").textContent=`N\xEDvel ${j.level} \u2022 ${j.xp}/${Lr(j.level)} XP`,he("tmoney").textContent=En(j.money);let s=Q.def;he("tiname").textContent=s.name,he("tispecs").innerHTML=`<span>${s.hp} cv</span><span>${s.cap} t</span><span>${s.vmax} km/h</span><span>${s.rigid?"R\xEDgido":"Cavalo "+s.cfg}</span>`;let e=j.job;he("tjob").innerHTML=e?`${fn[e.cargo].icon} ${fn[e.cargo].name} \u2192 <b>${Ii[e.phase==="pickup"?e.from:e.to].name}</b>`:"Nenhum frete ativo",he("tstats").innerHTML=`<div><b>${j.stats.deliveries}</b><small>entregas</small></div><div><b>${j.stats.km.toFixed(0)}</b><small>km</small></div><div><b>${j.stats.tons.toFixed(0)}</b><small>toneladas</small></div><div><b>${j.owned.length}</b><small>caminh\xF5es</small></div>`}function Fa(s){Nt=Nt==="title"?"title":"menu",he("modal").classList.remove("hidden"),Ce.gas=Ce.brake=Ce.left=Ce.right=!1,document.querySelectorAll(".pad").forEach(e=>e.classList.remove("on")),Dn(s)}function Va(){he("modal").classList.add("hidden"),Nt==="title"&&Wa(),Nt==="menu"&&(Nt="drive")}function Vr(s,e=[]){he("popcard").innerHTML=s,he("popup").classList.remove("hidden"),Nt=Nt==="drive"?"menu":Nt,Vr.queue=e}function wd(){he("popup").classList.add("hidden"),he("modal").classList.contains("hidden")&&(Nt="drive");let s=Vr.queue||[];if(s.length){let e=s.shift();Vr.queue=s,Vy(e),Vr.queue=s}}function Dn(s){jy=s,document.querySelectorAll(".tabs [data-tab]").forEach(t=>t.classList.toggle("on",t.dataset.tab===s));let e=he("tabbody");s==="jobs"?e.innerHTML=$y():s==="garage"?e.innerHTML=Zy():s==="profile"?e.innerHTML=Qy():e.innerHTML=e1(),e.scrollTop=0}function Ky(s,e){let t=fn[s.cargo],n=Cd(s),i=[t.fragile?'<span class="chip tag">Fr\xE1gil</span>':"",t.hazard?'<span class="chip tag">Perigosa</span>':"",t.trailer==="lowboy"?'<span class="chip tag">Indivis\xEDvel</span>':""].join("");return`<div class="card ${n?"locked":""}">
    <div class="ic">${t.icon}</div><h3>${t.name}</h3><div class="t">${t.t} toneladas</div>
    <div class="route">\u{1F4CD} ${Ii[s.from].name} \u2192 \u{1F3C1} ${Ii[s.to].name}</div>
    <div class="row"><span class="chip pay">${En(s.pay)}</span><span class="chip xp">+${s.xp} XP</span><span class="chip">${(s.dist/1e3).toFixed(1)} km</span><span class="chip">\u23F1 ${Math.ceil(s.time/60)} min</span>${i}</div>
    ${n?`<div class="row"><span class="chip warn">\u{1F512} ${n}</span></div>`:`<button class="btn" data-act="accept" data-arg="${e}" ${j.job?"disabled":""}>Aceitar frete</button>`}
  </div>`}function $y(){let s="";if(j.job){let e=j.job,t=fn[e.cargo];s=`<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${t.icon}</div><h3>Frete ativo: ${t.name} (${t.t} t)</h3>
      <div class="route">${e.phase==="pickup"?"Coletar em":"Entregar em"} <b>${Ii[e.phase==="pickup"?e.from:e.to].name}</b> \u2022 Avaria ${e.damage.toFixed(0)}% \u2022 Pagamento ${En(e.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${e.phase==="deliver"?" (multa 25%)":""}</button></div>`}return`${s}<div class="tbar"><div class="grow">Caminh\xE3o atual: <b>${Q.def.name}</b> \u2014 at\xE9 <b>${Q.def.cap} t</b> \u2022 N\xEDvel ${j.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">\u{1F504} Atualizar</button></div>
    <div class="grid">${Us.map(Ky).join("")}</div>`}function Zy(){return`<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${En(j.money)}</b> \u2022 A for\xE7a do caminh\xE3o define as cargas que ele consegue puxar.</div></div><div class="grid">`+Pr.map(t=>{let n=j.owned.includes(t.id),i=j.truck===t.id,r=t.level>j.level,a;i?a='<button class="btn alt" disabled>Em uso</button>':n?a=`<button class="btn" data-act="use" data-arg="${t.id}">Usar</button>`:r?a=`<span class="chip warn">\u{1F512} N\xEDvel ${t.level}</span>`:a=`<button class="btn" data-act="buy" data-arg="${t.id}" ${j.money<t.price?"disabled":""}>Comprar ${En(t.price)}</button>`;let o="#"+new le(t.color).getHexString();return`<div class="card ${r&&!n?"locked":""}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${o}, #1b2230)">${t.rigid?"\u{1F69A}":"\u{1F69B}"}</div>
        <h3>${t.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${t.desc}</div>
        <div class="stat"><span>Pot\xEAncia</span><b>${t.hp} cv</b></div><div class="meter"><i style="width:${t.hp/750*100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${t.cap} t</b></div><div class="meter"><i style="width:${t.cap/90*100}%"></i></div>
        <div class="stat"><span>Velocidade m\xE1x.</span><b>${t.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${t.rigid?"R\xEDgido (ba\xFA)":`Cavalo mec\xE2nico ${t.cfg}`}</b></div>
        ${a}</div>`}).join("")+"</div>"}function Jy(s){let e=Aa[s];!e||j.owned.includes(s)||j.money<e.price||e.level>j.level||(j.money-=e.price,j.owned.push(s),ct.beep(784,.1),ct.beep(1046,.15),ri(`Voc\xEA comprou o <b>${e.name}</b>!`),Vp(s))}function Vp(s){let e=Aa[s];if(j.owned.includes(s)){if(j.job&&j.job.phase==="deliver"){ri("Conclua ou cancele o frete antes de trocar");return}j.truck=s,Q.setTruck(e),j.job&&Cd(j.job,e)&&zp(),Bt(),Dn("garage"),Nt==="title"&&Wa()}}function Qy(){let s=j.stats,e=Lr(j.level),t=Ra.filter(n=>n.lvl>j.level).slice(0,4);return`<div class="grid">
    <div class="card"><h3>\u2B50 N\xEDvel ${j.level}${j.level>=30?" (m\xE1ximo)":""}</h3><div class="meter" style="margin-top:8px"><i style="width:${j.xp/e*100}%"></i></div>
      <div class="stat"><span>Experi\xEAncia</span><b>${j.xp} / ${e} XP</b></div><div class="stat"><span>Saldo</span><b>${En(j.money)}</b></div>
      <div class="stat"><span>Caminh\xF5es</span><b>${j.owned.length} / ${Pr.length}</b></div></div>
    <div class="card"><h3>\u{1F4CA} Estat\xEDsticas</h3>
      <div class="stat"><span>Entregas</span><b>${s.deliveries}</b></div><div class="stat"><span>Dist\xE2ncia</span><b>${s.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${s.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${En(s.earned)}</b></div>
      <div class="stat"><span>Colis\xF5es</span><b>${s.crashes}</b></div></div>
    <div class="card"><h3>\u{1F513} Pr\xF3ximas cargas</h3>${t.map(n=>`<div class="stat"><span>${n.icon} ${n.name} (${n.t} t)</span><b>N\xEDvel ${n.lvl}</b></div>`).join("")||'<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`}function e1(){let s=(e,t,n)=>`<div class="seg">${n.map(([i,r])=>`<button data-act="${e}" data-arg="${i}" class="${t===i?"on":""}">${r}</button>`).join("")}</div>`;return`<div class="set"><div><b>Qualidade gr\xE1fica</b><br><small style="opacity:.7">Atual: ${mi==="low"?"Leve":mi==="medium"?"M\xE9dio":"Ultra"} \u2022 resolu\xE7\xE3o din\xE2mica ativa</small></div>
      ${s("quality",j.settings.quality,[["auto","Auto"],["low","Leve"],["medium","M\xE9dio"],["high","Ultra"]])}</div>
    <div class="set"><div><b>Dire\xE7\xE3o</b><br><small style="opacity:.7">Volante, setas ou inclina\xE7\xE3o do celular</small></div>
      ${s("steermode",j.settings.steer,[["wheel","Volante"],["buttons","Setas"],["tilt","Inclina\xE7\xE3o"]])}</div>
    <div class="set"><div><b>C\xE2mbio</b><br><small style="opacity:.7">Manual D/N/R ou autom\xE1tico (segurar freio parado = r\xE9)</small></div>
      ${s("gearbox",j.settings.gearbox,[["manual","D / N / R"],["auto","Autom\xE1tico"]])}</div>
    <div class="set"><div><b>Hor\xE1rio</b><br><small style="opacity:.7">Ciclo de dia e noite com far\xF3is e ilumina\xE7\xE3o urbana</small></div>
      ${s("timemode",j.settings.time,[["cycle","Ciclo"],["day","Dia"],["dusk","Entardecer"],["night","Noite"]])}</div>
    <div class="set"><div><b>Veloc\xEDmetro</b><br><small style="opacity:.7">Estilo dos mostradores do painel</small></div>
      ${s("gauge",j.settings.gauge,[["analog","Anal\xF3gico"],["digital","Digital"],["sport","Esportivo"],["classic","Cl\xE1ssico"]])}</div>
    <div class="set"><div><b>Cor do painel</b><br><small style="opacity:.7">Cor de destaque da interface</small></div>
      ${s("accent",j.settings.accent,[["amber","\xC2mbar"],["blue","Azul"],["green","Verde"],["red","Vermelho"],["purple","Roxo"]])}</div>
    <div class="set"><div><b>Tamanho dos controles</b></div>
      ${s("hudsize",j.settings.hud,[["small","Pequeno"],["normal","Normal"],["large","Grande"]])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${j.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${s("fps",j.settings.fps?1:0,[[1,"Sim"],[0,"N\xE3o"]])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminh\xE3o de volta para a rua mais pr\xF3xima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">Z/X pisca-pisca \u2022 WASD/setas \u2022 Espa\xE7o freio \u2022 E motor \u2022 R r\xE9 \u2022 N neutro \u2022 P freio de m\xE3o \u2022 L far\xF3is \u2022 H buzina \u2022 C c\xE2mera \u2022 M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao menu</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`}function t1(){let s=bt.hw(Q.x,Q.z);if(s&&!bt.inArea(Q.x,Q.z,0)){let e=s.o;Q.place(s.x-e.dz[s.i]*3.5,s.z+e.dx[s.i]*3.5,Math.atan2(e.dx[s.i],e.dz[s.i]))}else{let e={x:Q.x,z:Q.z};for(let t=0;t<40&&!(bt.resolveCircle(e,2.5,Ga)<=0);t++)e.x+=Ga.x*1.2+(Math.random()-.5),e.z+=Ga.z*1.2+(Math.random()-.5);Q.place(e.x,e.z,Q.h)}Pd(0,!0)}var Up={amber:"#f5a623",blue:"#2f8cff",green:"#22b573",red:"#e3243b",purple:"#9b5cff"},qr=()=>Up[j.settings.accent]||Up.amber;function bd(){let s=qr();document.documentElement.style.setProperty("--red",s),document.documentElement.style.setProperty("--red2",s),document.documentElement.style.setProperty("--hud",{small:.82,normal:1,large:1.18}[j.settings.hud]||1)}function ri(s,e=2600){let t=document.createElement("div");for(t.innerHTML=s,he("toast").appendChild(t);he("toast").children.length>3;)he("toast").firstChild.remove();setTimeout(()=>t.remove(),e)}var xd=0;function Op(s,e,t,n,i,r,a,o){let l=he(s),c=l.getContext("2d"),h=l.width,d=h/2,u=h*.46,f=j.settings.gauge,g=qr();c.clearRect(0,0,h,h);let b=Math.PI*.75,m=Math.PI*2.25,p=w=>b+(m-b)*gi(w/t,0,1);if(c.textAlign="center",c.textBaseline="middle",f==="digital"){c.fillStyle="rgba(6,10,16,0.88)",c.beginPath(),c.arc(d,d,u,0,7),c.fill(),c.lineWidth=3,c.strokeStyle=g,c.stroke();let w=24,T=gi(e/t,0,1);for(let P=0;P<w;P++){let B=b+(m-b)*(P+.5)/w;c.strokeStyle=P/w<T?o&&P/w*t>=o?"#ff3b4e":g:"rgba(255,255,255,0.1)",c.lineWidth=h*.05,c.beginPath(),c.arc(d,d,u*.8,B-.05,B+.05),c.stroke()}c.fillStyle="#e8fff8",c.font=`700 ${h*.24}px monospace`,c.fillText(r,d,d),c.font=`600 ${h*.06}px sans-serif`,c.fillStyle=g,c.fillText(a,d,d+h*.17);return}if(f==="sport"){c.fillStyle="rgba(10,12,16,0.85)",c.beginPath(),c.arc(d,d,u,0,7),c.fill(),c.lineCap="round",c.lineWidth=h*.09,c.strokeStyle="rgba(255,255,255,0.08)",c.beginPath(),c.arc(d,d,u*.78,b,m),c.stroke();let w=c.createLinearGradient(0,h,h,0);w.addColorStop(0,g),w.addColorStop(1,"#ff3b4e"),c.strokeStyle=w,c.beginPath(),c.arc(d,d,u*.78,b,p(e)),c.stroke(),c.lineCap="butt",c.fillStyle="#fff",c.font=`italic 900 ${h*.22}px sans-serif`,c.fillText(r,d,d-h*.02),c.font=`italic 700 ${h*.06}px sans-serif`,c.fillStyle="#9aa7b4",c.fillText(a,d,d+h*.15);return}let x=f==="classic";c.beginPath(),c.arc(d,d,u,0,7);let v=c.createRadialGradient(d,d,u*.2,d,d,u);x?(v.addColorStop(0,"#f4efe2"),v.addColorStop(1,"#d9d0bb")):(v.addColorStop(0,"rgba(30,34,40,0.95)"),v.addColorStop(1,"rgba(8,10,14,0.92)")),c.fillStyle=v,c.fill(),c.lineWidth=h*.035,c.strokeStyle=x?"#b8bcc0":g,c.stroke(),o&&(c.beginPath(),c.arc(d,d,u*.86,p(o),m),c.lineWidth=h*.03,c.strokeStyle="rgba(227,36,59,.85)",c.stroke());let y=x?"#1b1b1b":"#fff";c.fillStyle=y,c.strokeStyle=y,c.font=`${x?"":"italic "}800 ${h*.07}px ${x?"serif":"sans-serif"}`;for(let w=0;w<=t;w+=n/2){let T=p(w),P=w%n===0;c.lineWidth=P?3:1.5,c.beginPath(),c.moveTo(d+Math.cos(T)*u*.9,d+Math.sin(T)*u*.9),c.lineTo(d+Math.cos(T)*u*(P?.76:.82),d+Math.sin(T)*u*(P?.76:.82)),c.stroke(),P&&c.fillText(String(i(w)),d+Math.cos(T)*u*.6,d+Math.sin(T)*u*.6)}let A=p(e);c.strokeStyle=x?"#c0392b":g,c.lineWidth=h*.025,c.lineCap="round",c.beginPath(),c.moveTo(d-Math.cos(A)*u*.1,d-Math.sin(A)*u*.1),c.lineTo(d+Math.cos(A)*u*.86,d+Math.sin(A)*u*.86),c.stroke(),c.lineCap="butt",c.beginPath(),c.arc(d,d,u*.3,0,7),c.fillStyle=x?"#2b2b2b":"#0b0d11",c.fill(),c.fillStyle="#fff",c.font=`italic 900 ${h*.15}px sans-serif`,c.fillText(r,d,d-h*.01),c.font=`italic 700 ${h*.055}px sans-serif`,c.fillStyle=x?"#555":"#9aa7b4",c.fillText(a,d,d+h*.1+(x?h*.12:0))}function n1(s){xd-=s;let e=Q.speedKmh;Op("spdg",e,120,20,r=>r,String(Math.round(e)),"km/h",100);let t=Q.rpm*2500;if(Op("rpmg",t/100,25,5,r=>r,Q.engineOn?Q.gear||"N":"OFF","x100 rpm",21),xd>0)return;xd=.2,he("lvl").textContent="Nv "+j.level,he("money").textContent=En(j.money);let n=Lr(j.level);he("xpbar").style.width=(j.level>=30?100:j.xp/n*100)+"%",he("ic-load").textContent=`${(Q.mass/1e3).toFixed(1)} t`,he("ic-light").classList.toggle("on",Q.lightsOn),he("lightsbtn").classList.toggle("on",Q.lightsOn),he("ic-hand").classList.toggle("on",Ce.hand);let i=j.job;if(i){let r=fn[i.cargo],a=ii?ii.len:0;he("jobtitle").textContent=`${r.icon} ${r.name} \u2022 ${r.t} t`;let o=Ii[i.phase==="pickup"?i.from:i.to].name,l="";if(i.phase==="deliver"){let c=Math.abs(i.tLeft),h=Math.floor(c/60),d=Math.floor(c%60);l=` \u2022 <span class="${i.tLeft<0?"late":""}">\u23F1 ${i.tLeft<0?"-":""}${h}:${String(d).padStart(2,"0")}</span>`}he("jobsub").innerHTML=`${i.phase==="pickup"?"Coletar":"Entregar"}: <b>${o}</b> \u2022 ${(a/1e3).toFixed(1)} km${l}`,he("dist").textContent=a>1e3?(a/1e3).toFixed(1)+" km":Math.round(a)+" m",he("ic-dmg").classList.toggle("hidden",i.phase!=="deliver"),he("dmg").textContent=i.damage.toFixed(0)+"%"}else he("jobtitle").textContent="Sem frete ativo",he("jobsub").innerHTML="Toque em \u{1F4CB} para escolher uma carga",he("dist").textContent="",he("ic-dmg").classList.add("hidden")}var Ed=0,Fc=0,Wr=0,Ic=0,Dc=0,vd=0,zr=0;function Wp(s){if(requestAnimationFrame(Wp),document.hidden)return;let e=(s-Fc)/1e3;if(Fc=s,!(e>0))return;if(e=Math.min(e,.05),Wr+=e,Ic++,Dc+=e,Dc>=1.5){let n=Ic/Dc;r1(n),j.settings.fps&&(he("fps").textContent=`${n.toFixed(0)} FPS \u2022 ${mi} \u2022 ${Di.toFixed(2)}x \u2022 ${Ht.info.render.calls} dc`),Ic=0,Dc=0}if(Md(e),Nt==="title"){zr-=e,zr<=0&&(zr=.5,Oc(j.clock)),Ns.obstacles(md),Ns.update(e,Q,Q._cs||[]),bt.update(e,Wr),Dy(e),ct.engine(0,0,!1),Ht.render(It,Zt);return}if(j.settings.time==="cycle"&&Nt==="drive"&&(j.clock=(j.clock+e/50)%24),zr-=e,zr<=0&&(zr=.5,Oc(j.clock)),Nt==="drive"){Ns.obstacles(md);let n=2;for(let r=0;r<n;r++)Q.update(e/n,yn,bt,md);Q.lastImpact>0&&i1(Q.lastImpact),j.stats.km+=Math.abs(Q.v)*e/1e3;let i=Q._cs||[];Ns.update(e,Q,i),Nt==="drive"&&Nc(e)}bt.update(e,Wr),s1(e),Pd(e),ct.engine(Q.rpm,yn.throttle,Q.engineOn&&Nt==="drive"),n1(e),Ic&1||Xy(),vd+=e,vd>8&&(vd=0,Bt()),Ht.render(It,Zt),Ed>0&&--Ed===0&&It.traverse(n=>{n.material&&[].concat(n.material).forEach(i=>{i.needsUpdate=!0})})}function i1(s){if(j.stats.crashes++,ct.crash(s),navigator.vibrate)try{navigator.vibrate(Math.min(120,s*4))}catch(e){}if(j.job&&j.job.phase==="deliver"){let e=fn[j.job.cargo],t=Math.min(30,s*(e.fragile?.55:.3));j.job.damage=Math.min(100,j.job.damage+t),ri(`\u{1F4A5} Batida! Carga avariada +${t.toFixed(0)}%`,1800)}}function s1(s){let e=zc();if(!e){on.visible=!1,si.visible=!1;return}Ha-=s,Ha<=0&&(ii=pd(Q.x,Q.z,e),Ha=.5),on.visible=Math.hypot(e.zone.x-Q.x,e.zone.z-Q.z)<600,on.position.set(e.zone.x,0,e.zone.z),on.zone.scale.set(e.zone.w,e.zone.d,1);let t=kp(e);on.zone.material.color.setHex(t?4120698:16761856),on.cone.position.y=7+Math.sin(Wr*3)*.8,on.cone.rotation.y=Wr*1.5;let n=null;if(ii)for(let i=1;i<ii.path.length;i++){let r=ii.path[i];if(Math.hypot(r.x-Q.x,r.z-Q.z)>22||i===ii.path.length-1){n=r;break}}if(n&&Ze.mode!==2){si.visible=!0;let i=Math.sin(Q.h),r=Math.cos(Q.h);si.position.set(Q.x+i*Q.model.zf*.5,(Q.def.id==="urbano"?4.2:5.4)+Math.sin(Wr*4)*.12,Q.z+r*Q.model.zf*.5),si.rotation.y=Math.atan2(n.x-Q.x,n.z-Q.z)}else si.visible=!1}function r1(s){let e=window.devicePixelRatio||1,t=Math.min(e,Tt.pr),n=Di;s<27?n=Math.max(Tt.minPr*Math.min(1,e),Di*.88):s>52&&(n=Math.min(t,Di*1.06)),Math.abs(n-Di)>.01&&(Di=n,Ht.setPixelRatio(Di),Ht.setSize(window.innerWidth,window.innerHeight,!1))}function qp(){Ht&&(Ht.setSize(window.innerWidth,window.innerHeight,!1),Zt.aspect=window.innerWidth/window.innerHeight,Zt.updateProjectionMatrix())}window.addEventListener("error",s=>{let e=he("loadmsg");e&&Nt==="loading"&&(e.textContent="Erro: "+s.message)});window.__game={TRUCK:Aa,CARGO:fn,get scene(){return It},get sun(){return an},get renderer(){return Ht},S:j,get rig(){return Q},get state(){return Nt},ctl:Ce,acceptJob:s=>Fp(s),get jobs(){return Us},world:()=>bt,cam:Ze};Ey().catch(s=>{he("loadmsg").textContent="Erro ao iniciar: "+s.message,console.error(s)});})();
