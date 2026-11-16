(()=>{var c0=Object.defineProperty,l0=Object.defineProperties;var h0=Object.getOwnPropertyDescriptors;var qd=Object.getOwnPropertySymbols;var d0=Object.prototype.hasOwnProperty,u0=Object.prototype.propertyIsEnumerable;var Xd=(s,e,t)=>e in s?c0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ut=(s,e)=>{for(var t in e||(e={}))d0.call(e,t)&&Xd(s,t,e[t]);if(qd)for(var t of qd(e))u0.call(e,t)&&Xd(s,t,e[t]);return s},Zn=(s,e)=>l0(s,h0(e));var Eh="162";var f0=0,jd=1,p0=2;var fc=1,Th=2,Ti=3,hi=0,Gt=1,dt=2,Yi=0,dr=1,Pn=2,Yd=3,Kd=4,m0=5,ys=100,g0=101,b0=102,$d=103,Zd=104,x0=200,v0=201,_0=202,y0=203,Fl=204,zl=205,M0=206,S0=207,w0=208,E0=209,T0=210,A0=211,R0=212,C0=213,P0=214,L0=0,I0=1,D0=2,Io=3,N0=4,U0=5,O0=6,F0=7,pc=0,z0=1,k0=2,Ki=0,B0=1,H0=2,G0=3,Ah=4,V0=5,W0=6,q0=7,Jd="attached",X0="detached",Hf=300,pr=301,mr=302,kl=303,Bl=304,mc=306,Ci=1e3,vn=1001,fa=1002,jt=1003,Do=1004;var Ms=1005;var Xt=1006,oa=1007;var Bn=1008;var $i=1009,j0=1010,Y0=1011,Rh=1012,Gf=1013,Xi=1014,ti=1015,pa=1016,Vf=1017,Wf=1018,Es=1020,K0=1021,kn=1023,$0=1024,Z0=1025,Ts=1026,gr=1027,qf=1028,Xf=1029,J0=1030,jf=1031,Yf=1033,Jc=33776,Qc=33777,el=33778,tl=33779,Qd=35840,eu=35841,tu=35842,nu=35843,Kf=36196,iu=37492,su=37496,ru=37808,au=37809,ou=37810,cu=37811,lu=37812,hu=37813,du=37814,uu=37815,fu=37816,pu=37817,mu=37818,gu=37819,bu=37820,xu=37821,nl=36492,vu=36494,_u=36495,Q0=36283,yu=36284,Mu=36285,Su=36286;var br=2300,As=2301,il=2302,wu=2400,Eu=2401,Tu=2402,em=2500;var $f=0,gc=1,Pa=2,tm=3200,Ch=3201,bc=0,nm=1,qi="",Bt="srgb",rn="srgb-linear",Ph="display-p3",xc="display-p3-linear",No="linear",Mt="srgb",Uo="rec709",Oo="p3";var Hs=7680;var Au=519,im=512,sm=513,rm=514,Zf=515,am=516,om=517,cm=518,lm=519,Hl=35044;var Ru="300 es",Gl=1035,Ri=2e3,Fo=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,ca=Math.PI/180,xr=180/Math.PI;function Hn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Yt(s,e,t){return Math.max(e,Math.min(t,s))}function Lh(s,e){return(s%e+e)%e}function hm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function dm(s,e,t){return s!==e?(t-s)/(e-s):0}function la(s,e,t){return(1-t)*s+t*e}function um(s,e,t,n){return la(s,e,1-Math.exp(-t*n))}function fm(s,e=1){return e-Math.abs(Lh(s,e*2)-e)}function pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bm(s,e){return s+Math.random()*(e-s)}function xm(s){return s*(.5-Math.random())}function vm(s){s!==void 0&&(Cu=s);let e=Cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(s){return s*ca}function ym(s){return s*xr}function Vl(s){return(s&s-1)===0&&s!==0}function Mm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sm(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Jf={DEG2RAD:ca,RAD2DEG:xr,generateUUID:Hn,clamp:Yt,euclideanModulo:Lh,mapLinear:hm,inverseLerp:dm,lerp:la,damp:um,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:bm,randFloatSpread:xm,seededRandom:vm,degToRad:_m,radToDeg:ym,isPowerOfTwo:Vl,ceilPowerOfTwo:Mm,floorPowerOfTwo:zo,setQuaternionFromProperEuler:Sm,normalize:pt,denormalize:ni},ce=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],b=i[0],p=i[3],m=i[6],v=i[1],x=i[4],_=i[7],S=i[2],w=i[5],R=i[8];return r[0]=a*b+o*v+c*S,r[3]=a*p+o*x+c*w,r[6]=a*m+o*_+c*R,r[1]=l*b+h*v+d*S,r[4]=l*p+h*x+d*w,r[7]=l*m+h*_+d*R,r[2]=u*b+f*v+g*S,r[5]=u*p+f*x+g*w,r[8]=u*m+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=d*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=u*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new Ye;function Qf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ma(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wm(){let s=ma("canvas");return s.style.display="block",s}var Pu={};function ep(s){s in Pu||(Pu[s]=!0,console.warn(s))}var Lu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Iu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[rn]:{transfer:No,primaries:Uo,toReference:s=>s,fromReference:s=>s},[Bt]:{transfer:Mt,primaries:Uo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xc]:{transfer:No,primaries:Oo,toReference:s=>s.applyMatrix3(Iu),fromReference:s=>s.applyMatrix3(Lu)},[Ph]:{transfer:Mt,primaries:Oo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Iu),fromReference:s=>s.applyMatrix3(Lu).convertLinearToSRGB()}},Em=new Set([rn,xc]),ft={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Em.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Ja[e].toReference,i=Ja[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ja[s].primaries},getTransfer:function(s){return s===qi?No:Ja[s].transfer}};function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gs,ko=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=ma("canvas")),Gs.width=e.width,Gs.height=e.height;let n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ur(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tm=0,Bo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(al(i[a].image)):r.push(al(i[a]))}else r=al(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ko.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Am=0,nn=class s extends Ji{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=vn,i=vn,r=Xt,a=Bn,o=kn,c=$i,l=s.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Hn(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Hf;nn.DEFAULT_ANISOTROPY=1;var gt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],b=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,_=(f+1)/2,S=(m+1)/2,w=(h+u)/4,R=(d+b)/4,E=(g+p)/4;return x>_&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=R/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=E/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=R/r,i=E/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-b)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends Wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ho=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ql=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(d!==b||c!==u||l!==f||h!==g){let p=1-o,m=c*u+l*f+h*g+d*b,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let S=Math.sqrt(x),w=Math.atan2(S,m*v);p=Math.sin(p*w)/S,o=Math.sin(o*w)/S}let _=o*v;if(c=c*p+u*_,l=l*p+f*_,h=h*p+g*_,d=d*p+b*_,p===1-o){let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new N,Du=new Ln,Mn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),eo.subVectors(this.max,Zr),Vs.subVectors(e.a,Zr),Ws.subVectors(e.b,Zr),qs.subVectors(e.c,Zr),ki.subVectors(Ws,Vs),Bi.subVectors(qs,Ws),ps.subVectors(Vs,qs);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-ps.z,ps.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,ps.z,0,-ps.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-ps.y,ps.x,0];return!cl(t,Vs,Ws,qs,eo)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Vs,Ws,qs,eo))?!1:(to.crossVectors(ki,Bi),t=[to.x,to.y,to.z],cl(t,Vs,Ws,qs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new N,new N,new N,new N,new N,new N,new N,new N],Jn=new N,Qa=new Mn,Vs=new N,Ws=new N,qs=new N,ki=new N,Bi=new N,ps=new N,Zr=new N,eo=new N,to=new N,ms=new N;function cl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ms.fromArray(s,r);let o=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),c=e.dot(ms),l=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Rm=new Mn,Jr=new N,ll=new N,In=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(ll)),this.expandByPoint(Jr.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new N,hl=new N,no=new N,Hi=new N,dl=new N,io=new N,ul=new N,vr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(hl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=Hi.dot(this.direction),c=-Hi.dot(no),l=Hi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(hl).addScaledVector(no,u),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,r){dl.subVectors(t,e),io.subVectors(n,e),ul.crossVectors(dl,io);let a=this.direction.dot(ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let c=o*this.direction.dot(io.crossVectors(Hi,io));if(c<0)return null;let l=o*this.direction.dot(dl.cross(Hi));if(l<0||c+l>a)return null;let h=-o*Hi.dot(ul);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class s{constructor(e,t,n,i,r,a,o,c,l,h,d,u,f,g,b,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,u,f,g,b,p)}set(e,t,n,i,r,a,o,c,l,h,d,u,f,g,b,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=b,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-b*l,t[9]=-o*c,t[2]=b-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,b=l*d;t[0]=u+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,b=l*d;t[0]=u-b*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,b=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cm,e,Pm)}lookAt(e,t,n){let i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(n,Rn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(n,Rn)),Gi.normalize(),so.crossVectors(Rn,Gi),i[0]=Gi.x,i[4]=so.x,i[8]=Rn.x,i[1]=Gi.y,i[5]=so.y,i[9]=Rn.y,i[2]=Gi.z,i[6]=so.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],b=n[6],p=n[10],m=n[14],v=n[3],x=n[7],_=n[11],S=n[15],w=i[0],R=i[4],E=i[8],B=i[12],M=i[1],T=i[5],G=i[9],X=i[13],C=i[2],F=i[6],A=i[10],K=i[14],O=i[3],I=i[7],D=i[11],V=i[15];return r[0]=a*w+o*M+c*C+l*O,r[4]=a*R+o*T+c*F+l*I,r[8]=a*E+o*G+c*A+l*D,r[12]=a*B+o*X+c*K+l*V,r[1]=h*w+d*M+u*C+f*O,r[5]=h*R+d*T+u*F+f*I,r[9]=h*E+d*G+u*A+f*D,r[13]=h*B+d*X+u*K+f*V,r[2]=g*w+b*M+p*C+m*O,r[6]=g*R+b*T+p*F+m*I,r[10]=g*E+b*G+p*A+m*D,r[14]=g*B+b*X+p*K+m*V,r[3]=v*w+x*M+_*C+S*O,r[7]=v*R+x*T+_*F+S*I,r[11]=v*E+x*G+_*A+S*D,r[15]=v*B+x*X+_*K+S*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],b=e[7],p=e[11],m=e[15];return g*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*f-n*c*f)+b*(+t*c*f-t*l*u+r*a*u-i*a*f+i*l*h-r*c*h)+p*(+t*l*d-t*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+m*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],b=e[13],p=e[14],m=e[15],v=d*p*l-b*u*l+b*c*f-o*p*f-d*c*m+o*u*m,x=g*u*l-h*p*l-g*c*f+a*p*f+h*c*m-a*u*m,_=h*b*l-g*d*l+g*o*f-a*b*f-h*o*m+a*d*m,S=g*d*c-h*b*c-g*o*u+a*b*u+h*o*p-a*d*p,w=t*v+n*x+i*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=v*R,e[1]=(b*u*r-d*p*r-b*i*f+n*p*f+d*i*m-n*u*m)*R,e[2]=(o*p*r-b*c*r+b*i*l-n*p*l-o*i*m+n*c*m)*R,e[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*f-n*c*f)*R,e[4]=x*R,e[5]=(h*p*r-g*u*r+g*i*f-t*p*f-h*i*m+t*u*m)*R,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*m-t*c*m)*R,e[7]=(a*u*r-h*c*r+h*i*l-t*u*l-a*i*f+t*c*f)*R,e[8]=_*R,e[9]=(g*d*r-h*b*r-g*n*f+t*b*f+h*n*m-t*d*m)*R,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*m+t*o*m)*R,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*f-t*o*f)*R,e[12]=S*R,e[13]=(h*b*i-g*d*i+g*n*u-t*b*u-h*n*p+t*d*p)*R,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*p-t*o*p)*R,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,b=a*h,p=a*d,m=o*d,v=c*l,x=c*h,_=c*d,S=n.x,w=n.y,R=n.z;return i[0]=(1-(b+m))*S,i[1]=(f+_)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(u+m))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+x)*R,i[9]=(p-v)*R,i[10]=(1-(u+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Xs.set(i[0],i[1],i[2]).length(),a=Xs.set(i[4],i[5],i[6]).length(),o=Xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);let l=1/r,h=1/a,d=1/o;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ri){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,g;if(o===Ri)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ri){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*l,f=(n+i)*h,g,b;if(o===Ri)g=(a+r)*d,b=-2*d;else if(o===Fo)g=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xs=new N,Qn=new Ve,Cm=new N(0,0,0),Pm=new N(1,1,1),Gi=new N,so=new N,Rn=new N,Nu=new Ve,Uu=new Ln,Sn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lm=0,Ou=new N,js=new Ln,Mi=new Ve,ro=new N,Qr=new N,Im=new N,Dm=new Ln,Fu=new N(1,0,0),zu=new N(0,1,0),ku=new N(0,0,1),Nm={type:"added"},Um={type:"removed"},fl={type:"childadded",child:null},pl={type:"childremoved",child:null},yt=class s extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new N,t=new Sn,n=new Ln,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ye}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Qr,ro,this.up):Mi.lookAt(ro,Qr,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),js.setFromRotationMatrix(Mi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),fl.child=e,this.dispatchEvent(fl),fl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new N(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new N,Si=new N,ml=new N,wi=new N,Ys=new N,Ks=new N,Bu=new N,gl=new N,bl=new N,xl=new N,ws=class s{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ei.subVectors(i,t),Si.subVectors(n,t),ml.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Si),c=ei.dot(ml),l=Si.dot(Si),h=Si.dot(ml),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Si.subVectors(e,t),ei.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ei.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ys.subVectors(i,n),Ks.subVectors(r,n),gl.subVectors(e,n);let c=Ys.dot(gl),l=Ks.dot(gl);if(c<=0&&l<=0)return t.copy(n);bl.subVectors(e,i);let h=Ys.dot(bl),d=Ks.dot(bl);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ys,a);xl.subVectors(e,r);let f=Ys.dot(xl),g=Ks.dot(xl);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ks,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Bu.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Bu,o);let m=1/(p+b+u);return a=b*m,o=u*m,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function vl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Lh(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vl(a,r,e+1/3),this.g=vl(a,r,e),this.b=vl(a,r,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ft.fromWorkingColorSpace(dn.copy(this),e),Math.round(Yt(dn.r*255,0,255))*65536+Math.round(Yt(dn.g*255,0,255))*256+Math.round(Yt(dn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,r=dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Bt){ft.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,i=dn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ao);let n=la(Vi.h,ao.h,t),i=la(Vi.s,ao.s,t),r=la(Vi.l,ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new he;he.NAMES=tp;var Om=0,un=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=dr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=zl,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rt=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new N,oo=new ce,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ep("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}};var _r=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yr=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fm=0,zn=new Ve,_l=new yt,$s=new N,Cn=new Mn,ea=new Mn,tn=new N,mt=class s extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?yr:_r)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Cn.min,ea.min),Cn.expandByPoint(tn),tn.addVectors(Cn.max,ea.max),Cn.expandByPoint(tn)):(Cn.expandByPoint(ea.min),Cn.expandByPoint(ea.max))}Cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tn.fromBufferAttribute(o,l),c&&($s.fromBufferAttribute(e,l),tn.add($s)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new N,c[E]=new N;let l=new N,h=new N,d=new N,u=new ce,f=new ce,g=new ce,b=new N,p=new N;function m(E,B,M){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,B),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[E].add(b),o[B].add(b),o[M].add(b),c[E].add(p),c[B].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let E=0,B=v.length;E<B;++E){let M=v[E],T=M.start,G=M.count;for(let X=T,C=T+G;X<C;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let x=new N,_=new N,S=new N,w=new N;function R(E){S.fromBufferAttribute(i,E),w.copy(S);let B=o[E];x.copy(B),x.sub(S.multiplyScalar(S.dot(B))).normalize(),_.crossVectors(w,B);let T=_.dot(c[E])<0?-1:1;a.setXYZW(E,x.x,x.y,x.z,T)}for(let E=0,B=v.length;E<B;++E){let M=v[E],T=M.start,G=M.count;for(let X=T,C=T+G;X<C;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,d=new N;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),b=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new At(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hu=new Ve,gs=new vr,co=new In,Gu=new N,Zs=new N,Js=new N,Qs=new N,yl=new N,lo=new N,ho=new ce,uo=new ce,fo=new ce,Vu=new N,Wu=new N,qu=new N,po=new N,mo=new N,Oe=class extends yt{constructor(e=new mt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(yl.fromBufferAttribute(d,e),a?lo.addScaledVector(yl,h):lo.addScaledVector(yl.sub(t),h))}t.add(lo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(co.containsPoint(gs.origin)===!1&&(gs.intersectSphere(co,Gu)===null||gs.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Hu.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=v,S=x;_<S;_+=3){let w=o.getX(_),R=o.getX(_+1),E=o.getX(_+2);i=go(this,m,e,n,l,h,d,w,R,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let p=g,m=b;p<m;p+=3){let v=o.getX(p),x=o.getX(p+1),_=o.getX(p+2);i=go(this,a,e,n,l,h,d,v,x,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=v,S=x;_<S;_+=3){let w=_,R=_+1,E=_+2;i=go(this,m,e,n,l,h,d,w,R,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let p=g,m=b;p<m;p+=3){let v=p,x=p+1,_=p+2;i=go(this,a,e,n,l,h,d,v,x,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function zm(s,e,t,n,i,r,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===hi,o),c===null)return null;mo.copy(o),mo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:s}}function go(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Zs),s.getVertexPosition(c,Js),s.getVertexPosition(l,Qs);let h=zm(s,e,t,n,Zs,Js,Qs,po);if(h){i&&(ho.fromBufferAttribute(i,o),uo.fromBufferAttribute(i,c),fo.fromBufferAttribute(i,l),h.uv=ws.getInterpolation(po,Zs,Js,Qs,ho,uo,fo,new ce)),r&&(ho.fromBufferAttribute(r,o),uo.fromBufferAttribute(r,c),fo.fromBufferAttribute(r,l),h.uv1=ws.getInterpolation(po,Zs,Js,Qs,ho,uo,fo,new ce)),a&&(Vu.fromBufferAttribute(a,o),Wu.fromBufferAttribute(a,c),qu.fromBufferAttribute(a,l),h.normal=ws.getInterpolation(po,Zs,Js,Qs,Vu,Wu,qu,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};ws.getNormal(Zs,Js,Qs,d.normal),h.face=d}return h}var fn=class s extends mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(d,2));function g(b,p,m,v,x,_,S,w,R,E,B){let M=_/R,T=S/E,G=_/2,X=S/2,C=w/2,F=R+1,A=E+1,K=0,O=0,I=new N;for(let D=0;D<A;D++){let V=D*T-X;for(let ae=0;ae<F;ae++){let Te=ae*M-G;I[b]=Te*v,I[p]=V*x,I[m]=C,l.push(I.x,I.y,I.z),I[b]=0,I[p]=0,I[m]=w>0?1:-1,h.push(I.x,I.y,I.z),d.push(ae/R),d.push(1-D/E),K+=1}}for(let D=0;D<E;D++)for(let V=0;V<R;V++){let ae=u+V+F*D,Te=u+V+F*(D+1),j=u+(V+1)+F*(D+1),ie=u+(V+1)+F*D;c.push(ae,Te,ie),c.push(Te,j,ie),O+=6}o.addGroup(f,O,B),f+=O,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(s){let e={};for(let t=0;t<s.length;t++){let n=Mr(s[t]);for(let i in n)e[i]=n[i]}return e}function km(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function np(s){return s.getRenderTarget()===null?s.outputColorSpace:ft.workingColorSpace}var Ih={clone:Mr,merge:xn},Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vo=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new N,Xu=new ce,ju=new ce,Ht=class extends Vo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,ju),t.subVectors(ju,Xu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},er=-90,tr=1,Xl=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(er,tr,e,t);i.layers=this.layers,this.add(i);let r=new Ht(er,tr,e,t);r.layers=this.layers,this.add(r);let a=new Ht(er,tr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(er,tr,e,t);o.layers=this.layers,this.add(o);let c=new Ht(er,tr,e,t);c.layers=this.layers,this.add(c);let l=new Ht(er,tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wo=class extends nn{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jl=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fn(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Yi});r.uniforms.tEquirect.value=t;let a=new Oe(i,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Xt),new Xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Ml=new N,Gm=new N,Vm=new Ye,Ai=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ml.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vm.getNormalMatrix(e),i=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new In,bo=new N,ga=class{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],b=i[10],p=i[11],m=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,u-l,p-f,_-m).normalize(),n[1].setComponents(c+r,u+l,p+f,_+m).normalize(),n[2].setComponents(c+a,u+h,p+g,_+v).normalize(),n[3].setComponents(c-a,u-h,p-g,_-v).normalize(),n[4].setComponents(c-o,u-d,p-b,_-x).normalize(),t===Ri)n[5].setComponents(c+o,u+d,p+b,_+x).normalize();else if(t===Fo)n[5].setComponents(o,d,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(bo.x=i.normal.x>0?e.max.x:e.min.x,bo.y=i.normal.y>0?e.max.y:e.min.y,bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ip(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wm(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let d=l.array,u=l.usage,f=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),l.onUploadCallback();let b;if(d instanceof Float32Array)b=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=s.SHORT;else if(d instanceof Uint32Array)b=s.UNSIGNED_INT;else if(d instanceof Int32Array)b=s.INT;else if(d instanceof Int8Array)b=s.BYTE;else if(d instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),f.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let b=0,p=g.length;b<p;b++){let m=g[b];t?s.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):s.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}var Kt=class s extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],b=[],p=[];for(let m=0;m<h;m++){let v=m*u-a;for(let x=0;x<l;x++){let _=x*d-r;g.push(_,-v,0),b.push(0,0,1),p.push(x/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let x=v+l*m,_=v+l*(m+1),S=v+1+l*(m+1),w=v+1+l*m;f.push(x,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,rg=`#ifdef USE_BUMPMAP
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`
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
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Wg=`struct PhysicalMaterial {
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
}`,qg=`
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,Jb=`#if DEPTH_PACKING == 3200
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
}`,Qb=`#define DISTANCE
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
}`,ex=`#define DISTANCE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,fx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,xx=`#define TOON
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
}`,vx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,Sx=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:qm,alphahash_pars_fragment:Xm,alphamap_fragment:jm,alphamap_pars_fragment:Ym,alphatest_fragment:Km,alphatest_pars_fragment:$m,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:rg,clipping_planes_fragment:ag,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:cg,clipping_planes_vertex:lg,color_fragment:hg,color_pars_fragment:dg,color_pars_vertex:ug,color_vertex:fg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:bg,displacementmap_vertex:xg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:zg,envmap_vertex:Ag,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Ig,lightmap_fragment:Dg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Og,lights_pars_begin:Fg,lights_toon_fragment:kg,lights_toon_pars_fragment:Bg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Wg,lights_fragment_begin:qg,lights_fragment_maps:Xg,lights_fragment_end:jg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:eb,map_particle_pars_fragment:tb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:sb,morphcolor_vertex:rb,morphnormal_vertex:ab,morphtarget_pars_vertex:ob,morphtarget_vertex:cb,normal_fragment_begin:lb,normal_fragment_maps:hb,normal_pars_fragment:db,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:xb,opaque_fragment:vb,packing:_b,premultiplied_alpha_fragment:yb,project_vertex:Mb,dithering_fragment:Sb,dithering_pars_fragment:wb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Rb,shadowmap_vertex:Cb,shadowmask_pars_fragment:Pb,skinbase_vertex:Lb,skinning_pars_vertex:Ib,skinning_vertex:Db,skinnormal_vertex:Nb,specularmap_fragment:Ub,specularmap_pars_fragment:Ob,tonemapping_fragment:Fb,tonemapping_pars_fragment:zb,transmission_fragment:kb,transmission_pars_fragment:Bb,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:Wb,background_vert:qb,background_frag:Xb,backgroundCube_vert:jb,backgroundCube_frag:Yb,cube_vert:Kb,cube_frag:$b,depth_vert:Zb,depth_frag:Jb,distanceRGBA_vert:Qb,distanceRGBA_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ax,meshlambert_vert:ox,meshlambert_frag:cx,meshmatcap_vert:lx,meshmatcap_frag:hx,meshnormal_vert:dx,meshnormal_frag:ux,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:bx,meshtoon_frag:xx,points_vert:vx,points_frag:_x,shadow_vert:yx,shadow_frag:Mx,sprite_vert:Sx,sprite_frag:wx},xe={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new he(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:xn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:xn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new he(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:xn([xe.points,xe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:xn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:xn([xe.common,xe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:xn([xe.sprite,xe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:xn([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:xn([xe.lights,xe.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};li.physical={uniforms:xn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var xo={r:0,b:0,g:0},xs=new Sn,Ex=new Ve;function Tx(s,e,t,n,i,r,a){let o=new he(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),v=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===mc)?(h===void 0&&(h=new Oe(new fn(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Mr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xs.copy(m.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(xs)),h.material.toneMapped=ft.getTransfer(x.colorSpace)!==Mt,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Oe(new Kt(2,2),new Gn({name:"BackgroundMaterial",uniforms:Mr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ft.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function b(p,m){p.getRGB(xo,np(s)),n.buffers.color.setClear(xo.r,xo.g,xo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,b(o,c)},render:g}}function Ax(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function d(C,F,A,K,O){let I=!1;if(a){let D=b(K,A,F);l!==D&&(l=D,f(l.object)),I=m(C,K,A,O),I&&v(C,K,A,O)}else{let D=F.wireframe===!0;(l.geometry!==K.id||l.program!==A.id||l.wireframe!==D)&&(l.geometry=K.id,l.program=A.id,l.wireframe=D,I=!0)}O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,E(C,F,A,K),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function b(C,F,A){let K=A.wireframe===!0,O=o[C.id];O===void 0&&(O={},o[C.id]=O);let I=O[F.id];I===void 0&&(I={},O[F.id]=I);let D=I[K];return D===void 0&&(D=p(u()),I[K]=D),D}function p(C){let F=[],A=[],K=[];for(let O=0;O<i;O++)F[O]=0,A[O]=0,K[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:A,attributeDivisors:K,object:C,attributes:{},index:null}}function m(C,F,A,K){let O=l.attributes,I=F.attributes,D=0,V=A.getAttributes();for(let ae in V)if(V[ae].location>=0){let j=O[ae],ie=I[ae];if(ie===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;D++}return l.attributesNum!==D||l.index!==K}function v(C,F,A,K){let O={},I=F.attributes,D=0,V=A.getAttributes();for(let ae in V)if(V[ae].location>=0){let j=I[ae];j===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));let ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),O[ae]=ie,D++}l.attributes=O,l.attributesNum=D,l.index=K}function x(){let C=l.newAttributes;for(let F=0,A=C.length;F<A;F++)C[F]=0}function _(C){S(C,0)}function S(C,F){let A=l.newAttributes,K=l.enabledAttributes,O=l.attributeDivisors;A[C]=1,K[C]===0&&(s.enableVertexAttribArray(C),K[C]=1),O[C]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,F),O[C]=F)}function w(){let C=l.newAttributes,F=l.enabledAttributes;for(let A=0,K=F.length;A<K;A++)F[A]!==C[A]&&(s.disableVertexAttribArray(A),F[A]=0)}function R(C,F,A,K,O,I,D){D===!0?s.vertexAttribIPointer(C,F,A,O,I):s.vertexAttribPointer(C,F,A,K,O,I)}function E(C,F,A,K){if(n.isWebGL2===!1&&(C.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let O=K.attributes,I=A.getAttributes(),D=F.defaultAttributeValues;for(let V in I){let ae=I[V];if(ae.location>=0){let Te=O[V];if(Te===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Te=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Te=C.instanceColor)),Te!==void 0){let j=Te.normalized,ie=Te.itemSize,pe=t.get(Te);if(pe===void 0)continue;let we=pe.buffer,Ae=pe.type,Me=pe.bytesPerElement,ze=n.isWebGL2===!0&&(Ae===s.INT||Ae===s.UNSIGNED_INT||Te.gpuType===Gf);if(Te.isInterleavedBufferAttribute){let Ee=Te.data,U=Ee.stride,fe=Te.offset;if(Ee.isInstancedInterleavedBuffer){for(let te=0;te<ae.locationSize;te++)S(ae.location+te,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let te=0;te<ae.locationSize;te++)_(ae.location+te);s.bindBuffer(s.ARRAY_BUFFER,we);for(let te=0;te<ae.locationSize;te++)R(ae.location+te,ie/ae.locationSize,Ae,j,U*Me,(fe+ie/ae.locationSize*te)*Me,ze)}else{if(Te.isInstancedBufferAttribute){for(let Ee=0;Ee<ae.locationSize;Ee++)S(ae.location+Ee,Te.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)_(ae.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Ee=0;Ee<ae.locationSize;Ee++)R(ae.location+Ee,ie/ae.locationSize,Ae,j,ie*Me,ie/ae.locationSize*Ee*Me,ze)}}else if(D!==void 0){let j=D[V];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(ae.location,j);break;case 3:s.vertexAttrib3fv(ae.location,j);break;case 4:s.vertexAttrib4fv(ae.location,j);break;default:s.vertexAttrib1fv(ae.location,j)}}}}w()}function B(){G();for(let C in o){let F=o[C];for(let A in F){let K=F[A];for(let O in K)g(K[O].object),delete K[O];delete F[A]}delete o[C]}}function M(C){if(o[C.id]===void 0)return;let F=o[C.id];for(let A in F){let K=F[A];for(let O in K)g(K[O].object),delete K[O];delete F[A]}delete o[C.id]}function T(C){for(let F in o){let A=o[F];if(A[C.id]===void 0)continue;let K=A[C.id];for(let O in K)g(K[O].object),delete K[O];delete A[C.id]}}function G(){X(),h=!0,l!==c&&(l=c,f(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:_,disableUnusedAttributes:w}}function Rx(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,u){if(u===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function l(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=d[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Cx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,_=a||e.has("OES_texture_float"),S=x&&_,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:w}}function Px(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ai,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,b=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,x=v*4,_=m.clippingState||null;c.value=_,_=h(g,u,x,f);for(let S=0;S!==x;++S)_[S]=t[S];m.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let b=d!==null?d.length:0,p=null;if(b!==0){if(p=c.value,g!==!0||p===null){let m=f+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,_=f;x!==b;++x,_+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,_),p[_+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function Lx(s){let e=new WeakMap;function t(a,o){return o===kl?a.mapping=pr:o===Bl&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===kl||o===Bl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new jl(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Sr=class extends Vo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cr=4,Yu=[.125,.215,.35,.446,.526,.582],Ss=20,Sl=new Sr,Ku=new he,wl=null,El=0,Tl=0,_s=(1+Math.sqrt(5))/2,nr=1/_s,$u=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,_s,nr),new N(0,_s,-nr),new N(nr,0,_s),new N(-nr,0,_s),new N(_s,nr,0),new N(-_s,nr,0)],wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,El,Tl),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:pa,format:kn,colorSpace:rn,depthBuffer:!1},i=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Dx(r,e,t)}return i}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,i){let o=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ku),h.toneMapping=Ki,h.autoClear=!1;let f=new rt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Oe(new fn,f),b=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,b=!0):(f.color.copy(Ku),b=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):v===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let x=this._cubeSize;vo(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===pr||e.mapping===mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;vo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$u[(i-1)%$u.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Oe(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),b=r/g,p=isFinite(r)?1+Math.floor(h*b):Ss;p>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ss}`);let m=[],v=0;for(let R=0;R<Ss;++R){let E=R/b,B=Math.exp(-E*E/2);m.push(B),R===0?v+=B:R<p&&(v+=2*B)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let _=this._sizeLods[i],S=3*_*(i>x-cr?i-x+cr:0),w=4*(this._cubeSize-_);vo(t,S,w,3*_,2*_),c.setRenderTarget(t),c.render(d,Sl)}};function Ix(s){let e=[],t=[],n=[],i=s,r=s-cr+1+Yu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-cr?c=Yu[a-s+cr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,b=3,p=2,m=1,v=new Float32Array(b*g*f),x=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,E=w>2?0:-1,B=[R,E,0,R+2/3,E,0,R+2/3,E+1,0,R,E,0,R+2/3,E+1,0,R,E+1,0];v.set(B,b*g*w),x.set(u,p*g*w);let M=[w,w,w,w,w,w];_.set(M,m*g*w)}let S=new mt;S.setAttribute("position",new At(v,b)),S.setAttribute("uv",new At(x,p)),S.setAttribute("faceIndex",new At(_,m)),e.push(S),i>cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(s,e,t){let n=new Pi(s,e,t);return n.texture.mapping=mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Dx(s,e,t){let n=new Float32Array(Ss),i=new N(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ju(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Qu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function Nx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===kl||c===Bl,h=c===pr||c===mr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new wr(s)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new wr(s));let u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ux(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ox(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let b=u.morphAttributes[g];for(let p=0,m=b.length;p<m;p++)e.remove(b[p])}u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)e.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let b=f[g];for(let p=0,m=b.length;p<m;p++)e.update(b[p],s.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let x=0,_=v.length;x<_;x+=3){let S=v[x+0],w=v[x+1],R=v[x+2];u.push(S,w,w,R,R,S)}}else if(g!==void 0){let v=g.array;b=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let S=x+0,w=x+1,R=x+2;u.push(S,w,w,R,R,S)}}else return;let p=new(Qf(u)?yr:_r)(u,1);p.version=b;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Fx(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*c),t.update(g,r,1)}function d(f,g,b){if(b===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,f*c,b),t.update(g,r,b)}function u(f,g,b){if(b===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<b;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,f,0,b);let m=0;for(let v=0;v<b;v++)m+=g[v];t.update(m,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function zx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kx(s,e){return s[0]-e[0]}function Bx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hx(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==g){let G=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",G)};b!==void 0&&b.texture.dispose();let p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],w=0;p===!0&&(w=1),m===!0&&(w=2),v===!0&&(w=3);let R=h.attributes.position.count*w,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let B=new Float32Array(R*E*4*g),M=new Ho(B,R,E,g);M.type=ti,M.needsUpdate=!0;let T=w*4;for(let X=0;X<g;X++){let C=x[X],F=_[X],A=S[X],K=R*E*4*X;for(let O=0;O<C.count;O++){let I=O*T;p===!0&&(a.fromBufferAttribute(C,O),B[K+I+0]=a.x,B[K+I+1]=a.y,B[K+I+2]=a.z,B[K+I+3]=0),m===!0&&(a.fromBufferAttribute(F,O),B[K+I+4]=a.x,B[K+I+5]=a.y,B[K+I+6]=a.z,B[K+I+7]=0),v===!0&&(a.fromBufferAttribute(A,O),B[K+I+8]=a.x,B[K+I+9]=a.y,B[K+I+10]=a.z,B[K+I+11]=A.itemSize===4?a.w:1)}}b={count:g,texture:M,size:new ce(R,E)},r.set(h,b),h.addEventListener("dispose",G)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let p=0;for(let v=0;v<u.length;v++)p+=u[v];let m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",m),d.getUniforms().setValue(s,"morphTargetInfluences",u)}d.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let _=g[x];_[0]=x,_[1]=u[x]}g.sort(Bx);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(kx);let b=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let _=o[x],S=_[0],w=_[1];S!==Number.MAX_SAFE_INTEGER&&w?(b&&h.getAttribute("morphTarget"+x)!==b[S]&&h.setAttribute("morphTarget"+x,b[S]),p&&h.getAttribute("morphNormal"+x)!==p[S]&&h.setAttribute("morphNormal"+x,p[S]),i[x]=w,m+=w):(b&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let v=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Gx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var qo=class extends nn{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Ts,h!==Ts&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Xi),n===void 0&&h===gr&&(n=Es),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sp=new nn,rp=new qo(1,1);rp.compareFunction=Zf;var ap=new Ho,op=new ql,cp=new Wo,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function Dr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ef[i];if(r===void 0&&(r=new Float32Array(i),ef[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function vc(s,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function jx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;rf.set(n),s.uniformMatrix2fv(this.addr,!1,rf),Zt(t,n)}}function Yx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;sf.set(n),s.uniformMatrix3fv(this.addr,!1,sf),Zt(t,n)}}function Kx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;nf.set(n),s.uniformMatrix4fv(this.addr,!1,nf),Zt(t,n)}}function $x(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function Jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function ev(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function sv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?rp:sp;t.setTexture2D(e||r,i)}function rv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||op,i)}function av(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cp,i)}function ov(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ap,i)}function cv(s){switch(s){case 5126:return Vx;case 35664:return Wx;case 35665:return qx;case 35666:return Xx;case 35674:return jx;case 35675:return Yx;case 35676:return Kx;case 5124:case 35670:return $x;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return ov}}function lv(s,e){s.uniform1fv(this.addr,e)}function hv(s,e){let t=Dr(e,this.size,2);s.uniform2fv(this.addr,t)}function dv(s,e){let t=Dr(e,this.size,3);s.uniform3fv(this.addr,t)}function uv(s,e){let t=Dr(e,this.size,4);s.uniform4fv(this.addr,t)}function fv(s,e){let t=Dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function pv(s,e){let t=Dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mv(s,e){let t=Dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gv(s,e){s.uniform1iv(this.addr,e)}function bv(s,e){s.uniform2iv(this.addr,e)}function xv(s,e){s.uniform3iv(this.addr,e)}function vv(s,e){s.uniform4iv(this.addr,e)}function _v(s,e){s.uniform1uiv(this.addr,e)}function yv(s,e){s.uniform2uiv(this.addr,e)}function Mv(s,e){s.uniform3uiv(this.addr,e)}function Sv(s,e){s.uniform4uiv(this.addr,e)}function wv(s,e,t){let n=this.cache,i=e.length,r=vc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||sp,r[a])}function Ev(s,e,t){let n=this.cache,i=e.length,r=vc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||op,r[a])}function Tv(s,e,t){let n=this.cache,i=e.length,r=vc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||cp,r[a])}function Av(s,e,t){let n=this.cache,i=e.length,r=vc(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ap,r[a])}function Rv(s){switch(s){case 5126:return lv;case 35664:return hv;case 35665:return dv;case 35666:return uv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return bv;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return _v;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}var Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rv(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function af(s,e){s.seq.push(e),s.map[e.id]=e}function Cv(s,e,t){let n=s.name,i=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),a=Al.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){af(t,l===void 0?new Yl(o,s,e):new Kl(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new $l(o),af(t,d)),t=d}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Cv(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function of(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Pv=37297,Lv=0;function Iv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Dv(s){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(s),n;switch(e===t?n="":e===Oo&&t===Uo?n="LinearDisplayP3ToLinearSRGB":e===Uo&&t===Oo&&(n="LinearSRGBToLinearDisplayP3"),s){case rn:case xc:return[n,"LinearTransferOETF"];case Bt:case Ph:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function cf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Iv(s.getShaderSource(e),a)}else return i}function Nv(s,e){let t=Dv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Uv(s,e){let t;switch(e){case B0:t="Linear";break;case H0:t="Reinhard";break;case G0:t="OptimizedCineon";break;case Ah:t="ACESFilmic";break;case W0:t="AgX";break;case q0:t="Neutral";break;case V0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ov(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function Fv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function zv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function lr(s){return s!==""}function lf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(s){return s.replace(Bv,Gv)}var Hv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gv(s,e){let t=Qe[e];if(t===void 0){let n=Hv.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}var Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(s){return s.replace(Vv,Wv)}function Wv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function qv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Xv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case k0:e="ENVMAP_BLENDING_ADD";break}return e}function Kv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $v(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=qv(t),l=Xv(t),h=jv(t),d=Yv(t),u=Kv(t),f=t.isWebGL2?"":Ov(t),g=Fv(t),b=zv(r),p=i.createProgram(),m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(lr).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(lr).join(`
`),v.length>0&&(v+=`
`)):(m=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),v=[f,uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ki?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Zl(a),a=lf(a,t),a=hf(a,t),o=Zl(o),o=lf(o,t),o=hf(o,t),a=df(a),o=df(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let _=x+m+a,S=x+v+o,w=of(i,i.VERTEX_SHADER,_),R=of(i,i.FRAGMENT_SHADER,S);i.attachShader(p,w),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(G){if(s.debug.checkShaderErrors){let X=i.getProgramInfoLog(p).trim(),C=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(R).trim(),A=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(A=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,R);else{let O=cf(i,w,"vertex"),I=cf(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+O+`
`+I)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(C===""||F==="")&&(K=!1);K&&(G.diagnostics={runnable:A,programLog:X,vertexShader:{log:C,prefix:m},fragmentShader:{log:F,prefix:v}})}i.deleteShader(w),i.deleteShader(R),B=new fr(i,p),M=kv(i,p)}let B;this.getUniforms=function(){return B===void 0&&E(this),B};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(p,Pv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}var Zv=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ql(e),t.set(e,n)),n}},Ql=class{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}};function Jv(s,e,t,n,i,r,a){let o=new Go,c=new Jl,l=new Set,h=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,g=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,T,G,X,C){let F=X.fog,A=C.geometry,K=M.isMeshStandardMaterial?X.environment:null,O=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),I=O&&O.mapping===mc?O.image.height:null,D=b[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let V=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ae=V!==void 0?V.length:0,Te=0;A.morphAttributes.position!==void 0&&(Te=1),A.morphAttributes.normal!==void 0&&(Te=2),A.morphAttributes.color!==void 0&&(Te=3);let j,ie,pe,we;if(D){let xt=li[D];j=xt.vertexShader,ie=xt.fragmentShader}else j=M.vertexShader,ie=M.fragmentShader,c.update(M),pe=c.getVertexShaderID(M),we=c.getFragmentShaderID(M);let Ae=s.getRenderTarget(),Me=C.isInstancedMesh===!0,ze=C.isBatchedMesh===!0,Ee=!!M.map,U=!!M.matcap,fe=!!O,te=!!M.aoMap,de=!!M.lightMap,re=!!M.bumpMap,k=!!M.normalMap,se=!!M.displacementMap,le=!!M.emissiveMap,ve=!!M.metalnessMap,L=!!M.roughnessMap,y=M.anisotropy>0,q=M.clearcoat>0,z=M.iridescence>0,ne=M.sheen>0,oe=M.transmission>0,qe=y&&!!M.anisotropyMap,Be=q&&!!M.clearcoatMap,be=q&&!!M.clearcoatNormalMap,_e=q&&!!M.clearcoatRoughnessMap,Xe=z&&!!M.iridescenceMap,me=z&&!!M.iridescenceThicknessMap,zt=ne&&!!M.sheenColorMap,st=ne&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,De=!!M.specularColorMap,Ne=!!M.specularIntensityMap,ht=oe&&!!M.transmissionMap,Ke=oe&&!!M.thicknessMap,Et=!!M.gradientMap,H=!!M.alphaMap,ye=M.alphaTest>0,J=!!M.alphaHash,ge=!!M.extensions,Se=Ki;M.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Se=s.toneMapping);let ot={isWebGL2:d,shaderID:D,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:ie,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ze,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:rn,alphaToCoverage:!!M.alphaToCoverage,map:Ee,matcap:U,envMap:fe,envMapMode:fe&&O.mapping,envMapCubeUVHeight:I,aoMap:te,lightMap:de,bumpMap:re,normalMap:k,displacementMap:f&&se,emissiveMap:le,normalMapObjectSpace:k&&M.normalMapType===nm,normalMapTangentSpace:k&&M.normalMapType===bc,metalnessMap:ve,roughnessMap:L,anisotropy:y,anisotropyMap:qe,clearcoat:q,clearcoatMap:Be,clearcoatNormalMap:be,clearcoatRoughnessMap:_e,iridescence:z,iridescenceMap:Xe,iridescenceThicknessMap:me,sheen:ne,sheenColorMap:zt,sheenRoughnessMap:st,specularMap:Fe,specularColorMap:De,specularIntensityMap:Ne,transmission:oe,transmissionMap:ht,thicknessMap:Ke,gradientMap:Et,opaque:M.transparent===!1&&M.blending===dr&&M.alphaToCoverage===!1,alphaMap:H,alphaTest:ye,alphaHash:J,combine:M.combine,mapUv:Ee&&p(M.map.channel),aoMapUv:te&&p(M.aoMap.channel),lightMapUv:de&&p(M.lightMap.channel),bumpMapUv:re&&p(M.bumpMap.channel),normalMapUv:k&&p(M.normalMap.channel),displacementMapUv:se&&p(M.displacementMap.channel),emissiveMapUv:le&&p(M.emissiveMap.channel),metalnessMapUv:ve&&p(M.metalnessMap.channel),roughnessMapUv:L&&p(M.roughnessMap.channel),anisotropyMapUv:qe&&p(M.anisotropyMap.channel),clearcoatMapUv:Be&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:st&&p(M.sheenRoughnessMap.channel),specularMapUv:Fe&&p(M.specularMap.channel),specularColorMapUv:De&&p(M.specularColorMap.channel),specularIntensityMapUv:Ne&&p(M.specularIntensityMap.channel),transmissionMapUv:ht&&p(M.transmissionMap.channel),thicknessMapUv:Ke&&p(M.thicknessMap.channel),alphaMapUv:H&&p(M.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(k||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!A.attributes.uv&&(Ee||H),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dt,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ge&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function v(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(x(T,M),_(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),M.push(o.mask)}function S(M){let T=b[M.type],G;if(T){let X=li[T];G=Ih.clone(X.uniforms)}else G=M.uniforms;return G}function w(M,T){let G;for(let X=0,C=h.length;X<C;X++){let F=h[X];if(F.cacheKey===T){G=F,++G.usedTimes;break}}return G===void 0&&(G=new $v(s,T,M,r),h.push(G)),G}function R(M){if(--M.usedTimes===0){let T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:B}}function Qv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function e_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ff(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,b,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:b,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=b,m.group=p),e++,m}function o(d,u,f,g,b,p){let m=a(d,u,f,g,b,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(d,u,f,g,b,p){let m=a(d,u,f,g,b,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(d,u){t.length>1&&t.sort(d||e_),n.length>1&&n.sort(u||ff),i.length>1&&i.sort(u||ff)}function h(){for(let d=e,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function t_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new pf,s.set(n,[a])):i>=r.length?(a=new pf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function n_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new he};break;case"SpotLight":t={position:new N,direction:new N,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function i_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var s_=0;function r_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function a_(s,e){let t=new n_,n=i_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);let r=new N,a=new Ve,o=new Ve;function c(h,d){let u=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let b=0,p=0,m=0,v=0,x=0,_=0,S=0,w=0,R=0,E=0,B=0;h.sort(r_);let M=d===!0?Math.PI:1;for(let G=0,X=h.length;G<X;G++){let C=h[G],F=C.color,A=C.intensity,K=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=F.r*A*M,f+=F.g*A*M,g+=F.b*A*M;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],A);B++}else if(C.isDirectionalLight){let I=t.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity*M),C.castShadow){let D=C.shadow,V=n.get(C);V.shadowBias=D.bias,V.shadowNormalBias=D.normalBias,V.shadowRadius=D.radius,V.shadowMapSize=D.mapSize,i.directionalShadow[b]=V,i.directionalShadowMap[b]=O,i.directionalShadowMatrix[b]=C.shadow.matrix,_++}i.directional[b]=I,b++}else if(C.isSpotLight){let I=t.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(F).multiplyScalar(A*M),I.distance=K,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[m]=I;let D=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,D.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[m]=D.matrix,C.castShadow){let V=n.get(C);V.shadowBias=D.bias,V.shadowNormalBias=D.normalBias,V.shadowRadius=D.radius,V.shadowMapSize=D.mapSize,i.spotShadow[m]=V,i.spotShadowMap[m]=O,w++}m++}else if(C.isRectAreaLight){let I=t.get(C);I.color.copy(F).multiplyScalar(A),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=I,v++}else if(C.isPointLight){let I=t.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity*M),I.distance=C.distance,I.decay=C.decay,C.castShadow){let D=C.shadow,V=n.get(C);V.shadowBias=D.bias,V.shadowNormalBias=D.normalBias,V.shadowRadius=D.radius,V.shadowMapSize=D.mapSize,V.shadowCameraNear=D.camera.near,V.shadowCameraFar=D.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=C.shadow.matrix,S++}i.point[p]=I,p++}else if(C.isHemisphereLight){let I=t.get(C);I.skyColor.copy(C.color).multiplyScalar(A*M),I.groundColor.copy(C.groundColor).multiplyScalar(A*M),i.hemi[x]=I,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;let T=i.hash;(T.directionalLength!==b||T.pointLength!==p||T.spotLength!==m||T.rectAreaLength!==v||T.hemiLength!==x||T.numDirectionalShadows!==_||T.numPointShadows!==S||T.numSpotShadows!==w||T.numSpotMaps!==R||T.numLightProbes!==B)&&(i.directional.length=b,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=B,T.directionalLength=b,T.pointLength=p,T.spotLength=m,T.rectAreaLength=v,T.hemiLength=x,T.numDirectionalShadows=_,T.numPointShadows=S,T.numSpotShadows=w,T.numSpotMaps=R,T.numLightProbes=B,i.version=s_++)}function l(h,d){let u=0,f=0,g=0,b=0,p=0,m=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let _=h[v];if(_.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(_.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let S=i.rectArea[b];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),a.copy(_.matrixWorld),a.premultiply(m),o.extractRotation(a),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),b++}else if(_.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function mf(s,e){let t=new a_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function o_(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new mf(s,e),t.set(r,[c])):a>=o.length?(c=new mf(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var ba=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eh=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`;function h_(s,e,t){let n=new ga,i=new ce,r=new ce,a=new gt,o=new ba({depthPacking:Ch}),c=new eh,l={},h=t.maxTextureSize,d={[hi]:Gt,[Gt]:hi,[dt]:dt},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:c_,fragmentShader:l_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Oe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let m=this.type;this.render=function(w,R,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let B=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=m!==Ti&&this.type===Ti,C=m===Ti&&this.type!==Ti;for(let F=0,A=w.length;F<A;F++){let K=w[F],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let I=O.getFrameExtents();if(i.multiply(I),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/I.x),i.x=r.x*I.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/I.y),i.y=r.y*I.y,O.mapSize.y=r.y)),O.map===null||X===!0||C===!0){let V=this.type!==Ti?{minFilter:jt,magFilter:jt}:{};O.map!==null&&O.map.dispose(),O.map=new Pi(i.x,i.y,V),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let D=O.getViewportCount();for(let V=0;V<D;V++){let ae=O.getViewport(V);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),G.viewport(a),O.updateMatrices(K,V),n=O.getFrustum(),_(R,E,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===Ti&&v(O,E),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(B,M,T)};function v(w,R){let E=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pi(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,E,u,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,E,f,b,null)}function x(w,R,E,B){let M=null,T=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=E.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=M.uuid,X=R.uuid,C=l[G];C===void 0&&(C={},l[G]=C);let F=C[X];F===void 0&&(F=M.clone(),C[X]=F,R.addEventListener("dispose",S)),M=F}if(M.visible=R.visible,M.wireframe=R.wireframe,B===Ti?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let G=s.properties.get(M);G.light=E}return M}function _(w,R,E,B,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let X=e.update(w),C=w.material;if(Array.isArray(C)){let F=X.groups;for(let A=0,K=F.length;A<K;A++){let O=F[A],I=C[O.materialIndex];if(I&&I.visible){let D=x(w,I,B,M);w.onBeforeShadow(s,w,R,E,X,D,O),s.renderBufferDirect(E,null,X,D,w,O),w.onAfterShadow(s,w,R,E,X,D,O)}}}else if(C.visible){let F=x(w,C,B,M);w.onBeforeShadow(s,w,R,E,X,F,null),s.renderBufferDirect(E,null,X,F,w,null),w.onAfterShadow(s,w,R,E,X,F,null)}}let G=w.children;for(let X=0,C=G.length;X<C;X++)_(G[X],R,E,B,M)}function S(w){w.target.removeEventListener("dispose",S);for(let E in l){let B=l[E],M=w.target.uuid;M in B&&(B[M].dispose(),delete B[M])}}}function d_(s,e,t){let n=t.isWebGL2;function i(){let H=!1,ye=new gt,J=null,ge=new gt(0,0,0,0);return{setMask:function(Se){J!==Se&&!H&&(s.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){H=Se},setClear:function(Se,ot,xt,an,On){On===!0&&(Se*=an,ot*=an,xt*=an),ye.set(Se,ot,xt,an),ge.equals(ye)===!1&&(s.clearColor(Se,ot,xt,an),ge.copy(ye))},reset:function(){H=!1,J=null,ge.set(-1,0,0,0)}}}function r(){let H=!1,ye=null,J=null,ge=null;return{setTest:function(Se){Se?Me(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(Se){ye!==Se&&!H&&(s.depthMask(Se),ye=Se)},setFunc:function(Se){if(J!==Se){switch(Se){case L0:s.depthFunc(s.NEVER);break;case I0:s.depthFunc(s.ALWAYS);break;case D0:s.depthFunc(s.LESS);break;case Io:s.depthFunc(s.LEQUAL);break;case N0:s.depthFunc(s.EQUAL);break;case U0:s.depthFunc(s.GEQUAL);break;case O0:s.depthFunc(s.GREATER);break;case F0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=Se}},setLocked:function(Se){H=Se},setClear:function(Se){ge!==Se&&(s.clearDepth(Se),ge=Se)},reset:function(){H=!1,ye=null,J=null,ge=null}}}function a(){let H=!1,ye=null,J=null,ge=null,Se=null,ot=null,xt=null,an=null,On=null;return{setTest:function(vt){H||(vt?Me(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(vt){ye!==vt&&!H&&(s.stencilMask(vt),ye=vt)},setFunc:function(vt,gn,ci){(J!==vt||ge!==gn||Se!==ci)&&(s.stencilFunc(vt,gn,ci),J=vt,ge=gn,Se=ci)},setOp:function(vt,gn,ci){(ot!==vt||xt!==gn||an!==ci)&&(s.stencilOp(vt,gn,ci),ot=vt,xt=gn,an=ci)},setLocked:function(vt){H=vt},setClear:function(vt){On!==vt&&(s.clearStencil(vt),On=vt)},reset:function(){H=!1,ye=null,J=null,ge=null,Se=null,ot=null,xt=null,an=null,On=null}}}let o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,b=[],p=null,m=!1,v=null,x=null,_=null,S=null,w=null,R=null,E=null,B=new he(0,0,0),M=0,T=!1,G=null,X=null,C=null,F=null,A=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,I=0,D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),O=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),O=I>=2);let V=null,ae={},Te=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ie=new gt().fromArray(Te),pe=new gt().fromArray(j);function we(H,ye,J,ge){let Se=new Uint8Array(4),ot=s.createTexture();s.bindTexture(H,ot),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<J;xt++)n&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(ye,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(ye+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ot}let Ae={};Ae[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Me(s.DEPTH_TEST),c.setFunc(Io),se(!1),le(jd),Me(s.CULL_FACE),re(Yi);function Me(H){u[H]!==!0&&(s.enable(H),u[H]=!0)}function ze(H){u[H]!==!1&&(s.disable(H),u[H]=!1)}function Ee(H,ye){return f[H]!==ye?(s.bindFramebuffer(H,ye),f[H]=ye,n&&(H===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ye),H===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ye)),!0):!1}function U(H,ye){let J=b,ge=!1;if(H){J=g.get(ye),J===void 0&&(J=[],g.set(ye,J));let Se=H.textures;if(J.length!==Se.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,xt=Se.length;ot<xt;ot++)J[ot]=s.COLOR_ATTACHMENT0+ot;J.length=Se.length,ge=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ge=!0);if(ge)if(t.isWebGL2)s.drawBuffers(J);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function fe(H){return p!==H?(s.useProgram(H),p=H,!0):!1}let te={[ys]:s.FUNC_ADD,[g0]:s.FUNC_SUBTRACT,[b0]:s.FUNC_REVERSE_SUBTRACT};if(n)te[$d]=s.MIN,te[Zd]=s.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(te[$d]=H.MIN_EXT,te[Zd]=H.MAX_EXT)}let de={[x0]:s.ZERO,[v0]:s.ONE,[_0]:s.SRC_COLOR,[Fl]:s.SRC_ALPHA,[T0]:s.SRC_ALPHA_SATURATE,[w0]:s.DST_COLOR,[M0]:s.DST_ALPHA,[y0]:s.ONE_MINUS_SRC_COLOR,[zl]:s.ONE_MINUS_SRC_ALPHA,[E0]:s.ONE_MINUS_DST_COLOR,[S0]:s.ONE_MINUS_DST_ALPHA,[A0]:s.CONSTANT_COLOR,[R0]:s.ONE_MINUS_CONSTANT_COLOR,[C0]:s.CONSTANT_ALPHA,[P0]:s.ONE_MINUS_CONSTANT_ALPHA};function re(H,ye,J,ge,Se,ot,xt,an,On,vt){if(H===Yi){m===!0&&(ze(s.BLEND),m=!1);return}if(m===!1&&(Me(s.BLEND),m=!0),H!==m0){if(H!==v||vt!==T){if((x!==ys||w!==ys)&&(s.blendEquation(s.FUNC_ADD),x=ys,w=ys),vt)switch(H){case dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pn:s.blendFunc(s.ONE,s.ONE);break;case Yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,S=null,R=null,E=null,B.set(0,0,0),M=0,v=H,T=vt}return}Se=Se||ye,ot=ot||J,xt=xt||ge,(ye!==x||Se!==w)&&(s.blendEquationSeparate(te[ye],te[Se]),x=ye,w=Se),(J!==_||ge!==S||ot!==R||xt!==E)&&(s.blendFuncSeparate(de[J],de[ge],de[ot],de[xt]),_=J,S=ge,R=ot,E=xt),(an.equals(B)===!1||On!==M)&&(s.blendColor(an.r,an.g,an.b,On),B.copy(an),M=On),v=H,T=!1}function k(H,ye){H.side===dt?ze(s.CULL_FACE):Me(s.CULL_FACE);let J=H.side===Gt;ye&&(J=!J),se(J),H.blending===dr&&H.transparent===!1?re(Yi):re(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);let ge=H.stencilWrite;l.setTest(ge),ge&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),L(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(H){G!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),G=H)}function le(H){H!==f0?(Me(s.CULL_FACE),H!==X&&(H===jd?s.cullFace(s.BACK):H===p0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),X=H}function ve(H){H!==C&&(O&&s.lineWidth(H),C=H)}function L(H,ye,J){H?(Me(s.POLYGON_OFFSET_FILL),(F!==ye||A!==J)&&(s.polygonOffset(ye,J),F=ye,A=J)):ze(s.POLYGON_OFFSET_FILL)}function y(H){H?Me(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function q(H){H===void 0&&(H=s.TEXTURE0+K-1),V!==H&&(s.activeTexture(H),V=H)}function z(H,ye,J){J===void 0&&(V===null?J=s.TEXTURE0+K-1:J=V);let ge=ae[J];ge===void 0&&(ge={type:void 0,texture:void 0},ae[J]=ge),(ge.type!==H||ge.texture!==ye)&&(V!==J&&(s.activeTexture(J),V=J),s.bindTexture(H,ye||Ae[H]),ge.type=H,ge.texture=ye)}function ne(){let H=ae[V];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(H){ie.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function Ne(H){pe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),pe.copy(H))}function ht(H,ye){let J=d.get(ye);J===void 0&&(J=new WeakMap,d.set(ye,J));let ge=J.get(H);ge===void 0&&(ge=s.getUniformBlockIndex(ye,H.name),J.set(H,ge))}function Ke(H,ye){let ge=d.get(ye).get(H);h.get(ye)!==ge&&(s.uniformBlockBinding(ye,ge,H.__bindingPointIndex),h.set(ye,ge))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},V=null,ae={},f={},g=new WeakMap,b=[],p=null,m=!1,v=null,x=null,_=null,S=null,w=null,R=null,E=null,B=new he(0,0,0),M=0,T=!1,G=null,X=null,C=null,F=null,A=null,ie.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Me,disable:ze,bindFramebuffer:Ee,drawBuffers:U,useProgram:fe,setBlending:re,setMaterial:k,setFlipSided:se,setCullFace:le,setLineWidth:ve,setPolygonOffset:L,setScissorTest:y,activeTexture:q,bindTexture:z,unbindTexture:ne,compressedTexImage2D:oe,compressedTexImage3D:qe,texImage2D:st,texImage3D:Fe,updateUBOMapping:ht,uniformBlockBinding:Ke,texStorage2D:me,texStorage3D:zt,texSubImage2D:Be,texSubImage3D:be,compressedTexSubImage2D:_e,compressedTexSubImage3D:Xe,scissor:De,viewport:Ne,reset:Et}}function u_(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ce,d=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(L){}function b(L,y){return g?new OffscreenCanvas(L,y):ma("canvas")}function p(L,y,q,z){let ne=1,oe=ve(L);if((oe.width>z||oe.height>z)&&(ne=z/Math.max(oe.width,oe.height)),ne<1||y===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let qe=y?zo:Math.floor,Be=qe(ne*oe.width),be=qe(ne*oe.height);u===void 0&&(u=b(Be,be));let _e=q?b(Be,be):u;return _e.width=Be,_e.height=be,_e.getContext("2d").drawImage(L,0,0,Be,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Be+"x"+be+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function m(L){let y=ve(L);return Vl(y.width)&&Vl(y.height)}function v(L){return o?!1:L.wrapS!==vn||L.wrapT!==vn||L.minFilter!==jt&&L.minFilter!==Xt}function x(L,y){return L.generateMipmaps&&y&&L.minFilter!==jt&&L.minFilter!==Xt}function _(L){s.generateMipmap(L)}function S(L,y,q,z,ne=!1){if(o===!1)return y;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=y;if(y===s.RED&&(q===s.FLOAT&&(oe=s.R32F),q===s.HALF_FLOAT&&(oe=s.R16F),q===s.UNSIGNED_BYTE&&(oe=s.R8)),y===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(oe=s.R8UI),q===s.UNSIGNED_SHORT&&(oe=s.R16UI),q===s.UNSIGNED_INT&&(oe=s.R32UI),q===s.BYTE&&(oe=s.R8I),q===s.SHORT&&(oe=s.R16I),q===s.INT&&(oe=s.R32I)),y===s.RG&&(q===s.FLOAT&&(oe=s.RG32F),q===s.HALF_FLOAT&&(oe=s.RG16F),q===s.UNSIGNED_BYTE&&(oe=s.RG8)),y===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(oe=s.RG8UI),q===s.UNSIGNED_SHORT&&(oe=s.RG16UI),q===s.UNSIGNED_INT&&(oe=s.RG32UI),q===s.BYTE&&(oe=s.RG8I),q===s.SHORT&&(oe=s.RG16I),q===s.INT&&(oe=s.RG32I)),y===s.RGBA){let qe=ne?No:ft.getTransfer(z);q===s.FLOAT&&(oe=s.RGBA32F),q===s.HALF_FLOAT&&(oe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(oe=qe===Mt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(L,y,q){return x(L,q)===!0||L.isFramebufferTexture&&L.minFilter!==jt&&L.minFilter!==Xt?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function R(L){return L===jt||L===Do||L===Ms?s.NEAREST:s.LINEAR}function E(L){let y=L.target;y.removeEventListener("dispose",E),M(y),y.isVideoTexture&&d.delete(y)}function B(L){let y=L.target;y.removeEventListener("dispose",B),G(y)}function M(L){let y=n.get(L);if(y.__webglInit===void 0)return;let q=L.source,z=f.get(q);if(z){let ne=z[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(L),Object.keys(z).length===0&&f.delete(q)}n.remove(L)}function T(L){let y=n.get(L);s.deleteTexture(y.__webglTexture);let q=L.source,z=f.get(q);delete z[y.__cacheKey],a.memory.textures--}function G(L){let y=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let ne=0;ne<y.__webglFramebuffer[z].length;ne++)s.deleteFramebuffer(y.__webglFramebuffer[z][ne]);else s.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)s.deleteFramebuffer(y.__webglFramebuffer[z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=L.textures;for(let z=0,ne=q.length;z<ne;z++){let oe=n.get(q[z]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(q[z])}n.remove(L)}let X=0;function C(){X=0}function F(){let L=X;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),X+=1,L}function A(L){let y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function K(L,y){let q=n.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){let z=L.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(q,L,y);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+y)}function O(L,y){let q=n.get(L);if(L.version>0&&q.__version!==L.version){pe(q,L,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+y)}function I(L,y){let q=n.get(L);if(L.version>0&&q.__version!==L.version){pe(q,L,y);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+y)}function D(L,y){let q=n.get(L);if(L.version>0&&q.__version!==L.version){we(q,L,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+y)}let V={[Ci]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},ae={[jt]:s.NEAREST,[Do]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[Xt]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},Te={[im]:s.NEVER,[lm]:s.ALWAYS,[sm]:s.LESS,[Zf]:s.LEQUAL,[rm]:s.EQUAL,[cm]:s.GEQUAL,[am]:s.GREATER,[om]:s.NOTEQUAL};function j(L,y,q){if(y.type===ti&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Xt||y.magFilter===oa||y.magFilter===Ms||y.magFilter===Bn||y.minFilter===Xt||y.minFilter===oa||y.minFilter===Ms||y.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(s.texParameteri(L,s.TEXTURE_WRAP_S,V[y.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,V[y.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,V[y.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ae[y.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ae[y.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==vn||y.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,R(y.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==jt&&y.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===jt||y.minFilter!==Ms&&y.minFilter!==Bn||y.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ie(L,y){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",E));let z=y.source,ne=f.get(z);ne===void 0&&(ne={},f.set(z,ne));let oe=A(y);if(oe!==L.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[oe].usedTimes++;let qe=ne[L.__cacheKey];qe!==void 0&&(ne[L.__cacheKey].usedTimes--,qe.usedTimes===0&&T(y)),L.__cacheKey=oe,L.__webglTexture=ne[oe].texture}return q}function pe(L,y,q){let z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=s.TEXTURE_3D);let ne=ie(L,y),oe=y.source;t.bindTexture(z,L.__webglTexture,s.TEXTURE0+q);let qe=n.get(oe);if(oe.version!==qe.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);let Be=ft.getPrimaries(ft.workingColorSpace),be=y.colorSpace===qi?null:ft.getPrimaries(y.colorSpace),_e=y.colorSpace===qi||Be===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Xe=v(y)&&m(y.image)===!1,me=p(y.image,Xe,!1,i.maxTextureSize);me=le(y,me);let zt=m(me)||o,st=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),De=S(y.internalFormat,st,Fe,y.colorSpace,y.isVideoTexture);j(z,y,zt);let Ne,ht=y.mipmaps,Ke=o&&y.isVideoTexture!==!0&&De!==Kf,Et=qe.__version===void 0||ne===!0,H=oe.dataReady,ye=w(y,me,zt);if(y.isDepthTexture)De=s.DEPTH_COMPONENT,o?y.type===ti?De=s.DEPTH_COMPONENT32F:y.type===Xi?De=s.DEPTH_COMPONENT24:y.type===Es?De=s.DEPTH24_STENCIL8:De=s.DEPTH_COMPONENT16:y.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ts&&De===s.DEPTH_COMPONENT&&y.type!==Rh&&y.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Xi,Fe=r.convert(y.type)),y.format===gr&&De===s.DEPTH_COMPONENT&&(De=s.DEPTH_STENCIL,y.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Es,Fe=r.convert(y.type))),Et&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,De,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,De,me.width,me.height,0,st,Fe,null));else if(y.isDataTexture)if(ht.length>0&&zt){Ke&&Et&&t.texStorage2D(s.TEXTURE_2D,ye,De,ht[0].width,ht[0].height);for(let J=0,ge=ht.length;J<ge;J++)Ne=ht[J],Ke?H&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ne.width,Ne.height,st,Fe,Ne.data):t.texImage2D(s.TEXTURE_2D,J,De,Ne.width,Ne.height,0,st,Fe,Ne.data);y.generateMipmaps=!1}else Ke?(Et&&t.texStorage2D(s.TEXTURE_2D,ye,De,me.width,me.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,st,Fe,me.data)):t.texImage2D(s.TEXTURE_2D,0,De,me.width,me.height,0,st,Fe,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,De,ht[0].width,ht[0].height,me.depth);for(let J=0,ge=ht.length;J<ge;J++)Ne=ht[J],y.format!==kn?st!==null?Ke?H&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ne.width,Ne.height,me.depth,st,Ne.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,De,Ne.width,Ne.height,me.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ne.width,Ne.height,me.depth,st,Fe,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,De,Ne.width,Ne.height,me.depth,0,st,Fe,Ne.data)}else{Ke&&Et&&t.texStorage2D(s.TEXTURE_2D,ye,De,ht[0].width,ht[0].height);for(let J=0,ge=ht.length;J<ge;J++)Ne=ht[J],y.format!==kn?st!==null?Ke?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Ne.width,Ne.height,st,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,J,De,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?H&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ne.width,Ne.height,st,Fe,Ne.data):t.texImage2D(s.TEXTURE_2D,J,De,Ne.width,Ne.height,0,st,Fe,Ne.data)}else if(y.isDataArrayTexture)Ke?(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,De,me.width,me.height,me.depth),H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,st,Fe,me.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,me.width,me.height,me.depth,0,st,Fe,me.data);else if(y.isData3DTexture)Ke?(Et&&t.texStorage3D(s.TEXTURE_3D,ye,De,me.width,me.height,me.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,st,Fe,me.data)):t.texImage3D(s.TEXTURE_3D,0,De,me.width,me.height,me.depth,0,st,Fe,me.data);else if(y.isFramebufferTexture){if(Et)if(Ke)t.texStorage2D(s.TEXTURE_2D,ye,De,me.width,me.height);else{let J=me.width,ge=me.height;for(let Se=0;Se<ye;Se++)t.texImage2D(s.TEXTURE_2D,Se,De,J,ge,0,st,Fe,null),J>>=1,ge>>=1}}else if(ht.length>0&&zt){if(Ke&&Et){let J=ve(ht[0]);t.texStorage2D(s.TEXTURE_2D,ye,De,J.width,J.height)}for(let J=0,ge=ht.length;J<ge;J++)Ne=ht[J],Ke?H&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,st,Fe,Ne):t.texImage2D(s.TEXTURE_2D,J,De,st,Fe,Ne);y.generateMipmaps=!1}else if(Ke){if(Et){let J=ve(me);t.texStorage2D(s.TEXTURE_2D,ye,De,J.width,J.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,st,Fe,me)}else t.texImage2D(s.TEXTURE_2D,0,De,st,Fe,me);x(y,zt)&&_(z),qe.__version=oe.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function we(L,y,q){if(y.image.length!==6)return;let z=ie(L,y),ne=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let oe=n.get(ne);if(ne.version!==oe.__version||z===!0){t.activeTexture(s.TEXTURE0+q);let qe=ft.getPrimaries(ft.workingColorSpace),Be=y.colorSpace===qi?null:ft.getPrimaries(y.colorSpace),be=y.colorSpace===qi||qe===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Xe=y.image[0]&&y.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!_e&&!Xe?me[J]=p(y.image[J],!1,!0,i.maxCubemapSize):me[J]=Xe?y.image[J].image:y.image[J],me[J]=le(y,me[J]);let zt=me[0],st=m(zt)||o,Fe=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Ne=S(y.internalFormat,Fe,De,y.colorSpace),ht=o&&y.isVideoTexture!==!0,Ke=oe.__version===void 0||z===!0,Et=ne.dataReady,H=w(y,zt,st);j(s.TEXTURE_CUBE_MAP,y,st);let ye;if(_e){ht&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Ne,zt.width,zt.height);for(let J=0;J<6;J++){ye=me[J].mipmaps;for(let ge=0;ge<ye.length;ge++){let Se=ye[ge];y.format!==kn?Fe!==null?ht?Et&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,Se.width,Se.height,Fe,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,Se.width,Se.height,Fe,De,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Ne,Se.width,Se.height,0,Fe,De,Se.data)}}}else{if(ye=y.mipmaps,ht&&Ke){ye.length>0&&H++;let J=ve(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Ne,J.width,J.height)}for(let J=0;J<6;J++)if(Xe){ht?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Fe,De,me[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ne,me[J].width,me[J].height,0,Fe,De,me[J].data);for(let ge=0;ge<ye.length;ge++){let ot=ye[ge].image[J].image;ht?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,ot.width,ot.height,Fe,De,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Ne,ot.width,ot.height,0,Fe,De,ot.data)}}else{ht?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,De,me[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ne,Fe,De,me[J]);for(let ge=0;ge<ye.length;ge++){let Se=ye[ge];ht?Et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Fe,De,Se.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Ne,Fe,De,Se.image[J])}}}x(y,st)&&_(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Ae(L,y,q,z,ne,oe){let qe=r.convert(q.format,q.colorSpace),Be=r.convert(q.type),be=S(q.internalFormat,qe,Be,q.colorSpace);if(!n.get(y).__hasExternalTextures){let Xe=Math.max(1,y.width>>oe),me=Math.max(1,y.height>>oe);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,be,Xe,me,y.depth,0,qe,Be,null):t.texImage2D(ne,oe,be,Xe,me,0,qe,Be,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),k(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,ne,n.get(q).__webglTexture,0,re(y)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,ne,n.get(q).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(L,y,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),y.depthBuffer&&!y.stencilBuffer){let z=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||k(y)){let ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ti?z=s.DEPTH_COMPONENT32F:ne.type===Xi&&(z=s.DEPTH_COMPONENT24));let oe=re(y);k(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,z,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,z,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,z,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(y.depthBuffer&&y.stencilBuffer){let z=re(y);q&&k(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,z,s.DEPTH24_STENCIL8,y.width,y.height):k(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{let z=y.textures;for(let ne=0;ne<z.length;ne++){let oe=z[ne],qe=r.convert(oe.format,oe.colorSpace),Be=r.convert(oe.type),be=S(oe.internalFormat,qe,Be,oe.colorSpace),_e=re(y);q&&k(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,be,y.width,y.height):k(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,be,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,be,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(L,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let z=n.get(y.depthTexture).__webglTexture,ne=re(y);if(y.depthTexture.format===Ts)k(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,z,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,z,0);else if(y.depthTexture.format===gr)k(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,z,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ee(L){let y=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ze(y.__webglFramebuffer,L)}else if(q){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]=s.createRenderbuffer(),Me(y.__webglDepthbuffer[z],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Me(y.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function U(L,y,q){let z=n.get(L);y!==void 0&&Ae(z.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ee(L)}function fe(L){let y=L.texture,q=n.get(L),z=n.get(y);L.addEventListener("dispose",B);let ne=L.textures,oe=L.isWebGLCubeRenderTarget===!0,qe=ne.length>1,Be=m(L)||o;if(qe||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=y.version,a.memory.textures++),oe){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(o&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let _e=0;_e<y.mipmaps.length;_e++)q.__webglFramebuffer[be][_e]=s.createFramebuffer()}else q.__webglFramebuffer[be]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<y.mipmaps.length;be++)q.__webglFramebuffer[be]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(qe)if(i.drawBuffers)for(let be=0,_e=ne.length;be<_e;be++){let Xe=n.get(ne[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&k(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<ne.length;be++){let _e=ne[be];q.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let Xe=r.convert(_e.format,_e.colorSpace),me=r.convert(_e.type),zt=S(_e.internalFormat,Xe,me,_e.colorSpace,L.isXRRenderTarget===!0),st=re(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,zt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,q.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Me(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),j(s.TEXTURE_CUBE_MAP,y,Be);for(let be=0;be<6;be++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ae(q.__webglFramebuffer[be][_e],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,_e);else Ae(q.__webglFramebuffer[be],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(y,Be)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let be=0,_e=ne.length;be<_e;be++){let Xe=ne[be],me=n.get(Xe);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),j(s.TEXTURE_2D,Xe,Be),Ae(q.__webglFramebuffer,L,Xe,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),x(Xe,Be)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,z.__webglTexture),j(be,y,Be),o&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ae(q.__webglFramebuffer[_e],L,y,s.COLOR_ATTACHMENT0,be,_e);else Ae(q.__webglFramebuffer,L,y,s.COLOR_ATTACHMENT0,be,0);x(y,Be)&&_(be),t.unbindTexture()}L.depthBuffer&&Ee(L)}function te(L){let y=m(L)||o,q=L.textures;for(let z=0,ne=q.length;z<ne;z++){let oe=q[z];if(x(oe,y)){let qe=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Be=n.get(oe).__webglTexture;t.bindTexture(qe,Be),_(qe),t.unbindTexture()}}}function de(L){if(o&&L.samples>0&&k(L)===!1){let y=L.textures,q=L.width,z=L.height,ne=s.COLOR_BUFFER_BIT,oe=[],qe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(L),be=y.length>1;if(be)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){oe.push(s.COLOR_ATTACHMENT0+_e),L.depthBuffer&&oe.push(qe);let Xe=Be.__ignoreDepthValues!==void 0?Be.__ignoreDepthValues:!1;if(Xe===!1&&(L.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),be&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[_e]),Xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[qe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[qe])),be){let me=n.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,q,z,0,0,q,z,ne,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Be.__webglColorRenderbuffer[_e]);let Xe=n.get(y[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}}function re(L){return Math.min(i.maxSamples,L.samples)}function k(L){let y=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(L){let y=a.render.frame;d.get(L)!==y&&(d.set(L,y),L.update())}function le(L,y){let q=L.colorSpace,z=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Gl||q!==rn&&q!==qi&&(ft.getTransfer(q)===Mt?o===!1?e.has("EXT_sRGB")===!0&&z===kn?(L.format=Gl,L.minFilter=Xt,L.generateMipmaps=!1):y=ko.sRGBToLinear(y):(z!==kn||ne!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function ve(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=D,this.rebindTextures=U,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=k}function f_(s,e,t){let n=t.isWebGL2;function i(r,a=qi){let o,c=ft.getTransfer(a);if(r===$i)return s.UNSIGNED_BYTE;if(r===Vf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===j0)return s.BYTE;if(r===Y0)return s.SHORT;if(r===Rh)return s.UNSIGNED_SHORT;if(r===Gf)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===ti)return s.FLOAT;if(r===pa)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===K0)return s.ALPHA;if(r===kn)return s.RGBA;if(r===$0)return s.LUMINANCE;if(r===Z0)return s.LUMINANCE_ALPHA;if(r===Ts)return s.DEPTH_COMPONENT;if(r===gr)return s.DEPTH_STENCIL;if(r===Gl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===qf)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===J0)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Yf)return s.RGBA_INTEGER;if(r===Jc||r===Qc||r===el||r===tl)if(c===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Jc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Jc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qd||r===eu||r===tu||r===nu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Qd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===iu||r===su)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===iu)return c===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===su)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ru||r===au||r===ou||r===cu||r===lu||r===hu||r===du||r===uu||r===fu||r===pu||r===mu||r===gu||r===bu||r===xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ru)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ou)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===du)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xu)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nl||r===vu||r===_u)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===nl)return c===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_u)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Q0||r===yu||r===Mu||r===Su)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===nl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===yu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Su)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Es?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var th=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Lt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},p_={type:"move"},ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,n),m=this._getHandJoint(l,b);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new nn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new Gn({extensions:{fragDepth:!0},vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oe(new Kt(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},ih=class extends Ji{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,b=new nh,p=t.getContextAttributes(),m=null,v=null,x=[],_=[],S=new ce,w=null,R=new Ht;R.layers.enable(1),R.viewport=new gt;let E=new Ht;E.layers.enable(2),E.viewport=new gt;let B=[R,E],M=new th;M.layers.enable(1),M.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=x[j];return ie===void 0&&(ie=new ha,x[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=x[j];return ie===void 0&&(ie=new ha,x[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=x[j];return ie===void 0&&(ie=new ha,x[j]=ie),ie.getHandSpace()};function X(j){let ie=_.indexOf(j.inputSource);if(ie===-1)return;let pe=x[ie];pe!==void 0&&(pe.update(j.inputSource,j.frame,l||a),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function C(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",F);for(let j=0;j<x.length;j++){let ie=_[j];ie!==null&&(_[j]=null,x[j].disconnect(ie))}T=null,G=null,b.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,v=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",C),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pi(f.framebufferWidth,f.framebufferHeight,{format:kn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,pe=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?gr:Ts,pe=p.stencil?Es:Xi);let Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ae),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Pi(u.textureWidth,u.textureHeight,{format:kn,type:$i,depthTexture:new qo(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let Me=e.properties.get(v);Me.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(j){for(let ie=0;ie<j.removed.length;ie++){let pe=j.removed[ie],we=_.indexOf(pe);we>=0&&(_[we]=null,x[we].disconnect(pe))}for(let ie=0;ie<j.added.length;ie++){let pe=j.added[ie],we=_.indexOf(pe);if(we===-1){for(let Me=0;Me<x.length;Me++)if(Me>=_.length){_.push(pe),we=Me;break}else if(_[Me]===null){_[Me]=pe,we=Me;break}if(we===-1)break}let Ae=x[we];Ae&&Ae.connect(pe)}}let A=new N,K=new N;function O(j,ie,pe){A.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);let we=A.distanceTo(K),Ae=ie.projectionMatrix.elements,Me=pe.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),Ee=Ae[14]/(Ae[10]+1),U=(Ae[9]+1)/Ae[5],fe=(Ae[9]-1)/Ae[5],te=(Ae[8]-1)/Ae[0],de=(Me[8]+1)/Me[0],re=ze*te,k=ze*de,se=we/(-te+de),le=se*-te;ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(le),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let ve=ze+se,L=Ee+se,y=re-le,q=k+(we-le),z=U*Ee/L*ve,ne=fe*Ee/L*ve;j.projectionMatrix.makePerspective(y,q,z,ne,ve,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function I(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.texture!==null&&(j.near=b.depthNear,j.far=b.depthFar),M.near=E.near=R.near=j.near,M.far=E.far=R.far=j.far,(T!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,G=M.far,R.near=T,R.far=G,E.near=T,E.far=G,R.updateProjectionMatrix(),E.updateProjectionMatrix(),j.updateProjectionMatrix());let ie=j.parent,pe=M.cameras;I(M,ie);for(let we=0;we<pe.length;we++)I(pe[we],ie);pe.length===2?O(M,R,E):M.projectionMatrix.copy(R.projectionMatrix),D(j,M,ie)};function D(j,ie,pe){pe===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null};let V=null;function ae(j,ie){if(h=ie.getViewerPose(l||a),g=ie,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let we=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,we=!0);for(let Me=0;Me<pe.length;Me++){let ze=pe[Me],Ee=null;if(f!==null)Ee=f.getViewport(ze);else{let fe=d.getViewSubImage(u,ze);Ee=fe.viewport,Me===0&&(e.setRenderTargetTextures(v,fe.colorTexture,u.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(v))}let U=B[Me];U===void 0&&(U=new Ht,U.layers.enable(Me),U.viewport=new gt,B[Me]=U),U.matrix.fromArray(ze.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(ze.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Me===0&&(M.matrix.copy(U.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),we===!0&&M.cameras.push(U)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){let Me=d.getDepthInformation(pe[0]);Me&&Me.isValid&&Me.texture&&b.init(e,Me,i.renderState)}}for(let pe=0;pe<x.length;pe++){let we=_[pe],Ae=x[pe];we!==null&&Ae!==void 0&&Ae.update(we,ie,l||a)}b.render(e,M),V&&V(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Te=new ip;Te.setAnimationLoop(ae),this.setAnimationLoop=function(j){V=j},this.dispose=function(){}}},vs=new Sn,b_=new Ve;function x_(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,np(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),b(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,v,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),x=v.envMap,_=v.envMapRotation;if(x&&(p.envMap.value=x,vs.copy(_),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),p.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(vs)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let S=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*S,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v_(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){let _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",p));let S=x.program;n.updateUBOMapping(v,S);let w=e.render.frame;r[v.id]!==w&&(u(v),r[v.id]=w)}function h(v){let x=d();v.__bindingPointIndex=x;let _=s.createBuffer(),S=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let x=i[v.id],_=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,R=_.length;w<R;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let B=0,M=E.length;B<M;B++){let T=E[B];if(f(T,w,B,S)===!0){let G=T.__offset,X=Array.isArray(T.value)?T.value:[T.value],C=0;for(let F=0;F<X.length;F++){let A=X[F],K=b(A);typeof A=="number"||typeof A=="boolean"?(T.__data[0]=A,s.bufferSubData(s.UNIFORM_BUFFER,G+C,T.__data)):A.isMatrix3?(T.__data[0]=A.elements[0],T.__data[1]=A.elements[1],T.__data[2]=A.elements[2],T.__data[3]=0,T.__data[4]=A.elements[3],T.__data[5]=A.elements[4],T.__data[6]=A.elements[5],T.__data[7]=0,T.__data[8]=A.elements[6],T.__data[9]=A.elements[7],T.__data[10]=A.elements[8],T.__data[11]=0):(A.toArray(T.__data,C),C+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,_,S){let w=v.value,R=x+"_"+_;if(S[R]===void 0)return typeof w=="number"||typeof w=="boolean"?S[R]=w:S[R]=w.clone(),!0;{let E=S[R];if(typeof w=="number"||typeof w=="boolean"){if(E!==w)return S[R]=w,!0}else if(E.equals(w)===!1)return E.copy(w),!0}return!1}function g(v){let x=v.uniforms,_=0,S=16;for(let R=0,E=x.length;R<E;R++){let B=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,T=B.length;M<T;M++){let G=B[M],X=Array.isArray(G.value)?G.value:[G.value];for(let C=0,F=X.length;C<F;C++){let A=X[C],K=b(A),O=_%S;O!==0&&S-O<K.boundary&&(_+=S-O),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=K.storage}}}let w=_%S;return w>0&&(_+=S-w),v.__size=_,v.__cache={},this}function b(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}var xa=class{constructor(e={}){let{canvas:t=wm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,p=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;let x=this,_=!1,S=0,w=0,R=null,E=-1,B=null,M=new gt,T=new gt,G=null,X=new he(0),C=0,F=t.width,A=t.height,K=1,O=null,I=null,D=new gt(0,0,F,A),V=new gt(0,0,F,A),ae=!1,Te=new ga,j=!1,ie=!1,pe=null,we=new Ve,Ae=new ce,Me=new N,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return R===null?K:1}let U=n;function fe(P,W){for(let Q=0;Q<P.length;Q++){let ee=P[Q],$=t.getContext(ee,W);if($!==null)return $}return null}try{let P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){let W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),U=fe(W,P),U===null)throw fe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let te,de,re,k,se,le,ve,L,y,q,z,ne,oe,qe,Be,be,_e,Xe,me,zt,st,Fe,De,Ne;function ht(){te=new Ux(U),de=new Cx(U,te,e),te.init(de),Fe=new f_(U,te,de),re=new d_(U,te,de),k=new zx(U),se=new Qv,le=new u_(U,te,re,se,de,Fe,k),ve=new Lx(x),L=new Nx(x),y=new Wm(U,de),De=new Ax(U,te,y,de),q=new Ox(U,y,k,De),z=new Gx(U,q,y,k),me=new Hx(U,de,le),be=new Px(se),ne=new Jv(x,ve,L,te,de,De,be),oe=new x_(x,se),qe=new t_,Be=new o_(te,de),Xe=new Tx(x,ve,L,re,z,u,c),_e=new h_(x,z,de),Ne=new v_(U,k,de,re),zt=new Rx(U,te,k,de),st=new Fx(U,te,k,de),k.programs=ne.programs,x.capabilities=de,x.extensions=te,x.properties=se,x.renderLists=qe,x.shadowMap=_e,x.state=re,x.info=k}ht();let Ke=new ih(x,U);this.xr=Ke,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(P){P!==void 0&&(K=P,this.setSize(F,A,!1))},this.getSize=function(P){return P.set(F,A)},this.setSize=function(P,W,Q=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,A=W,t.width=Math.floor(P*K),t.height=Math.floor(W*K),Q===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(F*K,A*K).floor()},this.setDrawingBufferSize=function(P,W,Q){F=P,A=W,K=Q,t.width=Math.floor(P*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(D)},this.setViewport=function(P,W,Q,ee){P.isVector4?D.set(P.x,P.y,P.z,P.w):D.set(P,W,Q,ee),re.viewport(M.copy(D).multiplyScalar(K).round())},this.getScissor=function(P){return P.copy(V)},this.setScissor=function(P,W,Q,ee){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,W,Q,ee),re.scissor(T.copy(V).multiplyScalar(K).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(P){re.setScissorTest(ae=P)},this.setOpaqueSort=function(P){O=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(P=!0,W=!0,Q=!0){let ee=0;if(P){let $=!1;if(R!==null){let Re=R.texture.format;$=Re===Yf||Re===jf||Re===Xf}if($){let Re=R.texture.type,Ue=Re===$i||Re===Xi||Re===Rh||Re===Es||Re===Vf||Re===Wf,He=Xe.getClearColor(),We=Xe.getClearAlpha(),et=He.r,je=He.g,$e=He.b;Ue?(f[0]=et,f[1]=je,f[2]=$e,f[3]=We,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=et,g[1]=je,g[2]=$e,g[3]=We,U.clearBufferiv(U.COLOR,0,g))}else ee|=U.COLOR_BUFFER_BIT}W&&(ee|=U.DEPTH_BUFFER_BIT),Q&&(ee|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),qe.dispose(),Be.dispose(),se.dispose(),ve.dispose(),L.dispose(),z.dispose(),De.dispose(),Ne.dispose(),ne.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",On),Ke.removeEventListener("sessionend",vt),pe&&(pe.dispose(),pe=null),gn.stop()};function Et(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let P=k.autoReset,W=_e.enabled,Q=_e.autoUpdate,ee=_e.needsUpdate,$=_e.type;ht(),k.autoReset=P,_e.enabled=W,_e.autoUpdate=Q,_e.needsUpdate=ee,_e.type=$}function ye(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function J(P){let W=P.target;W.removeEventListener("dispose",J),ge(W)}function ge(P){Se(P),se.remove(P)}function Se(P){let W=se.get(P).programs;W!==void 0&&(W.forEach(function(Q){ne.releaseProgram(Q)}),P.isShaderMaterial&&ne.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Q,ee,$,Re){W===null&&(W=ze);let Ue=$.isMesh&&$.matrixWorld.determinant()<0,He=s0(P,W,Q,ee,$);re.setMaterial(ee,Ue);let We=Q.index,et=1;if(ee.wireframe===!0){if(We=q.getWireframeAttribute(Q),We===void 0)return;et=2}let je=Q.drawRange,$e=Q.attributes.position,Ot=je.start*et,An=(je.start+je.count)*et;Re!==null&&(Ot=Math.max(Ot,Re.start*et),An=Math.min(An,(Re.start+Re.count)*et)),We!==null?(Ot=Math.max(Ot,0),An=Math.min(An,We.count)):$e!=null&&(Ot=Math.max(Ot,0),An=Math.min(An,$e.count));let en=An-Ot;if(en<0||en===1/0)return;De.setup($,ee,He,Q,We);let vi,Ct=zt;if(We!==null&&(vi=y.get(We),Ct=st,Ct.setIndex(vi)),$.isMesh)ee.wireframe===!0?(re.setLineWidth(ee.wireframeLinewidth*Ee()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if($.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),re.setLineWidth(Je*Ee()),$.isLineSegments?Ct.setMode(U.LINES):$.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else $.isPoints?Ct.setMode(U.POINTS):$.isSprite&&Ct.setMode(U.TRIANGLES);if($.isBatchedMesh)Ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ct.renderInstances(Ot,en,$.count);else if(Q.isInstancedBufferGeometry){let Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Yc=Math.min(Q.instanceCount,Je);Ct.renderInstances(Ot,en,Yc)}else Ct.render(Ot,en)};function ot(P,W,Q){P.transparent===!0&&P.side===dt&&P.forceSinglePass===!1?(P.side=Gt,P.needsUpdate=!0,Za(P,W,Q),P.side=hi,P.needsUpdate=!0,Za(P,W,Q),P.side=dt):Za(P,W,Q)}this.compile=function(P,W,Q=null){Q===null&&(Q=P),p=Be.get(Q),p.init(),v.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),P!==Q&&P.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(x._useLegacyLights);let ee=new Set;return P.traverse(function($){let Re=$.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let He=Re[Ue];ot(He,Q,$),ee.add(He)}else ot(Re,Q,$),ee.add(Re)}),v.pop(),p=null,ee},this.compileAsync=function(P,W,Q=null){let ee=this.compile(P,W,Q);return new Promise($=>{function Re(){if(ee.forEach(function(Ue){se.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){$(P);return}setTimeout(Re,10)}te.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let xt=null;function an(P){xt&&xt(P)}function On(){gn.stop()}function vt(){gn.start()}let gn=new ip;gn.setAnimationLoop(an),typeof self!="undefined"&&gn.setContext(self),this.setAnimationLoop=function(P){xt=P,Ke.setAnimationLoop(P),P===null?gn.stop():gn.start()},Ke.addEventListener("sessionstart",On),Ke.addEventListener("sessionend",vt),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(W),W=Ke.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,W,R),p=Be.get(P,v.length),p.init(),v.push(p),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Te.setFromProjectionMatrix(we),ie=this.localClippingEnabled,j=be.init(this.clippingPlanes,ie),b=qe.get(P,m.length),b.init(),m.push(b),ci(P,W,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(O,I),this.info.render.frame++,j===!0&&be.beginShadows();let Q=p.state.shadowsArray;if(_e.render(Q,P,W),j===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1)&&Xe.render(b,P),p.setupLights(x._useLegacyLights),W.isArrayCamera){let ee=W.cameras;for(let $=0,Re=ee.length;$<Re;$++){let Ue=ee[$];kd(b,P,Ue,Ue.viewport)}}else kd(b,P,W);R!==null&&(le.updateMultisampleRenderTarget(R),le.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(x,P,W),De.resetDefaultState(),E=-1,B=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function ci(P,W,Q,ee){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Te.intersectsSprite(P)){ee&&Me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(we);let Ue=z.update(P),He=P.material;He.visible&&b.push(P,Ue,He,Q,Me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Te.intersectsObject(P))){let Ue=z.update(P),He=P.material;if(ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Me.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Me.copy(Ue.boundingSphere.center)),Me.applyMatrix4(P.matrixWorld).applyMatrix4(we)),Array.isArray(He)){let We=Ue.groups;for(let et=0,je=We.length;et<je;et++){let $e=We[et],Ot=He[$e.materialIndex];Ot&&Ot.visible&&b.push(P,Ue,Ot,Q,Me.z,$e)}}else He.visible&&b.push(P,Ue,He,Q,Me.z,null)}}let Re=P.children;for(let Ue=0,He=Re.length;Ue<He;Ue++)ci(Re[Ue],W,Q,ee)}function kd(P,W,Q,ee){let $=P.opaque,Re=P.transmissive,Ue=P.transparent;p.setupLightsView(Q),j===!0&&be.setGlobalState(x.clippingPlanes,Q),Re.length>0&&i0($,Re,W,Q),ee&&re.viewport(M.copy(ee)),$.length>0&&$a($,W,Q),Re.length>0&&$a(Re,W,Q),Ue.length>0&&$a(Ue,W,Q),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function i0(P,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Re=de.isWebGL2;pe===null&&(pe=new Pi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?pa:$i,minFilter:Bn,samples:Re?4:0})),x.getDrawingBufferSize(Ae),Re?pe.setSize(Ae.x,Ae.y):pe.setSize(zo(Ae.x),zo(Ae.y));let Ue=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(X),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();let He=x.toneMapping;x.toneMapping=Ki,$a(P,Q,ee),le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe);let We=!1;for(let et=0,je=W.length;et<je;et++){let $e=W[et],Ot=$e.object,An=$e.geometry,en=$e.material,vi=$e.group;if(en.side===dt&&Ot.layers.test(ee.layers)){let Ct=en.side;en.side=Gt,en.needsUpdate=!0,Bd(Ot,Q,ee,An,en,vi),en.side=Ct,en.needsUpdate=!0,We=!0}}We===!0&&(le.updateMultisampleRenderTarget(pe),le.updateRenderTargetMipmap(pe)),x.setRenderTarget(Ue),x.setClearColor(X,C),x.toneMapping=He}function $a(P,W,Q){let ee=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Re=P.length;$<Re;$++){let Ue=P[$],He=Ue.object,We=Ue.geometry,et=ee===null?Ue.material:ee,je=Ue.group;He.layers.test(Q.layers)&&Bd(He,W,Q,We,et,je)}}function Bd(P,W,Q,ee,$,Re){P.onBeforeRender(x,W,Q,ee,$,Re),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(x,W,Q,ee,P,Re),$.transparent===!0&&$.side===dt&&$.forceSinglePass===!1?($.side=Gt,$.needsUpdate=!0,x.renderBufferDirect(Q,W,ee,$,P,Re),$.side=hi,$.needsUpdate=!0,x.renderBufferDirect(Q,W,ee,$,P,Re),$.side=dt):x.renderBufferDirect(Q,W,ee,$,P,Re),P.onAfterRender(x,W,Q,ee,$,Re)}function Za(P,W,Q){W.isScene!==!0&&(W=ze);let ee=se.get(P),$=p.state.lights,Re=p.state.shadowsArray,Ue=$.state.version,He=ne.getParameters(P,$.state,Re,W,Q),We=ne.getProgramCacheKey(He),et=ee.programs;ee.environment=P.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(P.isMeshStandardMaterial?L:ve).get(P.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,et===void 0&&(P.addEventListener("dispose",J),et=new Map,ee.programs=et);let je=et.get(We);if(je!==void 0){if(ee.currentProgram===je&&ee.lightsStateVersion===Ue)return Gd(P,He),je}else He.uniforms=ne.getUniforms(P),P.onBuild(Q,He,x),P.onBeforeCompile(He,x),je=ne.acquireProgram(He,We),et.set(We,je),ee.uniforms=He.uniforms;let $e=ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=be.uniform),Gd(P,He),ee.needsLights=a0(P),ee.lightsStateVersion=Ue,ee.needsLights&&($e.ambientLightColor.value=$.state.ambient,$e.lightProbe.value=$.state.probe,$e.directionalLights.value=$.state.directional,$e.directionalLightShadows.value=$.state.directionalShadow,$e.spotLights.value=$.state.spot,$e.spotLightShadows.value=$.state.spotShadow,$e.rectAreaLights.value=$.state.rectArea,$e.ltc_1.value=$.state.rectAreaLTC1,$e.ltc_2.value=$.state.rectAreaLTC2,$e.pointLights.value=$.state.point,$e.pointLightShadows.value=$.state.pointShadow,$e.hemisphereLights.value=$.state.hemi,$e.directionalShadowMap.value=$.state.directionalShadowMap,$e.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$e.spotShadowMap.value=$.state.spotShadowMap,$e.spotLightMatrix.value=$.state.spotLightMatrix,$e.spotLightMap.value=$.state.spotLightMap,$e.pointShadowMap.value=$.state.pointShadowMap,$e.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=je,ee.uniformsList=null,je}function Hd(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=fr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Gd(P,W){let Q=se.get(P);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function s0(P,W,Q,ee,$){W.isScene!==!0&&(W=ze),le.resetTextureUnits();let Re=W.fog,Ue=ee.isMeshStandardMaterial?W.environment:null,He=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rn,We=(ee.isMeshStandardMaterial?L:ve).get(ee.envMap||Ue),et=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,je=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),$e=!!Q.morphAttributes.position,Ot=!!Q.morphAttributes.normal,An=!!Q.morphAttributes.color,en=Ki;ee.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(en=x.toneMapping);let vi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ct=vi!==void 0?vi.length:0,Je=se.get(ee),Yc=p.state.lights;if(j===!0&&(ie===!0||P!==B)){let Fn=P===B&&ee.id===E;be.setState(ee,P,Fn)}let Tt=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Yc.state.version||Je.outputColorSpace!==He||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==We||ee.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==je||Je.morphTargets!==$e||Je.morphNormals!==Ot||Je.morphColors!==An||Je.toneMapping!==en||de.isWebGL2===!0&&Je.morphTargetsCount!==Ct)&&(Tt=!0):(Tt=!0,Je.__version=ee.version);let us=Je.currentProgram;Tt===!0&&(us=Za(ee,W,$));let Vd=!1,$r=!1,Kc=!1,ln=us.getUniforms(),fs=Je.uniforms;if(re.useProgram(us.program)&&(Vd=!0,$r=!0,Kc=!0),ee.id!==E&&(E=ee.id,$r=!0),Vd||B!==P){ln.setValue(U,"projectionMatrix",P.projectionMatrix),ln.setValue(U,"viewMatrix",P.matrixWorldInverse);let Fn=ln.map.cameraPosition;Fn!==void 0&&Fn.setValue(U,Me.setFromMatrixPosition(P.matrixWorld)),de.logarithmicDepthBuffer&&ln.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ln.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,$r=!0,Kc=!0)}if($.isSkinnedMesh){ln.setOptional(U,$,"bindMatrix"),ln.setOptional(U,$,"bindMatrixInverse");let Fn=$.skeleton;Fn&&(de.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),ln.setValue(U,"boneTexture",Fn.boneTexture,le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(ln.setOptional(U,$,"batchingTexture"),ln.setValue(U,"batchingTexture",$._matricesTexture,le));let $c=Q.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0&&de.isWebGL2===!0)&&me.update($,Q,us),($r||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,ln.setValue(U,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(fs.envMap.value=We,fs.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),$r&&(ln.setValue(U,"toneMappingExposure",x.toneMappingExposure),Je.needsLights&&r0(fs,Kc),Re&&ee.fog===!0&&oe.refreshFogUniforms(fs,Re),oe.refreshMaterialUniforms(fs,ee,K,A,pe),fr.upload(U,Hd(Je),fs,le)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(fr.upload(U,Hd(Je),fs,le),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ln.setValue(U,"center",$.center),ln.setValue(U,"modelViewMatrix",$.modelViewMatrix),ln.setValue(U,"normalMatrix",$.normalMatrix),ln.setValue(U,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Fn=ee.uniformsGroups;for(let Zc=0,o0=Fn.length;Zc<o0;Zc++)if(de.isWebGL2){let Wd=Fn[Zc];Ne.update(Wd,us),Ne.bind(Wd,us)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return us}function r0(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function a0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,W,Q){se.get(P.texture).__webglTexture=W,se.get(P.depthTexture).__webglTexture=Q;let ee=se.get(P);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){let Q=se.get(P);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Q=0){R=P,S=W,w=Q;let ee=!0,$=null,Re=!1,Ue=!1;if(P){let We=se.get(P);We.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(U.FRAMEBUFFER,null),ee=!1):We.__webglFramebuffer===void 0?le.setupRenderTarget(P):We.__hasExternalTextures&&le.rebindTextures(P,se.get(P.texture).__webglTexture,se.get(P.depthTexture).__webglTexture);let et=P.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);let je=se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[W])?$=je[W][Q]:$=je[W],Re=!0):de.isWebGL2&&P.samples>0&&le.useMultisampledRTT(P)===!1?$=se.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[Q]:$=je,M.copy(P.viewport),T.copy(P.scissor),G=P.scissorTest}else M.copy(D).multiplyScalar(K).floor(),T.copy(V).multiplyScalar(K).floor(),G=ae;if(re.bindFramebuffer(U.FRAMEBUFFER,$)&&de.drawBuffers&&ee&&re.drawBuffers(P,$),re.viewport(M),re.scissor(T),re.setScissorTest(G),Re){let We=se.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,We.__webglTexture,Q)}else if(Ue){let We=se.get(P.texture),et=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,Q||0,et)}E=-1},this.readRenderTargetPixels=function(P,W,Q,ee,$,Re,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){re.bindFramebuffer(U.FRAMEBUFFER,He);try{let We=P.texture,et=We.format,je=We.type;if(et!==kn&&Fe.convert(et)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=je===pa&&(te.has("EXT_color_buffer_half_float")||de.isWebGL2&&te.has("EXT_color_buffer_float"));if(je!==$i&&Fe.convert(je)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===ti&&(de.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ee&&Q>=0&&Q<=P.height-$&&U.readPixels(W,Q,ee,$,Fe.convert(et),Fe.convert(je),Re)}finally{let We=R!==null?se.get(R).__webglFramebuffer:null;re.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,W,Q=0){let ee=Math.pow(2,-Q),$=Math.floor(W.image.width*ee),Re=Math.floor(W.image.height*ee);le.setTexture2D(W,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,P.x,P.y,$,Re),re.unbindTexture()},this.copyTextureToTexture=function(P,W,Q,ee=0){let $=W.image.width,Re=W.image.height,Ue=Fe.convert(Q.format),He=Fe.convert(Q.type);le.setTexture2D(Q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ee,P.x,P.y,$,Re,Ue,He,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ee,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Ue,W.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,ee,P.x,P.y,Ue,He,W.image),ee===0&&Q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Q,ee,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=Math.round(P.max.x-P.min.x),Ue=Math.round(P.max.y-P.min.y),He=P.max.z-P.min.z+1,We=Fe.convert(ee.format),et=Fe.convert(ee.type),je;if(ee.isData3DTexture)le.setTexture3D(ee,0),je=U.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)le.setTexture2DArray(ee,0),je=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ee.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ee.unpackAlignment);let $e=U.getParameter(U.UNPACK_ROW_LENGTH),Ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),An=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),vi=U.getParameter(U.UNPACK_SKIP_IMAGES),Ct=Q.isCompressedTexture?Q.mipmaps[$]:Q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,P.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,P.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,P.min.z),Q.isDataTexture||Q.isData3DTexture?U.texSubImage3D(je,$,W.x,W.y,W.z,Re,Ue,He,We,et,Ct.data):ee.isCompressedArrayTexture?U.compressedTexSubImage3D(je,$,W.x,W.y,W.z,Re,Ue,He,We,Ct.data):U.texSubImage3D(je,$,W.x,W.y,W.z,Re,Ue,He,We,et,Ct),U.pixelStorei(U.UNPACK_ROW_LENGTH,$e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,An),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vi),$===0&&ee.generateMipmaps&&U.generateMipmap(je),re.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?le.setTextureCube(P,0):P.isData3DTexture?le.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?le.setTexture2DArray(P,0):le.setTexture2D(P,0),re.unbindTexture()},this.resetState=function(){S=0,w=0,R=null,re.reset(),De.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ph?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===xc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},sh=class extends xa{};sh.prototype.isWebGL1Renderer=!0;var Xo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},va=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ep("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new N,Rs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cs=class extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ir,ta=new N,sr=new N,rr=new N,ar=new ce,na=new ce,lp=new Ve,_o=new N,ia=new N,yo=new N,gf=new ce,Rl=new ce,bf=new ce,ii=class extends yt{constructor(e=new Cs){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Er(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Rs(n,3,0,!1)),ir.setAttribute("uv",new Rs(n,2,3,!1))}this.geometry=ir,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),lp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Mo(_o.set(-.5,-.5,0),rr,a,sr,i,r),Mo(ia.set(.5,-.5,0),rr,a,sr,i,r),Mo(yo.set(.5,.5,0),rr,a,sr,i,r),gf.set(0,0),Rl.set(1,0),bf.set(1,1);let o=e.ray.intersectTriangle(_o,ia,yo,!1,ta);if(o===null&&(Mo(ia.set(-.5,.5,0),rr,a,sr,i,r),Rl.set(0,1),o=e.ray.intersectTriangle(_o,yo,ia,!1,ta),o===null))return;let c=e.ray.origin.distanceTo(ta);c<e.near||c>e.far||t.push({distance:c,point:ta.clone(),uv:ws.getInterpolation(ta,_o,ia,yo,gf,Rl,bf,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mo(s,e,t,n,i,r){ar.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(na.x=r*ar.x-i*ar.y,na.y=i*ar.x+r*ar.y):na.copy(ar),s.copy(e),s.x+=na.x,s.y+=na.y,s.applyMatrix4(lp)}var xf=new N,vf=new gt,_f=new gt,__=new N,yf=new Ve,So=new N,Cl=new In,Mf=new Ve,Pl=new vr,jo=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jd,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(i),e.ray.intersectsSphere(Cl)!==!1&&(Mf.copy(i).invert(),Pl.copy(e.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===X0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;vf.fromBufferAttribute(i.attributes.skinIndex,e),_f.fromBufferAttribute(i.attributes.skinWeight,e),xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=_f.getComponent(r);if(a!==0){let o=vf.getComponent(r);yf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(__.copy(xf).applyMatrix4(yf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},_a=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Yo=class extends nn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=jt,h=jt,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sf=new Ve,y_=new Ve,Ko=class s{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:y_;Sf.multiplyMatrices(o,t[r]),Sf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yo(t,e,e,kn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new _a),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ps=class extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new Ve,wf=new Ve,wo=[],Ef=new Mn,M_=new Ve,sa=new Oe,ra=new In,si=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,M_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Ef.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),ra.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,or),wf.multiplyMatrices(n,or),sa.matrixWorld=wf,sa.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){let c=wo[a];c.instanceId=r,c.object=this,t.push(c)}wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yo(new Float32Array(i*this.count),i,this.count,qf,ti));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tf=new N,Af=new N,Rf=new Ve,Ll=new vr,Eo=new In,Tr=class extends yt{constructor(e=new mt,t=new ya){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Tf.fromBufferAttribute(t,i-1),Af.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tf.distanceTo(Af);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Rf.copy(i).invert(),Ll.copy(e.ray).applyMatrix4(Rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new N,h=new N,d=new N,u=new N,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let m=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=m,_=v-1;x<_;x+=f){let S=g.getX(x),w=g.getX(x+1);if(l.fromBufferAttribute(p,S),h.fromBufferAttribute(p,w),Ll.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let x=m,_=v-1;x<_;x+=f){if(l.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Ll.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Cf=new N,Pf=new N,$o=class extends Tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cf.fromBufferAttribute(t,i),Pf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cf.distanceTo(Pf);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zo=class extends Tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ls=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lf=new Ve,rh=new vr,To=new In,Ao=new N,Ar=class extends yt{constructor(e=new mt,t=new Ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Lf.copy(i).invert(),rh.copy(e.ray).applyMatrix4(Lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,b=f;g<b;g++){let p=l.getX(g);Ao.fromBufferAttribute(d,p),If(Ao,p,c,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,b=f;g<b;g++)Ao.fromBufferAttribute(d,g),If(Ao,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function If(s,e,t,n,i,r,a){let o=rh.distanceSqToPoint(s);if(o<t){let c=new N;rh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Jo=class extends nn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ce:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,i=[],r=[],a=[],o=new N,c=new Ve;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Yt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Yt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ma=class extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ah=class extends Ma{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Ro=new N,Il=new Nh,Dl=new Nh,Nl=new Nh,Sa=class extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Ro.subVectors(i[0],i[1]).add(i[0]),l=Ro);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),p<1e-4&&(p=b),Il.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,b,p),Dl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,b,p),Nl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,b,p)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Dl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Nl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Il.calc(c),Dl.calc(c),Nl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Df(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function S_(s,e){let t=1-s;return t*t*e}function w_(s,e){return 2*(1-s)*s*e}function E_(s,e){return s*s*e}function da(s,e,t,n){return S_(s,e)+w_(s,t)+E_(s,n)}function T_(s,e){let t=1-s;return t*t*t*e}function A_(s,e){let t=1-s;return 3*t*t*s*e}function R_(s,e){return 3*(1-s)*s*s*e}function C_(s,e){return s*s*s*e}function ua(s,e,t,n,i){return T_(s,e)+A_(s,t)+R_(s,n)+C_(s,i)}var Qo=class extends Vn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ua(e,i.x,r.x,a.x,o.x),ua(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends Vn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ua(e,i.x,r.x,a.x,o.x),ua(e,i.y,r.y,a.y,o.y),ua(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Vn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Vn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(da(e,i.x,r.x,a.x),da(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Vn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(da(e,i.x,r.x,a.x),da(e,i.y,r.y,a.y),da(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Df(o,c.x,l.x,h.x,d.x),Df(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:Sa,CubicBezierCurve:Qo,CubicBezierCurve3:oh,EllipseCurve:Ma,LineCurve:ec,LineCurve3:ch,QuadraticBezierCurve:tc,QuadraticBezierCurve3:lh,SplineCurve:nc}),dh=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new hh[i.type]().fromJSON(i))}return this}},ic=class extends dh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ec(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new tc(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Qo(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new nc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Ma(e,t,n,i,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wa=class s extends mt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Yt(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new N,u=new ce,f=new N,g=new N,b=new N,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let v=0;v<=t;v++){let x=n+v*h*i,_=Math.sin(x),S=Math.cos(x);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*_,d.y=e[w].y,d.z=e[w].x*S,a.push(d.x,d.y,d.z),u.x=v/t,u.y=w/(e.length-1),o.push(u.x,u.y);let R=c[3*w+0]*_,E=c[3*w+1],B=c[3*w+0]*S;l.push(R,E,B)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let _=x+v*e.length,S=_,w=_+e.length,R=_+e.length+1,E=_+1;r.push(S,w,E),r.push(R,E,w)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var sc=class s extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new N,h=new ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wn=class s extends mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,b=[],p=n/2,m=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(f,2));function v(){let _=new N,S=new N,w=0,R=(t-e)/n;for(let E=0;E<=r;E++){let B=[],M=E/r,T=M*(t-e)+e;for(let G=0;G<=i;G++){let X=G/i,C=X*c+o,F=Math.sin(C),A=Math.cos(C);S.x=T*F,S.y=-M*n+p,S.z=T*A,d.push(S.x,S.y,S.z),_.set(F,R,A).normalize(),u.push(_.x,_.y,_.z),f.push(X,1-M),B.push(g++)}b.push(B)}for(let E=0;E<i;E++)for(let B=0;B<r;B++){let M=b[B][E],T=b[B+1][E],G=b[B+1][E+1],X=b[B][E+1];h.push(M,T,X),h.push(T,G,X),w+=6}l.addGroup(m,w,0),m+=w}function x(_){let S=g,w=new ce,R=new N,E=0,B=_===!0?e:t,M=_===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,p*M,0),u.push(0,M,0),f.push(.5,.5),g++;let T=g;for(let G=0;G<=i;G++){let C=G/i*c+o,F=Math.cos(C),A=Math.sin(C);R.x=B*A,R.y=p*M,R.z=B*F,d.push(R.x,R.y,R.z),u.push(0,M,0),w.x=F*.5+.5,w.y=A*.5*M+.5,f.push(w.x,w.y),g++}for(let G=0;G<i;G++){let X=S+G,C=T+G;_===!0?h.push(C,C+1,X):h.push(C+1,C,X),E+=3}l.addGroup(m,E,_===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class s extends Wn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qi=class extends ic{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ic().fromJSON(i))}return this}},P_={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=hp(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,d,u,f;if(n&&(r=U_(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Ea(r,a,t,o,c,f,0),a}};function hp(s,e,t,n,i){let r,a;if(i===X_(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Nf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Nf(r,s[r],s[r+1],a);return a&&_c(a,a.next)&&(Aa(a),a=a.next),a}function Is(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_c(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ea(s,e,t,n,i,r,a){if(!s)return;!a&&r&&B_(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?I_(s,n,i,r):L_(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Aa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=D_(Is(s),e,t),Ea(s,e,t,n,i,r,2)):a===2&&N_(s,e,t,n,i,r):Ea(Is(s),e,t,n,i,r,1);break}}}function L_(s){let e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,u=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&hr(i,o,r,c,a,l,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I_(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Pt(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,d=r.y,u=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,b=o>c?o>l?o:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,m=uh(f,g,e,t,n),v=uh(b,p,e,t,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=m&&_&&_.z<=v;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&hr(o,h,c,d,l,u,x.x,x.y)&&Pt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=b&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&hr(o,h,c,d,l,u,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=p&&x!==i&&x!==a&&hr(o,h,c,d,l,u,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=b&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&hr(o,h,c,d,l,u,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D_(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!_c(i,r)&&dp(i,n,n.next,r)&&Ta(i,r)&&Ta(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Aa(n),Aa(n.next),n=s=r),n=n.next}while(n!==s);return Is(n)}function N_(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&V_(a,o)){let c=up(a,o);a=Is(a,a.next),c=Is(c,c.next),Ea(a,e,t,n,i,r,0),Ea(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function U_(s,e,t,n){let i=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=hp(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(G_(l));for(i.sort(O_),r=0;r<i.length;r++)t=F_(i[r],t);return t}function O_(s,e){return s.x-e.x}function F_(s,e){let t=z_(s,e);if(!t)return e;let n=up(t,s);return Is(n,n.next),Is(t,t.next)}function z_(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,c=i.x,l=i.y,h=1/0,d;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&hr(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Ta(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&k_(i,t)))&&(i=t,h=d)),t=t.next;while(t!==o);return i}function k_(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function B_(s,e,t,n){let i=s;do i.z===0&&(i.z=uh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,H_(i)}function H_(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function uh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function G_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function hr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function V_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!W_(s,e)&&(Ta(s,e)&&Ta(e,s)&&q_(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||_c(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _c(s,e){return s.x===e.x&&s.y===e.y}function dp(s,e,t,n){let i=Po(Pt(s,e,t)),r=Po(Pt(s,e,n)),a=Po(Pt(t,n,s)),o=Po(Pt(t,n,e));return!!(i!==r&&a!==o||i===0&&Co(s,t,e)||r===0&&Co(s,n,e)||a===0&&Co(t,s,n)||o===0&&Co(t,e,n))}function Co(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Po(s){return s>0?1:s<0?-1:0}function W_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&dp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ta(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function q_(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function up(s,e){let t=new fh(s.i,s.x,s.y),n=new fh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nf(s,e,t,n){let i=new fh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Aa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Zi=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Uf(e),Of(n,e);let a=e.length;t.forEach(Uf);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Of(n,t[c]);let o=P_.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Uf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Of(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var rc=class s extends mt{constructor(e=new Qi([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ge(i,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:j_,x,_=!1,S,w,R,E;m&&(x=m.getSpacedPoints(h),_=!0,u=!1,S=m.computeFrenetFrames(h,!1),w=new N,R=new N,E=new N),u||(p=0,f=0,g=0,b=0);let B=o.extractPoints(l),M=B.shape,T=B.holes;if(!Zi.isClockWise(M)){M=M.reverse();for(let U=0,fe=T.length;U<fe;U++){let te=T[U];Zi.isClockWise(te)&&(T[U]=te.reverse())}}let X=Zi.triangulateShape(M,T),C=M;for(let U=0,fe=T.length;U<fe;U++){let te=T[U];M=M.concat(te)}function F(U,fe,te){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(fe,te)}let A=M.length,K=X.length;function O(U,fe,te){let de,re,k,se=U.x-fe.x,le=U.y-fe.y,ve=te.x-U.x,L=te.y-U.y,y=se*se+le*le,q=se*L-le*ve;if(Math.abs(q)>Number.EPSILON){let z=Math.sqrt(y),ne=Math.sqrt(ve*ve+L*L),oe=fe.x-le/z,qe=fe.y+se/z,Be=te.x-L/ne,be=te.y+ve/ne,_e=((Be-oe)*L-(be-qe)*ve)/(se*L-le*ve);de=oe+se*_e-U.x,re=qe+le*_e-U.y;let Xe=de*de+re*re;if(Xe<=2)return new ce(de,re);k=Math.sqrt(Xe/2)}else{let z=!1;se>Number.EPSILON?ve>Number.EPSILON&&(z=!0):se<-Number.EPSILON?ve<-Number.EPSILON&&(z=!0):Math.sign(le)===Math.sign(L)&&(z=!0),z?(de=-le,re=se,k=Math.sqrt(y)):(de=se,re=le,k=Math.sqrt(y/2))}return new ce(de/k,re/k)}let I=[];for(let U=0,fe=C.length,te=fe-1,de=U+1;U<fe;U++,te++,de++)te===fe&&(te=0),de===fe&&(de=0),I[U]=O(C[U],C[te],C[de]);let D=[],V,ae=I.concat();for(let U=0,fe=T.length;U<fe;U++){let te=T[U];V=[];for(let de=0,re=te.length,k=re-1,se=de+1;de<re;de++,k++,se++)k===re&&(k=0),se===re&&(se=0),V[de]=O(te[de],te[k],te[se]);D.push(V),ae=ae.concat(V)}for(let U=0;U<p;U++){let fe=U/p,te=f*Math.cos(fe*Math.PI/2),de=g*Math.sin(fe*Math.PI/2)+b;for(let re=0,k=C.length;re<k;re++){let se=F(C[re],I[re],de);we(se.x,se.y,-te)}for(let re=0,k=T.length;re<k;re++){let se=T[re];V=D[re];for(let le=0,ve=se.length;le<ve;le++){let L=F(se[le],V[le],de);we(L.x,L.y,-te)}}}let Te=g+b;for(let U=0;U<A;U++){let fe=u?F(M[U],ae[U],Te):M[U];_?(R.copy(S.normals[0]).multiplyScalar(fe.x),w.copy(S.binormals[0]).multiplyScalar(fe.y),E.copy(x[0]).add(R).add(w),we(E.x,E.y,E.z)):we(fe.x,fe.y,0)}for(let U=1;U<=h;U++)for(let fe=0;fe<A;fe++){let te=u?F(M[fe],ae[fe],Te):M[fe];_?(R.copy(S.normals[U]).multiplyScalar(te.x),w.copy(S.binormals[U]).multiplyScalar(te.y),E.copy(x[U]).add(R).add(w),we(E.x,E.y,E.z)):we(te.x,te.y,d/h*U)}for(let U=p-1;U>=0;U--){let fe=U/p,te=f*Math.cos(fe*Math.PI/2),de=g*Math.sin(fe*Math.PI/2)+b;for(let re=0,k=C.length;re<k;re++){let se=F(C[re],I[re],de);we(se.x,se.y,d+te)}for(let re=0,k=T.length;re<k;re++){let se=T[re];V=D[re];for(let le=0,ve=se.length;le<ve;le++){let L=F(se[le],V[le],de);_?we(L.x,L.y+x[h-1].y,x[h-1].x+te):we(L.x,L.y,d+te)}}}j(),ie();function j(){let U=i.length/3;if(u){let fe=0,te=A*fe;for(let de=0;de<K;de++){let re=X[de];Ae(re[2]+te,re[1]+te,re[0]+te)}fe=h+p*2,te=A*fe;for(let de=0;de<K;de++){let re=X[de];Ae(re[0]+te,re[1]+te,re[2]+te)}}else{for(let fe=0;fe<K;fe++){let te=X[fe];Ae(te[2],te[1],te[0])}for(let fe=0;fe<K;fe++){let te=X[fe];Ae(te[0]+A*h,te[1]+A*h,te[2]+A*h)}}n.addGroup(U,i.length/3-U,0)}function ie(){let U=i.length/3,fe=0;pe(C,fe),fe+=C.length;for(let te=0,de=T.length;te<de;te++){let re=T[te];pe(re,fe),fe+=re.length}n.addGroup(U,i.length/3-U,1)}function pe(U,fe){let te=U.length;for(;--te>=0;){let de=te,re=te-1;re<0&&(re=U.length-1);for(let k=0,se=h+p*2;k<se;k++){let le=A*k,ve=A*(k+1),L=fe+de+le,y=fe+re+le,q=fe+re+ve,z=fe+de+ve;Me(L,y,q,z)}}}function we(U,fe,te){c.push(U),c.push(fe),c.push(te)}function Ae(U,fe,te){ze(U),ze(fe),ze(te);let de=i.length/3,re=v.generateTopUV(n,i,de-3,de-2,de-1);Ee(re[0]),Ee(re[1]),Ee(re[2])}function Me(U,fe,te,de){ze(U),ze(fe),ze(de),ze(fe),ze(te),ze(de);let re=i.length/3,k=v.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Ee(k[0]),Ee(k[1]),Ee(k[3]),Ee(k[1]),Ee(k[2]),Ee(k[3])}function ze(U){i.push(c[U*3+0]),i.push(c[U*3+1]),i.push(c[U*3+2])}function Ee(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Y_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hh[i.type]().fromJSON(i)),new s(n,e.options)}},j_={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ce(r,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],b=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-d),new ce(u,1-g),new ce(b,1-m)]:[new ce(o,1-c),new ce(h,1-d),new ce(f,1-g),new ce(p,1-m)]}};function Y_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ac=class s extends mt{constructor(e=new Qi([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ge(i,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(a,2));function l(h){let d=i.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];Zi.isClockWise(v)===!0&&(g[p]=v.reverse())}let b=Zi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){let v=f[p];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,m=b.length;p<m;p++){let v=b[p],x=v[0]+d,_=v[1]+d,S=v[2]+d;n.push(x,_,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return K_(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function K_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var es=class s extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new N,u=new N,f=[],g=[],b=[],p=[];for(let m=0;m<=n;m++){let v=[],x=m/n,_=0;m===0&&a===0?_=.5/t:m===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let w=S/t;d.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),p.push(w+_,1-x),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let x=h[m][v+1],_=h[m][v],S=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(x,_,w),(m!==n-1||c<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Cr=class s extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new N,d=new N,u=new N;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let b=g/i*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(b),d.y=(e+t*Math.cos(p))*Math.sin(b),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let b=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,v=(i+1)*f+g;a.push(b,p,v),a.push(p,m,v)}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wn=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},pn=class extends un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sn=class extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Lo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Z_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ff(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function fp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eu:r=e,o=2*t-n;break;case Tu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eu:a=e,c=2*n-t;break;case Tu:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,p=b*g,m=-u*p+2*u*b-u*g,v=(1+u)*p+(-1.5-2*u)*b+(-.5+u)*g+1,x=(-1-f)*p+(1.5+f)*b+.5*g,_=f*p-f*b;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+v*a[l+S]+x*a[c+S]+_*a[d+S];return r}},mh=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},gh=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&$_(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===il,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let b=t[d+g];if(b!==t[u+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=As;var ns=class extends qn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=br;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends qn{};oc.prototype.ValueTypeName="color";var Li=class extends qn{};Li.prototype.ValueTypeName="number";var bh=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},di=class extends qn{InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion";di.prototype.DefaultInterpolation=As;di.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends qn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=br;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends qn{};Ii.prototype.ValueTypeName="vector";var cc=class{constructor(e,t=-1,n,i=em){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Q_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Z_(c);c=Ff(c,1,h),l=Ff(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,b){if(f.length!==0){let p=[],m=[];fp(f,p,m,g),p.length!==0&&b.push(new d(u,p,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)f[u[g].morphTargets[b]]=-1;for(let b in f){let p=[],m=[];for(let v=0;v!==u[g].morphTargets.length;++v){let x=u[g];p.push(x.time),m.push(x.morphTarget===b?1:0)}i.push(new Li(".morphTargetInfluence["+b+"]",p,m))}c=f.length*a}else{let f=".bones["+t[d].name+"]";n(Ii,f+".position",u,"pos",i),n(di,f+".quaternion",u,"rot",i),n(Ii,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function J_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return oc;case"quaternion":return di;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Q_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=J_(s.type);if(s.times===void 0){let t=[],n=[];fp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ji={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},xh=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ey=new xh,Di=class{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},vh=class extends Error{constructor(e,t){super(e),this.response=t}},Ra=class extends Di{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ji.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ei[e],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0,b=0,p=new ReadableStream({start(m){v();function v(){d.read().then(({done:x,value:_})=>{if(x)m.close();else{b+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let w=0,R=h.length;w<R;w++){let E=h[w];E.onProgress&&E.onProgress(S)}m.enqueue(_),v()}})}}});return new Response(p)}else throw new vh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ji.add(e,l);let h=Ei[e];delete Ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var _h=class extends Di{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ji.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ma("img");function c(){h(),ji.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var lc=class extends Di{constructor(e){super(e)}load(e,t,n,i){let r=new nn,a=new _h(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Pr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},hc=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ul=new Ve,zf=new N,kf=new N,Ca=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yh=class extends Ca{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lr=class extends Pr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bf=new Ve,aa=new N,Ol=new N,Mh=class extends Ca{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),n.position.copy(aa),Ol.copy(n.position),Ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ol),n.updateMatrixWorld(),i.makeTranslation(-aa.x,-aa.y,-aa.z),Bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}},dc=class extends Pr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sh=class extends Ca{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ss=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var uc=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ji.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ji.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ji.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ji.add(e,c),r.manager.itemStart(e)}};var Uh="\\[\\]\\.:\\/",ty=new RegExp("["+Uh+"]","g"),Oh="[^"+Uh+"]",ny="[^"+Uh.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",Oh),sy=/(WCOD+)?/.source.replace("WCOD",ny),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),oy=new RegExp("^"+iy+sy+ry+ay+"$"),cy=["material","materials","bones","map"],wh=class{constructor(e,t,n){let i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(e){let t=oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=wh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v1=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);var Dn=[{id:"drizzie",name:"Drizzie City",nx:8,nz:8,x0:-560,z0:-560,kind:"metro"},{id:"serrana",name:"Vila Serrana",nx:4,nz:4,x0:-3e3,z0:-2300,kind:"town",surface:"cobble"},{id:"azul",name:"Porto Azul",nx:5,nz:3,x0:1900,z0:1300,kind:"port"},{id:"monte",name:"Monte Alto",nx:4,nz:3,x0:2700,z0:-2300,kind:"mountain",surface:"cobble"}],yc=Object.fromEntries(Dn.map(s=>[s.id,s])),Ni=s=>s.x0+s.nx*140,as=s=>s.z0+s.nz*140;function Mc(s,e,t){return s.kind==="metro"?e===1&&t===5||e===5&&t===6||e===2&&t===1?"park":e>=2&&e<=5&&t>=2&&t<=5?"downtown":e>=6?"industrial":"residential":s.kind==="town"||s.kind==="mountain"?e===1&&t===1?"park":"town":t===s.nz-1?"port":e>=3?"industrial":"town"}var pp=[[-2100,-4300],[-1750,-3100],[-1400,-2050],[-1250,-1e3],[-1080,0],[-850,800],[-350,1400],[250,1700],[500,2100]],Xn=54,Ds={asphalt:{name:"Asfalto",mu:.85,crr:.008,shake:0},cobble:{name:"Cal\xE7amento",mu:.7,crr:.014,shake:.035},gravel:{name:"Cascalho",mu:.58,crr:.022,shake:.025},dirt:{name:"Terra",mu:.5,crr:.03,shake:.02},mud:{name:"Lama",mu:.3,crr:.075,shake:.012},concrete:{name:"Concreto",mu:.8,crr:.009,shake:0}},Fh=[{id:"BR-101",from:["drizzie",0,4],to:["serrana",4,2],pts:[[-570,0],[-720,0],[-900,0],[-1100,-160],[-1350,-480],[-1560,-820],[-1760,-1180],[-1980,-1520],[-2200,-1840],[-2330,-2020],[-2430,-2020]],hills:7},{id:"SP-280",from:["drizzie",8,4],to:["azul",2,0],pts:[[570,0],[760,0],[960,0],[1100,0],[1350,80],[1620,280],[1860,560],[2060,860],[2180,1100],[2180,1290]],hills:9},{id:"BR-040",from:["azul",5,1],to:["monte",2,3],pts:[[2610,1440],[2760,1440],[2950,1380],[3150,1150],[3300,800],[3350,400],[3250,0],[3150,-400],[3250,-800],[3200,-1200],[3050,-1550],[2980,-1750],[2980,-1870]],hills:16},{id:"RS-030",from:["drizzie",4,0],to:null,pts:[[0,-570],[0,-800],[-120,-1080],[-420,-1380],[-800,-1640],[-1150,-1880],[-1450,-2e3],[-1720,-2150],[-1960,-2420],[-2100,-2650],[-2100,-2900],[-2100,-3100]],hills:10},{id:"Estrada do Caf\xE9",surface:"dirt",half:5.5,from:["hw","BR-101"],to:null,pts:[[-1760,-1180],[-1880,-1080],[-2020,-980],[-2250,-850],[-2450,-640],[-2600,-470],[-2600,-400]]},{id:"Trilha do Rio Escuro",surface:"mud",half:5,from:["hw","RS-030"],to:null,pts:[[-420,-1380],[-380,-1500],[-300,-1700],[-150,-2e3],[-50,-2300],[100,-2500],[100,-2570]]},{id:"Estrada da Olaria",surface:"gravel",half:6,from:["hw","SP-280"],to:null,pts:[[1350,80],[1380,-40],[1450,-200],[1550,-500],[1650,-760],[1650,-820]]}];for(let s of Fh)s.surface=s.surface||"asphalt",s.half=s.half||9;var jn=[{id:"garagem",name:"Garagem Drizzie",city:"drizzie",bx:2,bz:6,side:"n",kind:"garage",color:3108830},{id:"cd",name:"Centro de Distribui\xE7\xE3o",city:"drizzie",bx:6,bz:1,side:"w",kind:"warehouse",color:14721056},{id:"mercado",name:"Mercado Central",city:"drizzie",bx:3,bz:3,side:"w",kind:"market",color:3055186},{id:"hospital",name:"Hospital Municipal",city:"drizzie",bx:4,bz:5,side:"e",kind:"hospital",color:15790320},{id:"obra",name:"Canteiro de Obras",city:"drizzie",bx:1,bz:2,side:"e",kind:"construction",color:15774720},{id:"posto",name:"Posto Rodovi\xE1rio",city:"drizzie",bx:5,bz:7,side:"n",kind:"fuel",color:13639712},{id:"siderurgica",name:"Sider\xFArgica A\xE7o Forte",city:"drizzie",bx:7,bz:5,side:"w",kind:"steel",color:9059114},{id:"silo",name:"Silo Agr\xEDcola",city:"serrana",bx:0,bz:1,side:"e",kind:"silo",color:13152874},{id:"fabrica",name:"F\xE1brica de M\xF3veis",city:"serrana",bx:2,bz:2,side:"w",kind:"factory",color:10119999},{id:"mineradora",name:"Mineradora Serra Negra",city:"monte",bx:3,bz:0,side:"w",kind:"quarry",color:7232074},{id:"vinicola",name:"Vin\xEDcola Monte Alto",city:"monte",bx:0,bz:2,side:"e",kind:"farm",color:8068922},{id:"porto",name:"Porto Azul",city:"azul",bx:2,bz:2,side:"n",kind:"port",color:2068400},{id:"refinaria",name:"Refinaria Petrosul",city:"azul",bx:4,bz:1,side:"w",kind:"refinery",color:14211288},{id:"fazenda",name:"Fazenda Boa Vista",hw:"BR-101",lot:[-862,11,-742,131],side:"n",kind:"farm",color:11549230},{id:"eolica",name:"Parque E\xF3lico",hw:"SP-280",lot:[900,-131,1020,-11],side:"s",kind:"wind",color:15658734},{id:"serraria",name:"Serraria Pinheiro",hw:"RS-030",lot:[-2089,-3020,-1969,-2900],side:"w",kind:"sawmill",color:8016432},{id:"cafezal",name:"Fazenda Caf\xE9 do Vale",hw:"Estrada do Caf\xE9",lot:[-2660,-400,-2540,-280],side:"n",kind:"farm",color:5978654},{id:"madeireira",name:"Madeireira Rio Escuro",hw:"Trilha do Rio Escuro",lot:[40,-2690,160,-2570],side:"s",kind:"sawmill",color:5192228},{id:"olaria",name:"Olaria Barro Vermelho",hw:"Estrada da Olaria",lot:[1590,-940,1710,-820],side:"s",kind:"quarry",color:10504746},{id:"pedreira",name:"Pedreira Rocha Viva",hw:"RS-030",lot:[-2160,-3220,-2040,-3100],side:"s",kind:"quarry",color:10261124}],Ui=Object.fromEntries(jn.map(s=>[s.id,s])),Nr=[{id:"mini",track:1.25,cgH:.8,drive:.45,tireMu:.95,steerLock:.66,name:"Mini Carga 1.0",hp:95,cap:1.5,mass:1,level:1,price:0,rigid:!0,axles:2,model:"labo",color:4030417,vmax:95,desc:"Picape de carga compacta para entregas leves."},{id:"urbano",track:1.6,cgH:1,drive:.5,tireMu:.95,steerLock:.62,name:"Leve Ba\xFA 4.5",hp:160,cap:5,mass:4.5,level:2,price:8e3,rigid:!0,axles:2,model:"canter",color:15921906,vmax:100,desc:"Caminh\xE3o leve com ba\xFA, \xE1gil na cidade."},{id:"toco",track:1.85,cgH:1.2,drive:.5,tireMu:.92,steerLock:.6,name:"Toco 11-240",hp:240,cap:12,mass:7.5,level:3,price:15e3,rigid:!0,axles:2,cab:"cabover",roof:"mid",color:3108830,vmax:100,desc:"Caminh\xE3o m\xE9dio de carroceria ba\xFA."},{id:"cavalo",track:2,cgH:1.05,drive:.33,tireMu:.9,steerLock:.58,cfg:"6x2",name:"Cavalo 360",hp:360,cap:30,mass:8.5,level:6,price:6e4,rigid:!1,axles:3,model:"volvo",cab:"cabover",roof:"high",color:11866651,vmax:110,desc:"Cavalo mec\xE2nico cara-chata para carretas."},{id:"rodo",track:2,cgH:1.05,drive:.5,tireMu:.92,steerLock:.56,cfg:"6x4",name:"Rodomax 480",hp:480,cap:45,mass:9,level:10,price:14e4,rigid:!1,axles:3,model:"volvo",cab:"cabover",roof:"high",color:1916782,vmax:110,desc:"Cavalo 6x2 de teto alto para longas viagens."},{id:"titan",track:2,cgH:1.1,drive:.52,tireMu:.93,steerLock:.54,cfg:"6x4",name:"Titan 620 Bicudo",hp:620,cap:65,mass:10.5,level:15,price:28e4,rigid:!1,axles:3,cab:"conventional",roof:"high",color:2238513,vmax:105,desc:"Bicudo 6x4 de cap\xF4 longo e muita tra\xE7\xE3o."},{id:"colosso",track:2.05,cgH:1.15,drive:.55,tireMu:.95,steerLock:.5,cfg:"8x4",name:"Colosso 750 8x4",hp:750,cap:90,mass:12.5,level:20,price:5e5,rigid:!1,axles:4,cab:"conventional",roof:"high",color:15769600,vmax:95,desc:"Gigante para cargas especiais e indivis\xEDveis."}],La=Object.fromEntries(Nr.map(s=>[s.id,s])),Ia=[{id:"encomendas",name:"Encomendas",icon:"\u{1F4E6}",t:1,lvl:1,trailer:"box",rate:1,from:["cd"],to:["mercado","hospital","posto","obra","fabrica"]},{id:"medicamentos",name:"Medicamentos",icon:"\u{1F48A}",t:1.5,lvl:1,trailer:"box",rate:1.35,fragile:!0,from:["cd","porto"],to:["hospital"]},{id:"eletronicos",name:"Eletr\xF4nicos",icon:"\u{1F4FA}",t:2.5,lvl:2,trailer:"box",rate:1.4,fragile:!0,from:["porto"],to:["cd","mercado"]},{id:"hortifruti",name:"Hortifr\xFAti",icon:"\u{1F96C}",t:4,lvl:1,trailer:"box",rate:1.1,from:["fazenda"],to:["mercado","cd"]},{id:"moveis",name:"M\xF3veis",icon:"\u{1F6CB}\uFE0F",t:6,lvl:3,trailer:"box",rate:1.15,fragile:!0,from:["fabrica"],to:["mercado","cd","obra"]},{id:"bebidas",name:"Bebidas",icon:"\u{1F964}",t:9,lvl:3,trailer:"box",rate:1.05,from:["cd"],to:["mercado","posto"]},{id:"racao",name:"Ra\xE7\xE3o Animal",icon:"\u{1F33E}",t:12,lvl:4,trailer:"box",rate:1,from:["silo"],to:["fazenda"]},{id:"trator",name:"Trator Agr\xEDcola",icon:"\u{1F69C}",t:14,lvl:6,trailer:"lowboy",model:"tractor",rate:1.5,from:["porto"],to:["fazenda","silo"]},{id:"madeira",name:"Toras de Madeira",icon:"\u{1FAB5}",t:18,lvl:6,trailer:"flatbed",model:"logs",rate:1.05,from:["serraria","madeireira"],to:["fabrica","obra","porto"]},{id:"conteiner",name:"Cont\xEAiner 40 p\xE9s",icon:"\u{1F6A2}",t:26,lvl:7,trailer:"flatbed",model:"container",rate:1.15,from:["porto"],to:["cd","siderurgica","fabrica"]},{id:"graos",name:"Soja a Granel",icon:"\u{1FAD8}",t:28,lvl:8,trailer:"bulk",rate:1,from:["fazenda","silo"],to:["porto"]},{id:"combustivel",name:"Combust\xEDvel",icon:"\u26FD",t:30,lvl:9,trailer:"tank",rate:1.45,hazard:!0,from:["refinaria"],to:["posto","fazenda","pedreira"]},{id:"cimento",name:"Cimento",icon:"\u{1F3D7}\uFE0F",t:32,lvl:10,trailer:"tank",model:"silo",rate:1.05,from:["pedreira"],to:["obra"]},{id:"vinho",name:"Vinho em Caixas",icon:"\u{1F377}",t:7,lvl:3,trailer:"box",rate:1.3,fragile:!0,from:["vinicola"],to:["mercado","cd","porto"]},{id:"minerio",name:"Min\xE9rio de Ferro",icon:"\u26CF\uFE0F",t:34,lvl:11,trailer:"bulk",rate:1.1,from:["mineradora"],to:["siderurgica","porto"]},{id:"granito",name:"Blocos de Granito",icon:"\u{1FAA8}",t:40,lvl:12,trailer:"flatbed",model:"stone",rate:1.2,from:["mineradora"],to:["obra","porto"]},{id:"cafe",name:"Sacas de Caf\xE9",icon:"\u2615",t:10,lvl:2,trailer:"box",rate:1.25,from:["cafezal"],to:["porto","cd","mercado"]},{id:"tijolos",name:"Tijolos (paletes)",icon:"\u{1F9F1}",t:16,lvl:5,trailer:"flatbed",model:"bricks",rate:1.1,from:["olaria"],to:["obra","cd","fabrica"]},{id:"graos_bitrem",name:"Soja \u2014 Bitrem",icon:"\u{1F69B}",t:48,lvl:14,trailer:"bitrem",sub:"bulk",rate:1.15,from:["fazenda","silo","cafezal"],to:["porto"]},{id:"madeira_bitrem",name:"Toras \u2014 Bitrem",icon:"\u{1F332}",t:50,lvl:15,trailer:"bitrem",sub:"flatbed",model:"logs",rate:1.2,from:["serraria","madeireira"],to:["fabrica","porto"]},{id:"comb_bitrem",name:"Combust\xEDvel \u2014 Bitrem",icon:"\u26FD",t:45,lvl:16,trailer:"bitrem",sub:"tank",hazard:!0,rate:1.55,from:["refinaria"],to:["posto","fazenda","mineradora"]},{id:"bobinas",name:"Bobinas de A\xE7o",icon:"\u{1F9F2}",t:36,lvl:11,trailer:"flatbed",model:"coils",rate:1.2,from:["siderurgica"],to:["porto","fabrica"]},{id:"vigas",name:"Vigas de A\xE7o",icon:"\u{1F3E2}",t:42,lvl:13,trailer:"flatbed",model:"beams",rate:1.25,from:["siderurgica"],to:["obra"]},{id:"escavadeira",name:"Escavadeira",icon:"\u{1F6A7}",t:48,lvl:15,trailer:"lowboy",model:"excavator",rate:1.55,from:["porto"],to:["pedreira","obra"]},{id:"transformador",name:"Transformador",icon:"\u26A1",t:56,lvl:18,trailer:"lowboy",model:"transformer",rate:1.7,fragile:!0,from:["siderurgica","porto"],to:["refinaria","eolica"]},{id:"pa_eolica",name:"P\xE1 E\xF3lica",icon:"\u{1F300}",t:62,lvl:20,trailer:"lowboy",model:"blade",rate:1.9,fragile:!0,from:["porto"],to:["eolica"]},{id:"prensa",name:"Prensa Industrial",icon:"\u{1F3ED}",t:85,lvl:24,trailer:"lowboy",model:"press",rate:2.1,from:["porto"],to:["siderurgica","fabrica"]}],mn=Object.fromEntries(Ia.map(s=>[s.id,s])),Ur=s=>200+180*(s-1);function mp(s){return s?s.trailer==="bitrem"?13:s.trailer==="lowboy"?9:s.trailer==="tank"?7:6.5:0}function gp(s,e){let t=s.trailer==="bitrem"?s.sub:s.trailer;return e?1.6:t==="box"?2.4:t==="tank"?2.3:t==="bulk"?2.1:t==="flatbed"?{logs:2.2,container:2.6,coils:1.85,beams:1.9,stone:2.1,bricks:2}[s.model]||2:{tractor:2.3,excavator:2.3,transformer:2.5,blade:2.6,press:2.7}[s.model]||2.2}var Rt={x0:-3400,z0:-3500,x1:3700,z1:2300};var Jt=1024,bp=4,zh={};function xp(s,e){Jt=s,bp=e}function En(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function tt(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Vt(s,e,t,n,i,r=!0){let a=s.getImageData(0,0,e,t),o=a.data,c=En(i);for(let l=0;l<o.length;l+=4){let h=(c()-.5)*n;r?(o[l]+=h,o[l+1]+=h,o[l+2]+=h):(o[l]+=h,o[l+1]+=(c()-.5)*n,o[l+2]+=(c()-.5)*n)}s.putImageData(a,0,0)}function Oi(s,e,t,n,i,r,a){let o=En(a);for(let c=0;c<n;c++){s.fillStyle=i[o()*i.length|0],s.globalAlpha=.25+o()*.5;let l=.5+o()*r;s.beginPath(),s.arc(o()*e,o()*t,l,0,Math.PI*2),s.fill()}s.globalAlpha=1}function nt(s,e=!0){let t=new Jo(s);return t.colorSpace=Bt,t.anisotropy=bp,t.generateMipmaps=!0,t.minFilter=Bn,t.magFilter=Xt,e&&(t.wrapS=t.wrapT=Ci),t}function it(s,e){return zh[s]||(zh[s]=e()),zh[s]}function Sc(s,e,t,n="#3b3d40"){s.fillStyle=n,s.fillRect(0,0,e,e),Oi(s,e,e,e*6,["#5a5c60","#2a2b2d","#6b6b6b","#232323"],e/512,t),Vt(s,e,e,22,t+1)}var Pe={asphalt:()=>it("asphalt",()=>{let s=Jt/2,[e,t]=tt(s,s);return Sc(t,s,11),nt(e)}),road:()=>it("road",()=>{let s=Jt,[e,t]=tt(s,s);Sc(t,s,21);let n=s/20;t.fillStyle="rgba(20,20,20,0.18)";for(let a of[1.6,3.4,6.6,8.4])t.fillRect((10+a)*n-n*.6,0,n*1.2,s),t.fillRect((10-a)*n-n*.6,0,n*1.2,s);let i=(a,o,c,l)=>{t.fillStyle=a,l?t.fillRect(o*n-c*n/2,s*.1,c*n,s*l):t.fillRect(o*n-c*n/2,0,c*n,s)};i("#e8b923",9.8,.15),i("#e8b923",10.2,.15),i("#f2f2f2",5,.15,.45),i("#f2f2f2",15,.15,.45),i("#f2f2f2",.5,.18),i("#f2f2f2",19.5,.18);let r=En(5);t.globalCompositeOperation="source-atop";for(let a=0;a<s*3;a++)t.fillStyle="rgba(60,60,62,0.35)",t.fillRect(r()*s,r()*s,1+r()*3,1+r()*3);return t.globalCompositeOperation="source-over",nt(e)}),intersection:()=>it("intersection",()=>{let s=Jt,[e,t]=tt(s,s);Sc(t,s,31);let n=s/20;t.fillStyle="rgba(240,240,240,0.92)";for(let i=0;i<8;i++){let r=(1.5+i*2.2)*n;t.fillRect(r,.3*n,1.1*n,2.6*n),t.fillRect(r,s-2.9*n,1.1*n,2.6*n),t.fillRect(.3*n,r,2.6*n,1.1*n),t.fillRect(s-2.9*n,r,2.6*n,1.1*n)}return Vt(t,s,s,10,32),nt(e,!1)}),concrete:()=>it("concrete",()=>{let s=Jt/2,[e,t]=tt(s,s);t.fillStyle="#a9a69f",t.fillRect(0,0,s,s),Vt(t,s,s,26,41),Oi(t,s,s,s*2,["#8f8c86","#bdbab3"],s/400,42),t.strokeStyle="rgba(70,68,64,0.55)",t.lineWidth=Math.max(1,s/256);for(let n=0;n<=4;n++)t.beginPath(),t.moveTo(n*s/4,0),t.lineTo(n*s/4,s),t.stroke(),t.beginPath(),t.moveTo(0,n*s/4),t.lineTo(s,n*s/4),t.stroke();return nt(e)}),lot:()=>it("lot",()=>{let s=Jt/2,[e,t]=tt(s,s);t.fillStyle="#8e8b85",t.fillRect(0,0,s,s),Vt(t,s,s,30,51),Oi(t,s,s,s,["#6f6c66","#a5a29c","#5d5a55"],s/200,52),t.strokeStyle="rgba(50,48,45,0.5)",t.lineWidth=2,t.strokeRect(1,1,s-2,s-2);let n=En(53);for(let i=0;i<6;i++){let r=n()*s,a=n()*s,o=t.createRadialGradient(r,a,0,r,a,s/10);o.addColorStop(0,"rgba(30,30,30,0.25)"),o.addColorStop(1,"rgba(30,30,30,0)"),t.fillStyle=o,t.fillRect(0,0,s,s)}return nt(e)}),grass:()=>it("grass",()=>{let s=Jt/2,[e,t]=tt(s,s);t.fillStyle="#4f7a32",t.fillRect(0,0,s,s);let n=En(61);for(let i=0;i<40;i++){let r=n()*s,a=n()*s,o=s*(.05+n()*.15),c=t.createRadialGradient(r,a,0,r,a,o),l=n()>.5?"96,140,58":"62,96,38";c.addColorStop(0,`rgba(${l},0.45)`),c.addColorStop(1,`rgba(${l},0)`),t.fillStyle=c,t.fillRect(0,0,s,s)}t.lineWidth=1;for(let i=0;i<s*14;i++){let r=n()*s,a=n()*s;t.strokeStyle=n()>.5?"rgba(120,170,70,0.5)":"rgba(40,70,25,0.5)",t.beginPath(),t.moveTo(r,a),t.lineTo(r+(n()-.5)*3,a-2-n()*4),t.stroke()}return Vt(t,s,s,14,62,!1),nt(e)}),field:()=>it("field",()=>{let s=Jt/2,[e,t]=tt(s,s);t.fillStyle="#7a5a36",t.fillRect(0,0,s,s),Vt(t,s,s,30,71);let n=16;for(let i=0;i<n;i++){let r=(i+.5)*(s/n);t.fillStyle="#5d8a2a",t.fillRect(0,r-s/n/4,s,s/n/2)}return Oi(t,s,s,s*4,["#7fae3a","#4a7020","#8fbf4a"],2,72),nt(e)}),sand:()=>it("sand",()=>{let s=Jt/4,[e,t]=tt(s,s);return t.fillStyle="#d6c49a",t.fillRect(0,0,s,s),Vt(t,s,s,26,81),nt(e)}),water:()=>it("water",()=>{let s=Jt/2,[e,t]=tt(s,s);t.fillStyle="#1d5f7d",t.fillRect(0,0,s,s);let n=En(91);for(let i=0;i<900;i++){t.strokeStyle=n()>.5?"rgba(170,220,240,0.22)":"rgba(10,40,60,0.25)",t.lineWidth=1+n()*2;let r=n()*s,a=n()*s,o=6+n()*20;t.beginPath(),t.moveTo(r,a),t.quadraticCurveTo(r+o/2,a-3,r+o,a),t.stroke()}return nt(e)}),roof:()=>it("roof",()=>{let s=Jt/4,[e,t]=tt(s,s);return t.fillStyle="#5c5a57",t.fillRect(0,0,s,s),Vt(t,s,s,34,101),Oi(t,s,s,s*3,["#77746f","#44423f"],1.5,102),nt(e)}),tiles:()=>it("tiles",()=>{let s=Jt/4,[e,t]=tt(s,s);t.fillStyle="#9b3d2a",t.fillRect(0,0,s,s);let n=8;for(let i=0;i<n;i++)for(let r=0;r<n;r++){let a=t.createLinearGradient(0,i*s/n,0,(i+1)*s/n);a.addColorStop(0,"#b4513a"),a.addColorStop(1,"#7a2c1d"),t.fillStyle=a,t.fillRect((r+i%2*.5)*s/n,i*s/n,s/n-1,s/n-1)}return Vt(t,s,s,16,103),nt(e)}),metal:()=>it("metal",()=>{let s=Jt/2,[e,t]=tt(s,s),n=32;for(let i=0;i<n;i++){let r=t.createLinearGradient(i*s/n,0,(i+1)*s/n,0);r.addColorStop(0,"#9aa1a6"),r.addColorStop(.5,"#d9dee1"),r.addColorStop(1,"#868c90"),t.fillStyle=r,t.fillRect(i*s/n,0,s/n,s)}return Vt(t,s,s,14,111),nt(e)}),tire:()=>it("tire",()=>{let[e,t]=tt(256,256);t.fillStyle="#1b1b1c",t.fillRect(0,0,256,256),t.fillStyle="#2c2c2e";for(let n=0;n<24;n++)t.save(),t.translate(n*256/24,0),t.fillRect(0,0,256/48,256),t.restore();return Vt(t,256,256,10,121),nt(e)}),rim:()=>it("rim",()=>{let[e,t]=tt(256,256);t.fillStyle="#151515",t.fillRect(0,0,256,256);let n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256*.36);n.addColorStop(0,"#f0f0f0"),n.addColorStop(.6,"#b8bcc0"),n.addColorStop(1,"#7c8084"),t.fillStyle=n,t.beginPath(),t.arc(256/2,256/2,256*.36,0,Math.PI*2),t.fill(),t.fillStyle="#444";for(let i=0;i<10;i++){let r=i/10*Math.PI*2;t.beginPath(),t.arc(256/2+Math.cos(r)*256*.2,256/2+Math.sin(r)*256*.2,256*.025,0,7),t.fill()}return t.fillStyle="#555",t.beginPath(),t.arc(256/2,256/2,256*.09,0,7),t.fill(),nt(e,!1)}),facade:s=>it("facade"+s,()=>{let e=Jt,[t,n]=tt(e,e),[i,r]=tt(e/2,e/2);r.fillStyle="#000",r.fillRect(0,0,e/2,e/2);let a=En(200+s),o=[{wall:"#c9d0d6",win:["#3a5a78","#4a7090","#2d4a66"],frame:"#7f8a93",mw:.78,mh:.62},{wall:"#9c4f39",win:["#24323e","#3b4d5c","#2f3d48"],frame:"#ddd4c2",mw:.42,mh:.5},{wall:"#d9d2c3",win:["#2b3a47","#3f5566","#33414d"],frame:"#948c7b",mw:.5,mh:.48},{wall:"#66757f",win:["#1d2d3c","#2c4a64","#3a5f7d"],frame:"#3a4954",mw:.9,mh:.8}][s];if(n.fillStyle=o.wall,n.fillRect(0,0,e,e),Vt(n,e,e,18,210+s),s===1){n.strokeStyle="rgba(70,30,20,0.4)",n.lineWidth=1;let u=e/96;for(let f=0;f<96;f++){n.beginPath(),n.moveTo(0,f*u),n.lineTo(e,f*u),n.stroke();for(let g=0;g<32;g++){let b=(g+f%2*.5)*e/32;n.beginPath(),n.moveTo(b,f*u),n.lineTo(b,(f+1)*u),n.stroke()}}}let c=4,l=e/c,h=["#ffd38a","#ffe7b0","#fff4d6","#cfe3ff","#ffc070"];for(let u=0;u<c;u++){for(let f=0;f<c;f++){let g=f*l,b=u*l,p=l*o.mw,m=l*o.mh,v=g+(l-p)/2,x=b+(l-m)/2-l*.04;n.fillStyle=o.frame,n.fillRect(v-3,x-3,p+6,m+6);let _=n.createLinearGradient(v,x,v+p,x+m),S=o.win[a()*o.win.length|0];if(_.addColorStop(0,S),_.addColorStop(.5,"#8fa8bc"),_.addColorStop(.56,S),_.addColorStop(1,"#141d26"),n.fillStyle=_,n.fillRect(v,x,p,m),n.fillStyle=o.frame,n.fillRect(v+p/2-1.5,x,3,m),s!==3&&n.fillRect(v,x+m*.35,p,2),(s===1||s===2)&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(v-4,x+m+3,p+8,4)),a()<.42){let R=r.createLinearGradient(0,x*.5,0,(x+m)*.5),E=h[a()*h.length|0];R.addColorStop(0,E),R.addColorStop(1,"#6b4a20"),r.fillStyle=R,r.fillRect(v*.5,x*.5,p*.5,m*.5)}}(s===0||s===3)&&(n.fillStyle=o.frame,n.fillRect(0,u*l+l-4,e,4))}for(let u=0;u<40;u++){let f=a()*e,g=e*(.05+a()*.2),b=a()*e,p=n.createLinearGradient(0,b,0,b+g);p.addColorStop(0,"rgba(40,35,30,0.12)"),p.addColorStop(1,"rgba(40,35,30,0)"),n.fillStyle=p,n.fillRect(f,b,2+a()*6,g)}let d=nt(t);return d.userData.emissive=nt(i),d}),highway:()=>it("highway",()=>{let s=Jt,[e,t]=tt(s,s);Sc(t,s,23,"#3a3c3f");let n=s/18;t.fillStyle="rgba(150,150,150,0.18)",t.fillRect(0,0,2*n,s),t.fillRect(16*n,0,2*n,s),t.fillStyle="rgba(20,20,20,0.2)";for(let r of[4.2,6.6,11.4,13.8])t.fillRect(r*n-n*.5,0,n,s);t.fillStyle="#f2f2f2",t.fillRect(1.9*n,0,.15*n,s),t.fillRect(15.95*n,0,.15*n,s),t.fillStyle="#e8b923",t.fillRect(8.82*n,0,.14*n,s*.5),t.fillRect(9.04*n,0,.14*n,s);let i=En(24);t.strokeStyle="rgba(15,15,15,0.35)",t.lineWidth=1.2;for(let r=0;r<14;r++){let a=i()*s,o=i()*s;t.beginPath(),t.moveTo(a,o);for(let c=0;c<6;c++)a+=(i()-.5)*30,o+=i()*20,t.lineTo(a,o);t.stroke()}for(let r=0;r<3;r++)t.fillStyle="rgba(25,25,27,0.35)",t.fillRect(2*n+i()*12*n,i()*s,1.5*n+i()*n,1*n+i()*n);return nt(e)}),roadSign:(s,e,t)=>it("rs"+s+e+t,()=>{let[r,a]=tt(1024,410);a.fillStyle=t,a.fillRect(0,0,1024,410),a.strokeStyle="#fff",a.lineWidth=14,a.strokeRect(20,20,984,370),a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle";let o=120;for(a.font=`700 ${o}px sans-serif`;a.measureText(s).width>904;)o-=6,a.font=`700 ${o}px sans-serif`;return a.fillText(s,1024/2,410*.42),a.font="600 64px sans-serif",a.fillText(e,1024/2,410*.76),nt(r,!1)}),speedSign:s=>it("spd"+s,()=>{let[t,n]=tt(256,256);return n.fillStyle="#fff",n.beginPath(),n.arc(256/2,256/2,256/2,0,7),n.fill(),n.strokeStyle="#d0021b",n.lineWidth=28,n.beginPath(),n.arc(256/2,256/2,256/2-16,0,7),n.stroke(),n.fillStyle="#111",n.font="800 110px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),256/2,256/2+6),nt(t,!1)}),clouds:()=>it("clouds",()=>{let[t,n]=tt(1024,512);n.clearRect(0,0,1024,512);let i=En(555);for(let a=0;a<70;a++){let o=i()*1024,c=512*.25+i()*512*.55,l=30+i()*90;for(let h=0;h<7;h++){let d=o+(i()-.5)*l*1.8,u=c+(i()-.5)*l*.4,f=l*(.4+i()*.6),g=n.createRadialGradient(d,u,0,d,u,f);g.addColorStop(0,"rgba(255,255,255,0.55)"),g.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=g,n.fillRect(d-f,u-f,f*2,f*2),d<f&&(n.save(),n.translate(1024,0),n.fillRect(d-f,u-f,f*2,f*2),n.restore())}}let r=nt(t);return r.wrapT=vn,r}),panel:()=>it("panel",()=>{let[e,t]=tt(512,512),n=32;for(let r=0;r<n;r++){let a=t.createLinearGradient(r*512/n,0,(r+1)*512/n,0);a.addColorStop(0,"#d9dcdf"),a.addColorStop(.5,"#ffffff"),a.addColorStop(1,"#c8cbce"),t.fillStyle=a,t.fillRect(r*512/n,0,512/n,512)}t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(0,0,512,6),t.fillRect(0,506,512,6);let i=t.createLinearGradient(0,512,0,512*.6);return i.addColorStop(0,"rgba(110,92,70,0.35)"),i.addColorStop(1,"rgba(110,92,70,0)"),t.fillStyle=i,t.fillRect(0,0,512,512),Vt(t,512,512,8,600),nt(e)}),headlamp:()=>it("headlamp",()=>{let[t,n]=tt(256,128),i=n.createLinearGradient(0,0,0,128);i.addColorStop(0,"#3a4048"),i.addColorStop(1,"#14181c"),n.fillStyle=i,n.fillRect(0,0,256,128);for(let[r,a]of[[70,40],[170,34]]){let o=n.createRadialGradient(r,60,2,r,60,a);o.addColorStop(0,"#ffffff"),o.addColorStop(.35,"#dfe6ee"),o.addColorStop(.7,"#8d98a5"),o.addColorStop(1,"#2b3138"),n.fillStyle=o,n.beginPath(),n.arc(r,60,a,0,7),n.fill()}return n.fillStyle="#f7fbff",n.fillRect(20,108,216,8),n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=4,n.strokeRect(2,2,252,124),nt(t,!1)}),taillamp:()=>it("taillamp",()=>{let[t,n]=tt(128,64);return n.fillStyle="#5a0a0a",n.fillRect(0,0,128,64),n.fillStyle="#ff2a1a",n.fillRect(4,4,56,56),n.fillStyle="#ffa21a",n.fillRect(64,4,28,56),n.fillStyle="#f2f2f2",n.fillRect(96,4,28,56),nt(t,!1)}),cabDecal:s=>it("decal"+s,()=>{let[n,i]=tt(512,192);i.clearRect(0,0,512,192);let r=new he(s),a="#"+r.clone().multiplyScalar(.45).getHexString(),o=r.getHSL({}).l>.6?"#2a3440":"#ffffff";return i.fillStyle=a,i.beginPath(),i.moveTo(0,192*.55),i.lineTo(512,192*.25),i.lineTo(512,192*.42),i.lineTo(0,192*.72),i.fill(),i.fillStyle=o,i.beginPath(),i.moveTo(0,192*.76),i.lineTo(512,192*.46),i.lineTo(512,192*.5),i.lineTo(0,192*.8),i.fill(),i.font="italic 900 46px sans-serif",i.fillStyle=o,i.fillText("DRIZZIE",26,192*.42),nt(n,!1)}),treeCard:s=>it("treecard"+s,()=>{let[n,i]=tt(256,512);i.clearRect(0,0,256,512);let r=En(900+s),a=i.createLinearGradient(256/2-10,0,256/2+10,0);a.addColorStop(0,"#3b2a1c"),a.addColorStop(.5,"#6d5038"),a.addColorStop(1,"#2e2016"),i.fillStyle=a;let o=s===1?9:s===2?7:12;i.beginPath(),i.moveTo(256/2-o,512),i.lineTo(256/2+o,512),i.lineTo(256/2+o*.4,512*.25),i.lineTo(256/2-o*.4,512*.25),i.fill();let c=(h,d,u,f)=>{let g=i.createRadialGradient(h-u*.3,d-u*.35,u*.1,h,d,u),b=s===1?[38,72,40]:s===2?[86,110,70]:[62,98,44],p=.65+f*.6;g.addColorStop(0,`rgba(${b[0]*p*1.35|0},${b[1]*p*1.3|0},${b[2]*p*1.2|0},1)`),g.addColorStop(.7,`rgba(${b[0]*p|0},${b[1]*p|0},${b[2]*p|0},1)`),g.addColorStop(1,`rgba(${b[0]*p*.7|0},${b[1]*p*.7|0},${b[2]*p*.7|0},0)`),i.fillStyle=g,i.beginPath(),i.arc(h,d,u,0,7),i.fill()};if(s===1)for(let h=0;h<260;h++){let d=r(),u=512*.06+d*512*.78,f=(d*.42+.04)*256,g=256/2+(r()*2-1)*f;c(g,u,6+r()*12+d*8,1-d*.6+(g<256/2?.15:-.1))}else{let h=s===2?25.6:40.96,d=s===2?512*.62:512*.72,u=s===2?256*.3:256*.45;for(let f=0;f<420;f++){let g=r()*Math.PI*2,b=Math.sqrt(r()),p=256/2+Math.cos(g)*b*u,m=(h+d)/2+Math.sin(g)*b*(d-h)/2,v=1-(m-h)/(d-h)*.7+(p<256/2?.15:-.1);c(p,m,5+r()*(s===2?10:15),v)}i.strokeStyle="rgba(60,42,28,0.8)",i.lineWidth=3;for(let f=0;f<6;f++)i.beginPath(),i.moveTo(256/2,d-10),i.lineTo(256/2+(r()-.5)*u*1.2,d-30-r()*60),i.stroke()}for(let h=0;h<900;h++){let d=r()*256,u=r()*512*.85,f=i.getImageData(d|0,u|0,1,1).data;f[3]>200&&(i.fillStyle=`rgba(${f[0]*(.7+r()*.6)|0},${f[1]*(.7+r()*.6)|0},${f[2]*(.7+r()*.5)|0},1)`,i.fillRect(d,u,2,2))}let l=nt(n,!1);return l.premultiplyAlpha=!1,l}),surface:s=>it("surf"+s,()=>{let e=Jt/2,[t,n]=tt(e,e),i=En(700+s.length*13);if(s==="cobble"){n.fillStyle="#4a4744",n.fillRect(0,0,e,e);let r=14,a=e/r,o=e/(r*1.3);for(let c=0;c<e/o+1;c++)for(let l=-1;l<r+1;l++){let h=l*a+c%2*a*.5,d=c*o,u=95+i()*55,f=i()*18;n.fillStyle=`rgb(${u+f|0},${u+f*.6|0},${u-f*.4|0})`;let g=1.6;n.beginPath(),n.roundRect?n.roundRect(h+g,d+g,a-g*2,o-g*2,3):n.rect(h+g,d+g,a-g*2,o-g*2),n.fill(),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(h+g,d+g,a-g*2,2)}Vt(n,e,e,16,701)}else if(s==="gravel"){n.fillStyle="#8a8070",n.fillRect(0,0,e,e),Oi(n,e,e,e*18,["#6b6357","#a49a88","#5a5249","#b8ae9c","#7a6f60"],e/220,702);for(let r of[.25,.75]){let a=n.createLinearGradient(e*(r-.12),0,e*(r+.12),0);a.addColorStop(0,"rgba(70,64,56,0)"),a.addColorStop(.5,"rgba(70,64,56,0.35)"),a.addColorStop(1,"rgba(70,64,56,0)"),n.fillStyle=a,n.fillRect(e*(r-.12),0,e*.24,e)}Vt(n,e,e,22,703)}else if(s==="dirt"){n.fillStyle="#93693f",n.fillRect(0,0,e,e);for(let r=0;r<60;r++){let a=i()*e,o=i()*e,c=e*(.05+i()*.15),l=n.createRadialGradient(a,o,0,a,o,c),h=i()>.5?"120,84,48":"150,112,70";l.addColorStop(0,`rgba(${h},0.45)`),l.addColorStop(1,`rgba(${h},0)`),n.fillStyle=l,n.fillRect(0,0,e,e)}for(let r of[.27,.73]){n.fillStyle="rgba(95,64,36,0.45)",n.fillRect(e*(r-.07),0,e*.14,e),n.strokeStyle="rgba(70,46,26,0.5)",n.lineWidth=2;for(let a=-2;a<=2;a++)n.beginPath(),n.moveTo(e*r+a*4,0),n.lineTo(e*r+a*4+(i()-.5)*6,e),n.stroke()}Oi(n,e,e,e*6,["#7a5634","#b08356","#6b4a2c","#a87d50"],e/300,704),n.fillStyle="rgba(96,118,58,0.55)",n.fillRect(0,0,e*.06,e),n.fillRect(e*.94,0,e*.06,e),Vt(n,e,e,20,705)}else{n.fillStyle="#5a4128",n.fillRect(0,0,e,e);for(let r=0;r<40;r++){let a=i()*e,o=i()*e,c=e*(.04+i()*.12),l=n.createRadialGradient(a,o,0,a,o,c);l.addColorStop(0,"rgba(40,28,16,0.6)"),l.addColorStop(1,"rgba(40,28,16,0)"),n.fillStyle=l,n.fillRect(0,0,e,e)}for(let r=0;r<9;r++){let a=e*(.15+i()*.7),o=i()*e,c=e*(.05+i()*.1),l=e*(.03+i()*.07),h=n.createRadialGradient(a,o,0,a,o,c);h.addColorStop(0,"rgba(150,160,165,0.75)"),h.addColorStop(.7,"rgba(95,95,85,0.6)"),h.addColorStop(1,"rgba(60,44,28,0)"),n.fillStyle=h,n.beginPath(),n.ellipse(a,o,c,l,i()*3,0,7),n.fill()}for(let r of[.27,.73])n.fillStyle="rgba(30,20,12,0.55)",n.fillRect(e*(r-.08),0,e*.16,e);Oi(n,e,e,e*5,["#3e2c1a","#6e5236","#2c1f12"],e/260,706),n.fillStyle="rgba(80,100,50,0.5)",n.fillRect(0,0,e*.05,e),n.fillRect(e*.95,0,e*.05,e),Vt(n,e,e,18,707)}return nt(t)}),warehouse:()=>it("warehouse",()=>{let s=Jt/2,[e,t]=tt(s,s),n=40;for(let i=0;i<n;i++){let r=t.createLinearGradient(i*s/n,0,(i+1)*s/n,0);r.addColorStop(0,"#b7bcc0"),r.addColorStop(.5,"#e4e7e9"),r.addColorStop(1,"#a6abaf"),t.fillStyle=r,t.fillRect(i*s/n,0,s/n,s)}return t.fillStyle="rgba(60,70,80,0.35)",t.fillRect(0,s*.9,s,s*.1),Vt(t,s,s,12,301),nt(e)}),container:s=>it("container"+s,()=>{let[t,n]=tt(256,256),i=new he(s),r=24;for(let a=0;a<r;a++){let o=n.createLinearGradient(a*256/r,0,(a+1)*256/r,0);o.addColorStop(0,"#"+i.clone().multiplyScalar(.7).getHexString()),o.addColorStop(.5,"#"+i.clone().multiplyScalar(1.1).getHexString()),o.addColorStop(1,"#"+i.clone().multiplyScalar(.6).getHexString()),n.fillStyle=o,n.fillRect(a*256/r,0,256/r,256)}return n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=6,n.strokeRect(3,3,250,250),Vt(n,256,256,14,311),nt(t)}),cargoBox:(s,e)=>it("cbox"+s+e,()=>{let t=Jt,n=Jt/4,[i,r]=tt(t,n),a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#fbfbfb"),a.addColorStop(1,"#d7dadd"),r.fillStyle=a,r.fillRect(0,0,t,n),r.fillStyle=s,r.fillRect(0,n*.78,t,n*.08),r.beginPath(),r.moveTo(t*.05,n*.7),r.lineTo(t*.15,n*.2),r.lineTo(t*.22,n*.2),r.lineTo(t*.12,n*.7),r.fill(),r.font=`900 ${n*.34}px sans-serif`,r.textBaseline="middle",r.fillText(e,t*.25,n*.42),r.font=`600 ${n*.1}px sans-serif`,r.fillStyle="#555",r.fillText("TRANSPORTES & LOG\xCDSTICA",t*.255,n*.66),r.strokeStyle="rgba(0,0,0,0.15)",r.lineWidth=2;for(let o=1;o<12;o++)r.beginPath(),r.moveTo(o*t/12,0),r.lineTo(o*t/12,n),r.stroke();return nt(i,!1)}),sign:(s,e,t)=>it("sign"+s+e,()=>{let[r,a]=tt(1024,192);a.fillStyle=e,a.fillRect(0,0,1024,192),a.strokeStyle="rgba(255,255,255,0.8)",a.lineWidth=8,a.strokeRect(10,10,1004,172),a.fillStyle=t;let o=96;for(a.font=`800 ${o}px sans-serif`;a.measureText(s).width>944&&o>30;)o-=4,a.font=`800 ${o}px sans-serif`;return a.textAlign="center",a.textBaseline="middle",a.fillText(s,1024/2,192/2+4),nt(r,!1)}),paint:()=>it("paint",()=>{let[e,t]=tt(512,512),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#eeeeee"),n.addColorStop(1,"#c4c4c4"),t.fillStyle=n,t.fillRect(0,0,512,512);let i=En(777),r=t.createLinearGradient(0,512,0,512*.35);r.addColorStop(0,"rgba(110,92,70,0.55)"),r.addColorStop(1,"rgba(110,92,70,0)"),t.fillStyle=r,t.fillRect(0,0,512,512);for(let a=0;a<2600;a++){let o=512-Math.pow(i(),1.8)*512;t.fillStyle=`rgba(${90+i()*40},${75+i()*30},${55+i()*25},${.06+i()*.16})`,t.beginPath(),t.arc(i()*512,o,.5+i()*3.5,0,7),t.fill()}for(let a=0;a<70;a++){let o=i()*512,c=i()*512*.4,l=512*(.15+i()*.5),h=t.createLinearGradient(0,c,0,c+l);h.addColorStop(0,"rgba(80,70,55,0)"),h.addColorStop(.5,"rgba(80,70,55,0.14)"),h.addColorStop(1,"rgba(80,70,55,0)"),t.fillStyle=h,t.fillRect(o,c,1+i()*3,l)}return Vt(t,512,512,8,778),nt(e)}),backdrop:()=>it("backdrop",()=>{let[t,n]=tt(1024,512),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#08121f"),i.addColorStop(1,"#0e2a40"),n.fillStyle=i,n.fillRect(0,0,1024,512);let r=En(901),a=64;for(let o=0;o<512/a+1;o++)for(let c=0;c<1024/a+1;c++){let l=c*a+o%2*a/2,h=o*a*.87;n.fillStyle=`rgba(${40+r()*30},${90+r()*60},${130+r()*70},${.05+r()*.12})`,n.beginPath(),n.moveTo(l,h),n.lineTo(l+a/2,h+a*.87),n.lineTo(l-a/2,h+a*.87),n.closePath(),n.fill(),n.strokeStyle="rgba(120,200,255,0.06)",n.stroke()}return nt(t,!1)}),glow:()=>it("glow",()=>{let[e,t]=tt(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.55)"),n.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),nt(e,!1)}),beam:()=>it("beam",()=>{let[t,n]=tt(128,256),i=n.createRadialGradient(128/2,256,0,128/2,256,256);return i.addColorStop(0,"rgba(255,245,220,0.85)"),i.addColorStop(.5,"rgba(255,240,210,0.35)"),i.addColorStop(1,"rgba(255,240,210,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.42,256),n.lineTo(0,0),n.lineTo(128,0),n.lineTo(128*.58,256),n.fill(),nt(t,!1)}),grill:()=>it("grill",()=>{let[e,t]=tt(256,256);t.fillStyle="#0c0c0c",t.fillRect(0,0,256,256);for(let n=0;n<9;n++){let i=12+n*27,r=t.createLinearGradient(0,i,0,i+14);r.addColorStop(0,"#f2f2f2"),r.addColorStop(1,"#7a7a7a"),t.fillStyle=r,t.fillRect(8,i,240,14)}return nt(e,!1)}),blob:()=>it("blob",()=>{let[e,t]=tt(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(0,0,0,0.65)"),n.addColorStop(.6,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),nt(e,!1)}),zone:()=>it("zone",()=>{let[e,t]=tt(256,256);return t.clearRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,1)",t.lineWidth=14,t.strokeRect(7,7,242,242),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(14,14,228,228),nt(e,!1)}),bark:()=>it("bark",()=>{let[e,t]=tt(256,256);t.fillStyle="#6b4a2b",t.fillRect(0,0,256,256);let n=En(401);for(let i=0;i<120;i++){t.strokeStyle=n()>.5?"rgba(40,25,12,0.6)":"rgba(140,100,60,0.4)",t.lineWidth=1+n()*3;let r=n()*256;t.beginPath(),t.moveTo(r,0),t.lineTo(r+(n()-.5)*12,256),t.stroke()}return nt(e)}),foliage:()=>it("foliage",()=>{let[e,t]=tt(256,256);return t.fillStyle="#c8c8c8",t.fillRect(0,0,256,256),Oi(t,256,256,2600,["#ffffff","#8a8a8a","#e6e6e6","#6e6e6e"],5,411),nt(e)})};var wc=new N,Ec=new N,vp=new Ye,Tc=new he,Le=class{constructor(e=!1){this.pos=[],this.nor=[],this.uv=[],this.col=e?[]:null,this.idx=[]}get count(){return this.pos.length/3}_color(e){this.col&&(Tc.set(e!=null?e:16777215),this.col.push(Tc.r,Tc.g,Tc.b))}quad(e,t,n,i,r,a,o){let c=this.count;for(let l of[e,t,n,i])this.pos.push(l[0],l[1],l[2]),this.nor.push(r[0],r[1],r[2]),this._color(o);this.uv.push(...a),this.idx.push(c,c+1,c+2,c,c+2,c+3)}ground(e,t,n,i,r,a,o){let c=e/a,l=n/a,h=-i/a,d=-t/a;this.quad([e,r,i],[n,r,i],[n,r,t],[e,r,t],[0,1,0],[c,h,l,h,l,d,c,d],o)}walls(e,t,n,i,r,a,o,c,l=0,h){let u=(r-t)/c,f=(i-e)/o,g=(a-n)/o;this.quad([e,t,a],[i,t,a],[i,r,a],[e,r,a],[0,0,1],[l,0,l+f,0,l+f,u,l,u],h),this.quad([i,t,n],[e,t,n],[e,r,n],[i,r,n],[0,0,-1],[l,0,l+f,0,l+f,u,l,u],h),this.quad([i,t,a],[i,t,n],[i,r,n],[i,r,a],[1,0,0],[l,0,l+g,0,l+g,u,l,u],h),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],[-1,0,0],[l,0,l+g,0,l+g,u,l,u],h)}top(e,t,n,i,r,a,o){this.ground(e,t,n,i,r,a,o)}box(e,t,n,i,r,a,o,c){this.walls(e,t,n,i,r,a,o,o,0,c),this.top(e,n,i,a,r,o,c)}add(e,t,n,i=1){let r=e.attributes.position,a=e.attributes.normal,o=e.attributes.uv,c=this.count;vp.getNormalMatrix(t);for(let l=0;l<r.count;l++)wc.fromBufferAttribute(r,l).applyMatrix4(t),this.pos.push(wc.x,wc.y,wc.z),Ec.fromBufferAttribute(a,l).applyMatrix3(vp).normalize(),this.nor.push(Ec.x,Ec.y,Ec.z),o?this.uv.push(o.getX(l)*i,o.getY(l)*i):this.uv.push(0,0),this._color(n);if(e.index){let l=e.index.array;for(let h=0;h<l.length;h++)this.idx.push(l[h]+c)}else for(let l=0;l<r.count;l++)this.idx.push(c+l)}geometry(){let e=new mt;e.setAttribute("position",new Ge(this.pos,3)),e.setAttribute("normal",new Ge(this.nor,3)),e.setAttribute("uv",new Ge(this.uv,2)),this.col&&e.setAttribute("color",new Ge(this.col,3));let t=this.count>65535;return e.setIndex(t?new yr(this.idx,1):new _r(this.idx,1)),e.computeBoundingSphere(),e}mesh(e,t={}){if(!this.count)return null;let n=new Oe(this.geometry(),e);return n.castShadow=!!t.cast,n.receiveShadow=t.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}},ly=new Ve,_p=new Ln,hy=new Sn,dy=new N,uy=new N;function Ce(s,e,t,n=0,i=0,r=0,a=1,o=1,c=1){return _p.setFromEuler(hy.set(n,i,r)),ly.compose(uy.set(s,e,t),_p,dy.set(a,o,c)).clone()}var os={},ke={box:()=>os.box||(os.box=new fn(1,1,1)),cyl:(s=16)=>os["cyl"+s]||(os["cyl"+s]=new Wn(.5,.5,1,s)),cone:(s=12)=>os["cone"+s]||(os["cone"+s]=new Rr(.5,1,s)),sphere:()=>os.sph||(os.sph=new es(.5,16,10))};var Or=class{constructor(e=80,t=40){this.cell=e,this.pad=t,this.map=new Map}addSegments(e,t,n){let i=this.cell,r=this.pad;for(let a=0;a<t.length-1;a++){let o=Math.min(t[a],t[a+1])-r,c=Math.max(t[a],t[a+1])+r,l=Math.min(n[a],n[a+1])-r,h=Math.max(n[a],n[a+1])+r;for(let d=Math.floor(o/i);d<=Math.floor(c/i);d++)for(let u=Math.floor(l/i);u<=Math.floor(h/i);u++){let f=d*1e5+u,g=this.map.get(f);g||this.map.set(f,g=[]),g.push(e,a)}}}nearest(e,t,n){let i=this.map.get(Math.floor(e/this.cell)*1e5+Math.floor(t/this.cell));if(n.d=1/0,!i)return null;for(let r=0;r<i.length;r+=2){let a=i[r],o=i[r+1],c=a.x[o],l=a.z[o],h=a.x[o+1],d=a.z[o+1],u=h-c,f=d-l,g=u*u+f*f||1,b=((e-c)*u+(t-l)*f)/g;b=b<0?0:b>1?1:b;let p=c+u*b,m=l+f*b,v=Math.hypot(e-p,t-m);v<n.d&&(n.d=v,n.o=a,n.i=o,n.t=b,n.x=p,n.z=m)}return n.d<1/0?n:null}};function yp(s,e){let t=new Sa(s.map(o=>new N(o[0],0,o[1])),!1,"centripetal",.5),n=Math.max(2,Math.ceil(t.getLength()/e)),i=t.getSpacedPoints(n),r=new Float32Array(i.length),a=new Float32Array(i.length);return i.forEach((o,c)=>{r[c]=o.x,a[c]=o.z}),{x:r,z:a}}var Ac=class{constructor(){let{x:e,z:t}=yp(pp,10);this.x=e,this.z=t,this.n=e.length,this.idx=new Or(100,Xn/2+80),this.idx.addSegments(this,e,t),this._q={}}dist(e,t){let n=this.idx.nearest(e,t,this._q);return n?n.d:1/0}},kh=class{constructor(e,t,n,i){this.def=e,this.id=e.id,this.half=e.half,this.surface=e.surface;let{x:r,z:a}=yp(e.pts,4),o=this.n=r.length;this.x=r,this.z=a,this.s=new Float32Array(o),this.dx=new Float32Array(o),this.dz=new Float32Array(o),this.y=new Float32Array(o);for(let b=1;b<o;b++)this.s[b]=this.s[b-1]+Math.hypot(r[b]-r[b-1],a[b]-a[b-1]);this.length=this.s[o-1];for(let b=0;b<o;b++){let p=Math.max(0,b-1),m=Math.min(o-1,b+1),v=r[m]-r[p],x=a[m]-a[p],_=Math.hypot(v,x)||1;this.dx[b]=v/_,this.dz[b]=x/_}let c=new Float32Array(o);this.bridge=new Uint8Array(o);for(let b=0;b<o;b++)c[b]=n.raw(r[b],a[b]);let l=this.y;for(let b=0;b<o;b++){let p=0,m=0;for(let v=-14;v<=14;v++)p+=c[Math.min(o-1,Math.max(0,b+v))],m++;l[b]=p/m}let h=this.surface==="asphalt"?.06:.1,d=0;if(e.from&&e.from[0]==="hw"){let b=i.find(p=>p.id===e.from[1]);d=b?b.yAt(r[0],a[0]):0,this.parent=b}(()=>{l[0]=d;for(let b=1;b<o;b++){let p=(this.s[b]-this.s[b-1])*h;l[b]=Math.min(l[b-1]+p,Math.max(l[b-1]-p,l[b]))}l[o-1]=0;for(let b=o-2;b>=0;b--){let p=(this.s[b+1]-this.s[b])*h;l[b]=Math.min(l[b+1]+p,Math.max(l[b+1]-p,l[b]))}})();let f=7.5;for(let b=0;b<o;b++)t.dist(r[b],a[b])<Xn/2+16&&(this.bridge[b]=1,l[b]=Math.max(l[b],f));for(let b=1;b<o;b++)l[b]=Math.max(l[b],l[b-1]-(this.s[b]-this.s[b-1])*h);for(let b=o-2;b>=0;b--)l[b]=Math.max(l[b],l[b+1]-(this.s[b+1]-this.s[b])*h);l[0]=d,l[o-1]=0;let g=Float32Array.from(l);for(let b=3;b<o-3;b++)l[b]=(g[b-3]+g[b-2]+g[b-1]+g[b]+g[b+1]+g[b+2]+g[b+3])/7;for(let b=0;b<o;b++)this.bridge[b]&&(l[b]=Math.max(l[b],f))}yAt(e,t){let n=0,i=1/0;for(let r=0;r<this.n;r++){let a=(this.x[r]-e)**2+(this.z[r]-t)**2;a<i&&(i=a,n=r)}return this.y[n]}at(e,t){let n=this.n;e=Math.max(0,Math.min(this.length,e));let i=0,r=n-1;for(;r-i>1;){let o=i+r>>1;this.s[o]<=e?i=o:r=o}let a=(e-this.s[i])/(this.s[r]-this.s[i]||1);return t.x=this.x[i]+(this.x[r]-this.x[i])*a,t.z=this.z[i]+(this.z[r]-this.z[i])*a,t.y=this.y[i]+(this.y[r]-this.y[i])*a,t.dx=this.dx[i],t.dz=this.dz[i],t.i=i,t}};function Mp(s,e){let t=[];for(let i of Fh)t.push(new kh(i,e,s,t));let n=new Or(80,40);for(let i of t)n.addSegments(i,i.x,i.z);return{river:e,hws:t,idx:n}}var ri=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Rc=(s,e)=>{let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)};function Da(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r);return(Rc(t,n)*(1-a)+Rc(t+1,n)*a)*(1-o)+(Rc(t,n+1)*(1-a)+Rc(t+1,n+1)*a)*o}function fy(s,e,t=5){let n=.5,i=1,r=0;for(let a=0;a<t;a++)r+=n*Da(s*i+a*17.3,e*i-a*9.1),i*=2.03,n*=.5;return r}var py=(s,e)=>{let t=0,n=.6,i=1;for(let r=0;r<4;r++)t+=n*(1-Math.abs(Da(s*i,e*i)*2-1)),i*=2.1,n*=.5;return t},my=[[-2400,-3300,1900],[3350,-1e3,1500],[600,-3500,1500],[-3600,300,1300],[3600,1600,900]],Cc=class{constructor(e){this.river=e,this.flat=[];for(let t of Dn)this.flat.push({x0:t.x0,z0:t.z0,x1:Ni(t),z1:as(t),r:380});for(let t of jn)t.lot&&this.flat.push({x0:t.lot[0],z0:t.lot[1],x1:t.lot[2],z1:t.lot[3],r:230});this._q={}}mountainMask(e,t){let n=0;for(let[a,o,c]of my)n=Math.max(n,1-ri(c*.35,c,Math.hypot(e-a,t-o)));let i=Math.max(Rt.x0-e,e-Rt.x1,0),r=Math.max(Rt.z0-t,0);return Math.max(n,ri(0,900,Math.max(i,r)))}raw(e,t){let n=this.mountainMask(e,t),i=fy(e/1100,t/1100),r=(22+120*n)*(i-.42)+n*n*190*Math.max(0,py(e/700,t/700)-.42)+3*(Da(e/110,t/110)-.5);r=Math.max(r,-6);for(let o of this.flat){let c=Math.max(o.x0-e,0,e-o.x1),l=Math.max(o.z0-t,0,t-o.z1),h=Math.hypot(c,l);h<o.r&&(r*=ri(0,o.r,h))}let a=this.river.dist(e,t);return a<Xn/2+200&&(r=-1.8+(r+1.8)*ri(Xn/2-6,Xn/2+190,a)),t>1470&&(r=r+(-5-r)*ri(1470,1850,t)),r}setRoads(e){this.hws=e,this.idx=new Or(100,150);for(let t of e)this.idx.addSegments(t,t.x,t.z)}height(e,t){let n=this.raw(e,t);if(!this.idx)return n;let i=this.idx.nearest(e,t,this._q);if(!i)return n;let r=i.o,a=r.y[i.i]+(r.y[i.i+1]-r.y[i.i])*i.t,o=r.half+1.5,c=Math.max(10,Math.abs(n-a)*1.7),l=ri(o,o+c,i.d);return a-.3+(n-a+.3)*l}build(e,t,n){let i=Rt.x0-1600,r=Rt.x1+1600,a=Rt.z0-1600,o=3190,c=Math.ceil((r-i)/n),l=Math.ceil((o-a)/n),h=new Float32Array((c+1)*(l+1));for(let _=0;_<=l;_++)for(let S=0;S<=c;S++)h[_*(c+1)+S]=this.height(i+S*n,a+_*n);this.grid={X0:i,Z0:a,nx:c,nz:l,s:n,H:h};let d=40,u=new he,f=new he(8231506),g=new he(10852962),b=new he(6126144),p=new he(9077624),m=new he(15659508),v=new he(14207130),x=new he(10124117);for(let _=0;_<l;_+=d)for(let S=0;S<c;S+=d){let w=Math.min(c,S+d),R=Math.min(l,_+d),E=w-S+1,B=R-_+1,M=new Float32Array(E*B*3),T=new Float32Array(E*B*3),G=new Float32Array(E*B*2),X=new Float32Array(E*B*3),C=0;for(let O=_;O<=R;O++)for(let I=S;I<=w;I++){let D=i+I*n,V=a+O*n,ae=h[O*(c+1)+I];M[C*3]=D,M[C*3+1]=ae,M[C*3+2]=V;let Te=h[O*(c+1)+Math.max(0,I-1)],j=h[O*(c+1)+Math.min(c,I+1)],ie=h[Math.max(0,O-1)*(c+1)+I],pe=h[Math.min(l,O+1)*(c+1)+I],we=new N(Te-j,2*n,ie-pe).normalize();T[C*3]=we.x,T[C*3+1]=we.y,T[C*3+2]=we.z,G[C*2]=D/14,G[C*2+1]=-V/14;let Ae=1-we.y,Me=Da(D/380,V/380),ze=Da(D/70,V/70);u.copy(f).lerp(g,Math.max(0,Me-.45)*1.6).lerp(b,Math.max(0,.5-Me)*.9),u.multiplyScalar(.9+ze*.2),u.lerp(p,ri(.18,.42,Ae)),ae>150&&u.lerp(m,ri(150,190,ae)*(1-ri(.35,.6,Ae))),ae<.8&&u.lerp(v,ri(.8,-.6,ae));let Ee=this.idx?this.idx.nearest(D,V,this._q):null;Ee&&Ee.d<Ee.o.half+5&&u.lerp(x,.55*(1-ri(Ee.o.half,Ee.o.half+5,Ee.d))),X[C*3]=u.r*1.12,X[C*3+1]=u.g*1.12,X[C*3+2]=u.b*1.12,C++}let F=[];for(let O=0;O<B-1;O++)for(let I=0;I<E-1;I++){let D=O*E+I,V=D+1,ae=D+E,Te=ae+1;F.push(D,ae,V,V,ae,Te)}let A=new mt;A.setAttribute("position",new At(M,3)),A.setAttribute("normal",new At(T,3)),A.setAttribute("uv",new At(G,2)),A.setAttribute("color",new At(X,3)),A.setIndex(F),A.computeBoundingSphere();let K=new Oe(A,t);K.receiveShadow=!0,K.matrixAutoUpdate=!1,e.add(K)}}meshHeight(e,t){let n=this.grid;if(!n)return this.height(e,t);let i=(e-n.X0)/n.s,r=(t-n.Z0)/n.s,a=Math.max(0,Math.min(n.nx-1,Math.floor(i))),o=Math.max(0,Math.min(n.nz-1,Math.floor(r))),c=i-a,l=r-o,h=n.nx+1,d=n.H,u=d[o*h+a],f=d[o*h+a+1],g=d[(o+1)*h+a],b=d[(o+1)*h+a+1];return c+l<1?u+(f-u)*c+(g-u)*l:b+(g-b)*(1-c)+(f-b)*(1-l)}slope(e,t){let i=this.meshHeight(e+4,t)-this.meshHeight(e-4,t),r=this.meshHeight(e,t+4)-this.meshHeight(e,t-4);return Math.hypot(i,r)/(2*4)}};var ut=20/2;function gy(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Sp(s,e){let t=(l,h)=>{let d=Math.sin(l*127.1+h*311.7)*43758.5453;return d-Math.floor(d)},n=Math.floor(s),i=Math.floor(e),r=s-n,a=e-i,o=r*r*(3-2*r),c=a*a*(3-2*a);return(t(n,i)*(1-o)+t(n+1,i)*o)*(1-c)+(t(n,i+1)*(1-o)+t(n+1,i+1)*o)*c}var Pc=class{constructor(e,t){this.scene=e,this.q=t,this.colliders=[],this.cell=70,this.grid=new Map,this.depots={},this.animated=[],this.areas=[],this.hills=[],this.fields=[];let n=new Ac;this.terrain=new Cc(n);let i=Mp(this.terrain,n);this.terrain.setRoads(i.hws),this.river=i.river,this.hws=i.hws,this.hwIdx=i.idx,this.hwById=Object.fromEntries(this.hws.map(r=>[r.id,r])),this._q={},this.build()}addCollider(e,t,n,i){let r={x0:Math.min(e,n),z0:Math.min(t,i),x1:Math.max(e,n),z1:Math.max(t,i)};this.colliders.push(r);let a=this.cell;for(let o=Math.floor(r.x0/a);o<=Math.floor(r.x1/a);o++)for(let c=Math.floor(r.z0/a);c<=Math.floor(r.z1/a);c++){let l=o*1e5+c;this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}hw(e,t){return this.hwIdx.nearest(e,t,this._q)}inArea(e,t,n){for(let i of this.areas){if(i.circle){if((e-i.x)**2+(t-i.z)**2<=(i.r-n)**2)return i;continue}if(e>=i.x0+n&&e<=i.x1-n&&t>=i.z0+n&&t<=i.z1-n)return i}return null}heightAt(e,t){for(let r of this.areas)if(!r.circle&&e>=r.x0&&e<=r.x1&&t>=r.z0&&t<=r.z1)return 0;let n=this.hw(e,t);if(!n||n.d>n.o.half+3)return this.terrain.meshHeight(e,t);let i=n.o;return i.y[n.i]+(i.y[n.i+1]-i.y[n.i])*n.t}surfaceAt(e,t){for(let i of this.areas)if(!i.circle&&e>=i.x0&&e<=i.x1&&t>=i.z0&&t<=i.z1)return i.city?i.city.surface||"asphalt":i.lot?"concrete":"asphalt";let n=this.hw(e,t);return n&&n.d<n.o.half+2?n.o.surface:"dirt"}resolveCircle(e,t,n,i=!1){let r=0;if(n.x=0,n.z=0,!i&&!this.inArea(e.x,e.z,t)){let l=this.hw(e.x,e.z),h=(l?l.o.half:9)-t*.8;if(!l||l.d>h){let d=e.x,u=e.z,f=1/0;if(l){let g=h/(l.d||1);d=l.x+(e.x-l.x)*g,u=l.z+(e.z-l.z)*g,f=Math.hypot(e.x-d,e.z-u)}for(let g of this.areas){if(g.circle){let v=Math.hypot(e.x-g.x,e.z-g.z);if(v<g.r+40){let x=Math.max(0,g.r-t)/(v||1),_=g.x+(e.x-g.x)*Math.min(1,x),S=g.z+(e.z-g.z)*Math.min(1,x),w=Math.hypot(e.x-_,e.z-S);w<f&&(f=w,d=_,u=S)}continue}if(e.x<g.x0-60||e.x>g.x1+60||e.z<g.z0-60||e.z>g.z1+60)continue;let b=Math.max(g.x0+t,Math.min(e.x,g.x1-t)),p=Math.max(g.z0+t,Math.min(e.z,g.z1-t)),m=Math.hypot(e.x-b,e.z-p);m<f&&(f=m,d=b,u=p)}f<1/0&&(n.x=d-e.x,n.z=u-e.z,r=f)}}let a=this.cell,o=Math.floor((e.x+n.x)/a),c=Math.floor((e.z+n.z)/a);for(let l=o-1;l<=o+1;l++)for(let h=c-1;h<=c+1;h++){let d=this.grid.get(l*1e5+h);if(d)for(let u of d){let f=e.x+n.x,g=e.z+n.z,b=Math.max(u.x0,Math.min(f,u.x1)),p=Math.max(u.z0,Math.min(g,u.z1)),m=f-b,v=g-p,x=m*m+v*v;if(x<t*t)if(x>1e-6){let _=Math.sqrt(x),S=t-_;n.x+=m/_*S,n.z+=v/_*S,r=Math.max(r,S)}else{let _=f-u.x0,S=u.x1-f,w=g-u.z0,R=u.z1-g,E=Math.min(_,S,w,R);E===_?n.x-=_+t:E===S?n.x+=S+t:E===w?n.z-=w+t:n.z+=R+t,r=Math.max(r,E+t)}}}return r}terrainH(e,t){return this.terrain.meshHeight(e,t)}isFree(e,t,n){if(t>1750)return!1;let i=this.hw(e,t);if(i&&i.d<i.o.half+8+n||this.river.dist(e,t)<Xn/2+12+n)return!1;for(let r of this.areas){if(r.circle){if(Math.hypot(e-r.x,t-r.z)<r.r+10+n)return!1;continue}if(e>r.x0-25-n&&e<r.x1+25+n&&t>r.z0-25-n&&t<r.z1+25+n)return!1}for(let r of this.fields)if(e>r.x0-n&&e<r.x1+n&&t>r.z0-n&&t<r.z1+n)return!1;return!0}build(){let e=(r,a={})=>new sn(Ut({map:r},a)),t={grass:e(Pe.grass(),{vertexColors:!0,side:dt,color:13226674}),road:e(Pe.road()),hwy:e(Pe.highway()),dirt:e(Pe.surface("dirt")),mud:new pn({map:Pe.surface("mud"),shininess:60,specular:3355426}),gravel:e(Pe.surface("gravel")),cobble:e(Pe.surface("cobble")),cobbleI:e(Pe.surface("cobble")),terrain:new sn({map:Pe.grass(),vertexColors:!0,color:14080196}),inter:e(Pe.intersection()),concrete:e(Pe.concrete()),bridge:e(Pe.concrete(),{side:dt}),lot:e(Pe.lot()),field:e(Pe.field(),{vertexColors:!0}),sand:e(Pe.sand()),roof:e(Pe.roof()),tiles:e(Pe.tiles()),wh:e(Pe.warehouse(),{vertexColors:!0}),f:[0,1,2,3].map(r=>new pn({map:Pe.facade(r),emissiveMap:Pe.facade(r).userData.emissive,emissive:16777215,emissiveIntensity:0,shininess:r===0||r===3?60:8,specular:r===0||r===3?5592405:1118481})),flat:new sn({vertexColors:!0}),metal:new pn({map:Pe.metal(),vertexColors:!0,shininess:50,specular:6710886}),cont:e(Pe.container(14540253),{vertexColors:!0}),leaf:e(Pe.foliage(),{vertexColors:!0})};this.M=t;let n={grass:new Le(!0),road:new Le,hwy:new Le,dirt:new Le,mud:new Le,gravel:new Le,cobble:new Le,cobbleI:new Le,inter:new Le,concrete:new Le,bridge:new Le,lot:new Le,field:new Le(!0),sand:new Le,roof:new Le,tiles:new Le,wh:new Le(!0),f:[new Le,new Le,new Le,new Le],flat:new Le(!0),metal:new Le(!0),cont:new Le(!0)};this.B=n,this.trees=[],this.lamps=[],this.rails=[],this.posts=[],this.r=gy(1234);for(let r of Dn)this.areas.push({x0:r.x0-ut,z0:r.z0-ut,x1:Ni(r)+ut,z1:as(r)+ut,city:r});for(let r of this.hws)for(let a of[r.def.from,r.def.to]){if(!a||a[0]==="hw")continue;let o=yc[a[0]],c=o.x0+a[1]*140,l=o.z0+a[2]*140;this.areas.push({x0:c-22,z0:l-22,x1:c+22,z1:l+22,pad:!0}),n.hwy.ground(c-22,l-22,c+22,l+22,.015,18)}for(let r of jn)r.lot&&this.areas.push({x0:r.lot[0],z0:r.lot[1],x1:r.lot[2],z1:r.lot[3],lot:r.id});for(let r of this.hws)r.def.from&&r.def.from[0]==="hw"&&this.areas.push({circle:!0,x:r.x[0],z:r.z[0],r:20});this.terrain.build(this.scene,t.terrain,this.q.terrainStep||24),this.layoutCountry(),this.buildFields();for(let r of Dn)this.buildCity(r);for(let r of jn)r.lot&&this.buildDepot(r,...r.lot);for(let r of this.hws)this.buildHighway(r);this.buildRiverAndSea();for(let r=0;r<14;r++){let a=500+this.r()*1500,o=-900+this.r()*700,c=this.terrainH(a,o);this.isFree(a,o,20)&&c>8&&this.turbine(a,o,50,1,c-1)}this.scatterForest();let i=(r,a,o=!1)=>{let c=r.mesh(a,{cast:o});return c&&this.scene.add(c),c};i(n.grass,t.grass),i(n.road,t.road),i(n.hwy,t.hwy),i(n.dirt,t.dirt),i(n.mud,t.mud),i(n.gravel,t.gravel),i(n.cobble,t.cobble),i(n.cobbleI,t.cobbleI),i(n.inter,t.inter),i(n.concrete,t.concrete,!0),i(n.bridge,t.bridge,!0),i(n.lot,t.lot),i(n.field,t.field),i(n.sand,t.sand),i(n.roof,t.roof),i(n.tiles,t.tiles,!0),i(n.wh,t.wh,!0),i(n.flat,t.flat,!0),i(n.metal,t.metal,!0),i(n.cont,t.cont,!0),n.f.forEach((r,a)=>i(r,t.f[a],!0)),this.buildRails(),this.buildTrees(),this.buildLamps(),this.B=null}hwDistFar(e,t){let n=1/0;for(let i of this.hws)for(let r=0;r<i.n;r+=3)n=Math.min(n,(i.x[r]-e)**2+(i.z[r]-t)**2);return Math.sqrt(n)}layoutCountry(){let e=this.r,t=[[-1e3,160,-600,700],[-2900,-1600,-2300,-1100],[600,150,1700,1e3],[1200,-700,1900,-150],[-2500,-800,-1950,-150]];for(let[n,i,r,a]of t)for(let o=n;o<r;o+=140)for(let c=i;c<a;c+=110){let l={x0:o+6,z0:c+6,x1:o+134,z1:c+104};[[l.x0,l.z0],[l.x1,l.z0],[l.x0,l.z1],[l.x1,l.z1],[(l.x0+l.x1)/2,(l.z0+l.z1)/2]].every(([d,u])=>this.isFree(d,u,12)&&this.terrain.slope(d,u)<.12)&&e()>.2&&this.fields.push(l)}}buildFields(){let e=[16777215,15265984,14207120,13164712],t=this.terrain,n=this.B.field;this.fields.forEach((i,r)=>{let o=Math.ceil((i.x1-i.x0)/10),c=Math.ceil((i.z1-i.z0)/10);for(let l=0;l<o;l++)for(let h=0;h<c;h++){let d=i.x0+l*10,u=Math.min(i.x1,d+10),f=i.z0+h*10,g=Math.min(i.z1,f+10),b=(p,m)=>t.meshHeight(p,m)+.12;n.quad([d,b(d,g),g],[u,b(u,g),g],[u,b(u,f),f],[d,b(d,f),f],[0,1,0],[d/24,-g/24,u/24,-g/24,u/24,-f/24,d/24,-f/24],e[r%e.length])}})}buildCity(e){let t=Ut({},this.B);e.surface==="cobble"&&(t.road=this.B.cobble,t.inter=this.B.cobbleI);let n=a=>e.x0+a*140,i=a=>e.z0+a*140;for(let a=0;a<=e.nx;a++){let o=n(a);for(let c=0;c<e.nz;c++){let l=i(c)+ut,h=i(c+1)-ut;t.road.quad([o-ut,.02,h],[o+ut,.02,h],[o+ut,.02,l],[o-ut,.02,l],[0,1,0],[0,0,1,0,1,(h-l)/20,0,(h-l)/20])}}for(let a=0;a<=e.nz;a++){let o=i(a);for(let c=0;c<e.nx;c++){let l=n(c)+ut,h=n(c+1)-ut;t.road.quad([l,.02,o+ut],[h,.02,o+ut],[h,.02,o-ut],[l,.02,o-ut],[0,1,0],[0,0,0,(h-l)/20,1,(h-l)/20,1,0])}}for(let a=0;a<=e.nx;a++)for(let o=0;o<=e.nz;o++){let c=n(a),l=i(o);t.inter.quad([c-ut,.025,l+ut],[c+ut,.025,l+ut],[c+ut,.025,l-ut],[c-ut,.025,l-ut],[0,1,0],[0,0,1,0,1,1,0,1])}let r={};for(let a of jn)a.city===e.id&&(r[a.bx+","+a.bz]=a);for(let a=0;a<e.nx;a++)for(let o=0;o<e.nz;o++){let c=n(a)+ut,l=n(a+1)-ut,h=i(o)+ut,d=i(o+1)-ut,u=r[a+","+o];u?this.buildDepot(u,c,h,l,d):this.buildBlock(Mc(e,a,o),c,h,l,d)}this.roadSign(e.x0-26,e.z0-26,Math.PI*.75,e.name.toUpperCase(),"Bem-vindo","#1d4f7a")}grassPatch(e,t,n,i){this.B.grass.quad([e,.225,i],[n,.225,i],[n,.225,t],[e,.225,t],[0,1,0],[e/14,-i/14,n/14,-i/14,n/14,-t/14,e/14,-t/14],15267288)}tree(e,t,n=1,i=0,r=.2){this.trees.push({x:e,z:t,y:r,s:n*(.8+this.r()*.5),k:i,rot:this.r()*6.28})}building(e,t,n,i,r,a){let o=this.B,c=(this.r()*4|0)*.25;if(o.f[a].walls(e,.2,t,n,r,i,16,14,c),o.roof.top(e,t,n,i,r,6),o.flat.walls(e,r,t,n,r+.8,i,1,1,0,9276813),o.flat.walls(e-.3,3.4,t-.3,n+.3,3.8,i+.3,1,1,0,6122878),r>14&&this.r()>.3){let l=(n-e)*.3,h=(i-t)*.3,d=(e+n)/2+(this.r()-.5)*4,u=(t+i)/2;o.flat.box(d-l/2,r,u-h/2,d+l/2,r+3,u+h/2,1,10526880),o.metal.add(ke.cyl(12),Ce(d+l,r+2,u,0,0,0,2.4,3,2.4),13620182),o.flat.add(ke.box(),Ce(d-l*.3,r+6,u,0,0,0,.15,6,.15),7829367)}}house(e,t,n,i,r,a){let o=this.B;o.flat.walls(e,.2,t,n,r,i,1,1,0,a);let c=(e+n)/2;o.flat.quad([c-.6,.2,i+.02],[c+.6,.2,i+.02],[c+.6,2.4,i+.02],[c-.6,2.4,i+.02],[0,0,1],[0,0,1,0,1,1,0,1],5913122);for(let S of[e+1.6,n-2.8])o.flat.quad([S,1.2,i+.02],[S+1.2,1.2,i+.02],[S+1.2,2.4,i+.02],[S,2.4,i+.02],[0,0,1],[0,0,1,0,1,1,0,1],2899536),o.flat.quad([S+1.2,1.2,t-.02],[S,1.2,t-.02],[S,2.4,t-.02],[S+1.2,2.4,t-.02],[0,0,-1],[0,0,1,0,1,1,0,1],2899536);let l=2.2,h=.4,d=(t+i)/2,u=e-h,f=n+h,g=t-h,b=i+h,p=Math.hypot(l,d-g),m=(d-g)/p,v=l/p,x=(f-u)/3,_=p/3;o.tiles.quad([u,r,b],[f,r,b],[f,r+l,d],[u,r+l,d],[0,m,v],[0,0,x,0,x,_,0,_]),o.tiles.quad([f,r,g],[u,r,g],[u,r+l,d],[f,r+l,d],[0,m,-v],[0,0,x,0,x,_,0,_]),o.flat.quad([e,r,t],[e,r,i],[e,r+l,d],[e,r+l,d],[-1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.quad([n,r,i],[n,r,t],[n,r+l,d],[n,r+l,d],[1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.walls(e-2,.2,i+2,n+2,1.1,i+2.2,1,1,0,14275783)}tank(e,t,n,i,r=15263976){this.B.metal.add(ke.cyl(20),Ce(e,i/2,t,0,0,0,n*2,i,n*2),r,1),this.B.metal.add(ke.cone(20),Ce(e,i+n*.2,t,0,0,0,n*2.02,n*.4,n*2.02),r),this.B.flat.add(ke.box(),Ce(e+n+.1,i/2,t,0,0,0,.1,i,.7),8359053)}chimney(e,t,n,i,r=10129286){this.B.flat.add(ke.cyl(14),Ce(e,i/2,t,0,0,0,n*2,i,n*2),r),this.B.flat.add(ke.cyl(14),Ce(e,i-3,t,0,0,0,n*2.1,1.2,n*2.1),12597547),this.B.flat.add(ke.cyl(14),Ce(e,i-6,t,0,0,0,n*2.1,1.2,n*2.1),15790320)}containerStack(e,t,n,i,r,a){let o=[12597547,2388387,1999945,14059792,8207512,8622482,10502144,1145445];for(let c=0;c<i;c++)for(let l=0;l<r;l++){let h=1+(this.r()*a|0);for(let d=0;d<h;d++){let u=(c-(i-1)/2)*2.6,f=(l-(r-1)/2)*12.6,g=Math.cos(n),b=Math.sin(n);this.B.cont.add(ke.box(),Ce(e+u*g+f*b,1.3+d*2.6,t-u*b+f*g,0,n,0,2.44,2.59,12.2),o[this.r()*o.length|0])}}}crane(e,t,n,i){let r=this.B,a=15844367;r.flat.add(ke.box(),Ce(e,n/2,t,0,0,0,1.6,n,1.6),a);let o=Math.cos(i),c=Math.sin(i);r.flat.add(ke.box(),Ce(e+c*12,n+.8,t+o*12,0,i,0,1.2,1.2,44),a),r.flat.add(ke.box(),Ce(e-c*8,n-.6,t-o*8,0,i,0,2.2,2,4),8359053),r.flat.add(ke.box(),Ce(e,n+3,t,0,0,0,1,6,1),a),r.flat.add(ke.box(),Ce(e+c*1.5,n-1.2,t+o*1.5,0,i,0,2.4,2.4,2.4),3426654)}turbine(e,t,n=48,i=1,r=0){let a=this.B;if(a.flat.add(ke.cyl(14),Ce(e,r+n*i/2,t,0,0,0,2.2*i,n*i,2.2*i),16054007),a.flat.add(ke.box(),Ce(e,r+n*i+1,t-1,0,0,0,2.2*i,2.4*i,6*i),15396333),!this.rotorGeo){let c=new Le,l=new fn(1.4,22,.4);l.translate(0,11,0);for(let h=0;h<3;h++)c.add(l,Ce(0,0,0,0,0,h*Math.PI*2/3));c.add(ke.sphere(),Ce(0,0,0,0,0,0,2,2,2)),this.rotorGeo=c.geometry(),this.rotorMat=new sn({color:16316921})}let o=new Oe(this.rotorGeo,this.rotorMat);o.scale.setScalar(i),o.position.set(e,r+n*i+1,t+2.2*i),o.rotation.z=this.r()*6,this.scene.add(o),this.animated.push({obj:o,speed:.6+this.r()*.4})}buildBlock(e,t,n,i,r){let a=this.B,o=this.r;this.addCollider(t,n,i,r);let c=t+5,l=n+5,h=i-5,d=r-5,u=h-c;for(let[f,g]of[[t+1.5,n+1.5],[i-1.5,n+1.5],[t+1.5,r-1.5],[i-1.5,r-1.5]])this.lamps.push({x:f,z:g});if(a.concrete.walls(t,0,n,i,.22,r,4,4),a.concrete.top(t,n,i,r,.22,4),e==="downtown"){let g=u/2;for(let b=0;b<2;b++)for(let p=0;p<2;p++){let m=g*(.62+o()*.28),v=g*(.62+o()*.28),x=c+g*(b+.5),_=l+g*(p+.5);this.building(x-m/2,_-v/2,x+m/2,_+v/2,35+o()*95,o()>.5?0:3)}for(let b=0;b<8;b++)this.tree(t+2+b*(i-t-4)/7,n+2,.8)}else if(e==="residential"||e==="town"){this.grassPatch(t+4,n+4,i-4,r-4);let f=3,g=u/f;for(let b=0;b<f;b++)for(let p=0;p<f;p++){let m=c+g*(b+.5),v=l+g*(p+.5);if(b===1&&p===1){for(let x=0;x<4;x++)this.tree(m+(o()-.5)*20,v+(o()-.5)*20,1);continue}if(e==="town"||o()<.45){let x=10+o()*6,_=9+o()*4,S=[16115400,14674416,15978928,15262376,13231041,15780297,16777215];this.house(m-x/2,v-_/2,m+x/2,v+_/2,3.6+(o()>.7?3.2:0),S[o()*S.length|0]),this.tree(m+x/2+3,v+_/2+3,.9)}else{let x=g*(.6+o()*.3),_=g*(.6+o()*.3);this.building(m-x/2,v-_/2,m+x/2,v+_/2,8+o()*26,o()>.5?1:2)}}for(let b=0;b<7;b++){let p=t+6+b*(i-t-12)/6;this.tree(p,n+2,.75),this.tree(p,r-2,.75)}}else if(e==="park"){this.grassPatch(t+4,n+4,i-4,r-4);for(let f=0;f<46;f++)this.tree(c+o()*u,l+o()*u,1.1,o()>.7?1:0);a.sand.ground(c+u*.35,l+u*.35,c+u*.65,l+u*.65,.235,8)}else if(e==="industrial"){let f=10+o()*6,g=u/2,b=[16777215,14083312,15786704,14543064][o()*4|0];if(a.wh.walls(c+2,.2,l+2,h-2,f,l+g-4,6,6,0,b),a.roof.top(c+2,l+2,h-2,l+g-4,f,6),o()>.4)for(let p=0;p<3;p++)this.tank(c+18+p*26,d-22,9,14+o()*8);else a.wh.walls(c+4,.2,l+g+4,h-30,f*.8,d-4,6,6,0,b),a.roof.top(c+4,l+g+4,h-30,d-4,f*.8,6),this.chimney(h-14,d-16,2.5,38+o()*20)}else e==="port"&&(this.containerStack(c+28,(l+d)/2,0,8,3,4),this.containerStack(h-28,(l+d)/2,0,8,3,3),this.crane((c+h)/2,d-4,30,Math.PI/2))}buildDepot(e,t,n,i,r){let a=this.B,o=this.r;a.lot.ground(t,n,i,r,.03,12);let c=(t+i)/2,l=(n+r)/2,h,d,u,f,g=34,b=14;if(e.side==="n"?(h={x:c,z:n+22,w:g,d:b},d=[t+10,r-50,i-10,r-6],u={x:c,z:n-ut},f="n"):e.side==="s"?(h={x:c,z:r-22,w:g,d:b},d=[t+10,n+6,i-10,n+50],u={x:c,z:r+ut},f="s"):e.side==="w"?(h={x:t+22,z:l,w:b,d:g},d=[i-50,n+10,i-6,r-10],u={x:t-ut,z:l},f="w"):(h={x:i-22,z:l,w:b,d:g},d=[t+6,n+10,t+50,r-10],u={x:i+ut,z:l},f="e"),e.lot){let E=this.hwIdx.nearest(u.x,u.z,{});E&&(u={x:E.x,z:E.z,hw:E.o.id,s:E.o.s[E.i]+(E.o.s[E.i+1]-E.o.s[E.i])*E.t});let B=(M,T,G,X)=>{let C=Math.hypot(G-M,X-T);a.flat.add(ke.box(),Ce((M+G)/2,.9,(T+X)/2,0,Math.atan2(G-M,X-T),0,.08,1.8,C),7305856)};f!=="n"&&B(t,n,i,n),f!=="s"&&B(t,r,i,r),f!=="w"&&B(t,n,t,r),f!=="e"&&B(i,n,i,r)}this.depots[e.id]=Zn(Ut({},e),{zone:h,entry:u,lot:[t,n,i,r]});let[p,m,v,x]=d,_=(p+v)/2,S=(m+x)/2,w=e.kind,R=(E,B=16777215,M=-1)=>{M>=0?a.f[M].walls(p,.03,m,v,E,x,16,14,0):a.wh.walls(p,.03,m,v,E,x,6,6,0,B),a.roof.top(p,m,v,x,E,6),a.flat.walls(p,E,m,v,E+.6,x,1,1,0,e.color),this.addCollider(p,m,v,x);let T=2962486;for(let G=0;G<4;G++){let X=(G+.5)/4,C=4,F=Math.min(5,E-1);if(f==="n"){let A=p+(v-p)*X;a.flat.quad([A+C/2,.03,m-.05],[A-C/2,.03,m-.05],[A-C/2,F,m-.05],[A+C/2,F,m-.05],[0,0,-1],[0,0,1,0,1,1,0,1],T)}if(f==="s"){let A=p+(v-p)*X;a.flat.quad([A-C/2,.03,x+.05],[A+C/2,.03,x+.05],[A+C/2,F,x+.05],[A-C/2,F,x+.05],[0,0,1],[0,0,1,0,1,1,0,1],T)}if(f==="w"){let A=m+(x-m)*X;a.flat.quad([p-.05,.03,A-C/2],[p-.05,.03,A+C/2],[p-.05,F,A+C/2],[p-.05,F,A-C/2],[-1,0,0],[0,0,1,0,1,1,0,1],T)}if(f==="e"){let A=m+(x-m)*X;a.flat.quad([v+.05,.03,A+C/2],[v+.05,.03,A-C/2],[v+.05,F,A-C/2],[v+.05,F,A+C/2],[1,0,0],[0,0,1,0,1,1,0,1],T)}}this.signFor(e,f,d,E)};if(w==="port")this.containerStack(_-25,S,Math.PI/2,4,3,4),this.containerStack(_+25,S,Math.PI/2,4,3,3),this.addCollider(p,m,v,x),this.crane(_,S,34,0),this.signFor(e,f,d,4,!0);else if(w==="refinery"){for(let E=0;E<2;E++)for(let B=0;B<3;B++)this.tank(p+12+E*22,m+15+B*32,9,12+o()*6);this.chimney(v-8,m+12,1.6,42,12436423),this.addCollider(p,m,v,x),this.signFor(e,f,d,4,!0)}else if(w==="farm")a.flat.walls(p+5,.03,m+6,v-30,9,x-6,1,1,0,11088422),a.tiles.top(p+4,m+5,v-29,x-5,9,4),this.tank(v-14,S-10,5,18,14014684),this.tank(v-14,S+10,5,18,14014684),this.addCollider(p,m,v,x),this.signFor(e,f,d,4,!0);else if(w==="silo"){for(let E=0;E<2;E++)for(let B=0;B<3;B++)this.tank(p+12+E*20,m+18+B*32,7,26,13620182);this.addCollider(p,m,v,x),this.signFor(e,f,d,4,!0)}else if(w==="wind"){for(let E=0;E<3;E++)this.turbine(p+10+E*40,S,55,1);this.addCollider(p,m,v,x),this.signFor(e,f,d,4,!0)}else if(w==="construction"){for(let E=0;E<4;E++)for(let B=0;B<3;B++)for(let M=0;M<5;M++)a.flat.add(ke.box(),Ce(p+6+E*10,M*4+2,m+10+B*14,0,0,0,.8,4,.8),10923183);for(let E=1;E<=5;E++)a.flat.add(ke.box(),Ce(p+21,E*4,m+24,0,0,0,32,.4,30),11777719);this.crane(v-8,x-10,40,Math.PI/2),this.addCollider(p,m,v,x),this.signFor(e,f,d,4,!0)}else if(w==="fuel"){R(5,16777215);let E=h;a.flat.add(ke.box(),Ce(E.x,7,E.z,0,0,0,E.w+6,.8,E.d+6),13639712);for(let[B,M]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let T=E.x+B*(E.w/2+4),G=E.z+M*(E.d/2+4);a.flat.add(ke.box(),Ce(T,3.5,G,0,0,0,.6,7,.6),15528177),this.addCollider(T-.4,G-.4,T+.4,G+.4)}}else if(w==="steel")R(18,13220008),this.chimney(p+8,m+8,2.6,55),this.chimney(v-8,x-8,2.6,50);else if(w==="sawmill"){let B=(p+v)/2;a.wh.walls(p,.03,m,B,8,x,6,6,0,13148794),a.roof.top(p,m,B,x,8,6),this.addCollider(p,m,v,x);for(let M=0;M<3;M++)for(let T=0;T<7;T++){let G=m+14+M*30,X=B+4+T%4*2.2+(T>=4?1.1:0),C=T>=4?2.8:.9;a.flat.add(ke.cyl(10),Ce(X,C,G,Math.PI/2,0,0,1.8,14,1.8),9329458)}this.signFor(e,f,d,4,!0)}else if(w==="quarry"){R(9,13682878);for(let E=0;E<2;E++)a.flat.add(ke.cone(16),Ce(p+25+E*50,5,S,0,0,0,18,10,18),10261124)}else w==="hospital"?R(22,16777215,2):w==="market"?R(10,16777215,1):R(w==="garage"?9:12,w==="garage"?14083319:16777215);this.lamps.push({x:t+2,z:n+2},{x:i-2,z:r-2})}signFor(e,t,n,i,r=!1){let[a,o,c,l]=n,h=26,d=26*(192/1024),u=new Oe(new Kt(h,d),new rt({map:Pe.sign(e.name.toUpperCase(),"#"+new he(e.color).multiplyScalar(.75).getHexString(),"#ffffff"),side:dt})),f=r?8:i+d/2+.8;if(t==="n"&&(u.position.set((a+c)/2,f,o-(r?4:.3)),u.rotation.y=Math.PI),t==="s"&&u.position.set((a+c)/2,f,l+(r?4:.3)),t==="w"&&(u.position.set(a-(r?4:.3),f,(o+l)/2),u.rotation.y=-Math.PI/2),t==="e"&&(u.position.set(c+(r?4:.3),f,(o+l)/2),u.rotation.y=Math.PI/2),u.matrixAutoUpdate=!1,u.updateMatrix(),this.scene.add(u),r){let g=u.position,b=Math.cos(u.rotation.y),p=Math.sin(u.rotation.y);for(let m of[-1,1])this.B.flat.add(ke.box(),Ce(g.x+b*m*10,3,g.z-p*m*10,0,u.rotation.y,0,.5,6,.5),5592405)}}roadSign(e,t,n,i,r,a="#0f6b3a",o=0){let h=new Oe(new Kt(9,3.6),new rt({map:Pe.roadSign(i,r,a),side:dt}));h.position.set(e,o+5.2,t),h.rotation.y=n,h.matrixAutoUpdate=!1,h.updateMatrix(),this.scene.add(h);let d=Math.cos(n),u=Math.sin(n);for(let f of[-1,1])this.B.metal.add(ke.cyl(8),Ce(e+d*f*3.6,o+3.4,t-u*f*3.6,0,0,0,.25,6.8,.25),11581115)}buildHighway(e){let t=this.B,n=e.n,i=e.half,r=this.terrain,a=e.surface==="asphalt"?t.hwy:t[e.surface],o=e.surface==="asphalt"?18:i*2;for(let b=0;b<n-1;b++){let p=b,m=b+1,v=[-e.dz[p],e.dx[p]],x=[-e.dz[m],e.dx[m]],_=e.y[p]+.04,S=e.y[m]+.04,w=e.s[p]/o,R=e.s[m]/o,E=(M,T,G,X)=>[e.x[M]+T[0]*G,X,e.z[M]+T[1]*G];a.quad(E(p,v,-i,_),E(p,v,i,_),E(m,x,i,S),E(m,x,-i,S),[0,1,0],[0,w,1,w,1,R,0,R]);let B=e.bridge[p]||e.bridge[m];for(let M of[-1,1]){let T=E(p,v,M*i,_-.04),G=E(m,x,M*i,S-.04);B&&t.bridge.quad([T[0],_-1.6,T[2]],[G[0],S-1.6,G[2]],[G[0],S+1,G[2]],[T[0],_+1,T[2]],[v[0]*M,0,v[1]*M],[e.s[p]/4,0,e.s[m]/4,0,e.s[m]/4,.6,e.s[p]/4,.6])}if(B&&(t.bridge.quad(E(p,v,i,_-1.6),E(p,v,-i,_-1.6),E(m,x,-i,S-1.6),E(m,x,i,S-1.6),[0,-1,0],[0,0,1,0,1,1,0,1]),b%7===0)){for(let M of[-1,1]){let T=E(p,v,M*5,0),G=e.y[p]-1.6;t.bridge.add(ke.cyl(12),Ce(T[0],(G-2)/2,T[2],0,0,0,1.6,G+2,1.6))}t.bridge.add(ke.box(),Ce(e.x[p],e.y[p]-2,e.z[p],0,Math.atan2(e.dx[p],e.dz[p]),0,13,.8,1.6))}if(!B&&e.surface==="asphalt"&&b%2===0){let M=[-e.dz[p],e.dx[p]],T=r.raw(e.x[p]+M[0]*(i+6),e.z[p]+M[1]*(i+6)),G=r.raw(e.x[p]-M[0]*(i+6),e.z[p]-M[1]*(i+6));e.y[p]-Math.min(T,G)>2.5&&(this.rails.push({h:e,i:p}),this.rails.push({h:e,i:p+1}))}if(b%12===0&&e.surface==="asphalt")for(let M of[-1,1])this.posts.push({x:e.x[p]+v[0]*M*(i+.7),y:e.y[p],z:e.z[p]+v[1]*M*(i+.7),rot:Math.atan2(e.dx[p],e.dz[p])})}let c=jn.filter(b=>b.hw===e.id).map(b=>b.name),l=b=>b&&b[0]!=="hw"?yc[b[0]].name:c.slice(-2).join(" \u2022 ")||e.id,h=(e.length/1e3).toFixed(1).replace(".",","),d=(b,p,m)=>{let v=[-e.dz[b],e.dx[b]],x=e.x[b]+v[0]*p*(i+3),_=e.z[b]+v[1]*p*(i+3);this.roadSign(x,_,Math.atan2(e.dx[b],e.dz[b])+(p>0?Math.PI:0),m,`${e.id} \u2022 ${h} km${e.surface!=="asphalt"?" \u2022 "+Ds[e.surface].name:""}`,e.surface==="asphalt"?"#0f6b3a":"#7a5230",e.y[b])};if(d(Math.min(e.n-1,16),1,l(e.def.to)),e.def.to&&d(Math.max(0,e.n-17),-1,l(e.def.from)),e.surface!=="asphalt")return;let u=e.n/2|0,f=[-e.dz[u],e.dx[u]],g=new Oe(new sc(.9,24),new rt({map:Pe.speedSign(80),side:dt}));g.position.set(e.x[u]+f[0]*(i+2),e.y[u]+2.6,e.z[u]+f[1]*(i+2)),g.rotation.y=Math.atan2(e.dx[u],e.dz[u])+Math.PI,this.scene.add(g),t.metal.add(ke.cyl(6),Ce(g.position.x,e.y[u]+1,g.position.z,0,0,0,.12,2.6,.12),11581115)}buildRails(){let e=new Le;for(let{h:i,i:r}of this.rails){let a=Math.min(i.n-1,r+1);for(let o of[-1,1]){let c=i.half+.3,l=i.x[r]-i.dz[r]*o*c,h=i.z[r]+i.dx[r]*o*c,d=i.x[a]-i.dz[a]*o*c,u=i.z[a]+i.dx[a]*o*c,f=i.y[r],g=i.y[a];e.quad([l,f+.45,h],[d,g+.45,u],[d,g+.8,u],[l,f+.8,h],[-i.dz[r]*o,0,i.dx[r]*o],[0,0,1,0,1,1,0,1])}}this.rails.length&&this.scene.add(e.mesh(new pn({map:Pe.metal(),side:dt,shininess:60})));let t=new fn(.15,1.1,.15);t.translate(0,.55,0);let n=new si(t,new sn({color:15921906}),this.posts.length);this.posts.forEach((i,r)=>n.setMatrixAt(r,Ce(i.x,i.y,i.z,0,i.rot,0))),n.computeBoundingSphere(),this.scene.add(n)}buildRiverAndSea(){let e=this.river,t=new Le,n=Xn/2,i=o=>{let c=Math.max(0,o-1),l=Math.min(e.n-1,o+1),h=e.x[l]-e.x[c],d=e.z[l]-e.z[c],u=Math.hypot(h,d)||1;return[-d/u,h/u]};for(let o=0;o<e.n-1;o++){let c=i(o),l=i(o+1),h=(p,m,v,x)=>[e.x[p]+m[0]*v,x,e.z[p]+m[1]*v],d=-.7,u=h(o,c,-n-4,d),f=h(o,c,n+4,d),g=h(o+1,l,n+4,d),b=h(o+1,l,-n-4,d);if(t.quad(u,f,g,b,[0,1,0],[u[0]/30,u[2]/30,f[0]/30,f[2]/30,g[0]/30,g[2]/30,b[0]/30,b[2]/30]),o%3===0)for(let p of[-1,1]){let m=h(o,c,p*(n+22+this.r()*14),0);this.tree(m[0],m[2],1.2,0,this.terrain.meshHeight(m[0],m[2])-.3)}}this.M.sand.side=dt;let r=new pn({map:Pe.water().clone(),color:10274518,shininess:110,specular:10075101,transparent:!0,opacity:.94,side:dt});r.map.needsUpdate=!0,this.riverMesh=t.mesh(r),this.scene.add(this.riverMesh);let a=new Oe(new Kt(12e3,4e3),new pn({map:Pe.water().clone(),shininess:90,specular:8956620,transparent:!0,opacity:.95}));a.material.map.needsUpdate=!0,a.material.map.repeat.set(400,130),a.rotation.x=-Math.PI/2,a.position.set(0,.07,3790),this.water=a,this.scene.add(a)}scatterForest(){let e=this.r,t=this.q.trees,n=0,i=0;for(;i<t&&n++<t*8;){let a=Rt.x0+e()*(Rt.x1-Rt.x0),o=Rt.z0+e()*(Rt.z1-Rt.z0),c=Sp(a/520,o/520)*.8+(a<-300&&o<600?.55:-.15);if(e()>c||!this.isFree(a,o,2))continue;let l=this.terrainH(a,o);if(l>145||l<.3||this.terrain.slope(a,o)>.55)continue;let h=a<-1500||a>2600||l>60||Sp(a/300+9,o/300)>.62;this.tree(a,o,1.3+e()*.8,h?1:0,l-.3),i++}for(let a of this.fields)for(let o=0;o<5;o++){let c=a.x0+e()*(a.x1-a.x0),l=a.z0-5;this.tree(c,l,1.1,0,this.terrainH(c,l)-.3)}let r=this.q.trees/7e3;for(let a of this.hws)if(a.id!=="SP-280")for(let o=0;o<a.n;o+=2){let c=Math.round(3*r+e());for(let l=0;l<c;l++){let h=e()<.5?-1:1,d=a.half+10+Math.pow(e(),1.6)*70,u=a.x[o]-a.dz[o]*h*d+(e()-.5)*6,f=a.z[o]+a.dx[o]*h*d+(e()-.5)*6;if(!this.isFree(u,f,0))continue;let g=a.id==="RS-030"?e()<.7:e()<.3,b=this.terrainH(u,f);b<.3||this.terrain.slope(u,f)>.6||this.tree(u,f,1.5+e()*1.1,g?1:0,b-.3)}}}buildTrees(){let e=c=>{let l=c===1?4.6:c===2?5:6.6,h=c===1?10:c===2?13:8.5,d=[],u=[],f=[],g=[],b=3;for(let m=0;m<b;m++){let v=m/b*Math.PI,x=Math.cos(v)*l/2,_=Math.sin(v)*l/2,S=d.length/3;d.push(-x,0,-_,x,0,_,x,h,_,-x,h,-_);for(let w=0;w<4;w++)u.push(0,.85,.15);f.push(0,0,1,0,1,1,0,1),g.push(S,S+1,S+2,S,S+2,S+3)}let p=new mt;return p.setAttribute("position",new Ge(d,3)),p.setAttribute("normal",new Ge(u,3)),p.setAttribute("uv",new Ge(f,2)),p.setIndex(g),p},t=[e(0),e(1),e(2)],n=[0,1,2].map(c=>new sn({map:Pe.treeCard(c),alphaTest:.45,side:dt})),i=[0,1,2].map(c=>new ba({depthPacking:Ch,map:Pe.treeCard(c),alphaTest:.45})),r=700,a=new Map;for(let c of this.trees){let l=c.k;l===0&&(c.x*13+c.z*7|0)%7===0&&c.x>-800&&(l=2);let h=Math.floor(c.x/r)*1e3+Math.floor(c.z/r)+":"+l;a.has(h)||a.set(h,[]),a.get(h).push(c)}let o=new he;for(let[c,l]of a){let h=+c.split(":")[1],d=new si(t[h],n[h],l.length);l.forEach((u,f)=>{d.setMatrixAt(f,Ce(u.x,u.y,u.z,0,u.rot,0,u.s*.95,u.s*(.85+f%5*.07),u.s*.95)),o.setHSL(.2+f*37%10/160,.25,.78+f*13%10/40),d.setColorAt(f,o)}),d.computeBoundingSphere(),d.castShadow=!0,d.customDepthMaterial=i[h],this.scene.add(d)}}buildLamps(){let e=this.lamps.length,t=new Wn(.12,.16,8,6);t.translate(0,4,0);let n=new fn(.15,.15,2.2);n.translate(0,8,1);let i=new fn(.5,.2,.9);i.translate(0,7.9,2);let r=new si(t,new sn({color:6122878}),e),a=new si(n,new sn({color:6122878}),e),o=new si(i,new rt({color:16642768}),e),c=new Kt(16,16);c.rotateX(-Math.PI/2),c.translate(0,.12,3.5);let l=new si(c,new rt({map:Pe.glow(),color:16757596,transparent:!0,opacity:0,depthWrite:!1,blending:Pn}),e);this.lamps.forEach((h,d)=>{let u=this.areas.find(b=>b.city&&h.x>=b.x0&&h.x<=b.x1&&h.z>=b.z0&&h.z<=b.z1),f=0;if(u){let b=u.city,p=Math.round((h.x-b.x0)/140)*140+b.x0,m=Math.round((h.z-b.z0)/140)*140+b.z0;f=Math.abs(h.x-p)<Math.abs(h.z-m)?p>h.x?Math.PI/2:-Math.PI/2:m>h.z?0:Math.PI}let g=Ce(h.x,0,h.z,0,f,0);r.setMatrixAt(d,g),a.setMatrixAt(d,g),o.setMatrixAt(d,g),l.setMatrixAt(d,g)}),this.lampHeads=o,this.lampPools=l,l.visible=!1;for(let h of[r,a,o,l])h.computeBoundingSphere(),this.scene.add(h)}setNight(e){for(let t of this.M.f)t.emissiveIntensity=Math.max(0,e*1.1-.1);this.lampPools.visible=e>.05,this.lampPools.material.opacity=e*.9,this.lampHeads.material.color.setRGB(.75+e*.25,.72+e*.2,.65+e*.1)}update(e,t){for(let n of this.animated)n.obj.rotation.z+=n.speed*e;this.water&&this.water.material.map.offset.set(t*.004,t*.006),this.riverMesh&&this.riverMesh.material.map.offset.set(t*.02,t*.01)}};var Na=new N;function Yn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;Na.copy(e),Na[n]=0,Na.normalize();let l=.5*a/(a+o),h=1-Na.angleTo(s)/c;return Math.sign(Na[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Fr=class extends fn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new N,c=new N,l=new N(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new N,b=.5/i;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[p+0]=l.x*Math.sign(o.x)+c.x*r,h[p+1]=l.y*Math.sign(o.y)+c.y*r,h[p+2]=l.z*Math.sign(o.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/f)){case 0:g.set(1,0,0),u[m+0]=Yn(g,c,"z","y",r,n),u[m+1]=1-Yn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),u[m+0]=1-Yn(g,c,"z","y",r,n),u[m+1]=1-Yn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),u[m+0]=1-Yn(g,c,"x","z",r,e),u[m+1]=Yn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),u[m+0]=1-Yn(g,c,"x","z",r,e),u[m+1]=1-Yn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),u[m+0]=1-Yn(g,c,"x","y",r,e),u[m+1]=1-Yn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),u[m+0]=Yn(g,c,"x","y",r,e),u[m+1]=1-Yn(g,c,"y","x",r,t);break}}};var wp=Object.fromEntries(Object.entries(Ds).map(([s,e])=>[s,Zn(Ut({},e),{key:s})])),Us="medium",Os={};function Tp(s){Us=s}var pi=null;function Fa(){if(pi)return pi;let s=Us!=="low",e=t=>{var n;return s?new wn(t):new pn({color:t.color,map:t.map,vertexColors:t.vertexColors,side:t.side,transparent:t.transparent,opacity:(n=t.opacity)!=null?n:1,shininess:t.roughness<.3?120:20,specular:t.metalness>.5?16777215:3355443})};return pi={chrome:e({color:15922422,metalness:1,roughness:.14,map:Pe.metal()}),alu:e({color:13225425,metalness:.9,roughness:.3}),dark:e({color:2040616,metalness:.1,roughness:.75,side:dt}),steel:e({color:3883336,metalness:.5,roughness:.5}),glass:e({color:989732,metalness:.4,roughness:.03,transparent:!0,opacity:.62,side:dt}),interior:e({color:2764081,metalness:0,roughness:.9}),lamp:s?new wn({map:Pe.headlamp(),emissiveMap:Pe.headlamp(),emissive:16777215,emissiveIntensity:.15,metalness:.6,roughness:.15,side:dt}):new rt({map:Pe.headlamp(),side:dt}),tail:new rt({map:Pe.taillamp(),side:dt}),lampFlat:s?new wn({color:16054008,emissive:16774102,emissiveIntensity:.15,metalness:.5,roughness:.1}):new rt({color:16054008}),blink:new Cs({map:Pe.glow(),color:16753178,transparent:!0,depthWrite:!1,blending:Pn}),rubber:e({color:16777215,map:Pe.tire(),metalness:0,roughness:.92}),rim:e({color:15264492,metalness:.85,roughness:.25}),light:new rt({color:16775393}),red:new rt({color:14037041}),amber:new rt({color:16753178}),grill:e({color:16777215,map:Pe.grill(),metalness:.7,roughness:.3}),flat:e({vertexColors:!0,metalness:.15,roughness:.55}),flatChrome:e({vertexColors:!0,metalness:.9,roughness:.2}),panel:e({color:16777215,map:Pe.panel(),metalness:.2,roughness:.5}),blob:new rt({map:Pe.blob(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),glow:new Cs({map:Pe.glow(),color:16774102,transparent:!0,depthWrite:!1,blending:Pn}),glowRed:new Cs({map:Pe.glow(),color:16722458,transparent:!0,depthWrite:!1,blending:Pn}),beam:new rt({map:Pe.beam(),transparent:!0,depthWrite:!1,blending:Pn,polygonOffset:!0,polygonOffsetFactor:-3})},pi}function by(s){return Us==="high"?new _n({color:s,map:Pe.paint(),metalness:.35,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):Us==="medium"?new wn({color:s,map:Pe.paint(),metalness:.35,roughness:.33}):new pn({color:s,map:Pe.paint(),shininess:90,specular:8947848})}var Bh={};function Ap(s,e){let t=s+"_"+e;if(Bh[t])return Bh[t];let n=[[s*.6,-e/2],[s*.9,-e/2],[s*.985,-e*.4],[s,-e*.25],[s,e*.25],[s*.985,e*.4],[s*.9,e/2],[s*.6,e/2]].map(([l,h])=>new ce(l,h)),i=new wa(n,22),r=[[.001,e*.36],[s*.18,e*.38],[s*.24,e*.3],[s*.5,e*.26],[s*.6,e*.34],[s*.6,-e*.3]].map(([l,h])=>new ce(l,h)),a=new wa(r,22),o=new Wn(.03,.03,.06,6),c=new Le;c.add(a,Ce(0,0,0));for(let l=0;l<10;l++){let h=l/10*Math.PI*2;c.add(o,Ce(Math.cos(h)*s*.32,e*.36,Math.sin(h)*s*.32))}return Bh[t]={tire:i,rim:c.geometry()}}function Rp(s){let e=new Le,t=[];for(let[i,r]of s){let a=e.idx.length;for(let[o,c]of i)e.add(o,c);t.push([a,e.idx.length-a,r])}let n=e.geometry();for(let[i,r,a]of t)r&&n.addGroup(i,r,a);return n}function Vh(s,e,t,n,i){let{tire:r,rim:a}=Ap(t,n),o=[],c=[];for(let d of[-1,1]){let u=d>0?-Math.PI/2:Math.PI/2;i?(o.push([r,Ce(d*(e/2+n*.52),0,0,0,0,u)]),o.push([r,Ce(d*(e/2-n*.52),0,0,0,0,u)]),c.push([a,Ce(d*(e/2+n*.52),0,0,0,0,u)])):(o.push([r,Ce(d*e/2,0,0,0,0,u)]),c.push([a,Ce(d*e/2,0,0,0,0,u)]))}let l=Fa(),h=new Oe(Rp([[o,0],[c,1]]),[l.rubber,l.rim]);return h.position.set(0,t,s),h.castShadow=!0,h}function Oa(s,e,t,n,i){let{tire:r,rim:a}=Ap(t,n),o=i>0?-Math.PI/2:Math.PI/2,c=Fa(),l=new Oe(Rp([[[[r,Ce(0,0,0,0,0,o)]],0],[[[a,Ce(0,0,0,0,0,o)]],1]]),[c.rubber,c.rim]);l.castShadow=!0;let h=new Lt;return h.position.set(e,t,s),h.add(l),h}function Cp(s,e){for(let[t,n]of s){let i=t.mesh(n,{cast:!0});i&&e.add(i)}}var Ep={};function xy(s,e,t,n){let i=[s,e,t,n].join("_");return Ep[i]||(Ep[i]=new Fr(s,e,t,2,n))}var vy=new Wn(1,1,1,14,1,!0,0,Math.PI);function cs(s,e,t=.06,n=3){let i=new Qi;s(i);let r=Math.max(.01,e-2*t),a=new rc(i,{depth:r,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:n,curveSegments:10});a.rotateY(-Math.PI/2),a.translate(r/2,0,0),a.computeBoundingBox();let o=a.boundingBox,c=a.attributes.position,l=a.attributes.uv;for(let h=0;h<c.count;h++)l.setXY(h,(c.getZ(h)-o.min.z)/(o.max.z-o.min.z||1),(c.getY(h)-o.min.y)/(o.max.y-o.min.y||1));return a}function Ns(s,e,t,n=[0,0,1,0,1,1,0,1]){for(let i of[-1,1]){let r=e.map(([a,o])=>[i*t,o,a]);s.quad(r[0],r[1],r[2],r[3],[i,0,0],i>0?n:[n[2],n[3],n[0],n[1],n[6],n[7],n[4],n[5]])}}function Gh(s,e,t,n,i,r,a,o=0){let c=n-e,l=i-t,h=Math.hypot(c,l),d=l/h,u=-c/h,f=[e+d*a,t+u*a],g=[n+d*a,i+u*a];s.quad([o-r/2,f[1],f[0]],[o+r/2,f[1],f[0]],[o+r/2,g[1],g[0]],[o-r/2,g[1],g[0]],[0,u,d],[0,0,1,0,1,1,0,1])}var _y={canter:{glass:{ws:[5.1,1.73,4.76,2.2,1.76],side:[[4.3,1.5],[5.08,1.5],[4.8,2.12],[4.3,2.12]],sideX:.965},lampY:.78,blinkY:.62},labo:{lampY:.78,blinkY:.62,bed:{z0:-.62,z1:1.18,y:.66,w:1.3}},volvo:{lampY:.85,blinkY:.75,tractor:!0}};function Pp(s){let e={};return s.traverse(t=>{let n=t.userData||{};if(n.meta)try{e=Ut(Ut({},JSON.parse(n.meta)),e)}catch(i){}else n.wb&&!e.wb&&(e=Ut(Ut({},n),e))}),e}function yy(s,e){var C;let t=Fa(),n=Pp(e),i=_y[s.model]||{},r=new Lt;r.rotation.order="YXZ";let a=new Lt;r.add(a);let o=Us==="low"?new pn({color:s.color,shininess:90,specular:8947848}):Us==="high"?new _n({color:s.color,metalness:.3,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):new wn({color:s.color,metalness:.3,roughness:.33});t.boxWhite=t.boxWhite||(Us==="low"?new pn({color:15659250,shininess:40}):new wn({color:15659250,metalness:.25,roughness:.45})),t.tireFlat=t.tireFlat||new wn({color:1381653,roughness:.92});let c={paint:o,box:t.boxWhite,glass:t.glass,interior:t.interior,steel:t.steel,dark:t.dark,rubber:t.tireFlat,chrome:t.chrome,lamp:t.lampFlat,red:t.red,amber:t.amber},l={},h=F=>!F||F.side===dt?F:l[F.uuid]||(l[F.uuid]=Object.assign(F.clone(),{side:dt}));e.updateMatrixWorld(!0);let d=new Mn;e.traverse(F=>{if(!F.isMesh)return;let A=new Oe(F.geometry,h(c[F.material&&F.material.name]||c[F.name]||t.steel));A.matrixAutoUpdate=!1,A.matrix.copy(F.matrixWorld),A.castShadow=!0,a.add(A),d.expandByObject(F)});let u=d.max.z,f=d.min.z,g=d.max.x-d.min.x,b=g/2;if(i.glass){let F=new Le,[A,K,O,I,D]=i.glass.ws;Gh(F,A,K,O,I,D,0),Ns(F,i.glass.side,i.glass.sideX),a.add(F.mesh(t.glass,{cast:!1}))}let p=null;if(i.bed){let F=i.bed,A=new Le(!0),K=[12884588,12094040,13806460],O=0;for(let I=F.z0+.3;I<F.z1-.25;I+=.55)for(let D=-F.w/2+.3;D<F.w/2-.25;D+=.6){let V=.35+O*7%3*.12;A.add(ke.box(),Ce(D,F.y+V/2,I,0,O*13%5*.04,0,.52,V,.48),K[O++%3])}p=A.mesh(new sn({vertexColors:!0}),{cast:!0}),p.visible=!1,a.add(p)}let m=n.wheels||[],v=[],x=[];for(let F of m.filter(A=>A.tag[0]==="F")){let A=Oa(F.z,F.x,F.r,Math.max(.16,F.w),F.x>0?1:-1);A.position.y=F.r,v.push(A),r.add(A)}let _=m.filter(F=>F.tag[0]==="R"),S=[];for(let F of _)S.some(A=>Math.abs(A-F.z)<.3)||S.push(F.z);for(let F of S){let A=_.find(D=>Math.abs(D.z-F)<.3),K=_.filter(D=>Math.abs(D.z-F)<.3).reduce((D,V)=>D+Math.abs(V.x),0)/_.filter(D=>Math.abs(D.z-F)<.3).length*2,O=A.w>.3,I=Vh(F,K,A.r,O?A.w/2.1:Math.max(.16,A.w),O);x.push(I),r.add(I)}let w=n.wr||.4,R=n.wb||3,E=new Lt,B=i.lampY||.8;for(let F of[-1,1]){let A=new ii(t.glow);A.scale.set(1.4,1.4,1),A.position.set(F*(b-.3),B,u+.1),E.add(A);let K=new ii(t.glowRed);K.scale.set(.8,.8,1),K.position.set(F*(b-.2),B,f-.08),E.add(K)}let M=new Oe(new Kt(8,24),t.beam);M.rotation.set(-Math.PI/2,0,Math.PI),M.position.set(0,.07,u+12.5),E.add(M),E.visible=!1,r.add(E);let T=[],G=[];for(let F of[-1,1])for(let[A,K]of[[i.blinkY||.6,u+.08],[i.blinkY||.6,f-.08]]){let O=new ii(t.blink);O.scale.set(.7,.7,1),O.position.set(F*(b-.08),A,K),O.visible=!1,r.add(O),(F>0?T:G).push(O)}let X=new Oe(new Kt(g+.8,u-f+1.2),t.blob);return X.rotation.x=-Math.PI/2,X.position.set(0,.05,(u+f)/2),r.add(X),{root:r,body:a,front:v,rear:x,wb:R,wr:w,hitchZ:i.tractor?(C=n.hitchZ)!=null?C:.1:f,zf:u,rearEnd:f,paint:o,blob:X,cabW:Math.min(g,2.6),night:E,y0:1,cabFront:u,ch:n.height||2,conv:!1,blinkL:T,blinkR:G,bedCargo:p}}function My(s){if(s.model&&Os[s.model])return yy(s,Os[s.model]);let e=Fa(),t=new Lt;t.rotation.order="YXZ";let n=new Lt;t.add(n);let i=new Le,r=new Le,a=new Le,o=new Le,c=new Le,l=new Le,h=new Le,d=new Le,u=new Le,f=new Le,g=new Le,b=new Le,p=new Le,m=new Le,v=(k,se,le,ve,L,y,q,z=0,ne=0,oe=0)=>k.add(ke.box(),Ce(L,y,q,z,ne,oe,se,le,ve)),x=(k,se,le,ve,L,y,q,z=.1,ne=0)=>k.add(xy(se,le,ve,z),Ce(L,y,q,ne,0,0)),_=(k,se,le,ve,L,y,q=0,z=0,ne=0,oe=14)=>k.add(ke.cyl(oe),Ce(ve,L,y,q,z,ne,se*2,le,se*2)),S=(k,se,le=0)=>k.add(se,Ce(le,0,0)),w=s.rigid,R=s.id==="urbano",E=s.cab==="conventional",B=s.roof==="high",M=s.roof==="mid",T=R?.42:.53,G=R?3.3:w?4.3:E?s.axles>=4?5.9:5.6:s.axles>=4?4.6:3.9,X=R?2.15:2.5,C=R?.95:1.15,F=R?.86:1,A=k=>C+k*F,K=G+(R?1.25:E?1.6:1.4),O=w?-(R?1.4:2):-1.45,I=X/2,D,V;for(let k of[-1,1])v(u,.12,.3,K-O-.4,k*.45,C-.28,(K+O)/2-.15);for(let k=O+.4;k<G;k+=1.1)v(u,.9,.14,.12,0,C-.28,k);if(E){let k=K,se=2.05,le=k-se,ve=X*.64;D=le;let L=B?1.9:1.2;V=D-1.8-L,S(i,cs(z=>{z.moveTo(le,C-.15),z.lineTo(k-.1,C-.15),z.lineTo(k,C-.05),z.lineTo(k,A(1)),z.quadraticCurveTo(k,A(1.18),k-.28,A(1.21)),z.lineTo(le,A(1.36)),z.lineTo(le,C-.15)},ve,.12)),x(r,ve*.9,1.12*F,.12,0,A(.48),k+.15,.04),v(d,ve*.76,1*F,.03,0,A(.48),k+.22),v(r,.08,.12,.28,0,A(1.27),k-.15);let y=T+.14;for(let z of[-1,1]){S(i,cs(ne=>{ne.moveTo(G+y*Math.cos(-.35),T+y*Math.sin(-.35)),ne.absarc(G,T,y,-.35,Math.PI,!1),ne.lineTo(G-y-.55,T+.02),ne.lineTo(G-y-.55,T-.06),ne.lineTo(G-y+.08,T-.06),ne.absarc(G,T,y-.08,Math.PI,-.35,!0)},.62,.03,2),z*(I-.31)),g.quad([z*(I-.31)-.24,T+.32,G+y+.02],[z*(I-.31)+.24,T+.32,G+y+.02],[z*(I-.31)+.24,T+.56,G+y-.03],[z*(I-.31)-.24,T+.56,G+y-.03],[0,.2,1],[0,0,1,0,1,1,0,1]),_(r,.2,1.1,z*(I+.02),A(.95),D+.15),_(r,.06,.55,z*(I+.02),A(1.7),D+.15);for(let ne of[0,1])v(u,.42,.05,.6,z*(I-.2),.48+ne*.36,D-.55);v(a,.06,.95,.65,z*(I-.01),.72,D-.55)}S(r,cs(z=>{z.moveTo(k-.05,C-.62),z.lineTo(k+.3,C-.62),z.quadraticCurveTo(k+.38,C-.6,k+.38,C-.42),z.lineTo(k+.34,C-.14),z.lineTo(k-.05,C-.14)},X+.1,.05)),S(i,cs(z=>{z.moveTo(D-1.8,C),z.lineTo(D-.05,C),z.lineTo(D,A(.3)),z.lineTo(D,A(1.36)),z.lineTo(D-.3,A(2.1)),z.quadraticCurveTo(D-.4,A(2.24),D-.62,A(2.25)),z.lineTo(D-1.65,A(2.25)),z.quadraticCurveTo(D-1.8,A(2.25),D-1.8,A(2.1)),z.lineTo(D-1.8,C)},X,.07));let q=A(B?3.05:2.4);S(i,cs(z=>{z.moveTo(V,C),z.lineTo(D-1.76,C),z.lineTo(D-1.76,A(2.2)),z.quadraticCurveTo(D-1.95,q,D-2.6,q),z.lineTo(V+.15,q),z.quadraticCurveTo(V,q,V,q-.15),z.lineTo(V,C)},X-.04,.07));for(let z of[-1,1])Gh(o,D,A(1.38),D-.3,A(2.08),X/2-.24,.075,z*(X/4-.04));for(let z of[-.6,.6])v(a,.6,.03,.03,z,A(1.42),D+.06,0,0,.2);x(i,X-.1,.12,.45,0,A(2.2),D+.08,.04,-.25);for(let z=-2;z<=2;z++)v(h,.13,.06,.08,z*.34,A(2.3),D-.1);for(let z of[-1,1]){let ne=z*(I+.072);v(a,.02,A(2)-A(.15),.025,ne,(A(2)+A(.15))/2,D-1.2),v(a,.02,.025,1.1,ne,A(.15),D-.65),v(r,.04,.05,.2,z*(I+.09),A(1.1),D-1.05),v(r,.4,.04,.04,z*(I+.22),A(2),D-.25,0,z*-.3,0),v(r,.04,.55,.04,z*(I+.42),A(1.75),D-.12),x(r,.15,.7,.3,z*(I+.48),A(1.6),D-.1,.05),v(o,.02,.6,.22,z*(I+.4),A(1.6),D-.1),_(r,.11,3,z*(I-.12),A(2.4),V-.22),_(r,.15,1,z*(I-.12),A(1.6),V-.22)}Ns(o,[[D-.07,A(1.44)],[D-1.12,A(1.44)],[D-1.12,A(2.06)],[D-.32,A(2.06)]],I+.075),Ns(o,[[D-2.3,A(1.4)],[D-2.7,A(1.4)],[D-2.7,A(1.75)],[D-2.3,A(1.75)]],I+.055),Ns(p,[[D-.05,A(.3)],[V+.1,A(.3)],[V+.1,A(1.15)],[D-.05,A(1.15)]],I+.08),v(m,X-.3,.3,.5,0,A(1.25),D-.35),m.add(new Cr(.22,.025,6,18),Ce(.55,A(1.42),D-.65,.6,0,0));for(let z of[-1,1])v(m,.55,.15,.55,z*.55,A(.7),D-1.1),v(m,.55,.8,.12,z*.55,A(1.1),D-1.4,-.15)}else{let k=K,se=R?1.75:w?1.95:2.3,le=k-se;D=k,V=le;let ve=A(B?3:M?2.55:2.14);S(i,cs(y=>{y.moveTo(le,C),y.lineTo(k-.18,C),y.quadraticCurveTo(k-.02,C,k-.02,A(.2)),y.lineTo(k-.06,A(1)),y.lineTo(k-.12,A(1.08)),y.lineTo(k-.4,A(2)),y.quadraticCurveTo(k-.47,A(2.14),k-.7,A(2.15)),(B||M)&&(y.quadraticCurveTo(k-.95,A(2.17),k-1.05,A(B?2.55:2.35)),y.quadraticCurveTo(k-1.15,ve,k-1.5,ve)),y.lineTo(le+.16,ve),y.quadraticCurveTo(le,ve,le,ve-.16),y.lineTo(le,C)},X,.07)),Gh(o,k-.12,A(1.1),k-.4,A(1.98),X-.34,.075);for(let y of[-.45,.35])v(a,.7,.03,.03,y,A(1.15),k-.04,0,0,.25);S(i,cs(y=>{y.moveTo(k-.42,A(2.06)),y.lineTo(k+.04,A(2)),y.lineTo(k+.04,A(1.95)),y.lineTo(k-.42,A(2))},X-.12,.015,1));for(let y=-2;y<=2;y++)v(h,.13,.06,.08,y*.34,A(2.06),k-.12);v(d,X*.68,.55*F,.03,0,A(.62),k+.03,-.05);for(let y of[.42,.62,.82])v(r,X*.7,.035,.035,0,A(y),k+.05);v(r,.24,.24,.04,0,A(.98),k+.02,0,0,Math.PI/4),S(a,cs(y=>{y.moveTo(k-.35,C-.55),y.lineTo(k+.05,C-.55),y.quadraticCurveTo(k+.17,C-.55,k+.17,C-.4),y.lineTo(k+.13,C+.12),y.lineTo(k-.35,C+.12)},X+.04,.05));for(let y of[-1,1]){g.quad([y*(I-.12)-(y>0?.62:0),C-.2,k+.235],[y*(I-.12)+(y>0?0:.62),C-.2,k+.235],[y*(I-.12)+(y>0?0:.62),C+.06,k+.2],[y*(I-.12)-(y>0?.62:0),C+.06,k+.2],[0,0,1],[0,0,1,0,1,1,0,1]),_(c,.075,.04,y*(I-.4),C-.42,k+.235,Math.PI/2,0,0,12),a.add(vy,Ce(y*(I-.25),T,G,0,0,Math.PI/2,T+.12,.44,T+.12));for(let q of[0,1])v(u,.4,.05,.42,y*(I-.2),.48+q*.36,G-.72);v(a,.06,.95,.5,y*(I-.01),.7,G-.72)}for(let y of[-1,1]){let q=y*(I+.072);v(a,.02,A(1.95)-A(.15),.025,q,(A(1.95)+A(.15))/2,k-1.32),v(a,.02,A(1)-A(.15),.025,q,(A(1)+A(.15))/2,k-.22),v(a,.02,.025,1.1,q,A(.15),k-.77),v(r,.04,.05,.2,y*(I+.09),A(1.02),k-1.18),v(r,.02,.03,1.15,y*(I+.078),A(1.16),k-.78),v(r,.42,.04,.04,y*(I+.24),A(1.96),k-.3,0,y*-.3,0),v(r,.04,.5,.04,y*(I+.44),A(1.72),k-.18),x(a,.15,.64,.32,y*(I+.5),A(1.6),k-.14,.05),v(o,.02,.54,.24,y*(I+.425),A(1.6),k-.14),x(a,.13,.26,.22,y*(I+.48),A(1.12),k-.12,.05)}if(Ns(o,[[k-.17,A(1.18)],[k-1.25,A(1.18)],[k-1.25,A(1.92)],[k-.41,A(1.92)]],I+.075),B&&Ns(o,[[le+.35,A(2.25)],[le+.15,A(2.25)],[le+.15,A(2.7)],[le+.35,A(2.7)]],I+.075),Ns(p,[[k-.15,A(.2)],[le+.05,A(.2)],[le+.05,A(1.05)],[k-.15,A(1.05)]],I+.08),B&&!w)for(let y of[-1,1])v(i,.05,.62,G-.95-1.2,y*(I-.04),.78,(G-.95+1.2)/2);v(m,X-.3,.3,.55,0,A(1),k-.45);let L=new Cr(.21,.025,6,18);m.add(L,Ce(.55,A(1.18),k-.72,.55,0,0));for(let y of[-1,1])v(m,.55,.15,.55,y*.55,A(.55),k-1.25),v(m,.55,.75,.12,y*.55,A(.95),k-1.55,-.15)}if(!R){let k=E?D-1.4:G-1.6;_(f,.34,1.4,1.02,.86,k,Math.PI/2,0,0,20);for(let se of[-.45,.45])_(a,.355,.06,1.02,.86,k+se,Math.PI/2,0,0,20);v(a,.5,.5,.7,-1,.85,k+.1),_(u,.17,1.1,-.95,.62,k-.9,Math.PI/2)}if(!w){let k=V-.25;E||(_(r,.11,2.6,I-.14,A(2)+(B?.4:0),k),_(r,.15,.9,I-.14,A(1.2),k)),v(f,1.3,.05,.55,0,C+.05,k-.1);for(let[se,le]of[[12597547,-.18],[3049182,.18]]){let ve=new Oe(new Cr(.16,.025,6,16),new sn({color:se}));ve.position.set(le,C+.5,k-.05),n.add(ve)}v(u,1.35,.14,1.3,0,C-.02,.3),v(f,1.2,.03,1.1,0,C+.06,.3);for(let se of[-1,1])v(a,.7,.05,s.axles>=3?2.7:1.4,se*.98,T*2+.14,0)}for(let k of[-1,1])b.quad([k*.62-.22,C-.32,O-.03],[k*.62+.22,C-.32,O-.03],[k*.62+.22,C-.1,O-.03],[k*.62-.22,C-.1,O-.03],[0,0,-1],k>0?[1,0,0,0,0,1,1,1]:[0,0,1,0,1,1,0,1]),v(a,.62,.62,.03,k*1,.55,s.axles>=3&&!w?-1.45:-.8);v(u,2,.1,.12,0,C-.2,O);let ae=.3;if(w){let k=V-.15,se=O,le=R?2.3:2.7,ve=R?2.25:2.5;v(u,ve,.12,k-se,0,C+.02,(se+k)/2);let L=new sn({map:Pe.cargoBox("#"+new he(s.color===15921906?3108830:s.color).getHexString(),"DRIZZIE")}),y=new Le,q=C+.08,z=C+.08+le;y.quad([ve/2+.01,q,k],[ve/2+.01,q,se],[ve/2+.01,z,se],[ve/2+.01,z,k],[1,0,0],[1,0,0,0,0,1,1,1]),y.quad([-ve/2-.01,q,se],[-ve/2-.01,q,k],[-ve/2-.01,z,k],[-ve/2-.01,z,se],[-1,0,0],[0,0,1,0,1,1,0,1]),n.add(y.mesh(L,{cast:!0}));let ne=new Le(!0);ne.box(-ve/2,q,se,ve/2,z,k,1,16053492);for(let oe of[-1,1])ne.add(ke.box(),Ce(oe*ve/4,(q+z)/2,se-.02,0,0,0,ve/2-.08,le-.12,.02),14474460);ne.add(ke.box(),Ce(0,z+.02,(se+k)/2,0,0,0,ve+.04,.06,k-se+.04),13685718),n.add(ne.mesh(e.flat,{cast:!0}));for(let oe of[-.3,.3])v(r,.04,le-.3,.04,oe,(q+z)/2,se-.04);v(a,ve-.2,.12,.1,0,.55,se-.05),ae=O}let Te=by(s.color),j=new sn({map:Pe.cabDecal(s.color),transparent:!0,alphaTest:.05,depthWrite:!1,side:dt,polygonOffset:!0,polygonOffsetFactor:-2});Cp([[i,Te],[r,e.chrome],[a,e.dark],[o,e.glass],[c,e.light],[l,e.red],[h,e.amber],[d,e.grill],[u,e.steel],[f,e.alu],[g,e.lamp],[b,e.tail],[p,j],[m,e.interior]],n);let ie=new Lt,pe=E?T+.44:C-.07,we=E?G+T+.3:K+.3,Ae=E?I-.31:I-.43;for(let k of[-1,1]){let se=new ii(e.glow);se.scale.set(1.7,1.7,1),se.position.set(k*Ae,pe,we),ie.add(se);let le=new ii(e.glowRed);le.scale.set(.9,.9,1),le.position.set(k*.62,C-.2,O-.12),ie.add(le)}let Me=new Oe(new Kt(9,26),e.beam);Me.rotation.set(-Math.PI/2,0,Math.PI),Me.position.set(0,.07,K+13.5),ie.add(Me),ie.visible=!1,t.add(ie);let ze=[],Ee=[];for(let k of[-1,1])for(let[se,le,ve]of[[k*(I-.05),E?T+.44:C-.07,E?G+T+.3:K+.25],[k*(I+.05),A(E?.6:.3),E?D-.2:G+.6],[k*.98,C-.2,O-.1]]){let L=new ii(e.blink);L.scale.set(.8,.8,1),L.position.set(se,le,ve),L.visible=!1,t.add(L),(k>0?ze:Ee).push(L)}let U=[],fe=[],te=I-.3,de=R?.26:.32;U.push(Oa(G,te,T,de,1),Oa(G,-te,T,de,-1)),s.axles>=4&&U.push(Oa(G-1.55,te,T,de,1),Oa(G-1.55,-te,T,de,-1));for(let k of U)t.add(k);for(let k of s.axles>=3?[.68,-.68]:[0]){let se=Vh(k,R?1.45:1.75,T,R?.22:.3,!0);fe.push(se),t.add(se)}let re=new Oe(new Kt(X+1,K-O+1.5),e.blob);return re.rotation.x=-Math.PI/2,re.position.set(0,.05,(K+O)/2),t.add(re),{root:t,body:n,front:U,rear:fe,wb:G,wr:T,hitchZ:ae,zf:K,rearEnd:O,paint:Te,blob:re,cabW:X,night:ie,y0:C,cabFront:D,ch:2.05*F,conv:E,blinkL:ze,blinkR:Ee}}function Hh(s,e={}){var K;let t=Fa(),n=new Lt;n.rotation.order="YXZ";let i=new Le(!0),r=new Le,a=new Le(!0),o=new Le,c=new Le,l=new Le,h=new Le,d=(O,I,D,V,ae,Te,j,ie,pe=0,we=0,Ae=0)=>O.add(ke.box(),Ce(ae,Te,j,pe,we,Ae,I,D,V),ie),u=(O,I,D,V,ae,Te,j,ie,pe,we,Ae=18)=>O.add(ke.cyl(Ae),Ce(V,ae,Te,j,ie,pe,I*2,D,I*2),we),f=s.trailer,g=s.model,b=f==="flatbed"&&Os.flatbed&&!e.len,p=b?Pp(Os.flatbed):null,m=e.len||(b?p.front-p.back:g==="blade"?20:f==="tank"?12.5:f==="bulk"?12:f==="lowboy"?14.5:13.6),v=b?p.front:(K=e.front)!=null?K:1,x=b?p.back:-(m-v),_=e.lead?x+.9:x+1.6,S=e.len?(e.lead,3):f==="lowboy"?s.t>60?5:4:3,w=1.35,R=b?p.axles.reduce((O,I)=>O+I,0)/p.axles.length:_+(S-1)*w/2,E=b?p.deckY-.11:1.35,B=[],M=[];if(b){let O=Os.flatbed;O.updateMatrixWorld(!0),O.traverse(I=>{if(!I.isMesh)return;let D=I;for(;D.parent&&!/^axle_/.test(D.name);)D=D.parent;let V=new Oe(I.geometry,I.material);if(V.castShadow=!0,V.receiveShadow=!0,/^axle_/.test(D.name)){let ae=new Lt;ae.position.setFromMatrixPosition(D.matrixWorld),V.matrixAutoUpdate=!1,V.matrix.copy(new Ve().copy(D.matrixWorld).invert().multiply(I.matrixWorld)),ae.add(V),M.includes(ae)||(M.push(ae),B.push(ae))}else V.matrixAutoUpdate=!1,V.matrix.copy(I.matrixWorld),B.push(V)})}if(!b)for(let O of[-1,1]){d(h,.14,.42,m-.6,O*.48,E-.3,(v+x)/2),d(r,.12,1,.12,O*.9,.6,-1.6),d(r,.32,.06,.32,O*.9,.08,-1.6),d(r,.06,.32,5.5,O*1.2,E-.45,x+7.6),d(o,.38,.16,.05,O*1,E-.4,x-.03);for(let I=v-1.5;I>x+1;I-=3)d(c,.04,.08,.12,O*1.28,E-.1,I)}if(!b){d(r,2.4,.16,.12,0,E-.75,x-.06);for(let O=v-1;O>x+1;O-=1.2)d(h,.96,.1,.1,0,E-.3,O)}if(f==="box"){let I=E+1.375;l.add(ke.box(),Ce(0,I,(v+x)/2,0,0,0,2.56,2.75,m));let D=new sn({map:Pe.cargoBox("#d63031","DRIZZIE")}),V=new Le,ae=E+.3,Te=E+2.75-.25,j=1.29,ie=v-1.5,pe=x+1.5;V.quad([j,ae,ie],[j,ae,pe],[j,Te,pe],[j,Te,ie],[1,0,0],[1,0,0,0,0,1,1,1]),V.quad([-j,ae,pe],[-j,ae,ie],[-j,Te,ie],[-j,Te,pe],[-1,0,0],[0,0,1,0,1,1,0,1]),B.push(V.mesh(D,{cast:!1}));for(let we of[-1,1])d(i,1.22,2.75-.15,.04,we*.63,I,x-.02,15132906);for(let we of[-.95,-.35,.35,.95])d(a,.04,2.75-.3,.05,we,I,x-.06,12568010);d(i,2.56,.12,m,0,E+2.75+.06,(v+x)/2,13685718)}else if(f==="tank"){let O=g==="silo"?12106944:15265007;u(a,1.25,m-1.2,0,E+1.3,(v+x)/2,Math.PI/2,0,0,O,28),a.add(ke.sphere(),Ce(0,E+1.3,v-.6,0,0,0,2.5,2.5,.8),O),a.add(ke.sphere(),Ce(0,E+1.3,x+.6,0,0,0,2.5,2.5,.8),O);for(let I=v-1.6;I>x+1;I-=2.2)u(i,1.27,.08,0,E+1.3,I,Math.PI/2,0,0,10133670,28);for(let I=0;I<3;I++)u(i,.3,.2,0,E+2.6,v-3-I*3.3,0,0,0,8359053,12);d(i,.6,.06,m-2.4,0,E+2.62,(v+x)/2,7174788);for(let I of[-1,1])d(i,.03,.2,m-2.4,I*.3,E+2.75,(v+x)/2,16765952);d(i,.9,.6,.03,1,E+1.3,x+.1,s.hazard?16747520:3049182),d(i,.5,2.4,.06,0,E+1.3,x+.05,8359053)}else if(f==="bulk"){d(i,2.5,.12,m,0,E+.06,(v+x)/2,2911902);for(let I of[-1,1])d(i,.08,2.1,m,I*1.21,E+2.1/2,(v+x)/2,2911902);d(i,2.5,2.1,.08,0,E+2.1/2,v-.04,2911902),d(i,2.5,2.1,.08,0,E+2.1/2,x+.04,2911902);for(let I=0;I<8;I++)for(let D of[-1,1])d(r,.06,2.1,.08,D*1.26,E+2.1/2,v-1-I*1.5);i.add(ke.sphere(),Ce(0,E+2.1-.15,(v+x)/2,0,0,0,2.3,.9,m-.5),13214812)}else if(f==="flatbed"){b||(d(i,2.5,.22,m,0,E,(v+x)/2,7162927),d(i,2.5,1.2,.1,0,E+.7,v-.05,3426654));let O=E+.11,I=D=>{for(let V=v-1.8;V>x+1;V-=2.6)d(i,2.56,.02,.05,0,D,V,15844367)};if(g==="logs"){for(let D=0;D<3;D++)for(let V=0;V<4-D;V++){let ae=(V-(3-D)/2)*.6;u(i,.3,m-1.2,ae,O+.3+D*.52,(v+x)/2,Math.PI/2,0,0,D%2?9329458:8014374,10);for(let Te of[v-.6,x+.6])u(i,.29,.02,ae,O+.3+D*.52,Te,Math.PI/2,0,0,14200954,10)}for(let D=0;D<5;D++)for(let V of[-1,1])d(r,.08,2.2,.08,V*1.2,O+1.1,v-1-D*2.8)}else if(g==="container"){let D=new Oe(ke.box(),new sn({map:Pe.container(2388387)}));D.scale.set(2.44,2.59,12.19),D.position.set(0,O+1.3,(v+x)/2),B.push(D),I(O+2.62)}else if(g==="coils")for(let D=0;D<4;D++)u(a,.85,1.6,0,O+.86,v-2-D*3,0,0,Math.PI/2,12568010,24),u(i,.3,1.62,0,O+.86,v-2-D*3,0,0,Math.PI/2,2236962,12),d(r,1.6,.25,1.4,0,O+.12,v-2-D*3),d(i,.05,1.8,1.7,0,O+.9,v-2-D*3,15844367);else if(g==="bricks"){for(let D=v-1.4;D>x+1;D-=1.3)for(let V of[-.62,.62])d(r,1.15,.12,1.15,V,O+.06,D),d(i,1.1,.95,1.1,V,O+.6,D,11028268),d(i,1.12,.03,1.12,V,O+.36,D,9386530);I(O+1.12)}else if(g==="stone"){for(let D=0;D<3;D++)d(i,2.2,1.35+D%2*.25,2.6,0,O+.7+D%2*.12,v-2.6-D*3.8,[9276038,10657432,8157557][D],0,(D-1)*.04,0);I(O+1.6)}else if(g==="beams"){for(let D=0;D<3;D++)for(let V=0;V<4;V++){let ae=(V-1.5)*.58,Te=O+.22+D*.42,j=(v+x)/2;d(i,.5,.05,m-.6,ae,Te+.17,j,6122878),d(i,.5,.05,m-.6,ae,Te-.17,j,6122878),d(i,.06,.34,m-.6,ae,Te,j,4872810)}I(O+1.4)}}else if(f==="lowboy"){d(i,2.6,.3,3.4,0,E,v-1.6,12597547),d(i,2.9,.3,m-5.5,0,.95,(v-3.4+x+2.1)/2,12597547),d(i,2.6,.3,2.1,0,E-.1,x+1.05,12597547);for(let V of[-1,1])d(i,.6,1.6,.12,V*.8,E+.7,x+.2,12597547,.5);for(let V of[-1,1])d(i,1,.6,.03,V*.7,E+.6,x-.1,16777215);let I=.95+.15,D=(v-3.4+x+2.1)/2;if(g==="tractor"){d(i,1.3,1.2,3.2,0,I+1.3,D+.3,3050298),d(i,1.4,1.5,1.4,0,I+2.3,D-.9,3050298),d(i,1.3,1,1.3,0,I+3.1,D-.9,1845299);for(let V of[-1,1])u(i,.95,.6,V*1.1,I+.95,D-1,0,0,Math.PI/2,2236962),u(i,.55,.62,V*1.1,I+.95,D-1,0,0,Math.PI/2,15844367),u(i,.55,.4,V*.95,I+.55,D+1.5,0,0,Math.PI/2,2236962)}else if(g==="excavator"){for(let V of[-1,1]){d(r,.7,.9,4.8,V*1.05,I+.45,D);for(let ae=0;ae<5;ae++)u(i,.22,.72,V*1.05,I+.25,D-1.8+ae*.9,0,0,Math.PI/2,5592405,10)}d(i,2.6,1.2,3.6,0,I+1.5,D-.6,15844367),d(i,1,1.4,1.2,-.7,I+2.8,D+.4,15844367),d(i,.9,1,.04,-.7,I+2.9,D+1.01,1845299),d(i,.5,.5,4,.5,I+2.6,D+2.4,15844367,-.35),d(i,.45,.45,2.8,.5,I+2,D+4.6,15844367,.9),d(r,1,.8,.8,.5,I+1,D+5.2)}else if(g==="transformer"){d(i,2.6,3,4.2,0,I+1.5,D,8359053);for(let V=0;V<9;V++)for(let ae of[-1,1])d(i,.08,2.4,1,ae*1.36,I+1.5,D-1.8+V*.45,9807270);for(let V=0;V<3;V++)u(i,.18,1.3,(V-1)*.8,I+3.6,D+1,0,0,0,9127187,10)}else g==="blade"?(i.add(ke.sphere(),Ce(0,I+1.6,D-2,0,0,0,2.2,2,30),16054007),u(i,1.1,1.6,0,I+1.6,D+30/2-3.5,Math.PI/2,0,0,15067368,20),d(r,.4,1.4,.6,0,I+.7,D+2),d(r,.4,1.4,.6,0,I+.7,D-6)):g==="press"&&(d(i,2.8,3.6,4.6,0,I+1.8,D,3038604),d(i,1.8,1.2,1.6,0,I+4.2,D,2049126),d(a,.25,3,.25,1.2,I+2,D+2.2,12436423),d(a,.25,3,.25,-1.2,I+2,D+2.2,12436423));d(i,2.3,.35,.03,0,E+.9,x-.06,16761095)}Cp([[i,t.flat],[r,t.dark],[a,t.flatChrome],[o,t.red],[c,t.amber],[l,t.panel],[h,t.steel]],n);for(let O of B)O&&(O.castShadow=!0,n.add(O));let T=[...M];if(!b)for(let O=0;O<S;O++){let I=Vh(_+O*w,1.75,.5,.28,!0);T.push(I),n.add(I)}let G=new Lt;for(let O of[-1,1]){let I=new ii(t.glowRed);I.scale.set(.9,.9,1),I.position.set(O*1,E-.4,x-.15),G.add(I)}G.visible=!1,n.add(G);let X=[],C=[];for(let O of[-1,1]){let I=new ii(t.blink);I.scale.set(.8,.8,1),I.position.set(O*1.2,E-.4,x-.12),I.visible=!1,n.add(I),(O>0?X:C).push(I)}let F=new Oe(new Kt(3.4,m+1.5),t.blob);F.rotation.x=-Math.PI/2,F.position.set(0,.05,(v+x)/2),n.add(F),n.traverse(O=>{O.isMesh&&O!==F&&(O.castShadow=!0)});let A=null;if(e.lead){A=x+.45;let O=new Oe(ke.box(),t.steel);O.scale.set(1.3,.14,1.3),O.position.set(0,E+.05,A),n.add(O)}return{root:n,axles:T,Lk:-R,Lt:m,front:v,back:x,blob:F,night:G,blinkL:X,blinkR:C,coupleZ:A}}var zr={x:0,z:0},fi=9.81,Ic=(s,e,t)=>Math.max(e,Math.min(t,s)),Ua=s=>Math.atan2(Math.sin(s),Math.cos(s)),Dc=class{constructor(e,t,n){this.scene=e,this.shadows=n,this.x=0,this.z=0,this.h=0,this.y=0,this.pitch=0,this.tpitch=0,this.tpitch2=0,this.v=0,this.steer=0,this.acc=0,this.yaw=0,this.trailer=null,this.th=0,this.trailer2=null,this.th2=0,this.cargo=null,this.wheelRot=0,this.rpm=.2,this.collCooldown=0,this.reverse=!1,this.lastImpact=0,this.lightsOn=!1,this.engineOn=!1,this.slip=0,this.tipRisk=0,this.tip=0,this.wheelspin=0,this.slosh=0,this.sloshV=0,this.rolled=0,this.surface="asphalt",this.setTruck(t)}setTruck(e){this.model&&this.scene.remove(this.model.root),this.def=e,this.model=My(e),this.model.blob.visible=!this.shadows,this.scene.add(this.model.root),this.model.night.visible=this.lightsOn,this.onModel&&this.onModel(this.model),this.trailer&&e.rigid&&this.detach(),this.model.bedCargo&&(this.model.bedCargo.visible=!!this.cargo),this.computePhys(),this.sync()}attach(e){if(this.cargo=e,this.model.bedCargo&&(this.model.bedCargo.visible=!0),!this.def.rigid){if(e.trailer==="bitrem"){let t=Zn(Ut({},e),{trailer:e.sub});this.trailer=Hh(t,{len:9.2,lead:!0}),this.trailer2=Hh(t,{len:10.2,front:.5}),this.th2=this.h}else this.trailer=Hh(e);for(let t of[this.trailer,this.trailer2])t&&(t.blob.visible=!this.shadows,t.night.visible=this.lightsOn,this.scene.add(t.root));this.th=this.h}this.computePhys(),this.sync()}detach(){this.model.bedCargo&&(this.model.bedCargo.visible=!1),this.trailer&&this.scene.remove(this.trailer.root),this.trailer2&&this.scene.remove(this.trailer2.root),this.trailer=null,this.trailer2=null,this.cargo=null,this.computePhys()}computePhys(){let e=this.def,t=this.cargo,n=e.mass*1e3,i=t?t.t*1e3:0,r=t&&!e.rigid?mp(t)*1e3:0,a=t?e.rigid?e.cgH*1.4:gp(t,!1):0,o=e.rigid&&t?(n*e.cgH+i*a)/(n+i):e.cgH,c=!e.rigid&&t?(r*1.25+i*a)/(r+i):0,l=Math.min((e.track||2)/2/o,c?1/c:9),h=t?t.trailer==="bitrem"?t.sub:t.trailer:null;this.P={mass:n+i+r,aRoll:fi*l*.92,tireMu:e.tireMu||.9,driveMass:(e.drive||.4)*(n+(e.rigid?i:(r+i)*.5))*1.7,steerLock:e.steerLock||.6,yawTau:.12+(n+i+r)/26e4,cda:this.trailer?(h==="box"?9:7)*(this.trailer2?1.25:1):e.rigid?6.5:5,slosh:h==="tank",fragile:!!(t&&t.fragile),trailerMu:h==="lowboy"?.85:.9}}setBlink(e,t){let n=(o,c)=>{for(let l of o)l.visible=c},i=t&&(e===-1||e===2),r=t&&(e===1||e===2);n(this.model.blinkL,i),n(this.model.blinkR,r);let a=this.trailer2||this.trailer;a&&(n(a.blinkL,i),n(a.blinkR,r))}setLights(e){pi&&pi.lamp.emissiveIntensity!==void 0&&(pi.lamp.emissiveIntensity=e?1.6:.15),pi&&pi.lampFlat.emissiveIntensity!==void 0&&(pi.lampFlat.emissiveIntensity=e?2.2:.15),this.lightsOn=e,this.model.night.visible=e,this.trailer&&(this.trailer.night.visible=e),this.trailer2&&(this.trailer2.night.visible=e)}get mass(){return this.P?this.P.mass:this.def.mass*1e3}get speedKmh(){return Math.abs(this.v)*3.6}get trainLength(){return(this.trailer?this.trailer.Lt:0)+(this.trailer2?this.trailer2.Lt-2:0)}place(e,t,n){this.x=e,this.z=t,this.h=n,this.th=n,this.th2=n,this.v=0,this.steer=0,this.yaw=0,this.tip=0,this.slosh=0,this.sloshV=0,this.sync()}couple(e){let t=this.model,n=this.trailer,i=this.x+Math.sin(this.h)*t.hitchZ,r=this.z+Math.cos(this.h)*t.hitchZ;return e.x=i+Math.sin(this.th)*n.coupleZ,e.z=r+Math.cos(this.th)*n.coupleZ,e}center(e){let t=Math.sin(this.h),n=Math.cos(this.h);if(this.trailer){let i,r;if(this.trailer2)this.couple(zr),i=zr.x-Math.sin(this.th2)*this.trailer2.Lt*.45,r=zr.z-Math.cos(this.th2)*this.trailer2.Lt*.45;else{let a=this.x+t*this.model.hitchZ,o=this.z+n*this.model.hitchZ,c=this.trailer.Lt*.45;i=a-Math.sin(this.th)*c,r=o-Math.cos(this.th)*c}e.x=(this.x+t*this.model.wb*.5+i)/2,e.z=(this.z+n*this.model.wb*.5+r)/2}else e.x=this.x+t*this.model.wb*.4,e.z=this.z+n*this.model.wb*.4;return e}update(e,t,n,i){if(this.world=n,this.rolled>0){this.rolled-=e,this.v=0,this.sync();return}let r=this.def,a=this.P,o=a.mass,c=wp[n.surfaceAt?n.surfaceAt(this.x,this.z):"asphalt"]||wp.asphalt;this.surface=c.key;let l=c.mu*a.tireMu,h=r.hp*735.5*2.3,d=r.vmax/3.6,u=this.v,f=0,g=t.brake,b=t.throttle;t.gear==="auto"?(this.stopT=g>.1&&Math.abs(u)<.4&&b<.1?(this.stopT||0)+e:0,this.stopT>.3&&(this.reverse=!0),b>.1&&u>-.4&&(this.reverse=!1)):this.reverse=t.gear==="R";let p=this.engineOn&&t.gear!=="N",m=t.gear==="auto"&&this.reverse,v=l*fi*a.driveMass,x=Math.min(6.8,l*fi*.95)*o,_=0;this.reverse?m?(p&&g>0&&u>-4.5&&(_=-g*Math.min(h/Math.max(-u,3),o*1.6)),b>0&&u<0&&(f+=b*x)):(p&&b>0&&u>-5&&(_=-b*Math.min(h/Math.max(-u,3),o*1.6)),g>0&&u<0&&(f+=g*x),g>0&&u>0&&(f-=g*x)):(p&&b>0&&u>=-.3&&(_=b*Math.min(h/Math.max(u,3),o*3,r.hp*250)),g>0&&u>0&&(f-=g*x),g>0&&u<0&&(f+=g*x)),this.wheelspin=Math.abs(_)>v?Math.min(1,(Math.abs(_)-v)/v):0,f+=Ic(_,-v,v),t.handbrake&&(f-=Math.sign(u)*Math.min(o*5,l*fi*o*.6));let S=Math.sin(this.pitch)*.55+Math.sin(this.trailer?this.tpitch:this.pitch)*.45,w=-o*fi*S,R=.5*1.2*a.cda*u*Math.abs(u),E=(c.crr*o*fi+(b<.05&&g<.05?o*.3:0))*Math.sign(u),B=a.steerLock/(1+u*u/260),M=t.steer*B,T=(t.steer===0?2.4:1.4)/(1+o/6e4),G=M-this.steer;this.steer+=Math.sign(G)*Math.min(Math.abs(G),T*e);let X=this.model.wb,C=Math.tan(this.steer)/X,F=u*u*Math.abs(C),A=Math.min(1,Math.abs(f)/(l*fi*o+1)),K=l*fi*.92*Math.sqrt(Math.max(.15,1-A*A)),O=C,I=0;if(this.slip=0,F>K&&Math.abs(u)>3){let ze=K/(u*u);O=Math.sign(C)*(ze+(Math.abs(C)-ze)*.12),this.slip=Math.min(1,(F-K)/K),I=o*Math.min(4,(F-K)*.3)}let D=u*O;this.yaw+=(D-this.yaw)*(1-Math.exp(-e/a.yawTau));let ae=Math.min(Math.abs(u*this.yaw),K*1.03);if(a.slosh){let U=u*this.yaw;this.sloshV+=(-2.4*2.4*this.slosh-2*.12*2.4*this.sloshV+U)*e,this.slosh+=this.sloshV*e,ae=Math.min(Math.abs(U),K*1.03)+Math.abs(this.slosh*2.4*2.4*.35)}if(this.tipRisk=ae/a.aRoll,this.tipRisk>1?this.tip+=e*(this.tipRisk-1)*1.5:this.tip=Math.max(0,this.tip-e*1.8),this.rollSide=Math.sign(u*this.yaw)||1,this.tip>=1){this.rolled=3,this.tip=1,this.v=0,this.onRollover&&this.onRollover(),this.sync();return}u+=(f+(Math.abs(u)>.2||b>0?w:0)-R-Math.sign(u)*I)/o*e;let Te=E/o;Math.abs(Te*e)>Math.abs(u)&&Math.abs(f)<1?u=0:u-=Te*e;let j=p?this.reverse?m?g>0?-1:0:b>0?-1:0:b>0?1:0:0;if(u!==0&&Math.sign(u)!==j&&Math.sign(u)!==Math.sign(this.v)&&(u=0),t.handbrake&&Math.abs(u)<.3&&(u=0),u=Math.min(u,d),u=Math.max(u,-5),this.acc=(u-this.v)/Math.max(e,.001),this.v=u,this.grade=S,this.h+=this.yaw*e,this.x+=Math.sin(this.h)*u*e,this.z+=Math.cos(this.h)*u*e,this.trailer){let ze=this.model.hitchZ,Ee=Ua(this.h-this.th),U=(u*Math.sin(Ee)-ze*this.yaw*Math.cos(Ee))/this.trailer.Lk,fe=Math.abs(u*U);fe>l*fi*a.trailerMu&&Math.abs(u)>4&&(U+=Math.sign(Ee||1)*(fe-l*fi*a.trailerMu)*.02);let te=this.th;this.th+=U*e;let de=Ua(this.h-this.th);if(Math.abs(de)>1.3&&(this.th=this.h-Math.sign(de)*1.3),this.trailer2){let re=Ua(this.th-te)/e,k=u*Math.cos(Ee),se=Ua(this.th-this.th2),le=this.trailer.Lk+this.trailer.coupleZ,ve=(k*Math.sin(se)-le*re*Math.cos(se))/this.trailer2.Lk;this.th2+=ve*e,de=Ua(this.th-this.th2),Math.abs(de)>1.1&&(this.th2=this.th-Math.sign(de)*1.1)}}this.collide(n,i,e),this.wheelRot+=u*e/this.model.wr*(1+this.wheelspin*2);let ie=Math.abs(u)/d,pe=Math.min(5,Math.floor(ie*6)),we=ie*6-pe;this.gear=this.reverse?"R":t.gear==="N"?"N":Math.abs(u)<.3?t.gear==="auto"?"N":"D":String(pe+1);let Ae=Math.max(b,S>.02?.7:0),Me=this.engineOn?Math.abs(u)<.3||t.gear==="N"?.18+b*.5:.3+we*.6*(.5+Ae*.5)+this.wheelspin*.3:0;this.rpm+=(Me-this.rpm)*Math.min(1,e*6),this.shake=c.shake*Math.min(1,Math.abs(u)/12),this.sync()}circles(e){let t=this.model,n=Math.sin(this.h),i=Math.cos(this.h);e.length=0;for(let a of[t.zf-.9,(t.zf+t.rearEnd)/2,t.rearEnd+.9])e.push({x:this.x+n*a,z:this.z+i*a,r:t.cabW/2+.1,t:!1});let r=(a,o,c,l)=>{let h=Math.sin(l),d=Math.cos(l);for(let u=a.front-1.2;u>a.back+.5;u-=2.4)e.push({x:o+h*u,z:c+d*u,r:1.35,t:!0});e.push({x:o+h*(a.back+1.3),z:c+d*(a.back+1.3),r:1.35,t:!0})};if(this.trailer&&r(this.trailer,this.x+n*t.hitchZ,this.z+i*t.hitchZ,this.th),this.trailer2){let a=this.couple({});r(this.trailer2,a.x,a.z,this.th2)}return e}collide(e,t,n){this.collCooldown-=n;let i=this._cs||(this._cs=[]);this.circles(i);let r=0,a=0,o=0;for(let c of i){let l=e.resolveCircle(c,c.r,zr);l>.01&&(r+=zr.x*(c.t?.6:1),a+=zr.z*(c.t?.6:1),l>o&&(o=l));for(let h of t){let d=c.x-h.x,u=c.z-h.z,f=c.r+h.r,g=d*d+u*u;if(g<f*f&&g>1e-6){let b=Math.sqrt(g),p=f-b;r+=d/b*p*.5,a+=u/b*p*.5,p>o&&(o=p),h.hit=!0}}}if(this.lastImpact=0,o>0){this.x+=r,this.z+=a;let c=Math.abs(this.v)*3.6;c>4&&o>.12&&this.collCooldown<=0&&(this.lastImpact=c,this.collCooldown=.6),this.v*=c>15&&o>.3?-.12:o>.12?.6:.97}}sync(){let e=this.model,t=Math.sin(this.h),n=Math.cos(this.h),i=this.world,r=0,a=0;i&&(r=i.heightAt(this.x,this.z),a=i.heightAt(this.x+t*e.wb,this.z+n*e.wb)),this.y=r,this.pitch=Math.atan2(a-r,e.wb);let o=this.rolled>0?1.45*Math.min(1,(3-this.rolled)*2.5):Ic((this.tipRisk||0)*.07,0,.12)+this.tip*.35,c=this.rollSide||1;e.root.position.set(this.x,r,this.z),e.root.rotation.set(-this.pitch,this.h,-c*o*.6);for(let d=0;d<e.front.length;d++){let u=e.front[d];u.rotation.y=this.steer*(d<2?1:.6),u.children[0].rotation.x=this.wheelRot}for(let d of e.rear)d.rotation.x=this.wheelRot;let l=(this.yaw||0)*this.v;e.body.rotation.z+=(Ic(-l*.01,-.06,.06)-e.body.rotation.z)*.2,e.body.rotation.x+=(Ic(-this.acc*.006,-.03,.03)-e.body.rotation.x)*.2;let h=(d,u,f,g,b,p)=>{let m=u-Math.sin(b)*d.Lk,v=f-Math.cos(b)*d.Lk,x=i?i.heightAt(m,v):0,_=Math.atan2(g-x,d.Lk);this[p]=_,d.root.position.set(u,g,f),d.root.rotation.set(-_,b,-c*o);let S=this.wheelRot*(e.wr/.5);for(let w of d.axles)w.rotation.x=S;return{ya:x,tp:_}};if(this.trailer){let d=this.x+t*e.hitchZ,u=this.z+n*e.hitchZ,f=r+(a-r)*(e.hitchZ/e.wb),g=h(this.trailer,d,u,f,this.th,"tpitch");if(this.trailer2){let b=this.couple({}),p=f+(g.ya-f)*(-this.trailer.coupleZ/this.trailer.Lk);h(this.trailer2,b.x,b.z,p,this.th2,"tpitch2")}}}};function Wh(s,e){if(e===$f)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Pa||e===gc){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Pa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Nc=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new hd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ss.extractUrlBase(e);a=ss.resolveURL(l,this.path)}else a=ss.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ra(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Up){try{a[ct.KHR_BINARY_GLTF]=new dd(e)}catch(d){i&&i(d);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new xd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case ct.KHR_MATERIALS_UNLIT:a[d]=new Kh;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[d]=new ud(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[d]=new fd;break;case ct.KHR_MESH_QUANTIZATION:a[d]=new pd;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Sy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yh=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new he(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ir(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dc(h),l.distance=d;break;case"spot":l=new Lr(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,hs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Kh=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){let i=[];e.color=new he(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},$h=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Bt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},ed=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},td=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(o[0],o[1],o[2],rn),Promise.all(r)}},nd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Bt)),Promise.all(r)}},sd=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},rd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ad=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},od=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cd=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ld=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},hd=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let b=new Ve,p=new N,m=new Ln,v=new N(1,1,1),x=new si(g.geometry,g.material,u);for(let _=0;_<u;_++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,b.compose(p,m,v));for(let _ in c)if(_==="_COLOR_0"){let S=c[_];x.instanceColor=new Ps(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);yt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Up="glTF",za=12,Lp={JSON:1313821514,BIN:5130562},dd=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-za,r=new DataView(e,za),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Lp.JSON){let l=new Uint8Array(e,za+a,o);this.content=n.decode(l)}else if(c===Lp.BIN){let l=za+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ud=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=gd[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=gd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=kr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],p=c[g];p!==void 0&&(b.normalized=p)}d(f)},o,l,rn,u)})})}},fd=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},pd=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},Uc=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,b=g-l,p=-2*f+3*u,m=f-u,v=1-p,x=m-u+d;for(let _=0;_!==o;_++){let S=a[b+_+o],w=a[b+_+c]*h,R=a[g+_+o],E=a[g+_]*h;r[_]=v*S+x*w+p*R+m*E}return r}},wy=new Ln,md=class extends Uc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return wy.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ip={9728:jt,9729:Xt,9984:Do,9985:oa,9986:Ms,9987:Bn},Dp={33071:vn,33648:fa,10497:Ci},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ey={CUBICSPLINE:void 0,LINEAR:As,STEP:br},Xh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ty(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),s.DefaultMaterial}function Fs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ay(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Ry(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cy(s){let e,t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jh(t.attributes):e=s.indices+":"+jh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+jh(s.targets[n]);return e}function jh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function bd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Py(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ly=new Ve,xd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new lc(this.options.manager):this.textureLoader=new uc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Fs(r,o,i),hs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ss.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=qh[i.type],o=kr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new At(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=qh[i.type],l=kr[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,p;if(f&&f!==d){let m=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,x=t.cache.get(v);x||(b=new l(o,m*f,i.count*f/h),x=new Er(b,f/h),t.cache.add(v,x)),p=new Rs(x,c,u%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,u,i.count*c),p=new At(b,c,g);if(i.sparse!==void 0){let m=qh.SCALAR,v=kr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new v(a[1],x,i.sparse.count*m),w=new l(a[2],_,i.sparse.count*c);o!==null&&(p=new At(p.array.slice(),p.itemSize,p.normalized));for(let R=0,E=S.length;R<E;R++){let B=S[R];if(p.setX(B,w[R*c]),c>=2&&p.setY(B,w[R*c+1]),c>=3&&p.setZ(B,w[R*c+2]),c>=4&&p.setW(B,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ip[u.magFilter]||Xt,h.minFilter=Ip[u.minFilter]||Bn,h.wrapS=Dp[u.wrapS]||Ci,h.wrapT=Dp[u.wrapT]||Ci,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){let p=new nn(b);p.needsUpdate=!0,u(p)}),t.load(ss.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),d.userData.mimeType=a.mimeType||Py(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ls,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ya,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return wn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){let d=i[ct.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],rn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Bt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dt);let h=r.alphaMode||Xh.OPAQUE;if(h===Xh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==rt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==rt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==rt){let d=r.emissiveFactor;o.emissive=new he().setRGB(d[0],d[1],d[2],rn)}return r.emissiveTexture!==void 0&&a!==rt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),hs(d,r),t.associations.set(d,{materials:e}),r.extensions&&Fs(i,d,r),d})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Np(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Cy(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Np(new mt,l,t),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Ty(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],p=a[f],m,v=l[f];if(p.mode===Kn.TRIANGLES||p.mode===Kn.TRIANGLE_STRIP||p.mode===Kn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new jo(b,v):new Oe(b,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Kn.TRIANGLE_STRIP?m.geometry=Wh(m.geometry,gc):p.mode===Kn.TRIANGLE_FAN&&(m.geometry=Wh(m.geometry,Pa));else if(p.mode===Kn.LINES)m=new $o(b,v);else if(p.mode===Kn.LINE_STRIP)m=new Tr(b,v);else if(p.mode===Kn.LINE_LOOP)m=new Zo(b,v);else if(p.mode===Kn.POINTS)m=new Ar(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ry(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),hs(m,r),p.extensions&&Fs(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Fs(i,d[0],r),d[0];let u=new Lt;r.extensions&&Fs(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Ve;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ko(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],b=f.target,p=b.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],b=d[3],p=d[4],m=[];for(let v=0,x=u.length;v<x;v++){let _=u[v],S=f[v],w=g[v],R=b[v],E=p[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let B=n._createAnimationTracks(_,S,w,R,E);if(B)for(let M=0;M<B.length;M++)m.push(B[M])}return new cc(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Ly)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new _a:l.length>1?h=new Lt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),hs(h,r),r.extensions&&Fs(n,h,r),r.matrix!==void 0){let d=new Ve;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Lt;n.name&&(r.name=i.createUniqueName(n.name)),hs(r,n),n.extensions&&Fs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);let l=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof un||u instanceof nn)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];ls[r.path]===ls.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(ls[r.path]){case ls.weights:l=Li;break;case ls.rotation:l=di;break;case ls.position:case ls.scale:l=Ii;break;default:switch(n.itemSize){case 1:l=Li;break;case 2:case 3:default:l=Ii;break}break}let h=i.interpolation!==void 0?Ey[i.interpolation]:As,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){let g=new l(c[u]+"."+ls[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof di?md:Uc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Iy(s,e,t){let n=e.attributes,i=new Mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){let h=bd(kr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let b=bd(kr[u.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new In;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Np(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=gd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ft.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),hs(s,e),Iy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ay(s,e.targets,t):s})}var ka=class s extends Oe{constructor(){let e=s.SkyShader,t=new Gn({name:e.name,uniforms:Ih.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Gt,depthWrite:!1});super(new fn(1,1,1),t),this.isSky=!0}};ka.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},up:{value:new N(0,1,0)}},vertexShader:`
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

		}`};var Op=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var v=new Uint8Array(m.length),x=0;x<m.length;++x){var _=m.charCodeAt(x);v[x]=_>96?_-97:_>64?_-39:_+4}for(var S=0,x=0;x<m.length;++x)v[S++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,S)}function c(m,v,x,_,S,w){var R=r.exports.sbrk,E=x+3&-4,B=R(E*_),M=R(S.length),T=new Uint8Array(r.exports.memory.buffer);T.set(S,M);var G=m(B,x,_,M,S.length);if(G==0&&w&&w(B,E,_),v.set(T.subarray(B,B+x*_)),R(B-R(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(m){var v={object:new Worker(m),pending:0,requests:{}};return v.object.onmessage=function(x){var _=x.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function g(m){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),x=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(x),S=0;S<m;++S)d[S]=f(_);URL.revokeObjectURL(_)}function b(m,v,x,_,S){for(var w=d[0],R=1;R<d.length;++R)d[R].pending<w.pending&&(w=d[R]);return new Promise(function(E,B){var M=new Uint8Array(x),T=u++;w.pending+=m,w.requests[T]={resolve:E,reject:B},w.object.postMessage({id:T,count:m,size:v,source:M,mode:_,filter:S},[M.buffer])})}function p(m){a.then(function(){var v=m.data;try{var x=new Uint8Array(v.count*v.size);c(r.exports[v.mode],x,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(_){self.postMessage({id:v.id,count:v.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,v,x,_,S){c(r.exports.meshopt_decodeVertexBuffer,m,v,x,_,r.exports[l[S]])},decodeIndexBuffer:function(m,v,x,_){c(r.exports.meshopt_decodeIndexBuffer,m,v,x,_)},decodeIndexSequence:function(m,v,x,_){c(r.exports.meshopt_decodeIndexSequence,m,v,x,_)},decodeGltfBuffer:function(m,v,x,_,S,w){c(r.exports[h[S]],m,v,x,_,r.exports[l[w]])},decodeGltfBufferAsync:function(m,v,x,_,S){return d.length>0?b(m,v,x,h[_],l[S]):a.then(function(){var w=new Uint8Array(m*v);return c(r.exports[h[_]],w,m,v,x,r.exports[l[S]]),w})}}}();var Br=20/2,Fp=[12597547,2719929,15528177,2899536,8359053,15844367,2600544,9323693,13849600,1118481,12436423],vd=null;function Dy(s,e){let t=new Le(!0),n=new Le(!0);vd=vd||new Fr(1,1,1,2,.18);let i=(p,m,v,x,_,S,w,R=0)=>t.add(ke.box(),Ce(x,_,S,R,0,0,p,m,v),w),r=(p,m,v,x,_,S,w)=>t.add(vd,Ce(x,_,S,0,0,0,p,m,v),w),a=1845299,o=4.4,c=1.8,l=.34;s===0?(r(c,.62,o,0,.62,0,e),r(c-.16,.6,2.3,0,1.18,-.25,a),r(c-.12,.1,2,0,1.47,-.25,e)):s===1?(o=4.7,c=1.95,l=.4,r(c,.85,o,0,.8,0,e),r(c-.1,.72,3.2,0,1.55,-.45,a),r(c-.06,.1,3,0,1.92,-.45,e),i(1.2,.05,2,0,2,-.45,2236962)):s===2?(o=11.5,c=2.5,l=.55,r(c,2.7,o,0,1.8,0,e),i(c+.02,.95,o-1.6,0,2.35,-.4,a),i(c-.2,1.3,.05,0,2.2,o/2+.01,a),i(c+.02,.25,o-.4,0,.75,0,16777215)):(o=10.5,c=2.5,l=.52,r(c-.1,2.3,2.1,0,2,o/2-1.1,e),i(c-.4,.9,.05,0,2.55,o/2-.04,a),r(c,2.8,o-2.6,0,2.55,-1.2,16053492),i(.9,.3,o-1,0,.75,-.3,2236962));let h=(p,m,v,x,_,S,w)=>n.add(ke.box(),Ce(x,_,S,0,0,0,p,m,v),w),d=s>=2?.9:.72;h(.42,.16,.06,c/2-.3,d,o/2+.01,16775393),h(.42,.16,.06,-c/2+.3,d,o/2+.01,16775393),h(.42,.16,.06,c/2-.3,d+.05,-o/2-.01,16722458),h(.42,.16,.06,-c/2+.3,d+.05,-o/2-.01,16722458);let u=s>=2?[o/2-2,-o/2+2.4]:[o/2-.85,-o/2+.85];for(let p of[-1,1])for(let m of u)t.add(ke.cyl(12),Ce(p*(c/2-.12),l,m,0,0,Math.PI/2,l*2,.28,l*2),1381653),t.add(ke.cyl(10),Ce(p*(c/2-.02),l,m,0,0,Math.PI/2,l*1.1,.06,l*1.1),12106944);let f=t.idx.length,g=t.count;for(let p=0;p<n.count*3;p++)t.pos.push(n.pos[p]),t.nor.push(n.nor[p]),t.col.push(n.col[p]);for(let p=0;p<n.count*2;p++)t.uv.push(n.uv[p]);for(let p of n.idx)t.idx.push(p+g);let b=t.geometry();return b.addGroup(0,f,0),b.addGroup(f,n.idx.length,1),{geo:b,L:o,W:c}}function zp(s,e,t,n,i){let r=1-n;return i.x=r*r*s.x+2*r*n*e.x+n*n*t.x,i.z=r*r*s.z+2*r*n*e.z+n*n*t.z,i}var Oc=class{constructor(e,t,n){this.scene=e,this.world=n,this.cars=[];let i=[new pn({vertexColors:!0,shininess:90,specular:7829367}),new rt({vertexColors:!0})];this.beamMat=new rt({map:Pe.beam(),transparent:!0,opacity:.7,depthWrite:!1,blending:Pn});let r=new Kt(6,16);r.rotateX(-Math.PI/2),r.rotateY(Math.PI);let a={};for(let o=0;o<t;o++){let c=o%7===3?3:o%11===5?2:o%3===1?1:0,l=c===2?o%2?1752220:15965202:Fp[o*7%Fp.length],h=c+"_"+l;a[h]||(a[h]=Dy(c,l));let d=new Oe(a[h].geo,i);d.castShadow=!0,d.rotation.order="YXZ";let u=new Oe(r,this.beamMat);u.position.set(0,.09,a[h].L/2+8),u.visible=!1,d.add(u),d.visible=!1,e.add(d),this.cars.push({mesh:d,beam:u,L:a[h].L,type:c,off:c>=2?7.5:o%2?2.5:7.5,v:0,vmax:c>=2?12:12+o%4,x:1e5,z:1e5,y:0,h:0,stopT:0,mode:null})}this.p={x:0,z:0},this.q={x:0,z:0},this.tmp={}}node(e,t,n){return{c:e,i:t,j:n,x:e.x0+t*140,z:e.z0+n*140}}neighbors(e){let t=[];for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=e.i+n,a=e.j+i;r>=0&&a>=0&&r<=e.c.nx&&a<=e.c.nz&&t.push(this.node(e.c,r,a))}return t}makeStraight(e){let{A:t,B:n}=e,i=Math.sign(n.x-t.x),r=Math.sign(n.z-t.z),a=-r,o=i,c={x:t.x+i*Br+a*e.off,z:t.z+r*Br+o*e.off},l={x:n.x-i*Br+a*e.off,z:n.z-r*Br+o*e.off};e.seg={p0:c,p1:{x:(c.x+l.x)/2,z:(c.z+l.z)/2},p2:l,len:Math.hypot(l.x-c.x,l.z-c.z),turn:!1},e.dir={x:i,z:r}}makeTurn(e){let{A:t,B:n}=e,i=this.neighbors(n).filter(b=>!(b.i===t.i&&b.j===t.j)),r=i[Math.random()*i.length|0],a=e.dir,o=Math.sign(r.x-n.x),c=Math.sign(r.z-n.z),l={x:-a.z,z:a.x},h={x:-c,z:o},d=e.seg.p2,u={x:n.x+o*Br+h.x*e.off,z:n.z+c*Br+h.z*e.off},f=o===a.x&&c===a.z,g=f?{x:(d.x+u.x)/2,z:(d.z+u.z)/2}:{x:n.x+(l.x+h.x)*e.off,z:n.z+(l.z+h.z)*e.off};e.seg={p0:d,p1:g,p2:u,len:f?20:Math.hypot(u.x-d.x,u.z-d.z)*1.15,turn:!f},e.next={A:n,B:r}}spawn(e,t,n){e.mesh.visible=!1,e.mode=null;let i=this.world.hw(t,n),r=Dn.find(a=>t>a.x0-350&&t<Ni(a)+350&&n>a.z0-350&&n<as(a)+350);if(i&&i.o.surface==="asphalt"&&(!r||Math.random()<.45)){let a=i.o,c=a.s[i.i]+(Math.random()<.5?-1:1)*(140+Math.random()*320);if(c<30||c>a.length-30)return;e.mode="hw",e.hwy=a,e.s=c,e.dir=Math.random()<.5?1:-1,e.v=e.vmax*1.4*.8,e.mesh.visible=!0;return}if(r)for(let a=0;a<30;a++){let o=this.node(r,Math.random()*(r.nx+1)|0,Math.random()*(r.nz+1)|0),c=this.neighbors(o),l=c[Math.random()*c.length|0],h=Math.hypot((o.x+l.x)/2-t,(o.z+l.z)/2-n);if(!(h<110||h>420)){e.mode="city",e.A=o,e.B=l,e.inTurn=!1,e.next=null,this.makeStraight(e),e.s=Math.random()*e.seg.len*.8,e.v=e.vmax*.6,e.mesh.visible=!0;return}}}update(e,t,n){let i=this.p,r=this.q,a=this.tmp;for(let o of this.cars){if(!o.mode||Math.hypot(o.x-t.x,o.z-t.z)>560){if(o.x=o.z=1e5,Math.random()<.2&&this.spawn(o,t.x,t.z),!o.mode)continue;this.place(o,i,r,a);continue}let c=Math.sin(o.hh||0),l=Math.cos(o.hh||0),h=!1,d=9+o.v*1.3+o.L/2,u=(p,m,v)=>{let x=p-o.x,_=m-o.z,S=x*c+_*l;S<=0||S>d+v||Math.abs(x*l-_*c)<1.6+v&&(h=!0)};for(let p of n)u(p.x,p.z,p.r);if(!h)for(let p of this.cars)p!==o&&p.mode&&u(p.x,p.z,p.L*.35);o.hit&&(o.stopT=2.5,o.hit=!1),o.stopT-=e;let f=o.mode==="hw"?o.vmax*1.4:o.seg.turn?6:o.vmax,g=h||o.stopT>0?0:f,b=g>o.v?2.5:7;if(o.v+=Math.sign(g-o.v)*Math.min(Math.abs(g-o.v),b*e),o.mode==="hw"){if(o.s+=o.v*e*o.dir,o.s<5||o.s>o.hwy.length-5){o.mode=null,o.mesh.visible=!1;continue}}else for(o.s+=o.v*e;o.s>=o.seg.len;)o.s-=o.seg.len,o.next&&o.inTurn?(o.A=o.next.A,o.B=o.next.B,o.next=null,o.inTurn=!1,this.makeStraight(o)):(this.makeTurn(o),o.inTurn=!0);this.place(o,i,r,a)}}place(e,t,n,i){if(e.mode==="hw"){let r=e.hwy;r.at(e.s,i);let a=i.dx*e.dir,o=i.dz*e.dir;e.x=i.x-o*3.6,e.z=i.z+a*3.6,e.y=i.y+.04,e.hh=Math.atan2(a,o);let c=r.at(e.s+e.dir*4,i).y,l=-Math.atan2(c+.04-e.y,4);e.mesh.position.set(e.x,e.y,e.z),e.mesh.rotation.set(l,e.hh,0)}else{let r=e.s/e.seg.len;zp(e.seg.p0,e.seg.p1,e.seg.p2,r,t),zp(e.seg.p0,e.seg.p1,e.seg.p2,Math.min(1,r+.02),n),Math.hypot(n.x-t.x,n.z-t.z)>1e-4&&(e.hh=Math.atan2(n.x-t.x,n.z-t.z)),e.x=t.x,e.z=t.z,e.mesh.position.set(e.x,0,e.z),e.mesh.rotation.set(0,e.hh,0)}}setNight(e){for(let t of this.cars)t.beam.visible=e>.35}obstacles(e){e.length=0;for(let t of this.cars){if(!t.mode)continue;let n=Math.sin(t.hh),i=Math.cos(t.hh),r=t.type>=2?3:2;for(let a=0;a<r;a++){let o=(a/(r-1)-.5)*(t.L-2);e.push({x:t.x+n*o,z:t.z+i*o,r:t.type>=2?1.3:1,car:t,set hit(c){this.car.hit=c}})}}return e}};var lt=null;function Fc(s,e){return lt.nodes.push({x:s,z:e,adj:[]}),lt.nodes.length-1}function zc(s,e,t){let n=0;for(let r=1;r<t.length;r++)n+=Math.hypot(t[r].x-t[r-1].x,t[r].z-t[r-1].z);let i={a:s,b:e,poly:t,len:n};return lt.edges.push(i),lt.nodes[s].adj.push(i),lt.nodes[e].adj.push(i),i}function kp(s){lt={nodes:[],edges:[],cityNode:{}};for(let e of Dn){let t=(n,i)=>e.id+":"+n+":"+i;for(let n=0;n<=e.nx;n++)for(let i=0;i<=e.nz;i++)lt.cityNode[t(n,i)]=Fc(e.x0+n*140,e.z0+i*140);for(let n=0;n<=e.nx;n++)for(let i=0;i<=e.nz;i++){let r=lt.cityNode[t(n,i)];if(n<e.nx){let a=lt.cityNode[t(n+1,i)];zc(r,a,[lt.nodes[r],lt.nodes[a]])}if(i<e.nz){let a=lt.cityNode[t(n,i+1)];zc(r,a,[lt.nodes[r],lt.nodes[a]])}}}for(let e of s.hws){let t=[];for(let c of Object.values(s.depots))c.entry.hw===e.id&&t.push({s:c.entry.s,depot:c.id});for(let c of s.hws)if(c.def.from&&c.def.from[0]==="hw"&&c.def.from[1]===e.id){let l=0,h=1/0;for(let d=0;d<e.n;d++){let u=(e.x[d]-c.x[0])**2+(e.z[d]-c.z[0])**2;u<h&&(h=u,l=d)}t.push({s:e.s[l]+.001,junction:c.id})}t.sort((c,l)=>c.s-l.s),lt.junction=lt.junction||{};let n=e.def.from?e.def.from[0]==="hw"?lt.junction[e.id]:lt.cityNode[e.def.from[0]+":"+e.def.from[1]+":"+e.def.from[2]]:Fc(e.x[0],e.z[0]),i=e.def.to&&e.def.to[0]!=="hw"?lt.cityNode[e.def.to[0]+":"+e.def.to[1]+":"+e.def.to[2]]:Fc(e.x[e.n-1],e.z[e.n-1]),r=n,a=0,o=(c,l)=>{let h=[];for(let d=c;d<=l;d++)h.push({x:e.x[d],z:e.z[d]});return h};for(let c of t){let l=0;for(;l<e.n-1&&e.s[l+1]<c.s;)l++;let h=Fc(e.x[l],e.z[l]);lt.depotNode=lt.depotNode||{},c.depot&&(lt.depotNode[c.depot]=h),c.junction&&(lt.junction[c.junction]=h),zc(r,h,[lt.nodes[r],...o(a,l)]),r=h,a=l}zc(r,i,[...o(a,e.n-1),lt.nodes[i]])}return lt}function yd(s,e){let t=null,n=1/0;for(let i of lt.edges){let r=i.poly;for(let a=0;a<r.length-1;a++){let o=r[a].x,c=r[a].z,l=r[a+1].x-o,h=r[a+1].z-c,d=l*l+h*h||1,u=((s-o)*l+(e-c)*h)/d;u=u<0?0:u>1?1:u;let f=o+l*u,g=c+h*u,b=(s-f)**2+(e-g)**2;b<n&&(n=b,t={e:i,i:a,t:u,x:f,z:g})}}return t}function Bp(s){let e=s.e.poly,t=[{x:s.x,z:s.z}];for(let r=s.i;r>=0;r--)t.push(e[r]);let n=[{x:s.x,z:s.z}];for(let r=s.i+1;r<e.length;r++)n.push(e[r]);let i=r=>r.reduce((a,o,c)=>c?a+Math.hypot(o.x-r[c-1].x,o.z-r[c-1].z):0,0);return[{node:s.e.a,poly:t,len:i(t)},{node:s.e.b,poly:n,len:i(n)}]}var _d=new Map;function Ny(s){if(_d.has(s.id))return _d.get(s.id);let e;if(lt.depotNode&&lt.depotNode[s.id]!==void 0){let t=lt.depotNode[s.id];e=[{node:t,poly:[lt.nodes[t]],len:0}]}else e=Bp(yd(s.entry.x,s.entry.z)).map(t=>Zn(Ut({},t),{poly:t.poly.slice().reverse()}));return _d.set(s.id,e),e}function Md(s,e,t){let n=lt.nodes.length,i=new Float64Array(n).fill(1/0),r=new Array(n).fill(null),a=new Uint8Array(n),o=yd(s,e),c=Bp(o),l={};for(let m of c)i[m.node]=m.len,l[m.node]=m.poly;for(;;){let m=-1,v=1/0;for(let x=0;x<n;x++)!a[x]&&i[x]<v&&(v=i[x],m=x);if(m<0)break;a[m]=1;for(let x of lt.nodes[m].adj){let _=x.a===m?x.b:x.a,S=v+x.len;S<i[_]&&(i[_]=S,r[_]={u:m,e:x})}}let h=Ny(t),d=null,u=1/0;for(let m of h)i[m.node]+m.len<u&&(u=i[m.node]+m.len,d=m);let f=[];for(let m=d.node;r[m];m=r[m].u)f.unshift(r[m]);let g=[{x:s,z:e}],b=f.length?f[0].u:d.node;if(!f.length&&o.e===yd(t.entry.x,t.entry.z).e&&!(lt.depotNode&&lt.depotNode[t.id]!==void 0))g.push({x:o.x,z:o.z},{x:t.entry.x,z:t.entry.z});else{g.push(...l[b]);for(let{u:m,e:v}of f){let _=v.a===m?v.poly:v.poly.slice().reverse();for(let S=1;S<_.length;S++)g.push(_[S])}g.push(...d.poly)}g.push({x:t.zone.x,z:t.zone.z});let p=0;for(let m=1;m<g.length;m++)p+=Math.hypot(g[m].x-g[m-1].x,g[m].z-g[m-1].z);return{path:g,len:p}}var kc=class{constructor(){this.ctx=null,this.volume=.7}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(t.destination),this.engGain=t.createGain(),this.engGain.gain.value=0,this.filter=t.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=400,this.filter.Q.value=4,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(this.filter),this.o2.connect(n).connect(this.filter);let i=t.createBuffer(1,t.sampleRate,t.sampleRate),r=i.getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=i,this.noise.loop=!0;let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=180,this.nGain=t.createGain(),this.nGain.gain.value=.25,this.noise.connect(a).connect(this.nGain).connect(this.filter),this.filter.connect(this.engGain).connect(this.master),this.o1.start(),this.o2.start(),this.noise.start()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}engine(e,t,n=!0){if(!this.ctx)return;let i=this.ctx.currentTime,r=28+e*70;this.o1.frequency.setTargetAtTime(r,i,.05),this.o2.frequency.setTargetAtTime(r*.5,i,.05),this.filter.frequency.setTargetAtTime(220+e*900+t*400,i,.08),this.engGain.gain.setTargetAtTime(n?.13+t*.08:0,i,.1)}horn(e){if(this.ctx){if(e&&!this.hornNodes){let t=this.ctx.createGain();t.gain.value=.18;let n=this.ctx.createOscillator(),i=this.ctx.createOscillator();n.type=i.type="sawtooth",n.frequency.value=233,i.frequency.value=311;let r=this.ctx.createBiquadFilter();r.frequency.value=1800,n.connect(r),i.connect(r),r.connect(t).connect(this.master),n.start(),i.start(),this.hornNodes=[n,i,t]}else if(!e&&this.hornNodes){let[t,n,i]=this.hornNodes;i.gain.setTargetAtTime(0,this.ctx.currentTime,.03),t.stop(this.ctx.currentTime+.2),n.stop(this.ctx.currentTime+.2),this.hornNodes=null}}}beep(e=880,t=.12,n="sine",i=.25){if(!this.ctx)return;let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n,r.frequency.value=e,a.gain.value=i,a.gain.setTargetAtTime(0,this.ctx.currentTime+t*.6,t*.3),r.connect(a).connect(this.master),r.start(),r.stop(this.ctx.currentTime+t*2)}crash(e){if(!this.ctx)return;let t=this.ctx,i=t.createBuffer(1,t.sampleRate*.35,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);let a=t.createBufferSource();a.buffer=i;let o=t.createBiquadFilter();o.frequency.value=900;let c=t.createGain();c.gain.value=Math.min(.9,.2+e/60),a.connect(o).connect(c).connect(this.master),a.start()}airBrake(){if(!this.ctx)return;let e=this.ctx,n=e.createBuffer(1,e.sampleRate*.6,e.sampleRate),i=n.getChannelData(0);for(let c=0;c<i.length;c++)i[c]=(Math.random()*2-1)*(1-c/i.length);let r=e.createBufferSource();r.buffer=n;let a=e.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let o=e.createGain();o.gain.value=.22,r.connect(a).connect(o).connect(this.master),r.start()}screech(e){if(this.ctx){if(!this.scr){let t=this.ctx,n=t.sampleRate,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=Math.random()*2-1;let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2400,o.Q.value=6;let c=t.createGain();c.gain.value=0,a.connect(o).connect(c).connect(this.master),a.start(),this.scr=c}this.scr.gain.setTargetAtTime(e*.22,this.ctx.currentTime,.08)}}starter(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),i=e.createGain(),r=e.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(14,t),n.frequency.linearRampToValueAtTime(22,t+.7),n.frequency.linearRampToValueAtTime(48,t+1.1),r.frequency.value=600,i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.35,t+.1),i.gain.setValueAtTime(.35,t+1),i.gain.linearRampToValueAtTime(0,t+1.4),n.connect(r).connect(i).connect(this.master),n.start(t),n.stop(t+1.5)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}};var ue=s=>document.getElementById(s),Ud="drizzieTruck.v1",Tn=s=>"R$ "+Math.round(s).toLocaleString("pt-BR"),bi=(s,e,t)=>Math.max(e,Math.min(t,s)),Bc={money:3e3,xp:0,level:1,owned:["mini"],truck:"mini",job:null,pos:null,name:"Motorista",clock:15.5,stats:{deliveries:0,km:0,earned:0,tons:0,crashes:0},settings:{quality:"auto",volume:.7,fps:!1,steer:"wheel",camera:0,time:"cycle",gearbox:"manual",gauge:"analog",accent:"amber",hud:"normal"}};function Uy(){try{let s=JSON.parse(localStorage.getItem(Ud));if(s&&s.level){let e=Zn(Ut(Ut({},Bc),s),{stats:Ut(Ut({},Bc.stats),s.stats),settings:Ut(Ut({},Bc.settings),s.settings)});return e.owned.includes("mini")||e.owned.unshift("mini"),e}}catch(s){}return JSON.parse(JSON.stringify(Bc))}var Y=Uy();function Wt(){try{Y.pos=Z?{x:Z.x,z:Z.z,h:Z.h}:Y.pos,localStorage.setItem(Ud,JSON.stringify(Y))}catch(s){}}var Oy={low:{pr:1,minPr:.75,shadows:!1,shadowSize:0,tex:512,aniso:2,traffic:10,fogNear:150,fogFar:650,far:900,trees:5e3,terrainStep:34},medium:{pr:1.5,minPr:.85,shadows:!0,shadowSize:1024,tex:1024,aniso:4,traffic:16,fogNear:260,fogFar:1050,far:1500,trees:9e3,terrainStep:26},high:{pr:2,minPr:1,shadows:!0,shadowSize:2048,tex:1024,aniso:8,traffic:22,fogNear:380,fogFar:1600,far:2600,trees:14e3,terrainStep:20}};function Fy(){let s="";try{let n=document.createElement("canvas"),i=n.getContext("webgl")||n.getContext("experimental-webgl"),r=i&&i.getExtension("WEBGL_debug_renderer_info");s=(r&&i.getParameter(r.UNMASKED_RENDERER_WEBGL)||i&&i.getParameter(i.RENDERER)||"").toLowerCase();let a=i&&i.getExtension("WEBGL_lose_context");a&&a.loseContext()}catch(n){}let e=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4;return/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(s)||e<=2||t<=4?"low":e>=6&&t>=8&&/adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(s)?"high":"medium"}var gi=Y.settings.quality==="auto"?Fy():Y.settings.quality,wt=Oy[gi],qt,Nt,Dt,bt,Z,ks,on,$n,Wa,qa,ds,Rd=null,Wr=null,Hp=-1,Ga=null,mi=null,xi=null,Qt=0,at=new kc;at.volume=Y.settings.volume;var Ft="loading",Bs=[],ai=null,Xa=0;var cn,oi,Ba=0,Sd=[],Ie={gas:!1,brake:!1,left:!1,right:!1,tilt:0,wheel:0,wheelHeld:!1,gear:"D",hand:!1,blink:0,blinkArm:!1},yn={throttle:0,brake:0,steer:0,gear:"D",handbrake:!1},qr=null,Ze={yaw:0,orbit:0,orbitT:0,mode:Y.settings.camera||0,pos:new N,look:new N},zi=wt.pr,zs=(s,e)=>new Promise(t=>{ue("loadbar").style.width=s+"%",ue("loadmsg").textContent=e,setTimeout(t,16)});async function zy(){await zs(5,"Iniciando gr\xE1ficos\u2026");let s=ue("gl");try{qt=new xa({canvas:s,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(i){ue("loadmsg").textContent='Seu aparelho n\xE3o suporta WebGL. Atualize o "Android System WebView" na Play Store.';return}zi=Math.min(window.devicePixelRatio||1,wt.pr),qt.setPixelRatio(zi),qt.setSize(window.innerWidth,window.innerHeight,!1),qt.outputColorSpace=Bt,qt.toneMapping=Ah,qt.toneMappingExposure=1,qt.shadowMap.enabled=wt.shadows,qt.shadowMap.type=gi==="high"?Th:fc;let e=qt.capabilities.getMaxAnisotropy();xp(wt.tex,Math.min(e,wt.aniso)),Tp(gi),Nt=new va;let t=new he(12375786);if(Nt.background=t,Nt.fog=new Xo(t,wt.fogNear,wt.fogFar),Dt=new Ht(58,window.innerWidth/window.innerHeight,.5,wt.far),Ky(),Wa=new hc(14413567,6122309,1.25),Nt.add(Wa),on=new Ir(16773336,2.6),on.position.set(180,260,120),wt.shadows){on.castShadow=!0,on.shadow.mapSize.set(wt.shadowSize,wt.shadowSize);let i=gi==="high"?70:55;Object.assign(on.shadow.camera,{left:-i,right:i,top:i,bottom:-i,near:10,far:600}),on.shadow.bias=-6e-4,on.shadow.normalBias=.04}Nt.add(on,on.target),await zs(20,"Gerando texturas HD\u2026"),Pe.road(),Pe.intersection(),Pe.grass(),Pe.facade(0),Pe.facade(1),Pe.facade(2),Pe.facade(3),await zs(45,"Construindo a cidade\u2026"),bt=new Pc(Nt,wt),kp(bt),await zs(62,"Carregando caminh\xF5es 3D\u2026");let n=new Nc;n.setMeshoptDecoder(Op);for(let i of["labo","canter","volvo","flatbed"])try{Os[i]=(await n.loadAsync(`models/${i}.glb`)).scene}catch(r){console.warn("modelo",i,r)}await zs(70,"Ligando o motor\u2026"),Z=new Dc(Nt,La[Y.truck]||Nr[0],wt.shadows),gi!=="low"&&(ds=new Lr(16773590,0,70,.55,.6,1.2),ds.target=new yt,Z.onModel=i=>{i.root.add(ds,ds.target),ds.position.set(0,i.y0+.3,i.zf+.4),ds.target.position.set(0,0,i.zf+22)},Z.onModel(Z.model)),$y(),Z.onRollover=()=>{if(at.crash(60),Y.stats.crashes++,navigator.vibrate)try{navigator.vibrate([200,80,300])}catch(r){}let i="\u{1F4A5} O caminh\xE3o TOMBOU! Curva r\xE1pida demais para a carga.";Y.job&&Y.job.phase==="deliver"&&(Y.job.damage=Math.min(100,Y.job.damage+55),i+=" Carga avariada +55%"),Un(i,4200),setTimeout(()=>{e0(),Un("Guincho: caminh\xE3o desvirado e recolocado na via",2600)},3e3)},ks=new Oc(Nt,wt.traffic,bt),Zy(),await zs(85,"Desenhando o mapa\u2026"),s1(),Y.job&&Y.job.phase==="deliver"&&Z.attach(mn[Y.job.cargo]),Bs=Od(),i1(),o1(),gi!=="low"&&(Rd=new wr(qt),Vy()),qc(Y.clock),await zs(100,"Pronto!"),qt.compile(Nt,Dt),ue("loading").classList.add("hidden"),Ka(),Xc=performance.now(),requestAnimationFrame(t0)}var ky=new he(12375786),By=new he(14916203),Hy=new he(659744),Ha=new he;function qc(s){let e=Y.settings.time;e==="day"?s=12:e==="night"?s=23:e==="dusk"&&(s=17.7);let t=Math.sin((s-6)/12*Math.PI),n=bi(t*2.4+.25,0,1),i=bi(1-Math.abs(t)*4,0,1)*(t>-.25?1:0);if(Qt=1-n,on.intensity=2.7*n+.55*Qt,Qt>.6?on.color.setHex(9414872):on.color.setHSL(.09,.6+i*.3,.85-i*.2),Wa.intensity=.62+.65*n,Wa.color.setHex(14413567).lerp(Ha.setHex(5928104),Qt),Wa.groundColor.setHex(6122309).lerp(Ha.setHex(1843760),Qt),Ha.copy(Hy).lerp(ky,n).lerp(By,i*.55),Nt.background.copy(Ha),Nt.fog.color.copy(Ha),$n.material.color.setRGB(.07,.09,.16).lerp(new he(1,1,1),n).lerp(new he(1.15,.72,.55),i*.6),qa.material.opacity=bi(Qt*1.3-.3,0,1),qa.visible=qa.material.opacity>.01,qt.toneMappingExposure=1+Qt*.25,Ga.material.color.setRGB(1,1,1).lerp(new he(.12,.14,.2),Qt).lerp(new he(1.1,.75,.6),i*.7),mi){let a=(s-6)/12*Math.PI,o=Math.max(-.3,t)*1.25;mi.material.uniforms.sunPosition.value.set(Math.cos(a)*Math.cos(o),Math.sin(o),Math.sin(a)*.6*Math.cos(o)),mi.material.uniforms.rayleigh.value=1.2+i*1.8,mi.visible=Qt<.85}xi.material.color.setRGB(1,1,1).lerp(Nt.fog.color,.55),xi.material.color.multiplyScalar(1-Qt*.75),qy(),bt.setNight(Qt),ks.setNight(Qt);let r=qr!==null?qr:Qt>.35;Z.lightsOn!==r&&Z.setLights(r),ds&&(ds.intensity=Z.lightsOn?60*(.35+Qt):0)}function Gy(){let e=[],t=wt.far*.9;for(let i=0;i<900;i++){let r=Math.random()*Math.PI*2,a=Math.random()*.9+.08,o=Math.sqrt(1-a*a);e.push(Math.cos(r)*o*t,a*t,Math.sin(r)*o*t)}let n=new mt;n.setAttribute("position",new Ge(e,3)),qa=new Ar(n,new Ls({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),$n.add(qa)}function Vy(){Wr=new va;let s=new es(10,24,12),e=[],t=s.attributes.position;for(let n=0;n<t.count;n++)e.push(1,1,1);s.setAttribute("color",new Ge(e,3)),Wr.userData.sky=new Oe(s,new rt({vertexColors:!0,side:Gt})),Wr.add(Wr.userData.sky)}var Hr=new he,Wy=new he;function qy(){if(!Rd||Math.abs(Qt-Hp)<.08)return;Hp=Qt;let s=Wr.userData.sky.geometry,e=s.attributes.position,t=s.attributes.color,n=new he(4884165).lerp(new he(461590),Qt),i=Nt.background.clone(),r=new he(5200442).lerp(new he(461068),Qt);for(let o=0;o<e.count;o++){let c=e.getY(o)/10;c>=0?Hr.copy(i).lerp(n,Math.min(1,c*1.6)):Hr.copy(i).lerp(r,Math.min(1,-c*3)),Qt<.5&&c>.3&&e.getX(o)>4&&e.getZ(o)>2&&Hr.lerp(Wy.setRGB(2.2,2,1.7),.5),t.setXYZ(o,Hr.r,Hr.g,Hr.b)}t.needsUpdate=!0;let a=Rd.fromScene(Wr,.02);Nt.environment&&Nt.environment.dispose(),Nt.environment=a.texture}function Xy(s){Ze.tt=(Ze.tt||0)+s;let e=Ze.tt*.08+Ze.orbit,t=Z.model,n=Math.sin(Z.h),i=Math.cos(Z.h),r=Z.x+n*t.wb*.4,a=Z.z+i*t.wb*.4,o=((t.zf-t.rearEnd)*1.15+4.5+(Z.trailer?6:0))*(Ze.zoom||1),c=Z.h+.7+Math.sin(e)*.9;Dt.position.set(r+Math.sin(c)*o,1.6+Math.sin(e*.7)*.6,a+Math.cos(c)*o);let l=Math.cos(c),h=-Math.sin(c);Dt.lookAt(r-l*3.2,1.9,a-h*3.2),Dt.fov=50,Dt.updateProjectionMatrix(),wt.shadows&&(on.target.position.set(Z.x,0,Z.z),on.position.set(Z.x+150,170,Z.z+95)),$n.position.copy(Dt.position),xi&&(xi.position.y=-Dt.position.y-4)}function jy(){let s=wt.far*.82,e=[],t=[],n=new he(5989488),i=new he(15265524),r=new he(3953206),a=7,o=()=>(a=a*16807%2147483647)/2147483647,c=220,l=[];for(let d=0;d<=c;d++)l.push(0);for(let d=0;d<4;d++){let u=[3,7,17,41][d],f=[.09,.05,.025,.012][d],g=o()*10;for(let b=0;b<=c;b++)l[b]+=f*(.5+.5*Math.sin(b/c*Math.PI*2*u+g+Math.sin(b*.37*(d+1))*.6))}for(let d=0;d<c;d++){let u=d/c*Math.PI*2,f=(d+1)/c*Math.PI*2,g=l[d]*s,b=l[d+1]*s,p=(E,B)=>[Math.cos(E)*s,B-s*.01,Math.sin(E)*s],m=p(u,0),v=p(f,0),x=p(u,g),_=p(f,b);e.push(...m,...v,..._,...m,..._,...x);let S=r,w=n,R=n;t.push(S.r,S.g,S.b,S.r,S.g,S.b,R.r,R.g,R.b,S.r,S.g,S.b,R.r,R.g,R.b,w.r,w.g,w.b)}let h=new mt;h.setAttribute("position",new Ge(e,3)),h.setAttribute("color",new Ge(t,3)),xi=new Oe(h,new rt({vertexColors:!0,fog:!1,depthWrite:!1,side:dt,transparent:!0,opacity:1})),xi.renderOrder=-.8,$n.add(xi)}function Yy(){let s=new es(wt.far*.85,32,8,0,Math.PI*2,0,Math.PI*.42);Ga=new Oe(s,new rt({map:Pe.clouds(),transparent:!0,depthWrite:!1,fog:!1,side:Gt,opacity:.9})),Ga.material.map.repeat.set(3,1),Ga.renderOrder=-.5,$n.add(Ga)}function Ky(){let s=new es(wt.far*.95,24,12),e=new he(4030404),t=new he(10274536),n=new he(14543344),i=[],r=s.attributes.position,a=new he;for(let o=0;o<r.count;o++){let c=r.getY(o)/(wt.far*.95);c>.25?a.copy(t).lerp(e,Math.min(1,(c-.25)/.75)):a.copy(n).lerp(t,Math.max(0,c/.25)),i.push(a.r,a.g,a.b)}if(s.setAttribute("color",new Ge(i,3)),$n=new Oe(s,new rt({vertexColors:!0,side:Gt,fog:!1,depthWrite:!1})),$n.renderOrder=-1,Nt.add($n),Gy(),Yy(),jy(),gi!=="low"){mi=new ka,mi.scale.setScalar(wt.far*.9),mi.renderOrder=-2,mi.material.depthWrite=!1;let o=mi.material.uniforms;o.turbidity.value=5,o.rayleigh.value=1.6,o.mieCoefficient.value=.004,o.mieDirectionalG.value=.85,$n.material.visible=!1,$n.add(mi)}}function $y(){if(Z.world=bt,Y.pos&&isFinite(Y.pos.x)&&bt.resolveCircle({x:Y.pos.x,z:Y.pos.z},1.5,ja)<=0){Z.place(Y.pos.x,Y.pos.z,Y.pos.h);return}let s=bt.depots.garagem.zone;Z.place(s.x-8,s.z,Math.PI/2),Z.world=bt,Z.sync()}function Zy(){cn=new Lt;let s=new Oe(new Kt(1,1),new rt({map:Pe.zone(),color:16761856,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));s.rotation.x=-Math.PI/2,s.position.y=.08,cn.add(s),cn.zone=s;let e=new Oe(new Wn(3,3,60,20,1,!0),new rt({color:16758531,transparent:!0,opacity:.22,depthWrite:!1,side:dt,fog:!1,blending:Pn}));e.position.y=30,cn.add(e);let t=new Oe(new Rr(1.6,3.2,4),new rt({color:16761856}));t.rotation.x=Math.PI,cn.add(t),cn.cone=t,cn.visible=!1,Nt.add(cn);let n=new Qi;n.moveTo(0,1.6),n.lineTo(1.3,-.6),n.lineTo(0,0),n.lineTo(-1.3,-.6),n.closePath();let i=new ac(n);i.rotateX(Math.PI/2),oi=new Oe(i,new rt({color:4120698,transparent:!0,opacity:.9,side:dt,depthTest:!1})),oi.renderOrder=10,oi.visible=!1,Nt.add(oi)}function Jy(s,e){let t=bt.depots[s],n=bt.depots[e];return Md(t.zone.x,t.zone.z,n).len}function Qy(s,e,t){let n=Jy(e,t),i=n/1e3,r=Math.round((350+i*(900+s.t*115)*s.rate)/10)*10,a=Math.round(50+s.t*4+i*70),o=Math.round(n/8.5+90+s.t*1.5);return{cargo:s.id,from:e,to:t,dist:n,pay:r,xp:a,time:o}}function Od(){let s=[],e=Ia.filter(i=>i.lvl<=Y.level+4),t=new Set,n=0;for(;s.length<10&&n++<200;){let i=e.filter(h=>h.lvl<=Y.level),r=Math.random()<.78&&i.length?i:e,a=r[Math.random()*r.length|0],o=a.from[Math.random()*a.from.length|0],c=a.to[Math.random()*a.to.length|0],l=a.id+o+c;o===c||t.has(l)||(t.add(l),s.push(Qy(a,o,c)))}return s.sort((i,r)=>(Cd(i)?0:1)-(Cd(r)?0:1)||mn[i.cargo].t-mn[r.cargo].t),s}function Fd(s,e=Z.def){let t=mn[s.cargo];return t.lvl>Y.level?`Requer n\xEDvel ${t.lvl}`:t.t>e.cap?`Caminh\xE3o fraco (m\xE1x. ${e.cap} t)`:e.rigid&&t.trailer!=="box"?"Requer cavalo mec\xE2nico":t.trailer==="bitrem"&&(e.axles<3||e.drive<.45)?"Bitrem exige cavalo com tra\xE7\xE3o 6x4 ou 8x4":null}var Cd=s=>!Fd(s);function jp(s){let e=Bs[s];!e||!Cd(e)||Y.job||(Y.job=Zn(Ut({},e),{phase:"pickup",damage:0,tLeft:e.time}),Bs.splice(s,1),at.beep(660,.1),at.beep(990,.12),Ya(),Un(`Frete aceito! V\xE1 at\xE9 <b>${Ui[e.from].name}</b>`),Xa=0,Wt())}function Yp(){if(!Y.job)return;let s=Y.job.phase==="deliver"?Math.round(Y.job.pay*.25):0;Y.money=Math.max(0,Y.money-s),Z.detach(),Y.job=null,cn.visible=!1,oi.visible=!1,Un(s?`Frete cancelado. Multa de ${Tn(s)}`:"Frete cancelado"),Wt()}function jc(){return Y.job?bt.depots[Y.job.phase==="pickup"?Y.job.from:Y.job.to]:null}function Kp(s){let e=Z.center({x:0,z:0}),t=s.zone;return Math.abs(e.x-t.x)<t.w/2+3&&Math.abs(e.z-t.z)<t.d/2+3}function Vc(s){let e=Y.job;if(!e){ue("progress").classList.add("hidden");return}e.phase==="deliver"&&(e.tLeft-=s);let t=jc(),n=Kp(t),i=Z.speedKmh<1.5;if(n&&i){Ba+=s;let r=2.2;ue("progress").classList.remove("hidden"),ue("progtext").textContent=e.phase==="pickup"?"Carregando\u2026":"Descarregando\u2026",ue("progarc").style.strokeDashoffset=264*(1-Math.min(1,Ba/r)),Ba>=r&&(Ba=0,ue("progress").classList.add("hidden"),e.phase==="pickup"?(Z.attach(mn[e.cargo]),e.phase="deliver",e.tLeft=e.time,at.airBrake(),Un(`Carga engatada: <b>${mn[e.cargo].name}</b> (${mn[e.cargo].t} t)`),Un(`Entregue em <b>${Ui[e.to].name}</b>`),Xa=0,Wt()):e1())}else Ba=0,ue("progress").classList.add("hidden"),n&&!i&&Z.speedKmh<25&&!Vc.warned&&(Un("Pare na \xE1rea marcada"),Vc.warned=!0),n||(Vc.warned=!1)}function e1(){let s=Y.job,e=mn[s.cargo],t=s.pay,n=Math.round(t*s.damage/100),i=s.tLeft>=0,r=i?Math.round(t*.15):-Math.round(t*.2),a=Math.max(0,t-n+r),o=Math.round(s.xp*(s.damage<5?1.2:1)*(i?1:.7));Y.money+=a,Y.stats.deliveries++,Y.stats.earned+=a,Y.stats.tons+=e.t,Z.detach(),Y.job=null,cn.visible=!1,oi.visible=!1,at.airBrake(),at.beep(880,.12),setTimeout(()=>at.beep(1320,.18),120);let c=[["Pagamento base",Tn(t)],[i?"B\xF4nus no prazo (+15%)":"Atraso (\u221220%)",(r>=0?"+":"")+Tn(r)],[`Avaria da carga (${s.damage.toFixed(0)}%)`,"\u2212"+Tn(n)],["Experi\xEAncia",`+${o} XP`]],l=t1(o);jr(`<h2>Entrega conclu\xEDda! \u2705</h2><div>${e.icon} ${e.name} \u2022 ${e.t} t \u2192 ${Ui[s.to].name}</div>
    <div class="big">${Tn(a)}</div>
    <div class="lines">${c.map(h=>`<div><span>${h[0]}</span><b>${h[1]}</b></div>`).join("")}</div>
    <button class="btn" data-act="popjobs">Pr\xF3ximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,l),Bs=Od(),Wt()}function t1(s){Y.xp+=s;let e=[];for(;Y.level<30&&Y.xp>=Ur(Y.level);)Y.xp-=Ur(Y.level),Y.level++,e.push(Y.level);return e}function n1(s){let e=Ia.filter(n=>n.lvl===s),t=Nr.filter(n=>n.level===s);at.beep(523,.12),setTimeout(()=>at.beep(659,.12),120),setTimeout(()=>at.beep(784,.25),240),jr(`<h2>\u2B50 N\xEDvel ${s}!</h2><div>Voc\xEA subiu de n\xEDvel.</div>
    <div class="lines">${e.map(n=>`<div><span>${n.icon} Nova carga: ${n.name}</span><b>${n.t} t</b></div>`).join("")}
    ${t.map(n=>`<div><span>\u{1F69A} Novo caminh\xE3o: ${n.name}</span><b>${Tn(n.price)}</b></div>`).join("")}
    ${!e.length&&!t.length?"<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>":""}</div>
    <button class="btn" data-act="popclose">Show!</button>`)}function i1(){let s=(h,d)=>{let u=g=>{if(g.preventDefault(),Ie[d]=!0,h.classList.add("on"),at.init(),h.setPointerCapture&&g.pointerId!==void 0)try{h.setPointerCapture(g.pointerId)}catch(b){}},f=g=>{g.preventDefault(),Ie[d]=!1,h.classList.remove("on")};h.addEventListener("pointerdown",u),h.addEventListener("pointerup",f),h.addEventListener("pointercancel",f),h.addEventListener("lostpointercapture",f),h.addEventListener("contextmenu",g=>g.preventDefault())};s(ue("gas"),"gas"),s(ue("brake"),"brake"),s(ue("left"),"left"),s(ue("right"),"right");let e=ue("wheel"),t=null,n=h=>{let d=e.getBoundingClientRect();return Math.atan2(h.clientX-(d.left+d.width/2),-(h.clientY-(d.top+d.height/2)))};e.addEventListener("pointerdown",h=>{h.preventDefault(),at.init();let d=e.getBoundingClientRect();Math.hypot(h.clientX-(d.left+d.width/2),h.clientY-(d.top+d.height/2))<d.width*.17?(at.horn(!0),t={horn:!0,id:h.pointerId}):(t={id:h.pointerId,a0:n(h),w0:Ie.wheel},Ie.wheelHeld=!0);try{e.setPointerCapture(h.pointerId)}catch(f){}}),e.addEventListener("pointermove",h=>{if(!t||t.horn||h.pointerId!==t.id)return;let d=n(h)-t.a0;d=Math.atan2(Math.sin(d),Math.cos(d)),Ie.wheel=bi(t.w0+d*180/Math.PI,-150,150),t.a0=n(h),t.w0=Ie.wheel});let i=()=>{t&&t.horn&&at.horn(!1),t=null,Ie.wheelHeld=!1};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("lostpointercapture",i),document.querySelectorAll("#gearsel button").forEach(h=>h.addEventListener("pointerdown",d=>{d.preventDefault(),Wc(h.dataset.g)}));let r=h=>{Ie.blink=Ie.blink===h?0:h,Ie.blinkArm=!1,Vr=0,at.init(),at.beep(1500,.03,"square",.06)};ue("blinkL").addEventListener("pointerdown",h=>{h.preventDefault(),r(-1)}),ue("blinkR").addEventListener("pointerdown",h=>{h.preventDefault(),r(1)}),ue("ic-haz").addEventListener("pointerdown",h=>{h.preventDefault(),r(2)}),window.__setBlink=r,ue("ic-hand").addEventListener("pointerdown",h=>{h.preventDefault(),Ie.hand=!Ie.hand,at.airBrake()}),ue("lightsbtn").addEventListener("pointerdown",h=>{h.preventDefault(),qr=!Z.lightsOn,Z.setLights(qr),at.beep(1400,.04,"square",.08)}),ue("enginebtn").addEventListener("click",Vp);let a={ArrowUp:"gas",KeyW:"gas",ArrowDown:"brake",KeyS:"brake",Space:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",h=>{at.init(),a[h.code]&&(Ie[a[h.code]]=!0,h.preventDefault()),h.code==="KeyH"&&at.horn(!0),h.code==="KeyR"&&!h.repeat&&Wc(Ie.gear==="R"?"D":"R"),h.code==="KeyN"&&!h.repeat&&Wc("N"),h.code==="KeyE"&&!h.repeat&&Vp(),h.code==="KeyL"&&!h.repeat&&(qr=!Z.lightsOn,Z.setLights(qr)),h.code==="KeyP"&&!h.repeat&&(Ie.hand=!Ie.hand),h.code==="KeyZ"&&!h.repeat&&window.__setBlink(-1),h.code==="KeyX"&&!h.repeat&&window.__setBlink(1),h.code==="KeyC"&&!h.repeat&&$p(),h.code==="KeyM"&&!h.repeat&&Ld(),h.code==="Escape"&&Gp()}),window.addEventListener("keyup",h=>{a[h.code]&&(Ie[a[h.code]]=!1),h.code==="KeyH"&&at.horn(!1)});let o=ue("gl"),c=null;o.addEventListener("pointerdown",h=>{c={x:h.clientX,id:h.pointerId}}),window.addEventListener("pointermove",h=>{!c||h.pointerId!==c.id||(Ze.orbit+=(h.clientX-c.x)*.008,c.x=h.clientX,Ze.orbitT=1.8)});let l=h=>{c&&h.pointerId===c.id&&(c=null)};window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),window.addEventListener("devicemotion",h=>{var g,b;let d=h.accelerationIncludingGravity;if(!d||d.y==null)return;let u=(b=(g=screen.orientation&&screen.orientation.angle)!=null?g:window.orientation)!=null?b:90,f=u===90?1:u===270||u===-90?-1:0;Ie.tilt=bi(f?-d.y*f/4.5:-d.x/4.5,-1,1)}),window.addEventListener("resize",n0),document.addEventListener("visibilitychange",()=>{document.hidden?(at.suspend(),Wt()):(at.resume(),Xc=performance.now())}),window.addEventListener("pagehide",Wt),window.onAndroidBack=()=>Gp()}function Gp(){return ue("bigmap").classList.contains("hidden")?ue("popup").classList.contains("hidden")?ue("modal").classList.contains("hidden")?Ft==="drive"?(Va("settings"),!0):(Wt(),!1):(Ya(),!0):(Id(),!0):(ue("bigmap").classList.add("hidden"),!0)}function Wc(s){Ie.gear=s,document.querySelectorAll("#gearsel button").forEach(e=>e.classList.toggle("on",e.dataset.g===s)),at.beep(s==="R"?500:700,.05,"square",.06)}var Xr=0,Vr=0;function Vp(){Z.engineOn||Xr>0||(at.init(),Xr=1.1,ue("enginebtn").classList.add("starting"),at.starter())}function Pd(s){let e=(i,r,a,o)=>i+bi(r-i,-o*s,a*s),t=Ft==="drive";Xr>0&&(Xr-=s,Xr<=0&&(Z.engineOn=!0,ue("enginebtn").classList.add("hidden"),ue("enginebtn").classList.remove("starting"))),yn.throttle=e(yn.throttle,t&&Ie.gas?1:0,2.5,6),yn.brake=e(yn.brake,t&&Ie.brake?1:0,6,8),yn.gear=Y.settings.gearbox==="auto"?"auto":Ie.gear,yn.handbrake=Ie.hand,t&&Ie.gas&&!Z.engineOn&&Xr<=0&&!Pd.warned&&(Un("Ligue o motor primeiro"),Pd.warned=!0),Ie.wheelHeld||(Ie.wheel*=Math.max(0,1-s*7));let n=0;if(Y.settings.steer==="tilt"?(n=Math.abs(Ie.tilt)<.06?0:Ie.tilt,Ie.wheel=-n*150):Y.settings.steer==="wheel"&&(n=-Ie.wheel/150),n+=(Ie.left?1:0)-(Ie.right?1:0),n=t?bi(n,-1,1):0,yn.steer=Y.settings.steer==="wheel"&&Ie.wheelHeld?n:e(yn.steer,n,2.4,4),Math.abs(yn.steer)<.01&&n===0&&(yn.steer=0),ue("wheel").style.transform=`rotate(${(-yn.steer*150).toFixed(1)}deg)`,(Ie.blink===-1||Ie.blink===1)&&(yn.steer*-Ie.blink>.3?Ie.blinkArm=!0:Ie.blinkArm&&Math.abs(yn.steer)<.06&&(Ie.blink=0,Ie.blinkArm=!1)),Ie.blink){let i=Vr%.8<.4;Vr+=s;let r=Vr%.8<.4;r!==i&&at.beep(r?1300:900,.025,"square",.05),Z.setBlink(Ie.blink,r),ue("blinkL").classList.toggle("on",r&&(Ie.blink===-1||Ie.blink===2)),ue("blinkR").classList.toggle("on",r&&(Ie.blink===1||Ie.blink===2)),ue("ic-bl").classList.toggle("on",r&&(Ie.blink===-1||Ie.blink===2)),ue("ic-br").classList.toggle("on",r&&(Ie.blink===1||Ie.blink===2)),ue("ic-haz").classList.toggle("on",Ie.blink===2)}else if(Vr!==0){Vr=0,Z.setBlink(0,!1);for(let i of["blinkL","blinkR","ic-bl","ic-br","ic-haz"])ue(i).classList.remove("on")}}function $p(){Ze.mode=(Ze.mode+1)%3,Y.settings.camera=Ze.mode,Un(["C\xE2mera: Persegui\xE7\xE3o","C\xE2mera: A\xE9rea","C\xE2mera: Cabine"][Ze.mode],1200)}var wd={x:0,z:0},ja={x:0,z:0};function zd(s,e=!1){Math.hypot(Ze.pos.x-Z.x,Ze.pos.z-Z.z)>150&&(e=!0);let t=Z.model;Ze.orbitT>0?Ze.orbitT-=s:Ze.orbit*=Math.max(0,1-s*2.5);let n=Z.h;Z.v<-.5&&Ze.mode!==2&&(n=Z.h);let i=e?1:1-Math.exp(-s*(Ze.mode===2?12:2.6)),r=n+Ze.orbit-Ze.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),Ze.yaw+=r*i;let a=Math.sin(Z.h),o=Math.cos(Z.h);if(Ze.mode===2){let c=Z.x+a*(t.zf-.7)-Math.cos(Z.h)*.45,l=Z.z+o*(t.zf-.7)+Math.sin(Z.h)*.45;Dt.position.set(c,Z.y+(Z.def.id==="urbano"?2.3:2.75),l);let h=Math.sin(Ze.yaw),d=Math.cos(Ze.yaw);Dt.lookAt(c+h*20,Z.y+2+Math.sin(Z.pitch)*20,l+d*20),Dt.fov=70}else{let c=Z.trainLength,l=t.zf-t.rearEnd,h=(Ze.mode===0?3.5+l:12+l*1.2)+c*(Ze.mode===0?.75:1.1),d=(Ze.mode===0?2.2+l*.3:9+l*.7)+c*(Ze.mode===0?.18:.4),u=Z.x+a*t.wb*.5-(Z.trailer?Math.sin(Z.th)*c*.25:0),f=Z.z+o*t.wb*.5-(Z.trailer?Math.cos(Z.th)*c*.25:0),g=Math.sin(Ze.yaw),b=Math.cos(Ze.yaw);for(let _=0;_<6&&(wd.x=u-g*h,wd.z=f-b*h,!(bt.resolveCircle(wd,.6,ja,!0)<=0||d>30));_++)h*=.8;let p=u-g*h,m=f-b*h,v=e?1:1-Math.exp(-s*8);Ze.pos.x+=(p-Ze.pos.x)*v,Ze.pos.z+=(m-Ze.pos.z)*v;let x=Z.y+d;Ze.pos.y+=(x-Ze.pos.y)*v,Dt.position.copy(Ze.pos),Z.shake&&(Dt.position.x+=(Math.random()-.5)*Z.shake,Dt.position.y+=(Math.random()-.5)*Z.shake),Dt.lookAt(u,Z.y+(Ze.mode===1?1.5:1.3),f),Dt.fov=58+Math.min(8,Z.speedKmh*.08)}Dt.updateProjectionMatrix(),wt.shadows&&(on.target.position.set(Z.x,0,Z.z),on.position.set(Z.x+150,170,Z.z+95)),$n.position.copy(Dt.position),xi&&(xi.position.y=-Dt.position.y-4)}var St=null;function s1(){let s=()=>new Path2D;St={blocks:{},lots:s(),roads:s(),hw:s(),dirt:s(),river:s(),fields:s(),hills:s()};let e={downtown:"#8b95a3",residential:"#a8a294",town:"#b4ab98",park:"#4f8a3a",industrial:"#8d8473",port:"#7b8790"};for(let n of Dn){for(let i=0;i<n.nx;i++)for(let r=0;r<n.nz;r++){let a=Mc(n,i,r);(St.blocks[e[a]]=St.blocks[e[a]]||s()).rect(n.x0+i*140+10,n.z0+r*140+10,120,120)}for(let i=0;i<=n.nx;i++)St.roads.moveTo(n.x0+i*140,n.z0),St.roads.lineTo(n.x0+i*140,as(n));for(let i=0;i<=n.nz;i++)St.roads.moveTo(n.x0,n.z0+i*140),St.roads.lineTo(Ni(n),n.z0+i*140)}for(let n of jn){let[i,r,a,o]=bt.depots[n.id].lot;St.lots.rect(i,r,a-i,o-r)}for(let n of bt.hws){let i=n.surface==="asphalt"?St.hw:St.dirt;i.moveTo(n.x[0],n.z[0]);for(let r=1;r<n.n;r+=2)i.lineTo(n.x[r],n.z[r]);i.lineTo(n.x[n.n-1],n.z[n.n-1])}let t=bt.river;St.river.moveTo(t.x[0],t.z[0]);for(let n=1;n<t.n;n++)St.river.lineTo(t.x[n],t.z[n]);for(let n of bt.fields)St.fields.rect(n.x0,n.z0,n.x1-n.x0,n.z1-n.z0);for(let n of bt.hills)St.hills.moveTo(n.x+n.r*.85,n.z),St.hills.arc(n.x,n.z,n.r*.85,0,Math.PI*2)}function Zp(s,e){s.fillStyle="#3d5a34",s.fillRect(Rt.x0-3e3,Rt.z0-3e3,12e3,12e3),s.fillStyle="#34502d",s.fill(St.hills),s.fillStyle="#9a9356",s.fill(St.fields),s.fillStyle="#2d6f93",s.fillRect(Rt.x0-3e3,1790,12e3,4e3),s.lineCap="round",s.lineJoin="round",s.strokeStyle="#2d6f93",s.lineWidth=Math.max(Xn,3/e),s.stroke(St.river);for(let t in St.blocks)s.fillStyle=t,s.fill(St.blocks[t]);s.fillStyle="#cfc9bd",s.fill(St.lots),s.strokeStyle="#26282c",s.lineWidth=Math.max(20,3/e),s.lineCap="square",s.stroke(St.roads),s.lineCap="round",s.strokeStyle="#1d1f22",s.lineWidth=Math.max(9*2+4,4.5/e),s.stroke(St.hw),s.strokeStyle="#4a4d52",s.lineWidth=Math.max(9*2,3/e),s.stroke(St.hw),s.strokeStyle="#8a6a44",s.lineWidth=Math.max(11,2.6/e),s.setLineDash([24,10]),s.stroke(St.dirt),s.setLineDash([])}function Jp(s,e,t,n,i){s.fillStyle=n,s.strokeStyle="#fff",s.lineWidth=i*.3,s.beginPath(),s.arc(e,t,i,0,7),s.fill(),s.stroke()}function r1(){let s=ue("minimap"),e=s.getContext("2d"),t=s.width,n=s.height,i=.75;e.setTransform(1,0,0,1,0,0),e.translate(t/2,n*.62),e.rotate(Math.PI+Z.h),e.scale(i,i),e.translate(-Z.x,-Z.z),Zp(e,i),ai&&Y.job&&(e.strokeStyle=Kr(),e.lineWidth=8/i,e.beginPath(),ai.path.forEach((a,o)=>o?e.lineTo(a.x,a.z):e.moveTo(a.x,a.z)),e.stroke());let r=jc();for(let a of jn){let o=bt.depots[a.id];Jp(e,o.zone.x,o.zone.z,r===o?Kr():a.id==="garagem"?"#2f6fde":"rgba(30,30,30,0.85)",(r===o?9:6)/i)}e.fillStyle="rgba(255,255,255,0.7)";for(let a of ks.cars)a.mode&&e.fillRect(a.x-2/i,a.z-2/i,4/i,4/i);e.setTransform(1,0,0,1,0,0),e.translate(t/2,n*.62),e.fillStyle="#3ee07a",e.strokeStyle="#0b1a10",e.lineWidth=3,e.beginPath(),e.moveTo(0,-14),e.lineTo(10,11),e.lineTo(0,5),e.lineTo(-10,11),e.closePath(),e.fill(),e.stroke(),e.setTransform(1,0,0,1,0,0)}function Ld(){let s=ue("bigmap"),e=ue("bigmapc");s.classList.remove("hidden");let t=Math.min(2,window.devicePixelRatio||1),n=window.innerWidth*.96,i=window.innerHeight*.92,r=Rt.x1-Rt.x0,a=Rt.z1-Rt.z0,o=Math.min(n/r,i/a);e.width=r*o*t,e.height=a*o*t,e.style.width=r*o+"px",e.style.height=a*o+"px";let c=e.getContext("2d"),l=o*t;c.setTransform(l,0,0,l,-Rt.x0*l,-Rt.z0*l),Zp(c,l),ai&&Y.job&&(c.strokeStyle=Kr(),c.lineWidth=5/l,c.beginPath(),ai.path.forEach((u,f)=>f?c.lineTo(u.x,u.z):c.moveTo(u.x,u.z)),c.stroke());let h=jc();c.textAlign="center";let d=(u,f,g,b,p="#fff")=>{c.font=`700 ${b/l}px sans-serif`,c.lineWidth=3/l,c.strokeStyle="rgba(0,0,0,0.85)",c.strokeText(u,f,g),c.fillStyle=p,c.fillText(u,f,g)};for(let u of Dn)d(u.name.toUpperCase(),(u.x0+Ni(u))/2,u.z0-40,15*t,"#ffe08a");for(let u of bt.hws){let f=u.n/2|0;d(u.id,u.x[f],u.z[f]-20,10*t,"#cfe8ff")}for(let u of jn){let f=bt.depots[u.id];Jp(c,f.zone.x,f.zone.z,h===f?Kr():u.id==="garagem"?"#2f6fde":"#222",6*t/l),d(u.name,f.zone.x,f.zone.z-14*t/l,10*t)}c.save(),c.translate(Z.x,Z.z),c.rotate(Math.PI+Z.h),c.scale(t/l,t/l),c.fillStyle="#3ee07a",c.strokeStyle="#000",c.lineWidth=2,c.beginPath(),c.moveTo(0,-12),c.lineTo(9,10),c.lineTo(0,5),c.lineTo(-9,10),c.closePath(),c.fill(),c.stroke(),c.restore()}var a1="jobs";function o1(){document.body.addEventListener("click",s=>{let e=s.target.closest("[data-act],[data-tab]");if(!e)return;if(at.init(),e.dataset.tab){Nn(e.dataset.tab);return}let t=e.dataset.act,n=e.dataset.arg;if(t==="jobs"||t==="garage"||t==="settings")Va(t);else if(t==="menu"||t==="pause")Va("settings");else if(t==="rename"){let i=prompt("Nome do motorista:",Y.name);i&&i.trim()&&(Y.name=i.trim().slice(0,18),Wt(),Ka())}else t==="map"?Ld():t==="gauge"?(Y.settings.gauge=n,Wt(),Nn("settings")):t==="accent"?(Y.settings.accent=n,Ed(),Wt(),Nn("settings")):t==="hudsize"?(Y.settings.hud=n,Ed(),Wt(),Nn("settings")):t==="gearbox"?(Y.settings.gearbox=n,ue("gearsel").classList.toggle("hidden",n==="auto"),Wt(),Nn("settings")):t==="timemode"?(Y.settings.time=n,Wt(),qc(Y.clock),Nn("settings")):t==="tomenu"?(Ya(),Wt(),Ka()):t==="camera"?$p():t==="close"?Ya():t==="accept"?jp(+n):t==="refresh"?(Bs=Od(),Nn("jobs")):t==="cancel"?(Yp(),Nn("jobs")):t==="buy"?d1(n):t==="use"?Qp(n):t==="popclose"?Id():t==="popjobs"?(Id(),Va("jobs")):t==="closemap"?ue("bigmap").classList.add("hidden"):t==="quality"?(Y.settings.quality=n,Wt(),Nn("settings"),Un("Reiniciando para aplicar\u2026"),setTimeout(()=>location.reload(),500)):t==="steermode"?(Y.settings.steer=n,Wp(),Wt(),Nn("settings")):t==="fps"?(Y.settings.fps=!Y.settings.fps,ue("fps").classList.toggle("hidden",!Y.settings.fps),Wt(),Nn("settings")):t==="reset"?confirm("Apagar todo o progresso?")&&(localStorage.removeItem(Ud),location.reload()):t==="rescue"&&(e0(),Ya())}),ue("mapwrap").addEventListener("click",Ld),ue("fps").classList.toggle("hidden",!Y.settings.fps),ue("tabbody").addEventListener("input",s=>{s.target.id==="vol"&&(Y.settings.volume=+s.target.value,at.setVolume(Y.settings.volume),Wt())}),Wp(),Ed(),Wc("D"),ue("gearsel").classList.toggle("hidden",Y.settings.gearbox==="auto"),ue("play").addEventListener("click",()=>{at.init(),ue("title").classList.add("hidden"),ue("hud").classList.remove("hidden"),Ft="drive",Z.engineOn||ue("enginebtn").classList.remove("hidden"),zd(0,!0),n0(),Dd=3;try{document.documentElement.requestFullscreen&&!window.AndroidBridge&&document.documentElement.requestFullscreen().catch(()=>{})}catch(s){}!Y.job&&Y.stats.deliveries===0&&setTimeout(()=>Va("jobs"),400)})}function Wp(){let s=ue("wheelwrap");s.classList.toggle("buttons",Y.settings.steer==="buttons"),s.classList.toggle("tilt",Y.settings.steer==="tilt")}function Ka(){Ft="title",Ze.tt=0,ue("hud").classList.add("hidden"),ue("title").classList.remove("hidden"),ue("pname").textContent=Y.name,ue("plvl").textContent=`N\xEDvel ${Y.level} \u2022 ${Y.xp}/${Ur(Y.level)} XP`,ue("tmoney").textContent=Tn(Y.money);let s=Z.def;ue("tiname").textContent=s.name,ue("tispecs").innerHTML=`<span>${s.hp} cv</span><span>${s.cap} t</span><span>${s.vmax} km/h</span><span>${s.rigid?"R\xEDgido":"Cavalo "+s.cfg}</span>`;let e=Y.job;ue("tjob").innerHTML=e?`${mn[e.cargo].icon} ${mn[e.cargo].name} \u2192 <b>${Ui[e.phase==="pickup"?e.from:e.to].name}</b>`:"Nenhum frete ativo",ue("tstats").innerHTML=`<div><b>${Y.stats.deliveries}</b><small>entregas</small></div><div><b>${Y.stats.km.toFixed(0)}</b><small>km</small></div><div><b>${Y.stats.tons.toFixed(0)}</b><small>toneladas</small></div><div><b>${Y.owned.length}</b><small>caminh\xF5es</small></div>`}function Va(s){Ft=Ft==="title"?"title":"menu",ue("modal").classList.remove("hidden"),Ie.gas=Ie.brake=Ie.left=Ie.right=!1,document.querySelectorAll(".pad").forEach(e=>e.classList.remove("on")),Nn(s)}function Ya(){ue("modal").classList.add("hidden"),Ft==="title"&&Ka(),Ft==="menu"&&(Ft="drive")}function jr(s,e=[]){ue("popcard").innerHTML=s,ue("popup").classList.remove("hidden"),Ft=Ft==="drive"?"menu":Ft,jr.queue=e}function Id(){ue("popup").classList.add("hidden"),ue("modal").classList.contains("hidden")&&(Ft="drive");let s=jr.queue||[];if(s.length){let e=s.shift();jr.queue=s,n1(e),jr.queue=s}}function Nn(s){a1=s,document.querySelectorAll(".tabs [data-tab]").forEach(t=>t.classList.toggle("on",t.dataset.tab===s));let e=ue("tabbody");s==="jobs"?e.innerHTML=l1():s==="garage"?e.innerHTML=h1():s==="profile"?e.innerHTML=u1():e.innerHTML=f1(),e.scrollTop=0}function c1(s,e){let t=mn[s.cargo],n=Fd(s),i=[t.fragile?'<span class="chip tag">Fr\xE1gil</span>':"",t.hazard?'<span class="chip tag">Perigosa</span>':"",t.trailer==="lowboy"?'<span class="chip tag">Indivis\xEDvel</span>':""].join("");return`<div class="card ${n?"locked":""}">
    <div class="ic">${t.icon}</div><h3>${t.name}</h3><div class="t">${t.t} toneladas</div>
    <div class="route">\u{1F4CD} ${Ui[s.from].name} \u2192 \u{1F3C1} ${Ui[s.to].name}</div>
    <div class="row"><span class="chip pay">${Tn(s.pay)}</span><span class="chip xp">+${s.xp} XP</span><span class="chip">${(s.dist/1e3).toFixed(1)} km</span><span class="chip">\u23F1 ${Math.ceil(s.time/60)} min</span>${i}</div>
    ${n?`<div class="row"><span class="chip warn">\u{1F512} ${n}</span></div>`:`<button class="btn" data-act="accept" data-arg="${e}" ${Y.job?"disabled":""}>Aceitar frete</button>`}
  </div>`}function l1(){let s="";if(Y.job){let e=Y.job,t=mn[e.cargo];s=`<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${t.icon}</div><h3>Frete ativo: ${t.name} (${t.t} t)</h3>
      <div class="route">${e.phase==="pickup"?"Coletar em":"Entregar em"} <b>${Ui[e.phase==="pickup"?e.from:e.to].name}</b> \u2022 Avaria ${e.damage.toFixed(0)}% \u2022 Pagamento ${Tn(e.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${e.phase==="deliver"?" (multa 25%)":""}</button></div>`}return`${s}<div class="tbar"><div class="grow">Caminh\xE3o atual: <b>${Z.def.name}</b> \u2014 at\xE9 <b>${Z.def.cap} t</b> \u2022 N\xEDvel ${Y.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">\u{1F504} Atualizar</button></div>
    <div class="grid">${Bs.map(c1).join("")}</div>`}function h1(){return`<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${Tn(Y.money)}</b> \u2022 A for\xE7a do caminh\xE3o define as cargas que ele consegue puxar.</div></div><div class="grid">`+Nr.map(t=>{let n=Y.owned.includes(t.id),i=Y.truck===t.id,r=t.level>Y.level,a;i?a='<button class="btn alt" disabled>Em uso</button>':n?a=`<button class="btn" data-act="use" data-arg="${t.id}">Usar</button>`:r?a=`<span class="chip warn">\u{1F512} N\xEDvel ${t.level}</span>`:a=`<button class="btn" data-act="buy" data-arg="${t.id}" ${Y.money<t.price?"disabled":""}>Comprar ${Tn(t.price)}</button>`;let o="#"+new he(t.color).getHexString();return`<div class="card ${r&&!n?"locked":""}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${o}, #1b2230)">${t.rigid?"\u{1F69A}":"\u{1F69B}"}</div>
        <h3>${t.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${t.desc}</div>
        <div class="stat"><span>Pot\xEAncia</span><b>${t.hp} cv</b></div><div class="meter"><i style="width:${t.hp/750*100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${t.cap} t</b></div><div class="meter"><i style="width:${t.cap/90*100}%"></i></div>
        <div class="stat"><span>Velocidade m\xE1x.</span><b>${t.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${t.rigid?"R\xEDgido (ba\xFA)":`Cavalo mec\xE2nico ${t.cfg}`}</b></div>
        ${a}</div>`}).join("")+"</div>"}function d1(s){let e=La[s];!e||Y.owned.includes(s)||Y.money<e.price||e.level>Y.level||(Y.money-=e.price,Y.owned.push(s),at.beep(784,.1),at.beep(1046,.15),Un(`Voc\xEA comprou o <b>${e.name}</b>!`),Qp(s))}function Qp(s){let e=La[s];if(Y.owned.includes(s)){if(Y.job&&Y.job.phase==="deliver"){Un("Conclua ou cancele o frete antes de trocar");return}Y.truck=s,Z.setTruck(e),Y.job&&Fd(Y.job,e)&&Yp(),Wt(),Nn("garage"),Ft==="title"&&Ka()}}function u1(){let s=Y.stats,e=Ur(Y.level),t=Ia.filter(n=>n.lvl>Y.level).slice(0,4);return`<div class="grid">
    <div class="card"><h3>\u2B50 N\xEDvel ${Y.level}${Y.level>=30?" (m\xE1ximo)":""}</h3><div class="meter" style="margin-top:8px"><i style="width:${Y.xp/e*100}%"></i></div>
      <div class="stat"><span>Experi\xEAncia</span><b>${Y.xp} / ${e} XP</b></div><div class="stat"><span>Saldo</span><b>${Tn(Y.money)}</b></div>
      <div class="stat"><span>Caminh\xF5es</span><b>${Y.owned.length} / ${Nr.length}</b></div></div>
    <div class="card"><h3>\u{1F4CA} Estat\xEDsticas</h3>
      <div class="stat"><span>Entregas</span><b>${s.deliveries}</b></div><div class="stat"><span>Dist\xE2ncia</span><b>${s.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${s.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${Tn(s.earned)}</b></div>
      <div class="stat"><span>Colis\xF5es</span><b>${s.crashes}</b></div></div>
    <div class="card"><h3>\u{1F513} Pr\xF3ximas cargas</h3>${t.map(n=>`<div class="stat"><span>${n.icon} ${n.name} (${n.t} t)</span><b>N\xEDvel ${n.lvl}</b></div>`).join("")||'<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`}function f1(){let s=(e,t,n)=>`<div class="seg">${n.map(([i,r])=>`<button data-act="${e}" data-arg="${i}" class="${t===i?"on":""}">${r}</button>`).join("")}</div>`;return`<div class="set"><div><b>Qualidade gr\xE1fica</b><br><small style="opacity:.7">Atual: ${gi==="low"?"Leve":gi==="medium"?"M\xE9dio":"Ultra"} \u2022 resolu\xE7\xE3o din\xE2mica ativa</small></div>
      ${s("quality",Y.settings.quality,[["auto","Auto"],["low","Leve"],["medium","M\xE9dio"],["high","Ultra"]])}</div>
    <div class="set"><div><b>Dire\xE7\xE3o</b><br><small style="opacity:.7">Volante, setas ou inclina\xE7\xE3o do celular</small></div>
      ${s("steermode",Y.settings.steer,[["wheel","Volante"],["buttons","Setas"],["tilt","Inclina\xE7\xE3o"]])}</div>
    <div class="set"><div><b>C\xE2mbio</b><br><small style="opacity:.7">Manual D/N/R ou autom\xE1tico (segurar freio parado = r\xE9)</small></div>
      ${s("gearbox",Y.settings.gearbox,[["manual","D / N / R"],["auto","Autom\xE1tico"]])}</div>
    <div class="set"><div><b>Hor\xE1rio</b><br><small style="opacity:.7">Ciclo de dia e noite com far\xF3is e ilumina\xE7\xE3o urbana</small></div>
      ${s("timemode",Y.settings.time,[["cycle","Ciclo"],["day","Dia"],["dusk","Entardecer"],["night","Noite"]])}</div>
    <div class="set"><div><b>Veloc\xEDmetro</b><br><small style="opacity:.7">Estilo dos mostradores do painel</small></div>
      ${s("gauge",Y.settings.gauge,[["analog","Anal\xF3gico"],["digital","Digital"],["sport","Esportivo"],["classic","Cl\xE1ssico"]])}</div>
    <div class="set"><div><b>Cor do painel</b><br><small style="opacity:.7">Cor de destaque da interface</small></div>
      ${s("accent",Y.settings.accent,[["amber","\xC2mbar"],["blue","Azul"],["green","Verde"],["red","Vermelho"],["purple","Roxo"]])}</div>
    <div class="set"><div><b>Tamanho dos controles</b></div>
      ${s("hudsize",Y.settings.hud,[["small","Pequeno"],["normal","Normal"],["large","Grande"]])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${Y.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${s("fps",Y.settings.fps?1:0,[[1,"Sim"],[0,"N\xE3o"]])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminh\xE3o de volta para a rua mais pr\xF3xima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">Z/X pisca-pisca \u2022 WASD/setas \u2022 Espa\xE7o freio \u2022 E motor \u2022 R r\xE9 \u2022 N neutro \u2022 P freio de m\xE3o \u2022 L far\xF3is \u2022 H buzina \u2022 C c\xE2mera \u2022 M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao menu</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`}function e0(){let s=bt.hw(Z.x,Z.z);if(s&&!bt.inArea(Z.x,Z.z,0)){let e=s.o;Z.place(s.x-e.dz[s.i]*3.5,s.z+e.dx[s.i]*3.5,Math.atan2(e.dx[s.i],e.dz[s.i]))}else{let e={x:Z.x,z:Z.z};for(let t=0;t<40&&!(bt.resolveCircle(e,2.5,ja)<=0);t++)e.x+=ja.x*1.2+(Math.random()-.5),e.z+=ja.z*1.2+(Math.random()-.5);Z.place(e.x,e.z,Z.h)}zd(0,!0)}var qp={amber:"#f5a623",blue:"#2f8cff",green:"#22b573",red:"#e3243b",purple:"#9b5cff"},Kr=()=>qp[Y.settings.accent]||qp.amber;function Ed(){let s=Kr();document.documentElement.style.setProperty("--red",s),document.documentElement.style.setProperty("--red2",s),document.documentElement.style.setProperty("--hud",{small:.82,normal:1,large:1.18}[Y.settings.hud]||1)}function Un(s,e=2600){let t=document.createElement("div");for(t.innerHTML=s,ue("toast").appendChild(t);ue("toast").children.length>3;)ue("toast").firstChild.remove();setTimeout(()=>t.remove(),e)}var Td=0;function Xp(s,e,t,n,i,r,a,o){let c=ue(s),l=c.getContext("2d"),h=c.width,d=h/2,u=h*.46,f=Y.settings.gauge,g=Kr();l.clearRect(0,0,h,h);let b=Math.PI*.75,p=Math.PI*2.25,m=w=>b+(p-b)*bi(w/t,0,1);if(l.textAlign="center",l.textBaseline="middle",f==="digital"){l.fillStyle="rgba(6,10,16,0.88)",l.beginPath(),l.arc(d,d,u,0,7),l.fill(),l.lineWidth=3,l.strokeStyle=g,l.stroke();let w=24,R=bi(e/t,0,1);for(let E=0;E<w;E++){let B=b+(p-b)*(E+.5)/w;l.strokeStyle=E/w<R?o&&E/w*t>=o?"#ff3b4e":g:"rgba(255,255,255,0.1)",l.lineWidth=h*.05,l.beginPath(),l.arc(d,d,u*.8,B-.05,B+.05),l.stroke()}l.fillStyle="#e8fff8",l.font=`700 ${h*.24}px monospace`,l.fillText(r,d,d),l.font=`600 ${h*.06}px sans-serif`,l.fillStyle=g,l.fillText(a,d,d+h*.17);return}if(f==="sport"){l.fillStyle="rgba(10,12,16,0.85)",l.beginPath(),l.arc(d,d,u,0,7),l.fill(),l.lineCap="round",l.lineWidth=h*.09,l.strokeStyle="rgba(255,255,255,0.08)",l.beginPath(),l.arc(d,d,u*.78,b,p),l.stroke();let w=l.createLinearGradient(0,h,h,0);w.addColorStop(0,g),w.addColorStop(1,"#ff3b4e"),l.strokeStyle=w,l.beginPath(),l.arc(d,d,u*.78,b,m(e)),l.stroke(),l.lineCap="butt",l.fillStyle="#fff",l.font=`italic 900 ${h*.22}px sans-serif`,l.fillText(r,d,d-h*.02),l.font=`italic 700 ${h*.06}px sans-serif`,l.fillStyle="#9aa7b4",l.fillText(a,d,d+h*.15);return}let v=f==="classic";l.beginPath(),l.arc(d,d,u,0,7);let x=l.createRadialGradient(d,d,u*.2,d,d,u);v?(x.addColorStop(0,"#f4efe2"),x.addColorStop(1,"#d9d0bb")):(x.addColorStop(0,"rgba(30,34,40,0.95)"),x.addColorStop(1,"rgba(8,10,14,0.92)")),l.fillStyle=x,l.fill(),l.lineWidth=h*.035,l.strokeStyle=v?"#b8bcc0":g,l.stroke(),o&&(l.beginPath(),l.arc(d,d,u*.86,m(o),p),l.lineWidth=h*.03,l.strokeStyle="rgba(227,36,59,.85)",l.stroke());let _=v?"#1b1b1b":"#fff";l.fillStyle=_,l.strokeStyle=_,l.font=`${v?"":"italic "}800 ${h*.07}px ${v?"serif":"sans-serif"}`;for(let w=0;w<=t;w+=n/2){let R=m(w),E=w%n===0;l.lineWidth=E?3:1.5,l.beginPath(),l.moveTo(d+Math.cos(R)*u*.9,d+Math.sin(R)*u*.9),l.lineTo(d+Math.cos(R)*u*(E?.76:.82),d+Math.sin(R)*u*(E?.76:.82)),l.stroke(),E&&l.fillText(String(i(w)),d+Math.cos(R)*u*.6,d+Math.sin(R)*u*.6)}let S=m(e);l.strokeStyle=v?"#c0392b":g,l.lineWidth=h*.025,l.lineCap="round",l.beginPath(),l.moveTo(d-Math.cos(S)*u*.1,d-Math.sin(S)*u*.1),l.lineTo(d+Math.cos(S)*u*.86,d+Math.sin(S)*u*.86),l.stroke(),l.lineCap="butt",l.beginPath(),l.arc(d,d,u*.3,0,7),l.fillStyle=v?"#2b2b2b":"#0b0d11",l.fill(),l.fillStyle="#fff",l.font=`italic 900 ${h*.15}px sans-serif`,l.fillText(r,d,d-h*.01),l.font=`italic 700 ${h*.055}px sans-serif`,l.fillStyle=v?"#555":"#9aa7b4",l.fillText(a,d,d+h*.1+(v?h*.12:0))}function p1(s){Td-=s;let e=Z.speedKmh;Xp("spdg",e,120,20,o=>o,String(Math.round(e)),"km/h",100);let t=Z.rpm*2500;if(Xp("rpmg",t/100,25,5,o=>o,Z.engineOn?Z.gear||"N":"OFF","x100 rpm",21),Td>0)return;Td=.2,ue("lvl").textContent="Nv "+Y.level,ue("money").textContent=Tn(Y.money);let n=Ur(Y.level);ue("xpbar").style.width=(Y.level>=30?100:Y.xp/n*100)+"%",ue("ic-load").textContent=`${(Z.mass/1e3).toFixed(1)} t \u2022 ${Ds[Z.surface]?Ds[Z.surface].name:""}`;let i=ue("physwarn"),r="";Z.rolled>0?r='<b class="r">TOMBOU</b>':(Z.tipRisk>.75||Z.tip>.05)&&Z.speedKmh>12?r='<b class="r">\u26A0 RISCO DE TOMBAMENTO \u2014 reduza!</b>':Z.slip>.08?r='<b class="o">DERRAPANDO \u2014 curva r\xE1pida demais</b>':Z.wheelspin>.25&&(r='<b class="o">PATINANDO \u2014 pouca tra\xE7\xE3o no piso</b>'),i.innerHTML=r,i.classList.toggle("hidden",!r),at.screech(Z.slip>.08?Math.min(1,Z.slip*2):0),ue("ic-light").classList.toggle("on",Z.lightsOn),ue("lightsbtn").classList.toggle("on",Z.lightsOn),ue("ic-hand").classList.toggle("on",Ie.hand);let a=Y.job;if(a){let o=mn[a.cargo],c=ai?ai.len:0;ue("jobtitle").textContent=`${o.icon} ${o.name} \u2022 ${o.t} t`;let l=Ui[a.phase==="pickup"?a.from:a.to].name,h="";if(a.phase==="deliver"){let d=Math.abs(a.tLeft),u=Math.floor(d/60),f=Math.floor(d%60);h=` \u2022 <span class="${a.tLeft<0?"late":""}">\u23F1 ${a.tLeft<0?"-":""}${u}:${String(f).padStart(2,"0")}</span>`}ue("jobsub").innerHTML=`${a.phase==="pickup"?"Coletar":"Entregar"}: <b>${l}</b> \u2022 ${(c/1e3).toFixed(1)} km${h}`,ue("dist").textContent=c>1e3?(c/1e3).toFixed(1)+" km":Math.round(c)+" m",ue("ic-dmg").classList.toggle("hidden",a.phase!=="deliver"),ue("dmg").textContent=a.damage.toFixed(0)+"%"}else ue("jobtitle").textContent="Sem frete ativo",ue("jobsub").innerHTML="Toque em \u{1F4CB} para escolher uma carga",ue("dist").textContent="",ue("ic-dmg").classList.add("hidden")}var Dd=0,Xc=0,Yr=0,Hc=0,Gc=0,Ad=0,Gr=0;function t0(s){if(requestAnimationFrame(t0),document.hidden)return;let e=(s-Xc)/1e3;if(Xc=s,!(e>0))return;if(e=Math.min(e,.05),Yr+=e,Hc++,Gc+=e,Gc>=1.5){let n=Hc/Gc;b1(n),Y.settings.fps&&(ue("fps").textContent=`${n.toFixed(0)} FPS \u2022 ${gi} \u2022 ${zi.toFixed(2)}x \u2022 ${qt.info.render.calls} dc`),Hc=0,Gc=0}if(Pd(e),Ft==="title"){Gr-=e,Gr<=0&&(Gr=.5,qc(Y.clock)),ks.obstacles(Sd),ks.update(e,Z,Z._cs||[]),bt.update(e,Yr),Xy(e),at.engine(0,0,!1),qt.render(Nt,Dt);return}if(Y.settings.time==="cycle"&&Ft==="drive"&&(Y.clock=(Y.clock+e/50)%24),Gr-=e,Gr<=0&&(Gr=.5,qc(Y.clock)),Ft==="drive"){ks.obstacles(Sd);let n=2;for(let r=0;r<n;r++)Z.update(e/n,yn,bt,Sd);Z.lastImpact>0&&m1(Z.lastImpact),Y.stats.km+=Math.abs(Z.v)*e/1e3;let i=Z._cs||[];ks.update(e,Z,i),Ft==="drive"&&Vc(e)}bt.update(e,Yr),g1(e),zd(e),at.engine(Z.rpm,yn.throttle,Z.engineOn&&Ft==="drive"),p1(e),Hc&1||r1(),Ad+=e,Ad>8&&(Ad=0,Wt()),qt.render(Nt,Dt),Dd>0&&--Dd===0&&Nt.traverse(n=>{n.material&&[].concat(n.material).forEach(i=>{i.needsUpdate=!0})})}function m1(s){if(Y.stats.crashes++,at.crash(s),navigator.vibrate)try{navigator.vibrate(Math.min(120,s*4))}catch(e){}if(Y.job&&Y.job.phase==="deliver"){let e=mn[Y.job.cargo],t=Math.min(30,s*(e.fragile?.55:.3));Y.job.damage=Math.min(100,Y.job.damage+t),Un(`\u{1F4A5} Batida! Carga avariada +${t.toFixed(0)}%`,1800)}}function g1(s){let e=jc();if(!e){cn.visible=!1,oi.visible=!1;return}Xa-=s,Xa<=0&&(ai=Md(Z.x,Z.z,e),Xa=.5),cn.visible=Math.hypot(e.zone.x-Z.x,e.zone.z-Z.z)<600,cn.position.set(e.zone.x,0,e.zone.z),cn.zone.scale.set(e.zone.w,e.zone.d,1);let t=Kp(e);cn.zone.material.color.setHex(t?4120698:16761856),cn.cone.position.y=7+Math.sin(Yr*3)*.8,cn.cone.rotation.y=Yr*1.5;let n=null;if(ai)for(let i=1;i<ai.path.length;i++){let r=ai.path[i];if(Math.hypot(r.x-Z.x,r.z-Z.z)>22||i===ai.path.length-1){n=r;break}}if(n&&Ze.mode!==2){oi.visible=!0;let i=Math.sin(Z.h),r=Math.cos(Z.h);oi.position.set(Z.x+i*Z.model.zf*.5,(Z.def.id==="urbano"?4.2:5.4)+Math.sin(Yr*4)*.12,Z.z+r*Z.model.zf*.5),oi.rotation.y=Math.atan2(n.x-Z.x,n.z-Z.z)}else oi.visible=!1}function b1(s){let e=window.devicePixelRatio||1,t=Math.min(e,wt.pr),n=zi;s<27?n=Math.max(wt.minPr*Math.min(1,e),zi*.88):s>52&&(n=Math.min(t,zi*1.06)),Math.abs(n-zi)>.01&&(zi=n,qt.setPixelRatio(zi),qt.setSize(window.innerWidth,window.innerHeight,!1))}function n0(){qt&&(qt.setSize(window.innerWidth,window.innerHeight,!1),Dt.aspect=window.innerWidth/window.innerHeight,Dt.updateProjectionMatrix())}window.addEventListener("error",s=>{let e=ue("loadmsg");e&&Ft==="loading"&&(e.textContent="Erro: "+s.message)});window.__game={makeCam:(s,e,t,n,i,r)=>{let a=new Ht(55,innerWidth/innerHeight,1,wt.far);return a.position.set(s,e,t),a.lookAt(n,i,r),$n.position.copy(a.position),xi.position.y=-e-4,a},TRUCK:La,CARGO:mn,get scene(){return Nt},get sun(){return on},get renderer(){return qt},S:Y,get rig(){return Z},get state(){return Ft},ctl:Ie,acceptJob:s=>jp(s),get jobs(){return Bs},world:()=>bt,cam:Ze};zy().catch(s=>{ue("loadmsg").textContent="Erro ao iniciar: "+s.message,console.error(s)});})();
