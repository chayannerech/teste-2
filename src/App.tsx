import { useState } from "react"

export default function App() {
  const [nome, setNome] = useState<string>("")
  const [preco, setPreco] = useState<number>(0)
  const [info, setInfo] = useState<any>([])
  const [resultado, setResultado] = useState<any>("")

  function handleSubmit() {
    if (nome === "") return
    setInfo((currentInfo: any) => {
      return [{ nome, preco, id: crypto.randomUUID() }, ...currentInfo]
    })
    setResultado(info[0].nome)
    console.log(nome)
    console.log(info)
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="new-item-form">
        <div className="form-row">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <label htmlFor="preço">Preço</label>
          <input
            type="number"
            id="preço"
            onChange={(e) => setPreco(e.target.valueAsNumber)}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Inserir
        </button>
      </form>
      {info && (
        <>
          <h4>{resultado}</h4>
        </>
      )}
    </>
  )
}
