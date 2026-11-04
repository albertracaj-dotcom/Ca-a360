import Link from "next/link";

export default function OfflinePage() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"28px",background:"#f5f4ed",fontFamily:"Arial,sans-serif",color:"#183d30"}}>
      <section style={{maxWidth:460,textAlign:"center",background:"#fffefa",padding:36,border:"1px solid #e5e7df"}}>
        <div style={{fontSize:12,letterSpacing:3,fontWeight:700}}>CAÇA 360</div>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:34,fontWeight:500}}>Ara mateix estàs sense connexió.</h1>
        <p style={{lineHeight:1.7,color:"#788078"}}>Quan recuperis internet podràs tornar a entrar a l'aplicació. En aquesta primera versió, el contingut d'estudi encara necessita connexió.</p>
        <Link href="/" style={{display:"inline-block",marginTop:12,padding:"13px 20px",background:"#c3a66c",color:"#183d30",textDecoration:"none",fontWeight:700}}>Torna a provar-ho</Link>
      </section>
    </main>
  );
}