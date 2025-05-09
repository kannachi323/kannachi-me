import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGit } from 'react-icons/fa';
import { motion } from 'framer-motion';


export const Route = createFileRoute('/menu/skills')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="absolute inset-0 z-[99999] w-screen h-screen bg-black/85 p-2 flex flex-col space-y-5 items-center">
      <div className="space-x-6 relative flex flex-row justify-center items-center w-full h-1/12  text-5xl">
        Skills
      </div>
      <div className="space-x-6 relative flex flex-row w-full h-1/2">
        <div className="grid grid-cols-1 grid-rows-4 w-1/4 h-full">
          <p className="flex items-center justify-center text-4xl">Languages</p>
          <p className="flex items-center justify-center text-4xl">Developer Tools</p>
          <p className="flex items-center justify-center text-4xl">Frameworks/Libraries</p>
          <p className="flex items-center justify-center text-4xl">Misc.</p>
        </div>
        <TechStack />
      </div>
      <div className="realtive flex flex-col justify-evenly items-center w-full h-1/4 space-y-5">
        <button className="w-1/2 text-center text-5xl bg-red-600 rounded-sm p-5">
          Show Labels
        </button>
        <Link to='/menu' className="w-1/2 text-center text-5xl bg-gray-600 rounded-sm p-5">
          Close
        </Link>
      </div>
    </div>
  )
}

function TechStack() {
  const [activeTech, setActiveTech] = useState<string|null>(null);

  const toggleTech = (tech : string) => {
    setActiveTech(activeTech === tech ? null : tech); // Toggle on/off
  };

  return (
    <div className="grid grid-cols-5 grid-rows-4 w-1/2 h-full">
      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaReact size={50} onClick={() => toggleTech('react')} />
        {activeTech === 'react' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            React - A JavaScript library for building user interfaces.
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaReact size={50} onClick={() => toggleTech('react')} />
        {activeTech === 'react' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            React - A JavaScript library for building user interfaces.
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaReact size={50} onClick={() => toggleTech('react')} />
        {activeTech === 'react' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            React - A JavaScript library for building user interfaces.
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaNodeJs size={50} onClick={() => toggleTech('node')} />
        {activeTech === 'node' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaHtml5 size={50} onClick={() => toggleTech('html')} />
        {activeTech === 'html' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            HTML - The standard markup language for documents designed to be displayed in a web browser.
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaCss3 size={50} onClick={() => toggleTech('css')} />
        {activeTech === 'css' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            CSS - Style sheet language used for describing the presentation of a document written in HTML.
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaGit size={50} onClick={() => toggleTech('git')} />
        {activeTech === 'git' && (
          <motion.div
            className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            Git - A distributed version control system.
          </motion.div>
        )}
      </motion.div>
    </div>

  );
}
