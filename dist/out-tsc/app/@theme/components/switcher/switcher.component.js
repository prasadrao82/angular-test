"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SwitcherComponent = /** @class */ (function () {
    function SwitcherComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    SwitcherComponent.prototype.isFirstValue = function () {
        return this.value === this.firstValue;
    };
    SwitcherComponent.prototype.isSecondValue = function () {
        return this.value === this.secondValue;
    };
    SwitcherComponent.prototype.currentValueLabel = function () {
        return this.isFirstValue()
            ? this.firstValueLabel
            : this.secondValueLabel;
    };
    SwitcherComponent.prototype.changeValue = function () {
        this.value = this.isFirstValue()
            ? this.secondValue
            : this.firstValue;
        this.valueChange.emit(this.value);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SwitcherComponent.prototype, "firstValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SwitcherComponent.prototype, "secondValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SwitcherComponent.prototype, "firstValueLabel", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SwitcherComponent.prototype, "secondValueLabel", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SwitcherComponent.prototype, "vertical", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SwitcherComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], SwitcherComponent.prototype, "valueChange", void 0);
    SwitcherComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-switcher',
            styleUrls: ['./switcher.component.scss'],
            template: "\n    <label class=\"switch-label\" [class.vertical]=\"vertical\">\n      <span class=\"first\" [class.active]=\"vertical || isFirstValue()\">\n        {{vertical ? currentValueLabel() : firstValueLabel}}\n      </span>\n\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"isSecondValue()\" (change)=\"changeValue()\">\n        <span class=\"slider\"></span>\n      </div>\n\n      <span\n        *ngIf=\"!vertical\"\n        class=\"second\"\n        [class.active]=\"isSecondValue()\"\n      >\n          {{secondValueLabel}}\n      </span>\n    </label>\n  ",
        })
    ], SwitcherComponent);
    return SwitcherComponent;
}());
exports.SwitcherComponent = SwitcherComponent;
//# sourceMappingURL=switcher.component.js.map