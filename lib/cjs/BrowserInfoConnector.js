"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useBrowserInfo_1 = __importDefault(require("./useBrowserInfo"));
function BrowserInfoConnector(props) {
    return react_1.default.createElement(react_1.default.Fragment, null, props.children(useBrowserInfo_1.default()));
}
exports.default = BrowserInfoConnector;
