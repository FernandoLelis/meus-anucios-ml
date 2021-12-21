export default function Form() {

    return(
        <form>             
            <div className="row mb-3">
                <input type="text" name="title" placeholder="Título" className="form-control form-control-sm" />
            </div>
            <div className="row mb-3">
                <input type="url" name="imageUrl" placeholder="Imagem URL" className="form-control form-control-sm" />
            </div>
            <div className="row mb-3">
                <input type="number" name="stock" placeholder="Estoque" className="form-control form-control-sm" />
            </div>           
            <div className="row mb-3">
                <input type="number" name="custo" placeholder="Custo" className="form-control form-control-sm" />
            </div>
            <div className="row mb-3">
                <select name="Categoria" className="form-select form-select-sm">
                    <option>Categoria</option>
                </select>
            </div>
            <div className="row mb-3">
                <div className="col-auto">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value="Clássico" />
                        <label className="form-check-label">Clássico</label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value="Premium" />
                        <label className="form-check-label">Premium</label>
                    </div>
                    </div>
            
            </div>
            <div className="row mb-3">
                    <div className="form-check form-switch">                           
                        <input type="checkbox" name="taxaImport" role="switch" className="form-check-input" />
                        <label className="form-label">Frete Grátis</label>            
                    </div>
                    <input type="number" name="custoFrete" placeholder="R$" className="form-control form-control-sm" />   
            </div>
            <div className="row mb-2">
                <div className="form-check form-switch">                           
                    <input type="checkbox" name="taxaImport" className="form-check-input" />
                    <label className="form-label">Taxa de Importação</label>  
                </div>            
            </div>
            <div className="row mb-3">
                <input type="number" name="margemLucro" placeholder="Margem de Lucro" className="form-control form-control-sm" />
            </div>
            <div className="row">
               <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </form>    
        );
};