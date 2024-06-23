import React from 'react';
import Image from 'next/image';
import yes from '../../../../public/images/home/yes.svg';
import no from '../../../../public/images/home/no.svg';

const TableHeader = ({ children }) => <th className="lg:px-10 px-5 lg:py-8 py-6">{children}</th>;

const TableCell = ({ children, className }) => <td className={`lg:px-10 px-5 lg:py-8 py-6 ${className}`}>{children}</td>;

const TableRow = ({ children }) => <tr className="border-b border-b-[#3c3c3c]">{children}</tr>;

const Table = () => {
    const tableData = [
        { label: 'Monthly Fees', values: ['$0', '$0', '$12', '$12'] },
        { label: 'Overdraft Fees', values: ['$0', '$0', '$34', '$10'] },
        { label: 'Early Pay*', values: [yes, yes, no, no] },
        { label: '3% Cash Back at Walmart', values: [yes, no, no, no] },
        { label: 'APY', values: ['5.00%', '2.00%', '0.01%', '0.01%'] },
    ];

    const headers = ['', 'One', 'Chime', 'Chase', 'Bank of America'];

    return (
        <div className="lg:mt-14 mt-8">
            <div className="overflow-x-auto">
                <table className="mx-auto text-center font-semibold w-full">
                    <thead className="border-b border-b-[#3c3c3c]">
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableHeader key={index}>{header}</TableHeader>
                            ))}
                        </TableRow>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-left">{row.label}</TableCell>
                                {row.values.map((value, idx) => (
                                    <TableCell key={idx}>{typeof value === 'string' ? value : <Image src={value} alt={value === yes ? 'Yes' : 'No'} className="mx-auto" />}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full block sm:pt-4 md:pt-0 text-center sm:text-right text-[16px] leading-[150%] mt-10">Comparison as of 01/16/2024</div>
        </div>
    );
};

export default Table;