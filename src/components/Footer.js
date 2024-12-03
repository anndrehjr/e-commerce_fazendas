import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">NAVEGUE</h3>
            <ul className="space-y-2">
              <li><Link to="/quem-somos" className="hover:text-yellow-200">Quem Somos</Link></li>
              <li><Link to="/servicos" className="hover:text-yellow-200">Serviços</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">ENDEREÇO</h3>
            <p>Avenida Um, 100</p>
            <p>Parque  - São Paulo</p>
            <p>Pelotas - RS</p>
            <p>CEP: 96075-158</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">TELEFONES</h3>
            <p>Comercial:</p>
            <p>(99) 9999-9999</p>
            <p>WhatsApp:</p>
            <p>(99) 99965-
              99999
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">E-MAIL</h3>
            <p>contato@xxxxx.xxx.br</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>© 2024 © Todos os direitos reservados – </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

