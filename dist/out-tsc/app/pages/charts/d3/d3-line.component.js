"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var D3LineComponent = /** @class */ (function () {
    function D3LineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        value: 7300,
                    },
                    {
                        name: '2011',
                        value: 8940,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '2010',
                        value: 7870,
                    },
                    {
                        name: '2011',
                        value: 8270,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        value: 5002,
                    },
                    {
                        name: '2011',
                        value: 5800,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3LineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3LineComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-d3-line',
            template: "\n    <ngx-charts-line-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], D3LineComponent);
    return D3LineComponent;
}());
exports.D3LineComponent = D3LineComponent;
//# sourceMappingURL=d3-line.component.js.map