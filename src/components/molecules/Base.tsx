import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum.ts';
import { ReactNode } from 'react';
import Sidebar from './Sidebar.tsx';
import TopBar from './TopBar.tsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function Base(props: IProps) {
  const location = useLocation();

  function checkPage() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <TopBar />
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  className="flex-1"
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0}}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  {props.children}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        );
      default:
        return (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {props.children}
            </motion.div>
          </AnimatePresence>
        );
    }
  }

  return <main className="bg-base-background min-h-screen">{checkPage()}</main>;
}

interface IProps {
  type: PAGE_TYPE_ENUM;
  children: ReactNode;
}
