import React, { useState } from 'react';

// Sub-componente para cada seção, agora com a lógica da seta
const FilterSection = ({ title, items, isBold = false, isOpen, onToggle }) => (
  <div className="mb-4">
    <h3 
      className="font-bold mb-2 text-gray-800 cursor-pointer flex items-center"
      onClick={onToggle}
    >
      {/* ===== A LÓGICA DA SETINHA ESTÁ AQUI =====
        - Se a seção estiver aberta (isOpen for true), o ícone será 'fa-caret-down' (▼).
        - Se estiver fechada (isOpen for false), o ícone será 'fa-caret-right' (▶).
      */}
      <i className={`fas ${isOpen ? 'fa-caret-down' : 'fa-caret-right'} mr-2 text-gray-500 w-3 transition-transform duration-200`}></i>
      {title}
    </h3>
    
    {/* A lista só aparece se a seção estiver aberta */}
    {isOpen && (
      <ul className="pl-6 text-sm text-gray-600 list-disc list-inside">
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
  // Estado para controlar quais seções estão abertas
  const [openSections, setOpenSections] = useState({
    advanced: true,
    tryouts: true,
    categories: true,
    mainNews: true,
  });

  // Função para alternar o estado de uma seção
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
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
      <div className="flex items-center gap-2 mb-4 font-semibold">
        <i className="fas fa-caret-right text-purple-600"></i>
        <span>Passe a Bola</span>
      </div>

      <h2 className="text-xl font-extrabold mb-4 flex items-center gap-3 border-b pb-2">
        <i className="fas fa-filter"></i>
        Filtros de Pesquisa
      </h2>

      {/* Passando o estado e a função para cada seção de filtro */}
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
  );
};