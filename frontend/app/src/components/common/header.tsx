import Image from "next/image";
import styles from "@/app/page.module.css";
import {AppBar} from "@mui/material";

export default function Header(){
    return (
        <AppBar position="static">
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={300}
                height={100}
                priority
            />
        </AppBar>

    );
}