export default function Html() {
    const handleFirstQ = e => {
        const first = e.target.ul1.first
        const second = e.target.ul1.second
        const third = e.target.ul1.third
        const fourth = e.target.ul1.fourth

        if (fourth) {
            alert("Correct!");
            return;
        } else if (first || second || third) {
            alert("Incorrect!")
            return;
        } else {
            alert("Error has found")
        }
    }

    const handleSecondQ = e => {
        const first = e.target.ul2.first
        const second = e.target.ul2.second
        const third = e.target.ul2.third
        const fourth = e.target.ul2.fourth

        if (first) {
            alert("Correct!");
            return;
        } else if (second || third || fourth) {
            alert("Incorrect!")
            return;
        } else {
            alert("Error has found")
            return;
        }
    }

    return (
        <div>
            <h1>HTML</h1>
            <br />
            <div>
                <h2>What does HTML stand for?</h2>
                <ul name="ul1">
                    <li><button name="first" onClick={handleFirstQ}>Hyper Trainer Marking Language</button></li>
                    <li><button name="second" onClick={handleFirstQ}>Hyper Text Marketing Language</button></li>
                    <li><button name="third" onClick={handleFirstQ}>Hyper Text Markup Language</button></li>
                    <li><button name="fourth" onClick={handleFirstQ}>Hyper Text Markup Leveler</button></li>
                </ul>
                <br />
                <h2>Which of the following is the correct structure for an HTML document?</h2>
                <ul name="ul2">
                    <li><button name="first" onClick={handleSecondQ}>{"<html><head></head><body></body></html>"}</button></li>
                    <li><button name="second" onClick={handleSecondQ}>{"<head><html></html><body></body></head>"}</button></li>
                    <li><button name="third" onClick={handleSecondQ}>{"<body><head></head><html></html></body>"}</button></li>
                    <li><button name="fourth" onClick={handleSecondQ}>{"<html><body></body><head></head></html>"}</button></li>
                </ul>
            </div>
            <br />
            <button>Submit</button>
        </div>
    )
}