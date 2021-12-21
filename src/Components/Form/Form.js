

export default function Form() {

    return(
        <form>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Título</label>
                <div className="col-sm-10">
                    <input type="text" name="title" placeholder="Fone de ouvido" className="form-control form-control-sm" />
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Imagem URL</label>
                <div className="col-sm-10">
                    <input type="url" name="imageUrl" placeholder="https://" className="form-control form-control-sm" />
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Estoque</label>
                <div className="col-sm-10">
                    <input type="number" name="stock" placeholder="5" className="form-control form-control-sm" />
                </div>
            </div>           
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Custo</label>
                <div className="col-sm-10">
                    <input type="number" name="custo" placeholder="R$" className="form-control form-control-sm" />
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Categoria</label>
                <div className="col-sm-10">
                    <select name="Categoria" className="form-select form-select-sm">

                    </select>
                </div>
            </div>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Tipo</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value="Clássico" />
                        <label className="form-check-label">Clássico</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="tipo" className="form-check-input" value="Premium" />
                        <label className="form-check-label">Premium</label>
                    </div>
                </div>
            </fieldset>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="col">
                        <div className="form-check form-switch">                           
                            <input type="checkbox" name="taxaImport" className="form-check-input" />
                            <label className="form-label">Taxa de Importação</label>              
                        </div>
                        <div className="col">
                            <input type="number" name="taxaImport"  placeholder="R$" className="form-control form-control-sm" />  
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="col">
                        <div className="form-check form-switch">                           
                            <input type="checkbox" name="taxaImport" role="switch" className="form-check-input" />
                            <label className="form-label">Frete Grátis</label>            
                        </div>
                        <div className="col">
                            <input type="number" name="custoFrete" placeholder="R$" className="form-control form-control-sm" />  
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Margem Lucro</label>
                <div className="col-sm-10">
                    <input type="number" name="margemLucro" placeholder="%" className="form-control form-control-sm" />
                </div>
            </div>
            <div className="d-grid gap-2">
               <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </form>    
        );
};