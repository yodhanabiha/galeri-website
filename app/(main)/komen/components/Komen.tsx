import { Card, Container } from "react-bootstrap"
import styles from "./komen.module.css"

const profile = "https://www.w3schools.com/howto/img_avatar.png"

export const Komens = () => {
    return (
        <Container>

            <div className={styles.cardKomen}>
                <img src={profile} className={styles.circle} />
                <div className={styles.komen}>
                    <h4>username user</h4>
                    <p>username user passwordsafas amsfkmkasdmk</p>
                </div>
            </div>
            <div className={styles.cardKomen}>
                <img src={profile} className={styles.circle} />
                <div className={styles.komen}>
                    <h4>username user</h4>
                    <p>username user passwordsafas amsfkmkasdmk</p>
                </div>
            </div>
            <div className={styles.cardKomen}>
                <img src={profile} className={styles.circle} />
                <div className={styles.komen}>
                    <h4>username user</h4>
                    <p>username user passwordsafas amsfkmkasdmk</p>
                </div>
            </div>


        </Container>
    )
}