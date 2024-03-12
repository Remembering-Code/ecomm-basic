import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Content from '../views/Content';


const NavSide = ({ activeDept }) => {

    const [activeDepartment, setActiveDepartment] = useState(null);

    // handle click on a department link; if already clicked, clear department and close links
    const handleDepartmentClick = (department) => {
        setActiveDepartment((prevActiveDepartment) =>
            prevActiveDepartment === department ? null : department
        );
        activeDept(activeDepartment === department ? null : department);
    };

    // render department links
    const renderDepartmentLinks = () => {
        const departments = [
            { name: 'Department 1', links: ['Link A', 'Link B', 'Link C'] },
            { name: 'Department 2', links: ['Link X', 'Link Y', 'Link Z'] },
            { name: 'Department 3', links: ['Link C', 'Link A', 'Link T'] },
            { name: 'Department 4', links: ['Link D', 'Link O', 'Link G'] },
        ];

        return departments.map((department, index) => (
            <div key={index} className="department-container">
                <Link
                    value={activeDepartment}
                    to="#"
                    onClick={() => {
                        handleDepartmentClick(department.name);
                    }}
                    className={activeDepartment === department.name ? 'font-bold' : ''}
                > {department.name}
                </Link>

                {activeDepartment === department.name && (
                    <div className="links-container flex flex-col">
                        {department.links.map((link, index) => (
                            <Link key={index} to="#">{link} </Link>
                        ))}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div>
            <div className="bg-slate-100 w-56 h-full text-center">
                {renderDepartmentLinks()}
            </div>
        </div>
    );

}

export default NavSide;