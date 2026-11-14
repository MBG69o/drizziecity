(()=>{var rf=Object.defineProperty,of=Object.defineProperties;var af=Object.getOwnPropertyDescriptors;var dh=Object.getOwnPropertySymbols;var lf=Object.prototype.hasOwnProperty,cf=Object.prototype.propertyIsEnumerable;var fh=(i,t,e)=>t in i?rf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,cn=(i,t)=>{for(var e in t||(t={}))lf.call(t,e)&&fh(i,e,t[e]);if(dh)for(var e of dh(t))cf.call(t,e)&&fh(i,e,t[e]);return i},xi=(i,t)=>of(i,af(t));var Ec="162";var hf=0,ph=1,uf=2;var ha=1,Tc=2,ri=3,Ci=0,Ve=1,Me=2,Ti=0,Rs=1,Rn=2,mh=3,gh=4,df=5,qi=100,ff=101,pf=102,xh=103,_h=104,mf=200,gf=201,xf=202,_f=203,Il=204,Dl=205,vf=206,yf=207,Mf=208,bf=209,Sf=210,wf=211,Ef=212,Tf=213,Af=214,Rf=0,Cf=1,Pf=2,Ao=3,Lf=4,If=5,Df=6,Uf=7,ua=0,Nf=1,zf=2,Ai=0,Ff=1,Of=2,Bf=3,Ac=4,kf=5,Hf=6,Gf=7;var Zu=300,Ls=301,Is=302,Ul=303,Nl=304,da=306,yr=1e3,yn=1001,zl=1002,$e=1003,vh=1004;var or=1005;var tn=1006,Ya=1007;var ai=1008;var Ri=1009,Vf=1010,Wf=1011,Rc=1012,Ju=1013,Ei=1014,Xn=1015,Mr=1016,Ku=1017,ju=1018,Zi=1020,Xf=1021,Nn=1023,qf=1024,$f=1025,Ji=1026,Ds=1027,Qu=1028,td=1029,Yf=1030,ed=1031,nd=1033,Za=33776,Ja=33777,Ka=33778,ja=33779,yh=35840,Mh=35841,bh=35842,Sh=35843,id=36196,wh=37492,Eh=37496,Th=37808,Ah=37809,Rh=37810,Ch=37811,Ph=37812,Lh=37813,Ih=37814,Dh=37815,Uh=37816,Nh=37817,zh=37818,Fh=37819,Oh=37820,Bh=37821,Qa=36492,kh=36494,Hh=36495,Zf=36283,Gh=36284,Vh=36285,Wh=36286;var Ro=2300,Co=2301,tl=2302,Xh=2400,qh=2401,$h=2402;var Jf=3200,Kf=3201,fa=0,jf=1,wi="",hn="srgb",Di="srgb-linear",Cc="display-p3",pa="display-p3-linear",Po="linear",me="srgb",Lo="rec709",Io="p3";var ss=7680;var Yh=519,Qf=512,tp=513,ep=514,sd=515,np=516,ip=517,sp=518,rp=519,Fl=35044;var Zh="300 es",Ol=1035,li=2e3,Do=2001,Pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var el=Math.PI/180,Uo=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function op(i,t){return(i%t+t)%t}function nl(i,t,e){return(1-e)*i+e*t}function Jh(i){return(i&i-1)===0&&i!==0}function Bl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],f=s[3],m=s[6],y=s[1],_=s[4],M=s[7],R=s[2],T=s[5],w=s[8];return r[0]=a*x+o*y+c*R,r[3]=a*f+o*_+c*T,r[6]=a*m+o*M+c*w,r[1]=l*x+h*y+u*R,r[4]=l*f+h*_+u*T,r[7]=l*m+h*M+u*w,r[2]=d*x+p*y+g*R,r[5]=d*f+p*_+g*T,r[8]=d*m+p*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},il=new Ft;function rd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function No(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){let i=No("canvas");return i.style.display="block",i}var Kh={};function od(i){i in Kh||(Kh[i]=!0,console.warn(i))}var jh=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[Di]:{transfer:Po,primaries:Lo,toReference:i=>i,fromReference:i=>i},[hn]:{transfer:me,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pa]:{transfer:Po,primaries:Io,toReference:i=>i.applyMatrix3(Qh),fromReference:i=>i.applyMatrix3(jh)},[Cc]:{transfer:me,primaries:Io,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qh),fromReference:i=>i.applyMatrix3(jh).convertLinearToSRGB()}},lp=new Set([Di,pa]),ce={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Zr[t].toReference,s=Zr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zr[i].primaries},getTransfer:function(i){return i===wi?Po:Zr[i].transfer}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,zo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=No("canvas")),rs.width=t.width,rs.height=t.height;let n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=No("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,Fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rl(s[a].image)):r.push(rl(s[a]))}else r=rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hp=0,dn=class i extends Pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yn,s=yn,r=tn,a=ai,o=Nn,c=Ri,l=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ci(),this.name="",this.source=new Fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Zu;dn.DEFAULT_ANISOTROPY=1;var Ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(p+1)/2,R=(m+1)/2,T=(h+d)/4,w=(u+x)/4,E=(g+f)/4;return _>M&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=w/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=E/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends kl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Oo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hl=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let f=1-o,m=c*d+l*p+h*g+u*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,m*y);f=Math.sin(f*T)/R,o=Math.sin(o*T)/R}let M=o*y;if(c=c*f+d*M,l=l*f+p*M,h=h*f+g*M,u=u*f+x*M,f===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new I,tu=new $n,ui=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Kr.subVectors(this.max,ar),os.subVectors(t.a,ar),as.subVectors(t.b,ar),ls.subVectors(t.c,ar),_i.subVectors(as,os),vi.subVectors(ls,as),Bi.subVectors(os,ls);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Bi.y,Bi.x,0];return!al(e,os,as,ls,Kr)||(e=[1,0,0,0,1,0,0,0,1],!al(e,os,as,ls,Kr))?!1:(jr.crossVectors(_i,vi),e=[jr.x,jr.y,jr.z],al(e,os,as,ls,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,Jr=new ui,os=new I,as=new I,ls=new I,_i=new I,vi=new I,Bi=new I,ar=new I,Kr=new I,jr=new I,ki=new I;function al(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var up=new ui,lr=new I,ll=new I,Li=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(ll)),this.expandByPoint(lr.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new I,cl=new I,Qr=new I,yi=new I,hl=new I,to=new I,ul=new I,Bo=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cl.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(cl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qr),o=yi.dot(this.direction),c=-yi.dot(Qr),l=yi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cl).addScaledVector(Qr,d),p}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){hl.subVectors(e,t),to.subVectors(n,t),ul.crossVectors(hl,to);let a=this.direction.dot(ul),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,t);let c=o*this.direction.dot(to.crossVectors(yi,to));if(c<0)return null;let l=o*this.direction.dot(hl.cross(yi));if(l<0||c+l>a)return null;let h=-o*yi.dot(ul);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,x,f)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,x,f){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(n,_n),Mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(n,_n)),Mi.normalize(),eo.crossVectors(_n,Mi),s[0]=Mi.x,s[4]=eo.x,s[8]=_n.x,s[1]=Mi.y,s[5]=eo.y,s[9]=_n.y,s[2]=Mi.z,s[6]=eo.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],y=n[3],_=n[7],M=n[11],R=n[15],T=s[0],w=s[4],E=s[8],P=s[12],v=s[1],b=s[5],D=s[9],O=s[13],L=s[2],B=s[6],F=s[10],Z=s[14],q=s[3],J=s[7],et=s[11],st=s[15];return r[0]=a*T+o*v+c*L+l*q,r[4]=a*w+o*b+c*B+l*J,r[8]=a*E+o*D+c*F+l*et,r[12]=a*P+o*O+c*Z+l*st,r[1]=h*T+u*v+d*L+p*q,r[5]=h*w+u*b+d*B+p*J,r[9]=h*E+u*D+d*F+p*et,r[13]=h*P+u*O+d*Z+p*st,r[2]=g*T+x*v+f*L+m*q,r[6]=g*w+x*b+f*B+m*J,r[10]=g*E+x*D+f*F+m*et,r[14]=g*P+x*O+f*Z+m*st,r[3]=y*T+_*v+M*L+R*q,r[7]=y*w+_*b+M*B+R*J,r[11]=y*E+_*D+M*F+R*et,r[15]=y*P+_*O+M*Z+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+f*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+m*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],y=u*f*l-x*d*l+x*c*p-o*f*p-u*c*m+o*d*m,_=g*d*l-h*f*l-g*c*p+a*f*p+h*c*m-a*d*m,M=h*x*l-g*u*l+g*o*p-a*x*p-h*o*m+a*u*m,R=g*u*c-h*x*c-g*o*d+a*x*d+h*o*f-a*u*f,T=e*y+n*_+s*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=y*w,t[1]=(x*d*r-u*f*r-x*s*p+n*f*p+u*s*m-n*d*m)*w,t[2]=(o*f*r-x*c*r+x*s*l-n*f*l-o*s*m+n*c*m)*w,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*w,t[4]=_*w,t[5]=(h*f*r-g*d*r+g*s*p-e*f*p-h*s*m+e*d*m)*w,t[6]=(g*c*r-a*f*r-g*s*l+e*f*l+a*s*m-e*c*m)*w,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*w,t[8]=M*w,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*m-e*u*m)*w,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*m+e*o*m)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*w,t[12]=R*w,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*f+e*u*f)*w,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*f-e*o*f)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,x=a*h,f=a*u,m=o*u,y=c*l,_=c*h,M=c*u,R=n.x,T=n.y,w=n.z;return s[0]=(1-(x+m))*R,s[1]=(p+M)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(d+m))*T,s[6]=(f+y)*T,s[7]=0,s[8]=(g+_)*w,s[9]=(f-y)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let l=1/r,h=1/a,u=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=li){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===li)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Do)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=li){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,g,x;if(o===li)g=(a+r)*u,x=-2*u;else if(o===Do)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new I,Dn=new he,dp=new I(0,0,0),fp=new I(1,1,1),Mi=new I,eo=new I,_n=new I,eu=new he,nu=new $n,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pp=0,iu=new I,hs=new $n,ni=new he,no=new I,cr=new I,mp=new I,gp=new $n,su=new I(1,0,0),ru=new I(0,1,0),ou=new I(0,0,1),xp={type:"added"},_p={type:"removed"},dl={type:"childadded",child:null},fl={type:"childremoved",child:null},Ce=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new fn,n=new $n,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ft}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(cr,no,this.up):ni.lookAt(no,cr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(ni),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xp),dl.child=t,this.dispatchEvent(dl),dl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new I,ii=new I,pl=new I,si=new I,us=new I,ds=new I,au=new I,ml=new I,gl=new I,xl=new I,Yi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),ii.subVectors(n,e),pl.subVectors(t,e);let a=Un.dot(Un),o=Un.dot(ii),c=Un.dot(pl),l=ii.dot(ii),h=ii.dot(pl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ii.subVectors(t,e),Un.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Un.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),ds.subVectors(r,n),ml.subVectors(t,n);let c=us.dot(ml),l=ds.dot(ml);if(c<=0&&l<=0)return e.copy(n);gl.subVectors(t,s);let h=us.dot(gl),u=ds.dot(gl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(us,a);xl.subVectors(t,r);let p=us.dot(xl),g=ds.dot(xl);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ds,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return au.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(au,o);let m=1/(f+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},io={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=op(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_l(a,r,t+1/3),this.g=_l(a,r,t),this.b=_l(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ce.fromWorkingColorSpace(Qe.copy(this),t),Math.round(He(Qe.r*255,0,255))*65536+Math.round(He(Qe.g*255,0,255))*256+Math.round(He(Qe.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=hn){ce.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(io);let n=nl(bi.h,io.h,e),s=nl(bi.s,io.s,e),r=nl(bi.l,io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new dt;dt.NAMES=ad;var vp=0,zn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Rs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ue=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new I,so=new ot,un=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return od("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}};var Us=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ns=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},yp=0,An=new he,vl=new Ce,fs=new I,vn=new ui,hr=new ui,ke=new I,De=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?Ns:Us)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(vn.min,hr.min),vn.expandByPoint(ke),ke.addVectors(vn.max,hr.max),vn.expandByPoint(ke)):(vn.expandByPoint(hr.min),vn.expandByPoint(hr.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ke.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(t,l),ke.add(fs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new I,c[E]=new I;let l=new I,h=new I,u=new I,d=new ot,p=new ot,g=new ot,x=new I,f=new I;function m(E,P,v){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),o[E].add(x),o[P].add(x),o[v].add(x),c[E].add(f),c[P].add(f),c[v].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let E=0,P=y.length;E<P;++E){let v=y[E],b=v.start,D=v.count;for(let O=b,L=b+D;O<L;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new I,M=new I,R=new I,T=new I;function w(E){R.fromBufferAttribute(s,E),T.copy(R);let P=o[E];_.copy(P),_.sub(R.multiplyScalar(R.dot(P))).normalize(),M.crossVectors(T,P);let b=M.dot(c[E])<0?-1:1;a.setXYZW(E,_.x,_.y,_.z,b)}for(let E=0,P=y.length;E<P;++E){let v=y[E],b=v.start,D=v.count;for(let O=b,L=b+D;O<L;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[p++]}return new un(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lu=new he,Hi=new Bo,ro=new Li,cu=new I,ps=new I,ms=new I,gs=new I,yl=new I,oo=new I,ao=new ot,lo=new ot,co=new ot,hu=new I,uu=new I,du=new I,ho=new I,uo=new I,Xt=class extends Ce{constructor(t=new De,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(yl.fromBufferAttribute(u,t),a?oo.addScaledVector(yl,h):oo.addScaledVector(yl.sub(e),h))}e.add(oo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(ro.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ro,cu)===null||Hi.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),_=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=y,R=_;M<R;M+=3){let T=o.getX(M),w=o.getX(M+1),E=o.getX(M+2);s=fo(this,m,t,n,l,h,u,T,w,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){let y=o.getX(f),_=o.getX(f+1),M=o.getX(f+2);s=fo(this,a,t,n,l,h,u,y,_,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),_=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let M=y,R=_;M<R;M+=3){let T=M,w=M+1,E=M+2;s=fo(this,m,t,n,l,h,u,T,w,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){let y=f,_=f+1,M=f+2;s=fo(this,a,t,n,l,h,u,y,_,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Mp(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ci,o),c===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(uo);return l<e.near||l>e.far?null:{distance:l,point:uo.clone(),object:i}}function fo(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ps),i.getVertexPosition(c,ms),i.getVertexPosition(l,gs);let h=Mp(i,t,e,n,ps,ms,gs,ho);if(h){s&&(ao.fromBufferAttribute(s,o),lo.fromBufferAttribute(s,c),co.fromBufferAttribute(s,l),h.uv=Yi.getInterpolation(ho,ps,ms,gs,ao,lo,co,new ot)),r&&(ao.fromBufferAttribute(r,o),lo.fromBufferAttribute(r,c),co.fromBufferAttribute(r,l),h.uv1=Yi.getInterpolation(ho,ps,ms,gs,ao,lo,co,new ot)),a&&(hu.fromBufferAttribute(a,o),uu.fromBufferAttribute(a,c),du.fromBufferAttribute(a,l),h.normal=Yi.getInterpolation(ho,ps,ms,gs,hu,uu,du,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};Yi.getNormal(ps,ms,gs,u.normal),h.face=u}return h}var pn=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(x,f,m,y,_,M,R,T,w,E,P){let v=M/w,b=R/E,D=M/2,O=R/2,L=T/2,B=w+1,F=E+1,Z=0,q=0,J=new I;for(let et=0;et<F;et++){let st=et*b-O;for(let vt=0;vt<B;vt++){let Nt=vt*v-D;J[x]=Nt*y,J[f]=st*_,J[m]=L,l.push(J.x,J.y,J.z),J[x]=0,J[f]=0,J[m]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(vt/w),u.push(1-et/E),Z+=1}}for(let et=0;et<E;et++)for(let st=0;st<w;st++){let vt=d+st+B*et,Nt=d+st+B*(et+1),X=d+(st+1)+B*(et+1),tt=d+(st+1)+B*et;c.push(vt,Nt,tt),c.push(Nt,X,tt),q+=6}o.addGroup(p,q,P),p+=q,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=zs(i[e]);for(let s in n)t[s]=n[s]}return t}function bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){return i.getRenderTarget()===null?i.outputColorSpace:ce.workingColorSpace}var Sp={clone:zs,merge:on},wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ho=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new I,fu=new ot,pu=new ot,en=class extends Ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(el*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,_s=1,Gl=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new en(xs,_s,t,e);r.layers=this.layers,this.add(r);let a=new en(xs,_s,t,e);a.layers=this.layers,this.add(a);let o=new en(xs,_s,t,e);o.layers=this.layers,this.add(o);let c=new en(xs,_s,t,e);c.layers=this.layers,this.add(c);let l=new en(xs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Go=class extends dn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vl=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Ti});r.uniforms.tEquirect.value=e;let a=new Xt(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=tn),new Gl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ml=new I,Tp=new I,Ap=new Ft,oi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Li,po=new I,br=class{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],f=s[11],m=s[12],y=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,f-p,M-m).normalize(),n[1].setComponents(c+r,d+l,f+p,M+m).normalize(),n[2].setComponents(c+a,d+h,f+g,M+y).normalize(),n[3].setComponents(c-a,d-h,f-g,M-y).normalize(),n[4].setComponents(c-o,d-u,f-x,M-_).normalize(),e===li)n[5].setComponents(c+o,d+u,f+x,M+_).normalize();else if(e===Do)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,f=g.length;x<f;x++){let m=g[x];e?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var We=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){let y=m*d-a;for(let _=0;_<l;_++){let M=_*u-r;g.push(M,-y,0),x.push(0,0,1),f.push(_/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let _=y+l*m,M=y+l*(m+1),R=y+1+l*(m+1),T=y+1+l*m;p.push(_,M,T),p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`
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
}`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Rm=`struct PhysicalMaterial {
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
}`,Cm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,z0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:zp,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:kp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:$p,color_fragment:Yp,color_pars_fragment:Zp,color_pars_vertex:Jp,color_vertex:Kp,common:jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:bm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_fragment:xm,lightmap_pars_fragment:_m,lights_lambert_fragment:vm,lights_lambert_pars_fragment:ym,lights_pars_begin:Mm,lights_toon_fragment:Sm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Pm,lights_fragment_end:Lm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Nm,map_fragment:zm,map_pars_fragment:Fm,map_particle_fragment:Om,map_particle_pars_fragment:Bm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Hm,morphinstance_vertex:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:$m,normal_fragment_maps:Ym,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:Km,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:e0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:f0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:x0,skinnormal_vertex:_0,specularmap_fragment:v0,specularmap_pars_fragment:y0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:S0,transmission_pars_fragment:w0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:I0,cube_vert:D0,cube_frag:U0,depth_vert:N0,depth_frag:z0,distanceRGBA_vert:F0,distanceRGBA_frag:O0,equirect_vert:B0,equirect_frag:k0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:$0,meshmatcap_frag:Y0,meshnormal_vert:Z0,meshnormal_frag:J0,meshphong_vert:K0,meshphong_frag:j0,meshphysical_vert:Q0,meshphysical_frag:tg,meshtoon_vert:eg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:rg,shadow_frag:og,sprite_vert:ag,sprite_frag:lg},ct={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Wn={basic:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new dt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:on([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:on([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:on([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new dt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:on([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:on([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:on([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:on([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:on([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:on([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:on([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:on([ct.lights,ct.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Wn.physical={uniforms:on([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var mo={r:0,b:0,g:0},Vi=new fn,cg=new he;function hg(i,t,e,n,s,r,a){let o=new dt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(f,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===da)?(h===void 0&&(h=new Xt(new pn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:zs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(m.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Vi)),h.material.toneMapped=ce.getTransfer(_.colorSpace)!==me,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Xt(new We(2,2),new Yn({name:"BackgroundMaterial",uniforms:zs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ce.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function x(f,m){f.getRGB(mo,ld(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),c=m,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,x(o,c)},render:g}}function ug(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null),l=c,h=!1;function u(L,B,F,Z,q){let J=!1;if(a){let et=x(Z,F,B);l!==et&&(l=et,p(l.object)),J=m(L,Z,F,q),J&&y(L,Z,F,q)}else{let et=B.wireframe===!0;(l.geometry!==Z.id||l.program!==F.id||l.wireframe!==et)&&(l.geometry=Z.id,l.program=F.id,l.wireframe=et,J=!0)}q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,E(L,B,F,Z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,B,F){let Z=F.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let J=q[B.id];J===void 0&&(J={},q[B.id]=J);let et=J[Z];return et===void 0&&(et=f(d()),J[Z]=et),et}function f(L){let B=[],F=[],Z=[];for(let q=0;q<s;q++)B[q]=0,F[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:Z,object:L,attributes:{},index:null}}function m(L,B,F,Z){let q=l.attributes,J=B.attributes,et=0,st=F.getAttributes();for(let vt in st)if(st[vt].location>=0){let X=q[vt],tt=J[vt];if(tt===void 0&&(vt==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),vt==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),X===void 0||X.attribute!==tt||tt&&X.data!==tt.data)return!0;et++}return l.attributesNum!==et||l.index!==Z}function y(L,B,F,Z){let q={},J=B.attributes,et=0,st=F.getAttributes();for(let vt in st)if(st[vt].location>=0){let X=J[vt];X===void 0&&(vt==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),vt==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let tt={};tt.attribute=X,X&&X.data&&(tt.data=X.data),q[vt]=tt,et++}l.attributes=q,l.attributesNum=et,l.index=Z}function _(){let L=l.newAttributes;for(let B=0,F=L.length;B<F;B++)L[B]=0}function M(L){R(L,0)}function R(L,B){let F=l.newAttributes,Z=l.enabledAttributes,q=l.attributeDivisors;F[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),q[L]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),q[L]=B)}function T(){let L=l.newAttributes,B=l.enabledAttributes;for(let F=0,Z=B.length;F<Z;F++)B[F]!==L[F]&&(i.disableVertexAttribArray(F),B[F]=0)}function w(L,B,F,Z,q,J,et){et===!0?i.vertexAttribIPointer(L,B,F,q,J):i.vertexAttribPointer(L,B,F,Z,q,J)}function E(L,B,F,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=Z.attributes,J=F.getAttributes(),et=B.defaultAttributeValues;for(let st in J){let vt=J[st];if(vt.location>=0){let Nt=q[st];if(Nt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(Nt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(Nt=L.instanceColor)),Nt!==void 0){let X=Nt.normalized,tt=Nt.itemSize,xt=e.get(Nt);if(xt===void 0)continue;let K=xt.buffer,Q=xt.type,ht=xt.bytesPerElement,Mt=n.isWebGL2===!0&&(Q===i.INT||Q===i.UNSIGNED_INT||Nt.gpuType===Ju);if(Nt.isInterleavedBufferAttribute){let Tt=Nt.data,N=Tt.stride,oe=Nt.offset;if(Tt.isInstancedInterleavedBuffer){for(let yt=0;yt<vt.locationSize;yt++)R(vt.location+yt,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let yt=0;yt<vt.locationSize;yt++)M(vt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let yt=0;yt<vt.locationSize;yt++)w(vt.location+yt,tt/vt.locationSize,Q,X,N*ht,(oe+tt/vt.locationSize*yt)*ht,Mt)}else{if(Nt.isInstancedBufferAttribute){for(let Tt=0;Tt<vt.locationSize;Tt++)R(vt.location+Tt,Nt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Tt=0;Tt<vt.locationSize;Tt++)M(vt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Tt=0;Tt<vt.locationSize;Tt++)w(vt.location+Tt,tt/vt.locationSize,Q,X,tt*ht,tt/vt.locationSize*Tt*ht,Mt)}}else if(et!==void 0){let X=et[st];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(vt.location,X);break;case 3:i.vertexAttrib3fv(vt.location,X);break;case 4:i.vertexAttrib4fv(vt.location,X);break;default:i.vertexAttrib1fv(vt.location,X)}}}}T()}function P(){D();for(let L in o){let B=o[L];for(let F in B){let Z=B[F];for(let q in Z)g(Z[q].object),delete Z[q];delete B[F]}delete o[L]}}function v(L){if(o[L.id]===void 0)return;let B=o[L.id];for(let F in B){let Z=B[F];for(let q in Z)g(Z[q].object),delete Z[q];delete B[F]}delete o[L.id]}function b(L){for(let B in o){let F=o[B];if(F[L.id]===void 0)continue;let Z=F[L.id];for(let q in Z)g(Z[q].object),delete Z[q];delete F[L.id]}}function D(){O(),h=!0,l!==c&&(l=c,p(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:v,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:M,disableUnusedAttributes:T}}function dg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function fg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=a||t.has("OES_texture_float"),R=_&&M,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:T}}function pg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new oi,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let y=r?0:n,_=y*4,M=m.clippingState||null;c.value=M,M=h(g,d,_,p);for(let R=0;R!==_;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=c.value,g!==!0||f===null){let m=p+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,M=p;_!==x;++_,M+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(f,M),f[M+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function mg(i){let t=new WeakMap;function e(a,o){return o===Ul?a.mapping=Ls:o===Nl&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ul||o===Nl)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Vl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vo=class extends Ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,mu=[.125,.215,.35,.446,.526,.582],$i=20,bl=new Vo,gu=new dt,Sl=null,wl=0,El=0,Xi=(1+Math.sqrt(5))/2,vs=1/Xi,xu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Xi,vs),new I(0,Xi,-vs),new I(vs,0,Xi),new I(-vs,0,Xi),new I(Xi,vs,0),new I(-Xi,vs,0)],Fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,wl,El),t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Mr,format:Nn,colorSpace:Di,depthBuffer:!1},s=_u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(r)),this._blurMaterial=xg(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,bl)}_sceneToCubeUV(t,e,n,s){let o=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gu),h.toneMapping=Ai,h.autoClear=!1;let p=new ue({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Xt(new pn,p),x=!1,f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(gu),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let _=this._cubeSize;go(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,bl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(s-1)%xu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$i-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):$i;f>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${$i}`);let m=[],y=0;for(let w=0;w<$i;++w){let E=w/x,P=Math.exp(-E*E/2);m.push(P),w===0?y+=P:w<f&&(y+=2*P)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let M=this._sizeLods[s],R=3*M*(s>_-Es?s-_+Es:0),T=4*(this._cubeSize-M);go(e,R,T,3*M,2*M),c.setRenderTarget(e),c.render(u,bl)}};function gg(i){let t=[],e=[],n=[],s=i,r=i-Es+1+mu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Es?c=mu[a-i+Es-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,f=2,m=1,y=new Float32Array(x*g*p),_=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let T=0;T<p;T++){let w=T%3*2/3-1,E=T>2?0:-1,P=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];y.set(P,x*g*T),_.set(d,f*g*T);let v=[T,T,T,T,T,T];M.set(v,m*g*T)}let R=new De;R.setAttribute("position",new un(y,x)),R.setAttribute("uv",new un(_,f)),R.setAttribute("faceIndex",new un(M,m)),t.push(R),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _u(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xg(i,t,e){let n=new Float32Array($i),s=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vu(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function yu(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function _g(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ul||c===Nl,h=c===Ls||c===Is;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Fs(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Fs(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let f=0,m=x.length;f<m;f++)t.remove(x[f])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let f=0,m=x.length;f<m;f++)t.update(x[f],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let _=0,M=y.length;_<M;_+=3){let R=y[_+0],T=y[_+1],w=y[_+2];d.push(R,T,T,w,w,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let R=_+0,T=_+1,w=_+2;d.push(R,T,T,w,w,R)}}else return;let f=new(rd(d)?Ns:Us)(d,1);f.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,f)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Mg(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*c),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let f,m;if(s)f=i,m="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,g,o,p*c,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<x;m++)this.render(p[m]/c,g[m]);else{f.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let m=0;for(let y=0;y<x;y++)m+=g[y];e.update(m,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sg(i,t){return i[0]-t[0]}function wg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Eg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ge,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let D=function(){v.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let f=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let w=h.attributes.position.count*T,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let P=new Float32Array(w*E*4*g),v=new Oo(P,w,E,g);v.type=Xn,v.needsUpdate=!0;let b=T*4;for(let O=0;O<g;O++){let L=_[O],B=M[O],F=R[O],Z=w*E*4*O;for(let q=0;q<L.count;q++){let J=q*b;f===!0&&(a.fromBufferAttribute(L,q),P[Z+J+0]=a.x,P[Z+J+1]=a.y,P[Z+J+2]=a.z,P[Z+J+3]=0),m===!0&&(a.fromBufferAttribute(B,q),P[Z+J+4]=a.x,P[Z+J+5]=a.y,P[Z+J+6]=a.z,P[Z+J+7]=0),y===!0&&(a.fromBufferAttribute(F,q),P[Z+J+8]=a.x,P[Z+J+9]=a.y,P[Z+J+10]=a.z,P[Z+J+11]=F.itemSize===4?a.w:1)}}x={count:g,texture:v,size:new ot(w,E)},r.set(h,x),h.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let f=0;for(let y=0;y<d.length;y++)f+=d[y];let m=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort(wg);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Sg);let x=h.morphAttributes.position,f=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let M=o[_],R=M[0],T=M[1];R!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),f&&h.getAttribute("morphNormal"+_)!==f[R]&&h.setAttribute("morphNormal"+_,f[R]),s[_]=T,m+=T):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Tg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Wo=class extends dn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Ei),n===void 0&&h===Ds&&(n=Zi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hd=new dn,ud=new Wo(1,1);ud.compareFunction=sd;var dd=new Oo,fd=new Hl,pd=new Go,Mu=[],bu=[],Su=new Float32Array(16),wu=new Float32Array(9),Eu=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Eu.set(n),i.uniformMatrix2fv(this.addr,!1,Eu),Fe(e,n)}}function Ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),Fe(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(ze(e,n))return;Su.set(n),i.uniformMatrix4fv(this.addr,!1,Su),Fe(e,n)}}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ud:hd;e.setTexture2D(t||r,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fd,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pd,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dd,s)}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return zg;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function $g(i,t){i.uniform1fv(this.addr,t)}function Yg(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Kg(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jg(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qg(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tx(i,t){i.uniform1iv(this.addr,t)}function ex(i,t){i.uniform2iv(this.addr,t)}function nx(i,t){i.uniform3iv(this.addr,t)}function ix(i,t){i.uniform4iv(this.addr,t)}function sx(i,t){i.uniform1uiv(this.addr,t)}function rx(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function ax(i,t){i.uniform4uiv(this.addr,t)}function lx(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||hd,r[a])}function cx(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||fd,r[a])}function hx(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||pd,r[a])}function ux(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||dd,r[a])}function dx(i){switch(i){case 5126:return $g;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}var Wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}},Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dx(e.type)}},ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function Tu(i,t){i.seq.push(t),i.map[t.id]=t}function fx(i,t,e){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),a=Tl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Tu(e,l===void 0?new Wl(o,i,t):new Xl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ql(o),Tu(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);fx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var px=37297,mx=0;function gx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function xx(i){let t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i),n;switch(t===e?n="":t===Io&&e===Lo?n="LinearDisplayP3ToLinearSRGB":t===Lo&&e===Io&&(n="LinearSRGBToLinearDisplayP3"),i){case Di:case pa:return[n,"LinearTransferOETF"];case hn:case Cc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ru(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gx(i.getShaderSource(t),a)}else return s}function _x(i,t){let e=xx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vx(i,t){let e;switch(t){case Ff:e="Linear";break;case Of:e="Reinhard";break;case Bf:e="OptimizedCineon";break;case Ac:e="ACESFilmic";break;case Hf:e="AgX";break;case Gf:e="Neutral";break;case kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function bx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function Cu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(wx,Tx)}var Ex=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tx(i,t){let e=Wt[t];if(e===void 0){let n=Ex.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(Ax,Rx)}function Rx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ha?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Px(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function Ix(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ua:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case zf:t="ENVMAP_BLENDING_ADD";break}return t}function Dx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ux(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Cx(e),l=Px(e),h=Lx(e),u=Ix(e),d=Dx(e),p=e.isWebGL2?"":yx(e),g=Mx(e),x=bx(r),f=s.createProgram(),m,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ts).join(`
`),m.length>0&&(m+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ts).join(`
`),y.length>0&&(y+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),y=[p,Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,_x("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=$l(a),a=Cu(a,e),a=Pu(a,e),o=$l(o),o=Cu(o,e),o=Pu(o,e),a=Lu(a),o=Lu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+m+a,R=_+y+o,T=Au(s,s.VERTEX_SHADER,M),w=Au(s,s.FRAGMENT_SHADER,R);s.attachShader(f,T),s.attachShader(f,w),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function E(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(w).trim(),F=!0,Z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,T,w);else{let q=Ru(s,T,"vertex"),J=Ru(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+q+`
`+J)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||B==="")&&(Z=!1);Z&&(D.diagnostics={runnable:F,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:y}})}s.deleteShader(T),s.deleteShader(w),P=new Ps(s,f),v=Sx(s,f)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(f,px)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=w,this}var Nx=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zl(t),e.set(t,n)),n}},Zl=class{constructor(t){this.id=Nx++,this.code=t,this.usedTimes=0}};function zx(i,t,e,n,s,r,a){let o=new ko,c=new Yl,l=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,D,O,L){let B=O.fog,F=L.geometry,Z=v.isMeshStandardMaterial?O.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),J=q&&q.mapping===da?q.image.height:null,et=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let st=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=st!==void 0?st.length:0,Nt=0;F.morphAttributes.position!==void 0&&(Nt=1),F.morphAttributes.normal!==void 0&&(Nt=2),F.morphAttributes.color!==void 0&&(Nt=3);let X,tt,xt,K;if(et){let fe=Wn[et];X=fe.vertexShader,tt=fe.fragmentShader}else X=v.vertexShader,tt=v.fragmentShader,c.update(v),xt=c.getVertexShaderID(v),K=c.getFragmentShaderID(v);let Q=i.getRenderTarget(),ht=L.isInstancedMesh===!0,Mt=L.isBatchedMesh===!0,Tt=!!v.map,N=!!v.matcap,oe=!!q,yt=!!v.aoMap,Pt=!!v.lightMap,St=!!v.bumpMap,Qt=!!v.normalMap,$t=!!v.displacementMap,Zt=!!v.emissiveMap,Ae=!!v.metalnessMap,C=!!v.roughnessMap,S=v.anisotropy>0,$=v.clearcoat>0,j=v.iridescence>0,it=v.sheen>0,nt=v.transmission>0,Ht=S&&!!v.anisotropyMap,Dt=$&&!!v.clearcoatMap,ut=$&&!!v.clearcoatNormalMap,pt=$&&!!v.clearcoatRoughnessMap,Gt=j&&!!v.iridescenceMap,rt=j&&!!v.iridescenceThicknessMap,Le=it&&!!v.sheenColorMap,Jt=it&&!!v.sheenRoughnessMap,Ct=!!v.specularMap,bt=!!v.specularColorMap,wt=!!v.specularIntensityMap,te=nt&&!!v.transmissionMap,Ot=nt&&!!v.thicknessMap,xe=!!v.gradientMap,U=!!v.alphaMap,ft=v.alphaTest>0,G=!!v.alphaHash,lt=!!v.extensions,mt=Ai;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(mt=i.toneMapping);let Kt={isWebGL2:u,shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:tt,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Mt,instancing:ht,instancingColor:ht&&L.instanceColor!==null,instancingMorph:ht&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Di,alphaToCoverage:!!v.alphaToCoverage,map:Tt,matcap:N,envMap:oe,envMapMode:oe&&q.mapping,envMapCubeUVHeight:J,aoMap:yt,lightMap:Pt,bumpMap:St,normalMap:Qt,displacementMap:p&&$t,emissiveMap:Zt,normalMapObjectSpace:Qt&&v.normalMapType===jf,normalMapTangentSpace:Qt&&v.normalMapType===fa,metalnessMap:Ae,roughnessMap:C,anisotropy:S,anisotropyMap:Ht,clearcoat:$,clearcoatMap:Dt,clearcoatNormalMap:ut,clearcoatRoughnessMap:pt,iridescence:j,iridescenceMap:Gt,iridescenceThicknessMap:rt,sheen:it,sheenColorMap:Le,sheenRoughnessMap:Jt,specularMap:Ct,specularColorMap:bt,specularIntensityMap:wt,transmission:nt,transmissionMap:te,thicknessMap:Ot,gradientMap:xe,opaque:v.transparent===!1&&v.blending===Rs&&v.alphaToCoverage===!1,alphaMap:U,alphaTest:ft,alphaHash:G,combine:v.combine,mapUv:Tt&&f(v.map.channel),aoMapUv:yt&&f(v.aoMap.channel),lightMapUv:Pt&&f(v.lightMap.channel),bumpMapUv:St&&f(v.bumpMap.channel),normalMapUv:Qt&&f(v.normalMap.channel),displacementMapUv:$t&&f(v.displacementMap.channel),emissiveMapUv:Zt&&f(v.emissiveMap.channel),metalnessMapUv:Ae&&f(v.metalnessMap.channel),roughnessMapUv:C&&f(v.roughnessMap.channel),anisotropyMapUv:Ht&&f(v.anisotropyMap.channel),clearcoatMapUv:Dt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&f(v.sheenRoughnessMap.channel),specularMapUv:Ct&&f(v.specularMap.channel),specularColorMapUv:bt&&f(v.specularColorMap.channel),specularIntensityMapUv:wt&&f(v.specularIntensityMap.channel),transmissionMapUv:te&&f(v.transmissionMap.channel),thicknessMapUv:Ot&&f(v.thicknessMap.channel),alphaMapUv:U&&f(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Qt||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Tt||U),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Tt&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Me,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:lt&&v.extensions.derivatives===!0,extensionFragDepth:lt&&v.extensions.fragDepth===!0,extensionDrawBuffers:lt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function y(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function _(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.instancingMorph&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.normalMapObjectSpace&&o.enable(7),b.normalMapTangentSpace&&o.enable(8),b.clearcoat&&o.enable(9),b.iridescence&&o.enable(10),b.alphaTest&&o.enable(11),b.vertexColors&&o.enable(12),b.vertexAlphas&&o.enable(13),b.vertexUv1s&&o.enable(14),b.vertexUv2s&&o.enable(15),b.vertexUv3s&&o.enable(16),b.vertexTangents&&o.enable(17),b.anisotropy&&o.enable(18),b.alphaHash&&o.enable(19),b.batching&&o.enable(20),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){let b=x[v.type],D;if(b){let O=Wn[b];D=Sp.clone(O.uniforms)}else D=v.uniforms;return D}function T(v,b){let D;for(let O=0,L=h.length;O<L;O++){let B=h[O];if(B.cacheKey===b){D=B,++D.usedTimes;break}}return D===void 0&&(D=new Ux(i,b,v,r),h.push(D)),D}function w(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function E(v){c.remove(v)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:P}}function Fx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Ox(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=f),t++,m}function o(u,d,p,g,x,f){let m=a(u,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(u,d,p,g,x,f){let m=a(u,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Ox),n.length>1&&n.sort(d||Du),s.length>1&&s.sort(d||Du)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Bx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new dt};break;case"SpotLight":e={position:new I,direction:new I,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Hx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gx=0;function Vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wx(i,t){let e=new kx,n=Hx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new he,o=new he;function c(h,u){let d=0,p=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let x=0,f=0,m=0,y=0,_=0,M=0,R=0,T=0,w=0,E=0,P=0;h.sort(Vx);let v=u===!0?Math.PI:1;for(let D=0,O=h.length;D<O;D++){let L=h[D],B=L.color,F=L.intensity,Z=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*F*v,p+=B.g*F*v,g+=B.b*F*v;else if(L.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(L.sh.coefficients[J],F);P++}else if(L.isDirectionalLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*v),L.castShadow){let et=L.shadow,st=n.get(L);st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,s.directionalShadow[x]=st,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=L.shadow.matrix,M++}s.directional[x]=J,x++}else if(L.isSpotLight){let J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(B).multiplyScalar(F*v),J.distance=Z,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,s.spot[m]=J;let et=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,et.updateMatrices(L),L.castShadow&&E++),s.spotLightMatrix[m]=et.matrix,L.castShadow){let st=n.get(L);st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,s.spotShadow[m]=st,s.spotShadowMap[m]=q,T++}m++}else if(L.isRectAreaLight){let J=e.get(L);J.color.copy(B).multiplyScalar(F),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=J,y++}else if(L.isPointLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*v),J.distance=L.distance,J.decay=L.decay,L.castShadow){let et=L.shadow,st=n.get(L);st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,st.shadowCameraNear=et.camera.near,st.shadowCameraFar=et.camera.far,s.pointShadow[f]=st,s.pointShadowMap[f]=q,s.pointShadowMatrix[f]=L.shadow.matrix,R++}s.point[f]=J,f++}else if(L.isHemisphereLight){let J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(F*v),J.groundColor.copy(L.groundColor).multiplyScalar(F*v),s.hemi[_]=J,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let b=s.hash;(b.directionalLength!==x||b.pointLength!==f||b.spotLength!==m||b.rectAreaLength!==y||b.hemiLength!==_||b.numDirectionalShadows!==M||b.numPointShadows!==R||b.numSpotShadows!==T||b.numSpotMaps!==w||b.numLightProbes!==P)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=y,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+w-E,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=E,s.numLightProbes=P,b.directionalLength=x,b.pointLength=f,b.spotLength=m,b.rectAreaLength=y,b.hemiLength=_,b.numDirectionalShadows=M,b.numPointShadows=R,b.numSpotShadows=T,b.numSpotMaps=w,b.numLightProbes=P,s.version=Gx++)}function l(h,u){let d=0,p=0,g=0,x=0,f=0,m=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let M=h[y];if(M.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(M.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let R=s.hemi[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),f++}}}return{setup:c,setupView:l,state:s}}function Nu(i,t){let e=new Wx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Xx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new Nu(i,t),e.set(r,[c])):a>=o.length?(c=new Nu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Jl=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kl=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function Yx(i,t,e){let n=new br,s=new ot,r=new ot,a=new Ge,o=new Jl({depthPacking:Kf}),c=new Kl,l={},h=e.maxTextureSize,u={[Ci]:Ve,[Ve]:Ci,[Me]:Me},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:qx,fragmentShader:$x}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let m=this.type;this.render=function(T,w,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let P=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ti),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=m!==ri&&this.type===ri,L=m===ri&&this.type!==ri;for(let B=0,F=T.length;B<F;B++){let Z=T[B],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let J=q.getFrameExtents();if(s.multiply(J),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,q.mapSize.y=r.y)),q.map===null||O===!0||L===!0){let st=this.type!==ri?{minFilter:$e,magFilter:$e}:{};q.map!==null&&q.map.dispose(),q.map=new hi(s.x,s.y,st),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let et=q.getViewportCount();for(let st=0;st<et;st++){let vt=q.getViewport(st);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),D.viewport(a),q.updateMatrices(Z,st),n=q.getFrustum(),M(w,E,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ri&&y(q,E),q.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(P,v,b)};function y(T,w){let E=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,E,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,E,p,x,null)}function _(T,w,E,P){let v=null,b=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=E.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=v.uuid,O=w.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let B=L[O];B===void 0&&(B=v.clone(),L[O]=B,w.addEventListener("dispose",R)),v=B}if(v.visible=w.visible,v.wireframe=w.wireframe,P===ri?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,E.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=i.properties.get(v);D.light=E}return v}function M(T,w,E,P,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let O=t.update(T),L=T.material;if(Array.isArray(L)){let B=O.groups;for(let F=0,Z=B.length;F<Z;F++){let q=B[F],J=L[q.materialIndex];if(J&&J.visible){let et=_(T,J,P,v);T.onBeforeShadow(i,T,w,E,O,et,q),i.renderBufferDirect(E,null,O,et,T,q),T.onAfterShadow(i,T,w,E,O,et,q)}}}else if(L.visible){let B=_(T,L,P,v);T.onBeforeShadow(i,T,w,E,O,B,null),i.renderBufferDirect(E,null,O,B,T,null),T.onAfterShadow(i,T,w,E,O,B,null)}}let D=T.children;for(let O=0,L=D.length;O<L;O++)M(D[O],w,E,P,v)}function R(T){T.target.removeEventListener("dispose",R);for(let E in l){let P=l[E],v=T.target.uuid;v in P&&(P[v].dispose(),delete P[v])}}}function Zx(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ft=new Ge,G=null,lt=new Ge(0,0,0,0);return{setMask:function(mt){G!==mt&&!U&&(i.colorMask(mt,mt,mt,mt),G=mt)},setLocked:function(mt){U=mt},setClear:function(mt,Kt,fe,qe,En){En===!0&&(mt*=qe,Kt*=qe,fe*=qe),ft.set(mt,Kt,fe,qe),lt.equals(ft)===!1&&(i.clearColor(mt,Kt,fe,qe),lt.copy(ft))},reset:function(){U=!1,G=null,lt.set(-1,0,0,0)}}}function r(){let U=!1,ft=null,G=null,lt=null;return{setTest:function(mt){mt?ht(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(mt){ft!==mt&&!U&&(i.depthMask(mt),ft=mt)},setFunc:function(mt){if(G!==mt){switch(mt){case Rf:i.depthFunc(i.NEVER);break;case Cf:i.depthFunc(i.ALWAYS);break;case Pf:i.depthFunc(i.LESS);break;case Ao:i.depthFunc(i.LEQUAL);break;case Lf:i.depthFunc(i.EQUAL);break;case If:i.depthFunc(i.GEQUAL);break;case Df:i.depthFunc(i.GREATER);break;case Uf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=mt}},setLocked:function(mt){U=mt},setClear:function(mt){lt!==mt&&(i.clearDepth(mt),lt=mt)},reset:function(){U=!1,ft=null,G=null,lt=null}}}function a(){let U=!1,ft=null,G=null,lt=null,mt=null,Kt=null,fe=null,qe=null,En=null;return{setTest:function(pe){U||(pe?ht(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(pe){ft!==pe&&!U&&(i.stencilMask(pe),ft=pe)},setFunc:function(pe,sn,Vn){(G!==pe||lt!==sn||mt!==Vn)&&(i.stencilFunc(pe,sn,Vn),G=pe,lt=sn,mt=Vn)},setOp:function(pe,sn,Vn){(Kt!==pe||fe!==sn||qe!==Vn)&&(i.stencilOp(pe,sn,Vn),Kt=pe,fe=sn,qe=Vn)},setLocked:function(pe){U=pe},setClear:function(pe){En!==pe&&(i.clearStencil(pe),En=pe)},reset:function(){U=!1,ft=null,G=null,lt=null,mt=null,Kt=null,fe=null,qe=null,En=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],f=null,m=!1,y=null,_=null,M=null,R=null,T=null,w=null,E=null,P=new dt(0,0,0),v=0,b=!1,D=null,O=null,L=null,B=null,F=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,J=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(et)[1]),q=J>=1):et.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),q=J>=2);let st=null,vt={},Nt=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),tt=new Ge().fromArray(Nt),xt=new Ge().fromArray(X);function K(U,ft,G,lt){let mt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(U,Kt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<G;fe++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ft+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return Kt}let Q={};Q[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Q[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ht(i.DEPTH_TEST),c.setFunc(Ao),$t(!1),Zt(ph),ht(i.CULL_FACE),St(Ti);function ht(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Mt(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Tt(U,ft){return p[U]!==ft?(i.bindFramebuffer(U,ft),p[U]=ft,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(U,ft){let G=x,lt=!1;if(U){G=g.get(ft),G===void 0&&(G=[],g.set(ft,G));let mt=U.textures;if(G.length!==mt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,fe=mt.length;Kt<fe;Kt++)G[Kt]=i.COLOR_ATTACHMENT0+Kt;G.length=mt.length,lt=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,lt=!0);if(lt)if(e.isWebGL2)i.drawBuffers(G);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function oe(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let yt={[qi]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};if(n)yt[xh]=i.MIN,yt[_h]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(yt[xh]=U.MIN_EXT,yt[_h]=U.MAX_EXT)}let Pt={[mf]:i.ZERO,[gf]:i.ONE,[xf]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[yf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Af]:i.ONE_MINUS_CONSTANT_ALPHA};function St(U,ft,G,lt,mt,Kt,fe,qe,En,pe){if(U===Ti){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(ht(i.BLEND),m=!0),U!==df){if(U!==y||pe!==b){if((_!==qi||T!==qi)&&(i.blendEquation(i.FUNC_ADD),_=qi,T=qi),pe)switch(U){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,R=null,w=null,E=null,P.set(0,0,0),v=0,y=U,b=pe}return}mt=mt||ft,Kt=Kt||G,fe=fe||lt,(ft!==_||mt!==T)&&(i.blendEquationSeparate(yt[ft],yt[mt]),_=ft,T=mt),(G!==M||lt!==R||Kt!==w||fe!==E)&&(i.blendFuncSeparate(Pt[G],Pt[lt],Pt[Kt],Pt[fe]),M=G,R=lt,w=Kt,E=fe),(qe.equals(P)===!1||En!==v)&&(i.blendColor(qe.r,qe.g,qe.b,En),P.copy(qe),v=En),y=U,b=!1}function Qt(U,ft){U.side===Me?Mt(i.CULL_FACE):ht(i.CULL_FACE);let G=U.side===Ve;ft&&(G=!G),$t(G),U.blending===Rs&&U.transparent===!1?St(Ti):St(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);let lt=U.stencilWrite;l.setTest(lt),lt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(U){D!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),D=U)}function Zt(U){U!==hf?(ht(i.CULL_FACE),U!==O&&(U===ph?i.cullFace(i.BACK):U===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),O=U}function Ae(U){U!==L&&(q&&i.lineWidth(U),L=U)}function C(U,ft,G){U?(ht(i.POLYGON_OFFSET_FILL),(B!==ft||F!==G)&&(i.polygonOffset(ft,G),B=ft,F=G)):Mt(i.POLYGON_OFFSET_FILL)}function S(U){U?ht(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function $(U){U===void 0&&(U=i.TEXTURE0+Z-1),st!==U&&(i.activeTexture(U),st=U)}function j(U,ft,G){G===void 0&&(st===null?G=i.TEXTURE0+Z-1:G=st);let lt=vt[G];lt===void 0&&(lt={type:void 0,texture:void 0},vt[G]=lt),(lt.type!==U||lt.texture!==ft)&&(st!==G&&(i.activeTexture(G),st=G),i.bindTexture(U,ft||Q[U]),lt.type=U,lt.texture=ft)}function it(){let U=vt[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(U){tt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function wt(U){xt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),xt.copy(U))}function te(U,ft){let G=u.get(ft);G===void 0&&(G=new WeakMap,u.set(ft,G));let lt=G.get(U);lt===void 0&&(lt=i.getUniformBlockIndex(ft,U.name),G.set(U,lt))}function Ot(U,ft){let lt=u.get(ft).get(U);h.get(ft)!==lt&&(i.uniformBlockBinding(ft,lt,U.__bindingPointIndex),h.set(ft,lt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},st=null,vt={},p={},g=new WeakMap,x=[],f=null,m=!1,y=null,_=null,M=null,R=null,T=null,w=null,E=null,P=new dt(0,0,0),v=0,b=!1,D=null,O=null,L=null,B=null,F=null,tt.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ht,disable:Mt,bindFramebuffer:Tt,drawBuffers:N,useProgram:oe,setBlending:St,setMaterial:Qt,setFlipSided:$t,setCullFace:Zt,setLineWidth:Ae,setPolygonOffset:C,setScissorTest:S,activeTexture:$,bindTexture:j,unbindTexture:it,compressedTexImage2D:nt,compressedTexImage3D:Ht,texImage2D:Jt,texImage3D:Ct,updateUBOMapping:te,uniformBlockBinding:Ot,texStorage2D:rt,texStorage3D:Le,texSubImage2D:Dt,texSubImage3D:ut,compressedTexSubImage2D:pt,compressedTexSubImage3D:Gt,scissor:bt,viewport:wt,reset:xe}}function Jx(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,u=new WeakMap,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function x(C,S){return g?new OffscreenCanvas(C,S):No("canvas")}function f(C,S,$,j){let it=1,nt=Ae(C);if((nt.width>j||nt.height>j)&&(it=j/Math.max(nt.width,nt.height)),it<1||S===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let Ht=S?Bl:Math.floor,Dt=Ht(it*nt.width),ut=Ht(it*nt.height);d===void 0&&(d=x(Dt,ut));let pt=$?x(Dt,ut):d;return pt.width=Dt,pt.height=ut,pt.getContext("2d").drawImage(C,0,0,Dt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Dt+"x"+ut+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){let S=Ae(C);return Jh(S.width)&&Jh(S.height)}function y(C){return o?!1:C.wrapS!==yn||C.wrapT!==yn||C.minFilter!==$e&&C.minFilter!==tn}function _(C,S){return C.generateMipmaps&&S&&C.minFilter!==$e&&C.minFilter!==tn}function M(C){i.generateMipmap(C)}function R(C,S,$,j,it=!1){if(o===!1)return S;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=S;if(S===i.RED&&($===i.FLOAT&&(nt=i.R32F),$===i.HALF_FLOAT&&(nt=i.R16F),$===i.UNSIGNED_BYTE&&(nt=i.R8)),S===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.R8UI),$===i.UNSIGNED_SHORT&&(nt=i.R16UI),$===i.UNSIGNED_INT&&(nt=i.R32UI),$===i.BYTE&&(nt=i.R8I),$===i.SHORT&&(nt=i.R16I),$===i.INT&&(nt=i.R32I)),S===i.RG&&($===i.FLOAT&&(nt=i.RG32F),$===i.HALF_FLOAT&&(nt=i.RG16F),$===i.UNSIGNED_BYTE&&(nt=i.RG8)),S===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RG8UI),$===i.UNSIGNED_SHORT&&(nt=i.RG16UI),$===i.UNSIGNED_INT&&(nt=i.RG32UI),$===i.BYTE&&(nt=i.RG8I),$===i.SHORT&&(nt=i.RG16I),$===i.INT&&(nt=i.RG32I)),S===i.RGBA){let Ht=it?Po:ce.getTransfer(j);$===i.FLOAT&&(nt=i.RGBA32F),$===i.HALF_FLOAT&&(nt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(nt=Ht===me?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function T(C,S,$){return _(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==$e&&C.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){return C===$e||C===vh||C===or?i.NEAREST:i.LINEAR}function E(C){let S=C.target;S.removeEventListener("dispose",E),v(S),S.isVideoTexture&&u.delete(S)}function P(C){let S=C.target;S.removeEventListener("dispose",P),D(S)}function v(C){let S=n.get(C);if(S.__webglInit===void 0)return;let $=C.source,j=p.get($);if(j){let it=j[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(C),Object.keys(j).length===0&&p.delete($)}n.remove(C)}function b(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let $=C.source,j=p.get($);delete j[S.__cacheKey],a.memory.textures--}function D(C){let S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let it=0;it<S.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[j][it]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let $=C.textures;for(let j=0,it=$.length;j<it;j++){let nt=n.get($[j]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove($[j])}n.remove(C)}let O=0;function L(){O=0}function B(){let C=O;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function F(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){let $=n.get(C);if(C.isVideoTexture&&$t(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt($,C,S);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+S)}function q(C,S){let $=n.get(C);if(C.version>0&&$.__version!==C.version){xt($,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+S)}function J(C,S){let $=n.get(C);if(C.version>0&&$.__version!==C.version){xt($,C,S);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+S)}function et(C,S){let $=n.get(C);if(C.version>0&&$.__version!==C.version){K($,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+S)}let st={[yr]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},vt={[$e]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Nt={[Qf]:i.NEVER,[rp]:i.ALWAYS,[tp]:i.LESS,[sd]:i.LEQUAL,[ep]:i.EQUAL,[sp]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function X(C,S,$){if(S.type===Xn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===Ya||S.magFilter===or||S.magFilter===ai||S.minFilter===tn||S.minFilter===Ya||S.minFilter===or||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(i.texParameteri(C,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,st[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,vt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,vt[S.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==yn||S.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,w(S.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==$e&&S.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==or&&S.minFilter!==ai||S.type===Xn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Mr&&t.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(C,S){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));let j=S.source,it=p.get(j);it===void 0&&(it={},p.set(j,it));let nt=F(S);if(nt!==C.__cacheKey){it[nt]===void 0&&(it[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),it[nt].usedTimes++;let Ht=it[C.__cacheKey];Ht!==void 0&&(it[C.__cacheKey].usedTimes--,Ht.usedTimes===0&&b(S)),C.__cacheKey=nt,C.__webglTexture=it[nt].texture}return $}function xt(C,S,$){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let it=tt(C,S),nt=S.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+$);let Ht=n.get(nt);if(nt.version!==Ht.__version||it===!0){e.activeTexture(i.TEXTURE0+$);let Dt=ce.getPrimaries(ce.workingColorSpace),ut=S.colorSpace===wi?null:ce.getPrimaries(S.colorSpace),pt=S.colorSpace===wi||Dt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Gt=y(S)&&m(S.image)===!1,rt=f(S.image,Gt,!1,s.maxTextureSize);rt=Zt(S,rt);let Le=m(rt)||o,Jt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),bt=R(S.internalFormat,Jt,Ct,S.colorSpace,S.isVideoTexture);X(j,S,Le);let wt,te=S.mipmaps,Ot=o&&S.isVideoTexture!==!0&&bt!==id,xe=Ht.__version===void 0||it===!0,U=nt.dataReady,ft=T(S,rt,Le);if(S.isDepthTexture)bt=i.DEPTH_COMPONENT,o?S.type===Xn?bt=i.DEPTH_COMPONENT32F:S.type===Ei?bt=i.DEPTH_COMPONENT24:S.type===Zi?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:S.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ji&&bt===i.DEPTH_COMPONENT&&S.type!==Rc&&S.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ei,Ct=r.convert(S.type)),S.format===Ds&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,S.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Zi,Ct=r.convert(S.type))),xe&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,bt,rt.width,rt.height,0,Jt,Ct,null));else if(S.isDataTexture)if(te.length>0&&Le){Ot&&xe&&e.texStorage2D(i.TEXTURE_2D,ft,bt,te[0].width,te[0].height);for(let G=0,lt=te.length;G<lt;G++)wt=te[G],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,wt.width,wt.height,Jt,Ct,wt.data):e.texImage2D(i.TEXTURE_2D,G,bt,wt.width,wt.height,0,Jt,Ct,wt.data);S.generateMipmaps=!1}else Ot?(xe&&e.texStorage2D(i.TEXTURE_2D,ft,bt,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Jt,Ct,rt.data)):e.texImage2D(i.TEXTURE_2D,0,bt,rt.width,rt.height,0,Jt,Ct,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ot&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,bt,te[0].width,te[0].height,rt.depth);for(let G=0,lt=te.length;G<lt;G++)wt=te[G],S.format!==Nn?Jt!==null?Ot?U&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,wt.width,wt.height,rt.depth,Jt,wt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,bt,wt.width,wt.height,rt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,wt.width,wt.height,rt.depth,Jt,Ct,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,bt,wt.width,wt.height,rt.depth,0,Jt,Ct,wt.data)}else{Ot&&xe&&e.texStorage2D(i.TEXTURE_2D,ft,bt,te[0].width,te[0].height);for(let G=0,lt=te.length;G<lt;G++)wt=te[G],S.format!==Nn?Jt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,wt.width,wt.height,Jt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,bt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,wt.width,wt.height,Jt,Ct,wt.data):e.texImage2D(i.TEXTURE_2D,G,bt,wt.width,wt.height,0,Jt,Ct,wt.data)}else if(S.isDataArrayTexture)Ot?(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,bt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Jt,Ct,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,Jt,Ct,rt.data);else if(S.isData3DTexture)Ot?(xe&&e.texStorage3D(i.TEXTURE_3D,ft,bt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Jt,Ct,rt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,Jt,Ct,rt.data);else if(S.isFramebufferTexture){if(xe)if(Ot)e.texStorage2D(i.TEXTURE_2D,ft,bt,rt.width,rt.height);else{let G=rt.width,lt=rt.height;for(let mt=0;mt<ft;mt++)e.texImage2D(i.TEXTURE_2D,mt,bt,G,lt,0,Jt,Ct,null),G>>=1,lt>>=1}}else if(te.length>0&&Le){if(Ot&&xe){let G=Ae(te[0]);e.texStorage2D(i.TEXTURE_2D,ft,bt,G.width,G.height)}for(let G=0,lt=te.length;G<lt;G++)wt=te[G],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Jt,Ct,wt):e.texImage2D(i.TEXTURE_2D,G,bt,Jt,Ct,wt);S.generateMipmaps=!1}else if(Ot){if(xe){let G=Ae(rt);e.texStorage2D(i.TEXTURE_2D,ft,bt,G.width,G.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,Ct,rt)}else e.texImage2D(i.TEXTURE_2D,0,bt,Jt,Ct,rt);_(S,Le)&&M(j),Ht.__version=nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function K(C,S,$){if(S.image.length!==6)return;let j=tt(C,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+$);let nt=n.get(it);if(it.version!==nt.__version||j===!0){e.activeTexture(i.TEXTURE0+$);let Ht=ce.getPrimaries(ce.workingColorSpace),Dt=S.colorSpace===wi?null:ce.getPrimaries(S.colorSpace),ut=S.colorSpace===wi||Ht===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let pt=S.isCompressedTexture||S.image[0].isCompressedTexture,Gt=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let G=0;G<6;G++)!pt&&!Gt?rt[G]=f(S.image[G],!1,!0,s.maxCubemapSize):rt[G]=Gt?S.image[G].image:S.image[G],rt[G]=Zt(S,rt[G]);let Le=rt[0],Jt=m(Le)||o,Ct=r.convert(S.format,S.colorSpace),bt=r.convert(S.type),wt=R(S.internalFormat,Ct,bt,S.colorSpace),te=o&&S.isVideoTexture!==!0,Ot=nt.__version===void 0||j===!0,xe=it.dataReady,U=T(S,Le,Jt);X(i.TEXTURE_CUBE_MAP,S,Jt);let ft;if(pt){te&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,U,wt,Le.width,Le.height);for(let G=0;G<6;G++){ft=rt[G].mipmaps;for(let lt=0;lt<ft.length;lt++){let mt=ft[lt];S.format!==Nn?Ct!==null?te?xe&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt,0,0,mt.width,mt.height,Ct,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt,wt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?xe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt,0,0,mt.width,mt.height,Ct,bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt,wt,mt.width,mt.height,0,Ct,bt,mt.data)}}}else{if(ft=S.mipmaps,te&&Ot){ft.length>0&&U++;let G=Ae(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,U,wt,G.width,G.height)}for(let G=0;G<6;G++)if(Gt){te?xe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,rt[G].width,rt[G].height,Ct,bt,rt[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,wt,rt[G].width,rt[G].height,0,Ct,bt,rt[G].data);for(let lt=0;lt<ft.length;lt++){let Kt=ft[lt].image[G].image;te?xe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt+1,0,0,Kt.width,Kt.height,Ct,bt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt+1,wt,Kt.width,Kt.height,0,Ct,bt,Kt.data)}}else{te?xe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ct,bt,rt[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,wt,Ct,bt,rt[G]);for(let lt=0;lt<ft.length;lt++){let mt=ft[lt];te?xe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt+1,0,0,Ct,bt,mt.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt+1,wt,Ct,bt,mt.image[G])}}}_(S,Jt)&&M(i.TEXTURE_CUBE_MAP),nt.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,$,j,it,nt){let Ht=r.convert($.format,$.colorSpace),Dt=r.convert($.type),ut=R($.internalFormat,Ht,Dt,$.colorSpace);if(!n.get(S).__hasExternalTextures){let Gt=Math.max(1,S.width>>nt),rt=Math.max(1,S.height>>nt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,ut,Gt,rt,S.depth,0,Ht,Dt,null):e.texImage2D(it,nt,ut,Gt,rt,0,Ht,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Qt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,n.get($).__webglTexture,0,St(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,n.get($).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,S,$){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let j=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||Qt(S)){let it=S.depthTexture;it&&it.isDepthTexture&&(it.type===Xn?j=i.DEPTH_COMPONENT32F:it.type===Ei&&(j=i.DEPTH_COMPONENT24));let nt=St(S);Qt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,j,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,j,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let j=St(S);$&&Qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,S.width,S.height):Qt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let j=S.textures;for(let it=0;it<j.length;it++){let nt=j[it],Ht=r.convert(nt.format,nt.colorSpace),Dt=r.convert(nt.type),ut=R(nt.internalFormat,Ht,Dt,nt.colorSpace),pt=St(S);$&&Qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,ut,S.width,S.height):Qt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ut,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let j=n.get(S.depthTexture).__webglTexture,it=St(S);if(S.depthTexture.format===Ji)Qt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ds)Qt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Tt(C){let S=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Mt(S.__webglFramebuffer,C)}else if($){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(C,S,$){let j=n.get(C);S!==void 0&&Q(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Tt(C)}function oe(C){let S=C.texture,$=n.get(C),j=n.get(S);C.addEventListener("dispose",P);let it=C.textures,nt=C.isWebGLCubeRenderTarget===!0,Ht=it.length>1,Dt=m(C)||o;if(Ht||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),nt){$.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[ut]=[];for(let pt=0;pt<S.mipmaps.length;pt++)$.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else $.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)$.__webglFramebuffer[ut]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ht)if(s.drawBuffers)for(let ut=0,pt=it.length;ut<pt;ut++){let Gt=n.get(it[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Qt(C)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){let pt=it[ut];$.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ut]);let Gt=r.convert(pt.format,pt.colorSpace),rt=r.convert(pt.type),Le=R(pt.internalFormat,Gt,rt,pt.colorSpace,C.isXRRenderTarget===!0),Jt=St(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Le,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,$.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ht($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,Dt);for(let ut=0;ut<6;ut++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)Q($.__webglFramebuffer[ut][pt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else Q($.__webglFramebuffer[ut],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(S,Dt)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let ut=0,pt=it.length;ut<pt;ut++){let Gt=it[ut],rt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),X(i.TEXTURE_2D,Gt,Dt),Q($.__webglFramebuffer,C,Gt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),_(Gt,Dt)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ut=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,j.__webglTexture),X(ut,S,Dt),o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)Q($.__webglFramebuffer[pt],C,S,i.COLOR_ATTACHMENT0,ut,pt);else Q($.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ut,0);_(S,Dt)&&M(ut),e.unbindTexture()}C.depthBuffer&&Tt(C)}function yt(C){let S=m(C)||o,$=C.textures;for(let j=0,it=$.length;j<it;j++){let nt=$[j];if(_(nt,S)){let Ht=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(nt).__webglTexture;e.bindTexture(Ht,Dt),M(Ht),e.unbindTexture()}}}function Pt(C){if(o&&C.samples>0&&Qt(C)===!1){let S=C.textures,$=C.width,j=C.height,it=i.COLOR_BUFFER_BIT,nt=[],Ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(C),ut=S.length>1;if(ut)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){nt.push(i.COLOR_ATTACHMENT0+pt),C.depthBuffer&&nt.push(Ht);let Gt=Dt.__ignoreDepthValues!==void 0?Dt.__ignoreDepthValues:!1;if(Gt===!1&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[pt]),Gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ht]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ht])),ut){let rt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,$,j,0,0,$,j,it,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[pt]);let Gt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}}function St(C){return Math.min(s.maxSamples,C.samples)}function Qt(C){let S=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function $t(C){let S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Zt(C,S){let $=C.colorSpace,j=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ol||$!==Di&&$!==wi&&(ce.getTransfer($)===me?o===!1?t.has("EXT_sRGB")===!0&&j===Nn?(C.format=Ol,C.minFilter=tn,C.generateMipmaps=!1):S=zo.sRGBToLinear(S):(j!==Nn||it!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),S}function Ae(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=N,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Qt}function Kx(i,t,e){let n=e.isWebGL2;function s(r,a=wi){let o,c=ce.getTransfer(a);if(r===Ri)return i.UNSIGNED_BYTE;if(r===Ku)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ju)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vf)return i.BYTE;if(r===Wf)return i.SHORT;if(r===Rc)return i.UNSIGNED_SHORT;if(r===Ju)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===Xn)return i.FLOAT;if(r===Mr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xf)return i.ALPHA;if(r===Nn)return i.RGBA;if(r===qf)return i.LUMINANCE;if(r===$f)return i.LUMINANCE_ALPHA;if(r===Ji)return i.DEPTH_COMPONENT;if(r===Ds)return i.DEPTH_STENCIL;if(r===Ol)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qu)return i.RED;if(r===td)return i.RED_INTEGER;if(r===Yf)return i.RG;if(r===ed)return i.RG_INTEGER;if(r===nd)return i.RGBA_INTEGER;if(r===Za||r===Ja||r===Ka||r===ja)if(c===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ja)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yh||r===Mh||r===bh||r===Sh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wh||r===Eh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===wh)return c===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Eh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh||r===Nh||r===zh||r===Fh||r===Oh||r===Bh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Th)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ih)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bh)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qa||r===kh||r===Hh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Qa)return c===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zf||r===Gh||r===Vh||r===Wh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Qa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Gh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var jl=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},an=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},jx={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),m=this._getHandJoint(l,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new Yn({extensions:{fragDepth:!0},vertexShader:Qx,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new We(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},tc=class extends Pi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=new Ql,f=e.getContextAttributes(),m=null,y=null,_=[],M=[],R=new ot,T=null,w=new en;w.layers.enable(1),w.viewport=new Ge;let E=new en;E.layers.enable(2),E.viewport=new Ge;let P=[w,E],v=new jl;v.layers.enable(1),v.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=_[X];return tt===void 0&&(tt=new gr,_[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=_[X];return tt===void 0&&(tt=new gr,_[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=_[X];return tt===void 0&&(tt=new gr,_[X]=tt),tt.getHandSpace()};function O(X){let tt=M.indexOf(X.inputSource);if(tt===-1)return;let xt=_[tt];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let X=0;X<_.length;X++){let tt=M[X];tt!==null&&(M[X]=null,_[X].disconnect(tt))}b=null,D=null,x.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new hi(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let tt=null,xt=null,K=null;f.depth&&(K=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=f.stencil?Ds:Ji,xt=f.stencil?Zi:Ei);let Q={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new hi(d.textureWidth,d.textureHeight,{format:Nn,type:Ri,depthTexture:new Wo(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});let ht=t.properties.get(y);ht.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(X){for(let tt=0;tt<X.removed.length;tt++){let xt=X.removed[tt],K=M.indexOf(xt);K>=0&&(M[K]=null,_[K].disconnect(xt))}for(let tt=0;tt<X.added.length;tt++){let xt=X.added[tt],K=M.indexOf(xt);if(K===-1){for(let ht=0;ht<_.length;ht++)if(ht>=M.length){M.push(xt),K=ht;break}else if(M[ht]===null){M[ht]=xt,K=ht;break}if(K===-1)break}let Q=_[K];Q&&Q.connect(xt)}}let F=new I,Z=new I;function q(X,tt,xt){F.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);let K=F.distanceTo(Z),Q=tt.projectionMatrix.elements,ht=xt.projectionMatrix.elements,Mt=Q[14]/(Q[10]-1),Tt=Q[14]/(Q[10]+1),N=(Q[9]+1)/Q[5],oe=(Q[9]-1)/Q[5],yt=(Q[8]-1)/Q[0],Pt=(ht[8]+1)/ht[0],St=Mt*yt,Qt=Mt*Pt,$t=K/(-yt+Pt),Zt=$t*-yt;tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Zt),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let Ae=Mt+$t,C=Tt+$t,S=St-Zt,$=Qt+(K-Zt),j=N*Tt/C*Ae,it=oe*Tt/C*Ae;X.projectionMatrix.makePerspective(S,$,j,it,Ae,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;x.texture!==null&&(X.near=x.depthNear,X.far=x.depthFar),v.near=E.near=w.near=X.near,v.far=E.far=w.far=X.far,(b!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,D=v.far,w.near=b,w.far=D,E.near=b,E.far=D,w.updateProjectionMatrix(),E.updateProjectionMatrix(),X.updateProjectionMatrix());let tt=X.parent,xt=v.cameras;J(v,tt);for(let K=0;K<xt.length;K++)J(xt[K],tt);xt.length===2?q(v,w,E):v.projectionMatrix.copy(w.projectionMatrix),et(X,v,tt)};function et(X,tt,xt){xt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Uo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null};let st=null;function vt(X,tt){if(h=tt.getViewerPose(l||a),g=tt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let K=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,K=!0);for(let ht=0;ht<xt.length;ht++){let Mt=xt[ht],Tt=null;if(p!==null)Tt=p.getViewport(Mt);else{let oe=u.getViewSubImage(d,Mt);Tt=oe.viewport,ht===0&&(t.setRenderTargetTextures(y,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(y))}let N=P[ht];N===void 0&&(N=new en,N.layers.enable(ht),N.viewport=new Ge,P[ht]=N),N.matrix.fromArray(Mt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Mt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ht===0&&(v.matrix.copy(N.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),K===!0&&v.cameras.push(N)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let ht=u.getDepthInformation(xt[0]);ht&&ht.isValid&&ht.texture&&x.init(t,ht,s.renderState)}}for(let xt=0;xt<_.length;xt++){let K=M[xt],Q=_[xt];K!==null&&Q!==void 0&&Q.update(K,tt,l||a)}x.render(t,v),st&&st(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Nt=new cd;Nt.setAnimationLoop(vt),this.setAnimationLoop=function(X){st=X},this.dispose=function(){}}},Wi=new fn,e_=new he;function n_(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,ld(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,y,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),x(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,y,_):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ve&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ve&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y=t.get(m),_=y.envMap,M=y.envMapRotation;if(_&&(f.envMap.value=_,Wi.copy(M),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),f.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Wi)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let R=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,y,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=_*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),t.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){let y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let M=_.program;n.uniformBlockBinding(y,M)}function l(y,_){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",f));let R=_.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let _=u();y.__bindingPointIndex=_;let M=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,w=M.length;T<w;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let P=0,v=E.length;P<v;P++){let b=E[P];if(p(b,T,P,R)===!0){let D=b.__offset,O=Array.isArray(b.value)?b.value:[b.value],L=0;for(let B=0;B<O.length;B++){let F=O[B],Z=x(F);typeof F=="number"||typeof F=="boolean"?(b.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+L,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=0,b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=0,b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=0):(F.toArray(b.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,_,M,R){let T=y.value,w=_+"_"+M;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{let E=R[w];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return R[w]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(y){let _=y.uniforms,M=0,R=16;for(let w=0,E=_.length;w<E;w++){let P=Array.isArray(_[w])?_[w]:[_[w]];for(let v=0,b=P.length;v<b;v++){let D=P[v],O=Array.isArray(D.value)?D.value:[D.value];for(let L=0,B=O.length;L<B;L++){let F=O[L],Z=x(F),q=M%R;q!==0&&R-q<Z.boundary&&(M+=R-q),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Z.storage}}}let T=M%R;return T>0&&(M+=R-T),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){let _=y.target;_.removeEventListener("dispose",f);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Sr=class{constructor(t={}){let{canvas:e=ap(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,f=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;let _=this,M=!1,R=0,T=0,w=null,E=-1,P=null,v=new Ge,b=new Ge,D=null,O=new dt(0),L=0,B=e.width,F=e.height,Z=1,q=null,J=null,et=new Ge(0,0,B,F),st=new Ge(0,0,B,F),vt=!1,Nt=new br,X=!1,tt=!1,xt=null,K=new he,Q=new ot,ht=new I,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return w===null?Z:1}let N=n;function oe(A,z){for(let V=0;V<A.length;V++){let W=A[V],H=e.getContext(W,z);if(H!==null)return H}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),N=oe(z,A),N===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let yt,Pt,St,Qt,$t,Zt,Ae,C,S,$,j,it,nt,Ht,Dt,ut,pt,Gt,rt,Le,Jt,Ct,bt,wt;function te(){yt=new vg(N),Pt=new fg(N,yt,t),yt.init(Pt),Ct=new Kx(N,yt,Pt),St=new Zx(N,yt,Pt),Qt=new bg(N),$t=new Fx,Zt=new Jx(N,yt,St,$t,Pt,Ct,Qt),Ae=new mg(_),C=new _g(_),S=new Rp(N,Pt),bt=new ug(N,yt,S,Pt),$=new yg(N,S,Qt,bt),j=new Tg(N,$,S,Qt),rt=new Eg(N,Pt,Zt),ut=new pg($t),it=new zx(_,Ae,C,yt,Pt,bt,ut),nt=new n_(_,$t),Ht=new Bx,Dt=new Xx(yt,Pt),Gt=new hg(_,Ae,C,St,j,d,c),pt=new Yx(_,j,Pt),wt=new i_(N,Qt,Pt,St),Le=new dg(N,yt,Qt,Pt),Jt=new Mg(N,yt,Qt,Pt),Qt.programs=it.programs,_.capabilities=Pt,_.extensions=yt,_.properties=$t,_.renderLists=Ht,_.shadowMap=pt,_.state=St,_.info=Qt}te();let Ot=new tc(_,N);this.xr=Ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(B,F,!1))},this.getSize=function(A){return A.set(B,F)},this.setSize=function(A,z,V=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,F=z,e.width=Math.floor(A*Z),e.height=Math.floor(z*Z),V===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(B*Z,F*Z).floor()},this.setDrawingBufferSize=function(A,z,V){B=A,F=z,Z=V,e.width=Math.floor(A*V),e.height=Math.floor(z*V),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,z,V,W){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,z,V,W),St.viewport(v.copy(et).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,z,V,W){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,z,V,W),St.scissor(b.copy(st).multiplyScalar(Z).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(A){St.setScissorTest(vt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(A=!0,z=!0,V=!0){let W=0;if(A){let H=!1;if(w!==null){let _t=w.texture.format;H=_t===nd||_t===ed||_t===td}if(H){let _t=w.texture.type,Et=_t===Ri||_t===Ei||_t===Rc||_t===Zi||_t===Ku||_t===ju,Lt=Gt.getClearColor(),Ut=Gt.getClearAlpha(),Yt=Lt.r,zt=Lt.g,Bt=Lt.b;Et?(p[0]=Yt,p[1]=zt,p[2]=Bt,p[3]=Ut,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Yt,g[1]=zt,g[2]=Bt,g[3]=Ut,N.clearBufferiv(N.COLOR,0,g))}else W|=N.COLOR_BUFFER_BIT}z&&(W|=N.DEPTH_BUFFER_BIT),V&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ht.dispose(),Dt.dispose(),$t.dispose(),Ae.dispose(),C.dispose(),j.dispose(),bt.dispose(),wt.dispose(),it.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",En),Ot.removeEventListener("sessionend",pe),xt&&(xt.dispose(),xt=null),sn.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Qt.autoReset,z=pt.enabled,V=pt.autoUpdate,W=pt.needsUpdate,H=pt.type;te(),Qt.autoReset=A,pt.enabled=z,pt.autoUpdate=V,pt.needsUpdate=W,pt.type=H}function ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function G(A){let z=A.target;z.removeEventListener("dispose",G),lt(z)}function lt(A){mt(A),$t.remove(A)}function mt(A){let z=$t.get(A).programs;z!==void 0&&(z.forEach(function(V){it.releaseProgram(V)}),A.isShaderMaterial&&it.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,V,W,H,_t){z===null&&(z=Mt);let Et=H.isMesh&&H.matrixWorld.determinant()<0,Lt=tf(A,z,V,W,H);St.setMaterial(W,Et);let Ut=V.index,Yt=1;if(W.wireframe===!0){if(Ut=$.getWireframeAttribute(V),Ut===void 0)return;Yt=2}let zt=V.drawRange,Bt=V.attributes.position,Re=zt.start*Yt,xn=(zt.start+zt.count)*Yt;_t!==null&&(Re=Math.max(Re,_t.start*Yt),xn=Math.min(xn,(_t.start+_t.count)*Yt)),Ut!==null?(Re=Math.max(Re,0),xn=Math.min(xn,Ut.count)):Bt!=null&&(Re=Math.max(Re,0),xn=Math.min(xn,Bt.count));let Be=xn-Re;if(Be<0||Be===1/0)return;bt.setup(H,W,Lt,V,Ut);let Qn,ye=Le;if(Ut!==null&&(Qn=S.get(Ut),ye=Jt,ye.setIndex(Qn)),H.isMesh)W.wireframe===!0?(St.setLineWidth(W.wireframeLinewidth*Tt()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(H.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),St.setLineWidth(Vt*Tt()),H.isLineSegments?ye.setMode(N.LINES):H.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else H.isPoints?ye.setMode(N.POINTS):H.isSprite&&ye.setMode(N.TRIANGLES);if(H.isBatchedMesh)ye.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ye.renderInstances(Re,Be,H.count);else if(V.isInstancedBufferGeometry){let Vt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Wa=Math.min(V.instanceCount,Vt);ye.renderInstances(Re,Be,Wa)}else ye.render(Re,Be)};function Kt(A,z,V){A.transparent===!0&&A.side===Me&&A.forceSinglePass===!1?(A.side=Ve,A.needsUpdate=!0,Yr(A,z,V),A.side=Ci,A.needsUpdate=!0,Yr(A,z,V),A.side=Me):Yr(A,z,V)}this.compile=function(A,z,V=null){V===null&&(V=A),f=Dt.get(V),f.init(),y.push(f),V.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),A!==V&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(_._useLegacyLights);let W=new Set;return A.traverse(function(H){let _t=H.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){let Lt=_t[Et];Kt(Lt,V,H),W.add(Lt)}else Kt(_t,V,H),W.add(_t)}),y.pop(),f=null,W},this.compileAsync=function(A,z,V=null){let W=this.compile(A,z,V);return new Promise(H=>{function _t(){if(W.forEach(function(Et){$t.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){H(A);return}setTimeout(_t,10)}yt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let fe=null;function qe(A){fe&&fe(A)}function En(){sn.stop()}function pe(){sn.start()}let sn=new cd;sn.setAnimationLoop(qe),typeof self!="undefined"&&sn.setContext(self),this.setAnimationLoop=function(A){fe=A,Ot.setAnimationLoop(A),A===null?sn.stop():sn.start()},Ot.addEventListener("sessionstart",En),Ot.addEventListener("sessionend",pe),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(z),z=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,z,w),f=Dt.get(A,y.length),f.init(),y.push(f),K.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Nt.setFromProjectionMatrix(K),tt=this.localClippingEnabled,X=ut.init(this.clippingPlanes,tt),x=Ht.get(A,m.length),x.init(),m.push(x),Vn(A,z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,J),this.info.render.frame++,X===!0&&ut.beginShadows();let V=f.state.shadowsArray;if(pt.render(V,A,z),X===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1)&&Gt.render(x,A),f.setupLights(_._useLegacyLights),z.isArrayCamera){let W=z.cameras;for(let H=0,_t=W.length;H<_t;H++){let Et=W[H];oh(x,A,Et,Et.viewport)}}else oh(x,A,z);w!==null&&(Zt.updateMultisampleRenderTarget(w),Zt.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,z),bt.resetDefaultState(),E=-1,P=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Vn(A,z,V,W){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Nt.intersectsSprite(A)){W&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);let Et=j.update(A),Lt=A.material;Lt.visible&&x.push(A,Et,Lt,V,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Nt.intersectsObject(A))){let Et=j.update(A),Lt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ht.copy(Et.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Lt)){let Ut=Et.groups;for(let Yt=0,zt=Ut.length;Yt<zt;Yt++){let Bt=Ut[Yt],Re=Lt[Bt.materialIndex];Re&&Re.visible&&x.push(A,Et,Re,V,ht.z,Bt)}}else Lt.visible&&x.push(A,Et,Lt,V,ht.z,null)}}let _t=A.children;for(let Et=0,Lt=_t.length;Et<Lt;Et++)Vn(_t[Et],z,V,W)}function oh(A,z,V,W){let H=A.opaque,_t=A.transmissive,Et=A.transparent;f.setupLightsView(V),X===!0&&ut.setGlobalState(_.clippingPlanes,V),_t.length>0&&Qd(H,_t,z,V),W&&St.viewport(v.copy(W)),H.length>0&&$r(H,z,V),_t.length>0&&$r(_t,z,V),Et.length>0&&$r(Et,z,V),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Qd(A,z,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let _t=Pt.isWebGL2;xt===null&&(xt=new hi(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Mr:Ri,minFilter:ai,samples:_t?4:0})),_.getDrawingBufferSize(Q),_t?xt.setSize(Q.x,Q.y):xt.setSize(Bl(Q.x),Bl(Q.y));let Et=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(O),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Lt=_.toneMapping;_.toneMapping=Ai,$r(A,V,W),Zt.updateMultisampleRenderTarget(xt),Zt.updateRenderTargetMipmap(xt);let Ut=!1;for(let Yt=0,zt=z.length;Yt<zt;Yt++){let Bt=z[Yt],Re=Bt.object,xn=Bt.geometry,Be=Bt.material,Qn=Bt.group;if(Be.side===Me&&Re.layers.test(W.layers)){let ye=Be.side;Be.side=Ve,Be.needsUpdate=!0,ah(Re,V,W,xn,Be,Qn),Be.side=ye,Be.needsUpdate=!0,Ut=!0}}Ut===!0&&(Zt.updateMultisampleRenderTarget(xt),Zt.updateRenderTargetMipmap(xt)),_.setRenderTarget(Et),_.setClearColor(O,L),_.toneMapping=Lt}function $r(A,z,V){let W=z.isScene===!0?z.overrideMaterial:null;for(let H=0,_t=A.length;H<_t;H++){let Et=A[H],Lt=Et.object,Ut=Et.geometry,Yt=W===null?Et.material:W,zt=Et.group;Lt.layers.test(V.layers)&&ah(Lt,z,V,Ut,Yt,zt)}}function ah(A,z,V,W,H,_t){A.onBeforeRender(_,z,V,W,H,_t),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,z,V,W,A,_t),H.transparent===!0&&H.side===Me&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,_.renderBufferDirect(V,z,W,H,A,_t),H.side=Ci,H.needsUpdate=!0,_.renderBufferDirect(V,z,W,H,A,_t),H.side=Me):_.renderBufferDirect(V,z,W,H,A,_t),A.onAfterRender(_,z,V,W,H,_t)}function Yr(A,z,V){z.isScene!==!0&&(z=Mt);let W=$t.get(A),H=f.state.lights,_t=f.state.shadowsArray,Et=H.state.version,Lt=it.getParameters(A,H.state,_t,z,V),Ut=it.getProgramCacheKey(Lt),Yt=W.programs;W.environment=A.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(A.isMeshStandardMaterial?C:Ae).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",G),Yt=new Map,W.programs=Yt);let zt=Yt.get(Ut);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===Et)return ch(A,Lt),zt}else Lt.uniforms=it.getUniforms(A),A.onBuild(V,Lt,_),A.onBeforeCompile(Lt,_),zt=it.acquireProgram(Lt,Ut),Yt.set(Ut,zt),W.uniforms=Lt.uniforms;let Bt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=ut.uniform),ch(A,Lt),W.needsLights=nf(A),W.lightsStateVersion=Et,W.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function lh(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ps.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ch(A,z){let V=$t.get(A);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function tf(A,z,V,W,H){z.isScene!==!0&&(z=Mt),Zt.resetTextureUnits();let _t=z.fog,Et=W.isMeshStandardMaterial?z.environment:null,Lt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Di,Ut=(W.isMeshStandardMaterial?C:Ae).get(W.envMap||Et),Yt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!V.morphAttributes.position,Re=!!V.morphAttributes.normal,xn=!!V.morphAttributes.color,Be=Ai;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Be=_.toneMapping);let Qn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ye=Qn!==void 0?Qn.length:0,Vt=$t.get(W),Wa=f.state.lights;if(X===!0&&(tt===!0||A!==P)){let Tn=A===P&&W.id===E;ut.setState(W,A,Tn)}let _e=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Wa.state.version||Vt.outputColorSpace!==Lt||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==Ut||W.fog===!0&&Vt.fog!==_t||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ut.numPlanes||Vt.numIntersection!==ut.numIntersection)||Vt.vertexAlphas!==Yt||Vt.vertexTangents!==zt||Vt.morphTargets!==Bt||Vt.morphNormals!==Re||Vt.morphColors!==xn||Vt.toneMapping!==Be||Pt.isWebGL2===!0&&Vt.morphTargetsCount!==ye)&&(_e=!0):(_e=!0,Vt.__version=W.version);let Fi=Vt.currentProgram;_e===!0&&(Fi=Yr(W,z,H));let hh=!1,rr=!1,Xa=!1,Ke=Fi.getUniforms(),Oi=Vt.uniforms;if(St.useProgram(Fi.program)&&(hh=!0,rr=!0,Xa=!0),W.id!==E&&(E=W.id,rr=!0),hh||P!==A){Ke.setValue(N,"projectionMatrix",A.projectionMatrix),Ke.setValue(N,"viewMatrix",A.matrixWorldInverse);let Tn=Ke.map.cameraPosition;Tn!==void 0&&Tn.setValue(N,ht.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&Ke.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ke.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,rr=!0,Xa=!0)}if(H.isSkinnedMesh){Ke.setOptional(N,H,"bindMatrix"),Ke.setOptional(N,H,"bindMatrixInverse");let Tn=H.skeleton;Tn&&(Pt.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ke.setValue(N,"boneTexture",Tn.boneTexture,Zt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ke.setOptional(N,H,"batchingTexture"),Ke.setValue(N,"batchingTexture",H._matricesTexture,Zt));let qa=V.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0&&Pt.isWebGL2===!0)&&rt.update(H,V,Fi),(rr||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,Ke.setValue(N,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Oi.envMap.value=Ut,Oi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),rr&&(Ke.setValue(N,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&ef(Oi,Xa),_t&&W.fog===!0&&nt.refreshFogUniforms(Oi,_t),nt.refreshMaterialUniforms(Oi,W,Z,F,xt),Ps.upload(N,lh(Vt),Oi,Zt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ps.upload(N,lh(Vt),Oi,Zt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ke.setValue(N,"center",H.center),Ke.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ke.setValue(N,"normalMatrix",H.normalMatrix),Ke.setValue(N,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Tn=W.uniformsGroups;for(let $a=0,sf=Tn.length;$a<sf;$a++)if(Pt.isWebGL2){let uh=Tn[$a];wt.update(uh,Fi),wt.bind(uh,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function ef(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,V){$t.get(A.texture).__webglTexture=z,$t.get(A.depthTexture).__webglTexture=V;let W=$t.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){let V=$t.get(A);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,V=0){w=A,R=z,T=V;let W=!0,H=null,_t=!1,Et=!1;if(A){let Ut=$t.get(A);Ut.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(N.FRAMEBUFFER,null),W=!1):Ut.__webglFramebuffer===void 0?Zt.setupRenderTarget(A):Ut.__hasExternalTextures&&Zt.rebindTextures(A,$t.get(A.texture).__webglTexture,$t.get(A.depthTexture).__webglTexture);let Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Et=!0);let zt=$t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?H=zt[z][V]:H=zt[z],_t=!0):Pt.isWebGL2&&A.samples>0&&Zt.useMultisampledRTT(A)===!1?H=$t.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?H=zt[V]:H=zt,v.copy(A.viewport),b.copy(A.scissor),D=A.scissorTest}else v.copy(et).multiplyScalar(Z).floor(),b.copy(st).multiplyScalar(Z).floor(),D=vt;if(St.bindFramebuffer(N.FRAMEBUFFER,H)&&Pt.drawBuffers&&W&&St.drawBuffers(A,H),St.viewport(v),St.scissor(b),St.setScissorTest(D),_t){let Ut=$t.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ut.__webglTexture,V)}else if(Et){let Ut=$t.get(A.texture),Yt=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,Yt)}E=-1},this.readRenderTargetPixels=function(A,z,V,W,H,_t,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){St.bindFramebuffer(N.FRAMEBUFFER,Lt);try{let Ut=A.texture,Yt=Ut.format,zt=Ut.type;if(Yt!==Nn&&Ct.convert(Yt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Bt=zt===Mr&&(yt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(zt!==Ri&&Ct.convert(zt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Xn&&(Pt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-W&&V>=0&&V<=A.height-H&&N.readPixels(z,V,W,H,Ct.convert(Yt),Ct.convert(zt),_t)}finally{let Ut=w!==null?$t.get(w).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(A,z,V=0){let W=Math.pow(2,-V),H=Math.floor(z.image.width*W),_t=Math.floor(z.image.height*W);Zt.setTexture2D(z,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,A.x,A.y,H,_t),St.unbindTexture()},this.copyTextureToTexture=function(A,z,V,W=0){let H=z.image.width,_t=z.image.height,Et=Ct.convert(V.format),Lt=Ct.convert(V.type);Zt.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),z.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,A.x,A.y,H,_t,Et,Lt,z.image.data):z.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Et,z.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,W,A.x,A.y,Et,Lt,z.image),W===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(A,z,V,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=Math.round(A.max.x-A.min.x),Et=Math.round(A.max.y-A.min.y),Lt=A.max.z-A.min.z+1,Ut=Ct.convert(W.format),Yt=Ct.convert(W.type),zt;if(W.isData3DTexture)Zt.setTexture3D(W,0),zt=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Zt.setTexture2DArray(W,0),zt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let Bt=N.getParameter(N.UNPACK_ROW_LENGTH),Re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),xn=N.getParameter(N.UNPACK_SKIP_PIXELS),Be=N.getParameter(N.UNPACK_SKIP_ROWS),Qn=N.getParameter(N.UNPACK_SKIP_IMAGES),ye=V.isCompressedTexture?V.mipmaps[H]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(zt,H,z.x,z.y,z.z,_t,Et,Lt,Ut,Yt,ye.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,H,z.x,z.y,z.z,_t,Et,Lt,Ut,ye.data):N.texSubImage3D(zt,H,z.x,z.y,z.z,_t,Et,Lt,Ut,Yt,ye),N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qn),H===0&&W.generateMipmaps&&N.generateMipmap(zt),St.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Zt.setTextureCube(A,0):A.isData3DTexture?Zt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Zt.setTexture2DArray(A,0):Zt.setTexture2D(A,0),St.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,St.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Cc?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===pa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ec=class extends Sr{};ec.prototype.isWebGL1Renderer=!0;var Xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},nc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return od("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new I,qo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Os=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,ur=new I,Ms=new I,bs=new I,Ss=new ot,dr=new ot,md=new he,xo=new I,fr=new I,_o=new I,zu=new ot,Al=new ot,Fu=new ot,Bs=class extends Ce{constructor(t=new Os){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nc(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new qo(n,3,0,!1)),ys.setAttribute("uv",new qo(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;vo(xo.set(-.5,-.5,0),bs,a,Ms,s,r),vo(fr.set(.5,-.5,0),bs,a,Ms,s,r),vo(_o.set(.5,.5,0),bs,a,Ms,s,r),zu.set(0,0),Al.set(1,0),Fu.set(1,1);let o=t.ray.intersectTriangle(xo,fr,_o,!1,ur);if(o===null&&(vo(fr.set(-.5,.5,0),bs,a,Ms,s,r),Al.set(0,1),o=t.ray.intersectTriangle(xo,_o,fr,!1,ur),o===null))return;let c=t.ray.origin.distanceTo(ur);c<t.near||c>t.far||e.push({distance:c,point:ur.clone(),uv:Yi.getInterpolation(ur,xo,fr,_o,zu,Al,Fu,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vo(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(dr.x=r*Ss.x-s*Ss.y,dr.y=s*Ss.x+r*Ss.y):dr.copy(Ss),i.copy(t),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(md)}var ic=class extends dn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=$e,h=$e,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $o=class extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new he,Ou=new he,yo=[],Bu=new ui,s_=new he,pr=new Xt,mr=new Li,Zn=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,s_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Bu.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),mr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Ou.multiplyMatrices(n,ws),pr.matrixWorld=Ou,pr.raycast(t,yo);for(let a=0,o=yo.length;a<o;a++){let c=yo[a];c.instanceId=r,c.object=this,e.push(c)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ic(new Float32Array(s*this.count),s,this.count,Qu,Xn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Er=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ku=new he,sc=new Bo,Mo=new Li,bo=new I,Yo=class extends Ce{constructor(t=new De,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;ku.copy(s).invert(),sc.copy(t.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,x=p;g<x;g++){let f=l.getX(g);bo.fromBufferAttribute(u,f),Hu(bo,f,c,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)bo.fromBufferAttribute(u,g),Hu(bo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hu(i,t,e,n,s,r,a){let o=sc.distanceSqToPoint(i);if(o<e){let c=new I;sc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Zo=class extends dn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ot:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,c=new he;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(He(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Tr=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rc=class extends Tr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var So=new I,Rl=new Lc,Cl=new Lc,Pl=new Lc,Ar=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),l=So);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),Rl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,f),Cl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,f),Pl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Cl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Pl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Rl.calc(c),Cl.calc(c),Pl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function r_(i,t){let e=1-i;return e*e*t}function o_(i,t){return 2*(1-i)*i*t}function a_(i,t){return i*i*t}function xr(i,t,e,n){return r_(i,t)+o_(i,e)+a_(i,n)}function l_(i,t){let e=1-i;return e*e*e*t}function c_(i,t){let e=1-i;return 3*e*e*i*t}function h_(i,t){return 3*(1-i)*i*i*t}function u_(i,t){return i*i*i*t}function _r(i,t,e,n,s){return l_(i,t)+c_(i,e)+h_(i,n)+u_(i,s)}var Jo=class extends Cn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oc=class extends Cn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y),_r(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends Cn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends Cn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends Cn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lc=class extends Cn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y),xr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Gu(o,c.x,l.x,h.x,u.x),Gu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Vu=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:Ar,CubicBezierCurve:Jo,CubicBezierCurve3:oc,EllipseCurve:Tr,LineCurve:Ko,LineCurve3:ac,QuadraticBezierCurve:jo,QuadraticBezierCurve3:lc,SplineCurve:Qo}),cc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vu[s.type]().fromJSON(s))}return this}},ta=class extends cc{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ko(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new jo(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Jo(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Tr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rr=class i extends De{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new I,d=new ot,p=new I,g=new I,x=new I,f=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,M=Math.sin(_),R=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);let w=c[3*T+0]*M,E=c[3*T+1],P=c[3*T+0]*R;l.push(w,E,P)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let M=_+y*t.length,R=M,T=M+t.length,w=M+t.length+1,E=M+1;r.push(R,T,E),r.push(w,E,T)}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("uv",new kt(o,2)),this.setAttribute("normal",new kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ea=class i extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mn=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],f=n/2,m=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2));function y(){let M=new I,R=new I,T=0,w=(e-t)/n;for(let E=0;E<=r;E++){let P=[],v=E/r,b=v*(e-t)+t;for(let D=0;D<=s;D++){let O=D/s,L=O*c+o,B=Math.sin(L),F=Math.cos(L);R.x=b*B,R.y=-v*n+f,R.z=b*F,u.push(R.x,R.y,R.z),M.set(B,w,F).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-v),P.push(g++)}x.push(P)}for(let E=0;E<s;E++)for(let P=0;P<r;P++){let v=x[P][E],b=x[P+1][E],D=x[P+1][E+1],O=x[P][E+1];h.push(v,b,O),h.push(b,D,O),T+=6}l.addGroup(m,T,0),m+=T}function _(M){let R=g,T=new ot,w=new I,E=0,P=M===!0?t:e,v=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,f*v,0),d.push(0,v,0),p.push(.5,.5),g++;let b=g;for(let D=0;D<=s;D++){let L=D/s*c+o,B=Math.cos(L),F=Math.sin(L);w.x=P*F,w.y=f*v,w.z=P*B,u.push(w.x,w.y,w.z),d.push(0,v,0),T.x=B*.5+.5,T.y=F*.5*v+.5,p.push(T.x,T.y),g++}for(let D=0;D<s;D++){let O=R+D,L=b+D;M===!0?h.push(L,L+1,O):h.push(L+1,L,O),E+=3}l.addGroup(m,E,M===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ii=class i extends Mn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hc=class i extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new I,M=new I,R=new I;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],M),p(e[T+2],R),c(_,M,R,y)}function c(y,_,M,R){let T=R+1,w=[];for(let E=0;E<=T;E++){w[E]=[];let P=y.clone().lerp(M,E/T),v=_.clone().lerp(M,E/T),b=T-E;for(let D=0;D<=b;D++)D===0&&E===T?w[E][D]=P:w[E][D]=P.clone().lerp(v,D/b)}for(let E=0;E<T;E++)for(let P=0;P<2*(T-E)-1;P++){let v=Math.floor(P/2);P%2===0?(d(w[E][v+1]),d(w[E+1][v]),d(w[E][v])):(d(w[E][v+1]),d(w[E+1][v+1]),d(w[E+1][v]))}}function l(y){let _=new I;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let y=new I;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let M=f(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;a.push(M,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],M=a[y+2],R=a[y+4],T=Math.max(_,M,R),w=Math.min(_,M,R);T>.9&&w<.1&&(_<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,_){let M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let y=new I,_=new I,M=new I,R=new I,T=new ot,w=new ot,E=new ot;for(let P=0,v=0;P<r.length;P+=9,v+=6){y.set(r[P+0],r[P+1],r[P+2]),_.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),T.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),E.set(a[v+4],a[v+5]),R.copy(y).add(_).add(M).divideScalar(3);let b=f(R);x(T,v+0,y,b),x(w,v+2,_,b),x(E,v+4,M,b)}}function x(y,_,M,R){R<0&&y.x===1&&(a[_]=y.x-1),M.x===0&&M.z===0&&(a[_]=R/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Cr=class extends ta{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ta().fromJSON(s))}return this}},d_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=x_(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Pr(r,a,e,o,c,p,0),a}};function gd(i,t,e,n,s){let r,a;if(s===R_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Wu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Wu(r,i[r],i[r+1],a);return a&&ga(a,a.next)&&(Ir(a),a=a.next),a}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ga(e,e.next)||be(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&b_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?p_(i,n,s,r):f_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ir(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=m_(Ki(i),t,e),Pr(i,t,e,n,s,r,2)):a===2&&g_(i,t,e,n,s,r):Pr(Ki(i),t,e,n,s,r,1);break}}}function f_(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&As(s,o,r,c,a,l,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function p_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=o>c?o>l?o:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,m=uc(p,g,t,e,n),y=uc(x,f,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=m&&M&&M.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&As(o,h,c,u,l,d,_.x,_.y)&&be(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&As(o,h,c,u,l,d,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&As(o,h,c,u,l,d,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&As(o,h,c,u,l,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function m_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ga(s,r)&&xd(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function g_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E_(a,o)){let c=_d(a,o);a=Ki(a,a.next),c=Ki(c,c.next),Pr(a,t,e,n,s,r,0),Pr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function x_(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=gd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(w_(l));for(s.sort(__),r=0;r<s.length;r++)e=v_(s[r],e);return e}function __(i,t){return i.x-t.x}function v_(i,t){let e=y_(i,t);if(!e)return t;let n=_d(e,i);return Ki(n,n.next),Ki(e,e.next)}function y_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&As(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Lr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&M_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function M_(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function b_(i,t,e,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S_(s)}function S_(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function w_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function As(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function E_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!T_(i,t)&&(Lr(i,t)&&Lr(t,i)&&A_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||ga(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ga(i,t){return i.x===t.x&&i.y===t.y}function xd(i,t,e,n){let s=Eo(be(i,t,e)),r=Eo(be(i,t,n)),a=Eo(be(e,n,i)),o=Eo(be(e,n,t));return!!(s!==r&&a!==o||s===0&&wo(i,e,t)||r===0&&wo(i,n,t)||a===0&&wo(e,i,n)||o===0&&wo(e,t,n))}function wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Eo(i){return i>0?1:i<0?-1:0}function T_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function A_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _d(i,t){let e=new dc(i.i,i.x,i.y),n=new dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wu(i,t,e,n){let s=new dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xu(t),qu(n,t);let a=t.length;e.forEach(Xu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,qu(n,e[c]);let o=d_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Xu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var na=class i extends hc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ia=class i extends De{constructor(t=new Cr([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(r,3)),this.setAttribute("uv",new kt(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;vr.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let y=g[f];vr.isClockWise(y)===!0&&(g[f]=y.reverse())}let x=vr.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let y=g[f];p=p.concat(y)}for(let f=0,m=p.length;f<m;f++){let y=p[f];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let f=0,m=x.length;f<m;f++){let y=x[f],_=y[0]+u,M=y[1]+u,R=y[2]+u;n.push(_,M,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return C_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function C_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Jn=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){let y=[],_=m/n,M=0;m===0&&a===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(T+M,1-_),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let _=h[m][y+1],M=h[m][y],R=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&p.push(_,M,T),(m!==n-1||c<Math.PI)&&p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sa=class i extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(x),u.y=(t+e*Math.cos(f))*Math.sin(x),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(x,f,y),a.push(f,m,y)}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ks=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ra=class extends ks{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},bn=class extends zn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new dt(16777215),this.specular=new dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var mn=class extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function To(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function P_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=t,o=2*e-n;break;case $h:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:a=t,c=2*n-e;break;case $h:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,f=x*g,m=-d*f+2*d*x-d*g,y=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*f+(1.5+p)*x+.5*g,M=p*f-p*x;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+y*a[l+R]+_*a[c+R]+M*a[u+R];return r}},pc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},mc=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=To(e,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:To(t.times,Array),values:To(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ro:e=this.InterpolantFactoryMethodDiscrete;break;case Co:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&P_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Co;var ji=class extends Fn{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ro;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends Fn{};gc.prototype.ValueTypeName="color";var xc=class extends Fn{};xc.prototype.ValueTypeName="number";var _c=class extends Hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)$n.slerpFlat(r,0,a,l-o,a,l,c);return r}},Dr=class extends Fn{InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Co;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Fn{};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ro;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends Fn{};vc.prototype.ValueTypeName="vector";var yc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},L_=new yc,Mc=class{constructor(t){this.manager=t!==void 0?t:L_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},oa=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ll=new he,$u=new I,Yu=new I,aa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$u.setFromMatrixPosition(t.matrixWorld),e.position.copy($u),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bc=class extends aa{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Uo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},la=class extends Ur{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sc=class extends aa{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ca=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ic="\\[\\]\\.:\\/",I_=new RegExp("["+Ic+"]","g"),Dc="[^"+Ic+"]",D_="[^"+Ic.replace("\\.","")+"]",U_=/((?:WC+[\/:])*)/.source.replace("WC",Dc),N_=/(WCOD+)?/.source.replace("WCOD",D_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),F_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),O_=new RegExp("^"+U_+N_+z_+F_+"$"),B_=["material","materials","bones","map"],wc=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(t){let e=O_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=wc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);var On=[{id:"drizzie",name:"Drizzie City",nx:8,nz:8,x0:-560,z0:-560,kind:"metro"},{id:"serrana",name:"Vila Serrana",nx:4,nz:4,x0:-3e3,z0:-2300,kind:"town"},{id:"azul",name:"Porto Azul",nx:5,nz:3,x0:1900,z0:1300,kind:"port"}],xa=Object.fromEntries(On.map(i=>[i.id,i])),es=i=>i.x0+i.nx*140,Vs=i=>i.z0+i.nz*140;function _a(i,t,e){return i.kind==="metro"?t===1&&e===5||t===5&&e===6||t===2&&e===1?"park":t>=2&&t<=5&&e>=2&&e<=5?"downtown":t>=6?"industrial":"residential":i.kind==="town"?t===1&&e===1?"park":"town":e===i.nz-1?"port":t>=3?"industrial":"town"}var vd=[[-2100,-4300],[-1750,-3100],[-1400,-2050],[-1250,-1e3],[-1080,0],[-850,800],[-350,1400],[250,1700],[500,2100]],di=54,yd=[{id:"BR-101",from:["drizzie",0,4],to:["serrana",4,2],pts:[[-570,0],[-720,0],[-900,0],[-1100,-160],[-1350,-480],[-1560,-820],[-1760,-1180],[-1980,-1520],[-2200,-1840],[-2330,-2020],[-2430,-2020]],hills:7},{id:"SP-280",from:["drizzie",8,4],to:["azul",2,0],pts:[[570,0],[760,0],[960,0],[1100,0],[1350,80],[1620,280],[1860,560],[2060,860],[2180,1100],[2180,1290]],hills:9},{id:"RS-030",from:["drizzie",4,0],to:null,pts:[[0,-570],[0,-800],[-120,-1080],[-420,-1380],[-800,-1640],[-1150,-1880],[-1450,-2e3],[-1720,-2150],[-1960,-2420],[-2100,-2650],[-2100,-2900],[-2100,-3100]],hills:10}],Bn=[{id:"garagem",name:"Garagem Drizzie",city:"drizzie",bx:2,bz:6,side:"n",kind:"garage",color:3108830},{id:"cd",name:"Centro de Distribui\xE7\xE3o",city:"drizzie",bx:6,bz:1,side:"w",kind:"warehouse",color:14721056},{id:"mercado",name:"Mercado Central",city:"drizzie",bx:3,bz:3,side:"w",kind:"market",color:3055186},{id:"hospital",name:"Hospital Municipal",city:"drizzie",bx:4,bz:5,side:"e",kind:"hospital",color:15790320},{id:"obra",name:"Canteiro de Obras",city:"drizzie",bx:1,bz:2,side:"e",kind:"construction",color:15774720},{id:"posto",name:"Posto Rodovi\xE1rio",city:"drizzie",bx:5,bz:7,side:"n",kind:"fuel",color:13639712},{id:"siderurgica",name:"Sider\xFArgica A\xE7o Forte",city:"drizzie",bx:7,bz:5,side:"w",kind:"steel",color:9059114},{id:"silo",name:"Silo Agr\xEDcola",city:"serrana",bx:0,bz:1,side:"e",kind:"silo",color:13152874},{id:"fabrica",name:"F\xE1brica de M\xF3veis",city:"serrana",bx:2,bz:2,side:"w",kind:"factory",color:10119999},{id:"porto",name:"Porto Azul",city:"azul",bx:2,bz:2,side:"n",kind:"port",color:2068400},{id:"refinaria",name:"Refinaria Petrosul",city:"azul",bx:4,bz:1,side:"w",kind:"refinery",color:14211288},{id:"fazenda",name:"Fazenda Boa Vista",hw:"BR-101",lot:[-862,11,-742,131],side:"n",kind:"farm",color:11549230},{id:"eolica",name:"Parque E\xF3lico",hw:"SP-280",lot:[900,-131,1020,-11],side:"s",kind:"wind",color:15658734},{id:"serraria",name:"Serraria Pinheiro",hw:"RS-030",lot:[-2089,-3020,-1969,-2900],side:"w",kind:"sawmill",color:8016432},{id:"pedreira",name:"Pedreira Rocha Viva",hw:"RS-030",lot:[-2160,-3220,-2040,-3100],side:"s",kind:"quarry",color:10261124}],fi=Object.fromEntries(Bn.map(i=>[i.id,i])),Ws=[{id:"urbano",name:"Urbano 4.5",hp:160,cap:5,mass:4.5,level:1,price:0,rigid:!0,axles:2,cab:"cabover",roof:"low",color:15921906,vmax:100,desc:"VUC leve, \xE1gil na cidade."},{id:"toco",name:"Toco 11-240",hp:240,cap:12,mass:7.5,level:3,price:15e3,rigid:!0,axles:2,cab:"cabover",roof:"mid",color:3108830,vmax:100,desc:"Caminh\xE3o m\xE9dio de carroceria ba\xFA."},{id:"cavalo",cfg:"4x2",name:"Cavalo 360",hp:360,cap:30,mass:8,level:6,price:6e4,rigid:!1,axles:2,cab:"cabover",roof:"high",color:13777450,vmax:110,desc:"Cavalo mec\xE2nico cara-chata para carretas."},{id:"rodo",cfg:"6x2",name:"Rodomax 480",hp:480,cap:45,mass:9,level:10,price:14e4,rigid:!1,axles:3,cab:"cabover",roof:"high",color:2072174,vmax:110,desc:"Cavalo 6x2 de teto alto para longas viagens."},{id:"titan",cfg:"6x4",name:"Titan 620 Bicudo",hp:620,cap:65,mass:10.5,level:15,price:28e4,rigid:!1,axles:3,cab:"conventional",roof:"high",color:2238513,vmax:105,desc:"Bicudo 6x4 de cap\xF4 longo e muita tra\xE7\xE3o."},{id:"colosso",cfg:"8x4",name:"Colosso 750 8x4",hp:750,cap:90,mass:12.5,level:20,price:5e5,rigid:!1,axles:4,cab:"conventional",roof:"high",color:15769600,vmax:95,desc:"Gigante para cargas especiais e indivis\xEDveis."}],va=Object.fromEntries(Ws.map(i=>[i.id,i])),Nr=[{id:"encomendas",name:"Encomendas",icon:"\u{1F4E6}",t:1,lvl:1,trailer:"box",rate:1,from:["cd"],to:["mercado","hospital","posto","obra","fabrica"]},{id:"medicamentos",name:"Medicamentos",icon:"\u{1F48A}",t:1.5,lvl:1,trailer:"box",rate:1.35,fragile:!0,from:["cd","porto"],to:["hospital"]},{id:"eletronicos",name:"Eletr\xF4nicos",icon:"\u{1F4FA}",t:2.5,lvl:2,trailer:"box",rate:1.4,fragile:!0,from:["porto"],to:["cd","mercado"]},{id:"hortifruti",name:"Hortifr\xFAti",icon:"\u{1F96C}",t:4,lvl:1,trailer:"box",rate:1.1,from:["fazenda"],to:["mercado","cd"]},{id:"moveis",name:"M\xF3veis",icon:"\u{1F6CB}\uFE0F",t:6,lvl:3,trailer:"box",rate:1.15,fragile:!0,from:["fabrica"],to:["mercado","cd","obra"]},{id:"bebidas",name:"Bebidas",icon:"\u{1F964}",t:9,lvl:3,trailer:"box",rate:1.05,from:["cd"],to:["mercado","posto"]},{id:"racao",name:"Ra\xE7\xE3o Animal",icon:"\u{1F33E}",t:12,lvl:4,trailer:"box",rate:1,from:["silo"],to:["fazenda"]},{id:"trator",name:"Trator Agr\xEDcola",icon:"\u{1F69C}",t:14,lvl:6,trailer:"lowboy",model:"tractor",rate:1.5,from:["porto"],to:["fazenda","silo"]},{id:"madeira",name:"Toras de Madeira",icon:"\u{1FAB5}",t:18,lvl:6,trailer:"flatbed",model:"logs",rate:1.05,from:["serraria"],to:["fabrica","obra","porto"]},{id:"conteiner",name:"Cont\xEAiner 40 p\xE9s",icon:"\u{1F6A2}",t:26,lvl:7,trailer:"flatbed",model:"container",rate:1.15,from:["porto"],to:["cd","siderurgica","fabrica"]},{id:"graos",name:"Soja a Granel",icon:"\u{1FAD8}",t:28,lvl:8,trailer:"bulk",rate:1,from:["fazenda","silo"],to:["porto"]},{id:"combustivel",name:"Combust\xEDvel",icon:"\u26FD",t:30,lvl:9,trailer:"tank",rate:1.45,hazard:!0,from:["refinaria"],to:["posto","fazenda","pedreira"]},{id:"cimento",name:"Cimento",icon:"\u{1F3D7}\uFE0F",t:32,lvl:10,trailer:"tank",model:"silo",rate:1.05,from:["pedreira"],to:["obra"]},{id:"bobinas",name:"Bobinas de A\xE7o",icon:"\u{1F9F2}",t:36,lvl:11,trailer:"flatbed",model:"coils",rate:1.2,from:["siderurgica"],to:["porto","fabrica"]},{id:"vigas",name:"Vigas de A\xE7o",icon:"\u{1F3E2}",t:42,lvl:13,trailer:"flatbed",model:"beams",rate:1.25,from:["siderurgica"],to:["obra"]},{id:"escavadeira",name:"Escavadeira",icon:"\u{1F6A7}",t:48,lvl:15,trailer:"lowboy",model:"excavator",rate:1.55,from:["porto"],to:["pedreira","obra"]},{id:"transformador",name:"Transformador",icon:"\u26A1",t:56,lvl:18,trailer:"lowboy",model:"transformer",rate:1.7,fragile:!0,from:["siderurgica","porto"],to:["refinaria","eolica"]},{id:"pa_eolica",name:"P\xE1 E\xF3lica",icon:"\u{1F300}",t:62,lvl:20,trailer:"lowboy",model:"blade",rate:1.9,fragile:!0,from:["porto"],to:["eolica"]},{id:"prensa",name:"Prensa Industrial",icon:"\u{1F3ED}",t:85,lvl:24,trailer:"lowboy",model:"press",rate:2.1,from:["porto"],to:["siderurgica","fabrica"]}],ln=Object.fromEntries(Nr.map(i=>[i.id,i])),Xs=i=>200+180*(i-1);function Md(i){return i?i.trailer==="lowboy"?9:i.trailer==="tank"?7:6.5:0}var Se={x0:-3400,z0:-3500,x1:3e3,z1:2300};var Xe=1024,bd=4,Uc={};function Sd(i,t){Xe=i,bd=t}function Pn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ee(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function nn(i,t,e,n,s,r=!0){let a=i.getImageData(0,0,t,e),o=a.data,c=Pn(s);for(let l=0;l<o.length;l+=4){let h=(c()-.5)*n;r?(o[l]+=h,o[l+1]+=h,o[l+2]+=h):(o[l]+=h,o[l+1]+=(c()-.5)*n,o[l+2]+=(c()-.5)*n)}i.putImageData(a,0,0)}function qs(i,t,e,n,s,r,a){let o=Pn(a);for(let c=0;c<n;c++){i.fillStyle=s[o()*s.length|0],i.globalAlpha=.25+o()*.5;let l=.5+o()*r;i.beginPath(),i.arc(o()*t,o()*e,l,0,Math.PI*2),i.fill()}i.globalAlpha=1}function ne(i,t=!0){let e=new Zo(i);return e.colorSpace=hn,e.anisotropy=bd,e.generateMipmaps=!0,e.minFilter=ai,e.magFilter=tn,t&&(e.wrapS=e.wrapT=yr),e}function ie(i,t){return Uc[i]||(Uc[i]=t()),Uc[i]}function ya(i,t,e,n="#3b3d40"){i.fillStyle=n,i.fillRect(0,0,t,t),qs(i,t,t,t*6,["#5a5c60","#2a2b2d","#6b6b6b","#232323"],t/512,e),nn(i,t,t,22,e+1)}var At={asphalt:()=>ie("asphalt",()=>{let i=Xe/2,[t,e]=ee(i,i);return ya(e,i,11),ne(t)}),road:()=>ie("road",()=>{let i=Xe,[t,e]=ee(i,i);ya(e,i,21);let n=i/20;e.fillStyle="rgba(20,20,20,0.18)";for(let a of[1.6,3.4,6.6,8.4])e.fillRect((10+a)*n-n*.6,0,n*1.2,i),e.fillRect((10-a)*n-n*.6,0,n*1.2,i);let s=(a,o,c,l)=>{e.fillStyle=a,l?e.fillRect(o*n-c*n/2,i*.1,c*n,i*l):e.fillRect(o*n-c*n/2,0,c*n,i)};s("#e8b923",9.8,.15),s("#e8b923",10.2,.15),s("#f2f2f2",5,.15,.45),s("#f2f2f2",15,.15,.45),s("#f2f2f2",.5,.18),s("#f2f2f2",19.5,.18);let r=Pn(5);e.globalCompositeOperation="source-atop";for(let a=0;a<i*3;a++)e.fillStyle="rgba(60,60,62,0.35)",e.fillRect(r()*i,r()*i,1+r()*3,1+r()*3);return e.globalCompositeOperation="source-over",ne(t)}),intersection:()=>ie("intersection",()=>{let i=Xe,[t,e]=ee(i,i);ya(e,i,31);let n=i/20;e.fillStyle="rgba(240,240,240,0.92)";for(let s=0;s<8;s++){let r=(1.5+s*2.2)*n;e.fillRect(r,.3*n,1.1*n,2.6*n),e.fillRect(r,i-2.9*n,1.1*n,2.6*n),e.fillRect(.3*n,r,2.6*n,1.1*n),e.fillRect(i-2.9*n,r,2.6*n,1.1*n)}return nn(e,i,i,10,32),ne(t,!1)}),concrete:()=>ie("concrete",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#a9a69f",e.fillRect(0,0,i,i),nn(e,i,i,26,41),qs(e,i,i,i*2,["#8f8c86","#bdbab3"],i/400,42),e.strokeStyle="rgba(70,68,64,0.55)",e.lineWidth=Math.max(1,i/256);for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*i/4,0),e.lineTo(n*i/4,i),e.stroke(),e.beginPath(),e.moveTo(0,n*i/4),e.lineTo(i,n*i/4),e.stroke();return ne(t)}),lot:()=>ie("lot",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#8e8b85",e.fillRect(0,0,i,i),nn(e,i,i,30,51),qs(e,i,i,i,["#6f6c66","#a5a29c","#5d5a55"],i/200,52),e.strokeStyle="rgba(50,48,45,0.5)",e.lineWidth=2,e.strokeRect(1,1,i-2,i-2);let n=Pn(53);for(let s=0;s<6;s++){let r=n()*i,a=n()*i,o=e.createRadialGradient(r,a,0,r,a,i/10);o.addColorStop(0,"rgba(30,30,30,0.25)"),o.addColorStop(1,"rgba(30,30,30,0)"),e.fillStyle=o,e.fillRect(0,0,i,i)}return ne(t)}),grass:()=>ie("grass",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#4f7a32",e.fillRect(0,0,i,i);let n=Pn(61);for(let s=0;s<40;s++){let r=n()*i,a=n()*i,o=i*(.05+n()*.15),c=e.createRadialGradient(r,a,0,r,a,o),l=n()>.5?"96,140,58":"62,96,38";c.addColorStop(0,`rgba(${l},0.45)`),c.addColorStop(1,`rgba(${l},0)`),e.fillStyle=c,e.fillRect(0,0,i,i)}e.lineWidth=1;for(let s=0;s<i*14;s++){let r=n()*i,a=n()*i;e.strokeStyle=n()>.5?"rgba(120,170,70,0.5)":"rgba(40,70,25,0.5)",e.beginPath(),e.moveTo(r,a),e.lineTo(r+(n()-.5)*3,a-2-n()*4),e.stroke()}return nn(e,i,i,14,62,!1),ne(t)}),field:()=>ie("field",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#7a5a36",e.fillRect(0,0,i,i),nn(e,i,i,30,71);let n=16;for(let s=0;s<n;s++){let r=(s+.5)*(i/n);e.fillStyle="#5d8a2a",e.fillRect(0,r-i/n/4,i,i/n/2)}return qs(e,i,i,i*4,["#7fae3a","#4a7020","#8fbf4a"],2,72),ne(t)}),sand:()=>ie("sand",()=>{let i=Xe/4,[t,e]=ee(i,i);return e.fillStyle="#d6c49a",e.fillRect(0,0,i,i),nn(e,i,i,26,81),ne(t)}),water:()=>ie("water",()=>{let i=Xe/2,[t,e]=ee(i,i);e.fillStyle="#1d5f7d",e.fillRect(0,0,i,i);let n=Pn(91);for(let s=0;s<900;s++){e.strokeStyle=n()>.5?"rgba(170,220,240,0.22)":"rgba(10,40,60,0.25)",e.lineWidth=1+n()*2;let r=n()*i,a=n()*i,o=6+n()*20;e.beginPath(),e.moveTo(r,a),e.quadraticCurveTo(r+o/2,a-3,r+o,a),e.stroke()}return ne(t)}),roof:()=>ie("roof",()=>{let i=Xe/4,[t,e]=ee(i,i);return e.fillStyle="#5c5a57",e.fillRect(0,0,i,i),nn(e,i,i,34,101),qs(e,i,i,i*3,["#77746f","#44423f"],1.5,102),ne(t)}),tiles:()=>ie("tiles",()=>{let i=Xe/4,[t,e]=ee(i,i);e.fillStyle="#9b3d2a",e.fillRect(0,0,i,i);let n=8;for(let s=0;s<n;s++)for(let r=0;r<n;r++){let a=e.createLinearGradient(0,s*i/n,0,(s+1)*i/n);a.addColorStop(0,"#b4513a"),a.addColorStop(1,"#7a2c1d"),e.fillStyle=a,e.fillRect((r+s%2*.5)*i/n,s*i/n,i/n-1,i/n-1)}return nn(e,i,i,16,103),ne(t)}),metal:()=>ie("metal",()=>{let i=Xe/2,[t,e]=ee(i,i),n=32;for(let s=0;s<n;s++){let r=e.createLinearGradient(s*i/n,0,(s+1)*i/n,0);r.addColorStop(0,"#9aa1a6"),r.addColorStop(.5,"#d9dee1"),r.addColorStop(1,"#868c90"),e.fillStyle=r,e.fillRect(s*i/n,0,i/n,i)}return nn(e,i,i,14,111),ne(t)}),tire:()=>ie("tire",()=>{let[t,e]=ee(256,256);e.fillStyle="#1b1b1c",e.fillRect(0,0,256,256),e.fillStyle="#2c2c2e";for(let n=0;n<24;n++)e.save(),e.translate(n*256/24,0),e.fillRect(0,0,256/48,256),e.restore();return nn(e,256,256,10,121),ne(t)}),rim:()=>ie("rim",()=>{let[t,e]=ee(256,256);e.fillStyle="#151515",e.fillRect(0,0,256,256);let n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256*.36);n.addColorStop(0,"#f0f0f0"),n.addColorStop(.6,"#b8bcc0"),n.addColorStop(1,"#7c8084"),e.fillStyle=n,e.beginPath(),e.arc(256/2,256/2,256*.36,0,Math.PI*2),e.fill(),e.fillStyle="#444";for(let s=0;s<10;s++){let r=s/10*Math.PI*2;e.beginPath(),e.arc(256/2+Math.cos(r)*256*.2,256/2+Math.sin(r)*256*.2,256*.025,0,7),e.fill()}return e.fillStyle="#555",e.beginPath(),e.arc(256/2,256/2,256*.09,0,7),e.fill(),ne(t,!1)}),facade:i=>ie("facade"+i,()=>{let t=Xe,[e,n]=ee(t,t),[s,r]=ee(t/2,t/2);r.fillStyle="#000",r.fillRect(0,0,t/2,t/2);let a=Pn(200+i),o=[{wall:"#c9d0d6",win:["#3a5a78","#4a7090","#2d4a66"],frame:"#7f8a93",mw:.78,mh:.62},{wall:"#9c4f39",win:["#24323e","#3b4d5c","#2f3d48"],frame:"#ddd4c2",mw:.42,mh:.5},{wall:"#d9d2c3",win:["#2b3a47","#3f5566","#33414d"],frame:"#948c7b",mw:.5,mh:.48},{wall:"#66757f",win:["#1d2d3c","#2c4a64","#3a5f7d"],frame:"#3a4954",mw:.9,mh:.8}][i];if(n.fillStyle=o.wall,n.fillRect(0,0,t,t),nn(n,t,t,18,210+i),i===1){n.strokeStyle="rgba(70,30,20,0.4)",n.lineWidth=1;let d=t/96;for(let p=0;p<96;p++){n.beginPath(),n.moveTo(0,p*d),n.lineTo(t,p*d),n.stroke();for(let g=0;g<32;g++){let x=(g+p%2*.5)*t/32;n.beginPath(),n.moveTo(x,p*d),n.lineTo(x,(p+1)*d),n.stroke()}}}let c=4,l=t/c,h=["#ffd38a","#ffe7b0","#fff4d6","#cfe3ff","#ffc070"];for(let d=0;d<c;d++){for(let p=0;p<c;p++){let g=p*l,x=d*l,f=l*o.mw,m=l*o.mh,y=g+(l-f)/2,_=x+(l-m)/2-l*.04;n.fillStyle=o.frame,n.fillRect(y-3,_-3,f+6,m+6);let M=n.createLinearGradient(y,_,y+f,_+m),R=o.win[a()*o.win.length|0];if(M.addColorStop(0,R),M.addColorStop(.5,"#8fa8bc"),M.addColorStop(.56,R),M.addColorStop(1,"#141d26"),n.fillStyle=M,n.fillRect(y,_,f,m),n.fillStyle=o.frame,n.fillRect(y+f/2-1.5,_,3,m),i!==3&&n.fillRect(y,_+m*.35,f,2),(i===1||i===2)&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(y-4,_+m+3,f+8,4)),a()<.42){let w=r.createLinearGradient(0,_*.5,0,(_+m)*.5),E=h[a()*h.length|0];w.addColorStop(0,E),w.addColorStop(1,"#6b4a20"),r.fillStyle=w,r.fillRect(y*.5,_*.5,f*.5,m*.5)}}(i===0||i===3)&&(n.fillStyle=o.frame,n.fillRect(0,d*l+l-4,t,4))}for(let d=0;d<40;d++){let p=a()*t,g=t*(.05+a()*.2),x=a()*t,f=n.createLinearGradient(0,x,0,x+g);f.addColorStop(0,"rgba(40,35,30,0.12)"),f.addColorStop(1,"rgba(40,35,30,0)"),n.fillStyle=f,n.fillRect(p,x,2+a()*6,g)}let u=ne(e);return u.userData.emissive=ne(s),u}),highway:()=>ie("highway",()=>{let i=Xe,[t,e]=ee(i,i);ya(e,i,23,"#3a3c3f");let n=i/18;e.fillStyle="rgba(150,150,150,0.18)",e.fillRect(0,0,2*n,i),e.fillRect(16*n,0,2*n,i),e.fillStyle="rgba(20,20,20,0.2)";for(let r of[4.2,6.6,11.4,13.8])e.fillRect(r*n-n*.5,0,n,i);e.fillStyle="#f2f2f2",e.fillRect(1.9*n,0,.15*n,i),e.fillRect(15.95*n,0,.15*n,i),e.fillStyle="#e8b923",e.fillRect(8.82*n,0,.14*n,i*.5),e.fillRect(9.04*n,0,.14*n,i);let s=Pn(24);e.strokeStyle="rgba(15,15,15,0.35)",e.lineWidth=1.2;for(let r=0;r<14;r++){let a=s()*i,o=s()*i;e.beginPath(),e.moveTo(a,o);for(let c=0;c<6;c++)a+=(s()-.5)*30,o+=s()*20,e.lineTo(a,o);e.stroke()}for(let r=0;r<3;r++)e.fillStyle="rgba(25,25,27,0.35)",e.fillRect(2*n+s()*12*n,s()*i,1.5*n+s()*n,1*n+s()*n);return ne(t)}),roadSign:(i,t,e)=>ie("rs"+i+t+e,()=>{let[r,a]=ee(1024,410);a.fillStyle=e,a.fillRect(0,0,1024,410),a.strokeStyle="#fff",a.lineWidth=14,a.strokeRect(20,20,984,370),a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle";let o=120;for(a.font=`700 ${o}px sans-serif`;a.measureText(i).width>904;)o-=6,a.font=`700 ${o}px sans-serif`;return a.fillText(i,1024/2,410*.42),a.font="600 64px sans-serif",a.fillText(t,1024/2,410*.76),ne(r,!1)}),speedSign:i=>ie("spd"+i,()=>{let[e,n]=ee(256,256);return n.fillStyle="#fff",n.beginPath(),n.arc(256/2,256/2,256/2,0,7),n.fill(),n.strokeStyle="#d0021b",n.lineWidth=28,n.beginPath(),n.arc(256/2,256/2,256/2-16,0,7),n.stroke(),n.fillStyle="#111",n.font="800 110px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),256/2,256/2+6),ne(e,!1)}),clouds:()=>ie("clouds",()=>{let[e,n]=ee(1024,512);n.clearRect(0,0,1024,512);let s=Pn(555);for(let a=0;a<70;a++){let o=s()*1024,c=512*.25+s()*512*.55,l=30+s()*90;for(let h=0;h<7;h++){let u=o+(s()-.5)*l*1.8,d=c+(s()-.5)*l*.4,p=l*(.4+s()*.6),g=n.createRadialGradient(u,d,0,u,d,p);g.addColorStop(0,"rgba(255,255,255,0.55)"),g.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=g,n.fillRect(u-p,d-p,p*2,p*2),u<p&&(n.save(),n.translate(1024,0),n.fillRect(u-p,d-p,p*2,p*2),n.restore())}}let r=ne(e);return r.wrapT=yn,r}),panel:()=>ie("panel",()=>{let[t,e]=ee(512,512),n=32;for(let r=0;r<n;r++){let a=e.createLinearGradient(r*512/n,0,(r+1)*512/n,0);a.addColorStop(0,"#d9dcdf"),a.addColorStop(.5,"#ffffff"),a.addColorStop(1,"#c8cbce"),e.fillStyle=a,e.fillRect(r*512/n,0,512/n,512)}e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(0,0,512,6),e.fillRect(0,506,512,6);let s=e.createLinearGradient(0,512,0,512*.6);return s.addColorStop(0,"rgba(110,92,70,0.35)"),s.addColorStop(1,"rgba(110,92,70,0)"),e.fillStyle=s,e.fillRect(0,0,512,512),nn(e,512,512,8,600),ne(t)}),warehouse:()=>ie("warehouse",()=>{let i=Xe/2,[t,e]=ee(i,i),n=40;for(let s=0;s<n;s++){let r=e.createLinearGradient(s*i/n,0,(s+1)*i/n,0);r.addColorStop(0,"#b7bcc0"),r.addColorStop(.5,"#e4e7e9"),r.addColorStop(1,"#a6abaf"),e.fillStyle=r,e.fillRect(s*i/n,0,i/n,i)}return e.fillStyle="rgba(60,70,80,0.35)",e.fillRect(0,i*.9,i,i*.1),nn(e,i,i,12,301),ne(t)}),container:i=>ie("container"+i,()=>{let[e,n]=ee(256,256),s=new dt(i),r=24;for(let a=0;a<r;a++){let o=n.createLinearGradient(a*256/r,0,(a+1)*256/r,0);o.addColorStop(0,"#"+s.clone().multiplyScalar(.7).getHexString()),o.addColorStop(.5,"#"+s.clone().multiplyScalar(1.1).getHexString()),o.addColorStop(1,"#"+s.clone().multiplyScalar(.6).getHexString()),n.fillStyle=o,n.fillRect(a*256/r,0,256/r,256)}return n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=6,n.strokeRect(3,3,250,250),nn(n,256,256,14,311),ne(e)}),cargoBox:(i,t)=>ie("cbox"+i+t,()=>{let e=Xe,n=Xe/4,[s,r]=ee(e,n),a=r.createLinearGradient(0,0,0,n);a.addColorStop(0,"#fbfbfb"),a.addColorStop(1,"#d7dadd"),r.fillStyle=a,r.fillRect(0,0,e,n),r.fillStyle=i,r.fillRect(0,n*.78,e,n*.08),r.beginPath(),r.moveTo(e*.05,n*.7),r.lineTo(e*.15,n*.2),r.lineTo(e*.22,n*.2),r.lineTo(e*.12,n*.7),r.fill(),r.font=`900 ${n*.34}px sans-serif`,r.textBaseline="middle",r.fillText(t,e*.25,n*.42),r.font=`600 ${n*.1}px sans-serif`,r.fillStyle="#555",r.fillText("TRANSPORTES & LOG\xCDSTICA",e*.255,n*.66),r.strokeStyle="rgba(0,0,0,0.15)",r.lineWidth=2;for(let o=1;o<12;o++)r.beginPath(),r.moveTo(o*e/12,0),r.lineTo(o*e/12,n),r.stroke();return ne(s,!1)}),sign:(i,t,e)=>ie("sign"+i+t,()=>{let[r,a]=ee(1024,192);a.fillStyle=t,a.fillRect(0,0,1024,192),a.strokeStyle="rgba(255,255,255,0.8)",a.lineWidth=8,a.strokeRect(10,10,1004,172),a.fillStyle=e;let o=96;for(a.font=`800 ${o}px sans-serif`;a.measureText(i).width>944&&o>30;)o-=4,a.font=`800 ${o}px sans-serif`;return a.textAlign="center",a.textBaseline="middle",a.fillText(i,1024/2,192/2+4),ne(r,!1)}),paint:()=>ie("paint",()=>{let[t,e]=ee(512,512),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#eeeeee"),n.addColorStop(1,"#c4c4c4"),e.fillStyle=n,e.fillRect(0,0,512,512);let s=Pn(777),r=e.createLinearGradient(0,512,0,512*.35);r.addColorStop(0,"rgba(110,92,70,0.55)"),r.addColorStop(1,"rgba(110,92,70,0)"),e.fillStyle=r,e.fillRect(0,0,512,512);for(let a=0;a<2600;a++){let o=512-Math.pow(s(),1.8)*512;e.fillStyle=`rgba(${90+s()*40},${75+s()*30},${55+s()*25},${.06+s()*.16})`,e.beginPath(),e.arc(s()*512,o,.5+s()*3.5,0,7),e.fill()}for(let a=0;a<70;a++){let o=s()*512,c=s()*512*.4,l=512*(.15+s()*.5),h=e.createLinearGradient(0,c,0,c+l);h.addColorStop(0,"rgba(80,70,55,0)"),h.addColorStop(.5,"rgba(80,70,55,0.14)"),h.addColorStop(1,"rgba(80,70,55,0)"),e.fillStyle=h,e.fillRect(o,c,1+s()*3,l)}return nn(e,512,512,8,778),ne(t)}),backdrop:()=>ie("backdrop",()=>{let[e,n]=ee(1024,512),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#08121f"),s.addColorStop(1,"#0e2a40"),n.fillStyle=s,n.fillRect(0,0,1024,512);let r=Pn(901),a=64;for(let o=0;o<512/a+1;o++)for(let c=0;c<1024/a+1;c++){let l=c*a+o%2*a/2,h=o*a*.87;n.fillStyle=`rgba(${40+r()*30},${90+r()*60},${130+r()*70},${.05+r()*.12})`,n.beginPath(),n.moveTo(l,h),n.lineTo(l+a/2,h+a*.87),n.lineTo(l-a/2,h+a*.87),n.closePath(),n.fill(),n.strokeStyle="rgba(120,200,255,0.06)",n.stroke()}return ne(e,!1)}),glow:()=>ie("glow",()=>{let[t,e]=ee(128,128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.55)"),n.addColorStop(1,"rgba(255,220,150,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ne(t,!1)}),beam:()=>ie("beam",()=>{let[e,n]=ee(128,256),s=n.createRadialGradient(128/2,256,0,128/2,256,256);return s.addColorStop(0,"rgba(255,245,220,0.85)"),s.addColorStop(.5,"rgba(255,240,210,0.35)"),s.addColorStop(1,"rgba(255,240,210,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(128*.42,256),n.lineTo(0,0),n.lineTo(128,0),n.lineTo(128*.58,256),n.fill(),ne(e,!1)}),grill:()=>ie("grill",()=>{let[t,e]=ee(256,256);e.fillStyle="#0c0c0c",e.fillRect(0,0,256,256);for(let n=0;n<9;n++){let s=12+n*27,r=e.createLinearGradient(0,s,0,s+14);r.addColorStop(0,"#f2f2f2"),r.addColorStop(1,"#7a7a7a"),e.fillStyle=r,e.fillRect(8,s,240,14)}return ne(t,!1)}),blob:()=>ie("blob",()=>{let[t,e]=ee(128,128),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(0,0,0,0.65)"),n.addColorStop(.6,"rgba(0,0,0,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ne(t,!1)}),zone:()=>ie("zone",()=>{let[t,e]=ee(256,256);return e.clearRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,1)",e.lineWidth=14,e.strokeRect(7,7,242,242),e.fillStyle="rgba(255,255,255,0.25)",e.fillRect(14,14,228,228),ne(t,!1)}),bark:()=>ie("bark",()=>{let[t,e]=ee(256,256);e.fillStyle="#6b4a2b",e.fillRect(0,0,256,256);let n=Pn(401);for(let s=0;s<120;s++){e.strokeStyle=n()>.5?"rgba(40,25,12,0.6)":"rgba(140,100,60,0.4)",e.lineWidth=1+n()*3;let r=n()*256;e.beginPath(),e.moveTo(r,0),e.lineTo(r+(n()-.5)*12,256),e.stroke()}return ne(t)}),foliage:()=>ie("foliage",()=>{let[t,e]=ee(256,256);return e.fillStyle="#c8c8c8",e.fillRect(0,0,256,256),qs(e,256,256,2600,["#ffffff","#8a8a8a","#e6e6e6","#6e6e6e"],5,411),ne(t)})};var Ma=new I,ba=new I,wd=new Ft,Sa=new dt,Rt=class{constructor(t=!1){this.pos=[],this.nor=[],this.uv=[],this.col=t?[]:null,this.idx=[]}get count(){return this.pos.length/3}_color(t){this.col&&(Sa.set(t!=null?t:16777215),this.col.push(Sa.r,Sa.g,Sa.b))}quad(t,e,n,s,r,a,o){let c=this.count;for(let l of[t,e,n,s])this.pos.push(l[0],l[1],l[2]),this.nor.push(r[0],r[1],r[2]),this._color(o);this.uv.push(...a),this.idx.push(c,c+1,c+2,c,c+2,c+3)}ground(t,e,n,s,r,a,o){let c=t/a,l=n/a,h=-s/a,u=-e/a;this.quad([t,r,s],[n,r,s],[n,r,e],[t,r,e],[0,1,0],[c,h,l,h,l,u,c,u],o)}walls(t,e,n,s,r,a,o,c,l=0,h){let d=(r-e)/c,p=(s-t)/o,g=(a-n)/o;this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],[0,0,1],[l,0,l+p,0,l+p,d,l,d],h),this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],[0,0,-1],[l,0,l+p,0,l+p,d,l,d],h),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],[1,0,0],[l,0,l+g,0,l+g,d,l,d],h),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],[-1,0,0],[l,0,l+g,0,l+g,d,l,d],h)}top(t,e,n,s,r,a,o){this.ground(t,e,n,s,r,a,o)}box(t,e,n,s,r,a,o,c){this.walls(t,e,n,s,r,a,o,o,0,c),this.top(t,n,s,a,r,o,c)}add(t,e,n,s=1){let r=t.attributes.position,a=t.attributes.normal,o=t.attributes.uv,c=this.count;wd.getNormalMatrix(e);for(let l=0;l<r.count;l++)Ma.fromBufferAttribute(r,l).applyMatrix4(e),this.pos.push(Ma.x,Ma.y,Ma.z),ba.fromBufferAttribute(a,l).applyMatrix3(wd).normalize(),this.nor.push(ba.x,ba.y,ba.z),o?this.uv.push(o.getX(l)*s,o.getY(l)*s):this.uv.push(0,0),this._color(n);if(t.index){let l=t.index.array;for(let h=0;h<l.length;h++)this.idx.push(l[h]+c)}else for(let l=0;l<r.count;l++)this.idx.push(c+l)}geometry(){let t=new De;t.setAttribute("position",new kt(this.pos,3)),t.setAttribute("normal",new kt(this.nor,3)),t.setAttribute("uv",new kt(this.uv,2)),this.col&&t.setAttribute("color",new kt(this.col,3));let e=this.count>65535;return t.setIndex(e?new Ns(this.idx,1):new Us(this.idx,1)),t.computeBoundingSphere(),t}mesh(t,e={}){if(!this.count)return null;let n=new Xt(this.geometry(),t);return n.castShadow=!!e.cast,n.receiveShadow=e.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}},k_=new he,Ed=new $n,H_=new fn,G_=new I,V_=new I;function gt(i,t,e,n=0,s=0,r=0,a=1,o=1,c=1){return Ed.setFromEuler(H_.set(n,s,r)),k_.compose(V_.set(i,t,e),Ed,G_.set(a,o,c)).clone()}var Ui={},It={box:()=>Ui.box||(Ui.box=new pn(1,1,1)),cyl:(i=16)=>Ui["cyl"+i]||(Ui["cyl"+i]=new Mn(.5,.5,1,i)),cone:(i=12)=>Ui["cone"+i]||(Ui["cone"+i]=new Ii(.5,1,i)),sphere:()=>Ui.sph||(Ui.sph=new Jn(.5,16,10))};var Nc=i=>i<=0?0:i>=1?1:i*i*(3-2*i),wa=class{constructor(t=80,e=40){this.cell=t,this.pad=e,this.map=new Map}addSegments(t,e,n){let s=this.cell,r=this.pad;for(let a=0;a<e.length-1;a++){let o=Math.min(e[a],e[a+1])-r,c=Math.max(e[a],e[a+1])+r,l=Math.min(n[a],n[a+1])-r,h=Math.max(n[a],n[a+1])+r;for(let u=Math.floor(o/s);u<=Math.floor(c/s);u++)for(let d=Math.floor(l/s);d<=Math.floor(h/s);d++){let p=u*1e5+d,g=this.map.get(p);g||this.map.set(p,g=[]),g.push(t,a)}}}nearest(t,e,n){let s=this.map.get(Math.floor(t/this.cell)*1e5+Math.floor(e/this.cell));if(n.d=1/0,!s)return null;for(let r=0;r<s.length;r+=2){let a=s[r],o=s[r+1],c=a.x[o],l=a.z[o],h=a.x[o+1],u=a.z[o+1],d=h-c,p=u-l,g=d*d+p*p||1,x=((t-c)*d+(e-l)*p)/g;x=x<0?0:x>1?1:x;let f=c+d*x,m=l+p*x,y=Math.hypot(t-f,e-m);y<n.d&&(n.d=y,n.o=a,n.i=o,n.t=x,n.x=f,n.z=m)}return n.d<1/0?n:null}};function Td(i,t){let e=new Ar(i.map(o=>new I(o[0],0,o[1])),!1,"centripetal",.5),n=Math.max(2,Math.ceil(e.getLength()/t)),s=e.getSpacedPoints(n),r=new Float32Array(s.length),a=new Float32Array(s.length);return s.forEach((o,c)=>{r[c]=o.x,a[c]=o.z}),{x:r,z:a}}var zc=class{constructor(){let{x:t,z:e}=Td(vd,10);this.x=t,this.z=e,this.n=t.length,this.idx=new wa(100,di/2+80),this.idx.addSegments(this,t,e),this._q={}}dist(t,e){let n=this.idx.nearest(t,e,this._q);return n?n.d:1/0}},Fc=class{constructor(t,e){this.def=t,this.id=t.id;let{x:n,z:s}=Td(t.pts,4),r=this.n=n.length;this.x=n,this.z=s,this.s=new Float32Array(r),this.dx=new Float32Array(r),this.dz=new Float32Array(r),this.y=new Float32Array(r);for(let l=1;l<r;l++)this.s[l]=this.s[l-1]+Math.hypot(n[l]-n[l-1],s[l]-s[l-1]);this.length=this.s[r-1];for(let l=0;l<r;l++){let h=Math.max(0,l-1),u=Math.min(r-1,l+1),d=n[u]-n[h],p=s[u]-s[h],g=Math.hypot(d,p)||1;this.dx[l]=d/g,this.dz[l]=p/g}let a=Bn.filter(l=>l.hw===t.id).map(l=>[(l.lot[0]+l.lot[2])/2,(l.lot[1]+l.lot[3])/2]),o=new Float32Array(r);this.bridge=new Uint8Array(r);let c=7.5;for(let l=0;l<r;l++){let h=e.dist(n[l],s[l]);h<di/2+14&&(this.bridge[l]=1);let d=c*Nc(1-(h-(di/2+22))/150),p=Nc(Math.min(this.s[l],this.length-this.s[l])/220-.3);for(let[f,m]of a)p=Math.min(p,Nc((Math.hypot(n[l]-f,s[l]-m)-110)/160));let g=this.s[l],x=(t.hills||0)*p*(.55*Math.pow(Math.sin(g/260),2)+.45*Math.pow(Math.sin(g/610+1.3),2));o[l]=Math.max(d,x)}for(let l=0;l<r;l++){let h=0,u=0;for(let d=-8;d<=8;d++){let p=Math.min(r-1,Math.max(0,l+d));h+=o[p],u++}this.y[l]=this.bridge[l]?Math.max(c,h/u):h/u}this.y[0]=this.y[r-1]=0}at(t,e){let n=this.n;t=Math.max(0,Math.min(this.length,t));let s=0,r=n-1;for(;r-s>1;){let o=s+r>>1;this.s[o]<=t?s=o:r=o}let a=(t-this.s[s])/(this.s[r]-this.s[s]||1);return e.x=this.x[s]+(this.x[r]-this.x[s])*a,e.z=this.z[s]+(this.z[r]-this.z[s])*a,e.y=this.y[s]+(this.y[r]-this.y[s])*a,e.dx=this.dx[s],e.dz=this.dz[s],e.i=s,e}};function Ad(){let i=new zc,t=yd.map(n=>new Fc(n,i)),e=new wa(80,40);for(let n of t)e.addSegments(n,n.x,n.z);return{river:i,hws:t,idx:e}}var se=20/2;function W_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ea(i,t){let e=(l,h)=>{let u=Math.sin(l*127.1+h*311.7)*43758.5453;return u-Math.floor(u)},n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=r*r*(3-2*r),c=a*a*(3-2*a);return(e(n,s)*(1-o)+e(n+1,s)*o)*(1-c)+(e(n,s+1)*(1-o)+e(n+1,s+1)*o)*c}var Ta=class{constructor(t,e){this.scene=t,this.q=e,this.colliders=[],this.cell=70,this.grid=new Map,this.depots={},this.animated=[],this.areas=[],this.hills=[],this.fields=[];let n=Ad();this.river=n.river,this.hws=n.hws,this.hwIdx=n.idx,this.hwById=Object.fromEntries(this.hws.map(s=>[s.id,s])),this._q={},this.build()}addCollider(t,e,n,s){let r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s)};this.colliders.push(r);let a=this.cell;for(let o=Math.floor(r.x0/a);o<=Math.floor(r.x1/a);o++)for(let c=Math.floor(r.z0/a);c<=Math.floor(r.z1/a);c++){let l=o*1e5+c;this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}hw(t,e){return this.hwIdx.nearest(t,e,this._q)}inArea(t,e,n){for(let s of this.areas)if(t>=s.x0+n&&t<=s.x1-n&&e>=s.z0+n&&e<=s.z1-n)return s;return null}heightAt(t,e){for(let r of this.areas)if(t>=r.x0&&t<=r.x1&&e>=r.z0&&e<=r.z1)return 0;let n=this.hw(t,e);if(!n||n.d>12)return 0;let s=n.o;return s.y[n.i]+(s.y[n.i+1]-s.y[n.i])*n.t}resolveCircle(t,e,n,s=!1){let r=0;if(n.x=0,n.z=0,!s&&!this.inArea(t.x,t.z,e)){let l=this.hw(t.x,t.z),h=9-e*.8;if(!l||l.d>h){let u=t.x,d=t.z,p=1/0;if(l){let g=h/(l.d||1);u=l.x+(t.x-l.x)*g,d=l.z+(t.z-l.z)*g,p=Math.hypot(t.x-u,t.z-d)}for(let g of this.areas){if(t.x<g.x0-60||t.x>g.x1+60||t.z<g.z0-60||t.z>g.z1+60)continue;let x=Math.max(g.x0+e,Math.min(t.x,g.x1-e)),f=Math.max(g.z0+e,Math.min(t.z,g.z1-e)),m=Math.hypot(t.x-x,t.z-f);m<p&&(p=m,u=x,d=f)}p<1/0&&(n.x=u-t.x,n.z=d-t.z,r=p)}}let a=this.cell,o=Math.floor((t.x+n.x)/a),c=Math.floor((t.z+n.z)/a);for(let l=o-1;l<=o+1;l++)for(let h=c-1;h<=c+1;h++){let u=this.grid.get(l*1e5+h);if(u)for(let d of u){let p=t.x+n.x,g=t.z+n.z,x=Math.max(d.x0,Math.min(p,d.x1)),f=Math.max(d.z0,Math.min(g,d.z1)),m=p-x,y=g-f,_=m*m+y*y;if(_<e*e)if(_>1e-6){let M=Math.sqrt(_),R=e-M;n.x+=m/M*R,n.z+=y/M*R,r=Math.max(r,R)}else{let M=p-d.x0,R=d.x1-p,T=g-d.z0,w=d.z1-g,E=Math.min(M,R,T,w);E===M?n.x-=M+e:E===R?n.x+=R+e:E===T?n.z-=T+e:n.z+=w+e,r=Math.max(r,E+e)}}}return r}terrainH(t,e){let n=0;for(let s of this.hills){let r=((t-s.x)**2+(e-s.z)**2)/(s.r*s.r);r<1&&(n=Math.max(n,s.h*Math.sqrt(1-r)-4))}return n}isFree(t,e,n){if(e>1750)return!1;let s=this.hw(t,e);if(s&&s.d<15+s.o.y[s.i]*1.9+n||this.river.dist(t,e)<di/2+12+n)return!1;for(let r of this.areas)if(t>r.x0-25-n&&t<r.x1+25+n&&e>r.z0-25-n&&e<r.z1+25+n)return!1;for(let r of this.fields)if(t>r.x0-n&&t<r.x1+n&&e>r.z0-n&&e<r.z1+n)return!1;return!0}build(){let t=(r,a={})=>new mn(cn({map:r},a)),e={grass:t(At.grass(),{vertexColors:!0,side:Me}),road:t(At.road()),hwy:t(At.highway()),inter:t(At.intersection()),concrete:t(At.concrete()),bridge:t(At.concrete(),{side:Me}),lot:t(At.lot()),field:t(At.field(),{vertexColors:!0}),sand:t(At.sand()),roof:t(At.roof()),tiles:t(At.tiles()),wh:t(At.warehouse(),{vertexColors:!0}),f:[0,1,2,3].map(r=>new bn({map:At.facade(r),emissiveMap:At.facade(r).userData.emissive,emissive:16777215,emissiveIntensity:0,shininess:r===0||r===3?60:8,specular:r===0||r===3?5592405:1118481})),flat:new mn({vertexColors:!0}),metal:new bn({map:At.metal(),vertexColors:!0,shininess:50,specular:6710886}),cont:t(At.container(14540253),{vertexColors:!0}),leaf:t(At.foliage(),{vertexColors:!0})};this.M=e;let n={grass:new Rt(!0),road:new Rt,hwy:new Rt,inter:new Rt,concrete:new Rt,bridge:new Rt,lot:new Rt,field:new Rt(!0),sand:new Rt,roof:new Rt,tiles:new Rt,wh:new Rt(!0),f:[new Rt,new Rt,new Rt,new Rt],flat:new Rt(!0),metal:new Rt(!0),cont:new Rt(!0)};this.B=n,this.trees=[],this.lamps=[],this.rails=[],this.posts=[],this.r=W_(1234);for(let r of On)this.areas.push({x0:r.x0-se,z0:r.z0-se,x1:es(r)+se,z1:Vs(r)+se,city:r});for(let r of this.hws)for(let a of[r.def.from,r.def.to]){if(!a)continue;let o=xa[a[0]],c=o.x0+a[1]*140,l=o.z0+a[2]*140;this.areas.push({x0:c-22,z0:l-22,x1:c+22,z1:l+22,pad:!0}),n.hwy.ground(c-22,l-22,c+22,l+22,.015,18)}for(let r of Bn)r.lot&&this.areas.push({x0:r.lot[0],z0:r.lot[1],x1:r.lot[2],z1:r.lot[3],lot:r.id});this.layoutCountry(),this.buildGround();for(let r of On)this.buildCity(r);for(let r of Bn)r.lot&&this.buildDepot(r,...r.lot);for(let r of this.hws)this.buildHighway(r);this.buildRiverAndSea(),this.buildHills(),this.scatterForest();let s=(r,a,o=!1)=>{let c=r.mesh(a,{cast:o});return c&&this.scene.add(c),c};s(n.grass,e.grass),s(n.road,e.road),s(n.hwy,e.hwy),s(n.inter,e.inter),s(n.concrete,e.concrete,!0),s(n.bridge,e.bridge,!0),s(n.lot,e.lot),s(n.field,e.field),s(n.sand,e.sand),s(n.roof,e.roof),s(n.tiles,e.tiles,!0),s(n.wh,e.wh,!0),s(n.flat,e.flat,!0),s(n.metal,e.metal,!0),s(n.cont,e.cont,!0),n.f.forEach((r,a)=>s(r,e.f[a],!0)),this.buildRails(),this.buildTrees(),this.buildLamps(),this.B=null}layoutCountry(){let t=this.r;for(let n=0;n<300&&this.hills.length<34;n++){let s=Se.x0+t()*(Se.x1-Se.x0),r=Se.z0+t()*(Se.z1-Se.z0),a=110+t()*220,o=25+t()*70;this.isFree(s,r,a+30)&&this.hills.push({x:s,z:r,r:a,h:o})}let e=[[-1e3,160,-600,700],[-2900,-1600,-2300,-1100],[600,150,1700,1e3],[1200,-700,1900,-150]];for(let[n,s,r,a]of e)for(let o=n;o<r;o+=140)for(let c=s;c<a;c+=110){let l={x0:o+6,z0:c+6,x1:o+134,z1:c+104};[[l.x0,l.z0],[l.x1,l.z0],[l.x0,l.z1],[l.x1,l.z1],[(l.x0+l.x1)/2,(l.z0+l.z1)/2]].every(([u,d])=>this.isFree(u,d,12))&&t()>.2&&this.fields.push(l)}this.hills=this.hills.filter(n=>!this.fields.some(s=>n.x+n.r>s.x0&&n.x-n.r<s.x1&&n.z+n.r>s.z0&&n.z-n.r<s.z1))}buildGround(){let t=this.B,e=new We(12e3,12e3,120,120);e.rotateX(-Math.PI/2);let n=e.attributes.position,s=t.grass.count;for(let o=0;o<n.count;o++){let c=n.getX(o),l=n.getZ(o);t.grass.pos.push(c,-.03,l),t.grass.nor.push(0,1,0),t.grass.uv.push(c/14,-l/14);let h=Ea(c/420,l/420)*.6+Ea(c/90,l/90)*.4;t.grass.col.push(.74+h*.34,.84+h*.24,.68+h*.2)}let r=e.index.array;for(let o=0;o<r.length;o++)t.grass.idx.push(r[o]+s);let a=[16777215,15265984,14207120,13164712];this.fields.forEach((o,c)=>t.field.ground(o.x0,o.z0,o.x1,o.z1,.03,24,a[c%a.length]))}buildCity(t){let e=this.B,n=a=>t.x0+a*140,s=a=>t.z0+a*140;for(let a=0;a<=t.nx;a++){let o=n(a);for(let c=0;c<t.nz;c++){let l=s(c)+se,h=s(c+1)-se;e.road.quad([o-se,.02,h],[o+se,.02,h],[o+se,.02,l],[o-se,.02,l],[0,1,0],[0,0,1,0,1,(h-l)/20,0,(h-l)/20])}}for(let a=0;a<=t.nz;a++){let o=s(a);for(let c=0;c<t.nx;c++){let l=n(c)+se,h=n(c+1)-se;e.road.quad([l,.02,o+se],[h,.02,o+se],[h,.02,o-se],[l,.02,o-se],[0,1,0],[0,0,0,(h-l)/20,1,(h-l)/20,1,0])}}for(let a=0;a<=t.nx;a++)for(let o=0;o<=t.nz;o++){let c=n(a),l=s(o);e.inter.quad([c-se,.025,l+se],[c+se,.025,l+se],[c+se,.025,l-se],[c-se,.025,l-se],[0,1,0],[0,0,1,0,1,1,0,1])}let r={};for(let a of Bn)a.city===t.id&&(r[a.bx+","+a.bz]=a);for(let a=0;a<t.nx;a++)for(let o=0;o<t.nz;o++){let c=n(a)+se,l=n(a+1)-se,h=s(o)+se,u=s(o+1)-se,d=r[a+","+o];d?this.buildDepot(d,c,h,l,u):this.buildBlock(_a(t,a,o),c,h,l,u)}this.roadSign(t.x0-26,t.z0-26,Math.PI*.75,t.name.toUpperCase(),"Bem-vindo","#1d4f7a")}grassPatch(t,e,n,s){this.B.grass.quad([t,.225,s],[n,.225,s],[n,.225,e],[t,.225,e],[0,1,0],[t/14,-s/14,n/14,-s/14,n/14,-e/14,t/14,-e/14],15267288)}tree(t,e,n=1,s=0,r=.2){this.trees.push({x:t,z:e,y:r,s:n*(.8+this.r()*.5),k:s,rot:this.r()*6.28})}building(t,e,n,s,r,a){let o=this.B,c=(this.r()*4|0)*.25;if(o.f[a].walls(t,.2,e,n,r,s,16,14,c),o.roof.top(t,e,n,s,r,6),o.flat.walls(t,r,e,n,r+.8,s,1,1,0,9276813),o.flat.walls(t-.3,3.4,e-.3,n+.3,3.8,s+.3,1,1,0,6122878),r>14&&this.r()>.3){let l=(n-t)*.3,h=(s-e)*.3,u=(t+n)/2+(this.r()-.5)*4,d=(e+s)/2;o.flat.box(u-l/2,r,d-h/2,u+l/2,r+3,d+h/2,1,10526880),o.metal.add(It.cyl(12),gt(u+l,r+2,d,0,0,0,2.4,3,2.4),13620182),o.flat.add(It.box(),gt(u-l*.3,r+6,d,0,0,0,.15,6,.15),7829367)}}house(t,e,n,s,r,a){let o=this.B;o.flat.walls(t,.2,e,n,r,s,1,1,0,a);let c=(t+n)/2;o.flat.quad([c-.6,.2,s+.02],[c+.6,.2,s+.02],[c+.6,2.4,s+.02],[c-.6,2.4,s+.02],[0,0,1],[0,0,1,0,1,1,0,1],5913122);for(let R of[t+1.6,n-2.8])o.flat.quad([R,1.2,s+.02],[R+1.2,1.2,s+.02],[R+1.2,2.4,s+.02],[R,2.4,s+.02],[0,0,1],[0,0,1,0,1,1,0,1],2899536),o.flat.quad([R+1.2,1.2,e-.02],[R,1.2,e-.02],[R,2.4,e-.02],[R+1.2,2.4,e-.02],[0,0,-1],[0,0,1,0,1,1,0,1],2899536);let l=2.2,h=.4,u=(e+s)/2,d=t-h,p=n+h,g=e-h,x=s+h,f=Math.hypot(l,u-g),m=(u-g)/f,y=l/f,_=(p-d)/3,M=f/3;o.tiles.quad([d,r,x],[p,r,x],[p,r+l,u],[d,r+l,u],[0,m,y],[0,0,_,0,_,M,0,M]),o.tiles.quad([p,r,g],[d,r,g],[d,r+l,u],[p,r+l,u],[0,m,-y],[0,0,_,0,_,M,0,M]),o.flat.quad([t,r,e],[t,r,s],[t,r+l,u],[t,r+l,u],[-1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.quad([n,r,s],[n,r,e],[n,r+l,u],[n,r+l,u],[1,0,0],[0,0,1,0,1,1,0,1],a),o.flat.walls(t-2,.2,s+2,n+2,1.1,s+2.2,1,1,0,14275783)}tank(t,e,n,s,r=15263976){this.B.metal.add(It.cyl(20),gt(t,s/2,e,0,0,0,n*2,s,n*2),r,1),this.B.metal.add(It.cone(20),gt(t,s+n*.2,e,0,0,0,n*2.02,n*.4,n*2.02),r),this.B.flat.add(It.box(),gt(t+n+.1,s/2,e,0,0,0,.1,s,.7),8359053)}chimney(t,e,n,s,r=10129286){this.B.flat.add(It.cyl(14),gt(t,s/2,e,0,0,0,n*2,s,n*2),r),this.B.flat.add(It.cyl(14),gt(t,s-3,e,0,0,0,n*2.1,1.2,n*2.1),12597547),this.B.flat.add(It.cyl(14),gt(t,s-6,e,0,0,0,n*2.1,1.2,n*2.1),15790320)}containerStack(t,e,n,s,r,a){let o=[12597547,2388387,1999945,14059792,8207512,8622482,10502144,1145445];for(let c=0;c<s;c++)for(let l=0;l<r;l++){let h=1+(this.r()*a|0);for(let u=0;u<h;u++){let d=(c-(s-1)/2)*2.6,p=(l-(r-1)/2)*12.6,g=Math.cos(n),x=Math.sin(n);this.B.cont.add(It.box(),gt(t+d*g+p*x,1.3+u*2.6,e-d*x+p*g,0,n,0,2.44,2.59,12.2),o[this.r()*o.length|0])}}}crane(t,e,n,s){let r=this.B,a=15844367;r.flat.add(It.box(),gt(t,n/2,e,0,0,0,1.6,n,1.6),a);let o=Math.cos(s),c=Math.sin(s);r.flat.add(It.box(),gt(t+c*12,n+.8,e+o*12,0,s,0,1.2,1.2,44),a),r.flat.add(It.box(),gt(t-c*8,n-.6,e-o*8,0,s,0,2.2,2,4),8359053),r.flat.add(It.box(),gt(t,n+3,e,0,0,0,1,6,1),a),r.flat.add(It.box(),gt(t+c*1.5,n-1.2,e+o*1.5,0,s,0,2.4,2.4,2.4),3426654)}turbine(t,e,n=48,s=1,r=0){let a=this.B;if(a.flat.add(It.cyl(14),gt(t,r+n*s/2,e,0,0,0,2.2*s,n*s,2.2*s),16054007),a.flat.add(It.box(),gt(t,r+n*s+1,e-1,0,0,0,2.2*s,2.4*s,6*s),15396333),!this.rotorGeo){let c=new Rt,l=new pn(1.4,22,.4);l.translate(0,11,0);for(let h=0;h<3;h++)c.add(l,gt(0,0,0,0,0,h*Math.PI*2/3));c.add(It.sphere(),gt(0,0,0,0,0,0,2,2,2)),this.rotorGeo=c.geometry(),this.rotorMat=new mn({color:16316921})}let o=new Xt(this.rotorGeo,this.rotorMat);o.scale.setScalar(s),o.position.set(t,r+n*s+1,e+2.2*s),o.rotation.z=this.r()*6,this.scene.add(o),this.animated.push({obj:o,speed:.6+this.r()*.4})}buildBlock(t,e,n,s,r){let a=this.B,o=this.r;this.addCollider(e,n,s,r);let c=e+5,l=n+5,h=s-5,u=r-5,d=h-c;for(let[p,g]of[[e+1.5,n+1.5],[s-1.5,n+1.5],[e+1.5,r-1.5],[s-1.5,r-1.5]])this.lamps.push({x:p,z:g});if(a.concrete.walls(e,0,n,s,.22,r,4,4),a.concrete.top(e,n,s,r,.22,4),t==="downtown"){let g=d/2;for(let x=0;x<2;x++)for(let f=0;f<2;f++){let m=g*(.62+o()*.28),y=g*(.62+o()*.28),_=c+g*(x+.5),M=l+g*(f+.5);this.building(_-m/2,M-y/2,_+m/2,M+y/2,35+o()*95,o()>.5?0:3)}for(let x=0;x<8;x++)this.tree(e+2+x*(s-e-4)/7,n+2,.8)}else if(t==="residential"||t==="town"){this.grassPatch(e+4,n+4,s-4,r-4);let p=3,g=d/p;for(let x=0;x<p;x++)for(let f=0;f<p;f++){let m=c+g*(x+.5),y=l+g*(f+.5);if(x===1&&f===1){for(let _=0;_<4;_++)this.tree(m+(o()-.5)*20,y+(o()-.5)*20,1);continue}if(t==="town"||o()<.45){let _=10+o()*6,M=9+o()*4,R=[16115400,14674416,15978928,15262376,13231041,15780297,16777215];this.house(m-_/2,y-M/2,m+_/2,y+M/2,3.6+(o()>.7?3.2:0),R[o()*R.length|0]),this.tree(m+_/2+3,y+M/2+3,.9)}else{let _=g*(.6+o()*.3),M=g*(.6+o()*.3);this.building(m-_/2,y-M/2,m+_/2,y+M/2,8+o()*26,o()>.5?1:2)}}for(let x=0;x<7;x++){let f=e+6+x*(s-e-12)/6;this.tree(f,n+2,.75),this.tree(f,r-2,.75)}}else if(t==="park"){this.grassPatch(e+4,n+4,s-4,r-4);for(let p=0;p<46;p++)this.tree(c+o()*d,l+o()*d,1.1,o()>.7?1:0);a.sand.ground(c+d*.35,l+d*.35,c+d*.65,l+d*.65,.235,8)}else if(t==="industrial"){let p=10+o()*6,g=d/2,x=[16777215,14083312,15786704,14543064][o()*4|0];if(a.wh.walls(c+2,.2,l+2,h-2,p,l+g-4,6,6,0,x),a.roof.top(c+2,l+2,h-2,l+g-4,p,6),o()>.4)for(let f=0;f<3;f++)this.tank(c+18+f*26,u-22,9,14+o()*8);else a.wh.walls(c+4,.2,l+g+4,h-30,p*.8,u-4,6,6,0,x),a.roof.top(c+4,l+g+4,h-30,u-4,p*.8,6),this.chimney(h-14,u-16,2.5,38+o()*20)}else t==="port"&&(this.containerStack(c+28,(l+u)/2,0,8,3,4),this.containerStack(h-28,(l+u)/2,0,8,3,3),this.crane((c+h)/2,u-4,30,Math.PI/2))}buildDepot(t,e,n,s,r){let a=this.B,o=this.r;a.lot.ground(e,n,s,r,.03,12);let c=(e+s)/2,l=(n+r)/2,h,u,d,p,g=34,x=14;if(t.side==="n"?(h={x:c,z:n+22,w:g,d:x},u=[e+10,r-50,s-10,r-6],d={x:c,z:n-se},p="n"):t.side==="s"?(h={x:c,z:r-22,w:g,d:x},u=[e+10,n+6,s-10,n+50],d={x:c,z:r+se},p="s"):t.side==="w"?(h={x:e+22,z:l,w:x,d:g},u=[s-50,n+10,s-6,r-10],d={x:e-se,z:l},p="w"):(h={x:s-22,z:l,w:x,d:g},u=[e+6,n+10,e+50,r-10],d={x:s+se,z:l},p="e"),t.lot){let E=this.hwIdx.nearest(d.x,d.z,{});E&&(d={x:E.x,z:E.z,hw:E.o.id,s:E.o.s[E.i]+(E.o.s[E.i+1]-E.o.s[E.i])*E.t});let P=(v,b,D,O)=>{let L=Math.hypot(D-v,O-b);a.flat.add(It.box(),gt((v+D)/2,.9,(b+O)/2,0,Math.atan2(D-v,O-b),0,.08,1.8,L),7305856)};p!=="n"&&P(e,n,s,n),p!=="s"&&P(e,r,s,r),p!=="w"&&P(e,n,e,r),p!=="e"&&P(s,n,s,r)}this.depots[t.id]=xi(cn({},t),{zone:h,entry:d,lot:[e,n,s,r]});let[f,m,y,_]=u,M=(f+y)/2,R=(m+_)/2,T=t.kind,w=(E,P=16777215,v=-1)=>{v>=0?a.f[v].walls(f,.03,m,y,E,_,16,14,0):a.wh.walls(f,.03,m,y,E,_,6,6,0,P),a.roof.top(f,m,y,_,E,6),a.flat.walls(f,E,m,y,E+.6,_,1,1,0,t.color),this.addCollider(f,m,y,_);let b=2962486;for(let D=0;D<4;D++){let O=(D+.5)/4,L=4,B=Math.min(5,E-1);if(p==="n"){let F=f+(y-f)*O;a.flat.quad([F+L/2,.03,m-.05],[F-L/2,.03,m-.05],[F-L/2,B,m-.05],[F+L/2,B,m-.05],[0,0,-1],[0,0,1,0,1,1,0,1],b)}if(p==="s"){let F=f+(y-f)*O;a.flat.quad([F-L/2,.03,_+.05],[F+L/2,.03,_+.05],[F+L/2,B,_+.05],[F-L/2,B,_+.05],[0,0,1],[0,0,1,0,1,1,0,1],b)}if(p==="w"){let F=m+(_-m)*O;a.flat.quad([f-.05,.03,F-L/2],[f-.05,.03,F+L/2],[f-.05,B,F+L/2],[f-.05,B,F-L/2],[-1,0,0],[0,0,1,0,1,1,0,1],b)}if(p==="e"){let F=m+(_-m)*O;a.flat.quad([y+.05,.03,F+L/2],[y+.05,.03,F-L/2],[y+.05,B,F-L/2],[y+.05,B,F+L/2],[1,0,0],[0,0,1,0,1,1,0,1],b)}}this.signFor(t,p,u,E)};if(T==="port")this.containerStack(M-25,R,Math.PI/2,4,3,4),this.containerStack(M+25,R,Math.PI/2,4,3,3),this.addCollider(f,m,y,_),this.crane(M,R,34,0),this.signFor(t,p,u,4,!0);else if(T==="refinery"){for(let E=0;E<2;E++)for(let P=0;P<3;P++)this.tank(f+12+E*22,m+15+P*32,9,12+o()*6);this.chimney(y-8,m+12,1.6,42,12436423),this.addCollider(f,m,y,_),this.signFor(t,p,u,4,!0)}else if(T==="farm")a.flat.walls(f+5,.03,m+6,y-30,9,_-6,1,1,0,11088422),a.tiles.top(f+4,m+5,y-29,_-5,9,4),this.tank(y-14,R-10,5,18,14014684),this.tank(y-14,R+10,5,18,14014684),this.addCollider(f,m,y,_),this.signFor(t,p,u,4,!0);else if(T==="silo"){for(let E=0;E<2;E++)for(let P=0;P<3;P++)this.tank(f+12+E*20,m+18+P*32,7,26,13620182);this.addCollider(f,m,y,_),this.signFor(t,p,u,4,!0)}else if(T==="wind"){for(let E=0;E<3;E++)this.turbine(f+10+E*40,R,55,1);this.addCollider(f,m,y,_),this.signFor(t,p,u,4,!0)}else if(T==="construction"){for(let E=0;E<4;E++)for(let P=0;P<3;P++)for(let v=0;v<5;v++)a.flat.add(It.box(),gt(f+6+E*10,v*4+2,m+10+P*14,0,0,0,.8,4,.8),10923183);for(let E=1;E<=5;E++)a.flat.add(It.box(),gt(f+21,E*4,m+24,0,0,0,32,.4,30),11777719);this.crane(y-8,_-10,40,Math.PI/2),this.addCollider(f,m,y,_),this.signFor(t,p,u,4,!0)}else if(T==="fuel"){w(5,16777215);let E=h;a.flat.add(It.box(),gt(E.x,7,E.z,0,0,0,E.w+6,.8,E.d+6),13639712);for(let[P,v]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let b=E.x+P*(E.w/2+4),D=E.z+v*(E.d/2+4);a.flat.add(It.box(),gt(b,3.5,D,0,0,0,.6,7,.6),15528177),this.addCollider(b-.4,D-.4,b+.4,D+.4)}}else if(T==="steel")w(18,13220008),this.chimney(f+8,m+8,2.6,55),this.chimney(y-8,_-8,2.6,50);else if(T==="sawmill"){let P=(f+y)/2;a.wh.walls(f,.03,m,P,8,_,6,6,0,13148794),a.roof.top(f,m,P,_,8,6),this.addCollider(f,m,y,_);for(let v=0;v<3;v++)for(let b=0;b<7;b++){let D=m+14+v*30,O=P+4+b%4*2.2+(b>=4?1.1:0),L=b>=4?2.8:.9;a.flat.add(It.cyl(10),gt(O,L,D,Math.PI/2,0,0,1.8,14,1.8),9329458)}this.signFor(t,p,u,4,!0)}else if(T==="quarry"){w(9,13682878);for(let E=0;E<2;E++)a.flat.add(It.cone(16),gt(f+25+E*50,5,R,0,0,0,18,10,18),10261124)}else T==="hospital"?w(22,16777215,2):T==="market"?w(10,16777215,1):w(T==="garage"?9:12,T==="garage"?14083319:16777215);this.lamps.push({x:e+2,z:n+2},{x:s-2,z:r-2})}signFor(t,e,n,s,r=!1){let[a,o,c,l]=n,h=26,u=26*(192/1024),d=new Xt(new We(h,u),new ue({map:At.sign(t.name.toUpperCase(),"#"+new dt(t.color).multiplyScalar(.75).getHexString(),"#ffffff"),side:Me})),p=r?8:s+u/2+.8;if(e==="n"&&(d.position.set((a+c)/2,p,o-(r?4:.3)),d.rotation.y=Math.PI),e==="s"&&d.position.set((a+c)/2,p,l+(r?4:.3)),e==="w"&&(d.position.set(a-(r?4:.3),p,(o+l)/2),d.rotation.y=-Math.PI/2),e==="e"&&(d.position.set(c+(r?4:.3),p,(o+l)/2),d.rotation.y=Math.PI/2),d.matrixAutoUpdate=!1,d.updateMatrix(),this.scene.add(d),r){let g=d.position,x=Math.cos(d.rotation.y),f=Math.sin(d.rotation.y);for(let m of[-1,1])this.B.flat.add(It.box(),gt(g.x+x*m*10,3,g.z-f*m*10,0,d.rotation.y,0,.5,6,.5),5592405)}}roadSign(t,e,n,s,r,a="#0f6b3a",o=0){let h=new Xt(new We(9,3.6),new ue({map:At.roadSign(s,r,a),side:Me}));h.position.set(t,o+5.2,e),h.rotation.y=n,h.matrixAutoUpdate=!1,h.updateMatrix(),this.scene.add(h);let u=Math.cos(n),d=Math.sin(n);for(let p of[-1,1])this.B.metal.add(It.cyl(8),gt(t+u*p*3.6,o+3.4,e-d*p*3.6,0,0,0,.25,6.8,.25),11581115)}buildHighway(t){let e=this.B,n=t.n,s=9;for(let u=0;u<n-1;u++){let d=u,p=u+1,g=[-t.dz[d],t.dx[d]],x=[-t.dz[p],t.dx[p]],f=t.y[d]+.04,m=t.y[p]+.04,y=t.s[d]/18,_=t.s[p]/18,M=(T,w,E,P)=>[t.x[T]+w[0]*E,P,t.z[T]+w[1]*E];e.hwy.quad(M(d,g,-s,f),M(d,g,s,f),M(p,x,s,m),M(p,x,-s,m),[0,1,0],[0,y,1,y,1,_,0,_]);let R=t.bridge[d]||t.bridge[p];for(let T of[-1,1]){let w=M(d,g,T*s,f-.04),E=M(p,x,T*s,m-.04);if(R)e.bridge.quad([w[0],f-1.6,w[2]],[E[0],m-1.6,E[2]],[E[0],m+1,E[2]],[w[0],f+1,w[2]],[g[0]*T,0,g[1]*T],[t.s[d]/4,0,t.s[p]/4,0,t.s[p]/4,.6,t.s[d]/4,.6]);else if(f>.25||m>.25){let P=2+f*1.9,v=2+m*1.9,b=M(d,g,T*(s+P),-.02),D=M(p,x,T*(s+v),-.02),O=B=>[B[0]/14,-B[2]/14],L=[g[0]*T*.45,.89,g[1]*T*.45];T>0?e.grass.quad(w,b,D,E,L,[...O(w),...O(b),...O(D),...O(E)],13162664):e.grass.quad(w,E,D,b,L,[...O(w),...O(E),...O(D),...O(b)],13162664)}}if(R&&(e.bridge.quad(M(d,g,s,f-1.6),M(d,g,-s,f-1.6),M(p,x,-s,m-1.6),M(p,x,s,m-1.6),[0,-1,0],[0,0,1,0,1,1,0,1]),u%7===0)){for(let T of[-1,1]){let w=M(d,g,T*5,0),E=t.y[d]-1.6;e.bridge.add(It.cyl(12),gt(w[0],(E-2)/2,w[2],0,0,0,1.6,E+2,1.6))}e.bridge.add(It.box(),gt(t.x[d],t.y[d]-2,t.z[d],0,Math.atan2(t.dx[d],t.dz[d]),0,13,.8,1.6))}if(!R&&t.y[d]>1.6&&this.rails.push({h:t,i:d}),u%12===0)for(let T of[-1,1])this.posts.push({x:t.x[d]+g[0]*T*(s+.7),y:t.y[d],z:t.z[d]+g[1]*T*(s+.7),rot:Math.atan2(t.dx[d],t.dz[d])})}let r=u=>u?xa[u[0]].name:"Serraria \u2022 Pedreira",a=(t.length/1e3).toFixed(1).replace(".",","),o=(u,d,p)=>{let g=[-t.dz[u],t.dx[u]],x=t.x[u]+g[0]*d*(s+3),f=t.z[u]+g[1]*d*(s+3);this.roadSign(x,f,Math.atan2(t.dx[u],t.dz[u])+(d>0?Math.PI:0),p,`${t.id} \u2022 ${a} km`,"#0f6b3a",t.y[u])};o(Math.min(t.n-1,16),1,r(t.def.to)),t.def.to&&o(Math.max(0,t.n-17),-1,r(t.def.from));let c=t.n/2|0,l=[-t.dz[c],t.dx[c]],h=new Xt(new ea(.9,24),new ue({map:At.speedSign(80),side:Me}));h.position.set(t.x[c]+l[0]*(s+2),t.y[c]+2.6,t.z[c]+l[1]*(s+2)),h.rotation.y=Math.atan2(t.dx[c],t.dz[c])+Math.PI,this.scene.add(h),e.metal.add(It.cyl(6),gt(h.position.x,t.y[c]+1,h.position.z,0,0,0,.12,2.6,.12),11581115)}buildRails(){let t=new Rt;for(let{h:s,i:r}of this.rails){let a=Math.min(s.n-1,r+1);for(let o of[-1,1]){let c=9+.3,l=s.x[r]-s.dz[r]*o*c,h=s.z[r]+s.dx[r]*o*c,u=s.x[a]-s.dz[a]*o*c,d=s.z[a]+s.dx[a]*o*c,p=s.y[r],g=s.y[a];t.quad([l,p+.45,h],[u,g+.45,d],[u,g+.8,d],[l,p+.8,h],[-s.dz[r]*o,0,s.dx[r]*o],[0,0,1,0,1,1,0,1])}}this.rails.length&&this.scene.add(t.mesh(new bn({map:At.metal(),side:Me,shininess:60})));let e=new pn(.15,1.1,.15);e.translate(0,.55,0);let n=new Zn(e,new mn({color:15921906}),this.posts.length);this.posts.forEach((s,r)=>n.setMatrixAt(r,gt(s.x,s.y,s.z,0,s.rot,0))),n.computeBoundingSphere(),this.scene.add(n)}buildRiverAndSea(){let t=this.river,e=new Rt,n=di/2,s=o=>{let c=Math.max(0,o-1),l=Math.min(t.n-1,o+1),h=t.x[l]-t.x[c],u=t.z[l]-t.z[c],d=Math.hypot(h,u)||1;return[-u/d,h/d]};for(let o=0;o<t.n-1;o++){let c=s(o),l=s(o+1),h=(x,f,m,y)=>[t.x[x]+f[0]*m,y,t.z[x]+f[1]*m],u=h(o,c,-n,.06),d=h(o,c,n,.06),p=h(o+1,l,n,.06),g=h(o+1,l,-n,.06);e.quad(u,d,p,g,[0,1,0],[u[0]/30,u[2]/30,d[0]/30,d[2]/30,p[0]/30,p[2]/30,g[0]/30,g[2]/30]);for(let x of[-1,1]){let f=h(o,c,x*n,.045),m=h(o,c,x*(n+11),0),y=h(o+1,l,x*n,.045),_=h(o+1,l,x*(n+11),0);this.B.sand.quad(f,m,_,y,[0,1,0],[0,0,1,0,1,1,0,1])}if(o%3===0)for(let x of[-1,1]){let f=h(o,c,x*(n+16+this.r()*10),0);this.tree(f[0],f[2],1.2,0,-.1)}}this.M.sand.side=Me;let r=new bn({map:At.water().clone(),color:10274518,shininess:110,specular:10075101,transparent:!0,opacity:.94,side:Me});r.map.needsUpdate=!0,this.riverMesh=e.mesh(r),this.scene.add(this.riverMesh),this.B.sand.ground(-6e3,1745,6e3,1800,.02,10);let a=new Xt(new We(12e3,4e3),new bn({map:At.water().clone(),shininess:90,specular:8956620,transparent:!0,opacity:.95}));a.material.map.needsUpdate=!0,a.material.map.repeat.set(400,130),a.rotation.x=-Math.PI/2,a.position.set(0,.07,3790),this.water=a,this.scene.add(a)}buildHills(){if(!this.hills.length)return;let t=new Jn(1,22,9,0,Math.PI*2,0,Math.PI/2),e=t.attributes.uv;for(let r=0;r<e.count;r++)e.setXY(r,e.getX(r)*40,e.getY(r)*10);let n=[];for(let r=0;r<e.count;r++)n.push(.72,.8,.64);t.setAttribute("color",new kt(n,3));let s=new Zn(t,this.M.grass,this.hills.length);this.hills.forEach((r,a)=>s.setMatrixAt(a,gt(r.x,-4,r.z,0,0,0,r.r,r.h,r.r))),s.computeBoundingSphere(),s.receiveShadow=!0,this.scene.add(s);for(let r of this.hills)r.x>300&&r.z<900&&this.r()>.4&&this.turbine(r.x,r.z,50,1,r.h-6)}scatterForest(){let t=this.r,e=this.q.trees,n=0,s=0;for(;s<e&&n++<e*8;){let a=Se.x0+t()*(Se.x1-Se.x0),o=Se.z0+t()*(Se.z1-Se.z0),c=Ea(a/520,o/520)*.8+(a<-300&&o<600?.55:-.15);if(t()>c||!this.isFree(a,o,2))continue;let l=a<-1500||Ea(a/300+9,o/300)>.62;this.tree(a,o,1.3+t()*.8,l?1:0,this.terrainH(a,o)-.2),s++}for(let a of this.fields)for(let o=0;o<5;o++)this.tree(a.x0+t()*(a.x1-a.x0),a.z0-5,1.1,0,0);let r=this.q.trees/7e3;for(let a of this.hws)if(a.id!=="SP-280")for(let o=0;o<a.n;o+=2){let c=Math.round(3*r+t());for(let l=0;l<c;l++){let h=t()<.5?-1:1,u=18+a.y[o]*1.9+Math.pow(t(),1.6)*70,d=a.x[o]-a.dz[o]*h*u+(t()-.5)*6,p=a.z[o]+a.dx[o]*h*u+(t()-.5)*6;if(!this.isFree(d,p,0))continue;let g=a.id==="RS-030"?t()<.7:t()<.3;this.tree(d,p,1.5+t()*1.1,g?1:0,this.terrainH(d,p)-.2)}}}buildTrees(){let t=a=>{let o=new Rt(!0),c=new Mn(.2,.32,3.2,6);if(c.translate(0,1.6,0),o.add(c,gt(0,0,0),7031859),a===0){let l=new na(1,0);o.add(l,gt(0,4.6,0,0,0,0,2.6,2.3,2.6),6265402),o.add(l,gt(1.1,3.9,.5,.5,.3,0,1.7,1.5,1.7),7646021),o.add(l,gt(-.9,4.1,-.6,.2,1,0,1.8,1.6,1.8),5474867)}else{let l=new Ii(1,1,7);o.add(l,gt(0,4,0,0,0,0,2.4,3.4,2.4),3963450),o.add(l,gt(0,5.9,0,0,.4,0,1.8,3,1.8),4424770),o.add(l,gt(0,7.6,0,0,.8,0,1.1,2.4,1.1),4886088)}return o.geometry()},e=[t(0),t(1)],n=700,s=new Map;for(let a of this.trees){let o=Math.floor(a.x/n)*1e3+Math.floor(a.z/n)+":"+a.k;s.has(o)||s.set(o,[]),s.get(o).push(a)}let r=new dt;for(let[a,o]of s){let c=+a.split(":")[1],l=new Zn(e[c],this.M.leaf,o.length);o.forEach((h,u)=>{l.setMatrixAt(u,gt(h.x,h.y,h.z,0,h.rot,0,h.s,h.s*(.9+u%5*.06),h.s)),r.setHSL(.15+u*37%10/150,.3,.8+u*13%10/45),l.setColorAt(u,r)}),l.computeBoundingSphere(),l.castShadow=!0,this.scene.add(l)}}buildLamps(){let t=this.lamps.length,e=new Mn(.12,.16,8,6);e.translate(0,4,0);let n=new pn(.15,.15,2.2);n.translate(0,8,1);let s=new pn(.5,.2,.9);s.translate(0,7.9,2);let r=new Zn(e,new mn({color:6122878}),t),a=new Zn(n,new mn({color:6122878}),t),o=new Zn(s,new ue({color:16642768}),t),c=new We(16,16);c.rotateX(-Math.PI/2),c.translate(0,.12,3.5);let l=new Zn(c,new ue({map:At.glow(),color:16757596,transparent:!0,opacity:0,depthWrite:!1,blending:Rn}),t);this.lamps.forEach((h,u)=>{let d=this.areas.find(x=>x.city&&h.x>=x.x0&&h.x<=x.x1&&h.z>=x.z0&&h.z<=x.z1),p=0;if(d){let x=d.city,f=Math.round((h.x-x.x0)/140)*140+x.x0,m=Math.round((h.z-x.z0)/140)*140+x.z0;p=Math.abs(h.x-f)<Math.abs(h.z-m)?f>h.x?Math.PI/2:-Math.PI/2:m>h.z?0:Math.PI}let g=gt(h.x,0,h.z,0,p,0);r.setMatrixAt(u,g),a.setMatrixAt(u,g),o.setMatrixAt(u,g),l.setMatrixAt(u,g)}),this.lampHeads=o,this.lampPools=l,l.visible=!1;for(let h of[r,a,o,l])h.computeBoundingSphere(),this.scene.add(h)}setNight(t){for(let e of this.M.f)e.emissiveIntensity=Math.max(0,t*1.1-.1);this.lampPools.visible=t>.05,this.lampPools.material.opacity=t*.9,this.lampHeads.material.color.setRGB(.75+t*.25,.72+t*.2,.65+t*.1)}update(t,e){for(let n of this.animated)n.obj.rotation.z+=n.speed*t;this.water&&this.water.material.map.offset.set(e*.004,e*.006),this.riverMesh&&this.riverMesh.material.map.offset.set(e*.02,e*.01)}};var zr=new I;function Ln(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();let l=.5*a/(a+o),h=1-zr.angleTo(i)/c;return Math.sign(zr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Ys=class extends pn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new I,c=new I,l=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new I,x=.5/s;for(let f=0,m=0;f<h.length;f+=3,m+=2)switch(o.fromArray(h,f),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[f+0]=l.x*Math.sign(o.x)+c.x*r,h[f+1]=l.y*Math.sign(o.y)+c.y*r,h[f+2]=l.z*Math.sign(o.z)+c.z*r,u[f+0]=c.x,u[f+1]=c.y,u[f+2]=c.z,Math.floor(f/p)){case 0:g.set(1,0,0),d[m+0]=Ln(g,c,"z","y",r,n),d[m+1]=1-Ln(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[m+0]=1-Ln(g,c,"z","y",r,n),d[m+1]=1-Ln(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[m+0]=1-Ln(g,c,"x","z",r,t),d[m+1]=Ln(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-Ln(g,c,"x","z",r,t),d[m+1]=1-Ln(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-Ln(g,c,"x","y",r,t),d[m+1]=1-Ln(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[m+0]=Ln(g,c,"x","y",r,t),d[m+1]=1-Ln(g,c,"y","x",r,e);break}}};var Ca="medium";function Cd(i){Ca=i}var Aa=null;function La(){if(Aa)return Aa;let i=Ca!=="low",t=e=>i?new ks(e):new bn({color:e.color,map:e.map,vertexColors:e.vertexColors,side:e.side,shininess:e.roughness<.3?120:20,specular:e.metalness>.5?16777215:3355443});return Aa={chrome:t({color:15922422,metalness:1,roughness:.14,map:At.metal()}),alu:t({color:13225425,metalness:.9,roughness:.3}),dark:t({color:2040616,metalness:.1,roughness:.75,side:Me}),steel:t({color:3883336,metalness:.5,roughness:.5}),glass:t({color:725529,metalness:.3,roughness:.04}),rubber:t({color:16777215,map:At.tire(),metalness:0,roughness:.92}),rim:t({color:15264492,metalness:.85,roughness:.25}),light:new ue({color:16775393}),red:new ue({color:14037041}),amber:new ue({color:16753178}),grill:t({color:16777215,map:At.grill(),metalness:.7,roughness:.3}),flat:t({vertexColors:!0,metalness:.15,roughness:.55}),flatChrome:t({vertexColors:!0,metalness:.9,roughness:.2}),panel:t({color:16777215,map:At.panel(),metalness:.2,roughness:.5}),blob:new ue({map:At.blob(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),glow:new Os({map:At.glow(),color:16774102,transparent:!0,depthWrite:!1,blending:Rn}),glowRed:new Os({map:At.glow(),color:16722458,transparent:!0,depthWrite:!1,blending:Rn}),beam:new ue({map:At.beam(),transparent:!0,depthWrite:!1,blending:Rn,polygonOffset:!0,polygonOffsetFactor:-3})},Aa}function X_(i){return Ca==="high"?new ra({color:i,map:At.paint(),metalness:.35,roughness:.35,clearcoat:1,clearcoatRoughness:.08}):Ca==="medium"?new ks({color:i,map:At.paint(),metalness:.35,roughness:.33}):new bn({color:i,map:At.paint(),shininess:90,specular:8947848})}var Oc={};function Pd(i,t){let e=i+"_"+t;if(Oc[e])return Oc[e];let n=[[i*.6,-t/2],[i*.9,-t/2],[i*.985,-t*.4],[i,-t*.25],[i,t*.25],[i*.985,t*.4],[i*.9,t/2],[i*.6,t/2]].map(([l,h])=>new ot(l,h)),s=new Rr(n,22),r=[[.001,t*.36],[i*.18,t*.38],[i*.24,t*.3],[i*.5,t*.26],[i*.6,t*.34],[i*.6,-t*.3]].map(([l,h])=>new ot(l,h)),a=new Rr(r,22),o=new Mn(.03,.03,.06,6),c=new Rt;c.add(a,gt(0,0,0));for(let l=0;l<10;l++){let h=l/10*Math.PI*2;c.add(o,gt(Math.cos(h)*i*.32,t*.36,Math.sin(h)*i*.32))}return Oc[e]={tire:s,rim:c.geometry()}}function Ld(i){let t=new Rt,e=[];for(let[s,r]of i){let a=t.idx.length;for(let[o,c]of s)t.add(o,c);e.push([a,t.idx.length-a,r])}let n=t.geometry();for(let[s,r,a]of e)r&&n.addGroup(s,r,a);return n}function Id(i,t,e,n,s){let{tire:r,rim:a}=Pd(e,n),o=[],c=[];for(let u of[-1,1]){let d=u>0?-Math.PI/2:Math.PI/2;s?(o.push([r,gt(u*(t/2+n*.52),0,0,0,0,d)]),o.push([r,gt(u*(t/2-n*.52),0,0,0,0,d)]),c.push([a,gt(u*(t/2+n*.52),0,0,0,0,d)])):(o.push([r,gt(u*t/2,0,0,0,0,d)]),c.push([a,gt(u*t/2,0,0,0,0,d)]))}let l=La(),h=new Xt(Ld([[o,0],[c,1]]),[l.rubber,l.rim]);return h.position.set(0,e,i),h.castShadow=!0,h}function Ra(i,t,e,n,s){let{tire:r,rim:a}=Pd(e,n),o=s>0?-Math.PI/2:Math.PI/2,c=La(),l=new Xt(Ld([[[[r,gt(0,0,0,0,0,o)]],0],[[[a,gt(0,0,0,0,0,o)]],1]]),[c.rubber,c.rim]);l.castShadow=!0;let h=new an;return h.position.set(t,e,i),h.add(l),h}function Dd(i,t){for(let[e,n]of i){let s=e.mesh(n,{cast:!0});s&&t.add(s)}}var Rd={};function q_(i,t,e,n){let s=[i,t,e,n].join("_");return Rd[s]||(Rd[s]=new Ys(i,t,e,2,n))}var $_=new Mn(1,1,1,14,1,!0,0,Math.PI);function Y_(i){let t=La(),e=new an;e.rotation.order="YXZ";let n=new an;e.add(n);let s=new Rt,r=new Rt,a=new Rt,o=new Rt,c=new Rt,l=new Rt,h=new Rt,u=new Rt,d=new Rt,p=new Rt,g=(K,Q,ht,Mt,Tt,N,oe,yt=0,Pt=0,St=0)=>K.add(It.box(),gt(Tt,N,oe,yt,Pt,St,Q,ht,Mt)),x=(K,Q,ht,Mt,Tt,N,oe,yt=.1,Pt=0)=>K.add(q_(Q,ht,Mt,yt),gt(Tt,N,oe,Pt,0,0)),f=(K,Q,ht,Mt,Tt,N,oe=0,yt=0,Pt=0,St=14)=>K.add(It.cyl(St),gt(Mt,Tt,N,oe,yt,Pt,Q*2,ht,Q*2)),m=(K,Q,ht,Mt,Tt,N)=>K.add($_,gt(Mt,Tt,N,0,0,Math.PI/2,Q,ht,Q)),y=i.rigid,_=i.id==="urbano",M=i.cab==="conventional",R=_?.42:.53,T=_?3.3:y?4.3:M?i.axles>=4?5.6:5.2:i.axles>=4?4.6:3.9,w=_?2.15:2.5,E=_?.95:1.15,P=_?1.75:2.05,v=T+(_?1.25:M?2.05:1.4),b=v,D=_?1.9:2.25,O=y?-(_?1.4:2):-1.45;for(let K of[-1,1])g(d,.12,.3,v-O-.4,K*.45,E-.28,(v+O)/2-.15);for(let K=O+.4;K<T;K+=1.1)g(d,.9,.14,.12,0,E-.28,K);if(M){b=v-2.15-.1,x(s,w*.74,1.05,2.15,0,E+.5,v-2.15/2-.05,.22,.03),g(r,w*.66,1.15,.1,0,E+.48,v-.04),g(u,w*.56,1,.05,0,E+.48,v+.02),g(r,.3,.12,.12,0,E+1.12,v-.1);for(let Q of[-1,1])m(s,R+.16,.6,Q*(w/2-.28),R+.02,T),g(s,.55,.06,1.6,Q*(w/2-.28),R*2+.16,T-.4,.15),x(r,.5,.26,.12,Q*(w/2-.42),E+.05,v-.25,.05),g(c,.4,.17,.04,Q*(w/2-.42),E+.05,v-.18),f(r,.22,1.2,Q*(w/2+.05),E+1.1,b+.1),f(r,.06,.6,Q*(w/2+.05),E+1.9,b+.1);x(r,w+.1,.4,.32,0,E-.2,v+.12,.06)}else{g(u,w*.66,P*.36,.04,0,E+P*.33,v+.01),g(r,w*.7,.07,.06,0,E+P*.52,v+.02),g(r,.26,.26,.04,0,E+P*.42,v+.05,0,0,Math.PI/4),x(a,w+.06,.42,.34,0,E-.12,v+.08,.08);for(let K of[-1,1])x(r,.56,.26,.1,K*(w/2-.4),E+.22,v+.02,.05),g(c,.46,.18,.04,K*(w/2-.4),E+.22,v+.07),g(h,.14,.18,.04,K*(w/2-.08),E+.22,v+.04),f(c,.07,.04,K*(w/2-.35),E-.14,v+.26,Math.PI/2,0,0,10),m(a,R+.12,.42,K*(w/2-.25),R,T)}let L=b-D/2;x(s,w,P,D,0,E+P/2,L,.14),i.roof==="high"?x(s,w-.04,1,D-.2,0,E+P+.42,L-.08,.28):i.roof==="mid"&&x(s,w-.06,.42,D-.3,0,E+P+.16,L-.1,.18);let B=M?1.5:.9;if(M||!y){let K=P+(i.roof==="high"?.95:.3);x(s,w-.02,K,B,0,E+K/2,b-D-B/2+.05,.16)}let F=E+P*.7,Z=P*.42;if(M)for(let K of[-1,1])g(o,w/2-.22,Z,.05,K*(w/4-.02),F,b+.01,-.12);else g(o,w-.28,Z,.05,0,F,b+.01,-.05);x(a,w-.16,.14,.42,0,E+P+.02,b+.1,.05,-.2);for(let K=-2;K<=2;K++)g(h,.13,.07,.08,K*.34,E+P+(i.roof==="high"?.94:.13),b-.15);for(let K of[-1,1]){g(o,.04,P*.36,D*.4,K*(w/2+.005),F+.02,b-D*.3),g(o,.04,P*.2,D*.12,K*(w/2+.005),F-.05,b-D*.08),g(a,.03,P*.85,.025,K*(w/2+.006),E+P*.45,b-D*.66),g(r,.04,.05,.22,K*(w/2+.02),E+P*.5,b-D*.6);for(let Q of[0,1])g(d,.36,.05,.5,K*(w/2-.15),.5+Q*.38,b-D*.35);g(a,.08,.95,.6,K*(w/2-.02),.72,b-D*.35),g(r,.5,.05,.05,K*(w/2+.23),E+P*.86,b-.1),g(r,.05,.75,.05,K*(w/2+.47),E+P*.62,b-.1),x(a,.13,.62,.3,K*(w/2+.5),E+P*.68,b-.14,.04),g(o,.02,.52,.22,K*(w/2+.43),E+P*.68,b-.14),x(a,.12,.26,.22,K*(w/2+.5),E+P*.3,b-.12,.04),i.roof==="high"&&!y&&g(s,.05,P+.8,.55,K*(w/2-.02),E+(P+.8)/2+.1,b-D-B-.2),g(l,.32,.18,.05,K*.88,E-.2,O-.02),g(c,.12,.18,.05,K*.6,E-.2,O-.02),g(a,.62,.62,.03,K*1,.55,i.axles>=3&&!y?-1.45:-.8)}if(!_){let K=T-(M?2.4:1.6);f(p,.34,1.4,1.02,.86,K,Math.PI/2);for(let Q of[-.45,.45])f(a,.355,.06,1.02,.86,K+Q,Math.PI/2);g(a,.5,.5,.7,-1,.85,K+.1),f(d,.17,1.1,-.95,.62,K-.9,Math.PI/2)}if(!y){let K=b-D-B-.25;for(let Q of M?[-1,1]:[1])f(r,.11,3,Q*(w/2-.12),E+P+.25,K),f(r,.15,1,Q*(w/2-.12),E+P-.6,K);g(p,1.3,.05,.55,0,E+.05,K-.1);for(let[Q,ht]of[[12597547,-.18],[3049182,.18]]){let Mt=new Xt(new sa(.16,.025,6,16),new mn({color:Q}));Mt.position.set(ht,E+.5,K-.05),n.add(Mt)}g(d,1.35,.14,1.3,0,E-.02,.3),g(p,1.2,.03,1.1,0,E+.06,.3);for(let Q of[-1,1])g(a,.7,.05,i.axles>=3?2.7:1.4,Q*.98,R*2+.14,0)}let q=.3;if(y){let K=b-D-.15,Q=O,ht=_?2.3:2.7,Mt=_?2.25:2.5;g(d,Mt,.12,K-Q,0,E+.02,(Q+K)/2);let Tt=new mn({map:At.cargoBox("#"+new dt(i.color===15921906?3108830:i.color).getHexString(),"DRIZZIE")}),N=new Rt,oe=E+.08,yt=E+.08+ht;N.quad([Mt/2+.01,oe,K],[Mt/2+.01,oe,Q],[Mt/2+.01,yt,Q],[Mt/2+.01,yt,K],[1,0,0],[1,0,0,0,0,1,1,1]),N.quad([-Mt/2-.01,oe,Q],[-Mt/2-.01,oe,K],[-Mt/2-.01,yt,K],[-Mt/2-.01,yt,Q],[-1,0,0],[0,0,1,0,1,1,0,1]),n.add(N.mesh(Tt,{cast:!0}));let Pt=new Rt(!0);Pt.box(-Mt/2,oe,Q,Mt/2,yt,K,1,16053492);for(let St of[-1,1])Pt.add(It.box(),gt(St*Mt/4,(oe+yt)/2,Q-.02,0,0,0,Mt/2-.08,ht-.12,.02),14474460);Pt.add(It.box(),gt(0,yt+.02,(Q+K)/2,0,0,0,Mt+.04,.06,K-Q+.04),13685718),n.add(Pt.mesh(t.flat,{cast:!0}));for(let St of[-.3,.3])g(r,.04,ht-.3,.04,St,(oe+yt)/2,Q-.04);g(a,Mt-.2,.12,.1,0,.55,Q-.05),q=O}let J=X_(i.color);Dd([[s,J],[r,t.chrome],[a,t.dark],[o,t.glass],[c,t.light],[l,t.red],[h,t.amber],[u,t.grill],[d,t.steel],[p,t.alu]],n);let et=new an;for(let K of[-1,1]){let Q=new Bs(t.glow);Q.scale.set(1.6,1.6,1),Q.position.set(K*(w/2-.42),M?E+.05:E+.22,v+.15),et.add(Q);let ht=new Bs(t.glowRed);ht.scale.set(.9,.9,1),ht.position.set(K*.88,E-.2,O-.12),et.add(ht)}let st=new Xt(new We(9,26),t.beam);st.rotation.x=-Math.PI/2,st.position.set(0,.07,v+13),et.add(st),et.visible=!1,e.add(et);let vt=[],Nt=[],X=w/2-.3,tt=_?.26:.32;vt.push(Ra(T,X,R,tt,1),Ra(T,-X,R,tt,-1)),i.axles>=4&&vt.push(Ra(T-1.55,X,R,tt,1),Ra(T-1.55,-X,R,tt,-1));for(let K of vt)e.add(K);for(let K of i.axles>=3?[.68,-.68]:[0]){let Q=Id(K,_?1.45:1.75,R,_?.22:.3,!0);Nt.push(Q),e.add(Q)}let xt=new Xt(new We(w+1,v-O+1.5),t.blob);return xt.rotation.x=-Math.PI/2,xt.position.set(0,.05,(v+O)/2),e.add(xt),{root:e,body:n,front:vt,rear:Nt,wb:T,wr:R,hitchZ:q,zf:v,rearEnd:O,paint:J,blob:xt,cabW:w,night:et,y0:E,cabFront:b,ch:P,conv:M}}function Z_(i){let t=La(),e=new an;e.rotation.order="YXZ";let n=new Rt(!0),s=new Rt,r=new Rt(!0),a=new Rt,o=new Rt,c=new Rt,l=new Rt,h=(P,v,b,D,O,L,B,F,Z=0,q=0,J=0)=>P.add(It.box(),gt(O,L,B,Z,q,J,v,b,D),F),u=(P,v,b,D,O,L,B,F,Z,q,J=18)=>P.add(It.cyl(J),gt(D,O,L,B,F,Z,v*2,b,v*2),q),d=i.trailer,p=i.model,g=p==="blade"?20:d==="tank"?12.5:d==="bulk"?12:d==="lowboy"?14.5:13.6,x=1,f=-(g-x),m=d==="lowboy"?i.t>60?5:4:3,y=1.35,_=f+1.6+(m-1)*y/2,M=1.35,R=[];for(let P of[-1,1]){h(l,.14,.42,g-.6,P*.48,M-.3,(x+f)/2),h(s,.12,1,.12,P*.9,.6,-1.6),h(s,.32,.06,.32,P*.9,.08,-1.6),h(s,.06,.32,5.5,P*1.2,M-.45,f+7.6),h(a,.38,.16,.05,P*1,M-.4,f-.03);for(let v=x-1.5;v>f+1;v-=3)h(o,.04,.08,.12,P*1.28,M-.1,v)}h(s,2.4,.16,.12,0,M-.75,f-.06);for(let P=x-1;P>f+1;P-=1.2)h(l,.96,.1,.1,0,M-.3,P);if(d==="box"){let v=M+1.375;c.add(It.box(),gt(0,v,(x+f)/2,0,0,0,2.56,2.75,g));let b=new mn({map:At.cargoBox("#d63031","DRIZZIE")}),D=new Rt,O=M+.3,L=M+2.75-.25,B=1.29,F=x-1.5,Z=f+1.5;D.quad([B,O,F],[B,O,Z],[B,L,Z],[B,L,F],[1,0,0],[1,0,0,0,0,1,1,1]),D.quad([-B,O,Z],[-B,O,F],[-B,L,F],[-B,L,Z],[-1,0,0],[0,0,1,0,1,1,0,1]),R.push(D.mesh(b,{cast:!1}));for(let q of[-1,1])h(n,1.22,2.75-.15,.04,q*.63,v,f-.02,15132906);for(let q of[-.95,-.35,.35,.95])h(r,.04,2.75-.3,.05,q,v,f-.06,12568010);h(n,2.56,.12,g,0,M+2.75+.06,(x+f)/2,13685718)}else if(d==="tank"){let P=p==="silo"?12106944:15265007;u(r,1.25,g-1.2,0,M+1.3,(x+f)/2,Math.PI/2,0,0,P,28),r.add(It.sphere(),gt(0,M+1.3,x-.6,0,0,0,2.5,2.5,.8),P),r.add(It.sphere(),gt(0,M+1.3,f+.6,0,0,0,2.5,2.5,.8),P);for(let v=x-1.6;v>f+1;v-=2.2)u(n,1.27,.08,0,M+1.3,v,Math.PI/2,0,0,10133670,28);for(let v=0;v<3;v++)u(n,.3,.2,0,M+2.6,x-3-v*3.3,0,0,0,8359053,12);h(n,.6,.06,g-2.4,0,M+2.62,(x+f)/2,7174788);for(let v of[-1,1])h(n,.03,.2,g-2.4,v*.3,M+2.75,(x+f)/2,16765952);h(n,.9,.6,.03,1,M+1.3,f+.1,i.hazard?16747520:3049182),h(n,.5,2.4,.06,0,M+1.3,f+.05,8359053)}else if(d==="bulk"){h(n,2.5,.12,g,0,M+.06,(x+f)/2,2911902);for(let v of[-1,1])h(n,.08,2.1,g,v*1.21,M+2.1/2,(x+f)/2,2911902);h(n,2.5,2.1,.08,0,M+2.1/2,x-.04,2911902),h(n,2.5,2.1,.08,0,M+2.1/2,f+.04,2911902);for(let v=0;v<8;v++)for(let b of[-1,1])h(s,.06,2.1,.08,b*1.26,M+2.1/2,x-1-v*1.5);n.add(It.sphere(),gt(0,M+2.1-.15,(x+f)/2,0,0,0,2.3,.9,g-.5),13214812)}else if(d==="flatbed"){h(n,2.5,.22,g,0,M,(x+f)/2,7162927),h(n,2.5,1.2,.1,0,M+.7,x-.05,3426654);let P=M+.11,v=b=>{for(let D=x-1.8;D>f+1;D-=2.6)h(n,2.56,.02,.05,0,b,D,15844367)};if(p==="logs"){for(let b=0;b<3;b++)for(let D=0;D<4-b;D++){let O=(D-(3-b)/2)*.6;u(n,.3,g-1.2,O,P+.3+b*.52,(x+f)/2,Math.PI/2,0,0,b%2?9329458:8014374,10);for(let L of[x-.6,f+.6])u(n,.29,.02,O,P+.3+b*.52,L,Math.PI/2,0,0,14200954,10)}for(let b=0;b<5;b++)for(let D of[-1,1])h(s,.08,2.2,.08,D*1.2,P+1.1,x-1-b*2.8)}else if(p==="container"){let b=new Xt(It.box(),new mn({map:At.container(2388387)}));b.scale.set(2.44,2.59,12.19),b.position.set(0,P+1.3,(x+f)/2),R.push(b),v(P+2.62)}else if(p==="coils")for(let b=0;b<4;b++)u(r,.85,1.6,0,P+.86,x-2-b*3,0,0,Math.PI/2,12568010,24),u(n,.3,1.62,0,P+.86,x-2-b*3,0,0,Math.PI/2,2236962,12),h(s,1.6,.25,1.4,0,P+.12,x-2-b*3),h(n,.05,1.8,1.7,0,P+.9,x-2-b*3,15844367);else if(p==="beams"){for(let b=0;b<3;b++)for(let D=0;D<4;D++){let O=(D-1.5)*.58,L=P+.22+b*.42,B=(x+f)/2;h(n,.5,.05,g-.6,O,L+.17,B,6122878),h(n,.5,.05,g-.6,O,L-.17,B,6122878),h(n,.06,.34,g-.6,O,L,B,4872810)}v(P+1.4)}}else if(d==="lowboy"){h(n,2.6,.3,3.4,0,M,x-1.6,12597547),h(n,2.9,.3,g-5.5,0,.95,(x-3.4+f+2.1)/2,12597547),h(n,2.6,.3,2.1,0,M-.1,f+1.05,12597547);for(let D of[-1,1])h(n,.6,1.6,.12,D*.8,M+.7,f+.2,12597547,.5);for(let D of[-1,1])h(n,1,.6,.03,D*.7,M+.6,f-.1,16777215);let v=.95+.15,b=(x-3.4+f+2.1)/2;if(p==="tractor"){h(n,1.3,1.2,3.2,0,v+1.3,b+.3,3050298),h(n,1.4,1.5,1.4,0,v+2.3,b-.9,3050298),h(n,1.3,1,1.3,0,v+3.1,b-.9,1845299);for(let D of[-1,1])u(n,.95,.6,D*1.1,v+.95,b-1,0,0,Math.PI/2,2236962),u(n,.55,.62,D*1.1,v+.95,b-1,0,0,Math.PI/2,15844367),u(n,.55,.4,D*.95,v+.55,b+1.5,0,0,Math.PI/2,2236962)}else if(p==="excavator"){for(let D of[-1,1]){h(s,.7,.9,4.8,D*1.05,v+.45,b);for(let O=0;O<5;O++)u(n,.22,.72,D*1.05,v+.25,b-1.8+O*.9,0,0,Math.PI/2,5592405,10)}h(n,2.6,1.2,3.6,0,v+1.5,b-.6,15844367),h(n,1,1.4,1.2,-.7,v+2.8,b+.4,15844367),h(n,.9,1,.04,-.7,v+2.9,b+1.01,1845299),h(n,.5,.5,4,.5,v+2.6,b+2.4,15844367,-.35),h(n,.45,.45,2.8,.5,v+2,b+4.6,15844367,.9),h(s,1,.8,.8,.5,v+1,b+5.2)}else if(p==="transformer"){h(n,2.6,3,4.2,0,v+1.5,b,8359053);for(let D=0;D<9;D++)for(let O of[-1,1])h(n,.08,2.4,1,O*1.36,v+1.5,b-1.8+D*.45,9807270);for(let D=0;D<3;D++)u(n,.18,1.3,(D-1)*.8,v+3.6,b+1,0,0,0,9127187,10)}else p==="blade"?(n.add(It.sphere(),gt(0,v+1.6,b-2,0,0,0,2.2,2,30),16054007),u(n,1.1,1.6,0,v+1.6,b+30/2-3.5,Math.PI/2,0,0,15067368,20),h(s,.4,1.4,.6,0,v+.7,b+2),h(s,.4,1.4,.6,0,v+.7,b-6)):p==="press"&&(h(n,2.8,3.6,4.6,0,v+1.8,b,3038604),h(n,1.8,1.2,1.6,0,v+4.2,b,2049126),h(r,.25,3,.25,1.2,v+2,b+2.2,12436423),h(r,.25,3,.25,-1.2,v+2,b+2.2,12436423));h(n,2.3,.35,.03,0,M+.9,f-.06,16761095)}Dd([[n,t.flat],[s,t.dark],[r,t.flatChrome],[a,t.red],[o,t.amber],[c,t.panel],[l,t.steel]],e);for(let P of R)P&&(P.castShadow=!0,e.add(P));let T=[];for(let P=0;P<m;P++){let v=Id(f+1.6+P*y,1.75,.5,.28,!0);T.push(v),e.add(v)}let w=new an;for(let P of[-1,1]){let v=new Bs(t.glowRed);v.scale.set(.9,.9,1),v.position.set(P*1,M-.4,f-.15),w.add(v)}w.visible=!1,e.add(w);let E=new Xt(new We(3.4,g+1.5),t.blob);return E.rotation.x=-Math.PI/2,E.position.set(0,.05,(x+f)/2),e.add(E),e.traverse(P=>{P.isMesh&&P!==E&&(P.castShadow=!0)}),{root:e,axles:T,Lk:-_,Lt:g,front:x,back:f,blob:E,night:w}}var Bc={x:0,z:0},Pa=class{constructor(t,e,n){this.scene=t,this.shadows=n,this.x=0,this.z=0,this.h=0,this.y=0,this.pitch=0,this.tpitch=0,this.v=0,this.steer=0,this.acc=0,this.trailer=null,this.th=0,this.cargo=null,this.wheelRot=0,this.rpm=.2,this.collCooldown=0,this.reverse=!1,this.lastImpact=0,this.lightsOn=!1,this.engineOn=!1,this.setTruck(e)}setTruck(t){this.model&&this.scene.remove(this.model.root),this.def=t,this.model=Y_(t),this.model.blob.visible=!this.shadows,this.scene.add(this.model.root),this.model.night.visible=this.lightsOn,this.onModel&&this.onModel(this.model),this.trailer&&t.rigid&&this.detach(),this.sync()}attach(t){if(this.cargo=t,this.def.rigid)return;let e=Z_(t);e.blob.visible=!this.shadows,e.night.visible=this.lightsOn,this.trailer=e,this.th=this.h,this.scene.add(e.root),this.sync()}setLights(t){this.lightsOn=t,this.model.night.visible=t,this.trailer&&(this.trailer.night.visible=t)}detach(){this.trailer&&this.scene.remove(this.trailer.root),this.trailer=null,this.cargo=null}get mass(){let t=this.def.mass;return this.cargo&&(t+=this.cargo.t+(this.def.rigid?0:Md(this.cargo))),t*1e3}get speedKmh(){return Math.abs(this.v)*3.6}place(t,e,n){this.x=t,this.z=e,this.h=n,this.th=n,this.v=0,this.steer=0,this.sync()}center(t){let e=Math.sin(this.h),n=Math.cos(this.h);if(this.trailer){let s=this.x+e*this.model.hitchZ,r=this.z+n*this.model.hitchZ,a=this.trailer.Lt*.45;t.x=(this.x+e*this.model.wb*.5+s-Math.sin(this.th)*a)/2,t.z=(this.z+n*this.model.wb*.5+r-Math.cos(this.th)*a)/2}else t.x=this.x+e*this.model.wb*.4,t.z=this.z+n*this.model.wb*.4;return t}update(t,e,n,s){this.world=n;let r=this.def,a=this.mass,o=r.hp*735.5*2.3,c=r.vmax/3.6,l=this.v,h=0,u=e.brake,d=e.throttle;e.gear==="auto"?(this.stopT=u>.1&&Math.abs(l)<.4&&d<.1?(this.stopT||0)+t:0,this.stopT>.3&&(this.reverse=!0),d>.1&&l>-.4&&(this.reverse=!1)):this.reverse=e.gear==="R";let p=this.engineOn&&e.gear!=="N",g=e.gear==="auto"&&this.reverse;this.reverse?g?(p&&u>0&&l>-4.5&&(h-=u*Math.min(o/Math.max(-l,3),a*1.6)),d>0&&l<0&&(h+=d*a*6)):(p&&d>0&&l>-5&&(h-=d*Math.min(o/Math.max(-l,3),a*1.6)),u>0&&l<0&&(h+=u*a*6.5),u>0&&l>0&&(h-=u*a*6.5)):(p&&d>0&&l>=-.3&&(h+=d*Math.min(o/Math.max(l,3),a*3,r.hp*250)),u>0&&l>0&&(h-=u*a*(6.8-Math.min(2.2,a/4e4))),u>0&&l<0&&(h+=u*a*6)),e.handbrake&&(h-=Math.sign(l)*a*5);let x=Math.sin(this.pitch)*.6+Math.sin(this.trailer?this.tpitch:this.pitch)*.4,f=-a*9.81*x,m=this.trailer?this.cargo.trailer==="box"?9:7:r.rigid?6.5:5,y=.5*1.2*m*l*Math.abs(l),_=(.011*a*9.81+(d<.05&&u<.05?a*.35:0))*Math.sign(l);l+=(h+(Math.abs(l)>.2||d>0?f:0)-y)/a*t;let M=_/a;Math.abs(M*t)>Math.abs(l)&&h===0?l=0:l-=M*t;let R=p?this.reverse?g?u>0?-1:0:d>0?-1:0:d>0?1:0:0;l!==0&&Math.sign(l)!==R&&Math.sign(l)!==Math.sign(this.v)&&(l=0),e.handbrake&&Math.abs(l)<.3&&(l=0),l=Math.min(l,c),l=Math.max(l,-5),this.acc=(l-this.v)/Math.max(t,.001),this.v=l,this.grade=x;let T=.6/(1+l*l/160),w=e.steer*T,E=e.steer===0?2.6:1.7,P=w-this.steer;this.steer+=Math.sign(P)*Math.min(Math.abs(P),E*t);let v=this.model.wb,b=l*Math.tan(this.steer)/v;if(this.h+=b*t,this.yaw=b,this.x+=Math.sin(this.h)*l*t,this.z+=Math.cos(this.h)*l*t,this.trailer){let Z=this.model.hitchZ,q=this.h-this.th,J=(l*Math.sin(q)-Z*b*Math.cos(q))/this.trailer.Lk;this.th+=J*t;let et=this.h-this.th;et=Math.atan2(Math.sin(et),Math.cos(et));let st=1.3;Math.abs(et)>st&&(this.th=this.h-Math.sign(et)*st)}this.collide(n,s,t),this.wheelRot+=l*t/this.model.wr;let D=Math.abs(l)/c,O=Math.min(5,Math.floor(D*6)),L=D*6-O;this.gear=this.reverse?"R":e.gear==="N"?"N":Math.abs(l)<.3?e.gear==="auto"?"N":"D":String(O+1);let B=Math.max(d,x>.02?.7:0),F=this.engineOn?Math.abs(l)<.3||e.gear==="N"?.18+d*.5:.3+L*.6*(.5+B*.5):0;this.rpm+=(F-this.rpm)*Math.min(1,t*6),this.sync()}circles(t){let e=this.model,n=Math.sin(this.h),s=Math.cos(this.h);t.length=0;for(let r of[e.zf-.9,(e.zf+e.rearEnd)/2,e.rearEnd+.9])t.push({x:this.x+n*r,z:this.z+s*r,r:e.cabW/2+.1,t:!1});if(this.trailer){let r=this.x+n*e.hitchZ,a=this.z+s*e.hitchZ,o=Math.sin(this.th),c=Math.cos(this.th),l=this.trailer;for(let h=l.front-1.2;h>l.back+.5;h-=2.4)t.push({x:r+o*h,z:a+c*h,r:1.35,t:!0});t.push({x:r+o*(l.back+1.3),z:a+c*(l.back+1.3),r:1.35,t:!0})}return t}collide(t,e,n){this.collCooldown-=n;let s=this._cs||(this._cs=[]);this.circles(s);let r=0,a=0,o=0;for(let c of s){let l=t.resolveCircle(c,c.r,Bc);l>.01&&(r+=Bc.x*(c.t?.6:1),a+=Bc.z*(c.t?.6:1),l>o&&(o=l));for(let h of e){let u=c.x-h.x,d=c.z-h.z,p=c.r+h.r,g=u*u+d*d;if(g<p*p&&g>1e-6){let x=Math.sqrt(g),f=p-x;r+=u/x*f*.5,a+=d/x*f*.5,f>o&&(o=f),h.hit=!0}}}if(this.lastImpact=0,o>0){this.x+=r,this.z+=a;let c=Math.abs(this.v)*3.6;c>4&&o>.12&&this.collCooldown<=0&&(this.lastImpact=c,this.collCooldown=.6),this.v*=c>15&&o>.3?-.12:o>.12?.6:.97}}sync(){let t=this.model,e=Math.sin(this.h),n=Math.cos(this.h),s=this.world,r=0,a=0;s&&(r=s.heightAt(this.x,this.z),a=s.heightAt(this.x+e*t.wb,this.z+n*t.wb)),this.y=r,this.pitch=Math.atan2(a-r,t.wb),t.root.position.set(this.x,r,this.z),t.root.rotation.set(-this.pitch,this.h,0);for(let c=0;c<t.front.length;c++){let l=t.front[c];l.rotation.y=this.steer*(c<2?1:.6),l.children[0].rotation.x=this.wheelRot}for(let c of t.rear)c.rotation.x=this.wheelRot;let o=(this.yaw||0)*this.v;if(t.body.rotation.z+=(Math.max(-.05,Math.min(.05,-o*.012))-t.body.rotation.z)*.2,t.body.rotation.x+=(Math.max(-.03,Math.min(.03,-this.acc*.006))-t.body.rotation.x)*.2,this.trailer){let c=this.trailer,l=this.x+e*t.hitchZ,h=this.z+n*t.hitchZ,u=r+(a-r)*(t.hitchZ/t.wb),d=l-Math.sin(this.th)*c.Lk,p=h-Math.cos(this.th)*c.Lk,g=s?s.heightAt(d,p):0;this.tpitch=Math.atan2(u-g,c.Lk),c.root.position.set(l,u,h),c.root.rotation.set(-this.tpitch,this.th,0);let x=this.wheelRot*(t.wr/.5);for(let f of c.axles)f.rotation.x=x}}};var Zs=20/2,Ud=[12597547,2719929,15528177,2899536,8359053,15844367,2600544,9323693,13849600,1118481,12436423],kc=null;function J_(i,t){let e=new Rt(!0),n=new Rt(!0);kc=kc||new Ys(1,1,1,2,.18);let s=(f,m,y,_,M,R,T,w=0)=>e.add(It.box(),gt(_,M,R,w,0,0,f,m,y),T),r=(f,m,y,_,M,R,T)=>e.add(kc,gt(_,M,R,0,0,0,f,m,y),T),a=1845299,o=4.4,c=1.8,l=.34;i===0?(r(c,.62,o,0,.62,0,t),r(c-.16,.6,2.3,0,1.18,-.25,a),r(c-.12,.1,2,0,1.47,-.25,t)):i===1?(o=4.7,c=1.95,l=.4,r(c,.85,o,0,.8,0,t),r(c-.1,.72,3.2,0,1.55,-.45,a),r(c-.06,.1,3,0,1.92,-.45,t),s(1.2,.05,2,0,2,-.45,2236962)):i===2?(o=11.5,c=2.5,l=.55,r(c,2.7,o,0,1.8,0,t),s(c+.02,.95,o-1.6,0,2.35,-.4,a),s(c-.2,1.3,.05,0,2.2,o/2+.01,a),s(c+.02,.25,o-.4,0,.75,0,16777215)):(o=10.5,c=2.5,l=.52,r(c-.1,2.3,2.1,0,2,o/2-1.1,t),s(c-.4,.9,.05,0,2.55,o/2-.04,a),r(c,2.8,o-2.6,0,2.55,-1.2,16053492),s(.9,.3,o-1,0,.75,-.3,2236962));let h=(f,m,y,_,M,R,T)=>n.add(It.box(),gt(_,M,R,0,0,0,f,m,y),T),u=i>=2?.9:.72;h(.42,.16,.06,c/2-.3,u,o/2+.01,16775393),h(.42,.16,.06,-c/2+.3,u,o/2+.01,16775393),h(.42,.16,.06,c/2-.3,u+.05,-o/2-.01,16722458),h(.42,.16,.06,-c/2+.3,u+.05,-o/2-.01,16722458);let d=i>=2?[o/2-2,-o/2+2.4]:[o/2-.85,-o/2+.85];for(let f of[-1,1])for(let m of d)e.add(It.cyl(12),gt(f*(c/2-.12),l,m,0,0,Math.PI/2,l*2,.28,l*2),1381653),e.add(It.cyl(10),gt(f*(c/2-.02),l,m,0,0,Math.PI/2,l*1.1,.06,l*1.1),12106944);let p=e.idx.length,g=e.count;for(let f=0;f<n.count*3;f++)e.pos.push(n.pos[f]),e.nor.push(n.nor[f]),e.col.push(n.col[f]);for(let f=0;f<n.count*2;f++)e.uv.push(n.uv[f]);for(let f of n.idx)e.idx.push(f+g);let x=e.geometry();return x.addGroup(0,p,0),x.addGroup(p,n.idx.length,1),{geo:x,L:o,W:c}}function Nd(i,t,e,n,s){let r=1-n;return s.x=r*r*i.x+2*r*n*t.x+n*n*e.x,s.z=r*r*i.z+2*r*n*t.z+n*n*e.z,s}var Ia=class{constructor(t,e,n){this.scene=t,this.world=n,this.cars=[];let s=[new bn({vertexColors:!0,shininess:90,specular:7829367}),new ue({vertexColors:!0})];this.beamMat=new ue({map:At.beam(),transparent:!0,opacity:.7,depthWrite:!1,blending:Rn});let r=new We(6,16);r.rotateX(-Math.PI/2);let a={};for(let o=0;o<e;o++){let c=o%7===3?3:o%11===5?2:o%3===1?1:0,l=c===2?o%2?1752220:15965202:Ud[o*7%Ud.length],h=c+"_"+l;a[h]||(a[h]=J_(c,l));let u=new Xt(a[h].geo,s);u.castShadow=!0,u.rotation.order="YXZ";let d=new Xt(r,this.beamMat);d.position.set(0,.09,a[h].L/2+8),d.visible=!1,u.add(d),u.visible=!1,t.add(u),this.cars.push({mesh:u,beam:d,L:a[h].L,type:c,off:c>=2?7.5:o%2?2.5:7.5,v:0,vmax:c>=2?12:12+o%4,x:1e5,z:1e5,y:0,h:0,stopT:0,mode:null})}this.p={x:0,z:0},this.q={x:0,z:0},this.tmp={}}node(t,e,n){return{c:t,i:e,j:n,x:t.x0+e*140,z:t.z0+n*140}}neighbors(t){let e=[];for(let[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=t.i+n,a=t.j+s;r>=0&&a>=0&&r<=t.c.nx&&a<=t.c.nz&&e.push(this.node(t.c,r,a))}return e}makeStraight(t){let{A:e,B:n}=t,s=Math.sign(n.x-e.x),r=Math.sign(n.z-e.z),a=-r,o=s,c={x:e.x+s*Zs+a*t.off,z:e.z+r*Zs+o*t.off},l={x:n.x-s*Zs+a*t.off,z:n.z-r*Zs+o*t.off};t.seg={p0:c,p1:{x:(c.x+l.x)/2,z:(c.z+l.z)/2},p2:l,len:Math.hypot(l.x-c.x,l.z-c.z),turn:!1},t.dir={x:s,z:r}}makeTurn(t){let{A:e,B:n}=t,s=this.neighbors(n).filter(x=>!(x.i===e.i&&x.j===e.j)),r=s[Math.random()*s.length|0],a=t.dir,o=Math.sign(r.x-n.x),c=Math.sign(r.z-n.z),l={x:-a.z,z:a.x},h={x:-c,z:o},u=t.seg.p2,d={x:n.x+o*Zs+h.x*t.off,z:n.z+c*Zs+h.z*t.off},p=o===a.x&&c===a.z,g=p?{x:(u.x+d.x)/2,z:(u.z+d.z)/2}:{x:n.x+(l.x+h.x)*t.off,z:n.z+(l.z+h.z)*t.off};t.seg={p0:u,p1:g,p2:d,len:p?20:Math.hypot(d.x-u.x,d.z-u.z)*1.15,turn:!p},t.next={A:n,B:r}}spawn(t,e,n){t.mesh.visible=!1,t.mode=null;let s=this.world.hw(e,n),r=On.find(a=>e>a.x0-350&&e<es(a)+350&&n>a.z0-350&&n<Vs(a)+350);if(s&&(!r||Math.random()<.45)){let a=s.o,c=a.s[s.i]+(Math.random()<.5?-1:1)*(140+Math.random()*320);if(c<30||c>a.length-30)return;t.mode="hw",t.hwy=a,t.s=c,t.dir=Math.random()<.5?1:-1,t.v=t.vmax*1.4*.8,t.mesh.visible=!0;return}if(r)for(let a=0;a<30;a++){let o=this.node(r,Math.random()*(r.nx+1)|0,Math.random()*(r.nz+1)|0),c=this.neighbors(o),l=c[Math.random()*c.length|0],h=Math.hypot((o.x+l.x)/2-e,(o.z+l.z)/2-n);if(!(h<110||h>420)){t.mode="city",t.A=o,t.B=l,t.inTurn=!1,t.next=null,this.makeStraight(t),t.s=Math.random()*t.seg.len*.8,t.v=t.vmax*.6,t.mesh.visible=!0;return}}}update(t,e,n){let s=this.p,r=this.q,a=this.tmp;for(let o of this.cars){if(!o.mode||Math.hypot(o.x-e.x,o.z-e.z)>560){if(o.x=o.z=1e5,Math.random()<.2&&this.spawn(o,e.x,e.z),!o.mode)continue;this.place(o,s,r,a);continue}let c=Math.sin(o.hh||0),l=Math.cos(o.hh||0),h=!1,u=9+o.v*1.3+o.L/2,d=(f,m,y)=>{let _=f-o.x,M=m-o.z,R=_*c+M*l;R<=0||R>u+y||Math.abs(_*l-M*c)<1.6+y&&(h=!0)};for(let f of n)d(f.x,f.z,f.r);if(!h)for(let f of this.cars)f!==o&&f.mode&&d(f.x,f.z,f.L*.35);o.hit&&(o.stopT=2.5,o.hit=!1),o.stopT-=t;let p=o.mode==="hw"?o.vmax*1.4:o.seg.turn?6:o.vmax,g=h||o.stopT>0?0:p,x=g>o.v?2.5:7;if(o.v+=Math.sign(g-o.v)*Math.min(Math.abs(g-o.v),x*t),o.mode==="hw"){if(o.s+=o.v*t*o.dir,o.s<5||o.s>o.hwy.length-5){o.mode=null,o.mesh.visible=!1;continue}}else for(o.s+=o.v*t;o.s>=o.seg.len;)o.s-=o.seg.len,o.next&&o.inTurn?(o.A=o.next.A,o.B=o.next.B,o.next=null,o.inTurn=!1,this.makeStraight(o)):(this.makeTurn(o),o.inTurn=!0);this.place(o,s,r,a)}}place(t,e,n,s){if(t.mode==="hw"){let r=t.hwy;r.at(t.s,s);let a=s.dx*t.dir,o=s.dz*t.dir;t.x=s.x-o*3.6,t.z=s.z+a*3.6,t.y=s.y+.04,t.hh=Math.atan2(a,o);let c=r.at(t.s+t.dir*4,s).y,l=-Math.atan2(c+.04-t.y,4);t.mesh.position.set(t.x,t.y,t.z),t.mesh.rotation.set(l,t.hh,0)}else{let r=t.s/t.seg.len;Nd(t.seg.p0,t.seg.p1,t.seg.p2,r,e),Nd(t.seg.p0,t.seg.p1,t.seg.p2,Math.min(1,r+.02),n),Math.hypot(n.x-e.x,n.z-e.z)>1e-4&&(t.hh=Math.atan2(n.x-e.x,n.z-e.z)),t.x=e.x,t.z=e.z,t.mesh.position.set(t.x,0,t.z),t.mesh.rotation.set(0,t.hh,0)}}setNight(t){for(let e of this.cars)e.beam.visible=t>.35}obstacles(t){t.length=0;for(let e of this.cars){if(!e.mode)continue;let n=Math.sin(e.hh),s=Math.cos(e.hh),r=e.type>=2?3:2;for(let a=0;a<r;a++){let o=(a/(r-1)-.5)*(e.L-2);t.push({x:e.x+n*o,z:e.z+s*o,r:e.type>=2?1.3:1,car:e,set hit(c){this.car.hit=c}})}}return t}};var ae=null;function Da(i,t){return ae.nodes.push({x:i,z:t,adj:[]}),ae.nodes.length-1}function Ua(i,t,e){let n=0;for(let r=1;r<e.length;r++)n+=Math.hypot(e[r].x-e[r-1].x,e[r].z-e[r-1].z);let s={a:i,b:t,poly:e,len:n};return ae.edges.push(s),ae.nodes[i].adj.push(s),ae.nodes[t].adj.push(s),s}function zd(i){ae={nodes:[],edges:[],cityNode:{}};for(let t of On){let e=(n,s)=>t.id+":"+n+":"+s;for(let n=0;n<=t.nx;n++)for(let s=0;s<=t.nz;s++)ae.cityNode[e(n,s)]=Da(t.x0+n*140,t.z0+s*140);for(let n=0;n<=t.nx;n++)for(let s=0;s<=t.nz;s++){let r=ae.cityNode[e(n,s)];if(n<t.nx){let a=ae.cityNode[e(n+1,s)];Ua(r,a,[ae.nodes[r],ae.nodes[a]])}if(s<t.nz){let a=ae.cityNode[e(n,s+1)];Ua(r,a,[ae.nodes[r],ae.nodes[a]])}}}for(let t of i.hws){let e=[];for(let c of Object.values(i.depots))c.entry.hw===t.id&&e.push({s:c.entry.s,depot:c.id});e.sort((c,l)=>c.s-l.s);let n=t.def.from?ae.cityNode[t.def.from[0]+":"+t.def.from[1]+":"+t.def.from[2]]:Da(t.x[0],t.z[0]),s=t.def.to?ae.cityNode[t.def.to[0]+":"+t.def.to[1]+":"+t.def.to[2]]:Da(t.x[t.n-1],t.z[t.n-1]),r=n,a=0,o=(c,l)=>{let h=[];for(let u=c;u<=l;u++)h.push({x:t.x[u],z:t.z[u]});return h};for(let c of e){let l=0;for(;l<t.n-1&&t.s[l+1]<c.s;)l++;let h=Da(t.x[l],t.z[l]);ae.depotNode=ae.depotNode||{},ae.depotNode[c.depot]=h,Ua(r,h,[ae.nodes[r],...o(a,l)]),r=h,a=l}Ua(r,s,[...o(a,t.n-1),ae.nodes[s]])}return ae}function Gc(i,t){let e=null,n=1/0;for(let s of ae.edges){let r=s.poly;for(let a=0;a<r.length-1;a++){let o=r[a].x,c=r[a].z,l=r[a+1].x-o,h=r[a+1].z-c,u=l*l+h*h||1,d=((i-o)*l+(t-c)*h)/u;d=d<0?0:d>1?1:d;let p=o+l*d,g=c+h*d,x=(i-p)**2+(t-g)**2;x<n&&(n=x,e={e:s,i:a,t:d,x:p,z:g})}}return e}function Fd(i){let t=i.e.poly,e=[{x:i.x,z:i.z}];for(let r=i.i;r>=0;r--)e.push(t[r]);let n=[{x:i.x,z:i.z}];for(let r=i.i+1;r<t.length;r++)n.push(t[r]);let s=r=>r.reduce((a,o,c)=>c?a+Math.hypot(o.x-r[c-1].x,o.z-r[c-1].z):0,0);return[{node:i.e.a,poly:e,len:s(e)},{node:i.e.b,poly:n,len:s(n)}]}var Hc=new Map;function K_(i){if(Hc.has(i.id))return Hc.get(i.id);let t;if(ae.depotNode&&ae.depotNode[i.id]!==void 0){let e=ae.depotNode[i.id];t=[{node:e,poly:[ae.nodes[e]],len:0}]}else t=Fd(Gc(i.entry.x,i.entry.z)).map(e=>xi(cn({},e),{poly:e.poly.slice().reverse()}));return Hc.set(i.id,t),t}function Vc(i,t,e){let n=ae.nodes.length,s=new Float64Array(n).fill(1/0),r=new Array(n).fill(null),a=new Uint8Array(n),o=Gc(i,t),c=Fd(o),l={};for(let m of c)s[m.node]=m.len,l[m.node]=m.poly;for(;;){let m=-1,y=1/0;for(let _=0;_<n;_++)!a[_]&&s[_]<y&&(y=s[_],m=_);if(m<0)break;a[m]=1;for(let _ of ae.nodes[m].adj){let M=_.a===m?_.b:_.a,R=y+_.len;R<s[M]&&(s[M]=R,r[M]={u:m,e:_})}}let h=K_(e),u=null,d=1/0;for(let m of h)s[m.node]+m.len<d&&(d=s[m.node]+m.len,u=m);let p=[];for(let m=u.node;r[m];m=r[m].u)p.unshift(r[m]);let g=[{x:i,z:t}],x=p.length?p[0].u:u.node;if(!p.length&&o.e===Gc(e.entry.x,e.entry.z).e&&!(ae.depotNode&&ae.depotNode[e.id]!==void 0))g.push({x:o.x,z:o.z},{x:e.entry.x,z:e.entry.z});else{g.push(...l[x]);for(let{u:m,e:y}of p){let M=y.a===m?y.poly:y.poly.slice().reverse();for(let R=1;R<M.length;R++)g.push(M[R])}g.push(...u.poly)}g.push({x:e.zone.x,z:e.zone.z});let f=0;for(let m=1;m<g.length;m++)f+=Math.hypot(g[m].x-g[m-1].x,g[m].z-g[m-1].z);return{path:g,len:f}}var Na=class{constructor(){this.ctx=null,this.volume=.7}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination),this.engGain=e.createGain(),this.engGain.gain.value=0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=400,this.filter.Q.value=4,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="square";let n=e.createGain();n.gain.value=.35,this.o1.connect(this.filter),this.o2.connect(n).connect(this.filter);let s=e.createBuffer(1,e.sampleRate,e.sampleRate),r=s.getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;this.noise=e.createBufferSource(),this.noise.buffer=s,this.noise.loop=!0;let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=180,this.nGain=e.createGain(),this.nGain.gain.value=.25,this.noise.connect(a).connect(this.nGain).connect(this.filter),this.filter.connect(this.engGain).connect(this.master),this.o1.start(),this.o2.start(),this.noise.start()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}engine(t,e,n=!0){if(!this.ctx)return;let s=this.ctx.currentTime,r=28+t*70;this.o1.frequency.setTargetAtTime(r,s,.05),this.o2.frequency.setTargetAtTime(r*.5,s,.05),this.filter.frequency.setTargetAtTime(220+t*900+e*400,s,.08),this.engGain.gain.setTargetAtTime(n?.13+e*.08:0,s,.1)}horn(t){if(this.ctx){if(t&&!this.hornNodes){let e=this.ctx.createGain();e.gain.value=.18;let n=this.ctx.createOscillator(),s=this.ctx.createOscillator();n.type=s.type="sawtooth",n.frequency.value=233,s.frequency.value=311;let r=this.ctx.createBiquadFilter();r.frequency.value=1800,n.connect(r),s.connect(r),r.connect(e).connect(this.master),n.start(),s.start(),this.hornNodes=[n,s,e]}else if(!t&&this.hornNodes){let[e,n,s]=this.hornNodes;s.gain.setTargetAtTime(0,this.ctx.currentTime,.03),e.stop(this.ctx.currentTime+.2),n.stop(this.ctx.currentTime+.2),this.hornNodes=null}}}beep(t=880,e=.12,n="sine",s=.25){if(!this.ctx)return;let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n,r.frequency.value=t,a.gain.value=s,a.gain.setTargetAtTime(0,this.ctx.currentTime+e*.6,e*.3),r.connect(a).connect(this.master),r.start(),r.stop(this.ctx.currentTime+e*2)}crash(t){if(!this.ctx)return;let e=this.ctx,s=e.createBuffer(1,e.sampleRate*.35,e.sampleRate),r=s.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);let a=e.createBufferSource();a.buffer=s;let o=e.createBiquadFilter();o.frequency.value=900;let c=e.createGain();c.gain.value=Math.min(.9,.2+t/60),a.connect(o).connect(c).connect(this.master),a.start()}airBrake(){if(!this.ctx)return;let t=this.ctx,n=t.createBuffer(1,t.sampleRate*.6,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*(1-c/s.length);let r=t.createBufferSource();r.buffer=n;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=2500;let o=t.createGain();o.gain.value=.22,r.connect(a).connect(o).connect(this.master),r.start()}starter(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain(),r=t.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(14,e),n.frequency.linearRampToValueAtTime(22,e+.7),n.frequency.linearRampToValueAtTime(48,e+1.1),r.frequency.value=600,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.35,e+.1),s.gain.setValueAtTime(.35,e+1),s.gain.linearRampToValueAtTime(0,e+1.4),n.connect(r).connect(s).connect(this.master),n.start(e),n.stop(e+1.5)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}};var at=i=>document.getElementById(i),nh="drizzieTruck.v1",gn=i=>"R$ "+Math.round(i).toLocaleString("pt-BR"),jn=(i,t,e)=>Math.max(t,Math.min(e,i)),za={money:3e3,xp:0,level:1,owned:["urbano"],truck:"urbano",job:null,pos:null,name:"Motorista",clock:15.5,stats:{deliveries:0,km:0,earned:0,tons:0,crashes:0},settings:{quality:"auto",volume:.7,fps:!1,steer:"wheel",camera:0,time:"cycle",gearbox:"manual",gauge:"analog",accent:"amber",hud:"normal"}};function j_(){try{let i=JSON.parse(localStorage.getItem(nh));if(i&&i.level)return xi(cn(cn({},za),i),{stats:cn(cn({},za.stats),i.stats),settings:cn(cn({},za.settings),i.settings)})}catch(i){}return JSON.parse(JSON.stringify(za))}var k=j_();function Ue(){try{k.pos=Y?{x:Y.x,z:Y.z,h:Y.h}:k.pos,localStorage.setItem(nh,JSON.stringify(k))}catch(i){}}var Q_={low:{pr:1,minPr:.75,shadows:!1,shadowSize:0,tex:512,aniso:2,traffic:10,fogNear:150,fogFar:650,far:900,trees:5e3},medium:{pr:1.5,minPr:.85,shadows:!0,shadowSize:1024,tex:1024,aniso:4,traffic:16,fogNear:260,fogFar:1050,far:1500,trees:9e3},high:{pr:2,minPr:1,shadows:!0,shadowSize:2048,tex:1024,aniso:8,traffic:22,fogNear:380,fogFar:1600,far:2600,trees:14e3}};function tv(){let i="";try{let n=document.createElement("canvas"),s=n.getContext("webgl")||n.getContext("experimental-webgl"),r=s&&s.getExtension("WEBGL_debug_renderer_info");i=(r&&s.getParameter(r.UNMASKED_RENDERER_WEBGL)||s&&s.getParameter(s.RENDERER)||"").toLowerCase();let a=s&&s.getExtension("WEBGL_lose_context");a&&a.loseContext()}catch(n){}let t=navigator.deviceMemory||4,e=navigator.hardwareConcurrency||4;return/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(i)||t<=2||e<=4?"low":t>=6&&e>=8&&/adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(i)?"high":"medium"}var gi=k.settings.quality==="auto"?tv():k.settings.quality,Ee=Q_[gi],Ne,Te,Oe,de,Y,ns,Ze,zi,Hr,Gr,Ni,Zc=null,Qs=null,Od=-1,Br=null,Ye=0,re=new Na;re.volume=k.settings.volume;var Pe="loading",is=[],kn=null,Vr=0;var Je,Hn,Fr=0,Wc=[],jt={gas:!1,brake:!1,left:!1,right:!1,tilt:0,wheel:0,wheelHeld:!1,gear:"D",hand:!1},Sn={throttle:0,brake:0,steer:0,gear:"D",handbrake:!1},tr=null,qt={yaw:0,orbit:0,orbitT:0,mode:k.settings.camera||0,pos:new I,look:new I},mi=Ee.pr,Js=(i,t)=>new Promise(e=>{at("loadbar").style.width=i+"%",at("loadmsg").textContent=t,setTimeout(e,16)});async function ev(){await Js(5,"Iniciando gr\xE1ficos\u2026");let i=at("gl");try{Ne=new Sr({canvas:i,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(n){at("loadmsg").textContent='Seu aparelho n\xE3o suporta WebGL. Atualize o "Android System WebView" na Play Store.';return}mi=Math.min(window.devicePixelRatio||1,Ee.pr),Ne.setPixelRatio(mi),Ne.setSize(window.innerWidth,window.innerHeight,!1),Ne.outputColorSpace=hn,Ne.toneMapping=Ac,Ne.toneMappingExposure=1,Ne.shadowMap.enabled=Ee.shadows,Ne.shadowMap.type=gi==="high"?Tc:ha;let t=Ne.capabilities.getMaxAnisotropy();Sd(Ee.tex,Math.min(t,Ee.aniso)),Cd(gi),Te=new wr;let e=new dt(12375786);if(Te.background=e,Te.fog=new Xo(e,Ee.fogNear,Ee.fogFar),Oe=new en(58,window.innerWidth/window.innerHeight,.5,Ee.far),uv(),Hr=new oa(14413567,6122309,1.25),Te.add(Hr),Ze=new ca(16773336,2.6),Ze.position.set(180,260,120),Ee.shadows){Ze.castShadow=!0,Ze.shadow.mapSize.set(Ee.shadowSize,Ee.shadowSize);let n=gi==="high"?70:55;Object.assign(Ze.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:10,far:600}),Ze.shadow.bias=-6e-4,Ze.shadow.normalBias=.04}Te.add(Ze,Ze.target),await Js(20,"Gerando texturas HD\u2026"),At.road(),At.intersection(),At.grass(),At.facade(0),At.facade(1),At.facade(2),At.facade(3),await Js(45,"Construindo a cidade\u2026"),de=new Ta(Te,Ee),zd(de),await Js(70,"Ligando o motor\u2026"),Y=new Pa(Te,va[k.truck]||Ws[0],Ee.shadows),gi!=="low"&&(Ni=new la(16773590,0,70,.55,.6,1.2),Ni.target=new Ce,Y.onModel=n=>{n.root.add(Ni,Ni.target),Ni.position.set(0,n.y0+.3,n.zf+.4),Ni.target.position.set(0,0,n.zf+22)},Y.onModel(Y.model)),dv(),ns=new Ia(Te,Ee.traffic,de),fv(),await Js(85,"Desenhando o mapa\u2026"),yv(),k.job&&k.job.phase==="deliver"&&Y.attach(ln[k.job.cargo]),is=ih(),vv(),Sv(),gi!=="low"&&(Zc=new Fs(Ne),ov()),Ha(k.clock),await Js(100,"Pronto!"),Ne.compile(Te,Oe),at("loading").classList.add("hidden"),qr(),Ga=performance.now(),requestAnimationFrame(Kd)}var nv=new dt(12375786),iv=new dt(14916203),sv=new dt(659744),Or=new dt;function Ha(i){let t=k.settings.time;t==="day"?i=12:t==="night"?i=23:t==="dusk"&&(i=17.7);let e=Math.sin((i-6)/12*Math.PI),n=jn(e*2.4+.25,0,1),s=jn(1-Math.abs(e)*4,0,1)*(e>-.25?1:0);Ye=1-n,Ze.intensity=2.7*n+.55*Ye,Ye>.6?Ze.color.setHex(9414872):Ze.color.setHSL(.09,.6+s*.3,.85-s*.2),Hr.intensity=.62+.65*n,Hr.color.setHex(14413567).lerp(Or.setHex(5928104),Ye),Hr.groundColor.setHex(6122309).lerp(Or.setHex(1843760),Ye),Or.copy(sv).lerp(nv,n).lerp(iv,s*.55),Te.background.copy(Or),Te.fog.color.copy(Or),zi.material.color.setRGB(.07,.09,.16).lerp(new dt(1,1,1),n).lerp(new dt(1.15,.72,.55),s*.6),Gr.material.opacity=jn(Ye*1.3-.3,0,1),Gr.visible=Gr.material.opacity>.01,Ne.toneMappingExposure=1+Ye*.25,Br.material.color.setRGB(1,1,1).lerp(new dt(.12,.14,.2),Ye).lerp(new dt(1.1,.75,.6),s*.7),lv(),de.setNight(Ye),ns.setNight(Ye);let r=tr!==null?tr:Ye>.35;Y.lightsOn!==r&&Y.setLights(r),Ni&&(Ni.intensity=Y.lightsOn?60*(.35+Ye):0)}function rv(){let t=[],e=Ee.far*.9;for(let s=0;s<900;s++){let r=Math.random()*Math.PI*2,a=Math.random()*.9+.08,o=Math.sqrt(1-a*a);t.push(Math.cos(r)*o*e,a*e,Math.sin(r)*o*e)}let n=new De;n.setAttribute("position",new kt(t,3)),Gr=new Yo(n,new Er({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),zi.add(Gr)}function ov(){Qs=new wr;let i=new Jn(10,24,12),t=[],e=i.attributes.position;for(let n=0;n<e.count;n++)t.push(1,1,1);i.setAttribute("color",new kt(t,3)),Qs.userData.sky=new Xt(i,new ue({vertexColors:!0,side:Ve})),Qs.add(Qs.userData.sky)}var Ks=new dt,av=new dt;function lv(){if(!Zc||Math.abs(Ye-Od)<.08)return;Od=Ye;let i=Qs.userData.sky.geometry,t=i.attributes.position,e=i.attributes.color,n=new dt(4884165).lerp(new dt(461590),Ye),s=Te.background.clone(),r=new dt(5200442).lerp(new dt(461068),Ye);for(let o=0;o<t.count;o++){let c=t.getY(o)/10;c>=0?Ks.copy(s).lerp(n,Math.min(1,c*1.6)):Ks.copy(s).lerp(r,Math.min(1,-c*3)),Ye<.5&&c>.3&&t.getX(o)>4&&t.getZ(o)>2&&Ks.lerp(av.setRGB(2.2,2,1.7),.5),e.setXYZ(o,Ks.r,Ks.g,Ks.b)}e.needsUpdate=!0;let a=Zc.fromScene(Qs,.02);Te.environment&&Te.environment.dispose(),Te.environment=a.texture}function cv(i){qt.tt=(qt.tt||0)+i;let t=qt.tt*.08+qt.orbit,e=Y.model,n=Math.sin(Y.h),s=Math.cos(Y.h),r=Y.x+n*e.wb*.4,a=Y.z+s*e.wb*.4,o=11+(Y.trailer?6:0),c=Y.h+.7+Math.sin(t)*.9;Oe.position.set(r+Math.sin(c)*o,1.6+Math.sin(t*.7)*.6,a+Math.cos(c)*o);let l=Math.cos(c),h=-Math.sin(c);Oe.lookAt(r-l*3.2,1.9,a-h*3.2),Oe.fov=50,Oe.updateProjectionMatrix(),Ee.shadows&&(Ze.target.position.set(Y.x,0,Y.z),Ze.position.set(Y.x+150,170,Y.z+95)),zi.position.copy(Oe.position)}function hv(){let i=new Jn(Ee.far*.85,32,8,0,Math.PI*2,0,Math.PI*.42);Br=new Xt(i,new ue({map:At.clouds(),transparent:!0,depthWrite:!1,fog:!1,side:Ve,opacity:.9})),Br.material.map.repeat.set(3,1),Br.renderOrder=-.5,zi.add(Br)}function uv(){let i=new Jn(Ee.far*.95,24,12),t=new dt(4030404),e=new dt(10274536),n=new dt(14543344),s=[],r=i.attributes.position,a=new dt;for(let o=0;o<r.count;o++){let c=r.getY(o)/(Ee.far*.95);c>.25?a.copy(e).lerp(t,Math.min(1,(c-.25)/.75)):a.copy(n).lerp(e,Math.max(0,c/.25)),s.push(a.r,a.g,a.b)}i.setAttribute("color",new kt(s,3)),zi=new Xt(i,new ue({vertexColors:!0,side:Ve,fog:!1,depthWrite:!1})),zi.renderOrder=-1,Te.add(zi),rv(),hv()}function dv(){if(Y.world=de,k.pos&&isFinite(k.pos.x)&&de.resolveCircle({x:k.pos.x,z:k.pos.z},1.5,Wr)<=0){Y.place(k.pos.x,k.pos.z,k.pos.h);return}let i=de.depots.garagem.zone;Y.place(i.x-8,i.z,Math.PI/2),Y.world=de,Y.sync()}function fv(){Je=new an;let i=new Xt(new We(1,1),new ue({map:At.zone(),color:16761856,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));i.rotation.x=-Math.PI/2,i.position.y=.08,Je.add(i),Je.zone=i;let t=new Xt(new Mn(3,3,120,20,1,!0),new ue({color:16758531,transparent:!0,opacity:.18,depthWrite:!1,side:Me,fog:!1,blending:Rn}));t.position.y=60,Je.add(t);let e=new Xt(new Ii(1.6,3.2,4),new ue({color:16761856}));e.rotation.x=Math.PI,Je.add(e),Je.cone=e,Je.visible=!1,Te.add(Je);let n=new Cr;n.moveTo(0,1.6),n.lineTo(1.3,-.6),n.lineTo(0,0),n.lineTo(-1.3,-.6),n.closePath();let s=new ia(n);s.rotateX(-Math.PI/2),Hn=new Xt(s,new ue({color:4120698,transparent:!0,opacity:.9,side:Me,depthTest:!1})),Hn.renderOrder=10,Hn.visible=!1,Te.add(Hn)}function pv(i,t){let e=de.depots[i],n=de.depots[t];return Vc(e.zone.x,e.zone.z,n).len}function mv(i,t,e){let n=pv(t,e),s=n/1e3,r=Math.round((350+s*(900+i.t*115)*i.rate)/10)*10,a=Math.round(50+i.t*4+s*70),o=Math.round(n/8.5+90+i.t*1.5);return{cargo:i.id,from:t,to:e,dist:n,pay:r,xp:a,time:o}}function ih(){let i=[],t=Nr.filter(s=>s.lvl<=k.level+4),e=new Set,n=0;for(;i.length<10&&n++<200;){let s=t.filter(h=>h.lvl<=k.level),r=Math.random()<.78&&s.length?s:t,a=r[Math.random()*r.length|0],o=a.from[Math.random()*a.from.length|0],c=a.to[Math.random()*a.to.length|0],l=a.id+o+c;o===c||e.has(l)||(e.add(l),i.push(mv(a,o,c)))}return i.sort((s,r)=>(Jc(s)?0:1)-(Jc(r)?0:1)||ln[s.cargo].t-ln[r.cargo].t),i}function sh(i,t=Y.def){let e=ln[i.cargo];return e.lvl>k.level?`Requer n\xEDvel ${e.lvl}`:e.t>t.cap?`Caminh\xE3o fraco (m\xE1x. ${t.cap} t)`:t.rigid&&e.trailer!=="box"?"Requer cavalo mec\xE2nico":null}var Jc=i=>!sh(i);function Wd(i){let t=is[i];!t||!Jc(t)||k.job||(k.job=xi(cn({},t),{phase:"pickup",damage:0,tLeft:t.time}),is.splice(i,1),re.beep(660,.1),re.beep(990,.12),Xr(),Gn(`Frete aceito! V\xE1 at\xE9 <b>${fi[t.from].name}</b>`),Vr=0,Ue())}function Xd(){if(!k.job)return;let i=k.job.phase==="deliver"?Math.round(k.job.pay*.25):0;k.money=Math.max(0,k.money-i),Y.detach(),k.job=null,Je.visible=!1,Hn.visible=!1,Gn(i?`Frete cancelado. Multa de ${gn(i)}`:"Frete cancelado"),Ue()}function Va(){return k.job?de.depots[k.job.phase==="pickup"?k.job.from:k.job.to]:null}function qd(i){let t=Y.center({x:0,z:0}),e=i.zone;return Math.abs(t.x-e.x)<e.w/2+3&&Math.abs(t.z-e.z)<e.d/2+3}function Ba(i){let t=k.job;if(!t){at("progress").classList.add("hidden");return}t.phase==="deliver"&&(t.tLeft-=i);let e=Va(),n=qd(e),s=Y.speedKmh<1.5;if(n&&s){Fr+=i;let r=2.2;at("progress").classList.remove("hidden"),at("progtext").textContent=t.phase==="pickup"?"Carregando\u2026":"Descarregando\u2026",at("progarc").style.strokeDashoffset=264*(1-Math.min(1,Fr/r)),Fr>=r&&(Fr=0,at("progress").classList.add("hidden"),t.phase==="pickup"?(Y.attach(ln[t.cargo]),t.phase="deliver",t.tLeft=t.time,re.airBrake(),Gn(`Carga engatada: <b>${ln[t.cargo].name}</b> (${ln[t.cargo].t} t)`),Gn(`Entregue em <b>${fi[t.to].name}</b>`),Vr=0,Ue()):gv())}else Fr=0,at("progress").classList.add("hidden"),n&&!s&&Y.speedKmh<25&&!Ba.warned&&(Gn("Pare na \xE1rea marcada"),Ba.warned=!0),n||(Ba.warned=!1)}function gv(){let i=k.job,t=ln[i.cargo],e=i.pay,n=Math.round(e*i.damage/100),s=i.tLeft>=0,r=s?Math.round(e*.15):-Math.round(e*.2),a=Math.max(0,e-n+r),o=Math.round(i.xp*(i.damage<5?1.2:1)*(s?1:.7));k.money+=a,k.stats.deliveries++,k.stats.earned+=a,k.stats.tons+=t.t,Y.detach(),k.job=null,Je.visible=!1,Hn.visible=!1,re.airBrake(),re.beep(880,.12),setTimeout(()=>re.beep(1320,.18),120);let c=[["Pagamento base",gn(e)],[s?"B\xF4nus no prazo (+15%)":"Atraso (\u221220%)",(r>=0?"+":"")+gn(r)],[`Avaria da carga (${i.damage.toFixed(0)}%)`,"\u2212"+gn(n)],["Experi\xEAncia",`+${o} XP`]],l=xv(o);nr(`<h2>Entrega conclu\xEDda! \u2705</h2><div>${t.icon} ${t.name} \u2022 ${t.t} t \u2192 ${fi[i.to].name}</div>
    <div class="big">${gn(a)}</div>
    <div class="lines">${c.map(h=>`<div><span>${h[0]}</span><b>${h[1]}</b></div>`).join("")}</div>
    <button class="btn" data-act="popjobs">Pr\xF3ximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,l),is=ih(),Ue()}function xv(i){k.xp+=i;let t=[];for(;k.level<30&&k.xp>=Xs(k.level);)k.xp-=Xs(k.level),k.level++,t.push(k.level);return t}function _v(i){let t=Nr.filter(n=>n.lvl===i),e=Ws.filter(n=>n.level===i);re.beep(523,.12),setTimeout(()=>re.beep(659,.12),120),setTimeout(()=>re.beep(784,.25),240),nr(`<h2>\u2B50 N\xEDvel ${i}!</h2><div>Voc\xEA subiu de n\xEDvel.</div>
    <div class="lines">${t.map(n=>`<div><span>${n.icon} Nova carga: ${n.name}</span><b>${n.t} t</b></div>`).join("")}
    ${e.map(n=>`<div><span>\u{1F69A} Novo caminh\xE3o: ${n.name}</span><b>${gn(n.price)}</b></div>`).join("")}
    ${!t.length&&!e.length?"<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>":""}</div>
    <button class="btn" data-act="popclose">Show!</button>`)}function vv(){let i=(l,h)=>{let u=p=>{if(p.preventDefault(),jt[h]=!0,l.classList.add("on"),re.init(),l.setPointerCapture&&p.pointerId!==void 0)try{l.setPointerCapture(p.pointerId)}catch(g){}},d=p=>{p.preventDefault(),jt[h]=!1,l.classList.remove("on")};l.addEventListener("pointerdown",u),l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d),l.addEventListener("lostpointercapture",d),l.addEventListener("contextmenu",p=>p.preventDefault())};i(at("gas"),"gas"),i(at("brake"),"brake"),i(at("left"),"left"),i(at("right"),"right");let t=at("wheel"),e=null,n=l=>{let h=t.getBoundingClientRect();return Math.atan2(l.clientX-(h.left+h.width/2),-(l.clientY-(h.top+h.height/2)))};t.addEventListener("pointerdown",l=>{l.preventDefault(),re.init();let h=t.getBoundingClientRect();Math.hypot(l.clientX-(h.left+h.width/2),l.clientY-(h.top+h.height/2))<h.width*.17?(re.horn(!0),e={horn:!0,id:l.pointerId}):(e={id:l.pointerId,a0:n(l),w0:jt.wheel},jt.wheelHeld=!0);try{t.setPointerCapture(l.pointerId)}catch(d){}}),t.addEventListener("pointermove",l=>{if(!e||e.horn||l.pointerId!==e.id)return;let h=n(l)-e.a0;h=Math.atan2(Math.sin(h),Math.cos(h)),jt.wheel=jn(e.w0+h*180/Math.PI,-150,150),e.a0=n(l),e.w0=jt.wheel});let s=()=>{e&&e.horn&&re.horn(!1),e=null,jt.wheelHeld=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s),document.querySelectorAll("#gearsel button").forEach(l=>l.addEventListener("pointerdown",h=>{h.preventDefault(),ka(l.dataset.g)})),at("ic-hand").addEventListener("pointerdown",l=>{l.preventDefault(),jt.hand=!jt.hand,re.airBrake()}),at("lightsbtn").addEventListener("pointerdown",l=>{l.preventDefault(),tr=!Y.lightsOn,Y.setLights(tr),re.beep(1400,.04,"square",.08)}),at("enginebtn").addEventListener("click",kd);let r={ArrowUp:"gas",KeyW:"gas",ArrowDown:"brake",KeyS:"brake",Space:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",l=>{re.init(),r[l.code]&&(jt[r[l.code]]=!0,l.preventDefault()),l.code==="KeyH"&&re.horn(!0),l.code==="KeyR"&&!l.repeat&&ka(jt.gear==="R"?"D":"R"),l.code==="KeyN"&&!l.repeat&&ka("N"),l.code==="KeyE"&&!l.repeat&&kd(),l.code==="KeyL"&&!l.repeat&&(tr=!Y.lightsOn,Y.setLights(tr)),l.code==="KeyP"&&!l.repeat&&(jt.hand=!jt.hand),l.code==="KeyC"&&!l.repeat&&$d(),l.code==="KeyM"&&!l.repeat&&jc(),l.code==="Escape"&&Bd()}),window.addEventListener("keyup",l=>{r[l.code]&&(jt[r[l.code]]=!1),l.code==="KeyH"&&re.horn(!1)});let a=at("gl"),o=null;a.addEventListener("pointerdown",l=>{o={x:l.clientX,id:l.pointerId}}),window.addEventListener("pointermove",l=>{!o||l.pointerId!==o.id||(qt.orbit+=(l.clientX-o.x)*.008,o.x=l.clientX,qt.orbitT=1.8)});let c=l=>{o&&l.pointerId===o.id&&(o=null)};window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("devicemotion",l=>{var p,g;let h=l.accelerationIncludingGravity;if(!h||h.y==null)return;let u=(g=(p=screen.orientation&&screen.orientation.angle)!=null?p:window.orientation)!=null?g:90,d=u===90?1:u===270||u===-90?-1:0;jt.tilt=jn(d?-h.y*d/4.5:-h.x/4.5,-1,1)}),window.addEventListener("resize",jd),document.addEventListener("visibilitychange",()=>{document.hidden?(re.suspend(),Ue()):(re.resume(),Ga=performance.now())}),window.addEventListener("pagehide",Ue),window.onAndroidBack=()=>Bd()}function Bd(){return at("bigmap").classList.contains("hidden")?at("popup").classList.contains("hidden")?at("modal").classList.contains("hidden")?Pe==="drive"?(kr("settings"),!0):(Ue(),!1):(Xr(),!0):(Qc(),!0):(at("bigmap").classList.add("hidden"),!0)}function ka(i){jt.gear=i,document.querySelectorAll("#gearsel button").forEach(t=>t.classList.toggle("on",t.dataset.g===i)),re.beep(i==="R"?500:700,.05,"square",.06)}var er=0;function kd(){Y.engineOn||er>0||(re.init(),er=1.1,at("enginebtn").classList.add("starting"),re.starter())}function Kc(i){let t=(s,r,a,o)=>s+jn(r-s,-o*i,a*i),e=Pe==="drive";er>0&&(er-=i,er<=0&&(Y.engineOn=!0,at("enginebtn").classList.add("hidden"),at("enginebtn").classList.remove("starting"))),Sn.throttle=t(Sn.throttle,e&&jt.gas?1:0,2.5,6),Sn.brake=t(Sn.brake,e&&jt.brake?1:0,6,8),Sn.gear=k.settings.gearbox==="auto"?"auto":jt.gear,Sn.handbrake=jt.hand,e&&jt.gas&&!Y.engineOn&&er<=0&&!Kc.warned&&(Gn("Ligue o motor primeiro"),Kc.warned=!0),jt.wheelHeld||(jt.wheel*=Math.max(0,1-i*7));let n=0;k.settings.steer==="tilt"?(n=Math.abs(jt.tilt)<.06?0:jt.tilt,jt.wheel=-n*150):k.settings.steer==="wheel"&&(n=-jt.wheel/150),n+=(jt.left?1:0)-(jt.right?1:0),n=e?jn(n,-1,1):0,Sn.steer=k.settings.steer==="wheel"&&jt.wheelHeld?n:t(Sn.steer,n,2.4,4),Math.abs(Sn.steer)<.01&&n===0&&(Sn.steer=0),at("wheel").style.transform=`rotate(${(-Sn.steer*150).toFixed(1)}deg)`}function $d(){qt.mode=(qt.mode+1)%3,k.settings.camera=qt.mode,Gn(["C\xE2mera: Persegui\xE7\xE3o","C\xE2mera: A\xE9rea","C\xE2mera: Cabine"][qt.mode],1200)}var Xc={x:0,z:0},Wr={x:0,z:0};function rh(i,t=!1){Math.hypot(qt.pos.x-Y.x,qt.pos.z-Y.z)>150&&(t=!0);let e=Y.model;qt.orbitT>0?qt.orbitT-=i:qt.orbit*=Math.max(0,1-i*2.5);let n=Y.h;Y.v<-.5&&qt.mode!==2&&(n=Y.h);let s=t?1:1-Math.exp(-i*(qt.mode===2?12:2.6)),r=n+qt.orbit-qt.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),qt.yaw+=r*s;let a=Math.sin(Y.h),o=Math.cos(Y.h);if(qt.mode===2){let c=Y.x+a*(e.zf-.7)-Math.cos(Y.h)*.45,l=Y.z+o*(e.zf-.7)+Math.sin(Y.h)*.45;Oe.position.set(c,Y.y+(Y.def.id==="urbano"?2.3:2.75),l);let h=Math.sin(qt.yaw),u=Math.cos(qt.yaw);Oe.lookAt(c+h*20,Y.y+2+Math.sin(Y.pitch)*20,l+u*20),Oe.fov=70}else{let c=Y.trailer?Y.trailer.Lt:0,l=(qt.mode===0?11:20)+c*(qt.mode===0?.75:1.1),h=(qt.mode===0?4.6:14)+c*(qt.mode===0?.18:.4),u=Y.x+a*e.wb*.5-(Y.trailer?Math.sin(Y.th)*c*.25:0),d=Y.z+o*e.wb*.5-(Y.trailer?Math.cos(Y.th)*c*.25:0),p=Math.sin(qt.yaw),g=Math.cos(qt.yaw);for(let _=0;_<6&&(Xc.x=u-p*l,Xc.z=d-g*l,!(de.resolveCircle(Xc,.6,Wr,!0)<=0||h>30));_++)l*=.8;let x=u-p*l,f=d-g*l,m=t?1:1-Math.exp(-i*8);qt.pos.x+=(x-qt.pos.x)*m,qt.pos.z+=(f-qt.pos.z)*m;let y=Y.y+h;qt.pos.y+=(y-qt.pos.y)*m,Oe.position.copy(qt.pos),Oe.lookAt(u,Y.y+(qt.mode===1?1.5:1.3),d),Oe.fov=58+Math.min(8,Y.speedKmh*.08)}Oe.updateProjectionMatrix(),Ee.shadows&&(Ze.target.position.set(Y.x,0,Y.z),Ze.position.set(Y.x+150,170,Y.z+95)),zi.position.copy(Oe.position)}var ge=null;function yv(){let i=()=>new Path2D;ge={blocks:{},lots:i(),roads:i(),hw:i(),river:i(),fields:i(),hills:i()};let t={downtown:"#8b95a3",residential:"#a8a294",town:"#b4ab98",park:"#4f8a3a",industrial:"#8d8473",port:"#7b8790"};for(let n of On){for(let s=0;s<n.nx;s++)for(let r=0;r<n.nz;r++){let a=_a(n,s,r);(ge.blocks[t[a]]=ge.blocks[t[a]]||i()).rect(n.x0+s*140+10,n.z0+r*140+10,120,120)}for(let s=0;s<=n.nx;s++)ge.roads.moveTo(n.x0+s*140,n.z0),ge.roads.lineTo(n.x0+s*140,Vs(n));for(let s=0;s<=n.nz;s++)ge.roads.moveTo(n.x0,n.z0+s*140),ge.roads.lineTo(es(n),n.z0+s*140)}for(let n of Bn){let[s,r,a,o]=de.depots[n.id].lot;ge.lots.rect(s,r,a-s,o-r)}for(let n of de.hws){ge.hw.moveTo(n.x[0],n.z[0]);for(let s=1;s<n.n;s+=2)ge.hw.lineTo(n.x[s],n.z[s]);ge.hw.lineTo(n.x[n.n-1],n.z[n.n-1])}let e=de.river;ge.river.moveTo(e.x[0],e.z[0]);for(let n=1;n<e.n;n++)ge.river.lineTo(e.x[n],e.z[n]);for(let n of de.fields)ge.fields.rect(n.x0,n.z0,n.x1-n.x0,n.z1-n.z0);for(let n of de.hills)ge.hills.moveTo(n.x+n.r*.85,n.z),ge.hills.arc(n.x,n.z,n.r*.85,0,Math.PI*2)}function Yd(i,t){i.fillStyle="#3d5a34",i.fillRect(Se.x0-3e3,Se.z0-3e3,12e3,12e3),i.fillStyle="#34502d",i.fill(ge.hills),i.fillStyle="#9a9356",i.fill(ge.fields),i.fillStyle="#2d6f93",i.fillRect(Se.x0-3e3,1790,12e3,4e3),i.lineCap="round",i.lineJoin="round",i.strokeStyle="#2d6f93",i.lineWidth=Math.max(di,3/t),i.stroke(ge.river);for(let e in ge.blocks)i.fillStyle=e,i.fill(ge.blocks[e]);i.fillStyle="#cfc9bd",i.fill(ge.lots),i.strokeStyle="#26282c",i.lineWidth=Math.max(20,3/t),i.lineCap="square",i.stroke(ge.roads),i.lineCap="round",i.strokeStyle="#1d1f22",i.lineWidth=Math.max(9*2+4,4.5/t),i.stroke(ge.hw),i.strokeStyle="#4a4d52",i.lineWidth=Math.max(9*2,3/t),i.stroke(ge.hw)}function Zd(i,t,e,n,s){i.fillStyle=n,i.strokeStyle="#fff",i.lineWidth=s*.3,i.beginPath(),i.arc(t,e,s,0,7),i.fill(),i.stroke()}function Mv(){let i=at("minimap"),t=i.getContext("2d"),e=i.width,n=i.height,s=.75;t.setTransform(1,0,0,1,0,0),t.translate(e/2,n*.62),t.rotate(Math.PI+Y.h),t.scale(s,s),t.translate(-Y.x,-Y.z),Yd(t,s),kn&&k.job&&(t.strokeStyle=sr(),t.lineWidth=8/s,t.beginPath(),kn.path.forEach((a,o)=>o?t.lineTo(a.x,a.z):t.moveTo(a.x,a.z)),t.stroke());let r=Va();for(let a of Bn){let o=de.depots[a.id];Zd(t,o.zone.x,o.zone.z,r===o?sr():a.id==="garagem"?"#2f6fde":"rgba(30,30,30,0.85)",(r===o?9:6)/s)}t.fillStyle="rgba(255,255,255,0.7)";for(let a of ns.cars)a.mode&&t.fillRect(a.x-2/s,a.z-2/s,4/s,4/s);t.setTransform(1,0,0,1,0,0),t.translate(e/2,n*.62),t.fillStyle="#3ee07a",t.strokeStyle="#0b1a10",t.lineWidth=3,t.beginPath(),t.moveTo(0,-14),t.lineTo(10,11),t.lineTo(0,5),t.lineTo(-10,11),t.closePath(),t.fill(),t.stroke(),t.setTransform(1,0,0,1,0,0)}function jc(){let i=at("bigmap"),t=at("bigmapc");i.classList.remove("hidden");let e=Math.min(2,window.devicePixelRatio||1),n=window.innerWidth*.96,s=window.innerHeight*.92,r=Se.x1-Se.x0,a=Se.z1-Se.z0,o=Math.min(n/r,s/a);t.width=r*o*e,t.height=a*o*e,t.style.width=r*o+"px",t.style.height=a*o+"px";let c=t.getContext("2d"),l=o*e;c.setTransform(l,0,0,l,-Se.x0*l,-Se.z0*l),Yd(c,l),kn&&k.job&&(c.strokeStyle=sr(),c.lineWidth=5/l,c.beginPath(),kn.path.forEach((d,p)=>p?c.lineTo(d.x,d.z):c.moveTo(d.x,d.z)),c.stroke());let h=Va();c.textAlign="center";let u=(d,p,g,x,f="#fff")=>{c.font=`700 ${x/l}px sans-serif`,c.lineWidth=3/l,c.strokeStyle="rgba(0,0,0,0.85)",c.strokeText(d,p,g),c.fillStyle=f,c.fillText(d,p,g)};for(let d of On)u(d.name.toUpperCase(),(d.x0+es(d))/2,d.z0-40,15*e,"#ffe08a");for(let d of de.hws){let p=d.n/2|0;u(d.id,d.x[p],d.z[p]-20,10*e,"#cfe8ff")}for(let d of Bn){let p=de.depots[d.id];Zd(c,p.zone.x,p.zone.z,h===p?sr():d.id==="garagem"?"#2f6fde":"#222",6*e/l),u(d.name,p.zone.x,p.zone.z-14*e/l,10*e)}c.save(),c.translate(Y.x,Y.z),c.rotate(Math.PI+Y.h),c.scale(e/l,e/l),c.fillStyle="#3ee07a",c.strokeStyle="#000",c.lineWidth=2,c.beginPath(),c.moveTo(0,-12),c.lineTo(9,10),c.lineTo(0,5),c.lineTo(-9,10),c.closePath(),c.fill(),c.stroke(),c.restore()}var bv="jobs";function Sv(){document.body.addEventListener("click",i=>{let t=i.target.closest("[data-act],[data-tab]");if(!t)return;if(re.init(),t.dataset.tab){wn(t.dataset.tab);return}let e=t.dataset.act,n=t.dataset.arg;if(e==="jobs"||e==="garage"||e==="settings")kr(e);else if(e==="menu"||e==="pause")kr("settings");else if(e==="rename"){let s=prompt("Nome do motorista:",k.name);s&&s.trim()&&(k.name=s.trim().slice(0,18),Ue(),qr())}else e==="map"?jc():e==="gauge"?(k.settings.gauge=n,Ue(),wn("settings")):e==="accent"?(k.settings.accent=n,qc(),Ue(),wn("settings")):e==="hudsize"?(k.settings.hud=n,qc(),Ue(),wn("settings")):e==="gearbox"?(k.settings.gearbox=n,at("gearsel").classList.toggle("hidden",n==="auto"),Ue(),wn("settings")):e==="timemode"?(k.settings.time=n,Ue(),Ha(k.clock),wn("settings")):e==="tomenu"?(Xr(),Ue(),qr()):e==="camera"?$d():e==="close"?Xr():e==="accept"?Wd(+n):e==="refresh"?(is=ih(),wn("jobs")):e==="cancel"?(Xd(),wn("jobs")):e==="buy"?Av(n):e==="use"?Jd(n):e==="popclose"?Qc():e==="popjobs"?(Qc(),kr("jobs")):e==="closemap"?at("bigmap").classList.add("hidden"):e==="quality"?(k.settings.quality=n,Ue(),wn("settings"),Gn("Reiniciando para aplicar\u2026"),setTimeout(()=>location.reload(),500)):e==="steermode"?(k.settings.steer=n,Hd(),Ue(),wn("settings")):e==="fps"?(k.settings.fps=!k.settings.fps,at("fps").classList.toggle("hidden",!k.settings.fps),Ue(),wn("settings")):e==="reset"?confirm("Apagar todo o progresso?")&&(localStorage.removeItem(nh),location.reload()):e==="rescue"&&(Pv(),Xr())}),at("mapwrap").addEventListener("click",jc),at("fps").classList.toggle("hidden",!k.settings.fps),at("tabbody").addEventListener("input",i=>{i.target.id==="vol"&&(k.settings.volume=+i.target.value,re.setVolume(k.settings.volume),Ue())}),Hd(),qc(),ka("D"),at("gearsel").classList.toggle("hidden",k.settings.gearbox==="auto"),at("play").addEventListener("click",()=>{re.init(),at("title").classList.add("hidden"),at("hud").classList.remove("hidden"),Pe="drive",Y.engineOn||at("enginebtn").classList.remove("hidden"),rh(0,!0),jd(),th=3;try{document.documentElement.requestFullscreen&&!window.AndroidBridge&&document.documentElement.requestFullscreen().catch(()=>{})}catch(i){}!k.job&&k.stats.deliveries===0&&setTimeout(()=>kr("jobs"),400)})}function Hd(){let i=at("wheelwrap");i.classList.toggle("buttons",k.settings.steer==="buttons"),i.classList.toggle("tilt",k.settings.steer==="tilt")}function qr(){Pe="title",qt.tt=0,at("hud").classList.add("hidden"),at("title").classList.remove("hidden"),at("pname").textContent=k.name,at("plvl").textContent=`N\xEDvel ${k.level} \u2022 ${k.xp}/${Xs(k.level)} XP`,at("tmoney").textContent=gn(k.money);let i=Y.def;at("tiname").textContent=i.name,at("tispecs").innerHTML=`<span>${i.hp} cv</span><span>${i.cap} t</span><span>${i.vmax} km/h</span><span>${i.rigid?"R\xEDgido":"Cavalo "+i.cfg}</span>`;let t=k.job;at("tjob").innerHTML=t?`${ln[t.cargo].icon} ${ln[t.cargo].name} \u2192 <b>${fi[t.phase==="pickup"?t.from:t.to].name}</b>`:"Nenhum frete ativo",at("tstats").innerHTML=`<div><b>${k.stats.deliveries}</b><small>entregas</small></div><div><b>${k.stats.km.toFixed(0)}</b><small>km</small></div><div><b>${k.stats.tons.toFixed(0)}</b><small>toneladas</small></div><div><b>${k.owned.length}</b><small>caminh\xF5es</small></div>`}function kr(i){Pe=Pe==="title"?"title":"menu",at("modal").classList.remove("hidden"),jt.gas=jt.brake=jt.left=jt.right=!1,document.querySelectorAll(".pad").forEach(t=>t.classList.remove("on")),wn(i)}function Xr(){at("modal").classList.add("hidden"),Pe==="title"&&qr(),Pe==="menu"&&(Pe="drive")}function nr(i,t=[]){at("popcard").innerHTML=i,at("popup").classList.remove("hidden"),Pe=Pe==="drive"?"menu":Pe,nr.queue=t}function Qc(){at("popup").classList.add("hidden"),at("modal").classList.contains("hidden")&&(Pe="drive");let i=nr.queue||[];if(i.length){let t=i.shift();nr.queue=i,_v(t),nr.queue=i}}function wn(i){bv=i,document.querySelectorAll(".tabs [data-tab]").forEach(e=>e.classList.toggle("on",e.dataset.tab===i));let t=at("tabbody");i==="jobs"?t.innerHTML=Ev():i==="garage"?t.innerHTML=Tv():i==="profile"?t.innerHTML=Rv():t.innerHTML=Cv(),t.scrollTop=0}function wv(i,t){let e=ln[i.cargo],n=sh(i),s=[e.fragile?'<span class="chip tag">Fr\xE1gil</span>':"",e.hazard?'<span class="chip tag">Perigosa</span>':"",e.trailer==="lowboy"?'<span class="chip tag">Indivis\xEDvel</span>':""].join("");return`<div class="card ${n?"locked":""}">
    <div class="ic">${e.icon}</div><h3>${e.name}</h3><div class="t">${e.t} toneladas</div>
    <div class="route">\u{1F4CD} ${fi[i.from].name} \u2192 \u{1F3C1} ${fi[i.to].name}</div>
    <div class="row"><span class="chip pay">${gn(i.pay)}</span><span class="chip xp">+${i.xp} XP</span><span class="chip">${(i.dist/1e3).toFixed(1)} km</span><span class="chip">\u23F1 ${Math.ceil(i.time/60)} min</span>${s}</div>
    ${n?`<div class="row"><span class="chip warn">\u{1F512} ${n}</span></div>`:`<button class="btn" data-act="accept" data-arg="${t}" ${k.job?"disabled":""}>Aceitar frete</button>`}
  </div>`}function Ev(){let i="";if(k.job){let t=k.job,e=ln[t.cargo];i=`<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${e.icon}</div><h3>Frete ativo: ${e.name} (${e.t} t)</h3>
      <div class="route">${t.phase==="pickup"?"Coletar em":"Entregar em"} <b>${fi[t.phase==="pickup"?t.from:t.to].name}</b> \u2022 Avaria ${t.damage.toFixed(0)}% \u2022 Pagamento ${gn(t.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${t.phase==="deliver"?" (multa 25%)":""}</button></div>`}return`${i}<div class="tbar"><div class="grow">Caminh\xE3o atual: <b>${Y.def.name}</b> \u2014 at\xE9 <b>${Y.def.cap} t</b> \u2022 N\xEDvel ${k.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">\u{1F504} Atualizar</button></div>
    <div class="grid">${is.map(wv).join("")}</div>`}function Tv(){return`<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${gn(k.money)}</b> \u2022 A for\xE7a do caminh\xE3o define as cargas que ele consegue puxar.</div></div><div class="grid">`+Ws.map(e=>{let n=k.owned.includes(e.id),s=k.truck===e.id,r=e.level>k.level,a;s?a='<button class="btn alt" disabled>Em uso</button>':n?a=`<button class="btn" data-act="use" data-arg="${e.id}">Usar</button>`:r?a=`<span class="chip warn">\u{1F512} N\xEDvel ${e.level}</span>`:a=`<button class="btn" data-act="buy" data-arg="${e.id}" ${k.money<e.price?"disabled":""}>Comprar ${gn(e.price)}</button>`;let o="#"+new dt(e.color).getHexString();return`<div class="card ${r&&!n?"locked":""}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${o}, #1b2230)">${e.rigid?"\u{1F69A}":"\u{1F69B}"}</div>
        <h3>${e.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${e.desc}</div>
        <div class="stat"><span>Pot\xEAncia</span><b>${e.hp} cv</b></div><div class="meter"><i style="width:${e.hp/750*100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${e.cap} t</b></div><div class="meter"><i style="width:${e.cap/90*100}%"></i></div>
        <div class="stat"><span>Velocidade m\xE1x.</span><b>${e.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${e.rigid?"R\xEDgido (ba\xFA)":`Cavalo mec\xE2nico ${e.cfg}`}</b></div>
        ${a}</div>`}).join("")+"</div>"}function Av(i){let t=va[i];!t||k.owned.includes(i)||k.money<t.price||t.level>k.level||(k.money-=t.price,k.owned.push(i),re.beep(784,.1),re.beep(1046,.15),Gn(`Voc\xEA comprou o <b>${t.name}</b>!`),Jd(i))}function Jd(i){let t=va[i];if(k.owned.includes(i)){if(k.job&&k.job.phase==="deliver"){Gn("Conclua ou cancele o frete antes de trocar");return}k.truck=i,Y.setTruck(t),k.job&&sh(k.job,t)&&Xd(),Ue(),wn("garage"),Pe==="title"&&qr()}}function Rv(){let i=k.stats,t=Xs(k.level),e=Nr.filter(n=>n.lvl>k.level).slice(0,4);return`<div class="grid">
    <div class="card"><h3>\u2B50 N\xEDvel ${k.level}${k.level>=30?" (m\xE1ximo)":""}</h3><div class="meter" style="margin-top:8px"><i style="width:${k.xp/t*100}%"></i></div>
      <div class="stat"><span>Experi\xEAncia</span><b>${k.xp} / ${t} XP</b></div><div class="stat"><span>Saldo</span><b>${gn(k.money)}</b></div>
      <div class="stat"><span>Caminh\xF5es</span><b>${k.owned.length} / ${Ws.length}</b></div></div>
    <div class="card"><h3>\u{1F4CA} Estat\xEDsticas</h3>
      <div class="stat"><span>Entregas</span><b>${i.deliveries}</b></div><div class="stat"><span>Dist\xE2ncia</span><b>${i.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${i.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${gn(i.earned)}</b></div>
      <div class="stat"><span>Colis\xF5es</span><b>${i.crashes}</b></div></div>
    <div class="card"><h3>\u{1F513} Pr\xF3ximas cargas</h3>${e.map(n=>`<div class="stat"><span>${n.icon} ${n.name} (${n.t} t)</span><b>N\xEDvel ${n.lvl}</b></div>`).join("")||'<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`}function Cv(){let i=(t,e,n)=>`<div class="seg">${n.map(([s,r])=>`<button data-act="${t}" data-arg="${s}" class="${e===s?"on":""}">${r}</button>`).join("")}</div>`;return`<div class="set"><div><b>Qualidade gr\xE1fica</b><br><small style="opacity:.7">Atual: ${gi==="low"?"Leve":gi==="medium"?"M\xE9dio":"Ultra"} \u2022 resolu\xE7\xE3o din\xE2mica ativa</small></div>
      ${i("quality",k.settings.quality,[["auto","Auto"],["low","Leve"],["medium","M\xE9dio"],["high","Ultra"]])}</div>
    <div class="set"><div><b>Dire\xE7\xE3o</b><br><small style="opacity:.7">Volante, setas ou inclina\xE7\xE3o do celular</small></div>
      ${i("steermode",k.settings.steer,[["wheel","Volante"],["buttons","Setas"],["tilt","Inclina\xE7\xE3o"]])}</div>
    <div class="set"><div><b>C\xE2mbio</b><br><small style="opacity:.7">Manual D/N/R ou autom\xE1tico (segurar freio parado = r\xE9)</small></div>
      ${i("gearbox",k.settings.gearbox,[["manual","D / N / R"],["auto","Autom\xE1tico"]])}</div>
    <div class="set"><div><b>Hor\xE1rio</b><br><small style="opacity:.7">Ciclo de dia e noite com far\xF3is e ilumina\xE7\xE3o urbana</small></div>
      ${i("timemode",k.settings.time,[["cycle","Ciclo"],["day","Dia"],["dusk","Entardecer"],["night","Noite"]])}</div>
    <div class="set"><div><b>Veloc\xEDmetro</b><br><small style="opacity:.7">Estilo dos mostradores do painel</small></div>
      ${i("gauge",k.settings.gauge,[["analog","Anal\xF3gico"],["digital","Digital"],["sport","Esportivo"],["classic","Cl\xE1ssico"]])}</div>
    <div class="set"><div><b>Cor do painel</b><br><small style="opacity:.7">Cor de destaque da interface</small></div>
      ${i("accent",k.settings.accent,[["amber","\xC2mbar"],["blue","Azul"],["green","Verde"],["red","Vermelho"],["purple","Roxo"]])}</div>
    <div class="set"><div><b>Tamanho dos controles</b></div>
      ${i("hudsize",k.settings.hud,[["small","Pequeno"],["normal","Normal"],["large","Grande"]])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${k.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${i("fps",k.settings.fps?1:0,[[1,"Sim"],[0,"N\xE3o"]])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminh\xE3o de volta para a rua mais pr\xF3xima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">WASD/setas \u2022 Espa\xE7o freio \u2022 E motor \u2022 R r\xE9 \u2022 N neutro \u2022 P freio de m\xE3o \u2022 L far\xF3is \u2022 H buzina \u2022 C c\xE2mera \u2022 M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao menu</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`}function Pv(){let i=de.hw(Y.x,Y.z);if(i&&!de.inArea(Y.x,Y.z,0)){let t=i.o;Y.place(i.x-t.dz[i.i]*3.5,i.z+t.dx[i.i]*3.5,Math.atan2(t.dx[i.i],t.dz[i.i]))}else{let t={x:Y.x,z:Y.z};for(let e=0;e<40&&!(de.resolveCircle(t,2.5,Wr)<=0);e++)t.x+=Wr.x*1.2+(Math.random()-.5),t.z+=Wr.z*1.2+(Math.random()-.5);Y.place(t.x,t.z,Y.h)}rh(0,!0)}var Gd={amber:"#f5a623",blue:"#2f8cff",green:"#22b573",red:"#e3243b",purple:"#9b5cff"},sr=()=>Gd[k.settings.accent]||Gd.amber;function qc(){let i=sr();document.documentElement.style.setProperty("--red",i),document.documentElement.style.setProperty("--red2",i),document.documentElement.style.setProperty("--hud",{small:.82,normal:1,large:1.18}[k.settings.hud]||1)}function Gn(i,t=2600){let e=document.createElement("div");for(e.innerHTML=i,at("toast").appendChild(e);at("toast").children.length>3;)at("toast").firstChild.remove();setTimeout(()=>e.remove(),t)}var $c=0;function Vd(i,t,e,n,s,r,a,o){let c=at(i),l=c.getContext("2d"),h=c.width,u=h/2,d=h*.46,p=k.settings.gauge,g=sr();l.clearRect(0,0,h,h);let x=Math.PI*.75,f=Math.PI*2.25,m=T=>x+(f-x)*jn(T/e,0,1);if(l.textAlign="center",l.textBaseline="middle",p==="digital"){l.fillStyle="rgba(6,10,16,0.88)",l.beginPath(),l.arc(u,u,d,0,7),l.fill(),l.lineWidth=3,l.strokeStyle=g,l.stroke();let T=24,w=jn(t/e,0,1);for(let E=0;E<T;E++){let P=x+(f-x)*(E+.5)/T;l.strokeStyle=E/T<w?o&&E/T*e>=o?"#ff3b4e":g:"rgba(255,255,255,0.1)",l.lineWidth=h*.05,l.beginPath(),l.arc(u,u,d*.8,P-.05,P+.05),l.stroke()}l.fillStyle="#e8fff8",l.font=`700 ${h*.24}px monospace`,l.fillText(r,u,u),l.font=`600 ${h*.06}px sans-serif`,l.fillStyle=g,l.fillText(a,u,u+h*.17);return}if(p==="sport"){l.fillStyle="rgba(10,12,16,0.85)",l.beginPath(),l.arc(u,u,d,0,7),l.fill(),l.lineCap="round",l.lineWidth=h*.09,l.strokeStyle="rgba(255,255,255,0.08)",l.beginPath(),l.arc(u,u,d*.78,x,f),l.stroke();let T=l.createLinearGradient(0,h,h,0);T.addColorStop(0,g),T.addColorStop(1,"#ff3b4e"),l.strokeStyle=T,l.beginPath(),l.arc(u,u,d*.78,x,m(t)),l.stroke(),l.lineCap="butt",l.fillStyle="#fff",l.font=`italic 900 ${h*.22}px sans-serif`,l.fillText(r,u,u-h*.02),l.font=`italic 700 ${h*.06}px sans-serif`,l.fillStyle="#9aa7b4",l.fillText(a,u,u+h*.15);return}let y=p==="classic";l.beginPath(),l.arc(u,u,d,0,7);let _=l.createRadialGradient(u,u,d*.2,u,u,d);y?(_.addColorStop(0,"#f4efe2"),_.addColorStop(1,"#d9d0bb")):(_.addColorStop(0,"rgba(30,34,40,0.95)"),_.addColorStop(1,"rgba(8,10,14,0.92)")),l.fillStyle=_,l.fill(),l.lineWidth=h*.035,l.strokeStyle=y?"#b8bcc0":g,l.stroke(),o&&(l.beginPath(),l.arc(u,u,d*.86,m(o),f),l.lineWidth=h*.03,l.strokeStyle="rgba(227,36,59,.85)",l.stroke());let M=y?"#1b1b1b":"#fff";l.fillStyle=M,l.strokeStyle=M,l.font=`${y?"":"italic "}800 ${h*.07}px ${y?"serif":"sans-serif"}`;for(let T=0;T<=e;T+=n/2){let w=m(T),E=T%n===0;l.lineWidth=E?3:1.5,l.beginPath(),l.moveTo(u+Math.cos(w)*d*.9,u+Math.sin(w)*d*.9),l.lineTo(u+Math.cos(w)*d*(E?.76:.82),u+Math.sin(w)*d*(E?.76:.82)),l.stroke(),E&&l.fillText(String(s(T)),u+Math.cos(w)*d*.6,u+Math.sin(w)*d*.6)}let R=m(t);l.strokeStyle=y?"#c0392b":g,l.lineWidth=h*.025,l.lineCap="round",l.beginPath(),l.moveTo(u-Math.cos(R)*d*.1,u-Math.sin(R)*d*.1),l.lineTo(u+Math.cos(R)*d*.86,u+Math.sin(R)*d*.86),l.stroke(),l.lineCap="butt",l.beginPath(),l.arc(u,u,d*.3,0,7),l.fillStyle=y?"#2b2b2b":"#0b0d11",l.fill(),l.fillStyle="#fff",l.font=`italic 900 ${h*.15}px sans-serif`,l.fillText(r,u,u-h*.01),l.font=`italic 700 ${h*.055}px sans-serif`,l.fillStyle=y?"#555":"#9aa7b4",l.fillText(a,u,u+h*.1+(y?h*.12:0))}function Lv(i){$c-=i;let t=Y.speedKmh;Vd("spdg",t,120,20,r=>r,String(Math.round(t)),"km/h",100);let e=Y.rpm*2500;if(Vd("rpmg",e/100,25,5,r=>r,Y.engineOn?Y.gear||"N":"OFF","x100 rpm",21),$c>0)return;$c=.2,at("lvl").textContent="Nv "+k.level,at("money").textContent=gn(k.money);let n=Xs(k.level);at("xpbar").style.width=(k.level>=30?100:k.xp/n*100)+"%",at("ic-load").textContent=`${(Y.mass/1e3).toFixed(1)} t`,at("ic-light").classList.toggle("on",Y.lightsOn),at("lightsbtn").classList.toggle("on",Y.lightsOn),at("ic-hand").classList.toggle("on",jt.hand);let s=k.job;if(s){let r=ln[s.cargo],a=kn?kn.len:0;at("jobtitle").textContent=`${r.icon} ${r.name} \u2022 ${r.t} t`;let o=fi[s.phase==="pickup"?s.from:s.to].name,c="";if(s.phase==="deliver"){let l=Math.abs(s.tLeft),h=Math.floor(l/60),u=Math.floor(l%60);c=` \u2022 <span class="${s.tLeft<0?"late":""}">\u23F1 ${s.tLeft<0?"-":""}${h}:${String(u).padStart(2,"0")}</span>`}at("jobsub").innerHTML=`${s.phase==="pickup"?"Coletar":"Entregar"}: <b>${o}</b> \u2022 ${(a/1e3).toFixed(1)} km${c}`,at("dist").textContent=a>1e3?(a/1e3).toFixed(1)+" km":Math.round(a)+" m",at("ic-dmg").classList.toggle("hidden",s.phase!=="deliver"),at("dmg").textContent=s.damage.toFixed(0)+"%"}else at("jobtitle").textContent="Sem frete ativo",at("jobsub").innerHTML="Toque em \u{1F4CB} para escolher uma carga",at("dist").textContent="",at("ic-dmg").classList.add("hidden")}var th=0,Ga=0,ir=0,Fa=0,Oa=0,Yc=0,js=0;function Kd(i){if(requestAnimationFrame(Kd),document.hidden)return;let t=(i-Ga)/1e3;if(Ga=i,!(t>0))return;if(t=Math.min(t,.05),ir+=t,Fa++,Oa+=t,Oa>=1.5){let n=Fa/Oa;Uv(n),k.settings.fps&&(at("fps").textContent=`${n.toFixed(0)} FPS \u2022 ${gi} \u2022 ${mi.toFixed(2)}x \u2022 ${Ne.info.render.calls} dc`),Fa=0,Oa=0}if(Kc(t),Pe==="title"){js-=t,js<=0&&(js=.5,Ha(k.clock)),ns.obstacles(Wc),ns.update(t,Y,Y._cs||[]),de.update(t,ir),cv(t),re.engine(0,0,!1),Ne.render(Te,Oe);return}if(k.settings.time==="cycle"&&Pe==="drive"&&(k.clock=(k.clock+t/50)%24),js-=t,js<=0&&(js=.5,Ha(k.clock)),Pe==="drive"){ns.obstacles(Wc);let n=2;for(let r=0;r<n;r++)Y.update(t/n,Sn,de,Wc);Y.lastImpact>0&&Iv(Y.lastImpact),k.stats.km+=Math.abs(Y.v)*t/1e3;let s=Y._cs||[];ns.update(t,Y,s),Pe==="drive"&&Ba(t)}de.update(t,ir),Dv(t),rh(t),re.engine(Y.rpm,Sn.throttle,Y.engineOn&&Pe==="drive"),Lv(t),Fa&1||Mv(),Yc+=t,Yc>8&&(Yc=0,Ue()),Ne.render(Te,Oe),th>0&&--th===0&&Te.traverse(n=>{n.material&&[].concat(n.material).forEach(s=>{s.needsUpdate=!0})})}function Iv(i){if(k.stats.crashes++,re.crash(i),navigator.vibrate)try{navigator.vibrate(Math.min(120,i*4))}catch(t){}if(k.job&&k.job.phase==="deliver"){let t=ln[k.job.cargo],e=Math.min(30,i*(t.fragile?.55:.3));k.job.damage=Math.min(100,k.job.damage+e),Gn(`\u{1F4A5} Batida! Carga avariada +${e.toFixed(0)}%`,1800)}}function Dv(i){let t=Va();if(!t){Je.visible=!1,Hn.visible=!1;return}Vr-=i,Vr<=0&&(kn=Vc(Y.x,Y.z,t),Vr=.5),Je.visible=!0,Je.position.set(t.zone.x,0,t.zone.z),Je.zone.scale.set(t.zone.w,t.zone.d,1);let e=qd(t);Je.zone.material.color.setHex(e?4120698:16761856),Je.cone.position.y=7+Math.sin(ir*3)*.8,Je.cone.rotation.y=ir*1.5;let n=null;if(kn)for(let s=1;s<kn.path.length;s++){let r=kn.path[s];if(Math.hypot(r.x-Y.x,r.z-Y.z)>22||s===kn.path.length-1){n=r;break}}if(n&&qt.mode!==2){Hn.visible=!0;let s=Math.sin(Y.h),r=Math.cos(Y.h);Hn.position.set(Y.x+s*Y.model.zf*.5,(Y.def.id==="urbano"?4.2:5.4)+Math.sin(ir*4)*.12,Y.z+r*Y.model.zf*.5),Hn.rotation.y=Math.atan2(n.x-Y.x,n.z-Y.z)}else Hn.visible=!1}function Uv(i){let t=window.devicePixelRatio||1,e=Math.min(t,Ee.pr),n=mi;i<27?n=Math.max(Ee.minPr*Math.min(1,t),mi*.88):i>52&&(n=Math.min(e,mi*1.06)),Math.abs(n-mi)>.01&&(mi=n,Ne.setPixelRatio(mi),Ne.setSize(window.innerWidth,window.innerHeight,!1))}function jd(){Ne&&(Ne.setSize(window.innerWidth,window.innerHeight,!1),Oe.aspect=window.innerWidth/window.innerHeight,Oe.updateProjectionMatrix())}window.addEventListener("error",i=>{let t=at("loadmsg");t&&Pe==="loading"&&(t.textContent="Erro: "+i.message)});window.__game={get scene(){return Te},get sun(){return Ze},get renderer(){return Ne},S:k,get rig(){return Y},get state(){return Pe},ctl:jt,acceptJob:i=>Wd(i),get jobs(){return is},world:()=>de,cam:qt};ev().catch(i=>{at("loadmsg").textContent="Erro ao iniciar: "+i.message,console.error(i)});})();
