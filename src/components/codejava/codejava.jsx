import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeJava() {
    // O seu código Java permanece o mesmo aqui dentro da constante `code`
    const code = `public class Aps1lm {

    public static void main(String[] args) throws InterruptedException {
        String nome;
        String digitoMenu1;
        Scanner leitor = new Scanner(System.in);

        System.out.println("Seja bem-vindo ao Sistema de Aprendizado LP!");
        System.out.println("Antes de começarmos, poderia me informar seu nome, por favor?");
        nome = leitor.nextLine();

        System.out.println("\\nPerfeito!");
        System.out.println("É um enorme prazer ter você aqui, " + nome + "!");
        System.out.println("Este sistema foi criado para auxiliar no seu aprendizado de maneira prática e eficiente.");

        while (true) {
            System.out.println("\\nPor favor, escolha a opção desejada:");
            System.out.println("\\n--- Menu Principal ---");
            System.out.println("1. Conceitos-Chave");
            System.out.println("2. Dados");
            System.out.println("3. Quiz");
            System.out.println("4. Sair do Sistema");
            digitoMenu1 = leitor.nextLine().toLowerCase().trim();

            switch (digitoMenu1) {
                case "1", "conceitos chaves" -> menuConceitos(leitor, nome);
                case "2", "dados" -> menuDados(leitor, nome);
                case "3", "quiz" -> quizGame(leitor, nome);
                case "4", "sair", "sair do sistema" -> {
                    System.out.println("Encerrando o sistema. Até logo, " + nome + "!");
                    return;
                }
                default -> System.out.println("Opção inválida. Por favor, verifique se digitou o número ou o nome da opção corretamente.");
            }
        }
    }


    public static void menuConceitos(Scanner leitor, String nome) {
        String digitoMenu2;
        String digitoMenu3;

        System.out.println("\\n--- Conceitos-Chave ---");
        System.out.println("Escolha o conceito que deseja aprender:");
        System.out.println("\\n1. Feminismo");
        System.out.println("2. Estereótipos de Gênero");
        System.out.println("3. Machismo");
        System.out.println("4. Igualdade de Gênero");
        System.out.println("5. Voltar ao Menu Principal");
        digitoMenu2 = leitor.nextLine().toLowerCase().trim();

        switch (digitoMenu2) {
            case "1", "feminismo" -> {
                System.out.println("""
                        
                        O feminismo é um movimento social e político que busca a igualdade entre os gêneros,
                        garantindo direitos, oportunidades e liberdades iguais para mulheres e homens.
                        
                        Ele surgiu em diferentes ondas históricas e não visa a superioridade feminina, mas sim
                        corrigir desigualdades históricas.
                        """);
            }

            case "2", "estereótipos de gênero" -> {
                System.out.println("""
                        
                        Estereótipos de gênero são ideias pré-concebidas sobre o que é "adequado" para homens e mulheres.
                        Por exemplo, afirmar que 'mulher é sensível' ou que 'homem não chora' limita comportamentos
                        baseados apenas no gênero.
                        
                        Esses estereótipos contribuem para a desigualdade e prejudicam a liberdade individual.
                        """);
            }

            case "3", "machismo" -> {
                System.out.println("""
                        
                        Machismo é um conjunto de atitudes, comportamentos e crenças que colocam o homem como superior à mulher.
                        Ele está presente estruturalmente na sociedade e pode aparecer em falas, atitudes e até
                        na ausência de políticas igualitárias.
                        
                        Combater o machismo é fundamental para uma sociedade mais justa.
                        """);
            }

            case "4", "igualdade de gênero" -> {
                System.out.println("""
                        
                        Igualdade de gênero é o princípio que assegura que mulheres e homens tenham os mesmos direitos,
                        deveres e oportunidades em todas as áreas da vida: trabalho, política, educação, etc.
                        
                        Isso não significa que homens e mulheres são iguais em tudo, mas que devem ser tratados com equidade.
                        """);
            }

            case "5", "voltar ao menu principal" -> {
                System.out.println("\\nRetornando ao menu principal, " + nome + "!");
                return;
            }

            default -> System.out.println("Opção inválida. Por favor, verifique se digitou corretamente.");
        }

        System.out.println("\\nComo deseja prosseguir?");
        System.out.println("1. Voltar ao Menu de Conceitos");
        System.out.println("2. Voltar ao Menu Principal");
        System.out.println("3. Sair do Programa");
        digitoMenu3 = leitor.nextLine().toLowerCase().trim();

        switch (digitoMenu3) {
            case "1", "voltar menu conceitos" -> menuConceitos(leitor, nome);
            case "2" -> System.out.println("Voltando ao menu principal...");
            case "3" -> {
                System.out.println("Encerrando o programa. Até mais, " + nome + "!");
                System.exit(0);
            }
            default -> System.out.println("Opção inválida.");
        }
    }

    
    public static void menuDados(Scanner leitor, String nome) {
        String digitoMenu2;
        String digitoMenu3;

        System.out.println("\\n--- Dados ---");
        System.out.println("Escolha os dados que deseja visualizar:");
        System.out.println("\\n1. Realidade das Mulheres Negras");
        System.out.println("2. Violência Doméstica e Relacional");
        System.out.println("3. Relatório de Feminicídios e Homicídios");
        System.out.println("4. Descumprimento das Cotas de Gênero");
        System.out.println("5. Voltar ao Menu Principal");
        digitoMenu2 = leitor.nextLine().toLowerCase().trim();

        switch (digitoMenu2) {
            case "1", "realidade das mulheres negras" -> {
                System.out.println("""
                        
                        Cerca de 85% das mulheres negras que sofrem violência doméstica ou familiar e 
                        não possuem renda suficiente para se manter convivem com seus agressores.
                                
                        Esse número é quatro vezes maior do que a média geral (21%).
                        
                        Fonte: https://ultimosegundo.ig.com.br/brasil/2024-11-20/violencia-mulheres-negras.html
                        """);
            }

            case "2", "violência doméstica e relacional" -> {
                System.out.println("""
                        
                        Mais de 37% das brasileiras sofreram algum tipo de violência nos últimos 12 meses, 
                        segundo o FBSP/Datafolha.
                                
                        Dentre os casos, 31% foram vítimas de insultos verbais e 18,9% de agressões físicas.
                        
                        Fonte: https://agendadopoder.com.br/214-milhoes-de-mulheres-sofreram-algum-tipo-de-agressao-no-brasil-em-2024-mostra-pesquisa/
                        """);
            }

            case "3", "relatório de feminicídios e homicídios" -> {
                System.out.println("""
                        Em 2024, o Brasil registrou 1.450 feminicídios e 2.485 homicídios dolosos de mulheres.
                        Houve uma redução de 5% em relação a 2023.
                        
                        Fonte: https://www.diariodepernambuco.com.br/noticia/brasil/2025/03/brasil-registra-1-450-feminicidios-no-ano-de-2024.html
                        """);
            }

            case "4", "descumprimento das cotas de gênero" -> {
                System.out.println("""
                        
                        A cota mínima de 30% de candidaturas femininas foi descumprida em 772 municípios em 2024.
                        Houve uma melhora em relação a 2020, quando o número foi de 1.304.
                        
                        Fonte: https://www2.camara.leg.br/comunicacao/assessoria-de-imprensa/releases/04-10-24-cota-de-genero-e-descumprida-em-mais-de-700-municipios-nas-eleicoes-de-2024
                        """);
            }

            case "5", "voltar ao menu principal" -> {
                System.out.println("\\nRetornando ao menu principal, " + nome + "!");
                return;
            }

            default -> System.out.println("Opção inválida. Por favor, verifique se digitou corretamente.");
        }

        System.out.println("\\nComo deseja prosseguir?");
        System.out.println("1. Voltar ao Menu de Dados");
        System.out.println("2. Voltar ao Menu Principal");
        System.out.println("3. Sair do Programa");
        digitoMenu3 = leitor.nextLine().toLowerCase().trim();

        switch (digitoMenu3) {
            case "1", "voltar menu dados" -> menuDados(leitor, nome);
            case "2" -> System.out.println("Voltando ao menu principal...");
            case "3" -> {
                System.out.println("Encerrando o programa. Até mais, " + nome + "!");
                System.exit(0);
            }
            default -> System.out.println("Opção inválida.");
        }
    }


    public static void quizGame(Scanner leitor, String nome) throws InterruptedException {
        String jogarnovamente;

        do {
            int score = 0; 

            System.out.println("\\n--- Seja bem-vindo ao nosso Quiz! ---");
            Thread.sleep(700);
            System.out.print("Carregando");
            Thread.sleep(700);
            System.out.print("...");
            Thread.sleep(700);
            System.out.print("...");
            Thread.sleep(700);
            System.out.println(".");
            Thread.sleep(700);
            System.out.print("Organizando as perguntas");
            Thread.sleep(700);
            System.out.print("...");
            Thread.sleep(700);
            System.out.print("...");
            Thread.sleep(700);
            System.out.println(".");

            System.out.println("\\n1. O que é o feminismo?");
            System.out.println("a) Oposto do machismo\\nb) Movimento que busca a igualdade de direitos entre os gêneros\\nc) Movimento para dar mais direitos às mulheres que aos homens\\nd) Ideologia contra os homens");

            String p1 = leitor.nextLine();

            if (p1.equalsIgnoreCase("b")) {
                System.out.println("CORRETO!");
                Thread.sleep(2000);
                score++;
            } else {
                System.out.println("Resposta incorreta. A resposta certa é a letra B: Movimento que busca a igualdade de direitos entre os gêneros.");
            }

            System.out.println("\\n2. Por que o feminismo é importante?");
            System.out.println("a) Porque defende apenas as mulheres\\nb) Porque busca igualdade salarial entre homens e mulheres\\nc) Porque ignora os problemas dos homens\\nd) Porque promove a superioridade feminina");

            String p2 = leitor.nextLine();

            if (p2.equalsIgnoreCase("b")) {
                System.out.println("CORRETO!");
                Thread.sleep(2000);
                score++;
            } else {
                System.out.println("Resposta incorreta. A resposta certa é a letra B: Porque busca igualdade salarial entre homens e mulheres.");
            }

            System.out.println("\\n3. Qual das alternativas é uma conquista do feminismo?");
            System.out.println("a) O voto feminino\\nb) O direito ao serviço militar obrigatório\\nc) O direito à caça esportiva\\nd) A criação do imposto de renda");

            String p3 = leitor.nextLine();

            if (p3.equalsIgnoreCase("a")) {
                System.out.println("CORRETO!");
                Thread.sleep(2000);
                score++;
            } else {
                System.out.println("Resposta incorreta. A resposta certa é a letra A: O voto feminino.");
            }

            System.out.println("\\n4. Feminismo também beneficia os homens?");
            System.out.println("a) Não, é exclusivo para mulheres\\nb) Sim, ao combater estereótipos de gênero prejudiciais\\nc) Apenas em questões de saúde\\nd) Só em ambientes acadêmicos");

            String p4 = leitor.nextLine();

            if (p4.equalsIgnoreCase("b")) {
                System.out.println("CORRETO!");
                Thread.sleep(2000);
                score++;
            } else {
                System.out.println("Resposta incorreta. A resposta certa é a letra B: Sim, ao combater estereótipos de gênero prejudiciais.");
            }

            System.out.println("\\n5. Qual é um dos principais objetivos do feminismo atual?");
            System.out.println("a) Tornar as mulheres superiores\\nb) Acabar com os direitos masculinos\\nc) Promover a igualdade e combater o sexismo\\nd) Excluir homens de posições de poder");

            String p5 = leitor.nextLine();

            if (p5.equalsIgnoreCase("c")) {
                System.out.println("CORRETO!");
                Thread.sleep(2000);
                score++;
            } else {
                System.out.println("Resposta incorreta. A resposta certa é a letra C: Promover a igualdade e combater o sexismo.");
            }

            System.out.println("\\nO quiz chegou ao fim!");
            Thread.sleep(2000);
            System.out.println("Sua pontuação foi: " + score + " de 5.");
            Thread.sleep(2000);

            System.out.println("\\nVocê quer jogar novamente? (Sim/Não)");
            jogarnovamente = leitor.nextLine();

        } while (jogarnovamente.equalsIgnoreCase("sim") || jogarnovamente.equalsIgnoreCase("s"));

        System.out.println("\\nObrigado por jogar com a gente, " + nome + "!");`;

    return (
        <SyntaxHighlighter
            language="java"
            style={dracula}
            className="codejava text-base md:text-lg"
            wrapLines={true}
            wrapLongLines={true}
        >
            {code}
        </SyntaxHighlighter>
    );
}