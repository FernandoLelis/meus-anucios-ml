import { useEffect, useState } from "react";
import categorias from "../Services/categorias.json";


const initialValues = {
    title: "",
    imageUrl: "",
    stock: "",
    custo: "",
    categoria: -1,
    tipo: "",
    taxaImport: "",
    freteGratis: "",
    custoFrete: "",    
    margemLucro: "",
  };
export default function Form(props) {

    let [values, setValues] = useState(initialValues);
    const [freteGratis, setFreteGratis] = useState(false);

    useEffect( () => {
        if(props.idAtual === '') {
             setValues({
                ...initialValues
            })
        } else {
             setValues({
                ...props.dadosAnuncios[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosAnuncios]);
   
    const onChange = ev => {
        let { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    };

    function toggle() {
        setFreteGratis(!freteGratis)
        
    };

    const onSubmit = ev => {
        //ev.preventDefault();
        props.addEedit(values)
    };
    
    return(
        <form autoComplete="off" onSubmit={onSubmit}>            
            <div className="row mb-3">
                <input type="text" name="title" value={values.title} placeholder="Título" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <input type="url" name="imageUrl" value={values.imageUrl} placeholder="Imagem URL" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <input type="number" name="stock" value={values.stock} placeholder="Estoque" className="form-control form-control-sm" onChange={onChange} />
            </div>           
            <div className="row mb-3">
                <input type="number" name="custo" value={values.custo} placeholder="Custo" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <select name="categoria" value={values.categoria} className="form-select form-select-sm" onChange={onChange}>
                    <option value={-1}>Categoria</option>
                    {
                        categorias.map((item, i) => (
                            <option key={"categorias" + i} value={i}>{item.nome}</option>
                        ))
                    }
                </select>
            </div>
            <div className="row mb-3">
                <div className="col-auto">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value={ props.idAtual === '' ? 'Clássico' : values.tipo } onChange={onChange} />
                        <label className="form-check-label">Clássico</label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value={ props.idAtual === '' ? 'Premium' : values.tipo } onChange={onChange} />
                        <label className="form-check-label">Premium</label>
                    </div>
                    </div>
            
            </div>
            <div className="row mb-3">
                    <div className="form-check form-switch">                           
                        <input type="checkbox" name="freteGratis" value={values.freteGratis} role="switch" className="form-check-input" onClick={toggle} />
                        <label className="form-label">Frete Grátis</label>            
                    </div>
                    {
                        freteGratis && (
                            <>
                                <input type="number" name="custoFrete" value={values.custoFrete} placeholder="R$" className="form-control form-control-sm" onChange={onChange} /> 
                            </>
                        )
                    }  
            </div>
            <div className="row mb-2">
                <div className="form-check form-switch">                           
                    <input type="checkbox" name="taxaImport" value={values.taxaImport} className="form-check-input" onChange={onChange} />
                    <label className="form-label">Taxa de Importação</label>  
                </div>            
            </div>
            <div className="row mb-3">
                <input type="number" name="margemLucro" value={values.margemLucro} placeholder="Margem de Lucro" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row">
               <input type="submit" value={ props.idAtual === '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary" />
            </div>
        </form>    
        );
};