import Link from "next/link";

const big404Text = {
    color: "#0066FF",
    fontSize: "120pt"
};
const big404TextShadow = {
    color:"rgba(0,0,0,0)",
    WebkitTextStroke: "2px #0066FF",
    userSelect: "none",
    marginLeft: "-1.66em",
    verticalAlign: "-0.04em"
};


export default function Error404() {
    return <div style={{textAlign: "center"}}>
        <h2 style={big404Text}>
            404
            <span ariaHidden="true" style={big404TextShadow}>
                404
            </span>
        </h2>
        <p>Aww, rats! Looks like Gary has screwed something up again. Maybe <Link href="/">try going home</Link>?</p>
    </div>;
}