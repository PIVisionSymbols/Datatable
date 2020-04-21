(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "datatable",
		displayName: 'Data Table',
		iconUrl: 'Scripts/app/editor/symbols/ext/images/mountainwest.png',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150, 
				HeaderColor: "blue",
				
			} 
		},
		configOptions: function(){
			return[
				{
					title: "Format Symbol",
					mode: "format"
					
				}
			];
		}
	}
	
	
	symbolVis.prototype.init = function(scope, elem) { 
		this.onDataUpdate = dataUpdate;

		function dataUpdate(data){
			if(!data) return;
		
			scope.Values=data.Data[0].Values;
			
			//sporadic update data
			if(data.Data[0].Label){
				scope.Label=data.Data[0].Label;
			}
			if (data.Data[0].ErrorDescription){
				scope.ErrorDescription=data.Data[0].ErrorDescription;
			}else{
				scope.ErrorDescription="";
			}
		}
		
		
	};
	
	

	PV.symbolCatalog.register(definition); 

})(window.PIVisualization); 
