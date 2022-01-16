import styles from "./style.module.scss";
import img from "../../assets/img/img.png";

function AboutMe() {
	return (
		<div id="aboutMe" className={styles.container}>
			<div className={styles.left}>
				<img draggable="false" src={img} alt="logo" />
			</div>
			<div className={styles.right}>
				<h2 className={styles.subtitle}>About me</h2>
				<hr />
				<div className="shortParagraph">
					<p>
						“Diminuir a desigualdade de oportunidades no mundo”.
						Esse é o meu propósito desde o dia que soube que fui o
						único aluno a passar em uma universidade federal da
						escola onde eu estudava. Vi pessoalmente a ineficiência
						do ensino público e como isso afeta diretamente as
						pessoas que estão inseridas nesse contexto.
					</p>
					<br />
					<p>
						Com isso em mente, consciente que sou responsável pelas
						mudanças ao meu redor, que a educação abre portas e que
						a forma mais fácil de gerar oportunidades é com
						dinheiro, procurei formas de me destacar dentro da
						universidade, construir o melhor currículo possível,
						para conseguir conquistar o meu objetivo o mais rápido e
						poder ajudar quem precisa.
					</p>
					<br />
					<p>
						Logo no primeiro semestre do curso eu conheci a Include
						Jr e vi nela um atalho para o que eu buscava. Dentro da
						EJ eu trilhei um caminho buscando o máximo de
						experiências técnicas para acrescentar ao meu portfólio.
						Assumi o cargo de Gerente Adm-Fin, logo em seguida me
						tornei Diretor Adm-Fin e posteriormente fui indicado
						para o cargo de Diretor Presidente e aceitei com o maior
						orgulho.
					</p>
					<br />
					<p>
						Hoje vivo o meu propósito, mas sou consciente que não é
						o bastante para ajudar quem realmente precisa e por isso
						procuro a cada dia me desenvolver como pessoa e
						profissional para um dia não impactar só as pessoas ao
						meu redor e sim o mundo todo.
					</p>
					<br />
					<p>Spoiler: Vou conseguir!</p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
