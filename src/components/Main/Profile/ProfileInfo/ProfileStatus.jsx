import React from "react";
import style from './ProfileInfo.module.css';

export class ProfileStatus extends React.Component {

	state = {
		editMode: false
	}
//методы activateEditMode и deactivateEditMode написаны разным синтаксисом
//activateEditMode при вызове надо bind на this
//deactivateEditMode - нет, потому что она написана с помощью синтаксиса стрелочной функции
	activateEditMode() {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}

	render() {
		return <div>
			{!this.state.editMode &&
				<div>
					<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
				</div>
			}
			{this.state.editMode &&
				<div>
					{/* autoFocus - метод сразу наводящий фокус курсора на элемент */}
					{/* onBlur - EventListener ухода фокуса курсора*/}
					<input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
				</div>
			}
		</div>
	}
}
