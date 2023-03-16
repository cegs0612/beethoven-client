import React from "react";
import "../css/biography.css";
function Biography(props) {
    return(
        <div className="biography">
            <div className="dark s">
                <img src="./img/beethoven_01.jpg" alt="" />
                <div>
                <h1>Ludwig van Beethoven (c.1700-1827)</h1>
                <p className="pl">Beethoven is considered one of the most transcendental composers of all western music history, his innovative compositions widened the boundaries of music and changed the comprehension of harmony, form and orchestration techniques, that allowed the development of music in the Romantic era. </p> 
                <br /><p className="pl">His personal life was marked by a struggle against deafness, and some of his most important works were composed during the last 10 years of his life, when he was almost completely deaf. He died at the age of 56.</p> </div>
            </div>
            <div className="light s">
                <div><h2>Family and early years</h2>
                <p className="pl">Born to a Flemish family in Bonn in 1770, both his father and his grandfather were Kapellmeister in the court of Cologne. His parents had seven children, four of them died at short age, he was the second born and the first to survive. His musical education started with his father, who forced his progress hopping he would become the next Mozart. It started with the keyboard and was presented to the public in 1778, when he was 8 sustaining, he was 6 (the same age as Mozart when he had his first concert); the public’s impression was not the expected. Afterwards he was sent to learn with the organist van den Eeden. Between 1779 and 1787 studied with Neefe and became his assistant by the year 1781. In the year 1784 applied for an official position as organist assistant receiving a payment of 150 florins.</p>
                <br /><p className="pl">Around 1787 he travelled to Vienna once and met W.A. Mozart, due to the lack of documentation the objective of the travel remains unknown, but probably he received some lessons.  At his return, he found his dying mother and his alcoholic father, who recently lost his position as Kapellmeister. At the age of 19 he became the head of the family. In 1789 he joined a new born orchestra playing the viola, and in 1792 his friend the count Ferdinand Erst von Waldstein convinced him to join him in Vienna to study with F.J. Haydn.</p></div>
                <img src="./img/beethoven_02.jpg" alt="" />
            </div>
            <div className="dark s">
                <img src="./img/beethoven_03.jpg" alt="" />
                <div>
                    <h2>Vienna, first period (1792 - 1802)</h2>
                    <p className="pl">Beethoven studies with Haydn until he has to return to London in 1784, later he studied with Albrechtsberger, Kapellmeister of St. Esteban’s cathedral and well-known counterpoint professor. During the first years in Vienna gains fame mainly playing in private residences and semi-public auditoriums, he had a few benefactors such as the prince K. von Lichnowsky, the Esterházy and the prince F.J. Lobkowsky. His presentations to larger audiences commenced in 1795 with 3 benefic concerts organized by the Tonkünstlersocietät (Society of musicans) in the Burgtheater, where he appears as a virtuous and composer. Subsequently had different public concerts and piano duels with several virtuous pianist. During this time, he also taught a few students, such as Therese and Josephine von Brunswick, and C. Czerny, who was a virtuous pianist, composer and accomplished pedagogue himself.</p><br /><p className="pl">In 1800 he organized his first concert entirely in his own benefit in the Burgertheater, a few Mozart’s symphonies, some sections of Haydn’s “The Creation”, two of his own new works (the septet and his first symphony) and probably his first piano concerto were played. During this time at least 6 editors competed to publish every new composition, in addition, in 1800 Lichnovsky started paying him a small yearly rent. This situation allowed him to compose according to his own preferences.</p>
                </div>
            </div>
            <div className="light s">
                <div>
                    <h2>Vienna, middle period (1802 - 1815)</h2>
                    <p className="pd">At the beginning of this period his deafness started to be notorious and his career as virtuous keyboard player decayed significantly; in consequence he focused in composition with feverish fervor. His famous third symphony premiered privately in 1804 and in public in 1806, around this time was premiered without much success, due to Napoleon’s invasion (1805), his opera Leonore. During this prolific period, he composed his third piano concerto, a violin concerto, a few string quartets and the Coriolanus Overture. Despite his growing fame throughout Europe, he was worried about not having a stable income, therefore he requested every year composing an opera for the imperial theaters or at least a concert. His vain efforts ended when the Theather an der Wien, was at his disposition for a concert in December, 1808. The four-hour concert included his fifth and sixth symphonies, excerpts of C minor mass, his fourth piano concerto and a Choral Fantasie with piano. His severe deafness caused that the concert had not the expected success, especially due to the piano parts he was performing. This was his last public concert as a pianist.</p><br />
                    <p className="pd">Beethoven was offered a position as Kapellmeister in Kassel, position he didn’t accept but helped him to negotiate a contract with the Archduke Rodolph, the princes Lobkowitz and Kinsky for a yearly rent. Nonetheless the devaluation of the currency caused by the war made this rent insufficient. At this point the Archduke accepted increment the rent but the other two ceased their contributions (one because of economic problems and the other because of his own death). During the Vienna’s congress, he offered a very successful concert premiering his seventh symphony and the so-called Battle Symphony or the Wellington’s victory, to celebrate the victory over Napoleon’s army. This concert revived his popularity and stablished him as a well-known and respected composer throughout Europe.</p>
                </div>
                <img src="./img/beethoven_04.jpg" alt="" />
            </div>
            <div className="dark s">
                <img src="./img/beethoven_05.jpg" alt="" />
                <div>
                    <h2>Vienna, final years (1815 - 1827)</h2>
                    <p className="pd">His deteriorating deafness turned him surly, irascible, suspicious and he isolated himself from all, including his closest friends. During this time his brother Kaspar Karl died and assigned him as the legal guardian of his nephew Karl, this event led to a four year long legal battle with the boy´s mother for his custody. In the other hand, editors could no longer trust him, for he used to break exclusivity promises; and Vienna’s society lost his interest in his composing style, captivated instead for Rossini and the Italian opera. This situation caused a considerable decrease of his economy. The highlighted compositions from this period are his last four piano sonatas, the Diabelli variations, and the nineth and last symphony, that was premiered in May, 1824 and received with enthusiasm. His lasts compositions were string quartets commissioned firstly by the Russian prince Nikolay Golitsïn, and after bought by the editor Schlesinger.</p><br />
                    <p className="pd">By the end of 1826 Beethoven became severely ill and died on March, 26 in 1827. His funerals were massive, the assistants were estimated between 10.000 and 20.000.</p>
                </div>
            </div>
        </div>
        
    );
}

export default Biography;