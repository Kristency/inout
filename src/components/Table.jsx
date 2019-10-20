import React, { Component } from 'react'

import './Table.css'

export class Table extends Component {
	render() {
		return (
			<div>
				<section>
					<div class="tbl-header">
						<table cellpadding="0" cellspacing="0" border="0">
							<thead>
								<tr>
									<th>TYPE</th>
									<th>PLAYER</th>
									<th>ID</th>
								</tr>
							</thead>
						</table>
					</div>
					<div class="tbl-content">
						<table cellpadding="0" cellspacing="0" border="0">
							<tbody>
								<tr>
									<td>BYTES 32</td>
									<td>Virat </td>
									<td>0x56697261740a0000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Rohit</td>
									<td>0x526f6869740a0a0a000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Mayank</td>
									<td>0x4d6179616e6b0a00000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Pujara </td>
									<td>0x50756a6172610000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Rahane </td>
									<td>0x526168616e650000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Jaddu </td>
									<td>0x4a61646475000000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Saha </td>
									<td>0x5361686100000000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Ashwin </td>
									<td>0x41736877696e0000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Shami </td>
									<td>0x5368616d69000000000000000000000000000000000000000000000000000000 </td>
								</tr>
								<tr>
									<td>BYTES 32</td>
									<td>Umesh </td>
									<td>0x556d657368000000000000000000000000000000000000000000000000000000</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		)
	}
}

export default Table
