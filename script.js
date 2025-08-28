// --- CONFIGURAÇÕES E VARIÁVEIS GLOBAIS ---
const API_KEY = "ec83f922-db4f-4cec-924f-77f5c6320fa8-0ebe2bcd-046f-4a1b-9cdb-f4085b39f272";
const API_BASE_URL = "https://api.cnpja.com/office/";
let fornecedoresCotacao = JSON.parse(localStorage.getItem('fornecedoresCotacao')) || [];
let fornecedoresFavoritos = JSON.parse(localStorage.getItem('fornecedoresFavoritos')) || [];
const SERVICOS_ADMINISTRATIVOS = ["Advocacia", "Medicina", "Odontologia", "Engenharia", "Arquitetura", "Contabilidade", "Consultoria Empresarial", "Psicologia", "Enfermagem", "Fisioterapia", "Nutrição", "Análise e Desenvolvimento de Sistemas", "Design Gráfico", "Publicidade e Propaganda", "Tradução e Interpretação", "Auditoria", "Journalism", "Ciências Atuariais", "Educação (professores particulares)", "Veterinária", "Assessoria Técnica", "Química (laboratórios e análises técnicas)", "Biologia (consultoria ambiental, por exemplo)", "Geologia", "Estatística", "Terapia Ocupacional", "Administração de Empresas (consultoria)", "Informática (suporte técnico e consultoria)", "Marketing Digital", "Fotografia Profissional", "Terapia e Coaching", "Análise e Diagnóstico Técnico", "Pesquisa Científica", "Consultoria Financeira", "Serviços de Tradução Técnica", "Avaliação e Perícias Técnicas"];

// Lista de empreendimentos com opção RET
const EMPREENDIMENTOS = [
    { empresa: "CL", regional: "LDB", nome: "Absoluto", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Aerie", ret: false },
    { empresa: "PL", regional: "CWB", nome: "Ágon", ret: false },
    { empresa: "PL", regional: "CGR", nome: "Alameda Jardim", ret: false },
    { empresa: "PL", regional: "MGA", nome: "ALMÁH", ret: false },
    { empresa: "PL", regional: "MGA", nome: "Almond", ret: true },
    { empresa: "FI", regional: "SÃO", nome: "Altier Moema Pássaros", ret: true },
    { empresa: "PL", regional: "CBA", nome: "Apogeo", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Arbo Flora", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Arch", ret: true },
    { empresa: "VA", regional: "CBA", nome: "Arch Jardim Cuiabá", ret: true },
    { empresa: "VA", regional: "LDB", nome: "Arch Palhano", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Art Houses", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Artesano", ret: true },
    { empresa: "PL", regional: "CGR", nome: "Artheo - Concept Living", ret: true },
    { empresa: "B1", regional: "LDB", nome: "Atelie", ret: true },
    { empresa: "B3", regional: "CGR", nome: "Atmosphere", ret: false },
    { empresa: "PL", regional: "CWB", nome: "Atrio", ret: false },
    { empresa: "PL", regional: "LDB", nome: "Atrio 1050", ret: true },
    { empresa: "PL", regional: "CBA", nome: "Aughe", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Aura", ret: true },
    { empresa: "PR", regional: "CBA", nome: "AURUM", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Auth", ret: true },
    { empresa: "C1", regional: "CPS", nome: "Authentic", ret: true },
    { empresa: "PL", regional: "CBA", nome: "Authentique", ret: true },
    { empresa: "PL", regional: "CGR", nome: "Aztris", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Blend", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Bless", ret: false },
    { empresa: "VA", regional: "LDB", nome: "BLU.INK", ret: false },
    { empresa: "PL", regional: "LDB", nome: "BOSSANOVA", ret: false },
    { empresa: "PL", regional: "LDB", nome: "Botanico", ret: false },
    { empresa: "PL", regional: "CBA", nome: "Bravie", ret: true },
    { empresa: "VJ", regional: "JOI", nome: "Breeze", ret: true },
    { empresa: "VA", regional: "LDB", nome: "Concept Palhano", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Connect Studios", ret: false },
    { empresa: "PL", regional: "CWB", nome: "Dreams Ecoville", ret: true },
    { empresa: "PL", regional: "POA", nome: "Editon Moinhos", ret: false },
    { empresa: "PL", regional: "MGA", nome: "Essence", ret: true },
    { empresa: "PL", regional: "CPS", nome: "Essential", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Essential", ret: false },
    { empresa: "PL", regional: "CBA", nome: "Essenza", ret: false },
    { empresa: "C7", regional: "SÃO", nome: "ETMO JARDINS", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Evidence", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Evolve", ret: false },
    { empresa: "RC", regional: "CBA", nome: "Évora", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Experience", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Felicitá", ret: false },
    { empresa: "PL", regional: "CWB", nome: "Fift Cabral", ret: true },
    { empresa: "VA", regional: "CGR", nome: "Flow", ret: false },
    { empresa: "VA", regional: "LDB", nome: "Freedom Palhano", ret: true },
    { empresa: "B1", regional: "LDB", nome: "Galeria", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Grand Palais", ret: true },
    { empresa: "PL", regional: "CBA", nome: "Hampton", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Harmony Concept House", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Hause", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Horizon Ecoville", ret: false },
    { empresa: "PL", regional: "LDB", nome: "HUMA", ret: false },
    { empresa: "VA", regional: "CWB", nome: "Hytte", ret: false },
    { empresa: "VA", regional: "CWB", nome: "Insight", ret: true },
    { empresa: "VA", regional: "LDB", nome: "Insight Palhano", ret: true },
    { empresa: "PM", regional: "CWB", nome: "Landhaus", ret: true },
    { empresa: "PL", regional: "JOI", nome: "Landhaus", ret: false },
    { empresa: "PL", regional: "MGA", nome: "Légit", ret: true },
    { empresa: "A8", regional: "CGR", nome: "Lieu Unique", ret: false },
    { empresa: "VA", regional: "CBA", nome: "Liven", ret: false },
    { empresa: "B1", regional: "LDB", nome: "Loteamento Externo", ret: false },
    { empresa: "PL", regional: "CGR", nome: "Lumini", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Madri Ecoville", ret: true },
    { empresa: "VA", regional: "LDB", nome: "MIND", ret: true },
    { empresa: "PL", regional: "CGR", nome: "Momentum", ret: true },
    { empresa: "VA", regional: "CGR", nome: "Mondo", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Mondrian", ret: false },
    { empresa: "B5", regional: "POA", nome: "MOOD Central Parque", ret: true },
    { empresa: "VA", regional: "CGR", nome: "Muv.In", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Nest", ret: false },
    { empresa: "VA", regional: "CWB", nome: "New.In", ret: true },
    { empresa: "VA", regional: "CBA", nome: "Next", ret: false },
    { empresa: "PL", regional: "MGA", nome: "NYC", ret: false },
    { empresa: "VA", regional: "CBA", nome: "NYC Jardim das Américas", ret: false },
    { empresa: "PL", regional: "JOI", nome: "ONE", ret: false },
    { empresa: "PL", regional: "CWB", nome: "One Batel", ret: true },
    { empresa: "B1", regional: "LDB", nome: "Opera", ret: true },
    { empresa: "PL", regional: "POA", nome: "Orbitale", ret: true },
    { empresa: "VA", regional: "CGR", nome: "Ouse", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Out Smart Living", ret: false },
    { empresa: "PL", regional: "CWB", nome: "PALM 235", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Parc Rocher", ret: false },
    { empresa: "PL", regional: "CGR", nome: "Park Platinum", ret: true },
    { empresa: "PL", regional: "CGR", nome: "Paseo", ret: false },
    { empresa: "PL", regional: "CWB", nome: "Paseo Folloni", ret: false },
    { empresa: "PL", regional: "MGA", nome: "Paseo Ingá", ret: false },
    { empresa: "PL", regional: "LDB", nome: "Paseo Santos", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Plaenge", ret: true },
    { empresa: "C2", regional: "CPS", nome: "Plaenge Design by Pininfarina", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Plaza del Sol", ret: false },
    { empresa: "PL", regional: "LDB", nome: "Poema", ret: false },
    { empresa: "PM", regional: "CWB", nome: "Poeme", ret: false },
    { empresa: "PL", regional: "LDB", nome: "Prime Paranaguá", ret: false },
    { empresa: "PL", regional: "MGA", nome: "Privelle", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Pulse", ret: false },
    { empresa: "PL", regional: "CWB", nome: "Rodin Residence", ret: true },
    { empresa: "PL", regional: "CGR", nome: "Scenarium", ret: true },
    { empresa: "VA", regional: "LDB", nome: "Sense", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Serenity", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Signature", ret: true },
    { empresa: "PL", regional: "CPS", nome: "Signature Cambuí", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Signature Plaenge", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Solar do Bosque MGA", ret: false },
    { empresa: "VA", regional: "CBA", nome: "Soul", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Square", ret: true },
    { empresa: "VA", regional: "LDB", nome: "Summer", ret: false },
    { empresa: "PL", regional: "CGR", nome: "Sunrise Residence", ret: false },
    { empresa: "VA", regional: "LDB", nome: "TAY", ret: true },
    { empresa: "VA", regional: "CGR", nome: "TAY", ret: false },
    { empresa: "VA", regional: "CPS", nome: "TAY", ret: false },
    { empresa: "VA", regional: "CGR", nome: "Terrah", ret: false },
    { empresa: "PL", regional: "CPS", nome: "The Mark", ret: true },
    { empresa: "PL", regional: "CGR", nome: "Toscana", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Trend", ret: true },
    { empresa: "D8", regional: "POA", nome: "Trend Downtown", ret: true },
    { empresa: "PL", regional: "CPS", nome: "Trend Home & Design", ret: true },
    { empresa: "PL", regional: "LDB", nome: "Tresor", ret: false },
    { empresa: "PL", regional: "LDB", nome: "Trianon", ret: false },
    { empresa: "VA", regional: "CBA", nome: "Urbanit", ret: true },
    { empresa: "C5", regional: "POA", nome: "Verdant", ret: true },
    { empresa: "VA", regional: "CWB", nome: "Vermont", ret: false },
    { empresa: "PL", regional: "MGA", nome: "Vista Real", ret: false },
    { empresa: "PL", regional: "CPS", nome: "Vitra", ret: true },
    { empresa: "PL", regional: "JOI", nome: "Vitra", ret: true },
    { empresa: "PL", regional: "CWB", nome: "Vitra Água Verde", ret: true },
    { empresa: "VA", regional: "CBA", nome: "Vivart Bosque da Saúde", ret: false },
    { empresa: "VA", regional: "CGR", nome: "Vivet", ret: true },
    { empresa: "PL", regional: "CBA", nome: "VOX", ret: true },
    { empresa: "VA", regional: "JOI", nome: "W135", ret: true },
    { empresa: "B7", regional: "POA", nome: "Wave", ret: true },
    { empresa: "PL", regional: "MGA", nome: "Wish", ret: true },
    { empresa: "PL", regional: "CWB", nome: "WM120", ret: false },
    { empresa: "VA", regional: "LDB", nome: "Wood", ret: true },
    { empresa: "VA", regional: "LDB", nome: "You - 180", ret: true },
    { empresa: "VA", regional: "POA", nome: "Yuna Jardim Botânico", ret: false },
    { empresa: "VA", regional: "POA", nome: "Yvy Lindóia", ret: true }
];

const PRAZOS_PAGAMENTO = [
    {value: "0", label: "À Vista"},
    {value: "0/15 DD", label: "0/15 70% a vista / 30% c/ 15 dias de Faturamento"},
    {value: "05 VEZES", label: "05 VEZES"},
    {value: "08/36/66/94DD", label: "08/36/66/94 Dias do Faturamento"},
    {value: "09/16 DD", label: "09/16 Dias do Faturamento"},
    {value: "1", label: "1 Dia Líquido"},
    {value: "1 MENSAL", label: "1 Parcela Mensal"},
    {value: "10 MENSAIS", label: "10 Parcelas Mensais e Iguais"},
    {value: "105DD", label: "105 Dias do Faturamento"},
    {value: "10DD", label: "10 Dias do Faturamento"},
    {value: "11/30/60 DD", label: "11/30/60 Dias do Faturamento"},
    {value: "11DD", label: "11 Dias do Faturamento"},
    {value: "12 MENS", label: "12 Parcelas Mensais"},
    {value: "12 MENSAIS", label: "12 Parcelas Mensais - 1º Quitada"},
    {value: "12 VEZES", label: "12 Parcelas Mensais - 1ª 30 Dias"},
    {value: "120DD", label: "120 Dias do Faturamento"},
    {value: "12DD", label: "12 Dias do Faturamento"},
    {value: "13 MENS", label: "13 Parcelas Mensais"},
    {value: "13 MENSAIS", label: "13 Parcelas Mensais - 1ª Quitada"},
    {value: "13/41 DD", label: "13/41 Dias do Faturamento"},
    {value: "13DD", label: "13 Dias do Faturamento"},
    {value: "14 DD", label: "14 Dias do Faturamento"},
    {value: "14 MENSAIS", label: "14 Parcelas Mensais"},
    {value: "14/28 DD", label: "14/28 Dias da Entrega"},
    {value: "141DD", label: "141 Dias do Faturamento"},
    {value: "14DD", label: "14 Dias do Faturamento"},
    {value: "15/45 DD", label: "15/45 Dias do Faturamento"},
    {value: "15/45/60 DD", label: "15/45/60 Dias do Faturamento"},
    {value: "15/60 DD", label: "15/60 Dias do Faturamento"},
    {value: "15DD", label: "15 Dias do Faturamento"},
    {value: "15VEZES", label: "15 VEZES"},
    {value: "16DD", label: "16 Dias do Faturamento"},
    {value: "17DD", label: "17 Dias do Faturamento"},
    {value: "180DD", label: "180 Dias do Faturamento"},
    {value: "18DD", label: "18 Dias do Faturamento"},
    {value: "19/52 DD", label: "19/52 Dias do Faturamento"},
    {value: "19DD", label: "19 Dias do Faturamento"},
    {value: "1DD", label: "1 Dias do Faturamento"},
    {value: "2", label: "2 Dias Líquido"},
    {value: "2 MENSAIS", label: "2 Parcelas Mensais"},
    {value: "2 VEZES", label: "2 Parcelas"},
    {value: "20/40 DD", label: "20/40 Dias do Faturamento"},
    {value: "20DD", label: "20 Dias do Faturamento"},
    {value: "21/42 DD", label: "21/42 Dias do Faturamento"},
    {value: "21DD", label: "21 Dias do Faturamento"},
    {value: "22DD", label: "22 Dias do Faturamento"},
    {value: "23DD", label: "23 Dias do Faturamento"},
    {value: "24DD", label: "24 Dias do Faturamento"},
    {value: "25DD", label: "25 Dias do Faturamento"},
    {value: "26DD", label: "26 Dias do Faturamento"},
    {value: "27/60/90/118 DD", label: "27/60/90/118 Dias do Faturamento"},
    {value: "27DD", label: "27 Dias do Faturamento"},
    {value: "28 DD", label: "28 Dias do Faturamento"},
    {value: "28 MENSAIS", label: "28 Parcelas Mensais"},
    {value: "28/35/42DD", label: "28/35/42 Dias do Faturamento"},
    {value: "28/35DD", label: "28 e 35 Dias do Faturamento"},
    {value: "28/42 DD", label: "28/42 Dias do Faturamento"},
    {value: "28/42/56DD", label: "28/42/56 Dias do Faturamento"},
    {value: "28/45", label: "28/45 Dias do Faturamento"},
    {value: "28/56", label: "28/56 Dias do Faturamento"},
    {value: "28/56/84", label: "28/56/84 Dias do Faturamento"},
    {value: "28/56/84/112", label: "28/56/84/112 Dias do Faturamento"},
    {value: "28/56/84/112/140", label: "28/56/84/112/140 Dias Faturamento"},
    {value: "28/56/84/120 DD", label: "28/56/84/120 Dias do Faturamento"},
    {value: "28/63/84/112", label: "28/63/84/112 Dias do Faturamento"},
    {value: "28DD", label: "INATIVA 28 Dias do Faturamento"},
    {value: "29/57", label: "29/57 Dias do Faturamento"},
    {value: "29DD", label: "29 Dias do Faturamento"},
    {value: "2DD", label: "2 Dias do Faturamento"},
    {value: "3", label: "3 Dias Líquido"},
    {value: "3 MENSAIS", label: "3 Parcelas Mensais"},
    {value: "30/40/50DD", label: "30/40/50 Dias do Faturamento"},
    {value: "30/45/60DD", label: "30/45/60 Dias do Faturamento"},
    {value: "30/60", label: "30/60 Dias do Faturamento"},
    {value: "30/60/90", label: "30/60/90 Dias do Faturamento"},
    {value: "30DD", label: "30 Dias do Faturamento"},
    {value: "30DD ACERT", label: "30 Dias do Faturamento (p/ acerto)"},
    {value: "30DD PED", label: "30 Dias do Pedido"},
    {value: "31DD", label: "31 Dias do Faturamento"},
    {value: "32/60DD", label: "32/60 Dias do Faturamento"},
    {value: "32DD", label: "32 Dias do Faturamento"},
    {value: "33DD", label: "33 Dias do Faturamento"},
    {value: "34DD", label: "34 Dias do Faturamento"},
    {value: "35 DD", label: "35 Dias do Faturamento"},
    {value: "35/42 DD", label: "35 e 42 Dias do Faturamento"},
    {value: "36 DD", label: "36 Dias do Faturamento"},
    {value: "37 DD", label: "37 Dias do Faturamento"},
    {value: "38DD", label: "38 Dias do Faturamento"},
    {value: "39DD", label: "39 Dias do Faturamento"},
    {value: "3DD", label: "3 Dias do Faturamento"},
    {value: "4 DD", label: "4 Dias do Faturamento"},
    {value: "4 MENSAIS", label: "4 Parcelas Mensais"},
    {value: "40DD", label: "40 dias do Faturametno"},
    {value: "41DD", label: "41 Dias do Faturamento"},
    {value: "42/56 DD", label: "42/56 Dias do Faturamento"},
    {value: "42DD", label: "42 Dias do Faturamento"},
    {value: "43DD", label: "43 Dias do Faturamento"},
    {value: "44DD", label: "44 Dias do Faturamento"},
    {value: "45/60/90", label: "45/60/90 Dias do Faturamento"},
    {value: "45DD", label: "45 Dias do Faturamento"},
    {value: "47DD", label: "47 Dias do Faturamento"},
    {value: "48DD", label: "48 Dias do Faturamento"},
    {value: "49DD", label: "49 Dias do faturamento"},
    {value: "4DD", label: "4 Dias do Faturamento"},
    {value: "4XSEMANAIS", label: "4 Parcelas Semanais e Iguais"},
    {value: "5 DD", label: "5 Dias do Faturamento"},
    {value: "5 M C/ ENT", label: "5 Parcelas Mensais c/Entrada"},
    {value: "5 MENSAIS", label: "5 Parcelas Mensais e Iguais"},
    {value: "50DD", label: "50 Dias do Faturamento"},
    {value: "52DD", label: "52 Dias do Faturamento"},
    {value: "56 DD", label: "56 Dias do Faturamento"},
    {value: "56/84/112", label: "56/84/112 Dias do Faturamento"},
    {value: "57 DD", label: "57 Dias do Faturamento"},
    {value: "5DD", label: "5 Dias do Faturamento"},
    {value: "6 DD", label: "6 Dias do Faturamento"},
    {value: "6 MENSAIS", label: "6 Parcelas Mensais"},
    {value: "62DD", label: "62 Dias do Faturamento"},
    {value: "65DD", label: "65 Dias do Faturamento"},
    {value: "68DD", label: "68 Dias do Faturamento"},
    {value: "69 DD", label: "69 Dias do Faturamento"},
    {value: "6DD", label: "6 Dias do Faturamento"},
    {value: "7 DD", label: "7 Dias do Faturamento"},
    {value: "7 MENSAIS", label: "7 Parcelas Mensais"},
    {value: "7/28/56DD", label: "7/28/56 Dias do Faturamento"},
    {value: "7/30 DD", label: "7/30 Dias do Faturamento"},
    {value: "8 DD", label: "8 Dias do Faturamento"},
    {value: "8 MENSAIS", label: "8 Parcelas Mensais e Iguais"},
    {value: "9 MENSAIS", label: "9 Parcelas Mensais - 1ª Quitada"},
    {value: "9DD", label: "9 Dias do Faturamento"},
    {value: "CHK", label: "CHK"},
    {value: "DEB AUTOM", label: "Débito Automático"},
    {value: "E/30/60/90", label: "Entrada/30/60/90 Dias do Faturamento"},
    {value: "ENT/30/60", label: "Entrada/30/60 Dias do Faturamento"},
    {value: "ENT/30DD", label: "Entrada/30 Dias do Faturamento"},
    {value: "ENT/7DD", label: "Entrada/7 Dias do Faturamento"}
];

// --- FUNÇÕES DE INTERFACE (UI) ---
function formatarCNPJ(input) {
    let value = input.value ? input.value.replace(/\D/g, '') : input.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2')
                 .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                 .replace(/\.(\d{3})(\d)/, '.$1/$2')
                 .replace(/(\d{4})(\d)/, '$1-$2');
    if (input.value !== undefined) input.value = value;
    return value;
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(button => button.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
    
    // Atualiza o título do header baseado na aba selecionada
    updateHeaderForTab(tabName);
    
    // Se for a aba "Pergunte ao Fiscal", ajusta a altura do iframe
    if (tabName === 'pergunte-fiscal') {
        setTimeout(ajustarAlturaIframe, 100);
    }
}

function updateHeaderForTab(tabName) {
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    
    switch(tabName) {
        case 'cotacao':
            headerTitle.textContent = 'Calculadora de Cotação';
            headerSubtitle.textContent = 'Construção Civil - Reforma Tributária';
            break;
        case 'consulta':
            headerTitle.textContent = 'Consulta de CNPJ';
            headerSubtitle.textContent = 'Verificação de dados empresariais';
            break;
        case 'multiplos':
            headerTitle.textContent = 'Consulta em Lote';
            headerSubtitle.textContent = 'Verificação múltipla de CNPJs';
            break;
        case 'pergunte-fiscal':
            headerTitle.textContent = 'Pergunte ao Fiscal';
            headerSubtitle.textContent = 'Assistente especializado em questões tributárias';
            break;
        default:
            headerTitle.textContent = 'Calculadora de Cotação';
            headerSubtitle.textContent = 'Construção Civil - Reforma Tributária';
            break;
    }
}

function ajustarAlturaIframe() {
    const iframe = document.querySelector('.chat-iframe');
    if (iframe) {
        iframe.style.height = '100%';
    }
}

function toggleAvisoReforma() {
    const ano = document.getElementById('ano-cenario').value;
    document.getElementById('aviso-reforma').style.display = (ano === '2033') ? 'block' : 'none';
    document.getElementById('aviso-transicao').style.display = (ano === '2027') ? 'block' : 'none';
}

function toggleDetalheServico() {
    const tipoAquisicao = document.getElementById('tipo-aquisicao').value;
    const localGroup = document.getElementById('local-servico-group');
    const detalheGroup = document.getElementById('detalhe-servico-group');
    const empreendimentoGroup = document.getElementById('empreendimento-group');
    const distribuicaoGroup = document.getElementById('distribuicao-percentual-group');
    
    // Mostra campos de serviço para ambos os tipos (Material e Serviço)
    if (tipoAquisicao.includes('Serviço') || tipoAquisicao === 'Material') {
        localGroup.style.display = 'block';
        
        // Para Material, oculta o campo Tipo de Serviço
        if (tipoAquisicao === 'Material') {
            detalheGroup.style.display = 'none';
            document.getElementById('detalhe-servico').value = '';
        } else {
            detalheGroup.style.display = 'block';
        }
    } else {
        localGroup.style.display = 'none';
        detalheGroup.style.display = 'none';
        empreendimentoGroup.style.display = 'none';
        document.getElementById('local-servico').value = '';
        document.getElementById('detalhe-servico').value = '';
        document.getElementById('empreendimento').value = '';
    }
    
    // Mostra campos de distribuição percentual para opções combinadas
    if (tipoAquisicao === 'Serviço + Material' || 
        tipoAquisicao === 'Serviço + Locação' || 
        tipoAquisicao === 'Serviço + Locação + Material') {
        distribuicaoGroup.style.display = 'block';
        atualizarCamposPercentuais(tipoAquisicao);
    } else {
        distribuicaoGroup.style.display = 'none';
    }
    
    // Atualiza os campos de serviço com base na seleção atual
    atualizarCamposServico();
}

function atualizarCamposPercentuais(tipoAquisicao) {
    const container = document.getElementById('campos-percentuais');
    const totalSpan = document.getElementById('total-percentual');
    container.innerHTML = '';
    
    // Cria campos baseados no tipo de aquisição
    if (tipoAquisicao === 'Serviço + Material') {
        container.innerHTML = `
            <div>
                <label for="percentual-servico">Serviço:</label>
                <input type="number" id="percentual-servico" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
            <div>
                <label for="percentual-material">Material:</label>
                <input type="number" id="percentual-material" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
        `;
    } else if (tipoAquisicao === 'Serviço + Locação') {
        container.innerHTML = `
            <div>
                <label for="percentual-servico">Serviço:</label>
                <input type="number" id="percentual-servico" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
            <div>
                <label for="percentual-locacao">Locação:</label>
                <input type="number" id="percentual-locacao" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
        `;
    } else if (tipoAquisicao === 'Serviço + Locação + Material') {
        container.innerHTML = `
            <div>
                <label for="percentual-servico">Serviço:</label>
                <input type="number" id="percentual-servico" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
            <div>
                <label for="percentual-locacao">Locação:</label>
                <input type="number" id="percentual-locacao" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
            <div>
                <label for="percentual-material">Material:</label>
                <input type="number" id="percentual-material" min="0" max="100" oninput="calcularTotalPercentual()">
            </div>
        `;
    }
    
    calcularTotalPercentual();
}

function calcularTotalPercentual() {
    const tipoAquisicao = document.getElementById('tipo-aquisicao').value;
    const totalSpan = document.getElementById('total-percentual');
    let total = 0;
    
    if (tipoAquisicao === 'Serviço + Material') {
        const servico = parseInt(document.getElementById('percentual-servico').value) || 0;
        const material = parseInt(document.getElementById('percentual-material').value) || 0;
        total = servico + material;
    } else if (tipoAquisicao === 'Serviço + Locação') {
        const servico = parseInt(document.getElementById('percentual-servico').value) || 0;
        const locacao = parseInt(document.getElementById('percentual-locacao').value) || 0;
        total = servico + locacao;
    } else if (tipoAquisicao === 'Serviço + Locação + Material') {
        const servico = parseInt(document.getElementById('percentual-servico').value) || 0;
        const locacao = parseInt(document.getElementById('percentual-locacao').value) || 0;
        const material = parseInt(document.getElementById('percentual-material').value) || 0;
        total = servico + locacao + material;
    }
    
    totalSpan.textContent = `Total: ${total}%`;
    totalSpan.style.color = total === 100 ? 'green' : 'red';
}

function atualizarOpcoesServico() {
    const local = document.getElementById('local-servico').value;
    const detalheGroup = document.getElementById('detalhe-servico-group');
    const selectServico = document.getElementById('detalhe-servico');
    
    selectServico.innerHTML = '<option value="">Selecione o tipo...</option>';
    if (!local) {
        detalheGroup.style.display = 'none';
        return;
    }
    
    detalheGroup.style.display = 'block';
    if (local === 'Administrativo') {
        SERVICOS_ADMINISTRATIVOS.forEach(servico => {
            selectServico.innerHTML += `<option value="${servico}">${servico}</option>`;
        });
        selectServico.innerHTML += '<option value="Serviços de Limpeza">Serviços de Limpeza</option>';
        selectServico.innerHTML += '<option value="Serviços de Segurança">Serviços de Segurança</option>';
        selectServico.innerHTML += '<option value="Outros">Outros</option>';
    } else if (local === 'Obra') {
        selectServico.innerHTML += '<option value="Serviços Técnicos/Profissionais">Serviços Técnicos/Profissionais</option>';
        selectServico.innerHTML += '<option value="Construção Civil">Construção Civil</option>';
        selectServico.innerHTML += '<option value="Locação de Equipamentos">Locação de Equipamentos</option>';
        selectServico.innerHTML += '<option value="Outros">Outros</option>';
    }
}

function atualizarCamposServico() {
    const tipoAquisicao = document.getElementById('tipo-aquisicao').value;
    const localServico = document.getElementById('local-servico').value;
    const detalheGroup = document.getElementById('detalhe-servico-group');
    const empreendimentoGroup = document.getElementById('empreendimento-group');
    
    // Para Material, não mostra o campo Tipo de Serviço
    if (tipoAquisicao === 'Material') {
        detalheGroup.style.display = 'none';
        document.getElementById('detalhe-servico').value = '';
        
        // Para Material + Obra, mostra o campo Empreendimento
        if (localServico === 'Obra') {
            empreendimentoGroup.style.display = 'block';
            atualizarOpcoesEmpreendimento();
        } else {
            empreendimentoGroup.style.display = 'none';
            document.getElementById('empreendimento').value = '';
        }
    } 
    // Para Serviço, mantém o comportamento original
    else if (tipoAquisicao.includes('Serviço')) {
        if (localServico) {
            detalheGroup.style.display = 'block';
            atualizarOpcoesServico();
            
            // Para Obra, mostra o campo Empreendimento
            if (localServico === 'Obra') {
                empreendimentoGroup.style.display = 'block';
                atualizarOpcoesEmpreendimento();
            } else {
                empreendimentoGroup.style.display = 'none';
                document.getElementById('empreendimento').value = '';
            }
        } else {
            detalheGroup.style.display = 'none';
            empreendimentoGroup.style.display = 'none';
        }
    }
}

function atualizarOpcoesEmpreendimento() {
    const local = document.getElementById('local-servico').value;
    const tipoAquisicao = document.getElementById('tipo-aquisicao').value;
    const empreendimentoGroup = document.getElementById('empreendimento-group');
    const selectEmpreendimento = document.getElementById('empreendimento');
    
    selectEmpreendimento.innerHTML = '<option value="">Selecione o empreendimento...</option>';
    
    // Mostra campo de empreendimento apenas para Obra, tanto para Material quanto para Serviço
    if (local !== 'Obra' || (!tipoAquisicao.includes('Serviço') && tipoAquisicao !== 'Material')) {
        empreendimentoGroup.style.display = 'none';
        return;
    }
    
    empreendimentoGroup.style.display = 'block';
    
    // Agrupa empreendimentos por regional para organizar no select
    const regionais = [...new Set(EMPREENDIMENTOS.map(e => e.regional))];
    
    regionais.forEach(regional => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = regional;
        
        const empreendimentosRegional = EMPREENDIMENTOS.filter(e => e.regional === regional);
        empreendimentosRegional.forEach(emp => {
            const option = document.createElement('option');
            option.value = emp.nome;
            option.textContent = `${emp.nome} (${emp.empresa}) - RET: ${emp.ret ? 'Sim' : 'Não'}`;
            option.dataset.ret = emp.ret;
            optgroup.appendChild(option);
        });
        
        selectEmpreendimento.appendChild(optgroup);
    });
}

function carregarPrazosPagamento() {
    const select = document.getElementById('prazo-pagamento');
    select.innerHTML = '<option value="">Selecione o prazo...</option>';
    
    PRAZOS_PAGAMENTO.forEach(prazo => {
        const option = document.createElement('option');
        option.value = prazo.value;
        option.textContent = prazo.label;
        select.appendChild(option);
    });
}