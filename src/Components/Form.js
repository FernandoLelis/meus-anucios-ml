import { useState } from "react";
import categoria from "../Services/categorias.json"


const initialValue = {
    title: "",
    imageUrl: "",
    stock: 0,
    custo: 0,
    categoria: "",
    tipo: "",
    taxaImport: false,
    custoFrete: 0,    
    margemLucro: 0,
  };

export default function Form() {

    const [values, setValues] = useState(initialValue);
    const [freteGratis, setFreteGratis] = useState(false);
   
    function onChange(ev) {
        const{ name, value } = ev.target;
        setValues({ ...values, [name]: value });
        console.log({ name, values });
    };

    function toggle() {
        setFreteGratis(!freteGratis)
        
    };

    function onSubmit(ev) {
        ev.preventDefault();
    };

    return(
        <form onSubmit={onSubmit}>              
            <div className="row mb-3">
                <input type="text" name="title" placeholder="Título" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <input type="url" name="imageUrl" placeholder="Imagem URL" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <input type="number" name="stock" placeholder="Estoque" className="form-control form-control-sm" onChange={onChange} />
            </div>           
            <div className="row mb-3">
                <input type="number" name="custo" placeholder="Custo" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <select name="Categoria" className="form-select form-select-sm" onChange={onChange}>
                    <option value={-1}>Categoria</option>
                    {
                        categoria.map((item, i) => (
                            <option key={"categoria" + i} value={i}>{item.nome}</option>
                        ))
                    }
                </select>
            </div>
            <div className="row mb-3">
                <div className="col-auto">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value="Clássico" onChange={onChange} />
                        <label className="form-check-label">Clássico</label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value="Premium" onChange={onChange} />
                        <label className="form-check-label">Premium</label>
                    </div>
                    </div>
            
            </div>
            <div className="row mb-3">
                    <div className="form-check form-switch">                           
                        <input type="checkbox" name="freteGratis" role="switch" className="form-check-input" onClick={toggle} />
                        <label className="form-label">Frete Grátis</label>            
                    </div>
                    {
                        freteGratis && (
                            <>
                                <input type="number" name="custoFrete" placeholder="R$" className="form-control form-control-sm" onChange={onChange} /> 
                            </>
                        )
                    }  
            </div>
            <div className="row mb-2">
                <div className="form-check form-switch">                           
                    <input type="checkbox" name="taxaImport" className="form-check-input" onChange={onChange} />
                    <label className="form-label">Taxa de Importação</label>  
                </div>            
            </div>
            <div className="row mb-3">
                <input type="number" name="margemLucro" placeholder="Margem de Lucro" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row">
               <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </form>    
        );
};