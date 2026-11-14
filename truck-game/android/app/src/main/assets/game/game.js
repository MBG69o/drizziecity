(()=>{var qp=Object.defineProperty,Yp=Object.defineProperties;var $p=Object.getOwnPropertyDescriptors;var Du=Object.getOwnPropertySymbols;var Zp=Object.prototype.hasOwnProperty,Kp=Object.prototype.propertyIsEnumerable;var Uu=(s,e,t)=>e in s?qp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,yn=(s,e)=>{for(var t in e||(e={}))Zp.call(e,t)&&Uu(s,t,e[t]);if(Du)for(var t of Du(e))Kp.call(e,t)&&Uu(s,t,e[t]);return s},Ii=(s,e)=>Yp(s,$p(e));var mh="162";var Jp=0,Ou=1,jp=2;var il=1,gh=2,vi=3,ri=0,Jt=1,ht=2,Gi=0,sr=1,Rn=2,Fu=3,zu=4,Qp=5,ps=100,em=101,tm=102,Bu=103,ku=104,nm=200,im=201,sm=202,rm=203,wc=204,Tc=205,om=206,am=207,lm=208,cm=209,hm=210,um=211,dm=212,fm=213,pm=214,mm=0,gm=1,xm=2,ba=3,_m=4,vm=5,ym=6,bm=7,sl=0,Mm=1,Sm=2,Vi=0,Em=1,wm=2,Tm=3,xh=4,Am=5,Rm=6,Cm=7,Hu="attached",Pm="detached",Pf=300,ar=301,lr=302,Ac=303,Rc=304,rl=306,Mi=1e3,gn=1001,oo=1002,Gt=1003,Ma=1004;var ms=1005;var Ht=1006,eo=1007;var Fn=1008;var Wi=1009,Lm=1010,Im=1011,_h=1012,Lf=1013,ki=1014,Zn=1015,ao=1016,If=1017,Nf=1018,_s=1020,Nm=1021,On=1023,Dm=1024,Um=1025,vs=1026,cr=1027,Df=1028,Uf=1029,Om=1030,Of=1031,Ff=1033,kl=33776,Hl=33777,Gl=33778,Vl=33779,Gu=35840,Vu=35841,Wu=35842,Xu=35843,zf=36196,qu=37492,Yu=37496,$u=37808,Zu=37809,Ku=37810,Ju=37811,ju=37812,Qu=37813,ed=37814,td=37815,nd=37816,id=37817,sd=37818,rd=37819,od=37820,ad=37821,Wl=36492,ld=36494,cd=36495,Fm=36283,hd=36284,ud=36285,dd=36286;var hr=2300,ys=2301,Xl=2302,fd=2400,pd=2401,md=2402,zm=2500;var Bf=0,ol=1,So=2,Bm=3200,km=3201,al=0,Hm=1,Bi="",Ft="srgb",Qt="srgb-linear",vh="display-p3",ll="display-p3-linear",Sa="linear",bt="srgb",Ea="rec709",wa="p3";var Ds=7680;var gd=519,Gm=512,Vm=513,Wm=514,kf=515,Xm=516,qm=517,Ym=518,$m=519,Cc=35044;var xd="300 es",Pc=1035,bi=2e3,Ta=2001,qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=1234567,to=Math.PI/180,ur=180/Math.PI;function zn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function yh(s,e){return(s%e+e)%e}function Zm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Km(s,e,t){return s!==e?(t-s)/(e-s):0}function no(s,e,t){return(1-t)*s+t*e}function Jm(s,e,t,n){return no(s,e,1-Math.exp(-t*n))}function jm(s,e=1){return e-Math.abs(yh(s,e*2)-e)}function Qm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function e0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function t0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function n0(s,e){return s+Math.random()*(e-s)}function i0(s){return s*(.5-Math.random())}function s0(s){s!==void 0&&(_d=s);let e=_d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(s){return s*to}function o0(s){return s*ur}function Lc(s){return(s&s-1)===0&&s!==0}function a0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Aa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function l0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Hf={DEG2RAD:to,RAD2DEG:ur,generateUUID:zn,clamp:Vt,euclideanModulo:yh,mapLinear:Zm,inverseLerp:Km,lerp:no,damp:Jm,pingpong:jm,smoothstep:Qm,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:Lc,ceilPowerOfTwo:a0,floorPowerOfTwo:Aa,setQuaternionFromProperEuler:l0,normalize:pt,denormalize:Kn},oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],p=i[3],m=i[6],v=i[1],_=i[4],y=i[7],R=i[2],E=i[5],T=i[8];return r[0]=o*x+a*v+c*R,r[3]=o*p+a*_+c*E,r[6]=o*m+a*y+c*T,r[1]=l*x+h*v+u*R,r[4]=l*p+h*_+u*E,r[7]=l*m+h*y+u*T,r[2]=d*x+f*v+g*R,r[5]=d*p+f*_+g*E,r[8]=d*m+f*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ql=new $e;function Gf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function c0(){let s=lo("canvas");return s.style.display="block",s}var vd={};function Vf(s){s in vd||(vd[s]=!0,console.warn(s))}var yd=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bd=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Go={[Qt]:{transfer:Sa,primaries:Ea,toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:bt,primaries:Ea,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ll]:{transfer:Sa,primaries:wa,toReference:s=>s.applyMatrix3(bd),fromReference:s=>s.applyMatrix3(yd)},[vh]:{transfer:bt,primaries:wa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(bd),fromReference:s=>s.applyMatrix3(yd).convertLinearToSRGB()}},h0=new Set([Qt,ll]),dt={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!h0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Go[e].toReference,i=Go[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Go[s].primaries},getTransfer:function(s){return s===Bi?Sa:Go[s].transfer}};function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Us,Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=lo("canvas")),Us.width=e.width,Us.height=e.height;let n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=rr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},u0=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($l(i[o].image)):r.push($l(i[o]))}else r=$l(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $l(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ra.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var d0=0,jt=class s extends qi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=gn,i=gn,r=Ht,o=Fn,a=On,c=Wi,l=s.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=zn(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Pf;jt.DEFAULT_ANISOTROPY=1;var mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(f+1)/2,R=(m+1)/2,E=(h+d)/4,T=(u+x)/4,A=(g+p)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=T/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=A/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=A/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nc=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let R=Math.sqrt(_),E=Math.atan2(R,m*v);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}let y=a*v;if(c=c*p+d*y,l=l*p+f*y,h=h*p+g*y,u=u*p+x*y,p===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zl=new N,Md=new Cn,Bn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Wo.subVectors(this.max,Wr),Os.subVectors(e.a,Wr),Fs.subVectors(e.b,Wr),zs.subVectors(e.c,Wr),Ni.subVectors(Fs,Os),Di.subVectors(zs,Fs),as.subVectors(Os,zs);let t=[0,-Ni.z,Ni.y,0,-Di.z,Di.y,0,-as.z,as.y,Ni.z,0,-Ni.x,Di.z,0,-Di.x,as.z,0,-as.x,-Ni.y,Ni.x,0,-Di.y,Di.x,0,-as.y,as.x,0];return!Kl(t,Os,Fs,zs,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,Os,Fs,zs,Wo))?!1:(Xo.crossVectors(Ni,Di),t=[Xo.x,Xo.y,Xo.z],Kl(t,Os,Fs,zs,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,Vo=new Bn,Os=new N,Fs=new N,zs=new N,Ni=new N,Di=new N,as=new N,Wr=new N,Wo=new N,Xo=new N,ls=new N;function Kl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ls.fromArray(s,r);let a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var f0=new Bn,Xr=new N,Jl=new N,Pn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):f0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Jl)),this.expandByPoint(Xr.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new N,jl=new N,qo=new N,Ui=new N,Ql=new N,Yo=new N,ec=new N,dr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jl.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(jl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Ui.dot(this.direction),c=-Ui.dot(qo),l=Ui.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jl).addScaledVector(qo,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){Ql.subVectors(t,e),Yo.subVectors(n,e),ec.crossVectors(Ql,Yo);let o=this.direction.dot(ec),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let c=a*this.direction.dot(Yo.crossVectors(Ui,Yo));if(c<0)return null;let l=a*this.direction.dot(Ql.cross(Ui));if(l<0||c+l>o)return null;let h=-a*Ui.dot(ec);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,p)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,t,n){let i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Oi.crossVectors(n,Tn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Oi.crossVectors(n,Tn)),Oi.normalize(),$o.crossVectors(Tn,Oi),i[0]=Oi.x,i[4]=$o.x,i[8]=Tn.x,i[1]=Oi.y,i[5]=$o.y,i[9]=Tn.y,i[2]=Oi.z,i[6]=$o.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],_=n[7],y=n[11],R=n[15],E=i[0],T=i[4],A=i[8],z=i[12],M=i[1],S=i[5],I=i[9],D=i[13],w=i[2],k=i[6],P=i[10],q=i[14],Y=i[3],H=i[7],W=i[11],se=i[15];return r[0]=o*E+a*M+c*w+l*Y,r[4]=o*T+a*S+c*k+l*H,r[8]=o*A+a*I+c*P+l*W,r[12]=o*z+a*D+c*q+l*se,r[1]=h*E+u*M+d*w+f*Y,r[5]=h*T+u*S+d*k+f*H,r[9]=h*A+u*I+d*P+f*W,r[13]=h*z+u*D+d*q+f*se,r[2]=g*E+x*M+p*w+m*Y,r[6]=g*T+x*S+p*k+m*H,r[10]=g*A+x*I+p*P+m*W,r[14]=g*z+x*D+p*q+m*se,r[3]=v*E+_*M+y*w+R*Y,r[7]=v*T+_*S+y*k+R*H,r[11]=v*A+_*I+y*P+R*W,r[15]=v*z+_*D+y*q+R*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+p*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,_=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,y=h*x*l-g*u*l+g*a*f-o*x*f-h*a*m+o*u*m,R=g*u*c-h*x*c-g*a*d+o*x*d+h*a*p-o*u*p,E=t*v+n*_+i*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=v*T,e[1]=(x*d*r-u*p*r-x*i*f+n*p*f+u*i*m-n*d*m)*T,e[2]=(a*p*r-x*c*r+x*i*l-n*p*l-a*i*m+n*c*m)*T,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*T,e[4]=_*T,e[5]=(h*p*r-g*d*r+g*i*f-t*p*f-h*i*m+t*d*m)*T,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*m-t*c*m)*T,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*T,e[8]=y*T,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*m-t*u*m)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*m+t*a*m)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*T,e[12]=R*T,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*p+t*u*p)*T,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*p-t*a*p)*T,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,v=c*l,_=c*h,y=c*u,R=n.x,E=n.y,T=n.z;return i[0]=(1-(x+m))*R,i[1]=(f+y)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+m))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(p-v)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Bs.set(i[0],i[1],i[2]).length(),o=Bs.set(i[4],i[5],i[6]).length(),a=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);let l=1/r,h=1/o,u=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=bi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===bi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ta)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h,g,x;if(a===bi)g=(o+r)*u,x=-2*u;else if(a===Ta)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new N,Yn=new Ve,p0=new N(0,0,0),m0=new N(1,1,1),Oi=new N,$o=new N,Tn=new N,Sd=new Ve,Ed=new Cn,bn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},g0=0,wd=new N,ks=new Cn,mi=new Ve,Zo=new N,qr=new N,x0=new N,_0=new Cn,Td=new N(1,0,0),Ad=new N(0,1,0),Rd=new N(0,0,1),v0={type:"added"},y0={type:"removed"},tc={type:"childadded",child:null},nc={type:"childremoved",child:null},yt=class s extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new N,t=new bn,n=new Cn,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new $e}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return wd.copy(e).applyQuaternion(this.quaternion),this.position.add(wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(qr,Zo,this.up):mi.lookAt(Zo,qr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(mi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v0),tc.child=e,this.dispatchEvent(tc),tc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,x0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new N(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new N,gi=new N,ic=new N,xi=new N,Hs=new N,Gs=new N,Cd=new N,sc=new N,rc=new N,oc=new N,xs=class s{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),gi.subVectors(n,t),ic.subVectors(e,t);let o=$n.dot($n),a=$n.dot(gi),c=$n.dot(ic),l=gi.dot(gi),h=gi.dot(ic),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),gi.subVectors(e,t),$n.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),$n.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Hs.subVectors(i,n),Gs.subVectors(r,n),sc.subVectors(e,n);let c=Hs.dot(sc),l=Gs.dot(sc);if(c<=0&&l<=0)return t.copy(n);rc.subVectors(e,i);let h=Hs.dot(rc),u=Gs.dot(rc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Hs,o);oc.subVectors(e,r);let f=Hs.dot(oc),g=Gs.dot(oc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Gs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Cd.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Cd,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function ac(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=yh(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ac(o,r,e+1/3),this.g=ac(o,r,e),this.b=ac(o,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return dt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Vt(ln.r*255,0,255))*65536+Math.round(Vt(ln.g*255,0,255))*256+Math.round(Vt(ln.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,i=ln.g,r=ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Ft){dt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,i=ln.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Ko);let n=no(Fi.h,Ko.h,t),i=no(Fi.s,Ko.s,t),r=no(Fi.l,Ko.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new de;de.NAMES=Wf;var b0=0,cn=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=sr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rt=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new N,Jo=new oe,Xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}};var fr=class extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},M0=0,Un=new Ve,lc=new yt,Vs=new N,An=new Bn,Yr=new Bn,Kt=new N,Mt=class s extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?pr:fr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(An.min,Yr.min),An.expandByPoint(Kt),Kt.addVectors(An.max,Yr.max),An.expandByPoint(Kt)):(An.expandByPoint(Yr.min),An.expandByPoint(Yr.max))}An.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Kt.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(e,l),Kt.add(Vs)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new N,c[A]=new N;let l=new N,h=new N,u=new N,d=new oe,f=new oe,g=new oe,x=new N,p=new N;function m(A,z,M){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,z),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[A].add(x),a[z].add(x),a[M].add(x),c[A].add(p),c[z].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,z=v.length;A<z;++A){let M=v[A],S=M.start,I=M.count;for(let D=S,w=S+I;D<w;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let _=new N,y=new N,R=new N,E=new N;function T(A){R.fromBufferAttribute(i,A),E.copy(R);let z=a[A];_.copy(z),_.sub(R.multiplyScalar(R.dot(z))).normalize(),y.crossVectors(E,z);let S=y.dot(c[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,S)}for(let A=0,z=v.length;A<z;++A){let M=v[A],S=M.start,I=M.count;for(let D=S,w=S+I;D<w;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pd=new Ve,cs=new dr,jo=new Pn,Ld=new N,Ws=new N,Xs=new N,qs=new N,cc=new N,Qo=new N,ea=new oe,ta=new oe,na=new oe,Id=new N,Nd=new N,Dd=new N,ia=new N,sa=new N,ke=class extends yt{constructor(e=new Mt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(cc.fromBufferAttribute(u,e),o?Qo.addScaledVector(cc,h):Qo.addScaledVector(cc.sub(t),h))}t.add(Qo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(jo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(jo,Ld)===null||cs.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Pd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Pd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,R=_;y<R;y+=3){let E=a.getX(y),T=a.getX(y+1),A=a.getX(y+2);i=ra(this,m,e,n,l,h,u,E,T,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);i=ra(this,o,e,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,R=_;y<R;y+=3){let E=y,T=y+1,A=y+2;i=ra(this,m,e,n,l,h,u,E,T,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,_=p+1,y=p+2;i=ra(this,o,e,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function S0(s,e,t,n,i,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ri,a),c===null)return null;sa.copy(a),sa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:s}}function ra(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ws),s.getVertexPosition(c,Xs),s.getVertexPosition(l,qs);let h=S0(s,e,t,n,Ws,Xs,qs,ia);if(h){i&&(ea.fromBufferAttribute(i,a),ta.fromBufferAttribute(i,c),na.fromBufferAttribute(i,l),h.uv=xs.getInterpolation(ia,Ws,Xs,qs,ea,ta,na,new oe)),r&&(ea.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,c),na.fromBufferAttribute(r,l),h.uv1=xs.getInterpolation(ia,Ws,Xs,qs,ea,ta,na,new oe)),o&&(Id.fromBufferAttribute(o,a),Nd.fromBufferAttribute(o,c),Dd.fromBufferAttribute(o,l),h.normal=xs.getInterpolation(ia,Ws,Xs,qs,Id,Nd,Dd,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};xs.getNormal(Ws,Xs,qs,u.normal),h.face=u}return h}var Mn=class s extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function g(x,p,m,v,_,y,R,E,T,A,z){let M=y/T,S=R/A,I=y/2,D=R/2,w=E/2,k=T+1,P=A+1,q=0,Y=0,H=new N;for(let W=0;W<P;W++){let se=W*S-D;for(let Me=0;Me<k;Me++){let Be=Me*M-I;H[x]=Be*v,H[p]=se*_,H[m]=w,l.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[m]=E>0?1:-1,h.push(H.x,H.y,H.z),u.push(Me/T),u.push(1-W/A),q+=1}}for(let W=0;W<A;W++)for(let se=0;se<T;se++){let Me=d+se+k*W,Be=d+se+k*(W+1),j=d+(se+1)+k*(W+1),ae=d+(se+1)+k*W;c.push(Me,Be,ae),c.push(Be,j,ae),Y+=6}a.addGroup(f,Y,z),f+=Y,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(s){let e={};for(let t=0;t<s.length;t++){let n=mr(s[t]);for(let i in n)e[i]=n[i]}return e}function E0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xf(s){return s.getRenderTarget()===null?s.outputColorSpace:dt.workingColorSpace}var w0={clone:mr,merge:mn},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ia=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zi=new N,Ud=new oe,Od=new oe,Wt=class extends Ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Od),t.subVectors(Od,Ud)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,$s=1,Dc=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wt(Ys,$s,e,t);i.layers=this.layers,this.add(i);let r=new Wt(Ys,$s,e,t);r.layers=this.layers,this.add(r);let o=new Wt(Ys,$s,e,t);o.layers=this.layers,this.add(o);let a=new Wt(Ys,$s,e,t);a.layers=this.layers,this.add(a);let c=new Wt(Ys,$s,e,t);c.layers=this.layers,this.add(c);let l=new Wt(Ys,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends jt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uc=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Na(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mn(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Gi});r.uniforms.tEquirect.value=t;let o=new ke(i,r),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Ht),new Dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},hc=new N,R0=new N,C0=new $e,yi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hc.subVectors(n,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||C0.getNormalMatrix(e),i=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Pn,oa=new N,co=class{constructor(e=new yi,t=new yi,n=new yi,i=new yi,r=new yi,o=new yi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],p=i[11],m=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,p-f,y-m).normalize(),n[1].setComponents(c+r,d+l,p+f,y+m).normalize(),n[2].setComponents(c+o,d+h,p+g,y+v).normalize(),n[3].setComponents(c-o,d-h,p-g,y-v).normalize(),n[4].setComponents(c-a,d-u,p-x,y-_).normalize(),t===bi)n[5].setComponents(c+a,d+u,p+x,y+_).normalize();else if(t===Ta)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function P0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];t?s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var zt=class s extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let _=0;_<l;_++){let y=_*u-r;g.push(y,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let _=v+l*m,y=v+l*(m+1),R=v+1+l*(m+1),E=v+1+l*m;f.push(_,y,E),f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`
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
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Pg=`struct PhysicalMaterial {
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
}`,Lg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gx=`float getShadowMask() {
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
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,zx=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,Zx=`#define MATCAP
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
}`,Kx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,jx=`#define NORMAL
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
}`,Qx=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,t_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
}`,i_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:L0,alphahash_pars_fragment:I0,alphamap_fragment:N0,alphamap_pars_fragment:D0,alphatest_fragment:U0,alphatest_pars_fragment:O0,aomap_fragment:F0,aomap_pars_fragment:z0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:Z0,color_fragment:K0,color_pars_fragment:J0,color_pars_vertex:j0,color_vertex:Q0,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:og,colorspace_fragment:ag,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:hg,envmap_pars_fragment:ug,envmap_pars_vertex:dg,envmap_physical_pars_fragment:Eg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:xg,gradientmap_pars_fragment:_g,lightmap_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:wg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Lg,lights_fragment_maps:Ig,lights_fragment_end:Ng,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Fg,map_fragment:zg,map_pars_fragment:Bg,map_particle_fragment:kg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:Yg,morphtarget_vertex:$g,normal_fragment_begin:Zg,normal_fragment_maps:Kg,normal_pars_fragment:Jg,normal_pars_vertex:jg,normal_vertex:Qg,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:hx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:xx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:yx,specularmap_fragment:bx,specularmap_pars_fragment:Mx,tonemapping_fragment:Sx,tonemapping_pars_fragment:Ex,transmission_fragment:wx,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:Rx,uv_vertex:Cx,worldpos_vertex:Px,background_vert:Lx,background_frag:Ix,backgroundCube_vert:Nx,backgroundCube_frag:Dx,cube_vert:Ux,cube_frag:Ox,depth_vert:Fx,depth_frag:zx,distanceRGBA_vert:Bx,distanceRGBA_frag:kx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:qx,meshlambert_vert:Yx,meshlambert_frag:$x,meshmatcap_vert:Zx,meshmatcap_frag:Kx,meshnormal_vert:Jx,meshnormal_frag:jx,meshphong_vert:Qx,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:o_,shadow_vert:a_,shadow_frag:l_,sprite_vert:c_,sprite_frag:h_},ge={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},si={basic:{uniforms:mn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:mn([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:mn([ge.lights,ge.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};si.physical={uniforms:mn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var aa={r:0,b:0,g:0},us=new bn,u_=new Ve;function d_(s,e,t,n,i,r,o){let a=new de(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===rl)?(h===void 0&&(h=new ke(new Mn(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:mr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),us.copy(m.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(us)),h.material.toneMapped=dt.getTransfer(_.colorSpace)!==bt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ke(new zt(2,2),new oi({name:"BackgroundMaterial",uniforms:mr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=dt.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(aa,Xf(s)),n.buffers.color.setClear(aa.r,aa.g,aa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function f_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function u(w,k,P,q,Y){let H=!1;if(o){let W=x(q,P,k);l!==W&&(l=W,f(l.object)),H=m(w,q,P,Y),H&&v(w,q,P,Y)}else{let W=k.wireframe===!0;(l.geometry!==q.id||l.program!==P.id||l.wireframe!==W)&&(l.geometry=q.id,l.program=P.id,l.wireframe=W,H=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,A(w,k,P,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(w){return n.isWebGL2?s.bindVertexArray(w):r.bindVertexArrayOES(w)}function g(w){return n.isWebGL2?s.deleteVertexArray(w):r.deleteVertexArrayOES(w)}function x(w,k,P){let q=P.wireframe===!0,Y=a[w.id];Y===void 0&&(Y={},a[w.id]=Y);let H=Y[k.id];H===void 0&&(H={},Y[k.id]=H);let W=H[q];return W===void 0&&(W=p(d()),H[q]=W),W}function p(w){let k=[],P=[],q=[];for(let Y=0;Y<i;Y++)k[Y]=0,P[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:P,attributeDivisors:q,object:w,attributes:{},index:null}}function m(w,k,P,q){let Y=l.attributes,H=k.attributes,W=0,se=P.getAttributes();for(let Me in se)if(se[Me].location>=0){let j=Y[Me],ae=H[Me];if(ae===void 0&&(Me==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),Me==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;W++}return l.attributesNum!==W||l.index!==q}function v(w,k,P,q){let Y={},H=k.attributes,W=0,se=P.getAttributes();for(let Me in se)if(se[Me].location>=0){let j=H[Me];j===void 0&&(Me==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),Me==="instanceColor"&&w.instanceColor&&(j=w.instanceColor));let ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),Y[Me]=ae,W++}l.attributes=Y,l.attributesNum=W,l.index=q}function _(){let w=l.newAttributes;for(let k=0,P=w.length;k<P;k++)w[k]=0}function y(w){R(w,0)}function R(w,k){let P=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;P[w]=1,q[w]===0&&(s.enableVertexAttribArray(w),q[w]=1),Y[w]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,k),Y[w]=k)}function E(){let w=l.newAttributes,k=l.enabledAttributes;for(let P=0,q=k.length;P<q;P++)k[P]!==w[P]&&(s.disableVertexAttribArray(P),k[P]=0)}function T(w,k,P,q,Y,H,W){W===!0?s.vertexAttribIPointer(w,k,P,Y,H):s.vertexAttribPointer(w,k,P,q,Y,H)}function A(w,k,P,q){if(n.isWebGL2===!1&&(w.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Y=q.attributes,H=P.getAttributes(),W=k.defaultAttributeValues;for(let se in H){let Me=H[se];if(Me.location>=0){let Be=Y[se];if(Be===void 0&&(se==="instanceMatrix"&&w.instanceMatrix&&(Be=w.instanceMatrix),se==="instanceColor"&&w.instanceColor&&(Be=w.instanceColor)),Be!==void 0){let j=Be.normalized,ae=Be.itemSize,Se=t.get(Be);if(Se===void 0)continue;let Ie=Se.buffer,Te=Se.type,we=Se.bytesPerElement,qe=n.isWebGL2===!0&&(Te===s.INT||Te===s.UNSIGNED_INT||Be.gpuType===Lf);if(Be.isInterleavedBufferAttribute){let Pe=Be.data,U=Pe.stride,ue=Be.offset;if(Pe.isInstancedInterleavedBuffer){for(let ee=0;ee<Me.locationSize;ee++)R(Me.location+ee,Pe.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ee=0;ee<Me.locationSize;ee++)y(Me.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ee=0;ee<Me.locationSize;ee++)T(Me.location+ee,ae/Me.locationSize,Te,j,U*we,(ue+ae/Me.locationSize*ee)*we,qe)}else{if(Be.isInstancedBufferAttribute){for(let Pe=0;Pe<Me.locationSize;Pe++)R(Me.location+Pe,Be.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Pe=0;Pe<Me.locationSize;Pe++)y(Me.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Pe=0;Pe<Me.locationSize;Pe++)T(Me.location+Pe,ae/Me.locationSize,Te,j,ae*we,ae/Me.locationSize*Pe*we,qe)}}else if(W!==void 0){let j=W[se];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Me.location,j);break;case 3:s.vertexAttrib3fv(Me.location,j);break;case 4:s.vertexAttrib4fv(Me.location,j);break;default:s.vertexAttrib1fv(Me.location,j)}}}}E()}function z(){I();for(let w in a){let k=a[w];for(let P in k){let q=k[P];for(let Y in q)g(q[Y].object),delete q[Y];delete k[P]}delete a[w]}}function M(w){if(a[w.id]===void 0)return;let k=a[w.id];for(let P in k){let q=k[P];for(let Y in q)g(q[Y].object),delete q[Y];delete k[P]}delete a[w.id]}function S(w){for(let k in a){let P=a[k];if(P[w.id]===void 0)continue;let q=P[w.id];for(let Y in q)g(q[Y].object),delete q[Y];delete P[w.id]}}function I(){D(),h=!0,l!==c&&(l=c,f(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:y,disableUnusedAttributes:E}}function p_(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function m_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),R=_&&y,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:E}}function g_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new yi,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,_=v*4,y=m.clippingState||null;c.value=y,y=h(g,d,_,f);for(let R=0;R!==_;++R)y[R]=t[R];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function x_(s){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=ar:a===Rc&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ac||a===Rc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Uc(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var gr=class extends Ia{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tr=4,Fd=[.125,.215,.35,.446,.526,.582],gs=20,uc=new gr,zd=new de,dc=null,fc=0,pc=0,fs=(1+Math.sqrt(5))/2,Zs=1/fs,Bd=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,fs,Zs),new N(0,fs,-Zs),new N(Zs,0,fs),new N(-Zs,0,fs),new N(fs,Zs,0),new N(-fs,Zs,0)],xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,fc,pc),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ao,format:On,colorSpace:Qt,depthBuffer:!1},i=kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=__(r)),this._blurMaterial=v_(r,e,t)}return i}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,i){let a=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zd),h.toneMapping=Vi,h.autoClear=!1;let f=new rt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new ke(new Mn,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(zd),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;la(i,v*_,m>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ar||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Bd[(i-1)%Bd.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):gs;p>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);let m=[],v=0;for(let T=0;T<gs;++T){let A=T/x,z=Math.exp(-A*A/2);m.push(z),T===0?v+=z:T<p&&(v+=2*z)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[i],R=3*y*(i>_-tr?i-_+tr:0),E=4*(this._cubeSize-y);la(t,R,E,3*y,2*y),c.setRenderTarget(t),c.render(u,uc)}};function __(s){let e=[],t=[],n=[],i=s,r=s-tr+1+Fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-tr?c=Fd[o-s+tr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),_=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,A=E>2?0:-1,z=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(z,x*g*E),_.set(d,p*g*E);let M=[E,E,E,E,E,E];y.set(M,m*g*E)}let R=new Mt;R.setAttribute("position",new Xt(v,x)),R.setAttribute("uv",new Xt(_,p)),R.setAttribute("faceIndex",new Xt(y,m)),e.push(R),i>tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kd(s,e,t){let n=new Si(s,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function v_(s,e,t){let n=new Float32Array(gs),i=new N(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Hd(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Gd(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function y_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ac||c===Rc,h=c===ar||c===lr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new xr(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new xr(s));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function b_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M_(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let R=v[_+0],E=v[_+1],T=v[_+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let R=_+0,E=_+1,T=_+2;d.push(R,E,E,T,T,R)}}else return;let p=new(Gf(d)?pr:fr)(d,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function S_(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let m=0;for(let v=0;v<x;v++)m+=g[v];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function E_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w_(s,e){return s[0]-e[0]}function T_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function A_(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],E=0;p===!0&&(E=1),m===!0&&(E=2),v===!0&&(E=3);let T=h.attributes.position.count*E,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let z=new Float32Array(T*A*4*g),M=new Pa(z,T,A,g);M.type=Zn,M.needsUpdate=!0;let S=E*4;for(let D=0;D<g;D++){let w=_[D],k=y[D],P=R[D],q=T*A*4*D;for(let Y=0;Y<w.count;Y++){let H=Y*S;p===!0&&(o.fromBufferAttribute(w,Y),z[q+H+0]=o.x,z[q+H+1]=o.y,z[q+H+2]=o.z,z[q+H+3]=0),m===!0&&(o.fromBufferAttribute(k,Y),z[q+H+4]=o.x,z[q+H+5]=o.y,z[q+H+6]=o.z,z[q+H+7]=0),v===!0&&(o.fromBufferAttribute(P,Y),z[q+H+8]=o.x,z[q+H+9]=o.y,z[q+H+10]=o.z,z[q+H+11]=P.itemSize===4?o.w:1)}}x={count:g,texture:M,size:new oe(T,A)},r.set(h,x),h.addEventListener("dispose",I)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let p=0;for(let v=0;v<d.length;v++)p+=d[v];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let y=g[_];y[0]=_,y[1]=d[_]}g.sort(T_);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(w_);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let y=a[_],R=y[0],E=y[1];R!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),p&&h.getAttribute("morphNormal"+_)!==p[R]&&h.setAttribute("morphNormal"+_,p[R]),i[_]=E,m+=E):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function R_(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Da=class extends jt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:vs,h!==vs&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=ki),n===void 0&&h===cr&&(n=_s),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yf=new jt,$f=new Da(1,1);$f.compareFunction=kf;var Zf=new Pa,Kf=new Nc,Jf=new Na,Vd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function wr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Vd[i];if(r===void 0&&(r=new Float32Array(i),Vd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cl(s,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function C_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function I_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function N_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Yd.set(n),s.uniformMatrix2fv(this.addr,!1,Yd),Yt(t,n)}}function D_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;qd.set(n),s.uniformMatrix3fv(this.addr,!1,qd),Yt(t,n)}}function U_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Xd.set(n),s.uniformMatrix4fv(this.addr,!1,Xd),Yt(t,n)}}function O_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function F_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function B_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function k_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function H_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function G_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function V_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function W_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?$f:Yf;t.setTexture2D(e||r,i)}function X_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kf,i)}function q_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jf,i)}function Y_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zf,i)}function $_(s){switch(s){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return N_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return z_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function Z_(s,e){s.uniform1fv(this.addr,e)}function K_(s,e){let t=wr(e,this.size,2);s.uniform2fv(this.addr,t)}function J_(s,e){let t=wr(e,this.size,3);s.uniform3fv(this.addr,t)}function j_(s,e){let t=wr(e,this.size,4);s.uniform4fv(this.addr,t)}function Q_(s,e){let t=wr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ev(s,e){let t=wr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tv(s,e){let t=wr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nv(s,e){s.uniform1iv(this.addr,e)}function iv(s,e){s.uniform2iv(this.addr,e)}function sv(s,e){s.uniform3iv(this.addr,e)}function rv(s,e){s.uniform4iv(this.addr,e)}function ov(s,e){s.uniform1uiv(this.addr,e)}function av(s,e){s.uniform2uiv(this.addr,e)}function lv(s,e){s.uniform3uiv(this.addr,e)}function cv(s,e){s.uniform4uiv(this.addr,e)}function hv(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yf,r[o])}function uv(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kf,r[o])}function dv(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jf,r[o])}function fv(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zf,r[o])}function pv(s){switch(s){case 5126:return Z_;case 35664:return K_;case 35665:return J_;case 35666:return j_;case 35674:return Q_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function $d(s,e){s.seq.push(e),s.map[e.id]=e}function mv(s,e,t){let n=s.name,i=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),o=mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){$d(t,l===void 0?new Oc(a,s,e):new Fc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new zc(a),$d(t,u)),t=u}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);mv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Zd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var gv=37297,xv=0;function _v(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function vv(s){let e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(s),n;switch(e===t?n="":e===wa&&t===Ea?n="LinearDisplayP3ToLinearSRGB":e===Ea&&t===wa&&(n="LinearSRGBToLinearDisplayP3"),s){case Qt:case ll:return[n,"LinearTransferOETF"];case Ft:case vh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Kd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+_v(s.getShaderSource(e),o)}else return i}function yv(s,e){let t=vv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bv(s,e){let t;switch(e){case Em:t="Linear";break;case wm:t="Reinhard";break;case Tm:t="OptimizedCineon";break;case xh:t="ACESFilmic";break;case Rm:t="AgX";break;case Cm:t="Neutral";break;case Am:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(nr).join(`
`)}function Sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Ev(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function nr(s){return s!==""}function Jd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(s){return s.replace(Tv,Rv)}var Av=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rv(s,e){let t=Qe[e];if(t===void 0){let n=Av.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(s){return s.replace(Cv,Pv)}function Pv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ef(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Lv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===il?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Iv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Dv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ov(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Lv(t),l=Iv(t),h=Nv(t),u=Dv(t),d=Uv(t),f=t.isWebGL2?"":Mv(t),g=Sv(t),x=Ev(r),p=i.createProgram(),m,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(nr).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(nr).join(`
`),v.length>0&&(v+=`
`)):(m=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),v=[f,ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Vi?bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Bc(o),o=Jd(o,t),o=jd(o,t),a=Bc(a),a=Jd(a,t),a=jd(a,t),o=Qd(o),a=Qd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=_+m+o,R=_+v+a,E=Zd(i,i.VERTEX_SHADER,y),T=Zd(i,i.FRAGMENT_SHADER,R);i.attachShader(p,E),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function A(I){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p).trim(),w=i.getShaderInfoLog(E).trim(),k=i.getShaderInfoLog(T).trim(),P=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(P=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,E,T);else{let Y=Kd(i,E,"vertex"),H=Kd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+Y+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(w===""||k==="")&&(q=!1);q&&(I.diagnostics={runnable:P,programLog:D,vertexShader:{log:w,prefix:m},fragmentShader:{log:k,prefix:v}})}i.deleteShader(E),i.deleteShader(T),z=new or(i,p),M=wv(i,p)}let z;this.getUniforms=function(){return z===void 0&&A(this),z};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(p,gv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}var Fv=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=Fv++,this.code=e,this.usedTimes=0}};function zv(s,e,t,n,i,r,o){let a=new La,c=new kc,l=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,g=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,D,w){let k=D.fog,P=w.geometry,q=M.isMeshStandardMaterial?D.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),H=Y&&Y.mapping===rl?Y.image.height:null,W=x[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let se=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Me=se!==void 0?se.length:0,Be=0;P.morphAttributes.position!==void 0&&(Be=1),P.morphAttributes.normal!==void 0&&(Be=2),P.morphAttributes.color!==void 0&&(Be=3);let j,ae,Se,Ie;if(W){let xt=si[W];j=xt.vertexShader,ae=xt.fragmentShader}else j=M.vertexShader,ae=M.fragmentShader,c.update(M),Se=c.getVertexShaderID(M),Ie=c.getFragmentShaderID(M);let Te=s.getRenderTarget(),we=w.isInstancedMesh===!0,qe=w.isBatchedMesh===!0,Pe=!!M.map,U=!!M.matcap,ue=!!Y,ee=!!M.aoMap,he=!!M.lightMap,ne=!!M.bumpMap,F=!!M.normalMap,ie=!!M.displacementMap,le=!!M.emissiveMap,ve=!!M.metalnessMap,L=!!M.roughnessMap,b=M.anisotropy>0,V=M.clearcoat>0,O=M.iridescence>0,te=M.sheen>0,re=M.transmission>0,We=b&&!!M.anisotropyMap,Fe=V&&!!M.clearcoatMap,me=V&&!!M.clearcoatNormalMap,xe=V&&!!M.clearcoatRoughnessMap,Xe=O&&!!M.iridescenceMap,fe=O&&!!M.iridescenceThicknessMap,Ut=te&&!!M.sheenColorMap,tt=te&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,Le=!!M.specularColorMap,Ne=!!M.specularIntensityMap,ct=re&&!!M.transmissionMap,Ze=re&&!!M.thicknessMap,Et=!!M.gradientMap,B=!!M.alphaMap,ye=M.alphaTest>0,Z=!!M.alphaHash,pe=!!M.extensions,be=Vi;M.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(be=s.toneMapping);let st={isWebGL2:u,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:ae,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:qe,instancing:we,instancingColor:we&&w.instanceColor!==null,instancingMorph:we&&w.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Qt,alphaToCoverage:!!M.alphaToCoverage,map:Pe,matcap:U,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:he,bumpMap:ne,normalMap:F,displacementMap:f&&ie,emissiveMap:le,normalMapObjectSpace:F&&M.normalMapType===Hm,normalMapTangentSpace:F&&M.normalMapType===al,metalnessMap:ve,roughnessMap:L,anisotropy:b,anisotropyMap:We,clearcoat:V,clearcoatMap:Fe,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:O,iridescenceMap:Xe,iridescenceThicknessMap:fe,sheen:te,sheenColorMap:Ut,sheenRoughnessMap:tt,specularMap:Ue,specularColorMap:Le,specularIntensityMap:Ne,transmission:re,transmissionMap:ct,thicknessMap:Ze,gradientMap:Et,opaque:M.transparent===!1&&M.blending===sr&&M.alphaToCoverage===!1,alphaMap:B,alphaTest:ye,alphaHash:Z,combine:M.combine,mapUv:Pe&&p(M.map.channel),aoMapUv:ee&&p(M.aoMap.channel),lightMapUv:he&&p(M.lightMap.channel),bumpMapUv:ne&&p(M.bumpMap.channel),normalMapUv:F&&p(M.normalMap.channel),displacementMapUv:ie&&p(M.displacementMap.channel),emissiveMapUv:le&&p(M.emissiveMap.channel),metalnessMapUv:ve&&p(M.metalnessMap.channel),roughnessMapUv:L&&p(M.roughnessMap.channel),anisotropyMapUv:We&&p(M.anisotropyMap.channel),clearcoatMapUv:Fe&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&p(M.sheenRoughnessMap.channel),specularMapUv:Ue&&p(M.specularMap.channel),specularColorMapUv:Le&&p(M.specularColorMap.channel),specularIntensityMapUv:Ne&&p(M.specularIntensityMap.channel),transmissionMapUv:ct&&p(M.transmissionMap.channel),thicknessMapUv:Ze&&p(M.thicknessMap.channel),alphaMapUv:B&&p(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(F||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!P.attributes.uv&&(Pe||B),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ht,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function v(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function R(M){let S=x[M.type],I;if(S){let D=si[S];I=w0.clone(D.uniforms)}else I=M.uniforms;return I}function E(M,S){let I;for(let D=0,w=h.length;D<w;D++){let k=h[D];if(k.cacheKey===S){I=k,++I.usedTimes;break}}return I===void 0&&(I=new Ov(s,S,M,r),h.push(I)),I}function T(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:z}}function Bv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function kv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function nf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||kv),n.length>1&&n.sort(d||tf),i.length>1&&i.sort(d||tf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Hv(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new nf,s.set(n,[o])):i>=r.length?(o=new nf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new de};break;case"SpotLight":t={position:new N,direction:new N,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function Vv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Wv=0;function Xv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qv(s,e){let t=new Gv,n=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);let r=new N,o=new Ve,a=new Ve;function c(h,u){let d=0,f=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let x=0,p=0,m=0,v=0,_=0,y=0,R=0,E=0,T=0,A=0,z=0;h.sort(Xv);let M=u===!0?Math.PI:1;for(let I=0,D=h.length;I<D;I++){let w=h[I],k=w.color,P=w.intensity,q=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=k.r*P*M,f+=k.g*P*M,g+=k.b*P*M;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],P);z++}else if(w.isDirectionalLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity*M),w.castShadow){let W=w.shadow,se=n.get(w);se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.directionalShadow[x]=se,i.directionalShadowMap[x]=Y,i.directionalShadowMatrix[x]=w.shadow.matrix,y++}i.directional[x]=H,x++}else if(w.isSpotLight){let H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(k).multiplyScalar(P*M),H.distance=q,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[m]=H;let W=w.shadow;if(w.map&&(i.spotLightMap[T]=w.map,T++,W.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[m]=W.matrix,w.castShadow){let se=n.get(w);se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.spotShadow[m]=se,i.spotShadowMap[m]=Y,E++}m++}else if(w.isRectAreaLight){let H=t.get(w);H.color.copy(k).multiplyScalar(P),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[v]=H,v++}else if(w.isPointLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity*M),H.distance=w.distance,H.decay=w.decay,w.castShadow){let W=w.shadow,se=n.get(w);se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,se.shadowCameraNear=W.camera.near,se.shadowCameraFar=W.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=w.shadow.matrix,R++}i.point[p]=H,p++}else if(w.isHemisphereLight){let H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(P*M),H.groundColor.copy(w.groundColor).multiplyScalar(P*M),i.hemi[_]=H,_++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let S=i.hash;(S.directionalLength!==x||S.pointLength!==p||S.spotLength!==m||S.rectAreaLength!==v||S.hemiLength!==_||S.numDirectionalShadows!==y||S.numPointShadows!==R||S.numSpotShadows!==E||S.numSpotMaps!==T||S.numLightProbes!==z)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=E+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=z,S.directionalLength=x,S.pointLength=p,S.spotLength=m,S.rectAreaLength=v,S.hemiLength=_,S.numDirectionalShadows=y,S.numPointShadows=R,S.numSpotShadows=E,S.numSpotMaps=T,S.numLightProbes=z,i.version=Wv++)}function l(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let y=h[v];if(y.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(y.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let R=i.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let R=i.hemi[p];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function sf(s,e){let t=new qv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Yv(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new sf(s,e),t.set(r,[c])):o>=a.length?(c=new sf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Gc=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
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
}`;function Kv(s,e,t){let n=new co,i=new oe,r=new oe,o=new mt,a=new Gc({depthPacking:km}),c=new Vc,l={},h=t.maxTextureSize,u={[ri]:Jt,[Jt]:ri,[ht]:ht},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:$v,fragmentShader:Zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let m=this.type;this.render=function(E,T,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let z=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Gi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=m!==vi&&this.type===vi,w=m===vi&&this.type!==vi;for(let k=0,P=E.length;k<P;k++){let q=E[k],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let H=Y.getFrameExtents();if(i.multiply(H),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,Y.mapSize.y=r.y)),Y.map===null||D===!0||w===!0){let se=this.type!==vi?{minFilter:Gt,magFilter:Gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Si(i.x,i.y,se),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let W=Y.getViewportCount();for(let se=0;se<W;se++){let Me=Y.getViewport(se);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),I.viewport(o),Y.updateMatrices(q,se),n=Y.getFrustum(),y(T,A,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===vi&&v(Y,A),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(z,M,S)};function v(E,T){let A=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,A,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,A,f,x,null)}function _(E,T,A,z){let M=null,S=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)M=S;else if(M=A.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=M.uuid,D=T.uuid,w=l[I];w===void 0&&(w={},l[I]=w);let k=w[D];k===void 0&&(k=M.clone(),w[D]=k,T.addEventListener("dispose",R)),M=k}if(M.visible=T.visible,M.wireframe=T.wireframe,z===vi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let I=s.properties.get(M);I.light=A}return M}function y(E,T,A,z,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===vi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let D=e.update(E),w=E.material;if(Array.isArray(w)){let k=D.groups;for(let P=0,q=k.length;P<q;P++){let Y=k[P],H=w[Y.materialIndex];if(H&&H.visible){let W=_(E,H,z,M);E.onBeforeShadow(s,E,T,A,D,W,Y),s.renderBufferDirect(A,null,D,W,E,Y),E.onAfterShadow(s,E,T,A,D,W,Y)}}}else if(w.visible){let k=_(E,w,z,M);E.onBeforeShadow(s,E,T,A,D,k,null),s.renderBufferDirect(A,null,D,k,E,null),E.onAfterShadow(s,E,T,A,D,k,null)}}let I=E.children;for(let D=0,w=I.length;D<w;D++)y(I[D],T,A,z,M)}function R(E){E.target.removeEventListener("dispose",R);for(let A in l){let z=l[A],M=E.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}function Jv(s,e,t){let n=t.isWebGL2;function i(){let B=!1,ye=new mt,Z=null,pe=new mt(0,0,0,0);return{setMask:function(be){Z!==be&&!B&&(s.colorMask(be,be,be,be),Z=be)},setLocked:function(be){B=be},setClear:function(be,st,xt,tn,Nn){Nn===!0&&(be*=tn,st*=tn,xt*=tn),ye.set(be,st,xt,tn),pe.equals(ye)===!1&&(s.clearColor(be,st,xt,tn),pe.copy(ye))},reset:function(){B=!1,Z=null,pe.set(-1,0,0,0)}}}function r(){let B=!1,ye=null,Z=null,pe=null;return{setTest:function(be){be?we(s.DEPTH_TEST):qe(s.DEPTH_TEST)},setMask:function(be){ye!==be&&!B&&(s.depthMask(be),ye=be)},setFunc:function(be){if(Z!==be){switch(be){case mm:s.depthFunc(s.NEVER);break;case gm:s.depthFunc(s.ALWAYS);break;case xm:s.depthFunc(s.LESS);break;case ba:s.depthFunc(s.LEQUAL);break;case _m:s.depthFunc(s.EQUAL);break;case vm:s.depthFunc(s.GEQUAL);break;case ym:s.depthFunc(s.GREATER);break;case bm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=be}},setLocked:function(be){B=be},setClear:function(be){pe!==be&&(s.clearDepth(be),pe=be)},reset:function(){B=!1,ye=null,Z=null,pe=null}}}function o(){let B=!1,ye=null,Z=null,pe=null,be=null,st=null,xt=null,tn=null,Nn=null;return{setTest:function(_t){B||(_t?we(s.STENCIL_TEST):qe(s.STENCIL_TEST))},setMask:function(_t){ye!==_t&&!B&&(s.stencilMask(_t),ye=_t)},setFunc:function(_t,fn,ii){(Z!==_t||pe!==fn||be!==ii)&&(s.stencilFunc(_t,fn,ii),Z=_t,pe=fn,be=ii)},setOp:function(_t,fn,ii){(st!==_t||xt!==fn||tn!==ii)&&(s.stencilOp(_t,fn,ii),st=_t,xt=fn,tn=ii)},setLocked:function(_t){B=_t},setClear:function(_t){Nn!==_t&&(s.clearStencil(_t),Nn=_t)},reset:function(){B=!1,ye=null,Z=null,pe=null,be=null,st=null,xt=null,tn=null,Nn=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,y=null,R=null,E=null,T=null,A=null,z=new de(0,0,0),M=0,S=!1,I=null,D=null,w=null,k=null,P=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,H=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=H>=1):W.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=H>=2);let se=null,Me={},Be=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ae=new mt().fromArray(Be),Se=new mt().fromArray(j);function Ie(B,ye,Z,pe){let be=new Uint8Array(4),st=s.createTexture();s.bindTexture(B,st),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<Z;xt++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(ye,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ye+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return st}let Te={};Te[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),we(s.DEPTH_TEST),c.setFunc(ba),ie(!1),le(Ou),we(s.CULL_FACE),ne(Gi);function we(B){d[B]!==!0&&(s.enable(B),d[B]=!0)}function qe(B){d[B]!==!1&&(s.disable(B),d[B]=!1)}function Pe(B,ye){return f[B]!==ye?(s.bindFramebuffer(B,ye),f[B]=ye,n&&(B===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ye),B===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ye)),!0):!1}function U(B,ye){let Z=x,pe=!1;if(B){Z=g.get(ye),Z===void 0&&(Z=[],g.set(ye,Z));let be=B.textures;if(Z.length!==be.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let st=0,xt=be.length;st<xt;st++)Z[st]=s.COLOR_ATTACHMENT0+st;Z.length=be.length,pe=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,pe=!0);if(pe)if(t.isWebGL2)s.drawBuffers(Z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ue(B){return p!==B?(s.useProgram(B),p=B,!0):!1}let ee={[ps]:s.FUNC_ADD,[em]:s.FUNC_SUBTRACT,[tm]:s.FUNC_REVERSE_SUBTRACT};if(n)ee[Bu]=s.MIN,ee[ku]=s.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(ee[Bu]=B.MIN_EXT,ee[ku]=B.MAX_EXT)}let he={[nm]:s.ZERO,[im]:s.ONE,[sm]:s.SRC_COLOR,[wc]:s.SRC_ALPHA,[hm]:s.SRC_ALPHA_SATURATE,[lm]:s.DST_COLOR,[om]:s.DST_ALPHA,[rm]:s.ONE_MINUS_SRC_COLOR,[Tc]:s.ONE_MINUS_SRC_ALPHA,[cm]:s.ONE_MINUS_DST_COLOR,[am]:s.ONE_MINUS_DST_ALPHA,[um]:s.CONSTANT_COLOR,[dm]:s.ONE_MINUS_CONSTANT_COLOR,[fm]:s.CONSTANT_ALPHA,[pm]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(B,ye,Z,pe,be,st,xt,tn,Nn,_t){if(B===Gi){m===!0&&(qe(s.BLEND),m=!1);return}if(m===!1&&(we(s.BLEND),m=!0),B!==Qp){if(B!==v||_t!==S){if((_!==ps||E!==ps)&&(s.blendEquation(s.FUNC_ADD),_=ps,E=ps),_t)switch(B){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.ONE,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,R=null,T=null,A=null,z.set(0,0,0),M=0,v=B,S=_t}return}be=be||ye,st=st||Z,xt=xt||pe,(ye!==_||be!==E)&&(s.blendEquationSeparate(ee[ye],ee[be]),_=ye,E=be),(Z!==y||pe!==R||st!==T||xt!==A)&&(s.blendFuncSeparate(he[Z],he[pe],he[st],he[xt]),y=Z,R=pe,T=st,A=xt),(tn.equals(z)===!1||Nn!==M)&&(s.blendColor(tn.r,tn.g,tn.b,Nn),z.copy(tn),M=Nn),v=B,S=!1}function F(B,ye){B.side===ht?qe(s.CULL_FACE):we(s.CULL_FACE);let Z=B.side===Jt;ye&&(Z=!Z),ie(Z),B.blending===sr&&B.transparent===!1?ne(Gi):ne(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);let pe=B.stencilWrite;l.setTest(pe),pe&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),L(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):qe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(B){I!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),I=B)}function le(B){B!==Jp?(we(s.CULL_FACE),B!==D&&(B===Ou?s.cullFace(s.BACK):B===jp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qe(s.CULL_FACE),D=B}function ve(B){B!==w&&(Y&&s.lineWidth(B),w=B)}function L(B,ye,Z){B?(we(s.POLYGON_OFFSET_FILL),(k!==ye||P!==Z)&&(s.polygonOffset(ye,Z),k=ye,P=Z)):qe(s.POLYGON_OFFSET_FILL)}function b(B){B?we(s.SCISSOR_TEST):qe(s.SCISSOR_TEST)}function V(B){B===void 0&&(B=s.TEXTURE0+q-1),se!==B&&(s.activeTexture(B),se=B)}function O(B,ye,Z){Z===void 0&&(se===null?Z=s.TEXTURE0+q-1:Z=se);let pe=Me[Z];pe===void 0&&(pe={type:void 0,texture:void 0},Me[Z]=pe),(pe.type!==B||pe.texture!==ye)&&(se!==Z&&(s.activeTexture(Z),se=Z),s.bindTexture(B,ye||Te[B]),pe.type=B,pe.texture=ye)}function te(){let B=Me[se];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(B){ae.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ae.copy(B))}function Ne(B){Se.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Se.copy(B))}function ct(B,ye){let Z=u.get(ye);Z===void 0&&(Z=new WeakMap,u.set(ye,Z));let pe=Z.get(B);pe===void 0&&(pe=s.getUniformBlockIndex(ye,B.name),Z.set(B,pe))}function Ze(B,ye){let pe=u.get(ye).get(B);h.get(ye)!==pe&&(s.uniformBlockBinding(ye,pe,B.__bindingPointIndex),h.set(ye,pe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},se=null,Me={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,y=null,R=null,E=null,T=null,A=null,z=new de(0,0,0),M=0,S=!1,I=null,D=null,w=null,k=null,P=null,ae.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:we,disable:qe,bindFramebuffer:Pe,drawBuffers:U,useProgram:ue,setBlending:ne,setMaterial:F,setFlipSided:ie,setCullFace:le,setLineWidth:ve,setPolygonOffset:L,setScissorTest:b,activeTexture:V,bindTexture:O,unbindTexture:te,compressedTexImage2D:re,compressedTexImage3D:We,texImage2D:tt,texImage3D:Ue,updateUBOMapping:ct,uniformBlockBinding:Ze,texStorage2D:fe,texStorage3D:Ut,texSubImage2D:Fe,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:Xe,scissor:Le,viewport:Ne,reset:Et}}function jv(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new oe,u=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(L){}function x(L,b){return g?new OffscreenCanvas(L,b):lo("canvas")}function p(L,b,V,O){let te=1,re=ve(L);if((re.width>O||re.height>O)&&(te=O/Math.max(re.width,re.height)),te<1||b===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let We=b?Aa:Math.floor,Fe=We(te*re.width),me=We(te*re.height);d===void 0&&(d=x(Fe,me));let xe=V?x(Fe,me):d;return xe.width=Fe,xe.height=me,xe.getContext("2d").drawImage(L,0,0,Fe,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Fe+"x"+me+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function m(L){let b=ve(L);return Lc(b.width)&&Lc(b.height)}function v(L){return a?!1:L.wrapS!==gn||L.wrapT!==gn||L.minFilter!==Gt&&L.minFilter!==Ht}function _(L,b){return L.generateMipmaps&&b&&L.minFilter!==Gt&&L.minFilter!==Ht}function y(L){s.generateMipmap(L)}function R(L,b,V,O,te=!1){if(a===!1)return b;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=b;if(b===s.RED&&(V===s.FLOAT&&(re=s.R32F),V===s.HALF_FLOAT&&(re=s.R16F),V===s.UNSIGNED_BYTE&&(re=s.R8)),b===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(re=s.R8UI),V===s.UNSIGNED_SHORT&&(re=s.R16UI),V===s.UNSIGNED_INT&&(re=s.R32UI),V===s.BYTE&&(re=s.R8I),V===s.SHORT&&(re=s.R16I),V===s.INT&&(re=s.R32I)),b===s.RG&&(V===s.FLOAT&&(re=s.RG32F),V===s.HALF_FLOAT&&(re=s.RG16F),V===s.UNSIGNED_BYTE&&(re=s.RG8)),b===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(re=s.RG8UI),V===s.UNSIGNED_SHORT&&(re=s.RG16UI),V===s.UNSIGNED_INT&&(re=s.RG32UI),V===s.BYTE&&(re=s.RG8I),V===s.SHORT&&(re=s.RG16I),V===s.INT&&(re=s.RG32I)),b===s.RGBA){let We=te?Sa:dt.getTransfer(O);V===s.FLOAT&&(re=s.RGBA32F),V===s.HALF_FLOAT&&(re=s.RGBA16F),V===s.UNSIGNED_BYTE&&(re=We===bt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(L,b,V){return _(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==Gt&&L.minFilter!==Ht?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function T(L){return L===Gt||L===Ma||L===ms?s.NEAREST:s.LINEAR}function A(L){let b=L.target;b.removeEventListener("dispose",A),M(b),b.isVideoTexture&&u.delete(b)}function z(L){let b=L.target;b.removeEventListener("dispose",z),I(b)}function M(L){let b=n.get(L);if(b.__webglInit===void 0)return;let V=L.source,O=f.get(V);if(O){let te=O[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(L),Object.keys(O).length===0&&f.delete(V)}n.remove(L)}function S(L){let b=n.get(L);s.deleteTexture(b.__webglTexture);let V=L.source,O=f.get(V);delete O[b.__cacheKey],o.memory.textures--}function I(L){let b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(b.__webglFramebuffer[O]))for(let te=0;te<b.__webglFramebuffer[O].length;te++)s.deleteFramebuffer(b.__webglFramebuffer[O][te]);else s.deleteFramebuffer(b.__webglFramebuffer[O]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[O])}else{if(Array.isArray(b.__webglFramebuffer))for(let O=0;O<b.__webglFramebuffer.length;O++)s.deleteFramebuffer(b.__webglFramebuffer[O]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let O=0;O<b.__webglColorRenderbuffer.length;O++)b.__webglColorRenderbuffer[O]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[O]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let V=L.textures;for(let O=0,te=V.length;O<te;O++){let re=n.get(V[O]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(V[O])}n.remove(L)}let D=0;function w(){D=0}function k(){let L=D;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),D+=1,L}function P(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function q(L,b){let V=n.get(L);if(L.isVideoTexture&&ie(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){let O=L.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(V,L,b);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+b)}function Y(L,b){let V=n.get(L);if(L.version>0&&V.__version!==L.version){Se(V,L,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+b)}function H(L,b){let V=n.get(L);if(L.version>0&&V.__version!==L.version){Se(V,L,b);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+b)}function W(L,b){let V=n.get(L);if(L.version>0&&V.__version!==L.version){Ie(V,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+b)}let se={[Mi]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},Me={[Gt]:s.NEAREST,[Ma]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[eo]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},Be={[Gm]:s.NEVER,[$m]:s.ALWAYS,[Vm]:s.LESS,[kf]:s.LEQUAL,[Wm]:s.EQUAL,[Ym]:s.GEQUAL,[Xm]:s.GREATER,[qm]:s.NOTEQUAL};function j(L,b,V){if(b.type===Zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ht||b.magFilter===eo||b.magFilter===ms||b.magFilter===Fn||b.minFilter===Ht||b.minFilter===eo||b.minFilter===ms||b.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(s.texParameteri(L,s.TEXTURE_WRAP_S,se[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,se[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,se[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Me[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Me[b.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==gn||b.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,T(b.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Gt&&b.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gt||b.minFilter!==ms&&b.minFilter!==Fn||b.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ao&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(L,b){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",A));let O=b.source,te=f.get(O);te===void 0&&(te={},f.set(O,te));let re=P(b);if(re!==L.__cacheKey){te[re]===void 0&&(te[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[re].usedTimes++;let We=te[L.__cacheKey];We!==void 0&&(te[L.__cacheKey].usedTimes--,We.usedTimes===0&&S(b)),L.__cacheKey=re,L.__webglTexture=te[re].texture}return V}function Se(L,b,V){let O=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(O=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(O=s.TEXTURE_3D);let te=ae(L,b),re=b.source;t.bindTexture(O,L.__webglTexture,s.TEXTURE0+V);let We=n.get(re);if(re.version!==We.__version||te===!0){t.activeTexture(s.TEXTURE0+V);let Fe=dt.getPrimaries(dt.workingColorSpace),me=b.colorSpace===Bi?null:dt.getPrimaries(b.colorSpace),xe=b.colorSpace===Bi||Fe===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Xe=v(b)&&m(b.image)===!1,fe=p(b.image,Xe,!1,i.maxTextureSize);fe=le(b,fe);let Ut=m(fe)||a,tt=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type),Le=R(b.internalFormat,tt,Ue,b.colorSpace,b.isVideoTexture);j(O,b,Ut);let Ne,ct=b.mipmaps,Ze=a&&b.isVideoTexture!==!0&&Le!==zf,Et=We.__version===void 0||te===!0,B=re.dataReady,ye=E(b,fe,Ut);if(b.isDepthTexture)Le=s.DEPTH_COMPONENT,a?b.type===Zn?Le=s.DEPTH_COMPONENT32F:b.type===ki?Le=s.DEPTH_COMPONENT24:b.type===_s?Le=s.DEPTH24_STENCIL8:Le=s.DEPTH_COMPONENT16:b.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===vs&&Le===s.DEPTH_COMPONENT&&b.type!==_h&&b.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ki,Ue=r.convert(b.type)),b.format===cr&&Le===s.DEPTH_COMPONENT&&(Le=s.DEPTH_STENCIL,b.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=_s,Ue=r.convert(b.type))),Et&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Le,fe.width,fe.height,0,tt,Ue,null));else if(b.isDataTexture)if(ct.length>0&&Ut){Ze&&Et&&t.texStorage2D(s.TEXTURE_2D,ye,Le,ct[0].width,ct[0].height);for(let Z=0,pe=ct.length;Z<pe;Z++)Ne=ct[Z],Ze?B&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ne.width,Ne.height,tt,Ue,Ne.data):t.texImage2D(s.TEXTURE_2D,Z,Le,Ne.width,Ne.height,0,tt,Ue,Ne.data);b.generateMipmaps=!1}else Ze?(Et&&t.texStorage2D(s.TEXTURE_2D,ye,Le,fe.width,fe.height),B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,tt,Ue,fe.data)):t.texImage2D(s.TEXTURE_2D,0,Le,fe.width,fe.height,0,tt,Ue,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Le,ct[0].width,ct[0].height,fe.depth);for(let Z=0,pe=ct.length;Z<pe;Z++)Ne=ct[Z],b.format!==On?tt!==null?Ze?B&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Ne.width,Ne.height,fe.depth,tt,Ne.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Le,Ne.width,Ne.height,fe.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Ne.width,Ne.height,fe.depth,tt,Ue,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,Le,Ne.width,Ne.height,fe.depth,0,tt,Ue,Ne.data)}else{Ze&&Et&&t.texStorage2D(s.TEXTURE_2D,ye,Le,ct[0].width,ct[0].height);for(let Z=0,pe=ct.length;Z<pe;Z++)Ne=ct[Z],b.format!==On?tt!==null?Ze?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Ne.width,Ne.height,tt,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,Le,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Ne.width,Ne.height,tt,Ue,Ne.data):t.texImage2D(s.TEXTURE_2D,Z,Le,Ne.width,Ne.height,0,tt,Ue,Ne.data)}else if(b.isDataArrayTexture)Ze?(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Le,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,tt,Ue,fe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,tt,Ue,fe.data);else if(b.isData3DTexture)Ze?(Et&&t.texStorage3D(s.TEXTURE_3D,ye,Le,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,tt,Ue,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,tt,Ue,fe.data);else if(b.isFramebufferTexture){if(Et)if(Ze)t.texStorage2D(s.TEXTURE_2D,ye,Le,fe.width,fe.height);else{let Z=fe.width,pe=fe.height;for(let be=0;be<ye;be++)t.texImage2D(s.TEXTURE_2D,be,Le,Z,pe,0,tt,Ue,null),Z>>=1,pe>>=1}}else if(ct.length>0&&Ut){if(Ze&&Et){let Z=ve(ct[0]);t.texStorage2D(s.TEXTURE_2D,ye,Le,Z.width,Z.height)}for(let Z=0,pe=ct.length;Z<pe;Z++)Ne=ct[Z],Ze?B&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,tt,Ue,Ne):t.texImage2D(s.TEXTURE_2D,Z,Le,tt,Ue,Ne);b.generateMipmaps=!1}else if(Ze){if(Et){let Z=ve(fe);t.texStorage2D(s.TEXTURE_2D,ye,Le,Z.width,Z.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,tt,Ue,fe)}else t.texImage2D(s.TEXTURE_2D,0,Le,tt,Ue,fe);_(b,Ut)&&y(O),We.__version=re.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ie(L,b,V){if(b.image.length!==6)return;let O=ae(L,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);let re=n.get(te);if(te.version!==re.__version||O===!0){t.activeTexture(s.TEXTURE0+V);let We=dt.getPrimaries(dt.workingColorSpace),Fe=b.colorSpace===Bi?null:dt.getPrimaries(b.colorSpace),me=b.colorSpace===Bi||We===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let xe=b.isCompressedTexture||b.image[0].isCompressedTexture,Xe=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!xe&&!Xe?fe[Z]=p(b.image[Z],!1,!0,i.maxCubemapSize):fe[Z]=Xe?b.image[Z].image:b.image[Z],fe[Z]=le(b,fe[Z]);let Ut=fe[0],tt=m(Ut)||a,Ue=r.convert(b.format,b.colorSpace),Le=r.convert(b.type),Ne=R(b.internalFormat,Ue,Le,b.colorSpace),ct=a&&b.isVideoTexture!==!0,Ze=re.__version===void 0||O===!0,Et=te.dataReady,B=E(b,Ut,tt);j(s.TEXTURE_CUBE_MAP,b,tt);let ye;if(xe){ct&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,B,Ne,Ut.width,Ut.height);for(let Z=0;Z<6;Z++){ye=fe[Z].mipmaps;for(let pe=0;pe<ye.length;pe++){let be=ye[pe];b.format!==On?Ue!==null?ct?Et&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Ne,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,be.width,be.height,Ue,Le,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Ne,be.width,be.height,0,Ue,Le,be.data)}}}else{if(ye=b.mipmaps,ct&&Ze){ye.length>0&&B++;let Z=ve(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,B,Ne,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Xe){ct?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Ue,Le,fe[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ne,fe[Z].width,fe[Z].height,0,Ue,Le,fe[Z].data);for(let pe=0;pe<ye.length;pe++){let st=ye[pe].image[Z].image;ct?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,st.width,st.height,Ue,Le,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Ne,st.width,st.height,0,Ue,Le,st.data)}}else{ct?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ue,Le,fe[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ne,Ue,Le,fe[Z]);for(let pe=0;pe<ye.length;pe++){let be=ye[pe];ct?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Ue,Le,be.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Ne,Ue,Le,be.image[Z])}}}_(b,tt)&&y(s.TEXTURE_CUBE_MAP),re.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Te(L,b,V,O,te,re){let We=r.convert(V.format,V.colorSpace),Fe=r.convert(V.type),me=R(V.internalFormat,We,Fe,V.colorSpace);if(!n.get(b).__hasExternalTextures){let Xe=Math.max(1,b.width>>re),fe=Math.max(1,b.height>>re);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,re,me,Xe,fe,b.depth,0,We,Fe,null):t.texImage2D(te,re,me,Xe,fe,0,We,Fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),F(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,O,te,n.get(V).__webglTexture,0,ne(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,O,te,n.get(V).__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(L,b,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let O=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||F(b)){let te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Zn?O=s.DEPTH_COMPONENT32F:te.type===ki&&(O=s.DEPTH_COMPONENT24));let re=ne(b);F(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,O,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,re,O,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,O,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){let O=ne(b);V&&F(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,O,s.DEPTH24_STENCIL8,b.width,b.height):F(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{let O=b.textures;for(let te=0;te<O.length;te++){let re=O[te],We=r.convert(re.format,re.colorSpace),Fe=r.convert(re.type),me=R(re.internalFormat,We,Fe,re.colorSpace),xe=ne(b);V&&F(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,me,b.width,b.height):F(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let O=n.get(b.depthTexture).__webglTexture,te=ne(b);if(b.depthTexture.format===vs)F(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0);else if(b.depthTexture.format===cr)F(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Pe(L){let b=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");qe(b.__webglFramebuffer,L)}else if(V){b.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[O]),b.__webglDepthbuffer[O]=s.createRenderbuffer(),we(b.__webglDepthbuffer[O],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),we(b.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function U(L,b,V){let O=n.get(L);b!==void 0&&Te(O.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Pe(L)}function ue(L){let b=L.texture,V=n.get(L),O=n.get(b);L.addEventListener("dispose",z);let te=L.textures,re=L.isWebGLCubeRenderTarget===!0,We=te.length>1,Fe=m(L)||a;if(We||(O.__webglTexture===void 0&&(O.__webglTexture=s.createTexture()),O.__version=b.version,o.memory.textures++),re){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let xe=0;xe<b.mipmaps.length;xe++)V.__webglFramebuffer[me][xe]=s.createFramebuffer()}else V.__webglFramebuffer[me]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)V.__webglFramebuffer[me]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(We)if(i.drawBuffers)for(let me=0,xe=te.length;me<xe;me++){let Xe=n.get(te[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&F(L)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){let xe=te[me];V.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[me]);let Xe=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Ut=R(xe.internalFormat,Xe,fe,xe.colorSpace,L.isXRRenderTarget===!0),tt=ne(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Ut,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,V.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),we(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture),j(s.TEXTURE_CUBE_MAP,b,Fe);for(let me=0;me<6;me++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Te(V.__webglFramebuffer[me][xe],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Te(V.__webglFramebuffer[me],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(b,Fe)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let me=0,xe=te.length;me<xe;me++){let Xe=te[me],fe=n.get(Xe);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),j(s.TEXTURE_2D,Xe,Fe),Te(V.__webglFramebuffer,L,Xe,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),_(Xe,Fe)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,O.__webglTexture),j(me,b,Fe),a&&b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Te(V.__webglFramebuffer[xe],L,b,s.COLOR_ATTACHMENT0,me,xe);else Te(V.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,me,0);_(b,Fe)&&y(me),t.unbindTexture()}L.depthBuffer&&Pe(L)}function ee(L){let b=m(L)||a,V=L.textures;for(let O=0,te=V.length;O<te;O++){let re=V[O];if(_(re,b)){let We=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Fe=n.get(re).__webglTexture;t.bindTexture(We,Fe),y(We),t.unbindTexture()}}}function he(L){if(a&&L.samples>0&&F(L)===!1){let b=L.textures,V=L.width,O=L.height,te=s.COLOR_BUFFER_BIT,re=[],We=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(L),me=b.length>1;if(me)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){re.push(s.COLOR_ATTACHMENT0+xe),L.depthBuffer&&re.push(We);let Xe=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(Xe===!1&&(L.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[xe]),Xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[We]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[We])),me){let fe=n.get(b[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,V,O,0,0,V,O,te,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[xe]);let Xe=n.get(b[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function ne(L){return Math.min(i.maxSamples,L.samples)}function F(L){let b=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ie(L){let b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function le(L,b){let V=L.colorSpace,O=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Pc||V!==Qt&&V!==Bi&&(dt.getTransfer(V)===bt?a===!1?e.has("EXT_sRGB")===!0&&O===On?(L.format=Pc,L.minFilter=Ht,L.generateMipmaps=!1):b=Ra.sRGBToLinear(b):(O!==On||te!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function ve(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=U,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=F}function Qv(s,e,t){let n=t.isWebGL2;function i(r,o=Bi){let a,c=dt.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===If)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Lm)return s.BYTE;if(r===Im)return s.SHORT;if(r===_h)return s.UNSIGNED_SHORT;if(r===Lf)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Zn)return s.FLOAT;if(r===ao)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nm)return s.ALPHA;if(r===On)return s.RGBA;if(r===Dm)return s.LUMINANCE;if(r===Um)return s.LUMINANCE_ALPHA;if(r===vs)return s.DEPTH_COMPONENT;if(r===cr)return s.DEPTH_STENCIL;if(r===Pc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Df)return s.RED;if(r===Uf)return s.RED_INTEGER;if(r===Om)return s.RG;if(r===Of)return s.RG_INTEGER;if(r===Ff)return s.RGBA_INTEGER;if(r===kl||r===Hl||r===Gl||r===Vl)if(c===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gu||r===Vu||r===Wu||r===Xu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qu||r===Yu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qu)return c===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$u||r===Zu||r===Ku||r===Ju||r===ju||r===Qu||r===ed||r===td||r===nd||r===id||r===sd||r===rd||r===od||r===ad)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$u)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ku)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ju)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ju)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ed)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===td)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nd)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===id)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sd)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rd)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===od)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ad)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wl||r===ld||r===cd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wl)return c===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ld)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fm||r===hd||r===ud||r===dd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ud)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_s?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Wc=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`,Xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new oi({extensions:{fragDepth:!0},vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ke(new zt(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},qc=class extends qi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new Xc,p=t.getContextAttributes(),m=null,v=null,_=[],y=[],R=new oe,E=null,T=new Wt;T.layers.enable(1),T.viewport=new mt;let A=new Wt;A.layers.enable(2),A.viewport=new mt;let z=[T,A],M=new Wc;M.layers.enable(1),M.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=_[j];return ae===void 0&&(ae=new io,_[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=_[j];return ae===void 0&&(ae=new io,_[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=_[j];return ae===void 0&&(ae=new io,_[j]=ae),ae.getHandSpace()};function D(j){let ae=y.indexOf(j.inputSource);if(ae===-1)return;let Se=_[ae];Se!==void 0&&(Se.update(j.inputSource,j.frame,l||o),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function w(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",w),i.removeEventListener("inputsourceschange",k);for(let j=0;j<_.length;j++){let ae=y[j];ae!==null&&(y[j]=null,_[j].disconnect(ae))}S=null,I=null,x.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",w),i.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Si(f.framebufferWidth,f.framebufferHeight,{format:On,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Se=null,Ie=null;p.depth&&(Ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?cr:vs,Se=p.stencil?_s:ki);let Te={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Si(d.textureWidth,d.textureHeight,{format:On,type:Wi,depthTexture:new Da(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let we=e.properties.get(v);we.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(j){for(let ae=0;ae<j.removed.length;ae++){let Se=j.removed[ae],Ie=y.indexOf(Se);Ie>=0&&(y[Ie]=null,_[Ie].disconnect(Se))}for(let ae=0;ae<j.added.length;ae++){let Se=j.added[ae],Ie=y.indexOf(Se);if(Ie===-1){for(let we=0;we<_.length;we++)if(we>=y.length){y.push(Se),Ie=we;break}else if(y[we]===null){y[we]=Se,Ie=we;break}if(Ie===-1)break}let Te=_[Ie];Te&&Te.connect(Se)}}let P=new N,q=new N;function Y(j,ae,Se){P.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(Se.matrixWorld);let Ie=P.distanceTo(q),Te=ae.projectionMatrix.elements,we=Se.projectionMatrix.elements,qe=Te[14]/(Te[10]-1),Pe=Te[14]/(Te[10]+1),U=(Te[9]+1)/Te[5],ue=(Te[9]-1)/Te[5],ee=(Te[8]-1)/Te[0],he=(we[8]+1)/we[0],ne=qe*ee,F=qe*he,ie=Ie/(-ee+he),le=ie*-ee;ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(le),j.translateZ(ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let ve=qe+ie,L=Pe+ie,b=ne-le,V=F+(Ie-le),O=U*Pe/L*ve,te=ue*Pe/L*ve;j.projectionMatrix.makePerspective(b,V,O,te,ve,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),M.near=A.near=T.near=j.near,M.far=A.far=T.far=j.far,(S!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,I=M.far,T.near=S,T.far=I,A.near=S,A.far=I,T.updateProjectionMatrix(),A.updateProjectionMatrix(),j.updateProjectionMatrix());let ae=j.parent,Se=M.cameras;H(M,ae);for(let Ie=0;Ie<Se.length;Ie++)H(Se[Ie],ae);Se.length===2?Y(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),W(j,M,ae)};function W(j,ae,Se){Se===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ur*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null};let se=null;function Me(j,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ie=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,Ie=!0);for(let we=0;we<Se.length;we++){let qe=Se[we],Pe=null;if(f!==null)Pe=f.getViewport(qe);else{let ue=u.getViewSubImage(d,qe);Pe=ue.viewport,we===0&&(e.setRenderTargetTextures(v,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(v))}let U=z[we];U===void 0&&(U=new Wt,U.layers.enable(we),U.viewport=new mt,z[we]=U),U.matrix.fromArray(qe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(qe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),we===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ie===!0&&M.cameras.push(U)}let Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let we=u.getDepthInformation(Se[0]);we&&we.isValid&&we.texture&&x.init(e,we,i.renderState)}}for(let Se=0;Se<_.length;Se++){let Ie=y[Se],Te=_[Se];Ie!==null&&Te!==void 0&&Te.update(Ie,ae,l||o)}x.render(e,M),se&&se(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Be=new qf;Be.setAnimationLoop(Me),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}},ds=new bn,iy=new Ve;function sy(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),_=v.envMap,y=v.envMapRotation;if(_&&(p.envMap.value=_,ds.copy(y),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),p.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(ds)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let R=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ry(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));let R=_.program;n.updateUBOMapping(v,R);let E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let _=u();v.__bindingPointIndex=_;let y=s.createBuffer(),R=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=i[v.id],y=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,T=y.length;E<T;E++){let A=Array.isArray(y[E])?y[E]:[y[E]];for(let z=0,M=A.length;z<M;z++){let S=A[z];if(f(S,E,z,R)===!0){let I=S.__offset,D=Array.isArray(S.value)?S.value:[S.value],w=0;for(let k=0;k<D.length;k++){let P=D[k],q=x(P);typeof P=="number"||typeof P=="boolean"?(S.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,I+w,S.__data)):P.isMatrix3?(S.__data[0]=P.elements[0],S.__data[1]=P.elements[1],S.__data[2]=P.elements[2],S.__data[3]=0,S.__data[4]=P.elements[3],S.__data[5]=P.elements[4],S.__data[6]=P.elements[5],S.__data[7]=0,S.__data[8]=P.elements[6],S.__data[9]=P.elements[7],S.__data[10]=P.elements[8],S.__data[11]=0):(P.toArray(S.__data,w),w+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,R){let E=v.value,T=_+"_"+y;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{let A=R[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return R[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(v){let _=v.uniforms,y=0,R=16;for(let T=0,A=_.length;T<A;T++){let z=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,S=z.length;M<S;M++){let I=z[M],D=Array.isArray(I.value)?I.value:[I.value];for(let w=0,k=D.length;w<k;w++){let P=D[w],q=x(P),Y=y%R;Y!==0&&R-Y<q.boundary&&(y+=R-Y),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=q.storage}}}let E=y%R;return E>0&&(y+=R-E),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var ho=class{constructor(e={}){let{canvas:t=c0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;let _=this,y=!1,R=0,E=0,T=null,A=-1,z=null,M=new mt,S=new mt,I=null,D=new de(0),w=0,k=t.width,P=t.height,q=1,Y=null,H=null,W=new mt(0,0,k,P),se=new mt(0,0,k,P),Me=!1,Be=new co,j=!1,ae=!1,Se=null,Ie=new Ve,Te=new oe,we=new N,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?q:1}let U=n;function ue(C,G){for(let K=0;K<C.length;K++){let J=C[K],$=t.getContext(J,G);if($!==null)return $}return null}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mh}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){let G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),U=ue(G,C),U===null)throw ue(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,he,ne,F,ie,le,ve,L,b,V,O,te,re,We,Fe,me,xe,Xe,fe,Ut,tt,Ue,Le,Ne;function ct(){ee=new b_(U),he=new m_(U,ee,e),ee.init(he),Ue=new Qv(U,ee,he),ne=new Jv(U,ee,he),F=new E_(U),ie=new Bv,le=new jv(U,ee,ne,ie,he,Ue,F),ve=new x_(_),L=new y_(_),b=new P0(U,he),Le=new f_(U,ee,b,he),V=new M_(U,b,F,Le),O=new R_(U,V,b,F),fe=new A_(U,he,le),me=new g_(ie),te=new zv(_,ve,L,ee,he,Le,me),re=new sy(_,ie),We=new Hv,Fe=new Yv(ee,he),Xe=new d_(_,ve,L,ne,O,d,c),xe=new Kv(_,O,he),Ne=new ry(U,F,he,ne),Ut=new p_(U,ee,F,he),tt=new S_(U,ee,F,he),F.programs=te.programs,_.capabilities=he,_.extensions=ee,_.properties=ie,_.renderLists=We,_.shadowMap=xe,_.state=ne,_.info=F}ct();let Ze=new qc(_,U);this.xr=Ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(k,P,!1))},this.getSize=function(C){return C.set(k,P)},this.setSize=function(C,G,K=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,P=G,t.width=Math.floor(C*q),t.height=Math.floor(G*q),K===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(k*q,P*q).floor()},this.setDrawingBufferSize=function(C,G,K){k=C,P=G,q=K,t.width=Math.floor(C*K),t.height=Math.floor(G*K),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,G,K,J){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,G,K,J),ne.viewport(M.copy(W).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,G,K,J){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,G,K,J),ne.scissor(S.copy(se).multiplyScalar(q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){ne.setScissorTest(Me=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(C=!0,G=!0,K=!0){let J=0;if(C){let $=!1;if(T!==null){let Ee=T.texture.format;$=Ee===Ff||Ee===Of||Ee===Uf}if($){let Ee=T.texture.type,De=Ee===Wi||Ee===ki||Ee===_h||Ee===_s||Ee===If||Ee===Nf,ze=Xe.getClearColor(),Ge=Xe.getClearAlpha(),et=ze.r,Ye=ze.g,Ke=ze.b;De?(f[0]=et,f[1]=Ye,f[2]=Ke,f[3]=Ge,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=et,g[1]=Ye,g[2]=Ke,g[3]=Ge,U.clearBufferiv(U.COLOR,0,g))}else J|=U.COLOR_BUFFER_BIT}G&&(J|=U.DEPTH_BUFFER_BIT),K&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),We.dispose(),Fe.dispose(),ie.dispose(),ve.dispose(),L.dispose(),O.dispose(),Le.dispose(),Ne.dispose(),te.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Nn),Ze.removeEventListener("sessionend",_t),Se&&(Se.dispose(),Se=null),fn.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let C=F.autoReset,G=xe.enabled,K=xe.autoUpdate,J=xe.needsUpdate,$=xe.type;ct(),F.autoReset=C,xe.enabled=G,xe.autoUpdate=K,xe.needsUpdate=J,xe.type=$}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){let G=C.target;G.removeEventListener("dispose",Z),pe(G)}function pe(C){be(C),ie.remove(C)}function be(C){let G=ie.get(C).programs;G!==void 0&&(G.forEach(function(K){te.releaseProgram(K)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,K,J,$,Ee){G===null&&(G=qe);let De=$.isMesh&&$.matrixWorld.determinant()<0,ze=Gp(C,G,K,J,$);ne.setMaterial(J,De);let Ge=K.index,et=1;if(J.wireframe===!0){if(Ge=V.getWireframeAttribute(K),Ge===void 0)return;et=2}let Ye=K.drawRange,Ke=K.attributes.position,Nt=Ye.start*et,wn=(Ye.start+Ye.count)*et;Ee!==null&&(Nt=Math.max(Nt,Ee.start*et),wn=Math.min(wn,(Ee.start+Ee.count)*et)),Ge!==null?(Nt=Math.max(Nt,0),wn=Math.min(wn,Ge.count)):Ke!=null&&(Nt=Math.max(Nt,0),wn=Math.min(wn,Ke.count));let Zt=wn-Nt;if(Zt<0||Zt===1/0)return;Le.setup($,J,ze,K,Ge);let di,Tt=Ut;if(Ge!==null&&(di=b.get(Ge),Tt=tt,Tt.setIndex(di)),$.isMesh)J.wireframe===!0?(ne.setLineWidth(J.wireframeLinewidth*Pe()),Tt.setMode(U.LINES)):Tt.setMode(U.TRIANGLES);else if($.isLine){let je=J.linewidth;je===void 0&&(je=1),ne.setLineWidth(je*Pe()),$.isLineSegments?Tt.setMode(U.LINES):$.isLineLoop?Tt.setMode(U.LINE_LOOP):Tt.setMode(U.LINE_STRIP)}else $.isPoints?Tt.setMode(U.POINTS):$.isSprite&&Tt.setMode(U.TRIANGLES);if($.isBatchedMesh)Tt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Tt.renderInstances(Nt,Zt,$.count);else if(K.isInstancedBufferGeometry){let je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ol=Math.min(K.instanceCount,je);Tt.renderInstances(Nt,Zt,Ol)}else Tt.render(Nt,Zt)};function st(C,G,K){C.transparent===!0&&C.side===ht&&C.forceSinglePass===!1?(C.side=Jt,C.needsUpdate=!0,Ho(C,G,K),C.side=ri,C.needsUpdate=!0,Ho(C,G,K),C.side=ht):Ho(C,G,K)}this.compile=function(C,G,K=null){K===null&&(K=C),p=Fe.get(K),p.init(),v.push(p),K.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==K&&C.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(_._useLegacyLights);let J=new Set;return C.traverse(function($){let Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let ze=Ee[De];st(ze,K,$),J.add(ze)}else st(Ee,K,$),J.add(Ee)}),v.pop(),p=null,J},this.compileAsync=function(C,G,K=null){let J=this.compile(C,G,K);return new Promise($=>{function Ee(){if(J.forEach(function(De){ie.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){$(C);return}setTimeout(Ee,10)}ee.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let xt=null;function tn(C){xt&&xt(C)}function Nn(){fn.stop()}function _t(){fn.start()}let fn=new qf;fn.setAnimationLoop(tn),typeof self!="undefined"&&fn.setContext(self),this.setAnimationLoop=function(C){xt=C,Ze.setAnimationLoop(C),C===null?fn.stop():fn.start()},Ze.addEventListener("sessionstart",Nn),Ze.addEventListener("sessionend",_t),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(G),G=Ze.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,G,T),p=Fe.get(C,v.length),p.init(),v.push(p),Ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Be.setFromProjectionMatrix(Ie),ae=this.localClippingEnabled,j=me.init(this.clippingPlanes,ae),x=We.get(C,m.length),x.init(),m.push(x),ii(C,G,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Y,H),this.info.render.frame++,j===!0&&me.beginShadows();let K=p.state.shadowsArray;if(xe.render(K,C,G),j===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1)&&Xe.render(x,C),p.setupLights(_._useLegacyLights),G.isArrayCamera){let J=G.cameras;for(let $=0,Ee=J.length;$<Ee;$++){let De=J[$];Ru(x,C,De,De.viewport)}}else Ru(x,C,G);T!==null&&(le.updateMultisampleRenderTarget(T),le.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(_,C,G),Le.resetDefaultState(),A=-1,z=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ii(C,G,K,J){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Be.intersectsSprite(C)){J&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);let De=O.update(C),ze=C.material;ze.visible&&x.push(C,De,ze,K,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Be.intersectsObject(C))){let De=O.update(C),ze=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),we.copy(De.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(ze)){let Ge=De.groups;for(let et=0,Ye=Ge.length;et<Ye;et++){let Ke=Ge[et],Nt=ze[Ke.materialIndex];Nt&&Nt.visible&&x.push(C,De,Nt,K,we.z,Ke)}}else ze.visible&&x.push(C,De,ze,K,we.z,null)}}let Ee=C.children;for(let De=0,ze=Ee.length;De<ze;De++)ii(Ee[De],G,K,J)}function Ru(C,G,K,J){let $=C.opaque,Ee=C.transmissive,De=C.transparent;p.setupLightsView(K),j===!0&&me.setGlobalState(_.clippingPlanes,K),Ee.length>0&&Hp($,Ee,G,K),J&&ne.viewport(M.copy(J)),$.length>0&&ko($,G,K),Ee.length>0&&ko(Ee,G,K),De.length>0&&ko(De,G,K),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Hp(C,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Ee=he.isWebGL2;Se===null&&(Se=new Si(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?ao:Wi,minFilter:Fn,samples:Ee?4:0})),_.getDrawingBufferSize(Te),Ee?Se.setSize(Te.x,Te.y):Se.setSize(Aa(Te.x),Aa(Te.y));let De=_.getRenderTarget();_.setRenderTarget(Se),_.getClearColor(D),w=_.getClearAlpha(),w<1&&_.setClearColor(16777215,.5),_.clear();let ze=_.toneMapping;_.toneMapping=Vi,ko(C,K,J),le.updateMultisampleRenderTarget(Se),le.updateRenderTargetMipmap(Se);let Ge=!1;for(let et=0,Ye=G.length;et<Ye;et++){let Ke=G[et],Nt=Ke.object,wn=Ke.geometry,Zt=Ke.material,di=Ke.group;if(Zt.side===ht&&Nt.layers.test(J.layers)){let Tt=Zt.side;Zt.side=Jt,Zt.needsUpdate=!0,Cu(Nt,K,J,wn,Zt,di),Zt.side=Tt,Zt.needsUpdate=!0,Ge=!0}}Ge===!0&&(le.updateMultisampleRenderTarget(Se),le.updateRenderTargetMipmap(Se)),_.setRenderTarget(De),_.setClearColor(D,w),_.toneMapping=ze}function ko(C,G,K){let J=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Ee=C.length;$<Ee;$++){let De=C[$],ze=De.object,Ge=De.geometry,et=J===null?De.material:J,Ye=De.group;ze.layers.test(K.layers)&&Cu(ze,G,K,Ge,et,Ye)}}function Cu(C,G,K,J,$,Ee){C.onBeforeRender(_,G,K,J,$,Ee),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,G,K,J,C,Ee),$.transparent===!0&&$.side===ht&&$.forceSinglePass===!1?($.side=Jt,$.needsUpdate=!0,_.renderBufferDirect(K,G,J,$,C,Ee),$.side=ri,$.needsUpdate=!0,_.renderBufferDirect(K,G,J,$,C,Ee),$.side=ht):_.renderBufferDirect(K,G,J,$,C,Ee),C.onAfterRender(_,G,K,J,$,Ee)}function Ho(C,G,K){G.isScene!==!0&&(G=qe);let J=ie.get(C),$=p.state.lights,Ee=p.state.shadowsArray,De=$.state.version,ze=te.getParameters(C,$.state,Ee,G,K),Ge=te.getProgramCacheKey(ze),et=J.programs;J.environment=C.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(C.isMeshStandardMaterial?L:ve).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",Z),et=new Map,J.programs=et);let Ye=et.get(Ge);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===De)return Lu(C,ze),Ye}else ze.uniforms=te.getUniforms(C),C.onBuild(K,ze,_),C.onBeforeCompile(ze,_),Ye=te.acquireProgram(ze,Ge),et.set(Ge,Ye),J.uniforms=ze.uniforms;let Ke=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=me.uniform),Lu(C,ze),J.needsLights=Wp(C),J.lightsStateVersion=De,J.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function Pu(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=or.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Lu(C,G){let K=ie.get(C);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Gp(C,G,K,J,$){G.isScene!==!0&&(G=qe),le.resetTextureUnits();let Ee=G.fog,De=J.isMeshStandardMaterial?G.environment:null,ze=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qt,Ge=(J.isMeshStandardMaterial?L:ve).get(J.envMap||De),et=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ke=!!K.morphAttributes.position,Nt=!!K.morphAttributes.normal,wn=!!K.morphAttributes.color,Zt=Vi;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Zt=_.toneMapping);let di=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=di!==void 0?di.length:0,je=ie.get(J),Ol=p.state.lights;if(j===!0&&(ae===!0||C!==z)){let Dn=C===z&&J.id===A;me.setState(J,C,Dn)}let wt=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ol.state.version||je.outputColorSpace!==ze||$.isBatchedMesh&&je.batching===!1||!$.isBatchedMesh&&je.batching===!0||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||$.isInstancedMesh&&je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&je.instancingMorph===!1&&$.morphTexture!==null||je.envMap!==Ge||J.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==me.numPlanes||je.numIntersection!==me.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Ye||je.morphTargets!==Ke||je.morphNormals!==Nt||je.morphColors!==wn||je.toneMapping!==Zt||he.isWebGL2===!0&&je.morphTargetsCount!==Tt)&&(wt=!0):(wt=!0,je.__version=J.version);let rs=je.currentProgram;wt===!0&&(rs=Ho(J,G,$));let Iu=!1,Vr=!1,Fl=!1,on=rs.getUniforms(),os=je.uniforms;if(ne.useProgram(rs.program)&&(Iu=!0,Vr=!0,Fl=!0),J.id!==A&&(A=J.id,Vr=!0),Iu||z!==C){on.setValue(U,"projectionMatrix",C.projectionMatrix),on.setValue(U,"viewMatrix",C.matrixWorldInverse);let Dn=on.map.cameraPosition;Dn!==void 0&&Dn.setValue(U,we.setFromMatrixPosition(C.matrixWorld)),he.logarithmicDepthBuffer&&on.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&on.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,Vr=!0,Fl=!0)}if($.isSkinnedMesh){on.setOptional(U,$,"bindMatrix"),on.setOptional(U,$,"bindMatrixInverse");let Dn=$.skeleton;Dn&&(he.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),on.setValue(U,"boneTexture",Dn.boneTexture,le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(on.setOptional(U,$,"batchingTexture"),on.setValue(U,"batchingTexture",$._matricesTexture,le));let zl=K.morphAttributes;if((zl.position!==void 0||zl.normal!==void 0||zl.color!==void 0&&he.isWebGL2===!0)&&fe.update($,K,rs),(Vr||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,on.setValue(U,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(os.envMap.value=Ge,os.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Vr&&(on.setValue(U,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Vp(os,Fl),Ee&&J.fog===!0&&re.refreshFogUniforms(os,Ee),re.refreshMaterialUniforms(os,J,q,P,Se),or.upload(U,Pu(je),os,le)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(or.upload(U,Pu(je),os,le),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&on.setValue(U,"center",$.center),on.setValue(U,"modelViewMatrix",$.modelViewMatrix),on.setValue(U,"normalMatrix",$.normalMatrix),on.setValue(U,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Dn=J.uniformsGroups;for(let Bl=0,Xp=Dn.length;Bl<Xp;Bl++)if(he.isWebGL2){let Nu=Dn[Bl];Ne.update(Nu,rs),Ne.bind(Nu,rs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rs}function Vp(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Wp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,G,K){ie.get(C.texture).__webglTexture=G,ie.get(C.depthTexture).__webglTexture=K;let J=ie.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){let K=ie.get(C);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,K=0){T=C,R=G,E=K;let J=!0,$=null,Ee=!1,De=!1;if(C){let Ge=ie.get(C);Ge.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(U.FRAMEBUFFER,null),J=!1):Ge.__webglFramebuffer===void 0?le.setupRenderTarget(C):Ge.__hasExternalTextures&&le.rebindTextures(C,ie.get(C.texture).__webglTexture,ie.get(C.depthTexture).__webglTexture);let et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(De=!0);let Ye=ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?$=Ye[G][K]:$=Ye[G],Ee=!0):he.isWebGL2&&C.samples>0&&le.useMultisampledRTT(C)===!1?$=ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?$=Ye[K]:$=Ye,M.copy(C.viewport),S.copy(C.scissor),I=C.scissorTest}else M.copy(W).multiplyScalar(q).floor(),S.copy(se).multiplyScalar(q).floor(),I=Me;if(ne.bindFramebuffer(U.FRAMEBUFFER,$)&&he.drawBuffers&&J&&ne.drawBuffers(C,$),ne.viewport(M),ne.scissor(S),ne.setScissorTest(I),Ee){let Ge=ie.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,K)}else if(De){let Ge=ie.get(C.texture),et=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,et)}A=-1},this.readRenderTargetPixels=function(C,G,K,J,$,Ee,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){ne.bindFramebuffer(U.FRAMEBUFFER,ze);try{let Ge=C.texture,et=Ge.format,Ye=Ge.type;if(et!==On&&Ue.convert(et)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Ye===ao&&(ee.has("EXT_color_buffer_half_float")||he.isWebGL2&&ee.has("EXT_color_buffer_float"));if(Ye!==Wi&&Ue.convert(Ye)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Zn&&(he.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-J&&K>=0&&K<=C.height-$&&U.readPixels(G,K,J,$,Ue.convert(et),Ue.convert(Ye),Ee)}finally{let Ge=T!==null?ie.get(T).__webglFramebuffer:null;ne.bindFramebuffer(U.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(C,G,K=0){let J=Math.pow(2,-K),$=Math.floor(G.image.width*J),Ee=Math.floor(G.image.height*J);le.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,C.x,C.y,$,Ee),ne.unbindTexture()},this.copyTextureToTexture=function(C,G,K,J=0){let $=G.image.width,Ee=G.image.height,De=Ue.convert(K.format),ze=Ue.convert(K.type);le.setTexture2D(K,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,K.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,J,C.x,C.y,$,Ee,De,ze,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,J,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,J,C.x,C.y,De,ze,G.image),J===0&&K.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(C,G,K,J,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=Math.round(C.max.x-C.min.x),De=Math.round(C.max.y-C.min.y),ze=C.max.z-C.min.z+1,Ge=Ue.convert(J.format),et=Ue.convert(J.type),Ye;if(J.isData3DTexture)le.setTexture3D(J,0),Ye=U.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)le.setTexture2DArray(J,0),Ye=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);let Ke=U.getParameter(U.UNPACK_ROW_LENGTH),Nt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),wn=U.getParameter(U.UNPACK_SKIP_PIXELS),Zt=U.getParameter(U.UNPACK_SKIP_ROWS),di=U.getParameter(U.UNPACK_SKIP_IMAGES),Tt=K.isCompressedTexture?K.mipmaps[$]:K.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Tt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?U.texSubImage3D(Ye,$,G.x,G.y,G.z,Ee,De,ze,Ge,et,Tt.data):J.isCompressedArrayTexture?U.compressedTexSubImage3D(Ye,$,G.x,G.y,G.z,Ee,De,ze,Ge,Tt.data):U.texSubImage3D(Ye,$,G.x,G.y,G.z,Ee,De,ze,Ge,et,Tt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,di),$===0&&J.generateMipmaps&&U.generateMipmap(Ye),ne.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),ne.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,ne.reset(),Le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vh?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===ll?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yc=class extends ho{};Yc.prototype.isWebGL1Renderer=!0;var Ua=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},uo=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new N,bs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ms=class extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ks,$r=new N,Js=new N,js=new N,Qs=new oe,Zr=new oe,jf=new Ve,ca=new N,Kr=new N,ha=new N,rf=new oe,gc=new oe,of=new oe,Jn=class extends yt{constructor(e=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new bs(n,3,0,!1)),Ks.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-js.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ua(ca.set(-.5,-.5,0),js,o,Js,i,r),ua(Kr.set(.5,-.5,0),js,o,Js,i,r),ua(ha.set(.5,.5,0),js,o,Js,i,r),rf.set(0,0),gc.set(1,0),of.set(1,1);let a=e.ray.intersectTriangle(ca,Kr,ha,!1,$r);if(a===null&&(ua(Kr.set(-.5,.5,0),js,o,Js,i,r),gc.set(0,1),a=e.ray.intersectTriangle(ca,ha,Kr,!1,$r),a===null))return;let c=e.ray.origin.distanceTo($r);c<e.near||c>e.far||t.push({distance:c,point:$r.clone(),uv:xs.getInterpolation($r,ca,Kr,ha,rf,gc,of,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(s,e,t,n,i,r){Qs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zr.x=r*Qs.x-i*Qs.y,Zr.y=i*Qs.x+r*Qs.y):Zr.copy(Qs),s.copy(e),s.x+=Zr.x,s.y+=Zr.y,s.applyMatrix4(jf)}var af=new N,lf=new mt,cf=new mt,oy=new N,hf=new Ve,da=new N,xc=new Pn,uf=new Ve,_c=new dr,Oa=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(i),e.ray.intersectsSphere(xc)!==!1&&(uf.copy(i).invert(),_c.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&_c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;lf.fromBufferAttribute(i.attributes.skinIndex,e),cf.fromBufferAttribute(i.attributes.skinWeight,e),af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=cf.getComponent(r);if(o!==0){let a=lf.getComponent(r);hf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oy.copy(af).applyMatrix4(hf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},fo=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Fa=class extends jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Gt,h=Gt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},df=new Ve,ay=new Ve,za=class s{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ay;df.multiplyMatrices(a,t[r]),df.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fa(t,e,e,On,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fo),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ss=class extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new Ve,ff=new Ve,fa=[],pf=new Bn,ly=new Ve,Jr=new ke,jr=new Pn,kn=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ly)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),pf.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),jr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,er),ff.multiplyMatrices(n,er),Jr.matrixWorld=ff,Jr.raycast(e,fa);for(let o=0,a=fa.length;o<a;o++){let c=fa[o];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(i*this.count),i,this.count,Df,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var po=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mf=new N,gf=new N,xf=new Ve,vc=new dr,pa=new Pn,vr=class extends yt{constructor(e=new Mt,t=new po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mf.fromBufferAttribute(t,i-1),gf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mf.distanceTo(gf);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;xf.copy(i).invert(),vc.copy(e.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new N,h=new N,u=new N,d=new N,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=m,y=v-1;_<y;_+=f){let R=g.getX(_),E=g.getX(_+1);if(l.fromBufferAttribute(p,R),h.fromBufferAttribute(p,E),vc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=m,y=v-1;_<y;_+=f){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),vc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},_f=new N,vf=new N,Ba=class extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_f.fromBufferAttribute(t,i),vf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_f.distanceTo(vf);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ka=class extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Es=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yf=new Ve,$c=new dr,ma=new Pn,ga=new N,yr=class extends yt{constructor(e=new Mt,t=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;yf.copy(i).invert(),$c.copy(e.ray).applyMatrix4(yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=l.getX(g);ga.fromBufferAttribute(u,p),bf(ga,p,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ga.fromBufferAttribute(u,g),bf(ga,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bf(s,e,t,n,i,r,o){let a=$c.distanceSqToPoint(s);if(a<t){let c=new N;$c.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Ha=class extends jt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new oe:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,i=[],r=[],o=[],a=new N,c=new Ve;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Vt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Vt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mo=class extends Hn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new oe){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zc=class extends mo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var xa=new N,yc=new Mh,bc=new Mh,Mc=new Mh,go=class extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(xa.subVectors(i[0],i[1]).add(i[0]),l=xa);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(xa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),yc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),bc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),Mc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),bc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(yc.calc(c),bc.calc(c),Mc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function cy(s,e){let t=1-s;return t*t*e}function hy(s,e){return 2*(1-s)*s*e}function uy(s,e){return s*s*e}function so(s,e,t,n){return cy(s,e)+hy(s,t)+uy(s,n)}function dy(s,e){let t=1-s;return t*t*t*e}function fy(s,e){let t=1-s;return 3*t*t*s*e}function py(s,e){return 3*(1-s)*s*s*e}function my(s,e){return s*s*s*e}function ro(s,e,t,n,i){return dy(s,e)+fy(s,t)+py(s,n)+my(s,i)}var Ga=class extends Hn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,i.x,r.x,o.x,a.x),ro(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kc=class extends Hn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,i.x,r.x,o.x,a.x),ro(e,i.y,r.y,o.y,a.y),ro(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Hn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends Hn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Hn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(so(e,i.x,r.x,o.x),so(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jc=class extends Hn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(so(e,i.x,r.x,o.x),so(e,i.y,r.y,o.y),so(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Mf(a,c.x,l.x,h.x,u.x),Mf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},Qc=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:go,CubicBezierCurve:Ga,CubicBezierCurve3:Kc,EllipseCurve:mo,LineCurve:Va,LineCurve3:Jc,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:jc,SplineCurve:Xa}),eh=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Qc[i.type]().fromJSON(i))}return this}},qa=class extends eh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Wa(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Ga(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new mo(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xo=class s extends Mt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Vt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new N,d=new oe,f=new N,g=new N,x=new N,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let _=n+v*h*i,y=Math.sin(_),R=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);let T=c[3*E+0]*y,A=c[3*E+1],z=c[3*E+0]*R;l.push(T,A,z)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,R=y,E=y+e.length,T=y+e.length+1,A=y+1;r.push(R,E,A),r.push(T,A,E)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ya=class s extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new N,h=new oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ln=class s extends Mt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function v(){let y=new N,R=new N,E=0,T=(t-e)/n;for(let A=0;A<=r;A++){let z=[],M=A/r,S=M*(t-e)+e;for(let I=0;I<=i;I++){let D=I/i,w=D*c+a,k=Math.sin(w),P=Math.cos(w);R.x=S*k,R.y=-M*n+p,R.z=S*P,u.push(R.x,R.y,R.z),y.set(k,T,P).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-M),z.push(g++)}x.push(z)}for(let A=0;A<i;A++)for(let z=0;z<r;z++){let M=x[z][A],S=x[z+1][A],I=x[z+1][A+1],D=x[z][A+1];h.push(M,S,D),h.push(S,I,D),E+=6}l.addGroup(m,E,0),m+=E}function _(y){let R=g,E=new oe,T=new N,A=0,z=y===!0?e:t,M=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;let S=g;for(let I=0;I<=i;I++){let w=I/i*c+a,k=Math.cos(w),P=Math.sin(w);T.x=z*P,T.y=p*M,T.z=z*k,u.push(T.x,T.y,T.z),d.push(0,M,0),E.x=k*.5+.5,E.y=P*.5*M+.5,f.push(E.x,E.y),g++}for(let I=0;I<i;I++){let D=R+I,w=S+I;y===!0?h.push(w,w+1,D):h.push(w+1,w,D),A+=3}l.addGroup(m,A,y===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yi=class s extends Ln{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},th=class s extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new N,y=new N,R=new N;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],y),f(t[E+2],R),c(_,y,R,v)}function c(v,_,y,R){let E=R+1,T=[];for(let A=0;A<=E;A++){T[A]=[];let z=v.clone().lerp(y,A/E),M=_.clone().lerp(y,A/E),S=E-A;for(let I=0;I<=S;I++)I===0&&A===E?T[A][I]=z:T[A][I]=z.clone().lerp(M,I/S)}for(let A=0;A<E;A++)for(let z=0;z<2*(E-A)-1;z++){let M=Math.floor(z/2);z%2===0?(d(T[A][M+1]),d(T[A+1][M]),d(T[A][M])):(d(T[A][M+1]),d(T[A+1][M+1]),d(T[A+1][M]))}}function l(v){let _=new N;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new N;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=p(v)/2/Math.PI+.5,R=m(v)/Math.PI+.5;o.push(y,1-R)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],R=o[v+4],E=Math.max(_,y,R),T=Math.min(_,y,R);E>.9&&T<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new N,_=new N,y=new N,R=new N,E=new oe,T=new oe,A=new oe;for(let z=0,M=0;z<r.length;z+=9,M+=6){v.set(r[z+0],r[z+1],r[z+2]),_.set(r[z+3],r[z+4],r[z+5]),y.set(r[z+6],r[z+7],r[z+8]),E.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),R.copy(v).add(_).add(y).divideScalar(3);let S=p(R);x(E,M+0,v,S),x(T,M+2,_,S),x(A,M+4,y,S)}}function x(v,_,y,R){R<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var $i=class extends qa{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new qa().fromJSON(i))}return this}},gy={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Qf(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=by(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return _o(r,o,t,a,c,f,0),o}};function Qf(s,e,t,n,i){let r,o;if(i===Iy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Sf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Sf(r,s[r],s[r+1],o);return o&&hl(o,o.next)&&(yo(o),o=o.next),o}function ws(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(hl(t,t.next)||At(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Ty(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?_y(s,n,i,r):xy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=vy(ws(s),e,t),_o(s,e,t,n,i,r,2)):o===2&&yy(s,e,t,n,i,r):_o(ws(s),e,t,n,i,r,1);break}}}function xy(s){let e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ir(i,a,r,c,o,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _y(s,e,t,n){let i=s.prev,r=s,o=s.next;if(At(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=nh(f,g,e,t,n),v=nh(x,p,e,t,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=m&&y&&y.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&ir(a,h,c,u,l,d,_.x,_.y)&&At(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&ir(a,h,c,u,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&ir(a,h,c,u,l,d,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&ir(a,h,c,u,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function vy(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!hl(i,r)&&ep(i,n,n.next,r)&&vo(i,r)&&vo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),yo(n),yo(n.next),n=s=r),n=n.next}while(n!==s);return ws(n)}function yy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cy(o,a)){let c=tp(o,a);o=ws(o,o.next),c=ws(c,c.next),_o(o,e,t,n,i,r,0),_o(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function by(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Qf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ry(l));for(i.sort(My),r=0;r<i.length;r++)t=Sy(i[r],t);return t}function My(s,e){return s.x-e.x}function Sy(s,e){let t=Ey(s,e);if(!t)return e;let n=tp(t,s);return ws(n,n.next),ws(t,t.next)}function Ey(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ir(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),vo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&wy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function wy(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function Ty(s,e,t,n){let i=s;do i.z===0&&(i.z=nh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ay(i)}function Ay(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function nh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ry(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ir(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Cy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Py(s,e)&&(vo(s,e)&&vo(e,s)&&Ly(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||hl(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function hl(s,e){return s.x===e.x&&s.y===e.y}function ep(s,e,t,n){let i=va(At(s,e,t)),r=va(At(s,e,n)),o=va(At(t,n,s)),a=va(At(t,n,e));return!!(i!==r&&o!==a||i===0&&_a(s,t,e)||r===0&&_a(s,n,e)||o===0&&_a(t,s,n)||a===0&&_a(t,e,n))}function _a(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function va(s){return s>0?1:s<0?-1:0}function Py(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ep(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function vo(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function Ly(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function tp(s,e){let t=new ih(s.i,s.x,s.y),n=new ih(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sf(s,e,t,n){let i=new ih(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ih(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Iy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Xi=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ef(e),wf(n,e);let o=e.length;t.forEach(Ef);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,wf(n,t[c]);let a=gy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ef(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function wf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var $a=class s extends Mt{constructor(e=new $i([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new He(i,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Ny,_,y=!1,R,E,T,A;m&&(_=m.getSpacedPoints(h),y=!0,d=!1,R=m.computeFrenetFrames(h,!1),E=new N,T=new N,A=new N),d||(p=0,f=0,g=0,x=0);let z=a.extractPoints(l),M=z.shape,S=z.holes;if(!Xi.isClockWise(M)){M=M.reverse();for(let U=0,ue=S.length;U<ue;U++){let ee=S[U];Xi.isClockWise(ee)&&(S[U]=ee.reverse())}}let D=Xi.triangulateShape(M,S),w=M;for(let U=0,ue=S.length;U<ue;U++){let ee=S[U];M=M.concat(ee)}function k(U,ue,ee){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ue,ee)}let P=M.length,q=D.length;function Y(U,ue,ee){let he,ne,F,ie=U.x-ue.x,le=U.y-ue.y,ve=ee.x-U.x,L=ee.y-U.y,b=ie*ie+le*le,V=ie*L-le*ve;if(Math.abs(V)>Number.EPSILON){let O=Math.sqrt(b),te=Math.sqrt(ve*ve+L*L),re=ue.x-le/O,We=ue.y+ie/O,Fe=ee.x-L/te,me=ee.y+ve/te,xe=((Fe-re)*L-(me-We)*ve)/(ie*L-le*ve);he=re+ie*xe-U.x,ne=We+le*xe-U.y;let Xe=he*he+ne*ne;if(Xe<=2)return new oe(he,ne);F=Math.sqrt(Xe/2)}else{let O=!1;ie>Number.EPSILON?ve>Number.EPSILON&&(O=!0):ie<-Number.EPSILON?ve<-Number.EPSILON&&(O=!0):Math.sign(le)===Math.sign(L)&&(O=!0),O?(he=-le,ne=ie,F=Math.sqrt(b)):(he=ie,ne=le,F=Math.sqrt(b/2))}return new oe(he/F,ne/F)}let H=[];for(let U=0,ue=w.length,ee=ue-1,he=U+1;U<ue;U++,ee++,he++)ee===ue&&(ee=0),he===ue&&(he=0),H[U]=Y(w[U],w[ee],w[he]);let W=[],se,Me=H.concat();for(let U=0,ue=S.length;U<ue;U++){let ee=S[U];se=[];for(let he=0,ne=ee.length,F=ne-1,ie=he+1;he<ne;he++,F++,ie++)F===ne&&(F=0),ie===ne&&(ie=0),se[he]=Y(ee[he],ee[F],ee[ie]);W.push(se),Me=Me.concat(se)}for(let U=0;U<p;U++){let ue=U/p,ee=f*Math.cos(ue*Math.PI/2),he=g*Math.sin(ue*Math.PI/2)+x;for(let ne=0,F=w.length;ne<F;ne++){let ie=k(w[ne],H[ne],he);Ie(ie.x,ie.y,-ee)}for(let ne=0,F=S.length;ne<F;ne++){let ie=S[ne];se=W[ne];for(let le=0,ve=ie.length;le<ve;le++){let L=k(ie[le],se[le],he);Ie(L.x,L.y,-ee)}}}let Be=g+x;for(let U=0;U<P;U++){let ue=d?k(M[U],Me[U],Be):M[U];y?(T.copy(R.normals[0]).multiplyScalar(ue.x),E.copy(R.binormals[0]).multiplyScalar(ue.y),A.copy(_[0]).add(T).add(E),Ie(A.x,A.y,A.z)):Ie(ue.x,ue.y,0)}for(let U=1;U<=h;U++)for(let ue=0;ue<P;ue++){let ee=d?k(M[ue],Me[ue],Be):M[ue];y?(T.copy(R.normals[U]).multiplyScalar(ee.x),E.copy(R.binormals[U]).multiplyScalar(ee.y),A.copy(_[U]).add(T).add(E),Ie(A.x,A.y,A.z)):Ie(ee.x,ee.y,u/h*U)}for(let U=p-1;U>=0;U--){let ue=U/p,ee=f*Math.cos(ue*Math.PI/2),he=g*Math.sin(ue*Math.PI/2)+x;for(let ne=0,F=w.length;ne<F;ne++){let ie=k(w[ne],H[ne],he);Ie(ie.x,ie.y,u+ee)}for(let ne=0,F=S.length;ne<F;ne++){let ie=S[ne];se=W[ne];for(let le=0,ve=ie.length;le<ve;le++){let L=k(ie[le],se[le],he);y?Ie(L.x,L.y+_[h-1].y,_[h-1].x+ee):Ie(L.x,L.y,u+ee)}}}j(),ae();function j(){let U=i.length/3;if(d){let ue=0,ee=P*ue;for(let he=0;he<q;he++){let ne=D[he];Te(ne[2]+ee,ne[1]+ee,ne[0]+ee)}ue=h+p*2,ee=P*ue;for(let he=0;he<q;he++){let ne=D[he];Te(ne[0]+ee,ne[1]+ee,ne[2]+ee)}}else{for(let ue=0;ue<q;ue++){let ee=D[ue];Te(ee[2],ee[1],ee[0])}for(let ue=0;ue<q;ue++){let ee=D[ue];Te(ee[0]+P*h,ee[1]+P*h,ee[2]+P*h)}}n.addGroup(U,i.length/3-U,0)}function ae(){let U=i.length/3,ue=0;Se(w,ue),ue+=w.length;for(let ee=0,he=S.length;ee<he;ee++){let ne=S[ee];Se(ne,ue),ue+=ne.length}n.addGroup(U,i.length/3-U,1)}function Se(U,ue){let ee=U.length;for(;--ee>=0;){let he=ee,ne=ee-1;ne<0&&(ne=U.length-1);for(let F=0,ie=h+p*2;F<ie;F++){let le=P*F,ve=P*(F+1),L=ue+he+le,b=ue+ne+le,V=ue+ne+ve,O=ue+he+ve;we(L,b,V,O)}}}function Ie(U,ue,ee){c.push(U),c.push(ue),c.push(ee)}function Te(U,ue,ee){qe(U),qe(ue),qe(ee);let he=i.length/3,ne=v.generateTopUV(n,i,he-3,he-2,he-1);Pe(ne[0]),Pe(ne[1]),Pe(ne[2])}function we(U,ue,ee,he){qe(U),qe(ue),qe(he),qe(ue),qe(ee),qe(he);let ne=i.length/3,F=v.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);Pe(F[0]),Pe(F[1]),Pe(F[3]),Pe(F[1]),Pe(F[2]),Pe(F[3])}function qe(U){i.push(c[U*3+0]),i.push(c[U*3+1]),i.push(c[U*3+2])}function Pe(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qc[i.type]().fromJSON(i)),new s(n,e.options)}},Ny={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new oe(r,o),new oe(a,c),new oe(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new oe(o,1-c),new oe(l,1-u),new oe(d,1-g),new oe(x,1-m)]:[new oe(a,1-c),new oe(h,1-u),new oe(f,1-g),new oe(p,1-m)]}};function Dy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Za=class s extends th{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ka=class s extends Mt{constructor(e=new $i([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new He(i,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(o,2));function l(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Xi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];Xi.isClockWise(v)===!0&&(g[p]=v.reverse())}let x=Xi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){let v=f[p];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){let v=x[p],_=v[0]+u,y=v[1]+u,R=v[2]+u;n.push(_,y,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Uy(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Uy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var ai=class s extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,d=new N,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],_=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(E+y,1-_),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let _=h[m][v+1],y=h[m][v],R=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&f.push(_,y,E),(m!==n-1||c<Math.PI)&&f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var br=class s extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Sn=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},_n=class extends cn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var hn=class extends cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ya(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fy(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function np(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Zi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends Zi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:r=e,a=2*t-n;break;case md:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pd:o=e,c=2*n-t;break;case md:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+v*o[l+R]+_*o[c+R]+y*o[u+R];return r}},rh=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},oh=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Oy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ys;var Ki=class extends Gn{};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=hr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Gn{};Ja.prototype.ValueTypeName="color";var Ei=class extends Gn{};Ei.prototype.ValueTypeName="number";var ah=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Cn.slerpFlat(r,0,o,l-a,o,l,c);return r}},li=class extends Gn{InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=ys;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Gn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=hr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Gn{};wi.prototype.ValueTypeName="vector";var ja=class{constructor(e,t=-1,n,i=zm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(By(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Fy(c);c=Tf(c,1,h),l=Tf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ei(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let p=[],m=[];np(f,p,m,g),p.length!==0&&x.push(new u(d,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){let _=d[g];p.push(_.time),m.push(_.morphTarget===x?1:0)}i.push(new Ei(".morphTargetInfluence["+x+"]",p,m))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(wi,f+".position",d,"pos",i),n(li,f+".quaternion",d,"rot",i),n(wi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return Ja;case"quaternion":return li;case"bool":case"boolean":return Ki;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function By(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zy(s.type);if(s.times===void 0){let t=[],n=[];np(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},lh=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ky=new lh,Ti=class{constructor(e){this.manager=e!==void 0?e:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},ch=class extends Error{constructor(e,t){super(e),this.response=t}},bo=class extends Ti{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){v();function v(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{x+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,T=h.length;E<T;E++){let A=h[E];A.onProgress&&A.onProgress(R)}m.enqueue(y),v()}})}}});return new Response(p)}else throw new ch(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hi.add(e,l);let h=_i[e];delete _i[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hh=class extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=lo("img");function c(){h(),Hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Qa=class extends Ti{constructor(e){super(e)}load(e,t,n,i){let r=new jt,o=new hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Mr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},el=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sc=new Ve,Af=new N,Rf=new N,Mo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),Rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rf),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=class extends Mo{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Sr=class extends Mr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cf=new Ve,Qr=new N,Ec=new N,dh=class extends Mo{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qr),Ec.copy(n.position),Ec.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ec),n.updateMatrixWorld(),i.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf)}},tl=class extends Mr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fh=class extends Mo{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ji=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nl=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(e,c),r.manager.itemStart(e)}};var Sh="\\[\\]\\.:\\/",Hy=new RegExp("["+Sh+"]","g"),Eh="[^"+Sh+"]",Gy="[^"+Sh.replace("\\.","")+"]",Vy=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Wy=/(WCOD+)?/.source.replace("WCOD",Gy),Xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),Yy=new RegExp("^"+Vy+Wy+Xy+qy+"$"),$y=["material","materials","bones","map"],ph=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hy,"")}static parseTrackName(e){let t=Yy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);$y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=ph;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ib=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);var jn=[{id:"drizzie",name:"Drizzie City",nx:8,nz:8,x0:-560,z0:-560,kind:"metro"},{id:"serrana",name:"Vila Serrana",nx:4,nz:4,x0:-3e3,z0:-2300,kind:"town"},{id:"azul",name:"Porto Azul",nx:5,nz:3,x0:1900,z0:1300,kind:"port"}],ul=Object.fromEntries(jn.map(s=>[s.id,s])),As=s=>s.x0+s.nx*140,Tr=s=>s.z0+s.nz*140;function dl(s,e,t){return s.kind==="metro"?e===1&&t===5||e===5&&t===6||e===2&&t===1?"park":e>=2&&e<=5&&t>=2&&t<=5?"downtown":e>=6?"industrial":"residential":s.kind==="town"?e===1&&t===1?"park":"town":t===s.nz-1?"port":e>=3?"industrial":"town"}var ip=[[-2100,-4300],[-1750,-3100],[-1400,-2050],[-1250,-1e3],[-1080,0],[-850,800],[-350,1400],[250,1700],[500,2100]],Ai=54,sp=[{id:"BR-101",from:["drizzie",0,4],to:["serrana",4,2],pts:[[-570,0],[-720,0],[-900,0],[-1100,-160],[-1350,-480],[-1560,-820],[-1760,-1180],[-1980,-1520],[-2200,-1840],[-2330,-2020],[-2430,-2020]],hills:7},{id:"SP-280",from:["drizzie",8,4],to:["azul",2,0],pts:[[570,0],[760,0],[960,0],[1100,0],[1350,80],[1620,280],[1860,560],[2060,860],[2180,1100],[2180,1290]],hills:9},{id:"RS-030",from:["drizzie",4,0],to:null,pts:[[0,-570],[0,-800],[-120,-1080],[-420,-1380],[-800,-1640],[-1150,-1880],[-1450,-2e3],[-1720,-2150],[-1960,-2420],[-2100,-2650],[-2100,-2900],[-2100,-3100]],hills:10}],Qn=[{id:"garagem",name:"Garagem Drizzie",city:"drizzie",bx:2,bz:6,side:"n",kind:"garage",color:3108830},{id:"cd",name:"Centro de Distribui\xE7\xE3o",city:"drizzie",bx:6,bz:1,side:"w",kind:"warehouse",color:14721056},{id:"mercado",name:"Mercado Central",city:"drizzie",bx:3,bz:3,side:"w",kind:"market",color:3055186},{id:"hospital",name:"Hospital Municipal",city:"drizzie",bx:4,bz:5,side:"e",kind:"hospital",color:15790320},{id:"obra",name:"Canteiro de Obras",city:"drizzie",bx:1,bz:2,side:"e",kind:"construction",color:15774720},{id:"posto",name:"Posto Rodovi\xE1rio",city:"drizzie",bx:5,bz:7,side:"n",kind:"fuel",color:13639712},{id:"siderurgica",name:"Sider\xFArgica A\xE7o Forte",city:"drizzie",bx:7,bz:5,side:"w",kind:"steel",color:9059114},{id:"silo",name:"Silo Agr\xEDcola",city:"serrana",bx:0,bz:1,side:"e",kind:"silo",color:13152874},{id:"fabrica",name:"F\xE1brica de M\xF3veis",city:"serrana",bx:2,bz:2,side:"w",kind:"factory",color:10119999},{id:"porto",name:"Porto Azul",city:"azul",bx:2,bz:2,side:"n",kind:"port",color:2068400},{id:"refinaria",name:"Refinaria Petrosul",city:"azul",bx:4,bz:1,side:"w",kind:"refinery",color:14211288},{id:"fazenda",name:"Fazenda Boa Vista",hw:"BR-101",lot:[-862,11,-742,131],side:"n",kind:"farm",color:11549230},{id:"eolica",name:"Parque E\xF3lico",hw:"SP-280",lot:[900,-131,1020,-11],side:"s",kind:"wind",color:15658734},{id:"serraria",name:"Serraria Pinheiro",hw:"RS-030",lot:[-2089,-3020,-1969,-2900],side:"w",kind:"sawmill",color:8016432},{id:"pedreira",name:"Pedreira Rocha Viva",hw:"RS-030",lot:[-2160,-3220,-2040,-3100],side:"s",kind:"quarry",color:10261124}],Ri=Object.fromEntries(Qn.map(s=>[s.id,s])),Ar=[{id:"mini",name:"Mini Carga 1.0",hp:95,cap:1.5,mass:1,level:1,price:0,rigid:!0,axles:2,model:"labo",color:4030417,vmax:95,desc:"Picape de carga compacta para entregas leves."},{id:"urbano",name:"Leve Ba\xFA 4.5",hp:160,cap:5,mass:4.5,level:2,price:8e3,rigid:!0,axles:2,model:"canter",color:15921906,vmax:100,desc:"Caminh\xE3o leve com ba\xFA, \xE1gil na cidade."},{id:"toco",name:"Toco 11-240",hp:240,cap:12,mass:7.5,level:3,price:15e3,rigid:!0,axles:2,cab:"cabover",roof:"mid",color:3108830,vmax:100,desc:"Caminh\xE3o m\xE9dio de carroceria ba\xFA."},{id:"cavalo",cfg:"4x2",name:"Cavalo 360",hp:360,cap:30,mass:8,level:6,price:6e4,rigid:!1,axles:2,cab:"cabover",roof:"high",color:13777450,vmax:110,desc:"Cavalo mec\xE2nico cara-chata para carretas."},{id:"rodo",cfg:"6x2",name:"Rodomax 480",hp:480,cap:45,mass:9,level:10,price:14e4,rigid:!1,axles:3,cab:"cabover",roof:"high",color:2072174,vmax:110,desc:"Cavalo 6x2 de teto alto para longas viagens."},{id:"titan",cfg:"6x4",name:"Titan 620 Bicudo",hp:620,cap:65,mass:10.5,level:15,price:28e4,rigid:!1,axles:3,cab:"conventional",roof:"high",color:2238513,vmax:105,desc:"Bicudo 6x4 de cap\xF4 longo e muita tra\xE7\xE3o."},{id:"colosso",cfg:"8x4",name:"Colosso 750 8x4",hp:750,cap:90,mass:12.5,level:20,price:5e5,rigid:!1,axles:4,cab:"conventional",roof:"high",color:15769600,vmax:95,desc:"Gigante para cargas especiais e indivis\xEDveis."}],Eo=Object.fromEntries(Ar.map(s=>[s.id,s])),wo=[{id:"encomendas",name:"Encomendas",icon:"\u{1F4E6}",t:1,lvl:1,trailer:"box",rate:1,from:["cd"],to:["mercado","hospital","posto","obra","fabrica"]},{id:"medicamentos",name:"Medicamentos",icon:"\u{1F48A}",t:1.5,lvl:1,trailer:"box",rate:1.35,fragile:!0,from:["cd","porto"],to:["hospital"]},{id:"eletronicos",name:"Eletr\xF4nicos",icon:"\u{1F4FA}",t:2.5,lvl:2,trailer:"box",rate:1.4,fragile:!0,from:["porto"],to:["cd","mercado"]},{id:"hortifruti",name:"Hortifr\xFAti",icon:"\u{1F96C}",t:4,lvl:1,trailer:"box",rate:1.1,from:["fazenda"],to:["mercado","cd"]},{id:"moveis",name:"M\xF3veis",icon:"\u{1F6CB}\uFE0F",t:6,lvl:3,trailer:"box",rate:1.15,fragile:!0,from:["fabrica"],to:["mercado","cd","obra"]},{id:"bebidas",name:"Bebidas",icon:"\u{1F964}",t:9,lvl:3,trailer:"box",rate:1.05,from:["cd"],to:["mercado","posto"]},{id:"racao",name:"Ra\xE7\xE3o Animal",icon:"\u{1F33E}",t:12,lvl:4,trailer:"box",rate:1,from:["silo"],to:["fazenda"]},{id:"trator",name:"Trator Agr\xEDcola",icon:"\u{1F69C}",t:14,lvl:6,trailer:"lowboy",model:"tractor",rate:1.5,from:["porto"],to:["fazenda","silo"]},{id:"madeira",name:"Toras de Madeira",icon:"\u{1FAB5}",t:18,lvl:6,trailer:"flatbed",model:"logs",rate:1.05,from:["serraria"],to:["fabrica","obra","porto"]},{id:"conteiner",name:"Cont\xEAiner 40 p\xE9s",icon:"\u{1F6A2}",t:26,lvl:7,trailer:"flatbed",model:"container",rate:1.15,from:["porto"],to:["cd","siderurgica","fabrica"]},{id:"graos",name:"Soja a Granel",icon:"\u{1FAD8}",t:28,lvl:8,trailer:"bulk",rate:1,from:["fazenda","silo"],to:["porto"]},{id:"combustivel",name:"Combust\xEDvel",icon:"\u26FD",t:30,lvl:9,trailer:"tank",rate:1.45,hazard:!0,from:["refinaria"],to:["posto","fazenda","pedreira"]},{id:"cimento",name:"Cimento",icon:"\u{1F3D7}\uFE0F",t:32,lvl:10,trailer:"tank",model:"silo",rate:1.05,from:["pedreira"],to:["obra"]},{id:"bobinas",name:"Bobinas de A\xE7o",icon:"\u{1F9F2}",t:36,lvl:11,trailer:"flatbed",model:"coils",rate:1.2,from:["siderurgica"],to:["porto","fabrica"]},{id:"vigas",name:"Vigas de A\xE7o",icon:"\u{1F3E2}",t:42,lvl:13,trailer:"flatbed",model:"beams",rate:1.25,from:["siderurgica"],to:["obra"]},{id:"escavadeira",name:"Escavadeira",icon:"\u{1F6A7}",t:48,lvl:15,trailer:"lowboy",model:"excavator",rate:1.55,from:["porto"],to:["pedreira","obra"]},{id:"transformador",name:"Transformador",icon:"\u26A1",t:56,lvl:18,trailer:"lowboy",model:"transformer",rate:1.7,fragile:!0,from:["siderurgica","porto"],to:["refinaria","eolica"]},{id:"pa_eolica",name:"P\xE1 E\xF3lica",icon:"\u{1F300}",t:62,lvl:20,trailer:"lowboy",model:"blade",rate:1.9,fragile:!0,from:["porto"],to:["eolica"]},{id:"prensa",name:"Prensa Industrial",icon:"\u{1F3ED}",t:85,lvl:24,trailer:"lowboy",model:"press",rate:2.1,from:["porto"],to:["siderurgica","fabrica"]}],un=Object.fromEntries(wo.map(s=>[s.id,s])),Rr=s=>200+180*(s-1);function rp(s){return s?s.trailer==="lowboy"?9:s.trailer==="tank"?7:6.5:0}var Rt={x0:-3400,z0:-3500,x1:3e3,z1:2300};var en=1024,op=4,wh={};function ap(s,e){en=s,op=e}function Vn(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function nt(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function dn(s,e,t,n,i,r=!0){let o=s.getImageData(0,0,e,t),a=o.data,c=Vn(i);for(let l=0;l<a.length;l+=4){let h=(c()-.5)*n;r?(a[l]+=h,a[l+1]+=h,a[l+2]+=h):(a[l]+=h,a[l+1]+=(c()-.5)*n,a[l+2]+=(c()-.5)*n)}s.putImageData(o,0,0)}function Cr(s,e,t,n,i,r,o){let a=Vn(o);for(let c=0;c<n;c++){s.fillStyle=i[a()*i.length|0],s.globalAlpha=.25+a()*.5;let l=.5+a()*r;s.beginPath(),s.arc(a()*e,a()*t,l,0,Math.PI*2),s.fill()}s.globalAlpha=1}function it(s,e=!0){let t=new Ha(s);return t.colorSpace=Ft,t.anisotropy=op,t.generateMipmaps=!0,t.minFilter=Fn,t.magFilter=Ht,e&&(t.wrapS=t.wrapT=Mi),t}function ot(s,e){return wh[s]||(wh[s]=e()),wh[s]}function fl(s,e,t,n="#3b3d40"){s.fillStyle=n,s.fillRect(0,0,e,e),Cr(s,e,e,e*6,["#5a5c60","#2a2b2d","#6b6b6b","#232323"],e/512,t),dn(s,e,e,22,t+1)}var Ae={asphalt:()=>ot("asphalt",()=>{let s=en/2,[e,t]=nt(s,s);return fl(t,s,11),it(e)}),road:()=>ot("road",()=>{let s=en,[e,t]=nt(s,s);fl(t,s,21);let n=s/20;t.fillStyle="rgba(20,20,20,0.18)";for(let o of[1.6,3.4,6.6,8.4])t.fillRect((10+o)*n-n*.6,0,n*1.2,s),t.fillRect((10-o)*n-n*.6,0,n*1.2,s);let i=(o,a,c,l)=>{t.fillStyle=o,l?t.fillRect(a*n-c*n/2,s*.1,c*n,s*l):t.fillRect(a*n-c*n/2,0,c*n,s)};i("#e8b923",9.8,.15),i("#e8b923",10.2,.15),i("#f2f2f2",5,.15,.45),i("#f2f2f2",15,.15,.45),i("#f2f2f2",.5,.18),i("#f2f2f2",19.5,.18);let r=Vn(5);t.globalCompositeOperation="source-atop";for(let o=0;o<s*3;o++)t.fillStyle="rgba(60,60,62,0.35)",t.fillRect(r()*s,r()*s,1+r()*3,1+r()*3);return t.globalCompositeOperation="source-over",it(e)}),intersection:()=>ot("intersection",()=>{let s=en,[e,t]=nt(s,s);fl(t,s,31);let n=s/20;t.fillStyle="rgba(240,240,240,0.92)";for(let i=0;i<8;i++){let r=(1.5+i*2.2)*n;t.fillRect(r,.3*n,1.1*n,2.6*n),t.fillRect(r,s-2.9*n,1.1*n,2.6*n),t.fillRect(.3*n,r,2.6*n,1.1*n),t.fillRect(s-2.9*n,r,2.6*n,1.1*n)}return dn(t,s,s,10,32),it(e,!1)}),concrete:()=>ot("concrete",()=>{let s=en/2,[e,t]=nt(s,s);t.fillStyle="#a9a69f",t.fillRect(0,0,s,s),dn(t,s,s,26,41),Cr(t,s,s,s*2,["#8f8c86","#bdbab3"],s/400,42),t.strokeStyle="rgba(70,68,64,0.55)",t.lineWidth=Math.max(1,s/256);for(let n=0;n<=4;n++)t.beginPath(),t.moveTo(n*s/4,0),t.lineTo(n*s/4,s),t.stroke(),t.beginPath(),t.moveTo(0,n*s/4),t.lineTo(s,n*s/4),t.stroke();return it(e)}),lot:()=>ot("lot",()=>{let s=en/2,[e,t]=nt(s,s);t.fillStyle="#8e8b85",t.fillRect(0,0,s,s),dn(t,s,s,30,51),Cr(t,s,s,s,["#6f6c66","#a5a29c","#5d5a55"],s/200,52),t.strokeStyle="rgba(50,48,45,0.5)",t.lineWidth=2,t.strokeRect(1,1,s-2,s-2);let n=Vn(53);for(let i=0;i<6;i++){let r=n()*s,o=n()*s,a=t.createRadialGradient(r,o,0,r,o,s/10);a.addColorStop(0,"rgba(30,30,30,0.25)"),a.addColorStop(1,"rgba(30,30,30,0)"),t.fillStyle=a,t.fillRect(0,0,s,s)}return it(e)}),grass:()=>ot("grass",()=>{let s=en/2,[e,t]=nt(s,s);t.fillStyle="#4f7a32",t.fillRect(0,0,s,s);let n=Vn(61);for(let i=0;i<40;i++){let r=n()*s,o=n()*s,a=s*(.05+n()*.15),c=t.createRadialGradient(r,o,0,r,o,a),l=n()>.5?"96,140,58":"62,96,38";c.addColorStop(0,`rgba(${l},0.45)`),c.addColorStop(1,`rgba(${l},0)`),t.fillStyle=c,t.fillRect(0,0,s,s)}t.lineWidth=1;for(let i=0;i<s*14;i++){let r=n()*s,o=n()*s;t.strokeStyle=n()>.5?"rgba(120,170,70,0.5)":"rgba(40,70,25,0.5)",t.beginPath(),t.moveTo(r,o),t.lineTo(r+(n()-.5)*3,o-2-n()*4),t.stroke()}return dn(t,s,s,14,62,!1),it(e)}),field:()=>ot("field",()=>{let s=en/2,[e,t]=nt(s,s);t.fillStyle="#7a5a36",t.fillRect(0,0,s,s),dn(t,s,s,30,71);let n=16;for(let i=0;i<n;i++){let r=(i+.5)*(s/n);t.fillStyle="#5d8a2a",t.fillRect(0,r-s/n/4,s,s/n/2)}return Cr(t,s,s,s*4,["#7fae3a","#4a7020","#8fbf4a"],2,72),it(e)}),sand:()=>ot("sand",()=>{let s=en/4,[e,t]=nt(s,s);return t.fillStyle="#d6c49a",t.fillRect(0,0,s,s),dn(t,s,s,26,81),it(e)}),water:()=>ot("water",()=>{let s=en/2,[e,t]=nt(s,s);t.fillStyle="#1d5f7d",t.fillRect(0,0,s,s);let n=Vn(91);for(let i=0;i<900;i++){t.strokeStyle=n()>.5?"rgba(170,220,240,0.22)":"rgba(10,40,60,0.25)",t.lineWidth=1+n()*2;let r=n()*s,o=n()*s,a=6+n()*20;t.beginPath(),t.moveTo(r,o),t.quadraticCurveTo(r+a/2,o-3,r+a,o),t.stroke()}return it(e)}),roof:()=>ot("roof",()=>{let s=en/4,[e,t]=nt(s,s);return t.fillStyle="#5c5a57",t.fillRect(0,0,s,s),dn(t,s,s,34,101),Cr(t,s,s,s*3,["#77746f","#44423f"],1.5,102),it(e)}),tiles:()=>ot("tiles",()=>{let s=en/4,[e,t]=nt(s,s);t.fillStyle="#9b3d2a",t.fillRect(0,0,s,s);let n=8;for(let i=0;i<n;i++)for(let r=0;r<n;r++){let o=t.createLinearGradient(0,i*s/n,0,(i+1)*s/n);o.addColorStop(0,"#b4513a"),o.addColorStop(1,"#7a2c1d"),t.fillStyle=o,t.fillRect((r+i%2*.5)*s/n,i*s/n,s/n-1,s/n-1)}return dn(t,s,s,16,103),it(e)}),metal:()=>ot("metal",()=>{let s=en/2,[e,t]=nt(s,s),n=32;for(let i=0;i<n;i++){let r=t.createLinearGradient(i*s/n,0,(i+1)*s/n,0);r.addColorStop(0,"#9aa1a6"),r.addColorStop(.5,"#d9dee1"),r.addColorStop(1,"#868c90"),t.fillStyle=r,t.fillRect(i*s/n,0,s/n,s)}return dn(t,s,s,14,111),it(e)}),tire:()=>ot("tire",()=>{let[e,t]=nt(256,256);t.fillStyle="#1b1b1c",t.fillRect(0,0,256,256),t.fillStyle="#2c2c2e";for(let n=0;n<24;n++)t.save(),t.translate(n*256/24,0),t.fillRect(0,0,256/48,256),t.restore();return dn(t,256,256,10,121),it(e)}),rim:()=>ot("rim",()=>{let[e,t]=nt(256,256);t.fillStyle="#151515",t.fillRect(0,0,256,256);let n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256*.36);n.addColorStop(0,"#f0f0f0"),n.addColorStop(.6,"#b8bcc0"),n.addColorStop(1,"#7c8084"),t.fillStyle=n,t.beginPath(),t.arc(256/2,256/2,256*.36,0,Math.PI*2),t.fill(),t.fillStyle="#444";for(let i=0;i<10;i++){let r=i/10*Math.PI*2;t.beginPath(),t.arc(256/2+Math.cos(r)*256*.2,256/2+Math.sin(r)*256*.2,256*.025,0,7),t.fill()}return t.fillStyle="#555",t.beginPath(),t.arc(256/2,256/2,256*.09,0,7),t.fill(),it(e,!1)}),facade:s=>ot("facade"+s,()=>{let e=en,[t,n]=nt(e,e),[i,r]=nt(e/2,e/2);r.fillStyle="#000",r.fillRect(0,0,e/2,e/2);let o=Vn(200+s),a=[{wall:"#c9d0d6",win:["#3a5a78","#4a7090","#2d4a66"],frame:"#7f8a93",mw:.78,mh:.62},{wall:"#9c4f39",win:["#24323e","#3b4d5c","#2f3d48"],frame:"#ddd4c2",mw:.42,mh:.5},{wall:"#d9d2c3",win:["#2b3a47","#3f5566","#33414d"],frame:"#948c7b",mw:.5,mh:.48},{wall:"#66757f",win:["#1d2d3c","#2c4a64","#3a5f7d"],frame:"#3a4954",mw:.9,mh:.8}][s];if(n.fillStyle=a.wall,n.fillRect(0,0,e,e),dn(n,e,e,18,210+s),s===1){n.strokeStyle="rgba(70,30,20,0.4)",n.lineWidth=1;let d=e/96;for(let f=0;f<96;f++){n.beginPath(),n.moveTo(0,f*d),n.lineTo(e,f*d),n.stroke();for(let g=0;g<32;g++){let x=(g+f%2*.5)*e/32;n.beginPath(),n.moveTo(x,f*d),n.lineTo(x,(f+1)*d),n.stroke()}}}let c=4,l=e/c,h=["#ffd38a","#ffe7b0","#fff4d6","#cfe3ff","#ffc070"];for(let d=0;d<c;d++){for(let f=0;f<c;f++){let g=f*l,x=d*l,p=l*a.mw,m=l*a.mh,v=g+(l-p)/2,_=x+(l-m)/2-l*.04;n.fillStyle=a.frame,n.fillRect(v-3,_-3,p+6,m+6);let y=n.createLinearGradient(v,_,v+p,_+m),R=a.win[o()*a.win.length|0];if(y.addColorStop(0,R),y.addColorStop(.5,"#8fa8bc"),y.addColorStop(.56,R),y.addColorStop(1,"#141d26"),n.fillStyle=y,n.fillRect(v,_,p,m),n.fillStyle=a.frame,n.fillRect(v+p/2-1.5,_,3,m),s!==3&&n.fillRect(v,_+m*.35,p,2),(s===1||s===2)&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(v-4,_+m+3,p+8,4)),o()<.42){let T=r.createLinearGradient(0,_*.5,0,(_+m)*.5),A=h[o()*h.length|0];T.addColorStop(0,A),T.addColorStop(1,"#6b4a20"),r.fillStyle=T,r.fillRect(v*.5,_*.5,p*.5,m*.5)}}(s===0||s===3)&&(n.fillStyle=a.frame,n.fillRect(0,d*l+l-4,e,4))}for(let d=0;d<40;d++){let f=o()*e,g=e*(.05+o()*.2),x=o()*e,p=n.createLinearGradient(0,x,0,x+g);p.addColorStop(0,"rgba(40,35,30,0.12)"),p.addColorStop(1,"rgba(40,35,30,0)"),n.fillStyle=p,n.fillRect(f,x,2+o()*6,g)}let u=it(t);return u.userData.emissive=it(i),u}),highway:()=>ot("highway",()=>{let s=en,[e,t]=nt(s,s);fl(t,s,23,"#3a3c3f");let n=s/18;t.fillStyle="rgba(150,150,150,0.18)",t.fillRect(0,0,2*n,s),t.fillRect(16*n,0,2*n,s),t.fillStyle="rgba(20,20,20,0.2)";for(let r of[4.2,6.6,11.4,13.8])t.fillRect(r*n-n*.5,0,n,s);t.fillStyle="#f2f2f2",t.fillRect(1.9*n,0,.15*n,s),t.fillRect(15.95*n,0,.15*n,s),t.fillStyle="#e8b923",t.fillRect(8.82*n,0,.14*n,s*.5),t.fillRect(9.04*n,0,.14*n,s);let i=Vn(24);t.strokeStyle="rgba(15,15,15,0.35)",t.lineWidth=1.2;for(let r=0;r<14;r++){let o=i()*s,a=i()*s;t.beginPath(),t.moveTo(o,a);for(let c=0;c<6;c++)o+=(i()-.5)*30,a+=i()*20,t.lineTo(o,a);t.stroke()}for(let r=0;r<3;r++)t.fillStyle="rgba(25,25,27,0.35)",t.fillRect(2*n+i()*12*n,i()*s,1.5*n+i()*n,1*n+i()*n);return it(e)}),roadSign:(s,e,t)=>ot("rs"+s+e+t,()=>{let[r,o]=nt(1024,410);o.fillStyle=t,o.fillRect(0,0,1024,410),o.strokeStyle="#fff",o.lineWidth=14,o.strokeRect(20,20,984,370),o.fillStyle="#fff",o.textAlign="center",o.textBaseline="middle";let a=120;for(o.font=`700 ${a}px sans-serif`;o.measureText(s).width>904;)a-=6,o.font=`700 ${a}px sans-serif`;return o.fillText(s,1024/2,410*.42),o.font="600 64px sans-serif",o.fillText(e,1024/2,410*.76),it(r,!1)}),speedSign:s=>ot("spd"+s,()=>{let[t,n]=nt(256,256);return n.fillStyle="#fff",n.beginPath(),n.arc(256/2,256/2,256/2,0,7),n.fill(),n.strokeStyle="#d0021b",n.lineWidth=28,n.beginPath(),n.arc(256/2,256/2,256/2-16,0,7),n.stroke(),n.fillStyle="#111",n.font="800 110px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),256/2,256/2+6),it(t,!1)}),clouds:()=>ot("clouds",()=>{let[t,n]=nt(1024,512);n.clearRect(0,0,1024,512);let i=Vn(555);for(let o=0;o<70;o++){let a=i()*1024,c=512*.25+i()*512*.55,l=30+i()*90;for(let h=0;h<7;h++){let u=a+(i()-.5)*l*1.8,d=c+(i()-.5)*l*.4,f=l*(.4+i()*.6),g=n.createRadialGradient(u,d,0,u,d,f);g.addColorStop(0,"rgba(255,255,255,0.55)"),g.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=g,n.fillRect(u-f,d-f,f*2,f*2),u<f&&(n.save(),n.translate(1024,0),n.fillRect(u-f,d-f,f*2,f*2),n.restore())}}let r=it(t);return r.wrapT=gn,r}),panel:()=>ot("panel",()=>{let[e,t]=nt(512,512),n=32;for(let r=0;r<n;r++){let o=t.createLinearGradient(r*512/n,0,(r+1)*512/n,0);o.addColorStop(0,"#d9dcdf"),o.addColorStop(.5,"#ffffff"),o.addColorStop(1,"#c8cbce"),t.fillStyle=o,t.fillRect(r*512/n,0,512/n,512)}t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(0,0,512,6),t.fillRect(0,506,512,6);let i=t.createLinearGradient(0,512,0,512*.6);return i.addColorStop(0,"rgba(110,92,70,0.35)"),i.addColorStop(1,"rgba(110,92,70,0)"),t.fillStyle=i,t.fillRect(0,0,512,512),dn(t,512,512,8,600),it(e)}),headlamp:()=>ot("headlamp",()=>{let[t,n]=nt(256,128),i=n.createLinearGradient(0,0,0,128);i.addColorStop(0,"#3a4048"),i.addColorStop(1,"#14181c"),n.fillStyle=i,n.fillRect(0,0,256,128);for(let[r,o]of[[70,40],[170,34]]){let a=n.createRadialGradient(r,60,2,r,60,o);a.addColorStop(0,"#ffffff"),a.addColorStop(.35,"#dfe6ee"),a.addColorStop(.7,"#8d98a5"),a.addColorStop(1,"#2b3138"),n.fillStyle=a,n.beginPath(),n.arc(r,60,o,0,7),n.fill()}return n.fillStyle="#f7fbff",n.fillRect(20,108,216,8),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=4,n.strokeRect(2,2,252,124),it(t,!1)}),taillamp:()=>ot("taillamp",()=>{let[t,n]=nt(128,64);return n.fillStyle="#5a0a0a",n.fillRect(0,0,128,64),n.fillStyle="#ff2a1a",n.fillRect(4,4,56,56),n.fillStyle="#ffa21a",n.fillRect(64,4,28,56),n.fillStyle="#f2f2f2",n.fillRect(96,4,28,56),it(t,!1)}),cabDecal:s=>ot("decal"+s,()=>{let[n,i]=nt(512,192);i.clearRect(0,0,512,192);let r=new de(s),o="#"+r.clone().multiplyScalar(.45).getHexString(),a=r.getHSL({}).l>.6?"#2a3440":"#ffffff";return i.fillStyle=o,i.beginPath(),i.moveTo(0,192*.55),i.lineTo(512,192*.25),i.lineTo(512,192*.42),i.lineTo(0,192*.72),i.fill(),i.fillStyle=a,i.beginPath(),i.moveTo(0,192*.76),i.lineTo(512,192*.46),i.lineTo(512,192*.5),i.lineTo(0,192*.8),i.fill(),i.font="italic 900 46px sans-serif",i.fillStyle=a,i.fillText("DRIZZIE",26,192*.42),it(n,!1)}),warehouse:()=>ot("warehouse",()=>{let s=en/2,[e,t]=nt(s,s),n=40;for(let i=0;i<n;i++){let r=t.createLinearGradient(i*s/n,0,(i+1)*s/n,0);r.addColorStop(0,"#b7bcc0"),r.addColorStop(.5,"#e4e7e9"),r.addColorStop(1,"#a6abaf"),t.fillStyle=r,t.fillRect(i*s/n,0,s/n,s)}return t.fillStyle="rgba(60,70,80,0.35)",t.fillRect(0,s*.9,s,s*.1),dn(t,s,s,12,301),it(e)}),container:s=>ot("container"+s,()=>{let[t,n]=nt(256,256),i=new de(s),r=24;for(let o=0;o<r;o++){let a=n.createLinearGradient(o*256/r,0,(o+1)*256/r,0);a.addColorStop(0,"#"+i.clone().multiplyScalar(.7).getHexString()),a.addColorStop(.5,"#"+i.clone().multiplyScalar(1.1).getHexString()),a.addColorStop(1,"#"+i.clone().multiplyScalar(.6).getHexString()),n.fillStyle=a,n.fillRect(o*256/r,0,256/r,256)}return n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=6,n.strokeRect(3,3,250,250),dn(n,256,256,14,311),it(t)}),cargoBox:(s,e)=>ot("cbox"+s+e,()=>{let t=en,n=en/4,[i,r]=nt(t,n),o=r.createLinearGradient(0,0,0,n);o.addColorStop(0,"#fbfbfb"),o.addColorStop(1,"#d7dadd"),r.fillStyle=o,r.fillRect(0,0,t,n),r.fillStyle=s,r.fillRect(0,n*.78,t,n*.08),r.beginPath(),r.moveTo(t*.05,n*.7),r.lineTo(t*.15,n*.2),r.lineTo(t*.22,n*.2),r.lineTo(t*.12,n*.7),r.fill(),r.font=`900 ${n*.34}px sans-serif`,r.textBaseline="middle",r.fillText(e,t*.25,n*.42),r.font=`600 ${n*.1}px sans-serif`,r.fillStyle="#555",r.fillText("TRANSPORTES & LOG\xCDSTICA",t*.255,n*.66),r.strokeStyle="rgba(0,0,0,0.15)",r.lineWidth=2;for(let a=1;a<12;a++)r.beginPath(),r.moveTo(a*t/12,0),r.lineTo(a*t/12,n),r.stroke();return it(i,!1)}),sign:(s,e,t)=>ot("sign"+s+e,()=>{let[r,o]=nt(1024,192);o.fillStyle=e,o.fillRect(0,0,1024,192),o.strokeStyle="rgba(255,255,255,0.8)",o.lineWidth=8,o.strokeRect(10,10,1004,172),o.fillStyle=t;let a=96;for(o.font=`800 ${a}px sans-serif`;o.measureText(s).width>944&&a>30;)a-=4,o.font=`800 ${a}px sans-serif`;return o.textAlign="center",o.textBaseline="middle",o.fillText(s,1024/2,192/2+4),it(r,!1)}),paint:()=>ot("paint",()=>{let[e,t]=nt(512,512),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#eeeeee"),n.addColorStop(1,"#c4c4c4"),t.fillStyle=n,t.fillRect(0,0,512,512);let i=Vn(777),r=t.createLinearGradient(0,512,0,512*.35);r.addColorStop(0,"rgba(110,92,70,0.55)"),r.addColorStop(1,"rgba(110,92,70,0)"),t.fillStyle=r,t.fillRect(0,0,512,512);for(let o=0;o<2600;o++){let a=512-Math.pow(i(),1.8)*512;t.fillStyle=`rgba(${90+i()*40},${75+i()*30},${55+i()*25},${.06+i()*.16})`,t.beginPath(),t.arc(i()*512,a,.5+i()*3.5,0,7),t.fill()}for(let o=0;o<70;o++){let a=i()*512,c=i()*512*.4,l=512*(.15+i()*.5),h=t.createLinearGradient(0,c,0,c+l);h.addColorStop(0,"rgba(80,70,55,0)"),h.addColorStop(.5,"rgba(80,70,55,0.14)"),h.addColorStop(1,"rgba(80,70,55,0)"),t.fillStyle=h,t.fillRect(a,c,1+i()*3,l)}return dn(t,512,512,8,778),it(e)}),backdrop:()=>ot("backdrop",()=>{let[t,n]=nt(1024,512),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#08121f"),i.addColorStop(1,"#0e2a40"),n.fillStyle=i,n.fillRect(0,0,1024,512);let r=Vn(901),o=64;for(let a=0;a<512/o+1;a++)for(let c=0;c<1024/o+1;c++){let l=c*o+a%2*o/2,h=a*o*.87;n.fillStyle=`rgba(${40+r()*30},${90+r()*60},${130+r()*70},${.05+r()*.12})`,n.beginPath(),n.moveTo(l,h),n.lineTo(l+o/2,h+o*.87),n.lineTo(l-o/2,h+o*.87),n.closePath(),n.fill(),n.strokeStyle="rgba(120,200,255,0.06)",n.stroke()}return it(t,!1)}),glow:()=>ot("glow",()=>{let[e,t]=nt(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.55)"),n.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),it(e,!1)}),beam:()=>ot("beam",()=>{let[t,n]=nt(128,256),i=n.createRadialGradient(128/2,256,0,128/2,256,256);return i.addColorStop(0,"rgba(255,245,220,0.85)"),i.addColorStop(.5,"rgba(255,240,210,0.35)"),i.addColorStop(1,"rgba(255,240,210,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.42,256),n.lineTo(0,0),n.lineTo(128,0),n.lineTo(128*.58,256),n.fill(),it(t,!1)}),grill:()=>ot("grill",()=>{let[e,t]=nt(256,256);t.fillStyle="#0c0c0c",t.fillRect(0,0,256,256);for(let n=0;n<9;n++){let i=12+n*27,r=t.createLinearGradient(0,i,0,i+14);r.addColorStop(0,"#f2f2f2"),r.addColorStop(1,"#7a7a7a"),t.fillStyle=r,t.fillRect(8,i,240,14)}return it(e,!1)}),blob:()=>ot("blob",()=>{let[e,t]=nt(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(0,0,0,0.65)"),n.addColorStop(.6,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),it(e,!1)}),zone:()=>ot("zone",()=>{let[e,t]=nt(256,256);return t.clearRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,1)",t.lineWidth=14,t.strokeRect(7,7,242,242),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(14,14,228,228),it(e,!1)}),bark:()=>ot("bark",()=>{let[e,t]=nt(256,256);t.fillStyle="#6b4a2b",t.fillRect(0,0,256,256);let n=Vn(401);for(let i=0;i<120;i++){t.strokeStyle=n()>.5?"rgba(40,25,12,0.6)":"rgba(140,100,60,0.4)",t.lineWidth=1+n()*3;let r=n()*256;t.beginPath(),t.moveTo(r,0),t.lineTo(r+(n()-.5)*12,256),t.stroke()}return it(e)}),foliage:()=>ot("foliage",()=>{let[e,t]=nt(256,256);return t.fillStyle="#c8c8c8",t.fillRect(0,0,256,256),Cr(t,256,256,2600,["#ffffff","#8a8a8a","#e6e6e6","#6e6e6e"],5,411),it(e)})};var pl=new N,ml=new N,lp=new $e,gl=new de,Re=class{constructor(e=!1){this.pos=[],this.nor=[],this.uv=[],this.col=e?[]:null,this.idx=[]}get count(){return this.pos.length/3}_color(e){this.col&&(gl.set(e!=null?e:16777215),this.col.push(gl.r,gl.g,gl.b))}quad(e,t,n,i,r,o,a){let c=this.count;for(let l of[e,t,n,i])this.pos.push(l[0],l[1],l[2]),this.nor.push(r[0],r[1],r[2]),this._color(a);this.uv.push(...o),this.idx.push(c,c+1,c+2,c,c+2,c+3)}ground(e,t,n,i,r,o,a){let c=e/o,l=n/o,h=-i/o,u=-t/o;this.quad([e,r,i],[n,r,i],[n,r,t],[e,r,t],[0,1,0],[c,h,l,h,l,u,c,u],a)}walls(e,t,n,i,r,o,a,c,l=0,h){let d=(r-t)/c,f=(i-e)/a,g=(o-n)/a;this.quad([e,t,o],[i,t,o],[i,r,o],[e,r,o],[0,0,1],[l,0,l+f,0,l+f,d,l,d],h),this.quad([i,t,n],[e,t,n],[e,r,n],[i,r,n],[0,0,-1],[l,0,l+f,0,l+f,d,l,d],h),this.quad([i,t,o],[i,t,n],[i,r,n],[i,r,o],[1,0,0],[l,0,l+g,0,l+g,d,l,d],h),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],[-1,0,0],[l,0,l+g,0,l+g,d,l,d],h)}top(e,t,n,i,r,o,a){this.ground(e,t,n,i,r,o,a)}box(e,t,n,i,r,o,a,c){this.walls(e,t,n,i,r,o,a,a,0,c),this.top(e,n,i,o,r,a,c)}add(e,t,n,i=1){let r=e.attributes.position,o=e.attributes.normal,a=e.attributes.uv,c=this.count;lp.getNormalMatrix(t);for(let l=0;l<r.count;l++)pl.fromBufferAttribute(r,l).applyMatrix4(t),this.pos.push(pl.x,pl.y,pl.z),ml.fromBufferAttribute(o,l).applyMatrix3(lp).normalize(),this.nor.push(ml.x,ml.y,ml.z),a?this.uv.push(a.getX(l)*i,a.getY(l)*i):this.uv.push(0,0),this._color(n);if(e.index){let l=e.index.array;for(let h=0;h<l.length;h++)this.idx.push(l[h]+c)}else for(let l=0;l<r.count;l++)this.idx.push(c+l)}geometry(){let e=new Mt;e.setAttribute("position",new He(this.pos,3)),e.setAttribute("normal",new He(this.nor,3)),e.setAttribute("uv",new He(this.uv,2)),this.col&&e.setAttribute("color",new He(this.col,3));let t=this.count>65535;return e.setIndex(t?new pr(this.idx,1):new fr(this.idx,1)),e.computeBoundingSphere(),e}mesh(e,t={}){if(!this.count)return null;let n=new ke(this.geometry(),e);return n.castShadow=!!t.cast,n.receiveShadow=t.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}},Zy=new Ve,cp=new Cn,Ky=new bn,Jy=new N,jy=new N;function _e(s,e,t,n=0,i=0,r=0,o=1,a=1,c=1){return cp.setFromEuler(Ky.set(n,i,r)),Zy.compose(jy.set(s,e,t),cp,Jy.set(o,a,c)).clone()}var Qi={},Oe={box:()=>Qi.box||(Qi.box=new Mn(1,1,1)),cyl:(s=16)=>Qi["cyl"+s]||(Qi["cyl"+s]=new Ln(.5,.5,1,s)),cone:(s=12)=>Qi["cone"+s]||(Qi["cone"+s]=new Yi(.5,1,s)),sphere:()=>Qi.sph||(Qi.sph=new ai(.5,16,10))};var Th=s=>s<=0?0:s>=1?1:s*s*(3-2*s),xl=class{constructor(e=80,t=40){this.cell=e,this.pad=t,this.map=new Map}addSegments(e,t,n){let i=this.cell,r=this.pad;for(let o=0;o<t.length-1;o++){let a=Math.min(t[o],t[o+1])-r,c=Math.max(t[o],t[o+1])+r,l=Math.min(n[o],n[o+1])-r,h=Math.max(n[o],n[o+1])+r;for(let u=Math.floor(a/i);u<=Math.floor(c/i);u++)for(let d=Math.floor(l/i);d<=Math.floor(h/i);d++){let f=u*1e5+d,g=this.map.get(f);g||this.map.set(f,g=[]),g.push(e,o)}}}nearest(e,t,n){let i=this.map.get(Math.floor(e/this.cell)*1e5+Math.floor(t/this.cell));if(n.d=1/0,!i)return null;for(let r=0;r<i.length;r+=2){let o=i[r],a=i[r+1],c=o.x[a],l=o.z[a],h=o.x[a+1],u=o.z[a+1],d=h-c,f=u-l,g=d*d+f*f||1,x=((e-c)*d+(t-l)*f)/g;x=x<0?0:x>1?1:x;let p=c+d*x,m=l+f*x,v=Math.hypot(e-p,t-m);v<n.d&&(n.d=v,n.o=o,n.i=a,n.t=x,n.x=p,n.z=m)}return n.d<1/0?n:null}};function hp(s,e){let t=new go(s.map(a=>new N(a[0],0,a[1])),!1,"centripetal",.5),n=Math.max(2,Math.ceil(t.getLength()/e)),i=t.getSpacedPoints(n),r=new Float32Array(i.length),o=new Float32Array(i.length);return i.forEach((a,c)=>{r[c]=a.x,o[c]=a.z}),{x:r,z:o}}var Ah=class{constructor(){let{x:e,z:t}=hp(ip,10);this.x=e,this.z=t,this.n=e.length,this.idx=new xl(100,Ai/2+80),this.idx.addSegments(this,e,t),this._q={}}dist(e,t){let n=this.idx.nearest(e,t,this._q);return n?n.d:1/0}},Rh=class{constructor(e,t){this.def=e,this.id=e.id;let{x:n,z:i}=hp(e.pts,4),r=this.n=n.length;this.x=n,this.z=i,this.s=new Float32Array(r),this.dx=new Float32Array(r),this.dz=new Float32Array(r),this.y=new Float32Array(r);for(let l=1;l<r;l++)this.s[l]=this.s[l-1]+Math.hypot(n[l]-n[l-1],i[l]-i[l-1]);this.length=this.s[r-1];for(let l=0;l<r;l++){let h=Math.max(0,l-1),u=Math.min(r-1,l+1),d=n[u]-n[h],f=i[u]-i[h],g=Math.hypot(d,f)||1;this.dx[l]=d/g,this.dz[l]=f/g}let o=Qn.filter(l=>l.hw===e.id).map(l=>[(l.lot[0]+l.lot[2])/2,(l.lot[1]+l.lot[3])/2]),a=new Float32Array(r);this.bridge=new Uint8Array(r);let c=7.5;for(let l=0;l<r;l++){let h=t.dist(n[l],i[l]);h<Ai/2+14&&(this.bridge[l]=1);let d=c*Th(1-(h-(Ai/2+22))/150),f=Th(Math.min(this.s[l],this.length-this.s[l])/220-.3);for(let[p,m]of o)f=Math.min(f,Th((Math.hypot(n[l]-p,i[l]-m)-110)/160));let g=this.s[l],x=(e.hills||0)*f*(.55*Math.pow(Math.sin(g/260),2)+.45*Math.pow(Math.sin(g/610+1.3),2));a[l]=Math.max(d,x)}for(let l=0;l<r;l++){let h=0,u=0;for(let d=-8;d<=8;d++){let f=Math.min(r-1,Math.max(0,l+d));h+=a[f],u++}this.y[l]=this.bridge[l]?Math.max(c,h/u):h/u}this.y[0]=this.y[r-1]=0}at(e,t){let n=this.n;e=Math.max(0,Math.min(this.length,e));let i=0,r=n-1;for(;r-i>1;){let a=i+r>>1;this.s[a]<=e?i=a:r=a}let o=(e-this.s[i])/(this.s[r]-this.s[i]||1);return t.x=this.x[i]+(this.x[r]-this.x[i])*o,t.z=this.z[i]+(this.z[r]-this.z[i])*o,t.y=this.y[i]+(this.y[r]-this.y[i])*o,t.dx=this.dx[i],t.dz=this.dz[i],t.i=i,t}};function up(){let s=new Ah,e=sp.map(n=>new Rh(n,s)),t=new xl(80,40);for(let n of e)t.addSegments(n,n.x,n.z);return{river:s,hws:e,idx:t}}var ut=20/2;function Qy(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function _l(s,e){let t=(l,h)=>{let u=Math.sin(l*127.1+h*311.7)*43758.5453;return u-Math.floor(u)},n=Math.floor(s),i=Math.floor(e),r=s-n,o=e-i,a=r*r*(3-2*r),c=o*o*(3-2*o);return(t(n,i)*(1-a)+t(n+1,i)*a)*(1-c)+(t(n,i+1)*(1-a)+t(n+1,i+1)*a)*c}var vl=class{constructor(e,t){this.scene=e,this.q=t,this.colliders=[],this.cell=70,this.grid=new Map,this.depots={},this.animated=[],this.areas=[],this.hills=[],this.fields=[];let n=up();this.river=n.river,this.hws=n.hws,this.hwIdx=n.idx,this.hwById=Object.fromEntries(this.hws.map(i=>[i.id,i])),this._q={},this.build()}addCollider(e,t,n,i){let r={x0:Math.min(e,n),z0:Math.min(t,i),x1:Math.max(e,n),z1:Math.max(t,i)};this.colliders.push(r);let o=this.cell;for(let a=Math.floor(r.x0/o);a<=Math.floor(r.x1/o);a++)for(let c=Math.floor(r.z0/o);c<=Math.floor(r.z1/o);c++){let l=a*1e5+c;this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}hw(e,t){return this.hwIdx.nearest(e,t,this._q)}inArea(e,t,n){for(let i of this.areas)if(e>=i.x0+n&&e<=i.x1-n&&t>=i.z0+n&&t<=i.z1-n)return i;return null}heightAt(e,t){for(let r of this.areas)if(e>=r.x0&&e<=r.x1&&t>=r.z0&&t<=r.z1)return 0;let n=this.hw(e,t);if(!n||n.d>12)return 0;let i=n.o;return i.y[n.i]+(i.y[n.i+1]-i.y[n.i])*n.t}resolveCircle(e,t,n,i=!1){let r=0;if(n.x=0,n.z=0,!i&&!this.inArea(e.x,e.z,t)){let l=this.hw(e.x,e.z),h=9-t*.8;if(!l||l.d>h){let u=e.x,d=e.z,f=1/0;if(l){let g=h/(l.d||1);u=l.x+(e.x-l.x)*g,d=l.z+(e.z-l.z)*g,f=Math.hypot(e.x-u,e.z-d)}for(let g of this.areas){if(e.x<g.x0-60||e.x>g.x1+60||e.z<g.z0-60||e.z>g.z1+60)continue;let x=Math.max(g.x0+t,Math.min(e.x,g.x1-t)),p=Math.max(g.z0+t,Math.min(e.z,g.z1-t)),m=Math.hypot(e.x-x,e.z-p);m<f&&(f=m,u=x,d=p)}f<1/0&&(n.x=u-e.x,n.z=d-e.z,r=f)}}let o=this.cell,a=Math.floor((e.x+n.x)/o),c=Math.floor((e.z+n.z)/o);for(let l=a-1;l<=a+1;l++)for(let h=c-1;h<=c+1;h++){let u=this.grid.get(l*1e5+h);if(u)for(let d of u){let f=e.x+n.x,g=e.z+n.z,x=Math.max(d.x0,Math.min(f,d.x1)),p=Math.max(d.z0,Math.min(g,d.z1)),m=f-x,v=g-p,_=m*m+v*v;if(_<t*t)if(_>1e-6){let y=Math.sqrt(_),R=t-y;n.x+=m/y*R,n.z+=v/y*R,r=Math.max(r,R)}else{let y=f-d.x0,R=d.x1-f,E=g-d.z0,T=d.z1-g,A=Math.min(y,R,E,T);A===y?n.x-=y+t:A===R?n.x+=R+t:A===E?n.z-=E+t:n.z+=T+t,r=Math.max(r,A+t)}}}return r}terrainH(e,t){let n=0;for(let i of this.hills){let r=((e-i.x)**2+(t-i.z)**2)/(i.r*i.r);r<1&&(n=Math.max(n,i.h*Math.sqrt(1-r)-4))}return n}isFree(e,t,n){if(t>1750)return!1;let i=this.hw(e,t);if(i&&i.d<15+i.o.y[i.i]*1.9+n||this.river.dist(e,t)<Ai/2+12+n)return!1;for(let r of this.areas)if(e>r.x0-25-n&&e<r.x1+25+n&&t>r.z0-25-n&&t<r.z1+25+n)return!1;for(let r of this.fields)if(e>r.x0-n&&e<r.x1+n&&t>r.z0-n&&t<r.z1+n)return!1;return!0}build(){let e=(r,o={})=>new hn(yn({map:r},o)),t={grass:e(Ae.grass(),{vertexColors:!0,side:ht}),road:e(Ae.road()),hwy:e(Ae.highway()),inter:e(Ae.intersection()),concrete:e(Ae.concrete()),bridge:e(Ae.concrete(),{side:ht}),lot:e(Ae.lot()),field:e(Ae.field(),{vertexColors:!0}),sand:e(Ae.sand()),roof:e(Ae.roof()),tiles:e(Ae.tiles()),wh:e(Ae.warehouse(),{vertexColors:!0}),f:[0,1,2,3].map(r=>new _n({map:Ae.facade(r),emissiveMap:Ae.facade(r).userData.emissive,emissive:16777215,emissiveIntensity:0,shininess:r===0||r===3?60:8,specular:r===0||r===3?5592405:1118481})),flat:new hn({vertexColors:!0}),metal:new _n({map:Ae.metal(),vertexColors:!0,shininess:50,specular:6710886}),cont:e(Ae.container(14540253),{vertexColors:!0}),leaf:e(Ae.foliage(),{vertexColors:!0})};this.M=t;let n={grass:new Re(!0),road:new Re,hwy:new Re,inter:new Re,concrete:new Re,bridge:new Re,lot:new Re,field:new Re(!0),sand:new Re,roof:new Re,tiles:new Re,wh:new Re(!0),f:[new Re,new Re,new Re,new Re],flat:new Re(!0),metal:new Re(!0),cont:new Re(!0)};this.B=n,this.trees=[],this.lamps=[],this.rails=[],this.posts=[],this.r=Qy(1234);for(let r of jn)this.areas.push({x0:r.x0-ut,z0:r.z0-ut,x1:As(r)+ut,z1:Tr(r)+ut,city:r});for(let r of this.hws)for(let o of[r.def.from,r.def.to]){if(!o)continue;let a=ul[o[0]],c=a.x0+o[1]*140,l=a.z0+o[2]*140;this.areas.push({x0:c-22,z0:l-22,x1:c+22,z1:l+22,pad:!0}),n.hwy.ground(c-22,l-22,c+22,l+22,.015,18)}for(let r of Qn)r.lot&&this.areas.push({x0:r.lot[0],z0:r.lot[1],x1:r.lot[2],z1:r.lot[3],lot:r.id});this.layoutCountry(),this.buildGround();for(let r of jn)this.buildCity(r);for(let r of Qn)r.lot&&this.buildDepot(r,...r.lot);for(let r of this.hws)this.buildHighway(r);this.buildRiverAndSea(),this.buildHills(),this.scatterForest();let i=(r,o,a=!1)=>{let c=r.mesh(o,{cast:a});return c&&this.scene.add(c),c};i(n.grass,t.grass),i(n.road,t.road),i(n.hwy,t.hwy),i(n.inter,t.inter),i(n.concrete,t.concrete,!0),i(n.bridge,t.bridge,!0),i(n.lot,t.lot),i(n.field,t.field),i(n.sand,t.sand),i(n.roof,t.roof),i(n.tiles,t.tiles,!0),i(n.wh,t.wh,!0),i(n.flat,t.flat,!0),i(n.metal,t.metal,!0),i(n.cont,t.cont,!0),n.f.forEach((r,o)=>i(r,t.f[o],!0)),this.buildRails(),this.buildTrees(),this.buildLamps(),this.B=null}layoutCountry(){let e=this.r;for(let n=0;n<300&&this.hills.length<34;n++){let i=Rt.x0+e()*(Rt.x1-Rt.x0),r=Rt.z0+e()*(Rt.z1-Rt.z0),o=110+e()*220,a=25+e()*70;this.isFree(i,r,o+30)&&this.hills.push({x:i,z:r,r:o,h:a})}let t=[[-1e3,160,-600,700],[-2900,-1600,-2300,-1100],[600,150,1700,1e3],[1200,-700,1900,-150]];for(let[n,i,r,o]of t)for(let a=n;a<r;a+=140)for(let c=i;c<o;c+=110){let l={x0:a+6,z0:c+6,x1:a+134,z1:c+104};[[l.x0,l.z0],[l.x1,l.z0],[l.x0,l.z1],[l.x1,l.z1],[(l.x0+l.x1)/2,(l.z0+l.z1)/2]].every(([u,d])=>this.isFree(u,d,12))&&e()>.2&&this.fields.push(l)}this.hills=this.hills.filter(n=>!this.fields.some(i=>n.x+n.r>i.x0&&n.x-n.r<i.x1&&n.z+n.r>i.z0&&n.z-n.r<i.z1))}buildGround(){let e=this.B,t=new zt(12e3,12e3,120,120);t.rotateX(-Math.PI/2);let n=t.attributes.position,i=e.grass.count;for(let a=0;a<n.count;a++){let c=n.getX(a),l=n.getZ(a);e.grass.pos.push(c,-.03,l),e.grass.nor.push(0,1,0),e.grass.uv.push(c/14,-l/14);let h=_l(c/420,l/420)*.6+_l(c/90,l/90)*.4;e.grass.col.push(.74+h*.34,.84+h*.24,.68+h*.2)}let r=t.index.array;for(let a=0;a<r.length;a++)e.grass.idx.push(r[a]+i);let o=[16777215,15265984,14207120,13164712];this.fields.forEach((a,c)=>e.field.ground(a.x0,a.z0,a.x1,a.z1,.03,24,o[c%o.length]))}buildCity(e){let t=this.B,n=o=>e.x0+o*140,i=o=>e.z0+o*140;for(let o=0;o<=e.nx;o++){let a=n(o);for(let c=0;c<e.nz;c++){let l=i(c)+ut,h=i(c+1)-ut;t.road.quad([a-ut,.02,h],[a+ut,.02,h],[a+ut,.02,l],[a-ut,.02,l],[0,1,0],[0,0,1,0,1,(h-l)/20,0,(h-l)/20])}}for(let o=0;o<=e.nz;o++){let a=i(o);for(let c=0;c<e.nx;c++){let l=n(c)+ut,h=n(c+1)-ut;t.road.quad([l,.02,a+ut],[h,.02,a+ut],[h,.02,a-ut],[l,.02,a-ut],[0,1,0],[0,0,0,(h-l)/20,1,(h-l)/20,1,0])}}for(let o=0;o<=e.nx;o++)for(let a=0;a<=e.nz;a++){let c=n(o),l=i(a);t.inter.quad([c-ut,.025,l+ut],[c+ut,.025,l+ut],[c+ut,.025,l-ut],[c-ut,.025,l-ut],[0,1,0],[0,0,1,0,1,1,0,1])}let r={};for(let o of Qn)o.city===e.id&&(r[o.bx+","+o.bz]=o);for(let o=0;o<e.nx;o++)for(let a=0;a<e.nz;a++){let c=n(o)+ut,l=n(o+1)-ut,h=i(a)+ut,u=i(a+1)-ut,d=r[o+","+a];d?this.buildDepot(d,c,h,l,u):this.buildBlock(dl(e,o,a),c,h,l,u)}this.roadSign(e.x0-26,e.z0-26,Math.PI*.75,e.name.toUpperCase(),"Bem-vindo","#1d4f7a")}grassPatch(e,t,n,i){this.B.grass.quad([e,.225,i],[n,.225,i],[n,.225,t],[e,.225,t],[0,1,0],[e/14,-i/14,n/14,-i/14,n/14,-t/14,e/14,-t/14],15267288)}tree(e,t,n=1,i=0,r=.2){this.trees.push({x:e,z:t,y:r,s:n*(.8+this.r()*.5),k:i,rot:this.r()*6.28})}building(e,t,n,i,r,o){let a=this.B,c=(this.r()*4|0)*.25;if(a.f[o].walls(e,.2,t,n,r,i,16,14,c),a.roof.top(e,t,n,i,r,6),a.flat.walls(e,r,t,n,r+.8,i,1,1,0,9276813),a.flat.walls(e-.3,3.4,t-.3,n+.3,3.8,i+.3,1,1,0,6122878),r>14&&this.r()>.3){let l=(n-e)*.3,h=(i-t)*.3,u=(e+n)/2+(this.r()-.5)*4,d=(t+i)/2;a.flat.box(u-l/2,r,d-h/2,u+l/2,r+3,d+h/2,1,10526880),a.metal.add(Oe.cyl(12),_e(u+l,r+2,d,0,0,0,2.4,3,2.4),13620182),a.flat.add(Oe.box(),_e(u-l*.3,r+6,d,0,0,0,.15,6,.15),7829367)}}house(e,t,n,i,r,o){let a=this.B;a.flat.walls(e,.2,t,n,r,i,1,1,0,o);let c=(e+n)/2;a.flat.quad([c-.6,.2,i+.02],[c+.6,.2,i+.02],[c+.6,2.4,i+.02],[c-.6,2.4,i+.02],[0,0,1],[0,0,1,0,1,1,0,1],5913122);for(let R of[e+1.6,n-2.8])a.flat.quad([R,1.2,i+.02],[R+1.2,1.2,i+.02],[R+1.2,2.4,i+.02],[R,2.4,i+.02],[0,0,1],[0,0,1,0,1,1,0,1],2899536),a.flat.quad([R+1.2,1.2,t-.02],[R,1.2,t-.02],[R,2.4,t-.02],[R+1.2,2.4,t-.02],[0,0,-1],[0,0,1,0,1,1,0,1],2899536);let l=2.2,h=.4,u=(t+i)/2,d=e-h,f=n+h,g=t-h,x=i+h,p=Math.hypot(l,u-g),m=(u-g)/p,v=l/p,_=(f-d)/3,y=p/3;a.tiles.quad([d,r,x],[f,r,x],[f,r+l,u],[d,r+l,u],[0,m,v],[0,0,_,0,_,y,0,y]),a.tiles.quad([f,r,g],[d,r,g],[d,r+l,u],[f,r+l,u],[0,m,-v],[0,0,_,0,_,y,0,y]),a.flat.quad([e,r,t],[e,r,i],[e,r+l,u],[e,r+l,u],[-1,0,0],[0,0,1,0,1,1,0,1],o),a.flat.quad([n,r,i],[n,r,t],[n,r+l,u],[n,r+l,u],[1,0,0],[0,0,1,0,1,1,0,1],o),a.flat.walls(e-2,.2,i+2,n+2,1.1,i+2.2,1,1,0,14275783)}tank(e,t,n,i,r=15263976){this.B.metal.add(Oe.cyl(20),_e(e,i/2,t,0,0,0,n*2,i,n*2),r,1),this.B.metal.add(Oe.cone(20),_e(e,i+n*.2,t,0,0,0,n*2.02,n*.4,n*2.02),r),this.B.flat.add(Oe.box(),_e(e+n+.1,i/2,t,0,0,0,.1,i,.7),8359053)}chimney(e,t,n,i,r=10129286){this.B.flat.add(Oe.cyl(14),_e(e,i/2,t,0,0,0,n*2,i,n*2),r),this.B.flat.add(Oe.cyl(14),_e(e,i-3,t,0,0,0,n*2.1,1.2,n*2.1),12597547),this.B.flat.add(Oe.cyl(14),_e(e,i-6,t,0,0,0,n*2.1,1.2,n*2.1),15790320)}containerStack(e,t,n,i,r,o){let a=[12597547,2388387,1999945,14059792,8207512,8622482,10502144,1145445];for(let c=0;c<i;c++)for(let l=0;l<r;l++){let h=1+(this.r()*o|0);for(let u=0;u<h;u++){let d=(c-(i-1)/2)*2.6,f=(l-(r-1)/2)*12.6,g=Math.cos(n),x=Math.sin(n);this.B.cont.add(Oe.box(),_e(e+d*g+f*x,1.3+u*2.6,t-d*x+f*g,0,n,0,2.44,2.59,12.2),a[this.r()*a.length|0])}}}crane(e,t,n,i){let r=this.B,o=15844367;r.flat.add(Oe.box(),_e(e,n/2,t,0,0,0,1.6,n,1.6),o);let a=Math.cos(i),c=Math.sin(i);r.flat.add(Oe.box(),_e(e+c*12,n+.8,t+a*12,0,i,0,1.2,1.2,44),o),r.flat.add(Oe.box(),_e(e-c*8,n-.6,t-a*8,0,i,0,2.2,2,4),8359053),r.flat.add(Oe.box(),_e(e,n+3,t,0,0,0,1,6,1),o),r.flat.add(Oe.box(),_e(e+c*1.5,n-1.2,t+a*1.5,0,i,0,2.4,2.4,2.4),3426654)}turbine(e,t,n=48,i=1,r=0){let o=this.B;if(o.flat.add(Oe.cyl(14),_e(e,r+n*i/2,t,0,0,0,2.2*i,n*i,2.2*i),16054007),o.flat.add(Oe.box(),_e(e,r+n*i+1,t-1,0,0,0,2.2*i,2.4*i,6*i),15396333),!this.rotorGeo){let c=new Re,l=new Mn(1.4,22,.4);l.translate(0,11,0);for(let h=0;h<3;h++)c.add(l,_e(0,0,0,0,0,h*Math.PI*2/3));c.add(Oe.sphere(),_e(0,0,0,0,0,0,2,2,2)),this.rotorGeo=c.geometry(),this.rotorMat=new hn({color:16316921})}let a=new ke(this.rotorGeo,this.rotorMat);a.scale.setScalar(i),a.position.set(e,r+n*i+1,t+2.2*i),a.rotation.z=this.r()*6,this.scene.add(a),this.animated.push({obj:a,speed:.6+this.r()*.4})}buildBlock(e,t,n,i,r){let o=this.B,a=this.r;this.addCollider(t,n,i,r);let c=t+5,l=n+5,h=i-5,u=r-5,d=h-c;for(let[f,g]of[[t+1.5,n+1.5],[i-1.5,n+1.5],[t+1.5,r-1.5],[i-1.5,r-1.5]])this.lamps.push({x:f,z:g});if(o.concrete.walls(t,0,n,i,.22,r,4,4),o.concrete.top(t,n,i,r,.22,4),e==="downtown"){let g=d/2;for(let x=0;x<2;x++)for(let p=0;p<2;p++){let m=g*(.62+a()*.28),v=g*(.62+a()*.28),_=c+g*(x+.5),y=l+g*(p+.5);this.building(_-m/2,y-v/2,_+m/2,y+v/2,35+a()*95,a()>.5?0:3)}for(let x=0;x<8;x++)this.tree(t+2+x*(i-t-4)/7,n+2,.8)}else if(e==="residential"||e==="town"){this.grassPatch(t+4,n+4,i-4,r-4);let f=3,g=d/f;for(let x=0;x<f;x++)for(let p=0;p<f;p++){let m=c+g*(x+.5),v=l+g*(p+.5);if(x===1&&p===1){for(let _=0;_<4;_++)this.tree(m+(a()-.5)*20,v+(a()-.5)*20,1);continue}if(e==="town"||a()<.45){let _=10+a()*6,y=9+a()*4,R=[16115400,14674416,15978928,15262376,13231041,15780297,16777215];this.house(m-_/2,v-y/2,m+_/2,v+y/2,3.6+(a()>.7?3.2:0),R[a()*R.length|0]),this.tree(m+_/2+3,v+y/2+3,.9)}else{let _=g*(.6+a()*.3),y=g*(.6+a()*.3);this.building(m-_/2,v-y/2,m+_/2,v+y/2,8+a()*26,a()>.5?1:2)}}for(let x=0;x<7;x++){let p=t+6+x*(i-t-12)/6;this.tree(p,n+2,.75),this.tree(p,r-2,.75)}}else if(e==="park"){this.grassPatch(t+4,n+4,i-4,r-4);for(let f=0;f<46;f++)this.tree(c+a()*d,l+a()*d,1.1,a()>.7?1:0);o.sand.ground(c+d*.35,l+d*.35,c+d*.65,l+d*.65,.235,8)}else if(e==="industrial"){let f=10+a()*6,g=d/2,x=[16777215,14083312,15786704,14543064][a()*4|0];if(o.wh.walls(c+2,.2,l+2,h-2,f,l+g-4,6,6,0,x),o.roof.top(c+2,l+2,h-2,l+g-4,f,6),a()>.4)for(let p=0;p<3;p++)this.tank(c+18+p*26,u-22,9,14+a()*8);else o.wh.walls(c+4,.2,l+g+4,h-30,f*.8,u-4,6,6,0,x),o.roof.top(c+4,l+g+4,h-30,u-4,f*.8,6),this.chimney(h-14,u-16,2.5,38+a()*20)}else e==="port"&&(this.containerStack(c+28,(l+u)/2,0,8,3,4),this.containerStack(h-28,(l+u)/2,0,8,3,3),this.crane((c+h)/2,u-4,30,Math.PI/2))}buildDepot(e,t,n,i,r){let o=this.B,a=this.r;o.lot.ground(t,n,i,r,.03,12);let c=(t+i)/2,l=(n+r)/2,h,u,d,f,g=34,x=14;if(e.side==="n"?(h={x:c,z:n+22,w:g,d:x},u=[t+10,r-50,i-10,r-6],d={x:c,z:n-ut},f="n"):e.side==="s"?(h={x:c,z:r-22,w:g,d:x},u=[t+10,n+6,i-10,n+50],d={x:c,z:r+ut},f="s"):e.side==="w"?(h={x:t+22,z:l,w:x,d:g},u=[i-50,n+10,i-6,r-10],d={x:t-ut,z:l},f="w"):(h={x:i-22,z:l,w:x,d:g},u=[t+6,n+10,t+50,r-10],d={x:i+ut,z:l},f="e"),e.lot){let A=this.hwIdx.nearest(d.x,d.z,{});A&&(d={x:A.x,z:A.z,hw:A.o.id,s:A.o.s[A.i]+(A.o.s[A.i+1]-A.o.s[A.i])*A.t});let z=(M,S,I,D)=>{let w=Math.hypot(I-M,D-S);o.flat.add(Oe.box(),_e((M+I)/2,.9,(S+D)/2,0,Math.atan2(I-M,D-S),0,.08,1.8,w),7305856)};f!=="n"&&z(t,n,i,n),f!=="s"&&z(t,r,i,r),f!=="w"&&z(t,n,t,r),f!=="e"&&z(i,n,i,r)}this.depots[e.id]=Ii(yn({},e),{zone:h,entry:d,lot:[t,n,i,r]});let[p,m,v,_]=u,y=(p+v)/2,R=(m+_)/2,E=e.kind,T=(A,z=16777215,M=-1)=>{M>=0?o.f[M].walls(p,.03,m,v,A,_,16,14,0):o.wh.walls(p,.03,m,v,A,_,6,6,0,z),o.roof.top(p,m,v,_,A,6),o.flat.walls(p,A,m,v,A+.6,_,1,1,0,e.color),this.addCollider(p,m,v,_);let S=2962486;for(let I=0;I<4;I++){let D=(I+.5)/4,w=4,k=Math.min(5,A-1);if(f==="n"){let P=p+(v-p)*D;o.flat.quad([P+w/2,.03,m-.05],[P-w/2,.03,m-.05],[P-w/2,k,m-.05],[P+w/2,k,m-.05],[0,0,-1],[0,0,1,0,1,1,0,1],S)}if(f==="s"){let P=p+(v-p)*D;o.flat.quad([P-w/2,.03,_+.05],[P+w/2,.03,_+.05],[P+w/2,k,_+.05],[P-w/2,k,_+.05],[0,0,1],[0,0,1,0,1,1,0,1],S)}if(f==="w"){let P=m+(_-m)*D;o.flat.quad([p-.05,.03,P-w/2],[p-.05,.03,P+w/2],[p-.05,k,P+w/2],[p-.05,k,P-w/2],[-1,0,0],[0,0,1,0,1,1,0,1],S)}if(f==="e"){let P=m+(_-m)*D;o.flat.quad([v+.05,.03,P+w/2],[v+.05,.03,P-w/2],[v+.05,k,P-w/2],[v+.05,k,P+w/2],[1,0,0],[0,0,1,0,1,1,0,1],S)}}this.signFor(e,f,u,A)};if(E==="port")this.containerStack(y-25,R,Math.PI/2,4,3,4),this.containerStack(y+25,R,Math.PI/2,4,3,3),this.addCollider(p,m,v,_),this.crane(y,R,34,0),this.signFor(e,f,u,4,!0);else if(E==="refinery"){for(let A=0;A<2;A++)for(let z=0;z<3;z++)this.tank(p+12+A*22,m+15+z*32,9,12+a()*6);this.chimney(v-8,m+12,1.6,42,12436423),this.addCollider(p,m,v,_),this.signFor(e,f,u,4,!0)}else if(E==="farm")o.flat.walls(p+5,.03,m+6,v-30,9,_-6,1,1,0,11088422),o.tiles.top(p+4,m+5,v-29,_-5,9,4),this.tank(v-14,R-10,5,18,14014684),this.tank(v-14,R+10,5,18,14014684),this.addCollider(p,m,v,_),this.signFor(e,f,u,4,!0);else if(E==="silo"){for(let A=0;A<2;A++)for(let z=0;z<3;z++)this.tank(p+12+A*20,m+18+z*32,7,26,13620182);this.addCollider(p,m,v,_),this.signFor(e,f,u,4,!0)}else if(E==="wind"){for(let A=0;A<3;A++)this.turbine(p+10+A*40,R,55,1);this.addCollider(p,m,v,_),this.signFor(e,f,u,4,!0)}else if(E==="construction"){for(let A=0;A<4;A++)for(let z=0;z<3;z++)for(let M=0;M<5;M++)o.flat.add(Oe.box(),_e(p+6+A*10,M*4+2,m+10+z*14,0,0,0,.8,4,.8),10923183);for(let A=1;A<=5;A++)o.flat.add(Oe.box(),_e(p+21,A*4,m+24,0,0,0,32,.4,30),11777719);this.crane(v-8,_-10,40,Math.PI/2),this.addCollider(p,m,v,_),this.signFor(e,f,u,4,!0)}else if(E==="fuel"){T(5,16777215);let A=h;o.flat.add(Oe.box(),_e(A.x,7,A.z,0,0,0,A.w+6,.8,A.d+6),13639712);for(let[z,M]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let S=A.x+z*(A.w/2+4),I=A.z+M*(A.d/2+4);o.flat.add(Oe.box(),_e(S,3.5,I,0,0,0,.6,7,.6),15528177),this.addCollider(S-.4,I-.4,S+.4,I+.4)}}else if(E==="steel")T(18,13220008),this.chimney(p+8,m+8,2.6,55),this.chimney(v-8,_-8,2.6,50);else if(E==="sawmill"){let z=(p+v)/2;o.wh.walls(p,.03,m,z,8,_,6,6,0,13148794),o.roof.top(p,m,z,_,8,6),this.addCollider(p,m,v,_);for(let M=0;M<3;M++)for(let S=0;S<7;S++){let I=m+14+M*30,D=z+4+S%4*2.2+(S>=4?1.1:0),w=S>=4?2.8:.9;o.flat.add(Oe.cyl(10),_e(D,w,I,Math.PI/2,0,0,1.8,14,1.8),9329458)}this.signFor(e,f,u,4,!0)}else if(E==="quarry"){T(9,13682878);for(let A=0;A<2;A++)o.flat.add(Oe.cone(16),_e(p+25+A*50,5,R,0,0,0,18,10,18),10261124)}else E==="hospital"?T(22,16777215,2):E==="market"?T(10,16777215,1):T(E==="garage"?9:12,E==="garage"?14083319:16777215);this.lamps.push({x:t+2,z:n+2},{x:i-2,z:r-2})}signFor(e,t,n,i,r=!1){let[o,a,c,l]=n,h=26,u=26*(192/1024),d=new ke(new zt(h,u),new rt({map:Ae.sign(e.name.toUpperCase(),"#"+new de(e.color).multiplyScalar(.75).getHexString(),"#ffffff"),side:ht})),f=r?8:i+u/2+.8;if(t==="n"&&(d.position.set((o+c)/2,f,a-(r?4:.3)),d.rotation.y=Math.PI),t==="s"&&d.position.set((o+c)/2,f,l+(r?4:.3)),t==="w"&&(d.position.set(o-(r?4:.3),f,(a+l)/2),d.rotation.y=-Math.PI/2),t==="e"&&(d.position.set(c+(r?4:.3),f,(a+l)/2),d.rotation.y=Math.PI/2),d.matrixAutoUpdate=!1,d.updateMatrix(),this.scene.add(d),r){let g=d.position,x=Math.cos(d.rotation.y),p=Math.sin(d.rotation.y);for(let m of[-1,1])this.B.flat.add(Oe.box(),_e(g.x+x*m*10,3,g.z-p*m*10,0,d.rotation.y,0,.5,6,.5),5592405)}}roadSign(e,t,n,i,r,o="#0f6b3a",a=0){let h=new ke(new zt(9,3.6),new rt({map:Ae.roadSign(i,r,o),side:ht}));h.position.set(e,a+5.2,t),h.rotation.y=n,h.matrixAutoUpdate=!1,h.updateMatrix(),this.scene.add(h);let u=Math.cos(n),d=Math.sin(n);for(let f of[-1,1])this.B.metal.add(Oe.cyl(8),_e(e+u*f*3.6,a+3.4,t-d*f*3.6,0,0,0,.25,6.8,.25),11581115)}buildHighway(e){let t=this.B,n=e.n,i=9;for(let u=0;u<n-1;u++){let d=u,f=u+1,g=[-e.dz[d],e.dx[d]],x=[-e.dz[f],e.dx[f]],p=e.y[d]+.04,m=e.y[f]+.04,v=e.s[d]/18,_=e.s[f]/18,y=(E,T,A,z)=>[e.x[E]+T[0]*A,z,e.z[E]+T[1]*A];t.hwy.quad(y(d,g,-i,p),y(d,g,i,p),y(f,x,i,m),y(f,x,-i,m),[0,1,0],[0,v,1,v,1,_,0,_]);let R=e.bridge[d]||e.bridge[f];for(let E of[-1,1]){let T=y(d,g,E*i,p-.04),A=y(f,x,E*i,m-.04);if(R)t.bridge.quad([T[0],p-1.6,T[2]],[A[0],m-1.6,A[2]],[A[0],m+1,A[2]],[T[0],p+1,T[2]],[g[0]*E,0,g[1]*E],[e.s[d]/4,0,e.s[f]/4,0,e.s[f]/4,.6,e.s[d]/4,.6]);else if(p>.25||m>.25){let z=2+p*1.9,M=2+m*1.9,S=y(d,g,E*(i+z),-.02),I=y(f,x,E*(i+M),-.02),D=k=>[k[0]/14,-k[2]/14],w=[g[0]*E*.45,.89,g[1]*E*.45];E>0?t.grass.quad(T,S,I,A,w,[...D(T),...D(S),...D(I),...D(A)],13162664):t.grass.quad(T,A,I,S,w,[...D(T),...D(A),...D(I),...D(S)],13162664)}}if(R&&(t.bridge.quad(y(d,g,i,p-1.6),y(d,g,-i,p-1.6),y(f,x,-i,m-1.6),y(f,x,i,m-1.6),[0,-1,0],[0,0,1,0,1,1,0,1]),u%7===0)){for(let E of[-1,1]){let T=y(d,g,E*5,0),A=e.y[d]-1.6;t.bridge.add(Oe.cyl(12),_e(T[0],(A-2)/2,T[2],0,0,0,1.6,A+2,1.6))}t.bridge.add(Oe.box(),_e(e.x[d],e.y[d]-2,e.z[d],0,Math.atan2(e.dx[d],e.dz[d]),0,13,.8,1.6))}if(!R&&e.y[d]>1.6&&this.rails.push({h:e,i:d}),u%12===0)for(let E of[-1,1])this.posts.push({x:e.x[d]+g[0]*E*(i+.7),y:e.y[d],z:e.z[d]+g[1]*E*(i+.7),rot:Math.atan2(e.dx[d],e.dz[d])})}let r=u=>u?ul[u[0]].name:"Serraria \u2022 Pedreira",o=(e.length/1e3).toFixed(1).replace(".",","),a=(u,d,f)=>{let g=[-e.dz[u],e.dx[u]],x=e.x[u]+g[0]*d*(i+3),p=e.z[u]+g[1]*d*(i+3);this.roadSign(x,p,Math.atan2(e.dx[u],e.dz[u])+(d>0?Math.PI:0),f,`${e.id} \u2022 ${o} km`,"#0f6b3a",e.y[u])};a(Math.min(e.n-1,16),1,r(e.def.to)),e.def.to&&a(Math.max(0,e.n-17),-1,r(e.def.from));let c=e.n/2|0,l=[-e.dz[c],e.dx[c]],h=new ke(new Ya(.9,24),new rt({map:Ae.speedSign(80),side:ht}));h.position.set(e.x[c]+l[0]*(i+2),e.y[c]+2.6,e.z[c]+l[1]*(i+2)),h.rotation.y=Math.atan2(e.dx[c],e.dz[c])+Math.PI,this.scene.add(h),t.metal.add(Oe.cyl(6),_e(h.position.x,e.y[c]+1,h.position.z,0,0,0,.12,2.6,.12),11581115)}buildRails(){let e=new Re;for(let{h:i,i:r}of this.rails){let o=Math.min(i.n-1,r+1);for(let a of[-1,1]){let c=9+.3,l=i.x[r]-i.dz[r]*a*c,h=i.z[r]+i.dx[r]*a*c,u=i.x[o]-i.dz[o]*a*c,d=i.z[o]+i.dx[o]*a*c,f=i.y[r],g=i.y[o];e.quad([l,f+.45,h],[u,g+.45,d],[u,g+.8,d],[l,f+.8,h],[-i.dz[r]*a,0,i.dx[r]*a],[0,0,1,0,1,1,0,1])}}this.rails.length&&this.scene.add(e.mesh(new _n({map:Ae.metal(),side:ht,shininess:60})));let t=new Mn(.15,1.1,.15);t.translate(0,.55,0);let n=new kn(t,new hn({color:15921906}),this.posts.length);this.posts.forEach((i,r)=>n.setMatrixAt(r,_e(i.x,i.y,i.z,0,i.rot,0))),n.computeBoundingSphere(),this.scene.add(n)}buildRiverAndSea(){let e=this.river,t=new Re,n=Ai/2,i=a=>{let c=Math.max(0,a-1),l=Math.min(e.n-1,a+1),h=e.x[l]-e.x[c],u=e.z[l]-e.z[c],d=Math.hypot(h,u)||1;return[-u/d,h/d]};for(let a=0;a<e.n-1;a++){let c=i(a),l=i(a+1),h=(x,p,m,v)=>[e.x[x]+p[0]*m,v,e.z[x]+p[1]*m],u=h(a,c,-n,.06),d=h(a,c,n,.06),f=h(a+1,l,n,.06),g=h(a+1,l,-n,.06);t.quad(u,d,f,g,[0,1,0],[u[0]/30,u[2]/30,d[0]/30,d[2]/30,f[0]/30,f[2]/30,g[0]/30,g[2]/30]);for(let x of[-1,1]){let p=h(a,c,x*n,.045),m=h(a,c,x*(n+11),0),v=h(a+1,l,x*n,.045),_=h(a+1,l,x*(n+11),0);this.B.sand.quad(p,m,_,v,[0,1,0],[0,0,1,0,1,1,0,1])}if(a%3===0)for(let x of[-1,1]){let p=h(a,c,x*(n+16+this.r()*10),0);this.tree(p[0],p[2],1.2,0,-.1)}}this.M.sand.side=ht;let r=new _n({map:Ae.water().clone(),color:10274518,shininess:110,specular:10075101,transparent:!0,opacity:.94,side:ht});r.map.needsUpdate=!0,this.riverMesh=t.mesh(r),this.scene.add(this.riverMesh),this.B.sand.ground(-6e3,1745,6e3,1800,.02,10);let o=new ke(new zt(12e3,4e3),new _n({map:Ae.water().clone(),shininess:90,specular:8956620,transparent:!0,opacity:.95}));o.material.map.needsUpdate=!0,o.material.map.repeat.set(400,130),o.rotation.x=-Math.PI/2,o.position.set(0,.07,3790),this.water=o,this.scene.add(o)}buildHills(){if(!this.hills.length)return;let e=new ai(1,22,9,0,Math.PI*2,0,Math.PI/2),t=e.attributes.uv;for(let r=0;r<t.count;r++)t.setXY(r,t.getX(r)*40,t.getY(r)*10);let n=[];for(let r=0;r<t.count;r++)n.push(.72,.8,.64);e.setAttribute("color",new He(n,3));let i=new kn(e,this.M.grass,this.hills.length);this.hills.forEach((r,o)=>i.setMatrixAt(o,_e(r.x,-4,r.z,0,0,0,r.r,r.h,r.r))),i.computeBoundingSphere(),i.receiveShadow=!0,this.scene.add(i);for(let r of this.hills)r.x>300&&r.z<900&&this.r()>.4&&this.turbine(r.x,r.z,50,1,r.h-6)}scatterForest(){let e=this.r,t=this.q.trees,n=0,i=0;for(;i<t&&n++<t*8;){let o=Rt.x0+e()*(Rt.x1-Rt.x0),a=Rt.z0+e()*(Rt.z1-Rt.z0),c=_l(o/520,a/520)*.8+(o<-300&&a<600?.55:-.15);if(e()>c||!this.isFree(o,a,2))continue;let l=o<-1500||_l(o/300+9,a/300)>.62;this.tree(o,a,1.3+e()*.8,l?1:0,this.terrainH(o,a)-.2),i++}for(let o of this.fields)for(let a=0;a<5;a++)this.tree(o.x0+e()*(o.x1-o.x0),o.z0-5,1.1,0,0);let r=this.q.trees/7e3;for(let o of this.hws)if(o.id!=="SP-280")for(let a=0;a<o.n;a+=2){let c=Math.round(3*r+e());for(let l=0;l<c;l++){let h=e()<.5?-1:1,u=18+o.y[a]*1.9+Math.pow(e(),1.6)*70,d=o.x[a]-o.dz[a]*h*u+(e()-.5)*6,f=o.z[a]+o.dx[a]*h*u+(e()-.5)*6;if(!this.isFree(d,f,0))continue;let g=o.id==="RS-030"?e()<.7:e()<.3;this.tree(d,f,1.5+e()*1.1,g?1:0,this.terrainH(d,f)-.2)}}}buildTrees(){let e=o=>{let a=new Re(!0),c=new Ln(.2,.32,3.2,6);if(c.translate(0,1.6,0),a.add(c,_e(0,0,0),7031859),o===0){let l=new Za(1,0);a.add(l,_e(0,4.6,0,0,0,0,2.6,2.3,2.6),6265402),a.add(l,_e(1.1,3.9,.5,.5,.3,0,1.7,1.5,1.7),7646021),a.add(l,_e(-.9,4.1,-.6,.2,1,0,1.8,1.6,1.8),5474867)}else{let l=new Yi(1,1,7);a.add(l,_e(0,4,0,0,0,0,2.4,3.4,2.4),3963450),a.add(l,_e(0,5.9,0,0,.4,0,1.8,3,1.8),4424770),a.add(l,_e(0,7.6,0,0,.8,0,1.1,2.4,1.1),4886088)}return a.geometry()},t=[e(0),e(1)],n=700,i=new Map;for(let o of this.trees){let a=Math.floor(o.x/n)*1e3+Math.floor(o.z/n)+":"+o.k;i.has(a)||i.set(a,[]),i.get(a).push(o)}let r=new de;for(let[o,a]of i){let c=+o.split(":")[1],l=new kn(t[c],this.M.leaf,a.length);a.forEach((h,u)=>{l.setMatrixAt(u,_e(h.x,h.y,h.z,0,h.rot,0,h.s,h.s*(.9+u%5*.06),h.s)),r.setHSL(.15+u*37%10/150,.3,.8+u*13%10/45),l.setColorAt(u,r)}),l.computeBoundingSphere(),l.castShadow=!0,this.scene.add(l)}}buildLamps(){let e=this.lamps.length,t=new Ln(.12,.16,8,6);t.translate(0,4,0);let n=new Mn(.15,.15,2.2);n.translate(0,8,1);let i=new Mn(.5,.2,.9);i.translate(0,7.9,2);let r=new kn(t,new hn({color:6122878}),e),o=new kn(n,new hn({color:6122878}),e),a=new kn(i,new rt({color:16642768}),e),c=new zt(16,16);c.rotateX(-Math.PI/2),c.translate(0,.12,3.5);let l=new kn(c,new rt({map:Ae.glow(),color:16757596,transparent:!0,opacity:0,depthWrite:!1,blending:Rn}),e);this.lamps.forEach((h,u)=>{let d=this.areas.find(x=>x.city&&h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1),f=0;if(d){let x=d.city,p=Math.round((h.x-x.x0)/140)*140+x.x0,m=Math.round((h.z-x.z0)/140)*140+x.z0;f=Math.abs(h.x-p)<Math.abs(h.z-m)?p>h.x?Math.PI/2:-Math.PI/2:m>h.z?0:Math.PI}let g=_e(h.x,0,h.z,0,f,0);r.setMatrixAt(u,g),o.setMatrixAt(u,g),a.setMatrixAt(u,g),l.setMatrixAt(u,g)}),this.lampHeads=a,this.lampPools=l,l.visible=!1;for(let h of[r,o,a,l])h.computeBoundingSphere(),this.scene.add(h)}setNight(e){for(let t of this.M.f)t.emissiveIntensity=Math.max(0,e*1.1-.1);this.lampPools.visible=e>.05,this.lampPools.material.opacity=e*.9,this.lampHeads.material.color.setRGB(.75+e*.25,.72+e*.2,.65+e*.1)}update(e,t){for(let n of this.animated)n.obj.rotation.z+=n.speed*e;this.water&&this.water.material.map.offset.set(t*.004,t*.006),this.riverMesh&&this.riverMesh.material.map.offset.set(t*.02,t*.01)}};var To=new N;function Wn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;To.copy(e),To[n]=0,To.normalize();let l=.5*o/(o+a),h=1-To.angleTo(s)/c;return Math.sign(To[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Lr=class extends Mn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new N,c=new N,l=new N(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new N,x=.5/i;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[m+0]=Wn(g,c,"z","y",r,n),d[m+1]=1-Wn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[m+0]=1-Wn(g,c,"z","y",r,n),d[m+1]=1-Wn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[m+0]=1-Wn(g,c,"x","z",r,e),d[m+1]=Wn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-Wn(g,c,"x","z",r,e),d[m+1]=1-Wn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-Wn(g,c,"x","y",r,e),d[m+1]=1-Wn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[m+0]=Wn(g,c,"x","y",r,e),d[m+1]=1-Wn(g,c,"y","x",r,t);break}}};var Cs="medium",yl={};function fp(s){Cs=s}var hi=null;function Ro(){if(hi)return hi;let s=Cs!=="low",e=t=>{var n;return s?new Sn(t):new _n({color:t.color,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:(n=t.opacity)!=null?n:1,shininess:t.roughness<.3?120:20,specular:t.metalness>.5?16777215:3355443})};return hi={chrome:e({color:15922422,metalness:1,roughness:.14,map:Ae.metal()}),alu:e({color:13225425,metalness:.9,roughness:.3}),dark:e({color:2040616,metalness:.1,roughness:.75,side:ht}),steel:e({color:3883336,metalness:.5,roughness:.5}),glass:e({color:989732,metalness:.4,roughness:.03,transparent:!0,opacity:.62,side:ht}),interior:e({color:2764081,metalness:0,roughness:.9}),lamp:s?new Sn({map:Ae.headlamp(),emissiveMap:Ae.headlamp(),emissive:16777215,emissiveIntensity:.15,metalness:.6,roughness:.15,side:ht}):new rt({map:Ae.headlamp(),side:ht}),tail:new rt({map:Ae.taillamp(),side:ht}),lampFlat:s?new Sn({color:16054008,emissive:16774102,emissiveIntensity:.15,metalness:.5,roughness:.1}):new rt({color:16054008}),blink:new Ms({map:Ae.glow(),color:16753178,transparent:!0,depthWrite:!1,blending:Rn}),rubber:e({color:16777215,map:Ae.tire(),metalness:0,roughness:.92}),rim:e({color:15264492,metalness:.85,roughness:.25}),light:new rt({color:16775393}),red:new rt({color:14037041}),amber:new rt({color:16753178}),grill:e({color:16777215,map:Ae.grill(),metalness:.7,roughness:.3}),flat:e({vertexColors:!0,metalness:.15,roughness:.55}),flatChrome:e({vertexColors:!0,metalness:.9,roughness:.2}),panel:e({color:16777215,map:Ae.panel(),metalness:.2,roughness:.5}),blob:new rt({map:Ae.blob(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),glow:new Ms({map:Ae.glow(),color:16774102,transparent:!0,depthWrite:!1,blending:Rn}),glowRed:new Ms({map:Ae.glow(),color:16722458,transparent:!0,depthWrite:!1,blending:Rn}),beam:new rt({map:Ae.beam(),transparent:!0,depthWrite:!1,blending:Rn,polygonOffset:!0,polygonOffsetFactor:-3})},hi}function e1(s){return Cs==="high"?new xn({color:s,map:Ae.paint(),metalness:.35,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):Cs==="medium"?new Sn({color:s,map:Ae.paint(),metalness:.35,roughness:.33}):new _n({color:s,map:Ae.paint(),shininess:90,specular:8947848})}var Ch={};function pp(s,e){let t=s+"_"+e;if(Ch[t])return Ch[t];let n=[[s*.6,-e/2],[s*.9,-e/2],[s*.985,-e*.4],[s,-e*.25],[s,e*.25],[s*.985,e*.4],[s*.9,e/2],[s*.6,e/2]].map(([l,h])=>new oe(l,h)),i=new xo(n,22),r=[[.001,e*.36],[s*.18,e*.38],[s*.24,e*.3],[s*.5,e*.26],[s*.6,e*.34],[s*.6,-e*.3]].map(([l,h])=>new oe(l,h)),o=new xo(r,22),a=new Ln(.03,.03,.06,6),c=new Re;c.add(o,_e(0,0,0));for(let l=0;l<10;l++){let h=l/10*Math.PI*2;c.add(a,_e(Math.cos(h)*s*.32,e*.36,Math.sin(h)*s*.32))}return Ch[t]={tire:i,rim:c.geometry()}}function mp(s){let e=new Re,t=[];for(let[i,r]of s){let o=e.idx.length;for(let[a,c]of i)e.add(a,c);t.push([o,e.idx.length-o,r])}let n=e.geometry();for(let[i,r,o]of t)r&&n.addGroup(i,r,o);return n}function Ih(s,e,t,n,i){let{tire:r,rim:o}=pp(t,n),a=[],c=[];for(let u of[-1,1]){let d=u>0?-Math.PI/2:Math.PI/2;i?(a.push([r,_e(u*(e/2+n*.52),0,0,0,0,d)]),a.push([r,_e(u*(e/2-n*.52),0,0,0,0,d)]),c.push([o,_e(u*(e/2+n*.52),0,0,0,0,d)])):(a.push([r,_e(u*e/2,0,0,0,0,d)]),c.push([o,_e(u*e/2,0,0,0,0,d)]))}let l=Ro(),h=new ke(mp([[a,0],[c,1]]),[l.rubber,l.rim]);return h.position.set(0,t,s),h.castShadow=!0,h}function Ao(s,e,t,n,i){let{tire:r,rim:o}=pp(t,n),a=i>0?-Math.PI/2:Math.PI/2,c=Ro(),l=new ke(mp([[[[r,_e(0,0,0,0,0,a)]],0],[[[o,_e(0,0,0,0,0,a)]],1]]),[c.rubber,c.rim]);l.castShadow=!0;let h=new Pt;return h.position.set(e,t,s),h.add(l),h}function gp(s,e){for(let[t,n]of s){let i=t.mesh(n,{cast:!0});i&&e.add(i)}}var dp={};function t1(s,e,t,n){let i=[s,e,t,n].join("_");return dp[i]||(dp[i]=new Lr(s,e,t,2,n))}var n1=new Ln(1,1,1,14,1,!0,0,Math.PI);function es(s,e,t=.06,n=3){let i=new $i;s(i);let r=Math.max(.01,e-2*t),o=new $a(i,{depth:r,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:n,curveSegments:10});o.rotateY(-Math.PI/2),o.translate(r/2,0,0),o.computeBoundingBox();let a=o.boundingBox,c=o.attributes.position,l=o.attributes.uv;for(let h=0;h<c.count;h++)l.setXY(h,(c.getZ(h)-a.min.z)/(a.max.z-a.min.z||1),(c.getY(h)-a.min.y)/(a.max.y-a.min.y||1));return o}function Rs(s,e,t,n=[0,0,1,0,1,1,0,1]){for(let i of[-1,1]){let r=e.map(([o,a])=>[i*t,a,o]);s.quad(r[0],r[1],r[2],r[3],[i,0,0],i>0?n:[n[2],n[3],n[0],n[1],n[6],n[7],n[4],n[5]])}}function Lh(s,e,t,n,i,r,o,a=0){let c=n-e,l=i-t,h=Math.hypot(c,l),u=l/h,d=-c/h,f=[e+u*o,t+d*o],g=[n+u*o,i+d*o];s.quad([a-r/2,f[1],f[0]],[a+r/2,f[1],f[0]],[a+r/2,g[1],g[0]],[a-r/2,g[1],g[0]],[0,d,u],[0,0,1,0,1,1,0,1])}var i1={canter:{glass:{ws:[5.1,1.73,4.76,2.2,1.76],side:[[4.3,1.5],[5.08,1.5],[4.8,2.12],[4.3,2.12]],sideX:.965},lampY:.78,blinkY:.62},labo:{lampY:.78,blinkY:.62,bed:{z0:-.62,z1:1.18,y:.66,w:1.3}}};function s1(s,e){let t=Ro(),n={};e.traverse(I=>{I.userData&&I.userData.wb&&(n=I.userData)});let i=i1[s.model]||{},r=new Pt;r.rotation.order="YXZ";let o=new Pt;r.add(o);let a=Cs==="low"?new _n({color:s.color,shininess:90,specular:8947848}):Cs==="high"?new xn({color:s.color,metalness:.3,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):new Sn({color:s.color,metalness:.3,roughness:.33});t.boxWhite=t.boxWhite||(Cs==="low"?new _n({color:15659250,shininess:40}):new Sn({color:15659250,metalness:.25,roughness:.45})),t.tireFlat=t.tireFlat||new Sn({color:1381653,roughness:.92});let c={paint:a,box:t.boxWhite,glass:t.glass,interior:t.interior,steel:t.steel,dark:t.dark,rubber:t.tireFlat,chrome:t.chrome,lamp:t.lampFlat,red:t.red,amber:t.amber},l={},h=I=>!I||I.side===ht?I:l[I.uuid]||(l[I.uuid]=Object.assign(I.clone(),{side:ht}));e.traverse(I=>{if(!I.isMesh)return;let D=new ke(I.geometry,h(c[I.name]||c[I.material&&I.material.name]||t.steel));D.castShadow=!0,o.add(D)});let u=n.zFront,d=n.zRear,f=n.width,g=f/2;if(i.glass){let I=new Re,[D,w,k,P,q]=i.glass.ws;Lh(I,D,w,k,P,q,0),Rs(I,i.glass.side,i.glass.sideX),o.add(I.mesh(t.glass,{cast:!1}))}let x=null;if(i.bed){let I=i.bed,D=new Re(!0),w=[12884588,12094040,13806460],k=0;for(let P=I.z0+.3;P<I.z1-.25;P+=.55)for(let q=-I.w/2+.3;q<I.w/2-.25;q+=.6){let Y=.35+k*7%3*.12;D.add(Oe.box(),_e(q,I.y+Y/2,P,0,k*13%5*.04,0,.52,Y,.48),w[k++%3])}x=D.mesh(new hn({vertexColors:!0}),{cast:!0}),x.visible=!1,o.add(x)}let p=n.wheels||[],m=[],v=[];for(let I of p.filter(D=>D.tag[0]==="F")){let D=Ao(I.z,I.x,I.r,Math.max(.16,I.w),I.x>0?1:-1);D.position.y=I.r,m.push(D),r.add(D)}let _=p.filter(I=>I.tag[0]==="R");if(_.length){let I=_[0].w>.3,D=Ih(_[0].z,Math.abs(_[0].x)*2,_[0].r,I?_[0].w/2.1:Math.max(.16,_[0].w),I);v.push(D),r.add(D)}let y=n.wr||.4,R=n.wb||3,E=new Pt,T=i.lampY||.8;for(let I of[-1,1]){let D=new Jn(t.glow);D.scale.set(1.4,1.4,1),D.position.set(I*(g-.3),T,u+.1),E.add(D);let w=new Jn(t.glowRed);w.scale.set(.8,.8,1),w.position.set(I*(g-.2),T,d-.08),E.add(w)}let A=new ke(new zt(8,24),t.beam);A.rotation.set(-Math.PI/2,0,Math.PI),A.position.set(0,.07,u+12.5),E.add(A),E.visible=!1,r.add(E);let z=[],M=[];for(let I of[-1,1])for(let[D,w]of[[i.blinkY||.6,u+.08],[i.blinkY||.6,d-.08]]){let k=new Jn(t.blink);k.scale.set(.7,.7,1),k.position.set(I*(g-.08),D,w),k.visible=!1,r.add(k),(I>0?z:M).push(k)}let S=new ke(new zt(f+.8,u-d+1.2),t.blob);return S.rotation.x=-Math.PI/2,S.position.set(0,.05,(u+d)/2),r.add(S),{root:r,body:o,front:m,rear:v,wb:R,wr:y,hitchZ:d,zf:u,rearEnd:d,paint:a,blob:S,cabW:f,night:E,y0:1,cabFront:u,ch:n.height||2,conv:!1,blinkL:z,blinkR:M,bedCargo:x}}function r1(s){if(s.model&&yl[s.model])return s1(s,yl[s.model]);let e=Ro(),t=new Pt;t.rotation.order="YXZ";let n=new Pt;t.add(n);let i=new Re,r=new Re,o=new Re,a=new Re,c=new Re,l=new Re,h=new Re,u=new Re,d=new Re,f=new Re,g=new Re,x=new Re,p=new Re,m=new Re,v=(F,ie,le,ve,L,b,V,O=0,te=0,re=0)=>F.add(Oe.box(),_e(L,b,V,O,te,re,ie,le,ve)),_=(F,ie,le,ve,L,b,V,O=.1,te=0)=>F.add(t1(ie,le,ve,O),_e(L,b,V,te,0,0)),y=(F,ie,le,ve,L,b,V=0,O=0,te=0,re=14)=>F.add(Oe.cyl(re),_e(ve,L,b,V,O,te,ie*2,le,ie*2)),R=(F,ie,le=0)=>F.add(ie,_e(le,0,0)),E=s.rigid,T=s.id==="urbano",A=s.cab==="conventional",z=s.roof==="high",M=s.roof==="mid",S=T?.42:.53,I=T?3.3:E?4.3:A?s.axles>=4?5.9:5.6:s.axles>=4?4.6:3.9,D=T?2.15:2.5,w=T?.95:1.15,k=T?.86:1,P=F=>w+F*k,q=I+(T?1.25:A?1.6:1.4),Y=E?-(T?1.4:2):-1.45,H=D/2,W,se;for(let F of[-1,1])v(d,.12,.3,q-Y-.4,F*.45,w-.28,(q+Y)/2-.15);for(let F=Y+.4;F<I;F+=1.1)v(d,.9,.14,.12,0,w-.28,F);if(A){let F=q,ie=2.05,le=F-ie,ve=D*.64;W=le;let L=z?1.9:1.2;se=W-1.8-L,R(i,es(O=>{O.moveTo(le,w-.15),O.lineTo(F-.1,w-.15),O.lineTo(F,w-.05),O.lineTo(F,P(1)),O.quadraticCurveTo(F,P(1.18),F-.28,P(1.21)),O.lineTo(le,P(1.36)),O.lineTo(le,w-.15)},ve,.12)),_(r,ve*.9,1.12*k,.12,0,P(.48),F+.15,.04),v(u,ve*.76,1*k,.03,0,P(.48),F+.22),v(r,.08,.12,.28,0,P(1.27),F-.15);let b=S+.14;for(let O of[-1,1]){R(i,es(te=>{te.moveTo(I+b*Math.cos(-.35),S+b*Math.sin(-.35)),te.absarc(I,S,b,-.35,Math.PI,!1),te.lineTo(I-b-.55,S+.02),te.lineTo(I-b-.55,S-.06),te.lineTo(I-b+.08,S-.06),te.absarc(I,S,b-.08,Math.PI,-.35,!0)},.62,.03,2),O*(H-.31)),g.quad([O*(H-.31)-.24,S+.32,I+b+.02],[O*(H-.31)+.24,S+.32,I+b+.02],[O*(H-.31)+.24,S+.56,I+b-.03],[O*(H-.31)-.24,S+.56,I+b-.03],[0,.2,1],[0,0,1,0,1,1,0,1]),y(r,.2,1.1,O*(H+.02),P(.95),W+.15),y(r,.06,.55,O*(H+.02),P(1.7),W+.15);for(let te of[0,1])v(d,.42,.05,.6,O*(H-.2),.48+te*.36,W-.55);v(o,.06,.95,.65,O*(H-.01),.72,W-.55)}R(r,es(O=>{O.moveTo(F-.05,w-.62),O.lineTo(F+.3,w-.62),O.quadraticCurveTo(F+.38,w-.6,F+.38,w-.42),O.lineTo(F+.34,w-.14),O.lineTo(F-.05,w-.14)},D+.1,.05)),R(i,es(O=>{O.moveTo(W-1.8,w),O.lineTo(W-.05,w),O.lineTo(W,P(.3)),O.lineTo(W,P(1.36)),O.lineTo(W-.3,P(2.1)),O.quadraticCurveTo(W-.4,P(2.24),W-.62,P(2.25)),O.lineTo(W-1.65,P(2.25)),O.quadraticCurveTo(W-1.8,P(2.25),W-1.8,P(2.1)),O.lineTo(W-1.8,w)},D,.07));let V=P(z?3.05:2.4);R(i,es(O=>{O.moveTo(se,w),O.lineTo(W-1.76,w),O.lineTo(W-1.76,P(2.2)),O.quadraticCurveTo(W-1.95,V,W-2.6,V),O.lineTo(se+.15,V),O.quadraticCurveTo(se,V,se,V-.15),O.lineTo(se,w)},D-.04,.07));for(let O of[-1,1])Lh(a,W,P(1.38),W-.3,P(2.08),D/2-.24,.075,O*(D/4-.04));for(let O of[-.6,.6])v(o,.6,.03,.03,O,P(1.42),W+.06,0,0,.2);_(i,D-.1,.12,.45,0,P(2.2),W+.08,.04,-.25);for(let O=-2;O<=2;O++)v(h,.13,.06,.08,O*.34,P(2.3),W-.1);for(let O of[-1,1]){let te=O*(H+.072);v(o,.02,P(2)-P(.15),.025,te,(P(2)+P(.15))/2,W-1.2),v(o,.02,.025,1.1,te,P(.15),W-.65),v(r,.04,.05,.2,O*(H+.09),P(1.1),W-1.05),v(r,.4,.04,.04,O*(H+.22),P(2),W-.25,0,O*-.3,0),v(r,.04,.55,.04,O*(H+.42),P(1.75),W-.12),_(r,.15,.7,.3,O*(H+.48),P(1.6),W-.1,.05),v(a,.02,.6,.22,O*(H+.4),P(1.6),W-.1),y(r,.11,3,O*(H-.12),P(2.4),se-.22),y(r,.15,1,O*(H-.12),P(1.6),se-.22)}Rs(a,[[W-.07,P(1.44)],[W-1.12,P(1.44)],[W-1.12,P(2.06)],[W-.32,P(2.06)]],H+.075),Rs(a,[[W-2.3,P(1.4)],[W-2.7,P(1.4)],[W-2.7,P(1.75)],[W-2.3,P(1.75)]],H+.055),Rs(p,[[W-.05,P(.3)],[se+.1,P(.3)],[se+.1,P(1.15)],[W-.05,P(1.15)]],H+.08),v(m,D-.3,.3,.5,0,P(1.25),W-.35),m.add(new br(.22,.025,6,18),_e(.55,P(1.42),W-.65,.6,0,0));for(let O of[-1,1])v(m,.55,.15,.55,O*.55,P(.7),W-1.1),v(m,.55,.8,.12,O*.55,P(1.1),W-1.4,-.15)}else{let F=q,ie=T?1.75:E?1.95:2.3,le=F-ie;W=F,se=le;let ve=P(z?3:M?2.55:2.14);R(i,es(b=>{b.moveTo(le,w),b.lineTo(F-.18,w),b.quadraticCurveTo(F-.02,w,F-.02,P(.2)),b.lineTo(F-.06,P(1)),b.lineTo(F-.12,P(1.08)),b.lineTo(F-.4,P(2)),b.quadraticCurveTo(F-.47,P(2.14),F-.7,P(2.15)),(z||M)&&(b.quadraticCurveTo(F-.95,P(2.17),F-1.05,P(z?2.55:2.35)),b.quadraticCurveTo(F-1.15,ve,F-1.5,ve)),b.lineTo(le+.16,ve),b.quadraticCurveTo(le,ve,le,ve-.16),b.lineTo(le,w)},D,.07)),Lh(a,F-.12,P(1.1),F-.4,P(1.98),D-.34,.075);for(let b of[-.45,.35])v(o,.7,.03,.03,b,P(1.15),F-.04,0,0,.25);R(i,es(b=>{b.moveTo(F-.42,P(2.06)),b.lineTo(F+.04,P(2)),b.lineTo(F+.04,P(1.95)),b.lineTo(F-.42,P(2))},D-.12,.015,1));for(let b=-2;b<=2;b++)v(h,.13,.06,.08,b*.34,P(2.06),F-.12);v(u,D*.68,.55*k,.03,0,P(.62),F+.03,-.05);for(let b of[.42,.62,.82])v(r,D*.7,.035,.035,0,P(b),F+.05);v(r,.24,.24,.04,0,P(.98),F+.02,0,0,Math.PI/4),R(o,es(b=>{b.moveTo(F-.35,w-.55),b.lineTo(F+.05,w-.55),b.quadraticCurveTo(F+.17,w-.55,F+.17,w-.4),b.lineTo(F+.13,w+.12),b.lineTo(F-.35,w+.12)},D+.04,.05));for(let b of[-1,1]){g.quad([b*(H-.12)-(b>0?.62:0),w-.2,F+.235],[b*(H-.12)+(b>0?0:.62),w-.2,F+.235],[b*(H-.12)+(b>0?0:.62),w+.06,F+.2],[b*(H-.12)-(b>0?.62:0),w+.06,F+.2],[0,0,1],[0,0,1,0,1,1,0,1]),y(c,.075,.04,b*(H-.4),w-.42,F+.235,Math.PI/2,0,0,12),o.add(n1,_e(b*(H-.25),S,I,0,0,Math.PI/2,S+.12,.44,S+.12));for(let V of[0,1])v(d,.4,.05,.42,b*(H-.2),.48+V*.36,I-.72);v(o,.06,.95,.5,b*(H-.01),.7,I-.72)}for(let b of[-1,1]){let V=b*(H+.072);v(o,.02,P(1.95)-P(.15),.025,V,(P(1.95)+P(.15))/2,F-1.32),v(o,.02,P(1)-P(.15),.025,V,(P(1)+P(.15))/2,F-.22),v(o,.02,.025,1.1,V,P(.15),F-.77),v(r,.04,.05,.2,b*(H+.09),P(1.02),F-1.18),v(r,.02,.03,1.15,b*(H+.078),P(1.16),F-.78),v(r,.42,.04,.04,b*(H+.24),P(1.96),F-.3,0,b*-.3,0),v(r,.04,.5,.04,b*(H+.44),P(1.72),F-.18),_(o,.15,.64,.32,b*(H+.5),P(1.6),F-.14,.05),v(a,.02,.54,.24,b*(H+.425),P(1.6),F-.14),_(o,.13,.26,.22,b*(H+.48),P(1.12),F-.12,.05)}if(Rs(a,[[F-.17,P(1.18)],[F-1.25,P(1.18)],[F-1.25,P(1.92)],[F-.41,P(1.92)]],H+.075),z&&Rs(a,[[le+.35,P(2.25)],[le+.15,P(2.25)],[le+.15,P(2.7)],[le+.35,P(2.7)]],H+.075),Rs(p,[[F-.15,P(.2)],[le+.05,P(.2)],[le+.05,P(1.05)],[F-.15,P(1.05)]],H+.08),z&&!E)for(let b of[-1,1])v(i,.05,.62,I-.95-1.2,b*(H-.04),.78,(I-.95+1.2)/2);v(m,D-.3,.3,.55,0,P(1),F-.45);let L=new br(.21,.025,6,18);m.add(L,_e(.55,P(1.18),F-.72,.55,0,0));for(let b of[-1,1])v(m,.55,.15,.55,b*.55,P(.55),F-1.25),v(m,.55,.75,.12,b*.55,P(.95),F-1.55,-.15)}if(!T){let F=A?W-1.4:I-1.6;y(f,.34,1.4,1.02,.86,F,Math.PI/2,0,0,20);for(let ie of[-.45,.45])y(o,.355,.06,1.02,.86,F+ie,Math.PI/2,0,0,20);v(o,.5,.5,.7,-1,.85,F+.1),y(d,.17,1.1,-.95,.62,F-.9,Math.PI/2)}if(!E){let F=se-.25;A||(y(r,.11,2.6,H-.14,P(2)+(z?.4:0),F),y(r,.15,.9,H-.14,P(1.2),F)),v(f,1.3,.05,.55,0,w+.05,F-.1);for(let[ie,le]of[[12597547,-.18],[3049182,.18]]){let ve=new ke(new br(.16,.025,6,16),new hn({color:ie}));ve.position.set(le,w+.5,F-.05),n.add(ve)}v(d,1.35,.14,1.3,0,w-.02,.3),v(f,1.2,.03,1.1,0,w+.06,.3);for(let ie of[-1,1])v(o,.7,.05,s.axles>=3?2.7:1.4,ie*.98,S*2+.14,0)}for(let F of[-1,1])x.quad([F*.62-.22,w-.32,Y-.03],[F*.62+.22,w-.32,Y-.03],[F*.62+.22,w-.1,Y-.03],[F*.62-.22,w-.1,Y-.03],[0,0,-1],F>0?[1,0,0,0,0,1,1,1]:[0,0,1,0,1,1,0,1]),v(o,.62,.62,.03,F*1,.55,s.axles>=3&&!E?-1.45:-.8);v(d,2,.1,.12,0,w-.2,Y);let Me=.3;if(E){let F=se-.15,ie=Y,le=T?2.3:2.7,ve=T?2.25:2.5;v(d,ve,.12,F-ie,0,w+.02,(ie+F)/2);let L=new hn({map:Ae.cargoBox("#"+new de(s.color===15921906?3108830:s.color).getHexString(),"DRIZZIE")}),b=new Re,V=w+.08,O=w+.08+le;b.quad([ve/2+.01,V,F],[ve/2+.01,V,ie],[ve/2+.01,O,ie],[ve/2+.01,O,F],[1,0,0],[1,0,0,0,0,1,1,1]),b.quad([-ve/2-.01,V,ie],[-ve/2-.01,V,F],[-ve/2-.01,O,F],[-ve/2-.01,O,ie],[-1,0,0],[0,0,1,0,1,1,0,1]),n.add(b.mesh(L,{cast:!0}));let te=new Re(!0);te.box(-ve/2,V,ie,ve/2,O,F,1,16053492);for(let re of[-1,1])te.add(Oe.box(),_e(re*ve/4,(V+O)/2,ie-.02,0,0,0,ve/2-.08,le-.12,.02),14474460);te.add(Oe.box(),_e(0,O+.02,(ie+F)/2,0,0,0,ve+.04,.06,F-ie+.04),13685718),n.add(te.mesh(e.flat,{cast:!0}));for(let re of[-.3,.3])v(r,.04,le-.3,.04,re,(V+O)/2,ie-.04);v(o,ve-.2,.12,.1,0,.55,ie-.05),Me=Y}let Be=e1(s.color),j=new hn({map:Ae.cabDecal(s.color),transparent:!0,alphaTest:.05,depthWrite:!1,side:ht,polygonOffset:!0,polygonOffsetFactor:-2});gp([[i,Be],[r,e.chrome],[o,e.dark],[a,e.glass],[c,e.light],[l,e.red],[h,e.amber],[u,e.grill],[d,e.steel],[f,e.alu],[g,e.lamp],[x,e.tail],[p,j],[m,e.interior]],n);let ae=new Pt,Se=A?S+.44:w-.07,Ie=A?I+S+.3:q+.3,Te=A?H-.31:H-.43;for(let F of[-1,1]){let ie=new Jn(e.glow);ie.scale.set(1.7,1.7,1),ie.position.set(F*Te,Se,Ie),ae.add(ie);let le=new Jn(e.glowRed);le.scale.set(.9,.9,1),le.position.set(F*.62,w-.2,Y-.12),ae.add(le)}let we=new ke(new zt(9,26),e.beam);we.rotation.set(-Math.PI/2,0,Math.PI),we.position.set(0,.07,q+13.5),ae.add(we),ae.visible=!1,t.add(ae);let qe=[],Pe=[];for(let F of[-1,1])for(let[ie,le,ve]of[[F*(H-.05),A?S+.44:w-.07,A?I+S+.3:q+.25],[F*(H+.05),P(A?.6:.3),A?W-.2:I+.6],[F*.98,w-.2,Y-.1]]){let L=new Jn(e.blink);L.scale.set(.8,.8,1),L.position.set(ie,le,ve),L.visible=!1,t.add(L),(F>0?qe:Pe).push(L)}let U=[],ue=[],ee=H-.3,he=T?.26:.32;U.push(Ao(I,ee,S,he,1),Ao(I,-ee,S,he,-1)),s.axles>=4&&U.push(Ao(I-1.55,ee,S,he,1),Ao(I-1.55,-ee,S,he,-1));for(let F of U)t.add(F);for(let F of s.axles>=3?[.68,-.68]:[0]){let ie=Ih(F,T?1.45:1.75,S,T?.22:.3,!0);ue.push(ie),t.add(ie)}let ne=new ke(new zt(D+1,q-Y+1.5),e.blob);return ne.rotation.x=-Math.PI/2,ne.position.set(0,.05,(q+Y)/2),t.add(ne),{root:t,body:n,front:U,rear:ue,wb:I,wr:S,hitchZ:Me,zf:q,rearEnd:Y,paint:Be,blob:ne,cabW:D,night:ae,y0:w,cabFront:W,ch:2.05*k,conv:A,blinkL:qe,blinkR:Pe}}function o1(s){let e=Ro(),t=new Pt;t.rotation.order="YXZ";let n=new Re(!0),i=new Re,r=new Re(!0),o=new Re,a=new Re,c=new Re,l=new Re,h=(S,I,D,w,k,P,q,Y,H=0,W=0,se=0)=>S.add(Oe.box(),_e(k,P,q,H,W,se,I,D,w),Y),u=(S,I,D,w,k,P,q,Y,H,W,se=18)=>S.add(Oe.cyl(se),_e(w,k,P,q,Y,H,I*2,D,I*2),W),d=s.trailer,f=s.model,g=f==="blade"?20:d==="tank"?12.5:d==="bulk"?12:d==="lowboy"?14.5:13.6,x=1,p=-(g-x),m=d==="lowboy"?s.t>60?5:4:3,v=1.35,_=p+1.6+(m-1)*v/2,y=1.35,R=[];for(let S of[-1,1]){h(l,.14,.42,g-.6,S*.48,y-.3,(x+p)/2),h(i,.12,1,.12,S*.9,.6,-1.6),h(i,.32,.06,.32,S*.9,.08,-1.6),h(i,.06,.32,5.5,S*1.2,y-.45,p+7.6),h(o,.38,.16,.05,S*1,y-.4,p-.03);for(let I=x-1.5;I>p+1;I-=3)h(a,.04,.08,.12,S*1.28,y-.1,I)}h(i,2.4,.16,.12,0,y-.75,p-.06);for(let S=x-1;S>p+1;S-=1.2)h(l,.96,.1,.1,0,y-.3,S);if(d==="box"){let I=y+1.375;c.add(Oe.box(),_e(0,I,(x+p)/2,0,0,0,2.56,2.75,g));let D=new hn({map:Ae.cargoBox("#d63031","DRIZZIE")}),w=new Re,k=y+.3,P=y+2.75-.25,q=1.29,Y=x-1.5,H=p+1.5;w.quad([q,k,Y],[q,k,H],[q,P,H],[q,P,Y],[1,0,0],[1,0,0,0,0,1,1,1]),w.quad([-q,k,H],[-q,k,Y],[-q,P,Y],[-q,P,H],[-1,0,0],[0,0,1,0,1,1,0,1]),R.push(w.mesh(D,{cast:!1}));for(let W of[-1,1])h(n,1.22,2.75-.15,.04,W*.63,I,p-.02,15132906);for(let W of[-.95,-.35,.35,.95])h(r,.04,2.75-.3,.05,W,I,p-.06,12568010);h(n,2.56,.12,g,0,y+2.75+.06,(x+p)/2,13685718)}else if(d==="tank"){let S=f==="silo"?12106944:15265007;u(r,1.25,g-1.2,0,y+1.3,(x+p)/2,Math.PI/2,0,0,S,28),r.add(Oe.sphere(),_e(0,y+1.3,x-.6,0,0,0,2.5,2.5,.8),S),r.add(Oe.sphere(),_e(0,y+1.3,p+.6,0,0,0,2.5,2.5,.8),S);for(let I=x-1.6;I>p+1;I-=2.2)u(n,1.27,.08,0,y+1.3,I,Math.PI/2,0,0,10133670,28);for(let I=0;I<3;I++)u(n,.3,.2,0,y+2.6,x-3-I*3.3,0,0,0,8359053,12);h(n,.6,.06,g-2.4,0,y+2.62,(x+p)/2,7174788);for(let I of[-1,1])h(n,.03,.2,g-2.4,I*.3,y+2.75,(x+p)/2,16765952);h(n,.9,.6,.03,1,y+1.3,p+.1,s.hazard?16747520:3049182),h(n,.5,2.4,.06,0,y+1.3,p+.05,8359053)}else if(d==="bulk"){h(n,2.5,.12,g,0,y+.06,(x+p)/2,2911902);for(let I of[-1,1])h(n,.08,2.1,g,I*1.21,y+2.1/2,(x+p)/2,2911902);h(n,2.5,2.1,.08,0,y+2.1/2,x-.04,2911902),h(n,2.5,2.1,.08,0,y+2.1/2,p+.04,2911902);for(let I=0;I<8;I++)for(let D of[-1,1])h(i,.06,2.1,.08,D*1.26,y+2.1/2,x-1-I*1.5);n.add(Oe.sphere(),_e(0,y+2.1-.15,(x+p)/2,0,0,0,2.3,.9,g-.5),13214812)}else if(d==="flatbed"){h(n,2.5,.22,g,0,y,(x+p)/2,7162927),h(n,2.5,1.2,.1,0,y+.7,x-.05,3426654);let S=y+.11,I=D=>{for(let w=x-1.8;w>p+1;w-=2.6)h(n,2.56,.02,.05,0,D,w,15844367)};if(f==="logs"){for(let D=0;D<3;D++)for(let w=0;w<4-D;w++){let k=(w-(3-D)/2)*.6;u(n,.3,g-1.2,k,S+.3+D*.52,(x+p)/2,Math.PI/2,0,0,D%2?9329458:8014374,10);for(let P of[x-.6,p+.6])u(n,.29,.02,k,S+.3+D*.52,P,Math.PI/2,0,0,14200954,10)}for(let D=0;D<5;D++)for(let w of[-1,1])h(i,.08,2.2,.08,w*1.2,S+1.1,x-1-D*2.8)}else if(f==="container"){let D=new ke(Oe.box(),new hn({map:Ae.container(2388387)}));D.scale.set(2.44,2.59,12.19),D.position.set(0,S+1.3,(x+p)/2),R.push(D),I(S+2.62)}else if(f==="coils")for(let D=0;D<4;D++)u(r,.85,1.6,0,S+.86,x-2-D*3,0,0,Math.PI/2,12568010,24),u(n,.3,1.62,0,S+.86,x-2-D*3,0,0,Math.PI/2,2236962,12),h(i,1.6,.25,1.4,0,S+.12,x-2-D*3),h(n,.05,1.8,1.7,0,S+.9,x-2-D*3,15844367);else if(f==="beams"){for(let D=0;D<3;D++)for(let w=0;w<4;w++){let k=(w-1.5)*.58,P=S+.22+D*.42,q=(x+p)/2;h(n,.5,.05,g-.6,k,P+.17,q,6122878),h(n,.5,.05,g-.6,k,P-.17,q,6122878),h(n,.06,.34,g-.6,k,P,q,4872810)}I(S+1.4)}}else if(d==="lowboy"){h(n,2.6,.3,3.4,0,y,x-1.6,12597547),h(n,2.9,.3,g-5.5,0,.95,(x-3.4+p+2.1)/2,12597547),h(n,2.6,.3,2.1,0,y-.1,p+1.05,12597547);for(let w of[-1,1])h(n,.6,1.6,.12,w*.8,y+.7,p+.2,12597547,.5);for(let w of[-1,1])h(n,1,.6,.03,w*.7,y+.6,p-.1,16777215);let I=.95+.15,D=(x-3.4+p+2.1)/2;if(f==="tractor"){h(n,1.3,1.2,3.2,0,I+1.3,D+.3,3050298),h(n,1.4,1.5,1.4,0,I+2.3,D-.9,3050298),h(n,1.3,1,1.3,0,I+3.1,D-.9,1845299);for(let w of[-1,1])u(n,.95,.6,w*1.1,I+.95,D-1,0,0,Math.PI/2,2236962),u(n,.55,.62,w*1.1,I+.95,D-1,0,0,Math.PI/2,15844367),u(n,.55,.4,w*.95,I+.55,D+1.5,0,0,Math.PI/2,2236962)}else if(f==="excavator"){for(let w of[-1,1]){h(i,.7,.9,4.8,w*1.05,I+.45,D);for(let k=0;k<5;k++)u(n,.22,.72,w*1.05,I+.25,D-1.8+k*.9,0,0,Math.PI/2,5592405,10)}h(n,2.6,1.2,3.6,0,I+1.5,D-.6,15844367),h(n,1,1.4,1.2,-.7,I+2.8,D+.4,15844367),h(n,.9,1,.04,-.7,I+2.9,D+1.01,1845299),h(n,.5,.5,4,.5,I+2.6,D+2.4,15844367,-.35),h(n,.45,.45,2.8,.5,I+2,D+4.6,15844367,.9),h(i,1,.8,.8,.5,I+1,D+5.2)}else if(f==="transformer"){h(n,2.6,3,4.2,0,I+1.5,D,8359053);for(let w=0;w<9;w++)for(let k of[-1,1])h(n,.08,2.4,1,k*1.36,I+1.5,D-1.8+w*.45,9807270);for(let w=0;w<3;w++)u(n,.18,1.3,(w-1)*.8,I+3.6,D+1,0,0,0,9127187,10)}else f==="blade"?(n.add(Oe.sphere(),_e(0,I+1.6,D-2,0,0,0,2.2,2,30),16054007),u(n,1.1,1.6,0,I+1.6,D+30/2-3.5,Math.PI/2,0,0,15067368,20),h(i,.4,1.4,.6,0,I+.7,D+2),h(i,.4,1.4,.6,0,I+.7,D-6)):f==="press"&&(h(n,2.8,3.6,4.6,0,I+1.8,D,3038604),h(n,1.8,1.2,1.6,0,I+4.2,D,2049126),h(r,.25,3,.25,1.2,I+2,D+2.2,12436423),h(r,.25,3,.25,-1.2,I+2,D+2.2,12436423));h(n,2.3,.35,.03,0,y+.9,p-.06,16761095)}gp([[n,e.flat],[i,e.dark],[r,e.flatChrome],[o,e.red],[a,e.amber],[c,e.panel],[l,e.steel]],t);for(let S of R)S&&(S.castShadow=!0,t.add(S));let E=[];for(let S=0;S<m;S++){let I=Ih(p+1.6+S*v,1.75,.5,.28,!0);E.push(I),t.add(I)}let T=new Pt;for(let S of[-1,1]){let I=new Jn(e.glowRed);I.scale.set(.9,.9,1),I.position.set(S*1,y-.4,p-.15),T.add(I)}T.visible=!1,t.add(T);let A=[],z=[];for(let S of[-1,1]){let I=new Jn(e.blink);I.scale.set(.8,.8,1),I.position.set(S*1.2,y-.4,p-.12),I.visible=!1,t.add(I),(S>0?A:z).push(I)}let M=new ke(new zt(3.4,g+1.5),e.blob);return M.rotation.x=-Math.PI/2,M.position.set(0,.05,(x+p)/2),t.add(M),t.traverse(S=>{S.isMesh&&S!==M&&(S.castShadow=!0)}),{root:t,axles:E,Lk:-_,Lt:g,front:x,back:p,blob:M,night:T,blinkL:A,blinkR:z}}var Ph={x:0,z:0},bl=class{constructor(e,t,n){this.scene=e,this.shadows=n,this.x=0,this.z=0,this.h=0,this.y=0,this.pitch=0,this.tpitch=0,this.v=0,this.steer=0,this.acc=0,this.trailer=null,this.th=0,this.cargo=null,this.wheelRot=0,this.rpm=.2,this.collCooldown=0,this.reverse=!1,this.lastImpact=0,this.lightsOn=!1,this.engineOn=!1,this.setTruck(t)}setTruck(e){this.model&&this.scene.remove(this.model.root),this.def=e,this.model=r1(e),this.model.blob.visible=!this.shadows,this.scene.add(this.model.root),this.model.night.visible=this.lightsOn,this.onModel&&this.onModel(this.model),this.trailer&&e.rigid&&this.detach(),this.model.bedCargo&&(this.model.bedCargo.visible=!!this.cargo),this.sync()}attach(e){if(this.cargo=e,this.model.bedCargo&&(this.model.bedCargo.visible=!0),this.def.rigid)return;let t=o1(e);t.blob.visible=!this.shadows,t.night.visible=this.lightsOn,this.trailer=t,this.th=this.h,this.scene.add(t.root),this.sync()}setBlink(e,t){let n=(o,a)=>{for(let c of o)c.visible=a},i=t&&(e===-1||e===2),r=t&&(e===1||e===2);n(this.model.blinkL,i),n(this.model.blinkR,r),this.trailer&&(n(this.trailer.blinkL,i),n(this.trailer.blinkR,r))}setLights(e){hi&&hi.lamp.emissiveIntensity!==void 0&&(hi.lamp.emissiveIntensity=e?1.6:.15),hi&&hi.lampFlat.emissiveIntensity!==void 0&&(hi.lampFlat.emissiveIntensity=e?2.2:.15),this.lightsOn=e,this.model.night.visible=e,this.trailer&&(this.trailer.night.visible=e)}detach(){this.model.bedCargo&&(this.model.bedCargo.visible=!1),this.trailer&&this.scene.remove(this.trailer.root),this.trailer=null,this.cargo=null}get mass(){let e=this.def.mass;return this.cargo&&(e+=this.cargo.t+(this.def.rigid?0:rp(this.cargo))),e*1e3}get speedKmh(){return Math.abs(this.v)*3.6}place(e,t,n){this.x=e,this.z=t,this.h=n,this.th=n,this.v=0,this.steer=0,this.sync()}center(e){let t=Math.sin(this.h),n=Math.cos(this.h);if(this.trailer){let i=this.x+t*this.model.hitchZ,r=this.z+n*this.model.hitchZ,o=this.trailer.Lt*.45;e.x=(this.x+t*this.model.wb*.5+i-Math.sin(this.th)*o)/2,e.z=(this.z+n*this.model.wb*.5+r-Math.cos(this.th)*o)/2}else e.x=this.x+t*this.model.wb*.4,e.z=this.z+n*this.model.wb*.4;return e}update(e,t,n,i){this.world=n;let r=this.def,o=this.mass,a=r.hp*735.5*2.3,c=r.vmax/3.6,l=this.v,h=0,u=t.brake,d=t.throttle;t.gear==="auto"?(this.stopT=u>.1&&Math.abs(l)<.4&&d<.1?(this.stopT||0)+e:0,this.stopT>.3&&(this.reverse=!0),d>.1&&l>-.4&&(this.reverse=!1)):this.reverse=t.gear==="R";let f=this.engineOn&&t.gear!=="N",g=t.gear==="auto"&&this.reverse;this.reverse?g?(f&&u>0&&l>-4.5&&(h-=u*Math.min(a/Math.max(-l,3),o*1.6)),d>0&&l<0&&(h+=d*o*6)):(f&&d>0&&l>-5&&(h-=d*Math.min(a/Math.max(-l,3),o*1.6)),u>0&&l<0&&(h+=u*o*6.5),u>0&&l>0&&(h-=u*o*6.5)):(f&&d>0&&l>=-.3&&(h+=d*Math.min(a/Math.max(l,3),o*3,r.hp*250)),u>0&&l>0&&(h-=u*o*(6.8-Math.min(2.2,o/4e4))),u>0&&l<0&&(h+=u*o*6)),t.handbrake&&(h-=Math.sign(l)*o*5);let x=Math.sin(this.pitch)*.6+Math.sin(this.trailer?this.tpitch:this.pitch)*.4,p=-o*9.81*x,m=this.trailer?this.cargo.trailer==="box"?9:7:r.rigid?6.5:5,v=.5*1.2*m*l*Math.abs(l),_=(.011*o*9.81+(d<.05&&u<.05?o*.35:0))*Math.sign(l);l+=(h+(Math.abs(l)>.2||d>0?p:0)-v)/o*e;let y=_/o;Math.abs(y*e)>Math.abs(l)&&h===0?l=0:l-=y*e;let R=f?this.reverse?g?u>0?-1:0:d>0?-1:0:d>0?1:0:0;l!==0&&Math.sign(l)!==R&&Math.sign(l)!==Math.sign(this.v)&&(l=0),t.handbrake&&Math.abs(l)<.3&&(l=0),l=Math.min(l,c),l=Math.max(l,-5),this.acc=(l-this.v)/Math.max(e,.001),this.v=l,this.grade=x;let E=.6/(1+l*l/160),T=t.steer*E,A=t.steer===0?2.6:1.7,z=T-this.steer;this.steer+=Math.sign(z)*Math.min(Math.abs(z),A*e);let M=this.model.wb,S=l*Math.tan(this.steer)/M;if(this.h+=S*e,this.yaw=S,this.x+=Math.sin(this.h)*l*e,this.z+=Math.cos(this.h)*l*e,this.trailer){let q=this.model.hitchZ,Y=this.h-this.th,H=(l*Math.sin(Y)-q*S*Math.cos(Y))/this.trailer.Lk;this.th+=H*e;let W=this.h-this.th;W=Math.atan2(Math.sin(W),Math.cos(W));let se=1.3;Math.abs(W)>se&&(this.th=this.h-Math.sign(W)*se)}this.collide(n,i,e),this.wheelRot+=l*e/this.model.wr;let I=Math.abs(l)/c,D=Math.min(5,Math.floor(I*6)),w=I*6-D;this.gear=this.reverse?"R":t.gear==="N"?"N":Math.abs(l)<.3?t.gear==="auto"?"N":"D":String(D+1);let k=Math.max(d,x>.02?.7:0),P=this.engineOn?Math.abs(l)<.3||t.gear==="N"?.18+d*.5:.3+w*.6*(.5+k*.5):0;this.rpm+=(P-this.rpm)*Math.min(1,e*6),this.sync()}circles(e){let t=this.model,n=Math.sin(this.h),i=Math.cos(this.h);e.length=0;for(let r of[t.zf-.9,(t.zf+t.rearEnd)/2,t.rearEnd+.9])e.push({x:this.x+n*r,z:this.z+i*r,r:t.cabW/2+.1,t:!1});if(this.trailer){let r=this.x+n*t.hitchZ,o=this.z+i*t.hitchZ,a=Math.sin(this.th),c=Math.cos(this.th),l=this.trailer;for(let h=l.front-1.2;h>l.back+.5;h-=2.4)e.push({x:r+a*h,z:o+c*h,r:1.35,t:!0});e.push({x:r+a*(l.back+1.3),z:o+c*(l.back+1.3),r:1.35,t:!0})}return e}collide(e,t,n){this.collCooldown-=n;let i=this._cs||(this._cs=[]);this.circles(i);let r=0,o=0,a=0;for(let c of i){let l=e.resolveCircle(c,c.r,Ph);l>.01&&(r+=Ph.x*(c.t?.6:1),o+=Ph.z*(c.t?.6:1),l>a&&(a=l));for(let h of t){let u=c.x-h.x,d=c.z-h.z,f=c.r+h.r,g=u*u+d*d;if(g<f*f&&g>1e-6){let x=Math.sqrt(g),p=f-x;r+=u/x*p*.5,o+=d/x*p*.5,p>a&&(a=p),h.hit=!0}}}if(this.lastImpact=0,a>0){this.x+=r,this.z+=o;let c=Math.abs(this.v)*3.6;c>4&&a>.12&&this.collCooldown<=0&&(this.lastImpact=c,this.collCooldown=.6),this.v*=c>15&&a>.3?-.12:a>.12?.6:.97}}sync(){let e=this.model,t=Math.sin(this.h),n=Math.cos(this.h),i=this.world,r=0,o=0;i&&(r=i.heightAt(this.x,this.z),o=i.heightAt(this.x+t*e.wb,this.z+n*e.wb)),this.y=r,this.pitch=Math.atan2(o-r,e.wb),e.root.position.set(this.x,r,this.z),e.root.rotation.set(-this.pitch,this.h,0);for(let c=0;c<e.front.length;c++){let l=e.front[c];l.rotation.y=this.steer*(c<2?1:.6),l.children[0].rotation.x=this.wheelRot}for(let c of e.rear)c.rotation.x=this.wheelRot;let a=(this.yaw||0)*this.v;if(e.body.rotation.z+=(Math.max(-.05,Math.min(.05,-a*.012))-e.body.rotation.z)*.2,e.body.rotation.x+=(Math.max(-.03,Math.min(.03,-this.acc*.006))-e.body.rotation.x)*.2,this.trailer){let c=this.trailer,l=this.x+t*e.hitchZ,h=this.z+n*e.hitchZ,u=r+(o-r)*(e.hitchZ/e.wb),d=l-Math.sin(this.th)*c.Lk,f=h-Math.cos(this.th)*c.Lk,g=i?i.heightAt(d,f):0;this.tpitch=Math.atan2(u-g,c.Lk),c.root.position.set(l,u,h),c.root.rotation.set(-this.tpitch,this.th,0);let x=this.wheelRot*(e.wr/.5);for(let p of c.axles)p.rotation.x=x}}};function Nh(s,e){if(e===Bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===So||e===ol){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===So)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ml=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ji.extractUrlBase(e);o=ji.resolveURL(l,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new bo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===bp){try{o[at.KHR_BINARY_GLTF]=new eu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new au(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:o[u]=new zh;break;case at.KHR_DRACO_MESH_COMPRESSION:o[u]=new tu(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[u]=new nu;break;case at.KHR_MESH_QUANTIZATION:o[u]=new iu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function a1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fh=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new de(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Er(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new tl(h),l.distance=u;break;case"spot":l=new Sr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ns(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},zh=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){let i=[];e.color=new de(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new de(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new de().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new de().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Kh=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Jh=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},jh=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Qh=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Xn.TRIANGLES&&l.mode!==Xn.TRIANGLE_STRIP&&l.mode!==Xn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ve,p=new N,m=new Cn,v=new N(1,1,1),_=new kn(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,x.compose(p,m,v));for(let y in c)if(y==="_COLOR_0"){let R=c[y];_.instanceColor=new Ss(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);yt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},bp="glTF",Co=12,xp={JSON:1313821514,BIN:5130562},eu=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Co,r=new DataView(e,Co),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===xp.JSON){let l=new Uint8Array(e,Co+o,a);this.content=n.decode(l)}else if(c===xp.BIN){let l=Co+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ru[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ru[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ir[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(f)},a,l,Qt,d)})})}},nu=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},iu=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Sl=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,p=-2*f+3*d,m=f-d,v=1-p,_=m-d+u;for(let y=0;y!==a;y++){let R=o[x+y+a],E=o[x+y+c]*h,T=o[g+y+a],A=o[g+y]*h;r[y]=v*R+_*E+p*T+m*A}return r}},l1=new Cn,su=class extends Sl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return l1.fromArray(r).normalize().toArray(r),r}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_p={9728:Gt,9729:Ht,9984:Ma,9985:eo,9986:ms,9987:Fn},vp={33071:gn,33648:oo,10497:Mi},Dh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},c1={CUBICSPLINE:void 0,LINEAR:ys,STEP:hr},Uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function h1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function Ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ns(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function u1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function d1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function f1(s){let e,t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oh(t.attributes):e=s.indices+":"+Oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oh(s.targets[n]);return e}function Oh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ou(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function p1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var m1=new Ve,au=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new a1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new Qa(this.options.manager):this.textureLoader=new nl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ps(r,a,i),ns(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Dh[i.type],a=Ir[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Xt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Dh[i.type],l=Ir[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,_=t.cache.get(v);_||(x=new l(a,m*f,i.count*f/h),_=new _r(x,f/h),t.cache.add(v,_)),p=new bs(_,c,d%f/h,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),p=new Xt(x,c,g);if(i.sparse!==void 0){let m=Dh.SCALAR,v=Ir[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new v(o[1],_,i.sparse.count*m),E=new l(o[2],y,i.sparse.count*c);a!==null&&(p=new Xt(p.array.slice(),p.itemSize,p.normalized));for(let T=0,A=R.length;T<A;T++){let z=R[T];if(p.setX(z,E[T*c]),c>=2&&p.setY(z,E[T*c+1]),c>=3&&p.setZ(z,E[T*c+2]),c>=4&&p.setW(z,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=_p[d.magFilter]||Ht,h.minFilter=_p[d.minFilter]||Fn,h.wrapS=vp[d.wrapS]||Mi,h.wrapT=vp[d.wrapT]||Mi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new jt(x);p.needsUpdate=!0,d(p)}),t.load(ji.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||p1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Es,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new po,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Sn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let u=i[at.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new de(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ft)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ht);let h=r.alphaMode||Uh.OPAQUE;if(h===Uh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==rt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rt){let u=r.emissiveFactor;a.emissive=new de().setRGB(u[0],u[1],u[2],Qt)}return r.emissiveTexture!==void 0&&o!==rt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ns(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(i,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return yp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=f1(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=yp(new Mt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?h1(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,v=l[f];if(p.mode===Xn.TRIANGLES||p.mode===Xn.TRIANGLE_STRIP||p.mode===Xn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Oa(x,v):new ke(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Xn.TRIANGLE_STRIP?m.geometry=Nh(m.geometry,ol):p.mode===Xn.TRIANGLE_FAN&&(m.geometry=Nh(m.geometry,So));else if(p.mode===Xn.LINES)m=new Ba(x,v);else if(p.mode===Xn.LINE_STRIP)m=new vr(x,v);else if(p.mode===Xn.LINE_LOOP)m=new ka(x,v);else if(p.mode===Xn.POINTS)m=new yr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&d1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ns(m,r),p.extensions&&Ps(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ps(i,u[0],r),u[0];let d=new Pt;r.extensions&&Ps(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Hf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ns(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new za(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],x=f.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let v=0,_=d.length;v<_;v++){let y=d[v],R=f[v],E=g[v],T=x[v],A=p[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let z=n._createAnimationTracks(y,R,E,T,A);if(z)for(let M=0;M<z.length;M++)m.push(z[M])}return new ja(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,m1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new fo:l.length>1?h=new Pt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ns(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Pt;n.name&&(r.name=i.createUniqueName(n.name)),ns(r,n),n.extensions&&Ps(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof cn||d instanceof jt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];ts[r.path]===ts.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ts[r.path]){case ts.weights:l=Ei;break;case ts.rotation:l=li;break;case ts.position:case ts.scale:l=wi;break;default:switch(n.itemSize){case 1:l=Ei;break;case 2:case 3:default:l=wi;break}break}let h=i.interpolation!==void 0?c1[i.interpolation]:ys,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ts[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ou(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof li?su:Sl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function g1(s,e,t){let n=e.attributes,i=new Bn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=ou(Ir[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=ou(Ir[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function yp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=ru[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return dt.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),ns(s,e),g1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?u1(s,e.targets,t):s})}var Nr=20/2,Mp=[12597547,2719929,15528177,2899536,8359053,15844367,2600544,9323693,13849600,1118481,12436423],lu=null;function x1(s,e){let t=new Re(!0),n=new Re(!0);lu=lu||new Lr(1,1,1,2,.18);let i=(p,m,v,_,y,R,E,T=0)=>t.add(Oe.box(),_e(_,y,R,T,0,0,p,m,v),E),r=(p,m,v,_,y,R,E)=>t.add(lu,_e(_,y,R,0,0,0,p,m,v),E),o=1845299,a=4.4,c=1.8,l=.34;s===0?(r(c,.62,a,0,.62,0,e),r(c-.16,.6,2.3,0,1.18,-.25,o),r(c-.12,.1,2,0,1.47,-.25,e)):s===1?(a=4.7,c=1.95,l=.4,r(c,.85,a,0,.8,0,e),r(c-.1,.72,3.2,0,1.55,-.45,o),r(c-.06,.1,3,0,1.92,-.45,e),i(1.2,.05,2,0,2,-.45,2236962)):s===2?(a=11.5,c=2.5,l=.55,r(c,2.7,a,0,1.8,0,e),i(c+.02,.95,a-1.6,0,2.35,-.4,o),i(c-.2,1.3,.05,0,2.2,a/2+.01,o),i(c+.02,.25,a-.4,0,.75,0,16777215)):(a=10.5,c=2.5,l=.52,r(c-.1,2.3,2.1,0,2,a/2-1.1,e),i(c-.4,.9,.05,0,2.55,a/2-.04,o),r(c,2.8,a-2.6,0,2.55,-1.2,16053492),i(.9,.3,a-1,0,.75,-.3,2236962));let h=(p,m,v,_,y,R,E)=>n.add(Oe.box(),_e(_,y,R,0,0,0,p,m,v),E),u=s>=2?.9:.72;h(.42,.16,.06,c/2-.3,u,a/2+.01,16775393),h(.42,.16,.06,-c/2+.3,u,a/2+.01,16775393),h(.42,.16,.06,c/2-.3,u+.05,-a/2-.01,16722458),h(.42,.16,.06,-c/2+.3,u+.05,-a/2-.01,16722458);let d=s>=2?[a/2-2,-a/2+2.4]:[a/2-.85,-a/2+.85];for(let p of[-1,1])for(let m of d)t.add(Oe.cyl(12),_e(p*(c/2-.12),l,m,0,0,Math.PI/2,l*2,.28,l*2),1381653),t.add(Oe.cyl(10),_e(p*(c/2-.02),l,m,0,0,Math.PI/2,l*1.1,.06,l*1.1),12106944);let f=t.idx.length,g=t.count;for(let p=0;p<n.count*3;p++)t.pos.push(n.pos[p]),t.nor.push(n.nor[p]),t.col.push(n.col[p]);for(let p=0;p<n.count*2;p++)t.uv.push(n.uv[p]);for(let p of n.idx)t.idx.push(p+g);let x=t.geometry();return x.addGroup(0,f,0),x.addGroup(f,n.idx.length,1),{geo:x,L:a,W:c}}function Sp(s,e,t,n,i){let r=1-n;return i.x=r*r*s.x+2*r*n*e.x+n*n*t.x,i.z=r*r*s.z+2*r*n*e.z+n*n*t.z,i}var El=class{constructor(e,t,n){this.scene=e,this.world=n,this.cars=[];let i=[new _n({vertexColors:!0,shininess:90,specular:7829367}),new rt({vertexColors:!0})];this.beamMat=new rt({map:Ae.beam(),transparent:!0,opacity:.7,depthWrite:!1,blending:Rn});let r=new zt(6,16);r.rotateX(-Math.PI/2),r.rotateY(Math.PI);let o={};for(let a=0;a<t;a++){let c=a%7===3?3:a%11===5?2:a%3===1?1:0,l=c===2?a%2?1752220:15965202:Mp[a*7%Mp.length],h=c+"_"+l;o[h]||(o[h]=x1(c,l));let u=new ke(o[h].geo,i);u.castShadow=!0,u.rotation.order="YXZ";let d=new ke(r,this.beamMat);d.position.set(0,.09,o[h].L/2+8),d.visible=!1,u.add(d),u.visible=!1,e.add(u),this.cars.push({mesh:u,beam:d,L:o[h].L,type:c,off:c>=2?7.5:a%2?2.5:7.5,v:0,vmax:c>=2?12:12+a%4,x:1e5,z:1e5,y:0,h:0,stopT:0,mode:null})}this.p={x:0,z:0},this.q={x:0,z:0},this.tmp={}}node(e,t,n){return{c:e,i:t,j:n,x:e.x0+t*140,z:e.z0+n*140}}neighbors(e){let t=[];for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=e.i+n,o=e.j+i;r>=0&&o>=0&&r<=e.c.nx&&o<=e.c.nz&&t.push(this.node(e.c,r,o))}return t}makeStraight(e){let{A:t,B:n}=e,i=Math.sign(n.x-t.x),r=Math.sign(n.z-t.z),o=-r,a=i,c={x:t.x+i*Nr+o*e.off,z:t.z+r*Nr+a*e.off},l={x:n.x-i*Nr+o*e.off,z:n.z-r*Nr+a*e.off};e.seg={p0:c,p1:{x:(c.x+l.x)/2,z:(c.z+l.z)/2},p2:l,len:Math.hypot(l.x-c.x,l.z-c.z),turn:!1},e.dir={x:i,z:r}}makeTurn(e){let{A:t,B:n}=e,i=this.neighbors(n).filter(x=>!(x.i===t.i&&x.j===t.j)),r=i[Math.random()*i.length|0],o=e.dir,a=Math.sign(r.x-n.x),c=Math.sign(r.z-n.z),l={x:-o.z,z:o.x},h={x:-c,z:a},u=e.seg.p2,d={x:n.x+a*Nr+h.x*e.off,z:n.z+c*Nr+h.z*e.off},f=a===o.x&&c===o.z,g=f?{x:(u.x+d.x)/2,z:(u.z+d.z)/2}:{x:n.x+(l.x+h.x)*e.off,z:n.z+(l.z+h.z)*e.off};e.seg={p0:u,p1:g,p2:d,len:f?20:Math.hypot(d.x-u.x,d.z-u.z)*1.15,turn:!f},e.next={A:n,B:r}}spawn(e,t,n){e.mesh.visible=!1,e.mode=null;let i=this.world.hw(t,n),r=jn.find(o=>t>o.x0-350&&t<As(o)+350&&n>o.z0-350&&n<Tr(o)+350);if(i&&(!r||Math.random()<.45)){let o=i.o,c=o.s[i.i]+(Math.random()<.5?-1:1)*(140+Math.random()*320);if(c<30||c>o.length-30)return;e.mode="hw",e.hwy=o,e.s=c,e.dir=Math.random()<.5?1:-1,e.v=e.vmax*1.4*.8,e.mesh.visible=!0;return}if(r)for(let o=0;o<30;o++){let a=this.node(r,Math.random()*(r.nx+1)|0,Math.random()*(r.nz+1)|0),c=this.neighbors(a),l=c[Math.random()*c.length|0],h=Math.hypot((a.x+l.x)/2-t,(a.z+l.z)/2-n);if(!(h<110||h>420)){e.mode="city",e.A=a,e.B=l,e.inTurn=!1,e.next=null,this.makeStraight(e),e.s=Math.random()*e.seg.len*.8,e.v=e.vmax*.6,e.mesh.visible=!0;return}}}update(e,t,n){let i=this.p,r=this.q,o=this.tmp;for(let a of this.cars){if(!a.mode||Math.hypot(a.x-t.x,a.z-t.z)>560){if(a.x=a.z=1e5,Math.random()<.2&&this.spawn(a,t.x,t.z),!a.mode)continue;this.place(a,i,r,o);continue}let c=Math.sin(a.hh||0),l=Math.cos(a.hh||0),h=!1,u=9+a.v*1.3+a.L/2,d=(p,m,v)=>{let _=p-a.x,y=m-a.z,R=_*c+y*l;R<=0||R>u+v||Math.abs(_*l-y*c)<1.6+v&&(h=!0)};for(let p of n)d(p.x,p.z,p.r);if(!h)for(let p of this.cars)p!==a&&p.mode&&d(p.x,p.z,p.L*.35);a.hit&&(a.stopT=2.5,a.hit=!1),a.stopT-=e;let f=a.mode==="hw"?a.vmax*1.4:a.seg.turn?6:a.vmax,g=h||a.stopT>0?0:f,x=g>a.v?2.5:7;if(a.v+=Math.sign(g-a.v)*Math.min(Math.abs(g-a.v),x*e),a.mode==="hw"){if(a.s+=a.v*e*a.dir,a.s<5||a.s>a.hwy.length-5){a.mode=null,a.mesh.visible=!1;continue}}else for(a.s+=a.v*e;a.s>=a.seg.len;)a.s-=a.seg.len,a.next&&a.inTurn?(a.A=a.next.A,a.B=a.next.B,a.next=null,a.inTurn=!1,this.makeStraight(a)):(this.makeTurn(a),a.inTurn=!0);this.place(a,i,r,o)}}place(e,t,n,i){if(e.mode==="hw"){let r=e.hwy;r.at(e.s,i);let o=i.dx*e.dir,a=i.dz*e.dir;e.x=i.x-a*3.6,e.z=i.z+o*3.6,e.y=i.y+.04,e.hh=Math.atan2(o,a);let c=r.at(e.s+e.dir*4,i).y,l=-Math.atan2(c+.04-e.y,4);e.mesh.position.set(e.x,e.y,e.z),e.mesh.rotation.set(l,e.hh,0)}else{let r=e.s/e.seg.len;Sp(e.seg.p0,e.seg.p1,e.seg.p2,r,t),Sp(e.seg.p0,e.seg.p1,e.seg.p2,Math.min(1,r+.02),n),Math.hypot(n.x-t.x,n.z-t.z)>1e-4&&(e.hh=Math.atan2(n.x-t.x,n.z-t.z)),e.x=t.x,e.z=t.z,e.mesh.position.set(e.x,0,e.z),e.mesh.rotation.set(0,e.hh,0)}}setNight(e){for(let t of this.cars)t.beam.visible=e>.35}obstacles(e){e.length=0;for(let t of this.cars){if(!t.mode)continue;let n=Math.sin(t.hh),i=Math.cos(t.hh),r=t.type>=2?3:2;for(let o=0;o<r;o++){let a=(o/(r-1)-.5)*(t.L-2);e.push({x:t.x+n*a,z:t.z+i*a,r:t.type>=2?1.3:1,car:t,set hit(c){this.car.hit=c}})}}return e}};var ft=null;function wl(s,e){return ft.nodes.push({x:s,z:e,adj:[]}),ft.nodes.length-1}function Tl(s,e,t){let n=0;for(let r=1;r<t.length;r++)n+=Math.hypot(t[r].x-t[r-1].x,t[r].z-t[r-1].z);let i={a:s,b:e,poly:t,len:n};return ft.edges.push(i),ft.nodes[s].adj.push(i),ft.nodes[e].adj.push(i),i}function Ep(s){ft={nodes:[],edges:[],cityNode:{}};for(let e of jn){let t=(n,i)=>e.id+":"+n+":"+i;for(let n=0;n<=e.nx;n++)for(let i=0;i<=e.nz;i++)ft.cityNode[t(n,i)]=wl(e.x0+n*140,e.z0+i*140);for(let n=0;n<=e.nx;n++)for(let i=0;i<=e.nz;i++){let r=ft.cityNode[t(n,i)];if(n<e.nx){let o=ft.cityNode[t(n+1,i)];Tl(r,o,[ft.nodes[r],ft.nodes[o]])}if(i<e.nz){let o=ft.cityNode[t(n,i+1)];Tl(r,o,[ft.nodes[r],ft.nodes[o]])}}}for(let e of s.hws){let t=[];for(let c of Object.values(s.depots))c.entry.hw===e.id&&t.push({s:c.entry.s,depot:c.id});t.sort((c,l)=>c.s-l.s);let n=e.def.from?ft.cityNode[e.def.from[0]+":"+e.def.from[1]+":"+e.def.from[2]]:wl(e.x[0],e.z[0]),i=e.def.to?ft.cityNode[e.def.to[0]+":"+e.def.to[1]+":"+e.def.to[2]]:wl(e.x[e.n-1],e.z[e.n-1]),r=n,o=0,a=(c,l)=>{let h=[];for(let u=c;u<=l;u++)h.push({x:e.x[u],z:e.z[u]});return h};for(let c of t){let l=0;for(;l<e.n-1&&e.s[l+1]<c.s;)l++;let h=wl(e.x[l],e.z[l]);ft.depotNode=ft.depotNode||{},ft.depotNode[c.depot]=h,Tl(r,h,[ft.nodes[r],...a(o,l)]),r=h,o=l}Tl(r,i,[...a(o,e.n-1),ft.nodes[i]])}return ft}function hu(s,e){let t=null,n=1/0;for(let i of ft.edges){let r=i.poly;for(let o=0;o<r.length-1;o++){let a=r[o].x,c=r[o].z,l=r[o+1].x-a,h=r[o+1].z-c,u=l*l+h*h||1,d=((s-a)*l+(e-c)*h)/u;d=d<0?0:d>1?1:d;let f=a+l*d,g=c+h*d,x=(s-f)**2+(e-g)**2;x<n&&(n=x,t={e:i,i:o,t:d,x:f,z:g})}}return t}function wp(s){let e=s.e.poly,t=[{x:s.x,z:s.z}];for(let r=s.i;r>=0;r--)t.push(e[r]);let n=[{x:s.x,z:s.z}];for(let r=s.i+1;r<e.length;r++)n.push(e[r]);let i=r=>r.reduce((o,a,c)=>c?o+Math.hypot(a.x-r[c-1].x,a.z-r[c-1].z):0,0);return[{node:s.e.a,poly:t,len:i(t)},{node:s.e.b,poly:n,len:i(n)}]}var cu=new Map;function _1(s){if(cu.has(s.id))return cu.get(s.id);let e;if(ft.depotNode&&ft.depotNode[s.id]!==void 0){let t=ft.depotNode[s.id];e=[{node:t,poly:[ft.nodes[t]],len:0}]}else e=wp(hu(s.entry.x,s.entry.z)).map(t=>Ii(yn({},t),{poly:t.poly.slice().reverse()}));return cu.set(s.id,e),e}function uu(s,e,t){let n=ft.nodes.length,i=new Float64Array(n).fill(1/0),r=new Array(n).fill(null),o=new Uint8Array(n),a=hu(s,e),c=wp(a),l={};for(let m of c)i[m.node]=m.len,l[m.node]=m.poly;for(;;){let m=-1,v=1/0;for(let _=0;_<n;_++)!o[_]&&i[_]<v&&(v=i[_],m=_);if(m<0)break;o[m]=1;for(let _ of ft.nodes[m].adj){let y=_.a===m?_.b:_.a,R=v+_.len;R<i[y]&&(i[y]=R,r[y]={u:m,e:_})}}let h=_1(t),u=null,d=1/0;for(let m of h)i[m.node]+m.len<d&&(d=i[m.node]+m.len,u=m);let f=[];for(let m=u.node;r[m];m=r[m].u)f.unshift(r[m]);let g=[{x:s,z:e}],x=f.length?f[0].u:u.node;if(!f.length&&a.e===hu(t.entry.x,t.entry.z).e&&!(ft.depotNode&&ft.depotNode[t.id]!==void 0))g.push({x:a.x,z:a.z},{x:t.entry.x,z:t.entry.z});else{g.push(...l[x]);for(let{u:m,e:v}of f){let y=v.a===m?v.poly:v.poly.slice().reverse();for(let R=1;R<y.length;R++)g.push(y[R])}g.push(...u.poly)}g.push({x:t.zone.x,z:t.zone.z});let p=0;for(let m=1;m<g.length;m++)p+=Math.hypot(g[m].x-g[m-1].x,g[m].z-g[m-1].z);return{path:g,len:p}}var Al=class{constructor(){this.ctx=null,this.volume=.7}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(t.destination),this.engGain=t.createGain(),this.engGain.gain.value=0,this.filter=t.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=400,this.filter.Q.value=4,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(this.filter),this.o2.connect(n).connect(this.filter);let i=t.createBuffer(1,t.sampleRate,t.sampleRate),r=i.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=i,this.noise.loop=!0;let o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=180,this.nGain=t.createGain(),this.nGain.gain.value=.25,this.noise.connect(o).connect(this.nGain).connect(this.filter),this.filter.connect(this.engGain).connect(this.master),this.o1.start(),this.o2.start(),this.noise.start()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}engine(e,t,n=!0){if(!this.ctx)return;let i=this.ctx.currentTime,r=28+e*70;this.o1.frequency.setTargetAtTime(r,i,.05),this.o2.frequency.setTargetAtTime(r*.5,i,.05),this.filter.frequency.setTargetAtTime(220+e*900+t*400,i,.08),this.engGain.gain.setTargetAtTime(n?.13+t*.08:0,i,.1)}horn(e){if(this.ctx){if(e&&!this.hornNodes){let t=this.ctx.createGain();t.gain.value=.18;let n=this.ctx.createOscillator(),i=this.ctx.createOscillator();n.type=i.type="sawtooth",n.frequency.value=233,i.frequency.value=311;let r=this.ctx.createBiquadFilter();r.frequency.value=1800,n.connect(r),i.connect(r),r.connect(t).connect(this.master),n.start(),i.start(),this.hornNodes=[n,i,t]}else if(!e&&this.hornNodes){let[t,n,i]=this.hornNodes;i.gain.setTargetAtTime(0,this.ctx.currentTime,.03),t.stop(this.ctx.currentTime+.2),n.stop(this.ctx.currentTime+.2),this.hornNodes=null}}}beep(e=880,t=.12,n="sine",i=.25){if(!this.ctx)return;let r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=n,r.frequency.value=e,o.gain.value=i,o.gain.setTargetAtTime(0,this.ctx.currentTime+t*.6,t*.3),r.connect(o).connect(this.master),r.start(),r.stop(this.ctx.currentTime+t*2)}crash(e){if(!this.ctx)return;let t=this.ctx,i=t.createBuffer(1,t.sampleRate*.35,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);let o=t.createBufferSource();o.buffer=i;let a=t.createBiquadFilter();a.frequency.value=900;let c=t.createGain();c.gain.value=Math.min(.9,.2+e/60),o.connect(a).connect(c).connect(this.master),o.start()}airBrake(){if(!this.ctx)return;let e=this.ctx,n=e.createBuffer(1,e.sampleRate*.6,e.sampleRate),i=n.getChannelData(0);for(let c=0;c<i.length;c++)i[c]=(Math.random()*2-1)*(1-c/i.length);let r=e.createBufferSource();r.buffer=n;let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2500;let a=e.createGain();a.gain.value=.22,r.connect(o).connect(a).connect(this.master),r.start()}starter(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),i=e.createGain(),r=e.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(14,t),n.frequency.linearRampToValueAtTime(22,t+.7),n.frequency.linearRampToValueAtTime(48,t+1.1),r.frequency.value=600,i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.35,t+.1),i.gain.setValueAtTime(.35,t+1),i.gain.linearRampToValueAtTime(0,t+1.4),n.connect(r).connect(i).connect(this.master),n.start(t),n.stop(t+1.5)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}};var ce=s=>document.getElementById(s),Eu="drizzieTruck.v1",En=s=>"R$ "+Math.round(s).toLocaleString("pt-BR"),ui=(s,e,t)=>Math.max(e,Math.min(t,s)),Rl={money:3e3,xp:0,level:1,owned:["mini"],truck:"mini",job:null,pos:null,name:"Motorista",clock:15.5,stats:{deliveries:0,km:0,earned:0,tons:0,crashes:0},settings:{quality:"auto",volume:.7,fps:!1,steer:"wheel",camera:0,time:"cycle",gearbox:"manual",gauge:"analog",accent:"amber",hud:"normal"}};function v1(){try{let s=JSON.parse(localStorage.getItem(Eu));if(s&&s.level){let e=Ii(yn(yn({},Rl),s),{stats:yn(yn({},Rl.stats),s.stats),settings:yn(yn({},Rl.settings),s.settings)});return e.owned.includes("mini")||e.owned.unshift("mini"),e}}catch(s){}return JSON.parse(JSON.stringify(Rl))}var X=v1();function Bt(){try{X.pos=Q?{x:Q.x,z:Q.z,h:Q.h}:X.pos,localStorage.setItem(Eu,JSON.stringify(X))}catch(s){}}var y1={low:{pr:1,minPr:.75,shadows:!1,shadowSize:0,tex:512,aniso:2,traffic:10,fogNear:150,fogFar:650,far:900,trees:5e3},medium:{pr:1.5,minPr:.85,shadows:!0,shadowSize:1024,tex:1024,aniso:4,traffic:16,fogNear:260,fogFar:1050,far:1500,trees:9e3},high:{pr:2,minPr:1,shadows:!0,shadowSize:2048,tex:1024,aniso:8,traffic:22,fogNear:380,fogFar:1600,far:2600,trees:14e3}};function b1(){let s="";try{let n=document.createElement("canvas"),i=n.getContext("webgl")||n.getContext("experimental-webgl"),r=i&&i.getExtension("WEBGL_debug_renderer_info");s=(r&&i.getParameter(r.UNMASKED_RENDERER_WEBGL)||i&&i.getParameter(i.RENDERER)||"").toLowerCase();let o=i&&i.getExtension("WEBGL_lose_context");o&&o.loseContext()}catch(n){}let e=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4;return/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(s)||e<=2||t<=4?"low":e>=6&&t>=8&&/adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(s)?"high":"medium"}var Li=X.settings.quality==="auto"?b1():X.settings.quality,Lt=y1[Li],kt,It,$t,gt,Q,Is,sn,ss,Do,Uo,is,xu=null,Fr=null,Tp=-1,Io=null,nn=0,lt=new Al;lt.volume=X.settings.volume;var Dt="loading",Ns=[],ei=null,Oo=0;var rn,ti,Po=0,du=[],Ce={gas:!1,brake:!1,left:!1,right:!1,tilt:0,wheel:0,wheelHeld:!1,gear:"D",hand:!1,blink:0,blinkArm:!1},vn={throttle:0,brake:0,steer:0,gear:"D",handbrake:!1},zr=null,Je={yaw:0,orbit:0,orbitT:0,mode:X.settings.camera||0,pos:new N,look:new N},Pi=Lt.pr,Ls=(s,e)=>new Promise(t=>{ce("loadbar").style.width=s+"%",ce("loadmsg").textContent=e,setTimeout(t,16)});async function M1(){await Ls(5,"Iniciando gr\xE1ficos\u2026");let s=ce("gl");try{kt=new ho({canvas:s,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(i){ce("loadmsg").textContent='Seu aparelho n\xE3o suporta WebGL. Atualize o "Android System WebView" na Play Store.';return}Pi=Math.min(window.devicePixelRatio||1,Lt.pr),kt.setPixelRatio(Pi),kt.setSize(window.innerWidth,window.innerHeight,!1),kt.outputColorSpace=Ft,kt.toneMapping=xh,kt.toneMappingExposure=1,kt.shadowMap.enabled=Lt.shadows,kt.shadowMap.type=Li==="high"?gh:il;let e=kt.capabilities.getMaxAnisotropy();ap(Lt.tex,Math.min(e,Lt.aniso)),fp(Li),It=new uo;let t=new de(12375786);if(It.background=t,It.fog=new Ua(t,Lt.fogNear,Lt.fogFar),$t=new Wt(58,window.innerWidth/window.innerHeight,.5,Lt.far),I1(),Do=new el(14413567,6122309,1.25),It.add(Do),sn=new Er(16773336,2.6),sn.position.set(180,260,120),Lt.shadows){sn.castShadow=!0,sn.shadow.mapSize.set(Lt.shadowSize,Lt.shadowSize);let i=Li==="high"?70:55;Object.assign(sn.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:10,far:600}),sn.shadow.bias=-6e-4,sn.shadow.normalBias=.04}It.add(sn,sn.target),await Ls(20,"Gerando texturas HD\u2026"),Ae.road(),Ae.intersection(),Ae.grass(),Ae.facade(0),Ae.facade(1),Ae.facade(2),Ae.facade(3),await Ls(45,"Construindo a cidade\u2026"),gt=new vl(It,Lt),Ep(gt),await Ls(62,"Carregando caminh\xF5es 3D\u2026");let n=new Ml;for(let i of["labo","canter"])try{yl[i]=(await n.loadAsync(`models/${i}.glb`)).scene}catch(r){console.warn("modelo",i,r)}await Ls(70,"Ligando o motor\u2026"),Q=new bl(It,Eo[X.truck]||Ar[0],Lt.shadows),Li!=="low"&&(is=new Sr(16773590,0,70,.55,.6,1.2),is.target=new yt,Q.onModel=i=>{i.root.add(is,is.target),is.position.set(0,i.y0+.3,i.zf+.4),is.target.position.set(0,0,i.zf+22)},Q.onModel(Q.model)),N1(),Is=new El(It,Lt.traffic,gt),D1(),await Ls(85,"Desenhando o mapa\u2026"),H1(),X.job&&X.job.phase==="deliver"&&Q.attach(un[X.job.cargo]),Ns=wu(),k1(),W1(),Li!=="low"&&(xu=new xr(kt),A1()),Nl(X.clock),await Ls(100,"Pronto!"),kt.compile(It,$t),ce("loading").classList.add("hidden"),Bo(),Dl=performance.now(),requestAnimationFrame(Bp)}var S1=new de(12375786),E1=new de(14916203),w1=new de(659744),Lo=new de;function Nl(s){let e=X.settings.time;e==="day"?s=12:e==="night"?s=23:e==="dusk"&&(s=17.7);let t=Math.sin((s-6)/12*Math.PI),n=ui(t*2.4+.25,0,1),i=ui(1-Math.abs(t)*4,0,1)*(t>-.25?1:0);nn=1-n,sn.intensity=2.7*n+.55*nn,nn>.6?sn.color.setHex(9414872):sn.color.setHSL(.09,.6+i*.3,.85-i*.2),Do.intensity=.62+.65*n,Do.color.setHex(14413567).lerp(Lo.setHex(5928104),nn),Do.groundColor.setHex(6122309).lerp(Lo.setHex(1843760),nn),Lo.copy(w1).lerp(S1,n).lerp(E1,i*.55),It.background.copy(Lo),It.fog.color.copy(Lo),ss.material.color.setRGB(.07,.09,.16).lerp(new de(1,1,1),n).lerp(new de(1.15,.72,.55),i*.6),Uo.material.opacity=ui(nn*1.3-.3,0,1),Uo.visible=Uo.material.opacity>.01,kt.toneMappingExposure=1+nn*.25,Io.material.color.setRGB(1,1,1).lerp(new de(.12,.14,.2),nn).lerp(new de(1.1,.75,.6),i*.7),C1(),gt.setNight(nn),Is.setNight(nn);let r=zr!==null?zr:nn>.35;Q.lightsOn!==r&&Q.setLights(r),is&&(is.intensity=Q.lightsOn?60*(.35+nn):0)}function T1(){let e=[],t=Lt.far*.9;for(let i=0;i<900;i++){let r=Math.random()*Math.PI*2,o=Math.random()*.9+.08,a=Math.sqrt(1-o*o);e.push(Math.cos(r)*a*t,o*t,Math.sin(r)*a*t)}let n=new Mt;n.setAttribute("position",new He(e,3)),Uo=new yr(n,new Es({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),ss.add(Uo)}function A1(){Fr=new uo;let s=new ai(10,24,12),e=[],t=s.attributes.position;for(let n=0;n<t.count;n++)e.push(1,1,1);s.setAttribute("color",new He(e,3)),Fr.userData.sky=new ke(s,new rt({vertexColors:!0,side:Jt})),Fr.add(Fr.userData.sky)}var Dr=new de,R1=new de;function C1(){if(!xu||Math.abs(nn-Tp)<.08)return;Tp=nn;let s=Fr.userData.sky.geometry,e=s.attributes.position,t=s.attributes.color,n=new de(4884165).lerp(new de(461590),nn),i=It.background.clone(),r=new de(5200442).lerp(new de(461068),nn);for(let a=0;a<e.count;a++){let c=e.getY(a)/10;c>=0?Dr.copy(i).lerp(n,Math.min(1,c*1.6)):Dr.copy(i).lerp(r,Math.min(1,-c*3)),nn<.5&&c>.3&&e.getX(a)>4&&e.getZ(a)>2&&Dr.lerp(R1.setRGB(2.2,2,1.7),.5),t.setXYZ(a,Dr.r,Dr.g,Dr.b)}t.needsUpdate=!0;let o=xu.fromScene(Fr,.02);It.environment&&It.environment.dispose(),It.environment=o.texture}function P1(s){Je.tt=(Je.tt||0)+s;let e=Je.tt*.08+Je.orbit,t=Q.model,n=Math.sin(Q.h),i=Math.cos(Q.h),r=Q.x+n*t.wb*.4,o=Q.z+i*t.wb*.4,a=((t.zf-t.rearEnd)*1.15+4.5+(Q.trailer?6:0))*(Je.zoom||1),c=Q.h+.7+Math.sin(e)*.9;$t.position.set(r+Math.sin(c)*a,1.6+Math.sin(e*.7)*.6,o+Math.cos(c)*a);let l=Math.cos(c),h=-Math.sin(c);$t.lookAt(r-l*3.2,1.9,o-h*3.2),$t.fov=50,$t.updateProjectionMatrix(),Lt.shadows&&(sn.target.position.set(Q.x,0,Q.z),sn.position.set(Q.x+150,170,Q.z+95)),ss.position.copy($t.position)}function L1(){let s=new ai(Lt.far*.85,32,8,0,Math.PI*2,0,Math.PI*.42);Io=new ke(s,new rt({map:Ae.clouds(),transparent:!0,depthWrite:!1,fog:!1,side:Jt,opacity:.9})),Io.material.map.repeat.set(3,1),Io.renderOrder=-.5,ss.add(Io)}function I1(){let s=new ai(Lt.far*.95,24,12),e=new de(4030404),t=new de(10274536),n=new de(14543344),i=[],r=s.attributes.position,o=new de;for(let a=0;a<r.count;a++){let c=r.getY(a)/(Lt.far*.95);c>.25?o.copy(t).lerp(e,Math.min(1,(c-.25)/.75)):o.copy(n).lerp(t,Math.max(0,c/.25)),i.push(o.r,o.g,o.b)}s.setAttribute("color",new He(i,3)),ss=new ke(s,new rt({vertexColors:!0,side:Jt,fog:!1,depthWrite:!1})),ss.renderOrder=-1,It.add(ss),T1(),L1()}function N1(){if(Q.world=gt,X.pos&&isFinite(X.pos.x)&&gt.resolveCircle({x:X.pos.x,z:X.pos.z},1.5,Fo)<=0){Q.place(X.pos.x,X.pos.z,X.pos.h);return}let s=gt.depots.garagem.zone;Q.place(s.x-8,s.z,Math.PI/2),Q.world=gt,Q.sync()}function D1(){rn=new Pt;let s=new ke(new zt(1,1),new rt({map:Ae.zone(),color:16761856,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.y=.08,rn.add(s),rn.zone=s;let e=new ke(new Ln(3,3,120,20,1,!0),new rt({color:16758531,transparent:!0,opacity:.18,depthWrite:!1,side:ht,fog:!1,blending:Rn}));e.position.y=60,rn.add(e);let t=new ke(new Yi(1.6,3.2,4),new rt({color:16761856}));t.rotation.x=Math.PI,rn.add(t),rn.cone=t,rn.visible=!1,It.add(rn);let n=new $i;n.moveTo(0,1.6),n.lineTo(1.3,-.6),n.lineTo(0,0),n.lineTo(-1.3,-.6),n.closePath();let i=new Ka(n);i.rotateX(Math.PI/2),ti=new ke(i,new rt({color:4120698,transparent:!0,opacity:.9,side:ht,depthTest:!1})),ti.renderOrder=10,ti.visible=!1,It.add(ti)}function U1(s,e){let t=gt.depots[s],n=gt.depots[e];return uu(t.zone.x,t.zone.z,n).len}function O1(s,e,t){let n=U1(e,t),i=n/1e3,r=Math.round((350+i*(900+s.t*115)*s.rate)/10)*10,o=Math.round(50+s.t*4+i*70),a=Math.round(n/8.5+90+s.t*1.5);return{cargo:s.id,from:e,to:t,dist:n,pay:r,xp:o,time:a}}function wu(){let s=[],e=wo.filter(i=>i.lvl<=X.level+4),t=new Set,n=0;for(;s.length<10&&n++<200;){let i=e.filter(h=>h.lvl<=X.level),r=Math.random()<.78&&i.length?i:e,o=r[Math.random()*r.length|0],a=o.from[Math.random()*o.from.length|0],c=o.to[Math.random()*o.to.length|0],l=o.id+a+c;a===c||t.has(l)||(t.add(l),s.push(O1(o,a,c)))}return s.sort((i,r)=>(_u(i)?0:1)-(_u(r)?0:1)||un[i.cargo].t-un[r.cargo].t),s}function Tu(s,e=Q.def){let t=un[s.cargo];return t.lvl>X.level?`Requer n\xEDvel ${t.lvl}`:t.t>e.cap?`Caminh\xE3o fraco (m\xE1x. ${e.cap} t)`:e.rigid&&t.trailer!=="box"?"Requer cavalo mec\xE2nico":null}var _u=s=>!Tu(s);function Ip(s){let e=Ns[s];!e||!_u(e)||X.job||(X.job=Ii(yn({},e),{phase:"pickup",damage:0,tLeft:e.time}),Ns.splice(s,1),lt.beep(660,.1),lt.beep(990,.12),zo(),ni(`Frete aceito! V\xE1 at\xE9 <b>${Ri[e.from].name}</b>`),Oo=0,Bt())}function Np(){if(!X.job)return;let s=X.job.phase==="deliver"?Math.round(X.job.pay*.25):0;X.money=Math.max(0,X.money-s),Q.detach(),X.job=null,rn.visible=!1,ti.visible=!1,ni(s?`Frete cancelado. Multa de ${En(s)}`:"Frete cancelado"),Bt()}function Ul(){return X.job?gt.depots[X.job.phase==="pickup"?X.job.from:X.job.to]:null}function Dp(s){let e=Q.center({x:0,z:0}),t=s.zone;return Math.abs(e.x-t.x)<t.w/2+3&&Math.abs(e.z-t.z)<t.d/2+3}function Ll(s){let e=X.job;if(!e){ce("progress").classList.add("hidden");return}e.phase==="deliver"&&(e.tLeft-=s);let t=Ul(),n=Dp(t),i=Q.speedKmh<1.5;if(n&&i){Po+=s;let r=2.2;ce("progress").classList.remove("hidden"),ce("progtext").textContent=e.phase==="pickup"?"Carregando\u2026":"Descarregando\u2026",ce("progarc").style.strokeDashoffset=264*(1-Math.min(1,Po/r)),Po>=r&&(Po=0,ce("progress").classList.add("hidden"),e.phase==="pickup"?(Q.attach(un[e.cargo]),e.phase="deliver",e.tLeft=e.time,lt.airBrake(),ni(`Carga engatada: <b>${un[e.cargo].name}</b> (${un[e.cargo].t} t)`),ni(`Entregue em <b>${Ri[e.to].name}</b>`),Oo=0,Bt()):F1())}else Po=0,ce("progress").classList.add("hidden"),n&&!i&&Q.speedKmh<25&&!Ll.warned&&(ni("Pare na \xE1rea marcada"),Ll.warned=!0),n||(Ll.warned=!1)}function F1(){let s=X.job,e=un[s.cargo],t=s.pay,n=Math.round(t*s.damage/100),i=s.tLeft>=0,r=i?Math.round(t*.15):-Math.round(t*.2),o=Math.max(0,t-n+r),a=Math.round(s.xp*(s.damage<5?1.2:1)*(i?1:.7));X.money+=o,X.stats.deliveries++,X.stats.earned+=o,X.stats.tons+=e.t,Q.detach(),X.job=null,rn.visible=!1,ti.visible=!1,lt.airBrake(),lt.beep(880,.12),setTimeout(()=>lt.beep(1320,.18),120);let c=[["Pagamento base",En(t)],[i?"B\xF4nus no prazo (+15%)":"Atraso (\u221220%)",(r>=0?"+":"")+En(r)],[`Avaria da carga (${s.damage.toFixed(0)}%)`,"\u2212"+En(n)],["Experi\xEAncia",`+${a} XP`]],l=z1(a);kr(`<h2>Entrega conclu\xEDda! \u2705</h2><div>${e.icon} ${e.name} \u2022 ${e.t} t \u2192 ${Ri[s.to].name}</div>
    <div class="big">${En(o)}</div>
    <div class="lines">${c.map(h=>`<div><span>${h[0]}</span><b>${h[1]}</b></div>`).join("")}</div>
    <button class="btn" data-act="popjobs">Pr\xF3ximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,l),Ns=wu(),Bt()}function z1(s){X.xp+=s;let e=[];for(;X.level<30&&X.xp>=Rr(X.level);)X.xp-=Rr(X.level),X.level++,e.push(X.level);return e}function B1(s){let e=wo.filter(n=>n.lvl===s),t=Ar.filter(n=>n.level===s);lt.beep(523,.12),setTimeout(()=>lt.beep(659,.12),120),setTimeout(()=>lt.beep(784,.25),240),kr(`<h2>\u2B50 N\xEDvel ${s}!</h2><div>Voc\xEA subiu de n\xEDvel.</div>
    <div class="lines">${e.map(n=>`<div><span>${n.icon} Nova carga: ${n.name}</span><b>${n.t} t</b></div>`).join("")}
    ${t.map(n=>`<div><span>\u{1F69A} Novo caminh\xE3o: ${n.name}</span><b>${En(n.price)}</b></div>`).join("")}
    ${!e.length&&!t.length?"<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>":""}</div>
    <button class="btn" data-act="popclose">Show!</button>`)}function k1(){let s=(h,u)=>{let d=g=>{if(g.preventDefault(),Ce[u]=!0,h.classList.add("on"),lt.init(),h.setPointerCapture&&g.pointerId!==void 0)try{h.setPointerCapture(g.pointerId)}catch(x){}},f=g=>{g.preventDefault(),Ce[u]=!1,h.classList.remove("on")};h.addEventListener("pointerdown",d),h.addEventListener("pointerup",f),h.addEventListener("pointercancel",f),h.addEventListener("lostpointercapture",f),h.addEventListener("contextmenu",g=>g.preventDefault())};s(ce("gas"),"gas"),s(ce("brake"),"brake"),s(ce("left"),"left"),s(ce("right"),"right");let e=ce("wheel"),t=null,n=h=>{let u=e.getBoundingClientRect();return Math.atan2(h.clientX-(u.left+u.width/2),-(h.clientY-(u.top+u.height/2)))};e.addEventListener("pointerdown",h=>{h.preventDefault(),lt.init();let u=e.getBoundingClientRect();Math.hypot(h.clientX-(u.left+u.width/2),h.clientY-(u.top+u.height/2))<u.width*.17?(lt.horn(!0),t={horn:!0,id:h.pointerId}):(t={id:h.pointerId,a0:n(h),w0:Ce.wheel},Ce.wheelHeld=!0);try{e.setPointerCapture(h.pointerId)}catch(f){}}),e.addEventListener("pointermove",h=>{if(!t||t.horn||h.pointerId!==t.id)return;let u=n(h)-t.a0;u=Math.atan2(Math.sin(u),Math.cos(u)),Ce.wheel=ui(t.w0+u*180/Math.PI,-150,150),t.a0=n(h),t.w0=Ce.wheel});let i=()=>{t&&t.horn&&lt.horn(!1),t=null,Ce.wheelHeld=!1};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("lostpointercapture",i),document.querySelectorAll("#gearsel button").forEach(h=>h.addEventListener("pointerdown",u=>{u.preventDefault(),Il(h.dataset.g)}));let r=h=>{Ce.blink=Ce.blink===h?0:h,Ce.blinkArm=!1,Or=0,lt.init(),lt.beep(1500,.03,"square",.06)};ce("blinkL").addEventListener("pointerdown",h=>{h.preventDefault(),r(-1)}),ce("blinkR").addEventListener("pointerdown",h=>{h.preventDefault(),r(1)}),ce("ic-haz").addEventListener("pointerdown",h=>{h.preventDefault(),r(2)}),window.__setBlink=r,ce("ic-hand").addEventListener("pointerdown",h=>{h.preventDefault(),Ce.hand=!Ce.hand,lt.airBrake()}),ce("lightsbtn").addEventListener("pointerdown",h=>{h.preventDefault(),zr=!Q.lightsOn,Q.setLights(zr),lt.beep(1400,.04,"square",.08)}),ce("enginebtn").addEventListener("click",Rp);let o={ArrowUp:"gas",KeyW:"gas",ArrowDown:"brake",KeyS:"brake",Space:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",h=>{lt.init(),o[h.code]&&(Ce[o[h.code]]=!0,h.preventDefault()),h.code==="KeyH"&&lt.horn(!0),h.code==="KeyR"&&!h.repeat&&Il(Ce.gear==="R"?"D":"R"),h.code==="KeyN"&&!h.repeat&&Il("N"),h.code==="KeyE"&&!h.repeat&&Rp(),h.code==="KeyL"&&!h.repeat&&(zr=!Q.lightsOn,Q.setLights(zr)),h.code==="KeyP"&&!h.repeat&&(Ce.hand=!Ce.hand),h.code==="KeyZ"&&!h.repeat&&window.__setBlink(-1),h.code==="KeyX"&&!h.repeat&&window.__setBlink(1),h.code==="KeyC"&&!h.repeat&&Up(),h.code==="KeyM"&&!h.repeat&&yu(),h.code==="Escape"&&Ap()}),window.addEventListener("keyup",h=>{o[h.code]&&(Ce[o[h.code]]=!1),h.code==="KeyH"&&lt.horn(!1)});let a=ce("gl"),c=null;a.addEventListener("pointerdown",h=>{c={x:h.clientX,id:h.pointerId}}),window.addEventListener("pointermove",h=>{!c||h.pointerId!==c.id||(Je.orbit+=(h.clientX-c.x)*.008,c.x=h.clientX,Je.orbitT=1.8)});let l=h=>{c&&h.pointerId===c.id&&(c=null)};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),window.addEventListener("devicemotion",h=>{var g,x;let u=h.accelerationIncludingGravity;if(!u||u.y==null)return;let d=(x=(g=screen.orientation&&screen.orientation.angle)!=null?g:window.orientation)!=null?x:90,f=d===90?1:d===270||d===-90?-1:0;Ce.tilt=ui(f?-u.y*f/4.5:-u.x/4.5,-1,1)}),window.addEventListener("resize",kp),document.addEventListener("visibilitychange",()=>{document.hidden?(lt.suspend(),Bt()):(lt.resume(),Dl=performance.now())}),window.addEventListener("pagehide",Bt),window.onAndroidBack=()=>Ap()}function Ap(){return ce("bigmap").classList.contains("hidden")?ce("popup").classList.contains("hidden")?ce("modal").classList.contains("hidden")?Dt==="drive"?(No("settings"),!0):(Bt(),!1):(zo(),!0):(bu(),!0):(ce("bigmap").classList.add("hidden"),!0)}function Il(s){Ce.gear=s,document.querySelectorAll("#gearsel button").forEach(e=>e.classList.toggle("on",e.dataset.g===s)),lt.beep(s==="R"?500:700,.05,"square",.06)}var Br=0,Or=0;function Rp(){Q.engineOn||Br>0||(lt.init(),Br=1.1,ce("enginebtn").classList.add("starting"),lt.starter())}function vu(s){let e=(i,r,o,a)=>i+ui(r-i,-a*s,o*s),t=Dt==="drive";Br>0&&(Br-=s,Br<=0&&(Q.engineOn=!0,ce("enginebtn").classList.add("hidden"),ce("enginebtn").classList.remove("starting"))),vn.throttle=e(vn.throttle,t&&Ce.gas?1:0,2.5,6),vn.brake=e(vn.brake,t&&Ce.brake?1:0,6,8),vn.gear=X.settings.gearbox==="auto"?"auto":Ce.gear,vn.handbrake=Ce.hand,t&&Ce.gas&&!Q.engineOn&&Br<=0&&!vu.warned&&(ni("Ligue o motor primeiro"),vu.warned=!0),Ce.wheelHeld||(Ce.wheel*=Math.max(0,1-s*7));let n=0;if(X.settings.steer==="tilt"?(n=Math.abs(Ce.tilt)<.06?0:Ce.tilt,Ce.wheel=-n*150):X.settings.steer==="wheel"&&(n=-Ce.wheel/150),n+=(Ce.left?1:0)-(Ce.right?1:0),n=t?ui(n,-1,1):0,vn.steer=X.settings.steer==="wheel"&&Ce.wheelHeld?n:e(vn.steer,n,2.4,4),Math.abs(vn.steer)<.01&&n===0&&(vn.steer=0),ce("wheel").style.transform=`rotate(${(-vn.steer*150).toFixed(1)}deg)`,(Ce.blink===-1||Ce.blink===1)&&(vn.steer*-Ce.blink>.3?Ce.blinkArm=!0:Ce.blinkArm&&Math.abs(vn.steer)<.06&&(Ce.blink=0,Ce.blinkArm=!1)),Ce.blink){let i=Or%.8<.4;Or+=s;let r=Or%.8<.4;r!==i&&lt.beep(r?1300:900,.025,"square",.05),Q.setBlink(Ce.blink,r),ce("blinkL").classList.toggle("on",r&&(Ce.blink===-1||Ce.blink===2)),ce("blinkR").classList.toggle("on",r&&(Ce.blink===1||Ce.blink===2)),ce("ic-bl").classList.toggle("on",r&&(Ce.blink===-1||Ce.blink===2)),ce("ic-br").classList.toggle("on",r&&(Ce.blink===1||Ce.blink===2)),ce("ic-haz").classList.toggle("on",Ce.blink===2)}else if(Or!==0){Or=0,Q.setBlink(0,!1);for(let i of["blinkL","blinkR","ic-bl","ic-br","ic-haz"])ce(i).classList.remove("on")}}function Up(){Je.mode=(Je.mode+1)%3,X.settings.camera=Je.mode,ni(["C\xE2mera: Persegui\xE7\xE3o","C\xE2mera: A\xE9rea","C\xE2mera: Cabine"][Je.mode],1200)}var fu={x:0,z:0},Fo={x:0,z:0};function Au(s,e=!1){Math.hypot(Je.pos.x-Q.x,Je.pos.z-Q.z)>150&&(e=!0);let t=Q.model;Je.orbitT>0?Je.orbitT-=s:Je.orbit*=Math.max(0,1-s*2.5);let n=Q.h;Q.v<-.5&&Je.mode!==2&&(n=Q.h);let i=e?1:1-Math.exp(-s*(Je.mode===2?12:2.6)),r=n+Je.orbit-Je.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),Je.yaw+=r*i;let o=Math.sin(Q.h),a=Math.cos(Q.h);if(Je.mode===2){let c=Q.x+o*(t.zf-.7)-Math.cos(Q.h)*.45,l=Q.z+a*(t.zf-.7)+Math.sin(Q.h)*.45;$t.position.set(c,Q.y+(Q.def.id==="urbano"?2.3:2.75),l);let h=Math.sin(Je.yaw),u=Math.cos(Je.yaw);$t.lookAt(c+h*20,Q.y+2+Math.sin(Q.pitch)*20,l+u*20),$t.fov=70}else{let c=Q.trailer?Q.trailer.Lt:0,l=t.zf-t.rearEnd,h=(Je.mode===0?3.5+l:12+l*1.2)+c*(Je.mode===0?.75:1.1),u=(Je.mode===0?2.2+l*.3:9+l*.7)+c*(Je.mode===0?.18:.4),d=Q.x+o*t.wb*.5-(Q.trailer?Math.sin(Q.th)*c*.25:0),f=Q.z+a*t.wb*.5-(Q.trailer?Math.cos(Q.th)*c*.25:0),g=Math.sin(Je.yaw),x=Math.cos(Je.yaw);for(let y=0;y<6&&(fu.x=d-g*h,fu.z=f-x*h,!(gt.resolveCircle(fu,.6,Fo,!0)<=0||u>30));y++)h*=.8;let p=d-g*h,m=f-x*h,v=e?1:1-Math.exp(-s*8);Je.pos.x+=(p-Je.pos.x)*v,Je.pos.z+=(m-Je.pos.z)*v;let _=Q.y+u;Je.pos.y+=(_-Je.pos.y)*v,$t.position.copy(Je.pos),$t.lookAt(d,Q.y+(Je.mode===1?1.5:1.3),f),$t.fov=58+Math.min(8,Q.speedKmh*.08)}$t.updateProjectionMatrix(),Lt.shadows&&(sn.target.position.set(Q.x,0,Q.z),sn.position.set(Q.x+150,170,Q.z+95)),ss.position.copy($t.position)}var St=null;function H1(){let s=()=>new Path2D;St={blocks:{},lots:s(),roads:s(),hw:s(),river:s(),fields:s(),hills:s()};let e={downtown:"#8b95a3",residential:"#a8a294",town:"#b4ab98",park:"#4f8a3a",industrial:"#8d8473",port:"#7b8790"};for(let n of jn){for(let i=0;i<n.nx;i++)for(let r=0;r<n.nz;r++){let o=dl(n,i,r);(St.blocks[e[o]]=St.blocks[e[o]]||s()).rect(n.x0+i*140+10,n.z0+r*140+10,120,120)}for(let i=0;i<=n.nx;i++)St.roads.moveTo(n.x0+i*140,n.z0),St.roads.lineTo(n.x0+i*140,Tr(n));for(let i=0;i<=n.nz;i++)St.roads.moveTo(n.x0,n.z0+i*140),St.roads.lineTo(As(n),n.z0+i*140)}for(let n of Qn){let[i,r,o,a]=gt.depots[n.id].lot;St.lots.rect(i,r,o-i,a-r)}for(let n of gt.hws){St.hw.moveTo(n.x[0],n.z[0]);for(let i=1;i<n.n;i+=2)St.hw.lineTo(n.x[i],n.z[i]);St.hw.lineTo(n.x[n.n-1],n.z[n.n-1])}let t=gt.river;St.river.moveTo(t.x[0],t.z[0]);for(let n=1;n<t.n;n++)St.river.lineTo(t.x[n],t.z[n]);for(let n of gt.fields)St.fields.rect(n.x0,n.z0,n.x1-n.x0,n.z1-n.z0);for(let n of gt.hills)St.hills.moveTo(n.x+n.r*.85,n.z),St.hills.arc(n.x,n.z,n.r*.85,0,Math.PI*2)}function Op(s,e){s.fillStyle="#3d5a34",s.fillRect(Rt.x0-3e3,Rt.z0-3e3,12e3,12e3),s.fillStyle="#34502d",s.fill(St.hills),s.fillStyle="#9a9356",s.fill(St.fields),s.fillStyle="#2d6f93",s.fillRect(Rt.x0-3e3,1790,12e3,4e3),s.lineCap="round",s.lineJoin="round",s.strokeStyle="#2d6f93",s.lineWidth=Math.max(Ai,3/e),s.stroke(St.river);for(let t in St.blocks)s.fillStyle=t,s.fill(St.blocks[t]);s.fillStyle="#cfc9bd",s.fill(St.lots),s.strokeStyle="#26282c",s.lineWidth=Math.max(20,3/e),s.lineCap="square",s.stroke(St.roads),s.lineCap="round",s.strokeStyle="#1d1f22",s.lineWidth=Math.max(9*2+4,4.5/e),s.stroke(St.hw),s.strokeStyle="#4a4d52",s.lineWidth=Math.max(9*2,3/e),s.stroke(St.hw)}function Fp(s,e,t,n,i){s.fillStyle=n,s.strokeStyle="#fff",s.lineWidth=i*.3,s.beginPath(),s.arc(e,t,i,0,7),s.fill(),s.stroke()}function G1(){let s=ce("minimap"),e=s.getContext("2d"),t=s.width,n=s.height,i=.75;e.setTransform(1,0,0,1,0,0),e.translate(t/2,n*.62),e.rotate(Math.PI+Q.h),e.scale(i,i),e.translate(-Q.x,-Q.z),Op(e,i),ei&&X.job&&(e.strokeStyle=Gr(),e.lineWidth=8/i,e.beginPath(),ei.path.forEach((o,a)=>a?e.lineTo(o.x,o.z):e.moveTo(o.x,o.z)),e.stroke());let r=Ul();for(let o of Qn){let a=gt.depots[o.id];Fp(e,a.zone.x,a.zone.z,r===a?Gr():o.id==="garagem"?"#2f6fde":"rgba(30,30,30,0.85)",(r===a?9:6)/i)}e.fillStyle="rgba(255,255,255,0.7)";for(let o of Is.cars)o.mode&&e.fillRect(o.x-2/i,o.z-2/i,4/i,4/i);e.setTransform(1,0,0,1,0,0),e.translate(t/2,n*.62),e.fillStyle="#3ee07a",e.strokeStyle="#0b1a10",e.lineWidth=3,e.beginPath(),e.moveTo(0,-14),e.lineTo(10,11),e.lineTo(0,5),e.lineTo(-10,11),e.closePath(),e.fill(),e.stroke(),e.setTransform(1,0,0,1,0,0)}function yu(){let s=ce("bigmap"),e=ce("bigmapc");s.classList.remove("hidden");let t=Math.min(2,window.devicePixelRatio||1),n=window.innerWidth*.96,i=window.innerHeight*.92,r=Rt.x1-Rt.x0,o=Rt.z1-Rt.z0,a=Math.min(n/r,i/o);e.width=r*a*t,e.height=o*a*t,e.style.width=r*a+"px",e.style.height=o*a+"px";let c=e.getContext("2d"),l=a*t;c.setTransform(l,0,0,l,-Rt.x0*l,-Rt.z0*l),Op(c,l),ei&&X.job&&(c.strokeStyle=Gr(),c.lineWidth=5/l,c.beginPath(),ei.path.forEach((d,f)=>f?c.lineTo(d.x,d.z):c.moveTo(d.x,d.z)),c.stroke());let h=Ul();c.textAlign="center";let u=(d,f,g,x,p="#fff")=>{c.font=`700 ${x/l}px sans-serif`,c.lineWidth=3/l,c.strokeStyle="rgba(0,0,0,0.85)",c.strokeText(d,f,g),c.fillStyle=p,c.fillText(d,f,g)};for(let d of jn)u(d.name.toUpperCase(),(d.x0+As(d))/2,d.z0-40,15*t,"#ffe08a");for(let d of gt.hws){let f=d.n/2|0;u(d.id,d.x[f],d.z[f]-20,10*t,"#cfe8ff")}for(let d of Qn){let f=gt.depots[d.id];Fp(c,f.zone.x,f.zone.z,h===f?Gr():d.id==="garagem"?"#2f6fde":"#222",6*t/l),u(d.name,f.zone.x,f.zone.z-14*t/l,10*t)}c.save(),c.translate(Q.x,Q.z),c.rotate(Math.PI+Q.h),c.scale(t/l,t/l),c.fillStyle="#3ee07a",c.strokeStyle="#000",c.lineWidth=2,c.beginPath(),c.moveTo(0,-12),c.lineTo(9,10),c.lineTo(0,5),c.lineTo(-9,10),c.closePath(),c.fill(),c.stroke(),c.restore()}var V1="jobs";function W1(){document.body.addEventListener("click",s=>{let e=s.target.closest("[data-act],[data-tab]");if(!e)return;if(lt.init(),e.dataset.tab){In(e.dataset.tab);return}let t=e.dataset.act,n=e.dataset.arg;if(t==="jobs"||t==="garage"||t==="settings")No(t);else if(t==="menu"||t==="pause")No("settings");else if(t==="rename"){let i=prompt("Nome do motorista:",X.name);i&&i.trim()&&(X.name=i.trim().slice(0,18),Bt(),Bo())}else t==="map"?yu():t==="gauge"?(X.settings.gauge=n,Bt(),In("settings")):t==="accent"?(X.settings.accent=n,pu(),Bt(),In("settings")):t==="hudsize"?(X.settings.hud=n,pu(),Bt(),In("settings")):t==="gearbox"?(X.settings.gearbox=n,ce("gearsel").classList.toggle("hidden",n==="auto"),Bt(),In("settings")):t==="timemode"?(X.settings.time=n,Bt(),Nl(X.clock),In("settings")):t==="tomenu"?(zo(),Bt(),Bo()):t==="camera"?Up():t==="close"?zo():t==="accept"?Ip(+n):t==="refresh"?(Ns=wu(),In("jobs")):t==="cancel"?(Np(),In("jobs")):t==="buy"?$1(n):t==="use"?zp(n):t==="popclose"?bu():t==="popjobs"?(bu(),No("jobs")):t==="closemap"?ce("bigmap").classList.add("hidden"):t==="quality"?(X.settings.quality=n,Bt(),In("settings"),ni("Reiniciando para aplicar\u2026"),setTimeout(()=>location.reload(),500)):t==="steermode"?(X.settings.steer=n,Cp(),Bt(),In("settings")):t==="fps"?(X.settings.fps=!X.settings.fps,ce("fps").classList.toggle("hidden",!X.settings.fps),Bt(),In("settings")):t==="reset"?confirm("Apagar todo o progresso?")&&(localStorage.removeItem(Eu),location.reload()):t==="rescue"&&(J1(),zo())}),ce("mapwrap").addEventListener("click",yu),ce("fps").classList.toggle("hidden",!X.settings.fps),ce("tabbody").addEventListener("input",s=>{s.target.id==="vol"&&(X.settings.volume=+s.target.value,lt.setVolume(X.settings.volume),Bt())}),Cp(),pu(),Il("D"),ce("gearsel").classList.toggle("hidden",X.settings.gearbox==="auto"),ce("play").addEventListener("click",()=>{lt.init(),ce("title").classList.add("hidden"),ce("hud").classList.remove("hidden"),Dt="drive",Q.engineOn||ce("enginebtn").classList.remove("hidden"),Au(0,!0),kp(),Mu=3;try{document.documentElement.requestFullscreen&&!window.AndroidBridge&&document.documentElement.requestFullscreen().catch(()=>{})}catch(s){}!X.job&&X.stats.deliveries===0&&setTimeout(()=>No("jobs"),400)})}function Cp(){let s=ce("wheelwrap");s.classList.toggle("buttons",X.settings.steer==="buttons"),s.classList.toggle("tilt",X.settings.steer==="tilt")}function Bo(){Dt="title",Je.tt=0,ce("hud").classList.add("hidden"),ce("title").classList.remove("hidden"),ce("pname").textContent=X.name,ce("plvl").textContent=`N\xEDvel ${X.level} \u2022 ${X.xp}/${Rr(X.level)} XP`,ce("tmoney").textContent=En(X.money);let s=Q.def;ce("tiname").textContent=s.name,ce("tispecs").innerHTML=`<span>${s.hp} cv</span><span>${s.cap} t</span><span>${s.vmax} km/h</span><span>${s.rigid?"R\xEDgido":"Cavalo "+s.cfg}</span>`;let e=X.job;ce("tjob").innerHTML=e?`${un[e.cargo].icon} ${un[e.cargo].name} \u2192 <b>${Ri[e.phase==="pickup"?e.from:e.to].name}</b>`:"Nenhum frete ativo",ce("tstats").innerHTML=`<div><b>${X.stats.deliveries}</b><small>entregas</small></div><div><b>${X.stats.km.toFixed(0)}</b><small>km</small></div><div><b>${X.stats.tons.toFixed(0)}</b><small>toneladas</small></div><div><b>${X.owned.length}</b><small>caminh\xF5es</small></div>`}function No(s){Dt=Dt==="title"?"title":"menu",ce("modal").classList.remove("hidden"),Ce.gas=Ce.brake=Ce.left=Ce.right=!1,document.querySelectorAll(".pad").forEach(e=>e.classList.remove("on")),In(s)}function zo(){ce("modal").classList.add("hidden"),Dt==="title"&&Bo(),Dt==="menu"&&(Dt="drive")}function kr(s,e=[]){ce("popcard").innerHTML=s,ce("popup").classList.remove("hidden"),Dt=Dt==="drive"?"menu":Dt,kr.queue=e}function bu(){ce("popup").classList.add("hidden"),ce("modal").classList.contains("hidden")&&(Dt="drive");let s=kr.queue||[];if(s.length){let e=s.shift();kr.queue=s,B1(e),kr.queue=s}}function In(s){V1=s,document.querySelectorAll(".tabs [data-tab]").forEach(t=>t.classList.toggle("on",t.dataset.tab===s));let e=ce("tabbody");s==="jobs"?e.innerHTML=q1():s==="garage"?e.innerHTML=Y1():s==="profile"?e.innerHTML=Z1():e.innerHTML=K1(),e.scrollTop=0}function X1(s,e){let t=un[s.cargo],n=Tu(s),i=[t.fragile?'<span class="chip tag">Fr\xE1gil</span>':"",t.hazard?'<span class="chip tag">Perigosa</span>':"",t.trailer==="lowboy"?'<span class="chip tag">Indivis\xEDvel</span>':""].join("");return`<div class="card ${n?"locked":""}">
    <div class="ic">${t.icon}</div><h3>${t.name}</h3><div class="t">${t.t} toneladas</div>
    <div class="route">\u{1F4CD} ${Ri[s.from].name} \u2192 \u{1F3C1} ${Ri[s.to].name}</div>
    <div class="row"><span class="chip pay">${En(s.pay)}</span><span class="chip xp">+${s.xp} XP</span><span class="chip">${(s.dist/1e3).toFixed(1)} km</span><span class="chip">\u23F1 ${Math.ceil(s.time/60)} min</span>${i}</div>
    ${n?`<div class="row"><span class="chip warn">\u{1F512} ${n}</span></div>`:`<button class="btn" data-act="accept" data-arg="${e}" ${X.job?"disabled":""}>Aceitar frete</button>`}
  </div>`}function q1(){let s="";if(X.job){let e=X.job,t=un[e.cargo];s=`<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${t.icon}</div><h3>Frete ativo: ${t.name} (${t.t} t)</h3>
      <div class="route">${e.phase==="pickup"?"Coletar em":"Entregar em"} <b>${Ri[e.phase==="pickup"?e.from:e.to].name}</b> \u2022 Avaria ${e.damage.toFixed(0)}% \u2022 Pagamento ${En(e.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${e.phase==="deliver"?" (multa 25%)":""}</button></div>`}return`${s}<div class="tbar"><div class="grow">Caminh\xE3o atual: <b>${Q.def.name}</b> \u2014 at\xE9 <b>${Q.def.cap} t</b> \u2022 N\xEDvel ${X.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">\u{1F504} Atualizar</button></div>
    <div class="grid">${Ns.map(X1).join("")}</div>`}function Y1(){return`<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${En(X.money)}</b> \u2022 A for\xE7a do caminh\xE3o define as cargas que ele consegue puxar.</div></div><div class="grid">`+Ar.map(t=>{let n=X.owned.includes(t.id),i=X.truck===t.id,r=t.level>X.level,o;i?o='<button class="btn alt" disabled>Em uso</button>':n?o=`<button class="btn" data-act="use" data-arg="${t.id}">Usar</button>`:r?o=`<span class="chip warn">\u{1F512} N\xEDvel ${t.level}</span>`:o=`<button class="btn" data-act="buy" data-arg="${t.id}" ${X.money<t.price?"disabled":""}>Comprar ${En(t.price)}</button>`;let a="#"+new de(t.color).getHexString();return`<div class="card ${r&&!n?"locked":""}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${a}, #1b2230)">${t.rigid?"\u{1F69A}":"\u{1F69B}"}</div>
        <h3>${t.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${t.desc}</div>
        <div class="stat"><span>Pot\xEAncia</span><b>${t.hp} cv</b></div><div class="meter"><i style="width:${t.hp/750*100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${t.cap} t</b></div><div class="meter"><i style="width:${t.cap/90*100}%"></i></div>
        <div class="stat"><span>Velocidade m\xE1x.</span><b>${t.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${t.rigid?"R\xEDgido (ba\xFA)":`Cavalo mec\xE2nico ${t.cfg}`}</b></div>
        ${o}</div>`}).join("")+"</div>"}function $1(s){let e=Eo[s];!e||X.owned.includes(s)||X.money<e.price||e.level>X.level||(X.money-=e.price,X.owned.push(s),lt.beep(784,.1),lt.beep(1046,.15),ni(`Voc\xEA comprou o <b>${e.name}</b>!`),zp(s))}function zp(s){let e=Eo[s];if(X.owned.includes(s)){if(X.job&&X.job.phase==="deliver"){ni("Conclua ou cancele o frete antes de trocar");return}X.truck=s,Q.setTruck(e),X.job&&Tu(X.job,e)&&Np(),Bt(),In("garage"),Dt==="title"&&Bo()}}function Z1(){let s=X.stats,e=Rr(X.level),t=wo.filter(n=>n.lvl>X.level).slice(0,4);return`<div class="grid">
    <div class="card"><h3>\u2B50 N\xEDvel ${X.level}${X.level>=30?" (m\xE1ximo)":""}</h3><div class="meter" style="margin-top:8px"><i style="width:${X.xp/e*100}%"></i></div>
      <div class="stat"><span>Experi\xEAncia</span><b>${X.xp} / ${e} XP</b></div><div class="stat"><span>Saldo</span><b>${En(X.money)}</b></div>
      <div class="stat"><span>Caminh\xF5es</span><b>${X.owned.length} / ${Ar.length}</b></div></div>
    <div class="card"><h3>\u{1F4CA} Estat\xEDsticas</h3>
      <div class="stat"><span>Entregas</span><b>${s.deliveries}</b></div><div class="stat"><span>Dist\xE2ncia</span><b>${s.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${s.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${En(s.earned)}</b></div>
      <div class="stat"><span>Colis\xF5es</span><b>${s.crashes}</b></div></div>
    <div class="card"><h3>\u{1F513} Pr\xF3ximas cargas</h3>${t.map(n=>`<div class="stat"><span>${n.icon} ${n.name} (${n.t} t)</span><b>N\xEDvel ${n.lvl}</b></div>`).join("")||'<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`}function K1(){let s=(e,t,n)=>`<div class="seg">${n.map(([i,r])=>`<button data-act="${e}" data-arg="${i}" class="${t===i?"on":""}">${r}</button>`).join("")}</div>`;return`<div class="set"><div><b>Qualidade gr\xE1fica</b><br><small style="opacity:.7">Atual: ${Li==="low"?"Leve":Li==="medium"?"M\xE9dio":"Ultra"} \u2022 resolu\xE7\xE3o din\xE2mica ativa</small></div>
      ${s("quality",X.settings.quality,[["auto","Auto"],["low","Leve"],["medium","M\xE9dio"],["high","Ultra"]])}</div>
    <div class="set"><div><b>Dire\xE7\xE3o</b><br><small style="opacity:.7">Volante, setas ou inclina\xE7\xE3o do celular</small></div>
      ${s("steermode",X.settings.steer,[["wheel","Volante"],["buttons","Setas"],["tilt","Inclina\xE7\xE3o"]])}</div>
    <div class="set"><div><b>C\xE2mbio</b><br><small style="opacity:.7">Manual D/N/R ou autom\xE1tico (segurar freio parado = r\xE9)</small></div>
      ${s("gearbox",X.settings.gearbox,[["manual","D / N / R"],["auto","Autom\xE1tico"]])}</div>
    <div class="set"><div><b>Hor\xE1rio</b><br><small style="opacity:.7">Ciclo de dia e noite com far\xF3is e ilumina\xE7\xE3o urbana</small></div>
      ${s("timemode",X.settings.time,[["cycle","Ciclo"],["day","Dia"],["dusk","Entardecer"],["night","Noite"]])}</div>
    <div class="set"><div><b>Veloc\xEDmetro</b><br><small style="opacity:.7">Estilo dos mostradores do painel</small></div>
      ${s("gauge",X.settings.gauge,[["analog","Anal\xF3gico"],["digital","Digital"],["sport","Esportivo"],["classic","Cl\xE1ssico"]])}</div>
    <div class="set"><div><b>Cor do painel</b><br><small style="opacity:.7">Cor de destaque da interface</small></div>
      ${s("accent",X.settings.accent,[["amber","\xC2mbar"],["blue","Azul"],["green","Verde"],["red","Vermelho"],["purple","Roxo"]])}</div>
    <div class="set"><div><b>Tamanho dos controles</b></div>
      ${s("hudsize",X.settings.hud,[["small","Pequeno"],["normal","Normal"],["large","Grande"]])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${X.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${s("fps",X.settings.fps?1:0,[[1,"Sim"],[0,"N\xE3o"]])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminh\xE3o de volta para a rua mais pr\xF3xima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">Z/X pisca-pisca \u2022 WASD/setas \u2022 Espa\xE7o freio \u2022 E motor \u2022 R r\xE9 \u2022 N neutro \u2022 P freio de m\xE3o \u2022 L far\xF3is \u2022 H buzina \u2022 C c\xE2mera \u2022 M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao menu</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`}function J1(){let s=gt.hw(Q.x,Q.z);if(s&&!gt.inArea(Q.x,Q.z,0)){let e=s.o;Q.place(s.x-e.dz[s.i]*3.5,s.z+e.dx[s.i]*3.5,Math.atan2(e.dx[s.i],e.dz[s.i]))}else{let e={x:Q.x,z:Q.z};for(let t=0;t<40&&!(gt.resolveCircle(e,2.5,Fo)<=0);t++)e.x+=Fo.x*1.2+(Math.random()-.5),e.z+=Fo.z*1.2+(Math.random()-.5);Q.place(e.x,e.z,Q.h)}Au(0,!0)}var Pp={amber:"#f5a623",blue:"#2f8cff",green:"#22b573",red:"#e3243b",purple:"#9b5cff"},Gr=()=>Pp[X.settings.accent]||Pp.amber;function pu(){let s=Gr();document.documentElement.style.setProperty("--red",s),document.documentElement.style.setProperty("--red2",s),document.documentElement.style.setProperty("--hud",{small:.82,normal:1,large:1.18}[X.settings.hud]||1)}function ni(s,e=2600){let t=document.createElement("div");for(t.innerHTML=s,ce("toast").appendChild(t);ce("toast").children.length>3;)ce("toast").firstChild.remove();setTimeout(()=>t.remove(),e)}var mu=0;function Lp(s,e,t,n,i,r,o,a){let c=ce(s),l=c.getContext("2d"),h=c.width,u=h/2,d=h*.46,f=X.settings.gauge,g=Gr();l.clearRect(0,0,h,h);let x=Math.PI*.75,p=Math.PI*2.25,m=E=>x+(p-x)*ui(E/t,0,1);if(l.textAlign="center",l.textBaseline="middle",f==="digital"){l.fillStyle="rgba(6,10,16,0.88)",l.beginPath(),l.arc(u,u,d,0,7),l.fill(),l.lineWidth=3,l.strokeStyle=g,l.stroke();let E=24,T=ui(e/t,0,1);for(let A=0;A<E;A++){let z=x+(p-x)*(A+.5)/E;l.strokeStyle=A/E<T?a&&A/E*t>=a?"#ff3b4e":g:"rgba(255,255,255,0.1)",l.lineWidth=h*.05,l.beginPath(),l.arc(u,u,d*.8,z-.05,z+.05),l.stroke()}l.fillStyle="#e8fff8",l.font=`700 ${h*.24}px monospace`,l.fillText(r,u,u),l.font=`600 ${h*.06}px sans-serif`,l.fillStyle=g,l.fillText(o,u,u+h*.17);return}if(f==="sport"){l.fillStyle="rgba(10,12,16,0.85)",l.beginPath(),l.arc(u,u,d,0,7),l.fill(),l.lineCap="round",l.lineWidth=h*.09,l.strokeStyle="rgba(255,255,255,0.08)",l.beginPath(),l.arc(u,u,d*.78,x,p),l.stroke();let E=l.createLinearGradient(0,h,h,0);E.addColorStop(0,g),E.addColorStop(1,"#ff3b4e"),l.strokeStyle=E,l.beginPath(),l.arc(u,u,d*.78,x,m(e)),l.stroke(),l.lineCap="butt",l.fillStyle="#fff",l.font=`italic 900 ${h*.22}px sans-serif`,l.fillText(r,u,u-h*.02),l.font=`italic 700 ${h*.06}px sans-serif`,l.fillStyle="#9aa7b4",l.fillText(o,u,u+h*.15);return}let v=f==="classic";l.beginPath(),l.arc(u,u,d,0,7);let _=l.createRadialGradient(u,u,d*.2,u,u,d);v?(_.addColorStop(0,"#f4efe2"),_.addColorStop(1,"#d9d0bb")):(_.addColorStop(0,"rgba(30,34,40,0.95)"),_.addColorStop(1,"rgba(8,10,14,0.92)")),l.fillStyle=_,l.fill(),l.lineWidth=h*.035,l.strokeStyle=v?"#b8bcc0":g,l.stroke(),a&&(l.beginPath(),l.arc(u,u,d*.86,m(a),p),l.lineWidth=h*.03,l.strokeStyle="rgba(227,36,59,.85)",l.stroke());let y=v?"#1b1b1b":"#fff";l.fillStyle=y,l.strokeStyle=y,l.font=`${v?"":"italic "}800 ${h*.07}px ${v?"serif":"sans-serif"}`;for(let E=0;E<=t;E+=n/2){let T=m(E),A=E%n===0;l.lineWidth=A?3:1.5,l.beginPath(),l.moveTo(u+Math.cos(T)*d*.9,u+Math.sin(T)*d*.9),l.lineTo(u+Math.cos(T)*d*(A?.76:.82),u+Math.sin(T)*d*(A?.76:.82)),l.stroke(),A&&l.fillText(String(i(E)),u+Math.cos(T)*d*.6,u+Math.sin(T)*d*.6)}let R=m(e);l.strokeStyle=v?"#c0392b":g,l.lineWidth=h*.025,l.lineCap="round",l.beginPath(),l.moveTo(u-Math.cos(R)*d*.1,u-Math.sin(R)*d*.1),l.lineTo(u+Math.cos(R)*d*.86,u+Math.sin(R)*d*.86),l.stroke(),l.lineCap="butt",l.beginPath(),l.arc(u,u,d*.3,0,7),l.fillStyle=v?"#2b2b2b":"#0b0d11",l.fill(),l.fillStyle="#fff",l.font=`italic 900 ${h*.15}px sans-serif`,l.fillText(r,u,u-h*.01),l.font=`italic 700 ${h*.055}px sans-serif`,l.fillStyle=v?"#555":"#9aa7b4",l.fillText(o,u,u+h*.1+(v?h*.12:0))}function j1(s){mu-=s;let e=Q.speedKmh;Lp("spdg",e,120,20,r=>r,String(Math.round(e)),"km/h",100);let t=Q.rpm*2500;if(Lp("rpmg",t/100,25,5,r=>r,Q.engineOn?Q.gear||"N":"OFF","x100 rpm",21),mu>0)return;mu=.2,ce("lvl").textContent="Nv "+X.level,ce("money").textContent=En(X.money);let n=Rr(X.level);ce("xpbar").style.width=(X.level>=30?100:X.xp/n*100)+"%",ce("ic-load").textContent=`${(Q.mass/1e3).toFixed(1)} t`,ce("ic-light").classList.toggle("on",Q.lightsOn),ce("lightsbtn").classList.toggle("on",Q.lightsOn),ce("ic-hand").classList.toggle("on",Ce.hand);let i=X.job;if(i){let r=un[i.cargo],o=ei?ei.len:0;ce("jobtitle").textContent=`${r.icon} ${r.name} \u2022 ${r.t} t`;let a=Ri[i.phase==="pickup"?i.from:i.to].name,c="";if(i.phase==="deliver"){let l=Math.abs(i.tLeft),h=Math.floor(l/60),u=Math.floor(l%60);c=` \u2022 <span class="${i.tLeft<0?"late":""}">\u23F1 ${i.tLeft<0?"-":""}${h}:${String(u).padStart(2,"0")}</span>`}ce("jobsub").innerHTML=`${i.phase==="pickup"?"Coletar":"Entregar"}: <b>${a}</b> \u2022 ${(o/1e3).toFixed(1)} km${c}`,ce("dist").textContent=o>1e3?(o/1e3).toFixed(1)+" km":Math.round(o)+" m",ce("ic-dmg").classList.toggle("hidden",i.phase!=="deliver"),ce("dmg").textContent=i.damage.toFixed(0)+"%"}else ce("jobtitle").textContent="Sem frete ativo",ce("jobsub").innerHTML="Toque em \u{1F4CB} para escolher uma carga",ce("dist").textContent="",ce("ic-dmg").classList.add("hidden")}var Mu=0,Dl=0,Hr=0,Cl=0,Pl=0,gu=0,Ur=0;function Bp(s){if(requestAnimationFrame(Bp),document.hidden)return;let e=(s-Dl)/1e3;if(Dl=s,!(e>0))return;if(e=Math.min(e,.05),Hr+=e,Cl++,Pl+=e,Pl>=1.5){let n=Cl/Pl;tb(n),X.settings.fps&&(ce("fps").textContent=`${n.toFixed(0)} FPS \u2022 ${Li} \u2022 ${Pi.toFixed(2)}x \u2022 ${kt.info.render.calls} dc`),Cl=0,Pl=0}if(vu(e),Dt==="title"){Ur-=e,Ur<=0&&(Ur=.5,Nl(X.clock)),Is.obstacles(du),Is.update(e,Q,Q._cs||[]),gt.update(e,Hr),P1(e),lt.engine(0,0,!1),kt.render(It,$t);return}if(X.settings.time==="cycle"&&Dt==="drive"&&(X.clock=(X.clock+e/50)%24),Ur-=e,Ur<=0&&(Ur=.5,Nl(X.clock)),Dt==="drive"){Is.obstacles(du);let n=2;for(let r=0;r<n;r++)Q.update(e/n,vn,gt,du);Q.lastImpact>0&&Q1(Q.lastImpact),X.stats.km+=Math.abs(Q.v)*e/1e3;let i=Q._cs||[];Is.update(e,Q,i),Dt==="drive"&&Ll(e)}gt.update(e,Hr),eb(e),Au(e),lt.engine(Q.rpm,vn.throttle,Q.engineOn&&Dt==="drive"),j1(e),Cl&1||G1(),gu+=e,gu>8&&(gu=0,Bt()),kt.render(It,$t),Mu>0&&--Mu===0&&It.traverse(n=>{n.material&&[].concat(n.material).forEach(i=>{i.needsUpdate=!0})})}function Q1(s){if(X.stats.crashes++,lt.crash(s),navigator.vibrate)try{navigator.vibrate(Math.min(120,s*4))}catch(e){}if(X.job&&X.job.phase==="deliver"){let e=un[X.job.cargo],t=Math.min(30,s*(e.fragile?.55:.3));X.job.damage=Math.min(100,X.job.damage+t),ni(`\u{1F4A5} Batida! Carga avariada +${t.toFixed(0)}%`,1800)}}function eb(s){let e=Ul();if(!e){rn.visible=!1,ti.visible=!1;return}Oo-=s,Oo<=0&&(ei=uu(Q.x,Q.z,e),Oo=.5),rn.visible=!0,rn.position.set(e.zone.x,0,e.zone.z),rn.zone.scale.set(e.zone.w,e.zone.d,1);let t=Dp(e);rn.zone.material.color.setHex(t?4120698:16761856),rn.cone.position.y=7+Math.sin(Hr*3)*.8,rn.cone.rotation.y=Hr*1.5;let n=null;if(ei)for(let i=1;i<ei.path.length;i++){let r=ei.path[i];if(Math.hypot(r.x-Q.x,r.z-Q.z)>22||i===ei.path.length-1){n=r;break}}if(n&&Je.mode!==2){ti.visible=!0;let i=Math.sin(Q.h),r=Math.cos(Q.h);ti.position.set(Q.x+i*Q.model.zf*.5,(Q.def.id==="urbano"?4.2:5.4)+Math.sin(Hr*4)*.12,Q.z+r*Q.model.zf*.5),ti.rotation.y=Math.atan2(n.x-Q.x,n.z-Q.z)}else ti.visible=!1}function tb(s){let e=window.devicePixelRatio||1,t=Math.min(e,Lt.pr),n=Pi;s<27?n=Math.max(Lt.minPr*Math.min(1,e),Pi*.88):s>52&&(n=Math.min(t,Pi*1.06)),Math.abs(n-Pi)>.01&&(Pi=n,kt.setPixelRatio(Pi),kt.setSize(window.innerWidth,window.innerHeight,!1))}function kp(){kt&&(kt.setSize(window.innerWidth,window.innerHeight,!1),$t.aspect=window.innerWidth/window.innerHeight,$t.updateProjectionMatrix())}window.addEventListener("error",s=>{let e=ce("loadmsg");e&&Dt==="loading"&&(e.textContent="Erro: "+s.message)});window.__game={TRUCK:Eo,CARGO:un,get scene(){return It},get sun(){return sn},get renderer(){return kt},S:X,get rig(){return Q},get state(){return Dt},ctl:Ce,acceptJob:s=>Ip(s),get jobs(){return Ns},world:()=>gt,cam:Je};M1().catch(s=>{ce("loadmsg").textContent="Erro ao iniciar: "+s.message,console.error(s)});})();
