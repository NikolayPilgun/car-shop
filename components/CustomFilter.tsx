"use client";

import { dataSearchName } from "@/data/dataSearch";
import { useState } from "react";
import FilterName from "./FilterName";

export default function CustomFilter() {
	const [nameSearch, setManuFacturer] = useState(dataSearchName[0]);
	function handleSearch(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSearch}>
			<div>
				<FilterName nameSearch={nameSearch} setManuFacturer={setManuFacturer} />
			</div>
		</form>
	);
}
