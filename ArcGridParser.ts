class ArcGridParser {

    private data: any;
    private nCols: any;
    private nRows: any;
    private xllcorner: any;
    private yllcorner: any;
    private cellSize: any;
    private dx: any;
    private dy: any;
    private noDataValue: any = -9999;

    constructor() { }

    public parseData(dataText: string) {

        this.data = [];
        var dataSet = dataText.split("\n");
        var startIndexData = 0;

        for (var i = 0; i < dataSet.length; i++) {
            if (dataSet[i].toLowerCase().indexOf("ncols") == -1) {
                dataSet.splice(i, 1);
            } else { 
                break;
            }
        }
        
        this.nCols = dataSet[0].trim().toLowerCase().split("ncols")[1] != null ? dataSet[0].trim().toLowerCase().split("ncols")[1] : 0;
        this.nRows = dataSet[1].trim().toLowerCase().split("nrows")[1] != null ? dataSet[1].trim().toLowerCase().split("nrows")[1] : 0;
        this.xllcorner = dataSet[2].trim().toLowerCase().split("xllcorner")[1] != null ? dataSet[2].trim().toLowerCase().split("xllcorner")[1] : 0;
        this.yllcorner = dataSet[3].trim().toLowerCase().split("yllcorner")[1] != null ? dataSet[3].trim().toLowerCase().split("yllcorner")[1] : 0;

        if (dataSet[3].trim().toLowerCase().split("cellsize")[1] == "cellsize") {
            this.cellSize = dataSet[4].trim().toLowerCase().split("cellsize")[1] != null ? dataSet[4].trim().toLowerCase().split("cellsize")[1] : 0;
            startIndexData = 5;
        } else {
            this.dx = dataSet[4].trim().toLowerCase().split("dx")[1] != null ? dataSet[4].trim().toLowerCase().split("dx")[1] : 0;
            this.dy = dataSet[5].trim().toLowerCase().split("dy")[1] != null ? dataSet[5].trim().toLowerCase().split("dy")[1] : 0;

            startIndexData = 6;
        }

        if (dataSet[startIndexData].trim().toLowerCase().split("nodata_value")[1] == "nodata_value") {
            this.noDataValue = dataSet[startIndexData].trim().toLowerCase().split("nodata_value")[1] != null ? dataSet[startIndexData].trim().toLowerCase().split("nodata_value")[1] : -9999;
            startIndexData++;
        }

        for (var i = startIndexData; i < dataSet.length-1; i++) {
            this.data.push(dataSet[i].split(" ").map((x) => {
                return parseFloat(x);
            })
            );
        }

        return this.data;

    }

    public getDX() {
        return this.dx;
    }

    public getDY() {
        return this.dy;
    }

    public getNoDataValue() {
        return this.noDataValue;
    }
}
