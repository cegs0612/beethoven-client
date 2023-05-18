import React from "react";
import "../css/biography.css";
import Navbar from "../components/Navbar";
import NavbarCell from "../components/NavbarCell";
import useWindowDimentions from "../hook/useWindowDimentions";
import portrait1 from "../img/portraits/imagenBiografia1-500x600.png";
import portrait2 from "../img/portraits/imagenBiografia2-500x600.png";
import portrait3 from "../img/portraits/imagenBiografia3-500x600.png";
import portrait4 from "../img/portraits/imagenBiografia4-500x600.png";
import portrait5 from "../img/portraits/imagenBiografia5-500x600.png";


function Biography() {
    const width = useWindowDimentions();
    return(
        <div className="biography">
            {width>=900&&<Navbar visible={false}/>}
            {width<900&&<NavbarCell />}
            {width>=900&&<>
            <div className="bio1">
                <div className="text">
                    <h1>Biography</h1>
                    <h2>Ludwig van Beethoven (c. 1770-1827)</h2>
                    <p>Beethoven is considered to be one of the most transcendental composers in the history of Western music. His innovative compositions expanded the boundaries of music and revolutionized the understanding of harmony, form, and orchestration techniques, ultimately shaping the development of music in the Romantic era.</p>
                </div>
                <div className="portrait">
                    <img src={portrait1} alt="Beethoven's portrait" />
                </div>
            </div>
            <div className="bio2">
                <div className="text">
                    <h2>Family and Early Years</h2>
                    <p>Born into a Flemish family in Bonn in 1770, both his father and grandfather served as Kapellmeisters in the court of Köln. His parents had seven children, but only three survived infancy. Beethoven, the second-born child, was the first to reach adulthood. He received his musical education from his father, who had great ambitions for him to become the next Mozart. Beethoven began learning the keyboard and made his public debut in 1778 at the age of 8 (the same age as Mozart at his first concert). However, the public's reaction was not as anticipated. Subsequently, he received further instruction from the organist van den Eeden. Between 1779 and 1787, Beethoven studied with Neefe and became his assistant by 1781. In 1784, he applied for an official position as an organist assistant and received a payment of 150 florins. <br /> Around 1787, Beethoven made a trip to Vienna, where he possibly received lessons from W.A. Mozart. Due to a lack of documentation, the exact purpose of this journey remains unknown. Upon his return, Beethoven found his mother in poor health and his father, who had lost his position as Kapellmeister, struggling with alcoholism. At the age of 19, Beethoven became the head of the family. In 1789, he joined a newly formed orchestra as a viola player, and in 1792, his friend Count Ferdinand Ernst von Waldstein convinced him to move to Vienna to study with F.J. Haydn.</p>
                </div>
                <div className="portrait">
                    <img src={portrait2} alt="Beethoven as a child" />
                </div>
            </div>
            <div className="bio3">
                <div className="text">
                    <h2>Vienna, First Period (1792-1802)</h2>
                    <p>Beethoven studied with Haydn until Haydn's departure for London in 1794. He then continued his studies with Johann Georg Albrechtsberger, the Kapellmeister of St. Stephen's Cathedral and a renowned professor of counterpoint. During the early years in Vienna, Beethoven gained recognition primarily through performances in private residences and semi-public venues. He had a few patrons, including Prince K. von Lichnowsky, the Esterházy family, and Prince F.J. Lobkowsky. <br />His appearances before larger audiences began in 1795 with three benefit concerts organized by the Tonkünstlersocietät (Society of Musicians) at the Burgtheater, where he showcased his virtuosity as a performer and composer. Subsequently, he held various public concerts and engaged in piano duels with other virtuoso pianists. During this time, Beethoven also taught several students, such as Therese and Josephine von Brunswick, as well as C. Czerny, who himself became a virtuoso pianist, composer, and accomplished pedagogue. <br />In 1800, Beethoven organized his first concert solely for his own benefit at the Burgtheater. The program included a selection of Mozart's symphonies, portions of Haydn's "The Creation," two of Beethoven's own new works (the septet and his first symphony), and likely his first piano concerto. During this period, at least six publishers vied to publish his latest compositions. In addition, in 1800, Prince Lichnowsky began providing him with a small yearly stipend. This financial support allowed Beethoven to compose according to his own preferences.</p>
                </div>
                <div className="portrait">
                    <img src={portrait3} alt="Young Beethoven" />
                </div>
            </div>
            <div className="bio4">
                <div className="text">
                    <h2>Vienna, Middle Period (1802-1815)</h2>
                    <p>At the beginning of this period, Beethoven's worsening deafness became noticeable, causing his career as a virtuoso keyboard player to decline significantly. As a result, he shifted his focus to composition with a feverish fervor. His famous Third Symphony premiered privately in 1804 and publicly in 1806. Around the same time, his opera "Leonore" was premiered but met with limited success due to Napoleon's invasion in 1805. During this prolific period, Beethoven composed his Third Piano Concerto, a Violin Concerto, several string quartets, and the Coriolanus Overture. Despite his growing fame across Europe, Beethoven remained concerned about his lack of a stable income. As a result, he requested an annual stipend to compose an opera for the imperial theaters or, at the very least, to hold a concert. His persistent efforts bore fruit when the Theater an der Wien was made available to him for a concert in December 1808. The four-hour concert featured his Fifth and Sixth Symphonies, excerpts from his C minor Mass, his Fourth Piano Concerto, and a Choral Fantasy with piano. However, due to his severe deafness, the concert did not meet the anticipated success, especially in regard to his piano performances. This marked his last public concert as a pianist. <br />Beethoven was offered a position as Kapellmeister in Kassel, but he declined. However, this opportunity helped him negotiate a contract with Archduke Rudolph and Princes Lobkowitz and Kinsky, who provided him with a yearly stipend. Unfortunately, due to the currency devaluation caused by the war, the stipend became insufficient. The Archduke agreed to increase the stipend, but the contributions from the other two patrons ceased—one due to economic problems and the other due to his death. During the Congress of Vienna, Beethoven held a highly successful concert, premiering his Seventh Symphony and the "Wellington's Victory" (also known as the "Battle Symphony") to celebrate the victory over Napoleon's army. This concert revitalized his popularity and solidified his reputation as a well-known and respected composer throughout Europe.</p>
                </div>
                <div className="portrait">
                    <img src={portrait4} alt="Adult Beethoven" />
                </div>
            </div>
            <div className="bio5">
                <div className="text">
                    <h2>Vienna, Final Years (1815-1827)</h2>
                    <p>Beethoven's deteriorating deafness made him surly, irascible, and suspicious, leading him to isolate himself from others, including his closest friends. During this time, his brother Kaspar Karl died, and Beethoven became the legal guardian of his nephew Karl. This event sparked a four-year-long legal battle with the boy's mother over custody. Additionally, publishers grew reluctant to work with Beethoven due to his tendency to break exclusivity agreements. Vienna's society also lost interest in his composing style, instead captivated by the works of Rossini and the Italian opera. As a result, Beethoven experienced a significant decline in his financial situation. Notable compositions from this period include his last four piano sonatas, the Diabelli Variations, and his Ninth and final Symphony, which premiered in May 1824 to enthusiastic acclaim. His last compositions were a set of string quartets commissioned by Russian Prince Nikolay Golitsïn and later purchased by the publisher Schlesinger. <br />Beethoven fell severely ill by the end of 1824 and passed away on March 26, 1827. His funeral drew an immense crowd, with estimates ranging from 10,000 to 20,000 attendees.</p>
                </div>
                <div className="portrait">
                    <img src={portrait5} alt="Beethoven in his final years" />
                </div>
            </div>
            </>}
            {width<900&&<>
            <div className="bio1">
                <div className="bio-cell">
                    <h1>Biography</h1>
                    <img src={portrait1} alt="Beethoven's portrait" />
                    <h2>Ludwig van Beethoven (c. 1770-1827)</h2>
                    <p>Beethoven is considered to be one of the most transcendental composers in the history of Western music. His innovative compositions expanded the boundaries of music and revolutionized the understanding of harmony, form, and orchestration techniques, ultimately shaping the development of music in the Romantic era.</p>
                    <img src={portrait2} alt="Beethoven as a child" />
                    <h2>Family and Early Years</h2>
                    <p>Born into a Flemish family in Bonn in 1770, both his father and grandfather served as Kapellmeisters in the court of Köln. His parents had seven children, but only three survived infancy. Beethoven, the second-born child, was the first to reach adulthood. He received his musical education from his father, who had great ambitions for him to become the next Mozart. Beethoven began learning the keyboard and made his public debut in 1778 at the age of 8 (the same age as Mozart at his first concert). However, the public's reaction was not as anticipated. Subsequently, he received further instruction from the organist van den Eeden. Between 1779 and 1787, Beethoven studied with Neefe and became his assistant by 1781. In 1784, he applied for an official position as an organist assistant and received a payment of 150 florins. <br /> Around 1787, Beethoven made a trip to Vienna, where he possibly received lessons from W.A. Mozart. Due to a lack of documentation, the exact purpose of this journey remains unknown. Upon his return, Beethoven found his mother in poor health and his father, who had lost his position as Kapellmeister, struggling with alcoholism. At the age of 19, Beethoven became the head of the family. In 1789, he joined a newly formed orchestra as a viola player, and in 1792, his friend Count Ferdinand Ernst von Waldstein convinced him to move to Vienna to study with F.J. Haydn.</p>
                    <img src={portrait3} alt="Young Beethoven" />
                    <h2>Vienna, First Period (1792-1802)</h2>
                    <p>Beethoven studied with Haydn until Haydn's departure for London in 1794. He then continued his studies with Johann Georg Albrechtsberger, the Kapellmeister of St. Stephen's Cathedral and a renowned professor of counterpoint. During the early years in Vienna, Beethoven gained recognition primarily through performances in private residences and semi-public venues. He had a few patrons, including Prince K. von Lichnowsky, the Esterházy family, and Prince F.J. Lobkowsky. <br />His appearances before larger audiences began in 1795 with three benefit concerts organized by the Tonkünstlersocietät (Society of Musicians) at the Burgtheater, where he showcased his virtuosity as a performer and composer. Subsequently, he held various public concerts and engaged in piano duels with other virtuoso pianists. During this time, Beethoven also taught several students, such as Therese and Josephine von Brunswick, as well as C. Czerny, who himself became a virtuoso pianist, composer, and accomplished pedagogue. <br />In 1800, Beethoven organized his first concert solely for his own benefit at the Burgtheater. The program included a selection of Mozart's symphonies, portions of Haydn's "The Creation," two of Beethoven's own new works (the septet and his first symphony), and likely his first piano concerto. During this period, at least six publishers vied to publish his latest compositions. In addition, in 1800, Prince Lichnowsky began providing him with a small yearly stipend. This financial support allowed Beethoven to compose according to his own preferences.</p>
                    <img src={portrait4} alt="Adult Beethoven" />
                    <h2>Vienna, Middle Period (1802-1815)</h2>
                    <p>At the beginning of this period, Beethoven's worsening deafness became noticeable, causing his career as a virtuoso keyboard player to decline significantly. As a result, he shifted his focus to composition with a feverish fervor. His famous Third Symphony premiered privately in 1804 and publicly in 1806. Around the same time, his opera "Leonore" was premiered but met with limited success due to Napoleon's invasion in 1805. During this prolific period, Beethoven composed his Third Piano Concerto, a Violin Concerto, several string quartets, and the Coriolanus Overture. Despite his growing fame across Europe, Beethoven remained concerned about his lack of a stable income. As a result, he requested an annual stipend to compose an opera for the imperial theaters or, at the very least, to hold a concert. His persistent efforts bore fruit when the Theater an der Wien was made available to him for a concert in December 1808. The four-hour concert featured his Fifth and Sixth Symphonies, excerpts from his C minor Mass, his Fourth Piano Concerto, and a Choral Fantasy with piano. However, due to his severe deafness, the concert did not meet the anticipated success, especially in regard to his piano performances. This marked his last public concert as a pianist. <br />Beethoven was offered a position as Kapellmeister in Kassel, but he declined. However, this opportunity helped him negotiate a contract with Archduke Rudolph and Princes Lobkowitz and Kinsky, who provided him with a yearly stipend. Unfortunately, due to the currency devaluation caused by the war, the stipend became insufficient. The Archduke agreed to increase the stipend, but the contributions from the other two patrons ceased—one due to economic problems and the other due to his death. During the Congress of Vienna, Beethoven held a highly successful concert, premiering his Seventh Symphony and the "Wellington's Victory" (also known as the "Battle Symphony") to celebrate the victory over Napoleon's army. This concert revitalized his popularity and solidified his reputation as a well-known and respected composer throughout Europe.</p>
                    <img src={portrait5} alt="Beethoven in his final years" />
                    <h2>Vienna, Final Years (1815-1827)</h2>
                    <p>Beethoven's deteriorating deafness made him surly, irascible, and suspicious, leading him to isolate himself from others, including his closest friends. During this time, his brother Kaspar Karl died, and Beethoven became the legal guardian of his nephew Karl. This event sparked a four-year-long legal battle with the boy's mother over custody. Additionally, publishers grew reluctant to work with Beethoven due to his tendency to break exclusivity agreements. Vienna's society also lost interest in his composing style, instead captivated by the works of Rossini and the Italian opera. As a result, Beethoven experienced a significant decline in his financial situation. Notable compositions from this period include his last four piano sonatas, the Diabelli Variations, and his Ninth and final Symphony, which premiered in May 1824 to enthusiastic acclaim. His last compositions were a set of string quartets commissioned by Russian Prince Nikolay Golitsïn and later purchased by the publisher Schlesinger. <br />Beethoven fell severely ill by the end of 1824 and passed away on March 26, 1827. His funeral drew an immense crowd, with estimates ranging from 10,000 to 20,000 attendees.</p>
                    <br />
                </div>
            </div>
            </>}
        </div>
    );
}

export default Biography;