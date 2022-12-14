
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>VTB Marketplace</h1>
            <p className={styles.text}>Платформа предназначенная для геймификации командного взаимодействия и вовлеченности сотрудников, посредством токенизации командных процессов.</p>
            <p className={styles.text}>Участниками являются сотрудники VTB банка. Через равные промежутки времени, называемых раундами, администратор платформы порождает фиксированное количество токенов VTBT(VTB Token). После истечения раунда, созданные токены распределяются среди всех сотрудников, пропорционально их долям проделанной активности. </p>
            <p className={styles.text}>Активность подразделяется на 3 вида - просмотр курса, командное взаимодейтсвие и менторинг. Каждая активность оценивается по-своему. Просмотр курса и менторинг оцениваются в один VTBT, командное взаимодейтсвие может принимать значение от одного до 5, в зависимости от его важности. Общее количество созданных в начале раундов токенов должны быть таким, чтобы обеспечить сотрудников вознаграждением в любом случае. </p>
            <p className={styles.text}>Токены VTBT можно обменять как на плюшки маркетплюйса, так и на Digital Rubles. В последнем случае, обмен происходит на децентрализованной бирже блокчейа, поддерживающего Digital Rubles. Либо же посредством прямого обмена с сервисом, однако это будет довольно затратным, если мы хотим поддерживать устойчивость спроса и предложения. </p>
            <Link href="/tokens">
                <a className={styles.btn}>Мои токены</a>
            </Link>
        </div>
    )
}