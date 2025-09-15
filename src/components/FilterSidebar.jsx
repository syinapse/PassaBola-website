import React from 'react';
import profileImage from '../assets/logos/Avatar.png'; // Substitua pelo caminho do seu avatar

const FilterSection = ({ title, items, isBold }) => (
  <div className="mb-4">
    <h3 className="font-bold mb-2 text-text">
      <i className="fas fa-caret-down mr-2"></i>{title}
    </h3>
    <ul className="pl-6 text-sm">
      {items.map((item, index) => (
        <li key={index} className={`mb-1 ${isBold ? 'font-semibold' : ''}`}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const FilterSidebar = () => {
  const advancedFilters = ['Competições de Base', 'Libertadores', 'Champions League', 'Premier League', 'La Liga', 'Campeonato Brasileiro'];
  const tryoutFilters = ['Mais populares', 'Mais recentes', 'Para encerrar'];
  const stateFilters = ['Estado', 'Cidade'];
  const categoryFilters = ['SUB-15', 'SUB-17', 'SUB-20', 'PROFISSIONAL'];
  const mainNewsFilters = ['Resultados da rodada', 'Mercado de transferências', 'Seleção Brasileira', 'Anúncios Recentes'];

  return (
    <aside className="w-full bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <img src={profileImage} alt="Perfil" className="w-16 h-16 rounded-full object-cover" />
        <h2 className="text-xl font-bold text-text">Passe a Bola</h2>
      </div>

      <h2 className="text-lg font-extrabold mb-4 text-text border-b pb-2">Filtros de Pesquisa</h2>

      <FilterSection title="Filtro de Notícia Avançado" items={advancedFilters} />
      <FilterSection title="Busque por Peneiras" items={tryoutFilters} isBold={true} />
      <ul className="pl-12 text-sm mb-4">
        {stateFilters.map((item, index) => (
          <li key={index} className="mb-1 font-semibold">{item}</li>
        ))}
      </ul>
      <FilterSection title="Categorias de Base" items={categoryFilters} />
      <FilterSection title="Principais Notícias" items={mainNewsFilters} />
    </aside>
  );
};