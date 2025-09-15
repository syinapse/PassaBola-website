// src/components/CadastroClube.jsx
import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Header1 } from '../components/Header1';

const CadastroClube = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Dados da etapa 1
    clubName: '',
    cnpj: '',
    address: '',
    presidentName: '',
    cpf: '',
    // Dados da etapa 2
    address2: '',
    cep2: '',
    address3: '',
    cep3: '',
    // Dados da etapa 3
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Dados da etapa 4
    displayName: '',
    description: '',
    clubLogo: null,
    acceptTerms: false,
  });

  const [passwordValidation, setPasswordValidation] = useState({
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  useEffect(() => {
    const { password } = formData;
    setPasswordValidation({
      hasUpperCase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, clubLogo: file }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 3) {
      if (formData.password !== formData.confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }
      if (!passwordValidation.hasUpperCase || !passwordValidation.hasNumber || !passwordValidation.hasSpecialChar) {
        alert('A senha não atende a todos os requisitos.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert('Você deve aceitar os Termos de Uso e a Política de Privacidade para continuar.');
      return;
    }
    console.log('Dados do formulário finalizados:', formData);
    alert('Cadastro de clube concluído!');
  };

  const ValidationItem = ({ isValid, text }) => (
    <div className="flex items-center gap-2">
      {isValid ? (
        <FaCheckCircle className="text-green-500" />
      ) : (
        <FaTimesCircle className="text-red-500" />
      )}
      <span className="text-sm">{text}</span>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <form onSubmit={handleNext}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">Nome do Clube *</label>
                <input type="text" name="clubName" value={formData.clubName} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">CNPJ *</label>
                <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="__.___.___/____-__" />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">Logradouro *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">CPF *</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="___.___.___-__" />
              </div>
            </div>
            <div className="flex justify-end mt-12">
              <button type="submit" className="bg-primary text-white py-3 px-12 rounded-lg font-bold hover:bg-purple-800 transition duration-300">
                Avançar
              </button>
            </div>
          </form>
        );

      case 2:
        return (
          <form onSubmit={handleNext}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">Endereço *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">CEP *</label>
                <input type="text" name="cep" value={formData.cep} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="_____-___" />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">Endereço 2</label>
                <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">CEP 2</label>
                <input type="text" name="cep2" value={formData.cep2} onChange={handleChange} className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="_____-___" />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">Endereço 3</label>
                <input type="text" name="address3" value={formData.address3} onChange={handleChange} className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
              </div>
              <div className="flex flex-col">
                <label className="text-text font-semibold mb-2">CEP 3</label>
                <input type="text" name="cep3" value={formData.cep3} onChange={handleChange} className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="_____-___" />
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <button type="button" onClick={handleBack} className="border-2 border-primary text-primary py-3 px-12 rounded-lg font-bold cursor-pointer transition duration-300">
                Voltar
              </button>
              <button type="submit" className="bg-primary text-white py-3 px-12 rounded-lg font-bold cursor-pointer transition duration-300">
                Avançar
              </button>
            </div>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleNext}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col">
                  <label className="text-text font-semibold mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="email@exemplo.com" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-text font-semibold mb-2">Telefone *</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="(__) _ ____-____" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col">
                  <label className="text-text font-semibold mb-2">Senha *</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-text font-semibold mb-2">Verificar Senha *</label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 mt-2">
                <ValidationItem isValid={passwordValidation.hasUpperCase} text="1x Letra maiúscula" />
                <ValidationItem isValid={passwordValidation.hasNumber} text="1x Número Inteiro" />
                <ValidationItem isValid={passwordValidation.hasSpecialChar} text="1x Caractere especial" />
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <button type="button" onClick={handleBack} className="border-2 border-primary text-primary py-3 px-12 rounded-lg cursor-pointer font-bold transition duration-300">
                Voltar
              </button>
              <button type="submit" className="bg-primary text-white py-3 px-12 rounded-lg font-bold transition duration-300 cursor-pointer">
                Avançar
              </button>
            </div>
          </form>
        );

      case 4:
        return (
          <form onSubmit={handleFinish}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col">
                  <label className="text-text font-semibold mb-2">Nome de exibição do clube</label>
                  <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
                </div>
                <div className="flex flex-col">
                  <label className="text-text font-semibold mb-2">Descrição</label>
                  <input type="text" name="description" value={formData.description} onChange={handleChange} className="border-2 border-secondary-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Digite aqui..." />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-37 h-37 bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-primary">
                  {formData.clubLogo ? (
                    <img src={URL.createObjectURL(formData.clubLogo)} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.593 11.201 5.378 10 8 10s4.407 1.201 5.468 2.37A7 7 0 0 0 8 1z" /></svg>
                  )}
                </div>
                <label htmlFor="club-logo-upload" className="bg-primary text-white text-sm py-2 px-4 rounded-lg cursor-pointer hover:bg-purple-800 transition duration-300">
                  Adicionar Imagem
                </label>
                <input id="club-logo-upload" type="file" name="clubLogo" onChange={handleImageChange} className="hidden" accept="image/*" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required className="form-checkbox text-purple-700 rounded" />
                Ao me cadastrar, concordo com os <a href="#" className="text-purple-700 font-medium hover:underline">Termos de Uso</a> e com a <a href="#" className="text-purple-700 font-medium hover:underline">Política de Privacidade</a>
              </label>
            </div>
            <div className="flex justify-between mt-12">
              <button type="button" onClick={handleBack} className="border-2 border-primary text-primary py-3 px-12 rounded-lg font-bold cursor-pointer transition duration-300">
                Voltar
              </button>
              <button type="submit" className="bg-primary text-white py-3 px-12 rounded-lg font-bold cursor-pointer transition duration-300">
                Finalizar
              </button>
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-purple-100 min-h-screen">
      <Header1 />
      <div className="flex justify-center p-8 md:p-12">
        <div className="bg-background-1 p-8 rounded-2xl w-full max-w-2xl">
          <div className="flex justify-center mb-8">
            <div className={`w-13 h-13 rounded-full text-3xl flex items-center justify-center font-semibold ${currentStep === 1 ? 'bg-secondary-2 text-white' : 'border-2 border-text text-text font-bold'}`}>1</div>
            <div className={`w-13 h-13 rounded-full text-3xl flex items-center justify-center ml-4 ${currentStep === 2 ? 'bg-secondary-2 text-white' : 'border-2 border-text text-text font-bold'}`}>2</div>
            <div className={`w-13 h-13 rounded-full text-3xl flex items-center justify-center ml-4 ${currentStep === 3 ? 'bg-secondary-2 text-white' : 'border-2 border-text text-text font-bold'}`}>3</div>
            <div className={`w-13 h-13 rounded-full text-3xl flex items-center justify-center ml-4 ${currentStep === 4 ? 'bg-secondary-2 text-white' : 'border-2 border-text text-text font-bold'}`}>4</div>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Cadastro de <span className="text-purple-700">Clube</span>
          </h2>
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default CadastroClube;