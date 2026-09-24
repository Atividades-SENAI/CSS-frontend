const boxExamples = [
            // --- CATEGORIA: CONTENT (1-5) ---
            {
                id: 1,
                category: 'content',
                badge: 'Content Box (Padrão)',
                title: '01. Box-Sizing: Content-Box',
                description: 'No modo padrão do navegador, larguras e alturas aplicam-se apenas ao conteúdo. Padding e Border SÃO SOMADOS por fora, aumentando o tamanho total final do elemento na tela.',
                css: `.box {\n  box-sizing: content-box;\n  width: 200px;\n  padding: 20px;\n  border: 8px solid #eab308;\n  /* Tamanho Total Final: 256px */\n}`,
                demoClass: 'demo-1',
                contentLabel: 'Width: 200px',
                paddingLabel: '20px',
                borderLabel: '8px',
                marginLabel: '0px',
                tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
            },
            {
                id: 2,
                category: 'content',
                badge: 'Border Box (Recomendado)',
                title: '02. Box-Sizing: Border-Box',
                description: 'A propriedade border-box faz com que o padding e a borda fiquem DENTRO da largura total especificada (width). Evita quebras inesperadas no layout responsivo.',
                css: `.box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 8px solid #eab308;\n  /* Tamanho Total Final mantido: 200px */\n}`,
                demoClass: 'demo-2',
                contentLabel: 'Width Ajustado',
                paddingLabel: '20px',
                borderLabel: '8px',
                marginLabel: '0px',
                tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
            },
            {
                id: 3,
                category: 'content',
                badge: 'Min/Max Height',
                title: '03. Controle de Altura Mínima',
                description: 'Com min-height, o conteúdo garante um tamanho mínimo vertical, mas pode crescer livremente conforme mais conteúdo de texto é inserido sem cortar informações.',
                css: `.box {\n  min-height: 120px;\n  height: 60px; /* Sobrescrito pelo min-height */\n  padding: 12px;\n  background-color: rgba(99, 102, 241, 0.2);\n}`,
                demoClass: 'demo-3',
                contentLabel: 'Conteúdo Flexível',
                paddingLabel: '12px',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
            },
            {
                id: 4,
                category: 'content',
                badge: 'Overflow Content',
                title: '04. Estouro de Conteúdo (Overflow)',
                description: 'Quando o conteúdo ultrapassa os limites da área definida, a propriedade overflow cria barras de rolagem (auto/scroll) ou esconde o excesso (hidden).',
                css: `.box {\n  width: 100%;\n  height: 80px;\n  overflow: auto; /* Adiciona scroll interno */\n  padding: 10px;\n}`,
                demoClass: 'demo-4',
                contentLabel: 'Texto com Scroll',
                paddingLabel: '10px',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
                extraHtml: '<p class="text-xs text-gray-300">Este é um texto longo demonstrando o estouro de área de conteúdo dentro da caixa. Quando a altura limite é atingida, a propriedade overflow: auto ativa o scroll interno automaticamente.</p>'
            },
            {
                id: 5,
                category: 'content',
                badge: 'Aspect Ratio',
                title: '05. Proporção de Conteúdo (Aspect-Ratio)',
                description: 'Aspect-ratio define a proporção entre largura e altura da área de conteúdo (ex: 16/9, 1/1) sem a necessidade de hacks antigos de padding.',
                css: `.box {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}`,
                demoClass: 'demo-5',
                contentLabel: 'Tela 16:9',
                paddingLabel: '0px',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
            },

            // --- CATEGORIA: PADDING (6-10) ---
            {
                id: 6,
                category: 'padding',
                badge: 'Padding Assimétrico',
                title: '06. Padding Individual por Lado',
                description: 'A propriedade padding pode receber 4 valores em ordem horária (top, right, bottom, left) criando espaços internos independentes para cada direção.',
                css: `.box {\n  /* Top Right Bottom Left */\n  padding: 8px 32px 16px 4px;\n  border: 1px dashed #10b981;\n}`,
                demoClass: 'demo-6',
                contentLabel: 'Conteúdo Excéntrico',
                paddingLabel: 'T:8 R:32 B:16 L:4',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            },
            {
                id: 7,
                category: 'padding',
                badge: 'Logical Properties',
                title: '07. Padding Logical (Inline & Block)',
                description: 'Propriedades lógicas modernas como padding-inline (horizontal) e padding-block (vertical) adaptam-se dinamicamente à direção de leitura do idioma (LTR / RTL).',
                css: `.box {\n  padding-inline: 40px; /* Esquerda e Direita */\n  padding-block: 10px;  /* Topo e Base */\n}`,
                demoClass: 'demo-7',
                contentLabel: 'Eixo Lógico',
                paddingLabel: 'Inline:40px Block:10px',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            },
            {
                id: 8,
                category: 'padding',
                badge: 'Fluid Padding',
                title: '08. Padding Responsivo Fluído (Clamp)',
                description: 'Utilizando a função CSS clamp(), o padding se ajusta suavemente de acordo com a largura da tela do usuário entre um valor mínimo, ideal e máximo.',
                css: `.box {\n  /* min: 8px, ideal: 5vw, max: 36px */\n  padding: clamp(8px, 5vw, 36px);\n}`,
                demoClass: 'demo-8',
                contentLabel: 'Fluidez Responsiva',
                paddingLabel: 'clamp(8px, 5vw, 36px)',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            },
            {
                id: 9,
                category: 'padding',
                badge: 'Padding % Trick',
                title: '09. Padding Percentual Relativo',
                description: 'Curiosidade do CSS: A porcentagem em padding (mesmo vertical) é SEMPRE calculada com base na LARGURA do elemento pai, permitindo manter proporções.',
                css: `.box {\n  width: 100%;\n  padding-bottom: 30%; /* Calculado via largura */\n  height: 0;\n}`,
                demoClass: 'demo-9',
                contentLabel: 'Proporção por Padding',
                paddingLabel: 'Bottom 30%',
                borderLabel: '1px',
                marginLabel: '0px',
                tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            },
            {
                id: 10,
                category: 'padding',
                badge: 'Zero Padding',
                title: '10. Padding Zero e Colapso Interno',
                description: 'Ao zerar o padding, o conteúdo cola exatamente na borda do elemento. Ideal para imagens, cards com capas totalmente preenchidas e componentes limpos.',
                css: `.box {\n  padding: 0px;\n  border: 2px solid #10b981;\n}`,
                demoClass: 'demo-10',
                contentLabel: 'Conteúdo Sem Folga',
                paddingLabel: '0px',
                borderLabel: '2px',
                marginLabel: '0px',
                tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            },

            // --- CATEGORIA: BORDER (11-15) ---
            {
                id: 11,
                category: 'border',
                badge: 'Border Styles',
                title: '11. Borda Dupla (Border Style Double)',
                description: 'O CSS oferece diversos estilos nativos de borda como solid, dashed, dotted e double (que desenha duas linhas paralelas se a largura for suficiente).',
                css: `.box {\n  border-style: double;\n  border-width: 8px;\n  border-color: #eab308;\n}`,
                demoClass: 'demo-11',
                contentLabel: 'Borda Dupla',
                paddingLabel: '12px',
                borderLabel: '8px Double',
                marginLabel: '0px',
                tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
            },
            {
                id: 12,
                category: 'border',
                badge: 'Dashed Border',
                title: '12. Borda Tracejada e Colorida',
                description: 'Estilo de borda tracejada util para indicar zonas de drop de arquivos, caixas de cupons ou destacar áreas de atenção dinâmica.',
                css: `.box {\n  border-style: dashed;\n  border-width: 4px;\n  border-color: #ec4899;\n}`,
                demoClass: 'demo-12',
                contentLabel: 'Tracejado',
                paddingLabel: '12px',
                borderLabel: '4px Dashed',
                marginLabel: '0px',
                tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
            },
            {
                id: 13,
                category: 'border',
                badge: 'Organic Radius',
                title: '13. Arredondamento Orgânico (Blob)',
                description: 'Combinando 8 valores em border-radius com barras (/), é possível criar formatos orgânicos e assimétricos semelhantes a gotas ou bolhas.',
                css: `.box {\n  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;\n  border: 4px solid #eab308;\n}`,
                demoClass: 'demo-13',
                contentLabel: 'Formato Blob',
                paddingLabel: '16px',
                borderLabel: '4px Organic',
                marginLabel: '0px',
                tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
            },
            {
                id: 14,
                category: 'border',
                badge: 'Gradient Border',
                title: '14. Borda com Degradê (Border Image)',
                description: 'Através da propriedade border-image e linear-gradient, é possível criar molduras modernas com gradientes coloridos vibrantes.',
                css: `.box {\n  border-style: solid;\n  border-width: 6px;\n  border-image: linear-gradient(to right, #f97316, #ec4899, #6366f1) 1;\n}`,
                demoClass: 'demo-14',
                contentLabel: 'Gradiente',
                paddingLabel: '12px',
                borderLabel: '6px Gradient',
                marginLabel: '0px',
                tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
            },
            {
                id: 15,
                category: 'border',
                badge: 'Multi-Borders',
                title: '15. Bordas Diferentes por Lado',
                description: 'Cada um dos 4 lados do elemento pode ter seu próprio estilo, largura e cor independentes (border-top, border-right, etc.).',
                css: `.box {\n  border-top: 6px solid #ef4444;\n  border-right: 2px dotted #22c55e;\n  border-bottom: 8px double #3b82f6;\n  border-left: 4px dashed #eab308;\n}`,
                demoClass: 'demo-15',
                contentLabel: 'Mistura de Bordas',
                paddingLabel: '12px',
                borderLabel: '4 Tipos',
                marginLabel: '0px',
                tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
            },

            // --- CATEGORIA: MARGIN (16-20) ---
            {
                id: 16,
                category: 'margin',
                badge: 'Margin Auto',
                title: '16. Centralização com Margin Auto',
                description: 'Quando um elemento em bloco possui uma largura definida (width/max-width), aplicar margin-left: auto e margin-right: auto o centraliza perfeitamente no container.',
                css: `.box {\n  width: 160px;\n  margin-left: auto;\n  margin-right: auto; /* Ou margin: 0 auto; */\n}`,
                demoClass: 'demo-16',
                contentLabel: 'Caixa Centralizada',
                paddingLabel: '8px',
                borderLabel: '1px',
                marginLabel: 'Auto (Centralizado)',
                tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
            },
            {
                id: 17,
                category: 'margin',
                badge: 'Negative Margin',
                title: '17. Margem Negativa (Sobreposição)',
                description: 'Margens negativas puxam o elemento na direção oposta, permitindo criar efeitos de sobreposição (overlap) visual de cards e elementos de destaque.',
                css: `.box {\n  margin-top: -20px;\n  margin-left: -10px;\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);\n}`,
                demoClass: 'demo-17',
                contentLabel: 'Sobreposição',
                paddingLabel: '12px',
                borderLabel: '1px',
                marginLabel: 'Top: -20px',
                tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
            },
            {
                id: 18,
                category: 'margin',
                badge: 'Margin Block/Inline',
                title: '18. Margens Lógicas (Block & Inline)',
                description: 'Propriedades lógicas de margem simplificam o espaçamento externo. margin-block define topo/base e margin-inline define esquerda/direita.',
                css: `.box {\n  margin-block: 25px;\n  margin-inline: 10px;\n}`,
                demoClass: 'demo-18',
                contentLabel: 'Margem Lógica',
                paddingLabel: '8px',
                borderLabel: '1px',
                marginLabel: 'B:25px I:10px',
                tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
            },
            {
                id: 19,
                category: 'margin',
                badge: 'Margin Collapse',
                title: '19. Colapso de Margens Verticais',
                description: 'Quando dois elementos com margens verticais se encostam, as margens NÃO se somam; elas colapsam e prevalece apenas a maior margem entre elas.',
                css: `.parent {\n  /* As margens verticais dos filhos colapsam juntas */\n}\n.child {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}`,
                demoClass: 'demo-19',
                contentLabel: 'Colapso de Margem',
                paddingLabel: '8px',
                borderLabel: '1px',
                marginLabel: '15px (Colapsado)',
                tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
            },
            {
                id: 20,
                category: 'margin',
                badge: 'Margin Push',
                title: '20. Alinhamento Unilateral (Margin-Left: Auto)',
                description: 'Em um container flexível ou bloco simples, aplicar margin-left: auto "empurra" o elemento totalmente para a extremidade direita da tela.',
                css: `.box {\n  width: 160px;\n  margin-left: auto; /* Empurra para a direita */\n}`,
                demoClass: 'demo-20',
                contentLabel: 'Empurrado p/ Direita',
                paddingLabel: '8px',
                borderLabel: '1px',
                marginLabel: 'Left: Auto',
                tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
            }
        ];

        let currentFilter = 'all';
        let currentActiveItem = null;

        function renderCards() {
            const container = document.getElementById('cards-grid');
            container.innerHTML = '';

            const filteredData = currentFilter === 'all' 
                ? boxExamples 
                : boxExamples.filter(item => item.category === currentFilter);

            filteredData.forEach(item => {
                const cardHTML = `
                    <div class="box-card glass-panel rounded-2xl overflow-hidden border border-gray-800 flex flex-col justify-between cursor-pointer" onclick="openModal(${item.id})">
                        <!-- Header do Card -->
                        <div class="p-4 border-b border-gray-800/80 flex items-center justify-between">
                            <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full border ${item.tagColor}">
                                ${item.badge}
                            </span>
                            <span class="text-xs font-mono text-gray-500">ID: #${item.id < 10 ? '0' + item.id : item.id}</span>
                        </div>

                        <!-- Visualizador Interativo de Camadas W3C no Card -->
                        <div class="p-6 bg-gray-950/60 flex items-center justify-center min-h-[200px]">
                            <!-- Borda / Camada Exterior Margem -->
                            <div class="bm-layer-margin p-3 rounded-xl w-full flex flex-col items-center justify-center relative group">
                                <span class="absolute top-1 left-2 text-[10px] font-mono font-semibold text-orange-400 opacity-70">MARGIN</span>
                                
                                <!-- Borda -->
                                <div class="bm-layer-border p-3 rounded-lg w-full flex flex-col items-center justify-center relative">
                                    <span class="absolute top-1 left-2 text-[10px] font-mono font-semibold text-yellow-400 opacity-70">BORDER</span>
                                    
                                    <!-- Padding -->
                                    <div class="bm-layer-padding p-3 rounded-md w-full flex flex-col items-center justify-center relative">
                                        <span class="absolute top-1 left-2 text-[10px] font-mono font-semibold text-emerald-400 opacity-70">PADDING</span>
                                        
                                        <!-- Content Box Elemento Principal -->
                                        <div class="bm-layer-content ${item.demoClass} rounded p-2 text-center relative text-xs font-semibold text-indigo-200 shadow-sm flex items-center justify-center min-h-[50px]">
                                            <span class="z-10">${item.contentLabel}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Footer com Título e Snippet de Código -->
                        <div class="p-4 border-t border-gray-800 bg-gray-900/40">
                            <h3 class="text-base font-bold text-gray-100 mb-2">${item.title}</h3>
                            <pre class="bg-gray-950 p-2.5 rounded-lg text-[11px] font-mono text-indigo-300/90 overflow-x-auto border border-gray-800/60">${item.css.split('\n')[0]}\n${item.css.split('\n')[1] || ''}</pre>
                            <div class="mt-3 flex justify-end items-center text-xs text-indigo-400 font-medium group-hover:text-indigo-300">
                                Inspecionar no Detalhe <i class="fa-solid fa-arrow-right ml-1.5 transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', cardHTML);
            });
        }

        function filterCategory(category) {
            currentFilter = category;
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('bg-indigo-600', 'text-white');
                btn.classList.add('bg-gray-800', 'text-gray-300');
            });

            const activeBtn = document.getElementById(`btn-${category}`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-gray-800', 'text-gray-300');
                activeBtn.classList.add('bg-indigo-600', 'text-white');
            }

            renderCards();
        }

        function openModal(id) {
            const item = boxExamples.find(e => e.id === id);
            if (!item) return;

            currentActiveItem = item;

            document.getElementById('modal-badge').innerText = `#${item.id < 10 ? '0' + item.id : item.id} • ${item.badge}`;
            document.getElementById('modal-title').innerText = item.title;
            document.getElementById('modal-desc').innerText = item.description;
            document.getElementById('modal-css').innerText = item.css;

            const diagramContainer = document.getElementById('modal-diagram');
            diagramContainer.innerHTML = `
                <div class="bm-layer-margin p-4 rounded-xl w-full text-center relative">
                    <div class="flex justify-between items-center text-xs font-mono text-orange-400 font-bold mb-1">
                        <span>MARGIN</span>
                        <span>${item.marginLabel}</span>
                    </div>

                    <div class="bm-layer-border p-4 rounded-lg w-full text-center relative">
                        <div class="flex justify-between items-center text-xs font-mono text-yellow-400 font-bold mb-1">
                            <span>BORDER</span>
                            <span>${item.borderLabel}</span>
                        </div>

                        <div class="bm-layer-padding p-4 rounded-md w-full text-center relative">
                            <div class="flex justify-between items-center text-xs font-mono text-emerald-400 font-bold mb-1">
                                <span>PADDING</span>
                                <span>${item.paddingLabel}</span>
                            </div>

                            <div class="bm-layer-content p-4 rounded text-center relative font-bold text-sm text-indigo-100 flex flex-col items-center justify-center min-h-[70px]">
                                <span class="text-xs font-mono text-indigo-300 uppercase mb-1">CONTENT</span>
                                <span>${item.contentLabel}</span>
                                ${item.extraHtml ? `<div class="mt-2 text-left">${item.extraHtml}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('modal-inspector').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modal-inspector').classList.add('hidden');
        }

        function copyCSSCode() {
            if (!currentActiveItem) return;
            navigator.clipboard.writeText(currentActiveItem.css).then(() => {
                alert('Código CSS copiado para a área de transferência!');
            }).catch(() => {
                // Fallback para iframe sandbox
                const textArea = document.createElement("textarea");
                textArea.value = currentActiveItem.css;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Código CSS copiado com sucesso!');
            });
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
        renderCards();