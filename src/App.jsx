import React from "react";
import { HashRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

// ===============================
// CONFIGURAÇÃO DE MARCA (Grupo Ribeiro)
// ===============================
const BRAND = {
  name: "Grupo Ribeiro",
  // Defina a URL do logo (PNG/SVG). Se vazio, mostramos a marca tipográfica.
  logoUrl: "", // ex.: "/logo-gr.png"
  colors: {
    blue: "#0E4A8F", // primária (tom do logo)
    blueDark: "#0A3164",
    gray: "#5A636C",
    grayDark: "#3E454B",
    red: "#D73A3A",
    white: "#FFFFFF",
    bg: "#F7F8FA"
  },
  whatsapp: "5531972224543"
};

// ===============================
// DADOS – poderíamos mover para uma API
// ===============================
const SERVICES = [
  {
    id: "eletricista",
    nome: "Eletricista",
    valor: 120,
    unidade: "visita",
    descricao:
      "Instalação e reparo elétrico residencial e comercial. Quadro elétrico, disjuntores, tomadas e iluminação.",
    tags: ["instalação", "quadro elétrico", "tomada", "disjuntor"],
    imagens: [
      "https://soscasacuritiba.com.br/wp-content/uploads/2023/09/O-que-faz-um-eletricista-de-manutencao-1.jpg",
      "https://www.qualificanet.com.br/images/construction-8.jpg"
    ]
  },
  {
    id: "bombeiro-hidraulico",
    nome: "Bombeiro Hidráulico",
    valor: 110,
    unidade: "visita",
    descricao:
      "Conserto de vazamentos, troca de registros, instalação de louças e desentupimentos leves.",
    tags: ["encanador", "vazamento", "torneira", "pvc"],
    imagens: [
      "https://images.unsplash.com/photo-1600838941860-7df8b2d4c5b9",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    ]
  },
  {
    id: "pedreiro",
    nome: "Pedreiro",
    valor: 180,
    unidade: "dia",
    descricao:
      "Alvenaria, reboco, assentamento, contrapiso e pequenas reformas com acabamento limpo.",
    tags: ["obra", "reforma", "alvenaria"],
    imagens: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      "https://images.unsplash.com/photo-1487956382158-bb926046304a"
    ]
  },
  {
    id: "mecanico",
    nome: "Mecânico",
    valor: 150,
    unidade: "diagnóstico",
    descricao:
      "Diag. por scanner, troca de óleo e filtros, freio e suspensão. Manutenção preventiva.",
    tags: ["carro", "motor", "óleo", "freio"],
    imagens: [
      "https://images.unsplash.com/photo-1542365887-5f6c5b5a2c5a",
      "https://images.unsplash.com/photo-1517048676794-5dc0d6f3e0c2"
    ]
  },
  {
    id: "pintor",
    nome: "Pintor",
    valor: 12,
    unidade: "m²",
    descricao:
      "Pintura interna/externa, preparação de superfície, massa corrida e acabamento fino.",
    tags: ["tinta", "massa corrida", "acabamento"],
    imagens: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f"
    ]
  },
  {
    id: "marceneiro",
    nome: "Marceneiro",
    valor: 250,
    unidade: "módulo",
    descricao:
      "Móveis sob medida, reparos, ajustes de dobradiças e instalação de portas.",
    tags: ["móveis", "mdf", "madeira"],
    imagens: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1518081461904-9ac4b2824d68"
    ]
  },
  {
    id: "jardineiro",
    nome: "Jardineiro",
    valor: 100,
    unidade: "visita",
    descricao: "Poda, adubação, manutenção e paisagismo leve para áreas verdes.",
    tags: ["grama", "poda", "adubo"],
    imagens: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "https://images.unsplash.com/photo-1438109491414-7198515b166b"
    ]
  },
  {
    id: "limpeza",
    nome: "Limpeza Residencial",
    valor: 180,
    unidade: "diária",
    descricao:
      "Limpeza completa com foco em cozinha, banheiros e áreas comuns. Equipe treinada.",
    tags: ["faxina", "diarista", "higienização"],
    imagens: [
      "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8",
      "https://images.unsplash.com/photo-1586201375761-83865001e31b"
    ]
  },
  {
    id: "ti-suporte",
    nome: "Suporte de TI",
    valor: 120,
    unidade: "hora",
    descricao:
      "Formatação, backup, redes Wi‑Fi e configuração de dispositivos. Atendimento remoto e local.",
    tags: ["computador", "rede", "wifi"],
    imagens: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    ]
  }
];

// ===============================
// ESTILOS GLOBAIS (mobile-first)
// ===============================
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
    :root{
      --blue:${BRAND.colors.blue};
      --blueDark:${BRAND.colors.blueDark};
      --gray:${BRAND.colors.gray};
      --grayDark:${BRAND.colors.grayDark};
      --red:${BRAND.colors.red};
      --bg:${BRAND.colors.bg};
      --white:#fff;
      --radius:16px;
      --shadow:0 10px 25px rgba(0,0,0,.08);
    }
    *{box-sizing:border-box}
    body{margin:0;font:16px/1.6 'Montserrat',ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto; color:var(--grayDark); background:var(--bg)}
    img{max-width:100%; height:auto; display:block}
    a{text-decoration:none; color:inherit}
    :focus-visible{outline:3px solid var(--red); outline-offset:2px}

    .container{max-width:1120px; margin:0 auto; padding:16px}
    .topbar{position:sticky; top:0; z-index:50; background:var(--white); border-bottom:1px solid #e6e8eb}
    .topbar-row{display:flex; align-items:center; gap:12px}
    .brand{display:flex; align-items:center; gap:10px}
    .brand-mark{display:flex; align-items:center; gap:10px; font-weight:800; color:var(--blue)}
    .brand-mark .gr{font-size:1.35rem; background:var(--white); border-radius:10px; padding:2px 8px; color:var(--blue)}
    .brand-mark .name{color:var(--grayDark); letter-spacing:.3px}
    .search{flex:1; display:flex; align-items:center; background:#fff; border-radius:999px; padding:8px 12px; gap:8px; border:1px solid #e5e7eb}
    .search input{flex:1; border:0; outline:0; font-size:1rem; min-width:60px}
    .search button{border:0; background:var(--blue); color:#fff; padding:10px 14px; border-radius:999px; font-weight:700}

    .hero{padding:20px 0 8px}
    .hero h1{margin:0 0 6px; font-size:clamp(1.25rem,3.5vw,2rem); color:var(--blueDark)}
    .hero p{margin:0; color:var(--gray)}
    .cta-row{margin-top:12px; display:flex; gap:8px; flex-wrap:wrap}
    .btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; border-radius:999px; padding:10px 16px; border:1px solid transparent; font-weight:700}
    .btn-primary{background:var(--blue); color:#fff}
    .btn-outline{background:transparent; border-color:var(--blue); color:var(--blue)}

    .chips{display:flex; gap:8px; flex-wrap:nowrap; overflow:auto; padding:8px 0; -webkit-overflow-scrolling:touch}
    .chip{border:1px solid #d1d5db; background:#fff; border-radius:999px; padding:6px 12px; white-space:nowrap}
    .chip[aria-pressed="true"]{background:var(--blue); color:#fff; border-color:var(--blue)}

    .grid{display:grid; grid-template-columns:repeat(12,1fr); gap:12px; margin-top:16px}
    .card{grid-column:span 12; background:#fff; border-radius:var(--radius); box-shadow:var(--shadow); padding:14px; display:flex; gap:12px; border:1px solid #eef0f2; transition:transform .15s ease}
    .card:hover{transform:translateY(-2px)}
    .card .thumb{width:64px; height:64px; border-radius:12px; background:#f2f4f7; display:grid; place-items:center; overflow:hidden}
    .card h3{margin:0 0 6px; font-size:1.05rem; color:var(--blueDark)}
    .card p{margin:0 0 8px; color:var(--gray)}
    .price{font-weight:800; color:var(--blueDark)}

    @media (min-width:640px){ .card{grid-column:span 6} }
    @media (min-width:960px){ .card{grid-column:span 4} }

    .whatsapp{position:fixed; bottom:18px; right:18px; z-index:60}
    .wa-btn{display:inline-flex; align-items:center; gap:8px; background:#25D366; color:#000; border-radius:999px; padding:12px 16px; font-weight:800; box-shadow:var(--shadow)}

    footer{background:var(--blueDark); color:#fff; margin-top:36px}
    .footer-grid{display:grid; grid-template-columns:repeat(12,1fr); gap:16px}
    .footer-col{grid-column:span 12}
    .copyright{border-top:1px solid rgba(255,255,255,.16); margin-top:12px; padding-top:12px; color:#eef}
    @media (min-width:700px){ .footer-col{grid-column:span 4} }

    /* Página de serviço */
    .detail-hero{background:#fff; border-radius:20px; box-shadow:var(--shadow); padding:16px}
    .gallery{display:grid; grid-template-columns:repeat(12,1fr); gap:10px; margin-top:12px}
    .gallery img{border-radius:12px; width:100%; height:180px; object-fit:cover}
    .gallery .main{grid-column:span 12; height:210px}
    @media (min-width:700px){ .gallery .main{grid-column:span 8; height:260px} .gallery .side{grid-column:span 4} .gallery .side img{height:125px} }
  `}</style>
);

// ===============================
// COMPONENTES
// ===============================
const Header = ({ query, setQuery, onSearch }) => {
  return (
    <header className="topbar" role="banner">
      <div className="container topbar-row">
        <Link to="/" className="brand" aria-label={`Página inicial - ${BRAND.name}`}>
          {BRAND.logoUrl ? (
            <img src={BRAND.logoUrl} alt={`${BRAND.name} - logomarca`} style={{height:36}}/>
          ) : (
            <div className="brand-mark" aria-label={`${BRAND.name}`}>
              <span className="gr" style={{color:"#fff", background:BRAND.colors.blue}}>GR</span>
              <span className="name">GRUPO RIBEIRO</span>
            </div>
          )}
        </Link>
        <form className="search" role="search" aria-label="Buscar serviços" onSubmit={e=>{e.preventDefault(); onSearch(query);}}>
          <input value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder="Busque por eletricista, pedreiro, mecânico..." aria-controls="service-list" />
          <button type="submit" aria-label="Buscar">Buscar</button>
        </form>
      </div>
    </header>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [chip, setChip] = React.useState("");
  const list = React.useMemo(()=>{
    const term = (chip || query).toLowerCase();
    if(!term) return SERVICES;
    return SERVICES.filter(s => s.nome.toLowerCase().includes(term) || s.descricao.toLowerCase().includes(term) || s.tags.some(t=>t.toLowerCase().includes(term)));
  }, [query, chip]);

  return (
    <>
      <Header query={query} setQuery={setQuery} onSearch={(q)=>setChip(q)} />
      <main className="container" role="main">
        <section className="hero" aria-labelledby="headline">
          <h1 id="headline">Serviços confiáveis, valores honestos e atendimento rápido</h1>
          <p>Compare opções, veja valores aproximados e fale no WhatsApp para fechar o serviço.</p>
          <div className="cta-row">
            <a href="#servicos" className="btn btn-primary" aria-label="Ver serviços">Ver serviços</a>
            <a href="#contato" className="btn btn-outline" aria-label="Fale conosco">Fale conosco</a>
          </div>
          <div className="chips" role="group" aria-label="Filtros rápidos">
            {['eletricista','bombeiro','pedreiro','mecânico'].map(k=> (
              <button key={k} className="chip" aria-pressed={chip===k?"true":"false"} onClick={()=> setChip(chip===k?"":k)}>{k[0].toUpperCase()+k.slice(1)}</button>
            ))}
          </div>
        </section>

        <section id="servicos" aria-labelledby="titulo-servicos">
          <h2 id="titulo-servicos" style={{margin:"0 0 10px", color:BRAND.colors.blueDark}}>Nossos serviços</h2>
          <p style={{margin:"0 0 10px", color:BRAND.colors.gray}}>Valores são estimativas médias para referência. O preço final pode variar conforme avaliação.</p>
          <div id="service-list" className="grid" role="list">
            {list.map(svc => (
              <article key={svc.id} className="card" role="listitem" onClick={()=> navigate(`/servico/${svc.id}`)} style={{cursor:'pointer'}}>
                <div className="thumb" aria-hidden="true">
                  <img src={svc.imagens[0]} alt="Prévia do serviço"/>
                </div>
                <div>
                  <h3>{svc.nome}</h3>
                  <p>{svc.descricao}</p>
                  <div className="price">A partir de {svc.valor.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} <small>/ {svc.unidade}</small></div>
                  <div className="cta-row" style={{marginTop:8}}>
                    <a className="btn btn-primary" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de solicitar orçamento para '+svc.nome)}`} target="_blank" rel="noopener">Solicitar orçamento</a>
                    <Link className="btn btn-outline" to={`/servico/${svc.id}`}>Mais detalhes</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" style={{marginTop:24}}>
          <h2 style={{margin:0, color:BRAND.colors.blueDark}}>Precisa de ajuda agora?</h2>
          <p style={{margin:"6px 0", color:BRAND.colors.gray}}>Chame no WhatsApp e descreva rapidamente o problema. Em minutos retornamos com a disponibilidade.</p>
          <p style={{margin:"8px 0 0"}}><a className="btn btn-primary" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de um orçamento.')}`} target="_blank" rel="noopener">Falar no WhatsApp</a></p>
        </section>
      </main>

      <div className="whatsapp" aria-live="polite">
        <a className="wa-btn" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e preciso de ajuda.')}`} target="_blank" rel="noopener" aria-label="Abrir conversa no WhatsApp">WhatsApp</a>
      </div>

      <Footer/>
    </>
  );
};

const ServiceDetail = () => {
  const { id } = useParams();
  const svc = SERVICES.find(s => s.id === id);
  if(!svc){
    return (
      <>
        <Header query="" setQuery={()=>{}} onSearch={()=>{}} />
        <main className="container"><p>Serviço não encontrado.</p></main>
        <Footer/>
      </>
    )
  }
  return (
    <>
      <Header query="" setQuery={()=>{}} onSearch={()=>{}} />
      <main className="container" role="main">
        <nav style={{marginTop:12, marginBottom:12}}><Link to="/">← Voltar</Link></nav>
        <div className="detail-hero">
          <h1 style={{marginTop:0, color:BRAND.colors.blueDark}}>{svc.nome}</h1>
          <p style={{marginTop:4, color:BRAND.colors.gray}}>{svc.descricao}</p>
          <p className="price" style={{marginTop:4}}>A partir de {svc.valor.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} <small>/ {svc.unidade}</small></p>
          <div className="cta-row" style={{marginTop:8}}>
            <a className="btn btn-primary" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de orçamento para '+svc.nome)}`} target="_blank" rel="noopener">Solicitar orçamento</a>
            <a className="btn btn-outline" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Tenho dúvidas sobre '+svc.nome)}`} target="_blank" rel="noopener">Fale conosco</a>
          </div>

          <div className="gallery">
            <img className="main" src={svc.imagens[0]} alt={`Foto de ${svc.nome}`} />
            <div className="side">
              {svc.imagens.slice(1).map((src,i)=> (
                <img key={i} src={src} alt={`Imagem ${i+2} de ${svc.nome}`} />
              ))}
            </div>
          </div>

          <section style={{marginTop:16}}>
            <h2 style={{marginBottom:6, color:BRAND.colors.blueDark}}>O que está incluso</h2>
            <ul style={{marginTop:0, paddingLeft:18}}>
              <li>Visita técnica e diagnóstico inicial;</li>
              <li>Materiais e peças são orçados à parte;</li>
              <li>Garantia de 90 dias para serviços executados.</li>
            </ul>
          </section>
        </div>
      </main>
      <div className="whatsapp" aria-live="polite">
        <a className="wa-btn" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de orçamento para '+svc.nome)}`} target="_blank" rel="noopener" aria-label="Abrir conversa no WhatsApp">WhatsApp</a>
      </div>
      <Footer/>
    </>
  );
};

const Footer = () => (
  <footer role="contentinfo" style={{background:BRAND.colors.blueDark}}>
    <div className="container footer-grid">
      <div className="footer-col">
        <h3 style={{margin:"0 0 8px"}}>{BRAND.name}</h3>
        <p style={{margin:0, color:"#e5e7eb"}}>Serviços com qualidade e transparência. Atendimento de segunda a sábado, 08h às 18h.</p>
      </div>
      <div className="footer-col">
        <h3 style={{margin:"0 0 8px"}}>Contato</h3>
        <p style={{margin:0}}>Telefone: (31) 97222-4543<br/>E-mail: contato@gruporibeiro.com</p>
      </div>
      <div className="footer-col">
        <h3 style={{margin:"0 0 8px"}}>Redes</h3>
        <p style={{margin:0}}><a href="#">Instagram</a> • <a href="#">Facebook</a> • <a href="#">LinkedIn</a></p>
      </div>
      <div className="footer-col copyright">© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</div>
    </div>
  </footer>
);

// ===============================
// APLICAÇÃO
// ===============================
export default function App(){
  return (
    <HashRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servico/:id" element={<ServiceDetail/>} />
      </Routes>
    </HashRouter>
  );
}
