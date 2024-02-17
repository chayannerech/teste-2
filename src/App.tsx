import { useState } from "react"

export default function App() {
  const [nome, setNome] = useState<string>("")
  const [preco, setPreco] = useState<number>(0)
  const [info, setInfo] = useState<any>([])

  function handleSubmit() {
    if (nome === "" || preco === 0) return
    setInfo((currentInfo: any) => {
      return [...currentInfo, { nome, preco, id: crypto.randomUUID() }]
    })
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

      {info.length > 0 && (
        <>
          <h4>Nome: {info.slice(-1)[0].nome}</h4>
          <h4>Preço: {info.slice(-1)[0].preco}</h4>
        </>
      )}
    </>
  )
}
