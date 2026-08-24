import { useState } from "react";
function PoliticaDePrivacidade() {
     const [showModal, setShowModal] = useState(false);
      const termos = `<p>1. Objetivo Estabelecer diretrizes e demonstrar o compromisso
                  do Sistema Fiep com a segurança e privacidade de dados
                  coletados dos seus clientes, parceiros de negócio e
                  colaboradores.</p><p> 2. Abrangência A presente política é válida
                  para todo o Sistema Fiep (composto pelas entidades FIEP, SESI
                  – PR, SENAI – PR e IEL – PR), assim como seus sites, portais e
                  outras plataformas digitais que coletam dados.</p><p> 3. Denifinições
                  LGPD: Lei nº 13.709/2018, Lei Geral de Proteção de Dados. A
                  lei tem por objetivo garantir a privacidade e controle dos
                  dados pessoais pelas empresas controladoras. DPO: Data
                  Protection Officer. É o “encarregado de dados” da organização,
                  atuando como referência nos assuntos pertinentes a privacidade
                  e a Lei Geral de Proteção de Dados. Dados Pessoais: Qualquer
                  dado ou informação que identifique uma pessoa. Dados Pessoais
                  Sensíveis: Qualquer dado ou informação que possa discriminar
                  ou criar constrangimento a uma pessoa. Controlador:
                  Organização que coleta os dados pessoais. Operador:
                  Organização que processa ou trata os dados coletados pelo
                  controlador. IP (Internet Protocol): Conjunto de números que
                  tem como objetivo identificar dispositivos de usuários na
                  internet. Cookies: Arquivos com a finalidade de identificar o
                  dispositivo e obter dados de acesso, como páginas navegadas ou
                  links clicados, permitindo desta forma personalizar a
                  navegação dos usuários, de acordo com o seu perfil.</p><p> 4.
                  Diretrizes</p><p>4.1: A Privacidade de Dados é parte do “Programa de
                  Privacidade” do Sistema Fiep, pautado na conformidade com a
                  Lei 13.709/2018 – Lei Geral de Proteção de Dados. Quando você
                  aceita este documento, confere sua livre e expressa
                  concordância com as diretrizes aqui estabelecidas.</p><p> 4.2: Os
                  colaboradores e parceiros de negócio devem respeitar as
                  diretrizes da privacidade de dados, protegendo dados pessoais
                  de todos os titulares de dados que se relacionam com a
                  organização, sejam eles: colaboradores, intermitentes,
                  terceiros, temporários, prestadores de serviços, pacientes,
                  alunos, responsáveis por alunos, pacientes, membros de
                  sindicatos ou qualquer outra pessoa física que apresente os
                  seus dados para o Sistema Fiep.</p><p> 4.3: Toda a coleta,
                  processamento, geração, armazenamento e exclusão de dados
                  pessoais devem ser realizados dentro das especificações
                  presentes na Lei Geral de Proteção de Dados e dos documentos
                  normativos da organização.</p><p> 4.3.1: Atender requisições ou
                colaborar com autoridades de controle/judiciais.</p><p> 4.3.2:
                  Promover serviços do Sistema Fiep e de seus parceiros.</p><p> 4.3.3:
                  Informar de novidades, conteúdos e demais informações
                  relevantes para a manutenção do relacionamento entre titular
                  dos dados e Instituição.</p><p> 4.3.4: Manter atualizados os
                  cadastros de dados de contato como celular, telefone fixo,
                  e-mail redes sociais ou por outros meios de comunicação
                  existentes.</p><p> 4.3.5: Efetuar análises estatísticas, estudos,
                  pesquisas e levantamentos pertinentes às atividades do Sistema
                  Fiep mediante o comportamento dos usuários.</p><p> 4.3.6: Realizar
                  campanhas e informações de marketing.</p><p> 4.4: Eventuais dúvidas
                  ou identificação de irregularidades com o tratamento de dados
                  pessoais devem ser direcionadas ao DPO da organização –
                  através do e-mail dpo@sistemafiep.org.br.</p><p> 4.5: As organizações
                  terceiras (operadores de dados) que tenham atividades que
                  utilizem (tratam e processam) dados pessoais e dados pessoais
                  sensíveis coletados de titulares pelos processos de negócio do
                  Sistema Fiep (controlador de dados) devem manter-se em
                  conformidade formal com a Lei Geral de Proteção de Dados.</p><p> 4.6:
                  A privacidade de dados deve ser extensivamente comunicada,
                  treinada e exercitada por todos os colaboradores do Sistema
                  Fiep.</p><p> 4.7: O Sistema Fiep não irá vender informações pessoais
                  coletadas em seus sites para terceiros sem o expresso
                  consentimento do titular.</p><p> 4.8: O Sistema Fiep poderá alterar
                  os termos da política de privacidade sem qualquer aviso
                  prévio.</p><p> 5. Atribuições e Responsabilidades<p> 5.1 Usuário –
                  Titular dos Dados: Ler Política de Privacidade do Sistema
                  Fiep. Fornecer dados mediante a ciência e consentimento do
                  documento avaliado. Contatar DPO da organização em caso de
                  dúvidas ou identificação de irregularidades com a Política de
                  Privacidade.</p><p> 5.2 DPO – Sistema Fiep: Atender dúvidas ou
                  demandas enviadas pelos titulares dos dados. Atualizar a
                  política de privacidade sempre que necessário. Disseminar as
                  diretrizes do documento para colaboradores e parceiros de
                  negócio do Sistema Fiep.</p><p> 5.3 Colaboradores e Parceiros de
                  Negócios – Sistema Fiep: Realizar tratamento de dados pessoais
                  respeitando as diretrizes estabelecidas por leis e documentos
                  normativos do Sistema Fiep.</p><p> 6. Documentos de Referência Código
                  de Conduta do Sistema Fiep. Programa de Integridade do Sistema
                  Fiep. Lei 13.709/2018 – Lei Geral de Proteção de Dados. Lei
                  12.965/2014 – Marco Civil da Internet.</p>`;
    return (
        <>
        <div className="button-container text-center mt-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setShowModal(true)}
          >
            política de privacidade
          </button>
        </div>
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Politicas de Privacidade</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
               <div className="modal-body">
                <section>{termos.replaceAll("<p>", "").replaceAll("</p>", "")}</section>
              </div>
            </div>
          </div>
        </div>
        )}
        </>
    );
}
export default PoliticaDePrivacidade;