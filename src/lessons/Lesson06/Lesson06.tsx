import "./styles.css"

function Lesson06() {
    // Примитивы
    let userName: string = "John Doe"
    userName = "Jane Doe"

    let result: string = 1 + 2 + "4"

    let number: number = 1
    number = Infinity
    number = 2.5
    number = NaN
    number = -6

    let boolean: boolean = true
    boolean = false
    boolean = 1 !== 1

    let data: null = null
    let data2: undefined = undefined

    // bigint должен заканчиваться на n
    let bigNumber: bigint = 1000000000000000000000n

    // допустим, символ с меткой 'u'
    let uniq: symbol = Symbol("u")

    // массив строк
    let colors: string[] = ["red", "green", "blue"]
    colors.push("black")

    // кортеж
    const colorCode: [string, number] = ["red", 1]

    // --- функции ---

    // Если функция ничего не возвращает
    const showMessage = (): void => {
        console.log("Hello")
    }

    // Если функция возвращает значение
    const getSum = (): number => {
        const sum: number = 2 + 7
        return sum
    }

    // Типизация параметров функции
    const getUserData = (firstName: string, age: number): string => {
        return `${firstName} - ${age} y.o.`
    }

    // вызов функции вне JSX
    showMessage()

    return (
        <div className="lesson06-wrapper">
            <h1>Lesson 06 - TypeScript</h1>
            <p>{userName}</p>
            <p>{result}</p>
            <p>{number}</p>
            <p>{boolean.toString()}</p>
            <p>{String(data)}</p>
            <p>{String(data2)}</p>
            <p>{bigNumber.toString()}</p>
            <p>{uniq.toString()}</p>
            <p>{colors.join(", ")}</p>
            <p>{`${colorCode[0]} - ${colorCode[1]}`}</p>
            <p>{getSum()}</p>
            <p>{getUserData("John", 30)}</p>
        </div>
    )
}

export default Lesson06
