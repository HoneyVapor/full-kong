import "./ProgressStadistcis.css";

export const ProgressStadistics = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="progress-container pt-5">
            <div className="card bg-dark mb-5">
              <div className="card-header">
                <h3 className="progress-section-title"> TITULO_DE_SECCION </h3>
              </div>
              <div className="card-body text-white">
                {/* METER GRAFICA AQUI */}
                CHART
              </div>
            </div>
            Descripcion de lo que se trata esta seccion
          </div>
          <div className="progress-container pt-5">
            <div className="card bg-dark mb-5">
              <div className="card-header">
                <h3 className="progress-section-title"> TITULO_DE_SECCION </h3>
              </div>
              <div className="card-body text-white">
                {/* METER GRAFICA AQUI */}
                CHART
              </div>
            </div>
            Descripcion de lo que se trata esta seccion
          </div>
        </div>
      </div>
    </>
  );
};
