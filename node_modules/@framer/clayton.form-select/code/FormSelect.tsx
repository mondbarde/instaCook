import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

// Inspired by Benjamin den Boer's Input Component
// https://store.framer.com/package/benjamin/input
// and Alexander Nasennik's Tag Component
// https://store.framer.com/package/deplodog/tag

// Define type of property
interface Props {
    options: string;
    separator: string;
    placeholder: boolean;
    placeholderText: string;
    fontSize: number;
    customFont: boolean;
    customFontFamily: string;
    textColor: string;
    focusColor: string;
    placeholderColor: string;
    iconColor: string;
    customIcon: boolean;
    icon: string;
    iconSize: number;
    paddingPerSide: boolean;
    padding: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
    bgColor: string;
    boxShadow: boolean;
}

export class FormSelect extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        // Size
        width: 240,
        height: 48,
        // Options
        options: "Option One, Option Two, Option Three, Option Four",
        separator: ",",
        // Text
        fontSize: 16,
        customFont: false,
        textColor: "#000",
        placeholder: true,
        placeholderText: "Select an Option",
        placeholderColor: "#999",
        // Icon
        iconColor: "#666",
        customIcon: false,
        icon: "",
        iconSize: .7,
        // Padding
        paddingPerSide: false,
        padding: 15,
        paddingTop: 0,
        paddingRight: 15,
        paddingBottom: 0,
        paddingLeft: 15,
        // Border
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        borderRadius: 2,
        focusColor: "#09F",
        // Background
        bgColor: "#FFF",
        // Background
        boxShadow: true,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        fontSize: {
            type: ControlType.Number,
            title: "Font Size",
            min: 1
        },
        customFont: { type: ControlType.Boolean, title: "Custom Font" },
        customFontFamily: {
            type: ControlType.String,
            title: "Font",
            hidden: (props) => props.customFont == false
        },
        options: { type: ControlType.String, title: "Options" },
        separator: { type: ControlType.String, title: "Separator" },
        placeholder: { type: ControlType.Boolean, title: "Placeholder" },
        placeholderText: {
            type: ControlType.String,
            title: " ",
            hidden: (props) => props.placeholder == false
        },
        textColor: {
            type: ControlType.Color,
            title: "Text",
        },
        iconColor: {
            type: ControlType.Color,
            title: "Icon Color",
            hidden: (props) => props.customIcon == true
        },
        iconSize: {
            type: ControlType.Number,
            title: "Icon Size",
            min: 0,
            max: 5,
            step: .1,
        },
        customIcon: { type: ControlType.Boolean, title: "Custom Icon" },
        icon: {
            type: ControlType.File,
            allowedFileTypes: ["png", "jpg", "svg"],
            title: "Icon Art",
            hidden: (props) => props.customIcon == false
        },
        padding: {
            type: ControlType.FusedNumber,
            toggleKey: "paddingPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding"
        },
        borderWidth: {
            type: ControlType.Number,
            title: "Border",
            min: 0,
            max: 6,
            step: 1,
            displayStepper: true
        },
        borderColor: {
            type: ControlType.Color,
            title: " ",
            hidden: (props) => props.borderWidth <= 0
        },
        focusColor: {
            type: ControlType.Color,
            title: "Focused",
            hidden: (props) => props.borderWidth <= 0
        },
        borderRadius: {
            type: ControlType.Number,
            title: "Radius",
            min: 0
        },
        bgColor: {
            type: ControlType.Color,
            title: "Background",
        },
        boxShadow: { type: ControlType.Boolean, title: "Shadow" },
    }

    // https://www.filamentgroup.com/lab/select-css.html
    StyledSelect = styled.select`
        -moz-appearance: none;
        -webkit-Appearance: none;
        appearance: none;
        display: block;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
        border-style: solid;
        margin: 0;
        background-repeat: no-repeat, repeat;
        &::-ms-expand {
            display: none;
        }
        &:hover {
            border-color: ${this.props.focusColor} !important;
        }
        &:focus {
            border-color: ${this.props.focusColor} !important;
            outline: none;
        }
    `

    render() {
        const {
            paddingPerSide,
            padding,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
        } = this.props;

        var optionTitleArray = this.props.options.split(this.props.separator);
        var optionArray = [];

        if (this.props.placeholder) {
            optionArray.push(
                <option key={i} value="" disabled selected>
                    {this.props.placeholderText}
                </option>
            );
        }
        for (var i = 0; i < optionTitleArray.length; i++) {
            if (optionTitleArray[i] == "") {
                optionTitleArray[i] = "Option";
            }
            optionArray.push(
                <option key={i} value="">
                    {optionTitleArray[i]}
                </option>
            );
        }

        const paddingValue = paddingPerSide
            ? `${paddingTop}px calc(${paddingRight}px + 30px) ${paddingBottom}px ${paddingLeft}px`
            : padding;

        return (
            <this.StyledSelect
                style={{
                    fontSize: this.props.fontSize,
                    fontFamily: this.props.customFont ? this.props.customFontFamily : "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                    color: this.props.textColor,
                    padding: paddingPerSide ? paddingValue : '0 ' + padding + 'px 0 ' + padding + 'px',
                    borderWidth: this.props.borderWidth,
                    borderColor: this.props.borderColor,
                    borderRadius: this.props.borderRadius,
                    backgroundColor: this.props.bgColor,
                    backgroundImage: this.props.customIcon ? "url('" + this.props.icon + "'), linear-gradient(to bottom, " + this.props.bgColor + " 0%, " + this.props.bgColor + " 100%)" : "url('data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%228%22%20viewBox%3D%220%200%2014%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%201L7%207L13%201%22%20stroke%3D%22" + this.props.iconColor + "%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A'), linear-gradient(to bottom, " + this.props.bgColor + " 0%, " + this.props.bgColor + " 100%)",
                    backgroundPosition: "right calc(" + this.props.padding + "px + " + this.props.iconSize * .3 + "em) top 50%, 0 0",
                    backgroundSize: this.props.iconSize + "em auto, 100%",
                    boxShadow: this.props.boxShadow ? " 0 1px 0 1px rgba(0, 0, 0, .04)" : "",
                }}>
                {optionArray}
            </this.StyledSelect>
        );
    }
}
