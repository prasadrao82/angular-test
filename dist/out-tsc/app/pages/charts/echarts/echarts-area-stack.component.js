"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var EchartsAreaStackComponent = /** @class */ (function () {
    function EchartsAreaStackComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsAreaStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    };
    EchartsAreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsAreaStackComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-echarts-area-stack',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], EchartsAreaStackComponent);
    return EchartsAreaStackComponent;
}());
exports.EchartsAreaStackComponent = EchartsAreaStackComponent;
//# sourceMappingURL=echarts-area-stack.component.js.map