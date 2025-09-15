import React, { useState } from 'react'; // 1. Importe o useState

// O sub-componente FilterSection continua o mesmo
const FilterSection = ({ title, items, isBold = false, isOpen, onToggle }) => (
  <div className="mb-4">
    <h3 
      className="font-bold mb-2 text-gray-800 cursor-pointer flex items-center text-lg"
      onClick={onToggle}
    >
      <i className={`fas ${isOpen ? 'fa-caret-down' : 'fa-caret-right'} mr-2 text-gray-500 w-3 transition-transform duration-200`}></i>
      {title}
    </h3>
    
    {isOpen && (
      <ul className="pl-6 text-base text-gray-600 list-disc list-inside"> 
        {items.map((item, index) => (
          <li key={index} className={`mb-1 ${isBold ? 'font-semibold' : ''}`}>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export const FilterSidebar = () => {
  // 2. Adicionamos um estado para controlar a visibilidade da sidebar inteira em mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Função para abrir/fechar a sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // O estado e a função para os filtros internos continuam os mesmos
  const [openSections, setOpenSections] = useState({
    advanced: true,
    tryouts: true,
    categories: true,
    mainNews: true,
  });

  const handleToggle = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Dados dos filtros
  const advancedFilters = ['Competições de Base', 'Libertadores', 'Champions League', 'Premier League', 'La Liga', 'Campeonato Brasileiro'];
  const tryoutFilters = ['Mais populares', 'Mais recentes', 'Para encerrar', 'Estado', 'Cidade'];
  const categoryFilters = ['SUB-15', 'SUB-17', 'SUB-20', 'PROFISSIONAL'];
  const mainNewsFilters = ['Resultados da rodada', 'Mercado de transferências', 'Seleção Brasileira', 'Anúncios Recentes'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 border border-purple-200">

      {/* 3. O título principal agora controla a visibilidade da sidebar em telas pequenas */}
      <h2 
        className="text-2xl font-extrabold mb-4 flex items-center justify-between gap-3 border-b pb-2 cursor-pointer lg:cursor-default"
        onClick={toggleSidebar}
      >
        <div className="flex items-center gap-3">
          <i className="fas fa-filter"></i>
          <span>Filtros de Pesquisa</span>
        </div>
        {/* Ícone de seta que só aparece em telas pequenas */}
        <i className={`fas ${isSidebarOpen ? 'fa-chevron-up' : 'fa-chevron-down'} lg:hidden`}></i>
      </h2>

      {/* 4. O conteúdo dos filtros é envolvido por um div que controla a visibilidade */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <FilterSection 
          title="Filtro de Notícia Avançado" 
          items={advancedFilters} 
          isOpen={openSections.advanced}
          onToggle={() => handleToggle('advanced')}
        />
        <FilterSection 
          title="Busque por Peneiras" 
          items={tryoutFilters} 
          isBold={true}
          isOpen={openSections.tryouts}
          onToggle={() => handleToggle('tryouts')}
        />
        <FilterSection 
          title="Categorias de Base" 
          items={categoryFilters} 
          isOpen={openSections.categories}
          onToggle={() => handleToggle('categories')}
        />
        <FilterSection 
          title="Principais Notícias" 
          items={mainNewsFilters} 
          isOpen={openSections.mainNews}
          onToggle={() => handleToggle('mainNews')}
        />
      </div>
    </div>
  );
};