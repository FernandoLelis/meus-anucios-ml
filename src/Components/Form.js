import { useEffect, useState } from "react";
import categorias from "../Services/categorias.json";


// let initialValues = {
//     title: "",
//     imageUrl: "",
//     stock: "",
//     custo: "",
//     categoria: -1,
//     tipo: "",
//     freteGratis: false,
//     custoFrete: "",
//     taxaImport: false,
//     custoTaxaImport: "",    
//     margemLucro: "",
//   };
export default function Form(props) {

    let [values, setValues] = useState({});
    //const [freteGratis, setFreteGratis] = useState(false);
    

    useEffect( () => {
        if(props.idAtual === '') {
             setValues({
                ...{}
            })
        } else {
             setValues({
                ...props.dadosAnuncios[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosAnuncios]);
   
    const onChange = (ev) => {
        const { name, value, type, checked} = ev.target;
        const isCheckbox = type === 'checkbox'
        console.log('*** onChange ', name, value, checked);

        const data = values[name] || {};
        if (isCheckbox) {
            data[value] = checked
        }

        const newValue = (isCheckbox) ? data : value;
        setValues({ ...values, [name]: newValue });
    };

    // function toggle() {
    //     setFreteGratis(!freteGratis)
        
    // };

    const onSubmit = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = Object.fromEntries(formData);
        props.addEedit(values);
        //props.closeModal();

        console.log('*** onSubmit ', data);
    };
    
    return(
        <form autoComplete="off" onSubmit={onSubmit}>            
            <div className="row mb-3">
                <input type="text" name="title" value={values.title || ''} placeholder="Título" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <input type="url" name="imageUrl" value={values.imageUrl || ''} placeholder="Imagem URL" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <input type="number" name="stock" value={values.stock || ''} placeholder="Estoque" className="form-control form-control-sm" onChange={onChange} />
            </div>           
            <div className="row mb-3">
                <input type="number" name="custo" value={values.custo || ''} placeholder="Custo" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row mb-3">
                <select name="categoria" value={values.categoria || ''} className="form-select form-select-sm" onChange={onChange}>
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
                        <label className="form-check-label">
                            <input type="radio" name="tipo" className="form-check-input" value="Clássico" checked={values.tipo === "Clássico"} onChange={onChange} />
                            Clássico
                        </label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" name="tipo" className="form-check-input" value="Premium" checked={values.tipo === "Premium"} onChange={onChange} />
                            Premium
                        </label>
                    </div>
                </div>
            
            </div>
            <div className="row">
                <div className="form-check form-switch">                           
                    <input type="checkbox" name="taxas" value="frete" checked={values.taxas && values.taxas.frete} role="switch" className="form-check-input" onChange={onChange} />
                    <label className="form-label">Frete Grátis</label>            
                </div>
                {
                    (values.taxas && values.taxas.frete) && (
                        <div className="row mb-3">
                            <input type="number" name="custoFrete" value={values.custoFrete || ''} placeholder="R$" className="form-control form-control-sm" onChange={onChange} /> 
                        </div>
                    )
                }  
            </div>
            <div className="row">
                <div className="form-check form-switch">                           
                    <input type="checkbox" name="taxas" value="import" checked={values.taxas && values.taxas.import} className="form-check-input" onChange={onChange} />
                    <label className="form-label">Taxa de Importação</label>  
                </div> 
                {
                    (values.taxas && values.taxas.import) && (
                        <div className="row mb-3">
                            <input type="number" name="custoTaxaImport" value={values.custoTaxaImport || '' } placeholder="R$" className="form-control form-control-sm" onChange={onChange} /> 
                        </div>
                    )
                }           
            </div>
            <div className="row mb-3">
                <input type="number" name="margemLucro" value={values.margemLucro || ''} placeholder="Margem de Lucro" className="form-control form-control-sm" onChange={onChange} />
            </div>
            <div className="row">
               <input type="submit" value={ props.idAtual === '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary" />
            </div>
        </form>    
        );
};